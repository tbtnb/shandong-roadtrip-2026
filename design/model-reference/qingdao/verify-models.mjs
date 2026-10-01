import assert from 'node:assert/strict';
import * as THREE from 'three';
import { writeFileSync } from 'node:fs';
import { createQingdaoLandmarks } from '../../../src/landmarks/qingdao.js';
const assets=createQingdaoLandmarks(THREE), records=[];
assert.equal(assets.length,11);assert.equal(new Set(assets.map(a=>a.id)).size,11);
for(const a of assets){
 let triangles=0,meshes=0,degenerate=0,inwardMeshes=0;
 a.group.traverse(o=>{if(!o.isMesh)return;meshes++;assert(o.material.isMeshStandardMaterial&&o.material.flatShading);assert.equal(o.material.side,THREE.FrontSide);
 const geo=o.geometry,p=geo.attributes.position,n=geo.attributes.normal,idx=geo.index;const at=i=>idx?idx.getX(i):i,count=idx?idx.count:p.count;triangles+=count/3;let volume=0;
 for(const v of [...p.array,...n.array])assert(Number.isFinite(v));
 for(let i=0;i<count;i+=3){const A=new THREE.Vector3().fromBufferAttribute(p,at(i)),B=new THREE.Vector3().fromBufferAttribute(p,at(i+1)),C=new THREE.Vector3().fromBufferAttribute(p,at(i+2));const cross=B.clone().sub(A).cross(C.clone().sub(A));if(cross.lengthSq()<1e-18)degenerate++;volume+=A.dot(B.clone().cross(C))/6;}
 if(volume<-1e-10)inwardMeshes++;
 });
 const bounds=new THREE.Box3().setFromObject(a.group),center=bounds.getCenter(new THREE.Vector3());
 assert(Math.abs(bounds.min.y)<1e-7&&Math.abs(center.x)<1e-7&&Math.abs(center.z)<1e-7);assert(a.group.position.length()<1e-7);assert.equal(a.group.name,a.id);assert.equal(a.city,'qingdao');
 assert(a.height>=.3&&a.height<=1);assert(Math.max(...a.footprint)<=1&&Math.min(...a.footprint)>=.5);assert.equal(degenerate,0);assert.equal(inwardMeshes,0);
 records.push({id:a.id,name:a.name,triangles,meshes,footprint:a.footprint.map(v=>+v.toFixed(4)),height:+a.height.toFixed(4),degenerate,inwardMeshes});
}
const triangles=records.reduce((sum,r)=>sum+r.triangles,0);assert(triangles<18000);
const result={assets:records.length,triangles,anchor:'XZ centered, y=0, group.position=0 and scale=1',materials:'MeshStandardMaterial, flatShading, FrontSide',records};
writeFileSync(new URL('./geometry-audit.json',import.meta.url),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
