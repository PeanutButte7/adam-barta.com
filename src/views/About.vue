<template>
    <div id="about">
        <b-container fluid class="pt-5 pl-5 pr-5">
            <div class="name-container">
                <b-img class="mb-2" width="300px" :src="require('../assets/Headshot.jpg')" rounded="circle" alt="Circle image"></b-img>
                <span class="name ml-3">
            <span class="h1">Adam Bárta</span>
                <h4 class="lg">developer - designer - video producer - writer</h4>
            </span>
            </div>
            <b-row>
                <b-col xl="9" lg="12">
                    <div class="mt-3">
                        <p>Hi! I'm a highschool student studying web development, programming and vector art. I have also been working as writer, video producer and game critic in Czech magazine IndianTVCZ for 3 years now.</p>
                        <p>Although I'm a student I spend a lot of free time working on my own projects. Such as websites, videogames, hardware projects and more. I also make digital art - mainly vector illustrations and logos or UI/UX concepts.</p>
                    </div>
                    <b-button class="mt-3" to="/skills" variant="outline-light">See my skills</b-button>
                    <b-button class="mt-3 ml-3" to="/projects" variant="outline-light">See my projects</b-button>
                    <b-button class="mt-3 ml-3" to="/contacts" variant="outline-light">Contact me</b-button>
<!--                    <b-button class="mt-3 ml-3" to="/timeline" variant="outline-light">See where I've worked</b-button>-->
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'about',
        components: {
        }
    }
</script>

<style lang="scss" scoped>
    .name {
        position: absolute;
        bottom: 0;
    }

    .name-container {
        position: relative;
        min-height: 150px;
    }

    @media (max-width: 1441px) {
        h4 {
            font-size: 1.1rem;
        }
    }
</style>