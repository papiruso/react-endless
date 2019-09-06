const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.jsx',
    output: {
        path: path.join(__dirname),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: ['node_modules', 'src'],
    },
};
