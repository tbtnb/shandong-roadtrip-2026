import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const repository='https://github.com/tbtnb/shandong-roadtrip-2026.git';
function run(command,args,cwd=root,capture=false){
 const result=spawnSync(command,args,{cwd,encoding:'utf8',stdio:capture?'pipe':'inherit'});
 if(result.error)throw result.error;
 if(result.status!==0)throw Error(`${command} failed (${result.status}): ${result.stderr||''}`);
 return result.stdout?.trim();
}
if(run('git',['status','--porcelain'],root,true))throw Error('Commit source changes before publishing a traceable build.');
run('npm',['run','build:pages']);
const revision=run('git',['rev-parse','HEAD'],root,true);
const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'shandong-pages-'));
try{
 const checkout=path.join(temporary,'site');
 const branch=spawnSync('git',['ls-remote','--exit-code',repository,'refs/heads/gh-pages'],{cwd:root,encoding:'utf8'});
 if(branch.status===0){
  run('git',['clone','--branch','gh-pages','--single-branch',repository,checkout]);
  for(const item of fs.readdirSync(checkout))if(item!=='.git')fs.rmSync(path.join(checkout,item),{recursive:true,force:true});
 }else if(branch.status===2){
  fs.mkdirSync(checkout);run('git',['init','--initial-branch=gh-pages'],checkout);run('git',['remote','add','origin',repository],checkout);
 }else throw Error(`Cannot inspect publishing branch: ${branch.stderr}`);
 fs.cpSync(path.join(root,'dist/client'),checkout,{recursive:true});
 run('git',['add','--all'],checkout);
 run('git',['commit','-m',`Publish source ${revision.slice(0,12)}`],checkout);
 run('git',['push','origin','HEAD:gh-pages'],checkout);
 console.log('Publishing branch updated: https://tbtnb.github.io/shandong-roadtrip-2026/');
}finally{fs.rmSync(temporary,{recursive:true,force:true});}
