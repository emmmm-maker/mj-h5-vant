import request from '@/utils/request'

/**
 * 注册账号
 * @param {*} data
 * @returns
 */
export const userRegister = (data) => {
  return request({
    method: 'POST',
    url: 'user/register',
    data
  })
}

/**
 * 用户登录
 * @param {*} data
 * @returns
 */
export const userLogin = (data) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data
  })
}
