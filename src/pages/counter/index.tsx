/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 18:09:00
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 13:02:24
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'

import { AtButton } from 'taro-ui'

type PageStateProps = {
  dispatch: Function
  count: number
}
type PageDispatchProps = {
  getDataList: (payload: any) => void // 无用
  onIncrement: () => void
  onDecrement: () => void
}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
type PageState = {}

interface Counter {
  props: IProps
}

@connect(
  state => ({
    count: state.counter.count,
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
  })
)
class Counter extends Component {
  render() {
    return (
      <View className="counter">
        Count: {this.props.count}
        <AtButton
          size="small"
          circle={true}
          type="primary"
          onClick={this.props.onIncrement}
        >
          {' '}
          +{' '}
        </AtButton>
        <AtButton
          size="small"
          circle={true}
          type="secondary"
          onClick={this.props.onDecrement}
        >
          {' '}
          -{' '}
        </AtButton>
      </View>
    )
  }
}

export default Counter
