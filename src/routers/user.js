const Router = require('koa-router')

const {getUserInfo, getRoadmap, updateRoadmap, cancel} = require('../controllers/user.controller')


const router = new Router()

router.get('/user', getUserInfo)

router.get('/roadmap', getRoadmap)

router.post('/roadmap', updateRoadmap)

router.post('/cancel', cancel)

module.exports = router
