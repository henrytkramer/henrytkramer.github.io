require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Henry Kramer Piano`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Wending Lu`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`, // manages changes to document head
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`, // maintains multiple responsive image sizes, lazy load
    {
      resolve: `gatsby-source-filesystem`, // repeat this for each "data source"
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // image assets
      },
    },
    `gatsby-transformer-yaml`, // yaml processing library
    {
      resolve: `gatsby-source-filesystem`, // repeat this for each "data source"
      options: {
        name: `data`,
        path: `${__dirname}/src/data`, // yml or static db assets
      },
    },
    `gatsby-transformer-sharp`,  // image processing library -- helper used by other plugins
    `gatsby-plugin-sharp`, // Sharp image processing library -- helper used by other plugins
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // GATSBY CALENDAR IS NOT IN USE .. failed experiment
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          '5n0ntlqbjd8c63lsbh6j9qac34@group.calendar.google.com',
        ],
        // options to retrieve the next 10 upcoming events
        // timeMin: (new Date()).toISOString(),
        // maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        apiKey: process.env.GOOGLE_API_KEY,
        credentials: require('./secret.json')
      }
    },
  ],
}
