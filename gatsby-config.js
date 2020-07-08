module.exports = {
    siteMetadata: {
        title: `A Simple web template`,
        description: `Perfect for a small web portfolio.`,
        author: `Isiah Fletcher`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/`,
            },
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
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Cormorant Garamond`,
                        variants: [`400`, `500`, `700`],
                    },
                    {
                        family: `Montserrat`,
                        variants: [`400`, `500`, `700`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                queryLimit: 1000,
                // contentTypes: [``,``],
                // singleTypes: [],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
