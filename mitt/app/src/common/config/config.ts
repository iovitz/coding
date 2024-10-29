const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'

const envConfig = {
  development: {
    baseUrl: 'http://localhost:28257/api'
  },
  production: {
    baseUrl: 'http://localhost:28257/api'
  }
}
const config = envConfig[env]
export default config
