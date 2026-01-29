export function initFooter() {
  const footer = document.querySelector('#footer');
  footer.innerHTML = `
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
  `;

  const titleElement = document.getElementById('footer-title');
  const specialChars = ['+', '-', '=', '{', '[', ']', '#', '!', '$', '%'];

  function scrambleFooterTitle(targetText) {
    let iteration = 0;
    const interval = setInterval(() => {
      titleElement.innerHTML = targetText
        .split('')
        .map((char, index) => {
          if (char === '<' || char === 'b' || char === 'r' || char === '>') return char;
          if (index < iteration) return targetText[index];
          return `<span class="scramble-footer" style="color: #444;">${specialChars[Math.floor(Math.random() * specialChars.length)]}</span>`;
        })
        .join('');

      if (iteration >= targetText.length) {
        clearInterval(interval);
        titleElement.innerHTML = targetText;
      }
      iteration += 1;
    }, 30);
  }

  // Initial scramble and loop
  const originalHtml = titleElement.innerHTML;
  function startLoop() {
    setTimeout(() => {
      scrambleFooterTitle(originalHtml);
      startLoop();
    }, 5000);
  }
  startLoop();
}
