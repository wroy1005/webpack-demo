var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
}