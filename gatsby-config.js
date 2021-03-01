module.exports = {
  siteMetadata: {
    title: "1 à 10",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "1 à 10",
        short_name: "1 à 10",
        start_url: "/",
        background_color: "#ff1351",
        theme_color: "#ff1351",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sitemap",
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
