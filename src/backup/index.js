module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        host: '127.0.0.1',
        port: 8080,
        proxyTable: {
            '/login/': {
                target: 'http://127.0.0.1:8000/',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,//如果需要跨域
                pathRewrite: {
                    '^/login': '',
                }
            }
        },
    }
}