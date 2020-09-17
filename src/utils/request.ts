/*
 * @Author: yanxiaodi
 * @Date: 2020-09-15 23:41:50
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-17 02:00:48
 */
import { getStorageSync, addInterceptor, request } from '@tarojs/taro'

import interceptors from './interceptors'
import getBaseUrl from './baseUrl'

interceptors.forEach(i => addInterceptor(i))

type Params = {
  method:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined
}

class fetch {
  baseOptions(params, method: Params['method'] = 'GET') {
    let { url, data } = params
    const BASE_URL = getBaseUrl(url)
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    const option = {
      url: `${BASE_URL}${url}`,
      data,
      method,
      header: {
        'content-type': contentType,
        Authorization: getStorageSync('Authorization'),
      },
    }
    return request(option)
  }

  get(url: string, data) {
    let option = { url, data }
    return this.baseOptions(option)
  }
  post(url: string, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
  put(url: string, data) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  }
  delete(url: string, data) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}

export default new fetch()
