var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/public/index.html",
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    __dirname + "/app/main.jsx"
  ],
  module: {
    loaders: [
        {test: /\.jsx$/, exclude: /node_modules/, loader: "babel", query: {
          presets: ['es2015','react']
        }}
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/public'
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
  extensions: ['.js', '.jsx']
}
};