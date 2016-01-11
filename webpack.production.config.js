var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var settings = require('./settings.json');

module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            inject: true,
            hash: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader?root=.!autoprefixer-loader?browsers=last 2 versions'
        }, {
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel',
            exclude: /(node_modules|bower_components|build|dist)/
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=' + settings.CSS.BASE64_SIZE_LIMIT + '&name=images/[hash:6].[ext]'
        }]
    }
};
