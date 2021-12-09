module.exports = {
  siteMetadata: {
    siteUrl: "http://www.isololcda.com.ng",
    title: "Isolo LCDA",
    author: "@Rashdev",
    description: "Isolo Local Government Development Council official website. It is a website designed and stationed by the chairman of Isolo LCDA to showcase his desire for technological driven society."
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
