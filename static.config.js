import axios from 'axios'

export default {
  // siteRoot: 'http://sqrtthree.com', // Optional, but necessary for the sitemap.xml

  getSiteData: () => ({
    title: '根号三 Independent Developer',
    metaDescription: 'I firmly believe that we can change the world by creating valuable, free and easy-to-use software.'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home/index.js',
      },
      {
        is404: true,
        component: 'src/containers/NotFound/index.js',
      },
    ]
  },
}
