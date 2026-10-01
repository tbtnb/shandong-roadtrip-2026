export const COLLECTION_KEY='coastal-card-collections-v1';
export const CITY_ORDER=['芜湖','连云港','青岛','威海','日照','淮安'];
export const ROLE_NOTES={whole_day_replacement:'整日游玩项目，应替换当天其他安排',replaces_old_town:'替换老城安排，不建议叠加',excluded_default_candidate:'原攻略不建议本次安排，喜欢仅作收藏',unconfirmed_rain_candidate:'营业尚未确认，请先核对',stopover_comparison_only:'途中备选，选中后需重新核对返程与住宿',visual_landmark_only:'地图地标，不代表适合新增游玩'};
export function makeCards(media,food){
 const spots=(media.attractions||[]).map(a=>{const photo=a.private_reference_images?.find(p=>p.visual_verified&&p.url)||a.images?.find(p=>p.visual_verified&&p.url);const note=a.xhs_notes?.find(n=>n.note_id===photo?.note_id)||a.xhs_notes?.[0];return {key:`spot:${a.id}`,id:a.id,kind:'spot',city:a.city,name:a.name,photo,summary:a.description||(note?.body_summary?'原帖记录：'+note.body_summary:'')||`${a.city}的游玩候选。先看实景和来源，再按兴趣选择。`,address:a.address||a.city,warning:ROLE_NOTES[a.route_role]||'',source:note?.url||photo?.source_url,sourceTitle:note?.title||a.name,sourceStatus:note?.link_status_label,raw:a}});
 const meals=(food.entries||[]).map(e=>({key:`food:${e.id}`,id:e.id,kind:'food',city:e.city,name:e.name,photo:e.photo,summary:e.why||e.local_character,address:e.address||e.district||e.city,warning:e.level==='exclude'?'暂不推荐：喜欢只代表个人收藏，请先核实再决定前往':e.level==='caution'?'先核对再去：分店、营业或口碑仍需确认':'',source:e.xhs?.url,sourceTitle:e.xhs?.title,sourceStatus:e.xhs?.canonical_status,raw:e}));
 return [...spots,...meals];
}
export function cleanChoices(value){if(!value||typeof value!=='object'||Array.isArray(value))return{};return Object.fromEntries(Object.entries(value).filter(([key,v])=>/^(spot|food):[a-z0-9_-]+$/.test(key)&&['like','dislike'].includes(v)));}
export function readChoices(){try{return cleanChoices(JSON.parse(localStorage.getItem(COLLECTION_KEY)||'{}'))}catch{return{}}}
export function makeRoute(cards,choices){return CITY_ORDER.map(city=>({city,items:cards.filter(c=>c.city===city&&choices[c.key]==='like')})).filter(g=>g.items.length);}
export function routeStops(groups){if(!groups.length)return[];const stops=groups.map(g=>g.city).filter(c=>c!=='芜湖');return stops.length?['芜湖',...stops,'芜湖']:['芜湖'];}
