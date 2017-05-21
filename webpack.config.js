/**
 * Created by zhaoyu on 16-11-22.
 */
var webpack = require("webpack");
var path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var config = {
    entry: APP_PATH + "/index.js",
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
        publicPath: '/dist/'
    },

    // Server Configuration options
    /*devServer: {
     hot: true, // Live-reload
     inline: true,
     port: 8080, // Port Number
     host: 'localhost', // Change to '0.0.0.0' for external facing server
     },*/

    module: {
        rules: [{
            include: APP_PATH,
            test: /src(\\|\/).+\.js?$/,
            exclude: [nodeModulesPath],
            loader: 'babel-loader'
            // when we have .babelrc , query is no need
            //query: {
            //   "presets": ["es2015", "react", "stage-2"]
            // }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
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
        //contentBase: BUILD_PATH,
        //stats: { colors: true },
        proxy:{
            '/api/*' : {
                target: 'http://localhost:8099/',
                changeOrigin: true,
                /* ignorePath: true,
                pathRewrite: {
                    '^/api': ''
                }*/
            }
        }
    },
    plugins: [
        // Allows error warnings but does not stop compiling.
        new webpack.NoEmitOnErrorsPlugin(),
        // open browser when start up
        new OpenBrowserPlugin({url : 'http://localhost:8080'}),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        }),
        // Transfer Files
        /*new TransferWebpackPlugin([
         {from: 'dist'},
         ], path.resolve(__dirname, 'src')),*/
        // Enables Hot Modules Replacement for nodejs
        // new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;