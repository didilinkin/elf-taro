/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-02 23:30:34
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-06 13:14:16
 * @Description: counter - model
 */
// import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initState = fromJS({
  data: {},
  count: 0,
})

export default {
  namespace: 'counter',

  state: initState,

  effects: {
    * increment({}: void, { put }: DvaApi) {
      yield put({ type: INCREMENT})
    },
    * decrement({ }: void, { put }: DvaApi) {
      yield put({ type: DECREMENT })
    },
  },

  reducers: {
    INCREMENT(state: any, {}: void): any {
      return state
        .merge({
          count: state.get('count') + 1,
        })
    },
    DECREMENT(state: any, { }: void): any {
      return state
        .merge({
          count: state.get('count') - 1,
        })
    },
  }
}
