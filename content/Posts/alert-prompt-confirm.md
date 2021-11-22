---
title: alert, prompt, confirm
description: Membuat website yang dapat berinteraksi dengan pengunjung.
thumb: interaksi-js.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Karena kita akan menggunakan browser sebagai lingkungan demo kita, mari kita lihat beberapa fungsi untuk berinteraksi dengan pengguna. Kita dapat menggunakan function **alert**, **prompt** dan **confirm**.

# alert
Jika diperhatikan, kita sudah memakai function alert di tutorial-tutorial sebelumnya. Function ini akan menampilkan pesan dan menunggu pengguna untuk menekan "OK".

contoh:

```js
alert('Halo');
```

<button class='lihat' onClick='alert("Halo");'>lihat</button>

Jendela mini dengan pesan disebut jendela modal. Kata **"modal"** berarti pengunjung tidak dapat berinteraksi dengan sisa halaman, seperti menekan tombol lain, dll, sampai mereka menekan "OK".

# prompt
prompt adalah pop-up yang menunjukkan jendela modal dengan pesan teks, kolom input untuk pengunjung, dan tombol OK/Batal. Artinya, disini pengunjung dapat mengetik sesuatu di kolom input prompt dan menekan OK. Kemudian kita mendapatkan teks itu di hasilnya. Atau mereka dapat membatalkan input dengan menekan Cancel atau menekan tombol Esc, maka kita mendapatkan null sebagai hasilnya.

Contoh penggunaan prompt:

```js
let nama = prompt('Siapa namamu?');

alert(`Selamat datang ${nama}`);
```

<button class='lihat' onClick="let nama = prompt('Siapa namamu?');alert(`Selamat datang ${nama}`);">lihat</button>

# Confirm
Confirm berfungsi untuk menampilkan jendela modal dengan pertanyaan dan dua tombol: OK dan Batal.

Hasilnya akan bernilai **true** jika OK ditekan dan akan bernilai **false** jika Cancel/Batal ditekan.

```js
let cek = confirm('Apakah kamu semangat?');

alert(cek); //akan menampilkan "true" jika Ok ditekan.
```

# Kesimpulan
Kita sudah mengetahui 3 function yang digunakan untuk berinteraksi dengan pengunjung website kita.

* **alert** untuk menampilkan pesan.

* **prompt** untuk menampilkan pesan yang meminta pengunjung untuk memasukkan teks. Hal ini akan mengembalikan teks atau, jika tombol Batal atau Esc diklik, maka mengmbalikan null.

* **confirm** untuk menampilkan pesan dan menunggu pengguna menekan "OK" atau "Batal". Hal ini akan mengembalikan **true** untuk OK dan **false** untuk Cancel/Esc.

Semua metode diatas akan menampilkan modal. modal akan menjeda eksekusi skrip dan tidak mengizinkan pengunjung untuk berinteraksi dengan sisa halaman hingga modal ditutup.

Ada dua batasan yang dimiliki oleh semua metode di atas:

1. Lokasi munculnya modal ditentukan oleh browser. Biasanya, itu ada di tengah.

2. Kita tidak dapat mengubah style dari modal tersebut.

Referensi:

* <a href='https://javascript.info/alert-prompt-confirm'>javascript.info</a>