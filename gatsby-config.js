module.exports = {
  siteMetadata: {
    siteUrl: "https://escaleira.dev/",
    title: "Escaleira Dev",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "escaleira.dev",
        short_name: "escaleira",
        start_url: "/",
        background_color: "#F3F4F6",
        theme_color: "#F3F4F6",
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
  ],
};
