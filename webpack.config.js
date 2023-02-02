const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)?$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      }
    ],
  },
};
