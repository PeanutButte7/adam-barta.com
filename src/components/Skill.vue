<template>
    <div id="skill">
        <b-card no-body class="mb-1 bg-dark">
            <b-card-header class="pr-0 pl-0">
                <span class="h4"> {{ title }} </span>
                <b-button
                    v-if="skillItems !== null"
                    class="card-button ml-xl-3 ml-lg-3 ml-sm-0 mb-xl-2 mb-lg-2 mb-sm-0 mt-1"
                    size="sm"
                    variant="outline-light"
                    :aria-expanded="visible"
                    :aria-controls="id"
                    @click="visible = !visible">
                    View {{ visible ? "less" : "more" }}
                </b-button>
            </b-card-header>
            <b-collapse :id="id" v-model="visible">
                <b-card-body class="pt-2">
                    <ul class="list-unstyled ml-xl-4 ml-lg-4 ml-sm-0">
                        <li v-for="item in skillItems" :key="item.id">
                            <p><span class="mr-2"> / </span>{{ item }}</p>
                        </li>
                    </ul>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'skill',
        components: {
        },
        props: {
            id: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            },
            skillItems: {
                required: false,
                type: Array
            },
            button: {
                required: true,
                type: Boolean
            },
            active: {
                required: false,
                type: Boolean
            }
        },
        data () {
            return {
                visible: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/main";

    @media (max-width: $sm) {
        .h4 {
            font-size: 0.9rem;
        }

        .card-button {
            display: block;
        }
    }
</style>