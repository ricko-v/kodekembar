<template>
<div class='bg-gray-200' style='min-height:100vh'>
    <Navbar />
    <BottomBar />
    <Header />
    <Main />
    <Footer />
</div>
</template>

<script>
import Typed from 'typed.js';

export default {
    data() {
        return {

        }
    },

    head() {
        return {
            title: "KodeKembar | Halaman Beranda",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'KodeKembar'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'KodeKembar adalah website yang menyediakan tutorial bahasa pemrograman dari dasar.'
                }
            ]
        }
    },

    transition: {
        name: 'home'
    },

    mounted() {
        var options = {
            strings: ['<i>Web Development</i>.', '<i>Web Design</i>', '<i>Mobile Development</i>', 'dan hal menarik lainnya.'],
            typeSpeed: 40,
            loop: true
        };

        var typed = new Typed('#info', options);
    }
}
</script>
