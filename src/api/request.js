// 导入axios
import axios from 'axios'
import {
  ElMessage
} from 'element-plus'
import {
  diffTokenTime
} from '@/utils/auth'
import store from '@/store'
// 创建axios
const service = axios.create({
  // 基础路径（基础路径有开发环境和生产环境，所以需要在最外层文件夹下创建 .env.development和 .env.production ）
  // 获取方法：通过配置不同的运行命令来自动切换环境
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时时间
  timeout: 5000
})

// 配置请求拦截器
service.interceptors.request.use(
  (config) => {
    // 判断本地是否有token
    if (localStorage.getItem('token')) {
      // 判断token是否过期
      if (diffTokenTime()) {
        // 调用action的退出操作
        store.dispatch('app/logout')
        return Promise.reject(new Error('token 失效了'))
      }
    }
    // 将本地token赋值给请求头headers
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

// 配置响应拦截器
service.interceptors.response.use(
  (response) => {
    // 解构data和meta
    const {
      data,
      meta
    } = response.data
    // 判断响应状态值
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      // 返回一个错误信息
      return Promise.reject(new Error(meta.msg))
    }
  },
  // 如果连响应都没有，返回一个错误信息
  (error) => {
    console.log(error.response)
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

// 导出供外界使用
export default service
