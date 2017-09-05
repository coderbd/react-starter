var webpack = require('webpack'),
    path = require('path');

var srcPath  = path.join(__dirname, "/src"),
    distPath = path.join(__dirname, "/dist");

module.exports = {
    watch: false,
    cache: false,
    devtool: "#cheap-module-eval-source-map",
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
        new webpack.NoEmitOnErrorsPlugin()
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
