import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.resolve(process.argv[2]||path.join(root,'work/content-enrichment'));
const groups=['qingdao','weihai','lyg','rizhao','huaian-wuhu','spots'];
const food=JSON.parse(fs.readFileSync(path.join(root,'public/data/food-guide.json')));
const media=JSON.parse(fs.readFileSync(path.join(root,'public/data/attraction-media.json')));
const expected=new Map([...food.entries.map(e=>[e.id,'food']),...media.attractions.map(e=>[e.id,'spot'])]);
const entries=[],seen=new Set();
const forbidden=/\/Users\/|\/workspace\/|xsec_token|access_token|refresh_token|session_token|cookie=/i;
function text(value){return typeof value==='string'?value.trim():'';}
function list(value){return Array.isArray(value)?value.map(text).filter(Boolean):[];}
function url(value){
 const s=text(value);assert(s&&!forbidden.test(s),'Private data in URL');
 const u=new URL(s);assert.equal(u.protocol,'https:','HTTPS required');assert(!u.username&&!u.password,'URL credentials forbidden');
 return s;
}
const rawEntries=groups.flatMap(group=>JSON.parse(fs.readFileSync(path.join(source,`${group}.json`))).entries);
const extraFile=path.join(source,'image-delivery.json');
if(fs.existsSync(extraFile))for(const extra of JSON.parse(fs.readFileSync(extraFile)).extra_entries||[]){
 const entry=rawEntries.find(e=>e.id===extra.id);assert(entry,`Unexpected photo supplement ${extra.id}`);
 entry.images=[...(entry.images||[]),...(extra.images||[])];
 const byUrl=new Map((entry.sources||[]).map(s=>[s.url,s]));
 for(const s of extra.sources||[])byUrl.set(s.url,{...(byUrl.get(s.url)||{}),...Object.fromEntries(Object.entries(s).filter(([,v])=>v!=null&&v!==''))});
 entry.sources=[...byUrl.values()];
}
for(const item of rawEntries){
  assert.equal(expected.get(item.id),item.kind,`Unexpected entry ${item.id}`);assert(!seen.has(item.id),`Duplicate ${item.id}`);seen.add(item.id);
  const overview=list(item.overview);assert(overview.length>0,`Missing editorial ${item.id}`);
  const sources=(item.sources||[]).map(s=>({platform:text(s.platform),title:text(s.title),author:text(s.author),url:url(s.url),read_scope:text(s.read_scope)}));
  assert(sources.length,`Missing sources ${item.id}`);
  const images=[],imageIds=new Set();
  for(const image of item.images||[]){
   assert.equal(image.permission,'user_confirmed',`Missing image permission ${item.id}`);
   const src=url(image.url),origin=url(image.source_url);
   if(imageIds.has(src))continue;imageIds.add(src);
   assert(image.source_name&&image.author,`Missing image attribution ${item.id}`);
   assert(sources.some(s=>s.url===origin),`Image source absent from source list: ${item.id} ${origin}`);
   const p={url:src,source_url:origin,source_name:text(image.source_name),author:text(image.author),caption:text(image.caption),source_id:text(image.source_id),image_index:image.image_index,permission:'user_confirmed',observed_at:text(image.observed_at)};
   for(const field of ['width','height'])if(Number.isFinite(image[field])&&image[field]>0)p[field]=image[field];
   images.push(p);
  }
  const r=item.review_summary||{};
  entries.push({id:item.id,kind:item.kind,overview,highlights:list(item.highlights),practical:list(item.practical),cautions:list(item.cautions),review_summary:{xiaohongshu:text(r.xiaohongshu),dianping:text(r.dianping),coverage:text(r.coverage)},sources,images,updated_at:text(item.updated_at)||'2026-10-01'});
}
assert.equal(seen.size,expected.size,`Incomplete coverage ${seen.size}/${expected.size}`);
entries.sort((a,b)=>a.kind.localeCompare(b.kind)||a.id.localeCompare(b.id));
const data={updated_at:new Date().toISOString(),user_authorization:{confirmed_at:'2026-10-01',scope:'相关小红书与大众点评图片的转载授权已由网站所有者确认；保留作者、平台和原帖来源。',basis:'owner_confirmation',attribution_required:true},image_delivery:'remote_with_existing_cover_fallback',entries};
const output=JSON.stringify(data,null,2)+'\n';assert(!forbidden.test(output),'Private data in editorial content');
const destination=path.join(root,'public/data/editorial.json');
fs.writeFileSync(destination+'.tmp',output);fs.renameSync(destination+'.tmp',destination);
console.log(JSON.stringify({entries:entries.length,photos:entries.reduce((n,e)=>n+e.images.length,0),with_multiple_photos:entries.filter(e=>e.images.length>1).length,with_multiple_xhs_sources:entries.filter(e=>e.sources.filter(s=>s.platform==='小红书').length>1).length},null,2));
