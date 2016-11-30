var path = require('path')

module.exports = {
  context: __dirname,
  entry: "./app/App.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}