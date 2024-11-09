---

# Mizu - Auto Mining & Claim Bot

**Mizu** adalah bot otomatis yang menjalankan proses mining, klaim hasil mining, dan klaim bonus referal pada platform yang terintegrasi dengan aplikasi Telegram Web.

## 📋 Fitur
- **Auto Mining**: Menjalankan proses mining secara otomatis.
- **Auto Claim Mining**: Mengklaim hasil mining secara otomatis.
- **Auto Claim Referral**: Mengklaim bonus dari referal secara otomatis.

## 🚀 Instalasi
1. **Dapatkan Query**:
   - Buka aplikasi Telegram Web.
   - Tekan `F12` untuk membuka Developer Tools dan buka tab **Console**.
   - Paste script berikut untuk mendapatkan query `tgWebAppData` dan salin ke clipboard:
     ```javascript
     let value = sessionStorage.getItem('telegram-apps/launch-params');
     let params = new URLSearchParams(value);
     let tgWebAppData = params.get('tgWebAppData');
     copy(tgWebAppData);
     ```
   
2. **Instal Dependencies**:
   - Pastikan Node.js dan npm sudah terinstal di sistem Anda.
   - Jalankan perintah berikut untuk menginstal dependencies yang dibutuhkan:
     ```bash
     npm install axios chalk@2
     ```

3. **Jalankan Mizu**:
   - Simpan query `tgWebAppData` ke dalam file `hash.txt`.
   - Kemudian jalankan script berikut secara berurutan:
     ```bash
     node getid.js
     node index.js
     ```

## ⚠️ Peringatan
- **Bug dan Error**: Karena ini adalah script pertama dari author, kemungkinan terdapat bug atau error. Masalah mungkin juga disebabkan oleh server eksternal.
- **Resiko Penggunaan**: Semua resiko penggunaan script ini ditanggung oleh pengguna. Harap gunakan dengan bijak.

## 🤝 Kontribusi
Dukung pengembangan **Mizu** dengan mengikuti akun author untuk update dan script tambahan!

--- 
