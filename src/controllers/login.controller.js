const User = require("../models/user/user");

class LoginController {
    async login(ctx, next) {
        const {name, password} = ctx.request.body
        let result = {}

        try {
            let res = await User.find({name: name, password})
            result.code = res.length === 0 ? -1 : 1
        } catch (err) {
            result.code = -1
        }

        ctx.body = result
    }
}

module.exports = new LoginController()
