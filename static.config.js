import path from 'path'
import axios from 'axios'

export default {
  siteRoot: 'https://sqrtthree.com', // Optional, but necessary for the sitemap.xml

  getSiteData: () => ({
    title: '根号三, INDEPENDENT WEB DEVELOPER',
    metaDescription:
      'I firmly believe that we can change the world by creating valuable, free and easy-to-use software.',
  }),

  getRoutes: () => [
    {
      path: '/',
      template: 'src/containers/Home',
    },
    {
      path: 'oss',
      template: 'src/containers/OSS',
      getData: async () => {
        const response = await axios.get(
          'https://api.github.com/users/sqrthree/repos?sort=pushed'
        )
        const projects = response.data.filter((item) => !item.archived)

        return {
          projects,
        }
      },
    },
  ],
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
