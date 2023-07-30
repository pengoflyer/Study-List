const express = require('express')

const app = express()

const mw = function(req, res, next){
    console.log('局部中间件用法')
    next()
}

const mw1 = (req, res, next) => {
    console.log("多个局部中间件用法")
    next()
}

// 路由

app.get('/', mw, (req, res) => {
    res.send('调用局部中间件')
})


app.get('/user', (req, res) => {
    res.send('user')
})

// 多个局部中间件的使用
app.get('/mutimwarr', [mw1, mw], (req, res) => {
    res.send('mutimwarr')
})

app.get('/mutimwlist', mw, mw1, (req, res) => {
    res.send('mutimwlist')
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80...')
})