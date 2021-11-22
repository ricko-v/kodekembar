---
title: Tipe Data
description: Mengetahui tipe data yang ada pada javascript.
thumb: tipe-data.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Pada tutorial sebelumnya, sudah kita diketahui bahwa suatu variabel memiliki sebuah data. Data tersebut pasti memiliki tipe tertentu, misalnya string atau angka.

Kita bisa memasukkan tipe data apapun ke dalam sebuah variabel. Misalnya, suatu variabel yang awalnya berisi string dapat diganti dengan berisi angka.

Contoh:

```js
let kota = 'Solo';
kota = 10;
```

Bahasa pemrograman yang memungkinkan hal-hal seperti itu, seperti JavaScript, disebut "diketik secara dinamis", yang berarti bahwa ada tipe data, tetapi variabel tidak terikat pada salah satu dari mereka.

# Tipe Data Number

```js
let n = 123;
n = 12.34;
```

Dari kode diatas, dapat kita ketahui bahwa kode javascript dapat menampung angka/bilangan koma. Disini, tanda "**.**" melambangkan koma.

Disaat ada variabel yang berisi data angka, kita dapat melakukan operasi matematika. Seperti mengurangi (**-**), menjumlah (**+**), membagi (**/**), mengkali (*), dan lainnya.

Selain itu, ada juga yang disebut "**nilai numerik khusus**" yang juga termasuk dalam tipe data ini, yaitu **Infinity**, **-Infinity** dan **NaN**.

## Infinity
Infinity mewakili Infinity matematis. Ini adalah nilai khusus yang lebih besar dari angka apa pun.

Kita bisa mendapatkannya sebagai hasil dari pembagian dengan nol atau menuliskannya secara langsung.

```js
alert(1 / 0);
alert(Infinity);
```

<button class='lihat' onClick='alert(1/0);alert(Infinity)'>lihat</button>

## NaN
NaN (Not a Number) menunjukkan kesalahan komputasi. Ini adalah hasil dari operasi matematika yang salah atau tidak terdefinisi, misalnya:

```js
alert( "halo" / 2 );
```

<button class='lihat' onClick='alert("halo"/2)'>lihat</button>

# BigInt
Dalam JavaScript, jenis "angka" tidak dapat mewakili nilai bilangan bulat yang lebih besar dari ((2^53) - 1) (yaitu 900719254740991), atau kurang dari -((2^53) - 1) untuk negatif. Ini adalah batasan teknis yang disebabkan oleh representasi internal.

Untuk sebagian besar nilai tersebut sudah cukup, tetapi terkadang kita membutuhkan angka yang sangat besar, misalnya untuk kriptografi atau stempel waktu presisi mikrodetik.

Tipe BigInt baru-baru ini ditambahkan ke bahasa javascript, untuk mewakili bilangan bulat dengan nilai sangat besar.

Jika kita ingin memakai tipe BigInt, maka kita dapat membuatnya dengan menambahkan **n** ke akhir bilangan bulat.

Contoh: 

```js
const bigInt = 1234567890123456789012345678901234567890n;
```

<button class='lihat' onClick='alert(1234567890123456789012345678901234567890n)'>lihat</button>

# String
Sebuah string dalam JavaScript harus diapit oleh tanda kutip.

```js
let str = "String dengan dobule quote";
let str2 = 'Single quote juga dapat digunakan';
let phrase = `Juga dapat menggunakan Backtick`;
```

Di javascript, terdapat 3 tipe quote:

1. Double quote: **"Halo"**.

2. Single quote: **'Halo'**.

3. Backtikc: **``` `Halo` ```**.

Tanda kutip ganda dan tunggal adalah tanda kutip "sederhana". Praktis tidak ada perbedaan di antara keduanya dalam JavaScript.

Backticks adalah kutipan "fungsionalitas yang diperluas". Itu memungkinkan kita untuk menyematkan variabel dan ekspresi ke dalam string dengan membungkusnya dalam **${…}**, misalnya:

```js
let nama = 'wawan';
alert(`Halo, ${nama}!`); 

alert(`the result is ${1 + 2}`);
```

<button class='lihat' onClick="let nama = 'wawan'; alert(`Halo, ${nama}!`); alert(`contoh ${1 + 2}`);">lihat</button>

Ekspresi di dalam **${…}** dievaluasi dan hasilnya menjadi bagian dari string. Kita bisa memasukkan apa saja di sana: variabel seperti nama atau ekspresi aritmatika seperti 1 + 2 atau sesuatu yang lebih kompleks.

Harap dicatat bahwa ini hanya dapat dilakukan di backticks. Kutipan lain tidak memiliki fungsi penyematan ini!

# Boolean
Tipe data boolean hanya memiliki nilai **true** atau **false**.

Tipe ini biasanya digunakan untuk menyimpan nilai ya/tidak: true berarti “ya, benar”, dan false berarti “tidak, salah”.

Contoh:

```js
let membeli = true;
let menjual = false;
```

Nilai Boolean juga datang sebagai hasil dari perbandingan:

```js
let cek = 4 > 1;

alert(cek);
```

<button class='lihat' onClick='let cek = 5 > 1;alert(cek);'>lihat</button>

# "null"
Nilai **null** adalah nilai khusus yang mewakili **"tidak ada"**, **"kosong"** atau **"nilai tidak diketahui"**.

Contoh:

```js
let nama = null;
```

Dari contoh diatas, diketahui bahwa variabel nama **"kosong"** atau **"nilai tidak diketahui"**.

# "undefined"
Arti dari undefined adalah **"nilai tidak ditetapkan"**.

Jika suatu variabel dideklarasikan, tetapi tidak ditetapkan, maka nilainya tidak terdefinisi:

```js
let nama;

alert(nama);
```

<button class='lihat' onClick='let age;alert(age);'>lihat</button>

# Object dan Simbol
Semua tipe data diatas disebut "primitif", karena nilainya hanya dapat berisi satu saja (baik itu string atau angka atau apa pun). Sebaliknya, objek digunakan untuk menyimpan kumpulan data dan entitas yang lebih kompleks. Kita akan membahasnya nanti di bab Objek, karena lumayan kompleks.

Jenis simbol digunakan untuk membuat pengidentifikasi unik untuk objek. Kita akan membahasnya nanti di bab Objek juga, karena keduanya memiliki hubungan.

# Typeof Operator
Operator **typeof** mengembalikan tipe argumen itu sendiri. Hal ini berguna ketika kita ingin mengetahui tipe apa yang berada pada data tertenu. Untuk membuatnya, ada 2 cara :

1. **typeof data**

2. **typeof(data)**

Kedua cara diatas sama-sama dapat digunakan dan menghasilkan output yang sama juga.

Contoh penggunaannya:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

hasil dari tiga baris terakhir kok bertuliskan **object**? tenang, berikut adalah penjelasanya:

1. **Math** adalah objek built-in yang menyediakan operasi matematika. Kita akan mempelajarinya di bab tersendiri nanti. Di sini, ini hanya berfungsi sebagai contoh objek.

2. Hasil dari **typeof null** adalah **object**. Itu adalah kesalahan yang diakui secara resmi dalam perilaku tipe, yang berasal dari hari-hari awal JavaScript dan disimpan untuk kompatibilitas. Jelas, null bukan object. Ini adalah nilai khusus dengan jenis tersendiri.

3. Hasil dari **typeof alert** adalah **function"**, karena alert adalah sebuah function yang sudah ada pada javascript.

# Kesimpulan
Berarti, disini ada 8 tipe data pada javascript.

* **number** untuk membuat data angka.

* **bigInt** untuk membuat data angka yang memiliki nilai sangat besar.

* **string** untuk membuat data teks/tulisan biasa.

* **boolean** untuk membuat data yang bernilai true atau false.

* **null** untuk membuat data kosong atau data yang tidak diketahui.

* **undefined** untuk nilai yang tidak ditetapkan – tipe mandiri yang memiliki nilai tunggal yang tidak ditentukan.

* **object** untuk membuat struktur data yang lebih kompleks.

* **symbol** untuk pengidentifikasian yang unik.

Referensi:

* <a href='https://javascript.info/types'>javascript.info</a>