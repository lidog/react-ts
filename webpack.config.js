const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@Comp": path.resolve(__dirname, "./src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name][hash:base64:5]_[local]",
              },
              importLoaders: 2,
            },
          },
          "postcss-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./dist"),
    open: false,
    hot: true,
    quiet: true,
    port: 8020,
  },
};
