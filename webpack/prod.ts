/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
import projectConfig from '../src/configs';

const loaders = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      configFile: true, // ✅ 确保加载 .babelrc 或 babel.config.js
      cacheDirectory: true // 启用缓存
    }
    // options: {
    //   presets: [
    //     '@babel/preset-env',
    //     '@babel/preset-react',
    //     '@babel/preset-typescript'
    //   ]
    // }
  }, // 先解析ts和tsx，rule规则从下往上
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {}
      },
      'css-loader'
    ]
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'less-loader'
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '/static/[name]-[hash].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '/static/[name]-[hash].[ext]'
        }
      }
    ]
  }
];

const config = {
  resolve: {
    extensions: ['.ts', '.tsx', '.web.js', '.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, '../release'),
    filename: '[name].[chunkhash].js',
    // 如使用CDN
    // publicPath: "http://cdn.example.com/assets/[hash]/"
    // 如有使用import()动态加载的代码打包
    chunkFilename: '[name].bundle.js'
    // publicPath: projectConfig.staticUrl[(process.env.NODE_ENV || 'prod') as Env] // 生产要用
  },

  module: {
    rules: loaders
  },

  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      __MOCK: false,
      APP_ENV: JSON.stringify(process.env.APP_ENV)
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['release']
    }),
    new HtmlWebpackPlugin({
      title: projectConfig.htmlTitle,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        collapseInlineTagWhitespace: true
      },
      template: path.join(__dirname, '../public/index.html'),
      hash: true,
      alwaysWriteToDisk: true,
      favicon: path.join(__dirname, '../public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].min.css'
    })
    // new webpack.optimize.AggressiveMergingPlugin()
    // new BundleAnalyzerPlugin({ analyzerPort: 5593 }),
  ],

  // // 当包体积过大时(超250kb)，将展示一条错误(警告)
  // performance: {
  //   maxAssetSize: 1000000,
  //   hints: 'warning'
  // },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    },
    runtimeChunk: 'single'
  }
  // // 类似CommonsChunkPlugin拆分公共代码
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     // name: true,
  //     cacheGroups: {
  //       cached: {
  //         test: /[\\/]node_modules[\\/](react|react-dom|core-js)[\\/]/,
  //         chunks: 'all',
  //         name: 'cached',
  //         filename: 'cached.bundle.js' // 直接写死文件名，不加hash
  //       },
  //       vendors: {
  //         // 在output中加hash
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // }
};

module.exports = config;
