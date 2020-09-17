/*
 * @Author: yanxiaodi
 * @Date: 2020-09-15 17:29:57
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 10:52:26
 */
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initState = {
  count: 0,
}

export default {
  namespace: 'counter',

  state: initState,

  effects: {
    *increment(_: void, { put }: DvaApi) {
      yield put({ type: INCREMENT })
    },
    *decrement(_: void, { put }: DvaApi) {
      yield put({ type: DECREMENT })
    },
  },

  reducers: {
    INCREMENT(state: any): any {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    },
    DECREMENT(state: any): any {
      return Object.assign({}, state, {
        count: state.count - 1,
      })
    },
  },
}
