const path = require('path');

module.exports = {
  entry: {
    login: './src/login.js',
    messenger: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../Backend/wwwroot/js/'),
    publicPath: "/js/",
  },
  mode: 'development',
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
              }
        },
        {
            test: /\.tsx?$/,
            use: [
                "babel-loader",
                "ts-loader"
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: ['null-loader']
        }
    ]
  }
};