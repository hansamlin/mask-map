module.exports = {
  pathPrefix: `/mask-map`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `You can find number of mask from this map`,
    author: `Sam`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "maskdata",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "maskdata",
        // Url to query from
        url: "https://mask-data-farmer.herokuapp.com/graphql",
        refetchInterval: 60
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};