<template>
<div class='bg-gray-200 pt-32'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='px-5 mb-16 rounded-lg pt-16 shadow-lg md:px-10 flex bg-white mx-4 lg:mx-16'>
        <div class='w-full'>
            <div class='text-center w-full mb-8'>
                <h1 class='font-semibold text-3xl -mt-8 border-b border-gray-200 pb-5'>Tag - {{ $route.params.tag }}</h1>
            </div>
            <div class='mb-16'>
                <div v-for='artikel in content'>
                    <div v-for='tag in artikel.tag' class='flex items-center'>
                        <ul v-if='tag == $route.params.tag'>
                            <li class='px-3 pb-3'>
                                ~ <NuxtLink :to='"/post/"+artikel.slug' class='text-blue-500 text-md ml-2'>{{ artikel.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
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
            content: []
        }
    },

    head() {
        return {
            title: "KodeKembar | Tag - " + this.$route.params.tag,
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'KodeKembar - Tag ' + this.$route.params.tag
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Tag ' + this.$route.params.tag
                }
            ]
        }
    },

    transition: {
        name: 'home'
    },

    async fetch() {
        let category = this.$route.params.tag;
        this.content = await this.$content('Posts', {
                deep: true
            })
            .only(['tag', 'createdAt', 'title', 'slug'])
            .sortBy('createdAt', 'desc')
            .fetch();

        for (let i in this.content) {
            let thn = new Date(this.content[i].createdAt).toLocaleDateString('id', {
                year: 'numeric'
            });
            this.content[i].tahun = thn;
        }
    },

    methods: {
        formatTanggal(date) {
            const tanggal = {
                day: 'numeric'
            }

            const bulan = {
                month: 'long'
            }

            let tgl = new Date(date).toLocaleDateString('id', tanggal);
            let bln = new Date(date).toLocaleDateString('id', bulan);
            if (parseInt(tgl) < 10) {
                tgl = "0" + tgl;
            }

            return tgl + " " + bln;
        }
    }
}
</script>
