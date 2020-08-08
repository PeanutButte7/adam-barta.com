<template>
    <div id="projects">
        <Project v-for="project in projects" :key="project.id" :header="project.header" :description="project.description" :image="project.image" :links="project.links"/>
    </div>
</template>

<script>
    import Project from "../components/Project";
    import eng from "../locales/eng";

    export default {
        name: 'projects',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Project,
        },
        data () {
            return {
                projects: eng.projects
            }
        }
    }
</script>
