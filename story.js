(function(){
  'use strict';

  const progressBar=document.querySelector('.reading-progress span');
  const navLinks=[...document.querySelectorAll('.chapter-links a[href^="#"]')];
  const sections=[...document.querySelectorAll('main > section.chapter[id]')];
  const chapterAliases={divergence:'backbone'};
  const frames=[...document.querySelectorAll('.interactive iframe')];
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateProgress(){
    if(!progressBar)return;
    const root=document.documentElement;
    const distance=Math.max(1,root.scrollHeight-window.innerHeight);
    const value=Math.min(1,Math.max(0,window.scrollY/distance));
    progressBar.style.width=`${(value*100).toFixed(2)}%`;
  }

  let progressFrame=0;
  function requestProgress(){
    if(progressFrame)return;
    progressFrame=requestAnimationFrame(()=>{
      updateProgress();
      progressFrame=0;
    });
  }

  function markChapter(id){
    const navId=chapterAliases[id]||id;
    navLinks.forEach(link=>{
      const selected=link.getAttribute('href')===`#${navId}`;
      link.classList.toggle('is-active',selected);
      if(selected)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }

  if('IntersectionObserver' in window && sections.length){
    const visibility=new Map();
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>visibility.set(entry.target,entry.intersectionRatio));
      const visible=[...visibility.entries()]
        .filter(([,ratio])=>ratio>0)
        .sort((a,b)=>b[1]-a[1]);
      if(visible.length)markChapter(visible[0][0].id);
    },{rootMargin:'-22% 0px -62% 0px',threshold:[0,.05,.2,.5,.8]});
    sections.forEach(section=>observer.observe(section));
  }

  navLinks.forEach(link=>link.addEventListener('click',()=>{
    const id=link.getAttribute('href').slice(1);
    markChapter(id);
  }));

  function heightBounds(){
    const mobile=window.matchMedia('(max-width: 760px)').matches;
    return mobile?{min:510,max:1050}:{min:520,max:1080};
  }

  function applyFrameHeight(frame,height){
    if(!frame||!Number.isFinite(height))return;
    const bounds=heightBounds();
    const bounded=Math.max(bounds.min,Math.min(bounds.max,Math.ceil(height)+2));
    const current=parseFloat(frame.style.height)||frame.getBoundingClientRect().height;
    if(Math.abs(current-bounded)<4)return;
    frame.style.height=`${bounded}px`;
  }

  function measureFrame(frame){
    if(!frame.closest('[data-autofit]'))return;
    try{
      const doc=frame.contentDocument;
      if(!doc||!doc.body)return;
      const root=doc.documentElement;
      const height=Math.max(
        doc.body.scrollHeight,
        doc.body.offsetHeight,
        root?root.scrollHeight:0,
        root?root.offsetHeight:0
      );
      applyFrameHeight(frame,height);
    }catch(_error){
      /* The published figures are same-origin. Keep the CSS fallback if not. */
    }
  }

  frames.forEach(frame=>{
    frame.addEventListener('load',()=>{
      measureFrame(frame);
      if(!frame.closest('[data-autofit]'))return;
      try{
        const doc=frame.contentDocument;
        if(!doc||!doc.body||!('ResizeObserver' in window))return;
        const resizeObserver=new ResizeObserver(()=>measureFrame(frame));
        resizeObserver.observe(doc.body);
        frame._storyResizeObserver=resizeObserver;
      }catch(_error){
        /* Same-origin measurement is progressive enhancement. */
      }
    });
  });

  window.addEventListener('message',event=>{
    if(event.origin!==window.location.origin)return;
    const data=event.data;
    if(!data||data.type!=='shape-of-myth:height')return;
    const frame=frames.find(item=>item.contentWindow===event.source);
    if(frame&&frame.closest('[data-autofit]'))applyFrameHeight(frame,Number(data.height));
  });

  let resizeTimer=0;
  window.addEventListener('resize',()=>{
    clearTimeout(resizeTimer);
    resizeTimer=window.setTimeout(()=>{
      frames.forEach(measureFrame);
      updateProgress();
    },120);
  },{passive:true});
  window.addEventListener('scroll',requestProgress,{passive:true});
  window.addEventListener('load',()=>{
    updateProgress();
    frames.forEach(measureFrame);
  });

  if(!reducedMotion.matches){
    document.documentElement.classList.add('motion-ok');
  }
  updateProgress();
})();
