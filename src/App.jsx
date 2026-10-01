import React,{useEffect,useMemo,useReducer,useRef,useState} from 'react';
import {ArrowLeft,BookOpen,Compass,List,X,Warning} from '@phosphor-icons/react';
import {cityIds,itineraryFor,filterSources,budgetEstimate,normalizedXhs} from './utils.js';
import './styles.css';
import './journey-workspace.css';
import RouteMap from './RouteMap.jsx';
import JourneyGuide,{DayNavigator,TripDays,JourneyActions} from './JourneyGuide.jsx';
import AttractionDeck from './AttractionDeck.jsx';
import PhotosGallery from './PhotosGallery.jsx';
import FoodGuide from './FoodGuide.jsx';
import {DayRoadbook,CityNotes,Preparation,Sources} from './TravelContent.jsx';
import {initialJourney,journeyReducer} from './journey-state.js';
const B=import.meta.env.BASE_URL;
const cities=[{id:'wuhu',name:'芜湖',en:'WUHU',tag:'江城出发',desc:'半天出发中转，先做好车辆检查，吃过早餐就出发。',places:[]},{id:'lianyungang',name:'连云港',en:'LIANYUNGANG',tag:'去程歇一晚',desc:'第一晚不急着追海景。在老街吃一顿晚饭，给下一程留足精神。',places:[]},{id:'qingdao',name:'青岛',en:'QINGDAO',tag:'红瓦与碧海',desc:'选一片老城，走一段海岸。给街角小吃和海风多留一点时间。',places:[]},{id:'weihai',name:'威海',en:'WEIHAI',tag:'多留一点时间',desc:'沿海街区慢慢逛，三条玩法选一条，留时间尝当地小吃。',places:[]},{id:'rizhao',name:'日照',en:'RIZHAO',tag:'返程再歇一晚',desc:'把回家的长途切开。停好车、附近吃正餐，早到再选一处海边。',places:[]}];
const resourceNames={photos:'城市实拍',food:'美食图文',prepare:'出发准备',sources:'资料库'};
export default function App(){
 const [data,setData]=useState(null),[xhs,setXhs]=useState({entries:[]}),[media,setMedia]=useState({attractions:[]}),[error,setError]=useState('');
 const [journey,dispatch]=useReducer(journeyReducer,initialJourney);
 const {days,activeDay,activeCity,step:journeyStep,mode:experienceMode,screen:activeScreen,camera:viewMode}=journey;
 const [flat,setFlat]=useState(false),[sceneError,setSceneError]=useState(false),[sceneReady,setSceneReady]=useState(false);
 const [reducedMotion]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches),[motion,setMotion]=useState(!reducedMotion);
 const [menuOpen,setMenuOpen]=useState(false),[weatherMode,setWeatherMode]=useState(false),[galleryOpen,setGalleryOpen]=useState(true),[foodOpen,setFoodOpen]=useState(true);
 const [food,setFood]=useState({entries:[],targets:{'青岛':60,'威海':80,'连云港':40,'日照':40,'淮安':20}}),[foodLoading,setFoodLoading]=useState(true);
 const [sourceOpen,setSourceOpen]=useState(false),[sourceCity,setSourceCity]=useState('全部'),[sourceType,setSourceType]=useState('全部'),[query,setQuery]=useState(''),[sourcePage,setSourcePage]=useState(12),[copied,setCopied]=useState(''),[checked,setChecked]=useState({});
 const [estimate,setEstimate]=useState({rooms:2,roomPrice:450,people:4,foodDay:120,km:2000,consumption:8,oilPrice:8,extras:500});
 const sceneRoot=useRef(null),scene=useRef(null),planRoot=useRef(null),journeyHeading=useRef(null),workspaceRoot=useRef(null),resourceHeading=useRef(null),menuRoot=useRef(null),menuButton=useRef(null),selection=useRef(null),focusContent=useRef(false);
 const itinerary=data?itineraryFor(data,days):null,day=itinerary?.days[activeDay],city=cities.find(c=>c.id===activeCity)||cities[1],segment=data?.route_segments.find(s=>s.id===day?.route_segment),results=budgetEstimate({...estimate,nights:days-1});
 function send(action){if(data){focusContent.current=['START','STAGE','NEXT','BACK','OVERVIEW','SCREEN'].includes(action.type);dispatch({...action,itinerary:itineraryFor(data,action.days||days)})}}
 function chooseDay(index){send({type:'DAY',index})}
 function chooseDays(n){send({type:'DAYS',days:n})}
 function chooseCity(id){send({type:'CITY',city:id})}
 selection.current=chooseCity;
 function goStep(step){send(journeyStep==='overview'?{type:'START'}:{type:'STAGE',step})}
 function openScreen(screen){setMenuOpen(false);send({type:'SCREEN',screen});if(screen==='photos')setGalleryOpen(true);if(screen==='sources')setSourceOpen(true)}
 useEffect(()=>{Promise.all([fetch(`${B}data/official-route.json`,{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('行程资料暂时无法载入');return r.json()}),fetch(`${B}data/xiaohongshu.json`,{cache:'no-cache'}).then(r=>r.json())]).then(([d,x])=>{setData(d);setXhs(x)}).catch(e=>setError(e.message))},[]);
 useEffect(()=>{fetch(`${B}data/attraction-media.json`,{cache:'no-cache'}).then(r=>r.ok?r.json():{attractions:[]}).then(setMedia).catch(()=>{})},[]);
 useEffect(()=>{let gone=false;function refresh(){fetch(`${B}data/food-guide.json`,{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(d=>{if(!gone&&d)setFood(d)}).catch(()=>{}).finally(()=>{if(!gone)setFoodLoading(false)})}refresh();const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh()},60000);function visible(){if(document.visibilityState==='visible')refresh()}document.addEventListener('visibilitychange',visible);return()=>{gone=true;clearInterval(timer);document.removeEventListener('visibilitychange',visible)}},[]);
 useEffect(()=>{if(!data||!sceneRoot.current)return;let gone=false;import('./scene.js').then(({createScene})=>{if(gone)return;scene.current=createScene(sceneRoot.current,{onSelect:id=>selection.current?.(id),onReady:()=>setSceneReady(true),onError:()=>setSceneError(true),reducedMotion,viewMode});if(!scene.current)setSceneError(true);else setSceneReady(true)}).catch(()=>setSceneError(true));return()=>{gone=true;scene.current?.dispose()}},[!!data]);
 useEffect(()=>{scene.current?.selectCity(activeCity)},[activeCity,sceneReady]);
 useEffect(()=>{scene.current?.setViewMode?.(viewMode)},[viewMode,sceneReady]);
 useEffect(()=>{scene.current?.setMotion(motion&&!flat&&!sceneError&&activeScreen==='journey')},[motion,flat,sceneError,sceneReady,activeScreen]);
 useEffect(()=>{if(!itinerary)return;const from=activeDay===0?'wuhu':cityIds[itinerary.days[activeDay-1].sleep]||'wuhu';scene.current?.setDayRoute?.(from,cityIds[day.sleep]||'wuhu')},[data,activeDay,days,sceneReady]);
 useEffect(()=>{setSourcePage(12)},[sourceCity,sourceType,query]);
 useEffect(()=>{if(!data)return;const frame=requestAnimationFrame(()=>{const heading=activeScreen==='journey'?journeyHeading.current:resourceHeading.current;if(focusContent.current)heading?.focus({preventScroll:true});workspaceRoot.current?.scrollIntoView({behavior:'instant',block:'start'})});return()=>cancelAnimationFrame(frame)},[!!data,activeScreen,journeyStep,activeDay,experienceMode]);
 useEffect(()=>{if(!menuOpen)return;function outside(e){if(!menuRoot.current?.contains(e.target))setMenuOpen(false)}function key(e){if(e.key==='Escape'){setMenuOpen(false);menuButton.current?.focus()}}document.addEventListener('pointerdown',outside);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',key)}},[menuOpen]);
 const sources=useMemo(()=>!data?[]:[...normalizedXhs(xhs),...data.sources.map(s=>({...s,category:s.type.includes('official')||s.type.includes('government')?'官方 / 景区':s.id.startsWith('r_')?'路程估算':'媒体 / 资料',city:s.title.includes('青岛')||s.title.includes('崂山')?'青岛':s.title.includes('威海')||s.title.includes('刘公岛')?'威海':s.title.includes('日照')?'日照':s.title.includes('连云港')?'连云港':s.title.includes('淮安')?'淮安':'通用',summary:s.note}))],[data,xhs]);
 const filtered=filterSources(sources,{city:sourceCity,type:sourceType,query}),xhsNotes=normalizedXhs(xhs);
 async function copySource(s){try{await navigator.clipboard.writeText(`${s.title} ${s.author||''}`);setCopied(s.id)}catch{setCopied(`failed-${s.id}`)}}
 if(error)return <main className="load-screen"><Warning size={40}/><h1>海风稍等一下</h1><p>{error}。请刷新重试。</p><button className="primary" onClick={()=>location.reload()}>重新载入</button></main>;
 if(!data)return <main className="load-screen"><BookOpen size={40}/><h1>翻开这本海边手账…</h1><p>正在载入路线与核验资料</p></main>;
 const guide=experienceMode==='guide',started=journeyStep!=='overview',journeyVisible=activeScreen==='journey',resourceVisible=guide&&journeyVisible||!journeyVisible;
 return <div className="travel-app"><a className="skip-link" href="#workspace">跳到旅行内容</a><header className="masthead trip-header"><button className="brand" onClick={()=>openScreen('journey')} aria-label="海风来信，返回旅程"><BookOpen size={23}/><span>海风来信<small>COASTAL ROAD JOURNAL</small></span></button><div className="journey-reading-mode" role="group" aria-label="阅读模式"><button aria-pressed={!guide} onClick={()=>send({type:'MODE',mode:'guided'})}>沉浸体验</button><button aria-pressed={guide} onClick={()=>send({type:'MODE',mode:'guide'})}>攻略模式</button></div><div className="trip-menu" ref={menuRoot}><button ref={menuButton} className="secondary" aria-label="打开旅行资料" aria-expanded={menuOpen} aria-controls="trip-library-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={19}/>:<List size={19}/>}<span>资料</span></button>{menuOpen&&<nav id="trip-library-menu" aria-label="旅行资料"><button onClick={()=>openScreen('journey')}>返回旅程</button>{Object.entries(resourceNames).map(([id,name])=><button key={id} aria-current={activeScreen===id?'page':undefined} onClick={()=>openScreen(id)}>{name}</button>)}</nav>}</div></header>
 <main id="workspace" ref={workspaceRoot} className={`trip-workspace ${guide?'is-guide':'is-guided'} ${started?'has-started':'is-overview'}`}>
 <div hidden={!journeyVisible}>
 {(started||guide)&&<div className="trip-route-header"><div><p className="eyebrow">芜湖出发 · 山东海岸 · 分段回家</p><span>{guide?'自由查阅每一天':'沿着日期，一站一站慢慢逛'}</span></div><TripDays days={days} chooseDays={chooseDays}/></div>}
 {(started||guide)&&<DayNavigator itinerary={itinerary} activeDay={activeDay} chooseDay={chooseDay}/>}
 <div className="trip-layout"><div className="trip-map-column"><RouteMap sceneRoot={sceneRoot} scene={scene} sceneError={sceneError} sceneReady={sceneReady} viewMode={viewMode} setViewMode={camera=>send({type:'CAMERA',camera})} flat={flat} setFlat={setFlat} reducedMotion={reducedMotion} motion={motion} setMotion={setMotion} cities={cities} city={city} activeCity={activeCity} onCity={chooseCity} itinerary={itinerary} activeDay={activeDay}/></div>
 <div id="journey-content" className="trip-content-column" role={started||guide?'tabpanel':undefined} aria-label={started||guide?`第 ${activeDay+1} 天旅行内容`:undefined}>
 <JourneyGuide step={journeyStep} mode={experienceMode} days={days} chooseDays={chooseDays} day={day} activeDay={activeDay} onStep={goStep} headingRef={journeyHeading}/>
 <div hidden={!(guide||journeyStep==='day')}><DayRoadbook data={data} days={days} day={day} activeDay={activeDay} itinerary={itinerary} segment={segment} planRoot={planRoot} experienceMode={experienceMode} weatherMode={weatherMode} setWeatherMode={setWeatherMode}/></div>
 <div hidden={!(guide||journeyStep==='spots')}><AttractionDeck guided={!guide} media={media} city={city} day={day} days={days} activeDay={activeDay} data={data} onChooseDay={chooseDay} onCity={chooseCity} itinerary={itinerary}/></div>
 <div hidden={!(guide||journeyStep==='food')}><FoodGuide data={food} loading={foodLoading} activeCity={city.name} day={day} activeDay={activeDay} full scopeToCity={!guide} onBrowseAll={()=>openScreen('food')} expanded={foodOpen} onExpanded={setFoodOpen}/></div>
 {journeyStep==='finish'&&!guide&&<section className="journey-complete"><h3>把海风放进行程，准备出发</h3><p>{days} 天路线已预览。住宿、天气和预约需在出发前再核对。</p><button className="secondary" onClick={()=>send({type:'OVERVIEW'})}>重新看看全程</button></section>}
 {started&&!guide&&<JourneyActions step={journeyStep} days={days} activeDay={activeDay} onNext={()=>send({type:'NEXT'})} onBack={()=>send({type:'BACK'})} onPrepare={()=>openScreen('prepare')}/>}
 </div></div></div>
 {!journeyVisible&&<section className="resource-heading"><button className="secondary" onClick={()=>openScreen('journey')}><ArrowLeft size={18}/>{started?`返回旅程 · 第 ${activeDay+1} 天`:'返回全程预览'}</button><h1 ref={resourceHeading} tabIndex={-1}>{resourceNames[activeScreen]}</h1><p>自由翻阅资料，返回后继续原来的日期与步骤。</p></section>}
 <div className="trip-reference-content" hidden={!(resourceVisible&&(guide&&journeyVisible||activeScreen==='photos'))}><PhotosGallery media={media} expanded={galleryOpen} onExpanded={setGalleryOpen}/></div>
 <div className="trip-reference-content" hidden={activeScreen!=='food'}><FoodGuide id="food-library" data={food} loading={foodLoading} activeCity={city.name} day={day} activeDay={activeDay} full expanded onExpanded={()=>{}}/></div>
 <div className="trip-reference-content" hidden={!(resourceVisible&&(guide&&journeyVisible||activeScreen==='prepare'))}><CityNotes data={data}/><Preparation data={data} days={days} checked={checked} setChecked={setChecked} estimate={estimate} setEstimate={setEstimate} results={results}/></div>
 <div className="trip-reference-content" hidden={!(resourceVisible&&(guide&&journeyVisible||activeScreen==='sources'))}><Sources data={data} xhs={xhs} xhsNotes={xhsNotes} sourceOpen={sourceOpen} setSourceOpen={setSourceOpen} experienceMode={experienceMode} query={query} setQuery={setQuery} sourceCity={sourceCity} setSourceCity={setSourceCity} sourceType={sourceType} setSourceType={setSourceType} filtered={filtered} sourcePage={sourcePage} setSourcePage={setSourcePage} copySource={copySource} copied={copied}/></div>
 <footer className="trip-footer"><Compass size={18}/><span>跨城立体书为艺术示意 · 实拍保留作者与原帖 · 自选不替代实时导航</span></footer></main></div>;
}
