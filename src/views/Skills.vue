<template>
    <div id="skills">
        <b-container fluid class="pt-5 pl-5 pr-5">
            <b-col cols="8">
                <h2>My skills</h2>
                <div class="mt-5">
                    <ul class="p-0">
                        <li
                            is="Skill"
                            v-for="skill in skills"
                            :key="skill.id"
                            :title="skill.title"
                            :subtitle="skill.subtitle"
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