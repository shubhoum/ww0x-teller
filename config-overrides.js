const webpack = require("webpack");
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve("url"),
        fs: false,
        assert: require.resolve("assert"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
        zlib: require.resolve("browserify-zlib"),
        vm: require.resolve("vm-browserify"),
        worker_threads: false,
        module: false,
        process: require.resolve("process/browser"),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        })
    );

    return config;
};
