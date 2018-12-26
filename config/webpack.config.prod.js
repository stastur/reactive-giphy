const MinifyPlugin = require('babel-minify-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const extractCss = new ExtractTextPlugin('static/css/normalize.css')
const extractScss = new ExtractTextPlugin('static/css/styles.css')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/../build',
    filename: 'static/js/bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [new MinifyPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  module: {
    rules: [
      {
        exclude: /\.(js|html|css|scss|jsx)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractScss.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: __dirname + '/../' }),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    extractCss,
    extractScss
  ]
}
