module.exports = {
  siteMetadata: {
    siteUrl: "http://www.isololcda.com.ng",
    title: "Isolo LCDA",
    author: "Rasheed Akanni Iskilu",
    description: "Isolo Local Government Development Council"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: "rashot",
        apiKey: "284966265657346",
        apiSecret: "5HjORMA20Ir1tKwavZE-YUEwWF8",
        resourceType: `image`,
        type: `type Value`,
        prefix: `abc-xyz/`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // queryLimit: 100,
        apiURL: process.env.DEPLOY_URL ? "https://backendlcdaisolo.herokuapp.com" : "http://localhost:1337",
        collectionTypes: [`articles`, `occassions`, `outings`],
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
