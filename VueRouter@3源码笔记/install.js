import View from './components/view'
import Link from './components/link'

// 存储vue实例对象
export let _Vue

export function install (Vue) {

  // 插件不重复注册
  if (install.installed && _Vue === Vue) return
  install.installed = true

  // 拿到vue实例对象
  _Vue = Vue

  // 变量是否定义
  const isDef = v => v !== undefined

  // 注册
  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  // 在beforeCreate生命周期中在 Vue 组件上挂载 router 和 route 对象
  Vue.mixin({
    beforeCreate () {

      // 如果是根节点
      if (isDef(this.$options.router)) {
        // 把当前实例挂载到 _routerRoot 上
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        // 不是根节点
        // 从父节点拿到 router 对象
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  // 给组件添加$router
  Object.defineProperty(Vue.prototype, '$router', {
    // 使用get，避免被修改
    get () { return this._routerRoot._router }
  })

  // 给组件添加$route
  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  // 注册路由组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
