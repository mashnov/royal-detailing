require('dotenv').config();
const get = require('lodash/get.js');

const devNodeEnv = 'development';
const prodNodeEnv = 'production';

const env = process.env;
const nodeEnv = get(env, 'NODE_ENV', devNodeEnv);
const baseUrl = get(env, 'BASE_URL', null);

module.exports = {
  nodeEnv,
  baseUrl,
  isProd: nodeEnv === prodNodeEnv,
};


