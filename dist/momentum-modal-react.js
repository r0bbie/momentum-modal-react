import { jsx as R, Fragment as M } from "react/jsx-runtime";
import { usePage as H, router as S, http as g } from "@inertiajs/react";
import { useState as i, useEffect as c } from "react";
let n = {}, h = !1;
const E = () => {
  h || (h = !0, g.onRequest((o) => {
    const e = { ...o.headers };
    return o.method !== "get" && n.key && (e["X-Inertia-Modal-Key"] = n.key), n.redirectURL && (e["X-Inertia-Modal-Redirect"] = n.redirectURL), { ...o, headers: e };
  }));
};
function k(o = null) {
  const e = H().props?.modal, a = e?.props, s = e?.key, [w, l] = i(!1), [y, d] = i(/* @__PURE__ */ R(M, {})), [u, p] = i(), f = o !== null ? o : globalThis.resolveMomentumModal;
  E();
  const L = () => {
    n = {};
  }, U = () => {
    n = {
      key: s,
      redirectURL: e?.redirectURL
    };
  }, m = () => {
    l(!1), L();
  }, v = async () => {
    if (typeof f != "function")
      throw Error("Resolver function not defined. You have to define it at Inertia's entrypoint.");
    if (u == e?.nonce || !e?.component)
      return m();
    let t = e?.component ? f(e.component) : null;
    if (typeof t == "function" && (t = await t()), p(e?.nonce), t) {
      const r = t.default;
      d(/* @__PURE__ */ R(r, { ...a }, s));
    } else
      d("");
    l(!0);
  };
  return c(() => {
    v().then(() => {
      const t = () => p(null);
      return typeof window < "u" && window.addEventListener("popstate", t), () => {
        window.removeEventListener("popstate", t);
      };
    });
  }, []), c(() => {
    e?.nonce !== u && v();
  }, [e]), c(U, [s]), {
    show: w,
    vnode: y,
    close: m,
    redirect: (t = {}) => {
      var r = e?.redirectURL ?? e?.baseURL;
      if (d(!1), !!r)
        return S.visit(r, {
          preserveScroll: !0,
          preserveState: !0,
          ...t
        });
    },
    props: a
  };
}
const T = ({ resolver: o }) => {
  const { vnode: e } = k(o);
  return e;
};
export {
  T as Modal,
  k as useModal
};
