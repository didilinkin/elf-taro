/*
 * @Author: yanxiaodi
 * @Date: 2020-09-16 17:23:35
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 17:31:17
 */
export default (url: string): string => {
  let BASE_URL = ''
  if (process.env.NODE_ENV === 'development') {
    // 开发模式
    BASE_URL = url.includes('/api/') ? '' : ''
  } else {
    // 生产环境
    BASE_URL = url.includes('/api/') ? '' : ''
  }
  return BASE_URL
}
