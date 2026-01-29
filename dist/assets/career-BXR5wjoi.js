import{i as R,a as I,b}from"./i18n-C4GhOhpc.js";function P(){const u=document.querySelector("#career-content");u.innerHTML=`
    <div class="career-container">
      <canvas id="particle-canvas"></canvas>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-entries">
          <div class="timeline-entry right">
            <div class="year">2026</div>
            <div class="description">
              <a href="#" class="timeline-link">iGEM 본선 (예정)</a>
              <a href="#" class="timeline-link">KAIST 부설 한국과학영재학교 졸업 (예정)</a>
            </div>
          </div>
          <div class="timeline-entry left">
            <div class="year">2025</div>
            <div class="description">
              <a href="#" class="timeline-link">Purdue University PULSAR 참가</a>
              <a href="#" class="timeline-link">ISSF 출전 및 수상</a>
            </div>
          </div>
          <div class="timeline-entry right">
            <div class="year">2024</div>
            <div class="description">
              <a href="#" class="timeline-link">KAIST 부설 한국과학영재학교 입학</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const t=document.getElementById("particle-canvas"),i=t.getContext("2d");let o=[],a={x:-1e3,y:-1e3};const l=108,y=.88;function x(){t.width=window.innerWidth,t.height=window.innerHeight,w()}function w(){o=[],i.clearRect(0,0,t.width,t.height);const n=t.width*.75,d=2.8;let r=100;i.font=`900 ${r}px "Arial Narrow", "Arial Black", "Impact", sans-serif`;let f=i.measureText("CAREER"),m=n/f.width*r;i.fillStyle="white",i.font=`900 ${m}px "Arial Narrow", "Arial Black", "Impact", sans-serif`,i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(t.width/2,t.height/2),i.scale(1,d),i.fillText("CAREER",0,0),i.restore();const v=i.getImageData(0,0,t.width,t.height);i.clearRect(0,0,t.width,t.height);const h=4;for(let c=0;c<t.height;c+=h)for(let s=0;s<t.width;s+=h){const S=(c*t.width+s)*4;v.data[S+3]>128&&o.push({x:s,y:c,baseX:s,baseY:c,vx:0,vy:0,size:1.5})}}function A(){o.forEach(e=>{const n=a.x-e.x,d=a.y-e.y,r=Math.sqrt(n*n+d*d);if(r<l&&r>0){const v=Math.atan2(d,n),h=a.x-Math.cos(v)*l,c=a.y-Math.sin(v)*l,s=(l-r)/l;e.vx-=(e.x-h)*s*.4,e.vy-=(e.y-c)*s*.4}const f=(e.baseX-e.x)*.096,m=(e.baseY-e.y)*.096;e.vx+=f,e.vy+=m,e.vx*=y,e.vy*=y,e.x+=e.vx,e.y+=e.vy})}function E(){i.clearRect(0,0,t.width,t.height),i.fillStyle="white",o.forEach(e=>{i.beginPath(),i.arc(e.x,e.y,e.size,0,Math.PI*2),i.fill()})}function g(){A(),E(),requestAnimationFrame(g)}t.addEventListener("mousemove",e=>{const n=t.getBoundingClientRect();a.x=e.clientX-n.left,a.y=e.clientY-n.top}),t.addEventListener("mouseleave",()=>{a.x=-1e3,a.y=-1e3}),x(),window.addEventListener("resize",x),g()}R();P();I();b();
