const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const browserSyncOptions = {
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['public'] }
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new BrowserSyncPlugin(browserSyncOptions)
    ],
    target: 'node'
}