document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-utama');
const mobileLayout = window.matchMedia('(max-width: 900px)');
const backdrop = document.querySelector('.nav-backdrop');

function updateMenuLabel() {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.querySelector('.menu-toggle-label').textContent = open
    ? (document.documentElement.lang === 'id' ? 'Tutup' : 'Close')
    : 'Menu';
}

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  backdrop.hidden = !open;
  updateMenuLabel();
}

function syncMenu() {
  menuButton.hidden = !mobileLayout.matches;
  if (mobileLayout.matches) menuButton.after(menu);
  else document.querySelector('.language-switch').before(menu);
  setMenu(false);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenu(false);
  if (wasOpen) {
    const target = document.querySelector(link.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});

document.addEventListener('pointerdown', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (!event.target.closest('.navigation')) {
    setMenu(false);
    menuButton.focus({ preventScroll: true });
  }
});

document.addEventListener('focusin', (event) => {
  if (!event.target.closest('.navigation')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

mobileLayout.addEventListener('change', syncMenu);
syncMenu();
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const navLinks = [...menu.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main > section[id]')];
let scrollUpdatePending = false;

function updateCurrentSection() {
  const boundary = header.getBoundingClientRect().height + 80;
  const current = sections.filter((section) => section.getBoundingClientRect().top <= boundary).at(-1);
  navLinks.forEach((link) => {
    if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollUpdatePending = false;
}

new ResizeObserver(() => {
  document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  updateCurrentSection();
}).observe(header);

window.addEventListener('scroll', () => {
  if (!scrollUpdatePending) {
    scrollUpdatePending = true;
    requestAnimationFrame(updateCurrentSection);
  }
}, { passive: true });

const translations = [
  ['title', 'PT Universal Digital Network | Technology for Education'],
  ['meta[name="description"]', 'PT Universal Digital Network develops e-learning and school management ecosystems. Discover Kelas Merdeka, product licensing, and systems tailored to your educational needs.', 'content'],
  ['.skip-link', 'Skip to content'],
  ['.wordmark', 'UDN, back to top', 'aria-label'],
  ['.navigation', 'Main navigation', 'aria-label'],
  ['.language-switch', 'Page language', 'aria-label'],
  ['.nav-list a[href="#tentang"]', 'About UDN'],
  ['.nav-list a[href="#layanan"]', 'Licensing &amp; Customization'],
  ['.nav-contact', 'Contact Us'],
  ['#hero-title', 'Technology that<br>supports<br><span>learning.</span>'],
  ['.hero-description', 'We develop e-learning and school management ecosystems. License our products with interfaces and systems tailored to your needs.'],
  ['.button-primary', 'Meet Kelas Merdeka'],
  ['.product-preview-link', 'Read about Kelas Merdeka', 'aria-label'],
  ['.hero-product img', 'Screenshot of the Kelas Merdeka public homepage, a teacher workspace for attendance, learning materials, assignments, and grades.', 'alt'],
  ['.hero-product figcaption span', 'An education product in the UDN ecosystem.'],
  ['.hero-bottom span:first-child', 'E-learning &amp; school management'],
  ['.hero-bottom span:last-child', 'Based in Medan, Indonesia'],
  ['.about-aside > .section-label', 'About UDN'],
  ['.study-figure img', 'Illustrative study scene: taking notes in a notebook while using a laptop.', 'alt'],
  ['.study-figure figcaption', 'Illustrative photo: Green Chameleon / Unsplash'],
  ['#about-title', 'Building systems<br>for your<br>educational needs.'],
  ['.about-body p:first-child', 'PT Universal Digital Network is a technology company based in Medan, North Sumatra, Indonesia. As the parent company behind Kelas Merdeka, we focus on developing digital learning and school management ecosystems.'],
  ['.about-body p:last-child', 'We offer product licenses and development on request. Each user has different needs, so we discuss the interface, features, and workflows around the activities they want to manage.'],
  ['.product-heading .section-label', 'An example of a product in use'],
  ['#product-title', 'Kelas Merdeka.<br>A connected<br>learning space.'],
  ['.product-intro > p', 'An ecosystem for managing classroom activities and connecting teachers, students, and parents. Kelas Merdeka is live and in use, and serves as an example of the education products developed by UDN.'],
  ['.product-intro .text-link', 'Visit kelasmerdeka.online'],
  ['.scope-title h3', 'From classroom management<br>to learning reports.'],
  ['.scope-title p', 'The capabilities introduced on the Kelas Merdeka public homepage.'],
  ['.feature-list > div:nth-child(1) dt', 'Class administration'],
  ['.feature-list > div:nth-child(1) dd', 'Academic years, semesters, classes, students, and subjects organized within the same learning context.'],
  ['.feature-list > div:nth-child(2) dt', 'Digital learning'],
  ['.feature-list > div:nth-child(2) dd', 'Learning materials, assignments, student submissions, and file archives for classroom activities.'],
  ['.feature-list > div:nth-child(3) dt', 'Attendance &amp; assessment'],
  ['.feature-list > div:nth-child(3) dd', 'Attendance records, grades, P5 project activities, and learning progress reports.'],
  ['.feature-list > div:nth-child(4) dt', 'Student &amp; parent portal'],
  ['.feature-list > div:nth-child(4) dd', 'Access to learning materials, assignments, grades, and updates shared by teachers.'],
  ['.product-note', 'Kelas Merdeka is one implementation. Interfaces and system capabilities for other users may differ according to agreed requirements.'],
  ['.services .section-heading .section-label', 'Licensing &amp; customization'],
  ['#services-title', 'A system shaped<br>around your needs.'],
  ['.services .section-heading > p', 'Tell us what you want to manage. We will discuss product scope, customization, and terms of use with you.'],
  ['#lisensi h3', 'Ecosystem usage license'],
  ['#lisensi .service-name p', 'For those who want to use UDN education products.'],
  ['#lisensi .service-detail p', 'Customers receive a license to use products within the UDN ecosystem. Features, license duration, fees, and included services are defined in the proposal and agreement.'],
  ['#lisensi .text-link', 'Ask about product licensing'],
  ['#lisensi .text-link', 'mailto:help@udn.co.id?subject=Education%20ecosystem%20licensing%20inquiry', 'href'],
  ['#penyesuaian h3', 'Interface &amp; system customization'],
  ['#penyesuaian .service-name p', 'For requirements that differ from the Kelas Merdeka example.'],
  ['#penyesuaian .service-detail p', 'Request an interface, features, or workflows for your school management and learning needs. Development scope and customization fees are discussed before work begins.'],
  ['#penyesuaian .text-link', 'Discuss your system requirements'],
  ['#penyesuaian .text-link', 'mailto:help@udn.co.id?subject=Education%20system%20customization%20request', 'href'],
  ['.offer-note h3', 'Before placing an order'],
  ['.offer-note p', 'Contact UDN for a proposal based on your needs. Make sure your agreement specifies the license terms, deliverables, schedule, support, and payment terms.'],
  ['.company .section-label', 'The company behind the products'],
  ['.company-intro', 'Products and services within the UDN ecosystem are developed under PT Universal Digital Network. Contact the company about licensing, system requirements, or partnerships.'],
  ['.company-data > div:nth-child(1) dt', 'Legal business name'],
  ['.company-data > div:nth-child(2) dt', 'Legal entity type'],
  ['.company-data > div:nth-child(2) dd', 'Indonesian single-person limited liability company (Perseroan Perorangan)'],
  ['.company-data > div:nth-child(3) dt', 'Business Identification Number (NIB)'],
  ['.company-data > div:nth-child(4) dt', 'Company domicile'],
  ['.company-data > div:nth-child(4) dd', 'Medan, North Sumatra, Indonesia'],
  ['.contact-copy .section-label', 'Tell us what you need'],
  ['#contact-title', 'What would you<br>like to manage<br>better?'],
  ['.contact-copy > p:not(.section-label)', 'Tell us about your learning or school management needs. We will discuss product options, licensing, and the customization required.'],
  ['.button-light', 'Discuss your needs with UDN'],
  ['.button-light', 'mailto:help@udn.co.id?subject=Education%20ecosystem%20consultation', 'href'],
  ['.contact-details > div:nth-child(2) > span', 'Phone'],
  ['.contact-details > div:nth-child(3) > span', 'Company address'],
  ['.footer-inner > a', 'Back to top ↑'],
].map(([selector, english, attribute]) => {
  const element = document.querySelector(selector);
  return {
    element,
    attribute,
    id: attribute ? element.getAttribute(attribute) : element.innerHTML,
    en: english,
  };
});

const languageStorageKey = 'udn-language';
const languageButtons = document.querySelectorAll('[data-language]');
let chosenLanguage = null;

try {
  const savedLanguage = localStorage.getItem(languageStorageKey);
  if (savedLanguage === 'id' || savedLanguage === 'en') chosenLanguage = savedLanguage;
} catch {
  // Language switching remains available when browser storage is blocked.
}

function browserLanguage() {
  const preferredLanguage = navigator.languages?.[0] || navigator.language || 'en';
  return /^(id|in)(-|$)/i.test(preferredLanguage) ? 'id' : 'en';
}

function setLanguage(language) {
  document.documentElement.lang = language;
  translations.forEach(({ element, attribute, ...content }) => {
    if (attribute) element.setAttribute(attribute, content[language]);
    else element.innerHTML = content[language];
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  updateMenuLabel();
  requestAnimationFrame(updateCurrentSection);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    chosenLanguage = button.dataset.language;
    setLanguage(chosenLanguage);
    try {
      localStorage.setItem(languageStorageKey, chosenLanguage);
    } catch {
      // The choice still applies for this page when it cannot be saved.
    }
  });
});

setLanguage(chosenLanguage || browserLanguage());
document.querySelector('.language-switch').hidden = false;
window.addEventListener('languagechange', () => {
  if (!chosenLanguage) setLanguage(browserLanguage());
});
