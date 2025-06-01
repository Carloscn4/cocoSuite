<template>
  <header class="bg-white dark:bg-[#04070E] shadow-sm border-b border-gray-200 dark:border-gray-800 fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">

        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center gap-2" @click="scrollToTop">
            <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-500" />
            <span class="text-xl font-semibold whitespace-nowrap">Cocofly</span>
          </RouterLink>
        </div>

        <div class="flex-1"></div>

        <nav class="hidden md:block">
          <ul class="flex space-x-1">
            <li v-for="item in navigationItems" :key="item.section">
              <UButton
                :variant="activeSection === item.section ? 'solid' : 'ghost'"
                :color="activeSection === item.section ? 'primary' : 'gray'"
                @click="handleNavigateToSection(item.section)"
                :label="item.label"
                class="px-4 py-2 cursor-pointer"
              />
            </li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center space-x-4 ml-6">
          <ThemeToggle @theme-changed="onThemeChanged" />

          <UButton
            color="primary"
            variant="solid"
            label="Login"
            @click="handleLogin"
          />
        </div>

        <div class="flex items-center space-x-3 md:hidden ml-4">
          <ThemeToggle @theme-changed="onThemeChanged" />

          <UButton
            icon="i-heroicons-bars-3-20-solid"
            color="gray"
            variant="ghost"
            @click="toggleMobileMenu"
            aria-label="Open main menu"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          />
        </div>
      </div>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
    >
      <div class="px-4 py-3 space-y-2">
        <div v-for="item in navigationItems" :key="item.section">
          <UButton
            variant="ghost"
            color="gray"
            :label="item.label"
            class="w-full justify-start cursor-pointer"
            :class="{ 'text-primary-500 bg-primary-50 dark:bg-primary-950': activeSection === item.section }"
            @click="handleNavigateToSection(item.section, true)"
          />
        </div>

        <div class="pt-3 border-t border-gray-200 dark:border-gray-700">
          <UButton
            color="primary"
            variant="solid"
            label="Login"
            class="w-full"
            @click="handleLogin"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ThemeToggle from './common/ThemeToggle.vue';

export default {
  components: {
    ThemeToggle
  },
  data() {
    return {
      mobileMenuOpen: false,
      activeSection: 'inicio'
    };
  },
  computed: {
    navigationItems() {
      return [
        {
          label: 'Features',
          section: 'features'
        },
        {
          label: 'Benefits',
          section: 'benefits'
        },
        {
          label: 'Pricing',
          section: 'pricing'
        },
        {
          label: 'Contact',
          section: 'contact'
        }
      ];
    }
  },
  mounted() {
    this.setupScrollSpy();
    if (this.$route.path === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      this.$nextTick(() => {
        this.scrollToSection(sectionId); 
      });
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleLogin() {
      if (this.$router) {
        this.$router.push('/login');
      } else {
        alert('Redirigiendo al login...');
      }
    },

    scrollToTop() {
      if (this.$router && this.$route.path !== '/') {
        this.$router.push({ path: '/', hash: '' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.closeMobileMenu();
      this.activeSection = 'inicio';
    },

    async handleNavigateToSection(sectionId, closeMobileMenu = false) {
      if (closeMobileMenu) {
        this.mobileMenuOpen = false;
      }

      if (this.$router && this.$route.path === '/') {
        await this.$router.replace({ hash: `#${sectionId}` });
      } else {
        if (this.$router) {
          await this.$router.push({ path: '/', hash: `#${sectionId}` });
        } else {
          window.location.href = `/#${sectionId}`;
        }
      }
      this.activeSection = sectionId;
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });

      } else {
        console.warn(`Section with id "${sectionId}" not found for direct scroll.`);
      }
    },

    setupScrollSpy() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); 
      }
    },

    handleScroll() {
      const sections = [
        { id: 'inicio', element: document.getElementById('inicio') },
        ...this.navigationItems.map(item => ({
          id: item.section,
          element: document.getElementById(item.section)
        }))
      ].filter(section => section.element); 

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element.offsetTop <= scrollPosition) {
          this.activeSection = section.id;
          break;
        }
      }

      if (window.scrollY < 100) {
        this.activeSection = 'inicio';
      }
    },

    onThemeChanged(newTheme) {
      console.log('Tema cambiado a:', newTheme);
    },

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },

    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>