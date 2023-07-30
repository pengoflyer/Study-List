
const express = require('express')

const app = express()
// 内部中间件--
// 配置解析 application/json 格式的请求体数据 (4.16.0之后才能使用)
// 通过 express.json() 这个中间件，来解析表单中的 JSON 格式的数据
app.use(express.json())

// 配置解析 URL-encoded 格式的请求体数据 (4.16.0之后才能使用)
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

// app.use((err, req, res, next) => {
//     res.send("err:"+err.message)
// })

app.listen(80, () => {
    console.log('http://127.0.0.1:80...')
})