import React,{useState} from 'react';
import {afterEach,it,expect} from 'vitest';
import {render,screen,fireEvent,cleanup,within} from '@testing-library/react';
import fs from 'node:fs';
import PhotosGallery from '../src/PhotosGallery.jsx';
import FoodGuide from '../src/FoodGuide.jsx';
const media=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
const source=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
// Isolate filter behavior from the growing research pool; identity fields retain actual originals.
const food={...source,entries:[{...source.entries.find(e=>e.city==='连云港'),level:'exclude'},{...source.entries.find(e=>e.city==='威海'),level:'caution'}]};
afterEach(cleanup);
function Gallery(){const[expanded,setExpanded]=useState(false);return <PhotosGallery media={media} expanded={expanded} onExpanded={setExpanded}/>}
it('six city previews open the full library without entering or changing the journey',()=>{
 render(<Gallery/>);const section=screen.getByRole('region',{name:'城市实拍图库'});expect(within(section).getAllByRole('img')).toHaveLength(6);
 fireEvent.click(screen.getByRole('button',{name:'打开 36 处实拍'}));expect(within(section).getAllByRole('img')).toHaveLength(36);
 fireEvent.click(screen.getByRole('button',{name:'淮安 · 3'}));expect(within(section).getAllByRole('img')).toHaveLength(3);
 const a=media.attractions.find(a=>a.name==='御码头'),p=a.private_reference_images[0],n=a.xhs_notes.find(n=>n.note_id===p.note_id);
 expect(within(section).getByRole('link',{name:`照片原帖：${n.title} ↗`}).getAttribute('href')).toBe(n.url);expect(within(section).getByText(`摄影：${p.author}`)).toBeTruthy();
});
it('food default filters omit excluded records, while the empty action makes them discoverable',()=>{
 render(<FoodGuide data={food} activeCity="连云港" day={{sleep:'连云港'}} activeDay={0} full onExpanded={()=>{}}/>);
 expect(screen.queryByRole('article')).toBeNull();fireEvent.click(screen.getByRole('button',{name:'查看全部采集记录（含暂不推荐）'}));expect(screen.getAllByRole('article')).toHaveLength(food.entries.length);
 fireEvent.change(screen.getByLabelText('美食城市'),{target:{value:'威海'}});expect(screen.getAllByRole('article')).toHaveLength(food.entries.filter(e=>e.city==='威海').length);
 const e=food.entries.find(e=>e.city==='威海'),card=screen.getByRole('heading',{name:e.name,exact:true}).closest('article');expect(within(card).getByRole('img').getAttribute('src')).toContain(e.photo.url);
 expect(within(card).getByRole('link',{name:`小红书单篇原帖 · ${e.xhs.title} · ${e.xhs.author} ↗`}).getAttribute('href')).toBe(e.xhs.url);
 expect(within(card).getByText(e.xhs.canonical_status)).toBeTruthy();expect(within(card).getByRole('link',{name:'大众点评 · 门店 ↗'}).getAttribute('href')).toBe(e.dianping.url);
 fireEvent.change(screen.getByLabelText('美食类别'),{target:{value:'dessert'}});expect(screen.queryAllByRole('article').length).toBe(food.entries.filter(e=>e.city==='威海'&&e.category==='dessert').length);
});
it('daily food stays in the selected itinerary city and sends broader browsing to the library',()=>{
 let opened=false;render(<FoodGuide data={food} activeCity="连云港" day={{sleep:'连云港'}} activeDay={0} full scopeToCity onBrowseAll={()=>{opened=true}} onExpanded={()=>{}}/>);
 expect(screen.queryByRole('combobox',{name:'美食城市'})).toBeNull();expect(screen.queryByRole('article')).toBeNull();
 fireEvent.click(screen.getByRole('button',{name:'去全部美食资料中找'}));expect(opened).toBe(true);expect(screen.queryByRole('article')).toBeNull();
});
it('daily food filters and source evidence remain usable without a collapsible whole-library header',()=>{
 render(<FoodGuide data={food} activeCity="威海" day={{sleep:'威海'}} activeDay={2} full scopeToCity onExpanded={()=>{}}/>);
 const card=screen.getByRole('article');expect(card.textContent).toContain(food.entries.find(e=>e.city==='威海').name);
 expect(document.querySelector('.food-guide>details')).toBeNull();expect(within(card).getByRole('link',{name:'小红书原帖 ↗'})).toBeTruthy();
 const summary=within(card).getByText('地址、营业与核验依据',{selector:'summary'});fireEvent.click(summary);expect(summary.closest('details').open).toBe(true);
});
