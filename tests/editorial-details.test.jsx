import React,{useState} from 'react';
import {afterEach,it,expect,vi} from 'vitest';
import {render,screen,fireEvent,cleanup,within,waitFor} from '@testing-library/react';
import EditorialDetails,{SourceAlbum,OriginalImage} from '../src/EditorialDetails.jsx';
import FoodGuide from '../src/FoodGuide.jsx';
import PhotosGallery from '../src/PhotosGallery.jsx';
import {mediaUrl,albumImages} from '../src/editorial.js';
const card={key:'spot:fixture',id:'fixture',kind:'spot',name:'海岸测试',city:'青岛',summary:'旧介绍',raw:{}};
const entry={id:'fixture',kind:'spot',overview:['两段完整介绍之一','两段完整介绍之二'],highlights:['沿海步道'],practical:['坐公交到达'],cautions:['浪大时不下礁石'],review_summary:{xiaohongshu:'小红书正文与两位作者经验对照',dianping:'点评分店尚未确认，未读取近期差评',coverage:'两篇可读原帖；门店近期评价未读'},sources:[{platform:'小红书',title:'甲的海边记录',author:'作者甲',url:'https://example.com/post/a',read_scope:'正文和全部三张原图'},{platform:'大众点评',title:'乙的门店页',url:'https://example.com/shop/b',read_scope:'只读到门店页照片，评价未读'}],images:Array.from({length:5},(_,i)=>({url:`https://example.com/photo/${i}.jpg`,source_id:i<3?'a':'b',source_name:i<3?'甲的海边记录':'乙的门店页',source_url:i<3?'https://example.com/post/a':'https://example.com/shop/b',author:i<3?'作者甲':'作者乙',caption:`第${i+1}张实景`,permission:'user_confirmed'}))};
afterEach(()=>{cleanup();vi.unstubAllGlobals()});
it('resolves local paths under base and keeps HTTPS remote paths intact while rejecting unsafe protocols',()=>{
 expect(mediaUrl('assets/a.jpg','/trip/')).toBe('/trip/assets/a.jpg');expect(mediaUrl('/assets/a.jpg','/trip/')).toBe('/trip/assets/a.jpg');expect(mediaUrl('https://example.com/a.jpg','/trip/')).toBe('https://example.com/a.jpg');for(const url of ['javascript:alert(1)','data:image/png;base64,abc','http://example.com/a','//evil.com/a','../a','\\evil'])expect(mediaUrl(url)).toBe('');
});
it('five images from two sources filter, wrap, select thumbnails, and enlarge with source attribution',()=>{
 render(<SourceAlbum card={card} entry={entry}/>);
 expect(screen.getByText('实拍相册 · 5 张')).toBeTruthy();const stage=()=>document.querySelector('.ed-album-stage img');expect(stage().getAttribute('src')).toBe(entry.images[0].url);
 fireEvent.click(screen.getByRole('button',{name:'上一张照片'}));expect(stage().getAttribute('src')).toBe(entry.images[4].url);fireEvent.click(screen.getByRole('button',{name:'下一张照片'}));expect(stage().getAttribute('src')).toBe(entry.images[0].url);
 fireEvent.change(screen.getByLabelText('筛选照片来源'),{target:{value:'b'}});expect(screen.getByRole('status').textContent).toContain('1 / 2');expect(stage().getAttribute('src')).toBe(entry.images[3].url);expect(screen.getByText('摄影：作者乙 · 乙的门店页')).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:'查看第 2 张照片'}));expect(stage().getAttribute('src')).toBe(entry.images[4].url);fireEvent.click(screen.getByRole('button',{name:'放大查看原图'}));const zoom=screen.getByRole('dialog',{name:'原图放大查看'});expect(within(zoom).getByRole('img').getAttribute('src')).toBe(entry.images[4].url);fireEvent.keyDown(zoom,{key:'Escape'});expect(screen.queryByRole('dialog')).toBeNull();
 fireEvent.change(screen.getByLabelText('筛选照片来源'),{target:{value:'all'}});expect(screen.getAllByRole('button',{name:/查看第 .* 张照片/})).toHaveLength(5);
});
it('remote image uses no referer, retries local backup once, then shows an explicit error and resets on new photo',()=>{
 const {rerender}=render(<OriginalImage photo={{url:'https://example.com/broken.jpg',fallback_url:'assets/backup.jpg'}}/>);expect(screen.getByRole('img').getAttribute('referrerpolicy')).toBe('no-referrer');fireEvent.error(screen.getByRole('img'));expect(screen.getByRole('img').getAttribute('src')).toContain('assets/backup.jpg');fireEvent.error(screen.getByRole('img'));expect(screen.queryByRole('img')).toBeNull();expect(screen.getByRole('status').textContent).toContain('原图加载失败');rerender(<OriginalImage photo={{url:'https://example.com/next.jpg'}}/>);expect(screen.getByRole('img').getAttribute('src')).toBe('https://example.com/next.jpg');
});
it('shared editorial cache requests once and renders full text and platform scope in the closable dialog',async()=>{
 const fetcher=vi.fn().mockResolvedValue({ok:true,json:async()=>({updated_at:'2026-10-01',entries:[entry]})});vi.stubGlobal('fetch',fetcher);
 function Open(){const[open,setOpen]=useState(true);return open?<EditorialDetails card={card} onClose={()=>setOpen(false)}/>:<p>详情已关闭</p>}
 render(<Open/>);await waitFor(()=>expect(screen.getByText(entry.overview[1])).toBeTruthy());expect(fetcher).toHaveBeenCalledTimes(1);expect(screen.getByText(entry.review_summary.dianping)).toBeTruthy();expect(screen.getByText(entry.review_summary.coverage)).toBeTruthy();expect(screen.getByText(entry.cautions[0])).toBeTruthy();expect(screen.getByText(entry.sources[1].read_scope)).toBeTruthy();expect(document.body.style.overflow).toBe('hidden');fireEvent.click(screen.getByRole('button',{name:'关闭详情'}));expect(screen.getByText('详情已关闭')).toBeTruthy();expect(document.body.style.overflow).not.toBe('hidden');
 render(<EditorialDetails card={card} onClose={()=>{}}/>);expect(screen.getByText(entry.overview[1])).toBeTruthy();expect(fetcher).toHaveBeenCalledTimes(1);
});
it('historical authorized originals remain fallback and duplicate URLs are not counted twice',()=>{
 const historical={...card,raw:{private_reference_images:[{url:'assets/existing.jpg',visual_verified:true,note_id:'a',author:'原作者'}],xhs_notes:[{note_id:'a',title:'原帖',url:'https://example.com/post'}]}};
 expect(albumImages(historical,{images:[{url:'assets/existing.jpg'}]})).toHaveLength(1);expect(albumImages(historical)[0].source_name).toBe('原帖');expect(albumImages(historical,{images:[{url:'https://example.com/remote.jpg',source_id:'a'}]})).toHaveLength(1);
});

it('food and photo libraries open the shared full detail dialog from their own entry points',()=>{
 const food={entries:[{id:'meal-fixture',name:'测试小吃',city:'青岛',status:'complete',level:'optional',category:'snack',why:'手工当地小吃',specialties:['馄饨'],photo:{url:'assets/meal.jpg',author:'食客'},xhs:{title:'小吃原帖',author:'食客',url:'https://example.com/meal'}}]};
 const view=render(<FoodGuide data={food} activeCity="青岛" day={{sleep:'青岛'}} activeDay={0} full onExpanded={()=>{}}/>);
 fireEvent.click(screen.getByRole('button',{name:'阅读完整详情 · 1 张实拍'}));expect(screen.getByRole('dialog',{name:'测试小吃详情'})).toBeTruthy();expect(screen.getByText('大众点评口碑分析')).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'关闭详情'}));view.unmount();
 render(<PhotosGallery media={{attractions:[{id:'fixture',name:'海岸测试',city:'青岛',description:'旧介绍',private_reference_images:[{url:'assets/shore.jpg',visual_verified:true,author:'海边作者'}]}]}} expanded onExpanded={()=>{}}/>);
 fireEvent.click(screen.getByRole('button',{name:/阅读完整详情/}));expect(screen.getByRole('dialog',{name:'海岸测试详情'})).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'关闭详情'}));expect(screen.queryByRole('dialog')).toBeNull();
});
it('album pointer gestures and arrow keys stay inside the gallery interaction boundary',()=>{
 const bubble=vi.fn();render(<div onPointerUp={bubble} onKeyDown={bubble}><SourceAlbum card={card} entry={entry}/></div>);
 const stage=document.querySelector('.ed-album-stage');fireEvent.pointerDown(stage,{clientX:200,clientY:30});fireEvent.pointerUp(stage,{clientX:40,clientY:30});expect(bubble).not.toHaveBeenCalled();fireEvent.keyDown(screen.getByRole('button',{name:'下一张照片'}),{key:'ArrowRight'});expect(bubble).not.toHaveBeenCalled();
});
