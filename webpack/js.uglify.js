const webpack = require('webpack');
module.exports = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: true,
                    drop_console: true,
                    unsafe: true
                }
            })
        ]
    };
};
