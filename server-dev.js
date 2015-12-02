var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');
var settings = require('./settings');

new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, './src'),
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(settings.DEFAULT_PORT, settings.IP, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at ' + settings.IP + ':' + settings.DEFAULT_PORT);
});
