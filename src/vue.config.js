module.exports={
    devServer:{
        proxy:{
            "/json":{
             target:'http://120.26.78.130/wubo', 
             changeOrigin: true,
             pathRewrite: {
                '^/json': '/json'             //???
              }
            }
        }
    }
 }