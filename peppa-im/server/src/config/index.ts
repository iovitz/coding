import * as processEnv from './process.env'

Object.keys(processEnv).forEach(k => {
  const key = k as keyof typeof processEnv
  process.env[key] = processEnv[key] as any
})

const devConfig = {}

const prodConfig = {}

export default devConfig
