/*
webpake 的配置文件


*/
const path = require('path')

module.exports = {
    // entry: [
    //     app: ['babel-polyfill', './src/main.js']
    // ],
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    // baseUrl: 'vuePro/hlvy/',//github打包放开
    // baseUrl: './',
    // 将构建好的文件输出到哪里
    outputDir: 'jcs',

    chainWebpack: config => { //chainWebpack的链式操作
        //config就是Webpack的配置
        config.resolve.alias
            // .set(路径,绝对路径)
            .set("assets", path.join(__dirname, './src/assets'))
            .set("components", path.join(__dirname, './src/components'))


    },
    lintOnSave: true, //关闭语法 
    //前端跨域
    devServer: {
        //登录管理
        proxy: {
            "/apiBase": {
                // target: "http://192.168.0.101:8600", //目标源
                target: "http://192.168.0.254:8600", //内网 

                changeOrgin: true,
                pathRewrite: {
                    '^/apiBase': ''
                }
            },

        }
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: ` 
                @import "@/assets/custom_theme.scss";
                @import "@nutui/nutui/dist/styles/index.scss";
                `,
            }
        },
    }





}