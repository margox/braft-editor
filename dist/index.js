(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("braft-utils"), require("draft-js"), require("immutable"), require("braft-convert"), require("react-dom"), require("braft-finder"), require("draftjs-utils"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "braft-utils", "draft-js", "immutable", "braft-convert", "react-dom", "braft-finder", "draftjs-utils"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("braft-utils"), require("draft-js"), require("immutable"), require("braft-convert"), require("react-dom"), require("braft-finder"), require("draftjs-utils")) : factory(root["react"], root["braft-utils"], root["draft-js"], root["immutable"], root["braft-convert"], root["react-dom"], root["braft-finder"], root["draftjs-utils"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__23__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(2);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(15);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(26);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(27);

var iterableToArray = __webpack_require__(28);

var nonIterableSpread = __webpack_require__(29);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Immutable = __webpack_require__(13);

var KEY_SEPARATOR = '-';

function MultiDecorator(decorators) {
    this.decorators = Immutable.List(decorators);
}

/**
    Return list of decoration IDs per character

    @param {ContentBlock}
    @return {List<String>}
*/
MultiDecorator.prototype.getDecorations = function(block) {
    var decorations = Array(block.getText().length).fill(null);

    this.decorators.forEach(function(decorator, i) {
        var _decorations = decorator.getDecorations(block);

        _decorations.forEach(function(key, offset) {
            if (!key) {
                return;
            }

            key = i + KEY_SEPARATOR + key;

            decorations[offset] = key;
        });
    });

    return Immutable.List(decorations);
};

/**
    Return component to render a decoration

    @param {String}
    @return {Function}
*/
MultiDecorator.prototype.getComponentForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getComponentForKey(
        this.getInnerKey(key)
    );
};

/**
    Return props to render a decoration

    @param {String}
    @return {Object}
*/
MultiDecorator.prototype.getPropsForKey = function(key) {
    var decorator = this.getDecoratorForKey(key);
    return decorator.getPropsForKey(
        this.getInnerKey(key)
    );
};

/**
    Return a decorator for a specific key

    @param {String}
    @return {Decorator}
*/
MultiDecorator.prototype.getDecoratorForKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    var index = Number(parts[0]);

    return this.decorators.get(index);
};

/**
    Return inner key for a decorator

    @param {String}
    @return {String}
*/
MultiDecorator.prototype.getInnerKey = function(key) {
    var parts = key.split(KEY_SEPARATOR);
    return parts.slice(1).join(KEY_SEPARATOR);
};

module.exports = MultiDecorator;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CharacterMetadata
 * @format
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(13),
    Map = _require.Map,
    OrderedSet = _require.OrderedSet,
    Record = _require.Record;

// Immutable.map is typed such that the value for every key in the map
// must be the same type


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  style: EMPTY_SET,
  entity: null
};

var CharacterMetadataRecord = Record(defaultRecord);

var CharacterMetadata = function (_CharacterMetadataRec) {
  _inherits(CharacterMetadata, _CharacterMetadataRec);

  function CharacterMetadata() {
    _classCallCheck(this, CharacterMetadata);

    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
  }

  CharacterMetadata.prototype.getStyle = function getStyle() {
    return this.get('style');
  };

  CharacterMetadata.prototype.getEntity = function getEntity() {
    return this.get('entity');
  };

  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };

  CharacterMetadata.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set('style', record.getStyle().add(style));
    return CharacterMetadata.create(withStyle);
  };

  CharacterMetadata.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set('style', record.getStyle().remove(style));
    return CharacterMetadata.create(withoutStyle);
  };

  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
    return CharacterMetadata.create(withEntity);
  };

  /**
   * Use this function instead of the `CharacterMetadata` constructor.
   * Since most content generally uses only a very small number of
   * style/entity permutations, we can reuse these objects as often as
   * possible.
   */


  CharacterMetadata.create = function create(config) {
    if (!config) {
      return EMPTY;
    }

    var defaultConfig = {
      style: EMPTY_SET,
      entity: null
    };

    // Fill in unspecified properties, if necessary.
    var configMap = Map(defaultConfig).merge(config);

    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }

    var newCharacter = new CharacterMetadata(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };

  return CharacterMetadata;
}(CharacterMetadataRecord);

var EMPTY = new CharacterMetadata();
var pool = Map([[Map(defaultRecord), EMPTY]]);

CharacterMetadata.EMPTY = EMPTY;

module.exports = CharacterMetadata;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findRangesImmutable
 * @format
 * 
 */



/**
 * Search through an array to find contiguous stretches of elements that
 * match a specified filter function.
 *
 * When ranges are found, execute a specified `found` function to supply
 * the values to the caller.
 */
function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }

  var cursor = 0;

  haystack.reduce(function (value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });

  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}

module.exports = findRangesImmutable;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(25);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getFragmentFromSelection
 * @format
 * 
 */



var getContentStateFragment = __webpack_require__(30);

function getFragmentFromSelection(editorState) {
  var selectionState = editorState.getSelection();

  if (selectionState.isCollapsed()) {
    return null;
  }

  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
}

module.exports = getFragmentFromSelection;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(36);

var iterableToArrayLimit = __webpack_require__(37);

var nonIterableRest = __webpack_require__(38);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getContentStateFragment
 * @format
 * 
 */



var randomizeBlockMapKeys = __webpack_require__(31);
var removeEntitiesAtEdges = __webpack_require__(34);

var getContentStateFragment = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  // Edge entities should be stripped to ensure that we don't preserve
  // invalid partial entities when the fragment is reused. We do, however,
  // preserve entities that are entirely within the selection range.
  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;

  return randomizeBlockMapKeys(blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();

    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }

    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }

    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }

    return block;
  }));
};

module.exports = getContentStateFragment;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule randomizeBlockMapKeys
 * @format
 * 
 */



var ContentBlockNode = __webpack_require__(32);
var Immutable = __webpack_require__(13);

var generateRandomKey = __webpack_require__(33);

var OrderedMap = Immutable.OrderedMap;


var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys(blockMap) {
  var newKeysRef = {};

  // we keep track of root blocks in order to update subsequent sibling links
  var lastRootBlock = void 0;

  return OrderedMap(blockMap.withMutations(function (blockMapState) {
    blockMapState.forEach(function (block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey();

      // new key that we will use to build linking
      var key = generateRandomKey();

      // we will add it here to re-use it later
      newKeysRef[oldKey] = key;

      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);
        if (nextBlock) {
          blockMapState.setIn([nextKey, 'prevSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'nextSibling'], null);
        }
      }

      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);
        if (prevBlock) {
          blockMapState.setIn([prevKey, 'nextSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'prevSibling'], null);
        }
      }

      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, 'children'], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        // blocks will then be treated as root block nodes
        blockMapState.setIn([oldKey, 'parent'], null);

        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), 'nextSibling'], key);
          blockMapState.setIn([oldKey, 'prevSibling'], newKeysRef[lastRootBlock.getKey()]);
        }

        lastRootBlock = blockMapState.get(oldKey);
      }

      childrenKeys.forEach(function (childKey) {
        var childBlock = blockMapState.get(childKey);
        if (childBlock) {
          blockMapState.setIn([childKey, 'parent'], key);
        } else {
          blockMapState.setIn([oldKey, 'children'], block.getChildKeys().filter(function (child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function (block) {
    return [newKeysRef[block.getKey()], block.set('key', newKeysRef[block.getKey()])];
  }));
};

var randomizeContentBlockKeys = function randomizeContentBlockKeys(blockMap) {
  return OrderedMap(blockMap.toArray().map(function (block) {
    var key = generateRandomKey();
    return [key, block.set('key', key)];
  }));
};

var randomizeBlockMapKeys = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode;

  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }

  return randomizeContentBlockNodeKeys(blockMap);
};

module.exports = randomizeBlockMapKeys;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentBlockNode
 * @format
 * 
 *
 * This file is a fork of ContentBlock adding support for nesting references by
 * providing links to children, parent, prevSibling, and nextSibling.
 *
 * This is unstable and not part of the public API and should not be used by
 * production systems. This file may be update/removed without notice.
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterMetadata = __webpack_require__(19);
var Immutable = __webpack_require__(13);

var findRangesImmutable = __webpack_require__(20);

var List = Immutable.List,
    Map = Immutable.Map,
    OrderedSet = Immutable.OrderedSet,
    Record = Immutable.Record,
    Repeat = Immutable.Repeat;


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  parent: null,
  characterList: List(),
  data: Map(),
  depth: 0,
  key: '',
  text: '',
  type: 'unstyled',
  children: List(),
  prevSibling: null,
  nextSibling: null
};

var haveEqualStyle = function haveEqualStyle(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};

var haveEqualEntity = function haveEqualEntity(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};

var decorateCharacterList = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }

  var characterList = config.characterList,
      text = config.text;


  if (text && !characterList) {
    config.characterList = List(Repeat(CharacterMetadata.EMPTY, text.length));
  }

  return config;
};

var ContentBlockNode = function (_Record) {
  _inherits(ContentBlockNode, _Record);

  function ContentBlockNode() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRecord;

    _classCallCheck(this, ContentBlockNode);

    return _possibleConstructorReturn(this, _Record.call(this, decorateCharacterList(props)));
  }

  ContentBlockNode.prototype.getKey = function getKey() {
    return this.get('key');
  };

  ContentBlockNode.prototype.getType = function getType() {
    return this.get('type');
  };

  ContentBlockNode.prototype.getText = function getText() {
    return this.get('text');
  };

  ContentBlockNode.prototype.getCharacterList = function getCharacterList() {
    return this.get('characterList');
  };

  ContentBlockNode.prototype.getLength = function getLength() {
    return this.getText().length;
  };

  ContentBlockNode.prototype.getDepth = function getDepth() {
    return this.get('depth');
  };

  ContentBlockNode.prototype.getData = function getData() {
    return this.get('data');
  };

  ContentBlockNode.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET;
  };

  ContentBlockNode.prototype.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };

  ContentBlockNode.prototype.getChildKeys = function getChildKeys() {
    return this.get('children');
  };

  ContentBlockNode.prototype.getParentKey = function getParentKey() {
    return this.get('parent');
  };

  ContentBlockNode.prototype.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get('prevSibling');
  };

  ContentBlockNode.prototype.getNextSiblingKey = function getNextSiblingKey() {
    return this.get('nextSibling');
  };

  ContentBlockNode.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };

  ContentBlockNode.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };

  return ContentBlockNode;
}(Record(defaultRecord));

module.exports = ContentBlockNode;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule generateRandomKey
 * @format
 * 
 */



var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);

function generateRandomKey() {
  var key = void 0;
  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}

module.exports = generateRandomKey;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeEntitiesAtEdges
 * @format
 * 
 */



var CharacterMetadata = __webpack_require__(19);

var findRangesImmutable = __webpack_require__(20);
var invariant = __webpack_require__(35);

function removeEntitiesAtEdges(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();

  var updatedBlocks = {};

  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);

  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }

  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }

  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);

  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }

  if (!Object.keys(updatedBlocks).length) {
    return contentState.set('selectionAfter', selectionState);
  }

  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}

function getRemovalRange(characters, key, offset) {
  var removalRange;
  findRangesImmutable(characters, function (a, b) {
    return a.getEntity() === b.getEntity();
  }, function (element) {
    return element.getEntity() === key;
  }, function (start, end) {
    if (start <= offset && end >= offset) {
      removalRange = { start: start, end: end };
    }
  });
  !(typeof removalRange === 'object') ?  false ? undefined : invariant(false) : void 0;
  return removalRange;
}

function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);
    if (entity.getMutability() !== 'MUTABLE') {
      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset),
          start = _getRemovalRange.start,
          end = _getRemovalRange.end;

      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
        start++;
      }
      return block.set('characterList', chars);
    }
  }

  return block;
}

module.exports = removeEntitiesAtEdges;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(15);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(5);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(21);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(12);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ../node_modules/draft-js/dist/Draft.css
var Draft = __webpack_require__(40);

// EXTERNAL MODULE: ./assets/scss/_base.scss
var _base = __webpack_require__(42);

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
    textIndent: 'Text Indent',
    increaseIndent: 'Increase Indent',
    decreaseIndent: 'Decrease Indent',
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
    mediaLibirary: 'Media Library',
    emoji: 'Emoji',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen'
  },
  linkEditor: {
    textInputPlaceHolder: 'Input link text',
    linkInputPlaceHolder: 'Input link URL',
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
    textIndent: '段落缩进',
    increaseIndent: '增加缩进',
    decreaseIndent: '减少缩进',
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
    emoji: '小表情',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏'
  },
  linkEditor: {
    textInputPlaceHolder: '输入链接文字',
    linkInputPlaceHolder: '输入链接地址',
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
    textIndent: '段落縮進',
    increaseIndent: '增加縮進',
    decreaseIndent: '减少縮進',
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
    emoji: '小表情',
    fullscreen: '全熒幕',
    exitFullscreen: '退出全熒幕'
  },
  linkEditor: {
    textInputPlaceHolder: '輸入鏈接文字',
    linkInputPlaceHolder: '輸入鏈接地址',
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
// CONCATENATED MODULE: ./languages/pl.js
/* harmony default export */ var pl = ({
  base: {
    remove: 'Usuń',
    cancel: 'Anuluj',
    confirm: 'Potwierdź',
    inert: 'Wstaw',
    width: 'Szerokość',
    height: 'Wysokość'
  },
  controls: {
    clear: 'Wyczyść',
    undo: 'Cofnij',
    redo: 'Przywróć',
    fontSize: 'Wielkość',
    color: 'Kolor',
    textColor: 'Kolor tekstu',
    tempColors: 'Kolory',
    backgroundColor: 'Tło',
    bold: 'Pogrubienie',
    lineHeight: 'Wysokość linii',
    letterSpacing: 'Odstęp znaków',
    textIndent: 'Wcięcie tekstu',
    increaseIndent: 'Zwiększ wcięcie',
    decreaseIndent: 'Zmniejsz wcięcie',
    italic: 'Italiki',
    underline: 'Podkreślenie',
    strikeThrough: 'Przekreślenie',
    fontFamily: 'Czcionka',
    textAlign: 'Wyrównanie tekstu',
    alignLeft: 'Do lewej',
    alignCenter: 'Wycentruj',
    alignRight: 'Do prawej',
    alignJustify: 'Wyjustuj',
    floatLeft: 'Do lewej',
    floatRight: 'Do prawej',
    superScript: 'Superskrypt',
    subScript: 'Subskrypt',
    removeStyles: 'Usuń stylowanie',
    headings: 'Nagłówki',
    header: 'Nagłówek',
    normal: 'Normalny',
    orderedList: 'Lista uporządkowana',
    unorderedList: 'Lista nieuporządkowana',
    blockQuote: 'Cytat',
    code: 'Kod',
    link: 'Link',
    unlink: 'Usuń link',
    hr: 'Linia pozioma',
    media: 'Media',
    mediaLibirary: 'Biblioteka mediów',
    emoji: 'Emoji'
  },
  linkEditor: {
    textInputPlaceHolder: 'Wpisz tekst linku',
    linkInputPlaceHolder: 'Wpisz Adres URL',
    inputWithEnterPlaceHolder: 'Wpisz adres URL i naciśnij Enter',
    openInNewWindow: 'Otwórz w nowym oknie',
    removeLink: 'Usuń link'
  },
  audioPlayer: {
    title: 'Odtwórz audio'
  },
  videoPlayer: {
    title: 'Odtwórz wideo',
    embedTitle: 'Tytuł'
  },
  media: {
    image: 'Obraz',
    video: 'Wideo',
    audio: 'Audio',
    embed: 'Obiekt osadzony'
  }
});
// CONCATENATED MODULE: ./languages/kr.js
/* harmony default export */ var kr = ({
  base: {
    remove: '삭제',
    cancel: '취소',
    confirm: '결정',
    inert: '삽입',
    width: '너비',
    height: '높이'
  },
  controls: {
    clear: '콘텐츠지우기',
    undo: '취소',
    redo: '다시하기',
    fontSize: '글자크기',
    lineHeight: '행높이',
    letterSpacing: '단어간격',
    textIndent: '단락들여쓰기',
    increaseIndent: '들여쓰기늘리기',
    decreaseIndent: '들여쓰기줄이기',
    border: '국경',
    color: '색상',
    textColor: '텍스트색상',
    backgroundColor: '배경색상',
    tempColors: '임시색',
    bold: '굵게',
    italic: '기울임꼴',
    underline: '밑줄',
    strikeThrough: '취소선',
    fontFamily: '글꼴',
    textAlign: '텍스트정렬',
    alignLeft: '왼쪽',
    alignCenter: '중심',
    alignRight: '오른쪽',
    alignJustify: '양쪽끝',
    floatLeft: '떠다니기',
    floatRight: '오른쪽부동',
    superScript: '위첨자',
    subScript: '첨자',
    removeStyles: '스타일지우기',
    headings: '제목',
    header: '제목',
    normal: '재래식',
    orderedList: '순서가지정된목록',
    unorderedList: '정렬되지않은목록',
    blockQuote: '참고문헌',
    code: '코드',
    link: '링크',
    unlink: '링크삭제',
    hr: '수평선',
    media: '미디어',
    mediaLibirary: '미디어라이브러리',
    emoji: '작은표현',
    fullscreen: '전체화면',
    exitFullscreen: '전체화면종료'
  },
  linkEditor: {
    textInputPlaceHolder: '링크텍스트입력',
    linkInputPlaceHolder: '링크주소입력',
    inputWithEnterPlaceHolder: '링크주소입력.',
    openInNewWindow: '새창열기',
    removeLink: '링크삭제'
  },
  audioPlayer: {
    title: '오디오파일재생'
  },
  videoPlayer: {
    title: '비디오파일재생',
    embedTitle: '임베디드미디어'
  },
  media: {
    image: '이미지',
    video: '비디오',
    audio: '오디오',
    embed: '임베디드미디어'
  }
});
// CONCATENATED MODULE: ./languages/tr.js
/* harmony default export */ var tr = ({
  base: {
    remove: 'Kaldır',
    cancel: 'İptal',
    confirm: 'Onayla',
    inert: 'Ekle',
    width: 'Genişlik',
    height: 'Yükseklik'
  },
  controls: {
    clear: 'Temizle',
    undo: 'Geri al',
    redo: 'İleri al',
    fontSize: 'Yazı boyutu',
    color: 'Renk',
    textColor: 'Yazı rengi',
    tempColors: 'Geçici renkler',
    backgroundColor: 'Arkaplan',
    bold: 'Kalın',
    lineHeight: 'Satır yüksekliği',
    letterSpacing: 'Harf aralığı',
    textIndent: 'Çentik aralığı',
    increaseIndent: 'Çentiği genişlet',
    decreaseIndent: 'Çentiği daralt',
    italic: 'Eğik',
    underline: 'Altı çizili',
    strikeThrough: 'Üstü çizili',
    fontFamily: 'Yazı tipi',
    textAlign: 'Metin Hizalama',
    alignLeft: 'Sola hizala',
    alignCenter: 'Ortaya hizala',
    alignRight: 'Sağa hizala',
    alignJustify: 'Her iki tarafa hizala',
    floatLeft: 'Sola yatır',
    floatRight: 'Sağa yatır',
    superScript: 'Ana kod',
    subScript: 'Alt kod',
    removeStyles: 'Stilleri kaldır',
    headings: 'Başlıklar',
    header: 'Başlık',
    normal: 'Normal',
    orderedList: 'Sıralı liste',
    unorderedList: 'Sırasız liste',
    blockQuote: 'Alıntı',
    code: 'Kod',
    link: 'Bağlantı',
    unlink: 'Bağlantıyı kaldır',
    hr: 'Yatay çizgi',
    media: 'Medya',
    mediaLibirary: 'Kütüphane',
    emoji: 'İfade',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan çık'
  },
  linkEditor: {
    textInputPlaceHolder: 'Bağlantı metnini girin',
    linkInputPlaceHolder: 'Bağlantı URL\' si girin',
    inputWithEnterPlaceHolder: 'Bağlantı URL\'si girin ve Enter\' a basın',
    openInNewWindow: 'Yeni pencerede aç',
    removeLink: 'Bağlantıyı kaldır'
  },
  audioPlayer: {
    title: 'Ses çal'
  },
  videoPlayer: {
    title: 'Görüntü oynat',
    embedTitle: 'Görüntüyü göm'
  },
  media: {
    image: 'Resim',
    video: 'Görüntü',
    audio: 'Ses',
    embed: 'Gömülü nesne'
  }
});
// CONCATENATED MODULE: ./languages/jpn.js
/* harmony default export */ var jpn = ({
  base: {
    remove: '削除',
    cancel: 'キャンセル',
    confirm: '決定',
    inert: '挿入',
    width: '幅',
    height: '高さ'
  },
  controls: {
    clear: 'クリアコンテンツ',
    undo: 'キャンセル',
    redo: 'キャンセル',
    fontSize: 'フォントサイズ',
    lineHeight: 'フォントサイズ',
    letterSpacing: 'ワード間隔',
    textIndent: '段落のインデント',
    increaseIndent: 'インデントを増やす',
    decreaseIndent: 'インデントを減らす',
    border: '国境',
    color: '色',
    textColor: 'テキストの色',
    backgroundColor: '背景色',
    tempColors: '仮色',
    bold: '太字',
    italic: 'イタリック体',
    underline: '下線',
    strikeThrough: '取り消し線',
    fontFamily: 'フォント',
    textAlign: 'テキストの配置',
    alignLeft: '左',
    alignCenter: '中央揃え',
    alignRight: '右に立つ',
    alignJustify: '両端',
    floatLeft: '左フローティング',
    floatRight: '右フローティング',
    superScript: '上付き',
    subScript: '下付き文字',
    removeStyles: 'クリアスタイル',
    headings: '役職',
    header: '役職',
    normal: '従来の',
    orderedList: '順序付きリスト',
    unorderedList: '番号なしリスト',
    blockQuote: '参照',
    code: 'コード',
    link: 'リンク',
    unlink: 'リンクを解除',
    hr: '横線',
    media: 'メディア',
    mediaLibirary: 'メディアライブラリー',
    emoji: '小さな表現',
    fullscreen: '全画面',
    exitFullscreen: '全画面を退く'
  },
  linkEditor: {
    textInputPlaceHolder: 'リンクテキストを入力',
    linkInputPlaceHolder: 'リンクアドレスを入力',
    inputWithEnterPlaceHolder: 'リンクアドレスを入力して戻ります',
    openInNewWindow: '新しいウィンドウで開く',
    removeLink: '新しいウィンドウで開く'
  },
  audioPlayer: {
    title: 'オーディオファイルを再生する'
  },
  videoPlayer: {
    title: 'ビデオファイルを再生する',
    embedTitle: '埋め込みメディア'
  },
  media: {
    image: '画像',
    video: 'ビデオ',
    audio: '音声',
    embed: '埋め込みメディア'
  }
});
// CONCATENATED MODULE: ./languages/ru.js
/* harmony default export */ var ru = ({
  base: {
    remove: 'Удалить',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    insert: 'Вставить',
    width: 'Ширина',
    height: 'Высота'
  },
  controls: {
    clear: 'Очистить',
    undo: 'Отменить',
    redo: 'Повторить',
    fontSize: 'Размер шрифта',
    color: 'Цвет',
    textColor: 'Цвет текста',
    tempColors: 'Temp Colors',
    backgroundColor: 'Цвет фона',
    bold: 'Жирный',
    lineHeight: 'Межстрочный интервал',
    letterSpacing: 'Межбуквенный интервал',
    textIndent: 'Отступ',
    increaseIndent: 'Увеличить отступ',
    decreaseIndent: 'Уменьшить отступ',
    italic: 'Курсив',
    underline: 'Подчеркнутый',
    strikeThrough: 'Перечеркнутый',
    fontFamily: 'Шрифт',
    textAlign: 'Расположение текста',
    alignLeft: 'По левому краю',
    alignCenter: 'По центру',
    alignRight: 'По правому краю',
    alignJustify: 'По ширине',
    floatLeft: 'Обтекание слева',
    floatRight: 'Обтекание справа',
    superScript: 'Надстрочный индекс',
    subScript: 'Подстрочный индекс',
    removeStyles: 'Убрать стили',
    headings: 'Заголовки',
    header: 'Заголовок',
    normal: 'Обычный',
    orderedList: 'Упорядоченный список',
    unorderedList: 'Неупорядоченный список',
    blockQuote: 'Цитата',
    code: 'Код',
    link: 'Вставить ссылку',
    unlink: 'Убрать ссылку',
    hr: 'Горизонтальная линия',
    media: 'Медиа',
    mediaLibirary: 'Медиа библиотека',
    emoji: 'Emoji',
    fullscreen: 'Полноэкранный режим',
    exitFullscreen: 'Выйти из полноэкранного режима'
  },
  linkEditor: {
    textInputPlaceHolder: 'Введите текст ссылки',
    linkInputPlaceHolder: 'Вставить ссылку',
    inputWithEnterPlaceHolder: 'Вставить ссылку и нажать Enter',
    openInNewWindow: 'Открыть в новом окне',
    removeLink: 'Убрать ссылку'
  },
  audioPlayer: {
    title: 'Воспроизвести аудиофайл'
  },
  videoPlayer: {
    title: 'Воспроизвести видеофайл',
    embedTitle: 'Embed Media'
  },
  media: {
    image: 'Картинка',
    video: 'Видео',
    audio: 'Аудио',
    embed: 'Встроенное'
  }
});
// CONCATENATED MODULE: ./languages/index.js








/* harmony default export */ var languages = ({
  'en': en,
  'zh': zh,
  'zh-hant': zh_hant,
  'pl': pl,
  'kr': kr,
  'tr': tr,
  'jpn': jpn,
  'ru': ru
});
// EXTERNAL MODULE: external "braft-finder"
var external_braft_finder_ = __webpack_require__(17);
var external_braft_finder_default = /*#__PURE__*/__webpack_require__.n(external_braft_finder_);

// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(3);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(13);
var external_immutable_default = /*#__PURE__*/__webpack_require__.n(external_immutable_);

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
  controls: ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'media', 'link', 'table', 'split', 'hr', 'separator', 'clear', 'separator', 'fullscreen'],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    imagePasteLimit: 5,
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
    accepts: {
      image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
      video: 'video/mp4',
      audio: 'audio/mp3'
    },
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    }
  },
  imageControls: ['float-left', 'float-right', 'align-left', 'align-center', 'align-right', 'link', 'size', 'remove'],
  imageResizable: true,
  colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784', '#c0392b', '#d35400', '#f39c12', '#fdda00'],
  colorPicker: null,
  colorPickerTheme: 'dark',
  colorPickerAutoHide: true,
  codeTabIndents: 2,
  headings: ['header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six', 'unstyled'],
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  allowInsertLinkText: false,
  defaultLinkTarget: '',
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
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
    family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
  }],
  converts: {
    unitExportFn: function unitExportFn(value, type) {
      return type === 'line-height' ? value : "".concat(value, "px");
    }
  },
  emojis: ['🤣', '🙌', '💚', '💛', '👏', '😉', '💯', '💕', '💞', '💘', '💙', '💝', '🖤', '💜', '❤️', '😍', '😻', '💓', '💗', '😋', '😇', '😂', '😹', '😘', '💖', '😁', '😀', '🤞', '😲', '😄', '😊', '👍', '😌', '😃', '😅', '✌️', '🤗', '💋', '😗', '😽', '😚', '🤠', '😙', '😺', '👄', '😸', '😏', '😼', '👌', '😎', '😆', '😛', '🙏', '🤝', '🙂', '🤑', '😝', '😐', '😑', '🤤', '😤', '🙃', '🤡', '😶', '😪', '😴', '😵', '😓', '👊', '😦', '😷', '🤐', '😜', '🤓', '👻', '😥', '🙄', '🤔', '🤒', '🙁', '😔', '😯', '☹️', '☠️', '😰', '😩', '😖', '😕', '😒', '😣', '😢', '😮', '😿', '🤧', '😫', '🤥', '😞', '😬', '👎', '💀', '😳', '😨', '🤕', '🤢', '😱', '😭', '😠', '😈', '😧', '💔', '😟', '🙀', '💩', '👿', '😡', '😾', '🖕'],
  stripPastedStyles: false,
  triggerChangeOnMount: true,
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
  onSave: null,
  fixPlaceholder: false
});
// EXTERNAL MODULE: ../node_modules/draft-js/lib/getFragmentFromSelection.js
var getFragmentFromSelection = __webpack_require__(22);
var getFragmentFromSelection_default = /*#__PURE__*/__webpack_require__.n(getFragmentFromSelection);

// EXTERNAL MODULE: external "draftjs-utils"
var external_draftjs_utils_ = __webpack_require__(23);

// CONCATENATED MODULE: ./configs/handlers.js






var handlers_keyCommandHandlers = function keyCommandHandlers(command, editorState, editor) {
  if (editor.editorProps.handleKeyCommand && editor.editorProps.handleKeyCommand(command, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (command === 'braft-save') {
    editor.editorProps.onSave && editor.editorProps.onSave(editorState);
    return 'handled';
  }

  var _editor$editorProps = editor.editorProps,
      controls = _editor$editorProps.controls,
      excludeControls = _editor$editorProps.excludeControls;
  var allowIndent = (controls.indexOf('text-indent') !== 0 || controls.find(function (item) {
    return item.key === 'text-indent';
  })) && excludeControls.indexOf('text-indent') === -1;
  var cursorStart = editorState.getSelection().getStartOffset();
  var cursorEnd = editorState.getSelection().getEndOffset();
  var cursorIsAtFirst = cursorStart === 0 && cursorEnd === 0;

  if (command === 'backspace') {
    if (editor.editorProps.onDelete && editor.editorProps.onDelete(editorState) === false) {
      return 'handled';
    }

    var blockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);

    if (allowIndent && cursorIsAtFirst && blockType !== 'code-block') {
      editor.setValue(external_braft_utils_["ContentUtils"].decreaseSelectionIndent(editorState));
    }
  }

  if (command === 'tab') {
    var _blockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);

    if (_blockType === 'code-block') {
      editor.setValue(external_braft_utils_["ContentUtils"].insertText(editorState, ' '.repeat(editor.editorProps.codeTabIndents)));
      return 'handled';
    } else if (_blockType === 'ordered-list-item' || _blockType === 'unordered-list-item') {
      var newEditorState = external_draft_js_["RichUtils"].onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        editor.setValue(newEditorState);
      }

      return 'handled';
    } else if (_blockType !== 'atomic' && allowIndent && cursorIsAtFirst) {
      editor.setValue(external_braft_utils_["ContentUtils"].increaseSelectionIndent(editorState));
      return 'handled';
    }
  }

  var nextEditorState = external_braft_utils_["ContentUtils"].handleKeyCommand(editorState, command);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var handlers_returnHandlers = function returnHandlers(event, editorState, editor) {
  if (editor.editorProps.handleReturn && editor.editorProps.handleReturn(event, editorState, editor) === 'handled') {
    return 'handled';
  }

  var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(editorState);
  var currentBlockType = currentBlock.getType();

  if (currentBlockType === 'unordered-list-item' || currentBlockType === 'ordered-list-item') {
    if (currentBlock.getLength() === 0) {
      editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'code-block') {
    if (event.which === 13 && (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control'))) {
      editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, 'unstyled'));
      return 'handled';
    }

    return 'not-handled';
  } else if (currentBlockType === 'blockquote') {
    if (event.which === 13) {
      if (event.getModifierState('Shift') || event.getModifierState('Alt') || event.getModifierState('Control')) {
        event.which = 0;
      } else {
        editor.setValue(external_draft_js_["RichUtils"].insertSoftNewline(editorState));
        return 'handled';
      }
    }
  }

  var nextEditorState = Object(external_draftjs_utils_["handleNewLine"])(editorState, event);

  if (nextEditorState) {
    editor.setValue(nextEditorState);
    return 'handled';
  }

  return 'not-handled';
};
var beforeInputHandlers = function beforeInputHandlers(chars, editorState, editor) {
  if (editor.editorProps.handleBeforeInput && editor.editorProps.handleBeforeInput(chars, editorState, editor) === 'handled') {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_compositionStartHandler = function compositionStartHandler(_, editor) {
  var editorState = editor.state.editorState;
  var selectedBlocks = external_braft_utils_["ContentUtils"].getSelectedBlocks(editorState);

  if (selectedBlocks && selectedBlocks.length > 1) {
    var nextEditorState = external_draft_js_["EditorState"].push(editorState, external_draft_js_["Modifier"].removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'backward'), 'remove-range');
    editor.setValue(nextEditorState);
  }
};
var handlers_dropHandlers = function dropHandlers(selectionState, dataTransfer, editor) {
  if (editor.editorProps.readOnly || editor.editorProps.disabled) {
    return 'handled';
  }

  if (window && window.__BRAFT_DRAGING__IMAGE__) {
    var nextEditorState = external_draft_js_["EditorState"].forceSelection(editor.state.editorState, selectionState);
    nextEditorState = external_braft_utils_["ContentUtils"].insertMedias(nextEditorState, [window.__BRAFT_DRAGING__IMAGE__.mediaData]);
    nextEditorState = external_braft_utils_["ContentUtils"].removeBlock(nextEditorState, window.__BRAFT_DRAGING__IMAGE__.block, nextEditorState.getSelection());
    window.__BRAFT_DRAGING__IMAGE__ = null;
    editor.lockOrUnlockEditor(true);
    editor.setValue(nextEditorState);
    return 'handled';
  } else if (!dataTransfer || !dataTransfer.getText()) {
    return 'handled';
  }

  return 'not-handled';
};
var handlers_handleFiles = function handleFiles(files, editor) {
  var _editor$constructor$d = objectSpread_default()({}, editor.constructor.defaultProps.media, editor.editorProps.media),
      pasteImage = _editor$constructor$d.pasteImage,
      validateFn = _editor$constructor$d.validateFn,
      imagePasteLimit = _editor$constructor$d.imagePasteLimit;

  pasteImage && files.slice(0, imagePasteLimit).forEach(function (file) {
    if (file && file.type.indexOf('image') > -1 && editor.braftFinder) {
      var validateResult = validateFn ? validateFn(file) : true;

      if (validateResult instanceof Promise) {
        validateResult.then(function () {
          editor.braftFinder.uploadImage(file, function (image) {
            editor.isLiving && editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(editor.state.editorState, [image]));
          });
        });
      } else if (validateResult) {
        editor.braftFinder.uploadImage(file, function (image) {
          editor.isLiving && editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(editor.state.editorState, [image]));
        });
      }
    }
  });

  if (files[0] && files[0].type.indexOf('image') > -1 && pasteImage) {
    return 'handled';
  }

  return 'not-handled';
};
var droppedFilesHandlers = function droppedFilesHandlers(selectionState, files, editor) {
  if (editor.editorProps.handleDroppedFiles && editor.editorProps.handleDroppedFiles(selectionState, files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var pastedFilesHandlers = function pastedFilesHandlers(files, editor) {
  if (editor.editorProps.handlePastedFiles && editor.editorProps.handlePastedFiles(files, editor) === 'handled') {
    return 'handled';
  }

  return handlers_handleFiles(files, editor);
};
var handlers_copyHandlers = function copyHandlers(event, editor) {
  var blockMap = getFragmentFromSelection_default()(editor.state.editorState);

  if (blockMap && blockMap.toArray) {
    try {
      var tempContentState = external_draft_js_["ContentState"].createFromBlockArray(blockMap.toArray());
      var tempEditorState = external_draft_js_["EditorState"].createWithContent(tempContentState);
      var clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
      tempEditorState.setConvertOptions(editor.state.editorState.convertOptions);
      clipboardData.setData('text/html', tempEditorState.toHTML());
      clipboardData.setData('text/plain', tempEditorState.toText());
      event.preventDefault();
    } catch (error) {
      console.warn(error);
    }
  }
};
var handlers_pastedTextHandlers = function pastedTextHandlers(text, html, editorState, editor) {
  if (editor.editorProps.handlePastedText && editor.editorProps.handlePastedText(text, html, editorState, editor) === 'handled') {
    return 'handled';
  }

  if (!html || editor.editorProps.stripPastedStyles) {
    return false;
  }

  var tempColors = external_braft_utils_["ColorUtils"].detectColorsFromHTMLString(html);
  editor.setState({
    tempColors: toConsumableArray_default()(editor.state.tempColors).concat(toConsumableArray_default()(tempColors)).filter(function (item) {
      return editor.editorProps.colors.indexOf(item) === -1;
    }).filter(function (item, index, array) {
      return array.indexOf(item) === index;
    })
  }, function () {
    editor.setValue(external_braft_utils_["ContentUtils"].insertHTML(editorState, html, 'paste'));
  });
  return 'handled';
};
// CONCATENATED MODULE: ./helpers/extension.js

// TODO
// - block-style和atomic类型的扩展支持

var extension_extensionControls = [];
var extension_extensionDecorators = [];
var extension_propInterceptors = [];
var extension_extensionBlockRenderMaps = [];
var extension_extensionBlockRendererFns = [];
var extensionInlineStyleMaps = [];
var extension_extensionInlineStyleFns = [];
var extensionEntities = [];
var inlineStyleImporters = [];
var inlineStyleExporters = [];
var blockImporters = [];
var blockExporters = [];

var filterByEditorId = function filterByEditorId(items, editorId) {
  if (!editorId) {
    return items.filter(function (item) {
      return !item.includeEditors;
    }).map(function (item) {
      return item.data;
    });
  }

  return items.map(function (item) {
    if (!item.includeEditors && !item.excludeEditors) {
      return item.data;
    }

    if (item.includeEditors) {
      return item.includeEditors.indexOf(editorId) !== -1 ? item.data : false;
    }

    if (item.excludeEditors) {
      return item.excludeEditors.indexOf(editorId) !== -1 ? false : item.data;
    }

    return false;
  }).filter(function (item) {
    return item;
  });
};

var getPropInterceptors = function getPropInterceptors(editorId) {
  return filterByEditorId(extension_propInterceptors, editorId);
};
var getExtensionControls = function getExtensionControls(editorId) {
  return filterByEditorId(extension_extensionControls, editorId);
};
var getExtensionDecorators = function getExtensionDecorators(editorId) {
  return filterByEditorId(extension_extensionDecorators, editorId, 'decorators');
};
var getExtensionBlockRenderMaps = function getExtensionBlockRenderMaps(editorId) {
  return filterByEditorId(extension_extensionBlockRenderMaps, editorId);
};
var getExtensionBlockRendererFns = function getExtensionBlockRendererFns(editorId) {
  return filterByEditorId(extension_extensionBlockRendererFns, editorId);
};
var getExtensionInlineStyleMap = function getExtensionInlineStyleMap(editorId) {
  var inlineStyleMap = {};
  filterByEditorId(extensionInlineStyleMaps, editorId).forEach(function (item) {
    inlineStyleMap[item.inlineStyleName] = item.styleMap;
  });
  return inlineStyleMap;
};
var getExtensionInlineStyleFns = function getExtensionInlineStyleFns(editorId) {
  return filterByEditorId(extension_extensionInlineStyleFns, editorId);
};
var compositeStyleImportFn = function compositeStyleImportFn(styleImportFn, editorId) {
  return function (nodeName, node, style) {
    filterByEditorId(inlineStyleImporters, editorId).forEach(function (styleImporter) {
      if (styleImporter.importer && styleImporter.importer(nodeName, node)) {
        style = style.add(styleImporter.inlineStyleName);
      }
    });
    return styleImportFn ? styleImportFn(nodeName, node, style) : style;
  };
};
var compositeStyleExportFn = function compositeStyleExportFn(styleExportFn, editorId) {
  return function (style) {
    style = style.toUpperCase();
    var result = styleExportFn ? styleExportFn(style) : undefined;

    if (result) {
      return result;
    }

    filterByEditorId(inlineStyleExporters, editorId).find(function (item) {
      if (item.inlineStyleName === style) {
        result = item.exporter;
        return true;
      }
    });
    return result;
  };
};
var compositeEntityImportFn = function compositeEntityImportFn(entityImportFn, editorId) {
  return function (nodeName, node, createEntity, source) {
    var result = entityImportFn ? entityImportFn(nodeName, node, createEntity, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      var matched = entityItem.importer ? entityItem.importer(nodeName, node, source) : null;
      matched && (result = createEntity(entityItem.entityType, matched.mutability || 'MUTABLE', matched.data || {}));
      return !!matched;
    });
    return result;
  };
};
var compositeEntityExportFn = function compositeEntityExportFn(entityExportFn, editorId) {
  return function (entity, originalText) {
    var result = entityExportFn ? entityExportFn(entity, originalText) : undefined;

    if (result) {
      return result;
    }

    var entityType = entity.type.toUpperCase();
    filterByEditorId(extensionEntities, editorId).find(function (entityItem) {
      if (entityItem.entityType === entityType) {
        result = entityItem.exporter ? entityItem.exporter(entity, originalText) : undefined;
        return true;
      }
    });
    return result;
  };
};
var compositeBlockImportFn = function compositeBlockImportFn(blockImportFn, editorId) {
  return function (nodeName, node, source) {
    var result = blockImportFn ? blockImportFn(nodeName, node, source) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockImporters, editorId).find(function (blockImporter) {
      var matched = blockImporter.importer ? blockImporter.importer(nodeName, node, source) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};
var compositeBlockExportFn = function compositeBlockExportFn(blockExportFn, editorId) {
  return function (contentState, block) {
    var result = blockExportFn ? blockExportFn(contentState, block) : null;

    if (result) {
      return result;
    }

    filterByEditorId(blockExporters, editorId).find(function (blockExporter) {
      var matched = blockExporter.exporter ? blockExporter.exporter(contentState, block) : undefined;
      matched && (result = matched);
      return !!matched;
    });
    return result;
  };
};

var extension_useExtension = function useExtension(extension) {
  if (extension instanceof Array) {
    extension.forEach(useExtension);
    return false;
  }

  if (!extension || !extension.type || typeof extension.type !== 'string') {
    return false;
  }

  var includeEditors = extension.includeEditors,
      excludeEditors = extension.excludeEditors;

  if (extension.type === 'control') {
    extension_extensionControls.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.control
    });
  } else if (extension.type === 'inline-style') {
    var inlineStyleName = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: objectSpread_default()({
          key: inlineStyleName,
          type: 'inline-style',
          command: inlineStyleName
        }, extension.control)
      });
    }

    if (extension.style) {
      extensionInlineStyleMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleMap: extension.style
        }
      });
    }

    if (extension.styleFn) {
      extension_extensionInlineStyleFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          styleFn: extension.styleFn
        }
      });
    }

    if (extension.importer) {
      inlineStyleImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          inlineStyleName: inlineStyleName,
          importer: extension.importer
        }
      });
    }

    inlineStyleExporters.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        inlineStyleName: inlineStyleName,
        exporter: extension.exporter ? extension.exporter(extension) : external_react_default.a.createElement("span", {
          style: extension.style
        })
      }
    });
  } else if (extension.type === 'block-style') {// TODO
  } else if (extension.type === 'entity') {
    var entityType = extension.name.toUpperCase();

    if (extension.control) {
      extension_extensionControls.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: typeof extension.control === 'function' ? extension.control : objectSpread_default()({
          key: entityType,
          type: 'entity',
          command: entityType,
          data: {
            mutability: extension.mutability || 'MUTABLE',
            data: extension.data || {}
          }
        }, extension.control)
      });
    }

    extensionEntities.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        entityType: entityType,
        importer: extension.importer,
        exporter: extension.exporter
      }
    });
    extension_extensionDecorators.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: {
        type: 'entity',
        decorator: {
          key: entityType,
          component: extension.component
        }
      }
    });
  } else if (extension.type === 'block') {
    var blockType = extension.name;

    if (extension.renderMap) {
      extension_extensionBlockRenderMaps.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          renderMap: extension.renderMap
        }
      });
    }

    if (extension.rendererFn) {
      extension_extensionBlockRendererFns.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          rendererFn: extension.rendererFn
        }
      });
    }

    if (extension.importer) {
      blockImporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          importer: extension.importer
        }
      });
    }

    if (extension.exporter) {
      blockExporters.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          blockType: blockType,
          exporter: extension.exporter
        }
      });
    }
  } else if (extension.type === 'atomic') {// TODO
  } else if (extension.type === 'decorator') {
    var decorator = extension.decorator;

    if (decorator && decorator.strategy && decorator.component) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'strategy',
          decorator: decorator
        }
      });
    } else if (decorator && decorator.getDecorations) {
      extension_extensionDecorators.push({
        includeEditors: includeEditors,
        excludeEditors: excludeEditors,
        data: {
          type: 'class',
          decorator: decorator
        }
      });
    }
  } else if (extension.type === 'prop-interception') {
    extension_propInterceptors.push({
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      data: extension.interceptor
    });
  }
};

var createExtensibleEditor = function createExtensibleEditor(BraftEditor) {
  BraftEditor.use = extension_useExtension;
  return BraftEditor;
};
// CONCATENATED MODULE: ./renderers/block/blockRenderMap.js




/* harmony default export */ var block_blockRenderMap = (function (props, blockRenderMap) {
  var customBlockRenderMap = Object(external_immutable_["Map"])({
    'atomic': {
      element: ''
    },
    'code-block': {
      element: 'code',
      wrapper: external_react_default.a.createElement("pre", {
        className: "braft-code-block"
      })
    }
  });

  try {
    var extensionBlockRenderMaps = getExtensionBlockRenderMaps(props.editorId);
    customBlockRenderMap = extensionBlockRenderMaps.reduce(function (customBlockRenderMap, item) {
      return customBlockRenderMap.merge(typeof item.renderMap === 'function' ? item.renderMap(props) : item.renderMap);
    }, customBlockRenderMap);

    if (blockRenderMap) {
      if (typeof blockRenderMap === 'function') {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap(props));
      } else {
        customBlockRenderMap = customBlockRenderMap.merge(blockRenderMap);
      }
    }

    customBlockRenderMap = external_draft_js_["DefaultDraftBlockRenderMap"].merge(customBlockRenderMap);
  } catch (error) {
    console.warn(error);
  }

  return customBlockRenderMap;
});
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(11);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(24);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./renderers/atomics/Image/style.scss
var Image_style = __webpack_require__(45);

// EXTERNAL MODULE: ./components/common/Switch/style.scss
var Switch_style = __webpack_require__(46);

// CONCATENATED MODULE: ./components/common/Switch/index.jsx


/* harmony default export */ var Switch = (function (props) {
  var active = props.active,
      _onClick = props.onClick,
      className = props.className;
  return external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: 'bf-switch ' + className + (active ? ' active' : '')
  });
});
// CONCATENATED MODULE: ./configs/controls.js

/* harmony default export */ var configs_controls = (function (lang, editor) {
  return [{
    key: 'undo',
    title: lang.controls.undo,
    text: external_react_default.a.createElement("i", {
      className: "bfi-undo"
    }),
    type: 'editor-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: lang.controls.redo,
    text: external_react_default.a.createElement("i", {
      className: "bfi-redo"
    }),
    type: 'editor-method',
    command: 'redo'
  }, {
    key: 'remove-styles',
    title: lang.controls.removeStyles,
    text: external_react_default.a.createElement("i", {
      className: "bfi-format_clear"
    }),
    type: 'editor-method',
    command: 'removeSelectionInlineStyles'
  }, {
    key: 'hr',
    title: lang.controls.hr,
    text: external_react_default.a.createElement("i", {
      className: "bfi-hr"
    }),
    type: 'editor-method',
    command: 'insertHorizontalLine'
  }, {
    key: 'bold',
    title: lang.controls.bold,
    text: external_react_default.a.createElement("i", {
      className: "bfi-bold"
    }),
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: lang.controls.italic,
    text: external_react_default.a.createElement("i", {
      className: "bfi-italic"
    }),
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: lang.controls.underline,
    text: external_react_default.a.createElement("i", {
      className: "bfi-underlined"
    }),
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: lang.controls.strikeThrough,
    text: external_react_default.a.createElement("i", {
      className: "bfi-strikethrough"
    }),
    type: 'inline-style',
    command: 'strikethrough'
  }, {
    key: 'superscript',
    title: lang.controls.superScript,
    text: external_react_default.a.createElement("i", {
      className: "bfi-superscript"
    }),
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: lang.controls.subScript,
    text: external_react_default.a.createElement("i", {
      className: "bfi-subscript"
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
      className: "bfi-quote"
    }),
    type: 'block-type',
    command: 'blockquote'
  }, {
    key: 'code',
    title: lang.controls.code,
    text: external_react_default.a.createElement("i", {
      className: "bfi-code"
    }),
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list-ul',
    title: lang.controls.unorderedList,
    text: external_react_default.a.createElement("i", {
      className: "bfi-list"
    }),
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list-ol',
    title: lang.controls.orderedList,
    text: external_react_default.a.createElement("i", {
      className: "bfi-list-numbered"
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
      className: "bfi-media"
    }),
    type: 'media'
  }, {
    key: 'emoji',
    title: lang.controls.emoji,
    text: external_react_default.a.createElement("i", {
      className: "bfi-emoji"
    }),
    type: 'emoji'
  }, {
    key: 'clear',
    title: lang.controls.clear,
    text: external_react_default.a.createElement("i", {
      className: "bfi-clear_all"
    }),
    type: 'editor-method',
    command: 'clearEditorContent'
  }, {
    key: 'fullscreen',
    title: editor.state.isFullscreen ? lang.controls.exitFullscreen : lang.controls.fullscreen,
    text: external_react_default.a.createElement("i", {
      className: editor.state.isFullscreen ? 'bfi-fullscreen-exit' : 'bfi-fullscreen'
    }),
    type: 'editor-method',
    command: 'toggleFullscreen'
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
















var Image_Image =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Image, _React$Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      toolbarVisible: false,
      toolbarOffset: 0,
      linkEditorVisible: false,
      sizeEditorVisible: false,
      tempLink: null,
      tempWidth: null,
      tempHeight: null
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialLeft", void 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialTop", void 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialWidth", void 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialHeight", void 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "reSizeType", void 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "changeSize", function (e) {
      var type = _this.reSizeType;

      if (!_this.initialLeft) {
        _this.initialLeft = e.screenX;
        _this.initialTop = e.screenY;
      }

      if (type === 'rightbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += e.screenX - _this.initialLeft;
      }

      if (type === 'leftbottom') {
        _this.initialHeight += e.screenY - _this.initialTop;
        _this.initialWidth += -e.screenX + _this.initialLeft;
      }

      _this.initialLeft = e.screenX;
      _this.initialTop = e.screenY;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "moveImage", function (e) {
      _this.changeSize(e);

      _this.setState({
        tempWidth: Math.abs(_this.initialWidth),
        tempHeight: Math.abs(_this.initialHeight)
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "upImage", function () {
      _this.confirmImageSize();

      document.removeEventListener('mousemove', _this.moveImage);
      document.removeEventListener('mouseup', _this.upImage);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "repareChangeSize", function (type) {
      return function (e) {
        _this.reSizeType = type;

        var imageRect = _this.imageElement.getBoundingClientRect();

        _this.initialLeft = _this.initialTop = 0;
        _this.initialWidth = imageRect.width;
        _this.initialHeight = imageRect.height;
        e.preventDefault();
        document.addEventListener('mousemove', _this.moveImage);
        document.addEventListener('mouseup', _this.upImage);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "preventDragEvent", function (event) {
      event.stopPropagation();
      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleDragStart", function () {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      window.__BRAFT_DRAGING__IMAGE__ = {
        block: _this.props.block,
        mediaData: objectSpread_default()({
          type: 'IMAGE'
        }, _this.props.mediaData)
      };

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor();
      });

      return true;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleDragEnd", function () {
      window.__BRAFT_DRAGING__IMAGE__ = null;
      return false;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "executeCommand", function (command) {
      if (typeof command === 'string') {
        var _command$split = command.split('|'),
            _command$split2 = slicedToArray_default()(_command$split, 2),
            method = _command$split2[0],
            param = _command$split2[1];

        _this[method] && _this[method](param);
      } else if (typeof command === 'function') {
        command(_this.props.block, _this.props.mediaData, _this.props.editor.getValue());
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeImage", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editor.getValue(), _this.props.block));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleLinkEditor", function () {
      _this.setState({
        linkEditorVisible: !_this.state.linkEditorVisible,
        sizeEditorVisible: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleSizeEditor", function () {
      _this.setState({
        linkEditorVisible: false,
        sizeEditorVisible: !_this.state.sizeEditorVisible
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleLinkInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageLink();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setImageLink", function (e) {
      _this.setState({
        tempLink: e.currentTarget.value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "confirmImageLink", function () {
      var link = _this.state.tempLink;

      var hookReturns = _this.props.hooks('set-image-link', link)(link);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link = hookReturns;
      }

      if (link !== null) {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editor.getValue(), _this.props.entityKey, {
          link: link
        }));

        window.setImmediate(_this.props.editor.forceRender);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleSizeInputKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.confirmImageSize();
      } else {
        return;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setImageWidth", function (_ref) {
      var currentTarget = _ref.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempWidth: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setImageHeight", function (_ref2) {
      var currentTarget = _ref2.currentTarget;
      var value = currentTarget.value;
      value && !isNaN(value) && (value = value + 'px');

      _this.setState({
        tempHeight: value
      });

      return;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "confirmImageSize", function () {
      var _this$state = _this.state,
          width = _this$state.tempWidth,
          height = _this$state.tempHeight;
      var newImageSize = {};
      width !== null && (newImageSize.width = width);
      height !== null && (newImageSize.height = height);

      var hookReturns = _this.props.hooks('set-image-size', newImageSize)(newImageSize);

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns && (hookReturns.width || hookReturns.height)) {
        newImageSize = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(_this.props.editor.getValue(), _this.props.entityKey, newImageSize));

      window.setImmediate(_this.props.editor.forceRender);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setImageFloat", function (float) {
      var hookReturns = _this.props.hooks('set-image-float', float)(float);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        float = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        float: float
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setImageAlignment", function (alignment) {
      var hookReturns = _this.props.hooks('set-image-alignment', alignment)(alignment);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaPosition(_this.props.editor.getValue(), _this.props.block, {
        alignment: alignment
      }));

      _this.unlockEditor();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "showToolbar", function (event) {
      if (_this.props.editor.editorProps.readOnly || _this.props.editor.editorProps.disabled) {
        return false;
      }

      event.preventDefault();

      if (!_this.state.toolbarVisible) {
        _this.setState({
          toolbarVisible: true
        }, function () {
          _this.lockEditor();

          _this.setState({
            toolbarOffset: _this.calcToolbarOffset()
          });
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "hideToolbar", function (event) {
      event.preventDefault();

      _this.setState({
        toolbarVisible: false
      }, function () {
        _this.unlockEditor();

        _this.props.editor.requestFocus();
      });
    });

    return _this;
  }

  createClass_default()(Image, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language,
          imageControls = _this$props.imageControls,
          imageResizable = _this$props.imageResizable;
      var _this$state2 = this.state,
          toolbarVisible = _this$state2.toolbarVisible,
          toolbarOffset = _this$state2.toolbarOffset,
          linkEditorVisible = _this$state2.linkEditorVisible,
          sizeEditorVisible = _this$state2.sizeEditorVisible,
          tempWidth = _this$state2.tempWidth,
          tempHeight = _this$state2.tempHeight;
      var blockData = this.props.block.getData();
      var float = blockData.get('float');
      var alignment = blockData.get('alignment');
      var url = mediaData.url,
          link = mediaData.link,
          link_target = mediaData.link_target,
          width = mediaData.width,
          height = mediaData.height,
          meta = mediaData.meta;
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
        imageStyles.textAlign = 'center';
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
        } else if (item && (item.render || item.text)) {
          return item.render ? item.render(mediaData, _this2.props.block) : external_react_default.a.createElement("a", {
            key: index,
            href: "javascript:void(0);",
            onClick: function onClick() {
              return item.onClick && _this2.executeCommand(item.onClick);
            }
          }, item.text);
        } else {
          return null;
        }
      });
      return external_react_default.a.createElement("div", {
        className: "bf-media"
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
        className: "bf-image"
      }, toolbarVisible ? external_react_default.a.createElement("div", {
        style: {
          marginLeft: toolbarOffset
        },
        ref: function ref(instance) {
          return _this2.toolbarElement = instance;
        },
        "data-float": float,
        "data-align": alignment,
        className: "bf-media-toolbar"
      }, linkEditorVisible ? external_react_default.a.createElement("div", {
        className: "bf-image-link-editor"
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
        className: "bf-image-size-editor"
      }, external_react_default.a.createElement("div", {
        className: "editor-input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        onDragStart: this.preventDragEvent,
        placeholder: language.base.width,
        onKeyDown: this.handleSizeInputKeyDown,
        onChange: this.setImageWidth,
        defaultValue: width
      }), external_react_default.a.createElement("input", {
        type: "text",
        onDragStart: this.preventDragEvent,
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
        className: "bf-media-toolbar-arrow"
      })) : null, external_react_default.a.createElement("div", {
        style: {
          position: 'relative',
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          display: 'inline-block'
        }
      }, external_react_default.a.createElement("img", extends_default()({
        ref: function ref(instance) {
          return _this2.imageElement = instance;
        },
        src: url,
        width: width,
        height: height
      }, meta)), toolbarVisible && imageResizable ? external_react_default.a.createElement("div", {
        className: "bf-csize-icon right-bottom",
        onMouseDown: this.repareChangeSize('rightbottom')
      }) : null, toolbarVisible && imageResizable ? external_react_default.a.createElement("div", {
        className: "bf-csize-icon left-bottom",
        onMouseDown: this.repareChangeSize('leftbottom')
      }) : null, imageResizable ? external_react_default.a.createElement("div", {
        className: "bf-pre-csize ".concat(this.reSizeType),
        style: {
          width: "".concat(tempWidth, "px"),
          height: "".concat(tempHeight, "px")
        }
      }) : null)), clearFix && external_react_default.a.createElement("div", {
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
    key: "lockEditor",
    value: function lockEditor() {
      this.props.editor.lockOrUnlockEditor(true);
    }
  }, {
    key: "unlockEditor",
    value: function unlockEditor() {
      this.props.editor.lockOrUnlockEditor(false);
    }
  }, {
    key: "calcToolbarOffset",
    value: function calcToolbarOffset() {
      var _this$props2 = this.props,
          getContainerNode = _this$props2.getContainerNode,
          containerNode = _this$props2.containerNode;
      var container = getContainerNode ? getContainerNode() : containerNode;

      if (!container) {
        return 0;
      }

      var viewRect = container.querySelector('.bf-content').getBoundingClientRect();
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
      var hookReturns = this.props.hooks('set-image-link-target', link_target)(link_target);

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        link_target = hookReturns;
      }

      link_target = link_target === '_blank' ? '' : '_blank';
      this.props.editor.setValue(external_braft_utils_["ContentUtils"].setMediaData(this.props.editor.getValue(), this.props.entityKey, {
        link_target: link_target
      }));
      window.setImmediate(this.props.editor.forceRender);
    }
  }]);

  return Image;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Video/style.scss
var Video_style = __webpack_require__(47);

// EXTERNAL MODULE: ./components/common/Modal/style.scss
var Modal_style = __webpack_require__(48);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(16);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/common/Modal/index.jsx














var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Modal, _React$Component);

  function Modal(props) {
    var _this;

    classCallCheck_default()(this, Modal);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Modal).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleTransitionEnd", function () {
      if (!_this.rootElement || !_this.rootElement.classList) {
        return false;
      }

      if (!_this.rootElement.classList.contains('active')) {
        external_react_dom_default.a.unmountComponentAtNode(_this.rootElement) && _this.rootElement.parentNode.removeChild(_this.rootElement);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleMouseDown", function (event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'textarea') {
        return false;
      }

      event.preventDefault();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleCancel", function () {
      _this.props.closeOnCancel && _this.close();
      _this.props.onCancel && _this.props.onCancel();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleConfirm", function () {
      _this.props.closeOnConfirm && _this.close();
      _this.props.onConfirm && _this.props.onConfirm();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleMaskClick", function () {
      _this.props.closeOnBlur && _this.close();
      _this.props.onBlue && _this.props.onBlue();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "close", function () {
      _this.unrenderComponent();

      _this.props.onClose && _this.props.onClose();
    });

    _this.active = false;
    _this.componentId = 'BRAFT-MODAL-' + external_braft_utils_["BaseUtils"].UniqueIndex();
    return _this;
  }

  createClass_default()(Modal, [{
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
          component = props.component,
          confirmable = props.confirmable,
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
      typeof showFooter === 'undefined' && (showFooter = true);
      var childComponent = external_react_default.a.createElement("div", {
        onMouseDown: this.handleMouseDown,
        className: 'bf-modal ' + (className || '')
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-mask",
        onClick: this.handleMaskClick
      }), external_react_default.a.createElement("div", {
        onTransitionEnd: this.handleTransitionEnd,
        style: {
          width: width,
          height: height
        },
        className: "bf-modal-content"
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-header"
      }, external_react_default.a.createElement("h3", {
        className: "bf-modal-caption"
      }, title), showClose && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.close,
        className: "bf-modal-close-button"
      }, external_react_default.a.createElement("i", {
        className: "bfi-close"
      }))), external_react_default.a.createElement("div", {
        className: "bf-modal-body"
      }, children || component), showFooter ? external_react_default.a.createElement("div", {
        className: "bf-modal-footer"
      }, external_react_default.a.createElement("div", {
        className: "bf-modal-addon-text"
      }, bottomText), external_react_default.a.createElement("div", {
        className: "bf-modal-buttons"
      }, showCancel && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "bf-modal-cancel"
      }, cancelText || language.base.cancel), showConfirm && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: 'bf-modal-confirm ' + (!confirmable ? 'disabled' : '')
      }, confirmText || language.base.confirm))) : null));
      this.rootElement = document.querySelector('#' + this.componentId);

      if (!this.rootElement) {
        this.rootElement = document.createElement('div');
        this.rootElement.id = this.componentId;
        this.rootElement.className = 'bf-modal-root';
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

defineProperty_default()(Modal_Modal, "defaultProps", {
  showFooter: true,
  closeOnBlur: true
});


var Modal_showModal = function showModal(props) {
  var hostNode = document.createElement('div');
  hostNode.style.display = 'none';
  document.body.appendChild(hostNode);
  props = objectSpread_default()({
    visible: true,
    closeOnConfirm: true,
    closeOnCancel: true
  }, props);

  var close = function close() {
    external_react_dom_default.a.unmountComponentAtNode(hostNode) && hostNode.parentNode.removeChild(hostNode);
  };

  var onConfirm = function onConfirm() {
    props.onConfirm && props.onConfirm();
  };

  var onCancel = function onCancel() {
    props.onCancel && props.onCancel();
  };

  var onClose = function onClose() {
    close();
    props.onClose && props.onClose();
  };

  var modalInstance = external_react_dom_default.a.render(external_react_default.a.createElement(Modal_Modal, extends_default()({}, props, {
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onClose
  })), hostNode);
  modalInstance.destroy = close;
  modalInstance.update = modalInstance.renderComponent;
  return modalInstance;
};
// EXTERNAL MODULE: ./components/business/PlayerModal/style.scss
var PlayerModal_style = __webpack_require__(49);

// CONCATENATED MODULE: ./components/business/PlayerModal/index.jsx




var PlayerModal_playViaModal = function playViaModal(title, component, language) {
  return Modal_showModal({
    title: title,
    component: component,
    language: language,
    showFooter: false
  });
};

var typeIconsMap = {
  'video': 'bfi-film',
  'audio': 'bfi-music',
  'embed': 'bfi-code'
};
/* harmony default export */ var PlayerModal = (function (_ref) {
  var title = _ref.title,
      type = _ref.type,
      language = _ref.language,
      name = _ref.name,
      url = _ref.url,
      poster = _ref.poster,
      children = _ref.children,
      onRemove = _ref.onRemove;
  return external_react_default.a.createElement("div", {
    className: "bf-player-holder ".concat(type)
  }, external_react_default.a.createElement("div", {
    className: "icon-badge"
  }, external_react_default.a.createElement("i", {
    className: typeIconsMap[type]
  }), external_react_default.a.createElement("span", {
    className: "text"
  }, language.media[type])), external_react_default.a.createElement("button", {
    onMouseDown: onRemove,
    className: "button-remove"
  }, external_react_default.a.createElement("i", {
    className: "bfi-close"
  })), external_react_default.a.createElement("button", {
    onMouseDown: function onMouseDown() {
      return PlayerModal_playViaModal(name ? "".concat(title, ":").concat(name) : title, children, language);
    },
    className: "button-play"
  }, external_react_default.a.createElement("i", {
    className: "bfi-play_arrow"
  })), name ? external_react_default.a.createElement("h5", {
    className: "bf-name"
  }, name) : null, external_react_default.a.createElement("h6", {
    className: "bf-url"
  }, url), poster ? external_react_default.a.createElement("div", {
    className: "bf-poster",
    style: {
      backgroundImage: "url(".concat(poster, ")")
    }
  }) : null);
});
// CONCATENATED MODULE: ./renderers/atomics/Video/index.jsx












var Video_Video =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Video, _React$Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeVideo", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Video, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-video-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "video",
        onRemove: this.removeVideo,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.title
      }, external_react_default.a.createElement("div", {
        className: "bf-video-player"
      }, external_react_default.a.createElement("video", {
        controls: true,
        src: url,
        poster: meta ? meta.poster || '' : ''
      }))));
    }
  }]);

  return Video;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Audio/style.scss
var Audio_style = __webpack_require__(50);

// CONCATENATED MODULE: ./renderers/atomics/Audio/index.jsx












var Audio_Audio =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Audio, _React$Component);

  function Audio() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeAudio", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Audio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var url = mediaData.url,
          name = mediaData.name,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-audio-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "audio",
        onRemove: this.removeAudio,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.audioPlayer.title
      }, external_react_default.a.createElement("div", {
        className: "bf-audio-player"
      }, external_react_default.a.createElement("audio", {
        controls: true,
        src: url
      }))));
    }
  }]);

  return Audio;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/Embed/style.scss
var Embed_style = __webpack_require__(51);

// CONCATENATED MODULE: ./renderers/atomics/Embed/index.jsx












var Embed_Embed =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Embed, _React$Component);

  function Embed() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Embed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Embed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeEmbed", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(Embed, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mediaData = _this$props.mediaData,
          language = _this$props.language;
      var name = mediaData.name,
          url = mediaData.url,
          meta = mediaData.meta;
      return external_react_default.a.createElement("div", {
        className: "bf-embed-wrap"
      }, external_react_default.a.createElement(PlayerModal, {
        type: "embed",
        onRemove: this.removeEmbed,
        poster: meta ? meta.poster || '' : '',
        language: language,
        url: url,
        name: name,
        title: language.videoPlayer.embedTitle
      }, external_react_default.a.createElement("div", {
        className: "bf-embed-player",
        dangerouslySetInnerHTML: {
          __html: url
        }
      })));
    }
  }]);

  return Embed;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./renderers/atomics/HorizontalLine/style.scss
var HorizontalLine_style = __webpack_require__(52);

// CONCATENATED MODULE: ./renderers/atomics/HorizontalLine/index.jsx











var HorizontalLine_HorizontalLine =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(HorizontalLine, _React$Component);

  function HorizontalLine() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, HorizontalLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(HorizontalLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeHorizontalLine", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].removeBlock(_this.props.editorState, _this.props.block));
    });

    return _this;
  }

  createClass_default()(HorizontalLine, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "bf-hr"
      }, external_react_default.a.createElement("div", {
        className: "bf-media-toolbar"
      }, external_react_default.a.createElement("a", {
        onClick: this.removeHorizontalLine
      }, "\uE9AC")));
    }
  }]);

  return HorizontalLine;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./renderers/block/blockRendererFn.js











var blockRendererFn_BlockRenderFnContext = function BlockRenderFnContext() {
  var _this = this;

  classCallCheck_default()(this, BlockRenderFnContext);

  defineProperty_default()(this, "superProps", void 0);

  defineProperty_default()(this, "customBlockRendererFn", void 0);

  defineProperty_default()(this, "getRenderFn", function (superProps, customBlockRendererFn) {
    _this.superProps = superProps;
    _this.customBlockRendererFn = customBlockRendererFn;
    return _this.blockRendererFn;
  });

  defineProperty_default()(this, "renderAtomicBlock", function (props) {
    var superProps = _this.superProps;
    var entityKey = props.block.getEntityAt(0);

    if (!entityKey) {
      return null;
    }

    var entity = props.contentState.getEntity(entityKey);
    var mediaData = entity.getData();
    var mediaType = entity.getType();

    var mediaProps = objectSpread_default()({}, superProps, {
      block: props.block,
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
  });

  defineProperty_default()(this, "blockRendererFn", function (block) {
    var customBlockRendererFn = _this.customBlockRendererFn,
        superProps = _this.superProps;
    var blockType = block.getType();
    var blockRenderer = null;

    if (customBlockRendererFn) {
      blockRenderer = customBlockRendererFn(block, superProps) || null;
    }

    if (blockRenderer) {
      return blockRenderer;
    }

    var extensionBlockRendererFns = getExtensionBlockRendererFns(superProps.editorId);
    extensionBlockRendererFns.find(function (item) {
      if (item.blockType === blockType || item.blockType instanceof RegExp && item.blockType.test(blockType)) {
        blockRenderer = item.rendererFn ? item.rendererFn(superProps) : null;
        return true;
      }
    });

    if (blockRenderer) {
      return blockRenderer;
    }

    if (blockType === 'atomic') {
      blockRenderer = {
        component: _this.renderAtomicBlock,
        editable: false
      };
    }

    return blockRenderer;
  });
};

var blockRenderFnContext = new blockRendererFn_BlockRenderFnContext();
/* harmony default export */ var block_blockRendererFn = (blockRenderFnContext.getRenderFn);
// CONCATENATED MODULE: ./renderers/block/blockStyleFn.js
/* harmony default export */ var block_blockStyleFn = (function (customBlockStyleFn) {
  return function (block) {
    var blockAlignment = block.getData() && block.getData().get('textAlign');
    var blockIndent = block.getData() && block.getData().get('textIndent');
    var blockFloat = block.getData() && block.getData().get('float');
    var result = '';

    if (blockAlignment) {
      result = "bfa-".concat(blockAlignment);
    }

    if (blockIndent && blockIndent !== 0) {
      result += " bftd-".concat(blockIndent);
    }

    if (blockFloat) {
      result += " bff-".concat(blockFloat);
    }

    if (customBlockStyleFn) {
      result += customBlockStyleFn(block) || '';
    }

    return result;
  };
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleMap.js


/* harmony default export */ var inlineStyleMap = (function (props) {
  var customStyleMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extensionInlineStyleMap = getExtensionInlineStyleMap(props.editorId);
  return objectSpread_default()({
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
  }, extensionInlineStyleMap, customStyleMap);
});
// CONCATENATED MODULE: ./renderers/inline/inlineStyleFn.js


var getStyleValue = function getStyleValue(style) {
  return style.split('-')[1];
};

/* harmony default export */ var inlineStyleFn = (function (props, options) {
  return function (styles, block) {
    var output = {};
    var fontFamilies = options.fontFamilies,
        unitExportFn = options.unitExportFn,
        customStyleFn = options.customStyleFn;
    var extensionInlineStyleFns = getExtensionInlineStyleFns(props.editorId);
    extensionInlineStyleFns.forEach(function (item) {
      output = item.styleFn ? item.styleFn(styles, block, output) : output;
    });
    output = customStyleFn ? customStyleFn(styles, block, output) : {};
    styles.forEach(function (style) {
      if (style.indexOf('COLOR-') === 0) {
        output.color = '#' + getStyleValue(style);
      } else if (style.indexOf('BGCOLOR-') === 0) {
        output.backgroundColor = '#' + getStyleValue(style);
      } else if (style.indexOf('FONTSIZE-') === 0) {
        output.fontSize = unitExportFn(getStyleValue(style), 'font-size', 'editor');
      } else if (style.indexOf('LINEHEIGHT-') === 0) {
        output.lineHeight = unitExportFn(getStyleValue(style), 'line-height', 'editor');
      } else if (style.indexOf('LETTERSPACING-') === 0) {
        output.letterSpacing = unitExportFn(getStyleValue(style), 'letter-spacing', 'editor');
      } else if (style.indexOf('TEXTINDENT-') === 0) {
        output.textIndent = unitExportFn(getStyleValue(style), 'text-indent', 'editor');
      } else if (style.indexOf('FONTFAMILY-') === 0) {
        output.fontFamily = (fontFamilies.find(function (item) {
          return item.name.toUpperCase() === getStyleValue(style);
        }) || {}).family || '';
      }
    });
    return output;
  };
});
// EXTERNAL MODULE: ../node_modules/draft-js-multidecorators/index.js
var draft_js_multidecorators = __webpack_require__(18);
var draft_js_multidecorators_default = /*#__PURE__*/__webpack_require__.n(draft_js_multidecorators);

// CONCATENATED MODULE: ./renderers/decorators/Link/index.jsx

/* harmony default export */ var Link = (function (props) {
  var children = props.children,
      entityKey = props.entityKey,
      contentState = props.contentState;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      href = _contentState$getEnti.href,
      target = _contentState$getEnti.target;

  return external_react_default.a.createElement("span", {
    className: "bf-link-wrap"
  }, external_react_default.a.createElement("a", {
    onClick: function onClick(event) {
      return viewLink(event, href);
    },
    className: "bf-link",
    href: href,
    target: target
  }, children));
});

var viewLink = function viewLink(event, link) {
  // 当按下Ctrl/command键时，点击打开链接文字中的url
  if (event.getModifierState('Control') || event.getModifierState('Meta')) {
    var tempLink = document.createElement('a');
    tempLink.href = link;
    tempLink.target = event.currentTarget.target;
    tempLink.click();
  }
};
// CONCATENATED MODULE: ./renderers/decorators/index.js






var KEY_SEPARATOR = '-';

draft_js_multidecorators_default.a.prototype.getDecorations = function (block, contentState) {
  var decorations = Array(block.getText().length).fill(null);
  this.decorators.forEach(function (decorator, i) {
    decorator.getDecorations(block, contentState).forEach(function (key, offset) {
      if (!key) {
        return;
      }

      key = i + KEY_SEPARATOR + key;
      decorations[offset] = key;
    });
  });
  return external_immutable_default.a.List(decorations);
};

var builtinDecorators = [{
  type: 'entity',
  decorator: {
    key: 'LINK',
    component: Link
  }
}];

var createStrategy = function createStrategy(type) {
  return function (block, callback, contentState) {
    block.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === type;
    }, callback);
  };
};

/* harmony default export */ var decorators = (function (editorId) {
  var extensionDecorators = getExtensionDecorators(editorId);
  var entityDecorators = builtinDecorators.concat(toConsumableArray_default()(extensionDecorators.filter(function (item) {
    return item.type === 'entity';
  })));
  var strategyDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'strategy';
  });
  var classDecorators = extensionDecorators.filter(function (item) {
    return item.type === 'class';
  });
  return new draft_js_multidecorators_default.a(toConsumableArray_default()(classDecorators.map(function (item) {
    return item.decorator;
  })).concat([// combine decorators created with strategy
  new external_draft_js_["CompositeDecorator"](strategyDecorators.map(function (item) {
    return item.decorator;
  })), // combine decorators for entities
  new external_draft_js_["CompositeDecorator"](entityDecorators.map(function (item) {
    return {
      strategy: createStrategy(item.decorator.key),
      component: item.decorator.component
    };
  }))]));
});
// CONCATENATED MODULE: ./renderers/index.js






var getBlockRenderMap = block_blockRenderMap;
var getBlockRendererFn = block_blockRendererFn;
var getBlockStyleFn = block_blockStyleFn;
var getCustomStyleMap = inlineStyleMap;
var getCustomStyleFn = inlineStyleFn;
var getDecorators = decorators;
// EXTERNAL MODULE: ./components/business/ControlBar/style.scss
var ControlBar_style = __webpack_require__(53);

// EXTERNAL MODULE: ./components/business/LinkEditor/style.scss
var LinkEditor_style = __webpack_require__(54);

// EXTERNAL MODULE: ./components/common/DropDown/style.scss
var DropDown_style = __webpack_require__(55);

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

if (!responsiveHelperInited && (typeof window === "undefined" ? "undefined" : typeof_default()(window)) === 'object') {
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











var DropDown_DropDown =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(DropDown, _React$Component);

  function DropDown() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "responsiveResolveId", null);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "dropDownHandlerElement", null);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "dropDownContentElement", null);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      active: false,
      offset: 0
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "fixDropDownPosition", function () {
      var viewRect = _this.props.getContainerNode().getBoundingClientRect();

      var handlerRect = _this.dropDownHandlerElement.getBoundingClientRect();

      var contentRect = _this.dropDownContentElement.getBoundingClientRect();

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

      if (offset !== _this.state.offset) {
        _this.setState({
          offset: offset
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "registerClickEvent", function (event) {
      var autoHide = _this.props.autoHide;
      var active = _this.state.active;

      if (_this.dropDownContentElement.contains(event.target) || _this.dropDownHandlerElement.contains(event.target)) {
        return false;
      }

      autoHide && active && _this.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggle", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "show", function () {
      _this.setState({
        active: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "hide", function () {
      _this.setState({
        active: false
      });
    });

    return _this;
  }

  createClass_default()(DropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document) {
        document.body.addEventListener('click', this.registerClickEvent);
        this.responsiveResolveId = responsive.resolve(this.fixDropDownPosition);
      }
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
      if (document) {
        document.body.removeEventListener('click', this.registerClickEvent);
        responsive.unresolve(this.responsiveResolveId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          offset = _this$state.offset;
      var _this$props = this.props,
          caption = _this$props.caption,
          htmlCaption = _this$props.htmlCaption,
          title = _this$props.title,
          disabled = _this$props.disabled,
          showArrow = _this$props.showArrow,
          arrowActive = _this$props.arrowActive,
          className = _this$props.className,
          children = _this$props.children,
          theme = _this$props.theme;
      disabled && (active = false);
      theme === 'light' && (className = ' light-theme ' + className);
      return external_react_default.a.createElement("div", {
        className: 'bf-dropdown ' + (active ? 'active ' : '') + (disabled ? 'disabled ' : '') + className
      }, htmlCaption ? external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        dangerouslySetInnerHTML: htmlCaption ? {
          __html: htmlCaption
        } : null,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }) : external_react_default.a.createElement("button", {
        type: "button",
        className: "dropdown-handler",
        "data-title": title,
        onClick: this.toggle,
        ref: function ref(instance) {
          return _this2.dropDownHandlerElement = instance;
        }
      }, external_react_default.a.createElement("span", null, caption), showArrow !== false ? external_react_default.a.createElement("i", {
        className: "bfi-drop-down"
      }) : null), external_react_default.a.createElement("div", {
        className: "dropdown-content",
        style: {
          marginLeft: offset
        },
        ref: function ref(instance) {
          return _this2.dropDownContentElement = instance;
        }
      }, external_react_default.a.createElement("i", {
        style: {
          marginLeft: offset * -1
        },
        className: 'dropdown-arrow' + (arrowActive ? ' active' : '')
      }), external_react_default.a.createElement("div", {
        className: "dropdown-content-inner"
      }, children)));
    }
  }]);

  return DropDown;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlGroup/index.jsx

/* harmony default export */ var ControlGroup = (function (props) {
  if (external_react_default.a.Fragment) {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, props.children);
  } else {
    return external_react_default.a.createElement("div", {
      className: "control-item-group"
    }, props.children);
  }
});
// CONCATENATED MODULE: ./components/business/LinkEditor/index.jsx














var LinkEditor_LinkEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(LinkEditor, _React$Component);

  function LinkEditor(props) {
    var _this;

    classCallCheck_default()(this, LinkEditor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(LinkEditor).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "dropDownInstance", null);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handeKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.handleConfirm();

        e.preventDefault();
        return false;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleTnputText", function (e) {
      _this.setState({
        text: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleInputLink", function (e) {
      _this.setState({
        href: e.currentTarget.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setTarget", function () {
      _this.setState({
        target: _this.state.target === '_blank' ? '' : '_blank'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleCancel", function () {
      _this.dropDownInstance.hide();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleUnlink", function () {
      _this.dropDownInstance.hide();

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, false));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleConfirm", function () {
      var _this$state = _this.state,
          text = _this$state.text,
          href = _this$state.href,
          target = _this$state.target,
          textSelected = _this$state.textSelected;

      var hookReturns = _this.props.hooks('toggle-link', {
        href: href,
        target: target
      })({
        href: href,
        target: target
      });

      _this.dropDownInstance.hide();

      _this.props.editor.requestFocus();

      if (hookReturns === false) {
        return false;
      }

      if (hookReturns) {
        typeof hookReturns.href === 'string' && (href = hookReturns.href);
        typeof hookReturns.target === 'string' && (target = hookReturns.target);
      }

      if (textSelected) {
        if (href) {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, href, target));
        } else {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLink(_this.props.editorState, false));
        }
      } else {
        _this.props.editor.setValue(external_braft_utils_["ContentUtils"].insertText(_this.props.editorState, text || href, null, {
          type: 'LINK',
          data: {
            href: href,
            target: target
          }
        }));
      }
    });

    _this.state = {
      text: '',
      href: '',
      target: props.defaultLinkTarget || '',
      textSelected: false
    };
    return _this;
  }

  createClass_default()(LinkEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _ContentUtils$getSele = external_braft_utils_["ContentUtils"].getSelectionEntityData(nextProps.editorState, 'LINK'),
          href = _ContentUtils$getSele.href,
          target = _ContentUtils$getSele.target;

      var textSelected = !external_braft_utils_["ContentUtils"].isSelectionCollapsed(this.props.editorState) && external_braft_utils_["ContentUtils"].getSelectionBlockType(this.props.editorState) !== 'atomic';
      var selectedText = '';

      if (textSelected) {
        selectedText = external_braft_utils_["ContentUtils"].getSelectionText(this.props.editorState);
      }

      this.setState({
        textSelected: textSelected,
        text: selectedText,
        href: href || '',
        target: typeof target === 'undefined' ? nextProps.defaultLinkTarget || '' : target || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allowInsertLinkText = this.props.allowInsertLinkText;
      var _this$state2 = this.state,
          text = _this$state2.text,
          href = _this$state2.href,
          target = _this$state2.target,
          textSelected = _this$state2.textSelected;
      var caption = external_react_default.a.createElement("i", {
        className: "bfi-link"
      });
      return external_react_default.a.createElement(ControlGroup, null, external_react_default.a.createElement(DropDown_DropDown, {
        key: 0,
        caption: caption,
        title: this.props.language.controls.link,
        autoHide: true,
        getContainerNode: this.props.getContainerNode,
        showArrow: false,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown link-editor-dropdown'
      }, external_react_default.a.createElement("div", {
        className: "bf-link-editor"
      }, allowInsertLinkText ? external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: text,
        spellCheck: false,
        disabled: textSelected,
        placeholder: this.props.language.linkEditor.textInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleTnputText
      })) : null, external_react_default.a.createElement("div", {
        className: "input-group"
      }, external_react_default.a.createElement("input", {
        type: "text",
        value: href,
        spellCheck: false,
        placeholder: this.props.language.linkEditor.linkInputPlaceHolder,
        onKeyDown: this.handeKeyDown,
        onChange: this.handleInputLink
      })), external_react_default.a.createElement("div", {
        className: "switch-group"
      }, external_react_default.a.createElement(Switch, {
        active: target === '_blank',
        onClick: this.setTarget
      }), external_react_default.a.createElement("label", null, this.props.language.linkEditor.openInNewWindow)), external_react_default.a.createElement("div", {
        className: "buttons"
      }, external_react_default.a.createElement("a", {
        onClick: this.handleUnlink,
        className: "primary button-remove-link pull-left",
        href: "javascript:void(0);"
      }, external_react_default.a.createElement("i", {
        className: "bfi-close"
      }), external_react_default.a.createElement("span", null, this.props.language.linkEditor.removeLink)), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleConfirm,
        className: "primary pull-right"
      }, this.props.language.base.confirm), external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.handleCancel,
        className: "default pull-right"
      }, this.props.language.base.cancel)))), external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": this.props.language.controls.unlink,
        className: "control-item button",
        onClick: this.handleUnlink,
        disabled: !textSelected || !href
      }, external_react_default.a.createElement("i", {
        className: "bfi-link-off"
      })));
    }
  }]);

  return LinkEditor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/Headings/style.scss
var Headings_style = __webpack_require__(56);

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
  var dropDownInstance = null;
  var headings = maps_getHeadings(props.language).filter(function (item) {
    return props.headings.indexOf(item.key) !== -1;
  });
  var currentHeadingIndex = headings.findIndex(function (item) {
    return item.command === props.current;
  });
  var caption = headings[currentHeadingIndex] ? headings[currentHeadingIndex].title : props.language.controls.normal;
  return external_react_default.a.createElement(DropDown_DropDown, {
    caption: caption,
    autoHide: true,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.headings,
    arrowActive: currentHeadingIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown headings-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, headings.map(function (item, index) {
    var isActive = props.current === item.command;
    return external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item' + (isActive ? ' active' : ''),
      onClick: function onClick() {
        props.onChange(item.command, item.type), dropDownInstance.hide();
      }
    }, item.text);
  })));
});
// EXTERNAL MODULE: ./components/business/TextColor/style.scss
var TextColor_style = __webpack_require__(57);

// EXTERNAL MODULE: ./components/common/ColorPicker/style.scss
var ColorPicker_style = __webpack_require__(58);

// CONCATENATED MODULE: ./components/common/ColorPicker/index.jsx


/* harmony default export */ var common_ColorPicker = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "bf-colors-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "bf-colors"
  }, props.presetColors.map(function (item, index) {
    var className = props.color && item.toLowerCase() === props.color.toLowerCase() ? 'color-item active' : 'color-item';
    return external_react_default.a.createElement("li", {
      key: index,
      title: item,
      className: className,
      style: {
        color: item
      },
      "data-color": item.replace('#', ''),
      onClick: function onClick(e) {
        props.onChange(e.currentTarget.dataset.color, true);
      }
    });
  })));
});
// CONCATENATED MODULE: ./components/business/TextColor/index.jsx













var TextColor_TextColor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextColor, _React$Component);

  function TextColor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextColor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      colorType: 'color'
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "switchColorType", function (_ref) {
      var currentTarget = _ref.currentTarget;

      _this.setState({
        colorType: currentTarget.dataset.type
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleColor", function (color, closePicker) {
      if (color) {
        var hookReturns = _this.props.hooks("toggle-text-".concat(_this.state.colorType), color)(color);

        if (hookReturns === false) {
          return false;
        }

        if (typeof hookReturns === 'string') {
          color = hookReturns;
        }

        if (_this.state.colorType === 'color') {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionColor(_this.props.editorState, color));
        } else {
          _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBackgroundColor(_this.props.editorState, color));
        }
      }

      if (closePicker) {
        _this.dropDownInstance.hide();

        _this.props.editor.requestFocus();
      }
    });

    return _this;
  }

  createClass_default()(TextColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var captionStyle = {};
      var currentColor = null;
      var colorType = this.state.colorType;
      var selectionStyles = this.props.editorState.getCurrentInlineStyle().toJS();
      selectionStyles.forEach(function (style) {
        if (style.indexOf('COLOR-') === 0) {
          captionStyle.color = '#' + style.split('-')[1];
          colorType === 'color' && (currentColor = captionStyle.color);
        }

        if (style.indexOf('BGCOLOR-') === 0) {
          captionStyle.backgroundColor = '#' + style.split('-')[1];
          colorType === 'background-color' && (currentColor = captionStyle.backgroundColor);
        }
      });
      var caption = external_react_default.a.createElement("i", {
        style: captionStyle,
        className: "bfi-text-color"
      }, external_react_default.a.createElement("span", {
        className: "path1"
      }), external_react_default.a.createElement("span", {
        className: "path2"
      }));
      var ColorPicker = this.props.colorPicker || common_ColorPicker;
      return external_react_default.a.createElement(DropDown_DropDown, {
        caption: caption,
        title: this.props.language.controls.color,
        showArrow: false,
        autoHide: this.props.autoHide,
        theme: this.props.theme,
        getContainerNode: this.props.getContainerNode,
        ref: function ref(instance) {
          return _this2.dropDownInstance = instance;
        },
        className: 'control-item dropdown text-color-dropdown'
      }, external_react_default.a.createElement("div", {
        className: "bf-text-color-picker-wrap"
      }, external_react_default.a.createElement("div", {
        className: "bf-color-switch-buttons",
        style: this.props.enableBackgroundColor ? {} : {
          display: 'none'
        }
      }, external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "color",
        className: colorType === 'color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.textColor), external_react_default.a.createElement("button", {
        type: "button",
        "data-type": "background-color",
        className: colorType === 'background-color' ? 'active' : '',
        onClick: this.switchColorType
      }, this.props.language.controls.backgroundColor)), external_react_default.a.createElement(ColorPicker, {
        width: 200,
        color: currentColor,
        disableAlpha: true,
        presetColors: this.props.colors,
        onChange: this.toggleColor
      })));
    }
  }]);

  return TextColor;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/FontSize/style.scss
var FontSize_style = __webpack_require__(59);

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

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontSize(props.editorState, fontSize));
  props.editor.requestFocus();
};

/* harmony default export */ var FontSize = (function (props) {
  var caption = null;
  var currentFontSize = null;
  var dropDownInstance = null;
  props.fontSizes.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'FONTSIZE-' + item)) {
      caption = item;
      currentFontSize = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontSize,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-font-size-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-font-sizes"
  }, props.fontSizes.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentFontSize ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        FontSize_toggleFontSize(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/LineHeight/style.scss
var LineHeight_style = __webpack_require__(60);

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

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLineHeight(props.editorState, lineHeight));
  props.editor.requestFocus();
};

/* harmony default export */ var LineHeight = (function (props) {
  var caption = null;
  var currentLineHeight = null;
  var dropDownInstance = null;
  props.lineHeights.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LINEHEIGHT-' + item)) {
      caption = item;
      currentLineHeight = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.lineHeight,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-line-height-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-line-heights"
  }, props.lineHeights.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLineHeight ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LineHeight_toggleLineHeight(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// EXTERNAL MODULE: ./components/business/FontFamily/style.scss
var FontFamily_style = __webpack_require__(61);

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

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionFontFamily(props.editorState, fontFamilyName));
  props.editor.requestFocus();
};

/* harmony default export */ var FontFamily = (function (props) {
  var caption = null;
  var currentIndex = null;
  var dropDownInstance = null;
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
    getContainerNode: props.getContainerNode,
    title: props.language.controls.fontFamily,
    autoHide: true,
    arrowActive: currentIndex === 0,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown font-family-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "menu"
  }, props.fontFamilies.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: 'menu-item ' + (index === currentIndex ? 'active' : ''),
      "data-name": item.name,
      onClick: function onClick(event) {
        FontFamily_toggleFontFamily(event, props), dropDownInstance.hide();
      }
    }, external_react_default.a.createElement("span", {
      style: {
        fontFamily: item.family
      }
    }, item.name));
  })));
});
// CONCATENATED MODULE: ./components/business/TextAlign/index.jsx











var TextAlign_TextAlign =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  function TextAlign() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextAlign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      currentAlignment: undefined
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setAlignment", function (event) {
      var alignment = event.currentTarget.dataset.alignment;

      var hookReturns = _this.props.hooks('toggle-text-alignment', alignment)(alignment);

      if (_this.props.textAligns.indexOf(hookReturns) > -1) {
        alignment = hookReturns;
      }

      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionAlignment(_this.props.editorState, alignment));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
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
      return external_react_default.a.createElement(ControlGroup, null, this.props.textAligns.map(function (item, index) {
        return external_react_default.a.createElement("button", {
          type: "button",
          key: index,
          "data-title": textAlignmentTitles[index],
          "data-alignment": item,
          className: 'control-item button ' + (item === _this2.state.currentAlignment ? 'active' : null),
          onClick: _this2.setAlignment
        }, external_react_default.a.createElement("i", {
          className: 'bfi-align-' + item
        }));
      }));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/business/EmojiPicker/style.scss
var EmojiPicker_style = __webpack_require__(62);

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
    autoHide: true,
    showArrow: false,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.emoji,
    className: 'control-item dropdown bf-emoji-dropdown'
  }, external_react_default.a.createElement("div", {
    className: "bf-emojis-wrap"
  }, external_react_default.a.createElement("ul", {
    className: "bf-emojis"
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
var LetterSpacing_style = __webpack_require__(63);

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

  props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionLetterSpacing(props.editorState, letterSpacing));
  props.editor.requestFocus();
};

/* harmony default export */ var LetterSpacing = (function (props) {
  var caption = null;
  var currentLetterSpacing = null;
  var dropDownInstance = null;
  props.letterSpacings.find(function (item) {
    if (external_braft_utils_["ContentUtils"].selectionHasInlineStyle(props.editorState, 'LETTERSPACING-' + item)) {
      caption = item;
      currentLetterSpacing = item;
      return true;
    }

    return false;
  });
  return external_react_default.a.createElement(DropDown_DropDown, {
    autoHide: true,
    caption: caption || props.defaultCaption,
    getContainerNode: props.getContainerNode,
    title: props.language.controls.letterSpacing,
    ref: function ref(instance) {
      return dropDownInstance = instance;
    },
    className: 'control-item dropdown bf-letter-spacing-dropdown'
  }, external_react_default.a.createElement("ul", {
    className: "bf-letter-spacings"
  }, props.letterSpacings.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index,
      className: item === currentLetterSpacing ? 'active' : null,
      "data-size": item,
      onClick: function onClick(event) {
        LetterSpacing_toggleLetterSpacing(event, props), dropDownInstance.hide();
      }
    }, item);
  })));
});
// CONCATENATED MODULE: ./components/business/TextIndent/index.jsx











var TextIndent_TextAlign =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TextAlign, _React$Component);

  function TextAlign() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TextAlign);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TextAlign)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      currentIndent: 0
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "increaseIndent", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].increaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "decreaseIndent", function () {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].decreaseSelectionIndent(_this.props.editorState));

      _this.props.editor.requestFocus();
    });

    return _this;
  }

  createClass_default()(TextAlign, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentIndent: external_braft_utils_["ContentUtils"].getSelectionBlockData(nextProps.editorState, 'textIndent') || 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentIndent = this.state.currentIndent;
      var language = this.props.language;
      return external_react_default.a.createElement(ControlGroup, null, external_react_default.a.createElement("button", {
        key: 0,
        type: "button",
        "data-title": language.controls.increaseIndent,
        disabled: currentIndent >= 6,
        className: "control-item button button-indent-increase".concat(currentIndent > 0 && currentIndent < 6 ? ' active' : ''),
        onClick: this.increaseIndent
      }, external_react_default.a.createElement("i", {
        className: 'bfi-indent-increase'
      })), external_react_default.a.createElement("button", {
        key: 1,
        type: "button",
        "data-title": language.controls.decreaseIndent,
        disabled: currentIndent <= 0,
        className: "control-item button button-indent-decrease",
        onClick: this.decreaseIndent
      }, external_react_default.a.createElement("i", {
        className: 'bfi-indent-decrease'
      })));
    }
  }]);

  return TextAlign;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/business/ControlBar/index.jsx


























var commandHookMap = {
  'inline-style': 'toggle-inline-style',
  'block-type': 'change-block-type',
  'editor-method': 'exec-editor-command'
};
var exclusiveInlineStyles = {
  'superscript': 'subscript',
  'subscript': 'superscript'
};

var mergeControls = function mergeControls(commonProps, builtControls, extensionControls, extendControls) {
  extensionControls = extensionControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });
  extendControls = extendControls.map(function (item) {
    return typeof item === 'function' ? item(commonProps) : item;
  });

  if (extensionControls.length === 0 && extendControls.length === 0) {
    return builtControls;
  }

  return builtControls.map(function (item) {
    return extendControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || extensionControls.find(function (subItem) {
      return subItem.replace === (item.key || item);
    }) || item;
  }).concat(extensionControls.length ? 'separator' : '').concat(extensionControls.filter(function (item) {
    return !item.replace;
  })).concat(extendControls.filter(function (item) {
    return typeof item === 'string' || !item.replace;
  }));
};

var ControlBar_ControlBar =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ControlBar, _React$Component);

  function ControlBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ControlBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ControlBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "allControls", []);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "mediaLibiraryModal", null);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "extendedModals", {});

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "openBraftFinder", function () {
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
        component: external_react_default.a.createElement(MediaLibrary, {
          accepts: mediaProps.accepts,
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "bindBraftFinderHook", function (hookName) {
      return function () {
        return _this.props.hooks(hookName, arguments.length <= 0 ? undefined : arguments[0]).apply(void 0, arguments);
      };
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "insertMedias", function (medias) {
      _this.props.editor.setValue(external_braft_utils_["ContentUtils"].insertMedias(_this.props.editorState, medias));

      _this.props.editor.requestFocus();

      _this.props.media.onInsert && _this.props.media.onInsert(medias);

      _this.closeBraftFinder();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "closeBraftFinder", function () {
      _this.props.media.onCancel && _this.props.media.onCancel();
      _this.mediaLibiraryModal && _this.mediaLibiraryModal.close();
    });

    return _this;
  }

  createClass_default()(ControlBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var language = this.props.language;
      this.allControls.forEach(function (item) {
        if (item.type === 'modal') {
          if (item.modal && item.modal.id && _this2.extendedModals[item.modal.id]) {
            _this2.extendedModals[item.modal.id].update(objectSpread_default()({}, item.modal, {
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
      } else if (type === 'entity' && external_braft_utils_["ContentUtils"].getSelectionEntityType(this.props.editorState) === command) {
        className += ' active';
      }

      return className;
    }
  }, {
    key: "applyControl",
    value: function applyControl(command, type) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hookReturns = this.props.hooks(commandHookMap[type] || type, command)(command);
      var editorState = this.props.editorState;

      if (hookReturns === false) {
        return false;
      }

      if (typeof hookReturns === 'string') {
        command = hookReturns;
      }

      if (type === 'inline-style') {
        var exclusiveInlineStyle = exclusiveInlineStyles[command];

        if (exclusiveInlineStyle && external_braft_utils_["ContentUtils"].selectionHasInlineStyle(editorState, exclusiveInlineStyle)) {
          editorState = external_braft_utils_["ContentUtils"].toggleSelectionInlineStyle(editorState, exclusiveInlineStyle);
        }

        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionInlineStyle(editorState, command));
      } else if (type === 'block-type') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionBlockType(editorState, command));
      } else if (type === 'entity') {
        this.props.editor.setValue(external_braft_utils_["ContentUtils"].toggleSelectionEntity(editorState, {
          type: command,
          mutability: data.mutability || 'MUTABLE',
          data: data.data || {}
        }));
      } else if (type === 'editor-method') {
        this.props.editor[command] && this.props.editor[command]();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          editor = _this$props.editor,
          editorId = _this$props.editorId,
          editorState = _this$props.editorState,
          className = _this$props.className,
          style = _this$props.style,
          controls = _this$props.controls,
          media = _this$props.media,
          extendControls = _this$props.extendControls,
          language = _this$props.language,
          hooks = _this$props.hooks,
          colors = _this$props.colors,
          colorPicker = _this$props.colorPicker,
          colorPickerTheme = _this$props.colorPickerTheme,
          colorPickerAutoHide = _this$props.colorPickerAutoHide,
          headings = _this$props.headings,
          fontSizes = _this$props.fontSizes,
          fontFamilies = _this$props.fontFamilies,
          emojis = _this$props.emojis,
          getContainerNode = _this$props.getContainerNode,
          lineHeights = _this$props.lineHeights,
          letterSpacings = _this$props.letterSpacings,
          textAligns = _this$props.textAligns,
          textBackgroundColor = _this$props.textBackgroundColor,
          allowInsertLinkText = _this$props.allowInsertLinkText,
          defaultLinkTarget = _this$props.defaultLinkTarget;
      var currentBlockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);
      var commonProps = {
        editor: editor,
        editorId: editorId,
        editorState: editorState,
        language: language,
        getContainerNode: getContainerNode,
        hooks: hooks
      };
      var renderedControls = [];
      var editorControls = configs_controls(language, editor);
      var extensionControls = getExtensionControls(editorId);
      var allControls = mergeControls(commonProps, controls, extensionControls, extendControls);
      this.allControls = allControls;
      return external_react_default.a.createElement("div", {
        className: "bf-controlbar ".concat(className || ''),
        style: style,
        onMouseDown: this.preventDefault
      }, allControls.map(function (item, index) {
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
          controlItem = objectSpread_default()({}, controlItem, item);
        }

        if (!controlItem) {
          return null;
        }

        renderedControls.push(itemKey);

        if (controlItem.type === 'headings') {
          return external_react_default.a.createElement(Headings, extends_default()({
            key: index,
            headings: headings,
            current: currentBlockType,
            onChange: function onChange(command) {
              return _this3.applyControl(command, 'block-type');
            }
          }, commonProps));
        } else if (controlItem.type === 'text-color') {
          return external_react_default.a.createElement(TextColor_TextColor, extends_default()({
            key: index,
            colors: colors,
            colorPicker: colorPicker,
            theme: colorPickerTheme,
            autoHide: colorPickerAutoHide,
            enableBackgroundColor: textBackgroundColor
          }, commonProps));
        } else if (controlItem.type === 'font-size') {
          return external_react_default.a.createElement(FontSize, extends_default()({
            key: index,
            fontSizes: fontSizes,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'line-height') {
          return external_react_default.a.createElement(LineHeight, extends_default()({
            key: index,
            lineHeights: lineHeights,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'letter-spacing') {
          return external_react_default.a.createElement(LetterSpacing, extends_default()({
            key: index,
            letterSpacings: letterSpacings,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'text-indent') {
          return external_react_default.a.createElement(TextIndent_TextAlign, extends_default()({
            key: index,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'font-family') {
          return external_react_default.a.createElement(FontFamily, extends_default()({
            key: index,
            fontFamilies: fontFamilies,
            defaultCaption: controlItem.title
          }, commonProps));
        } else if (controlItem.type === 'emoji') {
          return external_react_default.a.createElement(EmojiPicker, extends_default()({
            key: index,
            emojis: emojis,
            defaultCaption: controlItem.text
          }, commonProps));
        } else if (controlItem.type === 'link') {
          return external_react_default.a.createElement(LinkEditor_LinkEditor, extends_default()({
            key: index,
            defaultLinkTarget: defaultLinkTarget,
            allowInsertLinkText: allowInsertLinkText
          }, commonProps));
        } else if (controlItem.type === 'text-align') {
          return external_react_default.a.createElement(TextAlign_TextAlign, extends_default()({
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
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item media button",
            onClick: _this3.openBraftFinder
          }, controlItem.text);
        } else if (controlItem.type === 'dropdown') {
          return external_react_default.a.createElement(DropDown_DropDown, extends_default()({
            key: index,
            className: "control-item extend-control-item dropdown ".concat(controlItem.className || ''),
            caption: controlItem.text,
            htmlCaption: controlItem.html,
            showArrow: controlItem.showArrow,
            title: controlItem.title,
            arrowActive: controlItem.arrowActive,
            theme: controlItem.theme,
            autoHide: controlItem.autoHide,
            disabled: controlItem.disabled,
            ref: controlItem.ref
          }, commonProps), controlItem.component);
        } else if (controlItem.type === 'modal') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item extend-control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              if (controlItem.modal && controlItem.modal.id) {
                if (_this3.extendedModals[controlItem.modal.id]) {
                  _this3.extendedModals[controlItem.modal.id].active = true;

                  _this3.extendedModals[controlItem.modal.id].update(objectSpread_default()({}, controlItem.modal, {
                    language: language
                  }));
                } else {
                  _this3.extendedModals[controlItem.modal.id] = Modal_showModal(objectSpread_default()({}, controlItem.modal, {
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
            className: "component-wrapper ".concat(controlItem.className || '')
          }, controlItem.component);
        } else if (controlItem.type === 'button') {
          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            "data-title": controlItem.title,
            disabled: controlItem.disabled,
            className: "control-item button ".concat(controlItem.className || ''),
            dangerouslySetInnerHTML: controlItem.html ? {
              __html: controlItem.html
            } : null,
            onClick: function onClick(event) {
              return controlItem.onClick && controlItem.onClick(event);
            }
          }, !controlItem.html ? controlItem.text : null);
        } else if (controlItem) {
          var disabled = false;

          if (controlItem.command === 'undo') {
            disabled = editorState.getUndoStack().size === 0;
          } else if (controlItem.command === 'redo') {
            disabled = editorState.getRedoStack().size === 0;
          }

          return external_react_default.a.createElement("button", {
            type: "button",
            key: index,
            disabled: disabled,
            "data-title": controlItem.title,
            className: _this3.getControlItemClassName({
              type: controlItem.type,
              command: controlItem.command
            }),
            onClick: function onClick() {
              return _this3.applyControl(controlItem.command, controlItem.type, controlItem.data);
            }
          }, controlItem.text);
        }
      }));
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(event) {
      var tagName = event.target.tagName.toLowerCase();

      if (tagName === 'input' || tagName === 'label') {// ...
      } else {
        event.preventDefault();
      }
    }
  }]);

  return ControlBar;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./editor/index.jsx

























var buildHooks = function buildHooks(hooks) {
  return function (hookName) {
    var defaultReturns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return hooks[hookName] || function () {
      return defaultReturns;
    };
  };
};

var filterColors = function filterColors(colors, colors2) {
  return colors.filter(function (item) {
    return !colors2.find(function (color) {
      return color.toLowerCase() === item.toLowerCase();
    });
  }).filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
};

var editor_isControlEnabled = function isControlEnabled(props, controlName) {
  return toConsumableArray_default()(props.controls).concat(toConsumableArray_default()(props.extendControls)).find(function (item) {
    return item === controlName || item.key === controlName;
  }) && props.excludeControls.indexOf(controlName) === -1;
};

var editor_getConvertOptions = function getConvertOptions(props) {
  var editorId = props.editorId || props.id;

  var convertOptions = objectSpread_default()({}, configs_props.converts, props.converts, {
    fontFamilies: props.fontFamilies
  });

  convertOptions.styleImportFn = compositeStyleImportFn(convertOptions.styleImportFn, editorId);
  convertOptions.styleExportFn = compositeStyleExportFn(convertOptions.styleExportFn, editorId);
  convertOptions.entityImportFn = compositeEntityImportFn(convertOptions.entityImportFn, editorId);
  convertOptions.entityExportFn = compositeEntityExportFn(convertOptions.entityExportFn, editorId);
  convertOptions.blockImportFn = compositeBlockImportFn(convertOptions.blockImportFn, editorId);
  convertOptions.blockExportFn = compositeBlockExportFn(convertOptions.blockExportFn, editorId);
  return convertOptions;
};

var editor_BraftEditor =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(BraftEditor, _React$Component);

  function BraftEditor(props) {
    var _this;

    classCallCheck_default()(this, BraftEditor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(BraftEditor).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onChange", function (editorState, callback) {
      if (!(editorState instanceof external_draft_js_["EditorState"])) {
        editorState = external_draft_js_["EditorState"].set(editorState, {
          decorator: _this.editorDecorators
        });
      }

      if (!editorState.convertOptions) {
        editorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      }

      _this.setState({
        editorState: editorState
      }, function () {
        _this.props.onChange && _this.props.onChange(editorState);
        callback && callback(editorState);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "getDraftInstance", function () {
      return _this.draftInstance;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "getFinderInstance", function () {
      return _this.braftFinder;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "getValue", function () {
      return _this.state.editorState;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setValue", function (editorState, callback) {
      return _this.onChange(editorState, callback);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "forceRender", function () {
      var selectionState = _this.state.editorState.getSelection();

      _this.setValue(external_draft_js_["EditorState"].set(_this.state.editorState, {
        decorator: _this.editorDecorators
      }), function () {
        _this.setValue(external_draft_js_["EditorState"].forceSelection(_this.state.editorState, selectionState));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onTab", function (event) {
      if (handlers_keyCommandHandlers('tab', _this.state.editorState, assertThisInitialized_default()(assertThisInitialized_default()(_this))) === 'handled') {
        event.preventDefault();
      }

      _this.editorProps.onTab && _this.editorProps.onTab(event);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onFocus", function () {
      _this.isFocused = true;
      _this.editorProps.onFocus && _this.editorProps.onFocus(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onBlur", function () {
      _this.isFocused = false;
      _this.editorProps.onBlur && _this.editorProps.onBlur(_this.state.editorState);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "requestFocus", function () {
      setTimeout(function () {
        return _this.draftInstance.focus();
      }, 0);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleKeyCommand", function (command, editorState) {
      return handlers_keyCommandHandlers(command, editorState, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleReturn", function (event, editorState) {
      return handlers_returnHandlers(event, editorState, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleBeforeInput", function (chars, editorState) {
      return beforeInputHandlers(chars, editorState, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleDrop", function (selectionState, dataTransfer) {
      return handlers_dropHandlers(selectionState, dataTransfer, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleDroppedFiles", function (selectionState, files) {
      return droppedFilesHandlers(selectionState, files, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handlePastedFiles", function (files) {
      return pastedFilesHandlers(files, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleCopyContent", function (event) {
      return handlers_copyHandlers(event, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handlePastedText", function (text, html, editorState) {
      return handlers_pastedTextHandlers(text, html, editorState, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleCompositionStart", function (event) {
      return handlers_compositionStartHandler(event, assertThisInitialized_default()(assertThisInitialized_default()(_this)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "undo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].undo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "redo", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].redo(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "removeSelectionInlineStyles", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].removeSelectionInlineStyles(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "insertHorizontalLine", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].insertHorizontalLine(_this.state.editorState));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "clearEditorContent", function () {
      _this.setValue(external_braft_utils_["ContentUtils"].clear(_this.state.editorState), function (editorState) {
        _this.setValue(external_braft_utils_["ContentUtils"].toggleSelectionIndent(editorState, 0));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleFullscreen", function (fullscreen) {
      _this.setState({
        isFullscreen: typeof fullscreen !== 'undefined' ? fullscreen : !_this.state.isFullscreen
      }, function () {
        _this.editorProps.onFullscreen && _this.editorProps.onFullscreen(_this.state.isFullscreen);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setEditorContainerNode", function (containerNode) {
      _this.containerNode = containerNode;
    });

    _this.editorProps = _this.getEditorProps(props);
    _this.editorDecorators = getDecorators(_this.editorProps.editorId || _this.editorProps.id);
    _this.isFocused = false;
    _this.isLiving = false;
    _this.braftFinder = null;
    _this.valueInitialized = !!(_this.props.defaultValue || _this.props.value);
    var defaultEditorState = (_this.props.defaultValue || _this.props.value) instanceof external_draft_js_["EditorState"] ? _this.props.defaultValue || _this.props.value : external_draft_js_["EditorState"].createEmpty(_this.editorDecorators);
    defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
    var tempColors = [];

    if (external_braft_utils_["ContentUtils"].isEditorState(defaultEditorState)) {
      var colors = external_braft_utils_["ColorUtils"].detectColorsFromDraftState(defaultEditorState.toRAW(true));
      defaultEditorState.setConvertOptions(editor_getConvertOptions(_this.editorProps));
      tempColors = filterColors(colors, _this.editorProps.colors);
    }

    _this.state = {
      tempColors: tempColors,
      editorState: defaultEditorState,
      isFullscreen: false,
      draftProps: {}
    };
    _this.containerNode = null;
    return _this;
  }

  createClass_default()(BraftEditor, [{
    key: "getEditorProps",
    value: function getEditorProps(props) {
      var _this2 = this;

      props = props || this.props;

      var _props = props,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          restProps = objectWithoutProperties_default()(_props, ["value", "defaultValue", "onChange"]); // eslint-disable-line no-unused-vars


      var propInterceptors = getPropInterceptors(restProps.editorId || restProps.id);

      if (propInterceptors.length === 0) {
        return restProps;
      }

      var porpsMap = Object(external_immutable_["Map"])(restProps);
      propInterceptors.forEach(function (interceptor) {
        porpsMap = porpsMap.merge(Object(external_immutable_["Map"])(interceptor(porpsMap.toJS(), _this2) || {}));
      });
      return porpsMap.toJS();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (editor_isControlEnabled(this.editorProps, 'media')) {
        var _this$editorProps = this.editorProps,
            language = _this$editorProps.language,
            media = _this$editorProps.media;

        var _defaultProps$media$m = objectSpread_default()({}, configs_props.media, media),
            uploadFn = _defaultProps$media$m.uploadFn,
            validateFn = _defaultProps$media$m.validateFn,
            items = _defaultProps$media$m.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isLiving = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (prevState.editorState !== this.state.editorState) {
        this.state.editorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this3 = this;

      this.editorProps = this.getEditorProps(props);
      var editorState = props.value;
      var _this$editorProps2 = this.editorProps,
          media = _this$editorProps2.media,
          language = _this$editorProps2.language;
      var currentProps = this.getEditorProps();

      if (!editor_isControlEnabled(currentProps, 'media') && editor_isControlEnabled(this.editorProps, 'media') && !this.braftFinder) {
        var _defaultProps$media$m2 = objectSpread_default()({}, configs_props.media, media),
            uploadFn = _defaultProps$media$m2.uploadFn,
            validateFn = _defaultProps$media$m2.validateFn,
            items = _defaultProps$media$m2.items;

        this.braftFinder = new external_braft_finder_default.a({
          items: items,
          language: language,
          uploader: uploadFn,
          validator: validateFn
        });
        this.forceUpdate();
      }

      if (media && media.items && this.braftFinder) {
        this.braftFinder.setItems(media.items);
      }

      var nextEditorState;

      if (!this.valueInitialized && typeof this.props.defaultValue === 'undefined' && external_braft_utils_["ContentUtils"].isEditorState(props.defaultValue)) {
        nextEditorState = props.defaultValue;
      } else if (external_braft_utils_["ContentUtils"].isEditorState(editorState)) {
        nextEditorState = editorState;
      }

      if (nextEditorState) {
        if (nextEditorState && nextEditorState !== this.state.editorState) {
          var tempColors = external_braft_utils_["ColorUtils"].detectColorsFromDraftState(nextEditorState.toRAW(true));
          nextEditorState.setConvertOptions(editor_getConvertOptions(this.editorProps));
          this.setState({
            tempColors: filterColors(toConsumableArray_default()(this.state.tempColors).concat(toConsumableArray_default()(tempColors)), currentProps.colors),
            editorState: nextEditorState
          }, function () {
            _this3.props.onChange && _this3.props.onChange(nextEditorState);
          });
        } else {
          this.setState({
            editorState: nextEditorState
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isLiving = false;
      this.controlBarInstance && this.controlBarInstance.closeBraftFinder();
    }
  }, {
    key: "lockOrUnlockEditor",
    value: function lockOrUnlockEditor(editorLocked) {
      this.setState({
        editorLocked: editorLocked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$editorProps3 = this.editorProps,
          id = _this$editorProps3.id,
          editorId = _this$editorProps3.editorId,
          controls = _this$editorProps3.controls,
          excludeControls = _this$editorProps3.excludeControls,
          extendControls = _this$editorProps3.extendControls,
          readOnly = _this$editorProps3.readOnly,
          disabled = _this$editorProps3.disabled,
          media = _this$editorProps3.media,
          language = _this$editorProps3.language,
          colors = _this$editorProps3.colors,
          colorPicker = _this$editorProps3.colorPicker,
          colorPickerTheme = _this$editorProps3.colorPickerTheme,
          colorPickerAutoHide = _this$editorProps3.colorPickerAutoHide,
          hooks = _this$editorProps3.hooks,
          fontSizes = _this$editorProps3.fontSizes,
          fontFamilies = _this$editorProps3.fontFamilies,
          emojis = _this$editorProps3.emojis,
          placeholder = _this$editorProps3.placeholder,
          fixPlaceholder = _this$editorProps3.fixPlaceholder,
          headings = _this$editorProps3.headings,
          imageControls = _this$editorProps3.imageControls,
          imageResizable = _this$editorProps3.imageResizable,
          lineHeights = _this$editorProps3.lineHeights,
          letterSpacings = _this$editorProps3.letterSpacings,
          textAligns = _this$editorProps3.textAligns,
          textBackgroundColor = _this$editorProps3.textBackgroundColor,
          allowInsertLinkText = _this$editorProps3.allowInsertLinkText,
          defaultLinkTarget = _this$editorProps3.defaultLinkTarget,
          extendAtomics = _this$editorProps3.extendAtomics,
          className = _this$editorProps3.className,
          style = _this$editorProps3.style,
          controlBarClassName = _this$editorProps3.controlBarClassName,
          controlBarStyle = _this$editorProps3.controlBarStyle,
          contentClassName = _this$editorProps3.contentClassName,
          contentStyle = _this$editorProps3.contentStyle,
          stripPastedStyles = _this$editorProps3.stripPastedStyles,
          componentBelowControlBar = _this$editorProps3.componentBelowControlBar;
      var _this$state = this.state,
          isFullscreen = _this$state.isFullscreen,
          editorState = _this$state.editorState;
      editorId = editorId || id;
      hooks = buildHooks(hooks);
      controls = controls.filter(function (item) {
        return excludeControls.indexOf(item) === -1;
      });
      language = (typeof language === 'function' ? language(languages, 'braft-editor') : languages[language]) || languages[configs_props.language];
      var externalMedias = media && media.externals ? objectSpread_default()({}, configs_props.media.externals, media.externals) : configs_props.media.externals;
      var accepts = media && media.accepts ? objectSpread_default()({}, configs_props.media.accepts, media.accepts) : configs_props.media.accepts;
      media = objectSpread_default()({}, configs_props.media, media, {
        externalMedias: externalMedias,
        accepts: accepts
      });

      if (!media.uploadFn) {
        media.video = false;
        media.audio = false;
      }

      var controlBarProps = {
        editor: this,
        editorState: editorState,
        braftFinder: this.braftFinder,
        ref: function ref(instance) {
          return _this4.controlBarInstance = instance;
        },
        getContainerNode: function getContainerNode() {
          return _this4.containerNode;
        },
        className: controlBarClassName,
        style: controlBarStyle,
        colors: toConsumableArray_default()(colors).concat(toConsumableArray_default()(this.state.tempColors)),
        colorPicker: colorPicker,
        colorPickerTheme: colorPickerTheme,
        colorPickerAutoHide: colorPickerAutoHide,
        hooks: hooks,
        editorId: editorId,
        media: media,
        controls: controls,
        language: language,
        extendControls: extendControls,
        headings: headings,
        fontSizes: fontSizes,
        fontFamilies: fontFamilies,
        emojis: emojis,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        textAligns: textAligns,
        textBackgroundColor: textBackgroundColor,
        allowInsertLinkText: allowInsertLinkText,
        defaultLinkTarget: defaultLinkTarget
      };
      var unitExportFn = editorState.convertOptions.unitExportFn;
      var commonProps = {
        editor: this,
        editorId: editorId,
        hooks: hooks,
        editorState: editorState,
        containerNode: this.containerNode,
        imageControls: imageControls,
        imageResizable: imageResizable,
        language: language,
        extendAtomics: extendAtomics
      };
      var blockRendererFn = getBlockRendererFn(commonProps, this.editorProps.blockRendererFn);
      var blockRenderMap = getBlockRenderMap(commonProps, this.editorProps.blockRenderMap);
      var blockStyleFn = getBlockStyleFn(this.editorProps.blockStyleFn);
      var customStyleMap = getCustomStyleMap(commonProps, this.editorProps.customStyleMap);
      var customStyleFn = getCustomStyleFn(commonProps, {
        fontFamilies: fontFamilies,
        unitExportFn: unitExportFn,
        customStyleFn: this.editorProps.customStyleFn
      });
      var keyBindingFn = keybindings(this.editorProps.keyBindingFn);
      var mixedProps = {};

      if (this.state.editorLocked || this.editorProps.disabled || this.editorProps.readOnly || this.editorProps.draftProps.readOnly) {
        mixedProps.readOnly = true;
      }

      if (placeholder && fixPlaceholder && editorState.isEmpty() && editorState.getCurrentContent().getFirstBlock().getType() !== 'unstyled') {
        placeholder = '';
      }

      var draftProps = objectSpread_default()({
        ref: function ref(instance) {
          _this4.draftInstance = instance;
        },
        editorState: editorState,
        handleKeyCommand: this.handleKeyCommand,
        handleReturn: this.handleReturn,
        handleBeforeInput: this.handleBeforeInput,
        handleDrop: this.handleDrop,
        handleDroppedFiles: this.handleDroppedFiles,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        onChange: this.onChange,
        onTab: this.onTab,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        blockRenderMap: blockRenderMap,
        blockRendererFn: blockRendererFn,
        blockStyleFn: blockStyleFn,
        customStyleMap: customStyleMap,
        customStyleFn: customStyleFn,
        keyBindingFn: keyBindingFn,
        placeholder: placeholder,
        stripPastedStyles: stripPastedStyles
      }, this.editorProps.draftProps, mixedProps);

      return external_react_default.a.createElement("div", {
        style: style,
        ref: this.setEditorContainerNode,
        className: "bf-container ".concat(className).concat(disabled ? ' disabled' : '').concat(readOnly ? ' read-only' : '').concat(isFullscreen ? ' fullscreen' : '')
      }, external_react_default.a.createElement(ControlBar_ControlBar, controlBarProps), componentBelowControlBar, external_react_default.a.createElement("div", {
        onCompositionStart: this.handleCompositionStart,
        className: "bf-content ".concat(contentClassName),
        onCopy: this.handleCopyContent,
        style: contentStyle
      }, external_react_default.a.createElement(external_draft_js_["Editor"], draftProps)));
    }
  }]);

  return BraftEditor;
}(external_react_default.a.Component);

defineProperty_default()(editor_BraftEditor, "defaultProps", configs_props);



// EXTERNAL MODULE: external "braft-convert"
var external_braft_convert_ = __webpack_require__(14);

// CONCATENATED MODULE: ./index.jsx
/* concated harmony reexport EditorState */__webpack_require__.d(__webpack_exports__, "EditorState", function() { return external_draft_js_["EditorState"]; });
/* concated harmony reexport getDecorators */__webpack_require__.d(__webpack_exports__, "getDecorators", function() { return getDecorators; });







external_draft_js_["EditorState"].prototype.setConvertOptions = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.convertOptions = options;
};

external_draft_js_["EditorState"].prototype.toHTML = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var convertOptions = this.convertOptions || {};
  return Object(external_braft_convert_["convertEditorStateToHTML"])(this, objectSpread_default()({}, convertOptions, options));
};

external_draft_js_["EditorState"].prototype.toRAW = function (noStringify) {
  return noStringify ? Object(external_braft_convert_["convertEditorStateToRaw"])(this) : JSON.stringify(Object(external_braft_convert_["convertEditorStateToRaw"])(this));
};

external_draft_js_["EditorState"].prototype.toText = function () {
  return this.getCurrentContent().getPlainText();
};

external_draft_js_["EditorState"].prototype.isEmpty = function () {
  return !this.getCurrentContent().hasText();
};

editor_BraftEditor.createEditorState = external_draft_js_["EditorState"].createFrom = function (content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.unitExportFn = options.unitExportFn || editor_BraftEditor.defaultProps.converts.unitExportFn;
  options.styleImportFn = compositeStyleImportFn(options.styleImportFn, options.editorId);
  options.entityImportFn = compositeEntityImportFn(options.entityImportFn, options.editorId);
  options.blockImportFn = compositeBlockImportFn(options.blockImportFn, options.editorId);
  var editorState = null;

  if (content instanceof external_draft_js_["EditorState"]) {
    editorState = content;
  } else if (typeof_default()(content) === 'object' && content && content.blocks && content.entityMap) {
    editorState = Object(external_braft_convert_["convertRawToEditorState"])(content, getDecorators(options.editorId));
  } else if (typeof content === 'string') {
    try {
      if (/^(-)?\d+$/.test(content)) {
        editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content, getDecorators(options.editorId), options, 'create');
      } else {
        editorState = external_draft_js_["EditorState"].createFrom(JSON.parse(content), options);
      }
    } catch (error) {
      editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content, getDecorators(options.editorId), options, 'create');
    }
  } else if (typeof content === 'number') {
    editorState = Object(external_braft_convert_["convertHTMLToEditorState"])(content.toLocaleString().replace(/,/g, ''), getDecorators(options.editorId), options, 'create');
  } else {
    editorState = external_draft_js_["EditorState"].createEmpty(getDecorators(options.editorId));
  }

  options.styleExportFn = compositeStyleExportFn(options.styleExportFn, options.editorId);
  options.entityExportFn = compositeEntityExportFn(options.entityExportFn, options.editorId);
  options.blockExportFn = compositeBlockExportFn(options.blockExportFn, options.editorId);
  editorState.setConvertOptions(options);
  return editorState;
};

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (createExtensibleEditor(editor_BraftEditor));
 // 2.1版本开发计划
// [ ]优化选中多行文字是插入链接报错的问题
// [ ]新增编辑器内图片删除hook
// 2.2版本开发计划
// [ ]表格功能
// [ ]美化UI，包括图标和界面风格
// 2.3版本开发计划
// [ ]初级md快捷输入支持
// [ ]图片裁切等简单的编辑功能
// [ ]允许自定义快捷键

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */,
/* 44 */,
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
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map