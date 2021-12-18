const Koa = require('koa')
const koaBody = require('koa-body')
const cors =  require('koa2-cors')

const app = new Koa()

// route
const router = require('./src/routers')


app.use(cors()) // 跨域请求
app.use(koaBody())

// load the router module in the app
app.use(router.routes())

module.exports = app

