const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports={

    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('_c',resolve('src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径

    },
    css: { // 配置css模块
        loaderOptions: { // 向预处理器 Loader 传递配置选项
            less: { // 配置less（其他样式解析用法一致）
                javascriptEnabled: true // 设置为true
            }
        }
    }
};