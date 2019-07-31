const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const development = require('./webpack.development');
const production = require('./webpack.production');
const common = require('./webpack.common');

const commonConfig = merge([common]);

const productionConfig = merge([
  production,
  parts.extractCSS({
    use: 'css-loader',
  }),
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  development,
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
