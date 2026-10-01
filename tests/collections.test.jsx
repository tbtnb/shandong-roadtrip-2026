import React from 'react';
import {afterEach,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,cleanup,within,waitFor} from '@testing-library/react';
import fs from 'node:fs';
import CardCollections from '../src/CardCollections.jsx';
import {makeCards,makeRoute,routeStops,COLLECTION_KEY,cleanChoices} from '../src/collection-model.js';
import {layoutExport} from '../src/collection-export.js';
const media=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
const food=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
const props={media,food};
afterEach(()=>{cleanup();localStorage.clear();vi.restoreAllMocks()});
it('includes every attraction and food in six distinct collections, including excluded records',()=>{
 const cards=makeCards(media,food);expect(cards).toHaveLength(139);expect(new Set(cards.map(c=>c.key)).size).toBe(139);expect(cards.filter(c=>c.raw.level==='exclude')).toHaveLength(16);
 render(<CardCollections {...props}/>);expect(screen.getAllByRole('button',{name:/打开.*卡片集合/})).toHaveLength(6);expect(screen.getByText('139 张卡片')).toBeTruthy();
});
it('like/dislike advance cards, undo restores the card, and selections survive remount',()=>{
 const {unmount}=render(<CardCollections {...props}/>);fireEvent.click(screen.getByRole('button',{name:'打开青岛卡片集合'}));
 const first=screen.getByRole('article').getAttribute('aria-label');fireEvent.click(screen.getByRole('button',{name:'喜欢当前卡片'}));expect(screen.getByRole('article').getAttribute('aria-label')).not.toBe(first);
 fireEvent.click(screen.getByRole('button',{name:'不喜欢当前卡片'}));fireEvent.click(screen.getByRole('button',{name:'撤销上一次选择'}));
 expect(Object.values(JSON.parse(localStorage.getItem(COLLECTION_KEY)))).toEqual(['like']);
 unmount();render(<CardCollections {...props}/>);expect(screen.getByRole('button',{name:'已喜欢 1'})).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'生成我的路线'}));expect(screen.getByLabelText('收藏城市路线示意').textContent).toContain('青岛');expect(screen.getByLabelText('收藏城市路线示意').textContent).not.toContain('威海');
});
it('food detail retains evidence and removed likes return to the pending deck',()=>{
 const e=food.entries.find(e=>e.level==='exclude');localStorage.setItem(COLLECTION_KEY,JSON.stringify({['food:'+e.id]:'like'}));render(<CardCollections {...props}/>);fireEvent.click(screen.getByRole('button',{name:'已喜欢 1'}));fireEvent.click(screen.getByRole('button',{name:`查看${e.name}详情`}));
 const modal=screen.getByRole('dialog',{name:`${e.name}详情`});expect(within(modal).getByText(e.opening||'暂未确认')).toBeTruthy();expect(within(modal).getByText(e.level_reason)).toBeTruthy();expect(within(modal).getByRole('link',{name:e.xhs.title}).getAttribute('href')).toBe(e.xhs.url);
 fireEvent.click(screen.getByRole('button',{name:'关闭详情'}));fireEvent.click(screen.getByRole('button',{name:'放回未刷列表'}));expect(screen.getByRole('button',{name:'已喜欢 0'})).toBeTruthy();
});
it('re-reviewing a liked card advances even when keeping the same preference',()=>{
 const cards=makeCards(media,food).filter(c=>c.city==='青岛').slice(0,2);localStorage.setItem(COLLECTION_KEY,JSON.stringify(Object.fromEntries(cards.map(c=>[c.key,'like']))));render(<CardCollections {...props}/>);fireEvent.click(screen.getByRole('button',{name:'打开青岛卡片集合'}));fireEvent.change(screen.getByLabelText('卡片浏览范围'),{target:{value:'like'}});expect(screen.getByRole('article').textContent).toContain(cards[0].name);fireEvent.click(screen.getByRole('button',{name:'喜欢当前卡片'}));expect(screen.getByRole('article').textContent).toContain(cards[1].name);
});
it('route uses only liked cards and all-items export pagination never drops a card',()=>{
 const cards=makeCards(media,food),choices=Object.fromEntries(cards.map(c=>[c.key,'like']));const groups=makeRoute(cards,choices);expect(routeStops(groups)).toEqual(['芜湖','连云港','青岛','威海','日照','淮安','芜湖']);
 expect(routeStops(makeRoute(cards,{[cards.find(c=>c.city==='芜湖').key]:'like'}))).toEqual(['芜湖']);
 const ctx={font:'',measureText:s=>({width:s.length*24})};const pages=layoutExport(groups,ctx);expect(pages.length).toBeGreaterThan(1);expect(pages.every(p=>p.height<=10000)).toBe(true);expect(pages.flatMap(p=>p.blocks.map(b=>b.c.key))).toEqual(groups.flatMap(g=>g.items.map(c=>c.key)));
 expect(cleanChoices({'food:good':'like','spot:ok':'dislike',bad:'like','food:oops':'yes'})).toEqual({'food:good':'like','spot:ok':'dislike'});
});
it('storage failure warns without blocking card selection',()=>{
 vi.spyOn(Storage.prototype,'setItem').mockImplementation(()=>{throw Error('full')});render(<CardCollections {...props}/>);expect(screen.getByRole('alert').textContent).toContain('未能保存');fireEvent.click(screen.getByRole('button',{name:'打开日照卡片集合'}));fireEvent.click(screen.getByRole('button',{name:'喜欢当前卡片'}));expect(screen.getByRole('button',{name:'已喜欢 1'})).toBeTruthy();
});
it('horizontal swipe selects, while vertical movement and cancelled gestures do not',()=>{
 render(<CardCollections {...props}/>);fireEvent.click(screen.getByRole('button',{name:'打开日照卡片集合'}));
 function pointer(target,type,x,y){const e=new Event(type,{bubbles:true,cancelable:true});Object.assign(e,{button:0,pointerId:1,clientX:x,clientY:y});fireEvent(target,e)}
 let card=screen.getByRole('article');pointer(card,'pointerdown',100,100);pointer(card,'pointermove',105,230);pointer(card,'pointerup',105,230);expect(screen.getByRole('button',{name:'已喜欢 0'})).toBeTruthy();
 pointer(card,'pointerdown',100,100);pointer(card,'pointermove',230,105);pointer(card,'pointercancel',230,105);pointer(card,'pointerup',230,105);expect(screen.getByRole('button',{name:'已喜欢 0'})).toBeTruthy();
 pointer(card,'pointerdown',100,100);pointer(card,'pointermove',230,105);pointer(card,'pointerup',230,105);expect(screen.getByRole('button',{name:'已喜欢 1'})).toBeTruthy();
 card=screen.getByRole('article');pointer(card,'pointerdown',230,100);pointer(card,'pointermove',100,105);pointer(card,'pointerup',100,105);expect(Object.values(JSON.parse(localStorage.getItem(COLLECTION_KEY)))).toEqual(['like','dislike']);
});
