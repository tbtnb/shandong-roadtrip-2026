import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='/shandong-roadtrip-2026/';
function run(command,args,capture=false){
 const result=spawnSync(command,args,{cwd:root,encoding:'utf8',stdio:capture?'pipe':'inherit'});
 if(result.error)throw result.error;
 if(result.status!==0)throw Error(`${command} failed (${result.status}): ${result.stderr||''}`);
 return result.stdout?.trim();
}
run('npm',['run','build','--','--base',base]);
const output=path.join(root,'dist/client');
fs.writeFileSync(path.join(output,'.nojekyll'),'');
for(const name of ['ATTRIBUTIONS.md','THIRD_PARTY_NOTICES.md'])fs.copyFileSync(path.join(root,name),path.join(output,name));
const revision=run('git',['rev-parse','HEAD'],true);
fs.writeFileSync(path.join(output,'deployment.json'),JSON.stringify({source_revision:revision,built_at:new Date().toISOString(),base},null,2)+'\n');
run('node',['scripts/verify-pages.mjs',base]);
