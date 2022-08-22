import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'put'
  })
}
