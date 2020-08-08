<template>
    <div id="about">
        <Header>Who am I?</Header>
        <Paragraph>Hi, I'm <a href="https://twitter.com/AdamBartas" target="_blank">@AdamBartas</a>, a front-end web developer and UI & UX designer.</Paragraph>
        <Paragraph>On a side note, I'm also a writer, game critic, and video producer at Czech gaming magazine <a href="https://indian-tv.cz/" target="_blank">Indian</a>. The name comes from Indie as an Indie game... not as a nationality... confusing I know.</Paragraph>
        <Paragraph>On a side note, I also have a handful of experience making small games with C# in Unity. During game jams for example.</Paragraph>
        <Header>What am I working on?</Header>
        <Paragraph>Right now I'm studying while looking for commissions or part-time jobs.</Paragraph>
        <Paragraph>I also like to participate in any interesting projects that come up. That's also why I built a simple social network demo with Vue and Firebase or a Discord bot that can pull game reviews from a private API.</Paragraph>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Paragraph from "@/components/Paragraph";

    export default {
        name: 'about',
        components: {
            Header,
            Paragraph,

        }
    }
</script>