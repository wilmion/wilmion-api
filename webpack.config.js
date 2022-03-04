const path = require("path");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const nodeExternals = require("webpack-node-externals");
const { NODE_ENV = "production" } = process.env;

function getPlugins() {
  const plugins = [];

  if (NODE_ENV === "development") {
    plugins.push(
      new WebpackShellPluginNext({
        onBuildEnd: ["npm run run:dev"],
      })
    );
  }

  return plugins;
}

module.exports = {
  name: "express-server",
  entry: "./src/index.ts",
  target: "node",
  mode: NODE_ENV,
  externals: [nodeExternals()],
  watch: NODE_ENV === "development",
  optimization: { minimize: false },
  output: {
    libraryTarget: "commonjs",
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
      "@middlewares": path.resolve(__dirname, "./src/middlewares/"),
      "@Joi": path.resolve(__dirname, "./src/Joi/"),
      "@strategies": path.resolve(__dirname, "./src/strategies/"),
      "@models": path.resolve(__dirname, "./src/models/"),
      "@firebase": path.resolve(__dirname, "./src/firebase/"),
      "@swagger": path.resolve(__dirname, "./src/swagger/"),
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
  plugins: getPlugins(),
};
