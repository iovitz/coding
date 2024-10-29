import crypto from 'crypto-js'
import { Base64 } from 'js-base64'
import { getAliyunOssSecurityToken } from '../../request/config.request'

// 计算签名。
function computeSignature(accessKeySecret: string, canonicalString: string) {
  return crypto.enc.Base64.stringify(crypto.HmacSHA1(canonicalString, accessKeySecret))
}

export async function getFormDataParams(size = 1 * 1024 * 1024, expireTime = 2) {
  const date = new Date()
  date.setHours(date.getHours() + expireTime)
  const policyText = {
    expiration: date.toISOString(), // 设置policy过期时间。
    conditions: [['content-length-range', 0, size]]
  }
  const res = await getAliyunOssSecurityToken()
  const credentials = res.data
  const policy = Base64.encode(JSON.stringify(policyText)) // policy必须为base64的string。
  const signature = computeSignature(credentials.AccessKeySecret, policy)
  const formData = {
    OSSAccessKeyId: credentials.AccessKeyId,
    signature,
    policy,
    'x-oss-security-token': credentials.SecurityToken
  }
  return formData
}
