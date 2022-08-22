// 为了方便获取到app中的state
export default {
  token: (state) => state.app.token,
  siderType: (state) => state.app.siderType,
  lang: (state) => state.app.lang
}
