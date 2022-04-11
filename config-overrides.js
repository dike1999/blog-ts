const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const resolvePath = (dir) => path.join(__dirname, dir);

const WebpackConfig = [
  addWebpackAlias({
    ['@']: resolvePath('src'),
  }),
];

module.exports = {
  webpack: override(...WebpackConfig),
};
