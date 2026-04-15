const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = {
  entry: './src/index.js', // Adjust this path if needed
  output: {
    globalObject: 'globalThis',
    path: path.resolve(__dirname, 'dist'),
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
  devtool: 'source-map',
};

const umdBaseConfig = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    library: {
      name: 'recombee',
      type: 'umd',
    },
  },
};

const minimizedConfig = {
  ...umdBaseConfig,
  output: {
    ...umdBaseConfig.output,
    filename: 'recombee-api-client.min.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/index.d.ts',
          to: 'recombee-api-client.d.ts',
        },
      ],
    }),
  ],
  mode: 'production',
};

const nonMinimizedConfig = {
  ...umdBaseConfig,
  output: {
    ...umdBaseConfig.output,
    filename: 'recombee-api-client.js',
  },
  mode: 'development',
};

const esmBaseConfig = {
  ...commonConfig,
  entry: './src/index.mjs',
  output: {
    ...commonConfig.output,
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

const esmMinimizedConfig = {
  ...esmBaseConfig,
  output: {
    ...esmBaseConfig.output,
    filename: 'recombee-api-client.min.mjs',
  },
  mode: 'production',
};

const esmNonMinimizedConfig = {
  ...esmBaseConfig,
  output: {
    ...esmBaseConfig.output,
    filename: 'recombee-api-client.mjs',
  },
  mode: 'development',
};

module.exports = [minimizedConfig, nonMinimizedConfig, esmMinimizedConfig, esmNonMinimizedConfig];
