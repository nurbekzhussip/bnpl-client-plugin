const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default (config) => {
    config.entry['bundle'] = path.resolve(__dirname, "./src/index.js"),
    config.output = {
        path: path.resolve(__dirname, 'build'),
        filename: 'bnpl-plugin.[name].js',
        library: 'MyApp',
        libraryTarget: 'umd',
    }

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: "bnpl-plugin.css",
            ignoreOrder: false,
        })
    );
    //
    // config.module = {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: [MiniCssExtractPlugin.loader, "css-loader"],
    //         }
    //     ],
    // }
}