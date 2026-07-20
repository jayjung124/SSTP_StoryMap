(function(){
  'use strict';

  const progressBar=document.querySelector('.reading-progress span');
  const navLinks=[...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections=[...document.querySelectorAll('main > section[id]')];
  const frames=[...document.querySelectorAll('.interactive[data-autofit] iframe')];

  function updateProgress(){
    if(!progressBar)return;
    const distance=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
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

  function markSection(id){
    navLinks.forEach(link=>{
      const selected=link.getAttribute('href')===`#${id}`;
      link.classList.toggle('is-active',selected);
      if(selected)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }

  if('IntersectionObserver' in window&&sections.length){
    const visibility=new Map();
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>visibility.set(entry.target,entry.intersectionRatio));
      const visible=[...visibility.entries()]
        .filter(([,ratio])=>ratio>0)
        .sort((a,b)=>b[1]-a[1]);
      if(visible.length)markSection(visible[0][0].id);
    },{rootMargin:'-24% 0px -60% 0px',threshold:[0,.05,.2,.5,.8]});
    sections.forEach(section=>observer.observe(section));
  }

  navLinks.forEach(link=>link.addEventListener('click',()=>markSection(link.getAttribute('href').slice(1))));

  function applyFrameHeight(frame,height){
    if(!Number.isFinite(height)||height<200||height>5000)return;
    const mobile=window.matchMedia('(max-width: 560px)').matches;
    const min=Number(frame.dataset.autofitMin)||(mobile?430:520);
    const requestedMax=Number(frame.dataset.autofitMax);
    const max=requestedMax>0?requestedMax:Infinity;
    const bounded=Math.max(min,Math.min(max,Math.ceil(height)+2));
    if(Math.abs(frame.getBoundingClientRect().height-bounded)>=2)frame.style.height=`${bounded}px`;
  }

  function measureFrame(frame){
    try{
      const doc=frame.contentDocument;
      if(!doc||!doc.body)return;
      const content=doc.querySelector('.wrap')||doc.body;
      applyFrameHeight(frame,Math.max(content.scrollHeight,content.getBoundingClientRect().height));
    }catch(_error){
      /* Keep the CSS fallback when same-origin measurement is unavailable. */
    }
  }

  frames.forEach(frame=>frame.addEventListener('load',()=>{
    measureFrame(frame);
    try{
      const doc=frame.contentDocument;
      if(!doc||!doc.body||!('ResizeObserver' in window))return;
      const observer=new ResizeObserver(()=>measureFrame(frame));
      observer.observe(doc.querySelector('.wrap')||doc.body);
      frame._storyResizeObserver=observer;
    }catch(_error){
      /* Height messages and the CSS fallback remain available. */
    }
  }));

  window.addEventListener('message',event=>{
    if(event.origin!==window.location.origin)return;
    const data=event.data;
    if(!data||data.type!=='shape-of-myth:height')return;
    const frame=frames.find(item=>item.contentWindow===event.source);
    if(frame)applyFrameHeight(frame,Number(data.height));
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
    frames.forEach(measureFrame);
    updateProgress();
  });
  updateProgress();
})();
