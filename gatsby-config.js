module.exports = {
  siteMetadata: {
    title: "frontend-dev-test"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Material Icons", "Poppins:400,600,700"],
        display: "swap"
      }
    }
  ]
};
