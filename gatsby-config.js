// 'use strict'

module.exports = {
  siteMetadata: {
    title: 'mar-bi',
    subtitle: 'web & mobile developer',
    description: 'Marina Biletska, remote web and mobile developer',
    keywords: 'mar-bi, developer, remote, web development, mobile development, react, react native, java script',
    siteUrl: 'https://mar-bi.github.io',
    author: {
      name: 'Marina Biletska',
      url: 'https://twitter.com/mar_biletska',
      email: ''
    },
    navItems: [{ id: 'nav-portfolio', to: '/projects', name: 'Portfolio' }, { id: 'nav-blog', to: '/articles', name: 'My Blog' }]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
