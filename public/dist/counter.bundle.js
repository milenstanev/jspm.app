"bundle";
/* */

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
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
      }());
    }
  };
});
/* */

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      });
    }
  };
});
/* */

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (subClass, superClass) {
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
      });
    }
  };
});
System.register("src/counter/counter.html!github:systemjs/plugin-text@0.0.11.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = "<h2>Counter</h2>\r\n<div class=\"counter-display\">{{ $ctrl.value }}</div>\r\n<div class=\"counter-actions\">\r\n  <button ng-click=\"$ctrl.decrement()\">Decrement</button>\r\n  <button ng-click=\"$ctrl.increment()\">Increment</button>\r\n</div>\r\n");

      _export("__useDefault", __useDefault);

      _export("default", __useDefault);
    }
  };
});
/* */

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
System.register("src/lib/asd.js", ["npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js"], function (_export, _context) {
  "use strict";

  var _classCallCheck, CtrlBase;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }],
    execute: function () {
      _export("CtrlBase", CtrlBase = function CtrlBase() {
        // Base controller - subclasses can override

        _classCallCheck(this, CtrlBase);
      });

      _export("CtrlBase", CtrlBase);
    }
  };
});
System.register('src/counter/counter.component.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js', 'src/counter/counter.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, template, CtrlBase, CounterCtrl, CounterComponent;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs) {
      _possibleConstructorReturn = _npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersInheritsJs) {
      _inherits = _npmSystemjsPluginBabel0025BabelHelpersInheritsJs.default;
    }, function (_srcCounterCounterHtmlGithubSystemjsPluginText0011Js) {
      template = _srcCounterCounterHtmlGithubSystemjsPluginText0011Js.default;
    }, function (_srcLibAsdJs) {
      CtrlBase = _srcLibAsdJs.CtrlBase;
    }],
    execute: function () {
      CounterCtrl = function (_CtrlBase) {
        _inherits(CounterCtrl, _CtrlBase);

        function CounterCtrl() {
          _classCallCheck(this, CounterCtrl);

          var _this = _possibleConstructorReturn(this, (CounterCtrl.__proto__ || Object.getPrototypeOf(CounterCtrl)).call(this));

          _this.value = 0;
          return _this;
        }

        _createClass(CounterCtrl, [{
          key: 'increment',
          value: function increment() {
            this.value += 1;
          }
        }, {
          key: 'decrement',
          value: function decrement() {
            this.value -= 1;
          }
        }]);

        return CounterCtrl;
      }(CtrlBase);

      CounterCtrl.$inject = [];

      _export('CounterComponent', CounterComponent = {
        template: template,
        controller: CounterCtrl
      });

      _export('CounterComponent', CounterComponent);
    }
  };
});
System.register('counterComponent', ['github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'src/counter/counter.component.js'], function (_export, _context) {
  "use strict";

  var angular, CoreModule, CounterComponent, appCounter;
  return {
    setters: [function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_srcCounterCounterComponentJs) {
      CounterComponent = _srcCounterCounterComponentJs.CounterComponent;
    }],
    execute: function () {
      _export('appCounter', appCounter = angular.module('app.counter', [CoreModule]).config(function ($stateProvider) {
        $stateProvider.state('counter', {
          url: '/counter',
          component: 'appCounter'
        });
      }).component('appCounter', CounterComponent));

      _export('appCounter', appCounter);
    }
  };
});