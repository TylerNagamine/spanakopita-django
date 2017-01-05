const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },
    output: {
        path: './',
        filename: 'dist/[name].bundle.js',
        publicPath: '/'
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
            './dist/img',
            './dist/js',
            './dist/style'
        ]),
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'app/index.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/img/*.*', to: 'dist/img', flatten: true }
        ])
    ]
};