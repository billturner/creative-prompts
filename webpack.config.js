var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'assets/js/bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', '!css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/js/vendor.js'),
    new ExtractTextPlugin('assets/css/bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   comments: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  devServer: {
    port: 8181,
    historyApiFallback: true,
    contentBase: './'
  }
};
