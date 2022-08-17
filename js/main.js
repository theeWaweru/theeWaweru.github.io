!(function () {
  "use strict";
  var t = {};
  t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })();
  var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : void 0 !== t.g
      ? t.g
      : "undefined" != typeof self
      ? self
      : {};
  function n(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var i,
    r,
    s,
    o = function (t) {
      return t && t.Math == Math && t;
    },
    a =
      o("object" == typeof globalThis && globalThis) ||
      o("object" == typeof window && window) ||
      o("object" == typeof self && self) ||
      o("object" == typeof e && e) ||
      Function("return this")(),
    u = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    h = !u(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    l = {}.propertyIsEnumerable,
    c = Object.getOwnPropertyDescriptor,
    f = {
      f:
        c && !l.call({ 1: 2 }, 1)
          ? function (t) {
              var e = c(this, t);
              return !!e && e.enumerable;
            }
          : l,
    },
    d = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    g = {}.toString,
    p = function (t) {
      return g.call(t).slice(8, -1);
    },
    v = "".split,
    y = u(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == p(t) ? v.call(t, "") : Object(t);
        }
      : Object,
    m = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    w = function (t) {
      return y(m(t));
    },
    x = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    b = function (t, e) {
      if (!x(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !x((i = n.call(t))))
        return i;
      if ("function" == typeof (n = t.valueOf) && !x((i = n.call(t)))) return i;
      if (!e && "function" == typeof (n = t.toString) && !x((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    _ = {}.hasOwnProperty,
    S = function (t, e) {
      return _.call(t, e);
    },
    k = a.document,
    M = x(k) && x(k.createElement),
    P = function (t) {
      return M ? k.createElement(t) : {};
    },
    O =
      !h &&
      !u(function () {
        return (
          7 !=
          Object.defineProperty(P("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    I = Object.getOwnPropertyDescriptor,
    T = {
      f: h
        ? I
        : function (t, e) {
            if (((t = w(t)), (e = b(e, !0)), O))
              try {
                return I(t, e);
              } catch (t) {}
            if (S(t, e)) return d(!f.f.call(t, e), t[e]);
          },
    },
    A = function (t) {
      if (!x(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    E = Object.defineProperty,
    C = {
      f: h
        ? E
        : function (t, e, n) {
            if ((A(t), (e = b(e, !0)), A(n), O))
              try {
                return E(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          },
    },
    D = h
      ? function (t, e, n) {
          return C.f(t, e, d(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    V = function (t, e) {
      try {
        D(a, t, e);
      } catch (n) {
        a[t] = e;
      }
      return e;
    },
    L = "__core-js_shared__",
    R = a[L] || V(L, {}),
    F = n(function (t) {
      (t.exports = function (t, e) {
        return R[t] || (R[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.3.6",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    j = F("native-function-to-string", Function.toString),
    z = a.WeakMap,
    N = "function" == typeof z && /native code/.test(j.call(z)),
    G = 0,
    H = Math.random(),
    B = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++G + H).toString(36)
      );
    },
    q = F("keys"),
    Y = function (t) {
      return q[t] || (q[t] = B(t));
    },
    X = {},
    W = a.WeakMap;
  if (N) {
    var U = new W(),
      Q = U.get,
      $ = U.has,
      Z = U.set;
    (i = function (t, e) {
      return Z.call(U, t, e), e;
    }),
      (r = function (t) {
        return Q.call(U, t) || {};
      }),
      (s = function (t) {
        return $.call(U, t);
      });
  } else {
    var K = Y("state");
    (X[K] = !0),
      (i = function (t, e) {
        return D(t, K, e), e;
      }),
      (r = function (t) {
        return S(t, K) ? t[K] : {};
      }),
      (s = function (t) {
        return S(t, K);
      });
  }
  var J,
    tt,
    et = {
      set: i,
      get: r,
      has: s,
      enforce: function (t) {
        return s(t) ? r(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!x(e) || (n = r(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    },
    nt = n(function (t) {
      var e = et.get,
        n = et.enforce,
        i = String(j).split("toString");
      F("inspectSource", function (t) {
        return j.call(t);
      }),
        (t.exports = function (t, e, r, s) {
          var o = !!s && !!s.unsafe,
            u = !!s && !!s.enumerable,
            h = !!s && !!s.noTargetGet;
          "function" == typeof r &&
            ("string" != typeof e || S(r, "name") || D(r, "name", e),
            (n(r).source = i.join("string" == typeof e ? e : ""))),
            t !== a
              ? (o ? !h && t[e] && (u = !0) : delete t[e],
                u ? (t[e] = r) : D(t, e, r))
              : u
              ? (t[e] = r)
              : V(e, r);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && e(this).source) || j.call(this);
        });
    }),
    it = a,
    rt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    st = function (t, e) {
      return arguments.length < 2
        ? rt(it[t]) || rt(a[t])
        : (it[t] && it[t][e]) || (a[t] && a[t][e]);
    },
    ot = Math.ceil,
    at = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? at : ot)(t);
    },
    ht = Math.min,
    lt = function (t) {
      return t > 0 ? ht(ut(t), 9007199254740991) : 0;
    },
    ct = Math.max,
    ft = Math.min,
    dt = function (t, e) {
      var n = ut(t);
      return n < 0 ? ct(n + e, 0) : ft(n, e);
    },
    gt = function (t) {
      return function (e, n, i) {
        var r,
          s = w(e),
          o = lt(s.length),
          a = dt(i, o);
        if (t && n != n) {
          for (; o > a; ) if ((r = s[a++]) != r) return !0;
        } else
          for (; o > a; a++)
            if ((t || a in s) && s[a] === n) return t || a || 0;
        return !t && -1;
      };
    },
    pt = { includes: gt(!0), indexOf: gt(!1) },
    vt = pt.indexOf,
    yt = function (t, e) {
      var n,
        i = w(t),
        r = 0,
        s = [];
      for (n in i) !S(X, n) && S(i, n) && s.push(n);
      for (; e.length > r; ) S(i, (n = e[r++])) && (~vt(s, n) || s.push(n));
      return s;
    },
    mt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    wt = mt.concat("length", "prototype"),
    xt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return yt(t, wt);
        },
    },
    bt = { f: Object.getOwnPropertySymbols },
    _t =
      st("Reflect", "ownKeys") ||
      function (t) {
        var e = xt.f(A(t)),
          n = bt.f;
        return n ? e.concat(n(t)) : e;
      },
    St = function (t, e) {
      for (var n = _t(e), i = C.f, r = T.f, s = 0; s < n.length; s++) {
        var o = n[s];
        S(t, o) || i(t, o, r(e, o));
      }
    },
    kt = /#|\.prototype\./,
    Mt = function (t, e) {
      var n = Ot[Pt(t)];
      return n == Tt || (n != It && ("function" == typeof e ? u(e) : !!e));
    },
    Pt = (Mt.normalize = function (t) {
      return String(t).replace(kt, ".").toLowerCase();
    }),
    Ot = (Mt.data = {}),
    It = (Mt.NATIVE = "N"),
    Tt = (Mt.POLYFILL = "P"),
    At = Mt,
    Et = T.f,
    Ct = function (t, e) {
      var n,
        i,
        r,
        s,
        o,
        u = t.target,
        h = t.global,
        l = t.stat;
      if ((n = h ? a : l ? a[u] || V(u, {}) : (a[u] || {}).prototype))
        for (i in e) {
          if (
            ((s = e[i]),
            (r = t.noTargetGet ? (o = Et(n, i)) && o.value : n[i]),
            !At(h ? i : u + (l ? "." : "#") + i, t.forced) && void 0 !== r)
          ) {
            if (typeof s == typeof r) continue;
            St(s, r);
          }
          (t.sham || (r && r.sham)) && D(s, "sham", !0), nt(n, i, s, t);
        }
    },
    Dt =
      Array.isArray ||
      function (t) {
        return "Array" == p(t);
      },
    Vt = function (t, e, n) {
      var i = b(e);
      i in t ? C.f(t, i, d(0, n)) : (t[i] = n);
    },
    Lt =
      !!Object.getOwnPropertySymbols &&
      !u(function () {
        return !String(Symbol());
      }),
    Rt = a.Symbol,
    Ft = F("wks"),
    jt = function (t) {
      return Ft[t] || (Ft[t] = (Lt && Rt[t]) || (Lt ? Rt : B)("Symbol." + t));
    },
    zt = st("navigator", "userAgent") || "",
    Nt = a.process,
    Gt = Nt && Nt.versions,
    Ht = Gt && Gt.v8;
  Ht
    ? (tt = (J = Ht.split("."))[0] + J[1])
    : zt &&
      (!(J = zt.match(/Edge\/(\d+)/)) || J[1] >= 74) &&
      (J = zt.match(/Chrome\/(\d+)/)) &&
      (tt = J[1]);
  var Bt = tt && +tt,
    qt = jt("species"),
    Yt = function (t) {
      return (
        Bt >= 51 ||
        !u(function () {
          var e = [];
          return (
            ((e.constructor = {})[qt] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    Xt = jt("species"),
    Wt = [].slice,
    Ut = Math.max;
  Ct(
    { target: "Array", proto: !0, forced: !Yt("slice") },
    {
      slice: function (t, e) {
        var n,
          i,
          r,
          s = w(this),
          o = lt(s.length),
          a = dt(t, o),
          u = dt(void 0 === e ? o : e, o);
        if (
          Dt(s) &&
          ("function" != typeof (n = s.constructor) ||
          (n !== Array && !Dt(n.prototype))
            ? x(n) && null === (n = n[Xt]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Wt.call(s, a, u);
        for (
          i = new (void 0 === n ? Array : n)(Ut(u - a, 0)), r = 0;
          a < u;
          a++, r++
        )
          a in s && Vt(i, r, s[a]);
        return (i.length = r), i;
      },
    }
  );
  var Qt = C.f,
    $t = Function.prototype,
    Zt = $t.toString,
    Kt = /^\s*function ([^ (]*)/,
    Jt = "name";
  h &&
    !(Jt in $t) &&
    Qt($t, Jt, {
      configurable: !0,
      get: function () {
        try {
          return Zt.call(this).match(Kt)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var te = xt.f,
    ee = {}.toString,
    ne =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    ie = {
      f: function (t) {
        return ne && "[object Window]" == ee.call(t)
          ? (function (t) {
              try {
                return te(t);
              } catch (t) {
                return ne.slice();
              }
            })(t)
          : te(w(t));
      },
    },
    re = ie.f,
    se = u(function () {
      return !Object.getOwnPropertyNames(1);
    });
  function oe(t) {
    return (oe =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function ae(t) {
    return (ae =
      "function" == typeof Symbol && "symbol" === oe(Symbol.iterator)
        ? function (t) {
            return oe(t);
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : oe(t);
          })(t);
  }
  Ct({ target: "Object", stat: !0, forced: se }, { getOwnPropertyNames: re });
  var ue = function (t) {
      return Object(m(t));
    },
    he =
      Object.keys ||
      function (t) {
        return yt(t, mt);
      },
    le = h
      ? Object.defineProperties
      : function (t, e) {
          A(t);
          for (var n, i = he(e), r = i.length, s = 0; r > s; )
            C.f(t, (n = i[s++]), e[n]);
          return t;
        },
    ce = st("document", "documentElement"),
    fe = Y("IE_PROTO"),
    de = function () {},
    ge = function () {
      var t,
        e = P("iframe"),
        n = mt.length;
      for (
        e.style.display = "none",
          ce.appendChild(e),
          e.src = String("javascript:"),
          (t = e.contentWindow.document).open(),
          t.write("<script>document.F=Object</script>"),
          t.close(),
          ge = t.F;
        n--;

      )
        delete ge.prototype[mt[n]];
      return ge();
    },
    pe =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((de.prototype = A(t)),
              (n = new de()),
              (de.prototype = null),
              (n[fe] = t))
            : (n = ge()),
          void 0 === e ? n : le(n, e)
        );
      };
  X[fe] = !0;
  var ve = { f: jt },
    ye = C.f,
    me = function (t) {
      var e = it.Symbol || (it.Symbol = {});
      S(e, t) || ye(e, t, { value: ve.f(t) });
    },
    we = C.f,
    xe = jt("toStringTag"),
    be = function (t, e, n) {
      t &&
        !S((t = n ? t : t.prototype), xe) &&
        we(t, xe, { configurable: !0, value: e });
    },
    _e = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    Se = function (t, e, n) {
      if ((_e(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, i) {
            return t.call(e, n, i);
          };
        case 3:
          return function (n, i, r) {
            return t.call(e, n, i, r);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    ke = jt("species"),
    Me = function (t, e) {
      var n;
      return (
        Dt(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !Dt(n.prototype))
            ? x(n) && null === (n = n[ke]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    },
    Pe = [].push,
    Oe = function (t) {
      var e = 1 == t,
        n = 2 == t,
        i = 3 == t,
        r = 4 == t,
        s = 6 == t,
        o = 5 == t || s;
      return function (a, u, h, l) {
        for (
          var c,
            f,
            d = ue(a),
            g = y(d),
            p = Se(u, h, 3),
            v = lt(g.length),
            m = 0,
            w = l || Me,
            x = e ? w(a, v) : n ? w(a, 0) : void 0;
          v > m;
          m++
        )
          if ((o || m in g) && ((f = p((c = g[m]), m, d)), t))
            if (e) x[m] = f;
            else if (f)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return c;
                case 6:
                  return m;
                case 2:
                  Pe.call(x, c);
              }
            else if (r) return !1;
        return s ? -1 : i || r ? r : x;
      };
    },
    Ie = {
      forEach: Oe(0),
      map: Oe(1),
      filter: Oe(2),
      some: Oe(3),
      every: Oe(4),
      find: Oe(5),
      findIndex: Oe(6),
    },
    Te = Ie.forEach,
    Ae = Y("hidden"),
    Ee = "Symbol",
    Ce = jt("toPrimitive"),
    De = et.set,
    Ve = et.getterFor(Ee),
    Le = Object.prototype,
    Re = a.Symbol,
    Fe = a.JSON,
    je = Fe && Fe.stringify,
    ze = T.f,
    Ne = C.f,
    Ge = ie.f,
    He = f.f,
    Be = F("symbols"),
    qe = F("op-symbols"),
    Ye = F("string-to-symbol-registry"),
    Xe = F("symbol-to-string-registry"),
    We = F("wks"),
    Ue = a.QObject,
    Qe = !Ue || !Ue.prototype || !Ue.prototype.findChild,
    $e =
      h &&
      u(function () {
        return (
          7 !=
          pe(
            Ne({}, "a", {
              get: function () {
                return Ne(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, e, n) {
            var i = ze(Le, e);
            i && delete Le[e], Ne(t, e, n), i && t !== Le && Ne(Le, e, i);
          }
        : Ne,
    Ze = function (t, e) {
      var n = (Be[t] = pe(Re.prototype));
      return (
        De(n, { type: Ee, tag: t, description: e }), h || (n.description = e), n
      );
    },
    Ke =
      Lt && "symbol" == typeof Re.iterator
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof Re;
          },
    Je = function (t, e, n) {
      t === Le && Je(qe, e, n), A(t);
      var i = b(e, !0);
      return (
        A(n),
        S(Be, i)
          ? (n.enumerable
              ? (S(t, Ae) && t[Ae][i] && (t[Ae][i] = !1),
                (n = pe(n, { enumerable: d(0, !1) })))
              : (S(t, Ae) || Ne(t, Ae, d(1, {})), (t[Ae][i] = !0)),
            $e(t, i, n))
          : Ne(t, i, n)
      );
    },
    tn = function (t, e) {
      A(t);
      var n = w(e),
        i = he(n).concat(sn(n));
      return (
        Te(i, function (e) {
          (h && !en.call(n, e)) || Je(t, e, n[e]);
        }),
        t
      );
    },
    en = function (t) {
      var e = b(t, !0),
        n = He.call(this, e);
      return (
        !(this === Le && S(Be, e) && !S(qe, e)) &&
        (!(n || !S(this, e) || !S(Be, e) || (S(this, Ae) && this[Ae][e])) || n)
      );
    },
    nn = function (t, e) {
      var n = w(t),
        i = b(e, !0);
      if (n !== Le || !S(Be, i) || S(qe, i)) {
        var r = ze(n, i);
        return (
          !r || !S(Be, i) || (S(n, Ae) && n[Ae][i]) || (r.enumerable = !0), r
        );
      }
    },
    rn = function (t) {
      var e = Ge(w(t)),
        n = [];
      return (
        Te(e, function (t) {
          S(Be, t) || S(X, t) || n.push(t);
        }),
        n
      );
    },
    sn = function (t) {
      var e = t === Le,
        n = Ge(e ? qe : w(t)),
        i = [];
      return (
        Te(n, function (t) {
          !S(Be, t) || (e && !S(Le, t)) || i.push(Be[t]);
        }),
        i
      );
    };
  Lt ||
    (nt(
      (Re = function () {
        if (this instanceof Re) throw TypeError("Symbol is not a constructor");
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = B(t),
          n = function (t) {
            this === Le && n.call(qe, t),
              S(this, Ae) && S(this[Ae], e) && (this[Ae][e] = !1),
              $e(this, e, d(1, t));
          };
        return h && Qe && $e(Le, e, { configurable: !0, set: n }), Ze(e, t);
      }).prototype,
      "toString",
      function () {
        return Ve(this).tag;
      }
    ),
    (f.f = en),
    (C.f = Je),
    (T.f = nn),
    (xt.f = ie.f = rn),
    (bt.f = sn),
    h &&
      (Ne(Re.prototype, "description", {
        configurable: !0,
        get: function () {
          return Ve(this).description;
        },
      }),
      nt(Le, "propertyIsEnumerable", en, { unsafe: !0 })),
    (ve.f = function (t) {
      return Ze(jt(t), t);
    })),
    Ct({ global: !0, wrap: !0, forced: !Lt, sham: !Lt }, { Symbol: Re }),
    Te(he(We), function (t) {
      me(t);
    }),
    Ct(
      { target: Ee, stat: !0, forced: !Lt },
      {
        for: function (t) {
          var e = String(t);
          if (S(Ye, e)) return Ye[e];
          var n = Re(e);
          return (Ye[e] = n), (Xe[n] = e), n;
        },
        keyFor: function (t) {
          if (!Ke(t)) throw TypeError(t + " is not a symbol");
          if (S(Xe, t)) return Xe[t];
        },
        useSetter: function () {
          Qe = !0;
        },
        useSimple: function () {
          Qe = !1;
        },
      }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !Lt, sham: !h },
      {
        create: function (t, e) {
          return void 0 === e ? pe(t) : tn(pe(t), e);
        },
        defineProperty: Je,
        defineProperties: tn,
        getOwnPropertyDescriptor: nn,
      }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !Lt },
      { getOwnPropertyNames: rn, getOwnPropertySymbols: sn }
    ),
    Ct(
      {
        target: "Object",
        stat: !0,
        forced: u(function () {
          bt.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return bt.f(ue(t));
        },
      }
    ),
    Fe &&
      Ct(
        {
          target: "JSON",
          stat: !0,
          forced:
            !Lt ||
            u(function () {
              var t = Re();
              return (
                "[null]" != je([t]) ||
                "{}" != je({ a: t }) ||
                "{}" != je(Object(t))
              );
            }),
        },
        {
          stringify: function (t) {
            for (var e, n, i = [t], r = 1; arguments.length > r; )
              i.push(arguments[r++]);
            if (((n = e = i[1]), (x(e) || void 0 !== t) && !Ke(t)))
              return (
                Dt(e) ||
                  (e = function (t, e) {
                    if (
                      ("function" == typeof n && (e = n.call(this, t, e)),
                      !Ke(e))
                    )
                      return e;
                  }),
                (i[1] = e),
                je.apply(Fe, i)
              );
          },
        }
      ),
    Re.prototype[Ce] || D(Re.prototype, Ce, Re.prototype.valueOf),
    be(Re, Ee),
    (X[Ae] = !0);
  var on = C.f,
    an = a.Symbol;
  if (
    h &&
    "function" == typeof an &&
    (!("description" in an.prototype) || void 0 !== an().description)
  ) {
    var un = {},
      hn = function () {
        var t =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          e = this instanceof hn ? new an(t) : void 0 === t ? an() : an(t);
        return "" === t && (un[e] = !0), e;
      };
    St(hn, an);
    var ln = (hn.prototype = an.prototype);
    ln.constructor = hn;
    var cn = ln.toString,
      fn = "Symbol(test)" == String(an("test")),
      dn = /^Symbol\((.*)\)[^)]+$/;
    on(ln, "description", {
      configurable: !0,
      get: function () {
        var t = x(this) ? this.valueOf() : this,
          e = cn.call(t);
        if (S(un, t)) return "";
        var n = fn ? e.slice(7, -1) : e.replace(dn, "$1");
        return "" === n ? void 0 : n;
      },
    }),
      Ct({ global: !0, forced: !0 }, { Symbol: hn });
  }
  me("iterator");
  var gn = jt("unscopables"),
    pn = Array.prototype;
  null == pn[gn] && D(pn, gn, pe(null));
  var vn,
    yn,
    mn,
    wn = function (t) {
      pn[gn][t] = !0;
    },
    xn = {},
    bn = !u(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    _n = Y("IE_PROTO"),
    Sn = Object.prototype,
    kn = bn
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = ue(t)),
            S(t, _n)
              ? t[_n]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Sn
              : null
          );
        },
    Mn = jt("iterator"),
    Pn = !1;
  [].keys &&
    ("next" in (mn = [].keys())
      ? (yn = kn(kn(mn))) !== Object.prototype && (vn = yn)
      : (Pn = !0)),
    null == vn && (vn = {}),
    S(vn, Mn) ||
      D(vn, Mn, function () {
        return this;
      });
  var On = { IteratorPrototype: vn, BUGGY_SAFARI_ITERATORS: Pn },
    In = On.IteratorPrototype,
    Tn = function () {
      return this;
    },
    An =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return (
                A(n),
                (function (t) {
                  if (!x(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(i),
                e ? t.call(n, i) : (n.__proto__ = i),
                n
              );
            };
          })()
        : void 0),
    En = On.IteratorPrototype,
    Cn = On.BUGGY_SAFARI_ITERATORS,
    Dn = jt("iterator"),
    Vn = "keys",
    Ln = "values",
    Rn = "entries",
    Fn = function () {
      return this;
    },
    jn = function (t, e, n, i, r, s, o) {
      !(function (t, e, n) {
        var i = e + " Iterator";
        (t.prototype = pe(In, { next: d(1, n) })), be(t, i, !1), (xn[i] = Tn);
      })(n, e, i);
      var a,
        u,
        h,
        l = function (t) {
          if (t === r && v) return v;
          if (!Cn && t in g) return g[t];
          switch (t) {
            case Vn:
            case Ln:
            case Rn:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        c = e + " Iterator",
        f = !1,
        g = t.prototype,
        p = g[Dn] || g["@@iterator"] || (r && g[r]),
        v = (!Cn && p) || l(r),
        y = ("Array" == e && g.entries) || p;
      if (
        (y &&
          ((a = kn(y.call(new t()))),
          En !== Object.prototype &&
            a.next &&
            (kn(a) !== En &&
              (An ? An(a, En) : "function" != typeof a[Dn] && D(a, Dn, Fn)),
            be(a, c, !0))),
        r == Ln &&
          p &&
          p.name !== Ln &&
          ((f = !0),
          (v = function () {
            return p.call(this);
          })),
        g[Dn] !== v && D(g, Dn, v),
        (xn[e] = v),
        r)
      )
        if (((u = { values: l(Ln), keys: s ? v : l(Vn), entries: l(Rn) }), o))
          for (h in u) (Cn || f || !(h in g)) && nt(g, h, u[h]);
        else Ct({ target: e, proto: !0, forced: Cn || f }, u);
      return u;
    },
    zn = "Array Iterator",
    Nn = et.set,
    Gn = et.getterFor(zn),
    Hn = jn(
      Array,
      "Array",
      function (t, e) {
        Nn(this, { type: zn, target: w(t), index: 0, kind: e });
      },
      function () {
        var t = Gn(this),
          e = t.target,
          n = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: i, done: !1 }
          : "values" == n
          ? { value: e[i], done: !1 }
          : { value: [i, e[i]], done: !1 };
      },
      "values"
    );
  (xn.Arguments = xn.Array), wn("keys"), wn("values"), wn("entries");
  var Bn = Object.assign,
    qn =
      !Bn ||
      u(function () {
        var t = {},
          e = {},
          n = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (t[n] = 7),
          i.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != Bn({}, t)[n] || he(Bn({}, e)).join("") != i
        );
      })
        ? function (t, e) {
            for (
              var n = ue(t), i = arguments.length, r = 1, s = bt.f, o = f.f;
              i > r;

            )
              for (
                var a,
                  u = y(arguments[r++]),
                  l = s ? he(u).concat(s(u)) : he(u),
                  c = l.length,
                  d = 0;
                c > d;

              )
                (a = l[d++]), (h && !o.call(u, a)) || (n[a] = u[a]);
            return n;
          }
        : Bn;
  Ct(
    { target: "Object", stat: !0, forced: Object.assign !== qn },
    { assign: qn }
  );
  var Yn = jt("toStringTag"),
    Xn =
      "Arguments" ==
      p(
        (function () {
          return arguments;
        })()
      ),
    Wn = function (t) {
      var e, n, i;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (n = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), Yn))
        ? n
        : Xn
        ? p(e)
        : "Object" == (i = p(e)) && "function" == typeof e.callee
        ? "Arguments"
        : i;
    },
    Un = {};
  Un[jt("toStringTag")] = "z";
  var Qn =
      "[object z]" !== String(Un)
        ? function () {
            return "[object " + Wn(this) + "]";
          }
        : Un.toString,
    $n = Object.prototype;
  Qn !== $n.toString && nt($n, "toString", Qn, { unsafe: !0 });
  var Zn = !u(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Kn = n(function (t) {
      var e = C.f,
        n = B("meta"),
        i = 0,
        r =
          Object.isExtensible ||
          function () {
            return !0;
          },
        s = function (t) {
          e(t, n, { value: { objectID: "O" + ++i, weakData: {} } });
        },
        o = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!x(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!S(t, n)) {
              if (!r(t)) return "F";
              if (!e) return "E";
              s(t);
            }
            return t[n].objectID;
          },
          getWeakData: function (t, e) {
            if (!S(t, n)) {
              if (!r(t)) return !0;
              if (!e) return !1;
              s(t);
            }
            return t[n].weakData;
          },
          onFreeze: function (t) {
            return Zn && o.REQUIRED && r(t) && !S(t, n) && s(t), t;
          },
        });
      X[n] = !0;
    }),
    Jn = jt("iterator"),
    ti = Array.prototype,
    ei = jt("iterator"),
    ni = function (t, e, n, i) {
      try {
        return i ? e(A(n)[0], n[1]) : e(n);
      } catch (e) {
        var r = t.return;
        throw (void 0 !== r && A(r.call(t)), e);
      }
    },
    ii = n(function (t) {
      var e = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
      (t.exports = function (t, n, i, r, s) {
        var o,
          a,
          u,
          h,
          l,
          c,
          f,
          d,
          g = Se(n, i, r ? 2 : 1);
        if (s) o = t;
        else {
          if (
            "function" !=
            typeof (a = (function (t) {
              if (null != t) return t[ei] || t["@@iterator"] || xn[Wn(t)];
            })(t))
          )
            throw TypeError("Target is not iterable");
          if (void 0 !== (d = a) && (xn.Array === d || ti[Jn] === d)) {
            for (u = 0, h = lt(t.length); h > u; u++)
              if (
                (l = r ? g(A((f = t[u]))[0], f[1]) : g(t[u])) &&
                l instanceof e
              )
                return l;
            return new e(!1);
          }
          o = a.call(t);
        }
        for (c = o.next; !(f = c.call(o)).done; )
          if (
            "object" == typeof (l = ni(o, g, f.value, r)) &&
            l &&
            l instanceof e
          )
            return l;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    ri = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    },
    si = jt("iterator"),
    oi = !1;
  try {
    var ai = 0,
      ui = {
        next: function () {
          return { done: !!ai++ };
        },
        return: function () {
          oi = !0;
        },
      };
    (ui[si] = function () {
      return this;
    }),
      Array.from(ui, function () {
        throw 2;
      });
  } catch (t) {}
  var hi = function (t, e, n) {
      var i, r;
      return (
        An &&
          "function" == typeof (i = e.constructor) &&
          i !== n &&
          x((r = i.prototype)) &&
          r !== n.prototype &&
          An(t, r),
        t
      );
    },
    li = function (t, e, n) {
      for (var i in e) nt(t, i, e[i], n);
      return t;
    },
    ci = jt("species"),
    fi = C.f,
    di = Kn.fastKey,
    gi = et.set,
    pi = et.getterFor,
    vi =
      ((function (t, e, n, i, r) {
        var s = a.Set,
          o = s && s.prototype,
          h = s,
          l = "add",
          c = {},
          f = function (t) {
            var e = o[t];
            nt(
              o,
              t,
              "add" == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t || "get" == t || "has" == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t);
                  }
                : function (t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          At(
            t,
            "function" != typeof s ||
              !(
                o.forEach &&
                !u(function () {
                  new s().entries().next();
                })
              )
          )
        )
          (h = n.getConstructor(e, t, i, l)), (Kn.REQUIRED = !0);
        else if (At(t, !0)) {
          var d = new h(),
            g = d.add(-0, 1) != d,
            p = u(function () {
              d.has(1);
            }),
            v = (function (t, e) {
              if (!oi) return !1;
              var n = !1;
              try {
                var i = {};
                (i[si] = function () {
                  return {
                    next: function () {
                      return { done: (n = !0) };
                    },
                  };
                }),
                  new s(i);
              } catch (t) {}
              return n;
            })(),
            y = u(function () {
              for (var t = new s(), e = 5; e--; ) t.add(e, e);
              return !t.has(-0);
            });
          v ||
            (((h = e(function (e, n) {
              ri(e, h, t);
              var r = hi(new s(), e, h);
              return null != n && ii(n, r.add, r, i), r;
            })).prototype = o),
            (o.constructor = h)),
            (p || y) && (f("delete"), f("has")),
            (y || g) && f(l);
        }
        (c.Set = h),
          Ct({ global: !0, forced: h != s }, c),
          be(h, t),
          n.setStrong(h, t, i);
      })(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (t, e, n, i) {
            var r = t(function (t, s) {
                ri(t, r, e),
                  gi(t, {
                    type: e,
                    index: pe(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  h || (t.size = 0),
                  null != s && ii(s, t[i], t, n);
              }),
              s = pi(e),
              o = function (t, e, n) {
                var i,
                  r,
                  o = s(t),
                  u = a(t, e);
                return (
                  u
                    ? (u.value = n)
                    : ((o.last = u =
                        {
                          index: (r = di(e, !0)),
                          key: e,
                          value: n,
                          previous: (i = o.last),
                          next: void 0,
                          removed: !1,
                        }),
                      o.first || (o.first = u),
                      i && (i.next = u),
                      h ? o.size++ : t.size++,
                      "F" !== r && (o.index[r] = u)),
                  t
                );
              },
              a = function (t, e) {
                var n,
                  i = s(t),
                  r = di(e);
                if ("F" !== r) return i.index[r];
                for (n = i.first; n; n = n.next) if (n.key == e) return n;
              };
            return (
              li(r.prototype, {
                clear: function () {
                  for (var t = s(this), e = t.index, n = t.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete e[n.index],
                      (n = n.next);
                  (t.first = t.last = void 0),
                    h ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                  var e = this,
                    n = s(e),
                    i = a(e, t);
                  if (i) {
                    var r = i.next,
                      o = i.previous;
                    delete n.index[i.index],
                      (i.removed = !0),
                      o && (o.next = r),
                      r && (r.previous = o),
                      n.first == i && (n.first = r),
                      n.last == i && (n.last = o),
                      h ? n.size-- : e.size--;
                  }
                  return !!i;
                },
                forEach: function (t) {
                  for (
                    var e,
                      n = s(this),
                      i = Se(
                        t,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (e = e ? e.next : n.first);

                  )
                    for (i(e.value, e.key, this); e && e.removed; )
                      e = e.previous;
                },
                has: function (t) {
                  return !!a(this, t);
                },
              }),
              li(
                r.prototype,
                n
                  ? {
                      get: function (t) {
                        var e = a(this, t);
                        return e && e.value;
                      },
                      set: function (t, e) {
                        return o(this, 0 === t ? 0 : t, e);
                      },
                    }
                  : {
                      add: function (t) {
                        return o(this, (t = 0 === t ? 0 : t), t);
                      },
                    }
              ),
              h &&
                fi(r.prototype, "size", {
                  get: function () {
                    return s(this).size;
                  },
                }),
              r
            );
          },
          setStrong: function (t, e, n) {
            var i = e + " Iterator",
              r = pi(e),
              s = pi(i);
            jn(
              t,
              e,
              function (t, e) {
                gi(this, {
                  type: i,
                  target: t,
                  state: r(t),
                  kind: e,
                  last: void 0,
                });
              },
              function () {
                for (var t = s(this), e = t.kind, n = t.last; n && n.removed; )
                  n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first)
                  ? "keys" == e
                    ? { value: n.key, done: !1 }
                    : "values" == e
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((t.target = void 0), { value: void 0, done: !0 });
              },
              n ? "entries" : "values",
              !n,
              !0
            ),
              (function (t) {
                var e = st(t),
                  n = C.f;
                h &&
                  e &&
                  !e[ci] &&
                  n(e, ci, {
                    configurable: !0,
                    get: function () {
                      return this;
                    },
                  });
              })(e);
          },
        }
      ),
      function (t) {
        return function (e, n) {
          var i,
            r,
            s = String(m(e)),
            o = ut(n),
            a = s.length;
          return o < 0 || o >= a
            ? t
              ? ""
              : void 0
            : (i = s.charCodeAt(o)) < 55296 ||
              i > 56319 ||
              o + 1 === a ||
              (r = s.charCodeAt(o + 1)) < 56320 ||
              r > 57343
            ? t
              ? s.charAt(o)
              : i
            : t
            ? s.slice(o, o + 2)
            : r - 56320 + ((i - 55296) << 10) + 65536;
        };
      }),
    yi = { codeAt: vi(!1), charAt: vi(!0) },
    mi = yi.charAt,
    wi = "String Iterator",
    xi = et.set,
    bi = et.getterFor(wi);
  jn(
    String,
    "String",
    function (t) {
      xi(this, { type: wi, string: String(t), index: 0 });
    },
    function () {
      var t,
        e = bi(this),
        n = e.string,
        i = e.index;
      return i >= n.length
        ? { value: void 0, done: !0 }
        : ((t = mi(n, i)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var _i = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Si = jt("iterator"),
    ki = jt("toStringTag"),
    Mi = Hn.values;
  for (var Pi in _i) {
    var Oi = a[Pi],
      Ii = Oi && Oi.prototype;
    if (Ii) {
      if (Ii[Si] !== Mi)
        try {
          D(Ii, Si, Mi);
        } catch (t) {
          Ii[Si] = Mi;
        }
      if ((Ii[ki] || D(Ii, ki, Pi), _i[Pi]))
        for (var Ti in Hn)
          if (Ii[Ti] !== Hn[Ti])
            try {
              D(Ii, Ti, Hn[Ti]);
            } catch (t) {
              Ii[Ti] = Hn[Ti];
            }
    }
  }
  function Ai(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var Ei = {},
    Ci = [];
  function Di(t, e) {
    if (Array.isArray(t)) {
      var n = !0,
        i = !1,
        r = void 0;
      try {
        for (
          var s, o = t[Symbol.iterator]();
          !(n = (s = o.next()).done);
          n = !0
        )
          Di(s.value, e);
      } catch (t) {
        (i = !0), (r = t);
      } finally {
        try {
          n || null == o.return || o.return();
        } finally {
          if (i) throw r;
        }
      }
    } else if ("object" !== ae(t))
      Li(Object.getOwnPropertyNames(e)),
        (Ei[t] = Object.assign(Ei[t] || {}, e));
    else for (var a in t) Di(a, t[a]);
  }
  function Vi(t) {
    return Ei[t] || {};
  }
  function Li(t) {
    Ci.push.apply(Ci, Ai(t));
  }
  var Ri = pt.includes;
  Ct(
    { target: "Array", proto: !0 },
    {
      includes: function (t) {
        return Ri(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    wn("includes");
  var Fi,
    ji,
    zi = function () {
      var t = A(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    },
    Ni = RegExp.prototype.exec,
    Gi = String.prototype.replace,
    Hi = Ni,
    Bi =
      ((Fi = /a/),
      (ji = /b*/g),
      Ni.call(Fi, "a"),
      Ni.call(ji, "a"),
      0 !== Fi.lastIndex || 0 !== ji.lastIndex),
    qi = void 0 !== /()??/.exec("")[1];
  (Bi || qi) &&
    (Hi = function (t) {
      var e,
        n,
        i,
        r,
        s = this;
      return (
        qi && (n = new RegExp("^" + s.source + "$(?!\\s)", zi.call(s))),
        Bi && (e = s.lastIndex),
        (i = Ni.call(s, t)),
        Bi && i && (s.lastIndex = s.global ? i.index + i[0].length : e),
        qi &&
          i &&
          i.length > 1 &&
          Gi.call(i[0], n, function () {
            for (r = 1; r < arguments.length - 2; r++)
              void 0 === arguments[r] && (i[r] = void 0);
          }),
        i
      );
    });
  var Yi = Hi;
  Ct({ target: "RegExp", proto: !0, forced: /./.exec !== Yi }, { exec: Yi });
  var Xi = jt("match"),
    Wi = function (t) {
      var e;
      return x(t) && (void 0 !== (e = t[Xi]) ? !!e : "RegExp" == p(t));
    },
    Ui = function (t) {
      if (Wi(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    Qi = jt("match");
  Ct(
    {
      target: "String",
      proto: !0,
      forced: !(function (t) {
        var e = /./;
        try {
          "/./".includes(e);
        } catch (t) {
          try {
            return (e[Qi] = !1), "/./".includes(e);
          } catch (t) {}
        }
        return !1;
      })(),
    },
    {
      includes: function (t) {
        return !!~String(m(this)).indexOf(
          Ui(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var $i = jt("species"),
    Zi = !u(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    Ki = !u(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var n = "ab".split(t);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    Ji = function (t, e, n, i) {
      var r = jt(t),
        s = !u(function () {
          var e = {};
          return (
            (e[r] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        o =
          s &&
          !u(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[$i] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[r] = /./[r])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[r](""),
              !e
            );
          });
      if (!s || !o || ("replace" === t && !Zi) || ("split" === t && !Ki)) {
        var a = /./[r],
          h = n(r, ""[t], function (t, e, n, i, r) {
            return e.exec === Yi
              ? s && !r
                ? { done: !0, value: a.call(e, n, i) }
                : { done: !0, value: t.call(n, e, i) }
              : { done: !1 };
          }),
          l = h[0],
          c = h[1];
        nt(String.prototype, t, l),
          nt(
            RegExp.prototype,
            r,
            2 == e
              ? function (t, e) {
                  return c.call(t, this, e);
                }
              : function (t) {
                  return c.call(t, this);
                }
          ),
          i && D(RegExp.prototype[r], "sham", !0);
      }
    },
    tr = yi.charAt,
    er = function (t, e, n) {
      return e + (n ? tr(t, e).length : 1);
    },
    nr = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== p(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Yi.call(t, e);
    },
    ir = Math.max,
    rr = Math.min,
    sr = Math.floor,
    or = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    ar = /\$([$&'`]|\d\d?)/g;
  Ji("replace", 2, function (t, e, n) {
    return [
      function (n, i) {
        var r = m(this),
          s = null == n ? void 0 : n[t];
        return void 0 !== s ? s.call(n, r, i) : e.call(String(r), n, i);
      },
      function (t, r) {
        var s = n(e, t, this, r);
        if (s.done) return s.value;
        var o = A(t),
          a = String(this),
          u = "function" == typeof r;
        u || (r = String(r));
        var h = o.global;
        if (h) {
          var l = o.unicode;
          o.lastIndex = 0;
        }
        for (var c = []; ; ) {
          var f = nr(o, a);
          if (null === f) break;
          if ((c.push(f), !h)) break;
          "" === String(f[0]) && (o.lastIndex = er(a, lt(o.lastIndex), l));
        }
        for (var d, g = "", p = 0, v = 0; v < c.length; v++) {
          f = c[v];
          for (
            var y = String(f[0]),
              m = ir(rr(ut(f.index), a.length), 0),
              w = [],
              x = 1;
            x < f.length;
            x++
          )
            w.push(void 0 === (d = f[x]) ? d : String(d));
          var b = f.groups;
          if (u) {
            var _ = [y].concat(w, m, a);
            void 0 !== b && _.push(b);
            var S = String(r.apply(void 0, _));
          } else S = i(y, a, m, w, b, r);
          m >= p && ((g += a.slice(p, m) + S), (p = m + y.length));
        }
        return g + a.slice(p);
      },
    ];
    function i(t, n, i, r, s, o) {
      var a = i + t.length,
        u = r.length,
        h = ar;
      return (
        void 0 !== s && ((s = ue(s)), (h = or)),
        e.call(o, h, function (e, o) {
          var h;
          switch (o.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return n.slice(0, i);
            case "'":
              return n.slice(a);
            case "<":
              h = s[o.slice(1, -1)];
              break;
            default:
              var l = +o;
              if (0 === l) return e;
              if (l > u) {
                var c = sr(l / 10);
                return 0 === c
                  ? e
                  : c <= u
                  ? void 0 === r[c - 1]
                    ? o.charAt(1)
                    : r[c - 1] + o.charAt(1)
                  : e;
              }
              h = r[l - 1];
          }
          return void 0 === h ? "" : h;
        })
      );
    }
  });
  var ur = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    hr = "[" + ur + "]",
    lr = RegExp("^" + hr + hr + "*"),
    cr = RegExp(hr + hr + "*$"),
    fr = function (t) {
      return function (e) {
        var n = String(m(e));
        return (
          1 & t && (n = n.replace(lr, "")), 2 & t && (n = n.replace(cr, "")), n
        );
      };
    },
    dr = { start: fr(1), end: fr(2), trim: fr(3) },
    gr = dr.trim;
  function pr(t, e) {
    var n,
      i = t.length,
      r = [];
    for (n = 0; n < i; n++) r.push(e(t[n]));
    return r;
  }
  function vr(t) {
    return ((t % 360) * Math.PI) / 180;
  }
  function yr(t) {
    return t.toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    });
  }
  function mr(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function wr(t, e, n, i) {
    return (
      (null != e && null != n) ||
        ((i = i || t.bbox()),
        null == e
          ? (e = (i.width / i.height) * n)
          : null == n && (n = (i.height / i.width) * e)),
      { width: e, height: n }
    );
  }
  function xr(t, e) {
    var n,
      i,
      r = t.origin;
    if ("string" == typeof r || null == r) {
      var s = (r || "center").toLowerCase().trim(),
        o = e.bbox(),
        a = o.height,
        u = o.width,
        h = o.x,
        l = o.y,
        c = s.includes("left") ? h : s.includes("right") ? h + u : h + u / 2,
        f = s.includes("top") ? l : s.includes("bottom") ? l + a : l + a / 2;
      (n = null != t.ox ? t.ox : c), (i = null != t.oy ? t.oy : f);
    } else (n = r[0]), (i = r[1]);
    return [n, i];
  }
  Ct(
    {
      target: "String",
      proto: !0,
      forced: (function (t) {
        return u(function () {
          return !!ur.trim() || "​᠎" != "​᠎".trim() || ur.trim.name !== t;
        });
      })("trim"),
    },
    {
      trim: function () {
        return gr(this);
      },
    }
  );
  var br = "http://www.w3.org/2000/svg",
    _r = "http://www.w3.org/2000/xmlns/",
    Sr = "http://www.w3.org/1999/xlink",
    kr = {
      window: "undefined" == typeof window ? null : window,
      document: "undefined" == typeof document ? null : document,
    };
  function Mr(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var Pr = function t() {
      Mr(this, t);
    },
    Or = {},
    Ir = "___SYMBOL___ROOT___";
  function Tr(t) {
    return kr.document.createElementNS(br, t);
  }
  function Ar(t) {
    if (t instanceof Pr) return t;
    if ("object" === ae(t)) return Dr(t);
    if (null == t) return new Or[Ir]();
    if ("string" == typeof t && "<" !== t.charAt(0))
      return Dr(kr.document.querySelector(t));
    var e = Tr("svg");
    return (e.innerHTML = t), Dr(e.firstChild);
  }
  function Er(t, e) {
    return e instanceof kr.window.Node ? e : Tr(t);
  }
  function Cr(t) {
    if (!t) return null;
    if (t.instance instanceof Pr) return t.instance;
    var e = mr(t.nodeName || "Dom");
    return (
      "LinearGradient" === e || "RadialGradient" === e
        ? (e = "Gradient")
        : Or[e] || (e = "Dom"),
      new Or[e](t)
    );
  }
  var Dr = Cr;
  function Vr(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.name,
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
      (Or[e] = t),
      n && (Or[Ir] = t),
      Li(Object.getOwnPropertyNames(t.prototype)),
      t
    );
  }
  var Lr = 1e3;
  function Rr(t) {
    return "Svgjs" + mr(t) + Lr++;
  }
  function Fr(t) {
    for (var e = t.children.length - 1; e >= 0; e--) Fr(t.children[e]);
    return t.id ? Cr(t).id(Rr(t.nodeName)) : Cr(t);
  }
  function jr(t, e, n) {
    var i, r;
    for (r = (t = Array.isArray(t) ? t : [t]).length - 1; r >= 0; r--)
      for (i in e) {
        var s = e[i];
        n && (s = zr(e[i])), (t[r].prototype[i] = s);
      }
  }
  function zr(t) {
    return function () {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      var r = n[n.length - 1];
      return !r || r.constructor !== Object || r instanceof Array
        ? t.apply(this, n)
        : t.apply(this, n.slice(0, -1)).attr(r);
    };
  }
  Di("Dom", {
    siblings: function () {
      return this.parent().children();
    },
    position: function () {
      return this.parent().index(this);
    },
    next: function () {
      return this.siblings()[this.position() + 1];
    },
    prev: function () {
      return this.siblings()[this.position() - 1];
    },
    forward: function () {
      var t = this.position() + 1,
        e = this.parent();
      return (
        e.removeElement(this).add(this, t),
        "function" == typeof e.isRoot &&
          e.isRoot() &&
          e.node.appendChild(e.defs().node),
        this
      );
    },
    backward: function () {
      var t = this.position();
      return (
        t > 0 &&
          this.parent()
            .removeElement(this)
            .add(this, t - 1),
        this
      );
    },
    front: function () {
      var t = this.parent();
      return (
        t.node.appendChild(this.node),
        "function" == typeof t.isRoot &&
          t.isRoot() &&
          t.node.appendChild(t.defs().node),
        this
      );
    },
    back: function () {
      return (
        this.position() > 0 && this.parent().removeElement(this).add(this, 0),
        this
      );
    },
    before: function (t) {
      (t = Ar(t)).remove();
      var e = this.position();
      return this.parent().add(t, e), this;
    },
    after: function (t) {
      (t = Ar(t)).remove();
      var e = this.position();
      return this.parent().add(t, e + 1), this;
    },
    insertBefore: function (t) {
      return (t = Ar(t)).before(this), this;
    },
    insertAfter: function (t) {
      return (t = Ar(t)).after(this), this;
    },
  });
  var Nr = Ie.filter;
  Ct(
    { target: "Array", proto: !0, forced: !Yt("filter") },
    {
      filter: function (t) {
        return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Gr = function (t, e) {
      var n = [][t];
      return (
        !n ||
        !u(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Hr = pt.indexOf,
    Br = [].indexOf,
    qr = !!Br && 1 / [1].indexOf(1, -0) < 0,
    Yr = Gr("indexOf");
  Ct(
    { target: "Array", proto: !0, forced: qr || Yr },
    {
      indexOf: function (t) {
        return qr
          ? Br.apply(this, arguments) || 0
          : Hr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Xr = [].join,
    Wr = y != Object,
    Ur = Gr("join", ",");
  Ct(
    { target: "Array", proto: !0, forced: Wr || Ur },
    {
      join: function (t) {
        return Xr.call(w(this), void 0 === t ? "," : t);
      },
    }
  );
  var Qr = jt("species"),
    $r = [].push,
    Zr = Math.min,
    Kr = 4294967295,
    Jr = !u(function () {
      return !RegExp(Kr, "y");
    });
  Ji(
    "split",
    2,
    function (t, e, n) {
      var i;
      return (
        (i =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (t, n) {
                var i = String(m(this)),
                  r = void 0 === n ? Kr : n >>> 0;
                if (0 === r) return [];
                if (void 0 === t) return [i];
                if (!Wi(t)) return e.call(i, t, r);
                for (
                  var s,
                    o,
                    a,
                    u = [],
                    h =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    l = 0,
                    c = new RegExp(t.source, h + "g");
                  (s = Yi.call(c, i)) &&
                  !(
                    (o = c.lastIndex) > l &&
                    (u.push(i.slice(l, s.index)),
                    s.length > 1 &&
                      s.index < i.length &&
                      $r.apply(u, s.slice(1)),
                    (a = s[0].length),
                    (l = o),
                    u.length >= r)
                  );

                )
                  c.lastIndex === s.index && c.lastIndex++;
                return (
                  l === i.length
                    ? (!a && c.test("")) || u.push("")
                    : u.push(i.slice(l)),
                  u.length > r ? u.slice(0, r) : u
                );
              }
            : "0".split(void 0, 0).length
            ? function (t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n);
              }
            : e),
        [
          function (e, n) {
            var r = m(this),
              s = null == e ? void 0 : e[t];
            return void 0 !== s ? s.call(e, r, n) : i.call(String(r), e, n);
          },
          function (t, r) {
            var s = n(i, t, this, r, i !== e);
            if (s.done) return s.value;
            var o = A(t),
              a = String(this),
              u = (function (t, e) {
                var n,
                  i = A(t).constructor;
                return void 0 === i || null == (n = A(i)[Qr]) ? e : _e(n);
              })(o, RegExp),
              h = o.unicode,
              l =
                (o.ignoreCase ? "i" : "") +
                (o.multiline ? "m" : "") +
                (o.unicode ? "u" : "") +
                (Jr ? "y" : "g"),
              c = new u(Jr ? o : "^(?:" + o.source + ")", l),
              f = void 0 === r ? Kr : r >>> 0;
            if (0 === f) return [];
            if (0 === a.length) return null === nr(c, a) ? [a] : [];
            for (var d = 0, g = 0, p = []; g < a.length; ) {
              c.lastIndex = Jr ? g : 0;
              var v,
                y = nr(c, Jr ? a : a.slice(g));
              if (
                null === y ||
                (v = Zr(lt(c.lastIndex + (Jr ? 0 : g)), a.length)) === d
              )
                g = er(a, g, h);
              else {
                if ((p.push(a.slice(d, g)), p.length === f)) return p;
                for (var m = 1; m <= y.length - 1; m++)
                  if ((p.push(y[m]), p.length === f)) return p;
                g = d = v;
              }
            }
            return p.push(a.slice(d)), p;
          },
        ]
      );
    },
    !Jr
  );
  var ts = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
    es = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    ns = /rgb\((\d+),(\d+),(\d+)\)/,
    is = /(#[a-z0-9\-_]+)/i,
    rs = /\)\s*,?\s*/,
    ss = /\s/g,
    os = /^#[a-f0-9]{3,6}$/i,
    as = /^rgb\(/,
    us = /^(\s+)?$/,
    hs = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    ls = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
    cs = /[\s,]+/,
    fs = /([^e])-/gi,
    ds = /[MLHVCSQTAZ]/gi,
    gs = /[MLHVCSQTAZ]/i,
    ps = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
    vs = /\./g;
  Di("Dom", {
    classes: function () {
      var t = this.attr("class");
      return null == t ? [] : t.trim().split(cs);
    },
    hasClass: function (t) {
      return -1 !== this.classes().indexOf(t);
    },
    addClass: function (t) {
      if (!this.hasClass(t)) {
        var e = this.classes();
        e.push(t), this.attr("class", e.join(" "));
      }
      return this;
    },
    removeClass: function (t) {
      return (
        this.hasClass(t) &&
          this.attr(
            "class",
            this.classes()
              .filter(function (e) {
                return e !== t;
              })
              .join(" ")
          ),
        this
      );
    },
    toggleClass: function (t) {
      return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
    },
  });
  var ys = Ie.forEach,
    ms = Gr("forEach")
      ? function (t) {
          return ys(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  for (var ws in (Ct(
    { target: "Array", proto: !0, forced: [].forEach != ms },
    { forEach: ms }
  ),
  _i)) {
    var xs = a[ws],
      bs = xs && xs.prototype;
    if (bs && bs.forEach !== ms)
      try {
        D(bs, "forEach", ms);
      } catch (t) {
        bs.forEach = ms;
      }
  }
  Di("Dom", {
    css: function (t, e) {
      var n = {};
      if (0 === arguments.length)
        return (
          this.node.style.cssText
            .split(/\s*;\s*/)
            .filter(function (t) {
              return !!t.length;
            })
            .forEach(function (t) {
              var e = t.split(/\s*:\s*/);
              n[e[0]] = e[1];
            }),
          n
        );
      if (arguments.length < 2) {
        if (Array.isArray(t)) {
          var i = !0,
            r = !1,
            s = void 0;
          try {
            for (
              var o, a = t[Symbol.iterator]();
              !(i = (o = a.next()).done);
              i = !0
            ) {
              var u = o.value,
                h = yr(u);
              n[h] = this.node.style[h];
            }
          } catch (t) {
            (r = !0), (s = t);
          } finally {
            try {
              i || null == a.return || a.return();
            } finally {
              if (r) throw s;
            }
          }
          return n;
        }
        if ("string" == typeof t) return this.node.style[yr(t)];
        if ("object" === ae(t))
          for (var l in t)
            this.node.style[yr(l)] = null == t[l] || us.test(t[l]) ? "" : t[l];
      }
      return (
        2 === arguments.length &&
          (this.node.style[yr(t)] = null == e || us.test(e) ? "" : e),
        this
      );
    },
    show: function () {
      return this.css("display", "");
    },
    hide: function () {
      return this.css("display", "none");
    },
    visible: function () {
      return "none" !== this.css("display");
    },
  }),
    Di("Dom", {
      data: function (t, e, n) {
        if ("object" === ae(t)) for (e in t) this.data(e, t[e]);
        else if (arguments.length < 2)
          try {
            return JSON.parse(this.attr("data-" + t));
          } catch (e) {
            return this.attr("data-" + t);
          }
        else
          this.attr(
            "data-" + t,
            null === e
              ? null
              : !0 === n || "string" == typeof e || "number" == typeof e
              ? e
              : JSON.stringify(e)
          );
        return this;
      },
    }),
    Di("Dom", {
      remember: function (t, e) {
        if ("object" === ae(arguments[0]))
          for (var n in t) this.remember(n, t[n]);
        else {
          if (1 === arguments.length) return this.memory()[t];
          this.memory()[t] = e;
        }
        return this;
      },
      forget: function () {
        if (0 === arguments.length) this._memory = {};
        else
          for (var t = arguments.length - 1; t >= 0; t--)
            delete this.memory()[arguments[t]];
        return this;
      },
      memory: function () {
        return (this._memory = this._memory || {});
      },
    });
  var _s = function (t) {
      return function (e, n, i, r) {
        _e(n);
        var s = ue(e),
          o = y(s),
          a = lt(s.length),
          u = t ? a - 1 : 0,
          h = t ? -1 : 1;
        if (i < 2)
          for (;;) {
            if (u in o) {
              (r = o[u]), (u += h);
              break;
            }
            if (((u += h), t ? u < 0 : a <= u))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; t ? u >= 0 : a > u; u += h) u in o && (r = n(r, o[u], u, s));
        return r;
      };
    },
    Ss = [_s(!1), _s(!0)][0];
  Ct(
    { target: "Array", proto: !0, forced: Gr("reduce") },
    {
      reduce: function (t) {
        return Ss(
          this,
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var ks = 0,
    Ms = {};
  function Ps(t) {
    var e = t.getEventHolder();
    return e === kr.window && (e = Ms), e.events || (e.events = {}), e.events;
  }
  function Os(t) {
    return t.getEventTarget();
  }
  function Is(t, e, n, i, r) {
    var s = n.bind(i || t),
      o = Ar(t),
      a = Ps(o),
      u = Os(o);
    (e = Array.isArray(e) ? e : e.split(cs)),
      n._svgjsListenerId || (n._svgjsListenerId = ++ks),
      e.forEach(function (t) {
        var e = t.split(".")[0],
          i = t.split(".")[1] || "*";
        (a[e] = a[e] || {}),
          (a[e][i] = a[e][i] || {}),
          (a[e][i][n._svgjsListenerId] = s),
          u.addEventListener(e, s, r || !1);
      });
  }
  function Ts(t, e, n, i) {
    var r = Ar(t),
      s = Ps(r),
      o = Os(r);
    ("function" != typeof n || (n = n._svgjsListenerId)) &&
      (e = Array.isArray(e) ? e : (e || "").split(cs)).forEach(function (t) {
        var e,
          a,
          u = t && t.split(".")[0],
          h = t && t.split(".")[1];
        if (n)
          s[u] &&
            s[u][h || "*"] &&
            (o.removeEventListener(u, s[u][h || "*"][n], i || !1),
            delete s[u][h || "*"][n]);
        else if (u && h) {
          if (s[u] && s[u][h]) {
            for (a in s[u][h]) Ts(o, [u, h].join("."), a);
            delete s[u][h];
          }
        } else if (h)
          for (t in s) for (e in s[t]) h === e && Ts(o, [t, h].join("."));
        else if (u) {
          if (s[u]) {
            for (e in s[u]) Ts(o, [u, e].join("."));
            delete s[u];
          }
        } else {
          for (t in s) Ts(o, t);
          !(function (t) {
            var e = t.getEventHolder();
            e.events && (e.events = {});
          })(r);
        }
      });
  }
  var As = jt("isConcatSpreadable"),
    Es = 9007199254740991,
    Cs = "Maximum allowed index exceeded",
    Ds =
      Bt >= 51 ||
      !u(function () {
        var t = [];
        return (t[As] = !1), t.concat()[0] !== t;
      }),
    Vs = Yt("concat"),
    Ls = function (t) {
      if (!x(t)) return !1;
      var e = t[As];
      return void 0 !== e ? !!e : Dt(t);
    };
  Ct(
    { target: "Array", proto: !0, forced: !Ds || !Vs },
    {
      concat: function (t) {
        var e,
          n,
          i,
          r,
          s,
          o = ue(this),
          a = Me(o, 0),
          u = 0;
        for (e = -1, i = arguments.length; e < i; e++)
          if (Ls((s = -1 === e ? o : arguments[e]))) {
            if (u + (r = lt(s.length)) > Es) throw TypeError(Cs);
            for (n = 0; n < r; n++, u++) n in s && Vt(a, u, s[n]);
          } else {
            if (u >= Es) throw TypeError(Cs);
            Vt(a, u++, s);
          }
        return (a.length = u), a;
      },
    }
  );
  var Rs = Ie.map;
  Ct(
    { target: "Array", proto: !0, forced: !Yt("map") },
    {
      map: function (t) {
        return Rs(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Fs = Date.prototype,
    js = "Invalid Date",
    zs = Fs.toString,
    Ns = Fs.getTime;
  new Date(NaN) + "" != js &&
    nt(Fs, "toString", function () {
      var t = Ns.call(this);
      return t == t ? zs.call(this) : js;
    });
  var Gs = dr.trim,
    Hs = a.parseInt,
    Bs = /^[+-]?0[Xx]/,
    qs =
      8 !== Hs(ur + "08") || 22 !== Hs(ur + "0x16")
        ? function (t, e) {
            var n = Gs(String(t));
            return Hs(n, e >>> 0 || (Bs.test(n) ? 16 : 10));
          }
        : Hs;
  Ct({ global: !0, forced: parseInt != qs }, { parseInt: qs });
  var Ys = "toString",
    Xs = RegExp.prototype,
    Ws = Xs.toString,
    Us = u(function () {
      return "/a/b" != Ws.call({ source: "a", flags: "b" });
    }),
    Qs = Ws.name != Ys;
  function $s(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        ) {
          var n = [],
            i = !0,
            r = !1,
            s = void 0;
          try {
            for (
              var o, a = t[Symbol.iterator]();
              !(i = (o = a.next()).done) &&
              (n.push(o.value), !e || n.length !== e);
              i = !0
            );
          } catch (t) {
            (r = !0), (s = t);
          } finally {
            try {
              i || null == a.return || a.return();
            } finally {
              if (r) throw s;
            }
          }
          return n;
        }
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  function Zs(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function Ks(t, e, n) {
    return e && Zs(t.prototype, e), n && Zs(t, n), t;
  }
  function Js(t) {
    return 4 === t.length
      ? [
          "#",
          t.substring(1, 2),
          t.substring(1, 2),
          t.substring(2, 3),
          t.substring(2, 3),
          t.substring(3, 4),
          t.substring(3, 4),
        ].join("")
      : t;
  }
  function to(t) {
    var e = Math.round(t),
      n = Math.max(0, Math.min(255, e)).toString(16);
    return 1 === n.length ? "0" + n : n;
  }
  function eo(t, e) {
    for (var n = e.length; n--; ) if (null == t[e[n]]) return !1;
    return !0;
  }
  function no(t, e) {
    var n = eo(t, "rgb")
      ? { _a: t.r, _b: t.g, _c: t.b, space: "rgb" }
      : eo(t, "xyz")
      ? { _a: t.x, _b: t.y, _c: t.z, _d: 0, space: "xyz" }
      : eo(t, "hsl")
      ? { _a: t.h, _b: t.s, _c: t.l, _d: 0, space: "hsl" }
      : eo(t, "lab")
      ? { _a: t.l, _b: t.a, _c: t.b, _d: 0, space: "lab" }
      : eo(t, "lch")
      ? { _a: t.l, _b: t.c, _c: t.h, _d: 0, space: "lch" }
      : eo(t, "cmyk")
      ? { _a: t.c, _b: t.m, _c: t.y, _d: t.k, space: "cmyk" }
      : { _a: 0, _b: 0, _c: 0, space: "rgb" };
    return (n.space = e || n.space), n;
  }
  function io(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  (Us || Qs) &&
    nt(
      RegExp.prototype,
      Ys,
      function () {
        var t = A(this),
          e = String(t.source),
          n = t.flags;
        return (
          "/" +
          e +
          "/" +
          String(
            void 0 === n && t instanceof RegExp && !("flags" in Xs)
              ? zi.call(t)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var ro = (function () {
      function t() {
        Mr(this, t), this.init.apply(this, arguments);
      }
      return (
        Ks(
          t,
          [
            {
              key: "init",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  r =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : "rgb";
                if (((t = t || 0), this.space))
                  for (var s in this.space) delete this[this.space[s]];
                if ("number" == typeof t)
                  (r = "string" == typeof i ? i : r),
                    (i = "string" == typeof i ? 0 : i),
                    Object.assign(this, {
                      _a: t,
                      _b: e,
                      _c: n,
                      _d: i,
                      space: r,
                    });
                else if (t instanceof Array)
                  (this.space =
                    e || ("string" == typeof t[3] ? t[3] : t[4]) || "rgb"),
                    Object.assign(this, {
                      _a: t[0],
                      _b: t[1],
                      _c: t[2],
                      _d: t[3] || 0,
                    });
                else if (t instanceof Object) {
                  var o = no(t, e);
                  Object.assign(this, o);
                } else if ("string" == typeof t)
                  if (as.test(t)) {
                    var a = t.replace(ss, ""),
                      u = ns
                        .exec(a)
                        .slice(1, 4)
                        .map(function (t) {
                          return parseInt(t);
                        }),
                      h = $s(u, 3),
                      l = h[0],
                      c = h[1],
                      f = h[2];
                    Object.assign(this, {
                      _a: l,
                      _b: c,
                      _c: f,
                      _d: 0,
                      space: "rgb",
                    });
                  } else {
                    if (!os.test(t))
                      throw Error(
                        "Unsupported string format, can't construct Color"
                      );
                    var d = function (t) {
                        return parseInt(t, 16);
                      },
                      g = es.exec(Js(t)).map(d),
                      p = $s(g, 4),
                      v = p[1],
                      y = p[2],
                      m = p[3];
                    Object.assign(this, {
                      _a: v,
                      _b: y,
                      _c: m,
                      _d: 0,
                      space: "rgb",
                    });
                  }
                var w = this._a,
                  x = this._b,
                  b = this._c,
                  _ = this._d,
                  S =
                    "rgb" === this.space
                      ? { r: w, g: x, b: b }
                      : "xyz" === this.space
                      ? { x: w, y: x, z: b }
                      : "hsl" === this.space
                      ? { h: w, s: x, l: b }
                      : "lab" === this.space
                      ? { l: w, a: x, b: b }
                      : "lch" === this.space
                      ? { l: w, c: x, h: b }
                      : "cmyk" === this.space
                      ? { c: w, m: x, y: b, k: _ }
                      : {};
                Object.assign(this, S);
              },
            },
            {
              key: "rgb",
              value: function () {
                if ("rgb" === this.space) return this;
                if ("lab" === (A = this.space) || "xyz" === A || "lch" === A) {
                  var e = this.x,
                    n = this.y,
                    i = this.z;
                  if ("lab" === this.space || "lch" === this.space) {
                    var r = this.l,
                      s = this.a,
                      o = this.b;
                    if ("lch" === this.space) {
                      var a = this.c,
                        u = this.h,
                        h = Math.PI / 180;
                      (s = a * Math.cos(h * u)), (o = a * Math.sin(h * u));
                    }
                    var l = (r + 16) / 116,
                      c = s / 500 + l,
                      f = l - o / 200,
                      d = 16 / 116,
                      g = 0.008856,
                      p = 7.787;
                    (e =
                      0.95047 *
                      (Math.pow(c, 3) > g ? Math.pow(c, 3) : (c - d) / p)),
                      (n =
                        1 *
                        (Math.pow(l, 3) > g ? Math.pow(l, 3) : (l - d) / p)),
                      (i =
                        1.08883 *
                        (Math.pow(f, 3) > g ? Math.pow(f, 3) : (f - d) / p));
                  }
                  var v = 3.2406 * e + -1.5372 * n + -0.4986 * i,
                    y = -0.9689 * e + 1.8758 * n + 0.0415 * i,
                    m = 0.0557 * e + -0.204 * n + 1.057 * i,
                    w = Math.pow,
                    x = 0.0031308;
                  return new t(
                    255 * (v > x ? 1.055 * w(v, 1 / 2.4) - 0.055 : 12.92 * v),
                    255 * (y > x ? 1.055 * w(y, 1 / 2.4) - 0.055 : 12.92 * y),
                    255 * (m > x ? 1.055 * w(m, 1 / 2.4) - 0.055 : 12.92 * m)
                  );
                }
                if ("hsl" === this.space) {
                  var b = this.h,
                    _ = this.s,
                    S = this.l;
                  if (((b /= 360), (S /= 100), 0 == (_ /= 100)))
                    return new t((S *= 255), S, S);
                  var k = S < 0.5 ? S * (1 + _) : S + _ - S * _,
                    M = 2 * S - k;
                  return new t(
                    255 * io(M, k, b + 1 / 3),
                    255 * io(M, k, b),
                    255 * io(M, k, b - 1 / 3)
                  );
                }
                if ("cmyk" === this.space) {
                  var P = this.c,
                    O = this.m,
                    I = this.y,
                    T = this.k;
                  return new t(
                    255 * (1 - Math.min(1, P * (1 - T) + T)),
                    255 * (1 - Math.min(1, O * (1 - T) + T)),
                    255 * (1 - Math.min(1, I * (1 - T) + T))
                  );
                }
                return this;
                var A;
              },
            },
            {
              key: "lab",
              value: function () {
                var e = this.xyz(),
                  n = e.x,
                  i = e.y;
                return new t(
                  116 * i - 16,
                  500 * (n - i),
                  200 * (i - e.z),
                  "lab"
                );
              },
            },
            {
              key: "xyz",
              value: function () {
                var e = this.rgb(),
                  n = $s(
                    [e._a, e._b, e._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  i = n[0],
                  r = n[1],
                  s = n[2],
                  o =
                    i > 0.04045
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92,
                  a =
                    r > 0.04045
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92,
                  u =
                    s > 0.04045
                      ? Math.pow((s + 0.055) / 1.055, 2.4)
                      : s / 12.92,
                  h = (0.4124 * o + 0.3576 * a + 0.1805 * u) / 0.95047,
                  l = (0.2126 * o + 0.7152 * a + 0.0722 * u) / 1,
                  c = (0.0193 * o + 0.1192 * a + 0.9505 * u) / 1.08883;
                return new t(
                  h > 0.008856 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116,
                  l > 0.008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116,
                  c > 0.008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116,
                  "xyz"
                );
              },
            },
            {
              key: "lch",
              value: function () {
                var e = this.lab(),
                  n = e.l,
                  i = e.a,
                  r = e.b,
                  s = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2)),
                  o = (180 * Math.atan2(r, i)) / Math.PI;
                return o < 0 && (o = 360 - (o *= -1)), new t(n, s, o, "lch");
              },
            },
            {
              key: "hsl",
              value: function () {
                var e = this.rgb(),
                  n = $s(
                    [e._a, e._b, e._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  i = n[0],
                  r = n[1],
                  s = n[2],
                  o = Math.max(i, r, s),
                  a = Math.min(i, r, s),
                  u = (o + a) / 2,
                  h = o === a,
                  l = o - a;
                return new t(
                  360 *
                    (h
                      ? 0
                      : o === i
                      ? ((r - s) / l + (r < s ? 6 : 0)) / 6
                      : o === r
                      ? ((s - i) / l + 2) / 6
                      : o === s
                      ? ((i - r) / l + 4) / 6
                      : 0),
                  100 * (h ? 0 : u > 0.5 ? l / (2 - o - a) : l / (o + a)),
                  100 * u,
                  "hsl"
                );
              },
            },
            {
              key: "cmyk",
              value: function () {
                var e = this.rgb(),
                  n = $s(
                    [e._a, e._b, e._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  i = n[0],
                  r = n[1],
                  s = n[2],
                  o = Math.min(1 - i, 1 - r, 1 - s);
                return 1 === o
                  ? new t(0, 0, 0, 1, "cmyk")
                  : new t(
                      (1 - i - o) / (1 - o),
                      (1 - r - o) / (1 - o),
                      (1 - s - o) / (1 - o),
                      o,
                      "cmyk"
                    );
              },
            },
            {
              key: "_clamped",
              value: function () {
                var t = this.rgb(),
                  e = t._a,
                  n = t._b,
                  i = t._c,
                  r = Math.max,
                  s = Math.min,
                  o = Math.round;
                return [e, n, i].map(function (t) {
                  return r(0, s(o(t), 255));
                });
              },
            },
            {
              key: "toHex",
              value: function () {
                var t = $s(this._clamped().map(to), 3),
                  e = t[0],
                  n = t[1],
                  i = t[2];
                return "#".concat(e).concat(n).concat(i);
              },
            },
            {
              key: "toString",
              value: function () {
                return this.toHex();
              },
            },
            {
              key: "toRgb",
              value: function () {
                var t = $s(this._clamped(), 3),
                  e = t[0],
                  n = t[1],
                  i = t[2];
                return "rgb(".concat(e, ",").concat(n, ",").concat(i, ")");
              },
            },
            {
              key: "toArray",
              value: function () {
                return [this._a, this._b, this._c, this._d, this.space];
              },
            },
          ],
          [
            {
              key: "random",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "vibrant",
                  n = arguments.length > 1 ? arguments[1] : void 0,
                  i = Math.random,
                  r = Math.round,
                  s = Math.sin,
                  o = Math.PI;
                if ("vibrant" === e) {
                  var a = 24 * i() + 57,
                    u = 38 * i() + 45,
                    h = 360 * i(),
                    l = new t(a, u, h, "lch");
                  return l;
                }
                if ("sine" === e) {
                  var c = r(
                      80 * s((2 * o * (n = null == n ? i() : n)) / 0.5 + 0.01) +
                        150
                    ),
                    f = r(50 * s((2 * o * n) / 0.5 + 4.6) + 200),
                    d = r(100 * s((2 * o * n) / 0.5 + 2.3) + 150),
                    g = new t(c, f, d);
                  return g;
                }
                if ("pastel" === e) {
                  var p = 8 * i() + 86,
                    v = 17 * i() + 9,
                    y = 360 * i(),
                    m = new t(p, v, y, "lch");
                  return m;
                }
                if ("dark" === e) {
                  var w = 10 + 10 * i(),
                    x = 50 * i() + 86,
                    b = 360 * i(),
                    _ = new t(w, x, b, "lch");
                  return _;
                }
                if ("rgb" === e) {
                  var S = 255 * i(),
                    k = 255 * i(),
                    M = 255 * i(),
                    P = new t(S, k, M);
                  return P;
                }
                if ("lab" === e) {
                  var O = 100 * i(),
                    I = 256 * i() - 128,
                    T = 256 * i() - 128,
                    A = new t(O, I, T, "lab");
                  return A;
                }
                if ("grey" === e) {
                  var E = 255 * i(),
                    C = new t(E, E, E);
                  return C;
                }
              },
            },
            {
              key: "test",
              value: function (t) {
                return "string" == typeof t && (os.test(t) || as.test(t));
              },
            },
            {
              key: "isRgb",
              value: function (t) {
                return (
                  t &&
                  "number" == typeof t.r &&
                  "number" == typeof t.g &&
                  "number" == typeof t.b
                );
              },
            },
            {
              key: "isColor",
              value: function (e) {
                return e && (e instanceof t || this.isRgb(e) || this.test(e));
              },
            },
          ]
        ),
        t
      );
    })(),
    so = u(function () {
      he(1);
    });
  function oo(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function ao(t, e) {
    return !e || ("object" !== ae(e) && "function" != typeof e) ? oo(t) : e;
  }
  function uo(t) {
    return (uo = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function ho(t, e, n) {
    return (ho =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var i = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = uo(t));

              );
              return t;
            })(t, e);
            if (i) {
              var r = Object.getOwnPropertyDescriptor(i, e);
              return r.get ? r.get.call(n) : r.value;
            }
          })(t, e, n || t);
  }
  function lo(t, e) {
    return (lo =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function co(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && lo(t, e);
  }
  Ct(
    { target: "Object", stat: !0, forced: so },
    {
      keys: function (t) {
        return he(ue(t));
      },
    }
  ),
    Ji("match", 1, function (t, e, n) {
      return [
        function (e) {
          var n = m(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n));
        },
        function (t) {
          var i = n(e, t, this);
          if (i.done) return i.value;
          var r = A(t),
            s = String(this);
          if (!r.global) return nr(r, s);
          var o = r.unicode;
          r.lastIndex = 0;
          for (var a, u = [], h = 0; null !== (a = nr(r, s)); ) {
            var l = String(a[0]);
            (u[h] = l),
              "" === l && (r.lastIndex = er(s, lt(r.lastIndex), o)),
              h++;
          }
          return 0 === h ? null : u;
        },
      ];
    });
  var fo = xt.f,
    go = T.f,
    po = C.f,
    vo = dr.trim,
    yo = "Number",
    mo = a.Number,
    wo = mo.prototype,
    xo = p(pe(wo)) == yo,
    bo = function (t) {
      var e,
        n,
        i,
        r,
        s,
        o,
        a,
        u,
        h = b(t, !1);
      if ("string" == typeof h && h.length > 2)
        if (43 === (e = (h = vo(h)).charCodeAt(0)) || 45 === e) {
          if (88 === (n = h.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === e) {
          switch (h.charCodeAt(1)) {
            case 66:
            case 98:
              (i = 2), (r = 49);
              break;
            case 79:
            case 111:
              (i = 8), (r = 55);
              break;
            default:
              return +h;
          }
          for (o = (s = h.slice(2)).length, a = 0; a < o; a++)
            if ((u = s.charCodeAt(a)) < 48 || u > r) return NaN;
          return parseInt(s, i);
        }
      return +h;
    };
  if (At(yo, !mo(" 0o1") || !mo("0b1") || mo("+0x1"))) {
    for (
      var _o,
        So = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this;
          return n instanceof So &&
            (xo
              ? u(function () {
                  wo.valueOf.call(n);
                })
              : p(n) != yo)
            ? hi(new mo(bo(e)), n, So)
            : bo(e);
        },
        ko = h
          ? fo(mo)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
              ","
            ),
        Mo = 0;
      ko.length > Mo;
      Mo++
    )
      S(mo, (_o = ko[Mo])) && !S(So, _o) && po(So, _o, go(mo, _o));
    (So.prototype = wo), (wo.constructor = So), nt(a, yo, So);
  }
  var Po = dr.trim,
    Oo = a.parseFloat,
    Io =
      1 / Oo(ur + "-0") != -1 / 0
        ? function (t) {
            var e = Po(String(t)),
              n = Oo(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n;
          }
        : Oo;
  Ct({ global: !0, forced: parseFloat != Io }, { parseFloat: Io });
  var To = (function () {
    function t() {
      Mr(this, t), this.init.apply(this, arguments);
    }
    return (
      Ks(t, [
        {
          key: "init",
          value: function (t, e) {
            var n = Array.isArray(t)
              ? { x: t[0], y: t[1] }
              : "object" === ae(t)
              ? { x: t.x, y: t.y }
              : { x: t, y: e };
            return (
              (this.x = null == n.x ? 0 : n.x),
              (this.y = null == n.y ? 0 : n.y),
              this
            );
          },
        },
        {
          key: "clone",
          value: function () {
            return new t(this);
          },
        },
        {
          key: "transform",
          value: function (t) {
            return this.clone().transformO(t);
          },
        },
        {
          key: "transformO",
          value: function (t) {
            Eo.isMatrixLike(t) || (t = new Eo(t));
            var e = this.x,
              n = this.y;
            return (
              (this.x = t.a * e + t.c * n + t.e),
              (this.y = t.b * e + t.d * n + t.f),
              this
            );
          },
        },
        {
          key: "toArray",
          value: function () {
            return [this.x, this.y];
          },
        },
      ]),
      t
    );
  })();
  function Ao(t, e, n) {
    return Math.abs(e - t) < (n || 1e-6);
  }
  var Eo = (function () {
    function t() {
      Mr(this, t), this.init.apply(this, arguments);
    }
    return (
      Ks(
        t,
        [
          {
            key: "init",
            value: function (e) {
              var n = t.fromArray([1, 0, 0, 1, 0, 0]);
              return (
                (e =
                  e instanceof $o
                    ? e.matrixify()
                    : "string" == typeof e
                    ? t.fromArray(e.split(cs).map(parseFloat))
                    : Array.isArray(e)
                    ? t.fromArray(e)
                    : "object" === ae(e) && t.isMatrixLike(e)
                    ? e
                    : "object" === ae(e)
                    ? new t().transform(e)
                    : 6 === arguments.length
                    ? t.fromArray([].slice.call(arguments))
                    : n),
                (this.a = null != e.a ? e.a : n.a),
                (this.b = null != e.b ? e.b : n.b),
                (this.c = null != e.c ? e.c : n.c),
                (this.d = null != e.d ? e.d : n.d),
                (this.e = null != e.e ? e.e : n.e),
                (this.f = null != e.f ? e.f : n.f),
                this
              );
            },
          },
          {
            key: "clone",
            value: function () {
              return new t(this);
            },
          },
          {
            key: "transform",
            value: function (e) {
              if (t.isMatrixLike(e)) return new t(e).multiplyO(this);
              var n = t.formatTransforms(e),
                i = new To(n.ox, n.oy).transform(this),
                r = i.x,
                s = i.y,
                o = new t()
                  .translateO(n.rx, n.ry)
                  .lmultiplyO(this)
                  .translateO(-r, -s)
                  .scaleO(n.scaleX, n.scaleY)
                  .skewO(n.skewX, n.skewY)
                  .shearO(n.shear)
                  .rotateO(n.theta)
                  .translateO(r, s);
              if (isFinite(n.px) || isFinite(n.py)) {
                var a = new To(r, s).transform(o),
                  u = n.px ? n.px - a.x : 0,
                  h = n.py ? n.py - a.y : 0;
                o.translateO(u, h);
              }
              return o.translateO(n.tx, n.ty), o;
            },
          },
          {
            key: "compose",
            value: function (e) {
              e.origin &&
                ((e.originX = e.origin[0]), (e.originY = e.origin[1]));
              var n = e.originX || 0,
                i = e.originY || 0,
                r = e.scaleX || 1,
                s = e.scaleY || 1,
                o = e.shear || 0,
                a = e.rotate || 0,
                u = e.translateX || 0,
                h = e.translateY || 0;
              return new t()
                .translateO(-n, -i)
                .scaleO(r, s)
                .shearO(o)
                .rotateO(a)
                .translateO(u, h)
                .lmultiplyO(this)
                .translateO(n, i);
            },
          },
          {
            key: "decompose",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = this.a,
                i = this.b,
                r = this.c,
                s = this.d,
                o = this.e,
                a = this.f,
                u = n * s - i * r,
                h = u > 0 ? 1 : -1,
                l = h * Math.sqrt(n * n + i * i),
                c = Math.atan2(h * i, h * n),
                f = (180 / Math.PI) * c,
                d = Math.cos(c),
                g = Math.sin(c),
                p = (n * r + i * s) / u,
                v = (r * l) / (p * n - i) || (s * l) / (p * i + n),
                y = o - t + t * d * l + e * (p * d * l - g * v),
                m = a - e + t * g * l + e * (p * g * l + d * v);
              return {
                scaleX: l,
                scaleY: v,
                shear: p,
                rotate: f,
                translateX: y,
                translateY: m,
                originX: t,
                originY: e,
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e,
                f: this.f,
              };
            },
          },
          {
            key: "multiply",
            value: function (t) {
              return this.clone().multiplyO(t);
            },
          },
          {
            key: "multiplyO",
            value: function (e) {
              var n = e instanceof t ? e : new t(e);
              return t.matrixMultiply(this, n, this);
            },
          },
          {
            key: "lmultiply",
            value: function (t) {
              return this.clone().lmultiplyO(t);
            },
          },
          {
            key: "lmultiplyO",
            value: function (e) {
              var n = e instanceof t ? e : new t(e);
              return t.matrixMultiply(n, this, this);
            },
          },
          {
            key: "inverseO",
            value: function () {
              var t = this.a,
                e = this.b,
                n = this.c,
                i = this.d,
                r = this.e,
                s = this.f,
                o = t * i - e * n;
              if (!o) throw new Error("Cannot invert " + this);
              var a = i / o,
                u = -e / o,
                h = -n / o,
                l = t / o,
                c = -(a * r + h * s),
                f = -(u * r + l * s);
              return (
                (this.a = a),
                (this.b = u),
                (this.c = h),
                (this.d = l),
                (this.e = c),
                (this.f = f),
                this
              );
            },
          },
          {
            key: "inverse",
            value: function () {
              return this.clone().inverseO();
            },
          },
          {
            key: "translate",
            value: function (t, e) {
              return this.clone().translateO(t, e);
            },
          },
          {
            key: "translateO",
            value: function (t, e) {
              return (this.e += t || 0), (this.f += e || 0), this;
            },
          },
          {
            key: "scale",
            value: function (t, e, n, i) {
              var r;
              return (r = this.clone()).scaleO.apply(r, arguments);
            },
          },
          {
            key: "scaleO",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0;
              3 === arguments.length && ((i = n), (n = e), (e = t));
              var r = this.a,
                s = this.b,
                o = this.c,
                a = this.d,
                u = this.e,
                h = this.f;
              return (
                (this.a = r * t),
                (this.b = s * e),
                (this.c = o * t),
                (this.d = a * e),
                (this.e = u * t - n * t + n),
                (this.f = h * e - i * e + i),
                this
              );
            },
          },
          {
            key: "rotate",
            value: function (t, e, n) {
              return this.clone().rotateO(t, e, n);
            },
          },
          {
            key: "rotateO",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
              t = vr(t);
              var i = Math.cos(t),
                r = Math.sin(t),
                s = this.a,
                o = this.b,
                a = this.c,
                u = this.d,
                h = this.e,
                l = this.f;
              return (
                (this.a = s * i - o * r),
                (this.b = o * i + s * r),
                (this.c = a * i - u * r),
                (this.d = u * i + a * r),
                (this.e = h * i - l * r + n * r - e * i + e),
                (this.f = l * i + h * r - e * r - n * i + n),
                this
              );
            },
          },
          {
            key: "flip",
            value: function (t, e) {
              return this.clone().flipO(t, e);
            },
          },
          {
            key: "flipO",
            value: function (t, e) {
              return "x" === t
                ? this.scaleO(-1, 1, e, 0)
                : "y" === t
                ? this.scaleO(1, -1, 0, e)
                : this.scaleO(-1, -1, t, e || t);
            },
          },
          {
            key: "shear",
            value: function (t, e, n) {
              return this.clone().shearO(t, e, n);
            },
          },
          {
            key: "shearO",
            value: function (t) {
              var e =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                n = this.a,
                i = this.b,
                r = this.c,
                s = this.d,
                o = this.e,
                a = this.f;
              return (
                (this.a = n + i * t),
                (this.c = r + s * t),
                (this.e = o + a * t - e * t),
                this
              );
            },
          },
          {
            key: "skew",
            value: function (t, e, n, i) {
              var r;
              return (r = this.clone()).skewO.apply(r, arguments);
            },
          },
          {
            key: "skewO",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0;
              3 === arguments.length && ((i = n), (n = e), (e = t)),
                (t = vr(t)),
                (e = vr(e));
              var r = Math.tan(t),
                s = Math.tan(e),
                o = this.a,
                a = this.b,
                u = this.c,
                h = this.d,
                l = this.e,
                c = this.f;
              return (
                (this.a = o + a * r),
                (this.b = a + o * s),
                (this.c = u + h * r),
                (this.d = h + u * s),
                (this.e = l + c * r - i * r),
                (this.f = c + l * s - n * s),
                this
              );
            },
          },
          {
            key: "skewX",
            value: function (t, e, n) {
              return this.skew(t, 0, e, n);
            },
          },
          {
            key: "skewXO",
            value: function (t, e, n) {
              return this.skewO(t, 0, e, n);
            },
          },
          {
            key: "skewY",
            value: function (t, e, n) {
              return this.skew(0, t, e, n);
            },
          },
          {
            key: "skewYO",
            value: function (t, e, n) {
              return this.skewO(0, t, e, n);
            },
          },
          {
            key: "aroundO",
            value: function (t, e, n) {
              var i = t || 0,
                r = e || 0;
              return this.translateO(-i, -r).lmultiplyO(n).translateO(i, r);
            },
          },
          {
            key: "around",
            value: function (t, e, n) {
              return this.clone().aroundO(t, e, n);
            },
          },
          {
            key: "equals",
            value: function (e) {
              var n = new t(e);
              return (
                Ao(this.a, n.a) &&
                Ao(this.b, n.b) &&
                Ao(this.c, n.c) &&
                Ao(this.d, n.d) &&
                Ao(this.e, n.e) &&
                Ao(this.f, n.f)
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return (
                "matrix(" +
                this.a +
                "," +
                this.b +
                "," +
                this.c +
                "," +
                this.d +
                "," +
                this.e +
                "," +
                this.f +
                ")"
              );
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.a, this.b, this.c, this.d, this.e, this.f];
            },
          },
          {
            key: "valueOf",
            value: function () {
              return {
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e,
                f: this.f,
              };
            },
          },
        ],
        [
          {
            key: "fromArray",
            value: function (t) {
              return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
            },
          },
          {
            key: "isMatrixLike",
            value: function (t) {
              return (
                null != t.a ||
                null != t.b ||
                null != t.c ||
                null != t.d ||
                null != t.e ||
                null != t.f
              );
            },
          },
          {
            key: "formatTransforms",
            value: function (t) {
              var e = "both" === t.flip || !0 === t.flip,
                n = t.flip && (e || "x" === t.flip) ? -1 : 1,
                i = t.flip && (e || "y" === t.flip) ? -1 : 1,
                r =
                  t.skew && t.skew.length
                    ? t.skew[0]
                    : isFinite(t.skew)
                    ? t.skew
                    : isFinite(t.skewX)
                    ? t.skewX
                    : 0,
                s =
                  t.skew && t.skew.length
                    ? t.skew[1]
                    : isFinite(t.skew)
                    ? t.skew
                    : isFinite(t.skewY)
                    ? t.skewY
                    : 0,
                o =
                  t.scale && t.scale.length
                    ? t.scale[0] * n
                    : isFinite(t.scale)
                    ? t.scale * n
                    : isFinite(t.scaleX)
                    ? t.scaleX * n
                    : n,
                a =
                  t.scale && t.scale.length
                    ? t.scale[1] * i
                    : isFinite(t.scale)
                    ? t.scale * i
                    : isFinite(t.scaleY)
                    ? t.scaleY * i
                    : i,
                u = t.shear || 0,
                h = t.rotate || t.theta || 0,
                l = new To(
                  t.origin || t.around || t.ox || t.originX,
                  t.oy || t.originY
                ),
                c = l.x,
                f = l.y,
                d = new To(
                  t.position || t.px || t.positionX,
                  t.py || t.positionY
                ),
                g = d.x,
                p = d.y,
                v = new To(
                  t.translate || t.tx || t.translateX,
                  t.ty || t.translateY
                ),
                y = v.x,
                m = v.y,
                w = new To(
                  t.relative || t.rx || t.relativeX,
                  t.ry || t.relativeY
                );
              return {
                scaleX: o,
                scaleY: a,
                skewX: r,
                skewY: s,
                shear: u,
                theta: h,
                rx: w.x,
                ry: w.y,
                tx: y,
                ty: m,
                ox: c,
                oy: f,
                px: g,
                py: p,
              };
            },
          },
          {
            key: "matrixMultiply",
            value: function (t, e, n) {
              var i = t.a * e.a + t.c * e.b,
                r = t.b * e.a + t.d * e.b,
                s = t.a * e.c + t.c * e.d,
                o = t.b * e.c + t.d * e.d,
                a = t.e + t.a * e.e + t.c * e.f,
                u = t.f + t.b * e.e + t.d * e.f;
              return (
                (n.a = i),
                (n.b = r),
                (n.c = s),
                (n.d = o),
                (n.e = a),
                (n.f = u),
                n
              );
            },
          },
        ]
      ),
      t
    );
  })();
  function Co() {
    if (!Co.nodes) {
      var t = Ar().size(2, 0);
      (t.node.style.cssText = [
        "opacity: 0",
        "position: absolute",
        "left: -100%",
        "top: -100%",
        "overflow: hidden",
      ].join(";")),
        t.attr("focusable", "false"),
        t.attr("aria-hidden", "true");
      var e = t.path().node;
      Co.nodes = { svg: t, path: e };
    }
    if (!Co.nodes.svg.node.parentNode) {
      var n = kr.document.body || kr.document.documentElement;
      Co.nodes.svg.addTo(n);
    }
    return Co.nodes;
  }
  function Do(t) {
    return !(t.width || t.height || t.x || t.y);
  }
  Vr(Eo, "Matrix");
  var Vo = (function () {
    function t() {
      Mr(this, t), this.init.apply(this, arguments);
    }
    return (
      Ks(t, [
        {
          key: "init",
          value: function (t) {
            var e = [0, 0, 0, 0];
            return (
              (t =
                "string" == typeof t
                  ? t.split(cs).map(parseFloat)
                  : Array.isArray(t)
                  ? t
                  : "object" === ae(t)
                  ? [
                      null != t.left ? t.left : t.x,
                      null != t.top ? t.top : t.y,
                      t.width,
                      t.height,
                    ]
                  : 4 === arguments.length
                  ? [].slice.call(arguments)
                  : e),
              (this.x = t[0] || 0),
              (this.y = t[1] || 0),
              (this.width = this.w = t[2] || 0),
              (this.height = this.h = t[3] || 0),
              (this.x2 = this.x + this.w),
              (this.y2 = this.y + this.h),
              (this.cx = this.x + this.w / 2),
              (this.cy = this.y + this.h / 2),
              this
            );
          },
        },
        {
          key: "merge",
          value: function (e) {
            var n = Math.min(this.x, e.x),
              i = Math.min(this.y, e.y);
            return new t(
              n,
              i,
              Math.max(this.x + this.width, e.x + e.width) - n,
              Math.max(this.y + this.height, e.y + e.height) - i
            );
          },
        },
        {
          key: "transform",
          value: function (e) {
            e instanceof Eo || (e = new Eo(e));
            var n = 1 / 0,
              i = -1 / 0,
              r = 1 / 0,
              s = -1 / 0;
            return (
              [
                new To(this.x, this.y),
                new To(this.x2, this.y),
                new To(this.x, this.y2),
                new To(this.x2, this.y2),
              ].forEach(function (t) {
                (t = t.transform(e)),
                  (n = Math.min(n, t.x)),
                  (i = Math.max(i, t.x)),
                  (r = Math.min(r, t.y)),
                  (s = Math.max(s, t.y));
              }),
              new t(n, r, i - n, s - r)
            );
          },
        },
        {
          key: "addOffset",
          value: function () {
            return (
              (this.x += kr.window.pageXOffset),
              (this.y += kr.window.pageYOffset),
              this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return this.x + " " + this.y + " " + this.width + " " + this.height;
          },
        },
        {
          key: "toArray",
          value: function () {
            return [this.x, this.y, this.width, this.height];
          },
        },
        {
          key: "isNulled",
          value: function () {
            return Do(this);
          },
        },
      ]),
      t
    );
  })();
  function Lo(t, e) {
    var n, i;
    try {
      if (
        Do((n = t(this.node))) &&
        (i = this.node) !== kr.document &&
        !(
          kr.document.documentElement.contains ||
          function (t) {
            for (; t.parentNode; ) t = t.parentNode;
            return t === kr.document;
          }
        ).call(kr.document.documentElement, i)
      )
        throw new Error("Element not in the dom");
    } catch (t) {
      n = e(this);
    }
    return n;
  }
  Di({
    viewbox: {
      viewbox: function (t, e, n, i) {
        return null == t
          ? new Vo(this.attr("viewBox"))
          : this.attr("viewBox", new Vo(t, e, n, i));
      },
      zoom: function (t, e) {
        var n = this.node.clientWidth,
          i = this.node.clientHeight,
          r = this.viewbox();
        if (!n && !i) {
          var s = window.getComputedStyle(this.node);
          (n = parseFloat(s.getPropertyValue("width"))),
            (i = parseFloat(s.getPropertyValue("height")));
        }
        var o = n / r.width,
          a = i / r.height,
          u = Math.min(o, a);
        if (null == t) return u;
        var h = u / t;
        h === 1 / 0 && (h = Number.MIN_VALUE),
          (e = e || new To(n / 2 / o + r.x, i / 2 / a + r.y));
        var l = new Vo(r).transform(new Eo({ scale: h, origin: e }));
        return this.viewbox(l);
      },
    },
  }),
    Vr(Vo, "Box");
  var Ro = (function () {
      try {
        return Function(
          "name",
          "baseClass",
          "_constructor",
          [
            "baseClass = baseClass || Array",
            "return {",
            "  [name]: class extends baseClass {",
            "    constructor (...args) {",
            "      super(...args)",
            "      _constructor && _constructor.apply(this, args)",
            "    }",
            "  }",
            "}[name]",
          ].join("\n")
        );
      } catch (t) {
        return function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Array,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = function () {
              e.apply(this, arguments), n && n.apply(this, arguments);
            };
          return (
            (i.prototype = Object.create(e.prototype)),
            (i.prototype.constructor = i),
            (i.prototype.map = function (t) {
              var e = new i();
              return e.push.apply(e, Array.prototype.map.call(this, t)), e;
            }),
            i
          );
        };
      }
    })(),
    Fo = Ro("List", Array, function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if ("number" == typeof t) return this;
      (this.length = 0), this.push.apply(this, Ai(t));
    });
  jr(Fo, {
    each: function (t) {
      for (
        var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
        i < e;
        i++
      )
        n[i - 1] = arguments[i];
      return "function" == typeof t
        ? this.map(function (e) {
            return t.call(e, e);
          })
        : this.map(function (e) {
            return e[t].apply(e, n);
          });
    },
    toArray: function () {
      return Array.prototype.concat.apply([], this);
    },
  });
  var jo = ["toArray", "constructor", "each"];
  function zo(t, e) {
    return new Fo(
      pr((e || kr.document).querySelectorAll(t), function (t) {
        return Cr(t);
      })
    );
  }
  Fo.extend = function (t) {
    (t = t.reduce(function (t, e) {
      return (
        jo.includes(e) ||
          "_" === e[0] ||
          (t[e] = function () {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            return this.each.apply(this, [e].concat(n));
          }),
        t
      );
    }, {})),
      jr(Fo, t);
  };
  var No = (function (t) {
    function e() {
      var t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = n.events,
        r = void 0 === i ? {} : i;
      return Mr(this, e), ((t = ao(this, uo(e).call(this))).events = r), t;
    }
    return (
      co(e, t),
      Ks(e, [
        { key: "addEventListener", value: function () {} },
        {
          key: "dispatch",
          value: function (t, e) {
            return (function (t, e, n) {
              var i = Os(t);
              return (
                e instanceof kr.window.Event ||
                  (e = new kr.window.CustomEvent(e, {
                    detail: n,
                    cancelable: !0,
                  })),
                i.dispatchEvent(e),
                e
              );
            })(this, t, e);
          },
        },
        {
          key: "dispatchEvent",
          value: function (t) {
            var e = this.getEventHolder().events;
            if (!e) return !0;
            var n = e[t.type];
            for (var i in n) for (var r in n[i]) n[i][r](t);
            return !t.defaultPrevented;
          },
        },
        {
          key: "fire",
          value: function (t, e) {
            return this.dispatch(t, e), this;
          },
        },
        {
          key: "getEventHolder",
          value: function () {
            return this;
          },
        },
        {
          key: "getEventTarget",
          value: function () {
            return this;
          },
        },
        {
          key: "off",
          value: function (t, e) {
            return Ts(this, t, e), this;
          },
        },
        {
          key: "on",
          value: function (t, e, n, i) {
            return Is(this, t, e, n, i), this;
          },
        },
        { key: "removeEventListener", value: function () {} },
      ]),
      e
    );
  })(Pr);
  function Go() {}
  Vr(No, "EventTarget");
  var Ho = 400,
    Bo = ">",
    qo = 0,
    Yo = {
      "fill-opacity": 1,
      "stroke-opacity": 1,
      "stroke-width": 0,
      "stroke-linejoin": "miter",
      "stroke-linecap": "butt",
      fill: "#000000",
      stroke: "#000000",
      opacity: 1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      width: 0,
      height: 0,
      r: 0,
      rx: 0,
      ry: 0,
      offset: 0,
      "stop-opacity": 1,
      "stop-color": "#000000",
      "text-anchor": "start",
    },
    Xo = Ro("SVGArray", Array, function (t) {
      this.init(t);
    });
  jr(Xo, {
    init: function (t) {
      return (
        "number" == typeof t ||
          ((this.length = 0), this.push.apply(this, Ai(this.parse(t)))),
        this
      );
    },
    toArray: function () {
      return Array.prototype.concat.apply([], this);
    },
    toString: function () {
      return this.join(" ");
    },
    valueOf: function () {
      var t = [];
      return t.push.apply(t, Ai(this)), t;
    },
    parse: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return t instanceof Array ? t : t.trim().split(cs).map(parseFloat);
    },
    clone: function () {
      return new this.constructor(this);
    },
    toSet: function () {
      return new Set(this);
    },
  });
  var Wo = (function () {
      function t() {
        Mr(this, t), this.init.apply(this, arguments);
      }
      return (
        Ks(t, [
          {
            key: "init",
            value: function (e, n) {
              return (
                (n = Array.isArray(e) ? e[1] : n),
                (e = Array.isArray(e) ? e[0] : e),
                (this.value = 0),
                (this.unit = n || ""),
                "number" == typeof e
                  ? (this.value = isNaN(e)
                      ? 0
                      : isFinite(e)
                      ? e
                      : e < 0
                      ? -34e37
                      : 34e37)
                  : "string" == typeof e
                  ? (n = e.match(ts)) &&
                    ((this.value = parseFloat(n[1])),
                    "%" === n[5]
                      ? (this.value /= 100)
                      : "s" === n[5] && (this.value *= 1e3),
                    (this.unit = n[5]))
                  : e instanceof t &&
                    ((this.value = e.valueOf()), (this.unit = e.unit)),
                this
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return (
                ("%" === this.unit
                  ? ~~(1e8 * this.value) / 1e6
                  : "s" === this.unit
                  ? this.value / 1e3
                  : this.value) + this.unit
              );
            },
          },
          {
            key: "toJSON",
            value: function () {
              return this.toString();
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.value, this.unit];
            },
          },
          {
            key: "valueOf",
            value: function () {
              return this.value;
            },
          },
          {
            key: "plus",
            value: function (e) {
              return (e = new t(e)), new t(this + e, this.unit || e.unit);
            },
          },
          {
            key: "minus",
            value: function (e) {
              return (e = new t(e)), new t(this - e, this.unit || e.unit);
            },
          },
          {
            key: "times",
            value: function (e) {
              return (e = new t(e)), new t(this * e, this.unit || e.unit);
            },
          },
          {
            key: "divide",
            value: function (e) {
              return (e = new t(e)), new t(this / e, this.unit || e.unit);
            },
          },
          {
            key: "convert",
            value: function (e) {
              return new t(this.value, e);
            },
          },
        ]),
        t
      );
    })(),
    Uo = [],
    Qo = (function (t) {
      function e(t, n) {
        var i;
        return (
          Mr(this, e),
          ((i = ao(this, uo(e).call(this, t))).node = t),
          (i.type = t.nodeName),
          n && t !== n && i.attr(n),
          i
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "add",
            value: function (t, e) {
              return (
                (t = Ar(t)),
                null == e
                  ? this.node.appendChild(t.node)
                  : t.node !== this.node.childNodes[e] &&
                    this.node.insertBefore(t.node, this.node.childNodes[e]),
                this
              );
            },
          },
          {
            key: "addTo",
            value: function (t) {
              return Ar(t).put(this);
            },
          },
          {
            key: "children",
            value: function () {
              return new Fo(
                pr(this.node.children, function (t) {
                  return Cr(t);
                })
              );
            },
          },
          {
            key: "clear",
            value: function () {
              for (; this.node.hasChildNodes(); )
                this.node.removeChild(this.node.lastChild);
              return this;
            },
          },
          {
            key: "clone",
            value: function () {
              return this.writeDataToDom(), Fr(this.node.cloneNode(!0));
            },
          },
          {
            key: "each",
            value: function (t, e) {
              var n,
                i,
                r = this.children();
              for (n = 0, i = r.length; n < i; n++)
                t.apply(r[n], [n, r]), e && r[n].each(t, e);
              return this;
            },
          },
          {
            key: "element",
            value: function (t) {
              return this.put(new e(Tr(t)));
            },
          },
          {
            key: "first",
            value: function () {
              return Cr(this.node.firstChild);
            },
          },
          {
            key: "get",
            value: function (t) {
              return Cr(this.node.childNodes[t]);
            },
          },
          {
            key: "getEventHolder",
            value: function () {
              return this.node;
            },
          },
          {
            key: "getEventTarget",
            value: function () {
              return this.node;
            },
          },
          {
            key: "has",
            value: function (t) {
              return this.index(t) >= 0;
            },
          },
          {
            key: "id",
            value: function (t) {
              return (
                void 0 !== t || this.node.id || (this.node.id = Rr(this.type)),
                this.attr("id", t)
              );
            },
          },
          {
            key: "index",
            value: function (t) {
              return [].slice.call(this.node.childNodes).indexOf(t.node);
            },
          },
          {
            key: "last",
            value: function () {
              return Cr(this.node.lastChild);
            },
          },
          {
            key: "matches",
            value: function (t) {
              var e = this.node;
              return (
                e.matches ||
                e.matchesSelector ||
                e.msMatchesSelector ||
                e.mozMatchesSelector ||
                e.webkitMatchesSelector ||
                e.oMatchesSelector
              ).call(e, t);
            },
          },
          {
            key: "parent",
            value: function (t) {
              var e = this;
              if (!e.node.parentNode) return null;
              if (((e = Cr(e.node.parentNode)), !t)) return e;
              for (; e; ) {
                if ("string" == typeof t ? e.matches(t) : e instanceof t)
                  return e;
                if (
                  !e.node.parentNode ||
                  "#document" === e.node.parentNode.nodeName ||
                  "#document-fragment" === e.node.parentNode.nodeName
                )
                  return null;
                e = Cr(e.node.parentNode);
              }
            },
          },
          {
            key: "put",
            value: function (t, e) {
              return this.add(t, e), t;
            },
          },
          {
            key: "putIn",
            value: function (t) {
              return Ar(t).add(this);
            },
          },
          {
            key: "remove",
            value: function () {
              return this.parent() && this.parent().removeElement(this), this;
            },
          },
          {
            key: "removeElement",
            value: function (t) {
              return this.node.removeChild(t.node), this;
            },
          },
          {
            key: "replace",
            value: function (t) {
              return (
                (t = Ar(t)),
                this.node.parentNode.replaceChild(t.node, this.node),
                t
              );
            },
          },
          {
            key: "round",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 2,
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = Math.pow(10, t),
                i = this.attr();
              e || (e = Object.keys(i));
              var r = {};
              return (
                e.forEach(function (t) {
                  r[t] = Math.round(i[t] * n) / n;
                }),
                this.attr(r),
                this
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return this.id();
            },
          },
          {
            key: "svg",
            value: function (t, e) {
              var n, i, r;
              if (
                (!1 === t && ((e = !1), (t = null)),
                null == t || "function" == typeof t)
              ) {
                (e = null == e || e), this.writeDataToDom();
                var s = this;
                if (null != t) {
                  if (((s = Cr(s.node.cloneNode(!0))), e)) {
                    var o = t(s);
                    if (((s = o || s), !1 === o)) return "";
                  }
                  s.each(function () {
                    var e = t(this),
                      n = e || this;
                    !1 === e
                      ? this.remove()
                      : e && this !== n && this.replace(n);
                  }, !0);
                }
                return e ? s.node.outerHTML : s.node.innerHTML;
              }
              for (
                e = null != e && e,
                  n = kr.document.createElementNS(br, "svg"),
                  r = kr.document.createDocumentFragment(),
                  n.innerHTML = t,
                  i = n.children.length;
                i--;

              )
                r.appendChild(n.firstElementChild);
              var a = this.parent();
              return e ? this.replace(r) && a : this.add(r);
            },
          },
          {
            key: "words",
            value: function (t) {
              return (this.node.textContent = t), this;
            },
          },
          {
            key: "writeDataToDom",
            value: function () {
              return (
                this.each(function () {
                  this.writeDataToDom();
                }),
                this
              );
            },
          },
        ]),
        e
      );
    })(No);
  jr(Qo, {
    attr: function (t, e, n) {
      var i = this;
      if (null == t) {
        (t = {}), (e = this.node.attributes);
        var r = !0,
          s = !1,
          o = void 0;
        try {
          for (
            var a, u = e[Symbol.iterator]();
            !(r = (a = u.next()).done);
            r = !0
          ) {
            var h = a.value;
            t[h.nodeName] = hs.test(h.nodeValue)
              ? parseFloat(h.nodeValue)
              : h.nodeValue;
          }
        } catch (t) {
          (s = !0), (o = t);
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (s) throw o;
          }
        }
        return t;
      }
      if (t instanceof Array)
        return t.reduce(function (t, e) {
          return (t[e] = i.attr(e)), t;
        }, {});
      if ("object" === ae(t) && t.constructor === Object)
        for (e in t) this.attr(e, t[e]);
      else if (null === e) this.node.removeAttribute(t);
      else {
        if (null == e)
          return null == (e = this.node.getAttribute(t))
            ? Yo[t]
            : hs.test(e)
            ? parseFloat(e)
            : e;
        "number" ==
        typeof (e = Uo.reduce(function (e, n) {
          return n(t, e, i);
        }, e))
          ? (e = new Wo(e))
          : ro.isColor(e)
          ? (e = new ro(e))
          : e.constructor === Array && (e = new Xo(e)),
          "leading" === t
            ? this.leading && this.leading(e)
            : "string" == typeof n
            ? this.node.setAttributeNS(n, t, e.toString())
            : this.node.setAttribute(t, e.toString()),
          !this.rebuild || ("font-size" !== t && "x" !== t) || this.rebuild();
      }
      return this;
    },
    find: function (t) {
      return zo(t, this.node);
    },
    findOne: function (t) {
      return Cr(this.node.querySelector(t));
    },
  }),
    Vr(Qo, "Dom");
  var $o = (function (t) {
    function e(t, n) {
      var i;
      return (
        Mr(this, e),
        ((i = ao(this, uo(e).call(this, t, n))).dom = {}),
        (i.node.instance = oo(i)),
        t.hasAttribute("svgjs:data") &&
          i.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}),
        i
      );
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "center",
          value: function (t, e) {
            return this.cx(t).cy(e);
          },
        },
        {
          key: "cx",
          value: function (t) {
            return null == t
              ? this.x() + this.width() / 2
              : this.x(t - this.width() / 2);
          },
        },
        {
          key: "cy",
          value: function (t) {
            return null == t
              ? this.y() + this.height() / 2
              : this.y(t - this.height() / 2);
          },
        },
        {
          key: "defs",
          value: function () {
            return this.root().defs();
          },
        },
        {
          key: "dmove",
          value: function (t, e) {
            return this.dx(t).dy(e);
          },
        },
        {
          key: "dx",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return this.x(new Wo(t).plus(this.x()));
          },
        },
        {
          key: "dy",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return this.y(new Wo(t).plus(this.y()));
          },
        },
        {
          key: "root",
          value: function () {
            var t = this.parent(Or[Ir]);
            return t && t.root();
          },
        },
        {
          key: "getEventHolder",
          value: function () {
            return this;
          },
        },
        {
          key: "height",
          value: function (t) {
            return this.attr("height", t);
          },
        },
        {
          key: "inside",
          value: function (t, e) {
            var n = this.bbox();
            return (
              t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height
            );
          },
        },
        {
          key: "move",
          value: function (t, e) {
            return this.x(t).y(e);
          },
        },
        {
          key: "parents",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : kr.document;
            t = Ar(t);
            for (
              var e = new Fo(), n = this;
              (n = n.parent()) && n.node !== t.node && n.node !== kr.document;

            )
              e.push(n);
            return e;
          },
        },
        {
          key: "reference",
          value: function (t) {
            if (!(t = this.attr(t))) return null;
            var e = t.match(is);
            return e ? Ar(e[1]) : null;
          },
        },
        {
          key: "setData",
          value: function (t) {
            return (this.dom = t), this;
          },
        },
        {
          key: "size",
          value: function (t, e) {
            var n = wr(this, t, e);
            return this.width(new Wo(n.width)).height(new Wo(n.height));
          },
        },
        {
          key: "width",
          value: function (t) {
            return this.attr("width", t);
          },
        },
        {
          key: "writeDataToDom",
          value: function () {
            return (
              this.node.removeAttribute("svgjs:data"),
              Object.keys(this.dom).length &&
                this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)),
              ho(uo(e.prototype), "writeDataToDom", this).call(this)
            );
          },
        },
        {
          key: "x",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "y",
          value: function (t) {
            return this.attr("y", t);
          },
        },
      ]),
      e
    );
  })(Qo);
  jr($o, {
    bbox: function () {
      return new Vo(
        Lo.call(
          this,
          function (t) {
            return t.getBBox();
          },
          function (t) {
            try {
              var e = t.clone().addTo(Co().svg).show(),
                n = e.node.getBBox();
              return e.remove(), n;
            } catch (e) {
              throw new Error(
                'Getting bbox of element "' +
                  t.node.nodeName +
                  '" is not possible. ' +
                  e.toString()
              );
            }
          }
        )
      );
    },
    rbox: function (t) {
      var e = new Vo(
        Lo.call(
          this,
          function (t) {
            return t.getBoundingClientRect();
          },
          function (t) {
            throw new Error(
              'Getting rbox of element "' +
                t.node.nodeName +
                '" is not possible'
            );
          }
        )
      );
      return t ? e.transform(t.screenCTM().inverse()) : e.addOffset();
    },
    point: function (t, e) {
      return new To(t, e).transform(this.screenCTM().inverse());
    },
    ctm: function () {
      return new Eo(this.node.getCTM());
    },
    screenCTM: function () {
      if ("function" == typeof this.isRoot && !this.isRoot()) {
        var t = this.rect(1, 1),
          e = t.node.getScreenCTM();
        return t.remove(), new Eo(e);
      }
      return new Eo(this.node.getScreenCTM());
    },
  }),
    Vr($o, "Element");
  var Zo = {
    stroke: [
      "color",
      "width",
      "opacity",
      "linecap",
      "linejoin",
      "miterlimit",
      "dasharray",
      "dashoffset",
    ],
    fill: ["color", "opacity", "rule"],
    prefix: function (t, e) {
      return "color" === e ? t : t + "-" + e;
    },
  };
  ["fill", "stroke"].forEach(function (t) {
    var e,
      n = {};
    (n[t] = function (n) {
      if (void 0 === n) return this.attr(t);
      if (
        "string" == typeof n ||
        n instanceof ro ||
        ro.isRgb(n) ||
        n instanceof $o
      )
        this.attr(t, n);
      else
        for (e = Zo[t].length - 1; e >= 0; e--)
          null != n[Zo[t][e]] && this.attr(Zo.prefix(t, Zo[t][e]), n[Zo[t][e]]);
      return this;
    }),
      Di(["Element", "Runner"], n);
  }),
    Di(["Element", "Runner"], {
      matrix: function (t, e, n, i, r, s) {
        return null == t
          ? new Eo(this)
          : this.attr("transform", new Eo(t, e, n, i, r, s));
      },
      rotate: function (t, e, n) {
        return this.transform({ rotate: t, ox: e, oy: n }, !0);
      },
      skew: function (t, e, n, i) {
        return 1 === arguments.length || 3 === arguments.length
          ? this.transform({ skew: t, ox: e, oy: n }, !0)
          : this.transform({ skew: [t, e], ox: n, oy: i }, !0);
      },
      shear: function (t, e, n) {
        return this.transform({ shear: t, ox: e, oy: n }, !0);
      },
      scale: function (t, e, n, i) {
        return 1 === arguments.length || 3 === arguments.length
          ? this.transform({ scale: t, ox: e, oy: n }, !0)
          : this.transform({ scale: [t, e], ox: n, oy: i }, !0);
      },
      translate: function (t, e) {
        return this.transform({ translate: [t, e] }, !0);
      },
      relative: function (t, e) {
        return this.transform({ relative: [t, e] }, !0);
      },
      flip: function (t, e) {
        var n = "string" == typeof t ? t : (isFinite(t), "both"),
          i =
            "both" === t && isFinite(e)
              ? [e, e]
              : "x" === t
              ? [e, 0]
              : "y" === t
              ? [0, e]
              : isFinite(t)
              ? [t, t]
              : [0, 0];
        return this.transform({ flip: n, origin: i }, !0);
      },
      opacity: function (t) {
        return this.attr("opacity", t);
      },
    }),
    Di("radius", {
      radius: function (t, e) {
        var n = (this._element || this).type;
        return "radialGradient" === n || "radialGradient" === n
          ? this.attr("r", new Wo(t))
          : this.rx(t).ry(null == e ? t : e);
      },
    }),
    Di("Path", {
      length: function () {
        return this.node.getTotalLength();
      },
      pointAt: function (t) {
        return new To(this.node.getPointAtLength(t));
      },
    }),
    Di(["Element", "Runner"], {
      font: function (t, e) {
        if ("object" === ae(t)) {
          for (e in t) this.font(e, t[e]);
          return this;
        }
        return "leading" === t
          ? this.leading(e)
          : "anchor" === t
          ? this.attr("text-anchor", e)
          : "size" === t ||
            "family" === t ||
            "weight" === t ||
            "stretch" === t ||
            "variant" === t ||
            "style" === t
          ? this.attr("font-" + t, e)
          : this.attr(t, e);
      },
    }),
    Di("Text", {
      ax: function (t) {
        return this.attr("x", t);
      },
      ay: function (t) {
        return this.attr("y", t);
      },
      amove: function (t, e) {
        return this.ax(t).ay(e);
      },
    }),
    Di(
      "Element",
      [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mouseover",
        "mouseout",
        "mousemove",
        "mouseenter",
        "mouseleave",
        "touchstart",
        "touchmove",
        "touchleave",
        "touchend",
        "touchcancel",
      ].reduce(function (t, e) {
        return (
          (t[e] = function (t) {
            return null === t ? Ts(this, e) : Is(this, e, t), this;
          }),
          t
        );
      }, {})
    );
  var Ko = [].reverse,
    Jo = [1, 2];
  Ct(
    { target: "Array", proto: !0, forced: String(Jo) === String(Jo.reverse()) },
    {
      reverse: function () {
        return Dt(this) && (this.length = this.length), Ko.call(this);
      },
    }
  ),
    Ct(
      { target: "Object", stat: !0, forced: !h, sham: !h },
      { defineProperties: le }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !h, sham: !h },
      { defineProperty: C.f }
    );
  var ta = T.f,
    ea = u(function () {
      ta(1);
    });
  function na(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function ia(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function ra(t) {
    return this.attr("rx", t);
  }
  function sa(t) {
    return this.attr("ry", t);
  }
  function oa(t) {
    return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
  }
  function aa(t) {
    return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
  }
  function ua(t) {
    return null == t ? this.attr("cx") : this.attr("cx", t);
  }
  function ha(t) {
    return null == t ? this.attr("cy") : this.attr("cy", t);
  }
  function la(t) {
    return null == t ? 2 * this.rx() : this.rx(new Wo(t).divide(2));
  }
  function ca(t) {
    return null == t ? 2 * this.ry() : this.ry(new Wo(t).divide(2));
  }
  Ct(
    { target: "Object", stat: !0, forced: !h || ea, sham: !h },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return ta(w(t), e);
      },
    }
  ),
    Ct(
      { target: "Object", stat: !0, sham: !h },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, n, i = w(t), r = T.f, s = _t(i), o = {}, a = 0;
            s.length > a;

          )
            void 0 !== (n = r(i, (e = s[a++]))) && Vt(o, e, n);
          return o;
        },
      }
    ),
    Di("Element", {
      untransform: function () {
        return this.attr("transform", null);
      },
      matrixify: function () {
        return (this.attr("transform") || "")
          .split(rs)
          .slice(0, -1)
          .map(function (t) {
            var e = t.trim().split("(");
            return [
              e[0],
              e[1].split(cs).map(function (t) {
                return parseFloat(t);
              }),
            ];
          })
          .reverse()
          .reduce(function (t, e) {
            return "matrix" === e[0]
              ? t.lmultiply(Eo.fromArray(e[1]))
              : t[e[0]].apply(t, e[1]);
          }, new Eo());
      },
      toParent: function (t) {
        if (this === t) return this;
        var e = this.screenCTM(),
          n = t.screenCTM().inverse();
        return this.addTo(t).untransform().transform(n.multiply(e)), this;
      },
      toRoot: function () {
        return this.toParent(this.root());
      },
      transform: function (t, e) {
        if (null == t || "string" == typeof t) {
          var n = new Eo(this).decompose();
          return null == t ? n : n[t];
        }
        Eo.isMatrixLike(t) ||
          (t = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? ia(n, !0).forEach(function (e) {
                    na(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : ia(n).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({}, t, { origin: xr(t, this) }));
        var i = new Eo(!0 === e ? this : e || !1).transform(t);
        return this.attr("transform", i);
      },
    });
  var fa = {
      __proto__: null,
      rx: ra,
      ry: sa,
      x: oa,
      y: aa,
      cx: ua,
      cy: ha,
      width: la,
      height: ca,
    },
    da = (function (t) {
      function e() {
        return Mr(this, e), ao(this, uo(e).apply(this, arguments));
      }
      return co(e, t), e;
    })($o);
  Vr(da, "Shape");
  var ga = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("circle", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "radius",
          value: function (t) {
            return this.attr("r", t);
          },
        },
        {
          key: "rx",
          value: function (t) {
            return this.attr("r", t);
          },
        },
        {
          key: "ry",
          value: function (t) {
            return this.rx(t);
          },
        },
        {
          key: "size",
          value: function (t) {
            return this.radius(new Wo(t).divide(2));
          },
        },
      ]),
      e
    );
  })(da);
  jr(ga, { x: oa, y: aa, cx: ua, cy: ha, width: la, height: ca }),
    Di({
      Container: {
        circle: zr(function (t) {
          return this.put(new ga()).size(t).move(0, 0);
        }),
      },
    }),
    Vr(ga, "Circle");
  var pa = (function (t) {
    function e() {
      return Mr(this, e), ao(this, uo(e).apply(this, arguments));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "flatten",
          value: function (t) {
            return (
              this.each(function () {
                return this instanceof e
                  ? this.flatten(t).ungroup(t)
                  : this.toParent(t);
              }),
              this.node.firstElementChild || this.remove(),
              this
            );
          },
        },
        {
          key: "ungroup",
          value: function (t) {
            return (
              (t = t || this.parent()),
              this.each(function () {
                return this.toParent(t);
              }),
              this.remove(),
              this
            );
          },
        },
      ]),
      e
    );
  })($o);
  Vr(pa, "Container");
  var va = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("defs", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "flatten",
          value: function () {
            return this;
          },
        },
        {
          key: "ungroup",
          value: function () {
            return this;
          },
        },
      ]),
      e
    );
  })(pa);
  Vr(va, "Defs");
  var ya = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("ellipse", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "size",
          value: function (t, e) {
            var n = wr(this, t, e);
            return this.rx(new Wo(n.width).divide(2)).ry(
              new Wo(n.height).divide(2)
            );
          },
        },
      ]),
      e
    );
  })(da);
  jr(ya, fa),
    Di("Container", {
      ellipse: zr(function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        return this.put(new ya()).size(t, e).move(0, 0);
      }),
    }),
    Vr(ya, "Ellipse");
  var ma = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("stop", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "update",
          value: function (t) {
            return (
              ("number" == typeof t || t instanceof Wo) &&
                (t = {
                  offset: arguments[0],
                  color: arguments[1],
                  opacity: arguments[2],
                }),
              null != t.opacity && this.attr("stop-opacity", t.opacity),
              null != t.color && this.attr("stop-color", t.color),
              null != t.offset && this.attr("offset", new Wo(t.offset)),
              this
            );
          },
        },
      ]),
      e
    );
  })($o);
  function wa(t, e) {
    return "radialGradient" === (this._element || this).type
      ? this.attr({ fx: new Wo(t), fy: new Wo(e) })
      : this.attr({ x1: new Wo(t), y1: new Wo(e) });
  }
  function xa(t, e) {
    return "radialGradient" === (this._element || this).type
      ? this.attr({ cx: new Wo(t), cy: new Wo(e) })
      : this.attr({ x2: new Wo(t), y2: new Wo(e) });
  }
  Vr(ma, "Stop");
  var ba = { __proto__: null, from: wa, to: xa },
    _a = (function (t) {
      function e(t, n) {
        return (
          Mr(this, e),
          ao(
            this,
            uo(e).call(
              this,
              Er(t + "Gradient", "string" == typeof t ? null : t),
              n
            )
          )
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "stop",
            value: function (t, e, n) {
              return this.put(new ma()).update(t, e, n);
            },
          },
          {
            key: "update",
            value: function (t) {
              return (
                this.clear(), "function" == typeof t && t.call(this, this), this
              );
            },
          },
          {
            key: "url",
            value: function () {
              return "url(#" + this.id() + ")";
            },
          },
          {
            key: "toString",
            value: function () {
              return this.url();
            },
          },
          {
            key: "attr",
            value: function (t, n, i) {
              return (
                "transform" === t && (t = "gradientTransform"),
                ho(uo(e.prototype), "attr", this).call(this, t, n, i)
              );
            },
          },
          {
            key: "targets",
            value: function () {
              return zo('svg [fill*="' + this.id() + '"]');
            },
          },
          {
            key: "bbox",
            value: function () {
              return new Vo();
            },
          },
        ]),
        e
      );
    })(pa);
  jr(_a, ba),
    Di({
      Container: {
        gradient: zr(function (t, e) {
          return this.defs().gradient(t, e);
        }),
      },
      Defs: {
        gradient: zr(function (t, e) {
          return this.put(new _a(t)).update(e);
        }),
      },
    }),
    Vr(_a, "Gradient");
  var Sa = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("pattern", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "url",
          value: function () {
            return "url(#" + this.id() + ")";
          },
        },
        {
          key: "update",
          value: function (t) {
            return (
              this.clear(), "function" == typeof t && t.call(this, this), this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return this.url();
          },
        },
        {
          key: "attr",
          value: function (t, n, i) {
            return (
              "transform" === t && (t = "patternTransform"),
              ho(uo(e.prototype), "attr", this).call(this, t, n, i)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return zo('svg [fill*="' + this.id() + '"]');
          },
        },
        {
          key: "bbox",
          value: function () {
            return new Vo();
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      pattern: function () {
        var t;
        return (t = this.defs()).pattern.apply(t, arguments);
      },
    },
    Defs: {
      pattern: zr(function (t, e, n) {
        return this.put(new Sa())
          .update(n)
          .attr({
            x: 0,
            y: 0,
            width: t,
            height: e,
            patternUnits: "userSpaceOnUse",
          });
      }),
    },
  }),
    Vr(Sa, "Pattern");
  var ka,
    Ma = (function (t) {
      function e(t) {
        return Mr(this, e), ao(this, uo(e).call(this, Er("image", t), t));
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "load",
            value: function (t, e) {
              if (!t) return this;
              var n = new kr.window.Image();
              return (
                Is(
                  n,
                  "load",
                  function (t) {
                    var i = this.parent(Sa);
                    0 === this.width() &&
                      0 === this.height() &&
                      this.size(n.width, n.height),
                      i instanceof Sa &&
                        0 === i.width() &&
                        0 === i.height() &&
                        i.size(this.width(), this.height()),
                      "function" == typeof e && e.call(this, t);
                  },
                  this
                ),
                Is(n, "load error", function () {
                  Ts(n);
                }),
                this.attr("href", (n.src = t), Sr)
              );
            },
          },
        ]),
        e
      );
    })(da);
  (ka = function (t, e, n) {
    return (
      ("fill" !== t && "stroke" !== t) ||
        (ls.test(e) && (e = n.root().defs().image(e))),
      e instanceof Ma &&
        (e = n
          .root()
          .defs()
          .pattern(0, 0, function (t) {
            t.add(e);
          })),
      e
    );
  }),
    Uo.push(ka),
    Di({
      Container: {
        image: zr(function (t, e) {
          return this.put(new Ma()).size(0, 0).load(t, e);
        }),
      },
    }),
    Vr(Ma, "Image");
  var Pa = Ro("PointArray", Xo);
  jr(Pa, {
    toString: function () {
      for (var t = 0, e = this.length, n = []; t < e; t++)
        n.push(this[t].join(","));
      return n.join(" ");
    },
    toLine: function () {
      return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
    },
    at: function (t) {
      if (!this.destination) return this;
      for (var e = 0, n = this.length, i = []; e < n; e++)
        i.push([
          this[e][0] + (this.destination[e][0] - this[e][0]) * t,
          this[e][1] + (this.destination[e][1] - this[e][1]) * t,
        ]);
      return new Pa(i);
    },
    parse: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [[0, 0]],
        e = [];
      if (t instanceof Array) {
        if (t[0] instanceof Array) return t;
      } else t = t.trim().split(cs).map(parseFloat);
      t.length % 2 != 0 && t.pop();
      for (var n = 0, i = t.length; n < i; n += 2) e.push([t[n], t[n + 1]]);
      return e;
    },
    transform: function (t) {
      for (var e = [], n = 0; n < this.length; n++) {
        var i = this[n];
        e.push([t.a * i[0] + t.c * i[1] + t.e, t.b * i[0] + t.d * i[1] + t.f]);
      }
      return new Pa(e);
    },
    move: function (t, e) {
      var n = this.bbox();
      if (((t -= n.x), (e -= n.y), !isNaN(t) && !isNaN(e)))
        for (var i = this.length - 1; i >= 0; i--)
          this[i] = [this[i][0] + t, this[i][1] + e];
      return this;
    },
    size: function (t, e) {
      var n,
        i = this.bbox();
      for (n = this.length - 1; n >= 0; n--)
        i.width && (this[n][0] = ((this[n][0] - i.x) * t) / i.width + i.x),
          i.height && (this[n][1] = ((this[n][1] - i.y) * e) / i.height + i.y);
      return this;
    },
    bbox: function () {
      var t = -1 / 0,
        e = -1 / 0,
        n = 1 / 0,
        i = 1 / 0;
      return (
        this.forEach(function (r) {
          (t = Math.max(r[0], t)),
            (e = Math.max(r[1], e)),
            (n = Math.min(r[0], n)),
            (i = Math.min(r[1], i));
        }),
        { x: n, y: i, width: t - n, height: e - i }
      );
    },
  });
  var Oa = {
      __proto__: null,
      MorphArray: Pa,
      x: function (t) {
        return null == t ? this.bbox().x : this.move(t, this.bbox().y);
      },
      y: function (t) {
        return null == t ? this.bbox().y : this.move(this.bbox().x, t);
      },
      width: function (t) {
        var e = this.bbox();
        return null == t ? e.width : this.size(t, e.height);
      },
      height: function (t) {
        var e = this.bbox();
        return null == t ? e.height : this.size(e.width, t);
      },
    },
    Ia = (function (t) {
      function e(t) {
        return Mr(this, e), ao(this, uo(e).call(this, Er("line", t), t));
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "array",
            value: function () {
              return new Pa([
                [this.attr("x1"), this.attr("y1")],
                [this.attr("x2"), this.attr("y2")],
              ]);
            },
          },
          {
            key: "plot",
            value: function (t, e, n, i) {
              return null == t
                ? this.array()
                : ((t =
                    void 0 !== e
                      ? { x1: t, y1: e, x2: n, y2: i }
                      : new Pa(t).toLine()),
                  this.attr(t));
            },
          },
          {
            key: "move",
            value: function (t, e) {
              return this.attr(this.array().move(t, e).toLine());
            },
          },
          {
            key: "size",
            value: function (t, e) {
              var n = wr(this, t, e);
              return this.attr(this.array().size(n.width, n.height).toLine());
            },
          },
        ]),
        e
      );
    })(da);
  jr(Ia, Oa),
    Di({
      Container: {
        line: zr(function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return Ia.prototype.plot.apply(
            this.put(new Ia()),
            null != e[0] ? e : [0, 0, 0, 0]
          );
        }),
      },
    }),
    Vr(Ia, "Line");
  var Ta = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("marker", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "width",
          value: function (t) {
            return this.attr("markerWidth", t);
          },
        },
        {
          key: "height",
          value: function (t) {
            return this.attr("markerHeight", t);
          },
        },
        {
          key: "ref",
          value: function (t, e) {
            return this.attr("refX", t).attr("refY", e);
          },
        },
        {
          key: "update",
          value: function (t) {
            return (
              this.clear(), "function" == typeof t && t.call(this, this), this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return "url(#" + this.id() + ")";
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      marker: function () {
        var t;
        return (t = this.defs()).marker.apply(t, arguments);
      },
    },
    Defs: {
      marker: zr(function (t, e, n) {
        return this.put(new Ta())
          .size(t, e)
          .ref(t / 2, e / 2)
          .viewbox(0, 0, t, e)
          .attr("orient", "auto")
          .update(n);
      }),
    },
    marker: {
      marker: function (t, e, n, i) {
        var r = ["marker"];
        return (
          "all" !== t && r.push(t),
          (r = r.join("-")),
          (t =
            arguments[1] instanceof Ta
              ? arguments[1]
              : this.defs().marker(e, n, i)),
          this.attr(r, t)
        );
      },
    },
  }),
    Vr(Ta, "Marker");
  var Aa = [].sort,
    Ea = [1, 2, 3],
    Ca = u(function () {
      Ea.sort(void 0);
    }),
    Da = u(function () {
      Ea.sort(null);
    }),
    Va = Gr("sort");
  function La(t, e) {
    return function (n) {
      return null == n ? this[n] : ((this[t] = n), e && e.call(this), this);
    };
  }
  Ct(
    { target: "Array", proto: !0, forced: Ca || !Da || Va },
    {
      sort: function (t) {
        return void 0 === t ? Aa.call(ue(this)) : Aa.call(ue(this), _e(t));
      },
    }
  );
  var Ra = {
      "-": function (t) {
        return t;
      },
      "<>": function (t) {
        return -Math.cos(t * Math.PI) / 2 + 0.5;
      },
      ">": function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      "<": function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      bezier: function (t, e, n, i) {
        return function (r) {
          return r < 0
            ? t > 0
              ? (e / t) * r
              : n > 0
              ? (i / n) * r
              : 0
            : r > 1
            ? n < 1
              ? ((1 - i) / (1 - n)) * r + (i - n) / (1 - n)
              : t < 1
              ? ((1 - e) / (1 - t)) * r + (e - t) / (1 - t)
              : 1
            : 3 * r * Math.pow(1 - r, 2) * e +
              3 * Math.pow(r, 2) * (1 - r) * i +
              Math.pow(r, 3);
        };
      },
      steps: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "end";
        e = e.split("-").reverse()[0];
        var n = t;
        return (
          "none" === e ? --n : "both" === e && ++n,
          function (i) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s = Math.floor(i * t),
              o = (i * s) % 1 == 0;
            return (
              ("start" !== e && "both" !== e) || ++s,
              r && o && --s,
              i >= 0 && s < 0 && (s = 0),
              i <= 1 && s > n && (s = n),
              s / n
            );
          }
        );
      },
    },
    Fa = (function () {
      function t() {
        Mr(this, t);
      }
      return (
        Ks(t, [
          {
            key: "done",
            value: function () {
              return !1;
            },
          },
        ]),
        t
      );
    })(),
    ja = (function (t) {
      function e(t) {
        var n;
        return (
          Mr(this, e),
          ((n = ao(this, uo(e).call(this))).ease = Ra[t || Bo] || t),
          n
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "step",
            value: function (t, e, n) {
              return "number" != typeof t
                ? n < 1
                  ? t
                  : e
                : t + (e - t) * this.ease(n);
            },
          },
        ]),
        e
      );
    })(Fa),
    za = (function (t) {
      function e(t) {
        var n;
        return Mr(this, e), ((n = ao(this, uo(e).call(this))).stepper = t), n;
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "step",
            value: function (t, e, n, i) {
              return this.stepper(t, e, n, i);
            },
          },
          {
            key: "done",
            value: function (t) {
              return t.done;
            },
          },
        ]),
        e
      );
    })(Fa);
  function Na() {
    var t = (this._duration || 500) / 1e3,
      e = this._overshoot || 0,
      n = Math.PI,
      i = Math.log(e / 100 + 1e-10),
      r = -i / Math.sqrt(n * n + i * i),
      s = 3.9 / (r * t);
    (this.d = 2 * r * s), (this.k = s * s);
  }
  jr(
    (function (t) {
      function e(t, n) {
        var i;
        return (
          Mr(this, e),
          (i = ao(this, uo(e).call(this))).duration(t || 500).overshoot(n || 0),
          i
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "step",
            value: function (t, e, n, i) {
              if ("string" == typeof t) return t;
              if (((i.done = n === 1 / 0), n === 1 / 0)) return e;
              if (0 === n) return t;
              n > 100 && (n = 16), (n /= 1e3);
              var r = i.velocity || 0,
                s = -this.d * r - this.k * (t - e),
                o = t + r * n + (s * n * n) / 2;
              return (
                (i.velocity = r + s * n),
                (i.done = Math.abs(e - o) + Math.abs(r) < 0.002),
                i.done ? e : o
              );
            },
          },
        ]),
        e
      );
    })(za),
    { duration: La("_duration", Na), overshoot: La("_overshoot", Na) }
  ),
    jr(
      (function (t) {
        function e(t, n, i, r) {
          var s;
          return (
            Mr(this, e),
            (t = null == t ? 0.1 : t),
            (n = null == n ? 0.01 : n),
            (i = null == i ? 0 : i),
            (r = null == r ? 1e3 : r),
            (s = ao(this, uo(e).call(this))).p(t).i(n).d(i).windup(r),
            s
          );
        }
        return (
          co(e, t),
          Ks(e, [
            {
              key: "step",
              value: function (t, e, n, i) {
                if ("string" == typeof t) return t;
                if (((i.done = n === 1 / 0), n === 1 / 0)) return e;
                if (0 === n) return t;
                var r = e - t,
                  s = (i.integral || 0) + r * n,
                  o = (r - (i.error || 0)) / n,
                  a = this.windup;
                return (
                  !1 !== a && (s = Math.max(-a, Math.min(s, a))),
                  (i.error = r),
                  (i.integral = s),
                  (i.done = Math.abs(r) < 0.001),
                  i.done ? e : t + (this.P * r + this.I * s + this.D * o)
                );
              },
            },
          ]),
          e
        );
      })(za),
      { windup: La("windup"), p: La("P"), i: La("I"), d: La("D") }
    );
  var Ga = Ro("PathArray", Xo);
  function Ha(t, e, n, i) {
    return n + i.replace(vs, " .");
  }
  for (
    var Ba = {
        M: function (t, e, n) {
          return (e.x = n.x = t[0]), (e.y = n.y = t[1]), ["M", e.x, e.y];
        },
        L: function (t, e) {
          return (e.x = t[0]), (e.y = t[1]), ["L", t[0], t[1]];
        },
        H: function (t, e) {
          return (e.x = t[0]), ["H", t[0]];
        },
        V: function (t, e) {
          return (e.y = t[0]), ["V", t[0]];
        },
        C: function (t, e) {
          return (
            (e.x = t[4]),
            (e.y = t[5]),
            ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
          );
        },
        S: function (t, e) {
          return (e.x = t[2]), (e.y = t[3]), ["S", t[0], t[1], t[2], t[3]];
        },
        Q: function (t, e) {
          return (e.x = t[2]), (e.y = t[3]), ["Q", t[0], t[1], t[2], t[3]];
        },
        T: function (t, e) {
          return (e.x = t[0]), (e.y = t[1]), ["T", t[0], t[1]];
        },
        Z: function (t, e, n) {
          return (e.x = n.x), (e.y = n.y), ["Z"];
        },
        A: function (t, e) {
          return (
            (e.x = t[5]),
            (e.y = t[6]),
            ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
          );
        },
      },
      qa = "mlhvqtcsaz".split(""),
      Ya = 0,
      Xa = qa.length;
    Ya < Xa;
    ++Ya
  )
    Ba[qa[Ya]] = (function (t) {
      return function (e, n, i) {
        if ("H" === t) e[0] = e[0] + n.x;
        else if ("V" === t) e[0] = e[0] + n.y;
        else if ("A" === t) (e[5] = e[5] + n.x), (e[6] = e[6] + n.y);
        else
          for (var r = 0, s = e.length; r < s; ++r)
            e[r] = e[r] + (r % 2 ? n.y : n.x);
        return Ba[t](e, n, i);
      };
    })(qa[Ya].toUpperCase());
  jr(Ga, {
    toString: function () {
      return (function (t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++)
          (i += t[e][0]),
            null != t[e][1] &&
              ((i += t[e][1]),
              null != t[e][2] &&
                ((i += " "),
                (i += t[e][2]),
                null != t[e][3] &&
                  ((i += " "),
                  (i += t[e][3]),
                  (i += " "),
                  (i += t[e][4]),
                  null != t[e][5] &&
                    ((i += " "),
                    (i += t[e][5]),
                    (i += " "),
                    (i += t[e][6]),
                    null != t[e][7] && ((i += " "), (i += t[e][7]))))));
        return i + " ";
      })(this);
    },
    move: function (t, e) {
      var n = this.bbox();
      if (((t -= n.x), (e -= n.y), !isNaN(t) && !isNaN(e)))
        for (var i, r = this.length - 1; r >= 0; r--)
          "M" === (i = this[r][0]) || "L" === i || "T" === i
            ? ((this[r][1] += t), (this[r][2] += e))
            : "H" === i
            ? (this[r][1] += t)
            : "V" === i
            ? (this[r][1] += e)
            : "C" === i || "S" === i || "Q" === i
            ? ((this[r][1] += t),
              (this[r][2] += e),
              (this[r][3] += t),
              (this[r][4] += e),
              "C" === i && ((this[r][5] += t), (this[r][6] += e)))
            : "A" === i && ((this[r][6] += t), (this[r][7] += e));
      return this;
    },
    size: function (t, e) {
      var n,
        i,
        r = this.bbox();
      for (
        r.width = 0 === r.width ? 1 : r.width,
          r.height = 0 === r.height ? 1 : r.height,
          n = this.length - 1;
        n >= 0;
        n--
      )
        "M" === (i = this[n][0]) || "L" === i || "T" === i
          ? ((this[n][1] = ((this[n][1] - r.x) * t) / r.width + r.x),
            (this[n][2] = ((this[n][2] - r.y) * e) / r.height + r.y))
          : "H" === i
          ? (this[n][1] = ((this[n][1] - r.x) * t) / r.width + r.x)
          : "V" === i
          ? (this[n][1] = ((this[n][1] - r.y) * e) / r.height + r.y)
          : "C" === i || "S" === i || "Q" === i
          ? ((this[n][1] = ((this[n][1] - r.x) * t) / r.width + r.x),
            (this[n][2] = ((this[n][2] - r.y) * e) / r.height + r.y),
            (this[n][3] = ((this[n][3] - r.x) * t) / r.width + r.x),
            (this[n][4] = ((this[n][4] - r.y) * e) / r.height + r.y),
            "C" === i &&
              ((this[n][5] = ((this[n][5] - r.x) * t) / r.width + r.x),
              (this[n][6] = ((this[n][6] - r.y) * e) / r.height + r.y)))
          : "A" === i &&
            ((this[n][1] = (this[n][1] * t) / r.width),
            (this[n][2] = (this[n][2] * e) / r.height),
            (this[n][6] = ((this[n][6] - r.x) * t) / r.width + r.x),
            (this[n][7] = ((this[n][7] - r.y) * e) / r.height + r.y));
      return this;
    },
    equalCommands: function (t) {
      var e, n, i;
      for (
        t = new Ga(t), i = this.length === t.length, e = 0, n = this.length;
        i && e < n;
        e++
      )
        i = this[e][0] === t[e][0];
      return i;
    },
    morph: function (t) {
      return (
        (t = new Ga(t)),
        this.equalCommands(t)
          ? (this.destination = t)
          : (this.destination = null),
        this
      );
    },
    at: function (t) {
      if (!this.destination) return this;
      var e,
        n,
        i,
        r,
        s = this,
        o = this.destination.value,
        a = [],
        u = new Ga();
      for (e = 0, n = s.length; e < n; e++) {
        for (a[e] = [s[e][0]], i = 1, r = s[e].length; i < r; i++)
          a[e][i] = s[e][i] + (o[e][i] - s[e][i]) * t;
        "A" === a[e][0] &&
          ((a[e][4] = +(0 !== a[e][4])), (a[e][5] = +(0 !== a[e][5])));
      }
      return (u.value = a), u;
    },
    parse: function () {
      var t,
        e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : [["M", 0, 0]];
      if (e instanceof Ga) return e;
      var n = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      e =
        "string" == typeof e
          ? e
              .replace(ps, Ha)
              .replace(ds, " $& ")
              .replace(fs, "$1 -")
              .trim()
              .split(cs)
          : e.reduce(function (t, e) {
              return [].concat.call(t, e);
            }, []);
      var i = [],
        r = new To(),
        s = new To(),
        o = 0,
        a = e.length;
      do {
        gs.test(e[o])
          ? ((t = e[o]), ++o)
          : "M" === t
          ? (t = "L")
          : "m" === t && (t = "l"),
          i.push(
            Ba[t].call(
              null,
              e.slice(o, (o += n[t.toUpperCase()])).map(parseFloat),
              r,
              s
            )
          );
      } while (a > o);
      return i;
    },
    bbox: function () {
      return (
        Co().path.setAttribute("d", this.toString()), Co.nodes.path.getBBox()
      );
    },
  });
  var Wa = (function () {
      function t(e) {
        Mr(this, t),
          (this._stepper = e || new ja("-")),
          (this._from = null),
          (this._to = null),
          (this._type = null),
          (this._context = null),
          (this._morphObj = null);
      }
      return (
        Ks(t, [
          {
            key: "from",
            value: function (t) {
              return null == t
                ? this._from
                : ((this._from = this._set(t)), this);
            },
          },
          {
            key: "to",
            value: function (t) {
              return null == t ? this._to : ((this._to = this._set(t)), this);
            },
          },
          {
            key: "type",
            value: function (t) {
              return null == t ? this._type : ((this._type = t), this);
            },
          },
          {
            key: "_set",
            value: function (t) {
              if (!this._type) {
                var e = ae(t);
                "number" === e
                  ? this.type(Wo)
                  : "string" === e
                  ? ro.isColor(t)
                    ? this.type(ro)
                    : cs.test(t)
                    ? this.type(ds.test(t) ? Ga : Xo)
                    : ts.test(t)
                    ? this.type(Wo)
                    : this.type(Ua)
                  : Za.indexOf(t.constructor) > -1
                  ? this.type(t.constructor)
                  : Array.isArray(t)
                  ? this.type(Xo)
                  : "object" === e
                  ? this.type($a)
                  : this.type(Ua);
              }
              var n = new this._type(t);
              return (
                this._type === ro &&
                  (n = this._to
                    ? n[this._to[4]]()
                    : this._from
                    ? n[this._from[4]]()
                    : n),
                (n = n.toArray()),
                (this._morphObj = this._morphObj || new this._type()),
                (this._context =
                  this._context ||
                  Array.apply(null, Array(n.length))
                    .map(Object)
                    .map(function (t) {
                      return (t.done = !0), t;
                    })),
                n
              );
            },
          },
          {
            key: "stepper",
            value: function (t) {
              return null == t ? this._stepper : ((this._stepper = t), this);
            },
          },
          {
            key: "done",
            value: function () {
              return this._context
                .map(this._stepper.done)
                .reduce(function (t, e) {
                  return t && e;
                }, !0);
            },
          },
          {
            key: "at",
            value: function (t) {
              var e = this;
              return this._morphObj.fromArray(
                this._from.map(function (n, i) {
                  return e._stepper.step(
                    n,
                    e._to[i],
                    t,
                    e._context[i],
                    e._context
                  );
                })
              );
            },
          },
        ]),
        t
      );
    })(),
    Ua = (function () {
      function t() {
        Mr(this, t), this.init.apply(this, arguments);
      }
      return (
        Ks(t, [
          {
            key: "init",
            value: function (t) {
              return (t = Array.isArray(t) ? t[0] : t), (this.value = t), this;
            },
          },
          {
            key: "valueOf",
            value: function () {
              return this.value;
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.value];
            },
          },
        ]),
        t
      );
    })(),
    Qa = (function () {
      function t() {
        Mr(this, t), this.init.apply(this, arguments);
      }
      return (
        Ks(t, [
          {
            key: "init",
            value: function (e) {
              return (
                Array.isArray(e) &&
                  (e = {
                    scaleX: e[0],
                    scaleY: e[1],
                    shear: e[2],
                    rotate: e[3],
                    translateX: e[4],
                    translateY: e[5],
                    originX: e[6],
                    originY: e[7],
                  }),
                Object.assign(this, t.defaults, e),
                this
              );
            },
          },
          {
            key: "toArray",
            value: function () {
              var t = this;
              return [
                t.scaleX,
                t.scaleY,
                t.shear,
                t.rotate,
                t.translateX,
                t.translateY,
                t.originX,
                t.originY,
              ];
            },
          },
        ]),
        t
      );
    })();
  Qa.defaults = {
    scaleX: 1,
    scaleY: 1,
    shear: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0,
  };
  var $a = (function () {
      function t() {
        Mr(this, t), this.init.apply(this, arguments);
      }
      return (
        Ks(t, [
          {
            key: "init",
            value: function (t) {
              if (((this.values = []), !Array.isArray(t))) {
                t = t || {};
                var e = [];
                for (var n in t) e.push([n, t[n]]);
                return (
                  e.sort(function (t, e) {
                    return t[0] - e[0];
                  }),
                  (this.values = e.reduce(function (t, e) {
                    return t.concat(e);
                  }, [])),
                  this
                );
              }
              this.values = t;
            },
          },
          {
            key: "valueOf",
            value: function () {
              for (
                var t = {}, e = this.values, n = 0, i = e.length;
                n < i;
                n += 2
              )
                t[e[n]] = e[n + 1];
              return t;
            },
          },
          {
            key: "toArray",
            value: function () {
              return this.values;
            },
          },
        ]),
        t
      );
    })(),
    Za = [Ua, Qa, $a],
    Ka = (function (t) {
      function e(t) {
        return Mr(this, e), ao(this, uo(e).call(this, Er("path", t), t));
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "array",
            value: function () {
              return this._array || (this._array = new Ga(this.attr("d")));
            },
          },
          {
            key: "plot",
            value: function (t) {
              return null == t
                ? this.array()
                : this.clear().attr(
                    "d",
                    "string" == typeof t ? t : (this._array = new Ga(t))
                  );
            },
          },
          {
            key: "clear",
            value: function () {
              return delete this._array, this;
            },
          },
          {
            key: "move",
            value: function (t, e) {
              return this.attr("d", this.array().move(t, e));
            },
          },
          {
            key: "x",
            value: function (t) {
              return null == t ? this.bbox().x : this.move(t, this.bbox().y);
            },
          },
          {
            key: "y",
            value: function (t) {
              return null == t ? this.bbox().y : this.move(this.bbox().x, t);
            },
          },
          {
            key: "size",
            value: function (t, e) {
              var n = wr(this, t, e);
              return this.attr("d", this.array().size(n.width, n.height));
            },
          },
          {
            key: "width",
            value: function (t) {
              return null == t
                ? this.bbox().width
                : this.size(t, this.bbox().height);
            },
          },
          {
            key: "height",
            value: function (t) {
              return null == t
                ? this.bbox().height
                : this.size(this.bbox().width, t);
            },
          },
          {
            key: "targets",
            value: function () {
              return zo('svg textpath [href*="' + this.id() + '"]');
            },
          },
        ]),
        e
      );
    })(da);
  (Ka.prototype.MorphArray = Ga),
    Di({
      Container: {
        path: zr(function (t) {
          return this.put(new Ka()).plot(t || new Ga());
        }),
      },
    }),
    Vr(Ka, "Path");
  var Ja = {
      __proto__: null,
      array: function () {
        return this._array || (this._array = new Pa(this.attr("points")));
      },
      plot: function (t) {
        return null == t
          ? this.array()
          : this.clear().attr(
              "points",
              "string" == typeof t ? t : (this._array = new Pa(t))
            );
      },
      clear: function () {
        return delete this._array, this;
      },
      move: function (t, e) {
        return this.attr("points", this.array().move(t, e));
      },
      size: function (t, e) {
        var n = wr(this, t, e);
        return this.attr("points", this.array().size(n.width, n.height));
      },
    },
    tu = (function (t) {
      function e(t) {
        return Mr(this, e), ao(this, uo(e).call(this, Er("polygon", t), t));
      }
      return co(e, t), e;
    })(da);
  Di({
    Container: {
      polygon: zr(function (t) {
        return this.put(new tu()).plot(t || new Pa());
      }),
    },
  }),
    jr(tu, Oa),
    jr(tu, Ja),
    Vr(tu, "Polygon");
  var eu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("polyline", t), t));
    }
    return co(e, t), e;
  })(da);
  Di({
    Container: {
      polyline: zr(function (t) {
        return this.put(new eu()).plot(t || new Pa());
      }),
    },
  }),
    jr(eu, Oa),
    jr(eu, Ja),
    Vr(eu, "Polyline");
  var nu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("rect", t), t));
    }
    return co(e, t), e;
  })(da);
  jr(nu, { rx: ra, ry: sa }),
    Di({
      Container: {
        rect: zr(function (t, e) {
          return this.put(new nu()).size(t, e);
        }),
      },
    }),
    Vr(nu, "Rect");
  var iu = Math.max,
    ru = Math.min,
    su = 9007199254740991,
    ou = "Maximum allowed length exceeded";
  Ct(
    { target: "Array", proto: !0, forced: !Yt("splice") },
    {
      splice: function (t, e) {
        var n,
          i,
          r,
          s,
          o,
          a,
          u = ue(this),
          h = lt(u.length),
          l = dt(t, h),
          c = arguments.length;
        if (
          (0 === c
            ? (n = i = 0)
            : 1 === c
            ? ((n = 0), (i = h - l))
            : ((n = c - 2), (i = ru(iu(ut(e), 0), h - l))),
          h + n - i > su)
        )
          throw TypeError(ou);
        for (r = Me(u, i), s = 0; s < i; s++)
          (o = l + s) in u && Vt(r, s, u[o]);
        if (((r.length = i), n < i)) {
          for (s = l; s < h - i; s++)
            (a = s + n), (o = s + i) in u ? (u[a] = u[o]) : delete u[a];
          for (s = h; s > h - i + n; s--) delete u[s - 1];
        } else if (n > i)
          for (s = h - i; s > l; s--)
            (a = s + n - 1), (o = s + i - 1) in u ? (u[a] = u[o]) : delete u[a];
        for (s = 0; s < n; s++) u[s + l] = arguments[s + 2];
        return (u.length = h - i + n), r;
      },
    }
  );
  var au = (function () {
      function t() {
        Mr(this, t), (this._first = null), (this._last = null);
      }
      return (
        Ks(t, [
          {
            key: "push",
            value: function (t) {
              var e = t.next ? t : { value: t, next: null, prev: null };
              return (
                this._last
                  ? ((e.prev = this._last),
                    (this._last.next = e),
                    (this._last = e))
                  : ((this._last = e), (this._first = e)),
                e
              );
            },
          },
          {
            key: "shift",
            value: function () {
              var t = this._first;
              return t
                ? ((this._first = t.next),
                  this._first && (this._first.prev = null),
                  (this._last = this._first ? this._last : null),
                  t.value)
                : null;
            },
          },
          {
            key: "first",
            value: function () {
              return this._first && this._first.value;
            },
          },
          {
            key: "last",
            value: function () {
              return this._last && this._last.value;
            },
          },
          {
            key: "remove",
            value: function (t) {
              t.prev && (t.prev.next = t.next),
                t.next && (t.next.prev = t.prev),
                t === this._last && (this._last = t.prev),
                t === this._first && (this._first = t.next),
                (t.prev = null),
                (t.next = null);
            },
          },
        ]),
        t
      );
    })(),
    uu = {
      nextDraw: null,
      frames: new au(),
      timeouts: new au(),
      immediates: new au(),
      timer: function () {
        return kr.window.performance || kr.window.Date;
      },
      transforms: [],
      frame: function (t) {
        var e = uu.frames.push({ run: t });
        return (
          null === uu.nextDraw &&
            (uu.nextDraw = kr.window.requestAnimationFrame(uu._draw)),
          e
        );
      },
      timeout: function (t, e) {
        e = e || 0;
        var n = uu.timer().now() + e,
          i = uu.timeouts.push({ run: t, time: n });
        return (
          null === uu.nextDraw &&
            (uu.nextDraw = kr.window.requestAnimationFrame(uu._draw)),
          i
        );
      },
      immediate: function (t) {
        var e = uu.immediates.push(t);
        return (
          null === uu.nextDraw &&
            (uu.nextDraw = kr.window.requestAnimationFrame(uu._draw)),
          e
        );
      },
      cancelFrame: function (t) {
        null != t && uu.frames.remove(t);
      },
      clearTimeout: function (t) {
        null != t && uu.timeouts.remove(t);
      },
      cancelImmediate: function (t) {
        null != t && uu.immediates.remove(t);
      },
      _draw: function (t) {
        for (
          var e = null, n = uu.timeouts.last();
          (e = uu.timeouts.shift()) &&
          (t >= e.time ? e.run() : uu.timeouts.push(e), e !== n);

        );
        for (
          var i = null, r = uu.frames.last();
          i !== r && (i = uu.frames.shift());

        )
          i.run(t);
        for (var s = null; (s = uu.immediates.shift()); ) s();
        uu.nextDraw =
          uu.timeouts.first() || uu.frames.first()
            ? kr.window.requestAnimationFrame(uu._draw)
            : null;
      },
    },
    hu = function (t) {
      var e = t.start,
        n = t.runner.duration();
      return { start: e, duration: n, end: e + n, runner: t.runner };
    },
    lu = function () {
      var t = kr.window;
      return (t.performance || t.Date).now();
    },
    cu = (function (t) {
      function e() {
        var t,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lu;
        return (
          Mr(this, e),
          ((t = ao(this, uo(e).call(this)))._timeSource = n),
          (t._startTime = 0),
          (t._speed = 1),
          (t._persist = 0),
          (t._nextFrame = null),
          (t._paused = !0),
          (t._runners = []),
          (t._runnerIds = []),
          (t._lastRunnerId = -1),
          (t._time = 0),
          (t._lastSourceTime = 0),
          (t._lastStepTime = 0),
          (t._step = t._stepFn.bind(oo(t), !1)),
          (t._stepImmediate = t._stepFn.bind(oo(t), !0)),
          t
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "schedule",
            value: function (t, e, n) {
              if (null == t) return this._runners.map(hu);
              var i = 0,
                r = this.getEndTime();
              if (((e = e || 0), null == n || "last" === n || "after" === n))
                i = r;
              else if ("absolute" === n || "start" === n) (i = e), (e = 0);
              else if ("now" === n) i = this._time;
              else {
                if ("relative" !== n)
                  throw new Error('Invalid value for the "when" parameter');
                var s = this._runners[t.id];
                s && ((i = s.start + e), (e = 0));
              }
              t.unschedule(), t.timeline(this);
              var o = t.persist(),
                a = {
                  persist: null === o ? this._persist : o,
                  start: i + e,
                  runner: t,
                };
              return (
                (this._lastRunnerId = t.id),
                this._runners.push(a),
                this._runners.sort(function (t, e) {
                  return t.start - e.start;
                }),
                (this._runnerIds = this._runners.map(function (t) {
                  return t.runner.id;
                })),
                this.updateTime()._continue(),
                this
              );
            },
          },
          {
            key: "unschedule",
            value: function (t) {
              var e = this._runnerIds.indexOf(t.id);
              return (
                e < 0 ||
                  (this._runners.splice(e, 1),
                  this._runnerIds.splice(e, 1),
                  t.timeline(null)),
                this
              );
            },
          },
          {
            key: "getEndTime",
            value: function () {
              var t =
                  this._runners[this._runnerIds.indexOf(this._lastRunnerId)],
                e = t ? t.runner.duration() : 0;
              return (t ? t.start : 0) + e;
            },
          },
          {
            key: "getEndTimeOfTimeline",
            value: function () {
              for (var t = 0, e = 0; e < this._runners.length; e++) {
                var n = this._runners[e],
                  i = n ? n.runner.duration() : 0,
                  r = (n ? n.start : 0) + i;
                r > t && (t = r);
              }
              return t;
            },
          },
          {
            key: "updateTime",
            value: function () {
              return (
                this.active() || (this._lastSourceTime = this._timeSource()),
                this
              );
            },
          },
          {
            key: "play",
            value: function () {
              return (this._paused = !1), this.updateTime()._continue();
            },
          },
          {
            key: "pause",
            value: function () {
              return (this._paused = !0), this._continue();
            },
          },
          {
            key: "stop",
            value: function () {
              return this.time(0), this.pause();
            },
          },
          {
            key: "finish",
            value: function () {
              return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
            },
          },
          {
            key: "speed",
            value: function (t) {
              return null == t ? this._speed : ((this._speed = t), this);
            },
          },
          {
            key: "reverse",
            value: function (t) {
              var e = this.speed();
              if (null == t) return this.speed(-e);
              var n = Math.abs(e);
              return this.speed(t ? n : -n);
            },
          },
          {
            key: "seek",
            value: function (t) {
              return this.time(this._time + t);
            },
          },
          {
            key: "time",
            value: function (t) {
              return null == t
                ? this._time
                : ((this._time = t), this._continue(!0));
            },
          },
          {
            key: "persist",
            value: function (t) {
              return null == t ? this._persist : ((this._persist = t), this);
            },
          },
          {
            key: "source",
            value: function (t) {
              return null == t
                ? this._timeSource
                : ((this._timeSource = t), this);
            },
          },
          {
            key: "_stepFn",
            value: function () {
              var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                e = this._timeSource(),
                n = e - this._lastSourceTime;
              t && (n = 0);
              var i = this._speed * n + (this._time - this._lastStepTime);
              (this._lastSourceTime = e),
                t ||
                  ((this._time += i),
                  (this._time = this._time < 0 ? 0 : this._time)),
                (this._lastStepTime = this._time),
                this.fire("time", this._time);
              for (var r = this._runners.length; r--; ) {
                var s = this._runners[r],
                  o = s.runner,
                  a = this._time - s.start;
                a <= 0 && o.reset();
              }
              for (var u = !1, h = 0, l = this._runners.length; h < l; h++) {
                var c = this._runners[h],
                  f = c.runner,
                  d = i,
                  g = this._time - c.start;
                if (g <= 0) u = !0;
                else if ((g < d && (d = g), f.active())) {
                  var p = f.step(d).done;
                  if (p) {
                    if (!0 !== c.persist) {
                      var v = f.duration() - f.time() + this._time;
                      v + c.persist < this._time && (f.unschedule(), --h, --l);
                    }
                  } else u = !0;
                }
              }
              return (
                (u && !(this._speed < 0 && 0 === this._time)) ||
                (this._runnerIds.length && this._speed < 0 && this._time > 0)
                  ? this._continue()
                  : (this.pause(), this.fire("finished")),
                this
              );
            },
          },
          {
            key: "_continue",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return (
                uu.cancelFrame(this._nextFrame),
                (this._nextFrame = null),
                t
                  ? this._stepImmediate()
                  : (this._paused || (this._nextFrame = uu.frame(this._step)),
                    this)
              );
            },
          },
          {
            key: "active",
            value: function () {
              return !!this._nextFrame;
            },
          },
        ]),
        e
      );
    })(No);
  function fu(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function du(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? fu(n, !0).forEach(function (e) {
            na(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : fu(n).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  Di({
    Element: {
      timeline: function (t) {
        return null == t
          ? ((this._timeline = this._timeline || new cu()), this._timeline)
          : ((this._timeline = t), this);
      },
    },
  });
  var gu = (function (t) {
    function e(t) {
      var n;
      return (
        Mr(this, e),
        ((n = ao(this, uo(e).call(this))).id = e.id++),
        (t = "function" == typeof (t = null == t ? Ho : t) ? new za(t) : t),
        (n._element = null),
        (n._timeline = null),
        (n.done = !1),
        (n._queue = []),
        (n._duration = "number" == typeof t && t),
        (n._isDeclarative = t instanceof za),
        (n._stepper = n._isDeclarative ? t : new ja()),
        (n._history = {}),
        (n.enabled = !0),
        (n._time = 0),
        (n._lastTime = 0),
        (n._reseted = !0),
        (n.transforms = new Eo()),
        (n.transformId = 1),
        (n._haveReversed = !1),
        (n._reverse = !1),
        (n._loopsDone = 0),
        (n._swing = !1),
        (n._wait = 0),
        (n._times = 1),
        (n._frameId = null),
        (n._persist = !!n._isDeclarative || null),
        n
      );
    }
    return (
      co(e, t),
      Ks(
        e,
        [
          {
            key: "element",
            value: function (t) {
              return null == t
                ? this._element
                : ((this._element = t), t._prepareRunner(), this);
            },
          },
          {
            key: "timeline",
            value: function (t) {
              return void 0 === t
                ? this._timeline
                : ((this._timeline = t), this);
            },
          },
          {
            key: "animate",
            value: function (t, n, i) {
              var r = e.sanitise(t, n, i),
                s = new e(r.duration);
              return (
                this._timeline && s.timeline(this._timeline),
                this._element && s.element(this._element),
                s.loop(r).schedule(r.delay, r.when)
              );
            },
          },
          {
            key: "schedule",
            value: function (t, e, n) {
              if (
                (t instanceof cu || ((n = e), (e = t), (t = this.timeline())),
                !t)
              )
                throw Error("Runner cannot be scheduled without timeline");
              return t.schedule(this, e, n), this;
            },
          },
          {
            key: "unschedule",
            value: function () {
              var t = this.timeline();
              return t && t.unschedule(this), this;
            },
          },
          {
            key: "loop",
            value: function (t, e, n) {
              return (
                "object" === ae(t) &&
                  ((e = t.swing), (n = t.wait), (t = t.times)),
                (this._times = t || 1 / 0),
                (this._swing = e || !1),
                (this._wait = n || 0),
                !0 === this._times && (this._times = 1 / 0),
                this
              );
            },
          },
          {
            key: "delay",
            value: function (t) {
              return this.animate(0, t);
            },
          },
          {
            key: "queue",
            value: function (t, e, n, i) {
              return (
                this._queue.push({
                  initialiser: t || Go,
                  runner: e || Go,
                  retarget: n,
                  isTransform: i,
                  initialised: !1,
                  finished: !1,
                }),
                this.timeline() && this.timeline()._continue(),
                this
              );
            },
          },
          {
            key: "during",
            value: function (t) {
              return this.queue(null, t);
            },
          },
          {
            key: "after",
            value: function (t) {
              return this.on("finished", t);
            },
          },
          {
            key: "time",
            value: function (t) {
              if (null == t) return this._time;
              var e = t - this._time;
              return this.step(e), this;
            },
          },
          {
            key: "duration",
            value: function () {
              return this._times * (this._wait + this._duration) - this._wait;
            },
          },
          {
            key: "loops",
            value: function (t) {
              var e = this._duration + this._wait;
              if (null == t) {
                var n = Math.floor(this._time / e),
                  i = (this._time - n * e) / this._duration;
                return Math.min(n + i, this._times);
              }
              var r = t % 1,
                s = e * Math.floor(t) + this._duration * r;
              return this.time(s);
            },
          },
          {
            key: "persist",
            value: function (t) {
              return null == t ? this._persist : ((this._persist = t), this);
            },
          },
          {
            key: "position",
            value: function (t) {
              var e,
                n = this._time,
                i = this._duration,
                r = this._wait,
                s = this._times,
                o = this._swing,
                a = this._reverse;
              if (null == t) {
                var u = function (t) {
                    var e = o * Math.floor((t % (2 * (r + i))) / (r + i)),
                      n = (e && !a) || (!e && a),
                      s = (Math.pow(-1, n) * (t % (r + i))) / i + n;
                    return Math.max(Math.min(s, 1), 0);
                  },
                  h = s * (r + i) - r;
                return (e =
                  n <= 0
                    ? Math.round(u(1e-5))
                    : n < h
                    ? u(n)
                    : Math.round(u(h - 1e-5)));
              }
              var l = Math.floor(this.loops()),
                c = o && l % 2 == 0;
              return (
                (e = l + ((c && !a) || (a && c) ? t : 1 - t)), this.loops(e)
              );
            },
          },
          {
            key: "progress",
            value: function (t) {
              return null == t
                ? Math.min(1, this._time / this.duration())
                : this.time(t * this.duration());
            },
          },
          {
            key: "step",
            value: function (t) {
              if (!this.enabled) return this;
              (t = null == t ? 16 : t), (this._time += t);
              var e = this.position(),
                n = this._lastPosition !== e && this._time >= 0;
              this._lastPosition = e;
              var i = this.duration(),
                r = this._lastTime <= 0 && this._time > 0,
                s = this._lastTime < i && this._time >= i;
              (this._lastTime = this._time), r && this.fire("start", this);
              var o = this._isDeclarative;
              if (
                ((this.done = !o && !s && this._time >= i),
                (this._reseted = !1),
                n || o)
              ) {
                this._initialise(n), (this.transforms = new Eo());
                var a = this._run(o ? t : e);
                this.fire("step", this);
              }
              return (
                (this.done = this.done || (a && o)),
                s && this.fire("finished", this),
                this
              );
            },
          },
          {
            key: "reset",
            value: function () {
              return (
                this._reseted || (this.time(0), (this._reseted = !0)), this
              );
            },
          },
          {
            key: "finish",
            value: function () {
              return this.step(1 / 0);
            },
          },
          {
            key: "reverse",
            value: function (t) {
              return (this._reverse = null == t ? !this._reverse : t), this;
            },
          },
          {
            key: "ease",
            value: function (t) {
              return (this._stepper = new ja(t)), this;
            },
          },
          {
            key: "active",
            value: function (t) {
              return null == t ? this.enabled : ((this.enabled = t), this);
            },
          },
          {
            key: "_rememberMorpher",
            value: function (t, e) {
              if (
                ((this._history[t] = {
                  morpher: e,
                  caller: this._queue[this._queue.length - 1],
                }),
                this._isDeclarative)
              ) {
                var n = this.timeline();
                n && n.play();
              }
            },
          },
          {
            key: "_tryRetarget",
            value: function (t, e, n) {
              if (this._history[t]) {
                if (!this._history[t].caller.initialised) {
                  var i = this._queue.indexOf(this._history[t].caller);
                  return this._queue.splice(i, 1), !1;
                }
                this._history[t].caller.retarget
                  ? this._history[t].caller.retarget(e, n)
                  : this._history[t].morpher.to(e),
                  (this._history[t].caller.finished = !1);
                var r = this.timeline();
                return r && r.play(), !0;
              }
              return !1;
            },
          },
          {
            key: "_initialise",
            value: function (t) {
              if (t || this._isDeclarative)
                for (var e = 0, n = this._queue.length; e < n; ++e) {
                  var i = this._queue[e],
                    r = this._isDeclarative || (!i.initialised && t);
                  (t = !i.finished),
                    r && t && (i.initialiser.call(this), (i.initialised = !0));
                }
            },
          },
          {
            key: "_run",
            value: function (t) {
              for (var e = !0, n = 0, i = this._queue.length; n < i; ++n) {
                var r = this._queue[n],
                  s = r.runner.call(this, t);
                (r.finished = r.finished || !0 === s), (e = e && r.finished);
              }
              return e;
            },
          },
          {
            key: "addTransform",
            value: function (t, e) {
              return this.transforms.lmultiplyO(t), this;
            },
          },
          {
            key: "clearTransform",
            value: function () {
              return (this.transforms = new Eo()), this;
            },
          },
          {
            key: "clearTransformsFromQueue",
            value: function () {
              (this.done &&
                this._timeline &&
                this._timeline._runnerIds.includes(this.id)) ||
                (this._queue = this._queue.filter(function (t) {
                  return !t.isTransform;
                }));
            },
          },
        ],
        [
          {
            key: "sanitise",
            value: function (t, e, n) {
              var i = 1,
                r = !1,
                s = 0;
              return (
                (e = e || qo),
                (n = n || "last"),
                "object" !== ae((t = t || Ho)) ||
                  t instanceof Fa ||
                  ((e = t.delay || e),
                  (n = t.when || n),
                  (r = t.swing || r),
                  (i = t.times || i),
                  (s = t.wait || s),
                  (t = t.duration || Ho)),
                { duration: t, delay: e, swing: r, times: i, wait: s, when: n }
              );
            },
          },
        ]
      ),
      e
    );
  })(No);
  gu.id = 0;
  var pu = (function () {
    function t() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : new Eo(),
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      Mr(this, t), (this.transforms = e), (this.id = n), (this.done = i);
    }
    return (
      Ks(t, [{ key: "clearTransformsFromQueue", value: function () {} }]), t
    );
  })();
  jr([gu, pu], {
    mergeWith: function (t) {
      return new pu(t.transforms.lmultiply(this.transforms), t.id);
    },
  });
  var vu = function (t, e) {
      return t.lmultiplyO(e);
    },
    yu = function (t) {
      return t.transforms;
    };
  function mu() {
    var t = this._transformationRunners.runners.map(yu).reduce(vu, new Eo());
    this.transform(t),
      this._transformationRunners.merge(),
      1 === this._transformationRunners.length() && (this._frameId = null);
  }
  var wu = (function () {
    function t() {
      Mr(this, t), (this.runners = []), (this.ids = []);
    }
    return (
      Ks(t, [
        {
          key: "add",
          value: function (t) {
            if (!this.runners.includes(t)) {
              var e = t.id + 1;
              return this.runners.push(t), this.ids.push(e), this;
            }
          },
        },
        {
          key: "getByID",
          value: function (t) {
            return this.runners[this.ids.indexOf(t + 1)];
          },
        },
        {
          key: "remove",
          value: function (t) {
            var e = this.ids.indexOf(t + 1);
            return this.ids.splice(e, 1), this.runners.splice(e, 1), this;
          },
        },
        {
          key: "merge",
          value: function () {
            var t = this,
              e = null;
            return (
              this.runners.forEach(function (n, i) {
                e &&
                  n.done &&
                  e.done &&
                  (!n._timeline || !n._timeline._runnerIds.includes(n.id)) &&
                  (!e._timeline || !e._timeline._runnerIds.includes(e.id)) &&
                  (t.remove(n.id), t.edit(e.id, n.mergeWith(e))),
                  (e = n);
              }),
              this
            );
          },
        },
        {
          key: "edit",
          value: function (t, e) {
            var n = this.ids.indexOf(t + 1);
            return (
              this.ids.splice(n, 1, t + 1), this.runners.splice(n, 1, e), this
            );
          },
        },
        {
          key: "length",
          value: function () {
            return this.ids.length;
          },
        },
        {
          key: "clearBefore",
          value: function (t) {
            var e = this.ids.indexOf(t + 1) || 1;
            return (
              this.ids.splice(0, e, 0),
              this.runners.splice(0, e, new pu()).forEach(function (t) {
                return t.clearTransformsFromQueue();
              }),
              this
            );
          },
        },
      ]),
      t
    );
  })();
  Di({
    Element: {
      animate: function (t, e, n) {
        var i = gu.sanitise(t, e, n),
          r = this.timeline();
        return new gu(i.duration)
          .loop(i)
          .element(this)
          .timeline(r.play())
          .schedule(i.delay, i.when);
      },
      delay: function (t, e) {
        return this.animate(0, t, e);
      },
      _clearTransformRunnersBefore: function (t) {
        this._transformationRunners.clearBefore(t.id);
      },
      _currentTransform: function (t) {
        return this._transformationRunners.runners
          .filter(function (e) {
            return e.id <= t.id;
          })
          .map(yu)
          .reduce(vu, new Eo());
      },
      _addRunner: function (t) {
        this._transformationRunners.add(t),
          uu.cancelImmediate(this._frameId),
          (this._frameId = uu.immediate(mu.bind(this)));
      },
      _prepareRunner: function () {
        null == this._frameId &&
          (this._transformationRunners = new wu().add(new pu(new Eo(this))));
      },
    },
  }),
    jr(gu, {
      attr: function (t, e) {
        return this.styleAttr("attr", t, e);
      },
      css: function (t, e) {
        return this.styleAttr("css", t, e);
      },
      styleAttr: function (t, e, n) {
        if ("object" === ae(e)) {
          for (var i in e) this.styleAttr(t, i, e[i]);
          return this;
        }
        var r = new Wa(this._stepper).to(n);
        return (
          this.queue(
            function () {
              r = r.from(this.element()[t](e));
            },
            function (n) {
              return this.element()[t](e, r.at(n)), r.done();
            }
          ),
          this
        );
      },
      zoom: function (t, e) {
        if (this._tryRetarget("zoom", xa, e)) return this;
        var n = new Wa(this._stepper).to(new Wo(t));
        return (
          this.queue(
            function () {
              n = n.from(this.element().zoom());
            },
            function (t) {
              return this.element().zoom(n.at(t), e), n.done();
            },
            function (t, i) {
              (e = i), n.to(t);
            }
          ),
          this._rememberMorpher("zoom", n),
          this
        );
      },
      transform: function (t, e, n) {
        if (
          ((e = t.relative || e),
          this._isDeclarative && !e && this._tryRetarget("transform", t))
        )
          return this;
        var i = Eo.isMatrixLike(t);
        n = null != t.affine ? t.affine : null != n ? n : !i;
        var r,
          s,
          o,
          a,
          u,
          h = new Wa(this._stepper).type(n ? Qa : Eo);
        return (
          this.queue(
            function () {
              (s = s || this.element()),
                (r = r || xr(t, s)),
                (u = new Eo(e ? void 0 : s)),
                s._addRunner(this),
                e || s._clearTransformRunnersBefore(this);
            },
            function (l) {
              e || this.clearTransform();
              var c = new To(r).transform(s._currentTransform(this)),
                f = c.x,
                d = c.y,
                g = new Eo(du({}, t, { origin: [f, d] })),
                p = this._isDeclarative && o ? o : u;
              if (n) {
                (g = g.decompose(f, d)), (p = p.decompose(f, d));
                var v = g.rotate,
                  y = p.rotate,
                  m = [v - 360, v, v + 360],
                  w = m.map(function (t) {
                    return Math.abs(t - y);
                  }),
                  x = Math.min.apply(Math, Ai(w)),
                  b = w.indexOf(x);
                g.rotate = m[b];
              }
              e &&
                (i || (g.rotate = t.rotate || 0),
                this._isDeclarative && a && (p.rotate = a)),
                h.from(p),
                h.to(g);
              var _ = h.at(l);
              return (
                (a = _.rotate),
                (o = new Eo(_)),
                this.addTransform(o),
                s._addRunner(this),
                h.done()
              );
            },
            function (e) {
              (e.origin || "center").toString() !==
                (t.origin || "center").toString() && (r = xr(t, s)),
                (t = du({}, e, { origin: r }));
            },
            !0
          ),
          this._isDeclarative && this._rememberMorpher("transform", h),
          this
        );
      },
      x: function (t, e) {
        return this._queueNumber("x", t);
      },
      y: function (t) {
        return this._queueNumber("y", t);
      },
      dx: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("x", t);
      },
      dy: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("y", t);
      },
      dmove: function (t, e) {
        return this.dx(t).dy(e);
      },
      _queueNumberDelta: function (t, e) {
        if (((e = new Wo(e)), this._tryRetarget(t, e))) return this;
        var n = new Wa(this._stepper).to(e),
          i = null;
        return (
          this.queue(
            function () {
              (i = this.element()[t]()), n.from(i), n.to(i + e);
            },
            function (e) {
              return this.element()[t](n.at(e)), n.done();
            },
            function (t) {
              n.to(i + new Wo(t));
            }
          ),
          this._rememberMorpher(t, n),
          this
        );
      },
      _queueObject: function (t, e) {
        if (this._tryRetarget(t, e)) return this;
        var n = new Wa(this._stepper).to(e);
        return (
          this.queue(
            function () {
              n.from(this.element()[t]());
            },
            function (e) {
              return this.element()[t](n.at(e)), n.done();
            }
          ),
          this._rememberMorpher(t, n),
          this
        );
      },
      _queueNumber: function (t, e) {
        return this._queueObject(t, new Wo(e));
      },
      cx: function (t) {
        return this._queueNumber("cx", t);
      },
      cy: function (t) {
        return this._queueNumber("cy", t);
      },
      move: function (t, e) {
        return this.x(t).y(e);
      },
      center: function (t, e) {
        return this.cx(t).cy(e);
      },
      size: function (t, e) {
        var n;
        return (
          (t && e) || (n = this._element.bbox()),
          t || (t = (n.width / n.height) * e),
          e || (e = (n.height / n.width) * t),
          this.width(t).height(e)
        );
      },
      width: function (t) {
        return this._queueNumber("width", t);
      },
      height: function (t) {
        return this._queueNumber("height", t);
      },
      plot: function (t, e, n, i) {
        if (4 === arguments.length) return this.plot([t, e, n, i]);
        if (this._tryRetarget("plot", t)) return this;
        var r = new Wa(this._stepper).type(this._element.MorphArray).to(t);
        return (
          this.queue(
            function () {
              r.from(this._element.array());
            },
            function (t) {
              return this._element.plot(r.at(t)), r.done();
            }
          ),
          this._rememberMorpher("plot", r),
          this
        );
      },
      leading: function (t) {
        return this._queueNumber("leading", t);
      },
      viewbox: function (t, e, n, i) {
        return this._queueObject("viewbox", new Vo(t, e, n, i));
      },
      update: function (t) {
        return "object" !== ae(t)
          ? this.update({
              offset: arguments[0],
              color: arguments[1],
              opacity: arguments[2],
            })
          : (null != t.opacity && this.attr("stop-opacity", t.opacity),
            null != t.color && this.attr("stop-color", t.color),
            null != t.offset && this.attr("offset", t.offset),
            this);
      },
    }),
    jr(gu, { rx: ra, ry: sa, from: wa, to: xa }),
    Vr(gu, "Runner");
  var xu = (function (t) {
    function e(t) {
      var n;
      return (
        Mr(this, e),
        (n = ao(this, uo(e).call(this, Er("svg", t), t))).namespace(),
        n
      );
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "isRoot",
          value: function () {
            return !(
              this.node.parentNode &&
              this.node.parentNode instanceof kr.window.SVGElement &&
              "#document" !== this.node.parentNode.nodeName
            );
          },
        },
        {
          key: "root",
          value: function () {
            return this.isRoot()
              ? this
              : ho(uo(e.prototype), "root", this).call(this);
          },
        },
        {
          key: "namespace",
          value: function () {
            return this.isRoot()
              ? this.attr({ xmlns: br, version: "1.1" })
                  .attr("xmlns:xlink", Sr, _r)
                  .attr("xmlns:svgjs", "http://svgjs.com/svgjs", _r)
              : this.root().namespace();
          },
        },
        {
          key: "defs",
          value: function () {
            return this.isRoot()
              ? Cr(this.node.querySelector("defs")) || this.put(new va())
              : this.root().defs();
          },
        },
        {
          key: "parent",
          value: function (t) {
            return this.isRoot()
              ? "#document" === this.node.parentNode.nodeName
                ? null
                : Cr(this.node.parentNode)
              : ho(uo(e.prototype), "parent", this).call(this, t);
          },
        },
        {
          key: "clear",
          value: function () {
            for (; this.node.hasChildNodes(); )
              this.node.removeChild(this.node.lastChild);
            return delete this._defs, this;
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      nested: zr(function () {
        return this.put(new xu());
      }),
    },
  }),
    Vr(xu, "Svg", !0);
  var bu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("symbol", t), t));
    }
    return co(e, t), e;
  })(pa);
  Di({
    Container: {
      symbol: zr(function () {
        return this.put(new bu());
      }),
    },
  }),
    Vr(bu, "Symbol");
  var _u = {
      __proto__: null,
      plain: function (t) {
        return (
          !1 === this._build && this.clear(),
          this.node.appendChild(kr.document.createTextNode(t)),
          this
        );
      },
      length: function () {
        return this.node.getComputedTextLength();
      },
    },
    Su = (function (t) {
      function e(t) {
        var n;
        return (
          Mr(this, e),
          ((n = ao(this, uo(e).call(this, Er("text", t), t))).dom.leading =
            new Wo(1.3)),
          (n._rebuild = !0),
          (n._build = !1),
          n
        );
      }
      return (
        co(e, t),
        Ks(e, [
          {
            key: "x",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t ? e.x : this.attr("x", this.attr("x") + t - e.x);
            },
          },
          {
            key: "y",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t ? e.y : this.attr("y", this.attr("y") + t - e.y);
            },
          },
          {
            key: "move",
            value: function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox();
              return this.x(t, n).y(e, n);
            },
          },
          {
            key: "cx",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t
                ? e.cx
                : this.attr("x", this.attr("x") + t - e.cx);
            },
          },
          {
            key: "cy",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t
                ? e.cy
                : this.attr("y", this.attr("y") + t - e.cy);
            },
          },
          {
            key: "center",
            value: function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox();
              return this.cx(t, n).cy(e, n);
            },
          },
          {
            key: "text",
            value: function (t) {
              if (void 0 === t) {
                var e = this.node.childNodes,
                  n = 0;
                t = "";
                for (var i = 0, r = e.length; i < r; ++i)
                  "textPath" !== e[i].nodeName
                    ? (i !== n &&
                        3 !== e[i].nodeType &&
                        !0 === Cr(e[i]).dom.newLined &&
                        (t += "\n"),
                      (t += e[i].textContent))
                    : 0 === i && (n = 1);
                return t;
              }
              if ((this.clear().build(!0), "function" == typeof t))
                t.call(this, this);
              else
                for (var s = 0, o = (t = t.split("\n")).length; s < o; s++)
                  this.tspan(t[s]).newLine();
              return this.build(!1).rebuild();
            },
          },
          {
            key: "leading",
            value: function (t) {
              return null == t
                ? this.dom.leading
                : ((this.dom.leading = new Wo(t)), this.rebuild());
            },
          },
          {
            key: "rebuild",
            value: function (t) {
              if (
                ("boolean" == typeof t && (this._rebuild = t), this._rebuild)
              ) {
                var e = this,
                  n = 0,
                  i = this.dom.leading;
                this.each(function () {
                  var t = kr.window
                      .getComputedStyle(this.node)
                      .getPropertyValue("font-size"),
                    r = i * new Wo(t);
                  this.dom.newLined &&
                    (this.attr("x", e.attr("x")),
                    "\n" === this.text()
                      ? (n += r)
                      : (this.attr("dy", r + n), (n = 0)));
                }),
                  this.fire("rebuild");
              }
              return this;
            },
          },
          {
            key: "build",
            value: function (t) {
              return (this._build = !!t), this;
            },
          },
          {
            key: "setData",
            value: function (t) {
              return (
                (this.dom = t),
                (this.dom.leading = new Wo(t.leading || 1.3)),
                this
              );
            },
          },
        ]),
        e
      );
    })(da);
  jr(Su, _u),
    Di({
      Container: {
        text: zr(function (t) {
          return this.put(new Su()).text(t);
        }),
        plain: zr(function (t) {
          return this.put(new Su()).plain(t);
        }),
      },
    }),
    Vr(Su, "Text");
  var ku = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("tspan", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "text",
          value: function (t) {
            return null == t
              ? this.node.textContent + (this.dom.newLined ? "\n" : "")
              : ("function" == typeof t ? t.call(this, this) : this.plain(t),
                this);
          },
        },
        {
          key: "dx",
          value: function (t) {
            return this.attr("dx", t);
          },
        },
        {
          key: "dy",
          value: function (t) {
            return this.attr("dy", t);
          },
        },
        {
          key: "x",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "y",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "move",
          value: function (t, e) {
            return this.x(t).y(e);
          },
        },
        {
          key: "newLine",
          value: function () {
            var t = this.parent(Su);
            this.dom.newLined = !0;
            var e = kr.window
                .getComputedStyle(this.node)
                .getPropertyValue("font-size"),
              n = t.dom.leading * new Wo(e);
            return this.dy(n).attr("x", t.x());
          },
        },
      ]),
      e
    );
  })(Su);
  jr(ku, _u),
    Di({
      Tspan: {
        tspan: zr(function (t) {
          var e = new ku();
          return (
            this._build || this.clear(),
            this.node.appendChild(e.node),
            e.text(t)
          );
        }),
      },
    }),
    Vr(ku, "Tspan");
  var Mu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("clipPath", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "remove",
          value: function () {
            return (
              this.targets().forEach(function (t) {
                t.unclip();
              }),
              ho(uo(e.prototype), "remove", this).call(this)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return zo('svg [clip-path*="' + this.id() + '"]');
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      clip: zr(function () {
        return this.defs().put(new Mu());
      }),
    },
    Element: {
      clipWith: function (t) {
        var e = t instanceof Mu ? t : this.parent().clip().add(t);
        return this.attr("clip-path", 'url("#' + e.id() + '")');
      },
      unclip: function () {
        return this.attr("clip-path", null);
      },
      clipper: function () {
        return this.reference("clip-path");
      },
    },
  }),
    Vr(Mu, "ClipPath");
  var Pu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("foreignObject", t), t));
    }
    return co(e, t), e;
  })($o);
  Di({
    Container: {
      foreignObject: zr(function (t, e) {
        return this.put(new Pu()).size(t, e);
      }),
    },
  }),
    Vr(Pu, "ForeignObject");
  var Ou = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("g", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "x",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.x : this.move(t, e.y, e);
          },
        },
        {
          key: "y",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.y : this.move(e.x, t, e);
          },
        },
        {
          key: "move",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox(),
              i = t - n.x,
              r = e - n.y;
            return this.dmove(i, r);
          },
        },
        {
          key: "dx",
          value: function (t) {
            return this.dmove(t, 0);
          },
        },
        {
          key: "dy",
          value: function (t) {
            return this.dmove(0, t);
          },
        },
        {
          key: "dmove",
          value: function (t, e) {
            return (
              this.children().forEach(function (n, i) {
                var r = n.bbox(),
                  s = new Eo(n),
                  o = s.translate(t, e).transform(s.inverse()),
                  a = new To(r.x, r.y).transform(o);
                n.move(a.x, a.y);
              }),
              this
            );
          },
        },
        {
          key: "width",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.width : this.size(t, e.height, e);
          },
        },
        {
          key: "height",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.height : this.size(e.width, t, e);
          },
        },
        {
          key: "size",
          value: function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox(),
              i = wr(this, t, e, n),
              r = i.width / n.width,
              s = i.height / n.height;
            return (
              this.children().forEach(function (t, e) {
                var i = new To(n).transform(new Eo(t).inverse());
                t.scale(r, s, i.x, i.y);
              }),
              this
            );
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      group: zr(function () {
        return this.put(new Ou());
      }),
    },
  }),
    Vr(Ou, "G");
  var Iu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("a", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "to",
          value: function (t) {
            return this.attr("href", t, Sr);
          },
        },
        {
          key: "target",
          value: function (t) {
            return this.attr("target", t);
          },
        },
      ]),
      e
    );
  })(pa);
  Di({
    Container: {
      link: zr(function (t) {
        return this.put(new Iu()).to(t);
      }),
    },
    Element: {
      linkTo: function (t) {
        var e = new Iu();
        return (
          "function" == typeof t ? t.call(e, e) : e.to(t),
          this.parent().put(e).put(this)
        );
      },
    },
  }),
    Vr(Iu, "A");
  var Tu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("mask", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "remove",
          value: function () {
            return (
              this.targets().forEach(function (t) {
                t.unmask();
              }),
              ho(uo(e.prototype), "remove", this).call(this)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return zo('svg [mask*="' + this.id() + '"]');
          },
        },
      ]),
      e
    );
  })(pa);
  function Au(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Eu(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Au(n, !0).forEach(function (e) {
            na(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Au(n).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  Di({
    Container: {
      mask: zr(function () {
        return this.defs().put(new Tu());
      }),
    },
    Element: {
      maskWith: function (t) {
        var e = t instanceof Tu ? t : this.parent().mask().add(t);
        return this.attr("mask", 'url("#' + e.id() + '")');
      },
      unmask: function () {
        return this.attr("mask", null);
      },
      masker: function () {
        return this.reference("mask");
      },
    },
  }),
    Vr(Tu, "Mask");
  var Cu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("style", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "addText",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (this.node.textContent += t), this;
          },
        },
        {
          key: "font",
          value: function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return this.rule("@font-face", Eu({ fontFamily: t, src: e }, n));
          },
        },
        {
          key: "rule",
          value: function (t, e) {
            return this.addText(
              (function (t, e) {
                if (!t) return "";
                if (!e) return t;
                var n = t + "{";
                for (var i in e)
                  n +=
                    i.replace(/([A-Z])/g, function (t, e) {
                      return "-" + e.toLowerCase();
                    }) +
                    ":" +
                    e[i] +
                    ";";
                return n + "}";
              })(t, e)
            );
          },
        },
      ]),
      e
    );
  })($o);
  Di("Dom", {
    style: zr(function (t, e) {
      return this.put(new Cu()).rule(t, e);
    }),
    fontface: zr(function (t, e, n) {
      return this.put(new Cu()).font(t, e, n);
    }),
  }),
    Vr(Cu, "Style");
  var Du = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("textPath", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "array",
          value: function () {
            var t = this.track();
            return t ? t.array() : null;
          },
        },
        {
          key: "plot",
          value: function (t) {
            var e = this.track(),
              n = null;
            return e && (n = e.plot(t)), null == t ? n : this;
          },
        },
        {
          key: "track",
          value: function () {
            return this.reference("href");
          },
        },
      ]),
      e
    );
  })(Su);
  Di({
    Container: {
      textPath: zr(function (t, e) {
        return t instanceof Su || (t = this.text(t)), t.path(e);
      }),
    },
    Text: {
      path: zr(function (t) {
        var e,
          n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = new Du();
        if (
          (t instanceof Ka || (t = this.defs().path(t)),
          i.attr("href", "#" + t, Sr),
          n)
        )
          for (; (e = this.node.firstChild); ) i.node.appendChild(e);
        return this.put(i);
      }),
      textPath: function () {
        return this.findOne("textPath");
      },
    },
    Path: {
      text: zr(function (t) {
        return (
          t instanceof Su || (t = new Su().addTo(this.parent()).text(t)),
          t.path(this)
        );
      }),
      targets: function () {
        return zo('svg [href*="' + this.id() + '"]');
      },
    },
  }),
    (Du.prototype.MorphArray = Ga),
    Vr(Du, "TextPath");
  var Vu = (function (t) {
    function e(t) {
      return Mr(this, e), ao(this, uo(e).call(this, Er("use", t), t));
    }
    return (
      co(e, t),
      Ks(e, [
        {
          key: "element",
          value: function (t, e) {
            return this.attr("href", (e || "") + "#" + t, Sr);
          },
        },
      ]),
      e
    );
  })(da);
  Di({
    Container: {
      use: zr(function (t, e) {
        return this.put(new Vu()).element(t, e);
      }),
    },
  }),
    Vr(Vu, "Use");
  var Lu = Ar;
  jr([xu, bu, Ma, Sa, Ta], Vi("viewbox")),
    jr([Ia, eu, tu, Ka], Vi("marker")),
    jr(Su, Vi("Text")),
    jr(Ka, Vi("Path")),
    jr(va, Vi("Defs")),
    jr([Su, ku], Vi("Tspan")),
    jr([nu, ya, ga, _a], Vi("radius")),
    jr(No, Vi("EventTarget")),
    jr(Qo, Vi("Dom")),
    jr($o, Vi("Element")),
    jr(da, Vi("Shape")),
    jr(pa, Vi("Container")),
    jr(gu, Vi("Runner")),
    Fo.extend(Ai(new Set(Ci))),
    (function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      Za.push.apply(Za, Ai([].concat(t)));
    })([Wo, ro, Vo, Eo, Xo, Pa, Ga]),
    jr(Za, {
      to: function (t) {
        return new Wa().type(this.constructor).from(this.valueOf()).to(t);
      },
      fromArray: function (t) {
        return this.init(t), this;
      },
    });
  class Ru {
    static isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    }
    static shoudResize() {
      let t = !0;
      return (
        Ru.isMobile() && Ru.currentWidth == window.innerWidth && (t = !1),
        (Ru.currentWidth = window.innerWidth),
        t
      );
    }
  }
  Ru.currentWidth = -1;
  class Fu {
    static initializeSVG() {
      Fu.isInitSVG ||
        ((Fu.SVG = Lu().addTo("body")),
        (Fu.SVG.node.style.position = "absolute"),
        (Fu.SVG.node.style.top = "0"),
        (Fu.SVG.node.style.left = "0"),
        (Fu.SVG.node.style.pointerEvents = "none"),
        Fu.SVG.attr("data-name", "page-root"),
        (Fu.SVGPageLayer = Fu.SVG.group()),
        (Fu.SVGPageLayer.node.style.pointerEvents = "none"),
        Fu.SVGPageLayer.attr("data-name", "page-layer"),
        (Fu.MENU_SVG = Lu().addTo("body")),
        (Fu.MENU_SVG.node.style.position = "fixed"),
        (Fu.MENU_SVG.node.style.top = "0"),
        (Fu.MENU_SVG.node.style.left = "0"),
        (Fu.MENU_SVG.node.style.pointerEvents = "none"),
        Fu.MENU_SVG.attr("data-name", "menu-root"),
        (Fu.SVGMenuLayer = Fu.MENU_SVG.group()),
        (Fu.SVGMenuLayer.node.style.pointerEvents = "none"),
        Fu.SVGMenuLayer.attr("data-name", "menu-layer"),
        Fu.DEBUG &&
          ((Fu.SVGDebugLayer = Fu.SVG.group()),
          (Fu.SVGDebugLayer.node.style.pointerEvents = "none"),
          Fu.SVGDebugLayer.attr("data-name", "debug-layer")),
        (Fu.isInitSVG = !0));
    }
    static moveMenuLayerTofront() {
      Fu.SVGMenuLayer && Fu.SVGMenuLayer.front(),
        Fu.SVGDebugLayer && Fu.SVGDebugLayer.front();
    }
    static movePageLayerTofront() {
      Fu.SVGPageLayer && Fu.SVGPageLayer.front(),
        Fu.SVGDebugLayer && Fu.SVGDebugLayer.front();
    }
    static resizeSVG() {
      void 0,
        Fu.currentTime(),
        -1 == this._id
          ? this._resizeSVG()
          : (clearTimeout(this._id),
            (this._id = window.setTimeout(this._resizeSVG, 20)));
    }
    static _resizeSVG() {
      if ((void 0, Fu.currentTime(), Fu.isInitSVG)) {
        Fu.SVG.hide(), Fu.MENU_SVG.hide();
        const t = document.documentElement.scrollWidth,
          e = document.documentElement.scrollHeight,
          n = document.documentElement.clientWidth;
        let i = document.documentElement.clientHeight;
        Ru.isMobile() && (i = window.innerHeight),
          Fu.SVG.size(Math.max(t, n), Math.max(e, i)),
          Fu.MENU_SVG.size(n, i),
          Fu.SVG.show(),
          Fu.MENU_SVG.show();
      }
      Fu.currentTime();
    }
    static currentTime() {}
  }
  (Fu.CACHE_BREAK = ""),
    (Fu.DEBUG = !1),
    (Fu.FPS = 120),
    (Fu.AYOND_BLUE = "#2f1dff"),
    (Fu.AYOND_BLUE_DARK = "#2114b3"),
    (Fu.LINK_URL = ["/", "/", "/about", "/about#contact"]),
    (Fu.DATA_INTERSECTOIN = "data-intersection"),
    (Fu.DATA_CARD_INIT = "data-card-init"),
    (Fu.LIST_MODE = "list-mode"),
    (Fu.SLIDESHOW_MODE = "slideshow-mode"),
    (Fu.SLIDE_CARD_CLASS = "slide-card"),
    (Fu.LIST_CARD_CLASS = "list-card"),
    (Fu.isInitSVG = !1),
    (Fu._id = -1),
    (Fu.START_TIME = 0);
  class ju {
    static easeNone(t, e, n, i) {
      return n * (t / i) + e;
    }
    static easeInQuad(t, e, n, i) {
      return n * (t /= i) * t + e;
    }
    static easeOutQuad(t, e, n, i) {
      return -n * (t /= i) * (t - 2) + e;
    }
    static easeInOutQuad(t, e, n, i) {
      return (t /= i / 2) < 1
        ? (n / 2) * t * t + e
        : (-n / 2) * (--t * (t - 2) - 1) + e;
    }
    static easeInCubic(t, e, n, i) {
      return n * (t /= i) * t * t + e;
    }
    static easeOutCubic(t, e, n, i) {
      return n * ((t = t / i - 1) * t * t + 1) + e;
    }
    static easeInOutCubic(t, e, n, i) {
      return (t /= i / 2) < 1
        ? (n / 2) * t * t * t + e
        : (n / 2) * ((t -= 2) * t * t + 2) + e;
    }
    static easeInQuart(t, e, n, i) {
      return n * (t /= i) * t * t * t + e;
    }
    static easeOutQuart(t, e, n, i) {
      return -n * ((t = t / i - 1) * t * t * t - 1) + e;
    }
    static easeInOutQuart(t, e, n, i) {
      return (t /= i / 2) < 1
        ? (n / 2) * t * t * t * t + e
        : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
    }
    static easeInQuint(t, e, n, i) {
      return n * (t /= i) * t * t * t * t + e;
    }
    static easeOutQuint(t, e, n, i) {
      return n * ((t = t / i - 1) * t * t * t * t + 1) + e;
    }
    static easeInOutQuint(t, e, n, i) {
      return (t /= i / 2) < 1
        ? (n / 2) * t * t * t * t * t + e
        : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
    }
    static easeInSine(t, e, n, i) {
      return -n * Math.cos((t / i) * (Math.PI / 2)) + n + e;
    }
    static easeOutSine(t, e, n, i) {
      return n * Math.sin((t / i) * (Math.PI / 2)) + e;
    }
    static easeInOutSine(t, e, n, i) {
      return (-n / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
    }
    static easeInExpo(t, e, n, i) {
      return 0 == t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e;
    }
    static easeOutExpo(t, e, n, i) {
      return t == i ? e + n : n * (1 - Math.pow(2, (-10 * t) / i)) + e;
    }
    static easeInOutExpo(t, e, n, i) {
      return 0 == t
        ? e
        : t == i
        ? e + n
        : (t /= i / 2) < 1
        ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
        : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
    }
    static easeInCirc(t, e, n, i) {
      return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
    }
    static easeOutCirc(t, e, n, i) {
      return n * Math.sqrt(1 - (t = t / i - 1) * t) + e;
    }
    static easeInOutCirc(t, e, n, i) {
      return (t /= i / 2) < 1
        ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
        : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
    }
    static easeInElastic(t, e, n, i) {
      var r = 1.70158,
        s = 0,
        o = n;
      return 0 == t
        ? e
        : 1 == (t /= i)
        ? e + n
        : (s || (s = 0.3 * i),
          o < Math.abs(n)
            ? ((o = n), (r = s / 4))
            : (r = (s / (2 * Math.PI)) * Math.asin(n / o)),
          -o *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * i - r) * (2 * Math.PI)) / s) +
            e);
    }
    static easeOutElastic(t, e, n, i) {
      var r = 1.70158,
        s = 0,
        o = n;
      return 0 == t
        ? e
        : 1 == (t /= i)
        ? e + n
        : (s || (s = 0.3 * i),
          o < Math.abs(n)
            ? ((o = n), (r = s / 4))
            : (r = (s / (2 * Math.PI)) * Math.asin(n / o)),
          o *
            Math.pow(2, -10 * t) *
            Math.sin(((t * i - r) * (2 * Math.PI)) / s) +
            n +
            e);
    }
    static easeInOutElastic(t, e, n, i) {
      var r = 1.70158,
        s = 0,
        o = n;
      return 0 == t
        ? e
        : 2 == (t /= i / 2)
        ? e + n
        : (s || (s = i * (0.3 * 1.5)),
          o < Math.abs(n)
            ? ((o = n), (r = s / 4))
            : (r = (s / (2 * Math.PI)) * Math.asin(n / o)),
          t < 1
            ? o *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * i - r) * (2 * Math.PI)) / s) *
                -0.5 +
              e
            : o *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t * i - r) * (2 * Math.PI)) / s) *
                0.5 +
              n +
              e);
    }
    static easeInBounce(t, e, n, i) {
      return n - ju.easeOutBounce(i - t, 0, n, i) + e;
    }
    static easeOutBounce(t, e, n, i) {
      return (t /= i) < 1 / 2.75
        ? n * (7.5625 * t * t) + e
        : t < 2 / 2.75
        ? n * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
        : t < 2.5 / 2.75
        ? n * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
        : n * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
    }
    static easeInOutBounce(t, e, n, i) {
      return t < i / 2
        ? 0.5 * ju.easeInBounce(2 * t, 0, n, i) + e
        : 0.5 * ju.easeOutBounce(2 * t - i, 0, n, i) + 0.5 * n + e;
    }
  }
  class zu {
    constructor(t = 0, e = 0, n = 0, i = 0, r = 0, s = 0, o = 0, a, u, h) {
      (this.fps = t),
        (this.currentTime = e),
        (this.totalTime = n),
        (this.startX = i),
        (this.startY = r),
        (this.targetX = s),
        (this.targetY = o),
        (this.easingFunctionX = a),
        (this.easingFunctionY = u),
        (this.onFinished = h),
        (this.distanceX = this.targetX - this.startX),
        (this.distanceY = this.targetY - this.startY);
    }
    set currentFrame(t) {
      this.currentTime = t / this.fps;
    }
    get currentFrame() {
      return Math.round(this.fps * this.currentTime);
    }
    set totalFrame(t) {
      this.totalTime = t / this.fps;
    }
    get totalFrame() {
      return Math.round(this.fps * this.totalTime);
    }
  }
  class Nu {
    constructor(t = 0, e = 0) {
      (this.x = t), (this.y = e), (this.x = t), (this.y = e);
    }
    static distance(t, e) {
      const n = t.x - e.x,
        i = t.y - e.y;
      return Math.sqrt(n * n + i * i);
    }
    static radian(t, e) {
      return Math.atan2(e.y - t.y, e.x - t.x);
    }
    static degree(t, e) {
      return Nu.radian(t, e) * Nu.rad2deg;
    }
    static checkPointOnLine(t, e, n) {
      const i = Nu.distance(e, n),
        r = Nu.distance(t, e),
        s = Nu.distance(t, n);
      return r <= i && s <= i;
    }
    static sortPointsClockwise(t) {
      const e = [];
      let n = 0,
        i = 0;
      for (let r = 0; r < t.length; r++)
        (n += t[r].x), (i += t[r].y), (e[r] = t[r]);
      const r = new Nu(0, -1),
        s = new Nu(n / t.length, i / t.length);
      return (
        e.sort(
          (t, e) =>
            Nu.radian(r, new Nu(t.x - s.x, t.y - s.y)) -
            Nu.radian(r, new Nu(e.x - s.x, e.y - s.y))
        ),
        e
      );
    }
    static crossPointFromLineAndPoints(t, e, n, i) {
      const r = n,
        s = i,
        o = t.x,
        a = t.y,
        u = e.x,
        h = e.y,
        l =
          Nu.forceAvoidDivisionByZero(-s * (u - o) + (u * a - o * h)) /
          Nu.forceAvoidDivisionByZero(r * (u - o) - (h - a));
      return new Nu(l, l * r + s);
    }
    static angleFromLineToPoint(t, e, n) {
      const i = e,
        r = n,
        s = t.x,
        o = t.y,
        a = new Nu(),
        u = Nu.forceAvoidDivisionByZero(s - i * (r - o)),
        h = Nu.forceAvoidDivisionByZero(1 + i * i);
      a.x = u / h;
      const l = Nu.forceAvoidDivisionByZero(i * (s + i * o) + r),
        c = Nu.forceAvoidDivisionByZero(1 + i * i);
      return (a.y = l / c), Nu.degree(a, t);
    }
    static forceAvoidDivisionByZero(t) {
      return 0 != t ? t : 1e-5;
    }
  }
  Nu.rad2deg = 180 / Math.PI;
  class Gu {
    constructor(t) {
      (this.parent = t),
        (this.isStop = !0),
        (this.playEasingFlag = !1),
        (this.frontRectColor = Fu.AYOND_BLUE),
        (this.backRectColor = "#eee"),
        (this.imageWidth = 0),
        (this.imageHeight = 0),
        (this.offset = new Nu()),
        (this.dragStartPoint = new Nu()),
        (this.draggingPoint = new Nu()),
        (this.mousePoint = new Nu()),
        (this.mouseMoveRate = 0),
        (this.pushMouseRate = 2),
        (this.farthestVertexIndex = NaN),
        (this.rectVertices = []),
        (this.symmetryRectVertices = []),
        (this.backRectVertices = []),
        (this.frontRectVertices = []),
        (this.imageMaskRectVertices = []),
        (this.insidePointNum = 0),
        (this.isMouseOn = !1),
        (this.dragSpeed = 0),
        (this.dragAngle = 0),
        (this.returnSpeed = 0),
        (this.id = Gu.id++),
        void 0,
        this.initView(),
        this.initCoordinates(),
        this.initMenu(),
        this.initImage(),
        (this.frontPolygon = this.view
          .polygon()
          .attr("data-name", "frontPolygon")),
        this.initText(),
        this.resize();
    }
    initView() {
      Gu.foldView ||
        ((Gu.foldView = Fu.SVGPageLayer.group()),
        Gu.foldView.attr("data-name", "FoldView")),
        (this.view = Gu.foldView.group());
    }
    initMenu() {}
    initImage() {}
    initText() {}
    initCoordinates() {
      const t = this.parent.getBoundingClientRect();
      (this.imageWidth = t.width),
        (this.imageHeight = t.height),
        (this.offset = new Nu(
          t.left + window.pageXOffset,
          t.top + window.pageYOffset
        )),
        (this.rectVertices = [
          new Nu(this.offset.x, this.offset.y),
          new Nu(this.offset.x + this.imageWidth, this.offset.y),
          new Nu(
            this.offset.x + this.imageWidth,
            this.offset.y + this.imageHeight
          ),
          new Nu(this.offset.x, this.offset.y + this.imageHeight),
        ]),
        this.rectVertices.forEach((t, e) => {
          this.imageMaskRectVertices[e] = new Nu(t.x, t.y);
        });
    }
    resize() {
      void 0,
        this.clear(),
        this.initCoordinates(),
        this.stop(),
        this.update(),
        this.draw();
    }
    foldIn(t, e) {
      void 0, (this.isMouseOn = !0), this.view.back();
      const n = t + 1e-5,
        i = e + 1e-5;
      (this.mousePoint.x = n),
        (this.mousePoint.y = i),
        (this.returnSpeed = 0),
        this.isStop &&
          ((this.isStop = !1),
          (this.playEasingFlag = !1),
          (this.dragStartPoint.x = n),
          (this.dragStartPoint.y = i),
          (this.draggingPoint.x = n),
          (this.draggingPoint.y = i));
    }
    foldOut(t = 0) {
      if ((void 0, this.isMouseOn)) {
        this.isMouseOn = !1;
        const t = this.farthestVertexIndex;
        (this.dragStartPoint.x = this.rectVertices[t].x),
          (this.dragStartPoint.y = this.rectVertices[t].y),
          (this.draggingPoint.x = this.symmetryRectVertices[t].x),
          (this.draggingPoint.y = this.symmetryRectVertices[t].y);
        const e =
            (this.symmetryRectVertices[t].x - this.dragStartPoint.x) /
            this.pushMouseRate,
          n =
            (this.symmetryRectVertices[t].y - this.dragStartPoint.y) /
            this.pushMouseRate;
        (this.mousePoint.x = this.dragStartPoint.x + e),
          (this.mousePoint.y = this.dragStartPoint.y + n);
      }
    }
    mouseMove(t, e) {
      const n = Nu.distance(this.dragStartPoint, new Nu(t, e)),
        i = Math.max(
          Nu.distance(this.rectVertices[0], this.rectVertices[2]),
          Nu.distance(this.rectVertices[1], this.rectVertices[3])
        );
      if (((this.mouseMoveRate = n / i), this.isMouseOn)) {
        const n = 2.5,
          i = 20,
          r = t - this.mousePoint.x,
          s = e - this.mousePoint.y,
          o = Math.atan2(s, r);
        (this.dragAngle = (180 * o) / Math.PI),
          (this.dragSpeed = Math.sqrt(r * r + s * s) * n),
          (this.dragSpeed = Math.min(i, this.dragSpeed));
      }
      (this.mousePoint.x = t), (this.mousePoint.y = e);
    }
    stop() {
      void 0, (this.isStop = !0);
    }
    loop() {
      this.isStop || (this.update(), this.draw());
    }
    update() {
      if (!this.isMouseOn && !Ru.isMobile()) {
        this.returnSpeed += 1.5;
        const t = this.dragStartPoint.x - this.mousePoint.x,
          e = this.dragStartPoint.y - this.mousePoint.y,
          n = Math.sqrt(t * t + e * e) || 1;
        let i = (t / n) * this.returnSpeed,
          r = (e / n) * this.returnSpeed;
        const s = 0.98;
        (this.dragSpeed *= s), this.dragSpeed < 0.1 && (this.dragSpeed = 0);
        const o = Math.cos((this.dragAngle * Math.PI) / 180) * this.dragSpeed,
          a = Math.sin((this.dragAngle * Math.PI) / 180) * this.dragSpeed;
        if (
          ((this.mousePoint.x += o + i),
          (this.mousePoint.y += a + r),
          Nu.distance(this.mousePoint, this.dragStartPoint) <= this.returnSpeed)
        )
          if (this.insidePointNum <= 1)
            (this.draggingPoint.x = this.mousePoint.x = this.dragStartPoint.x),
              (this.draggingPoint.y = this.mousePoint.y =
                this.dragStartPoint.y),
              this.stop();
          else {
            this.isMouseOn = !1;
            const t = this.farthestVertexIndex;
            (this.dragStartPoint.x = this.rectVertices[t].x),
              (this.dragStartPoint.y = this.rectVertices[t].y),
              (this.draggingPoint.x = this.symmetryRectVertices[t].x),
              (this.draggingPoint.y = this.symmetryRectVertices[t].y),
              (this.mousePoint.x =
                this.dragStartPoint.x +
                (this.draggingPoint.x - this.dragStartPoint.x) / 2),
              (this.mousePoint.y =
                this.dragStartPoint.y +
                (this.draggingPoint.y - this.dragStartPoint.y) / 2),
              (this.mousePoint.x += o + i),
              (this.mousePoint.y += a + r),
              Nu.distance(this.mousePoint, this.dragStartPoint) <=
                this.returnSpeed &&
                ((this.draggingPoint.x = this.mousePoint.x =
                  this.dragStartPoint.x),
                (this.draggingPoint.y = this.mousePoint.y =
                  this.dragStartPoint.y),
                this.stop());
          }
      }
      if (this.playEasingFlag) {
        if (
          this.easingParam &&
          this.easingParam.currentFrame <= this.easingParam.totalFrame
        ) {
          const t = Math.max(0, this.easingParam.currentFrame);
          (this.draggingPoint.x = this.easingParam.easingFunctionX(
            t,
            this.easingParam.startX,
            this.easingParam.distanceX,
            this.easingParam.totalFrame
          )),
            (this.draggingPoint.y = this.easingParam.easingFunctionY(
              t,
              this.easingParam.startY,
              this.easingParam.distanceY,
              this.easingParam.totalFrame
            )),
            this.easingParam.currentFrame++,
            this.easingParam.currentFrame > this.easingParam.totalFrame &&
              this.easingParam &&
              this.easingParam.onFinished &&
              this.easingParam.onFinished();
        }
      } else {
        const t = 0.9;
        let e =
            (this.mousePoint.x - this.dragStartPoint.x) * this.pushMouseRate,
          n = (this.mousePoint.y - this.dragStartPoint.y) * this.pushMouseRate;
        this.mouseMoveRate < 0.01 && (e = n = 0);
        const i = this.dragStartPoint.x + e,
          r = this.dragStartPoint.y + n;
        (this.draggingPoint.x += (i - this.draggingPoint.x) * t),
          (this.draggingPoint.y += (r - this.draggingPoint.y) * t),
          Nu.distance(this.draggingPoint, this.mousePoint) <= 1 &&
            ((this.draggingPoint.x = this.mousePoint.x),
            (this.draggingPoint.y = this.mousePoint.y));
      }
      const t = new Nu(
        (this.draggingPoint.x + this.dragStartPoint.x) / 2,
        (this.draggingPoint.y + this.dragStartPoint.y) / 2
      );
      let e = this.draggingPoint.y - this.dragStartPoint.y;
      e = 0 != e ? e : 1e-5;
      let n = this.draggingPoint.x - this.dragStartPoint.x;
      n = 0 != n ? n : 1e-5;
      const i = e / n,
        r = -1 / i,
        s = t.y - r * t.x;
      this.symmetryRectVertices = [];
      const o = Nu.angleFromLineToPoint(this.draggingPoint, r, s);
      (this.frontRectVertices = []),
        (this.backRectVertices = []),
        (this.imageMaskRectVertices = []);
      let a = -1;
      this.insidePointNum = 0;
      for (let t = 0; t < this.rectVertices.length; t++) {
        const e = this.rectVertices[t],
          n = i,
          u = e.y - n * e.x,
          h = new Nu(
            (2 * (u - s)) / (r - n) - e.x,
            (2 * (n * s - r * u)) / (n - r) - e.y
          );
        this.symmetryRectVertices[t] = h;
        let l = Nu.angleFromLineToPoint(e, r, s),
          c = Math.abs(o - l);
        if (
          (c <= 5
            ? this.imageMaskRectVertices.push(e)
            : (this.backRectVertices.push(e), this.insidePointNum++),
          (l = Nu.angleFromLineToPoint(h, r, s)),
          (c = Math.abs(o - l)),
          c <= 5)
        ) {
          this.frontRectVertices.push(h);
          const n = Nu.distance(e, h);
          n > a && ((this.farthestVertexIndex = t), (a = n));
        }
        const f = (t + 1) % this.rectVertices.length,
          d = this.rectVertices[f],
          g = Nu.crossPointFromLineAndPoints(e, d, r, s);
        Nu.checkPointOnLine(g, e, d) &&
          (this.backRectVertices.push(g),
          this.frontRectVertices.push(g),
          this.imageMaskRectVertices.push(g));
      }
    }
    draw() {
      if (this.isStop) this.clear();
      else {
        if (Nu.distance(this.draggingPoint, this.dragStartPoint) < 0.1) return;
        this.drawImage(),
          this.drawMenu(),
          this.drawPolygon(
            this.frontPolygon,
            this.frontRectVertices,
            this.frontRectColor,
            1
          ),
          this.drawText();
      }
    }
    drawImage() {}
    drawText() {}
    drawMenu() {}
    clear() {
      var t;
      null === (t = this.frontPolygon) || void 0 === t || t.plot([]);
    }
    setName(t) {
      var e;
      null === (e = this.view) || void 0 === e || e.attr("data-name", t);
    }
    drawPolygon(t, e, n, i) {
      const r = Nu.sortPointsClockwise(e);
      let s = [];
      for (const t of r) s.push(t.x), s.push(t.y);
      t && t.plot(s).fill(n).opacity(i);
    }
  }
  Gu.id = 0;
  class Hu extends Gu {
    constructor(t) {
      super(t), (this.parent = t), (this.enableDebug = !0);
    }
    draw() {
      if ((super.draw(), Fu.DEBUG && this.enableDebug)) {
        const t = (t) => Math.round(t);
        if (
          (this.symmetryPolygon0 ||
            (this.symmetryPolygon0 = Fu.SVGDebugLayer.polygon()),
          this.symmetryPolygon1 ||
            (this.symmetryPolygon1 = Fu.SVGDebugLayer.polygon()),
          !this.debugDots)
        ) {
          this.debugDots = Array(12);
          for (let t = 0; t < this.debugDots.length; t++)
            this.debugDots[t] = Fu.SVGDebugLayer.circle();
        }
        if (!this.texts) {
          this.texts = Array(4);
          for (let t = 0; t < this.texts.length; t++)
            this.texts[t] = Fu.SVGDebugLayer.text("").font({
              size: 10,
              color: "#fff",
              weight: "bold",
            });
        }
        this.drawPolygon(
          this.backPolygon,
          this.backRectVertices,
          this.backRectColor,
          1
        );
        let e = 0,
          n = 0;
        if (
          (this.drawPolygon(
            this.symmetryPolygon1,
            this.backRectVertices,
            "#f00",
            0.3
          ),
          this.drawDot(this.debugDots[n], this.rectVertices[e], "#f00", 4),
          e++,
          n++,
          this.drawDot(this.debugDots[n], this.rectVertices[e], "#0f0", 4),
          e++,
          n++,
          this.drawDot(this.debugDots[n], this.rectVertices[e], "#00f", 4),
          e++,
          n++,
          this.drawDot(this.debugDots[n], this.rectVertices[e], "#ff0", 4),
          e++,
          n++,
          (e = 0),
          this.drawDot(
            this.debugDots[n],
            this.symmetryRectVertices[e],
            "#f00",
            4
          ),
          e++,
          n++,
          this.drawDot(
            this.debugDots[n],
            this.symmetryRectVertices[e],
            "#0f0",
            4
          ),
          e++,
          n++,
          this.drawDot(
            this.debugDots[n],
            this.symmetryRectVertices[e],
            "#00f",
            4
          ),
          e++,
          n++,
          this.drawDot(
            this.debugDots[n],
            this.symmetryRectVertices[e],
            "#ff0",
            4
          ),
          e++,
          n++,
          this.drawDot(this.debugDots[n++], this.mousePoint, "#c00", 10),
          this.drawDot(this.debugDots[n++], this.dragStartPoint, "#000", 10),
          this.drawDot(this.debugDots[n++], this.draggingPoint, "#000", 10),
          this.texts)
        ) {
          let e = 0;
          this.drawDebugText(
            this.texts[e++],
            "mousePoint(" +
              t(this.mousePoint.x) +
              ", " +
              t(this.mousePoint.y) +
              ")",
            "#c00",
            this.mousePoint,
            10
          ),
            this.drawDebugText(
              this.texts[e++],
              "dragStartPoint(" +
                t(this.dragStartPoint.x) +
                ", " +
                t(this.dragStartPoint.y) +
                ")",
              "#000",
              this.dragStartPoint,
              20
            ),
            this.drawDebugText(
              this.texts[e++],
              "draggingPoint(" +
                t(this.draggingPoint.x) +
                ", " +
                t(this.draggingPoint.y) +
                ")",
              "#000",
              this.draggingPoint,
              30
            );
        }
      }
    }
    drawDot(t, e, n, i = 4) {
      const r = 2 * i,
        s = e.x - r / 2,
        o = e.y - r / 2;
      t.size(r, r).move(s, o).fill(n);
    }
    drawDebugText(t, e, n, i, r) {
      t.text(e)
        .font({ color: n })
        .move(i.x + 15, i.y + r);
    }
  }
  class Bu extends Hu {
    constructor() {
      super(...arguments),
        (this.enableDebug = !1),
        (this.isForceFoldIn = !1),
        (this.isOpenAnimation = !1),
        (this.targetPoint = new Nu());
    }
    get playingAnimation() {
      return this.isForceFoldIn;
    }
    initView() {
      (this.view = Fu.SVGMenuLayer.group()),
        this.view.attr("data-name", "MenuCard");
    }
    initMenu() {
      void 0,
        (this.menuSvg = Lu(this.parent)),
        (this.mask = this.menuSvg.polygon()),
        this.menuSvg.clipWith(this.mask),
        (this.frontRectColor = Fu.AYOND_BLUE_DARK);
    }
    drawMenu() {
      this.drawPolygon(this.mask, this.backRectVertices, "#ccc", 1);
    }
    resize() {
      void 0, super.resize(), this.isOpenAnimation && this.drawMenu();
    }
    openMenu() {
      void 0, (this.isOpenAnimation = !0), this.forceFoldIn();
    }
    closeMenu() {
      void 0, (this.isOpenAnimation = !1), this.forceFoldOut();
    }
    forceFoldIn() {
      if ((void 0, !this.isForceFoldIn)) {
        (this.isStop = !1),
          (this.playEasingFlag = !0),
          (this.isForceFoldIn = !0),
          (this.isMouseOn = !0),
          (this.dragStartPoint.x = this.rectVertices[0].x),
          (this.dragStartPoint.y = this.rectVertices[0].y);
        const t = 2 * Nu.distance(this.rectVertices[0], this.rectVertices[2]);
        let e = 45,
          n = 0.3;
        Ru.isMobile() && ((e = 45), (n = 0.3));
        const i = Math.cos((e * Math.PI) / 180) * t,
          r = Math.sin((e * Math.PI) / 180) * t;
        (this.targetPoint.x = this.dragStartPoint.x + i),
          (this.targetPoint.y = this.dragStartPoint.y + r),
          (this.easingParam = new zu(
            Fu.FPS,
            0,
            n,
            this.dragStartPoint.x,
            this.dragStartPoint.y,
            this.targetPoint.x,
            this.targetPoint.y,
            ju.easeInCubic,
            ju.easeInSine,
            () => {
              this.menuSvg.unclip(), (this.isForceFoldIn = !1), this.stop();
            }
          ));
      }
    }
    forceFoldOut() {
      if ((void 0, !this.isForceFoldIn)) {
        (this.isStop = !1),
          (this.playEasingFlag = !0),
          (this.isForceFoldIn = !0),
          this.menuSvg.clipWith(this.mask);
        const t = 2 * Nu.distance(this.rectVertices[0], this.rectVertices[2]);
        let e = 45;
        Ru.isMobile() && (e = 45);
        const n = Math.cos((e * Math.PI) / 180) * t,
          i = Math.sin((e * Math.PI) / 180) * t;
        (this.targetPoint.x = this.dragStartPoint.x + n),
          (this.targetPoint.y = this.dragStartPoint.y + i),
          (this.dragStartPoint.x =
            this.rectVertices[this.farthestVertexIndex].x),
          (this.dragStartPoint.y =
            this.rectVertices[this.farthestVertexIndex].y),
          (this.easingParam = new zu(
            Fu.FPS,
            0,
            0.3,
            this.targetPoint.x,
            this.targetPoint.y,
            this.dragStartPoint.x + 0.1,
            this.dragStartPoint.y + 0.1,
            ju.easeOutQuint,
            ju.easeOutQuart,
            () => (this.isForceFoldIn = !1)
          ));
      }
    }
    draw() {
      super.draw(), this.isForceFoldIn || this.stop();
    }
    clear() {
      var t;
      super.clear(), null === (t = this.mask) || void 0 === t || t.plot([]);
    }
    isOpen() {
      return this.isOpenAnimation;
    }
  }
  class qu {
    constructor(t) {
      (this.isStop = !0),
        (this.callBack = t),
        (this.targetFrameLength = 1e3 / Fu.FPS),
        (window.requestAnimationFrame = (() =>
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          ((t) => window.setTimeout(t, this.targetFrameLength)))()),
        (this.now = window.performance && performance.now),
        (this.lastTime = this.getTime());
    }
    start() {
      (this.isStop = !1), this.loop();
    }
    stop() {
      this.isStop = !0;
    }
    loop() {
      this.isStop ||
        (requestAnimationFrame(this.loop.bind(this)),
        this.getTime() - this.lastTime >= this.targetFrameLength &&
          (null != this.callBack && this.callBack(),
          (this.lastTime = this.getTime())));
    }
    getTime() {
      return (this.now && this.now.call(performance)) || new Date().getTime();
    }
  }
  class Yu {
    constructor(t) {
      switch (((this.isInitialized = !1), (this.pageId = 0), t)) {
        case "works":
          this.pageId = 0;
          break;
        case "detail":
          this.pageId = 1;
          break;
        case "about":
          this.pageId = 2;
          break;
        case "contact":
          this.pageId = 3;
      }
      (this.openButton = document.querySelector("#menu")),
        fetch("/assets/svg/menu_pc.svg?" + Fu.CACHE_BREAK)
          .then((t) => t.text())
          .then((t) => {
            Fu.SVGMenuLayer.svg(t),
              (this.menuSvg = Lu(Fu.SVGMenuLayer.find("#menu")[0])),
              void 0,
              (this.bg = this.menuSvg.find("#bg")[0]),
              (this.upside = this.menuSvg.find("#upside")[0]),
              (this.logoHorizontal = this.menuSvg.find("#logo-horizontal")[0]),
              (this.closeButton = this.menuSvg.find("#closeButton")[0]),
              void 0,
              void 0,
              void 0,
              void 0;
            for (let t = 0; t < 4; t++) {
              t != this.pageId &&
                this.upside.find("#underline_0" + t)[0].hide();
              const e = "#link_0" + t;
              this.upside
                .find(e)[0]
                .on("click", (e) => {
                  location.href = Fu.LINK_URL[t];
                })
                .on("mouseenter", (e) => {
                  var n;
                  this.upside.find("#underline_0" + t)[0].show(),
                    null === (n = e.target) ||
                      void 0 === n ||
                      n.classList.add("blink-effect");
                })
                .on("mouseleave", (e) => {
                  var n;
                  t != this.pageId &&
                    this.upside.find("#underline_0" + t)[0].hide(),
                    null === (n = e.target) ||
                      void 0 === n ||
                      n.classList.remove("blink-effect");
                }).node.style.cursor = "pointer";
            }
            (this.closeButton
              .on("mousedown", this.close.bind(this))
              .on("mouseenter", (t) => {
                var e;
                null === (e = t.target) ||
                  void 0 === e ||
                  e.classList.add("blink-effect");
              })
              .on("mouseleave", (t) => {
                var e;
                null === (e = t.target) ||
                  void 0 === e ||
                  e.classList.remove("blink-effect");
              }).node.style.cursor = "pointer"),
              this.openButton.addEventListener(
                "mousedown",
                this.open.bind(this)
              ),
              (this.isInitialized = !0),
              (this.menuCard = new Bu(this.menuSvg.node)),
              new qu(this.loop.bind(this)).start(),
              Fu.SVGMenuLayer.show(),
              this.resize(),
              (Fu.SVG.node.style.pointerEvents = "none"),
              (Fu.SVGMenuLayer.node.style.pointerEvents = "none"),
              Fu.resizeSVG();
          });
    }
    open() {
      var t, e;
      void 0,
        (null === (t = this.menuCard) || void 0 === t
          ? void 0
          : t.playingAnimation) ||
          (Fu.resizeSVG(),
          (Fu.SVG.node.style.pointerEvents = "auto"),
          (Fu.SVGMenuLayer.node.style.pointerEvents = "auto"),
          this.resize(),
          null === (e = this.menuCard) || void 0 === e || e.openMenu());
    }
    close() {
      var t, e;
      void 0,
        (null === (t = this.menuCard) || void 0 === t
          ? void 0
          : t.playingAnimation) ||
          (Fu.resizeSVG(),
          (Fu.SVG.node.style.pointerEvents = "none"),
          (Fu.SVGMenuLayer.node.style.pointerEvents = "none"),
          window.scrollTo(0, 0),
          this.resize(),
          null === (e = this.menuCard) || void 0 === e || e.closeMenu());
    }
    loop() {
      this.menuCard && this.menuCard.loop();
    }
    resize() {
      var t, e;
      if (!this.isInitialized) return;
      let n = 120;
      Ru.isMobile() && (n = 30);
      const i = this.upside.width(),
        r = this.upside.height(),
        s = this.logoHorizontal.width(),
        o = this.logoHorizontal.height(),
        a = i,
        u = r + o,
        h = document.documentElement.clientWidth;
      let l,
        c,
        f,
        d = document.documentElement.clientHeight;
      Ru.isMobile() && (d = window.innerHeight),
        h / d > a / u
          ? ((c = d - 228), (f = c / u))
          : ((l = h - 2 * n), (f = l / a));
      const g = r * f,
        p = o * f,
        v = (h - a * f) / 2,
        y = 28 + g,
        m = 0.9 * (y + (d - y - p) / 2);
      null === (t = this.logoHorizontal) || void 0 === t || t.show(),
        this.upside.size(i * f, g).move(v, 28),
        Ru.isMobile() &&
          (null === (e = this.upside) ||
            void 0 === e ||
            e.move(v, d - (g + 28))),
        this.logoHorizontal.size(s * f, p).move(v, m),
        this.bg.size(h, d).move(0, 0),
        this.menuSvg.size(h, d).move(0, 0).viewbox(0, 0, h, d),
        this.menuCard && this.menuCard.resize();
    }
    isOpen() {
      return !!this.menuCard && this.menuCard.isOpen();
    }
  }
  class Xu extends Hu {
    constructor(t) {
      super(t), (this.parent = t), (this.imageUrl = ""), (this.isReverse = !1);
    }
    initImage() {
      Xu.imageView ||
        ((Xu.imageView = Fu.SVGPageLayer.group()),
        Xu.imageView.attr("data-name", "ImageView"),
        Xu.imageView.back(),
        Xu.foldView.front()),
        (this.imgElem = this.parent.querySelector("img")),
        (this.imgElem.style.visibility = "hidden");
      const t = this.imgElem.getAttribute("data-src");
      (this.imageUrl = null !== t ? t : this.imgElem.src),
        (this.imageMaskPolygon = Xu.imageView
          .polygon()
          .attr("data-name", "imageMaskPolygon")),
        this.drawPolygon(
          this.imageMaskPolygon,
          this.getVertices(),
          "#fff",
          0.5
        ),
        (this.image = Xu.imageView
          .image()
          .clipWith(this.imageMaskPolygon)
          .load(this.imageUrl)
          .size(this.imageWidth, this.imageHeight)
          .move(this.offset.x, this.offset.y));
    }
    show() {
      var t;
      null === (t = this.view) || void 0 === t || t.attr("data-show", "true"),
        (this.isReverse = !1);
    }
    hide() {
      var t;
      null === (t = this.view) || void 0 === t || t.attr("data-show", "false"),
        (this.isReverse = !0),
        this.clear();
    }
    clear() {
      var t;
      super.clear(),
        this.isReverse
          ? null === (t = this.imageMaskPolygon) || void 0 === t || t.plot([])
          : this.drawPolygon(
              this.imageMaskPolygon,
              this.rectVertices,
              "#fff",
              0.5
            );
    }
    drawImage() {
      this.drawPolygon(this.imageMaskPolygon, this.getVertices(), "#fff", 0.5);
    }
    getVertices() {
      let t = this.imageMaskRectVertices;
      return this.isReverse && (t = this.backRectVertices), t;
    }
    resize() {
      void 0,
        super.resize(),
        this.image &&
          this.image
            .size(this.imageWidth, this.imageHeight)
            .move(this.offset.x, this.offset.y);
    }
  }
  class Wu extends Xu {
    constructor(t) {
      super(t),
        (this.parent = t),
        (this.textForLines = []),
        (this.initializedText = !1),
        (this.titleText = ""),
        (this.dateText = ""),
        (this.baseWidth = 500),
        (this.baseTextMarginX = 40),
        (this.baseTextMarginY = 40),
        (this.textMarginX = this.baseTextMarginX),
        (this.textMarginY = this.baseTextMarginY),
        (this.enableHyphenation = !1),
        (this.lineHeight = 1.15),
        (this.baseTitleFontSize = 60),
        (this.baseDateFontSize = 30),
        (this.titleFontParam = {
          size: this.baseTitleFontSize,
          leading: this.lineHeight + "em",
          color: "#fff",
        }),
        (this.dateFontParam = {
          size: this.baseDateFontSize,
          leading: this.lineHeight + "em",
          color: "#fff",
        }),
        (this._id = -1);
    }
    setText(t, e) {
      (this.titleText = t),
        (this.dateText = e),
        Ru.isMobile() && this.updateText(),
        this.setName(this.titleText);
    }
    resize() {
      super.resize();
      let t = 20;
      -1 == this._id && (t = 0),
        clearTimeout(this._id),
        (this.delayIdx = window.setTimeout(() => this.updateText(), t));
    }
    updateText() {
      if (
        this.svgTextTitle &&
        this.svgTextDate &&
        this.titleText &&
        "" != this.titleText
      ) {
        this.initializedText ||
          ((this.titleTextMaskPolygon = this.view.polygon()),
          (this.dateTextMaskPolygon = this.view.polygon()),
          this.svgTextTitle
            .clipWith(this.titleTextMaskPolygon)
            .fill(this.titleFontParam.color),
          this.svgTextDate
            .clipWith(this.dateTextMaskPolygon)
            .fill(this.titleFontParam.color),
          (this.initializedText = !0));
        const t = this.imageWidth / this.baseWidth;
        (this.titleFontParam.size = this.baseTitleFontSize * t),
          (this.dateFontParam.size = this.baseDateFontSize * t),
          this.svgTextTitle.font(this.titleFontParam),
          this.testSvgText.font(this.titleFontParam),
          this.svgTextDate.font(this.dateFontParam),
          (this.textMarginX = this.baseTextMarginX * t),
          (this.textMarginY = this.baseTextMarginY * t);
        const e = this.imageWidth - 2 * this.textMarginX;
        this.imageHeight, this.textMarginY, (this.textForLines = []);
        let n = "";
        const i = this.titleText.split(" ");
        for (let t = 0; t < i.length; t++) {
          let r = i[t];
          const s = n + r,
            o = t == i.length - 1;
          if (this.checkTextOverflow(this.testSvgText, e, s)) {
            const t = this.checkFitTextIndex(this.testSvgText, e, s),
              i = s.slice(0, t),
              r = s.slice(t);
            let a = "-";
            this.enableHyphenation || (a = ""),
              this.textForLines.push(String(i + a)),
              (n = r + " "),
              o && this.textForLines.push(String(n));
          } else {
            let a = !1;
            if (!o) {
              const n = s + " " + i[t + 1];
              (a = this.checkTextOverflow(this.testSvgText, e, n)),
                (a = this.checkTextOverflow(this.testSvgText, e, n));
            }
            a
              ? ((n = n + r + " "), this.textForLines.push(String(n)), (n = ""))
              : ((n = n + r + " "), o && this.textForLines.push(String(n)));
          }
        }
        this.svgTextTitle.text((t) => {
          t.build(!0);
          for (const e of this.textForLines) t.tspan(e).newLine();
          t.build(!1);
        }),
          this.svgTextDate.text(this.dateText);
      }
    }
    checkTextOverflow(t, e, n) {
      return t.text(n), t.node.getBoundingClientRect().width > e;
    }
    checkFitTextIndex(t, e, n) {
      let i = -1;
      for (let r = 1; r < n.length; r++) {
        i = n.length - r;
        const s = n.slice(0, i);
        let o = "-";
        if (
          (this.enableHyphenation || (o = ""),
          t.text(s + o),
          t.node.getBoundingClientRect().width <= e)
        )
          break;
      }
      return i;
    }
    initText() {
      (this.svgTextTitle = this.view.text("")),
        (this.svgTextDate = this.view.text("")),
        (this.testSvgText = Fu.SVG.defs().text(""));
    }
    clear() {
      var t, e;
      super.clear(),
        null === (t = this.svgTextTitle) || void 0 === t || t.hide(),
        null === (e = this.svgTextDate) || void 0 === e || e.hide();
    }
    drawText() {
      var t, e;
      null === (t = this.svgTextTitle) || void 0 === t || t.show(),
        null === (e = this.svgTextDate) || void 0 === e || e.show();
      const n = this.symmetryRectVertices[0].x - this.symmetryRectVertices[1].x,
        i = this.symmetryRectVertices[0].y - this.symmetryRectVertices[1].y,
        r = (180 * Math.atan2(i, n)) / Math.PI,
        s = new Nu(
          this.symmetryRectVertices[1].x,
          this.symmetryRectVertices[1].y
        ),
        o = [];
      for (let t = 0; t < this.frontRectVertices.length; t++) {
        o[t] = new Nu(
          this.frontRectVertices[t].x + 0,
          this.frontRectVertices[t].y + 0
        );
        const e = o[t].x - s.x,
          n = o[t].y - s.y,
          i = Math.sqrt(e * e + n * n),
          a = (180 * Math.atan2(n, e)) / Math.PI - r;
        (o[t].x = Math.cos((a * Math.PI) / 180) * i),
          (o[t].y = Math.sin((a * Math.PI) / 180) * i);
      }
      this.drawPolygon(this.titleTextMaskPolygon, o, "#fff", 1),
        this.drawPolygon(this.dateTextMaskPolygon, o, "#fff", 1);
      const a = Nu.degree(
          this.symmetryRectVertices[1],
          this.symmetryRectVertices[0]
        ),
        u = new Eo();
      u.rotateO(a),
        u.translateO(
          this.symmetryRectVertices[1].x,
          this.symmetryRectVertices[1].y
        );
      const h = this.titleFontParam.size * (this.lineHeight - 1) * -1;
      this.svgTextTitle
        .move(this.textMarginX, this.textMarginY + h)
        .transform(u);
      const l = -1 * (this.dateFontParam.size + this.textMarginY);
      this.svgTextDate
        .move(this.textMarginX, this.imageHeight + l)
        .transform(u);
    }
  }
  class Uu extends Wu {
    constructor(t) {
      super(t),
        (this.parent = t),
        (this.isInit = !1),
        (this.lastWindowTopY = -1);
    }
    loop() {
      if (Ru.isMobile()) {
        if ("true" != this.parent.getAttribute(Fu.DATA_INTERSECTOIN)) return;
        const t = window.scrollY,
          e = t + window.innerHeight;
        if (this.lastWindowTopY == t) return;
        this.lastWindowTopY = t;
        const n = this.offset.x,
          i = this.offset.x + this.imageWidth,
          r = this.offset.y,
          s = this.offset.y + this.imageHeight;
        let o = 0.5 * this.imageHeight,
          a = 0.05 * this.imageHeight;
        (0 != this.id && 1 != this.id) ||
          ((o = 0 * -this.imageHeight), (a = 0.2 * -this.imageHeight));
        const u = new Nu(n, r + o),
          h = new Nu(i, s + a);
        let l = e - 0;
        const c = u.y,
          f = h.y;
        l > f && (l = f);
        const d = f - c == 0 ? 0 : (l - c) / (f - c),
          g = new Nu(u.x + (h.x - u.x) * d, l);
        this.fold(h, g);
      }
      super.loop();
    }
    fold(t, e) {
      void 0,
        (this.isStop = !1),
        (this.playEasingFlag = !1),
        (this.mouseMoveRate = 1),
        (this.dragStartPoint.x = t.x),
        (this.dragStartPoint.y = t.y);
      const n = 1.5 * (e.x - t.x),
        i = 1.5 * (e.y - t.y),
        r = t.x + n,
        s = t.y + i;
      (this.mousePoint.x = r + 1e-5),
        (this.mousePoint.y = s + 1e-5),
        this.isInit ||
          ((this.isInit = !0),
          (this.draggingPoint.x = e.x),
          (this.draggingPoint.y = e.y)),
        Nu.distance(t, e) <= 1 &&
          ((t.x = e.x), (t.y = e.y), (this.isStop = !0), this.draw());
    }
  }
  class Qu extends Uu {}
  class $u {
    constructor(t, e = null) {
      (this.images = t),
        void 0,
        Fu.currentTime(),
        (this.cards = Array()),
        (this.initializedCallBack = e),
        (this.observer = new IntersectionObserver(
          this.intersectionHandler.bind(this),
          { root: null, rootMargin: "500px 0px 500px 0px", threshold: 0 }
        )),
        this.images.forEach((t) => {
          this.observer.observe(t);
        });
    }
    intersectionHandler(t, e) {
      void 0,
        Fu.currentTime(),
        t.forEach((t) => {
          const e = t.target;
          if (t.isIntersecting) {
            if ("true" != e.getAttribute(Fu.DATA_CARD_INIT)) {
              void 0, Fu.currentTime();
              const t = this.createCard(e);
              this.initCard(e, t),
                this.cards.push(t),
                e.setAttribute(Fu.DATA_CARD_INIT, "true"),
                this.images.length == this.cards.length &&
                  this.initializedCallBack &&
                  this.initializedCallBack();
            }
            e.setAttribute(Fu.DATA_INTERSECTOIN, "true");
          } else e.setAttribute(Fu.DATA_INTERSECTOIN, "false");
        });
    }
    createCard(t) {
      return new Gu(t);
    }
    initCard(t, e) {}
    resize() {
      for (const t of this.cards) t && t.resize();
    }
    loop() {
      for (const t of this.cards) t && t.loop();
    }
  }
  class Zu extends $u {
    constructor(t) {
      super(t);
    }
    createCard(t) {
      const e = t.getAttribute("data-title"),
        n = t.getAttribute("data-date"),
        i = new Qu(t);
      return i.setText(e, n), i;
    }
    initCard(t, e) {
      t.addEventListener("mouseenter", this.mouseEnterHandler.bind(this)),
        t.addEventListener("mousemove", this.mouseMoveHandler.bind(this)),
        t.addEventListener("mouseleave", this.mouseLeaveHandler.bind(this));
    }
    mouseEnterHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      this.currentImageWrapper = e;
      for (let n = 0; n < this.cards.length; n++) {
        const i = this.cards[n];
        i &&
          i.parent == e &&
          (i.foldIn(t.pageX, t.pageY),
          this.cards.splice(n, 1)[0],
          this.cards.unshift(i));
      }
    }
    mouseMoveHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      for (const n of this.cards)
        n && n.parent == e && n.mouseMove(t.pageX, t.pageY);
    }
    mouseLeaveHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      this.currentImageWrapper = null;
      for (const t of this.cards)
        if (t && t.parent == e) {
          const e = 0;
          t.foldOut(e);
        }
    }
  }
  var Ku = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    Ju = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    th = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
      "matrix",
      "matrix3d",
    ],
    eh = { CSS: {}, springs: {} };
  function nh(t, e, n) {
    return Math.min(Math.max(t, e), n);
  }
  function ih(t, e) {
    return t.indexOf(e) > -1;
  }
  function rh(t, e) {
    return t.apply(null, e);
  }
  var sh = {
    arr: function (t) {
      return Array.isArray(t);
    },
    obj: function (t) {
      return ih(Object.prototype.toString.call(t), "Object");
    },
    pth: function (t) {
      return sh.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function (t) {
      return t instanceof SVGElement;
    },
    inp: function (t) {
      return t instanceof HTMLInputElement;
    },
    dom: function (t) {
      return t.nodeType || sh.svg(t);
    },
    str: function (t) {
      return "string" == typeof t;
    },
    fnc: function (t) {
      return "function" == typeof t;
    },
    und: function (t) {
      return void 0 === t;
    },
    nil: function (t) {
      return sh.und(t) || null === t;
    },
    hex: function (t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function (t) {
      return /^rgb/.test(t);
    },
    hsl: function (t) {
      return /^hsl/.test(t);
    },
    col: function (t) {
      return sh.hex(t) || sh.rgb(t) || sh.hsl(t);
    },
    key: function (t) {
      return (
        !Ku.hasOwnProperty(t) &&
        !Ju.hasOwnProperty(t) &&
        "targets" !== t &&
        "keyframes" !== t
      );
    },
  };
  function oh(t) {
    var e = /\(([^)]+)\)/.exec(t);
    return e
      ? e[1].split(",").map(function (t) {
          return parseFloat(t);
        })
      : [];
  }
  function ah(t, e) {
    var n = oh(t),
      i = nh(sh.und(n[0]) ? 1 : n[0], 0.1, 100),
      r = nh(sh.und(n[1]) ? 100 : n[1], 0.1, 100),
      s = nh(sh.und(n[2]) ? 10 : n[2], 0.1, 100),
      o = nh(sh.und(n[3]) ? 0 : n[3], 0.1, 100),
      a = Math.sqrt(r / i),
      u = s / (2 * Math.sqrt(r * i)),
      h = u < 1 ? a * Math.sqrt(1 - u * u) : 0,
      l = u < 1 ? (u * a - o) / h : -o + a;
    function c(t) {
      var n = e ? (e * t) / 1e3 : t;
      return (
        (n =
          u < 1
            ? Math.exp(-n * u * a) * (1 * Math.cos(h * n) + l * Math.sin(h * n))
            : (1 + l * n) * Math.exp(-n * a)),
        0 === t || 1 === t ? t : 1 - n
      );
    }
    return e
      ? c
      : function () {
          var e = eh.springs[t];
          if (e) return e;
          for (var n = 1 / 6, i = 0, r = 0; ; )
            if (1 === c((i += n))) {
              if (++r >= 16) break;
            } else r = 0;
          var s = i * n * 1e3;
          return (eh.springs[t] = s), s;
        };
  }
  function uh(t) {
    return (
      void 0 === t && (t = 10),
      function (e) {
        return Math.ceil(nh(e, 1e-6, 1) * t) * (1 / t);
      }
    );
  }
  var hh,
    lh,
    ch = (function () {
      var t = 0.1;
      function e(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function n(t, e) {
        return 3 * e - 6 * t;
      }
      function i(t) {
        return 3 * t;
      }
      function r(t, r, s) {
        return ((e(r, s) * t + n(r, s)) * t + i(r)) * t;
      }
      function s(t, r, s) {
        return 3 * e(r, s) * t * t + 2 * n(r, s) * t + i(r);
      }
      return function (e, n, i, o) {
        if (0 <= e && e <= 1 && 0 <= i && i <= 1) {
          var a = new Float32Array(11);
          if (e !== n || i !== o)
            for (var u = 0; u < 11; ++u) a[u] = r(u * t, e, i);
          return function (u) {
            return (e === n && i === o) || 0 === u || 1 === u
              ? u
              : r(
                  (function (n) {
                    for (var o = 0, u = 1; 10 !== u && a[u] <= n; ++u) o += t;
                    --u;
                    var h = o + ((n - a[u]) / (a[u + 1] - a[u])) * t,
                      l = s(h, e, i);
                    return l >= 0.001
                      ? (function (t, e, n, i) {
                          for (var o = 0; o < 4; ++o) {
                            var a = s(e, n, i);
                            if (0 === a) return e;
                            e -= (r(e, n, i) - t) / a;
                          }
                          return e;
                        })(n, h, e, i)
                      : 0 === l
                      ? h
                      : (function (t, e, n, i, s) {
                          var o,
                            a,
                            u = 0;
                          do {
                            (o = r((a = e + (n - e) / 2), i, s) - t) > 0
                              ? (n = a)
                              : (e = a);
                          } while (Math.abs(o) > 1e-7 && ++u < 10);
                          return a;
                        })(n, o, o + t, e, i);
                  })(u),
                  n,
                  o
                );
          };
        }
      };
    })(),
    fh =
      ((hh = {
        linear: function () {
          return function (t) {
            return t;
          };
        },
      }),
      (lh = {
        Sine: function () {
          return function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (t) {
            return 1 - Math.sqrt(1 - t * t);
          };
        },
        Back: function () {
          return function (t) {
            return t * t * (3 * t - 2);
          };
        },
        Bounce: function () {
          return function (t) {
            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - n) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            );
          };
        },
        Elastic: function (t, e) {
          void 0 === t && (t = 1), void 0 === e && (e = 0.5);
          var n = nh(t, 1, 10),
            i = nh(e, 0.1, 2);
          return function (t) {
            return 0 === t || 1 === t
              ? t
              : -n *
                  Math.pow(2, 10 * (t - 1)) *
                  Math.sin(
                    ((t - 1 - (i / (2 * Math.PI)) * Math.asin(1 / n)) *
                      (2 * Math.PI)) /
                      i
                  );
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
        lh[t] = function () {
          return function (t) {
            return Math.pow(t, e + 2);
          };
        };
      }),
      Object.keys(lh).forEach(function (t) {
        var e = lh[t];
        (hh["easeIn" + t] = e),
          (hh["easeOut" + t] = function (t, n) {
            return function (i) {
              return 1 - e(t, n)(1 - i);
            };
          }),
          (hh["easeInOut" + t] = function (t, n) {
            return function (i) {
              return i < 0.5 ? e(t, n)(2 * i) / 2 : 1 - e(t, n)(-2 * i + 2) / 2;
            };
          }),
          (hh["easeOutIn" + t] = function (t, n) {
            return function (i) {
              return i < 0.5
                ? (1 - e(t, n)(1 - 2 * i)) / 2
                : (e(t, n)(2 * i - 1) + 1) / 2;
            };
          });
      }),
      hh);
  function dh(t, e) {
    if (sh.fnc(t)) return t;
    var n = t.split("(")[0],
      i = fh[n],
      r = oh(t);
    switch (n) {
      case "spring":
        return ah(t, e);
      case "cubicBezier":
        return rh(ch, r);
      case "steps":
        return rh(uh, r);
      default:
        return rh(i, r);
    }
  }
  function gh(t) {
    try {
      return document.querySelectorAll(t);
    } catch (t) {
      return;
    }
  }
  function ph(t, e) {
    for (
      var n = t.length,
        i = arguments.length >= 2 ? arguments[1] : void 0,
        r = [],
        s = 0;
      s < n;
      s++
    )
      if (s in t) {
        var o = t[s];
        e.call(i, o, s, t) && r.push(o);
      }
    return r;
  }
  function vh(t) {
    return t.reduce(function (t, e) {
      return t.concat(sh.arr(e) ? vh(e) : e);
    }, []);
  }
  function yh(t) {
    return sh.arr(t)
      ? t
      : (sh.str(t) && (t = gh(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection
          ? [].slice.call(t)
          : [t]);
  }
  function mh(t, e) {
    return t.some(function (t) {
      return t === e;
    });
  }
  function wh(t) {
    var e = {};
    for (var n in t) e[n] = t[n];
    return e;
  }
  function xh(t, e) {
    var n = wh(t);
    for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
    return n;
  }
  function bh(t, e) {
    var n = wh(t);
    for (var i in e) n[i] = sh.und(t[i]) ? e[i] : t[i];
    return n;
  }
  function _h(t) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        t
      );
    if (e) return e[1];
  }
  function Sh(t, e) {
    return sh.fnc(t) ? t(e.target, e.id, e.total) : t;
  }
  function kh(t, e) {
    return t.getAttribute(e);
  }
  function Mh(t, e, n) {
    if (mh([n, "deg", "rad", "turn"], _h(e))) return e;
    var i = eh.CSS[e + n];
    if (!sh.und(i)) return i;
    var r = document.createElement(t.tagName),
      s =
        t.parentNode && t.parentNode !== document
          ? t.parentNode
          : document.body;
    s.appendChild(r),
      (r.style.position = "absolute"),
      (r.style.width = 100 + n);
    var o = 100 / r.offsetWidth;
    s.removeChild(r);
    var a = o * parseFloat(e);
    return (eh.CSS[e + n] = a), a;
  }
  function Ph(t, e, n) {
    if (e in t.style) {
      var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        r = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
      return n ? Mh(t, r, n) : r;
    }
  }
  function Oh(t, e) {
    return sh.dom(t) && !sh.inp(t) && (!sh.nil(kh(t, e)) || (sh.svg(t) && t[e]))
      ? "attribute"
      : sh.dom(t) && mh(th, e)
      ? "transform"
      : sh.dom(t) && "transform" !== e && Ph(t, e)
      ? "css"
      : null != t[e]
      ? "object"
      : void 0;
  }
  function Ih(t) {
    if (sh.dom(t)) {
      for (
        var e,
          n = t.style.transform || "",
          i = /(\w+)\(([^)]*)\)/g,
          r = new Map();
        (e = i.exec(n));

      )
        r.set(e[1], e[2]);
      return r;
    }
  }
  function Th(t, e, n, i) {
    switch (Oh(t, e)) {
      case "transform":
        return (function (t, e, n, i) {
          var r = ih(e, "scale")
              ? 1
              : 0 +
                (function (t) {
                  return ih(t, "translate") || "perspective" === t
                    ? "px"
                    : ih(t, "rotate") || ih(t, "skew")
                    ? "deg"
                    : void 0;
                })(e),
            s = Ih(t).get(e) || r;
          return (
            n && (n.transforms.list.set(e, s), (n.transforms.last = e)),
            i ? Mh(t, s, i) : s
          );
        })(t, e, i, n);
      case "css":
        return Ph(t, e, n);
      case "attribute":
        return kh(t, e);
      default:
        return t[e] || 0;
    }
  }
  function Ah(t, e) {
    var n = /^(\*=|\+=|-=)/.exec(t);
    if (!n) return t;
    var i = _h(t) || 0,
      r = parseFloat(e),
      s = parseFloat(t.replace(n[0], ""));
    switch (n[0][0]) {
      case "+":
        return r + s + i;
      case "-":
        return r - s + i;
      case "*":
        return r * s + i;
    }
  }
  function Eh(t, e) {
    if (sh.col(t))
      return (function (t) {
        return sh.rgb(t)
          ? (function (t) {
              var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);
              return e ? "rgba(" + e[1] + ",1)" : t;
            })(t)
          : sh.hex(t)
          ? (function (t) {
              var e = t.replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  function (t, e, n, i) {
                    return e + e + n + n + i + i;
                  }
                ),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return (
                "rgba(" +
                parseInt(n[1], 16) +
                "," +
                parseInt(n[2], 16) +
                "," +
                parseInt(n[3], 16) +
                ",1)"
              );
            })(t)
          : sh.hsl(t)
          ? (function (t) {
              var e,
                n,
                i,
                r =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                    t
                  ),
                s = parseInt(r[1], 10) / 360,
                o = parseInt(r[2], 10) / 100,
                a = parseInt(r[3], 10) / 100,
                u = r[4] || 1;
              function h(t, e, n) {
                return (
                  n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                  n < 1 / 6
                    ? t + 6 * (e - t) * n
                    : n < 0.5
                    ? e
                    : n < 2 / 3
                    ? t + (e - t) * (2 / 3 - n) * 6
                    : t
                );
              }
              if (0 == o) e = n = i = a;
              else {
                var l = a < 0.5 ? a * (1 + o) : a + o - a * o,
                  c = 2 * a - l;
                (e = h(c, l, s + 1 / 3)),
                  (n = h(c, l, s)),
                  (i = h(c, l, s - 1 / 3));
              }
              return (
                "rgba(" +
                255 * e +
                "," +
                255 * n +
                "," +
                255 * i +
                "," +
                u +
                ")"
              );
            })(t)
          : void 0;
      })(t);
    if (/\s/g.test(t)) return t;
    var n = _h(t),
      i = n ? t.substr(0, t.length - n.length) : t;
    return e ? i + e : i;
  }
  function Ch(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Dh(t) {
    for (var e, n = t.points, i = 0, r = 0; r < n.numberOfItems; r++) {
      var s = n.getItem(r);
      r > 0 && (i += Ch(e, s)), (e = s);
    }
    return i;
  }
  function Vh(t) {
    if (t.getTotalLength) return t.getTotalLength();
    switch (t.tagName.toLowerCase()) {
      case "circle":
        return (function (t) {
          return 2 * Math.PI * kh(t, "r");
        })(t);
      case "rect":
        return (function (t) {
          return 2 * kh(t, "width") + 2 * kh(t, "height");
        })(t);
      case "line":
        return (function (t) {
          return Ch(
            { x: kh(t, "x1"), y: kh(t, "y1") },
            { x: kh(t, "x2"), y: kh(t, "y2") }
          );
        })(t);
      case "polyline":
        return Dh(t);
      case "polygon":
        return (function (t) {
          var e = t.points;
          return Dh(t) + Ch(e.getItem(e.numberOfItems - 1), e.getItem(0));
        })(t);
    }
  }
  function Lh(t, e) {
    var n = e || {},
      i =
        n.el ||
        (function (t) {
          for (var e = t.parentNode; sh.svg(e) && sh.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        })(t),
      r = i.getBoundingClientRect(),
      s = kh(i, "viewBox"),
      o = r.width,
      a = r.height,
      u = n.viewBox || (s ? s.split(" ") : [0, 0, o, a]);
    return {
      el: i,
      viewBox: u,
      x: u[0] / 1,
      y: u[1] / 1,
      w: o,
      h: a,
      vW: u[2],
      vH: u[3],
    };
  }
  function Rh(t, e, n) {
    function i(n) {
      void 0 === n && (n = 0);
      var i = e + n >= 1 ? e + n : 0;
      return t.el.getPointAtLength(i);
    }
    var r = Lh(t.el, t.svg),
      s = i(),
      o = i(-1),
      a = i(1),
      u = n ? 1 : r.w / r.vW,
      h = n ? 1 : r.h / r.vH;
    switch (t.property) {
      case "x":
        return (s.x - r.x) * u;
      case "y":
        return (s.y - r.y) * h;
      case "angle":
        return (180 * Math.atan2(a.y - o.y, a.x - o.x)) / Math.PI;
    }
  }
  function Fh(t, e) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      i = Eh(sh.pth(t) ? t.totalLength : t, e) + "";
    return {
      original: i,
      numbers: i.match(n) ? i.match(n).map(Number) : [0],
      strings: sh.str(t) || e ? i.split(n) : [],
    };
  }
  function jh(t) {
    return ph(t ? vh(sh.arr(t) ? t.map(yh) : yh(t)) : [], function (t, e, n) {
      return n.indexOf(t) === e;
    });
  }
  function zh(t) {
    var e = jh(t);
    return e.map(function (t, n) {
      return { target: t, id: n, total: e.length, transforms: { list: Ih(t) } };
    });
  }
  function Nh(t, e) {
    var n = wh(e);
    if ((/^spring/.test(n.easing) && (n.duration = ah(n.easing)), sh.arr(t))) {
      var i = t.length;
      2 !== i || sh.obj(t[0])
        ? sh.fnc(e.duration) || (n.duration = e.duration / i)
        : (t = { value: t });
    }
    var r = sh.arr(t) ? t : [t];
    return r
      .map(function (t, n) {
        var i = sh.obj(t) && !sh.pth(t) ? t : { value: t };
        return (
          sh.und(i.delay) && (i.delay = n ? 0 : e.delay),
          sh.und(i.endDelay) &&
            (i.endDelay = n === r.length - 1 ? e.endDelay : 0),
          i
        );
      })
      .map(function (t) {
        return bh(t, n);
      });
  }
  var Gh = {
    css: function (t, e, n) {
      return (t.style[e] = n);
    },
    attribute: function (t, e, n) {
      return t.setAttribute(e, n);
    },
    object: function (t, e, n) {
      return (t[e] = n);
    },
    transform: function (t, e, n, i, r) {
      if ((i.list.set(e, n), e === i.last || r)) {
        var s = "";
        i.list.forEach(function (t, e) {
          s += e + "(" + t + ") ";
        }),
          (t.style.transform = s);
      }
    },
  };
  function Hh(t, e) {
    zh(t).forEach(function (t) {
      for (var n in e) {
        var i = Sh(e[n], t),
          r = t.target,
          s = _h(i),
          o = Th(r, n, s, t),
          a = Ah(Eh(i, s || _h(o)), o),
          u = Oh(r, n);
        Gh[u](r, n, a, t.transforms, !0);
      }
    });
  }
  function Bh(t, e) {
    return ph(
      vh(
        t.map(function (t) {
          return e.map(function (e) {
            return (function (t, e) {
              var n = Oh(t.target, e.name);
              if (n) {
                var i = (function (t, e) {
                    var n;
                    return t.tweens.map(function (i) {
                      var r = (function (t, e) {
                          var n = {};
                          for (var i in t) {
                            var r = Sh(t[i], e);
                            sh.arr(r) &&
                              1 ===
                                (r = r.map(function (t) {
                                  return Sh(t, e);
                                })).length &&
                              (r = r[0]),
                              (n[i] = r);
                          }
                          return (
                            (n.duration = parseFloat(n.duration)),
                            (n.delay = parseFloat(n.delay)),
                            n
                          );
                        })(i, e),
                        s = r.value,
                        o = sh.arr(s) ? s[1] : s,
                        a = _h(o),
                        u = Th(e.target, t.name, a, e),
                        h = n ? n.to.original : u,
                        l = sh.arr(s) ? s[0] : h,
                        c = _h(l) || _h(u),
                        f = a || c;
                      return (
                        sh.und(o) && (o = h),
                        (r.from = Fh(l, f)),
                        (r.to = Fh(Ah(o, l), f)),
                        (r.start = n ? n.end : 0),
                        (r.end = r.start + r.delay + r.duration + r.endDelay),
                        (r.easing = dh(r.easing, r.duration)),
                        (r.isPath = sh.pth(s)),
                        (r.isPathTargetInsideSVG =
                          r.isPath && sh.svg(e.target)),
                        (r.isColor = sh.col(r.from.original)),
                        r.isColor && (r.round = 1),
                        (n = r),
                        r
                      );
                    });
                  })(e, t),
                  r = i[i.length - 1];
                return {
                  type: n,
                  property: e.name,
                  animatable: t,
                  tweens: i,
                  duration: r.end,
                  delay: i[0].delay,
                  endDelay: r.endDelay,
                };
              }
            })(t, e);
          });
        })
      ),
      function (t) {
        return !sh.und(t);
      }
    );
  }
  function qh(t, e) {
    var n = t.length,
      i = function (t) {
        return t.timelineOffset ? t.timelineOffset : 0;
      },
      r = {};
    return (
      (r.duration = n
        ? Math.max.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.duration;
            })
          )
        : e.duration),
      (r.delay = n
        ? Math.min.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.delay;
            })
          )
        : e.delay),
      (r.endDelay = n
        ? r.duration -
          Math.max.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.duration - t.endDelay;
            })
          )
        : e.endDelay),
      r
    );
  }
  var Yh = 0,
    Xh = [],
    Wh = (function () {
      var t;
      function e(n) {
        for (var i = Xh.length, r = 0; r < i; ) {
          var s = Xh[r];
          s.paused ? (Xh.splice(r, 1), i--) : (s.tick(n), r++);
        }
        t = r > 0 ? requestAnimationFrame(e) : void 0;
      }
      return (
        "undefined" != typeof document &&
          document.addEventListener("visibilitychange", function () {
            Qh.suspendWhenDocumentHidden &&
              (Uh()
                ? (t = cancelAnimationFrame(t))
                : (Xh.forEach(function (t) {
                    return t._onDocumentVisibility();
                  }),
                  Wh()));
          }),
        function () {
          t ||
            (Uh() && Qh.suspendWhenDocumentHidden) ||
            !(Xh.length > 0) ||
            (t = requestAnimationFrame(e));
        }
      );
    })();
  function Uh() {
    return !!document && document.hidden;
  }
  function Qh(t) {
    void 0 === t && (t = {});
    var e,
      n = 0,
      i = 0,
      r = 0,
      s = 0,
      o = null;
    function a(t) {
      var e =
        window.Promise &&
        new Promise(function (t) {
          return (o = t);
        });
      return (t.finished = e), e;
    }
    var u = (function (t) {
      var e = xh(Ku, t),
        n = xh(Ju, t),
        i = (function (t, e) {
          var n = [],
            i = e.keyframes;
          for (var r in (i &&
            (e = bh(
              (function (t) {
                for (
                  var e = ph(
                      vh(
                        t.map(function (t) {
                          return Object.keys(t);
                        })
                      ),
                      function (t) {
                        return sh.key(t);
                      }
                    ).reduce(function (t, e) {
                      return t.indexOf(e) < 0 && t.push(e), t;
                    }, []),
                    n = {},
                    i = function (i) {
                      var r = e[i];
                      n[r] = t.map(function (t) {
                        var e = {};
                        for (var n in t)
                          sh.key(n)
                            ? n == r && (e.value = t[n])
                            : (e[n] = t[n]);
                        return e;
                      });
                    },
                    r = 0;
                  r < e.length;
                  r++
                )
                  i(r);
                return n;
              })(i),
              e
            )),
          e))
            sh.key(r) && n.push({ name: r, tweens: Nh(e[r], t) });
          return n;
        })(n, t),
        r = zh(t.targets),
        s = Bh(r, i),
        o = qh(s, n),
        a = Yh;
      return (
        Yh++,
        bh(e, {
          id: a,
          children: [],
          animatables: r,
          animations: s,
          duration: o.duration,
          delay: o.delay,
          endDelay: o.endDelay,
        })
      );
    })(t);
    function h() {
      var t = u.direction;
      "alternate" !== t &&
        (u.direction = "normal" !== t ? "normal" : "reverse"),
        (u.reversed = !u.reversed),
        e.forEach(function (t) {
          return (t.reversed = u.reversed);
        });
    }
    function l(t) {
      return u.reversed ? u.duration - t : t;
    }
    function c() {
      (n = 0), (i = l(u.currentTime) * (1 / Qh.speed));
    }
    function f(t, e) {
      e && e.seek(t - e.timelineOffset);
    }
    function d(t) {
      for (var e = 0, n = u.animations, i = n.length; e < i; ) {
        var r = n[e],
          s = r.animatable,
          o = r.tweens,
          a = o.length - 1,
          h = o[a];
        a &&
          (h =
            ph(o, function (e) {
              return t < e.end;
            })[0] || h);
        for (
          var l = nh(t - h.start - h.delay, 0, h.duration) / h.duration,
            c = isNaN(l) ? 1 : h.easing(l),
            f = h.to.strings,
            d = h.round,
            g = [],
            p = h.to.numbers.length,
            v = void 0,
            y = 0;
          y < p;
          y++
        ) {
          var m = void 0,
            w = h.to.numbers[y],
            x = h.from.numbers[y] || 0;
          (m = h.isPath
            ? Rh(h.value, c * w, h.isPathTargetInsideSVG)
            : x + c * (w - x)),
            d && ((h.isColor && y > 2) || (m = Math.round(m * d) / d)),
            g.push(m);
        }
        var b = f.length;
        if (b) {
          v = f[0];
          for (var _ = 0; _ < b; _++) {
            f[_];
            var S = f[_ + 1],
              k = g[_];
            isNaN(k) || (v += S ? k + S : k + " ");
          }
        } else v = g[0];
        Gh[r.type](s.target, r.property, v, s.transforms),
          (r.currentValue = v),
          e++;
      }
    }
    function g(t) {
      u[t] && !u.passThrough && u[t](u);
    }
    function p(t) {
      var c = u.duration,
        p = u.delay,
        v = c - u.endDelay,
        y = l(t);
      (u.progress = nh((y / c) * 100, 0, 100)),
        (u.reversePlayback = y < u.currentTime),
        e &&
          (function (t) {
            if (u.reversePlayback) for (var n = s; n--; ) f(t, e[n]);
            else for (var i = 0; i < s; i++) f(t, e[i]);
          })(y),
        !u.began && u.currentTime > 0 && ((u.began = !0), g("begin")),
        !u.loopBegan &&
          u.currentTime > 0 &&
          ((u.loopBegan = !0), g("loopBegin")),
        y <= p && 0 !== u.currentTime && d(0),
        ((y >= v && u.currentTime !== c) || !c) && d(c),
        y > p && y < v
          ? (u.changeBegan ||
              ((u.changeBegan = !0),
              (u.changeCompleted = !1),
              g("changeBegin")),
            g("change"),
            d(y))
          : u.changeBegan &&
            ((u.changeCompleted = !0),
            (u.changeBegan = !1),
            g("changeComplete")),
        (u.currentTime = nh(y, 0, c)),
        u.began && g("update"),
        t >= c &&
          ((i = 0),
          u.remaining && !0 !== u.remaining && u.remaining--,
          u.remaining
            ? ((n = r),
              g("loopComplete"),
              (u.loopBegan = !1),
              "alternate" === u.direction && h())
            : ((u.paused = !0),
              u.completed ||
                ((u.completed = !0),
                g("loopComplete"),
                g("complete"),
                !u.passThrough && "Promise" in window && (o(), a(u)))));
    }
    return (
      a(u),
      (u.reset = function () {
        var t = u.direction;
        (u.passThrough = !1),
          (u.currentTime = 0),
          (u.progress = 0),
          (u.paused = !0),
          (u.began = !1),
          (u.loopBegan = !1),
          (u.changeBegan = !1),
          (u.completed = !1),
          (u.changeCompleted = !1),
          (u.reversePlayback = !1),
          (u.reversed = "reverse" === t),
          (u.remaining = u.loop),
          (e = u.children);
        for (var n = (s = e.length); n--; ) u.children[n].reset();
        ((u.reversed && !0 !== u.loop) ||
          ("alternate" === t && 1 === u.loop)) &&
          u.remaining++,
          d(u.reversed ? u.duration : 0);
      }),
      (u._onDocumentVisibility = c),
      (u.set = function (t, e) {
        return Hh(t, e), u;
      }),
      (u.tick = function (t) {
        (r = t), n || (n = r), p((r + (i - n)) * Qh.speed);
      }),
      (u.seek = function (t) {
        p(l(t));
      }),
      (u.pause = function () {
        (u.paused = !0), c();
      }),
      (u.play = function () {
        u.paused &&
          (u.completed && u.reset(), (u.paused = !1), Xh.push(u), c(), Wh());
      }),
      (u.reverse = function () {
        h(), (u.completed = !u.reversed), c();
      }),
      (u.restart = function () {
        u.reset(), u.play();
      }),
      (u.remove = function (t) {
        Zh(jh(t), u);
      }),
      u.reset(),
      u.autoplay && u.play(),
      u
    );
  }
  function $h(t, e) {
    for (var n = e.length; n--; )
      mh(t, e[n].animatable.target) && e.splice(n, 1);
  }
  function Zh(t, e) {
    var n = e.animations,
      i = e.children;
    $h(t, n);
    for (var r = i.length; r--; ) {
      var s = i[r],
        o = s.animations;
      $h(t, o), o.length || s.children.length || i.splice(r, 1);
    }
    n.length || i.length || e.pause();
  }
  (Qh.version = "3.2.1"),
    (Qh.speed = 1),
    (Qh.suspendWhenDocumentHidden = !0),
    (Qh.running = Xh),
    (Qh.remove = function (t) {
      for (var e = jh(t), n = Xh.length; n--; ) Zh(e, Xh[n]);
    }),
    (Qh.get = Th),
    (Qh.set = Hh),
    (Qh.convertPx = Mh),
    (Qh.path = function (t, e) {
      var n = sh.str(t) ? gh(t)[0] : t,
        i = e || 100;
      return function (t) {
        return {
          property: t,
          el: n,
          svg: Lh(n),
          totalLength: Vh(n) * (i / 100),
        };
      };
    }),
    (Qh.setDashoffset = function (t) {
      var e = Vh(t);
      return t.setAttribute("stroke-dasharray", e), e;
    }),
    (Qh.stagger = function (t, e) {
      void 0 === e && (e = {});
      var n = e.direction || "normal",
        i = e.easing ? dh(e.easing) : null,
        r = e.grid,
        s = e.axis,
        o = e.from || 0,
        a = "first" === o,
        u = "center" === o,
        h = "last" === o,
        l = sh.arr(t),
        c = l ? parseFloat(t[0]) : parseFloat(t),
        f = l ? parseFloat(t[1]) : 0,
        d = _h(l ? t[1] : t) || 0,
        g = e.start || 0 + (l ? c : 0),
        p = [],
        v = 0;
      return function (t, e, y) {
        if (
          (a && (o = 0), u && (o = (y - 1) / 2), h && (o = y - 1), !p.length)
        ) {
          for (var m = 0; m < y; m++) {
            if (r) {
              var w = u ? (r[0] - 1) / 2 : o % r[0],
                x = u ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
                b = w - (m % r[0]),
                _ = x - Math.floor(m / r[0]),
                S = Math.sqrt(b * b + _ * _);
              "x" === s && (S = -b), "y" === s && (S = -_), p.push(S);
            } else p.push(Math.abs(o - m));
            v = Math.max.apply(Math, p);
          }
          i &&
            (p = p.map(function (t) {
              return i(t / v) * v;
            })),
            "reverse" === n &&
              (p = p.map(function (t) {
                return s ? (t < 0 ? -1 * t : -t) : Math.abs(v - t);
              }));
        }
        return g + (l ? (f - c) / v : c) * (Math.round(100 * p[e]) / 100) + d;
      };
    }),
    (Qh.timeline = function (t) {
      void 0 === t && (t = {});
      var e = Qh(t);
      return (
        (e.duration = 0),
        (e.add = function (n, i) {
          var r = Xh.indexOf(e),
            s = e.children;
          function o(t) {
            t.passThrough = !0;
          }
          r > -1 && Xh.splice(r, 1);
          for (var a = 0; a < s.length; a++) o(s[a]);
          var u = bh(n, xh(Ju, t));
          u.targets = u.targets || t.targets;
          var h = e.duration;
          (u.autoplay = !1),
            (u.direction = e.direction),
            (u.timelineOffset = sh.und(i) ? h : Ah(i, h)),
            o(e),
            e.seek(u.timelineOffset);
          var l = Qh(u);
          o(l), s.push(l);
          var c = qh(s, t);
          return (
            (e.delay = c.delay),
            (e.endDelay = c.endDelay),
            (e.duration = c.duration),
            e.seek(0),
            e.reset(),
            e.autoplay && e.play(),
            e
          );
        }),
        e
      );
    }),
    (Qh.easing = dh),
    (Qh.penner = fh),
    (Qh.random = function (t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t;
    });
  var Kh = Qh;
  class Jh {
    constructor(t) {
      (this.clickTargets = t),
        t.forEach((t, e) => {
          t.addEventListener("click", this.clickHandler);
        });
    }
    clickHandler(t) {
      void 0, t.preventDefault(), t.stopPropagation();
      const e = window.pageYOffset,
        n = window.innerHeight,
        i = Math.min(e, n),
        r =
          window.document.scrollingElement ||
          window.document.documentElement ||
          window.document.body;
      (r.scrollTop = i),
        Kh({ targets: r, scrollTop: 0, duration: 400, easing: "easeOutExpo" });
    }
  }
  class tl {
    constructor(t) {
      (this.images = t), (this.contents = t[0].parentNode), this.resize();
    }
    resize() {
      const t = document.querySelector("body").offsetWidth;
      let e = 50,
        n = 120;
      Ru.isMobile() &&
        ((e = 30), (n = null == document.getElementById("detail") ? 30 : 0));
      const i = (t - 2 * n - 0 * e) / 1,
        r = Math.ceil(this.images.length / 1),
        s = this.images.length;
      let o = 0;
      for (let n = 0; n < r; n++) {
        let r = 0,
          a = Number.MIN_VALUE;
        for (let u = 0; u < 1; u++) {
          const h = 1 * n + u;
          if (h >= s) continue;
          let l = !1;
          if (
            (this.images[h].classList.forEach((t) => {
              "cover" == t && (l = !0);
            }),
            l)
          )
            continue;
          let c = this.images[h].querySelector("img");
          const f = Number(c.getAttribute("width")),
            d = Number(c.getAttribute("height")) * (i / f);
          (a = Math.max(a, d)),
            (this.images[h].style.width = Math.round(i) + "px"),
            (this.images[h].style.height = Math.round(d) + "px"),
            (this.images[h].style.left = Math.round(r) + "px"),
            (this.images[h].style.top = Math.round(o) + "px"),
            Ru.isMobile() &&
              (this.images[h].style.left = Math.round((t - i) / 2) + "px"),
            (r += i + e);
        }
        o += a + e;
      }
      this.contents.style.height = Number(o - e) + "px";
    }
  }
  class el {
    static seed(t) {
      (this.x = 123456789),
        (this.y = 362436069),
        (this.z = 521288629),
        (this.w = t || 88675123);
    }
    static seedRandom() {
      const t = this.x ^ (this.x << 11);
      (this.x = this.y),
        (this.y = this.z),
        (this.z = this.w),
        (this.w = this.w ^ (this.w >>> 19) ^ t ^ (t >>> 8));
      const e = 1e9;
      return (Math.abs(this.w) % (e + 1)) / e;
    }
    static range(t, e, n = !1) {
      return n
        ? Math.round(this.seedRandom() * (e - t) + t)
        : this.seedRandom() * (e - t) + t;
    }
    static norm(t, e, n = !1) {
      return n
        ? Math.round(
            (this.range(t, e) +
              this.range(t, e) +
              this.range(t, e) +
              this.range(t, e) +
              this.range(t, e)) /
              5
          )
        : (this.range(t, e) +
            this.range(t, e) +
            this.range(t, e) +
            this.range(t, e) +
            this.range(t, e)) /
            5;
    }
    static choice(t) {
      return t[this.range(0, t.length - 1, !0)];
    }
    static chance(t, e) {
      const n = this.sum(e),
        i = this.range(0, n);
      let r = 0;
      for (let n = 0; n < t.length; n++)
        if (((r = 0 !== n ? r + e[n - 1] : 0), r < i && i < r + e[n]))
          return t[n];
    }
    static sum(t) {
      let e = 0;
      for (var n = 0; n < t.length; n++) e += t[n];
      return e;
    }
    static trueOrFalse(t = 0.5) {
      return this.seedRandom() < t;
    }
    static zeroOrOne(t = 0.5) {
      return this.seedRandom() < t ? 0 : 1;
    }
    static minusOrPlus(t = 0.5) {
      return this.seedRandom() < t ? -1 : 1;
    }
  }
  class nl extends tl {
    constructor(t) {
      super(t);
    }
    resize() {
      if (Ru.isMobile()) super.resize();
      else {
        const t = [720, 800, 480, 560, 340, 400, 640];
        el.seed(1);
        let e = 30,
          n = 80,
          i = 4;
        const r = document.body.clientWidth,
          s = window.innerWidth;
        s >= 2560
          ? (i = 5)
          : s >= 1920
          ? (i = 4)
          : s >= 1024
          ? (i = 3)
          : s < 1024 && (i = 2);
        const o = [],
          a = 120,
          u = r - 2 * a,
          h = Math.ceil(this.images.length / i),
          l = this.images.length;
        let c = 0,
          f = 0;
        for (let r = 0; r < h; r++) {
          (c = a), (o[r] = new Array());
          let s = 0;
          const h = [i];
          for (let t = 0; t < i; t++)
            (h[t] = el.range(e, n)), t < i - 1 && (s += h[t]);
          let d = 0;
          const g = u - s,
            p = i * r;
          for (let e = 0; e < i; e++) d += t[(p + e) % t.length];
          const v = g / d;
          for (let e = 0; e < i; e++) {
            const n = i * r + e;
            if (n >= l) continue;
            let s = this.images[n].querySelector("img");
            const a = Number(s.getAttribute("width")),
              u = Number(s.getAttribute("height")),
              d = t[n % t.length] * v,
              g = u * (d / a);
            let p = 0;
            if (r > 0) {
              const t = c,
                n = c + d,
                i = o[r - 1];
              for (let r = 0; r < i.length; r++) {
                const s = i[r],
                  o = s.x;
                if (t < s.x + s.width + h[e] && n > o) {
                  const t = s.y + s.height + h[e];
                  t > p && (p = t);
                }
              }
            }
            const y = {
              width: Math.round(d),
              height: Math.round(g),
              x: Math.round(c),
              y: Math.round(p),
            };
            (o[r][e] = y),
              (this.images[n].style.width = y.width + "px"),
              (this.images[n].style.height = y.height + "px"),
              (this.images[n].style.left = y.x + "px"),
              (this.images[n].style.top = y.y + "px"),
              (c += d + h[e]),
              p + g > f && (f = p + g);
          }
        }
        this.contents.style.height = Number(f) + "px";
      }
      Fu.currentTime();
    }
  }
  class il {
    constructor() {
      void 0,
        void 0,
        void 0,
        Fu.currentTime(),
        (this.scrollTop = new Jh(
          Array.from(document.querySelectorAll("#back-to-top"))
        ));
      const t = Array.from(document.querySelectorAll("#works main .image"));
      t.length > 0 &&
        ((this.order = new nl(t)), (this.cardManager = new Zu(t))),
        new qu(this.loop.bind(this)).start(),
        this.resize(),
        setTimeout(() => {
          this.menu = new Yu("works");
        }, Fu.FPS);
    }
    loop() {
      this.cardManager && this.cardManager.loop();
    }
    resize() {
      var t;
      (Ru.shoudResize() ||
        (null === (t = this.menu) || void 0 === t ? void 0 : t.isOpen())) &&
        (Fu.resizeSVG(),
        this.menu && this.menu.resize(),
        this.order && this.order.resize(),
        this.cardManager && this.cardManager.resize());
    }
  }
  class rl extends Uu {
    constructor() {
      super(...arguments), (this.targetPoint = new Nu());
    }
    initView() {
      var t;
      super.initView(),
        null === (t = this.view) ||
          void 0 === t ||
          t.node.classList.add(Fu.LIST_CARD_CLASS);
    }
    initImage() {
      var t;
      super.initImage(),
        null === (t = this.image) ||
          void 0 === t ||
          t.node.classList.add(Fu.LIST_CARD_CLASS);
    }
    foldIn(t, e) {
      void 0, (this.isMouseOn = !0), this.view.back(), this.stop();
      const n = t + 1e-5,
        i = e + 1e-5;
      rl.grabRectVertexIdx = this.getNearRectVertexIdx(n, i);
      const r = this.rectVertices[rl.grabRectVertexIdx];
      (this.mousePoint.x = r.x),
        (this.mousePoint.y = r.y),
        (this.returnSpeed = 0),
        this.isStop &&
          ((this.isStop = !1),
          (this.playEasingFlag = !1),
          (this.dragStartPoint.x = r.x),
          (this.dragStartPoint.y = r.y),
          (this.draggingPoint.x = r.x),
          (this.draggingPoint.y = r.y));
    }
    mouseMove(t, e) {
      void 0, this.isMouseOn || this.foldIn(t, t);
      let n = new Nu(t, e),
        i = Nu.distance(this.dragStartPoint, n);
      i += 0.9 * Math.min(0, 8 - i);
      const r = this.roundDegree(n.x, n.y);
      var s = Math.cos((r * Math.PI) / 180) * i,
        o = Math.sin((r * Math.PI) / 180) * i;
      n = new Nu(this.dragStartPoint.x + s, this.dragStartPoint.y + o);
      const a = Math.max(
        Nu.distance(this.rectVertices[0], this.rectVertices[2]),
        Nu.distance(this.rectVertices[1], this.rectVertices[3])
      );
      if (((this.mouseMoveRate = i / a), this.isMouseOn)) {
        const t = 1,
          e = 1,
          i = n.x - this.mousePoint.x,
          r = n.y - this.mousePoint.y,
          s = Math.atan2(r, i);
        (this.dragAngle = (180 * s) / Math.PI),
          (this.dragSpeed = Math.sqrt(i * i + r * r) * t),
          (this.dragSpeed = Math.min(e, this.dragSpeed));
      }
      (this.mousePoint.x = n.x), (this.mousePoint.y = n.y);
    }
    roundDegree(t, e) {
      const n =
          this.rectVertices[
            this.getNearRectVertexDiagonalIdx(
              this.dragStartPoint.x,
              this.dragStartPoint.y
            )
          ],
        i = Nu.degree(this.dragStartPoint, n);
      return i + 0.5 * (Nu.degree(this.dragStartPoint, new Nu(t, e)) - i);
    }
    getNearRectVertexIdx(t, e) {
      const n = new Nu(t, e);
      let i = 1 / 0,
        r = -1;
      return (
        this.rectVertices.forEach((t, e) => {
          const s = Nu.distance(n, t);
          i > s && ((r = e), (i = s));
        }),
        r
      );
    }
    getNearRectVertexDiagonalIdx(t, e) {
      let n = -1;
      switch (this.getNearRectVertexIdx(t, e)) {
        case 0:
          n = 2;
          break;
        case 1:
          n = 3;
          break;
        case 2:
          n = 0;
          break;
        case 3:
          n = 1;
      }
      return n;
    }
    static getGrabRectVertexIdx() {
      return rl.grabRectVertexIdx;
    }
  }
  rl.grabRectVertexIdx = -1;
  class sl extends Zu {
    createCard(t) {
      const e = t.getAttribute("data-title"),
        n = t.getAttribute("data-date"),
        i = new rl(t);
      return i.setText(e, n), i;
    }
    initCard(t, e) {
      t.addEventListener("mouseenter", this.mouseEnterHandler.bind(this)),
        t.addEventListener("mousemove", this.mouseMoveHandler.bind(this)),
        t.addEventListener("mouseleave", this.mouseLeaveHandler.bind(this));
    }
    mouseEnterHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      this.currentImageWrapper = e;
      for (let n = 0; n < this.cards.length; n++) {
        const i = this.cards[n];
        i &&
          i.parent == e &&
          (i.foldIn(t.pageX, t.pageY),
          this.cards.splice(n, 1)[0],
          this.cards.unshift(i));
      }
    }
    mouseMoveHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      for (const n of this.cards)
        n && n.parent == e && n.mouseMove(t.pageX, t.pageY);
    }
    mouseLeaveHandler(t) {
      if (Ru.isMobile()) return;
      const e = t.currentTarget;
      this.currentImageWrapper = null;
      for (const t of this.cards)
        if (t && t.parent == e) {
          const e = 0;
          t.foldOut(e);
        }
    }
  }
  class ol extends Uu {
    constructor() {
      super(...arguments),
        (this.isForceFoldOut = !1),
        (this.targetPoint = new Nu()),
        (this.coverWidth = 0),
        (this.coverHeight = 0);
    }
    initView() {
      var t;
      super.initView(),
        null === (t = this.view) ||
          void 0 === t ||
          t.node.classList.add("detail-card");
    }
    initImage() {
      if ((void 0, Ru.isMobile())) return void super.initImage();
      Xu.imageView ||
        ((Xu.imageView = Fu.SVGPageLayer.group()),
        Xu.imageView.attr("data-name", "ImageView"),
        Xu.imageView.back(),
        Xu.foldView.front()),
        (this.imageMaskPolygon = Xu.imageView
          .polygon()
          .attr("data-name", "imageMaskPolygon")),
        this.drawPolygon(
          this.imageMaskPolygon,
          this.getVertices(),
          "#fff",
          0.5
        ),
        (this.imgElem = this.parent.querySelector("img")),
        (this.imgElem.style.visibility = "hidden");
      const t = this.imgElem.getAttribute("data-src");
      (this.imageUrl = null !== t ? t : this.imgElem.src),
        (this.image = Xu.imageView
          .image()
          .clipWith(this.imageMaskPolygon)
          .load(this.imageUrl)
          .size(this.imageWidth, this.imageHeight)
          .move(this.offset.x, this.offset.y)),
        this.image.node.classList.add(Fu.SLIDE_CARD_CLASS);
    }
    forceFoldOut(t = !0) {
      if ((void 0, !this.isForceFoldOut)) {
        (this.isStop = !1),
          (this.playEasingFlag = !0),
          (this.isForceFoldOut = !0),
          (this.isMouseOn = !0);
        let e = rl.getGrabRectVertexIdx(),
          n = -1;
        if (-1 != e) {
          if (!t)
            switch (e) {
              case 0:
                e = 1;
                break;
              case 1:
                e = 0;
                break;
              case 2:
                e = 3;
                break;
              case 3:
                e = 2;
            }
          switch (e) {
            case 0:
              n = 2;
              break;
            case 1:
              n = 3;
              break;
            case 2:
              n = 0;
              break;
            case 3:
              n = 1;
          }
        } else t ? ((e = 3), (n = 1)) : ((e = 2), (n = 0));
        (this.dragStartPoint.x = this.rectVertices[e].x),
          (this.dragStartPoint.y = this.rectVertices[e].y);
        const i = Math.atan2(
            this.rectVertices[n].y - this.rectVertices[e].y,
            this.rectVertices[n].x - this.rectVertices[e].x
          ),
          r = Nu.distance(this.rectVertices[3], this.rectVertices[1]),
          s = 80;
        let o = Math.sin(Math.abs(i));
        o = 0 != o ? o : 1e-5;
        const a = 2 * r + s / o + 10,
          u = Math.cos(i) * a,
          h = Math.sin(i) * a;
        (this.targetPoint.x = this.dragStartPoint.x + u),
          (this.targetPoint.y = this.dragStartPoint.y + h),
          (this.easingParam = new zu(
            Fu.FPS,
            0,
            0.2,
            this.dragStartPoint.x,
            this.dragStartPoint.y,
            this.targetPoint.x,
            this.targetPoint.y,
            ju.easeInCubic,
            ju.easeInCirc,
            () => {
              (this.isForceFoldOut = !1), this.stop(), this.show();
            }
          ));
      }
    }
    hide() {
      super.hide(), (this.isForceFoldOut = !1), this.stop();
    }
    resize() {
      (this.isForceFoldOut = !1), super.resize();
    }
  }
  class al extends $u {
    constructor(t, e = null) {
      super(t), (this.initializedCallBack = e);
    }
    createCard(t) {
      return t.getAttribute("data-title"), new ol(t);
    }
    foldOut(t, e, n) {
      void 0;
      const i = this.cards[t];
      i && i.forceFoldOut(e);
    }
    show(t) {
      const e = this.cards[t];
      e && e.show();
    }
    hide(t) {
      const e = this.cards[t];
      e && e.hide();
    }
    showAll() {
      this.cards.forEach((t) => t.show());
    }
    hideAll() {
      this.cards.forEach((t) => t.hide());
    }
    resize() {
      Ru.isMobile() ? this.showAll() : this.hideAll(), super.resize();
    }
  }
  class ul extends EventTarget {
    constructor(t) {
      var e;
      super(), (this.dots = []);
      const n = document.querySelector("#indicator .dot");
      for (let i = 0; i < t - 1; i++)
        null === (e = n.parentElement) ||
          void 0 === e ||
          e.appendChild(n.cloneNode());
      (this.dots = Array.from(document.querySelectorAll("#indicator .dot"))),
        this.dots.forEach((t, e) => {
          t.addEventListener("click", this.clickHandler.bind(this));
        }),
        t <= 1 &&
          this.dots.forEach((t, e) => {
            t.style.visibility = "hidden";
          });
    }
    show(t) {
      this.dots.forEach((t, e) => {
        t.classList.remove("filled");
      });
      const e = this.dots[t];
      e && e.classList.add("filled");
    }
    clickHandler(t) {
      this.dots.forEach((e, n) => {
        e == t.target &&
          this.dispatchEvent(new CustomEvent("change", { detail: n }));
      });
    }
  }
  class hl extends EventTarget {
    constructor(t) {
      super(),
        (this.lastIdx = -1),
        (this.currentIdx = 0),
        (this.prevIdx = 0),
        (this.nextIdx = 0),
        (this.isInitialize = !1),
        (this.isNext = !0),
        (this.delayId = -1),
        (this.images = t),
        (this.maxIdx = this.images.length),
        (this.nextButton = document.querySelector(".change-image.right")),
        (this.prevButton = document.querySelector(".change-image.left")),
        this.nextButton.classList.add("anime"),
        this.images.length <= 1 &&
          ((this.nextButton.style.display = "none"),
          (this.prevButton.style.display = "none")),
        (this.indicator = new ul(this.images.length));
    }
    loadCompleteHandler(t) {
      void 0,
        (this.isInitialize = !0),
        this.nextButton.addEventListener("click", this.next.bind(this)),
        this.prevButton.addEventListener("click", this.prev.bind(this)),
        this.nextButton.addEventListener(
          "mouseenter",
          this.mouseEnterHandler.bind(this)
        ),
        this.nextButton.addEventListener(
          "mouseleave",
          this.mouseLeaveHandler.bind(this)
        ),
        this.prevButton.addEventListener(
          "mouseenter",
          this.mouseEnterHandler.bind(this)
        ),
        this.prevButton.addEventListener(
          "mouseleave",
          this.mouseLeaveHandler.bind(this)
        ),
        this.indicator.addEventListener("change", (t) => {
          const e = t.detail;
          this.open(e);
        }),
        this.setIdx(0);
    }
    setIdx(t) {
      void 0;
      const e = t;
      (this.isNext = !0),
        (this.prevIdx = e - 1 < 0 ? this.maxIdx : e - 1),
        (this.nextIdx = (e + 1) % this.maxIdx),
        (this.currentIdx = e);
    }
    mouseEnterHandler(t) {
      var e;
      t.target &&
        (null === (e = t.target) ||
          void 0 === e ||
          e.classList.add("mouseover"));
    }
    mouseLeaveHandler(t) {
      var e;
      t.target &&
        (null === (e = t.target) ||
          void 0 === e ||
          e.classList.remove("mouseover"));
    }
    next(t) {
      void 0,
        void 0,
        t.preventDefault(),
        (this.isNext = !0),
        (this.prevIdx = this.currentIdx),
        (this.nextIdx = (this.currentIdx + 2) % this.maxIdx),
        (this.currentIdx = (this.currentIdx + 1) % this.maxIdx),
        this.resize(),
        this.update(),
        t.target && this.nextButton.classList.remove("anime");
    }
    prev(t) {
      void 0,
        void 0,
        t.preventDefault(),
        (this.isNext = !1),
        (this.nextIdx = this.currentIdx),
        (this.prevIdx =
          this.currentIdx - 2 < 0 ? this.maxIdx - 2 : this.currentIdx - 2),
        (this.currentIdx =
          this.currentIdx - 1 < 0 ? this.maxIdx - 1 : this.currentIdx - 1),
        this.resize(),
        this.update(),
        this.nextButton.classList.remove("anime");
    }
    update() {
      void 0,
        window.clearTimeout(this.delayId),
        this.isInitialize &&
          !Ru.isMobile() &&
          (this.indicator.show(this.currentIdx),
          void 0,
          this.dispatchEvent(
            new CustomEvent("UPDATE_SLIDE", {
              detail: {
                current: this.currentIdx,
                next: this.nextIdx,
                prev: this.prevIdx,
                isNext: this.isNext,
              },
            })
          ),
          (this.lastIdx = this.currentIdx));
    }
    open(t = -1) {
      void 0, -1 == t && (t = this.currentIdx), this.setIdx(t), this.update();
    }
    resize() {
      if ((void 0, Ru.isMobile())) return;
      let t = 20;
      -1 == this.delayId && (t = 0),
        window.clearTimeout(this.delayId),
        (this.delayId = window.setTimeout(() => this.update(), t));
      const e = document.querySelector("body").offsetWidth,
        n = window.innerHeight,
        i = e - 172,
        r = n - 160;
      for (const t of this.images) {
        const s = t.querySelector("img"),
          o = Number(s.getAttribute("width")),
          a = Number(s.getAttribute("height"));
        let u, h, l;
        i / r > o / a
          ? ((h = r), (u = o * (r / a)), (l = 80))
          : ((u = i), (h = a * (i / o)), (l = (n - h) / 2)),
          (t.style.left = Math.round((e - u) / 2) + "px"),
          (t.style.top = Math.round(l) + "px"),
          (t.style.width = Math.round(u) + "px"),
          (t.style.height = Math.round(h) + "px");
      }
    }
  }
  class ll extends EventTarget {
    constructor(t, e = !1) {
      super(), (this.images = t), (this.insertSrc = e), (this.images = t);
    }
    start() {
      let t = 0;
      this.images.forEach((e, n) => {
        const i = e.getAttribute("data-src");
        if (i) {
          const n = new Image();
          n.addEventListener("load", (n) => {
            this.insertSrc && e.setAttribute("src", i),
              t++,
              t >= this.images.length &&
                this.dispatchEvent(new CustomEvent("LOAD_COMPLETE"));
          }),
            (n.src = i);
        } else t++;
      });
    }
  }
  class cl {
    constructor() {
      var t;
      (this.grabRectVertexIdx = -1),
        (this.lastScrollY = 0),
        void 0,
        void 0,
        void 0,
        (this.scrollTop = new Jh(
          Array.from(document.querySelectorAll("#back-to-top"))
        )),
        (this.listImages = Array.from(
          document.querySelectorAll("#detail #list .image")
        )),
        (this.slideImages = Array.from(
          document.querySelectorAll("#detail #slideshow .image")
        ));
      const e = Array.from(
        document.querySelectorAll("#detail #list .image img")
      );
      (this.slide = new hl(this.slideImages)),
        this.slide.addEventListener(
          "UPDATE_SLIDE",
          this.updateSlideHandler.bind(this)
        );
      const n = new ll(e, !0);
      n.addEventListener("LOAD_COMPLETE", this.loadCompleteHandler.bind(this)),
        n.addEventListener(
          "LOAD_COMPLETE",
          this.slide.loadCompleteHandler.bind(this.slide)
        ),
        n.start(),
        this.listImages.length > 0 &&
          ((this.orderImages = new tl(this.listImages)),
          (this.listCardManager = new sl(this.listImages)),
          this.listImages.forEach((t, e, n) => {
            t.addEventListener(
              "mousedown",
              this.openButtonMouseDownHandler.bind(this)
            );
          }),
          null === (t = document.querySelector("#slideshow .close")) ||
            void 0 === t ||
            t.addEventListener(
              "mousedown",
              this.closeButtonMouseDownHandler.bind(this)
            )),
        new qu(this.loop.bind(this)).start(),
        setTimeout(() => {
          this.menu = new Yu("detail");
        }, Fu.FPS),
        this.resize();
    }
    loadCompleteHandler(t) {
      void 0,
        this.listImages.length > 0 &&
          (this.slideCardManager = new al(
            this.slideImages,
            this.intersectionHandler.bind(this)
          ));
    }
    intersectionHandler(t) {
      var e;
      void 0, null === (e = this.slide) || void 0 === e || e.open();
    }
    updateSlideHandler(t) {
      void 0;
      const e = t.detail;
      this.slideCardManager &&
        (this.slideCardManager.hideAll(),
        this.slideCardManager.foldOut(
          e.current,
          e.isNext,
          this.grabRectVertexIdx
        ));
    }
    openButtonMouseDownHandler(t) {
      var e;
      if ((void 0, Ru.isMobile())) return;
      const n = document.querySelector("html");
      null == n || n.classList.add(Fu.SLIDESHOW_MODE),
        null == n || n.classList.remove(Fu.LIST_MODE),
        (this.lastScrollY = window.scrollY),
        Array.from(document.querySelectorAll("." + Fu.LIST_CARD_CLASS)).forEach(
          (t) => {
            t.style.visibility = "hidden";
          }
        ),
        Array.from(
          document.querySelectorAll("." + Fu.SLIDE_CARD_CLASS)
        ).forEach((t) => {
          t.style.visibility = "visible";
        }),
        this.resize();
      let i = 0;
      this.listImages.forEach((e, n) => {
        e == (null == t ? void 0 : t.target) && (i = n);
      }),
        null === (e = this.slide) || void 0 === e || e.open(i);
    }
    closeButtonMouseDownHandler(t) {
      void 0;
      const e = document.querySelector("html");
      null == e || e.classList.remove(Fu.SLIDESHOW_MODE),
        null == e || e.classList.add(Fu.LIST_MODE),
        Array.from(document.querySelectorAll("." + Fu.LIST_CARD_CLASS)).forEach(
          (t) => {
            t.style.visibility = "visible";
          }
        ),
        Array.from(
          document.querySelectorAll("." + Fu.SLIDE_CARD_CLASS)
        ).forEach((t) => {
          t.style.visibility = "hidden";
        }),
        this.resize(),
        window.scrollTo(0, this.lastScrollY);
    }
    loop() {
      this.listCardManager && this.listCardManager.loop(),
        this.slideCardManager && this.slideCardManager.loop();
    }
    resize() {
      var t;
      if (
        (void 0,
        (Ru.shoudResize() ||
          (null === (t = this.menu) || void 0 === t ? void 0 : t.isOpen())) &&
          (Fu.resizeSVG(),
          this.menu && this.menu.resize(),
          this.orderImages && this.orderImages.resize(),
          this.listCardManager && this.listCardManager.resize(),
          this.slide && this.slide.resize(),
          this.slideCardManager))
      ) {
        if (Ru.isMobile()) {
          const t = document.querySelector("html");
          null == t ||
            t.classList.forEach((t) => {
              t == Fu.SLIDESHOW_MODE && this.closeButtonMouseDownHandler(null);
            });
        } else this.slideCardManager.hideAll();
        this.slideCardManager.resize();
      }
    }
  }
  class fl {
    constructor(t) {
      if (
        ((this.target = t),
        (this.GOOGLE_MAPS_ZOOM = 14),
        (this.API_KEY = "AIzaSyA51Ti9q2jmSQ6iROg8up1xadYQduIqYew"),
        void 0,
        window.google)
      )
        this.generateMap();
      else {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.defer = !0),
          (e.async = !0),
          (e.src =
            "https://maps.googleapis.com/maps/api/js?key=" +
            this.API_KEY +
            "&language=jp"),
          (e.onload = () => this.generateMap()),
          document.body.appendChild(Object.assign(e));
      }
    }
    generateMap() {
      void 0;
      const t = String(this.target.getAttribute("data-name")),
        e = Number(this.target.getAttribute("data-lat")),
        n = Number(this.target.getAttribute("data-lng")),
        i = Number(this.target.getAttribute("data-zoom")),
        r = new google.maps.LatLng(e, n),
        s = new google.maps.Map(this.target, {
          zoom: i,
          center: r,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: !0,
          streetViewControl: !1,
          zoomControl: !0,
          zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.ZoomControlStyle.LARGE,
          },
          styles: [{ stylers: [{ hue: "#2f1dff" }] }],
        }),
        o =
          (new google.maps.Marker({ map: s, position: r, title: t || "" }),
          { styles: [{ stylers: [{ saturation: 0 }] }] });
      var a = { styles: [{ stylers: [{ hue: "#2f1dff" }] }] },
        u = !1;
      this.target.addEventListener("mouseenter", (t) => {
        u || (s.setOptions(o), (u = !0));
      }),
        this.target.addEventListener("mouseleave", (t) => {
          u && (s.setOptions(a), (u = !1));
        });
    }
  }
  class dl {
    constructor() {
      void 0,
        void 0,
        void 0,
        (this.scrollTop = new Jh(
          Array.from(document.querySelectorAll("#back-to-top"))
        )),
        new fl(document.getElementById("gmap")),
        new qu(this.loop.bind(this)).start(),
        setTimeout(() => {
          this.menu = new Yu("about");
        }, Fu.FPS),
        this.resize();
    }
    loop() {}
    resize() {
      var t;
      (Ru.shoudResize() ||
        (null === (t = this.menu) || void 0 === t ? void 0 : t.isOpen())) &&
        (Fu.resizeSVG(), this.menu && this.menu.resize());
    }
  }
  window.onload = () => {
    var t;
    let e;
    void 0,
      (Fu.START_TIME = new Date().getTime()),
      Fu.currentTime(),
      (Fu.CACHE_BREAK =
        (null === (t = document.querySelector("html")) || void 0 === t
          ? void 0
          : t.getAttribute("data-date")) || String(new Date().getTime()));
    const n = document.querySelector("main");
    n && (n.style.visibility = "visible");
    const i = document.querySelector("footer");
    i && (i.style.visibility = "visible"),
      Fu.initializeSVG(),
      Array.from(document.querySelectorAll("#works")).length > 0 &&
        (e = new il()),
      Array.from(document.querySelectorAll("#detail")).length > 0 &&
        (e = new cl()),
      Array.from(document.querySelectorAll("#about")).length > 0 &&
        (e = new dl()),
      window.addEventListener("resize", () => {
        e && e.resize();
      });
  };
})();
