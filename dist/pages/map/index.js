(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/map/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/map/index.tsx":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--10-1!./src/pages/map/index.tsx ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.styl */ "./src/pages/map/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_9__);






/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 19:45:41
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-14 19:46:01
 * Map文档 - https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */

 // import { connect } from 'react-redux'





var markerImg = __webpack_require__(/*! ../../assets/marker.png */ "./src/assets/marker.png");

var MapView = /*#__PURE__*/function (_Component) {
  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(MapView, _Component);

  var _super = Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MapView);

  function MapView(props) {
    var _this;

    Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, MapView);

    _this = _super.call(this, props);

    Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "handlePoints", function (value) {
      var setPoints = function setPoints(value) {
        var beijing_points = {
          longitude: 116.39747,
          latitude: 39.908823
        };
        var shanghai_points = {
          longitude: 121.469221,
          latitude: 31.224427
        };
        var guangzhou_points = {
          longitude: 113.25834,
          latitude: 23.149135
        };
        return value === 'beijing' ? beijing_points : value === 'shanghai' ? shanghai_points : guangzhou_points;
      };

      _this.setState({
        pointsName: value,
        points: setPoints(value)
      });
    });

    _this.state = {
      pointsName: 'beijing',
      points: {
        longitude: 116.39747,
        latitude: 39.908823
      }
    };
    return _this;
  }

  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(MapView, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          points = _this$state.points,
          pointsName = _this$state.pointsName;
      var markers = [{
        iconPath: 'https://3gimg.qq.com/lightmap/xcx/demoCenter/images/Marker1_Activated@3x.png',
        id: 0,
        latitude: points.latitude,
        longitude: points.longitude,
        width: 40,
        height: 40
      }]; // 默认值

      var setting = {
        skew: 0,
        rotate: 0,
        showLocation: false,
        showScale: true,
        subKey: '',
        // 个性化地图使用的key
        layerStyle: 1,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        showCompass: false,
        enable3D: false,
        enableOverlooking: false,
        enableSatellite: false,
        enableTraffic: false
      };

      var controltap = function controltap(e) {
        console.log('e ===>', e);
      };

      var markertap = function markertap(e) {
        console.log(e.detail.markerId);
      };

      var regionchange = function regionchange(e) {
        console.log(e.type);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "mapView"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_8__["AtRadio"], {
        options: [{
          label: '北京',
          value: 'beijing'
        }, {
          label: '上海',
          value: 'shanghai'
        }, {
          label: '广州',
          value: 'guangzhou'
        }],
        value: pointsName,
        onClick: this.handlePoints
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["Map"], {
        id: "map",
        scale: 13,
        setting: setting,
        "show-location": true,
        style: "width: 100%; height: 100%;",
        longitude: points.longitude,
        latitude: points.latitude,
        markers: markers,
        onControlTap: controltap,
        onMarkerTap: markertap,
        onRegionChange: regionchange
      }));
    }
  }]);

  return MapView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MapView);

/***/ }),

/***/ "./src/assets/marker.png":
/*!*******************************!*\
  !*** ./src/assets/marker.png ***!
  \*******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/marker.png");

/***/ }),

/***/ "./src/pages/map/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/map/index.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--10-1!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/map/index.tsx");


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/map/index'))



/***/ }),

/***/ "./src/pages/map/style.styl":
/*!**********************************!*\
  !*** ./src/pages/map/style.styl ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/map/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map