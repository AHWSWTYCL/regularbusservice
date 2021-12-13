const url = require('url')
const User = require("../models/user/user");
const Roadmap = require("../models/roadmap/roadmap");
const logger = require("../logs/logger");

class UserController {
    async getUserInfo(ctx, next) {
        let userInfo = url.parse(ctx.request.url, true)

        let result = undefined
        try {
            let res = await User.find({name: userInfo.query.name, password: userInfo.query.password})
            if (res.length !== 0) {
                result = res[0]
            }
        } catch (err) {

        }

        ctx.body = result
    }

    async getRoadmap(ctx, next) {
        try {
            let res = await Roadmap.find({})
            ctx.body = res
        } catch (err) {
            logger.error(err)
        }
    }

    async updateRoadmap(ctx, next) {
        let name = ctx.request.body.name
        let line = ctx.request.body.path
        let station = ctx.request.body.station
        let time = ctx.request.body.time

        let result = {}
        try {
            let res = await User.updateOne({name: name}, {$set:{line: line, station: station, time: time}})
            logger.info('更新' + name + '数据成功！')
            result.code = 0
            ctx.body = result
        } catch (err) {
            logger.error('更新' + name + '数据失败：' + err)
            result.code = -1
            ctx.body = result
        }
    }

    async cancel(ctx, next) {
        let name = ctx.request.body.name

        let result = {}
        try {
            let res = await User.find({name: name})
            if (res.length === 0) {
                result.code = -1
                result.message = '此用户不存在'
                ctx.body = result
                return
            }

            try {
                await User.updateOne({name: name}, {$set: {line: '', station:'', time: ''}})
                result.code = 0
                ctx.body = result
            } catch (err) {
                logger.error(err)
            }
        } catch (err) {
            logger.error(err)
        }
    }
}

module.exports = new UserController()
