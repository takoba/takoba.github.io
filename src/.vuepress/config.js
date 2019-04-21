module.exports = {
  base: '/',

  title: "takoba.github.io",
  description: '',

  locales: {
    '/': {
      lang: 'ja',
    },
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ],
  ],

  dest: './docs',

  port: 8088,
}
