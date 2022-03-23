import { createApiItem } from '../../http/http'

const user = {
  login: createApiItem<{uname: string, upass: string}, {token: string, avatar: string}>('get', '/login')
}

export default user
