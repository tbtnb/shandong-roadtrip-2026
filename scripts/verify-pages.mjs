import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root='dist/client',base=process.argv[2]||'/shandong-roadtrip-2026/';
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
function local(url){
 // Fragment-only CSS references (e.g. Leaflet's legacy VML behavior) are not file requests.
 if(url.startsWith('#')||url.startsWith('data:')||url.startsWith('https:')||url.startsWith('http:'))return;
 assert(url.startsWith(base),`Resource misses Pages subpath: ${url}`);
 const relative=url.slice(base.length).split(/[?#]/)[0];
 assert(!relative.includes('..'));assert(fs.statSync(path.join(root,relative)).isFile(),`Missing resource: ${url}`);
}
for(const match of index.matchAll(/(?:src|href)="([^"]+)"/g))local(match[1]);
for(const name of fs.readdirSync(path.join(root,'assets')).filter(n=>n.endsWith('.css'))){
 const css=fs.readFileSync(path.join(root,'assets',name),'utf8');
 for(const match of css.matchAll(/url\(["']?([^\s"')]+)["']?\)/g))local(match[1]);
}
const media=JSON.parse(fs.readFileSync(path.join(root,'data/attraction-media.json')));
const food=JSON.parse(fs.readFileSync(path.join(root,'data/food-guide.json')));
let count=0;
for(const photo of [...media.attractions.flatMap(a=>a.private_reference_images||[]),...food.entries.map(e=>e.photo)]){
 const bytes=fs.readFileSync(path.join(root,photo.url));
 assert.equal(createHash('sha256').update(bytes).digest('hex'),photo.sha256);count++;
}
for(const file of ['data/official-route.json','data/xiaohongshu.json','assets/fonts/title.woff','assets/fonts/OFL.txt','ATTRIBUTIONS.md','THIRD_PARTY_NOTICES.md','.nojekyll'])assert(fs.statSync(path.join(root,file)).isFile());
assert(!fs.existsSync(path.join(root,'.git')));
console.log(`Pages subpath, font, data, licenses and ${count} original photos verified`);
