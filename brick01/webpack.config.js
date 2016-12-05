//单入口
module.exports = {
  entry: './main1.js',
  output: {
    filename: 'bundle.js'
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
