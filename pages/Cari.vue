<template>
<div class='bg-gray-100'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='flex justify-center items-center' v-show='load'>
        Loading...
    </div>
    <div style='min-height:100vh'>
        <div v-show='$route.query.q == undefined' style='min-height:100vh' class='flex items-center justify-center px-5'>
            <div class='w-full md:mx-64 text-center'>
                <p class='text-2xl font-semibold mb-5'>Cari Sesuatu?</p>
                <div class='items-center w-full flex justify-center'>
                    <input placeholder='Cari' v-model='q' @keyup.enter='cari' class='p-1 w-full border-2 px-2 rounded border-gray-400 shadow-none focus:border-gray-600 focus:text-black focus:outline-none'>
                    <button @click='cari' class='w-9 p-1 h-9 border-2 border-gray-400 rounded ml-3 text-gray-400 hover:text-gray-600 hover:border-gray-600 focus:outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class='flex justify-center items-center' style='min-height:100vh' v-show='wrongPage'>
            <div>
                <center>
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </center>
                <b>Tidak menemukan apapun :(</b>
                <p class='text-center'>
                    <NuxtLink to='/cari' class='text-blue-500'>Kembali</NuxtLink>
                </p>
            </div>
        </div>

        <div class='pt-28 pb-16 px-5 md:px-10' style='min-height:100vh' v-show='content.length > 0'>
            <div class='bg-transparent mb-10'>
                <h1 class='text-3xl text-center'>Hasil pencarian - "{{ $route.query.q }}"</h1>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                <div v-for='artikel in content' class='bg-white shadow-lg rounded p-4 transform duration-500 hover:translate-y-2 hover:shadow-2xl'>
                    <NuxtLink :to='"/post/"+artikel.slug'>
                        <img class='rounded mb-4' :src='"/Post_Img/"+artikel.thumb'>
                    </NuxtLink>
                    <p>
                        <small v-for='tag in artikel.tag' class='bg-yellow-300 mr-2 rounded px-2 py-1 text-gray-600'>
                            <NuxtLink :to="'/tag/' + tag.replace(/[' ']/g, '-').toLowerCase()">{{ tag }}</NuxtLink>
                        </small>
                    </p>
                    <p class='mt-3'>
                        <NuxtLink :to='"/post/"+artikel.slug' class='text-blue-700 text-lg'>{{ artikel.title }}</NuxtLink>
                    </p>
                    <small class='text-gray-500'>{{ artikel.description.length >= 100 ? artikel.description.slice(0, 100) + '...' : artikel.description }}</small>
                    <p class='flex justify-between'>
                        <small class='flex items-center pt-2 text-gray-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ formatTanggal(artikel.createdAt) }}
                        </small>
                        <small class='pt-2 flex text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{{ artikel.penulis }}</span>
                    </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    data() {
        return {
            content: [],
            pagination: [],
            angka: '',
            wrongPage: false,
            q: '',
            load: false
        }
    },

    head() {
        return {
            title: "KodeKembar | Halaman Cari",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: "KodeKembar - Cari"
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'cari materi di kodekembar'
                }
            ]
        }
    },

    transition: 'home',

    mounted() {
        let q = this.$route.query.q;
        if (this.$route.fullPath !== '/cari') {
            this.$content('Posts', {
                    deep: true
                })
                .sortBy('createdAt', 'desc')
                .search('title', q)
                .fetch()
                .then(res => {
                    this.content = res;
                    if (res.length == 0) {
                        this.wrongPage = true;
                    }
                })
        }
    },
    // async fetch() {
    //     let q = this.$route.query.q;
    //     console.log(q);
    //     if (q !== undefined) {
    //         this.content = await this.$content('Posts', {
    //                 deep: true
    //             })
    //             .sortBy('createdAt', 'desc')
    //             .search('title', q)
    //             .fetch();
    //         this.load = false;
    //         if (this.content.length == 0 && q) {
    //             this.wrongPage = true;
    //         }
    //     }
    //     else {
    //         this.load = false;
    //         console.log('triger');
    //     }
    // },

    methods: {
        cari() {
            if (this.q == '') {
                this.$router.push({
                    path: '/cari'
                });
            }
            this.$router.push({
                path: '?q=' + this.q
            });
        },
        formatTanggal(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('id', options)
        }
    },

    watch: {
        "$route": {
            deep: true,
            handler: function (val) {
                this.wrongPage = false;
                this.q = '';
                let q = this.$route.query.q;
                this.$content('Posts', {
                        deep: true
                    })
                    .sortBy('createdAt', 'desc')
                    .search('title', q)
                    .fetch()
                    .then(res => {
                        this.content = res;
                        if (res.length == 0 && this.$route.fullPath !== '/cari') {
                            this.wrongPage = true;
                        }
                    })
            }
        }
    }
}
</script>
