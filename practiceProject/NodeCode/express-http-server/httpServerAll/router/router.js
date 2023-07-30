const express = require('express')

const router = express.Router()


router.get('/list', (req, res) => {
    if (req.startTime < 0) {
        throw new Error('router time has problem... ' + req.startTime)
    }
    res.send('user list... ' + req.startTime)
})

router.get('/add', (req, res) => {
    res.send('user add... ' + req.startTime)
})

// GET接口
router.get('/get', (req, res) => {
    const query = req.query

    res.send({
        status: 0,
        msg: 'GET success',
        data: query,
    })
})

// POST接口
router.post('/post',  (req, res) => {
    const body = req.body

    res.send({
        status: 0,
        msg: 'POST success',
        data: body,
    })
})

router.post('/table/json', (req, res) => {
    console.log('json:')
    console.log(req.body)
    res.send(req.body)
})

router.post('/table/urlencoded', (req, res) => {
    console.log('urlencoded:')
    console.log(req.body)
    res.send(req.body)
})

module.exports = router