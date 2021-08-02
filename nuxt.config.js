export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'topdev_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Bulma custom styles
    '@/assets/styles/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://topdev.herokuapp.com/api',
    // baseURL: 'http://localhost:3001/api',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  // Auth options
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/panel/profile'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
        // required: true,
        // type: 'Bearer'
        },
        user: {
          property: 'user'
        // autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: false,
          user: false
          // user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },
  // router: {
  //   middleware: ['auth']
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
