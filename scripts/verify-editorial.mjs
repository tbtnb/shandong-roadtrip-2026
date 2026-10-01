import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const filename='public/data/editorial.json';
const data=JSON.parse(fs.readFileSync(filename));
const food=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
const media=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
const expected=[...food.entries.map(e=>e.id),...media.attractions.map(e=>e.id)].sort();
assert.deepEqual(data.entries.map(e=>e.id).sort(),expected,'Editorial must cover every card exactly once');
for(const e of data.entries){
 assert(e.overview.length>0&&e.overview.every(p=>typeof p==='string'&&p.length>15),`Editorial missing: ${e.id}`);
 assert(e.sources.length>0&&e.review_summary.coverage,`Source coverage missing: ${e.id}`);
 for(const s of e.sources){const u=new URL(s.url);assert.equal(u.protocol,'https:');assert(s.platform&&s.title&&s.read_scope,`Missing source details: ${e.id}`);if(u.hostname.endsWith('xiaohongshu.com'))assert.equal(u.search,'');}
 for(const p of e.images){assert.equal(p.permission,'user_confirmed');assert(p.author&&p.source_name&&p.source_url&&p.observed_at,`Missing photo provenance: ${e.id}`);assert.equal(new URL(p.url).protocol,'https:');assert(e.sources.some(s=>s.url===p.source_url),`Photo/source mismatch: ${e.id}`);if(p.fallback_url){assert(/^assets\/editorial\/[a-f0-9]{64}\.(jpg|png|webp|gif)$/.test(p.fallback_url));const bytes=fs.readFileSync('public/'+p.fallback_url);assert.equal(bytes.length,p.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),p.sha256);}}
}
assert(!/\/Users\/|\/workspace\/|xsec_token|access_token|refresh_token|session_token|cookie=/i.test(JSON.stringify(data)),'Private data leaked');
console.log(`Verified ${data.entries.length} editorials and ${data.entries.reduce((n,e)=>n+e.images.length,0)} attributed remote photos`);
