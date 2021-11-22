<template>
<div class='bg-gray-200 pt-32'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='px-5 mb-16 rounded-lg pt-16 shadow-lg md:px-10 flex bg-white mx-4 lg:mx-16'>
        <div class='w-full'>
            <div class='text-center w-full mb-8'>
                <h1 class='font-semibold text-3xl -mt-8 border-b border-gray-200 pb-5'>Category - {{ $route.params.nama }}</h1>
            </div>
            <div v-for='thn in tahun' class='mb-16'>
                <div v-for='artikel in content'>
                    <div v-if='thn == artikel.tahun' class='flex items-center'>
                        <ul>
                            <li class='px-3 pb-3'>
                                <div class='md:flex'>
                                    ~ <NuxtLink :to='"/post/"+artikel.slug' class='text-blue-500 text-md md:ml-4'>{{ artikel.title }}</NuxtLink>
                                </div>
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
            content: [],
            tahun: []
        }
    },

    head() {
        return {
            title: "KodeKembar | Kategori - " + this.$route.params.nama,
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'KodeKembar - Kategori ' + this.$route.params.nama
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Tutorial ' + this.$route.params.nama
                }
            ]
        }
    },

    transition: {
        name: 'home'
    },

    async fetch() {
        let category = this.$route.params.nama;
        this.content = await this.$content('Posts', {
                deep: true
            })
            .sortBy('createdAt', 'asc')
            .where({
                category: category
            })
            .fetch();

        for (let i in this.content) {
            let thn = new Date(this.content[i].createdAt).toLocaleDateString('id', {
                year: 'numeric'
            });
            this.content[i].tahun = thn;

            this.tahun.push(thn);
            this.tahun = [...new Set(this.tahun)]
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
