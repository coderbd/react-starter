const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        publicPath: "/",
    },
    resolve: {
        modules: ["node_modules", srcPath],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          inject: true,
          template: './client/index.html',
        }),
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
        }
      ]
    },
};
