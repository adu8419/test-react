/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:02:36
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 15:32:26
 */
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge.smart(baseConfig, {
    mode: "production",
    output: {
        filename: "js/[name].[contenthash:8].js"
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(css|scss)$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: {
                                    modules: false
                                }
                            },
                            {
                                loader: "postcss-loader"
                            },
                            "sass-loader"
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            dangerouslyAllowCleanPatternsOutsideProject: true,
            cleanOnceBeforeBuildPatterns: ["../dist/**"],
            dry: false
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: true ? { map: { inline: false } } : {}
            })
        ]
    }

})
