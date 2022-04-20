import { createStore } from 'vuex'

export interface UserInfo {
  name?: string
  email?: string
  avatar?: string
  id?: string
  identity?: string
}

interface StateTypes {
  isAuthenticated: boolean
  userInfo: UserInfo
}

// 创建一个新的 store 实例
const store = createStore({
  state(): StateTypes {
    return {
      isAuthenticated: false,
      userInfo: {},
    }
  },
  getters: {
    isAuthenticated: (_: StateTypes) => _.isAuthenticated,
    userInfo: (_: StateTypes) => _.userInfo,
  },
  actions: {
    SET_AUTHENTICATED({ commit }, isAuthenticated) {
      commit('SET_AUTHENTICATED', isAuthenticated)
    },
    SET_USERINFO({ commit }, userInfo) {
      commit('SET_USERINFO', userInfo)
    },
  },
  mutations: {
    SET_AUTHENTICATED(_, isAuthenticated) {
      if (isAuthenticated) {
        _.isAuthenticated = isAuthenticated
      }
    },
    SET_USERINFO(_, userInfo) {
      if (userInfo) {
        _.userInfo = userInfo
      } else {
        _.userInfo = {}
      }
    },
  },
  modules: {},
})

export default store
