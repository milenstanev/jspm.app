System.config({
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    "presets": [
      "babel-preset-es2017"
    ],
    "plugins": [
      "babel-plugin-transform-decorators-legacy"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "homeComponent": "src/home/home.module.js",
    "counterComponent": "src/counter/counter.module.js",
    "timerComponent": "src/timer/timer.module.js",
    "notesComponent": "src/notes/notes.module.js"
  },

  map: {
    "angular-core": "github:milenstanev/mstanev.angular.1.x.x.core@0.0.5",
    "babel": "npm:babel-core@5.8.38",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.5",
    "babel-preset-es2017": "npm:babel-preset-es2017@6.24.1",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.37",
    "featureRoutes": "github:milenstanev/jspm.angular.lazyload-router@master",
    "immutable": "npm:immutable@3.8.3",
    "json": "github:systemjs/plugin-json@0.3.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
    "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
    "testModule": "github:milenstanev/jspm.angular.test-module@master",
    "text": "github:systemjs/plugin-text@0.0.11",
    "github:angular/bower-angular-animate@1.8.3": {
      "angular": "github:angular/bower-angular@1.8.3"
    },
    "github:angular/bower-angular-sanitize@1.8.3": {
      "angular": "github:angular/bower-angular@1.8.3"
    },
    "github:jirikavi/AngularJS-Toaster@2.2.0": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.7.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.4"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:milenstanev/jspm.angular.lazyload-router@master": {
      "angular-core": "github:milenstanev/mstanev.angular.1.x.x.core@0.0.5",
      "christopherthielen/ui-router-extras": "github:christopherthielen/ui-router-extras@0.1.3",
      "ocombe/ocLazyLoad": "github:ocombe/ocLazyLoad@1.1.0"
    },
    "github:milenstanev/jspm.angular.test-module@master": {
      "angular-core": "github:milenstanev/mstanev.angular.1.x.x.core@0.0.5"
    },
    "github:milenstanev/mstanev.angular.1.x.x.core@0.0.3": {
      "angular": "github:angular/bower-angular@1.8.3",
      "angular-animate": "github:angular/bower-angular-animate@1.8.3",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.8.3",
      "angular-strap": "npm:angular-strap@2.3.12",
      "angular-ui-router": "npm:@uirouter/angularjs@1.1.2",
      "jirikavi/AngularJS-Toaster": "github:jirikavi/AngularJS-Toaster@2.2.0",
      "json": "github:systemjs/plugin-json@0.3.0"
    },
    "github:milenstanev/mstanev.angular.1.x.x.core@0.0.5": {
      "angular": "github:angular/bower-angular@1.8.3",
      "angular-animate": "github:angular/bower-angular-animate@1.8.3",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.8.3",
      "angular-strap": "npm:angular-strap@2.3.12",
      "angular-ui-router": "npm:@uirouter/angularjs@1.1.2",
      "jirikavi/AngularJS-Toaster": "github:jirikavi/AngularJS-Toaster@2.2.0",
      "json": "github:systemjs/plugin-json@0.3.0"
    },
    "npm:@uirouter/angularjs@1.1.2": {
      "@uirouter/core": "npm:@uirouter/core@6.1.2",
      "angular": "github:angular/bower-angular@1.8.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@uirouter/core@6.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-strap@2.3.12": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.5.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object.assign": "npm:object.assign@4.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.4"
    },
    "npm:babel-code-frame@6.26.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.3",
      "js-tokens": "npm:js-tokens@3.0.2"
    },
    "npm:babel-helper-function-name@6.24.1": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-remap-async-to-generator@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-messages@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.24.1": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.5": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-preset-es2017@6.24.1": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.26.0": {
      "core-js": "npm:core-js@2.6.12",
      "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
    },
    "npm:babel-template@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "lodash": "npm:lodash@4.17.23"
    },
    "npm:babel-traverse@6.26.0": {
      "babel-code-frame": "npm:babel-code-frame@6.26.0",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "debug": "npm:debug@2.6.9",
      "globals": "npm:globals@9.18.0",
      "invariant": "npm:invariant@2.2.4",
      "lodash": "npm:lodash@4.17.23",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "esutils": "npm:esutils@2.0.3",
      "lodash": "npm:lodash@4.17.23",
      "to-fast-properties": "npm:to-fast-properties@1.0.3"
    },
    "npm:babylon@6.18.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.7.1": {
      "base64-js": "npm:base64-js@1.5.1",
      "ieee754": "npm:ieee754@1.2.1"
    },
    "npm:call-bind-apply-helpers@1.0.2": {
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2"
    },
    "npm:call-bind@1.0.9": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-define-property": "npm:es-define-property@1.0.1",
      "get-intrinsic": "npm:get-intrinsic@1.3.1",
      "set-function-length": "npm:set-function-length@1.2.2"
    },
    "npm:call-bound@1.0.4": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "get-intrinsic": "npm:get-intrinsic@1.3.1"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.6.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:debug@2.6.9": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:define-data-property@1.1.4": {
      "es-define-property": "npm:es-define-property@1.0.1",
      "es-errors": "npm:es-errors@1.3.0",
      "gopd": "npm:gopd@1.2.0"
    },
    "npm:define-properties@1.2.1": {
      "define-data-property": "npm:define-data-property@1.1.4",
      "has-property-descriptors": "npm:has-property-descriptors@1.0.2",
      "object-keys": "npm:object-keys@1.1.1"
    },
    "npm:dunder-proto@1.0.1": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-errors": "npm:es-errors@1.3.0",
      "gopd": "npm:gopd@1.2.0"
    },
    "npm:es-object-atoms@1.1.1": {
      "es-errors": "npm:es-errors@1.3.0"
    },
    "npm:get-intrinsic@1.3.1": {
      "async-function": "npm:async-function@1.0.0",
      "async-generator-function": "npm:async-generator-function@1.0.0",
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-define-property": "npm:es-define-property@1.0.1",
      "es-errors": "npm:es-errors@1.3.0",
      "es-object-atoms": "npm:es-object-atoms@1.1.1",
      "function-bind": "npm:function-bind@1.1.2",
      "generator-function": "npm:generator-function@2.0.1",
      "get-proto": "npm:get-proto@1.0.1",
      "gopd": "npm:gopd@1.2.0",
      "has-symbols": "npm:has-symbols@1.1.0",
      "hasown": "npm:hasown@2.0.2",
      "math-intrinsics": "npm:math-intrinsics@1.1.0"
    },
    "npm:get-proto@1.0.1": {
      "dunder-proto": "npm:dunder-proto@1.0.1",
      "es-object-atoms": "npm:es-object-atoms@1.1.1"
    },
    "npm:globals@9.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-property-descriptors@1.0.2": {
      "es-define-property": "npm:es-define-property@1.0.1"
    },
    "npm:hasown@2.0.2": {
      "function-bind": "npm:function-bind@1.1.2"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.4": {
      "loose-envify": "npm:loose-envify@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@4.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:object.assign@4.1.7": {
      "call-bind": "npm:call-bind@1.0.9",
      "call-bound": "npm:call-bound@1.0.4",
      "define-properties": "npm:define-properties@1.2.1",
      "es-object-atoms": "npm:es-object-atoms@1.1.1",
      "has-symbols": "npm:has-symbols@1.1.0",
      "object-keys": "npm:object-keys@1.1.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.11.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:set-function-length@1.2.2": {
      "define-data-property": "npm:define-data-property@1.1.4",
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2",
      "get-intrinsic": "npm:get-intrinsic@1.3.1",
      "gopd": "npm:gopd@1.2.0",
      "has-property-descriptors": "npm:has-property-descriptors@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.4": {
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
