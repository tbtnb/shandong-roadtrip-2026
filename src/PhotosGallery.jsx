import React,{useState} from 'react';
import {safeExternal} from './utils.js';
import './photo-gallery.css';
const B=import.meta.env.BASE_URL;
const cityNames=['芜湖','连云港','青岛','威海','日照','淮安'];
const photoOf=a=>a.private_reference_images?.find(p=>p.visual_verified&&p.url)||a.images?.find(p=>p.visual_verified&&p.url);
function Link({href,children}){return safeExternal(href)?<a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>:<span>{children}</span>}
export default function PhotosGallery({media,expanded,onExpanded}){
 const [city,setCity]=useState('全部'),[copied,setCopied]=useState('');
 const all=(media.attractions||[]).filter(a=>photoOf(a));
 async function copy(n){try{await navigator.clipboard.writeText(n.copy_fallback||`${n.title} ${n.author}`);setCopied(n.note_id)}catch{setCopied(`failed-${n.note_id}`)}}
 return <section className="city-photo-library" id="city-photo-library" aria-label="城市实拍图库"><div className="photo-library-heading"><div><p className="eyebrow">CITY PHOTO JOURNAL</p><h2>城市实拍 · {all.length}处</h2><p>原图已经装进手账，先看看每座城的样子。</p></div><button className="secondary" aria-expanded={expanded} aria-controls="city-photo-full" onClick={()=>onExpanded(!expanded)}>{expanded?'收起全部实拍':`打开 ${all.length} 处实拍`}</button></div>
 {!expanded&&<div className="city-photo-preview">{cityNames.map(name=>{const a=all.find(a=>a.city===name),p=a&&photoOf(a);return <button key={name} className="city-preview-card" onClick={()=>{setCity(name);onExpanded(true)}}>{p?<img src={`${B}${p.url}`} alt={`${name} · ${a.name}`} loading="lazy" width={p.width} height={p.height}/>:<span className="photo-preview-empty">图片待补</span>}<strong>{name}<span>{all.filter(a=>a.city===name).length}处</span></strong>{p&&<small>{a.name} · 摄影：{p.author}</small>}</button>})}</div>}
 {expanded&&<div id="city-photo-full"><div className="photo-city-tabs" role="group" aria-label="筛选实拍城市">{['全部',...cityNames].map(name=><button key={name} aria-pressed={city===name} onClick={()=>setCity(name)}>{name} · {name==='全部'?all.length:all.filter(a=>a.city===name).length}</button>)}</div><p className="photo-library-note">图片用于私人旅行参考，保留原图与作者署名。淮安供途中比较；浏览照片不会把地点加入路线。历史影像不代表当前天气、客流或营业。</p><div className="photo-full-grid">{all.filter(a=>city==='全部'||a.city===city).map(a=>{const p=photoOf(a),n=a.xhs_notes?.find(n=>n.note_id===p.note_id);return <article className="photo-full-card" key={a.id}><img src={`${B}${p.url}`} alt={p.alt||`${a.city} · ${a.name}`} width={p.width} height={p.height} loading="lazy"/><div className="photo-card-copy"><small>{a.city}</small><h3>{a.name}</h3><p>摄影：{p.author}</p>{n?<><Link href={n.url}>照片原帖：{n.title}</Link><p className="photo-link-status">{n.link_status_label||'此入口未重验，可能需登录 / App；可按标题与作者搜索。'}</p><button className="secondary" onClick={()=>copy(n)}>{copied===n.note_id?'已复制标题与作者':'复制标题与作者'}</button>{copied===`failed-${n.note_id}`&&<p role="status">剪贴板不可用，请手动复制上方标题与作者。</p>}{n.body_summary&&<details><summary>查看原帖摘要</summary><p>{n.body_summary}</p></details>}</>:<Link href={p.source_url}>查看照片来源</Link>}</div></article>})}</div>{!all.length&&<p role="status">照片资料正在载入，路线仍可继续查看。</p>}</div>}
 </section>
}
