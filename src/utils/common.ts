/*
 * @Author: yanxiaodi
 * @Date: 2020-09-16 17:37:34
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 17:39:14
 */
import { getCurrentPages, navigateTo } from '@tarojs/taro'

/*获取当前页url*/
export const getCurrentPageUrl = (): string => {
  let pages = getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

export const pageToLogin = (): void => {
  let path = getCurrentPageUrl()
  if (!path.includes('login')) {
    navigateTo({
      url: '/pages/login/login',
    })
  }
}
