const redis = require("redis")
const { REDIS_CONF } = require('../config/db')

const logger = require('../logs/logger')

const redisClient = redis.createClient(REDIS_CONF)

redisClient.on('error', err => {
    logger.error(err)
})

function set(key, val) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }

    redisClient.set(key, val, redis.print)
}

function get(key) {
    const promise = new Promise(((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) return reject(err)
            if (val === null) {
                logger.info('get ' + key + ' value is null')
            }

            try {
                resolve(JSON.parse(val))
            } catch (error) {
                resolve(val)
            }
        })
    }))

    return promise
}

module.exports = {
    set,
    get
}
