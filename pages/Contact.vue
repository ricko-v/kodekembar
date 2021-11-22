<template>
<div class='bg-gray-200 pt-32'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='px-5 mb-16 rounded-lg pt-16 shadow-lg md:px-10 flex bg-white mx-4 lg:mx-16'>
        <div class='w-full'>
            <div class='text-center w-full mb-8'>
                <h1 class='font-semibold text-3xl -mt-8 border-b border-gray-200 pb-5'>Contact</h1>
            </div>
            <div class='text-center'>
                <span>Mempunyai pertanyaan atau saran mengenai KodeKembar?<br>Kirimkan dengan mengeklik gambar dibawah atau menghubungi melalui <a href='https://t.me/twindev' target='blank' class='text-blue-900'>Telgeram</a>.</span>
            </div>
            <div class='flex justify-center'>
                <a href="mailto:veriyantoricko302@gmail.com">
                    <img :src="require(`~/static/img/email.svg`)">
                </a>
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
            title: "KodeKembar | Contact",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'KodeKembar - Contact'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Contact'
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
            .sortBy('createdAt', 'desc')
            .where({ category: category })
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