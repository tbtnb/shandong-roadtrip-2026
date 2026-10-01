import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const targets={'青岛':60,'威海':80,'连云港':40,'日照':40,'芜湖':40,'淮安':20};
export function imageInfo(b){
 if(b.subarray(0,8).toString('hex')==='89504e470d0a1a0a')return{extension:'png',width:b.readUInt32BE(16),height:b.readUInt32BE(20)};
 if(b.subarray(0,4).toString()==='RIFF'&&b.subarray(8,12).toString()==='WEBP'){
  for(let p=12;p+8<=b.length;){const tag=b.subarray(p,p+4).toString(),n=b.readUInt32LE(p+4),q=p+8;
   if(tag==='VP8X')return{extension:'webp',width:1+b.readUIntLE(q+4,3),height:1+b.readUIntLE(q+7,3)};
   if(tag==='VP8 '&&b.subarray(q+3,q+6).toString('hex')==='9d012a')return{extension:'webp',width:b.readUInt16LE(q+6)&16383,height:b.readUInt16LE(q+8)&16383};
   if(tag==='VP8L'&&b[q]===47){const v=b.readUInt32LE(q+1);return{extension:'webp',width:1+(v&16383),height:1+((v>>>14)&16383)}}p=q+n+(n%2);
  }
 }
 if(b[0]===255&&b[1]===216){let p=2;while(p+9<b.length){if(b[p]!==255){p++;continue}const m=b[p+1];if(m===216||m===217){p+=2;continue}if(m===218)break;const n=b.readUInt16BE(p+2);if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(m))return{extension:'jpg',width:b.readUInt16BE(p+7),height:b.readUInt16BE(p+5)};assert(n>=2);p+=2+n;}}
 throw Error('Unsupported original image (JPEG/PNG/WebP required)');
}
function inspectPrivateParameters(value){
 if(typeof value==='string')for(const hit of value.matchAll(/https?:\/\/[^\s"<>）]+/g)){if(hit[0].includes('xiaohongshu.com'))assert.equal(new URL(hit[0]).search,'','Signed XHS URL forbidden');}
 else if(value&&typeof value==='object')for(const [k,v] of Object.entries(value)){assert(!/^(cookie|access_token|authorization|xsec_token|session_token)$/i.test(k),`Credential field forbidden: ${k}`);inspectPrivateParameters(v);}
}
export function validateRecord(e,b){
 assert(/^[a-z0-9_-]+$/.test(e.id),'Safe record ID');assert(targets[e.city],`Unknown city: ${e.city}`);assert(e.name&&e.local_character&&e.why&&e.level_reason);
 assert(['snack','meal','dessert'].includes(e.category));assert(['must','optional','caution','exclude'].includes(e.level));assert.equal(e.status,'complete');
 assert(e.xhs?.body_read&&e.xhs.comments_checked&&e.xhs.author_profile_checked,'Body/comments/profile actually checked');
 assert(/^[a-f0-9]{24}$/.test(e.xhs.note_id));assert.equal(e.xhs.url,`https://www.xiaohongshu.com/explore/${e.xhs.note_id}`);assert(e.xhs.title&&e.xhs.author&&e.xhs.canonical_status);assert.equal(typeof e.xhs.canonical_readable,'boolean');
 assert.equal(e.photo.note_id,e.xhs.note_id);assert.equal(e.photo.author,e.xhs.author);assert(e.photo.download_method&&e.photo.visual_evidence&&e.photo.watermark);
 assert(['shop','search_fallback'].includes(e.dianping?.kind));assert(['place','search_fallback'].includes(e.gaode?.kind));
 for(const [k,s,host] of [['dianping',e.dianping,'dianping.com'],['gaode',e.gaode,'amap.com']]){const u=new URL(s.url);assert.equal(u.protocol,'https:');assert(u.hostname===host||u.hostname.endsWith('.'+host),`${k} host`);assert.equal(typeof s.readable,'boolean');assert(s.status&&s.summary,`${k} actual status`);}
 assert.equal(typeof e.dianping.matched_branch,'boolean');assert.equal(typeof e.opening_checked,'boolean');assert(e.checked_at&&e.collector);inspectPrivateParameters(e);
 const info=imageInfo(b);assert.equal(b.length,e.photo.bytes,'Original bytes');assert.equal(createHash('sha256').update(b).digest('hex'),e.photo.sha256,'Original SHA256');assert.equal(info.width,e.photo.width,'Original width');assert.equal(info.height,e.photo.height,'Original height');return info;
}
