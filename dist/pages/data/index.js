(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/data/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/data/index.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--10-1!./src/pages/data/index.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.styl */ "./src/pages/data/style.styl");
/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_9__);





var _dec, _class;
/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 19:44:38
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-17 18:12:39
 */








var Data = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (state) {
  return {
    asyncData: state.data.asyncData
  };
}, function (dispatch) {
  return {
    getAsyncData: function getAsyncData() {
      dispatch({
        type: 'data/fetch'
      });
    },
    initAsyncData: function initAsyncData() {
      dispatch({
        type: 'data/init'
      });
    }
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Data, _Component);

  var _super = Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Data);

  function Data() {
    Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Data);

    return _super.apply(this, arguments);
  }

  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Data, [{
    key: "render",
    value: function render() {
      var asyncData = this.props.asyncData;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        className: "data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtCard"], {
        extra: "dva\u4E0Erequest",
        title: "\u6570\u636E-\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E",
        thumb: "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtButton"], {
        size: "small",
        circle: true,
        type: "secondary",
        onClick: this.props.getAsyncData,
        className: "data--btn"
      }, "\u5F02\u6B65\u8BF7\u6C42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtButton"], {
        size: "small",
        circle: true,
        type: "primary",
        disabled: !(asyncData.length > 0),
        onClick: this.props.initAsyncData,
        className: "data--btn"
      }, "\u6E05\u7A7A\u6570\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], null, !!asyncData && lodash_isArray__WEBPACK_IMPORTED_MODULE_8___default()(asyncData) && asyncData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtList"], null, asyncData.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtListItem"], {
          key: item.id,
          title: item.name,
          note: item.email,
          arrow: "right"
        });
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "\u65E0\u6570\u636E"))));
    }
  }]);

  return Data;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Data);

/***/ }),

/***/ "./src/pages/data/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/data/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--10-1!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/data/index.tsx");


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/data/index'))



/***/ }),

/***/ "./src/pages/data/style.styl":
/*!***********************************!*\
  !*** ./src/pages/data/style.styl ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/data/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map