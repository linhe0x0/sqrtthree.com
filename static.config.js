import axios from 'axios'

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
      getData: async () => {
        const response = await axios.get('https://api.github.com/users/sqrthree/repos?sort=pushed')
        const projects = response.data.filter(item => !item.archived)

        return {
          projects,
        }
      },
    },
    {
      is404: true,
      component: 'src/containers/NotFound/index.js',
    },
  ],
}
