module.exports = function(config, webpack, ctx) {
  config.module.loaders.push({
    test: /\.less$/,
    loader: 'less-loader',
    options: {
      modifyVars: {
        'primary-color': '#1da57a',
      },
    },
    enforce: 'pre',
  });
  config.externals['vue'] = { 
    commonjs: 'vue', 
    commonjs2: 'vue', 
    root: 'Vue', 
    amd: 'vue', 
  };
  config.externals['moment'] = { 
    commonjs: 'moment', 
    commonjs2: 'moment', 
    root: 'moment', 
    amd: 'moment', 
  };
};