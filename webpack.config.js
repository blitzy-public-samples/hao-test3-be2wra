const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './scripts/main.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // Set mode based on environment
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // Development server configuration
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },

  // Module rules for processing different file types
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  // Optimization settings
  optimization: {
    minimize: true
  }
};

// TODO: Review and adjust the Webpack configuration based on project-specific requirements
// TODO: Ensure all necessary loaders and plugins are installed and configured correctly
// TODO: Optimize the build process for both development and production environments
// TODO: Configure source maps for better debugging experience
// TODO: Set up code splitting if needed for better performance
// TODO: Implement asset optimization (e.g., image compression) if required
// TODO: Configure environment-specific variables using DefinePlugin
// TODO: Test the Webpack configuration with the project's actual files and dependencies