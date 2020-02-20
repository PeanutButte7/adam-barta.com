<template>
    <div id="skills">
        <b-container fluid class="pt-lg-5 pl-lg-5 pr-lg-5">
            <b-col cols="12" lg="8" xl="8">
                <div class="mt-lg-5 mt-xl-5 mt-3">
                    <ul class="p-0">
                        <li
                            is="Skill"
                            v-for="skill in skills"
                            :key="skill.id"
                            :id="skill.id.toString()"
                            :title="skill.title"
                            :skillItems="skill.skillItems"
                            :button="skill.button"
                        />
                    </ul>
                </div>
            </b-col>
        </b-container>
    </div>
</template>

<script>
    import Skill from "../components/Skill"
    import eng from "../locales/eng";

    export default {
        name: 'skills',
        components: {
            Skill
        },
        data () {
            return {
                skills: eng.skills
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>