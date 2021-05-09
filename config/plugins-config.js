const path = require('path');
const WebpackBar = require('webpackbar');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const appName = 'RoyalDetailing';
const description = 'RoyalDetailing - detailing & car wash';

const faviconConfig = {
  logo: path.resolve(__dirname, './favicon.png'),
  cache: true,
  inject: true,
  mode: 'webapp',
  devMode: 'webapp',
  prefix: 'favicon/',
  background: '#404040',
  theme_color: '#404040',
  favicons: {
    appName: 'RoyalDetailing',
    description: 'RoyalDetailing - detailing & car wash',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      firefox: true,
      coast: true,
      windows: true,
      yandex: true,
    },
  },
};

const WebpackBarConfig = {
  name: appName,
  color: '#FFFFFF',
};

const notifierConfig = {
  title: appName,
  alwaysNotify: true,
  contentImage: path.resolve(__dirname, './favicon.png'),
};

const DuplicatesConfig = {
  emitErrors: true,
  verbose: true,
};

const CircularDependencyConfig = {
  failOnError: true,
  exclude: /node_modules/,
};

module.exports = {
  pluginOptions: {
    notifier: notifierConfig,
  },
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin(faviconConfig),
      new DuplicatesPlugin(DuplicatesConfig),
      new CircularDependencyPlugin(CircularDependencyConfig),
      new CaseSensitivePathsPlugin(),
      new WebpackBar(WebpackBarConfig),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
