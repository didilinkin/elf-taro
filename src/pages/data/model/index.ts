/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-06 15:32:42
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-06 19:15:24
 * @Description: Index - model
 */
import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'
import cloneDeep from 'lodash/cloneDeep'

import * as dataServices from '../../../services/data'

const SET_ASYNC_DATA = 'SET_ASYNC_DATA'

interface SetAsyncData {
  payload: {
    asyncData: any,
  },
}

const initState = fromJS({
  asyncData: {},
})

export default {
  namespace: 'data',

  state: initState,

  effects: {
    * fetch(_: void, { call, put }: DvaApi) {
      Taro.showLoading({ title: 'Loading...' })
      let res = []
      try {
        res = yield call(dataServices.getAsyncData)
      } catch (e) {
        console.log('fetch 请求失败!')
        Taro.showToast({
          title: '请求失败',
          icon: 'loading',
          duration: 500,
        })
      } finally {
        yield put({
          type: SET_ASYNC_DATA,
          payload: {
            asyncData: cloneDeep(res),
          },
        })
        Taro.hideLoading()
      }
    },
  },

  reducers: {
    SET_ASYNC_DATA(state, { payload }: SetAsyncData) {
      return state
        .merge({
          asyncData: payload.asyncData,
        })
    },
  },
}
