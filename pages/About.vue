<template>
<div class='bg-gray-200'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='mb-20 pt-32 bg-gray-200'>
        <div class="grid grid-cols-6 gap-4">
            <div class=" col-start-1 col-span-6 pb-10 py-5 shadow-md border border-gray-300 px-5 md:col-start-2 md:col-span-4 bg-white rounded-md">
                <div>
                    <div class='flex justify-center'>
                        <img :src="require(`~/static/img/question.svg`)">
                    </div>
                  
                    <nuxt-content :document='about' />
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
        $content
    }) {
        const about = await $content('about').fetch()

        return {
            about
        }
    },
    head() {
        return {
            title: "KodeKembar | Halaman About",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'KodeKembar - About'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'About KodeKembar'
                }
            ]
        }
    }
}
</script>
