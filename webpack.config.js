const path = require("path");
const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: "./src/main.ts", // Your entry TypeScript file
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new MonacoWebpackPlugin({
      languages: ["javascript", "css", "html", "typescript"], // Add any other languages you want to support
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          path.resolve(__dirname, "node_modules"), // Exclude files in node_modules directory
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      assert: require.resolve("assert/"),
      fs: false,
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory
    globalObject: "self", // Add this line to make Monaco Editor workers work correctly
  },
};
