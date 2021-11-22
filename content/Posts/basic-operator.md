---
title: Basic Operator, Math
description: Belajar operator matematika untuk pemrograman.
thumb: basic-operator.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Halo teman-teman! Kali ini kita akan belajar mengenai operasi matematika untuk pemrograman. Di sekolah, kita pasti sudah diajarkan operasi matematika seperti penjumlahan (**+**), pengurangan (**-**), pembagian(\), perkalian (*). Namun, kita tidak hanya membahas tentang operasi dasar saja. Kita juga akan membahas operasi yang tidak tercakup di pelajaran aritmatika sekolah.

# "uner", "biner", "operand"
Sebelum kita melanjutkan, mari kita ketahui terlebih dahulu beberapa terminologi umum.

a. **operand** adalah apa yang diterapkan oleh operator. Misalnya, dalam perkalian ``` 10 * 5 ``` ada dua operand: angka **10** adalah operand kanan dan angka **5** adalah operand kiri.

b. **uner** adalah suatu kondisi jika operator hanya memiliki satu operand saja. Misalnya, negasi uner - membalikkan tanda angka:
```js
let x = 5;

x = -x;
alert(x);
```

<button class='lihat' onClick='let x = 5;  x = -x; alert(x);'>lihat</button>

c. **biner** adalah suatu kondisi jika operator memiliki dua operand. Misalnya, dalam pengurangan ``` 10 - 5```.
```js
let x = 10, y = 5;
alert( y - x );
```

<button class='lihat' onClick='let x = 10, y = 5; alert(x-y);'>lihat</button>

Secara formal, dalam contoh di atas kita memiliki dua operator berbeda yang memiliki simbol yang sama: operator negasi, operator uner yang membalikkan tanda, dan operator pengurangan, operator biner yang mengurangi satu angka dari angka lainnya.

# Matematika
Operasi matematika berikut yang bisa digunakan:

1. Tambahan +,

2. Pengurangan -,

3. Perkalian *,

4. Pembagian /,

5. Sisa bagi %,

6. Eksponensial **.

Mungkin dari daftar **a** hingga **d**, adalah operasi matematika yang sudah kita ketahui. sementara daftar **f** dan **g**, mungkin ada penjelasan tambahan mengenainya.

# Sisa Bagi %
Jika dilihat dari simbolnya, mungkin akan terlihat seperti persen. Namun, tidak demikian. Sesuai dengan keteranganya, yaitu **Sisa Bagi** adalah hasil sisa dari suatu pembagian. Misalnya, dalam pembagian 10 % 3 adalah 3 koma sekian. Disini hasil sisa baginya adalah 1.

Contoh penggunaannya:

```js
let x = 10;
let y = 3;

alert(x % y);
```

<button class='lihat' onClick='let x = 10; let y = 3; alert(x % y);'>lihat</button>

# Eksponensial **
Operator eksponensial merupakan bentuk perkalian suatu bilangan yang sama secara berulang-ulang. Biasanya kita menyebutnya bilangan berpangkat. Misalnya, dalam eksponensial 2 ** 3 sama saja dengan 2 pangkat 3.

Contoh penggunaaannya:

```js
alert(2 ** 3);
alert(4 ** (1/2)) //disini akan diterjemahkan sebagai 4 pangkat setengah.
```

<button class='lihat' onClick='alert(2 ** 3); alert(4 ** (1/2));'>lihat</button>

# Penggabungan String
Mari kita temui fitur operator JavaScript yang berada di luar aritmatika sekolah.

Biasanya, operator plus + akan menjumlahkan angka. Tetapi, jika plus + diterapkan ke string, maka akan menggabungkan mereka.

Contoh:

```js
let kata = 'ha' + 'lo';
alert(kata);
```

<button class='lihat' onClick="let kata = 'ha' + 'lo';alert(kata);">lihat</button>

Namun, jika kita menambahkan string dengan angka atau sebaliknya, maka akan hasilnya akan dikonversi menjadi string.

Contoh:

```js
let a = 5 + '5'; 
alert(a); //akan menghasilkan '55'.
alert(3 + 3 + '3'); //akan menghasilkan 63. Karena, 6 + '3'.
```

<button class='lihat' onClick="let a = 5 + '5'; alert(a); alert(3 + 3 + '3');">lihat</button>

Penggunaan string hanya berlaku pada operasi penjumlahan saja. Operasi yang lain akan menganggap string itu menjadi angka.

Contoh:

```js
alert(10 - '5'); // 5
alert('10' / '5'); // 2
```

<button class='lihat' onClick="alert(10 - '5'); alert('10' / '5');">lihat</button>

# Konversi numerik, uner +
Penjumlahan (+) ada dalam dua bentuk, yaitu bentuk biner yang kita gunakan di atas dan bentuk uner.

Operator plus (+) di uner diterapkan pada satu nilai, tidak melakukan apa pun pada angka. Tetapi jika operand bukan angka, maka plus (+) uner akan mengubahnya menjadi angka.

Contoh:

```js
// tidak ada perubahan dengan operand angka
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Akan mengubah non-number menjadi number.
alert( +true ); // 1
alert( +"" );   // 0
```

<button class='lihat' onClick='let x = 1; alert( +x ); let y = -2; alert( +y ); alert( +true ); alert( +"" );'>lihat</button>

Sebenarnya, plus (+) uner diatas melakukan hal yang sama seperti function **Number(...)** tetapi lebih pendek.

Kebutuhan untuk mengubah string menjadi angka sangat sering muncul. Misalnya, jika kita mendapatkan nilai dari bidang formulir HTML, biasanya berupa string. Bagaimana jika kita ingin menjumlahkannya?

**Perbedaan penggunaan plus (+) di operasi biner dan uner.**

```js
let x = '2';
let y = '3';

// Operasi biner
alert(x + y); // akan menghasilkan '23', karena string tidak dikonversi menjadi angka.

// Operasi uner
alert(+x + +y); // akan menghasilkan 5, karena string akan dikonversi menjadi angka.
```

<button class='lihat' onClick="let x = '2'; let y = '3'; alert(x + y); alert(+x + +y);">lihat</button>

Dari sudut pandang ahli matematika, banyaknya nilai plus mungkin tampak aneh. Tetapi dari sudut pandang programmer, tidak ada yang istimewa: plus unary diterapkan terlebih dahulu, mereka mengubah string menjadi angka, dan kemudian biner plus menjumlahkannya.

Mengapa nilai plus unary diterapkan ke nilai sebelum nilai biner? Seperti yang akan kita lihat, itu karena prioritas mereka yang lebih tinggi.

# Prioritas Operator
Jika sebuah soal memiliki lebih dari satu operator, urutan eksekusi ditentukan oleh prioritasnya, atau dengan kata lain urutan prioritas default operator.

Misalnya ada soal 1 + 1 * 2, untuk menjawabnya, kita sudah diajarkan untuk mengerjakan operator perkalian terlebih dahulu daripada penjumlahan. Hal inilah yang dinamakan prioritas operator.

Di sekolah, kita juga sudah diajarkan tentang penggunaan tanda kurung **()** yang berfungsi untuk mengesampingkan prioritas apapun. Misalnya ada soal (1 + 1) * 2, operator penjumlahan akan kita kerjakan terlebih dahulu, karena berada didalam tanda kurung **()**.

Ada banyak operator dalam JavaScript. Setiap operator memiliki nomor prioritas sendiri-sendiri. Yang memiliki jumlah nilai prioritas lebih besar dieksekusi terlebih dahulu. Jika prioritasnya sama, urutan eksekusi adalah dari kiri ke kanan. Kita dapat melihat tabel prioritas operator <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table' target='_blank'>disini.</a>

# Penugasan =
Perhatikan bahwa penugasan (=) juga merupakan operator. Itu tercantum dalam tabel prioritas dengan prioritas sangat rendah, yaitu 3.

Itu sebabnya, ketika kita menetapkan variabel, seperti **x = 2 * 2 + 1**, semua perhitungan dilakukan terlebih dahulu dan kemudian = dievaluasi, menyimpan hasilnya dalam x.

```js
let x = 5 * 2 + 2;
alert( x ); // 12
```

<button class='lihat' onClick='let x = 5 * 2 + 2; alert(x);'>lihat</button>

# Modifikasi di Tempat
Kita kedepannya akan sering menerapkan operator ke variabel dan menyimpan hasil baru ke dalam variabel yang sama.

Contoh:

```js
let n = 2;
n = n + 5; // ini akan dibaca seperti, n = 2 + 5;
n = n * 2; // n = 7 * 2;

alert(n) // 14
```

<button class='lihat' onClick='let n = 2; n = n + 5; n = n * 2; alert(n);'>lihat</button>

Pengoperasian diatas dapat di singkat menggunakan **+=** dan ***=**. Hal ini berlaku untuk semua operator aritmatika dan bitwise: **/=**, **-=**, dll. :

```js
let n = 2;
n += 5; 
n *= 2;

alert(n) // 14
```

<button class='lihat' onClick='let n = 2; n += 5; n *= 2; alert(n);'>lihat</button>

Operator tersebut memiliki prioritas yang sama dengan penetapan normal, sehingga mereka berjalan setelah sebagian besar perhitungan lainnya:

```js
let n = 2;

n *= 3 + 5;

alert(n); // 16  (bagian 3 + 5 dihitung terlebih dahulu, kemudian menghasilkan n *= 8)
```

<button class='lihat' onClick='let n = 2;  n *= 3 + 5;  alert(n);'>lihat</button>

# Kenaikan/Penurunan
Menambah atau mengurangi angka satu per satu adalah salah satu operasi numerik yang paling umum.

Jadi, ada operator khusus untuk itu:

a. **Kenaikan ++** akan meningkatkan nilai variabel sebesar 1.

```js
let x = 5;
x++; // hal ini sama halnya dengan x = x + 1, tetapi dalam versi singkat.
alert(x);
```

<button class='lihat' onClick='let x = 5; x++; alert(x);'>lihat</button>

b. **Pengurangan --** akan mengurangi nilai variabel sebesar 1.

```js
let x = 5;
x--; // hal ini sama halnya dengan x = x - 1, tetapi dalam versi singkat.
alert(x);
```

<button class='lihat' onClick='let x = 5; x--; alert(x);'>lihat</button>

**Catatan**: hal ini hanya berlaku untuk variabel.Jika melakukan langsung terhadap angka secara langsung (**5++**), maka akan error.

Operator ++ dan -- dapat ditempatkan sebelum atau sesudah variabel.

1. Ketika operator berada didepan variabel, variabel tersebut akan berada dalam **"bentuk perubahan akhir"**: x++.

2. **"bentuk awalan"** adalah ketika operator berjalan sebelum variabel: ++x.

Kedua pernyataan ini melakukan hal yang sama: menambah nilai variabel sebesar 1.

Apakah ada perbedaan? Ya, tapi kita hanya bisa melihatnya jika kita menggunakan nilai yang dikembalikan dari ++/--.

Mari kita perjelas. Seperti yang kita ketahui, semua operator mengembalikan nilai. Kenaikan/penurunan tidak terkecuali. Bentuk awalan mengembalikan nilai baru sedangkan bentuk postfix mengembalikan nilai lama (sebelum kenaikan/penurunan).

Contoh:

```js
let x = 1;
let a = ++x; // (*)

alert(a); // 2
```

<button class='lihat' onClick='let x = 1; let a = ++x; alert(a);'>lihat</button>

Pada baris (*), bentuk awalan ++ penghitung menambah penghitung dan mengembalikan nilai baru, 2. Jadi, akan menunjukkan 2.

Sekarang mari kita letakkan didepan variabel:

```js
let x = 1;
let a = x++; // (*) mengganti ++x ke x++.

alert(a); // 1
```

<button class='lihat' onClick='let x = 1; let a = x++; alert(a);'>lihat</button>

Pada baris (*), penghitung bentuk perubahan akhir juga menambah penghitung tetapi mengembalikan nilai lama (sebelum kenaikan). Jadi, akan menunjukkan 1.

# Operator Bitwise
Operator bitwise memperlakukan argumen sebagai bilangan bulat 32-bit dan bekerja pada tingkat representasi biner mereka.

Operator ini tidak khusus JavaScript. Operator bitwise bisa dilakukan di sebagian besar bahasa pemrograman.

Daftar operatornya:

1. AND ( & )

2. OR ( | )

3. XOR ( ^ )

4. NOT ( ~ )

5. LEFT SHIFT ( << )

6. RIGHT SHIFT ( >> )

7. ZERO-FILL RIGHT SHIFT ( >>> )

Operator-operator ini sangat jarang digunakan, ketika kita perlu mengutak-atik angka pada level paling rendah (bitwise). Kita tidak akan membutuhkan operator ini dalam waktu dekat, karena pengembangan web jarang digunakan, tetapi di beberapa area khusus, seperti kriptografi, operator ini akan berguna. Kita dapat membaca bab <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise' target='_blank'>Bitwise Operators</a> di MDN saat diperlukan.

# Koma
Operator koma , adalah salah satu operator yang paling langka dan paling tidak biasa. Terkadang, ini digunakan untuk menulis kode yang lebih pendek, jadi kita perlu mengetahuinya untuk memahami apa yang terjadi.

Operator koma memungkinkan kita untuk mengevaluasi beberapa ekspresi, membaginya dengan koma ,. Masing-masing dievaluasi tetapi hanya hasil yang terakhir yang dikembalikan.

Contoh:

```js
alert(1 + 2, 3 + 4); // hanya hasil terakhir yang akan dikembalikan.
```

<button class='lihat' onClick='alert(1 + 2, 3 + 4)'>lihat</button>

Referensi:

* <a href='https://javascript.info/operators' target='blank'>javascript.info</a>