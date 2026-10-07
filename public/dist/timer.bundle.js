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
System.register("src/timer/timer.html!github:systemjs/plugin-text@0.0.11.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = "<h2>Timer</h2>\r\n<div class=\"timer-display\">{{ $ctrl.formatTime($ctrl.seconds) }}</div>\r\n<div class=\"timer-actions\">\r\n  <button ng-click=\"$ctrl.start()\">Start</button>\r\n  <button ng-click=\"$ctrl.pause()\">Pause</button>\r\n  <button ng-click=\"$ctrl.reset()\">Reset</button>\r\n</div>\r\n");

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
System.register('src/timer/timer.component.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js', 'src/timer/timer.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, template, CtrlBase, TimerCtrl, TimerComponent;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs) {
      _possibleConstructorReturn = _npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersInheritsJs) {
      _inherits = _npmSystemjsPluginBabel0025BabelHelpersInheritsJs.default;
    }, function (_srcTimerTimerHtmlGithubSystemjsPluginText0011Js) {
      template = _srcTimerTimerHtmlGithubSystemjsPluginText0011Js.default;
    }, function (_srcLibAsdJs) {
      CtrlBase = _srcLibAsdJs.CtrlBase;
    }],
    execute: function () {
      TimerCtrl = function (_CtrlBase) {
        _inherits(TimerCtrl, _CtrlBase);

        function TimerCtrl($interval) {
          _classCallCheck(this, TimerCtrl);

          var _this = _possibleConstructorReturn(this, (TimerCtrl.__proto__ || Object.getPrototypeOf(TimerCtrl)).call(this));

          _this.$interval = $interval;
          _this.seconds = 0;
          _this.running = false;
          _this.intervalId = null;
          return _this;
        }

        _createClass(TimerCtrl, [{
          key: 'formatTime',
          value: function formatTime(s) {
            var m = Math.floor(s / 60);
            var sec = s % 60;
            return String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
          }
        }, {
          key: 'start',
          value: function start() {
            var _this2 = this;

            if (this.running) return;
            this.running = true;
            this.intervalId = this.$interval(function () {
              _this2.seconds += 1;
            }, 1000);
          }
        }, {
          key: 'pause',
          value: function pause() {
            this.running = false;
            if (this.intervalId) {
              this.$interval.cancel(this.intervalId);
              this.intervalId = null;
            }
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.pause();
            this.seconds = 0;
          }
        }, {
          key: '$onDestroy',
          value: function $onDestroy() {
            this.pause();
          }
        }]);

        return TimerCtrl;
      }(CtrlBase);

      TimerCtrl.$inject = ['$interval'];

      _export('TimerComponent', TimerComponent = {
        template: template,
        controller: TimerCtrl
      });

      _export('TimerComponent', TimerComponent);
    }
  };
});
System.register('timerComponent', ['github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'src/timer/timer.component.js'], function (_export, _context) {
  "use strict";

  var angular, CoreModule, TimerComponent, appTimer;
  return {
    setters: [function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_srcTimerTimerComponentJs) {
      TimerComponent = _srcTimerTimerComponentJs.TimerComponent;
    }],
    execute: function () {
      _export('appTimer', appTimer = angular.module('app.timer', [CoreModule]).config(function ($stateProvider) {
        $stateProvider.state('timer', {
          url: '/timer',
          component: 'appTimer'
        });
      }).component('appTimer', TimerComponent));

      _export('appTimer', appTimer);
    }
  };
});