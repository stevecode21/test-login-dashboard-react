// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/client/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    //babel-loader permite comunicarse con webpack
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // plugins:[
    //     new MiniCssExtractPlugin({
    //         filename: 'index.css'
    //     })
    // ]
};