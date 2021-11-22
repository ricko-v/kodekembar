<template>
<div class='bg-gray-200 pt-32'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='pb-10 px-5 md:px-10'>
        <div class='text-center mb-10'>
            <h1 class='font-semibold text-3xl -mt-6'>Kategori</h1>
            <p><small class='text-gray-800'>Kategori berdasar bahasa pemrograman</small></p>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
            <div v-for='kategori in content' class='bg-white shadow-lg py-10 rounded p-4 transform duration-500 hover:translate-y-2 hover:shadow-2xl'>
                <NuxtLink :to="'/tutorial/'+kategori.slug">
                    <div class='flex justify-center items-center' v-lazy-container="{ selector: 'img', error: '/img/eload.gif', loading: '/img/load.gif' }">
                        <img class='rounded w-36 h-36' :data-src="require(`~/static/Kategori_Img/${kategori.thumb}`)">
                    </div>
                    <p class='mt-3 text-blue-700 text-lg text-center'>
                        {{ kategori.title }}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    async asyncData({
        $content
    }) {
        const content = await $content('Kategori', {
                deep: true
            })
            .sortBy('createdAt', 'desc')
            .fetch();

        return {
            content
        };
    },

    head() {
        return {
            title: "KodeKembar | Halaman Kategori",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: "KodeKembar - Kategori"
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Pilih kategori tutorial di kodekembar'
                }
            ]
        }
    },

    transition: 'home',
    methods: {
        formatTanggal(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('id', options)
        },

        buka(link) {
            window.open(link, '_blank');
        }
    }
}
</script>
