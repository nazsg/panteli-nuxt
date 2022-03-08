export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    script: [
      {
        src: 'https://www.w3counter.com/tracker.js?id=132231',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_pan.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;700&family=Marck+Script&family=Quicksand&family=Tajawal&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filters', // tested ok
    '~plugins/bus',
    '~plugins/nazTest',
    '~plugins/core-components.js', // tested ok
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/vuetify'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://panteli.biz/',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.symlinks = false
    },
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  pageTransition: {
    // refers to ~assets/styles/main.css
    name: 'fade',
    mode: 'out-in',
  },
  // rootDir : '/',
  router: {
    // base: '/panteli-nuxt'
  },
}
