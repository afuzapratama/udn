# UDN

Profil PT Universal Digital Network untuk calon pengguna ekosistem pendidikan dan mitra sekolah.
Arah yang dipertahankan: formal, biru tua dan putih, website utama udn.co.id.

Design Read: profil perusahaan teknologi pendidikan dengan bahasa visual korporat dan susunan editorial.
ENERGY 1 / RHYTHM 2 / MOTION 1.

- Biru tua #132d4b dan putih mempertahankan identitas perusahaan; biru #2056a0 dipakai untuk tautan dan penanda bagian.
- Tema terang untuk membaca; pembuka dan kontak berwarna biru tua membatasi narasi dan menonjolkan ajakan menghubungi perusahaan.
- Segoe UI dan Arial memakai font sistem agar terbaca tanpa unduhan tambahan.
- Wordmark SVG yang sudah ada dipertahankan.
- Pembuka mempertemukan penawaran UDN dengan screenshot asli produk agar hubungan perusahaan dan Kelas Merdeka langsung terlihat.
- Screenshot diperoleh lewat Playwright dari halaman publik kelasmerdeka.online pada 15 November 2026. Screenshot adalah gambar, bukan dashboard interaktif atau bukti audit fitur di balik login.
- Foto Unsplash menggambarkan kegiatan mencatat dan belajar; diberi label foto ilustrasi, tidak mewakili pelanggan atau tim UDN.
- Foto: Green Chameleon, https://unsplash.com/photos/s9CC2SKySJM; asset https://images.unsplash.com/photo-1434030216411-0b793f4b4173.
- Bagian produk memakai daftar definisi untuk menjelaskan fungsi; penawaran memakai dua baris bernomor untuk membedakan lisensi dan penyesuaian.
- Profil, produk, penawaran, identitas perusahaan, dan kontak mengikuti kebutuhan calon pengguna yang ingin memahami siapa pengembangnya dan apa yang ditawarkan.
- Kolom berubah pada 1000px dan 720px; ukuran teks fluid dan konten menentukan tinggi bagian.
- Motion hanya scroll dan perubahan state kontrol; prefers-reduced-motion menonaktifkan smooth scroll.

## Sumber konten

- Fokus pendidikan, hubungan UDN dan Kelas Merdeka, produk yang sudah digunakan, lisensi penggunaan, penyesuaian tampilan/sistem, dan help@udn.co.id: penjelasan pengguna dalam percakapan.
- Lingkup periode ajaran, kelas, absensi, materi, tugas, nilai, P5, file, dan portal siswa/orang tua: halaman publik Kelas Merdeka yang dibuka melalui Playwright.
- Identitas perusahaan, NIB, telepon, dan alamat: konten lama; DESIGN.md sebelumnya mencatat sumbernya sebagai dokumen yang diberikan pengguna. Dokumen tidak diverifikasi ulang dalam perubahan ini.
- Harga Rp300k pada situs contoh tidak dipindahkan sebagai harga lisensi UDN karena cakupan dan masa lisensinya belum ditetapkan pengguna.

## Batas implementasi

Halaman ini adalah profil perusahaan dan sarana menghubungi UDN, tanpa checkout, formulir, analytics, atau integrasi payment gateway.
Tidak menampilkan klaim kerja sama atau persetujuan Xendit.
Harga, masa lisensi, hosting, dukungan, jadwal, ketentuan pengembalian dana, dan rincian pembayaran belum ditetapkan; copy mengarahkan calon pelanggan meminta penawaran.
Tidak membuat kebijakan transaksi yang belum disepakati pemilik usaha.

## Bahasa halaman

- Konten tersedia dalam Bahasa Indonesia dan Inggris; nama produk, badan usaha, NIB, serta alamat resmi dipertahankan.
- Bahasa awal menggunakan preferensi pertama navigator.languages, dengan navigator.language sebagai fallback. Kode id (termasuk kode lama in) memilih Indonesia; bahasa lainnya atau preferensi kosong memilih Inggris. Ini bukan deteksi negara/IP atau parsing User-Agent.
- Pilihan tombol ID/EN mengalahkan deteksi otomatis dan disimpan pada localStorage dengan kunci udn-language. Jika penyimpanan diblokir, pengalih tetap bekerja pada halaman saat ini.
- Tombol native minimum 44px memakai aria-pressed dan label bahasa lengkap untuk pembaca layar; warna aktif mengikuti navy UDN. Kontrol selalu tersedia di header saat JavaScript aktif, termasuk saat menu mobile ditutup.
- html lang, title, meta description, alt, aria-label, subjek email, dan konten halaman ikut berganti. Screenshot asli produk tetap dalam bahasa sumbernya.
- Tanpa JavaScript, konten Indonesia dan tautan navigasi tetap tersedia; pengalih tidak ditampilkan.

## Penyempurnaan navigasi

Design Read: navigasi profil perusahaan pendidikan yang lebih luwes, dengan panel sentuh untuk ponsel dan navigasi ringkas untuk desktop. ENERGY 1 / RHYTHM 2 / MOTION 1 tetap berlaku.

- Header putih tetap terlihat saat scroll agar navigasi dan pilihan bahasa mudah ditemukan. Tanpa JavaScript, header mengikuti alur halaman agar navigasi fallback tidak mendominasi layar kecil.
- Menu berubah menjadi panel vertikal pada 900px, saat deretan teks dua bahasa dan kontrol tidak lagi nyaman dalam satu baris. Layout isi halaman mempertahankan breakpoint sebelumnya.
- Radius panel 16px membedakan permukaan menu dari kontrol 8–12px dan gambar produk 4px. Shadow hanya pada panel terbuka untuk menjelaskan bahwa menu berada di atas isi halaman.
- Scrim meredam isi halaman saat panel terbuka dan memungkinkan penutupan lewat sentuhan di luar. Menu tetap disclosure nonmodal; Tab dapat keluar dan otomatis menutup menu.
- Kontrol Menu/Tutup/Close dengan dua garis CSS yang berubah menjadi silang memberi status buka/tutup; label teks tetap terlihat. Ini ikon fungsi navigasi, bukan ilustrasi atau aset identitas baru.
- Target tautan mobile minimal 60px dan berbentuk daftar vertikal; kontak memakai bidang navy penuh untuk menonjolkan jalur diskusi.
- Tombol ID/EN dikelompokkan dalam satu bidang dengan status aktif kontras, menjaga pilihan bahasa tetap terjangkau saat panel ditutup.
- Tautan bagian aktif diberi aria-current location, latar biru muda, serta garis pendek. Penanda memakai bentuk dan warna agar tidak hanya mengandalkan warna.
- Offset anchor diukur dari tinggi header dengan ResizeObserver agar bagian tujuan tidak tertutup pada pergantian ukuran atau bahasa.
- Escape dan sentuhan luar mengembalikan fokus ke tombol; pemilihan tautan mobile memindahkan fokus ke bagian tujuan. Urutan DOM mengikuti urutan kontrol desktop/mobile.
- Transisi 150–180ms hanya pada warna kontrol dan ikon Menu; prefers-reduced-motion menghapusnya. Tidak ada animasi scroll/reveal baru.

## SEO dasar

Pada 16 November 2026, judul/deskripsi dipertegas menjadi e-learning dan manajemen sekolah tanpa mengubah copy isi atau layout. Canonical, sitemap, dan identitas WebSite memakai https://udn.co.id/. Open Graph/Twitter memakai screenshot Kelas Merdeka yang sudah diminta pemilik, dengan alt yang menjelaskan bahwa gambar adalah contoh produk. Organization menggunakan nama, alamat, email, dan telepon yang sudah ditampilkan. Tidak menambahkan rating, testimoni, harga, atau klaim peringkat. Bahasa tetap satu URL; tidak membuat hreflang fiktif. JSON-LD dan metadata Indonesia tersedia pada HTML mentah; metadata browser mengikuti pilihan bahasa.

## Halaman error

Design Read: halaman pemulihan untuk pengunjung yang membuka URL tidak valid atau mengalami gangguan layanan, dengan identitas UDN yang tenang dan instruksi langsung. ENERGY 1 / RHYTHM 2 / MOTION 1.

- Empat status yang diminta/disepakati: 404, 500, 503, dan 505. Copy menjelaskan kondisi masing-masing tanpa mengklaim penyebab pasti, perbaikan sedang berlangsung, atau waktu pemulihan.
- Kode status besar menjadi penanda konteks; headline menjelaskan keadaan; tombol beranda menjadi tindakan utama, email menjadi jalur bantuan. Pada 5xx, reload adalah tindakan tambahan yang dipicu pengguna, bukan loop otomatis.
- Warna navy/putih/biru, font sistem, dan logo lama mempertahankan hubungan dengan halaman utama. Tidak ada ilustrasi atau aset identitas baru.
- Komposisi satu kolom berubah menjadi dua kolom pada 700px agar kode dan instruksi dapat dibaca bersebelahan. White space memisahkan konteks error dari langkah pemulihan.
- Radius 9px menandai tombol dan 4px menandai blok bantuan; kontrol bahasa memakai gaya kelompok yang sudah ada. Latar netral membedakan kontak tanpa efek glow/shadow.
- Logo, CSS, JavaScript, dan favicon tertanam pada output HTML. Halaman error tidak bergantung pada aset eksternal atau script homepage yang bisa ikut gagal.
- Halaman ID/EN memakai preferensi browser dan kunci pilihan yang sama dengan homepage. Tanpa JavaScript, copy Indonesia, beranda, dan email tetap dapat digunakan; tombol nonaktif disembunyikan.
- Sumber UI berada pada errors/styles.css, errors/script.js, dan template scripts/error-pages.mjs; build melakukan rendering HTML statis, bukan mengubah source UI melalui skrip pengganti string.
- Halaman berstatus noindex dan tidak dimasukkan sitemap. Tidak membuat rewrite semua URL ke homepage.
- Halaman 404 mengikuti kontrak output Vercel. Pemakaian halaman 5xx sebagai error platform bergantung pada fitur Enterprise Vercel; tidak mengklaim tersedia otomatis di paket lain.
