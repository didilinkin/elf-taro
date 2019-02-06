/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2019-02-06 16:34:13
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-02-06 19:25:08
 * @Description: data page
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtList, AtListItem } from "taro-ui"

import get from 'lodash/get'
import isArray from 'lodash/isArray'

type PageStateProps = {
  dispatch: Function,
  asyncData: any,
}
type PageDispatchProps = {
  getAsyncData: () => void,
}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
type PageState = {}

interface Data {
  props: IProps;
}

@connect(
  state => ({
    asyncData: state.data.get('asyncData'),
  }),
  dispatch => ({
    getAsyncData(): void {
      dispatch({
        type: 'data/fetch',
      })
    },
  })
)
class Data extends Component {
  constructor(props: IProps) {
    super(props)
    get(this.$router, 'path')
      .indexOf('/data/index') !== -1
      ? props.getAsyncData()
      : ''
  }

  config: Config = {
    navigationBarTitleText: '数据',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  }

  render () {
    return (
      <View>
        <h2> 异步数据: </h2>
        {isArray(this.props.asyncData) && (
          <AtList>
            {this.props.asyncData.map(item => (
              <AtListItem
                key={item.id}
                arrow='right'
                note={item.name}
                title={item.username}
                extraText={`email: ${item.email}`}
              />
            ))}
          </AtList>
        )}
      </View>
    )
  }
}

export default Data as ComponentClass<PageOwnProps, PageState>
