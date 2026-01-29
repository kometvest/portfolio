import './style.css';
import './src/header.css';
import './src/hero.css';
import './src/footer.css';
import { initApp } from './src/app.js';
import { initHeader } from './src/header.js';
import { initHero } from './src/hero.js';
import { initFooter } from './src/footer.js';
import { initI18n, updateUI } from './src/i18n.js';

initApp();
initHeader();
initHero();
initFooter();
initI18n();
updateUI();
