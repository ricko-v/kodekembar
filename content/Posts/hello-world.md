---
title: Hello World
description: Membuat program pertama dengan javascript.
thumb: hello-world.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

Halo teman-teman semua. Kali ini kita akan belajar bagaimana cara mengimplementasikan javascript ke dalam website kita.

# Tag ```<script>```
Tag **```<script>```** adalah sebuah tag HTML yang berfungsi untuk menuliskan kode javascript. Jadi, saat kita ingin menulis kode javascript, maka dituliskan didalam tag ```<script>```.

contoh:

```html
<script>
    // Kode Javascript didalam sini
</script>
```

Sekarang mari kita coba untuk menampilkan pop-up “Hello World!” ke dalam website. Kita memerlukan function **alert()** untuk menampilkan pop-up ke dalam website. Function ini dapat digunakan untuk menampilkan pop-up.

Berikut contoh kodenya:
```html
<!DOCTYPE html>
<html>
 <head>
  <title>Hello Javascript</title>
 </head>
<body>
 <script>				 
  alert("Hello World!");
 </script>
</body>
</html>
```

hasil dari kode diatas dapat kita lihat dengan menekan tombol berikut:

<button class='lihat' onclick='alert("Hello World!")'>lihat</button>

# Markup Moderen
Tag ```<script>``` memiliki beberapa atribut yang jarang digunakan pada masa sekarang, tetapi masih dapat ditemukan pada kode lama:

**1. Atribut type:** **```<script type=…>```**

Standar HTML lama, HTML4, membutuhkan skrip untuk memiliki tipe. Biasanya itu **type="text/javascript"**. Sekarang itu sudah tidak diperlukan lagi.

**2. Atribut bahasa:** **```<script language=…>```**

Atribut ini dimaksudkan untuk menunjukkan bahasa skrip yang akan digunakan. Atribut ini tidak diperlukan lagi, karena JavaScript adalah bahasa default yang akan digunakan. Jadi, kita tidak perlu menggunakannya.

**3. Komentar sebelum dan sesudah skrip.**

Dalam buku dan panduan yang sangat kuno, kita mungkin menemukan komentar di dalam tag ```<script>```, seperti berikut:

```html
<script type="text/javascript"><!--
    ...
//--></script>
```

Trik ini sudah tidak digunakan dalam JavaScript moderen. Fungsi komentar ini adalah untuk menyembunyikan kode JavaScript dari browser versi lama yang tidak tahu cara memproses tag ```<script>```. Karena browser yang dirilis dalam 15 tahun terakhir tidak memiliki masalah ini, komentar semacam ini dapat membantu kita mengidentifikasi kode yang sangat lama atau lawas.

# Skrip Eksternal
Suatu saat nanti, pasti kode javascript kita akan menjadi sangat panjang. Kita dapat memisahkan antara file HTML dan file Javascript. Kode javascript akan kita panggil dari HTML dengan menggunakan atribut **src** didalam tag ```<script>```:

```html
<script src="/path/to/script.js"></script>
```

Di sini, **/path/to/script.js** adalah jalur mutlak menuju ke skript dari root situs. Kita juga dapat memberikan jalur relatif dari halaman saat ini. Misalnya, ```src="script.js"``` berarti file "script.js" berada didalam folder saat ini.

Kita juga dapat memanggil kode javascript melalui url website lengkap. Contohnya:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

jika kita ingin memanggil beberapa script, maka gunakan beberapa tag ```<script>``` juga:

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
...
```

## Catatan
Agar lebih mudah, jika kode javascript hanya beberapa baris saja, maka dituliskan ke dalam HTML secara langsung. Jika kode javascript sangat panjang dan kompleks, maka lebih baik dituliskan ke dalam file terpisah dengan *ekstensi* **.js**.

Manfaat menulis file secara terpisah adalah browser akan mengunduhnya dan menyimpannya di cache.
Halaman lain yang mereferensikan kode javascript yang sama akan mengambilnya dari cache alih-alih mengunduhnya, jadi file tersebut sebenarnya diunduh hanya sekali saja.
Hal ini berfungsi untuk mengurangi lalu lintas dan membuat halaman menjadi lebih cepat.

Jika **src** sudah di set, maka kode yang ada didalamnya akan diabaikan.
Tag ```<script>`` adalah tag tunggal yang tidak boleh memiliki atribut **src** dan **kode javascript** secara bersammaan di dalamnya.

Contoh:

```html
<script src="file.js">
  alert(1); // kode ini akan diabaikan, karena atribut src telah di set.
</script>
```

Kita harus memilih antara menggunakan```<script src="…">``` eksternal atau menggunakan ```<script>``` biasa dengan kode javascript didalamnya.

Contoh di atas dapat diperbaiki dengan membagi menjadi dua tag ```<script>```:

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

# Kesimpulan
* Kita dapat menggunakan tag ```<script>``` untuk menambahkan kode JavaScript ke halaman website.

* Atribut **type** dan **language** sudah tidak diperlukan.

* Kode javascript dalam file eksternal dapat disisipkan dengan ```<script src="path/to/script.js">```.

Referensi:
* <a href='https://javascript.info/hello-world' target='blank'>javascript.info</a>
