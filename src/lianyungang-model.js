import gcoord from 'gcoord';
// Ties preserve first appearance in the uploaded lists; votes, not distance, set priority.
export function rankSelections(lists,cards){
 const byId=new Map(cards.map(c=>[c.id,c])),items=new Map();
 for(const list of lists)for(const id of new Set(list.places)){if(!items.has(id))items.set(id,{id,lists:[],card:byId.get(id)});items.get(id).lists.push(list.id)}
 return [...items.values()].sort((a,b)=>b.lists.length-a.lists.length).map((p,i)=>({...p,number:i+1,votes:p.lists.length}));
}
export function gaodeLink(card){
 const p=card.navigation;
 if(p?.gcj02)return `https://uri.amap.com/marker?position=${p.gcj02.join(',')}&name=${encodeURIComponent(card.name)}&coordinate=gaode&src=coastal-roadtrip&callnative=1`;
 return card.raw?.gaode?.url||`https://uri.amap.com/search?keyword=${encodeURIComponent(card.city+card.name)}&city=${encodeURIComponent(card.city)}&src=coastal-roadtrip&callnative=1`;
}
// Map tiles use WGS84; navigation preserves the original GCJ02 position.
export function gcjToWgs(point){return gcoord.transform(point,gcoord.GCJ02,gcoord.WGS84).reverse()}
