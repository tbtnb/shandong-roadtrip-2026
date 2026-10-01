import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {validateRecord} from '../scripts/food-records.mjs';
const data=JSON.parse(fs.readFileSync('public/data/food-guide.json'));
const e=data.entries[0],b=fs.readFileSync('public/'+e.photo.url);
test('all imported originals preserve source identity and original dimensions/hash',()=>{for(const row of data.entries)validateRecord(row,fs.readFileSync('public/'+row.photo.url));});
test('mismatched photo author, signed XHS URLs and byte alterations are rejected',()=>{
 const wrong=structuredClone(e);wrong.photo.author='another photographer';assert.throws(()=>validateRecord(wrong,b));
 const signed=structuredClone(e);signed.xhs.url+='?xsec_token=example';assert.throws(()=>validateRecord(signed,b));
 const credential=structuredClone(e);credential.access_token='example';assert.throws(()=>validateRecord(credential,b));
 const changed=Buffer.from(b);changed[changed.length-1]^=1;assert.throws(()=>validateRecord(e,changed));
});
