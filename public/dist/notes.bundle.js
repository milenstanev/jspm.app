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
System.register("src/notes/notes.html!github:systemjs/plugin-text@0.0.11.js", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = "<h2>Notes</h2>\r\n<form ng-submit=\"$ctrl.add()\" novalidate>\r\n  <input type=\"text\"\r\n         ng-model=\"$ctrl.input\"\r\n         placeholder=\"New note...\"\r\n         aria-label=\"New note\">\r\n  <button type=\"submit\">Add</button>\r\n</form>\r\n<ul class=\"notes-list\">\r\n  <li ng-repeat=\"item in $ctrl.items track by $index\">\r\n    {{ item }}\r\n    <button ng-click=\"$ctrl.remove($index)\">Remove</button>\r\n  </li>\r\n</ul>\r\n");

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
System.register('src/notes/notes.component.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js', 'src/notes/notes.html!github:systemjs/plugin-text@0.0.11.js', 'src/lib/asd.js'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, template, CtrlBase, NotesCtrl, NotesComponent;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs) {
      _possibleConstructorReturn = _npmSystemjsPluginBabel0025BabelHelpersPossibleConstructorReturnJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersInheritsJs) {
      _inherits = _npmSystemjsPluginBabel0025BabelHelpersInheritsJs.default;
    }, function (_srcNotesNotesHtmlGithubSystemjsPluginText0011Js) {
      template = _srcNotesNotesHtmlGithubSystemjsPluginText0011Js.default;
    }, function (_srcLibAsdJs) {
      CtrlBase = _srcLibAsdJs.CtrlBase;
    }],
    execute: function () {
      NotesCtrl = function (_CtrlBase) {
        _inherits(NotesCtrl, _CtrlBase);

        function NotesCtrl() {
          _classCallCheck(this, NotesCtrl);

          var _this = _possibleConstructorReturn(this, (NotesCtrl.__proto__ || Object.getPrototypeOf(NotesCtrl)).call(this));

          _this.items = [];
          _this.input = '';
          return _this;
        }

        _createClass(NotesCtrl, [{
          key: 'add',
          value: function add() {
            if (!this.input.trim()) return;
            this.items.push(this.input.trim());
            this.input = '';
          }
        }, {
          key: 'remove',
          value: function remove(index) {
            this.items.splice(index, 1);
          }
        }]);

        return NotesCtrl;
      }(CtrlBase);

      NotesCtrl.$inject = [];

      _export('NotesComponent', NotesComponent = {
        template: template,
        controller: NotesCtrl
      });

      _export('NotesComponent', NotesComponent);
    }
  };
});
System.register('notesComponent', ['github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'src/notes/notes.component.js'], function (_export, _context) {
  "use strict";

  var angular, CoreModule, NotesComponent, appNotes;
  return {
    setters: [function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_srcNotesNotesComponentJs) {
      NotesComponent = _srcNotesNotesComponentJs.NotesComponent;
    }],
    execute: function () {
      _export('appNotes', appNotes = angular.module('app.notes', [CoreModule]).config(function ($stateProvider) {
        $stateProvider.state('notes', {
          url: '/notes',
          component: 'appNotes'
        });
      }).component('appNotes', NotesComponent));

      _export('appNotes', appNotes);
    }
  };
});