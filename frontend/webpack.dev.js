const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './main.ts'
    },
    output: {
        path: './dist/',
        filename: 'app/[name].bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss', '.html']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'ts-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new CleanWebpackPlugin([
            './dist/app'
        ]),
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './index.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/img/*.*', to: './dist/img', flatten: true }
        ])
    ]
};