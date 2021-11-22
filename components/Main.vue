<template>
<div class='py-10'>
    <div class='bg-transparent text-center px-5 mb-10 md:px-10'>
        <h1 class='text-3xl mb-2'>Artikel Terbaru</h1>
        <p>Apa sih yang baru di Kode Kembar?</p>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 md:px-10'>
        <div v-for='artikel in content' class='bg-white shadow-lg rounded p-4 transform duration-500 hover:translate-y-2 hover:shadow-2xl'>
            <NuxtLink :to='"/post/"+artikel.slug'>
                <div class='flex justify-center items-center' v-lazy-container="{ selector: 'img', error: '/img/eload.gif', loading: '/img/load.gif' }">
                    <img class='rounded mb-4 max-h-36 w-full' :data-src="require(`~/static/Post_Img/${artikel.thumb}`)">
                </div>
            </NuxtLink>
            <p>
                <small v-for='tag in artikel.tag' class='bg-yellow-300 mr-2 rounded px-2 py-1 text-gray-600'>
                    <NuxtLink :to="'/tag/' + tag.replace(/[' ']/g, '-').toLowerCase()">{{ tag }}</NuxtLink>
                </small>
            </p>
            <p class='mt-3'>
                <NuxtLink :to="'/post/'+artikel.slug" class='text-blue-700 text-lg'>{{ artikel.title }}</NuxtLink>
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

    <div class='flex mt-10 justify-center'>
        <div v-for='angka in pagination'>
            <NuxtLink :to="angka.link">
                <button :class="aktif == angka.text ? 'bg-blue-500 text-white' : 'text-blue-500' " class='shadow-none border-2 rounded ml-1 px-3 py-1 border-blue-500 transition duration-500 hover:bg-blue-500 hover:text-white'>{{angka.text}}</button>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            content: [],
            pagination: [],
            aktif: ''
        }
    },

    async fetch() {
        this.aktif = 1;
        this.content = await this.$content('Posts', {
                deep: true
            })
            .sortBy('createdAt', 'desc')
            .limit(8)
            .fetch();

        let totalContent = await this.$content('Posts', {
            deep: true
        }).fetch();

        let numberPaginasi = totalContent.length / 8;
        
        for (let i = 0; i <= parseInt(numberPaginasi); i++) {
            if (i == 0) {
                this.pagination.push({
                    text: 1 + i,
                    link: '#'
                });
            } else {
                if (numberPaginasi !== 1) {
                    this.pagination.push({
                        text: 1 + i,
                        link: '/page/' + (1 + i)
                    });
                }
            }
        }
    },

    methods: {
        formatTanggal(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('id', options)
        }
    }
}
</script>
