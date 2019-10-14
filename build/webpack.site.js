const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const src = `${__dirname}/../src`;

module.exports = {
  entry: {
    desktop: './docs/site/desktop/index.js',
    mobile: './docs/site/mobile/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_PUB_PATH || './',
    filename: '[name].build.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less', '.css'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': `${src}`,
      '@src': `${src}`,
      'assets': path.resolve(__dirname, '../assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
            less: ['vue-style-loader', 'css-loader', 'less-loader'],
            css: ['vue-style-loader', 'css-loader']
          }
        }
      },
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.md$/,
        use: ['vue-loader', path.resolve(__dirname, './md-loader/index.js')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/site/desktop/index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['desktop']
    }),
    new HtmlWebpackPlugin({
      template: './docs/site/mobile/index.html',
      filename: 'mobile.html',
      inject: 'body',
      chunks: ['mobile']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
};