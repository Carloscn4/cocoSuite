<template>
  <div class="flex items-center space-x-3">
    <UIcon 
      name="i-heroicons-sun-20-solid" 
      class="w-4 h-4 text-yellow-500 transition-opacity duration-200"
      :class="{ 'opacity-50': currentTheme === 'dark', 'opacity-100': currentTheme === 'light' }"
    />
    
    <button
      @click="toggleTheme"
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      :class="currentTheme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'"
      role="switch"
      :aria-checked="currentTheme === 'dark'"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200"
        :class="currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'"
      />
    </button>
    
    <UIcon 
      name="i-heroicons-moon-20-solid" 
      class="w-4 h-4 text-blue-500 transition-opacity duration-200"
      :class="{ 'opacity-50': currentTheme === 'light', 'opacity-100': currentTheme === 'dark' }"
    />
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      currentTheme: 'light'
    }
  },
  computed: {
    isDark() {
      return this.currentTheme === 'dark'
    }
  },
  mounted() {
    this.initializeTheme()
  },
  methods: {
    initializeTheme() {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
          this.currentTheme = storedTheme
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.currentTheme = 'dark'
        }
        this.applyTheme()
      }
    },
    
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
      this.applyTheme()
    },
    
    applyTheme() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', this.currentTheme)
        document.documentElement.classList.toggle('dark', this.currentTheme === 'dark')
      }
      this.$emit('theme-changed', this.currentTheme)
    }
  }
}
</script>