require('dotenv').config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'particle-libraries',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Registry for Particle firmware libraries'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/dotenv'],
  css: ['tachyons/css/tachyons.min.css'],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['particle-api-js'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
