const mongoose = require('mongoose')
const logger = require('../logs/logger')

mongoose.connect('mongodb://127.0.0.1:27017/roadmap', { useNewUrlParser: true }, (error => {
    if (error)
        logger.error(error)
    logger.info("mongodb连接成功.")
}))

module.exports = mongoose
