<template>
<div class='fixed top-0 w-full z-10 shadow-lg'>
    <div class='w-full justify-center p-5 md:px-10 bg-white flex items-center'>
        <div class='absolute left-5 md:left-10'>
            <NuxtLink to='/' class='text-lg font-semibold'>KodeKembar</NuxtLink>
        </div>

        <div class='hidden lg:block'>
            <div class='flex items-center'>
                <NuxtLink to='/' :class="[aktif == '/' ? 'text-black' : 'text-gray-500']" clblackass='text-md hover:text-black'>Beranda</NuxtLink>
                <NuxtLink to='/archive' :class="[aktif == '/archive' ? 'text-black' : 'text-gray-500']" class='text-md hover:text-black ml-5'>Archive</NuxtLink>
                <NuxtLink to='/project' :class="[aktif == '/project' ? 'text-black' : 'text-gray-500']" class='text-md hover:text-black ml-5'>Project</NuxtLink>
                <NuxtLink to='/kategori' :class="[aktif == '/kategori' ? 'text-black' : 'text-gray-500']" class='text-md hover:text-black ml-5'>Kategori</NuxtLink>
            </div>
        </div>

        <div class='absolute right-10 hidden lg:block'>
            <div class='w-full flex items-center'>
                <input placeholder='search' v-model='q' v-on:keyup.enter='cari' class='p-1 border-2 px-2 rounded border-gray-400 shadow-none focus:border-gray-600 focus:text-black focus:outline-none'>
                <button @click='cari' class='w-9 p-1 h-9 border-2 border-gray-400 rounded ml-3 text-gray-400 hover:text-gray-600 hover:border-gray-600 focus:outline-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class='flex w-full justify-end lg:hidden'>
            <NuxtLink to='/cari'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </NuxtLink>
        </div>
        <!--div class='flex w-full justify-end lg:hidden'>
            <button @click='Nav' v-if='!terklik' class='focus:outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <button @click='Nav' v-if='terklik' class='focus:outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div-->
    </div>

    <!--div id='menuMobile' class='bg-white shadow transition-all duration-1000 h-0 block lg:hidden'>
        <div v-if='terklik'>
            <p class='mb-4'>
                <NuxtLink to='/' class='hover:text-gray-500'>Beranda</NuxtLink>
            </p>
            <p class='mb-4'>
                <NuxtLink to='/' class='hover:text-gray-500'>Archive</NuxtLink>
            </p>
            <p class='mb-4'>
                <NuxtLink to='/' class='hover:text-gray-500'>Project</NuxtLink>
            </p>
            <p class='mb-2'>
                <NuxtLink to='/' class='hover:text-gray-500'>Cari</NuxtLink>
            </p>
        </div>
    </div-->
</div>
</template>

<script>
export default {
    data() {
        return {
            terklik: false,
            aktif: true,
            q: ''
        }
    },

    mounted() {
        let path = this.$route.path;
        this.aktif = path;
    },

    methods: {
        cari() {
            if (this.q == '') {
                this.$router.push({
                    path: '/cari'
                });
            } else {
                this.$router.push({
                    path: '/cari?q=' + this.q
                });
            }
        },
        Nav: function () {
            this.terklik = this.terklik ? false : true;

            if (this.terklik) {
                document.getElementById('menuMobile').style = 'height: auto !important; padding: 1.25rem !important; margin-top: -1.5rem !important';
            } else {
                document.getElementById('menuMobile').style = 'height: 0px !important; padding: 0px !important; margin-top: 0px !important';
            }
        }
    }
}
</script>
