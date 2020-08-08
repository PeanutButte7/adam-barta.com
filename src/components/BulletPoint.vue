<template>
    <div id="bulletPoint" class="flex items-center mb-1">
        <svg width="10" height="11" viewBox="0 0 10 11" class="fill-current text-accent"  xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="10" height="10" rx="3"/>
        </svg>
        <span class="text-lg font-medium text-primary ml-3"><slot/></span>
    </div>
</template>

<script>
    export default {
        name: 'bulletPoint',
    }
</script>
