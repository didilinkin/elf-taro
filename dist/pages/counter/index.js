(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/counter/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/counter/index.tsx":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./node_modules/linaria/loader.js??ref--10-1!./src/pages/counter/index.tsx ***!
  \**************************************************************************************************************************************************/
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





var _dec, _class;
/*
 * @Author: yanxiaodi
 * @Date: 2020-09-14 18:09:00
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2020-09-16 13:02:24
 */






var Counter = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (state) {
  return {
    count: state.counter.count
  };
}, function (dispatch) {
  return {
    getDataList: function getDataList(payload) {
      dispatch({
        type: 'counter/getDataList',
        payload: payload
      });
    },
    onIncrement: function onIncrement() {
      dispatch({
        type: 'counter/increment'
      });
    },
    onDecrement: function onDecrement() {
      dispatch({
        type: 'counter/decrement'
      });
    }
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Counter, _Component);

  var _super = Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Counter);

  function Counter() {
    Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Counter);

    return _super.apply(this, arguments);
  }

  Object(_Users_yanxiaodi_www_my_wx_elf_taro_cli_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Counter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        className: "counter"
      }, "Count: ", this.props.count, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtButton"], {
        size: "small",
        circle: true,
        type: "primary",
        onClick: this.props.onIncrement
      }, ' ', "+", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_7__["AtButton"], {
        size: "small",
        circle: true,
        type: "secondary",
        onClick: this.props.onDecrement
      }, ' ', "-", ' '));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Counter);

/***/ }),

/***/ "./src/pages/counter/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/counter/index.tsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!../../../node_modules/linaria/loader.js??ref--10-1!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./node_modules/linaria/loader.js?!./src/pages/counter/index.tsx");


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_node_modules_linaria_loader_js_ref_10_1_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/counter/index'))



/***/ })

},[["./src/pages/counter/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map