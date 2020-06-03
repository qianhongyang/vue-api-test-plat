module.exports = {
    devServer: {
        proxy: {
            "/login": {
                target: "http://127.0.0.1:8000/", // 改成自己的目标服务器
                secure: true, //接受对方是https的接口
                changeOrigin: true
            }
        }
    }}