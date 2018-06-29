(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("braft-utils"), require("draft-js"), require("react-dom"), require("immutable"), require("draftjs-utils"), require("draft-convert"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "braft-utils", "draft-js", "react-dom", "immutable", "draftjs-utils", "draft-convert"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("braft-utils"), require("draft-js"), require("react-dom"), require("immutable"), require("draftjs-utils"), require("draft-convert")) : factory(root["react"], root["braft-utils"], root["draft-js"], root["react-dom"], root["immutable"], root["draftjs-utils"], root["draft-convert"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(53);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(17);

var _responsive2 = _interopRequireDefault(_responsive);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref, [this].concat(args))), _this), _this.alive = false, _this.responsiveResolveId = null, _this.dropDownHandlerElement = null, _this.dropDownContentElement = null, _this.componentId = _this.props.componentId || 'BRAFT-DROPDOWN-' + _braftUtils.BaseUtils.UniqueIndex(), _this.state = {
      active: false,
      offset: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.alive = true;
      this.fixDropDownPosition();

      document.body.addEventListener('click', function (event) {
        _this2.registerClickEvent(event);
      });

      this.responsiveResolveId = _responsive2.default.resolve(function () {
        _this2.fixDropDownPosition();
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {

      if (!this.props.disabled && next.disabled) {
        this.hide();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevState) {

      if (!prevState.active && this.state.active) {
        this.fixDropDownPosition();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      document.body.removeEventListener('click', function (event) {
        _this3.registerClickEvent(event);
      });

      this.alive = false;
      _responsive2.default.unresolve(this.responsiveResolveId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          active = _state.active,
          offset = _state.offset;
      var _props = this.props,
          caption = _props.caption,
          htmlCaption = _props.htmlCaption,
          hoverTitle = _props.hoverTitle,
          disabled = _props.disabled,
          showDropDownArrow = _props.showDropDownArrow,
          arrowActive = _props.arrowActive,
          className = _props.className,
          children = _props.children,
          editorHeight = _props.editorHeight;


      disabled && (active = false);

      var dropDownContentInnerStyle = !isNaN(editorHeight) && editorHeight > 0 ? {
        maxHeight: editorHeight - 30 + 'px'
      } : {};

      return _react2.default.createElement(
        'div',
        {
          id: this.componentId,
          className: "Braft-dropdown " + (active ? "active " : "") + (disabled ? "disabled " : "") + className
        },
        htmlCaption ? _react2.default.createElement('button', {
          type: 'button',
          className: 'dropdown-handler',
          title: hoverTitle,
          'data-braft-component-id': this.componentId,
          dangerouslySetInnerHTML: htmlCaption ? { __html: htmlCaption } : null,
          ref: function ref(instance) {
            return _this4.dropDownHandlerElement = instance;
          }
        }) : _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'dropdown-handler',
            title: hoverTitle,
            'data-braft-component-id': this.componentId,
            ref: function ref(instance) {
              return _this4.dropDownHandlerElement = instance;
            }
          },
          _react2.default.createElement(
            'span',
            null,
            caption
          ),
          showDropDownArrow !== false ? _react2.default.createElement('i', { className: 'braft-icon-drop-down' }) : null
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown-content',
            style: { marginLeft: offset + 'px' },
            ref: function ref(instance) {
              return _this4.dropDownContentElement = instance;
            }
          },
          _react2.default.createElement('i', {
            style: { marginLeft: offset * -1 },
            className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'dropdown-content-inner',
              style: dropDownContentInnerStyle
            },
            children
          )
        )
      );
    }
  }, {
    key: 'fixDropDownPosition',
    value: function fixDropDownPosition() {

      var offset = 0;
      var viewRect = null;

      if (this.props.viewWrapper) {
        viewRect = document.querySelector(this.props.viewWrapper).getBoundingClientRect();
      } else {
        viewRect = document.body.getBoundingClientRect();
      }

      var handlerRect = this.dropDownHandlerElement.getBoundingClientRect();
      var contentRect = this.dropDownContentElement.getBoundingClientRect();
      var right = handlerRect.right - handlerRect.width / 2 + contentRect.width / 2;
      var left = handlerRect.left + handlerRect.width / 2 - contentRect.width / 2;

      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        offset = right - 10;
      } else if (left < 10) {
        offset = left * -1 + 10;
      }

      offset !== this.state.offset && this.setState({ offset: offset });
    }
  }, {
    key: 'registerClickEvent',
    value: function registerClickEvent(event) {
      var autoHide = this.props.autoHide;

      var active = false;

      if (event.target.dataset.braftComponentId === this.componentId) {
        active = event.target.dataset.keepActive ? true : !this.state.active;
      } else if (autoHide === false) {
        active = this.state.active;
      }

      this.alive && this.setState({ active: active });
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({
        active: false
      });
    }
  }]);

  return DropDown;
}(_react2.default.Component);

exports.default = DropDown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(59);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleTransitionEnd = function () {

      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        _reactDom2.default.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    };

    _this.handleCancel = function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    };

    _this.handleConfirm = function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    };

    _this.close = function () {
      _this.unrenderComponent();
      _this.props.onClose && _this.props.onClose();
    };

    _this.active = false;
    _this.componentId = 'BRAFT-MODAL-' + _braftUtils.BastUtils.UniqueIndexUniqueIndex();

    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      if (this.props.visible) {
        this.active = true;
        this.renderComponent(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {

      if (this.props.visible && !next.visible) {
        this.unrenderComponent();
      } else if (this.props.visible || next.visible) {
        this.active = true;
        this.renderComponent(next);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'unrenderComponent',
    value: function unrenderComponent() {
      this.active = false;
      this.activeId && window.clearImmediate(this.activeId);
      if (this.rootElement && this.rootElement.classList) {
        this.rootElement.classList.remove('active');
      }
    }
  }, {
    key: 'renderComponent',
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

      var childComponent = _react2.default.createElement(
        'div',
        { className: "braft-modal " + (className || '') },
        _react2.default.createElement('div', { className: 'braft-modal-mask' }),
        _react2.default.createElement(
          'div',
          { onTransitionEnd: this.handleTransitionEnd, style: { width: width, height: height }, className: 'braft-modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-header' },
            _react2.default.createElement(
              'h3',
              { className: 'braft-modal-caption' },
              title
            ),
            showClose && _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.close, className: 'braft-modal-close-button' },
              _react2.default.createElement('i', { className: 'braft-icon-close' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-body' },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: 'braft-modal-footer' },
            _react2.default.createElement(
              'div',
              { className: 'braft-modal-addon-text' },
              bottomText
            ),
            _react2.default.createElement(
              'div',
              { className: 'braft-modal-buttons' },
              showCancel && _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleCancel, className: 'braft-modal-cancel' },
                cancelText || language.base.cancel
              ),
              showConfirm && _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleConfirm, className: "braft-modal-confirm " + (!confirmable ? 'disabled' : '') },
                confirmText || language.base.confirm
              )
            )
          )
        )
      );

      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'braft-modal-root';
        document.body.appendChild(this.rootElement);
      }

      _reactDom2.default.render(childComponent, this.rootElement);

      this.activeId = window.setImmediate(function () {
        _this2.rootElement.classList.add('active');
      });
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  header: true,
  footer: true
};
exports.default = Modal;
var showModal = exports.showModal = function showModal(props) {

  var host = document.createElement('div');
  host.style.display = 'none';
  document.body.appendChild(host);

  var close = function close() {
    _reactDom2.default.unmountComponentAtNode(host) && host.parentNode.removeChild(host);
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
    onConfirm: onConfirm, onCancel: onCancel, onClose: onClose,
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  };

  var modalInstance = _reactDom2.default.render(_react2.default.createElement(Modal, _extends({}, props, extProps)), host);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;

  return modalInstance;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(61);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;


  return _react2.default.createElement('div', { onClick: function onClick() {
      return _onClick();
    }, className: "switch-button " + className + (active ? ' active' : '') });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blocks = exports.getHeadings = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeadings = exports.getHeadings = function getHeadings(lang) {
  return [{
    key: 'header-one',
    title: lang.controls.header + ' 1',
    text: _react2.default.createElement(
      'h1',
      null,
      lang.controls.header,
      ' 1'
    ),
    type: 'block-type',
    command: 'header-one'
  }, {
    key: 'header-two',
    title: lang.controls.header + ' 2',
    text: _react2.default.createElement(
      'h2',
      null,
      lang.controls.header,
      ' 2'
    ),
    type: 'block-type',
    command: 'header-two'
  }, {
    key: 'header-three',
    title: lang.controls.header + ' 3',
    text: _react2.default.createElement(
      'h3',
      null,
      lang.controls.header,
      ' 3'
    ),
    type: 'block-type',
    command: 'header-three'
  }, {
    key: 'header-four',
    title: lang.controls.header + ' 4',
    text: _react2.default.createElement(
      'h4',
      null,
      lang.controls.header,
      ' 4'
    ),
    type: 'block-type',
    command: 'header-four'
  }, {
    key: 'header-five',
    title: lang.controls.header + ' 5',
    text: _react2.default.createElement(
      'h5',
      null,
      lang.controls.header,
      ' 5'
    ),
    type: 'block-type',
    command: 'header-five'
  }, {
    key: 'header-six',
    title: lang.controls.header + ' 6',
    text: _react2.default.createElement(
      'h6',
      null,
      lang.controls.header,
      ' 6'
    ),
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

var blocks = exports.blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(44);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentIndent = null;

  props.indents.find(function (item) {
    if (_braftUtils.ContentUtils.selectionHasInlineStyle(props.editorState, 'INDENT-' + item)) {
      caption = item;
      currentIndent = item;
      return true;
    }
    return false;
  });

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption || props.defaultCaption,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.indent,
      className: "control-item dropdown braft-indent-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-indents-wrap' },
      props.indents.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentIndent ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionIndent(props.editorState, e.currentTarget.dataset.size));
              props.editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(45);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentLetterSpacing = null;

  props.letterSpacings.find(function (item) {
    if (_braftUtils.ContentUtils.selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }
    return false;
  });

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption || props.defaultCaption,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.letterSpacing,
      className: "control-item dropdown braft-letter-spacing-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-letter-spacings-wrap' },
      props.letterSpacings.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentLetterSpacing ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionLetterSpacing(props.editorState, e.currentTarget.dataset.size));
              props.editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(46);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: props.defaultCaption,
      showDropDownArrow: false,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.emoji,
      className: "control-item dropdown braft-emoji-dropdown"
    },
    _react2.default.createElement(
      'div',
      { className: 'braft-emojis-wrap' },
      _react2.default.createElement(
        'ul',
        { className: 'braft-emojis' },
        props.emojis.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            {
              key: index,
              'data-emoji': item,
              onClick: function onClick(e) {
                props.editor.setValue(_braftUtils.ContentUtils.insertText(props.editorState, e.currentTarget.dataset.emoji));
                props.editor.requestFocus();
              }
            },
            item
          );
        })
      )
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAlign = function (_React$Component) {
  _inherits(TextAlign, _React$Component);

  function TextAlign() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextAlign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextAlign.__proto__ || Object.getPrototypeOf(TextAlign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentAlignment: undefined
    }, _this.setAlignment = function (e) {
      _this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionAlignment(_this.props.editorState, e.currentTarget.dataset.alignment));
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextAlign, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.setState({
        currentAlignment: _braftUtils.ContentUtils.getSelectionBlockData(next.editorState, 'textAlign')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var textAlignmentTitles = [this.props.language.controls.alignLeft, this.props.language.controls.alignCenter, this.props.language.controls.alignRight, this.props.language.controls.alignJustify];

      return _react2.default.createElement(
        'div',
        { className: 'control-item-group' },
        this.props.textAlignOptions.map(function (item, index) {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: index,
              title: textAlignmentTitles[index],
              'data-alignment': item,
              className: 'control-item button ' + (item === _this2.state.currentAlignment ? 'active' : null),
              onClick: _this2.setAlignment
            },
            _react2.default.createElement('i', { className: "braft-icon-align-" + item })
          );
        })
      );
    }
  }]);

  return TextAlign;
}(_react2.default.Component);

exports.default = TextAlign;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(47);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentIndex = null;

  props.fontFamilies.find(function (item, index) {
    if (_braftUtils.ContentUtils.selectionHasInlineStyle(props.editorState, 'FONTFAMILY-' + item.name)) {
      caption = item.name;
      currentIndex = index;
      return true;
    }
    return false;
  });

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption || props.defaultCaption,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.fontFamily,
      arrowActive: currentIndex === 0,
      className: "control-item dropdown font-family-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'menu' },
      props.fontFamilies.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: "menu-item " + (index === currentIndex ? 'active' : ''),
            'data-name': item.name,
            onClick: function onClick(e) {
              props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionFontFamily(props.editorState, e.currentTarget.dataset.name));
              props.editor.requestFocus();
            }
          },
          _react2.default.createElement(
            'span',
            { style: { fontFamily: item.family } },
            item.name
          )
        );
      })
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(48);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentLineHeight = null;

  props.lineHeights.find(function (item) {
    if (_braftUtils.ContentUtils.selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }
    return false;
  });

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption || props.defaultCaption,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.lineHeight,
      className: "control-item dropdown braft-line-height-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-line-heights-wrap' },
      props.lineHeights.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentLineHeight ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionLineHeight(props.editorState, e.currentTarget.dataset.size));
              props.editor.requestFocus();
            }
          },
          item
        );
      })
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(49);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var caption = null;
  var currentFontSize = null;

  props.fontSizes.find(function (item) {
    if (_braftUtils.ContentUtils.selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item + 'px';
      currentFontSize = item;
      return true;
    }
    return false;
  });

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption || props.defaultCaption,
      editorHeight: props.editorHeight,
      viewWrapper: props.viewWrapper,
      hoverTitle: props.language.controls.fontSize,
      className: "control-item dropdown braft-font-size-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'braft-font-sizes-wrap' },
      props.fontSizes.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: item === currentFontSize ? 'active' : null,
            'data-size': item,
            onClick: function onClick(e) {
              props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionFontSize(props.editorState, e.currentTarget.dataset.size));
              props.editor.requestFocus();
            }
          },
          item + 'px'
        );
      })
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(50);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var current = props.current,
      colors = props.colors,
      tempColors = props.tempColors,
      onChange = props.onChange,
      language = props.language;


  return _react2.default.createElement(
    'div',
    { className: 'braft-color-list-wrap' },
    _react2.default.createElement(
      'ul',
      { className: 'braft-color-list' },
      colors.map(function (item, index) {
        var className = item === current ? 'color-item active' : 'color-item';
        return _react2.default.createElement('li', {
          key: index,
          title: item,
          className: className,
          style: { color: item },
          'data-color': item.replace('#', ''),
          onClick: function onClick(e) {
            return props.onChange(e.currentTarget.dataset.color);
          }
        });
      })
    ),
    tempColors.length ? _react2.default.createElement(
      'div',
      { className: 'braft-color-list-split-line' },
      _react2.default.createElement(
        'span',
        null,
        language.controls.tempColors
      )
    ) : null,
    tempColors.length ? _react2.default.createElement(
      'ul',
      { className: 'braft-color-list' },
      tempColors.map(function (item, index) {
        var className = item === current ? 'color-item active' : 'color-item';
        return _react2.default.createElement('li', {
          key: index,
          title: item,
          className: className,
          style: { color: item },
          'data-color': item.replace('#', ''),
          onClick: function onClick(e) {
            return props.onChange(e.currentTarget.dataset.color);
          }
        });
      })
    ) : null
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(51);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _ColorPicker = __webpack_require__(14);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextColor = function (_React$Component) {
  _inherits(TextColor, _React$Component);

  function TextColor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextColor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextColor.__proto__ || Object.getPrototypeOf(TextColor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      colorType: 'color'
    }, _this.dropDownComponentId = 'BRAFT-DROPDOWN-' + _braftUtils.BaseUtils.UniqueIndex(), _this.switchColorType = function (e) {

      _this.setState({
        colorType: e.currentTarget.dataset.type
      });
    }, _this.toggleColor = function (color) {

      if (_this.state.colorType === 'color') {
        _this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionColor(_this.props.editorState, color));
      } else {
        _this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionBackgroundColor(_this.props.editorState, color));
      }

      _this.dropDownComponent.hide();
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextColor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      [].concat(_toConsumableArray(this.props.colors), _toConsumableArray(this.props.tempColors)).forEach(function (color) {
        var color_id = color.replace('#', '');
        if (_braftUtils.ContentUtils.selectionHasInlineStyle(_this2.props.editorState, 'COLOR-' + color_id)) {
          captionStyle.color = color;
          colorType === 'color' && (currentColor = color);
        }

        if (_braftUtils.ContentUtils.selectionHasInlineStyle(_this2.props.editorState, 'BGCOLOR-' + color_id)) {
          captionStyle.backgroundColor = color;
          colorType === 'backgroundColor' && (currentColor = color);
        }
      });

      var caption = _react2.default.createElement(
        'i',
        { style: captionStyle, className: 'braft-icon-text-color' },
        _react2.default.createElement('span', { className: 'path1' }),
        _react2.default.createElement('span', { className: 'path2' })
      );

      return _react2.default.createElement(
        _DropDown2.default,
        {
          caption: caption,
          hoverTitle: this.props.language.controls.color,
          showDropDownArrow: false,
          viewWrapper: this.props.viewWrapper,
          editorHeight: this.props.editorHeight,
          componentId: this.dropDownComponentId,
          ref: function ref(instance) {
            return _this2.dropDownComponent = instance;
          },
          className: "control-item dropdown text-color-dropdown"
        },
        _react2.default.createElement(
          'div',
          { className: 'braft-text-color-picker-wrap' },
          _react2.default.createElement(
            'div',
            { className: 'braft-color-switch-buttons', style: this.props.disableTextBackgroundColor ? { display: 'none' } : {} },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                'data-type': 'color',
                'data-keep-active': true,
                'data-braft-component-id': this.dropDownComponentId,
                className: colorType === 'color' ? 'active' : '',
                onClick: this.switchColorType
              },
              this.props.language.controls.textColor
            ),
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                'data-type': 'backgroundColor',
                'data-keep-active': true,
                'data-braft-component-id': this.dropDownComponentId,
                className: colorType === 'backgroundColor' ? 'active' : '',
                onClick: this.switchColorType
              },
              this.props.language.controls.backgroundColor
            )
          ),
          _react2.default.createElement(_ColorPicker2.default, {
            width: 200,
            language: this.props.language,
            current: currentColor,
            disableAlpha: true,
            colors: this.props.colors,
            tempColors: this.props.tempColors,
            onChange: this.toggleColor
          })
        )
      );
    }
  }]);

  return TextColor;
}(_react2.default.Component);

exports.default = TextColor;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(52);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _maps = __webpack_require__(6);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var headings = (0, _maps.getHeadings)(props.language);
  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === props.current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal;

  return _react2.default.createElement(
    _DropDown2.default,
    {
      caption: caption,
      viewWrapper: props.viewWrapper,
      editorHeight: props.editorHeight,
      hoverTitle: props.language.controls.headings,
      arrowActive: currentHeadingIndex === 0,
      className: "control-item dropdown headings-dropdown"
    },
    _react2.default.createElement(
      'ul',
      { className: 'menu' },
      headings.map(function (item, index) {
        var isActive = props.current === item.command;
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: "menu-item" + (isActive ? ' active' : ''),
            onClick: function onClick() {
              return props.onChange(item.command, item.type);
            }
          },
          item.text
        );
      })
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _braftUtils = __webpack_require__(1);

var resizeEventHandlers = [];
var responsiveHelperInited = false;
var debouce = false;

exports.default = {
  resolve: function resolve(eventHandler) {
    var id = _braftUtils.BaseUtils.UniqueIndex();
    resizeEventHandlers.push({ id: id, eventHandler: eventHandler });
    return id;
  },
  unresolve: function unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter(function (item) {
      return item.id !== id;
    });
  }
};


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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(54);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(5);

var _Switch2 = _interopRequireDefault(_Switch);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkEditor = function (_React$Component) {
  _inherits(LinkEditor, _React$Component);

  function LinkEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkEditor.__proto__ || Object.getPrototypeOf(LinkEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      href: '',
      target: ''
    }, _this.dropDownComponent = null, _this.handeKeyDown = function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();
        e.preventDefault();
        return false;
      }
    }, _this.inputLink = function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    }, _this.setTarget = function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    }, _this.handleCancel = function () {
      _this.dropDownComponent.hide();
    }, _this.handleUnlink = function () {
      _this.dropDownComponent.hide();
      _this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionLink(_this.props.editorState, false));
    }, _this.handleConfirm = function () {
      var _this$state = _this.state,
          href = _this$state.href,
          target = _this$state.target;

      _this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionLink(_this.props.editorState, href, target));
      _this.dropDownComponent.hide();
      _this.props.editor.requestFocus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var _ContentUtils$getSele = _braftUtils.ContentUtils.getSelectionEntityData(next.editorState, 'LINK'),
          href = _ContentUtils$getSele.href,
          target = _ContentUtils$getSele.target;

      this.setState({
        href: href || '',
        target: target || ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          href = _state.href,
          target = _state.target;

      var caption = _react2.default.createElement('i', { className: 'braft-icon-link' });
      var textSelected = !_braftUtils.ContentUtils.selectionCollapsed(this.props.editorState) && _braftUtils.ContentUtils.getSelectionBlockType(this.props.editorState) !== 'atomic';

      return _react2.default.createElement(
        'div',
        { className: 'control-item-group' },
        _react2.default.createElement(
          _DropDown2.default,
          {
            caption: caption,
            hoverTitle: this.props.language.controls.link,
            autoHide: false,
            viewWrapper: this.props.viewWrapper,
            showDropDownArrow: false,
            disabled: !textSelected,
            ref: function ref(instance) {
              return _this2.dropDownComponent = instance;
            },
            className: "control-item dropdown link-editor-dropdown"
          },
          _react2.default.createElement(
            'div',
            { className: 'braft-link-editor' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', {
                type: 'text',
                value: href,
                spellCheck: false,
                placeholder: this.props.language.linkEditor.inputPlaceHolder,
                onKeyDown: this.handeKeyDown,
                onChange: this.inputLink
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'switch-group' },
              _react2.default.createElement(_Switch2.default, {
                active: target === '_blank',
                onClick: this.setTarget
              }),
              _react2.default.createElement(
                'label',
                null,
                this.props.language.linkEditor.openInNewWindow
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttons' },
              _react2.default.createElement(
                'a',
                { onClick: this.handleUnlink, className: 'primary pull-left', href: 'javascript:void(0);' },
                _react2.default.createElement('i', { className: 'braft-icon-close' }),
                _react2.default.createElement(
                  'span',
                  null,
                  this.props.language.linkEditor.removeLink
                )
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleConfirm, className: 'primary pull-right' },
                this.props.language.base.confirm
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.handleCancel, className: 'default pull-right' },
                this.props.language.base.cancel
              )
            )
          )
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            title: this.props.language.controls.unlink,
            className: 'control-item button',
            onClick: this.handleUnlink,
            disabled: !textSelected || !href
          },
          _react2.default.createElement('i', { className: 'braft-icon-link-off' })
        )
      );
    }
  }]);

  return LinkEditor;
}(_react2.default.Component);

exports.default = LinkEditor;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (lang) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: _react2.default.createElement('i', { className: 'braft-icon-undo' }),
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: _react2.default.createElement('i', { className: 'braft-icon-redo' }),
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: _react2.default.createElement('i', { className: 'braft-icon-format_clear' }),
    type: 'editor-state-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: _react2.default.createElement('i', { className: 'braft-icon-hr' }),
    type: 'editor-state-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: _react2.default.createElement('i', { className: 'braft-icon-bold' }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: _react2.default.createElement('i', { className: 'braft-icon-italic' }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: _react2.default.createElement('i', { className: 'braft-icon-underlined' }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: _react2.default.createElement('i', { className: 'braft-icon-strikethrough' }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: _react2.default.createElement('i', { className: 'braft-icon-superscript' }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: _react2.default.createElement('i', { className: 'braft-icon-subscript' }),
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: lang.controls.headings,
    type: 'headings'
  }, {
    key: 'blockquote',
    title: lang.controls.blockQuote,
    text: _react2.default.createElement('i', { className: 'braft-icon-quote' }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: _react2.default.createElement('i', { className: 'braft-icon-code' }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: lang.controls.unorderedList,
    text: _react2.default.createElement('i', { className: 'braft-icon-list' }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: lang.controls.orderedList,
    text: _react2.default.createElement('i', { className: 'braft-icon-list-numbered' }),
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
    key: 'indent',
    title: lang.controls.indent,
    type: 'indent'
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
    text: _react2.default.createElement('i', { className: 'braft-icon-media' }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: _react2.default.createElement('i', { className: 'braft-icon-emoji' }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: _react2.default.createElement(
      'span',
      { className: 'braft-control-text' },
      lang.controls.clear
    ),
    type: 'editor-state-method',
    command: 'clear'
  }];
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(55);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _controls = __webpack_require__(19);

var _controls2 = _interopRequireDefault(_controls);

var _LinkEditor = __webpack_require__(18);

var _LinkEditor2 = _interopRequireDefault(_LinkEditor);

var _Headings = __webpack_require__(16);

var _Headings2 = _interopRequireDefault(_Headings);

var _TextColor = __webpack_require__(15);

var _TextColor2 = _interopRequireDefault(_TextColor);

var _FontSize = __webpack_require__(13);

var _FontSize2 = _interopRequireDefault(_FontSize);

var _LineHeight = __webpack_require__(12);

var _LineHeight2 = _interopRequireDefault(_LineHeight);

var _FontFamily = __webpack_require__(11);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _TextAlign = __webpack_require__(10);

var _TextAlign2 = _interopRequireDefault(_TextAlign);

var _EmojiPicker = __webpack_require__(9);

var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);

var _letterSpacing = __webpack_require__(8);

var _letterSpacing2 = _interopRequireDefault(_letterSpacing);

var _indent = __webpack_require__(7);

var _indent2 = _interopRequireDefault(_indent);

var _DropDown = __webpack_require__(2);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _braftUtils = __webpack_require__(1);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlBar = function (_React$Component) {
  _inherits(ControlBar, _React$Component);

  function ControlBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ControlBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call.apply(_ref, [this].concat(args))), _this), _this.mediaPicker = null, _this.extendedModals = {}, _this.showMediaPicker = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ControlBar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var _props = this.props,
          extendControls = _props.extendControls,
          language = _props.language;


      extendControls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(_extends({}, item.modal, { language: language }));
          }
        }
      });
    }
  }, {
    key: 'getControlItemClassName',
    value: function getControlItemClassName(data) {

      var className = 'control-item button';
      var type = data.type,
          command = data.command;


      if (type === 'inline-style' && _braftUtils.ContentUtils.selectionHasInlineStyle(this.props.editorState, command)) {
        className += ' active';
      } else if (type === 'block-type' && _braftUtils.ContentUtils.getSelectionBlockType(this.props.editorState) === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: 'applyControl',
    value: function applyControl(command, type) {
      var _this3 = this;

      if (type === 'inline-style') {
        this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionInlineStyle(this.props.editorState, command));
      } else if (type === 'block-type') {
        this.props.editor.setValue(_braftUtils.ContentUtils.toggleSelectionBlockType(this.props.editorState, command));
      } else if (type === 'editor-state-method') {
        this.props.editor[command] && this.props.editor[command]();
      }

      window.setImmediate(function () {
        _this3.props.editor.focus();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          editor = _props2.editor,
          editorState = _props2.editorState,
          controls = _props2.controls,
          media = _props2.media,
          extendControls = _props2.extendControls,
          language = _props2.language,
          colors = _props2.colors,
          tempColors = _props2.tempColors,
          fontSizes = _props2.fontSizes,
          fontFamilies = _props2.fontFamilies,
          emojis = _props2.emojis,
          viewWrapper = _props2.viewWrapper,
          lineHeights = _props2.lineHeights,
          letterSpacings = _props2.letterSpacings,
          editorHeight = _props2.editorHeight,
          textAlignOptions = _props2.textAlignOptions,
          allowSetTextBackgroundColor = _props2.allowSetTextBackgroundColor,
          indents = _props2.indents;

      var currentBlockType = _braftUtils.ContentUtils.getSelectionBlockType(editorState);
      var supportedControls = (0, _controls2.default)(language);
      var commonProps = { editor: editor, editorState: editorState, editorHeight: editorHeight, language: language, viewWrapper: viewWrapper };

      var renderedExtendControls = extendControls.map(function (item, index) {
        if (item.type === 'split') {
          return _react2.default.createElement('span', { key: controls.length * 2 + index, className: 'split-line' });
        } else if (item.type === 'dropdown') {
          var disabled = item.disabled,
              autoHide = item.autoHide,
              html = item.html,
              text = item.text,
              className = item.className,
              showDropDownArrow = item.showDropDownArrow,
              hoverTitle = item.hoverTitle,
              component = item.component,
              arrowActive = item.arrowActive,
              ref = item.ref;

          return _react2.default.createElement(
            _DropDown2.default,
            {
              key: index,
              className: "control-item dropdown " + className,
              caption: text,
              editorHeight: editorHeight,
              htmlCaption: html,
              showDropDownArrow: showDropDownArrow,
              viewWrapper: viewWrapper,
              hoverTitle: hoverTitle,
              arrowActive: arrowActive,
              autoHide: autoHide,
              disabled: disabled,
              ref: ref
            },
            component
          );
        } else if (item.type === 'modal') {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: controls.length * 2 + index,
              title: item.hoverTitle,
              className: 'control-item button ' + item.className,
              dangerouslySetInnerHTML: item.html ? { __html: item.html } : null,
              onClick: function onClick(event) {
                if (item.modal && item.modal.id) {
                  if (_this4.extendedModals[item.modal.id]) {
                    _this4.extendedModals[item.modal.id].active = true;
                    _this4.extendedModals[item.modal.id].update(_extends({}, item.modal, { language: language }));
                  } else {
                    _this4.extendedModals[item.modal.id] = (0, _Modal.showModal)(_extends({}, item.modal, { language: language }));
                    item.modal.onCreate && item.modal.onCreate(_this4.extendedModals[item.modal.id]);
                  }
                }
                item.onClick && item.onClick(event);
              }
            },
            !item.html ? item.text : null
          );
        } else if (item.type === 'component') {
          return _react2.default.createElement(
            'div',
            {
              key: controls.length * 2 + index,
              className: 'control-item component-wrapper ' + item.className
            },
            item.component
          );
        } else {
          return _react2.default.createElement(
            'button',
            {
              type: 'button',
              key: controls.length * 2 + index,
              title: item.hoverTitle,
              className: 'control-item button ' + item.className,
              dangerouslySetInnerHTML: item.html ? { __html: item.html } : null,
              onClick: function onClick(event) {
                return item.onClick && item.onClick(event);
              }
            },
            !item.html ? item.text : null
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'BraftEditor-controlBar' },
        controls.map(function (item, index) {
          if (item.toLowerCase() === 'split') {
            return _react2.default.createElement('span', { key: index, className: 'split-line' });
          }
          var controlItem = supportedControls.find(function (subItem) {
            return subItem.key.toLowerCase() === item.toLowerCase();
          });
          if (!controlItem) {
            return null;
          }
          if (controlItem.type === 'headings') {
            return _react2.default.createElement(_Headings2.default, _extends({
              key: index,
              current: currentBlockType,
              onChange: function onChange(command) {
                return _this4.applyControl(command, 'block-type');
              }
            }, commonProps));
          } else if (controlItem.type === 'text-color') {
            return _react2.default.createElement(_TextColor2.default, _extends({
              key: index,
              colors: colors,
              tempColors: tempColors,
              allowSetTextBackgroundColor: allowSetTextBackgroundColor
            }, commonProps));
          } else if (controlItem.type === 'font-size') {
            return _react2.default.createElement(_FontSize2.default, _extends({
              key: index,
              fontSizes: fontSizes,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'line-height') {
            return _react2.default.createElement(_LineHeight2.default, _extends({
              key: index,
              lineHeights: lineHeights,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'letter-spacing') {
            return _react2.default.createElement(_letterSpacing2.default, _extends({
              key: index,
              letterSpacings: letterSpacings,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'indent') {
            return _react2.default.createElement(_indent2.default, _extends({
              key: index,
              indents: indents,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'font-family') {
            return _react2.default.createElement(_FontFamily2.default, _extends({
              key: index,
              fontFamilies: fontFamilies,
              defaultCaption: controlItem.title
            }, commonProps));
          } else if (controlItem.type === 'emoji') {
            return _react2.default.createElement(_EmojiPicker2.default, _extends({
              key: index,
              emojis: emojis,
              defaultCaption: controlItem.text
            }, commonProps));
          } else if (controlItem.type === 'link') {
            return _react2.default.createElement(_LinkEditor2.default, _extends({
              key: index
            }, commonProps));
          } else if (controlItem.type === 'text-align') {
            return _react2.default.createElement(_TextAlign2.default, _extends({
              key: index,
              textAlignOptions: textAlignOptions
            }, commonProps));
          } else if (controlItem.type === 'media') {
            if (!media.image && !media.video && !media.audio) {
              return null;
            }
            return _react2.default.createElement(
              'button',
              {
                type: 'button',
                key: index,
                title: controlItem.title,
                className: 'control-item button',
                onClick: _this4.showMediaPicker
              },
              controlItem.text
            );
          } else {
            var buttonClassName = _this4.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            });
            return _react2.default.createElement(
              'button',
              {
                type: 'button',
                key: index,
                title: controlItem.title,
                className: buttonClassName,
                onClick: function onClick() {
                  return _this4.applyControl(controlItem.command, controlItem.type);
                }
              },
              controlItem.text
            );
          }
        }),
        renderedExtendControls
      );
    }
  }]);

  return ControlBar;
}(_react2.default.Component);

exports.default = ControlBar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleStrategy(contentBlock, callback, contentState) {

  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

var Link = function Link(props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return _react2.default.createElement(
    'span',
    { className: 'braft-link-wrap' },
    _react2.default.createElement(
      'a',
      { onClick: function onClick(event) {
          return viewLink(event, href);
        }, className: 'braft-link', href: href, target: target },
      children
    )
  );
};

var viewLink = function viewLink(event, link) {
  if (event.getModifierState('Shift')) {
    var tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = '_blank';
    tempLink.click();
  }
};

exports.default = {
  strategy: handleStrategy,
  component: Link
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Link = __webpack_require__(21);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_Link2.default];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {

  var colorStyles = {};
  var bgColorStyles = {};
  var fontSizeStyles = {};
  var fontFamilyStyles = {};
  var lineHeightStyles = {};
  var letterSpacingtStyles = {};
  var indentStyles = {};

  props.colors.forEach(function (color) {
    var color_id = color.replace('#', '').toUpperCase();
    colorStyles['COLOR-' + color_id] = { color: color };
    bgColorStyles['BGCOLOR-' + color_id] = { backgroundColor: color };
  });

  props.fontSizes.forEach(function (fontSize) {
    fontSizeStyles['FONTSIZE-' + fontSize] = { fontSize: fontSize };
  });

  props.fontFamilies.forEach(function (fontFamily) {
    fontFamilyStyles['FONTFAMILY-' + fontFamily.name.toUpperCase()] = {
      fontFamily: fontFamily.family
    };
  });

  props.lineHeights.forEach(function (lineHeight) {
    lineHeightStyles['LINEHEIGHT-' + lineHeight] = { lineHeight: lineHeight };
  });

  props.letterSpacings.forEach(function (letterSpacing) {
    letterSpacingtStyles['LETTERSPACING-' + letterSpacing] = { letterSpacing: letterSpacing };
  });
  props.indents.forEach(function (indent) {
    indentStyles['INDENT-' + indent] = { paddingLeft: indent, paddingRight: indent };
  });

  return _extends({
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
  }, colorStyles, bgColorStyles, fontSizeStyles, fontFamilyStyles, lineHeightStyles, letterSpacingtStyles, indentStyles);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStyleFn;
function blockStyleFn(block) {

  var blockAlignment = block.getData() && block.getData().get('textAlign');
  var blockFloat = block.getData() && block.getData().get('float');

  var result = null;

  if (blockAlignment) {
    result = 'braft-' + blockAlignment + '-aligned-block';
  }

  if (blockFloat) {
    result += ' braft-float-' + blockFloat;
  }

  return result;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalLine = function (_React$Component) {
  _inherits(HorizontalLine, _React$Component);

  function HorizontalLine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HorizontalLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalLine.__proto__ || Object.getPrototypeOf(HorizontalLine)).call.apply(_ref, [this].concat(args))), _this), _this.removeHorizontalLine = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HorizontalLine, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'braft-horizontal-line' },
        _react2.default.createElement(
          'div',
          { className: 'braft-horizontal-line-toolbar' },
          _react2.default.createElement(
            'a',
            { onClick: this.removeHorizontalLine },
            '\uE9AC'
          )
        )
      );
    }
  }]);

  return HorizontalLine;
}(_react2.default.Component);

exports.default = HorizontalLine;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(57);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = function (_React$Component) {
  _inherits(Embed, _React$Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {
      var url = _this.props.mediaData.url;


      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.videoPlayer.embedTitle,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        children: _react2.default.createElement('div', { className: 'braft-embed-media-player', dangerouslySetInnerHTML: { __html: url } })
      });
    }, _this.removeEmbed = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Embed, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-video-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        _react2.default.createElement('i', { className: 'braft-icon-code' }),
        _react2.default.createElement(
          'h5',
          null,
          name
        ),
        _react2.default.createElement(
          'h6',
          null,
          url
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-video-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeEmbed },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Embed;
}(_react2.default.Component);

exports.default = Embed;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(58);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {

      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.audioPlayer.title,
        width: 480,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        onConfirm: _this.handlePlayerClose,
        children: _react2.default.createElement('audio', { className: 'braft-embed-audio-player', src: _this.props.mediaData.url, controls: true })
      });
    }, _this.removeAudio = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.playerModal = null;
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Audio, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-audio-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        _react2.default.createElement('i', { className: 'braft-icon-music' }),
        _react2.default.createElement(
          'h5',
          null,
          name
        ),
        _react2.default.createElement(
          'h6',
          null,
          url
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-audio-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeAudio },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Audio;
}(_react2.default.Component);

exports.default = Audio;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(60);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      playerVisible: false
    }, _this.showPlayer = function () {
      var _this$props$mediaData = _this.props.mediaData,
          url = _this$props$mediaData.url,
          meta = _this$props$mediaData.meta;


      _this.playerModal = (0, _Modal.showModal)({
        title: _this.props.language.videoPlayer.title,
        width: 480,
        confirmable: true,
        language: _this.props.language,
        showCancel: false,
        onClose: _this.handlePlayerClose,
        children: _react2.default.createElement('video', { poster: meta && meta.poster ? meta.poster : '', className: 'braft-embed-video-player', src: url, controls: true })
      });
    }, _this.removeVideo = function () {
      _this.props.editor.removeBlock(_this.props.block);
    }, _this.showToolbar = function () {
      _this.setState({
        toolbarVisible: true
      });
    }, _this.hideToolbar = function () {
      _this.setState({
        toolbarVisible: false
      });
    }, _this.handlePlayerClose = function () {
      _this.props.editor && _this.props.editor.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.playerModal && this.playerModal.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          playerVisible = _state.playerVisible;
      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language;
      var url = mediaData.url,
          width = mediaData.width,
          height = mediaData.height,
          name = mediaData.name,
          meta = mediaData.meta;


      return _react2.default.createElement(
        'div',
        {
          className: 'braft-media-video-holder',
          onMouseOver: this.showToolbar,
          onMouseLeave: this.hideToolbar
        },
        meta && meta.poster ? _react2.default.createElement('img', { className: 'braft-media-video-poster', src: meta.poster }) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'braft-icon-film' }),
          _react2.default.createElement(
            'h5',
            null,
            name
          ),
          _react2.default.createElement(
            'h6',
            null,
            url
          )
        ),
        toolbarVisible ? _react2.default.createElement(
          'div',
          {
            ref: function ref(instance) {
              return _this2.toolbarElement = instance;
            },
            className: 'braft-embed-video-toolbar'
          },
          _react2.default.createElement(
            'a',
            { onClick: this.showPlayer },
            '\uE037'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.removeVideo },
            '\uE9AC'
          )
        ) : null
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

exports.default = Video;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(62);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switch = __webpack_require__(5);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    }, _this.handleDragStart = function (event) {

      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: _extends({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setEditorProp('readOnly', false);
      });

      return true;
    }, _this.handleDragEnd = function (event) {

      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    }, _this.removeImage = function (e) {
      _this.props.editor.removeBlock(_this.props.block);
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.toggleLinkEditor = function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    }, _this.toggleSizeEditor = function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    }, _this.handleLinkInputKeyDown = function (e) {

      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    }, _this.setImageLink = function (e) {

      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    }, _this.confirmImageLink = function () {
      var link = _this.state.tempLink;


      if (link !== null) {
        _this.props.editor.setMediaData(_this.props.entityKey, { link: link });
        window.setImmediate(_this.props.editor.forceRender);
      }
    }, _this.handleSizeInputKeyDown = function (e) {

      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    }, _this.setImageWidth = function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;


      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    }, _this.setImageHeight = function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      var value = currentTarget.value;


      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    }, _this.confirmImageSize = function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;

      var newImageSize = {};

      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      _this.props.editor.setMediaData(_this.props.entityKey, newImageSize);
      window.setImmediate(_this.props.editor.forceRender);
    }, _this.setImageFloat = function (e) {
      var float = e.currentTarget.dataset.float;

      _this.props.editor.setMediaPosition(_this.props.block, { float: float });
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.setImageAlignment = function (e) {
      var alignment = e.currentTarget.dataset.alignment;

      _this.props.editor.setMediaPosition(_this.props.block, { alignment: alignment });
      _this.props.editor.setEditorProp('readOnly', false);
    }, _this.showToolbar = function (event) {

      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.props.editor.setEditorProp('readOnly', true);
          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    }, _this.hideToolbar = function (event) {

      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.props.editor.setEditorProp('readOnly', false);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          mediaData = _props.mediaData,
          language = _props.language,
          imageControls = _props.imageControls;
      var _state = this.state,
          toolbarVisible = _state.toolbarVisible,
          toolbarOffset = _state.toolbarOffset,
          linkEditorVisible = _state.linkEditorVisible,
          sizeEditorVisible = _state.sizeEditorVisible;

      var blockData = this.props.block.getData();

      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var url = mediaData.url,
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

      return _react2.default.createElement(
        'div',
        { className: 'braft-media-embeder braft-image-embeder' },
        _react2.default.createElement(
          'div',
          {
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
            className: 'braft-embed-image'
          },
          toolbarVisible ? _react2.default.createElement(
            'div',
            {
              style: { marginLeft: toolbarOffset },
              ref: function ref(instance) {
                return _this2.toolbarElement = instance;
              },
              'data-float': float,
              'data-alignment': alignment,
              className: 'braft-embed-image-toolbar'
            },
            linkEditorVisible ? _react2.default.createElement(
              'div',
              { className: 'braft-embed-image-link-editor' },
              _react2.default.createElement(
                'div',
                { className: 'editor-input-group' },
                _react2.default.createElement('input', { type: 'text', placeholder: language.linkEditor.inputWithEnterPlaceHolder, onKeyDown: this.handleLinkInputKeyDown, onChange: this.setImageLink, defaultValue: link }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.confirmImageLink },
                  language.base.confirm
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'switch-group' },
                _react2.default.createElement(_Switch2.default, {
                  active: link_target === '_blank',
                  onClick: function onClick() {
                    return _this2.setImageLinkTarget(link_target);
                  }
                }),
                _react2.default.createElement(
                  'label',
                  null,
                  language.linkEditor.openInNewWindow
                )
              )
            ) : null,
            sizeEditorVisible ? _react2.default.createElement(
              'div',
              { className: 'braft-embed-image-size-editor' },
              _react2.default.createElement(
                'div',
                { className: 'editor-input-group' },
                _react2.default.createElement('input', { type: 'text', placeholder: language.base.width, onKeyDown: this.handleSizeInputKeyDown, onChange: this.setImageWidth, defaultValue: width }),
                _react2.default.createElement('input', { type: 'text', placeholder: language.base.height, onKeyDown: this.handleSizeInputKeyDown, onChange: this.setImageHeight, defaultValue: height }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.confirmImageSize },
                  language.base.confirm
                )
              )
            ) : null,
            imageControls.floatLeft ? _react2.default.createElement(
              'a',
              { 'data-float': 'left', onClick: this.setImageFloat },
              '\uE91E'
            ) : null,
            imageControls.floatRight ? _react2.default.createElement(
              'a',
              { 'data-float': 'right', onClick: this.setImageFloat },
              '\uE914'
            ) : null,
            imageControls.alignLeft ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'left', onClick: this.setImageAlignment },
              '\uE027'
            ) : null,
            imageControls.alignCenter ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'center', onClick: this.setImageAlignment },
              '\uE028'
            ) : null,
            imageControls.alignRight ? _react2.default.createElement(
              'a',
              { 'data-alignment': 'right', onClick: this.setImageAlignment },
              '\uE029'
            ) : null,
            imageControls.size ? _react2.default.createElement(
              'a',
              { onClick: this.toggleSizeEditor },
              '\uE3C2'
            ) : null,
            imageControls.link ? _react2.default.createElement(
              'a',
              { className: link ? 'active' : '', onClick: this.toggleLinkEditor },
              '\uE91A'
            ) : null,
            imageControls.remove ? _react2.default.createElement(
              'a',
              { onClick: this.removeImage },
              '\uE9AC'
            ) : null,
            _react2.default.createElement('i', { style: { marginLeft: toolbarOffset * -1 }, className: 'braft-embed-image-toolbar-arrow' })
          ) : null,
          _react2.default.createElement('img', {
            ref: function ref(instance) {
              return _this2.imageElement = instance;
            },
            src: url, style: { width: width, height: height }, width: width, height: height
          })
        ),
        clearFix && _react2.default.createElement('div', { className: 'clearfix', style: { clear: 'both', height: 0, lineHeight: 0, float: 'none' } })
      );
    }
  }, {
    key: 'calcToolbarOffset',
    value: function calcToolbarOffset() {

      var viewRect = null;

      if (this.props.viewWrapper) {
        viewRect = document.querySelector(this.props.viewWrapper).getBoundingClientRect();
      } else {
        viewRect = document.body.getBoundingClientRect();
      }

      var toolbarRect = this.toolbarElement.getBoundingClientRect();
      var imageRect = this.imageElement.getBoundingClientRect();
      var right = imageRect.right - imageRect.width / 2 + toolbarRect.width / 2;
      var left = imageRect.left + imageRect.width / 2 - toolbarRect.width / 2;

      right = viewRect.right - right;
      left = left - viewRect.left;

      if (right < 10) {
        return right - 10;
      } else if (left < 10) {
        return left * -1 + 10;
      } else {
        return 0;
      }
    }
  }, {
    key: 'setImageLinkTarget',
    value: function setImageLinkTarget(link_target) {

      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setMediaData(this.props.entityKey, { link_target: link_target });
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorators = exports.getCustomStyleMap = exports.blockStyleFn = exports.customBlockRenderMap = exports.getBlockRendererFn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _immutable = __webpack_require__(31);

var _draftJs = __webpack_require__(4);

var _Image = __webpack_require__(30);

var _Image2 = _interopRequireDefault(_Image);

var _Video = __webpack_require__(29);

var _Video2 = _interopRequireDefault(_Video);

var _Audio = __webpack_require__(27);

var _Audio2 = _interopRequireDefault(_Audio);

var _Embed = __webpack_require__(26);

var _Embed2 = _interopRequireDefault(_Embed);

var _HorizontalLine = __webpack_require__(25);

var _HorizontalLine2 = _interopRequireDefault(_HorizontalLine);

var _blockStyles = __webpack_require__(24);

var _blockStyles2 = _interopRequireDefault(_blockStyles);

var _inlineStyles = __webpack_require__(23);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _decorators2 = __webpack_require__(22);

var _decorators3 = _interopRequireDefault(_decorators2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAtomicBlockComponent = function getAtomicBlockComponent(block, superProps) {
  return function (props) {

    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();
    var mediaProps = _extends({}, superProps, {
      block: block, mediaData: mediaData, entityKey: entityKey
    });

    if (mediaType === 'IMAGE') {
      return _react2.default.createElement(_Image2.default, mediaProps);
    } else if (mediaType === 'AUDIO') {
      return _react2.default.createElement(_Audio2.default, mediaProps);
    } else if (mediaType === 'VIDEO') {
      return _react2.default.createElement(_Video2.default, mediaProps);
    } else if (mediaType === 'EMBED') {
      return _react2.default.createElement(_Embed2.default, mediaProps);
    } else if (mediaType === 'HR') {
      return _react2.default.createElement(_HorizontalLine2.default, mediaProps);
    }
    // 支持自定义的atomic
    if (superProps.extendAtomics) {
      var atomics = superProps.extendAtomics;
      for (var i = 0; i < atomics.length; i++) {
        if (mediaType === atomics[i].type) {
          var Component = atomics[i].component;
          return _react2.default.createElement(Component, mediaProps);
        }
      }
    }

    return null;
  };
};

var getBlockRendererFn = exports.getBlockRendererFn = function getBlockRendererFn(props) {
  return function (block) {

    return block.getType() === 'atomic' ? {
      component: getAtomicBlockComponent(block, props),
      editable: false
    } : null;
  };
};

var customBlockRenderMap = exports.customBlockRenderMap = (0, _immutable.Map)({
  'atomic': {
    element: ''
  },
  'code-block': {
    element: 'code',
    wrapper: _draftJs.DefaultDraftBlockRenderMap.get('code-block').wrapper
  }
});
var blockStyleFn = exports.blockStyleFn = _blockStyles2.default;
var getCustomStyleMap = exports.getCustomStyleMap = _inlineStyles2.default;
var decorators = exports.decorators = _decorators3.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  height: 500,
  language: 'zh',
  controls: ['undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing', 'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'headings', 'list_ul', 'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media', 'split', 'clear'],
  excludeControls: [],
  tabIndents: 2,
  forceNewLine: false,
  textAlignOptions: ['left', 'center', 'right', 'justify'],
  allowSetTextBackgroundColor: true,
  letterSpacings: [0, 2, 4, 6],
  indents: [0, 14, 21, 28],
  extendControls: [],
  media: {
    allowPasteImage: true,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    sourceFn: null,
    onRemove: null,
    onChange: null,
    onInsert: null,
    externalMedias: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: {
    floatLeft: true,
    floatRight: true,
    alignLeft: true,
    alignCenter: true,
    alignRight: true,
    link: true,
    size: true,
    remove: true
  },
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'],
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
  extendAtomics: []
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(4);

// TODO
// 允许自定义的快捷键设置

exports.default = function (event) {

  if (event.keyCode === 83 && (_draftJs.KeyBindingUtil.hasCommandModifier(event) || _draftJs.KeyBindingUtil.isCtrlKeyCommand(event))) {
    return 'braft-save';
  }

  return (0, _draftJs.getDefaultKeyBinding)(event);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromHTMLConfig = exports.getToHTMLConfig = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _maps = __webpack_require__(6);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockTypes = Object.keys(_maps.blocks);
var blockNames = blockTypes.map(function (key) {
  return _maps.blocks[key];
});

var convertAtomicBlock = function convertAtomicBlock(block, contentState) {

  if (!block || !block.key) {
    return _react2.default.createElement('p', null);
  }

  var contentBlock = contentState.getBlockForKey(block.key);

  if (!contentBlock) {
    return _react2.default.createElement('p', null);
  }

  var entityKey = contentBlock.getEntityAt(0);

  if (!entityKey) {
    return _react2.default.createElement('p', null);
  }

  var entity = contentState.getEntity(entityKey);
  var mediaType = entity.getType().toLowerCase();

  var _block$data = block.data,
      float = _block$data.float,
      alignment = _block$data.alignment;

  var _entity$getData = entity.getData(),
      url = _entity$getData.url,
      link = _entity$getData.link,
      link_target = _entity$getData.link_target,
      width = _entity$getData.width,
      height = _entity$getData.height,
      meta = _entity$getData.meta;

  if (mediaType === 'image') {

    var imageWrapStyle = {};
    var styledClassName = '';

    if (float) {
      imageWrapStyle.float = float;
      styledClassName += ' float-' + float;
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment;
      styledClassName += ' align-' + alignment;
    }

    if (link) {
      return _react2.default.createElement(
        'div',
        { className: "media-wrap image-wrap" + styledClassName, style: imageWrapStyle },
        _react2.default.createElement(
          'a',
          { style: { display: 'inline-block' }, href: link, target: link_target },
          _react2.default.createElement('img', _extends({}, meta, { src: url, width: width, height: height, style: { width: width, height: height } }))
        )
      );
    } else {
      return _react2.default.createElement(
        'div',
        { className: "media-wrap image-wrap" + styledClassName, style: imageWrapStyle },
        _react2.default.createElement('img', _extends({}, meta, { src: url, width: width, height: height, style: { width: width, height: height } }))
      );
    }
  } else if (mediaType === 'audio') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap audio-wrap' },
      _react2.default.createElement('audio', _extends({ controls: true }, meta, { src: url }))
    );
  } else if (mediaType === 'video') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap video-wrap' },
      _react2.default.createElement('video', _extends({ controls: true }, meta, { src: url, width: width, height: height }))
    );
  } else if (mediaType === 'embed') {
    return _react2.default.createElement(
      'div',
      { className: 'media-wrap embed-wrap' },
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: url } })
    );
  } else if (mediaType === 'hr') {
    return _react2.default.createElement('hr', null);
  } else {
    return _react2.default.createElement('p', null);
  }
};

var styleToHTML = function styleToHTML(props) {
  return function (style) {

    style = style.toLowerCase();

    if (style === 'strikethrough') {
      return _react2.default.createElement('span', { style: { textDecoration: 'line-through' } });
    } else if (style === 'superscript') {
      return _react2.default.createElement('sup', null);
    } else if (style === 'subscript') {
      return _react2.default.createElement('sub', null);
    } else if (style.indexOf('color-') === 0) {
      return _react2.default.createElement('span', { style: { color: '#' + style.split('-')[1] } });
    } else if (style.indexOf('bgcolor-') === 0) {
      return _react2.default.createElement('span', { style: { backgroundColor: '#' + style.split('-')[1] } });
    } else if (style.indexOf('fontsize-') === 0) {
      return _react2.default.createElement('span', { style: { fontSize: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('lineheight-') === 0) {
      return _react2.default.createElement('span', { style: { lineHeight: style.split('-')[1] } });
    } else if (style.indexOf('letterspacing-') === 0) {
      return _react2.default.createElement('span', { style: { letterSpacing: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('indent-') === 0) {
      return _react2.default.createElement('span', { style: { paddingLeft: style.split('-')[1] + 'px', paddingRight: style.split('-')[1] + 'px' } });
    } else if (style.indexOf('fontfamily-') === 0) {
      var fontFamily = props.fontFamilies.find(function (item) {
        return item.name.toLowerCase() === style.split('-')[1];
      });
      if (!fontFamily) return;
      return _react2.default.createElement('span', { style: { fontFamily: fontFamily.family } });
    }
  };
};

var blockToHTML = function blockToHTML(contentState) {
  return function (block) {

    var result = null;
    var blockStyle = "";

    var blockType = block.type.toLowerCase();
    var textAlign = block.data.textAlign;


    if (textAlign) {
      blockStyle = ' style="text-align:' + textAlign + ';"';
    }

    if (blockType === 'atomic') {
      return convertAtomicBlock(block, contentState);
    } else if (blockType === 'code-block') {

      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();

      if (previousBlockType !== 'code-block' && nextBlockType !== 'code-block') {
        return {
          start: '<pre>',
          end: '</pre>'
        };
      }
      if (previousBlockType !== 'code-block') {
        return {
          start: '<pre>',
          end: '<br/>'
        };
      }
      if (nextBlockType !== 'code-block') {
        return {
          start: '',
          end: '</pre>'
        };
      }

      return {
        start: '',
        end: '<br/>'
      };
    } else if (_maps.blocks[blockType]) {
      return {
        start: '<' + _maps.blocks[blockType] + blockStyle + '>',
        end: '</' + _maps.blocks[blockType] + '>'
      };
    } else if (blockType === 'unordered-list-item') {
      return {
        start: '<li' + blockStyle + '>',
        end: '</li>',
        nest: _react2.default.createElement('ul', null)
      };
    } else if (blockType === 'ordered-list-item') {
      return {
        start: '<li' + blockStyle + '>',
        end: '</li>',
        nest: _react2.default.createElement('ol', null)
      };
    }
  };
};

var entityToHTML = function entityToHTML(entity, originalText) {

  var result = originalText;
  var entityType = entity.type.toLowerCase();

  if (entityType === 'link') {
    return _react2.default.createElement(
      'a',
      { href: entity.data.href, target: entity.data.target },
      originalText
    );
  } else if (entityType === 'color') {
    return _react2.default.createElement(
      'span',
      { style: { color: entity.data.color } },
      originalText
    );
  } else if (entityType === 'bg-color') {
    return _react2.default.createElement(
      'span',
      { style: { backgroundColor: entity.data.color } },
      originalText
    );
  }
};

var htmlToStyle = function htmlToStyle(props) {
  return function (nodeName, node, currentStyle) {

    if (!node || !node.style) {
      return currentStyle;
    }

    var newStyle = currentStyle;

    for (var i = 0; i < node.style.length; i++) {
      if (nodeName === 'span' && node.style[i] === 'color') {
        var color = _braftUtils.ColorUtils.getHexColor(node.style.color);
        newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && node.style[i] === 'background-color') {
        var _color = _braftUtils.ColorUtils.getHexColor(node.style.backgroundColor);
        newStyle = _color ? newStyle.add('BGCOLOR-' + _color.replace('#', '').toUpperCase()) : newStyle;
      } else if (nodeName === 'span' && node.style[i] === 'font-size') {
        newStyle = newStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10));
      } else if (nodeName === 'span' && node.style[i] === 'line-height') {
        newStyle = newStyle.add('LINEHEIGHT-' + node.style.lineHeight);
      } else if (nodeName === 'span' && node.style[i] === 'letter-spacing' && !isNaN(node.style.letterSpacing.replace('px', ''))) {
        newStyle = newStyle.add('LETTERSPACING-' + parseInt(node.style.letterSpacing, 10));
      } else if (nodeName === 'span' && (node.style[i] === 'padding-left' || node.style[i] === 'padding-right')) {
        newStyle = newStyle.add('INDENT-' + parseInt(node.style.paddingLeft, 10));
      } else if (nodeName === 'span' && node.style[i] === 'text-decoration' && node.style.textDecoration === 'line-through') {
        newStyle = newStyle.add('STRIKETHROUGH');
      } else if (nodeName === 'span' && node.style[i] === 'font-family') {
        var fontFamily = props.fontFamilies.find(function (item) {
          return item.family.toLowerCase() === node.style.fontFamily.toLowerCase();
        });
        if (!fontFamily) continue;
        newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase());
      }
    }

    if (nodeName === 'sup') {
      newStyle = newStyle.add('SUPERSCRIPT');
    } else if (nodeName === 'sub') {
      newStyle = newStyle.add('SUBSCRIPT');
    }

    return newStyle;
  };
};

var htmlToEntity = function htmlToEntity(nodeName, node, createEntity) {
  var alt = node.alt,
      title = node.title,
      id = node.id,
      controls = node.controls,
      autoplay = node.autoplay,
      loop = node.loop,
      poster = node.poster;

  var meta = {};

  id && (meta.id = id);
  alt && (meta.alt = alt);
  title && (meta.title = title);
  controls && (meta.controls = controls);
  autoplay && (meta.autoPlay = autoplay);
  loop && (meta.loop = loop);
  poster && (meta.poster = poster);

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    var href = node.href,
        target = node.target;

    return createEntity('LINK', 'MUTABLE', { href: href, target: target });
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE', { url: node.src, meta: meta });
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE', { url: node.src, meta: meta });
  } else if (nodeName === 'img') {

    var parentNode = node.parentNode;
    var entityData = { meta: meta };
    var _node$style = node.style,
        width = _node$style.width,
        height = _node$style.height;


    entityData.url = node.src;
    width && (entityData.width = width);
    height && (entityData.height = height);

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href;
      entityData.link_target = parentNode.target;
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData);
  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {});
  } else if (node.parentNode && node.parentNode.classList.contains('embed-wrap')) {

    var embedContent = node.innerHTML || node.outerHTML;

    if (embedContent) {
      return createEntity('EMBED', 'IMMUTABLE', {
        url: embedContent
      });
    }
  }
};

var htmlToBlock = function htmlToBlock(nodeName, node) {

  var nodeStyle = node.style || {};

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    };
  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: {}
    };
  } else if (nodeStyle.textAlign && blockNames.indexOf(nodeName) > -1) {

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: {
        textAlign: nodeStyle.textAlign
      }
    };
  }
};

var getToHTMLConfig = exports.getToHTMLConfig = function getToHTMLConfig(props) {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  };
};

var getFromHTMLConfig = exports.getFromHTMLConfig = function getFromHTMLConfig(props) {

  return {
    htmlToStyle: htmlToStyle(props),
    htmlToEntity: htmlToEntity,
    htmlToBlock: htmlToBlock
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
    indent: '兩端縮進',
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
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
    indent: '两端缩进',
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
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
    indent: 'Indent at both ends',
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
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en = __webpack_require__(40);

var _en2 = _interopRequireDefault(_en);

var _zh = __webpack_require__(39);

var _zh2 = _interopRequireDefault(_zh);

var _zhHant = __webpack_require__(38);

var _zhHant2 = _interopRequireDefault(_zhHant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "en": _en2.default,
  "zh": _zh2.default,
  "zh-hant": _zhHant2.default
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(68);

__webpack_require__(66);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _languages = __webpack_require__(41);

var _languages2 = _interopRequireDefault(_languages);

var _draftJs = __webpack_require__(4);

var _draftConvert = __webpack_require__(37);

var _draftjsUtils = __webpack_require__(36);

var _convert = __webpack_require__(35);

var _keybindings = __webpack_require__(34);

var _keybindings2 = _interopRequireDefault(_keybindings);

var _options = __webpack_require__(33);

var _options2 = _interopRequireDefault(_options);

var _renderers = __webpack_require__(32);

var _ControlBar = __webpack_require__(20);

var _ControlBar2 = _interopRequireDefault(_ControlBar);

var _braftUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editorDecorators = new _draftJs.CompositeDecorator(_renderers.decorators);
var blockRenderMap = _draftJs.DefaultDraftBlockRenderMap.merge(_renderers.customBlockRenderMap);

var BraftEditor = function (_React$Component) {
  _inherits(BraftEditor, _React$Component);

  function BraftEditor(props) {
    _classCallCheck(this, BraftEditor);

    var _this = _possibleConstructorReturn(this, (BraftEditor.__proto__ || Object.getPrototypeOf(BraftEditor)).call(this, props));

    _initialiseProps.call(_this);

    var editorState = _draftJs.EditorState.createEmpty(editorDecorators);

    _this.isFocused = false;
    _this.instanceIndex = _braftUtils.BaseUtils.UniqueIndex();

    _this.state = {
      tempColors: [],
      editorState: editorState,
      editorProps: {}
    };

    var browser = null;
    if (window.chrome) {
      browser = 'chrome';
    } else if (window.safari) {
      browser = 'safari';
    } else if (navigator.userAgent.indexOf('Firefox') > 0) {
      browser = 'firefox';
    }

    if (!document.body.classList.contains('browser-' + browser)) {
      document.body.classList.add('browser-' + browser);
    }

    return _this;
  }

  _createClass(BraftEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          controls = _props.controls,
          excludeControls = _props.excludeControls,
          extendControls = _props.extendControls,
          disabled = _props.disabled,
          height = _props.height,
          media = _props.media,
          language = _props.language,
          colors = _props.colors,
          fontSizes = _props.fontSizes,
          fontFamilies = _props.fontFamilies,
          emojis = _props.emojis,
          viewWrapper = _props.viewWrapper,
          placeholder = _props.placeholder,
          imageControls = _props.imageControls,
          lineHeights = _props.lineHeights,
          letterSpacings = _props.letterSpacings,
          indents = _props.indents,
          textAlignOptions = _props.textAlignOptions,
          allowSetTextBackgroundColor = _props.allowSetTextBackgroundColor,
          extendAtomics = _props.extendAtomics;


      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });

      var tempColors = this.state.tempColors;

      language = _languages2.default[language] || _languages2.default[_options2.default.language];

      var externalMedias = media && media.externalMedias ? _extends({}, _options2.default.media.externalMedias, media.externalMedias) : _options2.default.media.externalMedias;

      media = _extends({}, _options2.default.media, media, { externalMedias: externalMedias });

      imageControls = imageControls ? _extends({}, _options2.default.imageControls, imageControls) : _options2.default.imageControls;

      viewWrapper = viewWrapper || '.BraftEditor-instance-' + this.instanceIndex;

      this.colorList = [].concat(_toConsumableArray(colors), _toConsumableArray(tempColors));
      this.fontSizeList = fontSizes;
      this.fontFamilyList = fontFamilies;
      this.lineHeightList = lineHeights;
      this.letterSpacingList = letterSpacings;
      this.indentList = indents;

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorState: this.state.editorState,
        editorHeight: height,
        ref: function ref(instance) {
          return _this2.controlBarInstance = instance;
        },
        media: media, controls: controls, language: language, viewWrapper: viewWrapper, extendControls: extendControls, colors: colors, tempColors: tempColors, fontSizes: fontSizes, fontFamilies: fontFamilies,
        emojis: emojis, lineHeights: lineHeights, letterSpacings: letterSpacings, indents: indents, textAlignOptions: textAlignOptions, allowSetTextBackgroundColor: allowSetTextBackgroundColor
      };

      var blockRendererFn = (0, _renderers.getBlockRendererFn)({
        editor: this, imageControls: imageControls,
        language: language, viewWrapper: viewWrapper,
        extendAtomics: extendAtomics
      });

      var customStyleMap = (0, _renderers.getCustomStyleMap)({
        colors: [].concat(_toConsumableArray(colors), _toConsumableArray(tempColors)),
        fontSizes: fontSizes, fontFamilies: fontFamilies, lineHeights: lineHeights, letterSpacings: letterSpacings, indents: indents
      });

      var editorProps = _extends({
        ref: function ref(instance) {
          _this2.draftInstance = instance;
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
        customStyleMap: customStyleMap, blockStyleFn: _renderers.blockStyleFn, keyBindingFn: _keybindings2.default,
        blockRendererFn: blockRendererFn, blockRenderMap: blockRenderMap, placeholder: placeholder
      }, this.state.editorProps);

      return _react2.default.createElement(
        'div',
        { className: 'BraftEditor-container BraftEditor-instance-' + this.instanceIndex + ' ' + (disabled ? 'disabled' : '') },
        _react2.default.createElement(_ControlBar2.default, controlBarProps),
        _react2.default.createElement(
          'div',
          { className: 'BraftEditor-content', style: height ? { height: height } : {} },
          _react2.default.createElement(_draftJs.Editor, editorProps)
        )
      );
    }
  }]);

  return BraftEditor;
}(_react2.default.Component);

BraftEditor.defaultProps = _extends({}, _options2.default, {
  onChange: null,
  onFocus: null,
  onBlur: null,
  onSave: null
});

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (editorState) {

    _this3.setState({ editorState: editorState }, function () {
      _this3.props.onChange && _this3.props.onChange(editorState);
    });
  };

  this.getDraftInstance = function () {
    return _this3.draftInstance;
  };

  this.getFinderInstance = function () {
    return _this3.braftFinder;
  };

  this.convertHTML = function (htmlString) {
    var fontFamilies = _this3.props.fontFamilies;

    return (0, _draftConvert.convertFromHTML)((0, _convert.getFromHTMLConfig)({ fontFamilies: fontFamilies }))(htmlString);
  };

  this.getValue = function () {
    return _this3.state.editorState;
  };

  this.setValue = function (editorState) {
    return _this3.onChange(editorState);
  };

  this.setEditorProps = function (editorProps) {

    _this3.setState({
      editorProps: _extends({}, _this3.state.editorProps, editorProps)
    });

    return _this3;
  };

  this.forceRender = function () {
    return _this3.setValue(_draftJs.EditorState.createWithContent(_this3.state.editorState.getCurrentContent(), editorDecorators));
  };

  this.onTab = function (event) {

    var tabIndents = _this3.props.tabIndents;

    if (_braftUtils.ContentUtils.getSelectionBlockType(_this3.state.editorState) === 'code-block') {
      _this3.insertText(' '.repeat(tabIndents), false);
      event.preventDefault();
      return false;
    }

    _this3.props.onTab && _this3.props.onTab(event);
  };

  this.onFocus = function () {
    _this3.isFocused = true;
    _this3.props.onFocus && _this3.props.onFocus();
  };

  this.onBlur = function () {
    _this3.isFocused = false;
    _this3.props.onBlur && _this3.props.onBlur();
  };

  this.handleKeyCommand = function (command) {

    if (command === 'braft-save') {
      _this3.props.onSave && _this3.props.onSave();
      return 'handled';
    }

    var nextEditorState = _draftJs.RichUtils.handleKeyCommand(_this3.state.editorState, command);

    if (nextEditorState) {
      _this3.onChange(nextEditorState);
      return 'handled';
    }

    return 'not-handled';
  };

  this.handleReturn = function (event) {

    var currentBlock = _braftUtils.ContentUtils.getSelectionBlock(_this3.state.editorState);
    var currentBlockType = currentBlock.getType();

    if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {

      if (currentBlock.getLength() === 0) {
        _this3.setValue(_braftUtils.ContentUtils.toggleSelectionBlockType(_this3.state.editorState, 'unstyled'));
        return 'handled';
      }

      return 'not-handled';
    } else if (currentBlockType === 'code-block') {

      if (event.which === 13 && (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control'))) {
        _this3.setValue(_braftUtils.ContentUtils.toggleSelectionBlockType(_this3.state.editorState, 'unstyled'));
        return 'handled';
      }

      return 'not-handled';
    } else {

      if (_this3.props.forceNewLine) {
        event.which = 13;
        event.getModifierState = function () {
          return true;
        };
      }

      var nextEditorState = (0, _draftjsUtils.handleNewLine)(_this3.state.editorState, event);

      if (nextEditorState) {
        _this3.setValue(nextEditorState);
        return 'handled';
      }

      return 'not-handled';
    }

    return false;
  };

  this.handleDrop = function (selectionState, dataTransfer, isInternal) {

    if (window.__BRAFT_DRAGING__IMAGE__) {

      var editorState = _braftUtils.ContentUtils.removeBlock(_this3.state.editorState, window.__BRAFT_DRAGING__IMAGE__.block, selectionState);
      editorState = _braftUtils.ContentUtils.insertMedias(editorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData]);

      window.__BRAFT_DRAGING__IMAGE__ = null;

      _this3.setEditorProp('readOnly', false);
      _this3.setValue(editorState);

      return 'handled';
    } else if (!dataTransfer || !dataTransfer.getText()) {
      return 'handled';
    }

    return 'not-handled';
  };

  this.handleDroppedFiles = function (selectionState, files) {

    if (files[0] && files[0].type.indexOf('image') > -1 && _this3.props.media && _this3.props.media.allowPasteImage !== false) {

      _this3.braftFinder.uploadImage(files[0], function (image) {
        _this3.setValue(_braftUtils.ContentUtils.insertMedias(_this3.state.editorState, [image]));
      });

      return 'handled';
    }

    return 'not-handled';
  };

  this.handlePastedFiles = function (files) {

    if (files[0] && files[0].type.indexOf('image') > -1 && _this3.props.media && _this3.props.media.allowPasteImage !== false) {

      _this3.braftFinder.uploadImage(files[0], function (image) {
        _this3.setValue(_braftUtils.ContentUtils.insertMedias(_this3.state.editorState, [image]));
      });

      return 'handled';
    }

    return 'not-handled';
  };

  this.handlePastedText = function (text, html) {

    if (!html) {
      return false;
    }

    var pasteMode = _this3.tmpPasteMode || _this3.props.pasteMode || 'normal';

    if (pasteMode === 'text') {
      _this3.tmpPasteMode = 'normal';
      var tmpTextHolder = document.createElement('div');
      tmpTextHolder.innerHTML = html;
      return _this3.handlePastedText(text, tmpTextHolder.textContent || tmpTextHolder.innerText || '');
    } else {
      _this3.tmpPasteMode = null;
    }

    var fontFamilies = _this3.props.fontFamilies;

    var blockMap = (0, _draftConvert.convertFromHTML)((0, _convert.getFromHTMLConfig)({ fontFamilies: fontFamilies }))(html || text).blockMap;
    var nextContentState = _draftJs.Modifier.replaceWithFragment(_this3.contentState, _this3.selectionState, blockMap);

    _this3.setState({
      tempColors: [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray(_braftUtils.ColorUtils.detectColorsFromHTML(html))).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      })
    }, function () {
      _this3.setValue(_draftJs.EditorState.push(_this3.state.editorState, nextContentState, 'insert-fragment'));
    });

    return true;
  };

  this.addTempColors = function (colors, callback) {

    _this3.setState({
      tempColors: [].concat(_toConsumableArray(_this3.state.tempColors), _toConsumableArray(colors)).filter(function (item) {
        return _this3.props.colors.indexOf(item) === -1;
      }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
      })
    }, callback);
  };
};

exports.default = BraftEditor;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _editor = __webpack_require__(42);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _editor2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map