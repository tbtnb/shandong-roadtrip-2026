// Reviewed, later observations supplement the original collection snapshot.
// Photo/source identity is deliberately not patchable here.
export function applyFoodUpdate(entry,patch){
 if(!patch)return entry;
 const allowed=['address','opening','opening_checked','checked_at','price_cny_per_person','price_basis','why','risks','level','level_reason'];
 const result={...entry};
 for(const key of allowed)if(Object.hasOwn(patch,key))result[key]=patch[key];
 for(const platform of ['dianping','gaode'])if(patch[platform])result[platform]={...entry[platform],...patch[platform]};
 return result;
}
