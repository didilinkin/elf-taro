/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 19:44:38
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-17 18:12:39
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtButton, AtList, AtListItem, AtCard } from 'taro-ui'
import isArray from 'lodash/isArray'

import './style.styl'

type PageStateProps = {
  dispatch: Function
  asyncData: any
}
type PageDispatchProps = {
  getAsyncData: () => void
  initAsyncData: () => void
}
type IProps = PageStateProps & PageDispatchProps

interface Data {
  props: IProps
}

@connect(
  state => ({
    asyncData: state.data.asyncData,
  }),
  dispatch => ({
    getAsyncData(): void {
      dispatch({
        type: 'data/fetch',
      })
    },
    initAsyncData(): void {
      dispatch({
        type: 'data/init',
      })
    },
  })
)
class Data extends Component {
  render() {
    const { asyncData } = this.props
    return (
      <View className="data">
        <AtCard
          extra="dva与request"
          title="数据-请求远程数据"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        >
          <AtButton
            size="small"
            circle={true}
            type="secondary"
            onClick={this.props.getAsyncData}
            className="data--btn"
          >
            异步请求
          </AtButton>
          <AtButton
            size="small"
            circle={true}
            type="primary"
            disabled={!(asyncData.length > 0)}
            onClick={this.props.initAsyncData}
            className="data--btn"
          >
            清空数据
          </AtButton>
          <View>
            {/* 数据列表 */}
            {!!asyncData && isArray(asyncData) && asyncData.length > 0 ? (
              <AtList>
                {asyncData.map(item => (
                  <AtListItem
                    key={item.id}
                    title={item.name}
                    note={item.email}
                    arrow="right"
                  />
                ))}
              </AtList>
            ) : (
              <Text>无数据</Text>
            )}
          </View>
        </AtCard>
      </View>
    )
  }
}

export default Data
