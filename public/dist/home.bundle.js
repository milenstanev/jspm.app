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
System.register("src/home/home.html!github:systemjs/plugin-text@0.0.11.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = "<h1>{{ $ctrl.title }}</h1>\r\n<p>Hello, {{ $ctrl.user.name }}!</p>\r\n\r\n<div ng-if=\"$ctrl.data.length\"\r\n    ng-repeat=\"items in $ctrl.data\"\r\n    ng-click=\"$ctrl.removeItem(items)\">\r\n  {{ items.title }}\r\n</div>\r\n\r\n<form novalidate name=\"form\">\r\n  <input type=\"text\"\r\n         name=\"theText\"\r\n         ng-model=\"$ctrl.theText\"\r\n         required>\r\n  <button\r\n      ng-disabled=\"form.theText.$invalid\"\r\n      ng-click=\"$ctrl.add({title: $ctrl.theText})\">Add</button>\r\n</form>\r\n");

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
System.register('src/home/home.component.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js', 'src/home/home.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, template, CtrlBase, HomeCtrl, HomeComponent;

  /**
   * Home Component description or something
   */
  function decor(ref) {
    ref.prototype.map = ref.prototype.map || new Map();
    ref.prototype.map.set('test', 'Test');

    return ref;
  }

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs) {
      _possibleConstructorReturn = _npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersInheritsJs) {
      _inherits = _npmSystemjsPluginBabel0025BabelHelpersInheritsJs.default;
    }, function (_srcHomeHomeHtmlGithubSystemjsPluginText0011Js) {
      template = _srcHomeHomeHtmlGithubSystemjsPluginText0011Js.default;
    }, function (_srcLibAsdJs) {
      CtrlBase = _srcLibAsdJs.CtrlBase;
    }],
    execute: function () {
      HomeCtrl = function (_CtrlBase) {
        _inherits(HomeCtrl, _CtrlBase);

        function HomeCtrl() {
          _classCallCheck(this, HomeCtrl);

          var _this = _possibleConstructorReturn(this, (HomeCtrl.__proto__ || Object.getPrototypeOf(HomeCtrl)).call(this));

          _this.theText = 'default';
          return _this;
        }

        //region data get/set


        _createClass(HomeCtrl, [{
          key: 'add',

          //endregion

          value: function add(itemData) {
            this.addItem(itemData);
            this.theText = '';
          }
        }, {
          key: 'data',
          get: function get() {
            if (this.dataProvider && this.dataProvider.size) {
              return Array.from(this.dataProvider.get('data'));
            } else {
              return [];
            }
          },
          set: function set(data) {
            var _this2 = this;

            if (!data instanceof Set) {
              throw new Error('expect {Set} instead of {' + typeof data + '}');
            }

            data.forEach(function (item) {
              return _this2.dataProvider.get('data').add(item);
            });
          }
        }]);

        return HomeCtrl;
      }(CtrlBase);

      HomeCtrl.$inject = [];

      _export('HomeComponent', HomeComponent = {
        bindings: {
          title: '@',
          user: '<',
          dataProvider: '<',
          addItem: '<',
          removeItem: '<',
          onDestroy: '<'
        },
        template: template,
        controller: HomeCtrl
      });

      _export('HomeComponent', HomeComponent);
    }
  };
});
System.register('homeComponent', ['github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'src/home/home.component.js'], function (_export, _context) {
  "use strict";

  var angular, CoreModule, HomeComponent, appHome;
  return {
    setters: [function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_srcHomeHomeComponentJs) {
      HomeComponent = _srcHomeHomeComponentJs.HomeComponent;
    }],
    execute: function () {
      _export('appHome', appHome = angular.module('app.home', [CoreModule]).config(function ($stateProvider, $urlRouterProvider, defaultView) {
        defaultView = '/home';

        $stateProvider.state('home', {
          url: '/home',
          component: 'appHome',
          resolve: {
            title: function title() {
              return 'Home Page Title';
            },
            user: function user() {
              return {
                name: 'User name'
              };
            },
            dataProvider: function dataProvider(testSvc) {
              return testSvc.getData().then(function (res) {
                testSvc.map.get('data').add({ title: 'Initial' });
                res.data.forEach(function (item) {
                  return testSvc.map.get('data').add(item);
                });

                return testSvc.map;
              });
            },
            removeItem: function removeItem(testSvc) {
              return function (item) {
                testSvc.map.get('data').delete(item);
              };
            },
            addItem: function addItem(testSvc) {
              return function (item) {
                return testSvc.map.get('data').add(item);
              };
            },
            onDestroy: function onDestroy(testSvc) {
              return testSvc.clear();
            }

          }
        });
      }).factory('testSvc', function ($timeout) {
        var map = new Map();
        map.set('data', new Set());

        return {
          map: map,
          getData: function getData() {
            $timeout(function () {
              map.get('data').add({ title: 'added' });
            }, 2000);

            return new Promise(function (resolve) {
              resolve({ data: [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }] });
            });
          },
          clear: function clear() {
            return map.get('data').clear();
          }
        };
      }).component('appHome', HomeComponent));

      _export('appHome', appHome);
    }
  };
});