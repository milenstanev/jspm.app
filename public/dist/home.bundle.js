"bundle";
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js', ['npm:core-js@1.2.7/library/modules/$.to-iobject.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('npm:core-js@1.2.7/library/modules/$.to-iobject.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js", ["npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/get.js", ["npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$getOwnPropertyDescriptor = $__require("npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null) object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
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
    }
  };
  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/create.js', ['npm:core-js@1.2.7/library/modules/$.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/create.js", ["npm:core-js@1.2.7/library/fn/object/create.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/create.js"), __esModule: true };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.set-proto.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js');
  $export($export.S, 'Object', { setPrototypeOf: $__require('npm:core-js@1.2.7/library/modules/$.set-proto.js').set });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/set-prototype-of.js', ['npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.setPrototypeOf;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js", ["npm:core-js@1.2.7/library/fn/object/set-prototype-of.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/set-prototype-of.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/inherits.js", ["npm:babel-runtime@5.8.38/core-js/object/create.js", "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$create = $__require("npm:babel-runtime@5.8.38/core-js/object/create.js")["default"];
  var _Object$setPrototypeOf = $__require("npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js")["default"];
  exports["default"] = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      } });
    if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/define-property.js', ['npm:core-js@1.2.7/library/modules/$.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/define-property.js", ["npm:core-js@1.2.7/library/fn/object/define-property.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/define-property.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/create-class.js", ["npm:babel-runtime@5.8.38/core-js/object/define-property.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("npm:babel-runtime@5.8.38/core-js/object/define-property.js")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
      get = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIterator = function (it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/get-iterator.js', ['npm:core-js@1.2.7/library/modules/web.dom.iterable.js', 'npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator.js');
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/get-iterator.js", ["npm:core-js@1.2.7/library/fn/get-iterator.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/get-iterator.js"), __esModule: true };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.is-iterable.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').isIterable = function (it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/is-iterable.js', ['npm:core-js@1.2.7/library/modules/web.dom.iterable.js', 'npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/core.is-iterable.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/core.is-iterable.js');
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/is-iterable.js", ["npm:core-js@1.2.7/library/fn/is-iterable.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/is-iterable.js"), __esModule: true };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/sliced-to-array.js", ["npm:babel-runtime@5.8.38/core-js/get-iterator.js", "npm:babel-runtime@5.8.38/core-js/is-iterable.js"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _getIterator = $__require("npm:babel-runtime@5.8.38/core-js/get-iterator.js")["default"];
  var _isIterable = $__require("npm:babel-runtime@5.8.38/core-js/is-iterable.js")["default"];
  exports["default"] = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  exports.__esModule = true;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/es6.object.to-string.js", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.string-at.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.string.iterator.js', ['npm:core-js@1.2.7/library/modules/$.string-at.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('npm:core-js@1.2.7/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iter-step.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iobject.js', ['npm:core-js@1.2.7/library/modules/$.cof.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-iobject.js', ['npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-create.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.7/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-define.js', ['npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.redefine.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.iter-create.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.7/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.7/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.7/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.array.iterator.js', ['npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js', 'npm:core-js@1.2.7/library/modules/$.iter-step.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.to-iobject.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js'),
      step = $__require('npm:core-js@1.2.7/library/modules/$.iter-step.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      toIObject = $__require('npm:core-js@1.2.7/library/modules/$.to-iobject.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/web.dom.iterable.js', ['npm:core-js@1.2.7/library/modules/es6.array.iterator.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.array.iterator.js');
  var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.library.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.strict-new.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-call.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-array-iter.js', ['npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.to-integer.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-length.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.classof.js', ['npm:core-js@1.2.7/library/modules/$.cof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js'),
        TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iterators.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
    module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.for-of.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.iter-call.js', 'npm:core-js@1.2.7/library/modules/$.is-array-iter.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.to-length.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      call = $__require('npm:core-js@1.2.7/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.7/library/modules/$.is-array-iter.js'),
      anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
      toLength = $__require('npm:core-js@1.2.7/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  module.exports = function (iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      call(iterator, f, step.value, entries);
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-proto.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('npm:core-js@1.2.7/library/modules/$.js').getDesc,
      isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
      anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.same-value.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.an-object.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.species-constructor.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.a-function.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
        aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js'),
        SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.invoke.js", [], true, function ($__require, exports, module) {
                  var global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.html.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.global.js').document && document.documentElement;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-object.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.dom-create.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
        document = $__require('npm:core-js@1.2.7/library/modules/$.global.js').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.task.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.invoke.js', 'npm:core-js@1.2.7/library/modules/$.html.js', 'npm:core-js@1.2.7/library/modules/$.dom-create.js', 'npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.cof.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
        invoke = $__require('npm:core-js@1.2.7/library/modules/$.invoke.js'),
        html = $__require('npm:core-js@1.2.7/library/modules/$.html.js'),
        cel = $__require('npm:core-js@1.2.7/library/modules/$.dom-create.js'),
        global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function () {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function (event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('npm:core-js@1.2.7/library/modules/$.cof.js')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.cof.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.microtask.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.task.js', 'npm:core-js@1.2.7/library/modules/$.cof.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        macrotask = $__require('npm:core-js@1.2.7/library/modules/$.task.js').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('npm:core-js@1.2.7/library/modules/$.cof.js')(process) == 'process',
        head,
        last,
        notify;
    var flush = function () {
      var parent, domain, fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain) domain.enter();
        fn();
        if (domain) domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent) parent.enter();
    };
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function () {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function () {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.property-desc.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.hide.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine.js', ['npm:core-js@1.2.7/library/modules/$.hide.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.hide.js');
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine-all.js', ['npm:core-js@1.2.7/library/modules/$.redefine.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.has.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('npm:core-js@1.2.7/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.descriptors.js', ['npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-species.js', ['npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js'),
      SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species');
  module.exports = function (KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.shared.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.uid.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.wks.js', ['npm:core-js@1.2.7/library/modules/$.shared.js', 'npm:core-js@1.2.7/library/modules/$.uid.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('npm:core-js@1.2.7/library/modules/$.shared.js')('wks'),
        uid = $__require('npm:core-js@1.2.7/library/modules/$.uid.js'),
        Symbol = $__require('npm:core-js@1.2.7/library/modules/$.global.js').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-detect.js', ['npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.promise.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.a-function.js', 'npm:core-js@1.2.7/library/modules/$.strict-new.js', 'npm:core-js@1.2.7/library/modules/$.for-of.js', 'npm:core-js@1.2.7/library/modules/$.set-proto.js', 'npm:core-js@1.2.7/library/modules/$.same-value.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.species-constructor.js', 'npm:core-js@1.2.7/library/modules/$.microtask.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js', 'npm:core-js@1.2.7/library/modules/$.redefine-all.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.set-species.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.iter-detect.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
        LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
        global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
        classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
        anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
        aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js'),
        strictNew = $__require('npm:core-js@1.2.7/library/modules/$.strict-new.js'),
        forOf = $__require('npm:core-js@1.2.7/library/modules/$.for-of.js'),
        setProto = $__require('npm:core-js@1.2.7/library/modules/$.set-proto.js').set,
        same = $__require('npm:core-js@1.2.7/library/modules/$.same-value.js'),
        SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species'),
        speciesConstructor = $__require('npm:core-js@1.2.7/library/modules/$.species-constructor.js'),
        asap = $__require('npm:core-js@1.2.7/library/modules/$.microtask.js'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        empty = function () {},
        Wrapper;
    var testResolve = function (sub) {
      var test = new P(empty),
          promise;
      if (sub) test.constructor = function (exec) {
        exec(empty, empty);
      };
      (promise = P.resolve(test))['catch'](empty);
      return promise === test;
    };
    var USE_NATIVE = function () {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
        if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', { get: function () {
              thenableThenGotten = true;
            } }));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function (a, b) {
      if (LIBRARY && a === P && b === Wrapper) return true;
      return same(a, b);
    };
    var getConstructor = function (C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function (exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function (record, isReject) {
      if (record.n) return;
      record.n = true;
      var chain = record.c;
      asap(function () {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok) record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject) setTimeout(function () {
          var promise = record.p,
              handler,
              console;
          if (isUnhandled(promise)) {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        }, 1);
      });
    };
    var isUnhandled = function (promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h) return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }
      return true;
    };
    var $reject = function (value) {
      var record = this;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function (value) {
      var record = this,
          then;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function () {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('npm:core-js@1.2.7/library/modules/$.redefine-all.js')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a) record.a.push(reaction);
          if (record.s) notify(record, false);
          return promise;
        },
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
    $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js')(P, PROMISE);
    $__require('npm:core-js@1.2.7/library/modules/$.set-species.js')(PROMISE);
    Wrapper = $__require('npm:core-js@1.2.7/library/modules/$.core.js')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      } });
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, { resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this)) return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      } });
    $export($export.S + $export.F * !(USE_NATIVE && $__require('npm:core-js@1.2.7/library/modules/$.iter-detect.js')(function (iter) {
      P.all(iter)['catch'](function () {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function () {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining) $.each.call(values, function (promise, index) {
            var alreadyCalled = false;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              results[index] = value;
              --remaining || resolve(results);
            }, reject);
          });else resolve(results);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/promise.js', ['npm:core-js@1.2.7/library/modules/es6.object.to-string.js', 'npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/web.dom.iterable.js', 'npm:core-js@1.2.7/library/modules/es6.promise.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.7/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.promise.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Promise;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/promise.js", ["npm:core-js@1.2.7/library/fn/promise.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/promise.js"), __esModule: true };
});
System.register("src/home/home.html!github:systemjs/plugin-text@0.0.11.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = "<div class=\"panel panel-default\" data-testid=\"jspm-user-form\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">{{ $ctrl.title }}</h1>\n  </div>\n  <div class=\"panel-body\">\n    <p class=\"text-muted\" ng-if=\"$ctrl.loading\">Loading schema…</p>\n    <p class=\"text-danger\" ng-if=\"$ctrl.error\" role=\"alert\">{{ $ctrl.error }}</p>\n    <p class=\"text-success\" ng-if=\"$ctrl.status\" role=\"status\">{{ $ctrl.status }}</p>\n\n    <form name=\"userForm\"\n          novalidate\n          ng-if=\"$ctrl.record && $ctrl.fields.length\"\n          ng-submit=\"$ctrl.submit()\">\n      <div class=\"form-group\" ng-repeat=\"key in $ctrl.fields\">\n        <label ng-attr-for=\"field-{{ key }}\">{{ key }}</label>\n\n        <select class=\"form-control\"\n                ng-if=\"$ctrl.schema[key].formType === 'select'\"\n                ng-attr-id=\"field-{{ key }}\"\n                ng-model=\"$ctrl.record[key]\"\n                ng-options=\"opt.val as opt.text for opt in $ctrl.schema[key].options\">\n        </select>\n\n        <input type=\"checkbox\"\n               ng-if=\"$ctrl.schema[key].formType === 'checkbox'\"\n               ng-attr-id=\"field-{{ key }}\"\n               ng-model=\"$ctrl.record[key]\">\n\n        <input type=\"text\"\n               class=\"form-control\"\n               ng-if=\"$ctrl.schema[key].formType !== 'select' && $ctrl.schema[key].formType !== 'checkbox'\"\n               ng-attr-id=\"field-{{ key }}\"\n               ng-model=\"$ctrl.record[key]\">\n      </div>\n\n      <button type=\"submit\"\n              class=\"btn btn-primary\"\n              ng-disabled=\"$ctrl.saving\">\n        {{ $ctrl.saving ? 'Saving…' : 'Update user' }}\n      </button>\n    </form>\n  </div>\n</div>\n");

      _export("__useDefault", __useDefault);

      _export("default", __useDefault);
    }
  };
});
System.registerDynamic("npm:babel-runtime@5.8.38/helpers/class-call-check.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
});
System.register("src/lib/asd.js", ["npm:babel-runtime@5.8.38/helpers/class-call-check.js"], function (_export) {
  var _classCallCheck, CtrlBase;

  return {
    setters: [function (_npmBabelRuntime5838HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime5838HelpersClassCallCheckJs["default"];
    }],
    execute: function () {
      /**
       * Base controller class for Angular components.
       * Provides a minimal base that component controllers can extend.
       */
      "use strict";

      CtrlBase = function CtrlBase() {
        _classCallCheck(this, CtrlBase);
      };

      _export("CtrlBase", CtrlBase);
    }
  };
});

// Base controller - subclasses can override

System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-object.js', ['npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-sap.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
        fails = $__require('npm:core-js@1.2.7/library/modules/$.fails.js');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.keys.js', ['npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/keys.js', ['npm:core-js@1.2.7/library/modules/es6.object.keys.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.keys.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.keys;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/keys.js", ["npm:core-js@1.2.7/library/fn/object/keys.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/keys.js"), __esModule: true };
});
System.register('src/home/materializeRecord.js', ['npm:babel-runtime@5.8.38/core-js/object/keys.js'], function (_export) {
  var _Object$keys;

  function materializeRecordFromSchema(schema, source) {
    var record = {};
    var existing = source && typeof source === 'object' ? source : {};

    if (typeof existing._id === 'string' && existing._id.length > 0) {
      record._id = existing._id;
    }

    _Object$keys(schema || {}).forEach(function (key) {
      var field = schema[key] || {};
      if (existing[key] !== undefined) {
        record[key] = existing[key];
        return;
      }
      if (field['default'] !== undefined) {
        record[key] = field['default'];
        return;
      }
      if (field.formType === 'checkbox') {
        record[key] = false;
        return;
      }
      record[key] = '';
    });

    return record;
  }

  return {
    setters: [function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
      _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
    }],
    execute: function () {
      /**
       * Schema as design: a record is a projection of /api/<entity>/schema.
       * Source data may fill slots the schema named. It must not invent keys.
       */
      'use strict';

      _export('materializeRecordFromSchema', materializeRecordFromSchema);
    }
  };
});

System.register('src/home/home.component.js', ['npm:babel-runtime@5.8.38/helpers/get.js', 'npm:babel-runtime@5.8.38/helpers/inherits.js', 'npm:babel-runtime@5.8.38/helpers/create-class.js', 'npm:babel-runtime@5.8.38/helpers/class-call-check.js', 'npm:babel-runtime@5.8.38/helpers/sliced-to-array.js', 'npm:babel-runtime@5.8.38/core-js/promise.js', 'npm:babel-runtime@5.8.38/core-js/object/keys.js', 'src/home/home.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js', 'src/home/materializeRecord.js'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, _slicedToArray, _Promise, _Object$keys, template, CtrlBase, materializeRecordFromSchema, SCHEMA_UI_ORIGIN, USERS_COLLECTION, USERS_SCHEMA, HomeCtrl, HomeComponent;

  return {
    setters: [function (_npmBabelRuntime5838HelpersGetJs) {
      _get = _npmBabelRuntime5838HelpersGetJs['default'];
    }, function (_npmBabelRuntime5838HelpersInheritsJs) {
      _inherits = _npmBabelRuntime5838HelpersInheritsJs['default'];
    }, function (_npmBabelRuntime5838HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime5838HelpersCreateClassJs['default'];
    }, function (_npmBabelRuntime5838HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime5838HelpersClassCallCheckJs['default'];
    }, function (_npmBabelRuntime5838HelpersSlicedToArrayJs) {
      _slicedToArray = _npmBabelRuntime5838HelpersSlicedToArrayJs['default'];
    }, function (_npmBabelRuntime5838CoreJsPromiseJs) {
      _Promise = _npmBabelRuntime5838CoreJsPromiseJs['default'];
    }, function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
      _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
    }, function (_srcHomeHomeHtmlGithubSystemjsPluginText0011Js) {
      template = _srcHomeHomeHtmlGithubSystemjsPluginText0011Js['default'];
    }, function (_srcLibAsdJs) {
      CtrlBase = _srcLibAsdJs.CtrlBase;
    }, function (_srcHomeMaterializeRecordJs) {
      materializeRecordFromSchema = _srcHomeMaterializeRecordJs.materializeRecordFromSchema;
    }],
    execute: function () {
      'use strict';

      SCHEMA_UI_ORIGIN = 'https://schema-ui-mf-remote.vercel.app';
      USERS_COLLECTION = SCHEMA_UI_ORIGIN + '/api/users';
      USERS_SCHEMA = USERS_COLLECTION + '/schema';

      HomeCtrl = (function (_CtrlBase) {
        _inherits(HomeCtrl, _CtrlBase);

        function HomeCtrl($timeout, $window) {
          _classCallCheck(this, HomeCtrl);

          _get(Object.getPrototypeOf(HomeCtrl.prototype), 'constructor', this).call(this);
          this.$timeout = $timeout;
          this.$window = $window;
          this.title = 'User';
          this.schema = {};
          this.fields = [];
          this.record = null;
          this.loading = true;
          this.saving = false;
          this.error = '';
          this.status = '';
          this.unsubscribeSync = null;
          this.load();
        }

        _createClass(HomeCtrl, [{
          key: '$onInit',
          value: function $onInit() {
            var _this = this;

            if (this.$window.desktopUi) {
              this.$window.desktopUi.ready();
              this.unsubscribeSync = this.$window.desktopUi.on('dashboardSync', function (payload) {
                var record = payload && payload.record ? payload.record : payload;
                _this.$timeout(function () {
                  _this.record = materializeRecordFromSchema(_this.schema, record);
                });
              });
            }
          }
        }, {
          key: '$onDestroy',
          value: function $onDestroy() {
            if (this.unsubscribeSync) {
              this.unsubscribeSync();
            }
          }
        }, {
          key: 'load',
          value: function load() {
            var _this2 = this;

            this.loading = true;
            this.error = '';

            _Promise.all([fetch(USERS_SCHEMA, { cache: 'no-store' }).then(function (res) {
              if (!res.ok) {
                throw new Error('Schema could not be loaded');
              }
              return res.json();
            }), fetch(USERS_COLLECTION, { cache: 'no-store' }).then(function (res) {
              if (!res.ok) {
                throw new Error('Users could not be loaded');
              }
              return res.json();
            })]).then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2);

              var schema = _ref2[0];
              var users = _ref2[1];

              _this2.$timeout(function () {
                _this2.schema = schema;
                _this2.fields = _Object$keys(schema);
                var source = Array.isArray(users) ? users[0] : users;
                _this2.record = materializeRecordFromSchema(schema, source);
                _this2.loading = false;
              });
            })['catch'](function (err) {
              _this2.$timeout(function () {
                _this2.loading = false;
                _this2.error = err && err.message ? err.message : 'Could not load user';
              });
            });
          }
        }, {
          key: 'submit',
          value: function submit() {
            var _this3 = this;

            if (!this.record || !this.record._id) {
              return;
            }

            this.saving = true;
            this.status = '';
            this.error = '';
            var record = materializeRecordFromSchema(this.schema, this.record);
            var url = USERS_COLLECTION + '/' + encodeURIComponent(record._id);

            fetch(url, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(record),
              cache: 'no-store'
            }).then(function () {
              if (_this3.$window.desktopUi) {
                _this3.$window.desktopUi.emit('userUpdated', {
                  entity: 'users',
                  record: record
                });
                _this3.$window.desktopUi.setTitle(record.username || 'User');
              }
              _this3.$timeout(function () {
                _this3.saving = false;
                _this3.status = 'Dashboard synced';
              });
            })['catch'](function (err) {
              _this3.$timeout(function () {
                _this3.saving = false;
                _this3.error = err && err.message ? err.message : 'Update failed';
              });
            });
          }
        }]);

        return HomeCtrl;
      })(CtrlBase);

      HomeCtrl.$inject = ['$timeout', '$window'];

      HomeComponent = {
        template: template,
        controller: HomeCtrl
      };

      _export('HomeComponent', HomeComponent);
    }
  };
});

System.register('homeComponent', ['github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'src/home/home.component.js'], function (_export) {
  'use strict';

  var angular, CoreModule, HomeComponent, appHome;
  return {
    setters: [function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_srcHomeHomeComponentJs) {
      HomeComponent = _srcHomeHomeComponentJs.HomeComponent;
    }],
    execute: function () {
      appHome = angular.module('app.home', [CoreModule]).config(function ($stateProvider) {
        $stateProvider.state('home', {
          url: '/home',
          component: 'appHome'
        });
      }).component('appHome', HomeComponent);

      _export('appHome', appHome);
    }
  };
});
