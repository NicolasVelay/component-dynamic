var l;
l = { __e: function(n, l2, u2, t) {
  for (var i, r, o; l2 = l2.__; ) if ((i = l2.__c) && !i.__) try {
    if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
  } catch (l3) {
    n = l3;
  }
  throw n;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var f = 0;
function u(e, t, n, o, i, u2) {
  t || (t = {});
  var a, c, p = t;
  if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
  var l$1 = { type: e, props: p, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f, __i: -1, __u: 0, __source: i, __self: u2 };
  if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
  return l.vnode && l.vnode(l$1), l$1;
}
function ExternalComponent(props) {
  return /* @__PURE__ */ u(
    "div",
    {
      style: {
        padding: 24,
        border: "2px #6366f1",
        borderRadius: 12,
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
        fontFamily: "system-ui, sans-serif"
      },
      children: [
        /* @__PURE__ */ u("h2", { style: { margin: "0 0 12px", color: "#4338ca" }, children: "External Component" }),
        /* @__PURE__ */ u("p", { style: { margin: "0 0 16px", color: "#6366f1" }, children: "This component is loaded dynamically from an external URL!" }),
        /* @__PURE__ */ u("details", { style: { marginTop: 16 }, open: true, children: [
          /* @__PURE__ */ u("summary", { style: { cursor: "pointer", color: "#4338ca" }, children: "Props received from parent app" }),
          /* @__PURE__ */ u(
            "pre",
            {
              style: {
                background: "#1e1b4b",
                color: "#c7d2fe",
                padding: 12,
                borderRadius: 6,
                overflow: "auto",
                fontSize: 12,
                marginTop: 8
              },
              children: JSON.stringify(props, null, 2)
            }
          )
        ] })
      ]
    }
  );
}
export {
  ExternalComponent as default
};
