let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')

const Roadmap = require('../models/roadmap/roadmap')
const User = require('../models/user/user')

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     logger.info('Time', Date.now().toLocaleString())
//     next()
// })

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

module.exports = router
