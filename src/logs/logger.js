let log4js = require('log4js')

log4js.configure(
    {
        appenders: {
            console: {type: "console"},
            cheeseLogs: {type: "file", filename: "logs/cheese.log", category: "cheese"}
        },
        categories: {
            default: {appenders: ['console', 'cheeseLogs'], level: 'info'}
        }
    }
)

let logger = log4js.getLogger('cheese')

module.exports = logger
