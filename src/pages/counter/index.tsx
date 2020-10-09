/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 18:09:00
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 13:02:24
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import './style.styl'

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
        <AtCard
          extra="dva与immer"
          title="计数-状态管理"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          <Text>Count: {this.props.count}</Text>
          <AtButton
            size="small"
            circle={true}
            type="primary"
            onClick={this.props.onIncrement}
            className="counter--btn"
          >
            {' '}
            +{' '}
          </AtButton>
          <AtButton
            size="small"
            circle={true}
            type="secondary"
            onClick={this.props.onDecrement}
            className="counter--btn"
          >
            {' '}
            -{' '}
          </AtButton>
        </AtCard>
      </View>
    )
  }
}

export default Counter
