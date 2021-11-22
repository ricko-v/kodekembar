<template>
<div class='pt-32 bg-gray-200'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='mb-20'>
        <div class="grid grid-cols-6 gap-4">
            <div class=" col-start-1 col-span-6 pb-10 py-5 shadow-md border border-gray-300 px-5 md:col-start-2 md:col-span-4 bg-white rounded-md">
                <h1 class='font-bold text-3xl'>{{ post.title }}</h1>
                <p>
                    <small>{{ formatTanggal(post.createdAt) }} &ensp; | &ensp; <NuxtLink :to="'/penulis/'+post.penulis">{{ post.penulis }}</NuxtLink></small>
                </p>
                <p class='mt-2'>
                    <small v-for='tag in post.tag' class='bg-yellow-300 mr-2 rounded px-2 py-1 text-gray-600'>
                        <NuxtLink :to="'/tag/' + tag.replace(/[' ']/g, '-').toLowerCase()">{{ tag }}</NuxtLink>
                    </small>
                </p>
                <div class='mt-5' v-lazy-container="{ selector: 'img', error: '/img/eload.gif', loading: '/img/load.gif' }">
                    <img class='rounded-md' :data-src="require(`~/static/Post_Img/${post.thumb}`)">
                </div>
                <div class=''>
                    <nuxt-content :document="post" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
    async asyncData({
        $content,
        params
    }) {
        const post = await $content('Posts', params.slug).fetch()

        return {
            post
        }
    },
    head() {
        return {
            title: "KodeKembar | Post - " + this.post.title,
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.post.title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.post.description
                },
                {
                    hid: `keywords`,
                    name: 'keywords',
                    keywords: this.post.title
                }
            ],
            link: [{
                rel: 'icon',
                type: 'image/png',
                href: '/Post_Img/' + this.post.thumb
            }]
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
