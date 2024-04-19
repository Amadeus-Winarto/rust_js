const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.ts', // Your entry TypeScript file
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'), // Exclude files in node_modules directory
        ]
      }
    ],
  },
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
      "fs": false
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
