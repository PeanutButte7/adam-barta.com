<template>
    <div id="skill">
        <b-card no-body class="mb-1 bg-dark">
            <b-card-header class="">
                <span class="h4"> {{ title }} </span>
                <b-button
                    v-if="skillItems !== null"
                    class="ml-3 mb-2"
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
                    <ul class="list-unstyled ml-4">
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
</style>