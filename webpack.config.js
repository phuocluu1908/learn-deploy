const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true, // Clears old build files from /dist on each build
  },
  mode: 'development',
  devtool: 'inline-source-map', // Enhances debugging with source maps
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3005,
    hot: true,  
  },
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Name of the main output file
    publicPath: '/learn-deploy/', // URL path for resources
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,          // Process .js and .jsx files
        exclude: /node_modules/,      // Exclude node_modules
        use: {
          loader: 'babel-loader',     // Use the Babel loader
          // Babel options can also be defined here or in .babelrc
        },
      },
      {
        test: /\.css$/,               // For handling CSS files
        use: ['style-loader', 'css-loader'],
      },
      // Add more loaders here as needed (e.g., images, fonts, Sass, etc.)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      favicon: false, 
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
