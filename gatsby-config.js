const path = require('path');
const config = require('./config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { siteMetadata } = config;

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-netlify-cache`,
    'gatsby-plugin-remove-generator', //remove <meta name="generator" content="Gatsby">
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
        types: path.join(__dirname, `types`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.analytics.trackingId,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        postCssPlugins: [require(`tailwindcss`), require(`autoprefixer`)({ grid: 'autoplace' })],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        description: siteMetadata.description,
        lang: siteMetadata.lang,
        start_url: `/?utm_source=homescreen`,
        background_color: '#333',
        theme_color: '#d23d29',
        // display: `standalone`,
        display: 'minimal-ui',
        icon: `static/icon.png`,
        // include_favicon: false,
        // theme_color_in_head: false
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
};
