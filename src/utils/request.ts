/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-02 23:34:02
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-03 18:04:50
 * @Description: global request
 */
import Taro from '@tarojs/taro'

export default function request(opt) {
  return Taro.request(opt).then((res) => {
    let { statusCode, data } = res
    if (statusCode >= 200 && statusCode < 300) {
      return data
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`)
    }
  })
}
