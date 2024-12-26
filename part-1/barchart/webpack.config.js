import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js"


export default {
    mode : "development",
    devServer : {
        port : 1002
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name : "barchart",
            filename: "remoteEntry.js",
            exposes : {
                './barchart' : './src/bootstrap.js',
            }
        })

    ]
}