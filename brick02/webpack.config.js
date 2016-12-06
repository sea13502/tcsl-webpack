//css-loader?modules less-loader sass-loader  

var webpack = require( "webpack" );
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules")},
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  plugins: [
      new ExtractTextPlugin("[name]123.css"),
      new webpack.optimize.UglifyJsPlugin({
       compressor:{
         warnings:false
       }
     })
  ]
};
