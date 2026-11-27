# Struktur folder

```text
frontend/       Halaman HTML, stylesheet, JavaScript, dan aset.
backend/        Server Go, handler HTTP, model, dan service.
data/           Contoh JSON dan ekspor CSV bersama.
processor-c/    Rencana pemrosesan CSV menggunakan C.
reporting-cobol/ Rencana laporan dari CSV menggunakan COBOL.
docs/           Gambaran proyek, struktur, dan format data.
```

Frontend dan backend berjalan terpisah pada tahap ini. Frontend dibuka melalui server file lokal, sedangkan backend menyediakan API di port 8080 secara default. Saat integrasi dimulai, sepakati kontrak endpoint dan skema data sebelum menghubungkan keduanya.
