<template>
    <div class="smallCard">
        <router-link :to=this.source>
            <b-card
                    :class="{ blur: isHovered }"
                    overlay
                    :img-src="require('@/assets/Portfolio/' + this.imgSource + '.png')"
                    img-alt="Card Image"
                    align="center"
                    title-variant="test"
                    text-variant="dark"
                    :title="isHovered ? title : ''"
                    :sub-title="isHovered ? description : ''"
                    @mouseover="isHovered = true" @mouseleave="isHovered = false"
            >
                <b-button class="mt-4" v-if="isHovered" pill href="#" variant="primary">Go somewhere</b-button>
            </b-card>
        </router-link>
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
                isHovered: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

    .blur img {
        -webkit-filter: blur(3px);
        filter: blur(3px);
        transition: 0.3s ease-out;
    }

    img {
        transition: 0.3s ease-out;
    }
</style>
