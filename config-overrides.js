const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dayjs = require('dayjs');
const path = require('path');
const resolvePath = (dir) => path.join(__dirname, dir);

const WebpackConfig = [
  addWebpackAlias({
    ['@']: resolvePath('src'),
  }),
  addWebpackPlugin(
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      filename: `index.${dayjs().format('YYYYMMDD.HHmmss')}.txt`,
    })
  ),
];

module.exports = {
  webpack: override(...WebpackConfig),
};
