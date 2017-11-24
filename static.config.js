import axios from 'axios'

export default {
  // siteRoot: 'http://sqrtthree.com', // Optional, but necessary for the sitemap.xml

  getSiteProps: () => ({
    title: '根号三',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home/index.js',
      },
      {
        path: '/about',
        component: 'src/containers/About/index.js',
      },
      {
        is404: true,
        component: 'src/containers/NotFound/index.js',
      },
    ]
  },
}
