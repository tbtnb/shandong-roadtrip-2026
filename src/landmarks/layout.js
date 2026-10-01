// Illustrative book layout, not geographic coordinates or navigation.
// The road stays empty; stopover alternatives have their own southwest corner.
export const LANDMARK_SLOTS={
 qd_zhongshan_road:{x:-2.45,z:-2.45,size:.83},
 qd_badaguan:{x:-2.45,z:.78,size:.86},
 qd_second_beach:{x:1.20,z:-2.52,size:.78},
 qd_olympic_sailing:{x:3.33,z:-2.02,y:.405,size:1.02},
 qd_fushan_bay:{x:3.48,z:.15,y:.405,size:.97},
 qd_signal_hill:{x:-3.52,z:-1.36,size:.78},
 qd_xiaoyu_hill:{x:-3.48,z:-.24,size:.78},
 qd_laoshan:{x:-3.47,z:-2.56,size:.90},
 qd_underwater:{x:.78,z:-1.57,size:.66},
 qd_minjiang_road:{x:-2.47,z:-1.36,size:.78},
 qd_yunxiao_road:{x:-2.47,z:-.24,size:.78},
 wh_banyue_bay:{x:-2.27,z:-4.13,size:.83},
 wh_maotou_hill:{x:-3.40,z:-4.15,size:.84},
 wh_international_beach:{x:-1.11,z:-6.53,size:.83},
 wh_torch_eighth:{x:-2.27,z:-5.35,size:.86},
 wh_liugong_island:{x:3.80,z:-6.23,y:.405,size:1.00},
 wh_naxianghai:{x:3.79,z:-4.98,y:.405,size:.92},
 wh_bluewis:{x:3.58,z:-3.65,y:.405,size:1.02},
 wh_hanlefang:{x:-3.42,z:-5.35,size:.84},
 wh_weihai_park:{x:-1.10,z:-5.35,size:.77},
 wh_yuehai_park:{x:-1.10,z:-4.13,size:.76},
 wh_oulefang:{x:-2.28,z:-6.54,size:.83},
 wh_city_museum:{x:-3.43,z:-6.54,size:.87},
 lyg_democracy_road:{x:-3.42,z:3.74,size:.95},
 lyg_yanhe_lane:{x:-2.19,z:3.79,size:.92},
 rz_wanpingkou:{x:-1.66,z:1.62,size:.85},
 rz_dongyi_town:{x:-2.88,z:2.07,size:.99},
 ha_li_canal:{x:-3.45,z:6.70,size:.84,optional:true},
 ha_yumatou:{x:-2.39,z:6.85,size:.82,optional:true},
 ha_hexia_town:{x:-3.54,z:4.97,size:.84,optional:true},
 wuhu_riverside:{x:-.93,z:6.88,size:.88},
};

export function placeLandmarks(THREE,assets,parent){
 return assets.map(asset=>{
  const slot=LANDMARK_SLOTS[asset.id];
  if(!slot)throw new Error(`Missing landmark placement: ${asset.id}`);
  const group=asset.group;
  group.updateMatrixWorld(true);
  const original=new THREE.Box3().setFromObject(group);
  const size=original.getSize(new THREE.Vector3());
  const scale=Math.min(slot.size/Math.max(size.x,size.z,.01),1.35/Math.max(size.y,.01));
  group.scale.setScalar(scale);
  // Factories are centered, but use actual geometry to avoid relying on claims.
  const center=original.getCenter(new THREE.Vector3());
  group.position.set(slot.x-center.x*scale,(slot.y??.603)-original.min.y*scale,slot.z-center.z*scale);
  group.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
  parent.add(group);group.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(group),focus=bounds.getCenter(new THREE.Vector3());
  return {...asset,optional:Boolean(slot.optional),bounds,focus:focus.toArray(),position:[slot.x,slot.y??.603,slot.z]};
 });
}
