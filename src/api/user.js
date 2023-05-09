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
