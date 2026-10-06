"bundle";
/* */
"format esm";

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      });
    }
  };
});
(function() {
var define = System.amdDefine;
!function(a) {
  function b(a, b, e) {
    return 4 === arguments.length ? c.apply(this, arguments) : void d(a, {
      declarative: !0,
      deps: b,
      declare: e
    });
  }
  function c(a, b, c, e) {
    d(a, {
      declarative: !1,
      deps: b,
      executingRequire: c,
      execute: e
    });
  }
  function d(a, b) {
    b.name = a, a in o || (o[a] = b), b.normalizedDeps = b.deps;
  }
  function e(a, b) {
    if (b[a.groupIndex] = b[a.groupIndex] || [], -1 == p.call(b[a.groupIndex], a)) {
      b[a.groupIndex].push(a);
      for (var c = 0,
          d = a.normalizedDeps.length; d > c; c++) {
        var f = a.normalizedDeps[c],
            g = o[f];
        if (g && !g.evaluated) {
          var h = a.groupIndex + (g.declarative != a.declarative);
          if (void 0 === g.groupIndex || g.groupIndex < h) {
            if (void 0 !== g.groupIndex && (b[g.groupIndex].splice(p.call(b[g.groupIndex], g), 1), 0 == b[g.groupIndex].length))
              throw new TypeError("Mixed dependency cycle detected");
            g.groupIndex = h;
          }
          e(g, b);
        }
      }
    }
  }
  function f(a) {
    var b = o[a];
    b.groupIndex = 0;
    var c = [];
    e(b, c);
    for (var d = !!b.declarative == c.length % 2,
        f = c.length - 1; f >= 0; f--) {
      for (var g = c[f],
          i = 0; i < g.length; i++) {
        var k = g[i];
        d ? h(k) : j(k);
      }
      d = !d;
    }
  }
  function g(a) {
    return s[a] || (s[a] = {
      name: a,
      dependencies: [],
      exports: {},
      importers: []
    });
  }
  function h(b) {
    if (!b.module) {
      var c = b.module = g(b.name),
          d = b.module.exports,
          e = b.declare.call(a, function(a, b) {
            if (c.locked = !0, "object" == typeof a)
              for (var e in a)
                d[e] = a[e];
            else
              d[a] = b;
            for (var f = 0,
                g = c.importers.length; g > f; f++) {
              var h = c.importers[f];
              if (!h.locked)
                for (var i = 0; i < h.dependencies.length; ++i)
                  h.dependencies[i] === c && h.setters[i](d);
            }
            return c.locked = !1, b;
          }, {id: b.name});
      c.setters = e.setters, c.execute = e.execute;
      for (var f = 0,
          i = b.normalizedDeps.length; i > f; f++) {
        var j,
            k = b.normalizedDeps[f],
            l = o[k],
            m = s[k];
        m ? j = m.exports : l && !l.declarative ? j = l.esModule : l ? (h(l), m = l.module, j = m.exports) : j = n(k), m && m.importers ? (m.importers.push(c), c.dependencies.push(m)) : c.dependencies.push(null), c.setters[f] && c.setters[f](j);
      }
    }
  }
  function i(a) {
    var b,
        c = o[a];
    if (c)
      c.declarative ? m(a, []) : c.evaluated || j(c), b = c.module.exports;
    else if (b = n(a), !b)
      throw new Error("Unable to load dependency " + a + ".");
    return (!c || c.declarative) && b && b.__useDefault ? b.default : b;
  }
  function j(b) {
    if (!b.module) {
      var c = {},
          d = b.module = {
            exports: c,
            id: b.name
          };
      if (!b.executingRequire)
        for (var e = 0,
            f = b.normalizedDeps.length; f > e; e++) {
          var g = b.normalizedDeps[e],
              h = o[g];
          h && j(h);
        }
      b.evaluated = !0;
      var l = b.execute.call(a, function(a) {
        for (var c = 0,
            d = b.deps.length; d > c; c++)
          if (b.deps[c] == a)
            return i(b.normalizedDeps[c]);
        throw new TypeError("Module " + a + " not declared as a dependency.");
      }, c, d);
      void 0 !== l && (d.exports = l), c = d.exports, c && c.__esModule ? b.esModule = c : b.esModule = k(c);
    }
  }
  function k(b) {
    var c = {};
    if (("object" == typeof b || "function" == typeof b) && b !== a)
      if (q)
        for (var d in b)
          "default" !== d && l(c, b, d);
      else {
        var e = b && b.hasOwnProperty;
        for (var d in b)
          "default" === d || e && !b.hasOwnProperty(d) || (c[d] = b[d]);
      }
    return c.default = b, r(c, "__useDefault", {value: !0}), c;
  }
  function l(a, b, c) {
    try {
      var d;
      (d = Object.getOwnPropertyDescriptor(b, c)) && r(a, c, d);
    } catch (d) {
      return a[c] = b[c], !1;
    }
  }
  function m(b, c) {
    var d = o[b];
    if (d && !d.evaluated && d.declarative) {
      c.push(b);
      for (var e = 0,
          f = d.normalizedDeps.length; f > e; e++) {
        var g = d.normalizedDeps[e];
        -1 == p.call(c, g) && (o[g] ? m(g, c) : n(g));
      }
      d.evaluated || (d.evaluated = !0, d.module.execute.call(a));
    }
  }
  function n(a) {
    if (u[a])
      return u[a];
    if ("@node/" == a.substr(0, 6))
      return u[a] = k(t(a.substr(6)));
    var b = o[a];
    if (!b)
      throw "Module " + a + " not present.";
    return f(a), m(a, []), o[a] = void 0, b.declarative && r(b.module.exports, "__esModule", {value: !0}), u[a] = b.declarative ? b.module.exports : b.esModule;
  }
  var o = {},
      p = Array.prototype.indexOf || function(a) {
        for (var b = 0,
            c = this.length; c > b; b++)
          if (this[b] === a)
            return b;
        return -1;
      },
      q = !0;
  try {
    Object.getOwnPropertyDescriptor({a: 0}, "a");
  } catch (a) {
    q = !1;
  }
  var r;
  !function() {
    try {
      Object.defineProperty({}, "a", {}) && (r = Object.defineProperty);
    } catch (a) {
      r = function(a, b, c) {
        try {
          a[b] = c.value || c.get.call(a);
        } catch (a) {}
      };
    }
  }();
  var s = {},
      t = "undefined" != typeof System && System._nodeRequire || "undefined" != typeof require && "undefined" != typeof require.resolve && "undefined" != typeof process && process.platform && require,
      u = {"@empty": {}};
  return function(a, d, e, f) {
    return function(g) {
      g(function(g) {
        for (var h = {
          _nodeRequire: t,
          register: b,
          registerDynamic: c,
          get: n,
          set: function(a, b) {
            u[a] = b;
          },
          newModule: function(a) {
            return a;
          }
        },
            i = 0; i < d.length; i++)
          (function(a, b) {
            b && b.__esModule ? u[a] = b : u[a] = k(b);
          })(d[i], arguments[i]);
        f(h);
        var j = n(a[0]);
        if (a.length > 1)
          for (var i = 1; i < a.length; i++)
            n(a[i]);
        return e ? j.default : j;
      });
    };
  };
}("undefined" != typeof self ? self : global)(["3"], ["2"], !1, function(a) {
  this.require, this.exports, this.module;
  !function(b) {
    function c(a, b) {
      for (var c = a.split("."); c.length; )
        b = b[c.shift()];
      return b;
    }
    function d(a) {
      if ("string" == typeof a)
        return c(a, b);
      if (!(a instanceof Array))
        throw new Error("Global exports must be a string or array.");
      for (var d = {},
          e = !0,
          f = 0; f < a.length; f++) {
        var g = c(a[f], b);
        e && (d.default = g, e = !1), d[a[f].split(".").pop()] = g;
      }
      return d;
    }
    function e(a) {
      if (Object.keys)
        Object.keys(b).forEach(a);
      else
        for (var c in b)
          i.call(b, c) && a(c);
    }
    function f(a) {
      e(function(c) {
        if (-1 == j.call(k, c)) {
          try {
            var d = b[c];
          } catch (a) {
            k.push(c);
          }
          a(c, d);
        }
      });
    }
    var g,
        h = a,
        i = Object.prototype.hasOwnProperty,
        j = Array.prototype.indexOf || function(a) {
          for (var b = 0,
              c = this.length; c > b; b++)
            if (this[b] === a)
              return b;
          return -1;
        },
        k = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"];
    h.set("@@global-helpers", h.newModule({prepareGlobal: function(a, c, e) {
        var h = b.define;
        b.define = void 0;
        var i;
        if (e) {
          i = {};
          for (var j in e)
            i[j] = b[j], b[j] = e[j];
        }
        return c || (g = {}, f(function(a, b) {
          g[a] = b;
        })), function() {
          var a;
          if (c)
            a = d(c);
          else {
            a = {};
            var e,
                j;
            f(function(b, c) {
              g[b] !== c && "undefined" != typeof c && (a[b] = c, "undefined" != typeof e ? j || e === c || (j = !0) : e = c);
            }), a = j ? a : e;
          }
          if (i)
            for (var k in i)
              b[k] = i[k];
          return b.define = h, a;
        };
      }}));
  }("undefined" != typeof self ? self : global), a.registerDynamic("4", [], !1, function(b, c, d) {
    var e = a.get("@@global-helpers").prepareGlobal(d.id, null, null);
    return function(a) {
      !function(a, b) {
        "use strict";
        function c(a, b) {
          var c = [];
          for (var d in a.path) {
            if (a.path[d] !== b.path[d])
              break;
            c.push(a.path[d]);
          }
          return c;
        }
        function d(b) {
          if (Object.keys)
            return Object.keys(b);
          var c = [];
          return a.forEach(b, function(a, b) {
            c.push(b);
          }), c;
        }
        function e(a, b) {
          var c = [];
          for (var d in a)
            b && b.indexOf(d) !== -1 || c.push(d);
          return c;
        }
        function f(a, b) {
          if (Array.prototype.indexOf)
            return a.indexOf(b, Number(arguments[2]) || 0);
          var c = a.length >>> 0,
              d = Number(arguments[2]) || 0;
          for (d = d < 0 ? Math.ceil(d) : Math.floor(d), d < 0 && (d += c); d < c; d++)
            if (d in a && a[d] === b)
              return d;
          return -1;
        }
        function g(a, b, e, g) {
          var h,
              i = c(e, g),
              j = {},
              k = [];
          for (var l in i)
            if (i[l].params && (h = o(i[l].params) ? i[l].params : d(i[l].params), h.length))
              for (var m in h)
                f(k, h[m]) >= 0 || (k.push(h[m]), j[h[m]] = a[h[m]]);
          return n({}, j, b);
        }
        function h(a, b) {
          return n(new (n(function() {}, {prototype: a})), b);
        }
        function i(a) {
          l.push(a);
        }
        var j = a.module("ct.ui.router.extras.core", ["ui.router"]),
            k = {},
            l = [];
        j.config(["$stateProvider", "$injector", function(b, c) {
          b.decorator("parent", function(b, c) {
            return k[b.self.name] = b, b.self.$$state = function() {
              return k[b.self.name];
            }, a.forEach(l, function(a) {
              a(b);
            }), c(b);
          });
        }]);
        var m = a.forEach,
            n = a.extend,
            o = a.isArray,
            p = function(a, b) {
              var c = [];
              return m(a, function(a, d) {
                c.push(b(a, d));
              }), c;
            },
            q = function(a) {
              return p(a, function(a, b) {
                return b;
              });
            },
            r = function(a, b) {
              var c = [];
              return m(a, function(a, d) {
                b(a, d) && c.push(a);
              }), c;
            },
            s = function(a, b) {
              var c = {};
              return m(a, function(a, d) {
                b(a, d) && (c[d] = a);
              }), c;
            };
        j.provider("uirextras_core", function() {
          var b = {
            internalStates: k,
            onStateRegistered: i,
            forEach: m,
            extend: n,
            isArray: o,
            map: p,
            keys: q,
            filter: r,
            filterObj: s,
            ancestors: c,
            objectKeys: d,
            protoKeys: e,
            arraySearch: f,
            inheritParams: g,
            inherit: h
          };
          a.extend(this, b), this.$get = function() {
            return b;
          };
        });
      }(angular);
    }(this), e();
  }), a.registerDynamic("5", [], !1, function(b, c, d) {
    var e = a.get("@@global-helpers").prepareGlobal(d.id, null, null);
    return function(a) {
      !function(a, b) {
        "use strict";
        !function(a, b) {
          function c(b, c, d, e) {
            function f(b, c) {
              var d = a.isObject(b) ? b.name : b;
              return c ? n[d] : l[d];
            }
            function g(a, b) {
              if (b.name) {
                var c = b.name.split(/\./);
                for ("." === b.name.charAt(0) && (c[0] = a.current.name); c.length; ) {
                  var d = c.join(".");
                  if (a.get(d, {relative: a.current}))
                    return null;
                  if (n[d])
                    return n[d];
                  c.pop();
                }
              }
              if (b.url) {
                var e = [];
                for (var f in n) {
                  var g = n[f].urlMatcher;
                  g && g.exec(b.url) && e.push(n[f]);
                }
                for (var h = e.slice(0),
                    i = e.length - 1; i >= 0; i--)
                  for (var j = 0; j < h.length; j++)
                    e[i] === h[j].parentFutureState && e.splice(i, 1);
                return e[0];
              }
            }
            function h(a, b) {
              function c() {
                delete n[b.name];
              }
              function d(a) {
                return "remove" === l && c(), e.reject(a);
              }
              o = !0;
              var e = a.get("$q");
              if (!b) {
                var f = e.defer();
                return f.reject("No lazyState passed in " + b), f.promise;
              }
              var g = e.when([]),
                  i = b.parentFutureState;
              i && n[i.name] && (g = h(a, n[i.name]));
              var j = b.type,
                  k = m[j];
              if (!k)
                throw Error("No state factory for futureState.type: " + (b && b.type));
              var l = k.$options && k.$options.failedLazyLoadPolicy || "remove";
              return g.then(function(d) {
                var e = a.invoke(k, k, {futureState: b});
                return e.then(function(a) {
                  return c(), a && d.push(a), d;
                });
              }).catch(d);
            }
            function i(a, c) {
              var d = !1,
                  e = ["$rootScope", "$urlRouter", "$state", function(e, f, i) {
                    function k() {
                      d = !0, f.sync(), d = !1;
                    }
                    if (!q)
                      return j().then(k), void(q = !0);
                    var l = g(i, {url: c.path()});
                    return l ? void h(a, l).then(function(a) {
                      a.forEach(function(a) {
                        a && (!i.get(a) || a.name && !i.get(a.name)) && b.state(a);
                      }), o = !1, k();
                    }, function() {
                      o = !1, k();
                    }) : a.invoke(s);
                  }];
              if (!o) {
                var f = d ? s : e;
                return a.invoke(f);
              }
            }
            var j,
                k = e,
                l = k.internalStates,
                m = {},
                n = {},
                o = !1,
                p = [],
                q = !1,
                r = this;
            this.addResolve = function(a) {
              p.push(a);
            }, this.stateFactory = function(a, b) {
              m[a] = b;
            }, this.futureState = function(b) {
              b.stateName && (b.name = b.stateName), b.urlPrefix && (b.url = "^" + b.urlPrefix), n[b.name] = b;
              var c,
                  e = b.name.split(/\./).slice(0, -1).join("."),
                  g = f(b.parent || e);
              if (g)
                c = g.url || g.navigable && g.navigable.url;
              else if ("" === e)
                c = d.compile("");
              else {
                var h = f(b.parent || e, !0);
                if (!h)
                  throw new Error("Couldn't determine parent state of future state. FutureState:" + a.toJson(b));
                var i;
                i = h.urlMatcher ? h.urlMatcher.source.replace(/\*rest$/, "") : "", c = d.compile(i), b.parentFutureState = h;
              }
              b.url && (b.urlMatcher = "^" === b.url.charAt(0) ? d.compile(b.url.substring(1) + "*rest") : c.concat(b.url + "*rest"));
            }, this.get = function() {
              return a.extend({}, n);
            };
            var s = ["$log", "$location", function(a, b) {}];
            c.otherwise(i), c.otherwise = function(b) {
              if (a.isString(b)) {
                var d = b;
                b = function() {
                  return d;
                };
              } else if (!a.isFunction(b))
                throw new Error("'rule' must be a function");
              return s = ["$injector", "$location", b], c;
            };
            var t = {getResolvePromise: function() {
                return j();
              }};
            this.$get = ["$injector", "$state", "$q", "$rootScope", "$urlRouter", "$timeout", "$log", function(c, d, e, f, i, k, l) {
              function m() {
                if (f.$on("$stateNotFound", function(a, e, f, i) {
                  if (!o) {
                    var j = g(d, {name: e.to});
                    if (j) {
                      a.preventDefault();
                      var k = h(c, j);
                      k.then(function(a) {
                        a.forEach(function(a) {
                          a && (!d.get(a) || a.name && !d.get(a.name)) && b.state(a);
                        }), d.go(e.to, e.toParams, e.options), o = !1;
                      }, function(a) {
                        console.log("failed to lazy load state ", a), f.name && d.go(f, i), o = !1;
                      });
                    }
                  }
                }), !j) {
                  var l = [];
                  a.forEach(p, function(a) {
                    l.push(c.invoke(a));
                  }), j = function() {
                    return e.all(l);
                  };
                }
                j().then(function a() {
                  k(function() {
                    (function(){var t=d.transition;return t?e.when(t).then(a,a):i.sync()}());
                  });
                });
              }
              return m(), t.state = b.state, t.futureState = r.futureState, t.get = r.get, t;
            }];
          }
          var d = a.module("ct.ui.router.extras.future", ["ct.ui.router.extras.core"]);
          c.$inject = ["$stateProvider", "$urlRouterProvider", "$urlMatcherFactoryProvider", "uirextras_coreProvider"], d.provider("$futureState", c);
          var e = {
            state: function(a) {
              e.$rootScope && e.$rootScope.$broadcast("$stateAdded", a);
            },
            itsNowRuntimeOhWhatAHappyDay: function(a) {
              e.$rootScope = a;
            },
            $rootScope: b
          };
          d.config(["$stateProvider", function(b) {
            var c = b.state;
            b.state = function() {
              var d = c.apply(b, arguments),
                  f = a.isObject(arguments[0]) ? arguments[0] : arguments[1];
              return e.state(f), d;
            };
          }]), d.run(["$futureState", function(a, b) {
            e.itsNowRuntimeOhWhatAHappyDay(b);
          }]);
        }(a);
      }(angular);
    }(this), e();
  }), a.registerDynamic("6", [], !0, function(a, b, c) {
    this || self;
    !function(a, d) {
      "use strict";
      var e = ["ng", "oc.lazyLoad"],
          f = {},
          g = [],
          h = [],
          i = [],
          j = [],
          k = a.noop,
          l = {},
          m = [],
          n = a.module("oc.lazyLoad", ["ng"]);
      n.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function(b, c, n, o, r, s) {
        function t(b, c, d) {
          if (c) {
            var f,
                g,
                h,
                j = [];
            for (f = c.length - 1; f >= 0; f--)
              if (g = c[f], a.isString(g) || (g = w(g)), g && m.indexOf(g) === -1 && (!y[g] || i.indexOf(g) !== -1)) {
                var n = e.indexOf(g) === -1;
                if (h = q(g), n && (e.push(g), t(b, h.requires, d)), h._runBlocks.length > 0)
                  for (l[g] = []; h._runBlocks.length > 0; )
                    l[g].push(h._runBlocks.shift());
                a.isDefined(l[g]) && (n || d.rerun) && (j = j.concat(l[g])), v(b, h._invokeQueue, g, d.reconfig), v(b, h._configBlocks, g, d.reconfig), k(n ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", g), c.pop(), m.push(g);
              }
            var o = b.getInstanceInjector();
            a.forEach(j, function(a) {
              o.invoke(a);
            });
          }
        }
        function u(b, c) {
          function d(b, c) {
            var d,
                f = !0;
            return c.length && (d = e(b), a.forEach(c, function(a) {
              f = f && e(a) !== d;
            })), f;
          }
          function e(b) {
            return a.isArray(b) ? F(b.toString()) : a.isObject(b) ? F(E(b)) : a.isDefined(b) && null !== b ? F(b.toString()) : b;
          }
          var g = b[2][0],
              h = b[1],
              i = !1;
          a.isUndefined(f[c]) && (f[c] = {}), a.isUndefined(f[c][h]) && (f[c][h] = {});
          var j = function(a, b) {
            f[c][h].hasOwnProperty(a) || (f[c][h][a] = []), d(b, f[c][h][a]) && (i = !0, f[c][h][a].push(b), k("ocLazyLoad.componentLoaded", [c, h, a]));
          };
          if (a.isString(g))
            j(g, b[2][1]);
          else {
            if (!a.isObject(g))
              return !1;
            a.forEach(g, function(b, c) {
              a.isString(b) ? j(b, g[1]) : j(c, b);
            });
          }
          return i;
        }
        function v(b, c, d, e) {
          if (c) {
            var f,
                h,
                i,
                j;
            for (f = 0, h = c.length; f < h; f++)
              if (i = c[f], a.isArray(i)) {
                if (null !== b) {
                  if (!b.hasOwnProperty(i[0]))
                    throw new Error("unsupported provider " + i[0]);
                  j = b[i[0]];
                }
                var k = u(i, d);
                if ("invoke" !== i[1])
                  k && a.isDefined(j) && j[i[1]].apply(j, i[2]);
                else {
                  var l = function(b) {
                    var c = g.indexOf(d + "-" + b);
                    (c === -1 || e) && (c === -1 && g.push(d + "-" + b), a.isDefined(j) && j[i[1]].apply(j, i[2]));
                  };
                  if (a.isFunction(i[2][0]))
                    l(i[2][0]);
                  else if (a.isArray(i[2][0]))
                    for (var m = 0,
                        n = i[2][0].length; m < n; m++)
                      a.isFunction(i[2][0][m]) && l(i[2][0][m]);
                }
              }
          }
        }
        function w(b) {
          var c = null;
          return a.isString(b) ? c = b : a.isObject(b) && b.hasOwnProperty("name") && a.isString(b.name) && (c = b.name), c;
        }
        function x(b) {
          if (!a.isString(b))
            return !1;
          try {
            return q(b);
          } catch (a) {
            if (/No module/.test(a) || a.message.indexOf("$injector:nomod") > -1)
              return !1;
          }
        }
        var y = {},
            z = {
              $controllerProvider: b,
              $compileProvider: n,
              $filterProvider: o,
              $provide: c,
              $injector: r,
              $animateProvider: s
            },
            A = !1,
            B = !1,
            C = [],
            D = {};
        C.push = function(a) {
          this.indexOf(a) === -1 && Array.prototype.push.apply(this, arguments);
        }, this.config = function(b) {
          a.isDefined(b.modules) && (a.isArray(b.modules) ? a.forEach(b.modules, function(a) {
            y[a.name] = a;
          }) : y[b.modules.name] = b.modules), a.isDefined(b.debug) && (A = b.debug), a.isDefined(b.events) && (B = b.events);
        }, this._init = function(b) {
          if (0 === h.length) {
            var c = [b],
                f = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                g = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                i = function(a) {
                  return a && c.push(a);
                };
            a.forEach(f, function(c) {
              f[c] = !0, i(document.getElementById(c)), c = c.replace(":", "\\:"), "undefined" != typeof b[0] && b[0].querySelectorAll && (a.forEach(b[0].querySelectorAll("." + c), i), a.forEach(b[0].querySelectorAll("." + c + "\\:"), i), a.forEach(b[0].querySelectorAll("[" + c + "]"), i));
            }), a.forEach(c, function(c) {
              if (0 === h.length) {
                var d = " " + b.className + " ",
                    e = g.exec(d);
                e ? h.push((e[2] || "").replace(/\s+/g, ",")) : a.forEach(c.attributes, function(a) {
                  0 === h.length && f[a.name] && h.push(a.value);
                });
              }
            });
          }
          0 !== h.length || (d.jasmine || d.mocha) && a.isDefined(a.mock) || console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");
          var k = function b(c) {
            if (e.indexOf(c) === -1) {
              e.push(c);
              var d = a.module(c);
              v(null, d._invokeQueue, c), v(null, d._configBlocks, c), a.forEach(d.requires, b);
            }
          };
          a.forEach(h, function(a) {
            k(a);
          }), h = [], j.pop();
        };
        var E = function(b) {
          try {
            return JSON.stringify(b);
          } catch (d) {
            var c = [];
            return JSON.stringify(b, function(b, d) {
              if (a.isObject(d) && null !== d) {
                if (c.indexOf(d) !== -1)
                  return;
                c.push(d);
              }
              return d;
            });
          }
        },
            F = function(a) {
              var b,
                  c,
                  d,
                  e = 0;
              if (0 == a.length)
                return e;
              for (b = 0, d = a.length; b < d; b++)
                c = a.charCodeAt(b), e = (e << 5) - e + c, e |= 0;
              return e;
            };
        this.$get = ["$log", "$rootElement", "$rootScope", "$cacheFactory", "$q", function(b, c, d, g, i) {
          function l(a) {
            var c = i.defer();
            return b.error(a.message), c.reject(a), c.promise;
          }
          var n,
              o = g("ocLazyLoad");
          return A || (b = {}, b.error = a.noop, b.warn = a.noop, b.info = a.noop), z.getInstanceInjector = function() {
            return n ? n : n = c.data("$injector") || a.injector();
          }, k = function(a, c) {
            B && d.$broadcast(a, c), A && b.info(a, c);
          }, {
            _broadcast: k,
            _$log: b,
            _getFilesCache: function() {
              return o;
            },
            toggleWatch: function(a) {
              a ? j.push(!0) : j.pop();
            },
            getModuleConfig: function(b) {
              if (!a.isString(b))
                throw new Error("You need to give the name of the module to get");
              return y[b] ? a.copy(y[b]) : null;
            },
            setModuleConfig: function(b) {
              if (!a.isObject(b))
                throw new Error("You need to give the module config object to set");
              return y[b.name] = b, b;
            },
            getModules: function() {
              return e;
            },
            isLoaded: function(b) {
              var c = function(a) {
                var b = e.indexOf(a) > -1;
                return b || (b = !!x(a)), b;
              };
              if (a.isString(b) && (b = [b]), a.isArray(b)) {
                var d,
                    f;
                for (d = 0, f = b.length; d < f; d++)
                  if (!c(b[d]))
                    return !1;
                return !0;
              }
              throw new Error("You need to define the module(s) name(s)");
            },
            _getModuleName: w,
            _getModule: function(a) {
              try {
                return q(a);
              } catch (b) {
                throw (/No module/.test(b) || b.message.indexOf("$injector:nomod") > -1) && (b.message = 'The module "' + E(a) + '" that you are trying to load does not exist. ' + b.message), b;
              }
            },
            moduleExists: x,
            _loadDependencies: function(b, c) {
              var d,
                  e,
                  f,
                  g = [],
                  h = this;
              if (b = h._getModuleName(b), null === b)
                return i.when();
              try {
                d = h._getModule(b);
              } catch (a) {
                return l(a);
              }
              return e = h.getRequires(d), a.forEach(e, function(d) {
                if (a.isString(d)) {
                  var e = h.getModuleConfig(d);
                  if (null === e)
                    return void C.push(d);
                  d = e, e.name = void 0;
                }
                if (h.moduleExists(d.name))
                  return f = d.files.filter(function(a) {
                    return h.getModuleConfig(d.name).files.indexOf(a) < 0;
                  }), 0 !== f.length && h._$log.warn('Module "', b, '" attempted to redefine configuration for dependency. "', d.name, '"\n Additional Files Loaded:', f), a.isDefined(h.filesLoader) ? void g.push(h.filesLoader(d, c).then(function() {
                    return h._loadDependencies(d);
                  })) : l(new Error("Error: New dependencies need to be loaded from external files (" + d.files + "), but no loader has been defined."));
                if (a.isArray(d)) {
                  var i = [];
                  a.forEach(d, function(a) {
                    var b = h.getModuleConfig(a);
                    null === b ? i.push(a) : b.files && (i = i.concat(b.files));
                  }), i.length > 0 && (d = {files: i});
                } else
                  a.isObject(d) && d.hasOwnProperty("name") && d.name && (h.setModuleConfig(d), C.push(d.name));
                if (a.isDefined(d.files) && 0 !== d.files.length) {
                  if (!a.isDefined(h.filesLoader))
                    return l(new Error('Error: the module "' + d.name + '" is defined in external files (' + d.files + "), but no loader has been defined."));
                  g.push(h.filesLoader(d, c).then(function() {
                    return h._loadDependencies(d);
                  }));
                }
              }), i.all(g);
            },
            inject: function(b) {
              var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                  d = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                  e = this,
                  f = i.defer();
              if (a.isDefined(b) && null !== b) {
                if (a.isArray(b)) {
                  var g = [];
                  return a.forEach(b, function(a) {
                    g.push(e.inject(a, c, d));
                  }), i.all(g);
                }
                e._addToLoadList(e._getModuleName(b), !0, d);
              }
              if (h.length > 0) {
                var j = h.slice(),
                    k = function a(b) {
                      C.push(b), D[b] = f.promise, e._loadDependencies(b, c).then(function() {
                        try {
                          m = [], t(z, C, c);
                        } catch (a) {
                          return e._$log.error(a.message), void f.reject(a);
                        }
                        h.length > 0 ? a(h.shift()) : f.resolve(j);
                      }, function(a) {
                        f.reject(a);
                      });
                    };
                k(h.shift());
              } else {
                if (c && c.name && D[c.name])
                  return D[c.name];
                f.resolve();
              }
              return f.promise;
            },
            getRequires: function(b) {
              var c = [];
              return a.forEach(b.requires, function(a) {
                e.indexOf(a) === -1 && c.push(a);
              }), c;
            },
            _invokeQueue: v,
            _registerInvokeList: u,
            _register: t,
            _addToLoadList: p,
            _unregister: function(b) {
              a.isDefined(b) && a.isArray(b) && a.forEach(b, function(a) {
                f[a] = void 0;
              });
            }
          };
        }], this._init(a.element(d.document));
      }]);
      var o = a.bootstrap;
      a.bootstrap = function(b, c, d) {
        return e = ["ng", "oc.lazyLoad"], f = {}, g = [], h = [], i = [], j = [], k = a.noop, l = {}, m = [], a.forEach(c.slice(), function(a) {
          p(a, !0, !0);
        }), o(b, c, d);
      };
      var p = function(b, c, d) {
        (j.length > 0 || c) && a.isString(b) && h.indexOf(b) === -1 && (h.push(b), d && i.push(b));
      },
          q = a.module;
      a.module = function(a, b, c) {
        return p(a, !1, !0), q(a, b, c);
      }, "undefined" != typeof c && "undefined" != typeof b && c.exports === b && (c.exports = "oc.lazyLoad");
    }(angular, window), function(a) {
      "use strict";
      a.module("oc.lazyLoad").directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse", "$timeout", function(b, c, d, e, f) {
        return {
          restrict: "A",
          terminal: !0,
          priority: 1e3,
          compile: function(f, g) {
            var h = f[0].innerHTML;
            return f.html(""), function(f, g, i) {
              var j = e(i.ocLazyLoad);
              f.$watch(function() {
                return j(f) || i.ocLazyLoad;
              }, function(e) {
                a.isDefined(e) && b.load(e).then(function() {
                  d.enter(h, g), c(g.contents())(f);
                });
              }, !0);
            };
          }
        };
      }]);
    }(angular), function(a) {
      "use strict";
      a.module("oc.lazyLoad").config(["$provide", function(b) {
        b.decorator("$ocLazyLoad", ["$delegate", "$q", "$window", "$interval", function(b, c, d, e) {
          var f = !1,
              g = !1,
              h = d.document.getElementsByTagName("head")[0] || d.document.getElementsByTagName("body")[0];
          return b.buildElement = function(i, j, k) {
            var l,
                m,
                n = c.defer(),
                o = b._getFilesCache(),
                p = function(a) {
                  var b = (new Date).getTime();
                  return a.indexOf("?") >= 0 ? "&" === a.substring(0, a.length - 1) ? a + "_dc=" + b : a + "&_dc=" + b : a + "?_dc=" + b;
                };
            switch (a.isUndefined(o.get(j)) && o.put(j, n.promise), i) {
              case "css":
                l = d.document.createElement("link"), l.type = "text/css", l.rel = "stylesheet", l.href = k.cache === !1 ? p(j) : j;
                break;
              case "js":
                l = d.document.createElement("script"), l.src = k.cache === !1 ? p(j) : j;
                break;
              default:
                o.remove(j), n.reject(new Error('Requested type "' + i + '" is not known. Could not inject "' + j + '"'));
            }
            l.onload = l.onreadystatechange = function(a) {
              l.readyState && !/^c|loade/.test(l.readyState) || m || (l.onload = l.onreadystatechange = null, m = 1, b._broadcast("ocLazyLoad.fileLoaded", j), n.resolve(l));
            }, l.onerror = function() {
              o.remove(j), n.reject(new Error("Unable to load " + j));
            }, l.async = k.serie ? 0 : 1;
            var q = h.lastChild;
            if (k.insertBefore) {
              var r = a.element(a.isDefined(window.jQuery) ? k.insertBefore : document.querySelector(k.insertBefore));
              r && r.length > 0 && (q = r[0]);
            }
            if (q.parentNode.insertBefore(l, q), "css" == i) {
              if (!f) {
                var s = d.navigator.userAgent.toLowerCase();
                if (s.indexOf("phantomjs/1.9") > -1)
                  g = !0;
                else if (/iP(hone|od|ad)/.test(d.navigator.platform)) {
                  var t = d.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                      u = parseFloat([parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)].join("."));
                  g = u < 6;
                } else if (s.indexOf("android") > -1) {
                  var v = parseFloat(s.slice(s.indexOf("android") + 8));
                  g = v < 4.4;
                } else if (s.indexOf("safari") > -1) {
                  var w = s.match(/version\/([\.\d]+)/i);
                  g = w && w[1] && parseFloat(w[1]) < 6;
                }
              }
              if (g)
                var x = 1e3,
                    y = e(function() {
                      try {
                        l.sheet.cssRules, e.cancel(y), l.onload();
                      } catch (a) {
                        --x <= 0 && l.onerror();
                      }
                    }, 20);
            }
            return n.promise;
          }, b;
        }]);
      }]);
    }(angular), function(a) {
      "use strict";
      a.module("oc.lazyLoad").config(["$provide", function(b) {
        b.decorator("$ocLazyLoad", ["$delegate", "$q", function(b, c) {
          return b.filesLoader = function(d) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                f = [],
                g = [],
                h = [],
                i = [],
                j = null,
                k = b._getFilesCache();
            b.toggleWatch(!0), a.extend(e, d);
            var l = function(c) {
              var d,
                  l = null;
              if (a.isObject(c) && (l = c.type, c = c.path), j = k.get(c), a.isUndefined(j) || e.cache === !1) {
                if (null !== (d = /^(css|less|html|htm|js)?(?=!)/.exec(c)) && (l = d[1], c = c.substr(d[1].length + 1, c.length)), !l)
                  if (null !== (d = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(c)))
                    l = d[1];
                  else {
                    if (b.jsLoader.hasOwnProperty("ocLazyLoadLoader") || !b.jsLoader.hasOwnProperty("requirejs"))
                      return void b._$log.error("File type could not be determined. " + c);
                    l = "js";
                  }
                "css" !== l && "less" !== l || f.indexOf(c) !== -1 ? "html" !== l && "htm" !== l || g.indexOf(c) !== -1 ? "js" === l || h.indexOf(c) === -1 ? h.push(c) : b._$log.error("File type is not valid. " + c) : g.push(c) : f.push(c);
              } else
                j && i.push(j);
            };
            if (e.serie ? l(e.files.shift()) : a.forEach(e.files, function(a) {
              l(a);
            }), f.length > 0) {
              var m = c.defer();
              b.cssLoader(f, function(c) {
                a.isDefined(c) && b.cssLoader.hasOwnProperty("ocLazyLoadLoader") ? (b._$log.error(c), m.reject(c)) : m.resolve();
              }, e), i.push(m.promise);
            }
            if (g.length > 0) {
              var n = c.defer();
              b.templatesLoader(g, function(c) {
                a.isDefined(c) && b.templatesLoader.hasOwnProperty("ocLazyLoadLoader") ? (b._$log.error(c), n.reject(c)) : n.resolve();
              }, e), i.push(n.promise);
            }
            if (h.length > 0) {
              var o = c.defer();
              b.jsLoader(h, function(c) {
                a.isDefined(c) && (b.jsLoader.hasOwnProperty("ocLazyLoadLoader") || b.jsLoader.hasOwnProperty("requirejs")) ? (b._$log.error(c), o.reject(c)) : o.resolve();
              }, e), i.push(o.promise);
            }
            if (0 === i.length) {
              var p = c.defer(),
                  q = "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";
              return b._$log.error(q), p.reject(q), p.promise;
            }
            return e.serie && e.files.length > 0 ? c.all(i).then(function() {
              return b.filesLoader(d, e);
            }) : c.all(i).finally(function(a) {
              return b.toggleWatch(!1), a;
            });
          }, b.load = function(d) {
            var e,
                f = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                g = this,
                h = null,
                i = [],
                j = c.defer(),
                k = a.copy(d),
                l = a.copy(f);
            if (a.isArray(k))
              return a.forEach(k, function(a) {
                i.push(g.load(a, l));
              }), c.all(i).then(function(a) {
                j.resolve(a);
              }, function(a) {
                j.reject(a);
              }), j.promise;
            if (a.isString(k) ? (h = g.getModuleConfig(k), h || (h = {files: [k]})) : a.isObject(k) && (h = a.isDefined(k.path) && a.isDefined(k.type) ? {files: [k]} : g.setModuleConfig(k)), null === h) {
              var m = g._getModuleName(k);
              return e = 'Module "' + (m || "unknown") + '" is not configured, cannot load.', b._$log.error(e), j.reject(new Error(e)), j.promise;
            }
            a.isDefined(h.template) && (a.isUndefined(h.files) && (h.files = []), a.isString(h.template) ? h.files.push(h.template) : a.isArray(h.template) && h.files.concat(h.template));
            var n = a.extend({}, l, h);
            return a.isUndefined(h.files) && a.isDefined(h.name) && b.moduleExists(h.name) ? b.inject(h.name, n, !0) : (b.filesLoader(h, n).then(function() {
              b.inject(null, n).then(function(a) {
                j.resolve(a);
              }, function(a) {
                j.reject(a);
              });
            }, function(a) {
              j.reject(a);
            }), j.promise);
          }, b;
        }]);
      }]);
    }(angular), function(a) {
      "use strict";
      a.module("oc.lazyLoad").config(["$provide", function(b) {
        b.decorator("$ocLazyLoad", ["$delegate", "$q", function(b, c) {
          return b.cssLoader = function(d, e, f) {
            var g = [];
            a.forEach(d, function(a) {
              g.push(b.buildElement("css", a, f));
            }), c.all(g).then(function() {
              e();
            }, function(a) {
              e(a);
            });
          }, b.cssLoader.ocLazyLoadLoader = !0, b;
        }]);
      }]);
    }(angular), function(a) {
      "use strict";
      a.module("oc.lazyLoad").config(["$provide", function(b) {
        b.decorator("$ocLazyLoad", ["$delegate", "$q", function(b, c) {
          return b.jsLoader = function(d, e, f) {
            var g = [];
            a.forEach(d, function(a) {
              g.push(b.buildElement("js", a, f));
            }), c.all(g).then(function() {
              e();
            }, function(a) {
              e(a);
            });
          }, b.jsLoader.ocLazyLoadLoader = !0, b;
        }]);
      }]);
    }(angular), function(a) {
      "use strict";
      a.module("oc.lazyLoad").config(["$provide", function(b) {
        b.decorator("$ocLazyLoad", ["$delegate", "$templateCache", "$q", "$http", function(b, c, d, e) {
          return b.templatesLoader = function(f, g, h) {
            var i = [],
                j = b._getFilesCache();
            return a.forEach(f, function(b) {
              var f = d.defer();
              i.push(f.promise), e.get(b, h).then(function(d) {
                var e = d.data;
                a.isString(e) && e.length > 0 && a.forEach(a.element(e), function(a) {
                  "SCRIPT" === a.nodeName && "text/ng-template" === a.type && c.put(a.id, a.innerHTML);
                }), a.isUndefined(j.get(b)) && j.put(b, !0), f.resolve();
              }).catch(function(a) {
                f.reject(new Error('Unable to load template file "' + b + '": ' + a.data));
              });
            }), d.all(i).then(function() {
              g();
            }, function(a) {
              g(a);
            });
          }, b.templatesLoader.ocLazyLoadLoader = !0, b;
        }]);
      }]);
    }(angular), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
      var c;
      if (null == this)
        throw new TypeError('"this" is null or not defined');
      var d = Object(this),
          e = d.length >>> 0;
      if (0 === e)
        return -1;
      var f = +b || 0;
      if (Math.abs(f) === 1 / 0 && (f = 0), f >= e)
        return -1;
      for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); c < e; ) {
        if (c in d && d[c] === a)
          return c;
        c++;
      }
      return -1;
    });
  }), a.registerDynamic("7", ["6"], !0, function(a, b, c) {
    this || self;
    c.exports = a("6");
  }), a.register("8", ["4", "5", "7"], function(a, b) {
    "use strict";
    return a("default", function(a, b) {
      a.requires.push("ui.router"), a.requires.push("ct.ui.router.extras.core"), a.requires.push("ct.ui.router.extras.future"), a.requires.push("oc.lazyLoad");
      var c = ["$ocLazyLoadProvider", "$stateProvider", "$futureStateProvider", function(a, c, d) {
        d.stateFactory("load", ["$q", "$ocLazyLoad", "futureState", function(a, b, c) {
          var d = a.defer();
          switch (c.moduleExport) {
            case "module:name:constant":
              System.import(c.src).then(function(a) {
                b.load(angular.module(c.moduleExportName)).then(function() {
                  d.resolve();
                }, function(a) {
                  throw a;
                });
              });
              break;
            default:
              System.import(c.src).then(function(a) {
                var m = a;
                if (!m.name) {
                  if (m.default)
                    m = m.default;
                  else {
                    var e = window.Object.keys(m).filter(function(k) {
                      return k !== "__esModule";
                    });
                    m = m[e[0]];
                  }
                }
                b.load(m).then(function() {
                  d.resolve();
                }, function(a) {
                  throw a;
                });
              });
          }
          return d.promise;
        }]), b.forEach(function(a) {
          d.futureState(a);
        });
      }];
      return c;
    }), {
      setters: [function(a) {}, function(a) {}, function(a) {}],
      execute: function() {}
    };
  }), a.register("3", ["2", "8"], function(a, b) {
    "use strict";
    var c,
        d,
        e,
        f,
        g;
    return {
      setters: [function(a) {
        c = a.angular, d = a.CoreModule;
      }, function(a) {
        e = a.default;
      }],
      execute: function() {
        a("appLazyLoadRouterModule", f = "jspm.angular.lazyload-router"), a("futureRoutesCollection", g = []), c.module(f, [d]).config(e(c.module(f), g)), a("futureRoutesCollection", g), a("appLazyLoadRouterModule", f);
      }
    };
  });
})(function(a) {
  if ("function" == typeof define && define.amd)
    define("github:milenstanev/jspm.angular.lazyload-router@master/jspm.angular.lazyload-router.js", ["github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js"], a);
  else {
    if ("object" != typeof module || !module.exports || "function" != typeof require)
      throw new Error("Module must be loaded as AMD or CommonJS");
    module.exports = a(require("angular-core"));
  }
});

})();
(function() {
var define = System.amdDefine;
define("github:milenstanev/jspm.angular.lazyload-router@master.js", ["github:milenstanev/jspm.angular.lazyload-router@master/jspm.angular.lazyload-router.js"], function(main) {
  return main;
});

})();
System.register('src/futureRoutes.js', [], function (_export, _context) {
  "use strict";

  var futureRoutes;
  return {
    setters: [],
    execute: function () {
      _export('futureRoutes', futureRoutes = [{
        stateName: 'home',
        urlPrefix: '/home',
        type: 'load',
        src: 'homeComponent',
        moduleExport: 'module:name:constant',
        moduleExportName: 'app.home'
      }, {
        stateName: 'counter',
        urlPrefix: '/counter',
        type: 'load',
        src: 'counterComponent',
        moduleExport: 'module:name:constant',
        moduleExportName: 'app.counter'
      }, {
        stateName: 'timer',
        urlPrefix: '/timer',
        type: 'load',
        src: 'timerComponent',
        moduleExport: 'module:name:constant',
        moduleExportName: 'app.timer'
      }, {
        stateName: 'notes',
        urlPrefix: '/notes',
        type: 'load',
        src: 'notesComponent',
        moduleExport: 'module:name:constant',
        moduleExportName: 'app.notes'
      }]);

      _export('futureRoutes', futureRoutes);
    }
  };
});
System.register('src/index.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js', 'github:milenstanev/mstanev.angular.1.x.x.core@0.0.5.js', 'github:milenstanev/jspm.angular.lazyload-router@master.js', 'src/futureRoutes.js'], function (_export, _context) {
  "use strict";

  var _toConsumableArray, angular, CoreModule, appLazyLoadRouterModule, futureRoutesCollection, futureRoutes, defaultView, Module;

  function bootstrapApp() {
    if (!document.body || document.body.hasAttribute('data-ng-app-bootstrap')) {
      return;
    }
    document.body.setAttribute('data-ng-app-bootstrap', '1');
    angular.bootstrap(document.body, [Module.name]);
  }

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs) {
      _toConsumableArray = _npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs.default;
    }, function (_githubMilenstanevMstanevAngular1XXCore005Js) {
      angular = _githubMilenstanevMstanevAngular1XXCore005Js.angular;
      CoreModule = _githubMilenstanevMstanevAngular1XXCore005Js.CoreModule;
    }, function (_githubMilenstanevJspmAngularLazyloadRouterMasterJs) {
      appLazyLoadRouterModule = _githubMilenstanevJspmAngularLazyloadRouterMasterJs.appLazyLoadRouterModule;
      futureRoutesCollection = _githubMilenstanevJspmAngularLazyloadRouterMasterJs.futureRoutesCollection;
    }, function (_srcFutureRoutesJs) {
      futureRoutes = _srcFutureRoutesJs.futureRoutes;
    }],
    execute: function () {
      defaultView = futureRoutes[0].urlPrefix || '/home';

      Object.assign(futureRoutesCollection, [].concat(_toConsumableArray(futureRoutes)));

      _export('Module', Module = angular.module('app', [CoreModule, appLazyLoadRouterModule]).constant('defaultView', defaultView).config(function ($stateProvider, $urlRouterProvider, defaultView) {
        $stateProvider.state('404', {
          url: '/404',
          component: 'page404'
        });

        return $urlRouterProvider.otherwise(defaultView || '/404');
      }).component('page404', { template: '404' }));

      _export('Module', Module);

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapApp);
      } else {
        bootstrapApp();
      }
    }
  };
});