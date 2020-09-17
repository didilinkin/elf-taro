/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 19:45:41
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-14 19:46:01
 */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { AtButton } from 'taro-ui'

class Map extends Component {
  render() {
    return (
      <View className="map">
        <AtButton type="primary" size="small">
          map-按钮
        </AtButton>
      </View>
    )
  }
}

export default Map
