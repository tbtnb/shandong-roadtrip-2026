import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {targets,validateRecord,publicRecord} from './food-records.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.resolve(process.argv[2]||path.join(root,'../../work/food-research'));
const agents=['food_qd_oldtown','food_wh_hanlefang','food_lyg_snacks','food_rz_meals','food_wuhu_snacks','food_ha_meals'];
const reviews=JSON.parse(fs.readFileSync(path.join(root,'research/food-photo-audit.json')));
const previous=fs.existsSync(path.join(root,'FOOD-REFERENCE-FILES.json'))?JSON.parse(fs.readFileSync(path.join(root,'FOOD-REFERENCE-FILES.json'))):[];
const entries=[],files=[],ids=new Set(),shops=new Set();let pending=0,unreviewed=0;
for(const agent of agents){const dir=path.join(source,agent,'records');if(!fs.existsSync(dir))continue;for(const name of fs.readdirSync(dir).filter(n=>n.endsWith('.json')).sort()){
 const e=JSON.parse(fs.readFileSync(path.join(dir,name)));if(e.status!=='complete'){pending++;continue;}
 const original=fs.realpathSync(e.photo.local_file);if(!original.startsWith(fs.realpathSync(source)+path.sep))throw Error('Original outside research directory');
 const b=fs.readFileSync(original),info=validateRecord(e,b),shop=e.city+'|'+e.name.replace(/[\s·（）()]/g,'');
 const review=reviews[e.photo.sha256];if(!review||review.status!=='accepted'){unreviewed++;continue;}if(review.id!==e.id)throw Error('Photo review identity mismatch');e.photo.visual_evidence=review.visual_evidence;e.photo.independent_review={checked_at:review.checked_at,reviewer:review.reviewer,method:review.method};
 if(ids.has(e.id)||shops.has(shop))throw Error(`Duplicate shop: ${e.id}`);ids.add(e.id);shops.add(shop);
 const url=`assets/food/${e.id}.${info.extension}`;files.push({url,b});e.photo.url=url;e.photo.reuse_status='private_personal_reference';e.photo.public_reuse_permission='not_established';entries.push(publicRecord(e));
}}
entries.sort((a,b)=>Object.keys(targets).indexOf(a.city)-Object.keys(targets).indexOf(b.city)||a.id.localeCompare(b.id));
const data={status:'research_in_progress',updated_at:new Date().toISOString(),targets,entries,note:'目标不是已完成数量。采集记录齐全与口碑营业核实分开；所有照片保留原作者及水印；采集时为私人旅行参考，用户于2026-10-01确认公开展示，原作者再使用许可未建立。'};
function write(relative,content){const p=path.join(root,relative);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p+'.tmp',content);fs.renameSync(p+'.tmp',p);}
for(const f of files)write('public/'+f.url,f.b);
for(const old of previous)if(!files.some(f=>f.url===old)){if(!/^assets\/food\/[a-z0-9_-]+\.(jpg|png|webp)$/.test(old))throw Error('Unsafe prior asset');const obsolete=path.join(root,'public',old);if(fs.existsSync(obsolete))fs.unlinkSync(obsolete);}
write('FOOD-REFERENCE-FILES.json',JSON.stringify(files.map(f=>f.url).sort(),null,2)+'\n');write('public/data/food-guide.json',JSON.stringify(data,null,2)+'\n');
write('research/food-source-ledger.json',JSON.stringify(data,null,2)+'\n');
let ledger='# 美食采集账本\n\n一城一位调研负责人；280家为目标，正文、图片和入口记录齐全才导入。推荐等级另按口碑、分店和营业证据判断，暂不推荐的记录不进入默认筛选。全部原图保留作者与水印；采集时为私人旅行参考，用户于2026-10-01确认公开展示，原作者再使用许可未建立。\n\n';
for(const [city,target]of Object.entries(targets))ledger+=`- ${city}：${entries.filter(e=>e.city===city).length} / ${target} 家采集记录\n`;
ledger+='\n';for(const e of entries)ledger+=`## ${e.city} · ${e.name}\n\n等级：${e.level}。${e.level_reason}\n\n![${e.name}原图](../public/${e.photo.url})\n\n- 小红书：[${e.xhs.title} · ${e.xhs.author}](${e.xhs.url})。${e.xhs.canonical_status}\n- 点评：[${e.dianping.kind==='shop'?'具体门店':'搜索备选'}](${e.dianping.url})。${e.dianping.status}\n- 高德：[${e.gaode.kind==='place'?'地点':'搜索备选'}](${e.gaode.url})。${e.gaode.status}\n- 图像原文件 SHA256：${e.photo.sha256}，${e.photo.width}×${e.photo.height}。${e.photo.visual_evidence}\n\n`;
write('research/food-source-ledger.md',ledger.trimEnd()+'\n');console.log(JSON.stringify({imported:entries.length,pending,unreviewed,by_city:Object.fromEntries(Object.keys(targets).map(c=>[c,entries.filter(e=>e.city===c).length]))}));
