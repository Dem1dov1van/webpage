// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  router: {
    options: {
      hashMode: true
    }
  },
  srcDir: "src/",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    "@vueuse/nuxt",
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '100021991',
        webvisor: true,
      }
    ]
  ],
  css: [
    '~/css/reset.css',
    '~/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    editorSupport: true,
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          boxShadow: {
            'error': '0 0 0 4px rgb(248 113 113)',
            'focus': '0 0 0 4px #DADEE0'
          }
        }
      }
    },
  }
})