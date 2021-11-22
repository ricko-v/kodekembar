---
title: Apa Itu Javascript
description: Mari berkenalan dengan javascript terlebih dahulu
thumb: apa-itu-javascript.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Halo teman-teman semua. Sebelum kita mulai belajar bahasa Javascript, mari kita terlebih dahulu mencari tahu informasi mengenai seputar Javascript. Dimulai dari **Sejarah Javascript**, **Apa itu Javascript**, dan **Fungsi Javascript**

# Sejarah Javascript
Dilansir dari <a href='https://id.wikipedia.org/wiki/JavaScript'>wikipedia</a>, javascript pertama kali dikembangkan oleh <a href='https://id.wikipedia.org/wiki/Brendan_Eich'>Brendan Eich</a> dari Netscape di bawah nama *Mocha*, yang nantinya berubah nama menjadi *LiveScript*, dan akhirnya berubah lagi menjadi *JavaScript*. Alasan berubah menjadi JavaScript adalah untuk menargetkan *audience*/pendengar yang kebanyakan pada saat itu adalah programmer java. Tentu saja, java dan javascript adalah dua bahasa yang berbeda, meskipun ada kesamaan pada namanya. Seiring perkembangannya, JavaScript menjadi bahasa yang sepenuhnya independen dengan spesifikasinya sendiri yang disebut <a href='https://en.wikipedia.org/wiki/ECMAScript'>ECMAScript</a>.

# Apa itu Javascript?
**JavaScript** adalah bahasa pemrograman yang awalnya dibuat untuk membuat halaman website menjadi lebih interaktif (memunculkan popup, menjalankan fungsi ketika mengklik sebuah button/tombol, membuat animasi, dan lain-lain). Seiring perkembangannya, JavaScript dapat dijalankan tidak hanya di browser, tetapi juga dapat dijalankan di server, atau sebenarnya di perangkat apa pun yang memiliki program khusus yang disebut <a href='https://en.wikipedia.org/wiki/JavaScript_engine'>JavaScript Engine</a>.

# Fungsi Javascript
Pada masa sekarang JavaScript tidak hanya berjalan di browser saja, tetapi dapat juga berjalan di server.
JavaScript yang berjalan di browser dapat melakukan segala hal yang berkaitan dengan manipulasi halaman web, interaksi dengan pengguna, dan server web.

Misalnya:

* Menyisipkan tag HTML baru ke halaman, mengubah konten yang ada, mengubah style/gaya.

* Bereaksi terhadap tindakan pengguna, seperti menjalankan fungsi ketika pengguna mengkilk tombol.

* Kirim permintaan melalui jaringan ke server jarak jauh.

* Mendapatkan dan mengatur cookie, ajukan pertanyaan kepada pengunjung, tampilkan pesan.

* Ingat data di sisi klien ("penyimpanan lokal").

Kemampuan JavaScript di browser dibatasi demi keamanan pengguna. Tujuannya adalah untuk mencegah halaman web jahat mengakses informasi pribadi atau merusak data pengguna.

Misalnya:

* JavaScript pada halaman web tidak boleh membaca/menulis file sembarang pada hard disk, menyalinnya, atau menjalankan program. Itu tidak memiliki akses langsung ke fungsi OS.

* Browser modern mengizinkannya bekerja dengan file, tetapi aksesnya terbatas dan hanya diberikan jika pengguna melakukan tindakan tertentu, seperti "drag and drop" file ke jendela browser atau memilihnya melalui tag ``` <input> ```.

* Ada beberapa cara untuk berinteraksi dengan kamera/mikrofon dan perangkat lain, tetapi mereka memerlukan izin eksplisit dari pengguna. Jadi halaman yang mendukung JavaScript mungkin tidak secara diam-diam mengaktifkan kamera web, mengamati lingkungan sekitar, dan mengirim informasi ke server.

* Tab/jendela yang berbeda umumnya tidak saling mengenal. Terkadang mereka melakukannya, misalnya ketika satu jendela menggunakan JavaScript untuk membuka jendela lainnya. Tetapi bahkan dalam kasus ini, JavaScript dari satu halaman mungkin tidak mengakses halaman lain jika berasal dari situs yang berbeda (dari domain, protokol, atau port yang berbeda).

* Ini disebut “Kebijakan Asal yang Sama”. Untuk mengatasinya, kedua halaman harus menyetujui pertukaran data dan berisi kode JavaScript khusus yang menanganinya. Kami akan membahasnya dalam tutorial.

* Batasan ini, sekali lagi, untuk keselamatan pengguna. Halaman dari http://website1.com yang telah dibuka pengguna tidak boleh mengakses tab browser lain dengan URL http://website2.com dan mencuri informasi dari sana.

* JavaScript dapat dengan mudah berkomunikasi melalui internet ke server tempat halaman saat ini berasal. Namun kemampuannya untuk menerima data dari situs/domain lain akan lumpuh. Meskipun memungkinkan, ini memerlukan persetujuan eksplisit (dinyatakan dalam header HTTP) dari sisi jarak jauh. Sekali lagi, itu adalah batasan keamanan.

# Apa Selanjutnya?
setelah berkenalan dan mengetahui tentang itu javascript, selanjutnya kita akan mulai belajar membuat program sederhana menggunakan bahasa javascript di browser.

Referensi:
* <a href='https://wikipedia.com'>Wikipedia</a>
* <a href='https://javascript.info'>Javascript.Info</a>