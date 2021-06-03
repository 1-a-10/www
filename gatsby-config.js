module.exports = {
  siteMetadata: {
    title: "1 à 10",
    description:
      "Le 1 à 10 est un quiz pour jouer en famille ou entre amis. Chaque joueur doit s'auto-estimer sur un thème de la vie de tous les jours (fromage, bière, devinettes, etc...). Plus la note est haute, plus c'est difficile, mais plus tu gagnes de points !",
    siteUrl: "https://1a10.app",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
