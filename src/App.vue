<template>
    <div id="app" class="container mx-auto mb-10">
        <nav class="flex items-center mt-10 mb-0 lg:mt-20 lg:mb-6">
            <div class="flex items-center flex-shrink-0 mr-6">
                <img src="./assets/HeadshotRound.png" alt="My photo" class="opacity-100 h-12">
                <router-link to="/" class="text-3xl font-semibold leading-tight text-primary ml-4">Adam Barta</router-link>
            </div>
            <div class="flex flex-grow md:hidden">
                <div class="flex-grow">

                </div>
                <button type="button" @click="menuActive = !menuActive" class="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="stroke-current text-primary">
                        <path d="M3 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 6H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 18H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="hidden md:flex flex-grow">
                <div class="flex-grow">

                </div>
                <div class="text-xl font-medium text-primary mt-1">
                    <router-link to="skills" class="mr-4">Skills</router-link>
                    <router-link to="projects" class="mr-4">Projects</router-link>
<!--                    <router-link to="blog" class="mr-4">Blog</router-link>-->
                    <router-link to="contacts" class="mr-4">Contact me</router-link>
                </div>
            </div>
        </nav>
        <router-view v-if="!menuActive" class="page-content"/>
        <div v-if="menuActive" id="mobile-menu" class="text-3xl font-medium text-center text-primary mt-20">
            <router-link @click.native="menuActive = false" to="skills" class="block mt-2">Skills</router-link>
            <router-link @click.native="menuActive = false" to="projects" class="block mt-2">Projects</router-link>
<!--            <router-link @click.native="menuActive = false" to="blog" class="block mt-2">Blog</router-link>-->
            <router-link @click.native="menuActive = false" to="contacts" class="block mt-2">Contact me</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
            menuActive: false
            }
        }
    }
</script>
