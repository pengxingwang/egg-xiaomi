'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542984541094_5475';

  // add your config here
  config.middleware = [];

  // 配置ejs
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  return config;
};
