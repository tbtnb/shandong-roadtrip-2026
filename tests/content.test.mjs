import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {itineraryFor,budgetEstimate,filterSources,safeExternal,normalizedXhs} from '../src/utils.js';
const data=JSON.parse(fs.readFileSync('public/data/official-route.json'));
test('five and six day itineraries retain safe overnight return',()=>{for(const n of [5,6]){const trip=itineraryFor(data,n);assert.equal(trip.days.length,n);assert.equal(trip.days.at(-1).route_segment,'rizhao_wuhu');assert.equal(trip.days.at(-2).sleep,'日照')}assert.equal(itineraryFor(data,6).overnights.filter(x=>x==='威海').length,2)});
test('source links and all itinerary citations are valid',()=>{const ids=new Set(data.sources.map(s=>s.id));for(const s of data.sources)assert.ok(safeExternal(s.url));for(const t of data.itineraries)for(const d of t.days)for(const id of d.source_ids)assert.ok(ids.has(id),id)});
test('no personal contact or participant identity published',()=>{const s=fs.readFileSync('public/data/official-route.json','utf8');assert.ok(!s.includes('成年男性'));assert.ok(!s.includes('用户确认'));assert.ok(!s.includes('4人中只有'))});
test('budget formula is explicit and safe with zero people',()=>{assert.deepEqual(budgetEstimate({}),{hotel:4500,food:2880,fuel:1280,extras:500,total:9160,perPerson:2290});assert.ok(Number.isFinite(budgetEstimate({people:0}).perPerson))});
test('sources filter and URL sanitization',()=>{assert.equal(filterSources([{city:'青岛',title:'停车',category:'小红书'},{city:'威海',title:'海边',category:'官方'}],{city:'青岛',query:'停车'}).length,1);assert.equal(safeExternal('javascript:alert(1)'),false);assert.equal(normalizedXhs({entries:[]}).length,0)});
test('route buffers are not hidden as pure drive times',()=>{for(const s of data.route_segments){assert.ok(s.door_to_door_planning_hours_range[0]>=s.pure_driving_hours_range[0]);assert.ok(s.holiday_traffic_buffer_hours_range[1]>=0)}});
test('XHS entries are distinct, actually read, and separate from official counts',()=>{const x=JSON.parse(fs.readFileSync('public/data/xiaohongshu.json'));assert.deepEqual(Object.keys(x.target),['青岛','威海','连云港','日照']);assert.equal(new Set(x.entries.map(e=>e.id)).size,x.entries.length);for(const e of x.entries){assert.match(e.read_status,/正文已打开并阅读/);assert.ok(e.summary);assert.ok(safeExternal(e.url))}if(x.status==='complete')for(const c of Object.keys(x.target))assert.ok(x.entries.filter(e=>e.city===c).length>=20)});

test('published real photos are licensed, attributed and public manifest contains no local paths or tokens',()=>{
 const media=JSON.parse(fs.readFileSync(new URL('../public/data/attraction-media.json',import.meta.url)));
 const raw=JSON.stringify(media);assert.ok(!raw.includes('/workspace/'));
 for(const a of media.attractions)for(const i of a.images){assert.equal(i.reuse_status,'explicitly_licensed');assert.equal(i.visual_verified,true);assert.ok(i.author&&i.source_url&&i.license&&i.license_url);assert.ok(i.url.startsWith('assets/places/'));}
 for(const a of media.attractions)for(const n of a.xhs_notes){if(n.topic_scope==='parking_only')assert.equal(n.dedicated_scenery_post,false);}
});

test('public data does not expose private login workflow or internal file locations',()=>{
 for(const path of ['official-route','xiaohongshu','attraction-media']){
  const raw=fs.readFileSync(`public/data/${path}.json`,'utf8');
  assert.ok(!/\/workspace\/|\/Users\/|access_token|已登录云|researcher|public_link_status|成年男性/.test(raw));
 }
 assert.match(JSON.stringify(data.itineraries),/按一位司机分段规划/);
});

test('public XHS URLs are parameter-free and do not imply verified direct access',()=>{
 const x=JSON.parse(fs.readFileSync('public/data/xiaohongshu.json'));
 const m=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
 for(const n of [...x.entries,...m.attractions.flatMap(a=>a.xhs_notes)]){
  if(new URL(n.url).hostname==='www.xiaohongshu.com'){
   assert.equal(new URL(n.url).search,'');assert.equal(new URL(n.url).hash,'');
   assert.notEqual(n.official_share_reopen_verified,true);assert.equal(n.anonymous_access_verified,false);
  }
 }
});

test('new stopover evidence keeps driving rest buffers and makes Rizhao sightseeing optional',()=>{
 for(const trip of data.itineraries){const d=trip.days.find(d=>d.sleep==='日照');assert.match(d.blocks[1].plan,/至少两次20–30分钟休息/);assert.match(d.blocks[3].plan,/东夷不叠加/);assert.match(d.decision_detail.parking.strategy,/新能源与普通车政策不能混同/);}
 assert.match(data.city_synthesis['连云港'].main_line,/休息/);
 assert.match(data.city_synthesis['日照'].main_line,/二选一/);
});

test('explicitly excluded XHS references do not fill the city reading target',()=>{
 const x=JSON.parse(fs.readFileSync('public/data/xiaohongshu.json'));
 const wh=x.entries.filter(n=>n.city==='威海');assert.equal(wh.filter(n=>n.counts_toward_20===false).length,2);assert.ok(wh.filter(n=>n.counts_toward_20!==false).length>=20);
});


test('all four city targets use only complete, explicitly eligible readings',()=>{
 const x=JSON.parse(fs.readFileSync('public/data/xiaohongshu.json'));
 for(const c of Object.keys(x.target))assert.equal(x.entries.filter(n=>n.city===c&&n.counts_toward_20!==false&&!n.partial).length,20,c);
 for(const n of x.entries.filter(n=>n.partial))assert.equal(n.counts_toward_20,false);
});

test('the Qingdao core and Wuhu landmark keep single-place references with honest entry links',()=>{
 const m=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
 for(const id of ['qd_zhanqiao','qd_zhongshan_road','qd_mayfour_square','wh_zhongjiang_pagoda']){
  const a=m.attractions.find(a=>a.id===id);const n=a.xhs_notes.find(n=>n.note_id===a.preferred_note_id);
  assert.equal(n.dedicated_scenery_post,true);assert.equal(n.official_share_reopen_verified,false);assert.equal(n.anonymous_access_verified,false);
 }
});

test('private-reference assets preserve source identity without claiming a public license',()=>{
 const media=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));const allowed=JSON.parse(fs.readFileSync('PRIVATE-REFERENCE-FILES.json'));
 const imgs=media.attractions.flatMap(a=>a.private_reference_images||[]);assert.equal(imgs.length,2);
 for(const i of imgs){assert.equal(i.reuse_status,'private_personal_reference');assert.equal(i.public_reuse_permission,'not_established');assert.ok(i.author&&i.note_id&&i.attribution);assert.equal(new URL(i.source_url).search,'');assert.ok(allowed.includes(i.url));assert.ok(fs.statSync('public/'+i.url).size>0);}
});
