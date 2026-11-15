# Verifikasi perubahan fokus pendidikan

Tanggal: 15 November 2026 (Asia/Jakarta).
Lingkup: perubahan lokal index.html, styles.css, aset produk/foto, DESIGN.md, README.md, dan laporan ini. Belum dipublikasikan dan belum terintegrasi payment gateway.

## Pemeriksaan browser

Halaman dijalankan dengan server HTTP lokal dan Chromium melalui Playwright. Pemeriksaan terakhir selesai tanpa pageerror. Halaman publik Kelas Merdeka dibuka lewat Playwright; tidak login, membuat akun, atau mengakses data siswa.

- PASS: lebar 320, 375, 720, 768, 1000, dan 1440px tidak memiliki horizontal overflow; semua gambar selesai didekode.
- PASS: screenshot desktop 1440px dan mobile 375px diperiksa secara visual.
- PASS: teks 200% pada lebar 320px tidak menghasilkan horizontal overflow.
- PASS: reduced motion menghasilkan scroll-behavior auto.
- PASS: menu mobile dibuka lewat klik; Escape menutup dan memulihkan fokus ke Menu; Enter membuka; memilih tautan menutup menu.

## Catatan klik setiap kontrol

- PASS: Langsung ke isi, difokuskan lalu diklik, menuju #utama.
- PASS: wordmark menuju #utama.
- PASS: Tentang UDN menuju #tentang.
- PASS: Kelas Merdeka pada navigasi menuju #produk.
- PASS: Lisensi & Penyesuaian menuju #layanan.
- PASS: Hubungi Kami menuju #kontak.
- PASS: Kenali Kelas Merdeka menuju #produk.
- PASS: gambar pratinjau produk menuju #produk.
- PASS: Kunjungi kelasmerdeka.online membuka situs dengan judul Kelas Merdeka.
- PASS: Tanyakan lisensi penggunaan meminta mailto:help@udn.co.id dengan subjek lisensi.
- PASS: Diskusikan kebutuhan sistem meminta mailto:help@udn.co.id dengan subjek penyesuaian.
- PASS: Diskusikan dengan UDN meminta mailto:help@udn.co.id dengan subjek konsultasi.
- PASS: help@udn.co.id meminta mailto:help@udn.co.id.
- PASS: telepon meminta tel:+62895320841794.
- PASS: Kembali ke atas menuju #utama.
- PASS: Menu membuka/menutup navigasi mobile, dengan Escape dan Enter diperiksa.

Permintaan protokol mailto/tel ditangkap pada klik untuk memeriksa tujuannya tanpa mengirim pesan atau melakukan panggilan. Aplikasi email/telepon perangkat dan penerimaan email tidak diuji. Tautan kredit Unsplash dihapus setelah halaman pihak ketiga mengembalikan halaman kesalahan; kredit tetap berupa teks dan URL sumber dicatat di DESIGN.md.

## Delivery Gate: Hard Gate

- R-02 PASS: index.html tidak mengandung em dash.
- R-03 PASS: enam lebar viewport dan resize teks 200% tanpa overflow; kolom reflow pada breakpoint.
- R-17 PASS: tidak ada statistik pemasaran; NIB dipertahankan dari konten lama, bukan angka yang dibuat.
- R-18 PASS: tidak ada testimoni atau identitas pelanggan rekaan.
- R-23 PASS: screenshot dan foto ilustrasi diminta pengguna; wordmark lama dipertahankan; navigasi mengikuti bagian produk dan penawaran yang diminta.
- R-24 PASS: seluruh tujuan navigasi internal ada dan diklik.
- R-25 PASS: formula luminans WCAG pada sepuluh pasangan teks/latar menghasilkan minimum 5.76:1. Teks di luar screenshot tidak ditumpuk di atas foto.
- R-26 PASS: seluruh kontrol dicatat pada daftar klik; tidak ada tombol kosong.
- R-27 PASS: halaman statis tanpa data asinkron atau formulir, sehingga state data kosong/loading/error tidak berlaku; semua gambar lokal memiliki alt dan ukuran.
- R-28 PASS: tidak menambahkan FAQ.
- R-32 PASS: elemen native, skip link, outline :focus-visible, serta operasi menu via Enter/Escape diperiksa.
- R-33 PASS: perubahan ditulis langsung pada sumber HTML/CSS; tidak ada skrip pengganti string sumber.
- R-34 PASS: satu tema terang dengan blok navy, tanpa toggle tema.
- R-35 PASS: dijalankan pada HTTP lokal dan Playwright; setiap kontrol diklik; pageerror kosong.
- R-36 PASS: tidak ada klaim persetujuan Xendit, keamanan, performa, pelanggan, atau sertifikasi yang dibuat.
- R-37 PASS: Design Read dan ENERGY 1 / RHYTHM 2 / MOTION 1 ditetapkan sebelum edit, berdasar DESIGN.md lama.
- R-38 PASS: fitur merujuk halaman publik produk; status penggunaan dan model lisensi berasal dari pemilik; foto berlabel ilustrasi; harga tidak dikarang.
- R-39 PASS: native link/button, cursor pointer, alt, nama kontrol, hover/active/focus; lang, title, main, header/nav/footer tersedia. Tidak ada field, ARIA palsu, atau animasi berulang.
- R-40 PASS: semua gambar berukuran intrinsik; gambar hero memakai fetchpriority high; foto bawah memakai lazy; script defer dan tanpa skrip pihak ketiga; tidak melaporkan skor performa.

## Delivery Gate: Purpose-Gate

- R-01 PASS: warna solid, tidak ada gradient/glow baru; navy mempertahankan identitas di DESIGN.md.
- R-04 PASS: tidak menambahkan ikon generik atau pustaka ikon.
- R-06 PASS: font sistem dipertahankan untuk keterbacaan dan tanpa unduhan; alasan tercatat di DESIGN.md.
- R-07 PASS: tidak ada grid/dot dekoratif.
- R-08 PASS: hanya panah kembali ke atas untuk menunjukkan arah scroll.
- R-09 PASS: tidak ada capsule badge baru.
- R-10 PASS: tidak ada glassmorphism.
- R-12 PASS: tidak ada shadow dekoratif.
- R-13 PASS: tidak ada glow.
- R-14 PASS: fitur berupa daftar definisi; dua baris penawaran membedakan jenis layanan.
- R-19 PASS: hanya smooth scroll dan state kontrol; reduced motion diuji.
- R-22 PASS: foto belajar memperjelas bidang pendidikan dan screenshot menunjukkan produk sesungguhnya; alasan tercatat di DESIGN.md.

## Delivery Gate: Liveliness

- PASS: dials eksplisit ENERGY 1 / RHYTHM 2 / MOTION 1 di DESIGN.md dan sebelum edit.
- PASS: pembuka navy dengan screenshot, profil berfoto, daftar fitur, penawaran bernomor, identitas perusahaan, dan kontak memberi ritme sesuai konten.
- PASS: headline menjadi fokus pembuka, judul bagian memandu informasi berikutnya.
- PASS: whitespace membedakan bagian, baris fitur lebih rapat untuk perbandingan.
- PASS: biru pada tautan/penanda membantu menemukan tindakan, warna lainnya mengikuti navy dan netral.
- PASS: motif editorial berupa daftar fungsi dan baris penawaran bernomor mempertahankan identitas UDN dan memperjelas hubungan perusahaan/produk.
- PASS: Design Read dideklarasikan sebelum generasi dan dicatat dalam DESIGN.md.

## Delivery Gate: Craftsmanship & Quality Locks

- C-1 PASS: keputusan warna, font, screenshot, foto, daftar fitur, dan susunan bagian memiliki alasan di DESIGN.md.
- C-2 PASS: daftar klik mencakup setiap kontrol yang ada.
- C-3 PASS: bagian menjawab perusahaan, contoh produk, lisensi/penyesuaian, identitas, dan kontak; tanpa bagian pengisi.
- C-4 PASS: viewport, keyboard menu, resize teks, serta reduced motion diperiksa; tidak ada state data dinamis.
- C-5 PASS: tidak menambahkan testimoni, statistik, atau klaim tanpa sumber.
- R-05 PASS: susunan berangkat dari hubungan perusahaan dengan produk dan lisensi; tanpa bento, pricing tiga kolom, atau logo pelanggan.
- R-11 PASS: kontrol bersudut kecil, tidak seragam berbentuk pill.
- R-15 PASS: CTA menyebut produk, lisensi, atau kebutuhan sistem.
- R-16 PASS: copy menjelaskan kegiatan dan penawaran; tanpa buzzword pemasaran AI.
- R-20 PASS: screenshot Kelas Merdeka, konteks guru/siswa/orang tua, dan model lisensi memberi identitas spesifik.
- R-21 PASS: tema terang/navy mempertahankan arahan pemilik yang tercatat sebelumnya.
- R-29 PASS: navy, putih/netral, biru tautan; warna screenshot/foto berasal dari media asli.
- R-30 PASS: menggunakan arah UDN yang ada, tidak meniru produk populer.
- R-31 PASS: keputusan visual dijelaskan pada DESIGN.md.

## Batas verifikasi

Identitas usaha, NIB, alamat, dan telepon dipertahankan dari versi sebelumnya tanpa verifikasi registri. Email baru sesuai konfirmasi pemilik. Pengambilan screenshot tidak menguji fitur setelah login. Foto dan screenshot adalah berkas lokal. Halaman ini tidak melakukan transaksi; harga, periode lisensi, hosting, dukungan, refund, serta ketentuan pembayaran tetap perlu ditetapkan pemilik sebelum pembuatan checkout dan dokumen transaksi.

# Tambahan verifikasi dua bahasa

Perubahan lokal: versi Inggris, deteksi preferensi bahasa browser, tombol ID/EN, dan penyimpanan pilihan manual. Tidak ada lookup lokasi atau pengiriman preferensi ke layanan eksternal.

## Bukti pengujian

- PASS: konteks Playwright id-ID membuka ID; en-US, fr-FR, dan ja-JP membuka EN.
- PASS: ID -> EN -> ID -> EN bekerja pada keempat konteks; aria-pressed mengikuti bahasa aktif; reload mempertahankan pilihan EN walaupun locale browser id-ID.
- PASS: kedua bahasa diperiksa pada 320, 375, 720, 768, 1000, dan 1440px tanpa overflow; teks 200% pada 320px tetap tanpa overflow.
- PASS: tombol bahasa bekerja lewat Enter dan Space; menu dibuka dan ditutup via Escape dalam kedua bahasa.
- PASS: simulasi localStorage diblokir tetap dapat membuka halaman dan mengganti bahasa.
- PASS: screenshot desktop dan ponsel Inggris ditinjau; kontrol bahasa tampak pada header di luar menu.
- PASS: node --check script.js; tidak ada pageerror dalam pengujian locale maupun klik kontrol.
- PASS: daftar klik di atas dijalankan kembali dalam bahasa Inggris; tujuan anchor dan situs produk sama, tiga subjek email berubah ke bahasa Inggris, email dan telepon tetap sama. Tidak mengirim email atau melakukan panggilan.

## Delivery Gate ulang

- Hard Gate PASS: R-02, R-03, R-17, R-18, R-23 sampai R-28, dan R-32 sampai R-40 diperiksa kembali terhadap perubahan. Dua tombol bahasa berfungsi, minimum 44x44px, memiliki nama yang terbaca dan aria-pressed; warna aktif putih/navy 13.96:1, hover navy/#dce8f8 11.26:1. html lang, title, meta description, alt, dan aria-label mengikuti bahasa. Tidak menambahkan klaim produk, gambar, data, atau state jaringan baru.
- Purpose-Gate PASS: R-01, R-04, R-06 sampai R-10, R-12 sampai R-14, R-19, R-22 tetap sesuai laporan sebelumnya. Kontrol bahasa memakai batas/navy yang sama untuk menandai pilihan aktif, tanpa ikon bendera atau dekorasi; alasan tercatat di DESIGN.md.
- Liveliness PASS: ENERGY 1 / RHYTHM 2 / MOTION 1 dipertahankan; headline dan kata aksen, susunan editorial, whitespace, screenshot, serta pola daftar tidak berubah dalam kedua bahasa.
- Craftsmanship & Quality Locks PASS: C-1 sampai C-5 dan R-05, R-11, R-15, R-16, R-20, R-21, R-29 sampai R-31 diperiksa pada kedua bahasa. Terjemahan mempertahankan cakupan penawaran, tampilan tetap terbaca, semua tujuan kontrol dicatat dan diperiksa ulang.

Batas: preferensi bahasa browser tidak menunjukkan negara pengunjung. Browser yang memilih bahasa Inggris di Indonesia tetap membuka EN; pilihan manual mengalahkan deteksi. Tanpa JavaScript, HTML dasar tetap dalam bahasa Indonesia. Screenshot produk dipertahankan sesuai tampilan asli berbahasa Indonesia. Meta bahasa ditetapkan di browser; tidak membuat URL terpisah atau menjanjikan pengindeksan SEO dua bahasa.

# Tambahan verifikasi navigasi

Lingkup: header, menu mobile/desktop, pengelompokan bahasa, penanda bagian aktif, dan offset anchor. Pemeriksaan Chromium/Playwright pada HTTP lokal, 15 November 2026.

## Hasil interaksi

- PASS: ID dan EN pada lebar 320, 375, 520, 720, 768, 900, 901, 1000, 1440px tanpa overflow. Panel terbuka berada dalam batas layar; 900px memakai panel dan 901px memakai deretan desktop.
- PASS: screenshot mobile terbuka ID dan desktop EN ditinjau secara visual. Header lebih ringkas, menu vertikal, pilihan bahasa terkelompok, kontak berwarna navy.
- PASS: tombol Menu membuka panel; Tutup/Close menutup; label menyesuaikan saat bahasa diganti ketika panel terbuka.
- PASS: Escape menutup dan memulihkan fokus ke tombol. Klik area luar menutup dan memulihkan fokus. Resize dari mobile terbuka ke desktop menghapus scrim dan menampilkan navigasi desktop.
- PASS: Enter pada Menu membuka panel; Tab berikutnya menuju #tentang. Tab keluar panel menutup disclosure.
- PASS: Tentang/About menuju #tentang dalam ID/EN; panel menutup, bagian menerima fokus, aria-current location aktif, judul tidak tertutup header.
- PASS: Kelas Merdeka menuju #produk dalam ID/EN dengan perilaku fokus/offset/status aktif yang sama.
- PASS: Lisensi/Licensing menuju #layanan dalam ID/EN dengan perilaku fokus/offset/status aktif yang sama.
- PASS: Hubungi/Contact menuju #kontak dalam ID/EN dengan perilaku fokus/offset/status aktif yang sama.
- PASS: daftar klik kontrol halaman sebelumnya dijalankan kembali; skip link, wordmark, CTA, situs produk, email, telepon, dan kembali ke atas tetap berfungsi.
- PASS: resize teks 200% pada lebar 320px tidak overflow; panel pada landscape 667x320px dapat di-scroll hingga kontak.
- PASS: prefers-reduced-motion menghasilkan durasi transisi ikon 0s. Header tanpa JavaScript tidak sticky, navigasi tetap terlihat.
- PASS: node --check script.js dan tidak ada pageerror dalam rangkaian pengujian.

## Delivery Gate ulang

- Hard Gate PASS: R-02/R-17/R-18/R-36/R-38 tidak menambahkan em dash, klaim, data atau testimoni; R-23 memakai struktur dan kontrol yang diminta pengguna tanpa aset identitas baru. R-03 dibuktikan oleh sembilan lebar dalam dua bahasa dan landscape. R-24/R-26/R-35 dibuktikan oleh klik tiap kontrol di atas. R-25: teks biru/#e9eff7 6.26:1, navy/#e9eff7 12.07:1, navy/#f4f6f8 12.88:1, putih/navy 13.96:1; batas kontrol diperkuat menjadi #75869e agar memenuhi 3:1 pada putih dan #f4f6f8. R-27/R-28 tidak ada data dinamis atau FAQ baru. R-32/R-39 dibuktikan oleh Tab/Enter/Escape, fokus tujuan, outline, native button/link, aria-expanded/controls/current, dan state hover/active. R-33 perubahan langsung di source. R-34 satu tema; R-37 arahan dicatat sebelum edit. R-40 tidak menambah media atau script pihak ketiga dan tidak mengklaim skor performa.
- Purpose-Gate PASS: R-01/R-04/R-06/R-07/R-08/R-09/R-10/R-12/R-13/R-14/R-19/R-22 diperiksa terhadap delta. Shadow hanya pada panel yang berada di atas konten; scrim menjelaskan hierarki; ikon dua garis/silang menunjukkan buka/tutup; transisi singkat memberi umpan balik kontrol. Alasan dicatat di DESIGN.md. Tidak ada gradient, glow, glass, capsule promosi, ikon dekoratif, atau ilustrasi baru.
- Liveliness PASS: ENERGY 1 / RHYTHM 2 / MOTION 1 dipertahankan, hierarki logo/navigasi/kontak jelas, ruang sentuh mobile lebih lapang, aksen biru mengidentifikasi tujuan aktif dan navy menonjolkan kontak. Komposisi isi dan motif editorial produk tetap sesuai arah UDN.
- Craftsmanship & Quality Locks PASS: C-1..C-5 dan R-05/R-11/R-15/R-16/R-20/R-21/R-29/R-30/R-31 diperiksa. Menu punya alasan visual tertulis, kontrol bekerja dalam dua bahasa, radius dibedakan berdasarkan fungsi, warna berasal dari identitas UDN, tanpa perubahan klaim/penawaran atau struktur isi di luar navigasi.

# Favicon dan persiapan Vercel

- PASS: favicon merujuk langsung /assets/udn.svg, sesuai permintaan pemilik; server dist mengembalikan HTTP 200 dan image/svg+xml, serta browser berhasil decode SVG.
- PASS: npm run build selesai pada Node.js 24.11.1 tanpa dependensi tambahan; hanya halaman, CSS, JS, dan aset masuk dist. Perbandingan byte sumber/output cocok untuk seluruh berkas publik. Dokumen proyek dan konfigurasi tidak masuk output publik.
- PASS: vercel.json menetapkan framework null (Other), npm run build, dan dist; field konfigurasi lolos Draft7Validator menggunakan schema resmi Vercel. Pemanggilan jsonschema.validate awal terhenti pada pemeriksaan meta-schema remote, sehingga pengecekan akhir memakai Draft7Validator langsung pada konfigurasi.
- PASS: halaman dist HTTP 200, tombol EN mengganti bahasa, menu mobile membuka, tanpa pageerror. Struktur halaman dan script tidak diubah selain tautan favicon di head; hasil pemeriksaan kontrol sebelumnya tetap berlaku.
- Hard Gate PASS: R-23 memakai SVG lama yang diminta; R-35 output build dijalankan dan dibuka di browser; R-40 favicon SVG tanpa skrip baru. R-02/R-03/R-17/R-18/R-24..R-28/R-32..R-34/R-36..R-39 tetap sesuai laporan navigasi; tidak ada perubahan isi, tata letak, atau kontrol.
- Purpose-Gate PASS: ikon memakai identitas UDN yang ada untuk identifikasi tab; tidak menambahkan teknik visual lain. R-01/R-04/R-06..R-10/R-12..R-14/R-19/R-22 tetap sesuai laporan sebelumnya.
- Liveliness PASS: arah, dials, focal point, aksen, dan motif tetap sama; favicon memperluas identitas UDN ke tab browser.
- Craftsmanship & Quality Locks PASS: C-1..C-5/R-05/R-11/R-15/R-16/R-20/R-21/R-29..R-31 tetap sesuai laporan sebelumnya; build hanya membungkus sumber yang sama sebagai output statis.

Batas: build dan HTTP lokal terverifikasi; belum menjalankan build/deploy pada akun Vercel atau memasang domain/DNS. Tidak ada token atau project ID Vercel ditambahkan. Dokumentasi deployment tersedia di README.md.
