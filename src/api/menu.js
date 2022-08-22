import request from './request'

// 请求导航栏数据方法
export const menuList = () => {
  return request({
    url: '/menus'
  })
}
