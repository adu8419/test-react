/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:02:36
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 12:02:05
 */ 
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge.smart(baseConfig, {
    mode:"production",
    output: {
        filename: "js/[name].[contenthash:8].js"
    },
    plugins: [
        new CleanWebpackPlugin({
            // cleanOnceBeforeBuildPatterns: ["../dist/*"]
        })
    ]
    
})