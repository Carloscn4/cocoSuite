<template>
  <UHeader>
    <template #title>
      <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-500" />
      <h2 class="font-bold text-xl">Cocofy</h2>

    </template>

    <UNavigationMenu :items="computedLinks" />

    <template #body>
      <UNavigationMenu :items="computedLinks" orientation="vertical" class="-mx-2.5" />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton v-if="!isLoggedIn" to="/login">Login</UButton>
      <UPopover v-else>
        <UUser color="neutral" :avatar="{ src: '', alt: userName }" />

        <template #content>
          <div class="flex items-center gap-2 p-2">
            <UAvatar :name="userName" :avatar="{ src: '', icon: 'i-lucide-image' }" />
            <div>
              <span class="text-sm font-semibold">{{ userName }}</span>
              <p class="text-xs text-neutral-500">{{ user.position }}</p>
            </div>

          </div>
          <ULink to="/profile/settings" class="p-2">Settings</ULink>
          <UButton to="/logout" color="neutral" variant="link"
            class="mt-2 w-full text-neutral-500 hover:text-red-500 hover:bg-red-500/10 dark:text-neutral-400 dark:hover:text-red-400 dark:hover:bg-red-500/10">
            Logout
          </UButton>
        </template>
      </UPopover>
    </template>
  </UHeader>
</template>

<script>
import { store } from '@/storage/store';
import { mapState } from 'pinia';

export default {
  data() {
    return {
      publicLinks: [
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
      ],
      privateLinks: [
        {
          label: 'Dashboard',
          to: '/dashboard',
        },
        {
          label: 'Calendar',
          to: '/dashboard/calendar',
        },
        {
          label: 'Guests',
          to: '/dashboard/guests',
        },
        {
          label: 'Reports',
          to: '/dashboard/reports',
        }
      ]
    }
  },
  computed: {
    ...mapState(store, ['isLoggedIn', 'user']),
    userName() {
      return this.user?.name || 'User';
    },
    computedLinks() {
      const currentHash = this.$route.hash;

      const links = this.isLoggedIn ? this.privateLinks : this.publicLinks;

      return links.map(link => ({ ...link, active: link.to === currentHash }));
    }
  }
};
</script>
