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

> *Catatan untuk Mahasiswa: Silakan ambil screenshot dari HP-mu melalui Expo Go, lalu masukkan gambarnya ke folder project, panggil di sini, atau hapus teks penanda ini.*

1. **Kondisi Loading:** `[<img width="1080" height="2412" alt="Screenshot_2026-06-26-10-00-45-76_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/70b3c774-a850-451a-a917-f5b5375ce075" />
]`
2. **Kondisi Sukses (Katalog):** `[Masukkan Link / File Gambar Katalog di sini]`
3. **Kondisi Layar Detail (Modal):** `[<img width="1080" height="2412" alt="Screenshot_2026-06-26-10-01-57-93_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/1159590b-d5c1-427c-ad40-5d583c93f992" />
]`
4. **Kondisi Empty State (Tidak Ketemu):** `[<img width="1080" height="2412" alt="Screenshot_2026-06-26-10-02-39-20_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/8d99cac2-b6c3-4c78-9e94-4f87ad2cd799" />
]`
5. **Kondisi Error (Offline):** `[<img width="1080" height="2412" alt="Screenshot_2026-06-26-10-03-02-05_f73b71075b1de7323614b647fe394240 jpg" src="https://github.com/user-attachments/assets/09837ce8-885b-4c1a-a45b-a8213d99565c" />
]`

---

## 📦 Cara Menjalankan Project Secara Lokal

1. Clone repositori ini:
   ```bash
   git clone [https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git](https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git)
   cd shop-catalog
