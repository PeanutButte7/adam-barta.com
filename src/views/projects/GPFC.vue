<template>
    <div class="gpfc">
        <b-img :src="require('../../assets/GPFC/Head.png')" fluid alt="GPFC Header" />
        <b-container>
            <b-row class="mt-4">
                <b-col cols="12" md="6" class="ml-md-4">
                    <b-img :src="require('../../assets/GPFC/Logo.svg')" fluid alt="GPFC Logo"/>
                </b-col>
                <b-col class="mr-md-4">
                    <h2>About the Brand</h2>
                    <p>GPFC - Gymnastic Parkour Freerun Club is a Czech company focused on making Parkour and Freerunning accessible to young people. The company had already established a small presence in the market but needed a more solid and polished design to grow.</p>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col class="ml-md-4">
                    <h2>The Rebranding Process</h2>
                    <p>As a part of the rebranding, a new website and logo were needed. I have created a logo with a clear silhouette so it’s recognizable no matter the color. Several variants were also made that can be used on merchandise or in other specific situations.</p>
                    <h3 id="requirementsHeadline" class="requirements mt-md-5">Requirements</h3>
                    <p class="requirements">The logo must include "Gymnastic Parkour Freerun Club" and has to feel energetic.</p>
                </b-col>
                <b-col cols="12" md="6" id="lines">
                    <b-img :src="require('../../assets/GPFC/LogoInverted.svg')" fluid alt="GPFC Inverted Logo"/>
                    <b-img :src="require('../../assets/GPFC/Logo2.svg')" fluid alt="GPFC Logo"/>
                </b-col>
            </b-row>
            <b-row class="mt-5 mt-md-0">
                <b-col cols="12" md="6" class="ml-md-4">
                    <h2>Clothing and Merchandise</h2>
                    <p>The main purpose of these designs is to distinguish trainers from kids. Black and white variant can also be used on other merchandise as it is designed to be very versatile.</p>
                </b-col>
            </b-row>
            <b-row id="merchandise">
                <b-col cols="12" md="4">
                    <b-img :src="require('../../assets/GPFC/SmallLogoGlitchBlue.svg')" fluid alt="GPFC Merchandise Blue"/>
                    <h4 class="mt-3">Boys T-Shirt</h4>
                </b-col>
                <b-col cols="12" md="4">
                    <b-img :src="require('../../assets/GPFC/SmallLogo.svg')" fluid alt="GPFC Merchandise"/>
                    <h4 class="mt-3">Trainers T-Shirt</h4>
                </b-col>
                <b-col cols="12" md="4">
                    <b-img :src="require('../../assets/GPFC/SmallLogoGlitchPink.svg')" fluid alt="GPFC Merchandise Pink"/>
                    <h4 class="mt-3">Girls T-Shirt</h4>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'gpfc',
        components: {
        }
    }
</script>

<style scoped lang="scss">
    .gpfc {
        background-color: white;
        color: black;
    }

    #lines {
        padding: 1.5rem 0 0 0;
        background-image: url("../../assets/GPFC/Lines.svg");
        background-size: cover;
        text-align: center;

        b-img {
            -webkit-box-shadow: 0px 12px 24px 0px rgba(0,0,0,0.4);
        }
    }

    .requirements {
        text-align: right;
    }

    #requirementsHeadline {
        padding: 3rem 0 0 0;
    }

    #merchandise {
        text-align: center;
    }

    @media (min-width: 720px) {
        #requirementsHeadline {
            padding: 5rem 0 0 0;
        }
    }
</style>

