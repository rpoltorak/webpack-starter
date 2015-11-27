var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: ['./app'],
    output: {
        path: path.resolve('build'),
        publicPath: '/src/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'src'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};