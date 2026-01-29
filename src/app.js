export function initApp() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <section id="section-header"></section>
    <section id="hero"></section>
    <footer id="footer"></footer>
  `;
  console.log('App structure initialized');
}
