module.exports = {
  runtimeCompiler: true,
  outputDir: './docs',
  filenameHashing: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: { sourceMap: true },
  publicPath: '',
  configureWebpack: config =>{
    config.output.filename = '[name].js'
    config.output.chunkFilename = '[name].js'
    // config.assetsPublicPath = '';

    config.plugins.forEach(({options = {}})=>{
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
  }
}