const { merge } = require("webpack-merge")
const common = require('./webpack.common');
const CopyPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "public" }
            ]
        })
    ]
});