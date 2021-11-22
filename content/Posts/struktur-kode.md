---
title: Struktur Kode
description: Memahami bagaimana struktur kode di javascript.
thumb: struktur-kode.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Halo teman-teman semua. Kali ini kita akan belajar mengenai struktur kode javascript.

# Statement (Pernyataan)
Statements (Pernyataan) adalah konstruksi sintaks dan perintah yang melakukan tindakan. Kita telah melihat pernyataan, ```alert('Hello World!')```, yang menampilkan pesan “Hello World!” pada tutorial sebelumnya. Kita dapat memiliki pernyataan sebanyak yang kita inginkan dalam kode kita. Pernyataan dapat dipisahkan dengan titik koma. Misalnya, di sini kita akan membagi "Hello World" menjadi dua pop-up alert:

```js
alert('Hello'); alert('World!');
```

<button class='lihat' onclick='alert("Hello"); alert("World!");'>lihat</button>

Biasanya, pernyataan seperti diatas ditulis pada baris terpisah, agar membuat kode lebih mudah dibaca:

```js
alert('Hello');
alert('World!');
```

<button class='lihat' onclick='alert("Hello"); alert("World!");'>lihat</button>

# Semicolon (Titik Koma)
Di javascript, titik koma dapat dihilangkan dalam banyak kasus ketika ada kode yang berbeda baris.

Contoh:

```js
alert('Hello')
alert('World!')
```

<button class='lihat' onclick='alert("Hello") 
alert("World!");'>lihat</button>

Dari kode diatas, javaScript menafsirkan baris baru sebagai titik koma "implisit". Hal ini disebut penyisipan titik koma otomatis.

**Dalam kebanyakan kasus, baris baru menyiratkan titik koma. Tetapi "dalam banyak kasus juga" tidak berarti "selalu"!**

Ada kasus ketika baris baru tidak berarti titik koma. Sebagai contoh:

```js
alert(3 +
1
+ 2);
```

<button class='lihat' onclick="alert(3 + 1 + 2);">lihat</button>

Kode diatas menghasilkan pop-up berupa angka 6, karena JavaScript **tidak menyisipkan titik koma di sini**. Secara intuitif jelas, bahwa jika baris diakhiri dengan plus **"+"**, maka itu adalah **"ekspresi tidak lengkap"**, jadi titik koma di sana akan bernilai salah (mengakibatkan error).

**Tetapi ada situasi di mana JavaScript "gagal" untuk mengasumsikan titik koma di mana itu benar-benar dibutuhkan.**

Kesalahan yang terjadi dalam kasus seperti itu cukup sulit untuk ditemukan dan diperbaiki.

Contoh:

```js
alert("Hello");

[1, 2].forEach(alert);
```

<button class='lihat' onclick="alert('Hello');[1, 2].forEach(alert);">lihat</button>

Teman-teman tidak perlu memikirkan arti tanda kurung [] dan forEach terlebih dahulu. Kita akan mempelajarinya nanti. Untuk saat ini, teman-teman ingat saja apa hasil dari menjalankan kode diatas: **Halo, lalu 1, lalu 2**

Sekarang mari kita hilangkan titik koma setelah alert (peringatan):

```js
alert("Hello")

[1, 2].forEach(alert);
```

<button class='lihat' onclick="alert('Hello') [1, 2].forEach(alert);">lihat</button>

Jika dilihat, perbedaannya dibandingkan dengan kode di atas sebelumnya hanya satu karakter: **titik koma di akhir baris pertama hilang.**

Jika kita menjalankan kode ini, hanya kata **Hello** pertama yang ditampilkan (dan ada kesalahan, teman-teman mungkin perlu membuka konsol browser untuk melihatnya). dan tidak ada angka yang ditampilkan seperti kode sebelumnya.

Hal ini disebabkan karena JavaScript tidak menganggap **titik koma sebelum tanda kurung siku [...]**. Jadi, kode pada contoh terakhir diperlakukan sebagai satu pernyataan.

Begini cara mesin melihatnya:

```js
alert("Hello")[1, 2].forEach(alert);
```

Terlihat aneh, bukan? Penggabungan seperti itu dalam kasus ini salah. Kita perlu menempatkan titik koma setelah alert baris pertama, agar kode berfungsi dengan benar.

Hal ini dapat terjadi dalam situasi lain juga.

## Catatan
Sebaiknya kita letakkan titik koma di antara pernyataan meskipun dipisahkan oleh baris baru. Aturan ini banyak diapakai oleh kebanyakan orang.

# Komentar
Seiring berjalannya waktu, program kita menjadi lebih banyak dan lebih kompleks. Jadi terkadang perlu untuk menambahkan komentar yang menjelaskan apa yang dilakukan oleh kode dan mengapa.

Komentar dapat diletakkan di sembarang tempat. Mereka tidak memengaruhi eksekusinya karena mesin akan mengabaikannya begitu saja.

**Komentar satu baris dimulai dengan dua karakter garis miring //.**

```js
// Komentar ini menempati baris sendiri
alert('Hello');

alert('World'); // Komentar ini mengikuti pernyataan
```

<button class='lihat' onclick="alert('Hello'); alert('World')">lihat</button>

**Komentar multiline (Banyak Baris) dimulai dengan garis miring dan tanda bintang / dan diakhiri dengan tanda bintang dan garis miring /.**

```js
/* Ini komentar
ini juga komentar
*/
alert('Hello');
alert('World');
```

<button class='lihat' onclick="alert('Hello'); alert('World')">lihat</button>

Isi komentar akan diabaikan oleh mesin, jadi jika kita memasukkan kode di dalam **/* … */**, itu tidak akan dijalankan.

Terkadang, sistem komentar berguna untuk menonaktifkan sementara bagian dari kode javascript:

```js
/* Menonaktifkan Kode
alert('Hello');
*/
alert('World');
```

<button class='lihat' onclick="alert('World')">lihat</button>

Jadi, jangan ragu untuk mengomentari kode javascript.

Komentar meningkatkan jejak kode secara keseluruhan, tetapi itu tidak menjadi masalah sama sekali. Ada banyak alat yang mengkompres kode sebelum dipublikasikan ke server produksi. Alat ini menghapus komentar, sehingga tidak muncul di skrip yang berfungsi. Oleh karena itu, komentar tidak memiliki efek negatif pada produksi sama sekali.

Referensi:
* <a href='https://javascript.info/structure' target='blank'>javascript.info</a>