let express = require('express')
let bodyParser = require('body-parser') //用于req.body获取值的

let http = require('http')
let app = express()

app.use(require('cors')()) // 跨域请求
app.use(bodyParser.json())
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/roadmap', ((req, res) => {
    let path = req.body.path
    let station = req.body.station

    console.log(path + ' ' + station)
}))

app.listen(8081, '127.0.0.1')

