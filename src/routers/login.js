const Router = require('koa-router')
const {userValidator, verifyLogin} = require('../middleware/auth.middleware')
const {login} = require('../controllers/login.controller')

const router = new Router()

router.post('/login', userValidator, verifyLogin, login)

module.exports = router
