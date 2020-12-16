const path = require('path');
const HtmlWebpckPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.[hash].js',
    },

    plugins: [
        new HtmlWebpckPlugin({
            template: './index.html',
        })
    ],

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /{node_modules}/,
            loader: 'babel-loader',
        }]
    },

    devServer: {
        contentBase:path.join(__dirname, './release'),
        open: true, // 自动打开浏览器
        port: 8001,
    }
}