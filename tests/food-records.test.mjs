import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {targets,validateRecord,publicRecord} from '../scripts/food-records.mjs';
const data=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
const e=data.entries[0],b=fs.readFileSync('public/'+e.photo.url);
test('all imported originals preserve source identity and original dimensions/hash',()=>{for(const row of data.entries)validateRecord(row,fs.readFileSync('public/'+row.photo.url));});
test('mismatched photo author, signed XHS URLs and byte alterations are rejected',()=>{
 const wrong=structuredClone(e);wrong.photo.author='another photographer';assert.throws(()=>validateRecord(wrong,b));
 const signed=structuredClone(e);signed.xhs.url+='?xsec_token=example';assert.throws(()=>validateRecord(signed,b));
 const credential=structuredClone(e);credential.access_token='example';assert.throws(()=>validateRecord(credential,b));
 const changed=Buffer.from(b);changed[changed.length-1]^=1;assert.throws(()=>validateRecord(e,changed));
});
test('public records recursively remove research paths while preserving source evidence',()=>{
 const raw={photo:{local_file:'/Users/research/images/main.webp',url:'assets/food/main.webp',sha256:'original-hash'},xhs:{title:'店铺实吃',url:'https://www.xiaohongshu.com/explore/6824424e0000000021007ea6',additional_posts:[{supporting_photos:['/Users/research/extra.webp','file:///home/research/extra.webp','C:\\research\\extra.webp'],supporting_photo_metadata:[{local_file:'/tmp/research.webp',author:'原作者',sha256:'extra-hash'}]}]}};
 const published=publicRecord(raw);
 assert.equal(published.photo.url,raw.photo.url);assert.equal(published.photo.sha256,raw.photo.sha256);assert.equal(published.xhs.url,raw.xhs.url);
 assert.deepEqual(published.xhs.additional_posts[0].supporting_photos,[]);assert.deepEqual(published.xhs.additional_posts[0].supporting_photo_metadata,[{author:'原作者',sha256:'extra-hash'}]);
 assert(!('local_file' in published.photo));assert.equal(raw.photo.local_file,'/Users/research/images/main.webp');
 for(const row of data.entries)assert.deepEqual(publicRecord(row),row,'Published data must contain no research paths');
});
test('pausing Wuhu collection preserves its existing originals without a food quota',()=>{
 assert(!Object.hasOwn(targets,'芜湖'));assert.deepEqual(data.targets,targets);
 assert.equal(Object.values(targets).reduce((sum,n)=>sum+n,0),240);
 const origin=data.entries.filter(row=>row.city==='芜湖');assert(origin.length>0,'Existing departure references must remain');
 for(const row of origin)validateRecord(row,fs.readFileSync('public/'+row.photo.url));
 assert(data.city_notes['芜湖'].includes('暂停补采'));
});
