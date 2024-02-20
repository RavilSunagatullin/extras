// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/style.css'
  ],
  build: {
    extend(config, ctx) {
      config.resolve.alias['@'] = '@/components';
    }
  }
})
