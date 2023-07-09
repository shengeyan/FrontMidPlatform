import axios from 'axios'
import store from '@/store'

console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  //项目状态切换api
  baseURL: '/api',
  timeout: 5000
})

/*
  响应拦截器
*/
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  return Promise.reject(new Error(message))
},
(error) => {
  // 处理 token 超时问题
  if (
    error.response &&
    error.response.data &&
    error.response.data.code === 401
  ) {
    // TODO: token超时
    store.dispatch('user/logout')
  }
  // TODO: 提示错误消息
  return Promise.reject(error)
}
)

/*icode权限*/
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = '85B37A6B72047496'
  // 必须返回 config
  return config
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)


export default service
