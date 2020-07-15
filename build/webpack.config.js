const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口文件
    entry: {
        base: [
            'react',
            'react-dom',
        ],
        main: path.join(__dirname, '../src/entry.tsx')
    },

    // 出口文件
    output: {
        path:path.join(__dirname,'./dist'),
        filename: '[name]-[hash].js',
    },

    // 打包规则
    module: {
        rules :[
            {
                test:/\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ]
            }
        ]
    },
    resolve : {
        extensions: ['.ts','.tsx', '.js'], // 前面的点忘了加上导致调试两三个小时
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/entry.html',
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
  
}