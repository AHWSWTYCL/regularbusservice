let express = require('express')
let bodyParser = require('body-parser') //用于req.body获取值的

// route
let roadmap = require('./src/routers/roadmap')
let register = require('./src/routers/register')
let login = require('./src/routers/login')
let user = require('./src/routers/user')
let driver = require('./src/routers/driver')

let app = express()

app.use(require('cors')()) // 跨域请求
app.use(bodyParser.json())
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

// load the router module in the app
app.use('/', roadmap)
app.use('/', register)
app.use('/', login)
app.use('/', user)
app.use('/', driver)

module.exports = app

