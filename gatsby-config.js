/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    name: 'サイトのタイトル',
    description: 'サイトの説明文',
    lang: 'ja',
    siteUrl: 'https://example.com/',
    locale: 'ja_JP',
  },
  polyfill: false,
  plugins: [
    // 'gatsby-plugin-remove-generator', //remove <meta name="generator" content="Gatsby">
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@src': path.join(__dirname, `src`),
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '11',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
