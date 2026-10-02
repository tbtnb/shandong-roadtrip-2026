import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {itineraryFor} from '../src/utils.js';
import {journeyReducer,initialJourney} from '../src/journey-state.js';
const read=name=>JSON.parse(fs.readFileSync(new URL('../public/data/'+name,import.meta.url),'utf8'));
const data=read('official-route.json');
test('Huaian replacement preserves trip dates and return while connecting both driving days',()=>{
 for(const count of [5,6]){
  const original=itineraryFor(data,count),changed=itineraryFor(data,count,'淮安');
  assert.equal(changed.days.length,count);
  assert.deepEqual(changed.days.map(d=>d.date),original.days.map(d=>d.date));
  assert.equal(changed.days[0].sleep,'淮安');
  assert.equal(changed.days[0].route_segment,'wuhu_huaian');
  assert.equal(changed.days[1].route_segment,'huaian_qingdao');
  assert.deepEqual(changed.days.slice(2),original.days.slice(2));
  assert.equal(original.days[0].sleep,'连云港');
  const state=journeyReducer(initialJourney,{type:'FIRST_NIGHT',firstNight:'淮安',itinerary:changed});
  assert.equal(state.activeCity,'huaian');
  const shortened=journeyReducer({...state,activeDay:5},{type:'DAYS',days:5,itinerary:itineraryFor(data,5,'淮安')});
  assert.equal(shortened.activeDay,4);
 }
});
test('Huaian published places resolve to real existing cards and route citations',()=>{
 const plan=read('huaian-day.json'),media=read('attraction-media.json'),food=read('food-guide.json');
 const ids=new Set([...media.attractions,...food.entries].map(x=>x.id));
 assert.equal(plan.spots.length,3);assert.equal(plan.food.length,8);
 for(const p of [...plan.spots,...plan.food])assert.ok(ids.has(p.id),p.id);
 const sourceIds=new Set(data.sources.map(s=>s.id));
 for(const day of data.huaian_variant.days)for(const id of day.source_ids)assert.ok(sourceIds.has(id),id);
 assert.ok(fs.existsSync(new URL('../public/'+plan.cover.url,import.meta.url)));
});
