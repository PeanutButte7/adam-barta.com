<template>
    <div class="smallCard">
        <b-card-group>
            <b-card
                    class="col-lg-5 col-12 p-0 m-0"
                    border-variant="light"
                    overlay
                    :img-src="require('@/assets/Portfolio/' + links.img)"
                    img-alt="Card Image"
            >
            </b-card>
            <b-card
                    class="text-right bottom-card"
                    footer-border-variant="dark"
                    bg-variant="dark"
                    border-variant="light"
                    text-variant="light"
                    :title="title"
                    :sub-title="description"
            >
                <template v-if="links.router || links.external !== null" v-slot:footer>
                    <b-button v-if="links.router != null" :to="links.router" variant="outline-light" size="sm">View more</b-button>
                    <b-button v-else :href="links.external" target="_blank" variant="outline-light" size="sm">
                        View more
                        <b-icon-box-arrow-up-right/>
                    </b-button>
                </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: 'smallCard',
        components: {
        },
        props: {
            title: {
                required: true,
                type: String
            },
            description: {
                required: true,
                type: String
            },
            links: {
                required: true,
                type: Object
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
    .bottom-card {
        margin-top: -0.4rem;
    }
</style>
