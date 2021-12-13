const Router = require('koa-router')
const {register} = require('../controllers/register.controller')


const router = new Router()

router.post('/register', register)

module.exports = router
