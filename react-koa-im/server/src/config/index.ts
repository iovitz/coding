import * as processEnv from './process.env'
import DevConfig from './dev'
import ProdConfig from './prod'

Object.keys(processEnv).forEach(k => {
  const key = k as keyof typeof processEnv
  process.env[key] = processEnv[key] as any
})

export default DevConfig
