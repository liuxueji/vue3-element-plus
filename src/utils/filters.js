const dayjs = require('dayjs')

// 接收两个参数，接收的时间和转化的样子
const filterTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    // 传入的时间戳是十位，所以乘1000
    val = parseInt(val) * 1000
    // 返回转化后的时间
    return dayjs(val).format(format)
  }
}

// 定义判空方法
export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default (app) => {
  // 这是vue全局属性，在mian注册后，组件直接调用 $filters.filterTimes(xx) 即可
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
