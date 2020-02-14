<template>
    <div id="portfolio">
        <div>
            <b-nav pills align="center" class="mt-4">
                <b-nav-item class="my-nav-item" :active="activeTag === 'design'" @click="activeTag = 'design'">Design</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'all'" @click="activeTag = 'all'">All</b-nav-item>
                <b-nav-item class="my-nav-item" :active="activeTag === 'program'" @click="activeTag = 'program'">Projects</b-nav-item>
            </b-nav>
        </div>
        <b-container>
            <ul class="row ml-5 mr-5 mt-2">
                <li class="col-6 p-4"
                        is="SmallCard"
                        v-for = "project in filteredProjects"
                        :key = "project.id"
                        :tags = "project.tags"
                        :title = "project.title"
                        :source = "project.source"
                        :img-source = "project.imgSource"
                ></li>
            </ul>
        </b-container>
        <h2 class="mt-5" id="github">Visit my <a target="_blank" href="https://github.com/PeanutButte7">Github</a> for more projects</h2>
    </div>
</template>

<script>
    import SmallCard from "../components/SmallCard";

    export default {
        name: 'portfolio',
        components: {
            SmallCard,
        },
        data () {
            return {
                activeTag: "all",
                projects: [
                    {
                        id: 1,
                        tags: ['program'],
                        title: "My site",
                        source: "/",
                        imgSource: "SmallCard_GPFC"
                    },
                    {
                        id: 2,
                        tags: ['design'],
                        title: "Logo Design for Parkour Prague",
                        source: "/gpfc",
                        imgSource: "SmallCard_GPFC"
                    },
                    {
                        id: 3,
                        tags: ['design'],
                        title: "Brand Design for Czech Company",
                        source: "/",
                        imgSource: "SmallCard_3DDarky"
                    },
                ]
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
    #github {
        text-align: center;

        a {
            text-decoration:none;
            transition: 250ms ease-in-out;
        }
    }

    ul {
        padding: 0;
    }

    .nav-pills a {
        font-weight: 700;
        color: white;
        position:relative;
        text-decoration:none;
        display:inline-block;
        transition: 250ms ease-in-out;
    }

    .nav-pills a:after {
        display:block;
        content: '';
        border-bottom: solid 2px white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin:50% 100%
    }
    .nav-pills a:hover:after {
        transform: scaleX(1);
        transform-origin: 50% 0%;
    }

    .nav-pills .nav-link.active {
        background-color: transparent;
        color: #007bff;
    }
</style>

