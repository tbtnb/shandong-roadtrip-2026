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
function pointer(target, type, x, y, pointerType = 'mouse') {
  const event = new window.Event(type, {bubbles: true});
  Object.assign(event, {button: 0, pointerType, clientX: x, clientY: y});
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
test('native touch path rotates from canvas and city labels, preserves scroll/pinch and cancels',()=>{
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
