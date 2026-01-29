import './style.css';
import './src/header.css';
import './src/footer.css';
import './src/career.css';
import { initHeader } from './src/header.js';
import { initFooter } from './src/footer.js';
import { initCareer } from './src/career.js';
import { initI18n } from './src/i18n.js';

// Initialize components
initHeader();
initCareer();
initFooter();
initI18n();
