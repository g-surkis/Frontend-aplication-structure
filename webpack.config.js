var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        // options related to how webpack emits results

        path: __dirname + '/public', // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: "bundle.js", // string

    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
        }]
    },
    mode: 'none'
        // plugins: []
};