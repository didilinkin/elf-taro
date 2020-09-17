/*
 * @Author: yanxiaodi
 * @Date: 2020-09-15 17:10:39
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-15 20:46:10
 */
import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import immer from 'dva-immer'

let app
const createApp = opt => {
  opt.onAction = [createLogger()]
  const app = create(opt)
  app.use(immer())
  if (!global.registered) opt.models.forEach(model => app.model(model))
  global.registered = true
  app.start()
  const store = app._store
  app.getStore = () => store
  const dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
