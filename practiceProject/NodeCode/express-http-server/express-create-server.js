/**
 * 创建express网页服务器步骤
 * 1、在express-http-server文件夹下执行命令获取express框架
 *        npm i express@4.17.1  [@版本号] [npm i :安装命令]
 * 2、在express-http-server文件夹下创建httpServer
 *    // 1.导入express
        const express = require('express')

        // 2.创建文本服务器
        const app = express()

        // 3.启动web服务器
        app.listen(80, () => {
            console.log('express server running at http://127.0.0.1')
        })
 *  3、监听GET请求
        通过app.get()方法，可以监听客户端的GET请求
        app.get('请求URL', function(req, res) { 
            // req:请求对象（包含了所有的请求相关的属性和方法）
            // res:响应对象（包含了所有响应的相关的属性和方法）

            // 处理函数
         })
 *  4、监听POST请求
        通过app.post()方法，可以监听客户端的POST请求
        app.post('请求URL', function(req, res) { 
            // req:请求对象（包含了所有的请求相关的属性和方法）
            // res:响应对象（包含了所有响应的相关的属性和方法）

            // 处理函数
         })
    
    5、把内容响应给客户端
         通过res.send()方法，可以把处理好的内容，发送给客户端
         app.get('/user', (req, res) => {
             res.send({ name: 'pf', age: 20, gender: '男' })
         })

         app.post('/user', (req, res) => {
             res.send('请求成功')
         })

    6、获取URL中携带的查询参数
         通过req.query对象，可以访问到客户端通过查询字符串的形式，
         发送到服务器的参数
         app.get('/', (req, res) => {
            // req.query 默认是一个空对象
            // 客户端可以使用?name=pf&age=20 这种查询字符串形式，
                发送到服务器的参数
            // req.query.name  req.query.age
            console.log(req.query)  
         })
    7、获取URL中的动态参数
         通过req.params对象，可以访问到URL中，通过:匹配到的动态参数
         app.get('/user:id', (req, res)=> {
            // req.params 默认是一个空对象
            // 里面存放着通过 : 动态匹配到的参数值 
            console.log(req.params)
         })

        // URL中的多个动态参数
        app.get('/user/:id/:name', (req, res) => {
            // 客户端发送：http://127.0.0.1:80/user/:19/:pf

            // req.params 是动态匹配到的 URL 参数， 默认也是一个空对象
            console.log(req.params)
            
            res.send(req.params)

            req.params = 
            {
                "id": ":19",
                "name": ":pf"
            }
            
        })

    
    8、托管静态资源
        1、express.static()
            exoress提供了一个非常好用的函数，讲座express.static(),
            通过它，我们可以非常方便地创建一个静态资源服务器，
            eg:通过如下代码就可以将public目录下的图片、CSS文件、JavaS
            文件对外访问了
            
            app.use(express.static('public'))
            
            现在就可以访问public目录中的所有文件
            http://localhost:3000/images/bg.jpg
            http://localhost:3000/css/style.css
            http://localhost:3000/js/login.js

            PSPS：客户端访问静态文件时，不需要在URL中添加public目录

            PS:Express在指定的静态目录中查找文件，并对外提供资源的访问路径
             因此，存放静态文件的目录名不会出现中URL中

        2、托管多个静态资源目录，请多次调用express.static()函数
        app.use(express.static('./public'))  // 托管当前目录下的public文件夹
        app.use(express.static('./file'))

        PS:当同时托管多个静态文件资源时， expres.static()函数会根据添加顺序查找所需的文件
        先查找第一个托管文件，如果找到，则停止查找，没找到，进行下一个托管静态资源文件夹中
        继续查找

        3、挂在路径前缀
            如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用
            
            app.use('/public', express.static('public'))

            现在就可以通过带有/public前缀地址来访问public目录中的所有文件
            http://localhost:3000/public/images/bg.jpg
            http://localhost:3000/public/css/style.css
            http://localhost:3000/public/js/login.js

    9、nodemon 自动重启工具
        1、安装 cmd中输入: npm i -g nodemon  // 全局安装
        2、nodemon app.js  启动服务
        3、修改app.js文件，ctrl+s保存时，nodemon会自动重启服务
            （执行一遍node app.js）
    
    10、express路由
        1、路由：广义上讲，就是映射关系

        2、express中的路由
            在express中，路由指的是客户端的请求与服务器处理函数之间的映射关系
            express中的路由分3部分组成，分别是请求类型、请求的URL地址、处理函数
            
            app.METHOD(PATH, HANDLER)

            请求类型: METHOD: app.get()  app.post()  
            请求的URL地址: PATH: 
            处理函数: HANDLER  
        
        3、路由的匹配过程
            每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，
            才会调用对应的函数

            在匹配时，会按照路由的定义的先后顺序进行匹配
            只有请求类型和请求的URL同时匹配成功，
            才会调用对应的处理函数。
        
        4、模块化路由
            路由抽离为单独木块的步骤如下：
            a、创建路由模块对应的.js文件
            b、调用express.Router()函数创建路由对象
            c、想路由对象上挂载具体的路由
            d、使用module.exports向外共享路由对象
            e、使用app.use()函数注册路由模块

            // 路由模块
            // 1. 导入express
            const express = require('express')

            // 2.创建路由对象
            const router = express.Router()

            // 3.挂载具体的路由

            router.get('/user/list', (req, res) => {
                res.send('get user list')
            })

            router.post('/user/add', (req, res) => {
                res.send('add user list')
            })

            // 4.向外导出路由对象
            module.exports = router

        5、注册路由模块
        // 导入路由模块
        const useRouter = require('./router/user.js')
        // s使用 app.use() 注册路由模块、
        app.use(userRouter)

        6、为路由模块添加前缀
            类似于托管静态资源，为静态资源同意挂载访问前缀一样
            1、导入路由模块
                const userRouter = require('./router/user.js')
            2、使用app.use() 注册路由模块，并添加同意的访问前缀 /api
                app.use('/api', userRouter)

    11、中间件
        1、中间件的作用：对客户端的一次请求进行预处理  、
        
        2、中间件的格式：相较于路由格式，多了一个next函数
        app.get('/', function(req, res, next) {
            next()
        })

        3、next() 函数是实现多个中间件连续调用的关键，
            它表示把流转关系转交给下一个中间件

            //  全局生效的中间件 -- 简化版
            app.use((req, res, next) => {
                console.log('This is a simple middleware function...')
                next()
            })
        
        4、中间件的作用
            多个中间件之间，共享同一份req和res.基于这样的特性
            我们可以在上有的中间件中，统一为req或res对象添加
            自定义的属性和方法，供下游的中间件或路由进行使用

        5、使用中间件注意事项
            a、中间件使用必须在路由注册(app.use())前才生效
            b、可以使用多个中间件
            c、最后必须调用next() 函数
            d、next()函数后不要再写代码
            e、连续多个中间件共享req和res对象
        
        6、第三方中间件 【按需下载并配置第三方中间件】
            a、运行 npm install body-paeser 安装中间件
            b、使用 require 导入中间件
            c、调用 app.use() 注册并使用中间件
*/      