const express = require('express')


const app = express()


/**
 * 多个中间件之间，共享同一份req和res.基于这样的特性
    我们可以在上有的中间件中，统一为req或res对象添加
    自定义的属性和方法，供下游的中间件或路由进行使用
 */
app.use((req, res, next) => {
    req.startTime = Date.now()

    next()
})

// 路由
app.use('/', (req, res) => {
    res.send('Home apge ' + req.startTime)
})

app.use('/user', (req, res) => {
    res.send('User Page ' + req.startTime)
})


app.listen(80, () => {
    console.log("http://127.0.0.1:80 runing...")
})