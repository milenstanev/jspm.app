"bundle";
/* */

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/slicedToArray.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
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
      }());
    }
  };
});
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
      _export("__useDefault", __useDefault = "<div class=\"panel panel-default\" data-testid=\"jspm-user-form\">\r\n  <div class=\"panel-heading\">\r\n    <h1 class=\"panel-title\">{{ $ctrl.title }}</h1>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p class=\"text-muted\" ng-if=\"$ctrl.loading\">Loading schema…</p>\r\n    <p class=\"text-danger\" ng-if=\"$ctrl.error\" role=\"alert\">{{ $ctrl.error }}</p>\r\n    <p class=\"text-success\" ng-if=\"$ctrl.status\" role=\"status\">{{ $ctrl.status }}</p>\r\n\r\n    <form name=\"userForm\"\r\n          novalidate\r\n          ng-if=\"$ctrl.record && $ctrl.fields.length\"\r\n          ng-submit=\"$ctrl.submit()\">\r\n      <div class=\"form-group\" ng-repeat=\"key in $ctrl.fields\">\r\n        <label class=\"control-label\"\r\n               ng-attr-for=\"field-{{ key }}\"\r\n               ng-if=\"$ctrl.schema[key].formType !== 'checkbox'\">{{ key }}</label>\r\n\r\n        <select class=\"form-control\"\r\n                ng-if=\"$ctrl.schema[key].formType === 'select'\"\r\n                ng-attr-id=\"field-{{ key }}\"\r\n                ng-model=\"$ctrl.record[key]\"\r\n                ng-options=\"opt.val as opt.text for opt in $ctrl.schema[key].options\">\r\n        </select>\r\n\r\n        <div class=\"checkbox\"\r\n             ng-if=\"$ctrl.schema[key].formType === 'checkbox'\">\r\n          <label>\r\n            <input type=\"checkbox\"\r\n                   ng-attr-id=\"field-{{ key }}\"\r\n                   ng-model=\"$ctrl.record[key]\">\r\n            {{ key }}\r\n          </label>\r\n        </div>\r\n\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               ng-if=\"$ctrl.schema[key].formType !== 'select' && $ctrl.schema[key].formType !== 'checkbox'\"\r\n               ng-attr-id=\"field-{{ key }}\"\r\n               ng-model=\"$ctrl.record[key]\">\r\n      </div>\r\n\r\n      <button type=\"submit\"\r\n              class=\"btn btn-primary\"\r\n              ng-disabled=\"$ctrl.saving\">\r\n        {{ $ctrl.saving ? 'Saving…' : 'Update user' }}\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

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
System.register('src/home/materializeRecord.js', [], function (_export, _context) {
  "use strict";

  /**
   * Schema as design: a record is a projection of /api/<entity>/schema.
   * Source data may fill slots the schema named. It must not invent keys.
   */
  function materializeRecordFromSchema(schema, source) {
    var record = {};
    var existing = source && typeof source === 'object' ? source : {};

    if (typeof existing._id === 'string' && existing._id.length > 0) {
      record._id = existing._id;
    }

    Object.keys(schema || {}).forEach(function (key) {
      var field = schema[key] || {};
      if (existing[key] !== undefined) {
        record[key] = existing[key];
        return;
      }
      if (field.default !== undefined) {
        record[key] = field.default;
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

  _export('materializeRecordFromSchema', materializeRecordFromSchema);

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('src/home/home.component.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/slicedToArray.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js', 'src/home/home.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js', 'src/home/materializeRecord.js'], function (_export, _context) {
  "use strict";

  var _slicedToArray, _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, template, CtrlBase, materializeRecordFromSchema, SCHEMA_UI_ORIGIN, USERS_COLLECTION, USERS_SCHEMA, HomeCtrl, HomeComponent;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersSlicedToArrayJs) {
      _slicedToArray = _npmSystemjsPluginBabel0025BabelHelpersSlicedToArrayJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
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
    }, function (_srcHomeMaterializeRecordJs) {
      materializeRecordFromSchema = _srcHomeMaterializeRecordJs.materializeRecordFromSchema;
    }],
    execute: function () {
      SCHEMA_UI_ORIGIN = 'https://schema-ui-mf-remote.vercel.app';
      USERS_COLLECTION = SCHEMA_UI_ORIGIN + '/api/users';
      USERS_SCHEMA = USERS_COLLECTION + '/schema';

      HomeCtrl = function (_CtrlBase) {
        _inherits(HomeCtrl, _CtrlBase);

        function HomeCtrl($timeout, $window) {
          _classCallCheck(this, HomeCtrl);

          var _this = _possibleConstructorReturn(this, (HomeCtrl.__proto__ || Object.getPrototypeOf(HomeCtrl)).call(this));

          _this.$timeout = $timeout;
          _this.$window = $window;
          _this.title = 'User';
          _this.schema = {};
          _this.fields = [];
          _this.record = null;
          _this.loading = true;
          _this.saving = false;
          _this.error = '';
          _this.status = '';
          _this.unsubscribeHost = [];
          _this.pendingHostRecord = null;
          _this.load();
          return _this;
        }

        _createClass(HomeCtrl, [{
          key: 'applyHostRecord',
          value: function applyHostRecord(payload) {
            var _this2 = this;

            if (payload && payload.entity && payload.entity !== 'users') {
              return;
            }
            var record = payload && payload.record ? payload.record : payload;
            if (!record || typeof record !== 'object') {
              this.load();
              return;
            }
            this.$timeout(function () {
              if (!_this2.fields.length) {
                _this2.pendingHostRecord = record;
                return;
              }
              _this2.record = materializeRecordFromSchema(_this2.schema, record);
              _this2.error = '';
              _this2.status = '';
            });
          }
        }, {
          key: '$onInit',
          value: function $onInit() {
            var _this3 = this;

            if (!this.$window.desktopUi || typeof this.$window.desktopUi.on !== 'function') {
              return;
            }
            this.$window.desktopUi.ready();
            ['userUpdated', 'dashboardSync'].forEach(function (name) {
              _this3.unsubscribeHost.push(_this3.$window.desktopUi.on(name, function (payload) {
                return _this3.applyHostRecord(payload);
              }));
            });
          }
        }, {
          key: '$onDestroy',
          value: function $onDestroy() {
            this.unsubscribeHost.forEach(function (off) {
              return off && off();
            });
            this.unsubscribeHost = [];
          }
        }, {
          key: 'load',
          value: function load() {
            var _this4 = this;

            this.loading = true;
            this.error = '';

            Promise.all([fetch(USERS_SCHEMA, { cache: 'no-store' }).then(function (res) {
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
              var _ref2 = _slicedToArray(_ref, 2),
                  schema = _ref2[0],
                  users = _ref2[1];

              _this4.$timeout(function () {
                _this4.schema = schema;
                _this4.fields = Object.keys(schema);
                var source = _this4.pendingHostRecord || (Array.isArray(users) ? users[0] : users);
                _this4.pendingHostRecord = null;
                _this4.record = materializeRecordFromSchema(schema, source);
                _this4.loading = false;
              });
            }).catch(function (err) {
              _this4.$timeout(function () {
                _this4.loading = false;
                _this4.error = err && err.message ? err.message : 'Could not load user';
              });
            });
          }
        }, {
          key: 'submit',
          value: function submit() {
            var _this5 = this;

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
              if (_this5.$window.desktopUi) {
                _this5.$window.desktopUi.emit('userUpdated', {
                  entity: 'users',
                  record: record
                });
                _this5.$window.desktopUi.setTitle(record.username || 'User');
              }
              _this5.$timeout(function () {
                _this5.saving = false;
                _this5.status = 'Dashboard synced';
              });
            }).catch(function (err) {
              _this5.$timeout(function () {
                _this5.saving = false;
                _this5.error = err && err.message ? err.message : 'Update failed';
              });
            });
          }
        }]);

        return HomeCtrl;
      }(CtrlBase);

      HomeCtrl.$inject = ['$timeout', '$window'];

      _export('HomeComponent', HomeComponent = {
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
      _export('appHome', appHome = angular.module('app.home', [CoreModule]).config(function ($stateProvider) {
        $stateProvider.state('home', {
          url: '/home',
          component: 'appHome'
        });
      }).component('appHome', HomeComponent));

      _export('appHome', appHome);
    }
  };
});