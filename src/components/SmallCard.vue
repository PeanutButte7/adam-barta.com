<template>
    <div class="smallCard">
        <b-card
                title-variant="card_title"
                overlay
                :img-src="`${publicPath}${imgSource}`"
                img-alt="Card Image"
                text-variant="dark"
                :title="isHovered ? title : ''"
                :sub-title="isHovered ? description : ''"
                @mouseover="isHovered = true" @mouseleave="isHovered = false"
        >
        </b-card>
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
            imgSource: {
                required: true,
                type: String
            },
            description: {
                required: false,
                type: String
            }
        },
        data () {
            return {
                publicPath: process.env.BASE_URL,
                isHovered: false
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .card-card_title{
    }
</style>
