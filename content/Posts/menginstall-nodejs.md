---
title: Menginstall Nodejs
description: Melakukan instalasi Nodejs di sistem operasi Windows.
thumb: menginstall-nodejs.png
category: nodejs
tag: ['nodejs', 'cli']
penulis: ricko-v
---

Halo teman-teman semua! Selamat datang di seri belajar Nodejs. Di seri ini, kita akan belajar mengenai javascript yang berjalan di sisi server. Sebelum memulai belajar, kita akan melakukan instalasi Nodejs terlebih dahulu.

# Mendownload Nodejs Installer
Langkah pertama yang harus dilakukan adalah mengunjungi website <a href='https://nodejs.org/en/download/' target='blank'>https://nodejs.org/en/download/</a> dan melakukan download file installernya disana. Didalam Nodejs installernya sudah terdapat Node Package Manager (<a href='https://id.wikipedia.org/wiki/Npm_(perangkat_lunak)'>NPM</a>).

<img src='/Post_Img/img_post/nodejs-website.png'>

Karena yang kita bahas kali ini adalah menginstall Nodejs di windows, maka kita akan memilih Windows Installer (.msi) dan pilih antara 32-bit atau 64-bit, sesuaikan dengan spek pc/laptop masing-masing).

# Melakukan Instalasi
Apabila download filenya sudah selesai, maka langkah selanjutnya adalah melakukan instalasi.

Berikut langkah-langkah instalasinya:

1. Buka file yang sudah di download tadi.

2. Sistem akan menanyakan apakah kita ingin menjalankan program - Klik **Run**.

3. Selanjutnya akan ada Node.js Setup Wizard - Klik **Next**.

4. Selanjutnya akan ada pemberitahuan mengenai lisensi dan persyaratan - **Centang** dan Klik **Next**.

5. Selanjutnya akan ada pertanyaan mengenai lokasi penginstalan. Silahkan tentukan sendiri lokasinya - lalu klik **Next**.

6. Selanjutnya akan ada pertanyaan mengenai kustomisasi - Klik **Next**.

7. Nodejs sudah siap di install - Klik **Install** dan tunggu sampai penginstalannya selesai.

8. Jika sudah selesai melakukan penginstallan - Klik **finish**.

# Mengecek Versi
Setelah selesai menginstall, mari kita coba untuk mengecek versi dari **Nodejs** dan **NPM**. Langkah pertama yang harus kita dilakukan adalah membuka **CMD**.

Untuk mengecek versi dari Nodejs, kita dapat menggunakan perintah:

```
node -v
```

dan untuk mengecek versi dari NPM, kita dapat menggunakan perintah:

```
npm -v
```

<img src='/Post_Img/img_post/cek-install-nodejs.png'>

Jika muncul versi dari Nodejs dan NPM seperti gambar diatas, selamat Nodejs sudah siap digunakan.