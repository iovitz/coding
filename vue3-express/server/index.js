const express = require('express')
const app = express()

// 验证token
const passport = require('passport')

// 操作 MongoDB 数据库
const mongoose = require('mongoose')

const db = require('./configs/keys').mongoURI

const port = process.env.port || 5000

const user = require("./routes/api/users")
const profiles = require("./routes/api/profiles")

// 链接数据库
mongoose.connect(db)
  .then((res) => {
    console.log('mongoDB connected')
  })
  .catch(err => {
    console.log(err)
  })

// 解析post参数
app.use(express.urlencoded())
app.use(express.json())

// passport初始化
app.use(passport.initialize())

// 将 passport 相关文件分离出去
require('./configs/passport')(passport)

app.use('/api/users', user)
app.use('/api/profiles', profiles)
app.get('/', (req, res) => {
  res.send('Server works.')
})

app.listen(port, () => {
  console.log('Server running in http://localhost:' + port)
})
