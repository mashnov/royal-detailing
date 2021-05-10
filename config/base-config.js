const { isProd } = require('./env-helper');

module.exports = {
  outputDir: 'dist',
  publicPath: isProd ? '/royal-detailing/' : '/',
  lintOnSave: false,
  filenameHashing: true,
  runtimeCompiler: false,
  productionSourceMap: false,
};
