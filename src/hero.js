export function initHero() {
  const hero = document.querySelector('#hero');
  // Check if we are on the research page
  const isResearchPage = window.location.pathname.includes('research');

  if (isResearchPage) {
    hero.innerHTML = `
      <div class="hero-container full-screen">
        <!-- Blank hero section for research page as requested -->
      </div>
    `;
    return;
  }

  hero.innerHTML = `
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
  `;

  // Final Alignment Config (User Verified)
  const config = {
    1: { x: -215.6, y: -78.5, s: 100, r: 0 },
    2: { x: -83.7, y: -17.3, s: 51, r: 0 },
    3: { x: -25.5, y: -37.6, s: 58, r: 0 },
    4: { x: 14.1, y: -93.2, s: 63, r: 0 },
    5: { x: -57.6, y: -91.9, s: 60, r: 0 }
  };

  // Apply Positioning
  Object.keys(config).forEach(id => {
    const c = config[id];
    const el = document.getElementById(`part-${id}`);
    if (el) {
      el.style.transform = `translate(${c.x}%, ${c.y}%) rotate(${c.r}deg) scale(${c.s / 100})`;
    }
  });

  // Interaction Logic
  const label = document.getElementById('cursor-label');
  const parts = document.querySelectorAll('.platypus-part.interactive');

  // Move label with cursor
  window.addEventListener('mousemove', (e) => {
    // Always update position to prevent lag when it becomes visible
    label.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  parts.forEach(part => {
    part.addEventListener('mouseenter', () => {
      const text = part.getAttribute('data-label');
      label.innerText = text;
      label.classList.add('visible');
    });

    part.addEventListener('mouseleave', () => {
      label.classList.remove('visible');
    });

    part.addEventListener('click', () => {
      const partId = part.getAttribute('id');
      if (partId === 'part-1') {
        // Navigate to Career page
        window.location.href = '/career.html';
      } else if (partId === 'part-2') {
        // Navigate to Research page
        window.location.href = '/research.html';
      } else {
        // Navigate to Behance for other parts
        window.open('https://behance.net/hayuuuuung', '_blank');
      }
    });
  });

  // Blink Effect for Parts 1, 2, 4 (Tail)
  const blinkIds = ['part-1', 'part-2', 'part-4'];
  blinkIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Initial state: blinking
    el.classList.add('blink');

    el.addEventListener('mouseenter', () => {
      el.classList.remove('blink');
    });

    el.addEventListener('mouseleave', () => {
      el.classList.add('blink');
    });
  });
}
