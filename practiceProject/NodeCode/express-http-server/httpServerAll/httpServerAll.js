
const express = require('express')

const app = express()

const router = require('./router/router')

// 解析json表单数据
// 配置解析 application/json 格式的请求体数据 (4.16.0之后才能使用)
// 通过 express.json() 这个中间件，来解析表单中的 JSON 格式的数据
app.use(express.json())
// 解析 url-encoded 表单数据
// 配置解析 URL-encoded 格式的请求体数据 (4.16.0之后才能使用)
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

// 托管静态文件
app.use(express.static('./public'))

// 自定义中间件使用 (获取访问时间)
app.use((req, res, next) => {
    req.startTime = Date.now()
    
    if (req.startTime <= 0) {
        throw new Error('middleware time has problem... ' + req.startTime)
    }

    next()
})

// CORS跨域资源共享
// 使用cors第三方中间件
const cors = require('cors')
app.use(cors())

// 注册路由
app.use('/user', router)

// 错误处理中间件 -- 要放在最后
app.use((err, req, res, next) => {
    if (err) {
        console.log("err middleware:" + err)
        res.send("err middleware:" + err.message)
    }
})

app.listen(80, () => {
    console.log("http:127.0.0.1:80 running...")
})