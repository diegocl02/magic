var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src');

const commonConfig = {
    resolve: { extensions: ['.js', '.jsx'] },

    externals: { /*"jquery": "jQuery"*/ },

    plugins: [
    ],

    //devtool: "inline-source-map",
    //devtool: "inline-eval-cheap-source-map",

    cache: true,

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
            }
        ]
    }
}

var config_server = {
  name : "serverConfig",

  ...commonConfig,

  entry: __dirname + '/server.js',

  output: {
    filename: 'server.bundle.js',
    path: BUILD_DIR,
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    __dirname : false
  },

  target: 'node'
}

var config_client = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,

    filename: 'bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  node : {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module : {

      loaders : [
        {
          test : /\.jsx?$/,
          include : APP_DIR,
          loader : 'babel-loader'
        },
        {test: /\.css$/, loader: "style-loader!css-loader" },
        {test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader'},
        { test: /\.png$/, loader: "url-loader"},
        { test: /\.jpg$/, loader: "url-loader"},
        { test: /\.gif$/, loader: "url-loader"},
        { test: /\.json$/, loader: 'json-loader' },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
          // loader: "url?limit=10000"
          use: "url-loader"
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          use: 'file-loader'
        },
    ]

  },

};

module.exports = [config_client, config_server];
