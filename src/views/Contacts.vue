<template>
    <div id="contacts">
        <b-container>
            <b-row align-v="center">
                <b-col>
                    <h3>you can reach me at </h3>
                    <h2>adam.barta404@gmail.com</h2>
                    <h3 class="mt-4">or on social media</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/adam-b%C3%A1rta-ab7822192/" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" size="2x"/></a>
                        <a class="ml-3" href="https://twitter.com/AdamBartaBart" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'twitter-square']" size="2x"/></a>
                        <a class="ml-3" href="https://www.facebook.com/profile.php?id=100008554363481" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'facebook-square']" size="2x"/></a>
                    </div>
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

    .icon {
        color: white;
    }

    .icon:hover {
        color: lightgrey;
    }
</style>