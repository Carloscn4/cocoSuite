<template>
  <UHeader>
    <template #title>
      <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-500" />
      <h2 class="font-bold text-xl">Cocofy</h2>
      
    </template>

    <UNavigationMenu :items="computedLinks"/>

    <template #body>
      <UNavigationMenu :items="computedLinks" orientation="vertical" class="-mx-2.5" />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton to="/login">Login</UButton>
    </template>
  </UHeader>
</template>

<script>

export default {
  data() {
    return {
      links:[
        {
          label: 'Features',
          to: '#features',
        },
        {
          label: 'Benefits',
          to: '#benefits',
        },
        {
          label: 'Pricing',
          to: '#pricing',
        },
        {
          label: 'Contact',
          to: '#contact',
        }
      ]
    }
  },
  computed: {
    computedLinks(){
      const currentHash = this.$route.hash;

      return this.links.map(link => ({...link, active: link.to === currentHash}));
    }
    }
};
</script>
