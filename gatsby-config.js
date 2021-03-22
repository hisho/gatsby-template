/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
const {siteMeta} = require('./src/configs/siteMeta');
const path = require('path');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  siteMetadata: siteMeta,
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
