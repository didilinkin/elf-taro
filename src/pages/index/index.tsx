import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtDivider } from 'taro-ui'
import { styled } from 'linaria/react'

import './style.styl'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {}
type PageOwnProps = {}
type PageState = {}
type IProps = PageStateProps & PageOwnProps

interface Index {
  props: IProps
}

const BtnGroup = styled(View)<{
  color: string
}>`
  color: ${props => props.color};
  background-color: #999;
  > .at-button--small {
    display: inline-block;
    margin: 10%;
  }
`

// @connect(
//   ({ counter }) => ({
//     counter,
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add())
//     },
//     dec() {
//       dispatch(minus())
//     },
//     asyncAdd() {
//       dispatch(asyncAdd())
//     },
//   })
// )
class Index extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps)
  // }

  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="at-article">
          <View className="at-article__h1">elf-taro-cli</View>
          <View className="at-article__info">基于 Taro的小程序脚手架</View>
          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__h2">“首页” 功能介绍</View>
              <View className="at-article__h3">
                Taro-UI 与 CSS in JS样式方案
              </View>
              <Image
                className="at-article__img"
                src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"
                mode="widthFix"
              />
              <View className="at-article__p">
                使用 CSS in JS 修改 文字颜色
              </View>
              <BtnGroup color="red">
                <Text>文字颜色</Text>
                <View>
                  <AtButton type="primary" size="small" className="index--btn">
                    按钮A
                  </AtButton>
                  <AtButton
                    type="secondary"
                    size="small"
                    className="index--btn"
                  >
                    按钮B
                  </AtButton>
                </View>
              </BtnGroup>

              <AtDivider content="“计数” 功能介绍" />
              <View className="at-article__p">基于Dva的计数器</View>

              <AtDivider content="“数据” 功能介绍" />
              <View className="at-article__p">
                基于Dva与request的异步请求demo
              </View>

              <AtDivider content="“地图” 功能介绍" />
              <View className="at-article__p">基于腾讯地图的地图功能</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
