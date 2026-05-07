// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  googleFonts: {
    families: {
      Nunito: [400, 600, 700, 800]
    },
    display: 'swap',
    download: false,
    preconnect: true,
    useStylesheet: true
  }
})
