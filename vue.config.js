module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://lyp256.cn",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}