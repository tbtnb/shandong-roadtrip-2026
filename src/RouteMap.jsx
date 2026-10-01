import React from 'react';
import {Car,Compass,ArrowLeft,ArrowRight,ArrowCounterClockwise,Pause,Play,MapTrifold} from '@phosphor-icons/react';

const points={wuhu:[18,83],lianyungang:[33,64],rizhao:[48,47],qingdao:[62,31],weihai:[83,15]};
export function FlatRoute({cities,activeCity,onCity,destination,origin='wuhu',motion}){
 const p=points[destination]||points.wuhu,start=points[origin]||points.wuhu;
 return <div className="flat-route" aria-label="可点击的二维跨城路线示意图">
  <svg viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="route-direction" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#b95e3e"/></marker></defs><path d="M600 0H495L458 83 389 100 342 154 309 195 252 238 212 307 235 400H600Z" fill="#c7dedc"/><path d="M108 332L198 256 372 124 498 60" className="route-out"/><path d="M498 60L288 188 108 332" className="route-home"/>{origin!==destination&&<path d={`M${start[0]*6} ${start[1]*4}L${p[0]*6} ${p[1]*4}`} className="route-active" markerEnd="url(#route-direction)"/>}<text x="410" y="290">黄海</text><text x="43" y="369">长江 · 内陆起点</text></svg>
  <span className="flat-route-key"><i/>去程 <i/>返程 · 线形不代表实际道路</span>
  {cities.map(c=><button key={c.id} className={`flat-city ${activeCity===c.id?'selected':''}`} style={{left:`${points[c.id][0]}%`,top:`${points[c.id][1]}%`}} aria-label={`地图城市：${c.name}`} aria-pressed={activeCity===c.id} onClick={()=>onCity(c.id)}><span/>{c.name}</button>)}
  <span key={`${origin}-${destination}`} className={`flat-car ${motion?'animate':''}`} style={{left:`${p[0]}%`,top:`${p[1]}%`,'--start-x':`${start[0]}%`,'--start-y':`${start[1]}%`}} aria-label={`小车位于${cities.find(c=>c.id===destination)?.name||'芜湖'}`}><Car weight="fill" size={26}/></span>
 </div>
}
export default function RouteMap({sceneRoot,scene,sceneError,sceneReady,flat,setFlat,reducedMotion,motion,setMotion,cities,city,activeCity,onCity,itinerary,activeDay,chooseDay,days,chooseDays,scrollPlan}){
 const day=itinerary.days[activeDay];const destination=cities.find(c=>c.name===day.sleep)?.id||'wuhu';const origin=activeDay===0?'wuhu':cities.find(c=>c.name===itinerary.days[activeDay-1].sleep)?.id||'wuhu';const useFlat=flat||sceneError;
 return <section className="route-first" aria-labelledby="hero-title">
  <div className="route-heading"><div><p className="eyebrow">2026 · 国庆自驾手账</p><h1 id="hero-title">是时候去看海了<span>。</span></h1></div><div className="days-toggle" aria-label="行程天数"><button aria-pressed={days===5} onClick={()=>chooseDays(5)}>5 天</button><button aria-pressed={days===6} onClick={()=>chooseDays(6)}>6 天<span>更从容</span></button></div></div>
  <div className="route-world">
   <div className="world-topline"><span><Compass size={17}/><span className="map-instructions">{useFlat?'可点击路线图':'左右滑动转立体书 · 上下滑动读攻略'}<small>跨城艺术示意，非导航 · 芜湖为长江内陆起点{reducedMotion?' · 减少动态':''}</small></span></span><button className="view-toggle" onClick={()=>setFlat(!useFlat)} disabled={sceneError} aria-pressed={useFlat}><MapTrifold size={17}/>{sceneError?'2D 模式':useFlat?'切换 3D':'切换 2D'}</button></div>
   <div className="route-canvas"><div ref={sceneRoot} className={`scene ${useFlat?'scene-hidden':''}`} style={{position:'absolute'}} aria-hidden={useFlat} aria-label="芜湖至山东海岸的三维路线示意图"/>{useFlat&&<FlatRoute cities={cities} activeCity={activeCity} onCity={onCity} destination={destination} origin={origin} motion={motion}/>}{!sceneReady&&!sceneError&&!flat&&<div className="scene-loading"><Compass size={28}/><span>展开山海立体书…</span><button className="secondary" onClick={()=>setFlat(true)}>先看 2D 路线</button></div>}
    
    <div className="scene-tools">{!useFlat&&<><button aria-label="向左旋转地图" onClick={()=>scene.current?.rotate(-1)}><ArrowLeft size={18}/></button><button aria-label="向右旋转地图" onClick={()=>scene.current?.rotate(1)}><ArrowRight size={18}/></button><button aria-label="重置三维视角" onClick={()=>scene.current?.reset()}><ArrowCounterClockwise size={18}/></button></>}<button disabled={reducedMotion} title={reducedMotion?'已按系统减少动态设置关闭动画，刷新可重新读取设置':undefined} aria-label={reducedMotion?'遵循系统减少动态设置':motion?'暂停三维动态':'开启三维动态'} aria-pressed={!motion} onClick={()=>setMotion(v=>!v)}>{motion?<Pause size={18}/>:<Play size={18}/>}</button></div>
   </div>
   <div className="route-city-peek"><span>{city.en} / 这一站</span><strong>{city.name}</strong><a href="#city-attractions">翻开景点卡<ArrowRight size={16}/></a></div>
   <div className="map-date-dock" style={{gridTemplateColumns:`repeat(${days},minmax(0,1fr))`}} aria-label="地图日期选择">{itinerary.days.map((d,i)=><button key={d.date} aria-pressed={activeDay===i} onClick={()=>chooseDay(i)}><small>DAY {i+1}</small><strong>{d.date.slice(5).replace('-','.')}</strong><span>{i===days-1?'回芜湖':d.sleep}</span></button>)}</div>
  </div>
  <div className="route-day-preview"><div><strong>{day.date.slice(5).replace('-','.')} · {day.title}</strong><p>{days===6?'威海连住两晚，1 个完整游玩日 + 抵离碎片':'威海仅 1 晚，删去完整游玩日，往返休息不压缩'}</p></div><button className="secondary" onClick={scrollPlan}>看今天路书<ArrowRight size={16}/></button></div>
  <p className="map-caption">跨城艺术示意，非导航 · 芜湖在内陆长江边{sceneError?' · 设备不支持 WebGL，已切至可点 2D 路线':''}</p>
 </section>
}
