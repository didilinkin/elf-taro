import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import { createLogger } from 'redux-logger'

import models from './models
import dvaCore from './dvaCore'

import Index from './pages/index'
import Counter from './pages/counter'
import Data from './pages/data'

import './app.styl'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// Set Dva
const dva = dvaCore.createApp({
  initialState: {},
  models: models,
  onAction: createLogger(),
  onError(e, dispatch) {
    console.log('发生错误 ===> ', e, dispatch)
  },
})
const store = dva.getStore()

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/counter/index',
      'pages/data/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#626567',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/index.png',
          selectedIconPath: './assets/index.png',
        },
        {
          pagePath: 'pages/counter/index',
          text: '计数',
          iconPath: './assets/counter.png',
          selectedIconPath: './assets/counter.png',
        },
        {
          pagePath: 'pages/data/index',
          text: '数据',
          iconPath: './assets/data.png',
          selectedIconPath: './assets/data.png',
        },
      ]
    },
  }

  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
        <Counter />
        <Data />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
