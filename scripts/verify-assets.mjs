import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const allowed = new Set(JSON.parse(fs.readFileSync('MEDIA-PUBLISH-FILES.json', 'utf8')));
const media = JSON.parse(fs.readFileSync('public/data/attraction-media.json', 'utf8'));
const used = new Set();
for (const attraction of media.attractions) {
  for (const image of attraction.images || []) {
    assert.equal(image.reuse_status, 'explicitly_licensed', `Image license: ${image.url}`);
    assert(allowed.has(image.url), `Image outside allowlist: ${image.url}`);
    assert(image.author && image.license && image.license_url && image.source_url && image.attribution, `Missing attribution: ${image.url}`);
    assert(fs.statSync(path.join('public', image.url)).size > 0, `Empty image: ${image.url}`);
    used.add(image.url);
  }
}
assert.deepEqual([...used].sort(), [...allowed].sort());
const privateAllowed=JSON.parse(fs.readFileSync('PRIVATE-REFERENCE-FILES.json'));
const privateUsed=new Set();
for(const a of media.attractions)for(const i of a.private_reference_images||[]){
  assert.equal(i.reuse_status,'private_personal_reference');
  assert.equal(i.public_reuse_permission,'not_established');
  assert(privateAllowed.includes(i.url));assert(i.author&&i.source_url&&i.attribution);
  assert.equal(new URL(i.source_url).search,'');
  const bytes=fs.readFileSync(path.join('public',i.url));
  assert.equal(bytes.subarray(0,3).toString('hex'),'ffd8ff',`Static JPEG required: ${i.url}`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),i.sha256,`Original image hash: ${i.url}`);
  const note=a.xhs_notes.find(n=>n.note_id===i.note_id);
  assert(note&&note.author===i.author&&note.url===i.source_url,`Photo/post identity: ${a.id}`);
  assert.equal(typeof note.canonical_readable_logged_in,'boolean',`Actual link test: ${a.id}`);
  privateUsed.add(i.url);
}
assert.deepEqual([...privateUsed].sort(),[...privateAllowed].sort());
const actual = fs.readdirSync('public/assets/places').map(name => `assets/places/${name}`);
assert.deepEqual(actual.sort(), [...allowed,...privateAllowed].sort());
assert(fs.statSync('public/assets/fonts/title.woff').size > 0);
assert(fs.statSync('public/assets/fonts/OFL.txt').size > 0);
for (const name of ['official-route', 'xiaohongshu', 'landmarks', 'attraction-media']) {
  const text = fs.readFileSync(`public/data/${name}.json`, 'utf8');
  JSON.parse(text);
  for (const match of text.matchAll(/https?:\/\/[^\s"<>]+/g)) {
    const url = new URL(match[0]);
    if (url.hostname.endsWith('xiaohongshu.com')) assert.equal(url.search, '', 'Xiaohongshu links must not contain session parameters');
  }
}
console.log(`Verified ${used.size} licensed images, ${privateUsed.size} original private XHS photos, font license, and four data files`);
