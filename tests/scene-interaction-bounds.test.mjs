// CPU-only interaction / projection regression checks. No browser or WebGL is used.
// Run: node --test tests/scene-interaction-bounds.test.mjs
// These checks do not establish visual quality, font layout, or native touch scrolling.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import * as Three from 'three';

const dom = new JSDOM('<div id="scene-test-root"></div>');
globalThis.window = dom.window;
globalThis.document = dom.window.document;
let callbackId = 0;
let now = 0;
// Drive click suppression deadlines deterministically, without real sleeps.
Object.defineProperty(globalThis, 'performance', {configurable: true, value: {now: () => now}});
const callbacks = new Map();
globalThis.requestAnimationFrame = callback => {
  callbacks.set(++callbackId, callback);
  return callbackId;
};
globalThis.cancelAnimationFrame = id => callbacks.delete(id);
globalThis.ResizeObserver = class { observe() {} disconnect() {} };
globalThis.IntersectionObserver = class { observe() {} disconnect() {} };
let lastScene, lastCamera, dimensions;
class FakeRenderer {
  constructor() {
    this.domElement = document.createElement('canvas');
    this.domElement.getBoundingClientRect = () => dimensions;
    this.shadowMap = {};
    this.info = {render: {triangles: 0}};
  }
  setClearColor() {}
  setPixelRatio() {}
  setSize() {}
  dispose() {}
  render(scene, camera) {
    lastScene = scene;
    lastCamera = camera;
    // Match the real renderer's final camera/world matrix refresh. Labels must
    // already have used these same matrices before this render call.
    camera.updateMatrixWorld();
    scene.updateMatrixWorld();
  }
}
globalThis.__COASTAL_INTERACTION_THREE__ = {...Three, WebGLRenderer: FakeRenderer};
const source = fs.readFileSync(new URL('../src/scene.js', import.meta.url), 'utf8')
  .replace("import * as THREE from 'three';", 'const THREE = globalThis.__COASTAL_INTERACTION_THREE__;')
  .replace("'three/addons/utils/BufferGeometryUtils.js'", JSON.stringify(pathToFileURL(path.resolve('node_modules/three/examples/jsm/utils/BufferGeometryUtils.js')).href));
// Import in memory: the production source and checkout remain untouched.
const {createScene} = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const root = document.getElementById('scene-test-root');
root.getBoundingClientRect = () => dimensions;
function openScene(width, height, options = {}) {
  dimensions = {width, height, left: 0, top: 0};
  const api = createScene(root, {reducedMotion: true, ...options});
  // jsdom cannot measure fonts. Supply deliberately conservative DOM dimensions
  // so collision checks also cover the taller active label and its subtitle.
  root.querySelectorAll('.coastal-city-tag').forEach(label => {
    Object.defineProperties(label, {
      offsetWidth: {get: () => label.dataset.selected === 'true' ? 140 : 90},
      offsetHeight: {get: () => label.dataset.selected === 'true' ? 52 : 44},
    });
  });
  api.selectCity('weihai');
  return api;
}
function closeScene(api) {
  api.dispose();
  callbacks.clear();
  assert.equal(root.childElementCount, 0);
}
function advanceFrames(count = 190) {
  for (let i = 0; i < count; i++) {
    now += 1000 / 60;
    const pending = [...callbacks.values()];
    callbacks.clear();
    pending.forEach(callback => callback(now));
  }
}
function pointer(target, type, x, y, pointerType = 'mouse', pointerId = 1) {
  const event = new window.Event(type, {bubbles: true});
  Object.assign(event, {button: 0, pointerType, pointerId, clientX: x, clientY: y});
  target.dispatchEvent(event);
}
function dragToLimit(yawSign, pitchSign) {
  const canvas = root.querySelector('canvas');
  pointer(canvas, 'pointerdown', 100, 100);
  pointer(window, 'pointermove', 100 - yawSign * 200, 100 + pitchSign * 150);
  pointer(window, 'pointerup', 100 - yawSign * 200, 100 + pitchSign * 150);
  advanceFrames();
}
function projectedBounds() {
  const bounds = {minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity};
  lastScene.traverse(object => {
    if (!object.isMesh || object.material.type === 'ShadowMaterial') return;
    const positions = object.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const point = new Three.Vector3().fromBufferAttribute(positions, i)
        .applyMatrix4(object.matrixWorld).project(lastCamera);
      bounds.minX = Math.min(bounds.minX, point.x);
      bounds.maxX = Math.max(bounds.maxX, point.x);
      bounds.minY = Math.min(bounds.minY, point.y);
      bounds.maxY = Math.max(bounds.maxY, point.y);
    }
  });
  return bounds;
}
function labelPositions() {
  return [...root.querySelectorAll('.coastal-city-tag')].map(label => ({
    city: label.dataset.city,
    x: parseFloat(label.style.left),
    y: parseFloat(label.style.top),
  }));
}
function assertStableLabels(api) {
  const before = labelPositions();
  const cameraBefore = lastCamera.matrixWorld.elements.slice();
  const selected = root.querySelector('[data-selected="true"]').dataset.city;
  api.selectCity(selected); // Request a second render without changing the camera.
  assert.deepEqual(lastCamera.matrixWorld.elements, cameraBefore);
  const after = labelPositions();
  for (let i = 0; i < before.length; i++) {
    assert.ok(Math.abs(before[i].x - after[i].x) < .01, `${before[i].city} X required a second frame to catch up`);
    assert.ok(Math.abs(before[i].y - after[i].y) < .01, `${before[i].city} Y required a second frame to catch up`);
  }
}
function assertTouchTargetsDontOverlap() {
  const boxes = [...root.querySelectorAll('.coastal-city-tag')].map(label => {
    const x = parseFloat(label.style.left), y = parseFloat(label.style.top);
    const halfWidth = label.offsetWidth / 2, halfHeight = Math.max(44, label.offsetHeight) / 2;
    return {city: label.dataset.city, left: x - halfWidth, right: x + halfWidth, top: y - halfHeight, bottom: y + halfHeight};
  });
  for (let i = 0; i < boxes.length; i++) {
    const a = boxes[i];
    assert.ok(a.left >= 0 && a.right <= dimensions.width, `${a.city} overflows horizontally`);
    assert.ok(a.top >= (dimensions.height < 420 ? 63 : 57) && a.bottom <= dimensions.height - 14, `${a.city} overlaps a reserved top/bottom area`);
    for (let j = i + 1; j < boxes.length; j++) {
      const b = boxes[j];
      const overlaps = a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
      assert.equal(overlaps, false, `${a.city} and ${b.city} touch targets overlap`);
    }
  }
}

test('single-frame reduced-motion rotate and reset keep HTML tags aligned', () => {
  const api = openScene(360, 370);
  try {
    assertStableLabels(api);
    assertTouchTargetsDontOverlap();
    api.rotate(1);
    assertStableLabels(api);
    assertTouchTargetsDontOverlap();
    api.rotate(1);
    assertStableLabels(api);
    assertTouchTargetsDontOverlap();
    api.reset();
    assertStableLabels(api);
    assertTouchTargetsDontOverlap();
  } finally { closeScene(api); }
});

function touch(target,type,points,changed=points,cancelable=true){
 const e=new window.Event(type,{bubbles:true,cancelable});
 Object.assign(e,{touches:points.map(([identifier,clientX,clientY])=>({identifier,clientX,clientY})),changedTouches:changed.map(([identifier,clientX,clientY])=>({identifier,clientX,clientY}))});
 target.dispatchEvent(e);return e;
}
test('CPU touch handler rotates from canvas and city labels, preserves scroll/pinch and cancels',()=>{
 const selected=[];const api=openScene(360,370,{onSelect:id=>selected.push(id)});
 try{
 const canvas=root.querySelector('canvas'),label=root.querySelector('.coastal-city-tag');
 assert.match(source,/touch-action:\s*pan-y/);
 const initial=lastCamera.matrixWorld.elements.slice();
 touch(canvas,'touchstart',[[1,100,100]]);
 assert.equal(touch(canvas,'touchmove',[[1,104,180]]).defaultPrevented,false);
 // Lock vertical intent even if a scrolling finger later drifts sideways.
 assert.equal(touch(canvas,'touchmove',[[1,260,185]]).defaultPrevented,false);
 advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
 touch(canvas,'touchcancel',[]);
 for(const target of [canvas,label]){
 api.reset();touch(target,'touchstart',[[1,100,100]]);
 assert.equal(touch(target,'touchmove',[[1,190,120]]).defaultPrevented,true);
 advanceFrames();assert.notDeepEqual(lastCamera.matrixWorld.elements,initial);
 touch(target,'touchend',[],[[1,190,120]]);
 target.dispatchEvent(new window.MouseEvent('click',{bubbles:true,cancelable:true,detail:1}));
 assert.equal(selected.length,0,'drag must not accidentally open city');
 }
 api.reset();touch(canvas,'touchstart',[[1,100,100]]);
 pointer(canvas,'pointerdown',100,100,'touch');pointer(window,'pointermove',200,100,'touch');
 advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial,'touch pointer stream is not handled twice');
 touch(canvas,'touchstart',[[1,100,100],[2,200,100]]);
 assert.equal(touch(canvas,'touchmove',[[1,70,100],[2,230,100]]).defaultPrevented,false);
 touch(canvas,'touchend',[[1,70,100]],[[2,230,100]]);
 touch(canvas,'touchmove',[[1,250,100]]);advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial,'pinch cannot become a one-finger rotation until a new gesture');
 touch(canvas,'touchend',[],[[1,250,100]]);
 touch(canvas,'touchstart',[[3,100,100]]);touch(canvas,'touchmove',[[3,170,100]]);touch(canvas,'touchcancel',[]);advanceFrames();
 const stopped=lastCamera.matrixWorld.elements.slice();touch(canvas,'touchmove',[[3,-300,100]]);advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,stopped);
 api.reset();touch(canvas,'touchstart',[[4,100,100]]);touch(canvas,'touchmove',[[4,190,100]],[[4,190,100]],false);advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
 // Keyboard city activation is never suppressed by a preceding touch drag.
 label.click();assert.equal(selected.length,1);
 touch(canvas,'touchend',[],[[4,190,100]]);
 touch(label,'touchstart',[[5,100,100]]);touch(label,'touchend',[],[[5,100,100]]);label.dispatchEvent(new window.MouseEvent('click',{bubbles:true,cancelable:true,detail:1}));assert.equal(selected.length,2,'a fresh tap after dragging is not swallowed');
 }finally{closeScene(api);}
});
test('mouse pointer cancellation and unrelated pointers do not continue a drag',()=>{
 const api=openScene(360,370);try{
 const canvas=root.querySelector('canvas');const initial=lastCamera.matrixWorld.elements.slice();
 pointer(canvas,'pointerdown',100,100);pointer(window,'pointermove',180,110);pointer(window,'pointercancel',180,110);advanceFrames();
 const stopped=lastCamera.matrixWorld.elements.slice();assert.notDeepEqual(stopped,initial);
 pointer(window,'pointermove',-300,200);advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,stopped);
 api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
 }finally{closeScene(api);}
});

function physicalClick(target) {
  const event = new window.MouseEvent('click', {bubbles: true, cancelable: true, detail: 1});
  target.dispatchEvent(event);
  return event;
}

test('multi-touch stays blocked until all fingers end, including outside-scene fingers', () => {
  const selected = [], api = openScene(360,370,{onSelect:id=>selected.push(id)});
  try {
    const canvas=root.querySelector('canvas'),label=root.querySelector('.coastal-city-tag');
    const initial=lastCamera.matrixWorld.elements.slice();
    touch(label,'touchstart',[[1,100,100],[2,160,100]]);
    touch(label,'touchend',[[2,160,100]],[[1,100,100]]);
    // A scene-local touchstart can report a remaining finger whose touch began outside it.
    touch(label,'touchstart',[[2,160,100]],[[2,160,100]]);
    assert.equal(touch(label,'touchmove',[[2,250,100]]).defaultPrevented,false);
    advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
    assert.equal(physicalClick(label).defaultPrevented,true);
    assert.equal(selected.length,0);
    touch(label,'touchend',[],[[2,250,100]]);
    touch(canvas,'touchstart',[[3,100,100]]);
    assert.equal(touch(canvas,'touchmove',[[3,180,100]]).defaultPrevented,true);
    advanceFrames();assert.notDeepEqual(lastCamera.matrixWorld.elements,initial);
    touch(canvas,'touchend',[],[[3,180,100]]);
    touch(label,'touchstart',[[4,100,100]]);touch(label,'touchend',[],[[4,100,100]]);
    assert.equal(physicalClick(label).defaultPrevented,false);assert.equal(selected.length,1);
  } finally {closeScene(api);}
});

test('outside-scene second finger and partial touchcancel block the remaining finger', () => {
  const selected=[],api=openScene(360,370,{onSelect:id=>selected.push(id)});
  try {
    const label=root.querySelector('.coastal-city-tag'),outside=document.body;
    const initial=lastCamera.matrixWorld.elements.slice();
    touch(label,'touchstart',[[1,100,100]]);
    touch(outside,'touchstart',[[1,100,100],[2,300,500]],[[2,300,500]]);
    assert.equal(touch(label,'touchmove',[[1,190,100],[2,300,500]]).defaultPrevented,false);
    touch(outside,'touchcancel',[[1,100,100]],[[2,300,500]]);
    touch(label,'touchmove',[[1,190,100]]);advanceFrames();
    assert.deepEqual(lastCamera.matrixWorld.elements,initial);
    assert.equal(physicalClick(label).defaultPrevented,true);assert.equal(selected.length,0);
    touch(outside,'touchend',[],[[1,190,100]]);
    touch(label,'touchstart',[[3,100,100]]);
    assert.equal(touch(label,'touchmove',[[3,180,100]]).defaultPrevented,true);
    touch(label,'touchcancel',[],[[3,180,100]]);advanceFrames();
    const stopped=lastCamera.matrixWorld.elements.slice();
    touch(label,'touchmove',[[3,-300,100]]);advanceFrames();
    assert.deepEqual(lastCamera.matrixWorld.elements,stopped);
  } finally {closeScene(api);}
});

test('long scroll and browser-owned gestures suppress clicks until release', () => {
  const selected = [], api = openScene(360,370,{onSelect:id=>selected.push(id)});
  try {
    const label=root.querySelector('.coastal-city-tag');
    const initial=lastCamera.matrixWorld.elements.slice();
    for (const mode of ['scroll','noncancelable','multi']) {
      touch(label,'touchstart',[[1,100,100]]);
      if(mode==='scroll')assert.equal(touch(label,'touchmove',[[1,102,180]]).defaultPrevented,false);
      if(mode==='noncancelable')assert.equal(touch(label,'touchmove',[[1,180,102]],undefined,false).defaultPrevented,false);
      if(mode==='multi')touch(label,'touchstart',[[1,100,100],[2,180,100]]);
      advanceFrames(90); // > 800ms, while the same gesture is still active.
      assert.deepEqual(lastCamera.matrixWorld.elements,initial,mode);
      assert.equal(physicalClick(label).defaultPrevented,true,mode+' active click');
      assert.equal(selected.length,0);
      touch(label,'touchend',[],[[1,100,180],[2,180,100]]);
      assert.equal(physicalClick(label).defaultPrevented,true,mode+' release click');
      // Keyboard activation remains available during suppression.
      label.click();assert.equal(selected.length,1);selected.length=0;
    }
  } finally {closeScene(api);}
});

test('mouse and pen can drag from a city label, ignore unrelated pointers, and reset', () => {
  const selected = [], api = openScene(360,370,{onSelect:id=>selected.push(id)});
  try {
    const label=root.querySelector('.coastal-city-tag');
    const initial=lastCamera.matrixWorld.elements.slice();
    for (const kind of ['mouse','pen']) {
      pointer(label,'pointerdown',100,100,kind,11);
      pointer(window,'pointermove',200,120,kind,12);advanceFrames();
      assert.deepEqual(lastCamera.matrixWorld.elements,initial,'unrelated pointer');
      pointer(window,'pointermove',190,120,kind,11);advanceFrames();
      assert.notDeepEqual(lastCamera.matrixWorld.elements,initial,kind+' label drag');
      pointer(window,'pointerup',190,120,kind,11);
      assert.equal(physicalClick(label).defaultPrevented,true);assert.equal(selected.length,0);
      api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
      pointer(label,'pointerdown',100,100,kind,11);
      pointer(window,'pointerup',100,100,kind,11);
      physicalClick(label);assert.equal(selected.length,1,kind+' fresh click');selected.length=0;
      pointer(label,'pointerdown',100,100,kind,11);
      pointer(window,'pointermove',190,120,kind,11);pointer(window,'pointercancel',190,120,kind,11);advanceFrames();
      const stopped=lastCamera.matrixWorld.elements.slice();
      pointer(window,'pointermove',-300,200,kind,11);advanceFrames();
      assert.deepEqual(lastCamera.matrixWorld.elements,stopped,kind+' canceled');
      api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
    }
  } finally {closeScene(api);}
});

function sceneState() {
  const car=lastScene.getObjectByName('route-car'),route=lastScene.getObjectByName('day-route-highlight');
  return {selected:root.querySelector('[data-selected="true"]').dataset.city,
    carPosition:car.position.toArray(),carRotation:car.rotation.toArray(),
    routeChildren:route.children.map(x=>x.uuid)};
}
function assertFiniteCamera() {
  assert.ok(lastCamera.position.toArray().every(Number.isFinite));
  assert.ok(lastCamera.matrixWorld.elements.every(Number.isFinite));
  assert.ok(lastCamera.projectionMatrix.elements.every(Number.isFinite));
  assert.ok(lastCamera.near>0 && lastCamera.far>lastCamera.near);
}

test('immersive Perspective mode roundtrip preserves selected city, car and day route',()=>{
 const api=openScene(360,370);
 try{
   api.selectCity('qingdao');api.setDayRoute('qingdao','weihai');
   const before=sceneState();
   assert.equal(lastCamera.isOrthographicCamera,true);
   const overview=lastCamera.matrixWorld.elements.slice();
   api.setViewMode('immersive');assert.equal(lastCamera.isPerspectiveCamera,true);assertFiniteCamera();
   assert.deepEqual(sceneState(),before);
   api.rotate(1);advanceFrames();assertFiniteCamera();
   api.setViewMode('overview');assert.equal(lastCamera.isOrthographicCamera,true);assertFiniteCamera();
   assert.deepEqual(sceneState(),before);
   api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,overview);
   api.setViewMode('immersive');const immersive=lastCamera.matrixWorld.elements.slice();
   api.rotate(-1);advanceFrames();assert.notDeepEqual(lastCamera.matrixWorld.elements,immersive);
   api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,immersive);
   assert.deepEqual(sceneState(),before);
 }finally{closeScene(api);}
});

test('immersive city focus is finite, low to the ground, and faces its landmark',()=>{
 for(const [width,height] of [[360,370],[1280,530]]){
 const api=openScene(width,height,{viewMode:'immersive'});
 try{
   for(const id of ['wuhu','lianyungang','rizhao','qingdao','weihai']){
     const previous=lastCamera.position.toArray();api.selectCity(id);assertFiniteCamera();
     assert.equal(lastCamera.isPerspectiveCamera,true);
     assert.equal(lastCamera.name,'coastal-immersive-camera');
     assert.equal(lastCamera.userData.focusCity,id);
     assert.ok(Math.abs(lastCamera.aspect-width/height)<1e-9);
     assert.ok(Array.isArray(lastCamera.userData.focusPoint));
     const focus=new Three.Vector3(...lastCamera.userData.focusPoint),eye=lastCamera.position;
     assert.ok(focus.toArray().every(Number.isFinite));
     assert.ok(eye.y-lastCamera.userData.groundHeight>0 && eye.y-lastCamera.userData.groundHeight<1.4,'eye remains at walking height');
     const toward=focus.clone().sub(eye),forward=lastCamera.getWorldDirection(new Three.Vector3());
     assert.ok(toward.dot(forward)>0,'landmark is in front of the viewer');
     assert.ok(Math.abs(toward.y)/Math.max(.001,Math.hypot(toward.x,toward.z))<.65,'view is shallow rather than top-down');
     const projectedFocus=focus.clone().project(lastCamera);
     assert.ok(Math.abs(projectedFocus.x)<1 && Math.abs(projectedFocus.y)<1 && projectedFocus.z>-1 && projectedFocus.z<1,'focused landmark projects into visible frustum');
     assert.notDeepEqual(eye.toArray(),previous,'selectCity moves the viewer');
     const visibleLabels=[...root.querySelectorAll('.coastal-city-tag')].filter(x=>x.style.display!=='none'&&!x.hidden);
     assert.equal(visibleLabels.length,1);assert.equal(visibleLabels[0].dataset.city,id);
   }
   api.setViewMode('overview');assert.equal(lastCamera.name,'coastal-overview-camera');
   assert.equal([...root.querySelectorAll('.coastal-city-tag')].filter(x=>x.style.display!=='none'&&!x.hidden).length,5);
 }finally{closeScene(api);}
 }
});

test('immersive touch handlers rotate horizontally while scroll and multitouch preserve the view',()=>{
 const selected=[],api=openScene(360,370,{viewMode:'immersive',onSelect:id=>selected.push(id)});
 try{
   assert.equal(lastCamera.isPerspectiveCamera,true);assertFiniteCamera();
   const canvas=root.querySelector('canvas'),label=root.querySelector('[data-selected="true"]');
   const initial=lastCamera.matrixWorld.elements.slice();
   touch(canvas,'touchstart',[[1,100,100]]);
   assert.equal(touch(canvas,'touchmove',[[1,102,180]]).defaultPrevented,false);
   assert.equal(touch(canvas,'touchmove',[[1,240,190]]).defaultPrevented,false);
   touch(canvas,'touchend',[],[[1,240,190]]);advanceFrames();
   assert.deepEqual(lastCamera.matrixWorld.elements,initial);
   touch(label,'touchstart',[[2,100,100]]);
   assert.equal(touch(label,'touchmove',[[2,180,102]]).defaultPrevented,true);
   advanceFrames();assert.notDeepEqual(lastCamera.matrixWorld.elements,initial);assertFiniteCamera();
   touch(label,'touchend',[],[[2,180,102]]);physicalClick(label);assert.equal(selected.length,0);
   api.reset();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
   touch(canvas,'touchstart',[[3,100,100]]);
   touch(document.body,'touchstart',[[3,100,100],[4,300,500]],[[4,300,500]]);
   touch(document.body,'touchend',[[3,100,100]],[[4,300,500]]);
   assert.equal(touch(canvas,'touchmove',[[3,240,100]]).defaultPrevented,false);
   advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,initial);
   touch(canvas,'touchend',[],[[3,240,100]]);
   touch(label,'touchstart',[[5,100,100]]);touch(label,'touchend',[],[[5,100,100]]);
   physicalClick(label);assert.equal(selected.length,1);
 }finally{closeScene(api);}
});

test('switching view mode cancels active drag and preserves a blocked multitouch gesture',()=>{
 const selected=[],api=openScene(360,370,{viewMode:'immersive',onSelect:id=>selected.push(id)});
 try{
   const canvas=root.querySelector('canvas'),label=root.querySelector('[data-selected="true"]');
   touch(canvas,'touchstart',[[1,100,100]]);touch(canvas,'touchmove',[[1,180,100]]);advanceFrames();
   api.setViewMode('overview');const overview=lastCamera.matrixWorld.elements.slice();
   touch(canvas,'touchmove',[[1,260,100]]);advanceFrames();
   assert.deepEqual(lastCamera.matrixWorld.elements,overview);
   touch(canvas,'touchend',[],[[1,260,100]]);
   touch(canvas,'touchstart',[[2,100,100],[3,200,100]]);
   api.setViewMode('immersive');const blocked=lastCamera.matrixWorld.elements.slice();
   touch(canvas,'touchend',[[2,100,100]],[[3,200,100]]);
   assert.equal(touch(canvas,'touchmove',[[2,260,100]]).defaultPrevented,false);
   advanceFrames();assert.deepEqual(lastCamera.matrixWorld.elements,blocked);
   physicalClick(label);assert.equal(selected.length,0);
   touch(canvas,'touchend',[],[[2,260,100]]);
   touch(label,'touchstart',[[4,100,100]]);touch(label,'touchend',[],[[4,100,100]]);
   physicalClick(label);assert.equal(selected.length,1);
 }finally{closeScene(api);}
});

test('normal-motion journey transition advances over frames and settles when dynamics are paused',()=>{
 const api=openScene(360,370,{reducedMotion:false});
 try{
   api.setMotion(false);const overview=lastCamera.position.toArray();
   api.setViewMode('immersive');advanceFrames(12);
   assertFiniteCamera();assert.equal(lastCamera.userData.transitioning,true);const middle=lastCamera.position.toArray();
   assert.notDeepEqual(middle,overview,'journey progresses over frames');
   advanceFrames(100);assertFiniteCamera();
   assert.equal(lastCamera.isPerspectiveCamera,true);assert.equal(lastCamera.userData.transitioning,false);
   const final=lastCamera.matrixWorld.elements.slice();
   assert.notDeepEqual(lastCamera.position.toArray(),middle,'journey has an intermediate camera position');
   assert.ok(lastCamera.position.y<3,'journey finishes at walking height');
   advanceFrames(90);assert.deepEqual(lastCamera.matrixWorld.elements,final,'paused dynamics cannot strand transition or keep camera moving');
 }finally{closeScene(api);}
});

test('city, mode and reset interrupt an in-flight journey safely',()=>{
 const api=openScene(360,370,{reducedMotion:false});
 try{
   api.setMotion(false);api.setDayRoute('qingdao','weihai');
   const route=sceneState();
   api.setViewMode('immersive');advanceFrames(8);api.selectCity('qingdao');advanceFrames(110);
   assertFiniteCamera();assert.equal(lastCamera.userData.focusCity,'qingdao');assert.ok(lastCamera.position.y<3);
   assert.deepEqual(sceneState().carPosition,route.carPosition);assert.deepEqual(sceneState().routeChildren,route.routeChildren);
   api.setViewMode('overview');advanceFrames(8);api.setViewMode('immersive');advanceFrames(8);api.reset();advanceFrames(110);
   assertFiniteCamera();assert.equal(lastCamera.isPerspectiveCamera,true);assert.equal(lastCamera.userData.focusCity,'qingdao');
   assert.equal(lastCamera.userData.transitioning,false);const reset=lastCamera.matrixWorld.elements.slice();advanceFrames(90);assert.deepEqual(lastCamera.matrixWorld.elements,reset);
   api.setViewMode('overview');advanceFrames(110);
   assertFiniteCamera();assert.equal(lastCamera.isOrthographicCamera,true);
   assert.equal(sceneState().selected,'qingdao');assert.deepEqual(sceneState().carPosition,route.carPosition);
 }finally{closeScene(api);}
});

for (const [width, height] of [[288, 348], [330, 348], [360, 370], [400, 370], [570, 440], [1280, 530]]) {
  test(`${width}×${height}: all allowed yaw/pitch corners keep the entire model in frame`, () => {
    const api = openScene(width, height);
    try {
      assertStableLabels(api);
      assertTouchTargetsDontOverlap();
      for (const yaw of [-1, 1]) for (const pitch of [-1, 1]) {
        api.reset();
        dragToLimit(yaw, pitch);
        const bounds = projectedBounds();
        const message = JSON.stringify({width, height, yaw, pitch, bounds});
        assert.ok(bounds.minX >= -1 && bounds.maxX <= 1 && bounds.minY >= -1 && bounds.maxY <= 1, message);
        assertStableLabels(api);
        for (const city of ['wuhu', 'lianyungang', 'rizhao', 'qingdao', 'weihai']) {
          api.selectCity(city);
          assertStableLabels(api);
          assertTouchTargetsDontOverlap();
        }
      }
    } finally { closeScene(api); }
  });
}
