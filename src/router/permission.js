import router from './index'
import store from '@/store'

// 定义一个白名单
const whiteList = ['/login']

// 配置路由守卫
router.beforeEach((to, from, next) => {
  // 判断vuex中token是否存在
  if (store.getters.token) {
    // 判断要去的路径是否为login，因为已经登录，所以直接跳转到首页
    if (to.path === '/login') {
      next('/')
    } else {
      // 否则随便去
      next()
    }
  } else {
    // 如果要去的页面在白名单内，则放行
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 否则强制跳转到登录页
      next('/login')
    }
  }
})
