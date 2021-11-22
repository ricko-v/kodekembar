<template>
<div class='py-12 px-4 bg-footer pb-28 md:pb-12'>
    <div class='flex justify-center'>
        <div class='flex justify-around'>
            <div class='justify-center flex mr-6'>
                <a :href="'https://www.facebook.com/profile.php?id='+config.facebook" target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook h-7 w-7 transform transition duration-500 hover:scale-125" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                </a>
            </div>
            <div class='justify-center flex mr-6'>
                <a :href="'https://t.me/'+config.telegram" target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telegram h-7 w-7 transform transition duration-500 hover:scale-125" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                    </svg>
                </a>
            </div>
            <div class='justify-center flex mr-6'>
                <a :href="'https://github.com/'+config.github" target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github h-7 w-7 transform transition duration-500 hover:scale-125" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class='flex py-12 justify-center'>
        <div class='flex justify-around'>
            <div class='justify-center flex mr-6'>
                <NuxtLink :class="[aktif == '/about' ? 'text-gray-500' : '']" to='/about' class='hover:text-gray-500'>
                    About
                </NuxtLink>
            </div>
            <div class='justify-center flex mr-6'>
                <span class='hover:text-gray-500 text-gray-500'>
                    soon
                </span>
            </div>
            <div class='justify-center flex mr-6'>
                <span class='hover:text-gray-500 text-gray-500'>
                    soon
                </span>
            </div>
            <div class='justify-center flex mr-4'>
                <NuxtLink :class="[aktif == '/contact' ? 'text-gray-500' : '']" to='/contact' class='hover:text-gray-500'>
                    Contact
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class='text-center border-t-2 border-gray-300 pt-10'>
        <div class=''>
            <div class=''>
                <span class='items-center'>
                    &copy;2021 KodeKembar - Made with
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" class="animate-bounce bi w-5 ml-1 mr-1 pt-1 h-5 bi-heart-fill inline-block" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg> using Nuxt & Tailwindcss
                </span>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            config: '',
            aktif: ''
        }
    },

    mounted() {
        this.aktif = this.$route.path;
    },

    async fetch() {
        this.config = await this.$content('config').fetch();
    }
}
</script>
