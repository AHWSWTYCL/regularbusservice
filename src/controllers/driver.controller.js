const url = require("url");
const Driver = require("../models/driver/driver");

class DriverController {
    async getDriver(ctx, next) {
        let params = url.parse(ctx.request.url, true)
        let line = params.query.line

        let result = {}
        try {
            let res = await Driver.find({line: line})

            if (res.length === 0) {
                result.code = -1
            } else {
                result.code = 1
                result.data = res[0]
            }

        } catch (err) {
            result.code = -1
        }

        ctx.body = result
    }
}

module.exports = new DriverController()
