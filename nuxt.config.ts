// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],

  tailwindcss: {
    configPath: './tailwind.config.ts'
  },

  googleFonts: {
    families: {
      Nunito: [400, 600, 700, 800],
      Rochester: [400]
    },
    display: 'swap',
    download: false,
    preconnect: true,
    useStylesheet: true
  }
})
