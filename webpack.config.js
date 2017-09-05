var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App', 
            template: './src/index.html', 
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'output.html' // base on dist
        })
    ]
}