import config from '@/config'
import { Dialect, Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(config.MYSQL_DBNAME, config.MYSQL_USERNAME, config.MYSQL_PASSWORD, {
  host: config.MYSQL_DOMAIN,
  port: config.MYSQL_PORT,
  dialect: config.DIALECT as Dialect,
})

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log('======数据库连接成功')
  })
  .catch(() => {
    console.error('======数据库连接失败')
  })

export default sequelizeConnection
