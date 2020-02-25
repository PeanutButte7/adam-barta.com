<template>
    <div id="projects">
        <div>
            <b-nav pills align="center" class="mt-xl-4 mt-lg-4 mt-1">
                <b-nav-item class="my-nav-item" :active="activeTag === 'design'" @click="changeActiveTag('design')">Designs</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'all'" @click="changeActiveTag('all')">All</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'website'" @click="changeActiveTag('website')">Websites</b-nav-item>
            </b-nav>
        </div>
        <transition-group name="fade" mode="out-in">
            <b-container key="switchAlert" v-show="switching" fluid class="pl-lg-5 pr-lg-5 pl-4 pr-4">
                <b-nav pills align="center">
                    <b-alert
                            @dismissed="countDownTime = 0, switching = false, activeTag = newTag"
                            :show="countDownTime"
                            variant="dark"
                            class="bg-dark text-secondary border-0 mt-3 p-0"
                    >
                        <div class="text-center">
                            <h2>Filtering results...</h2>
                            <b-spinner type="grow" variant="secondary" style="width: 3rem; height: 3rem;" label="Loading" class="mt-3"/>
                        </div>
                    </b-alert>
                </b-nav>
            </b-container>
            <b-container key="content" v-show="!switching" fluid class="pl-lg-5 pr-lg-5 pl-4 pr-4">
                <ul class="row ml-lg-2 mr-lg-2 mt-0 mr-0 ml-0 justify-content-center">
                    <li class="col-xl-6 col-lg-10 col-12 p-lg-4 pl-0 pr-0 pt-4 pb-4"
                        is="SmallCard"
                        v-for="project in filteredProjects"
                        :key="project.id"
                        :tags="project.tags"
                        :title="project.title"
                        :description="project.description"
                        :links="project.links"
                    />
                </ul>
                <h2 class="mt-5 mb-5" id="github">Visit my <a target="_blank" href="https://github.com/PeanutButte7">Github</a> for more projects</h2>
            </b-container>
        </transition-group>
    </div>
</template>

<script>
    import SmallCard from "../components/SmallCard";
    import eng from "../locales/eng";

    export default {
        name: 'projects',
        components: {
            SmallCard,
        },
        data () {
            return {
                activeTag: "all",
                newTag: "",
                countDownTime: 0,
                switching: false,
                projects: eng.projects
            }
        },
        computed: {
            filteredProjects() {
                return this.projects.filter((project) => {
                    if (this.activeTag === "all") {
                        return true
                    }
                    return project.tags.includes(this.activeTag);
                });
            }
        },
        methods: {
            changeActiveTag(newTag) {
                if (newTag === this.activeTag) {
                    return;
                }

                this.newTag = newTag;
                this.switching = true;
                this.countDownTime = 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/main";

    #github {
        text-align: center;

        a {
            text-decoration:none;
            color: black;
            -webkit-text-stroke: 0.5px white;
        }

        a:hover {
            color: white;
            -webkit-text-stroke: unset;
        }
    }

    @media (max-width: $sm) {
        h2 {
            font-size: 1.5rem ;
        }

        .my-nav-item {
            font-size: 0.9rem;
        }

        #github a {
            display: block;
            font-size: 3rem;
        }
    }

    @media (max-width: 320px) {
        .my-nav-item {
            font-size: 0.7rem;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    ul {
        padding: 0;
    }

    .nav-pills {

        a {
        color: white;
        position: relative;
        text-decoration: none;
        display: inline-block;
        transition: 250ms ease-in-out;
        }

        a:after {
            display:block;
            content: '';
            border-bottom: solid 2px white;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: 50% 100%
        }

        a:hover:after {
            transform: scaleX(1);
            transform-origin: 50% 0;
        }

        .nav-link.active {
            background-color: transparent;
            font-weight: 700;
        }
    }
</style>

