import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {ROAD_POINTS,createRouteCurve} from './landmarks/route.js';
import {placeLandmarks} from './landmarks/layout.js';
import {createQingdaoLandmarks} from './landmarks/qingdao.js';
import {createWeihaiLandmarks} from './landmarks/weihai.js';
import {createStopoverLandmarks} from './landmarks/stopovers.js';

/** A small, real-time paper world. Everything in the diorama is modeled geometry. */
export function createScene(container, { onSelect = () => {}, onReady = () => {}, onError = () => {}, reducedMotion = false, viewMode = 'overview' } = {}) {
  if (!container.style.position) container.style.position = 'relative';
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.23;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.setAttribute('aria-label', '可旋转的立体海岸旅行手账，点击城市查看行程');
  renderer.domElement.setAttribute('role', 'img');
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y;outline:none;';
  container.appendChild(renderer.domElement);
  const contextLost=()=>{visible=false;onError();};renderer.domElement.addEventListener('webglcontextlost',contextLost);
  const overviewCamera = new THREE.OrthographicCamera(-7, 7, 8, -8, .1, 90);
  overviewCamera.name='coastal-overview-camera';
  const immersiveCamera = new THREE.PerspectiveCamera(60,1,.15,60);
  immersiveCamera.name='coastal-immersive-camera';
  let mode=viewMode==='immersive'?'immersive':'overview';
  let camera=mode==='immersive'?immersiveCamera:overviewCamera;
  const world = new THREE.Group(); scene.add(world);
  const staticRoot = new THREE.Group();staticRoot.name='static-world'; world.add(staticRoot);
  const movingRoot = new THREE.Group(); world.add(movingRoot);
  let seed = 271828;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const between = (a, b) => a + random() * (b - a);
  const materialCache = new Map();
  function mat(color, roughness = .95, extra = {}) {
    const key = `${color}|${roughness}|${JSON.stringify(extra)}`;
    if (!materialCache.has(key)) materialCache.set(key, new THREE.MeshStandardMaterial({ color, roughness, flatShading: true, ...extra }));
    return materialCache.get(key);
  }
  const M = {
    paper: mat('#f4e8c9'), paperEdge: mat('#e6d3ad'), paperLine: mat('#c9b491'), cover: mat('#a78763'),
    sand: mat('#e9d9ad'), paleSand: mat('#f4e5bd'), ochre: mat('#c9b28c'), cliff: mat('#c8b698'),
    rock: mat('#b7b39b'), rockLight: mat('#ddd1b3'), meadow: mat('#b9c28a'), meadowLight: mat('#cbd099'),
    leaf: mat('#78986c'), leafLight: mat('#a8b776'), leafDark: mat('#53785c'), pine: mat('#47796d'), pineLight: mat('#719684'),
    trunk: mat('#7e7055'), cream: mat('#fff1d3'), warmWhite: mat('#fff9e9'), blueRoof: mat('#568095'),
    navy: mat('#274b59'), roof: mat('#bd6344'), roofLight: mat('#d97d52'), coral: mat('#ee7950'),
    routeInk: mat('#a94631',.9), road: mat('#fff0d3'), water: mat('#439ba7', .67), shallow: mat('#91c7bf', .8), foam: mat('#edf1d8', .9),
    red: mat('#bb3e29'), gold: mat('#b49155', .38, { metalness: .55 }), bronze: mat('#927449', .42, { metalness: .38 }),
    car: mat('#3f7fa9', .55), rubber: mat('#3c4d4b'), window: mat('#274d60', .4), glass: mat('#a5cad0', .36),
  };
  function mesh(geo, material, x = 0, y = 0, z = 0, parent = staticRoot) {
    const o = new THREE.Mesh(geo, material); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; parent.add(o); return o;
  }
  const box = (w, h, d, material, x, y, z, parent) => mesh(new THREE.BoxGeometry(w, h, d), material, x, y, z, parent);
  const cyl = (r1, r2, h, material, x, y, z, sides = 8, parent) => mesh(new THREE.CylinderGeometry(r1, r2, h, sides), material, x, y, z, parent);
  const ico = (r, material, x, y, z, detail = 0, parent) => mesh(new THREE.IcosahedronGeometry(r, detail), material, x, y, z, parent);
  function line(points, material, radius = .015, parent = staticRoot, smooth = true) {
    const curve = smooth ? new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))) : new THREE.CurvePath();
    if (!smooth) for (let i = 1; i < points.length; i++) curve.add(new THREE.LineCurve3(new THREE.Vector3(...points[i - 1]), new THREE.Vector3(...points[i])));
    return mesh(new THREE.TubeGeometry(curve, Math.max(8, points.length * 4), radius, 4, false), material, 0, 0, 0, parent);
  }
  function flatPolygon(points, y, material, parent = staticRoot) {
    const shape = new THREE.Shape(); points.forEach((p, i) => i ? shape.lineTo(p[0], -p[1]) : shape.moveTo(p[0], -p[1])); shape.closePath();
    const g = new THREE.ShapeGeometry(shape); g.rotateX(-Math.PI / 2); return mesh(g, material, 0, y, 0, parent);
  }
  function roundedRect(w, d, r, y, depth, material) {
    const s = new THREE.Shape(), x = -w / 2, z = -d / 2;
    s.moveTo(x + r, z); s.lineTo(x + w - r, z); s.quadraticCurveTo(x + w, z, x + w, z + r);
    s.lineTo(x + w, z + d - r); s.quadraticCurveTo(x + w, z + d, x + w - r, z + d);
    s.lineTo(x + r, z + d); s.quadraticCurveTo(x, z + d, x, z + d - r); s.lineTo(x, z + r); s.quadraticCurveTo(x, z, x + r, z);
    const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 6 }); g.rotateX(-Math.PI / 2);
    return mesh(g, material, 0, y, 0);
  }
  // A physical notebook: cloth cover, layered stock, binding holes, and brass rings.
  roundedRect(10.22, 15.34, .24, -.12, .16, M.cover);
  roundedRect(10.0, 15.05, .18, .04, .25, M.paperEdge);
  for (let i = 0; i < 7; i++) roundedRect(10.015 - i * .011, 15.07 - i * .014, .18, .075 + i * .033, .014, i % 2 ? M.paper : M.paperEdge);
  roundedRect(9.97, 15.03, .19, .303, .045, M.paper);
  for (let i = 0; i < 16; i++) {
    const z = -7.12 + i * .947;
    cyl(.096, .096, .012, M.ochre, -4.57, .357, z, 16);
    const ring = mesh(new THREE.TorusGeometry(.36, .036, 7, 28), M.gold, -4.91, .31, z);
    ring.rotation.y = .03;
    // A second small glint keeps the binding legible at mobile scale.
    mesh(new THREE.TorusGeometry(.36, .012, 5, 26, Math.PI * .82), M.cream, -4.911, .327, z + .006);
  }
  // Slightly uneven paper margins and an engraved cover tab.
  box(.032, .019, 14.65, M.paperEdge, -4.27, .36, 0);
  box(.055, .1, .66, M.coral, 4.987, .2, 4.38);
  box(.055, .1, .54, M.blueRoof, 4.987, .2, 3.63);
  box(.055, .1, .54, M.meadow, 4.987, .2, 3.02);

  // Coast runs south (front) to north (back); this is an illustrated, non-navigational map.
  const coast = [[1.08,7.2],[1.4,6.62],[.96,6.0],[1.12,5.38],[1.62,4.8],[1.53,4.16],[1.14,3.64],[1.56,3.01],[1.75,2.46],[1.48,1.94],[1.79,1.35],[2.13,.81],[2.16,.18],[1.69,-.41],[1.08,-.96],[.93,-1.64],[1.31,-2.31],[1.34,-2.98],[1.82,-3.58],[2.56,-3.97],[2.96,-4.56],[3.05,-5.26],[2.52,-5.94],[2.28,-6.57],[1.39,-7.16]];
  const landBoundary = [[-4.08,7.21], ...coast, [-4.08,-7.16]];
  const seaBoundary = [...coast, [4.77,-7.17], [4.77,7.22]];
  flatPolygon(seaBoundary, .366, M.water);
  flatPolygon(landBoundary, .57, M.sand);
  const inner = coast.map(([x,z]) => [x-.12,z]);
  flatPolygon([[-4.08,7.12], ...inner,[-4.08,-7.12]], .583, M.paleSand);
  function coastX(z) {
    for (let i=1;i<coast.length;i++) if(z<=coast[i-1][1] && z>=coast[i][1]) {
      const p=coast[i-1],q=coast[i],t=(z-p[1])/(q[1]-p[1]);return p[0]+(q[0]-p[0])*t;
    } return 1.4;
  }
  // Triangular cliff faces give the shoreline a hand-folded paper edge.
  const cliffVerts=[], cliffColors=[];
  const cliffPalette=['#d4bd95','#e1c9a0','#bca68b','#e8d5b1','#cab48f'].map(x=>new THREE.Color(x));
  function triangle(a,b,c,color,verts=cliffVerts,colors=cliffColors) { verts.push(...a,...b,...c); for(let j=0;j<3;j++) colors.push(color.r,color.g,color.b); }
  for(let i=1;i<coast.length;i++) {
    const a=coast[i-1],b=coast[i],m=[(a[0]+b[0])/2+.04,(a[1]+b[1])/2];
    triangle([a[0],.582,a[1]],[b[0],.582,b[1]],[m[0]+.16,.369,m[1]],cliffPalette[i%5]);
    triangle([a[0],.582,a[1]],[m[0]+.16,.369,m[1]],[a[0]+.10,.366,a[1]],cliffPalette[(i+2)%5]);
    triangle([b[0],.582,b[1]],[b[0]+.10,.366,b[1]],[m[0]+.16,.369,m[1]],cliffPalette[(i+1)%5]);
  }
  function coloredGeometry(verts,colors) { const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();return g; }
  mesh(coloredGeometry(cliffVerts,cliffColors),mat('#ffffff',.96,{vertexColors:true,side:THREE.DoubleSide}));
  // A tessellated turquoise paper sea. It stays flat enough to read as a miniature.
  const seaVerts=[],seaColors=[],seaPalette=['#499eab','#3c91a1','#54a9b2','#63b4ba','#408f9e','#74bfc0'].map(x=>new THREE.Color(x));
  for(let z=-7.1;z<7.1;z+=.39) for(let x=.8;x<4.7;x+=.4) {
    if(x<Math.max(coastX(z),coastX(z+.39))+.11)continue;
    const a=[x,.371+between(0,.012),z],b=[Math.min(x+.4,4.76),.371+between(0,.012),z],c=[x,.371+between(0,.012),Math.min(z+.39,7.2)],d=[Math.min(x+.4,4.76),.371+between(0,.012),Math.min(z+.39,7.2)];
    triangle(a,c,b,seaPalette[Math.floor(random()*6)],seaVerts,seaColors);triangle(b,c,d,seaPalette[Math.floor(random()*6)],seaVerts,seaColors);
  }
  mesh(coloredGeometry(seaVerts,seaColors),mat('#ffffff',.8,{vertexColors:true}));
  line(coast.map(([x,z])=>[x+.105,.395,z]),M.foam,.023);
  line(coast.map(([x,z])=>[x+.22,.389,z]),mat('#a6d8cd'),.026);
  for(let i=0;i<64;i++) {
    const z=between(-6.9,7), x=between(Math.min(4.25,coastX(z)+.42),4.55), len=between(.12,.45);
    line([[x-len/2,.40,z],[x,.404,z-.025],[x+len/2,.401,z]], i%3?mat('#bde1d4'):M.foam, i%3?.012:.018);
  }

  function patch(x,z,rx,rz,material=M.meadow,y=.59) {
    const pts=[];for(let i=0;i<9;i++){const a=i/9*Math.PI*2,r=between(.82,1.1);pts.push([x+Math.cos(a)*rx*r,z+Math.sin(a)*rz*r]);}return flatPolygon(pts,y,material);
  }
  function rock(x,y,z,s=.25, material=M.rock) { const o=ico(s,material,x,y+s*.42,z);o.scale.set(1,between(.65,1.4),between(.65,1.1));o.rotation.set(between(0,2),between(0,6),between(0,2));return o; }
  function tree(x,z,s=1,type='round',ground=.59) {
    const h=.6*s;
    cyl(.035*s,.055*s,h,M.trunk,x,ground+h/2,z,5);
    if(type==='pine') {
      cyl(0,.29*s,.68*s,M.pine,x,ground+.61*s,z,5);
      cyl(0,.225*s,.58*s,M.pineLight,x,ground+.89*s,z,5);
      cyl(0,.155*s,.46*s,M.pine,x,ground+1.14*s,z,5);
    } else {
      const t=ico(.34*s,random()>.5?M.leaf:M.leafLight,x,ground+.65*s,z,1);t.scale.set(.85,1.23,.83);t.rotation.y=between(0,5);
      ico(.23*s,M.leafLight,x+.18*s,ground+.69*s,z-.02*s,0);
      ico(.23*s,M.leafDark,x-.13*s,ground+.58*s,z+.08*s,0);
      line([[x,ground+.43*s,z],[x+.15*s,ground+.67*s,z+.04*s]],M.trunk,.024*s);
    }
  }
  function grove(x,z,n,rx,rz,scale=1,y=.59) {
    patch(x,z,rx*1.18,rz*1.13,random()>.5?M.meadow:M.meadowLight,y+.002);
    for(let i=0;i<n;i++){const a=between(0,6.28),r=Math.sqrt(random());tree(x+Math.cos(a)*rx*r,z+Math.sin(a)*rz*r,between(.55,.94)*scale,random()>.67?'pine':'round',y);}
  }
  grove(.32,6.22,10,.59,.64,.70);
  // Folded inland hill range; distinct from the eastern shoreline.
  function mountain(x,z,s,y=.58) {
    const g=new THREE.ConeGeometry(s,s*1.27,5); const o=mesh(g,M.leafDark,x,y+s*.56,z);o.rotation.y=between(0,6);o.scale.z=.78;
    const o2=mesh(new THREE.ConeGeometry(s*.66,s*.76,4),M.leaf,x+s*.29,y+s*.34,z+.14);o2.rotation.y=.6;
    rock(x-s*.48,y,z+s*.42,s*.27,M.meadowLight);
  }
  // Inland space is reserved for the named landmark collection.
  for(let i=0;i<22;i++){let z=between(-6.8,6.9);rock(coastX(z)-between(.13,.39),.56,z,between(.06,.15),i%3?M.rockLight:M.rock);}

  // Shandong's northern cape is visibly higher than the flatter southern coast.
  const cape=[[.36,-4.0],[.9,-3.69],[1.85,-3.8],[2.6,-4.06],[2.89,-4.7],[2.96,-5.25],[2.43,-5.89],[2.18,-6.44],[1.34,-6.76],[.45,-6.2],[-.05,-5.5],[.02,-4.77]];
  flatPolygon(cape,1.21,M.paleSand);const cv=[],cc=[];
  for(let i=0;i<cape.length;i++){
    const a=cape[i],b=cape[(i+1)%cape.length],m=[(a[0]+b[0])/2,(a[1]+b[1])/2];
    triangle([a[0],1.21,a[1]],[b[0],1.21,b[1]],[m[0]+.16,.56,m[1]],cliffPalette[i%5],cv,cc);
    triangle([a[0],1.21,a[1]],[m[0]+.16,.56,m[1]],[a[0],.56,a[1]],cliffPalette[(i+2)%5],cv,cc);
    triangle([b[0],1.21,b[1]],[b[0],.56,b[1]],[m[0]+.16,.56,m[1]],cliffPalette[(i+3)%5],cv,cc);
  }
  mesh(coloredGeometry(cv,cc),mat('#ffffff',.95,{vertexColors:true,side:THREE.DoubleSide}));
  grove(.81,-6.03,6,.44,.38,.63,1.21);grove(2.11,-5.98,5,.29,.35,.62,1.21);
  grove(.23,-4.99,5,.27,.56,.60,1.21);
  for(let i=0;i<9;i++)rock(2.76+between(-.25,.45),.37,-4.85+between(-.5,.7),between(.12,.3),i%2?M.rockLight:M.rock);

  function roofGeometry(w,h,d) {
    const v=[[-w/2,0,-d/2],[w/2,0,-d/2],[0,h,-d/2],[-w/2,0,d/2],[w/2,0,d/2],[0,h,d/2]];
    const indices=[0,1,2,5,4,3,0,2,5,0,5,3,2,1,4,2,4,5,3,4,1,3,1,0];
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(indices.flatMap((_,i)=>v[indices[Math.floor(i/3)*3+(2-i%3)]]),3));g.computeVertexNormals();return g;
  }
  function house(x,z,{w=.43,d=.38,h=.48,roof=M.roof,y=.59,angle=0,wall=M.cream,floors=2,chimney=true}={}) {
    const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=angle;staticRoot.add(g);
    box(w,h,d,wall,0,h/2,0,g);
    mesh(roofGeometry(w+.095,.19,d+.095),roof,0,h-.005,0,g);
    // Thin eaves, stone plinth, actual recessed-looking window geometry.
    box(w+.11,.035,d+.11,roof,0,h-.015,0,g);
    box(w+.015,.035,d+.015,M.paperEdge,0,.022,0,g);
    const rows=Math.min(floors,3),columns=w>.5?3:2;
    for(let row=0;row<rows;row++)for(let col=0;col<columns;col++) {
      const xx=(col-(columns-1)/2)*w*.32,yy=h*(.29+row*.31);
      box(.061,.094,.014,M.navy,xx,yy,d/2+.005,g);
      box(.075,.012,.024,M.warmWhite,xx,yy-.051,d/2+.012,g);
      box(.012,.09,.019,M.cream,xx,yy,d/2+.015,g);
    }
    for(let row=0;row<rows;row++)box(.013,.09,.065,M.navy,w/2+.003,h*(.29+row*.31),0,g);
    box(.081,.139,.023,M.trunk,-w*.23,.069,d/2+.012,g);
    if(chimney)box(.054,.16,.075,M.cream,w*.25,h+.115,-d*.12,g);
    return g;
  }
  // Qingdao: a compact red-roof quarter, stone cathedral, and recognizable May Wind.
  patch(-.91,-.62,1.03,.89,M.meadowLight);
  house(-1.16,-.32,{w:.58,d:.45,h:.70,angle:-.13});
  house(-.48,-.30,{w:.43,d:.42,h:.58,angle:.05,roof:M.roofLight});
  house(-1.49,-.95,{w:.5,d:.4,h:.69,angle:-.13});
  house(-.80,-1.05,{w:.51,d:.4,h:.78,angle:-.13});
  house(-.40,-1.63,{w:.38,d:.36,h:.62,angle:-.1});
  house(-1.72,.38,{w:.48,d:.39,h:.48,angle:.04,roof:M.roofLight});
  house(-1.10,.53,{w:.44,d:.38,h:.43,angle:.12});
  house(-.95,.43,{w:.39,d:.36,h:.45,angle:.12});
  const cathedral=new THREE.Group();cathedral.position.set(-1.58,.59,-2.05);cathedral.rotation.y=.08;staticRoot.add(cathedral);
  box(.63,.65,.58,M.cream,0,.325,0,cathedral);mesh(roofGeometry(.68,.3,.63),M.roof,0,.65,0,cathedral);
  for(const x of [-.29,.29]) {
    box(.22,1.1,.28,M.cream,x,.55,.29,cathedral);
    cyl(0,.185,.4,M.roof,x,1.3,.29,4,cathedral).rotation.y=Math.PI/4;
    box(.065,.15,.016,M.navy,x,.82,.437,cathedral);box(.055,.12,.015,M.navy,x,.57,.438,cathedral);
    box(.013,.13,.013,M.gold,x,1.54,.29,cathedral);box(.07,.013,.013,M.gold,x,1.565,.29,cathedral);
  }
  cyl(.071,.071,.018,M.navy,0,.64,.308,12,cathedral).rotation.x=Math.PI/2;
  box(.17,.25,.014,M.trunk,0,.125,.306,cathedral);
  for(let i=0;i<4;i++)box(.49+i*.065,.035,.115,M.paperEdge,0,.10-i*.025,.48+i*.08,cathedral);
  tree(-.90,-1.58,.5,'pine');
  // Stone seafront plaza and wooden boardwalk.
  cyl(.58,.6,.065,M.paperEdge,1.25,.61,.32,32);
  cyl(.51,.51,.015,M.cream,1.25,.657,.32,32);
  cyl(.34,.39,.08,M.ochre,1.25,.70,.32,24);
  const mayWind = new THREE.Group(); mayWind.position.set(1.25,.76,.32);staticRoot.add(mayWind);
  cyl(.13,.17,.08,M.red,0,.04,0,12,mayWind);
  // May Wind's steel ribbon has a rectangular section and expands at mid-height.
  // Modeled after the separately generated, real-landmark-checked asset study.
  const ribbonVertices=[];
  const spiralRings=[];
  for(let i=0;i<=168;i++){
    const t=i/168,a=t*Math.PI*2*4.65,r=.102+.267*Math.pow(Math.sin(t*Math.PI),1.3),y=.13+t*.82;
    spiralRings.push([[Math.cos(a)*(r-.038),y-.027,Math.sin(a)*(r-.038)],[Math.cos(a)*(r+.038),y-.027,Math.sin(a)*(r+.038)],[Math.cos(a)*(r+.038),y+.027,Math.sin(a)*(r+.038)],[Math.cos(a)*(r-.038),y+.027,Math.sin(a)*(r-.038)]]);
  }
  for(let i=1;i<spiralRings.length;i++)for(let k=0;k<4;k++){
    const j=(k+1)%4,a=spiralRings[i-1][k],b=spiralRings[i-1][j],c=spiralRings[i][k],d=spiralRings[i][j];
    for(const pt of [a,b,c,b,d,c])ribbonVertices.push(...pt);
  }
  const spiralGeometry=new THREE.BufferGeometry();spiralGeometry.setAttribute('position',new THREE.Float32BufferAttribute(ribbonVertices,3));spiralGeometry.computeVertexNormals();
  mesh(spiralGeometry,mat('#d8482c',.83,{side:THREE.DoubleSide}),0,0,0,mayWind);
  box(.13,.7,.13,M.red,0,.41,0,mayWind);
  box(.084,.36,.083,M.red,.026,.875,.018,mayWind);
  box(.056,.23,.06,mat('#e34d2d'),-.043,.84,-.015,mayWind);
  const pier=new THREE.Group();pier.position.set(1.79,.53,-.15);pier.rotation.y=-.08;staticRoot.add(pier);
  box(1.32,.075,.27,M.ochre,.58,.02,0,pier);
  for(let i=0;i<13;i++)box(.018,.012,.272,M.paperEdge,.01+i*.1,.065,0,pier);
  for(let i=0;i<5;i++)for(const z of [-.105,.105]){
    cyl(.027,.03,.37,M.trunk,i*.28,.0,z,5,pier);cyl(.018,.018,.16,M.cream,i*.28,.15,z,5,pier);
  }
  for(const z of [-.105,.105])box(1.20,.023,.023,M.cream,.56,.23,z,pier);

  function lighthouse(x,z,y=1.21,s=1,redRoof=true) {
    const g=new THREE.Group();g.position.set(x,y,z);g.scale.setScalar(s);staticRoot.add(g);
    cyl(.22,.28,.075,M.paperEdge,0,.037,0,12,g);
    cyl(.14,.22,.93,M.warmWhite,0,.54,0,10,g);
    cyl(.23,.23,.055,M.paperEdge,0,1.02,0,14,g);
    cyl(.14,.14,.23,M.navy,0,1.17,0,10,g);
    cyl(.13,.13,.17,M.glass,0,1.18,0,10,g);
    for(let i=0;i<8;i++){const a=i/8*Math.PI*2;cyl(.012,.012,.24,M.warmWhite,Math.cos(a)*.141,1.18,Math.sin(a)*.141,4,g);}
    cyl(.2,.2,.044,redRoof?M.roof:M.blueRoof,0,1.31,0,12,g);
    cyl(0,.22,.19,redRoof?M.roof:M.blueRoof,0,1.424,0,10,g);
    cyl(.014,.015,.13,M.gold,0,1.57,0,5,g);
    const rail=mesh(new THREE.TorusGeometry(.22,.012,4,20),M.warmWhite,0,1.12,0,g);rail.rotation.x=Math.PI/2;
    for(let i=0;i<12;i++){const a=i/12*6.283;cyl(.01,.01,.105,M.warmWhite,Math.cos(a)*.22,1.07,Math.sin(a)*.22,4,g);}
    box(.07,.12,.025,M.navy,0,.73,.164,g);box(.08,.17,.024,M.trunk,0,.115,.22,g);
    return g;
  }
  // Weihai Happiness Gate: blue-gray glazing, square aperture and suspended gallery.
  const gate=new THREE.Group();gate.position.set(1.66,1.21,-5.22);gate.rotation.y=-.08;staticRoot.add(gate);
  const gateGlass=mat('#7699a5',.53),gateGlassDark=mat('#567e90',.52),gateEdge=mat('#e6dcc3');
  box(1.56,.055,.72,M.paperEdge,0,.025,0,gate);box(1.41,.026,.63,M.cream,0,.063,.025,gate);
  for(const x of [-.53,.53]){
    box(.29,1.38,.32,gateGlass,x,.77,0,gate);
    box(.043,1.41,.35,gateEdge,x+Math.sign(x)*.148,.77,0,gate);
    box(.27,1.35,.018,gateGlassDark,x,.77,-.17,gate);
    box(.015,1.35,.013,gateEdge,x-.07,.77,.172,gate);
    box(.014,1.35,.013,gateEdge,x+.035,.77,.172,gate);
    for(let j=0;j<12;j++)box(.285,.01,.013,gateEdge,x,.125+j*.113,.173,gate);
    box(.064,.13,.022,M.navy,x,.145,.176,gate);box(.11,.023,.09,gateEdge,x,.23,.18,gate);
  }
  box(1.10,.28,.33,gateGlassDark,0,1.34,0,gate);
  box(1.37,.045,.36,gateEdge,0,1.504,0,gate);
  box(.8,.047,.32,gateEdge,0,1.17,0,gate);
  box(.8,.065,.245,gateGlass,0,1.055,.026,gate);
  box(.8,.020,.27,gateEdge,0,1.015,.025,gate);
  for(const x of [-.23,0,.23])box(.014,.11,.018,gateEdge,x,1.12,.08,gate);
  for(let i=0;i<11;i++)box(.012,.28,.012,gateEdge,-.48+i*.096,1.34,.176,gate);
  for(let i=0;i<3;i++)box(1.28+i*.08,.02,.10,M.paperEdge,0,.045-i*.02,.4+i*.073,gate);

  house(1.35,-5.20,{w:.5,d:.43,h:.5,roof:M.blueRoof,y:1.21,angle:-.17});
  house(.48,-5.58,{w:.39,d:.35,h:.47,roof:M.blueRoof,y:1.21,angle:-.10});
  house(1.39,-6.15,{w:.39,d:.33,h:.43,roof:M.roofLight,y:1.21,angle:.08});
  for(const [x,z] of [[2.27,-5.26],[2.29,-4.66],[1.85,-4.31],[.08,-4.45]])tree(x,z,.51,random()>.4?'pine':'round',1.21);
  // Northern terrace path with a small rail at the edge.
  ribbon(new THREE.CatmullRomCurve3([[.29,1.216,-4.85],[.88,1.216,-4.32],[1.7,1.216,-4.41],[1.93,1.216,-4.93]].map(p=>new THREE.Vector3(...p))),.16,M.road,64);
  line([[1.4,1.40,-3.99],[1.9,1.40,-4.03],[2.46,1.40,-4.26]],M.cream,.016);
  for(let i=0;i<7;i++)cyl(.014,.014,.18,M.cream,1.4+i*.16,1.32,-3.99-i*.036,5);

  // Wuhu belongs to the Yangtze river: a blue inland ribbon, bridges and a pagoda.
  const riverPts=[[-4.04,.599,3.43],[-3.44,.599,4.21],[-3.10,.599,4.93],[-2.96,.599,5.62],[-2.12,.599,6.36],[-1.44,.599,7.13]];
  const riverCurve=new THREE.CatmullRomCurve3(riverPts.map(p=>new THREE.Vector3(...p)));
  function ribbon(curve,width,material,segments=140,yOffset=0,parent=staticRoot) {
    const v=[];for(let i=0;i<segments;i++){
      const a=curve.getPoint(i/segments),b=curve.getPoint((i+1)/segments),ta=curve.getTangent(i/segments),tb=curve.getTangent((i+1)/segments);
      const na=new THREE.Vector3(-ta.z,0,ta.x).normalize().multiplyScalar(width/2),nb=new THREE.Vector3(-tb.z,0,tb.x).normalize().multiplyScalar(width/2);
      const p=a.clone().add(na),q=a.clone().sub(na),r=b.clone().add(nb),s=b.clone().sub(nb);for(const pt of [p,r,q,q,r,s])v.push(pt.x,pt.y+yOffset,pt.z);
    }const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));geo.computeVertexNormals();return mesh(geo,material,0,0,0,parent);
  }
  ribbon(riverCurve,.53,M.shallow);ribbon(riverCurve,.40,mat('#75aeb7'),100,.003);
  line(riverPts.map(p=>[p[0]-.21,.606,p[2]]),M.foam,.016);
  const pagoda=new THREE.Group();pagoda.position.set(-2.05,.60,5.45);staticRoot.add(pagoda);
  const pagodaBrick=mat('#aaa18b'),pagodaBrickLight=mat('#c1b299'),pagodaRoofMat=mat('#505b60'),pagodaRoofEdge=mat('#444f53');
  cyl(.33,.37,.15,pagodaBrick,0,.075,0,8,pagoda);
  function traditionalRoof(radius,y,parent,roofMaterial=mat('#536065',.96,{side:THREE.DoubleSide}),edgeMaterial=pagodaRoofEdge,crest=.18){
    const vertices=[];
    for(let k=0;k<8;k++){
      const a=k/8*6.283,b=(k+1)/8*6.283;
      const rings=[[radius*.29,y+crest],[radius*.8,y+.015],[radius,y+.068]];
      for(let j=1;j<rings.length;j++){
        const [r0,h0]=rings[j-1],[r1,h1]=rings[j];
        const p=[Math.sin(a)*r0,h0,Math.cos(a)*r0],q=[Math.sin(b)*r0,h0,Math.cos(b)*r0],r=[Math.sin(a)*r1,h1,Math.cos(a)*r1],t=[Math.sin(b)*r1,h1,Math.cos(b)*r1];
        for(const pt of[p,q,r,q,t,r])vertices.push(...pt);
      }
      line([[Math.sin(a)*radius*.30,y+crest+.007,Math.cos(a)*radius*.30],[Math.sin(a)*radius*.80,y+.023,Math.cos(a)*radius*.80],[Math.sin(a)*radius,y+.075,Math.cos(a)*radius],[Math.sin(a)*radius*1.025,y+.108,Math.cos(a)*radius*1.025]],edgeMaterial,.014,parent);
    }
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.computeVertexNormals();mesh(geo,roofMaterial,0,0,0,parent);
    cyl(radius*.29,radius*.29,.035,roofMaterial,0,y+crest-.01,0,8,parent);
  }
  for(let i=0;i<4;i++){
    const y=.13+i*.325,r=.28-i*.027;
    cyl(r,r+.013,.245,pagodaBrick,0,y+.123,0,8,pagoda);
    cyl(r+.024,r+.024,.027,pagodaBrickLight,0,y+.023,0,8,pagoda);
    for(let j=0;j<8;j++){
      const a=j/8*6.283+.3927,xx=Math.sin(a)*r*.934,zz=Math.cos(a)*r*.934;
      const win=box(.063,.105,.011,M.navy,xx,y+.135,zz,pagoda);win.rotation.y=a;
      const arch=cyl(.0315,.0315,.012,M.navy,xx,y+.187,zz,10,pagoda);arch.rotation.set(Math.PI/2,0,-a);
      for(let row=0;row<3;row++){
        const trim=box(r*.66,.009,.008,pagodaBrickLight,Math.sin(a)*(r*.935+.007),y+.060+row*.069,Math.cos(a)*(r*.935+.007),pagoda);trim.rotation.y=a;
      }
    }
    traditionalRoof(r+.105,y+.237,pagoda);
  }
  cyl(.030,.060,.22,pagodaRoofEdge,0,1.63,0,8,pagoda);
  for(let i=0;i<3;i++)cyl(.035,.045,.027,pagodaRoofEdge,0,1.57+i*.065,0,8,pagoda);
  cyl(0,.035,.13,pagodaRoofEdge,0,1.8,0,6,pagoda);
  // Qingdao Zhanqiao's Huilan Pavilion: two broad golden octagonal roofs.
  // This study was generated separately and checked against the actual pavilion.
  const pavilion=new THREE.Group();pavilion.position.set(1.16,.065,0);pier.add(pavilion);
  const pavilionGold=mat('#d3a347',.85,{side:THREE.DoubleSide}),pavilionGoldEdge=mat('#bc8e38'),pavilionGreen=mat('#517d75');
  cyl(.41,.45,.075,M.paperEdge,0,.008,0,16,pavilion);
  cyl(.33,.36,.045,M.cream,0,.067,0,8,pavilion);
  cyl(.176,.176,.255,M.roof,0,.22,0,8,pavilion);
  for(let i=0;i<8;i++){
    const a=i/8*6.283;cyl(.021,.028,.27,M.roof,Math.sin(a)*.272,.227,Math.cos(a)*.272,7,pavilion);
    cyl(.034,.039,.032,M.cream,Math.sin(a)*.272,.107,Math.cos(a)*.272,7,pavilion);
    const angle=a+.3927,wx=Math.sin(angle)*.169,wz=Math.cos(angle)*.169;
    box(.075,.16,.014,M.navy,wx,.22,wz,pavilion).rotation.y=angle;
    box(.010,.14,.018,M.roofLight,wx,.22,wz,pavilion).rotation.y=angle;
  }
  cyl(.29,.29,.055,pavilionGreen,0,.348,0,8,pavilion);
  traditionalRoof(.39,.371,pavilion,pavilionGold,pavilionGoldEdge,.16);
  cyl(.184,.184,.18,M.roof,0,.583,0,8,pavilion);
  for(let i=0;i<8;i++){
    const a=i/8*6.283+.3927,wx=Math.sin(a)*.176,wz=Math.cos(a)*.176;
    box(.092,.105,.013,M.glass,wx,.588,wz,pavilion).rotation.y=a;
    box(.014,.13,.019,M.roof,wx,.588,wz,pavilion).rotation.y=a;
  }
  cyl(.22,.22,.047,pavilionGreen,0,.692,0,8,pavilion);
  traditionalRoof(.32,.715,pavilion,pavilionGold,pavilionGoldEdge,.205);
  cyl(.015,.04,.09,pavilionGoldEdge,0,.98,0,8,pavilion);
  cyl(0,.012,.1,pavilionGoldEdge,0,1.066,0,5,pavilion);
  // An open arch, not a solid block painted to look like one.
  const bridge=new THREE.Group();bridge.position.set(-2.82,.63,5.96);bridge.rotation.y=-.62;staticRoot.add(bridge);
  const archShape=new THREE.Shape();archShape.moveTo(-.53,0);archShape.lineTo(-.53,.23);archShape.quadraticCurveTo(0,.51,.53,.23);archShape.lineTo(.53,0);archShape.lineTo(.35,0);archShape.quadraticCurveTo(0,.45,-.35,0);archShape.closePath();
  const archGeo=new THREE.ExtrudeGeometry(archShape,{depth:.28,bevelEnabled:false,curveSegments:12});archGeo.translate(0,0,-.14);mesh(archGeo,M.paperEdge,0,0,0,bridge);
  for(const z of [-.16,.16]){
    line([[-.53,.26,z],[-.3,.37,z],[0,.415,z],[.3,.37,z],[.53,.26,z]],M.cream,.023,bridge);
    for(let i=0;i<7;i++){const x=-.51+i*.17,y=.24+.15*(1-(x/.54)**2);cyl(.018,.018,.15,M.cream,x,y+.025,z,5,bridge);}
  }
  house(-1.15,6.25,{w:.37,d:.33,h:.4,roof:M.blueRoof,angle:-.3});
  tree(-1.3,5.3,.70);tree(-1.82,4.59,.67,'pine');
  // Lianyungang: harbor cranes and a breakwater beneath green foothills.
  patch(-.81,3.94,.66,.59,M.meadowLight);
  mountain(-1.50,3.41,.45);mountain(-1.87,3.66,.34);
  house(-.67,4.33,{w:.43,d:.34,h:.37,roof:M.blueRoof,angle:-.22});
  house(-1.13,4.6,{w:.37,d:.29,h:.31,roof:M.roofLight,angle:-.14});
  box(.72,.10,.18,M.ochre,1.84,.46,4.38);
  for(let i=0;i<6;i++)box(.08,.06,.21,i%2?M.paperEdge:M.rockLight,1.52+i*.12,.53,4.38);
  for(let i=0;i<2;i++){
    const x=1.5+i*.34,z=4.04;
    box(.055,.46,.055,M.gold,x,.80,z);box(.38,.043,.043,M.gold,x+.1,1.04,z);
    line([[x-.03,1.07,z],[x+.31,1.07,z],[x+.31,.8,z]],M.navy,.008);
    box(.19,.10,.13,i?M.roof:M.blueRoof,x,.62,z+.14);
  }
  // Rizhao: broad beach, sun sculpture, parasols and little wooden beach huts.
  patch(.64,2.58,.54,.46,M.paleSand,.592);
  cyl(.16,.19,.06,M.ochre,.79,.62,2.54,12);
  box(.044,.33,.044,M.gold,.79,.80,2.54);
  const sun=mesh(new THREE.TorusGeometry(.17,.024,5,20),M.gold,.79,1.055,2.54);sun.rotation.y=.22;
  for(let i=0;i<12;i++){const a=i/12*6.28;const ray=box(.022,.125,.027,M.gold,.79+Math.sin(a)*.244,1.055+Math.cos(a)*.244,2.54);ray.rotation.z=-a;}
  for(let i=0;i<3;i++){
    const x=.68+i*.3,z=3.06+i*.05;cyl(.011,.011,.20,M.trunk,x,.70,z,5);
    cyl(0,.15,.08,i%2?M.cream:M.coral,x,.84,z,8);
    const chair=box(.105,.025,.22,M.cream,x-.08,.62,z+.09);chair.rotation.x=-.15;
  }
  // Rizhao Lighthouse's distinctive two circular viewing decks and cylindrical white shaft.
  const rzLight=new THREE.Group();rzLight.position.set(1.10,.59,1.83);rzLight.scale.setScalar(.83);staticRoot.add(rzLight);
  cyl(.31,.34,.055,M.paperEdge,0,.027,0,20,rzLight);
  cyl(.26,.26,.19,M.glass,0,.14,0,16,rzLight);
  cyl(.27,.27,.057,M.trunk,0,.252,0,16,rzLight);
  for(let i=0;i<12;i++){const a=i/12*6.283;cyl(.012,.012,.18,M.cream,Math.cos(a)*.261,.145,Math.sin(a)*.261,4,rzLight);}
  cyl(.104,.11,.84,M.warmWhite,0,.70,0,16,rzLight);
  for(let i=0;i<5;i++)box(.035,.045,.014,M.navy,0,.41+i*.145,.107,rzLight);
  cyl(.20,.104,.13,M.cream,0,1.15,0,16,rzLight);
  cyl(.216,.216,.065,M.warmWhite,0,1.236,0,20,rzLight);
  cyl(.099,.10,.14,M.warmWhite,0,1.34,0,16,rzLight);
  cyl(.148,.148,.06,M.cream,0,1.427,0,20,rzLight);
  cyl(.079,.079,.16,M.glass,0,1.536,0,10,rzLight);
  cyl(.045,.10,.07,M.navy,0,1.65,0,10,rzLight);
  cyl(.006,.009,.18,M.navy,0,1.77,0,5,rzLight);
  for(const [r,h] of [[.213,1.316],[.146,1.507]]){
    const rail=mesh(new THREE.TorusGeometry(r,.007,4,24),M.navy,0,h,0,rzLight);rail.rotation.x=Math.PI/2;
    for(let i=0;i<16;i++){const a=i/16*6.283;cyl(.004,.004,.058,M.navy,Math.cos(a)*r,h-.028,Math.sin(a)*r,4,rzLight);}
  }
  house(-.67,2.38,{w:.34,d:.30,h:.26,roof:M.blueRoof,angle:.13,floors:1,chimney:false});
  house(-1.1,2.53,{w:.34,d:.30,h:.27,roof:M.roofLight,angle:.13,floors:1,chimney:false});
  tree(-1.22,2.00,.66);tree(-.54,1.91,.58,'pine');

  // Smooth paper road climbs onto the north cape. The coral dashes remain geometry.
  const roadPoints=ROAD_POINTS;
  const routeCurve=createRouteCurve(THREE);
  ribbon(routeCurve,.39,M.ochre,260,-.015);ribbon(routeCurve,.34,M.road,260,.006);
  const routeLength=routeCurve.getLength();
  for(let d=0;d<routeLength;d+=.28){
    const t=d/routeLength,t2=Math.min((d+.14)/routeLength,1);
    const p=routeCurve.getPointAt(t),q=routeCurve.getPointAt(t2),m=routeCurve.getPointAt((t+t2)/2);p.y+=.019;q.y+=.019;m.y+=.019;
    line([p.toArray(),m.toArray(),q.toArray()],M.routeInk,.031);
  }
  // Support the rising stretch with a folded card ramp.
  const rampPoints=roadPoints.slice(14,17);
  for(let i=1;i<rampPoints.length;i++){
    const a=rampPoints[i-1],b=rampPoints[i];
    flatPolygon([[a[0]-.28,a[2]],[a[0]+.28,a[2]],[b[0]+.3,b[2]],[b[0]-.3,b[2]]],.605,M.sand);
    const vv=[a[0]-.25,a[1]-.035,a[2],a[0]+.25,a[1]-.035,a[2],b[0]-.25,b[1]-.035,b[2],a[0]+.25,a[1]-.035,a[2],b[0]+.25,b[1]-.035,b[2],b[0]-.25,b[1]-.035,b[2]];
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vv,3));geo.computeVertexNormals();mesh(geo,M.sand);
  }
  // A tiny, fully modeled blue station wagon.
  const car = new THREE.Group();car.name='route-car';car.scale.setScalar(.9);movingRoot.add(car);
  box(.225,.10,.40,M.car,0,.09,0,car);
  box(.203,.10,.225,M.car,0,.18,-.015,car);
  box(.175,.07,.012,M.glass,0,.184,.103,car).rotation.x=-.20;
  box(.175,.07,.012,M.glass,0,.184,-.133,car).rotation.x=.15;
  for(const x of [-.105,.105]){
    box(.009,.065,.08,M.window,x,.19,.047,car);box(.009,.065,.076,M.window,x,.19,-.055,car);
    box(.013,.012,.032,M.cream,x,.139,-.03,car);
    for(const z of [-.125,.13]){const wheel=cyl(.054,.054,.043,M.rubber,x,.065,z,10,car);wheel.rotation.z=Math.PI/2;const hub=cyl(.025,.025,.046,M.paperEdge,x,.065,z,8,car);hub.rotation.z=Math.PI/2;}
  }
  box(.185,.03,.023,M.cream,0,.068,.213,car);box(.17,.017,.021,M.cream,0,.08,-.211,car);
  for(const x of [-.075,.075])box(.048,.03,.013,M.cream,x,.112,.204,car);
  box(.16,.025,.21,M.ochre,0,.251,-.025,car);
  box(.15,.058,.15,M.paperEdge,0,.277,-.03,car);
  for(const x of [-.065,.065])box(.012,.064,.159,M.trunk,x,.278,-.03,car);

  function sailboat(x,z,s=1,heading=0) {
    const g=new THREE.Group();g.position.set(x,.43,z);g.rotation.y=heading;g.scale.setScalar(s);movingRoot.add(g);
    const hull=mesh(new THREE.SphereGeometry(.22,8,4),M.warmWhite,0,.03,0,g);hull.scale.set(.46,.29,1.35);
    box(.13,.033,.30,M.trunk,0,.073,0,g);
    cyl(.012,.012,.58,M.trunk,0,.37,0,5,g);
    const geom=new THREE.BufferGeometry();geom.setAttribute('position',new THREE.Float32BufferAttribute([.015,.65,0,.015,.13,.22,.015,.13,.013],3));geom.computeVertexNormals();mesh(geom,mat('#fff7db',.9,{side:THREE.DoubleSide}),0,0,0,g);
    const geom2=new THREE.BufferGeometry();geom2.setAttribute('position',new THREE.Float32BufferAttribute([-.015,.52,-.015,-.015,.13,-.18,-.015,.13,-.015],3));geom2.computeVertexNormals();mesh(geom2,mat('#deb482',.9,{side:THREE.DoubleSide}),0,0,0,g);
    line([[x-.1,.413,z+.22],[x-.18,.413,z+.36],[x-.16,.413,z+.5]],M.foam,.012);
    return g;
  }
  const boats=[sailboat(3.42,1.55,1.02,-.5),sailboat(3.98,-2.12,.8,.45),sailboat(3.05,5.7,.72,-.6)];
  // Low rocky islet and its small secondary beacon.
  patch(3.92,3.82,.42,.50,M.shallow,.391);
  rock(3.95,.36,3.86,.42,M.rockLight);rock(3.69,.36,3.96,.24,M.rock);rock(4.16,.36,3.64,.22,M.rockLight);
  lighthouse(3.99,3.8,.83,.35,false);tree(3.76,3.75,.24,'round',.8);
  // Gulls are folded ivory card, not image sprites.
  const gulls=[];
  for(const [x,y,z,s] of [[3.3,2.65,-5.8,.28],[-1.0,2.15,-4.35,.21],[3.8,1.95,5.03,.28]]){
    const g=new THREE.Group();g.position.set(x,y,z);movingRoot.add(g);
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute([-s,0,.04,0,-.07,0,-s*.4,.075,-.045,0,-.07,0,s,0,.04,s*.4,.075,-.045],3));geo.computeVertexNormals();mesh(geo,mat('#fff8e2',.9,{side:THREE.DoubleSide}),0,0,0,g);gulls.push(g);
  }
  // Little paper clouds complete the pop-up silhouette, kept away from city names.
  function cloud(x,y,z,s){const g=new THREE.Group();g.position.set(x,y,z);g.scale.setScalar(s);staticRoot.add(g);for(const [dx,dy,r]of[[-.28,0,.28],[.02,.11,.34],[.3,0,.25]]){const c=ico(r,M.warmWhite,dx,dy,0,1,g);c.scale.set(1,.8,.30);}box(.69,.11,.11,M.warmWhite,.01,-.09,0,g);return g;}
  cloud(-3.7,1.56,1.3,.45);

  // Tangible dots pair with readable HTML labels. Both are interactive.
  const cityData = [
    {id:'huaian',name:'淮安',note:'古镇 · 首晚可选',p:[-2.70,.74,5.65],tag:[-3.00,1.03,5.6]},
    {id:'wuhu',name:'芜湖',note:'中江塔 · 江畔出发',p:[-1.86,.72,6.35],tag:[-3.25,1.03,6.3]},
    {id:'lianyungang',name:'连云港',note:'向海中转',p:[-.12,.74,4.15],tag:[-2.25,1.04,4.15]},
    {id:'rizhao',name:'日照',note:'灯塔 · 返程可选',p:[.05,.74,2.36],tag:[-2.2,1.04,2.16]},
    {id:'qingdao',name:'青岛',note:'五月的风 · 红瓦与海',p:[.08,.75,-.38],tag:[-2.45,1.10,-.55]},
    {id:'weihai',name:'威海',note:'幸福门 · 慢一点看海',p:[1.47,1.39,-4.51],tag:[-1.65,1.35,-4.75]},
  ];
  const labels = document.createElement('div'); labels.className = 'coastal-scene-labels';
  labels.style.cssText='position:absolute;inset:0;pointer-events:none;overflow:hidden;';
  container.appendChild(labels);
  const style=document.createElement('style');style.textContent=`
    .coastal-city-tag{box-sizing:border-box;min-height:44px;position:absolute;left:0;top:0;pointer-events:auto;display:flex;flex-direction:column;align-items:flex-start;gap:1px;border:1px solid rgba(160,133,88,.19);border-radius:3px 8px 4px 7px;padding:7px 12px 6px;background:rgba(255,248,227,.95);box-shadow:1px 4px 0 rgba(86,80,55,.10),0 4px 13px rgba(68,76,64,.10);color:#193e51;cursor:pointer;white-space:nowrap;font-family:inherit;transition:background .2s,box-shadow .2s;transform:translate(-50%,-50%);line-height:1.2}
    .coastal-city-tag strong{font-size:19px;font-weight:700;letter-spacing:.08em;font-family:MaShan,var(--font-display,'Noto Serif SC','Songti SC',serif)}
    .coastal-city-tag small{font-size:9px;letter-spacing:.09em;color:#7a8276;margin-top:2px}
    .coastal-city-tag::before{content:'';position:absolute;left:-4px;top:12px;width:7px;height:7px;background:#f58b65;border:2px solid #fff8e5;border-radius:50%}
    .coastal-city-tag[data-selected=true]{background:#fff8e7;border-color:#ef9774;box-shadow:1px 4px 0 rgba(185,106,65,.14),0 4px 15px rgba(68,76,64,.1)}
    .coastal-city-tag[data-selected=true]::before{background:#e97046;box-shadow:0 0 0 3px rgba(232,112,65,.16)}
    .coastal-city-tag[data-selected=false] small{display:none}.coastal-city-tag[data-selected=false]{padding:6px 10px;min-height:44px}.coastal-city-tag:hover{background:#fffaf0;box-shadow:1px 5px 0 rgba(86,80,55,.13),0 5px 15px rgba(68,76,64,.13)}
    .coastal-city-tag:focus-visible{outline:3px solid #d56e46;outline-offset:4px}
    @media(max-width:600px){.coastal-city-tag{padding:5px 8px}.coastal-city-tag strong{font-size:16px}.coastal-city-tag small{font-size:8px}}
  `;container.appendChild(style);
  const targets=[];
  cityData.forEach(c=>{
    const g=new THREE.Group();g.position.fromArray(c.p);movingRoot.add(g);
    const rim=cyl(.12,.12,.035,M.warmWhite,0,0,0,24,g);
    const dot=cyl(.084,.084,.042,M.coral,0,.023,0,24,g);
    const halo=mesh(new THREE.RingGeometry(.145,.174,28),mat('#f08a60',.9,{transparent:true,opacity:.30,side:THREE.DoubleSide}),0,-.006,0,g);halo.rotation.x=-Math.PI/2;
    rim.userData.cityId=c.id;dot.userData.cityId=c.id;targets.push(rim,dot);
    const el=document.createElement('button');el.type='button';el.className='coastal-city-tag';el.dataset.city=c.id;el.setAttribute('aria-label',`${c.name}：${c.note}，查看行程`);el.innerHTML=`<strong>${c.name}</strong><small>${c.note}</small>`;el.addEventListener('click',()=>{selectCity(c.id);onSelect(c.id);});labels.appendChild(el);
    c.el=el;c.marker=g;c.halo=halo;c.worldTag=new THREE.Vector3(...c.tag);
  });

  // Reference-led models replace generic filler without changing the driving route.
  const additions=placeLandmarks(THREE,[...createQingdaoLandmarks(THREE),...createWeihaiLandmarks(THREE),...createStopoverLandmarks(THREE)],staticRoot);
  staticRoot.updateMatrixWorld(true);
  const existing=[
    ['qd_zhanqiao','栈桥 · 回澜阁','qingdao',pavilion],
    ['qd_st_michaels','圣弥厄尔教堂','qingdao',cathedral],
    ['qd_mayfour_square','五四广场 · 五月的风','qingdao',mayWind],
    ['wh_happiness_gate','幸福门','weihai',gate],
    ['rz_lighthouse','日照灯塔','rizhao',rzLight],
    ['wh_zhongjiang_pagoda','中江塔','wuhu',pagoda],
  ].map(([id,name,city,group])=>{const bounds=new THREE.Box3().setFromObject(group);return{id,name,city,group,bounds,focus:bounds.getCenter(new THREE.Vector3()).toArray(),optional:false}});
  const landmarkRegistry=[...existing,...additions];
  const detailRoot=new THREE.Group();detailRoot.name='landmark-detail';detailRoot.visible=false;world.add(detailRoot);
  const detailPreviews=new Map();
  landmarkRegistry.forEach(landmark=>{
    const preview=landmark.group.clone(true);
    preview.traverse(o=>{if(o.isMesh)o.geometry=o.geometry.clone()});
    preview.matrixAutoUpdate=false;preview.matrix.copy(landmark.group.matrixWorld);preview.visible=false;
    detailRoot.add(preview);detailPreviews.set(landmark.id,preview);
  });
  const landmarkTargets=[];
  const hitMaterial=new THREE.MeshBasicMaterial({visible:false});materialCache.set('landmark-hit-target',hitMaterial);
  landmarkRegistry.forEach(landmark=>{
    const size=landmark.bounds.getSize(new THREE.Vector3());
    const target=new THREE.Mesh(new THREE.BoxGeometry(size.x,Math.max(.12,size.y),size.z),hitMaterial);
    target.position.fromArray(landmark.focus);target.userData.landmarkId=landmark.id;movingRoot.add(target);landmarkTargets.push(target);
  });
  scene.userData.landmarks=landmarkRegistry.map(({id,name,city,optional,bounds})=>({id,name,city,optional,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}}));

  // Merge immutable paper pieces by material: hundreds of small details, few draw calls.
  staticRoot.updateMatrixWorld(true);
  const batches=new Map();
  staticRoot.traverse(o=>{if(!o.isMesh)return;const g=o.geometry.clone().applyMatrix4(o.matrixWorld);const ng=g.index?g.toNonIndexed():g;if(ng!==g)g.dispose();ng.deleteAttribute('uv');ng.deleteAttribute('uv1');const key=`${o.material.uuid}|${ng.hasAttribute('color')}`;if(!batches.has(key))batches.set(key,{material:o.material,geos:[]});batches.get(key).geos.push(ng);});
  // Dispose unmerged originals after baking; dynamic items keep their own geometry.
  staticRoot.traverse(o=>{if(o.isMesh)o.geometry.dispose();});
  staticRoot.clear();
  for(const {material,geos} of batches.values()){
    const merged=mergeGeometries(geos,false);geos.forEach(g=>g.dispose());if(merged)mesh(merged,material,0,0,0,staticRoot);
  }
  const ambient=new THREE.HemisphereLight('#fff8e6','#9da98d',2.6);scene.add(ambient);
  const sunLight=new THREE.DirectionalLight('#fff2d9',4.1);sunLight.position.set(-6,14,9);sunLight.castShadow=true;
  sunLight.shadow.mapSize.set(window.innerWidth<600?1024:1536,window.innerWidth<600?1024:1536);sunLight.shadow.camera.left=-10;sunLight.shadow.camera.right=10;sunLight.shadow.camera.top=12;sunLight.shadow.camera.bottom=-12;sunLight.shadow.camera.near=.5;sunLight.shadow.camera.far=40;sunLight.shadow.normalBias=.03;sunLight.shadow.bias=-.00012;sunLight.shadow.radius=3;scene.add(sunLight);
  const fill=new THREE.DirectionalLight('#dcecea',.95);fill.position.set(7,7,-9);scene.add(fill);
  // Shadow catcher is translucent so the page's warm paper color shows through.
  const shadow=mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({color:'#807052',opacity:.17}),0,-.17,0,scene);shadow.rotation.x=-Math.PI/2;shadow.castShadow=false;shadow.receiveShadow=true;

  let selected='weihai',motion=!reducedMotion,disposed=false,width=1,height=1,raf=0,lastTime=0,time=0;
  let cameraYaw=0,cameraPitch=0,targetYaw=0,targetPitch=0,drag=null,dragged=false,visible=true;
  let carProgress=0,targetCarProgress=0,carDirection=1,entry=null,focusedLandmark=null;
  const cityProgress=Object.fromEntries(cityData.map(c=>{let best=0,dist=Infinity;const pos=new THREE.Vector3(...c.p);for(let i=0;i<=600;i++){const t=i/600,d=routeCurve.getPointAt(t).distanceToSquared(pos);if(d<dist){dist=d;best=t;}}return[c.id,best]}));
  const routeFocus=new THREE.Group();routeFocus.name='day-route-highlight';movingRoot.add(routeFocus);
  const focusMat=new THREE.MeshBasicMaterial({color:'#b95e3e',toneMapped:false});materialCache.set('day-route-focus',focusMat);
  const ringMat=new THREE.MeshBasicMaterial({color:'#246478',transparent:true,opacity:.78,toneMapped:false,side:THREE.DoubleSide});materialCache.set('car-halo',ringMat);
  const carHalo=mesh(new THREE.RingGeometry(.20,.235,24),ringMat,0,0,0,movingRoot);carHalo.rotation.x=-Math.PI/2;
  function setDayRoute(fromId,toId){
    const from=cityProgress[fromId],to=cityProgress[toId];if(from===undefined||to===undefined)return;finishEntry();
    routeFocus.traverse(o=>{if(o.isMesh)o.geometry.dispose()});routeFocus.clear();
    if(Math.abs(to-from)>.005){
      const pts=Array.from({length:72},(_,i)=>{const p=routeCurve.getPointAt(from+(to-from)*i/71);p.y+=.012;return p;});
      const segment=new THREE.CatmullRomCurve3(pts);ribbon(segment,.12,focusMat,96,.006,routeFocus);
      for(const at of [.34,.74]){const t=from+(to-from)*at,p=routeCurve.getPointAt(t),v=routeCurve.getTangentAt(t).multiplyScalar(to>from?1:-1);const arrow=mesh(new THREE.ConeGeometry(.05,.14,3),focusMat,p.x-v.z*.23,p.y+.06,p.z+v.x*.23,routeFocus);arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),new THREE.Vector3(v.x,0,v.z).normalize());}
    }
    carProgress=from;setDestination(toId);
  }
  function setDestination(id){if(cityProgress[id]===undefined)return;finishEntry();targetCarProgress=cityProgress[id];carDirection=targetCarProgress>=carProgress?1:-1;if(!motion||reducedMotion)carProgress=targetCarProgress;render(0);}
  const projected=new THREE.Vector3(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  // Standing on the paper road beside each city, facing its modeled landmark.
  // City changes jump between safe viewpoints instead of flying through buildings.
  const immersiveViews={
    huaian:{eye:[-.4,2.7,8.5],focus:[-2.9,1.05,5.85],ground:.59},
    wuhu:{eye:[.9,2.4,7.3],focus:[-2.05,1.1,5.45],ground:.59},
    lianyungang:{eye:[.8,2.4,5.9],focus:[-1.4,.98,3.9],ground:.59},
    rizhao:{eye:[1.4,2.5,4.1],focus:[-1.0,1.05,2.1],ground:.59},
    qingdao:{eye:[3.25,3.2,3.7],focus:[-.8,1.15,-.65],ground:.59},
    weihai:{eye:[3.4,3.8,-2.3],focus:[-.4,1.4,-5.4],ground:1.21},
  };
  const immersiveEye=new THREE.Vector3(),immersiveDirection=new THREE.Vector3(),immersiveTarget=new THREE.Vector3();
  const baseCamera=new THREE.Vector3(5.7,23.8,21.8),lookAt=new THREE.Vector3(0,.48,-.05);
  function finishEntry(){
    if(!entry)return;entry=null;immersiveCamera.fov=width/height<1?68:60;immersiveCamera.updateProjectionMatrix();
    immersiveCamera.userData.transitioning=false;immersiveCamera.userData.transitionProgress=1;
  }
  function yawLimit(){return mode==='immersive'?.42:.25;}
  function positionCamera(){
    if(mode==='immersive'){
      const view=focusedLandmark?landmarkView(focusedLandmark):immersiveViews[selected];
      camera.userData.focusCity=focusedLandmark?.city||selected;camera.userData.focusLandmark=focusedLandmark?.id||null;camera.userData.groundHeight=view.ground;camera.userData.focusPoint=[...view.focus];
      if(entry){
        const progress=Math.min(1,entry.elapsed/1.15),ease=progress*progress*(3-2*progress);
        camera.position.copy(entry.eye).lerp(immersiveEye.fromArray(view.eye),ease);
        immersiveTarget.copy(entry.focus).lerp(immersiveDirection.fromArray(view.focus),ease);camera.lookAt(immersiveTarget);
        camera.fov=THREE.MathUtils.lerp(entry.fov,width/height<1?68:60,ease);camera.updateProjectionMatrix();
        camera.userData.transitioning=true;camera.userData.transitionProgress=progress;camera.updateMatrixWorld(true);return;
      }
      camera.userData.transitioning=false;camera.userData.transitionProgress=1;immersiveEye.fromArray(view.eye);
      immersiveDirection.fromArray(view.focus).sub(immersiveEye);
      immersiveDirection.applyAxisAngle(new THREE.Vector3(0,1,0),cameraYaw);
      immersiveDirection.y+=cameraPitch*immersiveDirection.length();
      immersiveTarget.copy(immersiveEye).add(immersiveDirection);
      camera.position.copy(immersiveEye);camera.lookAt(immersiveTarget);
      camera.userData.focusCity=focusedLandmark?.city||selected;camera.userData.focusLandmark=focusedLandmark?.id||null;camera.userData.groundHeight=view.ground;camera.userData.focusPoint=[...view.focus];
      camera.updateMatrixWorld(true);return;
    }
    const offset=baseCamera.clone();if(width/height>1.75)offset.x=12;else if(width/height<.95)offset.x=2.4;offset.applyAxisAngle(new THREE.Vector3(0,1,0),cameraYaw);offset.y+=cameraPitch*10;camera.position.copy(offset);camera.lookAt(lookAt);camera.updateMatrixWorld(true);
  }
  function resize(){
    if(disposed)return;finishEntry();const rect=container.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,width<600?1.6:2));renderer.setSize(width,height,false);
    const aspect=width/height;
    const vertical=aspect<.8?16.65:aspect<1.05?16.0:aspect>1.75?14.6:15.4;
    // Projected bounds include the rings and elevated lighthouse; narrow views remain uncut.
    const halfH=Math.max(vertical/2,(aspect<.95?6.2:7.0)/aspect)*(width<320?1.18:width<600?1.10:1),halfW=halfH*aspect;
    overviewCamera.left=-halfW;overviewCamera.right=halfW;overviewCamera.top=halfH;overviewCamera.bottom=-halfH;overviewCamera.updateProjectionMatrix();immersiveCamera.aspect=aspect;immersiveCamera.fov=aspect<1?68:60;immersiveCamera.updateProjectionMatrix();positionCamera();render(0);
  }
  function updateLabels(){
    cityData.forEach(c=>{c.el.style.display=focusedLandmark||c.id!==selected?'none':'';});
    if(focusedLandmark)return;
    const c=cityData.find(c=>c.id===selected),halfW=(c.el.offsetWidth||140)/2;
    c.el.style.left=`${Math.min(width/2,halfW+14)}px`;
    c.el.style.top=`${height-42}px`;c.el.style.zIndex='2';
  }
  function selectCity(id){
    if(!cityData.some(c=>c.id===id))return;const changed=selected!==id;selected=id;focusedLandmark=null;
    if(changed&&mode==='immersive'){finishEntry();cameraYaw=targetYaw=0;cameraPitch=targetPitch=0;cancel();}
    cityData.forEach(c=>{const active=c.id===id;c.el.dataset.selected=String(active);c.el.setAttribute('aria-pressed',String(active));c.marker.scale.setScalar(active?1.16:1);c.halo.visible=active;});
    if(!motion||mode==='immersive')render(0);
  }
  function setViewMode(value){
    if(value!=='immersive'&&value!=='overview')return;
    if(value===mode)return;
    focusedLandmark=null;
    const entering=value==='immersive'&&!reducedMotion;
    finishEntry();cancel();
    if(entering){
      // Match the overview framing at the current distance, then descend and
      // widen the lens together. This avoids a distant zoom-out before entry.
      const distance=overviewCamera.position.distanceTo(lookAt);
      entry={eye:overviewCamera.position.clone(),focus:lookAt.clone(),fov:THREE.MathUtils.radToDeg(2*Math.atan((overviewCamera.top-overviewCamera.bottom)/2/distance)),elapsed:0};
    }
    mode=value;camera=mode==='immersive'?immersiveCamera:overviewCamera;cameraYaw=targetYaw=0;cameraPitch=targetPitch=0;render(0);
  }
  function landmarkView(landmark){
    const size=landmark.bounds.getSize(new THREE.Vector3()),focus=landmark.focus;
    const radius=Math.max(size.x,size.z,size.y,.55);
    const distance=radius*(width/height<.85?2.4:1.95);
    return {focus,eye:[focus[0]+distance*.76,focus[1]+distance*.85,focus[2]+distance],ground:landmark.bounds.min.y};
  }
  function focusLandmark(id){
    const landmark=landmarkRegistry.find(item=>item.id===id);if(!landmark)return;
    finishEntry();cancel();focusedLandmark=landmark;mode='immersive';camera=immersiveCamera;
    cameraYaw=targetYaw=0;cameraPitch=targetPitch=0;render(0);
    container.dispatchEvent(new window.CustomEvent('landmarkselect',{detail:{id:landmark.id,name:landmark.name,city:landmark.city,optional:landmark.optional}}));
  }
  function render(dt){
    staticRoot.visible=!focusedLandmark;movingRoot.visible=!focusedLandmark;detailRoot.visible=Boolean(focusedLandmark);
    detailPreviews.forEach((preview,id)=>{preview.visible=id===focusedLandmark?.id});
    if(entry){entry.elapsed+=dt;if(entry.elapsed>=1.15)finishEntry();}
    cameraYaw+=(targetYaw-cameraYaw)*(reducedMotion||drag?1:.18);cameraPitch+=(targetPitch-cameraPitch)*(reducedMotion||drag?1:.18);positionCamera();
    if(motion&&dt){time+=dt;carProgress+=(targetCarProgress-carProgress)*Math.min(1,dt*2.8);if(Math.abs(targetCarProgress-carProgress)<.0002)carProgress=targetCarProgress;}
    const cp=routeCurve.getPointAt(carProgress),ct=routeCurve.getTangentAt(carProgress);car.position.copy(cp);car.position.y+=.018;carHalo.position.set(cp.x,cp.y+.025,cp.z);car.rotation.set(-Math.atan2(ct.y*carDirection,Math.hypot(ct.x,ct.z)),Math.atan2(ct.x*carDirection,ct.z*carDirection),0,'YXZ');
    boats.forEach((b,i)=>{b.rotation.z=motion?Math.sin(time*.8+i*1.3)*.025:0;b.position.y=.43+(motion?Math.sin(time*1.1+i)*.012:0);});
    gulls.forEach((g,i)=>{g.rotation.z=motion?Math.sin(time*.45+i)*.045:0;});
    cityData.forEach(c=>{if(c.id===selected&&motion)c.halo.scale.setScalar(1+Math.sin(time*2)*.075);});
    world.updateMatrixWorld(true);updateLabels();renderer.render(scene,camera);
  }
  function animate(now){
    if(disposed)return;raf=requestAnimationFrame(animate);const dt=Math.min((now-lastTime)/1000,.045);lastTime=now;
    if(!visible)return;
    if(entry||motion||Math.abs(cameraYaw-targetYaw)>.0001||Math.abs(cameraPitch-targetPitch)>.0001||drag)render(dt);
  }
  // Touch uses axis locking so vertical scrolling and browser pinch stay native.
  // Rotation stops for multiple fingers; the map wrapper handles pinch zoom.
  let touchId=null,touchAxis=null,touchBlocked=false,suppressClickUntil=0;
  function suppressClick(){suppressClickUntil=performance.now()+800;}
  function begin(x,y,isTouch,id,target){if(entry){finishEntry();render(0);}drag={x,y,yaw:targetYaw,pitch:targetPitch,isTouch,id,target};dragged=false;suppressClickUntil=0;}
  function applyMove(x,y){
    if(!drag)return;const dx=x-drag.x,dy=y-drag.y;
    if(Math.hypot(dx,dy)>3)dragged=true;
    if(dragged){targetYaw=THREE.MathUtils.clamp(drag.yaw-dx*(drag.isTouch?.004:.0035),-yawLimit(),yawLimit());if(!drag.isTouch)targetPitch=THREE.MathUtils.clamp(drag.pitch+dy*.002,mode==='immersive'?-.22:-.14,mode==='immersive'?.22:.14);renderer.domElement.style.cursor='grabbing';drag.x=x;drag.y=y;drag.yaw=targetYaw;drag.pitch=targetPitch;}
  }
  function pick(x,y){if(focusedLandmark)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((x-r.left)/r.width*2-1,-(y-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects([...targets,...landmarkTargets],false)[0];if(hit){const landmarkId=hit.object.userData.landmarkId;if(landmarkId){focusLandmark(landmarkId);return;}selectCity(hit.object.userData.cityId);onSelect(hit.object.userData.cityId);}}
  function down(e){
    if(e.pointerType==='touch'||e.button!==0||drag||touchBlocked)return;
    const target=e.target===renderer.domElement?renderer.domElement:e.target.closest?.('.coastal-city-tag');
    if(!target)return;e.preventDefault();document.documentElement.classList.add('map-drag-active');begin(e.clientX,e.clientY,false,e.pointerId,target);target.setPointerCapture?.(e.pointerId);
  }
  function move(e){if(e.pointerType==='touch'||!drag||drag.isTouch||e.pointerId!==drag.id)return;e.preventDefault();applyMove(e.clientX,e.clientY);if(dragged)suppressClick();}
  function up(e){
    if(e.pointerType==='touch'||!drag||drag.isTouch||e.pointerId!==drag.id)return;
    const wasDragged=dragged,canvasTap=drag.target===renderer.domElement;
    if(wasDragged)suppressClick();cancel();if(!wasDragged&&canvasTap)pick(e.clientX,e.clientY);
  }
  function cancel(){
    document.documentElement.classList.remove('map-drag-active');const previous=drag;drag=null;touchId=null;touchAxis=null;renderer.domElement.style.cursor='grab';
    if(previous&&!previous.isTouch&&previous.target?.hasPointerCapture?.(previous.id))previous.target.releasePointerCapture(previous.id);
  }
  function pointerCancel(e){if(e.pointerType!=='touch'&&drag&&!drag.isTouch&&e.pointerId===drag.id){suppressClick();cancel();}}
  function blockTouch(){if(entry){finishEntry();render(0);}touchBlocked=true;suppressClick();cancel();}
  function touchStart(e){
    const inScene=container.contains(e.target);
    if(!inScene&&!drag?.isTouch&&!touchBlocked)return;
    if(touchBlocked||e.touches.length!==1){blockTouch();return;}
    if(!inScene||drag)return;
    const t=e.touches[0];touchId=t.identifier;touchAxis=null;begin(t.clientX,t.clientY,true,t.identifier,e.target);
  }
  function touchMove(e){
    if(touchBlocked){suppressClick();return;}
    if(!drag||!drag.isTouch)return;
    if(e.touches.length!==1){blockTouch();return;}
    const t=Array.from(e.touches).find(t=>t.identifier===touchId);if(!t){blockTouch();return;}
    const dx=t.clientX-drag.x,dy=t.clientY-drag.y;
    if(!touchAxis&&Math.max(Math.abs(dx),Math.abs(dy))>6)touchAxis=Math.abs(dx)>Math.abs(dy)?'rotate':'scroll';
    if(touchAxis==='scroll'){dragged=true;suppressClick();return;}
    if(touchAxis==='rotate'){
      // Never cancel vertical scrolling here. Once the
      // browser owns a non-cancelable gesture, don't fight it with rotation.
      if(!e.cancelable){blockTouch();return;}
      e.preventDefault();applyMove(t.clientX,t.clientY);suppressClick();
    }
  }
  function touchEnd(e){
    if(touchBlocked){suppressClick();if(e.touches.length===0)touchBlocked=false;return;}
    if(!drag||!drag.isTouch)return;
    const t=Array.from(e.changedTouches).find(t=>t.identifier===touchId);if(!t)return;
    const wasDragged=dragged,canvasTap=drag.target===renderer.domElement;
    if(wasDragged)suppressClick();cancel();
    if(e.touches.length){blockTouch();return;}
    if(!wasDragged&&canvasTap)pick(t.clientX,t.clientY);
  }
  function touchCancel(e){if(!drag?.isTouch&&!touchBlocked)return;suppressClick();cancel();touchBlocked=e.touches.length>0;}
  function preventDragClick(e){if(e.detail!==0&&(touchBlocked||(drag&&dragged)||performance.now()<suppressClickUntil)){e.preventDefault();e.stopPropagation();}}
  renderer.domElement.style.cursor='grab';container.addEventListener('pointerdown',down);window.addEventListener('pointermove',move);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',pointerCancel);window.addEventListener('blur',cancel);container.addEventListener('lostpointercapture',pointerCancel);
  window.addEventListener('touchstart',touchStart,{passive:true});container.addEventListener('touchmove',touchMove,{passive:false});window.addEventListener('touchend',touchEnd,{passive:true});window.addEventListener('touchcancel',touchCancel,{passive:true});container.addEventListener('click',preventDragClick,true);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);
  const observer=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;if(visible)render(0);},{rootMargin:'120px'}):null;observer?.observe(container);
  selectCity(selected);resize();raf=requestAnimationFrame(animate);
  requestAnimationFrame(()=>{if(!disposed)onReady({renderer:'three.js',objects:scene.children.length,triangles:renderer.info.render.triangles});});
  return {
    selectCity,
    focusLandmark,
    getLandmarks(){return landmarkRegistry.map(({id,name,city,optional})=>({id,name,city,optional}))},
    clearLandmark(){focusedLandmark=null;cameraYaw=targetYaw=0;cameraPitch=targetPitch=0;render(0)},
    setZoom(value){const zoom=THREE.MathUtils.clamp(Number(value)||1,.75,3);overviewCamera.zoom=zoom;immersiveCamera.zoom=zoom;overviewCamera.updateProjectionMatrix();immersiveCamera.updateProjectionMatrix();render(0);},
    setDestination,
    setDayRoute,
    setViewMode,
    rotate(direction){finishEntry();targetYaw=THREE.MathUtils.clamp(targetYaw+direction*.10,-yawLimit(),yawLimit());if(reducedMotion){cameraYaw=targetYaw;render(0);}},
    setMotion(value){motion=Boolean(value)&&!reducedMotion;if(!motion){carProgress=targetCarProgress;render(0);}},
    reset(){finishEntry();cancel();targetYaw=0;targetPitch=0;if(reducedMotion){cameraYaw=0;cameraPitch=0;}render(0);},
    dispose(){
      disposed=true;entry=null;cancelAnimationFrame(raf);resizeObserver.disconnect();observer?.disconnect();cancel();container.removeEventListener('pointerdown',down);container.removeEventListener('lostpointercapture',pointerCancel);window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',pointerCancel);window.removeEventListener('blur',cancel);window.removeEventListener('touchstart',touchStart);container.removeEventListener('touchmove',touchMove);window.removeEventListener('touchend',touchEnd);window.removeEventListener('touchcancel',touchCancel);container.removeEventListener('click',preventDragClick,true);
      const usedMaterials=new Set([...materialCache.values(),shadow.material]);scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();for(const material of Array.isArray(o.material)?o.material:[o.material])usedMaterials.add(material)}});usedMaterials.forEach(m=>m.dispose());renderer.domElement.removeEventListener('webglcontextlost',contextLost);renderer.dispose();renderer.domElement.remove();labels.remove();style.remove();
    },
  };
}
