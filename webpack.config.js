
const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const hwpCfg = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: `${__dirname}/src/template.html`
}); 

module.exports = {
  entry: `${__dirname}/src/entry.js`,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 6699
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }]
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`
  },
  plugins: [ hwpCfg ]
};
