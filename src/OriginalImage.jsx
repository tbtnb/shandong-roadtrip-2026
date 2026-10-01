import React,{useEffect,useState} from 'react';
import {mediaUrl} from './editorial.js';
export default function OriginalImage({photo,className=''}){
 const [attempt,setAttempt]=useState(0),url=mediaUrl(photo?.url),fallback=mediaUrl(photo?.fallback_url);
 useEffect(()=>setAttempt(0),[url,fallback]);
 const activeUrl=attempt===0?url:attempt===1?fallback:'';
 return activeUrl?<img className={className} src={activeUrl} alt={photo.caption||photo.alt||'原帖实拍'} loading="lazy" referrerPolicy="no-referrer" draggable="false" onError={()=>setAttempt(a=>a===0&&fallback&&fallback!==url?1:2)}/>:<div className={`ed-image-error ${className}`} role="status">{url?'原图加载失败，请稍后重试或查看来源原帖。':'暂无可显示的原图。'}</div>;
}
