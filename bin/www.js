const app = require("../app");
const {APP_PORT} = require('../src/config/config.default')

app.listen(APP_PORT, '127.0.0.1', () => {
    console.log(`server is running on http://localhost:${APP_PORT}`)
})
