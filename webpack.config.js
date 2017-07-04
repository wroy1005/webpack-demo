var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            // title: The title to use for the generated HTML document.
            title: "HTML demo",
            //  The file to write the HTML to, base on output.path
            filename: "admin.html",
            // template:  Webpack require path to the template.
            template: "src/index.html",
            // Pass html-minifier's options as object to minify the output.
            minify: {
                // Collapse white space that contributes to text nodes in a document tree
                collapseWhitespace: false
            },
            // if true then append a unique webpack compilation hash to all included scripts and CSS files
            hash: true,
            // Allows you to add only some chunks (e.g. only the unit-test chunk)
            chunks: ['app']
        })
    ]
}