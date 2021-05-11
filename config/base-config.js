const { isProd } = require('./env-helper');

module.exports = {
  outputDir: 'dist',
  publicPath: isProd ? '/' : '/',
  lintOnSave: false,
  filenameHashing: true,
  runtimeCompiler: false,
  productionSourceMap: false,
};
