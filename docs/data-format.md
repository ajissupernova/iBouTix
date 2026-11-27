# Format data prototype

Seluruh berkas dalam `data/` adalah contoh. ID berformat string agar tetap mudah dibaca saat dibagikan sebagai JSON atau CSV. Harga disimpan sebagai integer rupiah, bukan angka desimal.

## Relasi

- `users.json`: `id` menjadi referensi `transactions[].user_id`; role pendaftaran publik adalah `user`.
- `events.json`: `id` mengidentifikasi acara.
- `tickets.json`: `event_id` menghubungkan kategori tiket ke acara.
- `transactions.json`: `user_id` mengarah ke user. Setiap `items[]` menyimpan `ticket_id`, kuantitas, dan harga saat simulasi transaksi dibuat. `total` adalah jumlah kuantitas dikali harga satuan.

Tanggal event memakai `YYYY-MM-DD`. Waktu transaksi memakai ISO 8601 dengan offset zona waktu. Status pada contoh transaksi adalah `success`.

## CSV ekspor

`data/exports/transactions.csv` memakai satu baris per item transaksi dengan header:

```csv
transaction_id,user_id,created_at,status,ticket_id,quantity,unit_price,total
```

Nilai `total` diulang di setiap baris item transaksi agar mudah dibaca alat tabular; untuk agregasi, jumlah transaksi sebaiknya dihitung satu kali per `transaction_id`.

## Catatan

Data contoh saling terhubung tetapi tidak menggambarkan penjualan nyata. Jangan gunakan sebagai laporan operasional. Validasi integritas referensi dan aturan penulisan file baru akan ditambahkan saat tahap CRUD dimulai.
