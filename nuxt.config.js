const description = ''

module.exports = {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: '아파트 단지 이름 찾기',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: '아파트 단지 이름 찾기' },
      { hid: 'og:description', name: 'og:description', content: description },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#0055aa' },
  /*
   ** Plugins
   */
  /*
   ** Modules
   */
  modules: ['nuxt-purgecss'],
  /*
   ** CSS
   */
  css: ['leaflet/dist/leaflet.css'],
  /*
   ** PurgeCSS config
   */
  purgeCSS: {
    enabled: true,
    whitelistPatterns: [/leaflet/],
  },
  router: {
    base: process.env.DEPLOY_ENV == 'DEV' ? '' : '/danji-finder/',
  },
  build: {
    /*
     ** Extract CSS in main chunk to separate cachaeble CSS file
     ** per https://github.com/nuxt/nuxt.js/issues/3166#issuecomment-409004911
     */
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
