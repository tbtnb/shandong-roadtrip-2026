import fs from 'node:fs';
import assert from 'node:assert/strict';
import {targets,validateRecord} from './food-records.mjs';
const data=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
assert.deepEqual(data.targets,targets);const allowed=JSON.parse(fs.readFileSync('FOOD-REFERENCE-FILES.json'));
const reviews=JSON.parse(fs.readFileSync('research/food-photo-audit.json'));
const used=[],ids=new Set(),shops=new Set();
for(const e of data.entries){assert(/^assets\/food\/[a-z0-9_-]+\.(jpg|png|webp)$/.test(e.photo.url));assert(!e.photo.local_file);const b=fs.readFileSync('public/'+e.photo.url);validateRecord(e,b);assert.equal(reviews[e.photo.sha256]?.status,'accepted');assert.equal(reviews[e.photo.sha256]?.id,e.id);assert(e.photo.independent_review);assert.equal(e.photo.reuse_status,'private_personal_reference');assert.equal(e.photo.public_reuse_permission,'not_established');assert(!ids.has(e.id));ids.add(e.id);const shop=e.city+'|'+e.name.replace(/[\s·（）()]/g,'');assert(!shops.has(shop));shops.add(shop);used.push(e.photo.url);}
assert.deepEqual(used.sort(),allowed.sort());assert.deepEqual(fs.readdirSync('public/assets/food').map(n=>'assets/food/'+n).sort(),used.sort());
console.log(`Verified ${used.length} original food photos and matching single-post authors, source statuses and private allowlist`);
