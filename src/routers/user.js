let express = require('express')
let router = express.Router()
let logger = require('../logs/logger')

const User = require('../models/user/user')

router.get('/user', function (req, res) {
    let name = req.params.name
    let password = req.params.password

    User.find({name: name, password: password}, (err, doc) => {
        let result = {}
        if (err || doc.length === 0) {
            result.code = -1
            res.json(result)
        } else {
            result.code = 0
            result.data = doc[0]
            res.json(result)
        }
    })
})

module.exports = router
