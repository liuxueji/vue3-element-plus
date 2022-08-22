// 导入配置好的请求文件
import request from './request'

// 配置登录请求
export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
