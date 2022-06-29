import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('database', 'username', 'password', {
  host: process.env.MYSQL_DOMAIN,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DBNAME,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功')
  })
  .catch(() => {
    console.log('连接失败')
  })
