import Ae, { useState as re, useEffect as te } from "react";
import { usePage as pr, router as hr } from "@inertiajs/react";
import ne from "axios";
var K = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Rr() {
  if (ke) return L;
  ke = 1;
  var T = Ae, l = Symbol.for("react.element"), j = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, x = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(g, d, b) {
    var p, y = {}, _ = null, k = null;
    b !== void 0 && (_ = "" + b), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (p in d) m.call(d, p) && !O.hasOwnProperty(p) && (y[p] = d[p]);
    if (g && g.defaultProps) for (p in d = g.defaultProps, d) y[p] === void 0 && (y[p] = d[p]);
    return { $$typeof: l, type: g, key: _, ref: k, props: y, _owner: x.current };
  }
  return L.Fragment = j, L.jsx = S, L.jsxs = S, L;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Er() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var T = Ae, l = Symbol.for("react.element"), j = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), A = Symbol.iterator, W = "@@iterator";
    function oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[W];
      return typeof r == "function" ? r : null;
    }
    var v = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        U("error", e, t);
      }
    }
    function U(e, r, t) {
      {
        var n = v.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var I = !1, Ie = !1, Me = !1, $e = !1, Le = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === O || Le || e === x || e === b || e === p || $e || e === k || I || Ie || Me || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === y || e.$$typeof === S || e.$$typeof === g || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case j:
          return "Portal";
        case O:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ue(r) + ".Consumer";
          case S:
            var t = e;
            return ue(t._context) + ".Provider";
          case d:
            return We(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case _: {
            var i = e, u = i._payload, o = i._init;
            try {
              return w(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, se, le, ce, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ue() {
      {
        if (M === 0) {
          se = console.log, le = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ve() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: se
            }),
            info: P({}, e, {
              value: le
            }),
            warn: P({}, e, {
              value: ce
            }),
            error: P({}, e, {
              value: fe
            }),
            group: P({}, e, {
              value: de
            }),
            groupCollapsed: P({}, e, {
              value: ve
            }),
            groupEnd: P({}, e, {
              value: pe
            })
          });
        }
        M < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = v.ReactCurrentDispatcher, B;
    function V(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var G = !1, N;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ne();
    }
    function Re(e, r) {
      if (!e || G)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              n = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, E), E;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        G = !1, X.current = u, Ve(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", C = F ? V(F) : "";
      return typeof e == "function" && N.set(e, C), C;
    }
    function Je(e, r, t) {
      return Re(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case b:
          return V("Suspense");
        case p:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case y:
            return J(e.type, r, t);
          case _: {
            var n = e, i = n._payload, u = n._init;
            try {
              return J(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, Ee = {}, ge = v.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(i), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in Ee) && (Ee[a.message] = !0, q(i), s("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Xe = Array.isArray;
    function H(e) {
      return Xe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ye(e);
    }
    var be = v.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Te;
    function ze(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, h = null;
        t !== void 0 && (me(t), a = "" + t), Ze(r) && (me(r.key), a = "" + r.key), ze(r) && (h = r.ref, Qe(r, i));
        for (u in r)
          $.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, f), h && rr(o, f);
        }
        return tr(e, a, h, i, n, be.current, o);
      }
    }
    var z = v.ReactCurrentOwner, we = v.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Oe() {
      {
        if (z.current) {
          var e = w(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Se = {};
    function or(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + w(e._owner.type) + "."), D(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Pe(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = oe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Q(o.value) && Pe(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = w(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function xe(e, r, t, n, i, u) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = ar();
          h ? a += h : a += Oe();
          var c;
          e === null ? c = "null" : H(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = nr(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (H(E)) {
                for (var F = 0; F < E.length; F++)
                  Ce(E[F], e);
                Object.freeze && Object.freeze(E);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(E, e);
        }
        if ($.call(r, "key")) {
          var C = w(e), R = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ee = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[C + ee]) {
            var dr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, C, dr, C), je[C + ee] = !0;
          }
        }
        return e === m ? ur(f) : ir(f), f;
      }
    }
    function sr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var cr = lr, fr = sr;
    Y.Fragment = m, Y.jsx = cr, Y.jsxs = fr;
  }()), Y;
}
var Fe;
function gr() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? K.exports = Rr() : K.exports = Er()), K.exports;
}
var ae = gr();
function yr(T = null) {
  const l = pr().props?.modal, j = l?.props, m = l?.key, [x, O] = re(!1), [S, g] = re(/* @__PURE__ */ ae.jsx(ae.Fragment, {})), [d, b] = re(), p = T !== null ? T : globalThis.resolveMomentumModal, y = (v) => {
    Object.entries(v).forEach(
      ([s, U]) => ["post", "put", "patch", "delete"].forEach((I) => {
        ne.defaults.headers[I][s] = U;
      })
    );
  }, _ = () => {
    ["X-Inertia-Modal-Key", "X-Inertia-Modal-Redirect"].forEach(
      ([s, U]) => ["get", "post", "put", "patch", "delete"].forEach((I) => {
        delete ne.defaults.headers[I][s];
      })
    );
  }, k = () => {
    y({
      "X-Inertia-Modal-Key": m,
      "X-Inertia-Modal-Redirect": l?.redirectURL
    }), ne.defaults.headers.get["X-Inertia-Modal-Redirect"] = l?.redirectURL ?? "";
  }, A = () => {
    O(!1), _();
  }, W = async () => {
    if (typeof p != "function")
      throw Error("Resolver function not defined. You have to define it at Inertia's entrypoint.");
    if (d == l?.nonce || !l?.component)
      return A();
    const v = l?.component ? await p(l.component) : null;
    if (b(l?.nonce), v) {
      const s = v.default;
      g(/* @__PURE__ */ ae.jsx(s, { ...j }, m));
    } else
      g("");
    O(!0);
  };
  return te(() => {
    W();
    const v = () => b(null);
    return typeof window < "u" && window.addEventListener("popstate", v), () => {
      window.removeEventListener("popstate", v);
    };
  }, []), te(() => {
    l?.nonce !== d && W();
  }, [l]), te(k, [m]), {
    show: x,
    vnode: S,
    close: A,
    redirect: (v = {}) => {
      var s = l?.redirectURL ?? l?.baseURL;
      if (g(!1), !!s)
        return hr.visit(s, {
          preserveScroll: !0,
          preserveState: !0,
          ...v
        });
    },
    props: j
  };
}
const Tr = ({ resolver: T }) => {
  const { vnode: l } = yr(T);
  return l;
};
export {
  Tr as Modal,
  yr as useModal
};
