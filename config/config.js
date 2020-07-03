/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:09:11
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 11:47:28
 */ 
const path = require("path");

module.exports = {
    assetsRoot: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    indexPath: path.resolve(__dirname, '../public/index.html'),
    appPath: path.resolve(__dirname, "../src"),
}