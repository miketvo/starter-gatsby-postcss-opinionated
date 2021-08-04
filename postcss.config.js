module.exports = {
  plugins: {
    "postcss-preset-env": {
      importFrom: "src/styles/global.module.css",
      features: {
        "custom-properties": true,
        "custom-media-queries": true,
        "custom-selectors": true,
      },
    },
  },
};
