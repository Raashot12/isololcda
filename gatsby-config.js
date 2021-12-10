module.exports = {
  siteMetadata: {
    title: `Isolo LCDA`,
    description: `Isolo LCDA official website`,
    author: `@rashdev`,
    siteUrl: `https://www.isololcda.com.ng`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL ? "https://isololcdabackend.herokuapp.com" : "https://isololcdabackend.herokuapp.com",
        collectionTypes: [`articles`, `occassions`, `outings`, `blogs`, `blog-series`, `articles`, 'categories'],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
