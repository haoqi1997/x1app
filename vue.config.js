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
    // baseUrl: './',
    // 将构建好的文件输出到哪里
    outputDir: 'jcsapp',

    chainWebpack: config => { //chainWebpack的链式操作
        //config就是Webpack的配置
        config.resolve.alias
            // .set(路径,绝对路径)
            .set("assets", path.join(__dirname, './src/assets'))
            .set("components", path.join(__dirname, './src/components'))
            .set("styleless", path.join(__dirname, './src/styleless'))


    },
    lintOnSave: true, //关闭语法 
    //前端跨域
    devServer: {
        //登录管理
        proxy: {
            // 系统和登录
            "/apiLoginSystem": {
                // target: "http://192.168.0.101:8600", //ip
                // target: "http://192.168.0.254:8600", //内网 
                target: "http://120.27.194.72:8600", //生产 
                changeOrgin: true,
                pathRewrite: {
                    '^/apiLoginSystem': '' //替换
                }
            },


        }
    },






}