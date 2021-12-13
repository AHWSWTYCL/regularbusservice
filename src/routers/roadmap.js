const Router = require('koa-router')
const {addStation, deleteStation} = require('../controllers/roadmap.controller')


const router = new Router()

router.post('/add-station', addStation)

router.post('/delete-station', deleteStation)

module.exports = router
