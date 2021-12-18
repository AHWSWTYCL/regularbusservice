const User = require("../models/user/user");

class LoginController {
    async login(ctx, next) {
        let result = {}
        result.code = 1
        ctx.body = result
    }
}

module.exports = new LoginController()
