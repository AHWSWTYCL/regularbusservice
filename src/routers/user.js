let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')
let url = require('url')

const User = require('../models/user/user')
const Roadmap = require("../models/roadmap/roadmap");

router.get('/user', function (req, res) {
    let userInfo = url.parse(req.url, true)

    User.find({name: userInfo.query.name, password: userInfo.query.password}, (err, doc) => {
        let result = undefined
        if (err || doc.length === 0) {
        } else {
            result = doc[0]
            res.json(result)
        }
    })
})

router.get('/roadmap', ((req, res) => {
    Roadmap.find({}, (err, doc) => {
        if (err) {
            logger.info(err)
            return
        }

        res.json(doc)
    })
}))

router.post('/roadmap', ((req, res) => {
    let name = req.body.name
    let line = req.body.path
    let station = req.body.station
    let time = req.body.time

    User.updateOne({name: name}, {$set:{line: line, station: station, time: time}}, (err, raw) => {
        let result = {}
        if (err) {
            logger.error('更新' + name + '数据失败：' + err)
            result.code = -1
            res.json(result)
        } else {
            logger.info('更新' + name + '数据成功！')
            result.code = 0
            res.json(result)
        }
    })
}))

router.post('/cancel', function (req, res) {
    let name = req.body.name

    User.find({name: name}, (err, doc) => {
        let result = {}
        if (err || doc.length === 0) {
            result.code = -1
            result.message = '此用户不存在'
            res.json(result)
        } else {
            User.updateOne({name: name}, {$set: {line: '', station:'', time: ''}}, (err, raw) => {
                if (err) {
                    logger.error(err)
                } else {
                    result.code = 0
                    res.json(result)
                }
            })
        }
    })
})

module.exports = router
