const { ReactLoadablePlugin } = require('react-loadable/webpack')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const path = require('path')

let config = {
    entry: './src/client',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        publicPath: '/dist/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        }),
        new ReactLoadablePlugin({
            filename:  path.resolve(__dirname, 'dist', 'react-loadable.json'),
        })
    ]
}

module.exports = config;