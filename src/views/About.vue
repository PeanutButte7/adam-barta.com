<template>
    <div id="about">
        <b-container fluid class="pt-lg-5 pl-lg-5 pr-lg-5">
            <div class="name-container">
                <span class="image">
                    <b-img class="image-item mb-2 mb-sm-0" width="300px" :src="require('../assets/Headshot.jpg')" rounded="circle" alt="Circle image"></b-img>
                </span>
                <span class="name ml-lg-3 ml-xl-3 ml-md-3 ml-sm-0">
                    <span><h1>Adam Bárta</h1></span>
                    <h4>developer - designer - video producer - writer</h4>
                </span>
            </div>
            <b-row>
                <b-col xl="9" lg="12" sm="12">
                    <div class="mobile-buttons text-center mt-3">
                        <b-button block to="/skills" variant="outline-light" size="sm">See my skills</b-button>
                        <b-button block to="/projects" variant="outline-light" size="sm">See my projects</b-button>
                        <b-button block to="/contacts" variant="outline-light" size="sm">Contact me</b-button>
                    </div>
                    <div class="mt-3">
                        <p>Hi! I'm a highschool student studying web development, programming and vector art. I have also been working as writer, video producer and game critic in Czech magazine <a class="link" target="_blank" href="https://indian-tv.cz/">IndianTVCZ</a> for 3 years now.</p>
                        <p> Although I'm a student I spend a lot of free time working on my own projects. Such as websites, videogames, hardware projects and more. <br/> I also make UI / UX designs, logos, and vector illustrations.</p>
                    </div>
                    <div class="desktop-buttons">
                        <b-button class="mt-3" to="skills" variant="outline-light">See my skills</b-button>
                        <b-button class="mt-3 ml-3" to="projects" variant="outline-light">See my projects</b-button>
                        <b-button class="mt-3 ml-3" to="contacts" variant="outline-light">Contact me</b-button>
                    </div>
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
    @import "../styles/main";

    .link {
        color: white;
        border-bottom: solid 2px white;
    }

    .link:hover {
        color: white;
        text-decoration: none;
    }

    .mobile-buttons {
        display: none;
    }

    .desktop-buttons {
        display: block;
    }

    @media (min-width: $lg) {
        .name {
            position: absolute;
            bottom: 0;
        }

        .name-container {
            position: relative;
            min-height: 150px;
        }
    }

    @media (max-width: $sm) {
        .name-container {
            text-align: center;

            .image-item{
                width: 210px;
            }

            h1 {
                font-size: 2.1rem;
            }

            h4 {
                font-size: 0.9rem;
            }
        }

        .mobile-buttons {
            display: block;
        }

        .desktop-buttons {
            display: none;
        }
    }

    @media (max-width: 320px) {
        .name-container {
            .image {
                width: 150px;
            }

            h1 {
                font-size: 1.8rem;
            }
        }
    }

    @media (max-width: $xl) {
        h4 {
            font-size: 1.1rem;
        }
    }
</style>
