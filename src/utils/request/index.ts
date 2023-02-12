// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { AxiosRequestHeaders } from 'axios'

console.log('BASE_URL*****: ', BASE_URL, import.meta.env.VITE_APP_BASE_URL)

// 创建一个新的请求,并传入参数
const hyRequest = new HYRequest({
  // 传入baseurl
  baseURL: BASE_URL,
  // 传入超时时间
  timeout: TIME_OUT,
  // 传入拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 给当前请求实例所有的请求添加token
      console.log('请求成功的拦截')
      const headers = config.headers as AxiosRequestHeaders
      headers.token = 'xxxxx'
      return {
        ...config,
        headers
      }
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
