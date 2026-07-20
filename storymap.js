(function(){
  'use strict';
  const params=new URLSearchParams(window.location.search);
  const embedded=params.get('embed')==='1';
  const autofit=embedded&&params.get('autofit')==='1';
  if(embedded) document.documentElement.classList.add('embed');
  if(autofit) document.documentElement.classList.add('autofit');

  window.STORYMAP={
    plotConfig:{displayModeBar:false,responsive:true,scrollZoom:false},
    plotHeight(desktop,mobile){return window.matchMedia('(max-width:700px)').matches?mobile:desktop;},
    setPressed(group,button){
      group.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    },
    bindSegment(group,callback){
      group.addEventListener('click',event=>{
        const button=event.target.closest('button');
        if(!button||!group.contains(button))return;
        window.STORYMAP.setPressed(group,button);
        callback(button);
      });
    },
    escape(value){
      return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    },
    hexAlpha(hex,alpha){
      const value=parseInt(hex.slice(1),16);
      return `rgba(${value>>16&255},${value>>8&255},${value&255},${alpha})`;
    },
    contrastText(hex,alpha=1){
      const value=parseInt(hex.slice(1),16);
      const source=[value>>16&255,value>>8&255,value&255];
      const rgb=source.map(channel=>(channel*alpha+255*(1-alpha))/255).map(channel=>channel<=.04045?channel/12.92:Math.pow((channel+.055)/1.055,2.4));
      const luminance=.2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
      const white=1.05/(luminance+.05),black=(luminance+.05)/.05;
      return white>=black?'#fff':'#000';
    },
    ariaPlot(id,label){
      const el=document.getElementById(id);
      el.setAttribute('role','img');
      el.setAttribute('aria-label',label);
    }
  };

  if(embedded){
    let heightFrame=0;
    let lastHeight=0;

    const reportHeight=()=>{
      cancelAnimationFrame(heightFrame);
      heightFrame=requestAnimationFrame(()=>{
        const content=document.querySelector('.wrap');
        if(!content)return;
        const height=Math.ceil(Math.max(content.scrollHeight,content.getBoundingClientRect().height));
        if(Math.abs(height-lastHeight)<1)return;
        lastHeight=height;
        window.parent.postMessage({type:'shape-of-myth:height',height},window.location.origin);
      });
    };
    window.addEventListener('load',reportHeight);
    window.addEventListener('resize',reportHeight,{passive:true});
    document.addEventListener('DOMContentLoaded',()=>{
      reportHeight();
      if('ResizeObserver' in window){
        const observer=new ResizeObserver(reportHeight);
        const content=document.querySelector('.wrap');
        if(content)observer.observe(content);
      }
    });
  }
})();
