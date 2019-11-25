const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  outputDir: './docs',
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: { sourceMap: true },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  publicPath: '',
  configureWebpack: config => {
    config.devtool = 'source-map';
    config.output.filename = '[name].js'
    config.output.chunkFilename = '[name].js'
    config.plugins.forEach(({ options = {} }) => {
      switch (options.filename) {
        case 'index.html':
          options.minify.collapseWhitespace = false;
          break;
        case 'css/[name].css':
          options.filename = '[name].css';
          options.chunkFilename = options.filename;
          break;
      }
    });

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({ test: /\.js$/ }))
    }

    config.module.rules = config.module.rules
      .filter(({ enforce }) => !enforce || enforce !== 'pre');
  }
}

