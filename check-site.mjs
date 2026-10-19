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
const quizzes=sandbox.window.STUDY.quizzes;
assert.equal(quizzes.length,88);
assert.equal(new Set(quizzes.map(q=>q.id)).size,quizzes.length);
assert.equal(new Set(quizzes.map(q=>q.prompt)).size,quizzes.length);
for(const q of quizzes){
  assert.ok(q.prompt&&q.explanation&&q.wording&&q.answerBasis);
  assert.ok(q.options.length>=2&&q.answers.length>0);
  assert.equal(new Set(q.answers).size,q.answers.length);
  for(const answer of q.answers)assert.ok(Number.isInteger(answer)&&answer>=0&&answer<q.options.length);
  assert.ok(['end','inclass','slide'].includes(q.phase));
  for(const lesson of q.lessons)assert.ok(lesson>=1&&lesson<=5);
  for(const ref of q.references)assert.ok(sources.some(s=>s.id===ref.source)&&ref.location);
  for(const term of q.terms)assert.ok(terms.some(t=>t.id===term));
}
const termIds=new Set(terms.map(t=>t.id));
const chapterIds=new Set(chapters.map(c=>c.id));
const sourceIds=new Set(sources.map(s=>s.id));
assert.equal(terms.length,131);
assert.equal(chapters.length,13);
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
console.log(`Verified ${chapters.length} pages, ${terms.length} terms, ${quizzes.length} quiz questions, ${sources.length} references; static assets are self-contained.`);
