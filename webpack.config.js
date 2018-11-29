import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin'

export default {
    entry: './client/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        }),
        new LiveReloadPlugin()
    ]
};