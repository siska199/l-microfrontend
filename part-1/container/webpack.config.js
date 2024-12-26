import HtmlWebpackPlugin from "html-webpack-plugin"
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js"

export default {
    mode : "development",
    devServer : {
        port : 1001
    },
    plugins : [
       new HtmlWebpackPlugin({
        template : "./public/index.html"
       }),
       new ModuleFederationPlugin({
            name : "container",
            filename: "remoteEntry.js",
            remotes : {
                barchart : "barchart@http://localhost:1002/remoteEntry.js",
            }
       })
    ]
}