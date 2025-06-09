<template lang="">
    <div>
        <Hero />
        <Features />
        <DashboardPreview />
        <CTA/>
        <Footer />
    </div>
</template>
<script>
import CTA from './CTA.vue';
import DashboardPreview from './DashboardPreview.vue';
import Features from './Features.vue';
import Footer from './Footer.vue';
import Hero from './Hero.vue'


export default {
    components: {
        Hero,
        Features,
        DashboardPreview,
        CTA,
        Footer,
    },
}
</script>
<style lang="">
    
</style>