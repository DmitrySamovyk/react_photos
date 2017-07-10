const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/js/",
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css')
  ]
};