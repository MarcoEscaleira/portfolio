module.exports = {
  siteMetadata: {
    siteUrl: "https://marcoescaleira.pt/",
    title: "Marco Escaleira",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "marcoescaleira.pt",
        short_name: "marcoe",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        icon: "src/images/logo.png",
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
    "gatsby-plugin-postcss",
  ],
};
