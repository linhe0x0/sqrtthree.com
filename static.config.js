import axios from 'axios'

const projects = [
  {
    name: 'comeon',
    desc: '🍺 Fast, simple, flexible, usefully command line tool for developers to open documents with the fastest way.',
    url: 'https://github.com/sqrthree/comeon',
  },
  {
    name: 'github-trending',
    desc: '🔥 Tracking the most popular GitHub repos.',
    url: 'https://github.com/github-trending/github-trending',
  },
  {
    name: 'awesome-npm-packages',
    desc: '🚀 A collection of awesome npm packages for Noders.',
    url: 'https://github.com/sqrthree/awesome-npm-packages',
  },
  {
    name: 'sqrthree.github.io',
    desc: '📝 My personal blog.',
    url: 'https://github.com/sqrthree/sqrthree.github.io',
  },
  {
    name: 'lite',
    desc: '🎨 A clean and delicate theme for blog based on Gatsby.',
    url: 'https://github.com/sqrthree/lite',
  },
  {
    name: 'toFixed',
    desc: '✂️ Formats a number using fixed-point notation.',
    url: 'https://github.com/sqrthree/toFixed',
  },
  {
    name: 'a-beginners-journey-to-golang',
    desc: '📝 A beginner\'s journey to GoLang',
    url: 'https://github.com/sqrthree/a-beginners-journey-to-golang',
  },
]

export default {
  siteRoot: 'http://sqrtthree.com', // Optional, but necessary for the sitemap.xml

  getSiteData: () => ({
    title: '根号三, INDEPENDENT WEB DEVELOPER',
    metaDescription: 'I firmly believe that we can change the world by creating valuable, free and easy-to-use software.'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home/index.js',
    },
    {
      path: '/oss',
      component: 'src/containers/OSS/index.js',
      getData: () => ({
        projects,
      }),
    },
    {
      is404: true,
      component: 'src/containers/NotFound/index.js',
    },
  ],
}
