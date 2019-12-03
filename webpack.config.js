const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = env => {

  return {
    mode: "development",
    devServer: {
      quiet: true
    },
    // devtool: 'source-map',
    entry: `./src/index.js`,
    output: {
      path: path.resolve(__dirname, `${env}/dist`),
      filename: "main.js",
      chunkFilename: '[id].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        },
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { 
              loader: "less-loader",
              options: {
                modifyVars: {
                  'hack': `
                    true; 
                    @import '~@ant-design/aliyun-theme/index.less';
                  `,
                },
                javascriptEnabled: true,
              },
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };
};
