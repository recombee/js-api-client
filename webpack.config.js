const path = require('path');

const commonConfig = {
  entry: './src/index.js', // Adjust this path if needed
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'recombee',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

const minimizedConfig = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    filename: 'recombee-api-client.min.js',
  },
  mode: 'production',
  devtool: 'source-map', // Generates a source map for the minimized build
};

const nonMinimizedConfig = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    filename: 'recombee-api-client.js',
  },
  mode: 'development',
  devtool: 'source-map', // Generates a source map for the non-minimized build
};

module.exports = [minimizedConfig, nonMinimizedConfig];
