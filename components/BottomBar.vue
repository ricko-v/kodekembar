<template>
<div class="shadow bg-white border-t-2 border-gray-600 text-gray-500 text-center w-full block fixed bottom-0 lg:hidden py-3 grid grid-cols-4 z-10">
    <div :class="[aktif == '/' ? 'text-pink-500' : '']" class="hover:text-pink-500 flex justify-center items-center">
        <div>
            <NuxtLink to='/'>
                <div class='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div class="-mt-2">
                    <small><small>Beranda</small></small>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div :class="[aktif == '/archive' ? 'text-pink-500' : '']" class="hover:text-pink-500">
        <div>
            <NuxtLink to='/archive'>
                <div class='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                </div>
                <div class="-mt-2">
                    <small><small>Archive</small></small>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div :class="[aktif == '/project' ? 'text-pink-500' : '']" class="hover:text-pink-500">
        <div>
            <NuxtLink to='/project'>
                <div class='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <div class="-mt-2">
                    <small><small>Project</small></small>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div :class="[aktif == '/kategori' ? 'text-pink-500' : '']" class="hover:text-pink-500">
        <div>
            <NuxtLink to='/kategori'>
                <div class='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <div class="-mt-2">
                    <small><small>Kategori</small></small>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            aktif: '',
        }
    },
    mounted() {
        this.aktif = this.$route.path;
    }
}
</script>
