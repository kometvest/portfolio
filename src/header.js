export function initHeader() {
  const header = document.querySelector('#section-header');

  // Add career-header class if on career page
  if (window.location.pathname.includes('career')) {
    header.classList.add('career-header');
  }

  const isResearchPage = window.location.pathname.includes('research');

  header.innerHTML = `
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
      ${isResearchPage
      ? '<h1 id="research-title">RESEARCH</h1>'
      : '<h1 id="morphing-name">HAYUNG</h1>'}
    </div>
  `;

  if (isResearchPage) return;

  const nameElement = document.getElementById('morphing-name');
  if (!nameElement) return;

  const specialChars = ['+', '-', '=', '{', '[', ']', '#', '!', '$', '%', '&', '*', '?', '>', '<'];
  const targets = ['HAYUNG', 'MINSEO'];
  let currentTargetIndex = 0;
  let isScrambling = false;

  function scrambleText(targetText) {
    if (isScrambling) return;
    isScrambling = true;

    let iteration = 0;
    const interval = setInterval(() => {
      nameElement.innerHTML = targetText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return `<span class="char">${targetText[index]}</span>`;
          }
          return `<span class="char scramble">${specialChars[Math.floor(Math.random() * specialChars.length)]}</span>`;
        })
        .join('');

      if (iteration >= targetText.length) {
        clearInterval(interval);
        nameElement.textContent = targetText;
        nameElement.innerHTML = targetText.split('').map(c => `<span class="char">${c}</span>`).join('');
        isScrambling = false;
      }

      iteration += 1 / 3;
    }, 50);
  }

  // Auto-loop with 3s delay
  function loop() {
    setTimeout(() => {
      currentTargetIndex = (currentTargetIndex + 1) % targets.length;
      scrambleText(targets[currentTargetIndex]);
      loop();
    }, 3000);
  }

  window.scrambleName = (target) => {
    scrambleText(target);
  };

  // Initial setup
  nameElement.innerHTML = nameElement.textContent.split('').map(c => `<span class="char">${c}</span>`).join('');
  loop();
}
