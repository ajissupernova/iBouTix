
# iBouTix

iBouTix adalah prototype platform web untuk menemukan acara musik dan hiburan serta mencoba alur pemesanan tiket. Repository ini menjadi fondasi proyek akademik lintas bahasa untuk tim beranggotakan enam orang.

## Tujuan tahap ini

- Menyediakan halaman awal pengguna dan admin dengan HTML, CSS, dan JavaScript.
- Menyiapkan API awal menggunakan Go standard library.
- Menyediakan contoh struktur JSON dan ekspor CSV.
- Menjaga struktur sederhana agar pekerjaan dapat dibagi dan dikembangkan bersama.

## Teknologi

HTML, CSS, JavaScript, Go (`net/http`), JSON, CSV. C dan COBOL baru memiliki direktori rencana untuk tahap berikutnya. Tidak ada framework frontend atau database eksternal.

## Struktur

```text
frontend/       Landing, login, register, dashboard user/admin, CSS dan JS
backend/        Server Go, handlers, models, services
data/           users, events, tickets, transactions JSON dan exports CSV
processor-c/    Rencana pemrosesan data menggunakan C
reporting-cobol/ Rencana pelaporan menggunakan COBOL
docs/           Gambaran, struktur folder, format data
```

## Menjalankan frontend

Dari root repository, jalankan server statis:

```sh
python -m http.server 5500 --directory frontend
```

Buka `http://localhost:5500`. Alternatifnya, buka `frontend/index.html` langsung, tetapi server lokal lebih mendekati pola pemakaian nanti.

## Menjalankan backend

Dari root repository:

```sh
cd backend
go run .
```

Server berjalan di port `8080`. Untuk mengganti port, set environment variable `PORT`. Coba endpoint `http://localhost:8080/api/health` dan `http://localhost:8080/api/events`.

## Status pengembangan

First step selesai sebagai prototype visual dan kerangka API. Data event API dibaca dari `data/events.json`. Login dan register hanya memvalidasi input di browser dan tidak menyimpan akun.

## Belum diimplementasikan

- Autentikasi, otorisasi, dan penyimpanan akun.
- Checkout, pembayaran, pemesanan nyata, dan CRUD admin.
- Penyimpanan JSON yang aman untuk penulisan bersamaan.
- Integrasi C/COBOL, ekspor dinamis, dan laporan operasional.
- API selain health check dan pembacaan daftar event.

Data transaksi dan angka dashboard adalah data simulasi. Jangan pakai sebagai data penjualan nyata.

Lihat `docs/project-overview.md`, `docs/folder-structure.md`, dan `docs/data-format.md` untuk detail awal.

