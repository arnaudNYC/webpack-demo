const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [new ErrorOverlayPlugin(), new webpack.HotModuleReplacementPlugin()],
};
