/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://localhost:3000',
  },
  polyfill: false,
  plugins: [
    'gatsby-plugin-remove-generator', //remove <meta name="generator" content="Gatsby">
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@src': path.join(__dirname, `src`),
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-LR5XFN93CN'],
        pluginConfig: {
          head: true,
        },
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
