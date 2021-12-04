let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')
let url = require('url')
let Driver = require('../models/driver/driver')


router.get('/driver', function (req, res) {
    let params = url.parse(req.url, true)
    let line = params.query.line

    Driver.find({line: line}, (err, doc) => {
        let result = {}
        if (err || doc.length === 0) {
            result.code = -1;
            res.json(result)
        } else {
            result.code = 1
            result.data = doc[0]
            res.json(result)
        }
    })
})

module.exports = router
