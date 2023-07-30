
const express = require('express')

const app = express()

// 1.导入路由模块
const router = require('./router')

// 2.注册路由模块
// 客户端发送：http://127.0.0.1:80/user/list
//            http://127.0.0.1:80/user/add
// app.use(router)

// 为路由模块统一添加前缀 /api
// 客户端发送：http://127.0.0.1:80/api/user/list
//            http://127.0.0.1:80/api/user/add
app.use('/api', router)

// PSPS：app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
    console.log('server running...')
})