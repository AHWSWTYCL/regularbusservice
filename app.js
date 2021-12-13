const Koa = require('koa')
const koaBody = require('koa-body')
const cors =  require('koa2-cors')

const app = new Koa()

// route
const roadmapRouter = require('./src/routers/roadmap')
const registerRouter = require('./src/routers/register')
const loginRouter = require('./src/routers/login')
const userRouter = require('./src/routers/user')
const driverRouter = require('./src/routers/driver')


app.use(cors()) // 跨域请求
app.use(koaBody())

// load the router module in the app
app.use(roadmapRouter.routes())
app.use(registerRouter.routes())
app.use(loginRouter.routes())
app.use(userRouter.routes())
app.use(driverRouter.routes())

module.exports = app

