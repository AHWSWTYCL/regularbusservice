const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/config.default')
const User = require("../models/user/user");


const userValidator = async (ctx, next) => {
    const {name, password} = ctx.request.body

    if (!name || !password) {
        let result = {}
        result.code = -1
        ctx.body = result
        return
    }

    await next()
}

const verifyUser = async (ctx, next) => {
    const {name, password} = ctx.request.body
    let result = {}

    try {
        let res = await User.find({name: name, password})
        if (res.length > 0) {
            result.code = -1
            ctx.body = result
            return
        }
    } catch (err) {
        result.code = -1
        ctx.body = result
        return
    }

    await next()
}

const verifyLogin = async (ctx, next) => {
    const {name, password} = ctx.request.body
    let result = {}

    try {
        let res = await User.find({name: name, password})
        if (res.length === 0) {
            result.code = -1
            ctx.body = result
            return
        }
    } catch (err) {
        result.code = -1
        ctx.body = result
        return
    }

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
    verifyLogin
}
