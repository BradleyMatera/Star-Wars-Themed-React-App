const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
        mode,
        entry: "./src/index.js",
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: "babel-loader",
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            port: 3000,
            hot: true,
            open: true,
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
    };
};
