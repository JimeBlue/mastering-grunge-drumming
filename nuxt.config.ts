// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  devtools: { enabled: true },
  alias: { '@': resolve(__dirname, '/') },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
