const express = require('express')

const app = express()

const custom_qs = require('./自定义中间件模块化')

app.use(custom_qs)

// // querystring 解析请求体数据
// const qs = require('querystring')

// app.use((req, res, next) => {
//     let str = ''
//     req.on('data', (chunk) => {
//         str += chunk
//     })

//     req.on('end', () => {
//         console.log(str)
        
//         //解析请求体数据 
//         let body = qs.parse(str)
//         console.log(body)

//         // 将解析的数据挂载到req.body上
//         req.body = body
//         next()
//     })
// })

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80 running ...')
})