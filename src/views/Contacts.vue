<template>
    <div id="contacts">
        <Header>Follow me</Header>
        <Paragraph>Want to stay up to date with my work? Follow me on <a href="https://twitter.com/AdamBartas" target="_blank">Twitter</a> or add me on <a href="https://linkedin.com/in/adam-bárta" target="_blank">LinkedIn</a> :)</Paragraph>
        <Header>Contact me</Header>
        <Paragraph>Need to contact me directly? No problem just let me know on <span class="font-medium">adam.barta404@gmail.com</span>.</Paragraph>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Paragraph from "@/components/Paragraph";

    export default {
        name: 'contacts',
        components: {
            Header,
            Paragraph
        }
    }
</script>
