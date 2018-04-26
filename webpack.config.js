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
            loader: 'less-loader' // compiles Less to CSS
        }]
    }
};

module.exports = {
    mode: 'none',
    plugins: []
}