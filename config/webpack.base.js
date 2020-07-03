/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:02:22
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 11:48:29
 */ 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const argv = require('yargs').argv;
const merge = require('webpack-merge');

const bundleAnalyzerReport = argv.report; // 根据命令参数是否含有 'report' 来决定是否生成报告
// 这个配置将合并到最后的配置中
const webpackConfig = {
  plugins: []
};
if (bundleAnalyzerReport) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.join(config.assetsRoot, './report.html')
  }));
}

module.exports = merge(webpackConfig, {
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        filename: '[name].bundle.js',
        path: config.assetsRoot,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(html)$/,
                        loader: "html-loader"
                    },
                    {
                        test: /\.(j|t)sx$/,
                        include: config.appPath,
                        use: [
                            {
                                loader: "babel-loader",
                                options: {
                                    cacheDirectory: true
                                }
                            },
                            "awesome-typescript-loader"
                        ]
                    },
                    {
                        test: /\.(css|sass)$/,
                        use: [
                            "style-loader",
                            "css-loader",
                            "sass-loader"
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.indexPath,
            title: "test react",
            inject: true,
            showError: true
        })
    ],
    resolve: {
        extensions: [".tsx", ".jsx", ".js", ".ts", ".json"],
        alias: {
            "@": config.appPath
        }
    }
})