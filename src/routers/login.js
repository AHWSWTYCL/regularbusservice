let express = require('express')
let router = express.Router()
let {login} = require('../controllers/login.controller')

router.post('/login', login)

module.exports = router
