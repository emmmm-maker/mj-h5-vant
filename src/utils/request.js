import axios from 'axios'
import Vue from 'vue'
console.log('Vue.prototype', Vue.prototype)
const Toast = Vue.prototype.$toast
const baseURL = process.env.VUE_APP_BASE_URL
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  // that.$toast.loading({
  //   message: '加载中...',
  //   forbidClick: true,
  //   duration: 0
  // })

  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('response', response)
  Toast.clear()
  return response.data
}, function (error) {
  console.log('error', error)
  Toast.clear()
  Toast.fail(error.response.data.message)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
