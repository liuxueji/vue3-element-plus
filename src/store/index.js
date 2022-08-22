import {
  createStore
} from 'vuex'
// 导入配置好的app
import app from './modules/app'
// 导入getters，用于获取app下的state
import getters from './getters'
export default createStore({
  modules: {
    // 使用
    app
  },
  getters
})
