<template>
    <div id="contacts">
        <b-container>
            <b-row align-v="center">
                <b-col>
                    <h3>you can reach me at </h3>
                    <h2>adam.barta404@gmail.com</h2>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'contacts',
        components: {
        }
    }
</script>

<style scoped lang="scss">
    #contacts, .container, .row{
        text-align: center;
        height: 100vh;
    }

    h2 {
        border-bottom: solid 2px white;
        display:inline-block;
    }

    h3 {
        font-weight: 400;
    }
</style>