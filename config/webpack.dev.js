/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:02:29
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 11:50:23
 */
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const config = require("./config.js");

module.exports = merge.smart(baseConfig, {
    mode: "development",
    output: {
        filename: "js/[name].[hash:8].js"
    },
    devServer: {
        port: 9000,
        contentBase: config.assetsRoot
    }
})