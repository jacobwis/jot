module.exports = {
  plugins: [
    require('autoprefixer'),
    require('mq4-hover-shim').postprocessorFor({
      hoverSelectorPrefix: '.true-hover '
    }),
    require('postcss-font-family-system-ui')
  ]
};
