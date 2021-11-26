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
    let path = req.body.path
    let station = req.body.station
    let time = req.body.time

    new User({name: name, line: path, station: station, time: time}).save().then(
        logger.info('add ' + name + ' ' + path + ' ' + station + ' ' + time)
    )
}))

module.exports = router
