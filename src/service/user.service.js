const User = require("../models/user/user");
const logger = require('../logs/logger')

class UserService {
    async getUserInfo({name, password}) {
        let res = null

        let where = {}
        name && Object.assign(where, name)
        password && Object.assign(where, password)

        try {
            res = await User.find(where)
        } catch (err) {
            logger.error(err)
        }

        return res
    }

    async cancelLine(name) {
        try {
            await User.updateOne({name: name}, {$set: {line:'', station:'', time:''}})
        } catch (err) {
            logger.error(err)
            return false
        }

        return true
    }
}

module.exports = new UserService()
