const express = require('express')


const app = express()

// // mw 是一个中间件函数
// const mw = function(req, res, next) {
//     console.log('调用中间件函数。。。')
//     // 把流转关系，转交给下一个中间件或路由 
//     // 传递个下一个中间件或路由
//     next()
// }

// // 全局生效的中间件
// app.use(mw)

//  全局生效的中间件 -- 简化版
app.use((req, res, next) => {
    console.log('This is a simple middleware function...')
    next()
})

// 路由
app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log("http://120.0.0.1:80 running...")
})