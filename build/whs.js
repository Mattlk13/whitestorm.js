/* WhitestormJS Framework v2.1.1 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(factory((global.WHS = global.WHS || {}),global.THREE));
}(this, (function (exports,three) { 'use strict';

var extend = function extend(object) {
  for (var _len = arguments.length, extensions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extensions[_key - 1] = arguments[_key];
  }

  // $.extend alternative, ... is the spread operator.
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extension = _step.value;

      // console.log(extension);
      // console.log(typeof extension);

      if (!extension) continue; // Ignore null and undefined objects and parameters.

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.getOwnPropertyNames(extension)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var prop = _step2.value;
          // Do not traverse the prototype chain.
          if (object[prop] !== undefined && extension[prop] && object[prop].toString() === '[object Object]' && extension[prop].toString() === '[object Object]') {
            // Goes deep only if object[prop] and extension[prop] are both objects !
            if (extension[prop].constructor === Object) extend(object[prop], extension[prop]);else object[prop] = extension[prop];
          } else object[prop] = typeof object[prop] === 'undefined' ? extension[prop] : object[prop];

          if (typeof object[prop] === 'undefined' && Array.isArray(extension[prop])) object[prop] = extension[prop].slice(); // Add values that do not already exist.
          else if (typeof object[prop] === 'undefined' && Array.isArray(extension[prop])) object[prop] = extension[prop];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return object;
};

var instruct = function instruct(array, instArray) {
  var tempObject = {};

  for (var i = 0, max = instArray.length; i < max; i++) {
    var guide = instArray[i];

    tempObject[guide] = array[i];
  }

  return tempObject;
};

var transformData = function transformData(object, instructions) {
  for (var key in instructions) {
    if (Array.isArray(object[key])) object[key] = instruct(object[key], instructions[key]);else if (object[key] instanceof Object && !Array.isArray(instructions[key])) object[key] = transformData(object[key], instructions[key]);
  }

  return object;
};

var toArray = function toArray(object, instruction) {
  var tempArray = [];

  for (var i = 0, max = instruction.length; i < max; i++) {
    var guide = instruction[i];

    tempArray[i] = object[guide];
  }

  return tempArray;
};

var minivents_commonjs = function Events(target){
  var events = {}, empty = [];
  target = target || this;
  /**
   *  On: listen to events
   */
  target.on = function(type, func, ctx){
    (events[type] = events[type] || []).push([func, ctx]);
  };
  /**
   *  Off: stop listening to event / specific callback
   */
  target.off = function(type, func){
    type || (events = {});
    var list = events[type] || empty,
        i = list.length = func ? list.length : 0;
    while(i--) func == list[i][0] && list.splice(i,1);
  };
  /** 
   * Emit: send event, callbacks will be triggered
   */
  target.emit = function(type){
    var e = events[type] || empty, list = e.length > 0 ? e.slice(0, e.length) : e, i=0, j;
    while(j=list[i++]) j[0].apply(j[1], empty.slice.call(arguments, 1));
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
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
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var CompositionError = function (_Error) {
  inherits(CompositionError, _Error);

  function CompositionError(classInstance, message, component) {
    classCallCheck(this, CompositionError);

    var _this = possibleConstructorReturn(this, (CompositionError.__proto__ || Object.getPrototypeOf(CompositionError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this.stack.split('\n');
    stackArray.splice(1, 2);

    _this.stack = stackArray.join('\n');

    if (console) console.error('Component:', component);

    _this.name = 'CompositionError';
    return _this;
  }

  return CompositionError;
}(Error);

var DependencyError = function (_Error2) {
  inherits(DependencyError, _Error2);

  function DependencyError(classInstance, message, activeModule) {
    var dependencyModule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    classCallCheck(this, DependencyError);

    var _this2 = possibleConstructorReturn(this, (DependencyError.__proto__ || Object.getPrototypeOf(DependencyError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this2.stack.split('\n');
    stackArray.splice(1, 2);

    _this2.stack = stackArray.join('\n');

    if (console) console.error('Active module:', activeModule);
    if (console && dependencyModule) console.error('Dependency published by module:', dependencyModule);

    _this2.name = 'DependencyError';
    return _this2;
  }

  return DependencyError;
}(Error);

var ManagerError = function (_Error3) {
  inherits(ManagerError, _Error3);

  function ManagerError(classInstance, message, component) {
    var activeModule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    classCallCheck(this, ManagerError);

    var _this3 = possibleConstructorReturn(this, (ManagerError.__proto__ || Object.getPrototypeOf(ManagerError)).call(this, '@' + classInstance + ': ' + message));

    var stackArray = _this3.stack.split('\n');
    stackArray.splice(1, 2);

    _this3.stack = stackArray.join('\n');

    if (console) console.error('Component:', component);
    if (console && activeModule) console.error('Active module:', activeModule);

    _this3.name = 'ManagerError';
    return _this3;
  }

  return ManagerError;
}(Error);

// Check for Three.js
var warnDeps = function warnDeps() {
  throw new Error('WhitestormJS Framework requires Three.js r84. https://threejs.org/');
};

try {
  if (!three.REVISION) warnDeps();
} catch (err) {
  warnDeps();
}

/**
 * @class ModuleSystem
 * @category core
 * @description  Provides API for classes that will use Modules.<br/>
 * This class includes basic event system with those supported methods:
 * <pre>.on()</pre><pre>.off()</pre><pre>.emit()</pre>
 * @extends Events
 * @memberof module:core
 */

var ModuleSystem = function (_Events) {
  inherits(ModuleSystem, _Events);

  function ModuleSystem() {
    classCallCheck(this, ModuleSystem);
    return possibleConstructorReturn(this, (ModuleSystem.__proto__ || Object.getPrototypeOf(ModuleSystem)).apply(this, arguments));
  }

  createClass(ModuleSystem, [{
    key: 'integrateModules',

    // INTEGRATING

    /**
     * @method integrateModules
     * @instance
     * @description This method applies all modules from .modules collection.
     * @param {Object} [source] If source (should be a component) is provided, will replace .modules with source's one before executing modules.
     * @memberof module:core.ModuleSystem
     */
    value: function integrateModules(source) {
      if (!this.modules && !source) return;
      if (source && source.modules) this.modules = source.modules.slice(0);

      if (this.modules) {
        for (var i = 0, max = this.modules.length; i < max; i++) {
          this.applyModule(this.modules[i], false);
        }
      }

      if (source) this.applyBridge({ onCopy: source });
    }

    // APPLYING MODULE (...and a "bridge" for module)

    /**
     * @method applyBridge
     * @instance
     * @description Makes component-specific API to work with modules.
     * @param {Object} bridgeMap
     * @return {Object} Returns object with modified values.
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'applyBridge',
    value: function applyBridge() {
      var bridgeMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var modules = this.modules;
      if (!modules) return bridgeMap;

      for (var i = 0, max = modules.length; i < max; i++) {
        for (var key in bridgeMap) {
          if (bridgeMap[key]) {
            var module = modules[i];

            if (module && module.bridge && module.bridge[key]) bridgeMap[key] = module.bridge[key].apply(this, [bridgeMap[key], module]);
          }
        }
      }

      return bridgeMap;
    }

    /**
     * @method applyCommand
     * @instance
     * @description .applyCommand runs a method called `name` on all modules.
     * @param {String} name the method name.
     * @param {Function} [cb=(func, moduleScope) => func.apply(this, [moduleScope])] How the function is wrapped/
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'applyCommand',
    value: function applyCommand(name) {
      var _this2 = this;

      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (func, moduleScope) {
        return func.apply(_this2, [moduleScope]);
      };

      var modules = this.modules;
      if (!modules) return;

      for (var i = 0, max = modules.length; i < max; i++) {
        var module = modules[i];
        if (name in module) cb(module[name], module);
      }
    }

    /**
     * @method applyModule
     * @instance
     * @description .applyModule is also used in .integrateModules() function.
     * It does exactly what its name says (applies module to component or app).
     * @param {Object} module the module to apply
     * @param {Boolean} [push=true]
     * @return {Object} Returns module that was applied.
     * @throws {ManagerError}
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'applyModule',
    value: function applyModule(module) {
      var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!module) return;
      if (push && this.modules) this.modules.push(module);else if (push) this.modules = [module];

      if (this.manager) this.manager.active(module);

      if (module.manager && this.manager) module.manager(this.manager);else if (module.manager) {
        throw new ManagerError('Component', 'Module requires ModuleManager that is turned off for this component', this, module);
      }

      if (module.integrate) module.integrate.bind(this)(module);

      return module;
    }

    /**
     * @method disposeModules
     * @instance
     * @description Disposes of all modules
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'disposeModules',
    value: function disposeModules() {
      while (this.modules.length) {
        this.disposeModule(this.modules[0]);
      }
    }

    /**
     * @method disposeModule
     * @instance
     * @description Disposes of the given module
     * @param {Object} module the module to dispose
     * @return {Module} Returns module that was removed.
     * @memberof module:core.ModuleSystem
     */

  }, {
    key: 'disposeModule',
    value: function disposeModule(module) {
      if (!module) return;

      this.modules.splice(this.modules.indexOf(module), 1);

      if (module.dispose) module.dispose.bind(this)(module);

      return module;
    }

    // PIPED METHOD

    /**
     * @method module
     * @instance
     * @description piped version of .applyModule().
     * @param {Object} module the module to apply
     * @return {this} returns this - app/component
     * @throws {ManagerError}
     * @memberof module:core.ModuleSystem
     * @example <caption>Piped modules</caption>
     * component
     *   .module(new Module1())
     *   .module(new Module2())
     *   .module(new Module3())
     */

  }, {
    key: 'module',
    value: function module(_module) {
      this.applyModule(_module);
      return this;
    }
  }]);
  return ModuleSystem;
}(minivents_commonjs);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$2;

if (typeof self !== 'undefined') {
  root$2 = self;
} else if (typeof window !== 'undefined') {
  root$2 = window;
} else if (typeof global !== 'undefined') {
  root$2 = global;
} else if (typeof module !== 'undefined') {
  root$2 = module;
} else {
  root$2 = Function('return this')();
}

var result = symbolObservablePonyfill(root$2);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (undefined !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

/**
 * @class ModuleManager
 * @category core
 * @param {Object} object handler
 * @description  Solves modules dependencies
 * @memberof module:core
 */
var ModuleManager = function () {
  function ModuleManager(object) {
    classCallCheck(this, ModuleManager);

    this.handler = object;
    this.currentModule = null;

    this.store = createStore(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}, ''];
      var action = arguments[1];

      state[0][action.key] = action.data;
      state[1] = action.key;

      return state;
    });

    this.modules = {};
  }

  /**
   * @method active
   * @instance
   * @description Sets .currentModule to provided module.
   * @param {Object} module the module to make current
   * @memberof module:core.ModuleManager
   */


  createClass(ModuleManager, [{
    key: 'active',
    value: function active(module) {
      this.currentModule = module;
    }

    /**
     * @method reset
     * @instance
     * @description Set's .currentModule to null.
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.currentModule = null;
    }

    /**
     * @method define
     * @instance
     * @description Define the module in manager
     * @param name The module name
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'define',
    value: function define(name) {
      this.modules[name] = this.currentModule;
    }

    /**
     * @method use
     * @instance
     * @description Get the defined module from manager
     * @param name The module name
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'use',
    value: function use(name) {
      return this.modules[name];
    }

    /**
     * @method set
     * @instance
     * @description An alias for .add() <br/><br/>
     * Use this method if you know that you will overwrite existing dependency.<br/>
     * Use it in your app, but not in module that you provide to other people.
     * @param {String} key the key of the dependency
     * @param {Object} data the value of the dependency
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'set',
    value: function set$$1(key, data) {
      this.store.dispatch({
        type: 'ADD',
        key: key,
        data: data
      });
    }

    /**
     * @method get
     * @instance
     * @description Returns dependency in store object, by key.
     * @param {String} key the key of the dependency
     * @memberof module:core.ModuleManager
     * @return {Object|Module}
     * @throws {DependencyError} if dependency is not in the store
     * @example <caption>Get the 'hello' dependency</caption>
     * manager.get('hello'); // -> {world: true}
     */

  }, {
    key: 'get',
    value: function get$$1(key) {
      if (!this.store.getState()[0][key]) {
        throw new DependencyError('ModuleManager', 'Module requires \'' + key + '\' dependency', this.currentModule);
      }

      return this.store.getState()[0][key];
    }

    /**
     * @method has
     * @instance
     * @description Returns whether manager has a dependency with the given key
     * @param {String} key the key of the dependency
     * @memberof module:core.ModuleManager
     * @return {Boolean} Promise that is resolved when all promises completed.
     * @example <caption>Check whether the store has the 'hello' dependency</caption>
     * manager.has('hello'); // -> true
     */

  }, {
    key: 'has',
    value: function has(key) {
      return Boolean(this.store.getState()[0][key]);
    }

    /**
     * @method update
     * @instance
     * @description Updates deps
     * @param {Object} [depsMap={}]
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var depsMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.store.subscribe(function () {
        var _store$getState = _this.store.getState(),
            _store$getState2 = slicedToArray(_store$getState, 2),
            data = _store$getState2[0],
            changedKey = _store$getState2[1];

        var callback = depsMap[changedKey];

        if (callback) callback(data[changedKey]);
      });
    }

    /**
     * @method add
     * @alias module:core.ModuleManager#set
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'add',
    value: function add() {
      console.warn('.add() method is deprecated. Use .set() instead');
      return this.set.apply(this, arguments);
    }

    /**
     * @method require
     * @instance
     * @description Require module
     * @param {String} name Defined name
     * @param {Function} moduleExecutor Function that returns applied module
     * @memberof module:core.ModuleManager
     */

  }, {
    key: 'require',
    value: function require(name, moduleExecutor) {
      if (this.use(name) === undefined) this.handler.applyModule(moduleExecutor());
    }
  }]);
  return ModuleManager;
}();

var _class;
var _temp;

/**
 * @class Component
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends ModuleSystem
 * @memberof module:core
 */
var Component = (_temp = _class = function (_ModuleSystem) {
  inherits(Component, _ModuleSystem);

  // For keeping children components;

  // Collection of promises;

  /**
   * Collection of `modules`.
   * @member {Array} module:core.Component#modules
   * @public
   */


  /**
   * Static instructions
   * @member {Object} module:core.Component#instructions
   * @static
   * @default {}
   */
  function Component() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Component.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Component.instructions;
    classCallCheck(this, Component);

    // Apply polyfilled parameters to .params;
    var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

    _this._wait = [];
    _this.modules = [];
    _this.children = [];
    _this.params = extend(transformData(params, instructions), defaults$$1);
    if (_this.params.manager) _this.manager = new ModuleManager();

    _this.modules = _this.params.modules;

    _this.integrateModules();
    return _this;
  }

  /**
   * @method wait
   * @instance
   * @description Wait for a promise.
   * @param {Promise} [promise] - The promise that should be added to a queue.
   * @return {Promise} Promise that is resolved when all promises completed.
   * @memberof module:core.Component
   */
  // Collection of modules;

  /**
   * Collection of `child` Components.
   * @member {Array} module:core.Component#children
   * @public
   */


  /**
   * Array of promises that should be resolved before Component is ready.
   * @member {Array} module:core.Component#_wait
   * @private
   */

  /**
   * Default values for parameters
   * @member {Object} module:core.Component#defaults
   * @static
   * @default {
   *   modules: [],
   *   manager: true
   * }
   */


  createClass(Component, [{
    key: 'wait',
    value: function wait(promise) {
      if (promise) this._wait.push(promise);
      return Promise.all(this._wait);
    }

    /**
     * @method defer
     * @instance
     * @description Execute `func` (Callback) when Component is ready.
     * @param {Function} func - Callback.
     * @memberof module:core.Component
     */

  }, {
    key: 'defer',
    value: function defer(func) {
      var _this2 = this;

      if (this.isDeffered) this.wait().then(function () {
        return func(_this2);
      });else func(this);
    }

    // PARAMETERS

    /**
     * @method updateParams
     * @instance
     * @description Updates parameters of the Component.
     * @return {Object} Params of this Component
     * @memberof module:core.Component
     */

  }, {
    key: 'updateParams',
    value: function updateParams() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.params = extend(params, this.params);
      return this.params;
    }

    // COPYING & CLONING

    /**
     * @method clone
     * @instance
     * @description Clone this component
     * @return {object} a cloned component with all its source component' params copied.
     * @memberof module:core.Component
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor(this.params).copy(this);
    }

    /**
     * @method copy
     * @instance
     * @description Copy source native and integrate `modules` to it.
     * @param {Component} source - Source component that is used for `copy()` action.
     * @param {Function} [customize] - Callback executed before modules integration process.
     * @return {this} Component
     * @memberof module:core.Component
     */

  }, {
    key: 'copy',
    value: function copy(source, customize) {
      this.params = _extends({}, source.params);

      if (source.native) this.native = source.native.clone(source.params);
      if (customize) customize();
      this.integrateModules(source);

      return this;
    }

    /**
     * @method add
     * @instance
     * @description Add a child `Component`.
     * @param {Component} object - Component that should be added as a `child`.
     * @return {Promise} Resolved when action is done.
     * @memberof module:core.Component
     */

  }, {
    key: 'add',
    value: function add(object) {
      var _this3 = this;

      object.parent = this;

      return new Promise(function (resolve, reject) {
        _this3.defer(function () {
          var native = object.native;

          if (!native) reject();

          var addPromise = _this3.applyBridge({ onAdd: object }).onAdd;

          var resolver = function resolver() {
            _this3.native.add(native);
            _this3.children.push(object);

            resolve(object);
          };

          if (addPromise instanceof Promise) addPromise.then(resolver);else resolver();
        });
      });
    }

    /**
     * @method remove
     * @instance
     * @description Remove a child `Component`.
     * @param {Component} object - Component that should be a **child** of this Component.
     * @memberof module:core.Component
     */

  }, {
    key: 'remove',
    value: function remove(object) {
      object.parent = null;
      this.native.remove(object.native);
    }

    /**
     * @method addTo
     * @instance
     * @description Adds `this` Component to specified `App`/`Component`.
     * @param {Component} object - Component that will be a parent of `this`.
     * @memberof module:core.Component
     */

  }, {
    key: 'addTo',
    value: function addTo(object) {
      return object.add(this);
    }

    /**
     * Returns whether the object is `async` (`wait` promises are more than `0`).
     * @member {Boolean} module:core.Component#isDeffered
     */

  }, {
    key: 'isDeffered',
    get: function get$$1() {
      return this._wait.length > 0;
    }

    /**
     * Returns the `ModuleManager` used for this component.
     * @member {ModuleManager} module:core.Component#manager
     * @throws {ManagerError}
     */

  }, {
    key: 'manager',
    get: function get$$1() {
      if (this._manager) return this._manager;

      throw new ManagerError('Component', 'ModuleManager is not used in this component. \'manager\' parameter should be set as \'true\'', this);
    },
    set: function set$$1(manager) {
      this._manager = manager;
    }

    /**
     * Returns the `native` object used for this component.
     * @member {Object} module:core.Component#native
     */

  }, {
    key: 'native',
    get: function get$$1() {
      return this._native;
    },
    set: function set$$1(mesh) {
      this._native = mesh;
      this._native.component = this;
      return this._native;
    }
  }]);
  return Component;
}(ModuleSystem), _class.defaults = {
  modules: null,
  manager: true
}, _class.instructions = {}, _temp);

function attributes() {
  for (var _len = arguments.length, mappers = Array(_len), _key = 0; _key < _len; _key++) {
    mappers[_key] = arguments[_key];
  }

  return function (target) {
    for (var i = 0; i < mappers.length; i++) {
      var mapper = mappers[i];

      for (var k = 0; k < mapper.map.length; k++) {
        var attribute = mapper.map[k];

        Object.defineProperty(target.prototype, attribute, {
          get: mapper.getter(attribute),
          set: mapper.setter(attribute),
          configurable: mapper.configurable,
          enumerable: mapper.enumerable
        });
      }
    }
  };
}

function copy() {
  for (var _len2 = arguments.length, map = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    map[_key2] = arguments[_key2];
  }

  return {
    map: map,
    getter: function getter(name) {
      return function () {
        return this.native[name];
      };
    },
    setter: function setter(name) {
      return function (value) {
        this.native[name].copy(value);
      };
    },

    configurable: true,
    enumerable: true
  };
}

function mirror() {
  for (var _len3 = arguments.length, map = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    map[_key3] = arguments[_key3];
  }

  return {
    map: map,
    getter: function getter(name) {
      return function () {
        return this.native[name];
      };
    },
    setter: function setter(name) {
      return function (value) {
        this.native[name] = value;
      };
    },

    configurable: true,
    enumerable: true
  };
}

var _dec;
var _class$1;
var _class2;
var _temp$1;

/**
 * @class MeshComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var MeshComponent = (_dec = attributes(copy('position', 'rotation', 'quaternion', 'scale'), mirror('material', 'geometry')), _dec(_class$1 = (_temp$1 = _class2 = function (_Component) {
  inherits(MeshComponent, _Component);
  createClass(MeshComponent, null, [{
    key: 'custom',


    // CUSTOM GEOMETRY HANDLING

    /**
     * Default values for parameters
     * @member {Object} module:core.MeshComponent#defaults
     * @static
     * @default
     * {
     *   build: true,
     *   geometry: {},
     *   material: false,
     *
     *   shadow: {
     *     cast: true,
     *     receive: true
     *   },
     *
     *   position: {x: 0, y: 0, z: 0},
     *   rotation: {x: 0, y: 0, z: 0},
     *   scale: {x: 1, y: 1, z: 1}
     * }
     */
    value: function custom(geom) {
      var constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : three.Mesh;

      return function (_MeshComponent) {
        inherits(_class3, _MeshComponent);

        function _class3() {
          classCallCheck(this, _class3);
          return possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
        }

        createClass(_class3, [{
          key: 'build',
          value: function build() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

            var _applyBridge = this.applyBridge({
              geometry: geom,
              material: params.material
            }),
                geometry = _applyBridge.geometry,
                material = _applyBridge.material;

            return this.applyBridge({ mesh: new constructor(geometry, material) }).mesh;
          }
        }]);
        return _class3;
      }(MeshComponent);
    }

    /**
     * Static instructions
     * @member {Object} module:core.MeshComponent#instructions
     * @static
     * @default
     * {
     *   position: ['x', 'y', 'z'],
     *   rotation: ['x', 'y', 'z'],
     *   scale: ['x', 'y', 'z']
     * }
     */

  }, {
    key: 'create',
    value: function create(geom, params, constructor) {
      return new (MeshComponent.custom(geom, constructor))(params);
    }
  }]);

  function MeshComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MeshComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MeshComponent.instructions;
    classCallCheck(this, MeshComponent);

    var _this = possibleConstructorReturn(this, (MeshComponent.__proto__ || Object.getPrototypeOf(MeshComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('MeshComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        _this.wait(build);

        _this.wait(new Promise(function (resolve) {
          build.then(function (native) {
            _this.native = native;
            _this.wrap().then(resolve);
          });
        }));
      } else {
        _this.native = build;
        _this.wait(_this.wrap());
      }
    }

    _this.applyCommand('postIntegrate');
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.MeshComponent
   */


  createClass(MeshComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('MeshComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this3 = this;

      return new Promise(function (resolve) {
        // TODO: Fix defer with physics
        // this.defer(() => {
        var _params = _this3.params,
            position = _params.position,
            rotation = _params.rotation,
            scale = _params.scale,
            shadow = _params.shadow;


        _this3.position.set(position.x, position.y, position.z);
        _this3.rotation.set(rotation.x, rotation.y, rotation.z);
        _this3.scale.set(scale.x, scale.y, scale.z);

        _this3.native.castShadow = shadow.cast;
        _this3.native.receiveShadow = shadow.receive;

        _this3.applyBridge({ onWrap: 1 });

        resolve(_this3);
        // });
      });
    }

    // COPYING & CLONING

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} MeshComponent
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this4 = this;

      return get(MeshComponent.prototype.__proto__ || Object.getPrototypeOf(MeshComponent.prototype), 'copy', this).call(this, source, function () {
        _this4.position.copy(source.position);
        _this4.rotation.copy(source.rotation);
        _this4.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this MeshComponent using `.copy()`
     * @return {MeshComponent} clone of this object
     * @memberof module:core.MeshComponent
     */

  }, {
    key: 'clone',
    value: function clone(geometry, material) {
      var dest = new this.constructor({ build: false }).copy(this);

      if (geometry) dest.geometry = dest.geometry.clone();
      if (material) dest.material = dest.material.clone();

      return dest;
    }
  }]);
  return MeshComponent;
}(Component), _class2.defaults = _extends({}, Component.defaults, {

  build: true,
  geometry: {},
  material: false,

  shadow: {
    cast: true,
    receive: true
  },

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 }
}), _class2.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z'],
  scale: ['x', 'y', 'z']
}, _temp$1)) || _class$1);

var _dec$1;
var _class$2;
var _class2$1;
var _temp$2;

/**
 * @class LightComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var LightComponent = (_dec$1 = attributes(copy('position', 'rotation', 'quaternion', 'target')), _dec$1(_class$2 = (_temp$2 = _class2$1 = function (_Component) {
  inherits(LightComponent, _Component);

  /**
   * Default values for parameters
   * @member {Object} module:core.LightComponent#defaults
   * @static
   * @default
   * {
   *   build: true,
   *
   *   shadow: {
   *     cast: true,
   *
   *     bias: 0,
   *     radius: 1,
   *
   *     mapSize: {
   *       width: 1024,
   *       height: 1024
   *     },
   *
   *     camera: {
   *       near: true,
   *       far: 400,
   *       fov: 90,
   *
   *       top: 200,
   *       bottom: -200,
   *       left: -200,
   *       right: 200
   *     }
   *   },
   *
   *   position: {x: 0, y: 0, z: 0},
   *   rotation: {x: 0, y: 0, z: 0}
   * }
   */
  function LightComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LightComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LightComponent.instructions;
    classCallCheck(this, LightComponent);

    var _this = possibleConstructorReturn(this, (LightComponent.__proto__ || Object.getPrototypeOf(LightComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('LightComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        build.then(function (native) {
          _this.native = native;
        });
      } else _this.native = build;

      _this.wait(_this.wrap());
    }

    _this.applyCommand('postIntegrate');
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @instance
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.LightComponent
   */


  /**
   * Static instructions
   * @member {Object} module:core.LightComponent#instructions
   * @static
   * @default
   * {
   *   position: ['x', 'y', 'z'],
   *   rotation: ['x', 'y', 'z']
   * }
   */


  createClass(LightComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('MeshComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.defer(function () {
          var _params = _this2.params,
              position = _params.position,
              rotation = _params.rotation;


          _this2.position.set(position.x, position.y, position.z);
          _this2.rotation.set(rotation.x, rotation.y, rotation.z);

          _this2.applyBridge({ onWrap: 1 });

          resolve(_this2);
        });
      });
    }

    /**
     * @method wrapShadow
     * @instance
     * @description Wraps shadow properties
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'wrapShadow',
    value: function wrapShadow() {
      var native = this.native,
          shadow = this.params.shadow;


      native.castShadow = shadow.cast;
      native.shadow.mapSize.width = shadow.mapSize.width;
      native.shadow.mapSize.height = shadow.mapSize.height;
      native.shadow.bias = shadow.bias;
      native.shadow.radius = shadow.radius;

      var shadowCamera = native.shadow.camera;
      var camera = shadow.camera;

      shadowCamera.near = camera.near;
      shadowCamera.far = camera.far;
      shadowCamera.fov = camera.fov;

      shadowCamera.left = camera.left;
      shadowCamera.right = camera.right;
      shadowCamera.top = camera.top;
      shadowCamera.bottom = camera.bottom;
    }

    // COPYING & CLONING

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} LightComponent
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this3 = this;

      return get(LightComponent.prototype.__proto__ || Object.getPrototypeOf(LightComponent.prototype), 'copy', this).call(this, source, function () {
        if (_this3.target) _this3.target.copy(source.target());

        _this3.position.copy(source.position);
        _this3.rotation.copy(source.rotation);
        _this3.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this LightComponent using `.copy()`
     * @return {LightComponent} clone of this object
     * @memberof module:core.LightComponent
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor({ build: false }).copy(this);
    }
  }]);
  return LightComponent;
}(Component), _class2$1.defaults = _extends({}, Component.defaults, {

  build: true,

  shadow: {
    cast: true,

    bias: 0,
    radius: 1,

    mapSize: {
      width: 1024,
      height: 1024
    },

    camera: {
      near: true,
      far: 400,
      fov: 90,

      top: 200,
      bottom: -200,
      left: -200,
      right: 200
    }
  },

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }
}), _class2$1.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z']
}, _temp$2)) || _class$2);

var _dec$2;
var _class$3;
var _class2$2;
var _temp$3;

/**
 * @class CameraComponent
 * @category core
 * @param {Object} [params] - The parameters object.
 * @param {Object} [instructions] - The instructions object.
 * @extends module:core.Component
 * @memberof module:core
 */
var CameraComponent = (_dec$2 = attributes(copy('position', 'rotation', 'quaternion', 'target')), _dec$2(_class$3 = (_temp$3 = _class2$2 = function (_Component) {
  inherits(CameraComponent, _Component);

  /**
   * Default values for parameters
   * @member {Object} module:core.CameraComponent#defaults
   * @static
   * @default
   * {
   *   build: true,
   *
   *   position: {x: 0, y: 0, z: 0},
   *   rotation: {x: 0, y: 0, z: 0}
   * }
   */
  function CameraComponent(params) {
    var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CameraComponent.defaults;
    var instructions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CameraComponent.instructions;
    classCallCheck(this, CameraComponent);

    var _this = possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).call(this, params, defaults$$1, instructions));

    if (_this.params.build) {
      var build = _this.build(_this.params);

      if (!build) {
        throw new CompositionError('CameraComponent', '.build() method should return a THREE.Object3D or a Promise resolved with THREE.Object3D.', _this);
      }

      if (build instanceof Promise) {
        build.then(function (native) {
          _this.native = native;
        });
      } else _this.native = build;

      _this.wait(_this.wrap());
    }

    _this.applyCommand('postIntegrate');
    return _this;
  }

  // BUILDING & WRAPPING

  /**
   * @method build
   * @instance
   * @description Build livecycle should return a native object.
   * @throws {CompositionError}
   * @memberof module:core.CameraComponent
   */


  /**
   * Static instructions
   * @member {Object} module:core.CameraComponent#instructions
   * @static
   * @default
   * {
   *   position: ['x', 'y', 'z'],
   *   rotation: ['x', 'y', 'z'],
   *   scale: ['x', 'y', 'z']
   * }
   */


  createClass(CameraComponent, [{
    key: 'build',
    value: function build() {
      throw new CompositionError('CameraComponent', 'Instance should have it\'s own .build().', this);
    }

    /**
     * @method wrap
     * @instance
     * @description Wraps transforms (`position` & `rotation`)
     * @return {Promise} Resolved when action is completed
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'wrap',
    value: function wrap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.defer(function () {
          _this2.position.set(_this2.params.position.x, _this2.params.position.y, _this2.params.position.z);
          _this2.rotation.set(_this2.params.rotation.x, _this2.params.rotation.y, _this2.params.rotation.z);

          _this2.applyBridge({ onWrap: 1 });

          resolve(_this2);
        });
      });
    }

    /**
     * @method copy
     * @instance
     * @description Copy source transforms & execute `Component.copy()`
     * @return {this} CameraComponent
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'copy',
    value: function copy$$1(source) {
      var _this3 = this;

      return get(CameraComponent.prototype.__proto__ || Object.getPrototypeOf(CameraComponent.prototype), 'copy', this).call(this, source, function () {
        if (_this3.target) _this3.target.copy(source.target());

        _this3.position.copy(source.position);
        _this3.rotation.copy(source.rotation);
        _this3.quaternion.copy(source.quaternion);
      });
    }

    /**
     * @method clone
     * @instance
     * @description Make a clone of this CameraComponent using `.copy()`
     * @return {CameraComponent} clone of this object
     * @memberof module:core.CameraComponent
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor({ build: false }).copy(this);
    }
  }]);
  return CameraComponent;
}(Component), _class2$2.defaults = _extends({}, Component.defaults, {

  build: true,

  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }
}), _class2$2.instructions = {
  position: ['x', 'y', 'z'],
  rotation: ['x', 'y', 'z'],
  scale: ['x', 'y', 'z']
}, _temp$3)) || _class$3);

const version = "2.1.1";

var system = {
  window: typeof window === 'undefined' ? global : window
};

/**
 * @class App
 * @category core
 * @description This component is used to prepare a world scene, setup physics, camera, renderer and all other things that you usually do before making meshes.
 * @param {Array} [modules=[]] - Array of Modules
 * @extends ModuleSystem
 * @memberof module:core
 */

var App = function (_ModuleSystem) {
  inherits(App, _ModuleSystem);

  /**
   * @description Defines whether the scene should render or not
   * @member {Boolean} module:core.App#updateEnabled
   * @public
   */
  function App() {
    var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, App);

    console.log('WHS.App ' + version);

    var _this = possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.simulate = false;
    _this.updateEnabled = true;
    _this.loops = [];

    _this.manager = new ModuleManager(_this);
    _this.modules = modules;

    _this.integrateModules();
    return _this;
  }

  // CONTROLS & UPDATING

  /**
   * @method start
   * @description Start rendering loop and physics simulation (if you use version with physics).
   * @memberof module:core.App
   */

  /**
   * Loops in this app
   * @description Array of loops that are executed by this app.
   * @member {Array} module:core.App#loops
   * @public
   */

  /**
   * Simulate flag
   * @description Same as .updateEnabled, but for physics. Defines if physics is simulated each frame.
   * @member {Boolean} module:core.App#simulate
   * @public
   */


  createClass(App, [{
    key: 'start',
    value: function start() {
      var requestAnimFrame = function () {
        return system.window.requestAnimationFrame || system.window.webkitRequestAnimationFrame || system.window.mozRequestAnimationFrame || function (callback) {
          system.window.setTimeout(callback, 1000 / 60);
        };
      }();

      var loops = this.loops,
          updateEnabled = this.updateEnabled;


      function process() {
        requestAnimFrame(process);
        if (!updateEnabled) return;

        for (var i = 0, ll = loops.length; i < ll; i++) {
          var e = loops[i];
          if (e.enabled) e.execute(e.clock);
        }
      }

      this.updateEnabled = true;
      process();
    }

    /**
     * @method stop
     * @description Stops rendering loops
     * @memberof module:core.App
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.updateEnabled = false;
    }

    /**
     * @method addLoop
     * @description Adds loop to this app.
     * @param {Object} loop - the loop to add
     * @return {Promise} Promise that is resolved when promises completed.
     * @memberof module:core.App
     * @example <caption>Adding a loop to an app</caption>
     * const loop = new Loop(() => {
     *  // ...
     * });
     *
     * const app = new App();
     *
     * app.addLoop(loop);
     * loop.start();
     */

  }, {
    key: 'addLoop',
    value: function addLoop(loop) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.loops.push(loop);
        resolve(loop);
      });
    }

    /**
     * @method removeLoop
     * @description Removes loop from this app.
     * @param {Object} loop - the loop to remove
     * @return {Promise} Promise that is resolved when promises completed.
     * @memberof module:core.App
     */

  }, {
    key: 'removeLoop',
    value: function removeLoop(loop) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var index = _this3.loops.indexOf(loop);
        if (index !== -1) _this3.loops.splice(index, 1);

        resolve(loop);
      });
    }
  }, {
    key: 'get',
    value: function get$$1(key) {
      return this.manager.get(key);
    }
  }, {
    key: 'use',
    value: function use(key) {
      return this.manager.use(key);
    }
  }]);
  return App;
}(ModuleSystem);

/**
 * @class Loop
 * @category core
 * @param {Function} func function to execute on each animation frame
 * @param {Boolean} [useClock=true] passes a Clock to the function when called, if true
 * @memberof module:core
 */

var Loop = function () {
  function Loop(func) {
    var useClock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    classCallCheck(this, Loop);

    this.func = func;
    this.clock = useClock ? new three.Clock() : null;
    this.enabled = false;
  }

  // CONTROLS

  /**
   * @method start
   * @instance
   * @description Starts this loop, clock if it has one. Won't do anything if loop enabled already.
   * @param {Component} [world] app to add this loop to, if provided.
   * @memberof module:core.Loop
   */


  createClass(Loop, [{
    key: 'start',
    value: function start(world) {
      if (this.enabled) return;

      if (world) world.addLoop(this);

      if (this.clock) this.clock.start();
      this.enabled = true;
    }

    /**
     * @method stop
     * @instance
     * @description Stops this loop and its clock if it has one, won't do anything if this loop is not enabled)
     * @param {Component} [world] app to remove this loop from, if provided.
     * @memberof module:core.Loop
     */

  }, {
    key: 'stop',
    value: function stop(world) {
      if (!this.enabled) return;

      if (this.clock) this.clock.stop();
      this.enabled = false;

      if (world) world.removeLoop(this);
    }

    // EXECUTION

    /**
     * @method execute
     * @instance
     * @description Executes the function of this loop
     * @memberof module:core.Loop
     * @returns {*} whatever the function of this loop returns
     */

  }, {
    key: 'execute',
    value: function execute() {
      return this.func(this.clock);
    }
  }]);
  return Loop;
}();

/** @module core */

var _class$4;
var _temp$4;

/**
 * @class AmbientLight
 * @category components/lights
 * @description AmbientLight is a simple class, it extends Light and inherits all its methods.
 * AmbientLight creates basic light around all scene, so it doesn't need properties like pos or target.
 * It supports only color and intensity as parameters, which defines the color of the surrounded light and intensity of light.
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating an AmbientLight </caption>
 * new AmbientLight({
 *   color: 0xffffff,
 *   intensity: 0.2
 * }).addTo(world);
 */
var AmbientLight$1 = (_temp$4 = _class$4 = function (_LightComponent) {
  inherits(AmbientLight$$1, _LightComponent);

  function AmbientLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, AmbientLight$$1);
    return possibleConstructorReturn(this, (AmbientLight$$1.__proto__ || Object.getPrototypeOf(AmbientLight$$1)).call(this, params, AmbientLight$$1.defaults));
  }

  createClass(AmbientLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.AmbientLight(params.color, params.intensity) }).light;
    }
  }]);
  return AmbientLight$$1;
}(LightComponent), _class$4.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1
}), _temp$4);

var _class$5;
var _temp$5;

/**
 * @class DirectionalLight
 * @category components/lights
 * @description DirectinalLight creates a light that shines from a specific direction not from a specific position.<br/><br/>
 * This light will behave as though it is infinitely far away and the rays produced from it are all parallel. <br/><br/>
 * The best analogy would be a light source that acts like the sun: the sun is so far away that all sunlight hitting objects comes from the same angle.<br/><br/>
 * It has the same options as AmbientLight in light paramater, but it also supports pos and target paramaters.
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a DirectionalLight to fall down from vec3(10, 20, 10) to vec3(0, 0, 0)</caption>
 * new DirectionalLight({
 *   color: 0xffffff,
 *   intensity: 0.2,
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var DirectionalLight$1 = (_temp$5 = _class$5 = function (_LightComponent) {
  inherits(DirectionalLight$$1, _LightComponent);

  function DirectionalLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, DirectionalLight$$1);

    var _this = possibleConstructorReturn(this, (DirectionalLight$$1.__proto__ || Object.getPrototypeOf(DirectionalLight$$1)).call(this, params, DirectionalLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(DirectionalLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.DirectionalLight(params.color, params.intensity) }).light;
    }
  }]);
  return DirectionalLight$$1;
}(LightComponent), _class$5.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1
}), _temp$5);

var _class$6;
var _temp$6;

/**
 * @class HemisphereLight
 * @category components/lights
 * @description HemisphereLight is a light source positioned directly above the scene.<br/>
 * It also doesn't need position and target properties.
 * @classDesc
 * <iframe src="https://threejs.org/examples/webgl_lights_hemisphere.html"></iframe>
 * @param {Object} [params={light: {skyColor: 0xffffff, groundColor: 0xffffff, intensity: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a HemisphereLight</caption>
 * new HemisphereLight({
 *   skyColor: 0xff0000,
 *   groundColor: 0x0000ff,
 *   intensity: 0.2
 * }).addTo(app);
 */
var HemisphereLight$1 = (_temp$6 = _class$6 = function (_LightComponent) {
  inherits(HemisphereLight$$1, _LightComponent);

  function HemisphereLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, HemisphereLight$$1);
    return possibleConstructorReturn(this, (HemisphereLight$$1.__proto__ || Object.getPrototypeOf(HemisphereLight$$1)).call(this, params, HemisphereLight$$1.defaults));
  }

  createClass(HemisphereLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.HemisphereLight(params.skyColor, params.groundColor, params.intensity) }).light;
    }
  }]);
  return HemisphereLight$$1;
}(LightComponent), _class$6.defaults = _extends({}, LightComponent.defaults, {

  skyColor: 0xffffff,
  groundColor: 0xffffff,
  intensity: 1
}), _temp$6);

var _class$7;
var _temp$7;

/**
 * @class PointLight
 * @category components/lights
 * @description PointLight creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)<br/><br/>
 * It has the same options as AmbientLight in light paramater, but it also supports position, distance and decay.<br/>
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1, distance: 100, decay: 1}}] - The params.
 * @extends LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a PointLight</caption>
 * new PointLight( {
 *   color: 0xff0000,
 *   intensity: 2,
 *   distance: 300
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var PointLight$1 = (_temp$7 = _class$7 = function (_LightComponent) {
  inherits(PointLight$$1, _LightComponent);

  function PointLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, PointLight$$1);

    var _this = possibleConstructorReturn(this, (PointLight$$1.__proto__ || Object.getPrototypeOf(PointLight$$1)).call(this, params, PointLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(PointLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.PointLight(params.color, params.intensity, params.distance, params.decay) }).light;
    }
  }]);
  return PointLight$$1;
}(LightComponent), _class$7.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  distance: 100,
  decay: 1
}), _temp$7);

var _class$8;
var _temp$8;

/**
 * @class SpotLight
 * @category components/lights
 * @description SpotLight creates spot light that can cast shadow in one direction. <br/><br/>
 * It has the same parameters as AmbientLight in light, but it also supports pos and target. <br/><br/>
 * SpotLight affects meshes with lambert and phong material.
 * @classDesc
 * <iframe src="https://threejs.org/examples/webgl_lights_spotlight.html"></iframe>
 * @param {Object} [params={light: {color: 0xffffff, intensity: 1, distance: 100, angle: Math.PI / 3, exponent: 0, decay: 1}}] - The params.
 * @extends module:core.LightComponent
 * @memberof module:components/lights
 * @example <caption>Creating a SpotLight that falls down from vec3(10, 20, 10) to vec3(0, 0, 0)</caption>
 * new SpotLight({
 *   color: 0x00ff00,
 *   intensity: 3,
 *   distance: 1000
 *
 *   position: [10, 20, 10]
 * }).addTo(app);
 */
var SpotLight$1 = (_temp$8 = _class$8 = function (_LightComponent) {
  inherits(SpotLight$$1, _LightComponent);

  function SpotLight$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, SpotLight$$1);

    var _this = possibleConstructorReturn(this, (SpotLight$$1.__proto__ || Object.getPrototypeOf(SpotLight$$1)).call(this, params, SpotLight$$1.defaults));

    _this.wrapShadow();
    return _this;
  }

  createClass(SpotLight$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.SpotLight(params.color, params.intensity, params.distance, params.angle, params.exponent, params.decay) }).light;
    }
  }]);
  return SpotLight$$1;
}(LightComponent), _class$8.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  distance: 100,
  angle: Math.PI / 3,
  exponent: 0,
  decay: 1
}), _temp$8);

var _class$9;
var _temp$9;

var AreaLight = (_temp$9 = _class$9 = function (_LightComponent) {
  inherits(AreaLight, _LightComponent);

  function AreaLight() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, AreaLight);
    return possibleConstructorReturn(this, (AreaLight.__proto__ || Object.getPrototypeOf(AreaLight)).call(this, params, AreaLight.defaults));
  }

  createClass(AreaLight, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ light: new three.RectAreaLight(params.color, params.intensity, params.width, params.height) }).light;
    }
  }]);
  return AreaLight;
}(LightComponent), _class$9.defaults = _extends({}, LightComponent.defaults, {

  color: 0xffffff,
  intensity: 1,
  width: 10,
  height: 10
}), _temp$9);

/** @module components/lights */

var _class$10;
var _temp$10;

/**
 * @class CubeCamera
 * @category components/cameras
 * @description Creates 6 cameras that render to a WebGLRenderTargetCube
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Creates a CubeCamera and set it as app's camera</caption>
 * const camera = new CubeCamera({
 *   camera: {
 *     cubeResolution: 256
 *   },
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * });
 *
 * app.camera = camera;
 */
var CubeCamera$1 = (_temp$10 = _class$10 = function (_CameraComponent) {
  inherits(CubeCamera$$1, _CameraComponent);

  function CubeCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CubeCamera$$1);
    return possibleConstructorReturn(this, (CubeCamera$$1.__proto__ || Object.getPrototypeOf(CubeCamera$$1)).call(this, params, CubeCamera$$1.defaults));
  }

  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.CubeCamera#defaults
   * @static
   * @default <pre>
   * {
   *   camera: {
   *     near: 1,
   *     far: 1000,
   *     cubeResolution: 128
   *   }
   * }</pre>
   */


  createClass(CubeCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.CubeCamera(params.near, params.far, params.cubeResolution) }).camera;
    }
  }]);
  return CubeCamera$$1;
}(CameraComponent), _class$10.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  cubeResolution: 128
}), _temp$10);

var _class$11;
var _temp$11;

/**
 * @class OrthographicCamera
 * @category components/cameras
 * @description Camera with orthographic projection.
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Create an OrthographicCamera and set it as app's camera</caption>
 * const camera = new OrthographicCamera({
 *   camera: {
 *     far: 10000
 *   },
 *
 *   position: {
 *     y: 50
 *   }
 * });
 *
 * app.camera = camera;
 */
var OrthographicCamera$1 = (_temp$11 = _class$11 = function (_CameraComponent) {
  inherits(OrthographicCamera$$1, _CameraComponent);

  function OrthographicCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, OrthographicCamera$$1);
    return possibleConstructorReturn(this, (OrthographicCamera$$1.__proto__ || Object.getPrototypeOf(OrthographicCamera$$1)).call(this, params, OrthographicCamera$$1.defaults));
  }
  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.OrthographicCamera#defaults
   * @static
   * @default <pre>
   * {
   *   near: 1,
   *   far: 1000,
   *   left: system.window.innerWidth / -2,
   *   right: system.window.innerWidth / 2,
   *   top: system.window.innerHeight / 2,
   *   bottom: system.window.innerHeight / -2
   * }</pre>
   */


  createClass(OrthographicCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.OrthographicCamera(params.left, params.right, params.top, params.bottom, params.near, params.far) }).camera;
    }
  }]);
  return OrthographicCamera$$1;
}(CameraComponent), _class$11.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  left: system.window.innerWidth / -2,
  right: system.window.innerWidth / 2,
  top: system.window.innerHeight / 2,
  bottom: system.window.innerHeight / -2
}), _temp$11);

var _class$12;
var _temp$12;

/**
 * @class PerspectiveCamera
 * @description Camera with perspective projection.
 * @category components/cameras
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends module:core.CameraComponent
 * @example <caption>Create an PerspectiveCamera and set it as app's camera</caption>
 * const camera = new PerspectiveCamera({
 *   fov: 75,
 *   aspect: window.innerWidth / window.innerHeight,
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * });
 *
 * app.camera = camera;
 */
var PerspectiveCamera$1 = (_temp$12 = _class$12 = function (_CameraComponent) {
  inherits(PerspectiveCamera$$1, _CameraComponent);

  function PerspectiveCamera$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, PerspectiveCamera$$1);
    return possibleConstructorReturn(this, (PerspectiveCamera$$1.__proto__ || Object.getPrototypeOf(PerspectiveCamera$$1)).call(this, params, PerspectiveCamera$$1.defaults));
  }
  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.PerspectiveCamera#defaults
   * @static
   * @default <pre>
   * {
   *   near: 1,
   *   far: 1000,
   *   fov: 75,
   *   aspect: system.window.innerWidth / system.window.innerHeight
   * }</pre>
   */


  createClass(PerspectiveCamera$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.applyBridge({ camera: new three.PerspectiveCamera(params.fov, params.aspect, params.near, params.far) }).camera;
    }
  }]);
  return PerspectiveCamera$$1;
}(CameraComponent), _class$12.defaults = _extends({}, CameraComponent.defaults, {

  near: 1,
  far: 1000,
  fov: 75,
  aspect: system.window.innerWidth / system.window.innerHeight
}), _temp$12);

/** @module components/cameras */

var _class$13;
var _temp$13;

/**
 * @class Box
 * @category components/meshes
 * @description As told on Component definition, while you can pass any of the inherited params for this component construction, you will need to
 * pass specific parameters to build this mesh as a geometry object.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Box, and adding to app</caption>
 *  new Box({
 *    geometry: {
 *      width: 2,
 *      height: 2,
 *      depth: 2
 *    },
 *
 *    material: new THREE.MeshBasicMaterial({
 *      color: 0xffffff
 *    }),
 *
 *    position: [50, 60, 70]
 * }).addTo(app);
 */
var Box = (_temp$13 = _class$13 = function (_MeshComponent) {
  inherits(Box, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Box#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     width: 1,
   *     height: 1,
   *     depth: 1,
   *     widthSegments: 1,
   *     heightSegments: 1,
   *     depthSegments: 1
   *   }
   * }</pre>
   */
  function Box() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Box);
    return possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, params, Box.defaults, Box.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Box
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Box#instructions
   * @static
   * @default geometry: ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegements']
   */


  createClass(Box, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.BoxBufferGeometry : three.BoxGeometry)(params.geometry.width, params.geometry.height, params.geometry.depth, params.geometry.widthSegments, params.geometry.heightSegments, params.geometry.depthSegments);

      return geometry;
    }
  }]);
  return Box;
}(MeshComponent), _class$13.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1
  }
}), _class$13.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['width', 'height', 'depth', 'widthSegments', 'heightSegments', 'depthSegements']
}), _temp$13);

var _class$14;
var _temp$14;

/**
 * @class Circle
 * @category components/meshes
 * @description As told on Component definition, while you can pass any of the inherited params for this component construction, you will need to
 * pass specific parameters to build this mesh as a geometry object.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#CircleGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Circle, and adding to app</caption>
 *  new Circle({
 *    geometry: {
 *      radius: 4,
 *      segments: 16
 *    },
 *
 *    material: new THREE.MeshBasicMaterial({
 *      color: 0xffffff
 *    }),
 *
 *    position: [50, 60, 70]
 * }).addTo(app);
 */
var Circle = (_temp$14 = _class$14 = function (_MeshComponent) {
  inherits(Circle, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Circle#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 50,
   *     segments: 8,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Circle() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Circle);
    return possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, params, Circle.defaults, Circle.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Circle
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Circle#instructions
   * @static
   * @default geometry: ['radius', 'segments', 'thetaStart', 'thetaLength']
   */


  createClass(Circle, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.CircleBufferGeometry : three.CircleGeometry)(params.geometry.radius, params.geometry.segments, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Circle;
}(MeshComponent), _class$14.defaults = _extends({}, MeshComponent.defaults, {

  geometry: {
    radius: 50,
    segments: 8,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$14.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'segments', 'thetaStart', 'thetaLength']
}), _temp$14);

var _class$15;
var _temp$15;

/**
 * @class Cone
 * @category components/meshes
 * @description A cylinder is one of the most basic curvilinear geometric shapes, the surface formed by the points at a fixed distance from a given straight line, the axis of the cylinder. <br/><br/>
 * The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder.<br/>
 * The surface area and the volume of a cylinder have been known since deep antiquity.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ConeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Cone, and adding to app</caption>
 * new Cone({
 *   geometry: {
 *     radiusTop: 2,
 *     radiusBottom: 4,
 *     height: 5
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: [0, 100, 0]
 * }).addTo(app);
 */
var Cone = (_temp$15 = _class$15 = function (_MeshComponent) {
  inherits(Cone, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Cone#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 20,
   *     height: 100,
   *     radiusSegments: 32,
   *     heightSegments: 1,
   *     openEnded: false,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Cone() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Cone);

    var _this = possibleConstructorReturn(this, (Cone.__proto__ || Object.getPrototypeOf(Cone)).call(this, params, Cone.defaults, Cone.instructions));

    if (params.build) {
      _this.build(params);
      get(Cone.prototype.__proto__ || Object.getPrototypeOf(Cone.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Cone
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Cone#instructions
   * @static
   * @default <pre>
   * geometry: [
   *   'radius',
   *   'height',
   *   'radiusSegments',
   *   'heightSegments',
   *   'openEnded',
   *   'thetaStart',
   *   'thetaLength'
   * ]
   * </pre>
   */


  createClass(Cone, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.ConeBufferGeometry : three.ConeGeometry)(params.geometry.radius, params.geometry.height, params.geometry.radiusSegments, params.geometry.heightSegments, params.geometry.openEnded, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Cone;
}(MeshComponent), _class$15.defaults = _extends({}, MeshComponent.defaults, {

  geometry: {
    radius: 20,
    height: 100,
    radiusSegments: 32,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$15.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'height', 'radiusSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength']
}), _temp$15);

var _class$16;
var _temp$16;

/**
 * @class Cylinder
 * @category components/meshes
 * @description A cylinder is one of the most basic curvilinear geometric shapes, the surface formed by the points at a fixed distance from a given straight line, the axis of the cylinder. <br/><br/>
 * The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder.<br/>
 * The surface area and the volume of a cylinder have been known since deep antiquity.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#CylinderGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Cylinder, and adding to app</caption>
 * new Cylinder({
 *   geometry: {
 *     radiusTop: 2,
 *     radiusBottom: 4,
 *     height: 5
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: [0, 100, 0]
 * }).addTo(app);
 */
var Cylinder = (_temp$16 = _class$16 = function (_MeshComponent) {
  inherits(Cylinder, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Cylinder#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radiusTop: 20,
   *     radiusBottom: 20,
   *     height: 100,
   *     radiusSegments: 32,
   *     heightSegments: 1,
   *     openEnded: false,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }</pre>
   */
  function Cylinder() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Cylinder);

    var _this = possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this, params, Cylinder.defaults, Cylinder.instructions));

    if (params.build) {
      _this.build(params);
      get(Cylinder.prototype.__proto__ || Object.getPrototypeOf(Cylinder.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Cylinder
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Cylinder#instructions
   * @static
   * @default <pre>
   * geometry: [
   *   'radiusTop',
   *   'radiusBottom',
   *   'height',
   *   'radiusSegments',
   *   'heightSegments',
   *   'openEnded',
   *   'thetaStart',
   *   'thetaLength'
   * ]
   * </pre>
   */


  createClass(Cylinder, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.CylinderBufferGeometry : three.CylinderGeometry)(params.geometry.radiusTop, params.geometry.radiusBottom, params.geometry.height, params.geometry.radiusSegments, params.geometry.heightSegments, params.geometry.openEnded, params.geometry.thetaStart, params.geometry.thetaLength);

      return geometry;
    }
  }]);
  return Cylinder;
}(MeshComponent), _class$16.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radiusTop: 0,
    radiusBottom: 1,
    height: 1,
    radiusSegments: 32,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$16.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radiusTop', 'radiusBottom', 'height', 'radiusSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength']
}), _temp$16);

var _class$17;
var _temp$17;

/**
 * @class Dodecahedron
 * @category components/meshes
 * @description In geometry, a dodecahedron is any polyhedron with twelve flat faces. <br/><br/>
 * The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. <br/>
 * There are also three regular star dodecahedra, which are constructed as stellations of the convex form. <br/>
 * All of these have icosahedral symmetry, order 120.
 * Dodecahedron creates Dodecahedron object by it's radius and detail.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#DodecahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Dodecahedron, and adding to app</caption>
 * new Dodecahedron({
 *   geometry: {
 *     radius: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 10
 *   }
  * }).addTo(app);
 */
var Dodecahedron = (_temp$17 = _class$17 = function (_MeshComponent) {
  inherits(Dodecahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Dodecahedron#defaults
   * @static
   * @default <pre>
   * geometry: {
   *   radius: 1,
   *   detail: 0
   * }
   * </pre>
   */
  function Dodecahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Dodecahedron);

    var _this = possibleConstructorReturn(this, (Dodecahedron.__proto__ || Object.getPrototypeOf(Dodecahedron)).call(this, params, Dodecahedron.defaults, Dodecahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Dodecahedron.prototype.__proto__ || Object.getPrototypeOf(Dodecahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Dodecahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Dodecahedron#instructions
   * @static
   * @default <pre>
   * geometry: ['radius', 'detail']
   * </pre>
   */


  createClass(Dodecahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.DodecahedronBufferGeometry : three.DodecahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Dodecahedron;
}(MeshComponent), _class$17.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$17.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$17);

var _class$18;
var _temp$18;

/**
 * @class Extrude
 * @category components/meshes
 * @description Extrude geometry means that you can create a 3D mesh from any 2D shape using three.js geometry based on <a href='https://threejs.org/docs/#api/math/Vector2'>THREE.Vector2.</a> <br/>
 * Such implementation will help you to make volumed shapes that have their own depth and can be seen from all angels.<br/><br/>
 * You can also find some interesting examples made using <a href='threejs.org'>three.js</a> which is a core of whs.js, such as:
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_shapes.html'>Webgl geometry extrude</a>
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_shapes2.html'>Extrude shapes from geodata</a>
 * - <a href='http://threejs.org/examples/webgl_geometry_extrude_splines.html'>Extrude splines</a>
 *
 * Such examples can be easily implemented using whitestorm.js or it's plugins. Use `Extrude` class with <a href='https://threejs.org/docs/#api/extras/core/Shape'>THREE.Shape</a> to get extrude effect of shape defined by 2D vectors.
 * This class is similar to <a href='https://threejs.org/docs/#api/geometries/ExtrudeGeometry'>THREE.ExtrudeGeometry</a>,
 * but it also contains all properties, applied by `Shape`, such as material, mass and vectors like position (pos) and rotation (rot).
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ExtrudeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a shape, then an Extrude from it</caption>
 * const shape = new THREE.Shape([
 *   new THREE.Vector2(-4,-4),
 *   new THREE.Vector2(-2,0),
 *   new THREE.Vector2(-4,4),
 *   new THREE.Vector2(0,2),
 *   new THREE.Vector2(4,4),
 *   new THREE.Vector2(2,0),
 *   new THREE.Vector2(4,-4),
 *   new THREE.Vector2(0,-2)
 * ]);
 *
 * const extrude = new Extrude({
 *   geometry: {
 *     shapes: shape,
 *     options: {
 *       bevelEnabled: false,
 *       bevelSize: 0,
 *       amount: 2
 *     }
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * });
 *
 * extrude.addTo(app);
 */
var Extrude = (_temp$18 = _class$18 = function (_MeshComponent) {
  inherits(Extrude, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Extrude#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     shapes: [],
   *     options: {}
   *   }
   * }
   * </pre>
   */
  function Extrude() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Extrude);

    var _this = possibleConstructorReturn(this, (Extrude.__proto__ || Object.getPrototypeOf(Extrude)).call(this, params, Extrude.defaults, Extrude.instructions));

    if (params.build) {
      _this.build(params);
      get(Extrude.prototype.__proto__ || Object.getPrototypeOf(Extrude.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Extrude
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Extrude#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['shapes', 'options']
   * }
   * </pre>
   */


  createClass(Extrude, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new three.ExtrudeGeometry(params.geometry.shapes, params.geometry.options);

      return params.buffer ? new three.BufferGeometry().fromGeometry(geometry) : geometry;
    }
  }]);
  return Extrude;
}(MeshComponent), _class$18.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    shapes: [],
    options: {}
  }
}), _class$18.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['shapes', 'options']
}), _temp$18);

var _class$19;
var _temp$19;

/**
 * @class Icosahedron
 * @category components/meshes
 * @description In geometry, an icosahedron is a polyhedron with 20 faces.<br/>
 * There are many kinds of icosahedra, with some being more symmetrical than others. The most well known is the Platonic, convex regular icosahedron.<br/>
 * `Icosahedron` creates an Icosahedron object by its radius and detail.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#IcosahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Icosahedron, and adding to app</caption>
 * new Icosahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Icosahedron = (_temp$19 = _class$19 = function (_MeshComponent) {
  inherits(Icosahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Icosahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   *   }
   * }</pre>
   */
  function Icosahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Icosahedron);

    var _this = possibleConstructorReturn(this, (Icosahedron.__proto__ || Object.getPrototypeOf(Icosahedron)).call(this, params, Icosahedron.defaults, Icosahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Icosahedron.prototype.__proto__ || Object.getPrototypeOf(Icosahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Icosahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Icosahedron#instructions
   * @static
   * @default {geometry: ['radius', 'detail']}
   */


  createClass(Icosahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.IcosahedronBufferGeometry : three.IcosahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Icosahedron;
}(MeshComponent), _class$19.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$19.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$19);

var _class$20;
var _temp$20;

/**
 * @class Lathe
 * @category components/meshes
 * @description A `LatheGeometry` allows you to create shapes from a smooth curve.
 * This curve is defined by a number of points (also called knots) and is most often called a spline. This spline is rotated around a fixed point and results in vase- and bell-like shapes.<br/><br/>
 * In 3D computer graphics, a lathed object is a 3D model whose vertex geometry is produced by rotating the points of a spline or other point set around a fixed axis.
 * The lathing may be partial; the amount of rotation is not necessarily a full 360 degrees.
 * The point set providing the initial source data can be thought of as a cross section through the object along a plane containing its axis of radial symmetry. <br/><br/>
 * The <a href='http://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry'>following example</a> shows a geometry which can be generated using `Lathe` class.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Lath, and adding to app</caption>
 * const points = [];
 *
 * for (let i = 0; i < 10; i++) {
 *   points.push(
 *     new THREE.Vector2(
 *       (Math.sin(i * 0.7) * 15 + 50) / 10,
 *       (i - 5) * 0.2
 *     )
 *   );
 * }
 *
 * const lathe = new Lathe({
 *   geometry: {
 *     points: points
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 50, 10]
 * }).addTo(app);
 */
var Lathe = (_temp$20 = _class$20 = function (_MeshComponent) {
  inherits(Lathe, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Lathe#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     points: []
   *   }
   * }
   * </pre>
   */
  function Lathe() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Lathe);

    var _this = possibleConstructorReturn(this, (Lathe.__proto__ || Object.getPrototypeOf(Lathe)).call(this, params, Lathe.defaults, Lathe.instructions));

    if (params.build) {
      _this.build(params);
      get(Lathe.prototype.__proto__ || Object.getPrototypeOf(Lathe.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Lathe
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Lathe#instructions
   * @static
   * @default <pre>{
   *   geometry: ['points']
   * }
   * </pre>
   */


  createClass(Lathe, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.LatheBufferGeometry : three.LatheGeometry)(params.geometry.points);
    }
  }]);
  return Lathe;
}(MeshComponent), _class$20.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    points: []
  }
}), _class$20.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['points']
}), _temp$20);

var _class$21;
var _temp$21;

/**
 * @class Line
 * @category components/meshes
 * @description Line component is generated from a curve/line and amount of vectors that should be used (points).
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Line, and adding to app</caption>
 * new Line({
 *   geometry: {
 *     curve: new THREE.LineCurve3(new THREE.Vector3(10, 10, 0), new THREE.Vector3(10, 30, 0))
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Line$1 = (_temp$21 = _class$21 = function (_MeshComponent) {
  inherits(Line$$1, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Line#defaults
   * @static
   * @default <pre>
   * {
   *   curve: new LineCurve3(new Vector3(0, 0, 0), new Vector3(10, 0, 0)),
   *   points: 50
   * }
   * </pre>
   */
  function Line$$1(params) {
    classCallCheck(this, Line$$1);
    return possibleConstructorReturn(this, (Line$$1.__proto__ || Object.getPrototypeOf(Line$$1)).call(this, params, Line$$1.defaults, Line$$1.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Line
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Line#instructions
   * @static
   * @default <pre>{
   *   geometry: ['curve', 'points']
   * }
   * </pre>
   */


  createClass(Line$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Line(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = params.buffer ? new three.BufferGeometry() : new three.Geometry();

      if (params.buffer) {
        var pp = params.curve.getPoints(params.points);
        var verts = new Float32Array(pp.length * 3);

        for (var i = 0, max = pp.length; i < max; i++) {
          var i3 = i * 3;

          verts[i3] = pp[i].x;
          verts[i3 + 1] = pp[i].y;
          verts[i3 + 2] = pp[i].z;
        }

        geometry.addAttribute('position', new three.BufferAttribute(verts, 3));
      } else geometry.vertices = params.curve.getPoints(params.points);

      return geometry;
    }
  }]);
  return Line$$1;
}(MeshComponent), _class$21.defaults = _extends({}, MeshComponent.defaults, {

  curve: null,
  points: 50
}), _class$21.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['curve', 'points']
}), _temp$21);

var _class$22;
var _temp$22;

/**
 * @class Importer
 * @category components/meshes
 * @description Importer is a loader for meshes and any other data to your scene
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Importer, and adding to app</caption>
 * new Importer({
 *   loader: new THREE.OBJLoader(),
 *
 *   parser(geometry, material) { // data from loader
 *     return new THREE.Mesh(geometry, material); // should return your .native (mesh in this case)
 *   },
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Importer = (_temp$22 = _class$22 = function (_MeshComponent) {
  inherits(Importer, _MeshComponent);
  createClass(Importer, null, [{
    key: 'filter',


    /**
     * @method filter
     * @description Default values for parameters
     * @static
     * @param {THREE.Mesh} object Instance for iterating through it's children.
     * @param {Function} filter Function with child as argument, should return a boolean whether include the child or not.
     * @return {THREE.Mesh} object with children
     * @memberof module:components/meshes.Importer
     * @example <caption>Removing unnecessary lights from children</caption>
     * new Icosahedron({
     *   loader: new THREE.OBJLoader(),
     *
     *   parse(group) { // data from loader
     *     return Importer.filter(group, child => !child.isLight); // remove lights
     *   },
     *
     *   position: [0, 100, 0]
     * }).addTo(app);
     */


    /**
     * Default values for parameters
     * @member {Object} module:components/meshes.Importer#defaults
     * @static
     * @default <pre>
     * {
     *   url: '',
     *   loader: new JSONLoader(),
     *
     *   onLoad() {},
     *   onProgress() {},
     *   onError() {},
     *
     *   texturePath: null,
     *   useCustomMaterial: false,
     *
     *   parser(geometry, materials) {
     *     return new Mesh(geometry, materials);
     *   }
     * }</pre>
     */
    value: function filter(object, _filter) {
      var processFilter = function processFilter(object) {
        object.children.forEach(function (el, index) {
          if (el.children) processFilter(el);
          if (!_filter(el)) object.children.splice(index, 1);
        });

        return object;
      };

      return processFilter(object);
    }
  }]);

  function Importer() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Importer);
    return possibleConstructorReturn(this, (Importer.__proto__ || Object.getPrototypeOf(Importer)).call(this, params, Importer.defaults, Importer.instructions, false));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Importer
   */


  createClass(Importer, [{
    key: 'build',
    value: function build() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Promise(function (resolve) {
        if (params.texturePath) params.laoder.setTexturePath(params.texturePath);

        params.loader.load(params.url, function () {
          // geometry, materials
          params.onLoad.apply(params, arguments);

          var object = _this2.applyBridge({ mesh: params.parser.apply(params, arguments) }).mesh;

          var _applyBridge = _this2.applyBridge({
            geometry: object.geometry,
            material: params.useCustomMaterial ? params.material : object.material
          }),
              geom = _applyBridge.geometry,
              mat = _applyBridge.material;

          if (object.geometry) object.geometry = geom;
          if (object.material) object.material = mat;

          resolve(object);
        }, params.onProgress, params.onError);
      });
    }
  }]);
  return Importer;
}(MeshComponent), _class$22.defaults = _extends({}, MeshComponent.defaults, {

  url: '',
  loader: new three.JSONLoader(),

  onLoad: function onLoad() {},
  onProgress: function onProgress() {},
  onError: function onError() {},


  texturePath: null,
  useCustomMaterial: false,

  parser: function parser(geometry, materials) {
    return new three.Mesh(geometry, materials);
  }
}), _class$22.instructions = _extends({}, MeshComponent.instructions), _temp$22);

var _class$23;
var _temp$23;

/**
 * @class Octahedron
 * @category components/meshes
 * @description In geometry, an octahedron is a polyhedron with eight faces.
 * A regular octahedron is a Platonic solid composed of eight equilateral triangles, four of which meet at each vertex.
 * <br/><br/>
 * `Octahedron` creates an Octahedron object by its `radius` and `detail`.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#OctahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating an Octahedron, and adding to app</caption>
 * new Octahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */
var Octahedron = (_temp$23 = _class$23 = function (_MeshComponent) {
  inherits(Octahedron, _MeshComponent);

  function Octahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Octahedron);

    var _this = possibleConstructorReturn(this, (Octahedron.__proto__ || Object.getPrototypeOf(Octahedron)).call(this, params, Octahedron.defaults, Octahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Octahedron.prototype.__proto__ || Object.getPrototypeOf(Octahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Octahedron
   */

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Octahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   *   }
   * }
   * </pre>
   */


  createClass(Octahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.OctahedronBufferGeometry : three.OctahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Octahedron;
}(MeshComponent), _class$23.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _temp$23);

var _class$24;
var _temp$24;

/**
 * @class Parametric
 * @category components/meshes
 * @description `Parametric` generates a geometry representing a <a href='https://en.wikipedia.org/wiki/Parametric_surface'>Parametric surface</a>
 * <br/><br/>
 * It is usually used to develop different kinds of highfields or visualize a <a href='https://stemkoski.github.io/Three.js/Graphulus-Function.html'>math function</a>.
 * <br/>
 * - <a href='http://math.hws.edu/graphicsbook/source/threejs/curves-and-surfaces.html'>Parametric surface</a>
 * - <a href='https://stemkoski.github.io/Three.js/Graphulus-Surface.html'>"Graphulus"</a>
 * <br/><br/>
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ParametricGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Example creating an heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
 * We use them in `THREE.Vector3` like `x` and `z` and `Math.random() * 5` for `y`.</caption>
 * const createParametric = (u, v) => {
 *   return new THREE.Vector3(u * 30, Math.random() * 5, v * 30);
 * }
 *
 * new Parametric({
 *   geometry: {
 *     func: createParametric
 *   },
 *
 *   material: new THREE.MeshLambertMaterial({
 *     color: 0xffffff,
 *     side: THREE.DoubleSide
 *   }),
 *
 *   position: [0, 100, -100]
 * }).addTo(app);
 */
var Parametric = (_temp$24 = _class$24 = function (_MeshComponent) {
  inherits(Parametric, _MeshComponent);

  function Parametric() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Parametric);
    return possibleConstructorReturn(this, (Parametric.__proto__ || Object.getPrototypeOf(Parametric)).call(this, params, Parametric.defaults, Parametric.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Parametric
   */

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Parametric#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     func: (u, v) => new Vector3(u, v, 0),
   *     slices: 10,
   *     tacks: 10
   *   }
   * }
   * </pre>
   */


  createClass(Parametric, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.ParametricBufferGeometry : three.ParametricGeometry)(params.geometry.func, params.geometry.slices, params.geometry.stacks);
    }
  }]);
  return Parametric;
}(MeshComponent), _class$24.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    func: function func(u, v) {
      return new three.Vector3(u, v, 0);
    },
    slices: 10,
    stacks: 10
  }
}), _temp$24);

var _class$25;
var _temp$25;

/**
 * @class Plane
 * @category components/meshes
 * @description `Plane` is used for creating planes given some `width` and `height`.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#PlaneGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Plane, and adding to app</caption>
 * new Plane({
 *   geometry: {
 *     width: 20,
 *     height: 30
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Plane$1 = (_temp$25 = _class$25 = function (_MeshComponent) {
  inherits(Plane$$1, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Plane#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     width: 10,
   *     height: 10,
   *     wSegments: 1,
   *     hSegments: 1
   *   }
   * }
   * </pre>
   */
  function Plane$$1() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Plane$$1);

    var _this = possibleConstructorReturn(this, (Plane$$1.__proto__ || Object.getPrototypeOf(Plane$$1)).call(this, params, Plane$$1.defaults, Plane$$1.instructions));

    if (params.build) {
      _this.build(params);
      get(Plane$$1.prototype.__proto__ || Object.getPrototypeOf(Plane$$1.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Plane
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Plane#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['width', 'height', 'wSegments', 'hSegments']
   * }
   * </pre>
   */


  createClass(Plane$$1, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.PlaneBufferGeometry : three.PlaneGeometry)(params.geometry.width, params.geometry.height, params.geometry.wSegments, params.geometry.hSegments);

      return geometry;
    }
  }]);
  return Plane$$1;
}(MeshComponent), _class$25.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    width: 10,
    height: 10,
    wSegments: 1,
    hSegments: 1
  }
}), _class$25.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['width', 'height', 'wSegments', 'hSegments']
}), _temp$25);

var _class$26;
var _temp$26;

var verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
var indicesOfFaces = [2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4];

/**
 * @class Polyhedron
 * @category components/meshes
 * @description In elementary geometry, a polyhedron is a solid in three dimensions with flat polygonal faces, straight edges and sharp corners or vertices.
 * <br/><br/>
 * `Polyhedron` creates a Polyhedron by its `radius` and `detail`.
 * <br/><br/>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating an Polyhedron, and adding to app</caption>
 * new Polyhedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: [0, 100, 0]
 * }).addTo(app);
 */

var Polyhedron = (_temp$26 = _class$26 = function (_MeshComponent) {
  inherits(Polyhedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Polyhedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     verticesOfCube: [
   *       -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
   *       -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1
   *     ],
   *
   *     indicesOfFaces: [
   *       2, 1, 0, 0, 3, 2,
   *       0, 4, 7, 7, 3, 0,
   *       0, 1, 5, 5, 4, 0,
   *       1, 2, 6, 6, 5, 1,
   *       2, 3, 7, 7, 6, 2,
   *       4, 5, 6, 6, 7, 4
   *     ],
   *
   *     radius: 6,
   *     detail: 2
   *   }
   * }
   * </pre>
   */
  function Polyhedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Polyhedron);

    var _this = possibleConstructorReturn(this, (Polyhedron.__proto__ || Object.getPrototypeOf(Polyhedron)).call(this, params, Polyhedron.defaults, Polyhedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Polyhedron.prototype.__proto__ || Object.getPrototypeOf(Polyhedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Polyhedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Polyhedron#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['verticesOfCube', 'indicesOfFaces', 'radius', 'detail']
   * }
   * </pre>
   */


  createClass(Polyhedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.PolyhedronBufferGeometry : three.PolyhedronGeometry)(params.geometry.verticesOfCube, params.geometry.indicesOfFaces, params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Polyhedron;
}(MeshComponent), _class$26.verticesOfCube = verticesOfCube, _class$26.indicesOfFaces = indicesOfFaces, _class$26.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    verticesOfCube: verticesOfCube,
    indicesOfFaces: indicesOfFaces,
    radius: 6,
    detail: 2
  }
}), _class$26.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['verticesOfCube', 'indicesOfFaces', 'radius', 'detail']
}), _temp$26);

var _class$27;
var _temp$27;

/**
 * @class Ring
 * @category components/meshes
 * @description Ring class creates a circle or just 2D Torus. Does not support physics.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#RingGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Ring, and adding to app</caption>
 * new Ring({
 *   geometry: {
 *     innerRadius: 5,
 *     outerRadius: 2
 *   },
 *
 *   material: new THREE.MeshLambertMaterial({
 *     color: 0xffffff,
 *     side THREE.DoubleSide
 *   }),
 *
 *   position: [0, 8, 0],
 *
 *   rotation: {
 *     x: Math.PI/4
 *   }
 * }).addTo(app);
 */
var Ring = (_temp$27 = _class$27 = function (_MeshComponent) {
  inherits(Ring, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Ring#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     innerRadius: 0,
   *     outerRadius: 50,
   *     thetaSegments: 8,
   *     phiSegments: 8,
   *     thetaStart: 0,
   *     thetaLength: Math.PI * 2
   *   }
   * }
   * </pre>
   */
  function Ring() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Ring);

    var _this = possibleConstructorReturn(this, (Ring.__proto__ || Object.getPrototypeOf(Ring)).call(this, params, Ring.defaults, Ring.instructions));

    if (params.build) {
      _this.build(params);
      get(Ring.prototype.__proto__ || Object.getPrototypeOf(Ring.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Ring
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Ring#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'innerRadius',
   *     'outerRadius',
   *     'thetaSegments',
   *     'phiSegments',
   *     'thetaStart',
   *     'thetaLength'
   *   ]
   * }
   * </pre>
   */


  createClass(Ring, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.RingBufferGeometry : three.RingGeometry)(params.geometry.innerRadius, params.geometry.outerRadius, params.geometry.thetaSegments, params.geometry.phiSegments, params.geometry.thetaStart, params.geometry.thetaLength);
    }
  }]);
  return Ring;
}(MeshComponent), _class$27.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    innerRadius: 0,
    outerRadius: 50,
    thetaSegments: 8,
    phiSegments: 8,
    thetaStart: 0,
    thetaLength: Math.PI * 2
  }
}), _class$27.instructions = _extends({}, MeshComponent.defaults, {
  geometry: ['innerRadius', 'outerRadius', 'thetaSegments', 'phiSegments', 'thetaStart', 'thetaLength']
}), _temp$27);

var _class$28;
var _temp$28;

/**
 * @class Shape
 * @category components/meshes
 * @description Shape is a universal class. It allows you to create different 2D shapes in 3D scene.<br/>
 * Unfortunately, not all of them support physics, an alternative is to make a similar 3D object and scale its width down to near zero.
 * <br/><br/>
 * `Shape` consists of shapes that are in its shapes parameter.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#ShapeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a plane looking Shape from a THREE.Shape, and adding it to app</caption>
 * const rectWidth = 10,
 * rectLength = 5;
 *
 * const rectShape = new THREE.Shape();
 * rectShape.moveTo(0,0);
 * rectShape.lineTo(0, rectWidth);
 * rectShape.lineTo(rectLength, rectWidth);
 * rectShape.lineTo(rectLength, 0);
 * rectShape.lineTo(0, 0);
 *
 * const plane = new Shape({
 *   geometry: {
 *     shape: rectShape
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Shape = (_temp$28 = _class$28 = function (_MeshComponent) {
  inherits(Shape, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Shape#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     shapes: []
   * }
   * </pre>
   */
  function Shape() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Shape);

    var _this = possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, params, Shape.defaults, Shape.instructions));

    if (params.build) {
      _this.build(params);
      get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Shape
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Shape#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['shapes']
   * }
   * </pre>
   */


  createClass(Shape, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.ShapeBufferGeometry : three.ShapeGeometry)(params.geometry.shapes);
    }
  }]);
  return Shape;
}(MeshComponent), _class$28.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    shapes: []
  }
}), _class$28.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['shapes']
}), _temp$28);

var _class$29;
var _temp$29;

/**
 * @class Sphere
 * @category components/meshes
 * @description Sphere class is used to create sphere objects by its radius property and other values that determines its detality.
 * <br/><br/>
 * It is similar to THREE.SphereGeometry, but it also contains all `Shape` properties, such as material, mass and vectors like position (pos) and rotation (rot).
 * <br/><br/>
 * Then it creates an `Three.js mesh` or a `Physijs mesh`, that is similar to `Three.js mesh`, but it also take into consideration collision calculations.
 * This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#SphereGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Sphere, and adding it to app</caption>
 * new Sphere({
 *   geometry: {
 *     radius: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 100
 *   }
 * }).addTo(app);
 */
var Sphere = (_temp$29 = _class$29 = function (_MeshComponent) {
  inherits(Sphere, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Sphere#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     widthSegments: 8,
   *     heightSegments: 6
   * }
   * </pre>
   */
  function Sphere() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Sphere);
    return possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, params, Sphere.defaults, Sphere.instructions));
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Sphere
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Sphere#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['radius', 'widthSegments', 'heightSegments']
   * }
   * </pre>
   */


  createClass(Sphere, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.SphereBufferGeometry : three.SphereGeometry)(params.geometry.radius, params.geometry.widthSegments, params.geometry.heightSegments);

      return geometry;
    }
  }]);
  return Sphere;
}(MeshComponent), _class$29.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    widthSegments: 8,
    heightSegments: 6
  }
}), _class$29.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'widthSegments', 'heightSegments']
}), _temp$29);

var _class$30;
var _temp$30;

/**
 * @class Tetrahedron
 * @category components/meshes
 * @description In geometry, a tetrahedron is a polyhedron composed of four triangular faces, six straight edges, and four vertex corners.
 * The tetrahedron is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces.
 * <br/><br/>
 * `Tetrahedron` creates a Tetrahedron object by its `radius` and `detail`
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TetrahedronGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Tetrahedron, and adding it to app</caption>
 * new Tetrahedron({
 *   geometry: {
 *     radius: 2,
 *     detail: 1
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     x: 0,
 *     y: 100,
 *     z: 0
 *   }
 * }).addTo(app);
 */
var Tetrahedron = (_temp$30 = _class$30 = function (_MeshComponent) {
  inherits(Tetrahedron, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Tetrahedron#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 1,
   *     detail: 0
   * }
   * </pre>
   */
  function Tetrahedron() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Tetrahedron);

    var _this = possibleConstructorReturn(this, (Tetrahedron.__proto__ || Object.getPrototypeOf(Tetrahedron)).call(this, params, Tetrahedron.defaults, Tetrahedron.instructions));

    if (params.build) {
      _this.build(params);
      get(Tetrahedron.prototype.__proto__ || Object.getPrototypeOf(Tetrahedron.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Tetrahedron
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Tetrahedron#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: ['radius', 'detail']
   * }
   * </pre>
   */


  createClass(Tetrahedron, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new (params.buffer ? three.TetrahedronBufferGeometry : three.TetrahedronGeometry)(params.geometry.radius, params.geometry.detail);
    }
  }]);
  return Tetrahedron;
}(MeshComponent), _class$30.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 1,
    detail: 0
  }
}), _class$30.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'detail']
}), _temp$30);

var _class$31;
var _temp$31;

/**
 * @class Text
 * @category components/meshes
 * @description Text class is made for creating 3D text objects.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TextGeometry"></iframe>
 * <br/><br/>
 * Physics text object can be convex or concave. By default it's convex but you can also switch to concave.
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Text, and adding it to app</caption>
 * new Text({
 *   geometry: {
 *     text: 'hello world',
 *     parameters: {
 *       font: 'path/to/font.typeface.js',
 *       size: 20,
 *       height: 5,
 *       curveSegments: 6
 *     }
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     x: -40,
 *     y: 20,
 *     z: 0
 *   }
 * }).addTo(app);
 */
var Text = (_temp$31 = _class$31 = function (_MeshComponent) {
  inherits(Text, _MeshComponent);

  function Text() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Text);

    var _this = possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, params, Text.defaults, MeshComponent.instructions));

    if (params.build) {
      _this.build(params);
      get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Text
   */

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Text#defaults
   * @static
   * @default <pre>
   * {
   *   text: 'Hello World!',
   *   loader: new FontLoader(),
   *
   *   parameters: {
   *     size: 12,
   *     height: 50,
   *     curveSegments: 12,
   *     font: new Font(),
   *     bevelEnabled: false,
   *     bevelThickness: 10,
   *     bevelSize: 8
   *   }
   * }
   * </pre>
   */


  createClass(Text, [{
    key: 'build',
    value: function build() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var promise = new Promise(function (resolve) {
        params.loader.load(params.parameters.font, function (font) {
          params.parameters.font = font;

          var _applyBridge = _this2.applyBridge({
            geometry: new three.TextGeometry(params.text, params.parameters),

            material: params.material
          }),
              geometry = _applyBridge.geometry,
              material = _applyBridge.material;

          resolve(_this2.applyBridge({
            mesh: new three.Mesh(geometry, material)
          }).mesh);
        });
      });

      get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'wait', this).call(this, promise);

      return promise;
    }
  }]);
  return Text;
}(MeshComponent), _class$31.defaults = _extends({}, MeshComponent.defaults, {
  text: 'Hello World!',
  loader: new three.FontLoader(),

  parameters: {
    size: 12,
    height: 50,
    curveSegments: 12,
    font: new three.Font(),
    bevelEnabled: false,
    bevelThickness: 10,
    bevelSize: 8
  }
}), _temp$31);

var _class$32;
var _temp$32;

/**
 * @class Torus
 * @category components/meshes
 * @description Torus class makes a torus figure. A donut is a torus.
 * @classDesc
 * <iframe src="https://threejs.org/docs/index.html#api/geometries/TorusGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Torus, and adding it to app</caption>
 * new Torus({
 *   geometry: {
 *     radius: 5,
 *     tube: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   position: {
 *     y: 35
 *   }
 * }).addTo(app);
 */
var Torus = (_temp$32 = _class$32 = function (_MeshComponent) {
  inherits(Torus, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Torus#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 100,
   *     tube: 40,
   *     radialSegments: 8,
   *     tubularSegments: 6,
   *     arc: Math.PI * 2
   *   }
   * }
   * </pre>
   */
  function Torus() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Torus);

    var _this = possibleConstructorReturn(this, (Torus.__proto__ || Object.getPrototypeOf(Torus)).call(this, params, Torus.defaults, Torus.instructions));

    if (params.build) {
      _this.build(params);
      get(Torus.prototype.__proto__ || Object.getPrototypeOf(Torus.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Torus
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Torus#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'radius',
   *     'tube',
   *     'radialSegments',
   *     'tubularSegments',
   *     'arc'
   *   ]
   * }
   * </pre>
   */


  createClass(Torus, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new three.TorusGeometry(params.geometry.radius, params.geometry.tube, params.geometry.radialSegments, params.geometry.tubularSegments, params.geometry.arc);
    }
  }]);
  return Torus;
}(MeshComponent), _class$32.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 100,
    tube: 40,
    radialSegments: 8,
    tubularSegments: 6,
    arc: Math.PI * 2
  }
}), _class$32.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'tube', 'radialSegments', 'tubularSegments', 'arc']
}), _temp$32);

var _class$33;
var _temp$33;

/**
 * @class Torusknot
 * @category components/meshes
 * @description Torusknot class makes a torusknot figure. It's like a crooked donut, very crooked.
 * @classDesc
 * <iframe src="https://threejs.org/docs/scenes/geometry-browser.html#TorusKnotGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Torusknot, and adding it to app</caption>
 * new Torusknot({
 *   geometry: {
 *     radius:5,
 *     tube: 2
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *
 *   pos: {
 *     y: 100
 *   }
 * }).addTo(app);
 */
var Torusknot = (_temp$33 = _class$33 = function (_MeshComponent) {
  inherits(Torusknot, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Torusknot#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     radius: 100,
   *     tube: 40,
   *     radialSegments: 64,
   *     tubularSegments: 8,
   *     p: 2,
   *     q: 3
   *   }
   * }
   * </pre>
   */
  function Torusknot() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Torusknot);

    var _this = possibleConstructorReturn(this, (Torusknot.__proto__ || Object.getPrototypeOf(Torusknot)).call(this, params, Torusknot.defaults, Torusknot.instructions));

    if (params.build) {
      _this.build(params);
      get(Torusknot.prototype.__proto__ || Object.getPrototypeOf(Torusknot.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Torusknot
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Torusknot#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'radius',
   *     'tube',
   *     'radialSegments',
   *     'tubularSegments',
   *     'p',
   *     'q'
   *   ]
   * }
   * </pre>
   */


  createClass(Torusknot, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var GConstruct = params.buffer ? three.TorusKnotBufferGeometry : three.TorusKnotGeometry;

      return new GConstruct(params.geometry.radius, params.geometry.tube, params.geometry.radialSegments, params.geometry.tubularSegments, params.geometry.p, params.geometry.q);
    }
  }]);
  return Torusknot;
}(MeshComponent), _class$33.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    radius: 100,
    tube: 40,
    radialSegments: 64,
    tubularSegments: 8,
    p: 2,
    q: 3
  }
}), _class$33.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['radius', 'tube', 'radialSegments', 'tubularSegments', 'p', 'q']
}), _temp$33);

var _class$34;
var _temp$34;

/**
 * @class Tube
 * @category components/meshes
 * @description Tube class makes a tube that extrudes along a 3d curve.
 * @classDesc
 * <iframe src="https://threejs.org/docs/index.html#api/geometries/TubeGeometry"></iframe>
 * @param {Object} [params] - The params.
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Creating a Tube from a three.js Curve, and adding it to app</caption>
 * const CustomSinCurve = THREE.Curve.create(
 *   function (scale) { // custom curve constructor
 *     this.scale = (scale === undefined) ? 1 : scale;
 *   },
 *
 *   function (t) { // getPoint: t is between 0-1
 *     const tx = t * 3 - 1.5,
 *     ty = Math.sin( 2 * Math.PI * t ),
 *     tz = 0;
 *
 *     return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
 *   }
 * );
 *
 * const path = new CustomSinCurve(10);
 *
 * new Tube({
 *   geometry: {
 *     path: path
 *   },
 *
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   })
 * }).addTo(app);
 */
var Tube = (_temp$34 = _class$34 = function (_MeshComponent) {
  inherits(Tube, _MeshComponent);

  /**
   * Default values for parameters
   * @member {Object} module:components/meshes.Tube#defaults
   * @static
   * @default <pre>
   * {
   *   geometry: {
   *     path: new THREE.LineCurve3(new Vector3(0, 0, 0), new Vector3(0, 0, 1)),
   *     segments: 20,
   *     radius: 2,
   *     radiusSegments: 8,
   *     closed: false
   *   }
   * }
   * </pre>
   */
  function Tube() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Tube);

    var _this = possibleConstructorReturn(this, (Tube.__proto__ || Object.getPrototypeOf(Tube)).call(this, params, Tube.defaults, Tube.instructions));

    if (params.build) {
      _this.build(params);
      get(Tube.prototype.__proto__ || Object.getPrototypeOf(Tube.prototype), 'wrap', _this).call(_this);
    }
    return _this;
  }

  /**
   * @method build
   * @description Build livecycle creates a mesh using input params.
   * @param {Object} params Component parameters.
   * @return {THREE.Mesh} Built mesh
   * @memberof module:components/meshes.Tube
   */


  /**
   * Instructions
   * @member {Object} module:components/meshes.Tube#instructions
   * @static
   * @default <pre>
   * {
   *   geometry: [
   *     'path',
   *     'segments',
   *     'radius',
   *     'radiusSegments',
   *     'closed'
   *   ]
   * }
   * </pre>
   */


  createClass(Tube, [{
    key: 'build',
    value: function build() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params;

      var _applyBridge = this.applyBridge({
        geometry: this.buildGeometry(params),
        material: params.material
      }),
          geometry = _applyBridge.geometry,
          material = _applyBridge.material;

      return this.applyBridge({ mesh: new three.Mesh(geometry, material) }).mesh;
    }
  }, {
    key: 'buildGeometry',
    value: function buildGeometry() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var geometry = new (params.buffer ? three.TubeBufferGeometry : three.TubeGeometry)(params.geometry.path, params.geometry.segments, params.geometry.radius, params.geometry.radiusSegments, params.geometry.closed);

      return geometry;
    }
  }]);
  return Tube;
}(MeshComponent), _class$34.defaults = _extends({}, MeshComponent.defaults, {
  geometry: {
    path: new three.LineCurve3(new three.Vector3(0, 0, 0), new three.Vector3(0, 0, 1)),
    segments: 20,
    radius: 2,
    radiusSegments: 8,
    closed: false
  }
}), _class$34.instructions = _extends({}, MeshComponent.instructions, {
  geometry: ['path', 'segments', 'radius', 'radiusSegments', 'closed']
}), _temp$34);

/**
 * @class Group
 * @category components/meshes
 * @description Sometimes you need to make groups of objects (it's not conveniently to apply transforms to each object when can make just one to a group).<br/>
 * In Three.js you make it using `THREE.Object3D` and it's children. <br/><br/>
 * In whs.js we have `Group`
 * @extends module:core.MeshComponent
 * @memberof module:components/meshes
 * @example <caption>Approach 2 - Adding objects to an empty group</caption>
 * const sphere = new Sphere();
 * const box = new Box();
 * const group = new Group();
 *
 * sphere.addTo(group);
 * box.addTo(group);
* @example <caption>Approach 2 - Making a group from objects</caption>
 * const sphere = new Sphere();
 * const box = new Box();
 * const group = new Group(box, sphere);
 * // OR: const group = new Group([box, sphere]);
 */

var Group = function (_MeshComponent) {
  inherits(Group, _MeshComponent);

  function Group() {
    classCallCheck(this, Group);

    var _this = possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, {}));

    for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i];

      if (obj instanceof Component) obj.addTo(_this);else if (obj instanceof three.Object3D) _this.native.add(obj);
    }
    return _this;
  }

  createClass(Group, [{
    key: 'build',
    value: function build() {
      return new three.Object3D();
    }
  }]);
  return Group;
}(MeshComponent);

/** @module components/meshes */

/**
 * @class ElementModule
 * @category modules/app
 * @param {Object} [container=document.body] container is the DOM object to which application's canvas will be added to.
 * @memberof module:modules/app
 * @example <caption>Creating an element module, passing it to the App</caption>
 * new App([
 *   new ElementModule(document.getElementById('app'))
 * ]);
 */
var ElementModule = function () {
  function ElementModule() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    classCallCheck(this, ElementModule);

    if (container.container) {
      console.warn('ElementModule now accepts only argument which is a DOM object, not a params object.');
      this.container = container.container;
    } else this.container = container;

    this.createElement();
  }

  /**
   * @method createElement
   * @instance
   * @description Creates a canvas element.
   * @memberof module:modules/app.ResizeModule
   */


  createClass(ElementModule, [{
    key: 'createElement',
    value: function createElement() {
      this.element = window.document.createElement('div');

      this.element.className = 'whs-app';
      this.element.style.width = 'inherit';
      this.element.style.height = 'inherit';
      this.element.style.position = 'relative';
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('element', this.element);
      _manager.set('container', this.container);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.container.appendChild(self.element);
    }
  }]);
  return ElementModule;
}();

var _class$35;
var _temp$35;
var _initialiseProps;

/**
 * @class RenderingModule
 * @category modules/app
 * @param {Object} [params]
 * @memberof module:modules/app
 * @example <caption> Creating a rendering module and passing it to App's modules</caption>
 * new App([
 *   new ElementModule(),
 *   new SceneModule(),
 *   new CameraModule({
 *     position: new THREE.Vector3(0, 6, 18),
 *     far: 10000
 *   }),
 *   new RenderingModule({
 *     bgColor: 0x162129,
 *
 *     renderer: {
 *       antialias: true,
 *       shadowmap: {
 *         type: THREE.PCFSoftShadowMap
 *       }
 *     }
 *   }, {shadow: true})
 * ]);
 */
var RenderingModule = (_temp$35 = _class$35 = function () {
  function RenderingModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shadow: false },
        isShadow = _ref.shadow;

    classCallCheck(this, RenderingModule);

    _initialiseProps.call(this);

    this.params = Object.assign({
      width: window.innerWidth,
      height: window.innerHeight,

      resolution: new three.Vector2(1, 1),
      pixelRatio: window.devicePixelRatio,

      bgColor: 0x000000,
      bgOpacity: 1,

      renderer: {}
    }, params);

    var _params = this.params,
        bgColor = _params.bgColor,
        bgOpacity = _params.bgOpacity,
        renderer = _params.renderer,
        pixelRatio = _params.pixelRatio,
        width = _params.width,
        height = _params.height,
        resolution = _params.resolution;


    this.renderer = new three.WebGLRenderer(renderer);
    this.effects = [];
    this.applyAdditional('shadow', isShadow);

    this.renderer.setClearColor(bgColor, bgOpacity);

    if (pixelRatio) this.renderer.setPixelRatio(pixelRatio);

    this.setSize(Number(width * resolution.x).toFixed(), Number(height * resolution.y).toFixed());
  }

  createClass(RenderingModule, [{
    key: 'applyAdditional',
    value: function applyAdditional(name) {
      var isApplied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!isApplied) return;
      RenderingModule.additional[name].apply(this, [this.renderer]);
    }
  }, {
    key: 'integrateRenderer',
    value: function integrateRenderer(element, scene, camera) {
      var _this = this;

      this.scene = scene;
      this.camera = camera;
      this.renderLoop = new Loop(function () {
        return _this.renderer.render(_this.scene, _this.camera);
      });
      this.attachToCanvas(element);

      return this.renderLoop;
    }
  }, {
    key: 'effect',
    value: function effect(_effect, cb) {
      var _this2 = this;

      this.defer.then(function () {
        _this2.renderLoop.stop();

        var size = _this2.renderer.getSize();
        _effect.setSize(size.width, size.height);

        var loop = new Loop(cb ? cb : function () {
          _effect.render(_this2.scene, _this2.camera);
        });

        _this2.effects.push(loop);
        if (_this2.enabled) loop.start(_this2.app);
      });
    }

    /**
     * @method setSize
     * @description Update render target width and height.
     * @param {Number} width
     * @param {Number} height
     * @memberof module:modules/app.RenderingModule
     */

  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      if (this.renderer) this.renderer.setSize(width, height);
    }
  }, {
    key: 'attachToCanvas',
    value: function attachToCanvas(element) {
      var canvas = this.renderer.domElement;

      // attach to new parent world dom
      element.appendChild(canvas);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.enabled = false;
      this.renderLoop.stop();
      this.effects.forEach(function (loop) {
        return loop.stop();
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.renderLoop.start();
      this.effects.forEach(function (loop) {
        return loop.start();
      });
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      var _this3 = this;

      _manager.define('rendering');
      _manager.set('renderer', this.renderer);

      this.app = _manager.handler;

      this.renderLoop = this.integrateRenderer(_manager.get('element'), _manager.get('scene'), _manager.get('camera').native);

      _manager.update({
        element: function element(_element) {
          _this3.attachToCanvas(_element);
        },
        scene: function scene(_scene) {
          _this3.scene = _scene;
        },
        camera: function camera(_camera) {
          _this3.camera = _camera.native;
        }
      });

      this.resolve();
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var _this4 = this;

      self.renderLoop.start(this);
      self.effects.forEach(function (loop) {
        return loop.start(_this4);
      });
    }
  }, {
    key: 'dispose',
    value: function dispose(self) {
      var _this5 = this;

      self.renderLoop.stop(this);
      self.effects.forEach(function (loop) {
        return loop.stop(_this5);
      });
      self.renderer.forceContextLoss();
    }
  }]);
  return RenderingModule;
}(), _class$35.additional = {
  shadow: function shadow(renderer) {
    renderer.shadowMap.enabled = true;
  }
}, _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.enabled = true;
  this.defer = new Promise(function (resolve) {
    _this6.resolve = resolve;
  });
}, _temp$35);

/**
 * @class SceneModule
 * @category modules/app
 * @param {Boolean} [willSceneBeReplaced=false] willSceneBeReplaced should be true only if you are going to overwrite scene dependency even without the use of default one.
 * @memberof module:modules/app
 */

var SceneModule = function () {
  function SceneModule() {
    var willSceneBeReplaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    classCallCheck(this, SceneModule);

    this.scene = willSceneBeReplaced ? null : new three.Scene();
  }

  createClass(SceneModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('scene', this.scene);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      this.children = [];

      this.add = function (object) {
        var _this = this;

        object.parent = this;

        return new Promise(function (resolve, reject) {
          object.defer(function () {
            var native = object.native;

            if (!native) reject();

            var addPromise = _this.applyBridge({ onAdd: object }).onAdd;

            var resolver = function resolver() {
              self.scene.add(native);
              _this.children.push(object);

              resolve(object);
            };

            if (addPromise instanceof Promise) addPromise.then(resolver);else resolver();
          });
        });
      };

      this.remove = function (object) {
        object.parent = null;
        self.scene.remove(object.native);
      };

      this.setScene = function (scene) {
        self.scene = scene;
        this.manager.set('scene', scene);
      };
    }
  }]);
  return SceneModule;
}();

// import {addResizeListener} from 'detect-element-resize';

/**
 * @class ResizeModule
 * @category modules/app
 * @param {Object} [params={auto: true}] - If auto is set to true - resize will be triggered when container resizes
 * @memberof module:modules/app
 */
var ResizeModule = function () {
  function ResizeModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ResizeModule);

    this.params = Object.assign({
      auto: true
    }, params);

    this.callbacks = [this.setSize.bind(this)];
  }

  /**
   * @function setSize
   * @instance
   * @description This function sets the provided width & height to the renderer object.
   * @param {Number} [width=1] - The promise that should be added to a queue.
   * @param {Number} [height=1] - that is resolved when all promises completed.
   * @memberof module:modules/app.ResizeModule
   */


  createClass(ResizeModule, [{
    key: 'setSize',
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.camera.native.aspect = width / height;
      this.camera.native.updateProjectionMatrix();

      if (this.rendering) this.rendering.setSize(width, height);
    }

    /**
     * @method trigger
     * @instance
     * @description Triggers resize when called. width & height are determined automatically
     * This invokes each callbacks with the new width and height as params
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'trigger',
    value: function trigger() {
      var _container = this.container,
          offsetWidth = _container.offsetWidth,
          offsetHeight = _container.offsetHeight,
          resolution = this.resolution;


      var width = Number(offsetWidth * resolution.x).toFixed();
      var height = Number(offsetHeight * resolution.y).toFixed();

      this.callbacks.forEach(function (cb) {
        cb(width, height);
      });
    }

    /**
     * @method addAutoresize
     * @instance
     * @description Sets module to autoresize, this adds an event listene on window resize to trigger the resize
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'addAutoresize',
    value: function addAutoresize() {
      this.container = this.getContainer();
      this.resolution = this.getResolution();

      if (this.params.auto) window.addEventListener('resize', this.trigger.bind(this));
    }

    /**
     * @method addCallback
     * @instance
     * @description Adds a call back function to the existing callbacks list.
     * @param {Function} func - The callback function to add
     * @memberof module:modules/app.ResizeModule
     */

  }, {
    key: 'addCallback',
    value: function addCallback(func) {
      this.callbacks.push(func);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('resize');

      this.rendering = _manager.get('renderer');
      this.camera = _manager.get('camera');

      this.getResolution = function () {
        return _manager.use('rendering').params.resolution;
      };
      this.getContainer = function () {
        return _manager.get('container');
      };

      this.addAutoresize();
    }
  }]);
  return ResizeModule;
}();

/**
 * An adaptive luminosity shader material.
 */

/**
 * Depth of Field shader (Bokeh).
 *
 * Original shader code by Martins Upitis:
 *  http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
 */

/**
 * Depth of Field shader version 2.4.
 *
 * Original shader code by Martins Upitis:
 *  http://blenderartists.org/forum/showthread.php?237488-GLSL-depth-of-field-with-bokeh-v2-4-(update)
 */

/**
 * A material for combining two textures.
 *
 * This material supports the two blend modes Add and Screen.
 *
 * In Screen mode, the two textures are effectively projected on a white screen
 * simultaneously. In Add mode, the textures are simply added together which
 * often produces undesired, washed out results.
 */

/**
 * An optimised convolution shader material.
 *
 * Based on the GDC2003 Presentation by Masaki Kawase, Bunkasha Games:
 *  Frame Buffer Postprocessing Effects in DOUBLE-S.T.E.A.L (Wreckless)
 * and an article by Filip Strugar, Intel:
 *  An investigation of fast real-time GPU-based image blur algorithms
 *
 * Further modified according to Apple's
 * [Best Practices for Shaders](https://goo.gl/lmRoM5).
 */



/**
 * A kernel size enumeration.
 *
 * @type {Object}
 * @property {Number} VERY_SMALL - A very small kernel that matches a 7x7 Gauss blur kernel.
 * @property {Number} SMALL - A small kernel that matches a 15x15 Gauss blur kernel.
 * @property {Number} MEDIUM - A medium sized kernel that matches a 23x23 Gauss blur kernel.
 * @property {Number} LARGE - A large kernel that matches a 35x35 Gauss blur kernel.
 * @property {Number} VERY_LARGE - A very large kernel that matches a 63x63 Gauss blur kernel.
 * @property {Number} HUGE - A huge kernel that matches a 127x127 Gauss blur kernel.
 */

const fragment$5 = "uniform sampler2D tDiffuse;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texel = texture2D(tDiffuse, vUv);\r\n\tgl_FragColor = opacity * texel;\r\n\r\n}\r\n";
const vertex$5 = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\tvUv = uv;\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n\r\n}\r\n";

/**
 * A simple copy shader material.
 */

class CopyMaterial extends three.ShaderMaterial {

	/**
	 * Constructs a new copy material.
	 */

	constructor() {

		super({

			type: "CopyMaterial",

			uniforms: {

				tDiffuse: new three.Uniform(null),
				opacity: new three.Uniform(1.0)

			},

			fragmentShader: fragment$5,
			vertexShader: vertex$5,

			depthWrite: false,
			depthTest: false

		});

	}

}

/**
 * A depth shader material.
 */

/**
 * A dot screen shader material.
 */

/**
 * A cinematic shader that provides the following effects:
 *  - Film Grain
 *  - Scanlines
 *  - Vignette
 *  - Greyscale
 *  - Sepia
 *
 * Original scanlines algorithm by Pat "Hawthorne" Shearon.
 *  http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
 *
 * Optimised scanlines and noise with intensity scaling by Georg "Leviathan"
 * Steinrohder. This version was provided under a Creative Commons Attribution
 * 3.0 License: http://creativecommons.org/licenses/by/3.0.
 *
 * The sepia effect is based on:
 *  https://github.com/evanw/glfx.js
 *
 * The vignette code is based on PaintEffect postprocess from ro.me:
 *  http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
 */

/**
 * A glitch shader material.
 *
 * Reference:
 *  https://github.com/staffantan/unityglitch
 */

/**
 * A crepuscular rays shader material.
 *
 * References:
 *
 * Thibaut Despoulain, 2012:
 *  [(WebGL) Volumetric Light Approximation in Three.js](
 *  http://bkcore.com/blog/3d/webgl-three-js-volumetric-light-godrays.html)
 *
 * Nvidia, GPU Gems 3, 2008:
 *  [Chapter 13. Volumetric Light Scattering as a Post-Process](
 *  https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html)
 */

/**
 * A luminosity shader material.
 *
 * This shader produces a greyscale luminance map. It can also be configured to
 * output colours that are scaled with their respective luminance value.
 * Additionally, a range may be provided to mask out undesired texels.
 *
 * The alpha channel will remain unaffected in all cases.
 *
 * Luminance range reference:
 *  https://cycling74.com/2007/05/23/your-first-shader/#.Vty9FfkrL4Z
 */

/**
 * A pixelation shader material.
 *
 * Original shader code by Robert Casanova:
 *  https://github.com/robertcasanova/pixelate-shader
 */

/**
 * A shock wave shader material.
 *
 * Based on a Gist by Jean-Philippe Sarda:
 *  https://gist.github.com/jpsarda/33cea67a9f2ecb0a0eda
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material is used to render the final antialiasing.
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material detects edges in a color texture.
 */

/**
 * Subpixel Morphological Antialiasing.
 *
 * This material computes weights for detected edges.
 */

/**
 * Full-screen tone-mapping shader material.
 *
 * Reference:
 *  http://www.cis.rit.edu/people/faculty/ferwerda/publications/sig02_paper.pdf
 */

/**
 * A collection of shader materials that are used in the post processing passes.
 *
 * @module postprocessing/materials
 */

/**
 * An abstract pass.
 *
 * Passes that do not rely on the depth buffer should explicitly disable the
 * depth test and depth write in their respective shader materials.
 *
 * This class implements a {@link Pass#dispose} method that frees memory on
 * demand.
 */

class Pass {

	/**
	 * Constructs a new pass.
	 *
	 * @param {Scene} [scene] - The scene to render.
	 * @param {Camera} [camera] - The camera.
	 * @param {Mesh} [quad] - A quad that fills the screen to render 2D filter effects. Set this to null, if you don't need it (see {@link RenderPass}).
	 */

	constructor(
		scene = new three.Scene(),
		camera = new three.OrthographicCamera(-1, 1, 1, -1, 0, 1),
		quad = new three.Mesh(new three.PlaneBufferGeometry(2, 2), null)
	) {

		/**
		 * The name of this pass.
		 *
		 * @type {String}
		 */

		this.name = "Pass";

		/**
		 * The scene to render.
		 *
		 * @type {Scene}
		 * @protected
		 * @default new Scene()
		 */

		this.scene = scene;

		/**
		 * The camera.
		 *
		 * @type {Camera}
		 * @protected
		 * @default new OrthographicCamera(-1, 1, 1, -1, 0, 1)
		 */

		this.camera = camera;

		/**
		 * A quad mesh that fills the screen.
		 *
		 * Assign your shader material to this mesh!
		 *
		 * @type {Mesh}
		 * @protected
		 * @default new Mesh(new PlaneBufferGeometry(2, 2), null)
		 * @example this.quad.material = this.myMaterial;
		 */

		this.quad = quad;

		if(this.quad !== null) {

			this.quad.frustumCulled = false;

			if(this.scene !== null) {

				this.scene.add(this.quad);

			}

		}

		/**
		 * Indicates whether the read and write buffers should be swapped after this
		 * pass has finished rendering.
		 *
		 * Set this to true if this pass renders to the write buffer so that a
		 * following pass can find the result in the read buffer.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.needsSwap = false;

		/**
		 * Enabled flag.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.enabled = true;

		/**
		 * Render to screen flag.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.renderToScreen = false;

	}

	/**
	 * Renders the effect.
	 *
	 * This is an abstract method that must be overridden.
	 *
	 * @abstract
	 * @throws {Error} An error is thrown if the method is not overridden.
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - A read buffer. Contains the result of the previous pass.
	 * @param {WebGLRenderTarget} writeBuffer - A write buffer. Normally used as the render target when the read buffer is used as input.
	 * @param {Number} [delta] - The delta time.
	 * @param {Boolean} [maskActive] - Indicates whether a stencil test mask is active or not.
	 */

	render(renderer, readBuffer, writeBuffer, delta, maskActive) {

		throw new Error("Render method not implemented!");

	}

	/**
	 * Updates this pass with the renderer's size.
	 *
	 * You may override this method in case you want to be informed about the main
	 * render size.
	 *
	 * The {@link EffectComposer} calls this method before this pass is
	 * initialised and every time its own size is updated.
	 *
	 * @param {Number} width - The renderer's width.
	 * @param {Number} height - The renderer's height.
	 * @example this.myRenderTarget.setSize(width, height);
	 */

	setSize(width, height) {}

	/**
	 * Performs initialisation tasks.
	 *
	 * By overriding this method you gain access to the renderer. You'll also be
	 * able to configure your custom render targets to use the appropriate format
	 * (RGB or RGBA).
	 *
	 * The provided renderer can be used to warm up special off-screen render
	 * targets by performing a preliminary render operation.
	 *
	 * The {@link EffectComposer} calls this method when this pass is added to its
	 * queue.
	 *
	 * @method initialise
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
	 * @example if(!alpha) { this.myRenderTarget.texture.format = RGBFormat; }
	 */

	initialise(renderer, alpha) {}

	/**
	 * Performs a shallow search for properties that define a dispose method and
	 * deletes them. The pass will be inoperative after this method was called!
	 *
	 * Disposable objects:
	 *  - render targets
	 *  - materials
	 *  - textures
	 *
	 * The {@link EffectComposer} calls this method when it is being destroyed.
	 * You may, however, use it independently to free memory when you are certain
	 * that you don't need this pass anymore.
	 */

	dispose() {

		const keys = Object.keys(this);

		let key;

		for(key of keys) {

			if(this[key] !== null && typeof this[key].dispose === "function") {

				this[key].dispose();
				this[key] = null;

			}

		}

	}

}

/**
 * A blur pass.
 */

/**
 * A bloom pass.
 *
 * This pass renders a scene with superimposed blur by utilising the fast Kawase
 * convolution approach.
 */

/**
 * A Depth of Field (DoF) pass using a bokeh shader.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * An advanced Depth of Field (DoF) pass.
 *
 * Yields more realistic results but is also more demanding.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * Used for saving the original clear color of the renderer.
 *
 * @type Color
 * @private
 * @static
 */

const color = new three.Color();

/**
 * A clear pass.
 *
 * You can prevent specific buffers from being cleared by setting either the
 * autoClearColor, autoClearStencil or autoClearDepth properties of the renderer
 * to false.
 */

class ClearPass extends Pass {

	/**
	 * Constructs a new clear pass.
	 *
	 * @param {Object} [options] - Additional options.
	 * @param {Color} [options.clearColor=null] - An override clear color.
	 * @param {Number} [options.clearAlpha=0.0] - An override clear alpha.
	 */

	constructor(options = {}) {

		super(null, null, null);

		/**
		 * The name of this pass.
		 */

		this.name = "ClearPass";

		/**
		 * Clear color.
		 *
		 * @type {Color}
		 * @default null
		 */

		this.clearColor = (options.clearColor !== undefined) ? options.clearColor : null;

		/**
		 * Clear alpha.
		 *
		 * @type {Number}
		 * @default 0.0
		 */

		this.clearAlpha = (options.clearAlpha !== undefined) ? options.clearAlpha : 0.0;

	}

	/**
	 * Clears the read buffer or the screen.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 */

	render(renderer, readBuffer) {

		const clearColor = this.clearColor;

		let clearAlpha;

		if(clearColor !== null) {

			color.copy(renderer.getClearColor());
			clearAlpha = renderer.getClearAlpha();
			renderer.setClearColor(clearColor, this.clearAlpha);

		}

		renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
		renderer.clear();

		if(clearColor !== null) {

			renderer.setClearColor(color, clearAlpha);

		}

	}

}

/**
 * A pass that disables the stencil mask.
 */

class ClearMaskPass extends Pass {

	/**
	 * Constructs a new clear mask pass.
	 */

	constructor() {

		super(null, null, null);

		/**
		 * The name of this pass.
		 */

		this.name = "ClearMaskPass";

	}

	/**
	 * Disables the stencil test.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 */

	render(renderer) {

		renderer.state.buffers.stencil.setTest(false);

	}

}

/**
 * A dot screen pass.
 */

/**
 * A depth pass.
 *
 * Reads the depth from a depth texture and renders it.
 *
 * This pass requires a {@link EffectComposer#depthTexture}.
 */

/**
 * A film pass.
 *
 * Provides various cinematic effects.
 */

/**
 * Returns a random integer in the specified range.
 *
 * @private
 * @static
 * @param {Number} low - The lowest possible value.
 * @param {Number} high - The highest possible value.
 * @return {Number} The random value.
 */

function randomInt(low, high) {

	return low + Math.floor(Math.random() * (high - low + 1));

}

/**
 * Returns a random float in the specified range.
 *
 * @private
 * @static
 * @param {Number} low - The lowest possible value.
 * @param {Number} high - The highest possible value.
 * @return {Number} The random value.
 */

function randomFloat(low, high) {

	return low + Math.random() * (high - low);

}

/**
 * A glitch pass.
 */



/**
 * A glitch mode enumeration.
 *
 * @type {Object}
 * @property {Number} SPORADIC - Sporadic glitches.
 * @property {Number} CONSTANT_MILD - Constant mild glitches.
 * @property {Number} CONSTANT_WILD - Constant wild glitches.
 */

const GlitchMode = {

	SPORADIC: 0,
	CONSTANT_MILD: 1,
	CONSTANT_WILD: 2

};

/**
 * A pass that renders a given scene directly on screen or into the read buffer
 * for further processing.
 */

class RenderPass extends Pass {

	/**
	 * Constructs a new render pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use to render the scene.
	 * @param {Object} [options] - Additional options.
	 * @param {Material} [options.overrideMaterial=null] - An override material for the scene.
	 * @param {Color} [options.clearColor=null] - An override clear color.
	 * @param {Number} [options.clearAlpha=1.0] - An override clear alpha.
	 * @param {Boolean} [options.clearDepth=false] - Whether depth should be cleared explicitly.
	 * @param {Boolean} [options.clear=true] - Whether all buffers should be cleared.
	 */

	constructor(scene, camera, options = {}) {

		super(scene, camera, null);

		/**
		 * The name of this pass.
		 */

		this.name = "RenderPass";

		/**
		 * A clear pass.
		 *
		 * @type {ClearPass}
		 */

		this.clearPass = new ClearPass(options);

		/**
		 * An override material.
		 *
		 * @type {Material}
		 * @default null
		 */

		this.overrideMaterial = (options.overrideMaterial !== undefined) ? options.overrideMaterial : null;

		/**
		 * Indicates whether the depth buffer should be cleared explicitly.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.clearDepth = (options.clearDepth !== undefined) ? options.clearDepth : false;

		/**
		 * Indicates whether the color, depth and stencil buffers should be cleared.
		 *
		 * Even with clear set to true you can prevent specific buffers from being
		 * cleared by setting either the autoClearColor, autoClearStencil or
		 * autoClearDepth properties of the renderer to false.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.clear = (options.clear !== undefined) ? options.clear : true;

	}

	/**
	 * Renders the scene.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 */

	render(renderer, readBuffer) {

		const scene = this.scene;
		const target = this.renderToScreen ? null : readBuffer;

		if(this.clear) {

			this.clearPass.render(renderer, target);

		} else if(this.clearDepth) {

			renderer.setRenderTarget(target);
			renderer.clearDepth();

		}

		scene.overrideMaterial = this.overrideMaterial;
		renderer.render(scene, this.camera, target);
		scene.overrideMaterial = null;

	}

}

/**
 * A crepuscular rays pass.
 */

/**
 * A mask pass.
 */

class MaskPass extends Pass {

	/**
	 * Constructs a new mask pass.
	 *
	 * @param {Scene} scene - The scene to render.
	 * @param {Camera} camera - The camera to use.
	 */

	constructor(scene, camera) {

		super(scene, camera, null);

		/**
		 * The name of this pass.
		 */

		this.name = "MaskPass";

		/**
		 * Inverse flag.
		 *
		 * @type {Boolean}
		 * @default false
		 */

		this.inverse = false;

		/**
		 * Stencil buffer clear flag.
		 *
		 * @type {Boolean}
		 * @default true
		 */

		this.clearStencil = true;

	}

	/**
	 * Creates a stencil bit mask.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 * @param {WebGLRenderTarget} writeBuffer - The write buffer.
	 */

	render(renderer, readBuffer, writeBuffer) {

		const context = renderer.context;
		const state = renderer.state;

		const scene = this.scene;
		const camera = this.camera;

		const writeValue = this.inverse ? 0 : 1;
		const clearValue = 1 - writeValue;

		// Don't update color or depth.
		state.buffers.color.setMask(false);
		state.buffers.depth.setMask(false);

		// Lock the buffers.
		state.buffers.color.setLocked(true);
		state.buffers.depth.setLocked(true);

		// Configure the stencil.
		state.buffers.stencil.setTest(true);
		state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
		state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 0xffffffff);
		state.buffers.stencil.setClear(clearValue);

		// Clear the stencil.
		if(this.clearStencil) {

			renderer.setRenderTarget(readBuffer);
			renderer.clearStencil();

			renderer.setRenderTarget(writeBuffer);
			renderer.clearStencil();

		}

		// Draw the mask into both buffers.
		renderer.render(scene, camera, readBuffer);
		renderer.render(scene, camera, writeBuffer);

		// Unlock the buffers.
		state.buffers.color.setLocked(false);
		state.buffers.depth.setLocked(false);

		// Only render where the stencil is set to 1.
		state.buffers.stencil.setFunc(context.EQUAL, 1, 0xffffffff);
		state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);

	}

}

/**
 * A pixelation pass.
 */

/**
 * A pass that renders the result from a previous pass to another render target.
 */

/**
 * A shader pass.
 *
 * Used to render any shader material as a 2D filter.
 */

class ShaderPass extends Pass {

	/**
	 * Constructs a new shader pass.
	 *
	 * @param {ShaderMaterial} material - The shader material to use.
	 * @param {String} [textureID="tDiffuse"] - The texture uniform identifier.
	 */

	constructor(material, textureID = "tDiffuse") {

		super();

		/**
		 * The name of this pass.
		 */

		this.name = "ShaderPass";

		/**
		 * This pass renders to the write buffer.
		 */

		this.needsSwap = true;

		/**
		 * The shader material to use for rendering.
		 *
		 * @type {ShaderMaterial}
		 */

		this.material = material;

		this.quad.material = this.material;

		/**
		 * The name of the color sampler uniform of the given material.
		 *
		 * @type {String}
		 * @default "tDiffuse"
		 */

		this.textureID = textureID;

	}

	/**
	 * Renders the effect.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer.
	 * @param {WebGLRenderTarget} writeBuffer - The write buffer.
	 */

	render(renderer, readBuffer, writeBuffer) {

		if(this.material.uniforms[this.textureID] !== undefined) {

			this.material.uniforms[this.textureID].value = readBuffer.texture;

		}

		renderer.render(this.scene, this.camera, this.renderToScreen ? null : writeBuffer);

	}

}

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 * @static
 * @final
 */

const v = new three.Vector3();

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 * @static
 * @final
 */

const ab = new three.Vector3();

/**
 * A shock wave pass.
 */

/**
 * Subpixel Morphological Antialiasing (SMAA) v2.8.
 *
 * Preset: SMAA 1x Medium (with color edge detection).
 *  https://github.com/iryoku/smaa/releases/tag/v2.8
 */

/**
 * A pass that renders a given texture.
 */

/**
 * A tone mapping pass that supports adaptive luminosity.
 *
 * If adaptivity is enabled, this pass generates a texture that represents the
 * luminosity of the current scene and adjusts it over time to simulate the
 * optic nerve responding to the amount of light it is receiving.
 *
 * Reference:
 *  GDC2007 - Wolfgang Engel, Post-Processing Pipeline
 *  http://perso.univ-lyon1.fr/jean-claude.iehl/Public/educ/GAMA/2007/gdc07/Post-Processing_Pipeline.pdf
 */

/**
 * A compilation of the post processing passes.
 *
 * @module postprocessing/passes
 */

/**
 * The EffectComposer may be used in place of a normal WebGLRenderer.
 *
 * The auto clear behaviour of the provided renderer will be disabled to prevent
 * unnecessary clear operations.
 *
 * It is common practice to use a {@link RenderPass} as the first pass to
 * automatically clear the screen and render the scene to a texture for further
 * processing.
 */

class EffectComposer {

	/**
	 * Constructs a new effect composer.
	 *
	 * @param {WebGLRenderer} [renderer] - The renderer that should be used.
	 * @param {Object} [options] - The options.
	 * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
	 * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
	 * @param {Boolean} [options.depthTexture=false] - Set to true if one of your passes relies on a depth texture.
	 */

	constructor(renderer = null, options = {}) {

		/**
		 * The renderer.
		 *
		 * You may replace the renderer at any time by using
		 * {@link EffectComposer#replaceRenderer}.
		 *
		 * @type {WebGLRenderer}
		 */

		this.renderer = renderer;

		/**
		 * The read buffer.
		 *
		 * Reading from and writing to the same render target should be avoided.
		 * Therefore, two seperate yet identical buffers are used.
		 *
		 * @type {WebGLRenderTarget}
		 * @private
		 */

		this.readBuffer = null;

		/**
		 * The write buffer.
		 *
		 * @type {WebGLRenderTarget}
		 * @private
		 */

		this.writeBuffer = null;

		if(this.renderer !== null) {

			this.renderer.autoClear = false;

			this.readBuffer = this.createBuffer(
				(options.depthBuffer !== undefined) ? options.depthBuffer : true,
				(options.stencilBuffer !== undefined) ? options.stencilBuffer : false,
				(options.depthTexture !== undefined) ? options.depthTexture : false
			);

			this.writeBuffer = this.readBuffer.clone();

		}

		/**
		 * A copy pass used for copying masked scenes.
		 *
		 * @type {ShaderPass}
		 * @private
		 */

		this.copyPass = new ShaderPass(new CopyMaterial());

		/**
		 * The passes.
		 *
		 * @type {Pass[]}
		 * @private
		 */

		this.passes = [];

	}

	/**
	 * The depth texture of the read and write buffers.
	 *
	 * @type {DepthTexture}
	 * @default null
	 */

	get depthTexture() { return this.readBuffer.depthTexture; }

	/**
	 * The read and write buffers share a single depth texture. Depth will be
	 * written to this texture when something is rendered into one of the buffers
	 * and the involved materials have depth write enabled.
	 *
	 * You may enable this mechanism during the instantiation of the composer or
	 * by assigning a DepthTexture instance later on. You may also disable it by
	 * assigning null.
	 *
	 * @type {DepthTexture}
	 */

	set depthTexture(x) {

		this.readBuffer.depthTexture = x;
		this.writeBuffer.depthTexture = x;

	}

	/**
	 * Replaces the current renderer with the given one. The DOM element of the
	 * current renderer will automatically be removed from its parent node and the
	 * DOM element of the new renderer will take its place.
	 *
	 * The auto clear mechanism of the provided renderer will be disabled.
	 *
	 * Switching between renderers allows you to dynamically enable or disable
	 * antialiasing.
	 *
	 * @param {WebGLRenderer} renderer - The new renderer.
	 * @return {WebGLRenderer} The old renderer.
	 */

	replaceRenderer(renderer) {

		const oldRenderer = this.renderer;

		let parent, oldSize, newSize;

		if(oldRenderer !== null && oldRenderer !== renderer) {

			this.renderer = renderer;
			this.renderer.autoClear = false;

			parent = oldRenderer.domElement.parentNode;
			oldSize = oldRenderer.getSize();
			newSize = renderer.getSize();

			if(parent !== null) {

				parent.removeChild(oldRenderer.domElement);
				parent.appendChild(renderer.domElement);

			}

			if(oldSize.width !== newSize.width || oldSize.height !== newSize.height) {

				this.setSize();

			}

		}

		return oldRenderer;

	}

	/**
	 * Creates a new render target by replicating the renderer's canvas.
	 *
	 * The created render target uses a linear filter for texel minification and
	 * magnification. Its render texture format depends on whether the renderer
	 * uses the alpha channel. Mipmaps are disabled.
	 *
	 * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
	 * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
	 * @param {Boolean} depthTexture - Whether the render target should have a depth texture.
	 * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
	 */

	createBuffer(depthBuffer, stencilBuffer, depthTexture) {

		const size = this.renderer.getSize();
		const pixelRatio = this.renderer.getPixelRatio();
		const alpha = this.renderer.context.getContextAttributes().alpha;

		const renderTarget = new three.WebGLRenderTarget(size.width * pixelRatio, size.height * pixelRatio, {
			minFilter: three.LinearFilter,
			magFilter: three.LinearFilter,
			format: alpha ? three.RGBAFormat : three.RGBFormat,
			depthBuffer: depthBuffer,
			stencilBuffer: stencilBuffer,
			depthTexture: depthTexture ? new three.DepthTexture() : null
		});

		if(depthTexture && stencilBuffer) {

			renderTarget.depthTexture.format = three.DepthStencilFormat;
			renderTarget.depthTexture.type = three.UnsignedInt248Type;

		}

		renderTarget.texture.name = "EffectComposer.Buffer";
		renderTarget.texture.generateMipmaps = false;

		return renderTarget;

	}

	/**
	 * Adds a pass, optionally at a specific index.
	 *
	 * @param {Pass} pass - A new pass.
	 * @param {Number} [index] - An index at which the pass should be inserted.
	 */

	addPass(pass, index) {

		const renderer = this.renderer;
		const size = renderer.getSize();
		const pixelRatio = renderer.getPixelRatio();

		pass.setSize(size.width * pixelRatio, size.height * pixelRatio);
		pass.initialise(renderer, renderer.context.getContextAttributes().alpha);

		if(index !== undefined) {

			this.passes.splice(index, 0, pass);

		} else {

			this.passes.push(pass);

		}

	}

	/**
	 * Removes a pass.
	 *
	 * @param {Pass} pass - The pass.
	 */

	removePass(pass) {

		this.passes.splice(this.passes.indexOf(pass), 1);

	}

	/**
	 * Renders all enabled passes in the order in which they were added.
	 *
	 * @param {Number} delta - The time between the last frame and the current one in seconds.
	 */

	render(delta) {

		const passes = this.passes;
		const renderer = this.renderer;
		const copyPass = this.copyPass;

		let readBuffer = this.readBuffer;
		let writeBuffer = this.writeBuffer;

		let maskActive = false;
		let pass, context, buffer;
		let i, l;

		for(i = 0, l = passes.length; i < l; ++i) {

			pass = passes[i];

			if(pass.enabled) {

				pass.render(renderer, readBuffer, writeBuffer, delta, maskActive);

				if(pass.needsSwap) {

					if(maskActive) {

						context = renderer.context;
						context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);
						copyPass.render(renderer, readBuffer, writeBuffer);
						context.stencilFunc(context.EQUAL, 1, 0xffffffff);

					}

					buffer = readBuffer;
					readBuffer = writeBuffer;
					writeBuffer = buffer;

				}

				if(pass instanceof MaskPass) {

					maskActive = true;

				} else if(pass instanceof ClearMaskPass) {

					maskActive = false;

				}

			}

		}

	}

	/**
	 * Sets the size of the buffers and the renderer's output canvas.
	 *
	 * Every pass will be informed of the new size. It's up to each pass how that
	 * information is used.
	 *
	 * If no width or height is specified, the render targets and passes will be
	 * updated with the current size of the renderer.
	 *
	 * @param {Number} [width] - The width.
	 * @param {Number} [height] - The height.
	 */

	setSize(width, height) {

		const passes = this.passes;
		const size = this.renderer.getSize();
		const pixelRatio = this.renderer.getPixelRatio();

		let i, l;

		if(width === undefined || height === undefined) {

			width = size.width;
			height = size.height;

		}

		this.renderer.setSize(width, height);

		width *= pixelRatio;
		height *= pixelRatio;

		this.readBuffer.setSize(width, height);
		this.writeBuffer.setSize(width, height);

		for(i = 0, l = passes.length; i < l; ++i) {

			passes[i].setSize(width, height);

		}

	}

	/**
	 * Resets this composer by deleting all passes and creating new buffers.
	 *
	 * @param {WebGLRenderTarget} [renderTarget] - A new render target. If none is provided, the settings of the renderer will be used.
	 */

	reset(renderTarget) {

		const depthBuffer = this.readBuffer.depthBuffer;
		const stencilBuffer = this.readBuffer.stencilBuffer;
		const depthTexture = (this.readBuffer.depthTexture !== null);

		this.dispose((renderTarget === undefined) ?
			this.createBuffer(depthBuffer, stencilBuffer, depthTexture) :
			renderTarget
		);

	}

	/**
	 * Destroys all passes and render targets.
	 *
	 * This method deallocates all render targets, textures and materials created
	 * by the passes. It also deletes this composer's frame buffers.
	 *
	 * @param {WebGLRenderTarget} [renderTarget] - A new render target. If none is provided, the composer will become inoperative.
	 */

	dispose(renderTarget) {

		const passes = this.passes;

		if(this.readBuffer !== null && this.writeBuffer !== null) {

			this.readBuffer.dispose();
			this.writeBuffer.dispose();

			this.readBuffer = null;
			this.writeBuffer = null;

		}

		while(passes.length > 0) {

			passes.pop().dispose();

		}

		if(renderTarget !== undefined) {

			// Reanimate.
			this.readBuffer = renderTarget;
			this.writeBuffer = this.readBuffer.clone();

		} else {

			this.copyPass.dispose();

		}

	}

}

/**
 * Core components.
 *
 * @module postprocessing/core
 */

/**
 * Exposure of the library components.
 *
 * @module postprocessing
 */

var polyfill = function polyfill(object, method) {
  var showWarn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (object[method]) return;
  if (showWarn) console.warn('@PostProcessorModule: pass.' + method + '() was not found.', object);
  object[method] = function () {};
};

var PostProcessorModule = function () {
  function PostProcessorModule() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { debug: true },
        debug = _ref.debug;

    classCallCheck(this, PostProcessorModule);
    this.currentPass = null;
    this.defer = new Promise(function (resolve) {
      _this.resolve = resolve;
    });

    this.debug = debug;
  }

  createClass(PostProcessorModule, [{
    key: 'manager',
    value: function manager(_manager) {
      var _this2 = this;

      _manager.define('postprocessor');

      this.effects = _manager.use('rendering').effects;
      this.renderer = _manager.get('renderer');
      this.scene = _manager.get('scene');
      this.camera = _manager.get('camera');

      this.composer = new EffectComposer(this.renderer);

      _manager.use('rendering').stop();

      var composer = this.composer;
      this.renderLoop = new Loop(function (clock) {
        return composer.render(clock.getDelta());
      }).start(_manager.handler);

      _manager.update({
        renderer: function renderer(_renderer) {
          _this2.composer.replaceRenderer(_renderer);
        },

        scene: function scene(_scene) {
          _this2.scene = _scene;
        },

        camera: function camera(_camera) {
          _this2.camera = _camera;
        }
      });

      this.resolve();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.defer.then(function () {
        var pass = new RenderPass(_this3.scene, _this3.camera.native);

        // TODO: Support for effects.

        _this3.composer.addPass(pass);
        _this3.currentPass = pass;
      });

      return this;
    }

    // API

  }, {
    key: 'pass',
    value: function pass(_pass) {
      var _this4 = this;

      this.defer.then(function () {
        polyfill(_pass, 'setSize', _this4.debug);
        polyfill(_pass, 'initialise', _this4.debug);

        _this4.composer.addPass(_pass);
        _this4.currentPass = _pass;
      });

      return this;
    }
  }, {
    key: 'shader',
    value: function shader(material) {
      var _this5 = this;

      var textureID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'readBuffer';

      this.defer.then(function () {
        if (!material.uniforms[textureID]) material.uniforms[textureID] = { value: null };

        var pass = new ShaderPass(material, textureID);
        _this5.composer.addPass(pass);
        _this5.currentPass = pass;
      });

      return this;
    }

    // Pass API

  }, {
    key: 'get',
    value: function get$$1(name) {
      return name ? this.composer.passes.filter(function (pass) {
        return pass.name === name;
      })[0] : this.currentPass;
    }
  }, {
    key: 'to',
    value: function to(name) {
      this.currentPass = name;
    }
  }, {
    key: 'renderToScreen',
    value: function renderToScreen() {
      var _this6 = this;

      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.defer.then(function () {
        _this6.currentPass.renderToScreen = bool;
      });

      return this;
    }
  }, {
    key: 'name',
    value: function name(_name) {
      var _this7 = this;

      this.defer.then(function () {
        _this7.currentPass.name = _name;
      });

      return this;
    }
  }]);
  return PostProcessorModule;
}();

var EventsPatchModule = function () {
  function EventsPatchModule() {
    classCallCheck(this, EventsPatchModule);
  }

  createClass(EventsPatchModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('events');
      this.element = _manager.get('renderer').domElement;
    }
  }, {
    key: 'patchEvents',
    value: function patchEvents(originObject, destObject) {
      var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      events.forEach(function (event) {
        return originObject.addEventListener(event, function (e) {
          return destObject.emit(event, e);
        });
      });
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var element = self.element,
          patchEvents = self.patchEvents;


      patchEvents(element, this, ['mousemove', 'mouseup', 'contextmenu', 'mousedown', 'click', 'wheel', 'touchstart', 'touchend', 'touchmove', 'keydown']);

      patchEvents(element, this, ['keydown', 'keyup', 'keypress']);
    }
  }]);
  return EventsPatchModule;
}();

/**
 * @class VirtualMouseModule
 * @category modules/app
 * @param {Boolean} [globalMovement=false]
 * @memberof module:modules/app
 * @extends Events
 */

var VirtualMouseModule = function (_Events) {
  inherits(VirtualMouseModule, _Events);

  function VirtualMouseModule() {
    var globalMovement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    classCallCheck(this, VirtualMouseModule);

    var _this = possibleConstructorReturn(this, (VirtualMouseModule.__proto__ || Object.getPrototypeOf(VirtualMouseModule)).call(this));

    _this.mouse = new three.Vector2();
    _this.raycaster = new three.Raycaster();
    _this.world = null;
    _this.canvas = null;
    _this.projectionPlane = new three.Plane(new three.Vector3(0, 0, 1), 0);

    _this.globalMovement = globalMovement;
    return _this;
  }

  createClass(VirtualMouseModule, [{
    key: 'update',
    value: function update(e, customX, customY) {
      var rect = this.canvas.getBoundingClientRect();

      var x = customX || e.clientX;
      var y = customY || e.clientY;

      this.mouse.x = (x - rect.left) / (rect.right - rect.left) * 2 - 1;
      this.mouse.y = -((y - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

      this.projectionPlane.normal.copy(this.camera.getWorldDirection());

      this.raycaster.setFromCamera(this.mouse, this.camera);
      this.emit('move');
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('mouse');
      _manager.require('events', function () {
        return new EventsPatchModule();
      });

      this.canvas = _manager.get('renderer').domElement;
      this.camera = _manager.get('camera').native;
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      var _this2 = this;

      ['click', 'mousedown', 'mouseup', 'mousemove'].forEach(function (ev) {
        return _this2.on(ev, function (e) {
          return self.emit(ev, e);
        });
      });

      self.globalX = 0;
      self.globalY = 0;

      this.on('mousemove', function (e) {
        if (document.pointerLockElement !== null) {
          self.globalX += e.movementX;
          self.globalY += e.movementY;

          self.update(e, self.globalX, self.globalY);
        } else self.update(e);
      });
    }
  }, {
    key: 'track',
    value: function track(component) {
      var _this3 = this;

      var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var isHovered = false;

      this.on('move', function () {
        if (_this3.hovers(component, nested)) {
          if (isHovered) component.emit('mousemove');else {
            component.emit('mouseover');
            isHovered = true;
          }
        } else if (isHovered) {
          component.emit('mouseout');
          isHovered = false;
        }
      });

      this.on('click', function () {
        if (isHovered) component.emit('click');else component.emit('offClick');
      });

      this.on('mousedown', function () {
        if (isHovered) component.emit('mousedown');
      });

      this.on('mouseup', function () {
        if (isHovered) component.emit('mouseup');
      });
    }
  }, {
    key: 'intersection',
    value: function intersection(_ref) {
      var native = _ref.native;
      var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (native.children.length > 0 && nested) {
        var objects = [];
        native.traverse(function (child) {
          return objects.push(child);
        });

        return this.raycaster.intersectObjects(objects);
      }

      return this.raycaster.intersectObject(native);
    }
  }, {
    key: 'project',
    value: function project() {
      var plane = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.projectionPlane;

      return this.raycaster.ray.intersectPlane(plane);
    }
  }, {
    key: 'hovers',
    value: function hovers(component) {
      var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.intersection(component, nested).length > 0;
    }
  }, {
    key: 'ray',
    get: function get$$1() {
      return this.raycaster.ray;
    }
  }, {
    key: 'x',
    get: function get$$1() {
      return this.mouse.x;
    }
  }, {
    key: 'y',
    get: function get$$1() {
      return this.mouse.y;
    }
  }]);
  return VirtualMouseModule;
}(minivents_commonjs);

var ControlsModule = function () {
  createClass(ControlsModule, null, [{
    key: 'from',
    value: function from(controls) {
      return new ControlsModule({ controls: controls });
    }
  }]);

  function ControlsModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, ControlsModule);

    this.params = Object.assign({
      controls: false,
      fix: function fix(controls) {
        return controls;
      },

      update: function update(c) {
        this.controls.update(c.getDelta());
      }
    }, params);

    this.controls = this.params.controls;
    this.update = this.params.update;
  }

  createClass(ControlsModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.require('events', function () {
        return new EventsPatchModule();
      });
    }
  }, {
    key: 'setControls',
    value: function setControls(controls) {
      this.controls = controls;
      return this;
    }
  }, {
    key: 'setUpdate',
    value: function setUpdate(update) {
      this.update = update;
      return this;
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.updateLoop = new Loop(self.update.bind(self));
      self.updateLoop.start(this);
    }
  }]);
  return ControlsModule;
}();

/**
 * @class FogModule
 * @category modules/app
 * @param {Object} [params={color: 0xefd1b5, density: 0.020, near: 10, far: 1000}] - The parameters object.
 * @param {String} [type=exp2] - The type of fog - exp2 or linear
 * @memberof module:modules/app
 * @example <caption>How to create and apply a FogModule</caption>
 * const fogModule = new FogModule({
 *    color: 0xffffff,
 *    density: 0.03,
 *    near: 20,
 *    far: 200
 *  }, 'exp2');
 *
 * new App([
 *  ...,
 *  fogModule
 * ]);
 */

var FogModule = function () {
  function FogModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments[1];
    classCallCheck(this, FogModule);

    this.params = Object.assign({
      color: 0xefd1b5,
      density: 0.020,
      near: 10,
      far: 1000
    }, params);
    if (!type || type === 'exp2') this.fog = new three.FogExp2(this.params.color, this.params.density);else if (type === 'linear') this.fog = new three.Fog(this.params.color, this.params.near, this.params.far);
  }

  createClass(FogModule, [{
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('fog', this.fog);
      _manager.get('scene').fog = this.fog;
    }
  }]);
  return FogModule;
}();

var isEqualDefault = function isEqualDefault(a, b) {
  if (a === b) return true;else if (a && a.equals && a.equals(b)) return true;

  return false;
};

/**
 * @class StateModule
 * @description `StateModule` is useful for apps, where you need state manipulation.
 * This can be: _transitions between screens, games, development moments_.
 * You can check [basic/state](https://whs-dev.surge.sh/examples/?basic/state) example.
 * @category modules/app
 * @param {Object} [params]
 * @memberof module:modules/app
 * @example <caption> Creating a state module</caption>
 * new App([
 *   // ...
 *   new StateModule().default({
 *     sphereColor: 0xff0000
 *   })
 * ]);
 */

var StateModule = function () {
  createClass(StateModule, null, [{
    key: 'actionGenerate',
    value: function actionGenerate(isEqual) {
      return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}, ''];
        var _ref = arguments[1];
        var key = _ref.key,
            data = _ref.data;

        if (isEqual(state[0][key], data)) return state;

        state[0][key] = data;
        state[1] = key;

        return state;
      };
    }
  }]);

  function StateModule() {
    var equalCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isEqualDefault;
    classCallCheck(this, StateModule);

    this.store = createStore(StateModule.actionGenerate(equalCheck));

    this.configuration = {};
    this.currentConfig = 'default';
    this.prevConfig = 'default';
  }

  /**
   * @method default
   * @description Add default configuration.
   * @param {Object} data Configuration setup
   * @memberof module:modules/app.StateModule
   * @example
   * new WHS.StateModule().default({
   *   sphereColor: UTILS.$colors.mesh,
   *   planeColor: 0x447F8B
   * })
   */


  createClass(StateModule, [{
    key: 'default',
    value: function _default(data) {
      this.config({ default: data });
      return this;
    }

    /**
     * @method setEqualCheck
     * @description Sets an equalCheck function
     * @param {Object} data Configuration setup
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'setEqualCheck',
    value: function setEqualCheck(func) {
      this.store.replaceReducer(StateModule.actionGenerate(func));
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('state');
    }

    /**
     * @method config
     * @description Load configurations from object.
     * @param {Object} configs Configuration data
     * @memberof module:modules/app.StateModule
     * @example <caption> Adding `green` configuration</caption>
     * state.config({
     *   green: {
     *     sphereColor: 0x00ff00,
     *     planeColor: 0x00ff00
     *   }
     * });
     */

  }, {
    key: 'config',
    value: function config(configs) {
      for (var key in configs) {
        if (key) {
          this.configuration[key] = key === 'default' ? configs[key] : Object.assign({}, this.configuration.default, configs[key]);
        }
      }
    }

    /**
     * @method update
     * @description Load updates from object.
     * @param {Object} updates Updates data
     * @memberof module:modules/app.StateModule
     * @example <caption> Update callback for `sphereColor`</caption>
     * state.update({
     *   sphereColor: color => sphere.material.color.setHex(color)
     * });
     */

  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var updates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.store.subscribe(function () {
        var _store$getState = _this.store.getState(),
            _store$getState2 = slicedToArray(_store$getState, 2),
            data = _store$getState2[0],
            changedKey = _store$getState2[1];

        var callback = updates[changedKey];

        if (callback) callback(data[changedKey]);
      });
    }

    /**
     * @method to
     * @description Switch to configuration.
     * @param {String} configName Configuration name.
     * @memberof module:modules/app.StateModule
     * @example <caption> Changes configuration to `green`</caption>
     * state.to('green');
     */

  }, {
    key: 'to',
    value: function to(configName) {
      this.prevConfig = this.currentConfig;
      this.currentConfig = configName;

      var config = this.configuration[configName] ? this.configuration[configName] : this.configuration.default;

      this.set(config);
    }

    /**
     * @method set
     * @description Set current parameters.
     * @param {Object} data Configuration parameters.
     * @memberof module:modules/app.StateModule
     * @example
     * state.set({
     *   sphereColor: 0x00ff00
     * });
     */

  }, {
    key: 'set',
    value: function set$$1(data) {
      for (var key in data) {
        if (key) this.store.dispatch({ type: 'ADD', key: key, data: data[key] });
      }
    }

    /**
     * @method get
     * @description Return data of parameter.
     * @param {String} key Parameter name.
     * @memberof module:modules/app.StateModule
     * @example
     * state.get('sphereColor'); // 0x00ff00
     */

  }, {
    key: 'get',
    value: function get$$1(key) {
      return this.store.getState()[0][key];
    }

    /**
     * @method prev
     * @description Return `trueVal` if `config` match previous configuration, in other case - return `falseVal`.
     * @param {String} config Configuration name.
     * @param {Any} trueVal Value returned if condition is truthy.
     * @param {Any} falseVal CValue returned if condition is falsy.
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'prev',
    value: function prev(config, trueVal, falseVal) {
      return this.prevConfig === config ? trueVal : falseVal;
    }

    /**
     * @method current
     * @description Return `trueVal` if `config` match current configuration, in other case - return `falseVal`.
     * @param {String} config Configuration name.
     * @param {Any} trueVal Value returned if condition is truthy.
     * @param {Any} falseVal CValue returned if condition is falsy.
     * @memberof module:modules/app.StateModule
     */

  }, {
    key: 'current',
    value: function current(config, trueVal, falseVal) {
      return this.currentConfig === config ? trueVal : falseVal;
    }
  }]);
  return StateModule;
}();

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

var ThreeOrbitControls = function (_EventDispatcher) {
  inherits(ThreeOrbitControls, _EventDispatcher);

  function ThreeOrbitControls(object, domElement, eventHandler) {
    classCallCheck(this, ThreeOrbitControls);

    var _this = possibleConstructorReturn(this, (ThreeOrbitControls.__proto__ || Object.getPrototypeOf(ThreeOrbitControls)).call(this));

    _this.object = object;

    _this.domElement = domElement === undefined ? document : domElement;
    _this.eventHandler = eventHandler;

    // Set to false to disable this control
    _this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    _this.target = new three.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    _this.minDistance = 0;
    _this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    _this.minZoom = 0;
    _this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    _this.minPolarAngle = 0; // radians
    _this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    _this.minAzimuthAngle = -Infinity; // radians
    _this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    _this.enableDamping = false;
    _this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    _this.enableZoom = true;
    _this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    _this.enableRotate = true;
    _this.rotateSpeed = 1.0;

    // Set to false to disable panning
    _this.enablePan = true;
    _this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    _this.autoRotate = false;
    _this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    _this.enableKeys = true;

    // The four arrow keys
    _this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // Mouse buttons
    _this.mouseButtons = { ORBIT: three.MOUSE.LEFT, ZOOM: three.MOUSE.MIDDLE, PAN: three.MOUSE.RIGHT };

    // for reset
    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();
    _this.zoom0 = _this.object.zoom;

    //
    // public methods
    //

    _this.getPolarAngle = function () {
      return spherical.phi;
    };

    _this.getAzimuthalAngle = function () {
      return spherical.theta;
    };

    _this.reset = function () {
      _this.target.copy(_this.target0);
      _this.object.position.copy(_this.position0);
      _this.object.zoom = _this.zoom0;

      _this.object.updateProjectionMatrix();
      _this.dispatchEvent(changeEvent);

      _this.update();

      state = STATE.NONE;
    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    _this.update = function () {
      var offset = new three.Vector3();

      // so camera.up is the orbit axis
      var quat = new three.Quaternion().setFromUnitVectors(object.up, new three.Vector3(0, 1, 0));
      var quatInverse = quat.clone().inverse();

      var lastPosition = new three.Vector3();
      var lastQuaternion = new three.Quaternion();

      return function () {
        var position = _this.object.position;

        offset.copy(position).sub(_this.target);

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat);

        // angle from z-axis around y-axis
        spherical.setFromVector3(offset);

        if (_this.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle());

        spherical.theta += sphericalDelta.theta;
        spherical.phi += sphericalDelta.phi;

        // restrict theta to be between desired limits
        spherical.theta = Math.max(_this.minAzimuthAngle, Math.min(_this.maxAzimuthAngle, spherical.theta));

        // restrict phi to be between desired limits
        spherical.phi = Math.max(_this.minPolarAngle, Math.min(_this.maxPolarAngle, spherical.phi));

        spherical.makeSafe();

        spherical.radius *= scale;

        // restrict radius to be between desired limits
        spherical.radius = Math.max(_this.minDistance, Math.min(_this.maxDistance, spherical.radius));

        // move target to panned location
        _this.target.add(panOffset);

        offset.setFromSpherical(spherical);

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse);

        position.copy(_this.target).add(offset);

        _this.object.lookAt(_this.target);

        if (_this.enableDamping === true) {
          sphericalDelta.theta *= 1 - _this.dampingFactor;
          sphericalDelta.phi *= 1 - _this.dampingFactor;
        } else sphericalDelta.set(0, 0, 0);

        scale = 1;
        panOffset.set(0, 0, 0);

        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(_this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(_this.object.quaternion)) > EPS) {
          _this.dispatchEvent(changeEvent);

          lastPosition.copy(_this.object.position);
          lastQuaternion.copy(_this.object.quaternion);
          zoomChanged = false;

          return true;
        }

        return false;
      }();
    };

    _this.dispose = function () {
      _this.domElement.removeEventListener('contextmenu', onContextMenu, false);
      _this.domElement.removeEventListener('mousedown', onMouseDown, false);
      _this.domElement.removeEventListener('wheel', onMouseWheel, false);

      _this.domElement.removeEventListener('touchstart', onTouchStart, false);
      _this.domElement.removeEventListener('touchend', onTouchEnd, false);
      _this.domElement.removeEventListener('touchmove', onTouchMove, false);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      window.removeEventListener('keydown', onKeyDown, false);

      // this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    };

    //
    // internals
    //

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new three.Spherical();
    var sphericalDelta = new three.Spherical();

    var scale = 1;
    var panOffset = new three.Vector3();
    var zoomChanged = false;

    var rotateStart = new three.Vector2();
    var rotateEnd = new three.Vector2();
    var rotateDelta = new three.Vector2();

    var panStart = new three.Vector2();
    var panEnd = new three.Vector2();
    var panDelta = new three.Vector2();

    var dollyStart = new three.Vector2();
    var dollyEnd = new three.Vector2();
    var dollyDelta = new three.Vector2();

    var getAutoRotationAngle = function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * _this.autoRotateSpeed;
    };

    var getZoomScale = function getZoomScale() {
      return Math.pow(0.95, _this.zoomSpeed);
    };

    var rotateLeft = function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    };

    var rotateUp = function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    };

    var panLeft = function () {
      var v = new three.Vector3();

      return function (distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();

    var panUp = function () {
      var v = new three.Vector3();

      return function (distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function () {
      var offset = new three.Vector3();

      return function (deltaX, deltaY) {
        var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

        if (_this.object instanceof three.PerspectiveCamera) {
          // perspective
          var position = _this.object.position;
          offset.copy(position).sub(_this.target);
          var targetDistance = offset.length();

          // half of the fov is center to top of screen
          targetDistance *= Math.tan(_this.object.fov / 2 * Math.PI / 180.0);

          // we actually don't use screenWidth, since perspective camera is fixed to screen height
          panLeft(2 * deltaX * targetDistance / element.clientHeight, _this.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, _this.object.matrix);
        } else if (_this.object instanceof three.OrthographicCamera) {
          // orthographic
          panLeft(deltaX * (_this.object.right - _this.object.left) / _this.object.zoom / element.clientWidth, _this.object.matrix);
          panUp(deltaY * (_this.object.top - _this.object.bottom) / _this.object.zoom / element.clientHeight, _this.object.matrix);
        } else {
          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - pan disabled.');
          _this.enablePan = false;
        }
      };
    }();

    var dollyIn = function dollyIn(dollyScale) {
      if (_this.object instanceof three.PerspectiveCamera) scale /= dollyScale;else if (_this.object instanceof three.OrthographicCamera) {
        _this.object.zoom = Math.max(_this.minZoom, Math.min(_this.maxZoom, _this.object.zoom * dollyScale));
        _this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - dolly/zoom disabled.');
        _this.enableZoom = false;
      }
    };

    var dollyOut = function dollyOut(dollyScale) {
      if (_this.object instanceof three.PerspectiveCamera) scale *= dollyScale;else if (_this.object instanceof three.OrthographicCamera) {
        _this.object.zoom = Math.max(_this.minZoom, Math.min(_this.maxZoom, _this.object.zoom / dollyScale));
        _this.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControlsModule.js encountered an unknown camera type - dolly/zoom disabled.');
        _this.enableZoom = false;
      }
    };

    //
    // event callbacks - update the object state
    //

    var handleMouseDownRotate = function handleMouseDownRotate(event) {
      // console.log( 'handleMouseDownRotate' );

      rotateStart.set(event.clientX, event.clientY);
    };

    var handleMouseDownDolly = function handleMouseDownDolly(event) {
      // console.log( 'handleMouseDownDolly' );

      dollyStart.set(event.clientX, event.clientY);
    };

    var handleMouseDownPan = function handleMouseDownPan(event) {
      // console.log( 'handleMouseDownPan' );

      panStart.set(event.clientX, event.clientY);
    };

    var handleMouseMoveRotate = function handleMouseMoveRotate(event) {
      // console.log( 'handleMouseMoveRotate' );

      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * _this.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * _this.rotateSpeed);

      rotateStart.copy(rotateEnd);

      _this.update();
    };

    var handleMouseMoveDolly = function handleMouseMoveDolly(event) {
      // console.log( 'handleMouseMoveDolly' );

      dollyEnd.set(event.clientX, event.clientY);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) dollyIn(getZoomScale());else if (dollyDelta.y < 0) dollyOut(getZoomScale());

      dollyStart.copy(dollyEnd);

      _this.update();
    };

    var handleMouseMovePan = function handleMouseMovePan(event) {
      // console.log( 'handleMouseMovePan' );

      panEnd.set(event.clientX, event.clientY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      _this.update();
    };

    var handleMouseUp = function handleMouseUp(event) {
      // console.log( 'handleMouseUp' );
    };

    var handleMouseWheel = function handleMouseWheel(event) {
      // console.log( 'handleMouseWheel' );

      if (event.deltaY < 0) dollyOut(getZoomScale());else if (event.deltaY > 0) dollyIn(getZoomScale());

      _this.update();
    };

    var handleKeyDown = function handleKeyDown(event) {
      // console.log( 'handleKeyDown' );

      switch (event.keyCode) {
        case _this.keys.UP:
          pan(0, _this.keyPanSpeed);
          _this.update();
          break;

        case _this.keys.BOTTOM:
          pan(0, -_this.keyPanSpeed);
          _this.update();
          break;

        case _this.keys.LEFT:
          pan(_this.keyPanSpeed, 0);
          _this.update();
          break;

        case _this.keys.RIGHT:
          pan(-_this.keyPanSpeed, 0);
          _this.update();
          break;

      }
    };

    var handleTouchStartRotate = function handleTouchStartRotate(event) {
      // console.log( 'handleTouchStartRotate' );

      rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
    };

    var handleTouchStartDolly = function handleTouchStartDolly(event) {
      // console.log( 'handleTouchStartDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyStart.set(0, distance);
    };

    var handleTouchStartPan = function handleTouchStartPan(event) {
      // console.log( 'handleTouchStartPan' );

      panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    };

    var handleTouchMoveRotate = function handleTouchMoveRotate(event) {
      // console.log( 'handleTouchMoveRotate' );

      rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = _this.domElement === document ? _this.domElement.body : _this.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * _this.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * _this.rotateSpeed);

      rotateStart.copy(rotateEnd);

      _this.update();
    };

    var handleTouchMoveDolly = function handleTouchMoveDolly(event) {
      // console.log( 'handleTouchMoveDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyEnd.set(0, distance);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) dollyOut(getZoomScale());else if (dollyDelta.y < 0) dollyIn(getZoomScale());

      dollyStart.copy(dollyEnd);

      _this.update();
    };

    var handleTouchMovePan = function handleTouchMovePan(event) {
      // console.log( 'handleTouchMovePan' );

      panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      _this.update();
    };

    var handleTouchEnd = function handleTouchEnd() {
      // console.log( 'handleTouchEnd' );
    };

    //
    // event handlers - FSM: listen for events and reset state
    //

    var onMouseDown = function onMouseDown(event) {
      if (_this.enabled === false) return;

      event.preventDefault();

      if (event.button === _this.mouseButtons.ORBIT) {
        if (_this.enableRotate === false) return;

        handleMouseDownRotate(event);

        state = STATE.ROTATE;
      } else if (event.button === _this.mouseButtons.ZOOM) {
        if (_this.enableZoom === false) return;

        handleMouseDownDolly(event);

        state = STATE.DOLLY;
      } else if (event.button === _this.mouseButtons.PAN) {
        if (_this.enablePan === false) return;

        handleMouseDownPan(event);

        state = STATE.PAN;
      }

      if (state !== STATE.NONE) {
        _this.eventHandler.on('mousemove', onMouseMove, false);
        _this.eventHandler.on('mouseup', onMouseUp, false);

        _this.dispatchEvent(startEvent);
      }
    };

    var onMouseMove = function onMouseMove(event) {
      if (_this.enabled === false) return;

      event.preventDefault();

      if (state === STATE.ROTATE) {
        if (_this.enableRotate === false) return;

        handleMouseMoveRotate(event);
      } else if (state === STATE.DOLLY) {
        if (_this.enableZoom === false) return;

        handleMouseMoveDolly(event);
      } else if (state === STATE.PAN) {
        if (_this.enablePan === false) return;

        handleMouseMovePan(event);
      }
    };

    var onMouseUp = function onMouseUp(event) {
      if (_this.enabled === false) return;

      handleMouseUp(event);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      _this.dispatchEvent(endEvent);

      state = STATE.NONE;
    };

    var onMouseWheel = function onMouseWheel(event) {
      if (_this.enabled === false || _this.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

      event.preventDefault();
      event.stopPropagation();

      handleMouseWheel(event);

      _this.dispatchEvent(startEvent); // not sure why these are here...
      _this.dispatchEvent(endEvent);
    };

    var onKeyDown = function onKeyDown(event) {
      if (_this.enabled === false || _this.enableKeys === false || _this.enablePan === false) return;

      handleKeyDown(event);
    };

    var onTouchStart = function onTouchStart(event) {
      if (_this.enabled === false) return;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate

          if (_this.enableRotate === false) return;

          handleTouchStartRotate(event);

          state = STATE.TOUCH_ROTATE;

          break;

        case 2:
          // two-fingered touch: dolly

          if (_this.enableZoom === false) return;

          handleTouchStartDolly(event);

          state = STATE.TOUCH_DOLLY;

          break;

        case 3:
          // three-fingered touch: pan

          if (_this.enablePan === false) return;

          handleTouchStartPan(event);

          state = STATE.TOUCH_PAN;

          break;

        default:

          state = STATE.NONE;

      }

      if (state !== STATE.NONE) _this.dispatchEvent(startEvent);
    };

    var onTouchMove = function onTouchMove(event) {
      if (_this.enabled === false) return;

      event.preventDefault();
      event.stopPropagation();

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate

          if (_this.enableRotate === false) return;
          if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

          handleTouchMoveRotate(event);

          break;

        case 2:
          // two-fingered touch: dolly

          if (_this.enableZoom === false) return;
          if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

          handleTouchMoveDolly(event);

          break;

        case 3:
          // three-fingered touch: pan

          if (_this.enablePan === false) return;
          if (state !== STATE.TOUCH_PAN) return; // is this needed?...

          handleTouchMovePan(event);

          break;

        default:

          state = STATE.NONE;

      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (_this.enabled === false) return;

      handleTouchEnd(event);

      _this.dispatchEvent(endEvent);

      state = STATE.NONE;
    };

    var onContextMenu = function onContextMenu(event) {
      event.preventDefault();
    };

    //

    _this.eventHandler.on('contextmenu', onContextMenu, false);

    _this.eventHandler.on('mousedown', onMouseDown, false);
    _this.eventHandler.on('wheel', onMouseWheel, false);

    _this.eventHandler.on('touchstart', onTouchStart, false);
    _this.eventHandler.on('touchend', onTouchEnd, false);
    _this.eventHandler.on('touchmove', onTouchMove, false);

    _this.eventHandler.on('keydown', onKeyDown, false);

    // force an update at start

    _this.update();
    return _this;
  }

  createClass(ThreeOrbitControls, [{
    key: 'center',
    get: function get$$1() {
      console.warn('OrbitControls: .center has been renamed to .target');
      return this.target;
    }
  }, {
    key: 'noZoom',
    get: function get$$1() {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;
    }
  }, {
    key: 'noRotate',
    get: function get$$1() {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;
    }
  }, {
    key: 'noPan',
    get: function get$$1() {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;
    }
  }, {
    key: 'noKeys',
    get: function get$$1() {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;
    }
  }, {
    key: 'staticMoving',
    get: function get$$1() {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;
    }
  }, {
    key: 'dynamicDampingFactor',
    get: function get$$1() {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;
    },
    set: function set$$1(value) {
      console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;
    }
  }]);
  return ThreeOrbitControls;
}(three.EventDispatcher);

var OrbitControlsModule = function (_ControlsModule) {
  inherits(OrbitControlsModule, _ControlsModule);

  function OrbitControlsModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, OrbitControlsModule);

    var _this = possibleConstructorReturn(this, (OrbitControlsModule.__proto__ || Object.getPrototypeOf(OrbitControlsModule)).call(this, params));

    _this.params = Object.assign({
      follow: false,
      object: null,
      target: new three.Vector3(0, 0, 0)
    }, params);
    return _this;
  }

  createClass(OrbitControlsModule, [{
    key: 'manager',
    value: function manager(_manager) {
      get(OrbitControlsModule.prototype.__proto__ || Object.getPrototypeOf(OrbitControlsModule.prototype), 'manager', this).call(this, _manager);

      var _params = this.params,
          obj = _params.object,
          follow = _params.follow,
          target = _params.target;

      var object = obj ? obj.native : _manager.get('camera').native;

      var controls = new ThreeOrbitControls(object, _manager.get('element'), _manager.handler);

      var updateProcessor = follow ? function (c) {
        controls.update(c.getDelta());
        controls.target.copy(target);
      } : function (c) {
        controls.update(c.getDelta());
      };

      this.setControls(controls);
      this.setUpdate(updateProcessor);

      _manager.update({
        camera: function camera(_camera) {
          if (obj) return;
          controls.object = _camera.native;
        }
      });

      controls.target.copy(target);
    }
  }]);
  return OrbitControlsModule;
}(ControlsModule);

/** @module modules/app/controls */

/** @module modules/app */

/**
 * @class DynamicGeometryModule
 * @category modules/mesh
 * @param {Object} [params={attributes: false}] - params
 * @param {Boolean} [patchEvents=true]
 * @memberof module:modules/mesh
 */
var DynamicGeometryModule = function () {
  function DynamicGeometryModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, DynamicGeometryModule);

    this.params = Object.assign({
      attributes: false
    }, params);
  }

  createClass(DynamicGeometryModule, [{
    key: "integrate",
    value: function integrate(self) {
      var _this = this;

      var params = self.params;

      this.g_ = function () {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.buildGeometry) {
          this.native.geometry = this.buildGeometry(this.updateParams({ geometry: params }));
        }
      };

      if (params.attributes) {
        var _loop = function _loop(key) {
          if (key) {
            Object.defineProperty(_this, "g_" + key, {
              get: function get$$1() {
                return this.native.geometry.parameters[key];
              },
              set: function set$$1(value) {
                this.native.geometry = this.buildGeometry(this.updateParams({ geometry: defineProperty({}, key, value) }));
              },

              configurable: true,
              enumerable: true
            });
          }
        };

        for (var key in this.params.geometry) {
          _loop(key);
        }
      }
    }
  }]);
  return DynamicGeometryModule;
}();

var loader = new three.TextureLoader();

/**
 * @class TextureModule
 * @category modules/mesh
 * @description A TextureModule can be applied to any Mesh or Model.
 * @param {Array} [textures] - array of texture objects
 * @memberof module:modules/mesh
 * @example <caption>Creating an instance. url takes a path, or a data object.</caption>
 * var woodTexture = new TextureModule({
 *   url: `${process.assetsPath}/textures/wood.jpg`
 * });
 * @example <caption>More comprehensive example, wood texture applied to a Box.</caption>
 * new Box({
 *   geometry: {
 *     width: 2,
 *     height: 2,
 *     depth: 2
 *   },
 *   modules: [
 *     new TextureModule({
 *       url: `path/to/texture.jpg`,
 *       repeat: new THREE.Vector2(1, 1) // optional
 *     })
 *   ],
 *   material: new THREE.MeshBasicMaterial({
 *     color: 0xffffff
 *   }),
 *   position: [50, 60, 70]
 * }).addTo(app);
 */
var TextureModule = function () {
  createClass(TextureModule, null, [{
    key: 'load',
    value: function load(url) {
      return new TextureModule({ url: url }).textures[0][1];
    }
  }]);

  function TextureModule() {
    var _this = this;

    classCallCheck(this, TextureModule);
    this.textures = [];
    this.bridge = {
      material: function material(_material, self) {
        self.textures.forEach(function (texture) {
          _material[texture[0]] = texture[1];
        });

        return _material;
      }
    };

    for (var _len = arguments.length, textures = Array(_len), _key = 0; _key < _len; _key++) {
      textures[_key] = arguments[_key];
    }

    textures.forEach(function (_ref) {
      var url = _ref.url,
          _ref$type = _ref.type,
          type = _ref$type === undefined ? 'map' : _ref$type,
          _ref$offset = _ref.offset,
          offset = _ref$offset === undefined ? new three.Vector2(0, 0) : _ref$offset,
          _ref$repeat = _ref.repeat,
          repeat = _ref$repeat === undefined ? new three.Vector2(1, 1) : _ref$repeat,
          _ref$wrap = _ref.wrap,
          wrap = _ref$wrap === undefined ? three.RepeatWrapping : _ref$wrap,
          _ref$mapping = _ref.mapping,
          mapping = _ref$mapping === undefined ? three.UVMapping : _ref$mapping,
          _ref$fix = _ref.fix,
          fix = _ref$fix === undefined ? function (tex) {
        return tex;
      } : _ref$fix;

      var texture = loader.load(url);

      if (wrap.length > 0) {
        texture.wrapS = wrap[0];
        texture.wrapT = wrap[1];
      } else texture.wrapS = texture.wrapT = wrap;

      texture.mapping = mapping;

      texture.offset.copy(offset);
      texture.repeat.copy(repeat);

      texture.magFilter = three.NearestFilter;
      texture.minFilter = three.LinearMipMapLinearFilter;

      _this.textures.push([type, fix(texture)]);
    });
  }

  return TextureModule;
}();

/**
 * @class AnimationModule
 * @category modules/mesh
 * @description Convenience module that wraps the <a href='https://threejs.org/docs/#manual/introduction/Animation-system'>three.js animation system</a>
 * @param {App} app - the app
 * @param {Boolean} [isDeferred=false] - set to true if animation should not start automatically
 * @param {Object} [params={speed: 1}] - the params
 * @memberof module:modules/mesh
 * @example <caption>Create animation module and play a given clip of an imported model</caption>
 * const animationModule = new AnimationModule(app, false, {
 *   speed: 1.2 // speed up animation by 20%
 * });
 *
 * new Importer({
 *   parser(geometry, materials) {
 *     // Override parse to generate a skinnedMesh, needed for skinned models
 *     return new THREE.SkinnedMesh(geometry, materials);
 *   },
 *
 *   url: `path/to/model.json`,
 *   useCustomMaterial: true,
 *
 *   material: new THREE.MeshStandardMaterial({
 *     skinning: true
 *   }),
 *
 *   modules: [animationModule]
 * }).addTo(app).then(() => {
 *   // adding model to app returns a promise, so pipe the function to kick off the animation clip
 *   animationModule.play('clipName');
 * });
 */

var AnimationModule = function () {
  function AnimationModule(app, isDeferred) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, AnimationModule);
    this.bridge = {
      mesh: function mesh(_mesh, self) {
        _mesh.geometry.skeleton = _mesh.skeleton;

        self.mixer = new three.AnimationMixer(_mesh.geometry);
        self.clips = _mesh.geometry.animations;

        return _mesh;
      }
    };

    this.params = Object.assign({
      speed: 1
    }, params);
    this.clock = new three.Clock();

    this.app = app;
    this.isDeferred = isDeferred;
  }

  /**
   * @method play
   * @instance
   * @description Plays the given clip name
   * @param {String} clipName - the clip to play
   * @memberof module:modules/mesh.AnimationModule
   */


  createClass(AnimationModule, [{
    key: 'play',
    value: function play(clipName) {
      var clip = three.AnimationClip.findByName(this.clips, clipName);
      var action = this.mixer.clipAction(clip);

      action.play();
    }

    /**
     * @method update
     * @instance
     * @description Update the mixer (being called on frame animation loop)
     * @memberof module:modules/mesh.AnimationModule
     */

  }, {
    key: 'update',
    value: function update() {
      if (this.mixer) this.mixer.update(this.clock.getDelta() * this.params.speed);
    }
  }, {
    key: 'integrate',
    value: function integrate(self) {
      self.loop = new Loop(function () {
        self.update();
      });

      if (!self.isDeferred) self.loop.start(self.app);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.define('animation');
    }
  }]);
  return AnimationModule;
}();

/** @module modules/mesh */

/**
 * @class DefineModule
 * @category modules
 * @param {String} name
 * @param {Object} data
 * @memberof module:modules
 * @example <caption> Creating a DefineModule with PerspectiveCamera as camera module and passing it to App's modules</caption>
 * new App([
 *   // ...
 *   new DefineModule('camera', new PerspectiveCamera())
 * ]);
 */
var DefineModule = function () {
  function DefineModule(name, data) {
    classCallCheck(this, DefineModule);

    this.name = name;
    this.data = data;
  }

  createClass(DefineModule, [{
    key: "manager",
    value: function manager(_manager) {
      _manager.set(this.name, this.data);
    }
  }]);
  return DefineModule;
}();

/** @module modules */

var Model = function (_Importer) {
  inherits(Model, _Importer);

  function Model(params) {
    var _ref;

    classCallCheck(this, Model);

    console.warn('Model is deprecated. Use Importer instead.');

    if (params.geometry) {
      params.url = params.geometry.path;
      params.loader = params.geometry.loader;
    }

    for (var _len = arguments.length, additional = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      additional[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Model.__proto__ || Object.getPrototypeOf(Model)).call.apply(_ref, [this, params].concat(additional)));
  }

  return Model;
}(Importer);

var CameraModule = function () {
  function CameraModule() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CameraModule);

    console.warn('CameraModule is deprecated. Use DefineModule instead.');
    this.camera = new PerspectiveCamera$1(params);
  }

  createClass(CameraModule, [{
    key: 'integrate',
    value: function integrate(self) {
      this.add(self.camera);
    }
  }, {
    key: 'manager',
    value: function manager(_manager) {
      _manager.set('camera', this.camera);
    }
  }]);
  return CameraModule;
}();

/**
 * Namespace containing all classes from all modules. Used as global in UMD pattern.
 * @namespace WHS
 * @example <caption>The use of WHS namespace.</caption>
 * new WHS.App() // core
 * new WHS.PerspectiveCamera() // components
 * new WHS.ResizeModule() // modules
 * WHS.extend() // utils
 */

exports.Component = Component;
exports.MeshComponent = MeshComponent;
exports.LightComponent = LightComponent;
exports.CameraComponent = CameraComponent;
exports.App = App;
exports.Loop = Loop;
exports.ModuleManager = ModuleManager;
exports.AmbientLight = AmbientLight$1;
exports.DirectionalLight = DirectionalLight$1;
exports.HemisphereLight = HemisphereLight$1;
exports.PointLight = PointLight$1;
exports.SpotLight = SpotLight$1;
exports.AreaLight = AreaLight;
exports.CubeCamera = CubeCamera$1;
exports.OrthographicCamera = OrthographicCamera$1;
exports.PerspectiveCamera = PerspectiveCamera$1;
exports.Box = Box;
exports.Circle = Circle;
exports.Cone = Cone;
exports.Cylinder = Cylinder;
exports.Dodecahedron = Dodecahedron;
exports.Extrude = Extrude;
exports.Icosahedron = Icosahedron;
exports.Lathe = Lathe;
exports.Line = Line$1;
exports.Importer = Importer;
exports.Octahedron = Octahedron;
exports.Parametric = Parametric;
exports.Plane = Plane$1;
exports.Polyhedron = Polyhedron;
exports.Ring = Ring;
exports.Shape = Shape;
exports.Sphere = Sphere;
exports.Tetrahedron = Tetrahedron;
exports.Text = Text;
exports.Torus = Torus;
exports.Torusknot = Torusknot;
exports.Tube = Tube;
exports.Group = Group;
exports.extend = extend;
exports.instruct = instruct;
exports.transformData = transformData;
exports.toArray = toArray;
exports.ElementModule = ElementModule;
exports.RenderingModule = RenderingModule;
exports.SceneModule = SceneModule;
exports.ResizeModule = ResizeModule;
exports.PostProcessorModule = PostProcessorModule;
exports.VirtualMouseModule = VirtualMouseModule;
exports.EventsPatchModule = EventsPatchModule;
exports.ControlsModule = ControlsModule;
exports.FogModule = FogModule;
exports.StateModule = StateModule;
exports.OrbitControlsModule = OrbitControlsModule;
exports.DynamicGeometryModule = DynamicGeometryModule;
exports.TextureModule = TextureModule;
exports.AnimationModule = AnimationModule;
exports.DefineModule = DefineModule;
exports.Model = Model;
exports.CameraModule = CameraModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZXh0ZW5kLmpzIiwiLi4vc3JjL3V0aWxzL3RyYW5zZm9ybURhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWluaXZlbnRzL2Rpc3QvbWluaXZlbnRzLmNvbW1vbmpzLmpzIiwiLi4vc3JjL2NvcmUvZXJyb3JzLmpzIiwiLi4vc3JjL2NvcmUvTW9kdWxlU3lzdGVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21wb3NlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIiwiLi4vc3JjL2NvcmUvTW9kdWxlTWFuYWdlci5qcyIsIi4uL3NyYy9jb3JlL0NvbXBvbmVudC5qcyIsIi4uL3NyYy9jb3JlL3Byb3RvdHlwZS9hdHRyaWJ1dGVzLmpzIiwiLi4vc3JjL2NvcmUvTWVzaENvbXBvbmVudC5qcyIsIi4uL3NyYy9jb3JlL0xpZ2h0Q29tcG9uZW50LmpzIiwiLi4vc3JjL2NvcmUvQ2FtZXJhQ29tcG9uZW50LmpzIiwiLi4vc3JjL3BvbHlmaWxsLmpzIiwiLi4vc3JjL2NvcmUvQXBwLmpzIiwiLi4vc3JjL2NvcmUvTG9vcC5qcyIsIi4uL3NyYy9jb3JlL2luZGV4LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbGlnaHRzL0FtYmllbnRMaWdodC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9EaXJlY3Rpb25hbExpZ2h0LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbGlnaHRzL0hlbWlzcGhlcmVMaWdodC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9Qb2ludExpZ2h0LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbGlnaHRzL1Nwb3RMaWdodC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2xpZ2h0cy9BcmVhTGlnaHQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9saWdodHMvaW5kZXguanMiLCIuLi9zcmMvY29tcG9uZW50cy9jYW1lcmFzL0N1YmVDYW1lcmEuanMiLCIuLi9zcmMvY29tcG9uZW50cy9jYW1lcmFzL09ydGhvZ3JhcGhpY0NhbWVyYS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2NhbWVyYXMvUGVyc3BlY3RpdmVDYW1lcmEuanMiLCIuLi9zcmMvY29tcG9uZW50cy9jYW1lcmFzL2luZGV4LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL0JveC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9DaXJjbGUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvQ29uZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9DeWxpbmRlci5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9Eb2RlY2FoZWRyb24uanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvRXh0cnVkZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9JY29zYWhlZHJvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9MYXRoZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9MaW5lLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL0ltcG9ydGVyLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL09jdGFoZWRyb24uanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvUGFyYW1ldHJpYy5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9QbGFuZS5qcyIsIi4uL3NyYy9jb21wb25lbnRzL21lc2hlcy9Qb2x5aGVkcm9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1JpbmcuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvU2hhcGUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvU3BoZXJlLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1RldHJhaGVkcm9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1RleHQuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvVG9ydXMuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvVG9ydXNrbm90LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvbWVzaGVzL1R1YmUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvR3JvdXAuanMiLCIuLi9zcmMvY29tcG9uZW50cy9tZXNoZXMvaW5kZXguanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvRWxlbWVudE1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9SZW5kZXJpbmdNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvU2NlbmVNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvUmVzaXplTW9kdWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvYWRhcHRpdmUtbHVtaW5vc2l0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2Jva2VoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvYm9rZWgyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvY29tYmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2NvbnZvbHV0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvY29weS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2RlcHRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvZG90LXNjcmVlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2ZpbG0uanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9nbGl0Y2guanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9nb2QtcmF5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL2x1bWlub3NpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9waXhlbGF0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvc2hvY2std2F2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvbWF0ZXJpYWxzL3NtYWEtYmxlbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL21hdGVyaWFscy9zbWFhLWNvbG9yLWVkZ2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvc21hYS13ZWlnaHRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvdG9uZS1tYXBwaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9tYXRlcmlhbHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9wYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvYmx1ci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2Jsb29tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvYm9rZWguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9ib2tlaDIuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9jbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL2NsZWFyLW1hc2suanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9kb3Qtc2NyZWVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvZGVwdGguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9maWxtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvZ2xpdGNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvcmVuZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvZ29kLXJheXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9tYXNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvcGl4ZWxhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL3NhdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9zaGFkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9zaG9jay13YXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Bvc3Rwcm9jZXNzaW5nL3NyYy9wYXNzZXMvc21hYS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvcGFzc2VzL3RleHR1cmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy90b25lLW1hcHBpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL3Bhc3Nlcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb3N0cHJvY2Vzc2luZy9zcmMvY29yZS9lZmZlY3QtY29tcG9zZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL2NvcmUvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9zdHByb2Nlc3Npbmcvc3JjL2luZGV4LmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL1Bvc3RQcm9jZXNzb3JNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvRXZlbnRzUGF0Y2hNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvVmlydHVhbE1vdXNlTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL0NvbnRyb2xzTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL0ZvZ01vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9TdGF0ZU1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2FwcC9jb250cm9scy9saWIvVGhyZWVPcmJpdENvbnRyb2xzLmpzIiwiLi4vc3JjL21vZHVsZXMvYXBwL2NvbnRyb2xzL09yYml0Q29udHJvbHNNb2R1bGUuanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvY29udHJvbHMvaW5kZXguanMiLCIuLi9zcmMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCIuLi9zcmMvbW9kdWxlcy9tZXNoL0R5bmFtaWNHZW9tZXRyeU1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL21lc2gvVGV4dHVyZU1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL21lc2gvQW5pbWF0aW9uTW9kdWxlLmpzIiwiLi4vc3JjL21vZHVsZXMvbWVzaC9pbmRleC5qcyIsIi4uL3NyYy9tb2R1bGVzL0RlZmluZU1vZHVsZS5qcyIsIi4uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwiLi4vc3JjL2RlcHJlY2F0aW9uLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHRlbmQgPSAob2JqZWN0LCAuLi5leHRlbnNpb25zKSA9PiB7IC8vICQuZXh0ZW5kIGFsdGVybmF0aXZlLCAuLi4gaXMgdGhlIHNwcmVhZCBvcGVyYXRvci5cbiAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgIC8vIGNvbnNvbGUubG9nKGV4dGVuc2lvbik7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIGV4dGVuc2lvbik7XG5cbiAgICBpZiAoIWV4dGVuc2lvbilcbiAgICAgIGNvbnRpbnVlOyAvLyBJZ25vcmUgbnVsbCBhbmQgdW5kZWZpbmVkIG9iamVjdHMgYW5kIHBhcmFtZXRlcnMuXG5cbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXh0ZW5zaW9uKSkgeyAvLyBEbyBub3QgdHJhdmVyc2UgdGhlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgIGlmIChvYmplY3RbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBleHRlbnNpb25bcHJvcF1cbiAgICAgICAgJiYgb2JqZWN0W3Byb3BdLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICYmIGV4dGVuc2lvbltwcm9wXS50b1N0cmluZygpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAvLyBHb2VzIGRlZXAgb25seSBpZiBvYmplY3RbcHJvcF0gYW5kIGV4dGVuc2lvbltwcm9wXSBhcmUgYm90aCBvYmplY3RzICFcbiAgICAgICAgaWYgKGV4dGVuc2lvbltwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSBleHRlbmQob2JqZWN0W3Byb3BdLCBleHRlbnNpb25bcHJvcF0pO1xuICAgICAgICBlbHNlIG9iamVjdFtwcm9wXSA9IGV4dGVuc2lvbltwcm9wXTtcbiAgICAgIH0gZWxzZVxuICAgICAgICBvYmplY3RbcHJvcF0gPSB0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAndW5kZWZpbmVkJyA/IGV4dGVuc2lvbltwcm9wXSA6IG9iamVjdFtwcm9wXTtcblxuICAgICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkoZXh0ZW5zaW9uW3Byb3BdKSkgb2JqZWN0W3Byb3BdID0gZXh0ZW5zaW9uW3Byb3BdLnNsaWNlKCk7IC8vIEFkZCB2YWx1ZXMgdGhhdCBkbyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkoZXh0ZW5zaW9uW3Byb3BdKSkgb2JqZWN0W3Byb3BdID0gZXh0ZW5zaW9uW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGluc3RydWN0ID0gKGFycmF5LCBpbnN0QXJyYXkpID0+IHtcbiAgY29uc3QgdGVtcE9iamVjdCA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBtYXggPSBpbnN0QXJyYXkubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICBjb25zdCBndWlkZSA9IGluc3RBcnJheVtpXTtcblxuICAgIHRlbXBPYmplY3RbZ3VpZGVdID0gYXJyYXlbaV07XG4gIH1cblxuICByZXR1cm4gdGVtcE9iamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1EYXRhID0gKG9iamVjdCwgaW5zdHJ1Y3Rpb25zKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIGluc3RydWN0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdFtrZXldKSlcbiAgICAgIG9iamVjdFtrZXldID0gaW5zdHJ1Y3Qob2JqZWN0W2tleV0sIGluc3RydWN0aW9uc1trZXldKTtcbiAgICBlbHNlIGlmIChvYmplY3Rba2V5XSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKEFycmF5LmlzQXJyYXkoaW5zdHJ1Y3Rpb25zW2tleV0pKSlcbiAgICAgIG9iamVjdFtrZXldID0gdHJhbnNmb3JtRGF0YShvYmplY3Rba2V5XSwgaW5zdHJ1Y3Rpb25zW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gKG9iamVjdCwgaW5zdHJ1Y3Rpb24pID0+IHtcbiAgY29uc3QgdGVtcEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGluc3RydWN0aW9uLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgY29uc3QgZ3VpZGUgPSBpbnN0cnVjdGlvbltpXTtcblxuICAgIHRlbXBBcnJheVtpXSA9IG9iamVjdFtndWlkZV07XG4gIH1cblxuICByZXR1cm4gdGVtcEFycmF5O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gRXZlbnRzKHRhcmdldCl7XG4gIHZhciBldmVudHMgPSB7fSwgZW1wdHkgPSBbXTtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXNcbiAgLyoqXG4gICAqICBPbjogbGlzdGVuIHRvIGV2ZW50c1xuICAgKi9cbiAgdGFyZ2V0Lm9uID0gZnVuY3Rpb24odHlwZSwgZnVuYywgY3R4KXtcbiAgICAoZXZlbnRzW3R5cGVdID0gZXZlbnRzW3R5cGVdIHx8IFtdKS5wdXNoKFtmdW5jLCBjdHhdKVxuICB9XG4gIC8qKlxuICAgKiAgT2ZmOiBzdG9wIGxpc3RlbmluZyB0byBldmVudCAvIHNwZWNpZmljIGNhbGxiYWNrXG4gICAqL1xuICB0YXJnZXQub2ZmID0gZnVuY3Rpb24odHlwZSwgZnVuYyl7XG4gICAgdHlwZSB8fCAoZXZlbnRzID0ge30pXG4gICAgdmFyIGxpc3QgPSBldmVudHNbdHlwZV0gfHwgZW1wdHksXG4gICAgICAgIGkgPSBsaXN0Lmxlbmd0aCA9IGZ1bmMgPyBsaXN0Lmxlbmd0aCA6IDA7XG4gICAgd2hpbGUoaS0tKSBmdW5jID09IGxpc3RbaV1bMF0gJiYgbGlzdC5zcGxpY2UoaSwxKVxuICB9XG4gIC8qKiBcbiAgICogRW1pdDogc2VuZCBldmVudCwgY2FsbGJhY2tzIHdpbGwgYmUgdHJpZ2dlcmVkXG4gICAqL1xuICB0YXJnZXQuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgIHZhciBlID0gZXZlbnRzW3R5cGVdIHx8IGVtcHR5LCBsaXN0ID0gZS5sZW5ndGggPiAwID8gZS5zbGljZSgwLCBlLmxlbmd0aCkgOiBlLCBpPTAsIGo7XG4gICAgd2hpbGUoaj1saXN0W2krK10pIGpbMF0uYXBwbHkoalsxXSwgZW1wdHkuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9O1xufTsiLCJleHBvcnQgY2xhc3MgQ29tcG9zaXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY2xhc3NJbnN0YW5jZSwgbWVzc2FnZSwgY29tcG9uZW50KSB7XG4gICAgc3VwZXIoYEAke2NsYXNzSW5zdGFuY2V9OiAke21lc3NhZ2V9YCk7XG5cbiAgICBjb25zdCBzdGFja0FycmF5ID0gdGhpcy5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgc3RhY2tBcnJheS5zcGxpY2UoMSwgMik7XG5cbiAgICB0aGlzLnN0YWNrID0gc3RhY2tBcnJheS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChjb25zb2xlKSBjb25zb2xlLmVycm9yKCdDb21wb25lbnQ6JywgY29tcG9uZW50KTtcblxuICAgIHRoaXMubmFtZSA9ICdDb21wb3NpdGlvbkVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjbGFzc0luc3RhbmNlLCBtZXNzYWdlLCBhY3RpdmVNb2R1bGUsIGRlcGVuZGVuY3lNb2R1bGUgPSBmYWxzZSkge1xuICAgIHN1cGVyKGBAJHtjbGFzc0luc3RhbmNlfTogJHttZXNzYWdlfWApO1xuXG4gICAgY29uc3Qgc3RhY2tBcnJheSA9IHRoaXMuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIHN0YWNrQXJyYXkuc3BsaWNlKDEsIDIpO1xuXG4gICAgdGhpcy5zdGFjayA9IHN0YWNrQXJyYXkuam9pbignXFxuJyk7XG5cbiAgICBpZiAoY29uc29sZSkgY29uc29sZS5lcnJvcignQWN0aXZlIG1vZHVsZTonLCBhY3RpdmVNb2R1bGUpO1xuICAgIGlmIChjb25zb2xlICYmIGRlcGVuZGVuY3lNb2R1bGUpIGNvbnNvbGUuZXJyb3IoJ0RlcGVuZGVuY3kgcHVibGlzaGVkIGJ5IG1vZHVsZTonLCBkZXBlbmRlbmN5TW9kdWxlKTtcblxuICAgIHRoaXMubmFtZSA9ICdEZXBlbmRlbmN5RXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzSW5zdGFuY2UsIG1lc3NhZ2UsIGNvbXBvbmVudCwgYWN0aXZlTW9kdWxlID0gZmFsc2UpIHtcbiAgICBzdXBlcihgQCR7Y2xhc3NJbnN0YW5jZX06ICR7bWVzc2FnZX1gKTtcblxuICAgIGNvbnN0IHN0YWNrQXJyYXkgPSB0aGlzLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICBzdGFja0FycmF5LnNwbGljZSgxLCAyKTtcblxuICAgIHRoaXMuc3RhY2sgPSBzdGFja0FycmF5LmpvaW4oJ1xcbicpO1xuXG4gICAgaWYgKGNvbnNvbGUpIGNvbnNvbGUuZXJyb3IoJ0NvbXBvbmVudDonLCBjb21wb25lbnQpO1xuICAgIGlmIChjb25zb2xlICYmIGFjdGl2ZU1vZHVsZSkgY29uc29sZS5lcnJvcignQWN0aXZlIG1vZHVsZTonLCBhY3RpdmVNb2R1bGUpO1xuXG4gICAgdGhpcy5uYW1lID0gJ01hbmFnZXJFcnJvcic7XG4gIH1cbn1cbiIsImltcG9ydCB7UkVWSVNJT059IGZyb20gJ3RocmVlJztcbmltcG9ydCBFdmVudHMgZnJvbSAnbWluaXZlbnRzJztcbmltcG9ydCB7TWFuYWdlckVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbi8vIENoZWNrIGZvciBUaHJlZS5qc1xuY29uc3Qgd2FybkRlcHMgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignV2hpdGVzdG9ybUpTIEZyYW1ld29yayByZXF1aXJlcyBUaHJlZS5qcyByODQuIGh0dHBzOi8vdGhyZWVqcy5vcmcvJyk7XG59O1xuXG50cnkge1xuICBpZiAoIVJFVklTSU9OKSB3YXJuRGVwcygpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHdhcm5EZXBzKCk7XG59XG5cbi8qKlxuICogQGNsYXNzIE1vZHVsZVN5c3RlbVxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBkZXNjcmlwdGlvbiAgUHJvdmlkZXMgQVBJIGZvciBjbGFzc2VzIHRoYXQgd2lsbCB1c2UgTW9kdWxlcy48YnIvPlxuICogVGhpcyBjbGFzcyBpbmNsdWRlcyBiYXNpYyBldmVudCBzeXN0ZW0gd2l0aCB0aG9zZSBzdXBwb3J0ZWQgbWV0aG9kczpcbiAqIDxwcmU+Lm9uKCk8L3ByZT48cHJlPi5vZmYoKTwvcHJlPjxwcmU+LmVtaXQoKTwvcHJlPlxuICogQGV4dGVuZHMgRXZlbnRzXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZHVsZVN5c3RlbSBleHRlbmRzIEV2ZW50cyB7XG4gIC8vIElOVEVHUkFUSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaW50ZWdyYXRlTW9kdWxlc1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGFwcGxpZXMgYWxsIG1vZHVsZXMgZnJvbSAubW9kdWxlcyBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3NvdXJjZV0gSWYgc291cmNlIChzaG91bGQgYmUgYSBjb21wb25lbnQpIGlzIHByb3ZpZGVkLCB3aWxsIHJlcGxhY2UgLm1vZHVsZXMgd2l0aCBzb3VyY2UncyBvbmUgYmVmb3JlIGV4ZWN1dGluZyBtb2R1bGVzLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlU3lzdGVtXG4gICAqL1xuICBpbnRlZ3JhdGVNb2R1bGVzKHNvdXJjZSkge1xuICAgIGlmICghdGhpcy5tb2R1bGVzICYmICFzb3VyY2UpIHJldHVybjtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5tb2R1bGVzKSB0aGlzLm1vZHVsZXMgPSBzb3VyY2UubW9kdWxlcy5zbGljZSgwKTtcblxuICAgIGlmICh0aGlzLm1vZHVsZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSB0aGlzLm1vZHVsZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspXG4gICAgICAgIHRoaXMuYXBwbHlNb2R1bGUodGhpcy5tb2R1bGVzW2ldLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSkgdGhpcy5hcHBseUJyaWRnZSh7b25Db3B5OiBzb3VyY2V9KTtcbiAgfVxuXG4gIC8vIEFQUExZSU5HIE1PRFVMRSAoLi4uYW5kIGEgXCJicmlkZ2VcIiBmb3IgbW9kdWxlKVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFwcGx5QnJpZGdlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gTWFrZXMgY29tcG9uZW50LXNwZWNpZmljIEFQSSB0byB3b3JrIHdpdGggbW9kdWxlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGJyaWRnZU1hcFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgb2JqZWN0IHdpdGggbW9kaWZpZWQgdmFsdWVzLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlU3lzdGVtXG4gICAqL1xuICBhcHBseUJyaWRnZShicmlkZ2VNYXAgPSB7fSkge1xuICAgIGNvbnN0IG1vZHVsZXMgPSB0aGlzLm1vZHVsZXM7XG4gICAgaWYgKCFtb2R1bGVzKSByZXR1cm4gYnJpZGdlTWFwO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG1vZHVsZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGJyaWRnZU1hcCkge1xuICAgICAgICBpZiAoYnJpZGdlTWFwW2tleV0pIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVzW2ldO1xuXG4gICAgICAgICAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuYnJpZGdlICYmIG1vZHVsZS5icmlkZ2Vba2V5XSlcbiAgICAgICAgICAgIGJyaWRnZU1hcFtrZXldID0gbW9kdWxlLmJyaWRnZVtrZXldLmFwcGx5KHRoaXMsIFticmlkZ2VNYXBba2V5XSwgbW9kdWxlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnJpZGdlTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYXBwbHlDb21tYW5kXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gLmFwcGx5Q29tbWFuZCBydW5zIGEgbWV0aG9kIGNhbGxlZCBgbmFtZWAgb24gYWxsIG1vZHVsZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBtZXRob2QgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiPShmdW5jLCBtb2R1bGVTY29wZSkgPT4gZnVuYy5hcHBseSh0aGlzLCBbbW9kdWxlU2NvcGVdKV0gSG93IHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkL1xuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlU3lzdGVtXG4gICAqL1xuICBhcHBseUNvbW1hbmQobmFtZSwgY2IgPSAoZnVuYywgbW9kdWxlU2NvcGUpID0+IGZ1bmMuYXBwbHkodGhpcywgW21vZHVsZVNjb3BlXSkpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzO1xuICAgIGlmICghbW9kdWxlcykgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG1vZHVsZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZXNbaV07XG4gICAgICBpZiAobmFtZSBpbiBtb2R1bGUpIGNiKG1vZHVsZVtuYW1lXSwgbW9kdWxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhcHBseU1vZHVsZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIC5hcHBseU1vZHVsZSBpcyBhbHNvIHVzZWQgaW4gLmludGVncmF0ZU1vZHVsZXMoKSBmdW5jdGlvbi5cbiAgICogSXQgZG9lcyBleGFjdGx5IHdoYXQgaXRzIG5hbWUgc2F5cyAoYXBwbGllcyBtb2R1bGUgdG8gY29tcG9uZW50IG9yIGFwcCkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgdGhlIG1vZHVsZSB0byBhcHBseVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwdXNoPXRydWVdXG4gICAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBtb2R1bGUgdGhhdCB3YXMgYXBwbGllZC5cbiAgICogQHRocm93cyB7TWFuYWdlckVycm9yfVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlU3lzdGVtXG4gICAqL1xuICBhcHBseU1vZHVsZShtb2R1bGUsIHB1c2ggPSB0cnVlKSB7XG4gICAgaWYgKCFtb2R1bGUpIHJldHVybjtcbiAgICBpZiAocHVzaCAmJiB0aGlzLm1vZHVsZXMpIHRoaXMubW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gICAgZWxzZSBpZiAocHVzaCkgdGhpcy5tb2R1bGVzID0gW21vZHVsZV07XG5cbiAgICBpZiAodGhpcy5tYW5hZ2VyKSB0aGlzLm1hbmFnZXIuYWN0aXZlKG1vZHVsZSk7XG5cbiAgICBpZiAobW9kdWxlLm1hbmFnZXIgJiYgdGhpcy5tYW5hZ2VyKSBtb2R1bGUubWFuYWdlcih0aGlzLm1hbmFnZXIpO1xuICAgIGVsc2UgaWYgKG1vZHVsZS5tYW5hZ2VyKSB7XG4gICAgICB0aHJvdyBuZXcgTWFuYWdlckVycm9yKFxuICAgICAgICAnQ29tcG9uZW50JyxcbiAgICAgICAgYE1vZHVsZSByZXF1aXJlcyBNb2R1bGVNYW5hZ2VyIHRoYXQgaXMgdHVybmVkIG9mZiBmb3IgdGhpcyBjb21wb25lbnRgLFxuICAgICAgICB0aGlzLCBtb2R1bGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1vZHVsZS5pbnRlZ3JhdGUpIG1vZHVsZS5pbnRlZ3JhdGUuYmluZCh0aGlzKShtb2R1bGUpO1xuXG4gICAgcmV0dXJuIG1vZHVsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRpc3Bvc2VNb2R1bGVzXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRGlzcG9zZXMgb2YgYWxsIG1vZHVsZXNcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZVN5c3RlbVxuICAgKi9cbiAgZGlzcG9zZU1vZHVsZXMoKSB7XG4gICAgd2hpbGUgKHRoaXMubW9kdWxlcy5sZW5ndGgpXG4gICAgICB0aGlzLmRpc3Bvc2VNb2R1bGUodGhpcy5tb2R1bGVzWzBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRpc3Bvc2VNb2R1bGVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwb3NlcyBvZiB0aGUgZ2l2ZW4gbW9kdWxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgdGhlIG1vZHVsZSB0byBkaXNwb3NlXG4gICAqIEByZXR1cm4ge01vZHVsZX0gUmV0dXJucyBtb2R1bGUgdGhhdCB3YXMgcmVtb3ZlZC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZVN5c3RlbVxuICAgKi9cbiAgZGlzcG9zZU1vZHVsZShtb2R1bGUpIHtcbiAgICBpZiAoIW1vZHVsZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5tb2R1bGVzLnNwbGljZSh0aGlzLm1vZHVsZXMuaW5kZXhPZihtb2R1bGUpLCAxKTtcblxuICAgIGlmIChtb2R1bGUuZGlzcG9zZSkgbW9kdWxlLmRpc3Bvc2UuYmluZCh0aGlzKShtb2R1bGUpO1xuXG4gICAgcmV0dXJuIG1vZHVsZTtcbiAgfVxuXG4gIC8vIFBJUEVEIE1FVEhPRFxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG1vZHVsZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIHBpcGVkIHZlcnNpb24gb2YgLmFwcGx5TW9kdWxlKCkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgdGhlIG1vZHVsZSB0byBhcHBseVxuICAgKiBAcmV0dXJuIHt0aGlzfSByZXR1cm5zIHRoaXMgLSBhcHAvY29tcG9uZW50XG4gICAqIEB0aHJvd3Mge01hbmFnZXJFcnJvcn1cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZVN5c3RlbVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5QaXBlZCBtb2R1bGVzPC9jYXB0aW9uPlxuICAgKiBjb21wb25lbnRcbiAgICogICAubW9kdWxlKG5ldyBNb2R1bGUxKCkpXG4gICAqICAgLm1vZHVsZShuZXcgTW9kdWxlMigpKVxuICAgKiAgIC5tb2R1bGUobmV3IE1vZHVsZTMoKSlcbiAgICovXG4gIG1vZHVsZShtb2R1bGUpIHtcbiAgICB0aGlzLmFwcGx5TW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvdG90eXBlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQbGFpbk9iamVjdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbCc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufSIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59IiwiLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTsiLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge0RlcGVuZGVuY3lFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuXG4vKipcbiAqIEBjbGFzcyBNb2R1bGVNYW5hZ2VyXG4gKiBAY2F0ZWdvcnkgY29yZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBoYW5kbGVyXG4gKiBAZGVzY3JpcHRpb24gIFNvbHZlcyBtb2R1bGVzIGRlcGVuZGVuY2llc1xuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2R1bGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5oYW5kbGVyID0gb2JqZWN0O1xuICAgIHRoaXMuY3VycmVudE1vZHVsZSA9IG51bGw7XG5cbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoKHN0YXRlID0gW3t9LCAnJ10sIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGVbMF1bYWN0aW9uLmtleV0gPSBhY3Rpb24uZGF0YTtcbiAgICAgIHN0YXRlWzFdID0gYWN0aW9uLmtleTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tb2R1bGVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhY3RpdmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIC5jdXJyZW50TW9kdWxlIHRvIHByb3ZpZGVkIG1vZHVsZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG1vZHVsZSB0aGUgbW9kdWxlIHRvIG1ha2UgY3VycmVudFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKi9cbiAgYWN0aXZlKG1vZHVsZSkge1xuICAgIHRoaXMuY3VycmVudE1vZHVsZSA9IG1vZHVsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gU2V0J3MgLmN1cnJlbnRNb2R1bGUgdG8gbnVsbC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuY3VycmVudE1vZHVsZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkZWZpbmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBEZWZpbmUgdGhlIG1vZHVsZSBpbiBtYW5hZ2VyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBtb2R1bGUgbmFtZVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKi9cbiAgZGVmaW5lKG5hbWUpIHtcbiAgICB0aGlzLm1vZHVsZXNbbmFtZV0gPSB0aGlzLmN1cnJlbnRNb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1c2VcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGRlZmluZWQgbW9kdWxlIGZyb20gbWFuYWdlclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbW9kdWxlIG5hbWVcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIHVzZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kdWxlc1tuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIEFuIGFsaWFzIGZvciAuYWRkKCkgPGJyLz48YnIvPlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgeW91IGtub3cgdGhhdCB5b3Ugd2lsbCBvdmVyd3JpdGUgZXhpc3RpbmcgZGVwZW5kZW5jeS48YnIvPlxuICAgKiBVc2UgaXQgaW4geW91ciBhcHAsIGJ1dCBub3QgaW4gbW9kdWxlIHRoYXQgeW91IHByb3ZpZGUgdG8gb3RoZXIgcGVvcGxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIGRlcGVuZGVuY3lcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIHZhbHVlIG9mIHRoZSBkZXBlbmRlbmN5XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqL1xuICBzZXQoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQUREJyxcbiAgICAgIGtleSxcbiAgICAgIGRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgZGVwZW5kZW5jeSBpbiBzdG9yZSBvYmplY3QsIGJ5IGtleS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBkZXBlbmRlbmN5XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqIEByZXR1cm4ge09iamVjdHxNb2R1bGV9XG4gICAqIEB0aHJvd3Mge0RlcGVuZGVuY3lFcnJvcn0gaWYgZGVwZW5kZW5jeSBpcyBub3QgaW4gdGhlIHN0b3JlXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPkdldCB0aGUgJ2hlbGxvJyBkZXBlbmRlbmN5PC9jYXB0aW9uPlxuICAgKiBtYW5hZ2VyLmdldCgnaGVsbG8nKTsgLy8gLT4ge3dvcmxkOiB0cnVlfVxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIGlmICghdGhpcy5zdG9yZS5nZXRTdGF0ZSgpWzBdW2tleV0pIHtcbiAgICAgIHRocm93IG5ldyBEZXBlbmRlbmN5RXJyb3IoXG4gICAgICAgICdNb2R1bGVNYW5hZ2VyJyxcbiAgICAgICAgYE1vZHVsZSByZXF1aXJlcyAnJHtrZXl9JyBkZXBlbmRlbmN5YCxcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kdWxlXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbMF1ba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGhhc1xuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgd2hldGhlciBtYW5hZ2VyIGhhcyBhIGRlcGVuZGVuY3kgd2l0aCB0aGUgZ2l2ZW4ga2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgZGVwZW5kZW5jeVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiBhbGwgcHJvbWlzZXMgY29tcGxldGVkLlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5DaGVjayB3aGV0aGVyIHRoZSBzdG9yZSBoYXMgdGhlICdoZWxsbycgZGVwZW5kZW5jeTwvY2FwdGlvbj5cbiAgICogbWFuYWdlci5oYXMoJ2hlbGxvJyk7IC8vIC0+IHRydWVcbiAgICovXG4gIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnN0b3JlLmdldFN0YXRlKClbMF1ba2V5XSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIGRlcHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtkZXBzTWFwPXt9XVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKGRlcHNNYXAgPSB7fSkge1xuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IFtkYXRhLCBjaGFuZ2VkS2V5XSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZGVwc01hcFtjaGFuZ2VkS2V5XTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhkYXRhW2NoYW5nZWRLZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFkZFxuICAgKiBAYWxpYXMgbW9kdWxlOmNvcmUuTW9kdWxlTWFuYWdlciNzZXRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1vZHVsZU1hbmFnZXJcbiAgICovXG4gIGFkZCguLi5kYXRhKSB7XG4gICAgY29uc29sZS53YXJuKCcuYWRkKCkgbWV0aG9kIGlzIGRlcHJlY2F0ZWQuIFVzZSAuc2V0KCkgaW5zdGVhZCcpO1xuICAgIHJldHVybiB0aGlzLnNldCguLi5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlcXVpcmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBSZXF1aXJlIG1vZHVsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBEZWZpbmVkIG5hbWVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kdWxlRXhlY3V0b3IgRnVuY3Rpb24gdGhhdCByZXR1cm5zIGFwcGxpZWQgbW9kdWxlXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Nb2R1bGVNYW5hZ2VyXG4gICAqL1xuICByZXF1aXJlKG5hbWUsIG1vZHVsZUV4ZWN1dG9yKSB7XG4gICAgaWYgKHRoaXMudXNlKG5hbWUpID09PSB1bmRlZmluZWQpIHRoaXMuaGFuZGxlci5hcHBseU1vZHVsZShtb2R1bGVFeGVjdXRvcigpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtleHRlbmQsIHRyYW5zZm9ybURhdGF9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcbmltcG9ydCB7TW9kdWxlU3lzdGVtfSBmcm9tICcuL01vZHVsZVN5c3RlbSc7XG5pbXBvcnQge01vZHVsZU1hbmFnZXJ9IGZyb20gJy4vTW9kdWxlTWFuYWdlcic7XG5pbXBvcnQge01hbmFnZXJFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqIEBjYXRlZ29yeSBjb3JlXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW2luc3RydWN0aW9uc10gLSBUaGUgaW5zdHJ1Y3Rpb25zIG9iamVjdC5cbiAqIEBleHRlbmRzIE1vZHVsZVN5c3RlbVxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIE1vZHVsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IHtcbiAgICogICBtb2R1bGVzOiBbXSxcbiAgICogICBtYW5hZ2VyOiB0cnVlXG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICBtb2R1bGVzOiBudWxsLFxuICAgIG1hbmFnZXI6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogU3RhdGljIGluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCB7fVxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHt9O1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwcm9taXNlcyB0aGF0IHNob3VsZCBiZSByZXNvbHZlZCBiZWZvcmUgQ29tcG9uZW50IGlzIHJlYWR5LlxuICAgKiBAbWVtYmVyIHtBcnJheX0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I193YWl0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfd2FpdCA9IFtdOyAvLyBDb2xsZWN0aW9uIG9mIHByb21pc2VzO1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGBtb2R1bGVzYC5cbiAgICogQG1lbWJlciB7QXJyYXl9IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNtb2R1bGVzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIG1vZHVsZXMgPSBbXTsgLy8gQ29sbGVjdGlvbiBvZiBtb2R1bGVzO1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGBjaGlsZGAgQ29tcG9uZW50cy5cbiAgICogQG1lbWJlciB7QXJyYXl9IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNjaGlsZHJlblxuICAgKiBAcHVibGljXG4gICAqL1xuICBjaGlsZHJlbiA9IFtdOyAvLyBGb3Iga2VlcGluZyBjaGlsZHJlbiBjb21wb25lbnRzO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9LCBkZWZhdWx0cyA9IENvbXBvbmVudC5kZWZhdWx0cywgaW5zdHJ1Y3Rpb25zID0gQ29tcG9uZW50Lmluc3RydWN0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBBcHBseSBwb2x5ZmlsbGVkIHBhcmFtZXRlcnMgdG8gLnBhcmFtcztcbiAgICB0aGlzLnBhcmFtcyA9IGV4dGVuZCh0cmFuc2Zvcm1EYXRhKHBhcmFtcywgaW5zdHJ1Y3Rpb25zKSwgZGVmYXVsdHMpO1xuICAgIGlmICh0aGlzLnBhcmFtcy5tYW5hZ2VyKSB0aGlzLm1hbmFnZXIgPSBuZXcgTW9kdWxlTWFuYWdlcigpO1xuXG4gICAgdGhpcy5tb2R1bGVzID0gdGhpcy5wYXJhbXMubW9kdWxlcztcblxuICAgIHRoaXMuaW50ZWdyYXRlTW9kdWxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgd2FpdFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFdhaXQgZm9yIGEgcHJvbWlzZS5cbiAgICogQHBhcmFtIHtQcm9taXNlfSBbcHJvbWlzZV0gLSBUaGUgcHJvbWlzZSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byBhIHF1ZXVlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiBhbGwgcHJvbWlzZXMgY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gICAqL1xuICB3YWl0KHByb21pc2UpIHtcbiAgICBpZiAocHJvbWlzZSkgdGhpcy5fd2FpdC5wdXNoKHByb21pc2UpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl93YWl0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRlZmVyXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRXhlY3V0ZSBgZnVuY2AgKENhbGxiYWNrKSB3aGVuIENvbXBvbmVudCBpcyByZWFkeS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIENhbGxiYWNrLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gICAqL1xuICBkZWZlcihmdW5jKSB7XG4gICAgaWYgKHRoaXMuaXNEZWZmZXJlZCkgdGhpcy53YWl0KCkudGhlbigoKSA9PiBmdW5jKHRoaXMpKTtcbiAgICBlbHNlIGZ1bmModGhpcyk7XG4gIH1cblxuICAvLyBQQVJBTUVURVJTXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlUGFyYW1zXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlcyBwYXJhbWV0ZXJzIG9mIHRoZSBDb21wb25lbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gUGFyYW1zIG9mIHRoaXMgQ29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIHVwZGF0ZVBhcmFtcyhwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gZXh0ZW5kKHBhcmFtcywgdGhpcy5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIC8vIENPUFlJTkcgJiBDTE9OSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvbmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBDbG9uZSB0aGlzIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGEgY2xvbmVkIGNvbXBvbmVudCB3aXRoIGFsbCBpdHMgc291cmNlIGNvbXBvbmVudCcgcGFyYW1zIGNvcGllZC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMucGFyYW1zKS5jb3B5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29weVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENvcHkgc291cmNlIG5hdGl2ZSBhbmQgaW50ZWdyYXRlIGBtb2R1bGVzYCB0byBpdC5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IHNvdXJjZSAtIFNvdXJjZSBjb21wb25lbnQgdGhhdCBpcyB1c2VkIGZvciBgY29weSgpYCBhY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVdIC0gQ2FsbGJhY2sgZXhlY3V0ZWQgYmVmb3JlIG1vZHVsZXMgaW50ZWdyYXRpb24gcHJvY2Vzcy5cbiAgICogQHJldHVybiB7dGhpc30gQ29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIGNvcHkoc291cmNlLCBjdXN0b21pemUpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHsuLi5zb3VyY2UucGFyYW1zfTtcblxuICAgIGlmIChzb3VyY2UubmF0aXZlKSB0aGlzLm5hdGl2ZSA9IHNvdXJjZS5uYXRpdmUuY2xvbmUoc291cmNlLnBhcmFtcyk7XG4gICAgaWYgKGN1c3RvbWl6ZSkgY3VzdG9taXplKCk7XG4gICAgdGhpcy5pbnRlZ3JhdGVNb2R1bGVzKHNvdXJjZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFkZFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIEFkZCBhIGNoaWxkIGBDb21wb25lbnRgLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb2JqZWN0IC0gQ29tcG9uZW50IHRoYXQgc2hvdWxkIGJlIGFkZGVkIGFzIGEgYGNoaWxkYC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZWQgd2hlbiBhY3Rpb24gaXMgZG9uZS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICAgKi9cbiAgYWRkKG9iamVjdCkge1xuICAgIG9iamVjdC5wYXJlbnQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZGVmZXIoKCkgPT4ge1xuICAgICAgICBjb25zdCB7bmF0aXZlfSA9IG9iamVjdDtcbiAgICAgICAgaWYgKCFuYXRpdmUpIHJlamVjdCgpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb21pc2UgPSB0aGlzLmFwcGx5QnJpZGdlKHtvbkFkZDogb2JqZWN0fSkub25BZGQ7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uYXRpdmUuYWRkKG5hdGl2ZSk7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG9iamVjdCk7XG5cbiAgICAgICAgICByZXNvbHZlKG9iamVjdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFkZFByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSBhZGRQcm9taXNlLnRoZW4ocmVzb2x2ZXIpO1xuICAgICAgICBlbHNlIHJlc29sdmVyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIGNoaWxkIGBDb21wb25lbnRgLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb2JqZWN0IC0gQ29tcG9uZW50IHRoYXQgc2hvdWxkIGJlIGEgKipjaGlsZCoqIG9mIHRoaXMgQ29tcG9uZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gICAqL1xuICByZW1vdmUob2JqZWN0KSB7XG4gICAgb2JqZWN0LnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5uYXRpdmUucmVtb3ZlKG9iamVjdC5uYXRpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWRkVG9cbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGB0aGlzYCBDb21wb25lbnQgdG8gc3BlY2lmaWVkIGBBcHBgL2BDb21wb25lbnRgLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb2JqZWN0IC0gQ29tcG9uZW50IHRoYXQgd2lsbCBiZSBhIHBhcmVudCBvZiBgdGhpc2AuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAgICovXG4gIGFkZFRvKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QuYWRkKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IGlzIGBhc3luY2AgKGB3YWl0YCBwcm9taXNlcyBhcmUgbW9yZSB0aGFuIGAwYCkuXG4gICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNpc0RlZmZlcmVkXG4gICAqL1xuICBnZXQgaXNEZWZmZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGBNb2R1bGVNYW5hZ2VyYCB1c2VkIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICogQG1lbWJlciB7TW9kdWxlTWFuYWdlcn0gbW9kdWxlOmNvcmUuQ29tcG9uZW50I21hbmFnZXJcbiAgICogQHRocm93cyB7TWFuYWdlckVycm9yfVxuICAgKi9cbiAgZ2V0IG1hbmFnZXIoKSB7XG4gICAgaWYgKHRoaXMuX21hbmFnZXIpIHJldHVybiB0aGlzLl9tYW5hZ2VyO1xuXG4gICAgdGhyb3cgbmV3IE1hbmFnZXJFcnJvcihcbiAgICAgICdDb21wb25lbnQnLFxuICAgICAgYE1vZHVsZU1hbmFnZXIgaXMgbm90IHVzZWQgaW4gdGhpcyBjb21wb25lbnQuICdtYW5hZ2VyJyBwYXJhbWV0ZXIgc2hvdWxkIGJlIHNldCBhcyAndHJ1ZSdgLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBzZXQgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5fbWFuYWdlciA9IG1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYG5hdGl2ZWAgb2JqZWN0IHVzZWQgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb3JlLkNvbXBvbmVudCNuYXRpdmVcbiAgICovXG4gIGdldCBuYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZTtcbiAgfVxuXG4gIHNldCBuYXRpdmUobWVzaCkge1xuICAgIHRoaXMuX25hdGl2ZSA9IG1lc2g7XG4gICAgdGhpcy5fbmF0aXZlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDb21wb25lbnRcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlcyguLi5tYXBwZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBwZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtYXBwZXIgPSBtYXBwZXJzW2ldO1xuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1hcHBlci5tYXAubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbWFwcGVyLm1hcFtrXTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwgYXR0cmlidXRlLCB7XG4gICAgICAgICAgZ2V0OiBtYXBwZXIuZ2V0dGVyKGF0dHJpYnV0ZSksXG4gICAgICAgICAgc2V0OiBtYXBwZXIuc2V0dGVyKGF0dHJpYnV0ZSksXG4gICAgICAgICAgY29uZmlndXJhYmxlOiBtYXBwZXIuY29uZmlndXJhYmxlLFxuICAgICAgICAgIGVudW1lcmFibGU6IG1hcHBlci5lbnVtZXJhYmxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoLi4ubWFwKSB7XG4gIHJldHVybiB7XG4gICAgbWFwLFxuICAgIGdldHRlcihuYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVbbmFtZV07XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0dGVyKG5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVbbmFtZV0uY29weSh2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pcnJvciguLi5tYXApIHtcbiAgcmV0dXJuIHtcbiAgICBtYXAsXG4gICAgZ2V0dGVyKG5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVtuYW1lXTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXR0ZXIobmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH07XG59XG4iLCJpbXBvcnQge01lc2h9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7YXR0cmlidXRlcywgY29weSwgbWlycm9yfSBmcm9tICcuL3Byb3RvdHlwZS9hdHRyaWJ1dGVzJztcbmltcG9ydCB7Q29tcG9zaXRpb25FcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuXG5AYXR0cmlidXRlcyhcbiAgY29weSgncG9zaXRpb24nLCAncm90YXRpb24nLCAncXVhdGVybmlvbicsICdzY2FsZScpLFxuICBtaXJyb3IoJ21hdGVyaWFsJywgJ2dlb21ldHJ5Jylcbilcbi8qKlxuICogQGNsYXNzIE1lc2hDb21wb25lbnRcbiAqIEBjYXRlZ29yeSBjb3JlXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW2luc3RydWN0aW9uc10gLSBUaGUgaW5zdHJ1Y3Rpb25zIG9iamVjdC5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkNvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlXG4gKi9cbmNsYXNzIE1lc2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50I2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHRcbiAgICoge1xuICAgKiAgIGJ1aWxkOiB0cnVlLFxuICAgKiAgIGdlb21ldHJ5OiB7fSxcbiAgICogICBtYXRlcmlhbDogZmFsc2UsXG4gICAqXG4gICAqICAgc2hhZG93OiB7XG4gICAqICAgICBjYXN0OiB0cnVlLFxuICAgKiAgICAgcmVjZWl2ZTogdHJ1ZVxuICAgKiAgIH0sXG4gICAqXG4gICAqICAgcG9zaXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfSxcbiAgICogICByb3RhdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgKiAgIHNjYWxlOiB7eDogMSwgeTogMSwgejogMX1cbiAgICogfVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkNvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGJ1aWxkOiB0cnVlLFxuICAgIGdlb21ldHJ5OiB7fSxcbiAgICBtYXRlcmlhbDogZmFsc2UsXG5cbiAgICBzaGFkb3c6IHtcbiAgICAgIGNhc3Q6IHRydWUsXG4gICAgICByZWNlaXZlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvc2l0aW9uOiB7eDogMCwgeTogMCwgejogMH0sXG4gICAgcm90YXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfSxcbiAgICBzY2FsZToge3g6IDEsIHk6IDEsIHo6IDF9XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBpbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0XG4gICAqIHtcbiAgICogICBwb3NpdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgKiAgIHJvdGF0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAqICAgc2NhbGU6IFsneCcsICd5JywgJ3onXVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAgcm90YXRpb246IFsneCcsICd5JywgJ3onXSxcbiAgICBzY2FsZTogWyd4JywgJ3knLCAneiddXG4gIH07XG5cbiAgLy8gQ1VTVE9NIEdFT01FVFJZIEhBTkRMSU5HXG5cbiAgc3RhdGljIGN1c3RvbShnZW9tLCBjb25zdHJ1Y3RvciA9IE1lc2gpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgICAgIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGdlb20sXG4gICAgICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IGNvbnN0cnVjdG9yKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGdlb20sIHBhcmFtcywgY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChNZXNoQ29tcG9uZW50LmN1c3RvbShnZW9tLCBjb25zdHJ1Y3RvcikpKHBhcmFtcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMsIGRlZmF1bHRzID0gTWVzaENvbXBvbmVudC5kZWZhdWx0cywgaW5zdHJ1Y3Rpb25zID0gTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMpIHtcbiAgICBzdXBlcihwYXJhbXMsIGRlZmF1bHRzLCBpbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLmJ1aWxkKSB7XG4gICAgICBjb25zdCBidWlsZCA9IHRoaXMuYnVpbGQodGhpcy5wYXJhbXMpO1xuXG4gICAgICBpZiAoIWJ1aWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBDb21wb3NpdGlvbkVycm9yKFxuICAgICAgICAgICdNZXNoQ29tcG9uZW50JyxcbiAgICAgICAgICAnLmJ1aWxkKCkgbWV0aG9kIHNob3VsZCByZXR1cm4gYSBUSFJFRS5PYmplY3QzRCBvciBhIFByb21pc2UgcmVzb2x2ZWQgd2l0aCBUSFJFRS5PYmplY3QzRC4nLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJ1aWxkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLndhaXQoYnVpbGQpO1xuXG4gICAgICAgIHRoaXMud2FpdChuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICBidWlsZC50aGVuKG5hdGl2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZSA9IG5hdGl2ZTtcbiAgICAgICAgICAgIHRoaXMud3JhcCgpLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF0aXZlID0gYnVpbGQ7XG4gICAgICAgIHRoaXMud2FpdCh0aGlzLndyYXAoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcHBseUNvbW1hbmQoJ3Bvc3RJbnRlZ3JhdGUnKTtcbiAgfVxuXG4gIC8vIEJVSUxESU5HICYgV1JBUFBJTkdcblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIHNob3VsZCByZXR1cm4gYSBuYXRpdmUgb2JqZWN0LlxuICAgKiBAdGhyb3dzIHtDb21wb3NpdGlvbkVycm9yfVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgdGhyb3cgbmV3IENvbXBvc2l0aW9uRXJyb3IoXG4gICAgICAnTWVzaENvbXBvbmVudCcsXG4gICAgICAnSW5zdGFuY2Ugc2hvdWxkIGhhdmUgaXRcXCdzIG93biAuYnVpbGQoKS4nLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB3cmFwXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gV3JhcHMgdHJhbnNmb3JtcyAoYHBvc2l0aW9uYCAmIGByb3RhdGlvbmApXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVkIHdoZW4gYWN0aW9uIGlzIGNvbXBsZXRlZFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICAgKi9cbiAgd3JhcCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvLyBUT0RPOiBGaXggZGVmZXIgd2l0aCBwaHlzaWNzXG4gICAgICAvLyB0aGlzLmRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IHtwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxlLCBzaGFkb3d9ID0gdGhpcy5wYXJhbXM7XG5cbiAgICAgIHRoaXMucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgdGhpcy5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG4gICAgICB0aGlzLnNjYWxlLnNldChzY2FsZS54LCBzY2FsZS55LCBzY2FsZS56KTtcblxuICAgICAgdGhpcy5uYXRpdmUuY2FzdFNoYWRvdyA9IHNoYWRvdy5jYXN0O1xuICAgICAgdGhpcy5uYXRpdmUucmVjZWl2ZVNoYWRvdyA9IHNoYWRvdy5yZWNlaXZlO1xuXG4gICAgICB0aGlzLmFwcGx5QnJpZGdlKHtvbldyYXA6IDF9KTtcblxuICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIC8vIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ09QWUlORyAmIENMT05JTkdcblxuICAvKipcbiAgICogQG1ldGhvZCBjb3B5XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQ29weSBzb3VyY2UgdHJhbnNmb3JtcyAmIGV4ZWN1dGUgYENvbXBvbmVudC5jb3B5KClgXG4gICAqIEByZXR1cm4ge3RoaXN9IE1lc2hDb21wb25lbnRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAgICovXG4gIGNvcHkoc291cmNlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvcHkoc291cmNlLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvc2l0aW9uLmNvcHkoc291cmNlLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMucm90YXRpb24uY29weShzb3VyY2Uucm90YXRpb24pO1xuICAgICAgdGhpcy5xdWF0ZXJuaW9uLmNvcHkoc291cmNlLnF1YXRlcm5pb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvbmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBNZXNoQ29tcG9uZW50IHVzaW5nIGAuY29weSgpYFxuICAgKiBAcmV0dXJuIHtNZXNoQ29tcG9uZW50fSBjbG9uZSBvZiB0aGlzIG9iamVjdFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICAgKi9cbiAgY2xvbmUoZ2VvbWV0cnksIG1hdGVyaWFsKSB7XG4gICAgY29uc3QgZGVzdCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHtidWlsZDogZmFsc2V9KS5jb3B5KHRoaXMpO1xuXG4gICAgaWYgKGdlb21ldHJ5KSBkZXN0Lmdlb21ldHJ5ID0gZGVzdC5nZW9tZXRyeS5jbG9uZSgpO1xuICAgIGlmIChtYXRlcmlhbCkgZGVzdC5tYXRlcmlhbCA9IGRlc3QubWF0ZXJpYWwuY2xvbmUoKTtcblxuICAgIHJldHVybiBkZXN0O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIE1lc2hDb21wb25lbnRcbn07XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5pbXBvcnQge2F0dHJpYnV0ZXMsIGNvcHl9IGZyb20gJy4vcHJvdG90eXBlL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IHtDb21wb3NpdGlvbkVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5cbkBhdHRyaWJ1dGVzKFxuICBjb3B5KCdwb3NpdGlvbicsICdyb3RhdGlvbicsICdxdWF0ZXJuaW9uJywgJ3RhcmdldCcpXG4pXG4vKipcbiAqIEBjbGFzcyBMaWdodENvbXBvbmVudFxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbaW5zdHJ1Y3Rpb25zXSAtIFRoZSBpbnN0cnVjdGlvbnMgb2JqZWN0LlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY2xhc3MgTGlnaHRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudCNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0XG4gICAqIHtcbiAgICogICBidWlsZDogdHJ1ZSxcbiAgICpcbiAgICogICBzaGFkb3c6IHtcbiAgICogICAgIGNhc3Q6IHRydWUsXG4gICAqXG4gICAqICAgICBiaWFzOiAwLFxuICAgKiAgICAgcmFkaXVzOiAxLFxuICAgKlxuICAgKiAgICAgbWFwU2l6ZToge1xuICAgKiAgICAgICB3aWR0aDogMTAyNCxcbiAgICogICAgICAgaGVpZ2h0OiAxMDI0XG4gICAqICAgICB9LFxuICAgKlxuICAgKiAgICAgY2FtZXJhOiB7XG4gICAqICAgICAgIG5lYXI6IHRydWUsXG4gICAqICAgICAgIGZhcjogNDAwLFxuICAgKiAgICAgICBmb3Y6IDkwLFxuICAgKlxuICAgKiAgICAgICB0b3A6IDIwMCxcbiAgICogICAgICAgYm90dG9tOiAtMjAwLFxuICAgKiAgICAgICBsZWZ0OiAtMjAwLFxuICAgKiAgICAgICByaWdodDogMjAwXG4gICAqICAgICB9XG4gICAqICAgfSxcbiAgICpcbiAgICogICBwb3NpdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9LFxuICAgKiAgIHJvdGF0aW9uOiB7eDogMCwgeTogMCwgejogMH1cbiAgICogfVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkNvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGJ1aWxkOiB0cnVlLFxuXG4gICAgc2hhZG93OiB7XG4gICAgICBjYXN0OiB0cnVlLFxuXG4gICAgICBiaWFzOiAwLFxuICAgICAgcmFkaXVzOiAxLFxuXG4gICAgICBtYXBTaXplOiB7XG4gICAgICAgIHdpZHRoOiAxMDI0LFxuICAgICAgICBoZWlnaHQ6IDEwMjRcbiAgICAgIH0sXG5cbiAgICAgIGNhbWVyYToge1xuICAgICAgICBuZWFyOiB0cnVlLFxuICAgICAgICBmYXI6IDQwMCxcbiAgICAgICAgZm92OiA5MCxcblxuICAgICAgICB0b3A6IDIwMCxcbiAgICAgICAgYm90dG9tOiAtMjAwLFxuICAgICAgICBsZWZ0OiAtMjAwLFxuICAgICAgICByaWdodDogMjAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBvc2l0aW9uOiB7eDogMCwgeTogMCwgejogMH0sXG4gICAgcm90YXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgaW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnQjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHRcbiAgICoge1xuICAgKiAgIHBvc2l0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAqICAgcm90YXRpb246IFsneCcsICd5JywgJ3onXVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAgcm90YXRpb246IFsneCcsICd5JywgJ3onXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcywgZGVmYXVsdHMgPSBMaWdodENvbXBvbmVudC5kZWZhdWx0cywgaW5zdHJ1Y3Rpb25zID0gTGlnaHRDb21wb25lbnQuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgc3VwZXIocGFyYW1zLCBkZWZhdWx0cywgaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy5idWlsZCkge1xuICAgICAgY29uc3QgYnVpbGQgPSB0aGlzLmJ1aWxkKHRoaXMucGFyYW1zKTtcblxuICAgICAgaWYgKCFidWlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgQ29tcG9zaXRpb25FcnJvcihcbiAgICAgICAgICAnTGlnaHRDb21wb25lbnQnLFxuICAgICAgICAgICcuYnVpbGQoKSBtZXRob2Qgc2hvdWxkIHJldHVybiBhIFRIUkVFLk9iamVjdDNEIG9yIGEgUHJvbWlzZSByZXNvbHZlZCB3aXRoIFRIUkVFLk9iamVjdDNELicsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnVpbGQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGJ1aWxkLnRoZW4obmF0aXZlID0+IHtcbiAgICAgICAgICB0aGlzLm5hdGl2ZSA9IG5hdGl2ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdGhpcy5uYXRpdmUgPSBidWlsZDtcblxuICAgICAgdGhpcy53YWl0KHRoaXMud3JhcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5Q29tbWFuZCgncG9zdEludGVncmF0ZScpO1xuICB9XG5cbiAgLy8gQlVJTERJTkcgJiBXUkFQUElOR1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIHNob3VsZCByZXR1cm4gYSBuYXRpdmUgb2JqZWN0LlxuICAgKiBAdGhyb3dzIHtDb21wb3NpdGlvbkVycm9yfVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnRcbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHRocm93IG5ldyBDb21wb3NpdGlvbkVycm9yKFxuICAgICAgJ01lc2hDb21wb25lbnQnLFxuICAgICAgJ0luc3RhbmNlIHNob3VsZCBoYXZlIGl0XFwncyBvd24gLmJ1aWxkKCkuJyxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgd3JhcFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFdyYXBzIHRyYW5zZm9ybXMgKGBwb3NpdGlvbmAgJiBgcm90YXRpb25gKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlZCB3aGVuIGFjdGlvbiBpcyBjb21wbGV0ZWRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50XG4gICAqL1xuICB3cmFwKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZGVmZXIoKCkgPT4ge1xuICAgICAgICBjb25zdCB7cG9zaXRpb24sIHJvdGF0aW9ufSA9IHRoaXMucGFyYW1zO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgICB0aGlzLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcblxuICAgICAgICB0aGlzLmFwcGx5QnJpZGdlKHtvbldyYXA6IDF9KTtcblxuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB3cmFwU2hhZG93XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gV3JhcHMgc2hhZG93IHByb3BlcnRpZXNcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50XG4gICAqL1xuICB3cmFwU2hhZG93KCkge1xuICAgIGNvbnN0IHtuYXRpdmUsIHBhcmFtczoge3NoYWRvd319ID0gdGhpcztcblxuICAgIG5hdGl2ZS5jYXN0U2hhZG93ID0gc2hhZG93LmNhc3Q7XG4gICAgbmF0aXZlLnNoYWRvdy5tYXBTaXplLndpZHRoID0gc2hhZG93Lm1hcFNpemUud2lkdGg7XG4gICAgbmF0aXZlLnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IHNoYWRvdy5tYXBTaXplLmhlaWdodDtcbiAgICBuYXRpdmUuc2hhZG93LmJpYXMgPSBzaGFkb3cuYmlhcztcbiAgICBuYXRpdmUuc2hhZG93LnJhZGl1cyA9IHNoYWRvdy5yYWRpdXM7XG5cbiAgICBjb25zdCBzaGFkb3dDYW1lcmEgPSBuYXRpdmUuc2hhZG93LmNhbWVyYTtcbiAgICBjb25zdCBjYW1lcmEgPSBzaGFkb3cuY2FtZXJhO1xuXG4gICAgc2hhZG93Q2FtZXJhLm5lYXIgPSBjYW1lcmEubmVhcjtcbiAgICBzaGFkb3dDYW1lcmEuZmFyID0gY2FtZXJhLmZhcjtcbiAgICBzaGFkb3dDYW1lcmEuZm92ID0gY2FtZXJhLmZvdjtcblxuICAgIHNoYWRvd0NhbWVyYS5sZWZ0ID0gY2FtZXJhLmxlZnQ7XG4gICAgc2hhZG93Q2FtZXJhLnJpZ2h0ID0gY2FtZXJhLnJpZ2h0O1xuICAgIHNoYWRvd0NhbWVyYS50b3AgPSBjYW1lcmEudG9wO1xuICAgIHNoYWRvd0NhbWVyYS5ib3R0b20gPSBjYW1lcmEuYm90dG9tO1xuICB9XG5cbiAgLy8gQ09QWUlORyAmIENMT05JTkdcblxuICAvKipcbiAgICogQG1ldGhvZCBjb3B5XG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gQ29weSBzb3VyY2UgdHJhbnNmb3JtcyAmIGV4ZWN1dGUgYENvbXBvbmVudC5jb3B5KClgXG4gICAqIEByZXR1cm4ge3RoaXN9IExpZ2h0Q29tcG9uZW50XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICAgKi9cbiAgY29weShzb3VyY2UpIHtcbiAgICByZXR1cm4gc3VwZXIuY29weShzb3VyY2UsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRhcmdldCkgdGhpcy50YXJnZXQuY29weShzb3VyY2UudGFyZ2V0KCkpO1xuXG4gICAgICB0aGlzLnBvc2l0aW9uLmNvcHkoc291cmNlLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMucm90YXRpb24uY29weShzb3VyY2Uucm90YXRpb24pO1xuICAgICAgdGhpcy5xdWF0ZXJuaW9uLmNvcHkoc291cmNlLnF1YXRlcm5pb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvbmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBMaWdodENvbXBvbmVudCB1c2luZyBgLmNvcHkoKWBcbiAgICogQHJldHVybiB7TGlnaHRDb21wb25lbnR9IGNsb25lIG9mIHRoaXMgb2JqZWN0XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHtidWlsZDogZmFsc2V9KS5jb3B5KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIExpZ2h0Q29tcG9uZW50XG59O1xuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHthdHRyaWJ1dGVzLCBjb3B5fSBmcm9tICcuL3Byb3RvdHlwZS9hdHRyaWJ1dGVzJztcbmltcG9ydCB7Q29tcG9zaXRpb25FcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuXG5AYXR0cmlidXRlcyhcbiAgY29weSgncG9zaXRpb24nLCAncm90YXRpb24nLCAncXVhdGVybmlvbicsICd0YXJnZXQnKVxuKVxuLyoqXG4gKiBAY2xhc3MgQ2FtZXJhQ29tcG9uZW50XG4gKiBAY2F0ZWdvcnkgY29yZVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtZXRlcnMgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtpbnN0cnVjdGlvbnNdIC0gVGhlIGluc3RydWN0aW9ucyBvYmplY3QuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5Db21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5jbGFzcyBDYW1lcmFDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnQjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgYnVpbGQ6IHRydWUsXG4gICAqXG4gICAqICAgcG9zaXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfSxcbiAgICogICByb3RhdGlvbjoge3g6IDAsIHk6IDAsIHo6IDB9XG4gICAqIH1cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5Db21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBidWlsZDogdHJ1ZSxcblxuICAgIHBvc2l0aW9uOiB7eDogMCwgeTogMCwgejogMH0sXG4gICAgcm90YXRpb246IHt4OiAwLCB5OiAwLCB6OiAwfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgaW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0XG4gICAqIHtcbiAgICogICBwb3NpdGlvbjogWyd4JywgJ3knLCAneiddLFxuICAgKiAgIHJvdGF0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAqICAgc2NhbGU6IFsneCcsICd5JywgJ3onXVxuICAgKiB9XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIHBvc2l0aW9uOiBbJ3gnLCAneScsICd6J10sXG4gICAgcm90YXRpb246IFsneCcsICd5JywgJ3onXSxcbiAgICBzY2FsZTogWyd4JywgJ3knLCAneiddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zLCBkZWZhdWx0cyA9IENhbWVyYUNvbXBvbmVudC5kZWZhdWx0cywgaW5zdHJ1Y3Rpb25zID0gQ2FtZXJhQ29tcG9uZW50Lmluc3RydWN0aW9ucykge1xuICAgIHN1cGVyKHBhcmFtcywgZGVmYXVsdHMsIGluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMuYnVpbGQpIHtcbiAgICAgIGNvbnN0IGJ1aWxkID0gdGhpcy5idWlsZCh0aGlzLnBhcmFtcyk7XG5cbiAgICAgIGlmICghYnVpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbXBvc2l0aW9uRXJyb3IoXG4gICAgICAgICAgJ0NhbWVyYUNvbXBvbmVudCcsXG4gICAgICAgICAgJy5idWlsZCgpIG1ldGhvZCBzaG91bGQgcmV0dXJuIGEgVEhSRUUuT2JqZWN0M0Qgb3IgYSBQcm9taXNlIHJlc29sdmVkIHdpdGggVEhSRUUuT2JqZWN0M0QuJyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChidWlsZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgYnVpbGQudGhlbihuYXRpdmUgPT4ge1xuICAgICAgICAgIHRoaXMubmF0aXZlID0gbmF0aXZlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0aGlzLm5hdGl2ZSA9IGJ1aWxkO1xuXG4gICAgICB0aGlzLndhaXQodGhpcy53cmFwKCkpO1xuICAgIH1cblxuICAgIHRoaXMuYXBwbHlDb21tYW5kKCdwb3N0SW50ZWdyYXRlJyk7XG4gIH1cblxuICAvLyBCVUlMRElORyAmIFdSQVBQSU5HXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgc2hvdWxkIHJldHVybiBhIG5hdGl2ZSBvYmplY3QuXG4gICAqIEB0aHJvd3Mge0NvbXBvc2l0aW9uRXJyb3J9XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnRcbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHRocm93IG5ldyBDb21wb3NpdGlvbkVycm9yKFxuICAgICAgJ0NhbWVyYUNvbXBvbmVudCcsXG4gICAgICAnSW5zdGFuY2Ugc2hvdWxkIGhhdmUgaXRcXCdzIG93biAuYnVpbGQoKS4nLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB3cmFwXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gV3JhcHMgdHJhbnNmb3JtcyAoYHBvc2l0aW9uYCAmIGByb3RhdGlvbmApXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVkIHdoZW4gYWN0aW9uIGlzIGNvbXBsZXRlZFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50XG4gICAqL1xuICB3cmFwKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuZGVmZXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLnBhcmFtcy5wb3NpdGlvbi54LCB0aGlzLnBhcmFtcy5wb3NpdGlvbi55LCB0aGlzLnBhcmFtcy5wb3NpdGlvbi56KTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5zZXQodGhpcy5wYXJhbXMucm90YXRpb24ueCwgdGhpcy5wYXJhbXMucm90YXRpb24ueSwgdGhpcy5wYXJhbXMucm90YXRpb24ueik7XG5cbiAgICAgICAgdGhpcy5hcHBseUJyaWRnZSh7b25XcmFwOiAxfSk7XG5cbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29weVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIENvcHkgc291cmNlIHRyYW5zZm9ybXMgJiBleGVjdXRlIGBDb21wb25lbnQuY29weSgpYFxuICAgKiBAcmV0dXJuIHt0aGlzfSBDYW1lcmFDb21wb25lbnRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudFxuICAgKi9cbiAgY29weShzb3VyY2UpIHtcbiAgICByZXR1cm4gc3VwZXIuY29weShzb3VyY2UsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRhcmdldCkgdGhpcy50YXJnZXQuY29weShzb3VyY2UudGFyZ2V0KCkpO1xuXG4gICAgICB0aGlzLnBvc2l0aW9uLmNvcHkoc291cmNlLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMucm90YXRpb24uY29weShzb3VyY2Uucm90YXRpb24pO1xuICAgICAgdGhpcy5xdWF0ZXJuaW9uLmNvcHkoc291cmNlLnF1YXRlcm5pb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvbmVcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBDYW1lcmFDb21wb25lbnQgdXNpbmcgYC5jb3B5KClgXG4gICAqIEByZXR1cm4ge0NhbWVyYUNvbXBvbmVudH0gY2xvbmUgb2YgdGhpcyBvYmplY3RcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudFxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHtidWlsZDogZmFsc2V9KS5jb3B5KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIENhbWVyYUNvbXBvbmVudFxufTtcbiIsImV4cG9ydCBjb25zdCBzeXN0ZW0gPSB7XG4gIHdpbmRvdzogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbn07XG4iLCJpbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQge3N5c3RlbX0gZnJvbSAnLi4vcG9seWZpbGwnO1xuaW1wb3J0IHtNb2R1bGVTeXN0ZW19IGZyb20gJy4vTW9kdWxlU3lzdGVtJztcbmltcG9ydCB7TW9kdWxlTWFuYWdlcn0gZnJvbSAnLi9Nb2R1bGVNYW5hZ2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQXBwXG4gKiBAY2F0ZWdvcnkgY29yZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgdG8gcHJlcGFyZSBhIHdvcmxkIHNjZW5lLCBzZXR1cCBwaHlzaWNzLCBjYW1lcmEsIHJlbmRlcmVyIGFuZCBhbGwgb3RoZXIgdGhpbmdzIHRoYXQgeW91IHVzdWFsbHkgZG8gYmVmb3JlIG1ha2luZyBtZXNoZXMuXG4gKiBAcGFyYW0ge0FycmF5fSBbbW9kdWxlcz1bXV0gLSBBcnJheSBvZiBNb2R1bGVzXG4gKiBAZXh0ZW5kcyBNb2R1bGVTeXN0ZW1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZVxuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBNb2R1bGVTeXN0ZW0ge1xuICAvKipcbiAgICogU2ltdWxhdGUgZmxhZ1xuICAgKiBAZGVzY3JpcHRpb24gU2FtZSBhcyAudXBkYXRlRW5hYmxlZCwgYnV0IGZvciBwaHlzaWNzLiBEZWZpbmVzIGlmIHBoeXNpY3MgaXMgc2ltdWxhdGVkIGVhY2ggZnJhbWUuXG4gICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vZHVsZTpjb3JlLkFwcCNzaW11bGF0ZVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaW11bGF0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRGVmaW5lcyB3aGV0aGVyIHRoZSBzY2VuZSBzaG91bGQgcmVuZGVyIG9yIG5vdFxuICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb2R1bGU6Y29yZS5BcHAjdXBkYXRlRW5hYmxlZFxuICAgKiBAcHVibGljXG4gICAqL1xuICB1cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgLyoqXG4gICAqIExvb3BzIGluIHRoaXMgYXBwXG4gICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBsb29wcyB0aGF0IGFyZSBleGVjdXRlZCBieSB0aGlzIGFwcC5cbiAgICogQG1lbWJlciB7QXJyYXl9IG1vZHVsZTpjb3JlLkFwcCNsb29wc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBsb29wcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG1vZHVsZXMgPSBbXSkge1xuICAgIGNvbnNvbGUubG9nKGBXSFMuQXBwICR7dmVyc2lvbn1gKTtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYW5hZ2VyID0gbmV3IE1vZHVsZU1hbmFnZXIodGhpcyk7XG4gICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcblxuICAgIHRoaXMuaW50ZWdyYXRlTW9kdWxlcygpO1xuICB9XG5cbiAgLy8gQ09OVFJPTFMgJiBVUERBVElOR1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAqIEBkZXNjcmlwdGlvbiBTdGFydCByZW5kZXJpbmcgbG9vcCBhbmQgcGh5c2ljcyBzaW11bGF0aW9uIChpZiB5b3UgdXNlIHZlcnNpb24gd2l0aCBwaHlzaWNzKS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgcmVxdWVzdEFuaW1GcmFtZSA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gc3lzdGVtLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgc3lzdGVtLndpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgc3lzdGVtLndpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgc3lzdGVtLndpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCB7bG9vcHMsIHVwZGF0ZUVuYWJsZWR9ID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHByb2Nlc3MpO1xuICAgICAgaWYgKCF1cGRhdGVFbmFibGVkKSByZXR1cm47XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsbCA9IGxvb3BzLmxlbmd0aDsgaSA8IGxsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZSA9IGxvb3BzW2ldO1xuICAgICAgICBpZiAoZS5lbmFibGVkKSBlLmV4ZWN1dGUoZS5jbG9jayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzdG9wXG4gICAqIEBkZXNjcmlwdGlvbiBTdG9wcyByZW5kZXJpbmcgbG9vcHNcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnVwZGF0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFkZExvb3BcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgbG9vcCB0byB0aGlzIGFwcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGxvb3AgLSB0aGUgbG9vcCB0byBhZGRcbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gcHJvbWlzZXMgY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuQXBwXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPkFkZGluZyBhIGxvb3AgdG8gYW4gYXBwPC9jYXB0aW9uPlxuICAgKiBjb25zdCBsb29wID0gbmV3IExvb3AoKCkgPT4ge1xuICAgKiAgLy8gLi4uXG4gICAqIH0pO1xuICAgKlxuICAgKiBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4gICAqXG4gICAqIGFwcC5hZGRMb29wKGxvb3ApO1xuICAgKiBsb29wLnN0YXJ0KCk7XG4gICAqL1xuICBhZGRMb29wKGxvb3ApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmxvb3BzLnB1c2gobG9vcCk7XG4gICAgICByZXNvbHZlKGxvb3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVtb3ZlTG9vcFxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlcyBsb29wIGZyb20gdGhpcyBhcHAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsb29wIC0gdGhlIGxvb3AgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHByb21pc2VzIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb3JlLkFwcFxuICAgKi9cbiAgcmVtb3ZlTG9vcChsb29wKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxvb3BzLmluZGV4T2YobG9vcCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB0aGlzLmxvb3BzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIHJlc29sdmUobG9vcCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMubWFuYWdlci5nZXQoa2V5KTtcbiAgfVxuXG4gIHVzZShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLnVzZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEFwcFxufTtcbiIsImltcG9ydCB7Q2xvY2t9IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3MgTG9vcFxuICogQGNhdGVnb3J5IGNvcmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlYWNoIGFuaW1hdGlvbiBmcmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBbdXNlQ2xvY2s9dHJ1ZV0gcGFzc2VzIGEgQ2xvY2sgdG8gdGhlIGZ1bmN0aW9uIHdoZW4gY2FsbGVkLCBpZiB0cnVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmVcbiAqL1xuY2xhc3MgTG9vcCB7XG4gIGNvbnN0cnVjdG9yKGZ1bmMsIHVzZUNsb2NrID0gdHJ1ZSkge1xuICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG4gICAgdGhpcy5jbG9jayA9IHVzZUNsb2NrID8gbmV3IENsb2NrKCkgOiBudWxsO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQ09OVFJPTFNcblxuICAvKipcbiAgICogQG1ldGhvZCBzdGFydFxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFN0YXJ0cyB0aGlzIGxvb3AsIGNsb2NrIGlmIGl0IGhhcyBvbmUuIFdvbid0IGRvIGFueXRoaW5nIGlmIGxvb3AgZW5hYmxlZCBhbHJlYWR5LlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW3dvcmxkXSBhcHAgdG8gYWRkIHRoaXMgbG9vcCB0bywgaWYgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29yZS5Mb29wXG4gICAqL1xuICBzdGFydCh3b3JsZCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHJldHVybjtcblxuICAgIGlmICh3b3JsZCkgd29ybGQuYWRkTG9vcCh0aGlzKTtcblxuICAgIGlmICh0aGlzLmNsb2NrKSB0aGlzLmNsb2NrLnN0YXJ0KCk7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHN0b3BcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBTdG9wcyB0aGlzIGxvb3AgYW5kIGl0cyBjbG9jayBpZiBpdCBoYXMgb25lLCB3b24ndCBkbyBhbnl0aGluZyBpZiB0aGlzIGxvb3AgaXMgbm90IGVuYWJsZWQpXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbd29ybGRdIGFwcCB0byByZW1vdmUgdGhpcyBsb29wIGZyb20sIGlmIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTG9vcFxuICAgKi9cbiAgc3RvcCh3b3JsZCkge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jbG9jaykgdGhpcy5jbG9jay5zdG9wKCk7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAod29ybGQpIHdvcmxkLnJlbW92ZUxvb3AodGhpcyk7XG4gIH1cblxuICAvLyBFWEVDVVRJT05cblxuICAvKipcbiAgICogQG1ldGhvZCBleGVjdXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGZ1bmN0aW9uIG9mIHRoaXMgbG9vcFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvcmUuTG9vcFxuICAgKiBAcmV0dXJucyB7Kn0gd2hhdGV2ZXIgdGhlIGZ1bmN0aW9uIG9mIHRoaXMgbG9vcCByZXR1cm5zXG4gICAqL1xuICBleGVjdXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZ1bmModGhpcy5jbG9jayk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgTG9vcFxufTtcbiIsIi8qKiBAbW9kdWxlIGNvcmUgKi9cbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vTWVzaENvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL0xpZ2h0Q29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQ2FtZXJhQ29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQXBwJztcbmV4cG9ydCAqIGZyb20gJy4vTG9vcCc7XG5leHBvcnQgKiBmcm9tICcuL01vZHVsZU1hbmFnZXInO1xuIiwiaW1wb3J0IHtBbWJpZW50TGlnaHQgYXMgQW1iaWVudExpZ2h0TmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0xpZ2h0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0xpZ2h0Q29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQW1iaWVudExpZ2h0XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9saWdodHNcbiAqIEBkZXNjcmlwdGlvbiBBbWJpZW50TGlnaHQgaXMgYSBzaW1wbGUgY2xhc3MsIGl0IGV4dGVuZHMgTGlnaHQgYW5kIGluaGVyaXRzIGFsbCBpdHMgbWV0aG9kcy5cbiAqIEFtYmllbnRMaWdodCBjcmVhdGVzIGJhc2ljIGxpZ2h0IGFyb3VuZCBhbGwgc2NlbmUsIHNvIGl0IGRvZXNuJ3QgbmVlZCBwcm9wZXJ0aWVzIGxpa2UgcG9zIG9yIHRhcmdldC5cbiAqIEl0IHN1cHBvcnRzIG9ubHkgY29sb3IgYW5kIGludGVuc2l0eSBhcyBwYXJhbWV0ZXJzLCB3aGljaCBkZWZpbmVzIHRoZSBjb2xvciBvZiB0aGUgc3Vycm91bmRlZCBsaWdodCBhbmQgaW50ZW5zaXR5IG9mIGxpZ2h0LlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7Y29sb3I6IDB4ZmZmZmZmLCBpbnRlbnNpdHk6IDF9fV0gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTGlnaHRDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9saWdodHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGFuIEFtYmllbnRMaWdodCA8L2NhcHRpb24+XG4gKiBuZXcgQW1iaWVudExpZ2h0KHtcbiAqICAgY29sb3I6IDB4ZmZmZmZmLFxuICogICBpbnRlbnNpdHk6IDAuMlxuICogfSkuYWRkVG8od29ybGQpO1xuICovXG5jbGFzcyBBbWJpZW50TGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQW1iaWVudExpZ2h0LmRlZmF1bHRzKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgQW1iaWVudExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBBbWJpZW50TGlnaHRcbn07XG4iLCJpbXBvcnQge0RpcmVjdGlvbmFsTGlnaHQgYXMgRGlyZWN0aW9uYWxMaWdodE5hdGl2ZSwgRGlyZWN0aW9uYWxMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIERpcmVjdGlvbmFsTGlnaHRcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2xpZ2h0c1xuICogQGRlc2NyaXB0aW9uIERpcmVjdGluYWxMaWdodCBjcmVhdGVzIGEgbGlnaHQgdGhhdCBzaGluZXMgZnJvbSBhIHNwZWNpZmljIGRpcmVjdGlvbiBub3QgZnJvbSBhIHNwZWNpZmljIHBvc2l0aW9uLjxici8+PGJyLz5cbiAqIFRoaXMgbGlnaHQgd2lsbCBiZWhhdmUgYXMgdGhvdWdoIGl0IGlzIGluZmluaXRlbHkgZmFyIGF3YXkgYW5kIHRoZSByYXlzIHByb2R1Y2VkIGZyb20gaXQgYXJlIGFsbCBwYXJhbGxlbC4gPGJyLz48YnIvPlxuICogVGhlIGJlc3QgYW5hbG9neSB3b3VsZCBiZSBhIGxpZ2h0IHNvdXJjZSB0aGF0IGFjdHMgbGlrZSB0aGUgc3VuOiB0aGUgc3VuIGlzIHNvIGZhciBhd2F5IHRoYXQgYWxsIHN1bmxpZ2h0IGhpdHRpbmcgb2JqZWN0cyBjb21lcyBmcm9tIHRoZSBzYW1lIGFuZ2xlLjxici8+PGJyLz5cbiAqIEl0IGhhcyB0aGUgc2FtZSBvcHRpb25zIGFzIEFtYmllbnRMaWdodCBpbiBsaWdodCBwYXJhbWF0ZXIsIGJ1dCBpdCBhbHNvIHN1cHBvcnRzIHBvcyBhbmQgdGFyZ2V0IHBhcmFtYXRlcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17bGlnaHQ6IHtjb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMX19XSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2xpZ2h0c1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBEaXJlY3Rpb25hbExpZ2h0IHRvIGZhbGwgZG93biBmcm9tIHZlYzMoMTAsIDIwLCAxMCkgdG8gdmVjMygwLCAwLCAwKTwvY2FwdGlvbj5cbiAqIG5ldyBEaXJlY3Rpb25hbExpZ2h0KHtcbiAqICAgY29sb3I6IDB4ZmZmZmZmLFxuICogICBpbnRlbnNpdHk6IDAuMixcbiAqXG4gKiAgIHBvc2l0aW9uOiBbMTAsIDIwLCAxMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIERpcmVjdGlvbmFsTGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgRGlyZWN0aW9uYWxMaWdodC5kZWZhdWx0cyk7XG4gICAgdGhpcy53cmFwU2hhZG93KCk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtsaWdodDogbmV3IERpcmVjdGlvbmFsTGlnaHROYXRpdmUoXG4gICAgICBwYXJhbXMuY29sb3IsXG4gICAgICBwYXJhbXMuaW50ZW5zaXR5XG4gICAgKX0pLmxpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIERpcmVjdGlvbmFsTGlnaHRcbn07XG4iLCJpbXBvcnQge0hlbWlzcGhlcmVMaWdodCBhcyBIZW1pc3BoZXJlTGlnaHROYXRpdmUsIEhlbWlzcGhlcmVMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEhlbWlzcGhlcmVMaWdodFxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbGlnaHRzXG4gKiBAZGVzY3JpcHRpb24gSGVtaXNwaGVyZUxpZ2h0IGlzIGEgbGlnaHQgc291cmNlIHBvc2l0aW9uZWQgZGlyZWN0bHkgYWJvdmUgdGhlIHNjZW5lLjxici8+XG4gKiBJdCBhbHNvIGRvZXNuJ3QgbmVlZCBwb3NpdGlvbiBhbmQgdGFyZ2V0IHByb3BlcnRpZXMuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvd2ViZ2xfbGlnaHRzX2hlbWlzcGhlcmUuaHRtbFwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7c2t5Q29sb3I6IDB4ZmZmZmZmLCBncm91bmRDb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMX19XSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5MaWdodENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2xpZ2h0c1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBIZW1pc3BoZXJlTGlnaHQ8L2NhcHRpb24+XG4gKiBuZXcgSGVtaXNwaGVyZUxpZ2h0KHtcbiAqICAgc2t5Q29sb3I6IDB4ZmYwMDAwLFxuICogICBncm91bmRDb2xvcjogMHgwMDAwZmYsXG4gKiAgIGludGVuc2l0eTogMC4yXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBIZW1pc3BoZXJlTGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIHNreUNvbG9yOiAweGZmZmZmZixcbiAgICBncm91bmRDb2xvcjogMHhmZmZmZmYsXG4gICAgaW50ZW5zaXR5OiAxXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgSGVtaXNwaGVyZUxpZ2h0LmRlZmF1bHRzKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgSGVtaXNwaGVyZUxpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLnNreUNvbG9yLFxuICAgICAgcGFyYW1zLmdyb3VuZENvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBIZW1pc3BoZXJlTGlnaHRcbn07XG4iLCJpbXBvcnQge1BvaW50TGlnaHQgYXMgUG9pbnRMaWdodE5hdGl2ZSwgUG9pbnRMaWdodEhlbHBlcn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFBvaW50TGlnaHRcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2xpZ2h0c1xuICogQGRlc2NyaXB0aW9uIFBvaW50TGlnaHQgY3JlYXRlcyBhIGxpZ2h0IGF0IGEgc3BlY2lmaWMgcG9zaXRpb24gaW4gdGhlIHNjZW5lLiBUaGUgbGlnaHQgc2hpbmVzIGluIGFsbCBkaXJlY3Rpb25zIChyb3VnaGx5IHNpbWlsYXIgdG8gYSBsaWdodCBidWxiLik8YnIvPjxici8+XG4gKiBJdCBoYXMgdGhlIHNhbWUgb3B0aW9ucyBhcyBBbWJpZW50TGlnaHQgaW4gbGlnaHQgcGFyYW1hdGVyLCBidXQgaXQgYWxzbyBzdXBwb3J0cyBwb3NpdGlvbiwgZGlzdGFuY2UgYW5kIGRlY2F5Ljxici8+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17bGlnaHQ6IHtjb2xvcjogMHhmZmZmZmYsIGludGVuc2l0eTogMSwgZGlzdGFuY2U6IDEwMCwgZGVjYXk6IDF9fV0gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgTGlnaHRDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9saWdodHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgUG9pbnRMaWdodDwvY2FwdGlvbj5cbiAqIG5ldyBQb2ludExpZ2h0KCB7XG4gKiAgIGNvbG9yOiAweGZmMDAwMCxcbiAqICAgaW50ZW5zaXR5OiAyLFxuICogICBkaXN0YW5jZTogMzAwXG4gKlxuICogICBwb3NpdGlvbjogWzEwLCAyMCwgMTBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBQb2ludExpZ2h0IGV4dGVuZHMgTGlnaHRDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdHM9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDEsXG4gICAgZGlzdGFuY2U6IDEwMCxcbiAgICBkZWNheTogMVxuICB9XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFBvaW50TGlnaHQuZGVmYXVsdHMpO1xuICAgIHRoaXMud3JhcFNoYWRvdygpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bGlnaHQ6IG5ldyBQb2ludExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy5kaXN0YW5jZSxcbiAgICAgIHBhcmFtcy5kZWNheVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBQb2ludExpZ2h0XG59O1xuIiwiaW1wb3J0IHtTcG90TGlnaHQgYXMgU3BvdExpZ2h0TmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0xpZ2h0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0xpZ2h0Q29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgU3BvdExpZ2h0XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9saWdodHNcbiAqIEBkZXNjcmlwdGlvbiBTcG90TGlnaHQgY3JlYXRlcyBzcG90IGxpZ2h0IHRoYXQgY2FuIGNhc3Qgc2hhZG93IGluIG9uZSBkaXJlY3Rpb24uIDxici8+PGJyLz5cbiAqIEl0IGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIEFtYmllbnRMaWdodCBpbiBsaWdodCwgYnV0IGl0IGFsc28gc3VwcG9ydHMgcG9zIGFuZCB0YXJnZXQuIDxici8+PGJyLz5cbiAqIFNwb3RMaWdodCBhZmZlY3RzIG1lc2hlcyB3aXRoIGxhbWJlcnQgYW5kIHBob25nIG1hdGVyaWFsLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2V4YW1wbGVzL3dlYmdsX2xpZ2h0c19zcG90bGlnaHQuaHRtbFwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e2xpZ2h0OiB7Y29sb3I6IDB4ZmZmZmZmLCBpbnRlbnNpdHk6IDEsIGRpc3RhbmNlOiAxMDAsIGFuZ2xlOiBNYXRoLlBJIC8gMywgZXhwb25lbnQ6IDAsIGRlY2F5OiAxfX1dIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkxpZ2h0Q29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbGlnaHRzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFNwb3RMaWdodCB0aGF0IGZhbGxzIGRvd24gZnJvbSB2ZWMzKDEwLCAyMCwgMTApIHRvIHZlYzMoMCwgMCwgMCk8L2NhcHRpb24+XG4gKiBuZXcgU3BvdExpZ2h0KHtcbiAqICAgY29sb3I6IDB4MDBmZjAwLFxuICogICBpbnRlbnNpdHk6IDMsXG4gKiAgIGRpc3RhbmNlOiAxMDAwXG4gKlxuICogICBwb3NpdGlvbjogWzEwLCAyMCwgMTBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBTcG90TGlnaHQgZXh0ZW5kcyBMaWdodENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5MaWdodENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICBpbnRlbnNpdHk6IDEsXG4gICAgZGlzdGFuY2U6IDEwMCxcbiAgICBhbmdsZTogTWF0aC5QSSAvIDMsXG4gICAgZXhwb25lbnQ6IDAsXG4gICAgZGVjYXk6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgU3BvdExpZ2h0LmRlZmF1bHRzKTtcbiAgICB0aGlzLndyYXBTaGFkb3coKTtcbiAgfVxuXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe2xpZ2h0OiBuZXcgU3BvdExpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy5kaXN0YW5jZSxcbiAgICAgIHBhcmFtcy5hbmdsZSxcbiAgICAgIHBhcmFtcy5leHBvbmVudCxcbiAgICAgIHBhcmFtcy5kZWNheVxuICAgICl9KS5saWdodDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBTcG90TGlnaHRcbn07XG4iLCJpbXBvcnQge1JlY3RBcmVhTGlnaHQgYXMgUmVjdEFyZWFMaWdodE5hdGl2ZX0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtMaWdodENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9MaWdodENvbXBvbmVudCc7XG5cbmNsYXNzIEFyZWFMaWdodCBleHRlbmRzIExpZ2h0Q29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkxpZ2h0Q29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgIGludGVuc2l0eTogMSxcbiAgICB3aWR0aDogMTAsXG4gICAgaGVpZ2h0OiAxMFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBBcmVhTGlnaHQuZGVmYXVsdHMpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bGlnaHQ6IG5ldyBSZWN0QXJlYUxpZ2h0TmF0aXZlKFxuICAgICAgcGFyYW1zLmNvbG9yLFxuICAgICAgcGFyYW1zLmludGVuc2l0eSxcbiAgICAgIHBhcmFtcy53aWR0aCxcbiAgICAgIHBhcmFtcy5oZWlnaHRcbiAgICApfSkubGlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQXJlYUxpZ2h0XG59O1xuIiwiLyoqIEBtb2R1bGUgY29tcG9uZW50cy9saWdodHMgKi9cbmV4cG9ydCAqIGZyb20gJy4vQW1iaWVudExpZ2h0JztcbmV4cG9ydCAqIGZyb20gJy4vRGlyZWN0aW9uYWxMaWdodCc7XG5leHBvcnQgKiBmcm9tICcuL0hlbWlzcGhlcmVMaWdodCc7XG5leHBvcnQgKiBmcm9tICcuL1BvaW50TGlnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9TcG90TGlnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9BcmVhTGlnaHQnO1xuIiwiaW1wb3J0IHtDdWJlQ2FtZXJhIGFzIEN1YmVDYW1lcmFOYXRpdmV9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7Q2FtZXJhQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0NhbWVyYUNvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEN1YmVDYW1lcmFcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIDYgY2FtZXJhcyB0aGF0IHJlbmRlciB0byBhIFdlYkdMUmVuZGVyVGFyZ2V0Q3ViZVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtZXRlcnMgb2JqZWN0LlxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLkNhbWVyYUNvbXBvbmVudFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRlcyBhIEN1YmVDYW1lcmEgYW5kIHNldCBpdCBhcyBhcHAncyBjYW1lcmE8L2NhcHRpb24+XG4gKiBjb25zdCBjYW1lcmEgPSBuZXcgQ3ViZUNhbWVyYSh7XG4gKiAgIGNhbWVyYToge1xuICogICAgIGN1YmVSZXNvbHV0aW9uOiAyNTZcbiAqICAgfSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeDogMCxcbiAqICAgICB5OiAxMDAsXG4gKiAgICAgejogMFxuICogICB9XG4gKiB9KTtcbiAqXG4gKiBhcHAuY2FtZXJhID0gY2FtZXJhO1xuICovXG5jbGFzcyBDdWJlQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzLkN1YmVDYW1lcmEjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgY2FtZXJhOiB7XG4gICAqICAgICBuZWFyOiAxLFxuICAgKiAgICAgZmFyOiAxMDAwLFxuICAgKiAgICAgY3ViZVJlc29sdXRpb246IDEyOFxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLkNhbWVyYUNvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIG5lYXI6IDEsXG4gICAgZmFyOiAxMDAwLFxuICAgIGN1YmVSZXNvbHV0aW9uOiAxMjhcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ3ViZUNhbWVyYS5kZWZhdWx0cyk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtjYW1lcmE6IG5ldyBDdWJlQ2FtZXJhTmF0aXZlKFxuICAgICAgcGFyYW1zLm5lYXIsXG4gICAgICBwYXJhbXMuZmFyLFxuICAgICAgcGFyYW1zLmN1YmVSZXNvbHV0aW9uXG4gICAgKX0pLmNhbWVyYTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDdWJlQ2FtZXJhXG59O1xuIiwiaW1wb3J0IHtPcnRob2dyYXBoaWNDYW1lcmEgYXMgT3J0aG9ncmFwaGljQ2FtZXJhTmF0aXZlfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQge0NhbWVyYUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9DYW1lcmFDb21wb25lbnQnO1xuaW1wb3J0IHtzeXN0ZW19IGZyb20gJy4uLy4uL3BvbHlmaWxsJztcblxuLyoqXG4gKiBAY2xhc3MgT3J0aG9ncmFwaGljQ2FtZXJhXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9jYW1lcmFzXG4gKiBAZGVzY3JpcHRpb24gQ2FtZXJhIHdpdGggb3J0aG9ncmFwaGljIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvY2FtZXJhc1xuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuQ2FtZXJhQ29tcG9uZW50XG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGUgYW4gT3J0aG9ncmFwaGljQ2FtZXJhIGFuZCBzZXQgaXQgYXMgYXBwJ3MgY2FtZXJhPC9jYXB0aW9uPlxuICogY29uc3QgY2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSh7XG4gKiAgIGNhbWVyYToge1xuICogICAgIGZhcjogMTAwMDBcbiAqICAgfSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeTogNTBcbiAqICAgfVxuICogfSk7XG4gKlxuICogYXBwLmNhbWVyYSA9IGNhbWVyYTtcbiAqL1xuY2xhc3MgT3J0aG9ncmFwaGljQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvY2FtZXJhcy5PcnRob2dyYXBoaWNDYW1lcmEjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgbmVhcjogMSxcbiAgICogICBmYXI6IDEwMDAsXG4gICAqICAgbGVmdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gLTIsXG4gICAqICAgcmlnaHQ6IHN5c3RlbS53aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAqICAgdG9wOiBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICogICBib3R0b206IHN5c3RlbS53aW5kb3cuaW5uZXJIZWlnaHQgLyAtMlxuICAgKiB9PC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uQ2FtZXJhQ29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgbmVhcjogMSxcbiAgICBmYXI6IDEwMDAsXG4gICAgbGVmdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gLTIsXG4gICAgcmlnaHQ6IHN5c3RlbS53aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgdG9wOiBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICBib3R0b206IHN5c3RlbS53aW5kb3cuaW5uZXJIZWlnaHQgLyAtMlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBPcnRob2dyYXBoaWNDYW1lcmEuZGVmYXVsdHMpO1xuICB9XG5cbiAgYnVpbGQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7Y2FtZXJhOiBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhTmF0aXZlKFxuICAgICAgcGFyYW1zLmxlZnQsXG4gICAgICBwYXJhbXMucmlnaHQsXG4gICAgICBwYXJhbXMudG9wLFxuICAgICAgcGFyYW1zLmJvdHRvbSxcbiAgICAgIHBhcmFtcy5uZWFyLFxuICAgICAgcGFyYW1zLmZhclxuICAgICl9KS5jYW1lcmE7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgT3J0aG9ncmFwaGljQ2FtZXJhXG59O1xuIiwiaW1wb3J0IHtQZXJzcGVjdGl2ZUNhbWVyYSBhcyBQZXJzcGVjdGl2ZUNhbWVyYU5hdGl2ZX0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHtDYW1lcmFDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvQ2FtZXJhQ29tcG9uZW50JztcbmltcG9ydCB7c3lzdGVtfSBmcm9tICcuLi8uLi9wb2x5ZmlsbCc7XG5cbi8qKlxuICogQGNsYXNzIFBlcnNwZWN0aXZlQ2FtZXJhXG4gKiBAZGVzY3JpcHRpb24gQ2FtZXJhIHdpdGggcGVyc3BlY3RpdmUgcHJvamVjdGlvbi5cbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL2NhbWVyYXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5DYW1lcmFDb21wb25lbnRcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0ZSBhbiBQZXJzcGVjdGl2ZUNhbWVyYSBhbmQgc2V0IGl0IGFzIGFwcCdzIGNhbWVyYTwvY2FwdGlvbj5cbiAqIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSh7XG4gKiAgIGZvdjogNzUsXG4gKiAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gKlxuICogICBwb3NpdGlvbjoge1xuICogICAgIHg6IDAsXG4gKiAgICAgeTogMTAwLFxuICogICAgIHo6IDBcbiAqICAgfVxuICogfSk7XG4gKlxuICogYXBwLmNhbWVyYSA9IGNhbWVyYTtcbiAqL1xuY2xhc3MgUGVyc3BlY3RpdmVDYW1lcmEgZXh0ZW5kcyBDYW1lcmFDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9jYW1lcmFzLlBlcnNwZWN0aXZlQ2FtZXJhI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIG5lYXI6IDEsXG4gICAqICAgZmFyOiAxMDAwLFxuICAgKiAgIGZvdjogNzUsXG4gICAqICAgYXNwZWN0OiBzeXN0ZW0ud2luZG93LmlubmVyV2lkdGggLyBzeXN0ZW0ud2luZG93LmlubmVySGVpZ2h0XG4gICAqIH08L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5DYW1lcmFDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBuZWFyOiAxLFxuICAgIGZhcjogMTAwMCxcbiAgICBmb3Y6IDc1LFxuICAgIGFzcGVjdDogc3lzdGVtLndpbmRvdy5pbm5lcldpZHRoIC8gc3lzdGVtLndpbmRvdy5pbm5lckhlaWdodFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBQZXJzcGVjdGl2ZUNhbWVyYS5kZWZhdWx0cyk7XG4gIH1cblxuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHtjYW1lcmE6IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYU5hdGl2ZShcbiAgICAgIHBhcmFtcy5mb3YsXG4gICAgICBwYXJhbXMuYXNwZWN0LFxuICAgICAgcGFyYW1zLm5lYXIsXG4gICAgICBwYXJhbXMuZmFyXG4gICAgKX0pLmNhbWVyYTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBQZXJzcGVjdGl2ZUNhbWVyYVxufTtcbiIsIi8qKiBAbW9kdWxlIGNvbXBvbmVudHMvY2FtZXJhcyAqL1xuZXhwb3J0ICogZnJvbSAnLi9DdWJlQ2FtZXJhJztcbmV4cG9ydCAqIGZyb20gJy4vT3J0aG9ncmFwaGljQ2FtZXJhJztcbmV4cG9ydCAqIGZyb20gJy4vUGVyc3BlY3RpdmVDYW1lcmEnO1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQm94QnVmZmVyR2VvbWV0cnksXG4gIEJveEdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBCb3hcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEFzIHRvbGQgb24gQ29tcG9uZW50IGRlZmluaXRpb24sIHdoaWxlIHlvdSBjYW4gcGFzcyBhbnkgb2YgdGhlIGluaGVyaXRlZCBwYXJhbXMgZm9yIHRoaXMgY29tcG9uZW50IGNvbnN0cnVjdGlvbiwgeW91IHdpbGwgbmVlZCB0b1xuICogcGFzcyBzcGVjaWZpYyBwYXJhbWV0ZXJzIHRvIGJ1aWxkIHRoaXMgbWVzaCBhcyBhIGdlb21ldHJ5IG9iamVjdC5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjQm94R2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIEJveCwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiAgbmV3IEJveCh7XG4gKiAgICBnZW9tZXRyeToge1xuICogICAgICB3aWR0aDogMixcbiAqICAgICAgaGVpZ2h0OiAyLFxuICogICAgICBkZXB0aDogMlxuICogICAgfSxcbiAqXG4gKiAgICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgICB9KSxcbiAqXG4gKiAgICBwb3NpdGlvbjogWzUwLCA2MCwgNzBdXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBCb3ggZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQm94I2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICB3aWR0aDogMSxcbiAgICogICAgIGhlaWdodDogMSxcbiAgICogICAgIGRlcHRoOiAxLFxuICAgKiAgICAgd2lkdGhTZWdtZW50czogMSxcbiAgICogICAgIGhlaWdodFNlZ21lbnRzOiAxLFxuICAgKiAgICAgZGVwdGhTZWdtZW50czogMVxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgZGVwdGg6IDEsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAxLFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAgICBkZXB0aFNlZ21lbnRzOiAxXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQm94I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IGdlb21ldHJ5OiBbJ3dpZHRoJywgJ2hlaWdodCcsICdkZXB0aCcsICd3aWR0aFNlZ21lbnRzJywgJ2hlaWdodFNlZ21lbnRzJywgJ2RlcHRoU2VnZW1lbnRzJ11cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2RlcHRoJywgJ3dpZHRoU2VnbWVudHMnLCAnaGVpZ2h0U2VnbWVudHMnLCAnZGVwdGhTZWdlbWVudHMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBCb3guZGVmYXVsdHMsIEJveC5pbnN0cnVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Cb3hcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IEJveEJ1ZmZlckdlb21ldHJ5IDogQm94R2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LndpZHRoLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXB0aCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS53aWR0aFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmRlcHRoU2VnbWVudHNcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEJveFxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIENpcmNsZUJ1ZmZlckdlb21ldHJ5LFxuICBDaXJjbGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ2lyY2xlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBBcyB0b2xkIG9uIENvbXBvbmVudCBkZWZpbml0aW9uLCB3aGlsZSB5b3UgY2FuIHBhc3MgYW55IG9mIHRoZSBpbmhlcml0ZWQgcGFyYW1zIGZvciB0aGlzIGNvbXBvbmVudCBjb25zdHJ1Y3Rpb24sIHlvdSB3aWxsIG5lZWQgdG9cbiAqIHBhc3Mgc3BlY2lmaWMgcGFyYW1ldGVycyB0byBidWlsZCB0aGlzIG1lc2ggYXMgYSBnZW9tZXRyeSBvYmplY3QuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0NpcmNsZUdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBDaXJjbGUsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogIG5ldyBDaXJjbGUoe1xuICogICAgZ2VvbWV0cnk6IHtcbiAqICAgICAgcmFkaXVzOiA0LFxuICogICAgICBzZWdtZW50czogMTZcbiAqICAgIH0sXG4gKlxuICogICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgIGNvbG9yOiAweGZmZmZmZlxuICogICAgfSksXG4gKlxuICogICAgcG9zaXRpb246IFs1MCwgNjAsIDcwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNpcmNsZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiA1MCxcbiAgICogICAgIHNlZ21lbnRzOiA4LFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiA1MCxcbiAgICAgIHNlZ21lbnRzOiA4LFxuICAgICAgdGhldGFTdGFydDogMCxcbiAgICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNpcmNsZSNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCBnZW9tZXRyeTogWydyYWRpdXMnLCAnc2VnbWVudHMnLCAndGhldGFTdGFydCcsICd0aGV0YUxlbmd0aCddXG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbJ3JhZGl1cycsICdzZWdtZW50cycsICd0aGV0YVN0YXJ0JywgJ3RoZXRhTGVuZ3RoJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ2lyY2xlLmRlZmF1bHRzLCBDaXJjbGUuaW5zdHJ1Y3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ2lyY2xlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgKHBhcmFtcy5idWZmZXIgPyBDaXJjbGVCdWZmZXJHZW9tZXRyeSA6IENpcmNsZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTdGFydCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YUxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ2lyY2xlXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQ29uZUJ1ZmZlckdlb21ldHJ5LFxuICBDb25lR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIENvbmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgY3lsaW5kZXIgaXMgb25lIG9mIHRoZSBtb3N0IGJhc2ljIGN1cnZpbGluZWFyIGdlb21ldHJpYyBzaGFwZXMsIHRoZSBzdXJmYWNlIGZvcm1lZCBieSB0aGUgcG9pbnRzIGF0IGEgZml4ZWQgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0cmFpZ2h0IGxpbmUsIHRoZSBheGlzIG9mIHRoZSBjeWxpbmRlci4gPGJyLz48YnIvPlxuICogVGhlIHNvbGlkIGVuY2xvc2VkIGJ5IHRoaXMgc3VyZmFjZSBhbmQgYnkgdHdvIHBsYW5lcyBwZXJwZW5kaWN1bGFyIHRvIHRoZSBheGlzIGlzIGFsc28gY2FsbGVkIGEgY3lsaW5kZXIuPGJyLz5cbiAqIFRoZSBzdXJmYWNlIGFyZWEgYW5kIHRoZSB2b2x1bWUgb2YgYSBjeWxpbmRlciBoYXZlIGJlZW4ga25vd24gc2luY2UgZGVlcCBhbnRpcXVpdHkuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0NvbmVHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgQ29uZSwgYW5kIGFkZGluZyB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgQ29uZSh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzVG9wOiAyLFxuICogICAgIHJhZGl1c0JvdHRvbTogNCxcbiAqICAgICBoZWlnaHQ6IDVcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvczogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIENvbmUgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ29uZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAyMCxcbiAgICogICAgIGhlaWdodDogMTAwLFxuICAgKiAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgKiAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAqICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG5cbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIGhlaWdodDogMTAwLFxuICAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgICAgdGhldGFTdGFydDogMCxcbiAgICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkNvbmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICogZ2VvbWV0cnk6IFtcbiAgICogICAncmFkaXVzJyxcbiAgICogICAnaGVpZ2h0JyxcbiAgICogICAncmFkaXVzU2VnbWVudHMnLFxuICAgKiAgICdoZWlnaHRTZWdtZW50cycsXG4gICAqICAgJ29wZW5FbmRlZCcsXG4gICAqICAgJ3RoZXRhU3RhcnQnLFxuICAgKiAgICd0aGV0YUxlbmd0aCdcbiAgICogXVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFtcbiAgICAgICdyYWRpdXMnLFxuICAgICAgJ2hlaWdodCcsXG4gICAgICAncmFkaXVzU2VnbWVudHMnLFxuICAgICAgJ2hlaWdodFNlZ21lbnRzJyxcbiAgICAgICdvcGVuRW5kZWQnLFxuICAgICAgJ3RoZXRhU3RhcnQnLFxuICAgICAgJ3RoZXRhTGVuZ3RoJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgQ29uZS5kZWZhdWx0cywgQ29uZS5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ29uZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IChwYXJhbXMuYnVmZmVyID8gQ29uZUJ1ZmZlckdlb21ldHJ5IDogQ29uZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaGVpZ2h0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1c1NlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodFNlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5Lm9wZW5FbmRlZCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YVN0YXJ0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnRoZXRhTGVuZ3RoXG4gICAgKTtcblxuICAgIHJldHVybiBnZW9tZXRyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBDb25lXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSxcbiAgQ3lsaW5kZXJHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ3lsaW5kZXJcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgY3lsaW5kZXIgaXMgb25lIG9mIHRoZSBtb3N0IGJhc2ljIGN1cnZpbGluZWFyIGdlb21ldHJpYyBzaGFwZXMsIHRoZSBzdXJmYWNlIGZvcm1lZCBieSB0aGUgcG9pbnRzIGF0IGEgZml4ZWQgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0cmFpZ2h0IGxpbmUsIHRoZSBheGlzIG9mIHRoZSBjeWxpbmRlci4gPGJyLz48YnIvPlxuICogVGhlIHNvbGlkIGVuY2xvc2VkIGJ5IHRoaXMgc3VyZmFjZSBhbmQgYnkgdHdvIHBsYW5lcyBwZXJwZW5kaWN1bGFyIHRvIHRoZSBheGlzIGlzIGFsc28gY2FsbGVkIGEgY3lsaW5kZXIuPGJyLz5cbiAqIFRoZSBzdXJmYWNlIGFyZWEgYW5kIHRoZSB2b2x1bWUgb2YgYSBjeWxpbmRlciBoYXZlIGJlZW4ga25vd24gc2luY2UgZGVlcCBhbnRpcXVpdHkuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0N5bGluZGVyR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIEN5bGluZGVyLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBDeWxpbmRlcih7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzVG9wOiAyLFxuICogICAgIHJhZGl1c0JvdHRvbTogNCxcbiAqICAgICBoZWlnaHQ6IDVcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvczogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIEN5bGluZGVyIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkN5bGluZGVyI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXNUb3A6IDIwLFxuICAgKiAgICAgcmFkaXVzQm90dG9tOiAyMCxcbiAgICogICAgIGhlaWdodDogMTAwLFxuICAgKiAgICAgcmFkaXVzU2VnbWVudHM6IDMyLFxuICAgKiAgICAgaGVpZ2h0U2VnbWVudHM6IDEsXG4gICAqICAgICBvcGVuRW5kZWQ6IGZhbHNlLFxuICAgKiAgICAgdGhldGFTdGFydDogMCxcbiAgICogICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfTwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1c1RvcDogMCxcbiAgICAgIHJhZGl1c0JvdHRvbTogMSxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIHJhZGl1c1NlZ21lbnRzOiAzMixcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAxLFxuICAgICAgb3BlbkVuZGVkOiBmYWxzZSxcbiAgICAgIHRoZXRhU3RhcnQ6IDAsXG4gICAgICB0aGV0YUxlbmd0aDogTWF0aC5QSSAqIDJcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5DeWxpbmRlciNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiBnZW9tZXRyeTogW1xuICAgKiAgICdyYWRpdXNUb3AnLFxuICAgKiAgICdyYWRpdXNCb3R0b20nLFxuICAgKiAgICdoZWlnaHQnLFxuICAgKiAgICdyYWRpdXNTZWdtZW50cycsXG4gICAqICAgJ2hlaWdodFNlZ21lbnRzJyxcbiAgICogICAnb3BlbkVuZGVkJyxcbiAgICogICAndGhldGFTdGFydCcsXG4gICAqICAgJ3RoZXRhTGVuZ3RoJ1xuICAgKiBdXG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogW1xuICAgICAgJ3JhZGl1c1RvcCcsXG4gICAgICAncmFkaXVzQm90dG9tJyxcbiAgICAgICdoZWlnaHQnLFxuICAgICAgJ3JhZGl1c1NlZ21lbnRzJyxcbiAgICAgICdoZWlnaHRTZWdtZW50cycsXG4gICAgICAnb3BlbkVuZGVkJyxcbiAgICAgICd0aGV0YVN0YXJ0JyxcbiAgICAgICd0aGV0YUxlbmd0aCdcbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIEN5bGluZGVyLmRlZmF1bHRzLCBDeWxpbmRlci5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuQ3lsaW5kZXJcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IEN5bGluZGVyQnVmZmVyR2VvbWV0cnkgOiBDeWxpbmRlckdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXNUb3AsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzQm90dG9tLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhlaWdodCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXNTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5oZWlnaHRTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5vcGVuRW5kZWQsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTdGFydCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YUxlbmd0aFxuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ3lsaW5kZXJcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSxcbiAgRG9kZWNhaGVkcm9uR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIERvZGVjYWhlZHJvblxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gSW4gZ2VvbWV0cnksIGEgZG9kZWNhaGVkcm9uIGlzIGFueSBwb2x5aGVkcm9uIHdpdGggdHdlbHZlIGZsYXQgZmFjZXMuIDxici8+PGJyLz5cbiAqIFRoZSBtb3N0IGZhbWlsaWFyIGRvZGVjYWhlZHJvbiBpcyB0aGUgcmVndWxhciBkb2RlY2FoZWRyb24sIHdoaWNoIGlzIGEgUGxhdG9uaWMgc29saWQuIDxici8+XG4gKiBUaGVyZSBhcmUgYWxzbyB0aHJlZSByZWd1bGFyIHN0YXIgZG9kZWNhaGVkcmEsIHdoaWNoIGFyZSBjb25zdHJ1Y3RlZCBhcyBzdGVsbGF0aW9ucyBvZiB0aGUgY29udmV4IGZvcm0uIDxici8+XG4gKiBBbGwgb2YgdGhlc2UgaGF2ZSBpY29zYWhlZHJhbCBzeW1tZXRyeSwgb3JkZXIgMTIwLlxuICogRG9kZWNhaGVkcm9uIGNyZWF0ZXMgRG9kZWNhaGVkcm9uIG9iamVjdCBieSBpdCdzIHJhZGl1cyBhbmQgZGV0YWlsLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNEb2RlY2FoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgRG9kZWNhaGVkcm9uLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBEb2RlY2FoZWRyb24oe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogMlxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IHtcbiAqICAgICB5OiAxMFxuICogICB9XG4gICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgRG9kZWNhaGVkcm9uIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Eb2RlY2FoZWRyb24jZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiBnZW9tZXRyeToge1xuICAgKiAgIHJhZGl1czogMSxcbiAgICogICBkZXRhaWw6IDBcbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEsXG4gICAgICBkZXRhaWw6IDBcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Eb2RlY2FoZWRyb24jaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICogZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWydyYWRpdXMnLCAnZGV0YWlsJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgRG9kZWNhaGVkcm9uLmRlZmF1bHRzLCBEb2RlY2FoZWRyb24uaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkRvZGVjYWhlZHJvblxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSA6IERvZGVjYWhlZHJvbkdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuZGV0YWlsXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBEb2RlY2FoZWRyb25cbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgRXh0cnVkZUdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBFeHRydWRlXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBFeHRydWRlIGdlb21ldHJ5IG1lYW5zIHRoYXQgeW91IGNhbiBjcmVhdGUgYSAzRCBtZXNoIGZyb20gYW55IDJEIHNoYXBlIHVzaW5nIHRocmVlLmpzIGdlb21ldHJ5IGJhc2VkIG9uIDxhIGhyZWY9J2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL21hdGgvVmVjdG9yMic+VEhSRUUuVmVjdG9yMi48L2E+IDxici8+XG4gKiBTdWNoIGltcGxlbWVudGF0aW9uIHdpbGwgaGVscCB5b3UgdG8gbWFrZSB2b2x1bWVkIHNoYXBlcyB0aGF0IGhhdmUgdGhlaXIgb3duIGRlcHRoIGFuZCBjYW4gYmUgc2VlbiBmcm9tIGFsbCBhbmdlbHMuPGJyLz48YnIvPlxuICogWW91IGNhbiBhbHNvIGZpbmQgc29tZSBpbnRlcmVzdGluZyBleGFtcGxlcyBtYWRlIHVzaW5nIDxhIGhyZWY9J3RocmVlanMub3JnJz50aHJlZS5qczwvYT4gd2hpY2ggaXMgYSBjb3JlIG9mIHdocy5qcywgc3VjaCBhczpcbiAqIC0gPGEgaHJlZj0naHR0cDovL3RocmVlanMub3JnL2V4YW1wbGVzL3dlYmdsX2dlb21ldHJ5X2V4dHJ1ZGVfc2hhcGVzLmh0bWwnPldlYmdsIGdlb21ldHJ5IGV4dHJ1ZGU8L2E+XG4gKiAtIDxhIGhyZWY9J2h0dHA6Ly90aHJlZWpzLm9yZy9leGFtcGxlcy93ZWJnbF9nZW9tZXRyeV9leHRydWRlX3NoYXBlczIuaHRtbCc+RXh0cnVkZSBzaGFwZXMgZnJvbSBnZW9kYXRhPC9hPlxuICogLSA8YSBocmVmPSdodHRwOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvd2ViZ2xfZ2VvbWV0cnlfZXh0cnVkZV9zcGxpbmVzLmh0bWwnPkV4dHJ1ZGUgc3BsaW5lczwvYT5cbiAqXG4gKiBTdWNoIGV4YW1wbGVzIGNhbiBiZSBlYXNpbHkgaW1wbGVtZW50ZWQgdXNpbmcgd2hpdGVzdG9ybS5qcyBvciBpdCdzIHBsdWdpbnMuIFVzZSBgRXh0cnVkZWAgY2xhc3Mgd2l0aCA8YSBocmVmPSdodHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9leHRyYXMvY29yZS9TaGFwZSc+VEhSRUUuU2hhcGU8L2E+IHRvIGdldCBleHRydWRlIGVmZmVjdCBvZiBzaGFwZSBkZWZpbmVkIGJ5IDJEIHZlY3RvcnMuXG4gKiBUaGlzIGNsYXNzIGlzIHNpbWlsYXIgdG8gPGEgaHJlZj0naHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZ2VvbWV0cmllcy9FeHRydWRlR2VvbWV0cnknPlRIUkVFLkV4dHJ1ZGVHZW9tZXRyeTwvYT4sXG4gKiBidXQgaXQgYWxzbyBjb250YWlucyBhbGwgcHJvcGVydGllcywgYXBwbGllZCBieSBgU2hhcGVgLCBzdWNoIGFzIG1hdGVyaWFsLCBtYXNzIGFuZCB2ZWN0b3JzIGxpa2UgcG9zaXRpb24gKHBvcykgYW5kIHJvdGF0aW9uIChyb3QpLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNFeHRydWRlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIHNoYXBlLCB0aGVuIGFuIEV4dHJ1ZGUgZnJvbSBpdDwvY2FwdGlvbj5cbiAqIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKFtcbiAqICAgbmV3IFRIUkVFLlZlY3RvcjIoLTQsLTQpLFxuICogICBuZXcgVEhSRUUuVmVjdG9yMigtMiwwKSxcbiAqICAgbmV3IFRIUkVFLlZlY3RvcjIoLTQsNCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDAsMiksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDQsNCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDIsMCksXG4gKiAgIG5ldyBUSFJFRS5WZWN0b3IyKDQsLTQpLFxuICogICBuZXcgVEhSRUUuVmVjdG9yMigwLC0yKVxuICogXSk7XG4gKlxuICogY29uc3QgZXh0cnVkZSA9IG5ldyBFeHRydWRlKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICBzaGFwZXM6IHNoYXBlLFxuICogICAgIG9wdGlvbnM6IHtcbiAqICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gKiAgICAgICBiZXZlbFNpemU6IDAsXG4gKiAgICAgICBhbW91bnQ6IDJcbiAqICAgICB9XG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pO1xuICpcbiAqIGV4dHJ1ZGUuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgRXh0cnVkZSBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuRXh0cnVkZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgc2hhcGVzOiBbXSxcbiAgICogICAgIG9wdGlvbnM6IHt9XG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHNoYXBlczogW10sXG4gICAgICBvcHRpb25zOiB7fVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkV4dHJ1ZGUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbJ3NoYXBlcycsICdvcHRpb25zJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnc2hhcGVzJywgJ29wdGlvbnMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBFeHRydWRlLmRlZmF1bHRzLCBFeHRydWRlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5FeHRydWRlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgRXh0cnVkZUdlb21ldHJ5KFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnNoYXBlcyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5vcHRpb25zXG4gICAgKTtcblxuICAgIHJldHVybiBwYXJhbXMuYnVmZmVyID8gbmV3IEJ1ZmZlckdlb21ldHJ5KCkuZnJvbUdlb21ldHJ5KGdlb21ldHJ5KSA6IGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEV4dHJ1ZGVcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBJY29zYWhlZHJvbkJ1ZmZlckdlb21ldHJ5LFxuICBJY29zYWhlZHJvbkdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBJY29zYWhlZHJvblxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gSW4gZ2VvbWV0cnksIGFuIGljb3NhaGVkcm9uIGlzIGEgcG9seWhlZHJvbiB3aXRoIDIwIGZhY2VzLjxici8+XG4gKiBUaGVyZSBhcmUgbWFueSBraW5kcyBvZiBpY29zYWhlZHJhLCB3aXRoIHNvbWUgYmVpbmcgbW9yZSBzeW1tZXRyaWNhbCB0aGFuIG90aGVycy4gVGhlIG1vc3Qgd2VsbCBrbm93biBpcyB0aGUgUGxhdG9uaWMsIGNvbnZleCByZWd1bGFyIGljb3NhaGVkcm9uLjxici8+XG4gKiBgSWNvc2FoZWRyb25gIGNyZWF0ZXMgYW4gSWNvc2FoZWRyb24gb2JqZWN0IGJ5IGl0cyByYWRpdXMgYW5kIGRldGFpbC5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjSWNvc2FoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgSWNvc2FoZWRyb24sIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IEljb3NhaGVkcm9uKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDIsXG4gKiAgICAgZGV0YWlsOiAxXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIEljb3NhaGVkcm9uIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5JY29zYWhlZHJvbiNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAxLFxuICAgKiAgICAgZGV0YWlsOiAwXG4gICAqICAgfVxuICAgKiB9PC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiAxLFxuICAgICAgZGV0YWlsOiAwXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuSWNvc2FoZWRyb24jaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQge2dlb21ldHJ5OiBbJ3JhZGl1cycsICdkZXRhaWwnXX1cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIEljb3NhaGVkcm9uLmRlZmF1bHRzLCBJY29zYWhlZHJvbi5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuSWNvc2FoZWRyb25cbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IChwYXJhbXMuYnVmZmVyID8gSWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeSA6IEljb3NhaGVkcm9uR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXRhaWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEljb3NhaGVkcm9uXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgTGF0aGVCdWZmZXJHZW9tZXRyeSxcbiAgTGF0aGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgTGF0aGVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEEgYExhdGhlR2VvbWV0cnlgIGFsbG93cyB5b3UgdG8gY3JlYXRlIHNoYXBlcyBmcm9tIGEgc21vb3RoIGN1cnZlLlxuICogVGhpcyBjdXJ2ZSBpcyBkZWZpbmVkIGJ5IGEgbnVtYmVyIG9mIHBvaW50cyAoYWxzbyBjYWxsZWQga25vdHMpIGFuZCBpcyBtb3N0IG9mdGVuIGNhbGxlZCBhIHNwbGluZS4gVGhpcyBzcGxpbmUgaXMgcm90YXRlZCBhcm91bmQgYSBmaXhlZCBwb2ludCBhbmQgcmVzdWx0cyBpbiB2YXNlLSBhbmQgYmVsbC1saWtlIHNoYXBlcy48YnIvPjxici8+XG4gKiBJbiAzRCBjb21wdXRlciBncmFwaGljcywgYSBsYXRoZWQgb2JqZWN0IGlzIGEgM0QgbW9kZWwgd2hvc2UgdmVydGV4IGdlb21ldHJ5IGlzIHByb2R1Y2VkIGJ5IHJvdGF0aW5nIHRoZSBwb2ludHMgb2YgYSBzcGxpbmUgb3Igb3RoZXIgcG9pbnQgc2V0IGFyb3VuZCBhIGZpeGVkIGF4aXMuXG4gKiBUaGUgbGF0aGluZyBtYXkgYmUgcGFydGlhbDsgdGhlIGFtb3VudCBvZiByb3RhdGlvbiBpcyBub3QgbmVjZXNzYXJpbHkgYSBmdWxsIDM2MCBkZWdyZWVzLlxuICogVGhlIHBvaW50IHNldCBwcm92aWRpbmcgdGhlIGluaXRpYWwgc291cmNlIGRhdGEgY2FuIGJlIHRob3VnaHQgb2YgYXMgYSBjcm9zcyBzZWN0aW9uIHRocm91Z2ggdGhlIG9iamVjdCBhbG9uZyBhIHBsYW5lIGNvbnRhaW5pbmcgaXRzIGF4aXMgb2YgcmFkaWFsIHN5bW1ldHJ5LiA8YnIvPjxici8+XG4gKiBUaGUgPGEgaHJlZj0naHR0cDovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNMYXRoZUdlb21ldHJ5Jz5mb2xsb3dpbmcgZXhhbXBsZTwvYT4gc2hvd3MgYSBnZW9tZXRyeSB3aGljaCBjYW4gYmUgZ2VuZXJhdGVkIHVzaW5nIGBMYXRoZWAgY2xhc3MuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI0xhdGhlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIExhdGgsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogY29uc3QgcG9pbnRzID0gW107XG4gKlxuICogZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gKiAgIHBvaW50cy5wdXNoKFxuICogICAgIG5ldyBUSFJFRS5WZWN0b3IyKFxuICogICAgICAgKE1hdGguc2luKGkgKiAwLjcpICogMTUgKyA1MCkgLyAxMCxcbiAqICAgICAgIChpIC0gNSkgKiAwLjJcbiAqICAgICApXG4gKiAgICk7XG4gKiB9XG4gKlxuICogY29uc3QgbGF0aGUgPSBuZXcgTGF0aGUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHBvaW50czogcG9pbnRzXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDUwLCAxMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIExhdGhlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MYXRoZSNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcG9pbnRzOiBbXVxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBwb2ludHM6IFtdXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuTGF0aGUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT57XG4gICAqICAgZ2VvbWV0cnk6IFsncG9pbnRzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncG9pbnRzJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgTGF0aGUuZGVmYXVsdHMsIExhdGhlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MYXRoZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgKHBhcmFtcy5idWZmZXIgPyBMYXRoZUJ1ZmZlckdlb21ldHJ5IDogTGF0aGVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucG9pbnRzXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBMYXRoZVxufTtcbiIsImltcG9ydCB7XG4gIExpbmUgYXMgTGluZU5hdGl2ZSxcbiAgQnVmZmVyR2VvbWV0cnksXG4gIEdlb21ldHJ5LFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIExpbmVDdXJ2ZTMsXG4gIFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIExpbmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIExpbmUgY29tcG9uZW50IGlzIGdlbmVyYXRlZCBmcm9tIGEgY3VydmUvbGluZSBhbmQgYW1vdW50IG9mIHZlY3RvcnMgdGhhdCBzaG91bGQgYmUgdXNlZCAocG9pbnRzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIExpbmUsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IExpbmUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIGN1cnZlOiBuZXcgVEhSRUUuTGluZUN1cnZlMyhuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIDApLCBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMzAsIDApKVxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBMaW5lIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5MaW5lI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGN1cnZlOiBuZXcgTGluZUN1cnZlMyhuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMTAsIDAsIDApKSxcbiAgICogICBwb2ludHM6IDUwXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcblxuICAgIGN1cnZlOiBudWxsLFxuICAgIHBvaW50czogNTBcbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkxpbmUjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT57XG4gICAqICAgZ2VvbWV0cnk6IFsnY3VydmUnLCAncG9pbnRzJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsnY3VydmUnLCAncG9pbnRzJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBzdXBlcihwYXJhbXMsIExpbmUuZGVmYXVsdHMsIExpbmUuaW5zdHJ1Y3Rpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuTGluZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBMaW5lTmF0aXZlKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gcGFyYW1zLmJ1ZmZlciA/IG5ldyBCdWZmZXJHZW9tZXRyeSgpIDogbmV3IEdlb21ldHJ5KCk7XG5cbiAgICBpZiAocGFyYW1zLmJ1ZmZlcikge1xuICAgICAgY29uc3QgcHAgPSBwYXJhbXMuY3VydmUuZ2V0UG9pbnRzKHBhcmFtcy5wb2ludHMpO1xuICAgICAgY29uc3QgdmVydHMgPSBuZXcgRmxvYXQzMkFycmF5KHBwLmxlbmd0aCAqIDMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gcHAubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgY29uc3QgaTMgPSBpICogMztcblxuICAgICAgICB2ZXJ0c1tpM10gPSBwcFtpXS54O1xuICAgICAgICB2ZXJ0c1tpMyArIDFdID0gcHBbaV0ueTtcbiAgICAgICAgdmVydHNbaTMgKyAyXSA9IHBwW2ldLno7XG4gICAgICB9XG5cbiAgICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlcnRzLCAzKSk7XG4gICAgfSBlbHNlIGdlb21ldHJ5LnZlcnRpY2VzID0gcGFyYW1zLmN1cnZlLmdldFBvaW50cyhwYXJhbXMucG9pbnRzKTtcblxuICAgIHJldHVybiBnZW9tZXRyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBMaW5lXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgSlNPTkxvYWRlclxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgSW1wb3J0ZXJcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEltcG9ydGVyIGlzIGEgbG9hZGVyIGZvciBtZXNoZXMgYW5kIGFueSBvdGhlciBkYXRhIHRvIHlvdXIgc2NlbmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIEltcG9ydGVyLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBJbXBvcnRlcih7XG4gKiAgIGxvYWRlcjogbmV3IFRIUkVFLk9CSkxvYWRlcigpLFxuICpcbiAqICAgcGFyc2VyKGdlb21ldHJ5LCBtYXRlcmlhbCkgeyAvLyBkYXRhIGZyb20gbG9hZGVyXG4gKiAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7IC8vIHNob3VsZCByZXR1cm4geW91ciAubmF0aXZlIChtZXNoIGluIHRoaXMgY2FzZSlcbiAqICAgfSxcbiAqXG4gKiAgIHBvc2l0aW9uOiBbMCwgMTAwLCAwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgSW1wb3J0ZXIgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuSW1wb3J0ZXIjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgdXJsOiAnJyxcbiAgICogICBsb2FkZXI6IG5ldyBKU09OTG9hZGVyKCksXG4gICAqXG4gICAqICAgb25Mb2FkKCkge30sXG4gICAqICAgb25Qcm9ncmVzcygpIHt9LFxuICAgKiAgIG9uRXJyb3IoKSB7fSxcbiAgICpcbiAgICogICB0ZXh0dXJlUGF0aDogbnVsbCxcbiAgICogICB1c2VDdXN0b21NYXRlcmlhbDogZmFsc2UsXG4gICAqXG4gICAqICAgcGFyc2VyKGdlb21ldHJ5LCBtYXRlcmlhbHMpIHtcbiAgICogICAgIHJldHVybiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWxzKTtcbiAgICogICB9XG4gICAqIH08L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuXG4gICAgdXJsOiAnJyxcbiAgICBsb2FkZXI6IG5ldyBKU09OTG9hZGVyKCksXG5cbiAgICBvbkxvYWQoKSB7fSxcbiAgICBvblByb2dyZXNzKCkge30sXG4gICAgb25FcnJvcigpIHt9LFxuXG4gICAgdGV4dHVyZVBhdGg6IG51bGwsXG4gICAgdXNlQ3VzdG9tTWF0ZXJpYWw6IGZhbHNlLFxuXG4gICAgcGFyc2VyKGdlb21ldHJ5LCBtYXRlcmlhbHMpIHtcbiAgICAgIHJldHVybiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWxzKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9uc1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGZpbHRlclxuICAgKiBAZGVzY3JpcHRpb24gRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge1RIUkVFLk1lc2h9IG9iamVjdCBJbnN0YW5jZSBmb3IgaXRlcmF0aW5nIHRocm91Z2ggaXQncyBjaGlsZHJlbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZmlsdGVyIEZ1bmN0aW9uIHdpdGggY2hpbGQgYXMgYXJndW1lbnQsIHNob3VsZCByZXR1cm4gYSBib29sZWFuIHdoZXRoZXIgaW5jbHVkZSB0aGUgY2hpbGQgb3Igbm90LlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBvYmplY3Qgd2l0aCBjaGlsZHJlblxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkltcG9ydGVyXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlJlbW92aW5nIHVubmVjZXNzYXJ5IGxpZ2h0cyBmcm9tIGNoaWxkcmVuPC9jYXB0aW9uPlxuICAgKiBuZXcgSWNvc2FoZWRyb24oe1xuICAgKiAgIGxvYWRlcjogbmV3IFRIUkVFLk9CSkxvYWRlcigpLFxuICAgKlxuICAgKiAgIHBhcnNlKGdyb3VwKSB7IC8vIGRhdGEgZnJvbSBsb2FkZXJcbiAgICogICAgIHJldHVybiBJbXBvcnRlci5maWx0ZXIoZ3JvdXAsIGNoaWxkID0+ICFjaGlsZC5pc0xpZ2h0KTsgLy8gcmVtb3ZlIGxpZ2h0c1xuICAgKiAgIH0sXG4gICAqXG4gICAqICAgcG9zaXRpb246IFswLCAxMDAsIDBdXG4gICAqIH0pLmFkZFRvKGFwcCk7XG4gICAqL1xuICBzdGF0aWMgZmlsdGVyKG9iamVjdCwgZmlsdGVyKSB7XG4gICAgY29uc3QgcHJvY2Vzc0ZpbHRlciA9IG9iamVjdCA9PiB7XG4gICAgICBvYmplY3QuY2hpbGRyZW4uZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbikgcHJvY2Vzc0ZpbHRlcihlbCk7XG4gICAgICAgIGlmICghZmlsdGVyKGVsKSkgb2JqZWN0LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb2Nlc3NGaWx0ZXIob2JqZWN0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBJbXBvcnRlci5kZWZhdWx0cywgSW1wb3J0ZXIuaW5zdHJ1Y3Rpb25zLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLkltcG9ydGVyXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChwYXJhbXMudGV4dHVyZVBhdGgpIHBhcmFtcy5sYW9kZXIuc2V0VGV4dHVyZVBhdGgocGFyYW1zLnRleHR1cmVQYXRoKTtcblxuICAgICAgcGFyYW1zLmxvYWRlci5sb2FkKHBhcmFtcy51cmwsICguLi5kYXRhKSA9PiB7IC8vIGdlb21ldHJ5LCBtYXRlcmlhbHNcbiAgICAgICAgcGFyYW1zLm9uTG9hZCguLi5kYXRhKTtcblxuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBwYXJhbXMucGFyc2VyKC4uLmRhdGEpfSkubWVzaDtcblxuICAgICAgICBjb25zdCB7Z2VvbWV0cnk6IGdlb20sIG1hdGVyaWFsOiBtYXR9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG9iamVjdC5nZW9tZXRyeSxcbiAgICAgICAgICBtYXRlcmlhbDogcGFyYW1zLnVzZUN1c3RvbU1hdGVyaWFsID8gcGFyYW1zLm1hdGVyaWFsIDogb2JqZWN0Lm1hdGVyaWFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvYmplY3QuZ2VvbWV0cnkpIG9iamVjdC5nZW9tZXRyeSA9IGdlb207XG4gICAgICAgIGlmIChvYmplY3QubWF0ZXJpYWwpIG9iamVjdC5tYXRlcmlhbCA9IG1hdDtcblxuICAgICAgICByZXNvbHZlKG9iamVjdCk7XG4gICAgICB9LCBwYXJhbXMub25Qcm9ncmVzcywgcGFyYW1zLm9uRXJyb3IpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEltcG9ydGVyXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgT2N0YWhlZHJvbkJ1ZmZlckdlb21ldHJ5LFxuICBPY3RhaGVkcm9uR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIE9jdGFoZWRyb25cbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEluIGdlb21ldHJ5LCBhbiBvY3RhaGVkcm9uIGlzIGEgcG9seWhlZHJvbiB3aXRoIGVpZ2h0IGZhY2VzLlxuICogQSByZWd1bGFyIG9jdGFoZWRyb24gaXMgYSBQbGF0b25pYyBzb2xpZCBjb21wb3NlZCBvZiBlaWdodCBlcXVpbGF0ZXJhbCB0cmlhbmdsZXMsIGZvdXIgb2Ygd2hpY2ggbWVldCBhdCBlYWNoIHZlcnRleC5cbiAqIDxici8+PGJyLz5cbiAqIGBPY3RhaGVkcm9uYCBjcmVhdGVzIGFuIE9jdGFoZWRyb24gb2JqZWN0IGJ5IGl0cyBgcmFkaXVzYCBhbmQgYGRldGFpbGAuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI09jdGFoZWRyb25HZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGFuIE9jdGFoZWRyb24sIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IE9jdGFoZWRyb24oe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogMixcbiAqICAgICBkZXRhaWw6IDFcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvc2l0aW9uOiBbMCwgMTAwLCAwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgT2N0YWhlZHJvbiBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuT2N0YWhlZHJvbiNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAxLFxuICAgKiAgICAgZGV0YWlsOiAwXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1czogMSxcbiAgICAgIGRldGFpbDogMFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBPY3RhaGVkcm9uLmRlZmF1bHRzLCBPY3RhaGVkcm9uLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5PY3RhaGVkcm9uXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IE9jdGFoZWRyb25CdWZmZXJHZW9tZXRyeSA6IE9jdGFoZWRyb25HZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmRldGFpbFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgT2N0YWhlZHJvblxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFBhcmFtZXRyaWNCdWZmZXJHZW9tZXRyeSxcbiAgUGFyYW1ldHJpY0dlb21ldHJ5LFxuICBWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBQYXJhbWV0cmljXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBgUGFyYW1ldHJpY2AgZ2VuZXJhdGVzIGEgZ2VvbWV0cnkgcmVwcmVzZW50aW5nIGEgPGEgaHJlZj0naHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGFyYW1ldHJpY19zdXJmYWNlJz5QYXJhbWV0cmljIHN1cmZhY2U8L2E+XG4gKiA8YnIvPjxici8+XG4gKiBJdCBpcyB1c3VhbGx5IHVzZWQgdG8gZGV2ZWxvcCBkaWZmZXJlbnQga2luZHMgb2YgaGlnaGZpZWxkcyBvciB2aXN1YWxpemUgYSA8YSBocmVmPSdodHRwczovL3N0ZW1rb3NraS5naXRodWIuaW8vVGhyZWUuanMvR3JhcGh1bHVzLUZ1bmN0aW9uLmh0bWwnPm1hdGggZnVuY3Rpb248L2E+LlxuICogPGJyLz5cbiAqIC0gPGEgaHJlZj0naHR0cDovL21hdGguaHdzLmVkdS9ncmFwaGljc2Jvb2svc291cmNlL3RocmVlanMvY3VydmVzLWFuZC1zdXJmYWNlcy5odG1sJz5QYXJhbWV0cmljIHN1cmZhY2U8L2E+XG4gKiAtIDxhIGhyZWY9J2h0dHBzOi8vc3RlbWtvc2tpLmdpdGh1Yi5pby9UaHJlZS5qcy9HcmFwaHVsdXMtU3VyZmFjZS5odG1sJz5cIkdyYXBodWx1c1wiPC9hPlxuICogPGJyLz48YnIvPlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNQYXJhbWV0cmljR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIGNyZWF0aW5nIGFuIGhlaWdodGZpZWxkLWxpa2UgZ2VvbWV0cnkuIGB1YCBhbmQgYHZgIGFyZSBsaWtlIGB4YCBhbmQgYHlgIGluIHNoYXBlLCBidXQgdGhlaXIgdmFsdWVzIGFyZSBhbHdheXMgZnJvbSBgMGAgdG8gYDFgLlxuICogV2UgdXNlIHRoZW0gaW4gYFRIUkVFLlZlY3RvcjNgIGxpa2UgYHhgIGFuZCBgemAgYW5kIGBNYXRoLnJhbmRvbSgpICogNWAgZm9yIGB5YC48L2NhcHRpb24+XG4gKiBjb25zdCBjcmVhdGVQYXJhbWV0cmljID0gKHUsIHYpID0+IHtcbiAqICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUgKiAzMCwgTWF0aC5yYW5kb20oKSAqIDUsIHYgKiAzMCk7XG4gKiB9XG4gKlxuICogbmV3IFBhcmFtZXRyaWMoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIGZ1bmM6IGNyZWF0ZVBhcmFtZXRyaWNcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICogICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgLTEwMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFBhcmFtZXRyaWMgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlBhcmFtZXRyaWMjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIGZ1bmM6ICh1LCB2KSA9PiBuZXcgVmVjdG9yMyh1LCB2LCAwKSxcbiAgICogICAgIHNsaWNlczogMTAsXG4gICAqICAgICB0YWNrczogMTBcbiAgICogICB9XG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgZnVuYzogKHUsIHYpID0+IG5ldyBWZWN0b3IzKHUsIHYsIDApLFxuICAgICAgc2xpY2VzOiAxMCxcbiAgICAgIHN0YWNrczogMTBcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgUGFyYW1ldHJpYy5kZWZhdWx0cywgUGFyYW1ldHJpYy5pbnN0cnVjdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5QYXJhbWV0cmljXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IFBhcmFtZXRyaWNCdWZmZXJHZW9tZXRyeSA6IFBhcmFtZXRyaWNHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuZnVuYyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5zbGljZXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc3RhY2tzXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBQYXJhbWV0cmljXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgUGxhbmVCdWZmZXJHZW9tZXRyeSxcbiAgUGxhbmVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgUGxhbmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIGBQbGFuZWAgaXMgdXNlZCBmb3IgY3JlYXRpbmcgcGxhbmVzIGdpdmVuIHNvbWUgYHdpZHRoYCBhbmQgYGhlaWdodGAuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI1BsYW5lR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFBsYW5lLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBQbGFuZSh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgd2lkdGg6IDIwLFxuICogICAgIGhlaWdodDogMzBcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgUGxhbmUgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlBsYW5lI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICB3aWR0aDogMTAsXG4gICAqICAgICBoZWlnaHQ6IDEwLFxuICAgKiAgICAgd1NlZ21lbnRzOiAxLFxuICAgKiAgICAgaFNlZ21lbnRzOiAxXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHdpZHRoOiAxMCxcbiAgICAgIGhlaWdodDogMTAsXG4gICAgICB3U2VnbWVudHM6IDEsXG4gICAgICBoU2VnbWVudHM6IDFcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5QbGFuZSNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3dTZWdtZW50cycsICdoU2VnbWVudHMnXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWyd3aWR0aCcsICdoZWlnaHQnLCAnd1NlZ21lbnRzJywgJ2hTZWdtZW50cyddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFBsYW5lLmRlZmF1bHRzLCBQbGFuZS5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUGxhbmVcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyAocGFyYW1zLmJ1ZmZlciA/IFBsYW5lQnVmZmVyR2VvbWV0cnkgOiBQbGFuZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS53aWR0aCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5oZWlnaHQsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkud1NlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmhTZWdtZW50c1xuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgUGxhbmVcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBQb2x5aGVkcm9uQnVmZmVyR2VvbWV0cnksXG4gIFBvbHloZWRyb25HZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuY29uc3QgW3ZlcnRpY2VzT2ZDdWJlLCBpbmRpY2VzT2ZGYWNlc10gPSBbXG4gIFtcbiAgICAtMSwgLTEsIC0xLCAxLCAtMSwgLTEsIDEsIDEsIC0xLCAtMSwgMSwgLTEsXG4gICAgLTEsIC0xLCAxLCAxLCAtMSwgMSwgMSwgMSwgMSwgLTEsIDEsIDFcbiAgXSxcbiAgW1xuICAgIDIsIDEsIDAsIDAsIDMsIDIsXG4gICAgMCwgNCwgNywgNywgMywgMCxcbiAgICAwLCAxLCA1LCA1LCA0LCAwLFxuICAgIDEsIDIsIDYsIDYsIDUsIDEsXG4gICAgMiwgMywgNywgNywgNiwgMixcbiAgICA0LCA1LCA2LCA2LCA3LCA0XG4gIF1cbl07XG5cbi8qKlxuICogQGNsYXNzIFBvbHloZWRyb25cbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIEluIGVsZW1lbnRhcnkgZ2VvbWV0cnksIGEgcG9seWhlZHJvbiBpcyBhIHNvbGlkIGluIHRocmVlIGRpbWVuc2lvbnMgd2l0aCBmbGF0IHBvbHlnb25hbCBmYWNlcywgc3RyYWlnaHQgZWRnZXMgYW5kIHNoYXJwIGNvcm5lcnMgb3IgdmVydGljZXMuXG4gKiA8YnIvPjxici8+XG4gKiBgUG9seWhlZHJvbmAgY3JlYXRlcyBhIFBvbHloZWRyb24gYnkgaXRzIGByYWRpdXNgIGFuZCBgZGV0YWlsYC5cbiAqIDxici8+PGJyLz5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhbiBQb2x5aGVkcm9uLCBhbmQgYWRkaW5nIHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBQb2x5aGVkcm9uKHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICByYWRpdXM6IDIsXG4gKiAgICAgZGV0YWlsOiAxXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDEwMCwgMF1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFBvbHloZWRyb24gZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgc3RhdGljIHZlcnRpY2VzT2ZDdWJlID0gdmVydGljZXNPZkN1YmU7XG4gIHN0YXRpYyBpbmRpY2VzT2ZGYWNlcyA9IGluZGljZXNPZkZhY2VzO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Qb2x5aGVkcm9uI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICB2ZXJ0aWNlc09mQ3ViZTogW1xuICAgKiAgICAgICAtMSwgLTEsIC0xLCAxLCAtMSwgLTEsIDEsIDEsIC0xLCAtMSwgMSwgLTEsXG4gICAqICAgICAgIC0xLCAtMSwgMSwgMSwgLTEsIDEsIDEsIDEsIDEsIC0xLCAxLCAxXG4gICAqICAgICBdLFxuICAgKlxuICAgKiAgICAgaW5kaWNlc09mRmFjZXM6IFtcbiAgICogICAgICAgMiwgMSwgMCwgMCwgMywgMixcbiAgICogICAgICAgMCwgNCwgNywgNywgMywgMCxcbiAgICogICAgICAgMCwgMSwgNSwgNSwgNCwgMCxcbiAgICogICAgICAgMSwgMiwgNiwgNiwgNSwgMSxcbiAgICogICAgICAgMiwgMywgNywgNywgNiwgMixcbiAgICogICAgICAgNCwgNSwgNiwgNiwgNywgNFxuICAgKiAgICAgXSxcbiAgICpcbiAgICogICAgIHJhZGl1czogNixcbiAgICogICAgIGRldGFpbDogMlxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICB2ZXJ0aWNlc09mQ3ViZSxcbiAgICAgIGluZGljZXNPZkZhY2VzLFxuICAgICAgcmFkaXVzOiA2LFxuICAgICAgZGV0YWlsOiAyXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUG9seWhlZHJvbiNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFsndmVydGljZXNPZkN1YmUnLCAnaW5kaWNlc09mRmFjZXMnLCAncmFkaXVzJywgJ2RldGFpbCddXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbJ3ZlcnRpY2VzT2ZDdWJlJywgJ2luZGljZXNPZkZhY2VzJywgJ3JhZGl1cycsICdkZXRhaWwnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBQb2x5aGVkcm9uLmRlZmF1bHRzLCBQb2x5aGVkcm9uLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Qb2x5aGVkcm9uXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IFBvbHloZWRyb25CdWZmZXJHZW9tZXRyeSA6IFBvbHloZWRyb25HZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudmVydGljZXNPZkN1YmUsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaW5kaWNlc09mRmFjZXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmRldGFpbFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgUG9seWhlZHJvblxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFJpbmdHZW9tZXRyeSxcbiAgUmluZ0J1ZmZlckdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBSaW5nXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBSaW5nIGNsYXNzIGNyZWF0ZXMgYSBjaXJjbGUgb3IganVzdCAyRCBUb3J1cy4gRG9lcyBub3Qgc3VwcG9ydCBwaHlzaWNzLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNSaW5nR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFJpbmcsIGFuZCBhZGRpbmcgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IFJpbmcoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIGlubmVyUmFkaXVzOiA1LFxuICogICAgIG91dGVyUmFkaXVzOiAyXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZixcbiAqICAgICBzaWRlIFRIUkVFLkRvdWJsZVNpZGVcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjogWzAsIDgsIDBdLFxuICpcbiAqICAgcm90YXRpb246IHtcbiAqICAgICB4OiBNYXRoLlBJLzRcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgUmluZyBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuUmluZyNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgaW5uZXJSYWRpdXM6IDAsXG4gICAqICAgICBvdXRlclJhZGl1czogNTAsXG4gICAqICAgICB0aGV0YVNlZ21lbnRzOiA4LFxuICAgKiAgICAgcGhpU2VnbWVudHM6IDgsXG4gICAqICAgICB0aGV0YVN0YXJ0OiAwLFxuICAgKiAgICAgdGhldGFMZW5ndGg6IE1hdGguUEkgKiAyXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIGlubmVyUmFkaXVzOiAwLFxuICAgICAgb3V0ZXJSYWRpdXM6IDUwLFxuICAgICAgdGhldGFTZWdtZW50czogOCxcbiAgICAgIHBoaVNlZ21lbnRzOiA4LFxuICAgICAgdGhldGFTdGFydDogMCxcbiAgICAgIHRoZXRhTGVuZ3RoOiBNYXRoLlBJICogMlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlJpbmcjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbXG4gICAqICAgICAnaW5uZXJSYWRpdXMnLFxuICAgKiAgICAgJ291dGVyUmFkaXVzJyxcbiAgICogICAgICd0aGV0YVNlZ21lbnRzJyxcbiAgICogICAgICdwaGlTZWdtZW50cycsXG4gICAqICAgICAndGhldGFTdGFydCcsXG4gICAqICAgICAndGhldGFMZW5ndGgnXG4gICAqICAgXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiBbXG4gICAgICAnaW5uZXJSYWRpdXMnLFxuICAgICAgJ291dGVyUmFkaXVzJyxcbiAgICAgICd0aGV0YVNlZ21lbnRzJyxcbiAgICAgICdwaGlTZWdtZW50cycsXG4gICAgICAndGhldGFTdGFydCcsXG4gICAgICAndGhldGFMZW5ndGgnXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBSaW5nLmRlZmF1bHRzLCBSaW5nLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5SaW5nXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IFJpbmdCdWZmZXJHZW9tZXRyeSA6IFJpbmdHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaW5uZXJSYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkub3V0ZXJSYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudGhldGFTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5waGlTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50aGV0YVN0YXJ0LFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnRoZXRhTGVuZ3RoXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBSaW5nXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgU2hhcGVCdWZmZXJHZW9tZXRyeSxcbiAgU2hhcGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcGVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIFNoYXBlIGlzIGEgdW5pdmVyc2FsIGNsYXNzLiBJdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSBkaWZmZXJlbnQgMkQgc2hhcGVzIGluIDNEIHNjZW5lLjxici8+XG4gKiBVbmZvcnR1bmF0ZWx5LCBub3QgYWxsIG9mIHRoZW0gc3VwcG9ydCBwaHlzaWNzLCBhbiBhbHRlcm5hdGl2ZSBpcyB0byBtYWtlIGEgc2ltaWxhciAzRCBvYmplY3QgYW5kIHNjYWxlIGl0cyB3aWR0aCBkb3duIHRvIG5lYXIgemVyby5cbiAqIDxici8+PGJyLz5cbiAqIGBTaGFwZWAgY29uc2lzdHMgb2Ygc2hhcGVzIHRoYXQgYXJlIGluIGl0cyBzaGFwZXMgcGFyYW1ldGVyLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNTaGFwZUdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBwbGFuZSBsb29raW5nIFNoYXBlIGZyb20gYSBUSFJFRS5TaGFwZSwgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBjb25zdCByZWN0V2lkdGggPSAxMCxcbiAqIHJlY3RMZW5ndGggPSA1O1xuICpcbiAqIGNvbnN0IHJlY3RTaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICogcmVjdFNoYXBlLm1vdmVUbygwLDApO1xuICogcmVjdFNoYXBlLmxpbmVUbygwLCByZWN0V2lkdGgpO1xuICogcmVjdFNoYXBlLmxpbmVUbyhyZWN0TGVuZ3RoLCByZWN0V2lkdGgpO1xuICogcmVjdFNoYXBlLmxpbmVUbyhyZWN0TGVuZ3RoLCAwKTtcbiAqIHJlY3RTaGFwZS5saW5lVG8oMCwgMCk7XG4gKlxuICogY29uc3QgcGxhbmUgPSBuZXcgU2hhcGUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHNoYXBlOiByZWN0U2hhcGVcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgU2hhcGUgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBwYXJhbWV0ZXJzXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlNoYXBlI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICBzaGFwZXM6IFtdXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgc2hhcGVzOiBbXVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlNoYXBlI2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogWydzaGFwZXMnXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWydzaGFwZXMnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBTaGFwZS5kZWZhdWx0cywgU2hhcGUuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlNoYXBlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyAocGFyYW1zLmJ1ZmZlciA/IFNoYXBlQnVmZmVyR2VvbWV0cnkgOiBTaGFwZUdlb21ldHJ5KShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5zaGFwZXNcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFNoYXBlXG59O1xuIiwiaW1wb3J0IHtcbiAgTWVzaCxcbiAgU3BoZXJlQnVmZmVyR2VvbWV0cnksXG4gIFNwaGVyZUdlb21ldHJ5XG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBTcGhlcmVcbiAqIEBjYXRlZ29yeSBjb21wb25lbnRzL21lc2hlc1xuICogQGRlc2NyaXB0aW9uIFNwaGVyZSBjbGFzcyBpcyB1c2VkIHRvIGNyZWF0ZSBzcGhlcmUgb2JqZWN0cyBieSBpdHMgcmFkaXVzIHByb3BlcnR5IGFuZCBvdGhlciB2YWx1ZXMgdGhhdCBkZXRlcm1pbmVzIGl0cyBkZXRhbGl0eS5cbiAqIDxici8+PGJyLz5cbiAqIEl0IGlzIHNpbWlsYXIgdG8gVEhSRUUuU3BoZXJlR2VvbWV0cnksIGJ1dCBpdCBhbHNvIGNvbnRhaW5zIGFsbCBgU2hhcGVgIHByb3BlcnRpZXMsIHN1Y2ggYXMgbWF0ZXJpYWwsIG1hc3MgYW5kIHZlY3RvcnMgbGlrZSBwb3NpdGlvbiAocG9zKSBhbmQgcm90YXRpb24gKHJvdCkuXG4gKiA8YnIvPjxici8+XG4gKiBUaGVuIGl0IGNyZWF0ZXMgYW4gYFRocmVlLmpzIG1lc2hgIG9yIGEgYFBoeXNpanMgbWVzaGAsIHRoYXQgaXMgc2ltaWxhciB0byBgVGhyZWUuanMgbWVzaGAsIGJ1dCBpdCBhbHNvIHRha2UgaW50byBjb25zaWRlcmF0aW9uIGNvbGxpc2lvbiBjYWxjdWxhdGlvbnMuXG4gKiBUaGlzIG1lc2ggaXMgYSBjb21iaW5hdGlvbiBvZiBgVGhyZWUuanMgZ2VvbWV0cnlgIGFuZCBgUGh5c2lqcyBtYXRlcmlhbGAgKFRoZSBzYW1lIGFzIGluIHRocmVlLmpzLCBidXQgd2l0aCBmcmljdGlvbiBhbmQgcmVzdGl0dXRpb24pLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNTcGhlcmVHZW9tZXRyeVwiPjwvaWZyYW1lPlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgU3BoZXJlLCBhbmQgYWRkaW5nIGl0IHRvIGFwcDwvY2FwdGlvbj5cbiAqIG5ldyBTcGhlcmUoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogMlxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zaXRpb246IHtcbiAqICAgICB5OiAxMDBcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgU3BoZXJlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5TcGhlcmUjZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHJhZGl1czogMSxcbiAgICogICAgIHdpZHRoU2VnbWVudHM6IDgsXG4gICAqICAgICBoZWlnaHRTZWdtZW50czogNlxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1czogMSxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDgsXG4gICAgICBoZWlnaHRTZWdtZW50czogNlxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlNwaGVyZSNpbnN0cnVjdGlvbnNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ3dpZHRoU2VnbWVudHMnLCAnaGVpZ2h0U2VnbWVudHMnXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogWydyYWRpdXMnLCAnd2lkdGhTZWdtZW50cycsICdoZWlnaHRTZWdtZW50cyddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFNwaGVyZS5kZWZhdWx0cywgU3BoZXJlLmluc3RydWN0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlNwaGVyZVxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IChwYXJhbXMuYnVmZmVyID8gU3BoZXJlQnVmZmVyR2VvbWV0cnkgOiBTcGhlcmVHZW9tZXRyeSkoXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LndpZHRoU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuaGVpZ2h0U2VnbWVudHNcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlb21ldHJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFNwaGVyZVxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFRldHJhaGVkcm9uQnVmZmVyR2VvbWV0cnksXG4gIFRldHJhaGVkcm9uR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFRldHJhaGVkcm9uXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBJbiBnZW9tZXRyeSwgYSB0ZXRyYWhlZHJvbiBpcyBhIHBvbHloZWRyb24gY29tcG9zZWQgb2YgZm91ciB0cmlhbmd1bGFyIGZhY2VzLCBzaXggc3RyYWlnaHQgZWRnZXMsIGFuZCBmb3VyIHZlcnRleCBjb3JuZXJzLlxuICogVGhlIHRldHJhaGVkcm9uIGlzIHRoZSBzaW1wbGVzdCBvZiBhbGwgdGhlIG9yZGluYXJ5IGNvbnZleCBwb2x5aGVkcmEgYW5kIHRoZSBvbmx5IG9uZSB0aGF0IGhhcyBmZXdlciB0aGFuIDUgZmFjZXMuXG4gKiA8YnIvPjxici8+XG4gKiBgVGV0cmFoZWRyb25gIGNyZWF0ZXMgYSBUZXRyYWhlZHJvbiBvYmplY3QgYnkgaXRzIGByYWRpdXNgIGFuZCBgZGV0YWlsYFxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3Mvc2NlbmVzL2dlb21ldHJ5LWJyb3dzZXIuaHRtbCNUZXRyYWhlZHJvbkdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBUZXRyYWhlZHJvbiwgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgVGV0cmFoZWRyb24oe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogMixcbiAqICAgICBkZXRhaWw6IDFcbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeDogMCxcbiAqICAgICB5OiAxMDAsXG4gKiAgICAgejogMFxuICogICB9XG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBUZXRyYWhlZHJvbiBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVGV0cmFoZWRyb24jZGVmYXVsdHNcbiAgICogQHN0YXRpY1xuICAgKiBAZGVmYXVsdCA8cHJlPlxuICAgKiB7XG4gICAqICAgZ2VvbWV0cnk6IHtcbiAgICogICAgIHJhZGl1czogMSxcbiAgICogICAgIGRldGFpbDogMFxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHJhZGl1czogMSxcbiAgICAgIGRldGFpbDogMFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW5zdHJ1Y3Rpb25zXG4gICAqIEBtZW1iZXIge09iamVjdH0gbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRldHJhaGVkcm9uI2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogWydyYWRpdXMnLCAnZGV0YWlsJ11cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5pbnN0cnVjdGlvbnMsXG4gICAgZ2VvbWV0cnk6IFsncmFkaXVzJywgJ2RldGFpbCddXG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFRldHJhaGVkcm9uLmRlZmF1bHRzLCBUZXRyYWhlZHJvbi5pbnN0cnVjdGlvbnMpO1xuXG4gICAgaWYgKHBhcmFtcy5idWlsZCkge1xuICAgICAgdGhpcy5idWlsZChwYXJhbXMpO1xuICAgICAgc3VwZXIud3JhcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGJ1aWxkXG4gICAqIEBkZXNjcmlwdGlvbiBCdWlsZCBsaXZlY3ljbGUgY3JlYXRlcyBhIG1lc2ggdXNpbmcgaW5wdXQgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIENvbXBvbmVudCBwYXJhbWV0ZXJzLlxuICAgKiBAcmV0dXJuIHtUSFJFRS5NZXNofSBCdWlsdCBtZXNoXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVGV0cmFoZWRyb25cbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHRoaXMucGFyYW1zKSB7XG4gICAgY29uc3Qge2dlb21ldHJ5LCBtYXRlcmlhbH0gPSB0aGlzLmFwcGx5QnJpZGdlKHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmJ1aWxkR2VvbWV0cnkocGFyYW1zKSxcbiAgICAgIG1hdGVyaWFsOiBwYXJhbXMubWF0ZXJpYWxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5QnJpZGdlKHttZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpfSkubWVzaDtcbiAgfVxuXG4gIGJ1aWxkR2VvbWV0cnkocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IChwYXJhbXMuYnVmZmVyID8gVGV0cmFoZWRyb25CdWZmZXJHZW9tZXRyeSA6IFRldHJhaGVkcm9uR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5kZXRhaWxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRldHJhaGVkcm9uXG59O1xuIiwiaW1wb3J0IHtcbiAgRm9udCxcbiAgTWVzaCxcbiAgVGV4dEdlb21ldHJ5LFxuICBGb250TG9hZGVyXG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtNZXNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL01lc2hDb21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXh0XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBUZXh0IGNsYXNzIGlzIG1hZGUgZm9yIGNyZWF0aW5nIDNEIHRleHQgb2JqZWN0cy5cbiAqIEBjbGFzc0Rlc2NcbiAqIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzL3NjZW5lcy9nZW9tZXRyeS1icm93c2VyLmh0bWwjVGV4dEdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiA8YnIvPjxici8+XG4gKiBQaHlzaWNzIHRleHQgb2JqZWN0IGNhbiBiZSBjb252ZXggb3IgY29uY2F2ZS4gQnkgZGVmYXVsdCBpdCdzIGNvbnZleCBidXQgeW91IGNhbiBhbHNvIHN3aXRjaCB0byBjb25jYXZlLlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gVGhlIHBhcmFtcy5cbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlLk1lc2hDb21wb25lbnRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNyZWF0aW5nIGEgVGV4dCwgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgVGV4dCh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgdGV4dDogJ2hlbGxvIHdvcmxkJyxcbiAqICAgICBwYXJhbWV0ZXJzOiB7XG4gKiAgICAgICBmb250OiAncGF0aC90by9mb250LnR5cGVmYWNlLmpzJyxcbiAqICAgICAgIHNpemU6IDIwLFxuICogICAgICAgaGVpZ2h0OiA1LFxuICogICAgICAgY3VydmVTZWdtZW50czogNlxuICogICAgIH1cbiAqICAgfSxcbiAqXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqXG4gKiAgIHBvc2l0aW9uOiB7XG4gKiAgICAgeDogLTQwLFxuICogICAgIHk6IDIwLFxuICogICAgIHo6IDBcbiAqICAgfVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuY2xhc3MgVGV4dCBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVGV4dCNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICB0ZXh0OiAnSGVsbG8gV29ybGQhJyxcbiAgICogICBsb2FkZXI6IG5ldyBGb250TG9hZGVyKCksXG4gICAqXG4gICAqICAgcGFyYW1ldGVyczoge1xuICAgKiAgICAgc2l6ZTogMTIsXG4gICAqICAgICBoZWlnaHQ6IDUwLFxuICAgKiAgICAgY3VydmVTZWdtZW50czogMTIsXG4gICAqICAgICBmb250OiBuZXcgRm9udCgpLFxuICAgKiAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICogICAgIGJldmVsVGhpY2tuZXNzOiAxMCxcbiAgICogICAgIGJldmVsU2l6ZTogOFxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIHRleHQ6ICdIZWxsbyBXb3JsZCEnLFxuICAgIGxvYWRlcjogbmV3IEZvbnRMb2FkZXIoKSxcblxuICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgIHNpemU6IDEyLFxuICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgIGN1cnZlU2VnbWVudHM6IDEyLFxuICAgICAgZm9udDogbmV3IEZvbnQoKSxcbiAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICBiZXZlbFRoaWNrbmVzczogMTAsXG4gICAgICBiZXZlbFNpemU6IDhcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBzdXBlcihwYXJhbXMsIFRleHQuZGVmYXVsdHMsIE1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRleHRcbiAgICovXG4gIGJ1aWxkKHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgcGFyYW1zLmxvYWRlci5sb2FkKHBhcmFtcy5wYXJhbWV0ZXJzLmZvbnQsIGZvbnQgPT4ge1xuICAgICAgICBwYXJhbXMucGFyYW1ldGVycy5mb250ID0gZm9udDtcblxuICAgICAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGV4dEdlb21ldHJ5KFxuICAgICAgICAgICAgcGFyYW1zLnRleHQsXG4gICAgICAgICAgICBwYXJhbXMucGFyYW1ldGVyc1xuICAgICAgICAgICksXG5cbiAgICAgICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICAgICAgICBtZXNoOiBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXG4gICAgICAgICAgfSkubWVzaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdXBlci53YWl0KHByb21pc2UpO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dFxufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFRvcnVzR2VvbWV0cnlcbn0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQge01lc2hDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvcmUvTWVzaENvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIFRvcnVzXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBUb3J1cyBjbGFzcyBtYWtlcyBhIHRvcnVzIGZpZ3VyZS4gQSBkb251dCBpcyBhIHRvcnVzLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3MvaW5kZXguaHRtbCNhcGkvZ2VvbWV0cmllcy9Ub3J1c0dlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBUb3J1cywgYW5kIGFkZGluZyBpdCB0byBhcHA8L2NhcHRpb24+XG4gKiBuZXcgVG9ydXMoe1xuICogICBnZW9tZXRyeToge1xuICogICAgIHJhZGl1czogNSxcbiAqICAgICB0dWJlOiAyXG4gKiAgIH0sXG4gKlxuICogICBtYXRlcmlhbDogbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAqICAgICBjb2xvcjogMHhmZmZmZmZcbiAqICAgfSksXG4gKlxuICogICBwb3NpdGlvbjoge1xuICogICAgIHk6IDM1XG4gKiAgIH1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFRvcnVzIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Ub3J1cyNkZWZhdWx0c1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeToge1xuICAgKiAgICAgcmFkaXVzOiAxMDAsXG4gICAqICAgICB0dWJlOiA0MCxcbiAgICogICAgIHJhZGlhbFNlZ21lbnRzOiA4LFxuICAgKiAgICAgdHVidWxhclNlZ21lbnRzOiA2LFxuICAgKiAgICAgYXJjOiBNYXRoLlBJICogMlxuICAgKiAgIH1cbiAgICogfVxuICAgKiA8L3ByZT5cbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50LmRlZmF1bHRzLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICByYWRpdXM6IDEwMCxcbiAgICAgIHR1YmU6IDQwLFxuICAgICAgcmFkaWFsU2VnbWVudHM6IDgsXG4gICAgICB0dWJ1bGFyU2VnbWVudHM6IDYsXG4gICAgICBhcmM6IE1hdGguUEkgKiAyXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVG9ydXMjaW5zdHJ1Y3Rpb25zXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiBbXG4gICAqICAgICAncmFkaXVzJyxcbiAgICogICAgICd0dWJlJyxcbiAgICogICAgICdyYWRpYWxTZWdtZW50cycsXG4gICAqICAgICAndHVidWxhclNlZ21lbnRzJyxcbiAgICogICAgICdhcmMnXG4gICAqICAgXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogW1xuICAgICAgJ3JhZGl1cycsXG4gICAgICAndHViZScsXG4gICAgICAncmFkaWFsU2VnbWVudHMnLFxuICAgICAgJ3R1YnVsYXJTZWdtZW50cycsXG4gICAgICAnYXJjJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgVG9ydXMuZGVmYXVsdHMsIFRvcnVzLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5Ub3J1c1xuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgVG9ydXNHZW9tZXRyeShcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudHViZSxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpYWxTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50dWJ1bGFyU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuYXJjXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUb3J1c1xufTtcbiIsImltcG9ydCB7XG4gIE1lc2gsXG4gIFRvcnVzS25vdEJ1ZmZlckdlb21ldHJ5LFxuICBUb3J1c0tub3RHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgVG9ydXNrbm90XG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBUb3J1c2tub3QgY2xhc3MgbWFrZXMgYSB0b3J1c2tub3QgZmlndXJlLiBJdCdzIGxpa2UgYSBjcm9va2VkIGRvbnV0LCB2ZXJ5IGNyb29rZWQuXG4gKiBAY2xhc3NEZXNjXG4gKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy9zY2VuZXMvZ2VvbWV0cnktYnJvd3Nlci5odG1sI1RvcnVzS25vdEdlb21ldHJ5XCI+PC9pZnJhbWU+XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBUaGUgcGFyYW1zLlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYSBUb3J1c2tub3QsIGFuZCBhZGRpbmcgaXQgdG8gYXBwPC9jYXB0aW9uPlxuICogbmV3IFRvcnVza25vdCh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcmFkaXVzOjUsXG4gKiAgICAgdHViZTogMlxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pLFxuICpcbiAqICAgcG9zOiB7XG4gKiAgICAgeTogMTAwXG4gKiAgIH1cbiAqIH0pLmFkZFRvKGFwcCk7XG4gKi9cbmNsYXNzIFRvcnVza25vdCBleHRlbmRzIE1lc2hDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVG9ydXNrbm90I2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICByYWRpdXM6IDEwMCxcbiAgICogICAgIHR1YmU6IDQwLFxuICAgKiAgICAgcmFkaWFsU2VnbWVudHM6IDY0LFxuICAgKiAgICAgdHVidWxhclNlZ21lbnRzOiA4LFxuICAgKiAgICAgcDogMixcbiAgICogICAgIHE6IDNcbiAgICogICB9XG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgLi4uTWVzaENvbXBvbmVudC5kZWZhdWx0cyxcbiAgICBnZW9tZXRyeToge1xuICAgICAgcmFkaXVzOiAxMDAsXG4gICAgICB0dWJlOiA0MCxcbiAgICAgIHJhZGlhbFNlZ21lbnRzOiA2NCxcbiAgICAgIHR1YnVsYXJTZWdtZW50czogOCxcbiAgICAgIHA6IDIsXG4gICAgICBxOiAzXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnN0cnVjdGlvbnNcbiAgICogQG1lbWJlciB7T2JqZWN0fSBtb2R1bGU6Y29tcG9uZW50cy9tZXNoZXMuVG9ydXNrbm90I2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogW1xuICAgKiAgICAgJ3JhZGl1cycsXG4gICAqICAgICAndHViZScsXG4gICAqICAgICAncmFkaWFsU2VnbWVudHMnLFxuICAgKiAgICAgJ3R1YnVsYXJTZWdtZW50cycsXG4gICAqICAgICAncCcsXG4gICAqICAgICAncSdcbiAgICogICBdXG4gICAqIH1cbiAgICogPC9wcmU+XG4gICAqL1xuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuaW5zdHJ1Y3Rpb25zLFxuICAgIGdlb21ldHJ5OiBbXG4gICAgICAncmFkaXVzJyxcbiAgICAgICd0dWJlJyxcbiAgICAgICdyYWRpYWxTZWdtZW50cycsXG4gICAgICAndHVidWxhclNlZ21lbnRzJyxcbiAgICAgICdwJyxcbiAgICAgICdxJ1xuICAgIF1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcywgVG9ydXNrbm90LmRlZmF1bHRzLCBUb3J1c2tub3QuaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGlmIChwYXJhbXMuYnVpbGQpIHtcbiAgICAgIHRoaXMuYnVpbGQocGFyYW1zKTtcbiAgICAgIHN1cGVyLndyYXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBidWlsZFxuICAgKiBAZGVzY3JpcHRpb24gQnVpbGQgbGl2ZWN5Y2xlIGNyZWF0ZXMgYSBtZXNoIHVzaW5nIGlucHV0IHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBDb21wb25lbnQgcGFyYW1ldGVycy5cbiAgICogQHJldHVybiB7VEhSRUUuTWVzaH0gQnVpbHQgbWVzaFxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzLlRvcnVza25vdFxuICAgKi9cbiAgYnVpbGQocGFyYW1zID0gdGhpcy5wYXJhbXMpIHtcbiAgICBjb25zdCB7Z2VvbWV0cnksIG1hdGVyaWFsfSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuYnVpbGRHZW9tZXRyeShwYXJhbXMpLFxuICAgICAgbWF0ZXJpYWw6IHBhcmFtcy5tYXRlcmlhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlCcmlkZ2Uoe21lc2g6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCl9KS5tZXNoO1xuICB9XG5cbiAgYnVpbGRHZW9tZXRyeShwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IEdDb25zdHJ1Y3QgPSBwYXJhbXMuYnVmZmVyID8gVG9ydXNLbm90QnVmZmVyR2VvbWV0cnkgOiBUb3J1c0tub3RHZW9tZXRyeTtcblxuICAgIHJldHVybiBuZXcgR0NvbnN0cnVjdChcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpdXMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkudHViZSxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5yYWRpYWxTZWdtZW50cyxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS50dWJ1bGFyU2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucCxcbiAgICAgIHBhcmFtcy5nZW9tZXRyeS5xXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUb3J1c2tub3Rcbn07XG4iLCJpbXBvcnQge1xuICBNZXNoLFxuICBMaW5lQ3VydmUzLFxuICBWZWN0b3IzLFxuICBUdWJlQnVmZmVyR2VvbWV0cnksXG4gIFR1YmVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgVHViZVxuICogQGNhdGVnb3J5IGNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZGVzY3JpcHRpb24gVHViZSBjbGFzcyBtYWtlcyBhIHR1YmUgdGhhdCBleHRydWRlcyBhbG9uZyBhIDNkIGN1cnZlLlxuICogQGNsYXNzRGVzY1xuICogPGlmcmFtZSBzcmM9XCJodHRwczovL3RocmVlanMub3JnL2RvY3MvaW5kZXguaHRtbCNhcGkvZ2VvbWV0cmllcy9UdWJlR2VvbWV0cnlcIj48L2lmcmFtZT5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIFRoZSBwYXJhbXMuXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS5NZXNoQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHMvbWVzaGVzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5DcmVhdGluZyBhIFR1YmUgZnJvbSBhIHRocmVlLmpzIEN1cnZlLCBhbmQgYWRkaW5nIGl0IHRvIGFwcDwvY2FwdGlvbj5cbiAqIGNvbnN0IEN1c3RvbVNpbkN1cnZlID0gVEhSRUUuQ3VydmUuY3JlYXRlKFxuICogICBmdW5jdGlvbiAoc2NhbGUpIHsgLy8gY3VzdG9tIGN1cnZlIGNvbnN0cnVjdG9yXG4gKiAgICAgdGhpcy5zY2FsZSA9IChzY2FsZSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBzY2FsZTtcbiAqICAgfSxcbiAqXG4gKiAgIGZ1bmN0aW9uICh0KSB7IC8vIGdldFBvaW50OiB0IGlzIGJldHdlZW4gMC0xXG4gKiAgICAgY29uc3QgdHggPSB0ICogMyAtIDEuNSxcbiAqICAgICB0eSA9IE1hdGguc2luKCAyICogTWF0aC5QSSAqIHQgKSxcbiAqICAgICB0eiA9IDA7XG4gKlxuICogICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh0eCwgdHksIHR6KS5tdWx0aXBseVNjYWxhcih0aGlzLnNjYWxlKTtcbiAqICAgfVxuICogKTtcbiAqXG4gKiBjb25zdCBwYXRoID0gbmV3IEN1c3RvbVNpbkN1cnZlKDEwKTtcbiAqXG4gKiBuZXcgVHViZSh7XG4gKiAgIGdlb21ldHJ5OiB7XG4gKiAgICAgcGF0aDogcGF0aFxuICogICB9LFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gKiAgICAgY29sb3I6IDB4ZmZmZmZmXG4gKiAgIH0pXG4gKiB9KS5hZGRUbyhhcHApO1xuICovXG5jbGFzcyBUdWJlIGV4dGVuZHMgTWVzaENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVyc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5UdWJlI2RlZmF1bHRzXG4gICAqIEBzdGF0aWNcbiAgICogQGRlZmF1bHQgPHByZT5cbiAgICoge1xuICAgKiAgIGdlb21ldHJ5OiB7XG4gICAqICAgICBwYXRoOiBuZXcgVEhSRUUuTGluZUN1cnZlMyhuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMSkpLFxuICAgKiAgICAgc2VnbWVudHM6IDIwLFxuICAgKiAgICAgcmFkaXVzOiAyLFxuICAgKiAgICAgcmFkaXVzU2VnbWVudHM6IDgsXG4gICAqICAgICBjbG9zZWQ6IGZhbHNlXG4gICAqICAgfVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRzID0ge1xuICAgIC4uLk1lc2hDb21wb25lbnQuZGVmYXVsdHMsXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHBhdGg6IG5ldyBMaW5lQ3VydmUzKG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAxKSksXG4gICAgICBzZWdtZW50czogMjAsXG4gICAgICByYWRpdXM6IDIsXG4gICAgICByYWRpdXNTZWdtZW50czogOCxcbiAgICAgIGNsb3NlZDogZmFsc2VcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc3RydWN0aW9uc1xuICAgKiBAbWVtYmVyIHtPYmplY3R9IG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5UdWJlI2luc3RydWN0aW9uc1xuICAgKiBAc3RhdGljXG4gICAqIEBkZWZhdWx0IDxwcmU+XG4gICAqIHtcbiAgICogICBnZW9tZXRyeTogW1xuICAgKiAgICAgJ3BhdGgnLFxuICAgKiAgICAgJ3NlZ21lbnRzJyxcbiAgICogICAgICdyYWRpdXMnLFxuICAgKiAgICAgJ3JhZGl1c1NlZ21lbnRzJyxcbiAgICogICAgICdjbG9zZWQnXG4gICAqICAgXVxuICAgKiB9XG4gICAqIDwvcHJlPlxuICAgKi9cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IHtcbiAgICAuLi5NZXNoQ29tcG9uZW50Lmluc3RydWN0aW9ucyxcbiAgICBnZW9tZXRyeTogW1xuICAgICAgJ3BhdGgnLFxuICAgICAgJ3NlZ21lbnRzJyxcbiAgICAgICdyYWRpdXMnLFxuICAgICAgJ3JhZGl1c1NlZ21lbnRzJyxcbiAgICAgICdjbG9zZWQnXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgc3VwZXIocGFyYW1zLCBUdWJlLmRlZmF1bHRzLCBUdWJlLmluc3RydWN0aW9ucyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1aWxkKSB7XG4gICAgICB0aGlzLmJ1aWxkKHBhcmFtcyk7XG4gICAgICBzdXBlci53cmFwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYnVpbGRcbiAgICogQGRlc2NyaXB0aW9uIEJ1aWxkIGxpdmVjeWNsZSBjcmVhdGVzIGEgbWVzaCB1c2luZyBpbnB1dCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgQ29tcG9uZW50IHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm4ge1RIUkVFLk1lc2h9IEJ1aWx0IG1lc2hcbiAgICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlcy5UdWJlXG4gICAqL1xuICBidWlsZChwYXJhbXMgPSB0aGlzLnBhcmFtcykge1xuICAgIGNvbnN0IHtnZW9tZXRyeSwgbWF0ZXJpYWx9ID0gdGhpcy5hcHBseUJyaWRnZSh7XG4gICAgICBnZW9tZXRyeTogdGhpcy5idWlsZEdlb21ldHJ5KHBhcmFtcyksXG4gICAgICBtYXRlcmlhbDogcGFyYW1zLm1hdGVyaWFsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseUJyaWRnZSh7bWVzaDogbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKX0pLm1lc2g7XG4gIH1cblxuICBidWlsZEdlb21ldHJ5KHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgKHBhcmFtcy5idWZmZXIgPyBUdWJlQnVmZmVyR2VvbWV0cnkgOiBUdWJlR2VvbWV0cnkpKFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnBhdGgsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkuc2VnbWVudHMsXG4gICAgICBwYXJhbXMuZ2VvbWV0cnkucmFkaXVzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LnJhZGl1c1NlZ21lbnRzLFxuICAgICAgcGFyYW1zLmdlb21ldHJ5LmNsb3NlZFxuICAgICk7XG5cbiAgICByZXR1cm4gZ2VvbWV0cnk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVHViZVxufTtcbiIsImltcG9ydCB7T2JqZWN0M0R9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7TWVzaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29yZS9NZXNoQ29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb3JlL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIEdyb3VwXG4gKiBAY2F0ZWdvcnkgY29tcG9uZW50cy9tZXNoZXNcbiAqIEBkZXNjcmlwdGlvbiBTb21ldGltZXMgeW91IG5lZWQgdG8gbWFrZSBncm91cHMgb2Ygb2JqZWN0cyAoaXQncyBub3QgY29udmVuaWVudGx5IHRvIGFwcGx5IHRyYW5zZm9ybXMgdG8gZWFjaCBvYmplY3Qgd2hlbiBjYW4gbWFrZSBqdXN0IG9uZSB0byBhIGdyb3VwKS48YnIvPlxuICogSW4gVGhyZWUuanMgeW91IG1ha2UgaXQgdXNpbmcgYFRIUkVFLk9iamVjdDNEYCBhbmQgaXQncyBjaGlsZHJlbi4gPGJyLz48YnIvPlxuICogSW4gd2hzLmpzIHdlIGhhdmUgYEdyb3VwYFxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUuTWVzaENvbXBvbmVudFxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzL21lc2hlc1xuICogQGV4YW1wbGUgPGNhcHRpb24+QXBwcm9hY2ggMiAtIEFkZGluZyBvYmplY3RzIHRvIGFuIGVtcHR5IGdyb3VwPC9jYXB0aW9uPlxuICogY29uc3Qgc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuICogY29uc3QgYm94ID0gbmV3IEJveCgpO1xuICogY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAqXG4gKiBzcGhlcmUuYWRkVG8oZ3JvdXApO1xuICogYm94LmFkZFRvKGdyb3VwKTtcbiogQGV4YW1wbGUgPGNhcHRpb24+QXBwcm9hY2ggMiAtIE1ha2luZyBhIGdyb3VwIGZyb20gb2JqZWN0czwvY2FwdGlvbj5cbiAqIGNvbnN0IHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcbiAqIGNvbnN0IGJveCA9IG5ldyBCb3goKTtcbiAqIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKGJveCwgc3BoZXJlKTtcbiAqIC8vIE9SOiBjb25zdCBncm91cCA9IG5ldyBHcm91cChbYm94LCBzcGhlcmVdKTtcbiAqL1xuY2xhc3MgR3JvdXAgZXh0ZW5kcyBNZXNoQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4ub2JqZWN0cykge1xuICAgIHN1cGVyKHt9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gb2JqZWN0c1tpXTtcblxuICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudCkgb2JqLmFkZFRvKHRoaXMpO1xuICAgICAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgT2JqZWN0M0QpIHRoaXMubmF0aXZlLmFkZChvYmopO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0M0QoKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBHcm91cFxufTtcbiIsIi8qKiBAbW9kdWxlIGNvbXBvbmVudHMvbWVzaGVzICovXG5leHBvcnQgKiBmcm9tICcuL0JveCc7XG5leHBvcnQgKiBmcm9tICcuL0NpcmNsZSc7XG5leHBvcnQgKiBmcm9tICcuL0NvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9DeWxpbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL0RvZGVjYWhlZHJvbic7XG5leHBvcnQgKiBmcm9tICcuL0V4dHJ1ZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9JY29zYWhlZHJvbic7XG5leHBvcnQgKiBmcm9tICcuL0xhdGhlJztcbmV4cG9ydCAqIGZyb20gJy4vTGluZSc7XG5leHBvcnQgKiBmcm9tICcuL0ltcG9ydGVyJztcbmV4cG9ydCAqIGZyb20gJy4vT2N0YWhlZHJvbic7XG5leHBvcnQgKiBmcm9tICcuL1BhcmFtZXRyaWMnO1xuZXhwb3J0ICogZnJvbSAnLi9QbGFuZSc7XG5leHBvcnQgKiBmcm9tICcuL1BvbHloZWRyb24nO1xuZXhwb3J0ICogZnJvbSAnLi9SaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vU2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9TcGhlcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9UZXRyYWhlZHJvbic7XG5leHBvcnQgKiBmcm9tICcuL1RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9Ub3J1cyc7XG5leHBvcnQgKiBmcm9tICcuL1RvcnVza25vdCc7XG5leHBvcnQgKiBmcm9tICcuL1R1YmUnO1xuZXhwb3J0ICogZnJvbSAnLi9Hcm91cCc7XG4iLCIvKipcbiAqIEBjbGFzcyBFbGVtZW50TW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGFpbmVyPWRvY3VtZW50LmJvZHldIGNvbnRhaW5lciBpcyB0aGUgRE9NIG9iamVjdCB0byB3aGljaCBhcHBsaWNhdGlvbidzIGNhbnZhcyB3aWxsIGJlIGFkZGVkIHRvLlxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYW4gZWxlbWVudCBtb2R1bGUsIHBhc3NpbmcgaXQgdG8gdGhlIEFwcDwvY2FwdGlvbj5cbiAqIG5ldyBBcHAoW1xuICogICBuZXcgRWxlbWVudE1vZHVsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIEVsZW1lbnRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWluZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignRWxlbWVudE1vZHVsZSBub3cgYWNjZXB0cyBvbmx5IGFyZ3VtZW50IHdoaWNoIGlzIGEgRE9NIG9iamVjdCwgbm90IGEgcGFyYW1zIG9iamVjdC4nKTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyLmNvbnRhaW5lcjtcbiAgICB9IGVsc2UgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNyZWF0ZUVsZW1lbnRcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgY2FudmFzIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuUmVzaXplTW9kdWxlXG4gICAqL1xuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnd2hzLWFwcCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gJ2luaGVyaXQnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnaW5oZXJpdCc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuXG4gIG1hbmFnZXIobWFuYWdlcikge1xuICAgIG1hbmFnZXIuc2V0KCdlbGVtZW50JywgdGhpcy5lbGVtZW50KTtcbiAgICBtYW5hZ2VyLnNldCgnY29udGFpbmVyJywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBzZWxmLmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBXZWJHTFJlbmRlcmVyLFxuICBWZWN0b3IyXG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHtMb29wfSBmcm9tICcuLi8uLi9jb3JlL0xvb3AnO1xuXG4vKipcbiAqIEBjbGFzcyBSZW5kZXJpbmdNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL2FwcFxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvYXBwXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj4gQ3JlYXRpbmcgYSByZW5kZXJpbmcgbW9kdWxlIGFuZCBwYXNzaW5nIGl0IHRvIEFwcCdzIG1vZHVsZXM8L2NhcHRpb24+XG4gKiBuZXcgQXBwKFtcbiAqICAgbmV3IEVsZW1lbnRNb2R1bGUoKSxcbiAqICAgbmV3IFNjZW5lTW9kdWxlKCksXG4gKiAgIG5ldyBDYW1lcmFNb2R1bGUoe1xuICogICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCA2LCAxOCksXG4gKiAgICAgZmFyOiAxMDAwMFxuICogICB9KSxcbiAqICAgbmV3IFJlbmRlcmluZ01vZHVsZSh7XG4gKiAgICAgYmdDb2xvcjogMHgxNjIxMjksXG4gKlxuICogICAgIHJlbmRlcmVyOiB7XG4gKiAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gKiAgICAgICBzaGFkb3dtYXA6IHtcbiAqICAgICAgICAgdHlwZTogVEhSRUUuUENGU29mdFNoYWRvd01hcFxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfSwge3NoYWRvdzogdHJ1ZX0pXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbmRlcmluZ01vZHVsZSB7XG4gIHN0YXRpYyBhZGRpdGlvbmFsID0ge1xuICAgIHNoYWRvdyhyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZWQgPSB0cnVlO1xuXG4gIGRlZmVyID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30sIHtzaGFkb3c6IGlzU2hhZG93fSA9IHtzaGFkb3c6IGZhbHNlfSkge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblxuICAgICAgcmVzb2x1dGlvbjogbmV3IFZlY3RvcjIoMSwgMSksXG4gICAgICBwaXhlbFJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxcblxuICAgICAgYmdDb2xvcjogMHgwMDAwMDAsXG4gICAgICBiZ09wYWNpdHk6IDEsXG5cbiAgICAgIHJlbmRlcmVyOiB7fVxuICAgIH0sIHBhcmFtcyk7XG5cbiAgICBjb25zdCB7XG4gICAgICBiZ0NvbG9yLFxuICAgICAgYmdPcGFjaXR5LFxuICAgICAgcmVuZGVyZXIsXG4gICAgICBwaXhlbFJhdGlvLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByZXNvbHV0aW9uXG4gICAgfSA9IHRoaXMucGFyYW1zO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBXZWJHTFJlbmRlcmVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLmVmZmVjdHMgPSBbXTtcbiAgICB0aGlzLmFwcGx5QWRkaXRpb25hbCgnc2hhZG93JywgaXNTaGFkb3cpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKFxuICAgICAgYmdDb2xvcixcbiAgICAgIGJnT3BhY2l0eVxuICAgICk7XG5cbiAgICBpZiAocGl4ZWxSYXRpbykgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHBpeGVsUmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTaXplKFxuICAgICAgTnVtYmVyKHdpZHRoICogcmVzb2x1dGlvbi54KS50b0ZpeGVkKCksXG4gICAgICBOdW1iZXIoaGVpZ2h0ICogcmVzb2x1dGlvbi55KS50b0ZpeGVkKClcbiAgICApO1xuICB9XG5cbiAgYXBwbHlBZGRpdGlvbmFsKG5hbWUsIGlzQXBwbGllZCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpc0FwcGxpZWQpIHJldHVybjtcbiAgICBSZW5kZXJpbmdNb2R1bGUuYWRkaXRpb25hbFtuYW1lXS5hcHBseSh0aGlzLCBbdGhpcy5yZW5kZXJlcl0pO1xuICB9XG5cbiAgaW50ZWdyYXRlUmVuZGVyZXIoZWxlbWVudCwgc2NlbmUsIGNhbWVyYSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLnJlbmRlckxvb3AgPSBuZXcgTG9vcCgoKSA9PiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSkpO1xuICAgIHRoaXMuYXR0YWNoVG9DYW52YXMoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMb29wO1xuICB9XG5cbiAgZWZmZWN0KGVmZmVjdCwgY2IpIHtcbiAgICB0aGlzLmRlZmVyLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJMb29wLnN0b3AoKTtcblxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMucmVuZGVyZXIuZ2V0U2l6ZSgpO1xuICAgICAgZWZmZWN0LnNldFNpemUoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuXG4gICAgICBjb25zdCBsb29wID0gbmV3IExvb3AoY2IgPyBjYiA6ICgpID0+IHtcbiAgICAgICAgZWZmZWN0LnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lZmZlY3RzLnB1c2gobG9vcCk7XG4gICAgICBpZiAodGhpcy5lbmFibGVkKSBsb29wLnN0YXJ0KHRoaXMuYXBwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldFNpemVcbiAgICogQGRlc2NyaXB0aW9uIFVwZGF0ZSByZW5kZXIgdGFyZ2V0IHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuUmVuZGVyaW5nTW9kdWxlXG4gICAqL1xuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgYXR0YWNoVG9DYW52YXMoZWxlbWVudCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcblxuICAgIC8vIGF0dGFjaCB0byBuZXcgcGFyZW50IHdvcmxkIGRvbVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJMb29wLnN0b3AoKTtcbiAgICB0aGlzLmVmZmVjdHMuZm9yRWFjaChsb29wID0+IGxvb3Auc3RvcCgpKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5yZW5kZXJMb29wLnN0YXJ0KCk7XG4gICAgdGhpcy5lZmZlY3RzLmZvckVhY2gobG9vcCA9PiBsb29wLnN0YXJ0KCkpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5kZWZpbmUoJ3JlbmRlcmluZycpO1xuICAgIG1hbmFnZXIuc2V0KCdyZW5kZXJlcicsIHRoaXMucmVuZGVyZXIpO1xuXG4gICAgdGhpcy5hcHAgPSBtYW5hZ2VyLmhhbmRsZXI7XG5cbiAgICB0aGlzLnJlbmRlckxvb3AgPSB0aGlzLmludGVncmF0ZVJlbmRlcmVyKFxuICAgICAgbWFuYWdlci5nZXQoJ2VsZW1lbnQnKSxcbiAgICAgIG1hbmFnZXIuZ2V0KCdzY2VuZScpLFxuICAgICAgbWFuYWdlci5nZXQoJ2NhbWVyYScpLm5hdGl2ZVxuICAgICk7XG5cbiAgICBtYW5hZ2VyLnVwZGF0ZSh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hdHRhY2hUb0NhbnZhcyhlbGVtZW50KTtcbiAgICAgIH0sXG4gICAgICBzY2VuZTogc2NlbmUgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICB9LFxuICAgICAgY2FtZXJhOiBjYW1lcmEgPT4ge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYS5uYXRpdmU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc29sdmUoKTtcbiAgfVxuXG4gIGludGVncmF0ZShzZWxmKSB7XG4gICAgc2VsZi5yZW5kZXJMb29wLnN0YXJ0KHRoaXMpO1xuICAgIHNlbGYuZWZmZWN0cy5mb3JFYWNoKGxvb3AgPT4gbG9vcC5zdGFydCh0aGlzKSk7XG4gIH1cblxuICBkaXNwb3NlKHNlbGYpIHtcbiAgICBzZWxmLnJlbmRlckxvb3Auc3RvcCh0aGlzKTtcbiAgICBzZWxmLmVmZmVjdHMuZm9yRWFjaChsb29wID0+IGxvb3Auc3RvcCh0aGlzKSk7XG4gICAgc2VsZi5yZW5kZXJlci5mb3JjZUNvbnRleHRMb3NzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNjZW5lXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3MgU2NlbmVNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL2FwcFxuICogQHBhcmFtIHtCb29sZWFufSBbd2lsbFNjZW5lQmVSZXBsYWNlZD1mYWxzZV0gd2lsbFNjZW5lQmVSZXBsYWNlZCBzaG91bGQgYmUgdHJ1ZSBvbmx5IGlmIHlvdSBhcmUgZ29pbmcgdG8gb3ZlcndyaXRlIHNjZW5lIGRlcGVuZGVuY3kgZXZlbiB3aXRob3V0IHRoZSB1c2Ugb2YgZGVmYXVsdCBvbmUuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvYXBwXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2VuZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpbGxTY2VuZUJlUmVwbGFjZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuc2NlbmUgPSB3aWxsU2NlbmVCZVJlcGxhY2VkID8gbnVsbCA6IG5ldyBTY2VuZSgpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5zZXQoJ3NjZW5lJywgdGhpcy5zY2VuZSk7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgb2JqZWN0LnBhcmVudCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG9iamVjdC5kZWZlcigoKSA9PiB7XG4gICAgICAgICAgY29uc3Qge25hdGl2ZX0gPSBvYmplY3Q7XG4gICAgICAgICAgaWYgKCFuYXRpdmUpIHJlamVjdCgpO1xuXG4gICAgICAgICAgY29uc3QgYWRkUHJvbWlzZSA9IHRoaXMuYXBwbHlCcmlkZ2Uoe29uQWRkOiBvYmplY3R9KS5vbkFkZDtcblxuICAgICAgICAgIGNvbnN0IHJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zY2VuZS5hZGQobmF0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChvYmplY3QpO1xuXG4gICAgICAgICAgICByZXNvbHZlKG9iamVjdCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChhZGRQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIGFkZFByb21pc2UudGhlbihyZXNvbHZlcik7XG4gICAgICAgICAgZWxzZSByZXNvbHZlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIG9iamVjdC5wYXJlbnQgPSBudWxsO1xuICAgICAgc2VsZi5zY2VuZS5yZW1vdmUob2JqZWN0Lm5hdGl2ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0U2NlbmUgPSBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgIHNlbGYuc2NlbmUgPSBzY2VuZTtcbiAgICAgIHRoaXMubWFuYWdlci5zZXQoJ3NjZW5lJywgc2NlbmUpO1xuICAgIH07XG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7YWRkUmVzaXplTGlzdGVuZXJ9IGZyb20gJ2RldGVjdC1lbGVtZW50LXJlc2l6ZSc7XG5cbi8qKlxuICogQGNsYXNzIFJlc2l6ZU1vZHVsZVxuICogQGNhdGVnb3J5IG1vZHVsZXMvYXBwXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17YXV0bzogdHJ1ZX1dIC0gSWYgYXV0byBpcyBzZXQgdG8gdHJ1ZSAtIHJlc2l6ZSB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIGNvbnRhaW5lciByZXNpemVzXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvYXBwXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNpemVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhdXRvOiB0cnVlXG4gICAgfSwgcGFyYW1zKTtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gW3RoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2V0U2l6ZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgcHJvdmlkZWQgd2lkdGggJiBoZWlnaHQgdG8gdGhlIHJlbmRlcmVyIG9iamVjdC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFt3aWR0aD0xXSAtIFRoZSBwcm9taXNlIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIGEgcXVldWUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaGVpZ2h0PTFdIC0gdGhhdCBpcyByZXNvbHZlZCB3aGVuIGFsbCBwcm9taXNlcyBjb21wbGV0ZWQuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuUmVzaXplTW9kdWxlXG4gICAqL1xuICBzZXRTaXplKHdpZHRoID0gMSwgaGVpZ2h0ID0gMSkge1xuICAgIHRoaXMuY2FtZXJhLm5hdGl2ZS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS5uYXRpdmUudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyaW5nKSB0aGlzLnJlbmRlcmluZy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdHJpZ2dlclxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFRyaWdnZXJzIHJlc2l6ZSB3aGVuIGNhbGxlZC4gd2lkdGggJiBoZWlnaHQgYXJlIGRldGVybWluZWQgYXV0b21hdGljYWxseVxuICAgKiBUaGlzIGludm9rZXMgZWFjaCBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IHdpZHRoIGFuZCBoZWlnaHQgYXMgcGFyYW1zXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuUmVzaXplTW9kdWxlXG4gICAqL1xuICB0cmlnZ2VyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBvZmZzZXRXaWR0aCxcbiAgICAgICAgb2Zmc2V0SGVpZ2h0XG4gICAgICB9LFxuICAgICAgcmVzb2x1dGlvblxuICAgIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgd2lkdGggPSBOdW1iZXIob2Zmc2V0V2lkdGggKiByZXNvbHV0aW9uLngpLnRvRml4ZWQoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIob2Zmc2V0SGVpZ2h0ICogcmVzb2x1dGlvbi55KS50b0ZpeGVkKCk7XG5cbiAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgIGNiKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWRkQXV0b3Jlc2l6ZVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgbW9kdWxlIHRvIGF1dG9yZXNpemUsIHRoaXMgYWRkcyBhbiBldmVudCBsaXN0ZW5lIG9uIHdpbmRvdyByZXNpemUgdG8gdHJpZ2dlciB0aGUgcmVzaXplXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuUmVzaXplTW9kdWxlXG4gICAqL1xuICBhZGRBdXRvcmVzaXplKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy5hdXRvKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy50cmlnZ2VyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgYWRkQ2FsbGJhY2tcbiAgICogQGluc3RhbmNlXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgY2FsbCBiYWNrIGZ1bmN0aW9uIHRvIHRoZSBleGlzdGluZyBjYWxsYmFja3MgbGlzdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBhZGRcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5SZXNpemVNb2R1bGVcbiAgICovXG4gIGFkZENhbGxiYWNrKGZ1bmMpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGZ1bmMpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5kZWZpbmUoJ3Jlc2l6ZScpO1xuXG4gICAgdGhpcy5yZW5kZXJpbmcgPSBtYW5hZ2VyLmdldCgncmVuZGVyZXInKTtcbiAgICB0aGlzLmNhbWVyYSA9IG1hbmFnZXIuZ2V0KCdjYW1lcmEnKTtcblxuICAgIHRoaXMuZ2V0UmVzb2x1dGlvbiA9ICgpID0+IG1hbmFnZXIudXNlKCdyZW5kZXJpbmcnKS5wYXJhbXMucmVzb2x1dGlvbjtcbiAgICB0aGlzLmdldENvbnRhaW5lciA9ICgpID0+IG1hbmFnZXIuZ2V0KCdjb250YWluZXInKTtcblxuICAgIHRoaXMuYWRkQXV0b3Jlc2l6ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRQcmV2aW91c0x1bTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0Q3VycmVudEx1bTtcXHJcXG51bmlmb3JtIGZsb2F0IG1pbkx1bWluYW5jZTtcXHJcXG51bmlmb3JtIGZsb2F0IGRlbHRhO1xcclxcbnVuaWZvcm0gZmxvYXQgdGF1O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdGZsb2F0IHByZXZpb3VzTHVtID0gdGV4dHVyZTJEKHRQcmV2aW91c0x1bSwgdlV2LCBNSVBfTEVWRUxfMVgxKS5yO1xcclxcblxcdGZsb2F0IGN1cnJlbnRMdW0gPSB0ZXh0dXJlMkQodEN1cnJlbnRMdW0sIHZVdiwgTUlQX0xFVkVMXzFYMSkucjtcXHJcXG5cXHJcXG5cXHRwcmV2aW91c0x1bSA9IG1heChtaW5MdW1pbmFuY2UsIHByZXZpb3VzTHVtKTtcXHJcXG5cXHRjdXJyZW50THVtID0gbWF4KG1pbkx1bWluYW5jZSwgY3VycmVudEx1bSk7XFxyXFxuXFxyXFxuXFx0Ly8gQWRhcHQgdGhlIGx1bWluYW5jZSB1c2luZyBQYXR0YW5haWsncyB0ZWNobmlxdWUuXFxyXFxuXFx0ZmxvYXQgYWRhcHRlZEx1bSA9IHByZXZpb3VzTHVtICsgKGN1cnJlbnRMdW0gLSBwcmV2aW91c0x1bSkgKiAoMS4wIC0gZXhwKC1kZWx0YSAqIHRhdSkpO1xcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvci5yID0gYWRhcHRlZEx1bTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQW4gYWRhcHRpdmUgbHVtaW5vc2l0eSBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGFkYXB0aXZlIGx1bWlub3NpdHkgbWF0ZXJpYWwuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiQWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdGRlZmluZXM6IHtcclxuXHJcblx0XHRcdFx0TUlQX0xFVkVMXzFYMTogXCIwLjBcIlxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHRQcmV2aW91c0x1bTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dEN1cnJlbnRMdW06IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdG1pbkx1bWluYW5jZTogbmV3IFVuaWZvcm0oMC4wMSksXHJcblx0XHRcdFx0ZGVsdGE6IG5ldyBVbmlmb3JtKDAuMCksXHJcblx0XHRcdFx0dGF1OiBuZXcgVW5pZm9ybSgxLjApXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0gfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGVwdGg7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCBmb2N1cztcXHJcXG51bmlmb3JtIGZsb2F0IGFzcGVjdDtcXHJcXG51bmlmb3JtIGZsb2F0IGFwZXJ0dXJlO1xcclxcbnVuaWZvcm0gZmxvYXQgbWF4Qmx1cjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbiNpZm5kZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0I2luY2x1ZGUgPHBhY2tpbmc+XFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBjYW1lcmFOZWFyO1xcclxcblxcdHVuaWZvcm0gZmxvYXQgY2FtZXJhRmFyO1xcclxcblxcclxcblxcdGZsb2F0IHJlYWREZXB0aChzYW1wbGVyMkQgZGVwdGhTYW1wbGVyLCB2ZWMyIGNvb3JkKSB7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZnJhZ0Nvb3JkWiA9IHRleHR1cmUyRChkZXB0aFNhbXBsZXIsIGNvb3JkKS54O1xcclxcblxcdFxcdGZsb2F0IHZpZXdaID0gcGVyc3BlY3RpdmVEZXB0aFRvVmlld1ooZnJhZ0Nvb3JkWiwgY2FtZXJhTmVhciwgY2FtZXJhRmFyKTtcXHJcXG5cXHJcXG5cXHRcXHRyZXR1cm4gdmlld1pUb09ydGhvZ3JhcGhpY0RlcHRoKHZpZXdaLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIpO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBhc3BlY3RDb3JyZWN0aW9uID0gdmVjMigxLjAsIGFzcGVjdCk7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFVTRV9MT0dERVBUSEJVRlxcclxcblxcclxcblxcdFxcdGZsb2F0IGRlcHRoID0gdGV4dHVyZTJEKHREZXB0aCwgdlV2KS54O1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZGVwdGggPSByZWFkRGVwdGgodERlcHRoLCB2VXYpO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdGZsb2F0IGZhY3RvciA9IGRlcHRoIC0gZm9jdXM7XFxyXFxuXFxyXFxuXFx0dmVjMiBkb2ZCbHVyID0gdmVjMihjbGFtcChmYWN0b3IgKiBhcGVydHVyZSwgLW1heEJsdXIsIG1heEJsdXIpKTtcXHJcXG5cXHJcXG5cXHR2ZWMyIGRvZmJsdXI5ID0gZG9mQmx1ciAqIDAuOTtcXHJcXG5cXHR2ZWMyIGRvZmJsdXI3ID0gZG9mQmx1ciAqIDAuNztcXHJcXG5cXHR2ZWMyIGRvZmJsdXI0ID0gZG9mQmx1ciAqIDAuNDtcXHJcXG5cXHJcXG5cXHR2ZWM0IGNvbG9yID0gdmVjNCgwLjApO1xcclxcblxcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjAsICAgMC40ICkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMTUsICAwLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4yOSwgIDAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKC0wLjM3LCAgMC4xNSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuNDAsICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4zNywgLTAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjI5LCAtMC4yOSkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMTUsIC0wLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4wLCAgLTAuNCApICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKC0wLjE1LCAgMC4zNykgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMjksICAwLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMiggMC4zNywgIDAuMTUpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKC0wLjQsICAgMC4wICkgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMzcsIC0wLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mQmx1cik7XFxyXFxuXFx0Y29sb3IgKz0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgKyAodmVjMigtMC4yOSwgLTAuMjkpICogYXNwZWN0Q29ycmVjdGlvbikgKiBkb2ZCbHVyKTtcXHJcXG5cXHRjb2xvciArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdiArICh2ZWMyKCAwLjE1LCAtMC4zNykgKiBhc3BlY3RDb3JyZWN0aW9uKSAqIGRvZkJsdXIpO1xcclxcblxcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMTUsICAwLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMzcsICAwLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMzcsIC0wLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMTUsIC0wLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMTUsICAwLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMzcsICAwLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMzcsIC0wLjE1KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMTUsIC0wLjM3KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjkpO1xcclxcblxcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMjksICAwLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuNDAsICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMjksIC0wLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMCwgIC0wLjQgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMjksICAwLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuNCwgICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMjksIC0wLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMCwgICAwLjQgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjcpO1xcclxcblxcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMjksICAwLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuNCwgICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMjksIC0wLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMCwgIC0wLjQgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMjksICAwLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuNCwgICAwLjAgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoLTAuMjksIC0wLjI5KSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcdGNvbG9yICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2ICsgKHZlYzIoIDAuMCwgICAwLjQgKSAqIGFzcGVjdENvcnJlY3Rpb24pICogZG9mYmx1cjQpO1xcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yIC8gNDEuMDtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogRGVwdGggb2YgRmllbGQgc2hhZGVyIChCb2tlaCkuXHJcbiAqXHJcbiAqIE9yaWdpbmFsIHNoYWRlciBjb2RlIGJ5IE1hcnRpbnMgVXBpdGlzOlxyXG4gKiAgaHR0cDovL2FydG1hcnRpbnNoLmJsb2dzcG90LmNvbS8yMDEwLzAyL2dsc2wtbGVucy1ibHVyLWZpbHRlci13aXRoLWJva2VoLmh0bWxcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQm9rZWhNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBib2tlaCBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IFtjYW1lcmFdIC0gQSBjYW1lcmEuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5mb2N1cz0xLjBdIC0gRm9jdXMgZGlzdGFuY2UuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmFwZXJ0dXJlPTAuMDI1XSAtIENhbWVyYSBhcGVydHVyZSBzY2FsZS4gQmlnZ2VyIHZhbHVlcyBmb3Igc2hhbGxvd2VyIGRlcHRoIG9mIGZpZWxkLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhCbHVyPTEuMF0gLSBNYXhpbXVtIGJsdXIgc3RyZW5ndGguXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuZm9jdXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLmZvY3VzID0gMS4wOyB9XHJcblx0XHRpZihvcHRpb25zLmFwZXJ0dXJlID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5hcGVydHVyZSA9IDAuMDI1OyB9XHJcblx0XHRpZihvcHRpb25zLm1heEJsdXIgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm1heEJsdXIgPSAxLjA7IH1cclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkJva2VoTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdGNhbWVyYU5lYXI6IG5ldyBVbmlmb3JtKDAuMSksXHJcblx0XHRcdFx0Y2FtZXJhRmFyOiBuZXcgVW5pZm9ybSgyMDAwKSxcclxuXHRcdFx0XHRhc3BlY3Q6IG5ldyBVbmlmb3JtKDEuMCksXHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0RGVwdGg6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRmb2N1czogbmV3IFVuaWZvcm0ob3B0aW9ucy5mb2N1cyksXHJcblx0XHRcdFx0YXBlcnR1cmU6IG5ldyBVbmlmb3JtKG9wdGlvbnMuYXBlcnR1cmUpLFxyXG5cdFx0XHRcdG1heEJsdXI6IG5ldyBVbmlmb3JtKG9wdGlvbnMubWF4Qmx1cilcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihjYW1lcmEgIT09IG51bGwpIHsgdGhpcy5hZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSk7IH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZG9wdHMgdGhlIHNldHRpbmdzIG9mIHRoZSBnaXZlbiBjYW1lcmEuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBjYW1lcmEgLSBBIGNhbWVyYS5cclxuXHQgKi9cclxuXHJcblx0YWRvcHRDYW1lcmFTZXR0aW5ncyhjYW1lcmEpIHtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zLmNhbWVyYU5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjtcclxuXHRcdHRoaXMudW5pZm9ybXMuY2FtZXJhRmFyLnZhbHVlID0gY2FtZXJhLmZhcjtcclxuXHRcdHRoaXMudW5pZm9ybXMuYXNwZWN0LnZhbHVlID0gY2FtZXJhLmFzcGVjdDtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xcclxcbnVuaWZvcm0gdmVjMiBoYWxmVGV4ZWxTaXplO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgY2FtZXJhTmVhcjtcXHJcXG51bmlmb3JtIGZsb2F0IGNhbWVyYUZhcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1xcclxcbnVuaWZvcm0gZmxvYXQgZm9jYWxTdG9wO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgbWF4Qmx1cjtcXHJcXG51bmlmb3JtIGZsb2F0IGx1bWluYW5jZVRocmVzaG9sZDtcXHJcXG51bmlmb3JtIGZsb2F0IGx1bWluYW5jZUdhaW47XFxyXFxudW5pZm9ybSBmbG9hdCBiaWFzO1xcclxcbnVuaWZvcm0gZmxvYXQgZnJpbmdlO1xcclxcbnVuaWZvcm0gZmxvYXQgZGl0aGVyU3RyZW5ndGg7XFxyXFxuXFxyXFxuI2lmZGVmIFNIQURFUl9GT0NVU1xcclxcblxcclxcblxcdHVuaWZvcm0gdmVjMiBmb2N1c0Nvb3JkcztcXHJcXG5cXHJcXG4jZWxzZVxcclxcblxcclxcblxcdHVuaWZvcm0gZmxvYXQgZm9jYWxEZXB0aDtcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbiNpZm5kZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0I2luY2x1ZGUgPHBhY2tpbmc+XFxyXFxuXFxyXFxuXFx0ZmxvYXQgcmVhZERlcHRoKHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsIHZlYzIgY29vcmQpIHtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBmcmFnQ29vcmRaID0gdGV4dHVyZTJEKGRlcHRoU2FtcGxlciwgY29vcmQpLng7XFxyXFxuXFx0XFx0ZmxvYXQgdmlld1ogPSBwZXJzcGVjdGl2ZURlcHRoVG9WaWV3WihmcmFnQ29vcmRaLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIpO1xcclxcblxcclxcblxcdFxcdHJldHVybiB2aWV3WlRvT3J0aG9ncmFwaGljRGVwdGgodmlld1osIGNhbWVyYU5lYXIsIGNhbWVyYUZhcik7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbiNpZmRlZiBQRU5UQUdPTlxcclxcblxcclxcblxcdGZsb2F0IHBlbnRhKHZlYzIgY29vcmRzKSB7XFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzAgPSB2ZWM0KCAxLjAsICAgICAgICAgIDAuMCwgICAgICAgICAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzEgPSB2ZWM0KCAwLjMwOTAxNjk5NCwgIDAuOTUxMDU2NTE2LCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzIgPSB2ZWM0KC0wLjgwOTAxNjk5NCwgIDAuNTg3Nzg1MjUyLCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzMgPSB2ZWM0KC0wLjgwOTAxNjk5NCwgLTAuNTg3Nzg1MjUyLCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzQgPSB2ZWM0KCAwLjMwOTAxNjk5NCwgLTAuOTUxMDU2NTE2LCAwLjAsIDEuMCk7XFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBIUzUgPSB2ZWM0KCAwLjAsICAgICAgICAgIDAuMCwgICAgICAgICAxLjAsIDEuMCk7XFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgdmVjNCBPTkUgPSB2ZWM0KDEuMCk7XFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgUF9GRUFUSEVSID0gMC40O1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IE5fRkVBVEhFUiA9IC1QX0ZFQVRIRVI7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgaW5Pck91dCA9IC00LjA7XFxyXFxuXFxyXFxuXFx0XFx0dmVjNCBQID0gdmVjNChjb29yZHMsIHZlYzIoUklOR1NfRkxPQVQgLSAxLjMpKTtcXHJcXG5cXHJcXG5cXHRcXHR2ZWM0IGRpc3QgPSB2ZWM0KFxcclxcblxcdFxcdFxcdGRvdChQLCBIUzApLFxcclxcblxcdFxcdFxcdGRvdChQLCBIUzEpLFxcclxcblxcdFxcdFxcdGRvdChQLCBIUzIpLFxcclxcblxcdFxcdFxcdGRvdChQLCBIUzMpXFxyXFxuXFx0XFx0KTtcXHJcXG5cXHJcXG5cXHRcXHRkaXN0ID0gc21vb3Roc3RlcChOX0ZFQVRIRVIsIFBfRkVBVEhFUiwgZGlzdCk7XFxyXFxuXFxyXFxuXFx0XFx0aW5Pck91dCArPSBkb3QoZGlzdCwgT05FKTtcXHJcXG5cXHJcXG5cXHRcXHRkaXN0LnggPSBkb3QoUCwgSFM0KTtcXHJcXG5cXHRcXHRkaXN0LnkgPSBIUzUudyAtIGFicyhQLnopO1xcclxcblxcclxcblxcdFxcdGRpc3QgPSBzbW9vdGhzdGVwKE5fRkVBVEhFUiwgUF9GRUFUSEVSLCBkaXN0KTtcXHJcXG5cXHRcXHRpbk9yT3V0ICs9IGRpc3QueDtcXHJcXG5cXHJcXG5cXHRcXHRyZXR1cm4gY2xhbXAoaW5Pck91dCwgMC4wLCAxLjApO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4jaWZkZWYgU0hPV19GT0NVU1xcclxcblxcclxcblxcdHZlYzMgZGVidWdGb2N1cyh2ZWMzIGMsIGZsb2F0IGJsdXIsIGZsb2F0IGRlcHRoKSB7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZWRnZSA9IDAuMDAyICogZGVwdGg7XFxyXFxuXFx0XFx0ZmxvYXQgbSA9IGNsYW1wKHNtb290aHN0ZXAoMC4wLCBlZGdlLCBibHVyKSwgMC4wLCAxLjApO1xcclxcblxcdFxcdGZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMCAtIGVkZ2UsIDEuMCwgYmx1ciksIDAuMCwgMS4wKTtcXHJcXG5cXHJcXG5cXHRcXHRjID0gbWl4KGMsIHZlYzMoMS4wLCAwLjUsIDAuMCksICgxLjAgLSBtKSAqIDAuNik7XFxyXFxuXFx0XFx0YyA9IG1peChjLCB2ZWMzKDAuMCwgMC41LCAxLjApLCAoKDEuMCAtIGUpIC0gKDEuMCAtIG0pKSAqIDAuMik7XFxyXFxuXFxyXFxuXFx0XFx0cmV0dXJuIGM7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcbiNlbmRpZlxcclxcblxcclxcbiNpZmRlZiBWSUdORVRURVxcclxcblxcclxcblxcdGZsb2F0IHZpZ25ldHRlKCkge1xcclxcblxcclxcblxcdFxcdGNvbnN0IHZlYzIgQ0VOVEVSID0gdmVjMigwLjUpO1xcclxcblxcclxcblxcdFxcdGNvbnN0IGZsb2F0IFZJR05FVFRFX09VVCA9IDEuMztcXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBWSUdORVRURV9JTiA9IDAuMDtcXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBWSUdORVRURV9GQURFID0gMjIuMDsgXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZCA9IGRpc3RhbmNlKHZVdiwgQ0VOVEVSKTtcXHJcXG5cXHRcXHRkID0gc21vb3Roc3RlcChWSUdORVRURV9PVVQgKyAoZm9jYWxTdG9wIC8gVklHTkVUVEVfRkFERSksIFZJR05FVFRFX0lOICsgKGZvY2FsU3RvcCAvIFZJR05FVFRFX0ZBREUpLCBkKTtcXHJcXG5cXHJcXG5cXHRcXHRyZXR1cm4gY2xhbXAoZCwgMC4wLCAxLjApO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52ZWMyIHJhbmQodmVjMiBjb29yZCkge1xcclxcblxcclxcblxcdHZlYzIgbm9pc2U7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIE5PSVNFXFxyXFxuXFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgYSA9IDEyLjk4OTg7XFxyXFxuXFx0XFx0Y29uc3QgZmxvYXQgYiA9IDc4LjIzMztcXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBjID0gNDM3NTguNTQ1MztcXHJcXG5cXHJcXG5cXHRcXHRub2lzZS54ID0gY2xhbXAoZnJhY3Qoc2luKG1vZChkb3QoY29vcmQsIHZlYzIoYSwgYikpLCAzLjE0KSkgKiBjKSwgMC4wLCAxLjApICogMi4wIC0gMS4wO1xcclxcblxcdFxcdG5vaXNlLnkgPSBjbGFtcChmcmFjdChzaW4obW9kKGRvdChjb29yZCwgdmVjMihhLCBiKSAqIDIuMCksIDMuMTQpKSAqIGMpLCAwLjAsIDEuMCkgKiAyLjAgLSAxLjA7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRub2lzZS54ID0gKChmcmFjdCgxLjAgLSBjb29yZC5zICogaGFsZlRleGVsU2l6ZS54KSAqIDAuMjUpICsgKGZyYWN0KGNvb3JkLnQgKiBoYWxmVGV4ZWxTaXplLnkpICogMC43NSkpICogMi4wIC0gMS4wO1xcclxcblxcdFxcdG5vaXNlLnkgPSAoKGZyYWN0KDEuMCAtIGNvb3JkLnMgKiBoYWxmVGV4ZWxTaXplLngpICogMC43NSkgKyAoZnJhY3QoY29vcmQudCAqIGhhbGZUZXhlbFNpemUueSkgKiAwLjI1KSkgKiAyLjAgLSAxLjA7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0cmV0dXJuIG5vaXNlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHByb2Nlc3NUZXhlbCh2ZWMyIGNvb3JkcywgZmxvYXQgYmx1cikge1xcclxcblxcclxcblxcdGNvbnN0IHZlYzMgTFVNX0NPRUZGID0gdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KTtcXHJcXG5cXHJcXG5cXHR2ZWMzIGM7XFxyXFxuXFx0Yy5yID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZHMgKyB2ZWMyKDAuMCwgMS4wKSAqIHRleGVsU2l6ZSAqIGZyaW5nZSAqIGJsdXIpLnI7XFxyXFxuXFx0Yy5nID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZHMgKyB2ZWMyKC0wLjg2NiwgLTAuNSkgKiB0ZXhlbFNpemUgKiBmcmluZ2UgKiBibHVyKS5nO1xcclxcblxcdGMuYiA9IHRleHR1cmUyRCh0RGlmZnVzZSwgY29vcmRzICsgdmVjMigwLjg2NiwgLTAuNSkgKiB0ZXhlbFNpemUgKiBmcmluZ2UgKiBibHVyKS5iO1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSB0aGUgbHVtaW5hbmNlIG9mIHRoZSBjb25zdHJ1Y3RlZCBjb2xvdXIuXFxyXFxuXFx0ZmxvYXQgbHVtaW5hbmNlID0gZG90KGMucmdiLCBMVU1fQ09FRkYpO1xcclxcblxcdGZsb2F0IHRocmVzaG9sZCA9IG1heCgobHVtaW5hbmNlIC0gbHVtaW5hbmNlVGhyZXNob2xkKSAqIGx1bWluYW5jZUdhaW4sIDAuMCk7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIGMgKyBtaXgodmVjMygwLjApLCBjLCB0aHJlc2hvbGQgKiBibHVyKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKSB7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIC1jYW1lcmFGYXIgKiBjYW1lcmFOZWFyIC8gKGRlcHRoICogKGNhbWVyYUZhciAtIGNhbWVyYU5lYXIpIC0gY2FtZXJhRmFyKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgZ2F0aGVyKGZsb2F0IGksIGZsb2F0IGosIGZsb2F0IHJpbmdTYW1wbGVzLCBpbm91dCB2ZWMzIGNvbG9yLCBmbG9hdCB3LCBmbG9hdCBoLCBmbG9hdCBibHVyKSB7XFxyXFxuXFxyXFxuXFx0Y29uc3QgZmxvYXQgVFdPX1BJID0gNi4yODMxODUzMTtcXHJcXG5cXHJcXG5cXHRmbG9hdCBzdGVwID0gVFdPX1BJIC8gcmluZ1NhbXBsZXM7XFxyXFxuXFx0ZmxvYXQgcHcgPSBjb3MoaiAqIHN0ZXApICogaTtcXHJcXG5cXHRmbG9hdCBwaCA9IHNpbihqICogc3RlcCkgKiBpO1xcclxcblxcclxcblxcdCNpZmRlZiBQRU5UQUdPTlxcclxcblxcclxcblxcdFxcdGZsb2F0IHAgPSBwZW50YSh2ZWMyKHB3LCBwaCkpO1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgcCA9IDEuMDtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHRjb2xvciArPSBwcm9jZXNzVGV4ZWwodlV2ICsgdmVjMihwdyAqIHcsIHBoICogaCksIGJsdXIpICogbWl4KDEuMCwgaSAvIFJJTkdTX0ZMT0FULCBiaWFzKSAqIHA7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIG1peCgxLjAsIGkgLyBSSU5HU19GTE9BVCwgYmlhcykgKiBwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFVTRV9MT0dERVBUSEJVRlxcclxcblxcclxcblxcdFxcdGZsb2F0IGRlcHRoID0gbGluZWFyaXplKHRleHR1cmUyRCh0RGVwdGgsIHZVdikueCk7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBkZXB0aCA9IGxpbmVhcml6ZShyZWFkRGVwdGgodERlcHRoLCB2VXYpKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjaWZkZWYgU0hBREVSX0ZPQ1VTXFxyXFxuXFxyXFxuXFx0XFx0I2lmZGVmIFVTRV9MT0dERVBUSEJVRlxcclxcblxcclxcblxcdFxcdFxcdGZsb2F0IGZEZXB0aCA9IGxpbmVhcml6ZSh0ZXh0dXJlMkQodERlcHRoLCBmb2N1c0Nvb3JkcykueCk7XFxyXFxuXFxyXFxuXFx0XFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHRcXHRmbG9hdCBmRGVwdGggPSBsaW5lYXJpemUocmVhZERlcHRoKHREZXB0aCwgZm9jdXNDb29yZHMpKTtcXHJcXG5cXHJcXG5cXHRcXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjZWxzZVxcclxcblxcclxcblxcdFxcdGZsb2F0IGZEZXB0aCA9IGZvY2FsRGVwdGg7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0I2lmZGVmIE1BTlVBTF9ET0ZcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBuRG9GU3RhcnQgPSAxLjA7IFxcclxcblxcdFxcdGNvbnN0IGZsb2F0IG5Eb0ZEaXN0ID0gMi4wO1xcclxcblxcdFxcdGNvbnN0IGZsb2F0IGZEb0ZTdGFydCA9IDEuMDtcXHJcXG5cXHRcXHRjb25zdCBmbG9hdCBmRG9GRGlzdCA9IDMuMDtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBmb2NhbFBsYW5lID0gZGVwdGggLSBmRGVwdGg7XFxyXFxuXFx0XFx0ZmxvYXQgZmFyRG9GID0gKGZvY2FsUGxhbmUgLSBmRG9GU3RhcnQpIC8gZkRvRkRpc3Q7XFxyXFxuXFx0XFx0ZmxvYXQgbmVhckRvRiA9ICgtZm9jYWxQbGFuZSAtIG5Eb0ZTdGFydCkgLyBuRG9GRGlzdDtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBibHVyID0gKGZvY2FsUGxhbmUgPiAwLjApID8gZmFyRG9GIDogbmVhckRvRjtcXHJcXG5cXHJcXG5cXHQjZWxzZVxcclxcblxcclxcblxcdFxcdGNvbnN0IGZsb2F0IENJUkNMRV9PRl9DT05GVVNJT04gPSAwLjAzOyAvLyAzNW1tIGZpbG0gPSAwLjAzbW0gQ29DLlxcclxcblxcclxcblxcdFxcdGZsb2F0IGZvY2FsUGxhbmVNTSA9IGZEZXB0aCAqIDEwMDAuMDtcXHJcXG5cXHRcXHRmbG9hdCBkZXB0aE1NID0gZGVwdGggKiAxMDAwLjA7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZm9jYWxQbGFuZSA9IChkZXB0aE1NICogZm9jYWxMZW5ndGgpIC8gKGRlcHRoTU0gLSBmb2NhbExlbmd0aCk7XFxyXFxuXFx0XFx0ZmxvYXQgZmFyRG9GID0gKGZvY2FsUGxhbmVNTSAqIGZvY2FsTGVuZ3RoKSAvIChmb2NhbFBsYW5lTU0gLSBmb2NhbExlbmd0aCk7XFxyXFxuXFx0XFx0ZmxvYXQgbmVhckRvRiA9IChmb2NhbFBsYW5lTU0gLSBmb2NhbExlbmd0aCkgLyAoZm9jYWxQbGFuZU1NICogZm9jYWxTdG9wICogQ0lSQ0xFX09GX0NPTkZVU0lPTik7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgYmx1ciA9IGFicyhmb2NhbFBsYW5lIC0gZmFyRG9GKSAqIG5lYXJEb0Y7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Ymx1ciA9IGNsYW1wKGJsdXIsIDAuMCwgMS4wKTtcXHJcXG5cXHJcXG5cXHQvLyBEaXRoZXJpbmcuXFxyXFxuXFx0dmVjMiBub2lzZSA9IHJhbmQodlV2KSAqIGRpdGhlclN0cmVuZ3RoICogYmx1cjtcXHJcXG5cXHJcXG5cXHRmbG9hdCBibHVyRmFjdG9yWCA9IHRleGVsU2l6ZS54ICogYmx1ciAqIG1heEJsdXIgKyBub2lzZS54O1xcclxcblxcdGZsb2F0IGJsdXJGYWN0b3JZID0gdGV4ZWxTaXplLnkgKiBibHVyICogbWF4Qmx1ciArIG5vaXNlLnk7XFxyXFxuXFxyXFxuXFx0Y29uc3QgaW50IE1BWF9SSU5HX1NBTVBMRVMgPSBSSU5HU19JTlQgKiBTQU1QTEVTX0lOVDtcXHJcXG5cXHJcXG5cXHQvLyBDYWxjdWxhdGlvbiBvZiBmaW5hbCBjb2xvci5cXHJcXG5cXHR2ZWM0IGNvbG9yO1xcclxcblxcclxcblxcdGlmKGJsdXIgPCAwLjA1KSB7XFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFxyXFxuXFx0fSBlbHNlIHtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBzID0gMS4wO1xcclxcblxcdFxcdGludCByaW5nU2FtcGxlcztcXHJcXG5cXHJcXG5cXHRcXHRmb3IoaW50IGkgPSAxOyBpIDw9IFJJTkdTX0lOVDsgKytpKSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0cmluZ1NhbXBsZXMgPSBpICogU0FNUExFU19JTlQ7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ly8gQ29uc3RhbnQgbG9vcC5cXHJcXG5cXHRcXHRcXHRmb3IoaW50IGogPSAwOyBqIDwgTUFYX1JJTkdfU0FNUExFUzsgKytqKSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0Ly8gQnJlYWsgZWFybGllci5cXHJcXG5cXHRcXHRcXHRcXHRpZihqID49IHJpbmdTYW1wbGVzKSB7IGJyZWFrOyB9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0cyArPSBnYXRoZXIoZmxvYXQoaSksIGZsb2F0KGopLCBmbG9hdChyaW5nU2FtcGxlcyksIGNvbG9yLnJnYiwgYmx1ckZhY3RvclgsIGJsdXJGYWN0b3JZLCBibHVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGNvbG9yLnJnYiAvPSBzOyAvLyBEaXZpZGUgYnkgc2FtcGxlIGNvdW50LlxcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjaWZkZWYgU0hPV19GT0NVU1xcclxcblxcclxcblxcdFxcdGNvbG9yLnJnYiA9IGRlYnVnRm9jdXMoY29sb3IucmdiLCBibHVyLCBkZXB0aCk7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0I2lmZGVmIFZJR05FVFRFXFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IucmdiICo9IHZpZ25ldHRlKCk7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIERlcHRoIG9mIEZpZWxkIHNoYWRlciB2ZXJzaW9uIDIuNC5cclxuICpcclxuICogT3JpZ2luYWwgc2hhZGVyIGNvZGUgYnkgTWFydGlucyBVcGl0aXM6XHJcbiAqICBodHRwOi8vYmxlbmRlcmFydGlzdHMub3JnL2ZvcnVtL3Nob3d0aHJlYWQucGhwPzIzNzQ4OC1HTFNMLWRlcHRoLW9mLWZpZWxkLXdpdGgtYm9rZWgtdjItNC0odXBkYXRlKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2tlaDJNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBib2tlaDIgbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBbY2FtZXJhXSAtIFRoZSBtYWluIGNhbWVyYS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQWRkaXRpb25hbCBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW29wdGlvbnMudGV4ZWxTaXplXSAtIFRoZSBhYnNvbHV0ZSBzY3JlZW4gdGV4ZWwgc2l6ZS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNob3dGb2N1cz1mYWxzZV0gLSBXaGV0aGVyIHRoZSBmb2N1cyBwb2ludCBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYW51YWxEb0Y9ZmFsc2VdIC0gRW5hYmxlcyBtYW51YWwgZGVwdGggb2YgZmllbGQgYmx1ci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZ25ldHRlPWZhbHNlXSAtIEVuYWJsZXMgYSB2aWduZXR0ZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5wZW50YWdvbj1mYWxzZV0gLSBFbmFibGUgdG8gdXNlIGEgcGVudGFnb25hbCBzaGFwZSB0byBzY2FsZSBnYXRoZXJlZCB0ZXhlbHMuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zaGFkZXJGb2N1cz10cnVlXSAtIERpc2FibGUgaWYgeW91IGNvbXB1dGUgeW91ciBvd24gZm9jYWxEZXB0aCAoaW4gbWV0cmVzISkuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ub2lzZT10cnVlXSAtIERpc2FibGUgaWYgeW91IGRvbid0IHdhbnQgbm9pc2UgcGF0dGVybnMgZm9yIGRpdGhlcmluZy5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5yaW5ncyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMucmluZ3MgPSAzOyB9XHJcblx0XHRpZihvcHRpb25zLnNhbXBsZXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNhbXBsZXMgPSAyOyB9XHJcblx0XHRpZihvcHRpb25zLnNob3dGb2N1cyA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2hvd0ZvY3VzID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2hvd0ZvY3VzID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zaG93Rm9jdXMgPSBmYWxzZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5tYW51YWxEb0YgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm1hbnVhbERvRiA9IGZhbHNlOyB9XHJcblx0XHRpZihvcHRpb25zLnZpZ25ldHRlID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy52aWduZXR0ZSA9IGZhbHNlOyB9XHJcblx0XHRpZihvcHRpb25zLnBlbnRhZ29uID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5wZW50YWdvbiA9IGZhbHNlOyB9XHJcblx0XHRpZihvcHRpb25zLnNoYWRlckZvY3VzID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zaGFkZXJGb2N1cyA9IHRydWU7IH1cclxuXHRcdGlmKG9wdGlvbnMubm9pc2UgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm5vaXNlID0gdHJ1ZTsgfVxyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiQm9rZWgyTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdGRlZmluZXM6IHtcclxuXHJcblx0XHRcdFx0UklOR1NfSU5UOiBvcHRpb25zLnJpbmdzLnRvRml4ZWQoMCksXHJcblx0XHRcdFx0UklOR1NfRkxPQVQ6IG9wdGlvbnMucmluZ3MudG9GaXhlZCgxKSxcclxuXHRcdFx0XHRTQU1QTEVTX0lOVDogb3B0aW9ucy5zYW1wbGVzLnRvRml4ZWQoMCksXHJcblx0XHRcdFx0U0FNUExFU19GTE9BVDogb3B0aW9ucy5zYW1wbGVzLnRvRml4ZWQoMSlcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dERlcHRoOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHJcblx0XHRcdFx0dGV4ZWxTaXplOiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yMigpKSxcclxuXHRcdFx0XHRoYWxmVGV4ZWxTaXplOiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yMigpKSxcclxuXHJcblx0XHRcdFx0Y2FtZXJhTmVhcjogbmV3IFVuaWZvcm0oMC4xKSxcclxuXHRcdFx0XHRjYW1lcmFGYXI6IG5ldyBVbmlmb3JtKDIwMDApLFxyXG5cclxuXHRcdFx0XHRmb2NhbExlbmd0aDogbmV3IFVuaWZvcm0oMjQuMCksXHJcblx0XHRcdFx0Zm9jYWxTdG9wOiBuZXcgVW5pZm9ybSgwLjkpLFxyXG5cclxuXHRcdFx0XHRtYXhCbHVyOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdGx1bWluYW5jZVRocmVzaG9sZDogbmV3IFVuaWZvcm0oMC41KSxcclxuXHRcdFx0XHRsdW1pbmFuY2VHYWluOiBuZXcgVW5pZm9ybSgyLjApLFxyXG5cdFx0XHRcdGJpYXM6IG5ldyBVbmlmb3JtKDAuNSksXHJcblx0XHRcdFx0ZnJpbmdlOiBuZXcgVW5pZm9ybSgwLjcpLFxyXG5cdFx0XHRcdGRpdGhlclN0cmVuZ3RoOiBuZXcgVW5pZm9ybSgwLjAwMDEpLFxyXG5cclxuXHRcdFx0XHRmb2N1c0Nvb3JkczogbmV3IFVuaWZvcm0obmV3IFZlY3RvcjIoMC41LCAwLjUpKSxcclxuXHRcdFx0XHRmb2NhbERlcHRoOiBuZXcgVW5pZm9ybSgxLjApXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5zaG93Rm9jdXMpIHsgdGhpcy5kZWZpbmVzLlNIT1dfRk9DVVMgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5tYW51YWxEb0YpIHsgdGhpcy5kZWZpbmVzLk1BTlVBTF9ET0YgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy52aWduZXR0ZSkgeyB0aGlzLmRlZmluZXMuVklHTkVUVEUgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5wZW50YWdvbikgeyB0aGlzLmRlZmluZXMuUEVOVEFHT04gPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5zaGFkZXJGb2N1cykgeyB0aGlzLmRlZmluZXMuU0hBREVSX0ZPQ1VTID0gXCIxXCI7IH1cclxuXHRcdGlmKG9wdGlvbnMubm9pc2UpIHsgdGhpcy5kZWZpbmVzLk5PSVNFID0gXCIxXCI7IH1cclxuXHJcblx0XHRpZihvcHRpb25zLnRleGVsU2l6ZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc2V0VGV4ZWxTaXplKG9wdGlvbnMudGV4ZWxTaXplLngsIG9wdGlvbnMudGV4ZWxTaXplLnkpOyB9XHJcblx0XHRpZihjYW1lcmEgIT09IG51bGwpIHsgdGhpcy5hZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSk7IH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSB0ZXhlbCBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggLSBUaGUgdGV4ZWwgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHkgLSBUaGUgdGV4ZWwgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRUZXhlbFNpemUoeCwgeSkge1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMudGV4ZWxTaXplLnZhbHVlLnNldCh4LCB5KTtcclxuXHRcdHRoaXMudW5pZm9ybXMuaGFsZlRleGVsU2l6ZS52YWx1ZS5zZXQoeCwgeSkubXVsdGlwbHlTY2FsYXIoMC41KTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZG9wdHMgdGhlIG5lYXIgYW5kIGZhciBwbGFuZSBhbmQgdGhlIGZvY2FsIGxlbmd0aCBvZiB0aGUgZ2l2ZW4gY2FtZXJhLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQZXJzcGVjdGl2ZUNhbWVyYX0gY2FtZXJhIC0gVGhlIG1haW4gY2FtZXJhLlxyXG5cdCAqL1xyXG5cclxuXHRhZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSkge1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMuY2FtZXJhTmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5jYW1lcmFGYXIudmFsdWUgPSBjYW1lcmEuZmFyO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5nZXRGb2NhbExlbmd0aCgpOyAvLyB1bml0OiBtbS5cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmUxO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmUyO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTE7XFxyXFxudW5pZm9ybSBmbG9hdCBvcGFjaXR5MjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWM0IHRleGVsMSA9IG9wYWNpdHkxICogdGV4dHVyZTJEKHRleHR1cmUxLCB2VXYpO1xcclxcblxcdHZlYzQgdGV4ZWwyID0gb3BhY2l0eTIgKiB0ZXh0dXJlMkQodGV4dHVyZTIsIHZVdik7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFNDUkVFTl9NT0RFXFxyXFxuXFxyXFxuXFx0XFx0dmVjMyBpbnZUZXhlbDEgPSB2ZWMzKDEuMCkgLSB0ZXhlbDEucmdiO1xcclxcblxcdFxcdHZlYzMgaW52VGV4ZWwyID0gdmVjMygxLjApIC0gdGV4ZWwyLnJnYjtcXHJcXG5cXHJcXG5cXHRcXHR2ZWM0IGNvbG9yID0gdmVjNChcXHJcXG5cXHRcXHRcXHR2ZWMzKDEuMCkgLSBpbnZUZXhlbDEgKiBpbnZUZXhlbDIsXFxyXFxuXFx0XFx0XFx0dGV4ZWwxLmEgKyB0ZXhlbDIuYVxcclxcblxcdFxcdCk7XFxyXFxuXFxyXFxuXFx0I2Vsc2VcXHJcXG5cXHJcXG5cXHRcXHR2ZWM0IGNvbG9yID0gdGV4ZWwxICsgdGV4ZWwyO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIG1hdGVyaWFsIGZvciBjb21iaW5pbmcgdHdvIHRleHR1cmVzLlxyXG4gKlxyXG4gKiBUaGlzIG1hdGVyaWFsIHN1cHBvcnRzIHRoZSB0d28gYmxlbmQgbW9kZXMgQWRkIGFuZCBTY3JlZW4uXHJcbiAqXHJcbiAqIEluIFNjcmVlbiBtb2RlLCB0aGUgdHdvIHRleHR1cmVzIGFyZSBlZmZlY3RpdmVseSBwcm9qZWN0ZWQgb24gYSB3aGl0ZSBzY3JlZW5cclxuICogc2ltdWx0YW5lb3VzbHkuIEluIEFkZCBtb2RlLCB0aGUgdGV4dHVyZXMgYXJlIHNpbXBseSBhZGRlZCB0b2dldGhlciB3aGljaFxyXG4gKiBvZnRlbiBwcm9kdWNlcyB1bmRlc2lyZWQsIHdhc2hlZCBvdXQgcmVzdWx0cy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tYmluZU1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGNvbWJpbmUgbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtzY3JlZW5Nb2RlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIHNjcmVlbiBibGVuZCBtb2RlIHNob3VsZCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY3JlZW5Nb2RlID0gZmFsc2UpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkNvbWJpbmVNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dGV4dHVyZTE6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHRleHR1cmUyOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHJcblx0XHRcdFx0b3BhY2l0eTE6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0b3BhY2l0eTI6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihzY3JlZW5Nb2RlKSB7IHRoaXMuZGVmaW5lcy5TQ1JFRU5fTU9ERSA9IFwiMVwiOyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2MDtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MTtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MjtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MztcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0Ly8gU2FtcGxlIHRvcCBsZWZ0IHRleGVsLlxcclxcblxcdHZlYzQgc3VtID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYwKTtcXHJcXG5cXHJcXG5cXHQvLyBTYW1wbGUgdG9wIHJpZ2h0IHRleGVsLlxcclxcblxcdHN1bSArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdjEpO1xcclxcblxcclxcblxcdC8vIFNhbXBsZSBib3R0b20gcmlnaHQgdGV4ZWwuXFxyXFxuXFx0c3VtICs9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2Mik7XFxyXFxuXFxyXFxuXFx0Ly8gU2FtcGxlIGJvdHRvbSBsZWZ0IHRleGVsLlxcclxcblxcdHN1bSArPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdjMpO1xcclxcblxcclxcblxcdC8vIENvbXB1dGUgdGhlIGF2ZXJhZ2UuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gc3VtICogMC4yNTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcXHJcXG51bmlmb3JtIHZlYzIgaGFsZlRleGVsU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IGtlcm5lbDtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2MDtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MTtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MjtcXHJcXG52YXJ5aW5nIHZlYzIgdlV2MztcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjMiBkVXYgPSAodGV4ZWxTaXplICogdmVjMihrZXJuZWwpKSArIGhhbGZUZXhlbFNpemU7XFxyXFxuXFxyXFxuXFx0dlV2MCA9IHZlYzIodXYueCAtIGRVdi54LCB1di55ICsgZFV2LnkpO1xcclxcblxcdHZVdjEgPSB2ZWMyKHV2LnggKyBkVXYueCwgdXYueSArIGRVdi55KTtcXHJcXG5cXHR2VXYyID0gdmVjMih1di54ICsgZFV2LngsIHV2LnkgLSBkVXYueSk7XFxyXFxuXFx0dlV2MyA9IHZlYzIodXYueCAtIGRVdi54LCB1di55IC0gZFV2LnkpO1xcclxcblxcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIG9wdGltaXNlZCBjb252b2x1dGlvbiBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIEJhc2VkIG9uIHRoZSBHREMyMDAzIFByZXNlbnRhdGlvbiBieSBNYXNha2kgS2F3YXNlLCBCdW5rYXNoYSBHYW1lczpcclxuICogIEZyYW1lIEJ1ZmZlciBQb3N0cHJvY2Vzc2luZyBFZmZlY3RzIGluIERPVUJMRS1TLlQuRS5BLkwgKFdyZWNrbGVzcylcclxuICogYW5kIGFuIGFydGljbGUgYnkgRmlsaXAgU3RydWdhciwgSW50ZWw6XHJcbiAqICBBbiBpbnZlc3RpZ2F0aW9uIG9mIGZhc3QgcmVhbC10aW1lIEdQVS1iYXNlZCBpbWFnZSBibHVyIGFsZ29yaXRobXNcclxuICpcclxuICogRnVydGhlciBtb2RpZmllZCBhY2NvcmRpbmcgdG8gQXBwbGUnc1xyXG4gKiBbQmVzdCBQcmFjdGljZXMgZm9yIFNoYWRlcnNdKGh0dHBzOi8vZ29vLmdsL2xtUm9NNSkuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnZvbHV0aW9uTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY29udm9sdXRpb24gbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1ZlY3RvcjJ9IFt0ZXhlbFNpemVdIC0gVGhlIGFic29sdXRlIHNjcmVlbiB0ZXhlbCBzaXplLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXhlbFNpemUgPSBuZXcgVmVjdG9yMigpKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJDb252b2x1dGlvbk1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGV4ZWxTaXplOiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yMigpKSxcclxuXHRcdFx0XHRoYWxmVGV4ZWxTaXplOiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yMigpKSxcclxuXHRcdFx0XHRrZXJuZWw6IG5ldyBVbmlmb3JtKDAuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnNldFRleGVsU2l6ZSh0ZXhlbFNpemUueCwgdGV4ZWxTaXplLnkpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIGN1cnJlbnQga2VybmVsIHNpemUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0tlcm5lbFNpemV9XHJcblx0XHQgKiBAZGVmYXVsdCBLZXJuZWxTaXplLkxBUkdFXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmtlcm5lbFNpemUgPSBLZXJuZWxTaXplLkxBUkdFO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGtlcm5lbC5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge0Zsb2F0MzJBcnJheX0gVGhlIGtlcm5lbC5cclxuXHQgKi9cclxuXHJcblx0Z2V0S2VybmVsKCkgeyByZXR1cm4ga2VybmVsUHJlc2V0c1t0aGlzLmtlcm5lbFNpemVdOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIHRleGVsIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0geCAtIFRoZSB0ZXhlbCB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0geSAtIFRoZSB0ZXhlbCBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFRleGVsU2l6ZSh4LCB5KSB7XHJcblxyXG5cdFx0dGhpcy51bmlmb3Jtcy50ZXhlbFNpemUudmFsdWUuc2V0KHgsIHkpO1xyXG5cdFx0dGhpcy51bmlmb3Jtcy5oYWxmVGV4ZWxTaXplLnZhbHVlLnNldCh4LCB5KS5tdWx0aXBseVNjYWxhcigwLjUpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogVGhlIEthd2FzZSBibHVyIGtlcm5lbCBwcmVzZXRzLlxyXG4gKlxyXG4gKiBAdHlwZSB7RmxvYXQzMkFycmF5W119XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5cclxuY29uc3Qga2VybmVsUHJlc2V0cyA9IFtcclxuXHRuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMF0pLFxyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMS4wLCAxLjBdKSxcclxuXHRuZXcgRmxvYXQzMkFycmF5KFswLjAsIDEuMCwgMS4wLCAyLjBdKSxcclxuXHRuZXcgRmxvYXQzMkFycmF5KFswLjAsIDEuMCwgMi4wLCAyLjAsIDMuMF0pLFxyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMS4wLCAyLjAsIDMuMCwgNC4wLCA0LjAsIDUuMF0pLFxyXG5cdG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMS4wLCAyLjAsIDMuMCwgNC4wLCA1LjAsIDcuMCwgOC4wLCA5LjAsIDEwLjBdKVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEEga2VybmVsIHNpemUgZW51bWVyYXRpb24uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBWRVJZX1NNQUxMIC0gQSB2ZXJ5IHNtYWxsIGtlcm5lbCB0aGF0IG1hdGNoZXMgYSA3eDcgR2F1c3MgYmx1ciBrZXJuZWwuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBTTUFMTCAtIEEgc21hbGwga2VybmVsIHRoYXQgbWF0Y2hlcyBhIDE1eDE1IEdhdXNzIGJsdXIga2VybmVsLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gTUVESVVNIC0gQSBtZWRpdW0gc2l6ZWQga2VybmVsIHRoYXQgbWF0Y2hlcyBhIDIzeDIzIEdhdXNzIGJsdXIga2VybmVsLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gTEFSR0UgLSBBIGxhcmdlIGtlcm5lbCB0aGF0IG1hdGNoZXMgYSAzNXgzNSBHYXVzcyBibHVyIGtlcm5lbC5cclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFZFUllfTEFSR0UgLSBBIHZlcnkgbGFyZ2Uga2VybmVsIHRoYXQgbWF0Y2hlcyBhIDYzeDYzIEdhdXNzIGJsdXIga2VybmVsLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gSFVHRSAtIEEgaHVnZSBrZXJuZWwgdGhhdCBtYXRjaGVzIGEgMTI3eDEyNyBHYXVzcyBibHVyIGtlcm5lbC5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgS2VybmVsU2l6ZSA9IHtcclxuXHJcblx0VkVSWV9TTUFMTDogMCxcclxuXHRTTUFMTDogMSxcclxuXHRNRURJVU06IDIsXHJcblx0TEFSR0U6IDMsXHJcblx0VkVSWV9MQVJHRTogNCxcclxuXHRIVUdFOiA1XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWM0IHRleGVsID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcclxcblxcdGdsX0ZyYWdDb2xvciA9IG9wYWNpdHkgKiB0ZXhlbDtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBzaW1wbGUgY29weSBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcHlNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBjb3B5IG1hdGVyaWFsLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkNvcHlNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdG9wYWNpdHk6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbiNpZm5kZWYgVVNFX0xPR0RFUFRIQlVGXFxyXFxuXFxyXFxuXFx0I2luY2x1ZGUgPHBhY2tpbmc+XFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBjYW1lcmFOZWFyO1xcclxcblxcdHVuaWZvcm0gZmxvYXQgY2FtZXJhRmFyO1xcclxcblxcclxcblxcdGZsb2F0IHJlYWREZXB0aChzYW1wbGVyMkQgZGVwdGhTYW1wbGVyLCB2ZWMyIGNvb3JkKSB7XFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZnJhZ0Nvb3JkWiA9IHRleHR1cmUyRChkZXB0aFNhbXBsZXIsIGNvb3JkKS54O1xcclxcblxcdFxcdGZsb2F0IHZpZXdaID0gcGVyc3BlY3RpdmVEZXB0aFRvVmlld1ooZnJhZ0Nvb3JkWiwgY2FtZXJhTmVhciwgY2FtZXJhRmFyKTtcXHJcXG5cXHJcXG5cXHRcXHRyZXR1cm4gdmlld1pUb09ydGhvZ3JhcGhpY0RlcHRoKHZpZXdaLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIpO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFVTRV9MT0dERVBUSEJVRlxcclxcblxcclxcblxcdFxcdGZsb2F0IGRlcHRoID0gdGV4dHVyZTJEKHREZXB0aCwgdlV2KS54O1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgZGVwdGggPSByZWFkRGVwdGgodERlcHRoLCB2VXYpO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoZGVwdGgsIGRlcHRoLCBkZXB0aCwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBkZXB0aCBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERlcHRoTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZGVwdGggbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBbY2FtZXJhXSAtIEEgY2FtZXJhLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEgPSBudWxsKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJEZXB0aE1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHRjYW1lcmFOZWFyOiBuZXcgVW5pZm9ybSgwLjEpLFxyXG5cdFx0XHRcdGNhbWVyYUZhcjogbmV3IFVuaWZvcm0oMjAwMCksXHJcblxyXG5cdFx0XHRcdHREZXB0aDogbmV3IFVuaWZvcm0obnVsbClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihjYW1lcmEgIT09IG51bGwpIHsgdGhpcy5hZG9wdENhbWVyYVNldHRpbmdzKGNhbWVyYSk7IH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZG9wdHMgdGhlIHNldHRpbmdzIG9mIHRoZSBnaXZlbiBjYW1lcmEuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBjYW1lcmEgLSBBIGNhbWVyYS5cclxuXHQgKi9cclxuXHJcblx0YWRvcHRDYW1lcmFTZXR0aW5ncyhjYW1lcmEpIHtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zLmNhbWVyYU5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjtcclxuXHRcdHRoaXMudW5pZm9ybXMuY2FtZXJhRmFyLnZhbHVlID0gY2FtZXJhLmZhcjtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yNCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgYW5nbGU7XFxyXFxudW5pZm9ybSBmbG9hdCBzY2FsZTtcXHJcXG51bmlmb3JtIGZsb2F0IGludGVuc2l0eTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgdmVjMiB2VXZQYXR0ZXJuO1xcclxcblxcclxcbmZsb2F0IHBhdHRlcm4oKSB7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgcyA9IHNpbihhbmdsZSk7XFxyXFxuXFx0ZmxvYXQgYyA9IGNvcyhhbmdsZSk7XFxyXFxuXFxyXFxuXFx0dmVjMiBwb2ludCA9IHZlYzIoYyAqIHZVdlBhdHRlcm4ueCAtIHMgKiB2VXZQYXR0ZXJuLnksIHMgKiB2VXZQYXR0ZXJuLnggKyBjICogdlV2UGF0dGVybi55KSAqIHNjYWxlO1xcclxcblxcclxcblxcdHJldHVybiAoc2luKHBvaW50LngpICogc2luKHBvaW50LnkpKSAqIDQuMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFx0dmVjMyBjb2xvciA9IHRleGVsLnJnYjtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgQVZFUkFHRVxcclxcblxcclxcblxcdFxcdGNvbG9yID0gdmVjMygoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMuMCk7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Y29sb3IgPSB2ZWMzKGNvbG9yICogMTAuMCAtIDUuMCArIHBhdHRlcm4oKSk7XFxyXFxuXFx0Y29sb3IgPSB0ZXhlbC5yZ2IgKyAoY29sb3IgLSB0ZXhlbC5yZ2IpICogaW50ZW5zaXR5O1xcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHRleGVsLmEpO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ1bmlmb3JtIHZlYzQgb2Zmc2V0UmVwZWF0O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyB2ZWMyIHZVdlBhdHRlcm47XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdHZVdlBhdHRlcm4gPSB1diAqIG9mZnNldFJlcGVhdC56dyArIG9mZnNldFJlcGVhdC54eTtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIGRvdCBzY3JlZW4gc2hhZGVyIG1hdGVyaWFsLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBEb3RTY3JlZW5NYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBkb3Qgc2NyZWVuIG1hdGVyaWFsLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbYXZlcmFnZT1mYWxzZV0gLSBXaGV0aGVyIHRoZSBzaGFkZXIgc2hvdWxkIG91dHB1dCB0aGUgY29sb3VyIGF2ZXJhZ2UgKGJsYWNrIGFuZCB3aGl0ZSkuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGF2ZXJhZ2UgPSBmYWxzZSkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiRG90U2NyZWVuTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHJcblx0XHRcdFx0YW5nbGU6IG5ldyBVbmlmb3JtKDEuNTcpLFxyXG5cdFx0XHRcdHNjYWxlOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdGludGVuc2l0eTogbmV3IFVuaWZvcm0oMS4wKSxcclxuXHJcblx0XHRcdFx0b2Zmc2V0UmVwZWF0OiBuZXcgVW5pZm9ybShuZXcgVmVjdG9yNCgwLjUsIDAuNSwgMS4wLCAxLjApKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGF2ZXJhZ2UpIHsgdGhpcy5kZWZpbmVzLkFWRVJBR0UgPSBcIjFcIjsgfVxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuI2lmZGVmIE5PSVNFXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBub2lzZUludGVuc2l0eTtcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4jaWZkZWYgU0NBTkxJTkVTXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCBzY2FubGluZUludGVuc2l0eTtcXHJcXG5cXHR1bmlmb3JtIGZsb2F0IHNjYW5saW5lQ291bnQ7XFxyXFxuXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuI2lmZGVmIEdSRVlTQ0FMRVxcclxcblxcclxcblxcdHVuaWZvcm0gZmxvYXQgZ3JleXNjYWxlSW50ZW5zaXR5O1xcclxcblxcclxcblxcdGNvbnN0IHZlYzMgTFVNX0NPRUZGID0gdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KTtcXHJcXG5cXHJcXG4jZWxpZiBkZWZpbmVkKFNFUElBKVxcclxcblxcclxcblxcdHVuaWZvcm0gZmxvYXQgc2VwaWFJbnRlbnNpdHk7XFxyXFxuXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuI2lmZGVmIFZJR05FVFRFXFxyXFxuXFxyXFxuXFx0dW5pZm9ybSBmbG9hdCB2aWduZXR0ZU9mZnNldDtcXHJcXG5cXHR1bmlmb3JtIGZsb2F0IHZpZ25ldHRlRGFya25lc3M7XFxyXFxuXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFx0dmVjMyBjb2xvciA9IHRleGVsLnJnYjtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgU0NSRUVOX01PREVcXHJcXG5cXHJcXG5cXHRcXHR2ZWMzIGludkNvbG9yO1xcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdCNpZmRlZiBOT0lTRVxcclxcblxcclxcblxcdFxcdGZsb2F0IHggPSB2VXYueCAqIHZVdi55ICogdGltZSAqIDEwMDAuMDtcXHJcXG5cXHRcXHR4ID0gbW9kKHgsIDEzLjApICogbW9kKHgsIDEyMy4wKTtcXHJcXG5cXHRcXHR4ID0gbW9kKHgsIDAuMDEpO1xcclxcblxcclxcblxcdFxcdHZlYzMgbm9pc2UgPSB0ZXhlbC5yZ2IgKiBjbGFtcCgwLjEgKyB4ICogMTAwLjAsIDAuMCwgMS4wKSAqIG5vaXNlSW50ZW5zaXR5O1xcclxcblxcclxcblxcdFxcdCNpZmRlZiBTQ1JFRU5fTU9ERVxcclxcblxcclxcblxcdFxcdFxcdGludkNvbG9yID0gdmVjMygxLjApIC0gY29sb3I7XFxyXFxuXFx0XFx0XFx0dmVjMyBpbnZOb2lzZSA9IHZlYzMoMS4wKSAtIG5vaXNlO1xcclxcblxcclxcblxcdFxcdFxcdGNvbG9yID0gdmVjMygxLjApIC0gaW52Q29sb3IgKiBpbnZOb2lzZTtcXHJcXG5cXHJcXG5cXHRcXHQjZWxzZVxcclxcblxcclxcblxcdFxcdFxcdGNvbG9yICs9IG5vaXNlO1xcclxcblxcclxcblxcdFxcdCNlbmRpZlxcclxcblxcclxcblxcdCNlbmRpZlxcclxcblxcclxcblxcdCNpZmRlZiBTQ0FOTElORVNcXHJcXG5cXHJcXG5cXHRcXHR2ZWMyIHNsID0gdmVjMihzaW4odlV2LnkgKiBzY2FubGluZUNvdW50KSwgY29zKHZVdi55ICogc2NhbmxpbmVDb3VudCkpO1xcclxcblxcdFxcdHZlYzMgc2NhbmxpbmVzID0gdGV4ZWwucmdiICogdmVjMyhzbC54LCBzbC55LCBzbC54KSAqIHNjYW5saW5lSW50ZW5zaXR5O1xcclxcblxcclxcblxcdFxcdCNpZmRlZiBTQ1JFRU5fTU9ERVxcclxcblxcclxcblxcdFxcdFxcdGludkNvbG9yID0gdmVjMygxLjApIC0gY29sb3I7XFxyXFxuXFx0XFx0XFx0dmVjMyBpbnZTY2FubGluZXMgPSB2ZWMzKDEuMCkgLSBzY2FubGluZXM7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Y29sb3IgPSB2ZWMzKDEuMCkgLSBpbnZDb2xvciAqIGludlNjYW5saW5lcztcXHJcXG5cXHJcXG5cXHRcXHQjZWxzZVxcclxcblxcclxcblxcdFxcdFxcdGNvbG9yICs9IHNjYW5saW5lcztcXHJcXG5cXHJcXG5cXHRcXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjaWZkZWYgR1JFWVNDQUxFXFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IgPSBtaXgoY29sb3IsIHZlYzMoZG90KGNvbG9yLCBMVU1fQ09FRkYpKSwgZ3JleXNjYWxlSW50ZW5zaXR5KTtcXHJcXG5cXHJcXG5cXHQjZWxpZiBkZWZpbmVkKFNFUElBKVxcclxcblxcclxcblxcdFxcdHZlYzMgYyA9IGNvbG9yLnJnYjtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvci5yID0gZG90KGMsIHZlYzMoMS4wIC0gMC42MDcgKiBzZXBpYUludGVuc2l0eSwgMC43NjkgKiBzZXBpYUludGVuc2l0eSwgMC4xODkgKiBzZXBpYUludGVuc2l0eSkpO1xcclxcblxcdFxcdGNvbG9yLmcgPSBkb3QoYywgdmVjMygwLjM0OSAqIHNlcGlhSW50ZW5zaXR5LCAxLjAgLSAwLjMxNCAqIHNlcGlhSW50ZW5zaXR5LCAwLjE2OCAqIHNlcGlhSW50ZW5zaXR5KSk7XFxyXFxuXFx0XFx0Y29sb3IuYiA9IGRvdChjLCB2ZWMzKDAuMjcyICogc2VwaWFJbnRlbnNpdHksIDAuNTM0ICogc2VwaWFJbnRlbnNpdHksIDEuMCAtIDAuODY5ICogc2VwaWFJbnRlbnNpdHkpKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQjaWZkZWYgVklHTkVUVEVcXHJcXG5cXHJcXG5cXHRcXHRjb25zdCB2ZWMyIENFTlRFUiA9IHZlYzIoMC41KTtcXHJcXG5cXHJcXG5cXHRcXHQjaWZkZWYgRVNLSUxcXHJcXG5cXHJcXG5cXHRcXHRcXHR2ZWMyIHV2ID0gKHZVdiAtIENFTlRFUikgKiB2ZWMyKHZpZ25ldHRlT2Zmc2V0KTtcXHJcXG5cXHRcXHRcXHRjb2xvciA9IG1peChjb2xvci5yZ2IsIHZlYzMoMS4wIC0gdmlnbmV0dGVEYXJrbmVzcyksIGRvdCh1diwgdXYpKTtcXHJcXG5cXHJcXG5cXHRcXHQjZWxzZVxcclxcblxcclxcblxcdFxcdFxcdGZsb2F0IGRpc3QgPSBkaXN0YW5jZSh2VXYsIENFTlRFUik7XFxyXFxuXFx0XFx0XFx0Y29sb3IgKj0gc21vb3Roc3RlcCgwLjgsIHZpZ25ldHRlT2Zmc2V0ICogMC43OTksIGRpc3QgKiAodmlnbmV0dGVEYXJrbmVzcyArIHZpZ25ldHRlT2Zmc2V0KSk7XFxyXFxuXFxyXFxuXFx0XFx0I2VuZGlmXFx0XFx0XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChjbGFtcChjb2xvciwgMC4wLCAxLjApLCB0ZXhlbC5hKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBjaW5lbWF0aWMgc2hhZGVyIHRoYXQgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBlZmZlY3RzOlxyXG4gKiAgLSBGaWxtIEdyYWluXHJcbiAqICAtIFNjYW5saW5lc1xyXG4gKiAgLSBWaWduZXR0ZVxyXG4gKiAgLSBHcmV5c2NhbGVcclxuICogIC0gU2VwaWFcclxuICpcclxuICogT3JpZ2luYWwgc2NhbmxpbmVzIGFsZ29yaXRobSBieSBQYXQgXCJIYXd0aG9ybmVcIiBTaGVhcm9uLlxyXG4gKiAgaHR0cDovL3d3dy50cnVldmlzaW9uM2QuY29tL2ZvcnVtcy9zaG93Y2FzZS9zdGF0aWNub2lzZV9jb2xvcmJsYWNrd2hpdGVfc2NhbmxpbmVfc2hhZGVycy10MTg2OTguMC5odG1sXHJcbiAqXHJcbiAqIE9wdGltaXNlZCBzY2FubGluZXMgYW5kIG5vaXNlIHdpdGggaW50ZW5zaXR5IHNjYWxpbmcgYnkgR2VvcmcgXCJMZXZpYXRoYW5cIlxyXG4gKiBTdGVpbnJvaGRlci4gVGhpcyB2ZXJzaW9uIHdhcyBwcm92aWRlZCB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb25cclxuICogMy4wIExpY2Vuc2U6IGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC5cclxuICpcclxuICogVGhlIHNlcGlhIGVmZmVjdCBpcyBiYXNlZCBvbjpcclxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9nbGZ4LmpzXHJcbiAqXHJcbiAqIFRoZSB2aWduZXR0ZSBjb2RlIGlzIGJhc2VkIG9uIFBhaW50RWZmZWN0IHBvc3Rwcm9jZXNzIGZyb20gcm8ubWU6XHJcbiAqICBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvMy1kcmVhbXMtb2YtYmxhY2svc291cmNlL2Jyb3dzZS9kZXBsb3kvanMvZWZmZWN0cy9QYWludEVmZmVjdC5qc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxtTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZmlsbSBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy4gRGlzYWJsZWQgZWZmZWN0cyB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgc2hhZGVyIGFuZCBoYXZlIG5vIG5lZ2F0aXZlIGltcGFjdCBvbiBwZXJmb3JtYW5jZS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmdyZXlzY2FsZT1mYWxzZV0gLSBFbmFibGUgZ3JleXNjYWxlIGVmZmVjdC4gR3JleXNjYWxlIGFuZCBzZXBpYSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2VwaWE9ZmFsc2VdIC0gRW5hYmxlIHNlcGlhIGVmZmVjdC4gR3JleXNjYWxlIGFuZCBzZXBpYSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlnbmV0dGU9ZmFsc2VdIC0gQXBwbHkgdmlnbmV0dGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZXNraWw9ZmFsc2VdIC0gVXNlIEVza2lsJ3MgdmlnbmV0dGUgYXBwcm9hY2guIFRoZSBkZWZhdWx0IGxvb2tzIGR1c3R5IHdoaWxlIEVza2lsIGxvb2tzIGJ1cm5lZCBvdXQuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zY3JlZW5Nb2RlPXRydWVdIC0gV2hldGhlciB0aGUgc2NyZWVuIGJsZW5kIG1vZGUgc2hvdWxkIGJlIHVzZWQgZm9yIG5vaXNlIGFuZCBzY2FubGluZXMuIEJvdGggb2YgdGhlc2UgZWZmZWN0cyBhcmUgY29tcHV0ZWQgaW5kZXBlbmRlbnRseS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vaXNlPXRydWVdIC0gU2hvdyBub2lzZS1iYXNlZCBmaWxtIGdyYWluLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2NhbmxpbmVzPXRydWVdIC0gU2hvdyBzY2FubGluZXMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm5vaXNlSW50ZW5zaXR5PTAuNV0gLSBUaGUgbm9pc2UgaW50ZW5zaXR5LiAwLjAgdG8gMS4wLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zY2FubGluZUludGVuc2l0eT0wLjA1XSAtIFRoZSBzY2FubGluZSBpbnRlbnNpdHkuIDAuMCB0byAxLjAuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmdyZXlzY2FsZUludGVuc2l0eT0xLjBdIC0gVGhlIGludGVuc2l0eSBvZiB0aGUgZ3JleXNjYWxlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2VwaWFJbnRlbnNpdHk9MS4wXSAtIFRoZSBpbnRlbnNpdHkgb2YgdGhlIHNlcGlhIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudmlnbmV0dGVPZmZzZXQ9MS4wXSAtIFRoZSBvZmZzZXQgb2YgdGhlIHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudmlnbmV0dGVEYXJrbmVzcz0xLjBdIC0gVGhlIGRhcmtuZXNzIG9mIHRoZSB2aWduZXR0ZSBlZmZlY3QuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuc2NyZWVuTW9kZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2NyZWVuTW9kZSA9IHRydWU7IH1cclxuXHRcdGlmKG9wdGlvbnMubm9pc2UgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm5vaXNlID0gdHJ1ZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5zY2FubGluZXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNjYW5saW5lcyA9IHRydWU7IH1cclxuXHJcblx0XHRpZihvcHRpb25zLmdyZXlzY2FsZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuZ3JleXNjYWxlID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMuc2VwaWEgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnNlcGlhID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMudmlnbmV0dGUgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnZpZ25ldHRlID0gZmFsc2U7IH1cclxuXHRcdGlmKG9wdGlvbnMuZXNraWwgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLmVza2lsID0gZmFsc2U7IH1cclxuXHJcblx0XHRpZihvcHRpb25zLm5vaXNlSW50ZW5zaXR5ID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5ub2lzZUludGVuc2l0eSA9IDAuNTsgfVxyXG5cdFx0aWYob3B0aW9ucy5zY2FubGluZUludGVuc2l0eSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuc2NhbmxpbmVJbnRlbnNpdHkgPSAwLjA1OyB9XHJcblx0XHRpZihvcHRpb25zLmdyZXlzY2FsZUludGVuc2l0eSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMuZ3JleXNjYWxlSW50ZW5zaXR5ID0gMS4wOyB9XHJcblx0XHRpZihvcHRpb25zLnNlcGlhSW50ZW5zaXR5ID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5zZXBpYUludGVuc2l0eSA9IDEuMDsgfVxyXG5cclxuXHRcdGlmKG9wdGlvbnMudmlnbmV0dGVPZmZzZXQgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnZpZ25ldHRlT2Zmc2V0ID0gMS4wOyB9XHJcblx0XHRpZihvcHRpb25zLnZpZ25ldHRlRGFya25lc3MgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLnZpZ25ldHRlRGFya25lc3MgPSAxLjA7IH1cclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkZpbG1NYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHRpbWU6IG5ldyBVbmlmb3JtKDAuMCksXHJcblxyXG5cdFx0XHRcdG5vaXNlSW50ZW5zaXR5OiBuZXcgVW5pZm9ybShvcHRpb25zLm5vaXNlSW50ZW5zaXR5KSxcclxuXHRcdFx0XHRzY2FubGluZUludGVuc2l0eTogbmV3IFVuaWZvcm0ob3B0aW9ucy5zY2FubGluZUludGVuc2l0eSksXHJcblx0XHRcdFx0c2NhbmxpbmVDb3VudDogbmV3IFVuaWZvcm0oMC4wKSxcclxuXHJcblx0XHRcdFx0Z3JleXNjYWxlSW50ZW5zaXR5OiBuZXcgVW5pZm9ybShvcHRpb25zLmdyZXlzY2FsZUludGVuc2l0eSksXHJcblx0XHRcdFx0c2VwaWFJbnRlbnNpdHk6IG5ldyBVbmlmb3JtKG9wdGlvbnMuc2VwaWFJbnRlbnNpdHkpLFxyXG5cclxuXHRcdFx0XHR2aWduZXR0ZU9mZnNldDogbmV3IFVuaWZvcm0ob3B0aW9ucy52aWduZXR0ZU9mZnNldCksXHJcblx0XHRcdFx0dmlnbmV0dGVEYXJrbmVzczogbmV3IFVuaWZvcm0ob3B0aW9ucy52aWduZXR0ZURhcmtuZXNzKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuZ3JleXNjYWxlKSB7IHRoaXMuZGVmaW5lcy5HUkVZU0NBTEUgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5zZXBpYSkgeyB0aGlzLmRlZmluZXMuU0VQSUEgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy52aWduZXR0ZSkgeyB0aGlzLmRlZmluZXMuVklHTkVUVEUgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5lc2tpbCkgeyB0aGlzLmRlZmluZXMuRVNLSUwgPSBcIjFcIjsgfVxyXG5cclxuXHRcdGlmKG9wdGlvbnMuc2NyZWVuTW9kZSkgeyB0aGlzLmRlZmluZXMuU0NSRUVOX01PREUgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5ub2lzZSkgeyB0aGlzLmRlZmluZXMuTk9JU0UgPSBcIjFcIjsgfVxyXG5cdFx0aWYob3B0aW9ucy5zY2FubGluZXMpIHsgdGhpcy5kZWZpbmVzLlNDQU5MSU5FUyA9IFwiMVwiOyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0gfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0UGVydHVyYjtcXHJcXG5cXHJcXG51bmlmb3JtIGJvb2wgYWN0aXZlO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgYW1vdW50O1xcclxcbnVuaWZvcm0gZmxvYXQgYW5nbGU7XFxyXFxudW5pZm9ybSBmbG9hdCBzZWVkO1xcclxcbnVuaWZvcm0gZmxvYXQgc2VlZFg7XFxyXFxudW5pZm9ybSBmbG9hdCBzZWVkWTtcXHJcXG51bmlmb3JtIGZsb2F0IGRpc3RvcnRpb25YO1xcclxcbnVuaWZvcm0gZmxvYXQgZGlzdG9ydGlvblk7XFxyXFxudW5pZm9ybSBmbG9hdCBjb2xTO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxuZmxvYXQgcmFuZCh2ZWMyIHRjKSB7XFxyXFxuXFxyXFxuXFx0Y29uc3QgZmxvYXQgYSA9IDEyLjk4OTg7XFxyXFxuXFx0Y29uc3QgZmxvYXQgYiA9IDc4LjIzMztcXHJcXG5cXHRjb25zdCBmbG9hdCBjID0gNDM3NTguNTQ1MztcXHJcXG5cXHJcXG5cXHRmbG9hdCBkdCA9IGRvdCh0YywgdmVjMihhLCBiKSk7XFxyXFxuXFx0ZmxvYXQgc24gPSBtb2QoZHQsIDMuMTQpO1xcclxcblxcclxcblxcdHJldHVybiBmcmFjdChzaW4oc24pICogYyk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWMyIGNvb3JkID0gdlV2O1xcclxcblxcclxcblxcdGZsb2F0IHhzLCB5cztcXHJcXG5cXHR2ZWM0IG5vcm1hbDtcXHJcXG5cXHJcXG5cXHR2ZWMyIG9mZnNldDtcXHJcXG5cXHR2ZWM0IGNyLCBjZ2EsIGNiO1xcclxcblxcdHZlYzQgc25vdywgY29sb3I7XFxyXFxuXFxyXFxuXFx0ZmxvYXQgc3gsIHN5O1xcclxcblxcclxcblxcdGlmKGFjdGl2ZSkge1xcclxcblxcclxcblxcdFxcdHhzID0gZmxvb3IoZ2xfRnJhZ0Nvb3JkLnggLyAwLjUpO1xcclxcblxcdFxcdHlzID0gZmxvb3IoZ2xfRnJhZ0Nvb3JkLnkgLyAwLjUpO1xcclxcblxcclxcblxcdFxcdG5vcm1hbCA9IHRleHR1cmUyRCh0UGVydHVyYiwgY29vcmQgKiBzZWVkICogc2VlZCk7XFxyXFxuXFxyXFxuXFx0XFx0aWYoY29vcmQueSA8IGRpc3RvcnRpb25YICsgY29sUyAmJiBjb29yZC55ID4gZGlzdG9ydGlvblggLSBjb2xTICogc2VlZCkge1xcclxcblxcclxcblxcdFxcdFxcdHN4ID0gY2xhbXAoY2VpbChzZWVkWCksIDAuMCwgMS4wKTtcXHJcXG5cXHRcXHRcXHRjb29yZC55ID0gc3ggKiAoMS4wIC0gKGNvb3JkLnkgKyBkaXN0b3J0aW9uWSkpICsgKDEuMCAtIHN4KSAqIGRpc3RvcnRpb25ZO1xcclxcblxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRpZihjb29yZC54IDwgZGlzdG9ydGlvblkgKyBjb2xTICYmIGNvb3JkLnggPiBkaXN0b3J0aW9uWSAtIGNvbFMgKiBzZWVkKSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0c3kgPSBjbGFtcChjZWlsKHNlZWRZKSwgMC4wLCAxLjApO1xcclxcblxcdFxcdFxcdGNvb3JkLnggPSBzeSAqIGRpc3RvcnRpb25YICsgKDEuMCAtIHN5KSAqICgxLjAgLSAoY29vcmQueCArIGRpc3RvcnRpb25YKSk7XFxyXFxuXFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGNvb3JkLnggKz0gbm9ybWFsLnggKiBzZWVkWCAqIChzZWVkIC8gNS4wKTtcXHJcXG5cXHRcXHRjb29yZC55ICs9IG5vcm1hbC55ICogc2VlZFkgKiAoc2VlZCAvIDUuMCk7XFxyXFxuXFxyXFxuXFx0XFx0b2Zmc2V0ID0gYW1vdW50ICogdmVjMihjb3MoYW5nbGUpLCBzaW4oYW5nbGUpKTtcXHJcXG5cXHJcXG5cXHRcXHRjciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgY29vcmQgKyBvZmZzZXQpO1xcclxcblxcdFxcdGNnYSA9IHRleHR1cmUyRCh0RGlmZnVzZSwgY29vcmQpO1xcclxcblxcdFxcdGNiID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZCAtIG9mZnNldCk7XFxyXFxuXFxyXFxuXFx0XFx0Y29sb3IgPSB2ZWM0KGNyLnIsIGNnYS5nLCBjYi5iLCBjZ2EuYSk7XFxyXFxuXFx0XFx0c25vdyA9IDIwMC4wICogYW1vdW50ICogdmVjNChyYW5kKHZlYzIoeHMgKiBzZWVkLCB5cyAqIHNlZWQgKiA1MC4wKSkgKiAwLjIpO1xcclxcblxcdFxcdGNvbG9yICs9IHNub3c7XFxyXFxuXFxyXFxuXFx0fSBlbHNlIHtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2xpdGNoIHNoYWRlciBtYXRlcmlhbC5cclxuICpcclxuICogUmVmZXJlbmNlOlxyXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL3N0YWZmYW50YW4vdW5pdHlnbGl0Y2hcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgR2xpdGNoTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZ2xpdGNoIG1hdGVyaWFsLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkdsaXRjaE1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dFBlcnR1cmI6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRhY3RpdmU6IG5ldyBVbmlmb3JtKDEpLFxyXG5cclxuXHRcdFx0XHRhbW91bnQ6IG5ldyBVbmlmb3JtKDAuOCksXHJcblx0XHRcdFx0YW5nbGU6IG5ldyBVbmlmb3JtKDAuMDIpLFxyXG5cdFx0XHRcdHNlZWQ6IG5ldyBVbmlmb3JtKDAuMDIpLFxyXG5cdFx0XHRcdHNlZWRYOiBuZXcgVW5pZm9ybSgwLjAyKSxcclxuXHRcdFx0XHRzZWVkWTogbmV3IFVuaWZvcm0oMC4wMiksXHJcblx0XHRcdFx0ZGlzdG9ydGlvblg6IG5ldyBVbmlmb3JtKDAuNSksXHJcblx0XHRcdFx0ZGlzdG9ydGlvblk6IG5ldyBVbmlmb3JtKDAuNiksXHJcblx0XHRcdFx0Y29sUzogbmV3IFVuaWZvcm0oMC4wNSlcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gdmVjMyBsaWdodFBvc2l0aW9uO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgZXhwb3N1cmU7XFxyXFxudW5pZm9ybSBmbG9hdCBkZWNheTtcXHJcXG51bmlmb3JtIGZsb2F0IGRlbnNpdHk7XFxyXFxudW5pZm9ybSBmbG9hdCB3ZWlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCBjbGFtcE1heDtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2ZWMyIHRleENvb3JkID0gdlV2O1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSB2ZWN0b3IgZnJvbSBwaXhlbCB0byBsaWdodCBzb3VyY2UgaW4gc2NyZWVuIHNwYWNlLlxcclxcblxcdHZlYzIgZGVsdGFUZXhDb29yZCA9IHRleENvb3JkIC0gbGlnaHRQb3NpdGlvbi5zdDtcXHJcXG5cXHRkZWx0YVRleENvb3JkICo9IDEuMCAvIE5VTV9TQU1QTEVTX0ZMT0FUICogZGVuc2l0eTtcXHJcXG5cXHJcXG5cXHQvLyBBIGRlY3JlYXNpbmcgaWxsdW1pbmF0aW9uIGZhY3Rvci5cXHJcXG5cXHRmbG9hdCBpbGx1bWluYXRpb25EZWNheSA9IDEuMDtcXHJcXG5cXHJcXG5cXHR2ZWM0IHNhbXBsZTtcXHJcXG5cXHR2ZWM0IGNvbG9yID0gdmVjNCgwLjApO1xcclxcblxcclxcblxcdC8vIEVzdGltYXRlIHRoZSBwcm9iYWJpbGl0eSBvZiBvY2NsdXNpb24gYXQgZWFjaCBwaXhlbCBieSBzdW1taW5nIHNhbXBsZXMgYWxvbmcgYSByYXkgdG8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG5cXHRmb3IoaW50IGkgPSAwOyBpIDwgTlVNX1NBTVBMRVNfSU5UOyArK2kpIHtcXHJcXG5cXHJcXG5cXHRcXHR0ZXhDb29yZCAtPSBkZWx0YVRleENvb3JkO1xcclxcblxcdFxcdHNhbXBsZSA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdGV4Q29vcmQpO1xcclxcblxcclxcblxcdFxcdC8vIEFwcGx5IHNhbXBsZSBhdHRlbnVhdGlvbiBzY2FsZS9kZWNheSBmYWN0b3JzLlxcclxcblxcdFxcdHNhbXBsZSAqPSBpbGx1bWluYXRpb25EZWNheSAqIHdlaWdodDtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciArPSBzYW1wbGU7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gVXBkYXRlIGV4cG9uZW50aWFsIGRlY2F5IGZhY3Rvci5cXHJcXG5cXHRcXHRpbGx1bWluYXRpb25EZWNheSAqPSBkZWNheTtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY2xhbXAoY29sb3IgKiBleHBvc3VyZSwgMC4wLCBjbGFtcE1heCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY3JlcHVzY3VsYXIgcmF5cyBzaGFkZXIgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIFJlZmVyZW5jZXM6XHJcbiAqXHJcbiAqIFRoaWJhdXQgRGVzcG91bGFpbiwgMjAxMjpcclxuICogIFsoV2ViR0wpIFZvbHVtZXRyaWMgTGlnaHQgQXBwcm94aW1hdGlvbiBpbiBUaHJlZS5qc10oXHJcbiAqICBodHRwOi8vYmtjb3JlLmNvbS9ibG9nLzNkL3dlYmdsLXRocmVlLWpzLXZvbHVtZXRyaWMtbGlnaHQtZ29kcmF5cy5odG1sKVxyXG4gKlxyXG4gKiBOdmlkaWEsIEdQVSBHZW1zIDMsIDIwMDg6XHJcbiAqICBbQ2hhcHRlciAxMy4gVm9sdW1ldHJpYyBMaWdodCBTY2F0dGVyaW5nIGFzIGEgUG9zdC1Qcm9jZXNzXShcclxuICogIGh0dHBzOi8vZGV2ZWxvcGVyLm52aWRpYS5jb20vZ3B1Z2Vtcy9HUFVHZW1zMy9ncHVnZW1zM19jaDEzLmh0bWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvZFJheXNNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBnb2QgcmF5cyBtYXRlcmlhbC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJHb2RSYXlzTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdGRlZmluZXM6IHtcclxuXHJcblx0XHRcdFx0TlVNX1NBTVBMRVNfRkxPQVQ6IFwiNjAuMFwiLFxyXG5cdFx0XHRcdE5VTV9TQU1QTEVTX0lOVDogXCI2MFwiXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdGxpZ2h0UG9zaXRpb246IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRleHBvc3VyZTogbmV3IFVuaWZvcm0oMC42KSxcclxuXHRcdFx0XHRkZWNheTogbmV3IFVuaWZvcm0oMC45MyksXHJcblx0XHRcdFx0ZGVuc2l0eTogbmV3IFVuaWZvcm0oMC45NiksXHJcblx0XHRcdFx0d2VpZ2h0OiBuZXcgVW5pZm9ybSgwLjQpLFxyXG5cdFx0XHRcdGNsYW1wTWF4OiBuZXcgVW5pZm9ybSgxLjApXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIGZsb2F0IGRpc3RpbmN0aW9uO1xcclxcbnVuaWZvcm0gdmVjMiByYW5nZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHRjb25zdCB2ZWM0IExVTV9DT0VGRiA9IHZlYzQoMC4yOTksIDAuNTg3LCAwLjExNCwgMC4wKTtcXHJcXG5cXHJcXG5cXHR2ZWM0IHRleGVsID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcclxcblxcdGZsb2F0IHYgPSBkb3QodGV4ZWwsIExVTV9DT0VGRik7XFxyXFxuXFxyXFxuXFx0I2lmZGVmIFJBTkdFXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgbG93ID0gc3RlcChyYW5nZS54LCB2KTtcXHJcXG5cXHRcXHRmbG9hdCBoaWdoID0gc3RlcCh2LCByYW5nZS55KTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBBcHBseSB0aGUgbWFzay5cXHJcXG5cXHRcXHR2ICo9IGxvdyAqIGhpZ2g7XFxyXFxuXFxyXFxuXFx0I2VuZGlmXFxyXFxuXFxyXFxuXFx0diA9IHBvdyhhYnModiksIGRpc3RpbmN0aW9uKTtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgQ09MT1JcXHJcXG5cXHJcXG5cXHRcXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsLnJnYiAqIHYsIHRleGVsLmEpO1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCh2LCB2LCB2LCB0ZXhlbC5hKTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcbmNvbnN0IHZlcnRleCA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogQSBsdW1pbm9zaXR5IHNoYWRlciBtYXRlcmlhbC5cclxuICpcclxuICogVGhpcyBzaGFkZXIgcHJvZHVjZXMgYSBncmV5c2NhbGUgbHVtaW5hbmNlIG1hcC4gSXQgY2FuIGFsc28gYmUgY29uZmlndXJlZCB0b1xyXG4gKiBvdXRwdXQgY29sb3VycyB0aGF0IGFyZSBzY2FsZWQgd2l0aCB0aGVpciByZXNwZWN0aXZlIGx1bWluYW5jZSB2YWx1ZS5cclxuICogQWRkaXRpb25hbGx5LCBhIHJhbmdlIG1heSBiZSBwcm92aWRlZCB0byBtYXNrIG91dCB1bmRlc2lyZWQgdGV4ZWxzLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgY2hhbm5lbCB3aWxsIHJlbWFpbiB1bmFmZmVjdGVkIGluIGFsbCBjYXNlcy5cclxuICpcclxuICogTHVtaW5hbmNlIHJhbmdlIHJlZmVyZW5jZTpcclxuICogIGh0dHBzOi8vY3ljbGluZzc0LmNvbS8yMDA3LzA1LzIzL3lvdXItZmlyc3Qtc2hhZGVyLyMuVnR5OUZma3JMNFpcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTHVtaW5vc2l0eU1hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGx1bWlub3NpdHkgbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb2xvcj1mYWxzZV0gLSBEZWZpbmVzIHdoZXRoZXIgdGhlIHNoYWRlciBzaG91bGQgb3V0cHV0IGNvbG91cnMgc2NhbGVkIHdpdGggdGhlaXIgbHVtaW5hbmNlIHZhbHVlLlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW3JhbmdlXSAtIElmIHByb3ZpZGVkLCB0aGUgc2hhZGVyIHdpbGwgbWFzayBvdXQgdGV4ZWxzIHRoYXQgYXJlbid0IGluIHRoZSBzcGVjaWZpZWQgbHVtaW5hbmNlIHJhbmdlLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb2xvciA9IGZhbHNlLCByYW5nZSA9IG51bGwpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIkx1bWlub3NpdHlNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdGRpc3RpbmN0aW9uOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdHJhbmdlOiBuZXcgVW5pZm9ybSgocmFuZ2UgIT09IG51bGwpID8gcmFuZ2UgOiBuZXcgVmVjdG9yMigpKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXhcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZihjb2xvcikgeyB0aGlzLmRlZmluZXMuQ09MT1IgPSBcIjFcIjsgfVxyXG5cdFx0aWYocmFuZ2UgIT09IG51bGwpIHsgdGhpcy5kZWZpbmVzLlJBTkdFID0gXCIxXCI7IH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgVW5pZm9ybSwgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gZmxvYXQgZ3JhbnVsYXJpdHk7XFxyXFxudW5pZm9ybSBmbG9hdCBkeDtcXHJcXG51bmlmb3JtIGZsb2F0IGR5O1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWw7XFxyXFxuXFxyXFxuXFx0aWYoZ3JhbnVsYXJpdHkgPiAwLjApIHtcXHJcXG5cXHJcXG5cXHRcXHR2ZWMyIGNvb3JkID0gdmVjMihcXHJcXG5cXHRcXHRcXHRkeCAqIChmbG9vcih2VXYueCAvIGR4KSArIDAuNSksXFxyXFxuXFx0XFx0XFx0ZHkgKiAoZmxvb3IodlV2LnkgLyBkeSkgKyAwLjUpXFxyXFxuXFx0XFx0KTtcXHJcXG5cXHJcXG5cXHRcXHR0ZXhlbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgY29vcmQpO1xcclxcblxcclxcblxcdH0gZWxzZSB7XFxyXFxuXFxyXFxuXFx0XFx0dGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IHRleGVsO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBpeGVsYXRpb24gc2hhZGVyIG1hdGVyaWFsLlxyXG4gKlxyXG4gKiBPcmlnaW5hbCBzaGFkZXIgY29kZSBieSBSb2JlcnQgQ2FzYW5vdmE6XHJcbiAqICBodHRwczovL2dpdGh1Yi5jb20vcm9iZXJ0Y2FzYW5vdmEvcGl4ZWxhdGUtc2hhZGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBpeGVsYXRpb25NYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBwaXhlbGF0aW9uIG1hdGVyaWFsLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIlBpeGVsYXRpb25NYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdGdyYW51bGFyaXR5OiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdHJlc29sdXRpb246IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKDEuMCwgMS4wKSksXHJcblx0XHRcdFx0ZHg6IG5ldyBVbmlmb3JtKDEuMCksXHJcblx0XHRcdFx0ZHk6IG5ldyBVbmlmb3JtKDEuMClcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgcGl4ZWwgZ3JhbnVsYXJpdHkuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgZ3JhbnVsYXJpdHkoKSB7IHJldHVybiB0aGlzLnVuaWZvcm1zLmdyYW51bGFyaXR5LnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgaGlnaGVyIHZhbHVlIHlpZWxkcyBjb2Fyc2VyIHZpc3VhbHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgZ3JhbnVsYXJpdHkoeCkge1xyXG5cclxuXHRcdGNvbnN0IHVuaWZvcm1zID0gdGhpcy51bmlmb3JtcztcclxuXHRcdGNvbnN0IHJlc29sdXRpb24gPSB1bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlO1xyXG5cclxuXHRcdHVuaWZvcm1zLmdyYW51bGFyaXR5LnZhbHVlID0geDtcclxuXHRcdHVuaWZvcm1zLmR4LnZhbHVlID0geCAvIHJlc29sdXRpb24ueDtcclxuXHRcdHVuaWZvcm1zLmR5LnZhbHVlID0geCAvIHJlc29sdXRpb24ueTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSByZXNvbHV0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRSZXNvbHV0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5ncmFudWxhcml0eSA9IHRoaXMuZ3JhbnVsYXJpdHk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwsIFVuaWZvcm0sIFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGZyYWdtZW50ID0gXCIjaW5jbHVkZSA8Y29tbW9uPlxcclxcblxcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcclxcbnVuaWZvcm0gdmVjMiBjZW50ZXI7XFxyXFxudW5pZm9ybSBmbG9hdCBhc3BlY3Q7XFxyXFxudW5pZm9ybSBmbG9hdCB3YXZlU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHJhZGl1cztcXHJcXG51bmlmb3JtIGZsb2F0IG1heFJhZGl1cztcXHJcXG51bmlmb3JtIGZsb2F0IGFtcGxpdHVkZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgZmxvYXQgdlNpemU7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzIgYXNwZWN0Q29ycmVjdGlvbiA9IHZlYzIoYXNwZWN0LCAxLjApO1xcclxcblxcclxcblxcdHZlYzIgZGlmZmVyZW5jZSA9IHZVdiAqIGFzcGVjdENvcnJlY3Rpb24gLSBjZW50ZXIgKiBhc3BlY3RDb3JyZWN0aW9uO1xcclxcblxcdGZsb2F0IGRpc3RhbmNlID0gc3FydChkb3QoZGlmZmVyZW5jZSwgZGlmZmVyZW5jZSkpICogdlNpemU7XFxyXFxuXFxyXFxuXFx0dmVjMiBkaXNwbGFjZW1lbnQgPSB2ZWMyKDAuMCk7XFxyXFxuXFxyXFxuXFx0aWYoZGlzdGFuY2UgPiByYWRpdXMpIHtcXHJcXG5cXHJcXG5cXHRcXHRpZihkaXN0YW5jZSA8IHJhZGl1cyArIHdhdmVTaXplKSB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0ZmxvYXQgYW5nbGUgPSAoZGlzdGFuY2UgLSByYWRpdXMpICogUEkyIC8gd2F2ZVNpemU7XFxyXFxuXFx0XFx0XFx0ZmxvYXQgY29zU2luID0gKDEuMCAtIGNvcyhhbmdsZSkpICogMC41O1xcclxcblxcclxcblxcdFxcdFxcdGZsb2F0IGV4dGVudCA9IG1heFJhZGl1cyArIHdhdmVTaXplO1xcclxcblxcdFxcdFxcdGZsb2F0IGRlY2F5ID0gbWF4KGV4dGVudCAtIGRpc3RhbmNlICogZGlzdGFuY2UsIDAuMCkgLyBleHRlbnQ7XFxyXFxuXFxyXFxuXFx0XFx0XFx0ZGlzcGxhY2VtZW50ID0gKChjb3NTaW4gKiBhbXBsaXR1ZGUgKiBkaWZmZXJlbmNlKSAvIGRpc3RhbmNlKSAqIGRlY2F5O1xcclxcblxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYgLSBkaXNwbGFjZW1lbnQpO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ1bmlmb3JtIGZsb2F0IHNpemU7XFxyXFxudW5pZm9ybSBmbG9hdCBzY2FsZTtcXHJcXG51bmlmb3JtIGZsb2F0IGNhbWVyYURpc3RhbmNlO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyBmbG9hdCB2U2l6ZTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dlV2ID0gdXY7XFxyXFxuXFx0dlNpemUgPSAoMC4xICogY2FtZXJhRGlzdGFuY2UpIC8gc2l6ZTtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBBIHNob2NrIHdhdmUgc2hhZGVyIG1hdGVyaWFsLlxyXG4gKlxyXG4gKiBCYXNlZCBvbiBhIEdpc3QgYnkgSmVhbi1QaGlsaXBwZSBTYXJkYTpcclxuICogIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pwc2FyZGEvMzNjZWE2N2E5ZjJlY2IwYTBlZGFcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU2hvY2tXYXZlTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgc2hvY2sgd2F2ZSBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2F2ZVNpemU9MC4yXSAtIFRoZSB3YXZlIHNpemUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmFtcGxpdHVkZT0wLjA1XSAtIFRoZSBkaXN0b3J0aW9uIGFtcGxpdHVkZS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5tYXhSYWRpdXMgPT09IHVuZGVmaW5lZCkgeyBvcHRpb25zLm1heFJhZGl1cyA9IDEuMDsgfVxyXG5cdFx0aWYob3B0aW9ucy53YXZlU2l6ZSA9PT0gdW5kZWZpbmVkKSB7IG9wdGlvbnMud2F2ZVNpemUgPSAwLjI7IH1cclxuXHRcdGlmKG9wdGlvbnMuYW1wbGl0dWRlID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucy5hbXBsaXR1ZGUgPSAwLjA1OyB9XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJTaG9ja1dhdmVNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cclxuXHRcdFx0XHRjZW50ZXI6IG5ldyBVbmlmb3JtKG5ldyBWZWN0b3IyKDAuNSwgMC41KSksXHJcblx0XHRcdFx0YXNwZWN0OiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdGNhbWVyYURpc3RhbmNlOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cclxuXHRcdFx0XHRzaXplOiBuZXcgVW5pZm9ybSgxLjApLFxyXG5cdFx0XHRcdHJhZGl1czogbmV3IFVuaWZvcm0oLW9wdGlvbnMud2F2ZVNpemUpLFxyXG5cdFx0XHRcdG1heFJhZGl1czogbmV3IFVuaWZvcm0ob3B0aW9ucy5tYXhSYWRpdXMpLFxyXG5cdFx0XHRcdHdhdmVTaXplOiBuZXcgVW5pZm9ybShvcHRpb25zLndhdmVTaXplKSxcclxuXHRcdFx0XHRhbXBsaXR1ZGU6IG5ldyBVbmlmb3JtKG9wdGlvbnMuYW1wbGl0dWRlKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3IyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdFdlaWdodHM7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcbnZhcnlpbmcgdmVjNCB2T2Zmc2V0O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHQvLyBGZXRjaCB0aGUgYmxlbmRpbmcgd2VpZ2h0cyBmb3IgY3VycmVudCBwaXhlbC5cXHJcXG5cXHR2ZWM0IGE7XFxyXFxuXFx0YS54eiA9IHRleHR1cmUyRCh0V2VpZ2h0cywgdlV2KS54ejtcXHJcXG5cXHRhLnkgPSB0ZXh0dXJlMkQodFdlaWdodHMsIHZPZmZzZXQuencpLmc7XFxyXFxuXFx0YS53ID0gdGV4dHVyZTJEKHRXZWlnaHRzLCB2T2Zmc2V0Lnh5KS5hO1xcclxcblxcclxcblxcdHZlYzQgY29sb3I7XFxyXFxuXFxyXFxuXFx0Ly8gQ2hlY2sgaWYgdGhlcmUgaXMgYW55IGJsZW5kaW5nIHdlaWdodCB3aXRoIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDAuMC5cXHJcXG5cXHRpZihkb3QoYSwgdmVjNCgxLjApKSA8IDFlLTUpIHtcXHJcXG5cXHJcXG5cXHRcXHRjb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2LCAwLjApO1xcclxcblxcclxcblxcdH0gZWxzZSB7XFxyXFxuXFxyXFxuXFx0XFx0LyogVXAgdG8gZm91ciBsaW5lcyBjYW4gYmUgY3Jvc3NpbmcgYSBwaXhlbCAob25lIHRocm91Z2ggZWFjaCBlZGdlKS4gV2UgZmF2b3JcXHJcXG5cXHRcXHQgKiBibGVuZGluZyBieSBjaG9vc2luZyB0aGUgbGluZSB3aXRoIHRoZSBtYXhpbXVtIHdlaWdodCBmb3IgZWFjaCBkaXJlY3Rpb24uXFxyXFxuXFx0XFx0ICovXFxyXFxuXFxyXFxuXFx0XFx0dmVjMiBvZmZzZXQ7XFxyXFxuXFx0XFx0b2Zmc2V0LnggPSBhLmEgPiBhLmIgPyBhLmEgOiAtYS5iOyAvLyBMZWZ0IHZzLiByaWdodC5cXHJcXG5cXHRcXHRvZmZzZXQueSA9IGEuZyA+IGEuciA/IC1hLmcgOiBhLnI7IC8vIFRvcCB2cy4gYm90dG9tIChjaGFuZ2VkIHNpZ25zKS5cXHJcXG5cXHJcXG5cXHRcXHQvLyBUaGVuIHdlIGdvIGluIHRoZSBkaXJlY3Rpb24gdGhhdCBoYXMgdGhlIG1heGltdW0gd2VpZ2h0IChob3Jpem9udGFsIHZzLiB2ZXJ0aWNhbCkuXFxyXFxuXFx0XFx0aWYoYWJzKG9mZnNldC54KSA+IGFicyhvZmZzZXQueSkpIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHRvZmZzZXQueSA9IDAuMDtcXHJcXG5cXHJcXG5cXHRcXHR9IGVsc2Uge1xcclxcblxcclxcblxcdFxcdFxcdG9mZnNldC54ID0gMC4wO1xcclxcblxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQvLyBGZXRjaCB0aGUgb3Bwb3NpdGUgY29sb3IgYW5kIGxlcnAgYnkgaGFuZC5cXHJcXG5cXHRcXHRjb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2LCAwLjApO1xcclxcblxcdFxcdHZlYzIgY29vcmQgPSB2VXYgKyBzaWduKG9mZnNldCkgKiB0ZXhlbFNpemU7XFxyXFxuXFx0XFx0dmVjNCBvcHBvc2l0ZUNvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZCwgMC4wKTtcXHJcXG5cXHRcXHRmbG9hdCBzID0gYWJzKG9mZnNldC54KSA+IGFicyhvZmZzZXQueSkgPyBhYnMob2Zmc2V0LngpIDogYWJzKG9mZnNldC55KTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBHYW1tYSBjb3JyZWN0aW9uLlxcclxcblxcdFxcdGNvbG9yLnJnYiA9IHBvdyhhYnMoY29sb3IucmdiKSwgdmVjMygyLjIpKTtcXHJcXG5cXHRcXHRvcHBvc2l0ZUNvbG9yLnJnYiA9IHBvdyhhYnMob3Bwb3NpdGVDb2xvci5yZ2IpLCB2ZWMzKDIuMikpO1xcclxcblxcdFxcdGNvbG9yID0gbWl4KGNvbG9yLCBvcHBvc2l0ZUNvbG9yLCBzKTtcXHJcXG5cXHRcXHRjb2xvci5yZ2IgPSBwb3coYWJzKGNvbG9yLnJnYiksIHZlYzMoMS4wIC8gMi4yKSk7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ1bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyB2ZWM0IHZPZmZzZXQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcclxcblxcdHZPZmZzZXQgPSB1di54eXh5ICsgdGV4ZWxTaXplLnh5eHkgKiB2ZWM0KDEuMCwgMC4wLCAwLjAsIC0xLjApOyAvLyBDaGFuZ2VkIHNpZ24gaW4gVyBjb21wb25lbnQuXFxyXFxuXFxyXFxuXFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXHJcXG5cXHJcXG59XFxyXFxuXCI7XHJcblxyXG4vKipcclxuICogU3VicGl4ZWwgTW9ycGhvbG9naWNhbCBBbnRpYWxpYXNpbmcuXHJcbiAqXHJcbiAqIFRoaXMgbWF0ZXJpYWwgaXMgdXNlZCB0byByZW5kZXIgdGhlIGZpbmFsIGFudGlhbGlhc2luZy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU01BQUJsZW5kTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgU01BQSBibGVuZCBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW3RleGVsU2l6ZV0gLSBUaGUgYWJzb2x1dGUgc2NyZWVuIHRleGVsIHNpemUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleGVsU2l6ZSA9IG5ldyBWZWN0b3IyKCkpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIlNNQUFCbGVuZE1hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XHR0RGlmZnVzZTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dFdlaWdodHM6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHRleGVsU2l6ZTogbmV3IFVuaWZvcm0odGV4ZWxTaXplKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3IyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzQgdk9mZnNldFszXTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0Y29uc3QgdmVjMiBUSFJFU0hPTEQgPSB2ZWMyKEVER0VfVEhSRVNIT0xEKTtcXHJcXG5cXHJcXG5cXHQvLyBDYWxjdWxhdGUgY29sb3IgZGVsdGFzLlxcclxcblxcdHZlYzQgZGVsdGE7XFxyXFxuXFx0dmVjMyBjID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcXHJcXG5cXHJcXG5cXHR2ZWMzIGNMZWZ0ID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2T2Zmc2V0WzBdLnh5KS5yZ2I7XFxyXFxuXFx0dmVjMyB0ID0gYWJzKGMgLSBjTGVmdCk7XFxyXFxuXFx0ZGVsdGEueCA9IG1heChtYXgodC5yLCB0LmcpLCB0LmIpO1xcclxcblxcclxcblxcdHZlYzMgY1RvcCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdk9mZnNldFswXS56dykucmdiO1xcclxcblxcdHQgPSBhYnMoYyAtIGNUb3ApO1xcclxcblxcdGRlbHRhLnkgPSBtYXgobWF4KHQuciwgdC5nKSwgdC5iKTtcXHJcXG5cXHJcXG5cXHQvLyBXZSBkbyB0aGUgdXN1YWwgdGhyZXNob2xkLlxcclxcblxcdHZlYzIgZWRnZXMgPSBzdGVwKFRIUkVTSE9MRCwgZGVsdGEueHkpO1xcclxcblxcclxcblxcdC8vIFRoZW4gZGlzY2FyZCBpZiB0aGVyZSBpcyBubyBlZGdlLlxcclxcblxcdGlmKGRvdChlZGdlcywgdmVjMigxLjApKSA9PSAwLjApIHtcXHJcXG5cXHJcXG5cXHRcXHRkaXNjYXJkO1xcclxcblxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyBDYWxjdWxhdGUgcmlnaHQgYW5kIGJvdHRvbSBkZWx0YXMuXFxyXFxuXFx0dmVjMyBjUmlnaHQgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZPZmZzZXRbMV0ueHkpLnJnYjtcXHJcXG5cXHR0ID0gYWJzKGMgLSBjUmlnaHQpO1xcclxcblxcdGRlbHRhLnogPSBtYXgobWF4KHQuciwgdC5nKSwgdC5iKTtcXHJcXG5cXHJcXG5cXHR2ZWMzIGNCb3R0b20gID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2T2Zmc2V0WzFdLnp3KS5yZ2I7XFxyXFxuXFx0dCA9IGFicyhjIC0gY0JvdHRvbSk7XFxyXFxuXFx0ZGVsdGEudyA9IG1heChtYXgodC5yLCB0LmcpLCB0LmIpO1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBkZWx0YSBpbiB0aGUgZGlyZWN0IG5laWdoYm9yaG9vZC5cXHJcXG5cXHRmbG9hdCBtYXhEZWx0YSA9IG1heChtYXgobWF4KGRlbHRhLngsIGRlbHRhLnkpLCBkZWx0YS56KSwgZGVsdGEudyk7XFxyXFxuXFxyXFxuXFx0Ly8gQ2FsY3VsYXRlIGxlZnQtbGVmdCBhbmQgdG9wLXRvcCBkZWx0YXMuXFxyXFxuXFx0dmVjMyBjTGVmdExlZnQgID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2T2Zmc2V0WzJdLnh5KS5yZ2I7XFxyXFxuXFx0dCA9IGFicyhjIC0gY0xlZnRMZWZ0KTtcXHJcXG5cXHRkZWx0YS56ID0gbWF4KG1heCh0LnIsIHQuZyksIHQuYik7XFxyXFxuXFxyXFxuXFx0dmVjMyBjVG9wVG9wID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2T2Zmc2V0WzJdLnp3KS5yZ2I7XFxyXFxuXFx0dCA9IGFicyhjIC0gY1RvcFRvcCk7XFxyXFxuXFx0ZGVsdGEudyA9IG1heChtYXgodC5yLCB0LmcpLCB0LmIpO1xcclxcblxcclxcblxcdC8vIENhbGN1bGF0ZSB0aGUgZmluYWwgbWF4aW11bSBkZWx0YS5cXHJcXG5cXHRtYXhEZWx0YSA9IG1heChtYXgobWF4RGVsdGEsIGRlbHRhLnopLCBkZWx0YS53KTtcXHJcXG5cXHJcXG5cXHQvLyBMb2NhbCBjb250cmFzdCBhZGFwdGF0aW9uIGluIGFjdGlvbi5cXHJcXG5cXHRlZGdlcy54eSAqPSBzdGVwKDAuNSAqIG1heERlbHRhLCBkZWx0YS54eSk7XFxyXFxuXFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChlZGdlcywgMC4wLCAwLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ1bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VXY7XFxyXFxudmFyeWluZyB2ZWM0IHZPZmZzZXRbM107XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZVdiA9IHV2O1xcclxcblxcclxcblxcdHZPZmZzZXRbMF0gPSB1di54eXh5ICsgdGV4ZWxTaXplLnh5eHkgKiB2ZWM0KC0xLjAsIDAuMCwgMC4wLCAxLjApOyAvLyBDaGFuZ2VkIHNpZ24gaW4gVyBjb21wb25lbnQuXFxyXFxuXFx0dk9mZnNldFsxXSA9IHV2Lnh5eHkgKyB0ZXhlbFNpemUueHl4eSAqIHZlYzQoMS4wLCAwLjAsIDAuMCwgLTEuMCk7IC8vIENoYW5nZWQgc2lnbiBpbiBXIGNvbXBvbmVudC5cXHJcXG5cXHR2T2Zmc2V0WzJdID0gdXYueHl4eSArIHRleGVsU2l6ZS54eXh5ICogdmVjNCgtMi4wLCAwLjAsIDAuMCwgMi4wKTsgLy8gQ2hhbmdlZCBzaWduIGluIFcgY29tcG9uZW50LlxcclxcblxcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIFN1YnBpeGVsIE1vcnBob2xvZ2ljYWwgQW50aWFsaWFzaW5nLlxyXG4gKlxyXG4gKiBUaGlzIG1hdGVyaWFsIGRldGVjdHMgZWRnZXMgaW4gYSBjb2xvciB0ZXh0dXJlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTTUFBQ29sb3JFZGdlc01hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IFNNQUEgY29sb3IgZWRnZXMgbWF0ZXJpYWwuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1ZlY3RvcjJ9IFt0ZXhlbFNpemVdIC0gVGhlIGFic29sdXRlIHNjcmVlbiB0ZXhlbCBzaXplLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXhlbFNpemUgPSBuZXcgVmVjdG9yMigpKSB7XHJcblxyXG5cdFx0c3VwZXIoe1xyXG5cclxuXHRcdFx0dHlwZTogXCJTTUFBQ29sb3JFZGdlc01hdGVyaWFsXCIsXHJcblxyXG5cdFx0XHRkZWZpbmVzOiB7XHJcblxyXG5cdFx0XHRcdEVER0VfVEhSRVNIT0xEOiBcIjAuMVwiXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdHRleGVsU2l6ZTogbmV3IFVuaWZvcm0odGV4ZWxTaXplKVxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblxyXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhUZXN0OiBmYWxzZVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtLCBWZWN0b3IyIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgYXJlYUltYWdlIGZyb20gXCIuL2ltYWdlcy9zbWFhL2FyZWEtaW1hZ2UuanNcIjtcclxuaW1wb3J0IHNlYXJjaEltYWdlIGZyb20gXCIuL2ltYWdlcy9zbWFhL3NlYXJjaC1pbWFnZS5qc1wiO1xyXG5cclxuY29uc3QgZnJhZ21lbnQgPSBcIiNkZWZpbmUgc2FtcGxlTGV2ZWxaZXJvT2Zmc2V0KHQsIGNvb3JkLCBvZmZzZXQpIHRleHR1cmUyRCh0LCBjb29yZCArIGZsb2F0KG9mZnNldCkgKiB0ZXhlbFNpemUsIDAuMClcXHJcXG5cXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0QXJlYTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB0U2VhcmNoO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzQgdk9mZnNldFszXTtcXHJcXG52YXJ5aW5nIHZlYzIgdlBpeENvb3JkO1xcclxcblxcclxcbnZlYzIgcm91bmQodmVjMiB4KSB7XFxyXFxuXFxyXFxuXFx0cmV0dXJuIHNpZ24oeCkgKiBmbG9vcihhYnMoeCkgKyAwLjUpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBzZWFyY2hMZW5ndGgodmVjMiBlLCBmbG9hdCBiaWFzLCBmbG9hdCBzY2FsZSkge1xcclxcblxcclxcblxcdC8vIE5vdCByZXF1aXJlZCBpZiB0U2VhcmNoIGFjY2Vzc2VzIGFyZSBzZXQgdG8gcG9pbnQuXFxyXFxuXFx0Ly8gY29uc3QgdmVjMiBTRUFSQ0hfVEVYX1BJWEVMX1NJWkUgPSAxLjAgLyB2ZWMyKDY2LjAsIDMzLjApO1xcclxcblxcdC8vIGUgPSB2ZWMyKGJpYXMsIDAuMCkgKyAwLjUgKiBTRUFSQ0hfVEVYX1BJWEVMX1NJWkUgKyBlICogdmVjMihzY2FsZSwgMS4wKSAqIHZlYzIoNjQuMCwgMzIuMCkgKiBTRUFSQ0hfVEVYX1BJWEVMX1NJWkU7XFxyXFxuXFxyXFxuXFx0ZS5yID0gYmlhcyArIGUuciAqIHNjYWxlO1xcclxcblxcclxcblxcdHJldHVybiAyNTUuMCAqIHRleHR1cmUyRCh0U2VhcmNoLCBlLCAwLjApLnI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmZsb2F0IHNlYXJjaFhMZWZ0KHZlYzIgdGV4Q29vcmQsIGZsb2F0IGVuZCkge1xcclxcblxcclxcblxcdC8qIEBQU0VVRE9fR0FUSEVSNFxcclxcblxcdCAqIFRoaXMgdGV4Q29vcmQgaGFzIGJlZW4gb2Zmc2V0IGJ5ICgtMC4yNSwgLTAuMTI1KSBpbiB0aGUgdmVydGV4IHNoYWRlciB0b1xcclxcblxcdCAqIHNhbXBsZSBiZXR3ZWVuIGVkZ2UsIHRodXMgZmV0Y2hpbmcgZm91ciBlZGdlcyBpbiBhIHJvdy5cXHJcXG5cXHQgKiBTYW1wbGluZyB3aXRoIGRpZmZlcmVudCBvZmZzZXRzIGluIGVhY2ggZGlyZWN0aW9uIGFsbG93cyB0byBkaXNhbWJpZ3VhdGVcXHJcXG5cXHQgKiB3aGljaCBlZGdlcyBhcmUgYWN0aXZlIGZyb20gdGhlIGZvdXIgZmV0Y2hlZCBvbmVzLlxcclxcblxcdCAqL1xcclxcblxcclxcblxcdHZlYzIgZSA9IHZlYzIoMC4wLCAxLjApO1xcclxcblxcclxcblxcdGZvcihpbnQgaSA9IDA7IGkgPCBTTUFBX01BWF9TRUFSQ0hfU1RFUFNfSU5UOyArK2kpIHtcXHJcXG5cXHJcXG5cXHRcXHRlID0gdGV4dHVyZTJEKHREaWZmdXNlLCB0ZXhDb29yZCwgMC4wKS5yZztcXHJcXG5cXHRcXHR0ZXhDb29yZCAtPSB2ZWMyKDIuMCwgMC4wKSAqIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG5cXHRcXHRpZighKHRleENvb3JkLnggPiBlbmQgJiYgZS5nID4gMC44MjgxICYmIGUuciA9PSAwLjApKSB7IGJyZWFrOyB9XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIENvcnJlY3QgdGhlIHByZXZpb3VzbHkgYXBwbGllZCBvZmZzZXQgKC0wLjI1LCAtMC4xMjUpLlxcclxcblxcdHRleENvb3JkLnggKz0gMC4yNSAqIHRleGVsU2l6ZS54O1xcclxcblxcclxcblxcdC8vIFRoZSBzZWFyY2hlcyBhcmUgYmlhc2VkIGJ5IDEsIHNvIGFkanVzdCB0aGUgY29vcmRzIGFjY29yZGluZ2x5LlxcclxcblxcdHRleENvb3JkLnggKz0gdGV4ZWxTaXplLng7XFxyXFxuXFxyXFxuXFx0Ly8gRGlzYW1iaWd1YXRlIHRoZSBsZW5ndGggYWRkZWQgYnkgdGhlIGxhc3Qgc3RlcC5cXHJcXG5cXHR0ZXhDb29yZC54ICs9IDIuMCAqIHRleGVsU2l6ZS54OyAvLyBVbmRvIGxhc3Qgc3RlcC5cXHJcXG5cXHR0ZXhDb29yZC54IC09IHRleGVsU2l6ZS54ICogc2VhcmNoTGVuZ3RoKGUsIDAuMCwgMC41KTtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gdGV4Q29vcmQueDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgc2VhcmNoWFJpZ2h0KHZlYzIgdGV4Q29vcmQsIGZsb2F0IGVuZCkge1xcclxcblxcclxcblxcdHZlYzIgZSA9IHZlYzIoMC4wLCAxLjApO1xcclxcblxcclxcblxcdGZvcihpbnQgaSA9IDA7IGkgPCBTTUFBX01BWF9TRUFSQ0hfU1RFUFNfSU5UOyArK2kpIHtcXHJcXG5cXHJcXG5cXHRcXHRlID0gdGV4dHVyZTJEKHREaWZmdXNlLCB0ZXhDb29yZCwgMC4wKS5yZztcXHJcXG5cXHRcXHR0ZXhDb29yZCArPSB2ZWMyKDIuMCwgMC4wKSAqIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG5cXHRcXHRpZighKHRleENvb3JkLnggPCBlbmQgJiYgZS5nID4gMC44MjgxICYmIGUuciA9PSAwLjApKSB7IGJyZWFrOyB9XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRleENvb3JkLnggLT0gMC4yNSAqIHRleGVsU2l6ZS54O1xcclxcblxcdHRleENvb3JkLnggLT0gdGV4ZWxTaXplLng7XFxyXFxuXFx0dGV4Q29vcmQueCAtPSAyLjAgKiB0ZXhlbFNpemUueDtcXHJcXG5cXHR0ZXhDb29yZC54ICs9IHRleGVsU2l6ZS54ICogc2VhcmNoTGVuZ3RoKGUsIDAuNSwgMC41KTtcXHJcXG5cXHJcXG5cXHRyZXR1cm4gdGV4Q29vcmQueDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgc2VhcmNoWVVwKHZlYzIgdGV4Q29vcmQsIGZsb2F0IGVuZCkge1xcclxcblxcclxcblxcdHZlYzIgZSA9IHZlYzIoMS4wLCAwLjApO1xcclxcblxcclxcblxcdGZvcihpbnQgaSA9IDA7IGkgPCBTTUFBX01BWF9TRUFSQ0hfU1RFUFNfSU5UOyArK2kpIHtcXHJcXG5cXHJcXG5cXHRcXHRlID0gdGV4dHVyZTJEKHREaWZmdXNlLCB0ZXhDb29yZCwgMC4wKS5yZztcXHJcXG5cXHRcXHR0ZXhDb29yZCArPSB2ZWMyKDAuMCwgMi4wKSAqIHRleGVsU2l6ZTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcclxcblxcdFxcdGlmKCEodGV4Q29vcmQueSA+IGVuZCAmJiBlLnIgPiAwLjgyODEgJiYgZS5nID09IDAuMCkpIHsgYnJlYWs7IH1cXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGV4Q29vcmQueSAtPSAwLjI1ICogdGV4ZWxTaXplLnk7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHR0ZXhDb29yZC55IC09IHRleGVsU2l6ZS55OyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFx0dGV4Q29vcmQueSAtPSAyLjAgKiB0ZXhlbFNpemUueTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcdHRleENvb3JkLnkgKz0gdGV4ZWxTaXplLnkgKiBzZWFyY2hMZW5ndGgoZS5nciwgMC4wLCAwLjUpOyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFxyXFxuXFx0cmV0dXJuIHRleENvb3JkLnk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmZsb2F0IHNlYXJjaFlEb3duKHZlYzIgdGV4Q29vcmQsIGZsb2F0IGVuZCkge1xcclxcblxcclxcblxcdHZlYzIgZSA9IHZlYzIoMS4wLCAwLjApO1xcclxcblxcclxcblxcdGZvcihpbnQgaSA9IDA7IGkgPCBTTUFBX01BWF9TRUFSQ0hfU1RFUFNfSU5UOyArK2kgKSB7XFxyXFxuXFxyXFxuXFx0XFx0ZSA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdGV4Q29vcmQsIDAuMCkucmc7XFxyXFxuXFx0XFx0dGV4Q29vcmQgLT0gdmVjMigwLjAsIDIuMCkgKiB0ZXhlbFNpemU7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHJcXG5cXHRcXHRpZighKHRleENvb3JkLnkgPCBlbmQgJiYgZS5yID4gMC44MjgxICYmIGUuZyA9PSAwLjApKSB7IGJyZWFrOyB9XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRleENvb3JkLnkgKz0gMC4yNSAqIHRleGVsU2l6ZS55OyAvLyBDaGFuZ2VkIHNpZ24uXFxyXFxuXFx0dGV4Q29vcmQueSArPSB0ZXhlbFNpemUueTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcdHRleENvb3JkLnkgKz0gMi4wICogdGV4ZWxTaXplLnk7IC8vIENoYW5nZWQgc2lnbi5cXHJcXG5cXHR0ZXhDb29yZC55IC09IHRleGVsU2l6ZS55ICogc2VhcmNoTGVuZ3RoKGUuZ3IsIDAuNSwgMC41KTsgLy8gQ2hhbmdlZCBzaWduLlxcclxcblxcclxcblxcdHJldHVybiB0ZXhDb29yZC55O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52ZWMyIGFyZWEodmVjMiBkaXN0LCBmbG9hdCBlMSwgZmxvYXQgZTIsIGZsb2F0IG9mZnNldCkge1xcclxcblxcclxcblxcdC8vIFJvdW5kaW5nIHByZXZlbnRzIHByZWNpc2lvbiBlcnJvcnMgb2YgYmlsaW5lYXIgZmlsdGVyaW5nLlxcclxcblxcdHZlYzIgdGV4Q29vcmQgPSBTTUFBX0FSRUFURVhfTUFYX0RJU1RBTkNFICogcm91bmQoNC4wICogdmVjMihlMSwgZTIpKSArIGRpc3Q7XFxyXFxuXFxyXFxuXFx0Ly8gU2NhbGUgYW5kIGJpYXMgZm9yIHRleGVsIHNwYWNlIHRyYW5zbGF0aW9uLlxcclxcblxcdHRleENvb3JkID0gU01BQV9BUkVBVEVYX1BJWEVMX1NJWkUgKiB0ZXhDb29yZCArICgwLjUgKiBTTUFBX0FSRUFURVhfUElYRUxfU0laRSk7XFxyXFxuXFxyXFxuXFx0Ly8gTW92ZSB0byBwcm9wZXIgcGxhY2UsIGFjY29yZGluZyB0byB0aGUgc3VicGl4ZWwgb2Zmc2V0LlxcclxcblxcdHRleENvb3JkLnkgKz0gU01BQV9BUkVBVEVYX1NVQlRFWF9TSVpFICogb2Zmc2V0O1xcclxcblxcclxcblxcdHJldHVybiB0ZXh0dXJlMkQodEFyZWEsIHRleENvb3JkLCAwLjApLnJnO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuXFxyXFxuXFx0dmVjNCB3ZWlnaHRzID0gdmVjNCgwLjApO1xcclxcblxcdHZlYzQgc3Vic2FtcGxlSW5kaWNlcyA9IHZlYzQoMC4wKTtcXHJcXG5cXHR2ZWMyIGUgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmc7XFxyXFxuXFxyXFxuXFx0aWYoZS5nID4gMC4wKSB7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRWRnZSBhdCBub3J0aC5cXHJcXG5cXHRcXHR2ZWMyIGQ7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRmluZCB0aGUgZGlzdGFuY2UgdG8gdGhlIGxlZnQuXFxyXFxuXFx0XFx0dmVjMiBjb29yZHM7XFxyXFxuXFx0XFx0Y29vcmRzLnggPSBzZWFyY2hYTGVmdCh2T2Zmc2V0WzBdLnh5LCB2T2Zmc2V0WzJdLngpO1xcclxcblxcdFxcdGNvb3Jkcy55ID0gdk9mZnNldFsxXS55OyAvLyB2T2Zmc2V0WzFdLnkgPSB2VXYueSAtIDAuMjUgKiB0ZXhlbFNpemUueSAoQENST1NTSU5HX09GRlNFVClcXHJcXG5cXHRcXHRkLnggPSBjb29yZHMueDtcXHJcXG5cXHJcXG5cXHRcXHQvKiBOb3cgZmV0Y2ggdGhlIGxlZnQgY3Jvc3NpbmcgZWRnZXMsIHR3byBhdCBhIHRpbWUgdXNpbmcgYmlsaW5lYXIgZmlsdGVyaW5nLlxcclxcblxcdFxcdCAqIFNhbXBsaW5nIGF0IC0wLjI1IChzZWUgQENST1NTSU5HX09GRlNFVCkgZW5hYmxlcyB0byBkaXNjZXJuIHdoYXQgdmFsdWUgZWFjaCBlZGdlIGhhcy5cXHJcXG5cXHRcXHQgKi9cXHJcXG5cXHJcXG5cXHRcXHRmbG9hdCBlMSA9IHRleHR1cmUyRCh0RGlmZnVzZSwgY29vcmRzLCAwLjApLnI7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRmluZCB0aGUgZGlzdGFuY2UgdG8gdGhlIHJpZ2h0LlxcclxcblxcdFxcdGNvb3Jkcy54ID0gc2VhcmNoWFJpZ2h0KHZPZmZzZXRbMF0uencsIHZPZmZzZXRbMl0ueSk7XFxyXFxuXFx0XFx0ZC55ID0gY29vcmRzLng7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gVHJhbnNsYXRlIGRpc3RhbmNlcyB0byBwaXhlbCB1bml0cyBmb3IgYmV0dGVyIGludGVybGVhdmUgYXJpdGhtZXRpYyBhbmQgbWVtb3J5IGFjY2Vzc2VzLlxcclxcblxcdFxcdGQgPSBkIC8gdGV4ZWxTaXplLnggLSB2UGl4Q29vcmQueDtcXHJcXG5cXHJcXG5cXHRcXHQvLyBUaGUgYXJlYSBiZWxvdyBuZWVkcyBhIHNxcnQsIGFzIHRoZSBhcmVhcyB0ZXh0dXJlIGlzIGNvbXByZXNzZWQgcXVhZHJhdGljYWxseS5cXHJcXG5cXHRcXHR2ZWMyIHNxcnREID0gc3FydChhYnMoZCkpO1xcclxcblxcclxcblxcdFxcdC8vIEZldGNoIHRoZSByaWdodCBjcm9zc2luZyBlZGdlcy5cXHJcXG5cXHRcXHRjb29yZHMueSAtPSB0ZXhlbFNpemUueTsgLy8gV2ViR0wgcG9ydCBub3RlOiBBZGRlZC5cXHJcXG5cXHRcXHRmbG9hdCBlMiA9IHNhbXBsZUxldmVsWmVyb09mZnNldCh0RGlmZnVzZSwgY29vcmRzLCBpdmVjMigxLCAwKSkucjtcXHJcXG5cXHJcXG5cXHRcXHQvLyBQYXR0ZXJuIHJlY29nbmlzZWQsIG5vdyBnZXQgdGhlIGFjdHVhbCBhcmVhLlxcclxcblxcdFxcdHdlaWdodHMucmcgPSBhcmVhKHNxcnRELCBlMSwgZTIsIHN1YnNhbXBsZUluZGljZXMueSk7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdGlmKGUuciA+IDAuMCkge1xcclxcblxcclxcblxcdFxcdC8vIEVkZ2UgYXQgd2VzdC5cXHJcXG5cXHRcXHR2ZWMyIGQ7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRmluZCB0aGUgZGlzdGFuY2UgdG8gdGhlIHRvcC5cXHJcXG5cXHRcXHR2ZWMyIGNvb3JkcztcXHJcXG5cXHJcXG5cXHRcXHRjb29yZHMueSA9IHNlYXJjaFlVcCh2T2Zmc2V0WzFdLnh5LCB2T2Zmc2V0WzJdLnopO1xcclxcblxcdFxcdGNvb3Jkcy54ID0gdk9mZnNldFswXS54OyAvLyB2T2Zmc2V0WzFdLnggPSB2VXYueCAtIDAuMjUgKiB0ZXhlbFNpemUueDtcXHJcXG5cXHRcXHRkLnggPSBjb29yZHMueTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBGZXRjaCB0aGUgdG9wIGNyb3NzaW5nIGVkZ2VzLlxcclxcblxcdFxcdGZsb2F0IGUxID0gdGV4dHVyZTJEKHREaWZmdXNlLCBjb29yZHMsIDAuMCkuZztcXHJcXG5cXHJcXG5cXHRcXHQvLyBGaW5kIHRoZSBkaXN0YW5jZSB0byB0aGUgYm90dG9tLlxcclxcblxcdFxcdGNvb3Jkcy55ID0gc2VhcmNoWURvd24odk9mZnNldFsxXS56dywgdk9mZnNldFsyXS53KTtcXHJcXG5cXHRcXHRkLnkgPSBjb29yZHMueTtcXHJcXG5cXHJcXG5cXHRcXHQvLyBEaXN0YW5jZXMgaW4gcGl4ZWwgdW5pdHMuXFxyXFxuXFx0XFx0ZCA9IGQgLyB0ZXhlbFNpemUueSAtIHZQaXhDb29yZC55O1xcclxcblxcclxcblxcdFxcdC8vIFRoZSBhcmVhIGJlbG93IG5lZWRzIGEgc3FydCwgYXMgdGhlIGFyZWFzIHRleHR1cmUgaXMgY29tcHJlc3NlZCBxdWFkcmF0aWNhbGx5LlxcclxcblxcdFxcdHZlYzIgc3FydEQgPSBzcXJ0KGFicyhkKSk7XFxyXFxuXFxyXFxuXFx0XFx0Ly8gRmV0Y2ggdGhlIGJvdHRvbSBjcm9zc2luZyBlZGdlcy5cXHJcXG5cXHRcXHRjb29yZHMueSAtPSB0ZXhlbFNpemUueTsgLy8gV2ViR0wgcG9ydCBub3RlOiBBZGRlZC5cXHJcXG5cXHRcXHRmbG9hdCBlMiA9IHNhbXBsZUxldmVsWmVyb09mZnNldCh0RGlmZnVzZSwgY29vcmRzLCBpdmVjMigwLCAxKSkuZztcXHJcXG5cXHJcXG5cXHRcXHQvLyBHZXQgdGhlIGFyZWEgZm9yIHRoaXMgZGlyZWN0aW9uLlxcclxcblxcdFxcdHdlaWdodHMuYmEgPSBhcmVhKHNxcnRELCBlMSwgZTIsIHN1YnNhbXBsZUluZGljZXMueCk7XFxyXFxuXFxyXFxuXFx0fVxcclxcblxcclxcblxcdGdsX0ZyYWdDb2xvciA9IHdlaWdodHM7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5jb25zdCB2ZXJ0ZXggPSBcInVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMyIHZVdjtcXHJcXG52YXJ5aW5nIHZlYzQgdk9mZnNldFszXTtcXHJcXG52YXJ5aW5nIHZlYzIgdlBpeENvb3JkO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHJcXG5cXHR2UGl4Q29vcmQgPSB1diAvIHRleGVsU2l6ZTtcXHJcXG5cXHJcXG5cXHQvLyBPZmZzZXRzIGZvciB0aGUgc2VhcmNoZXMgKHNlZSBAUFNFVURPX0dBVEhFUjQpLlxcclxcblxcdHZPZmZzZXRbMF0gPSB1di54eXh5ICsgdGV4ZWxTaXplLnh5eHkgKiB2ZWM0KC0wLjI1LCAwLjEyNSwgMS4yNSwgMC4xMjUpOyAvLyBDaGFuZ2VkIHNpZ24gaW4gWSBhbmQgVyBjb21wb25lbnRzLlxcclxcblxcdHZPZmZzZXRbMV0gPSB1di54eXh5ICsgdGV4ZWxTaXplLnh5eHkgKiB2ZWM0KC0wLjEyNSwgMC4yNSwgLTAuMTI1LCAtMS4yNSk7IC8vQ2hhbmdlZCBzaWduIGluIFkgYW5kIFcgY29tcG9uZW50cy5cXHJcXG5cXHJcXG5cXHQvLyBUaGlzIGluZGljYXRlcyB0aGUgZW5kcyBvZiB0aGUgbG9vcHMuXFxyXFxuXFx0dk9mZnNldFsyXSA9IHZlYzQodk9mZnNldFswXS54eiwgdk9mZnNldFsxXS55dykgKyB2ZWM0KC0yLjAsIDIuMCwgLTIuMCwgMi4wKSAqIHRleGVsU2l6ZS54eHl5ICogU01BQV9NQVhfU0VBUkNIX1NURVBTX0ZMT0FUO1xcclxcblxcclxcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxyXFxuXFxyXFxufVxcclxcblwiO1xyXG5cclxuLyoqXHJcbiAqIFN1YnBpeGVsIE1vcnBob2xvZ2ljYWwgQW50aWFsaWFzaW5nLlxyXG4gKlxyXG4gKiBUaGlzIG1hdGVyaWFsIGNvbXB1dGVzIHdlaWdodHMgZm9yIGRldGVjdGVkIGVkZ2VzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTTUFBV2VpZ2h0c01hdGVyaWFsIGV4dGVuZHMgU2hhZGVyTWF0ZXJpYWwge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IFNNQUEgd2VpZ2h0cyBtYXRlcmlhbC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7VmVjdG9yMn0gW3RleGVsU2l6ZV0gLSBUaGUgYWJzb2x1dGUgc2NyZWVuIHRleGVsIHNpemUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleGVsU2l6ZSA9IG5ldyBWZWN0b3IyKCkpIHtcclxuXHJcblx0XHRzdXBlcih7XHJcblxyXG5cdFx0XHR0eXBlOiBcIlNNQUFXZWlnaHRzTWF0ZXJpYWxcIixcclxuXHJcblx0XHRcdGRlZmluZXM6IHtcclxuXHJcblx0XHRcdFx0U01BQV9NQVhfU0VBUkNIX1NURVBTX0lOVDogXCI4XCIsXHJcblx0XHRcdFx0U01BQV9NQVhfU0VBUkNIX1NURVBTX0ZMT0FUOiBcIjguMFwiLFxyXG5cclxuXHRcdFx0XHRTTUFBX0FSRUFURVhfTUFYX0RJU1RBTkNFOiBcIjE2LjBcIixcclxuXHJcblx0XHRcdFx0U01BQV9BUkVBVEVYX1BJWEVMX1NJWkU6IFwiKDEuMCAvIHZlYzIoMTYwLjAsIDU2MC4wKSlcIixcclxuXHRcdFx0XHRTTUFBX0FSRUFURVhfU1VCVEVYX1NJWkU6IFwiKDEuMCAvIDcuMClcIlxyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcdHREaWZmdXNlOiBuZXcgVW5pZm9ybShudWxsKSxcclxuXHRcdFx0XHR0QXJlYTogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dFNlYXJjaDogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0dGV4ZWxTaXplOiBuZXcgVW5pZm9ybSh0ZXhlbFNpemUpXHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuXHJcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6IGZhbHNlXHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgYXJlYSBwYXR0ZXJuIHJlY29nbml0aW9uIGltYWdlLiBFbmNvZGVkIGFzIGJhc2U2NC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5hcmVhSW1hZ2UgPSBhcmVhSW1hZ2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgc2VhcmNoIGltYWdlLiBFbmNvZGVkIGFzIGJhc2U2NC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zZWFyY2hJbWFnZSA9IHNlYXJjaEltYWdlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBVbmlmb3JtIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBmcmFnbWVudCA9IFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxyXFxudW5pZm9ybSBmbG9hdCBtaWRkbGVHcmV5O1xcclxcbnVuaWZvcm0gZmxvYXQgbWF4THVtaW5hbmNlO1xcclxcblxcclxcbiNpZmRlZiBBREFQVEVEX0xVTUlOQU5DRVxcclxcblxcclxcblxcdHVuaWZvcm0gc2FtcGxlcjJEIGx1bWluYW5jZU1hcDtcXHJcXG5cXHJcXG4jZWxzZVxcclxcblxcclxcblxcdHVuaWZvcm0gZmxvYXQgYXZlcmFnZUx1bWluYW5jZTtcXHJcXG5cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbmNvbnN0IHZlYzMgTFVNX0NPRUZGID0gdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KTtcXHJcXG5jb25zdCB2ZWMyIENFTlRFUiA9IHZlYzIoMC41LCAwLjUpO1xcclxcblxcclxcbnZlYzMgdG9uZU1hcCh2ZWMzIGMpIHtcXHJcXG5cXHJcXG5cXHQjaWZkZWYgQURBUFRFRF9MVU1JTkFOQ0VcXHJcXG5cXHJcXG5cXHRcXHQvLyBHZXQgdGhlIGNhbGN1bGF0ZWQgYXZlcmFnZSBsdW1pbmFuY2UuXFxyXFxuXFx0XFx0ZmxvYXQgbHVtQXZnID0gdGV4dHVyZTJEKGx1bWluYW5jZU1hcCwgQ0VOVEVSKS5yO1xcclxcblxcclxcblxcdCNlbHNlXFxyXFxuXFxyXFxuXFx0XFx0ZmxvYXQgbHVtQXZnID0gYXZlcmFnZUx1bWluYW5jZTtcXHJcXG5cXHJcXG5cXHQjZW5kaWZcXHJcXG5cXHJcXG5cXHQvLyBDYWxjdWxhdGUgdGhlIGx1bWluYW5jZSBvZiB0aGUgY3VycmVudCBwaXhlbC5cXHJcXG5cXHRmbG9hdCBsdW1QaXhlbCA9IGRvdChjLCBMVU1fQ09FRkYpO1xcclxcblxcclxcblxcdC8vIEFwcGx5IHRoZSBtb2RpZmllZCBvcGVyYXRvciAoUmVpbmhhcmQgRXEuIDQpLlxcclxcblxcdGZsb2F0IGx1bVNjYWxlZCA9IChsdW1QaXhlbCAqIG1pZGRsZUdyZXkpIC8gbHVtQXZnO1xcclxcblxcclxcblxcdGZsb2F0IGx1bUNvbXByZXNzZWQgPSAobHVtU2NhbGVkICogKDEuMCArIChsdW1TY2FsZWQgLyAobWF4THVtaW5hbmNlICogbWF4THVtaW5hbmNlKSkpKSAvICgxLjAgKyBsdW1TY2FsZWQpO1xcclxcblxcclxcblxcdHJldHVybiBsdW1Db21wcmVzc2VkICogYztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKCkge1xcclxcblxcclxcblxcdHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdik7XFxyXFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCh0b25lTWFwKHRleGVsLnJnYiksIHRleGVsLmEpO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuY29uc3QgdmVydGV4ID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG5cXHJcXG5cXHR2VXYgPSB1djtcXHJcXG5cXHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcclxcblxcclxcbn1cXHJcXG5cIjtcclxuXHJcbi8qKlxyXG4gKiBGdWxsLXNjcmVlbiB0b25lLW1hcHBpbmcgc2hhZGVyIG1hdGVyaWFsLlxyXG4gKlxyXG4gKiBSZWZlcmVuY2U6XHJcbiAqICBodHRwOi8vd3d3LmNpcy5yaXQuZWR1L3Blb3BsZS9mYWN1bHR5L2ZlcndlcmRhL3B1YmxpY2F0aW9ucy9zaWcwMl9wYXBlci5wZGZcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVG9uZU1hcHBpbmdNYXRlcmlhbCBleHRlbmRzIFNoYWRlck1hdGVyaWFsIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyB0b25lIG1hcHBpbmcgbWF0ZXJpYWwuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHN1cGVyKHtcclxuXHJcblx0XHRcdHR5cGU6IFwiVG9uZU1hcHBpbmdNYXRlcmlhbFwiLFxyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFx0dERpZmZ1c2U6IG5ldyBVbmlmb3JtKG51bGwpLFxyXG5cdFx0XHRcdGx1bWluYW5jZU1hcDogbmV3IFVuaWZvcm0obnVsbCksXHJcblx0XHRcdFx0YXZlcmFnZUx1bWluYW5jZTogbmV3IFVuaWZvcm0oMS4wKSxcclxuXHRcdFx0XHRtYXhMdW1pbmFuY2U6IG5ldyBVbmlmb3JtKDE2LjApLFxyXG5cdFx0XHRcdG1pZGRsZUdyZXk6IG5ldyBVbmlmb3JtKDAuNilcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cclxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2UsXHJcblx0XHRcdGRlcHRoVGVzdDogZmFsc2VcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoYWRlciBtYXRlcmlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcG9zdCBwcm9jZXNzaW5nIHBhc3Nlcy5cclxuICpcclxuICogQG1vZHVsZSBwb3N0cHJvY2Vzc2luZy9tYXRlcmlhbHNcclxuICovXHJcblxyXG5leHBvcnQgeyBBZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbCB9IGZyb20gXCIuL2FkYXB0aXZlLWx1bWlub3NpdHkuanNcIjtcclxuZXhwb3J0IHsgQm9rZWhNYXRlcmlhbCB9IGZyb20gXCIuL2Jva2VoLmpzXCI7XHJcbmV4cG9ydCB7IEJva2VoMk1hdGVyaWFsIH0gZnJvbSBcIi4vYm9rZWgyLmpzXCI7XHJcbmV4cG9ydCB7IENvbWJpbmVNYXRlcmlhbCB9IGZyb20gXCIuL2NvbWJpbmUuanNcIjtcclxuZXhwb3J0IHsgQ29udm9sdXRpb25NYXRlcmlhbCwgS2VybmVsU2l6ZSB9IGZyb20gXCIuL2NvbnZvbHV0aW9uLmpzXCI7XHJcbmV4cG9ydCB7IENvcHlNYXRlcmlhbCB9IGZyb20gXCIuL2NvcHkuanNcIjtcclxuZXhwb3J0IHsgRGVwdGhNYXRlcmlhbCB9IGZyb20gXCIuL2RlcHRoLmpzXCI7XHJcbmV4cG9ydCB7IERvdFNjcmVlbk1hdGVyaWFsIH0gZnJvbSBcIi4vZG90LXNjcmVlbi5qc1wiO1xyXG5leHBvcnQgeyBGaWxtTWF0ZXJpYWwgfSBmcm9tIFwiLi9maWxtLmpzXCI7XHJcbmV4cG9ydCB7IEdsaXRjaE1hdGVyaWFsIH0gZnJvbSBcIi4vZ2xpdGNoLmpzXCI7XHJcbmV4cG9ydCB7IEdvZFJheXNNYXRlcmlhbCB9IGZyb20gXCIuL2dvZC1yYXlzLmpzXCI7XHJcbmV4cG9ydCB7IEx1bWlub3NpdHlNYXRlcmlhbCB9IGZyb20gXCIuL2x1bWlub3NpdHkuanNcIjtcclxuZXhwb3J0IHsgUGl4ZWxhdGlvbk1hdGVyaWFsIH0gZnJvbSBcIi4vcGl4ZWxhdGlvbi5qc1wiO1xyXG5leHBvcnQgeyBTaG9ja1dhdmVNYXRlcmlhbCB9IGZyb20gXCIuL3Nob2NrLXdhdmUuanNcIjtcclxuZXhwb3J0IHsgU01BQUJsZW5kTWF0ZXJpYWwgfSBmcm9tIFwiLi9zbWFhLWJsZW5kLmpzXCI7XHJcbmV4cG9ydCB7IFNNQUFDb2xvckVkZ2VzTWF0ZXJpYWwgfSBmcm9tIFwiLi9zbWFhLWNvbG9yLWVkZ2VzLmpzXCI7XHJcbmV4cG9ydCB7IFNNQUFXZWlnaHRzTWF0ZXJpYWwgfSBmcm9tIFwiLi9zbWFhLXdlaWdodHMuanNcIjtcclxuZXhwb3J0IHsgVG9uZU1hcHBpbmdNYXRlcmlhbCB9IGZyb20gXCIuL3RvbmUtbWFwcGluZy5qc1wiO1xyXG4iLCJpbXBvcnQgeyBTY2VuZSwgTWVzaCwgT3J0aG9ncmFwaGljQ2FtZXJhLCBQbGFuZUJ1ZmZlckdlb21ldHJ5IH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG4vKipcclxuICogQW4gYWJzdHJhY3QgcGFzcy5cclxuICpcclxuICogUGFzc2VzIHRoYXQgZG8gbm90IHJlbHkgb24gdGhlIGRlcHRoIGJ1ZmZlciBzaG91bGQgZXhwbGljaXRseSBkaXNhYmxlIHRoZVxyXG4gKiBkZXB0aCB0ZXN0IGFuZCBkZXB0aCB3cml0ZSBpbiB0aGVpciByZXNwZWN0aXZlIHNoYWRlciBtYXRlcmlhbHMuXHJcbiAqXHJcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIHtAbGluayBQYXNzI2Rpc3Bvc2V9IG1ldGhvZCB0aGF0IGZyZWVzIG1lbW9yeSBvblxyXG4gKiBkZW1hbmQuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1NjZW5lfSBbc2NlbmVdIC0gVGhlIHNjZW5lIHRvIHJlbmRlci5cclxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gW2NhbWVyYV0gLSBUaGUgY2FtZXJhLlxyXG5cdCAqIEBwYXJhbSB7TWVzaH0gW3F1YWRdIC0gQSBxdWFkIHRoYXQgZmlsbHMgdGhlIHNjcmVlbiB0byByZW5kZXIgMkQgZmlsdGVyIGVmZmVjdHMuIFNldCB0aGlzIHRvIG51bGwsIGlmIHlvdSBkb24ndCBuZWVkIGl0IChzZWUge0BsaW5rIFJlbmRlclBhc3N9KS5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRzY2VuZSA9IG5ldyBTY2VuZSgpLFxyXG5cdFx0Y2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgMSwgLTEsIDAsIDEpLFxyXG5cdFx0cXVhZCA9IG5ldyBNZXNoKG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLCBudWxsKVxyXG5cdCkge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIlBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBzY2VuZSB0byByZW5kZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1NjZW5lfVxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQGRlZmF1bHQgbmV3IFNjZW5lKClcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBjYW1lcmEuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NhbWVyYX1cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEBkZWZhdWx0IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoLTEsIDEsIDEsIC0xLCAwLCAxKVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHF1YWQgbWVzaCB0aGF0IGZpbGxzIHRoZSBzY3JlZW4uXHJcblx0XHQgKlxyXG5cdFx0ICogQXNzaWduIHlvdXIgc2hhZGVyIG1hdGVyaWFsIHRvIHRoaXMgbWVzaCFcclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TWVzaH1cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEBkZWZhdWx0IG5ldyBNZXNoKG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLCBudWxsKVxyXG5cdFx0ICogQGV4YW1wbGUgdGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5teU1hdGVyaWFsO1xyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5xdWFkID0gcXVhZDtcclxuXHJcblx0XHRpZih0aGlzLnF1YWQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdHRoaXMucXVhZC5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZih0aGlzLnNjZW5lICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucXVhZCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHJlYWQgYW5kIHdyaXRlIGJ1ZmZlcnMgc2hvdWxkIGJlIHN3YXBwZWQgYWZ0ZXIgdGhpc1xyXG5cdFx0ICogcGFzcyBoYXMgZmluaXNoZWQgcmVuZGVyaW5nLlxyXG5cdFx0ICpcclxuXHRcdCAqIFNldCB0aGlzIHRvIHRydWUgaWYgdGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlciBzbyB0aGF0IGFcclxuXHRcdCAqIGZvbGxvd2luZyBwYXNzIGNhbiBmaW5kIHRoZSByZXN1bHQgaW4gdGhlIHJlYWQgYnVmZmVyLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdFx0ICogQGRlZmF1bHQgZmFsc2VcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBFbmFibGVkIGZsYWcuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCB0cnVlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVuZGVyIHRvIHNjcmVlbiBmbGFnLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxyXG5cdFx0ICogQGRlZmF1bHQgZmFsc2VcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBUaGlzIGlzIGFuIGFic3RyYWN0IG1ldGhvZCB0aGF0IG11c3QgYmUgb3ZlcnJpZGRlbi5cclxuXHQgKlxyXG5cdCAqIEBhYnN0cmFjdFxyXG5cdCAqIEB0aHJvd3Mge0Vycm9yfSBBbiBlcnJvciBpcyB0aHJvd24gaWYgdGhlIG1ldGhvZCBpcyBub3Qgb3ZlcnJpZGRlbi5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBBIHJlYWQgYnVmZmVyLiBDb250YWlucyB0aGUgcmVzdWx0IG9mIHRoZSBwcmV2aW91cyBwYXNzLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gQSB3cml0ZSBidWZmZXIuIE5vcm1hbGx5IHVzZWQgYXMgdGhlIHJlbmRlciB0YXJnZXQgd2hlbiB0aGUgcmVhZCBidWZmZXIgaXMgdXNlZCBhcyBpbnB1dC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2RlbHRhXSAtIFRoZSBkZWx0YSB0aW1lLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tBY3RpdmVdIC0gSW5kaWNhdGVzIHdoZXRoZXIgYSBzdGVuY2lsIHRlc3QgbWFzayBpcyBhY3RpdmUgb3Igbm90LlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSkge1xyXG5cclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlJlbmRlciBtZXRob2Qgbm90IGltcGxlbWVudGVkIVwiKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBZb3UgbWF5IG92ZXJyaWRlIHRoaXMgbWV0aG9kIGluIGNhc2UgeW91IHdhbnQgdG8gYmUgaW5mb3JtZWQgYWJvdXQgdGhlIG1haW5cclxuXHQgKiByZW5kZXIgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIFRoZSB7QGxpbmsgRWZmZWN0Q29tcG9zZXJ9IGNhbGxzIHRoaXMgbWV0aG9kIGJlZm9yZSB0aGlzIHBhc3MgaXNcclxuXHQgKiBpbml0aWFsaXNlZCBhbmQgZXZlcnkgdGltZSBpdHMgb3duIHNpemUgaXMgdXBkYXRlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSByZW5kZXJlcidzIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgcmVuZGVyZXIncyBoZWlnaHQuXHJcblx0ICogQGV4YW1wbGUgdGhpcy5teVJlbmRlclRhcmdldC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGluaXRpYWxpc2F0aW9uIHRhc2tzLlxyXG5cdCAqXHJcblx0ICogQnkgb3ZlcnJpZGluZyB0aGlzIG1ldGhvZCB5b3UgZ2FpbiBhY2Nlc3MgdG8gdGhlIHJlbmRlcmVyLiBZb3UnbGwgYWxzbyBiZVxyXG5cdCAqIGFibGUgdG8gY29uZmlndXJlIHlvdXIgY3VzdG9tIHJlbmRlciB0YXJnZXRzIHRvIHVzZSB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0XHJcblx0ICogKFJHQiBvciBSR0JBKS5cclxuXHQgKlxyXG5cdCAqIFRoZSBwcm92aWRlZCByZW5kZXJlciBjYW4gYmUgdXNlZCB0byB3YXJtIHVwIHNwZWNpYWwgb2ZmLXNjcmVlbiByZW5kZXJcclxuXHQgKiB0YXJnZXRzIGJ5IHBlcmZvcm1pbmcgYSBwcmVsaW1pbmFyeSByZW5kZXIgb3BlcmF0aW9uLlxyXG5cdCAqXHJcblx0ICogVGhlIHtAbGluayBFZmZlY3RDb21wb3Nlcn0gY2FsbHMgdGhpcyBtZXRob2Qgd2hlbiB0aGlzIHBhc3MgaXMgYWRkZWQgdG8gaXRzXHJcblx0ICogcXVldWUuXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpc2VcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxwaGEgLSBXaGV0aGVyIHRoZSByZW5kZXJlciB1c2VzIHRoZSBhbHBoYSBjaGFubmVsIG9yIG5vdC5cclxuXHQgKiBAZXhhbXBsZSBpZighYWxwaGEpIHsgdGhpcy5teVJlbmRlclRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDsgfVxyXG5cdCAqL1xyXG5cclxuXHRpbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSkge31cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYSBzaGFsbG93IHNlYXJjaCBmb3IgcHJvcGVydGllcyB0aGF0IGRlZmluZSBhIGRpc3Bvc2UgbWV0aG9kIGFuZFxyXG5cdCAqIGRlbGV0ZXMgdGhlbS4gVGhlIHBhc3Mgd2lsbCBiZSBpbm9wZXJhdGl2ZSBhZnRlciB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkIVxyXG5cdCAqXHJcblx0ICogRGlzcG9zYWJsZSBvYmplY3RzOlxyXG5cdCAqICAtIHJlbmRlciB0YXJnZXRzXHJcblx0ICogIC0gbWF0ZXJpYWxzXHJcblx0ICogIC0gdGV4dHVyZXNcclxuXHQgKlxyXG5cdCAqIFRoZSB7QGxpbmsgRWZmZWN0Q29tcG9zZXJ9IGNhbGxzIHRoaXMgbWV0aG9kIHdoZW4gaXQgaXMgYmVpbmcgZGVzdHJveWVkLlxyXG5cdCAqIFlvdSBtYXksIGhvd2V2ZXIsIHVzZSBpdCBpbmRlcGVuZGVudGx5IHRvIGZyZWUgbWVtb3J5IHdoZW4geW91IGFyZSBjZXJ0YWluXHJcblx0ICogdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGlzIHBhc3MgYW55bW9yZS5cclxuXHQgKi9cclxuXHJcblx0ZGlzcG9zZSgpIHtcclxuXHJcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XHJcblxyXG5cdFx0bGV0IGtleTtcclxuXHJcblx0XHRmb3Ioa2V5IG9mIGtleXMpIHtcclxuXHJcblx0XHRcdGlmKHRoaXNba2V5XSAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpc1trZXldLmRpc3Bvc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cclxuXHRcdFx0XHR0aGlzW2tleV0uZGlzcG9zZSgpO1xyXG5cdFx0XHRcdHRoaXNba2V5XSA9IG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IExpbmVhckZpbHRlciwgUkdCRm9ybWF0LCBXZWJHTFJlbmRlclRhcmdldCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDb252b2x1dGlvbk1hdGVyaWFsLCBLZXJuZWxTaXplIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmx1ciBwYXNzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCbHVyUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGJsdXIgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmVzb2x1dGlvblNjYWxlPTAuNV0gLSBUaGUgcmVuZGVyIHRleHR1cmUgcmVzb2x1dGlvbiBzY2FsZSwgcmVsYXRpdmUgdG8gdGhlIHNjcmVlbiByZW5kZXIgc2l6ZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2VybmVsU2l6ZT1LZXJuZWxTaXplLkxBUkdFXSAtIFRoZSBibHVyIGtlcm5lbCBzaXplLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJCbHVyUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcmVuZGVyIHRhcmdldC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRYID0gbmV3IFdlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIHtcclxuXHRcdFx0bWluRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdG1hZ0ZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhCdWZmZXI6IGZhbHNlXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFgudGV4dHVyZS5uYW1lID0gXCJCbHVyLlRhcmdldFhcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBzZWNvbmQgcmVuZGVyIHRhcmdldC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRZID0gdGhpcy5yZW5kZXJUYXJnZXRYLmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRZLnRleHR1cmUubmFtZSA9IFwiQmx1ci5UYXJnZXRZXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgcmVzb2x1dGlvbiBzY2FsZS5cclxuXHRcdCAqXHJcblx0XHQgKiBZb3UgbmVlZCB0byBjYWxsIHtAbGluayBFZmZlY3RDb21wb3NlciNzZXRTaXplfSBhZnRlciBjaGFuZ2luZyB0aGlzXHJcblx0XHQgKiB2YWx1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQGRlZmF1bHQgMC41XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlc29sdXRpb25TY2FsZSA9IChvcHRpb25zLnJlc29sdXRpb25TY2FsZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMucmVzb2x1dGlvblNjYWxlIDogMC41O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjb252b2x1dGlvbiBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvbnZvbHV0aW9uTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jb252b2x1dGlvbk1hdGVyaWFsID0gbmV3IENvbnZvbHV0aW9uTWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLmtlcm5lbFNpemUgPSBvcHRpb25zLmtlcm5lbFNpemU7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5jb252b2x1dGlvbk1hdGVyaWFsO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBhYnNvbHV0ZSB3aWR0aCBvZiB0aGUgaW50ZXJuYWwgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnJlbmRlclRhcmdldFgud2lkdGg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGFic29sdXRlIGhlaWdodCBvZiB0aGUgaW50ZXJuYWwgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJUYXJnZXRYLmhlaWdodDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUga2VybmVsIHNpemUuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7S2VybmVsU2l6ZX1cclxuXHQgKiBAZGVmYXVsdCBLZXJuZWxTaXplLkxBUkdFXHJcblx0ICovXHJcblxyXG5cdGdldCBrZXJuZWxTaXplKCkgeyByZXR1cm4gdGhpcy5jb252b2x1dGlvbk1hdGVyaWFsLmtlcm5lbFNpemU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0tlcm5lbFNpemV9XHJcblx0ICovXHJcblxyXG5cdHNldCBrZXJuZWxTaXplKHggPSBLZXJuZWxTaXplLkxBUkdFKSB7IHRoaXMuY29udm9sdXRpb25NYXRlcmlhbC5rZXJuZWxTaXplID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBCbHVycyB0aGUgcmVhZCBidWZmZXIuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG5cdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmE7XHJcblxyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0WCA9IHRoaXMucmVuZGVyVGFyZ2V0WDtcclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldFkgPSB0aGlzLnJlbmRlclRhcmdldFk7XHJcblxyXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSB0aGlzLmNvbnZvbHV0aW9uTWF0ZXJpYWw7XHJcblx0XHRjb25zdCB1bmlmb3JtcyA9IG1hdGVyaWFsLnVuaWZvcm1zO1xyXG5cdFx0Y29uc3Qga2VybmVsID0gbWF0ZXJpYWwuZ2V0S2VybmVsKCk7XHJcblxyXG5cdFx0bGV0IGxhc3RSVCA9IHJlYWRCdWZmZXI7XHJcblx0XHRsZXQgZGVzdFJUO1xyXG5cdFx0bGV0IGksIGw7XHJcblxyXG5cdFx0Ly8gQXBwbHkgdGhlIG11bHRpLXBhc3MgYmx1ci5cclxuXHRcdGZvcihpID0gMCwgbCA9IGtlcm5lbC5sZW5ndGggLSAxOyBpIDwgbDsgKytpKSB7XHJcblxyXG5cdFx0XHQvLyBBbHRlcm5hdGUgYmV0d2VlbiB0YXJnZXRzLlxyXG5cdFx0XHRkZXN0UlQgPSAoKGkgJSAyKSA9PT0gMCkgPyByZW5kZXJUYXJnZXRYIDogcmVuZGVyVGFyZ2V0WTtcclxuXHJcblx0XHRcdHVuaWZvcm1zLmtlcm5lbC52YWx1ZSA9IGtlcm5lbFtpXTtcclxuXHRcdFx0dW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSBsYXN0UlQudGV4dHVyZTtcclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIGRlc3RSVCk7XHJcblxyXG5cdFx0XHRsYXN0UlQgPSBkZXN0UlQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHVuaWZvcm1zLmtlcm5lbC52YWx1ZSA9IGtlcm5lbFtpXTtcclxuXHRcdHVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gbGFzdFJULnRleHR1cmU7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRqdXN0cyB0aGUgZm9ybWF0IG9mIHRoZSByZW5kZXIgdGFyZ2V0cy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBhbHBoYSAtIFdoZXRoZXIgdGhlIHJlbmRlcmVyIHVzZXMgdGhlIGFscGhhIGNoYW5uZWwgb3Igbm90LlxyXG5cdCAqL1xyXG5cclxuXHRpbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSkge1xyXG5cclxuXHRcdGlmKCFhbHBoYSkge1xyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXRYLnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldFkudGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0d2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHdpZHRoICogdGhpcy5yZXNvbHV0aW9uU2NhbGUpKTtcclxuXHRcdGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IoaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uU2NhbGUpKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFguc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMuY29udm9sdXRpb25NYXRlcmlhbC5zZXRUZXhlbFNpemUoMS4wIC8gd2lkdGgsIDEuMCAvIGhlaWdodCk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTGluZWFyRmlsdGVyLCBSR0JGb3JtYXQsIFdlYkdMUmVuZGVyVGFyZ2V0IH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENvbWJpbmVNYXRlcmlhbCwgS2VybmVsU2l6ZSwgTHVtaW5vc2l0eU1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBCbHVyUGFzcyB9IGZyb20gXCIuL2JsdXIuanNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJsb29tIHBhc3MuXHJcbiAqXHJcbiAqIFRoaXMgcGFzcyByZW5kZXJzIGEgc2NlbmUgd2l0aCBzdXBlcmltcG9zZWQgYmx1ciBieSB1dGlsaXNpbmcgdGhlIGZhc3QgS2F3YXNlXHJcbiAqIGNvbnZvbHV0aW9uIGFwcHJvYWNoLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9vbVBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBibG9vbSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yZXNvbHV0aW9uU2NhbGU9MC41XSAtIFRoZSByZW5kZXIgdGV4dHVyZSByZXNvbHV0aW9uIHNjYWxlLCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIHJlbmRlciBzaXplLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXJuZWxTaXplPUtlcm5lbFNpemUuTEFSR0VdIC0gVGhlIGJsdXIga2VybmVsIHNpemUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmludGVuc2l0eT0xLjBdIC0gVGhlIHN0cmVuZ3RoIG9mIHRoZSBibG9vbSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRpc3RpbmN0aW9uPTEuMF0gLSBUaGUgbHVtaW5hbmNlIGRpc3RpbmN0aW9uIGZhY3Rvci4gUmFpc2UgdGhpcyB2YWx1ZSB0byBicmluZyBvdXQgdGhlIGJyaWdodGVyIGVsZW1lbnRzIGluIHRoZSBzY2VuZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2NyZWVuTW9kZT10cnVlXSAtIFdoZXRoZXIgdGhlIHNjcmVlbiBibGVuZCBtb2RlIHNob3VsZCBiZSB1c2VkIGZvciBjb21iaW5pbmcgdGhlIGJsb29tIHRleHR1cmUgd2l0aCB0aGUgc2NlbmUgY29sb3JzLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJCbG9vbVBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGJsdXIgcGFzcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qmx1clBhc3N9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5ibHVyUGFzcyA9IG5ldyBCbHVyUGFzcyhvcHRpb25zKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcmVuZGVyIHRhcmdldC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQgPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoMSwgMSwge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0bWFnRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdHN0ZW5jaWxCdWZmZXI6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aEJ1ZmZlcjogZmFsc2VcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0LnRleHR1cmUubmFtZSA9IFwiQmxvb20uVGFyZ2V0XCI7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBjb21iaW5lIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q29tYmluZU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY29tYmluZU1hdGVyaWFsID0gbmV3IENvbWJpbmVNYXRlcmlhbCgob3B0aW9ucy5zY3JlZW5Nb2RlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5zY3JlZW5Nb2RlIDogdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5pbnRlbnNpdHkgPSBvcHRpb25zLmludGVuc2l0eTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgbHVtaW5vc2l0eSBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0x1bWlub3NpdHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmx1bWlub3NpdHlNYXRlcmlhbCA9IG5ldyBMdW1pbm9zaXR5TWF0ZXJpYWwodHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5kaXN0aW5jdGlvbiA9IG9wdGlvbnMuZGlzdGluY3Rpb247XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHJlc29sdXRpb24gc2NhbGUuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDAuNVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgcmVzb2x1dGlvblNjYWxlKCkgeyByZXR1cm4gdGhpcy5ibHVyUGFzcy5yZXNvbHV0aW9uU2NhbGU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogWW91IG5lZWQgdG8gY2FsbCB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjc2V0U2l6ZX0gYWZ0ZXIgY2hhbmdpbmcgdGhpcyB2YWx1ZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCByZXNvbHV0aW9uU2NhbGUoeCA9IDAuNSkgeyB0aGlzLmJsdXJQYXNzLnJlc29sdXRpb25TY2FsZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGJsdXIga2VybmVsIHNpemUuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7S2VybmVsU2l6ZX1cclxuXHQgKiBAZGVmYXVsdCBLZXJuZWxTaXplLkxBUkdFXHJcblx0ICovXHJcblxyXG5cdGdldCBrZXJuZWxTaXplKCkgeyByZXR1cm4gdGhpcy5ibHVyUGFzcy5rZXJuZWxTaXplOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtLZXJuZWxTaXplfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQga2VybmVsU2l6ZSh4ID0gS2VybmVsU2l6ZS5MQVJHRSkgeyB0aGlzLmJsdXJQYXNzLmtlcm5lbFNpemUgPSB4OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBvdmVyYWxsIGludGVuc2l0eSBvZiB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCAxLjBcclxuXHQgKi9cclxuXHJcblx0Z2V0IGludGVuc2l0eSgpIHsgcmV0dXJuIHRoaXMuY29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkyLnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBpbnRlbnNpdHkoeCA9IDEuMCkgeyB0aGlzLmNvbWJpbmVNYXRlcmlhbC51bmlmb3Jtcy5vcGFjaXR5Mi52YWx1ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGx1bWluYW5jZSBkaXN0aW5jdGlvbiBmYWN0b3IuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDEuMFxyXG5cdCAqL1xyXG5cclxuXHRnZXQgZGlzdGluY3Rpb24oKSB7IHJldHVybiB0aGlzLmx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy5kaXN0aW5jdGlvbi52YWx1ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgZGlzdGluY3Rpb24oeCA9IDEuMCkgeyB0aGlzLmx1bWlub3NpdHlNYXRlcmlhbC51bmlmb3Jtcy5kaXN0aW5jdGlvbi52YWx1ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogRXh0cmFjdHMgYSBsdW1pbmFuY2UgbWFwIGZyb20gdGhlIHJlYWQgYnVmZmVyLCBibHVycyBpdCBhbmQgY29tYmluZXMgaXRcclxuXHQgKiB3aXRoIHRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBxdWFkID0gdGhpcy5xdWFkO1xyXG5cdFx0Y29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG5cdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmE7XHJcblx0XHRjb25zdCBibHVyUGFzcyA9IHRoaXMuYmx1clBhc3M7XHJcblxyXG5cdFx0Y29uc3QgbHVtaW5vc2l0eU1hdGVyaWFsID0gdGhpcy5sdW1pbm9zaXR5TWF0ZXJpYWw7XHJcblx0XHRjb25zdCBjb21iaW5lTWF0ZXJpYWwgPSB0aGlzLmNvbWJpbmVNYXRlcmlhbDtcclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0O1xyXG5cclxuXHRcdC8vIEx1bWluYW5jZSBmaWx0ZXIuXHJcblx0XHRxdWFkLm1hdGVyaWFsID0gbHVtaW5vc2l0eU1hdGVyaWFsO1xyXG5cdFx0bHVtaW5vc2l0eU1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHJlbmRlclRhcmdldCk7XHJcblxyXG5cdFx0Ly8gQ29udm9sdXRpb24gcGhhc2UuXHJcblx0XHRibHVyUGFzcy5yZW5kZXIocmVuZGVyZXIsIHJlbmRlclRhcmdldCwgcmVuZGVyVGFyZ2V0KTtcclxuXHJcblx0XHQvLyBSZW5kZXIgdGhlIG9yaWdpbmFsIHNjZW5lIHdpdGggc3VwZXJpbXBvc2VkIGJsdXIuXHJcblx0XHRxdWFkLm1hdGVyaWFsID0gY29tYmluZU1hdGVyaWFsO1xyXG5cdFx0Y29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLnRleHR1cmUxLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0Y29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLnRleHR1cmUyLnZhbHVlID0gcmVuZGVyVGFyZ2V0LnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkanVzdHMgdGhlIGZvcm1hdCBvZiB0aGUgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxwaGEgLSBXaGV0aGVyIHRoZSByZW5kZXJlciB1c2VzIHRoZSBhbHBoYSBjaGFubmVsIG9yIG5vdC5cclxuXHQgKi9cclxuXHJcblx0aW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpIHtcclxuXHJcblx0XHR0aGlzLmJsdXJQYXNzLmluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKTtcclxuXHJcblx0XHRpZighYWxwaGEpIHsgdGhpcy5yZW5kZXJUYXJnZXQudGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7IH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdHRoaXMuYmx1clBhc3Muc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0XHR3aWR0aCA9IHRoaXMuYmx1clBhc3Mud2lkdGg7XHJcblx0XHRoZWlnaHQgPSB0aGlzLmJsdXJQYXNzLmhlaWdodDtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEJva2VoTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBEZXB0aCBvZiBGaWVsZCAoRG9GKSBwYXNzIHVzaW5nIGEgYm9rZWggc2hhZGVyLlxyXG4gKlxyXG4gKiBUaGlzIHBhc3MgcmVxdWlyZXMgYSB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjZGVwdGhUZXh0dXJlfS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQm9rZWhQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgYm9rZWggcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGVyc3BlY3RpdmVDYW1lcmF9IGNhbWVyYSAtIFRoZSBtYWluIGNhbWVyYS4gVXNlZCB0byBvYnRhaW4gdGhlIGFzcGVjdCByYXRpbyBhbmQgdGhlIG5lYXIgYW5kIGZhciBwbGFuZSBzZXR0aW5ncy5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQWRkaXRpb25hbCBwYXJhbWV0ZXJzLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5mb2N1cz0xLjBdIC0gRm9jdXMgZGlzdGFuY2UuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmFwZXJ0dXJlPTAuMDI1XSAtIENhbWVyYSBhcGVydHVyZSBzY2FsZS4gQmlnZ2VyIHZhbHVlcyBmb3Igc2hhbGxvd2VyIGRlcHRoIG9mIGZpZWxkLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhCbHVyPTEuMF0gLSBNYXhpbXVtIGJsdXIgc3RyZW5ndGguXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiQm9rZWhQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBib2tlaCBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jva2VoTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsID0gbmV3IEJva2VoTWF0ZXJpYWwoY2FtZXJhLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmJva2VoTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdHRoaXMuYm9rZWhNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHRoaXMuYm9rZWhNYXRlcmlhbC51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSByZWFkQnVmZmVyLmRlcHRoVGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnVuaWZvcm1zLmFzcGVjdC52YWx1ZSA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEJva2VoMk1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGFkdmFuY2VkIERlcHRoIG9mIEZpZWxkIChEb0YpIHBhc3MuXHJcbiAqXHJcbiAqIFlpZWxkcyBtb3JlIHJlYWxpc3RpYyByZXN1bHRzIGJ1dCBpcyBhbHNvIG1vcmUgZGVtYW5kaW5nLlxyXG4gKlxyXG4gKiBUaGlzIHBhc3MgcmVxdWlyZXMgYSB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjZGVwdGhUZXh0dXJlfS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQm9rZWgyUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGJva2VoMiBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQZXJzcGVjdGl2ZUNhbWVyYX0gY2FtZXJhIC0gVGhlIG1haW4gY2FtZXJhLiBVc2VkIHRvIG9idGFpbiB0aGUgZm9jYWwgbGVuZ3RoIGFuZCB0aGUgbmVhciBhbmQgZmFyIHBsYW5lIHNldHRpbmdzLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJpbmdzPTNdIC0gVGhlIGFtb3VudCBvZiBibHVyIHJpbmdzLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zYW1wbGVzPTRdIC0gVGhlIGFtb3VudCBvZiBzYW1wbGVzIHBlciByaW5nLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2hvd0ZvY3VzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGZvY3VzIHBvaW50IHNob3VsZCBiZSBoaWdobGlnaHRlZC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hbnVhbERvRj1mYWxzZV0gLSBFbmFibGVzIG1hbnVhbCBkZXB0aCBvZiBmaWVsZCBibHVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlnbmV0dGU9ZmFsc2VdIC0gRW5hYmxlcyBhIHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnBlbnRhZ29uPWZhbHNlXSAtIEVuYWJsZSB0byB1c2UgYSBwZW50YWdvbmFsIHNoYXBlIHRvIHNjYWxlIGdhdGhlcmVkIHRleGVscy5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNoYWRlckZvY3VzPXRydWVdIC0gRGlzYWJsZSBpZiB5b3UgY29tcHV0ZSB5b3VyIG93biBmb2NhbERlcHRoIChpbiBtZXRyZXMhKS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vaXNlPXRydWVdIC0gRGlzYWJsZSBpZiB5b3UgZG9uJ3Qgd2FudCBub2lzZSBwYXR0ZXJucyBmb3IgZGl0aGVyaW5nLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkJva2VoMlBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGJva2VoIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9rZWhNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmJva2VoTWF0ZXJpYWwgPSBuZXcgQm9rZWgyTWF0ZXJpYWwoY2FtZXJhLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmJva2VoTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdHRoaXMuYm9rZWhNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHRoaXMuYm9rZWhNYXRlcmlhbC51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSByZWFkQnVmZmVyLmRlcHRoVGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5ib2tlaE1hdGVyaWFsLnNldFRleGVsU2l6ZSgxLjAgLyB3aWR0aCwgMS4wIC8gaGVpZ2h0KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIFVzZWQgZm9yIHNhdmluZyB0aGUgb3JpZ2luYWwgY2xlYXIgY29sb3Igb2YgdGhlIHJlbmRlcmVyLlxyXG4gKlxyXG4gKiBAdHlwZSBDb2xvclxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5cclxuY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoKTtcclxuXHJcbi8qKlxyXG4gKiBBIGNsZWFyIHBhc3MuXHJcbiAqXHJcbiAqIFlvdSBjYW4gcHJldmVudCBzcGVjaWZpYyBidWZmZXJzIGZyb20gYmVpbmcgY2xlYXJlZCBieSBzZXR0aW5nIGVpdGhlciB0aGVcclxuICogYXV0b0NsZWFyQ29sb3IsIGF1dG9DbGVhclN0ZW5jaWwgb3IgYXV0b0NsZWFyRGVwdGggcHJvcGVydGllcyBvZiB0aGUgcmVuZGVyZXJcclxuICogdG8gZmFsc2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENsZWFyUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGNsZWFyIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQWRkaXRpb25hbCBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7Q29sb3J9IFtvcHRpb25zLmNsZWFyQ29sb3I9bnVsbF0gLSBBbiBvdmVycmlkZSBjbGVhciBjb2xvci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xlYXJBbHBoYT0wLjBdIC0gQW4gb3ZlcnJpZGUgY2xlYXIgYWxwaGEuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKG51bGwsIG51bGwsIG51bGwpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJDbGVhclBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENsZWFyIGNvbG9yLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDb2xvcn1cclxuXHRcdCAqIEBkZWZhdWx0IG51bGxcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IChvcHRpb25zLmNsZWFyQ29sb3IgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmNsZWFyQ29sb3IgOiBudWxsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2xlYXIgYWxwaGEuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge051bWJlcn1cclxuXHRcdCAqIEBkZWZhdWx0IDAuMFxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKG9wdGlvbnMuY2xlYXJBbHBoYSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuY2xlYXJBbHBoYSA6IDAuMDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgdGhlIHJlYWQgYnVmZmVyIG9yIHRoZSBzY3JlZW4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlcikge1xyXG5cclxuXHRcdGNvbnN0IGNsZWFyQ29sb3IgPSB0aGlzLmNsZWFyQ29sb3I7XHJcblxyXG5cdFx0bGV0IGNsZWFyQWxwaGE7XHJcblxyXG5cdFx0aWYoY2xlYXJDb2xvciAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0Y29sb3IuY29weShyZW5kZXJlci5nZXRDbGVhckNvbG9yKCkpO1xyXG5cdFx0XHRjbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKGNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCh0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHJlYWRCdWZmZXIpO1xyXG5cdFx0cmVuZGVyZXIuY2xlYXIoKTtcclxuXHJcblx0XHRpZihjbGVhckNvbG9yICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKGNvbG9yLCBjbGVhckFscGhhKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBhc3MgdGhhdCBkaXNhYmxlcyB0aGUgc3RlbmNpbCBtYXNrLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGVhck1hc2tQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY2xlYXIgbWFzayBwYXNzLlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRzdXBlcihudWxsLCBudWxsLCBudWxsKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiQ2xlYXJNYXNrUGFzc1wiO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc2FibGVzIHRoZSBzdGVuY2lsIHRlc3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIpIHtcclxuXHJcblx0XHRyZW5kZXJlci5zdGF0ZS5idWZmZXJzLnN0ZW5jaWwuc2V0VGVzdChmYWxzZSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRG90U2NyZWVuTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBkb3Qgc2NyZWVuIHBhc3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERvdFNjcmVlblBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBkb3Qgc2NyZWVuIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmFuZ2xlPTEuNTddIC0gVGhlIGFuZ2xlIG9mIHRoZSBwYXR0ZXJuLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zY2FsZT0xLjBdIC0gVGhlIHNjYWxlIG9mIHRoZSBvdmVyYWxsIGVmZmVjdC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW50ZW5zaXR5PTEuMF0gLSBUaGUgaW50ZW5zaXR5IG9mIHRoZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdmVyYWdlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIHNoYWRlciBzaG91bGQgb3V0cHV0IGEgY29sb3VyIGF2ZXJhZ2UgKGJsYWNrIGFuZCB3aGl0ZSkuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkRvdFNjcmVlblBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGRvdCBzY3JlZW4gc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtEb3RTY3JlZW5NYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IERvdFNjcmVlbk1hdGVyaWFsKG9wdGlvbnMuYXZlcmFnZSk7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5hbmdsZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuYW5nbGUudmFsdWUgPSBvcHRpb25zLmFuZ2xlOyB9XHJcblx0XHRpZihvcHRpb25zLnNjYWxlICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5zY2FsZS52YWx1ZSA9IG9wdGlvbnMuc2NhbGU7IH1cclxuXHRcdGlmKG9wdGlvbnMuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbnRlbnNpdHkudmFsdWUgPSBvcHRpb25zLmludGVuc2l0eTsgfVxyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0d2lkdGggPSBNYXRoLm1heCgxLCB3aWR0aCk7XHJcblx0XHRoZWlnaHQgPSBNYXRoLm1heCgxLCBoZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub2Zmc2V0UmVwZWF0LnZhbHVlLnogPSB3aWR0aDtcclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub2Zmc2V0UmVwZWF0LnZhbHVlLncgPSBoZWlnaHQ7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGVwdGhNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGRlcHRoIHBhc3MuXHJcbiAqXHJcbiAqIFJlYWRzIHRoZSBkZXB0aCBmcm9tIGEgZGVwdGggdGV4dHVyZSBhbmQgcmVuZGVycyBpdC5cclxuICpcclxuICogVGhpcyBwYXNzIHJlcXVpcmVzIGEge0BsaW5rIEVmZmVjdENvbXBvc2VyI2RlcHRoVGV4dHVyZX0uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERlcHRoUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGRlcHRoIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1BlcnNwZWN0aXZlQ2FtZXJhfSBjYW1lcmEgLSBUaGUgbWFpbiBjYW1lcmEuIFVzZWQgdG8gb2J0YWluIHRoZSBuZWFyIGFuZCBmYXIgcGxhbmUgc2V0dGluZ3MuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlcHRoUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgZGVwdGggc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtEZXB0aE1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuZGVwdGhNYXRlcmlhbCA9IG5ldyBEZXB0aE1hdGVyaWFsKGNhbWVyYSk7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5kZXB0aE1hdGVyaWFsO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHR0aGlzLmRlcHRoTWF0ZXJpYWwudW5pZm9ybXMudERlcHRoLnZhbHVlID0gcmVhZEJ1ZmZlci5kZXB0aFRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBGaWxtTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBmaWxtIHBhc3MuXHJcbiAqXHJcbiAqIFByb3ZpZGVzIHZhcmlvdXMgY2luZW1hdGljIGVmZmVjdHMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbG1QYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZmlsbSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLiBEaXNhYmxlZCBlZmZlY3RzIGhhdmUgbm8gbmVnYXRpdmUgaW1wYWN0IG9uIHBlcmZvcm1hbmNlLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZ3JleXNjYWxlPWZhbHNlXSAtIEVuYWJsZSBncmV5c2NhbGUgZWZmZWN0LiBHcmV5c2NhbGUgYW5kIHNlcGlhIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zZXBpYT1mYWxzZV0gLSBFbmFibGUgc2VwaWEgZWZmZWN0LiBHcmV5c2NhbGUgYW5kIHNlcGlhIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWduZXR0ZT1mYWxzZV0gLSBBcHBseSB2aWduZXR0ZSBlZmZlY3QuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5lc2tpbD1mYWxzZV0gLSBVc2UgRXNraWwncyB2aWduZXR0ZSBhcHByb2FjaC4gVGhlIGRlZmF1bHQgbG9va3MgZHVzdHkgd2hpbGUgRXNraWwgbG9va3MgbW9yZSBidXJuZWQgb3V0LlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2NyZWVuTW9kZT10cnVlXSAtIFdoZXRoZXIgdGhlIHNjcmVlbiBibGVuZCBtb2RlIHNob3VsZCBiZSB1c2VkIGZvciBub2lzZSBhbmQgc2NhbmxpbmVzLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2NhbmxpbmVzPXRydWVdIC0gU2hvdyBzY2FubGluZXMuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ub2lzZT10cnVlXSAtIFNob3cgbm9pc2UtYmFzZWQgZmlsbSBncmFpbi5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubm9pc2VJbnRlbnNpdHk9MC41XSAtIFRoZSBub2lzZSBpbnRlbnNpdHkuIDAuMCB0byAxLjAuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNjYW5saW5lSW50ZW5zaXR5PTAuMDVdIC0gVGhlIHNjYW5saW5lIGludGVuc2l0eS4gMC4wIHRvIDEuMC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2NhbmxpbmVEZW5zaXR5PTEuMF0gLSBUaGUgbnVtYmVyIG9mIHNjYW5saW5lcyBpbiBwZXJjZW50LCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIGhlaWdodC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZ3JleXNjYWxlSW50ZW5zaXR5PTEuMF0gLSBUaGUgaW50ZW5zaXR5IG9mIHRoZSBncmV5c2NhbGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zZXBpYUludGVuc2l0eT0xLjBdIC0gVGhlIGludGVuc2l0eSBvZiB0aGUgc2VwaWEgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52aWduZXR0ZU9mZnNldD0xLjBdIC0gVGhlIG9mZnNldCBvZiB0aGUgdmlnbmV0dGUgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52aWduZXR0ZURhcmtuZXNzPTEuMF0gLSBUaGUgZGFya25lc3Mgb2YgdGhlIHZpZ25ldHRlIGVmZmVjdC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiRmlsbVBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBGaWxtIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7RmlsbU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgRmlsbU1hdGVyaWFsKG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgYW1vdW50IG9mIHNjYW5saW5lcyBpbiBwZXJjZW50LCByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIGhlaWdodC5cclxuXHRcdCAqXHJcblx0XHQgKiBZb3UgbmVlZCB0byBjYWxsIHtAbGluayBFZmZlY3RDb21wb3NlciNzZXRTaXplfSBhZnRlciBjaGFuZ2luZyB0aGlzXHJcblx0XHQgKiB2YWx1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQGRlZmF1bHQgMS4yNVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zY2FubGluZURlbnNpdHkgPSAob3B0aW9ucy5zY2FubGluZURlbnNpdHkgPT09IHVuZGVmaW5lZCkgPyAxLjI1IDogb3B0aW9ucy5zY2FubGluZURlbnNpdHk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsdGEgLSBUaGUgcmVuZGVyIGRlbHRhIHRpbWUuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIsIGRlbHRhKSB7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSArPSBkZWx0YTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkanVzdHMgdGhlIHNjYW5saW5lIGNvdW50IHVzaW5nIHRoZSByZW5kZXJlcidzIGhlaWdodC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5zY2FubGluZUNvdW50LnZhbHVlID0gTWF0aC5yb3VuZChoZWlnaHQgKiB0aGlzLnNjYW5saW5lRGVuc2l0eSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YVRleHR1cmUsIFJHQkZvcm1hdCwgRmxvYXRUeXBlIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEdsaXRjaE1hdGVyaWFsIH0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5pbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBsb3cgLSBUaGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByYW5kb20gdmFsdWUuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50KGxvdywgaGlnaCkge1xyXG5cclxuXHRyZXR1cm4gbG93ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cgKyAxKSk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBsb3cgLSBUaGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByYW5kb20gdmFsdWUuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tRmxvYXQobG93LCBoaWdoKSB7XHJcblxyXG5cdHJldHVybiBsb3cgKyBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZ2xpdGNoIHBhc3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEdsaXRjaFBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBnbGl0Y2ggcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge1RleHR1cmV9IFtvcHRpb25zLnBlcnR1cmJNYXBdIC0gQSBwZXJ0dXJiYXRpb24gbWFwLiBJZiBub25lIGlzIHByb3ZpZGVkLCBhIG5vaXNlIHRleHR1cmUgd2lsbCBiZSBjcmVhdGVkLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kdFNpemU9NjRdIC0gVGhlIHNpemUgb2YgdGhlIGdlbmVyYXRlZCBub2lzZSBtYXAuIFdpbGwgYmUgaWdub3JlZCBpZiBhIHBlcnR1cmJhdGlvbiBtYXAgaXMgcHJvdmlkZWQuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkdsaXRjaFBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHbGl0Y2ggc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtHbGl0Y2hNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IEdsaXRjaE1hdGVyaWFsKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcGVydHVyYmF0aW9uIG1hcC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7VGV4dHVyZX1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnRleHR1cmUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucGVydHVyYk1hcCA9IChvcHRpb25zLnBlcnR1cmJNYXAgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnBlcnR1cmJNYXAgOiB0aGlzLmdlbmVyYXRlUGVydHVyYk1hcChvcHRpb25zLmR0U2l6ZSk7XHJcblx0XHR0aGlzLnBlcnR1cmJNYXAubmFtZSA9IFwiR2xpdGNoLlBlcnR1cmJhdGlvblwiO1xyXG5cdFx0dGhpcy5wZXJ0dXJiTWFwLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIGVmZmVjdCBtb2RlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtHbGl0Y2hNb2RlfVxyXG5cdFx0ICogQGRlZmF1bHQgR2xpdGNoTW9kZS5TUE9SQURJQ1xyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tb2RlID0gR2xpdGNoTW9kZS5TUE9SQURJQztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvdW50ZXIgZm9yIGdsaXRjaCBhY3RpdmF0aW9uIGFuZCBkZWFjdGl2YXRpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge051bWJlcn1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByYW5kb20gYnJlYWsgcG9pbnQgZm9yIHRoZSBzcG9yYWRpYyBnbGl0Y2ggYWN0aXZhdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYnJlYWtQb2ludCA9IHJhbmRvbUludCgxMjAsIDI0MCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGN1cnJlbnQgcGVydHVyYmF0aW9uIG1hcC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtUZXh0dXJlfVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgcGVydHVyYk1hcCgpIHsgcmV0dXJuIHRoaXMudGV4dHVyZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBc3NpZ25pbmcgYSBuZXcgcGVydHVyYmF0aW9uIG1hcCBkb2VzIG5vdCBkZXN0cm95IHRoZSBjdXJyZW50IG9uZSFcclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtUZXh0dXJlfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgcGVydHVyYk1hcCh4KSB7XHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlID0geDtcclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudFBlcnR1cmIudmFsdWUgPSB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3lzIHRoZSBjdXJyZW50IHBlcnR1cmJhdGlvbiBtYXAgYW5kIHJlcGxhY2VzIGl0IHdpdGggYSBuZXcgb25lLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzaXplPTY0XSAtIFRoZSB0ZXh0dXJlIHNpemUuXHJcblx0ICogQHJldHVybiB7RGF0YVRleHR1cmV9IFRoZSBwZXJ0dXJiYXRpb24gdGV4dHVyZS5cclxuXHQgKi9cclxuXHJcblx0Z2VuZXJhdGVQZXJ0dXJiTWFwKHNpemUgPSA2NCkge1xyXG5cclxuXHRcdGNvbnN0IHBpeGVscyA9IHNpemUgKiBzaXplO1xyXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkocGl4ZWxzICogMyk7XHJcblxyXG5cdFx0bGV0IGR0ID0gdGhpcy5wZXJ0dXJiTWFwO1xyXG5cdFx0bGV0IGksIHg7XHJcblxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgcGl4ZWxzOyArK2kpIHtcclxuXHJcblx0XHRcdHggPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuXHRcdFx0ZGF0YVtpICogM10gPSB4O1xyXG5cdFx0XHRkYXRhW2kgKiAzICsgMV0gPSB4O1xyXG5cdFx0XHRkYXRhW2kgKiAzICsgMl0gPSB4O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZihkdCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0ZHQuZGlzcG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRkdCA9IG5ldyBEYXRhVGV4dHVyZShkYXRhLCBzaXplLCBzaXplLCBSR0JGb3JtYXQsIEZsb2F0VHlwZSk7XHJcblx0XHRkdC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5wZXJ0dXJiTWFwID0gZHQ7XHJcblxyXG5cdFx0cmV0dXJuIGR0O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBtb2RlID0gdGhpcy5tb2RlO1xyXG5cdFx0Y29uc3QgY291bnRlciA9IHRoaXMuY291bnRlcjtcclxuXHRcdGNvbnN0IGJyZWFrUG9pbnQgPSB0aGlzLmJyZWFrUG9pbnQ7XHJcblx0XHRjb25zdCB1bmlmb3JtcyA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXM7XHJcblxyXG5cdFx0dW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHR1bmlmb3Jtcy5zZWVkLnZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHVuaWZvcm1zLmFjdGl2ZS52YWx1ZSA9IHRydWU7XHJcblxyXG5cdFx0aWYoY291bnRlciAlIGJyZWFrUG9pbnQgPT09IDAgfHwgbW9kZSA9PT0gR2xpdGNoTW9kZS5DT05TVEFOVF9XSUxEKSB7XHJcblxyXG5cdFx0XHR1bmlmb3Jtcy5hbW91bnQudmFsdWUgPSBNYXRoLnJhbmRvbSgpIC8gMzAuMDtcclxuXHRcdFx0dW5pZm9ybXMuYW5nbGUudmFsdWUgPSByYW5kb21GbG9hdCgtTWF0aC5QSSwgTWF0aC5QSSk7XHJcblx0XHRcdHVuaWZvcm1zLnNlZWRYLnZhbHVlID0gcmFuZG9tRmxvYXQoLTEuMCwgMS4wKTtcclxuXHRcdFx0dW5pZm9ybXMuc2VlZFkudmFsdWUgPSByYW5kb21GbG9hdCgtMS4wLCAxLjApO1xyXG5cdFx0XHR1bmlmb3Jtcy5kaXN0b3J0aW9uWC52YWx1ZSA9IHJhbmRvbUZsb2F0KDAuMCwgMS4wKTtcclxuXHRcdFx0dW5pZm9ybXMuZGlzdG9ydGlvblkudmFsdWUgPSByYW5kb21GbG9hdCgwLjAsIDEuMCk7XHJcblxyXG5cdFx0XHR0aGlzLmJyZWFrUG9pbnQgPSByYW5kb21JbnQoMTIwLCAyNDApO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRpZihjb3VudGVyICUgYnJlYWtQb2ludCA8IGJyZWFrUG9pbnQgLyA1IHx8IG1vZGUgPT09IEdsaXRjaE1vZGUuQ09OU1RBTlRfTUlMRCkge1xyXG5cclxuXHRcdFx0XHR1bmlmb3Jtcy5hbW91bnQudmFsdWUgPSBNYXRoLnJhbmRvbSgpIC8gOTAuMDtcclxuXHRcdFx0XHR1bmlmb3Jtcy5hbmdsZS52YWx1ZSA9IHJhbmRvbUZsb2F0KC1NYXRoLlBJLCBNYXRoLlBJKTtcclxuXHRcdFx0XHR1bmlmb3Jtcy5kaXN0b3J0aW9uWC52YWx1ZSA9IHJhbmRvbUZsb2F0KDAuMCwgMS4wKTtcclxuXHRcdFx0XHR1bmlmb3Jtcy5kaXN0b3J0aW9uWS52YWx1ZSA9IHJhbmRvbUZsb2F0KDAuMCwgMS4wKTtcclxuXHRcdFx0XHR1bmlmb3Jtcy5zZWVkWC52YWx1ZSA9IHJhbmRvbUZsb2F0KC0wLjMsIDAuMyk7XHJcblx0XHRcdFx0dW5pZm9ybXMuc2VlZFkudmFsdWUgPSByYW5kb21GbG9hdCgtMC4zLCAwLjMpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gU3BvcmFkaWMuXHJcblx0XHRcdFx0dW5pZm9ybXMuYWN0aXZlLnZhbHVlID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdCsrdGhpcy5jb3VudGVyO1xyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGdsaXRjaCBtb2RlIGVudW1lcmF0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gU1BPUkFESUMgLSBTcG9yYWRpYyBnbGl0Y2hlcy5cclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IENPTlNUQU5UX01JTEQgLSBDb25zdGFudCBtaWxkIGdsaXRjaGVzLlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gQ09OU1RBTlRfV0lMRCAtIENvbnN0YW50IHdpbGQgZ2xpdGNoZXMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsaXRjaE1vZGUgPSB7XHJcblxyXG5cdFNQT1JBRElDOiAwLFxyXG5cdENPTlNUQU5UX01JTEQ6IDEsXHJcblx0Q09OU1RBTlRfV0lMRDogMlxyXG5cclxufTtcclxuIiwiaW1wb3J0IHsgQ2xlYXJQYXNzIH0gZnJvbSBcIi4vY2xlYXIuanNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBhc3MgdGhhdCByZW5kZXJzIGEgZ2l2ZW4gc2NlbmUgZGlyZWN0bHkgb24gc2NyZWVuIG9yIGludG8gdGhlIHJlYWQgYnVmZmVyXHJcbiAqIGZvciBmdXJ0aGVyIHByb2Nlc3NpbmcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlclBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyByZW5kZXIgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U2NlbmV9IHNjZW5lIC0gVGhlIHNjZW5lIHRvIHJlbmRlci5cclxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIC0gVGhlIGNhbWVyYSB0byB1c2UgdG8gcmVuZGVyIHRoZSBzY2VuZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQWRkaXRpb25hbCBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7TWF0ZXJpYWx9IFtvcHRpb25zLm92ZXJyaWRlTWF0ZXJpYWw9bnVsbF0gLSBBbiBvdmVycmlkZSBtYXRlcmlhbCBmb3IgdGhlIHNjZW5lLlxyXG5cdCAqIEBwYXJhbSB7Q29sb3J9IFtvcHRpb25zLmNsZWFyQ29sb3I9bnVsbF0gLSBBbiBvdmVycmlkZSBjbGVhciBjb2xvci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xlYXJBbHBoYT0xLjBdIC0gQW4gb3ZlcnJpZGUgY2xlYXIgYWxwaGEuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGVhckRlcHRoPWZhbHNlXSAtIFdoZXRoZXIgZGVwdGggc2hvdWxkIGJlIGNsZWFyZWQgZXhwbGljaXRseS5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNsZWFyPXRydWVdIC0gV2hldGhlciBhbGwgYnVmZmVycyBzaG91bGQgYmUgY2xlYXJlZC5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIGNhbWVyYSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoc2NlbmUsIGNhbWVyYSwgbnVsbCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIlJlbmRlclBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY2xlYXIgcGFzcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q2xlYXJQYXNzfVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jbGVhclBhc3MgPSBuZXcgQ2xlYXJQYXNzKG9wdGlvbnMpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQW4gb3ZlcnJpZGUgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge01hdGVyaWFsfVxyXG5cdFx0ICogQGRlZmF1bHQgbnVsbFxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gKG9wdGlvbnMub3ZlcnJpZGVNYXRlcmlhbCAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMub3ZlcnJpZGVNYXRlcmlhbCA6IG51bGw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGVwdGggYnVmZmVyIHNob3VsZCBiZSBjbGVhcmVkIGV4cGxpY2l0bHkuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jbGVhckRlcHRoID0gKG9wdGlvbnMuY2xlYXJEZXB0aCAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuY2xlYXJEZXB0aCA6IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbG9yLCBkZXB0aCBhbmQgc3RlbmNpbCBidWZmZXJzIHNob3VsZCBiZSBjbGVhcmVkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEV2ZW4gd2l0aCBjbGVhciBzZXQgdG8gdHJ1ZSB5b3UgY2FuIHByZXZlbnQgc3BlY2lmaWMgYnVmZmVycyBmcm9tIGJlaW5nXHJcblx0XHQgKiBjbGVhcmVkIGJ5IHNldHRpbmcgZWl0aGVyIHRoZSBhdXRvQ2xlYXJDb2xvciwgYXV0b0NsZWFyU3RlbmNpbCBvclxyXG5cdFx0ICogYXV0b0NsZWFyRGVwdGggcHJvcGVydGllcyBvZiB0aGUgcmVuZGVyZXIgdG8gZmFsc2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCB0cnVlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNsZWFyID0gKG9wdGlvbnMuY2xlYXIgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmNsZWFyIDogdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBzY2VuZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiByZWFkQnVmZmVyO1xyXG5cclxuXHRcdGlmKHRoaXMuY2xlYXIpIHtcclxuXHJcblx0XHRcdHRoaXMuY2xlYXJQYXNzLnJlbmRlcihyZW5kZXJlciwgdGFyZ2V0KTtcclxuXHJcblx0XHR9IGVsc2UgaWYodGhpcy5jbGVhckRlcHRoKSB7XHJcblxyXG5cdFx0XHRyZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQodGFyZ2V0KTtcclxuXHRcdFx0cmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCB0aGlzLmNhbWVyYSwgdGFyZ2V0KTtcclxuXHRcdHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29sb3IsXHJcblx0TGluZWFyRmlsdGVyLFxyXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxyXG5cdFJHQkZvcm1hdCxcclxuXHRTY2VuZSxcclxuXHRWZWN0b3IzLFxyXG5cdFdlYkdMUmVuZGVyVGFyZ2V0XHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBDb21iaW5lTWF0ZXJpYWwsIEdvZFJheXNNYXRlcmlhbCwgS2VybmVsU2l6ZSB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyBCbHVyUGFzcyB9IGZyb20gXCIuL2JsdXIuanNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFtcHMgYSBnaXZlbiB2YWx1ZS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHN0YXRpY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2xhbXAuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgdmFsdWUuXHJcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIGNsYW1wZWQgdmFsdWUuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcblxyXG5cdHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNyZXB1c2N1bGFyIHJheXMgcGFzcy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgR29kUmF5c1Bhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBnb2QgcmF5cyBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTY2VuZX0gc2NlbmUgLSBUaGUgbWFpbiBzY2VuZS5cclxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIC0gVGhlIG1haW4gY2FtZXJhLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0M0R9IGxpZ2h0U291cmNlIC0gVGhlIG1haW4gbGlnaHQgc291cmNlLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZGVuc2l0eT0wLjk2XSAtIFRoZSBkZW5zaXR5IG9mIHRoZSBsaWdodCByYXlzLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5kZWNheT0wLjkzXSAtIEFuIGlsbHVtaW5hdGlvbiBkZWNheSBmYWN0b3IuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndlaWdodD0wLjRdIC0gQSBsaWdodCByYXkgd2VpZ2h0IGZhY3Rvci5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZXhwb3N1cmU9MC42XSAtIEEgY29uc3RhbnQgYXR0ZW51YXRpb24gY29lZmZpY2llbnQuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNsYW1wTWF4PTEuMF0gLSBBbiB1cHBlciBib3VuZCBmb3IgdGhlIHNhdHVyYXRpb24gb2YgdGhlIG92ZXJhbGwgZWZmZWN0LlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbnRlbnNpdHk9MS4wXSAtIEEgY29uc3RhbnQgZmFjdG9yIGZvciBhZGRpdGl2ZSBibGVuZGluZy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmVzb2x1dGlvblNjYWxlPTAuNV0gLSBUaGUgcmVuZGVyIHRleHR1cmUgcmVzb2x1dGlvbiBzY2FsZSwgcmVsYXRpdmUgdG8gdGhlIHNjcmVlbiByZW5kZXIgc2l6ZS5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2VybmVsU2l6ZT1LZXJuZWxTaXplLkxBUkdFXSAtIFRoZSBibHVyIGtlcm5lbCBzaXplLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zYW1wbGVzPTYwXSAtIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWwuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNjcmVlbk1vZGU9dHJ1ZV0gLSBXaGV0aGVyIHRoZSBzY3JlZW4gYmxlbmQgbW9kZSBzaG91bGQgYmUgdXNlZCBmb3IgY29tYmluaW5nIHRoZSBnb2QgcmF5cyB0ZXh0dXJlIHdpdGggdGhlIHNjZW5lIGNvbG9ycy5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIGNhbWVyYSwgbGlnaHRTb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkdvZFJheXNQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBzY2VuZSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGxpZ2h0IHNvdXJjZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U2NlbmV9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5saWdodFNjZW5lID0gbmV3IFNjZW5lKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbWFpbiBzY2VuZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U2NlbmV9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5tYWluU2NlbmUgPSBzY2VuZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBtYWluIGNhbWVyYS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q2FtZXJhfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWFpbkNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcGFzcyB0aGF0IG9ubHkgcmVuZGVycyB0aGUgbGlnaHQgc291cmNlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtSZW5kZXJQYXNzfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyUGFzc0xpZ2h0ID0gbmV3IFJlbmRlclBhc3ModGhpcy5saWdodFNjZW5lLCB0aGlzLm1haW5DYW1lcmEpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBwYXNzIHRoYXQgcmVuZGVycyB0aGUgbWFza2VkIHNjZW5lIG92ZXIgdGhlIGxpZ2h0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtSZW5kZXJQYXNzfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyUGFzc01hc2sgPSBuZXcgUmVuZGVyUGFzcyh0aGlzLm1haW5TY2VuZSwgdGhpcy5tYWluQ2FtZXJhLCB7XHJcblx0XHRcdG92ZXJyaWRlTWF0ZXJpYWw6IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KSxcclxuXHRcdFx0Y2xlYXJDb2xvcjogbmV3IENvbG9yKDB4MDAwMDAwKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJQYXNzTWFzay5jbGVhciA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBibHVyIHBhc3MuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0JsdXJQYXNzfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuYmx1clBhc3MgPSBuZXcgQmx1clBhc3Mob3B0aW9ucyk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHJlbmRlciB0YXJnZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WCA9IG5ldyBXZWJHTFJlbmRlclRhcmdldCgxLCAxLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogZmFsc2UsXHJcblx0XHRcdGRlcHRoQnVmZmVyOiBmYWxzZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRYLnRleHR1cmUubmFtZSA9IFwiR29kUmF5cy5UYXJnZXRYXCI7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFgudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgc2Vjb25kIHJlbmRlciB0YXJnZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WSA9IHRoaXMucmVuZGVyVGFyZ2V0WC5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0WS50ZXh0dXJlLm5hbWUgPSBcIkdvZFJheXMuVGFyZ2V0WVwiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByZW5kZXIgdGFyZ2V0IGZvciB0aGUgbWFza2VkIGxpZ2h0IHNjZW5lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldE1hc2sgPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoMSwgMSwge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0bWFnRmlsdGVyOiBMaW5lYXJGaWx0ZXJcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0TWFzay50ZXh0dXJlLm5hbWUgPSBcIkdvZFJheXMuTWFza1wiO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRNYXNrLnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbGlnaHQgc291cmNlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtPYmplY3QzRH1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubGlnaHRTb3VyY2UgPSBsaWdodFNvdXJjZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBsaWdodCBwb3NpdGlvbiBpbiBzY3JlZW4gc3BhY2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1ZlY3RvcjN9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zY3JlZW5Qb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGdvZCByYXlzIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7R29kUmF5c01hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuZ29kUmF5c01hdGVyaWFsID0gbmV3IEdvZFJheXNNYXRlcmlhbCgpO1xyXG5cdFx0dGhpcy5nb2RSYXlzTWF0ZXJpYWwudW5pZm9ybXMubGlnaHRQb3NpdGlvbi52YWx1ZSA9IHRoaXMuc2NyZWVuUG9zaXRpb247XHJcblxyXG5cdFx0aWYob3B0aW9ucy5leHBvc3VyZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZ29kUmF5c01hdGVyaWFsLnVuaWZvcm1zLmV4cG9zdXJlLnZhbHVlID0gb3B0aW9ucy5leHBvc3VyZTsgfVxyXG5cdFx0aWYob3B0aW9ucy5kZW5zaXR5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5nb2RSYXlzTWF0ZXJpYWwudW5pZm9ybXMuZGVuc2l0eS52YWx1ZSA9IG9wdGlvbnMuZGVuc2l0eTsgfVxyXG5cdFx0aWYob3B0aW9ucy5kZWNheSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZ29kUmF5c01hdGVyaWFsLnVuaWZvcm1zLmRlY2F5LnZhbHVlID0gb3B0aW9ucy5kZWNheTsgfVxyXG5cdFx0aWYob3B0aW9ucy53ZWlnaHQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmdvZFJheXNNYXRlcmlhbC51bmlmb3Jtcy53ZWlnaHQudmFsdWUgPSBvcHRpb25zLndlaWdodDsgfVxyXG5cdFx0aWYob3B0aW9ucy5jbGFtcE1heCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZ29kUmF5c01hdGVyaWFsLnVuaWZvcm1zLmNsYW1wTWF4LnZhbHVlID0gb3B0aW9ucy5jbGFtcE1heDsgfVxyXG5cclxuXHRcdHRoaXMuc2FtcGxlcyA9IG9wdGlvbnMuc2FtcGxlcztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY29tYmluZSBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvbWJpbmVNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvbWJpbmVNYXRlcmlhbCA9IG5ldyBDb21iaW5lTWF0ZXJpYWwoKG9wdGlvbnMuc2NyZWVuTW9kZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuc2NyZWVuTW9kZSA6IHRydWUpO1xyXG5cclxuXHRcdHRoaXMuaW50ZW5zaXR5ID0gb3B0aW9ucy5pbnRlbnNpdHk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHJlc29sdXRpb24gc2NhbGUuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqIEBkZWZhdWx0IDAuNVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgcmVzb2x1dGlvblNjYWxlKCkgeyByZXR1cm4gdGhpcy5ibHVyUGFzcy5yZXNvbHV0aW9uU2NhbGU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogWW91IG5lZWQgdG8gY2FsbCB7QGxpbmsgRWZmZWN0Q29tcG9zZXIjc2V0U2l6ZX0gYWZ0ZXIgY2hhbmdpbmcgdGhpcyB2YWx1ZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCByZXNvbHV0aW9uU2NhbGUoeCA9IDAuNSkgeyB0aGlzLmJsdXJQYXNzLnJlc29sdXRpb25TY2FsZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGJsdXIga2VybmVsIHNpemUuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7S2VybmVsU2l6ZX1cclxuXHQgKiBAZGVmYXVsdCBLZXJuZWxTaXplLkxBUkdFXHJcblx0ICovXHJcblxyXG5cdGdldCBrZXJuZWxTaXplKCkgeyByZXR1cm4gdGhpcy5ibHVyUGFzcy5rZXJuZWxTaXplOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtLZXJuZWxTaXplfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQga2VybmVsU2l6ZSh4ID0gS2VybmVsU2l6ZS5MQVJHRSkgeyB0aGlzLmJsdXJQYXNzLmtlcm5lbFNpemUgPSB4OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBvdmVyYWxsIGludGVuc2l0eSBvZiB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCAxLjBcclxuXHQgKi9cclxuXHJcblx0Z2V0IGludGVuc2l0eSgpIHsgcmV0dXJuIHRoaXMuY29tYmluZU1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkyLnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICovXHJcblxyXG5cdHNldCBpbnRlbnNpdHkoeCA9IDEuMCkgeyB0aGlzLmNvbWJpbmVNYXRlcmlhbC51bmlmb3Jtcy5vcGFjaXR5Mi52YWx1ZSA9IHg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbC5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICogQGRlZmF1bHQgNjBcclxuXHQgKi9cclxuXHJcblx0Z2V0IHNhbXBsZXMoKSB7IHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy5nb2RSYXlzTWF0ZXJpYWwuZGVmaW5lcy5OVU1fU0FNUExFU19JTlQpOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgdmFsdWUgbXVzdCBiZSBjYXJlZnVsbHkgY2hvc2VuLiBBIGhpZ2hlciB2YWx1ZSBkaXJlY3RseSBpbmNyZWFzZXMgdGhlXHJcblx0ICogR1BVIGxvYWQuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgc2FtcGxlcyh4ID0gNjApIHtcclxuXHJcblx0XHR4ID0gTWF0aC5mbG9vcih4KTtcclxuXHJcblx0XHR0aGlzLmdvZFJheXNNYXRlcmlhbC5kZWZpbmVzLk5VTV9TQU1QTEVTX0ZMT0FUID0geC50b0ZpeGVkKDEpO1xyXG5cdFx0dGhpcy5nb2RSYXlzTWF0ZXJpYWwuZGVmaW5lcy5OVU1fU0FNUExFU19JTlQgPSB4LnRvRml4ZWQoMCk7XHJcblx0XHR0aGlzLmdvZFJheXNNYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgc2NlbmUuXHJcblx0ICpcclxuXHQgKiBUaGUgZ29kIHJheXMgcGFzcyBoYXMgZm91ciBwaGFzZXM6XHJcblx0ICpcclxuXHQgKiBNYXNrIFBoYXNlOlxyXG5cdCAqICBGaXJzdCwgdGhlIGxpZ2h0IHNvdXJjZSBpcyByZW5kZXJlZC4gVGhlbiB0aGUgc2NlbmUgaXMgcmVuZGVyZWQgaW50byB0aGVcclxuXHQgKiAgc2FtZSBidWZmZXIgdXNpbmcgYSBtYXNrIG92ZXJyaWRlIG1hdGVyaWFsIHdpdGggZGVwdGggdGVzdCBlbmFibGVkLlxyXG5cdCAqXHJcblx0ICogUHJlbGltaW5hcnkgQmx1ciBQaGFzZTpcclxuXHQgKiAgVGhlIG1hc2tlZCBzY2VuZSBpcyBibHVycmVkLlxyXG5cdCAqXHJcblx0ICogR29kIFJheXMgUGhhc2U6XHJcblx0ICogIFRoZSBibHVycmVkIHNjZW5lIGlzIGJsdXJyZWQgYWdhaW4sIGJ1dCB0aGlzIHRpbWUgYWxvbmcgcmFkaWFsIGxpbmVzXHJcblx0ICogIHRvd2FyZHMgdGhlIGxpZ2h0IHNvdXJjZS5cclxuXHQgKlxyXG5cdCAqIENvbXBvc2l0ZSBQaGFzZTpcclxuXHQgKiAgVGhlIGZpbmFsIHJlc3VsdCBpcyBjb21iaW5lZCB3aXRoIHRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcclxuXHJcblx0XHRjb25zdCBxdWFkID0gdGhpcy5xdWFkO1xyXG5cdFx0Y29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG5cdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmE7XHJcblx0XHRjb25zdCBtYWluU2NlbmUgPSB0aGlzLm1haW5TY2VuZTtcclxuXHJcblx0XHRjb25zdCBsaWdodFNvdXJjZSA9IHRoaXMubGlnaHRTb3VyY2U7XHJcblx0XHRjb25zdCBzY3JlZW5Qb3NpdGlvbiA9IHRoaXMuc2NyZWVuUG9zaXRpb247XHJcblxyXG5cdFx0Y29uc3QgZ29kUmF5c01hdGVyaWFsID0gdGhpcy5nb2RSYXlzTWF0ZXJpYWw7XHJcblx0XHRjb25zdCBjb21iaW5lTWF0ZXJpYWwgPSB0aGlzLmNvbWJpbmVNYXRlcmlhbDtcclxuXHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRNYXNrID0gdGhpcy5yZW5kZXJUYXJnZXRNYXNrO1xyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0WCA9IHRoaXMucmVuZGVyVGFyZ2V0WDtcclxuXHRcdGNvbnN0IHJlbmRlclRhcmdldFkgPSB0aGlzLnJlbmRlclRhcmdldFk7XHJcblxyXG5cdFx0bGV0IGJhY2tncm91bmQsIHBhcmVudDtcclxuXHJcblx0XHQvLyBDb21wdXRlIHRoZSBzY3JlZW4gbGlnaHQgcG9zaXRpb24gYW5kIHRyYW5zbGF0ZSBpdCB0byBbMCwgMV0uXHJcblx0XHRzY3JlZW5Qb3NpdGlvbi5jb3B5KGxpZ2h0U291cmNlLnBvc2l0aW9uKS5wcm9qZWN0KHRoaXMubWFpbkNhbWVyYSk7XHJcblx0XHRzY3JlZW5Qb3NpdGlvbi54ID0gY2xhbXAoKHNjcmVlblBvc2l0aW9uLnggKyAxLjApICogMC41LCAwLjAsIDEuMCk7XHJcblx0XHRzY3JlZW5Qb3NpdGlvbi55ID0gY2xhbXAoKHNjcmVlblBvc2l0aW9uLnkgKyAxLjApICogMC41LCAwLjAsIDEuMCk7XHJcblxyXG5cdFx0Ly8gUmVuZGVyIHRoZSBtYXNrZWQgc2NlbmUuXHJcblx0XHRwYXJlbnQgPSBsaWdodFNvdXJjZS5wYXJlbnQ7XHJcblx0XHRiYWNrZ3JvdW5kID0gbWFpblNjZW5lLmJhY2tncm91bmQ7XHJcblx0XHRtYWluU2NlbmUuYmFja2dyb3VuZCA9IG51bGw7XHJcblx0XHR0aGlzLmxpZ2h0U2NlbmUuYWRkKGxpZ2h0U291cmNlKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclBhc3NMaWdodC5yZW5kZXIocmVuZGVyZXIsIHJlbmRlclRhcmdldE1hc2spO1xyXG5cdFx0dGhpcy5yZW5kZXJQYXNzTWFzay5yZW5kZXIocmVuZGVyZXIsIHJlbmRlclRhcmdldE1hc2spO1xyXG5cclxuXHRcdGlmKHBhcmVudCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0cGFyZW50LmFkZChsaWdodFNvdXJjZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdG1haW5TY2VuZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuXHJcblx0XHQvLyBDb252b2x1dGlvbiBwaGFzZS5cclxuXHRcdHRoaXMuYmx1clBhc3MucmVuZGVyKHJlbmRlcmVyLCByZW5kZXJUYXJnZXRNYXNrLCByZW5kZXJUYXJnZXRYKTtcclxuXHJcblx0XHQvLyBHb2QgcmF5cyBwYXNzLlxyXG5cdFx0cXVhZC5tYXRlcmlhbCA9IGdvZFJheXNNYXRlcmlhbDtcclxuXHRcdGdvZFJheXNNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlbmRlclRhcmdldFgudGV4dHVyZTtcclxuXHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCByZW5kZXJUYXJnZXRZKTtcclxuXHJcblx0XHQvLyBGaW5hbCBwYXNzIC0gY29tcG9zaXRlIGdvZCByYXlzIG9udG8gY29sb3Vycy5cclxuXHRcdHF1YWQubWF0ZXJpYWwgPSBjb21iaW5lTWF0ZXJpYWw7XHJcblx0XHRjb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMudGV4dHVyZTEudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRjb21iaW5lTWF0ZXJpYWwudW5pZm9ybXMudGV4dHVyZTIudmFsdWUgPSByZW5kZXJUYXJnZXRZLnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkanVzdHMgdGhlIGZvcm1hdCBvZiB0aGUgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxwaGEgLSBXaGV0aGVyIHRoZSByZW5kZXJlciB1c2VzIHRoZSBhbHBoYSBjaGFubmVsIG9yIG5vdC5cclxuXHQgKi9cclxuXHJcblx0aW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlclBhc3NMaWdodC5pbml0aWFsaXNlKHJlbmRlcmVyLCBhbHBoYSk7XHJcblx0XHR0aGlzLnJlbmRlclBhc3NNYXNrLmluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKTtcclxuXHRcdHRoaXMuYmx1clBhc3MuaW5pdGlhbGlzZShyZW5kZXJlciwgYWxwaGEpO1xyXG5cclxuXHRcdGlmKCFhbHBoYSkge1xyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXRNYXNrLnRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldFgudGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0WS50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlclBhc3NMaWdodC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5yZW5kZXJQYXNzTWFzay5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5ibHVyUGFzcy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdHdpZHRoID0gdGhpcy5ibHVyUGFzcy53aWR0aDtcclxuXHRcdGhlaWdodCA9IHRoaXMuYmx1clBhc3MuaGVpZ2h0O1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0TWFzay5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRYLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFkuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgbWFzayBwYXNzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXNrUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IG1hc2sgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U2NlbmV9IHNjZW5lIC0gVGhlIHNjZW5lIHRvIHJlbmRlci5cclxuXHQgKiBAcGFyYW0ge0NhbWVyYX0gY2FtZXJhIC0gVGhlIGNhbWVyYSB0byB1c2UuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCBjYW1lcmEpIHtcclxuXHJcblx0XHRzdXBlcihzY2VuZSwgY2FtZXJhLCBudWxsKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiTWFza1Bhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludmVyc2UgZmxhZy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBkZWZhdWx0IGZhbHNlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN0ZW5jaWwgYnVmZmVyIGNsZWFyIGZsYWcuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCB0cnVlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNsZWFyU3RlbmNpbCA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHN0ZW5jaWwgYml0IG1hc2suXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0Y29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblx0XHRjb25zdCBzdGF0ZSA9IHJlbmRlcmVyLnN0YXRlO1xyXG5cclxuXHRcdGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuXHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xyXG5cclxuXHRcdGNvbnN0IHdyaXRlVmFsdWUgPSB0aGlzLmludmVyc2UgPyAwIDogMTtcclxuXHRcdGNvbnN0IGNsZWFyVmFsdWUgPSAxIC0gd3JpdGVWYWx1ZTtcclxuXHJcblx0XHQvLyBEb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGguXHJcblx0XHRzdGF0ZS5idWZmZXJzLmNvbG9yLnNldE1hc2soZmFsc2UpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5kZXB0aC5zZXRNYXNrKGZhbHNlKTtcclxuXHJcblx0XHQvLyBMb2NrIHRoZSBidWZmZXJzLlxyXG5cdFx0c3RhdGUuYnVmZmVycy5jb2xvci5zZXRMb2NrZWQodHJ1ZSk7XHJcblx0XHRzdGF0ZS5idWZmZXJzLmRlcHRoLnNldExvY2tlZCh0cnVlKTtcclxuXHJcblx0XHQvLyBDb25maWd1cmUgdGhlIHN0ZW5jaWwuXHJcblx0XHRzdGF0ZS5idWZmZXJzLnN0ZW5jaWwuc2V0VGVzdCh0cnVlKTtcclxuXHRcdHN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRPcChjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFKTtcclxuXHRcdHN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRGdW5jKGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmKTtcclxuXHRcdHN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRDbGVhcihjbGVhclZhbHVlKTtcclxuXHJcblx0XHQvLyBDbGVhciB0aGUgc3RlbmNpbC5cclxuXHRcdGlmKHRoaXMuY2xlYXJTdGVuY2lsKSB7XHJcblxyXG5cdFx0XHRyZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQocmVhZEJ1ZmZlcik7XHJcblx0XHRcdHJlbmRlcmVyLmNsZWFyU3RlbmNpbCgpO1xyXG5cclxuXHRcdFx0cmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KHdyaXRlQnVmZmVyKTtcclxuXHRcdFx0cmVuZGVyZXIuY2xlYXJTdGVuY2lsKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIERyYXcgdGhlIG1hc2sgaW50byBib3RoIGJ1ZmZlcnMuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgcmVhZEJ1ZmZlcik7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgd3JpdGVCdWZmZXIpO1xyXG5cclxuXHRcdC8vIFVubG9jayB0aGUgYnVmZmVycy5cclxuXHRcdHN0YXRlLmJ1ZmZlcnMuY29sb3Iuc2V0TG9ja2VkKGZhbHNlKTtcclxuXHRcdHN0YXRlLmJ1ZmZlcnMuZGVwdGguc2V0TG9ja2VkKGZhbHNlKTtcclxuXHJcblx0XHQvLyBPbmx5IHJlbmRlciB3aGVyZSB0aGUgc3RlbmNpbCBpcyBzZXQgdG8gMS5cclxuXHRcdHN0YXRlLmJ1ZmZlcnMuc3RlbmNpbC5zZXRGdW5jKGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYpO1xyXG5cdFx0c3RhdGUuYnVmZmVycy5zdGVuY2lsLnNldE9wKGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVApO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBpeGVsYXRpb25NYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBpeGVsYXRpb24gcGFzcy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGl4ZWxhdGlvblBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBwaXhlbGF0aW9uIHBhc3MuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2dyYW51bGFyaXR5PTMwLjBdIC0gVGhlIGludGVuc2l0eSBvZiB0aGUgZWZmZWN0LlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3RvcihncmFudWxhcml0eSA9IDMwLjApIHtcclxuXHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhpcyBwYXNzLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJQaXhlbGF0aW9uUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcGl4ZWxhdGlvbiBzaGFkZXIgbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1BpeGVsYXRpb25NYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnBpeGVsYXRpb25NYXRlcmlhbCA9IG5ldyBQaXhlbGF0aW9uTWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLmdyYW51bGFyaXR5ID0gZ3JhbnVsYXJpdHk7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5waXhlbGF0aW9uTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHBpeGVsIGdyYW51bGFyaXR5LlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCAzMC4wXHJcblx0ICovXHJcblxyXG5cdGdldCBncmFudWxhcml0eSgpIHsgcmV0dXJuIHRoaXMucGl4ZWxhdGlvbk1hdGVyaWFsLmdyYW51bGFyaXR5OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgaGlnaGVyIHZhbHVlIHlpZWxkcyBjb2Fyc2VyIHZpc3VhbHMuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgZ3JhbnVsYXJpdHkoeCA9IDMwKSB7XHJcblxyXG5cdFx0eCA9IE1hdGguZmxvb3IoeCk7XHJcblxyXG5cdFx0aWYoeCAlIDIgPiAwKSB7XHJcblxyXG5cdFx0XHR4ICs9IDE7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGl4ZWxhdGlvbk1hdGVyaWFsLmdyYW51bGFyaXR5ID0geDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHRoZSBlZmZlY3QuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gd3JpdGVCdWZmZXIgLSBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKSB7XHJcblxyXG5cdFx0dGhpcy5waXhlbGF0aW9uTWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoaXMgcGFzcyB3aXRoIHRoZSByZW5kZXJlcidzIHNpemUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggLSBUaGUgd2lkdGguXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQuXHJcblx0ICovXHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdHRoaXMucGl4ZWxhdGlvbk1hdGVyaWFsLnNldFJlc29sdXRpb24od2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTGluZWFyRmlsdGVyLCBSR0JGb3JtYXQsIFdlYkdMUmVuZGVyVGFyZ2V0IH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENvcHlNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHBhc3MgdGhhdCByZW5kZXJzIHRoZSByZXN1bHQgZnJvbSBhIHByZXZpb3VzIHBhc3MgdG8gYW5vdGhlciByZW5kZXIgdGFyZ2V0LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHNhdmUgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IFtyZW5kZXJUYXJnZXRdIC0gVGhlIHJlbmRlciB0YXJnZXQgdG8gdXNlIGZvciBzYXZpbmcgdGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Jlc2l6ZT10cnVlXSAtIFdoZXRoZXIgdGhlIHJlbmRlciB0YXJnZXQgc2hvdWxkIGFkanVzdCB0byB0aGUgc2l6ZSBvZiB0aGUgcmVhZC93cml0ZSBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlbmRlclRhcmdldCwgcmVzaXplID0gdHJ1ZSkge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIlNhdmVQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb3B5IHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Q29weU1hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgQ29weU1hdGVyaWFsKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSByZW5kZXIgdGFyZ2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0ID0gKHJlbmRlclRhcmdldCAhPT0gdW5kZWZpbmVkKSA/IHJlbmRlclRhcmdldCA6IG5ldyBXZWJHTFJlbmRlclRhcmdldCgxLCAxLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0c3RlbmNpbEJ1ZmZlcjogZmFsc2UsXHJcblx0XHRcdGRlcHRoQnVmZmVyOiBmYWxzZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQudGV4dHVyZS5uYW1lID0gXCJTYXZlLlRhcmdldFwiO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSByZW5kZXIgdGFyZ2V0IHNob3VsZCBiZSByZXNpemVkIHdoZW4gdGhlIHNpemUgb2ZcclxuXHRcdCAqIHRoZSBjb21wb3NlcidzIHJlYWQvd3JpdGUgYnVmZmVyIGNoYW5nZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKiBAZGVmYXVsdCB0cnVlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlc2l6ZSA9IHJlc2l6ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTYXZlcyB0aGUgcmVhZCBidWZmZXIuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHJlYWRCdWZmZXIgLSBUaGUgcmVhZCBidWZmZXIuXHJcblx0ICovXHJcblxyXG5cdHJlbmRlcihyZW5kZXJlciwgcmVhZEJ1ZmZlcikge1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRhcmdldCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRqdXN0cyB0aGUgZm9ybWF0IG9mIHRoZSByZW5kZXIgdGFyZ2V0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGFscGhhIC0gV2hldGhlciB0aGUgcmVuZGVyZXIgdXNlcyB0aGUgYWxwaGEgY2hhbm5lbCBvciBub3QuXHJcblx0ICovXHJcblxyXG5cdGluaXRpYWxpc2UocmVuZGVyZXIsIGFscGhhKSB7XHJcblxyXG5cdFx0aWYoIWFscGhhKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHRpZih0aGlzLnJlc2l6ZSkge1xyXG5cclxuXHRcdFx0d2lkdGggPSBNYXRoLm1heCgxLCB3aWR0aCk7XHJcblx0XHRcdGhlaWdodCA9IE1hdGgubWF4KDEsIGhlaWdodCk7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQYXNzIH0gZnJvbSBcIi4vcGFzcy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgc2hhZGVyIHBhc3MuXHJcbiAqXHJcbiAqIFVzZWQgdG8gcmVuZGVyIGFueSBzaGFkZXIgbWF0ZXJpYWwgYXMgYSAyRCBmaWx0ZXIuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRlclBhc3MgZXh0ZW5kcyBQYXNzIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBzaGFkZXIgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U2hhZGVyTWF0ZXJpYWx9IG1hdGVyaWFsIC0gVGhlIHNoYWRlciBtYXRlcmlhbCB0byB1c2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFt0ZXh0dXJlSUQ9XCJ0RGlmZnVzZVwiXSAtIFRoZSB0ZXh0dXJlIHVuaWZvcm0gaWRlbnRpZmllci5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3IobWF0ZXJpYWwsIHRleHR1cmVJRCA9IFwidERpZmZ1c2VcIikge1xyXG5cclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgbmFtZSBvZiB0aGlzIHBhc3MuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIlNoYWRlclBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgc2hhZGVyIG1hdGVyaWFsIHRvIHVzZSBmb3IgcmVuZGVyaW5nLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTaGFkZXJNYXRlcmlhbH1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG5hbWUgb2YgdGhlIGNvbG9yIHNhbXBsZXIgdW5pZm9ybSBvZiB0aGUgZ2l2ZW4gbWF0ZXJpYWwuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1N0cmluZ31cclxuXHRcdCAqIEBkZWZhdWx0IFwidERpZmZ1c2VcIlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlSUQgPSB0ZXh0dXJlSUQ7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyB0aGUgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdGlmKHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbdGhpcy50ZXh0dXJlSURdICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbdGhpcy50ZXh0dXJlSURdLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQ29weU1hdGVyaWFsLCBTaG9ja1dhdmVNYXRlcmlhbCB9IGZyb20gXCIuLi9tYXRlcmlhbHNcIjtcclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBIYWxmIFBJLlxyXG4gKlxyXG4gKiBAdHlwZSB7TnVtYmVyfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAc3RhdGljXHJcbiAqIEBmaW5hbFxyXG4gKi9cclxuXHJcbmNvbnN0IEhBTEZfUEkgPSBNYXRoLlBJICogMC41O1xyXG5cclxuLyoqXHJcbiAqIEEgdmVjdG9yLlxyXG4gKlxyXG4gKiBAdHlwZSB7VmVjdG9yM31cclxuICogQHByaXZhdGVcclxuICogQHN0YXRpY1xyXG4gKiBAZmluYWxcclxuICovXHJcblxyXG5jb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbi8qKlxyXG4gKiBBIHZlY3Rvci5cclxuICpcclxuICogQHR5cGUge1ZlY3RvcjN9XHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICogQGZpbmFsXHJcbiAqL1xyXG5cclxuY29uc3QgYWIgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuLyoqXHJcbiAqIEEgc2hvY2sgd2F2ZSBwYXNzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9ja1dhdmVQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgc2hvY2sgd2F2ZSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtDYW1lcmF9IGNhbWVyYSAtIFRoZSBtYWluIGNhbWVyYS5cclxuXHQgKiBAcGFyYW0ge1ZlY3RvcjN9IFtlcGljZW50ZXJdIC0gVGhlIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBzaG9jayB3YXZlIGVwaWNlbnRlci5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnMuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnNwZWVkPTEuMF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhSYWRpdXM9MS4wXSAtIFRoZSBleHRlbnQgb2YgdGhlIHNob2NrIHdhdmUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndhdmVTaXplPTAuMl0gLSBUaGUgd2F2ZSBzaXplLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5hbXBsaXR1ZGU9MC4wNV0gLSBUaGUgZGlzdG9ydGlvbiBhbXBsaXR1ZGUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgZXBpY2VudGVyID0gbmV3IFZlY3RvcjMoKSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiU2hvY2tXYXZlUGFzc1wiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhpcyBwYXNzIHJlbmRlcnMgdG8gdGhlIHdyaXRlIGJ1ZmZlci5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBtYWluIGNhbWVyYS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0M0R9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm1haW5DYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgZXBpY2VudGVyLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtWZWN0b3IzfVxyXG5cdFx0ICogQGV4YW1wbGUgc2hvY2tXYXZlUGFzcy5lcGljZW50ZXIgPSBteU1lc2gucG9zaXRpb247XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmVwaWNlbnRlciA9IGVwaWNlbnRlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBvYmplY3QgcG9zaXRpb24gaW4gc2NyZWVuIHNwYWNlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtWZWN0b3IzfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMuc2NyZWVuUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHNwZWVkIG9mIHRoZSBzaG9jayB3YXZlIGFuaW1hdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdFx0ICogQGRlZmF1bHQgMi4wXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnNwZWVkID0gKG9wdGlvbnMuc3BlZWQgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLnNwZWVkIDogMi4wO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSB0aW1lIGFjY3VtdWxhdG9yLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy50aW1lID0gMC4wO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNob2NrIHdhdmUgYW5pbWF0aW9uIGlzIGFjdGl2ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSBzaG9jayB3YXZlIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U2hvY2tXYXZlTWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5zaG9ja1dhdmVNYXRlcmlhbCA9IG5ldyBTaG9ja1dhdmVNYXRlcmlhbChvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLnNob2NrV2F2ZU1hdGVyaWFsLnVuaWZvcm1zLmNlbnRlci52YWx1ZSA9IHRoaXMuc2NyZWVuUG9zaXRpb247XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGNvcHkgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDb3B5TWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jb3B5TWF0ZXJpYWwgPSBuZXcgQ29weU1hdGVyaWFsKCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRW1pdHMgdGhlIHNob2NrIHdhdmUuXHJcblx0ICovXHJcblxyXG5cdGV4cGxvZGUoKSB7XHJcblxyXG5cdFx0dGhpcy50aW1lID0gMC4wO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhIC0gVGhlIHJlbmRlciBkZWx0YSB0aW1lLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyLCBkZWx0YSkge1xyXG5cclxuXHRcdGNvbnN0IGVwaWNlbnRlciA9IHRoaXMuZXBpY2VudGVyO1xyXG5cdFx0Y29uc3QgbWFpbkNhbWVyYSA9IHRoaXMubWFpbkNhbWVyYTtcclxuXHRcdGNvbnN0IHNjcmVlblBvc2l0aW9uID0gdGhpcy5zY3JlZW5Qb3NpdGlvbjtcclxuXHJcblx0XHRjb25zdCBzaG9ja1dhdmVNYXRlcmlhbCA9IHRoaXMuc2hvY2tXYXZlTWF0ZXJpYWw7XHJcblx0XHRjb25zdCB1bmlmb3JtcyA9IHNob2NrV2F2ZU1hdGVyaWFsLnVuaWZvcm1zO1xyXG5cdFx0Y29uc3QgY2VudGVyID0gdW5pZm9ybXMuY2VudGVyO1xyXG5cdFx0Y29uc3QgcmFkaXVzID0gdW5pZm9ybXMucmFkaXVzO1xyXG5cdFx0Y29uc3QgbWF4UmFkaXVzID0gdW5pZm9ybXMubWF4UmFkaXVzO1xyXG5cdFx0Y29uc3Qgd2F2ZVNpemUgPSB1bmlmb3Jtcy53YXZlU2l6ZTtcclxuXHJcblx0XHR0aGlzLmNvcHlNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuY29weU1hdGVyaWFsO1xyXG5cclxuXHRcdGlmKHRoaXMuYWN0aXZlKSB7XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgZGlyZWN0aW9uIHZlY3RvcnMuXHJcblx0XHRcdG1haW5DYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24odik7XHJcblx0XHRcdGFiLmNvcHkobWFpbkNhbWVyYS5wb3NpdGlvbikuc3ViKGVwaWNlbnRlcik7XHJcblxyXG5cdFx0XHQvLyBEb24ndCByZW5kZXIgdGhlIGVmZmVjdCBpZiB0aGUgb2JqZWN0IGlzIGJlaGluZCB0aGUgY2FtZXJhLlxyXG5cdFx0XHRpZih2LmFuZ2xlVG8oYWIpID4gSEFMRl9QSSkge1xyXG5cclxuXHRcdFx0XHQvLyBTY2FsZSB0aGUgZWZmZWN0IGJhc2VkIG9uIGRpc3RhbmNlIHRvIHRoZSBvYmplY3QuXHJcblx0XHRcdFx0dW5pZm9ybXMuY2FtZXJhRGlzdGFuY2UudmFsdWUgPSBtYWluQ2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8oZXBpY2VudGVyKTtcclxuXHJcblx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY3JlZW4gcG9zaXRpb24gb2YgdGhlIGVwaWNlbnRlci5cclxuXHRcdFx0XHRzY3JlZW5Qb3NpdGlvbi5jb3B5KGVwaWNlbnRlcikucHJvamVjdChtYWluQ2FtZXJhKTtcclxuXHRcdFx0XHRjZW50ZXIudmFsdWUueCA9IChzY3JlZW5Qb3NpdGlvbi54ICsgMS4wKSAqIDAuNTtcclxuXHRcdFx0XHRjZW50ZXIudmFsdWUueSA9IChzY3JlZW5Qb3NpdGlvbi55ICsgMS4wKSAqIDAuNTtcclxuXHJcblx0XHRcdFx0dW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gc2hvY2tXYXZlTWF0ZXJpYWw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIHNob2NrIHdhdmUgcmFkaXVzIGJhc2VkIG9uIHRpbWUuXHJcblx0XHRcdHRoaXMudGltZSArPSBkZWx0YTtcclxuXHRcdFx0cmFkaXVzLnZhbHVlID0gdGhpcy50aW1lICogdGhpcy5zcGVlZCAtIHdhdmVTaXplLnZhbHVlO1xyXG5cclxuXHRcdFx0aWYocmFkaXVzLnZhbHVlID49IChtYXhSYWRpdXMudmFsdWUgKyB3YXZlU2l6ZS52YWx1ZSkgKiAyKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUb1NjcmVlbiA/IG51bGwgOiB3cml0ZUJ1ZmZlcik7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0aGlzIHBhc3Mgd2l0aCB0aGUgcmVuZGVyZXIncyBzaXplLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHR0aGlzLnNob2NrV2F2ZU1hdGVyaWFsLnVuaWZvcm1zLmFzcGVjdC52YWx1ZSA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0TGluZWFyRmlsdGVyLFxyXG5cdE5lYXJlc3RGaWx0ZXIsXHJcblx0UkdCQUZvcm1hdCxcclxuXHRSR0JGb3JtYXQsXHJcblx0VGV4dHVyZSxcclxuXHRXZWJHTFJlbmRlclRhcmdldFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgU01BQUJsZW5kTWF0ZXJpYWwsIFNNQUFDb2xvckVkZ2VzTWF0ZXJpYWwsIFNNQUFXZWlnaHRzTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogU3VicGl4ZWwgTW9ycGhvbG9naWNhbCBBbnRpYWxpYXNpbmcgKFNNQUEpIHYyLjguXHJcbiAqXHJcbiAqIFByZXNldDogU01BQSAxeCBNZWRpdW0gKHdpdGggY29sb3IgZWRnZSBkZXRlY3Rpb24pLlxyXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2lyeW9rdS9zbWFhL3JlbGVhc2VzL3RhZy92Mi44XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFNNQUFQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgU01BQSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtJbWFnZX0gSW1hZ2UgLSBUaGlzIHBhc3MgcmVxdWlyZXMgYW4gSW1hZ2UgY2xhc3MgdG8gY3JlYXRlIGludGVybmFsIHRleHR1cmVzLiBQcm92aWRlIHdpbmRvdy5JbWFnZSBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKEltYWdlKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiU01BQVBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgcGFzcyByZW5kZXJzIHRvIHRoZSB3cml0ZSBidWZmZXIuXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIHJlbmRlciB0YXJnZXQgZm9yIHRoZSBjb2xvciBlZGdlIGRldGVjdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7V2ViR0xSZW5kZXJUYXJnZXR9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRDb2xvckVkZ2VzID0gbmV3IFdlYkdMUmVuZGVyVGFyZ2V0KDEsIDEsIHtcclxuXHRcdFx0bWluRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdGZvcm1hdDogUkdCRm9ybWF0LFxyXG5cdFx0XHRzdGVuY2lsQnVmZmVyOiBmYWxzZSxcclxuXHRcdFx0ZGVwdGhCdWZmZXI6IGZhbHNlXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldENvbG9yRWRnZXMudGV4dHVyZS5uYW1lID0gXCJTTUFBLkNvbG9yRWRnZXNcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0Q29sb3JFZGdlcy50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSByZW5kZXIgdGFyZ2V0IGZvciB0aGUgU01BQSB3ZWlnaHRzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFdlaWdodHMgPSB0aGlzLnJlbmRlclRhcmdldENvbG9yRWRnZXMuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFdlaWdodHMudGV4dHVyZS5uYW1lID0gXCJTTUFBLldlaWdodHNcIjtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0V2VpZ2h0cy50ZXh0dXJlLmZvcm1hdCA9IFJHQkFGb3JtYXQ7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTTUFBIGNvbG9yIGVkZ2UgZGV0ZWN0aW9uIHNoYWRlciBtYXRlcmlhbC5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U01BQUNvbG9yRWRnZXNNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvbG9yRWRnZXNNYXRlcmlhbCA9IG5ldyBTTUFBQ29sb3JFZGdlc01hdGVyaWFsKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTTUFBIHdlaWdodHMgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTTUFBV2VpZ2h0c01hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMud2VpZ2h0c01hdGVyaWFsID0gbmV3IFNNQUFXZWlnaHRzTWF0ZXJpYWwoKTtcclxuXHJcblx0XHRjb25zdCBhcmVhSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdGFyZWFJbWFnZS5zcmMgPSB0aGlzLndlaWdodHNNYXRlcmlhbC5hcmVhSW1hZ2U7XHJcblxyXG5cdFx0Y29uc3QgYXJlYVRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xyXG5cdFx0YXJlYVRleHR1cmUuaW1hZ2UgPSBhcmVhSW1hZ2U7XHJcblx0XHRhcmVhVGV4dHVyZS5uYW1lID0gXCJTTUFBLkFyZWFcIjtcclxuXHRcdGFyZWFUZXh0dXJlLm1pbkZpbHRlciA9IExpbmVhckZpbHRlcjtcclxuXHRcdGFyZWFUZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHRcdGFyZWFUZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cdFx0YXJlYVRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0YXJlYVRleHR1cmUuZmxpcFkgPSBmYWxzZTtcclxuXHJcblx0XHRjb25zdCBzZWFyY2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0c2VhcmNoSW1hZ2Uuc3JjID0gdGhpcy53ZWlnaHRzTWF0ZXJpYWwuc2VhcmNoSW1hZ2U7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoVGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcblx0XHRzZWFyY2hUZXh0dXJlLmltYWdlID0gc2VhcmNoSW1hZ2U7XHJcblx0XHRzZWFyY2hUZXh0dXJlLm5hbWUgPSBcIlNNQUEuU2VhcmNoXCI7XHJcblx0XHRzZWFyY2hUZXh0dXJlLm1hZ0ZpbHRlciA9IE5lYXJlc3RGaWx0ZXI7XHJcblx0XHRzZWFyY2hUZXh0dXJlLm1pbkZpbHRlciA9IE5lYXJlc3RGaWx0ZXI7XHJcblx0XHRzZWFyY2hUZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cdFx0c2VhcmNoVGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRzZWFyY2hUZXh0dXJlLmZsaXBZID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy53ZWlnaHRzTWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSB0aGlzLnJlbmRlclRhcmdldENvbG9yRWRnZXMudGV4dHVyZTtcclxuXHRcdHRoaXMud2VpZ2h0c01hdGVyaWFsLnVuaWZvcm1zLnRBcmVhLnZhbHVlID0gYXJlYVRleHR1cmU7XHJcblx0XHR0aGlzLndlaWdodHNNYXRlcmlhbC51bmlmb3Jtcy50U2VhcmNoLnZhbHVlID0gc2VhcmNoVGV4dHVyZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNNQUEgYmxlbmQgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtTTUFBQmxlbmRNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmJsZW5kTWF0ZXJpYWwgPSBuZXcgU01BQUJsZW5kTWF0ZXJpYWwoKTtcclxuXHJcblx0XHR0aGlzLmJsZW5kTWF0ZXJpYWwudW5pZm9ybXMudFdlaWdodHMudmFsdWUgPSB0aGlzLnJlbmRlclRhcmdldFdlaWdodHMudGV4dHVyZTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmJsZW5kTWF0ZXJpYWw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQW50aWFsaWFzZXMgdGhlIHNjZW5lLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSByZW5kZXJlciAtIFRoZSByZW5kZXJlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSByZWFkQnVmZmVyIC0gVGhlIHJlYWQgYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IHdyaXRlQnVmZmVyIC0gVGhlIHdyaXRlIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlcikge1xyXG5cclxuXHRcdC8vIERldGVjdCBjb2xvciBlZGdlcy5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuY29sb3JFZGdlc01hdGVyaWFsO1xyXG5cdFx0dGhpcy5jb2xvckVkZ2VzTWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVGFyZ2V0Q29sb3JFZGdlcywgdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gQ29tcHV0ZSBlZGdlIHdlaWdodHMuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLndlaWdodHNNYXRlcmlhbDtcclxuXHRcdHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJUYXJnZXRXZWlnaHRzLCBmYWxzZSk7XHJcblxyXG5cdFx0Ly8gQXBwbHkgdGhlIGFudGlhbGlhc2luZyBmaWx0ZXIgdG8gdGhlIGNvbG9ycy5cclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMuYmxlbmRNYXRlcmlhbDtcclxuXHRcdHRoaXMuYmxlbmRNYXRlcmlhbC51bmlmb3Jtcy50RGlmZnVzZS52YWx1ZSA9IHJlYWRCdWZmZXIudGV4dHVyZTtcclxuXHJcblx0XHRyZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVG9TY3JlZW4gPyBudWxsIDogd3JpdGVCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhpcyBwYXNzIHdpdGggdGhlIHJlbmRlcmVyJ3Mgc2l6ZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodC5cclxuXHQgKi9cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRDb2xvckVkZ2VzLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFdlaWdodHMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLmNvbG9yRWRnZXNNYXRlcmlhbC51bmlmb3Jtcy50ZXhlbFNpemUudmFsdWUuY29weShcclxuXHRcdFx0dGhpcy53ZWlnaHRzTWF0ZXJpYWwudW5pZm9ybXMudGV4ZWxTaXplLnZhbHVlLmNvcHkoXHJcblx0XHRcdFx0dGhpcy5ibGVuZE1hdGVyaWFsLnVuaWZvcm1zLnRleGVsU2l6ZS52YWx1ZS5zZXQoXHJcblx0XHRcdFx0XHQxLjAgLyB3aWR0aCwgMS4wIC8gaGVpZ2h0XHJcblx0XHQpKSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQWRkaXRpdmVCbGVuZGluZyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDb3B5TWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcbmltcG9ydCB7IFBhc3MgfSBmcm9tIFwiLi9wYXNzLmpzXCI7XHJcblxyXG4vKipcclxuICogQSBwYXNzIHRoYXQgcmVuZGVycyBhIGdpdmVuIHRleHR1cmUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVQYXNzIGV4dGVuZHMgUGFzcyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgdGV4dHVyZSBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtUZXh0dXJlfSB0ZXh0dXJlIC0gVGhlIHRleHR1cmUuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcGFjaXR5PTEuMF0gLSBUaGUgdGV4dHVyZSBvcGFjaXR5LlxyXG5cdCAqL1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBvcGFjaXR5ID0gMS4wKSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiVGV4dHVyZVBhc3NcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY29weSBzaGFkZXIgbWF0ZXJpYWwgdXNlZCBmb3IgcmVuZGVyaW5nIHRvIHRleHR1cmUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge0NvcHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvcHlNYXRlcmlhbCA9IG5ldyBDb3B5TWF0ZXJpYWwoKTtcclxuXHRcdHRoaXMuY29weU1hdGVyaWFsLmJsZW5kaW5nID0gQWRkaXRpdmVCbGVuZGluZztcclxuXHRcdHRoaXMuY29weU1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG5cdFx0dGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLmNvcHlNYXRlcmlhbDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgdGV4dHVyZS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtUZXh0dXJlfVxyXG5cdCAqL1xyXG5cclxuXHRnZXQgdGV4dHVyZSgpIHsgcmV0dXJuIHRoaXMuY29weU1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtUZXh0dXJlfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgdGV4dHVyZSh4KSB7IHRoaXMuY29weU1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0geDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgb3BhY2l0eS5cclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XHJcblx0ICogQGRlZmF1bHQgMS4wXHJcblx0ICovXHJcblxyXG5cdGdldCBvcGFjaXR5KCkgeyByZXR1cm4gdGhpcy5jb3B5TWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eS52YWx1ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgb3BhY2l0eSh4ID0gMS4wKSB7IHRoaXMuY29weU1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSB4OyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKi9cclxuXHJcblx0cmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyKSB7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHJlYWRCdWZmZXIpO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0TGluZWFyRmlsdGVyLFxyXG5cdExpbmVhck1pcE1hcExpbmVhckZpbHRlcixcclxuXHRNZXNoQmFzaWNNYXRlcmlhbCxcclxuXHRSR0JGb3JtYXQsXHJcblx0V2ViR0xSZW5kZXJUYXJnZXRcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0QWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwsXHJcblx0Q29weU1hdGVyaWFsLFxyXG5cdEx1bWlub3NpdHlNYXRlcmlhbCxcclxuXHRUb25lTWFwcGluZ01hdGVyaWFsXHJcbn0gZnJvbSBcIi4uL21hdGVyaWFsc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBSb3VuZHMgdGhlIGdpdmVuIG51bWJlciB1cCB0byB0aGUgbmV4dCBwb3dlciBvZiB0d28uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4gLSBBIG51bWJlci5cclxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbmV4dCBwb3dlciBvZiB0d28uXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY2VpbDIobikgeyByZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5tYXgoMCwgTWF0aC5jZWlsKE1hdGgubG9nMihuKSkpKTsgfVxyXG5cclxuLyoqXHJcbiAqIEEgdG9uZSBtYXBwaW5nIHBhc3MgdGhhdCBzdXBwb3J0cyBhZGFwdGl2ZSBsdW1pbm9zaXR5LlxyXG4gKlxyXG4gKiBJZiBhZGFwdGl2aXR5IGlzIGVuYWJsZWQsIHRoaXMgcGFzcyBnZW5lcmF0ZXMgYSB0ZXh0dXJlIHRoYXQgcmVwcmVzZW50cyB0aGVcclxuICogbHVtaW5vc2l0eSBvZiB0aGUgY3VycmVudCBzY2VuZSBhbmQgYWRqdXN0cyBpdCBvdmVyIHRpbWUgdG8gc2ltdWxhdGUgdGhlXHJcbiAqIG9wdGljIG5lcnZlIHJlc3BvbmRpbmcgdG8gdGhlIGFtb3VudCBvZiBsaWdodCBpdCBpcyByZWNlaXZpbmcuXHJcbiAqXHJcbiAqIFJlZmVyZW5jZTpcclxuICogIEdEQzIwMDcgLSBXb2xmZ2FuZyBFbmdlbCwgUG9zdC1Qcm9jZXNzaW5nIFBpcGVsaW5lXHJcbiAqICBodHRwOi8vcGVyc28udW5pdi1seW9uMS5mci9qZWFuLWNsYXVkZS5pZWhsL1B1YmxpYy9lZHVjL0dBTUEvMjAwNy9nZGMwNy9Qb3N0LVByb2Nlc3NpbmdfUGlwZWxpbmUucGRmXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvbmVNYXBwaW5nUGFzcyBleHRlbmRzIFBhc3Mge1xyXG5cclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IHRvbmUgbWFwcGluZyBwYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRhcHRpdmU9dHJ1ZV0gLSBXaGV0aGVyIHRoZSB0b25lIG1hcHBpbmcgc2hvdWxkIHVzZSBhbiBhZGFwdGl2ZSBsdW1pbmFuY2UgbWFwLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yZXNvbHV0aW9uPTI1Nl0gLSBUaGUgcmVuZGVyIHRleHR1cmUgcmVzb2x1dGlvbi5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZGlzdGluY3Rpb249MS4wXSAtIEEgbHVtaW5hbmNlIGRpc3RpbmN0aW9uIGZhY3Rvci5cclxuXHQgKi9cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBuYW1lIG9mIHRoaXMgcGFzcy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiVG9uZU1hcHBpbmdQYXNzXCI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGlzIHBhc3MgcmVuZGVycyB0byB0aGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIHJlbmRlciB0YXJnZXQgZm9yIHRoZSBjdXJyZW50IGx1bWlub3NpdHkuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIEB0b2RvIFVzZSBSRUQgZm9ybWF0IGluIFdlYkdMIDIuMC5cclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0THVtaW5vc2l0eSA9IG5ldyBXZWJHTFJlbmRlclRhcmdldCgxLCAxLCB7XHJcblx0XHRcdG1pbkZpbHRlcjogTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRtYWdGaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0Zm9ybWF0OiBSR0JGb3JtYXQsXHJcblx0XHRcdHN0ZW5jaWxCdWZmZXI6IGZhbHNlLFxyXG5cdFx0XHRkZXB0aEJ1ZmZlcjogZmFsc2VcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0THVtaW5vc2l0eS50ZXh0dXJlLm5hbWUgPSBcIlRvbmVNYXBwaW5nLkx1bWlub3NpdHlcIjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSByZW5kZXIgdGFyZ2V0IGZvciBhZGFwdGVkIGx1bWlub3NpdHkuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZCA9IHRoaXMucmVuZGVyVGFyZ2V0THVtaW5vc2l0eS5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZC50ZXh0dXJlLm5hbWUgPSBcIlRvbmVNYXBwaW5nLkFkYXB0ZWRMdW1pbm9zaXR5XCI7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldEFkYXB0ZWQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZC50ZXh0dXJlLm1pbkZpbHRlciA9IExpbmVhckZpbHRlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgcmVuZGVyIHRhcmdldCB0aGF0IGhvbGRzIGEgY29weSBvZiB0aGUgYWRhcHRlZCBsaW1vbm9zaXR5LlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldFByZXZpb3VzID0gdGhpcy5yZW5kZXJUYXJnZXRBZGFwdGVkLmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXRQcmV2aW91cy50ZXh0dXJlLm5hbWUgPSBcIlRvbmVNYXBwaW5nLlByZXZpb3VzTHVtaW5vc2l0eVwiO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29weSBzaGFkZXIgbWF0ZXJpYWwgdXNlZCBmb3Igc2F2aW5nIHRoZSBsdW1pbmFuY2UgbWFwLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtDb3B5TWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5jb3B5TWF0ZXJpYWwgPSBuZXcgQ29weU1hdGVyaWFsKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBIGx1bWlub3NpdHkgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtMdW1pbm9zaXR5TWF0ZXJpYWx9XHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dGhpcy5sdW1pbm9zaXR5TWF0ZXJpYWwgPSBuZXcgTHVtaW5vc2l0eU1hdGVyaWFsKCk7XHJcblxyXG5cdFx0dGhpcy5sdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMuZGlzdGluY3Rpb24udmFsdWUgPSAob3B0aW9ucy5kaXN0aW5jdGlvbiAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuZGlzdGluY3Rpb24gOiAxLjA7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbiBhZGFwdGl2ZSBsdW1pbmFuY2Ugc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtBZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsID0gbmV3IEFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsKCk7XHJcblxyXG5cdFx0dGhpcy5yZXNvbHV0aW9uID0gb3B0aW9ucy5yZXNvbHV0aW9uO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQSB0b25lIG1hcHBpbmcgc2hhZGVyIG1hdGVyaWFsLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtUb25lTWFwcGluZ01hdGVyaWFsfVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMudG9uZU1hcHBpbmdNYXRlcmlhbCA9IG5ldyBUb25lTWFwcGluZ01hdGVyaWFsKCk7XHJcblxyXG5cdFx0dGhpcy5hZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlciB0YXJnZXRzLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKiBAZGVmYXVsdCAyNTZcclxuXHQgKi9cclxuXHJcblx0Z2V0IHJlc29sdXRpb24oKSB7IHJldHVybiB0aGlzLnJlbmRlclRhcmdldEx1bWlub3NpdHkud2lkdGg7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlciB0YXJnZXRzLiBNdXN0IGJlIGEgcG93ZXIgb2YgdHdvIGZvciBtaXBtYXBzLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge051bWJlcn1cclxuXHQgKi9cclxuXHJcblx0c2V0IHJlc29sdXRpb24oeCA9IDI1Nikge1xyXG5cclxuXHRcdHggPSBjZWlsMih4KTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldEx1bWlub3NpdHkuc2V0U2l6ZSh4LCB4KTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0UHJldmlvdXMuc2V0U2l6ZSh4LCB4KTtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZC5zZXRTaXplKHgsIHgpO1xyXG5cclxuXHRcdHRoaXMuYWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwuZGVmaW5lcy5NSVBfTEVWRUxfMVgxID0gKE1hdGgucm91bmQoTWF0aC5sb2coeCkpIC8gTWF0aC5sb2coMikpLnRvRml4ZWQoMSk7XHJcblx0XHR0aGlzLmFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgcGFzcyB1c2VzIGFkYXB0aXZlIGx1bWlub3NpdHkuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHQgKiBAZGVmYXVsdCB0cnVlXHJcblx0ICovXHJcblxyXG5cdGdldCBhZGFwdGl2ZSgpIHsgcmV0dXJuICh0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWwuZGVmaW5lcy5BREFQVEVEX0xVTUlOQU5DRSAhPT0gdW5kZWZpbmVkKTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgcGFzcyBzaG91bGQgdXNlIGFkYXB0aXZlIGx1bWlub3NpdHkuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHQgKi9cclxuXHJcblx0c2V0IGFkYXB0aXZlKHggPSB0cnVlKSB7XHJcblxyXG5cdFx0aWYoeCkge1xyXG5cclxuXHRcdFx0dGhpcy50b25lTWFwcGluZ01hdGVyaWFsLmRlZmluZXMuQURBUFRFRF9MVU1JTkFOQ0UgPSBcIjFcIjtcclxuXHRcdFx0dGhpcy50b25lTWFwcGluZ01hdGVyaWFsLnVuaWZvcm1zLmx1bWluYW5jZU1hcC52YWx1ZSA9IHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZC50ZXh0dXJlO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRkZWxldGUgdGhpcy50b25lTWFwcGluZ01hdGVyaWFsLmRlZmluZXMuQURBUFRFRF9MVU1JTkFOQ0U7XHJcblx0XHRcdHRoaXMudG9uZU1hcHBpbmdNYXRlcmlhbC51bmlmb3Jtcy5sdW1pbmFuY2VNYXAudmFsdWUgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbmRlcnMgdGhlIGVmZmVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgcmVuZGVyZXIuXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlclRhcmdldH0gcmVhZEJ1ZmZlciAtIFRoZSByZWFkIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyVGFyZ2V0fSB3cml0ZUJ1ZmZlciAtIFRoZSB3cml0ZSBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRlbHRhIC0gVGhlIHJlbmRlciBkZWx0YSB0aW1lLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyLCBkZWx0YSkge1xyXG5cclxuXHRcdGNvbnN0IHF1YWQgPSB0aGlzLnF1YWQ7XHJcblx0XHRjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcblx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcclxuXHJcblx0XHRjb25zdCBhZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbCA9IHRoaXMuYWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWw7XHJcblx0XHRjb25zdCBsdW1pbm9zaXR5TWF0ZXJpYWwgPSB0aGlzLmx1bWlub3NpdHlNYXRlcmlhbDtcclxuXHRcdGNvbnN0IHRvbmVNYXBwaW5nTWF0ZXJpYWwgPSB0aGlzLnRvbmVNYXBwaW5nTWF0ZXJpYWw7XHJcblx0XHRjb25zdCBjb3B5TWF0ZXJpYWwgPSB0aGlzLmNvcHlNYXRlcmlhbDtcclxuXHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRQcmV2aW91cyA9IHRoaXMucmVuZGVyVGFyZ2V0UHJldmlvdXM7XHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXRMdW1pbm9zaXR5ID0gdGhpcy5yZW5kZXJUYXJnZXRMdW1pbm9zaXR5O1xyXG5cdFx0Y29uc3QgcmVuZGVyVGFyZ2V0QWRhcHRlZCA9IHRoaXMucmVuZGVyVGFyZ2V0QWRhcHRlZDtcclxuXHJcblx0XHRpZih0aGlzLmFkYXB0aXZlKSB7XHJcblxyXG5cdFx0XHQvLyBSZW5kZXIgdGhlIGx1bWluYW5jZSBvZiB0aGUgY3VycmVudCBzY2VuZSBpbnRvIGEgcmVuZGVyIHRhcmdldCB3aXRoIG1pcG1hcHBpbmcgZW5hYmxlZC5cclxuXHRcdFx0cXVhZC5tYXRlcmlhbCA9IGx1bWlub3NpdHlNYXRlcmlhbDtcclxuXHRcdFx0bHVtaW5vc2l0eU1hdGVyaWFsLnVuaWZvcm1zLnREaWZmdXNlLnZhbHVlID0gcmVhZEJ1ZmZlci50ZXh0dXJlO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSwgcmVuZGVyVGFyZ2V0THVtaW5vc2l0eSk7XHJcblxyXG5cdFx0XHQvLyBVc2UgdGhlIG5ldyBsdW1pbmFuY2UgdmFsdWVzLCB0aGUgcHJldmlvdXMgbHVtaW5hbmNlIGFuZCB0aGUgZnJhbWUgZGVsdGEgdG8gYWRhcHQgdGhlIGx1bWluYW5jZSBvdmVyIHRpbWUuXHJcblx0XHRcdHF1YWQubWF0ZXJpYWwgPSBhZGFwdGl2ZUx1bWlub3NpdHlNYXRlcmlhbDtcclxuXHRcdFx0YWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMuZGVsdGEudmFsdWUgPSBkZWx0YTtcclxuXHRcdFx0YWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMudFByZXZpb3VzTHVtLnZhbHVlID0gcmVuZGVyVGFyZ2V0UHJldmlvdXMudGV4dHVyZTtcclxuXHRcdFx0YWRhcHRpdmVMdW1pbm9zaXR5TWF0ZXJpYWwudW5pZm9ybXMudEN1cnJlbnRMdW0udmFsdWUgPSByZW5kZXJUYXJnZXRMdW1pbm9zaXR5LnRleHR1cmU7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCByZW5kZXJUYXJnZXRBZGFwdGVkKTtcclxuXHJcblx0XHRcdC8vIENvcHkgdGhlIG5ldyBhZGFwdGVkIGx1bWluYW5jZSB2YWx1ZSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGJ5IHRoZSBuZXh0IGZyYW1lLlxyXG5cdFx0XHRxdWFkLm1hdGVyaWFsID0gY29weU1hdGVyaWFsO1xyXG5cdFx0XHRjb3B5TWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZW5kZXJUYXJnZXRBZGFwdGVkLnRleHR1cmU7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhLCByZW5kZXJUYXJnZXRQcmV2aW91cyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFwcGx5IHRoZSB0b25lIG1hcHBpbmcgdG8gdGhlIGNvbG91cnMuXHJcblx0XHRxdWFkLm1hdGVyaWFsID0gdG9uZU1hcHBpbmdNYXRlcmlhbDtcclxuXHRcdHRvbmVNYXBwaW5nTWF0ZXJpYWwudW5pZm9ybXMudERpZmZ1c2UudmFsdWUgPSByZWFkQnVmZmVyLnRleHR1cmU7XHJcblxyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRvU2NyZWVuID8gbnVsbCA6IHdyaXRlQnVmZmVyKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW5kZXJzIHNvbWV0aGluZyBpbnRvIHRoZSBwcmV2aW91cyBsdW1pbm9zaXR5IHRleHR1cmUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1dlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyLlxyXG5cdCAqL1xyXG5cclxuXHRpbml0aWFsaXNlKHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4N2ZmZmZmIH0pO1xyXG5cdFx0cmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRhcmdldFByZXZpb3VzKTtcclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIEEgY29tcGlsYXRpb24gb2YgdGhlIHBvc3QgcHJvY2Vzc2luZyBwYXNzZXMuXHJcbiAqXHJcbiAqIEBtb2R1bGUgcG9zdHByb2Nlc3NpbmcvcGFzc2VzXHJcbiAqL1xyXG5cclxuZXhwb3J0IHsgQmxvb21QYXNzIH0gZnJvbSBcIi4vYmxvb20uanNcIjtcclxuZXhwb3J0IHsgQmx1clBhc3MgfSBmcm9tIFwiLi9ibHVyLmpzXCI7XHJcbmV4cG9ydCB7IEJva2VoUGFzcyB9IGZyb20gXCIuL2Jva2VoLmpzXCI7XHJcbmV4cG9ydCB7IEJva2VoMlBhc3MgfSBmcm9tIFwiLi9ib2tlaDIuanNcIjtcclxuZXhwb3J0IHsgQ2xlYXJQYXNzIH0gZnJvbSBcIi4vY2xlYXIuanNcIjtcclxuZXhwb3J0IHsgQ2xlYXJNYXNrUGFzcyB9IGZyb20gXCIuL2NsZWFyLW1hc2suanNcIjtcclxuZXhwb3J0IHsgRG90U2NyZWVuUGFzcyB9IGZyb20gXCIuL2RvdC1zY3JlZW4uanNcIjtcclxuZXhwb3J0IHsgRGVwdGhQYXNzIH0gZnJvbSBcIi4vZGVwdGguanNcIjtcclxuZXhwb3J0IHsgRmlsbVBhc3MgfSBmcm9tIFwiLi9maWxtLmpzXCI7XHJcbmV4cG9ydCB7IEdsaXRjaE1vZGUsIEdsaXRjaFBhc3MgfSBmcm9tIFwiLi9nbGl0Y2guanNcIjtcclxuZXhwb3J0IHsgR29kUmF5c1Bhc3MgfSBmcm9tIFwiLi9nb2QtcmF5cy5qc1wiO1xyXG5leHBvcnQgeyBNYXNrUGFzcyB9IGZyb20gXCIuL21hc2suanNcIjtcclxuZXhwb3J0IHsgUGFzcyB9IGZyb20gXCIuL3Bhc3MuanNcIjtcclxuZXhwb3J0IHsgUGl4ZWxhdGlvblBhc3MgfSBmcm9tIFwiLi9waXhlbGF0aW9uLmpzXCI7XHJcbmV4cG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuZXhwb3J0IHsgU2F2ZVBhc3MgfSBmcm9tIFwiLi9zYXZlLmpzXCI7XHJcbmV4cG9ydCB7IFNoYWRlclBhc3MgfSBmcm9tIFwiLi9zaGFkZXIuanNcIjtcclxuZXhwb3J0IHsgU2hvY2tXYXZlUGFzcyB9IGZyb20gXCIuL3Nob2NrLXdhdmUuanNcIjtcclxuZXhwb3J0IHsgU01BQVBhc3MgfSBmcm9tIFwiLi9zbWFhLmpzXCI7XHJcbmV4cG9ydCB7IFRleHR1cmVQYXNzIH0gZnJvbSBcIi4vdGV4dHVyZS5qc1wiO1xyXG5leHBvcnQgeyBUb25lTWFwcGluZ1Bhc3MgfSBmcm9tIFwiLi90b25lLW1hcHBpbmcuanNcIjtcclxuIiwiaW1wb3J0IHtcclxuXHREZXB0aFN0ZW5jaWxGb3JtYXQsXHJcblx0RGVwdGhUZXh0dXJlLFxyXG5cdExpbmVhckZpbHRlcixcclxuXHRSR0JBRm9ybWF0LFxyXG5cdFJHQkZvcm1hdCxcclxuXHRVbnNpZ25lZEludDI0OFR5cGUsXHJcblx0V2ViR0xSZW5kZXJUYXJnZXRcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IENsZWFyTWFza1Bhc3MsIE1hc2tQYXNzLCBTaGFkZXJQYXNzIH0gZnJvbSBcIi4uL3Bhc3Nlc1wiO1xyXG5pbXBvcnQgeyBDb3B5TWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxzXCI7XHJcblxyXG4vKipcclxuICogVGhlIEVmZmVjdENvbXBvc2VyIG1heSBiZSB1c2VkIGluIHBsYWNlIG9mIGEgbm9ybWFsIFdlYkdMUmVuZGVyZXIuXHJcbiAqXHJcbiAqIFRoZSBhdXRvIGNsZWFyIGJlaGF2aW91ciBvZiB0aGUgcHJvdmlkZWQgcmVuZGVyZXIgd2lsbCBiZSBkaXNhYmxlZCB0byBwcmV2ZW50XHJcbiAqIHVubmVjZXNzYXJ5IGNsZWFyIG9wZXJhdGlvbnMuXHJcbiAqXHJcbiAqIEl0IGlzIGNvbW1vbiBwcmFjdGljZSB0byB1c2UgYSB7QGxpbmsgUmVuZGVyUGFzc30gYXMgdGhlIGZpcnN0IHBhc3MgdG9cclxuICogYXV0b21hdGljYWxseSBjbGVhciB0aGUgc2NyZWVuIGFuZCByZW5kZXIgdGhlIHNjZW5lIHRvIGEgdGV4dHVyZSBmb3IgZnVydGhlclxyXG4gKiBwcm9jZXNzaW5nLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBFZmZlY3RDb21wb3NlciB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgZWZmZWN0IGNvbXBvc2VyLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtXZWJHTFJlbmRlcmVyfSBbcmVuZGVyZXJdIC0gVGhlIHJlbmRlcmVyIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGVwdGhCdWZmZXI9dHJ1ZV0gLSBXaGV0aGVyIHRoZSBtYWluIHJlbmRlciB0YXJnZXRzIHNob3VsZCBoYXZlIGEgZGVwdGggYnVmZmVyLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc3RlbmNpbEJ1ZmZlcj1mYWxzZV0gLSBXaGV0aGVyIHRoZSBtYWluIHJlbmRlciB0YXJnZXRzIHNob3VsZCBoYXZlIGEgc3RlbmNpbCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kZXB0aFRleHR1cmU9ZmFsc2VdIC0gU2V0IHRvIHRydWUgaWYgb25lIG9mIHlvdXIgcGFzc2VzIHJlbGllcyBvbiBhIGRlcHRoIHRleHR1cmUuXHJcblx0ICovXHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgcmVuZGVyZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogWW91IG1heSByZXBsYWNlIHRoZSByZW5kZXJlciBhdCBhbnkgdGltZSBieSB1c2luZ1xyXG5cdFx0ICoge0BsaW5rIEVmZmVjdENvbXBvc2VyI3JlcGxhY2VSZW5kZXJlcn0uXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyZXJ9XHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgcmVhZCBidWZmZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogUmVhZGluZyBmcm9tIGFuZCB3cml0aW5nIHRvIHRoZSBzYW1lIHJlbmRlciB0YXJnZXQgc2hvdWxkIGJlIGF2b2lkZWQuXHJcblx0XHQgKiBUaGVyZWZvcmUsIHR3byBzZXBlcmF0ZSB5ZXQgaWRlbnRpY2FsIGJ1ZmZlcnMgYXJlIHVzZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1dlYkdMUmVuZGVyVGFyZ2V0fVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cclxuXHRcdHRoaXMucmVhZEJ1ZmZlciA9IG51bGw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgd3JpdGUgYnVmZmVyLlxyXG5cdFx0ICpcclxuXHRcdCAqIEB0eXBlIHtXZWJHTFJlbmRlclRhcmdldH1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gbnVsbDtcclxuXHJcblx0XHRpZih0aGlzLnJlbmRlcmVyICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoXHJcblx0XHRcdFx0KG9wdGlvbnMuZGVwdGhCdWZmZXIgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmRlcHRoQnVmZmVyIDogdHJ1ZSxcclxuXHRcdFx0XHQob3B0aW9ucy5zdGVuY2lsQnVmZmVyICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5zdGVuY2lsQnVmZmVyIDogZmFsc2UsXHJcblx0XHRcdFx0KG9wdGlvbnMuZGVwdGhUZXh0dXJlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5kZXB0aFRleHR1cmUgOiBmYWxzZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVhZEJ1ZmZlci5jbG9uZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEEgY29weSBwYXNzIHVzZWQgZm9yIGNvcHlpbmcgbWFza2VkIHNjZW5lcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAdHlwZSB7U2hhZGVyUGFzc31cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFNoYWRlclBhc3MobmV3IENvcHlNYXRlcmlhbCgpKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBwYXNzZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogQHR5cGUge1Bhc3NbXX1cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHJcblx0XHR0aGlzLnBhc3NlcyA9IFtdO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBkZXB0aCB0ZXh0dXJlIG9mIHRoZSByZWFkIGFuZCB3cml0ZSBidWZmZXJzLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge0RlcHRoVGV4dHVyZX1cclxuXHQgKiBAZGVmYXVsdCBudWxsXHJcblx0ICovXHJcblxyXG5cdGdldCBkZXB0aFRleHR1cmUoKSB7IHJldHVybiB0aGlzLnJlYWRCdWZmZXIuZGVwdGhUZXh0dXJlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSByZWFkIGFuZCB3cml0ZSBidWZmZXJzIHNoYXJlIGEgc2luZ2xlIGRlcHRoIHRleHR1cmUuIERlcHRoIHdpbGwgYmVcclxuXHQgKiB3cml0dGVuIHRvIHRoaXMgdGV4dHVyZSB3aGVuIHNvbWV0aGluZyBpcyByZW5kZXJlZCBpbnRvIG9uZSBvZiB0aGUgYnVmZmVyc1xyXG5cdCAqIGFuZCB0aGUgaW52b2x2ZWQgbWF0ZXJpYWxzIGhhdmUgZGVwdGggd3JpdGUgZW5hYmxlZC5cclxuXHQgKlxyXG5cdCAqIFlvdSBtYXkgZW5hYmxlIHRoaXMgbWVjaGFuaXNtIGR1cmluZyB0aGUgaW5zdGFudGlhdGlvbiBvZiB0aGUgY29tcG9zZXIgb3JcclxuXHQgKiBieSBhc3NpZ25pbmcgYSBEZXB0aFRleHR1cmUgaW5zdGFuY2UgbGF0ZXIgb24uIFlvdSBtYXkgYWxzbyBkaXNhYmxlIGl0IGJ5XHJcblx0ICogYXNzaWduaW5nIG51bGwuXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7RGVwdGhUZXh0dXJlfVxyXG5cdCAqL1xyXG5cclxuXHRzZXQgZGVwdGhUZXh0dXJlKHgpIHtcclxuXHJcblx0XHR0aGlzLnJlYWRCdWZmZXIuZGVwdGhUZXh0dXJlID0geDtcclxuXHRcdHRoaXMud3JpdGVCdWZmZXIuZGVwdGhUZXh0dXJlID0geDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXBsYWNlcyB0aGUgY3VycmVudCByZW5kZXJlciB3aXRoIHRoZSBnaXZlbiBvbmUuIFRoZSBET00gZWxlbWVudCBvZiB0aGVcclxuXHQgKiBjdXJyZW50IHJlbmRlcmVyIHdpbGwgYXV0b21hdGljYWxseSBiZSByZW1vdmVkIGZyb20gaXRzIHBhcmVudCBub2RlIGFuZCB0aGVcclxuXHQgKiBET00gZWxlbWVudCBvZiB0aGUgbmV3IHJlbmRlcmVyIHdpbGwgdGFrZSBpdHMgcGxhY2UuXHJcblx0ICpcclxuXHQgKiBUaGUgYXV0byBjbGVhciBtZWNoYW5pc20gb2YgdGhlIHByb3ZpZGVkIHJlbmRlcmVyIHdpbGwgYmUgZGlzYWJsZWQuXHJcblx0ICpcclxuXHQgKiBTd2l0Y2hpbmcgYmV0d2VlbiByZW5kZXJlcnMgYWxsb3dzIHlvdSB0byBkeW5hbWljYWxseSBlbmFibGUgb3IgZGlzYWJsZVxyXG5cdCAqIGFudGlhbGlhc2luZy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgbmV3IHJlbmRlcmVyLlxyXG5cdCAqIEByZXR1cm4ge1dlYkdMUmVuZGVyZXJ9IFRoZSBvbGQgcmVuZGVyZXIuXHJcblx0ICovXHJcblxyXG5cdHJlcGxhY2VSZW5kZXJlcihyZW5kZXJlcikge1xyXG5cclxuXHRcdGNvbnN0IG9sZFJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuXHJcblx0XHRsZXQgcGFyZW50LCBvbGRTaXplLCBuZXdTaXplO1xyXG5cclxuXHRcdGlmKG9sZFJlbmRlcmVyICE9PSBudWxsICYmIG9sZFJlbmRlcmVyICE9PSByZW5kZXJlcikge1xyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xyXG5cclxuXHRcdFx0cGFyZW50ID0gb2xkUmVuZGVyZXIuZG9tRWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0XHRvbGRTaXplID0gb2xkUmVuZGVyZXIuZ2V0U2l6ZSgpO1xyXG5cdFx0XHRuZXdTaXplID0gcmVuZGVyZXIuZ2V0U2l6ZSgpO1xyXG5cclxuXHRcdFx0aWYocGFyZW50ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChvbGRSZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihvbGRTaXplLndpZHRoICE9PSBuZXdTaXplLndpZHRoIHx8IG9sZFNpemUuaGVpZ2h0ICE9PSBuZXdTaXplLmhlaWdodCkge1xyXG5cclxuXHRcdFx0XHR0aGlzLnNldFNpemUoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG9sZFJlbmRlcmVyO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgcmVuZGVyIHRhcmdldCBieSByZXBsaWNhdGluZyB0aGUgcmVuZGVyZXIncyBjYW52YXMuXHJcblx0ICpcclxuXHQgKiBUaGUgY3JlYXRlZCByZW5kZXIgdGFyZ2V0IHVzZXMgYSBsaW5lYXIgZmlsdGVyIGZvciB0ZXhlbCBtaW5pZmljYXRpb24gYW5kXHJcblx0ICogbWFnbmlmaWNhdGlvbi4gSXRzIHJlbmRlciB0ZXh0dXJlIGZvcm1hdCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIHJlbmRlcmVyXHJcblx0ICogdXNlcyB0aGUgYWxwaGEgY2hhbm5lbC4gTWlwbWFwcyBhcmUgZGlzYWJsZWQuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGRlcHRoQnVmZmVyIC0gV2hldGhlciB0aGUgcmVuZGVyIHRhcmdldCBzaG91bGQgaGF2ZSBhIGRlcHRoIGJ1ZmZlci5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IHN0ZW5jaWxCdWZmZXIgLSBXaGV0aGVyIHRoZSByZW5kZXIgdGFyZ2V0IHNob3VsZCBoYXZlIGEgc3RlbmNpbCBidWZmZXIuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBkZXB0aFRleHR1cmUgLSBXaGV0aGVyIHRoZSByZW5kZXIgdGFyZ2V0IHNob3VsZCBoYXZlIGEgZGVwdGggdGV4dHVyZS5cclxuXHQgKiBAcmV0dXJuIHtXZWJHTFJlbmRlclRhcmdldH0gQSBuZXcgcmVuZGVyIHRhcmdldCB0aGF0IGVxdWFscyB0aGUgcmVuZGVyZXIncyBjYW52YXMuXHJcblx0ICovXHJcblxyXG5cdGNyZWF0ZUJ1ZmZlcihkZXB0aEJ1ZmZlciwgc3RlbmNpbEJ1ZmZlciwgZGVwdGhUZXh0dXJlKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMucmVuZGVyZXIuZ2V0U2l6ZSgpO1xyXG5cdFx0Y29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMucmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xyXG5cdFx0Y29uc3QgYWxwaGEgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5hbHBoYTtcclxuXHJcblx0XHRjb25zdCByZW5kZXJUYXJnZXQgPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoc2l6ZS53aWR0aCAqIHBpeGVsUmF0aW8sIHNpemUuaGVpZ2h0ICogcGl4ZWxSYXRpbywge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IExpbmVhckZpbHRlcixcclxuXHRcdFx0bWFnRmlsdGVyOiBMaW5lYXJGaWx0ZXIsXHJcblx0XHRcdGZvcm1hdDogYWxwaGEgPyBSR0JBRm9ybWF0IDogUkdCRm9ybWF0LFxyXG5cdFx0XHRkZXB0aEJ1ZmZlcjogZGVwdGhCdWZmZXIsXHJcblx0XHRcdHN0ZW5jaWxCdWZmZXI6IHN0ZW5jaWxCdWZmZXIsXHJcblx0XHRcdGRlcHRoVGV4dHVyZTogZGVwdGhUZXh0dXJlID8gbmV3IERlcHRoVGV4dHVyZSgpIDogbnVsbFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoZGVwdGhUZXh0dXJlICYmIHN0ZW5jaWxCdWZmZXIpIHtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldC5kZXB0aFRleHR1cmUuZm9ybWF0ID0gRGVwdGhTdGVuY2lsRm9ybWF0O1xyXG5cdFx0XHRyZW5kZXJUYXJnZXQuZGVwdGhUZXh0dXJlLnR5cGUgPSBVbnNpZ25lZEludDI0OFR5cGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJlbmRlclRhcmdldC50ZXh0dXJlLm5hbWUgPSBcIkVmZmVjdENvbXBvc2VyLkJ1ZmZlclwiO1xyXG5cdFx0cmVuZGVyVGFyZ2V0LnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuIHJlbmRlclRhcmdldDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGEgcGFzcywgb3B0aW9uYWxseSBhdCBhIHNwZWNpZmljIGluZGV4LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQYXNzfSBwYXNzIC0gQSBuZXcgcGFzcy5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSAtIEFuIGluZGV4IGF0IHdoaWNoIHRoZSBwYXNzIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHJcblx0YWRkUGFzcyhwYXNzLCBpbmRleCkge1xyXG5cclxuXHRcdGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuXHRcdGNvbnN0IHNpemUgPSByZW5kZXJlci5nZXRTaXplKCk7XHJcblx0XHRjb25zdCBwaXhlbFJhdGlvID0gcmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xyXG5cclxuXHRcdHBhc3Muc2V0U2l6ZShzaXplLndpZHRoICogcGl4ZWxSYXRpbywgc2l6ZS5oZWlnaHQgKiBwaXhlbFJhdGlvKTtcclxuXHRcdHBhc3MuaW5pdGlhbGlzZShyZW5kZXJlciwgcmVuZGVyZXIuY29udGV4dC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFscGhhKTtcclxuXHJcblx0XHRpZihpbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5zcGxpY2UoaW5kZXgsIDAsIHBhc3MpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKHBhc3MpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGEgcGFzcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UGFzc30gcGFzcyAtIFRoZSBwYXNzLlxyXG5cdCAqL1xyXG5cclxuXHRyZW1vdmVQYXNzKHBhc3MpIHtcclxuXHJcblx0XHR0aGlzLnBhc3Nlcy5zcGxpY2UodGhpcy5wYXNzZXMuaW5kZXhPZihwYXNzKSwgMSk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVuZGVycyBhbGwgZW5hYmxlZCBwYXNzZXMgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkZWx0YSAtIFRoZSB0aW1lIGJldHdlZW4gdGhlIGxhc3QgZnJhbWUgYW5kIHRoZSBjdXJyZW50IG9uZSBpbiBzZWNvbmRzLlxyXG5cdCAqL1xyXG5cclxuXHRyZW5kZXIoZGVsdGEpIHtcclxuXHJcblx0XHRjb25zdCBwYXNzZXMgPSB0aGlzLnBhc3NlcztcclxuXHRcdGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuXHRcdGNvbnN0IGNvcHlQYXNzID0gdGhpcy5jb3B5UGFzcztcclxuXHJcblx0XHRsZXQgcmVhZEJ1ZmZlciA9IHRoaXMucmVhZEJ1ZmZlcjtcclxuXHRcdGxldCB3cml0ZUJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblxyXG5cdFx0bGV0IG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHRcdGxldCBwYXNzLCBjb250ZXh0LCBidWZmZXI7XHJcblx0XHRsZXQgaSwgbDtcclxuXHJcblx0XHRmb3IoaSA9IDAsIGwgPSBwYXNzZXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcblxyXG5cdFx0XHRwYXNzID0gcGFzc2VzW2ldO1xyXG5cclxuXHRcdFx0aWYocGFzcy5lbmFibGVkKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MucmVuZGVyKHJlbmRlcmVyLCByZWFkQnVmZmVyLCB3cml0ZUJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRpZihwYXNzLm5lZWRzU3dhcCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKG1hc2tBY3RpdmUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYpO1xyXG5cdFx0XHRcdFx0XHRjb3B5UGFzcy5yZW5kZXIocmVuZGVyZXIsIHJlYWRCdWZmZXIsIHdyaXRlQnVmZmVyKTtcclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyhjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnVmZmVyID0gcmVhZEJ1ZmZlcjtcclxuXHRcdFx0XHRcdHJlYWRCdWZmZXIgPSB3cml0ZUJ1ZmZlcjtcclxuXHRcdFx0XHRcdHdyaXRlQnVmZmVyID0gYnVmZmVyO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKHBhc3MgaW5zdGFuY2VvZiBNYXNrUGFzcykge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYocGFzcyBpbnN0YW5jZW9mIENsZWFyTWFza1Bhc3MpIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgYnVmZmVycyBhbmQgdGhlIHJlbmRlcmVyJ3Mgb3V0cHV0IGNhbnZhcy5cclxuXHQgKlxyXG5cdCAqIEV2ZXJ5IHBhc3Mgd2lsbCBiZSBpbmZvcm1lZCBvZiB0aGUgbmV3IHNpemUuIEl0J3MgdXAgdG8gZWFjaCBwYXNzIGhvdyB0aGF0XHJcblx0ICogaW5mb3JtYXRpb24gaXMgdXNlZC5cclxuXHQgKlxyXG5cdCAqIElmIG5vIHdpZHRoIG9yIGhlaWdodCBpcyBzcGVjaWZpZWQsIHRoZSByZW5kZXIgdGFyZ2V0cyBhbmQgcGFzc2VzIHdpbGwgYmVcclxuXHQgKiB1cGRhdGVkIHdpdGggdGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgcmVuZGVyZXIuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3dpZHRoXSAtIFRoZSB3aWR0aC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2hlaWdodF0gLSBUaGUgaGVpZ2h0LlxyXG5cdCAqL1xyXG5cclxuXHRzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHRjb25zdCBwYXNzZXMgPSB0aGlzLnBhc3NlcztcclxuXHRcdGNvbnN0IHNpemUgPSB0aGlzLnJlbmRlcmVyLmdldFNpemUoKTtcclxuXHRcdGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLnJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKTtcclxuXHJcblx0XHRsZXQgaSwgbDtcclxuXHJcblx0XHRpZih3aWR0aCA9PT0gdW5kZWZpbmVkIHx8IGhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHR3aWR0aCA9IHNpemUud2lkdGg7XHJcblx0XHRcdGhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XHJcblxyXG5cdFx0d2lkdGggKj0gcGl4ZWxSYXRpbztcclxuXHRcdGhlaWdodCAqPSBwaXhlbFJhdGlvO1xyXG5cclxuXHRcdHRoaXMucmVhZEJ1ZmZlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy53cml0ZUJ1ZmZlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdGZvcihpID0gMCwgbCA9IHBhc3Nlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuXHJcblx0XHRcdHBhc3Nlc1tpXS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldHMgdGhpcyBjb21wb3NlciBieSBkZWxldGluZyBhbGwgcGFzc2VzIGFuZCBjcmVhdGluZyBuZXcgYnVmZmVycy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IFtyZW5kZXJUYXJnZXRdIC0gQSBuZXcgcmVuZGVyIHRhcmdldC4gSWYgbm9uZSBpcyBwcm92aWRlZCwgdGhlIHNldHRpbmdzIG9mIHRoZSByZW5kZXJlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblxyXG5cdHJlc2V0KHJlbmRlclRhcmdldCkge1xyXG5cclxuXHRcdGNvbnN0IGRlcHRoQnVmZmVyID0gdGhpcy5yZWFkQnVmZmVyLmRlcHRoQnVmZmVyO1xyXG5cdFx0Y29uc3Qgc3RlbmNpbEJ1ZmZlciA9IHRoaXMucmVhZEJ1ZmZlci5zdGVuY2lsQnVmZmVyO1xyXG5cdFx0Y29uc3QgZGVwdGhUZXh0dXJlID0gKHRoaXMucmVhZEJ1ZmZlci5kZXB0aFRleHR1cmUgIT09IG51bGwpO1xyXG5cclxuXHRcdHRoaXMuZGlzcG9zZSgocmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQpID9cclxuXHRcdFx0dGhpcy5jcmVhdGVCdWZmZXIoZGVwdGhCdWZmZXIsIHN0ZW5jaWxCdWZmZXIsIGRlcHRoVGV4dHVyZSkgOlxyXG5cdFx0XHRyZW5kZXJUYXJnZXRcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveXMgYWxsIHBhc3NlcyBhbmQgcmVuZGVyIHRhcmdldHMuXHJcblx0ICpcclxuXHQgKiBUaGlzIG1ldGhvZCBkZWFsbG9jYXRlcyBhbGwgcmVuZGVyIHRhcmdldHMsIHRleHR1cmVzIGFuZCBtYXRlcmlhbHMgY3JlYXRlZFxyXG5cdCAqIGJ5IHRoZSBwYXNzZXMuIEl0IGFsc28gZGVsZXRlcyB0aGlzIGNvbXBvc2VyJ3MgZnJhbWUgYnVmZmVycy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7V2ViR0xSZW5kZXJUYXJnZXR9IFtyZW5kZXJUYXJnZXRdIC0gQSBuZXcgcmVuZGVyIHRhcmdldC4gSWYgbm9uZSBpcyBwcm92aWRlZCwgdGhlIGNvbXBvc2VyIHdpbGwgYmVjb21lIGlub3BlcmF0aXZlLlxyXG5cdCAqL1xyXG5cclxuXHRkaXNwb3NlKHJlbmRlclRhcmdldCkge1xyXG5cclxuXHRcdGNvbnN0IHBhc3NlcyA9IHRoaXMucGFzc2VzO1xyXG5cclxuXHRcdGlmKHRoaXMucmVhZEJ1ZmZlciAhPT0gbnVsbCAmJiB0aGlzLndyaXRlQnVmZmVyICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIuZGlzcG9zZSgpO1xyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyLmRpc3Bvc2UoKTtcclxuXHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IG51bGw7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aGlsZShwYXNzZXMubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0cGFzc2VzLnBvcCgpLmRpc3Bvc2UoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYocmVuZGVyVGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdC8vIFJlYW5pbWF0ZS5cclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZWFkQnVmZmVyLmNsb25lKCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHRoaXMuY29weVBhc3MuZGlzcG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQ29yZSBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAbW9kdWxlIHBvc3Rwcm9jZXNzaW5nL2NvcmVcclxuICovXHJcblxyXG5leHBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCIuL2VmZmVjdC1jb21wb3Nlci5qc1wiO1xyXG4iLCIvKipcclxuICogRXhwb3N1cmUgb2YgdGhlIGxpYnJhcnkgY29tcG9uZW50cy5cclxuICpcclxuICogQG1vZHVsZSBwb3N0cHJvY2Vzc2luZ1xyXG4gKi9cclxuXHJcbmV4cG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuXHRCbG9vbVBhc3MsXHJcblx0Qmx1clBhc3MsXHJcblx0Qm9rZWhQYXNzLFxyXG5cdEJva2VoMlBhc3MsXHJcblx0Q2xlYXJQYXNzLFxyXG5cdENsZWFyTWFza1Bhc3MsXHJcblx0RGVwdGhQYXNzLFxyXG5cdERvdFNjcmVlblBhc3MsXHJcblx0RmlsbVBhc3MsXHJcblx0R2xpdGNoTW9kZSxcclxuXHRHbGl0Y2hQYXNzLFxyXG5cdEdvZFJheXNQYXNzLFxyXG5cdE1hc2tQYXNzLFxyXG5cdFBhc3MsXHJcblx0UGl4ZWxhdGlvblBhc3MsXHJcblx0UmVuZGVyUGFzcyxcclxuXHRTYXZlUGFzcyxcclxuXHRTaGFkZXJQYXNzLFxyXG5cdFNob2NrV2F2ZVBhc3MsXHJcblx0U01BQVBhc3MsXHJcblx0VGV4dHVyZVBhc3MsXHJcblx0VG9uZU1hcHBpbmdQYXNzXHJcbn0gZnJvbSBcIi4vcGFzc2VzXCI7XHJcblxyXG5leHBvcnQge1xyXG5cdEFkYXB0aXZlTHVtaW5vc2l0eU1hdGVyaWFsLFxyXG5cdEJva2VoTWF0ZXJpYWwsXHJcblx0Qm9rZWgyTWF0ZXJpYWwsXHJcblx0Q29tYmluZU1hdGVyaWFsLFxyXG5cdENvbnZvbHV0aW9uTWF0ZXJpYWwsXHJcblx0Q29weU1hdGVyaWFsLFxyXG5cdERlcHRoTWF0ZXJpYWwsXHJcblx0RG90U2NyZWVuTWF0ZXJpYWwsXHJcblx0RmlsbU1hdGVyaWFsLFxyXG5cdEdsaXRjaE1hdGVyaWFsLFxyXG5cdEdvZFJheXNNYXRlcmlhbCxcclxuXHRLZXJuZWxTaXplLFxyXG5cdEx1bWlub3NpdHlNYXRlcmlhbCxcclxuXHRQaXhlbGF0aW9uTWF0ZXJpYWwsXHJcblx0U2hvY2tXYXZlTWF0ZXJpYWwsXHJcblx0U01BQUJsZW5kTWF0ZXJpYWwsXHJcblx0U01BQUNvbG9yRWRnZXNNYXRlcmlhbCxcclxuXHRTTUFBV2VpZ2h0c01hdGVyaWFsLFxyXG5cdFRvbmVNYXBwaW5nTWF0ZXJpYWxcclxufSBmcm9tIFwiLi9tYXRlcmlhbHNcIjtcclxuIiwiaW1wb3J0IHtcbiAgRWZmZWN0Q29tcG9zZXIsXG4gIFJlbmRlclBhc3MsXG4gIFNoYWRlclBhc3Ncbn0gZnJvbSAncG9zdHByb2Nlc3NpbmcnO1xuXG5pbXBvcnQge0xvb3B9IGZyb20gJy4uLy4uL2NvcmUvTG9vcCc7XG5cbmNvbnN0IHBvbHlmaWxsID0gKG9iamVjdCwgbWV0aG9kLCBzaG93V2FybiA9IHRydWUpID0+IHtcbiAgaWYgKG9iamVjdFttZXRob2RdKSByZXR1cm47XG4gIGlmIChzaG93V2FybikgY29uc29sZS53YXJuKGBAUG9zdFByb2Nlc3Nvck1vZHVsZTogcGFzcy4ke21ldGhvZH0oKSB3YXMgbm90IGZvdW5kLmAsIG9iamVjdCk7XG4gIG9iamVjdFttZXRob2RdID0gKCkgPT4ge307XG59O1xuXG5leHBvcnQgY2xhc3MgUG9zdFByb2Nlc3Nvck1vZHVsZSB7XG4gIGN1cnJlbnRQYXNzID0gbnVsbDtcblxuICBkZWZlciA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHtkZWJ1Z30gPSB7ZGVidWc6IHRydWV9KSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5kZWZpbmUoJ3Bvc3Rwcm9jZXNzb3InKTtcblxuICAgIHRoaXMuZWZmZWN0cyA9IG1hbmFnZXIudXNlKCdyZW5kZXJpbmcnKS5lZmZlY3RzO1xuICAgIHRoaXMucmVuZGVyZXIgPSBtYW5hZ2VyLmdldCgncmVuZGVyZXInKTtcbiAgICB0aGlzLnNjZW5lID0gbWFuYWdlci5nZXQoJ3NjZW5lJyk7XG4gICAgdGhpcy5jYW1lcmEgPSBtYW5hZ2VyLmdldCgnY2FtZXJhJyk7XG5cbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgbWFuYWdlci51c2UoJ3JlbmRlcmluZycpLnN0b3AoKTtcblxuICAgIGNvbnN0IGNvbXBvc2VyID0gdGhpcy5jb21wb3NlcjtcbiAgICB0aGlzLnJlbmRlckxvb3AgPSBuZXcgTG9vcChjbG9jayA9PiBjb21wb3Nlci5yZW5kZXIoY2xvY2suZ2V0RGVsdGEoKSkpLnN0YXJ0KG1hbmFnZXIuaGFuZGxlcik7XG5cbiAgICBtYW5hZ2VyLnVwZGF0ZSh7XG4gICAgICByZW5kZXJlcjogcmVuZGVyZXIgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvc2VyLnJlcGxhY2VSZW5kZXJlcihyZW5kZXJlcik7XG4gICAgICB9LFxuXG4gICAgICBzY2VuZTogc2NlbmUgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICB9LFxuXG4gICAgICBjYW1lcmE6IGNhbWVyYSA9PiB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNvbHZlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5kZWZlci50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHBhc3MgPSBuZXcgUmVuZGVyUGFzcyh0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYS5uYXRpdmUpO1xuXG4gICAgICAvLyBUT0RPOiBTdXBwb3J0IGZvciBlZmZlY3RzLlxuXG4gICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcyk7XG4gICAgICB0aGlzLmN1cnJlbnRQYXNzID0gcGFzcztcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQVBJXG5cbiAgcGFzcyhwYXNzKSB7XG4gICAgdGhpcy5kZWZlci50aGVuKCgpID0+IHtcbiAgICAgIHBvbHlmaWxsKHBhc3MsICdzZXRTaXplJywgdGhpcy5kZWJ1Zyk7XG4gICAgICBwb2x5ZmlsbChwYXNzLCAnaW5pdGlhbGlzZScsIHRoaXMuZGVidWcpO1xuXG4gICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcyk7XG4gICAgICB0aGlzLmN1cnJlbnRQYXNzID0gcGFzcztcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2hhZGVyKG1hdGVyaWFsLCB0ZXh0dXJlSUQgPSAncmVhZEJ1ZmZlcicpIHtcbiAgICB0aGlzLmRlZmVyLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFtYXRlcmlhbC51bmlmb3Jtc1t0ZXh0dXJlSURdKVxuICAgICAgICBtYXRlcmlhbC51bmlmb3Jtc1t0ZXh0dXJlSURdID0ge3ZhbHVlOiBudWxsfTtcblxuICAgICAgY29uc3QgcGFzcyA9IG5ldyBTaGFkZXJQYXNzKG1hdGVyaWFsLCB0ZXh0dXJlSUQpO1xuICAgICAgdGhpcy5jb21wb3Nlci5hZGRQYXNzKHBhc3MpO1xuICAgICAgdGhpcy5jdXJyZW50UGFzcyA9IHBhc3M7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFBhc3MgQVBJXG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZVxuICAgICAgPyB0aGlzLmNvbXBvc2VyLnBhc3Nlcy5maWx0ZXIocGFzcyA9PiBwYXNzLm5hbWUgPT09IG5hbWUpWzBdXG4gICAgICA6IHRoaXMuY3VycmVudFBhc3M7XG4gIH1cblxuICB0byhuYW1lKSB7XG4gICAgdGhpcy5jdXJyZW50UGFzcyA9IG5hbWU7XG4gIH1cblxuICByZW5kZXJUb1NjcmVlbihib29sID0gdHJ1ZSkge1xuICAgIHRoaXMuZGVmZXIudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYXNzLnJlbmRlclRvU2NyZWVuID0gYm9vbDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmFtZShuYW1lKSB7XG4gICAgdGhpcy5kZWZlci50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhc3MubmFtZSA9IG5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50c1BhdGNoTW9kdWxlIHtcbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5kZWZpbmUoJ2V2ZW50cycpO1xuICAgIHRoaXMuZWxlbWVudCA9IG1hbmFnZXIuZ2V0KCdyZW5kZXJlcicpLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBwYXRjaEV2ZW50cyhvcmlnaW5PYmplY3QsIGRlc3RPYmplY3QsIGV2ZW50cyA9IFtdKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT5cbiAgICAgIG9yaWdpbk9iamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlID0+IGRlc3RPYmplY3QuZW1pdChldmVudCwgZSkpXG4gICAgKTtcbiAgfVxuXG4gIGludGVncmF0ZShzZWxmKSB7XG4gICAgY29uc3Qge2VsZW1lbnQsIHBhdGNoRXZlbnRzfSA9IHNlbGY7XG5cbiAgICBwYXRjaEV2ZW50cyhlbGVtZW50LCB0aGlzLCBbXG4gICAgICAnbW91c2Vtb3ZlJyxcbiAgICAgICdtb3VzZXVwJyxcbiAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAnbW91c2Vkb3duJyxcbiAgICAgICdjbGljaycsXG4gICAgICAnd2hlZWwnLFxuICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgJ2tleWRvd24nXG4gICAgXSk7XG5cbiAgICBwYXRjaEV2ZW50cyhlbGVtZW50LCB0aGlzLCBbXG4gICAgICAna2V5ZG93bicsXG4gICAgICAna2V5dXAnLFxuICAgICAgJ2tleXByZXNzJ1xuICAgIF0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBWZWN0b3IyLFxuICBSYXljYXN0ZXIsXG4gIFBsYW5lLFxuICBWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuaW1wb3J0IEV2ZW50cyBmcm9tICdtaW5pdmVudHMnO1xuaW1wb3J0IHtFdmVudHNQYXRjaE1vZHVsZX0gZnJvbSAnLi9FdmVudHNQYXRjaE1vZHVsZSc7XG5cbi8qKlxuICogQGNsYXNzIFZpcnR1YWxNb3VzZU1vZHVsZVxuICogQGNhdGVnb3J5IG1vZHVsZXMvYXBwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtnbG9iYWxNb3ZlbWVudD1mYWxzZV1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHBcbiAqIEBleHRlbmRzIEV2ZW50c1xuICovXG5leHBvcnQgY2xhc3MgVmlydHVhbE1vdXNlTW9kdWxlIGV4dGVuZHMgRXZlbnRzIHtcbiAgbW91c2UgPSBuZXcgVmVjdG9yMigpO1xuICByYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKCk7XG4gIHdvcmxkID0gbnVsbDtcbiAgY2FudmFzID0gbnVsbDtcbiAgcHJvamVjdGlvblBsYW5lID0gbmV3IFBsYW5lKG5ldyBWZWN0b3IzKDAsIDAsIDEpLCAwKTtcblxuICBjb25zdHJ1Y3RvcihnbG9iYWxNb3ZlbWVudCA9IGZhbHNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdsb2JhbE1vdmVtZW50ID0gZ2xvYmFsTW92ZW1lbnQ7XG4gIH1cblxuICB1cGRhdGUoZSwgY3VzdG9tWCwgY3VzdG9tWSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHggPSBjdXN0b21YIHx8IGUuY2xpZW50WDtcbiAgICBjb25zdCB5ID0gY3VzdG9tWSB8fCBlLmNsaWVudFk7XG5cbiAgICB0aGlzLm1vdXNlLnggPSAoKHggLSByZWN0LmxlZnQpIC8gKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpKSAqIDIgLSAxO1xuICAgIHRoaXMubW91c2UueSA9IC0oKHkgLSByZWN0LnRvcCkgLyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkpICogMiArIDE7XG5cbiAgICB0aGlzLnByb2plY3Rpb25QbGFuZS5ub3JtYWwuY29weSh0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpKTtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodGhpcy5tb3VzZSwgdGhpcy5jYW1lcmEpO1xuICAgIHRoaXMuZW1pdCgnbW92ZScpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgbWFuYWdlci5kZWZpbmUoJ21vdXNlJyk7XG4gICAgbWFuYWdlci5yZXF1aXJlKCdldmVudHMnLCAoKSA9PiBuZXcgRXZlbnRzUGF0Y2hNb2R1bGUoKSk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG1hbmFnZXIuZ2V0KCdyZW5kZXJlcicpLmRvbUVsZW1lbnQ7XG4gICAgdGhpcy5jYW1lcmEgPSBtYW5hZ2VyLmdldCgnY2FtZXJhJykubmF0aXZlO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBbXG4gICAgICAnY2xpY2snLFxuICAgICAgJ21vdXNlZG93bicsXG4gICAgICAnbW91c2V1cCcsXG4gICAgICAnbW91c2Vtb3ZlJ1xuICAgIF0uZm9yRWFjaChldiA9PiB0aGlzLm9uKGV2LCBlID0+IHNlbGYuZW1pdChldiwgZSkpKTtcblxuICAgIHNlbGYuZ2xvYmFsWCA9IDA7XG4gICAgc2VsZi5nbG9iYWxZID0gMDtcblxuICAgIHRoaXMub24oJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLmdsb2JhbFggKz0gZS5tb3ZlbWVudFg7XG4gICAgICAgIHNlbGYuZ2xvYmFsWSArPSBlLm1vdmVtZW50WTtcblxuICAgICAgICBzZWxmLnVwZGF0ZShlLCBzZWxmLmdsb2JhbFgsIHNlbGYuZ2xvYmFsWSk7XG4gICAgICB9IGVsc2Ugc2VsZi51cGRhdGUoZSk7XG4gICAgfSk7XG4gIH1cblxuICB0cmFjayhjb21wb25lbnQsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKCdtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaG92ZXJzKGNvbXBvbmVudCwgbmVzdGVkKSkge1xuICAgICAgICBpZiAoaXNIb3ZlcmVkKSBjb21wb25lbnQuZW1pdCgnbW91c2Vtb3ZlJyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC5lbWl0KCdtb3VzZW92ZXInKTtcbiAgICAgICAgICBpc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzSG92ZXJlZCkge1xuICAgICAgICBjb21wb25lbnQuZW1pdCgnbW91c2VvdXQnKTtcbiAgICAgICAgaXNIb3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc0hvdmVyZWQpIGNvbXBvbmVudC5lbWl0KCdjbGljaycpO1xuICAgICAgZWxzZSBjb21wb25lbnQuZW1pdCgnb2ZmQ2xpY2snKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGlmIChpc0hvdmVyZWQpIGNvbXBvbmVudC5lbWl0KCdtb3VzZWRvd24nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICBpZiAoaXNIb3ZlcmVkKSBjb21wb25lbnQuZW1pdCgnbW91c2V1cCcpO1xuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJzZWN0aW9uKHtuYXRpdmV9LCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgaWYgKG5hdGl2ZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIG5lc3RlZCkge1xuICAgICAgY29uc3Qgb2JqZWN0cyA9IFtdO1xuICAgICAgbmF0aXZlLnRyYXZlcnNlKGNoaWxkID0+IG9iamVjdHMucHVzaChjaGlsZCkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhvYmplY3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KG5hdGl2ZSk7XG4gIH1cblxuICBwcm9qZWN0KHBsYW5lID0gdGhpcy5wcm9qZWN0aW9uUGxhbmUpIHtcbiAgICByZXR1cm4gdGhpcy5yYXljYXN0ZXIucmF5LmludGVyc2VjdFBsYW5lKHBsYW5lKTtcbiAgfVxuXG4gIGhvdmVycyhjb21wb25lbnQsIG5lc3RlZCA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb24oY29tcG9uZW50LCBuZXN0ZWQpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXQgcmF5KCkge1xuICAgIHJldHVybiB0aGlzLnJheWNhc3Rlci5yYXk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZS54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2UueTtcbiAgfVxufVxuIiwiaW1wb3J0IHtMb29wfSBmcm9tICcuLi8uLi9jb3JlL0xvb3AnO1xuaW1wb3J0IHtFdmVudHNQYXRjaE1vZHVsZX0gZnJvbSAnLi9FdmVudHNQYXRjaE1vZHVsZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sc01vZHVsZSB7XG4gIHN0YXRpYyBmcm9tKGNvbnRyb2xzKSB7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sc01vZHVsZSh7Y29udHJvbHN9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGZpeDogY29udHJvbHMgPT4gY29udHJvbHMsXG5cbiAgICAgIHVwZGF0ZShjKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMudXBkYXRlKGMuZ2V0RGVsdGEoKSk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcblxuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnBhcmFtcy5jb250cm9scztcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMucGFyYW1zLnVwZGF0ZTtcbiAgfVxuXG4gIG1hbmFnZXIobWFuYWdlcikge1xuICAgIG1hbmFnZXIucmVxdWlyZSgnZXZlbnRzJywgKCkgPT4gbmV3IEV2ZW50c1BhdGNoTW9kdWxlKCkpO1xuICB9XG5cbiAgc2V0Q29udHJvbHMoY29udHJvbHMpIHtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHNlbGYudXBkYXRlTG9vcCA9IG5ldyBMb29wKHNlbGYudXBkYXRlLmJpbmQoc2VsZikpO1xuICAgIHNlbGYudXBkYXRlTG9vcC5zdGFydCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRm9nRXhwMixcbiAgRm9nXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3MgRm9nTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXtjb2xvcjogMHhlZmQxYjUsIGRlbnNpdHk6IDAuMDIwLCBuZWFyOiAxMCwgZmFyOiAxMDAwfV0gLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3R5cGU9ZXhwMl0gLSBUaGUgdHlwZSBvZiBmb2cgLSBleHAyIG9yIGxpbmVhclxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4YW1wbGUgPGNhcHRpb24+SG93IHRvIGNyZWF0ZSBhbmQgYXBwbHkgYSBGb2dNb2R1bGU8L2NhcHRpb24+XG4gKiBjb25zdCBmb2dNb2R1bGUgPSBuZXcgRm9nTW9kdWxlKHtcbiAqICAgIGNvbG9yOiAweGZmZmZmZixcbiAqICAgIGRlbnNpdHk6IDAuMDMsXG4gKiAgICBuZWFyOiAyMCxcbiAqICAgIGZhcjogMjAwXG4gKiAgfSwgJ2V4cDInKTtcbiAqXG4gKiBuZXcgQXBwKFtcbiAqICAuLi4sXG4gKiAgZm9nTW9kdWxlXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIEZvZ01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9LCB0eXBlKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbG9yOiAweGVmZDFiNSxcbiAgICAgIGRlbnNpdHk6IDAuMDIwLFxuICAgICAgbmVhcjogMTAsXG4gICAgICBmYXI6IDEwMDBcbiAgICB9LCBwYXJhbXMpO1xuICAgIGlmICghdHlwZSB8fCB0eXBlID09PSAnZXhwMicpIHRoaXMuZm9nID0gbmV3IEZvZ0V4cDIodGhpcy5wYXJhbXMuY29sb3IsIHRoaXMucGFyYW1zLmRlbnNpdHkpO1xuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB0aGlzLmZvZyA9IG5ldyBGb2codGhpcy5wYXJhbXMuY29sb3IsIHRoaXMucGFyYW1zLm5lYXIsIHRoaXMucGFyYW1zLmZhcik7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNldCgnZm9nJywgdGhpcy5mb2cpO1xuICAgIG1hbmFnZXIuZ2V0KCdzY2VuZScpLmZvZyA9IHRoaXMuZm9nO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGlzRXF1YWxEZWZhdWx0ID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICBlbHNlIGlmIChhICYmIGEuZXF1YWxzICYmIGEuZXF1YWxzKGIpKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBjbGFzcyBTdGF0ZU1vZHVsZVxuICogQGRlc2NyaXB0aW9uIGBTdGF0ZU1vZHVsZWAgaXMgdXNlZnVsIGZvciBhcHBzLCB3aGVyZSB5b3UgbmVlZCBzdGF0ZSBtYW5pcHVsYXRpb24uXG4gKiBUaGlzIGNhbiBiZTogX3RyYW5zaXRpb25zIGJldHdlZW4gc2NyZWVucywgZ2FtZXMsIGRldmVsb3BtZW50IG1vbWVudHNfLlxuICogWW91IGNhbiBjaGVjayBbYmFzaWMvc3RhdGVdKGh0dHBzOi8vd2hzLWRldi5zdXJnZS5zaC9leGFtcGxlcy8/YmFzaWMvc3RhdGUpIGV4YW1wbGUuXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9hcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXVxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcFxuICogQGV4YW1wbGUgPGNhcHRpb24+IENyZWF0aW5nIGEgc3RhdGUgbW9kdWxlPC9jYXB0aW9uPlxuICogbmV3IEFwcChbXG4gKiAgIC8vIC4uLlxuICogICBuZXcgU3RhdGVNb2R1bGUoKS5kZWZhdWx0KHtcbiAqICAgICBzcGhlcmVDb2xvcjogMHhmZjAwMDBcbiAqICAgfSlcbiAqIF0pO1xuICovXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge1xuICBzdGF0aWMgYWN0aW9uR2VuZXJhdGUoaXNFcXVhbCkge1xuICAgIHJldHVybiAoc3RhdGUgPSBbe30sICcnXSwge2tleSwgZGF0YX0pID0+IHtcbiAgICAgIGlmIChpc0VxdWFsKHN0YXRlWzBdW2tleV0sIGRhdGEpKSByZXR1cm4gc3RhdGU7XG5cbiAgICAgIHN0YXRlWzBdW2tleV0gPSBkYXRhO1xuICAgICAgc3RhdGVbMV0gPSBrZXk7XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoZXF1YWxDaGVjayA9IGlzRXF1YWxEZWZhdWx0KSB7XG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgU3RhdGVNb2R1bGUuYWN0aW9uR2VuZXJhdGUoZXF1YWxDaGVjaylcbiAgICApO1xuXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0ge307XG4gICAgdGhpcy5jdXJyZW50Q29uZmlnID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMucHJldkNvbmZpZyA9ICdkZWZhdWx0JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRlZmF1bHRcbiAgICogQGRlc2NyaXB0aW9uIEFkZCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIENvbmZpZ3VyYXRpb24gc2V0dXBcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBuZXcgV0hTLlN0YXRlTW9kdWxlKCkuZGVmYXVsdCh7XG4gICAqICAgc3BoZXJlQ29sb3I6IFVUSUxTLiRjb2xvcnMubWVzaCxcbiAgICogICBwbGFuZUNvbG9yOiAweDQ0N0Y4QlxuICAgKiB9KVxuICAgKi9cbiAgZGVmYXVsdChkYXRhKSB7XG4gICAgdGhpcy5jb25maWcoe2RlZmF1bHQ6IGRhdGF9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldEVxdWFsQ2hlY2tcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgYW4gZXF1YWxDaGVjayBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBDb25maWd1cmF0aW9uIHNldHVwXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICovXG4gIHNldEVxdWFsQ2hlY2soZnVuYykge1xuICAgIHRoaXMuc3RvcmUucmVwbGFjZVJlZHVjZXIoXG4gICAgICBTdGF0ZU1vZHVsZS5hY3Rpb25HZW5lcmF0ZShmdW5jKVxuICAgICk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnc3RhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvbmZpZ1xuICAgKiBAZGVzY3JpcHRpb24gTG9hZCBjb25maWd1cmF0aW9ucyBmcm9tIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3MgQ29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+IEFkZGluZyBgZ3JlZW5gIGNvbmZpZ3VyYXRpb248L2NhcHRpb24+XG4gICAqIHN0YXRlLmNvbmZpZyh7XG4gICAqICAgZ3JlZW46IHtcbiAgICogICAgIHNwaGVyZUNvbG9yOiAweDAwZmYwMCxcbiAgICogICAgIHBsYW5lQ29sb3I6IDB4MDBmZjAwXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICovXG4gIGNvbmZpZyhjb25maWdzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlncykge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGtleSA9PT0gJ2RlZmF1bHQnXG4gICAgICAgICAgPyBjb25maWdzW2tleV1cbiAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlndXJhdGlvbi5kZWZhdWx0LCBjb25maWdzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTG9hZCB1cGRhdGVzIGZyb20gb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlcyBVcGRhdGVzIGRhdGFcbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj4gVXBkYXRlIGNhbGxiYWNrIGZvciBgc3BoZXJlQ29sb3JgPC9jYXB0aW9uPlxuICAgKiBzdGF0ZS51cGRhdGUoe1xuICAgKiAgIHNwaGVyZUNvbG9yOiBjb2xvciA9PiBzcGhlcmUubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KGNvbG9yKVxuICAgKiB9KTtcbiAgICovXG4gIHVwZGF0ZSh1cGRhdGVzID0ge30pIHtcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBbZGF0YSwgY2hhbmdlZEtleV0gPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHVwZGF0ZXNbY2hhbmdlZEtleV07XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZGF0YVtjaGFuZ2VkS2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b1xuICAgKiBAZGVzY3JpcHRpb24gU3dpdGNoIHRvIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIENvbmZpZ3VyYXRpb24gbmFtZS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj4gQ2hhbmdlcyBjb25maWd1cmF0aW9uIHRvIGBncmVlbmA8L2NhcHRpb24+XG4gICAqIHN0YXRlLnRvKCdncmVlbicpO1xuICAgKi9cbiAgdG8oY29uZmlnTmFtZSkge1xuICAgIHRoaXMucHJldkNvbmZpZyA9IHRoaXMuY3VycmVudENvbmZpZztcbiAgICB0aGlzLmN1cnJlbnRDb25maWcgPSBjb25maWdOYW1lO1xuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uW2NvbmZpZ05hbWVdXG4gICAgICA/IHRoaXMuY29uZmlndXJhdGlvbltjb25maWdOYW1lXVxuICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uZGVmYXVsdDtcblxuICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRcbiAgICogQGRlc2NyaXB0aW9uIFNldCBjdXJyZW50IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIENvbmZpZ3VyYXRpb24gcGFyYW1ldGVycy5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBzdGF0ZS5zZXQoe1xuICAgKiAgIHNwaGVyZUNvbG9yOiAweDAwZmYwMFxuICAgKiB9KTtcbiAgICovXG4gIHNldChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSlcbiAgICAgIGlmIChrZXkpIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdBREQnLCBrZXksIGRhdGE6IGRhdGFba2V5XX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0XG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gZGF0YSBvZiBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgUGFyYW1ldGVyIG5hbWUuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICogQGV4YW1wbGVcbiAgICogc3RhdGUuZ2V0KCdzcGhlcmVDb2xvcicpOyAvLyAweDAwZmYwMFxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKClbMF1ba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHByZXZcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybiBgdHJ1ZVZhbGAgaWYgYGNvbmZpZ2AgbWF0Y2ggcHJldmlvdXMgY29uZmlndXJhdGlvbiwgaW4gb3RoZXIgY2FzZSAtIHJldHVybiBgZmFsc2VWYWxgLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnIENvbmZpZ3VyYXRpb24gbmFtZS5cbiAgICogQHBhcmFtIHtBbnl9IHRydWVWYWwgVmFsdWUgcmV0dXJuZWQgaWYgY29uZGl0aW9uIGlzIHRydXRoeS5cbiAgICogQHBhcmFtIHtBbnl9IGZhbHNlVmFsIENWYWx1ZSByZXR1cm5lZCBpZiBjb25kaXRpb24gaXMgZmFsc3kuXG4gICAqIEBtZW1iZXJvZiBtb2R1bGU6bW9kdWxlcy9hcHAuU3RhdGVNb2R1bGVcbiAgICovXG4gIHByZXYoY29uZmlnLCB0cnVlVmFsLCBmYWxzZVZhbCkge1xuICAgIHJldHVybiB0aGlzLnByZXZDb25maWcgPT09IGNvbmZpZyA/IHRydWVWYWwgOiBmYWxzZVZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGN1cnJlbnRcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybiBgdHJ1ZVZhbGAgaWYgYGNvbmZpZ2AgbWF0Y2ggY3VycmVudCBjb25maWd1cmF0aW9uLCBpbiBvdGhlciBjYXNlIC0gcmV0dXJuIGBmYWxzZVZhbGAuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcgQ29uZmlndXJhdGlvbiBuYW1lLlxuICAgKiBAcGFyYW0ge0FueX0gdHJ1ZVZhbCBWYWx1ZSByZXR1cm5lZCBpZiBjb25kaXRpb24gaXMgdHJ1dGh5LlxuICAgKiBAcGFyYW0ge0FueX0gZmFsc2VWYWwgQ1ZhbHVlIHJldHVybmVkIGlmIGNvbmRpdGlvbiBpcyBmYWxzeS5cbiAgICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL2FwcC5TdGF0ZU1vZHVsZVxuICAgKi9cbiAgY3VycmVudChjb25maWcsIHRydWVWYWwsIGZhbHNlVmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvbmZpZyA9PT0gY29uZmlnID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBNT1VTRSxcbiAgUXVhdGVybmlvbixcbiAgU3BoZXJpY2FsLFxuICBWZWN0b3IyLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBFdmVudERpc3BhdGNoZXIsXG4gIFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5leHBvcnQgY2xhc3MgVGhyZWVPcmJpdENvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBkb21FbGVtZW50LCBldmVudEhhbmRsZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGRvY3VtZW50IDogZG9tRWxlbWVudDtcbiAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcbiAgICB0aGlzLnRhcmdldCA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuICAgIHRoaXMubWluRGlzdGFuY2UgPSAwO1xuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgIC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG4gICAgdGhpcy5taW5ab29tID0gMDtcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgIC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuICAgIHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgIC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC1JbmZpbml0eTsgLy8gcmFkaWFuc1xuICAgIHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuICAgIC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuICAgIC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG4gICAgdGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuICAgIC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuICAgIHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG4gICAgdGhpcy56b29tU3BlZWQgPSAxLjA7XG5cbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuICAgIHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcbiAgICB0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuICAgIHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuICAgIC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuICAgIHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG4gICAgdGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuICAgIC8vIFRoZSBmb3VyIGFycm93IGtleXNcbiAgICB0aGlzLmtleXMgPSB7TEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwfTtcblxuICAgIC8vIE1vdXNlIGJ1dHRvbnNcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHtPUkJJVDogTU9VU0UuTEVGVCwgWk9PTTogTU9VU0UuTUlERExFLCBQQU46IE1PVVNFLlJJR0hUfTtcblxuICAgIC8vIGZvciByZXNldFxuICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG4gICAgdGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG4gICAgLy9cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8vXG5cbiAgICB0aGlzLmdldFBvbGFyQW5nbGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gc3BoZXJpY2FsLnBoaTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBemltdXRoYWxBbmdsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBzcGhlcmljYWwudGhldGE7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRhcmdldC5jb3B5KHRoaXMudGFyZ2V0MCk7XG4gICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24wKTtcbiAgICAgIHRoaXMub2JqZWN0Lnpvb20gPSB0aGlzLnpvb20wO1xuXG4gICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG4gICAgfTtcblxuICAgIC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcbiAgICAgIGNvbnN0IHF1YXQgPSBuZXcgUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhvYmplY3QudXAsIG5ldyBWZWN0b3IzKDAsIDEsIDApKTtcbiAgICAgIGNvbnN0IHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgIGNvbnN0IGxhc3RRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cbiAgICAgICAgb2Zmc2V0LmNvcHkocG9zaXRpb24pLnN1Yih0aGlzLnRhcmdldCk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24ocXVhdCk7XG5cbiAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuICAgICAgICBzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMob2Zmc2V0KTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FKVxuICAgICAgICAgIHJvdGF0ZUxlZnQoZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSk7XG5cbiAgICAgICAgc3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuICAgICAgICBzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuICAgICAgICAvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgIHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KHRoaXMubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbih0aGlzLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhKSk7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgc3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4odGhpcy5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpKSk7XG5cbiAgICAgICAgc3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cbiAgICAgICAgc3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICBzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgodGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4odGhpcy5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cykpO1xuXG4gICAgICAgIC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuICAgICAgICB0aGlzLnRhcmdldC5hZGQocGFuT2Zmc2V0KTtcblxuICAgICAgICBvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbChzcGhlcmljYWwpO1xuXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXRJbnZlcnNlKTtcblxuICAgICAgICBwb3NpdGlvbi5jb3B5KHRoaXMudGFyZ2V0KS5hZGQob2Zmc2V0KTtcblxuICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQodGhpcy50YXJnZXQpO1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZURhbXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICBzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoMSAtIHRoaXMuZGFtcGluZ0ZhY3Rvcik7XG4gICAgICAgICAgc3BoZXJpY2FsRGVsdGEucGhpICo9ICgxIC0gdGhpcy5kYW1waW5nRmFjdG9yKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgc3BoZXJpY2FsRGVsdGEuc2V0KDAsIDAsIDApO1xuXG4gICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgcGFuT2Zmc2V0LnNldCgwLCAwLCAwKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuICAgICAgICAvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcbiAgICAgICAgLy8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cbiAgICAgICAgaWYgKHpvb21DaGFuZ2VkXG4gICAgICAgICAgfHwgbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKHRoaXMub2JqZWN0LnBvc2l0aW9uKSA+IEVQU1xuICAgICAgICAgIHx8IDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uKSkgPiBFUFMpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkodGhpcy5vYmplY3QucG9zaXRpb24pO1xuICAgICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkodGhpcy5vYmplY3QucXVhdGVybmlvbik7XG4gICAgICAgICAgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UpO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xuXG4gICAgICAvLyB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBpbnRlcm5hbHNcbiAgICAvL1xuXG4gICAgY29uc3QgY2hhbmdlRXZlbnQgPSB7dHlwZTogJ2NoYW5nZSd9O1xuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSB7dHlwZTogJ3N0YXJ0J307XG4gICAgY29uc3QgZW5kRXZlbnQgPSB7dHlwZTogJ2VuZCd9O1xuXG4gICAgY29uc3QgU1RBVEUgPSB7Tk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1fTtcblxuICAgIGxldCBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICBjb25zdCBFUFMgPSAwLjAwMDAwMTtcblxuICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG4gICAgY29uc3Qgc3BoZXJpY2FsID0gbmV3IFNwaGVyaWNhbCgpO1xuICAgIGNvbnN0IHNwaGVyaWNhbERlbHRhID0gbmV3IFNwaGVyaWNhbCgpO1xuXG4gICAgbGV0IHNjYWxlID0gMTtcbiAgICBjb25zdCBwYW5PZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuICAgIGxldCB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IHJvdGF0ZUVuZCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3Qgcm90YXRlRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgcGFuU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IHBhbkVuZCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3QgcGFuRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgZG9sbHlTdGFydCA9IG5ldyBWZWN0b3IyKCk7XG4gICAgY29uc3QgZG9sbHlFbmQgPSBuZXcgVmVjdG9yMigpO1xuICAgIGNvbnN0IGRvbGx5RGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG4gICAgY29uc3QgZ2V0QXV0b1JvdGF0aW9uQW5nbGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogdGhpcy5hdXRvUm90YXRlU3BlZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFpvb21TY2FsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLnBvdygwLjk1LCB0aGlzLnpvb21TcGVlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvdGF0ZUxlZnQgPSBhbmdsZSA9PiB7XG4gICAgICBzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm90YXRlVXAgPSBhbmdsZSA9PiB7XG4gICAgICBzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhbkxlZnQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgIHJldHVybiAoZGlzdGFuY2UsIG9iamVjdE1hdHJpeCkgPT4ge1xuICAgICAgICB2LnNldEZyb21NYXRyaXhDb2x1bW4ob2JqZWN0TWF0cml4LCAwKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuICAgICAgICB2Lm11bHRpcGx5U2NhbGFyKC1kaXN0YW5jZSk7XG4gICAgICAgIHBhbk9mZnNldC5hZGQodik7XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBwYW5VcCA9ICgoKSA9PiB7XG4gICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgcmV0dXJuIChkaXN0YW5jZSwgb2JqZWN0TWF0cml4KSA9PiB7XG4gICAgICAgIHYuc2V0RnJvbU1hdHJpeENvbHVtbihvYmplY3RNYXRyaXgsIDEpOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG4gICAgICAgIHYubXVsdGlwbHlTY2FsYXIoZGlzdGFuY2UpO1xuICAgICAgICBwYW5PZmZzZXQuYWRkKHYpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG4gICAgY29uc3QgcGFuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgIHJldHVybiAoZGVsdGFYLCBkZWx0YVkpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyB0aGlzLmRvbUVsZW1lbnQuYm9keSA6IHRoaXMuZG9tRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBQZXJzcGVjdGl2ZUNhbWVyYSkge1xuICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcbiAgICAgICAgICBvZmZzZXQuY29weShwb3NpdGlvbikuc3ViKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICBsZXQgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cbiAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cbiAgICAgICAgICB0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbigodGhpcy5vYmplY3QuZm92IC8gMikgKiBNYXRoLlBJIC8gMTgwLjApO1xuXG4gICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgIHBhbkxlZnQoMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgICAgcGFuVXAoMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3QgaW5zdGFuY2VvZiBPcnRob2dyYXBoaWNDYW1lcmEpIHtcbiAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcbiAgICAgICAgICBwYW5MZWZ0KGRlbHRhWCAqICh0aGlzLm9iamVjdC5yaWdodCAtIHRoaXMub2JqZWN0LmxlZnQpIC8gdGhpcy5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgICAgcGFuVXAoZGVsdGFZICogKHRoaXMub2JqZWN0LnRvcCAtIHRoaXMub2JqZWN0LmJvdHRvbSkgLyB0aGlzLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHRoaXMub2JqZWN0Lm1hdHJpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuICAgICAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9sc01vZHVsZS5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicpO1xuICAgICAgICAgIHRoaXMuZW5hYmxlUGFuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGRvbGx5SW4gPSBkb2xseVNjYWxlID0+IHtcbiAgICAgIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIFBlcnNwZWN0aXZlQ2FtZXJhKVxuICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICBlbHNlIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIE9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCBNYXRoLm1pbih0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlKSk7XG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgem9vbUNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzTW9kdWxlLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuICAgICAgICB0aGlzLmVuYWJsZVpvb20gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZG9sbHlPdXQgPSBkb2xseVNjYWxlID0+IHtcbiAgICAgIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIFBlcnNwZWN0aXZlQ2FtZXJhKVxuICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG4gICAgICBlbHNlIGlmICh0aGlzLm9iamVjdCBpbnN0YW5jZW9mIE9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gTWF0aC5tYXgodGhpcy5taW5ab29tLCBNYXRoLm1pbih0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlKSk7XG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgem9vbUNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzTW9kdWxlLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuICAgICAgICB0aGlzLmVuYWJsZVpvb20gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuICAgIC8vXG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25Sb3RhdGUgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuICAgICAgcm90YXRlU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25Eb2xseSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cbiAgICAgIGRvbGx5U3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd25QYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuICAgICAgcGFuU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmVSb3RhdGUgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuICAgICAgcm90YXRlRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMocm90YXRlRW5kLCByb3RhdGVTdGFydCk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gdGhpcy5kb21FbGVtZW50LmJvZHkgOiB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgIHJvdGF0ZUxlZnQoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHRoaXMucm90YXRlU3BlZWQpO1xuXG4gICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgIHJvdGF0ZVVwKDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogdGhpcy5yb3RhdGVTcGVlZCk7XG5cbiAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkocm90YXRlRW5kKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlRG9sbHkgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG4gICAgICBkb2xseUVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyhkb2xseUVuZCwgZG9sbHlTdGFydCk7XG5cbiAgICAgIGlmIChkb2xseURlbHRhLnkgPiAwKVxuICAgICAgICBkb2xseUluKGdldFpvb21TY2FsZSgpKTtcblxuICAgICAgZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMClcbiAgICAgICAgZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xuXG4gICAgICBkb2xseVN0YXJ0LmNvcHkoZG9sbHlFbmQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmVQYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuICAgICAgcGFuRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcblxuICAgICAgcGFuKHBhbkRlbHRhLngsIHBhbkRlbHRhLnkpO1xuXG4gICAgICBwYW5TdGFydC5jb3B5KHBhbkVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlV2hlZWwgPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cbiAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKVxuICAgICAgICBkb2xseU91dChnZXRab29tU2NhbGUoKSk7XG5cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA+IDApXG4gICAgICAgIGRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuVVA6XG4gICAgICAgICAgcGFuKDAsIHRoaXMua2V5UGFuU3BlZWQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSB0aGlzLmtleXMuQk9UVE9NOlxuICAgICAgICAgIHBhbigwLCAtdGhpcy5rZXlQYW5TcGVlZCk7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHRoaXMua2V5cy5MRUZUOlxuICAgICAgICAgIHBhbih0aGlzLmtleVBhblNwZWVkLCAwKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLlJJR0hUOlxuICAgICAgICAgIHBhbigtdGhpcy5rZXlQYW5TcGVlZCwgMCk7XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG4gICAgICByb3RhdGVTdGFydC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnREb2xseSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG4gICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50b3VjaGVzWzFdLnBhZ2VYO1xuICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWTtcblxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICBkb2xseVN0YXJ0LnNldCgwLCBkaXN0YW5jZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnRQYW4gPSBldmVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cbiAgICAgIHBhblN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlUm90YXRlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cbiAgICAgIHJvdGF0ZUVuZC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQpO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHRoaXMuZG9tRWxlbWVudC5ib2R5IDogdGhpcy5kb21FbGVtZW50O1xuXG4gICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICByb3RhdGVMZWZ0KDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnJvdGF0ZVNwZWVkKTtcblxuICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICByb3RhdGVVcCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHRoaXMucm90YXRlU3BlZWQpO1xuXG4gICAgICByb3RhdGVTdGFydC5jb3B5KHJvdGF0ZUVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZURvbGx5ID0gZXZlbnQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWDtcbiAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVk7XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgZG9sbHlFbmQuc2V0KDAsIGRpc3RhbmNlKTtcblxuICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKGRvbGx5RW5kLCBkb2xseVN0YXJ0KTtcblxuICAgICAgaWYgKGRvbGx5RGVsdGEueSA+IDApXG4gICAgICAgIGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcblxuICAgICAgZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMClcbiAgICAgICAgZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XG5cbiAgICAgIGRvbGx5U3RhcnQuY29weShkb2xseUVuZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZVBhbiA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG4gICAgICBwYW5FbmQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xuXG4gICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKHBhbkVuZCwgcGFuU3RhcnQpO1xuXG4gICAgICBwYW4ocGFuRGVsdGEueCwgcGFuRGVsdGEueSk7XG5cbiAgICAgIHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcbiAgICAvL1xuXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSB0aGlzLm1vdXNlQnV0dG9ucy5PUkJJVCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgaGFuZGxlTW91c2VEb3duUm90YXRlKGV2ZW50KTtcblxuICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSB0aGlzLm1vdXNlQnV0dG9ucy5aT09NKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgaGFuZGxlTW91c2VEb3duRG9sbHkoZXZlbnQpO1xuXG4gICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gdGhpcy5tb3VzZUJ1dHRvbnMuUEFOKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZURvd25QYW4oZXZlbnQpO1xuXG4gICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLk5PTkUpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU1RBVEUuRE9MTFkpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBoYW5kbGVNb3VzZU1vdmVEb2xseShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBTVEFURS5QQU4pIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgIGhhbmRsZU1vdXNlTW92ZVBhbihldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGhhbmRsZU1vdXNlVXAoZXZlbnQpO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xuXG4gICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VXaGVlbCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlIHx8IHRoaXMuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUpKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaGFuZGxlTW91c2VXaGVlbChldmVudCk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbktleURvd24gPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSB8fCB0aGlzLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHRoaXMuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Ub3VjaFN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgICBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKGV2ZW50KTtcblxuICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaGFuZGxlVG91Y2hTdGFydERvbGx5KGV2ZW50KTtcblxuICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgIGhhbmRsZVRvdWNoU3RhcnRQYW4oZXZlbnQpO1xuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSlcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblRvdWNoTW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgICAgaWYgKHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cbiAgICAgICAgICBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoZXZlbnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cbiAgICAgICAgICBoYW5kbGVUb3VjaE1vdmVEb2xseShldmVudCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTikgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuICAgICAgICAgIGhhbmRsZVRvdWNoTW92ZVBhbihldmVudCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVG91Y2hFbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICBoYW5kbGVUb3VjaEVuZChldmVudCk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XG5cbiAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Db250ZXh0TWVudSA9IGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIC8vXG5cbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSk7XG5cbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlKTtcbiAgICB0aGlzLmV2ZW50SGFuZGxlci5vbignd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIHRoaXMuZXZlbnRIYW5kbGVyLm9uKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5ldmVudEhhbmRsZXIub24oJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcblxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBjZW50ZXIoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcpO1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfVxuXG4gIGdldCBub1pvb20oKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVab29tO1xuICB9XG5cbiAgc2V0IG5vWm9vbSh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZVpvb20gPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgbm9Sb3RhdGUoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nKTtcbiAgICByZXR1cm4gIXRoaXMuZW5hYmxlUm90YXRlO1xuICB9XG5cbiAgc2V0IG5vUm90YXRlKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZVJvdGF0ZSA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBub1BhbigpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVQYW47XG4gIH1cblxuICBzZXQgbm9QYW4odmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZW5hYmxlUGFuID0gIXZhbHVlO1xuICB9XG5cbiAgZ2V0IG5vS2V5cygpIHtcbiAgICBjb25zb2xlLndhcm4oJ09yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuICF0aGlzLmVuYWJsZUtleXM7XG4gIH1cblxuICBzZXQgbm9LZXlzKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZW5hYmxlS2V5cyA9ICF2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdGF0aWNNb3ZpbmcoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVEYW1waW5nO1xuICB9XG5cbiAgc2V0IHN0YXRpY01vdmluZyh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nKTtcbiAgICB0aGlzLmVuYWJsZURhbXBpbmcgPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgZHluYW1pY0RhbXBpbmdGYWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdPcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcbiAgfVxuXG4gIHNldCBkeW5hbWljRGFtcGluZ0ZhY3Rvcih2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybignT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicpO1xuICAgIHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQge1ZlY3RvcjN9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gJy4uL0NvbnRyb2xzTW9kdWxlJztcblxuaW1wb3J0IHtUaHJlZU9yYml0Q29udHJvbHN9IGZyb20gJy4vbGliL1RocmVlT3JiaXRDb250cm9scyc7XG5cbmV4cG9ydCBjbGFzcyBPcmJpdENvbnRyb2xzTW9kdWxlIGV4dGVuZHMgQ29udHJvbHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZm9sbG93OiBmYWxzZSxcbiAgICAgIG9iamVjdDogbnVsbCxcbiAgICAgIHRhcmdldDogbmV3IFZlY3RvcjMoMCwgMCwgMClcbiAgICB9LCBwYXJhbXMpO1xuICB9XG5cbiAgbWFuYWdlcihtYW5hZ2VyKSB7XG4gICAgc3VwZXIubWFuYWdlcihtYW5hZ2VyKTtcblxuICAgIGNvbnN0IHtvYmplY3Q6IG9iaiwgZm9sbG93LCB0YXJnZXR9ID0gdGhpcy5wYXJhbXM7XG4gICAgY29uc3Qgb2JqZWN0ID0gb2JqID8gb2JqLm5hdGl2ZSA6IG1hbmFnZXIuZ2V0KCdjYW1lcmEnKS5uYXRpdmU7XG5cbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBUaHJlZU9yYml0Q29udHJvbHMoXG4gICAgICBvYmplY3QsXG4gICAgICBtYW5hZ2VyLmdldCgnZWxlbWVudCcpLFxuICAgICAgbWFuYWdlci5oYW5kbGVyXG4gICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZVByb2Nlc3NvciA9IGZvbGxvdyA/IGMgPT4ge1xuICAgICAgY29udHJvbHMudXBkYXRlKGMuZ2V0RGVsdGEoKSk7XG4gICAgICBjb250cm9scy50YXJnZXQuY29weSh0YXJnZXQpO1xuICAgIH0gOiBjID0+IHtcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZShjLmdldERlbHRhKCkpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldENvbnRyb2xzKGNvbnRyb2xzKTtcbiAgICB0aGlzLnNldFVwZGF0ZSh1cGRhdGVQcm9jZXNzb3IpO1xuXG4gICAgbWFuYWdlci51cGRhdGUoe1xuICAgICAgY2FtZXJhOiBjYW1lcmEgPT4ge1xuICAgICAgICBpZiAob2JqKSByZXR1cm47XG4gICAgICAgIGNvbnRyb2xzLm9iamVjdCA9IGNhbWVyYS5uYXRpdmU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250cm9scy50YXJnZXQuY29weSh0YXJnZXQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBtb2R1bGVzL2FwcC9jb250cm9scyAqL1xuZXhwb3J0ICogZnJvbSAnLi9PcmJpdENvbnRyb2xzTW9kdWxlJztcbiIsIi8qKiBAbW9kdWxlIG1vZHVsZXMvYXBwICovXG5leHBvcnQgKiBmcm9tICcuL0VsZW1lbnRNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9SZW5kZXJpbmdNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9TY2VuZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1Jlc2l6ZU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1Bvc3RQcm9jZXNzb3JNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9WaXJ0dWFsTW91c2VNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9FdmVudHNQYXRjaE1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL0NvbnRyb2xzTW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vRm9nTW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vU3RhdGVNb2R1bGUnO1xuXG4vLyBjb250cm9sc1xuZXhwb3J0ICogZnJvbSAnLi9jb250cm9scy9pbmRleCc7XG4iLCIvKipcbiAqIEBjbGFzcyBEeW5hbWljR2VvbWV0cnlNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL21lc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXthdHRyaWJ1dGVzOiBmYWxzZX1dIC0gcGFyYW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtwYXRjaEV2ZW50cz10cnVlXVxuICogQG1lbWJlcm9mIG1vZHVsZTptb2R1bGVzL21lc2hcbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNHZW9tZXRyeU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSwgcGFyYW1zKTtcbiAgfVxuXG4gIGludGVncmF0ZShzZWxmKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc2VsZi5wYXJhbXM7XG5cbiAgICB0aGlzLmdfID0gZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XG4gICAgICBpZiAodGhpcy5idWlsZEdlb21ldHJ5KSB7XG4gICAgICAgIHRoaXMubmF0aXZlLmdlb21ldHJ5ID0gdGhpcy5idWlsZEdlb21ldHJ5KFxuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1zKHtnZW9tZXRyeTogcGFyYW1zfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy5hdHRyaWJ1dGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBhcmFtcy5nZW9tZXRyeSkge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGBnXyR7a2V5fWAsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlLmdlb21ldHJ5LnBhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYXRpdmUuZ2VvbWV0cnkgPSB0aGlzLmJ1aWxkR2VvbWV0cnkodGhpcy51cGRhdGVQYXJhbXMoe2dlb21ldHJ5OiB7W2tleV06IHZhbHVlfX0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlcGVhdFdyYXBwaW5nLFxuICBVVk1hcHBpbmcsXG4gIE5lYXJlc3RGaWx0ZXIsXG4gIExpbmVhck1pcE1hcExpbmVhckZpbHRlcixcbiAgVGV4dHVyZUxvYWRlcixcbiAgVmVjdG9yMlxufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XG5cbi8qKlxuICogQGNsYXNzIFRleHR1cmVNb2R1bGVcbiAqIEBjYXRlZ29yeSBtb2R1bGVzL21lc2hcbiAqIEBkZXNjcmlwdGlvbiBBIFRleHR1cmVNb2R1bGUgY2FuIGJlIGFwcGxpZWQgdG8gYW55IE1lc2ggb3IgTW9kZWwuXG4gKiBAcGFyYW0ge0FycmF5fSBbdGV4dHVyZXNdIC0gYXJyYXkgb2YgdGV4dHVyZSBvYmplY3RzXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRpbmcgYW4gaW5zdGFuY2UuIHVybCB0YWtlcyBhIHBhdGgsIG9yIGEgZGF0YSBvYmplY3QuPC9jYXB0aW9uPlxuICogdmFyIHdvb2RUZXh0dXJlID0gbmV3IFRleHR1cmVNb2R1bGUoe1xuICogICB1cmw6IGAke3Byb2Nlc3MuYXNzZXRzUGF0aH0vdGV4dHVyZXMvd29vZC5qcGdgXG4gKiB9KTtcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1vcmUgY29tcHJlaGVuc2l2ZSBleGFtcGxlLCB3b29kIHRleHR1cmUgYXBwbGllZCB0byBhIEJveC48L2NhcHRpb24+XG4gKiBuZXcgQm94KHtcbiAqICAgZ2VvbWV0cnk6IHtcbiAqICAgICB3aWR0aDogMixcbiAqICAgICBoZWlnaHQ6IDIsXG4gKiAgICAgZGVwdGg6IDJcbiAqICAgfSxcbiAqICAgbW9kdWxlczogW1xuICogICAgIG5ldyBUZXh0dXJlTW9kdWxlKHtcbiAqICAgICAgIHVybDogYHBhdGgvdG8vdGV4dHVyZS5qcGdgLFxuICogICAgICAgcmVwZWF0OiBuZXcgVEhSRUUuVmVjdG9yMigxLCAxKSAvLyBvcHRpb25hbFxuICogICAgIH0pXG4gKiAgIF0sXG4gKiAgIG1hdGVyaWFsOiBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICogICAgIGNvbG9yOiAweGZmZmZmZlxuICogICB9KSxcbiAqICAgcG9zaXRpb246IFs1MCwgNjAsIDcwXVxuICogfSkuYWRkVG8oYXBwKTtcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHR1cmVNb2R1bGUge1xuICBzdGF0aWMgbG9hZCh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFRleHR1cmVNb2R1bGUoe3VybH0pLnRleHR1cmVzWzBdWzFdO1xuICB9XG5cbiAgdGV4dHVyZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvciguLi50ZXh0dXJlcykge1xuICAgIHRleHR1cmVzLmZvckVhY2goKHtcbiAgICAgIHVybCxcbiAgICAgIHR5cGUgPSAnbWFwJyxcbiAgICAgIG9mZnNldCA9IG5ldyBWZWN0b3IyKDAsIDApLFxuICAgICAgcmVwZWF0ID0gbmV3IFZlY3RvcjIoMSwgMSksXG4gICAgICB3cmFwID0gUmVwZWF0V3JhcHBpbmcsXG4gICAgICBtYXBwaW5nID0gVVZNYXBwaW5nLFxuICAgICAgZml4ID0gdGV4ID0+IHRleFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZCh1cmwpO1xuXG4gICAgICBpZiAod3JhcC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRleHR1cmUud3JhcFMgPSB3cmFwWzBdO1xuICAgICAgICB0ZXh0dXJlLndyYXBUID0gd3JhcFsxXTtcbiAgICAgIH0gZWxzZVxuICAgICAgICB0ZXh0dXJlLndyYXBTID0gdGV4dHVyZS53cmFwVCA9IHdyYXA7XG5cbiAgICAgIHRleHR1cmUubWFwcGluZyA9IG1hcHBpbmc7XG5cbiAgICAgIHRleHR1cmUub2Zmc2V0LmNvcHkob2Zmc2V0KTtcbiAgICAgIHRleHR1cmUucmVwZWF0LmNvcHkocmVwZWF0KTtcblxuICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBOZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBMaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXI7XG5cbiAgICAgIHRoaXMudGV4dHVyZXMucHVzaChbdHlwZSwgZml4KHRleHR1cmUpXSk7XG4gICAgfSk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgbWF0ZXJpYWwobWF0ZXJpYWwsIHNlbGYpIHtcbiAgICAgIHNlbGYudGV4dHVyZXMuZm9yRWFjaCh0ZXh0dXJlID0+IHtcbiAgICAgICAgbWF0ZXJpYWxbdGV4dHVyZVswXV0gPSB0ZXh0dXJlWzFdO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXRlcmlhbDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFuaW1hdGlvbk1peGVyLFxuICBBbmltYXRpb25DbGlwLFxuICBDbG9ja1xufSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7TG9vcH0gZnJvbSAnLi4vLi4vY29yZS9Mb29wJztcblxuLyoqXG4gKiBAY2xhc3MgQW5pbWF0aW9uTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlcy9tZXNoXG4gKiBAZGVzY3JpcHRpb24gQ29udmVuaWVuY2UgbW9kdWxlIHRoYXQgd3JhcHMgdGhlIDxhIGhyZWY9J2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jbWFudWFsL2ludHJvZHVjdGlvbi9BbmltYXRpb24tc3lzdGVtJz50aHJlZS5qcyBhbmltYXRpb24gc3lzdGVtPC9hPlxuICogQHBhcmFtIHtBcHB9IGFwcCAtIHRoZSBhcHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzRGVmZXJyZWQ9ZmFsc2VdIC0gc2V0IHRvIHRydWUgaWYgYW5pbWF0aW9uIHNob3VsZCBub3Qgc3RhcnQgYXV0b21hdGljYWxseVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e3NwZWVkOiAxfV0gLSB0aGUgcGFyYW1zXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaFxuICogQGV4YW1wbGUgPGNhcHRpb24+Q3JlYXRlIGFuaW1hdGlvbiBtb2R1bGUgYW5kIHBsYXkgYSBnaXZlbiBjbGlwIG9mIGFuIGltcG9ydGVkIG1vZGVsPC9jYXB0aW9uPlxuICogY29uc3QgYW5pbWF0aW9uTW9kdWxlID0gbmV3IEFuaW1hdGlvbk1vZHVsZShhcHAsIGZhbHNlLCB7XG4gKiAgIHNwZWVkOiAxLjIgLy8gc3BlZWQgdXAgYW5pbWF0aW9uIGJ5IDIwJVxuICogfSk7XG4gKlxuICogbmV3IEltcG9ydGVyKHtcbiAqICAgcGFyc2VyKGdlb21ldHJ5LCBtYXRlcmlhbHMpIHtcbiAqICAgICAvLyBPdmVycmlkZSBwYXJzZSB0byBnZW5lcmF0ZSBhIHNraW5uZWRNZXNoLCBuZWVkZWQgZm9yIHNraW5uZWQgbW9kZWxzXG4gKiAgICAgcmV0dXJuIG5ldyBUSFJFRS5Ta2lubmVkTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWxzKTtcbiAqICAgfSxcbiAqXG4gKiAgIHVybDogYHBhdGgvdG8vbW9kZWwuanNvbmAsXG4gKiAgIHVzZUN1c3RvbU1hdGVyaWFsOiB0cnVlLFxuICpcbiAqICAgbWF0ZXJpYWw6IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gKiAgICAgc2tpbm5pbmc6IHRydWVcbiAqICAgfSksXG4gKlxuICogICBtb2R1bGVzOiBbYW5pbWF0aW9uTW9kdWxlXVxuICogfSkuYWRkVG8oYXBwKS50aGVuKCgpID0+IHtcbiAqICAgLy8gYWRkaW5nIG1vZGVsIHRvIGFwcCByZXR1cm5zIGEgcHJvbWlzZSwgc28gcGlwZSB0aGUgZnVuY3Rpb24gdG8ga2ljayBvZmYgdGhlIGFuaW1hdGlvbiBjbGlwXG4gKiAgIGFuaW1hdGlvbk1vZHVsZS5wbGF5KCdjbGlwTmFtZScpO1xuICogfSk7XG4gKi9cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihhcHAsIGlzRGVmZXJyZWQsIHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNwZWVkOiAxXG4gICAgfSwgcGFyYW1zKTtcbiAgICB0aGlzLmNsb2NrID0gbmV3IENsb2NrKCk7XG5cbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLmlzRGVmZXJyZWQgPSBpc0RlZmVycmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcGxheVxuICAgKiBAaW5zdGFuY2VcbiAgICogQGRlc2NyaXB0aW9uIFBsYXlzIHRoZSBnaXZlbiBjbGlwIG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsaXBOYW1lIC0gdGhlIGNsaXAgdG8gcGxheVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaC5BbmltYXRpb25Nb2R1bGVcbiAgICovXG4gIHBsYXkoY2xpcE5hbWUpIHtcbiAgICBjb25zdCBjbGlwID0gQW5pbWF0aW9uQ2xpcC5maW5kQnlOYW1lKHRoaXMuY2xpcHMsIGNsaXBOYW1lKTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLm1peGVyLmNsaXBBY3Rpb24oY2xpcCk7XG5cbiAgICBhY3Rpb24ucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIHRoZSBtaXhlciAoYmVpbmcgY2FsbGVkIG9uIGZyYW1lIGFuaW1hdGlvbiBsb29wKVxuICAgKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXMvbWVzaC5BbmltYXRpb25Nb2R1bGVcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5taXhlcikgdGhpcy5taXhlci51cGRhdGUodGhpcy5jbG9jay5nZXREZWx0YSgpICogdGhpcy5wYXJhbXMuc3BlZWQpO1xuICB9XG5cbiAgaW50ZWdyYXRlKHNlbGYpIHtcbiAgICBzZWxmLmxvb3AgPSBuZXcgTG9vcCgoKSA9PiB7XG4gICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFzZWxmLmlzRGVmZXJyZWQpIHNlbGYubG9vcC5zdGFydChzZWxmLmFwcCk7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLmRlZmluZSgnYW5pbWF0aW9uJyk7XG4gIH1cblxuICBicmlkZ2UgPSB7XG4gICAgbWVzaChtZXNoLCBzZWxmKSB7XG4gICAgICBtZXNoLmdlb21ldHJ5LnNrZWxldG9uID0gbWVzaC5za2VsZXRvbjtcblxuICAgICAgc2VsZi5taXhlciA9IG5ldyBBbmltYXRpb25NaXhlcihtZXNoLmdlb21ldHJ5KTtcbiAgICAgIHNlbGYuY2xpcHMgPSBtZXNoLmdlb21ldHJ5LmFuaW1hdGlvbnM7XG5cbiAgICAgIHJldHVybiBtZXNoO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgbW9kdWxlcy9tZXNoICovXG5leHBvcnQgKiBmcm9tICcuL0R5bmFtaWNHZW9tZXRyeU1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL1RleHR1cmVNb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9BbmltYXRpb25Nb2R1bGUnO1xuIiwiLyoqXG4gKiBAY2xhc3MgRGVmaW5lTW9kdWxlXG4gKiBAY2F0ZWdvcnkgbW9kdWxlc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm1vZHVsZXNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPiBDcmVhdGluZyBhIERlZmluZU1vZHVsZSB3aXRoIFBlcnNwZWN0aXZlQ2FtZXJhIGFzIGNhbWVyYSBtb2R1bGUgYW5kIHBhc3NpbmcgaXQgdG8gQXBwJ3MgbW9kdWxlczwvY2FwdGlvbj5cbiAqIG5ldyBBcHAoW1xuICogICAvLyAuLi5cbiAqICAgbmV3IERlZmluZU1vZHVsZSgnY2FtZXJhJywgbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCkpXG4gKiBdKTtcbiAqL1xuZXhwb3J0IGNsYXNzIERlZmluZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBtYW5hZ2VyKG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyLnNldCh0aGlzLm5hbWUsIHRoaXMuZGF0YSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIG1vZHVsZXMgKi9cblxuZXhwb3J0ICogZnJvbSAnLi9hcHAvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNoL2luZGV4JztcblxuLy8gbW9kdWxlc1xuZXhwb3J0ICogZnJvbSAnLi9EZWZpbmVNb2R1bGUnO1xuIiwiaW1wb3J0IHtJbXBvcnRlcn0gZnJvbSAnLi9jb21wb25lbnRzL21lc2hlcy9JbXBvcnRlcic7XG5pbXBvcnQge1BlcnNwZWN0aXZlQ2FtZXJhfSBmcm9tICcuL2NvbXBvbmVudHMvY2FtZXJhcy9QZXJzcGVjdGl2ZUNhbWVyYSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbCBleHRlbmRzIEltcG9ydGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zLCAuLi5hZGRpdGlvbmFsKSB7XG4gICAgY29uc29sZS53YXJuKCdNb2RlbCBpcyBkZXByZWNhdGVkLiBVc2UgSW1wb3J0ZXIgaW5zdGVhZC4nKTtcblxuICAgIGlmIChwYXJhbXMuZ2VvbWV0cnkpIHtcbiAgICAgIHBhcmFtcy51cmwgPSBwYXJhbXMuZ2VvbWV0cnkucGF0aDtcbiAgICAgIHBhcmFtcy5sb2FkZXIgPSBwYXJhbXMuZ2VvbWV0cnkubG9hZGVyO1xuICAgIH1cblxuICAgIHN1cGVyKHBhcmFtcywgLi4uYWRkaXRpb25hbCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbWVyYU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc29sZS53YXJuKCdDYW1lcmFNb2R1bGUgaXMgZGVwcmVjYXRlZC4gVXNlIERlZmluZU1vZHVsZSBpbnN0ZWFkLicpO1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKHBhcmFtcyk7XG4gIH1cblxuICBpbnRlZ3JhdGUoc2VsZikge1xuICAgIHRoaXMuYWRkKHNlbGYuY2FtZXJhKTtcbiAgfVxuXG4gIG1hbmFnZXIobWFuYWdlcikge1xuICAgIG1hbmFnZXIuc2V0KCdjYW1lcmEnLCB0aGlzLmNhbWVyYSk7XG4gIH1cbn1cbiIsIi8qKlxuICogTmFtZXNwYWNlIGNvbnRhaW5pbmcgYWxsIGNsYXNzZXMgZnJvbSBhbGwgbW9kdWxlcy4gVXNlZCBhcyBnbG9iYWwgaW4gVU1EIHBhdHRlcm4uXG4gKiBAbmFtZXNwYWNlIFdIU1xuICogQGV4YW1wbGUgPGNhcHRpb24+VGhlIHVzZSBvZiBXSFMgbmFtZXNwYWNlLjwvY2FwdGlvbj5cbiAqIG5ldyBXSFMuQXBwKCkgLy8gY29yZVxuICogbmV3IFdIUy5QZXJzcGVjdGl2ZUNhbWVyYSgpIC8vIGNvbXBvbmVudHNcbiAqIG5ldyBXSFMuUmVzaXplTW9kdWxlKCkgLy8gbW9kdWxlc1xuICogV0hTLmV4dGVuZCgpIC8vIHV0aWxzXG4gKi9cblxuXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0cy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2FtZXJhcy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbWVzaGVzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2R1bGVzL2luZGV4JztcblxuLy8gREVQUkVDQVRJT05cbmV4cG9ydCAqIGZyb20gJy4vZGVwcmVjYXRpb24nO1xuIl0sIm5hbWVzIjpbImV4dGVuZCIsIm9iamVjdCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImluc3RydWN0IiwiYXJyYXkiLCJpbnN0QXJyYXkiLCJ0ZW1wT2JqZWN0IiwiaSIsIm1heCIsImxlbmd0aCIsImd1aWRlIiwidHJhbnNmb3JtRGF0YSIsImluc3RydWN0aW9ucyIsImtleSIsInRvQXJyYXkiLCJpbnN0cnVjdGlvbiIsInRlbXBBcnJheSIsIkNvbXBvc2l0aW9uRXJyb3IiLCJjbGFzc0luc3RhbmNlIiwibWVzc2FnZSIsImNvbXBvbmVudCIsInN0YWNrQXJyYXkiLCJzdGFjayIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJFcnJvciIsIkRlcGVuZGVuY3lFcnJvciIsImFjdGl2ZU1vZHVsZSIsImRlcGVuZGVuY3lNb2R1bGUiLCJNYW5hZ2VyRXJyb3IiLCJ3YXJuRGVwcyIsIlJFVklTSU9OIiwiZXJyIiwiTW9kdWxlU3lzdGVtIiwic291cmNlIiwibW9kdWxlcyIsImFwcGx5TW9kdWxlIiwiYXBwbHlCcmlkZ2UiLCJvbkNvcHkiLCJicmlkZ2VNYXAiLCJtb2R1bGUiLCJicmlkZ2UiLCJhcHBseSIsImNiIiwiZnVuYyIsIm1vZHVsZVNjb3BlIiwicHVzaCIsIm1hbmFnZXIiLCJhY3RpdmUiLCJpbnRlZ3JhdGUiLCJiaW5kIiwiZGlzcG9zZU1vZHVsZSIsImluZGV4T2YiLCJkaXNwb3NlIiwiRXZlbnRzIiwiU3ltYm9sIiwib2JqZWN0UHJvdG8iLCJoYXNPd25Qcm9wZXJ0eSIsInN5bVRvU3RyaW5nVGFnIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJyb290IiwicG9ueWZpbGwiLCIkJG9ic2VydmFibGUiLCJNb2R1bGVNYW5hZ2VyIiwiaGFuZGxlciIsImN1cnJlbnRNb2R1bGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkJvb2xlYW4iLCJkZXBzTWFwIiwic3Vic2NyaWJlIiwiY2hhbmdlZEtleSIsImNhbGxiYWNrIiwid2FybiIsInNldCIsIm1vZHVsZUV4ZWN1dG9yIiwidXNlIiwiQ29tcG9uZW50IiwicGFyYW1zIiwiZGVmYXVsdHMiLCJfd2FpdCIsImNoaWxkcmVuIiwiaW50ZWdyYXRlTW9kdWxlcyIsInByb21pc2UiLCJQcm9taXNlIiwiYWxsIiwiaXNEZWZmZXJlZCIsIndhaXQiLCJ0aGVuIiwiY29weSIsImN1c3RvbWl6ZSIsIm5hdGl2ZSIsImNsb25lIiwicGFyZW50IiwicmVzb2x2ZSIsInJlamVjdCIsImRlZmVyIiwiYWRkUHJvbWlzZSIsIm9uQWRkIiwicmVzb2x2ZXIiLCJhZGQiLCJyZW1vdmUiLCJfbWFuYWdlciIsIl9uYXRpdmUiLCJtZXNoIiwiYXR0cmlidXRlcyIsIm1hcHBlcnMiLCJ0YXJnZXQiLCJtYXBwZXIiLCJrIiwibWFwIiwiYXR0cmlidXRlIiwiZGVmaW5lUHJvcGVydHkiLCJwcm90b3R5cGUiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJtaXJyb3IiLCJNZXNoQ29tcG9uZW50IiwiZ2VvbSIsIk1lc2giLCJtYXRlcmlhbCIsImdlb21ldHJ5IiwiY3VzdG9tIiwiYnVpbGQiLCJ3cmFwIiwiYXBwbHlDb21tYW5kIiwicG9zaXRpb24iLCJyb3RhdGlvbiIsInNjYWxlIiwic2hhZG93IiwieCIsInkiLCJ6IiwiY2FzdFNoYWRvdyIsImNhc3QiLCJyZWNlaXZlU2hhZG93IiwicmVjZWl2ZSIsIm9uV3JhcCIsInF1YXRlcm5pb24iLCJkZXN0IiwiTGlnaHRDb21wb25lbnQiLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJiaWFzIiwicmFkaXVzIiwic2hhZG93Q2FtZXJhIiwiY2FtZXJhIiwibmVhciIsImZhciIsImZvdiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIkNhbWVyYUNvbXBvbmVudCIsInN5c3RlbSIsIndpbmRvdyIsImdsb2JhbCIsIkFwcCIsImxvZyIsInZlcnNpb24iLCJzaW11bGF0ZSIsInVwZGF0ZUVuYWJsZWQiLCJsb29wcyIsInJlcXVlc3RBbmltRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwicHJvY2VzcyIsImxsIiwiZSIsImVuYWJsZWQiLCJleGVjdXRlIiwiY2xvY2siLCJsb29wIiwiaW5kZXgiLCJnZXQiLCJMb29wIiwidXNlQ2xvY2siLCJDbG9jayIsIndvcmxkIiwiYWRkTG9vcCIsInN0YXJ0Iiwic3RvcCIsInJlbW92ZUxvb3AiLCJBbWJpZW50TGlnaHQiLCJsaWdodCIsIkFtYmllbnRMaWdodE5hdGl2ZSIsImNvbG9yIiwiaW50ZW5zaXR5IiwiRGlyZWN0aW9uYWxMaWdodCIsIndyYXBTaGFkb3ciLCJEaXJlY3Rpb25hbExpZ2h0TmF0aXZlIiwiSGVtaXNwaGVyZUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0TmF0aXZlIiwic2t5Q29sb3IiLCJncm91bmRDb2xvciIsIlBvaW50TGlnaHQiLCJQb2ludExpZ2h0TmF0aXZlIiwiZGlzdGFuY2UiLCJkZWNheSIsIlNwb3RMaWdodCIsIlNwb3RMaWdodE5hdGl2ZSIsImFuZ2xlIiwiZXhwb25lbnQiLCJNYXRoIiwiUEkiLCJBcmVhTGlnaHQiLCJSZWN0QXJlYUxpZ2h0TmF0aXZlIiwiQ3ViZUNhbWVyYSIsIkN1YmVDYW1lcmFOYXRpdmUiLCJjdWJlUmVzb2x1dGlvbiIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYU5hdGl2ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmFOYXRpdmUiLCJhc3BlY3QiLCJCb3giLCJidWlsZEdlb21ldHJ5IiwiYnVmZmVyIiwiQm94QnVmZmVyR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImRlcHRoIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwiZGVwdGhTZWdtZW50cyIsIkNpcmNsZSIsIkNpcmNsZUJ1ZmZlckdlb21ldHJ5IiwiQ2lyY2xlR2VvbWV0cnkiLCJzZWdtZW50cyIsInRoZXRhU3RhcnQiLCJ0aGV0YUxlbmd0aCIsIkNvbmUiLCJDb25lQnVmZmVyR2VvbWV0cnkiLCJDb25lR2VvbWV0cnkiLCJyYWRpdXNTZWdtZW50cyIsIm9wZW5FbmRlZCIsIkN5bGluZGVyIiwiQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSIsIkN5bGluZGVyR2VvbWV0cnkiLCJyYWRpdXNUb3AiLCJyYWRpdXNCb3R0b20iLCJEb2RlY2FoZWRyb24iLCJEb2RlY2FoZWRyb25CdWZmZXJHZW9tZXRyeSIsIkRvZGVjYWhlZHJvbkdlb21ldHJ5IiwiZGV0YWlsIiwiRXh0cnVkZSIsIkV4dHJ1ZGVHZW9tZXRyeSIsInNoYXBlcyIsIm9wdGlvbnMiLCJCdWZmZXJHZW9tZXRyeSIsImZyb21HZW9tZXRyeSIsIkljb3NhaGVkcm9uIiwiSWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJMYXRoZSIsIkxhdGhlQnVmZmVyR2VvbWV0cnkiLCJMYXRoZUdlb21ldHJ5IiwicG9pbnRzIiwiTGluZSIsIkxpbmVOYXRpdmUiLCJHZW9tZXRyeSIsInBwIiwiY3VydmUiLCJnZXRQb2ludHMiLCJ2ZXJ0cyIsIkZsb2F0MzJBcnJheSIsImkzIiwiYWRkQXR0cmlidXRlIiwiQnVmZmVyQXR0cmlidXRlIiwidmVydGljZXMiLCJJbXBvcnRlciIsImZpbHRlciIsInByb2Nlc3NGaWx0ZXIiLCJmb3JFYWNoIiwiZWwiLCJ0ZXh0dXJlUGF0aCIsImxhb2RlciIsInNldFRleHR1cmVQYXRoIiwibG9hZGVyIiwibG9hZCIsInVybCIsIm9uTG9hZCIsInBhcnNlciIsInVzZUN1c3RvbU1hdGVyaWFsIiwibWF0Iiwib25Qcm9ncmVzcyIsIm9uRXJyb3IiLCJKU09OTG9hZGVyIiwibWF0ZXJpYWxzIiwiT2N0YWhlZHJvbiIsIk9jdGFoZWRyb25CdWZmZXJHZW9tZXRyeSIsIk9jdGFoZWRyb25HZW9tZXRyeSIsIlBhcmFtZXRyaWMiLCJQYXJhbWV0cmljQnVmZmVyR2VvbWV0cnkiLCJQYXJhbWV0cmljR2VvbWV0cnkiLCJzbGljZXMiLCJzdGFja3MiLCJ1IiwidiIsIlZlY3RvcjMiLCJQbGFuZSIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwid1NlZ21lbnRzIiwiaFNlZ21lbnRzIiwidmVydGljZXNPZkN1YmUiLCJpbmRpY2VzT2ZGYWNlcyIsIlBvbHloZWRyb24iLCJQb2x5aGVkcm9uQnVmZmVyR2VvbWV0cnkiLCJQb2x5aGVkcm9uR2VvbWV0cnkiLCJSaW5nIiwiUmluZ0J1ZmZlckdlb21ldHJ5IiwiUmluZ0dlb21ldHJ5IiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInRoZXRhU2VnbWVudHMiLCJwaGlTZWdtZW50cyIsIlNoYXBlIiwiU2hhcGVCdWZmZXJHZW9tZXRyeSIsIlNoYXBlR2VvbWV0cnkiLCJTcGhlcmUiLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsIlNwaGVyZUdlb21ldHJ5IiwiVGV0cmFoZWRyb24iLCJUZXRyYWhlZHJvbkJ1ZmZlckdlb21ldHJ5IiwiVGV0cmFoZWRyb25HZW9tZXRyeSIsIlRleHQiLCJwYXJhbWV0ZXJzIiwiZm9udCIsIlRleHRHZW9tZXRyeSIsInRleHQiLCJGb250TG9hZGVyIiwiRm9udCIsIlRvcnVzIiwiVG9ydXNHZW9tZXRyeSIsInR1YmUiLCJyYWRpYWxTZWdtZW50cyIsInR1YnVsYXJTZWdtZW50cyIsImFyYyIsIlRvcnVza25vdCIsIkdDb25zdHJ1Y3QiLCJUb3J1c0tub3RCdWZmZXJHZW9tZXRyeSIsIlRvcnVzS25vdEdlb21ldHJ5IiwicCIsInEiLCJUdWJlIiwiVHViZUJ1ZmZlckdlb21ldHJ5IiwiVHViZUdlb21ldHJ5IiwicGF0aCIsImNsb3NlZCIsIkxpbmVDdXJ2ZTMiLCJHcm91cCIsIm9iamVjdHMiLCJvYmoiLCJhZGRUbyIsIk9iamVjdDNEIiwiRWxlbWVudE1vZHVsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZWxmIiwiYXBwZW5kQ2hpbGQiLCJSZW5kZXJpbmdNb2R1bGUiLCJpc1NoYWRvdyIsImFzc2lnbiIsIlZlY3RvcjIiLCJkZXZpY2VQaXhlbFJhdGlvIiwiYmdDb2xvciIsImJnT3BhY2l0eSIsInJlbmRlcmVyIiwicGl4ZWxSYXRpbyIsInJlc29sdXRpb24iLCJXZWJHTFJlbmRlcmVyIiwiZWZmZWN0cyIsImFwcGx5QWRkaXRpb25hbCIsInNldENsZWFyQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIk51bWJlciIsInRvRml4ZWQiLCJpc0FwcGxpZWQiLCJhZGRpdGlvbmFsIiwic2NlbmUiLCJyZW5kZXJMb29wIiwicmVuZGVyIiwiYXR0YWNoVG9DYW52YXMiLCJlZmZlY3QiLCJzaXplIiwiZ2V0U2l6ZSIsImFwcCIsImNhbnZhcyIsImRvbUVsZW1lbnQiLCJkZWZpbmUiLCJpbnRlZ3JhdGVSZW5kZXJlciIsInVwZGF0ZSIsImZvcmNlQ29udGV4dExvc3MiLCJzaGFkb3dNYXAiLCJTY2VuZU1vZHVsZSIsIndpbGxTY2VuZUJlUmVwbGFjZWQiLCJTY2VuZSIsInNldFNjZW5lIiwiUmVzaXplTW9kdWxlIiwiY2FsbGJhY2tzIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlbmRlcmluZyIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q29udGFpbmVyIiwiZ2V0UmVzb2x1dGlvbiIsImF1dG8iLCJhZGRFdmVudExpc3RlbmVyIiwidHJpZ2dlciIsImFkZEF1dG9yZXNpemUiLCJmcmFnbWVudCIsInZlcnRleCIsIlNoYWRlck1hdGVyaWFsIiwiVW5pZm9ybSIsIkNvbG9yIiwiV2ViR0xSZW5kZXJUYXJnZXQiLCJMaW5lYXJGaWx0ZXIiLCJSR0JBRm9ybWF0IiwiUkdCRm9ybWF0IiwiRGVwdGhUZXh0dXJlIiwiRGVwdGhTdGVuY2lsRm9ybWF0IiwiVW5zaWduZWRJbnQyNDhUeXBlIiwicG9seWZpbGwiLCJtZXRob2QiLCJzaG93V2FybiIsIlBvc3RQcm9jZXNzb3JNb2R1bGUiLCJkZWJ1ZyIsImN1cnJlbnRQYXNzIiwiY29tcG9zZXIiLCJFZmZlY3RDb21wb3NlciIsImdldERlbHRhIiwicmVwbGFjZVJlbmRlcmVyIiwicGFzcyIsIlJlbmRlclBhc3MiLCJhZGRQYXNzIiwidGV4dHVyZUlEIiwidW5pZm9ybXMiLCJTaGFkZXJQYXNzIiwicGFzc2VzIiwiYm9vbCIsInJlbmRlclRvU2NyZWVuIiwiRXZlbnRzUGF0Y2hNb2R1bGUiLCJvcmlnaW5PYmplY3QiLCJkZXN0T2JqZWN0IiwiZXZlbnRzIiwiZXZlbnQiLCJlbWl0IiwicGF0Y2hFdmVudHMiLCJWaXJ0dWFsTW91c2VNb2R1bGUiLCJnbG9iYWxNb3ZlbWVudCIsIm1vdXNlIiwicmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwicHJvamVjdGlvblBsYW5lIiwiY3VzdG9tWCIsImN1c3RvbVkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImNsaWVudFkiLCJub3JtYWwiLCJnZXRXb3JsZERpcmVjdGlvbiIsInNldEZyb21DYW1lcmEiLCJyZXF1aXJlIiwib24iLCJldiIsImdsb2JhbFgiLCJnbG9iYWxZIiwicG9pbnRlckxvY2tFbGVtZW50IiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwibmVzdGVkIiwiaXNIb3ZlcmVkIiwiaG92ZXJzIiwidHJhdmVyc2UiLCJjaGlsZCIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJwbGFuZSIsInJheSIsImludGVyc2VjdFBsYW5lIiwiaW50ZXJzZWN0aW9uIiwiQ29udHJvbHNNb2R1bGUiLCJjb250cm9scyIsImMiLCJ1cGRhdGVMb29wIiwiRm9nTW9kdWxlIiwidHlwZSIsImZvZyIsIkZvZ0V4cDIiLCJkZW5zaXR5IiwiRm9nIiwiaXNFcXVhbERlZmF1bHQiLCJhIiwiYiIsImVxdWFscyIsIlN0YXRlTW9kdWxlIiwiaXNFcXVhbCIsImVxdWFsQ2hlY2siLCJhY3Rpb25HZW5lcmF0ZSIsImNvbmZpZ3VyYXRpb24iLCJjdXJyZW50Q29uZmlnIiwicHJldkNvbmZpZyIsImNvbmZpZyIsImRlZmF1bHQiLCJyZXBsYWNlUmVkdWNlciIsImNvbmZpZ3MiLCJ1cGRhdGVzIiwiY29uZmlnTmFtZSIsInRydWVWYWwiLCJmYWxzZVZhbCIsIlRocmVlT3JiaXRDb250cm9scyIsImV2ZW50SGFuZGxlciIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJJbmZpbml0eSIsIm1pblpvb20iLCJtYXhab29tIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImVuYWJsZVpvb20iLCJ6b29tU3BlZWQiLCJlbmFibGVSb3RhdGUiLCJyb3RhdGVTcGVlZCIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJrZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJwb3NpdGlvbjAiLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50IiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1pbiIsIm1ha2VTYWZlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsImxvb2tBdCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicG93Iiwicm90YXRlVXAiLCJwYW5MZWZ0Iiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImNsaWVudEhlaWdodCIsIm1hdHJpeCIsImNsaWVudFdpZHRoIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImhhbmRsZU1vdXNlRG93bkRvbGx5IiwiaGFuZGxlTW91c2VEb3duUGFuIiwiaGFuZGxlTW91c2VNb3ZlUm90YXRlIiwic3ViVmVjdG9ycyIsImhhbmRsZU1vdXNlTW92ZURvbGx5IiwiaGFuZGxlTW91c2VNb3ZlUGFuIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlV2hlZWwiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJzcXJ0IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIkV2ZW50RGlzcGF0Y2hlciIsIk9yYml0Q29udHJvbHNNb2R1bGUiLCJmb2xsb3ciLCJ1cGRhdGVQcm9jZXNzb3IiLCJzZXRDb250cm9scyIsInNldFVwZGF0ZSIsIkR5bmFtaWNHZW9tZXRyeU1vZHVsZSIsImdfIiwidXBkYXRlUGFyYW1zIiwiVGV4dHVyZUxvYWRlciIsIlRleHR1cmVNb2R1bGUiLCJ0ZXh0dXJlcyIsInRleHR1cmUiLCJyZXBlYXQiLCJSZXBlYXRXcmFwcGluZyIsIm1hcHBpbmciLCJVVk1hcHBpbmciLCJmaXgiLCJ0ZXgiLCJ3cmFwUyIsIndyYXBUIiwibWFnRmlsdGVyIiwiTmVhcmVzdEZpbHRlciIsIm1pbkZpbHRlciIsIkxpbmVhck1pcE1hcExpbmVhckZpbHRlciIsIkFuaW1hdGlvbk1vZHVsZSIsImlzRGVmZXJyZWQiLCJza2VsZXRvbiIsIm1peGVyIiwiQW5pbWF0aW9uTWl4ZXIiLCJjbGlwcyIsImFuaW1hdGlvbnMiLCJjbGlwTmFtZSIsImNsaXAiLCJBbmltYXRpb25DbGlwIiwiZmluZEJ5TmFtZSIsImNsaXBBY3Rpb24iLCJwbGF5Iiwic3BlZWQiLCJEZWZpbmVNb2R1bGUiLCJNb2RlbCIsIkNhbWVyYU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxNQUFELEVBQTJCO29DQUFmQyxVQUFlO2NBQUE7Ozs7Ozs7Ozt5QkFDdkJBLFVBQXhCLDhIQUFvQztVQUF6QkMsU0FBeUI7Ozs7O1VBSTlCLENBQUNBLFNBQUwsRUFDRSxTQUxnQzs7Ozs7Ozs4QkFPZkMsT0FBT0MsbUJBQVAsQ0FBMkJGLFNBQTNCLENBQW5CLG1JQUEwRDtjQUEvQ0csSUFBK0M7O2NBQ3BETCxPQUFPSyxJQUFQLE1BQWlCQyxTQUFqQixJQUE4QkosVUFBVUcsSUFBVixDQUE5QixJQUNDTCxPQUFPSyxJQUFQLEVBQWFFLFFBQWIsT0FBNEIsaUJBRDdCLElBRUNMLFVBQVVHLElBQVYsRUFBZ0JFLFFBQWhCLE9BQStCLGlCQUZwQyxFQUV1RDs7Z0JBRWpETCxVQUFVRyxJQUFWLEVBQWdCRyxXQUFoQixLQUFnQ0wsTUFBcEMsRUFBNENKLE9BQU9DLE9BQU9LLElBQVAsQ0FBUCxFQUFxQkgsVUFBVUcsSUFBVixDQUFyQixFQUE1QyxLQUNLTCxPQUFPSyxJQUFQLElBQWVILFVBQVVHLElBQVYsQ0FBZjtXQUxQLE1BT0VMLE9BQU9LLElBQVAsSUFBZSxPQUFPTCxPQUFPSyxJQUFQLENBQVAsS0FBd0IsV0FBeEIsR0FBc0NILFVBQVVHLElBQVYsQ0FBdEMsR0FBd0RMLE9BQU9LLElBQVAsQ0FBdkU7O2NBRUUsT0FBT0wsT0FBT0ssSUFBUCxDQUFQLEtBQXdCLFdBQXhCLElBQXVDSSxNQUFNQyxPQUFOLENBQWNSLFVBQVVH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
