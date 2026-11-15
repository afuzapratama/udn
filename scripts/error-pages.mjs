const shared = {
  id: {
    skip: 'Langsung ke isi', home: 'Kembali ke beranda', retry: 'Coba muat ulang',
    support: 'Masih mengalami kendala? Hubungi tim UDN melalui email.', language: 'Bahasa halaman',
  },
  en: {
    skip: 'Skip to content', home: 'Back to homepage', retry: 'Try reloading',
    support: 'Still having trouble? Contact the UDN team by email.', language: 'Page language',
  },
};

export const errorPages = {
  404: {
    id: { label: 'Alamat tidak ditemukan', title: 'Halaman ini tidak ditemukan.', description: 'Periksa kembali alamat yang Anda buka, atau kembali ke beranda untuk mengenal produk dan layanan UDN.' },
    en: { label: 'Address not found', title: 'This page could not be found.', description: 'Check the address you opened, or return to the homepage to learn about UDN products and services.' },
  },
  500: {
    id: { label: 'Gangguan layanan', title: 'Halaman belum bisa ditampilkan.', description: 'Terjadi kendala saat menampilkan halaman ini. Coba muat ulang beberapa saat lagi. Jika kendala berlanjut, hubungi UDN melalui email.' },
    en: { label: 'Service error', title: 'We could not display this page.', description: 'Something went wrong while displaying this page. Try reloading in a moment. If the problem continues, contact UDN by email.' },
  },
  503: {
    id: { label: 'Layanan belum tersedia', title: 'Silakan coba beberapa saat lagi.', description: 'Layanan sedang tidak dapat diakses. Coba muat ulang nanti, atau hubungi UDN melalui email jika Anda membutuhkan bantuan.' },
    en: { label: 'Service unavailable', title: 'Please try again in a moment.', description: 'This service is currently unavailable. Try reloading later, or contact UDN by email if you need help.' },
  },
  505: {
    id: { label: 'Versi HTTP tidak didukung', title: 'Permintaan ini belum bisa diproses.', description: 'Server tidak mendukung versi HTTP yang digunakan dalam permintaan ini. Coba akses kembali melalui browser terbaru, atau hubungi UDN jika kendala berlanjut.' },
    en: { label: 'HTTP version not supported', title: 'This request could not be processed.', description: 'The server does not support the HTTP version used for this request. Try opening the site in an up-to-date browser, or contact UDN if the problem continues.' },
  },
};

export function renderErrorPage(code, { logo, css, script }) {
  const messages = Object.fromEntries(['id', 'en'].map((language) => [language, {
    ...shared[language], ...errorPages[code][language],
    subject: `${code} - ${language === 'id' ? 'Bantuan website UDN' : 'UDN website support'}`,
  }]));
  const copy = messages.id;
  const favicon = `data:image/svg+xml,${encodeURIComponent(logo)}`;

  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, follow">
  <meta name="theme-color" content="#132d4b">
  <title>${code} | ${copy.title} | UDN</title>
  <link rel="icon" type="image/svg+xml" href="${favicon}">
  <style>${css}</style>
</head>
<body>
  <a class="skip" href="#utama" data-copy="skip">${copy.skip}</a>
  <header>
    <div class="container header-inner">
      <a class="logo" href="/" aria-label="${copy.home}">${logo}</a>
      <div class="languages" role="group" aria-label="${copy.language}" hidden>
        <button type="button" data-language="id" lang="id" aria-label="ID, Bahasa Indonesia" aria-pressed="true">ID</button>
        <button type="button" data-language="en" lang="en" aria-label="EN, English" aria-pressed="false">EN</button>
      </div>
    </div>
  </header>
  <main id="utama" tabindex="-1">
    <div class="container error-layout">
      <p class="status"><span data-copy="label">${copy.label}</span><span class="code">${code}</span></p>
      <div>
        <h1 data-copy="title">${copy.title}</h1>
        <p class="description" data-copy="description">${copy.description}</p>
        <div class="actions">
          <a class="button" href="/" data-copy="home">${copy.home}</a>
          ${Number(code) === 404 ? '' : `<button class="button retry" type="button" data-copy="retry" hidden>${copy.retry}</button>`}
        </div>
        <div class="support">
          <p data-copy="support">${copy.support}</p>
          <a href="mailto:help@udn.co.id?subject=${encodeURIComponent(copy.subject)}">help@udn.co.id</a>
        </div>
      </div>
    </div>
  </main>
  <footer><div class="container"><p>PT Universal Digital Network</p></div></footer>
  <script>const statusCode = ${Number(code)}; const messages = ${JSON.stringify(messages)};
${script}</script>
</body>
</html>
`;
}
