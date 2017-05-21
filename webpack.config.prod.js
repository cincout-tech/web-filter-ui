/**
 * Created by zhaoyu on 16-11-22.
 */
var webpack = require("webpack");
var path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var config = {
    entry: APP_PATH + "/index.js",
    devtool: "source-map",
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
        publicPath: BUILD_PATH
    },
    module: {
        rules: [{
            test: /src(\\|\/).+\.js?$/,
            exclude: [nodeModulesPath],
            loader: 'babel-loader'
            /*query: {
                "presets": ["react", "es2015","stage-2"]
            }*/
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.less$/,
            use:[
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            loader: 'file'
        },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }]
    },
    devServer: {
        historyApiFallback: true,
        //hot: true,
        //inline: true,
        //progress: true,
        //contentBase: BUILD_PATH,
        proxy:{
            '/api/*' : {
                target: 'http://localhost:8099/',
                changeOrigin: true
                /*ignorePath: true*/
                /*pathRewrite: {
                 '^/api': ''
                 }*/
            }
        }
    },
    plugins: [
        /*new  webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: true,
                drop_console:false
            },
            comments: false,
            exclude: ['./~/react-flexbox-grid']
        }),*/
        new BabiliPlugin(),
        new webpack.LoaderOptionsPlugin({
                 minimize: true
        }),
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        // Transfer Files
        /* new TransferWebpackPlugin([
         {from: 'www'},
         ], path.resolve(__dirname, 'src')),*/
        // Enables Hot Modules Replacement
        //new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;