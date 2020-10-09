/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 19:45:41
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-14 19:46:01
 * Map文档 - https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { View, Map } from '@tarojs/components'
import { AtRadio } from 'taro-ui'

import './style.styl'

type PageStateProps = {
  dispatch: Function
}
type IProps = PageStateProps
type PageState = {
  pointsName: PointsName
  points: Points
}
type PointsName = 'guangzhou' | 'shanghai' | 'beijing'
type Points = {
  longitude: number
  latitude: number
}

class MapView extends Component<IProps, PageState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      pointsName: 'beijing',
      points: {
        longitude: 116.39747,
        latitude: 39.908823,
      },
    }
  }

  handlePoints = (value: PointsName) => {
    const setPoints = (value: PointsName): Points => {
      let beijing_points: Points = {
        longitude: 116.39747,
        latitude: 39.908823,
      }
      let shanghai_points: Points = {
        longitude: 121.469221,
        latitude: 31.224427,
      }
      let guangzhou_points: Points = {
        longitude: 113.25834,
        latitude: 23.149135,
      }
      return value === 'beijing'
        ? beijing_points
        : value === 'shanghai'
        ? shanghai_points
        : guangzhou_points
    }
    this.setState({
      pointsName: value,
      points: setPoints(value),
    })
  }
  render() {
    const { points, pointsName } = this.state
    const markers = [
      {
        iconPath:
          'https://3gimg.qq.com/lightmap/xcx/demoCenter/images/Marker1_Activated@3x.png',
        id: 0,
        latitude: points.latitude,
        longitude: points.longitude,
        width: 40,
        height: 40,
      },
    ]

    // 默认值
    const setting = {
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: true,
      subKey: '', // 个性化地图使用的key
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    }

    const controltap = e => {
      console.log('e ===>', e)
    }

    const markertap = (e: any) => {
      console.log(e.detail.markerId)
    }

    const regionchange = e => {
      console.log(e.type)
    }

    return (
      <View className="mapView">
        <AtRadio
          options={[
            { label: '北京', value: 'beijing' },
            { label: '上海', value: 'shanghai' },
            { label: '广州', value: 'guangzhou' },
          ]}
          value={pointsName}
          onClick={this.handlePoints}
        />
        <Map
          id="map"
          scale={13}
          setting={setting}
          show-location={true}
          style="width: 100%; height: 100%;"
          longitude={points.longitude}
          latitude={points.latitude}
          markers={markers}
          onControlTap={controltap}
          onMarkerTap={markertap}
          onRegionChange={regionchange}
        />
      </View>
    )
  }
}

export default MapView
