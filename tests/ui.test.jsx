import React from 'react';import {afterEach,beforeEach,describe,it,expect,vi} from 'vitest';import {render,screen,fireEvent,cleanup,within} from '@testing-library/react';import fs from 'node:fs';
vi.mock('../src/scene.js',()=>({createScene:vi.fn((el,{onReady})=>{onReady();return{selectCity:vi.fn(),setMotion:vi.fn(),setDestination:vi.fn(),setDayRoute:vi.fn(),rotate:vi.fn(),reset:vi.fn(),setViewMode:vi.fn(),dispose:vi.fn()}})}));
import App from '../src/App.jsx';
import {createScene} from '../src/scene.js';
const data=JSON.parse(fs.readFileSync('public/data/official-route.json'));
const media=JSON.parse(fs.readFileSync('public/data/attraction-media.json'));
const xhs=JSON.parse(fs.readFileSync('public/data/xiaohongshu.json'));
beforeEach(()=>{localStorage.clear();global.fetch=vi.fn(url=>Promise.resolve({ok:true,json:()=>Promise.resolve(String(url).includes('xiaohongshu')?xhs:String(url).includes('attraction-media')?media:data)}))});afterEach(cleanup);
async function ready(guideMode=true){
 render(<App/>);await screen.findByRole('heading',{name:/是时候/});
 if(guideMode){
   const modes=screen.getByRole('group',{name:'阅读模式'});
   fireEvent.click(within(modes).getByRole('button',{name:'攻略模式',exact:true}));
   expect(within(modes).getByRole('button',{name:'攻略模式',exact:true}).getAttribute('aria-pressed')).toBe('true');
   openDisclosure('跳转日期与城市');openDisclosure('地图工具');
 }
}
// Stage tests explicitly reject hidden mounts and collapsed disclosure contents.
function expectVisible(node){
 expect(node).toBeTruthy();expect(node.closest('[hidden]')).toBeNull();
 let current=node.parentElement;while(current){if(current.tagName==='DETAILS')expect(current.open).toBe(true);current=current.parentElement;}
 return node;
}
function openDisclosure(name){
 const summary=screen.getByText(name,{selector:'summary'}),details=summary.closest('details');
 if(!details.open)fireEvent.click(summary);expect(details.open).toBe(true);return details;
}

describe('interactive travel journal (simulated DOM; not visual/WebGL QA)',()=>{
 it('loads default six-day route then switches to safe five-day route',async()=>{await ready();expect(screen.getAllByRole('tab')).toHaveLength(6);fireEvent.click(screen.getByRole('button',{name:'5 天',exact:true}));expect(screen.getAllByRole('tab')).toHaveLength(5);expect(screen.getByText('5 天版少的是威海完整游玩日。')).toBeTruthy();fireEvent.click(screen.getAllByRole('tab')[4]);expect(screen.getByRole('tabpanel').textContent).toContain('日照 → 芜湖');expect(screen.getByRole('tabpanel').textContent).toContain('6–7 小时');expect(screen.getByRole('tabpanel').textContent).toContain('7.75–10.5 小时');});
 it('city buttons update details and repeated day switching works',async()=>{await ready();const cityPicker=screen.getByRole('combobox',{name:'浏览其他城市'});fireEvent.change(cityPicker,{target:{value:'qingdao'}});expect(cityPicker.value).toBe('qingdao');expect(screen.getByText('RED ROOFS & BLUE SEA')).toBeTruthy();fireEvent.click(screen.getAllByRole('tab')[0]);fireEvent.click(screen.getAllByRole('tab')[3]);expect(screen.getByRole('tabpanel').textContent).toContain('三条替代线选一');});
 it('rain alternative toggles without changing trip plan',async()=>{await ready();fireEvent.click(screen.getByRole('button',{name:'雨天 / 大风怎么改'}));expect(screen.getByText('保留城市，减少户外')).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'收起雨天备选'}));expect(screen.queryByText('保留城市，减少户外')).toBeNull();expect(screen.getAllByRole('tab')).toHaveLength(6);});
 it('source search, city filter, empty state and reset work',async()=>{await ready();fireEvent.click(screen.getByRole('button',{name:'打开来源库'}));const city=screen.getByRole('combobox',{name:'按城市筛选来源'});fireEvent.change(city,{target:{value:'威海'}});fireEvent.change(screen.getByRole('combobox',{name:'按类型筛选来源'}),{target:{value:'小红书'}});if(xhs.entries.filter(e=>e.city==='威海').length===0)expect(screen.getByText('这组筛选还没有条目')).toBeTruthy();fireEvent.change(screen.getByRole('searchbox'),{target:{value:'不存在的地名xyz'}});expect(screen.getByText('这组筛选还没有条目')).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'清空筛选'}));expect(city.value).toBe('全部');expect(screen.getByRole('searchbox').value).toBe('');});
 it('budget inputs recalculate and checklist is reversible',async()=>{await ready();const initial=screen.getByText('¥ 9,160');expect(initial).toBeTruthy();fireEvent.change(screen.getByRole('spinbutton',{name:'每间每晚房价 元'}),{target:{value:'500'}});expect(screen.getByText('¥ 9,660')).toBeTruthy();const check=screen.getByRole('checkbox',{name:'轮胎、灯光、雨刷与油液检查'});fireEvent.click(check);expect(check.checked).toBe(true);expect(screen.getByText('1 / 6 项准备好了')).toBeTruthy();fireEvent.click(check);expect(check.checked).toBe(false);});
 it('motion pause and keyboard day navigation work',async()=>{await ready();const button=screen.getByRole('button',{name:'暂停三维动态'});fireEvent.click(button);expect(screen.getByRole('button',{name:'开启三维动态'}).getAttribute('aria-pressed')).toBe('true');const tabs=screen.getAllByRole('tab');fireEvent.keyDown(tabs[0],{key:'End'});expect(tabs[5].getAttribute('aria-selected')).toBe('true');fireEvent.keyDown(tabs[5],{key:'Home'});expect(tabs[0].getAttribute('aria-selected')).toBe('true');});
});

describe('map-first route, honest media and private journal state',()=>{
 it('2D map is clickable and date controls move the route car',async()=>{await ready();fireEvent.click(screen.getByRole('button',{name:'切换 2D'}));expect(screen.getByLabelText('可点击的二维跨城路线示意图')).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'地图城市：青岛'}));await screen.findByRole('region',{name:'青岛景点卡'});const dock=screen.getByLabelText('地图日期选择');fireEvent.click(within(dock).getAllByRole('button')[2]);expect(screen.getByLabelText('小车位于威海')).toBeTruthy();fireEvent.click(within(dock).getAllByRole('button')[5]);expect(screen.getByLabelText('小车位于芜湖')).toBeTruthy();});
 it('chosen attraction dwell budget updates, removes, persists and separates 5/6 day plans',async()=>{await ready();fireEvent.click(within(screen.getByLabelText('地图日期选择')).getAllByRole('button')[1]);const card=(await screen.findByRole('button',{name:/栈桥 · 回澜阁 查看实景与攻略/})).closest('article');fireEvent.click(within(card).getByRole('button',{name:/查看实景与攻略/}));fireEvent.click(within(card).getByRole('button',{name:/加入 10.03 自选/}));const select=screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'});fireEvent.change(select,{target:{value:'120'}});expect(document.querySelector('.pick-total').textContent).toContain('120');expect(screen.getByText('新增绕路时间：待实时导航核算。')).toBeTruthy();expect(localStorage.getItem('coastal-journal-v1')).toContain('120');fireEvent.click(screen.getByRole('button',{name:'5 天',exact:true}));expect(document.querySelector('.pick-total').textContent).toContain('0');fireEvent.click(screen.getByRole('button',{name:/^6 天/}));expect(document.querySelector('.pick-total').textContent).toContain('120');fireEvent.click(screen.getByRole('button',{name:'移除栈桥 · 回澜阁'}));expect(document.querySelector('.pick-total').textContent).toContain('0');});
 it('city stamps can be collected and reversed without unlocking anything',async()=>{await ready();const stamp=screen.getByRole('button',{name:'收藏这一站的章'});fireEvent.click(stamp);expect(screen.getByRole('button',{name:'已盖章 · 点按撤回'}).getAttribute('aria-pressed')).toBe('true');expect(JSON.parse(localStorage.getItem('coastal-journal-v1')).stamps).toEqual(['lianyungang']);fireEvent.click(screen.getByRole('button',{name:'已盖章 · 点按撤回'}));expect(JSON.parse(localStorage.getItem('coastal-journal-v1')).stamps).toEqual([]);});
 it('licensed real images retain author/license while missing dedicated posts stay pending',async()=>{await ready();fireEvent.click(within(screen.getByLabelText('地图日期选择')).getAllByRole('button')[1]);const card=(await screen.findByRole('button',{name:/栈桥 · 回澜阁 查看实景与攻略/})).closest('article');expect(within(card).getByRole('img').getAttribute('src')).toContain('assets/places/');expect(within(card).getByRole('link',{name:/畅🌈 · 小红书/})).toBeTruthy();expect(within(card).getByRole('link',{name:/照片原帖：青岛栈桥/}).getAttribute('href')).toBe(media.attractions.find(a=>a.id==='qd_zhanqiao').private_reference_images[0].source_url);fireEvent.click(within(card).getByRole('button',{name:/查看实景与攻略/}));if(media.attractions.find(a=>a.id==='qd_zhanqiao').xhs_notes.some(n=>n.dedicated_scenery_post))expect(within(card).getAllByText('景点专门攻略').length).toBeGreaterThan(0);else expect(within(card).getByText('该景点专门介绍帖仍待核，城市综合攻略不充数')).toBeTruthy();});
});

describe('interruption and fallback resilience',()=>{
 it('a missing WebGL context leaves a real clickable route and source content',async()=>{vi.mocked(createScene).mockReturnValueOnce(null);await ready();await screen.findByRole('button',{name:'2D 模式'});expect(screen.getByLabelText('可点击的二维跨城路线示意图')).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'地图城市：威海'}));expect(await screen.findByRole('region',{name:'威海景点卡'})).toBeTruthy();expect(screen.getByRole('button',{name:'打开来源库'})).toBeTruthy();});
 it('saved stamps survive a remount and invalid storage values are ignored',async()=>{await ready();fireEvent.click(screen.getByRole('button',{name:'收藏这一站的章'}));cleanup();await ready();expect(screen.getByRole('button',{name:'已盖章 · 点按撤回'})).toBeTruthy();cleanup();localStorage.setItem('coastal-journal-v1',JSON.stringify({stamps:['unrecognized','wuhu','wuhu'],plans:{bad:{test:9999}}}));await ready();expect(JSON.parse(localStorage.getItem('coastal-journal-v1')).stamps).toEqual(['wuhu']);expect(JSON.parse(localStorage.getItem('coastal-journal-v1')).plans).toEqual({});});
});

it('system reduced motion has an honest disabled motion control',async()=>{const mq=vi.spyOn(window,'matchMedia').mockImplementation(()=>({matches:true,addEventListener(){},removeEventListener(){}}));try{await ready();expect(screen.getByRole('button',{name:'遵循系统减少动态设置'}).disabled).toBe(true);expect(vi.mocked(createScene).mock.calls.at(-1)[1].reducedMotion).toBe(true);}finally{mq.mockRestore()}});

it('Banyue Bay exposes one source fallback and never duplicate failed embed loaders',async()=>{
 await ready();fireEvent.click(within(screen.getByLabelText('地图日期选择')).getAllByRole('button')[2]);
 const card=(await screen.findByRole('button',{name:/半月湾 查看实景与攻略/})).closest('article');
 fireEvent.click(within(card).getByRole('button',{name:/查看实景与攻略/}));
 expect(within(card).getAllByRole('link',{name:'打开 Getty 原图源页'})).toHaveLength(1);
 expect(within(card).queryByRole('button',{name:'加载 Getty 官方实景图'})).toBeNull();
 expect(card.querySelector('iframe,script')).toBeNull();
 expect(screen.getByText(/精选 12 个地点中/)).toBeTruthy();
});

it('private XHS source photos keep attribution and remain distinct from licensed coverage',async()=>{
 await ready();const count=media.attractions.filter(a=>a.private_reference_images?.length).length;expect(screen.getByText(new RegExp(`全量 36 张景点卡：${count} 张已有小红书私人参考图，${36-count} 张仍待补`))).toBeTruthy();
 const card=screen.getByRole('button',{name:/民主路老街 查看实景与攻略/}).closest('article');
 expect(within(card).getByRole('img').getAttribute('src')).toContain('xhs_lyg_democracy_road.jpg');
 expect(within(card).getByText('私人旅行参考 · 未取得公开转载许可')).toBeTruthy();
 expect(within(card).getByRole('link',{name:/巧克力爱好者 · 小红书/}).getAttribute('href')).toBe('https://www.xiaohongshu.com/explore/6a4f6bf5000000001503ccf8');
});

it('Huai’an candidates are accessible without inventing a route stop or stamp',async()=>{
 await ready();const dock=screen.getByLabelText('地图日期选择');const before=within(dock).getAllByRole('button').map(b=>b.getAttribute('aria-pressed'));
 fireEvent.click(within(screen.getByRole('group',{name:'按城市查看景点照片'})).getByRole('button',{name:'淮安 · 备选'}));
 const cards=screen.getByRole('region',{name:'淮安景点卡'});
 for(const name of ['里运河文化长廊','御码头','河下古镇'])expect(within(cards).getByRole('button',{name:new RegExp(name+' 查看实景与攻略')})).toBeTruthy();
 expect(within(cards).queryByRole('button',{name:'收藏这一站的章'})).toBeNull();
 expect(within(dock).getAllByRole('button').map(b=>b.getAttribute('aria-pressed'))).toEqual(before);
 fireEvent.click(within(cards).getByRole('button',{name:'连云港',exact:true}));
 expect(screen.getByRole('region',{name:'连云港景点卡'})).toBeTruthy();
});

describe('guided journey visible stages and reading-mode state',()=>{
 it('starts with a single journey CTA, progresses through a day and spots, and completes',async()=>{
   await ready(false);
   expect(vi.mocked(createScene).mock.calls.at(-1)[1].viewMode).toBe('overview');
   expectVisible(screen.getByRole('heading',{name:'先选天数，看看全程'}));
   expect(screen.getAllByRole('button',{name:'开始旅程',exact:true})).toHaveLength(1);
   expect(screen.queryByRole('tabpanel')).toBeNull();expect(screen.queryByRole('article',{name:/第 .* 天路书/})).toBeNull();
   expect(screen.queryByRole('region',{name:'连云港景点卡'})).toBeNull();
   expect(document.querySelector('.journey-map-tools').open).toBe(false);
   fireEvent.click(screen.getByRole('button',{name:'开始旅程',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'第 1 天 · 先读当天路书'}));
   expectVisible(screen.getByRole('article',{name:'第 1 天路书'}));expect(screen.queryByRole('region',{name:'连云港景点卡'})).toBeNull();
   expect(createScene.mock.results.at(-1).value.setViewMode).toHaveBeenLastCalledWith('immersive');
   fireEvent.click(screen.getByRole('button',{name:'看看这一站',exact:true}));
   expectVisible(screen.getByRole('region',{name:'连云港景点卡'}));
   expect(screen.queryByRole('tabpanel')).toBeNull();
   expect(screen.getByText('浏览其他城市与途中备选',{selector:'summary'}).closest('details').open).toBe(false);
   fireEvent.click(screen.getByRole('button',{name:'继续第 2 天',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'第 2 天 · 先读当天路书'}));
   expect(screen.getByRole('article',{name:'第 2 天路书'}).textContent).toContain('连云港 → 青岛');
   const dates=within(openDisclosure('跳转日期')).getAllByRole('button');
   fireEvent.click(dates[5]);
   expectVisible(screen.getByRole('heading',{name:'第 6 天 · 先读当天路书'}));
   expect(screen.getByRole('article',{name:'第 6 天路书'}).textContent).toContain('日照 → 芜湖');
   fireEvent.click(screen.getByRole('button',{name:'看看这一站',exact:true}));
   fireEvent.click(screen.getByRole('button',{name:'完成旅程预览',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'旅程预览完成'}));
   expect(screen.queryByRole('region',{name:'芜湖景点卡'})).toBeNull();
   expect(document.querySelector('.journey-actions-fixed').querySelectorAll('button')).toHaveLength(2);
   fireEvent.click(within(openDisclosure('地图工具')).getByRole('button',{name:'返回全图',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'先选天数，看看全程'}));
   fireEvent.click(screen.getByRole('button',{name:'开始旅程',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'第 6 天 · 先读当天路书'}));
 });

 it('reading mode roundtrip preserves current day, expanded card, stamp and separate five/six-day plans',async()=>{
   await ready(false);fireEvent.click(screen.getByRole('button',{name:'开始旅程',exact:true}));
   fireEvent.click(within(openDisclosure('跳转日期')).getAllByRole('button')[1]);
   fireEvent.click(screen.getByRole('button',{name:'看看这一站',exact:true}));
   const card=screen.getByRole('button',{name:/栈桥 · 回澜阁 查看实景与攻略/}).closest('article');
   fireEvent.click(within(card).getByRole('button',{name:/查看实景与攻略/}));
   fireEvent.click(within(card).getByRole('button',{name:/加入 10.03 自选/}));
   fireEvent.change(screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'}),{target:{value:'120'}});
   fireEvent.click(screen.getByRole('button',{name:'收藏这一站的章'}));
   const modes=screen.getByRole('group',{name:'阅读模式'});
   fireEvent.click(within(modes).getByRole('button',{name:'攻略模式',exact:true}));
   expectVisible(screen.getByRole('tabpanel'));expectVisible(screen.getByRole('region',{name:'青岛景点卡'}));
   expect(screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'}).value).toBe('120');
   expect(screen.getByRole('button',{name:'已盖章 · 点按撤回'}).getAttribute('aria-pressed')).toBe('true');
   fireEvent.click(screen.getByRole('button',{name:'5 天',exact:true}));
   expect(document.querySelector('.pick-total').textContent).toContain('0');
   fireEvent.click(screen.getByRole('button',{name:/^6 天/}));
   expect(screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'}).value).toBe('120');
   fireEvent.click(within(modes).getByRole('button',{name:'沉浸体验',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'第 2 天 · 看看这一站'}));
   expect(screen.queryByRole('tabpanel')).toBeNull();
   expectVisible(screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'}));
   expect(screen.getByRole('button',{name:'已盖章 · 点按撤回'}).getAttribute('aria-pressed')).toBe('true');
   fireEvent.click(screen.getByRole('button',{name:'上一步 · 当天路书',exact:true}));
   expectVisible(screen.getByRole('article',{name:'第 2 天路书'}));expect(screen.queryByRole('region',{name:'青岛景点卡'})).toBeNull();
   fireEvent.click(screen.getByRole('button',{name:'看看这一站',exact:true}));
   expect(screen.getByRole('combobox',{name:'栈桥 · 回澜阁停留分钟'}).value).toBe('120');
   fireEvent.click(screen.getByRole('button',{name:'移除栈桥 · 回澜阁'}));
   expect(document.querySelector('.pick-total').textContent).toContain('0');
 });

 it('guided tools and optional cities remain discoverable, including an honest 2D fallback',async()=>{
   vi.mocked(createScene).mockReturnValueOnce(null);await ready(false);
   expectVisible(await screen.findByLabelText('可点击的二维跨城路线示意图'));
   const tools=openDisclosure('地图工具');expectVisible(within(tools).getByRole('button',{name:'2D 模式'}));
   fireEvent.click(screen.getByRole('button',{name:'开始旅程',exact:true}));
   fireEvent.click(screen.getByRole('button',{name:'看看这一站',exact:true}));
   const extra=openDisclosure('浏览其他城市与途中备选');
   fireEvent.click(within(extra).getByRole('button',{name:'淮安 · 备选'}));
   const region=expectVisible(screen.getByRole('region',{name:'淮安景点卡'}));
   expect(within(region).queryByRole('button',{name:'收藏这一站的章'})).toBeNull();
   for(const name of ['里运河文化长廊','御码头','河下古镇'])expectVisible(within(region).getByRole('button',{name:new RegExp(name+' 查看实景与攻略')}));
   fireEvent.click(screen.getByRole('button',{name:'继续第 2 天',exact:true}));
   expectVisible(screen.getByRole('heading',{name:'第 2 天 · 先读当天路书'}));
   expect(screen.getByLabelText('小车位于青岛')).toBeTruthy();
 });
});
