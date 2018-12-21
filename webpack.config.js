
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const hwpCfg = new HtmlWebpackPlugin({
  filename: 'index.html'
}); 

module.exports = {
  entry: `${__dirname}/src/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`
  },
  plugins: [ hwpCfg ]
};
