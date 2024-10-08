// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: '/nuxt-project/'
  },
  css: ['~/assets/style/main.scss'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  devtools: { enabled: false }
})
