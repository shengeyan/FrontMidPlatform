import axios from 'axios'

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
})

/*icode权限*/
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = '85B37A6B72047496'
  // 必须返回 config
  return config
})

export default service
