# PT Universal Digital Network

Landing page PT Universal Digital Network dengan fokus ekosistem e-learning dan manajemen sekolah, lisensi penggunaan, serta penyesuaian sistem. Kelas Merdeka ditampilkan sebagai contoh produk. Dibangun dengan HTML, CSS, dan JavaScript. Node.js hanya digunakan untuk menyalin berkas publik saat build, tanpa paket tambahan atau server aplikasi.

Jalankan dari direktori proyek:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Buka http://127.0.0.1:8000. File yang dipublikasikan: `index.html`, `styles.css`, `script.js`, dan direktori `assets/`.
Jangan publikasikan direktori `.codex`, dokumen perusahaan mentah, atau file kerja lainnya.

Tautan email dan telepon membuka aplikasi perangkat pengguna. Tidak ada pesan yang dikirim otomatis.
Halaman tidak memiliki backend, formulir, pembayaran, cookie tracking, atau dependensi pihak ketiga.

Email help@udn.co.id berasal dari konfirmasi pemilik. Identitas perusahaan, alamat, dan telepon dipertahankan dari versi sebelumnya.
Catatan keputusan visual dan asal konten tersedia di DESIGN.md.

Screenshot halaman publik Kelas Merdeka diambil dengan Playwright. Foto belajar dari Unsplash hanya ilustrasi; keduanya disimpan lokal di assets agar tidak memuat gambar pihak ketiga saat halaman dibuka. Hasil pemeriksaan tersedia di VERIFICATION.md.

Logo vektor berlatar transparan tersedia di `assets/udn.svg` (wordmark saja) dan
`assets/udn-horizontal.svg` (dengan nama Universal Digital Network). Semua huruf
dikonversi menjadi path sehingga tampilannya tidak bergantung pada font perangkat.

Bahasa Indonesia/Inggris dipilih otomatis dari preferensi bahasa browser. Tombol ID/EN menyimpan pilihan manual di localStorage. Deteksi mengikuti bahasa, bukan negara pengunjung. Tidak ada layanan terjemahan atau geolokasi eksternal. JavaScript yang tidak aktif menampilkan versi Indonesia.

## Build dan deployment Vercel

Jalankan dengan Node.js LTS (build lokal diverifikasi pada Node.js 24):

```sh
npm run build
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Build menghasilkan `dist/` berisi halaman utama, CSS/JS, aset publik, robots.txt, sitemap.xml, serta halaman error 404/500/503/505. Folder ini dibuat ulang setiap build. Favicon merujuk `/assets/udn.svg`.

Untuk deploy melalui Git:

1. Push proyek ke repository Git yang dapat diakses akun Vercel Anda.
2. Import repository tersebut ke Vercel. Pilih root directory yang berisi `vercel.json`.
3. Gunakan Framework Preset **Other**, Build Command `npm run build`, Output Directory `dist`. Konfigurasi ini sudah ada di `vercel.json`; instalasi dependensi dilewati karena tidak ada dependensi.
4. Deploy, lalu tambahkan `udn.co.id` pada pengaturan Domains dan ikuti instruksi DNS yang ditampilkan Vercel.

Alternatif lewat CLI dari root proyek, jika Node.js/npm dan akun Vercel tersedia:

```sh
npx vercel
npx vercel --prod
```

Perintah pertama mengikuti proses login/link proyek dan membuat deployment preview. Perintah kedua memublikasikan production. Tidak memerlukan environment variable untuk halaman saat ini. Project ID, token, dan domain tidak dibuat otomatis oleh konfigurasi lokal ini.

Referensi: [Vercel build settings](https://vercel.com/docs/builds/configure-a-build) dan [vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

## SEO

Canonical produksi: `https://udn.co.id/`. Judul dan deskripsi menjelaskan e-learning serta manajemen sekolah. Metadata Open Graph/Twitter memakai screenshot produk yang sudah ada; title, description, dan alt menyesuaikan bahasa ketika JavaScript berjalan. Crawler pratinjau tanpa JavaScript menerima metadata Indonesia dari HTML.

Data terstruktur Organization dan WebSite berisi identitas perusahaan yang sudah tampil di halaman. `robots.txt` dan `sitemap.xml` ikut disalin ke `dist/` saat build. Setelah deployment selesai, tambahkan `https://udn.co.id/sitemap.xml` di Google Search Console dan periksa homepage melalui URL Inspection. Verifikasi kepemilikan Search Console belum dilakukan dari proyek ini.

Versi ID/EN saat ini berbagi satu URL dengan pergantian bahasa di browser. Tidak memasang hreflang untuk URL bahasa yang belum ada. Untuk pengindeksan bahasa secara terpisah, perubahan berikutnya memerlukan URL khusus dan HTML terjemahan yang dapat diambil langsung. Metadata ini tidak menjamin peringkat atau pengindeksan tertentu.

## Halaman error

Build membuat `404.html`, `500.html`, `503.html`, dan `505.html` dari `scripts/error-pages.mjs` serta source `errors/`. CSS, script pergantian bahasa, logo SVG, dan favicon ditanam dalam setiap HTML. Halaman error tidak memerlukan stylesheet, script, atau gambar eksternal. Bahasa mengikuti preferensi browser dan pilihan `udn-language` yang sama dengan homepage; tanpa JavaScript tetap tersedia dalam bahasa Indonesia dengan tautan beranda dan email. Tombol muat ulang hanya tersedia jika JavaScript aktif.

Vercel mengenali `404.html` dalam output statis dan menyajikannya untuk URL yang tidak ditemukan. Tidak ada catch-all rewrite ke homepage yang mengubah error menjadi HTTP 200. Halaman error memakai `noindex, follow` dan tidak masuk sitemap.

Integrasi halaman gangguan **platform Vercel** dengan `500.html` sebagai fallback, serta `503.html`/`505.html` per status, memerlukan dukungan paket **Enterprise** menurut dokumentasi Vercel saat implementasi. Pada paket lain, file tetap tersedia sebagai halaman statis, tetapi error platform dapat tetap memakai tampilan bawaan Vercel. Menambahkan file ini tidak mengubah pengaturan paket akun dan tidak menggantikan layar error browser atau gangguan DNS/jaringan. `505` berarti versi HTTP tidak didukung, berbeda dari error server umum `500`.

Untuk melihat desain hasil build, buka `/404.html`, `/500.html`, `/503.html`, atau `/505.html`. Akses langsung file preview biasanya berstatus HTTP 200; status 404/5xx sebenarnya berasal dari penanganan request oleh hosting. Server Python standar tidak otomatis memakai 404.html; uji URL tidak ditemukan pada deployment Vercel untuk memverifikasi integrasinya.

Referensi: [Vercel custom 404](https://vercel.com/kb/guide/custom-404-page) dan [platform error pages](https://vercel.com/docs/custom-error-pages).
