const path = require("path");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const nodeExternals = require("webpack-node-externals");
const { NODE_ENV = "production" } = process.env;
const PORT = process.env.PORT;

module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  target: "node",
  mode: NODE_ENV,
  externals: [nodeExternals()],
  mode: NODE_ENV,
  watch: NODE_ENV === "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@config": path.resolve(__dirname, "./src/config/"),
      "@controllers": path.resolve(__dirname, "./src/controllers/"),
      "@db": path.resolve(__dirname, "./src/db/"),
      "@entities": path.resolve(__dirname, "./src/entities/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@dtos": path.resolve(__dirname, "./src/dtos/"),
    },
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: ["npm run run:dev"],
    }),
  ],
};
