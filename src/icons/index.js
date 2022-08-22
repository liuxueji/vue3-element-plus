// 遍历所有本地图标文件，获得所有图标并全局注册后暴露
// 导入svg图标组件
import SvgIcon from '@/components/SvgIcon'

// 利用正则匹配 ./svg 目录下以 .svg 结尾的文件，返回svgRequired函数
const svgRequired = require.context('./svg', false, /\.svg$/)

// 通过svgRequired.keys()拿到所有内容，后循环拿到 ./svg目录下的所有 .svg结尾的文件
svgRequired.keys().forEach((item) => svgRequired(item))

// 导出全局注册组件
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
