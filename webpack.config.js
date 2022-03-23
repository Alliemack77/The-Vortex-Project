const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development", 
    entry:  path.resolve(__dirname, './src/index.js'), 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js', 
        publicPath: "/"
    }, 
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }, 
        port: 3000, 
        open: true, 
        hot: true, 
        compress: true, 
        historyApiFallback: true
    }, 
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: 'babel-loader'

            }
            
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ]
   

}