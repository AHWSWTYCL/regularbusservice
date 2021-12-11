let express = require('express')
let router = express.Router()
const {register} = require('../controllers/register.controller')

router.post('/register', register)

module.exports = router
