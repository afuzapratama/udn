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

Build menghasilkan `dist/` berisi hanya `index.html`, `styles.css`, `script.js`, dan `assets/`. Folder ini dibuat ulang setiap build. Favicon merujuk `/assets/udn.svg`.

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
