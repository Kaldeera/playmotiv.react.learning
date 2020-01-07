const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const PolyfillInjectorPlugin = require('webpack-polyfill-injector')

module.exports = env => {

  return {
    mode: "development",
    devServer: {
      quiet: true
    },
    // devtool: 'source-map',
    entry: {
      app: `webpack-polyfill-injector?${JSON.stringify({
        modules: ['./src/index.js']
      })}!`
    },
    output: {
      path: path.resolve(__dirname, `${env}/dist`),
      filename: "[name].js",
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
        },
        {
          test: /\.(png|jpg|gif|mp3|wav|mp4|webm)$/,
          use: [{
              loader: 'file-loader'
          }]
        }
      ]
    },
    plugins: [
      new PolyfillInjectorPlugin({
        polyfills: [
            'Array.prototype.fill',
            'Array.prototype.find',
            'Array.prototype.findIndex',
            'String.prototype.startsWith',
            'Array.from',
            'Object.entries',
            'Object.values',
            //Hasta aqui los polyfills necesarios para react-spring
            
            'Object.assign', 
            'Promise',
        ],
          singleFile: true
      }),
      new CopyWebpackPlugin([{
        from: "./public/locales", to: "locales"
      }]),
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };
};
