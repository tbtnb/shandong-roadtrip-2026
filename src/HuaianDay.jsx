import React,{useEffect,useMemo,useState} from 'react';
import {ArrowRight,MapPin,Clock,ForkKnife} from '@phosphor-icons/react';
import {makeCards} from './collection-model.js';
import EditorialDetails from './EditorialDetails.jsx';
import {mediaUrl} from './editorial.js';
import {gaodeLink} from './lianyungang-model.js';
import './huaian-day.css';

export default function HuaianDay({food,media,onUse,onBack}){
 const [plan,setPlan]=useState(null),[error,setError]=useState(false),[detail,setDetail]=useState(null),[area,setArea]=useState('all');
 useEffect(()=>{let live=true;fetch(`${import.meta.env.BASE_URL}data/huaian-day.json`,{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>{if(live)setPlan(d)}).catch(()=>{if(live)setError(true)});return()=>{live=false}},[]);
 const cards=useMemo(()=>makeCards(media,food).filter(c=>c.city==='淮安'),[media,food]);
 if(!plan)return <section className="huaian-day"><h1>淮安的一天</h1><p role="status">{error?'行程暂时无法载入，请刷新重试。':'正在翻开淮安行程…'}</p></section>;
 function cardView(item){const card=cards.find(c=>c.id===item.id);if(!card)return null;return <article className="ha-place" key={item.id}>
  <button className="ha-place-photo" onClick={()=>setDetail(card)} aria-label={`查看${card.name}详情与相册`}>{card.photo&&<img src={mediaUrl(card.photo.url)} alt={card.name} loading="lazy"/>}<span>{item.area}</span></button>
  <div>{card.photo?.author&&<small className="ha-credit">摄影：{card.photo.author} · <a href={card.photo.source_url||card.source} target="_blank" rel="noopener noreferrer">原帖</a></small>}<small>{item.role}</small><h3><button onClick={()=>setDetail(card)}>{card.name}</button></h3><p>{item.reason}</p><p className="ha-place-note">{item.note}</p><div className="ha-card-actions"><button className="secondary" onClick={()=>setDetail(card)}>介绍与实拍</button><a href={gaodeLink(card)} target="_blank" rel="noopener noreferrer">高德导航 ↗</a></div></div>
 </article>}
 return <section className="huaian-day" aria-label="淮安一日行程">
  <header className="ha-intro"><div><p className="eyebrow">HUAIAN · 一晚停靠，慢慢逛吃</p><h1>把一天留给淮安</h1><p>{plan.summary}</p><div className="ha-intro-actions">{onUse&&<button className="primary" onClick={onUse}>用淮安替换第一晚<ArrowRight size={18}/></button>}<button className="secondary" onClick={onBack}>返回全程安排</button></div></div><figure><img src={mediaUrl(plan.cover.url)} alt={plan.cover.alt}/><figcaption>摄影：{plan.cover.author} · <a href={plan.cover.source_url} target="_blank" rel="noopener noreferrer">查看原帖</a></figcaption></figure></header>
  <div className="ha-section-heading"><p className="eyebrow">ONE DAY, TWO NEIGHBOURHOODS</p><h2>白天河下，晚上清江浦</h2><p>{plan.area_note}</p></div>
  <ol className="ha-timeline">{plan.timeline.map((item,i)=><li key={item.time}><div className="ha-time"><span>{String(i+1).padStart(2,'0')}</span><strong>{item.time}</strong></div><div><h3>{item.title}</h3><p>{item.description}</p>{item.place_id&&cards.find(c=>c.id===item.place_id)&&<button onClick={()=>setDetail(cards.find(c=>c.id===item.place_id))}>看地点详情 <ArrowRight size={15}/></button>}</div></li>)}</ol>
  <aside className="ha-late"><Clock size={23}/><div><h3>到得晚，就少逛一片</h3><p>{plan.late_arrival}</p></div></aside>
  <div className="ha-section-heading"><MapPin size={25}/><h2>这一天，挑这些地方</h2><p>点击照片看完整介绍、多来源相册和口碑；导航出发前再核对停车入口。</p></div><div className="ha-places">{plan.spots.map(cardView)}</div>
  <div className="ha-section-heading"><ForkKnife size={25}/><h2>按位置选一顿好吃的</h2><p>{plan.food_note}</p><div className="ha-area-tabs" role="group" aria-label="按淮安片区选餐厅">{['all','河下 / 淮安区','清江浦'].map(value=><button key={value} aria-pressed={area===value} onClick={()=>setArea(value)}>{value==='all'?'全部精选':value}</button>)}</div></div><div className="ha-places">{plan.food.filter(x=>area==='all'||x.area===area).map(cardView)}</div>
  <section className="ha-practical"><div><h2>开车与住宿</h2>{plan.driving.map((p,i)=><p key={i}>{p}</p>)}</div><div><h2>明天去青岛</h2>{plan.next_day.map((p,i)=><p key={i}>{p}</p>)}</div></section>
  <details className="ha-sources"><summary>本次核查的资料与时间 · {plan.checked_at}</summary><p>{plan.evidence_note}</p>{plan.sources.map(s=><p key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title} ↗</a><small>{s.note}</small></p>)}</details>
  {detail&&<EditorialDetails card={detail} onClose={()=>setDetail(null)}/>}
 </section>
}
