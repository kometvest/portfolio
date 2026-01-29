export const translations = {
    KR: {
        titles: "창업가 & 합성 생물학자 & 디자이너",
        career: "Career",
        seminar: "Seminar",
        design: "Design",
        research: "Research",
        email: "Email",
        portfolio: "Portfolio",
        resume: "Resume / CV",
        description: "각 이미지를 클릭하세요"
    },
    EN: {
        titles: "Entrepreneur & Synthetic Biologist & Designer",
        career: "Career",
        seminar: "Seminar",
        design: "Design",
        research: "Research",
        email: "Email",
        portfolio: "Portfolio",
        resume: "Resume / CV",
        description: "Click to explore"
    }
};

let currentLang = 'EN';

export function setLanguage(lang) {
    currentLang = lang;
    updateUI();
    // Trigger header scramble if it exists
    if (window.scrambleName) {
        window.scrambleName(lang === 'KR' ? 'MINSEO' : 'HAYUNG');
    }
}

export function updateUI() {
    const elements = document.querySelectorAll('.i18n');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update platypus zones
    const zones = document.querySelectorAll('.hover-zone');
    zones.forEach(zone => {
        const key = zone.getAttribute('id').replace('zone-', '');
        if (translations[currentLang][key]) {
            zone.setAttribute('data-label', translations[currentLang][key]);
        }
    });

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${currentLang.toLowerCase()}`);
    });
}

export function initI18n() {
    document.querySelector('.lang-switcher').addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.id.split('-')[1].toUpperCase();
            setLanguage(lang);
        }
    });
}
