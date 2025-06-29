const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:  'babel-loader',
                exclude: /node_modules/,    
                
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins:[new HtmlWebpackPlugin({ template: "./public/index.html"})],
}