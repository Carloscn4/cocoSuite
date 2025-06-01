<template>
    <UApp>
        <UMain>
            <Navbar />
            <RouterView />
        </UMain>
    </UApp>
</template>
<script>
import Navbar from './components/Navbar.vue';
import LandingPage from './landing/LandingPage.vue';


export default {
    components: {
        Navbar,
        LandingPage
    },
};
</script>