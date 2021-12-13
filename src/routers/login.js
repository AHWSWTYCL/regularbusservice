const Router = require('koa-router')

const {login} = require('../controllers/login.controller')

const router = new Router()

router.post('/login', login)

module.exports = router
