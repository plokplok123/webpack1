let html = require("html-webpack-plugin");
let minicss = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new html({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new minicss({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}