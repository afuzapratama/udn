const languageButtons = document.querySelectorAll('[data-language]');
let language;
try {
  const saved = localStorage.getItem('udn-language');
  if (saved === 'id' || saved === 'en') language = saved;
} catch {
  // The page remains usable when storage is unavailable.
}
if (!language) {
  const preferred = navigator.languages?.[0] || navigator.language || 'en';
  language = /^(id|in)(-|$)/i.test(preferred) ? 'id' : 'en';
}

function setLanguage(nextLanguage) {
  const copy = messages[nextLanguage];
  document.documentElement.lang = nextLanguage;
  document.title = `${statusCode} | ${copy.title} | UDN`;
  document.querySelectorAll('[data-copy]').forEach((element) => {
    element.textContent = copy[element.dataset.copy];
  });
  document.querySelector('.logo').setAttribute('aria-label', copy.home);
  document.querySelector('.languages').setAttribute('aria-label', copy.language);
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === nextLanguage)));
  document.querySelector('.support a').href = `mailto:help@udn.co.id?subject=${encodeURIComponent(copy.subject)}`;
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    language = button.dataset.language;
    setLanguage(language);
    try {
      localStorage.setItem('udn-language', language);
    } catch {
      // Switching still works for the current page.
    }
  });
});

setLanguage(language);
document.querySelector('.languages').hidden = false;
const retry = document.querySelector('.retry');
if (retry) {
  retry.hidden = false;
  retry.addEventListener('click', () => window.location.reload());
}
