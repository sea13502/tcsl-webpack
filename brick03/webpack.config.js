//url-loader使用的时候加载图片需要依赖file-loader
//增加string-loader,引入html片段
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.html$/,exclude:/node_modules/,loader:'string' }
    ]
  }
};
