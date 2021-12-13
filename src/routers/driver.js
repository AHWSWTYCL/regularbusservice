const Router = require('koa-router')
const {getDriver} = require('../controllers/driver.controller')


const router = new Router()

router.get('/driver', getDriver)

module.exports = router
