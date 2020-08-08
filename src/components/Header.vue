<template>
    <div id="header" class="pt-10 pb-4">
        <h2 class="text-4xl font-semibold leading-tight text-primary"><slot/></h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
    }
</script>