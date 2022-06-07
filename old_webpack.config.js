const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 3000
    },
    mode: "development",
    entry: {
        main: './index.js'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
}