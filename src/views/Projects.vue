<template>
    <div id="projects">
        <div>
            <b-nav pills align="center" class="mt-4">
                <b-nav-item class="my-nav-item" :active="activeTag === 'design'" @click="activeTag = 'design'">Designs</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'all'" @click="activeTag = 'all'">All</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'website'" @click="activeTag = 'website'">Websites</b-nav-item>
            </b-nav>
        </div>
        <b-container fluid class="pl-lg-5 pr-lg-5 pl-4 pr-4">
            <ul class="row ml-lg-2 mr-lg-2 mt-2 mr-0 ml-0 justify-content-center">
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
        </b-container>
        <h2 class="mt-5 mb-5" id="github">Visit my <a target="_blank" href="https://github.com/PeanutButte7">Github</a> for more projects</h2>
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
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/main';

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

