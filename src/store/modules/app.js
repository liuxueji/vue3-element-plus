// 导入登录请求方法，防止命名冲突，为login起别名为 loginApi
import { login as loginApi } from '@/api/login'
// 导入路由
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    // 从本地获取token
    token: localStorage.getItem('token') || '',
    siderType: true,
    lang: localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    // 定义设置token到本地的方法
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    // 定义改变siderType的方法
    changeSiderType(state) {
      state.siderType = !state.siderType
    },
    changLang (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    // 执行登录操作，commit和接收用户信息
    login({ commit }, userInfo) {
      // 返回一个promise方法
      return new Promise((resolve, reject) => {
        // 调用登录请求方法，传入用户信息
        loginApi(userInfo)
          .then((res) => {
            console.log(res)
            // commit调用mutations里的setToken方法，将res.token传入
            commit('setToken', res.token)
            setTokenTime()
            // 成功后跳到首页
            router.replace('/')
            // 成功
            resolve()
          })
          .catch((err) => {
            // 失败
            reject(err)
          })
      })
    },
    // 退出
    logout({ commit }) {
      // 调用mutations中的setToken，清空states中的token
      commit('setToken', '')
      // 清空本地token
      localStorage.clear()
      // 跳转到登录页
      router.replace('/login')
    }
  }
}
