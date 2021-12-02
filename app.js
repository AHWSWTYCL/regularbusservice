let express = require('express')
let bodyParser = require('body-parser') //用于req.body获取值的
let logger = require('./src/logs/logger')

// route
let roadmap = require('./src/routers/roadmap')
let login = require('./src/routers/login')
let user = require('./src/routers/user')

let http = require('http')
let app = express()

app.use(require('cors')()) // 跨域请求
app.use(bodyParser.json())
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

// load the router module in the app
app.use('/', roadmap)
app.use('/', login)
app.use('/', user)

app.listen(8081, '127.0.0.1')

