const baseConfig = require('./config/base-config');
const styleConfig = require('./config/style-config');
const serverConfig = require('./config/server-config');
const pluginsConfig = require('./config/plugins-config');

module.exports = {
  ...baseConfig,
  ...styleConfig,
  ...serverConfig,
  ...pluginsConfig,
};
