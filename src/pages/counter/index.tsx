/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-03 16:33:44
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-06 19:24:49
 * @Description: counter page
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { AtButton } from 'taro-ui'

type PageStateProps = {
  dispatch: Function,
  count: number,
}
type PageDispatchProps = {
  getDataList: (payload: any) => void,
  onIncrement: () => void,
  onDecrement: () => void,
}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
type PageState = {}

interface Counter {
  props: IProps;
}

@connect(
  state => ({
    count: state.counter.get('count'),
  }),
  dispatch => ({
    getDataList(payload: any): void {
      dispatch({
        type: 'counter/getDataList',
        payload,
      })
    },
    onIncrement(): void {
      dispatch({
        type: 'counter/increment',
      })
    },
    onDecrement(): void {
      dispatch({
        type: 'counter/decrement',
      })
    },
  }),
)
class Counter extends Component {
  config: Config = {
    navigationBarTitleText: '计数',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  }

  render () {
    return (
      <View>
        Count: {this.props.count}
        <AtButton onClick={this.props.onIncrement} size='small'> + </AtButton>
        <AtButton onClick={this.props.onDecrement} size='small'> - </AtButton>
      </View>
    )
  }
}

export default Counter as ComponentClass<PageOwnProps, PageState>
