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

1. **Kondisi Loading:** `[<img width="447" height="447" alt="image" src="https://github.com/user-attachments/assets/d5f5232e-1722-42ed-835b-b5165e1125d2" />
]`
2. **Kondisi Sukses (Katalog):** `[Masukkan Link / File Gambar Katalog di sini]`
3. **Kondisi Layar Detail (Modal):** `[Masukkan Link / File Gambar Modal Detail di sini]`
4. **Kondisi Empty State (Tidak Ketemu):** `[Masukkan Link / File Gambar Empty State di sini]`
5. **Kondisi Error (Offline):** `[Masukkan Link / File Gambar Error di sini]`

---

## 📦 Cara Menjalankan Project Secara Lokal

1. Clone repositori ini:
   ```bash
   git clone [https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git](https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git)
   cd shop-catalog
