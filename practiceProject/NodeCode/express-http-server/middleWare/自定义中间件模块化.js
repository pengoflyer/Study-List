// 自定义中间件模块化

const qs = require('querystring')

const customQs = (req, res, next) => {
    let str = ''
    req.on('data', (chuck) => {
        str += chuck
    })

    req.on('end', () => {
        let body = qs.parse(str)

        req.body = body
        next()
    })
}

module.exports = customQs