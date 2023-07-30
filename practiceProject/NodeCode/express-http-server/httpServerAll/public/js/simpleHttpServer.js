// 1.导入express
const express = require('express')

// 2.创建文本服务器
const app = express()



// 对外提供静态文件
app.use(express.static('./public'))


// 4.监听客户端请求 GET和POST请求， 并响应客户端具体的内容
app.get('/user', (req, res) => {
    // 客户端发送：http://127.0.0.1:80/user

    res.send({ name: 'pf', age: '19', gender: '男'})
})

app.post('/user', (req, res) => {
    // 客户端发送：http://127.0.0.1:80/user

    res.send('请求成功。。。')
})

// 5.获取URL中携带的查询参数
app.get('/', (req, res) => {
    // 客户端发送：http://127.0.0.1:80/?name=pf&age=20

    // 通过 req.query 可以获取到客户端发送过来的 查询参数
    
    // ps: 默认情况下， req.query 是一个空对象

    // 客户端可以使用?name=pf&age=20 这种查询字符串形式，
    // 发送到服务器的参数
    // req.query.name  req.query.age

    console.log(req.query)
    console.log(req.query.name, req.query.age)

    res.send(req.query)

    /* req.query = 
    {
        "name": "pf",
        "age": "20"
    }
     */
})

// 6.获取URL中的动态参数
// ps: 这里的 :id 是一个 动态的参数
app.get('/user/:id', (req, res) => {
    // 客户端发送：http://127.0.0.1:80/user/:19

    // req.params 是动态匹配到的 URL 参数， 默认也是一个空对象
    console.log(req.params)
    
    res.send(req.params)
    /* req.params = 
    {
        "id": ":19"
    }
     */
})

// URL中的多个动态参数
app.get('/user/:id/:name', (req, res) => {
    // 客户端发送：http://127.0.0.1:80/user/:19/:pf

    // req.params 是动态匹配到的 URL 参数， 默认也是一个空对象
    console.log(req.params)
    
    res.send(req.params)

    /* req.params = 
    {
        "id": ":19",
        "name": ":pf"
    }
     */
})



// 3.启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

/**
 * 监听GET请求
    通过app.get()方法，可以监听客户端的GET请求
    app.get('请求URL', function(req, res) { 
        // req:请求对象（包含了所有的请求相关的属性和方法）
        // res:响应对象（包含了所有响应的相关的属性和方法）

        // 处理函数
        })
 */ 

/**
    监听POST请求
    通过app.post()方法，可以监听客户端的POST请求
    app.post('请求URL', function(req, res) { 
        // req:请求对象（包含了所有的请求相关的属性和方法）
        // res:响应对象（包含了所有响应的相关的属性和方法）

        // 处理函数
        })
 */