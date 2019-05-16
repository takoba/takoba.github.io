module.exports = {
  base: '/',

  title: "takoba",
  description: 'Software Engineer OR UX Designer.',

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
    [ 'meta', { 'http-equiv': "Content-Security-Policy", content: "default-src 'self' 'unsafe-eval' 'unsafe-inline'; img-src *; child-src 'none';" } ],
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
  },

  plugins: [
    [ 'feed', {
      canonical_base: 'https://takoba.github.io',
    } ],
  ],

  dest: './docs',

  port: 8088,

}
