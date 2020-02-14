<template>
    <div class="smallCard">
        <b-card-group>
            <b-card
                    class="col-5"
                    overlay
                    :img-src="require('@/assets/Portfolio/' + this.imgSource + '.png')"
                    img-alt="Card Image"
            >
            </b-card>
            <b-card
                    class="text-right"
                    footer-border-variant="light"
                    text-variant="dark"
                    :title="title"
                    :sub-title="description"
            >
                <template class="bg-danger" v-slot:footer>
                    <b-button class="align-self-end test" :to="source" variant="primary">View more</b-button>
                </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: 'smallCard',
        props: {
            title: {
                required: true,
                type: String
            },
            description: {
                required: false,
                type: String
            },
            source: {
                required: true,
                type: String
            },
            imgSource: {
                required: true,
                type: String
            },
            tags: {
                required: true,
                type: Array
            }
        },
        data () {
            return {
                publicPath: process.env.BASE_URL,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
