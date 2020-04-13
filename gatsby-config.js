module.exports = {
    siteMetadata: {
        title: 'Pure JS Mousetip',
        description: 'A vanilla javascript solution for creating tooltips that follow your mouse',
        author: '@joeleisner',
        version: '3.0.0',
        siteUrl: 'https://mousetip.joeleisner.com',
        defaultImage: '/images/thumbnail.png',
        navigation: [
            {
                name:  'Start',
                path:  '/start',
                title: 'Getting started'
            },
            {
                name:  'Configuration',
                path:  '/configuration',
                title: 'Global configuration'
            },
            {
                name: 'Methods',
                path: '/methods'
            },
            {
                name:  'Attributes',
                path:  '/attributes',
                title: 'Local attributes'
            }
        ]
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'chassis-css',
                short_name: 'chassis',
                start_url: '/',
                background_color: 'rgb(120,50,255)',
                theme_color: 'rgb(120,50,255)',
                display: 'minimal-ui',
                icon: 'src/images/icon.png'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sitemap'
    ]
};