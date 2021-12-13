const User = require("../models/user/user");

class RegisterController {
    async register(ctx, next) {
        const {name, password} = ctx.request.body

        let result = {};

        try {
            let res = await User.find({name: name, password})
            if (res.length === 0) {
                try {
                    await new User({name, password}).save()
                    result.code = 1
                } catch (err) {
                    result.code = -1
                }
            }
        } catch (err) {
            result.code = -1
        }

        ctx.body = result
    }
}

module.exports = new RegisterController()
