// 导入设置token的两个常量
import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

// 登录时设置时间
export const setTokenTime = () => {
  // 将设置token时间存储到本地
  localStorage.setItem(TOKEN_TIME, Date.now())
}

// 获取
export const getTokenTime = () => {
  // 从本地获取设置token时间
  return localStorage.getItem(TOKEN_TIME)
}

// 是否已经过期，在请求拦截器中调用
export const diffTokenTime = () => {
  // 获取当前时间
  const currentTime = Date.now()
  // 获取设置token时间
  const tokenTime = getTokenTime()
  // 判断是否过期
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}
