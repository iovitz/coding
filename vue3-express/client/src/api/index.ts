import router from '@/router'
import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

let loading: any = null
const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '正在全力加载中...',
    background: 'rgba(0, 0, 0, .7)',
  })
}
const endLoading = () => {
  loading.close()
}

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    startLoading()

    if (localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  },
  (err) => {
    return Promise.resolve(err)
  }
)

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    endLoading()
    return response
  },
  (err) => {
    endLoading()
    ElMessage.error('请求失败')

    // 获取错误状态码
    const { status } = err.response
    if (status === 401) {
      ElMessage.error('token失效，请重新登录')
      // 清除token
      localStorage.removeItem('token')
      // 跳转到登录页面
      router.push('/login')
    }
    return Promise.resolve(err)
  }
)

export default axios
