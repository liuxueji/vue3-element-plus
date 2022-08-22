// 导入 i18n
import {
  createI18n
} from 'vue-i18n'
// 导入英文数据源
import EN from './en'
// 导入中文数据源
import ZH from './zh'
const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}

// 定义获取语言方法
const getCurrentLanguage = () => {
  // 通过浏览器设置语言
  const UAlang = navigator.language // zh-CN
  // 判断是否为中文
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  // 将语言存储
  localStorage.setItem('lang', langCode)
  // 返回语言
  return langCode
}

// 创建i18n
const i18n = createI18n({
  legacy: false,
  // 使用全局t函数
  globalInjection: true,
  // 设置语言
  locale: getCurrentLanguage() || 'zh',
  // 传入数据源
  messages: messages
})

// 导出i18n，在mian中注册
export default i18n
