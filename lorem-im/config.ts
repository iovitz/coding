const devConfig = {
  MYSQL_DOMAIN: 'ip9my.51ip.top',
  MYSQL_PORT: 3306,
  MYSQL_DBNAME: 'mysql8521956_db',
  MYSQL_USERNAME: 'mysql8521956',
  MYSQL_PASSWORD: '25O2kXOIma',
  DIALECT: 'mysql',
}

const prodConfig = {
  MYSQL_DOMAIN: 'ip9my.51ip.top',
  MYSQL_PORT: 3306,
  MYSQL_DBNAME: 'mysql8521956_db',
  MYSQL_USERNAME: 'mysql8521956',
  MYSQL_PASSWORD: '25O2kXOIma',
  DIALECT: 'mysql',
}

console.log('env', process.env)

const config = devConfig

export default config
