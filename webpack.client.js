const { ReactLoadablePlugin } = require('react-loadable/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let config = {
    entry: './src/client',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        publicPath: '/'
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
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ReactLoadablePlugin({
            filename:  path.resolve(__dirname, 'dist', 'react-loadable.json'),
        })
    ]
}

module.exports = config