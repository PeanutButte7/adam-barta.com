<template>
    <div class="smallCard border border-light">
        <img :src="" alt="Image">
        <h1>{{ headline }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'smallCard',
        props: {
            headline: {
                required: true,
                type: String
            },
            imgSource: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                image: this.imgSource
            }
        }
    }
</script>

<style lang="scss" scoped>
    .smallCard {
        height: 500px;
    }
</style>
