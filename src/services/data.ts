/*
 * @Author: yanxiaodi
 * @Date: 2020-09-15 23:41:11
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-17 01:59:31
 */
import fetch from '../utils/request'

export const getAsyncData = () =>
  fetch.get('https://jsonplaceholder.typicode.com/users')
