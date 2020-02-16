<template>
    <div id="skill">
        <div class="mb-3 title-container">
            <span class="h5 mr-3">{{ title }}</span>
            <b-button v-if="button" class="title" to="/" variant="outline-light" size="sm">View projects made with {{ title }}</b-button>
        </div>
        <p class="text-muted mb-5"> {{ subtitle }} </p>
    </div>
</template>

<script>
    export default {
        name: 'skill',
        components: {
        },
        props: {
            title: {
                required: true,
                type: String
            },
            subtitle: {
                required: false,
                type: String
            },
            button: {
                required: true,
                type: Boolean
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        position: absolute;
        bottom: 0;
    }

    .title-container {
        position: relative;
    }
</style>