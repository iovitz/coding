import appConfig from '@/config/app_config'
import { createHash } from 'crypto'
import { sign } from 'jsonwebtoken'

const PasswordSalt = appConfig.getConfig('password_salt')
const TokenKey = appConfig.getConfig('token_key')

export function getPasswordWithSalt(password: string) {
  const saltPassword = createHash('md5')
    .update(PasswordSalt + password)
    .digest('hex')
  return saltPassword
}

export function createToken<T extends {}>(data: T) {
  const token = sign(data, TokenKey)
  return token
}
