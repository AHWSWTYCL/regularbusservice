let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')

const Roadmap = require('../models/roadmap/roadmap')
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     logger.info('Time', Date.now().toLocaleString())
//     next()
// })

router.post('/add-station', function (req, res) {
    let line = req.body.line
    let name = req.body.name
    let time = req.body.time
    // TODO: 查重
    new Roadmap({line: line, station: name, time: time})
        .save(function (err, ret) {
            if (err) {
                logger.error(err)
            }
        })
})

router.post('/delete-station', function (req, res) {
    let stations = req.body.stations
    for (const station of stations) {
        Roadmap.deleteOne(station,
            function (err, ret) {
            if (err) {
                logger.error(err)
            }
        })
    }
})

module.exports = router
