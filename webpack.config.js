const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "umd"),
        filename: "hsbar.min.js",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            modules: path.join(__dirname, "node_modules")
        }
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
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                }
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
        },
    },
};
