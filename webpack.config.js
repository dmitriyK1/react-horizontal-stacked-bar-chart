const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "umd"),
        filename: "hsbar.min.js",
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|bower_components|build|umd)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "classic" }]
                        ],
                        plugins: ["@babel/plugin-proposal-object-rest-spread"]
                    }
                }
            }
        ]
    },
    externals: {
        react: "commonjs react",
        "react-dom": "commonjs react-dom"
    }
};
