(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();function b(){const a=document.querySelector("#section-header");window.location.pathname.includes("career")&&a.classList.add("career-header");const s=window.location.pathname.includes("research");if(a.innerHTML=`
    <div class="top-nav">
      <div class="nav-left">
        <div class="lang-switcher">
          <button id="lang-kr" class="lang-btn">KR</button>
          <span class="divider">/</span>
          <button id="lang-en" class="lang-btn active">EN</button>
        </div>
        <span class="divider">|</span>
        <a href="/" class="back-link">BACK TO HOME</a>
      </div>
      <div class="social-links">
        <a href="https://instagram.com/kometvest" target="_blank" class="instagram-link">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
    <div class="name-display-container">
      ${s?'<h1 id="research-title">RESEARCH</h1>':'<h1 id="morphing-name">HAYUNG</h1>'}
    </div>
  `,s)return;const e=document.getElementById("morphing-name");if(!e)return;const r=["+","-","=","{","[","]","#","!","$","%","&","*","?",">","<"],t=["HAYUNG","MINSEO"];let n=0,o=!1;function l(i){if(o)return;o=!0;let c=0;const h=setInterval(()=>{e.innerHTML=i.split("").map((f,p)=>p<c?`<span class="char">${i[p]}</span>`:`<span class="char scramble">${r[Math.floor(Math.random()*r.length)]}</span>`).join(""),c>=i.length&&(clearInterval(h),e.textContent=i,e.innerHTML=i.split("").map(f=>`<span class="char">${f}</span>`).join(""),o=!1),c+=1/3},50)}function u(){setTimeout(()=>{n=(n+1)%t.length,l(t[n]),u()},3e3)}window.scrambleName=i=>{l(i)},e.innerHTML=e.textContent.split("").map(i=>`<span class="char">${i}</span>`).join(""),u()}function y(){const a=document.querySelector("#footer");a.innerHTML=`
    <div class="footer-container">
      <div class="footer-left">
        <p id="footer-title" class="i18n-scramble" data-i18n="titles">Entrepreneur &<br>Synthetic Biologist & Designer</p>
      </div>
      <div class="footer-right">
        <div class="footer-link">
          <span class="link-label">Email</span>
          <a href="mailto:kometvest@gmail.com">kometvest@gmail.com</a>
        </div>
        <div class="footer-link">
          <span class="link-label">Portfolio</span>
          <a href="https://www.behance.net/hayuuuuung" target="_blank">behance.net/hayuuuuung</a>
        </div>
        <div class="footer-link">
          <span class="link-label">Download</span>
          <a href="/resume.jpg" download="Minseo_Kim_Resume.jpg" class="i18n" data-i18n="resume">Resume / CV</a>
        </div>
      </div>
    </div>
  `;const s=document.getElementById("footer-title"),e=["+","-","=","{","[","]","#","!","$","%"];function r(o){let l=0;const u=setInterval(()=>{s.innerHTML=o.split("").map((i,c)=>i==="<"||i==="b"||i==="r"||i===">"?i:c<l?o[c]:`<span class="scramble-footer" style="color: #444;">${e[Math.floor(Math.random()*e.length)]}</span>`).join(""),l>=o.length&&(clearInterval(u),s.innerHTML=o),l+=1},30)}const t=s.innerHTML;function n(){setTimeout(()=>{r(t),n()},5e3)}n()}const m={KR:{titles:"창업가 & 합성 생물학자 & 디자이너",career:"Career",seminar:"Seminar",design:"Design",research:"Research",email:"Email",portfolio:"Portfolio",resume:"Resume / CV",description:"각 이미지를 클릭하세요"},EN:{titles:"Entrepreneur & Synthetic Biologist & Designer",career:"Career",seminar:"Seminar",design:"Design",research:"Research",email:"Email",portfolio:"Portfolio",resume:"Resume / CV",description:"Click to explore"}};let d="EN";function g(a){d=a,v(),window.scrambleName&&window.scrambleName(a==="KR"?"MINSEO":"HAYUNG")}function v(){document.querySelectorAll(".i18n").forEach(e=>{const r=e.getAttribute("data-i18n");m[d][r]&&(e.textContent=m[d][r])}),document.querySelectorAll(".hover-zone").forEach(e=>{const r=e.getAttribute("id").replace("zone-","");m[d][r]&&e.setAttribute("data-label",m[d][r])}),document.querySelectorAll(".lang-btn").forEach(e=>{e.classList.toggle("active",e.id===`lang-${d.toLowerCase()}`)})}function w(){document.querySelector(".lang-switcher").addEventListener("click",a=>{if(a.target.classList.contains("lang-btn")){const s=a.target.id.split("-")[1].toUpperCase();g(s)}})}export{y as a,w as b,b as i,v as u};
