import {cityIds} from './utils.js';

export const initialJourney={days:6,activeDay:0,activeCity:'lianyungang',step:'overview',mode:'guided',screen:'journey',camera:'overview'};
const stages=['day','spots','food'];
function dayState(state,index,itinerary){
 const activeDay=Math.max(0,Math.min(index,itinerary.days.length-1));
 return {...state,activeDay,activeCity:cityIds[itinerary.days[activeDay].sleep]||'wuhu'};
}
// Date and destination form one selection. Camera and reference views never reset it.
export function journeyReducer(state,action){
 switch(action.type){
  case 'START':return {...state,step:'day',screen:'journey',camera:'immersive'};
  case 'STAGE':return stages.includes(action.step)?{...state,step:action.step,screen:'journey'}:state;
  case 'DAY':return {...dayState(state,action.index,action.itinerary),step:state.step==='overview'?'overview':'day',screen:'journey'};
  case 'CITY':{
   const matching=action.itinerary.days.map((d,i)=>cityIds[d.sleep]===action.city?i:-1).filter(i=>i>=0);
   if(!matching.length)return state;
   const index=matching.includes(state.activeDay)?state.activeDay:matching[0];
   return {...dayState(state,index,action.itinerary),step:state.step==='overview'?'overview':'day'};
  }
  case 'DAYS':return {...dayState({...state,days:action.days},state.activeDay,action.itinerary),step:state.step==='finish'?'day':state.step};
  case 'NEXT':{
   const index=stages.indexOf(state.step);
   if(index>=0&&index<2)return {...state,step:stages[index+1]};
   if(state.step==='food')return state.activeDay<state.days-1?{...dayState(state,state.activeDay+1,action.itinerary),step:'day'}:{...state,step:'finish'};
   return state;
  }
  case 'BACK':{
   if(state.step==='finish')return {...state,step:'food'};
   const index=stages.indexOf(state.step);
   if(index>0)return {...state,step:stages[index-1]};
   return {...state,step:'overview',camera:'overview'};
  }
  case 'OVERVIEW':return {...state,step:'overview',screen:'journey',camera:'overview'};
  case 'MODE':return {...state,mode:action.mode,screen:'journey'};
  case 'SCREEN':return ['journey','photos','food','prepare','sources','collections','lianyungang'].includes(action.screen)?{...state,screen:action.screen}:state;
  case 'CAMERA':return ['overview','immersive'].includes(action.camera)?{...state,camera:action.camera}:state;
  default:return state;
 }
}
