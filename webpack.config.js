var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
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