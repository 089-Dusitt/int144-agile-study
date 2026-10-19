'use strict';
(() => {
  const { chapters, terms, sources } = window.STUDY;
  const byTerm = new Map(terms.map(t => [t.id, t]));
  const byChapter = new Map(chapters.map(c => [c.id, c]));
  const bySource = new Map(sources.map(s => [s.id, s]));
  const $ = s => document.querySelector(s);
  const storageKey = 'int144-study-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch { /* Browser storage is optional. */ }
  const state = {
    current: 'overview', selected: 'empirical', related: true,
    completed: new Set(Array.isArray(saved.completed) ? saved.completed.filter(id => byChapter.has(id)) : []),
    positions: saved.positions && typeof saved.positions === 'object' ? saved.positions : {},
    font: Math.min(22, Math.max(14, Number(saved.font) || 16)),
    theme: saved.theme === 'dark' ? 'dark' : 'light',
    glossaryWidth: Number.isFinite(saved.glossaryWidth) ? saved.glossaryWidth : 390,
    mobileGlossaryWidth: Number.isFinite(saved.mobileGlossaryWidth) ? saved.mobileGlossaryWidth : 380,
    glossaryScale: Math.max(80,Math.min(200,Number(saved.glossaryScale)||100))
  };
  let toastTimer, announceTimer, scrollTimer, mounted=false;
  const escapeHTML = x => String(x ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function inline(value) {
    const input = String(value ?? '');
    const re = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]|\*\*([^*]+)\*\*|`([^`]+)`/g;
    let result = '', start = 0;
    for (const m of input.matchAll(re)) {
      result += escapeHTML(input.slice(start, m.index));
      if (m[1]) {
        const term = byTerm.get(m[1]);
        const label = m[2] || term?.en || m[1];
        result += term ? `<button type="button" class="term" data-term="${escapeHTML(m[1])}" aria-label="ดูคำศัพท์ ${escapeHTML(label)}">${escapeHTML(label)}</button>` : escapeHTML(label);
      } else if (m[3]) result += `<strong>${escapeHTML(m[3])}</strong>`;
      else result += `<code>${escapeHTML(m[4])}</code>`;
      start = m.index + m[0].length;
    }
    return result + escapeHTML(input.slice(start));
  }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify({last:state.current, completed:[...state.completed], positions:state.positions, font:state.font, theme:state.theme, glossaryWidth:state.glossaryWidth, mobileGlossaryWidth:state.mobileGlossaryWidth, glossaryScale:state.glossaryScale})); } catch { /* Reading works without localStorage. */ }
  }
  function announce(message) { clearTimeout(announceTimer); announceTimer=setTimeout(()=>{$('#announcer').textContent=message;},250); }
  function toast(message) { clearTimeout(toastTimer); $('#toast').textContent=message; $('#toast').classList.add('show'); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2200); }
  function sourceLink(id) {
    const s=bySource.get(id);
    return s ? `<span class="source-link">${escapeHTML(s.title)}</span>` : '';
  }
  const quizBank=window.STUDY.quizzes||[], quizById=new Map(quizBank.map(q=>[q.id,q]));
  const quizStorage='int144-class-quiz-v1';
  let quizSaved={};try{quizSaved=JSON.parse(localStorage.getItem(quizStorage)||'{}')||{};}catch{}
  const quizState={lesson:'all',phase:'all',status:'all',index:0,reviewId:null,order:quizBank.map(q=>q.id),responses:{}};
  for(const [id,value] of Object.entries(quizSaved.responses||{})){
    const q=quizById.get(id);
    if(q&&Array.isArray(value)&&value.length&&value.every(i=>Number.isInteger(i)&&i>=0&&i<q.options.length)&&new Set(value).size===value.length)quizState.responses[id]=value;
  }
  const quizEqual=(a,b)=>a.length===b.length&&a.every(x=>b.includes(x));
  const quizCorrect=q=>quizState.responses[q.id]&&quizEqual(quizState.responses[q.id],q.answers);
  const quizPhase={end:'Quiz ท้ายคาบ',inclass:'คำถามระหว่างคาบ',slide:'คำถามในสไลด์'};
  const quizLesson={1:'Agile และ Scrum Concepts',2:'Scrum Overview',3:'Product Backlog และ Release',4:'Scrum Sprints',5:'Values และ Team'};
  function quizFiltered(){return quizState.order.map(id=>quizById.get(id)).filter(q=>(quizState.lesson==='all'||q.lessons.includes(Number(quizState.lesson)))&&(quizState.phase==='all'||q.phase===quizState.phase||(q.alsoPhases||[]).includes(quizState.phase))&&(quizState.status==='all'||q.id===quizState.reviewId||(quizState.status==='wrong'?quizState.responses[q.id]&&!quizCorrect(q):!quizState.responses[q.id])));}
  function quizSave(){try{localStorage.setItem(quizStorage,JSON.stringify({responses:quizState.responses}));}catch{}}
  function quizOptionOrder(q){
    let seed=[...q.id].reduce((n,c)=>(Math.imul(n,31)+c.charCodeAt(0))>>>0,1729);
    const order=q.options.map((_,i)=>i);
    for(let i=order.length-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[order[i],order[j]]=[order[j],order[i]];}
    return order;
  }
  function quizHub(){return `<section class="quiz-hub" aria-label="Quiz รวมจากคาบเรียน"><div class="quiz-intro"><span class="eyebrow">RECALL · CHECK · UNDERSTAND</span><p>ฝึกทีละข้อ เลือกคำตอบก่อนดูเหตุผล แล้วกลับมาทวนข้อที่พลาด</p><details class="quiz-origin"><summary>ที่มาและวิธีเรียบเรียงคำถาม</summary><ul>${window.STUDY.quizNotes.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></details></div><div id="quiz-controls" class="quiz-controls"><label>บทเรียน<select id="quiz-lesson"><option value="all">ครบทั้ง 5 บท</option>${Object.entries(quizLesson).map(([n,t])=>`<option value="${n}">บท ${n} · ${escapeHTML(t)}</option>`).join('')}</select></label><label>ประเภทคำถาม<select id="quiz-phase"><option value="all">ทุกประเภท</option>${Object.entries(quizPhase).map(([k,t])=>`<option value="${k}">${t}</option>`).join('')}</select></label><label>เลือกทวน<select id="quiz-status"><option value="all">ทั้งหมด</option><option value="unanswered">ยังไม่ตอบ</option><option value="wrong">ตอบผิด</option></select></label></div><div id="quiz-workspace"></div></section>`;}
  function renderQuiz(focus=false){
    const host=$('#quiz-workspace');if(!host)return;
    for(const key of ['lesson','phase','status'])$(`#quiz-${key}`).value=quizState[key];
    const all=quizBank.filter(q=>(quizState.lesson==='all'||q.lessons.includes(Number(quizState.lesson)))&&(quizState.phase==='all'||q.phase===quizState.phase||(q.alsoPhases||[]).includes(quizState.phase)));
    const answered=all.filter(q=>quizState.responses[q.id]),correct=answered.filter(quizCorrect),wrong=answered.length-correct.length;
    const questions=quizFiltered();quizState.index=Math.max(0,Math.min(quizState.index,questions.length-1));const q=questions[quizState.index];
    let content=`<div class="quiz-score" aria-label="ผลการฝึกชุดที่เลือก"><div><strong>${answered.length}<small> / ${all.length}</small></strong><span>ตอบแล้ว</span></div><div><strong>${correct.length}</strong><span>ถูก</span></div><div><strong>${wrong}</strong><span>ผิด</span></div><div><strong>${all.length-answered.length}</strong><span>ยังไม่ตอบ</span></div></div><progress class="quiz-progress" aria-label="ความคืบหน้า Quiz ชุดที่เลือก" max="${Math.max(1,all.length)}" value="${answered.length}"></progress><div class="quiz-tools"><span>${questions.length} ข้อในมุมมองนี้</span><button type="button" data-quiz-action="shuffle" ${questions.length<2?'disabled':''}>⇄ สุ่มลำดับ</button><button type="button" data-quiz-action="reset" ${answered.length?'':'disabled'}>เริ่มชุดที่เลือกใหม่</button></div>`;
    if(!q){content+=`<div class="quiz-empty" role="status"><h2> ${quizState.status==='wrong'?'ยังไม่มีข้อที่ตอบผิด':quizState.status==='unanswered'?'ตอบครบในชุดนี้แล้ว':'ไม่พบคำถามในชุดที่เลือก'}</h2><p>เปลี่ยนบท ประเภทคำถาม หรือเลือกทวนทั้งหมดเพื่อฝึกต่อ</p><button type="button" data-quiz-action="all">ดูทั้งหมดในชุดนี้</button></div>`;host.innerHTML=content;return;}
    const response=quizState.responses[q.id],done=!!response,isCorrect=done&&quizCorrect(q),order=quizOptionOrder(q),multiple=q.answers.length>1;
    content+=`<div class="quiz-step"><span>ข้อ ${quizState.index+1} / ${questions.length}</span><span>บท ${q.lessons.join(' และ ')} · ${quizPhase[q.phase]}</span></div><form id="class-quiz-form" data-question="${q.id}" class="quiz-card"><fieldset><legend id="quiz-question" tabindex="-1">${escapeHTML(q.prompt)}</legend><p class="quiz-choice-hint" id="quiz-choice-hint">${multiple?`เลือกให้ครบ ${q.answers.length} คำตอบ`:'เลือก 1 คำตอบ'} · ตัวเลือกเรียบเรียงเพื่อฝึก</p><div class="quiz-options">${order.map((i,n)=>`<label class="quiz-option${done?(q.answers.includes(i)?' quiz-answer-correct':response.includes(i)?' quiz-answer-wrong':''):''}"><input type="${multiple?'checkbox':'radio'}" name="quiz-answer" value="${i}" aria-describedby="quiz-choice-hint" ${response?.includes(i)?'checked':''} ${done?'disabled':''}><span class="quiz-option-letter" aria-hidden="true">${String.fromCharCode(65+n)}</span><span>${escapeHTML(q.options[i])}${done&&q.answers.includes(i)?'<small class="quiz-answer-tag">✓ คำตอบที่ถูก</small>':done&&response.includes(i)?'<small class="quiz-answer-tag">✕ คำตอบที่เลือก</small>':''}</span></label>`).join('')}</div></fieldset><p id="quiz-validation" class="quiz-validation" role="alert"></p>${done?`<section class="quiz-feedback ${isCorrect?'quiz-feedback-correct':'quiz-feedback-wrong'}" aria-labelledby="quiz-feedback-title"><h3 id="quiz-feedback-title" tabindex="-1">${isCorrect?'✓ ตอบถูก':'✕ ยังไม่ถูก'+(multiple?'ครบทุกตัวเลือก':'')}</h3><p>${escapeHTML(q.explanation)}</p>${q.note?`<p class="quiz-context">${escapeHTML(q.note)}</p>`:''}<p class="quiz-basis">${escapeHTML(q.answerBasis)} · ${escapeHTML(q.wording)}</p><details class="quiz-citations"><summary>ดูแหล่งอ้างอิงของข้อนี้</summary><ul>${q.references.map(r=>`<li>${escapeHTML(bySource.get(r.source)?.title||r.source)} · ${escapeHTML(r.location)}</li>`).join('')}</ul></details>${q.terms.length?`<div class="quiz-terms"><span>ทวนศัพท์ที่เกี่ยวข้อง</span>${q.terms.map(id=>`<button type="button" class="related-word" data-term="${id}">${escapeHTML(byTerm.get(id)?.en||id)}</button>`).join('')}</div>`:''}</section><button type="button" class="quiz-secondary" data-quiz-action="retry">ลองตอบข้อนี้ใหม่</button>`:'<button type="submit" class="quiz-primary">ตรวจคำตอบ</button>'}</form><nav class="quiz-navigation" aria-label="เปลี่ยนข้อ Quiz"><button type="button" data-quiz-action="previous" ${quizState.index===0?'disabled':''}>← ข้อก่อนหน้า</button><button type="button" data-quiz-action="next" ${quizState.index>=questions.length-1?'disabled':''}>ข้อถัดไป →</button></nav><p class="quiz-save-hint">จำผลในเบราว์เซอร์นี้อัตโนมัติ · ตอบหลายตัวเลือกต้องครบและไม่เลือกเกินจึงนับว่าถูก</p>`;
    host.innerHTML=content;
    if(focus){const heading=$(done?'#quiz-feedback-title':'#quiz-question');heading?.focus({preventScroll:true});heading?.scrollIntoView({block:'nearest'});}
  }
  document.addEventListener('submit',e=>{
    if(e.target.id!=='class-quiz-form')return;e.preventDefault();
    const q=quizById.get(e.target.dataset.question);if(!q||quizState.responses[q.id])return;
    const selected=[...e.target.querySelectorAll('input[name="quiz-answer"]:checked')].map(x=>Number(x.value));
    if(!selected.length){$('#quiz-validation').textContent='เลือกคำตอบก่อนตรวจนะ';return;}
    quizState.responses[q.id]=selected;quizState.reviewId=q.id;quizSave();renderQuiz(true);
    announce(quizCorrect(q)?'ตอบถูก อ่านเหตุผลด้านล่างได้เลย':'ยังไม่ถูก อ่านเหตุผลและคำตอบที่ถูกด้านล่าง');
  });
  document.addEventListener('change',e=>{
    const key={'quiz-lesson':'lesson','quiz-phase':'phase','quiz-status':'status'}[e.target.id];
    if(key){quizState[key]=e.target.value;quizState.index=0;quizState.reviewId=null;renderQuiz();}
  });
  document.addEventListener('click',e=>{
    const action=e.target.closest('[data-quiz-action]')?.dataset.quizAction;if(!action)return;
    const questions=quizFiltered(),q=questions[quizState.index];
    if(action==='next'||action==='previous'){const target=questions[quizState.index+(action==='next'?1:-1)];quizState.reviewId=null;quizState.index=Math.max(0,quizFiltered().findIndex(item=>item.id===target?.id));}
    else if(action==='all'){quizState.status='all';quizState.index=0;quizState.reviewId=null;}
    else if(action==='retry'&&q){delete quizState.responses[q.id];quizState.reviewId=q.id;quizSave();}
    else if(action==='shuffle'){
      for(let i=quizState.order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[quizState.order[i],quizState.order[j]]=[quizState.order[j],quizState.order[i]];}
      quizState.index=0;quizState.reviewId=null;
    }else if(action==='reset'){
      for(const item of quizBank)if((quizState.lesson==='all'||item.lessons.includes(Number(quizState.lesson)))&&(quizState.phase==='all'||item.phase===quizState.phase||(item.alsoPhases||[]).includes(quizState.phase)))delete quizState.responses[item.id];
      quizState.index=0;quizState.reviewId=null;quizSave();
    }
    renderQuiz(action==='next'||action==='previous'||action==='retry');
  });

  function renderBlock(block,index) {
    switch(block.type) {
      case 'quiz-hub': return quizHub();
      case 'heading': return `<h2 id="section-${index}">${inline(block.text)}</h2>`;
      case 'paragraph': return `<p>${inline(block.text)}</p>`;
      case 'list': { const tag=block.ordered?'ol':'ul'; return `<${tag}>${block.items.map(x=>`<li>${inline(x)}</li>`).join('')}</${tag}>`; }
      case 'note': return `<div class="callout ${block.tone==='gold'?'gold':''}"><div class="callout-label"><span aria-hidden="true">${block.tone==='gold'?'✧':'↳'}</span>${escapeHTML(block.title)}</div><p>${inline(block.text)}</p></div>`;
      case 'table': return `<div class="table-wrap"><table><caption${block.caption?'':' class="visually-hidden"'}>${escapeHTML(block.caption||`เปรียบเทียบ ${block.headers.map(plainText).join(' และ ')}`)}</caption><thead><tr>${block.headers.map(x=>`<th scope="col">${inline(x)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(x=>`<td>${inline(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'code': return `<div class="code-block"><div class="code-label">${escapeHTML(block.label)}</div><pre><code>${escapeHTML(block.text)}</code></pre></div>`;
      case 'flow': return `<div class="flow">${block.items.map(([title,desc],i)=>`${i?'<span class="flow-arrow" aria-hidden="true">→</span>':''}<div class="flow-step"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(desc)}</span></div>`).join('')}</div>`;
      case 'stats': return `<div class="stats">${block.items.map(([n,label])=>`<div class="stat"><strong>${escapeHTML(n)}</strong><span>${escapeHTML(label)}</span></div>`).join('')}</div>`;
      case 'cards': return `<div class="chapter-grid">${block.ids.map(id=>{const c=byChapter.get(id);return `<a class="chapter-card" href="#${id}" data-chapter="${id}"><span class="card-no">${String(chapters.indexOf(c)).padStart(2,'0')}</span><span><strong>${escapeHTML(c.short)}</strong><small>${escapeHTML(c.subtitle)}</small></span></a>`;}).join('')}</div>`;
      case 'quiz': return `<details><summary>ลองเช็กความเข้าใจ · ${escapeHTML(block.question)}</summary><div class="reveal-content"><p>${inline(block.answer)}</p></div></details>`;
      case 'sources': return sources.map(s=>`<section class="source-entry"><h2>${escapeHTML(s.title)}</h2><p>${escapeHTML(s.type)} · ${escapeHTML(s.description)}</p>${sourceLink(s.id)}</section>`).join('');
      default: return '';
    }
  }
  function renderNavigation() {
    let group='';
    $('#chapter-nav').innerHTML=chapters.map((c,i)=>{
      const label=group!==c.group?`<div class="nav-group">${escapeHTML(c.group)}</div>`:'';group=c.group;
      const current=state.current===c.id?' aria-current="page"':'';
      return `${label}<a class="chapter-link${c.format==='quick'?' quick-link':''}" href="#${c.id}" data-chapter="${c.id}"${current}><span class="chapter-number">${String(i).padStart(2,'0')}</span><span>${escapeHTML(c.short)}</span>${state.completed.has(c.id)?'<span class="completed" aria-label="อ่านแล้ว">✓</span>':''}</a>`;
    }).join('');
    $('#progress-label').textContent=`${state.completed.size} / ${chapters.length} บท`;
    $('#course-progress').max=chapters.length;
    $('#course-progress').value=state.completed.size;
  }
  function renderChapter(id,{historyMode='push',focus=true,restore=true}={}) {
    if(!byChapter.has(id)) id='overview';
    if(mounted) state.positions[state.current]=$('#reader').scrollTop;
    state.current=id;
    const c=byChapter.get(id), i=chapters.indexOf(c), done=state.completed.has(id);
    const previous=chapters[i-1], next=chapters[i+1];
    $('#article').classList.toggle('quick-review',c.format==='quick');
    $('#breadcrumb').textContent=`${c.group} / ${c.short}`;
    $('#article').innerHTML=`<div class="article-meta"><span class="section-tag">${escapeHTML(c.group)}</span><span>บท ${String(i).padStart(2,'0')} / ${String(chapters.length-1).padStart(2,'0')}</span><span>อ่านประมาณ ${escapeHTML(c.readingTime||c.minutes)} นาที</span></div><h1 tabindex="-1" id="chapter-title">${escapeHTML(c.title)}</h1><p class="lead">${escapeHTML(c.subtitle)}</p>${c.format==='quick'?`<nav class="quick-jumps" aria-label="ข้ามไปเรื่องที่ต้องการทวน">${c.blocks.flatMap((b,index)=>b.type==='heading'?[`<button type="button" data-section="section-${index}">${escapeHTML(b.text)}</button>`]:[]).join('')}</nav>`:''}${c.blocks.map(renderBlock).join('')}${c.sources.length?`<div class="source-reference"><span>เอกสารที่ใช้อ้างอิง</span><div class="source-list">${c.sources.map(sourceLink).join('')}</div></div>`:''}<footer class="chapter-footer"><button id="complete-chapter" class="complete-button" aria-pressed="${done}">${done?'✓ อ่านบทนี้แล้ว':'○ ทำเครื่องหมายว่าอ่านบทนี้แล้ว'}</button><div class="page-navigation">${previous?`<a href="#${previous.id}" data-chapter="${previous.id}"><small>← บทก่อนหน้า</small>${escapeHTML(previous.short)}</a>`:''}${next?`<a href="#${next.id}" data-chapter="${next.id}"><small>บทถัดไป →</small>${escapeHTML(next.short)}</a>`:''}</div></footer>`;
    document.title=`${c.short} · ห้องอ่านสอบ INT144`;
    if(historyMode==='push') history.pushState(null,'',`#${id}`);
    else if(historyMode==='replace') history.replaceState(null,'',`#${id}`);
    renderNavigation();
    renderTermList();
    persist();
    if(focus) $('#chapter-title').focus({preventScroll:true});
    $('#reader').scrollTop=restore?Math.max(0,Number(state.positions[id])||0):0;
    mounted=true;
    if(id==='class-quiz')renderQuiz();
  }
  function renderTermList() {
    const query=$('#term-search').value.trim().toLocaleLowerCase();
    const allowed=new Set(byChapter.get(state.current).terms);
    // Typed searches always search the entire dictionary; the chapter filter applies when empty.
    const matches=terms.filter(t=>{
      const text=`${t.en} ${t.th} ${t.definition}`.toLocaleLowerCase();
      return query?text.includes(query):(!state.related||allowed.has(t.id));
    });
    $('#term-count').textContent=`${matches.length} คำ`;
    $('#related-terms').classList.toggle('active',state.related);
    $('#all-terms').classList.toggle('active',!state.related);
    $('#related-terms').setAttribute('aria-pressed',String(state.related));
    $('#all-terms').setAttribute('aria-pressed',String(!state.related));
    $('#term-list').innerHTML=matches.length?matches.map(t=>`<button class="word-row ${state.selected===t.id?'selected':''}" data-term="${escapeHTML(t.id)}" aria-pressed="${state.selected===t.id}"><span><strong>${escapeHTML(t.en)}</strong><small>${escapeHTML(t.th)}</small></span><span aria-hidden="true">↗</span></button>`).join(''):`<p class="empty-state">ไม่พบคำว่า “${escapeHTML(query)}”<br>ลองคำอังกฤษสั้น ๆ หรือคำไทย เช่น เป้าหมาย</p>`;
  }
  function renderTermDetail(id) {
    const t=byTerm.get(id); if(!t) return;
    state.selected=id;
    $('#term-detail').innerHTML=`<div class="word-category">${escapeHTML(t.category)}</div><h3>${escapeHTML(t.en)}</h3><div class="thai-name">${escapeHTML(t.th)}</div><p>${escapeHTML(t.definition)}</p>${t.example?`<div class="term-example"><span>ตัวอย่าง</span>${escapeHTML(t.example)}</div>`:''}${t.tip?`<div class="term-tip">✧ ${escapeHTML(t.tip)}</div>`:''}<div>${t.related.filter(x=>byTerm.has(x)).map(x=>`<button class="related-word" data-term="${x}">${escapeHTML(byTerm.get(x).en.split(' / ')[0])}</button>`).join('')}</div>`;
    $('#term-detail').scrollTop=0;
    renderTermList();
  }
  function openPanel(which) {
    const isNav=which==='nav';
    const panel=$(isNav?'#sidebar':'#glossary');
    const dialog=$(isNav?'#nav-dialog':'#glossary-dialog');
    const desktop=isNav?matchMedia('(min-width:1191px)').matches:matchMedia('(min-width:721px)').matches;
    if(desktop) { if(!isNav) $('#term-search').focus({preventScroll:true}); return; }
    $(isNav?'#nav-dialog-slot':'#glossary-dialog-slot').append(panel);
    if(!dialog.open) dialog.showModal();
  }
  function showTerm(id) {
    if(!byTerm.has(id)) return;
    renderTermDetail(id);
    if(!matchMedia('(min-width:721px)').matches) openPanel('glossary');
    announce(`${byTerm.get(id).en}: ${byTerm.get(id).definition}`);
  }
  function applySettings() {
    document.documentElement.dataset.theme=state.theme;
    document.documentElement.style.setProperty('--reader-size',`${state.font}px`);
    $('#theme-toggle').setAttribute('aria-label',`เปลี่ยนเป็นโหมด${state.theme==='dark'?'สว่าง':'มืด'}`);
    $('#font-smaller').disabled=state.font<=14;
    $('#font-larger').disabled=state.font>=22;
  }
  // The panel and reader have independent scroll areas; resizing never rewrites the article.
  function panelBounds() {
    const mobile=innerWidth<=720;
    const nav=innerWidth>=1191?$('#nav-slot').getBoundingClientRect().width:0;
    const max=mobile?Math.max(180,innerWidth-16):Math.min(720,Math.max(260,innerWidth-nav-340));
    return {mobile,min:Math.min(260,max),max:Math.floor(max)};
  }
  function applyPanelWidth(value=null,save=false) {
    const b=panelBounds(),key=b.mobile?'mobileGlossaryWidth':'glossaryWidth';
    const width=Math.round(Math.max(b.min,Math.min(b.max,value??state[key])));
    document.documentElement.style.setProperty(b.mobile?'--mobile-glossary-width':'--glossary-width',`${width}px`);
    if(value!==null) state[key]=width;
    const grip=$('#glossary-resizer');
    grip.setAttribute('aria-valuemin',String(b.min));
    grip.setAttribute('aria-valuemax',String(b.max));
    grip.setAttribute('aria-valuenow',String(width));
    grip.setAttribute('aria-valuetext',`${width} พิกเซล`);
    if(save) persist();
    return width;
  }
  const grip=$('#glossary-resizer');
  let panelDrag=null;
  function finishPanelDrag() {
    if(!panelDrag) return;
    const id=panelDrag.id;
    panelDrag=null;
    document.body.classList.remove('resizing-glossary');
    grip.classList.remove('dragging');
    if(grip.hasPointerCapture(id)) grip.releasePointerCapture(id);
    persist();
    announce(`ช่องคำศัพท์กว้าง ${grip.getAttribute('aria-valuenow')} พิกเซล`);
  }
  grip.hidden=false;
  grip.addEventListener('pointerdown',e=>{
    if(e.button!==0||!e.isPrimary) return;
    e.preventDefault();
    grip.focus({preventScroll:true});
    panelDrag={id:e.pointerId,x:e.clientX,width:applyPanelWidth()};
    grip.setPointerCapture(e.pointerId);
    grip.classList.add('dragging');
    document.body.classList.add('resizing-glossary');
  });
  grip.addEventListener('pointermove',e=>{
    if(panelDrag?.id!==e.pointerId) return;
    applyPanelWidth(panelDrag.width+panelDrag.x-e.clientX);
  });
  for(const event of ['pointerup','pointercancel','lostpointercapture']) grip.addEventListener(event,finishPanelDrag);
  grip.addEventListener('keydown',e=>{
    const b=panelBounds(),current=applyPanelWidth(),step=e.shiftKey?48:16;
    const value={ArrowLeft:current+step,ArrowRight:current-step,Home:b.min,End:b.max}[e.key];
    if(value===undefined) return;
    e.preventDefault();applyPanelWidth(value,true);
  });
  const resetPanel=()=>applyPanelWidth(panelBounds().mobile?380:390,true);
  grip.addEventListener('dblclick',resetPanel);
  function applyGlossaryFont() {
    document.documentElement.style.setProperty('--glossary-text-size',`${state.glossaryScale/100}rem`);
    $('#glossary-font-label').textContent=`${state.glossaryScale}%`;
    $('#glossary-font-smaller').disabled=state.glossaryScale<=80;
    $('#glossary-font-larger').disabled=state.glossaryScale>=200;
  }
  function changeGlossaryFont(value) {
    state.glossaryScale=Math.max(80,Math.min(200,value));
    applyGlossaryFont();persist();
    announce(`ตัวอักษรคำศัพท์ ${state.glossaryScale} เปอร์เซ็นต์`);
  }
  $('#glossary-font-smaller').addEventListener('click',()=>changeGlossaryFont(state.glossaryScale-10));
  $('#glossary-font-larger').addEventListener('click',()=>changeGlossaryFont(state.glossaryScale+10));
  $('#glossary-font-reset').addEventListener('click',()=>changeGlossaryFont(100));
  window.addEventListener('resize',()=>{finishPanelDrag();applyPanelWidth();});
  window.addEventListener('blur',finishPanelDrag);
  applyPanelWidth();
  applyGlossaryFont();
  const plainText=x=>String(x||'').replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,'$2').replace(/\[\[([^\]]+)\]\]/g,(_,id)=>byTerm.get(id)?.en||id).replace(/\*\*|`/g,'');
  const chapterSearch=chapters.map(c=>({id:c.id,title:c.title,subtitle:c.subtitle,text:plainText(`${c.title} ${c.subtitle} ${JSON.stringify(c.blocks)}`).toLocaleLowerCase()}));
  function renderSearch() {
    const q=$('#global-query').value.trim().toLocaleLowerCase();
    const cm=q?chapterSearch.filter(c=>c.text.includes(q)):chapterSearch.filter(c=>['quick-review','mapping','keys','normalization','mistakes'].includes(c.id));
    const tm=q?terms.filter(t=>`${t.en} ${t.th} ${t.definition}`.toLocaleLowerCase().includes(q)):terms.filter(t=>['empirical','prime','fd','bcnf'].includes(t.id));
    const snippet=text=>{const pos=text.toLocaleLowerCase().indexOf(q);return plainText(text).slice(Math.max(0,pos-25),Math.max(0,pos-25)+110);};
    $('#search-results').innerHTML=`${cm.length?`<div class="result-group">${q?'บทเรียนที่พบ':'บทเรียนที่อ่านบ่อย'} · ${cm.length}</div>${cm.map(c=>`<a class="search-result" href="#${c.id}" data-chapter="${c.id}">↗ ${escapeHTML(c.title)}<small>${escapeHTML(c.subtitle)}</small></a>`).join('')}`:''}${tm.length?`<div class="result-group">คำศัพท์ · ${tm.length}</div>${tm.slice(0,30).map(t=>`<button class="search-result" data-search-term="${t.id}">${escapeHTML(t.en)}<small>${escapeHTML(t.th)} · ${escapeHTML(snippet(t.definition))}</small></button>`).join('')}`:''}${!cm.length&&!tm.length?`<p class="empty-state">ไม่พบคำว่า “${escapeHTML(q)}” ลองคำสั้นลง หรือค้นหาชื่อภาษาอังกฤษ</p>`:''}`;
  }
  function openSearch() { $('#global-query').value=''; renderSearch(); $('#search-dialog').showModal(); $('#global-query').focus(); }
  document.addEventListener('click',e=>{
    if(e.target.closest('.skip-link')) { e.preventDefault(); $('#reader').focus({preventScroll:true}); return; }
    const section=e.target.closest('[data-section]');
    if(section) { const heading=document.getElementById(section.dataset.section); if(heading) {heading.tabIndex=-1;heading.focus({preventScroll:true});heading.scrollIntoView({block:'start'});} return; }
    const close=e.target.closest('[data-close]');
    if(close) { $(`#${close.dataset.close}`).close();return; }
    const nav=e.target.closest('[data-chapter]');
    if(nav) { e.preventDefault(); document.querySelectorAll('dialog[open]').forEach(d=>d.close()); renderChapter(nav.dataset.chapter); return; }
    const searchTerm=e.target.closest('[data-search-term]');
    if(searchTerm) { $('#search-dialog').close(); showTerm(searchTerm.dataset.searchTerm); return; }
    const term=e.target.closest('[data-term]');
    if(term) { showTerm(term.dataset.term);return; }
    if(e.target.closest('#complete-chapter')) {
      const id=state.current;
      if(state.completed.has(id)) state.completed.delete(id);else state.completed.add(id);
      const done=state.completed.has(id),b=$('#complete-chapter');
      b.setAttribute('aria-pressed',String(done)); b.textContent=done?'✓ อ่านบทนี้แล้ว':'○ ทำเครื่องหมายว่าอ่านบทนี้แล้ว';
      renderNavigation(); persist(); toast(done?'บันทึกว่าอ่านบทนี้แล้ว':'ยกเลิกเครื่องหมายอ่านแล้ว');
    }
  });
  $('#related-terms').addEventListener('click',()=>{state.related=true;renderTermList();});
  $('#all-terms').addEventListener('click',()=>{state.related=false;renderTermList();});
  $('#term-search').addEventListener('input',()=>{renderTermList(); announce(`พบคำศัพท์ ${$('#term-count').textContent}`);});
  $('#open-nav').addEventListener('click',()=>openPanel('nav'));
  $('#open-glossary').addEventListener('click',()=>openPanel('glossary'));
  $('#open-search').addEventListener('click',openSearch);
  $('#global-query').addEventListener('input',renderSearch);
  $('#font-smaller').addEventListener('click',()=>{state.font=Math.max(14,state.font-1);applySettings();persist();});
  $('#font-larger').addEventListener('click',()=>{state.font=Math.min(22,state.font+1);applySettings();persist();});
  $('#theme-toggle').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';applySettings();persist();});
  $('#print-chapter').addEventListener('click',()=>window.print());
  $('#reader').addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{state.positions[state.current]=$('#reader').scrollTop;persist();},180);},{passive:true});
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k') {e.preventDefault();if(!$('#search-dialog').open)openSearch();}});
  for(const d of document.querySelectorAll('dialog')) {
    d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});
  }
  $('#nav-dialog').addEventListener('close',()=>$('#nav-slot').append($('#sidebar')));
  $('#glossary-dialog').addEventListener('close',()=>$('#glossary-slot').append($('#glossary')));
  for(const [media,id] of [['(min-width:1191px)','#nav-dialog'],['(min-width:721px)','#glossary-dialog']]) {
    matchMedia(media).addEventListener('change',e=>{if(e.matches&&$(id).open)$(id).close();});
  }
  function loadLocation(){const id=location.hash.slice(1);renderChapter(byChapter.has(id)?id:'overview',{historyMode:'none'});}
  window.addEventListener('popstate',loadLocation);
  window.addEventListener('hashchange',()=>{if(location.hash.slice(1)!==state.current)loadLocation();});
  window.addEventListener('pagehide',()=>{state.positions[state.current]=$('#reader').scrollTop;persist();});
  applySettings();
  const initial=location.hash.slice(1)||saved.last||'overview';
  renderChapter(initial,{historyMode:'replace',focus:false});
  renderTermDetail('empirical');
})();
