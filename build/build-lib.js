const path = require('path');
const webpack = require('webpack');

const components = require('./get-lib-entry.js');


const src = `${__dirname}/../src`;
const px2rem = {
  loader: 'px2rem-loader',
  options: {
    remUni: 37.5
  }
};

// const components = require('../components.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  entry: components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]/index.js',
    libraryTarget: 'umd',
    library: {
      root: 'gant',
      amd: 'gant',
      commonjs: 'gant'
    }
  },
  externals: {
    vue: 'vue',
    'vue-awesome-swiper': 'vue-awesome-swiper',
    'vue-lottie': 'vue-lottie'
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
        use: ExtractTextPlugin.extract({
          use: ['css-loader', px2rem]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader', px2rem]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }),
            css: ExtractTextPlugin.extract({
              use: ['css-loader'],
              fallback: 'vue-style-loader'
            })
          },
          postcss: [require('postcss-px2rem')({
            remUnit: 37.5
          })]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin({
      filename: '/[name]/style.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}]
      },
      canPrint: false
    })
  ]
};