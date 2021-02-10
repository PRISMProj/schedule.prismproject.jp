const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/schedule.prismproject.jp/' : '',
  outputDir: path.resolve(__dirname, 'docs'),
  transpileDependencies: [
    'vuetify',
  ],
};
