(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 89:
/*!*********************************************************************************************!*\
  !*** /Users/yin/Documents/HBuilderProjects/news/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 90));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 90:
/*!**************************************************************************!*\
  !*** /Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4& */ 91);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 93);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=scss& */ 95);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 45);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/*!*********************************************************************************************************!*\
  !*** /Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4& */ 92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 92:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    detailComment: function () {
      return __webpack_require__.e(/*! import() | components/detail-comment/detail-comment */ "components/detail-comment/detail-comment").then(__webpack_require__.bind(null, /*! @/components/detail-comment/detail-comment.vue */ 165))
    },
    uniLoadMore: function () {
      return Promise.all(/*! import() | uni_modules/uni-load-more/components/uni-load-more/uni-load-more */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue */ 119))
    },
    uniBadge: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-badge/components/uni-badge/uni-badge */ "uni_modules/uni-badge/components/uni-badge/uni-badge").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-badge/components/uni-badge/uni-badge.vue */ 172))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 179))
    },
    popupComment: function () {
      return __webpack_require__.e(/*! import() | components/popup-comment/popup-comment */ "components/popup-comment/popup-comment").then(__webpack_require__.bind(null, /*! @/components/popup-comment/popup-comment.vue */ 186))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    background: "#f07373",
    "min-width": "15px",
    height: "15px",
    "line-height": "15px",
    "font-size": "10px",
    right: "10px",
    top: "-3px",
    "transform-origin": "right",
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 93:
/*!***************************************************************************************************!*\
  !*** /Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 94);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 19));
var _api = __webpack_require__(/*! ../../common/api */ 41);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uParse = function uParse() {
  Promise.all(/*! require.ensure | components/gaoyia-parse/parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/gaoyia-parse/parse")]).then((function () {
    return resolve(__webpack_require__(/*! ../../components/gaoyia-parse/parse.vue */ 193));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    uParse: uParse
  },
  data: function data() {
    return {
      detailData: {},
      author: {},
      detail_id: '',
      commentList: [],
      replyFormData: {},
      loading: true,
      status: 'loading',
      page: 1,
      pageSize: 5
    };
  },
  onLoad: function onLoad(query) {
    var _this = this;
    this.detail_id = query.detail_id;
    this.getDetail();
    this.getComment();
    uni.$on('comment_count', function () {
      _this.detailData.comments_count += 1;
    });
  },
  onReachBottom: function onReachBottom() {
    if (this.status === 'noMore') return;
    this.page++;
    this.getComment();
  },
  methods: {
    reply: function reply(e) {
      this.replyFormData = {
        comment_id: e.comment._id,
        is_reply: e.is_reply
      };
      if (e.is_reply) {
        this.replyFormData.reply_id = e.reply_id;
      }
      this.handleOpen();
    },
    submit: function submit(formData) {
      this.setComment(formData);
    },
    handleComment: function handleComment() {
      uni.navigateTo({
        url: '/pages/comment/comment?detail_id=' + this.detail_id
      });
    },
    handleOpen: function handleOpen() {
      this.$refs.popup.open();
    },
    handleClose: function handleClose() {
      this.$refs.popup.close();
    },
    handleBtn: function handleBtn(article_id) {
      this.setAuthor({
        article_id: article_id
      });
    },
    handleCollect: function handleCollect(article_id) {
      this.listLike({
        article_id: article_id
      });
    },
    handleThumbs: function handleThumbs(article_id) {
      this.setThumbs({
        article_id: article_id
      });
    },
    getDetail: function getDetail() {
      var _this2 = this;
      this.loading = true;
      uni.showLoading();
      (0, _api.get_detail)({
        detail_id: this.detail_id
      }).then(function (res) {
        _this2.detailData = res.data;
        _this2.author = res.data.author;
        uni.hideLoading();
        _this2.loading = false;
      });
    },
    getComment: function getComment() {
      var _this3 = this;
      (0, _api.get_comment)({
        detail_id: this.detail_id,
        page: this.page,
        pageSize: this.pageSize
      }).then(function (res) {
        if (res.data.length === 0) return _this3.status = 'noMore';
        if (_this3.page === 1) _this3.commentList = [];
        var data = JSON.parse(JSON.stringify(_this3.commentList));
        data.push.apply(data, (0, _toConsumableArray2.default)(res.data));
        _this3.commentList = data;
      });
    },
    setAuthor: function setAuthor(article_id) {
      var _this4 = this;
      uni.showLoading();
      (0, _api.set_author)(article_id).then(function (res) {
        _this4.detailData.is_author_like = !_this4.detailData.is_author_like;
        uni.$emit('updateAuthor');
        uni.hideLoading();
        uni.showToast({
          title: _this4.detailData.is_author_like ? '关注成功' : '取消关注',
          icon: 'none'
        });
      });
    },
    listLike: function listLike(article_id) {
      var _this5 = this;
      uni.showLoading();
      (0, _api.list_like)(article_id).then(function (res) {
        _this5.detailData.is_article_like = !_this5.detailData.is_article_like;
        uni.$emit('updateLike', 'detail');
        uni.hideLoading();
        uni.showToast({
          title: _this5.detailData.is_article_like ? '收藏成功' : '取消收藏',
          icon: 'none'
        });
      });
    },
    setThumbs: function setThumbs(article_id) {
      var _this6 = this;
      uni.showLoading();
      (0, _api.set_thumbs)(article_id).then(function (res) {
        _this6.detailData.is_thumbs_up_article = !_this6.detailData.is_thumbs_up_article;
        _this6.detailData.is_thumbs_up_article ? _this6.detailData.thumbs_up_count += 1 : _this6.detailData.thumbs_up_count -= 1;
        uni.hideLoading();
        uni.showToast({
          title: _this6.detailData.is_thumbs_up_article ? '点赞成功' : '取消点赞',
          icon: 'none'
        });
      });
    },
    setComment: function setComment(formData) {
      var _this7 = this;
      uni.showLoading();
      (0, _api.set_comment)(formData).then(function (res) {
        uni.hideLoading();
        uni.$emit('comment_count');
        _this7.page = 1;
        _this7.status = 'loading';
        _this7.replyFormData = {};
        uni.showToast({
          title: '评论成功'
        });
        _this7.getComment();
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 95:
/*!************************************************************************************************************!*\
  !*** /Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=scss& */ 96);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 96:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/yin/Documents/HBuilderProjects/news/pages/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[89,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3lpbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9uZXdzL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzQzOTciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy95aW4vRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbmV3cy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT9lYzI3Iiwid2VicGFjazovLy8vVXNlcnMveWluL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL25ld3MvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/MzIzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3lpbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9uZXdzL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzk1ODgiLCJ1bmktYXBwOi8vL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlIiwid2VicGFjazovLy8vVXNlcnMveWluL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL25ld3MvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/Y2YzMCIsIndlYnBhY2s6Ly8vL1VzZXJzL3lpbi9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9uZXdzL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzhkZTYiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiLCJjb21wb25lbnRzIiwidVBhcnNlIiwiZGF0YSIsImRldGFpbERhdGEiLCJhdXRob3IiLCJkZXRhaWxfaWQiLCJjb21tZW50TGlzdCIsInJlcGx5Rm9ybURhdGEiLCJsb2FkaW5nIiwic3RhdHVzIiwicGFnZSIsInBhZ2VTaXplIiwib25Mb2FkIiwidW5pIiwib25SZWFjaEJvdHRvbSIsIm1ldGhvZHMiLCJyZXBseSIsImNvbW1lbnRfaWQiLCJpc19yZXBseSIsInN1Ym1pdCIsImhhbmRsZUNvbW1lbnQiLCJ1cmwiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVCdG4iLCJhcnRpY2xlX2lkIiwiaGFuZGxlQ29sbGVjdCIsImhhbmRsZVRodW1icyIsImdldERldGFpbCIsImdldENvbW1lbnQiLCJzZXRBdXRob3IiLCJ0aXRsZSIsImljb24iLCJsaXN0TGlrZSIsInNldFRodW1icyIsInRodW1ic191cF9jb3VudCIsInNldENvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUUyRDtBQUMzRDtBQUNBO0FBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBaUMsR0FBR0MsbUJBQW1CO0FBRzFEQyxVQUFVLENBQUNDLGVBQUksQ0FBQyxDOzs7Ozs7Ozs7Ozs7O0FDTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSDtBQUNuSDtBQUMwRDtBQUNMO0FBQ2M7OztBQUduRTtBQUNnTjtBQUNoTixnQkFBZ0IsaU5BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDROQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0EsYUFBYSwwVkFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsZ1FBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLGdRQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0EsYUFBYSxzTkFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQW8wQixDQUFnQixveUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dFeDFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVNBO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7UUFDQUM7UUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0FQO1FBQ0FRO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUQ7TUFDQTtJQUNBO0lBQ0FFO01BQ0E7UUFDQUY7TUFDQTtJQUNBO0lBQ0FHO01BQUE7TUFDQTtNQUNBZjtNQUNBO1FBQ0FSO01BQ0E7UUFDQTtRQUNBO1FBQ0FRO1FBQ0E7TUFDQTtJQUNBO0lBQ0FnQjtNQUFBO01BQ0E7UUFDQXhCO1FBQ0FLO1FBQ0FDO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQVQ7UUFDQTtNQUNBO0lBQ0E7SUFDQTRCO01BQUE7TUFDQWpCO01BQ0E7UUFDQTtRQUNBQTtRQUNBQTtRQUNBQTtVQUNBa0I7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBcEI7TUFDQTtRQUNBO1FBQ0FBO1FBQ0FBO1FBQ0FBO1VBQ0FrQjtVQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBRTtNQUFBO01BQ0FyQjtNQUNBO1FBQ0E7UUFDQSxvR0FDQXNCO1FBQ0F0QjtRQUNBQTtVQUNBa0I7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUk7TUFBQTtNQUNBdkI7TUFDQTtRQUNBQTtRQUNBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBQTtVQUNBa0I7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQjs7Ozs7Ozs7Ozs7OztBQ3BPQTtBQUFBO0FBQUE7QUFBQTtBQUFtaUQsQ0FBZ0IsbTZDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdmpEO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187aW1wb3J0ICdAZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3VuaS1jbG91ZC9kaXN0L2luZGV4LmpzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2UxNTllYjQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGV0YWlsL2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTctMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2UxNTllYjQmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBkZXRhaWxDb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvZGV0YWlsLWNvbW1lbnQvZGV0YWlsLWNvbW1lbnRcIiAqLyBcIkAvY29tcG9uZW50cy9kZXRhaWwtY29tbWVudC9kZXRhaWwtY29tbWVudC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdW5pTG9hZE1vcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidW5pX21vZHVsZXMvdW5pLWxvYWQtbW9yZS9jb21wb25lbnRzL3VuaS1sb2FkLW1vcmUvdW5pLWxvYWQtbW9yZVwiICovIFwiQC91bmlfbW9kdWxlcy91bmktbG9hZC1tb3JlL2NvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1bmlCYWRnZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1bmlfbW9kdWxlcy91bmktYmFkZ2UvY29tcG9uZW50cy91bmktYmFkZ2UvdW5pLWJhZGdlXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3VuaS1iYWRnZS9jb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2UudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVuaVBvcHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIiAqLyBcIkAvdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgcG9wdXBDb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvcG9wdXAtY29tbWVudC9wb3B1cC1jb21tZW50XCIgKi8gXCJAL2NvbXBvbmVudHMvcG9wdXAtY29tbWVudC9wb3B1cC1jb21tZW50LnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBhMCA9IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNmMDczNzNcIixcbiAgICBcIm1pbi13aWR0aFwiOiBcIjE1cHhcIixcbiAgICBoZWlnaHQ6IFwiMTVweFwiLFxuICAgIFwibGluZS1oZWlnaHRcIjogXCIxNXB4XCIsXG4gICAgXCJmb250LXNpemVcIjogXCIxMHB4XCIsXG4gICAgcmlnaHQ6IFwiMTBweFwiLFxuICAgIHRvcDogXCItM3B4XCIsXG4gICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IFwicmlnaHRcIixcbiAgfVxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGEwOiBhMCxcbiAgICAgIH0sXG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEzLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiZGV0YWlsXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJza2luXCIgdi1pZj1cImxvYWRpbmdcIj48L3ZpZXc+XG5cdFx0PGgyIGNsYXNzPVwiZGV0YWlsX190aXRsZVwiPnt7ZGV0YWlsRGF0YS50aXRsZX19PC9oMj5cblx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fYXV0aG9yXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fYXV0aG9yX19oZWFkXCI+XG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiYXV0aG9yLmF2YXRhclwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfX2F1dGhvcl9faW5mb1wiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fYXV0aG9yX19uYW1lXCI+e3thdXRob3IuYXV0aG9yX25hbWV9fTwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfX2F1dGhvcl9fdGFiXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfX2F1dGhvcl9fdGFiX19pdGVtXCI+e3tkZXRhaWxEYXRhLmNyZWF0ZV90aW1lfX08L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWxfX2F1dGhvcl9fdGFiX19pdGVtXCI+e3tkZXRhaWxEYXRhLmJyb3dzZV9jb3VudH19IOa1j+iniDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fYXV0aG9yX190YWJfX2l0ZW1cIj57e2RldGFpbERhdGEudGh1bWJzX3VwX2NvdW50fX0g6LWePC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fYXV0aG9yX19idG4gaWNvbmZvbnRcIiBAY2xpY2s9XCJoYW5kbGVCdG4oZGV0YWlsRGF0YS5faWQpXCI+XG5cdFx0XHRcdHt7IGRldGFpbERhdGEuaXNfYXV0aG9yX2xpa2UgPyAn5bey5YWz5rOoJyA6ICcmI3hlYWYzO+WFs+azqCd9fVxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblxuXHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX19jb250ZW50XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fY29udGVudF9fdGV4dFwiPlxuXHRcdFx0XHQ8dVBhcnNlIDpjb250ZW50PVwiZGV0YWlsRGF0YS5jb250ZW50XCIgbm9EYXRhPVwi5Yqg6L295LitLi4uLlwiPjwvdVBhcnNlPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblxuXHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX19saW5lXCI+PC92aWV3PlxuXG5cdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWJveFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWJveF9fdGl0bGVcIj7nsr7lvanor4Torro8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYm94X19pdGVtXCIgdi1mb3I9XCJpdGVtIGluIGNvbW1lbnRMaXN0XCIgOmtleT1cIml0ZW0uX2lkXCI+XG5cdFx0XHRcdDxkZXRhaWwtY29tbWVudCA6aXNfcmVwbHk9XCJmYWxzZVwiIDpjb21tZW50PVwiaXRlbVwiIEByZXBseT1cInJlcGx5XCI+PC9kZXRhaWwtY29tbWVudD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgdi1pZj1cImNvbW1lbnRMaXN0Lmxlbmd0aCA8PSAwIHx8IGNvbW1lbnRMaXN0Lmxlbmd0aCA+IDVcIj5cblx0XHRcdDx1bmktbG9hZC1tb3JlIDpzdGF0dXM9XCJzdGF0dXNcIiBpY29uVHlwZT1cImF1dG9cIiA6Y29udGVudFRleHQ9XCJ7Y29udGVudG5vbW9yZTogJ+aaguaXoOabtOWkmuivhOiuuid9XCI+PC91bmktbG9hZC1tb3JlPlxuXHRcdDwvdmlldz5cblxuXHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX190YWJiYXJcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsX190YWJiYXJfX2xlZnRcIiBAY2xpY2s9XCJoYW5kbGVPcGVuXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGV0YWlsX190YWJiYXJfX2xlZnRfX2lucHV0XCI+6LCI6LCI5L2g55qE55yL5rOVPC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGRldGFpbF9fdGFiYmFyX19sZWZ0X19pY29uXCI+JiN4ZWM4ODs8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbF9fdGFiYmFyX19yaWdodFwiPlxuXHRcdFx0XHQ8dW5pLWJhZGdlIDp0ZXh0PVwiZGV0YWlsRGF0YS5jb21tZW50c19jb3VudFwiIGFic29sdXRlPVwicmlnaHRUb3BcIiBzaXplPVwic21hbGxcIiA6Y3VzdG9tU3R5bGU9XCJ7XG5cdFx0XHRcdFx0J2JhY2tncm91bmQnOiAnI2YwNzM3MycsXG5cdFx0XHRcdFx0J21pbi13aWR0aCc6ICcxNXB4Jyxcblx0XHRcdFx0XHQnaGVpZ2h0JzogJzE1cHgnLFxuXHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxNXB4Jyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzEwcHgnLFxuXHRcdFx0XHRcdCdyaWdodCc6ICcxMHB4Jyxcblx0XHRcdFx0XHQndG9wJzogJy0zcHgnLFxuXHRcdFx0XHRcdCd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0J1xuXHRcdFx0XHRcdH1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25mb250IGRldGFpbF9fdGFiYmFyX19yaWdodF9faWNvblwiIEBjbGljaz1cImhhbmRsZUNvbW1lbnRcIj4mI3hlNjg3Ozwvdmlldz5cblx0XHRcdFx0PC91bmktYmFkZ2U+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgZGV0YWlsX190YWJiYXJfX3JpZ2h0X19pY29uXCIgQGNsaWNrPVwiaGFuZGxlQ29sbGVjdChkZXRhaWxEYXRhLl9pZClcIlxuXHRcdFx0XHRcdHYtaHRtbD1cImRldGFpbERhdGEuaXNfYXJ0aWNsZV9saWtlID8gJyYjeGU2ODQ7JyA6ICcmI3hlNjQzOydcIj48L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgZGV0YWlsX190YWJiYXJfX3JpZ2h0X19pY29uXCIgQGNsaWNrPVwiaGFuZGxlVGh1bWJzKGRldGFpbERhdGEuX2lkKVwiXG5cdFx0XHRcdFx0di1odG1sPVwiZGV0YWlsRGF0YS5pc190aHVtYnNfdXBfYXJ0aWNsZSA/ICcmI3hlYzhjOycgOiAnJiN4ZWM3ZjsnXCI+JiN4ZWM3Zjs8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDx1bmktcG9wdXAgcmVmPVwicG9wdXBcIiB0eXBlPVwiYm90dG9tXCIgOm1hc2tDbGljaz1cImZhbHNlXCI+XG5cdFx0XHQ8cG9wdXAtY29tbWVudCA6YXJ0aWNsZV9pZD1cImRldGFpbERhdGEuX2lkXCIgOnJlcGx5Rm9ybURhdGE9XCJyZXBseUZvcm1EYXRhXCIgQHN1Ym1pdD1cInN1Ym1pdFwiXG5cdFx0XHRcdEBjbG9zZT1cImhhbmRsZUNsb3NlXCIgLz5cblx0XHQ8L3VuaS1wb3B1cD5cblxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge1xuXHRcdGdldF9kZXRhaWwsXG5cdFx0c2V0X2NvbW1lbnQsXG5cdFx0Z2V0X2NvbW1lbnQsXG5cdFx0c2V0X2F1dGhvcixcblx0XHRsaXN0X2xpa2UsXG5cdFx0c2V0X3RodW1ic1xuXHR9IGZyb20gJy4uLy4uL2NvbW1vbi9hcGknXG5cdGltcG9ydCB1UGFyc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9nYW95aWEtcGFyc2UvcGFyc2UudnVlJ1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dVBhcnNlXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGV0YWlsRGF0YToge30sXG5cdFx0XHRcdGF1dGhvcjoge30sXG5cdFx0XHRcdGRldGFpbF9pZDogJycsXG5cdFx0XHRcdGNvbW1lbnRMaXN0OiBbXSxcblx0XHRcdFx0cmVwbHlGb3JtRGF0YToge30sXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRcdHN0YXR1czogJ2xvYWRpbmcnLFxuXHRcdFx0XHRwYWdlOiAxLFxuXHRcdFx0XHRwYWdlU2l6ZTogNVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKHF1ZXJ5KSB7XG5cdFx0XHR0aGlzLmRldGFpbF9pZCA9IHF1ZXJ5LmRldGFpbF9pZFxuXHRcdFx0dGhpcy5nZXREZXRhaWwoKVxuXHRcdFx0dGhpcy5nZXRDb21tZW50KClcblx0XHRcdHVuaS4kb24oJ2NvbW1lbnRfY291bnQnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZGV0YWlsRGF0YS5jb21tZW50c19jb3VudCArPSAxXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0b25SZWFjaEJvdHRvbSgpIHtcblx0XHRcdGlmICh0aGlzLnN0YXR1cyA9PT0gJ25vTW9yZScpIHJldHVyblxuXHRcdFx0dGhpcy5wYWdlKytcblx0XHRcdHRoaXMuZ2V0Q29tbWVudCgpXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRyZXBseShlKSB7XG5cdFx0XHRcdHRoaXMucmVwbHlGb3JtRGF0YSA9IHtcblx0XHRcdFx0XHRjb21tZW50X2lkOiBlLmNvbW1lbnQuX2lkLFxuXHRcdFx0XHRcdGlzX3JlcGx5OiBlLmlzX3JlcGx5XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGUuaXNfcmVwbHkpIHtcblx0XHRcdFx0XHR0aGlzLnJlcGx5Rm9ybURhdGEucmVwbHlfaWQgPSBlLnJlcGx5X2lkXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5oYW5kbGVPcGVuKClcblx0XHRcdH0sXG5cdFx0XHRzdWJtaXQoZm9ybURhdGEpIHtcblx0XHRcdFx0dGhpcy5zZXRDb21tZW50KGZvcm1EYXRhKVxuXHRcdFx0fSxcblx0XHRcdGhhbmRsZUNvbW1lbnQoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvY29tbWVudC9jb21tZW50P2RldGFpbF9pZD0nICsgdGhpcy5kZXRhaWxfaWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRoYW5kbGVPcGVuKCkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnBvcHVwLm9wZW4oKVxuXHRcdFx0fSxcblx0XHRcdGhhbmRsZUNsb3NlKCkge1xuXHRcdFx0XHR0aGlzLiRyZWZzLnBvcHVwLmNsb3NlKClcblx0XHRcdH0sXG5cdFx0XHRoYW5kbGVCdG4oYXJ0aWNsZV9pZCkge1xuXHRcdFx0XHR0aGlzLnNldEF1dGhvcih7XG5cdFx0XHRcdFx0YXJ0aWNsZV9pZFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGhhbmRsZUNvbGxlY3QoYXJ0aWNsZV9pZCkge1xuXHRcdFx0XHR0aGlzLmxpc3RMaWtlKHtcblx0XHRcdFx0XHRhcnRpY2xlX2lkXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0aGFuZGxlVGh1bWJzKGFydGljbGVfaWQpIHtcblx0XHRcdFx0dGhpcy5zZXRUaHVtYnMoe1xuXHRcdFx0XHRcdGFydGljbGVfaWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRnZXREZXRhaWwoKSB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IHRydWVcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKClcblx0XHRcdFx0Z2V0X2RldGFpbCh7XG5cdFx0XHRcdFx0ZGV0YWlsX2lkOiB0aGlzLmRldGFpbF9pZFxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kZXRhaWxEYXRhID0gcmVzLmRhdGFcblx0XHRcdFx0XHR0aGlzLmF1dGhvciA9IHJlcy5kYXRhLmF1dGhvclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2Vcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRnZXRDb21tZW50KCkge1xuXHRcdFx0XHRnZXRfY29tbWVudCh7XG5cdFx0XHRcdFx0ZGV0YWlsX2lkOiB0aGlzLmRldGFpbF9pZCxcblx0XHRcdFx0XHRwYWdlOiB0aGlzLnBhZ2UsXG5cdFx0XHRcdFx0cGFnZVNpemU6IHRoaXMucGFnZVNpemVcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLnN0YXR1cyA9ICdub01vcmUnXG5cdFx0XHRcdFx0aWYgKHRoaXMucGFnZSA9PT0gMSkgdGhpcy5jb21tZW50TGlzdCA9IFtdXG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29tbWVudExpc3QpKVxuXHRcdFx0XHRcdGRhdGEucHVzaCguLi5yZXMuZGF0YSlcblx0XHRcdFx0XHR0aGlzLmNvbW1lbnRMaXN0ID0gZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHNldEF1dGhvcihhcnRpY2xlX2lkKSB7XG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZygpXG5cdFx0XHRcdHNldF9hdXRob3IoYXJ0aWNsZV9pZCkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGV0YWlsRGF0YS5pc19hdXRob3JfbGlrZSA9ICF0aGlzLmRldGFpbERhdGEuaXNfYXV0aG9yX2xpa2Vcblx0XHRcdFx0XHR1bmkuJGVtaXQoJ3VwZGF0ZUF1dGhvcicpXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmRldGFpbERhdGEuaXNfYXV0aG9yX2xpa2UgPyAn5YWz5rOo5oiQ5YqfJyA6ICflj5bmtojlhbPms6gnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRsaXN0TGlrZShhcnRpY2xlX2lkKSB7XG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZygpXG5cdFx0XHRcdGxpc3RfbGlrZShhcnRpY2xlX2lkKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kZXRhaWxEYXRhLmlzX2FydGljbGVfbGlrZSA9ICF0aGlzLmRldGFpbERhdGEuaXNfYXJ0aWNsZV9saWtlXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCd1cGRhdGVMaWtlJywgJ2RldGFpbCcpXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmRldGFpbERhdGEuaXNfYXJ0aWNsZV9saWtlID8gJ+aUtuiXj+aIkOWKnycgOiAn5Y+W5raI5pS26JePJyxcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0c2V0VGh1bWJzKGFydGljbGVfaWQpIHtcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKClcblx0XHRcdFx0c2V0X3RodW1icyhhcnRpY2xlX2lkKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kZXRhaWxEYXRhLmlzX3RodW1ic191cF9hcnRpY2xlID0gIXRoaXMuZGV0YWlsRGF0YS5pc190aHVtYnNfdXBfYXJ0aWNsZVxuXHRcdFx0XHRcdHRoaXMuZGV0YWlsRGF0YS5pc190aHVtYnNfdXBfYXJ0aWNsZSA/IHRoaXMuZGV0YWlsRGF0YS50aHVtYnNfdXBfY291bnQgKz0gMSA6IHRoaXMuZGV0YWlsRGF0YVxuXHRcdFx0XHRcdFx0LnRodW1ic191cF9jb3VudCAtPSAxXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiB0aGlzLmRldGFpbERhdGEuaXNfdGh1bWJzX3VwX2FydGljbGUgPyAn54K56LWe5oiQ5YqfJyA6ICflj5bmtojngrnotZ4nLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRzZXRDb21tZW50KGZvcm1EYXRhKSB7XG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZygpXG5cdFx0XHRcdHNldF9jb21tZW50KGZvcm1EYXRhKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcblx0XHRcdFx0XHR1bmkuJGVtaXQoJ2NvbW1lbnRfY291bnQnKVxuXHRcdFx0XHRcdHRoaXMucGFnZSA9IDFcblx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9ICdsb2FkaW5nJ1xuXHRcdFx0XHRcdHRoaXMucmVwbHlGb3JtRGF0YSA9IHt9XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivhOiuuuaIkOWKnydcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tbWVudCgpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdC5za2luIHtcblx0XHR6LWluZGV4OiA5OTk7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR9XG5cblx0LmRldGFpbCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRwYWRkaW5nOiAxNXB4IDAgNTRweDtcblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdHBhZGRpbmc6IDAgMTVweDtcblx0XHR9XG5cblx0XHQmX19hdXRob3Ige1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRwYWRkaW5nOiAwIDE1cHg7XG5cdFx0XHRtYXJnaW46IDEwcHggMDtcblxuXHRcdFx0Jl9faGVhZCB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRpbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCZfX2luZm8ge1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDEwcHg7XG5cdFx0XHR9XG5cblx0XHRcdCZfX25hbWUge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdFx0XHR9XG5cblx0XHRcdCZfX3RhYiB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cblx0XHRcdFx0Jl9faXRlbSB7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCZfX2J0biB7XG5cdFx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjdweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZTVlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jl9fY29udGVudCB7XG5cdFx0XHRtaW4taGVpZ2h0OiA0NTBweDtcblx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cblx0XHRcdCZfX3RleHQge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jl9fdGFiYmFyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiA0NHB4O1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY1ZjU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG5cdFx0XHQmX19sZWZ0IHtcblx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0cGFkZGluZzogMCAxMHB4O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcblxuXHRcdFx0XHQmX19pbnB1dCB7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jl9faWNvbiB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmMDczNzM7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCZfX3JpZ2h0IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblxuXHRcdFx0XHQmX19pY29uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0Y29sb3I6ICNmMDczNzM7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmX19saW5lIHtcblx0XHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZWZlZmVmO1xuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0fVxuXHR9XG5cblx0LmNvbW1lbnQtYm94IHtcblx0XHRjb2xvcjogIzMzMztcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblxuXHRcdCZfX251bGwge1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiA1MHB4O1xuXHRcdH1cblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHBhZGRpbmc6IDAgMTVweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblxuXHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMnB4O1xuXHRcdFx0XHRib3R0b206IDFweDtcblx0XHRcdFx0bGVmdDogNXB4O1xuXHRcdFx0XHR3aWR0aDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzZBQjYwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MDkwMjAzMjUwNzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==