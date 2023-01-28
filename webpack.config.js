const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            // 目前打包好的檔案在本地端開啟，可以渲染 json 的資料；但上傳到 github page 時要多等一下。
            // 不需要加 json-loader
            // I found out that json-loader isn't necessary anymore in webpack version greater than or equal to 2.0. So you could remove the json-loader from your webpack config
            // https://stackoverflow.com/questions/49437048/module-parse-failed-unexpected-token-m-in-json-at-position-0
            // {
            //     test: /\.json$/,
            //     use: [{ loader: 'json-loader' }],
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    // 配置 loader (第一步)
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            // ReactDOM: 'react-dom',
        }),
    ],
    // 不要加下面這個，不然會 Uncaught ReferenceError: React is not defined
    // externals: {
    //     react: 'React',
    // },
}
