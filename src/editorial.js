import {useEffect,useState} from 'react';
let snapshot={entries:[]},request=null;
const listeners=new Set();
export function mediaUrl(value,base=import.meta.env.BASE_URL){
 if(typeof value!=='string'||!value.trim())return '';
 const url=value.trim();
 if(/^https:\/\//i.test(url)){try{return new URL(url).href}catch{return ''}}
 if(/^[a-z][a-z\d+.-]*:/i.test(url)||url.startsWith('//')||/[\\\x00-\x1f]/.test(url)||url.split('/').includes('..'))return '';
 return `${base}${url.replace(/^\/+/, '')}`;
}
export function useEditorial(){
 const [data,setData]=useState(snapshot);
 useEffect(()=>{listeners.add(setData);setData(snapshot);if(!request){request=fetch(`${import.meta.env.BASE_URL}data/editorial.json`,{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error('资料尚未载入');return r.json()}).then(d=>{snapshot=Array.isArray(d.entries)?d:{entries:[]};listeners.forEach(fn=>fn(snapshot))}).catch(()=>{});}return()=>listeners.delete(setData)},[]);
 return data;
}
export function editorialFor(data,card){return data.entries?.find(e=>e.id===card.id&&(!e.kind||e.kind===card.kind))}
export function albumImages(card,entry){
 const r=card.raw||{};
 const historical=card.kind==='food'?[r.photo]:[...(r.private_reference_images||[]),...(r.images||[])].filter(p=>p?.visual_verified);
 const enriched=entry?.images||[];
 const remaining=historical.filter(p=>!enriched.some(n=>(p.note_id&&n.source_id===p.note_id)||(p.source_url&&n.source_url===p.source_url)));
 const images=[...enriched,...remaining];
 const seen=new Set();
 return images.filter(p=>p?.url&&mediaUrl(p.url)&&!seen.has(p.url)&&seen.add(p.url)).map(p=>{
  const note=r.xhs_notes?.find(n=>n.note_id===p.note_id);
  const source=entry?.sources?.find(s=>s.url===p.source_url);
  const sourceName=source?.title&&(!p.source_name||['小红书','大众点评','高德地图'].includes(p.source_name))?`${source.platform||p.source_name||'来源'} · ${source.title}`:note?.title||p.source_name||card.sourceTitle||'原帖实拍';
  return {...p,source_id:p.source_id||p.note_id||p.source_url||card.source||'original',source_name:sourceName,source_url:p.source_url||note?.url||card.source,author:p.author||note?.author||r.xhs?.author||'见原帖',caption:p.caption||p.alt||card.name};
 });
}
