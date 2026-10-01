import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {rankSelections,gcjToWgs,gaodeLink} from '../src/lianyungang-model.js';
const read=n=>JSON.parse(fs.readFileSync(new URL(`../public/data/${n}.json`,import.meta.url)));
const selection=read('lianyungang-selections'),locations=read('lianyungang-locations');
test('four uploaded lists preserve 44 choices and 20 unique ranked places',()=>{const r=rankSelections(selection.lists,[]);assert.equal(selection.lists.reduce((n,s)=>n+s.places.length,0),44);assert.equal(r.length,20);assert.deepEqual(r.slice(0,3).map(p=>p.id),['lyg_dasao','lyg_hongxia','lyg_suji']);assert.deepEqual([4,3,2,1].map(n=>r.filter(p=>p.votes===n).length),[3,4,7,6]);assert.equal(new Set(r.map(p=>p.number)).size,20);assert.equal(rankSelections([{id:'1',places:['x','x']}],[])[0].votes,1)});
test('all selected places have traceable city coordinates and correct navigation order',()=>{for(const p of rankSelections(selection.lists,[])){const l=locations.places[p.id];assert.ok(l.source.startsWith('https://'));const [lng,lat]=l.gcj02;assert.ok(lng>119&&lng<119.6&&lat>34.4&&lat<34.9,p.id);const [wlat,wlng]=gcjToWgs(l.gcj02);assert.ok(Math.abs(wlat-lat)<.02&&Math.abs(wlng-lng)<.02);const u=new URL(gaodeLink({name:p.id,navigation:l}));assert.equal(u.searchParams.get('position'),`${lng},${lat}`);assert.equal(u.searchParams.get('coordinate'),'gaode')}});
test('branch uncertainty remains explicit for unresolved source branches',()=>{assert.match(locations.places.lyg_weifanglou.note,/分店待确认/);assert.match(locations.places.lyg_zhengbing.note,/分店待确认/)});
