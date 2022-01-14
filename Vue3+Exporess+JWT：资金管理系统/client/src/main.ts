import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-CN'
import 'element-plus/dist/index.css'
import router from '@/router'
import store from '@/store'
import api from '@/api'

const vm = createApp(App)

// 把axios绑定到全局
vm.config.globalProperties.$http = api
vm.use(ElementPlus, { locale })
vm.use(router)
vm.use(store)
vm.mount('#app')
