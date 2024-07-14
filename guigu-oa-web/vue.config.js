// 解决内网穿透，添加该文件
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 9090,
    hot: true,
    disableHostCheck: true,
  },
}
module.exports= {

	lintOnSave: false, // 禁用eslint
	
	devServer: {
		open: true,
		// 配置代理服务器
		proxy:{
			"/api": {
				target: "http://112.96.202.225",
				changeOrigin: true,
				pathRewrite: {
					"^/api" : ""
				}
			}
		}
	},
}