const webpack = require("webpack")
const path = require("path")
const opn = require("opn")
const address = require("address")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const copyWebpackPlugin = require("copy-webpack-plugin")
const isProduction = process.env.NODE_ENV === "production"
const mode = isProduction ? "production" : "development"
const resolve = pathname => path.resolve(__dirname, pathname)
const port = 9000

module.exports = {
    mode,
    entry: {
        app: resolve("src/pages/main.js")
    },
    output: {
        filename: "[name].bundle_[hash:5].js",
        path: resolve("dist"),
        publicPath: "/"
    },
    devtool: !isProduction && "source-map",
    devServer: {
        port,
        host: "0.0.0.0",
        contentBase: resolve("static"),
        historyApiFallback: true,
        compress: true,
        hot: true,
        quiet: true,
        after () {
            opn(`http://${address.ip()}:${port}`)
        }
    },
    resolve: {
        extensions: [".js", ".ejs"],
        alias: {
            "styles": resolve("src/styles"),
            "pages": resolve("src/pages"),
            "@": resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.js|ts|tsx$/,
                use: ["babel-loader"]
            },
            // {
            //     test: /\.ejs$/,
            //     loader: "ejs-loader"
            // },
            {
                test: /\.tpl\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.less|css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            globalVars: {
                                "@vw": "100 / 750vw"
                            }
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.jpg|png|gif|woff|woff2|eot|ttf|otf$/,
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: (module , chunks, key) => {
                return `vendor.${{
                    "default": "common",
                    "vendors": "node_module"
                }[key] || key}`
            }
        },
        runtimeChunk: {
            name: entrypoint => {
                return `runtime.${entrypoint.name}`
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        isProduction && new copyWebpackPlugin([
            {
                from: resolve("static"),
                to: resolve("dist")
            }
        ]),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve("src/layout.html"),
            filename: "index.html",
            chunks: ["app", "vendor.node_module", "runtime.app"],
            base: "/",
            name: "app",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: mode,
                isProduction
            }
        })
    ].filter(item => !!item)
}
