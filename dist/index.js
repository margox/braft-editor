(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("braft-utils"), require("draft-js"), require("braft-convert"), require("react-dom"), require("immutable"), require("braft-finder"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "braft-utils", "draft-js", "braft-convert", "react-dom", "immutable", "braft-finder"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("braft-utils"), require("draft-js"), require("braft-convert"), require("react-dom"), require("immutable"), require("braft-finder")) : factory(root["react"], root["braft-utils"], root["draft-js"], root["braft-convert"], root["react-dom"], root["immutable"], root["braft-finder"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/draft-js/dist/Draft.css
var Draft = __webpack_require__(32);

// EXTERNAL MODULE: ./assets/scss/_base.scss
var _base = __webpack_require__(30);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./languages/en.js
/* harmony default export */ var en = ({
  base: {
    remove: 'Remove',
    cancel: 'Cancel',
    confirm: 'Confirm',
    inert: 'Insert',
    width: 'Width',
    height: 'Height'
  },
  controls: {
    clear: 'Clear',
    undo: 'Undo',
    redo: 'Redo',
    fontSize: 'Font Size',
    color: 'Color',
    textColor: 'Text',
    tempColors: 'Temp Colors',
    backgroundColor: 'Background',
    bold: 'Bold',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    textIndent: 'Indent at both ends',
    italic: 'Italic',
    underline: 'Underline',
    strikeThrough: 'Strike Through',
    fontFamily: 'Font Family',
    textAlign: 'Text Alignment',
    alignLeft: 'Left Alignment',
    alignCenter: 'Center Alignment',
    alignRight: 'Right Alignment',
    alignJustify: 'Justify Alignment',
    floatLeft: 'Left Float',
    floatRight: 'Right Float',
    superScript: 'Super Script',
    subScript: 'Sub Script',
    removeStyles: 'Remove Styles',
    headings: 'Headings',
    header: 'Header',
    normal: 'Normal',
    orderedList: 'Ordered List',
    unorderedList: 'Unordered List',
    blockQuote: 'Quote',
    code: 'Code',
    link: 'Link',
    unlink: 'Unlink',
    hr: 'Horizontal Line',
    media: 'Media',
    mediaLibirary: 'Media Libirary',
    emoji: 'Emoji'
  },
  linkEditor: {
    inputPlaceHolder: 'Input link URL',
    inputWithEnterPlaceHolder: 'Input link URL and press Enter',
    openInNewWindow: 'Open in new window',
    removeLink: 'Remove Link'
  },
  audioPlayer: {
    title: 'Play Audio'
  },
  videoPlayer: {
    title: 'Play Video',
    embedTitle: 'Embed Media'
  },
  media: {
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    embed: 'Embed'
  }
});
// CONCATENATED MODULE: ./languages/zh.js
/* harmony default export */ var zh = ({
  base: {
    remove: '删除',
    cancel: '取消',
    confirm: '确定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤销',
    redo: '重做',
    fontSize: '字号',
    lineHeight: '行高',
    letterSpacing: '字间距',
    textIndent: '两端缩进',
    border: '边框',
    color: '颜色',
    textColor: '文字颜色',
    backgroundColor: '背景颜色',
    tempColors: '临时颜色',
    bold: '加粗',
    italic: '斜体',
    underline: '下划线',
    strikeThrough: '删除线',
    fontFamily: '字体',
    textAlign: '文本对齐',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '两端',
    floatLeft: '左浮动',
    floatRight: '右浮动',
    superScript: '上标',
    subScript: '下标',
    removeStyles: '清除样式',
    headings: '标题',
    header: '标题',
    normal: '常规',
    orderedList: '有序列表',
    unorderedList: '无序列表',
    blockQuote: '引用',
    code: '代码',
    link: '链接',
    unlink: '清除链接',
    hr: '水平线',
    media: '媒体',
    mediaLibirary: '媒体库',
    emoji: '小表情'
  },
  linkEditor: {
    inputPlaceHolder: '输入链接地址',
    inputWithEnterPlaceHolder: '输入链接地址并回车',
    openInNewWindow: '在新窗口打开',
    removeLink: '移除链接'
  },
  audioPlayer: {
    title: '播放音频文件'
  },
  videoPlayer: {
    title: '播放视频文件',
    embedTitle: '嵌入式媒体'
  },
  media: {
    image: '图像',
    video: '视频',
    audio: '音频',
    embed: '嵌入式媒体'
  }
});
// CONCATENATED MODULE: ./languages/zh-hant.js
/* harmony default export */ var zh_hant = ({
  base: {
    remove: '刪除',
    cancel: '取消',
    confirm: '確定',
    inert: '插入',
    width: '宽度',
    height: '高度'
  },
  controls: {
    clear: '清除内容',
    undo: '撤銷',
    redo: '重做',
    fontSize: '字號',
    color: '顏色',
    textColor: '文字顏色',
    backgroundColor: '背景顏色',
    tempColors: '臨時顏色',
    bold: '加粗',
    lineHeight: '行高',
    letterSpacing: '字間距',
    textIndent: '兩端縮進',
    border: '邊框',
    italic: '斜體',
    underline: '下劃線',
    strikeThrough: '刪除線',
    fontFamily: '字體',
    textAlign: '文本對齊',
    alignLeft: '居左',
    alignCenter: '居中',
    alignRight: '居右',
    alignJustify: '兩端對齊',
    floatLeft: '左浮動',
    floatRight: '右浮動',
    superScript: '上標',
    subScript: '下標',
    removeStyles: '清除样式',
    headings: '標題',
    header: '標題',
    normal: '常規',
    orderedList: '有序列表',
    unorderedList: '無序列表',
    blockQuote: '引用',
    code: '代碼',
    link: '鏈接',
    unlink: '清除鏈接',
    hr: '水平线',
    media: '媒體',
    mediaLibirary: '媒體库',
    emoji: '小表情'
  },
  linkEditor: {
    inputPlaceHolder: '輸入鏈接地址',
    inputWithEnterPlaceHolder: '輸入鏈接地址並回車',
    openInNewWindow: '在新窗口打開',
    removeLink: '移除鏈接'
  },
  audioPlayer: {
    title: '播放音頻文件'
  },
  videoPlayer: {
    title: '播放視頻文件',
    embedTitle: '嵌入式媒體'
  },
  media: {
    image: '圖像',
    video: '視頻',
    audio: '音頻',
    embed: '嵌入式媒體'
  }
});
// CONCATENATED MODULE: ./languages/index.js



/* harmony default export */ var languages = ({
  "en": en,
  "zh": zh,
  "zh-hant": zh_hant
});
// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(1);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(2);

// CONCATENATED MODULE: ./configs/keybindings.js
 // TODO
// 允许自定义的快捷键设置

/* harmony default export */ var keybindings = (function (customKeyBindingFn) {
  return function (event) {
    if (event.keyCode === 83 && (external_draft_js_["KeyBindingUtil"].hasCommandModifier(event) || external_draft_js_["KeyBindingUtil"].isCtrlKeyCommand(event))) {
      return 'braft-save';
    }

    if (customKeyBindingFn) {
      return customKeyBindingFn(event) || Object(external_draft_js_["getDefaultKeyBinding"])(event);
    }

    return Object(external_draft_js_["getDefaultKeyBinding"])(event);
  };
});
// CONCATENATED MODULE: ./configs/props.js
/* harmony default export */ var configs_props = ({
  language: 'zh',
  controls: ['undo', 'redo', 'separator', 'font-size', 'font-family', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'link', 'split', 'hr', 'separator', 'media', 'separator', 'clear'],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: ['float-left', 'float-right', 'align-left', 'align-center', 'align-right', 'link', 'size', 'remove'],
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'],
  tabIndents: 2,
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  textIndents: [0, 14, 21, 28],
  lineHeights: ['1', '1.2', '1.5', '1.75', '2', '2.5', '3', '4'],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 72, 96, 120, 144],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
  }],
  emojis: ["🤣", "🙌", "💚", "💛", "👏", "😉", "💯", "💕", "💞", "💘", "💙", "💝", "🖤", "💜", "❤️", "😍", "😻", "💓", "💗", "😋", "😇", "😂", "😹", "😘", "💖", "😁", "😀", "🤞", "😲", "😄", "😊", "👍", "😌", "😃", "😅", "✌️", "🤗", "💋", "😗", "😽", "😚", "🤠", "😙", "😺", "👄", "😸", "😏", "😼", "👌", "😎", "😆", "😛", "🙏", "🤝", "🙂", "🤑", "😝", "😐", "😑", "🤤", "😤", "🙃", "🤡", "😶", "😪", "😴", "😵", "😓", "👊", "😦", "😷", "🤐", "😜", "🤓", "👻", "😥", "🙄", "🤔", "🤒", "🙁", "😔", "😯", "☹️", "☠️", "😰", "😩", "😖", "😕", "😒", "😣", "😢", "😮", "😿", "🤧", "😫", "🤥", "😞", "😬", "👎", "💀", "😳", "😨", "🤕", "🤢", "😱", "😭", "😠", "😈", "😧", "💔", "😟", "🙀", "💩", "👿", "😡", "😾", "🖕"],
  stripPastedStyles: false,
  className: '',
  style: {},
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: {},
  draftProps: {},
  hooks: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null
});
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(5);

// EXTERNAL MODULE: ./renderers/atomics/Image/style.scss
var Image_style = __webpack_require__(26);

// EXTERNAL MODULE: ./components/common/Switch/style.scss
var Switch_style = __webpack_require__(25);

// CONCATENATED MODULE: ./components/common/Switch/index.jsx


/* harmony default export */ var Switch = (function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;
  return external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: "switch-button " + className + (active ? ' active' : '')
  });
});
// CONCATENATED MODULE: ./configs/controls.js

/* harmony default export */ var configs_controls = (function (lang) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-undo"
    }),
    type: 'editor-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-redo"
    }),
    type: 'editor-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-format_clear"
    }),
    type: 'editor-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-hr"
    }),
    type: 'editor-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-bold"
    }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-italic"
    }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-underlined"
    }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-strikethrough"
    }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-superscript"
    }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-subscript"
    }),
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings'
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-quote"
    }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-code"
    }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list-ul',
    title: lang.controls.unorderedList,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-list"
    }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list-ol',
    title: lang.controls.orderedList,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-list-numbered"
    }),
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: lang.controls.link,
    type: 'link'
  }, {
    key: 'text-color',
    title: lang.controls.color,
    type: 'text-color'
  }, {
    key: 'line-height',
    title: lang.controls.lineHeight,
    type: 'line-height'
  }, {
    key: 'letter-spacing',
    title: lang.controls.letterSpacing,
    type: 'letter-spacing'
  }, {
    key: 'text-indent',
    title: lang.controls.textIndent,
    type: 'text-indent'
  }, {
    key: 'font-size',
    title: lang.controls.fontSize,
    type: 'font-size'
  }, {
    key: 'font-family',
    title: lang.controls.fontFamily,
    type: 'font-family'
  }, {
    key: 'text-align',
    title: lang.controls.textAlign,
    type: 'text-align'
  }, {
    key: 'media',
    title: lang.controls.media,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-media"
    }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: external_react_default.a.createElement("i", {
      className: "braft-icon-emoji"
    }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: lang.controls.clear,
    type: 'editor-method',
    command: 'clearEditorContent'
  }, {
    key: 'modal',
    type: 'modal'
  }, {
    key: 'button',
    type: 'button'
  }, {
    key: 'dropdown',
    type: 'dropdown'
  }, {
    key: 'component',
    type: 'component'
  }];
});
var imageControlItems = {
  'float-left': {
    text: external_react_default.a.createElement("span", {
      "data-float": "left"
    }, "\uE91E"),
    command: 'setImageFloat|left'
  },
  'float-right': {
    text: external_react_default.a.createElement("span", {
      "data-float": "right"
    }, "\uE914"),
    command: 'setImageFloat|right'
  },
  'align-left': {
    text: external_react_default.a.createElement("span", {
      "data-align": "left"
    }, "\uE027"),
    command: 'setImageAlignment|left'
  },
  'align-center': {
    text: external_react_default.a.createElement("span", {
      "data-align": "center"
    }, "\uE028"),
    command: 'setImageAlignment|center'
  },
  'align-right': {
    text: external_react_default.a.createElement("span", {
      "data-align": "right"
    }, "\uE029"),
    command: 'setImageAlignment|right'
  },
  'size': {
    text: external_react_default.a.createElement("span", null, "\uE3C2"),
    command: 'toggleSizeEditor'
  },
  'link': {
    text: external_react_default.a.createElement("span", null, "\uE91A"),
    command: 'toggleLinkEditor'
  },
  'remove': {
    text: external_react_default.a.createElement("span", null, "\uE9AC"),
    command: 'removeImage'
  }
};
// CONCATENATED MODULE: ./renderers/atomics/Image/index.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Image_Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragStart", function (event) {
      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: _objectSpread({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setDraftProps({
          readOnly: false
        });
      });

      return true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragEnd", function (event) {
      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "executeCommand", function (command) {
      if (typeof command === 'string') {
        var _command$split = command.split('|'),
            _command$split2 = _slicedToArray(_command$split, 2),
            method = _command$split2[0],
            param = _command$split2[1];

        _this[method] && _this[method](param);
      } else if (typeof command === 'function') {
        command(_this.props.block, _this.props.editorState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeImage", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));

      _this.props.editor.setDraftProps({
        readOnly: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLinkEditor", function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSizeEditor", function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLinkInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageLink", function (e) {
      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "confirmImageLink", function () {
      var link = _this.state.tempLink;

      if (link !== null) {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editorState, _this.props.entityKey, {
          link: link
        }));

        window.setImmediate(_this.props.editor.forceRender);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSizeInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageWidth", function (_ref) {
      var currentTarget = _ref.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageHeight", function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "confirmImageSize", function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;
      var newImageSize = {};
      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editorState, _this.props.entityKey, newImageSize));

      window.setImmediate(_this.props.editor.forceRender);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageFloat", function (float) {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editorState, _this.props.block, {
        float: float
      }));

      _this.props.editor.setDraftProps({
        readOnly: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImageAlignment", function (alignment) {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editorState, _this.props.block, {
        alignment: alignment
      }));

      _this.props.editor.setDraftProps({
        readOnly: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showToolbar", function (event) {
      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.props.editor.setDraftProps({
            readOnly: true
          });

          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideToolbar", function (event) {
      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setDraftProps({
          readOnly: false
        });
      });
    });

    return _this;
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language,
          imageControls = _this$props.imageControls;
      var _this$state2 = this.state,
          toolbarVisible = _this$state2.toolbarVisible,
          toolbarOffset = _this$state2.toolbarOffset,
          linkEditorVisible = _this$state2.linkEditorVisible,
          sizeEditorVisible = _this$state2.sizeEditorVisible;
      var blockData = this.props.block.getData();
      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var src = mediaData.src,
          url = mediaData.url,
          link = mediaData.link,
          link_target = mediaData.link_target,
          width = mediaData.width,
          height = mediaData.height;
      var imageStyles = {};
      var clearFix = false;

      if (float) {
        alignment = null;
      } else if (alignment === 'left') {
        imageStyles.float = 'left';
        clearFix = true;
      } else if (alignment === 'right') {
        imageStyles.float = 'right';
        clearFix = true;
      } else if (alignment === 'center') {
        imageStyles.textAlign = "center";
      } else {
        imageStyles.float = 'left';
        clearFix = true;
      }

      var renderedControlItems = imageControls.map(function (item, index) {
        if (typeof item === 'string' && imageControlItems[item]) {
          return external_react_default.a.createElement("a", {
            className: item === 'link' && link ? 'active' : '',
            key: index,
            href: "javascript:void(0);",
            onClick: function onClick() {
              return _this2.executeCommand(imageControlItems[item].command);
            }
          }, imageControlItems[item].text);
        } else if (item && item.onClick && item.text) {
          return external_react_default.a.createElement("a", {
            key: index,
            href: "javascript:void(0);",
            onClick: function onClick() {
              return _this2.executeCommand(item.onClick);
            }
          }, item.text);
        } else {
          return null;
        }
      });
      return external_react_default.a.createElement("div", {
        className: "braft-media-embeder braft-image-embeder"
      }, external_react_default.a.createElement("div", {
        style: imageStyles,
        draggable: true,
        onMouseEnter: this.showToolbar,
        onMouseMove: this.showToolbar,
        onMouseLeave: this.hideToolbar,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        ref: function ref(instance) {
          return _this2.mediaEmbederInstance = instance;
        },
        className: "braft-embed-image"
      }, toolbarVisible ? external_react_default.a.createElement("div", {
        style: {
          marginLeft: toolbarOffset
        },
        ref: function ref(instance) {
          return _this2.toolbarElement = instance;
        },
        "data-float": float,
        "data-align": alignment,
        className: "braft-media-toolbar braft-media-image-toolbar"
      }, linkEditorVisible ? external_react_default.a.createElement("div", {
        className: "braft-media-image-link-editor"
      }, external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.linkEditor.inputWithEnterPlaceHolder,
        onKeyDown: this.handleLinkInputKeyDown,
        onChange: this.setImageLink,
        defaultValue: link
      }), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageLink
      }, language.base.confirm)), external_react_default.a.createElement("div", {
        className: "switch-group"
      }, external_react_default.a.createElement(Switch, {
        active: link_target === '_blank',
        onClick: function onClick() {
          return _this2.setImageLinkTarget(link_target);
        }
      }), external_react_default.a.createElement("label", null, language.linkEditor.openInNewWindow))) : null, sizeEditorVisible ? external_react_default.a.createElement("div", {
        className: "braft-media-image-size-editor"
      }, external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.width,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageWidth,
        defaultValue: width
      }), external_react_default.a.createElement("input", {
        type: "text",
        placeholder: language.base.height,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageHeight,
        defaultValue: height
      }), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.confirmImageSize
      }, language.base.confirm))) : null, renderedControlItems, external_react_default.a.createElement("i", {
        style: {
          marginLeft: toolbarOffset * -1
        },
        className: "braft-embed-image-toolbar-arrow"
      })) : null, external_react_default.a.createElement("img", {
        ref: function ref(instance) {
          return _this2.imageElement = instance;
        },
        src: src || url,
        style: {
          width: width,
          height: height
        },
        width: width,
        height: height
      })), clearFix && external_react_default.a.createElement("div", {
        className: "clearfix",
        style: {
          clear: 'both',
          height: 0,
          lineHeight: 0,
          float: 'none'
        }
      }));
    }
  }, {
    key: "calcToolbarOffset",
    value: function calcToolbarOffset() {
      var viewRect = this.props.containerNode.getBoundingClientRect();
      var toolbarRect = this.toolbarElement.getBoundingClientRect();
      var imageRect = this.imageElement.getBoundingClientRect();
      var right = viewRect.right - (imageRect.right - imageRect.width / 2 + toolbarRect.width / 2);
      var left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2 - viewRect.left;

      if (right < 10) {
        return right - 10;
      } else if (left < 10) {
        return left * -1 + 10;
      } else {
        return 0;
      }
    }
  }, {
    key: "setImageLinkTarget",
    value: function setImageLinkTarget(link_target) {
      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(this.props.editorState, this.props.entityKey, {
        link_target: link_target
      }));
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Video/style.scss
var Video_style = __webpack_require__(24);

// CONCATENATED MODULE: ./components/common/StaticContainer/index.jsx
function StaticContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StaticContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { StaticContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StaticContainer_typeof(obj); }

function StaticContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaticContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaticContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaticContainer_defineProperties(Constructor, staticProps); return Constructor; }

function StaticContainer_possibleConstructorReturn(self, call) { if (call && (StaticContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return StaticContainer_assertThisInitialized(self); }

function StaticContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StaticContainer_getPrototypeOf(o) { StaticContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StaticContainer_getPrototypeOf(o); }

function StaticContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StaticContainer_setPrototypeOf(subClass, superClass); }

function StaticContainer_setPrototypeOf(o, p) { StaticContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StaticContainer_setPrototypeOf(o, p); }



var StaticContainer_default =
/*#__PURE__*/
function (_React$Component) {
  StaticContainer_inherits(_default, _React$Component);

  function _default() {
    StaticContainer_classCallCheck(this, _default);

    return StaticContainer_possibleConstructorReturn(this, StaticContainer_getPrototypeOf(_default).apply(this, arguments));
  }

  StaticContainer_createClass(_default, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, this.props.children);
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./renderers/atomics/Video/index.jsx
function Video_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Video_typeof = function _typeof(obj) { return typeof obj; }; } else { Video_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Video_typeof(obj); }

function Video_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Video_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Video_createClass(Constructor, protoProps, staticProps) { if (protoProps) Video_defineProperties(Constructor.prototype, protoProps); if (staticProps) Video_defineProperties(Constructor, staticProps); return Constructor; }

function Video_possibleConstructorReturn(self, call) { if (call && (Video_typeof(call) === "object" || typeof call === "function")) { return call; } return Video_assertThisInitialized(self); }

function Video_getPrototypeOf(o) { Video_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Video_getPrototypeOf(o); }

function Video_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Video_setPrototypeOf(subClass, superClass); }

function Video_setPrototypeOf(o, p) { Video_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Video_setPrototypeOf(o, p); }

function Video_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Video_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Video_Video =
/*#__PURE__*/
function (_React$Component) {
  Video_inherits(Video, _React$Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    Video_classCallCheck(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Video_possibleConstructorReturn(this, (_getPrototypeOf2 = Video_getPrototypeOf(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Video_defineProperty(Video_assertThisInitialized(Video_assertThisInitialized(_this)), "state", {
      toolbarVisible: false
    });

    Video_defineProperty(Video_assertThisInitialized(Video_assertThisInitialized(_this)), "removeVideo", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    Video_defineProperty(Video_assertThisInitialized(Video_assertThisInitialized(_this)), "showToolbar", function () {
      _this.setState({
        toolbarVisible: true
      });
    });

    Video_defineProperty(Video_assertThisInitialized(Video_assertThisInitialized(_this)), "hideToolbar", function () {
      _this.setState({
        toolbarVisible: false
      });
    });

    return _this;
  }

  Video_createClass(Video, [{
    key: "render",
    value: function render() {
      var toolbarVisible = this.state.toolbarVisible;
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var src = mediaData.src,
          url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "braft-media-video-holder",
        onMouseOver: this.showToolbar,
        onMouseLeave: this.hideToolbar
      }, external_react_default.a.createElement(StaticContainer_default, null, external_react_default.a.createElement("video", {
        controls: true,
        src: src || url,
        poster: meta.poster
      })), toolbarVisible ? external_react_default.a.createElement("div", {
        className: "braft-embed-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeVideo
      }, "\uE9AC")) : null);
    }
  }]);

  return Video;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Audio/style.scss
var Audio_style = __webpack_require__(23);

// CONCATENATED MODULE: ./renderers/atomics/Audio/index.jsx
function Audio_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Audio_typeof = function _typeof(obj) { return typeof obj; }; } else { Audio_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Audio_typeof(obj); }

function Audio_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Audio_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Audio_createClass(Constructor, protoProps, staticProps) { if (protoProps) Audio_defineProperties(Constructor.prototype, protoProps); if (staticProps) Audio_defineProperties(Constructor, staticProps); return Constructor; }

function Audio_possibleConstructorReturn(self, call) { if (call && (Audio_typeof(call) === "object" || typeof call === "function")) { return call; } return Audio_assertThisInitialized(self); }

function Audio_getPrototypeOf(o) { Audio_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Audio_getPrototypeOf(o); }

function Audio_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Audio_setPrototypeOf(subClass, superClass); }

function Audio_setPrototypeOf(o, p) { Audio_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Audio_setPrototypeOf(o, p); }

function Audio_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Audio_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Audio_Audio =
/*#__PURE__*/
function (_React$Component) {
  Audio_inherits(Audio, _React$Component);

  function Audio() {
    var _getPrototypeOf2;

    var _this;

    Audio_classCallCheck(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Audio_possibleConstructorReturn(this, (_getPrototypeOf2 = Audio_getPrototypeOf(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Audio_defineProperty(Audio_assertThisInitialized(Audio_assertThisInitialized(_this)), "state", {
      toolbarVisible: false
    });

    Audio_defineProperty(Audio_assertThisInitialized(Audio_assertThisInitialized(_this)), "removeAudio", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    Audio_defineProperty(Audio_assertThisInitialized(Audio_assertThisInitialized(_this)), "showToolbar", function () {
      _this.setState({
        toolbarVisible: true
      });
    });

    Audio_defineProperty(Audio_assertThisInitialized(Audio_assertThisInitialized(_this)), "hideToolbar", function () {
      _this.setState({
        toolbarVisible: false
      });
    });

    return _this;
  }

  Audio_createClass(Audio, [{
    key: "render",
    value: function render() {
      var toolbarVisible = this.state.toolbarVisible;
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var src = mediaData.src,
          url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;
      return external_react_default.a.createElement("div", {
        className: "braft-media-audio-holder",
        onMouseOver: this.showToolbar,
        onMouseLeave: this.hideToolbar
      }, external_react_default.a.createElement(StaticContainer_default, null, external_react_default.a.createElement("audio", {
        controls: true,
        src: src || url
      })), toolbarVisible ? external_react_default.a.createElement("div", {
        className: "braft-media-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeAudio
      }, "\uE9AC")) : null);
    }
  }]);

  return Audio;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Embed/style.scss
var Embed_style = __webpack_require__(22);

// CONCATENATED MODULE: ./renderers/atomics/Embed/index.jsx
function Embed_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Embed_typeof = function _typeof(obj) { return typeof obj; }; } else { Embed_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Embed_typeof(obj); }

function Embed_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Embed_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Embed_createClass(Constructor, protoProps, staticProps) { if (protoProps) Embed_defineProperties(Constructor.prototype, protoProps); if (staticProps) Embed_defineProperties(Constructor, staticProps); return Constructor; }

function Embed_possibleConstructorReturn(self, call) { if (call && (Embed_typeof(call) === "object" || typeof call === "function")) { return call; } return Embed_assertThisInitialized(self); }

function Embed_getPrototypeOf(o) { Embed_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Embed_getPrototypeOf(o); }

function Embed_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Embed_setPrototypeOf(subClass, superClass); }

function Embed_setPrototypeOf(o, p) { Embed_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Embed_setPrototypeOf(o, p); }

function Embed_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Embed_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Embed_Embed =
/*#__PURE__*/
function (_React$Component) {
  Embed_inherits(Embed, _React$Component);

  function Embed() {
    var _getPrototypeOf2;

    var _this;

    Embed_classCallCheck(this, Embed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Embed_possibleConstructorReturn(this, (_getPrototypeOf2 = Embed_getPrototypeOf(Embed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Embed_defineProperty(Embed_assertThisInitialized(Embed_assertThisInitialized(_this)), "state", {
      toolbarVisible: false
    });

    Embed_defineProperty(Embed_assertThisInitialized(Embed_assertThisInitialized(_this)), "removeEmbed", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    Embed_defineProperty(Embed_assertThisInitialized(Embed_assertThisInitialized(_this)), "showToolbar", function () {
      _this.setState({
        toolbarVisible: true
      });
    });

    Embed_defineProperty(Embed_assertThisInitialized(Embed_assertThisInitialized(_this)), "hideToolbar", function () {
      _this.setState({
        toolbarVisible: false
      });
    });

    return _this;
  }

  Embed_createClass(Embed, [{
    key: "render",
    value: function render() {
      var toolbarVisible = this.state.toolbarVisible;
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var src = mediaData.src,
          url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;
      return external_react_default.a.createElement("div", {
        className: "braft-media-embed-holder",
        onMouseOver: this.showToolbar,
        onMouseLeave: this.hideToolbar
      }, external_react_default.a.createElement(StaticContainer_default, null, external_react_default.a.createElement("div", {
        className: "braft-embed-media-player",
        dangerouslySetInnerHTML: {
          __html: src || url
        }
      })), toolbarVisible ? external_react_default.a.createElement("div", {
        className: "braft-media-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeEmbed
      }, "\uE9AC")) : null);
    }
  }]);

  return Embed;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/HorizontalLine/style.scss
var HorizontalLine_style = __webpack_require__(21);

// CONCATENATED MODULE: ./renderers/atomics/HorizontalLine/index.jsx
function HorizontalLine_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HorizontalLine_typeof = function _typeof(obj) { return typeof obj; }; } else { HorizontalLine_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HorizontalLine_typeof(obj); }

function HorizontalLine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HorizontalLine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HorizontalLine_createClass(Constructor, protoProps, staticProps) { if (protoProps) HorizontalLine_defineProperties(Constructor.prototype, protoProps); if (staticProps) HorizontalLine_defineProperties(Constructor, staticProps); return Constructor; }

function HorizontalLine_possibleConstructorReturn(self, call) { if (call && (HorizontalLine_typeof(call) === "object" || typeof call === "function")) { return call; } return HorizontalLine_assertThisInitialized(self); }

function HorizontalLine_getPrototypeOf(o) { HorizontalLine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HorizontalLine_getPrototypeOf(o); }

function HorizontalLine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HorizontalLine_setPrototypeOf(subClass, superClass); }

function HorizontalLine_setPrototypeOf(o, p) { HorizontalLine_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HorizontalLine_setPrototypeOf(o, p); }

function HorizontalLine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HorizontalLine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var HorizontalLine_HorizontalLine =
/*#__PURE__*/
function (_React$Component) {
  HorizontalLine_inherits(HorizontalLine, _React$Component);

  function HorizontalLine() {
    var _getPrototypeOf2;

    var _this;

    HorizontalLine_classCallCheck(this, HorizontalLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = HorizontalLine_possibleConstructorReturn(this, (_getPrototypeOf2 = HorizontalLine_getPrototypeOf(HorizontalLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    HorizontalLine_defineProperty(HorizontalLine_assertThisInitialized(HorizontalLine_assertThisInitialized(_this)), "removeHorizontalLine", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  HorizontalLine_createClass(HorizontalLine, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "braft-horizontal-line"
      }, external_react_default.a.createElement("div", {
        className: "braft-media-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeHorizontalLine
      }, "\uE9AC")));
    }
  }]);

  return HorizontalLine;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./renderers/styles/blockStyles.js
/* harmony default export */ var blockStyles = (function (customBlockStyleFn) {
  return function (block) {
    var blockAlignment = block.getData() && block.getData().get('textAlign');
    var blockFloat = block.getData() && block.getData().get('float');
    var result = '';

    if (blockAlignment) {
      result = "braft-".concat(blockAlignment, "-aligned-block");
    }

    if (blockFloat) {
      result += " braft-float-".concat(blockFloat);
    }

    if (customBlockStyleFn) {
      result += customBlockStyleFn(block);
    }

    return result;
  };
});
// CONCATENATED MODULE: ./renderers/styles/inlineStyles.js
function inlineStyles_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { inlineStyles_defineProperty(target, key, source[key]); }); } return target; }

function inlineStyles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var inlineStyles = (function (props) {
  var customStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var colorStyles = {};
  var bgColorStyles = {};
  var fontSizeStyles = {};
  var fontFamilyStyles = {};
  var lineHeightStyles = {};
  var letterSpacingtStyles = {};
  var indentStyles = {};
  props.colors.forEach(function (color) {
    var color_id = color.replace('#', '').toUpperCase();
    colorStyles['COLOR-' + color_id] = {
      color: color
    };
    bgColorStyles['BGCOLOR-' + color_id] = {
      backgroundColor: color
    };
  });
  props.fontSizes.forEach(function (fontSize) {
    fontSizeStyles['FONTSIZE-' + fontSize] = {
      fontSize: fontSize
    };
  });
  props.fontFamilies.forEach(function (fontFamily) {
    fontFamilyStyles['FONTFAMILY-' + fontFamily.name.toUpperCase()] = {
      fontFamily: fontFamily.family
    };
  });
  props.lineHeights.forEach(function (lineHeight) {
    lineHeightStyles['LINEHEIGHT-' + lineHeight] = {
      lineHeight: lineHeight
    };
  });
  props.letterSpacings.forEach(function (letterSpacing) {
    letterSpacingtStyles['LETTERSPACING-' + letterSpacing] = {
      letterSpacing: letterSpacing
    };
  });
  props.textIndents.forEach(function (indent) {
    indentStyles['INDENT-' + indent] = {
      paddingLeft: indent,
      paddingRight: indent
    };
  });
  return inlineStyles_objectSpread({
    'SUPERSCRIPT': {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    'SUBSCRIPT': {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    }
  }, colorStyles, bgColorStyles, fontSizeStyles, fontFamilyStyles, lineHeightStyles, letterSpacingtStyles, indentStyles, customStyles);
});
// CONCATENATED MODULE: ./renderers/decorators/Link/index.jsx


function handleStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

var Link_Link = function Link(props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return external_react_default.a.createElement("span", {
    className: "braft-link-wrap"
  }, external_react_default.a.createElement("a", {
    onClick: function onClick(event) {
      return viewLink(event, href);
    },
    className: "braft-link",
    href: href,
    target: target
  }, children));
};

var viewLink = function viewLink(event, link) {
  if (event.getModifierState('Shift')) {
    var tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = '_blank';
    tempLink.click();
  }
};

/* harmony default export */ var decorators_Link = ({
  strategy: handleStrategy,
  component: Link_Link
});
// CONCATENATED MODULE: ./renderers/decorators/index.js

/* harmony default export */ var decorators = ([decorators_Link]);
// CONCATENATED MODULE: ./renderers/index.js
function renderers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { renderers_defineProperty(target, key, source[key]); }); } return target; }

function renderers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var renderers_getAtomicBlockComponent = function getAtomicBlockComponent(block, superProps) {
  return function (props) {
    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();

    var mediaProps = renderers_objectSpread({}, superProps, {
      block: block,
      mediaData: mediaData,
      entityKey: entityKey
    });

    if (mediaType === 'IMAGE') {
      return external_react_default.a.createElement(Image_Image, mediaProps);
    } else if (mediaType === 'AUDIO') {
      return external_react_default.a.createElement(Audio_Audio, mediaProps);
    } else if (mediaType === 'VIDEO') {
      return external_react_default.a.createElement(Video_Video, mediaProps);
    } else if (mediaType === 'EMBED') {
      return external_react_default.a.createElement(Embed_Embed, mediaProps);
    } else if (mediaType === 'HR') {
      return external_react_default.a.createElement(HorizontalLine_HorizontalLine, mediaProps);
    }

    if (superProps.extendAtomics) {
      var atomics = superProps.extendAtomics;

      for (var i = 0; i < atomics.length; i++) {
        if (mediaType === atomics[i].type) {
          var Component = atomics[i].component;
          return external_react_default.a.createElement(Component, mediaProps);
        }
      }
    }

    return null;
  };
};

var getBlockRendererFn = function getBlockRendererFn(props, customBlockRendererFn) {
  return function (block) {
    var blockRenderer = null;

    if (block.getType() === 'atomic') {
      blockRenderer = {
        component: renderers_getAtomicBlockComponent(block, props),
        editable: false
      };
    } else if (customBlockRendererFn) {
      blockRenderer = customBlockRendererFn(block) || null;
    }

    return blockRenderer;
  };
};
var customBlockRenderMap = Object(external_immutable_["Map"])({
  'atomic': {
    element: ''
  },
  'code-block': {
    element: 'code',
    wrapper: external_draft_js_["DefaultDraftBlockRenderMap"].get('code-block').wrapper
  }
});
var getBlockStyleFn = blockStyles;
var getCustomStyleMap = inlineStyles;
var renderers_decorators = decorators;
// EXTERNAL MODULE: ./components/business/ControlBar/style.scss
var ControlBar_style = __webpack_require__(20);

// EXTERNAL MODULE: ./components/business/LinkEditor/style.scss
var LinkEditor_style = __webpack_require__(19);

// EXTERNAL MODULE: ./components/common/DropDown/style.scss
var DropDown_style = __webpack_require__(18);

// CONCATENATED MODULE: ./helpers/responsive.js

var resizeEventHandlers = [];
var responsiveHelperInited = false;
var debouce = false;
/* harmony default export */ var responsive = ({
  resolve: function resolve(eventHandler) {
    var id = external_braft_utils_["BaseUtils"].UniqueIndex();
    resizeEventHandlers.push({
      id: id,
      eventHandler: eventHandler
    });
    return id;
  },
  unresolve: function unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter(function (item) {
      return item.id !== id;
    });
  }
});

if (!responsiveHelperInited) {
  window.addEventListener('resize', function (event) {
    clearTimeout(debouce);
    debouce = setTimeout(function () {
      resizeEventHandlers.map(function (item) {
        typeof item.eventHandler === 'function' && item.eventHandler(event);
      });
      debouce = false;
    }, 100);
  });
  responsiveHelperInited = true;
}
// CONCATENATED MODULE: ./components/common/DropDown/index.jsx
function DropDown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DropDown_typeof = function _typeof(obj) { return typeof obj; }; } else { DropDown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DropDown_typeof(obj); }

function DropDown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DropDown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DropDown_createClass(Constructor, protoProps, staticProps) { if (protoProps) DropDown_defineProperties(Constructor.prototype, protoProps); if (staticProps) DropDown_defineProperties(Constructor, staticProps); return Constructor; }

function DropDown_possibleConstructorReturn(self, call) { if (call && (DropDown_typeof(call) === "object" || typeof call === "function")) { return call; } return DropDown_assertThisInitialized(self); }

function DropDown_getPrototypeOf(o) { DropDown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DropDown_getPrototypeOf(o); }

function DropDown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DropDown_setPrototypeOf(subClass, superClass); }

function DropDown_setPrototypeOf(o, p) { DropDown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DropDown_setPrototypeOf(o, p); }

function DropDown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DropDown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var DropDown_DropDown =
/*#__PURE__*/
function (_React$Component) {
  DropDown_inherits(DropDown, _React$Component);

  function DropDown() {
    var _getPrototypeOf2;

    var _this;

    DropDown_classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = DropDown_possibleConstructorReturn(this, (_getPrototypeOf2 = DropDown_getPrototypeOf(DropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "alive", false);

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "responsiveResolveId", null);

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "dropDownHandlerElement", null);

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "dropDownContentElement", null);

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "componentId", _this.props.componentId || 'BRAFT-DROPDOWN-' + external_braft_utils_["BaseUtils"].UniqueIndex());

    DropDown_defineProperty(DropDown_assertThisInitialized(DropDown_assertThisInitialized(_this)), "state", {
      active: false,
      offset: 0,
      maxHeight: 100
    });

    return _this;
  }

  DropDown_createClass(DropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.alive = true;
      document.body.addEventListener('click', function (event) {
        _this2.registerClickEvent(event);
      });
      this.responsiveResolveId = responsive.resolve(function () {
        _this2.fixDropDownPosition();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (!this.props.disabled && next.disabled) {
        this.hide();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (!prevState.active && this.state.active) {
        this.fixDropDownPosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      document.body.removeEventListener('click', function (event) {
        _this3.registerClickEvent(event);
      });
      this.alive = false;
      responsive.unresolve(this.responsiveResolveId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          active = _this$state.active,
          offset = _this$state.offset,
          maxHeight = _this$state.maxHeight;
      var _this$props = this.props,
          caption = _this$props.caption,
          htmlCaption = _this$props.htmlCaption,
          hoverTitle = _this$props.hoverTitle,
          disabled = _this$props.disabled,
          showDropDownArrow = _this$props.showDropDownArrow,
          arrowActive = _this$props.arrowActive,
          className = _this$props.className,
          children = _this$props.children;
      disabled && (active = false);
      return external_react_default.a.createElement("div", {
        id: this.componentId,
        className: "Braft-dropdown " + (active ? "active " : "") + (disabled ? "disabled " : "") + className
      }, htmlCaption ? external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        title: hoverTitle,
        "data-braft-component-id": this.componentId,
        dangerouslySetInnerHTML: htmlCaption ? {
          __html: htmlCaption
        } : null,
        ref: function ref(instance) {
          return _this4.dropDownHandlerElement = instance;
        }
      }) : external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        title: hoverTitle,
        "data-braft-component-id": this.componentId,
        ref: function ref(instance) {
          return _this4.dropDownHandlerElement = instance;
        }
      }, external_react_default.a.createElement("span", null, caption), showDropDownArrow !== false ? external_react_default.a.createElement("i", {
        className: "braft-icon-drop-down"
      }) : null), external_react_default.a.createElement("div", {
        className: "dropdown-content",
        style: {
          marginLeft: offset
        },
        ref: function ref(instance) {
          return _this4.dropDownContentElement = instance;
        }
      }, external_react_default.a.createElement("i", {
        style: {
          marginLeft: offset * -1
        },
        className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
      }), external_react_default.a.createElement("div", {
        className: "dropdown-content-inner",
        style: {
          maxHeight: maxHeight
        }
      }, children)));
    }
  }, {
    key: "fixDropDownPosition",
    value: function fixDropDownPosition() {
      var viewRect = this.props.containerNode.getBoundingClientRect();
      var editorContentRect = this.props.containerNode.querySelector('.BraftEditor-content').getBoundingClientRect();
      var handlerRect = this.dropDownHandlerElement.getBoundingClientRect();
      var contentRect = this.dropDownContentElement.getBoundingClientRect();
      var maxHeight = editorContentRect.height + (editorContentRect.top - (handlerRect.top + handlerRect.height)) - 30;
      var offset = 0;
      var right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
      var left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;
      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        offset = right - 10;
      } else if (left < 10) {
        offset = left * -1 + 10;
      }

      if (offset !== this.state.offset || maxHeight !== this.state.maxHeight) {
        this.setState({
          offset: offset,
          maxHeight: maxHeight
        });
      }
    }
  }, {
    key: "registerClickEvent",
    value: function registerClickEvent(event) {
      var autoHide = this.props.autoHide;
      var active = false;

      if (event.target.dataset.braftComponentId === this.componentId) {
        active = event.target.dataset.keepActive ? true : !this.state.active;
      } else if (autoHide === false) {
        active = this.state.active;
      }

      this.alive && this.setState({
        active: active
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.setState({
        active: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        active: false
      });
    }
  }]);

  return DropDown;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/LinkEditor/index.jsx
function LinkEditor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LinkEditor_typeof = function _typeof(obj) { return typeof obj; }; } else { LinkEditor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LinkEditor_typeof(obj); }

function LinkEditor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LinkEditor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LinkEditor_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkEditor_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkEditor_defineProperties(Constructor, staticProps); return Constructor; }

function LinkEditor_possibleConstructorReturn(self, call) { if (call && (LinkEditor_typeof(call) === "object" || typeof call === "function")) { return call; } return LinkEditor_assertThisInitialized(self); }

function LinkEditor_getPrototypeOf(o) { LinkEditor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LinkEditor_getPrototypeOf(o); }

function LinkEditor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LinkEditor_setPrototypeOf(subClass, superClass); }

function LinkEditor_setPrototypeOf(o, p) { LinkEditor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LinkEditor_setPrototypeOf(o, p); }

function LinkEditor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LinkEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var LinkEditor_LinkEditor =
/*#__PURE__*/
function (_React$Component) {
  LinkEditor_inherits(LinkEditor, _React$Component);

  function LinkEditor() {
    var _getPrototypeOf2;

    var _this;

    LinkEditor_classCallCheck(this, LinkEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = LinkEditor_possibleConstructorReturn(this, (_getPrototypeOf2 = LinkEditor_getPrototypeOf(LinkEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "state", {
      href: '',
      target: ''
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "dropDownComponent", null);

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "handeKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();

        e.preventDefault();
        return false;
      }
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "inputLink", function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "setTarget", function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "handleCancel", function () {
      _this.dropDownComponent.hide();
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "handleUnlink", function () {
      _this.dropDownComponent.hide();

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, false));
    });

    LinkEditor_defineProperty(LinkEditor_assertThisInitialized(LinkEditor_assertThisInitialized(_this)), "handleConfirm", function () {
      var _this$state = _this.state,
          href = _this$state.href,
          target = _this$state.target;

      var hookReturns = _this.props.hooks('toggle-link', {
        href: href,
        target: target
      })({
        href: href,
        target: target
      });

      _this.dropDownComponent.hide();

      _this.props.editor.requestFocus();

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns) {
        typeof hookReturns.href === 'string' && (href = hookReturns.href);
        typeof hookReturns.target === 'string' && (target = hookReturns.target);
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, href, target));
    });

    return _this;
  }

  LinkEditor_createClass(LinkEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      var _ContentUtils$getSele = external_braft_utils_["ContentUtils"].getSelectionEntityData(next.editorState, 'LINK'),
          href = _ContentUtils$getSele.href,
          target = _ContentUtils$getSele.target;

      this.setState({
        href: href || '',
        target: target || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          href = _this$state2.href,
          target = _this$state2.target;
      var caption = external_react_default.a.createElement("i", {
        className: "braft-icon-link"
      });
      var textSelected = !external_braft_utils_["ContentUtils"].isSelectionCollapsed(this.props.editorState) && external_braft_utils_["ContentUtils"].getSelectionBlockType(this.props.editorState) !== 'atomic';
      return external_react_default.a.createElement("div", {
        className: "control-item-group"
      }, external_react_default.a.createElement(DropDown_DropDown, {
        caption: caption,
        hoverTitle: this.props.language.controls.link,
        autoHide: false,
        containerNode: this.props.containerNode,
        showDropDownArrow: false,
        disabled: !textSelected,
        ref: function ref(instance) {
          return _this2.dropDownComponent = instance;
        },
        className: "control-item dropdown link-editor-dropdown"
      }, external_react_default.a.createElement("div", {
        className: "braft-link-editor"
      }, external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: href,
        spellCheck: false,
        placeholder: this.props.language.linkEditor.inputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.inputLink
      })), external_react_default.a.createElement("div", {
        className: "switch-group"
      }, external_react_default.a.createElement(Switch, {
        active: target === '_blank',
        onClick: this.setTarget
      }), external_react_default.a.createElement("label", null, this.props.language.linkEditor.openInNewWindow)), external_react_default.a.createElement("div", {
        className: "buttons"
      }, external_react_default.a.createElement("a", {
        onClick: this.handleUnlink,
        className: "primary pull-left",
        href: "javascript:void(0);"
      }, external_react_default.a.createElement("i", {
        className: "braft-icon-close"
      }), external_react_default.a.createElement("span", null, this.props.language.linkEditor.removeLink)), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: "primary pull-right"
      }, this.props.language.base.confirm), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "default pull-right"
      }, this.props.language.base.cancel)))), external_react_default.a.createElement("button", {
        type: "button",
        title: this.props.language.controls.unlink,
        className: "control-item button",
        onClick: this.handleUnlink,
        disabled: !textSelected || !href
      }, external_react_default.a.createElement("i", {
        className: "braft-icon-link-off"
      })));
    }
  }]);

  return LinkEditor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/Headings/style.scss
var Headings_style = __webpack_require__(17);

// CONCATENATED MODULE: ./configs/maps.js

var maps_getHeadings = function getHeadings(lang) {
  return [{
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: external_react_default.a.createElement("h1", null, lang.controls.header, " 1"),
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: external_react_default.a.createElement("h2", null, lang.controls.header, " 2"),
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: external_react_default.a.createElement("h3", null, lang.controls.header, " 3"),
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: external_react_default.a.createElement("h4", null, lang.controls.header, " 4"),
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: external_react_default.a.createElement("h5", null, lang.controls.header, " 5"),
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: external_react_default.a.createElement("h6", null, lang.controls.header, " 6"),
    type: 'block-type',
    command: 'header-six'
  }, {
    key: 'unstyled',
    title: lang.controls.normal,
    text: lang.controls.normal,
    type: 'block-type',
    command: 'unstyled'
  }];
};
var blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
};
// CONCATENATED MODULE: ./components/business/Headings/index.jsx





/* harmony default export */ var Headings = (function (props) {
  var headings = maps_getHeadings(props.language);
  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === props.current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal;
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.headings,
    arrowActive: currentHeadingIndex === 0,
    className: "control-item dropdown headings-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, headings.map(function (item, index) {
    var isActive = props.current === item.command;
    return external_react_default.a.createElement("li", {
      key: index,
      className: "menu-item" + (isActive ? ' active' : ''),
      onClick: function onClick() {
        return props.onChange(item.command, item.type);
      }
    }, item.text);
  })));
});
// EXTERNAL MODULE: ./components/business/TextColor/style.scss
var TextColor_style = __webpack_require__(16);

// EXTERNAL MODULE: ./components/common/ColorPicker/style.scss
var ColorPicker_style = __webpack_require__(15);

// CONCATENATED MODULE: ./components/common/ColorPicker/index.jsx


/* harmony default export */ var ColorPicker = (function (props) {
  var current = props.current,
      colors = props.colors,
      onChange = props.onChange,
      language = props.language;
  return external_react_default.a.createElement("div", {
    className: "braft-color-list-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "braft-color-list"
  }, colors.map(function (item, index) {
    var className = item === current ? 'color-item active' : 'color-item';
    return external_react_default.a.createElement("li", {
      key: index,
      title: item,
      className: className,
      style: {
        color: item
      },
      "data-color": item.replace('#', ''),
      onClick: function onClick(e) {
        return props.onChange(e.currentTarget.dataset.color);
      }
    });
  })));
});
// CONCATENATED MODULE: ./components/business/TextColor/index.jsx
function TextColor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TextColor_typeof = function _typeof(obj) { return typeof obj; }; } else { TextColor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TextColor_typeof(obj); }

function TextColor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TextColor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TextColor_createClass(Constructor, protoProps, staticProps) { if (protoProps) TextColor_defineProperties(Constructor.prototype, protoProps); if (staticProps) TextColor_defineProperties(Constructor, staticProps); return Constructor; }

function TextColor_possibleConstructorReturn(self, call) { if (call && (TextColor_typeof(call) === "object" || typeof call === "function")) { return call; } return TextColor_assertThisInitialized(self); }

function TextColor_getPrototypeOf(o) { TextColor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TextColor_getPrototypeOf(o); }

function TextColor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TextColor_setPrototypeOf(subClass, superClass); }

function TextColor_setPrototypeOf(o, p) { TextColor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TextColor_setPrototypeOf(o, p); }

function TextColor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TextColor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TextColor_TextColor =
/*#__PURE__*/
function (_React$Component) {
  TextColor_inherits(TextColor, _React$Component);

  function TextColor() {
    var _getPrototypeOf2;

    var _this;

    TextColor_classCallCheck(this, TextColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = TextColor_possibleConstructorReturn(this, (_getPrototypeOf2 = TextColor_getPrototypeOf(TextColor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    TextColor_defineProperty(TextColor_assertThisInitialized(TextColor_assertThisInitialized(_this)), "state", {
      colorType: 'color'
    });

    TextColor_defineProperty(TextColor_assertThisInitialized(TextColor_assertThisInitialized(_this)), "dropDownComponentId", 'BRAFT-DROPDOWN-' + external_braft_utils_["BaseUtils"].UniqueIndex());

    TextColor_defineProperty(TextColor_assertThisInitialized(TextColor_assertThisInitialized(_this)), "switchColorType", function (_ref) {
      var currentTarget = _ref.currentTarget;

      _this.setState({
        colorType: currentTarget.dataset.type
      });
    });

    TextColor_defineProperty(TextColor_assertThisInitialized(TextColor_assertThisInitialized(_this)), "toggleColor", function (color) {
      var hookReturns = _this.props.hooks("toggle-text-".concat(_this.state.colorType), color)(color);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        color = hookReturns;
      }

      if (_this.state.colorType === 'color') {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionColor(_this.props.editorState, color, _this.props.colors));
      } else {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBackgroundColor(_this.props.editorState, color, _this.props.colors));
      }

      _this.dropDownComponent.hide();

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  TextColor_createClass(TextColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      this.props.colors.forEach(function (color) {
        var color_id = color.replace('#', '');

        if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(_this2.props.editorState, 'COLOR-' + color_id)) {
          captionStyle.color = color;
          colorType === 'color' && (currentColor = color);
        }

        if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(_this2.props.editorState, 'BGCOLOR-' + color_id)) {
          captionStyle.backgroundColor = color;
          colorType === 'background-color' && (currentColor = color);
        }
      });
      var caption = external_react_default.a.createElement("i", {
        style: captionStyle,
        className: "braft-icon-text-color"
      }, external_react_default.a.createElement("span", {
        className: "path1"
      }), external_react_default.a.createElement("span", {
        className: "path2"
      }));
      return external_react_default.a.createElement(DropDown_DropDown, {
        caption: caption,
        hoverTitle: this.props.language.controls.color,
        showDropDownArrow: false,
        containerNode: this.props.containerNode,
        componentId: this.dropDownComponentId,
        ref: function ref(instance) {
          return _this2.dropDownComponent = instance;
        },
        className: "control-item dropdown text-color-dropdown"
      }, external_react_default.a.createElement("div", {
        className: "braft-text-color-picker-wrap"
      }, external_react_default.a.createElement("div", {
        className: "braft-color-switch-buttons",
        style: this.props.enableBackgroundColor ? {} : {
          display: 'none'
        }
      }, external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "color",
        "data-keep-active": true,
        "data-braft-component-id": this.dropDownComponentId,
        className: colorType === 'color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.textColor), external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "background-color",
        "data-keep-active": true,
        "data-braft-component-id": this.dropDownComponentId,
        className: colorType === 'backgroun-color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.backgroundColor)), external_react_default.a.createElement(ColorPicker, {
        width: 200,
        language: this.props.language,
        current: currentColor,
        disableAlpha: true,
        colors: this.props.colors,
        onChange: this.toggleColor
      })));
    }
  }]);

  return TextColor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/FontSize/style.scss
var FontSize_style = __webpack_require__(14);

// CONCATENATED MODULE: ./components/business/FontSize/index.jsx





var FontSize_toggleFontSize = function toggleFontSize(event, props) {
  var fontSize = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-font-size', fontSize)(fontSize);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(fontSize)) {
    fontSize = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontSize(props.editorState, fontSize, props.fontSizes));
  props.editor.requestFocus();
};

/* harmony default export */ var FontSize = (function (props) {
  var caption = null;
  var currentFontSize = null;
  props.fontSizes.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item + 'px';
      currentFontSize = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.fontSize,
    className: "control-item dropdown braft-font-size-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "braft-font-sizes-wrap"
  }, props.fontSizes.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentFontSize ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        return FontSize_toggleFontSize(event, props);
      }
    }, item + 'px');
  })));
});
// EXTERNAL MODULE: ./components/business/LineHeight/style.scss
var LineHeight_style = __webpack_require__(13);

// CONCATENATED MODULE: ./components/business/LineHeight/index.jsx





var LineHeight_toggleLineHeight = function toggleLineHeight(event, props) {
  var lineHeight = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-line-height', lineHeight)(lineHeight);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    lineHeight = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLineHeight(props.editorState, lineHeight, props.lineHeights));
  props.editor.requestFocus();
};

/* harmony default export */ var LineHeight = (function (props) {
  var caption = null;
  var currentLineHeight = null;
  props.lineHeights.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.lineHeight,
    className: "control-item dropdown braft-line-height-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "braft-line-heights-wrap"
  }, props.lineHeights.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLineHeight ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        return LineHeight_toggleLineHeight(event, props);
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/FontFamily/style.scss
var FontFamily_style = __webpack_require__(12);

// CONCATENATED MODULE: ./components/business/FontFamily/index.jsx





var FontFamily_toggleFontFamily = function toggleFontFamily(event, props) {
  var fontFamilyName = event.currentTarget.dataset.name;
  var hookReturns = props.hooks('toggle-font-family', fontFamilyName)(fontFamilyName, props.fontFamilies);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    fontFamilyName = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontFamily(props.editorState, fontFamilyName, props.fontFamilies));
  props.editor.requestFocus();
};

/* harmony default export */ var FontFamily = (function (props) {
  var caption = null;
  var currentIndex = null;
  props.fontFamilies.find(function (item, index) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'FONTFAMILY-' + item.name)) {
      caption = item.name;
      currentIndex = index;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.fontFamily,
    arrowActive: currentIndex === 0,
    className: "control-item dropdown font-family-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, props.fontFamilies.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: "menu-item " + (index === currentIndex ? 'active' : ''),
      "data-name": item.name,
      onClick: function onClick(event) {
        return FontFamily_toggleFontFamily(event, props);
      }
    }, external_react_default.a.createElement("span", {
      style: {
        fontFamily: item.family
      }
    }, item.name));
  })));
});
// CONCATENATED MODULE: ./components/business/TextAlign/index.jsx
function TextAlign_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TextAlign_typeof = function _typeof(obj) { return typeof obj; }; } else { TextAlign_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TextAlign_typeof(obj); }

function TextAlign_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TextAlign_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TextAlign_createClass(Constructor, protoProps, staticProps) { if (protoProps) TextAlign_defineProperties(Constructor.prototype, protoProps); if (staticProps) TextAlign_defineProperties(Constructor, staticProps); return Constructor; }

function TextAlign_possibleConstructorReturn(self, call) { if (call && (TextAlign_typeof(call) === "object" || typeof call === "function")) { return call; } return TextAlign_assertThisInitialized(self); }

function TextAlign_getPrototypeOf(o) { TextAlign_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TextAlign_getPrototypeOf(o); }

function TextAlign_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TextAlign_setPrototypeOf(subClass, superClass); }

function TextAlign_setPrototypeOf(o, p) { TextAlign_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TextAlign_setPrototypeOf(o, p); }

function TextAlign_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TextAlign_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TextAlign_TextAlign =
/*#__PURE__*/
function (_React$Component) {
  TextAlign_inherits(TextAlign, _React$Component);

  function TextAlign() {
    var _getPrototypeOf2;

    var _this;

    TextAlign_classCallCheck(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = TextAlign_possibleConstructorReturn(this, (_getPrototypeOf2 = TextAlign_getPrototypeOf(TextAlign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    TextAlign_defineProperty(TextAlign_assertThisInitialized(TextAlign_assertThisInitialized(_this)), "state", {
      currentAlignment: undefined
    });

    TextAlign_defineProperty(TextAlign_assertThisInitialized(TextAlign_assertThisInitialized(_this)), "setAlignment", function (event) {
      var alignment = event.currentTarget.dataset.alignment;

      var hookReturns = _this.props.hooks("toggle-text-alignment", alignment)(alignment);

      if (_this.props.textAligns.indexOf(hookReturns) > -1) {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionAlignment(_this.props.editorState, alignment));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  TextAlign_createClass(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      this.setState({
        currentAlignment: external_braft_utils_["ContentUtils"].getSelectionBlockData(next.editorState, 'textAlign')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var textAlignmentTitles = [this.props.language.controls.alignLeft, this.props.language.controls.alignCenter, this.props.language.controls.alignRight, this.props.language.controls.alignJustify];
      return external_react_default.a.createElement("div", {
        className: "control-item-group"
      }, this.props.textAligns.map(function (item, index) {
        return external_react_default.a.createElement("button", {
          type: "button",
          key: index,
          title: textAlignmentTitles[index],
          "data-alignment": item,
          className: 'control-item button ' + (item === _this2.state.currentAlignment ? 'active' : null),
          onClick: _this2.setAlignment
        }, external_react_default.a.createElement("i", {
          className: "braft-icon-align-" + item
        }));
      }));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/EmojiPicker/style.scss
var EmojiPicker_style = __webpack_require__(11);

// CONCATENATED MODULE: ./components/business/EmojiPicker/index.jsx





var EmojiPicker_insertEmoji = function insertEmoji(event, props) {
  var emoji = event.currentTarget.dataset.emoji;
  var hookReturns = props.hooks('insert-emoji', emoji)(emoji);

  if (hookReturns === false) {
    return false;
  }

  if (typeof hookReturns === 'string') {
    emoji = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].insertText(props.editorState, emoji));
  props.editor.requestFocus();
};

/* harmony default export */ var EmojiPicker = (function (props) {
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: props.defaultCaption,
    showDropDownArrow: false,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.emoji,
    className: "control-item dropdown braft-emoji-dropdown"
  }, external_react_default.a.createElement("div", {
    className: "braft-emojis-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "braft-emojis"
  }, props.emojis.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      "data-emoji": item,
      onClick: function onClick(event) {
        return EmojiPicker_insertEmoji(event, props);
      }
    }, item);
  }))));
});
// EXTERNAL MODULE: ./components/business/LetterSpacing/style.scss
var LetterSpacing_style = __webpack_require__(10);

// CONCATENATED MODULE: ./components/business/LetterSpacing/index.jsx





var LetterSpacing_toggleLetterSpacing = function toggleLetterSpacing(event, props) {
  var letterSpacing = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-letter-spacing', letterSpacing)(letterSpacing);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    letterSpacing = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLetterSpacing(props.editorState, letterSpacing, props.letterSpacings));
  props.editor.requestFocus();
};

/* harmony default export */ var LetterSpacing = (function (props) {
  var caption = null;
  var currentLetterSpacing = null;
  props.letterSpacings.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.letterSpacing,
    className: "control-item dropdown braft-letter-spacing-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "braft-letter-spacings-wrap"
  }, props.letterSpacings.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLetterSpacing ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        return LetterSpacing_toggleLetterSpacing(event, props);
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/TextIndent/style.scss
var TextIndent_style = __webpack_require__(9);

// CONCATENATED MODULE: ./components/business/TextIndent/index.jsx





var TextIndent_toggleTextIndent = function toggleTextIndent(event, props) {
  var textIndent = event.currentTarget.dataset.size;
  var hookReturns = props.hooks('toggle-text-indent', textIndent)(textIndent);

  if (hookReturns === false) {
    return false;
  }

  if (!isNaN(hookReturns)) {
    textIndent = hookReturns;
  }

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionIndent(props.editorState, textIndent, props.textIndents));
  props.editor.requestFocus();
};

/* harmony default export */ var TextIndent = (function (props) {
  var caption = null;
  var currentIndent = null;
  props.textIndents.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'INDENT-' + item)) {
      caption = item;
      currentIndent = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption || props.defaultCaption,
    containerNode: props.containerNode,
    hoverTitle: props.language.controls.textIndent,
    className: "control-item dropdown braft-indent-dropdown"
  }, external_react_default.a.createElement("ul", {
    className: "braft-text-indents-wrap"
  }, props.textIndents.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentIndent ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        return TextIndent_toggleTextIndent(event, props);
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/common/Modal/style.scss
var Modal_style = __webpack_require__(8);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(4);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/common/Modal/index.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Modal_typeof = function _typeof(obj) { return typeof obj; }; } else { Modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Modal_typeof(obj); }

function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

function Modal_possibleConstructorReturn(self, call) { if (call && (Modal_typeof(call) === "object" || typeof call === "function")) { return call; } return Modal_assertThisInitialized(self); }

function Modal_getPrototypeOf(o) { Modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Modal_getPrototypeOf(o); }

function Modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Modal_setPrototypeOf(subClass, superClass); }

function Modal_setPrototypeOf(o, p) { Modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Modal_setPrototypeOf(o, p); }

function Modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Modal_inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    Modal_classCallCheck(this, Modal);

    _this = Modal_possibleConstructorReturn(this, Modal_getPrototypeOf(Modal).call(this, props));

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleTransitionEnd", function () {
      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        external_react_dom_default.a.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleCancel", function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "handleConfirm", function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    });

    Modal_defineProperty(Modal_assertThisInitialized(Modal_assertThisInitialized(_this)), "close", function () {
      _this.unrenderComponent();

      _this.props.onClose && _this.props.onClose();
    });

    _this.active = false;
    _this.componentId = 'BRAFT-MODAL-' + external_braft_utils_["BaseUtils"].UniqueIndex();
    return _this;
  }

  Modal_createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.active = true;
        this.renderComponent(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.visible && !next.visible) {
        this.unrenderComponent();
      } else if (this.props.visible || next.visible) {
        this.active = true;
        this.renderComponent(next);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "unrenderComponent",
    value: function unrenderComponent() {
      this.active = false;
      this.activeId && window.clearImmediate(this.activeId);

      if (this.rootElement && this.rootElement.classList) {
        this.rootElement.classList.remove('active');
      }
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(props) {
      var _this2 = this;

      if (!this.active) {
        return false;
      }

      var title = props.title,
          className = props.className,
          width = props.width,
          height = props.height,
          children = props.children,
          confirmable = props.confirmable,
          showHeader = props.showHeader,
          showFooter = props.showFooter,
          showCancel = props.showCancel,
          showConfirm = props.showConfirm,
          showClose = props.showClose,
          cancelText = props.cancelText,
          confirmText = props.confirmText,
          bottomText = props.bottomText,
          language = props.language;
      typeof showCancel === 'undefined' && (showCancel = true);
      typeof showClose === 'undefined' && (showClose = true);
      typeof showConfirm === 'undefined' && (showConfirm = true);
      var childComponent = external_react_default.a.createElement("div", {
        className: "braft-modal " + (className || '')
      }, external_react_default.a.createElement("div", {
        className: "braft-modal-mask"
      }), external_react_default.a.createElement("div", {
        onTransitionEnd: this.handleTransitionEnd,
        style: {
          width: width,
          height: height
        },
        className: "braft-modal-content"
      }, external_react_default.a.createElement("div", {
        className: "braft-modal-header"
      }, external_react_default.a.createElement("h3", {
        className: "braft-modal-caption"
      }, title), showClose && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.close,
        className: "braft-modal-close-button"
      }, external_react_default.a.createElement("i", {
        className: "braft-icon-close"
      }))), external_react_default.a.createElement("div", {
        className: "braft-modal-body"
      }, children), showFooter ? external_react_default.a.createElement("div", {
        className: "braft-modal-footer"
      }, external_react_default.a.createElement("div", {
        className: "braft-modal-addon-text"
      }, bottomText), external_react_default.a.createElement("div", {
        className: "braft-modal-buttons"
      }, showCancel && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "braft-modal-cancel"
      }, cancelText || language.base.cancel), showConfirm && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: "braft-modal-confirm " + (!confirmable ? 'disabled' : '')
      }, confirmText || language.base.confirm))) : null));
      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'braft-modal-root';
        document.body.appendChild(this.rootElement);
      }

      external_react_dom_default.a.render(childComponent, this.rootElement);
      this.activeId = window.setImmediate(function () {
        _this2.rootElement.classList.add('active');
      });
    }
  }]);

  return Modal;
}(external_react_default.a.Component);

Modal_defineProperty(Modal_Modal, "defaultProps", {
  showHeader: true,
  showFooter: true
});


var Modal_showModal = function showModal(props) {
  var hostNode = document.createElement('div');
  hostNode.style.display = 'none';
  document.body.appendChild(hostNode);

  var close = function close() {
    external_react_dom_default.a.unmountComponentAtNode(hostNode) && hostNode.parentNode.removeChild(hostNode);
  };

  var onConfirm = function onConfirm() {
    close();
    props.onConfirm && props.onConfirm();
  };

  var onCancel = function onCancel() {
    close();
    props.onCancel && props.onCancel();
  };

  var onClose = function onClose() {
    close();
    props.onClose && props.onClose();
  };

  var extProps = {
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onClose,
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  };
  var modalInstance = external_react_dom_default.a.render(external_react_default.a.createElement(Modal_Modal, _extends({}, props, extProps)), hostNode);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;
  return modalInstance;
};
// CONCATENATED MODULE: ./components/business/ControlBar/index.jsx
function ControlBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ControlBar_typeof = function _typeof(obj) { return typeof obj; }; } else { ControlBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ControlBar_typeof(obj); }

function ControlBar_extends() { ControlBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ControlBar_extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ControlBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ControlBar_defineProperty(target, key, source[key]); }); } return target; }

function ControlBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ControlBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ControlBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ControlBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ControlBar_defineProperties(Constructor, staticProps); return Constructor; }

function ControlBar_possibleConstructorReturn(self, call) { if (call && (ControlBar_typeof(call) === "object" || typeof call === "function")) { return call; } return ControlBar_assertThisInitialized(self); }

function ControlBar_getPrototypeOf(o) { ControlBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ControlBar_getPrototypeOf(o); }

function ControlBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ControlBar_setPrototypeOf(subClass, superClass); }

function ControlBar_setPrototypeOf(o, p) { ControlBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ControlBar_setPrototypeOf(o, p); }

function ControlBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ControlBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
};

var ControlBar_ControlBar =
/*#__PURE__*/
function (_React$Component) {
  ControlBar_inherits(ControlBar, _React$Component);

  function ControlBar() {
    var _getPrototypeOf2;

    var _this;

    ControlBar_classCallCheck(this, ControlBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ControlBar_possibleConstructorReturn(this, (_getPrototypeOf2 = ControlBar_getPrototypeOf(ControlBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "mediaLibiraryModal", null);

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "extendedModals", {});

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "openBraftFinder", function () {
      if (!_this.props.braftFinder || !_this.props.braftFinder.ReactComponent) {
        return false;
      }

      if (_this.props.hooks('open-braft-finder')() === false) {
        return false;
      }

      var mediaProps = _this.props.media;
      var MediaLibrary = _this.props.braftFinder.ReactComponent;
      _this.mediaLibiraryModal = Modal_showModal({
        title: _this.props.language.controls.mediaLibirary,
        language: _this.props.language,
        width: 640,
        showFooter: false,
        children: external_react_default.a.createElement(MediaLibrary, {
          onCancel: _this.closeBraftFinder,
          onInsert: _this.insertMedias,
          onChange: mediaProps.onChange,
          externals: mediaProps.externals,
          onBeforeSelect: _this.bindBraftFinderHook('select-medias'),
          onBeforeDeselect: _this.bindBraftFinderHook('deselect-medias'),
          onBeforeRemove: _this.bindBraftFinderHook('remove-medias'),
          onBeforeInsert: _this.bindBraftFinderHook('insert-medias'),
          onFileSelect: _this.bindBraftFinderHook('select-files')
        })
      });
    });

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "bindBraftFinderHook", function (hookName) {
      return function () {
        return _this.props.hooks(hookName, arguments.length <= 0 ? undefined : arguments[0]).apply(void 0, arguments);
      };
    });

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "insertMedias", function (medias) {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(_this.props.editorState, medias));

      _this.props.editor.requestFocus();

      _this.props.media.onInsert && _this.props.media.onInsert(medias);

      _this.closeBraftFinder();
    });

    ControlBar_defineProperty(ControlBar_assertThisInitialized(ControlBar_assertThisInitialized(_this)), "closeBraftFinder", function () {
      _this.props.media.onCancel && _this.props.media.onCancel();
      _this.mediaLibiraryModal && _this.mediaLibiraryModal.close();
    });

    return _this;
  }

  ControlBar_createClass(ControlBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          language = _this$props.language;
      controls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(ControlBar_objectSpread({}, item.modal, {
              language: language
            }));
          }
        }
      });
    }
  }, {
    key: "getControlItemClassName",
    value: function getControlItemClassName(data) {
      var className = 'control-item button';
      var type = data.type,
          command = data.command;

      if (type === 'inline-style' && external_braft_utils_["ContentUtils"].selectionHasInlineStyle(this.props.editorState, command)) {
        className += ' active';
      } else if (type === 'block-type' && external_braft_utils_["ContentUtils"].getSelectionBlockType(this.props.editorState) === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: "applyControl",
    value: function applyControl(command, type) {
      var hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        command = hookReturns;
      }

      if (type === 'inline-style') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionInlineStyle(this.props.editorState, command));
      } else if (type === 'block-type') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(this.props.editorState, command));
      } else if (type === 'editor-method') {
        this.props.editor[command] && this.props.editor[command]();
      }

      this.props.editor.requestFocus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          editor = _this$props2.editor,
          editorState = _this$props2.editorState,
          controls = _this$props2.controls,
          media = _this$props2.media,
          extendControls = _this$props2.extendControls,
          language = _this$props2.language,
          hooks = _this$props2.hooks,
          colors = _this$props2.colors,
          fontSizes = _this$props2.fontSizes,
          fontFamilies = _this$props2.fontFamilies,
          emojis = _this$props2.emojis,
          containerNode = _this$props2.containerNode,
          lineHeights = _this$props2.lineHeights,
          letterSpacings = _this$props2.letterSpacings,
          textAligns = _this$props2.textAligns,
          textBackgroundColor = _this$props2.textBackgroundColor,
          textIndents = _this$props2.textIndents;
      var currentBlockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);
      var editorControls = configs_controls(language);
      var commonProps = {
        editor: editor,
        editorState: editorState,
        language: language,
        containerNode: containerNode,
        hooks: hooks
      };
      var renderedControls = [];
      return external_react_default.a.createElement("div", {
        className: "BraftEditor-controlBar"
      }, _toConsumableArray(controls).concat(_toConsumableArray(extendControls)).map(function (item, index) {
        var itemKey = typeof item === 'string' ? item : item.key;

        if (typeof itemKey !== 'string') {
          return null;
        }

        if (renderedControls.indexOf(itemKey) > -1) {
          return null;
        }

        if (itemKey.toLowerCase() === 'separator') {
          return external_react_default.a.createElement("span", {
            key: index,
            className: "separator-line"
          });
        }

        var controlItem = editorControls.find(function (subItem) {
          return subItem.key.toLowerCase() === itemKey.toLowerCase();
        });

        if (typeof item !== 'string') {
          controlItem = ControlBar_objectSpread({}, controlItem, item);
        }

        if (!controlItem) {
          return null;
        }

        renderedControls.push(itemKey);

        if (controlItem.type === 'headings') {
          return external_react_default.a.createElement(Headings, ControlBar_extends({
            key: index,
            current: currentBlockType,
            onChange: function onChange(command) {
              return _this3.applyControl(command, 'block-type');
            }
          }, commonProps));
        } else if (controlItem.type === 'text-color') {
          return external_react_default.a.createElement(TextColor_TextColor, ControlBar_extends({
            key: index,
            colors: colors,
            enableBackgroundColor: textBackgroundColor
          }, commonProps));
        } else if (controlItem.type === 'font-size') {
          return external_react_default.a.createElement(FontSize, ControlBar_extends({
            key: index,
            fontSizes: fontSizes,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'line-height') {
          return external_react_default.a.createElement(LineHeight, ControlBar_extends({
            key: index,
            lineHeights: lineHeights,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'letter-spacing') {
          return external_react_default.a.createElement(LetterSpacing, ControlBar_extends({
            key: index,
            letterSpacings: letterSpacings,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'text-indent') {
          return external_react_default.a.createElement(TextIndent, ControlBar_extends({
            key: index,
            textIndents: textIndents,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'font-family') {
          return external_react_default.a.createElement(FontFamily, ControlBar_extends({
            key: index,
            fontFamilies: fontFamilies,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'emoji') {
          return external_react_default.a.createElement(EmojiPicker, ControlBar_extends({
            key: index,
            emojis: emojis,
            defaultCaption: controlItem.text
          }, commonProps));
        } else if (controlItem.type === 'link') {
          return external_react_default.a.createElement(LinkEditor_LinkEditor, ControlBar_extends({
            key: index
          }, commonProps));
        } else if (controlItem.type === 'text-align') {
          return external_react_default.a.createElement(TextAlign_TextAlign, ControlBar_extends({
            key: index,
            textAligns: textAligns
          }, commonProps));
        } else if (controlItem.type === 'media') {
          if (!media.image && !media.video && !media.audio) {
            return null;
          }

          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            title: controlItem.title,
            className: "control-item media button",
            onClick: _this3.openBraftFinder
          }, controlItem.text);
        } else if (controlItem.type === 'dropdown') {
          return external_react_default.a.createElement(DropDown_DropDown, {
            key: index,
            className: "control-item extend-control-item dropdown " + controlItem.className,
            caption: controlItem.text,
            htmlCaption: controlItem.html,
            showDropDownArrow: controlItem.showDropDownArrow,
            containerNode: controlItem.containerNode,
            hoverTitle: controlItem.hoverTitle,
            arrowActive: controlItem.arrowActive,
            autoHide: controlItem.autoHide,
            disabled: controlItem.disabled,
            ref: controlItem.ref
          }, controlItem.component);
        } else if (controlItem.type === 'modal') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            title: controlItem.hoverTitle,
            className: 'control-item extend-control-item button ' + controlItem.className,
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              if (controlItem.modal && controlItem.modal.id) {
                if (_this3.extendedModals[controlItem.modal.id]) {
                  _this3.extendedModals[controlItem.modal.id].active = true;

                  _this3.extendedModals[controlItem.modal.id].update(ControlBar_objectSpread({}, controlItem.modal, {
                    language: language
                  }));
                } else {
                  _this3.extendedModals[controlItem.modal.id] = Modal_showModal(ControlBar_objectSpread({}, controlItem.modal, {
                    language: language
                  }));
                  controlItem.modal.onCreate && controlItem.modal.onCreate(_this3.extendedModals[controlItem.modal.id]);
                }
              }

              controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem.type === 'component') {
          return external_react_default.a.createElement("div", {
            key: index,
            className: 'control-item component-wrapper ' + controlItem.className
          }, controlItem.component);
        } else if (controlItem.type === 'button') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            title: controlItem.hoverTitle,
            className: 'control-item button ' + controlItem.className,
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              return controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            title: controlItem.title,
            className: _this3.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            }),
            onClick: function onClick() {
              return _this3.applyControl(controlItem.command, controlItem.type);
            }
          }, controlItem.text);
        }
      }));
    }
  }]);

  return ControlBar;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./editor/index.jsx
function editor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { editor_typeof = function _typeof(obj) { return typeof obj; }; } else { editor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return editor_typeof(obj); }

function editor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { editor_defineProperty(target, key, source[key]); }); } return target; }

function editor_toConsumableArray(arr) { return editor_arrayWithoutHoles(arr) || editor_iterableToArray(arr) || editor_nonIterableSpread(); }

function editor_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function editor_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function editor_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) editor_defineProperties(Constructor, staticProps); return Constructor; }

function editor_possibleConstructorReturn(self, call) { if (call && (editor_typeof(call) === "object" || typeof call === "function")) { return call; } return editor_assertThisInitialized(self); }

function editor_getPrototypeOf(o) { editor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return editor_getPrototypeOf(o); }

function editor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) editor_setPrototypeOf(subClass, superClass); }

function editor_setPrototypeOf(o, p) { editor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return editor_setPrototypeOf(o, p); }

function editor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function editor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var buildHooks = function buildHooks(hooks) {
  return function (hookName) {
    var defaultReturns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return hooks[hookName] || function () {
      return defaultReturns;
    };
  };
};

var editorDecorators = new external_draft_js_["CompositeDecorator"](renderers_decorators);

var editor_BraftEditor =
/*#__PURE__*/
function (_React$Component) {
  editor_inherits(BraftEditor, _React$Component);

  function BraftEditor(props) {
    var _this;

    editor_classCallCheck(this, BraftEditor);

    _this = editor_possibleConstructorReturn(this, editor_getPrototypeOf(BraftEditor).call(this, props));

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "onChange", function (editorState) {
      _this.setState({
        editorState: editorState
      }, function () {
        _this.props.onChange && _this.props.onChange(editorState);
      });
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "getDraftInstance", function () {
      return _this.draftInstance;
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "getFinderInstance", function () {
      return _this.braftFinder;
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "getValue", function () {
      return _this.state.editorState;
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "setValue", function (editorState) {
      return _this.onChange(editorState);
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "forceRender", function () {
      return _this.setValue(external_braft_utils_["ContentUtils"].createEditorState(_this.state.editorState.getCurrentContent(), editorDecorators));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "onTab", function (event) {
      if (external_braft_utils_["ContentUtils"].getSelectionBlockType(_this.state.editorState) === 'code-block') {
        _this.insertText(' '.repeat(_this.props.tabIndents), false);

        event.preventDefault();
        return false;
      }

      _this.props.onTab && _this.props.onTab(event);
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "onFocus", function () {
      _this.isFocused = true;
      _this.props.onFocus && _this.props.onFocus();
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "onBlur", function () {
      _this.isFocused = false;
      _this.props.onBlur && _this.props.onBlur();
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "requestFocus", function () {
      setTimeout(function () {
        return _this.draftInstance.focus();
      }, 0);
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handleKeyCommand", function (command) {
      if (command === 'braft-save') {
        _this.props.onSave && _this.props.onSave();
        return 'handled';
      }

      var nextEditorState = external_braft_utils_["ContentUtils"].handleKeyCommand(_this.state.editorState, command);

      if (nextEditorState) {
        _this.setValue(nextEditorState);

        return 'handled';
      }

      return 'not-handled';
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handleReturn", function (event) {
      var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(_this.state.editorState);
      var currentBlockType = currentBlock.getType();

      if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
        if (currentBlock.getLength() === 0) {
          _this.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(_this.state.editorState, 'unstyled'));

          return 'handled';
        }

        return 'not-handled';
      } else if (currentBlockType === 'code-block') {
        if (event.which === 13 && (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control'))) {
          _this.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(_this.state.editorState, 'unstyled'));

          return 'handled';
        }

        return 'not-handled';
      } else {
        var nextEditorState = external_braft_utils_["ContentUtils"].handleNewLine(_this.state.editorState, event);

        if (nextEditorState) {
          _this.setValue(nextEditorState);

          return 'handled';
        }

        return 'not-handled';
      }

      return false;
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handleDrop", function (selectionState, dataTransfer, isInternal) {
      if (window && window.__BRAFT_DRAGING__IMAGE__) {
        var editorState = external_braft_utils_["ContentUtils"].removeBlock(_this.state.editorState, window.__BRAFT_DRAGING__IMAGE__.block, selectionState);
        editorState = external_braft_utils_["ContentUtils"].insertMedias(editorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData]);
        window.__BRAFT_DRAGING__IMAGE__ = null;

        _this.setDraftProps({
          readOnly: false
        });

        _this.setValue(editorState);

        return 'handled';
      } else if (!dataTransfer || !dataTransfer.getText()) {
        return 'handled';
      }

      return 'not-handled';
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handleDroppedFiles", function (selectionState, files) {
      return _this.resolveFiles(files);
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handlePastedFiles", function (files) {
      return _this.resolveFiles(files);
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "handlePastedText", function (text, htmlString) {
      if (!htmlString || _this.props.stripPastedStyles) {
        return false;
      }

      var tempColors = external_braft_utils_["ColorUtils"].detectColorsFromHTMLString(htmlString);

      _this.setState({
        tempColors: editor_toConsumableArray(_this.state.tempColors).concat(editor_toConsumableArray(tempColors)).filter(function (item) {
          return _this.props.colors.indexOf(item) === -1;
        }).filter(function (item, index, array) {
          return array.indexOf(item) === index;
        })
      }, function () {
        _this.setValue(external_braft_utils_["ContentUtils"].insertHTML(_this.state.editorState, htmlString));
      });

      return true;
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "resolveFiles", function (files) {
      if (files[0] && files[0].type.indexOf('image') > -1 && _this.props.media && _this.props.media.pasteImage) {
        _this.braftFinder.uploadImage(files[0], function (image) {
          _this.setValue(external_braft_utils_["ContentUtils"].insertMedias(_this.state.editorState, [image]));
        });

        return 'handled';
      }

      return 'not-handled';
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "undo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].undo(_this.state.editorState));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "redo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].redo(_this.state.editorState));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "removeSelectionInlineStyles", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].removeSelectionInlineStyles(_this.state.editorState));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "insertHorizontalLine", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].insertHorizontalLine(_this.state.editorState));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "clearEditorContent", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].clear(_this.state.editorState));
    });

    editor_defineProperty(editor_assertThisInitialized(editor_assertThisInitialized(_this)), "setEditorContainerNode", function (containerNode) {
      _this.setState({
        containerNode: containerNode
      });
    });

    _this.isFocused = false;
    _this.keyBindingFn = keybindings(props.customKeyBindingFn);
    _this.blockStyleFn = getBlockStyleFn(props.blockStyleFn);
    _this.blockRenderMap = external_draft_js_["DefaultDraftBlockRenderMap"].merge(customBlockRenderMap);

    if (props.blockRenderMapFn) {
      _this.blockRenderMap = props.blockRenderMapFn(_this.blockRenderMap);
    }

    _this.braftFinder = null;
    var defaultEditorState = external_braft_utils_["ContentUtils"].isEditorState(props.defaultValue) ? props.defaultValue : external_braft_utils_["ContentUtils"].createEmptyEditorState(editorDecorators);
    _this.state = {
      containerNode: null,
      tempColors: [],
      editorState: defaultEditorState,
      draftProps: {}
    };
    return _this;
  }

  editor_createClass(BraftEditor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          extendControls = _this$props.extendControls;

      if (editor_toConsumableArray(controls).concat(editor_toConsumableArray(extendControls)).find(function (item) {
        return item === 'media' || item.key === 'media';
      })) {
        Promise.resolve(/* require.ensure */).then((function () {
          var BraftFinder = __webpack_require__(7).default;

          _this2.braftFinder = new BraftFinder({
            language: _this2.props.language,
            uploader: _this2.props.media.uploadFn,
            validator: _this2.props.media.validateFn
          });

          _this2.forceUpdate();
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var editorState = this.props.value;

      if (external_braft_utils_["ContentUtils"].isEditorState(editorState)) {
        this.setState({
          editorState: editorState
        });
      } else if (editorState) {
        console.warn('');
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var editorState = nextProps.value;

      if (external_braft_utils_["ContentUtils"].isEditorState(editorState)) {
        this.setState({
          editorState: editorState
        });
      } else if (editorState) {
        console.warn('');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          controls = _this$props2.controls,
          excludeControls = _this$props2.excludeControls,
          extendControls = _this$props2.extendControls,
          disabled = _this$props2.disabled,
          media = _this$props2.media,
          language = _this$props2.language,
          colors = _this$props2.colors,
          hooks = _this$props2.hooks,
          fontSizes = _this$props2.fontSizes,
          fontFamilies = _this$props2.fontFamilies,
          emojis = _this$props2.emojis,
          placeholder = _this$props2.placeholder,
          imageControls = _this$props2.imageControls,
          lineHeights = _this$props2.lineHeights,
          letterSpacings = _this$props2.letterSpacings,
          textIndents = _this$props2.textIndents,
          textAligns = _this$props2.textAligns,
          textBackgroundColor = _this$props2.textBackgroundColor,
          extendAtomics = _this$props2.extendAtomics,
          className = _this$props2.className,
          style = _this$props2.style,
          controlBarClassName = _this$props2.controlBarClassName,
          controlBarStyle = _this$props2.controlBarStyle,
          contentClassName = _this$props2.contentClassName,
          contentStyle = _this$props2.contentStyle,
          stripPastedStyles = _this$props2.stripPastedStyles,
          componentBelowControlBar = _this$props2.componentBelowControlBar;
      hooks = buildHooks(hooks);
      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });
      language = languages[language] || languages[configs_props.language];
      var externalMedias = media && media.externals ? editor_objectSpread({}, configs_props.media.externals, media.externals) : configs_props.media.externals;
      media = editor_objectSpread({}, configs_props.media, media, {
        externalMedias: externalMedias
      });

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorState: this.state.editorState,
        braftFinder: this.braftFinder,
        ref: function ref(instance) {
          return _this3.controlBarInstance = instance;
        },
        containerNode: this.state.containerNode,
        className: controlBarClassName,
        style: controlBarStyle,
        hooks: hooks,
        colors: editor_toConsumableArray(colors).concat(editor_toConsumableArray(this.state.tempColors)),
        media: media,
        controls: controls,
        language: language,
        extendControls: extendControls,
        fontSizes: fontSizes,
        fontFamilies: fontFamilies,
        emojis: emojis,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        textIndents: textIndents,
        textAligns: textAligns,
        textBackgroundColor: textBackgroundColor
      };
      var blockRendererFn = getBlockRendererFn({
        editor: this,
        hooks: hooks,
        editorState: this.state.editorState,
        containerNode: this.state.containerNode,
        imageControls: imageControls,
        language: language,
        extendAtomics: extendAtomics
      }, this.props.blockRendererFn);
      var customStyleMap = getCustomStyleMap({
        colors: editor_toConsumableArray(colors).concat(editor_toConsumableArray(this.state.tempColors)),
        fontSizes: fontSizes,
        fontFamilies: fontFamilies,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        textIndents: textIndents
      }, this.props.customStyleMap);

      var draftProps = editor_objectSpread({
        ref: function ref(instance) {
          _this3.draftInstance = instance;
        },
        editorState: this.state.editorState,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.handleReturn,
        handleDrop: this.handleDrop,
        handleDroppedFiles: this.handleDroppedFiles,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        onChange: this.onChange,
        onTab: this.onTab,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        readOnly: disabled,
        blockRenderMap: this.blockRenderMap,
        blockStyleFn: this.blockStyleFn,
        keyBindingFn: this.keyBindingFn,
        customStyleMap: customStyleMap,
        blockRendererFn: blockRendererFn,
        placeholder: placeholder,
        stripPastedStyles: stripPastedStyles
      }, this.props.draftProps, this.state.draftProps);

      return external_react_default.a.createElement("div", {
        ref: this.setEditorContainerNode,
        className: "BraftEditor-container ".concat(className, " ").concat(disabled ? 'disabled' : ''),
        style: style
      }, external_react_default.a.createElement(ControlBar_ControlBar, controlBarProps), componentBelowControlBar, external_react_default.a.createElement("div", {
        className: "BraftEditor-content ".concat(contentClassName),
        style: contentStyle
      }, external_react_default.a.createElement(external_draft_js_["Editor"], draftProps)));
    }
  }, {
    key: "setDraftProps",
    value: function setDraftProps(draftProps) {
      this.setState({
        draftProps: editor_objectSpread({}, this.state.draftProps, draftProps)
      });
    }
  }]);

  return BraftEditor;
}(external_react_default.a.Component);

editor_defineProperty(editor_BraftEditor, "defaultProps", configs_props);


// EXTERNAL MODULE: external "braft-convert"
var external_braft_convert_ = __webpack_require__(3);

// CONCATENATED MODULE: ./index.jsx
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "EditorState", function() { return external_draft_js_["EditorState"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "editorDecorators", function() { return editorDecorators; });
function index_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { index_typeof = function _typeof(obj) { return typeof obj; }; } else { index_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return index_typeof(obj); }



 // 为EditorState对象增加toHTML原型方法，用于将editorState转换成HTML字符串

external_draft_js_["EditorState"].prototype.toHTML = function () {
  return Object(external_braft_convert_["convertEditorStateToHTML"])(this);
}; // 为EditorState对象增加toRAW原型方法，用于将editorState转换成RAW JSON对象或RAW JSON字符串


external_draft_js_["EditorState"].prototype.toRAW = function (noStringify) {
  return noStringify ? Object(external_braft_convert_["convertEditorStateToRaw"])(this) : JSON.stringify(Object(external_braft_convert_["convertEditorStateToRaw"])(this));
}; // 为EditorState对象增加新的静态方法，用于从raw或者html内容创建ediorState


external_draft_js_["EditorState"].createFrom = function (content, options) {
  if (index_typeof(content) === 'object' && content.blocks && content.entityMap) {
    return Object(external_braft_convert_["convertRawToEditorState"])(content, editorDecorators);
  } else if (typeof content === 'string') {
    try {
      return external_draft_js_["EditorState"].createFrom(JSON.parse(content), options);
    } catch (error) {
      return Object(external_braft_convert_["convertHTMLToEditorState"])(content, editorDecorators, options);
    }
  } else {
    return external_draft_js_["EditorState"].createEmpty(editorDecorators);
  }
};

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (editor_BraftEditor);
 // 2.0.0开发计划
// [ ]完善各模块文档说明
// [√]添加更多钩子（插入链接、切换样式等）
// [√]优化内置的图片伪上传功能，用base64代替blob
// [√]支持自定义图片工具栏按钮
// [√]支持通过属性扩展customStyleMap, blockStyleFn, keyBindingFn, blockRendererFn, blockRenderMap等
// [√]允许完全设置控制栏的按钮（['media', { key: 'blod', text: 'xxx' }）
// [√]允许在工具栏和内容区域直接插入自定义的组件[componentBelowControlBar]
// [√]支持定义DropDown组件的样式
// [√]media.validateFn支持异步函数
// [ ]优化音视频在编辑器内的预览体验
// 2.1.0版本开发加护
// [ ]美化UI，包括图标和界面风格
// [ ]标准化代码，引入ESLint
// 2.2.0版本开发计划
// [ ]优化图片param.success，支持传入link等
// [ ]简化上传配置流程
// [ ]支持draftjs插件机制
// [ ]支持媒体库组件的更多个性化配置（placeholder等）
// [ ]支持非媒体类附件
// [ ]优化HTML格式无法存储媒体名称的问题 
// [ ]完成font-size等样式的全量支持
// 2.3.0版本开发计划
// [ ]优化换行与空格
// [ ]支持自定义Atomic组件
// [ ]图片裁切等简单的编辑功能
// [ ]代码块交互强化
// [ ]初级表格功能

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map