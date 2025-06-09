<template lang="">
    <div>
        <Hero />
        <Features />
        <!-- <DashboardPreview /> -->
        <Benefits />
        <Pricing />
        <CTA />
        <Footer />
    </div>
</template>
<script>
import Benefits from "./Benefits.vue";
import CTA from "./CTA.vue";
// import DashboardPreview from "./DashboardPreview.vue";
import Features from "./Features.vue";
import Footer from "./Footer.vue";
import Hero from "./Hero.vue";
import Pricing from "./Pricing.vue";
import CTA from "./CTA.vue";

export default {
    components: {
        Hero,
        Features,
        DashboardPreview,
        Benefits,
        Pricing,
        CTA,
        Footer,
    },
};
</script>
