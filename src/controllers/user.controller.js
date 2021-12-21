const url = require('url')
const User = require("../models/user/user");
const Roadmap = require("../models/roadmap/roadmap");
const logger = require("../logs/logger");
const {getUserInfo, cancelLine} = require('../service/user.service')
const {getRoadmap, updateRoadmap} = require('../service/roadmap.service')

class UserController {
    async getUserInfo(ctx, next) {
        let userInfo = url.parse(ctx.request.url, true)
        const {name, password} = userInfo.query

        let result = undefined

        let res = await getUserInfo({name, password})
        if (res.length !== 0) {
            result = res[0]
        }

        ctx.body = result
    }

    async getRoadmap(ctx, next) {
        let res = await getRoadmap()
        ctx.body = res
    }

    async updateRoadmap(ctx, next) {
        let name = ctx.request.body.name
        let line = ctx.request.body.path
        let station = ctx.request.body.station
        let time = ctx.request.body.time

        let result = {}
        if (!name || !line || !station || !time) {
            result.code = -1
            ctx.body = result
            return
        }

        let res = await updateRoadmap({name, line, station, time})
        result.code = res === true ? 0 : -1
        ctx.body = result
    }


    async cancel(ctx, next) {
        let name = ctx.request.body.name

        let result = {}

        let res = await cancelLine(name)
        if (res) {
            result.code = 0
            ctx.body = result
        } else {
            result.code = -1
            result.message = '取消路线失败'
            ctx.body = result
        }
    }
}

module.exports = new UserController()
