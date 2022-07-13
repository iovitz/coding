import tencentcloud from 'tencentcloud-sdk-nodejs'

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client

// 实例化要请求产品(以cvm为例)的client对象
const client = new CvmClient({
  // 腾讯云认证信息
  credential: {
    secretId: 'AKIDVwJhx1JQODsPmEVbv83ucAar0zocJrPp',
    secretKey: 'secretKey',
  },
  // 产品地域
  region: 'ap-shanghai',
  // 可选配置实例
  profile: {
    signMethod: 'TC3-HMAC-SHA256', // 签名方法
    httpProfile: {
      reqMethod: 'POST', // 请求方法
      reqTimeout: 30, // 请求超时时间，默认60s
    },
  },
})
