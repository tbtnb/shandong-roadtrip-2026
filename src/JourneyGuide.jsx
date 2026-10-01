import React from 'react';
import {ArrowLeft,ArrowRight} from '@phosphor-icons/react';

export default function JourneyGuide({step,days,chooseDays,day,activeDay,itinerary,chooseDay,onStep,onOverview,onPrepare,headingRef,cities,activeCity,onCity}){
 const number={overview:1,day:2,spots:3,finish:4}[step];
 const titles={overview:'先选天数，看看全程',day:`第 ${activeDay+1} 天 · 先读当天路书`,spots:`第 ${activeDay+1} 天 · 看看这一站`,finish:'旅程预览完成'};
 const hints={overview:'从芜湖出发，沿山东海岸向北，再分段回家。选好节奏，就开始逐日预览。',day:'先看转场、休息和天气备选，准备好再翻这一站的景点。',spots:'翻开感兴趣的景点，再把适合的项目放进当天安排。浏览不会记录为真实到访。',finish:`已经走完 ${days} 天的行程预览。接下来核对住宿、天气与预约，让计划更踏实。`};
 const dayOptions=<div className="journey-day-options" aria-label="地图日期选择">{itinerary.days.map((d,i)=><button key={d.date} aria-pressed={i===activeDay} onClick={()=>chooseDay(i)}><small>第 {i+1} 天</small><strong>{d.date.slice(5).replace('-','.')}</strong><span>{i===days-1?'回芜湖':d.sleep}</span></button>)}</div>;
 const duration=<div className="days-toggle" aria-label="行程天数"><button aria-pressed={days===5} onClick={()=>chooseDays(5)}>5 天</button><button aria-pressed={days===6} onClick={()=>chooseDays(6)}>6 天<span>更从容</span></button></div>;
 return <section id="journey-guide" className="journey-guide" aria-labelledby="journey-stage-title">
  <div className="journey-progress" aria-label={`步骤 ${number} / 4`}><span>步骤 {number} / 4</span><span>{step==='overview'?`${days} 天 · 全程路线`:`${day.date} · 第 ${activeDay+1} 天`}</span></div>
  <div className="journey-guide-body"><div><h2 id="journey-stage-title" ref={headingRef} tabIndex={-1}>{titles[step]}</h2><p>{hints[step]}</p></div>{step==='overview'&&duration}</div>
  <div className={`journey-actions ${step!=='overview'?'journey-actions-fixed':''}`}>{step!=='overview'&&<button className="secondary" onClick={()=>step==='spots'?onStep('day'):step==='finish'?onStep('spots'):onOverview()}><ArrowLeft size={18}/>{step==='day'?'上一步 · 全程路线':step==='spots'?'上一步 · 当天路书':'上一步 · 最后一站'}</button>}
   <button className="primary" onClick={()=>step==='overview'?onStep('day'):step==='day'?onStep('spots'):step==='spots'?(activeDay<days-1?chooseDay(activeDay+1):onStep('finish')):onPrepare()}>{step==='overview'?'开始旅程':step==='day'?'看看这一站':step==='spots'?(activeDay<days-1?`继续第 ${activeDay+2} 天`:'完成旅程预览'):'出发准备'}<ArrowRight size={18}/></button>
  </div>
  {step!=='overview'&&<div className="journey-adjustments"><details><summary>跳转日期</summary>{dayOptions}</details><details><summary>调整旅程</summary>{duration}<p>5 天版少一个威海完整游玩日；切换保留当前有效日期和景点安排。</p><label>浏览其他城市<select aria-label="浏览其他城市" value={activeCity} onChange={e=>onCity(e.target.value)}>{cities.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label><button className="secondary" onClick={onOverview}>返回全图</button></details></div>}
 </section>
}
