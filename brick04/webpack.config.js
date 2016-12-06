//介绍htmlwebpack的基本使用，和js文件名［hash］和使用，还有简单说下［name］［id］的用处
//webpack－dev－server 和 open－browser-webpack-plugin
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: '[hash:4]_bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html',
      template: 'temp.html'
    }),
    new OpenBrowserPlugin({
      url:'http://localhost:8889'
    })
  ]
};
