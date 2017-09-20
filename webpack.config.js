const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].fonts.css');
const extractSCSS = new ExtractTextPlugin('[name].styles.css');

const srcPath  = path.join(__dirname, "/src");
const distPath = path.join(__dirname, "/dist");

module.exports = {
    watch: false,
    cache: false,
    devtool: "#cheap-module-eval-source-map",
    devServer: {
      contentBase: distPath,
      inline: true,
      port: 3000,
    },
    context: srcPath,
    entry: {
        app: "./client/index.js",
    },
    output: {
        path: distPath,
        filename: "index_bundle.js",
        publicPath: "/static/",
    },
    resolve: {
        modules: ["node_modules", srcPath],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        extractCSS,
        extractSCSS,
        new HtmlWebpackPlugin({
          inject: true,
          template: './client/index.html',
        }),
        new CopyWebpackPlugin([
            {from: '../public/img', to: 'img'}
          ],
          {copyUnmodified: false}
        )
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          enforce: "pre",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          enforce: "post",
          options: {
            presets: ["es2015", "react"],
          },
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(scss)$/,
          use: ['css-hot-loader'].concat(extractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {alias: {'../img': '../public/img'}}
              },
              {
                loader: 'sass-loader'
              }
            ]
          }))
        },
        {
          test: /\.css$/,
          use: extractCSS.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              // loader: 'url-loader'
              loader: 'file-loader',
              options: {
                name: './img/[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[hash].[ext]'
          }
        }
      ]
    },
};
