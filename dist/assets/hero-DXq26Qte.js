function p(){const a=document.querySelector("#app");a.innerHTML=`
    <section id="section-header"></section>
    <section id="hero"></section>
    <footer id="footer"></footer>
  `,console.log("App structure initialized")}function d(){const a=document.querySelector("#hero");if(window.location.pathname.includes("research")){a.innerHTML=`
      <div class="hero-container full-screen">
        <!-- Blank hero section for research page as requested -->
      </div>
    `;return}a.innerHTML=`
    <div class="hero-container full-screen">
      <div class="platypus-wrapper screen-fill" style="overflow: visible;">
        <div class="platypus-layers">
          
            <!-- Part 5: Body/Back (Visual Only, Z-index 1) -->
            <img src="/platypus_part_5.png" class="platypus-part" id="part-5" style="z-index: 1;">

            <!-- Part 3: Rear Paw (Visual Only, Z-index 2) -->
            <img src="/platypus_part_3.png" class="platypus-part" id="part-3" style="z-index: 2;">

            <!-- Part 4: Tail -> DESIGN (Interactive, Z-index 3) -->
            <div class="platypus-part-wrapper" id="wrap-part-4" style="z-index: 3;">
                <img src="/platypus_part_4.png" class="platypus-part interactive" id="part-4" data-label="DESIGN">
            </div>

            <!-- Part 2: Front Paw -> RESEARCH (Interactive, Z-index 4) -->
            <div class="platypus-part-wrapper" id="wrap-part-2" style="z-index: 4;">
                <img src="/platypus_part_2.png" class="platypus-part interactive" id="part-2" data-label="RESEARCH">
            </div>

            <!-- Part 1: Bill -> CAREER (Interactive, Z-index 5) -->
            <div class="platypus-part-wrapper" id="wrap-part-1" style="z-index: 5;">
                <img src="/platypus_part_1.png" class="platypus-part interactive" id="part-1" data-label="CAREER">
            </div>
        </div>
        
        <div class="hover-label" id="cursor-label"></div>
      </div>
    </div>
  `;const r={1:{x:-215.6,y:-78.5,s:100,r:0},2:{x:-83.7,y:-17.3,s:51,r:0},3:{x:-25.5,y:-37.6,s:58,r:0},4:{x:14.1,y:-93.2,s:63,r:0},5:{x:-57.6,y:-91.9,s:60,r:0}};Object.keys(r).forEach(t=>{const e=r[t],i=document.getElementById(`part-${t}`);i&&(i.style.transform=`translate(${e.x}%, ${e.y}%) rotate(${e.r}deg) scale(${e.s/100})`)});const s=document.getElementById("cursor-label"),n=document.querySelectorAll(".platypus-part.interactive");window.addEventListener("mousemove",t=>{s.style.transform=`translate(${t.clientX}px, ${t.clientY}px)`}),n.forEach(t=>{t.addEventListener("mouseenter",()=>{const e=t.getAttribute("data-label");s.innerText=e,s.classList.add("visible")}),t.addEventListener("mouseleave",()=>{s.classList.remove("visible")}),t.addEventListener("click",()=>{const e=t.getAttribute("id");e==="part-1"?window.location.href="/career.html":e==="part-2"?window.location.href="/research.html":window.open("https://behance.net/hayuuuuung","_blank")})}),["part-1","part-2","part-4"].forEach(t=>{const e=document.getElementById(t);e&&(e.classList.add("blink"),e.addEventListener("mouseenter",()=>{e.classList.remove("blink")}),e.addEventListener("mouseleave",()=>{e.classList.add("blink")}))})}export{d as a,p as i};
