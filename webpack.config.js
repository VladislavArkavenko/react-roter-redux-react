const { ReactLoadablePlugin } = require('react-loadable/webpack')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const path = require('path')

let clientConfig = {
    entry: './src/client',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        publicPath: '/dist/'
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        })
    ]
}

let serverConfig = {
    entry: './src/server',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
}

module.exports = [clientConfig, serverConfig]