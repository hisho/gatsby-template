/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://localhost:3000',
  },
  polyfill: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-remove-console',
      options: {
        exclude: ['error', 'warn'], // <- will be removed all console calls except these
      },
    },
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
        trackingIds: ['s'],
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
