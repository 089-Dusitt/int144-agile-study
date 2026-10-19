import {readFile,readdir} from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const dir=path.join(root,'dist');
const sandbox={window:{}};
vm.runInNewContext(await readFile(path.join(dir,'data.js'),'utf8'),sandbox);
const {chapters,terms,sources}=sandbox.window.STUDY;
const termIds=new Set(terms.map(t=>t.id));
const chapterIds=new Set(chapters.map(c=>c.id));
const sourceIds=new Set(sources.map(s=>s.id));
assert.equal(terms.length,131);
assert.equal(chapters.length,12);
assert.equal(sources.length,16);
assert.equal(termIds.size,terms.length);
assert.equal(chapterIds.size,chapters.length);
assert.equal(sourceIds.size,sources.length);
for(const t of terms){
  assert.ok(t.en&&t.th&&t.definition);
  assert.ok(Array.isArray(t.related));
  for(const id of t.related) assert.ok(termIds.has(id),`Unknown related term ${id}`);
}
for(const c of chapters){
  for(const id of c.terms) assert.ok(termIds.has(id),`Unknown term ${id}`);
  for(const id of c.sources) assert.ok(sourceIds.has(id),`Unknown source ${id}`);
  for(const m of JSON.stringify(c.blocks).matchAll(/\[\[([a-z0-9-]+)/g)) assert.ok(termIds.has(m[1]));
  for(const b of c.blocks){
    if(b.type==='table') for(const r of b.rows) assert.equal(r.length,b.headers.length);
    if(b.type==='cards') for(const id of b.ids) assert.ok(chapterIds.has(id));
  }
}
const files=await readdir(dir);
assert.deepEqual(files.sort(),['.nojekyll','app.js','data.js','index.html','styles.css'].sort());
for(const f of files){
  const content=await readFile(path.join(dir,f),'utf8');
  assert.ok(!/C:\\\\Users|C:\\Users|localhost:1440|127\.0\.0\.1/.test(content),`Local path in ${f}`);
}
const html=await readFile(path.join(dir,'index.html'),'utf8');
for(const asset of ['styles.css','data.js','app.js']) assert.ok(html.includes(`"${asset}"`));
const app=await readFile(path.join(dir,'app.js'),'utf8');
assert.ok(!app.includes('href="/sources/'),'Local source links cannot work on Pages');
for(const s of sources) assert.equal(s.file,undefined);
console.log(`Verified ${chapters.length} pages, ${terms.length} terms, ${sources.length} references; static assets are self-contained.`);
