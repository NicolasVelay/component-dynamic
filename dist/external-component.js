var l$1;
l$1 = { __e: function(n, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n = l3;
  }
  throw n;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var f$1 = 0;
function u$1(e2, t2, n, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(l2), l2;
}
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n, t2) {
  c.__h && c.__h(r, n, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n >= u2.__.length && u2.__.push({}), u2.__[n];
}
function d(n) {
  return o = 1, h(D, n);
}
function h(n, u2, i2) {
  var o2 = p(t++, 2);
  if (o2.t = n, !o2.__c && (o2.__ = [D(void 0, u2), function(n2) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.__f)) {
    var f2 = function(n2, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n3) {
        return !!n3.__c;
      });
      if (u3.every(function(n3) {
        return !n3.__N;
      })) return !c2 || c2.call(this, n2, t2, r2);
      var i3 = o2.__c.props !== n2;
      return u3.forEach(function(n3) {
        if (n3.__N) {
          var t3 = n3.__[0];
          n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n2, t2, r2) || i3;
    };
    r.__f = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n2, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n2, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n2, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function j() {
  for (var n; n = f.shift(); ) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t2) {
    n.__H.__h = [], c.__e(t2, n.__v);
  }
}
c.__b = function(n) {
  r = null, e && e(n);
}, c.__ = function(n, t2) {
  n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s && s(n, t2);
}, c.__r = function(n) {
  a && a(n), t = 0;
  var i2 = (r = n.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
    n2.__N && (n2.__ = n2.__N), n2.u = n2.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n) {
  v && v(n);
  var t2 = n.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.u = void 0;
  })), u = r = null;
}, c.__c = function(n, t2) {
  t2.some(function(n2) {
    try {
      n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
        return !n3.__ || B(n3);
      });
    } catch (r2) {
      t2.some(function(n3) {
        n3.__h && (n3.__h = []);
      }), t2 = [], c.__e(r2, n2.__v);
    }
  }), l && l(n, t2);
}, c.unmount = function(n) {
  m && m(n);
  var t2, r2 = n.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      z(n2);
    } catch (n3) {
      t2 = n3;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n);
  }, u2 = setTimeout(r2, 35);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n) {
  var t2 = r, u2 = n.__c;
  "function" == typeof u2 && (n.__c = void 0, u2()), r = t2;
}
function B(n) {
  var t2 = r;
  n.__c = n.__(), r = t2;
}
function D(n, t2) {
  return "function" == typeof t2 ? t2(n) : t2;
}
function ExternalComponent(props) {
  const [count, setCount] = d(0);
  return /* @__PURE__ */ u$1(
    "div",
    {
      style: {
        padding: 24,
        border: "2px dashed #6366f1",
        borderRadius: 12,
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
        fontFamily: "system-ui, sans-serif"
      },
      children: [
        /* @__PURE__ */ u$1("h2", { style: { margin: "0 0 12px", color: "#4338ca" }, children: "🌐 External Component" }),
        /* @__PURE__ */ u$1("p", { style: { margin: "0 0 16px", color: "#6366f1" }, children: "This component is loaded dynamically from an external URL!" }),
        /* @__PURE__ */ u$1("div", { style: { margin: "16px 0" }, children: /* @__PURE__ */ u$1(
          "button",
          {
            onClick: () => setCount((c2) => c2 + 1),
            style: {
              padding: "8px 16px",
              cursor: "pointer",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontWeight: 600
            },
            children: [
              "Local Count: ",
              count
            ]
          }
        ) }),
        /* @__PURE__ */ u$1("details", { style: { marginTop: 16 }, children: [
          /* @__PURE__ */ u$1("summary", { style: { cursor: "pointer", color: "#4338ca" }, children: "Props received from parent app" }),
          /* @__PURE__ */ u$1(
            "pre",
            {
              style: {
                background: "#1e1b4b",
                color: "#c7d2fe",
                padding: 12,
                borderRadius: 6,
                overflow: "auto",
                fontSize: 12
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
