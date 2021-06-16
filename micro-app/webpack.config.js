const path = require('path');
const webpack = require('webpack');
const packageName = require('./package.json').name;
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        library: 'micro',
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 1489,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html'
        })
    ]
}