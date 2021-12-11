let express = require('express')
const {addStation, deleteStation} = require('../controllers/roadmap.controller')


let router = express.Router()

router.post('/add-station', addStation)

router.post('/delete-station', deleteStation)

module.exports = router
