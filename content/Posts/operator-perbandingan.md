---
title: Operator Perbandingan
description: Memahami operator perbandingan di Javascript.
thumb: operator-perbandingan.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

# Perbandingan (Comparison)
Di sekolah, kita sudah diajarkan mengenai perbandingan di dalam matematika. Misalnya 5 > 3, itu dibaca 5 lebih besar daripada 3.

Di Javascript, ada beberapa operator perbandingan yang dapat digunakan:

1. Lebih kecil dari, lebih besar dari: **a < b** dan **a > b**.

2. Lebih kecil dari sama dengan, lebih besar dari sama dengan: **a <= b** dan **a >= b**.

3. Sama dengan: **a == b**, perhatikan! Jika tanda persamaannya ganda (**==**) itu berarti mengetes persamaan, sedangkan jika tanda persamaannya satu (**=**) berarti penugasan. Contoh: **a = b**.

4. Tidak sama dengan: Dalam matematika notasinya adalah **&#8800;** , tetapi dalam JavaScript ditulis sebagai **!=**. Contoh: **a != b**.

Kali ini, kita akan membahas lebih lanjut mengenai operator perbandingan di Javascript.

# Hasilnya Boolean
Semua operator perbandingan di Javascript akan menghasilkan nilai Boolean:

* **true**: jika perbandingannya benar.
* **false**: jika perbandingannya salah.

Contoh:

```js
alert( 10 > 5); // akan menghasilkan true, karena angka 10 lebih besar dari angka 5.
alert( 10 < 5); // akan menghasilkan false, karena angka 10 itu tidak lebih kecil dari angka 5.

// Bisa juga diletakkan didalam variabel terlebih dahulu.
let cek = 10 != 5; // akan menghasilkan true, karena memang angka 10 tidak sama dengan angka 5.
alert(cek);
```

<button class='lihat' onClick='alert( 10 > 5); alert( 10 < 5); let cek = 10 != 5; alert(cek);'>lihat</button>

# Perbandingan di String
Di Javascript, kita juga bisa membandingan string. Untuk mengecek apakah sebuah string lebih besar dari yang lain, JavaScript akan menggunakan apa yang disebut urutan *"dictionary"* atau <a href='https://id.wikipedia.org/wiki/Urutan_leksikografik' target='_blank'>*"lexicographical"*</a>.

Dengan kata lain, string akan dibandingkan huruf demi huruf.

Contoh:

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

<button class='lihat' onClick='alert( "Z" > "A"); alert( "Glow" > "Glee"); alert("Bee" > "Be");'>lihat</button>

Algoritma dalam membandingkan dua string:

1. Membandingkan karakter pertama dari kedua string.

2. Jika karakter pertama dari string pertama lebih besar atau kurang dari string lainnya, dan jika karakter pertama dari string pertama lebih besar (atau kurang) dari yang kedua. Maka hasilnya akan ditentukan.

3. Jika tidak, jika karakter pertama kedua string sama, maka akan membandingkan karakter kedua dengan cara yang sama.

4. Hal tersebut akan diulang sampai salah satu akhir string.

5. Jika kedua string berakhir pada panjang yang sama, maka keduanya sama. Jika tidak, string yang lebih panjang lebih besar.

Pada contoh pertama di atas, perbandingan **'Z' > 'A'** mendapatkan hasil pada langkah pertama.

Sedangkan perbandingan kedua **'Glow' dan 'Glee'** membutuhkan lebih banyak langkah, karena string dibandingkan karakter demi karakter:

1. **G** sama dengan **G**.

2. **l** sama dengan **l**.

3. **o** lebih besar dari **e**. Perbandingan berhenti disini. String pertama lebih besar.

# Membandingkan Tipe yang Berbeda
Ketika kita membandingan antara tipe data string dengan tipe data number, maka tipe data string akan dikonversi menjadi tipe data number.

Contoh:

```js
alert('10' > 5); // true, karena string '10' akan dikonversi menjadi angka 10.
alert('05' < 10); // true, karena string '05'' akan dikonversi menjadi angka 5.
```

<button class='lihat' onClick='alert("10" > 5); alert("05" < 10);'>lihat</button>

Untuk nilai dari boolean, **true** akan menjadi **1** dan **false** akan menjadi **0**.

Contoh:

```js
alert(true == 1); // true, karena pada pada dasarnya nilai true sama dengan angka 1. 
alert(false == 0); // true, karena pada pada dasarnya nilai false sama dengan angka 0. 
```

<button class='lihat' onClick='alert(true == 1); alert(false == 0);'>lihat</button>

# Menggunakan ===
Operator **===** digunakan untuk mengecek, apakah tipe data yang dibandingkan adalah tipe data yang sama. Kita lihat pada kode diatas, **true == 1** akan menghasilkan nilai **true**. Karena kode diatas tidak membandingan tipe datanya, melainkan hanya persamaan nilainya saja.

Contoh penggunaan **===**:

```js
alert('10' == 10); // true, karena hanya membandingkan nilainya saja.
alert('10' === 10); // false, karena operand kanan bertipe data string dan operand kiri bertipe data number.

// contoh yang lain
alert(null == undefined); // true
alert(null === undefined); // false, karena berbeda tipe.
```

<button class='lihat' onClick='alert("10" == 10); alert("10" === 10); alert(null == undefined); alert(null === undefined);'>lihat</button>

# Kesimpulan

* Operator perbandingan mengembalikan nilai boolean (**true/false**).

* Jika membandingkan tipe string dengan string, maka akan membandingkan huruf demi huruf.

* Ketika nilai dari jenis yang berbeda dibandingkan, semua nilai akan dikonversi ke angka (dengan pengecualian pemeriksaan menggunakan ===).

Referensi

* <a href='https://javascript.info/comparison' target='blank'>javascript.info</a>