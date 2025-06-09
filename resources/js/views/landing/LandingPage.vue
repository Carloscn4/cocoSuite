<template lang="">
    <div>
        <Hero />
        <Features />
        <DashboardPreview />
        <Benefits />
        <Pricing />>
    </div>
</template>
<script>
import Benefits from "./Benefits.vue";
import DashboardPreview from "./DashboardPreview.vue";
import Features from "./Features.vue";
import Hero from "./Hero.vue";
import Pricing from "./Pricing.vue";
export default {
    components: {
        Hero,
        Features,
        DashboardPreview,
        Benefits,
        Pricing,
    },
};
</script>
<style lang=""></style>
