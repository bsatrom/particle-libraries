const DEV = process.env.NODE_ENV === 'development';

if (DEV) {
  require('dotenv').config();
}

module.exports = {
  /*
   ** Headers of the page
   */
  dev: DEV,
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
  env: {
    SECRET_KEY: process.env.SECRET_KEY || '1234',
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID || 'client_id',
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET || '123456'
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  modules: ['nuxt-oauth', '@nuxtjs/dotenv', 'bootstrap-vue/nuxt'],
  oauth: {
    sessionName: 'particleSession',
    secretKey: process.env.SECRET_KEY,
    oauthHost: process.env.OAUTH_HOST,
    oauthClientID: process.env.OAUTH_CLIENT_ID,
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
    moduleName: 'oauth',
    fetchUser: (accessToken, request) => {
      console.log('TOKEN: ', accessToken);
    }
  },
  css: ['tachyons/css/tachyons.min.css', '~/assets/transitions.css'],
  plugins: ['~/plugins/filters'],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['particle-api-js', 'axios', 'url-parse'],
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
