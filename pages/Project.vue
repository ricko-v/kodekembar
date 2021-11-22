<template>
<div class='pt-32 bg-gray-200'>
    <Navbar />
    <BottomBar />
    <div style='min-height:100vh' class='pb-10 px-5 md:px-10'>
        <div class='text-center mb-10'>
            <h1 class='font-semibold text-3xl -mt-6'>Project</h1>
            <p><small class='text-gray-800'>Project yang sudah pernah dibuat</small></p>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
            <div v-for='project in content' class='bg-white shadow-lg rounded p-4 transform duration-500 hover:translate-y-2 hover:shadow-2xl'>
                <div class='flex justify-center' v-lazy-container="{ selector: 'img', error: '/img/eload.gif', loading: '/img/load.gif' }">
                    <img class='rounded mb-4 h-36 w-full' :data-src="require(`~/static/Project_Img/${project.thumb}`)">
                </div>
                <p>
                    <small v-for='tag in project.tag' class='bg-yellow-300 mr-2 rounded px-2 py-1 text-gray-600'>
                        {{ tag }}
                    </small>
                </p>
                <p class='mt-3 text-blue-700 text-lg'>
                    {{ project.title }}
                </p>
                <small class='text-gray-500'>{{ project.description.length >= 100 ? project.description.slice(0, 100) + '...' : project.description }}</small>
                <p>
                    <small class='flex items-center pt-2 text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ formatTanggal(project.createdAt) }}
                    </small>
                </p>
                <div class='grid grid-cols-2 mt-4'>
                    <div class='flex justify-center'>
                        <button @click='buka(project.demo)' class='bg-red-200 p-3 px-3 rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </button>
                    </div>
                    <div class='flex justify-center'>
                        <button @click='buka(project.github)' class='bg-green-200 p-3 px-3 rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github h-6 w-6" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </button>
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
    async asyncData({ $content }) {
        const content = await $content('Project', {
                deep: true
            })
            .sortBy('createdAt', 'desc')
            .fetch();

        return { content };
    },

    head() {
        return {
            title: "KodeKembar | Halaman Project",
            meta: [{
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Kodekembar - Project'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: 'Lihat beberapa project yang sudah kami buat.'
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
