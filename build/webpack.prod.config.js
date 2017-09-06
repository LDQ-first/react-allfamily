const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const extractCSS = new ExtractTextPlugin({
    filename: 'css/main.[name].[contenthash:8].css'
})
const extractSASS = new ExtractTextPlugin({
    filename: 'css/sass.[name].[contenthash:8].css'
})

module.exports = (baseConfig, {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true //压缩
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /\.css$/],
                use: extractSASS.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            minimize: true //压缩
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
            test: /\.(png|svg|jpe?g|gif|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[sha512:hash:base64:7].[ext]',
                            minimize: true //压缩
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)((-|\?)?.*)?$/,
                include: /static\/css\/font/,
                loader: 'url-loader',
                options: {
                    name: 'css/font/[name].[hash:8].[ext]',
                    minimize: true //压缩
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        extractCSS,
        extractSASS,
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       })
    ]
})



