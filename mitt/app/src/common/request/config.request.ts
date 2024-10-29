import request from './request'

export function getAliyunOssSecurityToken() {
  return request.get<{
    AccessKeyId: string
    AccessKeySecret: string
    SecurityToken: string
    Expiration: string
  }>('/config/ali_oss_secirity_token')
}
