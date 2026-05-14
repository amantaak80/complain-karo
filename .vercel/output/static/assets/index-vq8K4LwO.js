const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/quick-Dsjiq_nI.js",
      "assets/map-pin-SAJ4yagn.js",
      "assets/arrow-left-D2GazdMM.js",
      "assets/emergency-DdwLikCc.js",
      "assets/complain-hpqwZF18.js",
      "assets/circle-check-BTzKkw14.js",
      "assets/community-BgmWhhQq.js",
      "assets/index-DAblNTKk.js",
    ]),
) => i.map((i) => d[i]);
function q0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ic = { exports: {} },
  wi = {};
var km;
function Y0() {
  if (km) return wi;
  km = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(u, c, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var m in c) m !== "key" && (f[m] = c[m]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: n, type: u, key: h, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((wi.Fragment = i), (wi.jsx = s), (wi.jsxs = s), wi);
}
var Pm;
function Q0() {
  return (Pm || ((Pm = 1), (ic.exports = Y0())), ic.exports);
}
var Z = Q0(),
  sc = { exports: {} },
  ut = {};
var Jm;
function G0() {
  if (Jm) return ut;
  Jm = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function E(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (_ && O[_]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    R = {};
  function w(O, G, P) {
    ((this.props = O),
      (this.context = G),
      (this.refs = R),
      (this.updater = P || A));
  }
  ((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (O, G) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, G, "setState");
    }),
    (w.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    }));
  function q() {}
  q.prototype = w.prototype;
  function Q(O, G, P) {
    ((this.props = O),
      (this.context = G),
      (this.refs = R),
      (this.updater = P || A));
  }
  var H = (Q.prototype = new q());
  ((H.constructor = Q), C(H, w.prototype), (H.isPureReactComponent = !0));
  var F = Array.isArray;
  function J() {}
  var X = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function I(O, G, P) {
    var $ = P.ref;
    return {
      $$typeof: n,
      type: O,
      key: G,
      ref: $ !== void 0 ? $ : null,
      props: P,
    };
  }
  function st(O, G) {
    return I(O.type, G, O.props);
  }
  function nt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n;
  }
  function mt(O) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (P) {
        return G[P];
      })
    );
  }
  var xt = /\/+/g;
  function Gt(O, G) {
    return typeof O == "object" && O !== null && O.key != null
      ? mt("" + O.key)
      : G.toString(36);
  }
  function Nt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(J, J)
            : ((O.status = "pending"),
              O.then(
                function (G) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = G));
                },
                function (G) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = G));
                },
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function j(O, G, P, $, at) {
    var ft = typeof O;
    (ft === "undefined" || ft === "boolean") && (O = null);
    var gt = !1;
    if (O === null) gt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case n:
            case i:
              gt = !0;
              break;
            case S:
              return ((gt = O._init), j(gt(O._payload), G, P, $, at));
          }
      }
    if (gt)
      return (
        (at = at(O)),
        (gt = $ === "" ? "." + Gt(O, 0) : $),
        F(at)
          ? ((P = ""),
            gt != null && (P = gt.replace(xt, "$&/") + "/"),
            j(at, G, P, "", function (nn) {
              return nn;
            }))
          : at != null &&
            (nt(at) &&
              (at = st(
                at,
                P +
                  (at.key == null || (O && O.key === at.key)
                    ? ""
                    : ("" + at.key).replace(xt, "$&/") + "/") +
                  gt,
              )),
            G.push(at)),
        1
      );
    gt = 0;
    var Vt = $ === "" ? "." : $ + ":";
    if (F(O))
      for (var zt = 0; zt < O.length; zt++)
        (($ = O[zt]), (ft = Vt + Gt($, zt)), (gt += j($, G, P, ft, at)));
    else if (((zt = E(O)), typeof zt == "function"))
      for (O = zt.call(O), zt = 0; !($ = O.next()).done; )
        (($ = $.value), (ft = Vt + Gt($, zt++)), (gt += j($, G, P, ft, at)));
    else if (ft === "object") {
      if (typeof O.then == "function") return j(Nt(O), G, P, $, at);
      throw (
        (G = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return gt;
  }
  function k(O, G, P) {
    if (O == null) return O;
    var $ = [],
      at = 0;
    return (
      j(O, $, "", "", function (ft) {
        return G.call(P, ft, at++);
      }),
      $
    );
  }
  function it(O) {
    if (O._status === -1) {
      var G = O._result;
      ((G = G()),
        G.then(
          function (P) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = P));
          },
          function (P) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = P));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = G)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Et =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    Tt = {
      map: k,
      forEach: function (O, G, P) {
        k(
          O,
          function () {
            G.apply(this, arguments);
          },
          P,
        );
      },
      count: function (O) {
        var G = 0;
        return (
          k(O, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (O) {
        return (
          k(O, function (G) {
            return G;
          }) || []
        );
      },
      only: function (O) {
        if (!nt(O))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return O;
      },
    };
  return (
    (ut.Activity = v),
    (ut.Children = Tt),
    (ut.Component = w),
    (ut.Fragment = s),
    (ut.Profiler = c),
    (ut.PureComponent = Q),
    (ut.StrictMode = u),
    (ut.Suspense = p),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (ut.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return X.H.useMemoCache(O);
      },
    }),
    (ut.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (ut.cacheSignal = function () {
      return null;
    }),
    (ut.cloneElement = function (O, G, P) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + ".",
        );
      var $ = C({}, O.props),
        at = O.key;
      if (G != null)
        for (ft in (G.key !== void 0 && (at = "" + G.key), G))
          !K.call(G, ft) ||
            ft === "key" ||
            ft === "__self" ||
            ft === "__source" ||
            (ft === "ref" && G.ref === void 0) ||
            ($[ft] = G[ft]);
      var ft = arguments.length - 2;
      if (ft === 1) $.children = P;
      else if (1 < ft) {
        for (var gt = Array(ft), Vt = 0; Vt < ft; Vt++)
          gt[Vt] = arguments[Vt + 2];
        $.children = gt;
      }
      return I(O.type, at, $);
    }),
    (ut.createContext = function (O) {
      return (
        (O = {
          $$typeof: h,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: f, _context: O }),
        O
      );
    }),
    (ut.createElement = function (O, G, P) {
      var $,
        at = {},
        ft = null;
      if (G != null)
        for ($ in (G.key !== void 0 && (ft = "" + G.key), G))
          K.call(G, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (at[$] = G[$]);
      var gt = arguments.length - 2;
      if (gt === 1) at.children = P;
      else if (1 < gt) {
        for (var Vt = Array(gt), zt = 0; zt < gt; zt++)
          Vt[zt] = arguments[zt + 2];
        at.children = Vt;
      }
      if (O && O.defaultProps)
        for ($ in ((gt = O.defaultProps), gt))
          at[$] === void 0 && (at[$] = gt[$]);
      return I(O, ft, at);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (O) {
      return { $$typeof: m, render: O };
    }),
    (ut.isValidElement = nt),
    (ut.lazy = function (O) {
      return { $$typeof: S, _payload: { _status: -1, _result: O }, _init: it };
    }),
    (ut.memo = function (O, G) {
      return { $$typeof: y, type: O, compare: G === void 0 ? null : G };
    }),
    (ut.startTransition = function (O) {
      var G = X.T,
        P = {};
      X.T = P;
      try {
        var $ = O(),
          at = X.S;
        (at !== null && at(P, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(J, Et));
      } catch (ft) {
        Et(ft);
      } finally {
        (G !== null && P.types !== null && (G.types = P.types), (X.T = G));
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (ut.use = function (O) {
      return X.H.use(O);
    }),
    (ut.useActionState = function (O, G, P) {
      return X.H.useActionState(O, G, P);
    }),
    (ut.useCallback = function (O, G) {
      return X.H.useCallback(O, G);
    }),
    (ut.useContext = function (O) {
      return X.H.useContext(O);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (O, G) {
      return X.H.useDeferredValue(O, G);
    }),
    (ut.useEffect = function (O, G) {
      return X.H.useEffect(O, G);
    }),
    (ut.useEffectEvent = function (O) {
      return X.H.useEffectEvent(O);
    }),
    (ut.useId = function () {
      return X.H.useId();
    }),
    (ut.useImperativeHandle = function (O, G, P) {
      return X.H.useImperativeHandle(O, G, P);
    }),
    (ut.useInsertionEffect = function (O, G) {
      return X.H.useInsertionEffect(O, G);
    }),
    (ut.useLayoutEffect = function (O, G) {
      return X.H.useLayoutEffect(O, G);
    }),
    (ut.useMemo = function (O, G) {
      return X.H.useMemo(O, G);
    }),
    (ut.useOptimistic = function (O, G) {
      return X.H.useOptimistic(O, G);
    }),
    (ut.useReducer = function (O, G, P) {
      return X.H.useReducer(O, G, P);
    }),
    (ut.useRef = function (O) {
      return X.H.useRef(O);
    }),
    (ut.useState = function (O) {
      return X.H.useState(O);
    }),
    (ut.useSyncExternalStore = function (O, G, P) {
      return X.H.useSyncExternalStore(O, G, P);
    }),
    (ut.useTransition = function () {
      return X.H.useTransition();
    }),
    (ut.version = "19.2.5"),
    ut
  );
}
var Fm;
function Zi() {
  return (Fm || ((Fm = 1), (sc.exports = G0())), sc.exports);
}
var tt = Zi();
const Hi = q0(tt);
var rc = { exports: {} },
  Ci = {},
  uc = { exports: {} },
  oc = {};
var Im;
function V0() {
  return (
    Im ||
      ((Im = 1),
      (function (n) {
        function i(j, k) {
          var it = j.length;
          j.push(k);
          t: for (; 0 < it; ) {
            var Et = (it - 1) >>> 1,
              Tt = j[Et];
            if (0 < c(Tt, k)) ((j[Et] = k), (j[it] = Tt), (it = Et));
            else break t;
          }
        }
        function s(j) {
          return j.length === 0 ? null : j[0];
        }
        function u(j) {
          if (j.length === 0) return null;
          var k = j[0],
            it = j.pop();
          if (it !== k) {
            j[0] = it;
            t: for (var Et = 0, Tt = j.length, O = Tt >>> 1; Et < O; ) {
              var G = 2 * (Et + 1) - 1,
                P = j[G],
                $ = G + 1,
                at = j[$];
              if (0 > c(P, it))
                $ < Tt && 0 > c(at, P)
                  ? ((j[Et] = at), (j[$] = it), (Et = $))
                  : ((j[Et] = P), (j[G] = it), (Et = G));
              else if ($ < Tt && 0 > c(at, it))
                ((j[Et] = at), (j[$] = it), (Et = $));
              else break t;
            }
          }
          return k;
        }
        function c(j, k) {
          var it = j.sortIndex - k.sortIndex;
          return it !== 0 ? it : j.id - k.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            m = h.now();
          n.unstable_now = function () {
            return h.now() - m;
          };
        }
        var p = [],
          y = [],
          S = 1,
          v = null,
          _ = 3,
          E = !1,
          A = !1,
          C = !1,
          R = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function H(j) {
          for (var k = s(y); k !== null; ) {
            if (k.callback === null) u(y);
            else if (k.startTime <= j)
              (u(y), (k.sortIndex = k.expirationTime), i(p, k));
            else break;
            k = s(y);
          }
        }
        function F(j) {
          if (((C = !1), H(j), !A))
            if (s(p) !== null) ((A = !0), J || ((J = !0), mt()));
            else {
              var k = s(y);
              k !== null && Nt(F, k.startTime - j);
            }
        }
        var J = !1,
          X = -1,
          K = 5,
          I = -1;
        function st() {
          return R ? !0 : !(n.unstable_now() - I < K);
        }
        function nt() {
          if (((R = !1), J)) {
            var j = n.unstable_now();
            I = j;
            var k = !0;
            try {
              t: {
                ((A = !1), C && ((C = !1), q(X), (X = -1)), (E = !0));
                var it = _;
                try {
                  e: {
                    for (
                      H(j), v = s(p);
                      v !== null && !(v.expirationTime > j && st());
                    ) {
                      var Et = v.callback;
                      if (typeof Et == "function") {
                        ((v.callback = null), (_ = v.priorityLevel));
                        var Tt = Et(v.expirationTime <= j);
                        if (((j = n.unstable_now()), typeof Tt == "function")) {
                          ((v.callback = Tt), H(j), (k = !0));
                          break e;
                        }
                        (v === s(p) && u(p), H(j));
                      } else u(p);
                      v = s(p);
                    }
                    if (v !== null) k = !0;
                    else {
                      var O = s(y);
                      (O !== null && Nt(F, O.startTime - j), (k = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (_ = it), (E = !1));
                }
                k = void 0;
              }
            } finally {
              k ? mt() : (J = !1);
            }
          }
        }
        var mt;
        if (typeof Q == "function")
          mt = function () {
            Q(nt);
          };
        else if (typeof MessageChannel < "u") {
          var xt = new MessageChannel(),
            Gt = xt.port2;
          ((xt.port1.onmessage = nt),
            (mt = function () {
              Gt.postMessage(null);
            }));
        } else
          mt = function () {
            w(nt, 0);
          };
        function Nt(j, k) {
          X = w(function () {
            j(n.unstable_now());
          }, k);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (n.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (K = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (n.unstable_next = function (j) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = _;
            }
            var it = _;
            _ = k;
            try {
              return j();
            } finally {
              _ = it;
            }
          }),
          (n.unstable_requestPaint = function () {
            R = !0;
          }),
          (n.unstable_runWithPriority = function (j, k) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var it = _;
            _ = j;
            try {
              return k();
            } finally {
              _ = it;
            }
          }),
          (n.unstable_scheduleCallback = function (j, k, it) {
            var Et = n.unstable_now();
            switch (
              (typeof it == "object" && it !== null
                ? ((it = it.delay),
                  (it = typeof it == "number" && 0 < it ? Et + it : Et))
                : (it = Et),
              j)
            ) {
              case 1:
                var Tt = -1;
                break;
              case 2:
                Tt = 250;
                break;
              case 5:
                Tt = 1073741823;
                break;
              case 4:
                Tt = 1e4;
                break;
              default:
                Tt = 5e3;
            }
            return (
              (Tt = it + Tt),
              (j = {
                id: S++,
                callback: k,
                priorityLevel: j,
                startTime: it,
                expirationTime: Tt,
                sortIndex: -1,
              }),
              it > Et
                ? ((j.sortIndex = it),
                  i(y, j),
                  s(p) === null &&
                    j === s(y) &&
                    (C ? (q(X), (X = -1)) : (C = !0), Nt(F, it - Et)))
                : ((j.sortIndex = Tt),
                  i(p, j),
                  A || E || ((A = !0), J || ((J = !0), mt()))),
              j
            );
          }),
          (n.unstable_shouldYield = st),
          (n.unstable_wrapCallback = function (j) {
            var k = _;
            return function () {
              var it = _;
              _ = k;
              try {
                return j.apply(this, arguments);
              } finally {
                _ = it;
              }
            };
          }));
      })(oc)),
    oc
  );
}
var $m;
function X0() {
  return ($m || (($m = 1), (uc.exports = V0())), uc.exports);
}
var cc = { exports: {} },
  fe = {};
var Wm;
function K0() {
  if (Wm) return fe;
  Wm = 1;
  var n = Zi();
  function i(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var u = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(p, y, S) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: y,
      implementation: S,
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, y) {
    if (p === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (fe.createPortal = function (p, y) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return f(p, y, null, S);
    }),
    (fe.flushSync = function (p) {
      var y = h.T,
        S = u.p;
      try {
        if (((h.T = null), (u.p = 2), p)) return p();
      } finally {
        ((h.T = y), (u.p = S), u.d.f());
      }
    }),
    (fe.preconnect = function (p, y) {
      typeof p == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        u.d.C(p, y));
    }),
    (fe.prefetchDNS = function (p) {
      typeof p == "string" && u.d.D(p);
    }),
    (fe.preinit = function (p, y) {
      if (typeof p == "string" && y && typeof y.as == "string") {
        var S = y.as,
          v = m(S, y.crossOrigin),
          _ = typeof y.integrity == "string" ? y.integrity : void 0,
          E = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        S === "style"
          ? u.d.S(p, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: E,
            })
          : S === "script" &&
            u.d.X(p, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: E,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (p, y) {
      if (typeof p == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var S = m(y.as, y.crossOrigin);
            u.d.M(p, {
              crossOrigin: S,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && u.d.M(p);
    }),
    (fe.preload = function (p, y) {
      if (
        typeof p == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var S = y.as,
          v = m(S, y.crossOrigin);
        u.d.L(p, S, {
          crossOrigin: v,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (p, y) {
      if (typeof p == "string")
        if (y) {
          var S = m(y.as, y.crossOrigin);
          u.d.m(p, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else u.d.m(p);
    }),
    (fe.requestFormReset = function (p) {
      u.d.r(p);
    }),
    (fe.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (fe.useFormState = function (p, y, S) {
      return h.H.useFormState(p, y, S);
    }),
    (fe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.5"),
    fe
  );
}
var ty;
function ep() {
  if (ty) return cc.exports;
  ty = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (cc.exports = K0()), cc.exports);
}
var ey;
function Z0() {
  if (ey) return Ci;
  ey = 1;
  var n = X0(),
    i = Zi(),
    s = ep();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t) throw Error(u(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var r = a.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((l = r.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === a) return (p(r), t);
          if (o === l) return (p(r), e);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== l.return) ((a = r), (l = o));
      else {
        for (var d = !1, g = r.child; g; ) {
          if (g === a) {
            ((d = !0), (a = r), (l = o));
            break;
          }
          if (g === l) {
            ((d = !0), (l = r), (a = o));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = o.child; g; ) {
            if (g === a) {
              ((d = !0), (a = o), (l = r));
              break;
            }
            if (g === l) {
              ((d = !0), (l = o), (a = r));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (a.alternate !== l) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = S(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    _ = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    st = Symbol.for("react.memo_cache_sentinel"),
    nt = Symbol.iterator;
  function mt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (nt && t[nt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var xt = Symbol.for("react.client.reference");
  function Gt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === xt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case w:
        return "Profiler";
      case R:
        return "StrictMode";
      case F:
        return "Suspense";
      case J:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case H:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case X:
          return (
            (e = t.displayName || null),
            e !== null ? e : Gt(t.type) || "Memo"
          );
        case K:
          ((e = t._payload), (t = t._init));
          try {
            return Gt(t(e));
          } catch {}
      }
    return null;
  }
  var Nt = Array.isArray,
    j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = { pending: !1, data: null, method: null, action: null },
    Et = [],
    Tt = -1;
  function O(t) {
    return { current: t };
  }
  function G(t) {
    0 > Tt || ((t.current = Et[Tt]), (Et[Tt] = null), Tt--);
  }
  function P(t, e) {
    (Tt++, (Et[Tt] = t.current), (t.current = e));
  }
  var $ = O(null),
    at = O(null),
    ft = O(null),
    gt = O(null);
  function Vt(t, e) {
    switch ((P(ft, e), P(at, t), P($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? pm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = pm(e)), (t = vm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (G($), P($, t));
  }
  function zt() {
    (G($), G(at), G(ft));
  }
  function nn(t) {
    t.memoizedState !== null && P(gt, t);
    var e = $.current,
      a = vm(e, t.type);
    e !== a && (P(at, t), P($, a));
  }
  function an(t) {
    (at.current === t && (G($), G(at)),
      gt.current === t && (G(gt), (xi._currentValue = it)));
  }
  var On, Ul;
  function Pe(t) {
    if (On === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((On = (e && e[1]) || ""),
          (Ul =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      On +
      t +
      Ul
    );
  }
  var Nl = !1;
  function Ya(t, e) {
    if (!t || Nl) return "";
    Nl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (N) {
                  var U = N;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (N) {
                  U = N;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                U = N;
              }
              (V = t()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (N) {
            if (N && U && typeof N.stack == "string") return [N.stack, U.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        g = o[1];
      if (d && g) {
        var x = d.split(`
`),
          L = g.split(`
`);
        for (
          r = l = 0;
          l < x.length && !x[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; r < L.length && !L[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (l === x.length || r === L.length)
          for (
            l = x.length - 1, r = L.length - 1;
            1 <= l && 0 <= r && x[l] !== L[r];
          )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (x[l] !== L[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || x[l] !== L[r])) {
                  var B =
                    `
` + x[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", t.displayName)),
                    B
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ((Nl = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? Pe(a) : "";
  }
  function $i(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(t.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Pe("Suspense Fallback")
          : Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return Ya(t.type, !1);
      case 11:
        return Ya(t.type.render, !1);
      case 1:
        return Ya(t.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function ln(t) {
    try {
      var e = "",
        a = null;
      do ((e += $i(t, a)), (a = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var da = Object.prototype.hasOwnProperty,
    Ve = n.unstable_scheduleCallback,
    jl = n.unstable_cancelCallback,
    Wi = n.unstable_shouldYield,
    Kr = n.unstable_requestPaint,
    ce = n.unstable_now,
    Ut = n.unstable_getCurrentPriorityLevel,
    le = n.unstable_ImmediatePriority,
    Je = n.unstable_UserBlockingPriority,
    Qa = n.unstable_NormalPriority,
    bv = n.unstable_LowPriority,
    Jc = n.unstable_IdlePriority,
    _v = n.log,
    Ev = n.unstable_setDisableYieldValue,
    Bl = null,
    Te = null;
  function wn(t) {
    if (
      (typeof _v == "function" && Ev(t),
      Te && typeof Te.setStrictMode == "function")
    )
      try {
        Te.setStrictMode(Bl, t);
      } catch {}
  }
  var xe = Math.clz32 ? Math.clz32 : xv,
    Rv = Math.log,
    Tv = Math.LN2;
  function xv(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Rv(t) / Tv) | 0)) | 0);
  }
  var ts = 256,
    es = 262144,
    ns = 4194304;
  function ha(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function as(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      o = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~o),
          l !== 0
            ? (r = ha(l))
            : ((d &= g),
              d !== 0
                ? (r = ha(d))
                : a || ((a = g & ~t), a !== 0 && (r = ha(a)))))
        : ((g = l & ~o),
          g !== 0
            ? (r = ha(g))
            : d !== 0
              ? (r = ha(d))
              : a || ((a = l & ~t), a !== 0 && (r = ha(a)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & o) === 0 &&
            ((o = r & -r),
            (a = e & -e),
            o >= a || (o === 32 && (a & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Hl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Av(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fc() {
    var t = ns;
    return ((ns <<= 1), (ns & 62914560) === 0 && (ns = 4194304), t);
  }
  function Zr(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function ql(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Mv(t, e, a, l, r, o) {
    var d = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var g = t.entanglements,
      x = t.expirationTimes,
      L = t.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var B = 31 - xe(a),
        V = 1 << B;
      ((g[B] = 0), (x[B] = -1));
      var U = L[B];
      if (U !== null)
        for (L[B] = null, B = 0; B < U.length; B++) {
          var N = U[B];
          N !== null && (N.lane &= -536870913);
        }
      a &= ~V;
    }
    (l !== 0 && Ic(t, l, 0),
      o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e)));
  }
  function Ic(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - xe(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function $c(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - xe(a),
        r = 1 << l;
      ((r & e) | (t[l] & e) && (t[l] |= e), (a &= ~r));
    }
  }
  function Wc(t, e) {
    var a = e & -e;
    return (
      (a = (a & 42) !== 0 ? 1 : kr(a)),
      (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    );
  }
  function kr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Pr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function tf() {
    var t = k.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ym(t.type));
  }
  function ef(t, e) {
    var a = k.p;
    try {
      return ((k.p = t), e());
    } finally {
      k.p = a;
    }
  }
  var Cn = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + Cn,
    me = "__reactProps$" + Cn,
    Ga = "__reactContainer$" + Cn,
    Jr = "__reactEvents$" + Cn,
    Ov = "__reactListeners$" + Cn,
    wv = "__reactHandles$" + Cn,
    nf = "__reactResources$" + Cn,
    Yl = "__reactMarker$" + Cn;
  function Fr(t) {
    (delete t[ie], delete t[me], delete t[Jr], delete t[Ov], delete t[wv]);
  }
  function Va(t) {
    var e = t[ie];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[Ga] || a[ie])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = Tm(t); t !== null; ) {
            if ((a = t[ie])) return a;
            t = Tm(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function Xa(t) {
    if ((t = t[ie] || t[Ga])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Ka(t) {
    var e = t[nf];
    return (
      e ||
        (e = t[nf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function te(t) {
    t[Yl] = !0;
  }
  var af = new Set(),
    lf = {};
  function ma(t, e) {
    (Za(t, e), Za(t + "Capture", e));
  }
  function Za(t, e) {
    for (lf[t] = e, t = 0; t < e.length; t++) af.add(e[t]);
  }
  var Cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    sf = {},
    rf = {};
  function zv(t) {
    return da.call(rf, t)
      ? !0
      : da.call(sf, t)
        ? !1
        : Cv.test(t)
          ? (rf[t] = !0)
          : ((sf[t] = !0), !1);
  }
  function ls(t, e, a) {
    if (zv(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function is(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function sn(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  function Le(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function uf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Dv(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var r = l.get,
        o = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            ((a = "" + d), o.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Ir(t) {
    if (!t._valueTracker) {
      var e = uf(t) ? "checked" : "value";
      t._valueTracker = Dv(t, e, "" + t[e]);
    }
  }
  function of(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = "";
    return (
      t && (l = uf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function ss(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Lv = /[\n"\\]/g;
  function Ue(t) {
    return t.replace(Lv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function $r(t, e, a, l, r, o, d, g) {
    ((t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Le(e))
          : t.value !== "" + Le(e) && (t.value = "" + Le(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Wr(t, d, Le(e))
        : a != null
          ? Wr(t, d, Le(a))
          : l != null && t.removeAttribute("value"),
      r == null && o != null && (t.defaultChecked = !!o),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + Le(g))
        : t.removeAttribute("name"));
  }
  function cf(t, e, a, l, r, o, d, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || a != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        Ir(t);
        return;
      }
      ((a = a != null ? "" + Le(a) : ""),
        (e = e != null ? "" + Le(e) : a),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? r),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = g ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      Ir(t));
  }
  function Wr(t, e, a) {
    (e === "number" && ss(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function ka(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < a.length; r++) e["$" + a[r]] = !0;
      for (a = 0; a < t.length; a++)
        ((r = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== r && (t[a].selected = r),
          r && l && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + Le(a), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === a) {
          ((t[r].selected = !0), l && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ff(t, e, a) {
    if (
      e != null &&
      ((e = "" + Le(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Le(a) : "";
  }
  function df(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(u(92));
        if (Nt(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (e = a));
    }
    ((a = Le(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== "" && l !== null && (t.value = l),
      Ir(t));
  }
  function Pa(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Uv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function hf(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, a)
        : typeof a != "number" || a === 0 || Uv.has(e)
          ? e === "float"
            ? (t.cssFloat = a)
            : (t[e] = ("" + a).trim())
          : (t[e] = a + "px");
  }
  function mf(t, e, a) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var r in e)
        ((l = e[r]), e.hasOwnProperty(r) && a[r] !== l && hf(t, r, l));
    } else for (var o in e) e.hasOwnProperty(o) && hf(t, o, e[o]);
  }
  function tu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Nv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function rs(t) {
    return jv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function rn() {}
  var eu = null;
  function nu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ja = null,
    Fa = null;
  function yf(t) {
    var e = Xa(t);
    if (e && (t = e.stateNode)) {
      var a = t[me] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            ($r(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ue("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var r = l[me] || null;
                if (!r) throw Error(u(90));
                $r(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (e = 0; e < a.length; e++)
              ((l = a[e]), l.form === t.form && of(l));
          }
          break t;
        case "textarea":
          ff(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((e = a.value), e != null && ka(t, !!a.multiple, e, !1));
      }
    }
  }
  var au = !1;
  function pf(t, e, a) {
    if (au) return t(e, a);
    au = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((au = !1),
        (Ja !== null || Fa !== null) &&
          (Ps(), Ja && ((e = Ja), (t = Fa), (Fa = Ja = null), yf(e), t)))
      )
        for (e = 0; e < t.length; e++) yf(t[e]);
    }
  }
  function Gl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[me] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(u(231, e, typeof a));
    return a;
  }
  var un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lu = !1;
  if (un)
    try {
      var Vl = {};
      (Object.defineProperty(Vl, "passive", {
        get: function () {
          lu = !0;
        },
      }),
        window.addEventListener("test", Vl, Vl),
        window.removeEventListener("test", Vl, Vl));
    } catch {
      lu = !1;
    }
  var zn = null,
    iu = null,
    us = null;
  function vf() {
    if (us) return us;
    var t,
      e = iu,
      a = e.length,
      l,
      r = "value" in zn ? zn.value : zn.textContent,
      o = r.length;
    for (t = 0; t < a && e[t] === r[t]; t++);
    var d = a - t;
    for (l = 1; l <= d && e[a - l] === r[o - l]; l++);
    return (us = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function os(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function cs() {
    return !0;
  }
  function gf() {
    return !1;
  }
  function ye(t) {
    function e(a, l, r, o, d) {
      ((this._reactName = a),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in t)
        t.hasOwnProperty(g) && ((a = t[g]), (this[g] = a ? a(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? cs
          : gf),
        (this.isPropagationStopped = gf),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = cs));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = cs));
        },
        persist: function () {},
        isPersistent: cs,
      }),
      e
    );
  }
  var ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fs = ye(ya),
    Xl = v({}, ya, { view: 0, detail: 0 }),
    Bv = ye(Xl),
    su,
    ru,
    Kl,
    ds = v({}, Xl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ou,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Kl &&
              (Kl && t.type === "mousemove"
                ? ((su = t.screenX - Kl.screenX), (ru = t.screenY - Kl.screenY))
                : (ru = su = 0),
              (Kl = t)),
            su);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ru;
      },
    }),
    Sf = ye(ds),
    Hv = v({}, ds, { dataTransfer: 0 }),
    qv = ye(Hv),
    Yv = v({}, Xl, { relatedTarget: 0 }),
    uu = ye(Yv),
    Qv = v({}, ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gv = ye(Qv),
    Vv = v({}, ya, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Xv = ye(Vv),
    Kv = v({}, ya, { data: 0 }),
    bf = ye(Kv),
    Zv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Pv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Pv[t])
        ? !!e[t]
        : !1;
  }
  function ou() {
    return Jv;
  }
  var Fv = v({}, Xl, {
      key: function (t) {
        if (t.key) {
          var e = Zv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = os(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? kv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ou,
      charCode: function (t) {
        return t.type === "keypress" ? os(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? os(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Iv = ye(Fv),
    $v = v({}, ds, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    _f = ye($v),
    Wv = v({}, Xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ou,
    }),
    tg = ye(Wv),
    eg = v({}, ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ng = ye(eg),
    ag = v({}, ds, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lg = ye(ag),
    ig = v({}, ya, { newState: 0, oldState: 0 }),
    sg = ye(ig),
    rg = [9, 13, 27, 32],
    cu = un && "CompositionEvent" in window,
    Zl = null;
  un && "documentMode" in document && (Zl = document.documentMode);
  var ug = un && "TextEvent" in window && !Zl,
    Ef = un && (!cu || (Zl && 8 < Zl && 11 >= Zl)),
    Rf = " ",
    Tf = !1;
  function xf(t, e) {
    switch (t) {
      case "keyup":
        return rg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Af(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Ia = !1;
  function og(t, e) {
    switch (t) {
      case "compositionend":
        return Af(e);
      case "keypress":
        return e.which !== 32 ? null : ((Tf = !0), Rf);
      case "textInput":
        return ((t = e.data), t === Rf && Tf ? null : t);
      default:
        return null;
    }
  }
  function cg(t, e) {
    if (Ia)
      return t === "compositionend" || (!cu && xf(t, e))
        ? ((t = vf()), (us = iu = zn = null), (Ia = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ef && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var fg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Mf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!fg[t.type] : e === "textarea";
  }
  function Of(t, e, a, l) {
    (Ja ? (Fa ? Fa.push(l) : (Fa = [l])) : (Ja = l),
      (e = er(e, "onChange")),
      0 < e.length &&
        ((a = new fs("onChange", "change", null, a, l)),
        t.push({ event: a, listeners: e })));
  }
  var kl = null,
    Pl = null;
  function dg(t) {
    cm(t, 0);
  }
  function hs(t) {
    var e = Ql(t);
    if (of(e)) return t;
  }
  function wf(t, e) {
    if (t === "change") return e;
  }
  var Cf = !1;
  if (un) {
    var fu;
    if (un) {
      var du = "oninput" in document;
      if (!du) {
        var zf = document.createElement("div");
        (zf.setAttribute("oninput", "return;"),
          (du = typeof zf.oninput == "function"));
      }
      fu = du;
    } else fu = !1;
    Cf = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function Df() {
    kl && (kl.detachEvent("onpropertychange", Lf), (Pl = kl = null));
  }
  function Lf(t) {
    if (t.propertyName === "value" && hs(Pl)) {
      var e = [];
      (Of(e, Pl, t, nu(t)), pf(dg, e));
    }
  }
  function hg(t, e, a) {
    t === "focusin"
      ? (Df(), (kl = e), (Pl = a), kl.attachEvent("onpropertychange", Lf))
      : t === "focusout" && Df();
  }
  function mg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return hs(Pl);
  }
  function yg(t, e) {
    if (t === "click") return hs(e);
  }
  function pg(t, e) {
    if (t === "input" || t === "change") return hs(e);
  }
  function vg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ae = typeof Object.is == "function" ? Object.is : vg;
  function Jl(t, e) {
    if (Ae(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var r = a[l];
      if (!da.call(e, r) || !Ae(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Uf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Nf(t, e) {
    var a = Uf(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e))
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Uf(a);
    }
  }
  function jf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? jf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Bf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ss(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = ss(t.document);
    }
    return e;
  }
  function hu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var gg = un && "documentMode" in document && 11 >= document.documentMode,
    $a = null,
    mu = null,
    Fl = null,
    yu = !1;
  function Hf(t, e, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yu ||
      $a == null ||
      $a !== ss(l) ||
      ((l = $a),
      "selectionStart" in l && hu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Fl && Jl(Fl, l)) ||
        ((Fl = l),
        (l = er(mu, "onSelect")),
        0 < l.length &&
          ((e = new fs("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = $a))));
  }
  function pa(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var Wa = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    pu = {},
    qf = {};
  un &&
    ((qf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Wa.animationend.animation,
      delete Wa.animationiteration.animation,
      delete Wa.animationstart.animation),
    "TransitionEvent" in window || delete Wa.transitionend.transition);
  function va(t) {
    if (pu[t]) return pu[t];
    if (!Wa[t]) return t;
    var e = Wa[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in qf) return (pu[t] = e[a]);
    return t;
  }
  var Yf = va("animationend"),
    Qf = va("animationiteration"),
    Gf = va("animationstart"),
    Sg = va("transitionrun"),
    bg = va("transitionstart"),
    _g = va("transitioncancel"),
    Vf = va("transitionend"),
    Xf = new Map(),
    vu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  vu.push("scrollEnd");
  function Xe(t, e) {
    (Xf.set(t, e), ma(e, [t]));
  }
  var ms =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ne = [],
    tl = 0,
    gu = 0;
  function ys() {
    for (var t = tl, e = (gu = tl = 0); e < t; ) {
      var a = Ne[e];
      Ne[e++] = null;
      var l = Ne[e];
      Ne[e++] = null;
      var r = Ne[e];
      Ne[e++] = null;
      var o = Ne[e];
      if (((Ne[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
          (l.pending = r));
      }
      o !== 0 && Kf(a, r, o);
    }
  }
  function ps(t, e, a, l) {
    ((Ne[tl++] = t),
      (Ne[tl++] = e),
      (Ne[tl++] = a),
      (Ne[tl++] = l),
      (gu |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function Su(t, e, a, l) {
    return (ps(t, e, a, l), vs(t));
  }
  function ga(t, e) {
    return (ps(t, null, null, e), vs(t));
  }
  function Kf(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var r = !1, o = t.return; o !== null; )
      ((o.childLanes |= a),
        (l = o.alternate),
        l !== null && (l.childLanes |= a),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - xe(a)),
          (t = o.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        o)
      : null;
  }
  function vs(t) {
    if (50 < gi) throw ((gi = 0), (wo = null), Error(u(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var el = {};
  function Eg(t, e, a, l) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Me(t, e, a, l) {
    return new Eg(t, e, a, l);
  }
  function bu(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function on(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Me(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function Zf(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function gs(t, e, a, l, r, o) {
    var d = 0;
    if (((l = t), typeof t == "function")) bu(t) && (d = 1);
    else if (typeof t == "string")
      d = M0(t, a, $.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case I:
          return ((t = Me(31, a, e, r)), (t.elementType = I), (t.lanes = o), t);
        case C:
          return Sa(a.children, r, o, e);
        case R:
          ((d = 8), (r |= 24));
          break;
        case w:
          return (
            (t = Me(12, a, e, r | 2)),
            (t.elementType = w),
            (t.lanes = o),
            t
          );
        case F:
          return ((t = Me(13, a, e, r)), (t.elementType = F), (t.lanes = o), t);
        case J:
          return ((t = Me(19, a, e, r)), (t.elementType = J), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                d = 10;
                break t;
              case q:
                d = 9;
                break t;
              case H:
                d = 11;
                break t;
              case X:
                d = 14;
                break t;
              case K:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29),
            (a = Error(u(130, t === null ? "null" : typeof t, ""))),
            (l = null));
      }
    return (
      (e = Me(d, a, e, r)),
      (e.elementType = t),
      (e.type = l),
      (e.lanes = o),
      e
    );
  }
  function Sa(t, e, a, l) {
    return ((t = Me(7, t, l, e)), (t.lanes = a), t);
  }
  function _u(t, e, a) {
    return ((t = Me(6, t, null, e)), (t.lanes = a), t);
  }
  function kf(t) {
    var e = Me(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Eu(t, e, a) {
    return (
      (e = Me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Pf = new WeakMap();
  function je(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Pf.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: ln(e) }), Pf.set(t, e), e);
    }
    return { value: t, source: e, stack: ln(e) };
  }
  var nl = [],
    al = 0,
    Ss = null,
    Il = 0,
    Be = [],
    He = 0,
    Dn = null,
    Fe = 1,
    Ie = "";
  function cn(t, e) {
    ((nl[al++] = Il), (nl[al++] = Ss), (Ss = t), (Il = e));
  }
  function Jf(t, e, a) {
    ((Be[He++] = Fe), (Be[He++] = Ie), (Be[He++] = Dn), (Dn = t));
    var l = Fe;
    t = Ie;
    var r = 32 - xe(l) - 1;
    ((l &= ~(1 << r)), (a += 1));
    var o = 32 - xe(e) + r;
    if (30 < o) {
      var d = r - (r % 5);
      ((o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (Fe = (1 << (32 - xe(e) + r)) | (a << r) | l),
        (Ie = o + t));
    } else ((Fe = (1 << o) | (a << r) | l), (Ie = t));
  }
  function Ru(t) {
    t.return !== null && (cn(t, 1), Jf(t, 1, 0));
  }
  function Tu(t) {
    for (; t === Ss; )
      ((Ss = nl[--al]), (nl[al] = null), (Il = nl[--al]), (nl[al] = null));
    for (; t === Dn; )
      ((Dn = Be[--He]),
        (Be[He] = null),
        (Ie = Be[--He]),
        (Be[He] = null),
        (Fe = Be[--He]),
        (Be[He] = null));
  }
  function Ff(t, e) {
    ((Be[He++] = Fe),
      (Be[He++] = Ie),
      (Be[He++] = Dn),
      (Fe = e.id),
      (Ie = e.overflow),
      (Dn = t));
  }
  var se = null,
    jt = null,
    vt = !1,
    Ln = null,
    qe = !1,
    xu = Error(u(519));
  function Un(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw ($l(je(e, t)), xu);
  }
  function If(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[ie] = t), (e[me] = l), a)) {
      case "dialog":
        (ht("cancel", e), ht("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bi.length; a++) ht(bi[a], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ht("error", e), ht("load", e));
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        (ht("invalid", e),
          cf(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        (ht("invalid", e), df(e, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      mm(e.textContent, a)
        ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          l.onScroll != null && ht("scroll", e),
          l.onScrollEnd != null && ht("scrollend", e),
          l.onClick != null && (e.onclick = rn),
          (e = !0))
        : (e = !1),
      e || Un(t, !0));
  }
  function $f(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          qe = !1;
          return;
        case 27:
        case 3:
          qe = !0;
          return;
        default:
          se = se.return;
      }
  }
  function ll(t) {
    if (t !== se) return !1;
    if (!vt) return ($f(t), (vt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Xo(t.type, t.memoizedProps))),
        (a = !a)),
      a && jt && Un(t),
      $f(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      jt = Rm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      jt = Rm(t);
    } else
      e === 27
        ? ((e = jt), Pn(t.type) ? ((t = Jo), (Jo = null), (jt = t)) : (jt = e))
        : (jt = se ? Qe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ba() {
    ((jt = se = null), (vt = !1));
  }
  function Au() {
    var t = Ln;
    return (
      t !== null &&
        (Se === null ? (Se = t) : Se.push.apply(Se, t), (Ln = null)),
      t
    );
  }
  function $l(t) {
    Ln === null ? (Ln = [t]) : Ln.push(t);
  }
  var Mu = O(null),
    _a = null,
    fn = null;
  function Nn(t, e, a) {
    (P(Mu, e._currentValue), (e._currentValue = a));
  }
  function dn(t) {
    ((t._currentValue = Mu.current), G(Mu));
  }
  function Ou(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function wu(t, e, a, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var d = r.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = r;
          for (var x = 0; x < e.length; x++)
            if (g.context === e[x]) {
              ((o.lanes |= a),
                (g = o.alternate),
                g !== null && (g.lanes |= a),
                Ou(o.return, a, t),
                l || (d = null));
              break t;
            }
          o = g.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(u(341));
        ((d.lanes |= a),
          (o = d.alternate),
          o !== null && (o.lanes |= a),
          Ou(d, a, t),
          (d = null));
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            ((r.return = d.return), (d = r));
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function il(t, e, a, l) {
    t = null;
    for (var r = e, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(u(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = r.type;
          Ae(r.pendingProps.value, d.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (r === gt.current) {
        if (((d = r.alternate), d === null)) throw Error(u(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(xi) : (t = [xi]));
      }
      r = r.return;
    }
    (t !== null && wu(e, t, a, l), (e.flags |= 262144));
  }
  function bs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ea(t) {
    ((_a = t),
      (fn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function re(t) {
    return Wf(_a, t);
  }
  function _s(t, e) {
    return (_a === null && Ea(t), Wf(t, e));
  }
  function Wf(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), fn === null)) {
      if (t === null) throw Error(u(308));
      ((fn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else fn = fn.next = e;
    return a;
  }
  var Rg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    Tg = n.unstable_scheduleCallback,
    xg = n.unstable_NormalPriority,
    kt = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cu() {
    return { controller: new Rg(), data: new Map(), refCount: 0 };
  }
  function Wl(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Tg(xg, function () {
          t.controller.abort();
        }));
  }
  var ti = null,
    zu = 0,
    sl = 0,
    rl = null;
  function Ag(t, e) {
    if (ti === null) {
      var a = (ti = []);
      ((zu = 0),
        (sl = No()),
        (rl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (zu++, e.then(td, td), e);
  }
  function td() {
    if (--zu === 0 && ti !== null) {
      rl !== null && (rl.status = "fulfilled");
      var t = ti;
      ((ti = null), (sl = 0), (rl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Mg(t, e) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          a.push(r);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var r = 0; r < a.length; r++) (0, a[r])(e);
        },
        function (r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < a.length; r++)
            (0, a[r])(void 0);
        },
      ),
      l
    );
  }
  var ed = j.S;
  j.S = function (t, e) {
    ((Hh = ce()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Ag(t, e),
      ed !== null && ed(t, e));
  };
  var Ra = O(null);
  function Du() {
    var t = Ra.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function Es(t, e) {
    e === null ? P(Ra, Ra.current) : P(Ra, e.pool);
  }
  function nd() {
    var t = Du();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var ul = Error(u(460)),
    Lu = Error(u(474)),
    Rs = Error(u(542)),
    Ts = { then: function () {} };
  function ad(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function ld(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(rn, rn), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), sd(t), t);
      default:
        if (typeof e.status == "string") e.then(rn, rn);
        else {
          if (((t = Dt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "fulfilled"), (r.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "rejected"), (r.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), sd(t), t);
        }
        throw ((xa = e), ul);
    }
  }
  function Ta(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((xa = a), ul)
        : a;
    }
  }
  var xa = null;
  function id() {
    if (xa === null) throw Error(u(459));
    var t = xa;
    return ((xa = null), t);
  }
  function sd(t) {
    if (t === ul || t === Rs) throw Error(u(483));
  }
  var ol = null,
    ei = 0;
  function xs(t) {
    var e = ei;
    return ((ei += 1), ol === null && (ol = []), ld(ol, t, e));
  }
  function ni(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function As(t, e) {
    throw e.$$typeof === _
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function rd(t) {
    function e(z, M) {
      if (t) {
        var D = z.deletions;
        D === null ? ((z.deletions = [M]), (z.flags |= 16)) : D.push(M);
      }
    }
    function a(z, M) {
      if (!t) return null;
      for (; M !== null; ) (e(z, M), (M = M.sibling));
      return null;
    }
    function l(z) {
      for (var M = new Map(); z !== null; )
        (z.key !== null ? M.set(z.key, z) : M.set(z.index, z), (z = z.sibling));
      return M;
    }
    function r(z, M) {
      return ((z = on(z, M)), (z.index = 0), (z.sibling = null), z);
    }
    function o(z, M, D) {
      return (
        (z.index = D),
        t
          ? ((D = z.alternate),
            D !== null
              ? ((D = D.index), D < M ? ((z.flags |= 67108866), M) : D)
              : ((z.flags |= 67108866), M))
          : ((z.flags |= 1048576), M)
      );
    }
    function d(z) {
      return (t && z.alternate === null && (z.flags |= 67108866), z);
    }
    function g(z, M, D, Y) {
      return M === null || M.tag !== 6
        ? ((M = _u(D, z.mode, Y)), (M.return = z), M)
        : ((M = r(M, D)), (M.return = z), M);
    }
    function x(z, M, D, Y) {
      var lt = D.type;
      return lt === C
        ? B(z, M, D.props.children, Y, D.key)
        : M !== null &&
            (M.elementType === lt ||
              (typeof lt == "object" &&
                lt !== null &&
                lt.$$typeof === K &&
                Ta(lt) === M.type))
          ? ((M = r(M, D.props)), ni(M, D), (M.return = z), M)
          : ((M = gs(D.type, D.key, D.props, null, z.mode, Y)),
            ni(M, D),
            (M.return = z),
            M);
    }
    function L(z, M, D, Y) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== D.containerInfo ||
        M.stateNode.implementation !== D.implementation
        ? ((M = Eu(D, z.mode, Y)), (M.return = z), M)
        : ((M = r(M, D.children || [])), (M.return = z), M);
    }
    function B(z, M, D, Y, lt) {
      return M === null || M.tag !== 7
        ? ((M = Sa(D, z.mode, Y, lt)), (M.return = z), M)
        : ((M = r(M, D)), (M.return = z), M);
    }
    function V(z, M, D) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return ((M = _u("" + M, z.mode, D)), (M.return = z), M);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case E:
            return (
              (D = gs(M.type, M.key, M.props, null, z.mode, D)),
              ni(D, M),
              (D.return = z),
              D
            );
          case A:
            return ((M = Eu(M, z.mode, D)), (M.return = z), M);
          case K:
            return ((M = Ta(M)), V(z, M, D));
        }
        if (Nt(M) || mt(M))
          return ((M = Sa(M, z.mode, D, null)), (M.return = z), M);
        if (typeof M.then == "function") return V(z, xs(M), D);
        if (M.$$typeof === Q) return V(z, _s(z, M), D);
        As(z, M);
      }
      return null;
    }
    function U(z, M, D, Y) {
      var lt = M !== null ? M.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return lt !== null ? null : g(z, M, "" + D, Y);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case E:
            return D.key === lt ? x(z, M, D, Y) : null;
          case A:
            return D.key === lt ? L(z, M, D, Y) : null;
          case K:
            return ((D = Ta(D)), U(z, M, D, Y));
        }
        if (Nt(D) || mt(D)) return lt !== null ? null : B(z, M, D, Y, null);
        if (typeof D.then == "function") return U(z, M, xs(D), Y);
        if (D.$$typeof === Q) return U(z, M, _s(z, D), Y);
        As(z, D);
      }
      return null;
    }
    function N(z, M, D, Y, lt) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return ((z = z.get(D) || null), g(M, z, "" + Y, lt));
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case E:
            return (
              (z = z.get(Y.key === null ? D : Y.key) || null),
              x(M, z, Y, lt)
            );
          case A:
            return (
              (z = z.get(Y.key === null ? D : Y.key) || null),
              L(M, z, Y, lt)
            );
          case K:
            return ((Y = Ta(Y)), N(z, M, D, Y, lt));
        }
        if (Nt(Y) || mt(Y))
          return ((z = z.get(D) || null), B(M, z, Y, lt, null));
        if (typeof Y.then == "function") return N(z, M, D, xs(Y), lt);
        if (Y.$$typeof === Q) return N(z, M, D, _s(M, Y), lt);
        As(M, Y);
      }
      return null;
    }
    function W(z, M, D, Y) {
      for (
        var lt = null, St = null, et = M, ct = (M = 0), pt = null;
        et !== null && ct < D.length;
        ct++
      ) {
        et.index > ct ? ((pt = et), (et = null)) : (pt = et.sibling);
        var bt = U(z, et, D[ct], Y);
        if (bt === null) {
          et === null && (et = pt);
          break;
        }
        (t && et && bt.alternate === null && e(z, et),
          (M = o(bt, M, ct)),
          St === null ? (lt = bt) : (St.sibling = bt),
          (St = bt),
          (et = pt));
      }
      if (ct === D.length) return (a(z, et), vt && cn(z, ct), lt);
      if (et === null) {
        for (; ct < D.length; ct++)
          ((et = V(z, D[ct], Y)),
            et !== null &&
              ((M = o(et, M, ct)),
              St === null ? (lt = et) : (St.sibling = et),
              (St = et)));
        return (vt && cn(z, ct), lt);
      }
      for (et = l(et); ct < D.length; ct++)
        ((pt = N(et, z, ct, D[ct], Y)),
          pt !== null &&
            (t &&
              pt.alternate !== null &&
              et.delete(pt.key === null ? ct : pt.key),
            (M = o(pt, M, ct)),
            St === null ? (lt = pt) : (St.sibling = pt),
            (St = pt)));
      return (
        t &&
          et.forEach(function (Wn) {
            return e(z, Wn);
          }),
        vt && cn(z, ct),
        lt
      );
    }
    function rt(z, M, D, Y) {
      if (D == null) throw Error(u(151));
      for (
        var lt = null,
          St = null,
          et = M,
          ct = (M = 0),
          pt = null,
          bt = D.next();
        et !== null && !bt.done;
        ct++, bt = D.next()
      ) {
        et.index > ct ? ((pt = et), (et = null)) : (pt = et.sibling);
        var Wn = U(z, et, bt.value, Y);
        if (Wn === null) {
          et === null && (et = pt);
          break;
        }
        (t && et && Wn.alternate === null && e(z, et),
          (M = o(Wn, M, ct)),
          St === null ? (lt = Wn) : (St.sibling = Wn),
          (St = Wn),
          (et = pt));
      }
      if (bt.done) return (a(z, et), vt && cn(z, ct), lt);
      if (et === null) {
        for (; !bt.done; ct++, bt = D.next())
          ((bt = V(z, bt.value, Y)),
            bt !== null &&
              ((M = o(bt, M, ct)),
              St === null ? (lt = bt) : (St.sibling = bt),
              (St = bt)));
        return (vt && cn(z, ct), lt);
      }
      for (et = l(et); !bt.done; ct++, bt = D.next())
        ((bt = N(et, z, ct, bt.value, Y)),
          bt !== null &&
            (t &&
              bt.alternate !== null &&
              et.delete(bt.key === null ? ct : bt.key),
            (M = o(bt, M, ct)),
            St === null ? (lt = bt) : (St.sibling = bt),
            (St = bt)));
      return (
        t &&
          et.forEach(function (H0) {
            return e(z, H0);
          }),
        vt && cn(z, ct),
        lt
      );
    }
    function Ct(z, M, D, Y) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === C &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case E:
            t: {
              for (var lt = D.key; M !== null; ) {
                if (M.key === lt) {
                  if (((lt = D.type), lt === C)) {
                    if (M.tag === 7) {
                      (a(z, M.sibling),
                        (Y = r(M, D.props.children)),
                        (Y.return = z),
                        (z = Y));
                      break t;
                    }
                  } else if (
                    M.elementType === lt ||
                    (typeof lt == "object" &&
                      lt !== null &&
                      lt.$$typeof === K &&
                      Ta(lt) === M.type)
                  ) {
                    (a(z, M.sibling),
                      (Y = r(M, D.props)),
                      ni(Y, D),
                      (Y.return = z),
                      (z = Y));
                    break t;
                  }
                  a(z, M);
                  break;
                } else e(z, M);
                M = M.sibling;
              }
              D.type === C
                ? ((Y = Sa(D.props.children, z.mode, Y, D.key)),
                  (Y.return = z),
                  (z = Y))
                : ((Y = gs(D.type, D.key, D.props, null, z.mode, Y)),
                  ni(Y, D),
                  (Y.return = z),
                  (z = Y));
            }
            return d(z);
          case A:
            t: {
              for (lt = D.key; M !== null; ) {
                if (M.key === lt)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === D.containerInfo &&
                    M.stateNode.implementation === D.implementation
                  ) {
                    (a(z, M.sibling),
                      (Y = r(M, D.children || [])),
                      (Y.return = z),
                      (z = Y));
                    break t;
                  } else {
                    a(z, M);
                    break;
                  }
                else e(z, M);
                M = M.sibling;
              }
              ((Y = Eu(D, z.mode, Y)), (Y.return = z), (z = Y));
            }
            return d(z);
          case K:
            return ((D = Ta(D)), Ct(z, M, D, Y));
        }
        if (Nt(D)) return W(z, M, D, Y);
        if (mt(D)) {
          if (((lt = mt(D)), typeof lt != "function")) throw Error(u(150));
          return ((D = lt.call(D)), rt(z, M, D, Y));
        }
        if (typeof D.then == "function") return Ct(z, M, xs(D), Y);
        if (D.$$typeof === Q) return Ct(z, M, _s(z, D), Y);
        As(z, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          M !== null && M.tag === 6
            ? (a(z, M.sibling), (Y = r(M, D)), (Y.return = z), (z = Y))
            : (a(z, M), (Y = _u(D, z.mode, Y)), (Y.return = z), (z = Y)),
          d(z))
        : a(z, M);
    }
    return function (z, M, D, Y) {
      try {
        ei = 0;
        var lt = Ct(z, M, D, Y);
        return ((ol = null), lt);
      } catch (et) {
        if (et === ul || et === Rs) throw et;
        var St = Me(29, et, null, z.mode);
        return ((St.lanes = Y), (St.return = z), St);
      }
    };
  }
  var Aa = rd(!0),
    ud = rd(!1),
    jn = !1;
  function Uu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Nu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Bn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Hn(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Rt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = vs(t)),
        Kf(t, null, a),
        e
      );
    }
    return (ps(t, l, e, a), vs(t));
  }
  function ai(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), $c(t, a));
    }
  }
  function ju(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var r = null,
        o = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (o === null ? (r = o = d) : (o = o.next = d), (a = a.next));
        } while (a !== null);
        o === null ? (r = o = e) : (o = o.next = e);
      } else r = o = e;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var Bu = !1;
  function li() {
    if (Bu) {
      var t = rl;
      if (t !== null) throw t;
    }
  }
  function ii(t, e, a, l) {
    Bu = !1;
    var r = t.updateQueue;
    jn = !1;
    var o = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      g = r.shared.pending;
    if (g !== null) {
      r.shared.pending = null;
      var x = g,
        L = x.next;
      ((x.next = null), d === null ? (o = L) : (d.next = L), (d = x));
      var B = t.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (g = B.lastBaseUpdate),
        g !== d &&
          (g === null ? (B.firstBaseUpdate = L) : (g.next = L),
          (B.lastBaseUpdate = x)));
    }
    if (o !== null) {
      var V = r.baseState;
      ((d = 0), (B = L = x = null), (g = o));
      do {
        var U = g.lane & -536870913,
          N = U !== g.lane;
        if (N ? (yt & U) === U : (l & U) === U) {
          (U !== 0 && U === sl && (Bu = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var W = t,
              rt = g;
            U = e;
            var Ct = a;
            switch (rt.tag) {
              case 1:
                if (((W = rt.payload), typeof W == "function")) {
                  V = W.call(Ct, V, U);
                  break t;
                }
                V = W;
                break t;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = rt.payload),
                  (U = typeof W == "function" ? W.call(Ct, V, U) : W),
                  U == null)
                )
                  break t;
                V = v({}, V, U);
                break t;
              case 2:
                jn = !0;
            }
          }
          ((U = g.callback),
            U !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = r.callbacks),
              N === null ? (r.callbacks = [U]) : N.push(U)));
        } else
          ((N = {
            lane: U,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            B === null ? ((L = B = N), (x = V)) : (B = B.next = N),
            (d |= U));
        if (((g = g.next), g === null)) {
          if (((g = r.shared.pending), g === null)) break;
          ((N = g),
            (g = N.next),
            (N.next = null),
            (r.lastBaseUpdate = N),
            (r.shared.pending = null));
        }
      } while (!0);
      (B === null && (x = V),
        (r.baseState = x),
        (r.firstBaseUpdate = L),
        (r.lastBaseUpdate = B),
        o === null && (r.shared.lanes = 0),
        (Vn |= d),
        (t.lanes = d),
        (t.memoizedState = V));
    }
  }
  function od(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function cd(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) od(a[t], e);
  }
  var cl = O(null),
    Ms = O(0);
  function fd(t, e) {
    ((t = _n), P(Ms, t), P(cl, e), (_n = t | e.baseLanes));
  }
  function Hu() {
    (P(Ms, _n), P(cl, cl.current));
  }
  function qu() {
    ((_n = Ms.current), G(cl), G(Ms));
  }
  var Oe = O(null),
    Ye = null;
  function qn(t) {
    var e = t.alternate;
    (P(Xt, Xt.current & 1),
      P(Oe, t),
      Ye === null &&
        (e === null || cl.current !== null || e.memoizedState !== null) &&
        (Ye = t));
  }
  function Yu(t) {
    (P(Xt, Xt.current), P(Oe, t), Ye === null && (Ye = t));
  }
  function dd(t) {
    t.tag === 22
      ? (P(Xt, Xt.current), P(Oe, t), Ye === null && (Ye = t))
      : Yn();
  }
  function Yn() {
    (P(Xt, Xt.current), P(Oe, Oe.current));
  }
  function we(t) {
    (G(Oe), Ye === t && (Ye = null), G(Xt));
  }
  var Xt = O(0);
  function Os(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || ko(a) || Po(a)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var hn = 0,
    ot = null,
    Ot = null,
    Pt = null,
    ws = !1,
    fl = !1,
    Ma = !1,
    Cs = 0,
    si = 0,
    dl = null,
    Og = 0;
  function Yt() {
    throw Error(u(321));
  }
  function Qu(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ae(t[a], e[a])) return !1;
    return !0;
  }
  function Gu(t, e, a, l, r, o) {
    return (
      (hn = o),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Jd : ao),
      (Ma = !1),
      (o = a(l, r)),
      (Ma = !1),
      fl && (o = md(e, a, l, r)),
      hd(t),
      o
    );
  }
  function hd(t) {
    j.H = oi;
    var e = Ot !== null && Ot.next !== null;
    if (((hn = 0), (Pt = Ot = ot = null), (ws = !1), (si = 0), (dl = null), e))
      throw Error(u(300));
    t === null ||
      Jt ||
      ((t = t.dependencies), t !== null && bs(t) && (Jt = !0));
  }
  function md(t, e, a, l) {
    ot = t;
    var r = 0;
    do {
      if ((fl && (dl = null), (si = 0), (fl = !1), 25 <= r))
        throw Error(u(301));
      if (((r += 1), (Pt = Ot = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((j.H = Fd), (o = e(a, l)));
    } while (fl);
    return o;
  }
  function wg() {
    var t = j.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ri(e) : e),
      (t = t.useState()[0]),
      (Ot !== null ? Ot.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function Vu() {
    var t = Cs !== 0;
    return ((Cs = 0), t);
  }
  function Xu(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Ku(t) {
    if (ws) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      ws = !1;
    }
    ((hn = 0), (Pt = Ot = ot = null), (fl = !1), (si = Cs = 0), (dl = null));
  }
  function de() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Pt === null ? (ot.memoizedState = Pt = t) : (Pt = Pt.next = t), Pt);
  }
  function Kt() {
    if (Ot === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ot.next;
    var e = Pt === null ? ot.memoizedState : Pt.next;
    if (e !== null) ((Pt = e), (Ot = t));
    else {
      if (t === null)
        throw ot.alternate === null ? Error(u(467)) : Error(u(310));
      ((Ot = t),
        (t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null,
        }),
        Pt === null ? (ot.memoizedState = Pt = t) : (Pt = Pt.next = t));
    }
    return Pt;
  }
  function zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ri(t) {
    var e = si;
    return (
      (si += 1),
      dl === null && (dl = []),
      (t = ld(dl, t, e)),
      (e = ot),
      (Pt === null ? e.memoizedState : Pt.next) === null &&
        ((e = e.alternate),
        (j.H = e === null || e.memoizedState === null ? Jd : ao)),
      t
    );
  }
  function Ds(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ri(t);
      if (t.$$typeof === Q) return re(t);
    }
    throw Error(u(438, String(t)));
  }
  function Zu(t) {
    var e = null,
      a = ot.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = ot.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = zs()), (ot.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = st;
    return (e.index++, a);
  }
  function mn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ls(t) {
    var e = Kt();
    return ku(e, Ot, t);
  }
  function ku(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = a;
    var r = t.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (r !== null) {
        var d = r.next;
        ((r.next = o.next), (o.next = d));
      }
      ((e.baseQueue = r = o), (l.pending = null));
    }
    if (((o = t.baseState), r === null)) t.memoizedState = o;
    else {
      e = r.next;
      var g = (d = null),
        x = null,
        L = e,
        B = !1;
      do {
        var V = L.lane & -536870913;
        if (V !== L.lane ? (yt & V) === V : (hn & V) === V) {
          var U = L.revertLane;
          if (U === 0)
            (x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              V === sl && (B = !0));
          else if ((hn & U) === U) {
            ((L = L.next), U === sl && (B = !0));
            continue;
          } else
            ((V = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              x === null ? ((g = x = V), (d = o)) : (x = x.next = V),
              (ot.lanes |= U),
              (Vn |= U));
          ((V = L.action),
            Ma && a(o, V),
            (o = L.hasEagerState ? L.eagerState : a(o, V)));
        } else
          ((U = {
            lane: V,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            x === null ? ((g = x = U), (d = o)) : (x = x.next = U),
            (ot.lanes |= V),
            (Vn |= V));
        L = L.next;
      } while (L !== null && L !== e);
      if (
        (x === null ? (d = o) : (x.next = g),
        !Ae(o, t.memoizedState) && ((Jt = !0), B && ((a = rl), a !== null)))
      )
        throw a;
      ((t.memoizedState = o),
        (t.baseState = d),
        (t.baseQueue = x),
        (l.lastRenderedState = o));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Pu(t) {
    var e = Kt(),
      a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      r = a.pending,
      o = e.memoizedState;
    if (r !== null) {
      a.pending = null;
      var d = (r = r.next);
      do ((o = t(o, d.action)), (d = d.next));
      while (d !== r);
      (Ae(o, e.memoizedState) || (Jt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (a.lastRenderedState = o));
    }
    return [o, l];
  }
  function yd(t, e, a) {
    var l = ot,
      r = Kt(),
      o = vt;
    if (o) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = e();
    var d = !Ae((Ot || r).memoizedState, a);
    if (
      (d && ((r.memoizedState = a), (Jt = !0)),
      (r = r.queue),
      Iu(gd.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (Pt !== null && Pt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        hl(9, { destroy: void 0 }, vd.bind(null, l, r, a, e), null),
        Dt === null)
      )
        throw Error(u(349));
      o || (hn & 127) !== 0 || pd(l, e, a);
    }
    return a;
  }
  function pd(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = ot.updateQueue),
      e === null
        ? ((e = zs()), (ot.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function vd(t, e, a, l) {
    ((e.value = a), (e.getSnapshot = l), Sd(e) && bd(t));
  }
  function gd(t, e, a) {
    return a(function () {
      Sd(e) && bd(t);
    });
  }
  function Sd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ae(t, a);
    } catch {
      return !0;
    }
  }
  function bd(t) {
    var e = ga(t, 2);
    e !== null && be(e, t, 2);
  }
  function Ju(t) {
    var e = de();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Ma)) {
        wn(!0);
        try {
          a();
        } finally {
          wn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function _d(t, e, a, l) {
    return ((t.baseState = a), ku(t, Ot, typeof l == "function" ? l : mn));
  }
  function Cg(t, e, a, l, r) {
    if (js(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      (j.T !== null ? a(!0) : (o.isTransition = !1),
        l(o),
        (a = e.pending),
        a === null
          ? ((o.next = e.pending = o), Ed(e, o))
          : ((o.next = a.next), (e.pending = a.next = o)));
    }
  }
  function Ed(t, e) {
    var a = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var o = j.T,
        d = {};
      j.T = d;
      try {
        var g = a(r, l),
          x = j.S;
        (x !== null && x(d, g), Rd(t, e, g));
      } catch (L) {
        Fu(t, e, L);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (j.T = o));
      }
    } else
      try {
        ((o = a(r, l)), Rd(t, e, o));
      } catch (L) {
        Fu(t, e, L);
      }
  }
  function Rd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Td(t, e, l);
          },
          function (l) {
            return Fu(t, e, l);
          },
        )
      : Td(t, e, a);
  }
  function Td(t, e, a) {
    ((e.status = "fulfilled"),
      (e.value = a),
      xd(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), Ed(t, a))));
  }
  function Fu(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = a), xd(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function xd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Ad(t, e) {
    return e;
  }
  function Md(t, e) {
    if (vt) {
      var a = Dt.formState;
      if (a !== null) {
        t: {
          var l = ot;
          if (vt) {
            if (jt) {
              e: {
                for (var r = jt, o = qe; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break e;
                  }
                  if (((r = Qe(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((o = r.data), (r = o === "F!" || o === "F" ? r : null));
              }
              if (r) {
                ((jt = Qe(r.nextSibling)), (l = r.data === "F!"));
                break t;
              }
            }
            Un(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = de()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ad,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = Zd.bind(null, ot, l)),
      (l.dispatch = a),
      (l = Ju(!1)),
      (o = no.bind(null, ot, !1, l.queue)),
      (l = de()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (a = Cg.bind(null, ot, r, o, a)),
      (r.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function Od(t) {
    var e = Kt();
    return wd(e, Ot, t);
  }
  function wd(t, e, a) {
    if (
      ((e = ku(t, e, Ad)[0]),
      (t = Ls(mn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = ri(e);
      } catch (d) {
        throw d === ul ? Rs : d;
      }
    else l = e;
    e = Kt();
    var r = e.queue,
      o = r.dispatch;
    return (
      a !== e.memoizedState &&
        ((ot.flags |= 2048),
        hl(9, { destroy: void 0 }, zg.bind(null, r, a), null)),
      [l, o, t]
    );
  }
  function zg(t, e) {
    t.action = e;
  }
  function Cd(t) {
    var e = Kt(),
      a = Ot;
    if (a !== null) return wd(e, a, t);
    (Kt(), (e = e.memoizedState), (a = Kt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = t), [e, l, !1]);
  }
  function hl(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = zs()), (ot.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function zd() {
    return Kt().memoizedState;
  }
  function Us(t, e, a, l) {
    var r = de();
    ((ot.flags |= t),
      (r.memoizedState = hl(
        1 | e,
        { destroy: void 0 },
        a,
        l === void 0 ? null : l,
      )));
  }
  function Ns(t, e, a, l) {
    var r = Kt();
    l = l === void 0 ? null : l;
    var o = r.memoizedState.inst;
    Ot !== null && l !== null && Qu(l, Ot.memoizedState.deps)
      ? (r.memoizedState = hl(e, o, a, l))
      : ((ot.flags |= t), (r.memoizedState = hl(1 | e, o, a, l)));
  }
  function Dd(t, e) {
    Us(8390656, 8, t, e);
  }
  function Iu(t, e) {
    Ns(2048, 8, t, e);
  }
  function Dg(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null) ((e = zs()), (ot.updateQueue = e), (e.events = [t]));
    else {
      var a = e.events;
      a === null ? (e.events = [t]) : a.push(t);
    }
  }
  function Ld(t) {
    var e = Kt().memoizedState;
    return (
      Dg({ ref: e, nextImpl: t }),
      function () {
        if ((Rt & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Ud(t, e) {
    return Ns(4, 2, t, e);
  }
  function Nd(t, e) {
    return Ns(4, 4, t, e);
  }
  function jd(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Bd(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Ns(4, 4, jd.bind(null, e, t), a));
  }
  function $u() {}
  function Hd(t, e) {
    var a = Kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && Qu(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function qd(t, e) {
    var a = Kt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && Qu(e, l[1])) return l[0];
    if (((l = t()), Ma)) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return ((a.memoizedState = [l, e]), l);
  }
  function Wu(t, e, a) {
    return a === void 0 || ((hn & 1073741824) !== 0 && (yt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Yh()), (ot.lanes |= t), (Vn |= t), a);
  }
  function Yd(t, e, a, l) {
    return Ae(a, e)
      ? a
      : cl.current !== null
        ? ((t = Wu(t, a, l)), Ae(t, e) || (Jt = !0), t)
        : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (yt & 261930) === 0)
          ? ((Jt = !0), (t.memoizedState = a))
          : ((t = Yh()), (ot.lanes |= t), (Vn |= t), e);
  }
  function Qd(t, e, a, l, r) {
    var o = k.p;
    k.p = o !== 0 && 8 > o ? o : 8;
    var d = j.T,
      g = {};
    ((j.T = g), no(t, !1, e, a));
    try {
      var x = r(),
        L = j.S;
      if (
        (L !== null && L(g, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var B = Mg(x, l);
        ui(t, e, B, De(t));
      } else ui(t, e, l, De(t));
    } catch (V) {
      ui(t, e, { then: function () {}, status: "rejected", reason: V }, De());
    } finally {
      ((k.p = o),
        d !== null && g.types !== null && (d.types = g.types),
        (j.T = d));
    }
  }
  function Lg() {}
  function to(t, e, a, l) {
    if (t.tag !== 5) throw Error(u(476));
    var r = Gd(t).queue;
    Qd(
      t,
      r,
      e,
      it,
      a === null
        ? Lg
        : function () {
            return (Vd(t), a(l));
          },
    );
  }
  function Gd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: it,
      baseState: it,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: it,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Vd(t) {
    var e = Gd(t);
    (e.next === null && (e = t.alternate.memoizedState),
      ui(t, e.next.queue, {}, De()));
  }
  function eo() {
    return re(xi);
  }
  function Xd() {
    return Kt().memoizedState;
  }
  function Kd() {
    return Kt().memoizedState;
  }
  function Ug(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = De();
          t = Bn(a);
          var l = Hn(e, t, a);
          (l !== null && (be(l, e, a), ai(l, e, a)),
            (e = { cache: Cu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Ng(t, e, a) {
    var l = De();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      js(t)
        ? kd(e, a)
        : ((a = Su(t, e, a, l)), a !== null && (be(a, t, l), Pd(a, e, l))));
  }
  function Zd(t, e, a) {
    var l = De();
    ui(t, e, a, l);
  }
  function ui(t, e, a, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (js(t)) kd(e, r);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var d = e.lastRenderedState,
            g = o(d, a);
          if (((r.hasEagerState = !0), (r.eagerState = g), Ae(g, d)))
            return (ps(t, e, r, 0), Dt === null && ys(), !1);
        } catch {}
      if (((a = Su(t, e, r, l)), a !== null))
        return (be(a, t, l), Pd(a, e, l), !0);
    }
    return !1;
  }
  function no(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: No(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      js(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Su(t, a, l, 2)), e !== null && be(e, t, 2));
  }
  function js(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function kd(t, e) {
    fl = ws = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e));
  }
  function Pd(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (a |= l), (e.lanes = a), $c(t, a));
    }
  }
  var oi = {
    readContext: re,
    use: Ds,
    useCallback: Yt,
    useContext: Yt,
    useEffect: Yt,
    useImperativeHandle: Yt,
    useLayoutEffect: Yt,
    useInsertionEffect: Yt,
    useMemo: Yt,
    useReducer: Yt,
    useRef: Yt,
    useState: Yt,
    useDebugValue: Yt,
    useDeferredValue: Yt,
    useTransition: Yt,
    useSyncExternalStore: Yt,
    useId: Yt,
    useHostTransitionStatus: Yt,
    useFormState: Yt,
    useActionState: Yt,
    useOptimistic: Yt,
    useMemoCache: Yt,
    useCacheRefresh: Yt,
  };
  oi.useEffectEvent = Yt;
  var Jd = {
      readContext: re,
      use: Ds,
      useCallback: function (t, e) {
        return ((de().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: re,
      useEffect: Dd,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null),
          Us(4194308, 4, jd.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return Us(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Us(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = de();
        e = e === void 0 ? null : e;
        var l = t();
        if (Ma) {
          wn(!0);
          try {
            t();
          } finally {
            wn(!1);
          }
        }
        return ((a.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, a) {
        var l = de();
        if (a !== void 0) {
          var r = a(e);
          if (Ma) {
            wn(!0);
            try {
              a(e);
            } finally {
              wn(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (l.queue = t),
          (t = t.dispatch = Ng.bind(null, ot, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = de();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Ju(t);
        var e = t.queue,
          a = Zd.bind(null, ot, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: $u,
      useDeferredValue: function (t, e) {
        var a = de();
        return Wu(a, t, e);
      },
      useTransition: function () {
        var t = Ju(!1);
        return (
          (t = Qd.bind(null, ot, t.queue, !0, !1)),
          (de().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var l = ot,
          r = de();
        if (vt) {
          if (a === void 0) throw Error(u(407));
          a = a();
        } else {
          if (((a = e()), Dt === null)) throw Error(u(349));
          (yt & 127) !== 0 || pd(l, e, a);
        }
        r.memoizedState = a;
        var o = { value: a, getSnapshot: e };
        return (
          (r.queue = o),
          Dd(gd.bind(null, l, o, t), [t]),
          (l.flags |= 2048),
          hl(9, { destroy: void 0 }, vd.bind(null, l, o, a, e), null),
          a
        );
      },
      useId: function () {
        var t = de(),
          e = Dt.identifierPrefix;
        if (vt) {
          var a = Ie,
            l = Fe;
          ((a = (l & ~(1 << (32 - xe(l) - 1))).toString(32) + a),
            (e = "_" + e + "R_" + a),
            (a = Cs++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "_"));
        } else ((a = Og++), (e = "_" + e + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: eo,
      useFormState: Md,
      useActionState: Md,
      useOptimistic: function (t) {
        var e = de();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = no.bind(null, ot, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Zu,
      useCacheRefresh: function () {
        return (de().memoizedState = Ug.bind(null, ot));
      },
      useEffectEvent: function (t) {
        var e = de(),
          a = { impl: t };
        return (
          (e.memoizedState = a),
          function () {
            if ((Rt & 2) !== 0) throw Error(u(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ao = {
      readContext: re,
      use: Ds,
      useCallback: Hd,
      useContext: re,
      useEffect: Iu,
      useImperativeHandle: Bd,
      useInsertionEffect: Ud,
      useLayoutEffect: Nd,
      useMemo: qd,
      useReducer: Ls,
      useRef: zd,
      useState: function () {
        return Ls(mn);
      },
      useDebugValue: $u,
      useDeferredValue: function (t, e) {
        var a = Kt();
        return Yd(a, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ls(mn)[0],
          e = Kt().memoizedState;
        return [typeof t == "boolean" ? t : ri(t), e];
      },
      useSyncExternalStore: yd,
      useId: Xd,
      useHostTransitionStatus: eo,
      useFormState: Od,
      useActionState: Od,
      useOptimistic: function (t, e) {
        var a = Kt();
        return _d(a, Ot, t, e);
      },
      useMemoCache: Zu,
      useCacheRefresh: Kd,
    };
  ao.useEffectEvent = Ld;
  var Fd = {
    readContext: re,
    use: Ds,
    useCallback: Hd,
    useContext: re,
    useEffect: Iu,
    useImperativeHandle: Bd,
    useInsertionEffect: Ud,
    useLayoutEffect: Nd,
    useMemo: qd,
    useReducer: Pu,
    useRef: zd,
    useState: function () {
      return Pu(mn);
    },
    useDebugValue: $u,
    useDeferredValue: function (t, e) {
      var a = Kt();
      return Ot === null ? Wu(a, t, e) : Yd(a, Ot.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Pu(mn)[0],
        e = Kt().memoizedState;
      return [typeof t == "boolean" ? t : ri(t), e];
    },
    useSyncExternalStore: yd,
    useId: Xd,
    useHostTransitionStatus: eo,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function (t, e) {
      var a = Kt();
      return Ot !== null
        ? _d(a, Ot, t, e)
        : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: Zu,
    useCacheRefresh: Kd,
  };
  Fd.useEffectEvent = Ld;
  function lo(t, e, a, l) {
    ((e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : v({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var io = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = De(),
        r = Bn(l);
      ((r.payload = e),
        a != null && (r.callback = a),
        (e = Hn(t, r, l)),
        e !== null && (be(e, t, l), ai(e, t, l)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = De(),
        r = Bn(l);
      ((r.tag = 1),
        (r.payload = e),
        a != null && (r.callback = a),
        (e = Hn(t, r, l)),
        e !== null && (be(e, t, l), ai(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = De(),
        l = Bn(a);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = Hn(t, l, a)),
        e !== null && (be(e, t, a), ai(e, t, a)));
    },
  };
  function Id(t, e, a, l, r, o, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, o, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Jl(a, l) || !Jl(r, o)
          : !0
    );
  }
  function $d(t, e, a, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && io.enqueueReplaceState(e, e.state, null));
  }
  function Oa(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = v({}, a));
      for (var r in t) a[r] === void 0 && (a[r] = t[r]);
    }
    return a;
  }
  function Wd(t) {
    ms(t);
  }
  function th(t) {
    console.error(t);
  }
  function eh(t) {
    ms(t);
  }
  function Bs(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function nh(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function so(t, e, a) {
    return (
      (a = Bn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Bs(t, e);
      }),
      a
    );
  }
  function ah(t) {
    return ((t = Bn(t)), (t.tag = 3), t);
  }
  function lh(t, e, a, l) {
    var r = a.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = l.value;
      ((t.payload = function () {
        return r(o);
      }),
        (t.callback = function () {
          nh(e, a, l);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (nh(e, a, l),
          typeof r != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function jg(t, e, a, l, r) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && il(e, a, r, !0),
        (a = Oe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Ye === null ? Js() : a.alternate === null && Qt === 0 && (Qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = r),
              l === Ts
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  Do(t, l, r)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Ts
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  Do(t, l, r)),
              !1
            );
        }
        throw Error(u(435, a.tag));
      }
      return (Do(t, l, r), Js(), !1);
    }
    if (vt)
      return (
        (e = Oe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== xu && ((t = Error(u(422), { cause: l })), $l(je(t, a))))
          : (l !== xu && ((e = Error(u(423), { cause: l })), $l(je(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = je(l, a)),
            (r = so(t.stateNode, l, r)),
            ju(t, r),
            Qt !== 4 && (Qt = 2)),
        !1
      );
    var o = Error(u(520), { cause: l });
    if (
      ((o = je(o, a)),
      vi === null ? (vi = [o]) : vi.push(o),
      Qt !== 4 && (Qt = 2),
      e === null)
    )
      return !0;
    ((l = je(l, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = r & -r),
            (a.lanes |= t),
            (t = so(a.stateNode, l, t)),
            ju(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (o = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Xn === null || !Xn.has(o)))))
          )
            return (
              (a.flags |= 65536),
              (r &= -r),
              (a.lanes |= r),
              (r = ah(r)),
              lh(r, t, a, l),
              ju(a, r),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ro = Error(u(461)),
    Jt = !1;
  function ue(t, e, a, l) {
    e.child = t === null ? ud(e, null, a, l) : Aa(e, t.child, a, l);
  }
  function ih(t, e, a, l, r) {
    a = a.render;
    var o = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      Ea(e),
      (l = Gu(t, e, a, d, o, r)),
      (g = Vu()),
      t !== null && !Jt
        ? (Xu(t, e, r), yn(t, e, r))
        : (vt && g && Ru(e), (e.flags |= 1), ue(t, e, l, r), e.child)
    );
  }
  function sh(t, e, a, l, r) {
    if (t === null) {
      var o = a.type;
      return typeof o == "function" &&
        !bu(o) &&
        o.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = o), rh(t, e, o, l, r))
        : ((t = gs(a.type, null, l, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !po(t, r))) {
      var d = o.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Jl), a(d, l) && t.ref === e.ref)
      )
        return yn(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = on(o, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function rh(t, e, a, l, r) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Jl(o, l) && t.ref === e.ref)
        if (((Jt = !1), (e.pendingProps = l = o), po(t, r)))
          (t.flags & 131072) !== 0 && (Jt = !0);
        else return ((e.lanes = t.lanes), yn(t, e, r));
    }
    return uo(t, e, a, l, r);
  }
  function uh(t, e, a, l) {
    var r = l.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | a : a), t !== null)) {
          for (l = e.child = t.child, r = 0; l !== null; )
            ((r = r | l.lanes | l.childLanes), (l = l.sibling));
          l = r & ~o;
        } else ((l = 0), (e.child = null));
        return oh(t, e, o, a, l);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Es(e, o !== null ? o.cachePool : null),
          o !== null ? fd(e, o) : Hu(),
          dd(e));
      else
        return (
          (l = e.lanes = 536870912),
          oh(t, e, o !== null ? o.baseLanes | a : a, a, l)
        );
    } else
      o !== null
        ? (Es(e, o.cachePool), fd(e, o), Yn(), (e.memoizedState = null))
        : (t !== null && Es(e, null), Hu(), Yn());
    return (ue(t, e, r, a), e.child);
  }
  function ci(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function oh(t, e, a, l, r) {
    var o = Du();
    return (
      (o = o === null ? null : { parent: kt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: a, cachePool: o }),
      t !== null && Es(e, null),
      Hu(),
      dd(e),
      t !== null && il(t, e, l, !0),
      (e.childLanes = r),
      null
    );
  }
  function Hs(t, e) {
    return (
      (e = Ys({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ch(t, e, a) {
    return (
      Aa(e, t.child, null, a),
      (t = Hs(e, e.pendingProps)),
      (t.flags |= 2),
      we(e),
      (e.memoizedState = null),
      t
    );
  }
  function Bg(t, e, a) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (vt) {
        if (l.mode === "hidden")
          return ((t = Hs(e, l)), (e.lanes = 536870912), ci(null, t));
        if (
          (Yu(e),
          (t = jt)
            ? ((t = Em(t, qe)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Fe, overflow: Ie } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = kf(t)),
                (a.return = e),
                (e.child = a),
                (se = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw Un(e);
        return ((e.lanes = 536870912), null);
      }
      return Hs(e, l);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((Yu(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = ch(t, e, a)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if (
        (Jt || il(t, e, a, !1), (r = (a & t.childLanes) !== 0), Jt || r)
      ) {
        if (
          ((l = Dt),
          l !== null && ((d = Wc(l, a)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), ga(t, d), be(l, t, d), ro);
        (Js(), (e = ch(t, e, a)));
      } else
        ((t = o.treeContext),
          (jt = Qe(d.nextSibling)),
          (se = e),
          (vt = !0),
          (Ln = null),
          (qe = !1),
          t !== null && Ff(e, t),
          (e = Hs(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = on(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function qs(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(u(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function uo(t, e, a, l, r) {
    return (
      Ea(e),
      (a = Gu(t, e, a, l, void 0, r)),
      (l = Vu()),
      t !== null && !Jt
        ? (Xu(t, e, r), yn(t, e, r))
        : (vt && l && Ru(e), (e.flags |= 1), ue(t, e, a, r), e.child)
    );
  }
  function fh(t, e, a, l, r, o) {
    return (
      Ea(e),
      (e.updateQueue = null),
      (a = md(e, l, a, r)),
      hd(t),
      (l = Vu()),
      t !== null && !Jt
        ? (Xu(t, e, o), yn(t, e, o))
        : (vt && l && Ru(e), (e.flags |= 1), ue(t, e, a, o), e.child)
    );
  }
  function dh(t, e, a, l, r) {
    if ((Ea(e), e.stateNode === null)) {
      var o = el,
        d = a.contextType;
      (typeof d == "object" && d !== null && (o = re(d)),
        (o = new a(l, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = io),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = l),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Uu(e),
        (d = a.contextType),
        (o.context = typeof d == "object" && d !== null ? re(d) : el),
        (o.state = e.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (lo(e, a, d, l), (o.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && io.enqueueReplaceState(o, o.state, null),
          ii(e, l, o, r),
          li(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps,
        x = Oa(a, g);
      o.props = x;
      var L = o.context,
        B = a.contextType;
      ((d = el), typeof B == "object" && B !== null && (d = re(B)));
      var V = a.getDerivedStateFromProps;
      ((B =
        typeof V == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        B ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || L !== d) && $d(e, o, l, d)),
        (jn = !1));
      var U = e.memoizedState;
      ((o.state = U),
        ii(e, l, o, r),
        li(),
        (L = e.memoizedState),
        g || U !== L || jn
          ? (typeof V == "function" && (lo(e, a, V, l), (L = e.memoizedState)),
            (x = jn || Id(e, a, x, l, U, L, d))
              ? (B ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = L)),
            (o.props = l),
            (o.state = L),
            (o.context = d),
            (l = x))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1)));
    } else {
      ((o = e.stateNode),
        Nu(t, e),
        (d = e.memoizedProps),
        (B = Oa(a, d)),
        (o.props = B),
        (V = e.pendingProps),
        (U = o.context),
        (L = a.contextType),
        (x = el),
        typeof L == "object" && L !== null && (x = re(L)),
        (g = a.getDerivedStateFromProps),
        (L =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== V || U !== x) && $d(e, o, l, x)),
        (jn = !1),
        (U = e.memoizedState),
        (o.state = U),
        ii(e, l, o, r),
        li());
      var N = e.memoizedState;
      d !== V ||
      U !== N ||
      jn ||
      (t !== null && t.dependencies !== null && bs(t.dependencies))
        ? (typeof g == "function" && (lo(e, a, g, l), (N = e.memoizedState)),
          (B =
            jn ||
            Id(e, a, B, l, U, N, x) ||
            (t !== null && t.dependencies !== null && bs(t.dependencies)))
            ? (L ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, N, x),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, N, x)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = N)),
          (o.props = l),
          (o.state = N),
          (o.context = x),
          (l = B))
        : (typeof o.componentDidUpdate != "function" ||
            (d === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      qs(t, e),
      (l = (e.flags & 128) !== 0),
      o || l
        ? ((o = e.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Aa(e, t.child, null, r)),
              (e.child = Aa(e, null, a, r)))
            : ue(t, e, a, r),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = yn(t, e, r)),
      t
    );
  }
  function hh(t, e, a, l) {
    return (ba(), (e.flags |= 256), ue(t, e, a, l), e.child);
  }
  var oo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function co(t) {
    return { baseLanes: t, cachePool: nd() };
  }
  function fo(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= ze), t);
  }
  function mh(t, e, a) {
    var l = e.pendingProps,
      r = !1,
      o = (e.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (vt) {
        if (
          (r ? qn(e) : Yn(),
          (t = jt)
            ? ((t = Em(t, qe)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Fe, overflow: Ie } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = kf(t)),
                (a.return = e),
                (e.child = a),
                (se = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw Un(e);
        return (Po(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var g = l.children;
      return (
        (l = l.fallback),
        r
          ? (Yn(),
            (r = e.mode),
            (g = Ys({ mode: "hidden", children: g }, r)),
            (l = Sa(l, r, a, null)),
            (g.return = e),
            (l.return = e),
            (g.sibling = l),
            (e.child = g),
            (l = e.child),
            (l.memoizedState = co(a)),
            (l.childLanes = fo(t, d, a)),
            (e.memoizedState = oo),
            ci(null, l))
          : (qn(e), ho(e, g))
      );
    }
    var x = t.memoizedState;
    if (x !== null && ((g = x.dehydrated), g !== null)) {
      if (o)
        e.flags & 256
          ? (qn(e), (e.flags &= -257), (e = mo(t, e, a)))
          : e.memoizedState !== null
            ? (Yn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Yn(),
              (g = l.fallback),
              (r = e.mode),
              (l = Ys({ mode: "visible", children: l.children }, r)),
              (g = Sa(g, r, a, null)),
              (g.flags |= 2),
              (l.return = e),
              (g.return = e),
              (l.sibling = g),
              (e.child = l),
              Aa(e, t.child, null, a),
              (l = e.child),
              (l.memoizedState = co(a)),
              (l.childLanes = fo(t, d, a)),
              (e.memoizedState = oo),
              (e = ci(null, l)));
      else if ((qn(e), Po(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var L = d.dgst;
        ((d = L),
          (l = Error(u(419))),
          (l.stack = ""),
          (l.digest = d),
          $l({ value: l, source: null, stack: null }),
          (e = mo(t, e, a)));
      } else if (
        (Jt || il(t, e, a, !1), (d = (a & t.childLanes) !== 0), Jt || d)
      ) {
        if (
          ((d = Dt),
          d !== null && ((l = Wc(d, a)), l !== 0 && l !== x.retryLane))
        )
          throw ((x.retryLane = l), ga(t, l), be(d, t, l), ro);
        (ko(g) || Js(), (e = mo(t, e, a)));
      } else
        ko(g)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (jt = Qe(g.nextSibling)),
            (se = e),
            (vt = !0),
            (Ln = null),
            (qe = !1),
            t !== null && Ff(e, t),
            (e = ho(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Yn(),
        (g = l.fallback),
        (r = e.mode),
        (x = t.child),
        (L = x.sibling),
        (l = on(x, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = x.subtreeFlags & 65011712),
        L !== null ? (g = on(L, g)) : ((g = Sa(g, r, a, null)), (g.flags |= 2)),
        (g.return = e),
        (l.return = e),
        (l.sibling = g),
        (e.child = l),
        ci(null, l),
        (l = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = co(a))
          : ((r = g.cachePool),
            r !== null
              ? ((x = kt._currentValue),
                (r = r.parent !== x ? { parent: x, pool: x } : r))
              : (r = nd()),
            (g = { baseLanes: g.baseLanes | a, cachePool: r })),
        (l.memoizedState = g),
        (l.childLanes = fo(t, d, a)),
        (e.memoizedState = oo),
        ci(t.child, l))
      : (qn(e),
        (a = t.child),
        (t = a.sibling),
        (a = on(a, { mode: "visible", children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function ho(t, e) {
    return (
      (e = Ys({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ys(t, e) {
    return ((t = Me(22, t, null, e)), (t.lanes = 0), t);
  }
  function mo(t, e, a) {
    return (
      Aa(e, t.child, null, a),
      (t = ho(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function yh(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), Ou(t.return, e, a));
  }
  function yo(t, e, a, l, r, o) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: r,
          treeForkCount: o,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = a),
        (d.tailMode = r),
        (d.treeForkCount = o));
  }
  function ph(t, e, a) {
    var l = e.pendingProps,
      r = l.revealOrder,
      o = l.tail;
    l = l.children;
    var d = Xt.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      P(Xt, d),
      ue(t, e, l, a),
      (l = vt ? Il : 0),
      !g && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && yh(t, a, e);
        else if (t.tag === 19) yh(t, a, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (r) {
      case "forwards":
        for (a = e.child, r = null; a !== null; )
          ((t = a.alternate),
            t !== null && Os(t) === null && (r = a),
            (a = a.sibling));
        ((a = r),
          a === null
            ? ((r = e.child), (e.child = null))
            : ((r = a.sibling), (a.sibling = null)),
          yo(e, !1, r, a, o, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Os(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = a), (a = r), (r = t));
        }
        yo(e, !0, a, null, o, l);
        break;
      case "together":
        yo(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function yn(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Vn |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((il(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, a = on(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (a = a.sibling = on(t, t.pendingProps)),
          (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function po(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && bs(t)));
  }
  function Hg(t, e, a) {
    switch (e.tag) {
      case 3:
        (Vt(e, e.stateNode.containerInfo),
          Nn(e, kt, t.memoizedState.cache),
          ba());
        break;
      case 27:
      case 5:
        nn(e);
        break;
      case 4:
        Vt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Nn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Yu(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (qn(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? mh(t, e, a)
              : (qn(e), (t = yn(t, e, a)), t !== null ? t.sibling : null);
        qn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (il(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          r)
        ) {
          if (l) return ph(t, e, a);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          P(Xt, Xt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), uh(t, e, a, e.pendingProps));
      case 24:
        Nn(e, kt, t.memoizedState.cache);
    }
    return yn(t, e, a);
  }
  function vh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Jt = !0;
      else {
        if (!po(t, a) && (e.flags & 128) === 0) return ((Jt = !1), Hg(t, e, a));
        Jt = (t.flags & 131072) !== 0;
      }
    else ((Jt = !1), vt && (e.flags & 1048576) !== 0 && Jf(e, Il, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = Ta(e.elementType)), (e.type = t), typeof t == "function"))
            bu(t)
              ? ((l = Oa(t, l)), (e.tag = 1), (e = dh(null, e, t, l, a)))
              : ((e.tag = 0), (e = uo(null, e, t, l, a)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === H) {
                ((e.tag = 11), (e = ih(null, e, t, l, a)));
                break t;
              } else if (r === X) {
                ((e.tag = 14), (e = sh(null, e, t, l, a)));
                break t;
              }
            }
            throw ((e = Gt(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return uo(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((l = e.type), (r = Oa(l, e.pendingProps)), dh(t, e, l, r, a));
      case 3:
        t: {
          if ((Vt(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          ((r = o.element), Nu(t, e), ii(e, l, null, a));
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            Nn(e, kt, l),
            l !== o.cache && wu(e, [kt], a, !0),
            li(),
            (l = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = hh(t, e, l, a);
              break t;
            } else if (l !== r) {
              ((r = je(Error(u(424)), e)), $l(r), (e = hh(t, e, l, a)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  jt = Qe(t.firstChild),
                  se = e,
                  vt = !0,
                  Ln = null,
                  qe = !0,
                  a = ud(e, null, l, a),
                  e.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((ba(), l === r)) {
              e = yn(t, e, a);
              break t;
            }
            ue(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          qs(t, e),
          t === null
            ? (a = Om(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : vt ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = nr(ft.current).createElement(a)),
                (l[ie] = e),
                (l[me] = t),
                oe(l, a, t),
                te(l),
                (e.stateNode = l))
            : (e.memoizedState = Om(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          nn(e),
          t === null &&
            vt &&
            ((l = e.stateNode = xm(e.type, e.pendingProps, ft.current)),
            (se = e),
            (qe = !0),
            (r = jt),
            Pn(e.type) ? ((Jo = r), (jt = Qe(l.firstChild))) : (jt = r)),
          ue(t, e, e.pendingProps.children, a),
          qs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            vt &&
            ((r = l = jt) &&
              ((l = m0(l, e.type, e.pendingProps, qe)),
              l !== null
                ? ((e.stateNode = l),
                  (se = e),
                  (jt = Qe(l.firstChild)),
                  (qe = !1),
                  (r = !0))
                : (r = !1)),
            r || Un(e)),
          nn(e),
          (r = e.type),
          (o = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = o.children),
          Xo(r, o) ? (l = null) : d !== null && Xo(r, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = Gu(t, e, wg, null, null, a)), (xi._currentValue = r)),
          qs(t, e),
          ue(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            vt &&
            ((t = a = jt) &&
              ((a = y0(a, e.pendingProps, qe)),
              a !== null
                ? ((e.stateNode = a), (se = e), (jt = null), (t = !0))
                : (t = !1)),
            t || Un(e)),
          null
        );
      case 13:
        return mh(t, e, a);
      case 4:
        return (
          Vt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Aa(e, null, l, a)) : ue(t, e, l, a),
          e.child
        );
      case 11:
        return ih(t, e, e.type, e.pendingProps, a);
      case 7:
        return (ue(t, e, e.pendingProps, a), e.child);
      case 8:
        return (ue(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (ue(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return (
          (l = e.pendingProps),
          Nn(e, e.type, l.value),
          ue(t, e, l.children, a),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          Ea(e),
          (r = re(r)),
          (l = l(r)),
          (e.flags |= 1),
          ue(t, e, l, a),
          e.child
        );
      case 14:
        return sh(t, e, e.type, e.pendingProps, a);
      case 15:
        return rh(t, e, e.type, e.pendingProps, a);
      case 19:
        return ph(t, e, a);
      case 31:
        return Bg(t, e, a);
      case 22:
        return uh(t, e, a, e.pendingProps);
      case 24:
        return (
          Ea(e),
          (l = re(kt)),
          t === null
            ? ((r = Du()),
              r === null &&
                ((r = Dt),
                (o = Cu()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= a),
                (r = o)),
              (e.memoizedState = { parent: l, cache: r }),
              Uu(e),
              Nn(e, kt, r))
            : ((t.lanes & a) !== 0 && (Nu(t, e), ii(e, null, null, a), li()),
              (r = t.memoizedState),
              (o = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  Nn(e, kt, l))
                : ((l = o.cache),
                  Nn(e, kt, l),
                  l !== r.cache && wu(e, [kt], a, !0))),
          ue(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function pn(t) {
    t.flags |= 4;
  }
  function vo(t, e, a, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Xh()) t.flags |= 8192;
        else throw ((xa = Ts), Lu);
    } else t.flags &= -16777217;
  }
  function gh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Lm(e)))
      if (Xh()) t.flags |= 8192;
      else throw ((xa = Ts), Lu);
  }
  function Qs(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Fc() : 536870912), (t.lanes |= e), (vl |= e)));
  }
  function fi(t, e) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling));
    else
      for (r = t.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = t),
          (r = r.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = a), e);
  }
  function qg(t, e, a) {
    var l = e.pendingProps;
    switch ((Tu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Bt(e), null);
      case 1:
        return (Bt(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          dn(kt),
          zt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (ll(e)
              ? pn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Au())),
          Bt(e),
          null
        );
      case 26:
        var r = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (pn(e),
              o !== null ? (Bt(e), gh(e, o)) : (Bt(e), vo(e, r, null, l, a)))
            : o
              ? o !== t.memoizedState
                ? (pn(e), Bt(e), gh(e, o))
                : (Bt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== l && pn(e),
                Bt(e),
                vo(e, r, t, l, a)),
          null
        );
      case 27:
        if (
          (an(e),
          (a = ft.current),
          (r = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (Bt(e), null);
          }
          ((t = $.current),
            ll(e) ? If(e) : ((t = xm(r, l, a)), (e.stateNode = t), pn(e)));
        }
        return (Bt(e), null);
      case 5:
        if ((an(e), (r = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return (Bt(e), null);
          }
          if (((o = $.current), ll(e))) If(e);
          else {
            var d = nr(ft.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r,
                    );
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (o.multiple = !0)
                        : l.size && (o.size = l.size));
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? d.createElement(r, { is: l.is })
                        : d.createElement(r);
                }
            }
            ((o[ie] = e), (o[me] = l));
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = o;
            t: switch ((oe(o, r, l), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && pn(e);
          }
        }
        return (
          Bt(e),
          vo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && pn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ft.current), ll(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (l = null),
              (r = se),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[ie] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                mm(t.nodeValue, a)
              )),
              t || Un(e, !0));
          } else
            ((t = nr(t).createTextNode(l)), (t[ie] = e), (e.stateNode = t));
        }
        return (Bt(e), null);
      case 31:
        if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = ll(e)), a !== null)) {
            if (t === null) {
              if (!l) throw Error(u(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(u(557));
              t[ie] = e;
            } else
              (ba(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (t = !1));
          } else
            ((a = Au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (Bt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = ll(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(u(317));
              r[ie] = e;
            } else
              (ba(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (r = !1));
          } else
            ((r = Au()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return (
          we(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = a), e)
            : ((a = l !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((l = e.child),
                (r = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (r = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== r && (l.flags |= 2048)),
              a !== t && a && (e.child.flags |= 8192),
              Qs(e, e.updateQueue),
              Bt(e),
              null)
        );
      case 4:
        return (zt(), t === null && qo(e.stateNode.containerInfo), Bt(e), null);
      case 10:
        return (dn(e.type), Bt(e), null);
      case 19:
        if ((G(Xt), (l = e.memoizedState), l === null)) return (Bt(e), null);
        if (((r = (e.flags & 128) !== 0), (o = l.rendering), o === null))
          if (r) fi(l, !1);
          else {
            if (Qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = Os(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      fi(l, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Qs(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;
                  )
                    (Zf(a, t), (a = a.sibling));
                  return (
                    P(Xt, (Xt.current & 1) | 2),
                    vt && cn(e, l.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            l.tail !== null &&
              ce() > Zs &&
              ((e.flags |= 128), (r = !0), fi(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = Os(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Qs(e, t),
                fi(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !o.alternate &&
                  !vt)
              )
                return (Bt(e), null);
            } else
              2 * ce() - l.renderingStartTime > Zs &&
                a !== 536870912 &&
                ((e.flags |= 128), (r = !0), fi(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = l.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (l.last = o));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ce()),
            (t.sibling = null),
            (a = Xt.current),
            P(Xt, r ? (a & 1) | 2 : a & 1),
            vt && cn(e, l.treeForkCount),
            t)
          : (Bt(e), null);
      case 22:
      case 23:
        return (
          we(e),
          qu(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Bt(e),
          (a = e.updateQueue),
          a !== null && Qs(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && G(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          dn(kt),
          Bt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Yg(t, e) {
    switch ((Tu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          dn(kt),
          zt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (an(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((we(e), e.alternate === null)) throw Error(u(340));
          ba();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (we(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          ba();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (G(Xt), null);
      case 4:
        return (zt(), null);
      case 10:
        return (dn(e.type), null);
      case 22:
      case 23:
        return (
          we(e),
          qu(),
          t !== null && G(Ra),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (dn(kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sh(t, e) {
    switch ((Tu(e), e.tag)) {
      case 3:
        (dn(kt), zt());
        break;
      case 26:
      case 27:
      case 5:
        an(e);
        break;
      case 4:
        zt();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        G(Xt);
        break;
      case 10:
        dn(e.type);
        break;
      case 22:
      case 23:
        (we(e), qu(), t !== null && G(Ra));
        break;
      case 24:
        dn(kt);
    }
  }
  function di(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var o = a.create,
              d = a.inst;
            ((l = o()), (d.destroy = l));
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (g) {
      Mt(e, e.return, g);
    }
  }
  function Qn(t, e, a) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (r = e));
              var x = a,
                L = g;
              try {
                L();
              } catch (B) {
                Mt(r, x, B);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (B) {
      Mt(e, e.return, B);
    }
  }
  function bh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        cd(e, a);
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
  }
  function _h(t, e, a) {
    ((a.props = Oa(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Mt(t, e, l);
    }
  }
  function hi(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (r) {
      Mt(t, e, r);
    }
  }
  function $e(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          Mt(t, e, r);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          Mt(t, e, r);
        }
      else a.current = null;
  }
  function Eh(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  function go(t, e, a) {
    try {
      var l = t.stateNode;
      (u0(l, t.type, a, e), (l[me] = e));
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  function Rh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Pn(t.type)) ||
      t.tag === 4
    );
  }
  function So(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Pn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function bo(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = rn)));
    else if (
      l !== 4 &&
      (l === 27 && Pn(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (bo(t, e, a), t = t.sibling; t !== null; )
        (bo(t, e, a), (t = t.sibling));
  }
  function Gs(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (
      l !== 4 &&
      (l === 27 && Pn(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (Gs(t, e, a), t = t.sibling; t !== null; )
        (Gs(t, e, a), (t = t.sibling));
  }
  function Th(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      (oe(e, l, a), (e[ie] = t), (e[me] = a));
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  var vn = !1,
    Ft = !1,
    _o = !1,
    xh = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Qg(t, e) {
    if (((t = t.containerInfo), (Go = or), (t = Bf(t)), hu(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var r = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, o.nodeType);
            } catch {
              a = null;
              break t;
            }
            var d = 0,
              g = -1,
              x = -1,
              L = 0,
              B = 0,
              V = t,
              U = null;
            e: for (;;) {
              for (
                var N;
                V !== a || (r !== 0 && V.nodeType !== 3) || (g = d + r),
                  V !== o || (l !== 0 && V.nodeType !== 3) || (x = d + l),
                  V.nodeType === 3 && (d += V.nodeValue.length),
                  (N = V.firstChild) !== null;
              )
                ((U = V), (V = N));
              for (;;) {
                if (V === t) break e;
                if (
                  (U === a && ++L === r && (g = d),
                  U === o && ++B === l && (x = d),
                  (N = V.nextSibling) !== null)
                )
                  break;
                ((V = U), (U = V.parentNode));
              }
              V = N;
            }
            a = g === -1 || x === -1 ? null : { start: g, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Vo = { focusedElem: t, selectionRange: a }, or = !1, ee = e;
      ee !== null;
    )
      if (
        ((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (ee = t));
      else
        for (; ee !== null; ) {
          switch (((e = ee), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (a = 0; a < t.length; a++)
                  ((r = t[a]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (a = e),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = a.stateNode));
                try {
                  var W = Oa(a.type, r);
                  ((t = l.getSnapshotBeforeUpdate(W, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (rt) {
                  Mt(a, a.return, rt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Zo(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zo(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ee = t));
            break;
          }
          ee = e.return;
        }
  }
  function Ah(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Sn(t, a), l & 4 && di(5, a));
        break;
      case 1:
        if ((Sn(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Mt(a, a.return, d);
            }
          else {
            var r = Oa(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Mt(a, a.return, d);
            }
          }
        (l & 64 && bh(a), l & 512 && hi(a, a.return));
        break;
      case 3:
        if ((Sn(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            cd(t, e);
          } catch (d) {
            Mt(a, a.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Th(a);
      case 26:
      case 5:
        (Sn(t, a), e === null && l & 4 && Eh(a), l & 512 && hi(a, a.return));
        break;
      case 12:
        Sn(t, a);
        break;
      case 31:
        (Sn(t, a), l & 4 && wh(t, a));
        break;
      case 13:
        (Sn(t, a),
          l & 4 && Ch(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = Fg.bind(null, a)), p0(t, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || vn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Ft), (r = vn));
          var o = Ft;
          ((vn = l),
            (Ft = e) && !o ? bn(t, a, (a.subtreeFlags & 8772) !== 0) : Sn(t, a),
            (vn = r),
            (Ft = o));
        }
        break;
      case 30:
        break;
      default:
        Sn(t, a);
    }
  }
  function Mh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Mh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Fr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ht = null,
    pe = !1;
  function gn(t, e, a) {
    for (a = a.child; a !== null; ) (Oh(t, e, a), (a = a.sibling));
  }
  function Oh(t, e, a) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(Bl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ft || $e(a, e),
          gn(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ft || $e(a, e);
        var l = Ht,
          r = pe;
        (Pn(a.type) && ((Ht = a.stateNode), (pe = !1)),
          gn(t, e, a),
          Ei(a.stateNode),
          (Ht = l),
          (pe = r));
        break;
      case 5:
        Ft || $e(a, e);
      case 6:
        if (
          ((l = Ht),
          (r = pe),
          (Ht = null),
          gn(t, e, a),
          (Ht = l),
          (pe = r),
          Ht !== null)
        )
          if (pe)
            try {
              (Ht.nodeType === 9
                ? Ht.body
                : Ht.nodeName === "HTML"
                  ? Ht.ownerDocument.body
                  : Ht
              ).removeChild(a.stateNode);
            } catch (o) {
              Mt(a, e, o);
            }
          else
            try {
              Ht.removeChild(a.stateNode);
            } catch (o) {
              Mt(a, e, o);
            }
        break;
      case 18:
        Ht !== null &&
          (pe
            ? ((t = Ht),
              bm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              xl(t))
            : bm(Ht, a.stateNode));
        break;
      case 4:
        ((l = Ht),
          (r = pe),
          (Ht = a.stateNode.containerInfo),
          (pe = !0),
          gn(t, e, a),
          (Ht = l),
          (pe = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Qn(2, a, e), Ft || Qn(4, a, e), gn(t, e, a));
        break;
      case 1:
        (Ft ||
          ($e(a, e),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && _h(a, e, l)),
          gn(t, e, a));
        break;
      case 21:
        gn(t, e, a);
        break;
      case 22:
        ((Ft = (l = Ft) || a.memoizedState !== null), gn(t, e, a), (Ft = l));
        break;
      default:
        gn(t, e, a);
    }
  }
  function wh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        xl(t);
      } catch (a) {
        Mt(e, e.return, a);
      }
    }
  }
  function Ch(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        xl(t);
      } catch (a) {
        Mt(e, e.return, a);
      }
  }
  function Gg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new xh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new xh()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Vs(t, e) {
    var a = Gg(t);
    e.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var r = Ig.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function ve(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var r = a[l],
          o = t,
          d = e,
          g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Pn(g.type)) {
                ((Ht = g.stateNode), (pe = !1));
                break t;
              }
              break;
            case 5:
              ((Ht = g.stateNode), (pe = !1));
              break t;
            case 3:
            case 4:
              ((Ht = g.stateNode.containerInfo), (pe = !0));
              break t;
          }
          g = g.return;
        }
        if (Ht === null) throw Error(u(160));
        (Oh(o, d, r),
          (Ht = null),
          (pe = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (zh(e, t), (e = e.sibling));
  }
  var Ke = null;
  function zh(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ve(e, t),
          ge(t),
          l & 4 && (Qn(3, t, t.return), di(3, t), Qn(5, t, t.return)));
        break;
      case 1:
        (ve(e, t),
          ge(t),
          l & 512 && (Ft || a === null || $e(a, a.return)),
          l & 64 &&
            vn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var r = Ke;
        if (
          (ve(e, t),
          ge(t),
          l & 512 && (Ft || a === null || $e(a, a.return)),
          l & 4)
        ) {
          var o = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type),
                    (a = t.memoizedProps),
                    (r = r.ownerDocument || r));
                  e: switch (l) {
                    case "title":
                      ((o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Yl] ||
                          o[ie] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(l)),
                          r.head.insertBefore(
                            o,
                            r.querySelector("head > title"),
                          )),
                        oe(o, l, a),
                        (o[ie] = t),
                        te(o),
                        (l = o));
                      break t;
                    case "link":
                      var d = zm("link", "href", r).get(l + (a.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              o.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              o.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              o.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(l)),
                        oe(o, l, a),
                        r.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (d = zm("meta", "content", r).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              o.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              o.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              o.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(l)),
                        oe(o, l, a),
                        r.head.appendChild(o));
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  ((o[ie] = t), te(o), (l = o));
                }
                t.stateNode = l;
              } else Dm(r, t.type, t.stateNode);
            else t.stateNode = Cm(r, l, t.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : o.count--,
                l === null
                  ? Dm(r, t.type, t.stateNode)
                  : Cm(r, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                go(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ve(e, t),
          ge(t),
          l & 512 && (Ft || a === null || $e(a, a.return)),
          a !== null && l & 4 && go(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ve(e, t),
          ge(t),
          l & 512 && (Ft || a === null || $e(a, a.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Pa(r, "");
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), go(t, r, a !== null ? a.memoizedProps : r)),
          l & 1024 && (_o = !0));
        break;
      case 6:
        if ((ve(e, t), ge(t), l & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((l = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = l;
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        break;
      case 3:
        if (
          ((ir = null),
          (r = Ke),
          (Ke = ar(e.containerInfo)),
          ve(e, t),
          (Ke = r),
          ge(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            xl(e.containerInfo);
          } catch (W) {
            Mt(t, t.return, W);
          }
        _o && ((_o = !1), Dh(t));
        break;
      case 4:
        ((l = Ke),
          (Ke = ar(t.stateNode.containerInfo)),
          ve(e, t),
          ge(t),
          (Ke = l));
        break;
      case 12:
        (ve(e, t), ge(t));
        break;
      case 31:
        (ve(e, t),
          ge(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Vs(t, l))));
        break;
      case 13:
        (ve(e, t),
          ge(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ks = ce()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Vs(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var x = a !== null && a.memoizedState !== null,
          L = vn,
          B = Ft;
        if (
          ((vn = L || r),
          (Ft = B || x),
          ve(e, t),
          (Ft = B),
          (vn = L),
          ge(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (a === null || x || vn || Ft || wa(t)),
              a = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                x = a = e;
                try {
                  if (((o = x.stateNode), r))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = x.stateNode;
                    var V = x.memoizedProps.style,
                      U =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    g.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (W) {
                  Mt(x, x.return, W);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = r ? "" : x.memoizedProps;
                } catch (W) {
                  Mt(x, x.return, W);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                x = e;
                try {
                  var N = x.stateNode;
                  r ? _m(N, !0) : _m(x.stateNode, !1);
                } catch (W) {
                  Mt(x, x.return, W);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), Vs(t, a))));
        break;
      case 19:
        (ve(e, t),
          ge(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Vs(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ve(e, t), ge(t));
    }
  }
  function ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Rh(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var r = a.stateNode,
              o = So(t);
            Gs(t, o, r);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (Pa(d, ""), (a.flags &= -33));
            var g = So(t);
            Gs(t, g, d);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo,
              L = So(t);
            bo(t, L, x);
            break;
          default:
            throw Error(u(161));
        }
      } catch (B) {
        Mt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Dh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Dh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Sn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Ah(t, e.alternate, e), (e = e.sibling));
  }
  function wa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Qn(4, e, e.return), wa(e));
          break;
        case 1:
          $e(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == "function" && _h(e, e.return, a),
            wa(e));
          break;
        case 27:
          Ei(e.stateNode);
        case 26:
        case 5:
          ($e(e, e.return), wa(e));
          break;
        case 22:
          e.memoizedState === null && wa(e);
          break;
        case 30:
          wa(e);
          break;
        default:
          wa(e);
      }
      t = t.sibling;
    }
  }
  function bn(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        o = e,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (bn(r, o, a), di(4, o));
          break;
        case 1:
          if (
            (bn(r, o, a),
            (l = o),
            (r = l.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (L) {
              Mt(l, l.return, L);
            }
          if (((l = o), (r = l.updateQueue), r !== null)) {
            var g = l.stateNode;
            try {
              var x = r.shared.hiddenCallbacks;
              if (x !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < x.length; r++)
                  od(x[r], g);
            } catch (L) {
              Mt(l, l.return, L);
            }
          }
          (a && d & 64 && bh(o), hi(o, o.return));
          break;
        case 27:
          Th(o);
        case 26:
        case 5:
          (bn(r, o, a), a && l === null && d & 4 && Eh(o), hi(o, o.return));
          break;
        case 12:
          bn(r, o, a);
          break;
        case 31:
          (bn(r, o, a), a && d & 4 && wh(r, o));
          break;
        case 13:
          (bn(r, o, a), a && d & 4 && Ch(r, o));
          break;
        case 22:
          (o.memoizedState === null && bn(r, o, a), hi(o, o.return));
          break;
        case 30:
          break;
        default:
          bn(r, o, a);
      }
      e = e.sibling;
    }
  }
  function Eo(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Wl(a)));
  }
  function Ro(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wl(t)));
  }
  function Ze(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Lh(t, e, a, l), (e = e.sibling));
  }
  function Lh(t, e, a, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ze(t, e, a, l), r & 2048 && di(9, e));
        break;
      case 1:
        Ze(t, e, a, l);
        break;
      case 3:
        (Ze(t, e, a, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wl(t))));
        break;
      case 12:
        if (r & 2048) {
          (Ze(t, e, a, l), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              d = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (x) {
            Mt(e, e.return, x);
          }
        } else Ze(t, e, a, l);
        break;
      case 31:
        Ze(t, e, a, l);
        break;
      case 13:
        Ze(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ze(t, e, a, l)
              : mi(t, e)
            : o._visibility & 2
              ? Ze(t, e, a, l)
              : ((o._visibility |= 2),
                ml(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && Eo(d, e));
        break;
      case 24:
        (Ze(t, e, a, l), r & 2048 && Ro(e.alternate, e));
        break;
      default:
        Ze(t, e, a, l);
    }
  }
  function ml(t, e, a, l, r) {
    for (
      r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var o = t,
        d = e,
        g = a,
        x = l,
        L = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (ml(o, d, g, x, r), di(8, d));
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          (d.memoizedState !== null
            ? B._visibility & 2
              ? ml(o, d, g, x, r)
              : mi(o, d)
            : ((B._visibility |= 2), ml(o, d, g, x, r)),
            r && L & 2048 && Eo(d.alternate, d));
          break;
        case 24:
          (ml(o, d, g, x, r), r && L & 2048 && Ro(d.alternate, d));
          break;
        default:
          ml(o, d, g, x, r);
      }
      e = e.sibling;
    }
  }
  function mi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            (mi(a, l), r & 2048 && Eo(l.alternate, l));
            break;
          case 24:
            (mi(a, l), r & 2048 && Ro(l.alternate, l));
            break;
          default:
            mi(a, l);
        }
        e = e.sibling;
      }
  }
  var yi = 8192;
  function yl(t, e, a) {
    if (t.subtreeFlags & yi)
      for (t = t.child; t !== null; ) (Uh(t, e, a), (t = t.sibling));
  }
  function Uh(t, e, a) {
    switch (t.tag) {
      case 26:
        (yl(t, e, a),
          t.flags & yi &&
            t.memoizedState !== null &&
            O0(a, Ke, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        yl(t, e, a);
        break;
      case 3:
      case 4:
        var l = Ke;
        ((Ke = ar(t.stateNode.containerInfo)), yl(t, e, a), (Ke = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = yi), (yi = 16777216), yl(t, e, a), (yi = l))
            : yl(t, e, a));
        break;
      default:
        yl(t, e, a);
    }
  }
  function Nh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function pi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((ee = l), Bh(l, t));
        }
      Nh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (jh(t), (t = t.sibling));
  }
  function jh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pi(t), t.flags & 2048 && Qn(9, t, t.return));
        break;
      case 3:
        pi(t);
        break;
      case 12:
        pi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Xs(t))
          : pi(t);
        break;
      default:
        pi(t);
    }
  }
  function Xs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ((ee = l), Bh(l, t));
        }
      Nh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Qn(8, e, e.return), Xs(e));
          break;
        case 22:
          ((a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Xs(e)));
          break;
        default:
          Xs(e);
      }
      t = t.sibling;
    }
  }
  function Bh(t, e) {
    for (; ee !== null; ) {
      var a = ee;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Qn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Wl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (ee = l));
      else
        t: for (a = t; ee !== null; ) {
          l = ee;
          var r = l.sibling,
            o = l.return;
          if ((Mh(l), l === a)) {
            ee = null;
            break t;
          }
          if (r !== null) {
            ((r.return = o), (ee = r));
            break t;
          }
          ee = o;
        }
    }
  }
  var Vg = {
      getCacheForType: function (t) {
        var e = re(kt),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return re(kt).controller.signal;
      },
    },
    Xg = typeof WeakMap == "function" ? WeakMap : Map,
    Rt = 0,
    Dt = null,
    dt = null,
    yt = 0,
    At = 0,
    Ce = null,
    Gn = !1,
    pl = !1,
    To = !1,
    _n = 0,
    Qt = 0,
    Vn = 0,
    Ca = 0,
    xo = 0,
    ze = 0,
    vl = 0,
    vi = null,
    Se = null,
    Ao = !1,
    Ks = 0,
    Hh = 0,
    Zs = 1 / 0,
    ks = null,
    Xn = null,
    It = 0,
    Kn = null,
    gl = null,
    En = 0,
    Mo = 0,
    Oo = null,
    qh = null,
    gi = 0,
    wo = null;
  function De() {
    return (Rt & 2) !== 0 && yt !== 0 ? yt & -yt : j.T !== null ? No() : tf();
  }
  function Yh() {
    if (ze === 0)
      if ((yt & 536870912) === 0 || vt) {
        var t = es;
        ((es <<= 1), (es & 3932160) === 0 && (es = 262144), (ze = t));
      } else ze = 536870912;
    return ((t = Oe.current), t !== null && (t.flags |= 32), ze);
  }
  function be(t, e, a) {
    (((t === Dt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (Sl(t, 0), Zn(t, yt, ze, !1)),
      ql(t, a),
      ((Rt & 2) === 0 || t !== Dt) &&
        (t === Dt &&
          ((Rt & 2) === 0 && (Ca |= a), Qt === 4 && Zn(t, yt, ze, !1)),
        We(t)));
  }
  function Qh(t, e, a) {
    if ((Rt & 6) !== 0) throw Error(u(327));
    var l = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Hl(t, e),
      r = l ? kg(t, e) : zo(t, e, !0),
      o = l;
    do {
      if (r === 0) {
        pl && !l && Zn(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), o && !Kg(a))) {
          ((r = zo(t, e, !1)), (o = !1));
          continue;
        }
        if (r === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              r = vi;
              var x = g.current.memoizedState.isDehydrated;
              if ((x && (Sl(g, d).flags |= 256), (d = zo(g, d, !1)), d !== 2)) {
                if (To && !x) {
                  ((g.errorRecoveryDisabledLanes |= o), (Ca |= o), (r = 4));
                  break t;
                }
                ((o = Se),
                  (Se = r),
                  o !== null &&
                    (Se === null ? (Se = o) : Se.push.apply(Se, o)));
              }
              r = d;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (Sl(t, 0), Zn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (o = r), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Zn(l, e, ze, !Gn);
              break t;
            case 2:
              Se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((r = Ks + 300 - ce()), 10 < r)) {
            if ((Zn(l, e, ze, !Gn), as(l, 0, !0) !== 0)) break t;
            ((En = e),
              (l.timeoutHandle = gm(
                Gh.bind(
                  null,
                  l,
                  a,
                  Se,
                  ks,
                  Ao,
                  e,
                  ze,
                  Ca,
                  vl,
                  Gn,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                r,
              )));
            break t;
          }
          Gh(l, a, Se, ks, Ao, e, ze, Ca, vl, Gn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    We(t);
  }
  function Gh(t, e, a, l, r, o, d, g, x, L, B, V, U, N) {
    if (
      ((t.timeoutHandle = -1),
      (V = e.subtreeFlags),
      V & 8192 || (V & 16785408) === 16785408)
    ) {
      ((V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: rn,
      }),
        Uh(e, o, V));
      var W =
        (o & 62914560) === o ? Ks - ce() : (o & 4194048) === o ? Hh - ce() : 0;
      if (((W = w0(V, W)), W !== null)) {
        ((En = o),
          (t.cancelPendingCommit = W(
            Fh.bind(null, t, e, o, a, l, r, d, g, x, B, V, null, U, N),
          )),
          Zn(t, o, d, !L));
        return;
      }
    }
    Fh(t, e, o, a, l, r, d, g, x);
  }
  function Kg(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var r = a[l],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!Ae(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Zn(t, e, a, l) {
    ((e &= ~xo),
      (e &= ~Ca),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var o = 31 - xe(r),
        d = 1 << o;
      ((l[o] = -1), (r &= ~d));
    }
    a !== 0 && Ic(t, a, e);
  }
  function Ps() {
    return (Rt & 6) === 0 ? (Si(0), !1) : !0;
  }
  function Co() {
    if (dt !== null) {
      if (At === 0) var t = dt.return;
      else ((t = dt), (fn = _a = null), Ku(t), (ol = null), (ei = 0), (t = dt));
      for (; t !== null; ) (Sh(t.alternate, t), (t = t.return));
      dt = null;
    }
  }
  function Sl(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), f0(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      (En = 0),
      Co(),
      (Dt = t),
      (dt = a = on(t.current, null)),
      (yt = e),
      (At = 0),
      (Ce = null),
      (Gn = !1),
      (pl = Hl(t, e)),
      (To = !1),
      (vl = ze = xo = Ca = Vn = Qt = 0),
      (Se = vi = null),
      (Ao = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - xe(l),
          o = 1 << r;
        ((e |= t[r]), (l &= ~o));
      }
    return ((_n = e), ys(), a);
  }
  function Vh(t, e) {
    ((ot = null),
      (j.H = oi),
      e === ul || e === Rs
        ? ((e = id()), (At = 3))
        : e === Lu
          ? ((e = id()), (At = 4))
          : (At =
              e === ro
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ce = e),
      dt === null && ((Qt = 1), Bs(t, je(e, t.current))));
  }
  function Xh() {
    var t = Oe.current;
    return t === null
      ? !0
      : (yt & 4194048) === yt
        ? Ye === null
        : (yt & 62914560) === yt || (yt & 536870912) !== 0
          ? t === Ye
          : !1;
  }
  function Kh() {
    var t = j.H;
    return ((j.H = oi), t === null ? oi : t);
  }
  function Zh() {
    var t = j.A;
    return ((j.A = Vg), t);
  }
  function Js() {
    ((Qt = 4),
      Gn || ((yt & 4194048) !== yt && Oe.current !== null) || (pl = !0),
      ((Vn & 134217727) === 0 && (Ca & 134217727) === 0) ||
        Dt === null ||
        Zn(Dt, yt, ze, !1));
  }
  function zo(t, e, a) {
    var l = Rt;
    Rt |= 2;
    var r = Kh(),
      o = Zh();
    ((Dt !== t || yt !== e) && ((ks = null), Sl(t, e)), (e = !1));
    var d = Qt;
    t: do
      try {
        if (At !== 0 && dt !== null) {
          var g = dt,
            x = Ce;
          switch (At) {
            case 8:
              (Co(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Oe.current === null && (e = !0);
              var L = At;
              if (((At = 0), (Ce = null), bl(t, g, x, L), a && pl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((L = At), (At = 0), (Ce = null), bl(t, g, x, L));
          }
        }
        (Zg(), (d = Qt));
        break;
      } catch (B) {
        Vh(t, B);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (fn = _a = null),
      (Rt = l),
      (j.H = r),
      (j.A = o),
      dt === null && ((Dt = null), (yt = 0), ys()),
      d
    );
  }
  function Zg() {
    for (; dt !== null; ) kh(dt);
  }
  function kg(t, e) {
    var a = Rt;
    Rt |= 2;
    var l = Kh(),
      r = Zh();
    Dt !== t || yt !== e
      ? ((ks = null), (Zs = ce() + 500), Sl(t, e))
      : (pl = Hl(t, e));
    t: do
      try {
        if (At !== 0 && dt !== null) {
          e = dt;
          var o = Ce;
          e: switch (At) {
            case 1:
              ((At = 0), (Ce = null), bl(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (ad(o)) {
                ((At = 0), (Ce = null), Ph(e));
                break;
              }
              ((e = function () {
                ((At !== 2 && At !== 9) || Dt !== t || (At = 7), We(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              ad(o)
                ? ((At = 0), (Ce = null), Ph(e))
                : ((At = 0), (Ce = null), bl(t, e, o, 7));
              break;
            case 5:
              var d = null;
              switch (dt.tag) {
                case 26:
                  d = dt.memoizedState;
                case 5:
                case 27:
                  var g = dt;
                  if (d ? Lm(d) : g.stateNode.complete) {
                    ((At = 0), (Ce = null));
                    var x = g.sibling;
                    if (x !== null) dt = x;
                    else {
                      var L = g.return;
                      L !== null ? ((dt = L), Fs(L)) : (dt = null);
                    }
                    break e;
                  }
              }
              ((At = 0), (Ce = null), bl(t, e, o, 5));
              break;
            case 6:
              ((At = 0), (Ce = null), bl(t, e, o, 6));
              break;
            case 8:
              (Co(), (Qt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        Pg();
        break;
      } catch (B) {
        Vh(t, B);
      }
    while (!0);
    return (
      (fn = _a = null),
      (j.H = l),
      (j.A = r),
      (Rt = a),
      dt !== null ? 0 : ((Dt = null), (yt = 0), ys(), Qt)
    );
  }
  function Pg() {
    for (; dt !== null && !Wi(); ) kh(dt);
  }
  function kh(t) {
    var e = vh(t.alternate, t, _n);
    ((t.memoizedProps = t.pendingProps), e === null ? Fs(t) : (dt = e));
  }
  function Ph(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = fh(a, e, e.pendingProps, e.type, void 0, yt);
        break;
      case 11:
        e = fh(a, e, e.pendingProps, e.type.render, e.ref, yt);
        break;
      case 5:
        Ku(e);
      default:
        (Sh(a, e), (e = dt = Zf(e, _n)), (e = vh(a, e, _n)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Fs(t) : (dt = e));
  }
  function bl(t, e, a, l) {
    ((fn = _a = null), Ku(e), (ol = null), (ei = 0));
    var r = e.return;
    try {
      if (jg(t, r, e, a, yt)) {
        ((Qt = 1), Bs(t, je(a, t.current)), (dt = null));
        return;
      }
    } catch (o) {
      if (r !== null) throw ((dt = r), o);
      ((Qt = 1), Bs(t, je(a, t.current)), (dt = null));
      return;
    }
    e.flags & 32768
      ? (vt || l === 1
          ? (t = !0)
          : pl || (yt & 536870912) !== 0
            ? (t = !1)
            : ((Gn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Oe.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Jh(e, t))
      : Fs(e);
  }
  function Fs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Jh(e, Gn);
        return;
      }
      t = e.return;
      var a = qg(e.alternate, e, _n);
      if (a !== null) {
        dt = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Qt === 0 && (Qt = 5);
  }
  function Jh(t, e) {
    do {
      var a = Yg(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (dt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        dt = t;
        return;
      }
      dt = t = a;
    } while (t !== null);
    ((Qt = 6), (dt = null));
  }
  function Fh(t, e, a, l, r, o, d, g, x) {
    t.cancelPendingCommit = null;
    do Is();
    while (It !== 0);
    if ((Rt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= gu),
        Mv(t, a, o, d, g, x),
        t === Dt && ((dt = Dt = null), (yt = 0)),
        (gl = e),
        (Kn = t),
        (En = a),
        (Mo = o),
        (Oo = r),
        (qh = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            $g(Qa, function () {
              return (em(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = j.T), (j.T = null), (r = k.p), (k.p = 2), (d = Rt), (Rt |= 4));
        try {
          Qg(t, e, a);
        } finally {
          ((Rt = d), (k.p = r), (j.T = l));
        }
      }
      ((It = 1), Ih(), $h(), Wh());
    }
  }
  function Ih() {
    if (It === 1) {
      It = 0;
      var t = Kn,
        e = gl,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = j.T), (j.T = null));
        var l = k.p;
        k.p = 2;
        var r = Rt;
        Rt |= 4;
        try {
          zh(e, t);
          var o = Vo,
            d = Bf(t.containerInfo),
            g = o.focusedElem,
            x = o.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            jf(g.ownerDocument.documentElement, g)
          ) {
            if (x !== null && hu(g)) {
              var L = x.start,
                B = x.end;
              if ((B === void 0 && (B = L), "selectionStart" in g))
                ((g.selectionStart = L),
                  (g.selectionEnd = Math.min(B, g.value.length)));
              else {
                var V = g.ownerDocument || document,
                  U = (V && V.defaultView) || window;
                if (U.getSelection) {
                  var N = U.getSelection(),
                    W = g.textContent.length,
                    rt = Math.min(x.start, W),
                    Ct = x.end === void 0 ? rt : Math.min(x.end, W);
                  !N.extend && rt > Ct && ((d = Ct), (Ct = rt), (rt = d));
                  var z = Nf(g, rt),
                    M = Nf(g, Ct);
                  if (
                    z &&
                    M &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== z.node ||
                      N.anchorOffset !== z.offset ||
                      N.focusNode !== M.node ||
                      N.focusOffset !== M.offset)
                  ) {
                    var D = V.createRange();
                    (D.setStart(z.node, z.offset),
                      N.removeAllRanges(),
                      rt > Ct
                        ? (N.addRange(D), N.extend(M.node, M.offset))
                        : (D.setEnd(M.node, M.offset), N.addRange(D)));
                  }
                }
              }
            }
            for (V = [], N = g; (N = N.parentNode); )
              N.nodeType === 1 &&
                V.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < V.length;
              g++
            ) {
              var Y = V[g];
              ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
            }
          }
          ((or = !!Go), (Vo = Go = null));
        } finally {
          ((Rt = r), (k.p = l), (j.T = a));
        }
      }
      ((t.current = e), (It = 2));
    }
  }
  function $h() {
    if (It === 2) {
      It = 0;
      var t = Kn,
        e = gl,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = j.T), (j.T = null));
        var l = k.p;
        k.p = 2;
        var r = Rt;
        Rt |= 4;
        try {
          Ah(t, e.alternate, e);
        } finally {
          ((Rt = r), (k.p = l), (j.T = a));
        }
      }
      It = 3;
    }
  }
  function Wh() {
    if (It === 4 || It === 3) {
      ((It = 0), Kr());
      var t = Kn,
        e = gl,
        a = En,
        l = qh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (It = 5)
        : ((It = 0), (gl = Kn = null), tm(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (Xn = null),
        Pr(a),
        (e = e.stateNode),
        Te && typeof Te.onCommitFiberRoot == "function")
      )
        try {
          Te.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = j.T), (r = k.p), (k.p = 2), (j.T = null));
        try {
          for (var o = t.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            o(g.value, { componentStack: g.stack });
          }
        } finally {
          ((j.T = e), (k.p = r));
        }
      }
      ((En & 3) !== 0 && Is(),
        We(t),
        (r = t.pendingLanes),
        (a & 261930) !== 0 && (r & 42) !== 0
          ? t === wo
            ? gi++
            : ((gi = 0), (wo = t))
          : (gi = 0),
        Si(0));
    }
  }
  function tm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wl(e)));
  }
  function Is() {
    return (Ih(), $h(), Wh(), em());
  }
  function em() {
    if (It !== 5) return !1;
    var t = Kn,
      e = Mo;
    Mo = 0;
    var a = Pr(En),
      l = j.T,
      r = k.p;
    try {
      ((k.p = 32 > a ? 32 : a), (j.T = null), (a = Oo), (Oo = null));
      var o = Kn,
        d = En;
      if (((It = 0), (gl = Kn = null), (En = 0), (Rt & 6) !== 0))
        throw Error(u(331));
      var g = Rt;
      if (
        ((Rt |= 4),
        jh(o.current),
        Lh(o, o.current, d, a),
        (Rt = g),
        Si(0, !1),
        Te && typeof Te.onPostCommitFiberRoot == "function")
      )
        try {
          Te.onPostCommitFiberRoot(Bl, o);
        } catch {}
      return !0;
    } finally {
      ((k.p = r), (j.T = l), tm(t, e));
    }
  }
  function nm(t, e, a) {
    ((e = je(a, e)),
      (e = so(t.stateNode, e, 2)),
      (t = Hn(t, e, 2)),
      t !== null && (ql(t, 2), We(t)));
  }
  function Mt(t, e, a) {
    if (t.tag === 3) nm(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          nm(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(l)))
          ) {
            ((t = je(a, t)),
              (a = ah(2)),
              (l = Hn(e, a, 2)),
              l !== null && (lh(a, l, e, t), ql(l, 2), We(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Do(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Xg();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(a) ||
      ((To = !0), r.add(a), (t = Jg.bind(null, t, e, a)), e.then(t, t));
  }
  function Jg(t, e, a) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Dt === t &&
        (yt & a) === a &&
        (Qt === 4 || (Qt === 3 && (yt & 62914560) === yt && 300 > ce() - Ks)
          ? (Rt & 2) === 0 && Sl(t, 0)
          : (xo |= a),
        vl === yt && (vl = 0)),
      We(t));
  }
  function am(t, e) {
    (e === 0 && (e = Fc()), (t = ga(t, e)), t !== null && (ql(t, e), We(t)));
  }
  function Fg(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), am(t, a));
  }
  function Ig(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          r = t.memoizedState;
        r !== null && (a = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (l !== null && l.delete(e), am(t, a));
  }
  function $g(t, e) {
    return Ve(t, e);
  }
  var $s = null,
    _l = null,
    Lo = !1,
    Ws = !1,
    Uo = !1,
    kn = 0;
  function We(t) {
    (t !== _l &&
      t.next === null &&
      (_l === null ? ($s = _l = t) : (_l = _l.next = t)),
      (Ws = !0),
      Lo || ((Lo = !0), t0()));
  }
  function Si(t, e) {
    if (!Uo && Ws) {
      Uo = !0;
      do
        for (var a = !1, l = $s; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              ((o = (1 << (31 - xe(42 | t) + 1)) - 1),
                (o &= r & ~(d & ~g)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((a = !0), rm(l, o));
          } else
            ((o = yt),
              (o = as(
                l,
                l === Dt ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Hl(l, o) || ((a = !0), rm(l, o)));
          l = l.next;
        }
      while (a);
      Uo = !1;
    }
  }
  function Wg() {
    lm();
  }
  function lm() {
    Ws = Lo = !1;
    var t = 0;
    kn !== 0 && c0() && (t = kn);
    for (var e = ce(), a = null, l = $s; l !== null; ) {
      var r = l.next,
        o = im(l, e);
      (o === 0
        ? ((l.next = null),
          a === null ? ($s = r) : (a.next = r),
          r === null && (_l = a))
        : ((a = l), (t !== 0 || (o & 3) !== 0) && (Ws = !0)),
        (l = r));
    }
    ((It !== 0 && It !== 5) || Si(t), kn !== 0 && (kn = 0));
  }
  function im(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        r = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;
    ) {
      var d = 31 - xe(o),
        g = 1 << d,
        x = r[d];
      (x === -1
        ? ((g & a) === 0 || (g & l) !== 0) && (r[d] = Av(g, e))
        : x <= e && (t.expiredLanes |= g),
        (o &= ~g));
    }
    if (
      ((e = Dt),
      (a = yt),
      (a = as(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (l = t.callbackNode),
      a === 0 ||
        (t === e && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && jl(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Hl(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && jl(l), Pr(a))) {
        case 2:
        case 8:
          a = Je;
          break;
        case 32:
          a = Qa;
          break;
        case 268435456:
          a = Jc;
          break;
        default:
          a = Qa;
      }
      return (
        (l = sm.bind(null, t)),
        (a = Ve(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && jl(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function sm(t, e) {
    if (It !== 0 && It !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Is() && t.callbackNode !== a) return null;
    var l = yt;
    return (
      (l = as(
        t,
        t === Dt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Qh(t, l, e),
          im(t, ce()),
          t.callbackNode != null && t.callbackNode === a
            ? sm.bind(null, t)
            : null)
    );
  }
  function rm(t, e) {
    if (Is()) return null;
    Qh(t, e, !0);
  }
  function t0() {
    d0(function () {
      (Rt & 6) !== 0 ? Ve(le, Wg) : lm();
    });
  }
  function No() {
    if (kn === 0) {
      var t = sl;
      (t === 0 && ((t = ts), (ts <<= 1), (ts & 261888) === 0 && (ts = 256)),
        (kn = t));
    }
    return kn;
  }
  function um(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : rs("" + t);
  }
  function om(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function e0(t, e, a, l, r) {
    if (e === "submit" && a && a.stateNode === r) {
      var o = um((r[me] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[me] || null)
          ? um(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((o = e), (d = null)));
      var g = new fs("action", "action", null, l, r);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (kn !== 0) {
                  var x = d ? om(r, d) : new FormData(r);
                  to(
                    a,
                    { pending: !0, data: x, method: r.method, action: o },
                    null,
                    x,
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (x = d ? om(r, d) : new FormData(r)),
                  to(
                    a,
                    { pending: !0, data: x, method: r.method, action: o },
                    o,
                    x,
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var jo = 0; jo < vu.length; jo++) {
    var Bo = vu[jo],
      n0 = Bo.toLowerCase(),
      a0 = Bo[0].toUpperCase() + Bo.slice(1);
    Xe(n0, "on" + a0);
  }
  (Xe(Yf, "onAnimationEnd"),
    Xe(Qf, "onAnimationIteration"),
    Xe(Gf, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(Sg, "onTransitionRun"),
    Xe(bg, "onTransitionStart"),
    Xe(_g, "onTransitionCancel"),
    Xe(Vf, "onTransitionEnd"),
    Za("onMouseEnter", ["mouseout", "mouseover"]),
    Za("onMouseLeave", ["mouseout", "mouseover"]),
    Za("onPointerEnter", ["pointerout", "pointerover"]),
    Za("onPointerLeave", ["pointerout", "pointerover"]),
    ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    l0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bi),
    );
  function cm(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        r = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              x = g.instance,
              L = g.currentTarget;
            if (((g = g.listener), x !== o && r.isPropagationStopped()))
              break t;
            ((o = g), (r.currentTarget = L));
            try {
              o(r);
            } catch (B) {
              ms(B);
            }
            ((r.currentTarget = null), (o = x));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (x = g.instance),
              (L = g.currentTarget),
              (g = g.listener),
              x !== o && r.isPropagationStopped())
            )
              break t;
            ((o = g), (r.currentTarget = L));
            try {
              o(r);
            } catch (B) {
              ms(B);
            }
            ((r.currentTarget = null), (o = x));
          }
      }
    }
  }
  function ht(t, e) {
    var a = e[Jr];
    a === void 0 && (a = e[Jr] = new Set());
    var l = t + "__bubble";
    a.has(l) || (fm(e, t, 2, !1), a.add(l));
  }
  function Ho(t, e, a) {
    var l = 0;
    (e && (l |= 4), fm(a, t, l, e));
  }
  var tr = "_reactListening" + Math.random().toString(36).slice(2);
  function qo(t) {
    if (!t[tr]) {
      ((t[tr] = !0),
        af.forEach(function (a) {
          a !== "selectionchange" && (l0.has(a) || Ho(a, !1, t), Ho(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[tr] || ((e[tr] = !0), Ho("selectionchange", !1, e));
    }
  }
  function fm(t, e, a, l) {
    switch (Ym(e)) {
      case 2:
        var r = D0;
        break;
      case 8:
        r = L0;
        break;
      default:
        r = tc;
    }
    ((a = r.bind(null, e, a, t)),
      (r = void 0),
      !lu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: r })
          : t.addEventListener(e, a, !0)
        : r !== void 0
          ? t.addEventListener(e, a, { passive: r })
          : t.addEventListener(e, a, !1));
  }
  function Yo(t, e, a, l, r) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === r)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Va(g)), d === null)) return;
            if (((x = d.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              l = o = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    pf(function () {
      var L = o,
        B = nu(a),
        V = [];
      t: {
        var U = Xf.get(t);
        if (U !== void 0) {
          var N = fs,
            W = t;
          switch (t) {
            case "keypress":
              if (os(a) === 0) break t;
            case "keydown":
            case "keyup":
              N = Iv;
              break;
            case "focusin":
              ((W = "focus"), (N = uu));
              break;
            case "focusout":
              ((W = "blur"), (N = uu));
              break;
            case "beforeblur":
            case "afterblur":
              N = uu;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = qv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = tg;
              break;
            case Yf:
            case Qf:
            case Gf:
              N = Gv;
              break;
            case Vf:
              N = ng;
              break;
            case "scroll":
            case "scrollend":
              N = Bv;
              break;
            case "wheel":
              N = lg;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Xv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = _f;
              break;
            case "toggle":
            case "beforetoggle":
              N = sg;
          }
          var rt = (e & 4) !== 0,
            Ct = !rt && (t === "scroll" || t === "scrollend"),
            z = rt ? (U !== null ? U + "Capture" : null) : U;
          rt = [];
          for (var M = L, D; M !== null; ) {
            var Y = M;
            if (
              ((D = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                D === null ||
                z === null ||
                ((Y = Gl(M, z)), Y != null && rt.push(_i(M, Y, D))),
              Ct)
            )
              break;
            M = M.return;
          }
          0 < rt.length &&
            ((U = new N(U, W, null, a, B)),
            V.push({ event: U, listeners: rt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            U &&
              a !== eu &&
              (W = a.relatedTarget || a.fromElement) &&
              (Va(W) || W[Ga]))
          )
            break t;
          if (
            (N || U) &&
            ((U =
              B.window === B
                ? B
                : (U = B.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            N
              ? ((W = a.relatedTarget || a.toElement),
                (N = L),
                (W = W ? Va(W) : null),
                W !== null &&
                  ((Ct = f(W)),
                  (rt = W.tag),
                  W !== Ct || (rt !== 5 && rt !== 27 && rt !== 6)) &&
                  (W = null))
              : ((N = null), (W = L)),
            N !== W)
          ) {
            if (
              ((rt = Sf),
              (Y = "onMouseLeave"),
              (z = "onMouseEnter"),
              (M = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((rt = _f),
                (Y = "onPointerLeave"),
                (z = "onPointerEnter"),
                (M = "pointer")),
              (Ct = N == null ? U : Ql(N)),
              (D = W == null ? U : Ql(W)),
              (U = new rt(Y, M + "leave", N, a, B)),
              (U.target = Ct),
              (U.relatedTarget = D),
              (Y = null),
              Va(B) === L &&
                ((rt = new rt(z, M + "enter", W, a, B)),
                (rt.target = D),
                (rt.relatedTarget = Ct),
                (Y = rt)),
              (Ct = Y),
              N && W)
            )
              e: {
                for (rt = i0, z = N, M = W, D = 0, Y = z; Y; Y = rt(Y)) D++;
                Y = 0;
                for (var lt = M; lt; lt = rt(lt)) Y++;
                for (; 0 < D - Y; ) ((z = rt(z)), D--);
                for (; 0 < Y - D; ) ((M = rt(M)), Y--);
                for (; D--; ) {
                  if (z === M || (M !== null && z === M.alternate)) {
                    rt = z;
                    break e;
                  }
                  ((z = rt(z)), (M = rt(M)));
                }
                rt = null;
              }
            else rt = null;
            (N !== null && dm(V, U, N, rt, !1),
              W !== null && Ct !== null && dm(V, Ct, W, rt, !0));
          }
        }
        t: {
          if (
            ((U = L ? Ql(L) : window),
            (N = U.nodeName && U.nodeName.toLowerCase()),
            N === "select" || (N === "input" && U.type === "file"))
          )
            var St = wf;
          else if (Mf(U))
            if (Cf) St = pg;
            else {
              St = mg;
              var et = hg;
            }
          else
            ((N = U.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? L && tu(L.elementType) && (St = wf)
                : (St = yg));
          if (St && (St = St(t, L))) {
            Of(V, St, a, B);
            break t;
          }
          (et && et(t, U, L),
            t === "focusout" &&
              L &&
              U.type === "number" &&
              L.memoizedProps.value != null &&
              Wr(U, "number", U.value));
        }
        switch (((et = L ? Ql(L) : window), t)) {
          case "focusin":
            (Mf(et) || et.contentEditable === "true") &&
              (($a = et), (mu = L), (Fl = null));
            break;
          case "focusout":
            Fl = mu = $a = null;
            break;
          case "mousedown":
            yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((yu = !1), Hf(V, a, B));
            break;
          case "selectionchange":
            if (gg) break;
          case "keydown":
          case "keyup":
            Hf(V, a, B);
        }
        var ct;
        if (cu)
          t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          Ia
            ? xf(t, a) && (pt = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (pt = "onCompositionStart");
        (pt &&
          (Ef &&
            a.locale !== "ko" &&
            (Ia || pt !== "onCompositionStart"
              ? pt === "onCompositionEnd" && Ia && (ct = vf())
              : ((zn = B),
                (iu = "value" in zn ? zn.value : zn.textContent),
                (Ia = !0))),
          (et = er(L, pt)),
          0 < et.length &&
            ((pt = new bf(pt, t, null, a, B)),
            V.push({ event: pt, listeners: et }),
            ct
              ? (pt.data = ct)
              : ((ct = Af(a)), ct !== null && (pt.data = ct)))),
          (ct = ug ? og(t, a) : cg(t, a)) &&
            ((pt = er(L, "onBeforeInput")),
            0 < pt.length &&
              ((et = new bf("onBeforeInput", "beforeinput", null, a, B)),
              V.push({ event: et, listeners: pt }),
              (et.data = ct))),
          e0(V, t, L, a, B));
      }
      cm(V, e);
    });
  }
  function _i(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function er(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var r = t,
        o = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = Gl(t, a)),
          r != null && l.unshift(_i(t, r, o)),
          (r = Gl(t, e)),
          r != null && l.push(_i(t, r, o))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function i0(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function dm(t, e, a, l, r) {
    for (var o = e._reactName, d = []; a !== null && a !== l; ) {
      var g = a,
        x = g.alternate,
        L = g.stateNode;
      if (((g = g.tag), x !== null && x === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        L === null ||
        ((x = L),
        r
          ? ((L = Gl(a, o)), L != null && d.unshift(_i(a, L, x)))
          : r || ((L = Gl(a, o)), L != null && d.push(_i(a, L, x)))),
        (a = a.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var s0 = /\r\n?/g,
    r0 = /\u0000|\uFFFD/g;
  function hm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        s0,
        `
`,
      )
      .replace(r0, "");
  }
  function mm(t, e) {
    return ((e = hm(e)), hm(t) === e);
  }
  function wt(t, e, a, l, r, o) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Pa(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Pa(t, "" + l);
        break;
      case "className":
        is(t, "class", l);
        break;
      case "tabIndex":
        is(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        is(t, a, l);
        break;
      case "style":
        mf(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          is(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((l = rs("" + l)), t.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (a === "formAction"
              ? (e !== "input" && wt(t, e, "name", r.name, r, null),
                wt(t, e, "formEncType", r.formEncType, r, null),
                wt(t, e, "formMethod", r.formMethod, r, null),
                wt(t, e, "formTarget", r.formTarget, r, null))
              : (wt(t, e, "encType", r.encType, r, null),
                wt(t, e, "method", r.method, r, null),
                wt(t, e, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((l = rs("" + l)), t.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (t.onclick = rn);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((a = l.__html), a != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = rs("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "" + l)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(a, l)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case "popover":
        (ht("beforetoggle", t), ht("toggle", t), ls(t, "popover", l));
        break;
      case "xlinkActuate":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        sn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        sn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        sn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        sn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ls(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Nv.get(a) || a), ls(t, a, l));
    }
  }
  function Qo(t, e, a, l, r, o) {
    switch (a) {
      case "style":
        mf(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((a = l.__html), a != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Pa(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Pa(t, "" + l);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = rn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lf.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((r = a.endsWith("Capture")),
              (e = a.slice(2, r ? a.length - 7 : void 0)),
              (o = t[me] || null),
              (o = o != null ? o[a] : null),
              typeof o == "function" && t.removeEventListener(e, o, r),
              typeof l == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, r));
              break t;
            }
            a in t
              ? (t[a] = l)
              : l === !0
                ? t.setAttribute(a, "")
                : ls(t, a, l);
          }
    }
  }
  function oe(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ht("error", t), ht("load", t));
        var l = !1,
          r = !1,
          o;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var d = a[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  wt(t, e, o, d, a, null);
              }
          }
        (r && wt(t, e, "srcSet", a.srcSet, a, null),
          l && wt(t, e, "src", a.src, a, null));
        return;
      case "input":
        ht("invalid", t);
        var g = (o = d = r = null),
          x = null,
          L = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var B = a[l];
            if (B != null)
              switch (l) {
                case "name":
                  r = B;
                  break;
                case "type":
                  d = B;
                  break;
                case "checked":
                  x = B;
                  break;
                case "defaultChecked":
                  L = B;
                  break;
                case "value":
                  o = B;
                  break;
                case "defaultValue":
                  g = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(u(137, e));
                  break;
                default:
                  wt(t, e, l, B, a, null);
              }
          }
        cf(t, o, g, x, L, d, r, !1);
        return;
      case "select":
        (ht("invalid", t), (l = d = o = null));
        for (r in a)
          if (a.hasOwnProperty(r) && ((g = a[r]), g != null))
            switch (r) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                wt(t, e, r, g, a, null);
            }
        ((e = o),
          (a = d),
          (t.multiple = !!l),
          e != null ? ka(t, !!l, e, !1) : a != null && ka(t, !!l, a, !0));
        return;
      case "textarea":
        (ht("invalid", t), (o = r = l = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((g = a[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                r = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(u(91));
                break;
              default:
                wt(t, e, d, g, a, null);
            }
        df(t, l, r, o);
        return;
      case "option":
        for (x in a)
          a.hasOwnProperty(x) &&
            ((l = a[x]), l != null) &&
            (x === "selected"
              ? (t.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : wt(t, e, x, l, a, null));
        return;
      case "dialog":
        (ht("beforetoggle", t),
          ht("toggle", t),
          ht("cancel", t),
          ht("close", t));
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < bi.length; l++) ht(bi[l], t);
        break;
      case "image":
        (ht("error", t), ht("load", t));
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ht("error", t), ht("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in a)
          if (a.hasOwnProperty(L) && ((l = a[L]), l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                wt(t, e, L, l, a, null);
            }
        return;
      default:
        if (tu(e)) {
          for (B in a)
            a.hasOwnProperty(B) &&
              ((l = a[B]), l !== void 0 && Qo(t, e, B, l, a, void 0));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && ((l = a[g]), l != null && wt(t, e, g, l, a, null));
  }
  function u0(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          o = null,
          d = null,
          g = null,
          x = null,
          L = null,
          B = null;
        for (N in a) {
          var V = a[N];
          if (a.hasOwnProperty(N) && V != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = V;
              default:
                l.hasOwnProperty(N) || wt(t, e, N, null, l, V);
            }
        }
        for (var U in l) {
          var N = l[U];
          if (((V = a[U]), l.hasOwnProperty(U) && (N != null || V != null)))
            switch (U) {
              case "type":
                o = N;
                break;
              case "name":
                r = N;
                break;
              case "checked":
                L = N;
                break;
              case "defaultChecked":
                B = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                g = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(u(137, e));
                break;
              default:
                N !== V && wt(t, e, U, N, l, V);
            }
        }
        $r(t, d, g, x, L, B, o, r);
        return;
      case "select":
        N = d = g = U = null;
        for (o in a)
          if (((x = a[o]), a.hasOwnProperty(o) && x != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                N = x;
              default:
                l.hasOwnProperty(o) || wt(t, e, o, null, l, x);
            }
        for (r in l)
          if (
            ((o = l[r]),
            (x = a[r]),
            l.hasOwnProperty(r) && (o != null || x != null))
          )
            switch (r) {
              case "value":
                U = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== x && wt(t, e, r, o, l, x);
            }
        ((e = g),
          (a = d),
          (l = N),
          U != null
            ? ka(t, !!a, U, !1)
            : !!l != !!a &&
              (e != null ? ka(t, !!a, e, !0) : ka(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        N = U = null;
        for (g in a)
          if (
            ((r = a[g]),
            a.hasOwnProperty(g) && r != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, g, null, l, r);
            }
        for (d in l)
          if (
            ((r = l[d]),
            (o = a[d]),
            l.hasOwnProperty(d) && (r != null || o != null))
          )
            switch (d) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                N = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== o && wt(t, e, d, r, l, o);
            }
        ff(t, U, N);
        return;
      case "option":
        for (var W in a)
          ((U = a[W]),
            a.hasOwnProperty(W) &&
              U != null &&
              !l.hasOwnProperty(W) &&
              (W === "selected" ? (t.selected = !1) : wt(t, e, W, null, l, U)));
        for (x in l)
          ((U = l[x]),
            (N = a[x]),
            l.hasOwnProperty(x) &&
              U !== N &&
              (U != null || N != null) &&
              (x === "selected"
                ? (t.selected =
                    U && typeof U != "function" && typeof U != "symbol")
                : wt(t, e, x, U, l, N)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var rt in a)
          ((U = a[rt]),
            a.hasOwnProperty(rt) &&
              U != null &&
              !l.hasOwnProperty(rt) &&
              wt(t, e, rt, null, l, U));
        for (L in l)
          if (
            ((U = l[L]),
            (N = a[L]),
            l.hasOwnProperty(L) && U !== N && (U != null || N != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(u(137, e));
                break;
              default:
                wt(t, e, L, U, l, N);
            }
        return;
      default:
        if (tu(e)) {
          for (var Ct in a)
            ((U = a[Ct]),
              a.hasOwnProperty(Ct) &&
                U !== void 0 &&
                !l.hasOwnProperty(Ct) &&
                Qo(t, e, Ct, void 0, l, U));
          for (B in l)
            ((U = l[B]),
              (N = a[B]),
              !l.hasOwnProperty(B) ||
                U === N ||
                (U === void 0 && N === void 0) ||
                Qo(t, e, B, U, l, N));
          return;
        }
    }
    for (var z in a)
      ((U = a[z]),
        a.hasOwnProperty(z) &&
          U != null &&
          !l.hasOwnProperty(z) &&
          wt(t, e, z, null, l, U));
    for (V in l)
      ((U = l[V]),
        (N = a[V]),
        !l.hasOwnProperty(V) ||
          U === N ||
          (U == null && N == null) ||
          wt(t, e, V, U, l, N));
  }
  function ym(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function o0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var r = a[l],
          o = r.transferSize,
          d = r.initiatorType,
          g = r.duration;
        if (o && g && ym(d)) {
          for (d = 0, g = r.responseEnd, l += 1; l < a.length; l++) {
            var x = a[l],
              L = x.startTime;
            if (L > g) break;
            var B = x.transferSize,
              V = x.initiatorType;
            B &&
              ym(V) &&
              ((x = x.responseEnd), (d += B * (x < g ? 1 : (g - L) / (x - L))));
          }
          if ((--l, (e += (8 * (o + d)) / (r.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Go = null,
    Vo = null;
  function nr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function pm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Xo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ko = null;
  function c0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ko
        ? !1
        : ((Ko = t), !0)
      : ((Ko = null), !1);
  }
  var gm = typeof setTimeout == "function" ? setTimeout : void 0,
    f0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sm = typeof Promise == "function" ? Promise : void 0,
    d0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sm < "u"
          ? function (t) {
              return Sm.resolve(null).then(t).catch(h0);
            }
          : gm;
  function h0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Pn(t) {
    return t === "head";
  }
  function bm(t, e) {
    var a = e,
      l = 0;
    do {
      var r = a.nextSibling;
      if ((t.removeChild(a), r && r.nodeType === 8))
        if (((a = r.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (t.removeChild(r), xl(e));
            return;
          }
          l--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          l++;
        else if (a === "html") Ei(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), Ei(a));
          for (var o = a.firstChild; o; ) {
            var d = o.nextSibling,
              g = o.nodeName;
            (o[Yl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(o),
              (o = d));
          }
        } else a === "body" && Ei(t.ownerDocument.body);
      a = r;
    } while (a);
    xl(e);
  }
  function _m(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? e
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (e
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = l;
    } while (a);
  }
  function Zo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Zo(a), Fr(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function m0(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var r = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Yl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Qe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function y0(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = Qe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Em(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Qe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ko(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Po(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function p0(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function Qe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Jo = null;
  function Rm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return Qe(t.nextSibling);
          e--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Tm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else (a !== "/$" && a !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function xm(t, e, a) {
    switch (((e = nr(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Ei(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Fr(t);
  }
  var Ge = new Map(),
    Am = new Set();
  function ar(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Rn = k.d;
  k.d = { f: v0, r: g0, D: S0, C: b0, L: _0, m: E0, X: T0, S: R0, M: x0 };
  function v0() {
    var t = Rn.f(),
      e = Ps();
    return t || e;
  }
  function g0(t) {
    var e = Xa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vd(e) : Rn.r(t);
  }
  var El = typeof document > "u" ? null : document;
  function Mm(t, e, a) {
    var l = El;
    if (l && typeof e == "string" && e) {
      var r = Ue(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
        Am.has(r) ||
          (Am.add(r),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement("link")),
            oe(e, "link", t),
            te(e),
            l.head.appendChild(e))));
    }
  }
  function S0(t) {
    (Rn.D(t), Mm("dns-prefetch", t, null));
  }
  function b0(t, e) {
    (Rn.C(t, e), Mm("preconnect", t, e));
  }
  function _0(t, e, a) {
    Rn.L(t, e, a);
    var l = El;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + Ue(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((r += '[imagesrcset="' + Ue(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (r += '[imagesizes="' + Ue(a.imageSizes) + '"]'))
        : (r += '[href="' + Ue(t) + '"]');
      var o = r;
      switch (e) {
        case "style":
          o = Rl(t);
          break;
        case "script":
          o = Tl(t);
      }
      Ge.has(o) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a,
        )),
        Ge.set(o, t),
        l.querySelector(r) !== null ||
          (e === "style" && l.querySelector(Ri(o))) ||
          (e === "script" && l.querySelector(Ti(o))) ||
          ((e = l.createElement("link")),
          oe(e, "link", t),
          te(e),
          l.head.appendChild(e)));
    }
  }
  function E0(t, e) {
    Rn.m(t, e);
    var a = El;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + Ue(l) + '"][href="' + Ue(t) + '"]',
        o = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Tl(t);
      }
      if (
        !Ge.has(o) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        Ge.set(o, t),
        a.querySelector(r) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ti(o))) return;
        }
        ((l = a.createElement("link")),
          oe(l, "link", t),
          te(l),
          a.head.appendChild(l));
      }
    }
  }
  function R0(t, e, a) {
    Rn.S(t, e, a);
    var l = El;
    if (l && t) {
      var r = Ka(l).hoistableStyles,
        o = Rl(t);
      e = e || "default";
      var d = r.get(o);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(Ri(o)))) g.loading = 5;
        else {
          ((t = v({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = Ge.get(o)) && Fo(t, a));
          var x = (d = l.createElement("link"));
          (te(x),
            oe(x, "link", t),
            (x._p = new Promise(function (L, B) {
              ((x.onload = L), (x.onerror = B));
            })),
            x.addEventListener("load", function () {
              g.loading |= 1;
            }),
            x.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            lr(d, e, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }),
          r.set(o, d));
      }
    }
  }
  function T0(t, e) {
    Rn.X(t, e);
    var a = El;
    if (a && t) {
      var l = Ka(a).hoistableScripts,
        r = Tl(t),
        o = l.get(r);
      o ||
        ((o = a.querySelector(Ti(r))),
        o ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = Ge.get(r)) && Io(t, e),
          (o = a.createElement("script")),
          te(o),
          oe(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function x0(t, e) {
    Rn.M(t, e);
    var a = El;
    if (a && t) {
      var l = Ka(a).hoistableScripts,
        r = Tl(t),
        o = l.get(r);
      o ||
        ((o = a.querySelector(Ti(r))),
        o ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = Ge.get(r)) && Io(t, e),
          (o = a.createElement("script")),
          te(o),
          oe(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function Om(t, e, a, l) {
    var r = (r = ft.current) ? ar(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Rl(a.href)),
            (a = Ka(r).hoistableStyles),
            (l = a.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Rl(a.href);
          var o = Ka(r).hoistableStyles,
            d = o.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, d),
              (o = r.querySelector(Ri(t))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              Ge.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ge.set(t, a),
                o || A0(r, t, a, d.state))),
            e && l === null)
          )
            throw Error(u(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Tl(a)),
              (a = Ka(r).hoistableScripts),
              (l = a.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function Rl(t) {
    return 'href="' + Ue(t) + '"';
  }
  function Ri(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function wm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function A0(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        oe(e, "link", a),
        te(e),
        t.head.appendChild(e));
  }
  function Tl(t) {
    return '[src="' + Ue(t) + '"]';
  }
  function Ti(t) {
    return "script[async]" + t;
  }
  function Cm(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ue(a.href) + '"]');
          if (l) return ((e.instance = l), te(l), l);
          var r = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            te(l),
            oe(l, "style", r),
            lr(l, a.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          r = Rl(a.href);
          var o = t.querySelector(Ri(r));
          if (o) return ((e.state.loading |= 4), (e.instance = o), te(o), o);
          ((l = wm(a)),
            (r = Ge.get(r)) && Fo(l, r),
            (o = (t.ownerDocument || t).createElement("link")),
            te(o));
          var d = o;
          return (
            (d._p = new Promise(function (g, x) {
              ((d.onload = g), (d.onerror = x));
            })),
            oe(o, "link", l),
            (e.state.loading |= 4),
            lr(o, a.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Tl(a.src)),
            (r = t.querySelector(Ti(o)))
              ? ((e.instance = r), te(r), r)
              : ((l = a),
                (r = Ge.get(o)) && ((l = v({}, a)), Io(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                te(r),
                oe(r, "link", l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), lr(l, a.precedence, t));
    return e.instance;
  }
  function lr(t, e, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        r = l.length ? l[l.length - 1] : null,
        o = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === e) o = g;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function Fo(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Io(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ir = null;
  function zm(t, e, a) {
    if (ir === null) {
      var l = new Map(),
        r = (ir = new Map());
      r.set(a, l);
    } else ((r = ir), (l = r.get(a)), l || ((l = new Map()), r.set(a, l)));
    if (l.has(t)) return l;
    for (
      l.set(t, null), a = a.getElementsByTagName(t), r = 0;
      r < a.length;
      r++
    ) {
      var o = a[r];
      if (
        !(
          o[Yl] ||
          o[ie] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(e) || "";
        d = t + d;
        var g = l.get(d);
        g ? g.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function Dm(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function M0(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function O0(t, e, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var r = Rl(l.href),
          o = e.querySelector(Ri(r));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = sr.bind(t)), e.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = o),
            te(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (l = wm(l)),
          (r = Ge.get(r)) && Fo(l, r),
          (o = o.createElement("link")),
          te(o));
        var d = o;
        ((d._p = new Promise(function (g, x) {
          ((d.onload = g), (d.onerror = x));
        })),
          oe(o, "link", l),
          (a.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = sr.bind(t)),
          e.addEventListener("load", a),
          e.addEventListener("error", a)));
    }
  }
  var $o = 0;
  function w0(t, e) {
    return (
      t.stylesheets && t.count === 0 && ur(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((t.stylesheets && ur(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && $o === 0 && ($o = 62500 * o0());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && ur(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > $o ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function sr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ur(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var rr = null;
  function ur(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (rr = new Map()),
        e.forEach(C0, t),
        (rr = null),
        sr.call(t)));
  }
  function C0(t, e) {
    if (!(e.state.loading & 4)) {
      var a = rr.get(t);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), rr.set(t, a));
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < r.length;
          o++
        ) {
          var d = r[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (a.set(d.dataset.precedence, d), (l = d));
        }
        l && a.set(null, l);
      }
      ((r = e.instance),
        (d = r.getAttribute("data-precedence")),
        (o = a.get(d) || l),
        o === l && a.set(null, r),
        a.set(d, r),
        this.count++,
        (l = sr.bind(this)),
        r.addEventListener("load", l),
        r.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var xi = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: it,
    _currentValue2: it,
    _threadCount: 0,
  };
  function z0(t, e, a, l, r, o, d, g, x) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zr(0)),
      (this.hiddenUpdates = Zr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map()));
  }
  function Um(t, e, a, l, r, o, d, g, x, L, B, V) {
    return (
      (t = new z0(t, e, a, d, x, L, B, V, g)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Me(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = Cu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: l, isDehydrated: a, cache: e }),
      Uu(o),
      t
    );
  }
  function Nm(t) {
    return t ? ((t = el), t) : el;
  }
  function jm(t, e, a, l, r, o) {
    ((r = Nm(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Bn(e)),
      (l.payload = { element: a }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (a = Hn(t, l, e)),
      a !== null && (be(a, t, e), ai(a, t, e)));
  }
  function Bm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Wo(t, e) {
    (Bm(t, e), (t = t.alternate) && Bm(t, e));
  }
  function Hm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ga(t, 67108864);
      (e !== null && be(e, t, 67108864), Wo(t, 67108864));
    }
  }
  function qm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = De();
      e = kr(e);
      var a = ga(t, e);
      (a !== null && be(a, t, e), Wo(t, e));
    }
  }
  var or = !0;
  function D0(t, e, a, l) {
    var r = j.T;
    j.T = null;
    var o = k.p;
    try {
      ((k.p = 2), tc(t, e, a, l));
    } finally {
      ((k.p = o), (j.T = r));
    }
  }
  function L0(t, e, a, l) {
    var r = j.T;
    j.T = null;
    var o = k.p;
    try {
      ((k.p = 8), tc(t, e, a, l));
    } finally {
      ((k.p = o), (j.T = r));
    }
  }
  function tc(t, e, a, l) {
    if (or) {
      var r = ec(l);
      if (r === null) (Yo(t, e, l, cr, a), Qm(t, l));
      else if (N0(r, t, e, a, l)) l.stopPropagation();
      else if ((Qm(t, l), e & 4 && -1 < U0.indexOf(t))) {
        for (; r !== null; ) {
          var o = Xa(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = ha(o.pendingLanes);
                  if (d !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var x = 1 << (31 - xe(d));
                      ((g.entanglements[1] |= x), (d &= ~x));
                    }
                    (We(o), (Rt & 6) === 0 && ((Zs = ce() + 500), Si(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = ga(o, 2)), g !== null && be(g, o, 2), Ps(), Wo(o, 2));
            }
          if (((o = ec(l)), o === null && Yo(t, e, l, cr, a), o === r)) break;
          r = o;
        }
        r !== null && l.stopPropagation();
      } else Yo(t, e, l, null, a);
    }
  }
  function ec(t) {
    return ((t = nu(t)), nc(t));
  }
  var cr = null;
  function nc(t) {
    if (((cr = null), (t = Va(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((cr = t), null);
  }
  function Ym(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ut()) {
          case le:
            return 2;
          case Je:
            return 8;
          case Qa:
          case bv:
            return 32;
          case Jc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ac = !1,
    Jn = null,
    Fn = null,
    In = null,
    Ai = new Map(),
    Mi = new Map(),
    $n = [],
    U0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Qm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        Ai.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mi.delete(e.pointerId);
    }
  }
  function Oi(t, e, a, l, r, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [r],
        }),
        e !== null && ((e = Xa(e)), e !== null && Hm(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function N0(t, e, a, l, r) {
    switch (e) {
      case "focusin":
        return ((Jn = Oi(Jn, t, e, a, l, r)), !0);
      case "dragenter":
        return ((Fn = Oi(Fn, t, e, a, l, r)), !0);
      case "mouseover":
        return ((In = Oi(In, t, e, a, l, r)), !0);
      case "pointerover":
        var o = r.pointerId;
        return (Ai.set(o, Oi(Ai.get(o) || null, t, e, a, l, r)), !0);
      case "gotpointercapture":
        return (
          (o = r.pointerId),
          Mi.set(o, Oi(Mi.get(o) || null, t, e, a, l, r)),
          !0
        );
    }
    return !1;
  }
  function Gm(t) {
    var e = Va(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = h(a)), e !== null)) {
            ((t.blockedOn = e),
              ef(t.priority, function () {
                qm(a);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(a)), e !== null)) {
            ((t.blockedOn = e),
              ef(t.priority, function () {
                qm(a);
              }));
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function fr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = ec(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((eu = l), a.target.dispatchEvent(l), (eu = null));
      } else return ((e = Xa(a)), e !== null && Hm(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function Vm(t, e, a) {
    fr(t) && a.delete(e);
  }
  function j0() {
    ((ac = !1),
      Jn !== null && fr(Jn) && (Jn = null),
      Fn !== null && fr(Fn) && (Fn = null),
      In !== null && fr(In) && (In = null),
      Ai.forEach(Vm),
      Mi.forEach(Vm));
  }
  function dr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      ac ||
        ((ac = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, j0)));
  }
  var hr = null;
  function Xm(t) {
    hr !== t &&
      ((hr = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        hr === t && (hr = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != "function") {
            if (nc(l || a) === null) continue;
            break;
          }
          var o = Xa(a);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            to(o, { pending: !0, data: r, method: a.method, action: l }, l, r));
        }
      }));
  }
  function xl(t) {
    function e(x) {
      return dr(x, t);
    }
    (Jn !== null && dr(Jn, t),
      Fn !== null && dr(Fn, t),
      In !== null && dr(In, t),
      Ai.forEach(e),
      Mi.forEach(e));
    for (var a = 0; a < $n.length; a++) {
      var l = $n[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < $n.length && ((a = $n[0]), a.blockedOn === null); )
      (Gm(a), a.blockedOn === null && $n.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var r = a[l],
          o = a[l + 1],
          d = r[me] || null;
        if (typeof o == "function") d || Xm(a);
        else if (d) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (d = o[me] || null))) g = d.formAction;
            else if (nc(r) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (a[l + 1] = g) : (a.splice(l, 3), (l -= 3)),
            Xm(a));
        }
      }
  }
  function Km() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (r = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (r !== null && (r(), (r = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        r = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function lc(t) {
    this._internalRoot = t;
  }
  ((mr.prototype.render = lc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var a = e.current,
        l = De();
      jm(a, l, t, e, null, null);
    }),
    (mr.prototype.unmount = lc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (jm(t.current, 2, null, t, null, null), Ps(), (e[Ga] = null));
        }
      }));
  function mr(t) {
    this._internalRoot = t;
  }
  mr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = tf();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < $n.length && e !== 0 && e < $n[a].priority; a++);
      ($n.splice(a, 0, t), a === 0 && Gm(t));
    }
  };
  var Zm = i.version;
  if (Zm !== "19.2.5") throw Error(u(527, Zm, "19.2.5"));
  k.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? S(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var B0 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yr.isDisabled && yr.supportsFiber)
      try {
        ((Bl = yr.inject(B0)), (Te = yr));
      } catch {}
  }
  return (
    (Ci.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var a = !1,
        l = "",
        r = Wd,
        o = th,
        d = eh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = Um(t, 1, !1, null, null, a, l, null, r, o, d, Km)),
        (t[Ga] = e.current),
        qo(t),
        new lc(e)
      );
    }),
    (Ci.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(u(299));
      var l = !1,
        r = "",
        o = Wd,
        d = th,
        g = eh,
        x = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
          a.formState !== void 0 && (x = a.formState)),
        (e = Um(t, 1, !0, e, a ?? null, l, r, x, o, d, g, Km)),
        (e.context = Nm(null)),
        (a = e.current),
        (l = De()),
        (l = kr(l)),
        (r = Bn(l)),
        (r.callback = null),
        Hn(a, r, l),
        (a = l),
        (e.current.lanes = a),
        ql(e, a),
        We(e),
        (t[Ga] = e.current),
        qo(t),
        new mr(e)
      );
    }),
    (Ci.version = "19.2.5"),
    Ci
  );
}
var ny;
function k0() {
  if (ny) return rc.exports;
  ny = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (rc.exports = Z0()), rc.exports);
}
var P0 = k0(),
  J0 = "__TSS_CONTEXT",
  xc = Symbol.for("TSS_SERVER_FUNCTION"),
  F0 = "application/x-tss-framed",
  Tn = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  I0 = /;\s*v=(\d+)/;
function $0(n) {
  const i = n.match(I0);
  return i ? parseInt(i[1], 10) : void 0;
}
function W0(n) {
  const i = $0(n);
  if (i !== void 0 && i !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var np = () => window.__TSS_START_OPTIONS__,
  ap = !1;
function qi(n) {
  return n[n.length - 1];
}
function tS(n) {
  return typeof n == "function";
}
function na(n, i) {
  return tS(n) ? n(i) : n;
}
var eS = Object.prototype.hasOwnProperty,
  ay = Object.prototype.propertyIsEnumerable,
  nS = () => Object.create(null),
  za = (n, i) => aa(n, i, nS);
function aa(n, i, s = () => ({}), u = 0) {
  if (n === i) return n;
  if (u > 500) return i;
  const c = i,
    f = sy(n) && sy(c);
  if (!f && !(Ll(n) && Ll(c))) return c;
  const h = f ? n : ly(n);
  if (!h) return c;
  const m = f ? c : ly(c);
  if (!m) return c;
  const p = h.length,
    y = m.length,
    S = f ? new Array(y) : s();
  let v = 0;
  for (let _ = 0; _ < y; _++) {
    const E = f ? _ : m[_],
      A = n[E],
      C = c[E];
    if (A === C) {
      ((S[E] = A), (f ? _ < p : eS.call(n, E)) && v++);
      continue;
    }
    if (
      A === null ||
      C === null ||
      typeof A != "object" ||
      typeof C != "object"
    ) {
      S[E] = C;
      continue;
    }
    const R = aa(A, C, s, u + 1);
    ((S[E] = R), R === A && v++);
  }
  return p === y && v === p ? n : S;
}
function ly(n) {
  const i = Object.getOwnPropertyNames(n);
  for (const c of i) if (!ay.call(n, c)) return !1;
  const s = Object.getOwnPropertySymbols(n);
  if (s.length === 0) return i;
  const u = i;
  for (const c of s) {
    if (!ay.call(n, c)) return !1;
    u.push(c);
  }
  return u;
}
function Ll(n) {
  if (!iy(n)) return !1;
  const i = n.constructor;
  if (typeof i > "u") return !0;
  const s = i.prototype;
  return !(!iy(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function iy(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function sy(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function _e(n, i, s) {
  if (n === i) return !0;
  if (typeof n != typeof i) return !1;
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length) return !1;
    for (let u = 0, c = n.length; u < c; u++) if (!_e(n[u], i[u], s)) return !1;
    return !0;
  }
  if (Ll(n) && Ll(i)) {
    const u = s?.ignoreUndefined ?? !0;
    if (s?.partial) {
      for (const h in i)
        if ((!u || i[h] !== void 0) && !_e(n[h], i[h], s)) return !1;
      return !0;
    }
    let c = 0;
    if (!u) c = Object.keys(n).length;
    else for (const h in n) n[h] !== void 0 && c++;
    let f = 0;
    for (const h in i)
      if ((!u || i[h] !== void 0) && (f++, f > c || !_e(n[h], i[h], s)))
        return !1;
    return c === f;
  }
  return !1;
}
function ja(n) {
  let i, s;
  const u = new Promise((c, f) => {
    ((i = c), (s = f));
  });
  return (
    (u.status = "pending"),
    (u.resolve = (c) => {
      ((u.status = "resolved"), (u.value = c), i(c), n?.(c));
    }),
    (u.reject = (c) => {
      ((u.status = "rejected"), s(c));
    }),
    u
  );
}
function aS(n) {
  return typeof n?.message != "string"
    ? !1
    : n.message.startsWith("Failed to fetch dynamically imported module") ||
        n.message.startsWith("error loading dynamically imported module") ||
        n.message.startsWith("Importing a module script failed");
}
function Yi(n) {
  return !!(n && typeof n == "object" && typeof n.then == "function");
}
function lS(n) {
  return n.replace(/[\x00-\x1f\x7f]/g, "");
}
function ry(n) {
  let i;
  try {
    i = decodeURI(n);
  } catch {
    i = n.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return lS(i);
}
var iS = ["http:", "https:", "mailto:", "tel:"];
function Mr(n, i) {
  if (!n) return !1;
  try {
    const s = new URL(n);
    return !i.has(s.protocol);
  } catch {
    return !1;
  }
}
var sS = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  rS = /[&><\u2028\u2029]/g;
function uS(n) {
  return n.replace(rS, (i) => sS[i]);
}
function zi(n) {
  if (!n) return { path: n, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
    return { path: n, handledProtocolRelativeURL: !1 };
  const i = /%25|%5C/gi;
  let s = 0,
    u = "",
    c;
  for (; (c = i.exec(n)) !== null; )
    ((u += ry(n.slice(s, c.index)) + c[0]), (s = i.lastIndex));
  u = u + ry(s ? n.slice(s) : n);
  let f = !1;
  return (
    u.startsWith("//") && ((f = !0), (u = "/" + u.replace(/^\/+/, ""))),
    { path: u, handledProtocolRelativeURL: f }
  );
}
function oS(n) {
  return /\s|[^\u0000-\u007F]/.test(n)
    ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : n;
}
function cS(n, i) {
  if (n === i) return !0;
  if (n.length !== i.length) return !1;
  for (let s = 0; s < n.length; s++) if (n[s] !== i[s]) return !1;
  return !0;
}
function Re() {
  throw new Error("Invariant failed");
}
function Qi(n) {
  const i = new Map();
  let s, u;
  const c = (f) => {
    f.next &&
      (f.prev
        ? ((f.prev.next = f.next),
          (f.next.prev = f.prev),
          (f.next = void 0),
          u && ((u.next = f), (f.prev = u)))
        : ((f.next.prev = void 0),
          (s = f.next),
          (f.next = void 0),
          u && ((f.prev = u), (u.next = f))),
      (u = f));
  };
  return {
    get(f) {
      const h = i.get(f);
      if (h) return (c(h), h.value);
    },
    set(f, h) {
      if (i.size >= n && s) {
        const p = s;
        (i.delete(p.key),
          p.next && ((s = p.next), (p.next.prev = void 0)),
          p === u && (u = void 0));
      }
      const m = i.get(f);
      if (m) ((m.value = h), c(m));
      else {
        const p = { key: f, value: h, prev: u };
        (u && (u.next = p), (u = p), s || (s = p), i.set(f, p));
      }
    },
    clear() {
      (i.clear(), (s = void 0), (u = void 0));
    },
  };
}
var la = 4,
  lp = 5;
function fS(n) {
  const i = n.indexOf("{");
  if (i === -1) return null;
  const s = n.indexOf("}", i);
  return s === -1 || i + 1 >= n.length ? null : [i, s];
}
function Bc(n, i, s = new Uint16Array(6)) {
  const u = n.indexOf("/", i),
    c = u === -1 ? n.length : u,
    f = n.substring(i, c);
  if (!f || !f.includes("$"))
    return (
      (s[0] = 0),
      (s[1] = i),
      (s[2] = i),
      (s[3] = c),
      (s[4] = c),
      (s[5] = c),
      s
    );
  if (f === "$") {
    const m = n.length;
    return (
      (s[0] = 2),
      (s[1] = i),
      (s[2] = i),
      (s[3] = m),
      (s[4] = m),
      (s[5] = m),
      s
    );
  }
  if (f.charCodeAt(0) === 36)
    return (
      (s[0] = 1),
      (s[1] = i),
      (s[2] = i + 1),
      (s[3] = c),
      (s[4] = c),
      (s[5] = c),
      s
    );
  const h = fS(f);
  if (h) {
    const [m, p] = h,
      y = f.charCodeAt(m + 1);
    if (y === 45) {
      if (m + 2 < f.length && f.charCodeAt(m + 2) === 36) {
        const S = m + 3,
          v = p;
        if (S < v)
          return (
            (s[0] = 3),
            (s[1] = i + m),
            (s[2] = i + S),
            (s[3] = i + v),
            (s[4] = i + p + 1),
            (s[5] = c),
            s
          );
      }
    } else if (y === 36) {
      const S = m + 1,
        v = m + 2;
      return v === p
        ? ((s[0] = 2),
          (s[1] = i + m),
          (s[2] = i + S),
          (s[3] = i + v),
          (s[4] = i + p + 1),
          (s[5] = n.length),
          s)
        : ((s[0] = 1),
          (s[1] = i + m),
          (s[2] = i + v),
          (s[3] = i + p),
          (s[4] = i + p + 1),
          (s[5] = c),
          s);
    }
  }
  return (
    (s[0] = 0),
    (s[1] = i),
    (s[2] = i),
    (s[3] = c),
    (s[4] = c),
    (s[5] = c),
    s
  );
}
function Nr(n, i, s, u, c, f, h) {
  h?.(s);
  let m = u;
  {
    const p = s.fullPath ?? s.from,
      y = p.length,
      S = s.options?.caseSensitive ?? n,
      v = !!(
        s.options?.params?.parse && s.options?.skipRouteOnParseError?.params
      );
    for (; m < y; ) {
      const E = Bc(p, m, i);
      let A;
      const C = m,
        R = E[5];
      switch (((m = R + 1), f++, E[0])) {
        case 0: {
          const w = p.substring(E[2], E[3]);
          if (S) {
            const q = c.static?.get(w);
            if (q) A = q;
            else {
              c.static ??= new Map();
              const Q = Da(s.fullPath ?? s.from);
              ((Q.parent = c), (Q.depth = f), (A = Q), c.static.set(w, Q));
            }
          } else {
            const q = w.toLowerCase(),
              Q = c.staticInsensitive?.get(q);
            if (Q) A = Q;
            else {
              c.staticInsensitive ??= new Map();
              const H = Da(s.fullPath ?? s.from);
              ((H.parent = c),
                (H.depth = f),
                (A = H),
                c.staticInsensitive.set(q, H));
            }
          }
          break;
        }
        case 1: {
          const w = p.substring(C, E[1]),
            q = p.substring(E[4], R),
            Q = S && !!(w || q),
            H = w ? (Q ? w : w.toLowerCase()) : void 0,
            F = q ? (Q ? q : q.toLowerCase()) : void 0,
            J =
              !v &&
              c.dynamic?.find(
                (X) =>
                  !X.skipOnParamError &&
                  X.caseSensitive === Q &&
                  X.prefix === H &&
                  X.suffix === F,
              );
          if (J) A = J;
          else {
            const X = dc(1, s.fullPath ?? s.from, Q, H, F);
            ((A = X),
              (X.depth = f),
              (X.parent = c),
              (c.dynamic ??= []),
              c.dynamic.push(X));
          }
          break;
        }
        case 3: {
          const w = p.substring(C, E[1]),
            q = p.substring(E[4], R),
            Q = S && !!(w || q),
            H = w ? (Q ? w : w.toLowerCase()) : void 0,
            F = q ? (Q ? q : q.toLowerCase()) : void 0,
            J =
              !v &&
              c.optional?.find(
                (X) =>
                  !X.skipOnParamError &&
                  X.caseSensitive === Q &&
                  X.prefix === H &&
                  X.suffix === F,
              );
          if (J) A = J;
          else {
            const X = dc(3, s.fullPath ?? s.from, Q, H, F);
            ((A = X),
              (X.parent = c),
              (X.depth = f),
              (c.optional ??= []),
              c.optional.push(X));
          }
          break;
        }
        case 2: {
          const w = p.substring(C, E[1]),
            q = p.substring(E[4], R),
            Q = S && !!(w || q),
            H = w ? (Q ? w : w.toLowerCase()) : void 0,
            F = q ? (Q ? q : q.toLowerCase()) : void 0,
            J = dc(2, s.fullPath ?? s.from, Q, H, F);
          ((A = J),
            (J.parent = c),
            (J.depth = f),
            (c.wildcard ??= []),
            c.wildcard.push(J));
        }
      }
      c = A;
    }
    if (
      v &&
      s.children &&
      !s.isRoot &&
      s.id &&
      s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95
    ) {
      const E = Da(s.fullPath ?? s.from);
      ((E.kind = lp),
        (E.parent = c),
        f++,
        (E.depth = f),
        (c.pathless ??= []),
        c.pathless.push(E),
        (c = E));
    }
    const _ = (s.path || !s.children) && !s.isRoot;
    if (_ && p.endsWith("/")) {
      const E = Da(s.fullPath ?? s.from);
      ((E.kind = la),
        (E.parent = c),
        f++,
        (E.depth = f),
        (c.index = E),
        (c = E));
    }
    ((c.parse = s.options?.params?.parse ?? null),
      (c.skipOnParamError = v),
      (c.parsingPriority = s.options?.skipRouteOnParseError?.priority ?? 0),
      _ && !c.route && ((c.route = s), (c.fullPath = s.fullPath ?? s.from)));
  }
  if (s.children) for (const p of s.children) Nr(n, i, p, m, c, f, h);
}
function fc(n, i) {
  if (n.skipOnParamError && !i.skipOnParamError) return -1;
  if (!n.skipOnParamError && i.skipOnParamError) return 1;
  if (
    n.skipOnParamError &&
    i.skipOnParamError &&
    (n.parsingPriority || i.parsingPriority)
  )
    return i.parsingPriority - n.parsingPriority;
  if (n.prefix && i.prefix && n.prefix !== i.prefix) {
    if (n.prefix.startsWith(i.prefix)) return -1;
    if (i.prefix.startsWith(n.prefix)) return 1;
  }
  if (n.suffix && i.suffix && n.suffix !== i.suffix) {
    if (n.suffix.endsWith(i.suffix)) return -1;
    if (i.suffix.endsWith(n.suffix)) return 1;
  }
  return n.prefix && !i.prefix
    ? -1
    : !n.prefix && i.prefix
      ? 1
      : n.suffix && !i.suffix
        ? -1
        : !n.suffix && i.suffix
          ? 1
          : n.caseSensitive && !i.caseSensitive
            ? -1
            : !n.caseSensitive && i.caseSensitive
              ? 1
              : 0;
}
function ta(n) {
  if (n.pathless) for (const i of n.pathless) ta(i);
  if (n.static) for (const i of n.static.values()) ta(i);
  if (n.staticInsensitive) for (const i of n.staticInsensitive.values()) ta(i);
  if (n.dynamic?.length) {
    n.dynamic.sort(fc);
    for (const i of n.dynamic) ta(i);
  }
  if (n.optional?.length) {
    n.optional.sort(fc);
    for (const i of n.optional) ta(i);
  }
  if (n.wildcard?.length) {
    n.wildcard.sort(fc);
    for (const i of n.wildcard) ta(i);
  }
}
function Da(n) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: n,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
  };
}
function dc(n, i, s, u, c) {
  return {
    kind: n,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: i,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
    caseSensitive: s,
    prefix: u,
    suffix: c,
  };
}
function dS(n, i) {
  const s = Da("/"),
    u = new Uint16Array(6);
  for (const c of n) Nr(!1, u, c, 1, s, 0);
  (ta(s), (i.masksTree = s), (i.flatCache = Qi(1e3)));
}
function hS(n, i) {
  n ||= "/";
  const s = i.flatCache.get(n);
  if (s) return s;
  const u = Hc(n, i.masksTree);
  return (i.flatCache.set(n, u), u);
}
function mS(n, i, s, u, c) {
  ((n ||= "/"), (u ||= "/"));
  const f = i ? `case\0${n}` : n;
  let h = c.singleCache.get(f);
  return (
    h ||
      ((h = Da("/")),
      Nr(i, new Uint16Array(6), { from: n }, 1, h, 0),
      c.singleCache.set(f, h)),
    Hc(u, h, s)
  );
}
function yS(n, i, s = !1) {
  const u = s ? n : `nofuzz\0${n}`,
    c = i.matchCache.get(u);
  if (c !== void 0) return c;
  n ||= "/";
  let f;
  try {
    f = Hc(n, i.segmentTree, s);
  } catch (h) {
    if (h instanceof URIError) f = null;
    else throw h;
  }
  return (f && (f.branch = gS(f.route)), i.matchCache.set(u, f), f);
}
function pS(n) {
  return n === "/" ? n : n.replace(/\/{1,}$/, "");
}
function vS(n, i = !1, s) {
  const u = Da(n.fullPath),
    c = new Uint16Array(6),
    f = {},
    h = {};
  let m = 0;
  return (
    Nr(i, c, n, 1, u, 0, (p) => {
      if ((s?.(p, m), p.id in f && Re(), (f[p.id] = p), m !== 0 && p.path)) {
        const y = pS(p.fullPath);
        (!h[y] || p.fullPath.endsWith("/")) && (h[y] = p);
      }
      m++;
    }),
    ta(u),
    {
      processedTree: {
        segmentTree: u,
        singleCache: Qi(1e3),
        matchCache: Qi(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: f,
      routesByPath: h,
    }
  );
}
function Hc(n, i, s = !1) {
  const u = n.split("/"),
    c = bS(n, u, i, s);
  if (!c) return null;
  const [f] = ip(n, u, c);
  return { route: c.node.route, rawParams: f, parsedParams: c.parsedParams };
}
function ip(n, i, s) {
  const u = SS(s.node);
  let c = null;
  const f = Object.create(null);
  let h = s.extract?.part ?? 0,
    m = s.extract?.node ?? 0,
    p = s.extract?.path ?? 0,
    y = s.extract?.segment ?? 0;
  for (; m < u.length; h++, m++, p++, y++) {
    const S = u[m];
    if (S.kind === la) break;
    if (S.kind === lp) {
      (y--, h--, p--);
      continue;
    }
    const v = i[h],
      _ = p;
    if ((v && (p += v.length), S.kind === 1)) {
      c ??= s.node.fullPath.split("/");
      const E = c[y],
        A = S.prefix?.length ?? 0;
      if (E.charCodeAt(A) === 123) {
        const C = S.suffix?.length ?? 0,
          R = E.substring(A + 2, E.length - C - 1),
          w = v.substring(A, v.length - C);
        f[R] = decodeURIComponent(w);
      } else {
        const C = E.substring(1);
        f[C] = decodeURIComponent(v);
      }
    } else if (S.kind === 3) {
      if (s.skipped & (1 << m)) {
        (h--, (p = _ - 1));
        continue;
      }
      c ??= s.node.fullPath.split("/");
      const E = c[y],
        A = S.prefix?.length ?? 0,
        C = S.suffix?.length ?? 0,
        R = E.substring(A + 3, E.length - C - 1),
        w = S.suffix || S.prefix ? v.substring(A, v.length - C) : v;
      w && (f[R] = decodeURIComponent(w));
    } else if (S.kind === 2) {
      const E = S,
        A = n.substring(
          _ + (E.prefix?.length ?? 0),
          n.length - (E.suffix?.length ?? 0),
        ),
        C = decodeURIComponent(A);
      ((f["*"] = C), (f._splat = C));
      break;
    }
  }
  return (
    s.rawParams && Object.assign(f, s.rawParams),
    [f, { part: h, node: m, path: p, segment: y }]
  );
}
function gS(n) {
  const i = [n];
  for (; n.parentRoute; ) ((n = n.parentRoute), i.push(n));
  return (i.reverse(), i);
}
function SS(n) {
  const i = Array(n.depth + 1);
  do ((i[n.depth] = n), (n = n.parent));
  while (n);
  return i;
}
function bS(n, i, s, u) {
  if (n === "/" && s.index) return { node: s.index, skipped: 0 };
  const c = !qi(i),
    f = c && n !== "/",
    h = i.length - (c ? 1 : 0),
    m = [
      {
        node: s,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ];
  let p = null,
    y = null;
  for (; m.length; ) {
    const S = m.pop(),
      {
        node: v,
        index: _,
        skipped: E,
        depth: A,
        statics: C,
        dynamics: R,
        optionals: w,
      } = S;
    let { extract: q, rawParams: Q, parsedParams: H } = S;
    if (v.kind === 2 && v.route && !vr(y, S)) continue;
    if (v.skipOnParamError) {
      if (!uy(n, i, S)) continue;
      ((Q = S.rawParams), (q = S.extract), (H = S.parsedParams));
    }
    u && v.route && v.kind !== la && vr(p, S) && (p = S);
    const F = _ === h;
    if (
      F &&
      (v.route && (!f || v.kind === la || v.kind === 2) && vr(y, S) && (y = S),
      !v.optional && !v.wildcard && !v.index && !v.pathless)
    )
      continue;
    const J = F ? void 0 : i[_];
    let X;
    if (F && v.index) {
      const K = {
        node: v.index,
        index: _,
        skipped: E,
        depth: A + 1,
        statics: C,
        dynamics: R,
        optionals: w,
        extract: q,
        rawParams: Q,
        parsedParams: H,
      };
      let I = !0;
      if ((v.index.skipOnParamError && (uy(n, i, K) || (I = !1)), I)) {
        if (!R && !w && !E && _S(C, h)) return K;
        vr(y, K) && (y = K);
      }
    }
    if (v.wildcard)
      for (let K = v.wildcard.length - 1; K >= 0; K--) {
        const I = v.wildcard[K],
          { prefix: st, suffix: nt } = I;
        if (
          !(
            st &&
            (F ||
              !(I.caseSensitive ? J : (X ??= J.toLowerCase())).startsWith(st))
          )
        ) {
          if (nt) {
            if (F) continue;
            const mt = i.slice(_).join("/").slice(-nt.length);
            if ((I.caseSensitive ? mt : mt.toLowerCase()) !== nt) continue;
          }
          m.push({
            node: I,
            index: h,
            skipped: E,
            depth: A + 1,
            statics: C,
            dynamics: R,
            optionals: w,
            extract: q,
            rawParams: Q,
            parsedParams: H,
          });
        }
      }
    if (v.optional) {
      const K = E | (1 << A),
        I = A + 1;
      for (let st = v.optional.length - 1; st >= 0; st--) {
        const nt = v.optional[st];
        m.push({
          node: nt,
          index: _,
          skipped: K,
          depth: I,
          statics: C,
          dynamics: R,
          optionals: w,
          extract: q,
          rawParams: Q,
          parsedParams: H,
        });
      }
      if (!F)
        for (let st = v.optional.length - 1; st >= 0; st--) {
          const nt = v.optional[st],
            { prefix: mt, suffix: xt } = nt;
          if (mt || xt) {
            const Gt = nt.caseSensitive ? J : (X ??= J.toLowerCase());
            if ((mt && !Gt.startsWith(mt)) || (xt && !Gt.endsWith(xt)))
              continue;
          }
          m.push({
            node: nt,
            index: _ + 1,
            skipped: E,
            depth: I,
            statics: C,
            dynamics: R,
            optionals: w + pr(h, _),
            extract: q,
            rawParams: Q,
            parsedParams: H,
          });
        }
    }
    if (!F && v.dynamic && J)
      for (let K = v.dynamic.length - 1; K >= 0; K--) {
        const I = v.dynamic[K],
          { prefix: st, suffix: nt } = I;
        if (st || nt) {
          const mt = I.caseSensitive ? J : (X ??= J.toLowerCase());
          if ((st && !mt.startsWith(st)) || (nt && !mt.endsWith(nt))) continue;
        }
        m.push({
          node: I,
          index: _ + 1,
          skipped: E,
          depth: A + 1,
          statics: C,
          dynamics: R + pr(h, _),
          optionals: w,
          extract: q,
          rawParams: Q,
          parsedParams: H,
        });
      }
    if (!F && v.staticInsensitive) {
      const K = v.staticInsensitive.get((X ??= J.toLowerCase()));
      K &&
        m.push({
          node: K,
          index: _ + 1,
          skipped: E,
          depth: A + 1,
          statics: C + pr(h, _),
          dynamics: R,
          optionals: w,
          extract: q,
          rawParams: Q,
          parsedParams: H,
        });
    }
    if (!F && v.static) {
      const K = v.static.get(J);
      K &&
        m.push({
          node: K,
          index: _ + 1,
          skipped: E,
          depth: A + 1,
          statics: C + pr(h, _),
          dynamics: R,
          optionals: w,
          extract: q,
          rawParams: Q,
          parsedParams: H,
        });
    }
    if (v.pathless) {
      const K = A + 1;
      for (let I = v.pathless.length - 1; I >= 0; I--) {
        const st = v.pathless[I];
        m.push({
          node: st,
          index: _,
          skipped: E,
          depth: K,
          statics: C,
          dynamics: R,
          optionals: w,
          extract: q,
          rawParams: Q,
          parsedParams: H,
        });
      }
    }
  }
  if (y) return y;
  if (u && p) {
    let S = p.index;
    for (let _ = 0; _ < p.index; _++) S += i[_].length;
    const v = S === n.length ? "/" : n.slice(S);
    return (
      (p.rawParams ??= Object.create(null)),
      (p.rawParams["**"] = decodeURIComponent(v)),
      p
    );
  }
  return null;
}
function pr(n, i) {
  return 2 ** (n - i - 1);
}
function _S(n, i) {
  return n === 2 ** (i - 1) - 1;
}
function uy(n, i, s) {
  try {
    const [u, c] = ip(n, i, s);
    ((s.rawParams = u), (s.extract = c));
    const f = s.node.parse(u);
    return (
      (s.parsedParams = Object.assign(Object.create(null), s.parsedParams, f)),
      !0
    );
  } catch {
    return null;
  }
}
function vr(n, i) {
  return n
    ? i.statics > n.statics ||
        (i.statics === n.statics &&
          (i.dynamics > n.dynamics ||
            (i.dynamics === n.dynamics &&
              (i.optionals > n.optionals ||
                (i.optionals === n.optionals &&
                  ((i.node.kind === la) > (n.node.kind === la) ||
                    ((i.node.kind === la) == (n.node.kind === la) &&
                      i.depth > n.depth)))))))
    : !0;
}
function Er(n) {
  return qc(n.filter((i) => i !== void 0).join("/"));
}
function qc(n) {
  return n.replace(/\/{2,}/g, "/");
}
function sp(n) {
  return n === "/" ? n : n.replace(/^\/{1,}/, "");
}
function sa(n) {
  const i = n.length;
  return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n;
}
function rp(n) {
  return sa(sp(n));
}
function Or(n, i) {
  return n?.endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n;
}
function ES(n, i, s) {
  return Or(n, s) === Or(i, s);
}
function RS({ base: n, to: i, trailingSlash: s = "never", cache: u }) {
  const c = i.startsWith("/"),
    f = !c && i === ".";
  let h;
  if (u) {
    h = c ? i : f ? n : n + "\0" + i;
    const v = u.get(h);
    if (v) return v;
  }
  let m;
  if (f) m = n.split("/");
  else if (c) m = i.split("/");
  else {
    for (m = n.split("/"); m.length > 1 && qi(m) === ""; ) m.pop();
    const v = i.split("/");
    for (let _ = 0, E = v.length; _ < E; _++) {
      const A = v[_];
      A === ""
        ? _
          ? _ === E - 1 && m.push(A)
          : (m = [A])
        : A === ".."
          ? m.pop()
          : A === "." || m.push(A);
    }
  }
  m.length > 1 &&
    (qi(m) === "" ? s === "never" && m.pop() : s === "always" && m.push(""));
  let p,
    y = "";
  for (let v = 0; v < m.length; v++) {
    v > 0 && (y += "/");
    const _ = m[v];
    if (!_) continue;
    p = Bc(_, 0, p);
    const E = p[0];
    if (E === 0) {
      y += _;
      continue;
    }
    const A = p[5],
      C = _.substring(0, p[1]),
      R = _.substring(p[4], A),
      w = _.substring(p[2], p[3]);
    E === 1
      ? (y += C || R ? `${C}{$${w}}${R}` : `$${w}`)
      : E === 2
        ? (y += C || R ? `${C}{$}${R}` : "$")
        : (y += `${C}{-$${w}}${R}`);
  }
  y = qc(y);
  const S = y || "/";
  return (h && u && u.set(h, S), S);
}
function TS(n) {
  const i = new Map(n.map((c) => [encodeURIComponent(c), c])),
    s = Array.from(i.keys())
      .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    u = new RegExp(s, "g");
  return (c) => c.replace(u, (f) => i.get(f) ?? f);
}
function hc(n, i, s) {
  const u = i[n];
  return typeof u != "string"
    ? u
    : n === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(u)
        ? u
        : u
            .split("/")
            .map((c) => cy(c, s))
            .join("/")
      : cy(u, s);
}
function oy({ path: n, params: i, decoder: s, ...u }) {
  let c = !1;
  const f = Object.create(null);
  if (!n || n === "/")
    return { interpolatedPath: "/", usedParams: f, isMissingParams: c };
  if (!n.includes("$"))
    return { interpolatedPath: n, usedParams: f, isMissingParams: c };
  const h = n.length;
  let m = 0,
    p,
    y = "";
  for (; m < h; ) {
    const S = m;
    p = Bc(n, S, p);
    const v = p[5];
    if (((m = v + 1), S === v)) continue;
    const _ = p[0];
    if (_ === 0) {
      y += "/" + n.substring(S, v);
      continue;
    }
    if (_ === 2) {
      const E = i._splat;
      ((f._splat = E), (f["*"] = E));
      const A = n.substring(S, p[1]),
        C = n.substring(p[4], v);
      if (!E) {
        ((c = !0), (A || C) && (y += "/" + A + C));
        continue;
      }
      const R = hc("_splat", i, s);
      y += "/" + A + R + C;
      continue;
    }
    if (_ === 1) {
      const E = n.substring(p[2], p[3]);
      (!c && !(E in i) && (c = !0), (f[E] = i[E]));
      const A = n.substring(S, p[1]),
        C = n.substring(p[4], v),
        R = hc(E, i, s) ?? "undefined";
      y += "/" + A + R + C;
      continue;
    }
    if (_ === 3) {
      const E = n.substring(p[2], p[3]),
        A = i[E];
      if (A == null) continue;
      f[E] = A;
      const C = n.substring(S, p[1]),
        R = n.substring(p[4], v),
        w = hc(E, i, s) ?? "";
      y += "/" + C + w + R;
      continue;
    }
  }
  return (
    n.endsWith("/") && (y += "/"),
    { usedParams: f, interpolatedPath: y || "/", isMissingParams: c }
  );
}
function cy(n, i) {
  const s = encodeURIComponent(n);
  return i?.(s) ?? s;
}
function ne(n) {
  return n?.isNotFound === !0;
}
function xS() {
  try {
    return typeof window < "u" && typeof window.sessionStorage == "object"
      ? window.sessionStorage
      : void 0;
  } catch {
    return;
  }
}
var AS = "tsr-scroll-restoration-v1_3";
function MS() {
  const n = xS();
  if (!n) return null;
  let i = {};
  try {
    const u = JSON.parse(n.getItem("tsr-scroll-restoration-v1_3") || "{}");
    Ll(u) && (i = u);
  } catch {}
  return {
    get state() {
      return i;
    },
    set: (u) => {
      i = na(u, i) || i;
    },
    persist: () => {
      try {
        n.setItem(AS, JSON.stringify(i));
      } catch {}
    },
  };
}
var fy = MS(),
  OS = (n) => n.state.__TSR_key || n.href;
function wS(n) {
  const i = [];
  let s;
  for (; (s = n.parentNode); )
    (i.push(
      `${n.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, n) + 1})`,
    ),
      (n = s));
  return `${i.reverse().join(" > ")}`.toLowerCase();
}
var gr = !1,
  Di = "window",
  dy = "data-scroll-restoration-id";
function CS(n, i) {
  if (!fy) return;
  const s = fy;
  if (
    ((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
    n.isScrollRestorationSetup || !s)
  )
    return;
  ((n.isScrollRestorationSetup = !0), (gr = !1));
  const u = n.options.getScrollRestorationKey || OS,
    c = new Map();
  window.history.scrollRestoration = "manual";
  const f = (m) => {
      if (!(gr || !n.isScrollRestoring))
        if (m.target === document || m.target === window)
          c.set(Di, {
            scrollX: window.scrollX || 0,
            scrollY: window.scrollY || 0,
          });
        else {
          const p = m.target;
          c.set(p, { scrollX: p.scrollLeft || 0, scrollY: p.scrollTop || 0 });
        }
    },
    h = (m) => {
      if (!n.isScrollRestoring || !m || c.size === 0 || !s) return;
      const p = (s.state[m] ||= {});
      for (const [y, S] of c) {
        let v;
        if (y === Di) v = Di;
        else if (y.isConnected) {
          const _ = y.getAttribute(dy);
          v = _ ? `[${dy}="${_}"]` : wS(y);
        }
        v && (p[v] = S);
      }
    };
  (document.addEventListener("scroll", f, !0),
    n.subscribe("onBeforeLoad", (m) => {
      (h(m.fromLocation ? u(m.fromLocation) : void 0), c.clear());
    }),
    window.addEventListener("pagehide", () => {
      (h(u(n.stores.resolvedLocation.get() ?? n.stores.location.get())),
        s.persist());
    }),
    n.subscribe("onRendered", (m) => {
      const p = u(m.toLocation),
        y = n.options.scrollRestorationBehavior,
        S = n.options.scrollToTopSelectors;
      if ((c.clear(), !n.resetNextScroll)) {
        n.resetNextScroll = !0;
        return;
      }
      if (
        !(
          typeof n.options.scrollRestoration == "function" &&
          !n.options.scrollRestoration({ location: n.latestLocation })
        )
      ) {
        gr = !0;
        try {
          const v = n.isScrollRestoring ? s.state[p] : void 0;
          let _ = !1;
          if (v)
            for (const E in v) {
              const A = v[E];
              if (!Ll(A)) continue;
              const { scrollX: C, scrollY: R } = A;
              if (!(!Number.isFinite(C) || !Number.isFinite(R))) {
                if (E === Di)
                  (window.scrollTo({ top: R, left: C, behavior: y }), (_ = !0));
                else if (E) {
                  let w;
                  try {
                    w = document.querySelector(E);
                  } catch {
                    continue;
                  }
                  w && ((w.scrollLeft = C), (w.scrollTop = R), (_ = !0));
                }
              }
            }
          if (!_) {
            const E = n.history.location.hash.slice(1);
            if (E) {
              const A = window.history.state?.__hashScrollIntoViewOptions ?? !0;
              if (A) {
                const C = document.getElementById(E);
                C && C.scrollIntoView(A);
              }
            } else {
              const A = { top: 0, left: 0, behavior: y };
              if ((window.scrollTo(A), S))
                for (const C of S) {
                  if (C === Di) continue;
                  const R =
                    typeof C == "function" ? C() : document.querySelector(C);
                  R && R.scrollTo(A);
                }
            }
          }
        } finally {
          gr = !1;
        }
        n.isScrollRestoring && s.set((v) => ((v[p] ||= {}), v));
      }
    }));
}
function up(n, i = String) {
  const s = new URLSearchParams();
  for (const u in n) {
    const c = n[u];
    c !== void 0 && s.set(u, i(c));
  }
  return s.toString();
}
function mc(n) {
  return n
    ? n === "false"
      ? !1
      : n === "true"
        ? !0
        : +n * 0 === 0 && +n + "" === n
          ? +n
          : n
    : "";
}
function zS(n) {
  const i = new URLSearchParams(n),
    s = Object.create(null);
  for (const [u, c] of i.entries()) {
    const f = s[u];
    f == null
      ? (s[u] = mc(c))
      : Array.isArray(f)
        ? f.push(mc(c))
        : (s[u] = [f, mc(c)]);
  }
  return s;
}
var DS = US(JSON.parse),
  LS = NS(JSON.stringify, JSON.parse);
function US(n) {
  return (i) => {
    i[0] === "?" && (i = i.substring(1));
    const s = zS(i);
    for (const u in s) {
      const c = s[u];
      if (typeof c == "string")
        try {
          s[u] = n(c);
        } catch {}
    }
    return s;
  };
}
function NS(n, i) {
  const s = typeof i == "function";
  function u(c) {
    if (typeof c == "object" && c !== null)
      try {
        return n(c);
      } catch {}
    else if (s && typeof c == "string")
      try {
        return (i(c), n(c));
      } catch {}
    return c;
  }
  return (c) => {
    const f = up(c, u);
    return f ? `?${f}` : "";
  };
}
var Ua = "__root__";
function op(n) {
  if (
    ((n.statusCode = n.statusCode || n.code || 307),
    !n._builtLocation && !n.reloadDocument && typeof n.href == "string")
  )
    try {
      (new URL(n.href), (n.reloadDocument = !0));
    } catch {}
  const i = new Headers(n.headers);
  n.href && i.get("Location") === null && i.set("Location", n.href);
  const s = new Response(null, { status: n.statusCode, headers: i });
  if (((s.options = n), n.throw)) throw s;
  return s;
}
function Ee(n) {
  return n instanceof Response && !!n.options;
}
function jS(n) {
  if (n !== null && typeof n == "object" && n.isSerializedRedirect)
    return op(n);
}
function BS(n) {
  return {
    input: ({ url: i }) => {
      for (const s of n) i = Ac(s, i);
      return i;
    },
    output: ({ url: i }) => {
      for (let s = n.length - 1; s >= 0; s--) i = cp(n[s], i);
      return i;
    },
  };
}
function HS(n) {
  const i = rp(n.basepath),
    s = `/${i}`,
    u = `${s}/`,
    c = n.caseSensitive ? s : s.toLowerCase(),
    f = n.caseSensitive ? u : u.toLowerCase();
  return {
    input: ({ url: h }) => {
      const m = n.caseSensitive ? h.pathname : h.pathname.toLowerCase();
      return (
        m === c
          ? (h.pathname = "/")
          : m.startsWith(f) && (h.pathname = h.pathname.slice(s.length)),
        h
      );
    },
    output: ({ url: h }) => ((h.pathname = Er(["/", i, h.pathname])), h),
  };
}
function Ac(n, i) {
  const s = n?.input?.({ url: i });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return i;
}
function cp(n, i) {
  const s = n?.output?.({ url: i });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return i;
}
function qS(n, i) {
  const {
      createMutableStore: s,
      createReadonlyStore: u,
      batch: c,
      init: f,
    } = i,
    h = new Map(),
    m = new Map(),
    p = new Map(),
    y = s(n.status),
    S = s(n.loadedAt),
    v = s(n.isLoading),
    _ = s(n.isTransitioning),
    E = s(n.location),
    A = s(n.resolvedLocation),
    C = s(n.statusCode),
    R = s(n.redirect),
    w = s([]),
    q = s([]),
    Q = s([]),
    H = u(() => yc(h, w.get())),
    F = u(() => yc(m, q.get())),
    J = u(() => yc(p, Q.get())),
    X = u(() => w.get()[0]),
    K = u(() => w.get().some((k) => h.get(k)?.get().status === "pending")),
    I = u(() => ({
      locationHref: E.get().href,
      resolvedLocationHref: A.get()?.href,
      status: y.get(),
    })),
    st = u(() => ({
      status: y.get(),
      loadedAt: S.get(),
      isLoading: v.get(),
      isTransitioning: _.get(),
      matches: H.get(),
      location: E.get(),
      resolvedLocation: A.get(),
      statusCode: C.get(),
      redirect: R.get(),
    })),
    nt = Qi(64);
  function mt(k) {
    let it = nt.get(k);
    return (
      it ||
        ((it = u(() => {
          const Et = w.get();
          for (const Tt of Et) {
            const O = h.get(Tt);
            if (O && O.routeId === k) return O.get();
          }
        })),
        nt.set(k, it)),
      it
    );
  }
  const xt = {
    status: y,
    loadedAt: S,
    isLoading: v,
    isTransitioning: _,
    location: E,
    resolvedLocation: A,
    statusCode: C,
    redirect: R,
    matchesId: w,
    pendingIds: q,
    cachedIds: Q,
    matches: H,
    pendingMatches: F,
    cachedMatches: J,
    firstId: X,
    hasPending: K,
    matchRouteDeps: I,
    matchStores: h,
    pendingMatchStores: m,
    cachedMatchStores: p,
    __store: st,
    getRouteMatchStore: mt,
    setMatches: Gt,
    setPending: Nt,
    setCached: j,
  };
  (Gt(n.matches), f?.(xt));
  function Gt(k) {
    pc(k, h, w, s, c);
  }
  function Nt(k) {
    pc(k, m, q, s, c);
  }
  function j(k) {
    pc(k, p, Q, s, c);
  }
  return xt;
}
function yc(n, i) {
  const s = [];
  for (const u of i) {
    const c = n.get(u);
    c && s.push(c.get());
  }
  return s;
}
function pc(n, i, s, u, c) {
  const f = n.map((m) => m.id),
    h = new Set(f);
  c(() => {
    for (const m of i.keys()) h.has(m) || i.delete(m);
    for (const m of n) {
      const p = i.get(m.id);
      if (!p) {
        const y = u(m);
        ((y.routeId = m.routeId), i.set(m.id, y));
        continue;
      }
      ((p.routeId = m.routeId), p.get() !== m && p.set(m));
    }
    cS(s.get(), f) || s.set(f);
  });
}
var Mc = (n) => {
    if (!n.rendered) return ((n.rendered = !0), n.onReady?.());
  },
  YS = (n) =>
    n.stores.matchesId
      .get()
      .some((i) => n.stores.matchStores.get(i)?.get()._forcePending),
  jr = (n, i) => !!(n.preload && !n.router.stores.matchStores.has(i)),
  Na = (n, i, s = !0) => {
    const u = { ...(n.router.options.context ?? {}) },
      c = s ? i : i - 1;
    for (let f = 0; f <= c; f++) {
      const h = n.matches[f];
      if (!h) continue;
      const m = n.router.getMatch(h.id);
      m && Object.assign(u, m.__routeContext, m.__beforeLoadContext);
    }
    return u;
  },
  hy = (n, i) => {
    if (!n.matches.length) return;
    const s = i.routeId,
      u = n.matches.findIndex((h) => h.routeId === n.router.routeTree.id),
      c = u >= 0 ? u : 0;
    let f = s
      ? n.matches.findIndex((h) => h.routeId === s)
      : (n.firstBadMatchIndex ?? n.matches.length - 1);
    f < 0 && (f = c);
    for (let h = f; h >= 0; h--) {
      const m = n.matches[h];
      if (n.router.looseRoutesById[m.routeId].options.notFoundComponent)
        return h;
    }
    return s ? f : c;
  },
  ia = (n, i, s) => {
    if (!(!Ee(s) && !ne(s)))
      throw (
        (Ee(s) && s.redirectHandled && !s.options.reloadDocument) ||
          (i &&
            (i._nonReactive.beforeLoadPromise?.resolve(),
            i._nonReactive.loaderPromise?.resolve(),
            (i._nonReactive.beforeLoadPromise = void 0),
            (i._nonReactive.loaderPromise = void 0),
            (i._nonReactive.error = s),
            n.updateMatch(i.id, (u) => ({
              ...u,
              status: Ee(s)
                ? "redirected"
                : ne(s)
                  ? "notFound"
                  : u.status === "pending"
                    ? "success"
                    : u.status,
              context: Na(n, i.index),
              isFetching: !1,
              error: s,
            })),
            ne(s) && !s.routeId && (s.routeId = i.routeId),
            i._nonReactive.loadPromise?.resolve()),
          Ee(s) &&
            ((n.rendered = !0),
            (s.options._fromLocation = n.location),
            (s.redirectHandled = !0),
            (s = n.router.resolveRedirect(s)))),
        s
      );
  },
  fp = (n, i) => {
    const s = n.router.getMatch(i);
    return !!(!s || s._nonReactive.dehydrated);
  },
  my = (n, i, s) => {
    const u = Na(n, s);
    n.updateMatch(i, (c) => ({ ...c, context: u }));
  },
  Li = (n, i, s, u) => {
    const { id: c, routeId: f } = n.matches[i],
      h = n.router.looseRoutesById[f];
    if (s instanceof Promise) throw s;
    ((s.routerCode = u),
      (n.firstBadMatchIndex ??= i),
      ia(n, n.router.getMatch(c), s));
    try {
      h.options.onError?.(s);
    } catch (m) {
      ((s = m), ia(n, n.router.getMatch(c), s));
    }
    (n.updateMatch(
      c,
      (m) => (
        m._nonReactive.beforeLoadPromise?.resolve(),
        (m._nonReactive.beforeLoadPromise = void 0),
        m._nonReactive.loadPromise?.resolve(),
        {
          ...m,
          error: s,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !n.preload && !Ee(s) && !ne(s) && (n.serialError ??= s));
  },
  dp = (n, i, s, u) => {
    if (u._nonReactive.pendingTimeout !== void 0) return;
    const c = s.options.pendingMs ?? n.router.options.defaultPendingMs;
    if (
      n.onReady &&
      !jr(n, i) &&
      (s.options.loader || s.options.beforeLoad || mp(s)) &&
      typeof c == "number" &&
      c !== 1 / 0 &&
      (s.options.pendingComponent ?? n.router.options?.defaultPendingComponent)
    ) {
      const f = setTimeout(() => {
        Mc(n);
      }, c);
      u._nonReactive.pendingTimeout = f;
    }
  },
  QS = (n, i, s) => {
    const u = n.router.getMatch(i);
    if (!u._nonReactive.beforeLoadPromise && !u._nonReactive.loaderPromise)
      return;
    dp(n, i, s, u);
    const c = () => {
      const f = n.router.getMatch(i);
      f.preload &&
        (f.status === "redirected" || f.status === "notFound") &&
        ia(n, f, f.error);
    };
    return u._nonReactive.beforeLoadPromise
      ? u._nonReactive.beforeLoadPromise.then(c)
      : c();
  },
  GS = (n, i, s, u) => {
    const c = n.router.getMatch(i);
    let f = c._nonReactive.loadPromise;
    c._nonReactive.loadPromise = ja(() => {
      (f?.resolve(), (f = void 0));
    });
    const { paramsError: h, searchError: m } = c;
    (h && Li(n, s, h, "PARSE_PARAMS"),
      m && Li(n, s, m, "VALIDATE_SEARCH"),
      dp(n, i, u, c));
    const p = new AbortController();
    let y = !1;
    const S = () => {
        y ||
          ((y = !0),
          n.updateMatch(i, (H) => ({
            ...H,
            isFetching: "beforeLoad",
            fetchCount: H.fetchCount + 1,
            abortController: p,
          })));
      },
      v = () => {
        (c._nonReactive.beforeLoadPromise?.resolve(),
          (c._nonReactive.beforeLoadPromise = void 0),
          n.updateMatch(i, (H) => ({ ...H, isFetching: !1 })));
      };
    if (!u.options.beforeLoad) {
      n.router.batch(() => {
        (S(), v());
      });
      return;
    }
    c._nonReactive.beforeLoadPromise = ja();
    const _ = { ...Na(n, s, !1), ...c.__routeContext },
      { search: E, params: A, cause: C } = c,
      R = jr(n, i),
      w = {
        search: E,
        abortController: p,
        params: A,
        preload: R,
        context: _,
        location: n.location,
        navigate: (H) => n.router.navigate({ ...H, _fromLocation: n.location }),
        buildLocation: n.router.buildLocation,
        cause: R ? "preload" : C,
        matches: n.matches,
        routeId: u.id,
        ...n.router.options.additionalContext,
      },
      q = (H) => {
        if (H === void 0) {
          n.router.batch(() => {
            (S(), v());
          });
          return;
        }
        ((Ee(H) || ne(H)) && (S(), Li(n, s, H, "BEFORE_LOAD")),
          n.router.batch(() => {
            (S(),
              n.updateMatch(i, (F) => ({ ...F, __beforeLoadContext: H })),
              v());
          }));
      };
    let Q;
    try {
      if (((Q = u.options.beforeLoad(w)), Yi(Q)))
        return (
          S(),
          Q.catch((H) => {
            Li(n, s, H, "BEFORE_LOAD");
          }).then(q)
        );
    } catch (H) {
      (S(), Li(n, s, H, "BEFORE_LOAD"));
    }
    q(Q);
  },
  VS = (n, i) => {
    const { id: s, routeId: u } = n.matches[i],
      c = n.router.looseRoutesById[u],
      f = () => m(),
      h = () => GS(n, s, i, c),
      m = () => {
        if (fp(n, s)) return;
        const p = QS(n, s, c);
        return Yi(p) ? p.then(h) : h();
      };
    return f();
  },
  XS = (n, i, s) => {
    const u = n.router.getMatch(i);
    if (!u || (!s.options.head && !s.options.scripts && !s.options.headers))
      return;
    const c = {
      ssr: n.router.options.ssr,
      matches: n.matches,
      match: u,
      params: u.params,
      loaderData: u.loaderData,
    };
    return Promise.all([
      s.options.head?.(c),
      s.options.scripts?.(c),
      s.options.headers?.(c),
    ]).then(([f, h, m]) => ({
      meta: f?.meta,
      links: f?.links,
      headScripts: f?.scripts,
      headers: m,
      scripts: h,
      styles: f?.styles,
    }));
  },
  hp = (n, i, s, u, c) => {
    const f = i[u - 1],
      {
        params: h,
        loaderDeps: m,
        abortController: p,
        cause: y,
      } = n.router.getMatch(s),
      S = Na(n, u),
      v = jr(n, s);
    return {
      params: h,
      deps: m,
      preload: !!v,
      parentMatchPromise: f,
      abortController: p,
      context: S,
      location: n.location,
      navigate: (_) => n.router.navigate({ ..._, _fromLocation: n.location }),
      cause: v ? "preload" : y,
      route: c,
      ...n.router.options.additionalContext,
    };
  },
  yy = async (n, i, s, u, c) => {
    try {
      const f = n.router.getMatch(s);
      try {
        (!(ap ?? n.router.isServer) || f.ssr === !0) && Gi(c);
        const h = c.options.loader,
          m = typeof h == "function" ? h : h?.handler,
          p = m?.(hp(n, i, s, u, c)),
          y = !!m && Yi(p);
        if (
          ((y ||
            c._lazyPromise ||
            c._componentsPromise ||
            c.options.head ||
            c.options.scripts ||
            c.options.headers ||
            f._nonReactive.minPendingPromise) &&
            n.updateMatch(s, (v) => ({ ...v, isFetching: "loader" })),
          m)
        ) {
          const v = y ? await p : p;
          (ia(n, n.router.getMatch(s), v),
            v !== void 0 && n.updateMatch(s, (_) => ({ ..._, loaderData: v })));
        }
        c._lazyPromise && (await c._lazyPromise);
        const S = f._nonReactive.minPendingPromise;
        (S && (await S),
          c._componentsPromise && (await c._componentsPromise),
          n.updateMatch(s, (v) => ({
            ...v,
            error: void 0,
            context: Na(n, u),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (h) {
        let m = h;
        if (m?.name === "AbortError") {
          if (f.abortController.signal.aborted) {
            (f._nonReactive.loaderPromise?.resolve(),
              (f._nonReactive.loaderPromise = void 0));
            return;
          }
          n.updateMatch(s, (y) => ({
            ...y,
            status: y.status === "pending" ? "success" : y.status,
            isFetching: !1,
            context: Na(n, u),
          }));
          return;
        }
        const p = f._nonReactive.minPendingPromise;
        (p && (await p),
          ne(h) && (await c.options.notFoundComponent?.preload?.()),
          ia(n, n.router.getMatch(s), h));
        try {
          c.options.onError?.(h);
        } catch (y) {
          ((m = y), ia(n, n.router.getMatch(s), y));
        }
        (!Ee(m) && !ne(m) && (await Gi(c, ["errorComponent"])),
          n.updateMatch(s, (y) => ({
            ...y,
            error: m,
            context: Na(n, u),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (f) {
      const h = n.router.getMatch(s);
      (h && (h._nonReactive.loaderPromise = void 0), ia(n, h, f));
    }
  },
  KS = async (n, i, s) => {
    async function u(E, A, C, R, w) {
      const q = Date.now() - A.updatedAt,
        Q = E
          ? (w.options.preloadStaleTime ??
            n.router.options.defaultPreloadStaleTime ??
            3e4)
          : (w.options.staleTime ?? n.router.options.defaultStaleTime ?? 0),
        H = w.options.shouldReload,
        F = typeof H == "function" ? H(hp(n, i, c, s, w)) : H,
        { status: J, invalid: X } = R,
        K =
          q >= Q &&
          (!!n.forceStaleReload ||
            R.cause === "enter" ||
            (C !== void 0 && C !== R.id));
      ((h = J === "success" && (X || (F ?? K))),
        (E && w.options.preload === !1) ||
          (h && !n.sync && S
            ? ((m = !0),
              (async () => {
                try {
                  await yy(n, i, c, s, w);
                  const I = n.router.getMatch(c);
                  (I._nonReactive.loaderPromise?.resolve(),
                    I._nonReactive.loadPromise?.resolve(),
                    (I._nonReactive.loaderPromise = void 0),
                    (I._nonReactive.loadPromise = void 0));
                } catch (I) {
                  Ee(I) && (await n.router.navigate(I.options));
                }
              })())
            : J !== "success" || h
              ? await yy(n, i, c, s, w)
              : my(n, c, s)));
    }
    const { id: c, routeId: f } = n.matches[s];
    let h = !1,
      m = !1;
    const p = n.router.looseRoutesById[f],
      y = p.options.loader,
      S =
        ((typeof y == "function" ? void 0 : y?.staleReloadMode) ??
          n.router.options.defaultStaleReloadMode) !== "blocking";
    if (fp(n, c)) {
      if (!n.router.getMatch(c)) return n.matches[s];
      my(n, c, s);
    } else {
      const E = n.router.getMatch(c),
        A = n.router.stores.matchesId.get()[s],
        C =
          ((A && n.router.stores.matchStores.get(A)) || null)?.routeId === f
            ? A
            : n.router.stores.matches.get().find((w) => w.routeId === f)?.id,
        R = jr(n, c);
      if (E._nonReactive.loaderPromise) {
        if (E.status === "success" && !n.sync && !E.preload && S) return E;
        await E._nonReactive.loaderPromise;
        const w = n.router.getMatch(c),
          q = w._nonReactive.error || w.error;
        (q && ia(n, w, q), w.status === "pending" && (await u(R, E, C, w, p)));
      } else {
        const w = R && !n.router.stores.matchStores.has(c),
          q = n.router.getMatch(c);
        ((q._nonReactive.loaderPromise = ja()),
          w !== q.preload && n.updateMatch(c, (Q) => ({ ...Q, preload: w })),
          await u(R, E, C, q, p));
      }
    }
    const v = n.router.getMatch(c);
    (m ||
      (v._nonReactive.loaderPromise?.resolve(),
      v._nonReactive.loadPromise?.resolve(),
      (v._nonReactive.loadPromise = void 0)),
      clearTimeout(v._nonReactive.pendingTimeout),
      (v._nonReactive.pendingTimeout = void 0),
      m || (v._nonReactive.loaderPromise = void 0),
      (v._nonReactive.dehydrated = void 0));
    const _ = m ? v.isFetching : !1;
    return _ !== v.isFetching || v.invalid !== !1
      ? (n.updateMatch(c, (E) => ({ ...E, isFetching: _, invalid: !1 })),
        n.router.getMatch(c))
      : v;
  };
async function py(n) {
  const i = n,
    s = [];
  YS(i.router) && Mc(i);
  let u;
  for (let _ = 0; _ < i.matches.length; _++) {
    try {
      const E = VS(i, _);
      Yi(E) && (await E);
    } catch (E) {
      if (Ee(E)) throw E;
      if (ne(E)) u = E;
      else if (!i.preload) throw E;
      break;
    }
    if (i.serialError || i.firstBadMatchIndex != null) break;
  }
  const c = i.firstBadMatchIndex ?? i.matches.length,
    f = u && !i.preload ? hy(i, u) : void 0,
    h = u && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
  let m, p;
  for (let _ = 0; _ < h; _++) s.push(KS(i, s, _));
  try {
    await Promise.all(s);
  } catch {
    const _ = await Promise.allSettled(s);
    for (const E of _) {
      if (E.status !== "rejected") continue;
      const A = E.reason;
      if (Ee(A)) throw A;
      ne(A) ? (m ??= A) : (p ??= A);
    }
    if (p !== void 0) throw p;
  }
  const y = m ?? (u && !i.preload ? u : void 0);
  let S =
    i.firstBadMatchIndex !== void 0
      ? i.firstBadMatchIndex
      : i.matches.length - 1;
  if (!y && u && i.preload) return i.matches;
  if (y) {
    const _ = hy(i, y);
    _ === void 0 && Re();
    const E = i.matches[_],
      A = i.router.looseRoutesById[E.routeId],
      C = i.router.options?.defaultNotFoundComponent;
    (!A.options.notFoundComponent && C && (A.options.notFoundComponent = C),
      (y.routeId = E.routeId));
    const R = E.routeId === i.router.routeTree.id;
    (i.updateMatch(E.id, (w) => ({
      ...w,
      ...(R
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: y }),
      isFetching: !1,
    })),
      (S = _),
      await Gi(A, ["notFoundComponent"]));
  } else if (!i.preload) {
    const _ = i.matches[0];
    _.globalNotFound ||
      (i.router.getMatch(_.id)?.globalNotFound &&
        i.updateMatch(_.id, (E) => ({
          ...E,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (i.serialError && i.firstBadMatchIndex !== void 0) {
    const _ = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
    await Gi(_, ["errorComponent"]);
  }
  for (let _ = 0; _ <= S; _++) {
    const { id: E, routeId: A } = i.matches[_],
      C = i.router.looseRoutesById[A];
    try {
      const R = XS(i, E, C);
      if (R) {
        const w = await R;
        i.updateMatch(E, (q) => ({ ...q, ...w }));
      }
    } catch (R) {
      console.error(`Error executing head for route ${A}:`, R);
    }
  }
  const v = Mc(i);
  if ((Yi(v) && (await v), y)) throw y;
  if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
  return i.matches;
}
function vy(n, i) {
  const s = i.map((u) => n.options[u]?.preload?.()).filter(Boolean);
  if (s.length !== 0) return Promise.all(s);
}
function Gi(n, i = Rr) {
  !n._lazyLoaded &&
    n._lazyPromise === void 0 &&
    (n.lazyFn
      ? (n._lazyPromise = n.lazyFn().then((u) => {
          const { id: c, ...f } = u.options;
          (Object.assign(n.options, f),
            (n._lazyLoaded = !0),
            (n._lazyPromise = void 0));
        }))
      : (n._lazyLoaded = !0));
  const s = () =>
    n._componentsLoaded
      ? void 0
      : i === Rr
        ? (() => {
            if (n._componentsPromise === void 0) {
              const u = vy(n, Rr);
              u
                ? (n._componentsPromise = u.then(() => {
                    ((n._componentsLoaded = !0),
                      (n._componentsPromise = void 0));
                  }))
                : (n._componentsLoaded = !0);
            }
            return n._componentsPromise;
          })()
        : vy(n, i);
  return n._lazyPromise ? n._lazyPromise.then(s) : s();
}
function mp(n) {
  for (const i of Rr) if (n.options[i]?.preload) return !0;
  return !1;
}
var Rr = [
    "component",
    "errorComponent",
    "pendingComponent",
    "notFoundComponent",
  ],
  ra = "__TSR_index",
  gy = "popstate",
  Sy = "beforeunload";
function ZS(n) {
  let i = n.getLocation();
  const s = new Set(),
    u = (h) => {
      ((i = n.getLocation()), s.forEach((m) => m({ location: i, action: h })));
    },
    c = (h) => {
      (n.notifyOnIndexChange ?? !0) ? u(h) : (i = n.getLocation());
    },
    f = async ({ task: h, navigateOpts: m, ...p }) => {
      if (m?.ignoreBlocker ?? !1) {
        h();
        return;
      }
      const y = n.getBlockers?.() ?? [],
        S = p.type === "PUSH" || p.type === "REPLACE";
      if (typeof document < "u" && y.length && S)
        for (const v of y) {
          const _ = wr(p.path, p.state);
          if (
            await v.blockerFn({
              currentLocation: i,
              nextLocation: _,
              action: p.type,
            })
          ) {
            n.onBlocked?.();
            return;
          }
        }
      h();
    };
  return {
    get location() {
      return i;
    },
    get length() {
      return n.getLength();
    },
    subscribers: s,
    subscribe: (h) => (
      s.add(h),
      () => {
        s.delete(h);
      }
    ),
    push: (h, m, p) => {
      const y = i.state[ra];
      ((m = by(y + 1, m)),
        f({
          task: () => {
            (n.pushState(h, m), u({ type: "PUSH" }));
          },
          navigateOpts: p,
          type: "PUSH",
          path: h,
          state: m,
        }));
    },
    replace: (h, m, p) => {
      const y = i.state[ra];
      ((m = by(y, m)),
        f({
          task: () => {
            (n.replaceState(h, m), u({ type: "REPLACE" }));
          },
          navigateOpts: p,
          type: "REPLACE",
          path: h,
          state: m,
        }));
    },
    go: (h, m) => {
      f({
        task: () => {
          (n.go(h), c({ type: "GO", index: h }));
        },
        navigateOpts: m,
        type: "GO",
      });
    },
    back: (h) => {
      f({
        task: () => {
          (n.back(h?.ignoreBlocker ?? !1), c({ type: "BACK" }));
        },
        navigateOpts: h,
        type: "BACK",
      });
    },
    forward: (h) => {
      f({
        task: () => {
          (n.forward(h?.ignoreBlocker ?? !1), c({ type: "FORWARD" }));
        },
        navigateOpts: h,
        type: "FORWARD",
      });
    },
    canGoBack: () => i.state[ra] !== 0,
    createHref: (h) => n.createHref(h),
    block: (h) => {
      if (!n.setBlockers) return () => {};
      const m = n.getBlockers?.() ?? [];
      return (
        n.setBlockers([...m, h]),
        () => {
          const p = n.getBlockers?.() ?? [];
          n.setBlockers?.(p.filter((y) => y !== h));
        }
      );
    },
    flush: () => n.flush?.(),
    destroy: () => n.destroy?.(),
    notify: u,
  };
}
function by(n, i) {
  i || (i = {});
  const s = Yc();
  return { ...i, key: s, __TSR_key: s, [ra]: n };
}
function kS(n) {
  const i = typeof document < "u" ? window : void 0,
    s = i.history.pushState,
    u = i.history.replaceState;
  let c = [];
  const f = () => c,
    h = (K) => (c = K),
    m = (K) => K,
    p = () =>
      wr(
        `${i.location.pathname}${i.location.search}${i.location.hash}`,
        i.history.state,
      );
  if (!i.history.state?.__TSR_key && !i.history.state?.key) {
    const K = Yc();
    i.history.replaceState({ [ra]: 0, key: K, __TSR_key: K }, "");
  }
  let y = p(),
    S,
    v = !1,
    _ = !1,
    E = !1,
    A = !1;
  const C = () => y;
  let R, w;
  const q = () => {
      R &&
        ((X._ignoreSubscribers = !0),
        (R.isPush ? i.history.pushState : i.history.replaceState)(
          R.state,
          "",
          R.href,
        ),
        (X._ignoreSubscribers = !1),
        (R = void 0),
        (w = void 0),
        (S = void 0));
    },
    Q = (K, I, st) => {
      const nt = m(I);
      (w || (S = y),
        (y = wr(I, st)),
        (R = { href: nt, state: st, isPush: R?.isPush || K === "push" }),
        w || (w = Promise.resolve().then(() => q())));
    },
    H = (K) => {
      ((y = p()), X.notify({ type: K }));
    },
    F = async () => {
      if (_) {
        _ = !1;
        return;
      }
      const K = p(),
        I = K.state[ra] - y.state[ra],
        st = I === 1,
        nt = I === -1,
        mt = (!st && !nt) || v;
      v = !1;
      const xt = mt ? "GO" : nt ? "BACK" : "FORWARD",
        Gt = mt ? { type: "GO", index: I } : { type: nt ? "BACK" : "FORWARD" };
      if (E) E = !1;
      else {
        const Nt = f();
        if (typeof document < "u" && Nt.length) {
          for (const j of Nt)
            if (
              await j.blockerFn({
                currentLocation: y,
                nextLocation: K,
                action: xt,
              })
            ) {
              ((_ = !0), i.history.go(1), X.notify(Gt));
              return;
            }
        }
      }
      ((y = p()), X.notify(Gt));
    },
    J = (K) => {
      if (A) {
        A = !1;
        return;
      }
      let I = !1;
      const st = f();
      if (typeof document < "u" && st.length)
        for (const nt of st) {
          const mt = nt.enableBeforeUnload ?? !0;
          if (mt === !0) {
            I = !0;
            break;
          }
          if (typeof mt == "function" && mt() === !0) {
            I = !0;
            break;
          }
        }
      if (I) return (K.preventDefault(), (K.returnValue = ""));
    },
    X = ZS({
      getLocation: C,
      getLength: () => i.history.length,
      pushState: (K, I) => Q("push", K, I),
      replaceState: (K, I) => Q("replace", K, I),
      back: (K) => (K && (E = !0), (A = !0), i.history.back()),
      forward: (K) => {
        (K && (E = !0), (A = !0), i.history.forward());
      },
      go: (K) => {
        ((v = !0), i.history.go(K));
      },
      createHref: (K) => m(K),
      flush: q,
      destroy: () => {
        ((i.history.pushState = s),
          (i.history.replaceState = u),
          i.removeEventListener(Sy, J, { capture: !0 }),
          i.removeEventListener(gy, F));
      },
      onBlocked: () => {
        S && y !== S && (y = S);
      },
      getBlockers: f,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(Sy, J, { capture: !0 }),
    i.addEventListener(gy, F),
    (i.history.pushState = function (...K) {
      const I = s.apply(i.history, K);
      return (X._ignoreSubscribers || H("PUSH"), I);
    }),
    (i.history.replaceState = function (...K) {
      const I = u.apply(i.history, K);
      return (X._ignoreSubscribers || H("REPLACE"), I);
    }),
    X
  );
}
function PS(n) {
  let i = n.replace(/[\x00-\x1f\x7f]/g, "");
  return (i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i);
}
function wr(n, i) {
  const s = PS(n),
    u = s.indexOf("#"),
    c = s.indexOf("?"),
    f = Yc();
  return {
    href: s,
    pathname: s.substring(
      0,
      u > 0 ? (c > 0 ? Math.min(u, c) : u) : c > 0 ? c : s.length,
    ),
    hash: u > -1 ? s.substring(u) : "",
    search: c > -1 ? s.slice(c, u === -1 ? void 0 : u) : "",
    state: i || { [ra]: 0, key: f, __TSR_key: f },
  };
}
function Yc() {
  return (Math.random() + 1).toString(36).substring(7);
}
function JS(n) {
  return n instanceof Error
    ? { name: n.name, message: n.message }
    : { data: n };
}
function Cl(n, i) {
  const s = i,
    u = n;
  return {
    fromLocation: s,
    toLocation: u,
    pathChanged: s?.pathname !== u.pathname,
    hrefChanged: s?.href !== u.href,
    hashChanged: s?.hash !== u.hash,
  };
}
var FS = class {
    constructor(n, i) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.startTransition = (s) => s()),
        (this.update = (s) => {
          const u = this.options,
            c = this.basepath ?? u?.basepath ?? "/",
            f = this.basepath === void 0,
            h = u?.rewrite;
          if (
            ((this.options = { ...u, ...s }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = TS(
                this.options.pathParamsAllowedCharacters,
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = kS())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let S;
            ((this.resolvePathCache = Qi(1e3)),
              (S = this.buildRouteTree()),
              this.setRoutes(S));
          }
          if (!this.stores && this.latestLocation) {
            const S = this.getStoreConfig(this);
            ((this.batch = S.batch),
              (this.stores = qS($S(this.latestLocation), S)),
              CS(this));
          }
          let m = !1;
          const p = this.options.basepath ?? "/",
            y = this.options.rewrite;
          if (f || c !== p || h !== y) {
            this.basepath = p;
            const S = [],
              v = rp(p);
            (v && v !== "/" && S.push(HS({ basepath: p })),
              y && S.push(y),
              (this.rewrite =
                S.length === 0 ? void 0 : S.length === 1 ? S[0] : BS(S)),
              this.history && this.updateLatestLocation(),
              (m = !0));
          }
          (m && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a)",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation,
          );
        }),
        (this.buildRouteTree = () => {
          const s = vS(this.routeTree, this.options.caseSensitive, (u, c) => {
            u.init({ originalIndex: c });
          });
          return (
            this.options.routeMasks &&
              dS(this.options.routeMasks, s.processedTree),
            s
          );
        }),
        (this.subscribe = (s, u) => {
          const c = { eventType: s, fn: u };
          return (
            this.subscribers.add(c),
            () => {
              this.subscribers.delete(c);
            }
          );
        }),
        (this.emit = (s) => {
          this.subscribers.forEach((u) => {
            u.eventType === s.type && u.fn(s);
          });
        }),
        (this.parseLocation = (s, u) => {
          const c = ({
              pathname: p,
              search: y,
              hash: S,
              href: v,
              state: _,
            }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)) {
                const w = this.options.parseSearch(y),
                  q = this.options.stringifySearch(w);
                return {
                  href: p + q + S,
                  publicHref: p + q + S,
                  pathname: zi(p).path,
                  external: !1,
                  searchStr: q,
                  search: za(u?.search, w),
                  hash: zi(S.slice(1)).path,
                  state: aa(u?.state, _),
                };
              }
              const E = new URL(v, this.origin),
                A = Ac(this.rewrite, E),
                C = this.options.parseSearch(A.search),
                R = this.options.stringifySearch(C);
              return (
                (A.search = R),
                {
                  href: A.href.replace(A.origin, ""),
                  publicHref: v,
                  pathname: zi(A.pathname).path,
                  external: !!this.rewrite && A.origin !== this.origin,
                  searchStr: R,
                  search: za(u?.search, C),
                  hash: zi(A.hash.slice(1)).path,
                  state: aa(u?.state, _),
                }
              );
            },
            f = c(s),
            { __tempLocation: h, __tempKey: m } = f.state;
          if (h && (!m || m === this.tempLocationKey)) {
            const p = c(h);
            return (
              (p.state.key = f.state.key),
              (p.state.__TSR_key = f.state.__TSR_key),
              delete p.state.__tempLocation,
              { ...p, maskedLocation: f }
            );
          }
          return f;
        }),
        (this.resolvePathWithBase = (s, u) =>
          RS({
            base: s,
            to: qc(u),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (s, u, c) =>
          typeof s == "string"
            ? this.matchRoutesInternal({ pathname: s, search: u }, c)
            : this.matchRoutesInternal(s, u)),
        (this.getMatchedRoutes = (s) =>
          WS({
            pathname: s,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (s) => {
          const u = this.getMatch(s);
          u &&
            (u.abortController.abort(),
            clearTimeout(u._nonReactive.pendingTimeout),
            (u._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((s) => {
            this.cancelMatch(s);
          }),
            this.stores.matchesId.get().forEach((s) => {
              if (this.stores.pendingMatchStores.has(s)) return;
              const u = this.stores.matchStores.get(s)?.get();
              u &&
                (u.status === "pending" || u.isFetching === "loader") &&
                this.cancelMatch(s);
            }));
        }),
        (this.buildLocation = (s) => {
          const u = (f = {}) => {
              const h =
                  f._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                m = this.matchRoutesLightweight(h);
              f.from;
              const p =
                  f.unsafeRelative === "path"
                    ? h.pathname
                    : (f.from ?? m.fullPath),
                y = this.resolvePathWithBase(p, "."),
                S = m.search,
                v = Object.assign(Object.create(null), m.params),
                _ = f.to
                  ? this.resolvePathWithBase(y, `${f.to}`)
                  : this.resolvePathWithBase(y, "."),
                E =
                  f.params === !1 || f.params === null
                    ? Object.create(null)
                    : (f.params ?? !0) === !0
                      ? v
                      : Object.assign(v, na(f.params, v)),
                A = this.getMatchedRoutes(_);
              let C = A.matchedRoutes;
              if (
                ((!A.foundRoute ||
                  (A.foundRoute.path !== "/" && A.routeParams["**"])) &&
                  this.options.notFoundRoute &&
                  (C = [...C, this.options.notFoundRoute]),
                Object.keys(E).length > 0)
              )
                for (const st of C) {
                  const nt =
                    st.options.params?.stringify ?? st.options.stringifyParams;
                  if (nt)
                    try {
                      Object.assign(E, nt(E));
                    } catch {}
                }
              const R = s.leaveParams
                ? _
                : zi(
                    oy({
                      path: _,
                      params: E,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let w = S;
              if (s._includeValidateSearch && this.options.search?.strict) {
                const st = {};
                (C.forEach((nt) => {
                  if (nt.options.validateSearch)
                    try {
                      Object.assign(
                        st,
                        Tr(nt.options.validateSearch, { ...st, ...w }),
                      );
                    } catch {}
                }),
                  (w = st));
              }
              ((w = t1({
                search: w,
                dest: f,
                destRoutes: C,
                _includeValidateSearch: s._includeValidateSearch,
              })),
                (w = za(S, w)));
              const q = this.options.stringifySearch(w),
                Q =
                  f.hash === !0 ? h.hash : f.hash ? na(f.hash, h.hash) : void 0,
                H = Q ? `#${Q}` : "";
              let F =
                f.state === !0 ? h.state : f.state ? na(f.state, h.state) : {};
              F = aa(h.state, F);
              const J = `${R}${q}${H}`;
              let X,
                K,
                I = !1;
              if (this.rewrite) {
                const st = new URL(J, this.origin),
                  nt = cp(this.rewrite, st);
                ((X = st.href.replace(st.origin, "")),
                  nt.origin !== this.origin
                    ? ((K = nt.href), (I = !0))
                    : (K = nt.pathname + nt.search + nt.hash));
              } else ((X = oS(J)), (K = X));
              return {
                publicHref: K,
                href: X,
                pathname: R,
                search: w,
                searchStr: q,
                state: F,
                hash: Q ?? "",
                external: I,
                unmaskOnReload: f.unmaskOnReload,
              };
            },
            c = (f = {}, h) => {
              const m = u(f);
              let p = h ? u(h) : void 0;
              if (!p) {
                const y = Object.create(null);
                if (this.options.routeMasks) {
                  const S = hS(m.pathname, this.processedTree);
                  if (S) {
                    Object.assign(y, S.rawParams);
                    const { from: v, params: _, ...E } = S.route,
                      A =
                        _ === !1 || _ === null
                          ? Object.create(null)
                          : (_ ?? !0) === !0
                            ? y
                            : Object.assign(y, na(_, y));
                    ((h = { from: s.from, ...E, params: A }), (p = u(h)));
                  }
                }
              }
              return (p && (m.maskedLocation = p), m);
            };
          return s.mask ? c(s, { from: s.from, ...s.mask }) : c(s);
        }),
        (this.commitLocation = async ({
          viewTransition: s,
          ignoreBlocker: u,
          ...c
        }) => {
          const f = () => {
              const p = [
                "key",
                "__TSR_key",
                "__TSR_index",
                "__hashScrollIntoViewOptions",
              ];
              p.forEach((S) => {
                c.state[S] = this.latestLocation.state[S];
              });
              const y = _e(c.state, this.latestLocation.state);
              return (
                p.forEach((S) => {
                  delete c.state[S];
                }),
                y
              );
            },
            h = sa(this.latestLocation.href) === sa(c.href);
          let m = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = ja(() => {
              (m?.resolve(), (m = void 0));
            })),
            h && f())
          )
            this.load();
          else {
            let { maskedLocation: p, hashScrollIntoView: y, ...S } = c;
            (p &&
              ((S = {
                ...p,
                state: {
                  ...p.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...S,
                    search: S.searchStr,
                    state: {
                      ...S.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (S.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (S.state.__tempKey = this.tempLocationKey)),
              (S.state.__hashScrollIntoViewOptions =
                y ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = s),
              this.history[c.replace ? "replace" : "push"](
                S.publicHref,
                S.state,
                { ignoreBlocker: u },
              ));
          }
          return (
            (this.resetNextScroll = c.resetScroll ?? !0),
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: s,
          resetScroll: u,
          hashScrollIntoView: c,
          viewTransition: f,
          ignoreBlocker: h,
          href: m,
          ...p
        } = {}) => {
          if (m) {
            const v = this.history.location.state.__TSR_index,
              _ = wr(m, { __TSR_index: s ? v : v + 1 }),
              E = new URL(_.pathname, this.origin);
            ((p.to = Ac(this.rewrite, E).pathname),
              (p.search = this.options.parseSearch(_.search)),
              (p.hash = _.hash.slice(1)));
          }
          const y = this.buildLocation({ ...p, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = y;
          const S = this.commitLocation({
            ...y,
            viewTransition: f,
            replace: s,
            resetScroll: u,
            hashScrollIntoView: c,
            ignoreBlocker: h,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === y &&
                (this.pendingBuiltLocation = void 0);
            }),
            S
          );
        }),
        (this.navigate = async ({
          to: s,
          reloadDocument: u,
          href: c,
          publicHref: f,
          ...h
        }) => {
          let m = !1;
          if (c)
            try {
              (new URL(`${c}`), (m = !0));
            } catch {}
          if ((m && !u && (u = !0), u)) {
            if (s !== void 0 || !c) {
              const y = this.buildLocation({ to: s, ...h });
              ((c = c ?? y.publicHref), (f = f ?? y.publicHref));
            }
            const p = !m && f ? f : c;
            if (Mr(p, this.protocolAllowlist)) return Promise.resolve();
            if (!h.ignoreBlocker) {
              const y = this.history.getBlockers?.() ?? [];
              for (const S of y)
                if (
                  S?.blockerFn &&
                  (await S.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              h.replace
                ? window.location.replace(p)
                : (window.location.href = p),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({
            ...h,
            href: c,
            to: s,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const s = this.matchRoutes(this.latestLocation),
            u = this.stores.cachedMatches
              .get()
              .filter((c) => !s.some((f) => f.id === c.id));
          this.batch(() => {
            (this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(s),
              this.stores.setCached(u));
          });
        }),
        (this.load = async (s) => {
          let u, c, f;
          const h =
            this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            f = new Promise((p) => {
              this.startTransition(async () => {
                try {
                  this.beforeLoad();
                  const y = this.latestLocation,
                    S = Cl(y, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: "onBeforeNavigate", ...S }),
                    this.emit({ type: "onBeforeLoad", ...S }),
                    await py({
                      router: this,
                      sync: s?.sync,
                      forceStaleReload: h.href === y.href,
                      matches: this.stores.pendingMatches.get(),
                      location: y,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let v = null,
                              _ = null,
                              E = null,
                              A = null;
                            this.batch(() => {
                              const C = this.stores.pendingMatches.get(),
                                R = C.length,
                                w = this.stores.matches.get();
                              v = R
                                ? w.filter(
                                    (H) =>
                                      !this.stores.pendingMatchStores.has(H.id),
                                  )
                                : null;
                              const q = new Set();
                              for (const H of this.stores.pendingMatchStores.values())
                                H.routeId && q.add(H.routeId);
                              const Q = new Set();
                              for (const H of this.stores.matchStores.values())
                                H.routeId && Q.add(H.routeId);
                              ((_ = R
                                ? w.filter((H) => !q.has(H.routeId))
                                : null),
                                (E = R
                                  ? C.filter((H) => !Q.has(H.routeId))
                                  : null),
                                (A = R ? C.filter((H) => Q.has(H.routeId)) : w),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                R &&
                                  (this.stores.setMatches(C),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...v.filter(
                                      (H) =>
                                        H.status !== "error" &&
                                        H.status !== "notFound" &&
                                        H.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [C, R] of [
                              [_, "onLeave"],
                              [E, "onEnter"],
                              [A, "onStay"],
                            ])
                              if (C)
                                for (const w of C)
                                  this.looseRoutesById[w.routeId].options[R]?.(
                                    w,
                                  );
                          });
                        });
                      },
                    }));
                } catch (y) {
                  Ee(y)
                    ? ((u = y),
                      this.navigate({
                        ...u.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : ne(y) && (c = y);
                  const S = u
                    ? u.status
                    : c
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((v) => v.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(S),
                      this.stores.redirect.set(u));
                  });
                }
                (this.latestLoadPromise === f &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  p());
              });
            }),
              this.latestLoadPromise = f,
              await f;
            this.latestLoadPromise && f !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let m;
          (this.hasNotFoundMatch()
            ? (m = 404)
            : this.stores.matches.get().some((p) => p.status === "error") &&
              (m = 500),
            m !== void 0 && this.stores.statusCode.set(m));
        }),
        (this.startViewTransition = (s) => {
          const u =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            u &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let c;
            if (typeof u == "object" && this.isViewTransitionTypesSupported) {
              const f = this.latestLocation,
                h = this.stores.resolvedLocation.get(),
                m = typeof u.types == "function" ? u.types(Cl(f, h)) : u.types;
              if (m === !1) {
                s();
                return;
              }
              c = { update: s, types: m };
            } else c = s;
            document.startViewTransition(c);
          } else s();
        }),
        (this.updateMatch = (s, u) => {
          this.startTransition(() => {
            const c = this.stores.pendingMatchStores.get(s);
            if (c) {
              c.set(u);
              return;
            }
            const f = this.stores.matchStores.get(s);
            if (f) {
              f.set(u);
              return;
            }
            const h = this.stores.cachedMatchStores.get(s);
            if (h) {
              const m = u(h.get());
              m.status === "redirected"
                ? this.stores.cachedMatchStores.delete(s) &&
                  this.stores.cachedIds.set((p) => p.filter((y) => y !== s))
                : h.set(m);
            }
          });
        }),
        (this.getMatch = (s) =>
          this.stores.cachedMatchStores.get(s)?.get() ??
          this.stores.pendingMatchStores.get(s)?.get() ??
          this.stores.matchStores.get(s)?.get()),
        (this.invalidate = (s) => {
          const u = (c) =>
            (s?.filter?.(c) ?? !0)
              ? {
                  ...c,
                  invalid: !0,
                  ...(s?.forcePending ||
                  c.status === "error" ||
                  c.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : c;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(u)),
                this.stores.setCached(this.stores.cachedMatches.get().map(u)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(u),
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: s?.sync })
          );
        }),
        (this.getParsedLocationHref = (s) => s.publicHref || "/"),
        (this.resolveRedirect = (s) => {
          const u = s.headers.get("Location");
          if (!s.options.href || s.options._builtLocation) {
            const c = s.options._builtLocation ?? this.buildLocation(s.options),
              f = this.getParsedLocationHref(c);
            ((s.options.href = f), s.headers.set("Location", f));
          } else if (u)
            try {
              const c = new URL(u);
              if (this.origin && c.origin === this.origin) {
                const f = c.pathname + c.search + c.hash;
                ((s.options.href = f), s.headers.set("Location", f));
              }
            } catch {}
          if (
            s.options.href &&
            !s.options._builtLocation &&
            Mr(s.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (
            s.headers.get("Location") ||
              s.headers.set("Location", s.options.href),
            s
          );
        }),
        (this.clearCache = (s) => {
          const u = s?.filter;
          u !== void 0
            ? this.stores.setCached(
                this.stores.cachedMatches.get().filter((c) => !u(c)),
              )
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const s = Date.now(),
            u = (c) => {
              const f = this.looseRoutesById[c.routeId];
              if (!f.options.loader) return !0;
              const h =
                (c.preload
                  ? (f.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (f.options.gcTime ?? this.options.defaultGcTime)) ??
                300 * 1e3;
              return c.status === "error" ? !0 : s - c.updatedAt >= h;
            };
          this.clearCache({ filter: u });
        }),
        (this.loadRouteChunk = Gi),
        (this.preloadRoute = async (s) => {
          const u = s._builtLocation ?? this.buildLocation(s);
          let c = this.matchRoutes(u, {
            throwOnError: !0,
            preload: !0,
            dest: s,
          });
          const f = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            h = new Set([...f, ...this.stores.cachedIds.get()]),
            m = c.filter((p) => !h.has(p.id));
          if (m.length) {
            const p = this.stores.cachedMatches.get();
            this.stores.setCached([...p, ...m]);
          }
          try {
            return (
              (c = await py({
                router: this,
                matches: c,
                location: u,
                preload: !0,
                updateMatch: (p, y) => {
                  f.has(p)
                    ? (c = c.map((S) => (S.id === p ? y(S) : S)))
                    : this.updateMatch(p, y);
                },
              })),
              c
            );
          } catch (p) {
            if (Ee(p))
              return p.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...p.options, _fromLocation: u });
            ne(p) || console.error(p);
            return;
          }
        }),
        (this.matchRoute = (s, u) => {
          const c = {
              ...s,
              to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
              params: s.params || {},
              leaveParams: !0,
            },
            f = this.buildLocation(c);
          if (u?.pending && this.stores.status.get() !== "pending") return !1;
          const h = (
              u?.pending === void 0 ? !this.stores.isLoading.get() : u.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            m = mS(
              f.pathname,
              u?.caseSensitive ?? !1,
              u?.fuzzy ?? !1,
              h.pathname,
              this.processedTree,
            );
          return !m || (s.params && !_e(m.rawParams, s.params, { partial: !0 }))
            ? !1
            : (u?.includeSearch ?? !0)
              ? _e(h.search, f.search, { partial: !0 })
                ? m.rawParams
                : !1
              : m.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((s) => s.status === "notFound" || s.globalNotFound)),
        (this.getStoreConfig = i),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...n,
          caseSensitive: n.caseSensitive ?? !1,
          notFoundMode: n.notFoundMode ?? "fuzzy",
          stringifySearch: n.stringifySearch ?? LS,
          parseSearch: n.parseSearch ?? DS,
          protocolAllowlist: n.protocolAllowlist ?? iS,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: n, routesByPath: i, processedTree: s }) {
      ((this.routesById = n),
        (this.routesByPath = i),
        (this.processedTree = s));
      const u = this.options.notFoundRoute;
      u &&
        (u.init({ originalIndex: 99999999999 }), (this.routesById[u.id] = u));
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(n) {
      return n?.id
        ? (n.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(n, i) {
      const s = this.getMatchedRoutes(n.pathname),
        { foundRoute: u, routeParams: c, parsedParams: f } = s;
      let { matchedRoutes: h } = s,
        m = !1;
      (u ? u.path !== "/" && c["**"] : sa(n.pathname)) &&
        (this.options.notFoundRoute
          ? (h = [...h, this.options.notFoundRoute])
          : (m = !0));
      const p = m ? n1(this.options.notFoundMode, h) : void 0,
        y = new Array(h.length),
        S = new Map();
      for (const v of this.stores.matchStores.values())
        v.routeId && S.set(v.routeId, v.get());
      for (let v = 0; v < h.length; v++) {
        const _ = h[v],
          E = y[v - 1];
        let A, C, R;
        {
          const xt = E?.search ?? n.search,
            Gt = E?._strictSearch ?? void 0;
          try {
            const Nt = Tr(_.options.validateSearch, { ...xt }) ?? void 0;
            ((A = { ...xt, ...Nt }), (C = { ...Gt, ...Nt }), (R = void 0));
          } catch (Nt) {
            let j = Nt;
            if (
              (Nt instanceof Cr || (j = new Cr(Nt.message, { cause: Nt })),
              i?.throwOnError)
            )
              throw j;
            ((A = xt), (C = {}), (R = j));
          }
        }
        const w = _.options.loaderDeps?.({ search: A }) ?? "",
          q = w ? JSON.stringify(w) : "",
          { interpolatedPath: Q, usedParams: H } = oy({
            path: _.fullPath,
            params: c,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          F = _.id + Q + q,
          J = this.getMatch(F),
          X = S.get(_.id),
          K = J?._strictParams ?? H;
        let I;
        if (!J)
          try {
            _y(_, H, f, K);
          } catch (xt) {
            if (
              (ne(xt) || Ee(xt)
                ? (I = xt)
                : (I = new IS(xt.message, { cause: xt })),
              i?.throwOnError)
            )
              throw I;
          }
        Object.assign(c, K);
        const st = X ? "stay" : "enter";
        let nt;
        if (J)
          nt = {
            ...J,
            cause: st,
            params: X?.params ?? c,
            _strictParams: K,
            search: za(X ? X.search : J.search, A),
            _strictSearch: C,
          };
        else {
          const xt =
            _.options.loader || _.options.beforeLoad || _.lazyFn || mp(_)
              ? "pending"
              : "success";
          nt = {
            id: F,
            ssr: _.options.ssr,
            index: v,
            routeId: _.id,
            params: X?.params ?? c,
            _strictParams: K,
            pathname: Q,
            updatedAt: Date.now(),
            search: X ? za(X.search, A) : A,
            _strictSearch: C,
            searchError: void 0,
            status: xt,
            isFetching: !1,
            error: void 0,
            paramsError: I,
            __routeContext: void 0,
            _nonReactive: { loadPromise: ja() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: st,
            loaderDeps: X ? aa(X.loaderDeps, w) : w,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: _.options.staticData || {},
            fullPath: _.fullPath,
          };
        }
        (i?.preload || (nt.globalNotFound = p === _.id), (nt.searchError = R));
        const mt = this.getParentContext(E);
        ((nt.context = {
          ...mt,
          ...nt.__routeContext,
          ...nt.__beforeLoadContext,
        }),
          (y[v] = nt));
      }
      for (let v = 0; v < y.length; v++) {
        const _ = y[v],
          E = this.looseRoutesById[_.routeId],
          A = this.getMatch(_.id),
          C = S.get(_.routeId);
        if (((_.params = C ? za(C.params, c) : c), !A)) {
          const R = y[v - 1],
            w = this.getParentContext(R);
          if (E.options.context) {
            const q = {
              deps: _.loaderDeps,
              params: _.params,
              context: w ?? {},
              location: n,
              navigate: (Q) => this.navigate({ ...Q, _fromLocation: n }),
              buildLocation: this.buildLocation,
              cause: _.cause,
              abortController: _.abortController,
              preload: !!_.preload,
              matches: y,
              routeId: E.id,
            };
            _.__routeContext = E.options.context(q) ?? void 0;
          }
          _.context = { ...w, ..._.__routeContext, ..._.__beforeLoadContext };
        }
      }
      return y;
    }
    matchRoutesLightweight(n) {
      const {
          matchedRoutes: i,
          routeParams: s,
          parsedParams: u,
        } = this.getMatchedRoutes(n.pathname),
        c = qi(i),
        f = { ...n.search };
      for (const S of i)
        try {
          Object.assign(f, Tr(S.options.validateSearch, f));
        } catch {}
      const h = qi(this.stores.matchesId.get()),
        m = h && this.stores.matchStores.get(h)?.get(),
        p = m && m.routeId === c.id && m.pathname === n.pathname;
      let y;
      if (p) y = m.params;
      else {
        const S = Object.assign(Object.create(null), s);
        for (const v of i)
          try {
            _y(v, s, u ?? {}, S);
          } catch {}
        y = S;
      }
      return { matchedRoutes: i, fullPath: c.fullPath, search: f, params: y };
    }
  },
  Cr = class extends Error {},
  IS = class extends Error {};
function $S(n) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: n,
    matches: [],
    statusCode: 200,
  };
}
function Tr(n, i) {
  if (n == null) return {};
  if ("~standard" in n) {
    const s = n["~standard"].validate(i);
    if (s instanceof Promise) throw new Cr("Async validation not supported");
    if (s.issues)
      throw new Cr(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in n ? n.parse(i) : typeof n == "function" ? n(i) : {};
}
function WS({ pathname: n, routesById: i, processedTree: s }) {
  const u = Object.create(null),
    c = sa(n);
  let f, h;
  const m = yS(c, s, !0);
  return (
    m &&
      ((f = m.route),
      Object.assign(u, m.rawParams),
      (h = Object.assign(Object.create(null), m.parsedParams))),
    {
      matchedRoutes: m?.branch || [i.__root__],
      routeParams: u,
      foundRoute: f,
      parsedParams: h,
    }
  );
}
function t1({ search: n, dest: i, destRoutes: s, _includeValidateSearch: u }) {
  return e1(s)(n, i, u ?? !1);
}
function e1(n) {
  const i = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const c of n) {
    if ("search" in c.options)
      c.options.search?.middlewares &&
        i.middlewares.push(...c.options.search.middlewares);
    else if (c.options.preSearchFilters || c.options.postSearchFilters) {
      const f = ({ search: h, next: m }) => {
        let p = h;
        "preSearchFilters" in c.options &&
          c.options.preSearchFilters &&
          (p = c.options.preSearchFilters.reduce((S, v) => v(S), h));
        const y = m(p);
        return "postSearchFilters" in c.options && c.options.postSearchFilters
          ? c.options.postSearchFilters.reduce((S, v) => v(S), y)
          : y;
      };
      i.middlewares.push(f);
    }
    if (c.options.validateSearch) {
      const f = ({ search: h, next: m }) => {
        const p = m(h);
        if (!i._includeValidateSearch) return p;
        try {
          return { ...p, ...(Tr(c.options.validateSearch, p) ?? void 0) };
        } catch {
          return p;
        }
      };
      i.middlewares.push(f);
    }
  }
  const s = ({ search: c }) => {
    const f = i.dest;
    return f.search ? (f.search === !0 ? c : na(f.search, c)) : {};
  };
  i.middlewares.push(s);
  const u = (c, f, h) => {
    if (c >= h.length) return f;
    const m = h[c];
    return m({ search: f, next: (y) => u(c + 1, y, h) });
  };
  return function (f, h, m) {
    return (
      (i.dest = h),
      (i._includeValidateSearch = m),
      u(0, f, i.middlewares)
    );
  };
}
function n1(n, i) {
  if (n !== "root")
    for (let s = i.length - 1; s >= 0; s--) {
      const u = i[s];
      if (u.children) return u.id;
    }
  return Ua;
}
function _y(n, i, s, u) {
  const c = n.options.params?.parse ?? n.options.parseParams;
  if (c)
    if (n.options.skipRouteOnParseError)
      for (const f in i) f in s && (u[f] = s[f]);
    else {
      const f = c(u);
      Object.assign(u, f);
    }
}
var en = Symbol.for("TSR_DEFERRED_PROMISE");
function a1(n, i) {
  const s = n;
  return (
    s[en] ||
      ((s[en] = { status: "pending" }),
      s
        .then((u) => {
          ((s[en].status = "success"), (s[en].data = u));
        })
        .catch((u) => {
          ((s[en].status = "error"),
            (s[en].error = { data: JS(u), __isServerError: !0 }));
        })),
    s
  );
}
var l1 = "Error preloading route! ☝️";
function Ey(n, i) {
  if (n) return typeof n == "string" ? n : n[i];
}
function i1(n) {
  return typeof n == "string" ? { href: n, crossOrigin: void 0 } : n;
}
function s1(n) {
  if (n.tag !== "link") return;
  const i = n.attrs?.rel,
    s = n.attrs?.href;
  if (
    typeof s == "string" &&
    (typeof i == "string" ? i.split(/\s+/) : []).includes("stylesheet")
  )
    return s;
}
function r1(n, i) {
  const s = s1(i);
  return !!s && n?.inlineCss?.styles[s] !== void 0;
}
var yp = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(n) {
      if (
        ((this.init = (i) => {
          this.originalIndex = i.originalIndex;
          const s = this.options,
            u = !s?.path && !s?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            u ? (this._path = Ua) : this.parentRoute || Re());
          let c = u ? Ua : s?.path;
          c && c !== "/" && (c = sp(c));
          const f = s?.id || c;
          let h = u
            ? Ua
            : Er([
                this.parentRoute.id === "__root__" ? "" : this.parentRoute.id,
                f,
              ]);
          (c === "__root__" && (c = "/"),
            h !== "__root__" && (h = Er(["/", h])));
          const m = h === "__root__" ? "/" : Er([this.parentRoute.fullPath, c]);
          ((this._path = c),
            (this._id = h),
            (this._fullPath = m),
            (this._to = sa(m)));
        }),
        (this.addChildren = (i) => this._addFileChildren(i)),
        (this._addFileChildren = (i) => (
          Array.isArray(i) && (this.children = i),
          typeof i == "object" &&
            i !== null &&
            (this.children = Object.values(i)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (i) => (Object.assign(this.options, i), this)),
        (this.update = (i) => (Object.assign(this.options, i), this)),
        (this.lazy = (i) => ((this.lazyFn = i), this)),
        (this.redirect = (i) => op({ from: this.fullPath, ...i })),
        (this.options = n || {}),
        (this.isRoot = !n?.getParentRoute),
        n?.id && n?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  u1 = class extends yp {
    constructor(n) {
      super(n);
    }
  };
function o1(n) {
  if (typeof document < "u" && document.querySelector) {
    const i = n.stores.location.get(),
      s = i.state.__hashScrollIntoViewOptions ?? !0;
    if (s && i.hash !== "") {
      const u = document.getElementById(i.hash);
      u && u.scrollIntoView(s);
    }
  }
}
var c1 = ((n) => (
    (n[(n.AggregateError = 1)] = "AggregateError"),
    (n[(n.ArrowFunction = 2)] = "ArrowFunction"),
    (n[(n.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (n[(n.ObjectAssign = 8)] = "ObjectAssign"),
    (n[(n.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (n[(n.RegExp = 32)] = "RegExp"),
    n
  ))(c1 || {}),
  xn = Symbol.asyncIterator,
  pp = Symbol.hasInstance,
  zl = Symbol.isConcatSpreadable,
  An = Symbol.iterator,
  vp = Symbol.match,
  gp = Symbol.matchAll,
  Sp = Symbol.replace,
  bp = Symbol.search,
  _p = Symbol.species,
  Ep = Symbol.split,
  Rp = Symbol.toPrimitive,
  Dl = Symbol.toStringTag,
  Tp = Symbol.unscopables,
  xp = {
    [xn]: 0,
    [pp]: 1,
    [zl]: 2,
    [An]: 3,
    [vp]: 4,
    [gp]: 5,
    [Sp]: 6,
    [bp]: 7,
    [_p]: 8,
    [Ep]: 9,
    [Rp]: 10,
    [Dl]: 11,
    [Tp]: 12,
  },
  f1 = {
    0: xn,
    1: pp,
    2: zl,
    3: An,
    4: vp,
    5: gp,
    6: Sp,
    7: bp,
    8: _p,
    9: Ep,
    10: Rp,
    11: Dl,
    12: Tp,
  },
  b = void 0,
  d1 = {
    2: !0,
    3: !1,
    1: b,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  h1 = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  m1 = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function _t(n, i, s, u, c, f, h, m, p, y, S, v) {
  return { t: n, i, s, c: u, m: c, p: f, e: h, a: m, f: p, b: y, o: S, l: v };
}
function ua(n) {
  return _t(2, b, n, b, b, b, b, b, b, b, b, b);
}
var Ap = ua(2),
  Mp = ua(3),
  y1 = ua(1),
  p1 = ua(0),
  v1 = ua(4),
  g1 = ua(5),
  S1 = ua(6),
  b1 = ua(7);
function _1(n) {
  switch (n) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return b;
  }
}
function oa(n) {
  let i = "",
    s = 0,
    u;
  for (let c = 0, f = n.length; c < f; c++)
    ((u = _1(n[c])), u && ((i += n.slice(s, c) + u), (s = c + 1)));
  return (s === 0 ? (i = n) : (i += n.slice(s)), i);
}
function E1(n) {
  switch (n) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return n;
  }
}
function ca(n) {
  return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, E1);
}
var Sr = "__SEROVAL_REFS__",
  Op = new Map(),
  Ol = new Map();
function wp(n) {
  return Op.has(n);
}
function R1(n) {
  return Ol.has(n);
}
function T1(n) {
  if (wp(n)) return Op.get(n);
  throw new eb(n);
}
function x1(n) {
  if (R1(n)) return Ol.get(n);
  throw new nb(n);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, Sr, {
      value: Ol,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, Sr, {
        value: Ol,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, Sr, {
          value: Ol,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, Sr, {
          value: Ol,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Qc(n) {
  return n instanceof EvalError
    ? 1
    : n instanceof RangeError
      ? 2
      : n instanceof ReferenceError
        ? 3
        : n instanceof SyntaxError
          ? 4
          : n instanceof TypeError
            ? 5
            : n instanceof URIError
              ? 6
              : 0;
}
function A1(n) {
  let i = h1[Qc(n)];
  return n.name !== i
    ? { name: n.name }
    : n.constructor.name !== i
      ? { name: n.constructor.name }
      : {};
}
function Cp(n, i) {
  let s = A1(n),
    u = Object.getOwnPropertyNames(n);
  for (let c = 0, f = u.length, h; c < f; c++)
    ((h = u[c]),
      h !== "name" &&
        h !== "message" &&
        (h === "stack"
          ? i & 4 && ((s = s || {}), (s[h] = n[h]))
          : ((s = s || {}), (s[h] = n[h]))));
  return s;
}
function zp(n) {
  return Object.isFrozen(n)
    ? 3
    : Object.isSealed(n)
      ? 2
      : Object.isExtensible(n)
        ? 0
        : 1;
}
function M1(n) {
  switch (n) {
    case Number.POSITIVE_INFINITY:
      return g1;
    case Number.NEGATIVE_INFINITY:
      return S1;
  }
  return n !== n
    ? b1
    : Object.is(n, -0)
      ? v1
      : _t(0, b, n, b, b, b, b, b, b, b, b, b);
}
function Dp(n) {
  return _t(1, b, oa(n), b, b, b, b, b, b, b, b, b);
}
function O1(n) {
  return _t(3, b, "" + n, b, b, b, b, b, b, b, b, b);
}
function w1(n) {
  return _t(4, n, b, b, b, b, b, b, b, b, b, b);
}
function C1(n, i) {
  let s = i.valueOf();
  return _t(5, n, s !== s ? "" : i.toISOString(), b, b, b, b, b, b, b, b, b);
}
function z1(n, i) {
  return _t(6, n, b, oa(i.source), i.flags, b, b, b, b, b, b, b);
}
function D1(n, i) {
  return _t(17, n, xp[i], b, b, b, b, b, b, b, b, b);
}
function L1(n, i) {
  return _t(18, n, oa(T1(i)), b, b, b, b, b, b, b, b, b);
}
function U1(n, i, s) {
  return _t(25, n, s, oa(i), b, b, b, b, b, b, b, b);
}
function N1(n, i, s) {
  return _t(9, n, b, b, b, b, b, s, b, b, zp(i), b);
}
function j1(n, i) {
  return _t(21, n, b, b, b, b, b, b, i, b, b, b);
}
function B1(n, i, s) {
  return _t(
    15,
    n,
    b,
    i.constructor.name,
    b,
    b,
    b,
    b,
    s,
    i.byteOffset,
    b,
    i.length,
  );
}
function H1(n, i, s) {
  return _t(
    16,
    n,
    b,
    i.constructor.name,
    b,
    b,
    b,
    b,
    s,
    i.byteOffset,
    b,
    i.byteLength,
  );
}
function q1(n, i, s) {
  return _t(20, n, b, b, b, b, b, b, s, i.byteOffset, b, i.byteLength);
}
function Y1(n, i, s) {
  return _t(13, n, Qc(i), b, oa(i.message), s, b, b, b, b, b, b);
}
function Q1(n, i, s) {
  return _t(14, n, Qc(i), b, oa(i.message), s, b, b, b, b, b, b);
}
function G1(n, i) {
  return _t(7, n, b, b, b, b, b, i, b, b, b, b);
}
function V1(n, i) {
  return _t(28, b, b, b, b, b, b, [n, i], b, b, b, b);
}
function X1(n, i) {
  return _t(30, b, b, b, b, b, b, [n, i], b, b, b, b);
}
function K1(n, i, s) {
  return _t(31, n, b, b, b, b, b, s, i, b, b, b);
}
function Z1(n, i) {
  return _t(32, n, b, b, b, b, b, b, i, b, b, b);
}
function k1(n, i) {
  return _t(33, n, b, b, b, b, b, b, i, b, b, b);
}
function P1(n, i) {
  return _t(34, n, b, b, b, b, b, b, i, b, b, b);
}
function J1(n, i, s, u) {
  return _t(35, n, s, b, b, b, b, i, b, b, b, u);
}
var F1 = { parsing: 1, serialization: 2, deserialization: 3 };
function I1(n) {
  return `Seroval Error (step: ${F1[n]})`;
}
var $1 = (n, i) => I1(n),
  Lp = class extends Error {
    constructor(n, i) {
      (super($1(n)), (this.cause = i));
    }
  },
  Ry = class extends Lp {
    constructor(n) {
      super("parsing", n);
    }
  },
  W1 = class extends Lp {
    constructor(n) {
      super("deserialization", n);
    }
  };
function Mn(n) {
  return `Seroval Error (specific: ${n})`;
}
var Br = class extends Error {
    constructor(i) {
      (super(Mn(1)), (this.value = i));
    }
  },
  Up = class extends Error {
    constructor(i) {
      super(Mn(2));
    }
  },
  tb = class extends Error {
    constructor(n) {
      super(Mn(3));
    }
  },
  ki = class extends Error {
    constructor(n) {
      super(Mn(4));
    }
  },
  eb = class extends Error {
    constructor(n) {
      (super(Mn(5)), (this.value = n));
    }
  },
  nb = class extends Error {
    constructor(n) {
      super(Mn(6));
    }
  },
  ab = class extends Error {
    constructor(n) {
      super(Mn(7));
    }
  },
  fa = class extends Error {
    constructor(n) {
      super(Mn(8));
    }
  },
  lb = class extends Error {
    constructor(i) {
      super(Mn(9));
    }
  },
  ib = class {
    constructor(n, i) {
      ((this.value = n), (this.replacement = i));
    }
  },
  Hr = () => {
    let n = { p: 0, s: 0, f: 0 };
    return (
      (n.p = new Promise((i, s) => {
        ((n.s = i), (n.f = s));
      })),
      n
    );
  },
  sb = (n, i) => {
    (n.s(i), (n.p.s = 1), (n.p.v = i));
  },
  rb = (n, i) => {
    (n.f(i), (n.p.s = 2), (n.p.v = i));
  };
Hr.toString();
sb.toString();
rb.toString();
var ub = () => {
    let n = [],
      i = [],
      s = !0,
      u = !1,
      c = 0,
      f = (p, y, S) => {
        for (S = 0; S < c; S++) i[S] && i[S][y](p);
      },
      h = (p, y, S, v) => {
        for (y = 0, S = n.length; y < S; y++)
          ((v = n[y]),
            !s && y === S - 1 ? p[u ? "return" : "throw"](v) : p.next(v));
      },
      m = (p, y) => (
        s && ((y = c++), (i[y] = p)),
        h(p),
        () => {
          s && ((i[y] = i[c]), (i[c--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (p) => m(p),
      next: (p) => {
        s && (n.push(p), f(p, "next"));
      },
      throw: (p) => {
        s && (n.push(p), f(p, "throw"), (s = !1), (u = !1), (i.length = 0));
      },
      return: (p) => {
        s && (n.push(p), f(p, "return"), (s = !1), (u = !0), (i.length = 0));
      },
    };
  },
  ob = (n) => (i) => () => {
    let s = 0,
      u = {
        [n]: () => u,
        next: () => {
          if (s > i.d) return { done: !0, value: void 0 };
          let c = s++,
            f = i.v[c];
          if (c === i.t) throw f;
          return { done: c === i.d, value: f };
        },
      };
    return u;
  },
  cb = (n, i) => (s) => () => {
    let u = 0,
      c = -1,
      f = !1,
      h = [],
      m = [],
      p = (S = 0, v = m.length) => {
        for (; S < v; S++) m[S].s({ done: !0, value: void 0 });
      };
    s.on({
      next: (S) => {
        let v = m.shift();
        (v && v.s({ done: !1, value: S }), h.push(S));
      },
      throw: (S) => {
        let v = m.shift();
        (v && v.f(S), p(), (c = h.length), (f = !0), h.push(S));
      },
      return: (S) => {
        let v = m.shift();
        (v && v.s({ done: !0, value: S }), p(), (c = h.length), h.push(S));
      },
    });
    let y = {
      [n]: () => y,
      next: () => {
        if (c === -1) {
          let _ = u++;
          if (_ >= h.length) {
            let E = i();
            return (m.push(E), E.p);
          }
          return { done: !1, value: h[_] };
        }
        if (u > c) return { done: !0, value: void 0 };
        let S = u++,
          v = h[S];
        if (S !== c) return { done: !1, value: v };
        if (f) throw v;
        return { done: !0, value: v };
      },
    };
    return y;
  },
  Np = (n) => {
    let i = atob(n),
      s = i.length,
      u = new Uint8Array(s);
    for (let c = 0; c < s; c++) u[c] = i.charCodeAt(c);
    return u.buffer;
  };
Np.toString();
function fb(n) {
  return "__SEROVAL_SEQUENCE__" in n;
}
function jp(n, i, s) {
  return { __SEROVAL_SEQUENCE__: !0, v: n, t: i, d: s };
}
function db(n) {
  let i = [],
    s = -1,
    u = -1,
    c = n[An]();
  for (;;)
    try {
      let f = c.next();
      if ((i.push(f.value), f.done)) {
        u = i.length - 1;
        break;
      }
    } catch (f) {
      ((s = i.length), i.push(f));
    }
  return jp(i, s, u);
}
var hb = ob(An);
function mb(n) {
  return hb(n);
}
var yb = {},
  pb = {},
  vb = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function qr(n) {
  return "__SEROVAL_STREAM__" in n;
}
function Ba() {
  return ub();
}
function gb(n) {
  let i = Ba(),
    s = n[xn]();
  async function u() {
    try {
      let c = await s.next();
      c.done ? i.return(c.value) : (i.next(c.value), await u());
    } catch (c) {
      i.throw(c);
    }
  }
  return (u().catch(() => {}), i);
}
var Sb = cb(xn, Hr);
function bb(n) {
  return Sb(n);
}
async function _b(n) {
  try {
    return [1, await n];
  } catch (i) {
    return [0, i];
  }
}
function Eb(n, i) {
  return {
    plugins: i.plugins,
    mode: n,
    marked: new Set(),
    features: 63 ^ (i.disabledFeatures || 0),
    refs: i.refs || new Map(),
    depthLimit: i.depthLimit || 1e3,
  };
}
function xr(n, i) {
  n.marked.add(i);
}
function Rb(n, i) {
  let s = n.refs.size;
  return (n.refs.set(i, s), s);
}
function Yr(n, i) {
  let s = n.refs.get(i);
  return s != null
    ? (xr(n, s), { type: 1, value: w1(s) })
    : { type: 0, value: Rb(n, i) };
}
function Gc(n, i) {
  let s = Yr(n, i);
  return s.type === 1 ? s : wp(i) ? { type: 2, value: L1(s.value, i) } : s;
}
function La(n, i) {
  let s = Gc(n, i);
  if (s.type !== 0) return s.value;
  if (i in xp) return D1(s.value, i);
  throw new Br(i);
}
function Qr(n, i) {
  let s = Yr(n, vb[i]);
  return s.type === 1 ? s.value : _t(26, s.value, i, b, b, b, b, b, b, b, b, b);
}
function Tb(n) {
  let i = Yr(n, yb);
  return i.type === 1
    ? i.value
    : _t(27, i.value, b, b, b, b, b, b, La(n, An), b, b, b);
}
function xb(n) {
  let i = Yr(n, pb);
  return i.type === 1
    ? i.value
    : _t(29, i.value, b, b, b, b, b, [Qr(n, 1), La(n, xn)], b, b, b, b);
}
function Ab(n, i, s, u) {
  return _t(s ? 11 : 10, n, b, b, b, u, b, b, b, b, zp(i), b);
}
function Mb(n, i, s, u) {
  return _t(8, i, b, b, b, b, { k: s, v: u }, b, Qr(n, 0), b, b, b);
}
function Ob(n, i, s) {
  let u = new Uint8Array(s),
    c = "";
  for (let f = 0, h = u.length; f < h; f++) c += String.fromCharCode(u[f]);
  return _t(19, i, oa(btoa(c)), b, b, b, b, b, Qr(n, 5), b, b, b);
}
function wb(n, i) {
  return { base: Eb(n, i), child: void 0 };
}
var Cb = class {
  constructor(n, i) {
    ((this._p = n), (this.depth = i));
  }
  parse(n) {
    return $t(this._p, this.depth, n);
  }
};
async function zb(n, i, s) {
  let u = [];
  for (let c = 0, f = s.length; c < f; c++)
    c in s ? (u[c] = await $t(n, i, s[c])) : (u[c] = 0);
  return u;
}
async function Db(n, i, s, u) {
  return N1(s, u, await zb(n, i, u));
}
async function Vc(n, i, s) {
  let u = Object.entries(s),
    c = [],
    f = [];
  for (let h = 0, m = u.length; h < m; h++)
    (c.push(oa(u[h][0])), f.push(await $t(n, i, u[h][1])));
  return (
    An in s &&
      (c.push(La(n.base, An)), f.push(V1(Tb(n.base), await $t(n, i, db(s))))),
    xn in s &&
      (c.push(La(n.base, xn)), f.push(X1(xb(n.base), await $t(n, i, gb(s))))),
    Dl in s && (c.push(La(n.base, Dl)), f.push(Dp(s[Dl]))),
    zl in s && (c.push(La(n.base, zl)), f.push(s[zl] ? Ap : Mp)),
    { k: c, v: f }
  );
}
async function vc(n, i, s, u, c) {
  return Ab(s, u, c, await Vc(n, i, u));
}
async function Lb(n, i, s, u) {
  return j1(s, await $t(n, i, u.valueOf()));
}
async function Ub(n, i, s, u) {
  return B1(s, u, await $t(n, i, u.buffer));
}
async function Nb(n, i, s, u) {
  return H1(s, u, await $t(n, i, u.buffer));
}
async function jb(n, i, s, u) {
  return q1(s, u, await $t(n, i, u.buffer));
}
async function Ty(n, i, s, u) {
  let c = Cp(u, n.base.features);
  return Y1(s, u, c ? await Vc(n, i, c) : b);
}
async function Bb(n, i, s, u) {
  let c = Cp(u, n.base.features);
  return Q1(s, u, c ? await Vc(n, i, c) : b);
}
async function Hb(n, i, s, u) {
  let c = [],
    f = [];
  for (let [h, m] of u.entries())
    (c.push(await $t(n, i, h)), f.push(await $t(n, i, m)));
  return Mb(n.base, s, c, f);
}
async function qb(n, i, s, u) {
  let c = [];
  for (let f of u.keys()) c.push(await $t(n, i, f));
  return G1(s, c);
}
async function Bp(n, i, s, u) {
  let c = n.base.plugins;
  if (c)
    for (let f = 0, h = c.length; f < h; f++) {
      let m = c[f];
      if (m.parse.async && m.test(u))
        return U1(s, m.tag, await m.parse.async(u, new Cb(n, i), { id: s }));
    }
  return b;
}
async function Yb(n, i, s, u) {
  let [c, f] = await _b(u);
  return _t(12, s, c, b, b, b, b, b, await $t(n, i, f), b, b, b);
}
function Qb(n, i, s, u, c) {
  let f = [],
    h = s.on({
      next: (m) => {
        (xr(this.base, i),
          $t(this, n, m).then(
            (p) => {
              f.push(Z1(i, p));
            },
            (p) => {
              (c(p), h());
            },
          ));
      },
      throw: (m) => {
        (xr(this.base, i),
          $t(this, n, m).then(
            (p) => {
              (f.push(k1(i, p)), u(f), h());
            },
            (p) => {
              (c(p), h());
            },
          ));
      },
      return: (m) => {
        (xr(this.base, i),
          $t(this, n, m).then(
            (p) => {
              (f.push(P1(i, p)), u(f), h());
            },
            (p) => {
              (c(p), h());
            },
          ));
      },
    });
}
async function Gb(n, i, s, u) {
  return K1(s, Qr(n.base, 4), await new Promise(Qb.bind(n, i, s, u)));
}
async function Vb(n, i, s, u) {
  let c = [];
  for (let f = 0, h = u.v.length; f < h; f++) c[f] = await $t(n, i, u.v[f]);
  return J1(s, c, u.t, u.d);
}
async function Xb(n, i, s, u) {
  if (Array.isArray(u)) return Db(n, i, s, u);
  if (qr(u)) return Gb(n, i, s, u);
  if (fb(u)) return Vb(n, i, s, u);
  let c = u.constructor;
  if (c === ib) return $t(n, i, u.replacement);
  let f = await Bp(n, i, s, u);
  if (f) return f;
  switch (c) {
    case Object:
      return vc(n, i, s, u, !1);
    case b:
      return vc(n, i, s, u, !0);
    case Date:
      return C1(s, u);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Ty(n, i, s, u);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Lb(n, i, s, u);
    case ArrayBuffer:
      return Ob(n.base, s, u);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ub(n, i, s, u);
    case DataView:
      return jb(n, i, s, u);
    case Map:
      return Hb(n, i, s, u);
    case Set:
      return qb(n, i, s, u);
  }
  if (c === Promise || u instanceof Promise) return Yb(n, i, s, u);
  let h = n.base.features;
  if (h & 32 && c === RegExp) return z1(s, u);
  if (h & 16)
    switch (c) {
      case BigInt64Array:
      case BigUint64Array:
        return Nb(n, i, s, u);
    }
  if (
    h & 1 &&
    typeof AggregateError < "u" &&
    (c === AggregateError || u instanceof AggregateError)
  )
    return Bb(n, i, s, u);
  if (u instanceof Error) return Ty(n, i, s, u);
  if (An in u || xn in u) return vc(n, i, s, u, !!c);
  throw new Br(u);
}
async function Kb(n, i, s) {
  let u = Gc(n.base, s);
  if (u.type !== 0) return u.value;
  let c = await Bp(n, i, u.value, s);
  if (c) return c;
  throw new Br(s);
}
async function $t(n, i, s) {
  switch (typeof s) {
    case "boolean":
      return s ? Ap : Mp;
    case "undefined":
      return y1;
    case "string":
      return Dp(s);
    case "number":
      return M1(s);
    case "bigint":
      return O1(s);
    case "object": {
      if (s) {
        let u = Gc(n.base, s);
        return u.type === 0 ? await Xb(n, i + 1, u.value, s) : u.value;
      }
      return p1;
    }
    case "symbol":
      return La(n.base, s);
    case "function":
      return Kb(n, i, s);
    default:
      throw new Br(s);
  }
}
async function Zb(n, i) {
  try {
    return await $t(n, 0, i);
  } catch (s) {
    throw s instanceof Ry ? s : new Ry(s);
  }
}
var kb = ((n) => (
  (n[(n.Vanilla = 1)] = "Vanilla"),
  (n[(n.Cross = 2)] = "Cross"),
  n
))(kb || {});
function Hp(n, i) {
  for (let s = 0, u = i.length; s < u; s++) {
    let c = i[s];
    n.has(c) || (n.add(c), c.extends && Hp(n, c.extends));
  }
}
function qp(n) {
  if (n) {
    let i = new Set();
    return (Hp(i, n), [...i]);
  }
}
function Pb(n) {
  switch (n) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new ab(n);
  }
}
var Jb = 1e6,
  Fb = 1e4,
  Ib = 2e4;
function Yp(n, i) {
  switch (i) {
    case 3:
      return Object.freeze(n);
    case 1:
      return Object.preventExtensions(n);
    case 2:
      return Object.seal(n);
    default:
      return n;
  }
}
var $b = 1e3;
function Wb(n, i) {
  var s;
  return {
    mode: n,
    plugins: i.plugins,
    refs: i.refs || new Map(),
    features: (s = i.features) != null ? s : 63 ^ (i.disabledFeatures || 0),
    depthLimit: i.depthLimit || $b,
  };
}
function t_(n) {
  return { mode: 2, base: Wb(2, n), child: b };
}
var e_ = class {
  constructor(n, i) {
    ((this._p = n), (this.depth = i));
  }
  deserialize(n) {
    return Lt(this._p, this.depth, n);
  }
};
function Qp(n, i) {
  if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i))
    throw new fa({ t: 4, i });
  if (n.refs.has(i)) throw new Error("Conflicted ref id: " + i);
}
function n_(n, i, s) {
  return (Qp(n.base, i), n.state.marked.has(i) && n.base.refs.set(i, s), s);
}
function a_(n, i, s) {
  return (Qp(n.base, i), n.base.refs.set(i, s), s);
}
function Wt(n, i, s) {
  return n.mode === 1 ? n_(n, i, s) : a_(n, i, s);
}
function Oc(n, i, s) {
  if (Object.hasOwn(i, s)) return i[s];
  throw new fa(n);
}
function l_(n, i) {
  return Wt(n, i.i, x1(ca(i.s)));
}
function i_(n, i, s) {
  let u = s.a,
    c = u.length,
    f = Wt(n, s.i, new Array(c));
  for (let h = 0, m; h < c; h++) ((m = u[h]), m && (f[h] = Lt(n, i, m)));
  return (Yp(f, s.o), f);
}
function s_(n) {
  switch (n) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function r_(n) {
  switch (n) {
    case xn:
    case zl:
    case Dl:
    case An:
      return !0;
    default:
      return !1;
  }
}
function xy(n, i, s) {
  s_(i)
    ? (n[i] = s)
    : Object.defineProperty(n, i, {
        value: s,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function u_(n, i, s, u, c) {
  if (typeof u == "string") xy(s, ca(u), Lt(n, i, c));
  else {
    let f = Lt(n, i, u);
    switch (typeof f) {
      case "string":
        xy(s, f, Lt(n, i, c));
        break;
      case "symbol":
        r_(f) && (s[f] = Lt(n, i, c));
        break;
      default:
        throw new fa(u);
    }
  }
}
function Gp(n, i, s, u) {
  let c = s.k;
  if (c.length > 0)
    for (let f = 0, h = s.v, m = c.length; f < m; f++) u_(n, i, u, c[f], h[f]);
  return u;
}
function o_(n, i, s) {
  let u = Wt(n, s.i, s.t === 10 ? {} : Object.create(null));
  return (Gp(n, i, s.p, u), Yp(u, s.o), u);
}
function c_(n, i) {
  return Wt(n, i.i, new Date(i.s));
}
function f_(n, i) {
  if (n.base.features & 32) {
    let s = ca(i.c);
    if (s.length > Ib) throw new fa(i);
    return Wt(n, i.i, new RegExp(s, i.m));
  }
  throw new Up(i);
}
function d_(n, i, s) {
  let u = Wt(n, s.i, new Set());
  for (let c = 0, f = s.a, h = f.length; c < h; c++) u.add(Lt(n, i, f[c]));
  return u;
}
function h_(n, i, s) {
  let u = Wt(n, s.i, new Map());
  for (let c = 0, f = s.e.k, h = s.e.v, m = f.length; c < m; c++)
    u.set(Lt(n, i, f[c]), Lt(n, i, h[c]));
  return u;
}
function m_(n, i) {
  if (i.s.length > Jb) throw new fa(i);
  return Wt(n, i.i, Np(ca(i.s)));
}
function y_(n, i, s) {
  var u;
  let c = Pb(s.c),
    f = Lt(n, i, s.f),
    h = (u = s.b) != null ? u : 0;
  if (h < 0 || h > f.byteLength) throw new fa(s);
  return Wt(n, s.i, new c(f, h, s.l));
}
function p_(n, i, s) {
  var u;
  let c = Lt(n, i, s.f),
    f = (u = s.b) != null ? u : 0;
  if (f < 0 || f > c.byteLength) throw new fa(s);
  return Wt(n, s.i, new DataView(c, f, s.l));
}
function Vp(n, i, s, u) {
  if (s.p) {
    let c = Gp(n, i, s.p, {});
    Object.defineProperties(u, Object.getOwnPropertyDescriptors(c));
  }
  return u;
}
function v_(n, i, s) {
  let u = Wt(n, s.i, new AggregateError([], ca(s.m)));
  return Vp(n, i, s, u);
}
function g_(n, i, s) {
  let u = Oc(s, m1, s.s),
    c = Wt(n, s.i, new u(ca(s.m)));
  return Vp(n, i, s, c);
}
function S_(n, i, s) {
  let u = Hr(),
    c = Wt(n, s.i, u.p),
    f = Lt(n, i, s.f);
  return (s.s ? u.s(f) : u.f(f), c);
}
function b_(n, i, s) {
  return Wt(n, s.i, Object(Lt(n, i, s.f)));
}
function __(n, i, s) {
  let u = n.base.plugins;
  if (u) {
    let c = ca(s.c);
    for (let f = 0, h = u.length; f < h; f++) {
      let m = u[f];
      if (m.tag === c)
        return Wt(n, s.i, m.deserialize(s.s, new e_(n, i), { id: s.i }));
    }
  }
  throw new tb(s.c);
}
function E_(n, i) {
  return Wt(n, i.i, Wt(n, i.s, Hr()).p);
}
function R_(n, i, s) {
  let u = n.base.refs.get(s.i);
  if (u) return (u.s(Lt(n, i, s.a[1])), b);
  throw new ki("Promise");
}
function T_(n, i, s) {
  let u = n.base.refs.get(s.i);
  if (u) return (u.f(Lt(n, i, s.a[1])), b);
  throw new ki("Promise");
}
function x_(n, i, s) {
  Lt(n, i, s.a[0]);
  let u = Lt(n, i, s.a[1]);
  return mb(u);
}
function A_(n, i, s) {
  Lt(n, i, s.a[0]);
  let u = Lt(n, i, s.a[1]);
  return bb(u);
}
function M_(n, i, s) {
  let u = Wt(n, s.i, Ba()),
    c = s.a,
    f = c.length;
  if (f) for (let h = 0; h < f; h++) Lt(n, i, c[h]);
  return u;
}
function O_(n, i, s) {
  let u = n.base.refs.get(s.i);
  if (u && qr(u)) return (u.next(Lt(n, i, s.f)), b);
  throw new ki("Stream");
}
function w_(n, i, s) {
  let u = n.base.refs.get(s.i);
  if (u && qr(u)) return (u.throw(Lt(n, i, s.f)), b);
  throw new ki("Stream");
}
function C_(n, i, s) {
  let u = n.base.refs.get(s.i);
  if (u && qr(u)) return (u.return(Lt(n, i, s.f)), b);
  throw new ki("Stream");
}
function z_(n, i, s) {
  return (Lt(n, i, s.f), b);
}
function D_(n, i, s) {
  return (Lt(n, i, s.a[1]), b);
}
function L_(n, i, s) {
  let u = Wt(n, s.i, jp([], s.s, s.l));
  for (let c = 0, f = s.a.length; c < f; c++) u.v[c] = Lt(n, i, s.a[c]);
  return u;
}
function Lt(n, i, s) {
  if (i > n.base.depthLimit) throw new lb(n.base.depthLimit);
  switch (((i += 1), s.t)) {
    case 2:
      return Oc(s, d1, s.s);
    case 0:
      return Number(s.s);
    case 1:
      return ca(String(s.s));
    case 3:
      if (String(s.s).length > Fb) throw new fa(s);
      return BigInt(s.s);
    case 4:
      return n.base.refs.get(s.i);
    case 18:
      return l_(n, s);
    case 9:
      return i_(n, i, s);
    case 10:
    case 11:
      return o_(n, i, s);
    case 5:
      return c_(n, s);
    case 6:
      return f_(n, s);
    case 7:
      return d_(n, i, s);
    case 8:
      return h_(n, i, s);
    case 19:
      return m_(n, s);
    case 16:
    case 15:
      return y_(n, i, s);
    case 20:
      return p_(n, i, s);
    case 14:
      return v_(n, i, s);
    case 13:
      return g_(n, i, s);
    case 12:
      return S_(n, i, s);
    case 17:
      return Oc(s, f1, s.s);
    case 21:
      return b_(n, i, s);
    case 25:
      return __(n, i, s);
    case 22:
      return E_(n, s);
    case 23:
      return R_(n, i, s);
    case 24:
      return T_(n, i, s);
    case 28:
      return x_(n, i, s);
    case 30:
      return A_(n, i, s);
    case 31:
      return M_(n, i, s);
    case 32:
      return O_(n, i, s);
    case 33:
      return w_(n, i, s);
    case 34:
      return C_(n, i, s);
    case 27:
      return z_(n, i, s);
    case 29:
      return D_(n, i, s);
    case 35:
      return L_(n, i, s);
    default:
      throw new Up(s);
  }
}
function U_(n, i) {
  try {
    return Lt(n, 0, i);
  } catch (s) {
    throw new W1(s);
  }
}
var N_ = () => T;
N_.toString();
function Ay(n, i) {
  let s = qp(i.plugins),
    u = t_({
      plugins: s,
      refs: i.refs,
      features: i.features,
      disabledFeatures: i.disabledFeatures,
      depthLimit: i.depthLimit,
    });
  return U_(u, n);
}
async function j_(n, i = {}) {
  let s = qp(i.plugins),
    u = wb(1, { plugins: s, disabledFeatures: i.disabledFeatures });
  return {
    t: await Zb(u, n),
    f: u.base.features,
    m: Array.from(u.base.marked),
  };
}
function B_(n) {
  return {
    tag: "$TSR/t/" + n.key,
    test: n.test,
    parse: {
      sync(i, s, u) {
        return { v: s.parse(n.toSerializable(i)) };
      },
      async async(i, s, u) {
        return { v: await s.parse(n.toSerializable(i)) };
      },
      stream(i, s, u) {
        return { v: s.parse(n.toSerializable(i)) };
      },
    },
    serialize: void 0,
    deserialize(i, s, u) {
      return n.fromSerializable(s.deserialize(i.v));
    },
  };
}
var H_ = class {
    constructor(n, i) {
      ((this.stream = n), (this.hint = i?.hint ?? "binary"));
    }
  },
  zr = globalThis.Buffer,
  Xp = !!zr && typeof zr.from == "function";
function Kp(n) {
  if (n.length === 0) return "";
  if (Xp) return zr.from(n).toString("base64");
  const i = 32768,
    s = [];
  for (let u = 0; u < n.length; u += i) {
    const c = n.subarray(u, u + i);
    s.push(String.fromCharCode.apply(null, c));
  }
  return btoa(s.join(""));
}
function Zp(n) {
  if (n.length === 0) return new Uint8Array(0);
  if (Xp) {
    const u = zr.from(n, "base64");
    return new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
  }
  const i = atob(n),
    s = new Uint8Array(i.length);
  for (let u = 0; u < i.length; u++) s[u] = i.charCodeAt(u);
  return s;
}
var Ui = Object.create(null),
  Ni = Object.create(null),
  q_ = (n) =>
    new ReadableStream({
      start(i) {
        n.on({
          next(s) {
            try {
              i.enqueue(Zp(s));
            } catch {}
          },
          throw(s) {
            i.error(s);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  Y_ = new TextEncoder(),
  Q_ = (n) =>
    new ReadableStream({
      start(i) {
        n.on({
          next(s) {
            try {
              typeof s == "string"
                ? i.enqueue(Y_.encode(s))
                : i.enqueue(Zp(s.$b64));
            } catch {}
          },
          throw(s) {
            i.error(s);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  G_ =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  V_ =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function My(n) {
  const i = Ba(),
    s = n.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: u, value: c } = await s.read();
          if (u) {
            i.return(void 0);
            break;
          }
          i.next(Kp(c));
        }
      } catch (u) {
        i.throw(u);
      } finally {
        s.releaseLock();
      }
    })(),
    i
  );
}
function Oy(n) {
  const i = Ba(),
    s = n.getReader(),
    u = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: c, value: f } = await s.read();
          if (c) {
            try {
              const h = u.decode();
              h.length > 0 && i.next(h);
            } catch {}
            i.return(void 0);
            break;
          }
          try {
            const h = u.decode(f, { stream: !0 });
            h.length > 0 && i.next(h);
          } catch {
            i.next({ $b64: Kp(f) });
          }
        }
      } catch (c) {
        i.throw(c);
      } finally {
        s.releaseLock();
      }
    })(),
    i
  );
}
var X_ = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(n) {
        return n === Ui;
      },
      parse: {
        sync(n, i, s) {
          return {};
        },
        async async(n, i, s) {
          return {};
        },
        stream(n, i, s) {
          return {};
        },
      },
      serialize(n, i, s) {
        return G_;
      },
      deserialize(n, i, s) {
        return Ui;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(n) {
        return n === Ni;
      },
      parse: {
        sync(n, i, s) {
          return {};
        },
        async async(n, i, s) {
          return {};
        },
        stream(n, i, s) {
          return {};
        },
      },
      serialize(n, i, s) {
        return V_;
      },
      deserialize(n, i, s) {
        return Ni;
      },
    },
  ],
  test(n) {
    return n instanceof H_;
  },
  parse: {
    sync(n, i, s) {
      const u = n.hint === "text" ? Ni : Ui;
      return {
        hint: i.parse(n.hint),
        factory: i.parse(u),
        stream: i.parse(Ba()),
      };
    },
    async async(n, i, s) {
      const u = n.hint === "text" ? Ni : Ui,
        c = n.hint === "text" ? Oy(n.stream) : My(n.stream);
      return {
        hint: await i.parse(n.hint),
        factory: await i.parse(u),
        stream: await i.parse(c),
      };
    },
    stream(n, i, s) {
      const u = n.hint === "text" ? Ni : Ui,
        c = n.hint === "text" ? Oy(n.stream) : My(n.stream);
      return { hint: i.parse(n.hint), factory: i.parse(u), stream: i.parse(c) };
    },
  },
  serialize(n, i, s) {
    return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
  },
  deserialize(n, i, s) {
    const u = i.deserialize(n.stream);
    return i.deserialize(n.hint) === "text" ? Q_(u) : q_(u);
  },
};
function K_(n) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
      );
    },
    deserialize(i, s, u) {
      return n(
        typeof s?.deserialize == "function"
          ? s.deserialize(i.streamId)
          : i.streamId,
      );
    },
  };
}
var Z_ = {
    tag: "$TSR/Error",
    test(n) {
      return n instanceof Error;
    },
    parse: {
      sync(n, i) {
        return { message: i.parse(n.message) };
      },
      async async(n, i) {
        return { message: await i.parse(n.message) };
      },
      stream(n, i) {
        return { message: i.parse(n.message) };
      },
    },
    serialize(n, i) {
      return "new Error(" + i.serialize(n.message) + ")";
    },
    deserialize(n, i) {
      return new Error(i.deserialize(n.message));
    },
  },
  ea = {},
  kp = (n) =>
    new ReadableStream({
      start: (i) => {
        n.on({
          next: (s) => {
            try {
              i.enqueue(s);
            } catch {}
          },
          throw: (s) => {
            i.error(s);
          },
          return: () => {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  k_ = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(n) {
      return n === ea;
    },
    parse: {
      sync() {
        return ea;
      },
      async async() {
        return await Promise.resolve(ea);
      },
      stream() {
        return ea;
      },
    },
    serialize() {
      return kp.toString();
    },
    deserialize() {
      return ea;
    },
  };
function wy(n) {
  let i = Ba(),
    s = n.getReader();
  async function u() {
    try {
      let c = await s.read();
      c.done ? i.return(c.value) : (i.next(c.value), await u());
    } catch (c) {
      i.throw(c);
    }
  }
  return (u().catch(() => {}), i);
}
var P_ = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [k_],
    test(n) {
      return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream;
    },
    parse: {
      sync(n, i) {
        return { factory: i.parse(ea), stream: i.parse(Ba()) };
      },
      async async(n, i) {
        return { factory: await i.parse(ea), stream: await i.parse(wy(n)) };
      },
      stream(n, i) {
        return { factory: i.parse(ea), stream: i.parse(wy(n)) };
      },
    },
    serialize(n, i) {
      return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
    },
    deserialize(n, i) {
      let s = i.deserialize(n.stream);
      return kp(s);
    },
  },
  J_ = P_,
  F_ = [Z_, X_, J_];
function I_() {
  return [...(np()?.serializationAdapters?.map(B_) ?? []), ...F_];
}
var Cy = new TextDecoder(),
  $_ = new Uint8Array(0),
  zy = 16 * 1024 * 1024,
  Dy = 32 * 1024 * 1024,
  Ly = 1024,
  Uy = 1e5;
function W_(n) {
  const i = new Map(),
    s = new Map(),
    u = new Set();
  let c = !1,
    f = null,
    h = 0,
    m;
  const p = new ReadableStream({
    start(v) {
      m = v;
    },
    cancel() {
      c = !0;
      try {
        f?.cancel();
      } catch {}
      (i.forEach((v) => {
        try {
          v.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        i.clear(),
        s.clear(),
        u.clear());
    },
  });
  function y(v) {
    const _ = s.get(v);
    if (_) return _;
    if (u.has(v))
      return new ReadableStream({
        start(A) {
          A.close();
        },
      });
    if (s.size >= Ly)
      throw new Error(`Too many raw streams in framed response (max ${Ly})`);
    const E = new ReadableStream({
      start(A) {
        i.set(v, A);
      },
      cancel() {
        (u.add(v), i.delete(v), s.delete(v));
      },
    });
    return (s.set(v, E), E);
  }
  function S(v) {
    return (y(v), i.get(v));
  }
  return (
    (async () => {
      const v = n.getReader();
      f = v;
      const _ = [];
      let E = 0;
      function A() {
        if (E < 9) return null;
        const R = _[0];
        if (R.length >= 9)
          return {
            type: R[0],
            streamId: ((R[1] << 24) | (R[2] << 16) | (R[3] << 8) | R[4]) >>> 0,
            length: ((R[5] << 24) | (R[6] << 16) | (R[7] << 8) | R[8]) >>> 0,
          };
        const w = new Uint8Array(9);
        let q = 0,
          Q = 9;
        for (let H = 0; H < _.length && Q > 0; H++) {
          const F = _[H],
            J = Math.min(F.length, Q);
          (w.set(F.subarray(0, J), q), (q += J), (Q -= J));
        }
        return {
          type: w[0],
          streamId: ((w[1] << 24) | (w[2] << 16) | (w[3] << 8) | w[4]) >>> 0,
          length: ((w[5] << 24) | (w[6] << 16) | (w[7] << 8) | w[8]) >>> 0,
        };
      }
      function C(R) {
        if (R === 0) return $_;
        const w = new Uint8Array(R);
        let q = 0,
          Q = R;
        for (; Q > 0 && _.length > 0; ) {
          const H = _[0];
          if (!H) break;
          const F = Math.min(H.length, Q);
          (w.set(H.subarray(0, F), q),
            (q += F),
            (Q -= F),
            F === H.length ? _.shift() : (_[0] = H.subarray(F)));
        }
        return ((E -= R), w);
      }
      try {
        for (;;) {
          const { done: R, value: w } = await v.read();
          if (c || R) break;
          if (w) {
            if (E + w.length > Dy)
              throw new Error(`Framed response buffer exceeded ${Dy} bytes`);
            for (_.push(w), E += w.length; ; ) {
              const q = A();
              if (!q) break;
              const { type: Q, streamId: H, length: F } = q;
              if (
                Q !== Tn.JSON &&
                Q !== Tn.CHUNK &&
                Q !== Tn.END &&
                Q !== Tn.ERROR
              )
                throw new Error(`Unknown frame type: ${Q}`);
              if (Q === Tn.JSON) {
                if (H !== 0)
                  throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (H === 0)
                throw new Error(
                  "Invalid raw frame streamId (expected non-zero)",
                );
              if (F > zy)
                throw new Error(
                  `Frame payload too large: ${F} bytes (max ${zy})`,
                );
              const J = 9 + F;
              if (E < J) break;
              if (++h > Uy)
                throw new Error(
                  `Too many frames in framed response (max ${Uy})`,
                );
              C(9);
              const X = C(F);
              switch (Q) {
                case Tn.JSON:
                  try {
                    m.enqueue(Cy.decode(X));
                  } catch {}
                  break;
                case Tn.CHUNK: {
                  const K = S(H);
                  K && K.enqueue(X);
                  break;
                }
                case Tn.END: {
                  const K = S(H);
                  if ((u.add(H), K)) {
                    try {
                      K.close();
                    } catch {}
                    i.delete(H);
                  }
                  break;
                }
                case Tn.ERROR: {
                  const K = S(H);
                  if ((u.add(H), K)) {
                    const I = Cy.decode(X);
                    (K.error(new Error(I)), i.delete(H));
                  }
                  break;
                }
              }
            }
          }
        }
        if (E !== 0)
          throw new Error("Incomplete frame at end of framed response");
        try {
          m.close();
        } catch {}
        (i.forEach((R) => {
          try {
            R.close();
          } catch {}
        }),
          i.clear());
      } catch (R) {
        try {
          m.error(R);
        } catch {}
        (i.forEach((w) => {
          try {
            w.error(R);
          } catch {}
        }),
          i.clear());
      } finally {
        try {
          v.releaseLock();
        } catch {}
        f = null;
      }
    })(),
    { getOrCreateStream: y, jsonChunks: p }
  );
}
var Vi = null;
async function wc(n) {
  n.length > 0 && (await Promise.allSettled(n));
}
var t2 = Object.prototype.hasOwnProperty;
function Pp(n) {
  for (const i in n) if (t2.call(n, i)) return !0;
  return !1;
}
async function e2(n, i, s) {
  Vi || (Vi = I_());
  const u = i[0],
    c = u.fetch ?? s,
    f = u.data instanceof FormData ? "formData" : "payload",
    h = u.headers ? new Headers(u.headers) : new Headers();
  if (
    (h.set("x-tsr-serverFn", "true"),
    f === "payload" &&
      h.set("accept", `${F0}, application/x-ndjson, application/json`),
    u.method === "GET")
  ) {
    if (f === "formData")
      throw new Error("FormData is not supported with GET requests");
    const p = await Jp(u);
    if (p !== void 0) {
      const y = up({ payload: p });
      n.includes("?") ? (n += `&${y}`) : (n += `?${y}`);
    }
  }
  let m;
  if (u.method === "POST") {
    const p = await n2(u);
    (p?.contentType && h.set("content-type", p.contentType), (m = p?.body));
  }
  return await a2(async () =>
    c(n, { method: u.method, headers: h, signal: u.signal, body: m }),
  );
}
async function Jp(n) {
  let i = !1;
  const s = {};
  if (
    (n.data !== void 0 && ((i = !0), (s.data = n.data)),
    n.context && Pp(n.context) && ((i = !0), (s.context = n.context)),
    i)
  )
    return Fp(s);
}
async function Fp(n) {
  return JSON.stringify(await Promise.resolve(j_(n, { plugins: Vi })));
}
async function n2(n) {
  if (n.data instanceof FormData) {
    let s;
    return (
      n.context && Pp(n.context) && (s = await Fp(n.context)),
      s !== void 0 && n.data.set(J0, s),
      { body: n.data }
    );
  }
  const i = await Jp(n);
  if (i) return { body: i, contentType: "application/json" };
}
async function a2(n) {
  let i;
  try {
    i = await n();
  } catch (u) {
    if (u instanceof Response) i = u;
    else throw (console.log(u), u);
  }
  if (i.headers.get("x-tss-raw") === "true") return i;
  const s = i.headers.get("content-type");
  if ((s || Re(), i.headers.get("x-tss-serialized"))) {
    let u;
    if (s.includes("application/x-tss-framed")) {
      if ((W0(s), !i.body))
        throw new Error("No response body for framed response");
      const { getOrCreateStream: c, jsonChunks: f } = W_(i.body),
        h = [K_(c), ...(Vi || [])],
        m = new Map();
      u = await l2({
        jsonStream: f,
        onMessage: (p) => Ay(p, { refs: m, plugins: h }),
        onError(p, y) {
          console.error(p, y);
        },
      });
    } else if (s.includes("application/json")) {
      const c = await i.json(),
        f = [];
      ((u = Ay(c, { plugins: Vi })), await wc(f));
    }
    if ((u || Re(), u instanceof Error)) throw u;
    return u;
  }
  if (s.includes("application/json")) {
    const u = await i.json(),
      c = jS(u);
    if (c) throw c;
    if (ne(u)) throw u;
    return u;
  }
  if (!i.ok) throw new Error(await i.text());
  return i;
}
async function l2({ jsonStream: n, onMessage: i, onError: s }) {
  const u = n.getReader(),
    { value: c, done: f } = await u.read();
  if (f || !c) throw new Error("Stream ended before first object");
  const h = JSON.parse(c);
  let m = !1;
  const p = (async () => {
    try {
      for (;;) {
        const { value: v, done: _ } = await u.read();
        if (_) break;
        if (v)
          try {
            const E = [];
            try {
              i(JSON.parse(v));
            } finally {
            }
            await wc(E);
          } catch (E) {
            s?.(`Invalid JSON: ${v}`, E);
          }
      }
    } catch (v) {
      m || s?.("Stream processing error:", v);
    }
  })();
  let y;
  const S = [];
  try {
    y = i(h);
  } catch (v) {
    throw ((m = !0), u.cancel().catch(() => {}), v);
  }
  return (
    await wc(S),
    Promise.resolve(y).catch(() => {
      ((m = !0), u.cancel().catch(() => {}));
    }),
    p.finally(() => {
      try {
        u.releaseLock();
      } catch {}
    }),
    y
  );
}
function i2(n) {
  const i = "/_serverFn/" + n;
  return Object.assign(
    (...c) => {
      const f = np()?.serverFns?.fetch;
      return e2(i, c, f ?? fetch);
    },
    { url: i, serverFnMeta: { id: n }, [xc]: !0 },
  );
}
var s2 = {
  key: "$TSS/serverfn",
  test: (n) => (typeof n != "function" || !(xc in n) ? !1 : !!n[xc]),
  toSerializable: ({ serverFnMeta: n }) => ({ functionId: n.id }),
  fromSerializable: ({ functionId: n }) => i2(n),
};
function Ny(n) {
  return n.replaceAll("\0", "/").replaceAll("�", "/");
}
function r2(n, i) {
  ((n.id = i.i),
    (n.__beforeLoadContext = i.b),
    (n.loaderData = i.l),
    (n.status = i.s),
    (n.ssr = i.ssr),
    (n.updatedAt = i.u),
    (n.error = i.e),
    i.g !== void 0 && (n.globalNotFound = i.g));
}
async function u2(n) {
  window.$_TSR || Re();
  const i = n.options.serializationAdapters;
  if (i?.length) {
    const R = new Map();
    (i.forEach((w) => {
      R.set(w.key, w.fromSerializable);
    }),
      (window.$_TSR.t = R),
      window.$_TSR.buffer.forEach((w) => w()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Re());
  const s = window.$_TSR.router;
  (s.matches.forEach((R) => {
    R.i = Ny(R.i);
  }),
    s.lastMatchId && (s.lastMatchId = Ny(s.lastMatchId)));
  const { manifest: u, dehydratedData: c, lastMatchId: f } = s;
  n.ssr = { manifest: u };
  const h = document.querySelector('meta[property="csp-nonce"]')?.content;
  n.options.ssr = { nonce: h };
  const m = n.matchRoutes(n.stores.location.get()),
    p = Promise.all(
      m.map((R) => n.loadRouteChunk(n.looseRoutesById[R.routeId])),
    );
  function y(R) {
    const w =
      n.looseRoutesById[R.routeId].options.pendingMinMs ??
      n.options.defaultPendingMinMs;
    if (w) {
      const q = ja();
      ((R._nonReactive.minPendingPromise = q),
        (R._forcePending = !0),
        setTimeout(() => {
          (q.resolve(),
            n.updateMatch(
              R.id,
              (Q) => (
                (Q._nonReactive.minPendingPromise = void 0),
                { ...Q, _forcePending: void 0 }
              ),
            ));
        }, w));
    }
  }
  function S(R) {
    const w = n.looseRoutesById[R.routeId];
    w && (w.options.ssr = R.ssr);
  }
  let v;
  (m.forEach((R) => {
    const w = s.matches.find((q) => q.i === R.id);
    if (!w) {
      ((R._nonReactive.dehydrated = !1), (R.ssr = !1), S(R));
      return;
    }
    (r2(R, w),
      S(R),
      (R._nonReactive.dehydrated = R.ssr !== !1),
      (R.ssr === "data-only" || R.ssr === !1) &&
        v === void 0 &&
        ((v = R.index), y(R)));
  }),
    n.stores.setMatches(m),
    await n.options.hydrate?.(c));
  const _ = n.stores.matches.get(),
    E = n.stores.location.get();
  await Promise.all(
    _.map(async (R) => {
      try {
        const w = n.looseRoutesById[R.routeId],
          q = _[R.index - 1]?.context ?? n.options.context;
        if (w.options.context) {
          const J = {
            deps: R.loaderDeps,
            params: R.params,
            context: q ?? {},
            location: E,
            navigate: (X) => n.navigate({ ...X, _fromLocation: E }),
            buildLocation: n.buildLocation,
            cause: R.cause,
            abortController: R.abortController,
            preload: !1,
            matches: m,
            routeId: w.id,
          };
          R.__routeContext = w.options.context(J) ?? void 0;
        }
        R.context = { ...q, ...R.__routeContext, ...R.__beforeLoadContext };
        const Q = {
            ssr: n.options.ssr,
            matches: _,
            match: R,
            params: R.params,
            loaderData: R.loaderData,
          },
          H = await w.options.head?.(Q),
          F = await w.options.scripts?.(Q);
        ((R.meta = H?.meta),
          (R.links = H?.links),
          (R.headScripts = H?.scripts),
          (R.styles = H?.styles),
          (R.scripts = F));
      } catch (w) {
        if (ne(w))
          ((R.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${R.routeId}`,
              w,
            ));
        else
          throw (
            (R.error = w),
            console.error(`Error during hydration for route ${R.routeId}:`, w),
            w
          );
      }
    }),
  );
  const A = m[m.length - 1].id !== f;
  if (!m.some((R) => R.ssr === !1) && !A)
    return (
      m.forEach((R) => {
        R._nonReactive.dehydrated = void 0;
      }),
      n.stores.resolvedLocation.set(n.stores.location.get()),
      p
    );
  const C = Promise.resolve()
    .then(() => n.load())
    .catch((R) => {
      console.error("Error during router hydration:", R);
    });
  if (A) {
    const R = m[1];
    (R || Re(),
      y(R),
      (R._displayPending = !0),
      (R._nonReactive.displayPendingPromise = C),
      C.then(() => {
        n.batch(() => {
          (n.stores.status.get() === "pending" &&
            (n.stores.status.set("idle"),
            n.stores.resolvedLocation.set(n.stores.location.get())),
            n.updateMatch(R.id, (w) => ({
              ...w,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return p;
}
var Dr = tt.use,
  Bi = typeof window < "u" ? tt.useLayoutEffect : tt.useEffect;
function gc(n) {
  const i = tt.useRef({ value: n, prev: null }),
    s = i.current.value;
  return (n !== s && (i.current = { value: n, prev: s }), i.current.prev);
}
function o2(n, i, s = {}, u = {}) {
  tt.useEffect(() => {
    if (!n.current || u.disabled || typeof IntersectionObserver != "function")
      return;
    const c = new IntersectionObserver(([f]) => {
      i(f);
    }, s);
    return (
      c.observe(n.current),
      () => {
        c.disconnect();
      }
    );
  }, [i, s, u.disabled, n]);
}
function c2(n) {
  const i = tt.useRef(null);
  return (tt.useImperativeHandle(n, () => i.current, []), i);
}
function f2({ promise: n }) {
  if (Dr) return Dr(n);
  const i = a1(n);
  if (i[en].status === "pending") throw i;
  if (i[en].status === "error") throw i[en].error;
  return i[en].data;
}
function d2(n) {
  const i = Z.jsx(h2, { ...n });
  return n.fallback
    ? Z.jsx(tt.Suspense, { fallback: n.fallback, children: i })
    : i;
}
function h2(n) {
  const i = f2(n);
  return n.children(i);
}
function Xc(n) {
  const i = n.errorComponent ?? Kc;
  return Z.jsx(m2, {
    getResetKey: n.getResetKey,
    onCatch: n.onCatch,
    children: ({ error: s, reset: u }) =>
      s ? tt.createElement(i, { error: s, reset: u }) : n.children,
  });
}
var m2 = class extends tt.Component {
  constructor(...n) {
    (super(...n), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(n, i) {
    const s = n.getResetKey();
    return i.error && i.resetKey !== s
      ? { resetKey: s, error: null }
      : { resetKey: s };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(n, i) {
    this.props.onCatch && this.props.onCatch(n, i);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Kc({ error: n }) {
  const [i, s] = tt.useState(!1);
  return Z.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      Z.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          Z.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          Z.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => s((u) => !u),
            children: i ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      Z.jsx("div", { style: { height: ".25rem" } }),
      i
        ? Z.jsx("div", {
            children: Z.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: n.message
                ? Z.jsx("code", { children: n.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function y2({ children: n, fallback: i = null }) {
  return Zc()
    ? Z.jsx(Hi.Fragment, { children: n })
    : Z.jsx(Hi.Fragment, { children: i });
}
function Zc() {
  return Hi.useSyncExternalStore(
    p2,
    () => !0,
    () => !1,
  );
}
function p2() {
  return () => {};
}
var Ip = tt.createContext(null);
function ae(n) {
  return tt.useContext(Ip);
}
var Gr = tt.createContext(void 0),
  v2 = tt.createContext(void 0),
  qt = ((n) => (
    (n[(n.None = 0)] = "None"),
    (n[(n.Mutable = 1)] = "Mutable"),
    (n[(n.Watching = 2)] = "Watching"),
    (n[(n.RecursedCheck = 4)] = "RecursedCheck"),
    (n[(n.Recursed = 8)] = "Recursed"),
    (n[(n.Dirty = 16)] = "Dirty"),
    (n[(n.Pending = 32)] = "Pending"),
    n
  ))(qt || {});
function g2({ update: n, notify: i, unwatched: s }) {
  return {
    link: u,
    unlink: c,
    propagate: f,
    checkDirty: h,
    shallowPropagate: m,
  };
  function u(y, S, v) {
    const _ = S.depsTail;
    if (_ !== void 0 && _.dep === y) return;
    const E = _ !== void 0 ? _.nextDep : S.deps;
    if (E !== void 0 && E.dep === y) {
      ((E.version = v), (S.depsTail = E));
      return;
    }
    const A = y.subsTail;
    if (A !== void 0 && A.version === v && A.sub === S) return;
    const C =
      (S.depsTail =
      y.subsTail =
        {
          version: v,
          dep: y,
          sub: S,
          prevDep: _,
          nextDep: E,
          prevSub: A,
          nextSub: void 0,
        });
    (E !== void 0 && (E.prevDep = C),
      _ !== void 0 ? (_.nextDep = C) : (S.deps = C),
      A !== void 0 ? (A.nextSub = C) : (y.subs = C));
  }
  function c(y, S = y.sub) {
    const v = y.dep,
      _ = y.prevDep,
      E = y.nextDep,
      A = y.nextSub,
      C = y.prevSub;
    return (
      E !== void 0 ? (E.prevDep = _) : (S.depsTail = _),
      _ !== void 0 ? (_.nextDep = E) : (S.deps = E),
      A !== void 0 ? (A.prevSub = C) : (v.subsTail = C),
      C !== void 0 ? (C.nextSub = A) : (v.subs = A) === void 0 && s(v),
      E
    );
  }
  function f(y) {
    let S = y.nextSub,
      v;
    t: do {
      const _ = y.sub;
      let E = _.flags;
      if (
        (E & 60
          ? E & 12
            ? E & 4
              ? !(E & 48) && p(y, _)
                ? ((_.flags = E | 40), (E &= 1))
                : (E = 0)
              : (_.flags = (E & -9) | 32)
            : (E = 0)
          : (_.flags = E | 32),
        E & 2 && i(_),
        E & 1)
      ) {
        const A = _.subs;
        if (A !== void 0) {
          const C = (y = A).nextSub;
          C !== void 0 && ((v = { value: S, prev: v }), (S = C));
          continue;
        }
      }
      if ((y = S) !== void 0) {
        S = y.nextSub;
        continue;
      }
      for (; v !== void 0; )
        if (((y = v.value), (v = v.prev), y !== void 0)) {
          S = y.nextSub;
          continue t;
        }
      break;
    } while (!0);
  }
  function h(y, S) {
    let v,
      _ = 0,
      E = !1;
    t: do {
      const A = y.dep,
        C = A.flags;
      if (S.flags & 16) E = !0;
      else if ((C & 17) === 17) {
        if (n(A)) {
          const R = A.subs;
          (R.nextSub !== void 0 && m(R), (E = !0));
        }
      } else if ((C & 33) === 33) {
        ((y.nextSub !== void 0 || y.prevSub !== void 0) &&
          (v = { value: y, prev: v }),
          (y = A.deps),
          (S = A),
          ++_);
        continue;
      }
      if (!E) {
        const R = y.nextDep;
        if (R !== void 0) {
          y = R;
          continue;
        }
      }
      for (; _--; ) {
        const R = S.subs,
          w = R.nextSub !== void 0;
        if ((w ? ((y = v.value), (v = v.prev)) : (y = R), E)) {
          if (n(S)) {
            (w && m(R), (S = y.sub));
            continue;
          }
          E = !1;
        } else S.flags &= -33;
        S = y.sub;
        const q = y.nextDep;
        if (q !== void 0) {
          y = q;
          continue t;
        }
      }
      return E;
    } while (!0);
  }
  function m(y) {
    do {
      const S = y.sub,
        v = S.flags;
      (v & 48) === 32 && ((S.flags = v | 16), (v & 6) === 2 && i(S));
    } while ((y = y.nextSub) !== void 0);
  }
  function p(y, S) {
    let v = S.depsTail;
    for (; v !== void 0; ) {
      if (v === y) return !0;
      v = v.prevDep;
    }
    return !1;
  }
}
function S2(n, i, s) {
  const u = typeof n == "object",
    c = u ? n : void 0;
  return {
    next: (u ? n.next : n)?.bind(c),
    error: (u ? n.error : i)?.bind(c),
    complete: (u ? n.complete : s)?.bind(c),
  };
}
const Cc = [];
let Ar = 0;
const {
  link: jy,
  unlink: b2,
  propagate: _2,
  checkDirty: $p,
  shallowPropagate: By,
} = g2({
  update(n) {
    return n._update();
  },
  notify(n) {
    ((Cc[zc++] = n), (n.flags &= ~qt.Watching));
  },
  unwatched(n) {
    n.depsTail !== void 0 &&
      ((n.depsTail = void 0), (n.flags = qt.Mutable | qt.Dirty), Lr(n));
  },
});
let br = 0,
  zc = 0,
  tn,
  Dc = 0;
function Wp(n) {
  try {
    (++Dc, n());
  } finally {
    --Dc || tv();
  }
}
function Lr(n) {
  const i = n.depsTail;
  let s = i !== void 0 ? i.nextDep : n.deps;
  for (; s !== void 0; ) s = b2(s, n);
}
function tv() {
  if (!(Dc > 0)) {
    for (; br < zc; ) {
      const n = Cc[br];
      ((Cc[br++] = void 0), n.notify());
    }
    ((br = 0), (zc = 0));
  }
}
function Hy(n, i) {
  const s = typeof n == "function",
    u = n,
    c = {
      _snapshot: s ? void 0 : n,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: s ? qt.None : qt.Mutable,
      get() {
        return (tn !== void 0 && jy(c, tn, Ar), c._snapshot);
      },
      subscribe(f) {
        const h = S2(f),
          m = { current: !1 },
          p = E2(() => {
            (c.get(), m.current ? h.next?.(c._snapshot) : (m.current = !0));
          });
        return {
          unsubscribe: () => {
            p.stop();
          },
        };
      },
      _update(f) {
        const h = tn,
          m = i?.compare ?? Object.is;
        if (s) ((tn = c), ++Ar, (c.depsTail = void 0));
        else if (f === void 0) return !1;
        s && (c.flags = qt.Mutable | qt.RecursedCheck);
        try {
          const p = c._snapshot,
            y = typeof f == "function" ? f(p) : f === void 0 && s ? u(p) : f;
          return p === void 0 || !m(p, y) ? ((c._snapshot = y), !0) : !1;
        } finally {
          ((tn = h), s && (c.flags &= ~qt.RecursedCheck), Lr(c));
        }
      },
    };
  return (
    s
      ? ((c.flags = qt.Mutable | qt.Dirty),
        (c.get = function () {
          const f = c.flags;
          if (f & qt.Dirty || (f & qt.Pending && $p(c.deps, c))) {
            if (c._update()) {
              const h = c.subs;
              h !== void 0 && By(h);
            }
          } else f & qt.Pending && (c.flags = f & ~qt.Pending);
          return (tn !== void 0 && jy(c, tn, Ar), c._snapshot);
        }))
      : (c.set = function (f) {
          if (c._update(f)) {
            const h = c.subs;
            h !== void 0 && (_2(h), By(h), tv());
          }
        }),
    c
  );
}
function E2(n) {
  const i = () => {
      const u = tn;
      ((tn = s),
        ++Ar,
        (s.depsTail = void 0),
        (s.flags = qt.Watching | qt.RecursedCheck));
      try {
        return n();
      } finally {
        ((tn = u), (s.flags &= ~qt.RecursedCheck), Lr(s));
      }
    },
    s = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: qt.Watching | qt.RecursedCheck,
      notify() {
        const u = this.flags;
        u & qt.Dirty || (u & qt.Pending && $p(this.deps, this))
          ? i()
          : (this.flags = qt.Watching);
      },
      stop() {
        ((this.flags = qt.None), (this.depsTail = void 0), Lr(this));
      },
    };
  return (i(), s);
}
var Sc = { exports: {} },
  bc = {},
  _c = { exports: {} },
  Ec = {};
var qy;
function R2() {
  if (qy) return Ec;
  qy = 1;
  var n = Zi();
  function i(v, _) {
    return (v === _ && (v !== 0 || 1 / v === 1 / _)) || (v !== v && _ !== _);
  }
  var s = typeof Object.is == "function" ? Object.is : i,
    u = n.useState,
    c = n.useEffect,
    f = n.useLayoutEffect,
    h = n.useDebugValue;
  function m(v, _) {
    var E = _(),
      A = u({ inst: { value: E, getSnapshot: _ } }),
      C = A[0].inst,
      R = A[1];
    return (
      f(
        function () {
          ((C.value = E), (C.getSnapshot = _), p(C) && R({ inst: C }));
        },
        [v, E, _],
      ),
      c(
        function () {
          return (
            p(C) && R({ inst: C }),
            v(function () {
              p(C) && R({ inst: C });
            })
          );
        },
        [v],
      ),
      h(E),
      E
    );
  }
  function p(v) {
    var _ = v.getSnapshot;
    v = v.value;
    try {
      var E = _();
      return !s(v, E);
    } catch {
      return !0;
    }
  }
  function y(v, _) {
    return _();
  }
  var S =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? y
      : m;
  return (
    (Ec.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : S),
    Ec
  );
}
var Yy;
function T2() {
  return (Yy || ((Yy = 1), (_c.exports = R2())), _c.exports);
}
var Qy;
function x2() {
  if (Qy) return bc;
  Qy = 1;
  var n = Zi(),
    i = T2();
  function s(y, S) {
    return (y === S && (y !== 0 || 1 / y === 1 / S)) || (y !== y && S !== S);
  }
  var u = typeof Object.is == "function" ? Object.is : s,
    c = i.useSyncExternalStore,
    f = n.useRef,
    h = n.useEffect,
    m = n.useMemo,
    p = n.useDebugValue;
  return (
    (bc.useSyncExternalStoreWithSelector = function (y, S, v, _, E) {
      var A = f(null);
      if (A.current === null) {
        var C = { hasValue: !1, value: null };
        A.current = C;
      } else C = A.current;
      A = m(
        function () {
          function w(J) {
            if (!q) {
              if (((q = !0), (Q = J), (J = _(J)), E !== void 0 && C.hasValue)) {
                var X = C.value;
                if (E(X, J)) return (H = X);
              }
              return (H = J);
            }
            if (((X = H), u(Q, J))) return X;
            var K = _(J);
            return E !== void 0 && E(X, K) ? ((Q = J), X) : ((Q = J), (H = K));
          }
          var q = !1,
            Q,
            H,
            F = v === void 0 ? null : v;
          return [
            function () {
              return w(S());
            },
            F === null
              ? void 0
              : function () {
                  return w(F());
                },
          ];
        },
        [S, v, _, E],
      );
      var R = c(y, A[0], A[1]);
      return (
        h(
          function () {
            ((C.hasValue = !0), (C.value = R));
          },
          [R],
        ),
        p(R),
        R
      );
    }),
    bc
  );
}
var Gy;
function A2() {
  return (Gy || ((Gy = 1), (Sc.exports = x2())), Sc.exports);
}
var M2 = A2();
function O2(n, i) {
  return n === i;
}
function Zt(n, i, s = O2) {
  const u = tt.useCallback(
      (h) => {
        if (!n) return () => {};
        const { unsubscribe: m } = n.subscribe(h);
        return m;
      },
      [n],
    ),
    c = tt.useCallback(() => n?.get(), [n]);
  return M2.useSyncExternalStoreWithSelector(u, c, c, i, s);
}
var w2 = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function Ha(n) {
  const i = ae(),
    s = tt.useContext(n.from ? v2 : Gr),
    u = n.from ?? s,
    c = u
      ? n.from
        ? i.stores.getRouteMatchStore(u)
        : i.stores.matchStores.get(u)
      : void 0,
    f = tt.useRef(void 0);
  return Zt(c ?? w2, (h) => {
    if (((n.shouldThrow ?? !0) && !h && Re(), h === void 0)) return;
    const m = n.select ? n.select(h) : h;
    if (n.structuralSharing ?? i.options.defaultStructuralSharing) {
      const p = aa(f.current, m);
      return ((f.current = p), p);
    }
    return m;
  });
}
function ev(n) {
  return Ha({
    from: n.from,
    strict: n.strict,
    structuralSharing: n.structuralSharing,
    select: (i) => (n.select ? n.select(i.loaderData) : i.loaderData),
  });
}
function nv(n) {
  const { select: i, ...s } = n;
  return Ha({ ...s, select: (u) => (i ? i(u.loaderDeps) : u.loaderDeps) });
}
function av(n) {
  return Ha({
    from: n.from,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    strict: n.strict,
    select: (i) => {
      const s = n.strict === !1 ? i.params : i._strictParams;
      return n.select ? n.select(s) : s;
    },
  });
}
function lv(n) {
  return Ha({
    from: n.from,
    strict: n.strict,
    shouldThrow: n.shouldThrow,
    structuralSharing: n.structuralSharing,
    select: (i) => (n.select ? n.select(i.search) : i.search),
  });
}
function iv(n) {
  const i = ae();
  return tt.useCallback(
    (s) => i.navigate({ ...s, from: s.from ?? n?.from }),
    [n?.from, i],
  );
}
function sv(n) {
  return Ha({
    ...n,
    select: (i) => (n.select ? n.select(i.context) : i.context),
  });
}
var C2 = ep();
function z2(n, i) {
  const s = ae(),
    u = c2(i),
    {
      activeProps: c,
      inactiveProps: f,
      activeOptions: h,
      to: m,
      preload: p,
      preloadDelay: y,
      preloadIntentProximity: S,
      hashScrollIntoView: v,
      replace: _,
      startTransition: E,
      resetScroll: A,
      viewTransition: C,
      children: R,
      target: w,
      disabled: q,
      style: Q,
      className: H,
      onClick: F,
      onBlur: J,
      onFocus: X,
      onMouseEnter: K,
      onMouseLeave: I,
      onTouchStart: st,
      ignoreBlocker: nt,
      params: mt,
      search: xt,
      hash: Gt,
      state: Nt,
      mask: j,
      reloadDocument: k,
      unsafeRelative: it,
      from: Et,
      _fromLocation: Tt,
      ...O
    } = n,
    G = Zc(),
    P = tt.useMemo(
      () => n,
      [
        s,
        n.from,
        n._fromLocation,
        n.hash,
        n.to,
        n.search,
        n.params,
        n.state,
        n.mask,
        n.unsafeRelative,
      ],
    ),
    $ = Zt(
      s.stores.location,
      (Ut) => Ut,
      (Ut, le) => Ut.href === le.href,
    ),
    at = tt.useMemo(() => {
      const Ut = { _fromLocation: $, ...P };
      return s.buildLocation(Ut);
    }, [s, $, P]),
    ft = at.maskedLocation ? at.maskedLocation.publicHref : at.publicHref,
    gt = at.maskedLocation ? at.maskedLocation.external : at.external,
    Vt = tt.useMemo(() => B2(ft, gt, s.history, q), [q, gt, ft, s.history]),
    zt = tt.useMemo(() => {
      if (Vt?.external)
        return Mr(Vt.href, s.protocolAllowlist) ? void 0 : Vt.href;
      if (!H2(m) && !(typeof m != "string" || m.indexOf(":") === -1))
        try {
          return (new URL(m), Mr(m, s.protocolAllowlist) ? void 0 : m);
        } catch {}
    }, [m, Vt, s.protocolAllowlist]),
    nn = tt.useMemo(() => {
      if (zt) return !1;
      if (h?.exact) {
        if (!ES($.pathname, at.pathname, s.basepath)) return !1;
      } else {
        const Ut = Or($.pathname, s.basepath),
          le = Or(at.pathname, s.basepath);
        if (
          !(
            Ut.startsWith(le) &&
            (Ut.length === le.length || Ut[le.length] === "/")
          )
        )
          return !1;
      }
      return (h?.includeSearch ?? !0) &&
        !_e($.search, at.search, {
          partial: !h?.exact,
          ignoreUndefined: !h?.explicitUndefined,
        })
        ? !1
        : h?.includeHash
          ? G && $.hash === at.hash
          : !0;
    }, [
      h?.exact,
      h?.explicitUndefined,
      h?.includeHash,
      h?.includeSearch,
      $,
      zt,
      G,
      at.hash,
      at.pathname,
      at.search,
      s.basepath,
    ]),
    an = nn ? (na(c, {}) ?? D2) : Rc,
    On = nn ? Rc : (na(f, {}) ?? Rc),
    Ul = [H, an.className, On.className].filter(Boolean).join(" "),
    Pe = (Q || an.style || On.style) && { ...Q, ...an.style, ...On.style },
    [Nl, Ya] = tt.useState(!1),
    $i = tt.useRef(!1),
    ln = n.reloadDocument || zt ? !1 : (p ?? s.options.defaultPreload),
    da = y ?? s.options.defaultPreloadDelay ?? 0,
    Ve = tt.useCallback(() => {
      s.preloadRoute({ ...P, _builtLocation: at }).catch((Ut) => {
        (console.warn(Ut), console.warn(l1));
      });
    }, [s, P, at]);
  (o2(
    u,
    tt.useCallback(
      (Ut) => {
        Ut?.isIntersecting && Ve();
      },
      [Ve],
    ),
    j2,
    { disabled: !!q || ln !== "viewport" },
  ),
    tt.useEffect(() => {
      $i.current || (!q && ln === "render" && (Ve(), ($i.current = !0)));
    }, [q, Ve, ln]));
  const jl = (Ut) => {
    const le = Ut.currentTarget.getAttribute("target"),
      Je = w !== void 0 ? w : le;
    if (
      !q &&
      !q2(Ut) &&
      !Ut.defaultPrevented &&
      (!Je || Je === "_self") &&
      Ut.button === 0
    ) {
      (Ut.preventDefault(),
        C2.flushSync(() => {
          Ya(!0);
        }));
      const Qa = s.subscribe("onResolved", () => {
        (Qa(), Ya(!1));
      });
      s.navigate({
        ...P,
        replace: _,
        resetScroll: A,
        hashScrollIntoView: v,
        startTransition: E,
        viewTransition: C,
        ignoreBlocker: nt,
      });
    }
  };
  if (zt)
    return {
      ...O,
      ref: u,
      href: zt,
      ...(R && { children: R }),
      ...(w && { target: w }),
      ...(q && { disabled: q }),
      ...(Q && { style: Q }),
      ...(H && { className: H }),
      ...(F && { onClick: F }),
      ...(J && { onBlur: J }),
      ...(X && { onFocus: X }),
      ...(K && { onMouseEnter: K }),
      ...(I && { onMouseLeave: I }),
      ...(st && { onTouchStart: st }),
    };
  const Wi = (Ut) => {
      if (q || ln !== "intent") return;
      if (!da) {
        Ve();
        return;
      }
      const le = Ut.currentTarget;
      if (ji.has(le)) return;
      const Je = setTimeout(() => {
        (ji.delete(le), Ve());
      }, da);
      ji.set(le, Je);
    },
    Kr = (Ut) => {
      q || ln !== "intent" || Ve();
    },
    ce = (Ut) => {
      if (q || !ln || !da) return;
      const le = Ut.currentTarget,
        Je = ji.get(le);
      Je && (clearTimeout(Je), ji.delete(le));
    };
  return {
    ...O,
    ...an,
    ...On,
    href: Vt?.href,
    ref: u,
    onClick: Al([F, jl]),
    onBlur: Al([J, ce]),
    onFocus: Al([X, Wi]),
    onMouseEnter: Al([K, Wi]),
    onMouseLeave: Al([I, ce]),
    onTouchStart: Al([st, Kr]),
    disabled: !!q,
    target: w,
    ...(Pe && { style: Pe }),
    ...(Ul && { className: Ul }),
    ...(q && L2),
    ...(nn && U2),
    ...(G && Nl && N2),
  };
}
var Rc = {},
  D2 = { className: "active" },
  L2 = { role: "link", "aria-disabled": !0 },
  U2 = { "data-status": "active", "aria-current": "page" },
  N2 = { "data-transitioning": "transitioning" },
  ji = new WeakMap(),
  j2 = { rootMargin: "100px" },
  Al = (n) => (i) => {
    for (const s of n)
      if (s) {
        if (i.defaultPrevented) return;
        s(i);
      }
  };
function B2(n, i, s, u) {
  if (!u)
    return i
      ? { href: n, external: !0 }
      : { href: s.createHref(n) || "/", external: !1 };
}
function H2(n) {
  if (typeof n != "string") return !1;
  const i = n.charCodeAt(0);
  return i === 47 ? n.charCodeAt(1) !== 47 : i === 46;
}
var Vr = tt.forwardRef((n, i) => {
  const { _asChild: s, ...u } = n,
    { type: c, ...f } = z2(u, i),
    h =
      typeof u.children == "function"
        ? u.children({ isActive: f["data-status"] === "active" })
        : u.children;
  if (!s) {
    const { disabled: m, ...p } = f;
    return tt.createElement("a", p, h);
  }
  return tt.createElement(s, f, h);
});
function q2(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
var Y2 = class extends yp {
  constructor(i) {
    (super(i),
      (this.useMatch = (s) =>
        Ha({
          select: s?.select,
          from: this.id,
          structuralSharing: s?.structuralSharing,
        })),
      (this.useRouteContext = (s) => sv({ ...s, from: this.id })),
      (this.useSearch = (s) =>
        lv({
          select: s?.select,
          structuralSharing: s?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (s) =>
        av({
          select: s?.select,
          structuralSharing: s?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (s) => nv({ ...s, from: this.id })),
      (this.useLoaderData = (s) => ev({ ...s, from: this.id })),
      (this.useNavigate = () => iv({ from: this.fullPath })),
      (this.Link = Hi.forwardRef((s, u) =>
        Z.jsx(Vr, { ref: u, from: this.fullPath, ...s }),
      )));
  }
};
function Q2(n) {
  return new Y2(n);
}
function G2() {
  return (n) => X2(n);
}
var V2 = class extends u1 {
  constructor(n) {
    (super(n),
      (this.useMatch = (i) =>
        Ha({
          select: i?.select,
          from: this.id,
          structuralSharing: i?.structuralSharing,
        })),
      (this.useRouteContext = (i) => sv({ ...i, from: this.id })),
      (this.useSearch = (i) =>
        lv({
          select: i?.select,
          structuralSharing: i?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (i) =>
        av({
          select: i?.select,
          structuralSharing: i?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (i) => nv({ ...i, from: this.id })),
      (this.useLoaderData = (i) => ev({ ...i, from: this.id })),
      (this.useNavigate = () => iv({ from: this.fullPath })),
      (this.Link = Hi.forwardRef((i, s) =>
        Z.jsx(Vr, { ref: s, from: this.fullPath, ...i }),
      )));
  }
};
function X2(n) {
  return new V2(n);
}
function Pi(n) {
  return new K2(n, { silent: !0 }).createRoute;
}
var K2 = class {
  constructor(n, i) {
    ((this.path = n),
      (this.createRoute = (s) => {
        const u = Q2(s);
        return ((u.isRoot = !1), u);
      }),
      (this.silent = i?.silent));
  }
};
function Ji(n, i) {
  let s, u, c, f;
  const h = () => (
      s ||
        (s = n()
          .then((p) => {
            ((s = void 0), (u = p[i]));
          })
          .catch((p) => {
            if (
              ((c = p),
              aS(c) &&
                c instanceof Error &&
                typeof window < "u" &&
                typeof sessionStorage < "u")
            ) {
              const y = `tanstack_router_reload:${c.message}`;
              sessionStorage.getItem(y) ||
                (sessionStorage.setItem(y, "1"), (f = !0));
            }
          })),
      s
    ),
    m = function (y) {
      if (f) throw (window.location.reload(), new Promise(() => {}));
      if (c) throw c;
      if (!u)
        if (Dr) Dr(h());
        else throw h();
      return tt.createElement(u, y);
    };
  return ((m.preload = h), m);
}
function Z2(n) {
  const i = ae(),
    s = `not-found-${Zt(i.stores.location, (u) => u.pathname)}-${Zt(i.stores.status, (u) => u)}`;
  return Z.jsx(Xc, {
    getResetKey: () => s,
    onCatch: (u, c) => {
      if (ne(u)) n.onCatch?.(u, c);
      else throw u;
    },
    errorComponent: ({ error: u }) => {
      if (ne(u)) return n.fallback?.(u);
      throw u;
    },
    children: n.children,
  });
}
function k2() {
  return Z.jsx("p", { children: "Not Found" });
}
function Ml(n) {
  return Z.jsx(Z.Fragment, { children: n.children });
}
function rv(n, i, s) {
  return i.options.notFoundComponent
    ? Z.jsx(i.options.notFoundComponent, { ...s })
    : n.options.defaultNotFoundComponent
      ? Z.jsx(n.options.defaultNotFoundComponent, { ...s })
      : Z.jsx(k2, {});
}
function P2(n) {
  return null;
}
function J2() {
  return (P2(ae()), null);
}
var uv = tt.memo(function ({ matchId: i }) {
  const s = ae(),
    u = s.stores.matchStores.get(i);
  u || Re();
  const c = Zt(s.stores.loadedAt, (h) => h),
    f = Zt(u, (h) => h);
  return Z.jsx(F2, {
    router: s,
    matchId: i,
    resetKey: c,
    matchState: tt.useMemo(() => {
      const h = f.routeId,
        m = s.routesById[h].parentRoute?.id;
      return {
        routeId: h,
        ssr: f.ssr,
        _displayPending: f._displayPending,
        parentRouteId: m,
      };
    }, [f._displayPending, f.routeId, f.ssr, s.routesById]),
  });
});
function F2({ router: n, matchId: i, resetKey: s, matchState: u }) {
  const c = n.routesById[u.routeId],
    f = c.options.pendingComponent ?? n.options.defaultPendingComponent,
    h = f ? Z.jsx(f, {}) : null,
    m = c.options.errorComponent ?? n.options.defaultErrorComponent,
    p = c.options.onCatch ?? n.options.defaultOnCatch,
    y = c.isRoot
      ? (c.options.notFoundComponent ??
        n.options.notFoundRoute?.options.component)
      : c.options.notFoundComponent,
    S = u.ssr === !1 || u.ssr === "data-only",
    v =
      (!c.isRoot || c.options.wrapInSuspense || S) &&
      (c.options.wrapInSuspense ??
        f ??
        (c.options.errorComponent?.preload || S))
        ? tt.Suspense
        : Ml,
    _ = m ? Xc : Ml,
    E = y ? Z2 : Ml;
  return Z.jsxs(c.isRoot ? (c.options.shellComponent ?? Ml) : Ml, {
    children: [
      Z.jsx(Gr.Provider, {
        value: i,
        children: Z.jsx(v, {
          fallback: h,
          children: Z.jsx(_, {
            getResetKey: () => s,
            errorComponent: m || Kc,
            onCatch: (A, C) => {
              if (ne(A)) throw ((A.routeId ??= u.routeId), A);
              p?.(A, C);
            },
            children: Z.jsx(E, {
              fallback: (A) => {
                if (
                  ((A.routeId ??= u.routeId),
                  !y ||
                    (A.routeId && A.routeId !== u.routeId) ||
                    (!A.routeId && !c.isRoot))
                )
                  throw A;
                return tt.createElement(y, A);
              },
              children:
                S || u._displayPending
                  ? Z.jsx(y2, {
                      fallback: h,
                      children: Z.jsx(Vy, { matchId: i }),
                    })
                  : Z.jsx(Vy, { matchId: i }),
            }),
          }),
        }),
      }),
      u.parentRouteId === Ua
        ? Z.jsxs(Z.Fragment, {
            children: [
              Z.jsx(I2, { resetKey: s }),
              n.options.scrollRestoration && ap ? Z.jsx(J2, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function I2({ resetKey: n }) {
  const i = ae(),
    s = tt.useRef(void 0);
  return (
    Bi(() => {
      const u = i.latestLocation.href;
      (s.current === void 0 || s.current !== u) &&
        (i.emit({
          type: "onRendered",
          ...Cl(i.stores.location.get(), i.stores.resolvedLocation.get()),
        }),
        (s.current = u));
    }, [i.latestLocation.state.__TSR_key, n, i]),
    null
  );
}
var Vy = tt.memo(function ({ matchId: i }) {
    const s = ae(),
      u = (S, v) => s.getMatch(S.id)?._nonReactive[v] ?? S._nonReactive[v],
      c = s.stores.matchStores.get(i);
    c || Re();
    const f = Zt(c, (S) => S),
      h = f.routeId,
      m = s.routesById[h],
      p = tt.useMemo(() => {
        const S = (
          s.routesById[h].options.remountDeps ?? s.options.defaultRemountDeps
        )?.({
          routeId: h,
          loaderDeps: f.loaderDeps,
          params: f._strictParams,
          search: f._strictSearch,
        });
        return S ? JSON.stringify(S) : void 0;
      }, [
        h,
        f.loaderDeps,
        f._strictParams,
        f._strictSearch,
        s.options.defaultRemountDeps,
        s.routesById,
      ]),
      y = tt.useMemo(() => {
        const S = m.options.component ?? s.options.defaultComponent;
        return S ? Z.jsx(S, {}, p) : Z.jsx(ov, {});
      }, [p, m.options.component, s.options.defaultComponent]);
    if (f._displayPending) throw u(f, "displayPendingPromise");
    if (f._forcePending) throw u(f, "minPendingPromise");
    if (f.status === "pending") {
      const S = m.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (S) {
        const v = s.getMatch(f.id);
        if (v && !v._nonReactive.minPendingPromise) {
          const _ = ja();
          ((v._nonReactive.minPendingPromise = _),
            setTimeout(() => {
              (_.resolve(), (v._nonReactive.minPendingPromise = void 0));
            }, S));
        }
      }
      throw u(f, "loadPromise");
    }
    if (f.status === "notFound")
      return (ne(f.error) || Re(), rv(s, m, f.error));
    if (f.status === "redirected")
      throw (Ee(f.error) || Re(), u(f, "loadPromise"));
    if (f.status === "error") throw f.error;
    return y;
  }),
  ov = tt.memo(function () {
    const i = ae(),
      s = tt.useContext(Gr);
    let u,
      c = !1,
      f;
    {
      const y = s ? i.stores.matchStores.get(s) : void 0;
      (([u, c] = Zt(y, (S) => [S?.routeId, S?.globalNotFound ?? !1])),
        (f = Zt(
          i.stores.matchesId,
          (S) => S[S.findIndex((v) => v === s) + 1],
        )));
    }
    const h = u ? i.routesById[u] : void 0,
      m = i.options.defaultPendingComponent
        ? Z.jsx(i.options.defaultPendingComponent, {})
        : null;
    if (c) return (h || Re(), rv(i, h, void 0));
    if (!f) return null;
    const p = Z.jsx(uv, { matchId: f });
    return u === Ua ? Z.jsx(tt.Suspense, { fallback: m, children: p }) : p;
  });
function $2() {
  const n = ae(),
    i = tt.useRef({ router: n, mounted: !1 }),
    [s, u] = tt.useState(!1),
    c = Zt(n.stores.isLoading, (v) => v),
    f = Zt(n.stores.hasPending, (v) => v),
    h = gc(c),
    m = c || s || f,
    p = gc(m),
    y = c || f,
    S = gc(y);
  return (
    (n.startTransition = (v) => {
      (u(!0),
        tt.startTransition(() => {
          (v(), u(!1));
        }));
    }),
    tt.useEffect(() => {
      const v = n.history.subscribe(n.load),
        _ = n.buildLocation({
          to: n.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        sa(n.latestLocation.publicHref) !== sa(_.publicHref) &&
          n.commitLocation({ ..._, replace: !0 }),
        () => {
          v();
        }
      );
    }, [n, n.history]),
    Bi(() => {
      if (
        (typeof window < "u" && n.ssr) ||
        (i.current.router === n && i.current.mounted)
      )
        return;
      ((i.current = { router: n, mounted: !0 }),
        (async () => {
          try {
            await n.load();
          } catch (_) {
            console.error(_);
          }
        })());
    }, [n]),
    Bi(() => {
      h &&
        !c &&
        n.emit({
          type: "onLoad",
          ...Cl(n.stores.location.get(), n.stores.resolvedLocation.get()),
        });
    }, [h, n, c]),
    Bi(() => {
      S &&
        !y &&
        n.emit({
          type: "onBeforeRouteMount",
          ...Cl(n.stores.location.get(), n.stores.resolvedLocation.get()),
        });
    }, [y, S, n]),
    Bi(() => {
      if (p && !m) {
        const v = Cl(n.stores.location.get(), n.stores.resolvedLocation.get());
        (n.emit({ type: "onResolved", ...v }),
          Wp(() => {
            (n.stores.status.set("idle"),
              n.stores.resolvedLocation.set(n.stores.location.get()));
          }),
          v.hrefChanged && o1(n));
      }
    }, [m, p, n]),
    null
  );
}
function W2() {
  const n = ae(),
    i =
      n.routesById[Ua].options.pendingComponent ??
      n.options.defaultPendingComponent,
    s = i ? Z.jsx(i, {}) : null,
    u = Z.jsxs(typeof document < "u" && n.ssr ? Ml : tt.Suspense, {
      fallback: s,
      children: [Z.jsx($2, {}), Z.jsx(tE, {})],
    });
  return n.options.InnerWrap ? Z.jsx(n.options.InnerWrap, { children: u }) : u;
}
function tE() {
  const n = ae(),
    i = Zt(n.stores.firstId, (c) => c),
    s = Zt(n.stores.loadedAt, (c) => c),
    u = i ? Z.jsx(uv, { matchId: i }) : null;
  return Z.jsx(Gr.Provider, {
    value: i,
    children: n.options.disableGlobalCatchBoundary
      ? u
      : Z.jsx(Xc, {
          getResetKey: () => s,
          errorComponent: Kc,
          onCatch: void 0,
          children: u,
        }),
  });
}
var eE = (n) => ({
    createMutableStore: Hy,
    createReadonlyStore: Hy,
    batch: Wp,
  }),
  nE = (n) => new aE(n),
  aE = class extends FS {
    constructor(n) {
      super(n, eE);
    }
  };
function lE({ router: n, children: i, ...s }) {
  Object.keys(s).length > 0 &&
    n.update({
      ...n.options,
      ...s,
      context: { ...n.options.context, ...s.context },
    });
  const u = Z.jsx(Ip.Provider, { value: n, children: i });
  return n.options.Wrap ? Z.jsx(n.options.Wrap, { children: u }) : u;
}
function iE({ router: n, ...i }) {
  return Z.jsx(lE, { router: n, ...i, children: Z.jsx(W2, {}) });
}
function sE(n) {
  const i = ae({ warn: n?.router === void 0 }),
    s = n?.router || i,
    u = tt.useRef(void 0);
  return Zt(s.stores.__store, (c) => {
    if (n?.select) {
      if (n.structuralSharing ?? s.options.defaultStructuralSharing) {
        const f = aa(u.current, n.select(c));
        return ((u.current = f), f);
      }
      return n.select(c);
    }
    return c;
  });
}
function cv(n) {
  const { attrs: i, children: s, nonce: u } = n;
  switch (n.tag) {
    case "title":
      return Z.jsx("title", {
        ...i,
        suppressHydrationWarning: !0,
        children: s,
      });
    case "meta":
      return Z.jsx("meta", { ...i, suppressHydrationWarning: !0 });
    case "link":
      return Z.jsx("link", {
        ...i,
        precedence:
          i?.precedence ?? (i?.rel === "stylesheet" ? "default" : void 0),
        nonce: u,
        suppressHydrationWarning: !0,
      });
    case "style":
      return (
        n.inlineCss,
        Z.jsx("style", {
          ...i,
          dangerouslySetInnerHTML: { __html: s },
          nonce: u,
        })
      );
    case "script":
      return Z.jsx(rE, { attrs: i, children: s });
    default:
      return null;
  }
}
function rE({ attrs: n, children: i }) {
  ae();
  const s = Zc(),
    u =
      typeof n?.type == "string" &&
      n.type !== "" &&
      n.type !== "text/javascript" &&
      n.type !== "module";
  if (
    (tt.useEffect(() => {
      if (!u) {
        if (n?.src) {
          const c = (() => {
            try {
              const h = document.baseURI || window.location.href;
              return new URL(n.src, h).href;
            } catch {
              return n.src;
            }
          })();
          if (
            Array.from(document.querySelectorAll("script[src]")).find(
              (h) => h.src === c,
            )
          )
            return;
          const f = document.createElement("script");
          for (const [h, m] of Object.entries(n))
            h !== "suppressHydrationWarning" &&
              m !== void 0 &&
              m !== !1 &&
              f.setAttribute(h, typeof m == "boolean" ? "" : String(m));
          return (
            document.head.appendChild(f),
            () => {
              f.parentNode && f.parentNode.removeChild(f);
            }
          );
        }
        if (typeof i == "string") {
          const c = typeof n?.type == "string" ? n.type : "text/javascript",
            f = typeof n?.nonce == "string" ? n.nonce : void 0;
          if (
            Array.from(document.querySelectorAll("script:not([src])")).find(
              (m) => {
                if (!(m instanceof HTMLScriptElement)) return !1;
                const p = m.getAttribute("type") ?? "text/javascript",
                  y = m.getAttribute("nonce") ?? void 0;
                return m.textContent === i && p === c && y === f;
              },
            )
          )
            return;
          const h = document.createElement("script");
          if (((h.textContent = i), n))
            for (const [m, p] of Object.entries(n))
              m !== "suppressHydrationWarning" &&
                p !== void 0 &&
                p !== !1 &&
                h.setAttribute(m, typeof p == "boolean" ? "" : String(p));
          return (
            document.head.appendChild(h),
            () => {
              h.parentNode && h.parentNode.removeChild(h);
            }
          );
        }
      }
    }, [n, i, u]),
    u && typeof i == "string")
  )
    return Z.jsx("script", {
      ...n,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: i },
    });
  if (!s) {
    if (n?.src) return Z.jsx("script", { ...n, suppressHydrationWarning: !0 });
    if (typeof i == "string")
      return Z.jsx("script", {
        ...n,
        dangerouslySetInnerHTML: { __html: i },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var uE = (n) => {
  const i = ae(),
    s = i.options.ssr?.nonce,
    u = Zt(i.stores.matches, (y) => y.map((S) => S.meta).filter(Boolean), _e),
    c = tt.useMemo(() => {
      const y = [],
        S = {};
      let v;
      for (let _ = u.length - 1; _ >= 0; _--) {
        const E = u[_];
        for (let A = E.length - 1; A >= 0; A--) {
          const C = E[A];
          if (C)
            if (C.title) v || (v = { tag: "title", children: C.title });
            else if ("script:ld+json" in C)
              try {
                const R = JSON.stringify(C["script:ld+json"]);
                y.push({
                  tag: "script",
                  attrs: { type: "application/ld+json" },
                  children: uS(R),
                });
              } catch {}
            else {
              const R = C.name ?? C.property;
              if (R) {
                if (S[R]) continue;
                S[R] = !0;
              }
              y.push({ tag: "meta", attrs: { ...C, nonce: s } });
            }
        }
      }
      return (
        v && y.push(v),
        s &&
          y.push({ tag: "meta", attrs: { property: "csp-nonce", content: s } }),
        y.reverse(),
        y
      );
    }, [u, s]),
    f = Zt(
      i.stores.matches,
      (y) => {
        const S = y
            .map((E) => E.links)
            .filter(Boolean)
            .flat(1)
            .map((E) => ({ tag: "link", attrs: { ...E, nonce: s } })),
          v = i.ssr?.manifest,
          _ = y
            .map((E) => v?.routes[E.routeId]?.assets ?? [])
            .filter(Boolean)
            .flat(1)
            .flatMap((E) =>
              E.tag === "link"
                ? r1(v, E)
                  ? []
                  : [
                      {
                        tag: "link",
                        attrs: {
                          ...E.attrs,
                          crossOrigin:
                            Ey(n, "stylesheet") ?? E.attrs?.crossOrigin,
                          suppressHydrationWarning: !0,
                          nonce: s,
                        },
                      },
                    ]
                : E.tag === "style"
                  ? [
                      {
                        tag: "style",
                        attrs: { ...E.attrs, nonce: s },
                        children: E.children,
                        ...(E.inlineCss ? { inlineCss: !0 } : {}),
                      },
                    ]
                  : [],
            );
        return [...S, ..._];
      },
      _e,
    ),
    h = Zt(
      i.stores.matches,
      (y) => {
        const S = [];
        return (
          y
            .map((v) => i.looseRoutesById[v.routeId])
            .forEach((v) =>
              i.ssr?.manifest?.routes[v.id]?.preloads
                ?.filter(Boolean)
                .forEach((_) => {
                  const E = i1(_);
                  S.push({
                    tag: "link",
                    attrs: {
                      rel: "modulepreload",
                      href: E.href,
                      crossOrigin: Ey(n, "modulepreload") ?? E.crossOrigin,
                      nonce: s,
                    },
                  });
                }),
            ),
          S
        );
      },
      _e,
    ),
    m = Zt(
      i.stores.matches,
      (y) =>
        y
          .map((S) => S.styles)
          .flat(1)
          .filter(Boolean)
          .map(({ children: S, ...v }) => ({
            tag: "style",
            attrs: { ...v, nonce: s },
            children: S,
          })),
      _e,
    ),
    p = Zt(
      i.stores.matches,
      (y) =>
        y
          .map((S) => S.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: S, ...v }) => ({
            tag: "script",
            attrs: { ...v, nonce: s },
            children: S,
          })),
      _e,
    );
  return oE([...c, ...h, ...f, ...m, ...p], (y) => JSON.stringify(y));
};
function oE(n, i) {
  const s = new Set();
  return n.filter((u) => {
    const c = i(u);
    return s.has(c) ? !1 : (s.add(c), !0);
  });
}
function cE(n) {
  const i = uE(n.assetCrossOrigin),
    s = ae().options.ssr?.nonce;
  return Z.jsx(Z.Fragment, {
    children: i.map((u) =>
      tt.createElement(cv, {
        ...u,
        key: `tsr-meta-${JSON.stringify(u)}`,
        nonce: s,
      }),
    ),
  });
}
var fE = () => {
  const n = ae(),
    i = n.options.ssr?.nonce,
    s = (f) => {
      const h = [],
        m = n.ssr?.manifest;
      return m
        ? (f
            .map((p) => n.looseRoutesById[p.routeId])
            .forEach((p) =>
              m.routes[p.id]?.assets
                ?.filter((y) => y.tag === "script")
                .forEach((y) => {
                  h.push({
                    tag: "script",
                    attrs: { ...y.attrs, nonce: i },
                    children: y.children,
                  });
                }),
            ),
          h)
        : [];
    },
    u = (f) =>
      f
        .map((h) => h.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: h, ...m }) => ({
          tag: "script",
          attrs: { ...m, suppressHydrationWarning: !0, nonce: i },
          children: h,
        })),
    c = Zt(n.stores.matches, s, _e);
  return dE(n, Zt(n.stores.matches, u, _e), c);
};
function dE(n, i, s) {
  let u;
  n.serverSsr && (u = n.serverSsr.takeBufferedScripts());
  const c = [...i, ...s];
  return (
    u && c.unshift(u),
    Z.jsx(Z.Fragment, {
      children: c.map((f, h) =>
        tt.createElement(cv, { ...f, key: `tsr-scripts-${f.tag}-${h}` }),
      ),
    })
  );
}
var wl = (n, i) => {
  const s = { type: "request", ...(i || n) };
  return {
    options: s,
    middleware: (u) => wl({}, Object.assign(s, { middleware: u })),
    inputValidator: (u) => wl({}, Object.assign(s, { inputValidator: u })),
    client: (u) => wl({}, Object.assign(s, { client: u })),
    server: (u) => wl({}, Object.assign(s, { server: u })),
  };
};
function fv(n, i) {
  for (let s = 0, u = i.length; s < u; s++) {
    const c = i[s];
    n.has(c) || (n.add(c), c.extends && fv(n, c.extends));
  }
}
var hE = (n) => ({
  getOptions: async () => {
    const i = await n();
    if (i.serializationAdapters) {
      const s = new Set();
      (fv(s, i.serializationAdapters),
        (i.serializationAdapters = Array.from(s)));
    }
    return i;
  },
  createMiddleware: wl,
});
const mE = wl(),
  Xy = hE(() => ({ requestMiddleware: [mE] }));
var Xr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(n), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  yE = class extends Xr {
    #t;
    #n;
    #e;
    constructor() {
      (super(),
        (this.#e = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => n();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(n) {
      ((this.#e = n),
        this.#n?.(),
        (this.#n = n((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        })));
    }
    setFocused(n) {
      this.#t !== n && ((this.#t = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((i) => {
        i(n);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  dv = new yE(),
  pE = {
    setTimeout: (n, i) => setTimeout(n, i),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, i) => setInterval(n, i),
    clearInterval: (n) => clearInterval(n),
  },
  vE = class {
    #t = pE;
    #n = !1;
    setTimeoutProvider(n) {
      this.#t = n;
    }
    setTimeout(n, i) {
      return this.#t.setTimeout(n, i);
    }
    clearTimeout(n) {
      this.#t.clearTimeout(n);
    }
    setInterval(n, i) {
      return this.#t.setInterval(n, i);
    }
    clearInterval(n) {
      this.#t.clearInterval(n);
    }
  },
  Lc = new vE();
function gE(n) {
  setTimeout(n, 0);
}
var SE = typeof window > "u" || "Deno" in globalThis;
function ke() {}
function bE(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function _E(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function EE(n, i) {
  return Math.max(n + (i || 0) - Date.now(), 0);
}
function Uc(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function RE(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function Ky(n, i) {
  const {
    type: s = "all",
    exact: u,
    fetchStatus: c,
    predicate: f,
    queryKey: h,
    stale: m,
  } = n;
  if (h) {
    if (u) {
      if (i.queryHash !== kc(h, i.options)) return !1;
    } else if (!Ki(i.queryKey, h)) return !1;
  }
  if (s !== "all") {
    const p = i.isActive();
    if ((s === "active" && !p) || (s === "inactive" && p)) return !1;
  }
  return !(
    (typeof m == "boolean" && i.isStale() !== m) ||
    (c && c !== i.state.fetchStatus) ||
    (f && !f(i))
  );
}
function Zy(n, i) {
  const { exact: s, status: u, predicate: c, mutationKey: f } = n;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (s) {
      if (Xi(i.options.mutationKey) !== Xi(f)) return !1;
    } else if (!Ki(i.options.mutationKey, f)) return !1;
  }
  return !((u && i.state.status !== u) || (c && !c(i)));
}
function kc(n, i) {
  return (i?.queryKeyHashFn || Xi)(n);
}
function Xi(n) {
  return JSON.stringify(n, (i, s) =>
    Nc(s)
      ? Object.keys(s)
          .sort()
          .reduce((u, c) => ((u[c] = s[c]), u), {})
      : s,
  );
}
function Ki(n, i) {
  return n === i
    ? !0
    : typeof n != typeof i
      ? !1
      : n && i && typeof n == "object" && typeof i == "object"
        ? Object.keys(i).every((s) => Ki(n[s], i[s]))
        : !1;
}
var TE = Object.prototype.hasOwnProperty;
function hv(n, i, s = 0) {
  if (n === i) return n;
  if (s > 500) return i;
  const u = ky(n) && ky(i);
  if (!u && !(Nc(n) && Nc(i))) return i;
  const f = (u ? n : Object.keys(n)).length,
    h = u ? i : Object.keys(i),
    m = h.length,
    p = u ? new Array(m) : {};
  let y = 0;
  for (let S = 0; S < m; S++) {
    const v = u ? S : h[S],
      _ = n[v],
      E = i[v];
    if (_ === E) {
      ((p[v] = _), (u ? S < f : TE.call(n, v)) && y++);
      continue;
    }
    if (
      _ === null ||
      E === null ||
      typeof _ != "object" ||
      typeof E != "object"
    ) {
      p[v] = E;
      continue;
    }
    const A = hv(_, E, s + 1);
    ((p[v] = A), A === _ && y++);
  }
  return f === m && y === f ? n : p;
}
function ky(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Nc(n) {
  if (!Py(n)) return !1;
  const i = n.constructor;
  if (i === void 0) return !0;
  const s = i.prototype;
  return !(
    !Py(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Py(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function xE(n) {
  return new Promise((i) => {
    Lc.setTimeout(i, n);
  });
}
function AE(n, i, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, i)
    : s.structuralSharing !== !1
      ? hv(n, i)
      : i;
}
function ME(n, i, s = 0) {
  const u = [...n, i];
  return s && u.length > s ? u.slice(1) : u;
}
function OE(n, i, s = 0) {
  const u = [i, ...n];
  return s && u.length > s ? u.slice(0, -1) : u;
}
var Pc = Symbol();
function mv(n, i) {
  return !n.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !n.queryFn || n.queryFn === Pc
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
function wE(n, i, s) {
  let u = !1,
    c;
  return (
    Object.defineProperty(n, "signal", {
      enumerable: !0,
      get: () => (
        (c ??= i()),
        u ||
          ((u = !0),
          c.aborted ? s() : c.addEventListener("abort", s, { once: !0 })),
        c
      ),
    }),
    n
  );
}
var yv = (() => {
  let n = () => SE;
  return {
    isServer() {
      return n();
    },
    setIsServer(i) {
      n = i;
    },
  };
})();
function CE() {
  let n, i;
  const s = new Promise((c, f) => {
    ((n = c), (i = f));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function u(c) {
    (Object.assign(s, c), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (c) => {
      (u({ status: "fulfilled", value: c }), n(c));
    }),
    (s.reject = (c) => {
      (u({ status: "rejected", reason: c }), i(c));
    }),
    s
  );
}
var zE = gE;
function DE() {
  let n = [],
    i = 0,
    s = (m) => {
      m();
    },
    u = (m) => {
      m();
    },
    c = zE;
  const f = (m) => {
      i
        ? n.push(m)
        : c(() => {
            s(m);
          });
    },
    h = () => {
      const m = n;
      ((n = []),
        m.length &&
          c(() => {
            u(() => {
              m.forEach((p) => {
                s(p);
              });
            });
          }));
    };
  return {
    batch: (m) => {
      let p;
      i++;
      try {
        p = m();
      } finally {
        (i--, i || h());
      }
      return p;
    },
    batchCalls:
      (m) =>
      (...p) => {
        f(() => {
          m(...p);
        });
      },
    schedule: f,
    setNotifyFunction: (m) => {
      s = m;
    },
    setBatchNotifyFunction: (m) => {
      u = m;
    },
    setScheduler: (m) => {
      c = m;
    },
  };
}
var he = DE(),
  LE = class extends Xr {
    #t = !0;
    #n;
    #e;
    constructor() {
      (super(),
        (this.#e = (n) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", i),
                  window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(n) {
      ((this.#e = n), this.#n?.(), (this.#n = n(this.setOnline.bind(this))));
    }
    setOnline(n) {
      this.#t !== n &&
        ((this.#t = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  Ur = new LE();
function UE(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function pv(n) {
  return (n ?? "online") === "online" ? Ur.isOnline() : !0;
}
var jc = class extends Error {
  constructor(n) {
    (super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent));
  }
};
function vv(n) {
  let i = !1,
    s = 0,
    u;
  const c = CE(),
    f = () => c.status !== "pending",
    h = (C) => {
      if (!f()) {
        const R = new jc(C);
        (_(R), n.onCancel?.(R));
      }
    },
    m = () => {
      i = !0;
    },
    p = () => {
      i = !1;
    },
    y = () =>
      dv.isFocused() &&
      (n.networkMode === "always" || Ur.isOnline()) &&
      n.canRun(),
    S = () => pv(n.networkMode) && n.canRun(),
    v = (C) => {
      f() || (u?.(), c.resolve(C));
    },
    _ = (C) => {
      f() || (u?.(), c.reject(C));
    },
    E = () =>
      new Promise((C) => {
        ((u = (R) => {
          (f() || y()) && C(R);
        }),
          n.onPause?.());
      }).then(() => {
        ((u = void 0), f() || n.onContinue?.());
      }),
    A = () => {
      if (f()) return;
      let C;
      const R = s === 0 ? n.initialPromise : void 0;
      try {
        C = R ?? n.fn();
      } catch (w) {
        C = Promise.reject(w);
      }
      Promise.resolve(C)
        .then(v)
        .catch((w) => {
          if (f()) return;
          const q = n.retry ?? (yv.isServer() ? 0 : 3),
            Q = n.retryDelay ?? UE,
            H = typeof Q == "function" ? Q(s, w) : Q,
            F =
              q === !0 ||
              (typeof q == "number" && s < q) ||
              (typeof q == "function" && q(s, w));
          if (i || !F) {
            _(w);
            return;
          }
          (s++,
            n.onFail?.(s, w),
            xE(H)
              .then(() => (y() ? void 0 : E()))
              .then(() => {
                i ? _(w) : A();
              }));
        });
    };
  return {
    promise: c,
    status: () => c.status,
    cancel: h,
    continue: () => (u?.(), c),
    cancelRetry: m,
    continueRetry: p,
    canStart: S,
    start: () => (S() ? A() : E().then(A), c),
  };
}
var gv = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        _E(this.gcTime) &&
          (this.#t = Lc.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        n ?? (yv.isServer() ? 1 / 0 : 300 * 1e3),
      );
    }
    clearGcTimeout() {
      this.#t !== void 0 && (Lc.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  NE = class extends gv {
    #t;
    #n;
    #e;
    #l;
    #a;
    #i;
    #s;
    constructor(n) {
      (super(),
        (this.#s = !1),
        (this.#i = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#l = n.client),
        (this.#e = this.#l.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#t = Fy(this.options)),
        (this.state = n.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(n) {
      if (
        ((this.options = { ...this.#i, ...n }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const i = Fy(this.options);
        i.data !== void 0 &&
          (this.setState(Jy(i.data, i.dataUpdatedAt)), (this.#t = i));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#e.remove(this);
    }
    setData(n, i) {
      const s = AE(this.state.data, n, this.options);
      return (
        this.#r({
          data: s,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        s
      );
    }
    setState(n, i) {
      this.#r({ type: "setState", state: n, setStateOptions: i });
    }
    cancel(n) {
      const i = this.#a?.promise;
      return (this.#a?.cancel(n), i ? i.then(ke).catch(ke) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    get resetState() {
      return this.#t;
    }
    reset() {
      (this.destroy(), this.setState(this.resetState));
    }
    isActive() {
      return this.observers.some((n) => RE(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Pc || !this.isFetched();
    }
    isFetched() {
      return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => Uc(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !EE(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      (this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    onOnline() {
      (this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#e.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((i) => i !== n)),
        this.observers.length ||
          (this.#a &&
            (this.#s || this.#u()
              ? this.#a.cancel({ revert: !0 })
              : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#e.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    #u() {
      return (
        this.state.fetchStatus === "paused" && this.state.status === "pending"
      );
    }
    invalidate() {
      this.state.isInvalidated || this.#r({ type: "invalidate" });
    }
    async fetch(n, i) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const m = this.observers.find((p) => p.options.queryFn);
        m && this.setOptions(m.options);
      }
      const s = new AbortController(),
        u = (m) => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => ((this.#s = !0), s.signal),
          });
        },
        c = () => {
          const m = mv(this.options, i),
            y = (() => {
              const S = {
                client: this.#l,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (u(S), S);
            })();
          return (
            (this.#s = !1),
            this.options.persister ? this.options.persister(m, y, this) : m(y)
          );
        },
        h = (() => {
          const m = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#l,
            state: this.state,
            fetchFn: c,
          };
          return (u(m), m);
        })();
      (this.options.behavior?.onFetch(h, this),
        (this.#n = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== h.fetchOptions?.meta) &&
          this.#r({ type: "fetch", meta: h.fetchOptions?.meta }),
        (this.#a = vv({
          initialPromise: i?.initialPromise,
          fn: h.fetchFn,
          onCancel: (m) => {
            (m instanceof jc &&
              m.revert &&
              this.setState({ ...this.#n, fetchStatus: "idle" }),
              s.abort());
          },
          onFail: (m, p) => {
            this.#r({ type: "failed", failureCount: m, error: p });
          },
          onPause: () => {
            this.#r({ type: "pause" });
          },
          onContinue: () => {
            this.#r({ type: "continue" });
          },
          retry: h.options.retry,
          retryDelay: h.options.retryDelay,
          networkMode: h.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const m = await this.#a.start();
        if (m === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(m),
          this.#e.config.onSuccess?.(m, this),
          this.#e.config.onSettled?.(m, this.state.error, this),
          m
        );
      } catch (m) {
        if (m instanceof jc) {
          if (m.silent) return this.#a.promise;
          if (m.revert) {
            if (this.state.data === void 0) throw m;
            return this.state.data;
          }
        }
        throw (
          this.#r({ type: "error", error: m }),
          this.#e.config.onError?.(m, this),
          this.#e.config.onSettled?.(this.state.data, m, this),
          m
        );
      } finally {
        this.scheduleGc();
      }
    }
    #r(n) {
      const i = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...jE(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            const u = {
              ...s,
              ...Jy(n.data, n.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#n = n.manual ? u : void 0), u);
          case "error":
            const c = n.error;
            return {
              ...s,
              error: c,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: c,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      ((this.state = i(this.state)),
        he.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#e.notify({ query: this, type: "updated", action: n }));
        }));
    }
  };
function jE(n, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: pv(i.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function Jy(n, i) {
  return {
    data: n,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Fy(n) {
  const i =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = i !== void 0,
    u = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (u ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function Iy(n) {
  return {
    onFetch: (i, s) => {
      const u = i.options,
        c = i.fetchOptions?.meta?.fetchMore?.direction,
        f = i.state.data?.pages || [],
        h = i.state.data?.pageParams || [];
      let m = { pages: [], pageParams: [] },
        p = 0;
      const y = async () => {
        let S = !1;
        const v = (A) => {
            wE(
              A,
              () => i.signal,
              () => (S = !0),
            );
          },
          _ = mv(i.options, i.fetchOptions),
          E = async (A, C, R) => {
            if (S) return Promise.reject();
            if (C == null && A.pages.length) return Promise.resolve(A);
            const q = (() => {
                const J = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: C,
                  direction: R ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return (v(J), J);
              })(),
              Q = await _(q),
              { maxPages: H } = i.options,
              F = R ? OE : ME;
            return {
              pages: F(A.pages, Q, H),
              pageParams: F(A.pageParams, C, H),
            };
          };
        if (c && f.length) {
          const A = c === "backward",
            C = A ? BE : $y,
            R = { pages: f, pageParams: h },
            w = C(u, R);
          m = await E(R, w, A);
        } else {
          const A = n ?? f.length;
          do {
            const C = p === 0 ? (h[0] ?? u.initialPageParam) : $y(u, m);
            if (p > 0 && C == null) break;
            ((m = await E(m, C)), p++);
          } while (p < A);
        }
        return m;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              y,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              s,
            ))
        : (i.fetchFn = y);
    },
  };
}
function $y(n, { pages: i, pageParams: s }) {
  const u = i.length - 1;
  return i.length > 0 ? n.getNextPageParam(i[u], i, s[u], s) : void 0;
}
function BE(n, { pages: i, pageParams: s }) {
  return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, s[0], s) : void 0;
}
var HE = class extends gv {
  #t;
  #n;
  #e;
  #l;
  constructor(n) {
    (super(),
      (this.#t = n.client),
      (this.mutationId = n.mutationId),
      (this.#e = n.mutationCache),
      (this.#n = []),
      (this.state = n.state || qE()),
      this.setOptions(n.options),
      this.scheduleGc());
  }
  setOptions(n) {
    ((this.options = n), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    this.#n.includes(n) ||
      (this.#n.push(n),
      this.clearGcTimeout(),
      this.#e.notify({ type: "observerAdded", mutation: this, observer: n }));
  }
  removeObserver(n) {
    ((this.#n = this.#n.filter((i) => i !== n)),
      this.scheduleGc(),
      this.#e.notify({ type: "observerRemoved", mutation: this, observer: n }));
  }
  optionalRemove() {
    this.#n.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#e.remove(this));
  }
  continue() {
    return this.#l?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const i = () => {
        this.#a({ type: "continue" });
      },
      s = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#l = vv({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (f, h) => {
        this.#a({ type: "failed", failureCount: f, error: h });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this),
    });
    const u = this.state.status === "pending",
      c = !this.#l.canStart();
    try {
      if (u) i();
      else {
        (this.#a({ type: "pending", variables: n, isPaused: c }),
          this.#e.config.onMutate &&
            (await this.#e.config.onMutate(n, this, s)));
        const h = await this.options.onMutate?.(n, s);
        h !== this.state.context &&
          this.#a({ type: "pending", context: h, variables: n, isPaused: c });
      }
      const f = await this.#l.start();
      return (
        await this.#e.config.onSuccess?.(f, n, this.state.context, this, s),
        await this.options.onSuccess?.(f, n, this.state.context, s),
        await this.#e.config.onSettled?.(
          f,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(f, null, n, this.state.context, s),
        this.#a({ type: "success", data: f }),
        f
      );
    } catch (f) {
      try {
        await this.#e.config.onError?.(f, n, this.state.context, this, s);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onError?.(f, n, this.state.context, s);
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.#e.config.onSettled?.(
          void 0,
          f,
          this.state.variables,
          this.state.context,
          this,
          s,
        );
      } catch (h) {
        Promise.reject(h);
      }
      try {
        await this.options.onSettled?.(void 0, f, n, this.state.context, s);
      } catch (h) {
        Promise.reject(h);
      }
      throw (this.#a({ type: "error", error: f }), f);
    } finally {
      this.#e.runNext(this);
    }
  }
  #a(n) {
    const i = (s) => {
      switch (n.type) {
        case "failed":
          return { ...s, failureCount: n.failureCount, failureReason: n.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: n.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: n.isPaused,
            status: "pending",
            variables: n.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: n.error,
            failureCount: s.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = i(this.state)),
      he.batch(() => {
        (this.#n.forEach((s) => {
          s.onMutationUpdate(n);
        }),
          this.#e.notify({ mutation: this, type: "updated", action: n }));
      }));
  }
};
function qE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var YE = class extends Xr {
  constructor(n = {}) {
    (super(),
      (this.config = n),
      (this.#t = new Set()),
      (this.#n = new Map()),
      (this.#e = 0));
  }
  #t;
  #n;
  #e;
  build(n, i, s) {
    const u = new HE({
      client: n,
      mutationCache: this,
      mutationId: ++this.#e,
      options: n.defaultMutationOptions(i),
      state: s,
    });
    return (this.add(u), u);
  }
  add(n) {
    this.#t.add(n);
    const i = _r(n);
    if (typeof i == "string") {
      const s = this.#n.get(i);
      s ? s.push(n) : this.#n.set(i, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#t.delete(n)) {
      const i = _r(n);
      if (typeof i == "string") {
        const s = this.#n.get(i);
        if (s)
          if (s.length > 1) {
            const u = s.indexOf(n);
            u !== -1 && s.splice(u, 1);
          } else s[0] === n && this.#n.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const i = _r(n);
    if (typeof i == "string") {
      const u = this.#n.get(i)?.find((c) => c.state.status === "pending");
      return !u || u === n;
    } else return !0;
  }
  runNext(n) {
    const i = _r(n);
    return typeof i == "string"
      ? (this.#n
          .get(i)
          ?.find((u) => u !== n && u.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    he.batch(() => {
      (this.#t.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#t.clear(),
        this.#n.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(n) {
    const i = { exact: !0, ...n };
    return this.getAll().find((s) => Zy(i, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((i) => Zy(n, i));
  }
  notify(n) {
    he.batch(() => {
      this.listeners.forEach((i) => {
        i(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((i) => i.state.isPaused);
    return he.batch(() => Promise.all(n.map((i) => i.continue().catch(ke))));
  }
};
function _r(n) {
  return n.options.scope?.id;
}
var QE = class extends Xr {
    constructor(n = {}) {
      (super(), (this.config = n), (this.#t = new Map()));
    }
    #t;
    build(n, i, s) {
      const u = i.queryKey,
        c = i.queryHash ?? kc(u, i);
      let f = this.get(c);
      return (
        f ||
          ((f = new NE({
            client: n,
            queryKey: u,
            queryHash: c,
            options: n.defaultQueryOptions(i),
            state: s,
            defaultOptions: n.getQueryDefaults(u),
          })),
          this.add(f)),
        f
      );
    }
    add(n) {
      this.#t.has(n.queryHash) ||
        (this.#t.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const i = this.#t.get(n.queryHash);
      i &&
        (n.destroy(),
        i === n && this.#t.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      he.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#t.get(n);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(n) {
      const i = { exact: !0, ...n };
      return this.getAll().find((s) => Ky(i, s));
    }
    findAll(n = {}) {
      const i = this.getAll();
      return Object.keys(n).length > 0 ? i.filter((s) => Ky(n, s)) : i;
    }
    notify(n) {
      he.batch(() => {
        this.listeners.forEach((i) => {
          i(n);
        });
      });
    }
    onFocus() {
      he.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      he.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  GE = class {
    #t;
    #n;
    #e;
    #l;
    #a;
    #i;
    #s;
    #u;
    constructor(n = {}) {
      ((this.#t = n.queryCache || new QE()),
        (this.#n = n.mutationCache || new YE()),
        (this.#e = n.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#a = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#s = dv.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#u = Ur.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#s?.(), (this.#s = void 0), this.#u?.(), (this.#u = void 0)));
    }
    isFetching(n) {
      return this.#t.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#n.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(i.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const i = this.defaultQueryOptions(n),
        s = this.#t.build(this, i),
        u = s.state.data;
      return u === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            s.isStaleByTime(Uc(i.staleTime, s)) &&
            this.prefetchQuery(i),
          Promise.resolve(u));
    }
    getQueriesData(n) {
      return this.#t.findAll(n).map(({ queryKey: i, state: s }) => {
        const u = s.data;
        return [i, u];
      });
    }
    setQueryData(n, i, s) {
      const u = this.defaultQueryOptions({ queryKey: n }),
        f = this.#t.get(u.queryHash)?.state.data,
        h = bE(i, f);
      if (h !== void 0)
        return this.#t.build(this, u).setData(h, { ...s, manual: !0 });
    }
    setQueriesData(n, i, s) {
      return he.batch(() =>
        this.#t
          .findAll(n)
          .map(({ queryKey: u }) => [u, this.setQueryData(u, i, s)]),
      );
    }
    getQueryState(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#t.get(i.queryHash)?.state;
    }
    removeQueries(n) {
      const i = this.#t;
      he.batch(() => {
        i.findAll(n).forEach((s) => {
          i.remove(s);
        });
      });
    }
    resetQueries(n, i) {
      const s = this.#t;
      return he.batch(
        () => (
          s.findAll(n).forEach((u) => {
            u.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, i)
        ),
      );
    }
    cancelQueries(n, i = {}) {
      const s = { revert: !0, ...i },
        u = he.batch(() => this.#t.findAll(n).map((c) => c.cancel(s)));
      return Promise.all(u).then(ke).catch(ke);
    }
    invalidateQueries(n, i = {}) {
      return he.batch(
        () => (
          this.#t.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                i,
              )
        ),
      );
    }
    refetchQueries(n, i = {}) {
      const s = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        u = he.batch(() =>
          this.#t
            .findAll(n)
            .filter((c) => !c.isDisabled() && !c.isStatic())
            .map((c) => {
              let f = c.fetch(void 0, s);
              return (
                s.throwOnError || (f = f.catch(ke)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            }),
        );
      return Promise.all(u).then(ke);
    }
    fetchQuery(n) {
      const i = this.defaultQueryOptions(n);
      i.retry === void 0 && (i.retry = !1);
      const s = this.#t.build(this, i);
      return s.isStaleByTime(Uc(i.staleTime, s))
        ? s.fetch(i)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(ke).catch(ke);
    }
    fetchInfiniteQuery(n) {
      return ((n.behavior = Iy(n.pages)), this.fetchQuery(n));
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(ke).catch(ke);
    }
    ensureInfiniteQueryData(n) {
      return ((n.behavior = Iy(n.pages)), this.ensureQueryData(n));
    }
    resumePausedMutations() {
      return Ur.isOnline()
        ? this.#n.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#n;
    }
    getDefaultOptions() {
      return this.#e;
    }
    setDefaultOptions(n) {
      this.#e = n;
    }
    setQueryDefaults(n, i) {
      this.#l.set(Xi(n), { queryKey: n, defaultOptions: i });
    }
    getQueryDefaults(n) {
      const i = [...this.#l.values()],
        s = {};
      return (
        i.forEach((u) => {
          Ki(n, u.queryKey) && Object.assign(s, u.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, i) {
      this.#a.set(Xi(n), { mutationKey: n, defaultOptions: i });
    }
    getMutationDefaults(n) {
      const i = [...this.#a.values()],
        s = {};
      return (
        i.forEach((u) => {
          Ki(n, u.mutationKey) && Object.assign(s, u.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const i = {
        ...this.#e.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = kc(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Pc && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#e.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#n.clear());
    }
  },
  VE = tt.createContext(void 0),
  XE = ({ client: n, children: i }) => (
    tt.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n],
    ),
    Z.jsx(VE.Provider, { value: n, children: i })
  );
const KE = "/assets/styles-C7ytnlTh.css";
const Sv = (...n) =>
  n
    .filter((i, s, u) => !!i && i.trim() !== "" && u.indexOf(i) === s)
    .join(" ")
    .trim();
const ZE = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kE = (n) =>
  n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, u) =>
    u ? u.toUpperCase() : s.toLowerCase(),
  );
const Wy = (n) => {
  const i = kE(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var PE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const JE = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  return !1;
};
const FE = tt.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: c = "",
      children: f,
      iconNode: h,
      ...m
    },
    p,
  ) =>
    tt.createElement(
      "svg",
      {
        ref: p,
        ...PE,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: u ? (Number(s) * 24) / Number(i) : s,
        className: Sv("lucide", c),
        ...(!f && !JE(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...h.map(([y, S]) => tt.createElement(y, S)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
const Fi = (n, i) => {
  const s = tt.forwardRef(({ className: u, ...c }, f) =>
    tt.createElement(FE, {
      ref: f,
      iconNode: i,
      className: Sv(`lucide-${ZE(Wy(n))}`, `lucide-${n}`, u),
      ...c,
    }),
  );
  return ((s.displayName = Wy(n)), s);
};
const IE = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  $E = Fi("file-text", IE);
const WE = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  tR = Fi("house", WE);
const eR = [
    ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
    [
      "path",
      {
        d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
        key: "1b4s83",
      },
    ],
    ["path", { d: "M21 12h1", key: "jtio3y" }],
    ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
    ["path", { d: "M2 12h1", key: "1uaihz" }],
    ["path", { d: "M12 2v1", key: "11qlp1" }],
    ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
    ["path", { d: "M12 12v6", key: "3ahymv" }],
  ],
  nR = Fi("siren", eR);
const aR = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  lR = Fi("sparkles", aR);
const iR = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  sR = Fi("users", iR),
  rR = [
    { to: "/", label: "Home", icon: tR },
    { to: "/emergency", label: "SOS", icon: nR },
    { to: "/quick", label: "Quick", icon: lR },
    { to: "/complain", label: "File", icon: $E },
    { to: "/community", label: "Voice", icon: sR },
  ];
function uR() {
  const n = sE({ select: (i) => i.location.pathname });
  return Z.jsx("nav", {
    className:
      "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-lg",
    children: Z.jsx("ul", {
      className:
        "mx-auto flex max-w-xl items-stretch justify-between px-2 py-1.5",
      children: rR.map((i) => {
        const s = n === i.to,
          u = i.icon;
        return Z.jsx(
          "li",
          {
            className: "flex-1",
            children: Z.jsxs(Vr, {
              to: i.to,
              className: `flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors ${s ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                Z.jsx("span", {
                  className: `grid h-9 w-9 place-items-center rounded-xl transition-all ${s ? "bg-primary/15 text-primary scale-110" : ""}`,
                  children: Z.jsx(u, {
                    className: "h-5 w-5",
                    strokeWidth: s ? 2.5 : 2,
                  }),
                }),
                i.label,
              ],
            }),
          },
          i.to,
        );
      }),
    }),
  });
}
function oR() {
  return Z.jsx("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: Z.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        Z.jsx("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        Z.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        Z.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        Z.jsx("div", {
          className: "mt-6",
          children: Z.jsx(Vr, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function cR({ error: n, reset: i }) {
  console.error(n);
  const s = ae();
  return Z.jsx("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: Z.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        Z.jsx("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        Z.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        Z.jsxs("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            Z.jsx("button", {
              onClick: () => {
                (s.invalidate(), i());
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            Z.jsx("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
const qa = G2()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ComplainKaro — Your voice, heard." },
      {
        name: "description",
        content:
          "File complaints to local, state, and national authorities. Emergency contacts, AI triage, and a community voice feed for India.",
      },
      { property: "og:title", content: "ComplainKaro — Your voice, heard." },
      {
        property: "og:description",
        content: "Civic complaints made simple, safe, and visible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [{ rel: "stylesheet", href: KE }],
  }),
  shellComponent: fR,
  component: dR,
  notFoundComponent: oR,
  errorComponent: cR,
});
function fR({ children: n }) {
  return Z.jsxs("html", {
    lang: "en",
    children: [
      Z.jsx("head", { children: Z.jsx(cE, {}) }),
      Z.jsxs("body", { children: [n, Z.jsx(fE, {})] }),
    ],
  });
}
function dR() {
  const { queryClient: n } = qa.useRouteContext();
  return Z.jsx(XE, {
    client: n,
    children: Z.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        Z.jsx("div", {
          className: "mx-auto max-w-xl pb-24",
          children: Z.jsx(ov, {}),
        }),
        Z.jsx(uR, {}),
      ],
    }),
  });
}
const hR = "modulepreload",
  mR = function (n) {
    return "/" + n;
  },
  tp = {},
  Ii = function (i, s, u) {
    let c = Promise.resolve();
    if (s && s.length > 0) {
      let p = function (y) {
        return Promise.all(
          y.map((S) =>
            Promise.resolve(S).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        m = h?.nonce || h?.getAttribute("nonce");
      c = p(
        s.map((y) => {
          if (((y = mR(y)), y in tp)) return;
          tp[y] = !0;
          const S = y.endsWith(".css"),
            v = S ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${y}"]${v}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = S ? "stylesheet" : hR),
            S || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = y),
            m && _.setAttribute("nonce", m),
            document.head.appendChild(_),
            S)
          )
            return new Promise((E, A) => {
              (_.addEventListener("load", E),
                _.addEventListener("error", () =>
                  A(new Error(`Unable to preload CSS for ${y}`)),
                ));
            });
        }),
      );
    }
    function f(h) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = h), window.dispatchEvent(m), !m.defaultPrevented))
        throw h;
    }
    return c.then((h) => {
      for (const m of h || []) m.status === "rejected" && f(m.reason);
      return i().catch(f);
    });
  },
  yR = () =>
    Ii(() => import("./quick-Dsjiq_nI.js"), __vite__mapDeps([0, 1, 2])),
  pR = Pi("/quick")({
    head: () => ({
      meta: [
        { title: "Quick Complain — AI triage" },
        {
          name: "description",
          content:
            "Type once. AI decides if your complaint is local, state or national and routes it to the right authority.",
        },
      ],
    }),
    component: Ji(yR, "component"),
  }),
  vR = () =>
    Ii(() => import("./emergency-DdwLikCc.js"), __vite__mapDeps([3, 2])),
  gR = Pi("/emergency")({
    head: () => ({
      meta: [
        { title: "Emergency Helplines — ComplainKaro" },
        {
          name: "description",
          content:
            "All India emergency helpline numbers: police, ambulance, fire, women, child and disaster help — one tap to call.",
        },
      ],
    }),
    component: Ji(vR, "component"),
  }),
  SR = () =>
    Ii(() => import("./complain-hpqwZF18.js"), __vite__mapDeps([4, 5, 2, 1])),
  bR = Pi("/complain")({
    head: () => ({
      meta: [
        { title: "File a Complaint — ComplainKaro" },
        {
          name: "description",
          content:
            "File a complaint at local, state or country level. Attach photos and videos as evidence.",
        },
      ],
    }),
    component: Ji(SR, "component"),
  }),
  _R = () =>
    Ii(() => import("./community-BgmWhhQq.js"), __vite__mapDeps([6, 2, 5])),
  ER = Pi("/community")({
    head: () => ({
      meta: [
        { title: "Voice Feed — ComplainKaro" },
        {
          name: "description",
          content:
            "A community feed of complaints and how local leaders are responding. Like, comment, and amplify.",
        },
      ],
    }),
    component: Ji(_R, "component"),
  }),
  RR = () => Ii(() => import("./index-DAblNTKk.js"), __vite__mapDeps([7, 1])),
  TR = Pi("/")({
    head: () => ({
      meta: [
        { title: "ComplainKaro — File complaints fearlessly" },
        {
          name: "description",
          content:
            "India's civic voice app. Emergency contacts, AI-triaged complaints, and a community feed where leaders respond.",
        },
      ],
    }),
    component: Ji(RR, "component"),
  }),
  xR = pR.update({ id: "/quick", path: "/quick", getParentRoute: () => qa }),
  AR = gR.update({
    id: "/emergency",
    path: "/emergency",
    getParentRoute: () => qa,
  }),
  MR = bR.update({
    id: "/complain",
    path: "/complain",
    getParentRoute: () => qa,
  }),
  OR = ER.update({
    id: "/community",
    path: "/community",
    getParentRoute: () => qa,
  }),
  wR = TR.update({ id: "/", path: "/", getParentRoute: () => qa }),
  CR = {
    IndexRoute: wR,
    CommunityRoute: OR,
    ComplainRoute: MR,
    EmergencyRoute: AR,
    QuickRoute: xR,
  },
  zR = qa._addFileChildren(CR),
  DR = () => {
    const n = new GE();
    return nE({
      routeTree: zR,
      context: { queryClient: n },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
  };
async function LR() {
  const n = await DR();
  let i;
  if (Xy) {
    const s = await Xy.getOptions();
    ((s.serializationAdapters = s.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = s),
      (i = s.serializationAdapters),
      (n.options.defaultSsr = s.defaultSsr));
  } else
    ((i = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: i }));
  return (
    i.push(s2),
    n.options.serializationAdapters &&
      i.push(...n.options.serializationAdapters),
    n.update({ basepath: "", serializationAdapters: i }),
    n.stores.matchesId.get().length || (await u2(n)),
    n
  );
}
async function UR() {
  const n = await LR();
  return (window.$_TSR?.h(), n);
}
var Tc;
function NR() {
  return (
    Tc || (Tc = UR()),
    Z.jsx(d2, { promise: Tc, children: (n) => Z.jsx(iE, { router: n }) })
  );
}
tt.startTransition(() => {
  P0.hydrateRoot(document, Z.jsx(tt.StrictMode, { children: Z.jsx(NR, {}) }));
});
export {
  $E as F,
  Vr as L,
  lR as S,
  sR as U,
  nR as a,
  Fi as c,
  Z as j,
  tt as r,
};
