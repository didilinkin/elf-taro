/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-02 23:33:01
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-06 19:25:52
 * @Description: data service
 */
import request from '../utils/request'

export const getAsyncData = async (): Promise<any> => {
  return request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
}
