var path = require( "path" );

//单入口
module.exports = {
  entry: path.resolve('./main1.js'),
  output: {
    filename: path.resolve('bundle.js')
  }
};
//多入口
// module.exports = {
//   entry: {
//     bundle1: './main1.js',
//     bundle2: './main2.js'
//   },
//   output: {
//     filename: '[name].js'
//   }
// };
