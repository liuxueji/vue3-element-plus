// 导入vue
import {
  createApp
} from 'vue'
// 导入App页面
import App from './App.vue'
// 导入路由
import router from './router'
// 导入状态管理器
import store from './store'
// 导入全局样式
import '@/styles/index.scss'
// 导入svg字体图标
import SvgIcon from '@/icons'
// 导入element-plus样式
import 'element-plus/dist/index.css'
// 使用路由守卫
import '@/router/permission'
// 导入全局属性，时间过滤
import filters from './utils/filters'

// 全局导入icon图标
import * as ELIcons from '@element-plus/icons-vue'
// 导入i19n
import i18n from '@/i18n'

const app = createApp(App)

// 将所有图标全局注册
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}

// 传入app
filters(app)

// 将app传入给SvgIcon，内部接收后可以全局注册
SvgIcon(app)
app.use(store).use(router).use(i18n).mount('#app')
