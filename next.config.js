const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withFonts = require('next-fonts');

module.exports = withPlugins([[withSass], [withFonts]], {
  webpack(config, options) {
   return config;
  },
});