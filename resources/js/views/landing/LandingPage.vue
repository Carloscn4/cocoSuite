<template lang="">
    <div>
        <Hero />
        <Features />
        <DashboardPreview />
    </div>
</template>
<script>
import DashboardPreview from './DashboardPreview.vue';
import Features from './Features.vue';
import Hero from './Hero.vue'
export default {
    components: {
        Hero,
        Features,
        DashboardPreview
    },
}
</script>
<style lang="">
    
</style>