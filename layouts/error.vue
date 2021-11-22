<template>
<div>
    <Navbar />
    <div class='h-full bg-gray-200 flex items-center justify-center' style='height:100vh'>
        <div class='text-center'>
            <div v-if="error.statusCode === 404">
                <img src='/img/404.svg'>
            </div>
            <h1 v-else>An error occurred</h1>
            <NuxtLink to="/">
                <button class='py-1 px-3 rounded bg-pink-500 text-white'>Kembali</button>
            </NuxtLink>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    transition: 'home',
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
}
</script>
