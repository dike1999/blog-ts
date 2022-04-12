const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  addLessLoader,
  adjustStyleLoaders,
  fixBabelImports,
} = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dayjs = require('dayjs');
const path = require('path');
const resolvePath = (dir) => path.join(__dirname, dir);

const WebpackConfig = [
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    ['@']: resolvePath('src'),
  }),
  addWebpackPlugin(
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      filename: `index.${dayjs().format('YYYYMMDD.HHmmss')}.txt`,
    })
  ),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
];

module.exports = {
  webpack: override(...WebpackConfig),
};
