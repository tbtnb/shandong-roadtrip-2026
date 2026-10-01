import React,{useRef,useState} from 'react';
import OriginalImage from './OriginalImage.jsx';
import './swipe-photos.css';
export default function SwipePhotos({photos,index=0,onChange,label='照片相册',swipeSelect=false}){
 const gesture=useRef(null),[offset,setOffset]=useState(0);
 const at=Math.min(index,Math.max(0,photos.length-1));
 const go=n=>{setOffset(0);onChange(Math.max(0,Math.min(photos.length-1,n)))};
 const stop=e=>{if(!swipeSelect)e.stopPropagation()};
 const finish=(e,cancel=false)=>{stop(e);const g=gesture.current;gesture.current=null;setOffset(0);if(!g||cancel||e.target.closest('button,a'))return;const dx=e.clientX-g.x,dy=e.clientY-g.y;if(swipeSelect){if(Math.abs(dx)<8&&Math.abs(dy)<8){const rect=e.currentTarget.getBoundingClientRect();go(at+(e.clientX-rect.left<rect.width/2?-1:1));}return;}if(Math.abs(dx)>Math.min(60,g.width*.16)&&Math.abs(dx)>Math.abs(dy)*1.3)go(at+(dx<0?1:-1));else if(Math.abs(dx)<8&&Math.abs(dy)<8){const rect=e.currentTarget.getBoundingClientRect();go(at+(e.clientX-rect.left<rect.width/2?-1:1));}};
 const start=Math.max(0,Math.min(at-3,photos.length-7));
 return <div className="swipe-photos" role="region" aria-roledescription="轮播图" aria-label={label} tabIndex={0}
 onPointerDown={e=>{stop(e);if(e.button!==0||e.target.closest('button,a'))return;gesture.current={x:e.clientX,y:e.clientY,width:e.currentTarget.clientWidth};e.currentTarget.setPointerCapture?.(e.pointerId)}}
 onPointerMove={e=>{stop(e);const g=gesture.current;if(!g)return;const dx=e.clientX-g.x,dy=e.clientY-g.y;if(!swipeSelect&&Math.abs(dx)>Math.abs(dy)*1.2)setOffset((at===0&&dx>0||at===photos.length-1&&dx<0)?dx*.18:dx)}}
 onPointerUp={e=>finish(e)} onPointerCancel={e=>finish(e,true)} onLostPointerCapture={()=>{gesture.current=null;setOffset(0)}}
 onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.stopPropagation();e.preventDefault();go(at+(e.key==='ArrowRight'?1:-1))}}}>
 <div className={`swipe-track ${offset?'is-dragging':''}`} style={{transform:`translateX(calc(${-at*100}% + ${offset}px))`}}>{photos.map((p,i)=><div className="swipe-slide" key={`${p.url}-${i}`} aria-hidden={i!==at}>{Math.abs(i-at)<=1&&<OriginalImage photo={p}/>}</div>)}</div>
 <span className="swipe-count" role="status" aria-live="polite">{at+1} / {photos.length}</span>
 {photos.length>1&&<div className="swipe-dots" aria-label="照片进度">{photos.slice(start,start+7).map((p,i)=>{const n=start+i;return <button key={n} className={(n===start&&start>0||n===start+6&&n<photos.length-1)?'is-edge':''} aria-label={`查看第 ${n+1} 张照片`} aria-current={n===at?'true':undefined} onClick={()=>go(n)}><span/></button>})}</div>}
 </div>;
}
