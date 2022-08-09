const path = require('path')

export default (config) => {
    config.entry['bundle'] = path.resolve(__dirname, "./src/index.js"),
    config.output = {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: 'MyApp',
        libraryTarget: 'umd',
    }
}