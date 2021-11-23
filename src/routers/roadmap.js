let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')

const Roadmap = require('../models/roadmap/roadmap')

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
    let path = req.body.path
    let station = req.body.station

    logger.info(path + ' ' + station)
}))

module.exports = router
