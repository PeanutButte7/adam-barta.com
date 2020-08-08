<template>
    <div id="skills">
        <Paragraph class="mt-10 lg:mt-16">I mainly focus on front-end web development and UI & UX design. I often work with frameworks such as Vue.js and TailwindCSS.</Paragraph>
        <Header>Web dev</Header>
        <Paragraph>I have almost 3 years of experience working with javascript, HTML, CSS, and modern frameworks.</Paragraph>
        <BulletPoint>HTML</BulletPoint>
        <BulletPoint>CSS - Tailwind, Bootstrap</BulletPoint>
        <BulletPoint>Javascript - Vue.js</BulletPoint>
        <Header>Design</Header>
        <Paragraph>I often create websites completely by myself and therefore have a lot of experience in designing functional and creative sites. I have also made several UI & UX designs and logos for my clients.</Paragraph>
        <BulletPoint>UX & UX design</BulletPoint>
        <BulletPoint>Logo design</BulletPoint>
        <Header>Video production</Header>
        <Paragraph>With more than 2 years of experience making videos for Czech gaming magazine <a href="https://indian-tv.cz/" target="_blank">Indian</a> I know quite a bit about editing and making a quality voice over.</Paragraph>
        <BulletPoint>Voice over (Czech or English)</BulletPoint>
        <BulletPoint>Sony Vegas</BulletPoint>
        <BulletPoint>Audacity</BulletPoint>
        <Header>Copywriting</Header>
        <Paragraph>Before I started making videos I spent more than 2 years writing articles. Because of that, I have a decent experience in copywriting and making scripts for videos.</Paragraph>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Paragraph from "@/components/Paragraph";
    import BulletPoint from "@/components/BulletPoint";

    export default {
        name: 'skills',
        components: {
            Header,
            Paragraph,
            BulletPoint
        }
    }
</script>