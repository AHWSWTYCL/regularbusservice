const Router = require('koa-router')
const {register} = require('../controllers/register.controller')
const {userValidator, verifyUser} = require('../middleware/auth.middleware')


const router = new Router()

router.post('/register',userValidator, verifyUser, register)

module.exports = router
