---
title: Use Strict
description: Memahami "use strict" untuk javascript moderen.
thumb: use-strict.png
category: javascript
tag: ['javascript', 'js-basic']
penulis: ricko-v
---

# Javascript Moderen
Untuk waktu yang lama, JavaScript berkembang tanpa masalah kompatibilitas. Fitur baru ditambahkan ke bahasa ini, sementara fungsi lama tidak berubah.

Hal ini memiliki manfaat untuk tidak pernah melanggar kode yang sudah ada. Tetapi kelemahannya adalah bahwa setiap kesalahan atau keputusan tidak sempurna yang dibuat oleh pembuat JavaScript akan terjebak dalam bahasa tersebut selamanya.

Ini adalah kasus sampai 2009 ketika ECMAScript 5 (ES5) muncul. Itu menambahkan fitur baru ke bahasa dan memodifikasi beberapa yang sudah ada. Agar kode lama tetap berfungsi, sebagian besar modifikasi tersebut dinonaktifkan secara default. Kita perlu mengaktifkannya secara eksplisit dengan memakai kode khusus: **"use strict"**.

# "use strict"
Mungkin terlihat seperti string: **"use strict"** atau **'use strict'**. Ketika kode ini terletak di bagian atas kode javascript, maka seluruh kode javascript akan bekerja dengan cara "moderen".

Sebagai contoh:

```js
"use strict";

// kode ini bekerja dengan cara moderen
...
```

Tidak lama lagi kita akan mempelajari **function** pada javascript, jadi perhatikan terlebih dahulu bahwa **"use strict"** dapat diletakkan di awal suatu function. Melakukan hal itu memungkinkan mode strict hanya dalam function tersebut. Tetapi biasanya orang menggunakannya untuk keseluruhan skrip.

## Catatan
Harap pastikan bahwa kode **"use strict"** ada di bagian atas kode javacript, jika tidak, mode strict tidak dapat diaktifkan.

```js
alert("some code");
// "use strict" di bawah akan diabaikan--harus di atas

"use strict";

// strict mode tidak diaktifkan
```

# Kapan Memakainya?
Lalu kapan kita harus memakai **"use strict"** pada kode javascript kita?

JavaScript moderen mendukung yang namanya **"class"** dan **"module"** - struktur bahasa tingkat lanjut (kita akan mempelajarinya nanti). Jadi kita tidak perlu menambahkan directive "use strict", jika kita tidak menggunakannya (Javascript Moderen).

Referensi:
* <a href='https://javascript.info/structure'>javascript.info</a>
