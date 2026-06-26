# ShopCatalog Ultra - Mobile API Consumer App

Aplikasi mobile berbasis React Native (Expo) yang mengonsumsi REST API dari FakeStore API untuk menampilkan katalog produk e-commerce secara real-time. Aplikasi ini dibangun dengan penanganan state yang aman, performa rendering yang optimal, serta antarmuka yang interaktif.

## 🚀 Tech Stack
- **Framework:** React Native (Expo SDK 54)
- **HTTP Client:** Axios
- **Language:** JavaScript (ES6+)

## ✨ Fitur Aplikasi

### 🟢 Level 1 - Fitur Wajib (Core)
- [x] **Async/Await Fetch:** Pengambilan data produk menggunakan Axios secara asinkronus dari `https://fakestoreapi.com/products`.
- [x] **3-State UI:** Penanganan kondisi antarmuka teruji saat *Loading*, *Error* (koneksi terputus), dan *Success*.
- [x] **Robust Error Handling:** Menggunakan struktur `try/catch/finally` untuk memastikan indikator loading mati dengan aman dalam kondisi apa pun.
- [x] **Optimized Rendering:** Menggunakan `FlatList` dengan `keyExtractor` yang unik untuk performa scroll yang lancar.
- [x] **Retry Button:** Tombol "Coba Lagi" yang berfungsi memanggil ulang fungsi API secara instan saat koneksi gagal.
- [x] **Multi-field Card:** Kartu produk menampilkan 4 field utama secara rapi: Gambar produk (`Image` dengan dimensi eksplisit), Judul, Harga, dan Rating ulasan.

### 🟡 Level 2 - Fitur Pengembangan (Borong Semua Fitur)
- [x] **🔄 Pull-to-Refresh:** Menarik layar ke bawah untuk memperbarui data produk langsung dari server.
- [x] **🔎 Search / Filter (Client-Side):** Kolom pencarian dinamis untuk menyaring nama produk berdasarkan judul secara *real-time*.
- [x] **🗂️ Filter Kategori:** Baris *chip* kategori dinamis yang mengekstrak kategori unik langsung dari API untuk penyaringan data yang presisi.
- [x] **📄 Layar Detail:** Mengetuk kartu produk akan membuka modal *pop-up bottom sheet* bawaan yang menampilkan deskripsi produk yang lengkap dan rapi tanpa memerlukan library navigasi eksternal.
- [x] **🎨 Empty State UI:** Tampilan ramah informasi yang muncul otomatis ketika hasil filter kategori atau kata kunci pencarian produk tidak ditemukan.

---

## 📸 Dokumentasi Aplikasi (Screenshots)

| Tampilan Memuat (Loading) | Sukses (Katalog Produk) | Layar Detail (Modal) | Produk Tidak Ditemukan | Gangguan Koneksi (Error) | Produk Ditemukan  |
| :---: | :---: | :---: | :---: | :---: | :---: |
| <img width="1080" height="2412" alt="Screenshot_2026-06-26-10-00-45-76_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/5ab8697b-ba6e-4b40-913b-04253ea8aecd" /> | <img width="1080" height="8253" alt="Screenshot_2026-06-26-10-01-43-03 jpg" src="https://github.com/user-attachments/assets/8cca8d39-4741-457c-b836-4f28a1e20cd0" /> | <img width="1080" height="2412" alt="Screenshot_2026-06-26-10-01-57-93_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/ef4c272c-4ec2-4b64-8300-8c6ec9a36cc1" /> | <img width="1080" height="2412" alt="Screenshot_2026-06-26-10-02-39-20_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/4bc781e1-9fe9-430f-a86e-b88da3e01e7b" /> | <img width="1080" height="2412" alt="Screenshot_2026-06-26-10-03-02-05_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/967116e3-313e-4932-b700-606d3b5c146e" /> | <img width="412" height="796" alt="image" src="https://github.com/user-attachments/assets/a6114a21-b0a9-4305-ba22-536bff50aa6f" /> |

---

## 📦 Cara Menjalankan Project Secara Lokal

1. Clone repositori ini:
   ```bash
   git clone [https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git](https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git)
   cd shop-catalog
