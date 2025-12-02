const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "esm"),
        filename: "index.js",
        library: {
            type: "module"
        },
        clean: true
    },
    experiments: {
        outputModule: true
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
                    }
                }
            }
        ]
    },
    externals: {
        react: "react",
        "react-dom": "react-dom"
    }
};
