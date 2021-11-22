<template>
<div class='px-5 md:px-10 heder bg-pink-600 block md:flex justify-between items-center'>
    <div class='text-white heder flex items-center md:w-6/12'>
        <div>
            <h1 class='text-4xl font-extrabold mb-3'>Mari Belajar Bersama</h1>
            <span class='text-2xl' id='info'></span>
            <p class='mt-4'>
                <p>Halo teman-teman semua! Selamat datang di KodeKembar.</p>
                <p>Disini kita akan belajar dan mengembangkan skill bersama-sama.</p>
                <p><b>Sudah siap belajar?</b></p>
            </p>
            <p class='mt-5'>
                <NuxtLink to='/kategori'>
                    <button class='rounded transition duration-500 border-2 border-white py-2 px-3 hover:bg-white hover:text-pink-600 focus:outline-none'>Mulai Belajar</button>
                </NuxtLink>
            </p>
        </div>
    </div>
    <div class='hidden md:block'>
        <img src='/img/webdev.svg' class='h-96'>
    </div>
</div>
</template>
