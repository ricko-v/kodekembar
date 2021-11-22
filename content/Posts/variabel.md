---
title: Variabel
description: Memahami apa itu variabel pada Javascript.
thumb: variabel.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

# Pengertian Variabel
Suatu saat nanti, pasti website kita akan memerlukan sebuah informasi. Contoh:
1. Toko Online - Pasti akan membutuhkan informasi mengenai nama barang, harga barang, dan lain-lain.

2. Portal Berita - Pasti akan membutuhkan informasi mengenai judul berita, isi berita, dan lain-lain.

**Variabel** disini berfungsi sebagai tempat/wadah untuk menyimpan sebuah data/informasi. Jika diibaratkan, variabel adalah suatu wadah kosong yang nantinya akan kita isi dengan data.

Sama seperti di bahasa pemrograman lainnya, untuk membuat sebuah variabel, kita harus mendeklarasikan nama variabel terlebih dahulu. Di javascript, kita dapat menggunakan kata kunci **let** untuk membuat sebuah variabel.

Contoh, kita akan membuat variabel yang bernama "**pesan**".

```js
let pesan;
```

Kita sudah berhasil membuat sebuah variabel, tetapi variabel diatas masih kosong (belum terisi data). Untuk mengisikan data pada variabel, kita dapat menggunakan tanda "**=**" setelah nama variabel.

```js
let pesan = "Halo Semua";
```

Sekarang, variabel **pesan** sudah memiliki data string "Halo Semua". Kita dapat mengakses variabel tersebut dengan cara memanggil nama variabel tersebut.

Contoh:

```js
let pesan = "Halo Semua";

alert(pesan);
```

<button class='lihat' onclick='alert("Halo Semua")'>lihat</button>

Jika sebelumnya kita mengisikan data ke dalam variabel secara langsung, kita juga dapat mengisikan data ke dalam variabel dibaris yang berbeda.

Contoh:

```js
let pesan;
pesan = "Halo Semua";

alert(pesan);
```

<button class='lihat' onclick='alert("Halo Semua")'>lihat</button>

Jika kita ingin membuat beberapa variabel secara sekaligus, kita dapat mendeklarasikannya dalam satu baris saja.

Contoh:

```js
let nama = 'Ricko', umur = 17;
```

Cara diatas memang terlihat simple, tetapi agar lebih mudah dibaca, maka deklarasikan setiap variabel dalam baris yang berbeda.

```js
let nama = 'Ricko';
let umur = 17;
```

Didalam javascript, kita juga dapat menggunakan kata kunci **var** untuk mendeklarasikan sebuah variabel.

```js
var pesan = 'Halo Semua';
```

Lalu apa perbedaan keduanya? untuk sekarang kita tidak usah bingung mau menggunakan **var** ataupun **let**, karena keduanya sama-sama bisa digunakan.

# Aturan Penamaan
Ada dua peraturan penamaan variabel agar tidak terjadi error.
1. Nama variabel hanya boleh berisi **huruf**, **angka**, atau simbol **$** dan **_**.

2. Karakter pertama pada variabel tidak boleh berupa angka.

Contoh penamaan variabel yang benar:

```js
let pemain1;
let pemain_1;
let namaPemain;
```

Ketika nama variabel memiliki lebih dari satu kata, biasanya orang akan menggunakan huruf kapital pada setiap kata, kecuali kata pertama.

Contoh:

```js
let totalHargaBarang;
```

Tanda dolar '**$**' dan garis bawah '**_**' juga dapat digunakan untuk penamaan variiabel. Simbol tersebut adalah simbol biasa, seperti huruf, tanpa arti khusus.

```js
let $ = 1;
let _ = 2;

alert($ + _);
```

<button class='lihat' onclick='alert("Halo Semua")'>lihat</button>

Jika diatas adalah contoh penamaan variabel yang benar, maka berikut adalah contoh penamaan variabel yang salah.

```js
let 1pemain;
let pemain-1;
```

## Catatan
**1. Case Sensitive**

Javascript adalah bahasa pemrograman yang *case-sensitive*, artinya huruf kecil dan huruf kapital memiliki arti yang berbeda. Hal ini berpengaruh dalam penamaan variabel. Misal saja variabel **apel** dan **Apel** adalah dua variabel yang berbeda.

Kita juga dapat memberi nama variabel dengan huruf latin, walaupun kita tidak akan memakainya nanti.

```js
let имя = '...';
let 我 = '...';
```

**2. Kata yang tidak bisa dipakai**

Ada daftar <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords' target='blank'>kata-kata</a> yang tidak dapat digunakan sebagai nama variabel, karena sudah digunakan oleh bahasa javascript itu sendiri.

Misalnya: **let**, **class**, **return**, dan **function**.

```js
let let = 5; // tidak dapat menset nama "let", error!
let return = 5; // tidak dapat juga menset nama "return", error!
``` 

**3. Menggunakan 'use strict'**
Biasanya, kita perlu mendeklarasikan variabel sebelum menggunakannya. Tetapi di masa lalu, secara teknis dimungkinkan untuk membuat variabel hanya dengan menetapkan nilai tanpa menggunakan let. Ini masih berfungsi sampai sekarang, jika kita tidak menggunakan javascript dengan mode strict untuk menjaga kompatibilitas dengan javascript yang terdahulu.

Contoh tidak menggunakan 'use strict'

```js
num = 5;

alert(num);
```

<button class='lihat' onclick='num=5; alert(num);'>lihat</button>

Contoh menggunakan 'use strict'

```js
"use strict";

num = 5;
```

kode diatas akan menyebabkan error, karena "num" tidak terdefinisi.

# Constant
Kita dapat membuat variabel yang konstan atau tidak dapat dirubah. Untuk membuatnya, kita dapat menggunakan kata kunci **const**.

```js
const website = 'KodeKembar';
```

Jika kita merubah data pada variabel konstan, maka akan menyebabkan error.

```js
const website = 'KodeKembar';
website = 'KodeKode';
```

Ketika kita yakin bahwa suatu data variabel tidak akan pernah berubah, kita dapat mendeklarasikannya dengan **const**.

# Kesimpulan
Kita dapat mendeklarasikan variabel untuk menyimpan data dengan menggunakan kata kunci **var**, **let**, atau **const**.

* let – adalah deklarasi variabel modern.

* var – adalah deklarasi variabel jadul.

* const – seperti let, tetapi nilai variabel tidak dapat diubah.

Variabel harus diberi nama dengan cara yang memungkinkan kita untuk dengan mudah memahami apa yang ada di dalamnya.

Referensi:

* <a href='https://javascript.info/variables' target='blank'>javascript.info</a>