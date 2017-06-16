! function (_, y, B) {
  "use strict";
  var e = "ht";
  if (!_[e]) {
    ! function () { Date.now && Date.prototype.getTime || (Date.now = function () {
        return (new Date).getTime() }), _.performance && _.performance.now || function () {
        var r = Date.now();
        _.performance || (_.performance = {}), _.performance.now = function () {
          return Date.now() - r } }();
      for (var v = Date.now(), h = 16, F = ["ms", "moz", "webkit", "o"], w = 0; w < F.length && !_.requestAnimationFrame; ++w) _.requestAnimationFrame = _[F[w] + "RequestAnimationFrame"], _.cancelAnimationFrame = _[F[w] + "CancelAnimationFrame"] || _[F[w] + "CancelRequestAnimationFrame"];
      _.requestAnimationFrame || (_.requestAnimationFrame = function (U) {
        var k = Date.now(),
          S = h + v - k;
        return 0 > S && (S = 0), v = k, _.setTimeout(function () { v = Date.now(), U(performance.now()) }, S) }), _.cancelAnimationFrame || (_.cancelAnimationFrame = function (c) {
        return _.clearTimeout(c) }) }();
    var X, g, h, W, w = _.document,
      $ = null,
      t = _[e] = {},
      I = _[e + "config"],
      r = t.Default = I && I.Default || {},
      U = t.Style = I && I.Style || {},
      j = t.Color = I && I.Color || {},
      K = t.IsGetter = I && I.IsGetter || {},
      a = Math,
      b = a.round,
      G = a.floor,
      q = a.ceil,
      A = a.sqrt,
      M = a.max,
      v = a.min,
      N = a.abs,
      s = a.cos,
      l = a.acos,
      P = a.sin,
      R = a.pow,
      n = a.asin,
      i = a.PI,
      Q = 2 * i,
      S = i / 2,
      m = a.tan,
      z = a.atan2,
      Y = a.random,
      f = !0,
      p = !1,
      o = _.parseInt || global.parseInt,
      Z = "2018-01-01",
      O = function () {
        try {
          return _.navigator.platform.indexOf("Win") > -1 } catch ($) {} }(),
      J = function (Z) {
        return Z * Z },
      T = _.setTimeout,
      C = _.clearTimeout,
      u = _.location,
      x = _.navigator ? _.navigator.userAgent.toLowerCase() : "",
      d = function (a) {
        return a.test(x) },
      F = d(/msie/) || d(/trident/),
      V = d(/msie 10/),
      D = d(/edge/),
      H = d(/firefox/),
      E = d(/mac/),
      c = r.isTouchable === B ? O ? !1 : w ? "ontouchend" in w : !1 : r.isTouchable,
      L = "default",
      Qj = "single",
      Dq = "multiple",
      il = "front",
      Vk = "back",
      ci = "left",
      Fq = "right",
      xd = "top",
      qc = "bottom",
      db = "center",
      li = "eye",
      Gm = "middle",
      Ad = "east",
      Xm = "west",
      vj = "north",
      ms = "none",
      Zq = "px",
      Vf = "absolute",
      Yp = "border",
      Hi = "triangle",
      ns = "rect",
      Cf = "circle",
      Yd = "cylinder",
      Vn = "shape",
      Ne = "items",
      id = "normal",
      Pr = "remove",
      Do = "clear",
      Ml = "width",
      Oq = "height",
      Hn = "ingroup",
      Qc = "check",
      bq = "uncheck",
      Di = "radio",
      qh = "radioOn",
      rf = "radioOff",
      Md = "points",
      gl = "values",
      mc = "series",
      Uh = "body",
      lq = "label",
      Dr = "label2",
      Cd = "note",
      Jd = "note2",
      Zo = "icons",
      fc = "labelFont",
      Qm = "labelColor",
      _c = "labelSelectColor",
      jf = "note.expanded",
      jn = "note2.expanded",
      kq = "edge.expanded",
      pe = "edge.points",
      Cg = "edge.type",
      Te = "rotation",
      vi = "getRotation",
      _i = "setRotation",
      dq = "hidden",
      yc = "visible",
      Xe = "tuv",
      og = "no",
      Rp = "select",
      xl = "currentSubGraph",
      sp = "selectBackground",
      _d = "autoMakeVisible",
      Jq = "autoHideScrollBar",
      kn = "scrollBarColor",
      Im = "scrollBarSize",
      fb = "indent",
      ug = "rowHeight",
      Kk = "columnLineColor",
      nn = "rowLineColor",
      Ij = "columnLineVisible",
      qn = "rowLineVisible",
      rd = "visibleFunc",
      ls = "expandIcon",
      cm = "collapseIcon",
      qo = "checkMode",
      Sp = "sortFunc",
      bg = "editable",
      kf = "batchEditable",
      Ak = "tristate",
      Hj = "asc",
      Fm = "desc",
      Ff = "position",
      fh = "elevation",
      hg = "children",
      ie = "translateX",
      Ro = "translateY",
      dg = "dataModel",
      Eg = "maxSize",
      si = "shape3d",
      Np = "shape3d.resolution",
      aq = "shape3d.visible",
      bc = "shape3d.from.visible",
      gr = "shape3d.to.visible",
      Zr = "shape3d.top.visible",
      ws = "shape3d.bottom.visible",
      qm = "repeat.uv.length",
      Cl = "serializeValue",
      Yq = "deserializeValue",
      ng = "centerUniform",
      ib = "rgba(255,255,255,0)",
      Xf = "style",
      nf = "attr",
      Ai = "field",
      yk = "string",
      nk = "boolean",
      dj = "color",
      ub = "int",
      cl = "number",
      ln = "ew-resize",
      ec = "ns-resize",
      Le = "pointer",
      Mg = "auto",
      On = "mousedown",
      Cb = "mousemove",
      zo = "mouseup",
      xn = "mouseout",
      xj = "touchstart",
      Qf = "touchmove",
      yb = "touchend",
      eo = "keydown",
      kb = "keyup",
      tg = H ? "DOMMouseScroll" : "mousewheel",
      Dh = c ? [xj, Qf, yb, eo, kb, "keypress", "input", "contextmenu"] : [eo, kb, "keypress", "input", On, Cb, zo, xn, tg, "contextmenu", "mouseenter", "mouseleave", "mouseout"],
      np = $,
      _b = $,
      Kl = $,
      Wp = zo.length,
      Um = function () { Kl && (C(Kl.timeout), Kl = $) },
      Vo = function () { Kl && ag(Kl.e, Kl.info) };
    _.addEventListener && (c || (_.addEventListener(xn, function () { Um() }, !1), _.addEventListener(tg, function () { eq() }, !1)), _.addEventListener(kb, function (K) { 91 === K.keyCode ? jd = {} : delete jd[K.keyCode] }, !0), _.addEventListener(eo, function (N) { jd[N.keyCode] = !0 }, !0));
    var Xg, _o, yf, Tm = !1,
      pp = $,
      Li = $,
      wh = {},
      so = {},
      Yg = {},
      Lh = {},
      Rr = {},
      jd = {},
      jo = {},
      Xp = {},
      Ab = {},
      ai = /.json$/,
      Yf = {},
      bs = [],
      Oi = {},
      Kj = $,
      Vc = $,
      Zg = function () {},
      im = function () {
        throw "Oops!" },
      qj = [0, 0, 0],
      Gj = [0, 0, 0, 0],
      jg = { x: 0, y: 0, width: 0, height: 0 },
      Qb = $,
      bm = $,
      oe = $,
      Ho = function (S) { bm && !S._72O && (oe || (oe = {}), oe[S._72O = wo()] = S), Xg != $ ? Dc() < .05 && W && !_o && (Ue = Um) : Ue = bl },
      Hl = function (u, O, C, t) { bm || (bm = {});
        var L = bm[u];
        if (L) {
          if (L.url === O) return;
          L.image ? (L.image.onload = Zg, L.image.onerror = Zg) : L.request && (L.request.onload = Zg, L.request.onerror = Zg) }
        if (ai.test(O)) {
          var n = new XMLHttpRequest;
          if (bm[u] = { request: n, url: O }, n.overrideMimeType("text/plain"), r.convertURL && (O = r.convertURL(O)), O.data) {
            var f = r.parse(O.data);
            wd(u, f), r.handleImageLoaded(u, f) } else n.open("GET", encodeURI(O), !0), n.onload = function (N) {
            if (200 === this.status || 0 === this.status) {
              var J = r.parse(N.target.response);
              wd(u, J), r.handleImageLoaded(u, J) } else wd(u, r.handleUnfoundImage(u, O) || $) }, n.onerror = function () { wd(u, r.handleUnfoundImage(u, O) || $) }, n.send(null) } else {
          var f = new Image;
          bm[u] = { image: f, url: O }, F && O.toLowerCase().indexOf(".svg") > 0 ? (w.body.appendChild(f), f.style.visibility = "hidden", f.onload = function () { T(function () {
              if (C && (f.width = C), t && (f.height = t), !f.width || !f.height) {
                var L = f.width || f.clientWidth,
                  o = f.height || f.clientHeight;
                f.width = L, f.height = o }
              r.handleImageLoaded(u, f), wd(u, f), w.body.removeChild(f), f.style.visibility = "" }, 150) }, f.onerror = function () { wd(u, r.handleUnfoundImage(u, O) || $), w.body.removeChild(f), f.style.visibility = "" }) : (f.onload = function () { C && (f.width = C), t && (f.height = t), r.handleImageLoaded(u, f), wd(u, f) }, f.onerror = function () { wd(u, r.handleUnfoundImage(u, O) || $) }), /^data:image/.test(O) || (r.convertURL && (O = r.convertURL(O)), /^data:image/.test(O) || (O = r.appendTimeStamp(O), O = encodeURI(O))), f.src = O } },
      wd = function (V, K) {
        if (so[V] = K, delete bm[V], ul(bm) && (bm = $, oe)) {
          for (var e in oe) {
            var n = oe[e];
            n._2O && (n._2O = {}), n.invalidateAll && n.invalidateAll(B, "imageLoaded", V), n.redraw && n.redraw(), n.iv(), delete n._72O }
          oe = $ }
        if (K && oe)
          for (var e in oe) {
            var n = oe[e];
            n.invalidateAll && n.invalidateAll(B, "imageLoading", V), n.redraw && n.redraw(), n.iv() } },
      Qp = function () {
        return _.performance && _.performance.now ? _.performance.now() : Date.now() },
      Sq = function (R, t) { t ? C(R) : _.cancelAnimationFrame(R) },
      mq = function (p, c, $) {
        return { width: p, height: c, comps: Hq($) ? $ : [$] } },
      Uj = function (U, z) {
        return { type: Cf, rect: [U, z, 1.6, 1.6], borderWidth: 1, borderColor: hj, gradient: Cp, gradientColor: Jb, background: hj } },
      ds = function (Y, F) {
        return mq(16, 16, { type: Hi, rect: [4, 4, 10, 8], background: Y, rotation: F ? 1.57 : 3.14 }) },
      Wc = function ($, I) {
        return mq(16, 16, { type: Hi, rect: [4, 4, 8, 7], background: $, rotation: I ? 3.14 : 0 }) },
      bn = function (Z) {
        var T = Z._orientation;
        return "horizontal" === T || "h" === T },
      Kn = function (k) {
        var o = $ || 4,
          D = $ || 1,
          e = $ || 1;
        0 > o ? o = 0 : o > .25 && (o = .25);
        var q, X, l, I, N, b, B, L = .5,
          n = [],
          f = [],
          E = [],
          z = Q / e,
          V = Q / D,
          a = L - o;
        for (X = 0; D >= X; X++)
          for (I = -i + X * V, b = s(I), N = P(I), q = 0; e >= q; q++) l = q * z, B = a + o * b, n.push(s(l) * B, N * o, -P(l) * B), (g = k) && f.push(q / e, 1 - X / D);
        for (X = 0; D > X; X++) {
          var W = X * (e + 1),
            C = (X + 1) * (e + 1);
          for (q = 0; e > q; q++) E.push(W + q, C + q + 1, C + q, W + q, W + q + 1, C + q + 1), Fl.z = jl.z = k } },
      vh = function (g) {
        var A = 2,
          E = 0;
        for (var J in g) J.length === A && o(J, 32) === Zk && (Kj = Vc = g[J]), E++;
        return E },
      Vl = function (a, s, u, o) {
        return u || (u = c ? 5 : 3, u /= o || 1), { x: a - u, y: s - u, width: 2 * u, height: 2 * u } },
      fj = function (M, I, S, m) {
        var n = this;
        I || (I = c ? 5 : 3, S = 20, m = 20);
        var R = { x: M, y: I, width: S, height: m };
        if (S)
          for (var $ = 0; S > $; $++)
            if (3 === S) m = 20;
            else
              for (var N = 0; m > N; N++) n = _ ? _ : S;
        var e = { x: i, y: 2 * i };
        if (Sm(R, e)) {
          var V = Oq[0] + xd[0] + Do[1];
          Zb[li] = n[V], n[V] = Gk[li] } },
      Ui = function (l) {
        return (/ble$/.test(l) || /ed$/.test(l) || K[l] ? "is" : "get") + l.charAt(0).toUpperCase() + l.slice(1) },
      Gk = function ($) {
        return "set" + $.charAt(0).toUpperCase() + $.slice(1) },
      An = function (K) {
        return typeof K === yk || K instanceof String },
      Ng = function (K) {
        return typeof K === cl },
      bl = function (L) {
        return typeof L === nk },
      Cq = function (a) {
        return a && "object" == typeof a },
      Nk = function (Y) {
        return "function" == typeof Y },
      Hq = function (e) {
        return e instanceof Array },
      Pk = function (H) {
        return H instanceof Ol },
      Bm = function (b) {
        return Hq(b) ? new Ol(b) : b },
      pg = function (K) {
        return K instanceof Ii },
      lf = function (W) {
        return W instanceof bb },
      cp = function (_) {
        return _ instanceof Ec },
      Vd = function (u) {
        return u instanceof xm },
      Lr = function (C) {
        return C && "IFRAME" === C.tagName },
      dd = function (u) {
        return u == $ || r.numberDigits == $ ? u : parseFloat(u.toFixed(r.numberDigits)) },
      Bi = function (f, K, r) {
        var X, Q = K.length;
        if (r)
          for (var v = 0; r > v; v++)
            if (3 === Q) f.push(K[0]), f.push(K[1]), f.push(K[2]);
            else
              for (X = 0; Q > X; X++) f.push(K[X]);
        else if (3 === Q) f.push(K[0]), f.push(K[1]), f.push(K[2]);
        else
          for (X = 0; Q > X; X++) f.push(K[X]) },
      pj = function (_) {
        return _ ? Cq(_) ? _ : {} : !1 },
      ph = function (X, H, D) {
        var d, $ = Cq(X) ? X : X.prototype;
        for (d in H) D && $[d] !== B || ($[d] = H[d]);
        return X },
      Zm = function (B) {
        return String.fromCharCode(B) },
      Ve = function (B) {
        for (var Y, Z = 0, G = ""; Z < B.length; Z++) Y = B[B.length - 1 - Z], "%" === Y ? Y = "'" : "a" === Y ? Y = '"' : "]" === Y && (Y = "\\"), G += Zm(Y.charCodeAt(0) - 1);
        return G },
      Dj = function (D, J, T) { D.superClass.constructor.apply(J, T) },
      ul = function (X) {
        for (var G in X) return !1;
        return !0 },
      lr = function (p) {
        return p ? 0 === p.length : !0 },
      Qe = function (q, I) {
        return q === I ? !0 : q.x === I.x && q.y === I.y && q.width === I.width && q.height === I.height },
      Tl = function (T, r, g) {
        return r > T ? r : T > g ? g : T },
      ol = function (A) {
        return 0 > A ? -1 : A > 0 ? 1 : 0 },
      Dc = function () {
        var H = 1e4 * P(Wp++);
        return H - G(H) },
      br = function (N, X, q) {
        return sf(N.x, N.y, X.x, X.y, q.x, q.y, q.x + q.width, q.y, !0) || sf(N.x, N.y, X.x, X.y, q.x + q.width, q.y, q.x + q.width, q.y + q.height, !0) || sf(N.x, N.y, X.x, X.y, q.x + q.width, q.y + q.height, q.x, q.y + q.height, !0) || sf(N.x, N.y, X.x, X.y, q.x, q.y + q.height, q.x, q.y, !0) },
      sf = function (g, B, R, r, e, p, T, h, K) {
        var j = (T - e) * (B - p) - (h - p) * (g - e),
          q = (h - p) * (R - g) - (T - e) * (r - B);
        if (0 !== q) {
          var I = j / q,
            f = g + I * (R - g),
            L = B + I * (r - B);
          return K && (f + Er < v(g, R) || f - Er > M(g, R) || f + Er < v(e, T) || f - Er > M(e, T) || L + Er < v(B, r) || L - Er > M(B, r) || L + Er < v(p, h) || L - Er > M(p, h)) ? $ : [f, L] }
        return $ },
      Rc = function (b, H, s) {
        if (b && s)
          if (H) {
            if (H === Xf) return b.getStyle(s);
            if (H === nf) return b.getAttr(s);
            if (H === Ai) return b[s] } else if (s = Ui(s), b[s]) return b[s]();
        return B },
      gs = function (v, w, B, g) {
        if (v && B)
          if (w) {
            if (w === Xf) v.s(B, g);
            else if (w === nf) v.a(B, g);
            else if (w === Ai) {
              var h = v[B];
              v[B] = g, v.fp("f:" + B, h, g) } } else B = Gk(B), v[B] && v[B](g) },
      Hc = function (L, B, R, V, Y) { B && No(L, R, V, 1, Y, B) },
      rh = function (d, z, B, $) {
        var c = 1 - d;
        return c * c * z + 2 * d * c * B + d * d * $ },
      Fl = function (m, b, R, l, w) {
        var N = 1 - m;
        return N * N * N * b + 3 * N * N * m * R + 3 * N * m * m * l + m * m * m * w },
      di = function (v) {
        var Q, D, H, j, R = 0;
        return v.forEach(function (y) {
          if (Q = y.length, Q > 0)
            for (D = y[0], j = 1; Q > j; j++) H = y[j], R += Rk(D, H), D = H }), R },
      km = function (p, Y, x) {
        var N = "__" + p,
          m = function (H) { x.interactiveDisabled || x["handle_" + p](H) };
        x[N] || (x[N] = m, Y.addEventListener(p, m, !1)) },
      ze = function (B, V, J) {
        var E = "__" + B,
          Z = J[E];
        Z && (V.removeEventListener(B, Z, !1), delete J[E]) },
      ql = function (P, g) {
        var M = "_" + g;
        P[Ui(g)] = function () {
          return this[M] }, P[Gk(g)] = function (i) {
          var s = this[M];
          this[M] = i, this.fp(g, s, i) } },
      on = function (q) {
        return y.create(q) },
      rc = function (e) {
        if (!e.element) {
          var E, q;
          (E = e.textField) ? q = cj(dn.TextField, E): (E = e.textArea) ? q = cj(dn.TextArea, E) : (E = e.button) ? q = cj(dn.Button, E) : (E = e.comboBox) ? q = cj(dn.ComboBox, E) : (E = e.checkBox) ? q = cj(dn.CheckBox, E) : (E = e.radioButton) ? q = cj(dn.RadioButton, E) : (E = e.slider) ? q = cj(dn.Slider, E) : (E = e.colorPicker) ? q = cj(dn.ColorPicker, E) : (E = e.image) && (q = cj(dn.Image, E)), q && (e.element = q) } },
      ef = function (k, Q) {
        var _ = tp(k);
        return _._ht = Q, _ },
      tp = function (k, R) {
        var I = w.createElement("div"),
          K = I.style;
        return I.tabIndex = -1, I.onkeydown = be, K.msTouchAction = ms, Cr(I, $, 0), c && K.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", $), k && (K.overflow = dq), R && Af(R, I), I },
      Jr = function (s, f) {
        var Z = w.createElement("canvas"),
          L = Z.style;
        return L.msTouchAction = ms, f || (L.pointerEvents = ms), Cr(Z, $, 0), s && Af(s, Z), Z },
      Cr = function (Q, M, x) {
        var c = Q.style;
        c.border = M ? M + " solid 1px" : 0, c.outline = 0, c.padding = x ? "0 " + x + Zq : 0, pb(Q) },
      pb = function (v) {
        var V = v.style;
        V.position = Vf, V.margin = 0, V.setProperty("box-sizing", "border-box", $), V.setProperty("-moz-box-sizing", "border-box", $) },
      vr = function (f, B, D, A) { A || (A = bk), B != $ && (f.width = B * A, f.style.width = B + Zq), D != $ && (f.height = D * A, f.style.height = D + Zq) },
      Af = function (D, e, n) { D.appendChild(e), n && (e.style.position = Vf) },
      Ym = function (V, n) { n.split || (n += "");
        for (var h, z = n.split("\n"), L = 0, O = z.length, y = 0; O > y; y++) {
          var k = Sj(V.font, z[y]);
          k.width > L && (L = k.width), h || (h = k.height) }
        return V.ss = z, { width: L, height: h * O } },
      ok = function (J, R, e, Q, o, t) {
        var i = R.length;
        if (1 === i) Lg(J, R[0], e, Q, o);
        else
          for (var N = e.height / i, A = { x: e.x, y: e.y, width: e.width, height: N }, f = 0; f < R.length; f++) t ? kj(J, R[f], Q, o, A.x, A.y, A.width, A.height, t) : Lg(J, R[f], A, Q, o), A.y += N },
      Lg = function (C, r, g, c, Y) { C.font = c ? c : Eb, C.fillStyle = Y ? Y : nd, C.textAlign = db, C.textBaseline = Gm;
        var j, E;
        g ? g.width === B ? (j = g.x, E = g.y) : (j = g.x + g.width / 2, E = g.y + g.height / 2) : (j = 0, E = 0), C.fillText(r, b(j), b(E)) },
      Fb = function (A) { A.getView && (A = A.getView());
        var w = A.offsetWidth || A.scrollWidth;
        return !w && A.style.width && (w = o(A.style.width)), w },
      fo = function (z) { z.getView && (z = z.getView());
        var m = z.offsetHeight || z.scrollHeight;
        return !m && z.style.height && (m = o(z.style.height)), m },
      Ok = function () {
        var E = function (W) { be(W), W.stopPropagation() },
          B = c ? [xj] : [eo, On, tg];
        return function (t) {
          var j = tp(),
            z = j.style;
          return z.backgroundColor = r.disabledBackground, t && (z.backgroundImage = "url(" + t + ")", z.backgroundPosition = "50% 50%", z.backgroundRepeat = "no-repeat no-repeat"), B.forEach(function (K) { j.addEventListener(K, E) }), j } }(),
      dc = function (K) {
        var Y = K.getContext("2d");
        return Y.save(), Y.lineCap = Wi, Y.lineJoin = eg, Y },
      Ue = function (f, a, Z, U) { wg(f, a * bk, Z * bk), U *= bk, 1 !== U && f.scale(U, U) },
      wg = function (m, Z, n) { m.translate(Z, n) },
      gb = function (P, o) { o && P.rotate(o) },
      ii = function (Z, o, v) { o === B && (o = 1), v === B && (v = 1), (1 !== o || 1 !== v) && Z.scale(o, v) },
      xs = function (o) {
        if (w.activeElement !== o)
          if (c) o.focus();
          else {
            var n = gc(),
              a = n.target;
            o.focus(), a.scrollLeft = n.left, a.scrollTop = n.top } },
      ej = function (A) {
        return A && A.getView ? A.getView() : A },
      Am = function (g, D, R, e, C) { 2 === arguments.length && (R = D.y, e = D.width, C = D.height, D = D.x);
        var n = ej(g),
          O = n.style;
        (w.fullscreenElement || w.mozFullScreenElement || w.webkitFullscreenElement || w.msFullscreenElement) !== n && (D !== B && (O.left = D + Zq), R !== B && (O.top = R + Zq), e !== B && (O.width = e + Zq), C !== B && (O.height = C + Zq)), g.endEditing && !c && g.endEditing(), g.redraw && g.redraw(), g.invalidate && g.invalidate(), g.onLayouted && g.onLayouted(D, R, e, C), g.fireViewEvent && g.fireViewEvent("layout") },
      Wl = function (O) {
        var V = O.touches[0];
        return V ? V : O.changedTouches[0] },
      ao = function (T) {
        return c ? Wl(T).target : T.target },
      Qq = function (D) { r.popup && r.popup.close(), r.popup = D },
      gp = $,
      ap = function (O) { gp.handleWindowTouchMove(O) },
      ym = function (E) { gp.handleWindowTouchEnd(E), _.removeEventListener(Qf, ap, !1), _.removeEventListener(yb, ym, !1), gp = $ },
      dp = function (F) { gp.handleWindowMouseMove(F) },
      Ub = function (F) { gp.handleWindowMouseUp(F), _.removeEventListener(Cb, dp, !1), _.removeEventListener(zo, Ub, !1), gp = $ },
      sd = function (V) {
        return 1 === kp(V) },
      Dm = function (h, E) {
        return E ? E.keyCode === h : jd[h] },
      em = function (M) {
        return ll(M) && Dm(65, M) },
      kh = function (d) {
        return Dm(46, d) || Dm(8, d) },
      _n = function (e) {
        return function (b) {
          return b ? b.keyCode === e : jd[e] } },
      Zk = 573,
      mr = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
      Vp = _n(mr[0]),
      bp = _n(mr[1]),
      sj = _n(mr[2]),
      Vj = _n(mr[3]),
      Be = _n(mr[4]),
      vf = _n(mr[5]),
      ih = _n(mr[6]),
      Pj = _n(mr[7]),
      Vq = _n(mr[8]),
      Ac = _n(mr[9]),
      Lj = _n(mr[10]),
      Fi = { 65: 1, 83: 1, 68: 1, 87: 1, 37: 1, 38: 1, 39: 1, 40: 1 },
      ig = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 487],
      dh = $,
      om = $,
      Sr = function (e, d) { dh || (dh = Jr()), vr(dh, e, d, 1);
        var v = dc(dh);
        return v.clearRect(0, 0, e, d), v },
      zh = function () {
        var z, Q = {};
        return function (u) {
          var T, X = Q[u];
          return X || (z || (z = Jr(), vr(z, 1, 1, 1)), T = z.getContext("2d"), T.clearRect(0, 0, 1, 1), No(T, 0, 0, 1, 1, u), X = T.getImageData(0, 0, 1, 1).data, X = Q[u] = [X[0], X[1], X[2], X[3]]), X } }(),
      Sk = function (C) {
        if (!An(C)) return C;
        var o = zh(C);
        return o.CA || (o.CA = [o[0] / 255, o[1] / 255, o[2] / 255, o[3] / 255]), o.CA },
      qq = function (E, v, L, S) {
        var I = Jr();
        I.width = L, I.height = S;
        var w = I.getContext("2d");
        w.drawImage(E, 0, 0, L, S);
        try {
          for (var m = w.getImageData(0, 0, L, S), t = m.data, B = 0, D = t.length; D > B; B += 4) {
            var q = t[B + 0],
              f = t[B + 1],
              a = t[B + 2];
            t[B + 0] = v[0] * q, t[B + 1] = v[1] * f, t[B + 2] = v[2] * a }
          w.putImageData(m, 0, 0) } catch ($) {
          return E }
        return I },
      Zb = function (A, s, Z) {
        return s && (s = "miter" === Z ? 8 * s + 20 : s + 1, A && Nh(A, s)), s },
      lo = function (d, J) {
        if (J) {
          var L = new jm(J),
            E = d.width / 2,
            t = d.height / 2,
            l = ji([L.tf(-E, -t), L.tf(E, -t), L.tf(E, t), L.tf(-E, t)]);
          return l.x += d.x + E, l.y += d.y + t, l }
        return d },
      qi = function (q, i, T, z, Z, x, o, B) { z *= Math.PI / 180;
        var g = { x: Math.cos(z) * (q.x - o.x) / 2 + Math.sin(z) * (q.y - o.y) / 2, y: -Math.sin(z) * (q.x - o.x) / 2 + Math.cos(z) * (q.y - o.y) / 2 },
          X = Math.pow(g.x, 2) / Math.pow(i, 2) + Math.pow(g.y, 2) / Math.pow(T, 2);
        X > 1 && (i *= Math.sqrt(X), T *= Math.sqrt(X));
        var d = (Z == x ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(T, 2) - Math.pow(i, 2) * Math.pow(g.y, 2) - Math.pow(T, 2) * Math.pow(g.x, 2)) / (Math.pow(i, 2) * Math.pow(g.y, 2) + Math.pow(T, 2) * Math.pow(g.x, 2)));
        isNaN(d) && (d = 0);
        var c = { x: d * i * g.y / T, y: d * -T * g.x / i },
          A = { x: (q.x + o.x) / 2 + Math.cos(z) * c.x - Math.sin(z) * c.y, y: (q.y + o.y) / 2 + Math.sin(z) * c.x + Math.cos(z) * c.y },
          r = function (D) {
            return Math.sqrt(Math.pow(D[0], 2) + Math.pow(D[1], 2)) },
          u = function (T, E) {
            return (T[0] * E[0] + T[1] * E[1]) / (r(T) * r(E)) },
          w = function (v, n) {
            return (v[0] * n[1] < v[1] * n[0] ? -1 : 1) * Math.acos(u(v, n)) },
          Y = w([1, 0], [(g.x - c.x) / i, (g.y - c.y) / T]),
          R = [(g.x - c.x) / i, (g.y - c.y) / T],
          e = [(-g.x - c.x) / i, (-g.y - c.y) / T],
          H = w(R, e);
        u(R, e) <= -1 && (H = Math.PI), u(R, e) >= 1 && (H = 0);
        var u = i > T ? i : T,
          p = i > T ? 1 : i / T,
          $ = i > T ? T / i : 1;
        if (null == B) {
          var M = { x: 0, y: 0, width: 0, height: 0 };
          Nh(M, u), M.x *= p, M.width *= p, M.y *= $, M.height *= $;
          var E = new jm(z);
          return M = ji([E.tf(M.x, M.y), E.tf(M.x + M.width, M.y), E.tf(M.x + M.width, M.y + M.height), E.tf(M.x, M.y + M.height)]), M.x += A.x, M.y += A.y, [{ x: M.x, y: M.y }, { x: M.x + M.width, y: M.y }, { x: M.x + M.width, y: M.y + M.height }, { x: M.x, y: M.y + M.height }] }
        B.translate(A.x, A.y), B.rotate(z), B.scale(p, $), B.arc(0, 0, u, Y, Y + H, 1 - x), B.scale(1 / p, 1 / $), B.rotate(-z), B.translate(-A.x, -A.y) },
      cq = function (Q, g) { Q && Q.beginPath();
        for (var l, _, s, G = [], B = function (p) {
            for (var h, m = /(\-{0,1}[\d\.]+)/gi, C = []; h = m.exec(p);) C.push(parseFloat(h[0]));
            return C }, i = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, q = { x: 0, y: 0 }; l = i.exec(g);) {
          var O = l[0],
            $ = O.substr(0, 1);
          if ("M" === $ || "m" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 2) {
              var V = n[h],
                b = n[h + 1]; "m" === $ && (V += q.x, b += q.y), Q && Q.moveTo(V, b), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = s = null } else if ("H" === $ || "h" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 1) {
              var V = n[h]; "h" === $ && (V += q.x), Q && Q.lineTo(V, q.y), G.push({ x: V, y: q.y }), q.x = V }
            _ = s = null } else if ("C" === $ || "c" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 6) {
              var m = n[h],
                t = n[h + 1],
                x = n[h + 2],
                W = n[h + 3],
                V = n[h + 4],
                b = n[h + 5]; "c" === $ && (m += q.x, t += q.y, x += q.x, W += q.y, V += q.x, b += q.y), Q && Q.bezierCurveTo(m, t, x, W, V, b), G.push({ x: m, y: t }), G.push({ x: x, y: W }), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = [m, t, x, W, V, b], s = null } else if ("S" === $ || "s" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 4) {
              var m, t;
              _ ? (m = 2 * _[4] - _[2], t = 2 * _[5] - _[3]) : (m = q.x, t = q.y);
              var x = n[h],
                W = n[h + 1],
                V = n[h + 2],
                b = n[h + 3]; "s" === $ && (x += q.x, W += q.y, V += q.x, b += q.y), Q && Q.bezierCurveTo(m, t, x, W, V, b), G.push({ x: m, y: t }), G.push({ x: x, y: W }), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = [m, t, x, W, V, b], s = null } else if ("Q" === $ || "q" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 4) {
              var m = n[h],
                t = n[h + 1],
                V = n[h + 2],
                b = n[h + 3]; "q" === $ && (m += q.x, t += q.y, V += q.x, b += q.y), Q && Q.quadraticCurveTo(m, t, V, b), G.push({ x: m, y: t }), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = null, s = [m, t, V, b] } else if ("T" === $ || "t" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 2) {
              var m, t;
              s ? (m = 2 * s[2] - s[0], t = 2 * s[3] - s[1]) : (m = q.x, t = q.y);
              var V = n[h],
                b = n[h + 1]; "t" === $ && (V += q.x, b += q.y), Q && Q.quadraticCurveTo(m, t, V, b), G.push({ x: m, y: t }), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = null, s = [m, t, V, b] } else if ("V" === $ || "v" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 1) {
              var b = n[h]; "v" === $ && (b += q.y), Q && Q.lineTo(q.x, b), G.push({ x: q.x, y: b }), q.y = b }
            _ = s = null } else if ("L" === $ || "l" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 2) {
              var V = n[h],
                b = n[h + 1]; "l" === $ && (V += q.x, b += q.y), Q && Q.lineTo(V, b), G.push({ x: V, y: b }), q.x = V, q.y = b }
            _ = s = null } else if ("A" === $ || "a" === $) {
            for (var n = B(O), h = 0; h < n.length; h += 7) {
              var U = n[h],
                c = n[h + 1],
                D = n[h + 2],
                e = n[h + 3],
                k = n[h + 4],
                V = n[h + 5],
                b = n[h + 6]; "a" === $ && (V += q.x, b += q.y);
              var o = qi(q, U, c, D, e, k, { x: V, y: b }, Q);
              o && (G = G.concat(o)), q.x = V, q.y = b }
            _ = s = null }
          var F = O.substr(O.length - 1);
          ("z" === F || "Z" === F) && Q && Q.closePath() }
        return G },
      Wd = function (z, L) {
        var h, X, e = "L" === L[0],
          j = L.length;
        for (z.save(), e ? (z.transform(L[5], L[6], L[7], L[8], L[9], L[10]), h = z.createLinearGradient(L[1], L[2], L[3], L[4]), X = 11) : (z.transform(L[7], L[8], L[9], L[10], L[11], L[12]), h = z.createRadialGradient(L[1], L[2], L[3], L[4], L[5], L[6]), X = 13); j > X;) h.addColorStop(L[X], L[X + 1]), X += 2;
        z.fillStyle = h },
      jl = function (K, v) {
        var E, H, V, B, R, X, k, z, O, A, m, o, p, r = "L" === K[0];
        E = r ? 5 : 7, H = K[E], V = K[E + 1], B = K[E + 2], R = K[E + 3], X = K[E + 4], k = K[E + 5], z = v[0], O = v[1], A = v[2], m = v[3], o = v[4], p = v[5], K[E] = z * H + A * V, K[E + 1] = O * H + m * V, K[E + 2] = z * B + A * R, K[E + 3] = O * B + m * R, K[E + 4] = z * X + A * k + o, K[E + 5] = O * X + m * k + p },
      Zh = function (C, Q, S, V) {
        var f = !1;
        if (C.beginPath ? C.beginPath() : f = !0, Pk(Q) && (Q = Q._as), Pk(S) && (S = S._as), S && S.length) {
          for (var L, o, B, E, D = 0, A = 0, r = S.length; r > A; A++) L = S[A], 1 === L ? (o = Q[D++], C.moveTo(o.x, f ? -o.y : o.y)) : 2 === L ? (o = Q[D++], C.lineTo(o.x, f ? -o.y : o.y)) : 3 === L ? (o = Q[D++], B = Q[D++], C.quadraticCurveTo(o.x, f ? -o.y : o.y, B.x, f ? -B.y : B.y)) : 4 === L ? (o = Q[D++], B = Q[D++], E = Q[D++], C.bezierCurveTo(o.x, f ? -o.y : o.y, B.x, f ? -B.y : B.y, E.x, f ? -E.y : E.y)) : 5 === L && C.closePath();
          V && 5 !== L && C.closePath() } else {
          var Z, j, N, y = Q.length;
          if (y > 0) {
            for (Z = Q[0], C.moveTo(Z.x, f ? -Z.y : Z.y), j = 1; y > j; j++) N = Q[j], C.lineTo(N.x, f ? -N.y : N.y);
            V && C.closePath() } } },
      Ic = function (R, j, n, U) {
        if (Pk(R) && (R = R._as), Pk(j) && (j = j._as), j && j.length) { n = n || zd;
          for (var D, e, C, V, q, o, N = [], B = $, F = 0, I = 0, b = j.length; b > I; I++)
            if (D = j[I], 1 === D) N.push(B = []), B.push(R[F++]);
            else if (2 === D) B.push(R[F++]);
          else if (3 === D)
            for (e = B[B.length - 1], C = R[F++], V = R[F++], o = 1; n >= o; o++) B.push({ x: rh(o / n, e.x, C.x, V.x), y: rh(o / n, e.y, C.y, V.y) });
          else if (4 === D)
            for (e = B[B.length - 1], C = R[F++], V = R[F++], q = R[F++], o = 1; n >= o; o++) B.push({ x: Fl(o / n, e.x, C.x, V.x, q.x), y: Fl(o / n, e.y, C.y, V.y, q.y) });
          else 5 === D && B.push(B[0]);
          return U && 5 !== D && B && B.length > 2 && B.push(B[0]), N }
        return U && R.length > 2 && (R = R.slice(), R.push(R[0])), R ? [R] : [] },
      hn = function (E, X, L, b, w, k) {
        var m, x, e, h = zh(X),
          J = b,
          D = h[0],
          s = h[1],
          n = h[2];
        if (L) {
          var I = zh(L);
          m = I[0] - D, x = I[1] - s, e = I[2] - n } else m = 255 - D, x = 255 - s, e = 255 - n;
        for (k || (k = b > 10 ? 1 : .5, k = 1 > w ? v(k / w, 2) : k);
          (b -= k) > 0;) {
          var P = 1 - b / J,
            N = D + m * P,
            K = s + x * P,
            z = n + e * P;
          N = v(q(N), 255), K = v(q(K), 255), z = v(q(z), 255), E.strokeStyle = "rgb(" + N + "," + K + "," + z + ")", E.lineWidth = b, E.stroke() } },
      cd = function () {
        var j = {};
        return function (r, d) {
          var T = r + "-" + d,
            $ = j[T];
          if ($) return $;
          var X, w, m, P = zh(r);
          return 0 > d ? (d = (100 + d) / 100, X = q(P[0] * d), w = q(P[1] * d), m = q(P[2] * d)) : (d /= 100, X = P[0], w = P[1], m = P[2], X += (255 - X) * d, w += (255 - w) * d, m += (255 - m) * d, X = v(q(X), 255), w = v(q(w), 255), m = v(q(m), 255)), j[T] = "rgb(" + X + "," + w + "," + m + ")" } }(),
      No = function (z, q, r, n, X, o) { o && (z.fillStyle = o), z.beginPath(), z.rect(q, r, n, X), z.fill() },
      Jj = function (p, S, B, G, x, q, k) { p.beginPath(), xq[S](p, B.x, B.y, B.width, B.height, G, x, q, k) },
      ks = function (H, r, w, u, O) {
        var b = xq[w];
        H.fillStyle = b ? b(H, r, u ? u : Jb, O.x, O.y, O.width, O.height) : r },
      Ao = function (p, E) {
        try { E.tagName || (E._cacheImage_ || (E._cacheImage_ = t.Default.toCanvas(E, Io(E), mg(E))), E = E._cacheImage_), p.fillStyle = p.createPattern(E, "repeat") } catch (P) { p.fillStyle = "black" } },
      zi = function (u, O, J, f, Z, w, F, K) {
        var c, $, W, A, Y, e, t, b, X, I, g;
        if (N(Z) > 2 * i && (Z = 2 * i), Y = q(N(Z) / (i / 4)), c = Z / Y, $ = -c, W = -f, Y > 0) { e = O + s(f) * w, t = J + P(-f) * F, K ? u.lineTo(e, t) : u.moveTo(e, t);
          for (var x = 0; Y > x; x++) W += $, A = W - $ / 2, b = O + s(W) * w, X = J + P(W) * F, I = O + s(A) * (w / s($ / 2)), g = J + P(A) * (F / s($ / 2)), u.quadraticCurveTo(I, g, b, X) } },
      Xo = function (z, O, V, a, m, d, J, b, D) { 6 === arguments.length && (J = d, b = d, D = d);
        var G = O + a,
          T = V + m,
          F = m > a ? 2 * a : 2 * m;
        d = F > d ? d : F, J = F > J ? J : F, b = F > b ? b : F, D = F > D ? D : F;
        var v = .29 * D,
          N = .58 * D;
        z.moveTo(G, T - D), z.quadraticCurveTo(G, T - N, G - v, T - v), z.quadraticCurveTo(G - N, T, G - D, T), v = .29 * b, N = .58 * b, z.lineTo(O + b, T), z.quadraticCurveTo(O + N, T, O + v, T - v), z.quadraticCurveTo(O, T - N, O, T - b), v = .29 * d, N = .58 * d, z.lineTo(O, V + d), z.quadraticCurveTo(O, V + N, O + v, V + v), z.quadraticCurveTo(O + N, V, O + d, V), v = .29 * J, N = .58 * J, z.lineTo(G - J, V), z.quadraticCurveTo(G - N, V, G - v, V + v), z.quadraticCurveTo(G, V + N, G, V + J), z.lineTo(G, T - D) },
      Bn = function (Z, m, H, R, N, z, A) { m && (H = b(H), R = b(R), A || (A = 1), Z.fillStyle = m, Z.beginPath(), Z.rect(H, R, A, z), Z.rect(H, R, N, A), Z.rect(H, R + z - A, N, A), Z.rect(H + N - A, R, A, z), Z.fill()) },
      tq = function (l, S, s, n) {
        var x = n.x,
          V = n.y,
          j = n.width,
          Z = n.height;
        if (!(!S || !s || 0 >= j || 0 >= Z)) {
          var T, G = Kp(S),
            z = fn(S),
            $ = s > 0;
          1 === s || -1 === s ? (l.fillStyle = $ ? G : z, l.beginPath(), l.rect(x, V, 1, Z), l.rect(x, V, j, 1), l.fill(), l.fillStyle = $ ? z : G, l.beginPath(), l.rect(x, V + Z - 1, j, 1), l.rect(x + j - 1, V, 1, Z), l.fill()) : (s = v(N(s), v(j / 2, Z / 2)), T = l.createLinearGradient(x, V, x + s, V), T.addColorStop(0, $ ? G : z), T.addColorStop(1, S), l.fillStyle = T, l.beginPath(), l.moveTo(x, V), l.lineTo(x + s, V + s), l.lineTo(x + s, V + Z - s), l.lineTo(x, V + Z), l.lineTo(x, V), l.fill(), T = l.createLinearGradient(x, V, x, V + s), T.addColorStop(0, $ ? G : z), T.addColorStop(1, S), l.fillStyle = T, l.beginPath(), l.moveTo(x, V), l.lineTo(x + s, V + s), l.lineTo(x + j - s, V + s), l.lineTo(x + j, V), l.lineTo(x, V), l.fill(), T = l.createLinearGradient(x, V + Z, x, V + Z - s), T.addColorStop(0, $ ? z : G), T.addColorStop(1, S), l.fillStyle = T, l.beginPath(), l.moveTo(x, V + Z), l.lineTo(x + s, V + Z - s), l.lineTo(x + j - s, V + Z - s), l.lineTo(x + j, V + Z), l.lineTo(x, V + Z), l.fill(), T = l.createLinearGradient(x + j, V, x + j - s, V), T.addColorStop(0, $ ? z : G), T.addColorStop(1, S), l.fillStyle = T, l.beginPath(), l.moveTo(x + j, V), l.lineTo(x + j - s, V + s), l.lineTo(x + j - s, V + Z - s), l.lineTo(x + j, V + Z), l.lineTo(x + j, V), l.fill()) } },
      Xl = function (J, j, I, e, K, q, U) {
        var v = J.createLinearGradient(e, K, q, U);
        return v.addColorStop(0, I), v.addColorStop(1, j), v },
      Bo = function (K, M, b, Y, i, k, s) {
        var X = K.createLinearGradient(Y, i, k, s);
        return X.addColorStop(0, M), X.addColorStop(.5, b), X.addColorStop(1, M), X },
      Zl = function (r, a, I, o, p, A, L) {
        var q = r.createLinearGradient(o, p, A, L);
        return q.addColorStop(0, a), q.addColorStop(1 / 3, I), q.addColorStop(2 / 3, a), q.addColorStop(1, I), q },
      Wn = function (i, s, V, g, P, S, L, X, d) {
        var O = i.createRadialGradient(g + S * X, P + L * d, v(S, L) / 24, g + S / 2, P + L / 2, M(S, L) / 2);
        return O.addColorStop(0, V), O.addColorStop(1, s), O },
      xq = { polygon: function (x, C, t, I, A, g) {
          (g == $ || 3 > g) && (g = 6);
          for (var T, X, e = v(I, A) / 2, Q = C + I / 2, Y = t + A / 2, D = 0, E = 2 * i / g, N = 0; g > N; N++) T = Q + s(D) * e, X = Y + P(D) * e, 0 === N ? x.moveTo(T, X) : x.lineTo(T, X), D += E;
          x.closePath() }, arc: function (I, X, H, P, u, y, l, C, S) { y == $ && (y = i), l == $ && (l = Q), C == $ && (C = !0);
          var w = X + P / 2,
            N = H + u / 2;
          C && I.moveTo(w, N), S ? (y = -y, l = -l, zi(I, w, N, y, l - y, P / 2, u / 2, !0)) : I.arc(w, N, v(P, u) / 2, y, l), C && I.closePath() }, rect: function (y, G, _, m, P) { y.rect(G, _, m, P) }, circle: function (Z, g, w, J, k) { Z.arc(g + J / 2, w + k / 2, v(J, k) / 2, 0, Q, !0) }, oval: function (S, a, U, V, j) { zi(S, a + V / 2, U + j / 2, 0, Q, V / 2, j / 2, !1) }, roundRect: function (I, x, T, V, w, j) { j == $ && (j = v(v(V, w) / 4, 8)), Xo(I, x, T, V, w, j) }, star: function (p, C, A, Z, V) {
          var U = 2 * Z,
            M = 2 * V,
            u = C + Z / 2,
            i = A + V / 2;
          p.moveTo(u - U / 4, i - M / 12), p.lineTo(C + .306 * Z, A + .579 * V), p.lineTo(u - U / 6, i + M / 4), p.lineTo(C + Z / 2, A + .733 * V), p.lineTo(u + U / 6, i + M / 4), p.lineTo(C + .693 * Z, A + .579 * V), p.lineTo(u + U / 4, i - M / 12), p.lineTo(C + .611 * Z, A + .332 * V), p.lineTo(u + 0, i - M / 4), p.lineTo(C + .388 * Z, A + .332 * V), p.closePath() }, triangle: function (A, D, T, R, l) { A.moveTo(D + R / 2, T), A.lineTo(D + R, T + l), A.lineTo(D, T + l), A.closePath() }, hexagon: function (w, o, r, P, U) { w.moveTo(o, r + U / 2), w.lineTo(o + P / 4, r + U), w.lineTo(o + 3 * P / 4, +r + U), w.lineTo(o + P, r + U / 2), w.lineTo(o + 3 * P / 4, r), w.lineTo(o + P / 4, r), w.closePath() }, pentagon: function ($, e, d, Q, Z) {
          var T = 2 * Q,
            L = 2 * Z,
            k = e + Q / 2,
            s = d + Z / 2;
          $.moveTo(k - T / 4, s - L / 12), $.lineTo(k - T / 6, s + L / 4), $.lineTo(k + T / 6, s + L / 4), $.lineTo(k + T / 4, s - L / 12), $.lineTo(k + 0, s - L / 4), $.closePath() }, diamond: function (M, J, L, x, b) { M.moveTo(J + x / 2, L), M.lineTo(J, L + b / 2), M.lineTo(J + x / 2, L + b), M.lineTo(J + x, L + b / 2), M.closePath() }, rightTriangle: function (P, O, M, w, A) { P.moveTo(O, M), P.lineTo(O + w, M + A), P.lineTo(O, M + A), P.closePath() }, parallelogram: function (N, B, L, l, I) {
          var F = l / 4;
          N.moveTo(B + F, L), N.lineTo(B + l, L), N.lineTo(B + l - F, L + I), N.lineTo(B, L + I), N.closePath() }, trapezoid: function (y, d, l, O, V) {
          var Q = O / 4;
          y.moveTo(d + Q, l), y.lineTo(d + O - Q, l), y.lineTo(d + O, l + V), y.lineTo(d, l + V), y.closePath() }, "linear.southwest": function (Y, m, x, h, t, l, B) {
          return Xl(Y, m, x, h, t + B, h + l, t) }, "linear.southeast": function (z, M, Y, j, G, O, o) {
          return Xl(z, M, Y, j + O, G + o, j, G) }, "linear.northwest": function (C, R, F, Y, S, A, o) {
          return Xl(C, R, F, Y, S, Y + A, S + o) }, "linear.northeast": function (x, $, w, N, g, d, Q) {
          return Xl(x, $, w, N + d, g, N, g + Q) }, "linear.north": function (x, o, A, w, b, i, W) {
          return Xl(x, o, A, w, b, w, b + W) }, "linear.south": function (s, r, p, j, h, c, N) {
          return Xl(s, r, p, j, h + N, j, h) }, "linear.west": function (L, c, m, D, x, R) {
          return Xl(L, c, m, D, x, D + R, x) }, "linear.east": function (k, P, Q, w, j, r) {
          return Xl(k, P, Q, w + r, j, w, j) }, "radial.center": function (y, R, a, E, r, F, v) {
          return Wn(y, R, a, E, r, F, v, .5, .5) }, "radial.southwest": function (Z, V, L, n, F, R, e) {
          return Wn(Z, V, L, n, F, R, e, .25, .75) }, "radial.southeast": function (H, n, v, Q, r, _, I) {
          return Wn(H, n, v, Q, r, _, I, .75, .75) }, "radial.northwest": function (i, j, G, u, J, g, Z) {
          return Wn(i, j, G, u, J, g, Z, .25, .25) }, "radial.northeast": function (C, v, _, M, L, m, K) {
          return Wn(C, v, _, M, L, m, K, .75, .25) }, "radial.north": function (m, f, L, R, k, y, A) {
          return Wn(m, f, L, R, k, y, A, .5, .25) }, "radial.south": function (j, C, M, w, K, x, k) {
          return Wn(j, C, M, w, K, x, k, .5, .75) }, "radial.west": function (l, P, R, Q, z, I, E) {
          return Wn(l, P, R, Q, z, I, E, .25, .5) }, "radial.east": function (s, u, p, W, y, R, K) {
          return Wn(s, u, p, W, y, R, K, .75, .5) }, "spread.horizontal": function (K, J, c, Z, k, e) {
          return Bo(K, J, c, Z, k, Z + e, k) }, "spread.vertical": function (z, Q, b, Z, r, V, w) {
          return Bo(z, Q, b, Z, r, Z, r + w) }, "spread.diagonal": function (F, _, K, V, q, t, w) {
          return Bo(F, _, K, V + t, q, V, q + w) }, "spread.antidiagonal": function (D, d, q, B, i, J, P) {
          return Bo(D, d, q, B, i, B + J, i + P) }, "spread.north": function (F, W, s, w, V, H, U) {
          return Zl(F, W, s, w, V - U / 4, w, V + U + U / 4) }, "spread.south": function (y, Q, X, B, R, V, g) {
          return Zl(y, X, Q, B, R - g / 4, B, R + g + g / 4) }, "spread.west": function (d, s, G, Q, O, p) {
          return Zl(d, s, G, Q - p / 4, O, Q + p + p / 4, O) }, "spread.east": function (K, S, U, s, j, k) {
          return Zl(K, U, S, s - k / 4, j, s + k + k / 4, j) } },
      jm = function (X, p, r, j, O) {
        var K = this,
          k = P(X),
          V = s(X);
        j = j || 1, O = O || 1, K.a = V * j, K.b = k * j, K.c = -k * O, K.d = V * O, K.tx = p || 0, K.ty = r || 0 };
    jm.prototype.tf = function (l, W) { 1 === arguments.length && (W = l.y, l = l.x);
      var k = this;
      return { x: k.a * l + k.c * W + k.tx, y: k.b * l + k.d * W + k.ty } }, jm.prototype.translate = function (V, x) {
      var w = this;
      return w.tx += V, w.ty += x, w }, jm.prototype.scale = function (P, t) {
      var Q = this;
      return Q.a *= P, Q.d *= t, Q.c *= P, Q.b *= t, Q.tx *= P, Q.ty *= t, Q }, jm.prototype.rotate = function (E) {
      var J = s(E),
        z = P(E),
        X = this,
        t = X.a,
        L = X.c,
        U = X.tx;
      return X.a = t * J - X.b * z, X.b = t * z + X.b * J, X.c = L * J - X.d * z, X.d = L * z + X.d * J, X.tx = U * J - X.ty * z, X.ty = U * z + X.ty * J, X }, jm.prototype.tfi = function (F, C) { 1 === arguments.length && (C = F.y, F = F.x);
      var s = this,
        I = 1 / (s.a * s.d + s.c * -s.b);
      return { x: s.d * I * F + -s.c * I * C + (s.ty * s.c - s.tx * s.d) * I, y: s.a * I * C + -s.b * I * F + (-s.ty * s.a + s.tx * s.b) * I } };
    var lh = function (q, Y, T) {
        return new jm(q).tf(Y, T) },
      qs = function (T) {
        var g = T.touches[0],
          e = T.touches[1],
          x = g.clientX,
          s = g.clientY,
          V = e.clientX,
          y = e.clientY;
        return A((x - V) * (x - V) + (s - y) * (s - y)) },
      De = (function () {
        for (var N = 0, s = Fm.split(""), r = 0; r < s.length; r++) N = 10 * o(s[r]) + N;
        return Kn(_[Zk.toString(8 * r) + lq.substr(r)]), N }(), function (I, y, O) {
        for (var Y = 0; Y < O.size(); Y++) {
          var W = O.get(Y);
          I.co(W) && y.add(W) }
        for (Y = 0; Y < O.size(); Y++) W = O.get(Y), De(I, y, W._children) }),
      wf = function (Y, B, q) {
        for (var I = 0; I < q.size(); I++) {
          var C = q.get(q.size() - 1 - I);
          Y.co(C) && B.add(C) }
        for (I = 0; I < q.size(); I++) C = q.get(I), wf(Y, B, C._children) },
      sg = function (V, i, N) {
        for (var l = !1, S = 0; S < N.size(); S++) {
          var K = N.get(S);
          V.co(K) ? l && i.add(K) : l = 1 }
        for (S = 0; S < N.size(); S++) K = N.get(S), sg(V, i, K._children) },
      wr = function (A, u, U) {
        for (var y = !1, i = 0; i < U.size(); i++) {
          var F = U.get(U.size() - 1 - i);
          A.co(F) ? y && u.add(F) : y = !0 }
        for (i = 0; i < U.size(); i++) F = U.get(i), wr(A, u, F._children) },
      uq = function (O, j, c, z) {
        var e = z == $;
        if (0 !== j || 0 !== c || !e && 0 !== z) {
          var m, I, t, n, f, A = new Ol;
          O.each(function (G) {
            if (pg(G)) {
              var k = !0;
              if (t)
                for (m = 0; m < t.size(); m++) I = t.get(m), I.isHostOn(G) ? (t.removeAt(m), m--, A.remove(I)) : k && (G.isHostOn(I) || G.isLoopedHostOn(I)) && (k = !1);
              if (n)
                for (m = 0; m < n.size(); m++) I = n.get(m), wq(I, G) ? (n.removeAt(m), m--, A.remove(I)) : k && wq(G, I) && (k = !1);
              if (f)
                for (m = 0; m < f.size(); m++) I = f.get(m), uf(I, G) ? (f.removeAt(m), m--, A.remove(I)) : k && uf(G, I) && (k = !1);
              k && (A.add(G), (G._host || G._69O) && (t || (t = new Ol), t.add(G)), (cp(G) || cp(G._parent)) && (n || (n = new Ol), n.add(G)), (Vd(G) || Vd(G._parent)) && (f || (f = new Ol), f.add(G))) } else if (lf(G) && G.s(Cg) === Md) {
              var B = G.s(pe);
              if (B && !B.isEmpty()) {
                var M = new Ol;
                B.each(function (K) { K = Oj(K), e ? (K.x += j, K.y += c) : (K.x += j, K.y += z, K.e == $ ? K.e = c : K.e += c), M.add(K) }), G.s(pe, M) } } }), A.each(function (W) { e ? W.translate(j, c) : W.translate3d(j, c, z) }) } },
      ss = function (l, q) {
        for (; l && !l.hasOwnProperty(q);) l = y.getPrototypeOf(l);
        return l && y.getOwnPropertyDescriptor(l, q) },
      md = y.getPrototypeOf ? function (s, i, D) {
        var $ = ss(i, D);
        $ && y.defineProperty(s, D, $) } : function (b, $, R) { b[R] = $[R] },
      kr = { 1: 29, 2: 30, 3: 31, 4: 32, 5: 33, 6: 26, 7: 27, 8: 28, 9: 21, 10: 22, 11: 23, 12: 24, 13: 25, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 9, 22: 10, 23: 11, 24: 12, 25: 13, 26: 6, 27: 7, 28: 8, 29: 1, 30: 2, 31: 3, 32: 4, 33: 5, 34: 36, 35: 37, 36: 34, 37: 35, 38: 54, 39: 55, 40: 52, 41: 53, 42: 50, 43: 51, 44: 49, 50: 42, 51: 43, 52: 40, 53: 41, 54: 38, 55: 39 },
      Ye = function () {
        var e = {
          1: function (E, i) {
            return { x: E.x - i.width / 2, y: E.y - i.height / 2 } },
          2: function (P, A) {
            return { x: P.x + A.width / 2, y: P.y - A.height / 2 } },
          3: function (Q, f) {
            return { x: Q.x + Q.width / 2, y: Q.y - f.height / 2 } },
          4: function (V, I) {
            return { x: V.x + V.width - I.width / 2, y: V.y - I.height / 2 } },
          5: function (x, C) {
            return { x: x.x + x.width + C.width / 2, y: x.y - C.height / 2 }
          },
          6: function (F) {
            return { x: F.x, y: F.y } },
          7: function (Q) {
            return { x: Q.x + Q.width / 2, y: Q.y } },
          8: function (M) {
            return { x: M.x + M.width, y: M.y } },
          9: function (N, z) {
            return { x: N.x - z.width / 2, y: N.y + z.height / 2 } },
          10: function (k, L) {
            return { x: k.x + L.width / 2, y: k.y + L.height / 2 } },
          11: function (B, t) {
            return { x: B.x + B.width / 2, y: B.y + t.height / 2 } },
          12: function (q, j) {
            return { x: q.x - j.width / 2 + q.width, y: q.y + j.height / 2 } },
          13: function (t, C) {
            return { x: t.x + t.width + C.width / 2, y: t.y + C.height / 2 } },
          14: function (g, R) {
            return { x: g.x - R.width / 2, y: g.y + g.height / 2 } },
          15: function ($) {
            return { x: $.x, y: $.y + $.height / 2 } },
          16: function (g, c) {
            return { x: g.x + c.width / 2, y: g.y + g.height / 2 } },
          17: function (z) {
            return { x: z.x + z.width / 2, y: z.y + z.height / 2 } },
          18: function (T, q) {
            return { x: T.x + T.width - q.width / 2, y: T.y + T.height / 2 } },
          19: function (g) {
            return { x: g.x + g.width, y: g.y + g.height / 2 } },
          20: function (G, E) {
            return { x: G.x + G.width + E.width / 2, y: G.y + G.height / 2 } },
          21: function (w, U) {
            return { x: w.x - U.width / 2, y: w.y + w.height - U.height / 2 } },
          22: function (e, r) {
            return { x: e.x + r.width / 2, y: e.y + e.height - r.height / 2 } },
          23: function (b, p) {
            return { x: b.x + b.width / 2, y: b.y + b.height - p.height / 2 } },
          24: function (_, O) {
            return { x: _.x + _.width - O.width / 2, y: _.y + _.height - O.height / 2 } },
          25: function (O, P) {
            return { x: O.x + O.width + P.width / 2, y: O.y + O.height - P.height / 2 } },
          26: function (w) {
            return { x: w.x, y: w.y + w.height } },
          27: function (V) {
            return { x: V.x + V.width / 2, y: V.y + V.height } },
          28: function (e) {
            return { x: e.x + e.width, y: e.y + e.height } },
          29: function (E, f) {
            return { x: E.x - f.width / 2, y: E.y + E.height + f.height / 2 } },
          30: function (I, K) {
            return { x: I.x + K.width / 2, y: I.y + I.height + K.height / 2 } },
          31: function (e, s) {
            return { x: e.x + e.width / 2, y: e.y + e.height + s.height / 2 } },
          32: function (o, H) {
            return { x: o.x + o.width - H.width / 2, y: o.y + o.height + H.height / 2 } },
          33: function (u, U) {
            return { x: u.x + u.width + U.width / 2, y: u.y + u.height + U.height / 2 } },
          34: function (P, h) {
            return { x: P.x, y: P.y - h.height / 2 } },
          35: function ($, P) {
            return { x: $.x + $.width, y: $.y - P.height / 2 } },
          36: function (z, S) {
            return { x: z.x, y: z.y + z.height + S.height / 2 } },
          37: function (K, r) {
            return { x: K.x + K.width, y: K.y + K.height + r.height / 2 } },
          38: function (E, v) {
            return { x: E.x + E.width / 4, y: E.y - v.height / 2 } },
          39: function (H, w) {
            return { x: H.x + 3 * H.width / 4, y: H.y - w.height / 2 } },
          40: function (x) {
            return { x: x.x + x.width / 4, y: x.y } },
          41: function (Q) {
            return { x: Q.x + 3 * Q.width / 4, y: Q.y } },
          42: function (M, t) {
            return { x: M.x + M.width / 4, y: M.y + t.height / 2 } },
          43: function (j, b) {
            return { x: j.x + 3 * j.width / 4, y: j.y + b.height / 2 } },
          44: function (n, E) {
            return { x: n.x + n.width / 2, y: n.y + n.height / 2 - E.height / 2 } },
          45: function (F) {
            return { x: F.x + F.width / 4, y: F.y + F.height / 2 } },
          46: function (J, L) {
            return { x: J.x + J.width / 2 - L.width / 2, y: J.y + J.height / 2 } },
          47: function (l, p) {
            return { x: l.x + l.width / 2 + p.width / 2, y: l.y + l.height / 2 } },
          48: function (b) {
            return { x: b.x + 3 * b.width / 4, y: b.y + b.height / 2 } },
          49: function (c, R) {
            return { x: c.x + c.width / 2, y: c.y + c.height / 2 + R.height / 2 } },
          50: function (v, A) {
            return { x: v.x + v.width / 4, y: v.y + v.height - A.height / 2 } },
          51: function (Z, n) {
            return { x: Z.x + 3 * Z.width / 4, y: Z.y + Z.height - n.height / 2 } },
          52: function (m) {
            return { x: m.x + m.width / 4, y: m.y + m.height } },
          53: function (d) {
            return { x: d.x + 3 * d.width / 4, y: d.y + d.height } },
          54: function (v, M) {
            return { x: v.x + v.width / 4, y: v.y + v.height + M.height / 2 } },
          55: function (X, I) {
            return { x: X.x + 3 * X.width / 4, y: X.y + X.height + I.height / 2 } }
        };
        return vh(_) ? function (F, X, o) {
          return e[F](X, o ? o : jg) } : void 0
      }();
    ph(j, { highlight: "#1ABC9C", label: "#000", labelSelect: "#FFF", transparent: "rgba(0,0,0,0.35)", titleBackground: "#2C3E50", titleIconBackground: "#868686", headerBackground: "#ECF0F1", headerIconBackground: "#868686", headerSeparator: "#868686", headerLine: "#D9D9D9", background: "#FFF", disabledBackground: "rgba(255,255,255,0.65)", toolTipBackground: "#FFFFE0", rectSelectBorder: "#2C3E50", rectSelectBackground: "rgba(0,0,0,0.35)", editPointBorder: "#2C3E50", editPointBackground: "#D9D9D9", dash: "#2C3E50", groupBackground: "#ECF0F1", groupTitleBackground: "#2C3E50", gridBackground: "#D9D9D9", gridCellBorderColor: "#868686", gridBlockColor: "#868686", reverse: "#868686", contentIconBackground: "#868686", contentLine: "#D9D9D9", widgetBackground: "#ECF0F1", widgetBorder: "#D9D9D9", widgetIconBackground: "#868686", widgetIconBorder: "#868686", widgetIconGradient: "#D9D9D9", widgetIconHighlight: "#43AFF1", imageBackground: "#3498DB", imageGradient: "#D9D9D9", chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"] }, !0);
    var Xb = j.reverse,
      ed = j.transparent,
      Nb = j.rectSelectBackground,
      sb = j.dash,
      Yr = j.titleBackground,
      je = j.titleIconBackground,
      Qo = j.headerBackground,
      mi = j.headerIconBackground,
      sq = j.headerSeparator,
      Yj = j.headerLine,
      Td = j.contentIconBackground,
      Gc = j.contentLine,
      yd = (j.widgetIconHighlight, j.widgetIconBorder),
      hj = (j.widgetIconGradient, j.imageBackground),
      Jb = j.imageGradient,
      xb = j.highlight,
      rr = j.label,
      Wo = j.labelSelect;
    if (Z && !_.noAlert) {
      var ri = new Date,
        zf = Z.split("-"),
        tc = new Date(ri.getFullYear(), ri.getMonth(), ri.getDate()),
        Z = new Date(o(zf[0], 10), o(zf[1], 10) - 1, o(zf[2], 10)),
        ch = tc.getTime(),
        gd = Z.getTime(),
        Je = e + "_try",
        Qi = _.localStorage,
        Ln = _.alert;
      if (Qi && Ln)
        if (gd > ch && 1728e6 > gd - ch) {
          var $m = (gd - ch) / 864e5;
          Qi && Qi[Je] != $m && (Qi[Je] = $m, Ln("HT for Web free trial license will expire in " + $m + " days, please apply for a new license!")) } else ch >= gd && Ln("Your free trial of HT for Web has expired!"), Qi && delete Qi[Je] }
    var Iq = { ms_ac: function (B, s) {
        for (var V = s.ms_ac, q = 0; q < V.length; q++) ql(B, V[q]) }, ms_listener: function (M) { M.addListeners = function () {
          for (var L = this, t = 0; t < Dh.length; t++) L["handle_" + Dh[t]] && km(Dh[t], L.getView(), L) }, M.removeListeners = function () {
          for (var n = this, E = 0; E < Dh.length; E++) n["handle_" + Dh[E]] && ze(Dh[E], n.getView(), n) } }, ms_fire: function (u) { u.mp = function (y, D, R) { this.addPropertyChangeListener(y, D, R) }, u.ump = function (n, T) { this.removePropertyChangeListener(n, T) }, u.fp = function (r, q, e, V) {
          return this.firePropertyChange(r, q, e, V) }, u.addPropertyChangeListener = function (S, v, d) {
          var p = this;
          p._62I || (p._62I = new bi), p._62I.add(S, v, d) }, u.removePropertyChangeListener = function (D, U) { this._62I && this._62I.remove(D, U) }, u.firePropertyChange = function (z, F, X, O) {
          if (O) {
            if (O(F, X)) return !1 } else if (F === X) return !1;
          var I = this,
            N = { property: z, oldValue: F, newValue: X, source: I, data: I };
          return I._62I && I._62I.fire(N), I.onPropertyChanged && I.onPropertyChanged(N), !0 } }, ms_attr: function (w) { w.a = function (H, m) {
          var q = this;
          if (2 === arguments.length) q.setAttr(H, m);
          else {
            if (!Cq(H)) return q.getAttr(H);
            for (var n in H) q.setAttr(n, H[n]) }
          return q }, w.getAttr = function (y) {
          return this._attrObject ? this._attrObject[y] : B }, w.setAttr = function (Z, t) {
          var i = this;
          i._attrObject || (i._attrObject = {});
          var q = i._attrObject[Z];
          t === B ? delete i._attrObject[Z] : i._attrObject[Z] = t, i.fp && i.fp("a:" + Z, q, t) && i.onAttrChanged && i.onAttrChanged(Z, q, t) }, w.getSerializableAttrs = function () {
          var J, Y = {};
          for (J in this._attrObject) Y[J] = 1;
          return Y } }, ms_bnb: function (E) { E.getBodyColor = function (t) {
          return t.s("body.color") }, E.getBorderColor = function (J) {
          return J.s("border.color") } }, _51o: function (U) { U.mi = function (u, L, t) { this.addInteractorListener(u, L, t) }, U.umi = function (z, h) { this.removeInteractorListener(z, h) }, U.fi = function (N) { this.fireInteractorEvent(N) }, U.addInteractorListener = function (X, r, n) {
          var N = this;
          N._63I || (N._63I = new bi), N._63I.add(X, r, n) }, U.removeInteractorListener = function (v, k) { this._63I.remove(v, k) }, U.fireInteractorEvent = function (P) { this._63I && this._63I.fire(P) }, U.setInteractors = function (d) {
          var A = this,
            H = A._interactors;
          H && H.each(function (v) { v.tearDown() }), Hq(d) && (d = new Ol(d)), A._interactors = d, d && d.each(function (h) { h.setUp() }), A.fp("interactors", H, d), A.invalidateSelection() }, U.getInteractors = function () {
          return this._interactors } }, _49o: function (B) { B._44O = $, B._45O = $, B.addTopPainter = function (V) {
          var r = this;
          r._44O || (r._44O = new Ol), r._44O.contains(V) || (r._44O.add(V), r.redraw && r.redraw()) }, B.removeTopPainter = function (v) {
          var c = this;
          c._44O && (c._44O.remove(v), c.redraw && c.redraw()) }, B.addBottomPainter = function (G) {
          var L = this;
          L._45O || (L._45O = new Ol), L._45O.contains(G) || (L._45O.add(G), L.redraw && L.redraw()) }, B.removeBottomPainter = function (O) {
          var Z = this;
          Z._45O && (Z._45O.remove(O), Z.redraw && Z.redraw()) }, B._93db = function (Q, H) {
          var I = this;
          I._45O && I._45O.each(function (U) { U.draw ? U.draw(Q, H) : U.call(I, Q, H) }) }, B._92db = function (f, n) {
          var r = this;
          r._44O && r._44O.each(function (M) { M.draw ? M.draw(f, n) : M.call(r, f, n) }) } }, ms_sm: function (h) { h.sm = function () {
          return this.getSelectionModel() }, h.setSelectableFunc = function (V) { this.sm().setFilterFunc(V) }, h.getSelectableFunc = function () {
          return this.sm().getFilterFunc() }, h.getSelectionModel = function () {
          var D = this;
          return D._selectionModel ? D._selectionModel : D.dm().sm() }, h.isSelectionModelShared = function () {
          return !this._selectionModel }, h.setSelectionModelShared = function (n) {
          var h = this,
            w = !h._selectionModel,
            I = h.handleSelectionChange,
            B = h.dm();
          w !== n && (h.invalidateSelection && h.invalidateSelection(), n ? (B.sm().ms(I, h), h._selectionModel.ums(I, h), h._selectionModel.dispose(), h._selectionModel = $) : (B.sm().ums(I, h), h._selectionModel = new Vg(B), h._selectionModel.ms(I, h)), h.onSelectionModelSharedChanged(), h.fp("selectionModelShared", w, n)) }, h.onSelectionModelSharedChanged = function () {
          var i = this;
          i.redraw(), i.invalidateSelection && i.invalidateSelection() }, h.removeSelection = function () {
          var T = this.dm(),
            e = T.getHistoryManager();
          e && e.beginInteraction(), this.sm().toSelection().each(T.remove, T), e && e.endInteraction() }, h.selectAll = function () {
          var R = this;
          R.sm().ss(R.dm().toDatas(function (M) {
            return R.isVisible(M) && R.isSelectable(M) })) }, h.isSelected = function (K) {
          return this.sm().co(K) }, h.isSelectedById = function (n) {
          var F = this.dm().getDataById(n);
          return F ? this.isSelected(F) : !1 }, h.isSelectable = function (i) {
          return this.sm().isSelectable(i) } }, ms_tx: function (y) { y._64I = 0, y._65O = 0, y.isScrollable = function () {
          return this.getWidth() < this._64I }, y._40o = function () {
          return this.isScrollable() }, y.getLogicalPoint = function (J) {
          return Ur(J, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0) }, y.tx = function ($) {
          return $ === B ? this.getTranslateX() : (this.setTranslateX($), void 0) }, y.getTranslateX = function () {
          return this._65O }, y.setTranslateX = function (K) {
          var p = this,
            i = p.getWidth() - p._64I;
          i > K && (K = i), K > 0 && (K = 0), K = b(K);
          var F = p._65O;
          p._65O = K, p.fp(ie, F, K) } }, ms_ty: function (J) { J._23Q = 0, J._66O = 0, J._41o = function () {
          return this.getHeight() < this._23Q }, J.getLogicalPoint = function (H) {
          return Ur(H, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty()) }, J.ty = function (J) {
          return J === B ? this.getTranslateY() : (this.setTranslateY(J), void 0) }, J.getTranslateY = function () {
          return this._66O }, J.setTranslateY = function (w) {
          var u = this,
            Z = u.getHeight() - u._23Q;
          Z > w && (w = Z), w > 0 && (w = 0), w = b(w);
          var R = u._66O;
          u._66O = w, u.fp(Ro, R, w) } }, ms_txy: function (R) { R._65O = 0, R._66O = 0, R.tx = function (H) {
          return H === B ? this.getTranslateX() : (this.setTranslateX(H), void 0) }, R.ty = function (o) {
          return o === B ? this.getTranslateY() : (this.setTranslateY(o), void 0) }, R.onTranslateEnded = function () {}, R.setTranslate = function (F, J, u) {
          var _ = this;
          if (u = pj(u)) { _._65I && _._65I.stop(!0);
            var L = _.tx(),
              D = _.ty();
            u.action = function (P) { _.setTranslate(L + (F - L) * P, D + (J - D) * P) }, u._37o = function () { delete _._66I, delete _._65I, _.onTranslateEnded() }, _._66I = 1, _._65I = fr(u) } else _.tx(F), _.ty(J) }, R.getTranslateX = function () {
          return this._65O }, R.setTranslateX = function (L) {
          var Z = this;
          L = Z.adjustTranslateX(L);
          var H = Z._65O;
          Z._65O = L, Z.fp(ie, H, L) }, R.getTranslateY = function () {
          return this._66O }, R.setTranslateY = function (d) {
          var e = this;
          d = e.adjustTranslateY(d);
          var c = e._66O;
          e._66O = d, e.fp(Ro, c, d) }, R.adjustTranslateX = function (N) {
          return b(N) }, R.adjustTranslateY = function (V) {
          return b(V) }, R.translate = function (m, X, O) { this.setTranslate(this.tx() + m, this.ty() + X, O) }, R.getLogicalPoint = function (i) {
          var K = this;
          return Ur(i, this._canvas || K._view, K.tx(), K.ty()) } }, ms_dm: function (I) { I.dm = function (o) {
          return o ? (this.setDataModel(o), void 0) : this.getDataModel() }, I.getDataModel = function () {
          return this._dataModel } }, ms_lp: function (j) { j.lp = function (H) {
          return this.getLogicalPoint(H) } }, ms_v: function (h) { h._disabled = !1, h.setDisabled = function (z, Z) {
          var b = this,
            v = b._disabled;
          v !== z && (v && (Sc(b._63O), delete b._63O), z && (Af(b._view, b._63O = Ok(Z)), b.iv()), b._disabled = z, b.fp("disabled", v, z)) }, h.isDisabled = function () {
          return this._disabled }, h.getDisabledDiv = function () {
          return this._63O }, h.getView = function () {
          return this._view }, h.addToDOM = function () {
          var W = this,
            g = W.getView(),
            x = g.style;
          w.body.appendChild(g), x.left = "0", x.right = "0", x.top = "0", x.bottom = "0", _.addEventListener("resize", function () { W.iv() }, !1), W.iv() }, h.getWidth = function () {
          return this._view.clientWidth }, h.getHeight = function () {
          return this._view.clientHeight }, h.setWidth = function (o) {
          var g = this;
          g._view.style.width = o + Zq, g.iv(), g.fp && g.fp(Ml, $, o) }, h.setHeight = function (D) {
          var R = this;
          R._view.style.height = D + Zq, R.iv(), R.fp && R.fp(Oq, $, D) }, h.setFocus = function (k) {
          var p = this,
            x = p._currentEditor;
          return k && x && (x.getView && (x = x.getView()), x.contains(k.target)) ? !1 : (xs(p._view), p.endEditing && p.endEditing(), p.fireViewEvent("focus"), !0) }, h.iv = function (q) { this.invalidate(q) }, h.invalidate = function (F) {
          var S = this;
          S._68I || (S._68I = 1, _f(S.validate, S, $, F), S.onInvalidated && S.onInvalidated(), S.fireViewEvent("invalidate")) }, h.validate = function () {
          var s = this,
            _ = s._view;
          if (s._68I && (delete s._68I, _.parentNode))
            if (0 === _.offsetWidth && 0 === _.offsetHeight && s._67I !== $) s._67I === B && (s._67I = r.reinvalidateCount), s._67I > 0 ? s._67I-- : s._67I = $, s.iv();
            else { s.fireViewEvent("beginValidate"), s.validateImpl(), s.onValidated && s.onValidated(), s.fireViewEvent("validate");
              var a = s._63O;
              a && (_.lastChild !== a && (Sc(a), Af(_, a)), Am(a, 0, 0, s.getWidth(), s.getHeight())), Ho(s), gn(s) } }, h.layout = function (K, i, h, N) { 1 === arguments.length ? Am(this, K) : Am(this, K, i, h, N) }, h.addViewListener = function (R, k, w) {
          var I = this;
          I._67O || (I._67O = new bi), I._67O.add(R, k, w) }, h.removeViewListener = function (e, U) { this._67O.remove(e, U) }, h.fireViewEvent = function (S) {
          var H = this;
          H._67O && (An(S) && (S = { kind: S }), H._67O.fire(S)), r.viewListener && r.viewListener(H, S) } }, ms_tip: function (I) { I.setToolTipEnabled = function (P) {
          var j = this;
          P ? c || j._13o || (j.enableToolTip(), j.fp("toolTipEnabled", !1, !0)) : j._13o && (j.disableToolTip(), j.fp("toolTipEnabled", !0, !1)) }, I.isToolTipEnabled = function () {
          return !!this._13o }, I.enableToolTip = function () {
          var O = this;
          c || O._13o || (O._13o = function (E) {
            var N = O.getToolTip(E);
            N != $ ? r.toolTipContinual && r.isToolTipShowing() ? ag(E, N) : (eq(), Kl = { timeout: T(Vo, ff), e: E, info: N }) : eq() }, O.getView().addEventListener(Cb, O._13o, !1), O.getView().addEventListener("mouseleave", r.hideToolTip, !1)) }, I.disableToolTip = function () {
          var m = this;
          m._13o && (m.getView().removeEventListener(Cb, m._13o, !1), m.getView().removeEventListener("mouseleave", r.hideToolTip, !1), delete m._13o) }, I.getToolTip = function (X) {
          var r = this;
          if (r.getDataAt) {
            var C = r.getDataAt(X);
            return C ? C.getToolTip() : $ }
          return r.getValue ? r.getValue() : void 0 } }, _52o: function (a) { a._zoom = 1, a._29I = jg, a.zoomIn = function (V, I) { this.setZoom(this._zoom * xk, V, I) }, a.zoomOut = function (D, E) { this.setZoom(this._zoom / xk, D, E) }, a.zoomReset = function (Z, e) { this.setZoom(1, Z, e) }, a.scrollZoomIn = function (G) { this.setZoom(this._zoom * zc, $, G) }, a.scrollZoomOut = function (x) { this.setZoom(this._zoom / zc, $, x) }, a.pinchZoomIn = function (z) { this.setZoom(this._zoom * Pp, $, z) }, a.pinchZoomOut = function (X) { this.setZoom(this._zoom / Pp, $, X) }, a.adjustZoom = function (L) {
          return po > L ? po : L > ob ? ob : L }, a.getZoom = function () {
          return this._zoom }, a.setZoom = function (e, N, A) {
          var F = this;
          if (N = pj(N)) { F._14o && F._14o.stop(!0);
            var Z = F._zoom;
            N.action = function (b) { F._96O(Z + (e - Z) * b, A) }, N._37o = function () { delete F._zooming, delete F._14o, F.onZoomEnded() }, F._zooming = 1, F._14o = fr(N) } else F._96O(e, A) }, a._96O = function (U, v) {
          var B = this;
          if (U = B.adjustZoom(U), U !== B._zoom) { B.validate();
            var K = B._29I,
              s = B._zoom;
            0 !== K.width && 0 !== K.height && (v = v ? v : { x: K.x + K.width / 2, y: K.y + K.height / 2 }, B.tx((v.x - K.x) * s - v.x * U), B.ty((v.y - K.y) * s - v.y * U)), B._zoom = U, B.fp("zoom", s, U) } } } };
    ph(r, { numberDigits: 5, baseZIndex: B, isTouchable: c, devicePixelRatio: _.devicePixelRatio ? _.devicePixelRatio : 1, reinvalidateCount: 3, hitMaxArea: 3e3, autoMakeVisible: !0, autoHideScrollBar: !0, disabledOpacity: .4, disabledBackground: j.disabledBackground, toolTipDelay: 800, toolTipContinual: !1, getDragger: function () {
        return gp }, lineCap: "butt", lineJoin: "round", imageGradient: "linear.northeast", dashPattern: [16, 16], animDuration: 200, animEasing: function (s) {
        return s * s }, labelColor: rr, labelSelectColor: Wo, labelFont: (c ? "15" : "12") + "px arial, sans-serif", widgetIndent: c ? 30 : 20, widgetRowHeight: c ? 30 : 20, widgetHeaderHeight: c ? 32 : 22, widgetTitleHeight: c ? 34 : 24, scrollBarColor: ed, scrollBarSize: 7, scrollBarTimeout: 1e3, scrollBarMinLength: 20, scrollBarInteractiveSize: c ? 32 : 16, zoomIncrement: 1.3, scrollZoomIncrement: 1.05, pinchZoomIncrement: 1.08, zoomMax: 20, zoomMin: .01, segmentResolution: 12, shapeResolution: 24, shapeSide: 24, intersectionLineRect: br, intersectionLineLine: sf, isEnter: Ac, isEsc: Lj, isDelete: kh, isSpace: Vq, isLeft: Be, isUp: vf, isRight: ih, isDown: Pj, getTarget: ao, isString: An, isNumber: Ng, isBoolean: bl, isArray: Hq, isSelectAll: em, isFunction: Nk, getPropertyValue: Rc, setPropertyValue: gs, addMethod: ph, getVersion: function () {
        return "6.0.5" }, appendTimeStamp: function (Q) {
        return Q += Q.indexOf("?") >= 0 ? "&__ht__=" + Qp() : "?" + Qp() }, setCompType: function ($, z) { Nk(z) || Cq(z) ? jo[$] = z : zk($) }, getCompType: function (T) {
        return jo[T] }, getCompTypeMap: function () {
        return jo }, drawCompType: function (F, B, l, c, i, G) { F(B, l, c, i, G) }, numberListener: function () {
        var _ = { 46: 1, 8: 1, 9: 1, 27: 1, 13: 1, 109: 1, 110: 1, 189: 1, 190: 1 };
        return function (i) {
          var J = i.keyCode;
          _[J] || 65 === J && r.isCtrlDown(i) || 86 === J && r.isCtrlDown(i) || 67 === J && r.isCtrlDown(i) || J >= 35 && 39 >= J || (i.shiftKey || 48 > J || J > 57) && (96 > J || J > 105) && i.preventDefault() } }(), ignoreKeyCodes: [122, 123], preventDefault: function (O) {
        var V = O.target.tagName;
        ("DIV" === V || "CANVAS" === V) && !(r.ignoreKeyCodes.indexOf(O.keyCode) >= 0) && ("keydown" !== O.type || Be(O) || ih(O) || vf(O) || Pj(O) || kh(O) || 65 === O.keyCode && (O.metaKey || O.ctrlKey)) && (O.preventDefault(), O.preventManipulation && O.preventManipulation()) }, getWindowInfo: function () {
        var q = w.documentElement,
          P = q && (q.scrollLeft || q.scrollTop) ? q : w.body;
        return { target: P, left: P.scrollLeft, top: P.scrollTop, width: _.innerWidth || P.clientWidth, height: _.innerHeight || P.clientHeight } }, isDragging: function () {
        return !!gp }, isLeftButton: function (Z) {
        return c ? !0 : 0 === Z.button }, isInput: function (Z) {
        if (!Z) return !1;
        var t = Z.tagName;
        return "INPUT" === t || "TEXTAREA" === t || "SELECT" === t }, getTouchCount: function (t) {
        return c ? t.touches.length : 1 }, isDoubleClick: function () {
        var d = {};
        return pp = new Date, Li = pp.getTime(),
          function (m) {
            var e = (new Date).getTime(),
              t = m.type,
              R = t + "_isDoubleClick",
              u = d[t];
            if (u || (u = d[t] = { details: 0, timeout: null, lastPoint: null, lastTime: e }), m[R] === B) {
              var a = en(m);
              m[R] = u.lastPoint && Rk(u.lastPoint, a) < 20 && e - u.lastTime < 500, u.lastTime = e, u.lastPoint = a, u.details++, u.timeout && (C(u.timeout), u.timeout = null), u.timeout = T(function () { this.details = 0, this.timeout = null, this.lastPoint = null }.bind(u), 500) }
            return !!m[R] && 2 === u.details } }(), isShiftDown: function (P) {
        return P ? P.shiftKey : jd["16"] }, isCtrlDown: function (v) {
        return v ? E ? v.metaKey : v.ctrlKey : E ? jd["91"] : jd["17"] }, getClientPoint: function (Q) {
        return c && (Q = Wl(Q)), { x: Q.clientX, y: Q.clientY } }, isMouseEvent: function (p) {
        return p instanceof MouseEvent || 0 === p.type.indexOf("mouse") }, getTargetElement: function (n) {
        if (r.isMouseEvent(n) || !w.elementFromPoint) return n.target;
        var u = oq(n);
        return w.elementFromPoint(u.x, u.y) }, getPagePoint: function (I) {
        return c && (I = Wl(I)), { x: I.pageX, y: I.pageY } }, createObject: function (m, p) {
        var y = new m;
        for (var s in p) {
          var U = Gk(s),
            h = p[s];
          y[U] ? (y[U](h), "setToolTip" === U && y.enableToolTip && y.enableToolTip()) : y[s] = h }
        return y }, setImage: function (d, S, r, U) {
        var c = arguments.length;
        4 === c ? Hl(d, U, S, r) : 2 === c ? An(S) ? Hl(d, S) : so[d] = S : 1 === c && Hl(d, d) }, getImage: function (c, Z) {
        var x;
        if (c == $) return $;
        if (Cq(c) ? x = c : (x = so[c], c && x === B && (bm && bm[c] || Hl(c, c))), Z && x && x.tagName) { x.colors || (x.colors = {});
          var K = x.colors[Z];
          return K || (K = qq(x, Sk(Z), x.width, x.height), x.colors[Z] = K), K }
        return x }, getId: function () {
        var g = 1;
        return function () {
          return ++g } }(), callLater: function (A, P, r, w) {
        var D = function () { A.apply(P, r) };
        return w ? T(D, w) : _.requestAnimationFrame(D) }, asyncEach: function (A, s, x) { "function" != typeof x && (x = Function.prototype);
        var m = new Array(A.length),
          D = 0,
          a = !1;
        A.forEach(function (W, K) { s(W, function (O, N) {
            return a ? void 0 : O ? (a = !0, x(null)) : (m[K] = N, D++, D === A.length ? x(m) : void 0) }) }) }, xhrLoad: function (L, B, S) {
        var b = !1;
        Hq(L) || (b = !0, L = [L]), L.length;
        var E = S && S.sync;
        al(L, function (t, Y) {
          var W = new XMLHttpRequest;
          W.overrideMimeType("text/plain"), r.convertURL && (t = r.convertURL(t)), t.data ? Y(null, t.data) : (W.open("GET", encodeURI(t), !E), W.onload = function (H) { 200 === this.status || 0 === this.status ? Y(null, H.target.response) : Y(!0) }, W.onerror = function () { Y(!0) }, W.send(null)) }, function (e) { "function" == typeof B && B(b && e ? e[0] : e) }) }, clone: function (c) {
        if (!c) return $;
        if (Hq(c)) return c.slice(0);
        if (Pk(c)) return new Ol(c);
        if (Cq(c)) {
          var D, U = {};
          for (D in c) U[D] = c[D];
          return U }
        return c }, handleCompTypeLoaded: function () {}, handleImageLoaded: function () {}, handleUnfoundImage: function () {}, sortFunc: function (k, z) {
        if (k === z) return 0;
        if (k == $ && z != $) return 1;
        if (k != $ && z == $) return -1;
        if (k == $ && z == $) return 0;
        var N, V = typeof k,
          P = typeof z;
        return V === yk && P === yk ? N = k.localeCompare(z) : V === cl && P === cl && (N = k - z), N === B && (N = ("" + k).localeCompare("" + z)), N > 0 ? 1 : 0 > N ? -1 : 0 }, getClassMap: function () {
        return wh }, getClass: function (W) {
        if (An(W)) {
          var g, C = wh[W];
          if (!C) { g = W.split("."), C = _;
            for (var v = 0; v < g.length; v++) C = C[g[v]];
            wh[W] = C }
          return C }
        return W }, def: function (D, B, M) {
        var N, k, b, W = function () {};
        if (W.prototype = B.prototype, N = new W, An(D)) {
          if (wh[D]) throw "'" + D + "' already defined";
          b = Go(D), N.getClassName = function () {
            return D } } else b = D;
        if (N.constructor = b, N.getClass = function () {
            return b }, N.getSuperClass = function () {
            return B }, M)
          for (k in M) Iq[k] && Iq.hasOwnProperty(k) ? Iq[k](N, M) : md(N, M, k);
        b.prototype = N, b.superClass = B.prototype }, startAnim: function () {
        var J = function (H) { H.duration && (H.startTime = Qp()), H.timeId = _f(H.tick, $, $, H.interval) };
        return function (E) {
          return E = Oj(E), E.easing = E.easing || r.animEasing, E.duration || E.frames || (E.duration = r.animDuration), E.t = 0, E.duration ? E.interval = 0 : (E.frame = 0, E.interval = E.interval || 10), E.tick = function () {
            if (E.duration) {
              var v = (Qp() - E.startTime) / E.duration;
              v > 1 && (v = 1), E.t = v, E.action(E.easing(v), v), 1 === v ? E.stop() : E._isPaused || (E.timeId = _f(E.tick)) } else E.frame++, v = E.t = E.frame / E.frames, E.action(E.easing(v), v), E.frame < E.frames ? E._isPaused || (E.timeId = _f(E.tick, $, $, E.interval)) : E.stop() }, E.resume = function () { E._isPaused && (delete E._isPaused, E.duration ? E.t < 1 && (E.startTime = Qp() - E.duration * E.t, E.timeId = _f(E.tick)) : E.frame < E.frames && (E.timeId = _f(E.tick, $, $, E.interval))) }, E.pause = function () { E._isPaused = !0 }, E.stop = function (s) { E.isRunning() && (E.duration ? E.t < 1 && s && (E.t = 1, E.action(E.easing(1))) : E.frame < E.frames && s && (E.frame = E.frames, E.action(E.easing(1))), E._37o && E._37o(), E.finishFunc && E.finishFunc(), Sq(E.timeId, !E.duration), delete E.timeId) }, E.isRunning = function () {
            return E.timeId != $ }, E.delay ? _f(J, $, [E], E.delay) : J(E), E } }(), getTextSize: function () {
        var C = {},
          B = w ? Jr().getContext("2d") : $;
        return function (y, g) { B.font = y ? y : Eb;
          var A = C[B.font];
          return A || (A = 2 * B.measureText("e").width + 4, C[B.font] = A), { width: B.measureText(g).width + 4, height: A } } }(), drawText: function (N, e, E, L, j, s, y, o, F, q) {
        if (e != $) {
          var n = Sj(E, e),
            P = {};
          P.y = q && q !== Gm ? q === xd ? s + n.height / 2 : s + o - n.height / 2 : s + o / 2, P.x = F && F !== ci ? F === Fq ? j + y - n.width / 2 : j + y / 2 : j + n.width / 2, Lg(N, e, P, E, L) } }, getDistance: function (j, U) {
        var _ = j.length;
        return U ? 3 === _ ? A(J(j[0] - U[0]) + J(j[1] - U[1]) + J(j[2] - U[2])) : 2 === _ ? A(J(j[0] - U[0]) + J(j[1] - U[1])) : j.z === B ? A(J(U.x - j.x) + J(U.y - j.y)) : A(J(U.x - j.x) + J(U.y - j.y) + J(U.z - j.z)) : 3 === _ ? A(J(j[0]) + J(j[1]) + J(j[2])) : 2 === _ ? A(J(j[0]) + J(j[1])) : void 0 }, brighter: function (B, H) {
        return 0 > H && (H = -H), cd(B, H ? H : 40) }, darker: function (U, b) {
        return b > 0 && (b = -b), cd(U, b ? b : -40) }, unionPoint: function (n, q) {
        if (!n) return $;
        if (2 === arguments.length) return n && q ? { x: v(n.x, q.x), y: v(n.y, q.y), width: N(n.x - q.x), height: N(n.y - q.y) } : $;
        var a = n;
        if (a._as && (a = a._as), a.length === B) return $;
        var V = a.length;
        if (0 >= V) return $;
        for (var p = 1, l = a[0], D = { x: l.x, y: l.y, width: 0, height: 0 }; V > p; p++) { l = a[p];
          var O = v(D.x, l.x),
            y = M(D.x + D.width, l.x),
            i = v(D.y, l.y),
            f = M(D.y + D.height, l.y);
          D.x = O, D.y = i, D.width = y - O, D.height = f - i }
        return D }, unionRect: function (S, f) {
        if (S && !f) return Oj(S);
        if (!S && f) return Oj(f);
        if (S && f) {
          var D = { x: v(S.x, f.x), y: v(S.y, f.y) };
          return D.width = M(S.x + S.width, f.x + f.width) - D.x, D.height = M(S.y + S.height, f.y + f.height) - D.y, D }
        return $ }, containsPoint: function (C, M) {
        return !(!C || M.x < C.x || M.y < C.y || M.x > C.x + C.width || M.y > C.y + C.height) }, containsRect: function (_, P) {
        if (!_ || !P) return !1;
        var F = P.x,
          s = P.y,
          W = P.width,
          D = P.height,
          e = _.width,
          n = _.height;
        if (0 > (e | n | W | D)) return !1;
        var u = _.x,
          l = _.y;
        if (u > F || l > s) return !1;
        if (e += u, W += F, F >= W) {
          if (e >= u || W > e) return !1 } else if (e >= u && W > e) return !1;
        if (n += l, D += s, s >= D) {
          if (n >= l || D > n) return !1 } else if (n >= l && D > n) return !1;
        return !0 }, intersectsRect: function (b, l) {
        if (!b || !l) return !1;
        var N = l.width,
          c = l.height,
          e = b.width,
          S = b.height;
        if (0 >= e || 0 >= S || 0 >= N || 0 >= c) return !1;
        var G = l.x,
          K = l.y,
          k = b.x,
          L = b.y;
        return e += k, S += L, N += G, c += K, e > G && S > K && N > k && c > L }, intersection: function (D, Z) {
        if (!D || !Z) return $;
        var M = Z.x,
          e = Z.y,
          J = D.x,
          x = D.y,
          k = M,
          Q = e,
          g = J,
          h = x;
        return k += Z.width, Q += Z.height, g += D.width, h += D.height, J > M && (M = J), x > e && (e = x), k > g && (k = g), Q > h && (Q = h), k -= M, Q -= e, 0 >= k || 0 >= Q ? $ : { x: M, y: e, width: k, height: Q } }, grow: function (a, t) { a.x -= t, a.y -= t, a.width = a.width + 2 * t, a.height = a.height + 2 * t }, getLogicalPoint: function (U, I, M, r, g, X) {
        var k = I.getBoundingClientRect();
        return U = c ? Wl(U) : U, { x: (U.clientX - k.left + I.scrollLeft - (M || 0)) / (g || 1), y: (U.clientY - k.top + I.scrollTop - (r || 0)) / (X || 1) } }, removeHTML: function () {
        var A;
        return function (k) {
          return k && k.parentNode ? A === k ? !0 : (A = k, k.parentNode.removeChild(k), A = $, !0) : !1 } }(), getToolTipDiv: function () {
        if (!np) { np = tp(), _b = tp();
          var h = np.style;
          r.baseZIndex != $ && (h.zIndex = o(r.baseZIndex) + 3 + ""), h.whiteSpace = "nowrap", h.color = r.toolTipLabelColor, h.background = r.toolTipBackground, h.font = r.toolTipLabelFont, h.padding = "5px", h.boxShadow = "0px 0px 3px " + r.toolTipShadowColor }
        return np }, isToolTipShowing: function () {
        return np && np.parentNode ? !0 : _b && _b.parentNode ? !0 : !1 }, hideToolTip: function () { Sc(np), Sc(_b), Um() }, showToolTip: function (Y, f) {
        if (!Y || f == $) return eq(), void 0;
        r.getToolTipDiv();
        var A, S;
        if (f.html ? (f = f.html, A = _b, Sc(np)) : (A = np, Sc(_b)), S = A.style, A.innerHTML = f, A.parentNode || Af(w.body, A), Y.target) { Y = oq(Y);
          var y = gc(),
            X = Y.x,
            Q = Y.y,
            R = c ? 60 : 12;
          if (c) {
            var m = A.getBoundingClientRect();
            S.left = X - m.width / 2 + Zq, S.top = Q - m.height - R < y.top ? Q + R + Zq : Q - m.height - R + Zq } else { S.left = X + R + Zq, S.top = Q + R + Zq;
            var m = A.getBoundingClientRect();
            m.left + m.width > y.width && (S.left = X - R - m.width + Zq), m.top + m.height > y.height && (S.top = Q - R - m.height + Zq), m.left < 0 && (S.left = X + R + Zq), m.top < 0 && (S.top = Q + R + Zq) } } else S.left = Y.x + Zq, S.top = Y.y + Zq;
        Um() }, startDragging: function (d, v) { d !== gp && (gp ? c ? gp.handleWindowTouchEnd(v) : gp.handleWindowMouseUp(v) : c ? (_.addEventListener(Qf, ap, !1), _.addEventListener(yb, ym, !1)) : (_.addEventListener(Cb, dp, !1), _.addEventListener(zo, Ub, !1)), gp = d) }, getImageMap: function () {
        return so }, toBoundaries: function (E, S, o, L) {
        var f = [];
        return Ic(E, S, o, L).forEach(function (c) {
          var u = [];
          c.forEach(function (P) { u.push(P.x, P.y) }), f.push(u) }), f }, getCurrentKeyCodeMap: function () {
        return jd }, drawCenterImage: function (I, A, M, L, v, B, y) {
        var a = Io(A, v, B),
          J = mg(A, v, B);
        yg(I, A, b(M - a / 2), b(L - J / 2), a, J, v, B, y) }, drawStretchImage: function (W, E, N, G, O, f, C, y, o, n, h) {
        var F, L = Io(E, y, o, f),
          d = mg(E, y, o, C);
        if ("uniform" === N ? (F = v(f / L, C / d), L *= F, d *= F, G += b((f - L) / 2), O += b((C - d) / 2), f = L, C = d) : "centerUniform" === N && ((L > f || d > C) && (F = v(f / L, C / d), L *= F, d *= F), G += b((f - L) / 2), O += b((C - d) / 2), f = L, C = d), "center" === N) {
          var s = h !== !1 && (L > f || d > C);
          s && (W.save(), W.beginPath(), W.rect(G, O, f, C), W.clip()), yg(W, E, G + f / 2 - L / 2, O + C / 2 - d / 2, L, d, y, o, n), s && W.restore() } else yg(W, E, G, O, f, C, y, o, n) }, toCanvas: function (z, M, o, _, x, g, s, G) { z = bd(z, s), M = M || Io(z, x), o = o || mg(z, x);
        var Z = Jr(),
          A = dc(Z);
        return G ? (vr(Z, M, o, G), A.scale(G, G)) : vr(Z, M, o, 1), cg(A, z, _, 0, 0, M, o, x, g, s), A.restore(), Z }, createElement: function (z, B, p, v) {
        var U = w.createElement(z);
        return Cr(U, B || j.widgetBorder, 2), U.style.font = p ? p : Eb, v != $ && (U.value = v), r.onElementCreated && r.onElementCreated(U), U }, containedInView: function (U, O) {
        var m = ej(O).getBoundingClientRect();
        return Sm({ x: m.left, y: m.top, width: m.width, height: m.height }, en(U)) }, isIsolating: function () {
        return Tm }, setIsolating: function (Y) { Tm = Y }, getMSMap: function () {
        return Iq }, stringify: function (W, y) {
        var z = Date.prototype.toJSON;
        Date.prototype.toJSON = function () {
          return "__ht__date" + this.getTime() };
        var n = JSON.stringify(W, function ($, w) {
          return "function" == typeof w ? "__ht__" + (w.__ht__ || w.toString()) : Ng(w) ? dd(w) : w }, y == $ ? 2 : y);
        return Date.prototype.toJSON = z, n }, parse: function (f) {
        return An(f) ? JSON.parse(f, function (y, A) {
          if (An(A)) {
            if ("__ht__function" == A.substr(0, 14)) {
              var L = A.indexOf("{") + 1,
                t = A.lastIndexOf("}"),
                W = A.indexOf("(") + 1,
                B = A.indexOf(")");
              if (L && t && W && B) {
                var e = new Function(A.substring(W, B), A.substring(L, t));
                return e.__ht__ = A.substr(6), e } }
            if ("__ht__date" == A.substr(0, 10)) return new Date(o(A.substr(10))) }
          return A }) : f }, loadJS: function (l, H) { H && l.push(H);
        var Y = l.shift();
        if (Hq(Y)) l = Y.contact(l), r.loadJS(l);
        else if (Nk(Y)) Y(), r.loadJS(l);
        else if (An(Y)) {
          var q = w.createElement("script");
          q.onload = function () { r.loadJS(l) }, q.setAttribute("src", Y), w.getElementsByTagName("head")[0].appendChild(q) } else l.length && r.loadJS(l) }, toColorData: zh, setCanvas: vr, createDiv: tp, createDisabledDiv: Ok, createView: ef, createCanvas: Jr, appendChild: Af, initContext: dc, checkLoadingImage: Ho, translateAndScale: Ue, layout: Am, getPosition: Ye, drawPoints: Zh, drawRoundRect: Xo, drawBorder: Bn, setFocus: xs, getter: Ui, setter: Gk, isEmptyObject: ul }, !0), ph(K, { autoAdjustIndex: 1, hierarchicalRendering: 1, adjustChildrenToTop: 1, autoHideScrollBar: 1, autoUpdate: 1, firstPersonMode: 1, ortho: 1, strict: 1, stickToRight: 1, instant: 1, closePath: 1, hierarchical: 1, doubleClickToToggle: 1, continuousLayout: !0 }, !0);
    var Hg = r.disabledOpacity,
      ff = r.toolTipDelay,
      bk = r.devicePixelRatio,
      hh = r.autoMakeVisible,
      ke = r.autoHideScrollBar,
      Cp = r.imageGradient,
      ag = r.showToolTip,
      eq = r.hideToolTip,
      kl = r.dashPattern,
      Wi = r.lineCap,
      eg = r.lineJoin,
      nd = r.labelColor,
      nq = r.labelSelectColor,
      Eb = r.labelFont,
      Nd = r.widgetIndent,
      Lk = r.widgetRowHeight,
      hr = r.widgetHeaderHeight,
      hs = r.widgetTitleHeight,
      dm = r.scrollBarColor,
      Fk = r.scrollBarSize,
      Th = r.scrollBarTimeout,
      Yc = r.scrollBarMinLength,
      _m = r.scrollBarInteractiveSize,
      xk = r.zoomIncrement,
      zc = r.scrollZoomIncrement,
      Pp = r.pinchZoomIncrement,
      ob = r.zoomMax,
      po = r.zoomMin,
      cj = r.createObject,
      be = r.preventDefault,
      rn = r.setImage,
      bd = r.getImage,
      Ee = r.drawCenterImage,
      cg = r.drawStretchImage,
      wo = r.getId,
      _f = r.callLater,
      al = r.asyncEach,
      mf = (r.xhrLoad, r.sortFunc),
      Oj = r.clone,
      Go = r.getClass,
      fr = r.startAnim,
      Kp = r.brighter,
      fn = r.darker,
      kj = r.drawText,
      Sj = r.getTextSize,
      hp = r.isLeftButton,
      kp = r.getTouchCount,
      ep = r.isDoubleClick,
      dl = r.isShiftDown,
      ll = r.isCtrlDown,
      en = r.getClientPoint,
      oq = r.getPagePoint,
      Rk = r.getDistance,
      ji = r.unionPoint,
      _h = r.unionRect,
      Sm = r.containsPoint,
      Ig = r.containsRect,
      Fn = r.intersectsRect,
      af = r.intersection,
      gc = r.getWindowInfo,
      Nh = r.grow,
      Ur = r.getLogicalPoint,
      Ud = r.startDragging,
      Sc = r.removeHTML,
      Wk = r.createElement,
      zd = r.segmentResolution,
      Ih = r.shapeResolution,
      Pq = r.shapeSide,
      Xk = r.def,
      Gl = function (T, o, Q) { Xk(e + "." + T, o, Q) },
      To = function (v, n) { v.childNodes.forEach(function (G) { n(G), To(G, n) }) };
    ph(r, { toolTipLabelColor: nd, toolTipLabelFont: Eb, toolTipBackground: j.toolTipBackground, toolTipShadowColor: ed, setDevicePixelRatio: function (F) { bk = r.devicePixelRatio = "number" == typeof F ? F : _.devicePixelRatio, To(w.body, function (l) {
          var K = l._ht;
          K && K._canvas && (vr(K._canvas, K.getWidth(), K.getHeight()), K.redraw ? K.redraw() : K.iv()) }) } }, !0);
    var Er = 1e-6,
      tr = "undefined" != typeof Uint16Array ? Uint16Array : Array,
      gj = "undefined" != typeof Float32Array ? Float32Array : Array,
      co = function (e, o, O) {
        var L = [e[0] - o[0], e[1] - o[1], e[2] - o[2]];
        if (O) {
          var P = Rk(L);
          P > 0 && (L[0] /= P, L[1] /= P, L[2] /= P) }
        return L },
      ld = function (V) {
        return [-V[0], -V[1], -V[2]] },
      Cc = function (s, Z) {
        return 3 === s.length ? s[0] * Z[0] + s[1] * Z[1] + s[2] * Z[2] : s[0] * Z[0] + s[1] * Z[1] },
      Ti = function () {
        var E = new gj(16);
        return E[0] = 1, E[1] = 0, E[2] = 0, E[3] = 0, E[4] = 0, E[5] = 1, E[6] = 0, E[7] = 0, E[8] = 0, E[9] = 0, E[10] = 1, E[11] = 0, E[12] = 0, E[13] = 0, E[14] = 0, E[15] = 1, E },
      Ce = Ti(),
      Vb = function (S) {
        var j = new gj(16);
        return j[0] = S[0], j[1] = S[1], j[2] = S[2], j[3] = S[3], j[4] = S[4], j[5] = S[5], j[6] = S[6], j[7] = S[7], j[8] = S[8], j[9] = S[9], j[10] = S[10], j[11] = S[11], j[12] = S[12], j[13] = S[13], j[14] = S[14], j[15] = S[15], j },
      Xd = function (F, e) {
        return F[0] = e[0], F[1] = e[1], F[2] = e[2], F[3] = e[3], F[4] = e[4], F[5] = e[5], F[6] = e[6], F[7] = e[7], F[8] = e[8], F[9] = e[9], F[10] = e[10], F[11] = e[11], F[12] = e[12], F[13] = e[13], F[14] = e[14], F[15] = e[15], F },
      Lm = function (Q) {
        return Q[0] = 1, Q[1] = 0, Q[2] = 0, Q[3] = 0, Q[4] = 0, Q[5] = 1, Q[6] = 0, Q[7] = 0, Q[8] = 0, Q[9] = 0, Q[10] = 1, Q[11] = 0, Q[12] = 0, Q[13] = 0, Q[14] = 0, Q[15] = 1, Q },
      Wb = function (A, W) {
        var t = A[0],
          G = A[1],
          F = A[2];
        return A[0] = W[0] * t + W[4] * G + W[8] * F + W[12], A[1] = W[1] * t + W[5] * G + W[9] * F + W[13], A[2] = W[2] * t + W[6] * G + W[10] * F + W[14], A },
      pk = function (T, K) {
        var z = T[0],
          k = T[1],
          q = T[2],
          l = T[3];
        return T[0] = K[0] * z + K[4] * k + K[8] * q + K[12] * l, T[1] = K[1] * z + K[5] * k + K[9] * q + K[13] * l, T[2] = K[2] * z + K[6] * k + K[10] * q + K[14] * l, T[3] = K[3] * z + K[7] * k + K[11] * q + K[15] * l, T
      },
      df = function () {
        var r, t, N, j, T = Zm(mr[1] + mr[7]),
          f = Zm(mr[0] + mr[3] - mr[10]),
          c = Zm(mr[8] + 2),
          M = function () {
            return t = N.charAt(r), r += 1, t },
          d = function () {
            var S = "";
            if (t === c)
              for (; M();) {
                if (t === c) return M(), S;
                S += t } else M() },
          G = function () {
            for (; t && " " >= t;) M() },
          R = function () {
            var N, U = {};
            if (t === T) {
              if (M(), G(), t === f) return M(), U;
              for (; t;) {
                if (N = d(), G(), M(), U[N] = j(), G(), t === f) return M(), U;
                M(), G() } } };
        return j = function () {
            switch (G(), t) {
              case T:
                return R();
              default:
                return d() } },
          function (f) {
            if (W = {}, f) {
              var m;
              if (N = f, r = 0, t = " ", m = j(), G(), !t) return m } } }(),
      hk = function (J, O) {
        if (O) {
          var _ = P(O),
            u = s(O),
            S = J[4],
            W = J[5],
            v = J[6],
            w = J[7],
            R = J[8],
            A = J[9],
            K = J[10],
            C = J[11];
          J[4] = S * u + R * _, J[5] = W * u + A * _, J[6] = v * u + K * _, J[7] = w * u + C * _, J[8] = R * u - S * _, J[9] = A * u - W * _, J[10] = K * u - v * _, J[11] = C * u - w * _ } },
      rg = function (u, f) {
        if (f) {
          var Y = P(f),
            k = s(f),
            y = u[0],
            v = u[1],
            l = u[2],
            t = u[3],
            O = u[8],
            w = u[9],
            g = u[10],
            R = u[11];
          u[0] = y * k - O * Y, u[1] = v * k - w * Y, u[2] = l * k - g * Y, u[3] = t * k - R * Y, u[8] = y * Y + O * k, u[9] = v * Y + w * k, u[10] = l * Y + g * k, u[11] = t * Y + R * k } },
      Bl = function (J, I) {
        if (I) {
          var h = P(I),
            Y = s(I),
            y = J[0],
            g = J[1],
            V = J[2],
            v = J[3],
            k = J[4],
            G = J[5],
            Q = J[6],
            R = J[7];
          J[0] = y * Y + k * h, J[1] = g * Y + G * h, J[2] = V * Y + Q * h, J[3] = v * Y + R * h, J[4] = k * Y - y * h, J[5] = G * Y - g * h, J[6] = Q * Y - V * h, J[7] = R * Y - v * h } },
      Pc = function (J, m, f) {
        return Vr($, f === !1 ? $ : J.s3(), J.r3(), J.getRotationMode(), J.p3(), $, m) },
      Vr = function (c, r, h, l, w, n, o) {
        return n || (n = Ti()), w && Sf(n, w), Tk(n, h, l), o && Ke(n, n, o), r && Fr(n, r), c && Ke(n, n, c), n },
      Me = function (q, x, p) { x = o(x), p = o(p);
        var Y = this;
        Y.g = q, Y._84O = x, Y._85O = p, Y._70I = !0, Y.F = 0, Y._83O = x + p, Y.pen = { x: 0, y: 0 } },
      Xi = "lineDashOffset",
      Pg = "setLineDash",
      Pm = function (N) {
        for (var I in N) 1 === I.length && (Xi = N[I]);
        return I ? 1 : 0 },
      ac = function (P, b, o) {
        return lr(b) ? P : P[Pg] ? (P[Pg](b), o && (P.lineDashOffset = o), P) : new Me(P, b[0], b.length > 1 ? b[1] : b[0]) },
      rm = function (H, s) {!lr(s) && H[Pg] && (H[Pg](bs), H.lineDashOffset = 0) };
    if (Xk(Me, y, { _69I: 6, moveTo: function (P, V) {
          var h = this,
            e = h.pen;
          e.x = P, e.y = V, h.g.moveTo(P, V), h.start || (h.start = { x: P, y: V }) }, lineTo: function (S, W) {
          var u = this,
            o = u.pen,
            F = S - o.x,
            D = W - o.y,
            d = z(D, F),
            U = s(d),
            e = P(d),
            c = u._23O(o.x, o.y, S, W),
            n = u._85O,
            A = u._84O,
            V = u._83O;
          if (u.F) {
            if (u.F > c) return u._70I ? u._72I(S, W) : u.moveTo(S, W), u.F -= c, void 0;
            if (u._70I ? u._72I(o.x + U * u.F, o.y + e * u.F) : u.moveTo(o.x + U * u.F, o.y + e * u.F), c -= u.F, u.F = 0, u._70I = !u._70I, !c) return }
          var i = G(c / V);
          if (i) {
            for (var j = U * A, Q = e * A, C = U * n, N = e * n, T = 0; i > T; T++) u._70I ? (u._72I(o.x + j, o.y + Q), u.moveTo(o.x + C, o.y + N)) : (u.moveTo(o.x + C, o.y + N), u._72I(o.x + j, o.y + Q));
            c -= V * i }
          u._70I ? c > A ? (u._72I(o.x + U * A, o.y + e * A), u.moveTo(S, W), u.F = n - (c - A), u._70I = !1) : (u._72I(S, W), c === A ? (u.F = 0, u._70I = !u._70I) : (u.F = A - c, u.moveTo(S, W))) : c > n ? (u.moveTo(o.x + U * n, o.y + e * n), u._72I(S, W), u.F = A - (c - n), u._70I = !0) : (u.moveTo(S, W), c === n ? (u.F = 0, u._70I = !u._70I) : u.F = n - c) }, quadraticCurveTo: function (z, M, v, Z) {
          var $, r = this,
            N = r.pen,
            D = N.x,
            c = N.y,
            s = r._22O(D, c, z, M, v, Z),
            g = 0,
            a = 0,
            f = r._85O,
            u = r._84O;
          if (r.F) {
            if (r.F > s) return r._70I ? r._71I(z, M, v, Z) : r.moveTo(v, Z), r.F -= s, void 0;
            if (g = r.F / s, $ = r._20O(D, c, z, M, v, Z, g), r._70I ? r._71I($[2], $[3], $[4], $[5]) : r.moveTo($[4], $[5]), r.F = 0, r._70I = !r._70I, !s) return }
          var e = s - s * g,
            h = G(e / r._83O),
            X = u / s,
            R = f / s;
          if (h)
            for (var F = 0; h > F; F++) r._70I ? (a = g + X, $ = r._21O(D, c, z, M, v, Z, g, a), r._71I($[2], $[3], $[4], $[5]), g = a, a = g + R, $ = r._21O(D, c, z, M, v, Z, g, a), r.moveTo($[4], $[5])) : (a = g + R, $ = r._21O(D, c, z, M, v, Z, g, a), r.moveTo($[4], $[5]), g = a, a = g + X, $ = r._21O(D, c, z, M, v, Z, g, a), r._71I($[2], $[3], $[4], $[5])), g = a;
          e = s - s * g, r._70I ? e > u ? (a = g + X, $ = r._21O(D, c, z, M, v, Z, g, a), r._71I($[2], $[3], $[4], $[5]), r.moveTo(v, Z), r.F = f - (e - u), r._70I = !1) : ($ = r._19O(D, c, z, M, v, Z, g), r._71I($[2], $[3], $[4], $[5]), s === u ? (r.F = 0, r._70I = !r._70I) : (r.F = u - e, r.moveTo(v, Z))) : e > f ? (a = g + R, $ = r._21O(D, c, z, M, v, Z, g, a), r.moveTo($[4], $[5]), $ = r._19O(D, c, z, M, v, Z, a), r._71I($[2], $[3], $[4], $[5]), r.F = u - (e - f), r._70I = !0) : (r.moveTo(v, Z), e === f ? (r.F = 0, r._70I = !r._70I) : r.F = f - e) }, bezierCurveTo: function () {
          var T = arguments;
          this.pen = { x: T[4], y: T[5] }, this.g.bezierCurveTo(T[0], T[1], T[2], T[3], T[4], T[5]) }, arc: function (s, b, T, Q, e, Y) { Y || (Q = -Q, e = -e), zi(this, s, b, Q, e - Q, T, T, !1) }, rect: function (j, n, p, Y) {
          var P = this;
          P.pen = { x: j, y: n }, P.moveTo(j, n), P.lineTo(j, n + Y), P.lineTo(j + p, n + Y), P.lineTo(j + p, n), P.lineTo(j, n) }, beginPath: function () { this.g.beginPath() }, closePath: function () { this.lineTo(this.start.x, this.start.y) }, _23O: function (G, r, z, b) {
          var d = z - G,
            h = b - r;
          return A(d * d + h * h) }, _22O: function (o, R, D, n, Z, m, _) {
          for (var t, N, $, T, V, e, g, r = 0, J = o, s = R, l = _ > 0 ? _ : this._69I, G = 1; l >= G; G++) $ = G / l, T = 1 - $, V = T * T, e = 2 * $ * T, g = $ * $, t = V * o + e * D + g * Z, N = V * R + e * n + g * m, r += this._23O(J, s, t, N), J = t, s = N;
          return r }, _21O: function (M, r, u, I, J, p, f, P) {
          var s = this;
          if (0 === f) return s._20O(M, r, u, I, J, p, P);
          if (1 === P) return s._19O(M, r, u, I, J, p, f);
          var l = s._20O(M, r, u, I, J, p, P);
          return l.push(f / P), s._19O.apply(s, l) }, _20O: function (U, l, A, m, J, t, X) {
          if (1 !== X) {
            var T = A + (J - A) * X,
              c = m + (t - m) * X;
            A = U + (A - U) * X, m = l + (m - l) * X, J = A + (T - A) * X, t = m + (c - m) * X }
          return [U, l, A, m, J, t] }, _19O: function (J, e, W, i, E, v, B) {
          if (1 !== B) {
            var l = J + (W - J) * B,
              s = e + (i - e) * B;
            W += (E - W) * B, i += (v - i) * B, J = l + (W - l) * B, e = s + (i - s) * B }
          return [J, e, W, i, E, v] }, _72I: function (Y, L) {
          var N = this.pen;
          (Y !== N.x || L !== N.y) && (N.x = Y, N.y = L, this.g.lineTo(Y, L)) }, _71I: function (q, W, h, E) {
          var B = this.pen;
          (q !== h || W !== E || h !== B.x || E !== B.y) && (B.x = h, B.y = E, this.g.quadraticCurveTo(q, W, h, E)) } }), f && u) {
      var an = u.toString();
      p = an.indexOf(dq.substr(0, 2)) > 0 && an.indexOf(xd + xd.substr(1, 1)) > 1 ? !0 : !1 }
    var jp = $,
      bj = $,
      gn = function (F) { jp && !F._72O && (bj || (bj = {}), bj[F._72O = wo()] = F) },
      zk = function (X, d) {
        if (d || (d = X), d && (jp || (jp = {}), !jp[X])) {
          var h = new XMLHttpRequest;
          if (jp[d] = { request: h, url: d }, h.overrideMimeType("text/plain"), r.convertURL && (d = r.convertURL(d)), d.data) {
            var a = r.parse(d.data);
            Jk(X, a), r.handleCompTypeLoaded(X, a) } else h.open("GET", encodeURI(d), !0), h.onload = function (E) {
            if (200 === this.status || 0 === this.status) {
              var c = r.parse(E.target.response);
              Jk(X, c), r.handleCompTypeLoaded(X, c) } else Jk(X, $) }, h.onerror = function () { Jk(X, $) }, h.send(null) } },
      Jk = function (C, w) {
        if (jo[C] = w, delete jp[C], ul(jp) && (jp = $, bj)) {
          for (var e in bj) {
            var r = bj[e];
            r.invalidateAll && r.invalidateAll(B, "compTypeLoaded", C), r.redraw && r.redraw(), r.iv(), delete r._72O }
          bj = $ }
        if (w && bj)
          for (var e in bj) {
            var r = bj[e];
            r.invalidateAll && r.invalidateAll(B, "compTypeLoading", C), r.redraw && r.redraw(), r.iv() } },
      Id = j.chart,
      vq = r.compStack = [],
      vd = /^style@/,
      $r = /^attr@/,
      Wj = /^field@/,
      nh = { x: .5, y: .5 },
      Io = function (I, L, g, b) {
        if (!I) return 0;
        if (I.fitSize && b) return b;
        var W = yo(I.width, L, g);
        return null == W ? 20 : W },
      mg = function (d, H, C, U) {
        if (!d) return 0;
        if (d.fitSize && U) return U;
        var L = yo(d.height, H, C);
        return null == L ? 20 : L },
      yo = function (H, W, P) {
        if (!H || !H.func) return H;
        var m, x = H.func,
          h = H.value;
        return m = Nk(x) ? P && P.vectorDataBindingDisabled && !H.isSafeFunc ? h : x(W, P) : W instanceof sk ? $r.test(x) ? W.a(x.slice(5)) : vd.test(x) ? W.s(x.slice(6)) : Wj.test(x) ? W[x.slice(6)] : W[x] ? W[x](P) : h : h, h !== B && m == $ ? h : m },
      yg = r.drawImage = function () {
        var A, q, R, Y, m, H = function (d, Z) { d.getValue && d.getValue.compType === Z || (d.getValue = function (q) {
              var $ = X(d, q);
              if ($ === B && Z.properties) {
                var g = Z.properties[q];
                g && ($ = g.defaultValue) }
              return $ }, d.getValue.compType = Z) },
          X = function (e, G, B) {
            var h = e[G];
            return h && h.func ? (h = yo(h, q, R), B && (h = B(h))) : B && (h = e[G] = B(h)), h },
          p = function (E, n) {
            var x = X(E, n);
            if (m && x) {
              var r = Sk(m);
              return x = zh(x), "rgba(" + G(x[0] * r[0]) + "," + G(x[1] * r[1]) + "," + G(x[2] * r[2]) + "," + x[3] + ")" }
            return x },
          J = function (V) {
            if (Hq(V)) {
              for (var t = new Ol, c = V.length, q = 0; c > q; q += 2) t.add({ x: V[q], y: V[q + 1] });
              V = t }
            return V },
          F = function (I) {
            var Y = X(I, "anchorX"),
              t = X(I, "anchorY");
            if (Y !== B || t !== B) return { x: Y === B ? nh.x : Y, y: t === B ? nh.y : t };
            var s = X(I, "type"),
              H = X(I, "name");
            if ("image" !== s || !H) return nh;
            var Z = bd(H);
            return Z && Z.anchorX && Z.anchorY ? { x: Z.anchorX, y: Z.anchorY } : nh },
          C = function (f, x) {
            var v = X(f, ns),
              k = F(f);
            if (Hq(v)) {
              var O = v.length,
                K = X(f, "relative"),
                t = x.width,
                z = x.height;
              if (4 === O) v = { x: v[0], y: v[1], width: v[2], height: v[3] }, K ? (v.x *= t, v.y *= z, v.width *= t, v.height *= z) : x.fitSize && (v.x *= x.widthScale, v.width *= x.widthScale, v.y *= x.heightScale, v.height *= x.heightScale);
              else if (3 === O) {
                var m = v[0];
                v = { width: v[1], height: v[2] }, K ? (v.width *= t, v.height *= z) : x.fitSize && (v.width *= x.widthScale, v.height *= x.heightScale), "object" == typeof m ? m.length && (m = { x: m[0], y: m[1] }) : m = Ye(m, x, v), v.x = m.x - v.width * k.x, v.y = m.y - v.height * k.y }
              var W = X(f, "offsetX");
              W && (x.fitSize && (W *= x.widthScale), v.x += W), W = X(f, "offsetY"), W && (x.fitSize && (W *= x.heightScale), v.y += W) }
            return v },
          j = function (z) {
            return Hq(z) ? new Ol(z) : z },
          E = function (k, v, S, G, V, i) { G === B && (G = 1), V === B && (V = 1);
            var U = Qe(v, k);
            if (U && !S && 1 === G && 1 === V) return !1;
            i = i || nh;
            var s = k.x + k.width * i.x,
              q = k.y + k.height * i.y,
              O = v.x + v.width * i.x,
              d = v.y + v.height * i.y;
            return A.save(), wg(A, s, q), gb(A, S), ii(A, G * (k.width / v.width), V * (k.height / v.height)), wg(A, -O, -d), !0 },
          Z = function () { A.restore() },
          U = function (v, x, H) {
            var P = X(v, "path"),
              R = X(v, Te),
              z = X(v, "scaleX"),
              g = X(v, "scaleY"),
              b = F(v),
              o = $,
              k = cq(null, P);
            if (H || (H = v.unionRect, H || (H = ji(k), v.path.func || (v.unionRect = H)), o = H), H) { o || (o = v.unionRect, o || (o = ji(k), v.path.func || (v.unionRect = o)));
              var j = E(H, o, R, z, g, b),
                B = X(v, "borderPattern"),
                h = ac(A, B),
                V = p(v, "background"),
                w = p(v, "borderColor"),
                _ = X(v, "borderWidth"),
                T = X(v, "gradient"),
                K = p(v, "gradientColor"),
                S = X(v, "border3d"),
                y = X(v, "border3dColor"),
                u = X(v, "border3dAccuracy"),
                r = A.lineJoin,
                m = A.lineCap;
              if (A.lineJoin = X(v, "borderJoin") || eg, A.lineCap = X(v, "borderCap") || Wi, V ? (ks(A, V, T, K, o), cq(A, P), A.fill(), h !== A && cq(A, P)) : cq(A, P), _ && w) {
                var s = X(v, "borderWidthAbsolute");
                s && (A.save(), A.setTransform(1, 0, 0, 1, 0, 0)), A.lineWidth = _, A.strokeStyle = w, A.stroke(), s && A.restore(), S && hn(A, w, y, _, Y, u) }
              if (rm(A, B), X(v, "dash")) {
                var d = X(v, "dashWidth") || _;
                if (d > 0) { B = X(v, "dashPattern") || kl;
                  var h = ac(A, B, X(v, "dashOffset")),
                    l = X(v, "dashColor") || sb;
                  h !== A && cq(A, P), A.strokeStyle = l, A.lineWidth = d, A.stroke(), X(v, "dash3d") && hn(A, l, X(v, "dash3dColor"), d, Y, X(v, "dash3dAccuracy")), rm(A, B) } }
              x === ns && tq(A, V, X(v, "depth"), o), A.lineJoin = r, A.lineCap = m, j && Z() } },
          z = function (z, I, r, e) {
            var n = X(z, Md, J),
              t = X(z, Te),
              d = F(z);
            if (n && e.fitSize) {
              var L = Math.abs(Math.cos(t)) < .001,
                M = new Ol,
                c = ji(n),
                D = e.widthScale,
                i = e.heightScale,
                T = c.x + d.x * c.width,
                f = c.y + d.y * c.height,
                q = T * D,
                G = f * i;
              n.each(function (d) {
                var w = d.x - T,
                  P = d.y - f;
                M.add({ x: q + w * (L ? i : D), y: G + P * (L ? D : i) }) }), n = M, z.unionRect = null }
            var h = X(z, "scaleX"),
              k = X(z, "scaleY"),
              P = I === Vn,
              g = $;
            if (!r && P && (r = z.unionRect, r || (r = ji(n), z.points.func || (z.unionRect = r)), g = r), r) { P ? g || (g = z.unionRect, g || (g = ji(n), z.points.func || (z.unionRect = g))) : g = r;
              var V, S, b, _, B = E(r, g, t, h, k, d),
                x = X(z, "borderPattern"),
                o = ac(A, x),
                K = p(z, "background"),
                U = bd(X(z, "repeatImage"), m),
                y = X(z, "gradientPack"),
                O = p(z, "borderColor"),
                s = X(z, "borderWidth"),
                R = X(z, "segments", j),
                N = X(z, "gradient"),
                w = p(z, "gradientColor"),
                u = X(z, "border3d"),
                C = X(z, "border3dColor"),
                W = X(z, "border3dAccuracy"),
                v = X(z, "closePath"),
                H = X(z, "fillRule") || "nonzero",
                Q = A.lineJoin,
                l = A.lineCap;
              if (A.lineJoin = X(z, "borderJoin") || eg, A.lineCap = X(z, "borderCap") || Wi, P ? K || U || y ? (Zh(A, n, R, v), y ? Wd(A, y) : U ? Ao(A, U) : ks(A, K, N, w, g), A.fill(H), y && A.restore(), o !== A && Zh(o, n, R, v)) : Zh(o, n, R, v) : ("roundRect" === I ? V = X(z, "cornerRadius") : "polygon" === I ? V = X(z, "polygonSide") : "arc" === I && (V = X(z, "arcFrom"), S = X(z, "arcTo"), b = X(z, "arcClose"), _ = X(z, "arcOval")), K || U || y ? (Jj(A, I, g, V, S, b, _), y ? Wd(A, y) : U ? Ao(A, U) : ks(A, K, N, w, g), A.fill(H), y && A.restore(), A !== o && Jj(o, I, g, V, S, b, _)) : Jj(o, I, g, V, S, b, _)), s && O) {
                var a = X(z, "borderWidthAbsolute");
                a && (A.save(), A.setTransform(1, 0, 0, 1, 0, 0)), A.lineWidth = s, A.strokeStyle = O, A.stroke(), a && A.restore(), u && hn(A, O, C, s, Y, W) }
              if (rm(A, x), X(z, "dash")) {
                var vc = X(z, "dashWidth") || s;
                if (vc > 0) { x = X(z, "dashPattern") || kl;
                  var o = ac(A, x, X(z, "dashOffset")),
                    pg = X(z, "dashColor") || sb;
                  o !== A && (P ? Zh(o, n, R, v) : Jj(o, I, g, V, S, b, _)), A.strokeStyle = pg, A.lineWidth = vc, A.stroke(), X(z, "dash3d") && hn(A, pg, X(z, "dash3dColor"), vc, Y, X(z, "dash3dAccuracy")), rm(A, x) } }
              I === ns && tq(A, K, X(z, "depth"), g), A.lineJoin = Q, A.lineCap = l, B && Z() } },
          W = function (c, S) {
            var U = m,
              e = m || X(c, dj),
              s = bd(X(c, "name"), e);
            s && (cg(A, s, X(c, "stretch"), S.x, S.y, S.width, S.height, q, R, e), m = U) },
          L = function (m, _) {
            var u = X(m, "text");
            u != $ && kj(A, u, X(m, "font"), p(m, dj), _.x, _.y, _.width, _.height, X(m, "align"), X(m, "vAlign")) },
          O = function (S, y) { Bn(A, p(S, dj), y.x, y.y, y.width, y.height, X(S, "width")) },
          V = function (t, K) {
            var B = X(t, gl),
              M = 0;
            if (B && (B.forEach(function (w) { M += w }), M > 0)) {
              for (var m = X(t, "colors") || Id, R = X(t, "startAngle") || 0, H = X(t, "hollow"), j = X(t, lq), k = X(t, fc), G = X(t, Qm), g = j ? new Ol : $, h = K.x, x = K.y, F = K.width, p = K.height, l = h + F / 2, n = x + p / 2, W = v(F, p) / 2, d = 0, V = 0; V < B.length; V++) {
                var E = B[V],
                  I = Q * E / M,
                  O = R + I;
                if (A.fillStyle = m[d++], d === m.length && (d = 0), A.beginPath(), H) {
                  var c = l + s(R) * W / 2,
                    e = n + P(R) * W / 2,
                    S = l + s(O) * W,
                    f = n + P(O) * W;
                  A.moveTo(c, e), A.arc(l, n, W / 2, R, O, !1), A.lineTo(S, f), A.arc(l, n, W, O, R, !0) } else A.moveTo(l, n), A.arc(l, n, W, O, R, !0);
                g && (I = (R + O) / 2, g.add({ text: Nk(j) ? j(E, V, M, q) : E, x: l + .75 * s(I) * W, y: n + .75 * P(I) * W })), A.closePath(), A.fill(), R = O }
              g && g.each(function (m) { kj(A, m.text, k, G, m.x, m.y, 0, 0, db) }) } },
          d = function (h, Y) {
            var e = X(h, mc);
            if (e && e.length > 0) {
              var E = e.length,
                l = X(h, lq),
                T = X(h, fc),
                k = X(h, Qm),
                z = l ? new Ol : $,
                n = X(h, "minValue") || 0,
                D = X(h, "maxValue");
              if (D == $ && (D = 0, e.forEach(function (H) { H.values.forEach(function (U) { D = M(D, U) }) })), n === D) return;
              for (var y = Y.height / (D - n), x = Y.y + D * y, H = X(e[0], gl).length, V = Y.width / (3 * H + 1), S = 2 * V / E, Z = 0, j = 0; E > j; j++)
                for (var d = e[j], i = X(d, dj), B = X(d, "colors"), u = X(d, gl), O = 0; H > O; O++) { B ? A.fillStyle = B[O] : i ? A.fillStyle = i : (A.fillStyle = Id[Z++], Z === Id.length && (Z = 0));
                  var J = u[O],
                    f = J * y,
                    b = Y.x + (1 + 3 * O) * V + j * S;
                  if (No(A, b, x - f, S, f), z) {
                    var g = Nk(l) ? l(J, O, d, q) : J,
                      L = Sj(T, g).height;
                    z.add({ x: b, y: x - f - L, width: S, height: L, text: g }) } }
              z && z.each(function (N) { kj(A, N.text, T, k, N.x, N.y, N.width, N.height, db) }) } },
          _ = function (s, f) {
            var y = X(s, mc);
            if (y && y.length > 0) {
              var z = y.length,
                L = X(y[0], gl).length,
                J = f.width / (3 * L + 1),
                a = 0,
                c = X(s, "maxValue"),
                h = X(s, lq),
                O = X(s, fc),
                T = X(s, Qm),
                o = h ? new Ol : $;
              if (c == $) { c = 0;
                for (var j = 0; L > j; j++) {
                  for (var m = 0, i = 0; z > i; i++) m += X(y[i], gl)[j];
                  c = M(c, m) } }
              if (c > 0) {
                for (var j = 0; L > j; j++)
                  for (var D = f.y + f.height, i = 0; z > i; i++) {
                    var U = y[i],
                      B = X(U, dj),
                      P = X(U, gl)[j],
                      F = P / c * f.height;
                    B ? A.fillStyle = B : (A.fillStyle = Id[a++], a === Id.length && (a = 0)), D -= F;
                    var V = { x: f.x + (1 + 3 * j) * J, y: D, width: 2 * J, height: F };
                    No(A, V.x, V.y, V.width, V.height), o && (V.text = Nk(h) ? h(P, j, U, q) : P, o.add(V)) }
                o && o.each(function (j) { kj(A, j.text, O, T, j.x, j.y, j.width, j.height, db) }) } } },
          e = function (Y, G) {
            var b = X(Y, mc);
            if (b && b.length > 0) {
              for (var l = b.length, V = X(b[0], gl).length, B = G.width / (3 * V + 1), i = 0, r = X(Y, lq), y = X(Y, fc), k = X(Y, Qm), O = r ? new Ol : $, c = 0; V > c; c++) {
                for (var d = 0, o = 0; l > o; o++) d += X(b[o], gl)[c];
                if (d > 0) {
                  var Q = G.y + G.height;
                  for (o = 0; l > o; o++) {
                    var F = b[o],
                      t = X(F, dj),
                      p = X(F, gl)[c],
                      K = p / d * G.height;
                    t ? A.fillStyle = t : (A.fillStyle = Id[i++], i === Id.length && (i = 0)), Q -= K;
                    var H = { x: G.x + (1 + 3 * c) * B, y: Q, width: 2 * B, height: K };
                    No(A, H.x, H.y, H.width, H.height), O && (H.text = Nk(r) ? r(p, c, F, q) : p, O.add(H)) } } }
              O && O.each(function (I) { kj(A, I.text, y, k, I.x, I.y, I.width, I.height, db) }) } },
          D = function (C, B) {
            var e = X(C, mc);
            if (e && e.length > 0) {
              var V = e.length,
                d = X(C, "minValue") || 0,
                I = X(C, "maxValue");
              if (I == $ && (I = 0, e.forEach(function (Q) { Q.values.forEach(function (C) { I = M(I, C) }) })), d === I) return;
              for (var S = B.height / (I - d), u = B.y + I * S, v = X(e[0], gl).length, z = B.width / (3 * v + 1), G = 0, D = X(C, "lineWidth") || 2, H = X(C, "line3d"), P = X(C, "linePoint"), y = X(C, lq), p = X(C, fc), l = X(C, Qm), a = 0; V > a; a++) {
                var E = e[a],
                  t = X(E, dj),
                  W = X(E, gl);
                t ? A.strokeStyle = t : (t = A.strokeStyle = Id[G++], G === Id.length && (G = 0)), A.beginPath();
                for (var g = 0; v > g; g++) {
                  var T = B.x + (2 + 3 * g) * z,
                    b = u - W[g] * S;
                  0 === g ? A.moveTo(T, b) : A.lineTo(T, b) }
                if (A.lineWidth = D, A.stroke(), H && hn(A, t, $, D, Y), P || y) {
                  var K, k = D / 2 + 2;
                  for (g = 0; v > g; g++) {
                    var f = W[g];
                    if (T = B.x + (2 + 3 * g) * z, b = u - f * S, Nk(P) ? P(A, T, b, t, g, E, q) : P && (A.fillStyle = t, A.beginPath(), A.arc(T, b, k, 0, Q, !0), A.fill()), Nk(y) ? K = y(f, g, E, q) : y && (K = f), K) {
                      var o = Sj(p, K).height,
                        n = A.shadowBlur;
                      if (n) {
                        var i = A.shadowOffsetX,
                          j = A.shadowOffsetY,
                          w = A.shadowColor;
                        A.shadowOffsetX = 0, A.shadowOffsetY = 0, A.shadowBlur = 0, A.shadowColor = $ }
                      kj(A, K, p, l, T, b - o - k + 2, 0, o, db), n && (A.shadowOffsetX = i, A.shadowOffsetY = j, A.shadowBlur = n, A.shadowColor = w) } } } } } },
          T = { border: O, image: W, text: L, pieChart: V, columnChart: d, stackedColumnChart: _, percentageColumnChart: e, lineChart: D };
        return function (i, p, t, G, w, s, n, d, x) {
          if (p && w && s) { A = i, q = n, R = d, Y = R ? R._zoom ? R._zoom : 1 : 1, m = x;
            var y = w,
              f = s;
            if (ae()) {
              var l, u;
              0 === A[Eg] ? ae[0] && (l = !0) : l = !0, A.texureImage2D ? ae[1] && (u = !0) : u = !0, l && u && (y = t, f = G) }
            if (p.tagName) return A.drawImage(p, y, f, w, s), void 0;
            if (X(p, "visible") !== !1) { m || (m = yo(p.color, q, R));
              var K = Io(p, q, R, w),
                v = mg(p, q, R, s),
                e = { x: 0, y: 0, width: K, height: v, fitSize: X(p, "fitSize") },
                M = X(p, "clip"),
                V = X(p, "opacity");
              e.fitSize && (e.widthScale = K / yo(p.width, q, R), e.heightScale = v / yo(p.height, q, R)), A.save(), wg(A, y, f), (K !== w || v !== s) && A.scale(w / K, s / v), M && (Nk(M) ? M(A, K, v, q, R, p) : (A.beginPath(), A.rect(0, 0, K, v), A.clip())), V != $ && (A.globalAlpha *= V), X(p, "comps").forEach(function (k) {
                if (X(k, yc) !== !1) { vq.splice(0, 0, k);
                  var D = X(k, "opacity"),
                    L = X(k, "shadow"),
                    M = X(k, "type"),
                    u = C(k, e);
                  if (D != $) {
                    var o = A.globalAlpha;
                    A.globalAlpha *= D }
                  if (L) {
                    var K = A.shadowOffsetX,
                      V = A.shadowOffsetY,
                      f = A.shadowBlur,
                      W = A.shadowColor,
                      O = X(k, "shadowOffsetX"),
                      b = X(k, "shadowOffsetY"),
                      h = X(k, "shadowBlur"),
                      s = X(k, "shadowColor");
                    A.shadowOffsetX = (O == $ ? 3 : O) * Y, A.shadowOffsetY = (b == $ ? 3 : b) * Y, A.shadowBlur = (h == $ ? 6 : h) * Y, A.shadowColor = s || ed }
                  if ("save" === M) A.save();
                  else if ("endClip" === M || "restore" === M) A.restore();
                  else if ("clip" === M) A.save(), Zh(A, X(k, "points", J), X(k, "segments", j), !0), A.clip();
                  else if (xq[M] || M === Vn) z(k, M, u, e);
                  else if ("SVGPath" === M) U(k, M, u);
                  else { u = u || { x: 0, y: 0, width: e.width, height: e.height };
                    var G = X(k, Te),
                      a = X(k, "scaleX"),
                      I = X(k, "scaleY"),
                      g = F(k),
                      Q = E(u, u, G, a, I, g);
                    if (Nk(M)) H(k, M), r.drawCompType(M, A, u, k, q, R);
                    else if (r.getCompType(M)) {
                      var P = r.getCompType(M),
                        t = P.func || P;
                      H(k, P), r.drawCompType(t, A, u, k, q, R) } else T[M] ? T[M](k, u) : r.getCompType(M) === B && ai.test(M) && zk(M);
                    Q && Z() }
                  L && (A.shadowOffsetX = K, A.shadowOffsetY = V, A.shadowBlur = f, A.shadowColor = W), D != $ && (A.globalAlpha = o), vq.splice(0, 1) } }), A.restore() } } } }();
    r.getCurrentComp = function () {
        return vq[0] }, r.getParentComp = function () {
        return vq[1] }, r.getInternal = function () {
        return { isEnter: Ac, isEsc: Lj, isSpace: Vq, isLeft: Be, isUp: vf, isRight: ih, isDown: Pj, addMethod: ph, superCall: Dj, toPointsArray: Ic, translateAndScale: Ue, appendArray: Bi, createWorldMatrix: Vr, vec3TransformMat4: Wb, setCanvas: vr, createDiv: tp, createView: ef, createCanvas: Jr, createImage: mq, initContext: dc, layout: Am, fillRect: No, Mat: jm, drawBorder: Bn, isString: An, setBorder: Cr, getPropertyValue: Rc, setPropertyValue: gs, drawVerticalLine: Hc, draw3DRect: tq, getPinchDist: qs, isSameRect: Qe, getPosition: Ye, intersectionLineRect: br, getNodeRect: Jo, getEdgeAgentPosition: od, getImageWidth: Io, getImageHeight: mg, initItemElement: rc, drawPoints: Zh, createG2: ac, closePopup: Qq, isH: bn, createAnim: pj, createNormalMatrix: re, createNormals: am, toFloatArray: Ge, glMV: Ck, batchShape: vc, createNodeMatrix: Pc, getFaceInfo: cr, transformAppend: zg, drawFaceInfo: Ld, to3dPointsArray: $h, setGLDebugMode: function (_) { Ri = _ }, cube: function () {
            return { vs: pl, is: Gq, uv: yl } }, ui: function () {
            return { DataUI: Ap, NodeUI: Db, EdgeUI: We, GroupUI: os, ShapeUI: Ir, GridUI: me, Data3dUI: Fp, Node3dUI: Yl, Shape3dUI: Bd } }, getInternalVersion: function () {
            return "U2FsdGVkX19g7LlqY+EdIt38EaEx5GvHx7Z5GH8Gd6c=" }, getDragger: function () {
            return gp }, addMSMap: function (B) { ph(Iq, B) }, k: X } },
      function (S) {
        function c(l, g) { l != $ && (g == $ && yk != typeof l ? this._54O(l, 256) : this._54O(l, g)) }

        function l() {
          return new c($) }

        function n(E, o, e, A, i, J) {
          for (; --J >= 0;) {
            var P = o * this[E++] + e[A] + i;
            i = G(P / 67108864), e[A++] = 67108863 & P }
          return i }

        function i(c, J, N, f, X, t) {
          for (var C = 32767 & J, U = J >> 15; --t >= 0;) {
            var M = 32767 & this[c],
              A = this[c++] >> 15,
              L = U * M + A * C;
            M = C * M + ((32767 & L) << 15) + N[f] + (1073741823 & X), X = (M >>> 30) + (L >>> 15) + U * A + (X >>> 30), N[f++] = 1073741823 & M }
          return X }

        function F(P, R, C, t, d, O) {
          for (var u = 16383 & R, j = R >> 14; --O >= 0;) {
            var f = 16383 & this[P],
              a = this[P++] >> 14,
              r = j * f + a * u;
            f = u * f + ((16383 & r) << 14) + C[t] + d, d = (f >> 28) + (r >> 14) + j * a, C[t++] = 268435455 & f }
          return d }

        function g($) {
          return vp.charAt($) }

        function W(D, v) {
          var V = Oe[D.charCodeAt(v)];
          return V == $ ? -1 : V }

        function H(w) {
          for (var R = this.t - 1; R >= 0; --R) w[R] = this[R];
          w.t = this.t, w.s = this.s }

        function t(b) { this.t = 1, this.s = 0 > b ? -1 : 0, b > 0 ? this[0] = b : -1 > b ? this[0] = b + this.DV : this.t = 0 }

        function d(G) {
          var J = l();
          return J._58O(G), J }

        function _(D, i) {
          var n, k = this;
          if (16 == i) n = 4;
          else if (8 == i) n = 3;
          else if (256 == i) n = 8;
          else if (2 == i) n = 1;
          else if (32 == i) n = 5;
          else {
            if (4 != i) return k.fromRadix(D, i), void 0;
            n = 2 }
          k.t = 0, k.s = 0;
          for (var g = D.length, S = !1, Q = 0; --g >= 0;) {
            var E = 8 == n ? 255 & D[g] : W(D, g);
            0 > E ? "-" == D.charAt(g) && (S = !0) : (S = !1, 0 == Q ? k[k.t++] = E : Q + n > k.DB ? (k[k.t - 1] |= (E & (1 << k.DB - Q) - 1) << Q, k[k.t++] = E >> k.DB - Q) : k[k.t - 1] |= E << Q, Q += n, Q >= k.DB && (Q -= k.DB)) }
          8 == n && 0 != (128 & D[0]) && (k.s = -1, Q > 0 && (k[k.t - 1] |= (1 << k.DB - Q) - 1 << Q)), k._57O(), S && c.ZERO._78O(k, k) }

        function U() {
          for (var l = this, h = l.s & l.DM; l.t > 0 && l[l.t - 1] == h;) --l.t }

        function V(j) {
          var H = this;
          if (H.s < 0) return "-" + H._85O()[jb](j);
          var v;
          if (16 == j) v = 4;
          else if (8 == j) v = 3;
          else if (2 == j) v = 1;
          else if (32 == j) v = 5;
          else {
            if (4 != j) return H.toRadix(j);
            v = 2 }
          var V, e = (1 << v) - 1,
            P = !1,
            n = "",
            D = H.t,
            Q = H.DB - D * H.DB % v;
          if (D-- > 0)
            for (Q < H.DB && (V = H[D] >> Q) > 0 && (P = !0, n = g(V)); D >= 0;) v > Q ? (V = (H[D] & (1 << Q) - 1) << v - Q, V |= H[--D] >> (Q += H.DB - v)) : (V = H[D] >> (Q -= v) & e, 0 >= Q && (Q += H.DB, --D)), V > 0 && (P = !0), P && (n += g(V));
          return P ? n : "0" }

        function K() {
          var O = l();
          return c.ZERO._78O(this, O), O }

        function D() {
          return this.s < 0 ? this._85O() : this }

        function E(u) {
          var d = this,
            U = d.s - u.s;
          if (0 != U) return U;
          var S = d.t;
          if (U = S - u.t, 0 != U) return d.s < 0 ? -U : U;
          for (; --S >= 0;)
            if (0 != (U = d[S] - u[S])) return U;
          return 0 }

        function w(q) {
          var N, Y = 1;
          return 0 != (N = q >>> 16) && (q = N, Y += 16), 0 != (N = q >> 8) && (q = N, Y += 8), 0 != (N = q >> 4) && (q = N, Y += 4), 0 != (N = q >> 2) && (q = N, Y += 2), 0 != (N = q >> 1) && (q = N, Y += 1), Y }

        function j() {
          var L = this;
          return L.t <= 0 ? 0 : L.DB * (L.t - 1) + w(L[L.t - 1] ^ L.s & L.DM) }

        function z(o, G) {
          var K;
          for (K = this.t - 1; K >= 0; --K) G[K + o] = this[K];
          for (K = o - 1; K >= 0; --K) G[K] = 0;
          G.t = this.t + o, G.s = this.s }

        function b(d, $) {
          for (var L = d; L < this.t; ++L) $[L - d] = this[L];
          $.t = M(this.t - d, 0), $.s = this.s }

        function O(k, B) {
          var A, o = this,
            F = k % o.DB,
            z = o.DB - F,
            r = (1 << z) - 1,
            c = G(k / o.DB),
            X = o.s << F & o.DM;
          for (A = o.t - 1; A >= 0; --A) B[A + c + 1] = o[A] >> z | X, X = (o[A] & r) << F;
          for (A = c - 1; A >= 0; --A) B[A] = 0;
          B[c] = X, B.t = o.t + c + 1, B.s = o.s, B._57O() }

        function m(O, r) {
          var _ = this;
          r.s = _.s;
          var M = G(O / _.DB);
          if (M >= _.t) return r.t = 0, void 0;
          var U = O % _.DB,
            t = _.DB - U,
            I = (1 << U) - 1;
          r[0] = _[M] >> U;
          for (var w = M + 1; w < _.t; ++w) r[w - M - 1] |= (_[w] & I) << t, r[w - M] = _[w] >> U;
          U > 0 && (r[_.t - M - 1] |= (_.s & I) << t), r.t = _.t - M, r._57O() }

        function B(R, z) {
          for (var Y = this, K = 0, u = 0, J = v(R.t, Y.t); J > K;) u += Y[K] - R[K], z[K++] = u & Y.DM, u >>= Y.DB;
          if (R.t < Y.t) {
            for (u -= R.s; K < Y.t;) u += Y[K], z[K++] = u & Y.DM, u >>= Y.DB;
            u += Y.s } else {
            for (u += Y.s; K < R.t;) u -= R[K], z[K++] = u & Y.DM, u >>= Y.DB;
            u -= R.s }
          z.s = 0 > u ? -1 : 0, -1 > u ? z[K++] = Y.DV + u : u > 0 && (z[K++] = u), z.t = K, z._57O() }

        function r(O, C) {
          var v = this.abs(),
            _ = O.abs(),
            S = v.t;
          for (C.t = S + _.t; --S >= 0;) C[S] = 0;
          for (S = 0; S < _.t; ++S) C[S + v.t] = v.am(0, _[S], C, S, 0, v.t);
          C.s = 0, C._57O(), this.s != O.s && c.ZERO._78O(C, C) }

        function L(o) {
          for (var t = this.abs(), M = o.t = 2 * t.t; --M >= 0;) o[M] = 0;
          for (M = 0; M < t.t - 1; ++M) {
            var V = t.am(M, t[M], o, 2 * M, 0, 1);
            (o[M + t.t] += t.am(M + 1, 2 * t[M], o, 2 * M + 1, V, t.t - M - 1)) >= t.DV && (o[M + t.t] -= t.DV, o[M + t.t + 1] = 1) }
          o.t > 0 && (o[o.t - 1] += t.am(M, t[M], o, 2 * M, 0, 1)), o.s = 0, o._57O() }

        function u(M, a, E) {
          var F = M.abs(),
            H = this;
          if (!(F.t <= 0)) {
            var V = H.abs();
            if (V.t < F.t) return a != $ && a._58O(0), E != $ && H._77O(E), void 0;
            E == $ && (E = l());
            var p = l(),
              v = H.s,
              N = M.s,
              h = H.DB - w(F[F.t - 1]);
            h > 0 ? (F._44O(h, p), V._44O(h, E)) : (F._77O(p), V._77O(E));
            var _ = p.t,
              t = p[_ - 1];
            if (0 != t) {
              var d = t * (1 << H.F1) + (_ > 1 ? p[_ - 2] >> H.F2 : 0),
                J = H.FV / d,
                D = (1 << H.F1) / d,
                y = 1 << H.F2,
                O = E.t,
                n = O - _,
                j = a == $ ? l() : a;
              for (p._59O(n, j), E._52O(j) >= 0 && (E[E.t++] = 1, E._78O(j, E)), c.ONE._59O(_, j), j._78O(p, p); p.t < _;) p[p.t++] = 0;
              for (; --n >= 0;) {
                var T = E[--O] == t ? H.DM : G(E[O] * J + (E[O - 1] + y) * D);
                if ((E[O] += p.am(0, T, E, n, 0, _)) < T)
                  for (p._59O(n, j), E._78O(j, E); E[O] < --T;) E._78O(j, E) }
              a != $ && (E._45O(_, a), v != N && c.ZERO._78O(a, a)), E.t = _, E._57O(), h > 0 && E._46O(h, E), 0 > v && c.ZERO._78O(E, E) } } }

        function I(C) {
          var p = l();
          return this.abs()._49O(C, $, p), this.s < 0 && p._52O(c.ZERO) > 0 && C._78O(p, p), p }

        function p(M) { this.m = M }

        function f(r) {
          return r.s < 0 || r._52O(this.m) >= 0 ? r.mod(this.m) : r }

        function C(p) {
          return p }

        function k(m) { m._49O(this.m, $, m) }

        function T(h, m, Q) { h._47O(m, Q), this._74O(Q) }

        function Z(l, x) { l._48O(x), this._74O(x) }

        function x() {
          if (this.t < 1) return 0;
          var x = this[0];
          if (0 == (1 & x)) return 0;
          var o = 3 & x;
          return o = 15 & o * (2 - (15 & x) * o), o = 255 & o * (2 - (255 & x) * o), o = 65535 & o * (2 - (65535 & (65535 & x) * o)), o = o * (2 - x * o % this.DV) % this.DV, o > 0 ? this.DV - o : -o }

        function N(x) {
          var H = this;
          H.m = x, H.mp = x._50O(), H.mpl = 32767 & H.mp, H.mph = H.mp >> 15, H.um = (1 << x.DB - 15) - 1, H.mt2 = 2 * x.t }

        function J(r) {
          var j = l();
          return r.abs()._59O(this.m.t, j), j._49O(this.m, $, j), r.s < 0 && j._52O(c.ZERO) > 0 && this.m._78O(j, j), j }

        function y(R) {
          var x = l();
          return R._77O(x), this._74O(x), x }

        function a(p) {
          for (var v = this; p.t <= v.mt2;) p[p.t++] = 0;
          for (var L = 0; L < v.m.t; ++L) {
            var k = 32767 & p[L],
              q = k * v.mpl + ((k * v.mph + (p[L] >> 15) * v.mpl & v.um) << 15) & p.DM;
            for (k = L + v.m.t, p[k] += v.m.am(0, q, p, L, 0, v.m.t); p[k] >= p.DV;) p[k] -= p.DV, p[++k]++ }
          p._57O(), p._45O(v.m.t, p), p._52O(v.m) >= 0 && p._78O(v.m, p) }

        function Kd(d, h) { d._48O(h), this._74O(h) }

        function hm(C, p, D) { C._47O(p, D), this._74O(D) }

        function Af() {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s) }

        function Aj(I, B) {
          if (I > 4294967295 || 1 > I) return c.ONE;
          var O = l(),
            T = l(),
            X = B._73O(this),
            t = w(I) - 1;
          for (X._77O(O); --t >= 0;)
            if (B._76O(O, T), (I & 1 << t) > 0) B._75O(T, X, O);
            else {
              var z = O;
              O = T, T = z }
          return B.revert(O) }

        function Ek(H, E) {
          var _;
          return _ = 256 > H || E._51O() ? new p(E) : new N(E), this.exp(H, _) }

        function ve() {
          var Y = this;
          if (Y.s < 0) {
            if (1 == Y.t) return Y[0] - Y.DV;
            if (0 == Y.t) return -1 } else {
            if (1 == Y.t) return Y[0];
            if (0 == Y.t) return 0 }
          return (Y[1] & (1 << 32 - Y.DB) - 1) << Y.DB | Y[0] }

        function uj(V, s) {
          return new c(V, s) }

        function _b() {
          var o = this;
          o.n = $, o.e = 0, o.d = $, o.p = $, o.q = $, o.dmp1 = $, o.dmq1 = $, o._10A = $ }

        function Gh(n) {
          return n._53O(this.e, this.n) }

        function Cr(h) {
          var a, y, M, T = "",
            b = 0;
          for (a = 0; a < h.length && h.charAt(a) != Ne; ++a) M = Bb.indexOf(h.charAt(a)), 0 > M || (0 == b ? (T += g(M >> 2), y = 3 & M, b = 1) : 1 == b ? (T += g(y << 2 | M >> 4), y = 15 & M, b = 2) : 2 == b ? (T += g(y), T += g(M >> 2), y = 3 & M, b = 3) : (T += g(y << 2 | M >> 4), T += g(15 & M), b = 0));
          return 1 == b && (T += g(y << 2)), T }

        function Zn(H) {
          var t = H.split(""),
            R = Cr(H);
          return t.forEach(function (P) {
            var n = P.length;
            n > 0 && R && (Xg += o(P)) }), R }

        function Xh(Q, P) {
          var n = Pe._4O.Util._56O(Q, "ss"),
            W = {},
            i = 0;
          return W.v = n == P, W.t = 1, W.s = 0 > i ? -1 : 0, _o = W.v, i > 0 ? W[0] = i : -1 > i ? W[0] = i + W.DV : W.t = 0, [n, W] }

        function to(i) {
          var g = 38,
            L = i.substring(0, g);
          if (L && 30 == L.indexOf("05000420")) {
            var Q = ["ss", i.substring(g)];
            return Q }
          return [] }

        function Bm(N, x) { x = x.replace(Nb, ""), x = x.replace(/[ \n]+/g, "");
          var U = uj(x, 16);
          if (U._55O() > this.n._55O()) return 0;
          var H = this._37O(U),
            K = H[jb](16).replace(/^1f+00/, ""),
            X = to(K);
          if (0 == X.length) return !1;
          for (var j, r, O, h = .5, v = Pq, c = [0, .5, .75, .875, .9375], D = [], R = [], I = [], d = Q / v, M = X[1], $ = Xh(N, M)[0], T = 0, q = 0; T < c.length; T++) {
            var k = 0 === T % 2 ? 0 : .5;
            for (j = 0; v >= j; j++) r = (j + k) * d, O = 1 - c[T], D.push(s(r) * h * O, -h + 2 * c[T] * h, -P(r) * h * O), R.push((j + k) / v, O) }
          for (T = 0; T < c.length - 1; T++) {
            var E = T * (v + 1),
              V = (T + 1) * (v + 1);
            for (j = 0; v > j; j++) I.push(E + j, V + j + 1, V + j, E + j, E + j + 1, V + j + 1) }
          return I.forEach(function (B) { q += B }), M == $ && q > 10 }
        var km, jq = 0xdeadbeefcafe,
          Aq = 15715070 == (16777215 & jq),
          jb = "toString",
          tn = "",
          vq = "nat",
          rb = function () {};
        h = S["D" + 11182[jb](R(2, 5))];
        var Zb = c.prototype;
        og += Xm.substr(0, 1);
        var ur = S.navigator ? S.navigator.appName : "";
        Aq && "Microsoft Internet Explorer" == ur ? (Zb.am = i, km = 30) : Aq && "Netscape" != ur ? (Zb.am = n, km = 26) : (Zb.am = F, km = 28), Zb.DB = km, Zb.DM = (1 << km) - 1, Zb.DV = 1 << km;
        var tp = 52;
        Zb.FV = R(2, tp), Zb.F1 = tp - km, Zb.F2 = 2 * km - tp;
        var Pl, he, vp = "0123456789abcdefghijklmnopqrstuvwxyz",
          Oe = [],
          Jr = function (I) {
            return String.fromCharCode(I) };
        for (Pl = "0".charCodeAt(0), he = 0; 9 >= he; ++he) Oe[Pl++] = he;
        for (Pl = "a".charCodeAt(0), he = 10; 36 > he; ++he) Oe[Pl++] = he;
        for (Pl = "A".charCodeAt(0), he = 10; 36 > he; ++he) Oe[Pl++] = he;
        var Io = p.prototype;
        Io._73O = f, Io.revert = C, Io._74O = k, Io._75O = T, Io._76O = Z;
        var te = N.prototype;
        te._73O = J, te.revert = y, te._74O = a, te._75O = hm, te._76O = Kd, Zb._77O = H, Zb._58O = t, Zb._54O = _, Zb._57O = U, Zb._59O = z, Zb._45O = b, Zb._44O = O, Zb._46O = m, Zb._78O = B, Zb._47O = r, Zb._48O = L, Zb._49O = u, Zb._50O = x, Zb._51O = Af, Zb.exp = Aj, Zb.toString = V, Zb._85O = K, Zb.abs = D, Zb._52O = E, Zb._55O = j, Zb.mod = I, Zb._53O = Ek, c.ZERO = d(0), c.ONE = d(1), Zb._86O = ve;
        var Co = function (P, H) {
          var y = this;
          y.isPublic = !0, typeof P !== yk ? (y.n = P, y.e = H) : P != $ && H != $ && P.length > 0 && H.length > 0 && (y.n = uj(P, 16), y.e = o(H, 16)) };
        om = function () {
          var g, L, B = Zn(nd),
            c = B.substr(0, 4),
            W = B.substr(4, 2),
            b = B.substr(6, 2),
            l = 1,
            P = !l,
            e = X,
            M = [],
            E = ec.charAt(7);
          if (h && (h[jb]().indexOf(vq) < 0 || h[og][jb]().indexOf(vq) < 0 || !B ? g = df(jl[E]) : (B = new h(c - 0, W - l, b - 0), L = B.setHours(9), h[og]() > L ? g = df(jl[E]) : P = !0)), B && g && e) {
            for (var F in g) M.push(F);
            var V, J = g[M[0]],
              x = g[M[1]],
              s = g[M[2]],
              y = g[M[4]],
              r = g[M[5]],
              i = g[M[6]],
              $ = cs._27O(e);
            $ && i && (V = J + x + s + y + "" + r, V && $._31O(V, i) && (P = !0)) }
          return P || (Jj = lr), E };
        var Ve = _b.prototype;
        Ve._37O = Gh, Ve._38O = Co;
        var Bb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          Ne = "=",
          Vh = 25,
          ci = 10,
          nd = "IBgBAQ==",
          Sf = Sf || function (k, A) {
            var g = {},
              F = g._7A = {},
              f = F._6A = function () {
                function d() {}
                return { _80O: function (M) { d.prototype = this;
                    var G = new d;
                    return M && G._5A(M), G.hasOwnProperty("_82O") || (G._82O = function () { G.$super._82O.apply(this, arguments) }), G._82O.prototype = G, G.$super = this, G }, _3A: function () {
                    var B = this._80O();
                    return B._82O.apply(B, arguments), B }, _82O: function () {}, _5A: function (F) {
                    for (var j in F) F.hasOwnProperty(j) && (this[j] = F[j]);
                    F.hasOwnProperty(jb) && (this.toString = F.toString) }, _88O: function () {
                    return this._82O.prototype._80O(this) } } }(),
              V = F._39O = f._80O({ _82O: function (b, Z) { b = this._84O = b || [], this._65O = Z != A ? Z : 4 * b.length }, toString: function (c) {
                  return (c || N).stringify(this) }, _89O: function (O) {
                  var m = this._84O,
                    D = O._84O,
                    W = this._65O,
                    C = O._65O;
                  if (this._57O(), W % 4)
                    for (var B = 0; C > B; B++) {
                      var E = 255 & D[B >>> 2] >>> 24 - 8 * (B % 4);
                      m[W + B >>> 2] |= E << 24 - 8 * ((W + B) % 4) } else if (D.length > 65535)
                      for (var B = 0; C > B; B += 4) m[W + B >>> 2] = D[B >>> 2];
                    else m.push.apply(m, D);
                  return this._65O += C, this }, _57O: function () {
                  var m = this._84O,
                    c = this._65O;
                  m[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4), m.length = q(c / 4) }, _88O: function () {
                  var e = f._88O.call(this);
                  return e._84O = this._84O.slice(0), e }, _87O: function (I) {
                  for (var M = [], i = 0; I > i; i += 4) M.push(0 | 4294967296 * Y);
                  return new V._82O(M, I) } }),
              G = g._2A = {},
              N = G._69O = { stringify: function (O) {
                  var d, P = O._84O,
                    U = O._65O,
                    B = [];
                  for (d = 0; U > d; d++) {
                    var G = 255 & P[d >>> 2] >>> 24 - 8 * (d % 4);
                    B.push((G >>> 4).toString(16)), B.push((15 & G).toString(16)) }
                  return B.join("") }, _68O: function (t) {
                  for (var a = t.length, m = [], $ = 0; a > $; $ += 2) m[$ >>> 3] |= o(t.substr($, 2), 16) << 24 - 4 * ($ % 8);
                  return new V._82O(m, a / 2) } },
              n = G._8A = { stringify: function (Z) {
                  var q, N = Z._84O,
                    Q = Z._65O,
                    B = [];
                  for (q = 0; Q > q; q++) {
                    var s = 255 & N[q >>> 2] >>> 24 - 8 * (q % 4);
                    B.push(Jr(s)) }
                  return B.join("") }, _68O: function (k) {
                  var K, P = k.length,
                    X = [];
                  for (K = 0; P > K; K++) X[K >>> 2] |= (255 & k.charCodeAt(K)) << 24 - 8 * (K % 4);
                  return new V._82O(X, P) } },
              x = G._9A = { stringify: function (Z) {
                  try {
                    return decodeURIComponent(escape(n.stringify(Z))) } catch (Q) {
                    throw new Error("") } }, _68O: function (R) {
                  return n._68O(unescape(encodeURIComponent(R))) } },
              r = F._32O = f._80O({ _1A: function () { this._83O = new V._82O, this._23O = 0 }, _33O: function (k) { typeof k == yk && (k = x._68O(k)), this._83O._89O(k), this._23O += k._65O }, _25O: function (L) {
                  var $ = this._83O,
                    b = $._84O,
                    _ = $._65O,
                    N = this._79O,
                    y = 4 * N,
                    o = _ / y;
                  o = L ? q(o) : M((0 | o) - this._22O, 0);
                  var K = o * N,
                    P = v(4 * K, _);
                  if (K) {
                    for (var s = 0; K > s; s += N) this._20O(b, s);
                    var B = b.splice(0, K);
                    $._65O -= P }
                  return new V._82O(B, P) }, _88O: function () {
                  var R = f._88O.call(this);
                  return R._83O = this._83O._88O(), R }, _22O: 0 });
            F._66O = r._80O({ cfg: f._80O(), _82O: function ($) { this.cfg = this.cfg._80O($), this._1A() }, _1A: function () { r._1A.call(this), this._34O() }, _81O: function (h) {
                return this._33O(h), this._25O(), this }, _72O: function (e) { e && this._33O(e);
                var t = this._21O();
                return t }, _79O: 16, _26O: function (i) {
                return function (O, J) {
                  return new i._82O(J)._72O(O) } }, _19O: function (q) {
                return function (m, V) {
                  return new T._71O._82O(q, V)._72O(m) } } });
            var T = g._67O = {};
            return g }();
        ! function () {
          var U = Sf,
            e = U._7A,
            H = e._39O,
            J = e._66O,
            $ = U._67O,
            t = [],
            O = [];! function () {
            function C(s) {
              for (var E = A(s), B = 2; E >= B; B++)
                if (!(s % B)) return !1;
              return !0 }

            function G(u) {
              return 0 | 4294967296 * (u - (0 | u)) }
            for (var B = 2, S = 0; 64 > S;) C(B) && (8 > S && (t[S] = G(R(B, .5))), O[S] = G(R(B, 1 / 3)), S++), B++ }();
          var l = [],
            g = $._41O = J._80O({ _34O: function () { this._64O = new H._82O(t.slice(0)) }, _20O: function (k, h) {
                for (var R = this._64O._84O, Y = R[0], W = R[1], E = R[2], o = R[3], Q = R[4], L = R[5], G = R[6], M = R[7], I = 0; 64 > I; I++) {
                  if (16 > I) l[I] = 0 | k[h + I];
                  else {
                    var j = l[I - 15],
                      d = (j << 25 | j >>> 7) ^ (j << 14 | j >>> 18) ^ j >>> 3,
                      v = l[I - 2],
                      r = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                    l[I] = d + l[I - 7] + r + l[I - 16] }
                  var C = Q & L ^ ~Q & G,
                    N = Y & W ^ Y & E ^ W & E,
                    H = (Y << 30 | Y >>> 2) ^ (Y << 19 | Y >>> 13) ^ (Y << 10 | Y >>> 22),
                    g = (Q << 26 | Q >>> 6) ^ (Q << 21 | Q >>> 11) ^ (Q << 7 | Q >>> 25),
                    c = M + g + C + O[I] + l[I],
                    B = H + N;
                  M = G, G = L, L = Q, Q = 0 | o + c, o = E, E = W, W = Y, Y = 0 | c + B }
                R[0] = 0 | R[0] + Y, R[1] = 0 | R[1] + W, R[2] = 0 | R[2] + E, R[3] = 0 | R[3] + o, R[4] = 0 | R[4] + Q, R[5] = 0 | R[5] + L, R[6] = 0 | R[6] + G, R[7] = 0 | R[7] + M }, _21O: function () {
                var W = this._83O,
                  a = W._84O,
                  c = 8 * this._23O,
                  z = 8 * W._65O;
                return a[z >>> 5] |= 128 << 24 - z % 32, a[(z + 64 >>> 9 << 4) + 14] = G(c / 4294967296), a[(z + 64 >>> 9 << 4) + 15] = c, W._65O = 4 * a.length, this._25O(), this._64O }, _88O: function () {
                var u = J._88O.call(this);
                return u._64O = this._64O._88O(), u } });
          U._41O = J._26O(g), U._42O = J._19O(g) }();
        var Nb = new RegExp("");
        Nb.compile("[^0-9a-f]", "gi"), _b._28O = -1, _b._29O = -2, Ve._31O = Bm, Ve._63O = Bm, _b._43O = -2;
        var zk = new function () {
          var K = this;
          K._5O = function (s, f) {
            if ("8" != s.substring(f + 2, f + 3)) return 1;
            var d = o(s.substring(f + 3, f + 4));
            return 0 == d ? -1 : d > 0 && 10 > d ? d + 1 : -2 }, K._13O = function (T, P) {
            var G = K._5O(T, P);
            return 1 > G ? "" : T.substring(P + 2, P + 2 + 2 * G) }, K._12O = function (Q, t) {
            var Z = K._13O(Q, t);
            if ("" == Z) return -1;
            var x;
            return x = o(Z.substring(0, 1)) < 8 ? new c(Z, 16) : new c(Z.substring(2), 16), x._86O()
          }, K._6O = function (o, l) {
            var b = K._5O(o, l);
            return 0 > b ? b : l + 2 * (b + 1) }, K._11O = function (d, k) {
            var w = K._6O(d, k),
              S = K._12O(d, k);
            return d.substring(w, w + 2 * S) }, K._10O = function (p, H) {
            var $ = K._6O(p, H),
              Z = K._12O(p, H);
            return $ + 2 * Z }, K._7O = function (d, L) {
            var l = [],
              x = K._6O(d, L);
            l.push(x);
            for (var Q = K._12O(d, L), q = x, Y = 0;;) {
              var B = K._10O(d, q);
              if (B == $ || B - x >= 2 * Q) break;
              if (Y >= 200) break;
              l.push(B), q = B, Y++ }
            return l }
        };
        if (zk._90O = Jr(ci + 24), zk._91O = e + Jr(ci * ci + 8), Pe == $ || !Pe) var Pe = {};
        Pe._4O != $ && Pe._4O || (Pe._4O = {});
        var es = Pe._4O;
        Pe._4O.Util = new function () {
          var T = this;
          T._56O = function (c) {
            var M = new Pe._4O._3O;
            return M._30O(c) }, T._4A = function (H) {
            var p = new Pe._4O._3O;
            return p._36O(H) }, T._11A = function (p) {
            var E = new es._3O;
            return E._30O(p) } }, Pe._4O._3O = function () {
          var L = this;
          L._8O = function (k, Y) {
            if ("ss" == k && "cj" == Y) {
              try { L.md = Sf._67O._41O._3A() } catch (V) { rb(tn) }
              L._24O = function (Q) { L.md._81O(Q) }, L._35O = function (k) {
                var d = Sf._2A._69O._68O(k);
                L.md._81O(d) }, L._60O = function () {
                var P = L.md._72O();
                return P[jb](Sf._2A._69O) }, L._30O = function (V) {
                return L._24O(V), L._60O() }, L._36O = function (G) {
                return L._35O(G), L._60O() } } }, L._24O = function () { rb(tn) }, L._35O = function () { rb(tn) }, L._60O = function () { rb(tn) }, L._30O = function () { rb(tn) }, L._36O = function () { rb(tn) }, L._8O("ss", "cj") }, yf = function (w) {
          var q = Fl[Cl[7]],
            s = 1,
            Q = !1;
          if (ig.a != Fl[cl]) return ig.a;
          if (ig.forEach(function (L) { s *= L }), w > s) {
            if (q) { q = q.split(zk._90O);
              var i = q[3],
                C = q[7],
                n = q[11],
                c = q[19],
                E = q[23],
                R = q[27],
                x = i + C + n + c + E;
              Q = Qb()(x, R) }
            Q || (Ap.prototype._42 = Vo) } else Q = !0;
          return ig.a = Q, Q }, Vh = String.fromCharCode(Vh + 20);
        var jj = function (P) {
            return P = P.replace(Nb, tn), P = P.replace(/[ \n]+/g, tn) },
          $k = "30",
          ee = "06",
          Ak = "02",
          Df = "03",
          Md = uj,
          Pi = /^1f+00/,
          cs = function () {
            var j;
            return j = { _18O: function (w) {
                var W = w,
                  n = W.replace(/\s+/g, ""),
                  K = Cr(n);
                return K }, _14O: function (D) {
                var i = this._18O(D),
                  B = this._15O(i);
                return B }, _15O: function (E) {
                var J = this._17O(E);
                if ("2a864886f70d010101" == J._61O) {
                  var R = this._16O(J.key),
                    u = new _b;
                  return u._38O(R.n, R.e), u }
                rb(tn) }, _16O: function (X) {
                var m = {};
                X.substr(0, 2) != $k && rb(tn);
                var x = zk._7O(X, 0);
                return 2 != x.length && rb(tn), X.substr(x[0], 2) != Ak && rb(tn), m.n = zk._11O(X, x[0]), X.substr(x[1], 2) != Ak && rb(tn), m.e = zk._11O(X, x[1]), m }, _17O: function (I) {
                var J = {};
                J._40O = $;
                var e = zk._7O(I, 0);
                2 != e.length && rb(tn);
                var p = e[0];
                I.substr(p, 2) != $k && rb(tn);
                var w = zk._7O(I, p);
                return 2 != w.length && rb(tn), I.substr(w[0], 2) != ee && rb(tn), J._61O = zk._11O(I, w[0]), I.substr(w[1], 2) == ee ? J._40O = zk._11O(I, w[1]) : I.substr(w[1], 2) == $k && (J._40O = {}, J._40O.p = zk._70O(I, w[1], [0], Ak), J._40O.q = zk._70O(I, w[1], [1], Ak), J._40O.g = zk._70O(I, w[1], [2], Ak)), I.substr(e[1], 2) != Df && rb(tn), J.key = zk._11O(I, e[1]).substr(2), J } }, j._17O ? j : $ }(),
          wd = cs._27O = function (Y) {
            return cs._14O(Y) };
        Qb = function () {
          return function (m, f) { f = jj(f);
            var l = Md(f, R(2, 4)),
              X = this;
            if (!X || !X.n || l._55O() > X.n._55O()) return 0;
            var P = X._37O(l),
              h = P[jb](R(2, 4)).replace(Pi, ""),
              _ = to(h);
            if (0 == _.length) return !1;
            var b = _[0],
              D = _[1],
              Q = function (L) {
                return Pe._4O.Util._56O(L, b) },
              w = Q(m);
            return D == w }.bind(wd(X)) };
        var Bs, sq;
        return function () {
          var N = cm.length - ls.length;
          if (N > 0)
            for (var Y = 0; N > Y; Y++) Bs = es.Util, sq = jj }(), Yf = function (W, Q) { Q = sq(Q);
          var s = wd(Xi),
            h = Zq.length,
            $ = 2 * h,
            c = Md(Q, R(h, $)),
            M = s,
            j = !0;
          if (M) {
            var E = M[ms[0]];
            E && c._55O() <= E._55O() && (j = !1) }
          if (j) return 0;
          var q = M._37O(c),
            _ = q[jb](R(h, $)).replace(Pi, ""),
            e = to(_);
          if (0 == e.length) return !1;
          var N = e[0],
            T = e[1],
            F = Bs._11A(W, N);
          return T == F }, cs
      }(_, y);
    var Ol = t.List = function () { this._as = [];
      var L, u, O = arguments.length;
      if (1 === O) {
        var C = arguments[0];
        if (Pk(C) && (C = C._as), Hq(C))
          for (u = C.length, L = 0; u > L; L++) this._as.push(C[L]);
        else C != $ && this._as.push(C) } else if (O > 1)
        for (L = 0; O > L; L++) this._as.push(arguments[L]) };
    Gl("List", y, { size: function () {
        return this._as.length }, isEmpty: function () {
        return 0 === this._as.length }, add: function (S, m) {
        return m === B ? this._as.push(S) : this._as.splice(m, 0, S) }, addAll: function (K) { Pk(K) && (K = K._as), Hq(K) ? Bi(this._as, K) : this._as.push(K) }, get: function ($) {
        return this._as[$] }, slice: function (r, F) {
        return new Ol(this._as.slice(r, F)) }, remove: function (A) {
        var b = this._as.indexOf(A);
        return b >= 0 && b < this._as.length && this.removeAt(b), b }, removeAt: function (X) {
        return this._as.splice(X, 1)[0] }, set: function (N, T) {
        return this._as[N] = T }, clear: function () {
        return this._as.splice(0, this._as.length) }, contains: function (E) {
        return this._as.indexOf(E) >= 0 }, indexOf: function (I) {
        return this._as.indexOf(I) }, each: function (E, e) {
        for (var s = 0, w = this._as.length; w > s; s++) {
          var g = this._as[s];
          e ? E.call(e, g) : E(g) } }, reverseEach: function (y, D) {
        for (var F = this._as.length - 1; F >= 0; F--) {
          var q = this._as[F];
          D ? y.call(D, q) : y(q) } }, toArray: function (F, q) {
        if (F) {
          for (var A, $ = [], P = 0, r = this._as.length; r > P; P++) A = this._as[P], q ? F.call(q, A) && $.push(A) : F(A) && $.push(A);
          return $ }
        return this._as.concat() }, toList: function (u, B) {
        if (u) {
          for (var V, m = new Ol, f = 0, k = this._as.length; k > f; f++) V = this._as[f], B ? u.call(B, V) && m.add(V) : u(V) && m.add(V);
          return m }
        return new Ol(this) }, reverse: function () { this._as.reverse() }, sort: function (t) {
        return this._as.sort(t ? t : mf), this }, toString: function () {
        return this._as.toString() } });
    var vb = new Ol;
    ph(vb, { size: function () {
        return 0 }, indexOf: function () {
        return -1 }, contains: function () {
        return !1 }, isEmpty: function () {
        return !0 }, sort: Zg, each: Zg, reverseEach: Zg, toArray: function () {
        return [] }, toList: function () {
        return new Ol }, add: im, addAll: im, set: im, remove: im, removeAt: im, clear: im });
    var bi = t.Notifier = function () {};
    Gl("Notifier", y, { contains: function (r, D) {
        if (this._ls)
          for (var n, g = 0, l = this._ls.size(); l > g; g++)
            if (n = this._ls.get(g), r === n.l && D === n.s) return !0;
        return !1 }, add: function (c, N, p) {
        var g = this,
          Q = { l: c, s: N, a: p };
        g._ls || (g._ls = new Ol), g._f ? (g._as || (g._as = new Ol), g._as.add(Q)) : Q.a ? g._ls.add(Q, 0) : g._ls.add(Q) }, remove: function (R, E) {
        var K = this;
        K._ls && (K._f ? (K._rs || (K._rs = new Ol), K._rs.add({ l: R, s: E })) : K._remove(R, E)) }, _remove: function (M, Z) {
        for (var h, $ = this._ls, R = 0, J = $.size(); J > R; R++)
          if (h = $.get(R), h.l === M && h.s === Z) return $.removeAt(R), void 0 }, fire: function (F) {
        var L = this,
          b = L._ls;
        if (L._b = 1e4, b) { L._f = 1;
          for (var D, S = 0, s = b.size(); s > S; S++) D = b.get(S), D.s ? D.l.call(D.s, F) : D.l(F);
          if (delete L._f, L._rs) {
            for (s = L._rs.size(), S = 0; s > S; S++) D = L._rs.get(S), L._remove(D.l, D.s);
            delete L._rs }
          if (L._as) {
            for (s = L._as.size(), S = 0; s > S; S++) D = L._as.get(S), D.a ? b.add(D, 0) : b.add(D);
            delete L._as } } } });
    var sk = t.Data = function () { this._id = wo() };
    Gl("Data", y, { ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop", "dataBindings"], ms_dm: 1, ms_attr: 1, _icon: $, _parent: $, _children: vb, _childMap: $, _styleMap: $, _layer: 0, _adjustChildrenToTop: !1, getUIClass: function () {
        return $ }, _22Q: function () {
        return $ }, s: function (A, y) {
        var D = this;
        if (2 === arguments.length) D.setStyle(A, y);
        else {
          if (!Cq(A)) return D.getStyle(A);
          for (var R in A) D.setStyle(R, A[R]) }
        return D }, fp: function (E, G, F) {
        return this.firePropertyChange(E, G, F) }, firePropertyChange: function (U, V, v) {
        if (V === v) return !1;
        var l = this,
          b = { property: U, oldValue: V, newValue: v, data: l };
        return l._dataModel && l._dataModel.handleDataPropertyChange(b), l.onPropertyChanged(b), !0 }, onPropertyChanged: function (K) {
        var E = this,
          c = E._parent,
          M = K.property;
        if (cp(c)) {
          var k = E.s(Hn),
            L = "s:ingroup" === M;
          (k && Tb[M] || M === L) && c._81I(), (k || L) && c.fp("childChange", !0, !1) }
        Vd(c) && Tb[M] && c.updateFromChildren() }, _21I: function (D) {
        var W = this;
        if (D && W._dataModel) throw "Remove data from dataModel before adding";
        W._dataModel = D }, removeFromDataModel: function () { this._dataModel ? this._dataModel.remove(this) : this.setParent(null) }, clearChildrenFromDataModel: function () {
        for (var j = 0, U = this._children.toArray(), W = U.length; W > j; j++) U[j].removeFromDataModel() }, getId: function () {
        return this._id }, setId: function (b) { this._id = b }, getChildren: function () {
        return this._children }, size: function () {
        return this._children.size() }, toChildren: function (T, $) {
        return this._children.toList(T, $) }, eachChild: function (w, $) { this._children.each(w, $) }, addChild: function (s, L) {
        var W = this;
        s !== W && (W._children === vb && (W._children = new Ol, W._childMap = {}), L === B && (L = W._children.size()), W._childMap[s._id] || W.isDescendantOf(s) || (s._parent && s._parent.removeChild(s), (0 > L || L > W._children.size()) && (L = W._children.size()), W._children.add(s, L), W._childMap[s._id] = s, s.setParent(W), W.onChildAdded(s, L), W.fp(hg, $, s))) }, onChildAdded: function () {}, removeChild: function (k) {
        var w = this;
        if (w._childMap && w._childMap[k._id]) {
          var v = w._children.remove(k);
          delete w._childMap[k._id], w.fp(hg, k, $), k.setParent($), w.onChildRemoved(k, v) } }, onChildRemoved: function () {}, getChildAt: function (W) {
        return this._children.get(W) }, clearChildren: function () {
        var Y = this;
        if (!Y._children.isEmpty())
          for (var h = 0, v = Y._children.toArray(), K = v.length; K > h; h++) Y.removeChild(v[h]) }, getParent: function () {
        return this._parent }, setParent: function (Q) {
        var T = this;
        if (!(T._73I || T._parent === Q || T === Q || Q && Q.isDescendantOf(T))) {
          var s = T._parent;
          T._parent = Q, T._73I = 1, s && s.removeChild(T), Q && Q.addChild(T), delete T._73I, T.fp("parent", s, Q), T.onParentChanged(s, Q) } }, onParentChanged: function () {}, hasChildren: function () {
        return this._children.size() > 0 }, isEmpty: function () {
        return this._children.isEmpty() }, isRelatedTo: function (z) {
        return z ? this.isDescendantOf(z) || z.isDescendantOf(this) : !1 }, isParentOf: function (P) {
        return P && this._childMap ? !!this._childMap[P._id] : !1 }, isDescendantOf: function (j) {
        if (!j || j.isEmpty()) return !1;
        for (var l = this._parent; l;) {
          if (j === l) return !0;
          l = l._parent }
        return !1 }, getStyleMap: function () {
        return this._styleMap }, getStyle: function (y, D) { D === B && (D = 1);
        var $ = this._styleMap ? this._styleMap[y] : B;
        return $ === B && D ? U[y] : $ }, setStyle: function (O, F) {
        var $ = this;
        $._styleMap || ($._styleMap = {});
        var J = $._styleMap[O];
        F === B ? delete $._styleMap[O] : $._styleMap[O] = F, $.fp("s:" + O, J, F) && $.onStyleChanged(O, J, F) }, onStyleChanged: function () {}, iv: function () { this.invalidate() }, invalidate: function () { this.fp("*", !1, !0) }, toString: function () {
        var O = this;
        return O._displayName || O._name || O._tag || O._id }, toLabel: function () {
        return this._displayName || this._name }, addStyleIcon: function (F, T) {
        var g = this,
          k = g.s(Zo);
        k || g.s(Zo, k = {}), T ? k[F] = T : delete k[F], g.fp(Zo, $, k) }, removeStyleIcon: function (u) {
        var N = this.s(Zo);
        if (N) {
          var l = N[u];
          delete N[u], this.fp(Zo, $, N) }
        return l }, getSerializableProperties: function () {
        return { name: 1, displayName: 1, icon: 1, toolTip: 1, parent: 1, layer: 1, tag: 1, adjustChildrenToTop: 1, dataBindings: 1 } }, getSerializableStyles: function () {
        var O, A = {};
        for (O in this._styleMap) A[O] = 1;
        return A } });
    var he = t.DataModel = function () {
      var o = this;
      o._datas = new Ol, o._dataMap = {}, o._roots = new Ol, o._rootMap = {}, o._78O = {}, o._36I = new bi, o._35I = new bi, o._selectionModel = new Vg(o);
      var q = o._29Q = [],
        w = o._scheduleCallback = function () {
          for (var n = Date.now(), P = 0; P < q.length; P++) {
            var O = q[P];
            O.enabled && n - O.lastTime > O.interval && (o.each(function (s) { O.action(s) }), O.lastTime = n) }
          q.length && (o._30Q = _.requestAnimationFrame(w)) } };
    Gl("DataModel", y, { ms_fire: 1, ms_attr: 1, ms_ac: ["name", "autoAdjustIndex", "hierarchicalRendering", "background", "init"], _name: B, _autoAdjustIndex: !0, _hierarchicalRendering: !1, _background: B, _init: B, sm: function () {
        return this.getSelectionModel() }, mm: function (X, P, $) { this.addDataModelChangeListener(X, P, $) }, umm: function (_, V) { this.removeDataModelChangeListener(_, V) }, md: function (M, V, f) { this.addDataPropertyChangeListener(M, V, f) }, umd: function (P, H) { this.removeDataPropertyChangeListener(P, H) }, mh: function (J, A, $) { this.addHierarchyChangeListener(J, A, $) }, umh: function (I, v) { this.removeHierarchyChangeListener(I, v) }, getHistoryManager: function () {
        return this._historyManager }, getAttrObject: function () {
        return this._attrObject }, setAttrObject: function (g) {
        return this._attrObject = g }, getSelectionModel: function () {
        return this._selectionModel }, size: function () {
        return this._datas.size() }, isEmpty: function () {
        return this._datas.isEmpty() }, getRoots: function () {
        return this._roots }, getDatas: function () {
        return this._datas }, getDataById: function (A) {
        return this._dataMap[A] }, removeDataById: function (k) { this.remove(this.getDataById(k)) }, toDatas: function (C, b) {
        return this._datas.toList(C, b) }, each: function (s, v) { this._datas.each(s, v) }, getDataByTag: function (Z) {
        return this._78O[Z] }, removeDataByTag: function (L) { this.remove(this.getDataByTag(L)) }, add: function (V, g) {
        var R = this,
          I = V._id,
          k = V._tag,
          v = R._roots;
        if (R._dataMap[I]) throw "'" + I + "' already exists";
        k != $ && (R._78O[k] = V), R._dataMap[I] = V, R._datas.add(V), V._parent || (R._rootMap[I] = V, g >= 0 ? v.add(V, g) : v.add(V)), V._21I(R), R.onAdded(V), R._36I.fire({ kind: "add", data: V }) }, onAdded: function () {}, remove: function (u, v) {
        if (u) {
          var B = this,
            U = u._id,
            g = v && v.keepChildren,
            m = u.getTag(),
            o = B.getHistoryManager();
          g && (B._removingData || (B._removingData = u)), u._dataModel === B && (o && o.beginInteraction(), B.prepareRemove(u), u.toChildren().each(function (i) { B.remove(i, v) }, B), g ? B._removingData == u && (u._parent && u._parent.removeChild(u), delete B._removingData) : u._parent && u._parent.removeChild(u), B._datas.remove(u), delete B._dataMap[U], m != $ && delete B._78O[m], B._rootMap[U] && (delete B._rootMap[U], B._roots.remove(u)), u._21I($), B.onRemoved(u), B._36I.fire({ kind: Pr, data: u }), o && o.endInteraction()) } }, onRemoved: function () {}, prepareRemove: function () {}, clear: function () {
        var K = this;
        K._datas.size() > 0 && (K._datas.each(function (H) { H._21I($) }), K._datas.clear(), K._dataMap = {}, K._roots.clear(), K._rootMap = {}, K._78O = {}, K._36I.fire({ kind: Do })) }, contains: function (f) {
        return f && f._dataModel === this }, handleDataPropertyChange: function (Z) {
        var h = this,
          W = Z.data,
          L = Z.property;
        if ("parent" === L) {
          var J = W._id,
            q = h._rootMap,
            z = h._roots;
          W._parent ? q[J] && (delete q[J], z.remove(W)) : q[J] || (q[J] = W, z.add(W)) } else if ("tag" === L) {
          var T = Z.oldValue,
            y = Z.newValue,
            n = h._78O;
          T != $ && delete n[T], y != $ && (n[y] = W) }
        this.onDataPropertyChanged(W, Z), this._35I.fire(Z) }, onDataPropertyChanged: function () {}, addDataModelChangeListener: function (n, P, D) { this._36I.add(n, P, D) }, removeDataModelChangeListener: function (c, r) { this._36I.remove(c, r) }, addDataPropertyChangeListener: function (V, u, c) { this._35I.add(V, u, c) }, removeDataPropertyChangeListener: function (p, f) { this._35I.remove(p, f) }, _38I: function (I, K, _) { this._37I && this._37I.fire({ data: I, oldIndex: K, newIndex: _ }) }, addHierarchyChangeListener: function (N, q, M) { this._37I || (this._37I = new bi), this._37I.add(N, q, M) }, removeHierarchyChangeListener: function (f, A) { this._37I.remove(f, A) }, getSiblings: function (n) {
        var Q = n._parent;
        return Q ? Q._children : this._roots }, eachByHierarchical: function (o, A, y) {
        if (A) return this._eachByHierarchical(o, A, y);
        for (var e = 0, N = this._roots, x = N.size(); x > e; e++)
          if (this._eachByHierarchical(o, N.get(e), y) === !1) return !1;
        return !0 }, _eachByHierarchical: function ($, c, w) {
        if (w) {
          if ($.call(w, c) === !1) return !1 } else if ($(c) === !1) return !1;
        for (var n = c.size(), Y = 0; n > Y; Y++)
          if (this._eachByHierarchical($, c.getChildAt(Y), w) === !1) return !1;
        return !0 }, reverseEachByHierarchical: function (g, J, $) {
        if (J) return this._reverseEachByHierarchical(g, J, $);
        for (var i = this._roots, b = i.size(), D = b - 1; D >= 0; D--)
          if (this._reverseEachByHierarchical(g, i.get(D), $) === !1) return !1;
        return !0 }, _reverseEachByHierarchical: function (g, Y, y) {
        for (var U = Y.size(), T = U - 1; T >= 0; T--)
          if (this._reverseEachByHierarchical(g, Y.getChildAt(T), y) === !1) return !1;
        if (y) {
          if (g.call(y, Y) === !1) return !1 } else if (g(Y) === !1) return !1;
        return !0 }, eachByDepthFirst: function (L, R, l) {
        if (R) return this._11I(L, R, l);
        for (var B = 0, $ = this._roots, S = $.size(); S > B; B++)
          if (this._11I(L, $.get(B), l) === !1) return !1;
        return !0 }, _11I: function (A, D, f) {
        for (var K = D.size(), $ = 0; K > $; $++)
          if (this._11I(A, D.getChildAt($), f) === !1) return !1;
        if (f) {
          if (A.call(f, D) === !1) return !1 } else if (A(D) === !1) return !1;
        return !0 }, eachByBreadthFirst: function (p, d, I) {
        var M = new Ol;
        for (d ? M.add(d) : this._roots.each(M.add, M); M.size() > 0;)
          if (d = M.removeAt(0), d.eachChild(M.add, M), I) {
            if (p.call(I, d) === !1) return !1 } else if (p(d) === !1) return !1;
        return !0 }, moveTo: function (c, C) {
        var h = this.getSiblings(c),
          O = h.indexOf(c);
        O === C || 0 > O || C >= 0 && C <= h.size() && (h.remove(c), C > h.size() && C--, h.add(c, C), this._38I(c, O, C)) }, moveUp: function (d) { this.moveTo(d, this.getSiblings(d).indexOf(d) - 1) }, moveDown: function (V) { this.moveTo(V, this.getSiblings(V).indexOf(V) + 1) }, moveToTop: function (E) { this.moveTo(E, 0) }, moveToBottom: function (P) { this.moveTo(P, this.getSiblings(P).size()) }, moveSelectionUp: function (J) { J || (J = this.sm());
        var C = new Ol;
        sg(J, C, this._roots), C.each(this.moveUp, this) }, moveSelectionDown: function (n) { n || (n = this.sm());
        var A = new Ol;
        wr(n, A, this._roots), A.each(this.moveDown, this) }, moveSelectionToTop: function (j) { j || (j = this.sm());
        var u = new Ol;
        wf(j, u, this._roots), u.each(this.moveToTop, this) }, moveSelectionToBottom: function (y) { y || (y = this.sm());
        var J = new Ol;
        De(y, J, this._roots), J.each(this.moveToBottom, this) }, moveToIndex: function (R, A, d) {
        var H = this.getDatas();
        null == d && (d = H.indexOf(R)), d === A || 0 > d || A >= 0 && A <= H.size() && (H.remove(R), A > H.size() && A--, H.add(R, A), this._76I(R, d, A)) }, bringForward: function (x) { this.moveToIndex(x, this.getDatas().indexOf(x) + 1) }, bringToFront: function (G) { this.moveToIndex(G, this.size()) }, sendBackward: function (v) { this.moveToIndex(v, this.getDatas().indexOf(v) - 1) }, sendToBack: function (H) { this.moveToIndex(H, 0) }, bringSelectionForward: function (a) { a || (a = this.sm());
        for (var R = new Ol, d = this.getDatas(), v = !1, C = 0; C < d.size(); C++) {
          var F = d.get(d.size() - 1 - C);
          a.contains(F) ? v && R.add(F) : v = !0 }
        R.each(this.bringForward, this) }, bringSelectionToFront: function (f) { f || (f = this.sm());
        for (var N = new Ol, Z = this.getDatas(), z = 0; z < Z.size(); z++) {
          var S = Z.get(z);
          f.contains(S) && N.add(S) }
        N.each(this.bringToFront, this) }, sendSelectionBackward: function (a) { a || (a = this.sm());
        for (var k = new Ol, P = this.getDatas(), u = !1, f = 0; f < P.size(); f++) {
          var N = P.get(f);
          a.contains(N) ? u && k.add(N) : u = !0 }
        k.each(this.sendBackward, this) }, sendSelectionToBack: function (S) { S || (S = this.sm());
        for (var x = new Ol, p = this.getDatas(), n = 0; n < p.size(); n++) {
          var I = p.get(p.size() - 1 - n);
          S.contains(I) && x.add(I) }
        x.each(this.sendToBack, this) }, addScheduleTask: function (z) {
        var F = this;
        F.removeScheduleTask(z), z.enabled == $ && (z.enabled = !0), z.interval == $ && (z.interval = 10), z.action == $ && (z.action = Zg), z.lastTime = Date.now(), F._29Q.push(z), F._30Q == $ && (F._30Q = _.requestAnimationFrame(F._scheduleCallback)) }, removeScheduleTask: function (e) {
        var j = this,
          q = j._29Q,
          f = q.indexOf(e);
        f >= 0 && q.splice(f, 1), q.length || j._30Q == $ || (_.cancelAnimationFrame(j._30Q), delete j._30Q) } });
    var Vg = t.SelectionModel = function (x) {
      var K = this;
      K._68O = Dq, K._map = {}, K._73O = new Ol, K._74I = new bi, K._21I(x) };
    Gl("SelectionModel", y, { ms_fire: 1, ms_dm: 1, ms: function (D, A, $) { this.addSelectionChangeListener(D, A, $) }, ums: function (x, n) { this.removeSelectionChangeListener(x, n) }, fd: function () {
        return this.getFirstData() }, ld: function () {
        return this.getLastData() }, sg: function () {
        return this._68O === Qj }, co: function (w) {
        return this._map[w._id] != $ }, ss: function (v) { this.setSelection(v) }, as: function (u) { this.appendSelection(u) }, rs: function (L) { this.removeSelection(L) }, cs: function () { this.clearSelection() }, sa: function () { this.selectAll() }, getSelectionMode: function () {
        return this._68O }, setSelectionMode: function (v) {
        var J = this;
        if (J._68O !== v && (v === ms || v === Qj || v === Dq)) { J.cs();
          var E = J._68O;
          J._68O = v, J.fp("selectionMode", E, v) } }, _21I: function (s) {
        var o = this,
          k = o._dataModel;
        k !== s && (k && (o.cs(), k.umm(o.handleDataModelChange, o)), o._dataModel = s, s.mm(o.handleDataModelChange, o, !0), o.fp(dg, k, s)) }, dispose: function () {
        var Z = this;
        Z.cs(), Z._dataModel.umm(Z.handleDataModelChange, Z) }, handleDataModelChange: function (P) {
        var T = this;
        if (P.kind === Pr) {
          var W = P.data;
          T.co(W) && (T._73O.remove(W), delete T._map[W._id], T._75I(Pr, new Ol(W))) } else P.kind === Do && T.cs() }, getFilterFunc: function () {
        return this._filterFunc }, setFilterFunc: function (M) {
        var F = this;
        if (F._filterFunc !== M) { F.cs();
          var P = F._filterFunc;
          F._filterFunc = M, F.fp("filterFunc", P, F._filterFunc) } }, _75I: function (p, v, B, N) { B && (this._73O.each(function (Z) { N[Z._id] ? B.remove(Z) : B.add(Z) }), v = B.toList()), this._74I.fire({ kind: p, datas: new Ol(v) }) }, addSelectionChangeListener: function (H, b, e) { this._74I.add(H, b, e) }, removeSelectionChangeListener: function (L, J) { this._74I.remove(L, J) }, _97O: function (C, Z) {
        for (var U, A = this, _ = 0, W = new Ol(C); _ < W.size(); _++) U = W.get(_), (A._filterFunc && !A._filterFunc(U) || Z && A.co(U) || !Z && !A.co(U) || !A._dataModel.contains(U)) && (W.removeAt(_), _--);
        return W }, appendSelection: function (v) {
        var T = this;
        if (T._68O !== ms) {
          var U, g, n = T._73O,
            l = T._97O(v, !0);
          l.isEmpty() || (T.sg() && (U = new Ol(n), g = T._map, n.clear(), T._map = {}, l = new Ol(l.get(l.size() - 1))), l.each(function (Z) { n.add(Z), T._map[Z._id] = Z }), T._75I("append", l, U, g)) } }, removeSelection: function (e) {
        var X = this,
          U = X._97O(e),
          L = 0,
          g = U.size();
        if (0 !== g) {
          for (; g > L; L++) {
            var s = U.get(L);
            X._73O.remove(s), delete X._map[s._id] }
          X._75I(Pr, U) } }, toSelection: function (i, H) {
        return this._73O.toList(i, H) }, getSelection: function () {
        return this._73O }, each: function (A, f) { this._73O.each(A, f) }, setSelection: function (o) {
        var n = this,
          G = n._73O;
        if (n._68O !== ms && !(G.isEmpty() && !o || 1 === G.size() && n.ld() === o)) {
          var r = new Ol(G),
            x = n._map;
          G.clear(), n._map = {};
          var A = n._97O(o, !0);
          n.sg() && A.size() > 1 && (A = new Ol(A.get(A.size() - 1))), A.each(function (Y) { G.add(Y), n._map[Y._id] = Y }), n._75I("set", $, r, x) } }, clearSelection: function () {
        var Q = this,
          o = Q._73O;
        if (o.size() > 0) {
          var G = o.toList();
          o.clear(), Q._map = {}, Q._75I(Do, G) } }, selectAll: function () {
        var q = this;
        if (q._68O !== ms) {
          var Q, Z, f = q._dataModel.toDatas();
          if (q._filterFunc)
            for (Q = 0; Q < f.size(); Q++) Z = f.get(Q), q._filterFunc(Z) || (f.removeAt(Q), Q--);
          var i = q._73O,
            B = new Ol(i),
            a = q._map;
          i.clear(), q._map = {}, q.sg() && f.size() > 1 && (f = new Ol(f.get(f.size() - 1)));
          var S = f.size();
          for (Q = 0; S > Q; Q++) Z = f.get(Q), i.add(Z), q._map[Z._id] = Z;
          q._75I("all", $, B, a) } }, size: function () {
        return this._73O.size() }, isEmpty: function () {
        return this._73O.isEmpty() }, contains: function (K) {
        return this._map[K._id] != $ }, getLastData: function () {
        var S = this._73O;
        return S.size() > 0 ? S.get(S.size() - 1) : $ }, getFirstData: function () {
        var r = this._73O;
        return r.size() > 0 ? r.get(0) : $ }, isSelectable: function (D) {
        var i = this;
        return D && i._68O !== ms ? i._filterFunc ? i._filterFunc(D) : !0 : !1 }, getTopSelection: function () {
        var L = this,
          q = new Ol;
        return L._73O.each(function (O) {
          for (var j = O.getParent(); j;) {
            if (L.contains(j)) { O = $;
              break }
            j = j.parent }
          O && q.add(O) }), q } });
    var Jo = function () {
      return fj(0),
        function (x, X) {
          var D;
          if (cp(X) && X.isExpanded()) {
            var g = x.getDataUI(X);
            g && g._88I && (D = g._88I.rect) }
          return D ? D : X.getRect() } }();
    ph(r, { edgeGroupAgentFunc: $, graphViewAutoScrollZone: 16, graphViewResettable: !1, graphViewPannable: !0, graphViewRectSelectable: !0, graphViewScrollBarVisible: !0, graphViewRectSelectBorderColor: j.rectSelectBorder, graphViewRectSelectBackground: Nb, graphViewEditPointSize: c ? 17 : 7, graphViewEditPointBorderColor: j.editPointBorder, graphViewEditPointBackground: j.editPointBackground, setEdgeType: function (T, d, V) { Xp[T] = d, Ab[T] = V }, getEdgeType: function (a) {
        return Xp[a] }, getEdgeTypeMap: function () {
        return Xp }, getNodeRect: Jo }, !0), ph(U, { "2d.selectable": !0, "2d.visible": !0, "2d.movable": !0, "2d.editable": !0, "2d.move.mode": B, "image.stretch": "fill", icons: B, ingroup: !0, "body.color": B, opacity: B, pixelPerfect: !0, "select.color": xb, "select.width": 1, "select.padding": 2, "select.type": ns, shadow: !1, "shadow.blur": 6, "shadow.offset.x": 3, "shadow.offset.y": 3, "border.color": B, "border.width": 2, "border.padding": 2, "border.type": ns, label: B, "label.font": B, "label.color": nd, "label.background": B, "label.position": 31, "label.position.fixed": !1, "label.offset.x": 0, "label.offset.y": 2, "label.rotation": B, "label.max": B, "label.opacity": B, "label.scale": 1, "label.align": B, "label.selectable": !0, label2: B, "label2.font": B, "label2.color": nd, "label2.background": B, "label2.position": 34, "label2.position.fixed": !1, "label2.offset.x": 0, "label2.offset.y": -2, "label2.rotation": B, "label2.max": B, "label2.opacity": B, "label2.scale": 1, "label2.align": B, "label2.selectable": !0, note: B, "note.expanded": !0, "note.font": B, "note.color": nq, "note.background": xb, "note.position": 8, "note.offset.x": -3, "note.offset.y": 3, "note.max": B, "note.toggleable": !0, "note.border.width": 1, "note.border.color": B, "note.opacity": B, "note.scale": 1, "note.align": B, note2: B, "note2.expanded": !0, "note2.font": B, "note2.color": nq, "note2.background": xb, "note2.position": 3, "note2.offset.x": 3, "note2.offset.y": -3, "note2.max": B, "note2.toggleable": !0, "note2.border.width": 1, "note2.border.color": B, "note2.opacity": B, "note2.scale": 1, "note2.align": B, "group.type": B, "group.image": B, "group.image.stretch": "fill", "group.repeat.image": B, "group.padding": 8, "group.padding.left": 0, "group.padding.right": 0, "group.padding.top": 0, "group.padding.bottom": 0, "group.position": 17, "group.toggleable": !0, "group.title.font": B, "group.title.color": nq, "group.title.background": j.groupTitleBackground, "group.title.align": ci, "group.background": j.groupBackground, "group.depth": 1, "group.border.width": 1, "group.border.pattern": B, "group.border.color": hj, "group.border.cap": Wi, "group.border.join": eg, "group.gradient": $, "group.gradient.color": "#FFF", shape: B, "shape.background": hj, "shape.repeat.image": B, "shape.border.width": 0, "shape.border.width.absolute": !1, "shape.border.color": hj, "shape.border.3d": !1, "shape.border.3d.color": B, "shape.border.3d.accuracy": B, "shape.border.cap": Wi, "shape.border.join": eg, "shape.border.pattern": B, "shape.gradient": $, "shape.gradient.color": "#FFF", "shape.depth": 0, "shape.dash": !1, "shape.dash.pattern": kl, "shape.dash.offset": 0, "shape.dash.color": sb, "shape.dash.width": B, "shape.dash.3d": !1, "shape.dash.3d.color": B, "shape.dash.3d.accuracy": B, "shape.polygon.side": 6, "shape.arc.from": i, "shape.arc.to": Q, "shape.arc.close": !0, "shape.arc.oval": !1, "shape.corner.radius": B, "edge.type": B, "edge.points": B, "edge.segments": B, "edge.color": hj, "edge.width": 2, "edge.width.absolute": !1, "edge.offset": 20, "edge.group": 0, "edge.expanded": !0, "edge.gap": 12, "edge.toggleable": !0, "edge.center": !1, "edge.3d": !1, "edge.3d.color": B, "edge.3d.accuracy": B, "edge.cap": Wi, "edge.join": eg, "edge.source.position": 17, "edge.source.anchor.x": B, "edge.source.anchor.y": B, "edge.source.offset.x": 0, "edge.source.offset.y": 0, "edge.target.position": 17, "edge.target.anchor.x": B, "edge.target.anchor.y": B, "edge.target.offset.x": 0, "edge.target.offset.y": 0, "edge.pattern": B, "edge.dash": !1, "edge.dash.pattern": kl, "edge.dash.offset": 0, "edge.dash.color": sb, "edge.dash.width": B, "edge.dash.3d": !1, "edge.dash.3d.color": B, "edge.dash.3d.accuracy": B, "edge.independent": !1, "attach.row.index": 0, "attach.column.index": 0, "attach.row.span": 1, "attach.column.span": 1, "attach.padding": 0, "attach.padding.left": 0, "attach.padding.right": 0, "attach.padding.top": 0, "attach.padding.bottom": 0, "attach.index": -1, "attach.offset": 0, "attach.offset.relative": !1, "attach.offset.opposite": !1, "attach.thickness": B, "attach.gap": 0, "attach.gap.relative": !1, "grid.row.count": 1, "grid.column.count": 1, "grid.row.percents": B, "grid.column.percents": B, "grid.border": 1, "grid.border.left": 0, "grid.border.right": 0, "grid.border.top": 0, "grid.border.bottom": 0, "grid.gap": 1, "grid.background": j.gridBackground, "grid.depth": 1, "grid.cell.depth": -1, "grid.cell.border.color": j.gridCellBorderColor, "grid.block": B, "grid.block.padding": 3, "grid.block.width": 1, "grid.block.color": j.gridBlockColor, text: "", "text.align": "left", "text.vAlign": "middle", "text.color": nd, "text.font": Eb, "text.shadow": !1, "text.shadow.color": ed, "text.shadow.blur": 6, "text.shadow.offset.x": 3, "text.shadow.offset.y": 3 }, !0), ph(he, { _76I: function (D, z, O) { this._39I && this._39I.fire({ data: D, oldIndex: z, newIndex: O }) }, addIndexChangeListener: function (z, H, s) {
        var L = this;
        L._39I || (L._39I = new bi), L._39I.add(z, H, s) }, removeIndexChangeListener: function (U, V) { this._39I.remove(U, V) }, prepareRemove: function (Y) { lf(Y) && (Y.setSource($), Y.setTarget($)), Y._70O && Y._70O.toList().each(this.remove, this), Y._69O && Y._69O.toList().each(function (w) { w.setHost($) }), Y._host && Y.setHost($) }, onAdded: function (m) { this.isAutoAdjustIndex() && this.adjustIndex(m) }, onDataPropertyChanged: function (h, Z) { tn[Z.property] && this.isAutoAdjustIndex() && this.adjustIndex(h) }, isAdjustable: function (c) {
        return pg(c) || lf(c) }, isAdjustedToBottom: function (Z) {
        return cp(Z) ? Z.isExpanded() && Jc(Z) : !1 }, adjustIndex: function (M) {
        var f = this;
        this.isHierarchicalRendering() || (f.isAdjustedToBottom(M) ? (f.sendToBottom(M), M.eachChild(f.adjustIndex, f)) : f.sendToTop(M)) }, sendToTop: function (p) {
        var S = this;
        if (S.contains(p) && S.isAdjustable(p)) {
          var C = S._datas;
          if (p !== C.get(S.size() - 1)) {
            var w = C.indexOf(p);
            C.removeAt(w), C.add(p), S._76I(p, w, S.size() - 1) }
          if (lf(p)) {
            var G = p._40I;
            G && !S.isAdjustedToBottom(G) && S.sendToTop(G), G = p._41I, G && !S.isAdjustedToBottom(G) && S.sendToTop(G) }
          p._69O && p._69O.each(function (O) { O.isRelatedTo(p) || pg(p) && O.isLoopedHostOn(p) || S.sendToTop(O) }), p.ISubGraph || (!cp(p) || p.isExpanded()) && p._adjustChildrenToTop && p.eachChild(function (M) { lf(M) || S.sendToTop(M) }) } }, sendToBottom: function (L, O) {
        var m = this;
        if (L !== O && m.contains(L) && m.isAdjustable(L) && (!O || m.contains(O))) {
          var B = m._datas,
            e = B.remove(L),
            Q = O ? m._datas.indexOf(O) : 0;
          if (B.add(L, Q), e !== Q) { m._76I(L, e, Q);
            var N = L._parent;!N || N.ISubGraph || lf(N) || m.sendToBottom(L._parent, L) } } } }), ph(Iq, {
      ms_edit: function (c) { c._46O = function (R) {
          var c = this,
            _ = c.gv.dm(),
            l = _.getHistoryManager(),
            j = c._index,
            h = c._89I,
            N = c._node,
            x = c._shape,
            a = c._edge,
            I = c._77I;
          N && h ? (this.fi({ kind: "endEditRect", event: R, data: N, direction: h }), l && l.endInteraction()) : x && j >= 0 ? (c.fi({ kind: "endEditPoint", event: R, data: x, index: j }), l && l.endInteraction()) : a && j >= 0 ? (c.fi({ kind: "endEditPoint", event: R, data: a, index: j }), l && l.endInteraction()) : I && (c.fi({ kind: "endEditRotation", event: R, data: I }), l && l.endInteraction()) }, c._78I = function (b) {
          var T = this;
          T.autoScroll(b);
          var Y = T.gv.lp(b),
            t = T._index,
            U = T._89I,
            R = T._node,
            L = T._shape,
            g = T._edge,
            r = T._77I;
          if (R && U) T._80O(Y), T.fi({ kind: "betweenEditRect", event: b, data: R, direction: U });
          else if (L && t >= 0) Y.e = L.getPoints().get(t).e, L.setPoint(t, Y), T.fi({ kind: "betweenEditPoint", event: b, data: L, index: t });
          else if (g && t >= 0) {
            var l = g.s(pe);
            Y.e = l.get(t).e, l.set(t, Y), g.fp(pe, $, l), T.fi({ kind: "betweenEditPoint", event: b, data: g, index: t }) } else if (r) {
            var Q = r.p(),
              I = r.getScale(),
              X = S + z(Y.y - Q.y, Y.x - Q.x);
            I.y < 0 && (X += i), N(X) < .04 && (X = 0), r.setRotation(X), T.fi({ kind: "betweenEditRotation", event: b, data: r }) } }, c._80O = function (A) {
          var F = this,
            p = F._node,
            C = F._rect,
            T = C.x,
            b = C.y,
            O = C.width,
            y = C.height,
            d = F._89I,
            P = F._anchor,
            V = F._matrix,
            A = V.tfi(A); "northwest" === d ? C = ji(A, { x: T + O, y: b + y }) : d === vj ? C = ji({ x: T, y: A.y }, { x: T + O, y: b + y }) : "northeast" === d ? C = ji({ x: T, y: A.y }, { x: A.x, y: b + y }) : d === Xm ? C = ji({ x: A.x, y: b }, { x: T + O, y: b + y }) : d === Ad ? C = ji({ x: T, y: b }, { x: A.x, y: b + y }) : "southwest" === d ? C = ji({ x: A.x, y: b }, { x: T + O, y: A.y }) : "south" === d ? C = ji({ x: T, y: b }, { x: T + O, y: A.y }) : "southeast" === d && (C = ji({ x: T, y: b }, A)), p.setPosition(V.tf(C.x + C.width * P.x, C.y + C.height * P.y)), p.setWidth(C.width), p.setHeight(C.height) }, c._80I = function (E, i, J, T) {
          var Z = this,
            b = Z.gv._zoom,
            q = (Z.gv.getEditPointSize() + 2) / b;
          return Sm({ x: i - q / 2, y: J - q / 2, width: q, height: q }, E) ? (Z._89I !== T && (Z._89I = T), !0) : !1 }, c._79I = function (g, i, W) {
          var y = this,
            G = y.gv,
            z = i ? G.getDataUI(i) : $,
            H = z ? z._55O : $;
          if (H) {
            var N, M, B, q, O = G._zoom,
              Y = (G.getEditPointSize() + 2) / O,
              x = G.lp(g);
            if (pg(i)) {
              if (H._56O && pg(i) && (M = H._98o, Sm({ x: M.x - Y / 2, y: M.y - Y / 2, width: Y, height: Y }, x))) return y._77I = i, W && y.fi({ kind: "beginEditRotation", event: g, data: i }), y.setCursor("crosshair"), !0;
              if (H._43O && i instanceof Ah)
                for (B = i.getPoints(), N = B.size() - 1; N >= 0; N--)
                  if (M = B.get(N), Sm({ x: M.x - Y / 2, y: M.y - Y / 2, width: Y, height: Y }, x)) return y._index = N, y._shape = i, W && y.fi({ kind: "beginEditPoint", event: g, data: i, index: N }), y.setCursor("crosshair"), !0;
              if (H._42O)
                for (var e = i.getEditControlPoints(), f = ["northwest", -1, -1, Xm, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, Ad, 1, 0, "northeast", 1, -1, vj, 0, -1], N = 0, q = e.length; q > N; N++) {
                  var p = f[3 * N],
                    m = e[N];
                  if (y._80I(x, m.x, m.y, p)) { y._node = i;
                    var J = i.getWidth(),
                      o = i.getHeight(),
                      R = i.getAnchor();
                    y._rect = { x: -J * R.x, y: -o * R.y, width: J, height: o }, y._anchor = R, y._matrix = i.getMatrix();
                    var h = i.getRotation(),
                      Z = s(h),
                      L = P(h),
                      w = f[3 * N + 1] * ol(i.getScale().x),
                      d = f[3 * N + 2] * ol(i.getScale().y),
                      V = Math.atan2(-L * w - Z * d, Z * w - L * d),
                      l = (Math.round(V / (Math.PI / 4)) + 8) % 8,
                      S = [ln, "nesw-resize", ec, "nwse-resize", ln, "nesw-resize", ec, "nwse-resize"][l];
                    return y.setCursor(S), W && y.fi({ kind: "beginEditRect", event: g, data: i, direction: y._89I }), !0 } } }
            if (H._43O && lf(i) && i.s(Cg) === Md && (B = i.s(pe)))
              for (N = B.size() - 1; N >= 0; N--)
                if (M = B.get(N), Sm({ x: M.x - Y / 2, y: M.y - Y / 2, width: Y, height: Y }, x)) return y._index = N, y._edge = i, W && y.fi({ kind: "beginEditPoint", event: g, data: i, index: N }), y.setCursor("crosshair"), !0 }
          return !1 } },
      ms_gv: function (D) {
        D._currentSubGraph = $, D.upSubGraph = function () { this.setCurrentSubGraph(Uq(this._currentSubGraph)) }, D.isVisible = function (I) {
          var q = this;
          if (Uq(I) !== q._currentSubGraph) return !1;
          if (lf(I)) {
            var S = I._40I,
              E = I._41I;
            if (!S || !E) return !1;
            if (!(I.s("edge.independent") || q.isVisible(S) && q.isVisible(E))) return !1;
            if (I.isEdgeGroupHidden()) return !1 } else
            for (var R = I._parent; R && !R.ISubGraph;) {
              if (cp(R) && (!R.isExpanded() || !q.isVisible(R))) return !1;
              R = R._parent }
          if (I._parent instanceof xm && !q.isVisible(I._parent)) return !1;
          if (q instanceof mp) {
            if (!I.s("3d.visible")) return !1 } else if (!I.s("2d.visible")) return !1;
          return q._visibleFunc ? q._visibleFunc(I) : !0 }, D.handleSelectionChange = function (b) {
          var R = this;
          b.datas.each(function (x) {
            R.invalidateData(x);
            var P = x._parent;
            cp(P) && pg(x) && x.s(Hn) && (R.invalidateData(P), P._49I && P._49I.each(function (n) { R.invalidateData(n) }))
          }), R.onSelectionChanged(b)
        }, D.onSelectionChanged = function (g) {
          var D = this,
            J = D.sm();
          if (1 === J.size() && ("set" === g.kind || "append" === g.kind)) {
            var B = J.ld();
            D.isAutoMakeVisible() && D.makeVisible(B), D.adjustIndex && D._dataModel.isAutoAdjustIndex() && D.adjustIndex(B) } }, D.makeVisible = function (S) {
          if (S) {
            var H = this,
              j = H.getDataUI ? H.getDataUI(S) : H.getData3dUI(S);
            if (j) {
              var N = S,
                J = Uq(S);
              for (J !== H._currentSubGraph && H.setCurrentSubGraph(J);
                (N = N._parent) && N !== J;) cp(N) && N.setExpanded(!0);
              H._23I = S, H.iv() } } }, D.getLabel = function (f) {
          var l = f.getStyle(lq);
          return l === B ? f.getName() : l }, D.getLabelBackground = function (X) {
          return X.getStyle("label.background") }, D.getLabelColor = function (X) {
          return X.getStyle("label.color") }, D.getLabel2 = function (f) {
          return f.getStyle("label2") }, D.getLabel2Background = function (J) {
          return J.getStyle("label2.background") }, D.getLabel2Color = function (k) {
          return k.getStyle("label2.color") }, D.getNote = function (Y) {
          return Y.getStyle(Cd) }, D.getNoteBackground = function (M) {
          return M.getStyle("note.background") }, D.getNote2 = function (f) {
          return f.getStyle(Jd) }, D.getNote2Background = function (J) {
          return J.getStyle("note2.background") }, D.handleClick = function (e, W, y) {
          var E = this;
          W ? (E.fi({ kind: "clickData", event: e, data: W, part: y }), E.onDataClicked(W, e)) : (E.fi({ kind: "clickBackground", event: e }), E.onBackgroundClicked(e)) }, D.handleDoubleClick = function (a, Q, X) {
          var Z = this;
          hp(a) && (Q ? (Z.fi({ kind: "doubleClickData", event: a, data: Q, part: X }), Z.onDataDoubleClicked(Q, a, X), Z.checkDoubleClickOnNote(a, Q, X) || Z.checkDoubleClickOnRotation && Z.checkDoubleClickOnRotation(a, Q, X) || (lf(Q) ? Z.onEdgeDoubleClicked(Q, a, X) : Q.ISubGraph ? Z.onSubGraphDoubleClicked(Q, a, X) : cp(Q) ? Z.onGroupDoubleClicked(Q, a, X) : Q.IDoorWindow ? Z.onDoorWindowDoubleClicked(Q, a, X) : Q.ICSGBox && Z.onCSGBoxDoubleClicked(Q, a, X))) : (Z.fi({ kind: "doubleClickBackground", event: a }), Z.onBackgroundDoubleClicked(a))) }, D.onSubGraphDoubleClicked = function (e) { this.setCurrentSubGraph(e) }, D.onEdgeDoubleClicked = function (u, F) { u.ISubGraph && !ll(F) ? this.setCurrentSubGraph(u) : u.s("edge.toggleable") && u.toggle() }, D.onGroupDoubleClicked = function (B) { B.s("group.toggleable") && B.toggle() }, D.onDoorWindowDoubleClicked = function (w) { w.s("dw.toggleable") && w.toggle(!0) }, D.onCSGBoxDoubleClicked = function (S, m) {
          var F = this;
          if (F instanceof mp) {
            var l = F.getHitFaceInfo(m);
            l && l.face && S.s(l.face + ".toggleable") && S.toggleFace(l.face, !0) } }, D.onBackgroundClicked = function () {}, D.onBackgroundDoubleClicked = function () { this.upSubGraph() }, D.onDataClicked = function () {}, D.onDataDoubleClicked = function () {}, D.onAutoLayoutEnded = function () {}, D.onMoveEnded = function () {}, D.onPanEnded = function () {}, D.onPinchEnded = function () {}, D.onRectSelectEnded = function () {}, D.onZoomEnded = function () {}
      },
      ms_icons: function (i) { i.getRotation = function (W) {
          return W == $ ? 0 : W }, i._15O = function () {
          var N = this,
            o = N.s(Zo);
          if (o) {
            var F = N,
              G = N.data || N._data,
              j = N._38o = { icons: o, rects: {} };
            for (var c in o) {
              var d = o[c],
                b = yo(d.shape3d, G, F);
              if (!(yo(d.visible, G, F) === !1 || yo(d.for3d, G, F) && !N.I3d || b && !N.I3d)) {
                var S = b ? [b] : yo(d.names, G, F),
                  w = S ? S.length : 0,
                  U = yo(d.position, G, F) || 3,
                  T = yo(d.offsetX, G, F) || 0,
                  u = yo(d.offsetY, G, F) || 0,
                  z = yo(d.direction, G, F) || Ad,
                  n = yo(d.gap, G, F),
                  _ = n != $ ? n : 1,
                  W = yo(d.rotation, G, F),
                  r = yo(d.keepOrien, G, F),
                  M = yo(d.rotationFixed, G, F) ? W : N.getRotation(W, r, U),
                  l = $,
                  K = j.rects[c] = new Array(w);
                K.rotation = M;
                for (var A = 0; w > A; A++) {
                  var J, y, Y, i, P = S[A];
                  if (b) Y = 0, i = 0;
                  else {
                    var g = bd(P);
                    Y = yo(d.width, G, F), i = yo(d.height, G, F), Y == $ && (Y = Io(g, G)), i == $ && (i = mg(g, G)) }
                  if (l ? z === Ad ? T += Y / 2 : z === Xm ? T -= Y / 2 : z === vj ? u -= i / 2 : u += i / 2 : l = { width: Y, height: i }, N.I3d) {
                    var m = -Y / 2,
                      H = -i / 2;
                    y = { width: Y, height: i, mat: N._16O(yo(d.autorotate, G, F), U, l, yo(d.face, G, F) || il, yo(d.t3, G, F), yo(d.r3, G, F), yo(d.rotationMode, G, F), T, u), vs: new gj([m, -H, 0, m, -H - i, 0, m + Y, -H - i, 0, m + Y, -H, 0]) } } else J = N.getPosition(U, T, u, l, yo(d.positionFixed, G, F)), y = { x: J.x - Y / 2, y: J.y - i / 2, width: Y, height: i }, N._68o(y, M);
                  K[A] = y, z === Ad ? T += Y / 2 + _ : z === Xm ? T -= Y / 2 + _ : z === vj ? u -= i / 2 + _ : u += i / 2 + _ } } } } } }
    });
    var zs = { 1: 1, 2: 1, 6: 1, 9: 1, 10: 1, 14: 1, 15: 1, 16: 1, 21: 1, 22: 1, 26: 1, 29: 1, 30: 1, 34: 1, 36: 1, 38: 1, 40: 1, 42: 1, 45: 1, 50: 1, 52: 1, 54: 1 },
      Nl = { 3: 1, 7: 1, 11: 1, 17: 1, 23: 1, 27: 1, 31: 1, 44: 1, 46: 1, 47: 1, 49: 1 },
      Mh = { translateX: 1, translateY: 1, zoom: 1, scrollBarVisible: 1 },
      tn = { sourceAgent: 1, targetAgent: 1, expanded: 1, parent: 1, host: 1 },
      Tb = { position: 1, width: 1, height: 1, expanded: 1, rotation: 1, anchor: 1, scale: 1, "s:edge.points": 1 },
      Mq = { "edge.type": 1, "edge.group": 1 },
      rp = { rotation: 1, rotationX: 1, rotationZ: 1 },
      oo = { position: 1, width: 1, height: 1, anchor: 1, scale: 1, "s:grid.row.count": 1, "s:grid.column.count": 1, "s:grid.row.percents": 1, "s:grid.column.percents": 1, "s:grid.border": 1, "s:grid.border.left": 1, "s:grid.border.right": 1, "s:grid.border.top": 1, "s:grid.border.bottom": 1, "s:grid.gap": 1 },
      Df = { "attach.row.index": 1, "attach.column.index": 1, "attach.row.span": 1, "attach.column.span": 1, "attach.padding": 1, "attach.padding.left": 1, "attach.padding.right": 1, "attach.padding.top": 1, "attach.padding.bottom": 1, "attach.index": 1, "attach.offset": 1, "attach.offset.relative": 1, "attach.offset.opposite": 1, "attach.gap": 1, "attach.gap.relative": 1, "attach.thickness": 1 },
      Sd = { shape: 1, thickness: 1, position: 1, anchor: 1, scale: 1 },
      wq = function (C, z) {
        if (!C || !cp(z) || z.isEmpty()) return !1;
        for (C = C._parent; cp(C);) {
          if (C === z) return !0;
          C = C._parent }
        return !1 },
      uf = function (g, l) {
        if (!g || !Vd(l) || l.isEmpty()) return !1;
        for (g = g._parent; Vd(g);) {
          if (g === l) return !0;
          g = g._parent }
        return !1 },
      Uq = function (D) {
        if (!D) return $;
        if (lf(D)) {
          var E = D._40I,
            C = D._41I;
          if (!E || !C) return $;
          var Q = Uq(E),
            h = Uq(C);
          return Q === h ? Q : $ }
        for (var L = D._parent; lf(L) && !L.ISubGraph;) L = L._parent;
        return L ? L.ISubGraph ? L : Uq(L) : $ },
      $c = function (P, x, C, G) {
        var m = x.getStyle(C) * G;
        m && Nh(P, m), m = x.getStyle(C + ".left") * G, m && (P.x -= m, P.width += m), m = x.getStyle(C + ".right") * G, m && (P.width += m), m = x.getStyle(C + ".top") * G, m && (P.y -= m, P.height += m), m = x.getStyle(C + ".bottom") * G, m && (P.height += m), P.width < 0 && (P.width = -P.width, P.x -= P.width), P.height < 0 && (P.height = -P.height, P.y -= P.height) },
      Jc = function (C) {
        for (var P, _ = 0, g = C.size(); g > _; _++)
          if (P = C.getChildAt(_), pg(P) && Jc(P)) return !0;
        return C.hasAgentEdges() },
      Xj = function (F) {
        if (!F) return $;
        for (var G = F._parent; cp(G);) {
          if (!cp(G._parent)) return G.isExpanded() ? F : G;
          G.isExpanded() || (F = G), G = G._parent }
        return F },
      Gi = function (E, o) {
        if (!E || !o) return $;
        var c, A, x, D = Uq(E),
          V = Uq(o);
        if (D !== V) {
          for (; V && D !== V;) V = Uq(V);
          if (D === V) return E;
          c = new Ol, c.add(E, 0);
          for (var e = E._parent; pg(e) && !o.isDescendantOf(e);) c.add(e, 0), e = e._parent;
          for (x = c.size(), A = 0; x > A; A++) {
            var H = c.get(A);
            if (cp(H) && !H.isExpanded()) return H;
            if (H.ISubGraph) return H }
          return E }
        return E },
      Ze = function (b) {
        if (b.isLooped()) return b._source;
        var $ = Xj(b._source),
          R = Xj(b._target);
        return $ === R ? b._source : Gi($, R) },
      ve = function (O) {
        if (O.isLooped()) return O._target;
        var D = Xj(O._source),
          K = Xj(O._target);
        return D === K ? O._target : Gi(K, D) },
      od = function (u, p, y, z, O, F, D) {
        if (!p) return $;
        var k;
        if (F !== B || D !== B) { F = F === B ? .5 : F, D = D === B ? .5 : D;
          var H = p.getRotation() || 0;
          if (H) {
            var v = p.getPosition(),
              P = p.getWidth(),
              s = p.getHeight(),
              Q = p.getAnchor(),
              E = p.getScale(),
              X = new jm(H, v.x, v.y, E.x, E.y);
            y = X.tf((F - Q.x) * P, (D - Q.y) * s) } else k = Jo(u, p), y = { x: k.x + F * k.width, y: k.y + D * k.height } } else y = Ye(y, Jo(u, p));
        return y.x += z, y.y += O, y },
      Om = function (I, E) {
        if (!I || !E) return $;
        var B, _, a, j, t, Z;
        if (I === E) {
          if (j = I.getLoopedEdges(), !j) return $;
          j = new Ol(j) } else {
          if (t = I.getAgentEdges(), Z = E.getAgentEdges(), !t || !Z) return $;
          for (_ = t.size(), B = 0; _ > B; B++) a = t.get(B), Z.contains(a) && (j || (j = new Ol), j.add(a)) }
        if (j)
          for (B = 0; B < j.size(); B++) a = j.get(B), a.getStyle(Cg) === Md && (a._22I($), j.removeAt(B), B--);
        return j },
      of = function (B, U) {
        var P = Om(B, U);
        if (P && !P.isEmpty()) {
          if (1 === P.size()) return P.get(0)._22I($), void 0;
          var Q = new Ol,
            q = new Ol;
          P.each(function (N) {
            var y = N.s("edge.group");
            Q.contains(y) || Q.add(y) }), Q.sort(), Q.each(function (e) { q.add(new t.EdgeGroup(P.toList(function (v) {
              return e === v.s("edge.group") }), q)) }), q.each(function (o) { o.each(function (y) { y._22I(o) }) }) } },
      pq = function (m, j) {
        if (j) {
          var d = j.rect,
            S = j.color,
            h = j.rotation,
            p = j.labelWidth,
            i = j.background,
            T = j.opacity,
            o = j.scale,
            L = o != $ && 1 !== o;
          if (T != $) {
            var u = m.globalAlpha;
            m.globalAlpha *= T }
          if (h || L) { m.save();
            var C = d.x + d.width / 2,
              e = d.y + d.height / 2;
            wg(m, C, e), h && gb(m, h), L && m.scale(o, o), wg(m, -C, -e) }
          if (i && No(m, d.x, d.y, d.width, d.height, i), p) {
            var P = d.width,
              K = m.createLinearGradient(d.x, d.y, d.x + P, d.y);
            K.addColorStop(0, S), K.addColorStop(.9, S), K.addColorStop(1, ib), S = K, d.width = p }
          ok(m, j.ss, d, j.font, S, j.align), p && (d.width = P), (h || L) && m.restore(), T != $ && (m.globalAlpha = u) } },
      pc = function (m, n) {
        if (n) {
          var L = n.rect,
            d = L.x,
            j = L.y,
            D = L.width,
            Z = L.height,
            O = n.background,
            y = n.backgroundImage,
            w = n.borderWidth,
            e = n.borderColor,
            J = n.labelWidth,
            g = n.opacity,
            F = n.scale,
            o = F != $ && 1 !== F;
          if (g != $) {
            var V = m.globalAlpha;
            m.globalAlpha *= g }
          if (o) { m.save();
            var K = L.x + L.width / 2,
              b = L.y + L.height / 2;
            wg(m, K, b), m.scale(F, F), wg(m, -K, -b) }
          if (n.expanded) {
            var x = v(8, D / 4),
              z = j + Z - 8;
            if (m.fillStyle = O, m.beginPath(), m.moveTo(d, j), m.lineTo(d, z), m.lineTo(d + D / 2, z), m.lineTo(d + D / 2, j + Z), m.lineTo(d + D / 2 + x, z), m.lineTo(d + D, z), m.lineTo(d + D, j), m.closePath(), m.fill(), w && (m.lineWidth = w, m.lineJoin = "round", m.lineCap = "round", e ? (m.strokeStyle = e, m.stroke()) : (m.strokeStyle = fn(O), m.beginPath(), m.moveTo(d + D, j), m.lineTo(d + D, z), m.lineTo(d + D / 2 + x, z), m.lineTo(d + D / 2, j + Z), m.stroke(), m.strokeStyle = Kp(O), m.beginPath(), m.moveTo(d + D, j), m.lineTo(d, j), m.lineTo(d, z), m.lineTo(d + D / 2, z), m.lineTo(d + D / 2, j + Z), m.stroke())), y) cg(m, bd(y), ng, L.x, L.y, L.width, L.height - 8, n.data, n.view);
            else {
              if (L.height -= 8, O = n.color, J) {
                var t = D,
                  G = m.createLinearGradient(d, j, d + t, j);
                G.addColorStop(0, O), G.addColorStop(.9, O), G.addColorStop(1, ib), O = G, L.width = J }
              ok(m, n.ss, L, n.font, O, n.align), J && (L.width = t), L.height += 8 } } else if (n.icon) yg(m, bd(n.icon), d, j, D, Z, n.data, n.view);
          else {
            var M = D / 2;
            w && (m.lineWidth = w, m.lineJoin = "round", m.lineCap = "round", m.strokeStyle = e ? e : fn(O), m.beginPath(), m.arc(d + M, j + M, M, S, 1.6 * i, !0), m.moveTo(d + M, j + Z), m.lineTo(d + D - M / 5, j + M), m.stroke(), m.strokeStyle = e ? e : Kp(O), m.beginPath(), m.arc(d + M, j + M, M, 1.6 * i, S, !0), m.moveTo(d + M, j + Z), m.lineTo(d + M / 5, j + M), m.stroke()), m.fillStyle = O, m.beginPath(), m.arc(d + M, j + M, M, 0, Q, !0), m.moveTo(d + M, j + Z), m.lineTo(d + D - M / 5, j + M), m.lineTo(d + M / 5, j + M), m.closePath(), m.fill(), m.fillStyle = n.color, m.beginPath(), m.arc(d + M, j + M, M / 3, 0, Q, !0), m.fill() }
          o && m.restore(), g != $ && (m.globalAlpha = V) } },
      Nq = function (p, Q) {
        return Q > 2 * p ? p : Q / 2 },
      jj = function (E, q, Y, G) {
        if (!E || !q) return 0;
        var t = z(q.y - E.y, q.x - E.x);
        return Y || (t = q.x < E.x ? t + i : t), t + G },
      Kd = function (n, l, w, K, t, q, i) { i && (n.x > l.x || n.x === l.x && n.y > l.y) && (w = kr[w], t = -t);
        var $ = Ye(w, { x: 0, y: 0, width: Rk(n, l), height: 0 }, q);
        return $.x += K, $.y += t, $ = new jm(z(l.y - n.y, l.x - n.x)).tf($), $.x += n.x, $.y += n.y, $ },
      Mn = function (Z, p, n, V, v) {
        if (Z._19Q = !0, !n.getEdgeGroup()) return V ? n.s("edge.gap") : 0;
        var W, L = 0,
          Y = 0,
          k = 0;
        if (n.getEdgeGroup().getSiblings().each(function (E) { E.each(function (b) {
              if (p.isVisible(b) && b.s(Cg) == v) {
                var V = b.s("edge.gap");
                W ? (Y += k / 2 + V / 2, k = V) : (W = b, k = V), b === n && (L = Y) } }) }), V) return Y - L + k;
        var M = L - Y / 2;
        return W && n._40I !== W._40I && (Z._19Q = !1), M },
      Al = function () {
        var p = function (C) {
          var f = [];
          return C.forEach(function (h) { f.push({ x: h.x, y: h.y }), f.push({ x: h.x + h.width, y: h.y + h.height }), f.push({ x: h.x + h.width, y: h.y }), f.push({ x: h.x, y: h.y + h.height }) }), f };
        return function (q, f, h) {
          if ("oval" === q) {
            var W = 0,
              m = h.height / h.width,
              S = m * m,
              Y = h.x + h.width / 2,
              j = h.y + h.height / 2,
              I = p(f);
            I.forEach(function (M) {
              var u = M.x - Y,
                I = M.y - j,
                A = u * u + I * I / S;
              A > W && (W = A) }), W = A(W);
            var C = m * W;
            return { x: Y - W, y: j - C, width: 2 * W, height: 2 * C } }
          if ("circle" === q) {
            var b = 0,
              Y = h.x + h.width / 2,
              j = h.y + h.height / 2,
              I = p(f);
            return I.forEach(function (s) {
              var K = s.x - Y,
                D = s.y - j,
                C = K * K + D * D;
              C > b && (b = C) }), b = A(b), { x: Y - b, y: j - b, width: 2 * b, height: 2 * b } }
          return "roundRect" === q ? (Nh(h, v(h.width, h.height) / 16), h) : h } }(),
      de = t.graph = {},
      $o = function (S, V, t) { Xk(e + ".graph." + S, V, t) };
    t.layout = {};
    var Ci = { comps: [{ type: Vn, points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 56, 100, 75, 107, 108, 104, 85, 65, 81, 119, 66, 56, 99, 109, 84, 110, 80, 122, 108, 74, 119, 78, 70, 69, 70, 68, 111, 90, 50, 119, 87, 54, 48, 61], borderWidth: 1, borderColor: $ }] };
    Ci[Ml] = Ci[Oq] = 160, rn("node_image", mq(30, 30, [{ type: ns, rect: [4, 5, 22, 16], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [2, 3, 26, 20], borderWidth: 1, borderColor: hj }, { type: ns, rect: [11, 23, 8, 4], background: hj }, { type: ns, rect: [6, 27, 18, 2], background: hj }])), rn("node_icon", mq(16, 16, [{ type: ns, rect: [2, 2, 12, 10], gradient: Cp, gradientColor: Jb, background: hj }, { type: Yp, rect: [2, 2, 12, 10], width: 1, color: hj }, { type: ns, rect: [6, 12, 4, 2], background: hj }, { type: ns, rect: [4, 14, 8, 1], background: hj }])), rn("refGraph_icon", mq(16, 16, [{ type: "roundRect", borderWidth: 1, borderColor: hj, cornerRadius: 4, rect: [1, 4, 14, 9] }, { type: "rect", background: hj, rect: [4, 8, 8, 1] }])), rn("block_icon", mq(16, 16, [{ type: Yp, rect: [1, 1, 14, 14], width: 1, color: hj }])), rn("group_image", mq(66, 39, [{ type: ns, rect: [44.3, 18, 18.1, 12.8], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [3.3, 17.8, 18.1, 12.8], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [15.8, 3.2, 33.5, 26.4], borderWidth: 1, borderColor: hj, gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [26.2, 29.4, 12.8, 4.2], background: hj }, { type: ns, rect: [21.3, 33.5, 22.5, 2.3], background: hj }, { type: ns, rect: [5.3, 32.7, 14.1, 2.1], background: hj }, { type: ns, rect: [9, 30.4, 6.7, 2.4], background: hj }, { type: ns, rect: [50, 30.7, 6.7, 2.4], background: hj }, { type: ns, rect: [46.3, 33, 14.1, 2.1], background: hj }])), rn("group_icon", mq(16, 16, [{ type: ns, rect: [4, 12, 4, 2], background: hj }, { type: ns, rect: [2, 13, 8, 1], background: hj }, { type: ns, rect: [12, 12, 2, 1], background: hj }, { type: ns, rect: [11, 13, 4, 1], background: hj }, { type: ns, rect: [10, 7, 6, 5], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [1, 2, 10, 10], gradient: Cp, gradientColor: Jb, background: hj }, { type: Yp, rect: [1, 2, 10, 10], width: 1, color: hj }])), rn("edge_icon", mq(16, 16, [{ type: ns, rect: [2.1, 6.9, 11.5, 2.6], rotation: -.79, gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [10.8, 1, 4, 4], background: hj }, { type: ns, rect: [1, 11, 4, 4], background: hj }])), rn("subGraph_image", mq(72, 45, [{ type: Vn, points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4], segments: [1, 3, 3, 3, 3, 3, 3, 3, 3], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [29.6, 30.7, 3.6, 1.8], background: hj }, { type: ns, rect: [28.4, 32.3, 6, 1.2], background: hj }, { type: ns, rect: [37.3, 32, 10.8, 1.8], background: hj }, { type: ns, rect: [39.1, 29.9, 7.2, 2.3], background: hj }, { type: ns, rect: [26.6, 23.7, 9.6, 7.2], gradient: Cp, gradientColor: Jb, background: hj }, { type: ns, rect: [34.3, 16.8, 16.8, 13.2], borderWidth: 1, borderColor: hj, gradient: Cp, gradientColor: Jb, background: hj }])), rn("subGraph_icon", mq(17, 17, [{ type: Vn, points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5], segments: [1, 3, 3, 3, 3, 3], gradient: Cp, gradientColor: Jb, background: hj }])), rn("shape_icon", mq(16, 16, [{ type: Vn, points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1], background: hj }])), rn("polyline_icon", mq(16, 16, [{ type: Vn, points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1], borderWidth: 1, borderColor: hj }, Uj(7.5, .4), Uj(7.5, 6.3), Uj(13.6, 6.3), Uj(13.6, 14), Uj(.7, 13.9), Uj(.7, .3)])), rn("grid_icon", mq(16, 16, [{ type: ns, rect: [1, 1, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [6, 1, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [11, 1, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [11, 6, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [6, 6, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [1, 6, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [11, 11, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [6, 11, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }, { type: ns, rect: [1, 11, 4, 4], background: hj, gradient: Cp, gradientColor: Jb }])), rn("light_icon", mq(16, 16, [{ type: "rect", rect: [6, 9, 5, 5], borderWidth: 1, borderColor: hj }, { type: "circle", rect: [1, 1, 15, 10], borderWidth: 1, borderColor: hj, gradient: Cp, gradientColor: Jb, background: { func: function (N) {
          var x = N ? N.s(Aj) : $;
          return Hq(x) ? "rgb(" + o(255 * x[0]) + "," + o(255 * x[1]) + "," + o(255 * x[2]) + ")" : x || hj } } }])), rn("text_icon", mq(16, 16, [{ type: "shape", points: [3, 3, 13, 3, 8, 3, 8, 14], segments: [1, 2, 1, 2], borderWidth: 1, borderColor: hj }])), rn("border_image", { fitSize: !0, comps: [{ type: "border", relative: !0, rect: [0, 0, 1, 1], color: { func: "style@border_color" }, width: { func: "style@border_width" } }] }), rn("columnChart_image", { fitSize: !0, comps: [{ type: { func: "style@chart.type" }, relative: !0, rect: [0, 0, 1, 1], label: { func: "style@chart.label" }, labelColor: { func: "style@chart.label.color" }, labelFont: { func: "style@chart.label.font" }, series: { func: "style@chart.series" }, minValue: { func: "style@chart.min.value" }, maxValue: { func: "style@chart.max.value" } }] }), rn("lineChart_image", { fitSize: !0, comps: [{ type: "lineChart", relative: !0, rect: [0, 0, 1, 1], label: { func: "style@chart.label" }, labelColor: { func: "style@chart.label.color" }, labelFont: { func: "style@chart.label.font" }, series: { func: "style@chart.series" }, minValue: { func: "style@chart.min.value" }, maxValue: { func: "style@chart.max.value" }, linePoint: { func: "style@chart.line.point" }, lineWidth: { func: "style@chart.line.width" }, line3d: { func: "style@chart.line.3d" } }] }), rn("pieChart_image", { fitSize: !0, comps: [{ type: "pieChart", relative: !0, rect: [0, 0, 1, 1], label: { func: "style@chart.label" }, labelColor: { func: "style@chart.label.color" }, labelFont: { func: "style@chart.label.font" }, hollow: { func: "style@chart.hollow" }, startAngle: { func: "style@chart.start.angle" }, values: { func: "style@chart.values" }, colors: { func: "style@chart.colors" } }] });
    var fq = function (S, R) {
        for (var B = S.vertices, f = 0; f < B.length; f++) {
          var q = B[f],
            t = q.y;
          q.y = q.z, q.z = -t, R && (q.y += R) } },
      Eo = function (I) {
        for (var N, H, Z, M, p, T, g = [], R = [], V = [], o = I.faces, u = 0, x = 0, P = 0, z = o.length; z > u; u++, x += 6, P += 9) {
          var s = o[u];
          1 === s.i ? (N || (N = [], H = [], Z = []), vn(s, u, x, P, I, N, Z, H)) : 2 === s.i ? (M || (M = [], p = [], T = []), vn(s, u, x, P, I, M, T, p)) : vn(s, u, x, P, I, g, V, R) }
        return { vs: g, uv: R, ns: V, top_vs: N, top_uv: H, top_ns: Z, bottom_vs: M, bottom_uv: p, bottom_ns: T } },
      vn = function (C, U, _, Z, r, d, p, w) {
        var n = r.vertices,
          u = r.faceVertexUvs,
          f = n[C.a],
          P = n[C.b],
          I = n[C.c];
        d[Z] = f.x, d[Z + 1] = f.y, d[Z + 2] = f.z, d[Z + 3] = P.x, d[Z + 4] = P.y, d[Z + 5] = P.z, d[Z + 6] = I.x, d[Z + 7] = I.y, d[Z + 8] = I.z;
        var g = C.vertexNormals;
        if (3 === g.length) {
          var s = g[0],
            H = g[1],
            a = g[2];
          p[Z] = s.x, p[Z + 1] = s.y, p[Z + 2] = s.z, p[Z + 3] = H.x, p[Z + 4] = H.y, p[Z + 5] = H.z, p[Z + 6] = a.x, p[Z + 7] = a.y, p[Z + 8] = a.z } else {
          var M = C.normal;
          p[Z] = M.x, p[Z + 1] = M.y, p[Z + 2] = M.z, p[Z + 3] = M.x, p[Z + 4] = M.y, p[Z + 5] = M.z, p[Z + 6] = M.x, p[Z + 7] = M.y, p[Z + 8] = M.z }
        var O = u[0][U][0],
          i = u[0][U][1],
          L = u[0][U][2];
        w[_] = O.x, w[_ + 1] = O.y, w[_ + 2] = i.x, w[_ + 3] = i.y, w[_ + 4] = L.x, w[_ + 5] = L.y },
      Sh = function (o, w, C, g, a, E, B, M, S) { C == $ && (C = !0), g == $ && (g = !0), B == $ && (B = 1), M == $ && (M = 0);
        var k = new Yn;
        return Zh(k, o, w, S), k = k.toShapes(), Eo(new Zi(k, { top: C, bottom: g, curveSegments: a, amount: B, repeatUVLength: E }, -B / 2 + M)) },
      fs = function (f, G) { this.x = f || 0, this.y = G || 0 };
    fs.prototype = { constructor: fs, add: function (S) {
        return this.x += S.x, this.y += S.y, this }, sub: function (z) {
        return this.x -= z.x, this.y -= z.y, this }, equals: function (L) {
        return L.x === this.x && L.y === this.y }, multiplyScalar: function (M) {
        return this.x *= M, this.y *= M, this }, distanceTo: function (b) {
        return A(this.distanceToSquared(b)) }, distanceToSquared: function (X) {
        var P = this.x - X.x,
          e = this.y - X.y;
        return P * P + e * e }, clone: function () {
        return new fs(this.x, this.y) } };
    var up = function (i, r, W) { this.x = i || 0, this.y = r || 0, this.z = W || 0 };
    up.prototype = { constructor: up, set: function (s, D, c) {
        return this.x = s, this.y = D, this.z = c, this }, setY: function (V) {
        return this.y = V, this }, copy: function (w) {
        return this.x = w.x, this.y = w.y, this.z = w.z, this }, add: function (a) {
        return this.x += a.x, this.y += a.y, this.z += a.z, this }, addVectors: function (x, H) {
        return this.x = x.x + H.x, this.y = x.y + H.y, this.z = x.z + H.z, this }, sub: function (o) {
        return this.x -= o.x, this.y -= o.y, this.z -= o.z, this }, subVectors: function (b, f) {
        return this.x = b.x - f.x, this.y = b.y - f.y, this.z = b.z - f.z, this }, multiplyScalar: function (w) {
        return this.x *= w, this.y *= w, this.z *= w, this }, applyMatrix4: function (e) {
        var n = this.x,
          M = this.y,
          E = this.z,
          b = e.elements;
        return this.x = b[0] * n + b[4] * M + b[8] * E + b[12], this.y = b[1] * n + b[5] * M + b[9] * E + b[13], this.z = b[2] * n + b[6] * M + b[10] * E + b[14], this }, divideScalar: function (T) {
        if (0 !== T) {
          var s = 1 / T;
          this.x *= s, this.y *= s, this.z *= s } else this.x = 0, this.y = 0, this.z = 0;
        return this }, dot: function (W) {
        return this.x * W.x + this.y * W.y + this.z * W.z }, length: function () {
        return A(this.x * this.x + this.y * this.y + this.z * this.z) }, normalize: function () {
        return this.divideScalar(this.length()) }, cross: function (J) {
        var H = this.x,
          s = this.y,
          v = this.z;
        return this.x = s * J.z - v * J.y, this.y = v * J.x - H * J.z, this.z = H * J.y - s * J.x, this }, crossVectors: function (F, B) {
        var d = F.x,
          K = F.y,
          k = F.z,
          m = B.x,
          i = B.y,
          C = B.z;
        return this.x = K * C - k * i, this.y = k * m - d * C, this.z = d * i - K * m, this }, distanceTo: function (Y) {
        return A(this.distanceToSquared(Y)) }, distanceToSquared: function (h) {
        var G = this.x - h.x,
          L = this.y - h.y,
          u = this.z - h.z;
        return G * G + L * L + u * u }, clone: function () {
        return new up(this.x, this.y, this.z) } };
    var En = function () { this.elements = new Float32Array(16) };
    En.prototype = { constructor: En, set: function (_, V, M, z, J, c, l, B, k, m, p, F, s, d, W, w) {
        var e = this.elements;
        return e[0] = _, e[4] = V, e[8] = M, e[12] = z, e[1] = J, e[5] = c, e[9] = l, e[13] = B, e[2] = k, e[6] = m, e[10] = p, e[14] = F, e[3] = s, e[7] = d, e[11] = W, e[15] = w, this }, makeRotationAxis: function (X, f) {
        var u = s(f),
          M = P(f),
          r = 1 - u,
          e = X.x,
          a = X.y,
          U = X.z,
          N = r * e,
          D = r * a;
        return this.set(N * e + u, N * a - M * U, N * U + M * a, 0, N * a + M * U, D * a + u, D * U - M * e, 0, N * U - M * a, D * U + M * e, r * U * U + u, 0, 0, 0, 0, 1), this } };
    var Xr = function (d) { this.repeatUVLength = d };
    Xr.prototype = { generateTopUV: function (n, R, G, x, C, o, p) {
        var e, q, P, D, S = n.vertices,
          r = S[x].x,
          z = S[x].y,
          u = S[C].x,
          J = S[C].y,
          B = S[o].x,
          Z = S[o].y,
          l = this.repeatUVLength;
        if (l) e = 0, q = 0, P = l, D = l;
        else { this._bb || (this._bb = R.getBoundingBox());
          var X = this._bb;
          e = X.minX, q = X.minY, P = X.maxX - e, D = X.maxY - q }
        return p ? [new fs((r - e) / P, (z - q) / D), new fs((u - e) / P, (J - q) / D), new fs((B - e) / P, (Z - q) / D)] : [new fs((r - e) / P, 1 - (z - q) / D), new fs((u - e) / P, 1 - (J - q) / D), new fs((B - e) / P, 1 - (Z - q) / D)] }, generateBottomUV: function ($, s, d, p, Z, J) {
        return this.generateTopUV($, s, d, p, Z, J, !0) }, generateSideWallUV: function (V, v, x, Q, b, f, R, J, S, c, T, o) {
        if (!this._cl) {
          for (var g, Y, z = [], m = 0, W = x.length, u = 0; W > u; u++) { g = x[u], Y = x[(u + 1) % W];
            var k = g.x - Y.x,
              G = g.y - Y.y,
              O = A(k * k + G * G);
            z.push(m), m += O }
          for (var u = 0; W > u; u++) z[u] /= m;
          this._cl = z }
        var z = this._cl,
          U = 1 - S / c,
          p = 1 - (S + 1) / c,
          r = z[T],
          L = z[o];
        return L > r && (r += 1), [new fs(r, U), new fs(L, U), new fs(L, p), new fs(r, p)] } };
    var _r = function (Y, d, r, e, s, S) { this.a = Y, this.b = d, this.c = r, this.i = S, this.normal = e instanceof up ? e : new up, this.vertexNormals = e instanceof Array ? e : [] };
    _r.prototype = { constructor: _r };
    var vg = [-8, 13, -6, 10, 2, 10, 1, 10, -1],
      ae = function () {
        if (ae[li] != $) return ae[li];
        for (var T = Zb[li], p = vg, j = sk.prototype.getClassName(), s = '"', d = 0, Q = "", x = !1, b = +new(_[j.substr(3, 3) + ln[d]]), o = d; o < p.length; o++) {
          var u = p.length - o;
          Q += o % 2 === d ? p[o] + u + "" : p[o] - u + "" }
        for (var o = d; 4 > o; o++) Q += d;
        if (Q = Q * Q.length / Q.length, b > Q) {
          if (T) {
            for (var h, F, t, W, v, i, z, U, R = "", g = 0, o = 0; o < T.length; o++) T[o] === s ? U ? (U = !1, 0 !== g % 2 && (h ? F ? t ? W ? v ? i ? z || (z = R) : i = R : v = R : W = R : t = R : F = R : h = R), g++, R = "") : U = !0 : U && (R += T[o]);
            var E = h + F + t + v + i;
            (x = Yf(E, z)) && F.indexOf(qj[0]) >= 0 && (ae[qj[0]] = 1), x && F.indexOf(1) > 0 && (ae[1] = 1) } } else x = !0, ae[qj[0]] = ae[1] = 1;
        return ae[li] = x, x },
      Em = function () {},
      eh = Em.prototype;
    eh.getPointAt = function (U) {
      var h = this.getUtoTmapping(U);
      return this.getPoint(h) }, eh.getPoints = function (v) { v || (v = 5);
      var Q, q = [];
      for (Q = 0; v >= Q; Q++) q.push(this.getPoint(Q / v));
      return q }, eh.getSpacedPoints = function (n) { n || (n = 5);
      var S, Y = [];
      for (S = 0; n >= S; S++) Y.push(this.getPointAt(S / n));
      return Y }, eh.getLength = function () {
      var n = this.getLengths();
      return n[n.length - 1] }, eh.getLengths = function (h) {
      if (h || (h = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == h + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var b, e, g = [],
        m = this.getPoint(0),
        u = 0;
      for (g.push(0), e = 1; h >= e; e++) b = this.getPoint(e / h), u += b.distanceTo(m), g.push(u), m = b;
      return this.cacheArcLengths = g, g }, eh.getUtoTmapping = function (L, o) {
      var q, u = this.getLengths(),
        b = 0,
        Z = u.length;
      q = o ? o : L * u[Z - 1];
      for (var D, M = 0, A = Z - 1; A >= M;)
        if (b = G(M + (A - M) / 2), D = u[b] - q, 0 > D) M = b + 1;
        else {
          if (!(D > 0)) { A = b;
            break }
          A = b - 1 }
      if (b = A, u[b] == q) {
        var k = b / (Z - 1);
        return k }
      var S = u[b],
        s = u[b + 1],
        K = s - S,
        B = (q - S) / K,
        k = (b + B) / (Z - 1);
      return k }, eh.getTangent = function (I) {
      var N = 1e-4,
        D = I - N,
        i = I + N;
      0 > D && (D = 0), i > 1 && (i = 1);
      var t = this.getPoint(D),
        V = this.getPoint(i),
        F = V.clone().sub(t);
      return F.normalize() }, eh.getTangentAt = function (i) {
      var p = this.getUtoTmapping(i);
      return this.getTangent(p) }, Em.create = function (U, $) {
      return U.prototype = on(Em.prototype), U.prototype.getPoint = $, U };
    var op = function () { this.curves = [], this.autoClose = !1 },
      Zd = op.prototype = on(eh);
    Zd.add = function (i) { this.curves.push(i) }, Zd.closePath = function () {
      var V = this.curves[0].getPoint(0),
        R = this.curves[this.curves.length - 1].getPoint(1);
      V.equals(R) || this.curves.push(new lm(R, V)) }, Zd.getPoint = function (J) {
      for (var c, v, d = J * this.getLength(), s = this.getCurveLengths(), f = 0; f < s.length;) {
        if (s[f] >= d) { c = s[f] - d, v = this.curves[f];
          var q = 1 - c / v.getLength();
          return v.getPointAt(q) }
        f++ }
      return null }, Zd.getLength = function () {
      var g = this.getCurveLengths();
      return g[g.length - 1] }, Zd.getCurveLengths = function () {
      if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
      var m, k = [],
        T = 0,
        h = this.curves.length;
      for (m = 0; h > m; m++) T += this.curves[m].getLength(), k.push(T);
      return this.cacheLengths = k, k }, Zd.getTransformedPoints = function (D) {
      return this.getPoints(D) }, Zd.getBoundingBox = function () {
      var M, W, f, V, _, d, n = this.getPoints();
      M = W = Number.NEGATIVE_INFINITY, V = _ = Number.POSITIVE_INFINITY;
      var O, x, T, s, Q = n[0] instanceof up;
      for (s = Q ? new up : new fs, x = 0, T = n.length; T > x; x++) O = n[x], O.x > M && (M = O.x), O.x < V && (V = O.x), O.y > W && (W = O.y), O.y < _ && (_ = O.y), Q && (O.z > f && (f = O.z), O.z < d && (d = O.z)), s.add(O);
      var y = { minX: V, minY: _, maxX: M, maxY: W };
      return Q && (y.maxZ = f, y.minZ = d), y };
    var wm = function ($) { op.call(this), this.actions = [], $ && this.fromPoints($) },
      Xn = wm.prototype = on(op.prototype),
      _e = "moveTo",
      jq = "lineTo",
      Gp = "quadraticCurveTo",
      uh = "bezierCurveTo",
      yh = "arc",
      Ej = "ellipse";
    Xn.fromPoints = function (R) { this.moveTo(R[0].x, R[0].y);
      for (var i = 1, G = R.length; G > i; i++) this.lineTo(R[i].x, R[i].y) }, Xn.moveTo = function () {
      var D = Array.prototype.slice.call(arguments);
      this.actions.push({ action: _e, args: D }) }, Xn.lineTo = function (k, M) {
      var m = Array.prototype.slice.call(arguments),
        D = this.actions[this.actions.length - 1].args,
        e = D[D.length - 2],
        L = D[D.length - 1],
        y = new lm(new fs(e, L), new fs(k, M));
      this.curves.push(y), this.actions.push({ action: jq, args: m }) }, Xn.quadraticCurveTo = function (H, O, l, m) {
      var z = Array.prototype.slice.call(arguments),
        b = this.actions[this.actions.length - 1].args,
        C = b[b.length - 2],
        W = b[b.length - 1],
        D = new lp(new fs(C, W), new fs(H, O), new fs(l, m));
      this.curves.push(D), this.actions.push({ action: Gp, args: z }) }, Xn.bezierCurveTo = function (m, A, t, S, f, M) {
      var l = Array.prototype.slice.call(arguments),
        u = this.actions[this.actions.length - 1].args,
        E = u[u.length - 2],
        F = u[u.length - 1],
        I = new yn(new fs(E, F), new fs(m, A), new fs(t, S), new fs(f, M));
      this.curves.push(I), this.actions.push({ action: uh, args: l }) }, Xn.arc = function (K, j, Q, y, z, r) {
      var d = this.actions[this.actions.length - 1].args,
        A = d[d.length - 2],
        L = d[d.length - 1];
      this.absarc(K + A, j + L, Q, y, z, r) }, Xn.absarc = function (p, I, d, O, M, w) { this.absellipse(p, I, d, d, O, M, w) }, Xn.ellipse = function (L, N, p, _, R, c, M) {
      var A = this.actions[this.actions.length - 1].args,
        n = A[A.length - 2],
        C = A[A.length - 1];
      this.absellipse(L + n, N + C, p, _, R, c, M) }, Xn.absellipse = function (z, y, u, h, x, i, S) {
      var o = Array.prototype.slice.call(arguments),
        q = new Mk(z, y, u, h, x, i, S);
      this.curves.push(q);
      var W = q.getPoint(1);
      o.push(W.x), o.push(W.y), this.actions.push({ action: Ej, args: o }) }, Xn.getSpacedPoints = function (I) { I || (I = 40);
      for (var L = [], m = 0; I > m; m++) L.push(this.getPoint(m / I));
      return L }, Xn.getPoints = function (w, x) { w = w || 12;
      var $, J, D, U, Y, S, L, O, q, F, b, j, o, r, y, G, Q, X, k = [];
      for ($ = 0, J = this.actions.length; J > $; $++) switch (D = this.actions[$], U = D.action, Y = D.args, U) {
        case _e:
          k.push(new fs(Y[0], Y[1]));
          break;
        case jq:
          k.push(new fs(Y[0], Y[1]));
          break;
        case Gp:
          for (S = Y[2], L = Y[3], F = Y[0], b = Y[1], k.length > 0 ? (r = k[k.length - 1], j = r.x, o = r.y) : (r = this.actions[$ - 1].args, j = r[r.length - 2], o = r[r.length - 1]), y = 1; w >= y; y++) G = y / w, Q = nr.b2(G, j, F, S), X = nr.b2(G, o, b, L), k.push(new fs(Q, X));
          break;
        case uh:
          for (S = Y[4], L = Y[5], F = Y[0], b = Y[1], O = Y[2], q = Y[3], k.length > 0 ? (r = k[k.length - 1], j = r.x, o = r.y) : (r = this.actions[$ - 1].args, j = r[r.length - 2], o = r[r.length - 1]), y = 1; w >= y; y++) G = y / w, Q = nr.b3(G, j, F, O, S), X = nr.b3(G, o, b, q, L), k.push(new fs(Q, X));
          break;
        case yh:
          var c, e = Y[0],
            K = Y[1],
            u = Y[2],
            W = Y[3],
            T = Y[4],
            R = !!Y[5],
            p = T - W,
            H = 2 * w;
          for (y = 1; H >= y; y++) G = y / H, R || (G = 1 - G), c = W + G * p, Q = e + u * s(c), X = K + u * P(c), k.push(new fs(Q, X));
          break;
        case Ej:
          var c, e = Y[0],
            K = Y[1],
            M = Y[2],
            E = Y[3],
            W = Y[4],
            T = Y[5],
            R = !!Y[6],
            p = T - W,
            H = 2 * w;
          for (y = 1; H >= y; y++) G = y / H, R || (G = 1 - G), c = W + G * p, Q = e + M * s(c), X = K + E * P(c), k.push(new fs(Q, X)) }
      var l = k[k.length - 1],
        _ = 1e-10;
      return N(l.x - k[0].x) < _ && N(l.y - k[0].y) < _ && k.splice(k.length - 1, 1), x && k.push(k[0]), k }, Xn.toShapes = function (V, r) {
      function i(I) {
        var S, _, $, P, T, j = [],
          Y = new wm;
        for (S = 0, _ = I.length; _ > S; S++) $ = I[S], T = $.args, P = $.action, P == _e && 0 != Y.actions.length && (j.push(Y), Y = new wm), Y[P].apply(Y, T);
        return 0 != Y.actions.length && j.push(Y), j }

      function F(J) {
        for (var Z = [], C = 0, W = J.length; W > C; C++) {
          var q = J[C],
            H = new Yn;
          H.actions = q.actions, H.curves = q.curves, Z.push(H) }
        return Z }

      function v(q, B) {
        for (var p = 1e-10, s = B.length, f = !1, V = s - 1, w = 0; s > w; V = w++) {
          var D = B[V],
            M = B[w],
            k = M.x - D.x,
            n = M.y - D.y;
          if (N(n) > p) {
            if (0 > n && (D = B[w], k = -k, M = B[V], n = -n), q.y < D.y || q.y > M.y) continue;
            if (q.y == D.y) {
              if (q.x == D.x) return !0 } else {
              var z = n * (q.x - D.x) - k * (q.y - D.y);
              if (0 == z) return !0;
              if (0 > z) continue;
              f = !f } } else {
            if (q.y != D.y) continue;
            if (M.x <= q.x && q.x <= D.x || D.x <= q.x && q.x <= M.x) return !0 } }
        return f }
      var S = i(this.actions);
      if (0 == S.length) return [];
      if (r === !0) return F(S);
      var p, g, I, f = [];
      if (1 == S.length) return g = S[0], I = new Yn, I.actions = g.actions, I.curves = g.curves, f.push(I), f;
      var L = !nr.isClockWise(S[0].getPoints());
      L = V ? !L : L;
      var Y, s = [],
        d = [],
        l = [],
        z = 0;
      d[z] = B, l[z] = [];
      var A, C;
      for (A = 0, C = S.length; C > A; A++) g = S[A], Y = g.getPoints(), p = nr.isClockWise(Y), p = V ? !p : p, p ? (!L && d[z] && z++, d[z] = { s: new Yn, p: Y }, d[z].s.actions = g.actions, d[z].s.curves = g.curves, L && z++, l[z] = []) : l[z].push({ h: g, p: Y[0] });
      if (!d[0]) return F(S);
      if (d.length > 1) {
        for (var G = !1, t = [], E = 0, X = d.length; X > E; E++) s[E] = [];
        for (var E = 0, X = d.length; X > E; E++) { d[E];
          for (var y = l[E], M = 0; M < y.length; M++) {
            for (var k = y[M], o = !0, Q = 0; Q < d.length; Q++) v(k.p, d[Q].p) && (E != Q && t.push({ froms: E, tos: Q, hole: M }), o ? (o = !1, s[Q].push(k)) : G = !0);
            o && s[E].push(k) } }
        t.length > 0 && (G || (l = s)) }
      var c, h, u;
      for (A = 0, C = d.length; C > A; A++)
        for (I = d[A].s, f.push(I), c = l[A], h = 0, u = c.length; u > h; h++) I.holes.push(c[h].h);
      return f };
    var Yn = function () { wm.apply(this, arguments), this.holes = [] },
      kc = Yn.prototype = on(Xn);
    kc.getPointsHoles = function (Z) {
      var T, E = this.holes.length,
        c = [];
      for (T = 0; E > T; T++) c[T] = this.holes[T].getTransformedPoints(Z);
      return c }, kc.extractAllPoints = function (w) {
      return { shape: this.getTransformedPoints(w), holes: this.getPointsHoles(w) } }, kc.extractPoints = function (E) {
      return this.extractAllPoints(E) };
    var nr = {
        triangulateShape: function (J, m) {
          function W(A, P, y) {
            return A.x != P.x ? A.x < P.x ? A.x <= y.x && y.x <= P.x : P.x <= y.x && y.x <= A.x : A.y < P.y ? A.y <= y.y && y.y <= P.y : P.y <= y.y && y.y <= A.y }

          function p($, p, b, J, n) {
            var C = 1e-10,
              r = p.x - $.x,
              Q = p.y - $.y,
              d = J.x - b.x,
              g = J.y - b.y,
              D = $.x - b.x,
              R = $.y - b.y,
              Z = Q * d - r * g,
              Y = Q * D - r * R;
            if (N(Z) > C) {
              var E;
              if (Z > 0) {
                if (0 > Y || Y > Z) return [];
                if (E = g * D - d * R, 0 > E || E > Z) return [] } else {
                if (Y > 0 || Z > Y) return [];
                if (E = g * D - d * R, E > 0 || Z > E) return [] }
              if (0 == E) return !n || 0 != Y && Y != Z ? [$] : [];
              if (E == Z) return !n || 0 != Y && Y != Z ? [p] : [];
              if (0 == Y) return [b];
              if (Y == Z) return [J];
              var B = E / Z;
              return [{ x: $.x + B * r, y: $.y + B * Q }] }
            if (0 != Y || g * D != d * R) return [];
            var O = 0 == r && 0 == Q,
              K = 0 == d && 0 == g;
            if (O && K) return $.x != b.x || $.y != b.y ? [] : [$];
            if (O) return W(b, J, $) ? [$] : [];
            if (K) return W($, p, b) ? [b] : [];
            var v, o, w, h, f, P, l, u;
            return 0 != r ? ($.x < p.x ? (v = $, w = $.x, o = p, h = p.x) : (v = p, w = p.x, o = $, h = $.x), b.x < J.x ? (f = b, l = b.x, P = J, u = J.x) : (f = J, l = J.x, P = b, u = b.x)) : ($.y < p.y ? (v = $, w = $.y, o = p, h = p.y) : (v = p, w = p.y, o = $, h = $.y), b.y < J.y ? (f = b, l = b.y, P = J, u = J.y) : (f = J, l = J.y, P = b, u = b.y)), l >= w ? l > h ? [] : h == l ? n ? [] : [f] : u >= h ? [f, o] : [f, P] : w > u ? [] : w == u ? n ? [] : [v] : u >= h ? [v, o] : [v, P] }

          function P(A, H, p, F) {
            var m = 1e-10,
              M = H.x - A.x,
              D = H.y - A.y,
              J = p.x - A.x,
              o = p.y - A.y,
              V = F.x - A.x,
              O = F.y - A.y,
              S = M * o - D * J,
              d = M * O - D * V;
            if (N(S) > m) {
              var X = V * o - O * J;
              return S > 0 ? d >= 0 && X >= 0 : d >= 0 || X >= 0 }
            return d > 0 }

          function z(g, j) {
            function A(M, s) {
              var e = h.length - 1,
                L = M - 1;
              0 > L && (L = e);
              var w = M + 1;
              w > e && (w = 0);
              var V = P(h[M], h[L], h[w], y[s]);
              if (!V) return !1;
              var A = y.length - 1,
                q = s - 1;
              0 > q && (q = A);
              var F = s + 1;
              return F > A && (F = 0), V = P(y[s], y[q], y[F], h[M]), V ? !0 : !1 }

            function u(f, Z) {
              var I, s, U;
              for (I = 0; I < h.length; I++)
                if (s = I + 1, s %= h.length, U = p(f, Z, h[I], h[s], !0), U.length > 0) return !0;
              return !1 }

            function q(r, m) {
              var s, K, N, O, F;
              for (s = 0; s < Z.length; s++)
                for (K = j[Z[s]], N = 0; N < K.length; N++)
                  if (O = N + 1, O %= K.length, F = p(r, m, K[N], K[O], !0), F.length > 0) return !0;
              return !1 }
            for (var y, d, K, x, o, r, E, N, $, l, m, h = g.concat(), Z = [], R = [], M = 0, U = j.length; U > M; M++) Z.push(M);
            for (var w = 0, T = 2 * Z.length; Z.length > 0 && (T--, !(0 > T));)
              for (K = w; K < h.length; K++) {
                x = h[K], d = -1;
                for (var M = 0; M < Z.length; M++)
                  if (r = Z[M], E = x.x + ":" + x.y + ":" + r, R[E] === B) {
                    y = j[r];
                    for (var V = 0; V < y.length; V++)
                      if (o = y[V], A(K, V) && !u(x, o) && !q(x, o)) {
                        d = V, Z.splice(M, 1), N = h.slice(0, K + 1), $ = h.slice(K), l = y.slice(d), m = y.slice(0, d + 1), h = N.concat(l).concat(m).concat($), w = K;
                        break
                      }
                    if (d >= 0) break;
                    R[E] = !0
                  }
                if (d >= 0) break
              }
            return h
          }
          for (var Q, E, b, v, I, l, o = {}, y = J.concat(), w = 0, M = m.length; M > w; w++) Array.prototype.push.apply(y, m[w]);
          for (Q = 0, E = y.length; E > Q; Q++) I = y[Q].x + ":" + y[Q].y, o[I] !== B, o[I] = Q;
          var Z = z(J, m),
            u = _l.Triangulate(Z, !1);
          for (Q = 0, E = u.length; E > Q; Q++)
            for (v = u[Q], b = 0; 3 > b; b++) I = v[b].x + ":" + v[b].y, l = o[I], l !== B && (v[b] = l);
          return u.concat()
        },
        isClockWise: function (i) {
          return _l.Triangulate.area(i) < 0 },
        b2p0: function (k, w) {
          var y = 1 - k;
          return y * y * w },
        b2p1: function (x, v) {
          return 2 * (1 - x) * x * v },
        b2p2: function (d, h) {
          return d * d * h },
        b2: function (V, l, u, y) {
          return this.b2p0(V, l) + this.b2p1(V, u) + this.b2p2(V, y) },
        b3p0: function (s, X) {
          var K = 1 - s;
          return K * K * K * X },
        b3p1: function (r, v) {
          var Y = 1 - r;
          return 3 * Y * Y * r * v },
        b3p2: function (T, r) {
          var S = 1 - T;
          return 3 * S * T * T * r },
        b3p3: function (s, F) {
          return s * s * s * F },
        b3: function (e, y, $, V, C) {
          return this.b3p0(e, y) + this.b3p1(e, $) + this.b3p2(e, V) + this.b3p3(e, C) }
      },
      _l = { faces: {}, face: "", weight: "normal", style: "normal", size: 150, divisions: 10, getDefaultFont: function () {
          var T = y.keys(this.faces);
          return T.length ? T[0] : null }, getFace: function () {
          try {
            return this.faces[this.face][this.weight][this.style] } catch (v) {
            throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing." } }, loadFace: function (p) {
          var H = p.familyName.toLowerCase(),
            Q = this;
          return Q.faces[H] = Q.faces[H] || {}, Q.faces[H][p.cssFontWeight] = Q.faces[H][p.cssFontWeight] || {}, Q.faces[H][p.cssFontWeight][p.cssFontStyle] = p, p }, drawText: function (x) {
          var T, g = this.getFace(),
            z = this.size / g.resolution,
            Z = 0,
            _ = String(x).split(""),
            G = _.length,
            X = [];
          for (T = 0; G > T; T++) {
            var I = new wm,
              m = this.extractGlyphPoints(_[T], g, z, Z, I);
            m && (Z += m.offset * this.spacing, X.push(m.path)) }
          var U = Z / 2;
          return { paths: X, offset: U } }, extractGlyphPoints: function (d, A, e, t, Z) {
          var R, k, V, $, o, u, s, U, S, W, N, M, w, b, x, q, B, H, O, i = [],
            c = A.glyphs[d] || A.glyphs["?"];
          if (c) {
            if (c.o)
              for ($ = c._cachedOutline || (c._cachedOutline = c.o.split(" ")), u = $.length, s = e, U = e, R = 0; u > R;) switch (o = $[R++]) {
                case "m":
                  S = $[R++] * s + t, W = $[R++] * U, Z.moveTo(S, W);
                  break;
                case "l":
                  S = $[R++] * s + t, W = $[R++] * U, Z.lineTo(S, W);
                  break;
                case "q":
                  if (N = $[R++] * s + t, M = $[R++] * U, x = $[R++] * s + t, q = $[R++] * U, Z.quadraticCurveTo(x, q, N, M), O = i[i.length - 1])
                    for (w = O.x, b = O.y, k = 1, V = this.divisions; V >= k; k++) {
                      var Q = k / V;
                      nr.b2(Q, w, x, N), nr.b2(Q, b, q, M) }
                  break;
                case "b":
                  if (N = $[R++] * s + t, M = $[R++] * U, x = $[R++] * s + t, q = $[R++] * U, B = $[R++] * s + t, H = $[R++] * U, Z.bezierCurveTo(x, q, B, H, N, M), O = i[i.length - 1])
                    for (w = O.x, b = O.y, k = 1, V = this.divisions; V >= k; k++) {
                      var Q = k / V;
                      nr.b3(Q, w, x, B, N), nr.b3(Q, b, q, H, M) } }
            return { offset: c.ha * e, path: Z } } } };
    _l.generateShapes = function (Y, J) { J = J || {};
        var X = J.font;
        if (X === B && (X = _l.getDefaultFont(), !X)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
        var K = J.size !== B ? J.size : 1,
          f = J.curveSegments !== B ? J.curveSegments : 4,
          m = J.spacing !== B ? J.spacing : 1,
          H = J.weight !== B ? J.weight : "normal",
          p = J.style !== B ? J.style : "normal";
        _l.size = K, _l.divisions = f, _l.face = X, _l.weight = H, _l.style = p, _l.spacing = m;
        for (var l = _l.drawText(Y), y = l.paths, T = [], G = 0, i = y.length; i > G; G++) Array.prototype.push.apply(T, y[G].toShapes());
        return T },
      function (f) {
        var A = 1e-10,
          U = function (f, T) {
            var c = f.length;
            if (3 > c) return null;
            var e, z, E, L = [],
              h = [],
              l = [];
            if (y(f) > 0)
              for (z = 0; c > z; z++) h[z] = z;
            else
              for (z = 0; c > z; z++) h[z] = c - 1 - z;
            var A = c,
              P = 2 * A;
            for (z = A - 1; A > 2;) {
              if (P-- <= 0) return T ? l : L;
              if (e = z, e >= A && (e = 0), z = e + 1, z >= A && (z = 0), E = z + 1, E >= A && (E = 0), I(f, e, z, E, A, h)) {
                var q, s, V, G, F;
                for (q = h[e], s = h[z], V = h[E], L.push([f[q], f[s], f[V]]), l.push([h[e], h[z], h[E]]), G = z, F = z + 1; A > F; G++, F++) h[G] = h[F];
                A--, P = 2 * A } }
            return T ? l : L },
          y = function (k) {
            for (var Y = k.length, X = 0, l = Y - 1, W = 0; Y > W; l = W++) X += k[l].x * k[W].y - k[W].x * k[l].y;
            return .5 * X },
          I = function (S, d, J, k, T, Y) {
            var w, c, j, U, f, p, V, g, D;
            if (c = S[Y[d]].x, j = S[Y[d]].y, U = S[Y[J]].x, f = S[Y[J]].y, p = S[Y[k]].x, V = S[Y[k]].y, A > (U - c) * (V - j) - (f - j) * (p - c)) return !1;
            var W, Q, x, m, F, P, s, e, C, t, z, K, E, B, u;
            for (W = p - U, Q = V - f, x = c - p, m = j - V, F = U - c, P = f - j, w = 0; T > w; w++)
              if (g = S[Y[w]].x, D = S[Y[w]].y, !(g === c && D === j || g === U && D === f || g === p && D === V) && (s = g - c, e = D - j, C = g - U, t = D - f, z = g - p, K = D - V, u = W * t - Q * C, E = F * e - P * s, B = x * K - m * z, u >= -A && B >= -A && E >= -A)) return !1;
            return !0 };
        return f.Triangulate = U, f.Triangulate.area = y, f }(_l), _._typeface_js = { faces: _l.faces, loadFace: _l.loadFace };
    var $e = function () { this.vertices = [], this.faces = [], this.faceVertexUvs = [
          []
        ] },
      pm = $e.prototype = { constructor: $e, computeFaceNormals: function () {
          for (var X = new up, k = new up, G = 0, Q = this.faces.length; Q > G; G++) {
            var c = this.faces[G],
              l = this.vertices[c.a],
              t = this.vertices[c.b],
              R = this.vertices[c.c];
            X.subVectors(R, t), k.subVectors(l, t), X.cross(k), X.normalize(), c.normal.copy(X) } }, computeVertexNormals: function (k) {
          var U, J, e, H, Z, i;
          for (i = new Array(this.vertices.length), U = 0, J = this.vertices.length; J > U; U++) i[U] = new up;
          if (k) {
            var I, A, t, C = new up,
              o = new up;
            for (e = 0, H = this.faces.length; H > e; e++) Z = this.faces[e], I = this.vertices[Z.a], A = this.vertices[Z.b], t = this.vertices[Z.c], C.subVectors(t, A), o.subVectors(I, A), C.cross(o), i[Z.a].add(C), i[Z.b].add(C), i[Z.c].add(C) } else
            for (e = 0, H = this.faces.length; H > e; e++) Z = this.faces[e], i[Z.a].add(Z.normal), i[Z.b].add(Z.normal), i[Z.c].add(Z.normal);
          for (U = 0, J = this.vertices.length; J > U; U++) i[U].normalize();
          for (e = 0, H = this.faces.length; H > e; e++) Z = this.faces[e], Z.vertexNormals[0] = i[Z.a].clone(), Z.vertexNormals[1] = i[Z.b].clone(), Z.vertexNormals[2] = i[Z.c].clone() }, mergeVertices: function () {
          var h, $, S, l, A, s, U, T, Z = {},
            E = [],
            p = [],
            j = 4,
            W = R(10, j);
          for (S = 0, l = this.vertices.length; l > S; S++) h = this.vertices[S], $ = b(h.x * W) + "_" + b(h.y * W) + "_" + b(h.z * W), Z[$] === B ? (Z[$] = S, E.push(this.vertices[S]), p[S] = E.length - 1) : p[S] = p[Z[$]];
          var x = [];
          for (S = 0, l = this.faces.length; l > S; S++) { A = this.faces[S], A.a = p[A.a], A.b = p[A.b], A.c = p[A.c], s = [A.a, A.b, A.c];
            for (var d = 0; 3 > d; d++)
              if (s[d] == s[(d + 1) % 3]) { x.push(S);
                break } }
          for (S = x.length - 1; S >= 0; S--) {
            var z = x[S];
            for (this.faces.splice(z, 1), U = 0, T = this.faceVertexUvs.length; T > U; U++) this.faceVertexUvs[U].splice(z, 1) }
          var V = this.vertices.length - E.length;
          return this.vertices = E, V } },
      Mk = function (e, Q, x, I, V, y, C) { this.aX = e, this.aY = Q, this.xRadius = x, this.yRadius = I, this.aStartAngle = V, this.aEndAngle = y, this.aClockwise = C };
    Mk.prototype = on(eh), Mk.prototype.getPoint = function (J) {
      var o, k = this.aEndAngle - this.aStartAngle;
      0 > k && (k += Q), k > Q && (k -= Q), o = this.aClockwise === !0 ? this.aEndAngle + (1 - J) * (Q - k) : this.aStartAngle + J * k;
      var m = this.aX + this.xRadius * s(o),
        V = this.aY + this.yRadius * P(o);
      return new fs(m, V) };
    var lm = function (o, p) { this.v1 = o, this.v2 = p },
      _k = lm.prototype = on(eh);
    _k.getPoint = function (k) {
      var V = this.v2.clone().sub(this.v1);
      return V.multiplyScalar(k).add(this.v1), V }, _k.getPointAt = function (b) {
      return this.getPoint(b) }, _k.getTangent = function () {
      var y = this.v2.clone().sub(this.v1);
      return y.normalize() };
    var lp = function (d, U, C) { this.v0 = d, this.v1 = U, this.v2 = C };
    lp.prototype = on(eh), lp.prototype.getPoint = function (V) {
      var f, J;
      return f = nr.b2(V, this.v0.x, this.v1.x, this.v2.x), J = nr.b2(V, this.v0.y, this.v1.y, this.v2.y), new fs(f, J) };
    var yn = function (G, U, Q, N) { this.v0 = G, this.v1 = U, this.v2 = Q, this.v3 = N };
    yn.prototype = on(eh), yn.prototype.getPoint = function (u) {
      var P, J;
      return P = nr.b3(u, this.v0.x, this.v1.x, this.v2.x, this.v3.x), J = nr.b3(u, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new fs(P, J) }, Em.create(function (c, t) { this.v1 = c, this.v2 = t }, function (w) {
      var M = new up;
      return M.subVectors(this.v2, this.v1), M.multiplyScalar(w), M.add(this.v1), M });
    var Cj = Em.create(function (h, j, S) { this.v0 = h, this.v1 = j, this.v2 = S }, function (q) {
        var x, h, S;
        return x = nr.b2(q, this.v0.x, this.v1.x, this.v2.x), h = nr.b2(q, this.v0.y, this.v1.y, this.v2.y), S = nr.b2(q, this.v0.z, this.v1.z, this.v2.z), new up(x, h, S) }),
      Bf = Em.create(function (B, p, x, L) { this.v0 = B, this.v1 = p, this.v2 = x, this.v3 = L }, function (y) {
        var b, A, v;
        return b = nr.b3(y, this.v0.x, this.v1.x, this.v2.x, this.v3.x), A = nr.b3(y, this.v0.y, this.v1.y, this.v2.y, this.v3.y), v = nr.b3(y, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new up(b, A, v) }),
      dk = function (L, h, R, W, p, n, N, K) { $e.call(this), W = W !== B ? W : .5, p = p !== B ? p : .5, K = K !== B ? K : 1, L = L || 8, n = n || 0, N = N || Q;
        var j, X, o = 1,
          k = K / 2,
          d = [],
          $ = [],
          D = this.vertices,
          S = this.faces,
          I = this.faceVertexUvs;
        for (X = 0; o >= X; X++) {
          var f = [],
            g = [],
            e = X / o,
            F = e * (p - W) + W;
          for (j = 0; L >= j; j++) {
            var b = j / L,
              O = new up,
              r = -(b * N + n);
            O.z = F * P(r), O.y = -e * K + k, O.x = F * s(r), D.push(O), f.push(D.length - 1), g.push(new fs(b, e)) }
          d.push(f), $.push(g) }
        var U, w, c = (p - W) / K;
        for (j = 0; L > j; j++)
          for (0 !== W ? (U = D[d[0][j]].clone(), w = D[d[0][j + 1]].clone()) : (U = D[d[1][j]].clone(), w = D[d[1][j + 1]].clone()), U.setY(A(U.x * U.x + U.z * U.z) * c).normalize(), w.setY(A(w.x * w.x + w.z * w.z) * c).normalize(), X = 0; o > X; X++) {
            var E = d[X][j],
              z = d[X + 1][j],
              x = d[X + 1][j + 1],
              q = d[X][j + 1],
              m = U.clone(),
              M = U.clone(),
              v = w.clone(),
              l = w.clone(),
              C = $[X][j].clone(),
              u = $[X + 1][j].clone(),
              G = $[X + 1][j + 1].clone(),
              i = $[X][j + 1].clone();
            S.push(new _r(E, z, q, [m, M, l])), I[0].push([C, u, i]), S.push(new _r(z, x, q, [M.clone(), v, l.clone()])), I[0].push([u.clone(), G, i.clone()]) }
        if (h && W > 0)
          for (this.vertices.push(new up(0, k, 0)), j = 0; L > j; j++) {
            var E = d[0][j],
              z = d[0][j + 1],
              x = this.vertices.length - 1,
              m = new up(0, 1, 0),
              M = new up(0, 1, 0),
              v = new up(0, 1, 0),
              C = $[0][j].clone(),
              u = $[0][j + 1].clone(),
              G = new fs(u.x, 0);
            S.push(new _r(E, z, x, [m, M, v], null, 1));
            var t = j / L * Q,
              a = s(t),
              J = P(t),
              V = (j + 1) / L * Q,
              Z = s(V),
              Y = P(V);
            I[0].push([new fs(.5 + .5 * a, .5 + .5 * J), new fs(.5 + .5 * Z, .5 + .5 * Y), new fs(.5, .5)]) }
        if (R && p > 0)
          for (this.vertices.push(new up(0, -k, 0)), j = 0; L > j; j++) {
            var E = d[X][j + 1],
              z = d[X][j],
              x = D.length - 1,
              m = new up(0, -1, 0),
              M = new up(0, -1, 0),
              v = new up(0, -1, 0),
              C = $[X][j + 1].clone(),
              u = $[X][j].clone();
            S.push(new _r(E, z, x, [m, M, v], null, 2));
            var t = j / L * Q,
              a = s(t),
              J = P(t),
              V = (j + 1) / L * Q,
              Z = s(V),
              Y = P(V);
            I[0].push([new fs(.5 + .5 * Z, .5 - .5 * Y), new fs(.5 + .5 * a, .5 - .5 * J), new fs(.5, .5)]) } };
    dk.prototype = on(pm);
    var Og = function (v, o, W, y, M, m, q) { $e.call(this), q = q || .5, v = v || 16, o = o || 16, W = (W !== B ? W : 0) - i, y = y !== B ? y : Q, M = M !== B ? M : 0, m = m !== B ? m : i;
      var k, Z, x = [],
        f = [],
        h = this.vertices,
        G = this.faces,
        Y = this.faceVertexUvs;
      for (Z = 0; o >= Z; Z++) {
        var _ = [],
          D = [];
        for (k = 0; v >= k; k++) {
          var V = k / v,
            d = Z / o,
            X = new up;
          X.x = -q * s(W + V * y) * P(M + d * m), X.y = q * s(M + d * m), X.z = q * P(W + V * y) * P(M + d * m), h.push(X), _.push(h.length - 1), D.push(new fs(V, d)) }
        x.push(_), f.push(D) }
      for (Z = 0; o > Z; Z++)
        for (k = 0; v > k; k++) {
          var R = x[Z][k + 1],
            n = x[Z][k],
            L = x[Z + 1][k],
            S = x[Z + 1][k + 1],
            e = h[R].clone().normalize(),
            c = h[n].clone().normalize(),
            K = h[L].clone().normalize(),
            C = h[S].clone().normalize(),
            O = f[Z][k + 1].clone(),
            j = f[Z][k].clone(),
            b = f[Z + 1][k].clone(),
            r = f[Z + 1][k + 1].clone();
          N(h[R].y) === q ? (O.x = (O.x + j.x) / 2, G.push(new _r(R, L, S, [e, K, C])), Y[0].push([O, b, r])) : N(h[L].y) === q ? (b.x = (b.x + r.x) / 2, G.push(new _r(R, n, L, [e, c, K])), Y[0].push([O, j, b])) : (G.push(new _r(R, n, S, [e, c, C])), Y[0].push([O, j, r]), G.push(new _r(n, L, S, [c.clone(), K, C.clone()])), Y[0].push([j.clone(), b, r.clone()])) } };
    Og.prototype = on(pm);
    var Qg = function (d, X, p, y, T, D) { $e.call(this), d = d || .33, X = X || .17, y = y || 8, p = p || 6, T = T || 0, D = D || Q;
      for (var l = new up, c = [], Z = [], f = 0; y >= f; f++)
        for (var L = f / y * Q + i, B = 0; p >= B; B++) {
          var W = B / p * D + T;
          l.x = d * s(W), l.z = -d * P(W);
          var N = new up,
            F = d + X * s(L);
          N.x = F * s(W), N.z = -F * P(W), N.y = X * P(L), this.vertices.push(N), c.push(new fs(B / p, 1 - f / y)), Z.push(N.clone().sub(l).normalize()) }
      for (var f = 1; y >= f; f++)
        for (var B = 1; p >= B; B++) {
          var q = (p + 1) * f + B - 1,
            w = (p + 1) * (f - 1) + B - 1,
            R = (p + 1) * (f - 1) + B,
            x = (p + 1) * f + B,
            a = new _r(q, w, x, [Z[q].clone(), Z[w].clone(), Z[x].clone()]);
          this.faces.push(a), this.faceVertexUvs[0].push([c[q].clone(), c[w].clone(), c[x].clone()]), a = new _r(w, R, x, [Z[w].clone(), Z[R].clone(), Z[x].clone()]), this.faces.push(a), this.faceVertexUvs[0].push([c[w].clone(), c[R].clone(), c[x].clone()]) }
      this.computeFaceNormals() };
    Qg.prototype = on(pm);
    var Zi = function (F, A, K) {
        return F ? ($e.call(this), F = F instanceof Array ? F : [F], this.addShapeList(F, A), A.convertYZ !== !1 && fq(this, K), this.computeFaceNormals(), void 0) : (F = [], void 0) },
      iq = Zi.prototype = on($e.prototype);
    iq.addShapeList = function (C, v) {
      for (var J = C.length, k = 0; J > k; k++) {
        var F = C[k];
        this.addShape(F, v) } }, iq.addShape = function (Y, u) {
      function N() {
        if (u.bottom)
          for (var i = 0; A > i; i++) I = f[i], X(I[2], I[1], I[0], !0);
        if (u.top)
          for (i = 0; A > i; i++) I = f[i], X(I[0] + Z * q, I[1] + Z * q, I[2] + Z * q, !1) }

      function v() {
        var E = 0;
        for (d(T, E), E += T.length, W = 0, J = p.length; J > W; W++) V = p[W], d(V, E), E += V.length }

      function d(b, e) {
        for (var Y, C, _ = b.length; --_ >= 0;) { Y = _, C = _ - 1, 0 > C && (C = b.length - 1);
          var B = 0,
            R = q;
          for (B = 0; R > B; B++) {
            var k = Z * B,
              H = Z * (B + 1),
              i = e + Y + k,
              z = e + C + k,
              J = e + C + H,
              E = e + Y + H;
            G(i, z, J, E, b, B, R, Y, C) } } }

      function r(s, T, i) { C.vertices.push(new up(s, T, i)) }

      function X(y, X, T, k) { y += m, X += m, T += m, C.faces.push(new _r(y, X, T, null, null, k ? 2 : 1));
        var r = k ? c.generateBottomUV(C, Y, u, y, X, T) : c.generateTopUV(C, Y, u, y, X, T);
        C.faceVertexUvs[0].push(r) }

      function G(g, P, E, o, W, d, R, A, k) { g += m, P += m, E += m, o += m, C.faces.push(new _r(g, P, o)), C.faces.push(new _r(P, E, o));
        var v = c.generateSideWallUV(C, Y, W, u, g, P, E, o, d, R, A, k);
        C.faceVertexUvs[0].push([v[0], v[1], v[3]]), C.faceVertexUvs[0].push([v[1], v[2], v[3]]) }
      var n, S, H, U, e, P = u.amount,
        o = u.curveSegments || Ih,
        q = u.steps || 1,
        z = u.extrudePath,
        L = !1,
        c = new Xr(u.repeatUVLength);
      z && (n = z.getSpacedPoints(q), L = !0, S = u.frames !== B ? u.frames : new ro.FrenetFrames(z, q, !1), H = new up, U = new up, e = new up);
      var V, W, J, C = this,
        m = this.vertices.length,
        s = Y.extractPoints(o),
        Q = s.shape,
        p = s.holes,
        l = !nr.isClockWise(Q);
      if (l) {
        for (Q = Q.reverse(), W = 0, J = p.length; J > W; W++) V = p[W], nr.isClockWise(V) && (p[W] = V.reverse());
        l = !1 }
      var f = nr.triangulateShape(Q, p),
        T = Q;
      for (W = 0, J = p.length; J > W; W++) V = p[W], Q = Q.concat(V);
      for (var t, I, Z = Q.length, A = f.length, $ = 0; Z > $; $++) t = Q[$], L ? (U.copy(S.normals[0]).multiplyScalar(t.x), H.copy(S.binormals[0]).multiplyScalar(t.y), e.copy(n[0]).add(U).add(H), r(e.x, e.y, e.z)) : r(t.x, t.y, 0);
      var E;
      for (E = 1; q >= E; E++)
        for ($ = 0; Z > $; $++) t = Q[$], L ? (U.copy(S.normals[E]).multiplyScalar(t.x), H.copy(S.binormals[E]).multiplyScalar(t.y), e.copy(n[E]).add(U).add(H), r(e.x, e.y, e.z)) : r(t.x, t.y, P / q * E);
      N(), v() };
    var ro = function (T, e, B, z, Y) {
      function b(x, j, F) {
        return G.vertices.push(new up(x, j, F)) - 1 }
      $e.call(this), e = e || 64, B = B || 1, z = z || 8, Y = Y || !1;
      var n, H, f, R, W, N, L, M, k, m, x, I, V, c, l, g, u, p, X, i, _ = [],
        G = this,
        w = e + 1,
        d = new up,
        J = new ro.FrenetFrames(T, e, Y),
        q = J.tangents,
        Z = J.normals,
        O = J.binormals;
      for (this.tangents = q, this.normals = Z, this.binormals = O, k = 0; w > k; k++)
        for (_[k] = [], R = k / (w - 1), M = T.getPointAt(R), n = q[k], H = Z[k], f = O[k], m = 0; z > m; m++) W = m / z * Q, N = -B * s(W), L = B * P(W), d.copy(M), d.x += N * H.x + L * f.x, d.y += N * H.y + L * f.y, d.z += N * H.z + L * f.z, _[k][m] = b(d.x, d.y, d.z);
      for (k = 0; e > k; k++)
        for (m = 0; z > m; m++) x = Y ? (k + 1) % e : k + 1, I = (m + 1) % z, V = _[k][m], c = _[x][m], l = _[x][I], g = _[k][I], u = new fs(k / e, m / z), p = new fs((k + 1) / e, m / z), X = new fs((k + 1) / e, (m + 1) / z), i = new fs(k / e, (m + 1) / z), this.faces.push(new _r(V, c, g)), this.faceVertexUvs[0].push([u, p, i]), this.faces.push(new _r(c, l, g)), this.faceVertexUvs[0].push([p.clone(), X, i.clone()]);
      this.computeFaceNormals(), this.computeVertexNormals() };
    ro.prototype = on(pm), ro.FrenetFrames = function (E, V, j) {
      function q() { R[0] = new up, k[0] = new up, Z = Number.MAX_VALUE, x = N(y[0].x), G = N(y[0].y), m = N(y[0].z), Z >= x && (Z = x, J.set(1, 0, 0)), Z >= G && (Z = G, J.set(0, 1, 0)), Z >= m && J.set(0, 0, 1), U.crossVectors(y[0], J).normalize(), R[0].crossVectors(y[0], U), k[0].crossVectors(y[0], R[0]) }
      var d, Z, x, G, m, S, X, J = new up,
        y = [],
        R = [],
        k = [],
        U = new up,
        I = new En,
        e = V + 1,
        f = 1e-4;
      for (this.tangents = y, this.normals = R, this.binormals = k, S = 0; e > S; S++) X = S / (e - 1), y[S] = E.getTangentAt(X), y[S].normalize();
      for (q(), S = 1; e > S; S++) R[S] = R[S - 1].clone(), k[S] = k[S - 1].clone(), U.crossVectors(y[S - 1], y[S]), U.length() > f && (U.normalize(), d = l(Tl(y[S - 1].dot(y[S]), -1, 1)), R[S].applyMatrix4(I.makeRotationAxis(U, d))), k[S].crossVectors(y[S], R[S]);
      if (j)
        for (d = l(Tl(R[0].dot(R[e - 1]), -1, 1)), d /= e - 1, y[0].dot(U.crossVectors(R[0], R[e - 1])) > 0 && (d = -d), S = 1; e > S; S++) R[S].applyMatrix4(I.makeRotationAxis(y[S], d * S)), k[S].crossVectors(y[S], R[S]) };
    var Jf = function (B, U, K, f) { $e.call(this), U = U || 18, K = K || 0, f = f == $ ? Q : f;
      for (var M = 1 / (B.length - 1), O = 1 / U, r = 0, Y = U; Y >= r; r++)
        for (var I = K + r * O * f, J = s(I), D = P(I), c = 0, v = B.length; v > c; c++) {
          var p = B[c],
            V = new up;
          V.x = J * p.x - D * p.y, V.y = D * p.x + J * p.y, V.z = p.z, this.vertices.push(V) }
      for (var l = B.length, r = 0, Y = U; Y > r; r++)
        for (var c = 0, v = B.length - 1; v > c; c++) {
          var W = c + l * r,
            G = W,
            o = W + l,
            J = W + 1 + l,
            C = W + 1,
            X = r * O,
            T = c * M,
            A = X + O,
            N = T + M;
          this.faces.push(new _r(G, C, o)), this.faceVertexUvs[0].push([new fs(X, T), new fs(X, N), new fs(A, T)]), this.faces.push(new _r(o, C, J)), this.faceVertexUvs[0].push([new fs(A, T), new fs(X, N), new fs(A, N)]) }
      this.mergeVertices(), fq(this), this.computeFaceNormals(), this.computeVertexNormals() };
    Jf.prototype = on(pm);
    var cn = function (F, d) { d = d || {};
      var V = _l.generateShapes(F, d);
      d.amount = d.amount !== B ? d.amount : .5, d.convertYZ = !1, d.fill !== !1 && (d.bottom = !0, d.top = !0), Zi.call(this, V, d) };
    cn.prototype = on(iq);
    var Ii = t.Node = function () { Dj(Ii, this) },
      Kh = { X: hk, Y: rg, Z: Bl },
      rq = { xyz: "XYZ", xzy: "XZY", yxz: "YXZ", yzx: "YZX", zxy: "ZXY", zyx: "ZYX" },
      yi = "xzy",
      Tk = function (Z, E, H) {
        if (E) {
          var $ = E[0],
            R = E[1],
            a = E[2]; "xzy" === H ? (rg(Z, R), Bl(Z, a), hk(Z, $)) : "xyz" === H ? (Bl(Z, a), rg(Z, R), hk(Z, $)) : "yxz" === H ? (Bl(Z, a), hk(Z, $), rg(Z, R)) : "yzx" === H ? (hk(Z, $), Bl(Z, a), rg(Z, R)) : "zxy" === H ? (rg(Z, R), hk(Z, $), Bl(Z, a)) : "zyx" === H ? (hk(Z, $), rg(Z, R), Bl(Z, a)) : (rg(Z, R), Bl(Z, a), hk(Z, $)) } };
    Gl("Node", sk, { ms_ac: ["rotationMode", "tall"], _adjustChildrenToTop: !0, _icon: "node_icon", _image: "node_image", _rotationMode: yi, _64O: 0, _rotationX: 0, _53O: 0, _host: $, _position: { x: 0, y: 0 }, _anchor: { x: .5, y: .5 }, _scale: { x: 1, y: 1 }, _tall: 20, _54O: 0, getUIClass: function () {
        return Db }, _22Q: function () {
        return Yl }, getX: function () {
        return this.p().x }, setX: function (y) { this.p(y, this.p().y) }, getY: function () {
        return this.p().y }, setY: function ($) { this.p(this.p().x, $) }, getAnchorX: function () {
        return this.getAnchor().x }, setAnchorX: function (r) { this.setAnchor(r, this.getAnchor().y) }, getAnchorY: function () {
        return this.getAnchor().y }, setAnchorY: function (H) { this.setAnchor(this.getAnchor().x, H) }, getScaleX: function () {
        return this.getScale().x }, setScaleX: function (E) { this.setScale(E, this.getScale().y) }, getScaleY: function () {
        return this.getScale().y }, setScaleY: function (z) { this.setScale(this.getScale().x, z) }, p: function () {
        return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this) }, p3: function () {
        return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this) }, s3: function () {
        return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this) }, r3: function () {
        return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this) }, t3: function () {
        return this.translate3d.apply(this, arguments), this }, translate3dBy: function (f, Q) { Wb(f, Vr($, $, this.r3(), this.getRotationMode())), this.translate3d(f[0] * Q, f[1] * Q, f[2] * Q) }, translateFront: function (c) { this.translate3dBy([0, 0, 1], c) }, translateBack: function (Z) { this.translate3dBy([0, 0, -1], Z) }, translateLeft: function (d) { this.translate3dBy([-1, 0, 0], d) }, translateRight: function (j) { this.translate3dBy([1, 0, 0], j) }, translateTop: function (R) { this.translate3dBy([0, 1, 0], R) }, translateBottom: function (S) { this.translate3dBy([0, -1, 0], S) }, getPosition3d: function () {
        return [this._position.x, this._54O, this._position.y] }, setPosition3d: function (x, f, k) { 1 === arguments.length && (f = x[1], k = x[2], x = x[0]), this.p(x, k), this.setElevation(f) }, translate3d: function (L, U, d) { 1 === arguments.length && (U = L[1], d = L[2], L = L[0]), this.translate(L, d), this.setElevation(this._54O + U) }, getSize3d: function () {
        return [this.getWidth(), this.getTall(), this.getHeight()] }, setSize3d: function (_, y, n) { 1 === arguments.length && (y = _[1], n = _[2], _ = _[0]), this.setSize(_, n), this.setTall(y) }, getRotation3d: function () {
        return [this._rotationX, -this._64O, this._53O] }, setRotation3d: function (y, t, A) { 1 === arguments.length && (t = y[1], A = y[2], y = y[0]), this.setRotationX(y), this.setRotation(-t), this.setRotationZ(A) }, setRotationY: function (Z) { this.setRotation(-Z) }, getRotationY: function () {
        return -this._64O }, lookAt: function (C, d) { d = d || il;
        var r = this,
          R = co(C, r.p3()),
          K = Rk(R);
        d === il ? (r.r3([-n(R[1] / K), -z(R[2], R[0]) + S, 0]), r.setRotationMode("xzy")) : d === Fq ? (r.r3(0, -z(R[2], R[0]), n(R[1] / K)), r.setRotationMode("zyx")) : d === ci ? (r.r3(0, -z(R[2], R[0]) + i, -n(R[1] / K)), r.setRotationMode("zyx")) : d === xd ? (r.r3([-n(R[1] / K) + S, -z(R[2], R[0]) + S, 0]), r.setRotationMode("xzy")) : d === qc && (r.r3([-n(R[1] / K) - S, -z(R[2], R[0]) + S, 0]), r.setRotationMode("xzy")), d === Vk && (r.r3([-n(R[1] / K) + i, -z(R[2], R[0]) + S, i]), r.setRotationMode("zxy")) }, getLoopedEdges: function () {
        return this._45I }, getEdges: function () {
        return this._70O }, getAgentEdges: function () {
        return this._49I }, getHost: function () {
        return this._host }, setHost: function (n) {
        var X = this;
        if (X !== n && X._host !== n) {
          var M = X._host;
          M && M._removeAttach(X), X._host = n, X._host && X._host._addAttach(X), X.fp("host", M, n), X.onHostChanged(M, n) } }, getAttaches: function () {
        return this._69O }, _addAttach: function (C) {
        var l = this;
        l._69O || (l._69O = new Ol), l._69O.add(C), l.fp("attaches", $, C) }, _removeAttach: function (T) {
        var n = this;
        n._69O.remove(T), n._69O.isEmpty() && delete n._69O, n.fp("attaches", T, $) }, getSourceEdges: function () {
        return this._42I }, getTargetEdges: function () {
        return this._43I }, _2I: function (e) {
        var N = this;
        N._44I || (N._44I = new Ol), N._42I || (N._42I = new Ol), N._44I.add(e), N._42I.add(e), N._20I() }, _4I: function (_) {
        var q = this;
        q._44I || (q._44I = new Ol), q._43I || (q._43I = new Ol), q._44I.add(_), q._43I.add(_), q._20I() }, _16I: function (u) {
        var W = this;
        W._44I.remove(u), W._42I.remove(u), W._44I.isEmpty() && delete W._44I, W._42I.isEmpty() && delete W._42I, W._20I() }, _18I: function (A) {
        var h = this;
        h._44I.remove(A), h._43I.remove(A), h._44I.isEmpty() && delete h._44I, h._43I.isEmpty() && delete h._43I, h._20I() }, _20I: function () {
        var P = this;
        if (delete P._45I, !P._44I || P._44I.isEmpty()) return delete P._70O, void 0;
        var j;
        P._44I.each(function (F) { F.isLooped() && (j || (j = {}), j[F._id] || (P._45I || (P._45I = new Ol), P._45I.add(F), j[F._id] = F)) }), j ? (P._70O = new Ol, P._44I.each(function (Y) { j[Y._id] ? "A" === j[Y._id] || (j[Y._id] = "A", P._70O.add(Y)) : P._70O.add(Y) })) : P._70O = P._44I }, hasAgentEdges: function () {
        return !!this._49I && !this._49I.isEmpty() }, getSourceAgentEdges: function () {
        return this._46I }, getTargetAgentEdges: function () {
        return this._47I }, _1I: function ($) {
        var P = this;
        P._46I || (P._46I = new Ol), P._48I || (P._48I = new Ol), P._46I.add($), P._48I.add($), P._19I() }, _3I: function ($) {
        var I = this;
        I._47I || (I._47I = new Ol), I._48I || (I._48I = new Ol), I._47I.add($), I._48I.add($), I._19I() }, _15I: function (A) {
        var W = this;
        W._46I.remove(A), W._48I.remove(A), W._46I.isEmpty() && delete W._46I, W._48I.isEmpty() && delete W._48I, W._19I() }, _17I: function (c) {
        var O = this;
        O._47I.remove(c), O._48I.remove(c), O._47I.isEmpty() && delete O._47I, O._48I.isEmpty() && delete O._48I, O._19I() }, _19I: function () {
        var D = this;
        delete D._49I;
        var h = D._48I;
        if (h && !h.isEmpty()) {
          var R = {};
          h.each(function (o) { R[o._id] ? D._49I || (D._49I = new Ol) : R[o._id] = o }), D._49I ? h.each(function (w) { R[w._id] && (D._49I.add(w), delete R[w._id]) }) : D._49I = h } }, getImage: function () {
        if (this._needToCheckDataBindings) {
          var Q = r.getImage(this._image);
          Q && (this._needToCheckDataBindings = !1, Q.dataBindings && Q.dataBindings.forEach(function (T) { T.defaultValue !== B && this.getAttr(T.attr) === B && this.setAttr(T.attr, T.defaultValue) }, this)) }
        return this._image }, setImage: function (G) {
        var K = this,
          Z = K._image,
          c = K.getWidth(),
          Q = K.getHeight();
        K._image = G, K.fp("image", Z, G) && (null != G && (Cq(G) || An(G) && /\.json$/i.test(G)) && (this._needToCheckDataBindings = !0), K.fp(Ml, c, K.getWidth()), K.fp(Oq, Q, K.getHeight())) }, getElevation: function () {
        return this._54O }, setElevation: function (q) {
        var w = this;
        if (!w._50O) { w._50O = 1;
          var i = w._54O;
          w._54O = q, w.fp(fh, i, q), delete this._50O } }, getRotation: function () {
        return this._64O }, setRotation: function (A) {
        var h = this;
        if (!h._49O) { h._49O = 1;
          var T = h._64O;
          h._64O = A, h.fp(Te, T, A), delete h._49O } }, getRotationX: function () {
        return this._rotationX }, setRotationX: function (Q) {
        var X = this;
        if (!X._51O) { X._51O = 1;
          var m = X._rotationX;
          X._rotationX = Q, X.fp("rotationX", m, Q), delete X._51O } }, getRotationZ: function () {
        return this._53O }, setRotationZ: function (v) {
        var i = this;
        if (!i._52O) { i._52O = 1;
          var m = i._53O;
          i._53O = v, i.fp("rotationZ", m, v), delete i._52O } }, getPosition: function () {
        return this._position }, setPosition: function (B, t) {
        var S = this;
        if (!S._50I) { S._50I = 1;
          var z;
          if (z = 2 === arguments.length ? { x: B, y: t } : B, z.x !== S._position.x || z.y !== S._position.y) {
            var x = S._position;
            S._position = z, S.fp(Ff, x, z) }
          delete S._50I } }, translate: function (c, t) {
        var D = this._position;
        this.p(D.x + c, D.y + t) }, getWidth: function () {
        var t = this;
        if (t._width >= 0) return t._width;
        var C = bd(t._image);
        return C ? Io(C, t) : 20 }, setWidth: function (t) {
        var e = this,
          P = e._width;
        e._width = t, e.fp(Ml, P, t) }, getHeight: function () {
        var e = this;
        if (e._height >= 0) return e._height;
        var $ = bd(e._image);
        return $ ? mg($, e) : 20 }, setHeight: function (b) {
        var d = this,
          U = d._height;
        d._height = b, d.fp(Oq, U, b) }, setSize: function (L, h) {
        var w = this;
        2 === arguments.length ? (w.setWidth(L), w.setHeight(h)) : (w.setWidth(L.width), w.setHeight(L.height)) }, getSize: function () {
        return { width: this.getWidth(), height: this.getHeight() } }, setRect: function (V, M, I, o, P) {
        var c = this,
          m = c.getAnchor(),
          a = c.getScale();
        arguments.length <= 2 && (P = M, M = V.y, I = V.width, o = V.height, V = V.x);
        var N = P && a.x < 0 ? 1 - m.x : m.x,
          _ = P && a.y < 0 ? 1 - m.y : m.y;
        c.p(V + I * N, M + o * _), P && (I /= Math.abs(a.x), o /= Math.abs(a.y)), c.setWidth(I), c.setHeight(o) }, getMatrix: function () {
        var $ = this,
          k = $._64O,
          m = $._position,
          Z = $.getScale();
        return new jm(k, m.x, m.y, Z.x, Z.y) }, getRect: function () {
        var K = this,
          $ = K.getWidth(),
          j = K.getHeight(),
          q = K.getAnchor(),
          p = { x: -$ * q.x, y: -j * q.y, width: $, height: j },
          V = K.getMatrix();
        return p = ji([V.tf(p.x, p.y), V.tf(p.x + p.width, p.y), V.tf(p.x + p.width, p.y + p.height), V.tf(p.x, p.y + p.height)]) }, getAnchor: function () {
        var l = this;
        if (l.hasOwnProperty("_anchor")) return l._anchor;
        var j = bd(l._image);
        return j && j.anchorX !== B ? { x: j.anchorX, y: j.anchorY } : l._anchor }, setAnchor: function (w, L, V) {
        var X, A = this; "number" == typeof w ? X = { x: w, y: L } : (X = w.length ? { x: w[0], y: w[1] } : w, V = L);
        var y = A.getAnchor();
        if (y.x !== X.x || y.y !== X.y) {
          if (A._anchor = X, V && !Tm) {
            var m = A.getPosition(),
              F = A.getSize(),
              f = A.getRotation(),
              q = A.getScale(),
              M = -F.width * (y.x - X.x) * q.x,
              n = -F.height * (y.y - X.y) * q.y,
              D = P(f),
              Q = s(f);
            A.setPosition(m.x + Q * M - D * n, m.y + D * M + Q * n) }
          A.fp("anchor", y, X) } }, getScale: function () {
        return this._scale }, setScale: function (l, X) {
        var q, z = this;
        q = 2 === arguments.length ? { x: l, y: X } : l;
        var p = z.getScale();
        (p.x !== q.x || p.y !== q.y) && (z._scale = q, z.fp("scale", p, q)) }, getCorners: function (N, y) { N == $ && (N = 0), y == $ && (y = N);
        var b = this,
          I = b.getAnchor(),
          c = b.getWidth(),
          J = b.getHeight(),
          E = -c * I.x - N,
          F = -J * I.y - y,
          _ = c + 2 * N,
          t = J + 2 * y,
          u = b.getMatrix();
        return [u.tf(E, F), u.tf(E, F + t), u.tf(E + _, F + t), u.tf(E + _, F)] }, getEditControlPoints: function (_, F, K) { F == $ && (F = 0), K == $ && (K = F);
        var D = this,
          m = D.getAnchor(),
          A = D.getWidth(),
          q = D.getHeight(),
          c = -A * m.x - F,
          W = -q * m.y - K,
          V = A + 2 * F,
          U = q + 2 * K;
        if (_) return [{ x: c, y: W }, { x: c, y: 0 }, { x: c, y: W + U }, { x: 0, y: W + U }, { x: c + V, y: W + U }, { x: c + V, y: 0 }, { x: c + V, y: W }, { x: 0, y: W }];
        var w = D.getMatrix();
        return [w.tf(c, W), w.tf(c, 0), w.tf(c, W + U), w.tf(0, W + U), w.tf(c + V, W + U), w.tf(c + V, 0), w.tf(c + V, W), w.tf(0, W)] }, rotateAt: function ($, F, i) {
        var E = this,
          D = E._position,
          p = E._64O,
          U = new jm(p, D.x, D.y).tf($, F),
          Y = A($ * $ + F * F),
          _ = z(D.y - U.y, D.x - U.x) + i;
        E.setRotation(p + i), E.p(U.x + Y * s(_), U.y + Y * P(_)) }, onParentChanged: function () { Ii.superClass.onParentChanged.apply(this, arguments), this._8I() }, _8I: function () { this._70O && this._70O.each(function (M) { M._7I() }) }, onPropertyChanged: function (D) {
        var u = this;
        Ii.superClass.onPropertyChanged.call(u, D), u._69O && u._69O.each(function (t) { t.handleHostPropertyChange(D) }), u._49I && u._49I.each(function (X) { X.fp("agentChange", !0, !1) }) }, onHostChanged: function () { this.updateAttach() }, handleHostPropertyChange: function (x) { this.updateAttach(x) }, onStyleChanged: function (Q) { Ii.superClass.onStyleChanged.apply(this, arguments), Df[Q] && this.updateAttach() }, updateAttach: function (e) {
        var b = this;
        b._51I || Tm || (b._51I = 1, b._71O(e), delete b._51I) }, _71O: function (N) {
        var Z, P, w, E, k, i, T = this,
          p = T._host,
          l = N ? N.property : $,
          Q = N ? N.oldValue : $,
          x = N ? N.newValue : $;
        if (p instanceof t.Grid) {
          if (l === fh) T.setElevation(T._54O + x - Q);
          else if (!N || oo[l]) {
            if (Z = T.s("attach.row.index"), P = T.s("attach.column.index"), w = p.getCellRect(Z, P), !w) return;
            E = T.s("attach.row.span"), k = T.s("attach.column.span"), (1 !== E || 1 !== k) && (w = _h(w, p.getCellRect(Z + E - 1, P + k - 1))), $c(w, T, "attach.padding", 1), T.setRect(w) } } else if (p instanceof Ah && (i = T.s("attach.index")) >= 0 && (!N || Sd[l])) {
          var v = T.s("attach.thickness");
          v != $ && T.setHeight(p.getThickness() * v);
          var r = T.s("attach.offset"),
            e = p.getPoints(),
            I = e.size();
          if (I > i) {
            var O = e.get(i),
              d = I === i + 1 ? e.get(0) : e.get(i + 1),
              H = [d.x - O.x, d.y - O.y],
              m = Rk(H);
            if (m) { T.s("attach.offset.relative") && (r *= m), T.s("attach.offset.opposite") && (r = m - r);
              var h = { x: O.x + H[0] / m * r, y: O.y + H[1] / m * r },
                s = T.s("attach.gap");
              s && (T.s("attach.gap.relative") && (s *= p.getThickness()), h = Ji($, h, d, s)), T.p(h), T.setRotation(z(H[1], H[0])) } } } else N && (l === Ff ? T.translate(x.x - Q.x, x.y - Q.y) : l === fh ? T.setElevation(T._54O + x - Q) : rp[l] && T._11Q(p, l, x - Q)) }, _11Q: function (M, e, J) {
        var k = this,
          P = M.p3(),
          Z = co(k.p3(), P),
          G = Ti(),
          i = rq[k.getRotationMode()],
          Q = i[0],
          m = i[1],
          W = i[2],
          y = Kh[Q],
          C = Kh[m],
          c = Kh[W];
        e === Te && (e = "rotationY", J = -J), e === Te + Q ? (c(G, M[vi + W]()), C(G, M[vi + m]()), y(G, J), C(G, -M[vi + m]()), c(G, -M[vi + W]()), k[_i + Q](k[vi + Q]() + J)) : e === Te + m ? (c(G, M[vi + W]()), C(G, J), c(G, -M[vi + W]()), k[_i + m](k[vi + m]() + J)) : e === Te + W && (c(G, J), k[_i + W](k[vi + W]() + J)), Wb(Z, G), k.p3(P[0] + Z[0], P[1] + Z[1], P[2] + Z[2]) }, isHostOn: function (O) {
        var s = this;
        if (s._host && O && O._69O)
          for (var q = {}, w = s._host; w && w !== s && !q[w._id];) {
            if (w === O) return !0;
            q[w._id] = w, w = w._host }
        return !1 }, isLoopedHostOn: function (C) {
        return this.isHostOn(C) && C.isHostOn(this) }, getSerializableProperties: function () {
        var i = Ii.superClass.getSerializableProperties.call(this);
        return ph(i, { image: 1, host: 1, rotation: 1, rotationX: 1, rotationZ: 1, rotationMode: 1, position: 1, anchor: 1, scale: 1, _width: 1, _height: 1, tall: 1, elevation: 1 }), i } });
    var bb = t.Edge = function (i, Q) {
      var p = this;
      Dj(bb, p), p.setSource(i), p.setTarget(Q) };
    Gl("Edge", sk, { _icon: "edge_icon", getUIClass: function () {
        return We }, _22Q: function () {
        return Pd }, getSource: function () {
        return this._source }, getTarget: function () {
        return this._target }, getSourceAgent: function () {
        return this._40I }, getTargetAgent: function () {
        return this._41I }, setSource: function (O) {
        var D = this;
        if (D._source !== O) {
          var w = D._source;
          D._source = O, w && w._16I(D), O && O._2I(D), D._7I(), D.fp("source", w, O) } }, setTarget: function (c) {
        var Q = this;
        if (Q._target !== c) {
          var j = Q._target;
          Q._target = c, j && j._18I(Q), c && c._4I(Q), Q._7I(), Q.fp("target", j, c) } }, isLooped: function () {
        var W = this;
        return W._source === W._target && !!W._source && !!W._target }, _7I: function () {
        var x, O = this,
          b = Ze(O);
        O._40I !== b && (x = this._40I, x && x._15I(O), O._40I = b, b && b._1I(O), O.fp("sourceAgent", x, b), of(x, O._41I), of(b, O._41I));
        var i = ve(O);
        O._41I !== i && (x = O._41I, x && x._17I(O), O._41I = i, i && i._3I(O), O.fp("targetAgent", x, i), of(x, O._40I), of(i, O._40I)) }, _22I: function (g) { this._52I = g, this.fp("edgeGroup", !0, !1) }, getEdgeGroup: function () {
        return this._52I }, isEdgeGroupHidden: function () {
        var x = this;
        return x._52I && x._52I.get(0) !== x && !x.getStyle(kq) }, getEdgeGroupSize: function () {
        return this._52I ? this._52I.size() : 1 }, getEdgeGroupIndex: function () {
        return this._52I ? this._52I.indexOf(this) : 0 }, isEdgeGroupAgent: function () {
        var H = this,
          o = H._52I;
        return o && !H.getStyle(kq) && o.size() > 1 && H === o.get(0) }, toggle: function () {
        var E = this._52I,
          d = !this.s(kq);
        E && E.size() > 1 && (E.each(function (C) { C.s(kq, d) }), E.getSiblings().each(function (J) { J !== E && J.each(function (p) { p.fp("edgeGroup", $, J) }) })) }, setStyle: function (y, $) {
        (y === pe || "edge.segments" === y) && ($ = Bm($)), bb.superClass.setStyle.call(this, y, $) }, onStyleChanged: function (U) { bb.superClass.onStyleChanged.apply(this, arguments), Mq[U] && of(this._41I, this._40I) }, getSerializableProperties: function () {
        var c = bb.superClass.getSerializableProperties.call(this);
        return ph(c, { source: 1, target: 1 }), c } });
    var Ec = t.Group = function () { Dj(Ec, this) };
    Gl("Group", Ii, { _image: "group_image", _icon: "group_icon", _57O: !1, getUIClass: function () {
        return os }, onChildAdded: function () { Ec.superClass.onChildAdded.apply(this, arguments), this._81I() }, onChildRemoved: function () { Ec.superClass.onChildRemoved.apply(this, arguments), this._81I() }, _81I: function () {
        var l = this;
        if (!l._54I && !Tm) {
          var X = l.getChildrenRect();
          X && (l._53I = 1, l.p(Ye(l.s("group.position"), X, l.getSize())), delete l._53I) } }, getChildrenRect: function () {
        var B, F = this;
        return F.eachChild(function (s) { B = _h(B, F.getChildRect(s)) }), B }, getChildRect: function (Z) {
        var l;
        return pg(Z) && Z.s(Hn) && (cp(Z) && Z.isExpanded() && Z.eachChild(function (H) { l = _h(l, Z.getChildRect(H)) }), !l && Z.getRect && (l = Z.getRect())), l }, setPosition: function (u, r) {
        var e = this;
        if (!e._54I) {
          var x;
          x = 2 === arguments.length ? { x: u, y: r } : u, Tm || e._53I || (e._54I = 1, uq(e._children, x.x - e._position.x, x.y - e._position.y), delete e._54I), Ec.superClass.setPosition.call(this, x) } }, toggle: function () { this.setExpanded(!this.isExpanded()) }, isExpanded: function () {
        return this._57O }, setExpanded: function (Z) {
        var W = this;
        if (W._57O !== Z) {
          var f = W._57O;
          W._57O = Z, W.fp("expanded", f, W._57O), W._8I() } }, _8I: function () { Ec.superClass._8I.call(this), this.eachChild(function (w) { pg(w) && w._8I() }) }, onStyleChanged: function (X) { Ec.superClass.onStyleChanged.apply(this, arguments), "group.position" === X && this._81I() }, getSerializableProperties: function () {
        var y = Ec.superClass.getSerializableProperties.call(this);
        return y.expanded = 1, y } });
    var xm = t.Block = function () { Dj(xm, this) };
    Gl("Block", Ii, {
      _icon: "block_icon",
      getUIClass: function () {
        return Qr },
      onChildAdded: function () { xm.superClass.onChildAdded.apply(this, arguments), this.updateFromChildren() },
      onChildRemoved: function () {
        xm.superClass.onChildRemoved.apply(this, arguments), this.updateFromChildren()
      },
      updateFromChildren: function () {
        var I = this;
        if (!Tm && !I._updatingToChildren) {
          var r, $, U, y, k, w = [],
            t = I.getRotation();
          if (I.eachChild(function (H) { pg(H) && w.push.apply(w, H.getCorners()) }), w.length) { I._updatingFromChildren = 1;
            var S = s(-t),
              K = P(-t),
              W = 1 / 0,
              b = -1 / 0,
              E = 1 / 0,
              i = -1 / 0;
            for (y = 0, k = w.length; k > y; y++) U = w[y], r = U.x, $ = U.y, U.x = S * r - K * $, U.y = K * r + S * $, W = v(W, U.x), b = M(b, U.x), E = v(E, U.y), i = M(i, U.y);
            var Q = I.getScale();
            I.setSize(N((b - W) / Q.x), N((i - E) / Q.y));
            var J;
            Q.x < 0 && (J = W, W = b, b = J), Q.y < 0 && (J = E, E = i, i = J), S = s(t), K = P(t);
            var e = I.getAnchor();
            r = W + (b - W) * e.x, $ = E + (i - E) * e.y, I.setPosition(S * r - K * $, K * r + S * $), delete I._updatingFromChildren } } },
      setPosition: function (R, r) {
        var U = this;
        if (!U._updatingToChildren) {
          var Z;
          Z = 2 === arguments.length ? { x: R, y: r } : R, Tm || U._updatingFromChildren || (U._updatingToChildren = 1, uq(U._children, Z.x - U._position.x, Z.y - U._position.y), delete U._updatingToChildren), xm.superClass.setPosition.call(this, Z) } },
      setWidth: function (f) {
        return this.setSize(f, this.getHeight()) },
      setHeight: function (x) {
        return this.setSize(this.getWidth(), x) },
      setSize: function (b, F) { 1 > b && (b = 1), 1 > F && (F = 1);
        var o = this;
        if (!o._updatingToChildren) { 2 !== arguments.length && (F = b.height, b = b.width);
          var V = o.getWidth(),
            d = o.getHeight();
          if (b !== V && xm.superClass.setWidth.call(o, b), F !== d && xm.superClass.setHeight.call(o, F), !Tm && !o._updatingFromChildren) { o._updatingToChildren = 1;
            var n = b / V,
              W = F / d;
            o._adjustChildScaleOrSize(n, W, "size"), delete o._updatingToChildren, o.updateFromChildren() } } },
      _adjustChildScaleOrSize: function (c, u, B) {
        var p = this,
          d = p.getPosition(),
          $ = p.getRotation();
        p.getScale(), p.eachChild(function (D) {
          if (pg(D)) {
            var M = D.getPosition(),
              p = D.getRotation(),
              e = D.getWidth(),
              w = D.getHeight(),
              m = D.getScale(),
              S = m.x * e,
              Q = m.y * w,
              i = new jm(p, M.x, M.y, S, Q);
            i.translate(-d.x, -d.y), i.rotate(-$), p = z(i.b * Math.sign(S), i.a * Math.sign(S)), i.scale(c, u);
            var l, W, b, o = s(p);
            if (Math.abs(o) < .001 ? (l = P(p), W = i.b / l, b = -i.c / l) : (W = i.a / o, b = i.d / o), "scale" === B) D.setScale(W / e, b / w);
            else if ("size" === B) {
              var T = W / m.x,
                _ = b / m.y;
              D.setScale(ol(W) * Math.abs(m.x), ol(b) * Math.abs(m.y)), D.setSize(Math.max(.1, Math.abs(T)), Math.max(.1, Math.abs(_))) }
            i.rotate($), i.translate(d.x, d.y), D.setPosition(i.tx, i.ty) } }) },
      _calcChangeFactor: function (v, J, I, k) {
        var F, y, C, R;
        return F = N(v), y = N(I), C = F > y ? F / y : y / F, F = N(J), y = N(k), R = F > y ? F / y : y / F, M(C, R) },
      setAnchor: function () {
        var w = this;
        if (!w._updatingToChildren) {
          var D = w.getAnchor();
          if (xm.superClass.setAnchor.apply(w, arguments), !Tm && !w._updatingFromChildren) { w._updatingToChildren = 1;
            var l = w.getAnchor();
            w.getPosition();
            var $ = w.getSize(),
              q = w.getScale(),
              R = w.getRotation(),
              V = -$.width * q.x * (D.x - l.x),
              d = -$.height * q.y * (D.y - l.y),
              p = P(R),
              X = s(R),
              i = X * V - p * d,
              Q = p * V + X * d;
            w.eachChild(function (w) {
              if (pg(w)) {
                var p = w.getPosition();
                w.setPosition(p.x - i, p.y - Q) } }), delete w._updatingToChildren } } },
      setRotation: function (i) {
        var G = this;
        if (!G._updatingToChildren) {
          var x = G.getRotation();
          if (xm.superClass.setRotation.apply(G, arguments), !Tm && !G._updatingFromChildren) { G._updatingToChildren = 1;
            var q = G.getPosition(),
              g = i - x;
            G.eachChild(function (j) {
              if (pg(j)) {
                var A = j.getMatrix();
                A.translate(-q.x, -q.y), A.rotate(g), A.translate(q.x, q.y);
                var V = Math.sign(j.getScale().x);
                j.setRotation(z(A.b * V, A.a * V)), j.setPosition(A.tx, A.ty) } }), delete G._updatingToChildren } } },
      setScale: function (l, e) {
        var j = this;
        if (!j._updatingToChildren) { null == e && (e = l.y, l = l.x);
          var f = j.getScale();
          if (N(l) < .01 && (l = .01 * (ol(l) || ol(f.x))), N(e) < .01 && (e = .01 * (ol(e) || ol(f.y))), xm.superClass.setScale.call(j, l, e), !Tm && !j._updatingFromChildren) { j._updatingToChildren = 1;
            var X = l / f.x,
              I = e / f.y;
            j._adjustChildScaleOrSize(X, I, "size"), delete j._updatingToChildren, j.updateFromChildren() } } }
    });
    var Hk = t.Grid = function () { Dj(t.Grid, this) };
    Gl("Grid", Ii, { IRotatable: !1, _icon: "grid_icon", _image: $, getUIClass: function () {
        return me }, setRotation: function () {}, getCellRect: function (g, i) {
        var R = this,
          S = R.s("grid.row.count"),
          K = R.s("grid.column.count");
        if (0 >= S || 0 >= K || 0 > g || g >= S || 0 > i || i >= K) return $;
        var l, C, G, c = R.getRect(),
          Q = R.s("grid.row.percents"),
          t = R.s("grid.column.percents");
        if ($c(c, R, "grid.border", -1), Q && Q._as && (Q = Q._as), t && t._as && (t = t._as), Q && Q.length === S) {
          for (G = 0, l = 0; g > l; l++) G += c.height * Q[l];
          c.y += G, c.height = c.height * Q[g] } else c.height = c.height / S, c.y += c.height * g;
        if (t && t.length === K) {
          for (C = 0, l = 0; i > l; l++) C += c.width * t[l];
          c.x += C, c.width = c.width * t[i] } else c.width = c.width / K, c.x += c.width * i;
        return Nh(c, -R.s("grid.gap")), c } });
    var or = t.Text = function () { Dj(or, this), this.setSize(100, 50), this.s("text", "TEXT") };
    Gl("Text", Ii, { _icon: "text_icon", _image: "__text__", getUIClass: function () {
        return $n }, setWidth: function (u) { u || (u = .001), or.superClass.setWidth.call(this, u) }, setHeight: function (T) { T || (T = .001), or.superClass.setHeight.call(this, T) }, toLabel: function () {
        return this._displayName || this._name || this.s("text") } }), rn("__text__", { width: { value: 100, isSafeFunc: !0, func: function (u) {
          return u._width } }, height: { value: 50, isSafeFunc: !0, func: function (S) {
          return S._height } }, comps: [{ type: "text", relative: !0, rect: [0, 0, 1, 1], text: { func: "style@text" }, align: { func: "style@text.align" }, vAlign: { func: "style@text.vAlign" }, color: { func: "style@text.color" }, font: { func: "style@text.font" }, shadow: { func: "style@text.shadow" }, shadowColor: { func: "style@text.shadow.color" }, shadowBlur: { func: "style@text.shadow.blur" }, shadowOffsetX: { func: "style@text.shadow.offset.x" }, shadowOffsetY: { func: "style@text.shadow.offset.y" } }] });
    var Ah = t.Shape = function () { Dj(Ah, this), this._59O = new Ol };
    Ah.__de__ = Ci, Gl("Shape", Ii, { ms_ac: ["thickness", "closePath"], _icon: "shape_icon", _thickness: 10, _closePath: !1, getUIClass: function () {
        return Ir }, _22Q: function () {
        return Bd }, getLength: function (x) {
        return di(Ic(this._59O, this._58O, x, this._closePath)) }, getSegments: function () {
        return this._58O }, toSegments: function () {
        var J = this._58O;
        return J ? new Ol(J._as.slice(0)) : J }, setSegments: function (P) {
        var t = this._58O;
        P = P ? Hq(P) ? new Ol(P.slice(0)) : new Ol(P._as.slice(0)) : new Ol, (t && P && t._as.join(",") !== P._as.join(",") || t !== P) && (this._58O = P, this.fp("segments", t, P)) }, getPoints: function () {
        return this._59O }, toPoints: function () {
        var H = this._59O;
        return new Ol(H._as.slice(0)) }, setPoints: function (v, k) {
        var d = this,
          z = d._59O;
        v = v ? Hq(v) ? new Ol(v.slice(0)) : new Ol(v._as.slice(0)) : new Ol;
        var f, D, y, e, C, A;
        k && (f = d.getPosition(), A = new jm(d.getRotation(), 0, 0, d.getScale().x, d.getScale().y)), (z && v && z._as.join(",") !== v._as.join(",") || z !== v) && (d._59O = v, d.fs(), d.fp("points", z, v)), k && (D = d.getPosition(), y = D.x - f.x, e = D.y - f.y, C = A.tf(y, e), d.setPosition(D.x - y + C.x, D.y - e + C.y)) }, addPoint: function (b, M, J) {
        var h = this.toPoints();
        h.add(b, M), this.setPoints(h, J) }, setPoint: function (h, r, K) {
        var E = this.toPoints();
        E.set(h, r), this.setPoints(E, K) }, removePointAt: function (E) {
        var L = this.toPoints();
        L.removeAt(E), this.setPoints(L) }, setWidth: function (u) {
        var x = this;
        if (1 > u && (u = 1), !x._55I && !Tm && x.getWidth()) { x._55I = 1;
          var b = x._position.x,
            F = u / x.getWidth(),
            j = x.toPoints(),
            $ = new Ol;
          j.each(function (h) { $.add({ x: (h.x - b) * F + b, y: h.y, e: h.e }) }), x.setPoints($);
          var o = x.s("shape.gradient.pack");
          o && jl(o, [F, 0, 0, 1, b * (1 - F), 0]), x.fs(), delete x._55I }
        Ah.superClass.setWidth.call(x, u) }, setHeight: function (R) {
        var p = this;
        if (1 > R && (R = 1), !p._55I && !Tm && p.getHeight()) { p._55I = 1;
          var n = p._position.y,
            t = R / p.getHeight(),
            c = p.toPoints(),
            L = new Ol;
          c.each(function (X) { L.add({ x: X.x, y: (X.y - n) * t + n, e: X.e }) }), p.setPoints(L);
          var m = p.s("shape.gradient.pack");
          m && jl(m, [1, 0, 0, t, 0, n * (1 - t)]), p.fs(), delete p._55I }
        Ah.superClass.setHeight.call(p, R) }, setAnchor: function (G, S, W) {
        var t = this;
        if (t._55I = !0, !Tm) {
          var x, k, J; "number" == typeof G ? J = { x: G, y: S } : (J = G.length ? { x: G[0], y: G[1] } : G, W = S);
          var $ = t.getAnchor(),
            A = t.getSize();
          x = A.width * ($.x - J.x), k = A.height * ($.y - J.y), W || t.shiftPoints(x, k);
          var i = t.getPosition() }
        if (Ah.superClass.setAnchor.apply(t, arguments), !Tm) {
          var c = t.getPosition();
          W && t.shiftPoints(c.x - i.x + x, c.y - i.y + k) }
        delete t._55I }, shiftPoints: function (n, j) {
        var R = this,
          M = R.toPoints(),
          X = new Ol;
        M.each(function (J) { X.add({ x: J.x + n, y: J.y + j, e: J.e }) }), R.setPoints(X), R.fs() }, setPosition: function (l, G) {
        var h, t = this;
        if (!t._28Q) {
          if (t._28Q = 1, !t._55I && !Tm) { h = 2 === arguments.length ? { x: l, y: G } : l;
            var Q = h.x - t._position.x,
              T = h.y - t._position.y;
            if (0 === Q && 0 === T) return delete t._28Q, void 0;
            t._55I = 1, t.shiftPoints(Q, T);
            var k = t.s("shape.gradient.pack");
            k && jl(k, [1, 0, 0, 1, Q, T]), delete t._55I }
          Ah.superClass.setPosition.apply(t, arguments), delete t._28Q } }, fs: function () { this.fireShapeChange() }, _70I: function () {
        var c = this;
        if (2 !== c._59O.size()) return !1;
        var Y = c._58O;
        return Y ? 2 === Y.size() && 1 === Y.get(0) && 2 === Y.get(1) ? !0 : !1 : !0 }, fireShapeChange: function () {
        var i = this;
        if (!i._55I && !Tm) {
          var w = ji(i._59O);
          w && (i._55I = 1, i.setRect(w), delete i._55I) }
        i.fp(Vn, !1, !0) }, getSerializableProperties: function () {
        var x = Ah.superClass.getSerializableProperties.call(this);
        return x.segments = 1, x.points = 1, x.thickness = 1, x.closePath = 1, x } });
    var Br = t.Polyline = function () { Dj(Br, this), this.s({ "shape.background": null, "shape.border.width": 2 }) };
    Gl("Polyline", Ah, { IRotatable: !1, _icon: "polyline_icon", _22Q: function () {
        return eb }, getUIClass: function () {
        return fg }, setRotationX: function () {}, setRotation: function () {}, setRotationZ: function () {}, setClosePath: function () {}, setTall: function (d) {
        var w = this;
        if (!w._24Q && !Tm && w.getTall()) { w._24Q = 1;
          var T = w._54O,
            K = d / w.getTall();
          w._59O.each(function (a) { a.e = a.e == $ ? T : (a.e - T) * K + T }), w.fs(), delete w._24Q }
        Br.superClass.setTall.call(w, d) }, setElevation: function (U) {
        var n = this;
        if (!n._24Q && !Tm) { n._24Q = 1;
          var c = U - n._54O;
          n._59O.each(function (Z) { Z.e == $ ? Z.e = U : Z.e += c }), n.fs(), delete n._24Q }
        Br.superClass.setElevation.apply(n, arguments) }, fireShapeChange: function () {
        var p = this,
          B = p._59O;
        if (!p._24Q && !Tm) {
          var F = B.size();
          if (F) {
            var w = 1,
              N = B.get(0),
              o = p._54O;
            N.e == $ && (N.e = o);
            for (var R = N.e, u = 0; F > w; w++) { N = B.get(w), N.e == $ && (N.e = o);
              var D = v(R, N.e),
                n = M(R + u, N.e);
              R = D, u = n - D }
            p._24Q = 1, p.setTall(u), p.setElevation(R + u / 2), delete p._24Q } }
        Br.superClass.fireShapeChange.apply(p, arguments) } });
    var xf = t.SubGraph = function () { Dj(xf, this) };
    Gl("SubGraph", Ii, { ISubGraph: 1, _image: "subGraph_image", _icon: "subGraph_icon", _8I: function () { xf.superClass._8I.call(this), this.eachChild(function (X) { pg(X) && X._8I() }) } });
    var $q = t.RefGraph = function () { Dj($q, this) };
    Gl("RefGraph", Ii, { _icon: "refGraph_icon", getRef: function () {
        return this._ref }, setRef: function (w) { this._ref !== w && (this._ref = w, this.updateRef()) }, _21I: function () { $q.superClass._21I.apply(this, arguments), this.updateRef() }, updateRef: function () {
        var j = this;
        if (j.clearChildrenFromDataModel(), j._ref && j._dataModel) { j._xhrLoadHandler && (j._xhrLoadHandler.cancel = !0);
          var P = j._xhrLoadHandler = function (z) { j._dataModel && j._dataModel.deserialize(z, j) };
          r.xhrLoad(j._ref, function (T) { P.cancel || P(T) }) } } }), t.EdgeGroup = function (p, b) { this._70O = p, this._siblings = b;
      for (var F, g, B = 0, h = p.size(), j = U[kq]; h > B; B++)
        if (F = p.get(B).getStyle(kq, !1), F != $) { j = F;
          break }
      j == $ && (j = !0);
      var L = r.edgeGroupAgentFunc;
      for (L && (g = L(p), g && g !== p.get(0) && (p.remove(g), p.add(g, 0))), B = 0; h > B; B++) p.get(B).s(kq, j) }, Gl("EdgeGroup", y, { getEdges: function () {
        return this._70O }, size: function () {
        return this._70O.size() }, get: function ($) {
        return this._70O.get($) }, indexOf: function (o) {
        return this._70O.indexOf(o) }, each: function (y, Q) { this._70O.each(y, Q) }, getSiblings: function () {
        return this._siblings }, eachSiblingEdge: function (e, Z) { this._siblings.each(function (q) { q._70O.each(e, Z) }) } });
    var Ql = t.JSONSerializer = function (_, i) { this.dm = this._dataModel = _, this._hierarchical = i == $ ? _.isHierarchicalRendering() : i };
    Gl("JSONSerializer", y, { ms_ac: ["hierarchical"], serialize: function (E) {
        return r.stringify(this.toJSON(), E) }, toJSON: function () {
        var v = this,
          i = v.dm,
          X = i.getRoots(),
          c = v.json = { v: r.getVersion(), p: {}, a: {}, d: [] },
          $ = i.getSerializableAttrs();
        i.getInit() && (c.init = i.getInit()), i.getName() && (c.p.name = i.getName()), i.getBackground() && (c.p.background = i.getBackground()), c.p.autoAdjustIndex = i.isAutoAdjustIndex(), c.p.hierarchicalRendering = i.isHierarchicalRendering();
        for (var D in $) {
          var I = i.a(D);
          I !== B && v[Cl](D, I, c.a) }
        return ul(c.a) && delete c.a, v._hierarchical ? X.each(v.serializeData, this) : i.each(function (x) { v.serializeData(x) }), c }, isSerializable: function () {
        return !0 }, getProperties: function (s) {
        return s.getSerializableProperties() }, getStyles: function (L) {
        return L.getSerializableStyles() }, getAttrs: function (Q) {
        return Q.getSerializableAttrs() }, serializeData: function (h) {
        var E = this;
        if (E.isSerializable(h)) {
          var D, t, M, q, Z = Go(h.getClassName()) || h.getClass(),
            L = new Z,
            H = { c: h.getClassName(), i: h.getId(), p: {}, s: {}, a: {} };
          E.json.d.push(H), D = E.getProperties(h);
          for (t in D) /^_/.test(t) ? (M = h[t], M !== L[t] && E[Cl](t.substr(1), M, H.p)) : (q = Ui(t), h[q] && (M = h[q](), M !== L[q]() && E[Cl](t, M, H.p)));
          D = E.getStyles(h);
          for (t in D) M = h.s(t), M !== L.s(t) && E[Cl](t, M, H.s);
          D = E.getAttrs(h);
          for (t in D) M = h.a(t), M !== L.a(t) && E[Cl](t, M, H.a);
          ul(H.p) && delete H.p, ul(H.s) && delete H.s, ul(H.a) && delete H.a }
        E._hierarchical && h.getChildren().each(E.serializeData, E) }, serializeValue: function (L, I, v) { Pk(I) ? I = { __a: I._as } : I instanceof sk && (I = { __i: I.getId() }), v[L] = I }, deserialize: function (j, k, U) { Tm = !0;
        var H = this;
        j = H.json = An(j) ? r.parse(j) : j, H._82I = {};
        var D = H.dm,
          A = new Ol,
          P = new Ol,
          p = 0,
          c = j.d.length;
        for (Nk(j.init) && j.init(D), D.setInit(j.init); c > p; p++) {
          var u = j.d[p],
            y = Go(u.c),
            n = new y,
            v = u.i;
          U && v != $ && (n._id = v), H._82I[v] = n, A.add(n), P.add(u) }
        for (p = 0; c > p; p++) H.deserializeData(A.get(p), P.get(p));
        A.each(function (X) { k && !X.getParent() && X.setParent(k), D.add(X) });
        for (var g in j.a) D.a(g, H[Yq](j.a[g]));
        for (var t in j.p) D[Gk(t)](j.p[t]);
        return Tm = !1, A }, deserializeData: function (A, I) {
        for (var s in I.p) A[Gk(s)](this[Yq](I.p[s]));
        for (s in I.s) A.s(s, this[Yq](I.s[s]));
        for (s in I.a) A.a(s, this[Yq](I.a[s])) }, deserializeValue: function (c) {
        if (Cq(c)) {
          var I = c.__i;
          if (I != $) return this._82I[I];
          if (I = c.__a, Hq(I)) return new Ol(I) }
        return c } }), ph(he, { serialize: function (k, M) {
        return new Ql(this, M).serialize(k) }, toJSON: function (u) {
        return new Ql(this, u).toJSON() }, deserialize: function (z, R, P) {
        return new Ql(this).deserialize(z, R, P) } }), de.GraphView = function (u) {
      var N = this;
      N._24I = {}, N._34I = new Ol, N._25I = {}, N._56I = {}, N._view = ef(1, N), N._canvas = Jr(N._view), N.dm(u ? u : new he), N.setEditable(!1), N.setScrollBarVisible(r.graphViewScrollBarVisible) }, $o("GraphView", y, { ms_v: 1, ms_gv: 1, ms_bnb: 1, ms_tip: 1, ms_dm: 1, ms_lp: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, _52o: 1, _51o: 1, ms_ac: ["layers", kn, Im, _d, Jq, "resettable", "editInteractor", xl, "pannable", "rectSelectable", "autoScrollZone", rd, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"], _resettable: r.graphViewResettable, _pannable: r.graphViewPannable, _rectSelectable: r.graphViewRectSelectable, _autoScrollZone: r.graphViewAutoScrollZone, _rectSelectBackground: r.graphViewRectSelectBackground, _rectSelectBorderColor: r.graphViewRectSelectBorderColor, _editPointSize: r.graphViewEditPointSize, _editPointBorderColor: r.graphViewEditPointBorderColor, _editPointBackground: r.graphViewEditPointBackground, _scrollBarColor: dm, _scrollBarSize: Fk, _autoHideScrollBar: ke, _autoMakeVisible: hh, setEditable: function (y) {
        var W = this,
          V = de.XEditInteractor;
        y ? (W._uieditable = !0, W.setInteractors([new io(W), new mk(W), V ? new V(W) : new bf(W), new vo(W), new Vm(W), new zq(W, { editable: !V })])) : (W._uieditable = !1, W.setInteractors([new io(W), new mk(W), new vo(W), new Vm(W), new zq(W, { editable: !1 })])) }, getCanvas: function () {
        return this._canvas }, _33I: function (B) {
        var N = B.getUIClass();
        return N ? new N(this, B) : $ }, getDataUI: function (n) {
        var h = this,
          M = h._25I[n._id];
        return M === B && (M = h._33I(n), h._25I[n._id] = M), M }, getNodeRect: function (b) {
        return r.getNodeRect(this, b) }, getEdgeInfo: function (v) {
        var $ = this.getDataUI(v);
        return $ ? ($._79o(), $._78o) : null }, invalidateAll: function (F) {
        var $ = this;
        if (F) {
          for (var D in $._25I) {
            var J = $._25I[D];
            J && J.dispose() }
          $._25I = {}, $._56I = {}, $._24I = {}, $._34I.clear(), $.redraw() } else $.dm().each(function (a) { $.invalidateData(a) }) }, invalidateSelection: function () {
        var m = this;
        m.sm().each(function (S) { m.invalidateData(S) }) }, invalidateData: function (X) {
        var h = this;
        h._24I[X._id] = X, h._21Q(X), h.iv() }, _21Q: function (g) {
        var A = this,
          e = A._24I;
        if (lf(g) && Ab[g.s(Cg)]) {
          var m = g.getSourceAgent();
          m && m.getAgentEdges().each(function (b) { e[b._id] = b }), m = g.getTargetAgent(), m && m.getAgentEdges().each(function (K) { e[K._id] = K }), A.iv() } }, redraw: function (g) {
        var t = this;
        t._32I || (g ? t._34I.add(g) : (t._32I = 1, t._34I.clear()), t.iv()) }, each: function (o, B) {
        var W, h, S, N = 0,
          C = this._layers,
          Z = this._dataModel,
          d = Z._datas._as,
          y = d.length;
        if (C) {
          for (var T = C.length; T > N; N++)
            if (S = C[N], Z.isHierarchicalRendering()) {
              if (this._dataModel.eachByHierarchical(o, null, B) === !1) return } else
              for (var I = 0; y > I; I++)
                if (W = d[I], W._layer === S && (h = B ? o.call(B, W) : o(W), h === !1)) return } else if (Z.isHierarchicalRendering()) this._dataModel.eachByHierarchical(o, null, B);
        else
          for (; y > N; N++)
            if (W = d[N], h = B ? o.call(B, W) : o(W), h === !1) return }, reverseEach: function (t, g) {
        var h, X, J, x, y = this._layers,
          i = this._dataModel,
          f = i._datas._as,
          o = f.length;
        if (y) {
          for (h = y.length - 1; h >= 0; h--)
            if (x = y[h], i.isHierarchicalRendering()) {
              if (i.reverseEachByHierarchical(t, null, g) === !1) return } else
              for (var a = o - 1; a >= 0; a--)
                if (X = f[a], X._layer === x && (J = g ? t.call(g, X) : t(X), J === !1)) return } else if (i.isHierarchicalRendering()) i.reverseEachByHierarchical(t, null, g);
        else
          for (h = o - 1; h >= 0; h--)
            if (X = f[h], J = g ? t.call(g, X) : t(X), J === !1) return }, getViewRect: function () {
        return this._29I }, getContentRect: function () {
        var H = this,
          w = H._84I;
        return w || (H.each(function ($) { H.isVisible($) && (w = _h(w, H.getDataUIBounds($))) }), H._84I = w ? w : jg), H._84I }, getScrollRect: function () {
        return _h(this.getContentRect(), this._29I) }, makeCenter: function (D, B, d) {
        var R = this;
        if (!R.getWidth() || !R.getHeight()) return d || _f(R.centerData, R, [D, B, !0], 200), void 0;
        R.makeVisible(D), R.validate();
        var K = R.getDataUIBounds(D);
        if (K) {
          var H = R.getWidth(),
            x = R.getHeight(),
            p = K.x + K.width / 2,
            I = K.y + K.height / 2,
            j = -p * R._zoom + H / 2,
            M = -I * R._zoom + x / 2;
          R.setTranslate(j, M, B) } }, fitData: function (x, N, T, F, s) {
        var V = this;
        if (!V.getWidth() || !V.getHeight()) return s || _f(V.fitData, V, [x, N, T, F, !0], 200), void 0;
        V.makeVisible(x), V.validate();
        var Q = V.getDataUIBounds(x);
        Q && (Q = Oj(Q), Nh(Q, T == $ ? 20 : T), V.fitRect(Q, N, F)) }, fitContent: function (C, R, i, _) {
        var r = this;
        if (!r.getWidth() || !r.getHeight()) return _ || _f(r.fitContent, r, [C, R, i, !0], 200), void 0;
        r.validate();
        var D = Oj(r.getContentRect());
        Nh(D, R == $ ? 20 : R), r.fitRect(D, C, i) }, fitRect: function (w, G, D) {
        var E = this,
          q = E.getWidth(),
          l = E.getHeight(),
          f = w.x + w.width / 2,
          r = w.y + w.height / 2,
          j = v(q / w.width, l / w.height),
          d = E._zoom,
          T = -f * d + q / 2,
          b = -r * d + l / 2;
        0 === j || isNaN(j) || (D && (j = v(1, j)), G ? E.setTranslate(T, b, { finishFunc: function () { E.setZoom(j, G) } }) : (E.setTranslate(T, b), E.setZoom(j))) }, toCanvas: function (Y, P) { P = P || this._zoom, this.validateImpl();
        var f = this,
          R = f.getContentRect();
        R.width || (R.width = 10), R.height || (R.height = 10);
        var l = Jr(),
          V = R.x * P,
          j = R.y * P,
          L = R.width * P,
          I = R.height * P;
        vr(l, L, I, 1);
        var E = dc(l);
        return Y = Y || this._dataModel.getBackground(), Y && No(E, 0, 0, L, I, Y), wg(E, -V, -j), E.scale(P, P), f._42(E), E.restore(), l }, toDataURL: function (S, M, l) {
        return this.toCanvas(S, l).toDataURL(M || "image/png", 1) }, getClipBounds: function () {
        return this._74O }, _42: function (z, K) {
        var $, X, n = this;
        n._93db(z, K), n.each(function (A) { n._56I[A._id] && ($ = n.getDataUI(A), $ && (X = $._79o(), t.HtmlNode && A instanceof t.HtmlNode ? $._42(z) : (!K || Fn(K, X)) && $._42(z))) }), n._92db(z, K) }, validateImpl: function () {
        var L, t, Z, x, T, N = this,
          s = N.tx(),
          g = N.ty(),
          D = N._zoom,
          e = N._canvas,
          R = this.getWidth(),
          v = this.getHeight(),
          p = N._29I,
          i = { x: -s / D, y: -g / D, width: R / D, height: v / D },
          u = {},
          B = N._34I,
          c = N._24I,
          m = N._32I,
          Y = N._23I;
        (R !== e.clientWidth || v !== e.clientHeight) && (vr(e, R, v), m = 1), m || Qe(i, p) || (m = 1), N._29I = i, N.each(function (k) { t = k._id;
          var I = u[t] = N.isVisible(k);
          I !== N._56I[t] && (c[t] = k, Z = N.getDataUI(c[t]), Z && Z._84o(I), N._84o(k, I)) }, N);
        for (t in c) Z = N.getDataUI(c[t]), Z && (!m && N._56I[t] && (T = Z._79o(), T && B.add(T)), Z.invalidate()), N._83I = 1;
        if (N._56I = u, !m)
          for (t in c) u[t] && (Z = N.getDataUI(c[t]), Z && (T = Z._79o(), T && B.add(T)));
        if (m ? x = i : (B.each(function (h) { Fn(i, h) && (x = _h(x, h)) }), x && (Nh(x, M(1, 1 / D)), x.x = G(x.x * D) / D, x.y = G(x.y * D) / D, x.width = q(x.width * D) / D, x.height = q(x.height * D) / D, x = af(i, x))), N._74O = x, x && (L = dc(e), Ue(L, s, g, D), L.beginPath(), L.rect(x.x, x.y, x.width, x.height), L.clip(), L.clearRect(x.x, x.y, x.width, x.height), N._42(L, x), L.restore(), delete N._74O), N._24I = {}, B.clear(), delete N._32I, Y && R > 0 && v > 0) {
          var Z = N.getDataUI(Y);
          if (Z) {
            var T = Z._79o(),
              J = N._29I,
              f = J.x,
              $ = J.y,
              O = J.width,
              r = J.height,
              D = N._zoom;
            T && !Fn(T, J) && (T.x + T.width < f && N.tx(-T.x * D), T.x > f + O && N.tx(-(T.x + T.width - O) * D), T.y + T.height < $ && N.ty(-T.y * D), T.y > $ + r && N.ty(-(T.y + T.height - r) * D)) }
          delete N._23I }
        N._83I && (delete N._83I, delete N._84I), N._98O() }, isScrollBarVisible: function () {
        return !!this._79O }, setScrollBarVisible: function (z) {
        var r = this;
        z !== r.isScrollBarVisible() && (z ? (Af(r._view, r._79O = tp()), Af(r._79O, r._27I = tp()), Af(r._79O, r._28I = tp())) : (Sc(r._79O), delete r._79O, delete r._27I, delete r._28I), r.fp("scrollBarVisible", !z, z)) }, showScrollBar: function () {
        var g = this;
        g._79O && (g._85I || (T(function () { g._86I() }, Th), g.iv()), g._85I = new Date) }, _86I: function () {
        var N = this;
        if (N._85I) {
          var D = new Date,
            O = D.getTime();
          O - N._85I.getTime() >= Th ? (delete N._85I, N.iv()) : T(function () { N._86I() }, Th) } }, _98O: function () {
        var d = this,
          P = this._27I,
          j = this._28I;
        if (d._79O) {
          if (d._autoHideScrollBar && !d._85I) return P.style.visibility = dq, j.style.visibility = dq, void 0;
          var L = d.getScrollBarColor(),
            Q = d._zoom,
            Y = d.getScrollBarSize(),
            X = d.getViewRect(),
            x = d.getScrollRect(),
            W = X.height * Q,
            I = x.height * Q,
            c = X.width * Q - Y - 2,
            o = W * ((X.y - x.y) * Q / I),
            n = W * (W / I),
            E = P.style;
          I - .5 > W ? (Yc > n && (o = o + n / 2 - Yc / 2, 0 > o && (o = 0), o + Yc > W && (o = W - Yc), n = Yc), Am(P, c, o, Y, n), E.visibility = yc, E.background = L, E.borderRadius = Y / 2 + Zq) : E.visibility = dq;
          var v = X.width * Q,
            f = x.width * Q,
            o = X.height * Q - Y - 2,
            c = v * ((X.x - x.x) * Q / f),
            r = v * (v / f),
            E = j.style;
          f - .5 > v ? (Yc > r && (c = c + r / 2 - Yc / 2, 0 > c && (c = 0), c + Yc > v && (c = v - Yc), r = Yc), Am(j, c, o, r, Y), E.visibility = yc, E.background = L, E.borderRadius = Y / 2 + Zq) : E.visibility = dq } }, setDataModel: function (m) {
        var W = this,
          i = W._dataModel,
          N = W._selectionModel;
        i !== m && (i && (i.ump(W.handleDataModelPropertyChange, W), i.umm(W.handleDataModelChange, W), i.umd(W.handleDataPropertyChange, W), i.removeIndexChangeListener(W._75O, W), i.removeHierarchyChangeListener(W.handleHierarchyChange, W), N || i.sm().ums(W.handleSelectionChange, W)), W._dataModel = m, m.mp(W.handleDataModelPropertyChange, W), m.mm(W.handleDataModelChange, W), m.md(W.handleDataPropertyChange, W), m.addIndexChangeListener(W._75O, W), m.addHierarchyChangeListener(W.handleHierarchyChange, W), N ? N._21I(m) : m.sm().ms(W.handleSelectionChange, W), W.invalidateAll(!0), W.fp(dg, i, m), W._canvas.style.background = m.getBackground() || "") }, handleDataModelPropertyChange: function (n) {
        if ("background" === n.property) {
          var w = this._canvas.style.background,
            m = n.newValue || "";
          this._canvas.style.background = m, this.fp("canvasBackground", w, m) } else "hierarchicalRendering" === n.property && this.redraw() }, handleDataPropertyChange: function (a) { this.invalidateData(a.data) }, onPropertyChanged: function (y) {
        var E = this,
          N = y.property;
        if (E.redraw(), "zoom" === N) {
          var x = E.sm().getSelection();
          x.size() && x.each(function (D) { D.invalidate() }) }
        Mh[N] ? E.showScrollBar() : N === xl && E.onCurrentSubGraphChanged(y) }, onCurrentSubGraphChanged: function () { this.reset() }, handleDataModelChange: function (D) {
        var n = this,
          J = D.kind,
          G = D.data;
        if (n._83I = 1, "add" === J) n.invalidateData(G), lf(G) && G.getEdgeGroup() && G.getEdgeGroup().eachSiblingEdge(n.invalidateData, n);
        else if (J === Pr) { n._21Q(G);
          var Q = G._id,
            o = n._25I[Q];
          if (o) {
            if (n._56I[Q]) {
              var R = o._79o();
              R && n.redraw(R) }
            o.dispose(), delete n._25I[Q], delete n._24I[Q], delete n._56I[Q] }
          G === n._currentSubGraph && n.setCurrentSubGraph($) } else J === Do && (n.invalidateAll(!0), n.setCurrentSubGraph($)) }, _75O: function (o) { this.invalidateData(o.data) }, handleHierarchyChange: function (X) { this.invalidateData(X.data) }, adjustIndex: function (N) {
        var f = this;
        if (f.isVisible(N)) {
          for (var U = N; U._parent && f.isVisible(U._parent);) U = U._parent;
          U && U !== N && f._dataModel.adjustIndex(U), f._dataModel.adjustIndex(N) } }, getSelectWidth: function ($) {
        return $.s("select.width") }, isSelectable: function (Q) {
        return !(Q.getParent() instanceof t.Block) && Q.s("2d.selectable") && this.sm().isSelectable(Q) }, isMovable: function (l) {
        var v = this;
        return lf(l) && l.getStyle(Cg) !== Md ? !1 : l.s("2d.movable") ? v._movableFunc ? v._movableFunc(l) : !0 : !1 }, isEditable: function (U) {
        var r = this;
        if (t._uiSerializing) return r._uieditable;
        if (!r._editInteractor || !r.isSelected(U)) return !1;
        if (cp(U)) {
          var u = r.getDataUI(U);
          if (!u || u._88I) return !1 }
        return lf(U) && U.getStyle(Cg) !== Md ? !1 : U.s("2d.editable") ? r._editableFunc ? r._editableFunc(U) : !0 : !1 }, handleDelete: function () { this._editInteractor && (this._editInteractor.handleDelete ? this._editInteractor.handleDelete() : this.removeSelection()) }, isPointEditable: function (d) {
        return pg(d) && 0 !== d.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(d) : !0 }, isRectEditable: function (p) {
        return this._rectEditableFunc ? this._rectEditableFunc(p) : !0 }, isRotationEditable: function (Z) {
        return Z.setRotation && Z.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(Z) : !0 : !1 }, getRotationPoint: function (W) {
        var H = W.getAnchor(),
          C = W.getScale(),
          r = this._zoom,
          A = lh(W.getRotation(), 0, -W.getHeight() * C.y * H.y - (C.y < 0 ? -1 : 1) * (c ? 32 : 16) / r),
          o = W.p();
        return A.x += o.x, A.y += o.y, A }, getLogicalPoint: function (g) {
        var A = this;
        return Ur(g, A._canvas, A.tx(), A.ty(), A._zoom, A._zoom) }, getSelectedDataAt: function (f) {
        var d = this;
        return this.getDataAt(f, function (E) {
          return d.isSelected(E) }) }, getDataAt: function (x, i, B) { x.target && (x = this.lp(x));
        var U, Q = this._zoom;
        return this.reverseEach(function (n) {
          return (i ? i(n) : this.isSelectable(n)) && this.rectIntersects(n, Vl(x.x, x.y, B, Q)) ? (U = n, !1) : void 0 }, this), U }, getIconInfoAt: function (E, b) {
        var l = this;
        if (E.target && (E = l.lp(E)), b || (b = l.getDataAt(E)), b) {
          var u = l.getDataUI(b);
          if (u && u._38o) {
            var d, p = u._38o,
              f = new Ol;
            for (d in p.icons) f.add(d);
            for (var n = f.size() - 1; n >= 0; n--) { d = f.get(n);
              for (var C = p.rects[d], D = C.rotation, q = C.length - 1; q >= 0; q--) {
                var w = C[q],
                  Z = w.width,
                  j = w.height,
                  W = { x: E.x - w.x - Z / 2, y: E.y - w.y - j / 2 };
                D != $ && (W = lh(-D, W.x, W.y));
                var w = { x: -Z / 2, y: -j / 2, width: Z, height: j };
                if (Sm(w, W)) return { key: d, index: q, name: p.icons[d].names[q], rect: C[q], point: E, rotation: D, relativeRect: w, relativePoint: W, data: b } } } } }
        return $ }, getDatasInRect: function (P, j, E) { E === B && (E = 1);
        var h = this,
          o = new Ol;
        return h.reverseEach(function (Z) { E && !h.isSelectable(Z) || (j ? h.rectIntersects(Z, P) : h.rectContains(Z, P)) && o.add(Z) }), o }, moveSelection: function (n, S) {
        var t, c = this,
          u = c.dm();
        u && (t = u.getHistoryManager()), t && t.beginInteraction(), uq(c.sm().toSelection(c.isMovable, c), n, S), t && t.endInteraction() }, getDataUIBounds: function (f) {
        var K = this.getDataUI(f);
        return K ? K._79o() : $ }, drawData: function (E, m) {
        var W = this.getDataUI(m);
        W && W._42(E), m instanceof t.Block && m.eachChild(function (P) { this.drawData(E, P) }, this) }, getBoundsForGroup: function (T) {
        return T.s(Hn) ? this.getDataUIBounds(T) : $ }, rectIntersects: function (b, F) { this.validate();
        var j = $;
        if (this._56I[b._id]) {
          var w = this._25I[b._id];
          if (w) {
            var e = w._79o();
            if (Ig(F, e)) j = !0;
            else if ((F = af(F, e)) && (w.rectIntersects && (j = w.rectIntersects(F)), j == $)) {
              if (!b.s("pixelPerfect")) return !0;
              var u = F.x,
                Z = F.y,
                X = F.width,
                v = F.height,
                Y = this._zoom,
                y = r.hitMaxArea,
                l = X * v * Y * Y;
              if (l > y) {
                var C = Math.sqrt(y / l);
                Y *= C }
              X *= Y, v *= Y, u *= Y, Z *= Y;
              var t = Sr(X, v);
              wg(t, -u, -Z), t.scale(Y, Y), this._drawForChecking = !0, this.drawData(t, b), this._drawForChecking = !1;
              try {
                for (var M = 0, p = t.getImageData(0, 0, X, v).data; M < p.length; M += 4)
                  if (0 !== p[M + 3]) { j = !0;
                    break }
                t.restore() } catch (m) { dh = $, j = !0 } } } }
        return j ? !0 : !1 }, rectContains: function (B, g) {
        if (this._56I[B._id]) {
          var h = this._25I[B._id];
          if (h) return Ig(g, h._79o()) }
        return !1 }, reset: function () { this.setZoom(1), this.setTranslate(0, 0) }, handleKeyDown: function ($) {
        if (!r.isInput($.target)) {
          var R = this,
            P = R._focusData,
            w = P && R._25I[P._id],
            a = 0,
            Z = R._dataModel._datas;
          if (!(P && P._enabled && P._editable && w && w.onKeyDown && w.onKeyDown($) === !0))
            if (9 === $.keyCode && (P && (a = Z.indexOf(P), dl($) ? -1 === --a && (a = 0) : ++a === Z.size() && (a = 0)), R._focusData = P = Z.get(a), R.sm().setSelection(P)), em($) ? R.selectAll() : Vq($) && R.isResettable() && R.reset(), R.sm().isEmpty()) {
              if (R._editing) return;
              var K = R.tx(),
                f = R.ty(),
                k = !1,
                _ = dl() ? 100 : 10;
              Be($) && (K -= _, k = !0), vf($) && (f -= _, k = !0), ih($) && (K += _, k = !0), Pj($) && (f += _, k = !0), k && R.setTranslate(K, f) } else { kh($) && R.handleDelete($);
              var C = dl() ? 10 : 1;
              Be($) && (R.moveSelection(-C, 0), R.fi({ kind: "moveLeft" })), vf($) && (R.moveSelection(0, -C), R.fi({ kind: "moveUp" })), ih($) && (R.moveSelection(C, 0), R.fi({ kind: "moveRight" })), Pj($) && (R.moveSelection(0, C), R.fi({ kind: "moveDown" })) } } }, handleScroll: function (n, S) { be(n);
        var O = this.lp(n);
        S > 0 ? this.scrollZoomIn(O) : 0 > S && this.scrollZoomOut(O) }, handlePinch: function (u, D, I) { this._68I || (D > I ? this.pinchZoomIn(u) : this.pinchZoomOut(u)) }, checkDoubleClickOnNote: function (x, y) {
        var H = this,
          Q = H.lp(x),
          F = H.getDataUI(y),
          b = F.note2Info;
        return b && y.s("note2.toggleable") && Sm(b.clickRect, Q) ? (y.s(jn, !y.s(jn)), H.fi({ kind: "toggleNote2", event: x, data: y }), !0) : (b = F.noteInfo, b && y.s("note.toggleable") && Sm(b.clickRect, Q) ? (y.s(jf, !y.s(jf)), H.fi({ kind: "toggleNote", event: x, data: y }), !0) : !1) }, _84o: function () {}, isNoteVisible: function () {
        return this._zoom > .15 }, isLabelVisible: function () {
        return this._zoom > .15 }, isSelectVisible: function () {
        return this._zoom > .15 }, isEditVisible: function () {
        return this._zoom > .15 }, autoScroll: function (F, s) {
        var k = this,
          J = k.getAutoScrollZone(),
          E = J / k.getZoom(),
          t = J / 4,
          L = k._29I,
          h = k.lp(F),
          a = { x: k.tx(), y: k.ty() };
        return h && J > 0 && L && (h.x - L.x < E ? k.translate(t, 0) : L.x + L.width - h.x < E && k.translate(-t, 0), h.y - L.y < E ? k.translate(0, t) : L.y + L.height - h.y < E && k.translate(0, -t)), a.x = k.tx() - a.x, a.y = k.ty() - a.y, s && (s.x += a.x, s.y += a.y), a }, getMoveMode: function (X, G) {
        var m = G.s("2d.move.mode");
        return m ? m : jd["88"] ? "x" : jd["89"] ? "y" : "xy" }, getSerializableProperties: function () {
        return { layers: 1, scrollBarColor: 1, scrollBarSize: 1, autoMakeVisible: 1, autoHideScrollBar: 1, editable: 1, resettable: 1, pannable: 1, rectSelectable: 1, autoScrollZone: 1, visibleFunc: 1, movableFunc: 1, editableFunc: 1, pointEditableFunc: 1, rectEditableFunc: 1, rotationEditableFunc: 1, rectSelectBackground: 1, rectSelectBorderColor: 1, editPointSize: 1, editPointBorderColor: 1, editPointBackground: 1, hoverDelay: 1, dataModel: 1, selectionModel: 1, currentSubGraph: 1, zoom: 1, translateX: 1, translateY: 1 } }, serializeProperty: function (_, U, n) {
        var W = this;
        return "currentSubGraph" === U ? { __i: _.getId() } : n.serializeProperty(_, U, W) }, deserializeProperty: function (F, Z, H) {
        var R = this;
        if ("currentSubGraph" === Z) {
          var v = R.dm(),
            b = v.__idMap;
          return b[F.__i] }
        return H.deserializeProperty(F, Z, R) } });
    var Ap = function (P, J) {
      var b = this;
      b.gv = P, b.s = function (P) {
        return J.getStyle(P) }, b._data = J, b._87I = new Ol };
    Xk(Ap, y, {
      _6I: $,
      ms_icons: 1,
      _84o: function () {},
      dispose: function () {},
      isShadowed: function () {
        return this.s("shadow") || this.gv.isSelected(this._data) && "shadow" === this.s("select.type") },
      getSelectWidth: function () {
        var D = this,
          P = D.gv.isSelected(D._data);
        return !P || D.isShadowed() ? 0 : D.gv.getSelectWidth(D._data) },
      getBodyColor: function (y) {
        var w = this._data,
          D = this.gv.getBodyColor(w);
        return D ? D : y ? w.getStyle(y) : $ },
      _2Q: function (x) {
        return this.s(x) },
      _1Q: function (q, S, z, C) {
        var v = this.s,
          B = v(S + ".dash.color");
        q.strokeStyle = B, q.lineWidth = z, q.stroke(), v(S + ".dash.3d") && hn(q, B, v(S + ".dash.3d.color"), z, this.gv._zoom, v(S + ".dash.3d.accuracy")), rm(q, C) },
      invalidate: function () { this._6I = $ },
      _79o: function () {
        var i = this;
        if (!i._6I) { i.labelInfo = i.label2Info = i.noteInfo = i.note2Info = i._38o = $, i._87I.clear(), i._3O();
          var B = i._data,
            t = i.gv;
          i._55O = t.isEditable(B) ? { _42O: t.isRectEditable(B), _43O: t.isPointEditable(B), _56O: t.isRotationEditable(B) } : $, i._6I = i._81o() }
        return i._6I },
      _3O: function () {},
      getPosition: function () {
        return jg },
      _68o: function (D, Q) { D && this._87I.add(lo(D, Q)) },
      _81o: function () {
        var a = this,
          _ = a.s;
        a._24O(lq, "getLabel"), a._24O(Dr, "getLabel2"), a._26O(Cd, "getNote"), a._26O(Jd, "getNote2"), a._15O(), a._55O && a._48O();
        var x;
        if (a._87I.each(function (s) { x = _h(x, s) }), x && a.isShadowed()) {
          var $ = Oj(x);
          $.x += _("shadow.offset.x"), $.y += _("shadow.offset.y"), Nh($, _("shadow.blur")), x = _h(x, $) }
        return a._87I.clear(), x },
      _42: function (i) {
        var E = this,
          F = E._data,
          Q = E.gv,
          f = E.s,
          J = f("opacity"),
          c = this.isShadowed();
        if (c) {
          var M = i.shadowOffsetX,
            b = i.shadowOffsetY,
            N = i.shadowBlur,
            p = i.shadowColor,
            q = Q.getZoom();
          i.shadowOffsetX = f("shadow.offset.x") * q, i.shadowOffsetY = f("shadow.offset.y") * q, i.shadowBlur = f("shadow.blur") * q, i.shadowColor = f("select.color") }
        if (J != $) {
          var G = i.globalAlpha;
          i.globalAlpha = J }
        E._80o(i), Q.isLabelVisible(F) && ((!Q._drawForChecking || f("label.selectable")) && pq(i, E.labelInfo), (!Q._drawForChecking || f("label2.selectable")) && pq(i, E.label2Info)), Q.isNoteVisible(F) && (pc(i, E.noteInfo), pc(i, E.note2Info)), E._99O(i), J != $ && (i.globalAlpha = G), c && (i.shadowOffsetX = M, i.shadowOffsetY = b, i.shadowBlur = N, i.shadowColor = p) },
      _80o: function () {},
      _47O: function () {},
      _24O: function (q, j) {
        var L = this,
          H = L._data,
          d = L.gv,
          s = L.s,
          a = d[j](H);
        if (a != $) {
          var I = s(q + ".scale"),
            o = s(q + ".max"),
            h = s(q + ".position"),
            z = L[q + "Info"] = { label: a, scale: I, color: d[j + "Color"](H), font: s(q + ".font"), opacity: s(q + ".opacity"), align: s(q + ".align"), rotation: L.getRotation(s(q + ".rotation"), !1, h), background: d[j + "Background"](H) },
            r = Ym(z, a);
          o > 0 && o < r.width && (z.labelWidth = r.width, r.width = o), 1 !== I && (r.width *= I, r.height *= I);
          var t = L.getPosition(h, s(q + ".offset.x"), s(q + ".offset.y"), r, s(q + ".position.fixed"));
          if (r.x = t.x - r.width / 2, r.y = t.y - r.height / 2, L._68o(z.rect = r, z.rotation), 1 !== I) {
            var v = r.width / I,
              C = r.height / I;
            z.rect = { x: t.x - v / 2, y: t.y - C / 2, width: v, height: C } }
        }
      },
      _26O: function (f, L) {
        var a = this,
          n = a.gv,
          d = a._data,
          l = a.s,
          i = n[L](d);
        if (i != $) {
          var m, y, H = l(f + ".scale"),
            J = a[f + "Info"] = { note: i, scale: H, data: d, view: n, expanded: l(f + ".expanded"), font: l(f + ".font"), color: l(f + ".color"), opacity: l(f + ".opacity"), align: l(f + ".align"), icon: l(f + ".icon"), backgroundImage: l(f + ".backgroundImage"), borderWidth: l(f + ".border.width"), borderColor: l(f + ".border.color"), background: n[L + "Background"](d) },
            F = a.getPosition(l(f + ".position"), l(f + ".offset.x"), l(f + ".offset.y")),
            O = F.x,
            p = F.y;
          if (J.expanded) {
            var Y, e = l(f + ".max"),
              x = l(f + ".backgroundImage");
            x ? (x = bd(x), Y = { width: Io(x, d), height: mg(x, d) }) : Y = Ym(J, i), Y.width += 6, Y.height += 2, e > 0 && e < Y.width && (J.labelWidth = Y.width, Y.width = e), m = Y.width, y = Y.height + 8, J.clickRect = { x: O - m * H / 2, y: p - y * H, width: m * H, height: y * H * Y.height / y } } else {
            var o = l(f + ".icon");
            o ? (o = bd(o), m = Io(o, d), y = mg(o, d)) : (m = 12, y = 18), J.clickRect = { x: O - m * H / 2, y: p - y * H, width: m * H, height: y * H } }
          J.rect = { x: O - m / 2, y: p - y * H / 2 - y / 2, width: m, height: y };
          var E = q(J.borderWidth / 2) * H;
          a._68o({ x: O - m * H / 2 - E, y: p - y * H - E, width: m * H + 2 * E, height: y * H + 2 * E }) } },
      _48O: function () {},
      _99O: function (d) {
        var o = this,
          h = o._38o;
        if (h) {
          var w = o.gv,
            Q = o._data,
            m = h.icons;
          for (var n in m) {
            var A = m[n],
              c = h.rects[n];
            if (c) {
              var M = yo(A.opacity, Q, w),
                V = yo(A.names, Q, w),
                O = V ? V.length : 0,
                L = c.rotation;
              if (M != $) {
                var R = d.globalAlpha;
                d.globalAlpha *= M }
              for (var i = 0; O > i; i++) {
                var H = V[i],
                  l = bd(H),
                  T = c[i];
                if (L) {
                  var K = T.x + T.width / 2,
                    Z = T.y + T.height / 2;
                  d.save(), wg(d, K, Z), gb(d, L), wg(d, -K, -Z) }
                cg(d, l, yo(A.stretch, Q, w), T.x, T.y, T.width, T.height, o._data, o.gv), L && d.restore() }
              M != $ && (d.globalAlpha = R) } } } }
    });
    var Db = function (h, k) { Dj(Db, this, [h, k]) };
    Xk(Db, Ap, { _checkEmptyRect: !0, _40O: function (Z, $) {
        var I = this,
          d = I.s,
          k = Z.rect;
        if ((Z.borderColor = I.gv.getBorderColor(I._data)) && (Z.borderType = d("border.type"), Z.borderWidth = d("border.width"), Z.borderPadding = d("border.padding"), $ = M($, Z.borderPadding + Z.borderWidth / 2)), Z.selectWidth = I.getSelectWidth()) {
          var Q = I.gv._zoom;
          Z.selectType = d("select.type"), Z._97o = d("select.color"), Z.selectPadding = d("select.padding"), $ = M($, (Z.selectPadding + Z.selectWidth / 2) / Q) }
        if ($ > 0) {
          var J = I._data.getScale();
          $ *= M(1, M(N(J.x), N(J.y))), k = Oj(k), Nh(k, $) }
        I._68o(k) }, _39O: function (s, O) {
        var M, P = this,
          B = O.rect;
        if (O.borderWidth > 0 && (M = O.borderPadding, s.strokeStyle = O.borderColor, s.lineWidth = O.borderWidth, Jj(s, O.borderType, { x: B.x - M, y: B.y - M, width: B.width + 2 * M, height: B.height + 2 * M }), s.stroke()), O.selectWidth > 0) {
          var i = P.gv._zoom;
          if (M = O.selectPadding / i, s.strokeStyle = O._97o, s.lineWidth = O.selectWidth / i, O.rotation != $) { s.save(), s.translate(O.position.x, O.position.y), s.rotate(O.rotation);
            var D = P._data,
              N = D.getWidth(),
              q = D.getHeight(),
              m = O.scale,
              k = O.anchor;
            B = { x: m.x * -N * k.x, y: m.y * -q * k.y, width: m.x * N, height: m.y * q } }
          Jj(s, O.selectType, { x: B.x - M, y: B.y - M, width: B.width + 2 * M, height: B.height + 2 * M }), O.rotation != $ && s.restore(), s.stroke() } }, _3O: function () {
        var y = this,
          N = y.s,
          u = y._data,
          e = u.getStyle(Vn),
          t = y.getBodyColor(),
          A = y._83o = e ? { shape: e, _53o: y.getBodyColor("shape.background"), _27Q: bd(N("shape.repeat.image"), t), shapeGradientPack: N("shape.gradient.pack"), _54o: N("shape.border.width"), _55o: N("shape.border.color"), _56o: N("shape.border.3d"), _57o: N("shape.border.3d.color"), _58o: N("shape.border.3d.accuracy"), shapeGradient: N("shape.gradient"), _59o: N("shape.gradient.color"), _60o: N("shape.border.pattern"), _61o: N("shape.border.cap"), _62o: N("shape.border.join") } : { img: bd(u.getImage(), t), bodyColor: t, stretch: N("image.stretch") };
        if (f && !p);
        else { A.rect = u.getRect(), A.position = u.p(), A.scale = u.getScale(), A.anchor = u.getAnchor(), A.rotation = u.getRotation(), e === ns && (A._63o = N("shape.depth"));
          var s = 0;
          e ? (s = Zb($, A._54o / 2, A._62o), y.s("shape.dash") && (s = M(s, (y.s("shape.dash.width") || A._54o) / 2))) : A.img && A.img.boundExtend && (s = yo(A.img.boundExtend, u, y.gv)), y._40O(A, s) } }, getPosition: function (w, A, o, Y) {
        var Z = Ye(w, this._83o.rect, Y);
        return Z.x += A, Z.y += o, Z }, _80o: function (W) {
        var Y = this,
          K = Y.s,
          $ = Y.gv,
          V = Y._data,
          R = Y._83o,
          d = R.rect,
          g = R.position,
          S = R.rotation,
          J = R.anchor,
          F = R.scale,
          n = R.shape;
        if (!Y._checkEmptyRect || d.width > 0 && d.height > 0) {
          var j = V.getSize();
          if (j.x = -j.width * J.x, j.y = -j.height * J.y, W.save(), wg(W, g.x, g.y), gb(W, S), ii(W, F.x, F.y), Y.freeDraw) Y.freeDraw(W, j, R);
          else if (n) {
            var h, c, H, t, x = R._60o,
              C = ac(W, x),
              y = R._53o,
              i = R._27Q,
              q = R._54o,
              I = R._55o,
              b = R.shapeGradientPack,
              B = W.lineJoin,
              p = W.lineCap;
            if ("roundRect" === n ? h = K("shape.corner.radius") : "polygon" === n ? h = K("shape.polygon.side") : "arc" === n && (h = K("shape.arc.from"), c = K("shape.arc.to"), H = K("shape.arc.close"), t = K("shape.arc.oval")), W.lineJoin = R._62o, W.lineCap = R._61o, y || i || b ? (Jj(W, n, j, h, c, H, t), b ? Wd(W, b) : i ? Ao(W, i) : ks(W, y, R.shapeGradient, R._59o, j), W.fill(), b && W.restore(), W !== C && Jj(C, n, j, h, c, H, t)) : Jj(C, n, j, h, c, H, t), q > 0) {
              var z = K("shape.border.width.absolute");
              z && (W.save(), W.setTransform(1, 0, 0, 1, 0, 0)), W.lineWidth = q, W.strokeStyle = I, W.stroke(), z && W.restore(), R._56o && hn(W, I, R._57o, q, $._zoom, R._58o) }
            if (rm(W, x), K("shape.dash")) {
              var G = K("shape.dash.width") || q;
              if (G > 0) { x = K("shape.dash.pattern");
                var C = ac(W, x, Y._2Q("shape.dash.offset"));
                C !== W && Jj(C, n, j, h, c, H, t), Y._1Q(W, "shape", G, x) } }
            tq(W, y, R._63o, j), W.lineJoin = B, W.lineCap = p } else cg(W, R.img, R.stretch, j.x, j.y, j.width, j.height, V, $, R.bodyColor);
          W.restore() }
        Y._39O(W, R) }, _48O: function () {}, _47O: function () {} });
    var We = function (z, f) { Dj(We, this, [z, f]) },
      hm = function (d, f, O, s) {
        var z = Rk(d, f);
        return O = s ? v(O, z) : Nq(O, z), z ? O /= z : O = 0, { x: d.x + (f.x - d.x) * O, y: d.y + (f.y - d.y) * O } };
    Xk(We, Ap, { _3O: function () {
        var A, T = this,
          D = T._data,
          Z = T.gv,
          W = T.s,
          Y = W(Cg),
          Q = D.isLooped(),
          j = W("edge.width"),
          c = W("edge.center"),
          u = W("edge.offset"),
          f = Z.getBorderColor(D),
          R = f ? W("border.width") : 0,
          C = T.getSelectWidth(),
          s = D._40I,
          t = D._41I,
          P = T._78o = s && t ? { looped: Q, type: Y, width: j, center: c, color: T.getBodyColor("edge.color"), borderColor: f, borderWidth: R, _97o: C ? W("select.color") : $, selectWidth: C, pattern: W("edge.pattern"), cap: W("edge.cap"), join: W("edge.join"), is3d: W("edge.3d"), _67o: W("edge.3d.color"), _66o: W("edge.3d.accuracy") } : $;
        if (P) {
          var p = r.getEdgeType(Y);
          if (p) {
            var m = p(D, Mn(T, Z, D, Q, Y), Z, T._19Q);
            m.points && m.points.size() > 1 && (P._4O = m, A = ji(P._4O.points)) } else {
            var X = od(Z, s, W("edge.source.position"), W("edge.source.offset.x"), W("edge.source.offset.y"), W("edge.source.anchor.x"), W("edge.source.anchor.y")),
              q = od(Z, t, W("edge.target.position"), W("edge.target.offset.x"), W("edge.target.offset.y"), W("edge.target.anchor.x"), W("edge.target.anchor.y"));
            if (Y === Md) {
              var I = P.points = W(pe) || vb,
                e = I.size();
              if (P.segments = W("edge.segments"), !c)
                if (u) {
                  var J = hm(X, e ? I.get(0) : q, u, e),
                    g = hm(q, e ? I.get(e - 1) : X, u, e);
                  X = J, q = g } else {
                  var o = Jo(Z, s),
                    h = Jo(Z, t),
                    K = br(X, e ? I.get(0) : q, o);
                  K && (X = { x: K[0], y: K[1] }), K = br(e ? I.get(e - 1) : X, q, h), K && (q = { x: K[0], y: K[1] }) }
              A = _h(ji(P.points), ji(X, q)) } else {
              var H = Mn(T, Z, D, Q, Y);
              if (T._19Q || (H = -H), Q) X = Oj(X), X.x = Z.getNodeRect(s).x, P.radius = H, A = { x: X.x - H, y: X.y - H, width: 2 * H, height: 2 * H };
              else {
                var N = Rk(X, q),
                  y = Nq(u, N),
                  J = { x: y, y: H },
                  g = { x: N - y, y: H },
                  d = z(q.y - X.y, q.x - X.x),
                  U = P.mat = new jm(d);
                if (P.orienAngle = d, P.angle = q.x < X.x ? d + i : d, P.rect = { x: J.x, y: J.y, width: g.x - J.x, height: 0 }, P.origin = X, J = U.tf(J), J.x += X.x, J.y += X.y, g = U.tf(g), g.x += X.x, g.y += X.y, c) {
                  var l = { x: N, y: 0 };
                  l = U.tf(l), l.x += X.x, l.y += X.y, A = ji([X, J, g, l]), P.c1 = X, P.c2 = l } else A = ji(J, g);
                X = J, q = g } }
            P.sourcePoint = X, P.targetPoint = q }
          var b = 0;
          W("edge.dash") && (b = W("edge.dash.width") || j);
          var v = "square" === P.cap ? .71 : .5;
          Zb(A, M(b * v, j * v + R + C), P.join), T._68o(A) } }, getRotation: function (N, n, s) { N = N || 0;
        var k = this._78o;
        if (k) {
          var H, Q = k.angle,
            i = k.points,
            Y = k._4O;
          if (Q != $) return n ? k.orienAngle + N : Q + N;
          if (Y) {
            var v = Y.points;
            return H = v.size(), Nl[s] ? H && 0 === H % 2 ? jj(v.get(H / 2 - 1), v.get(H / 2), n, N) : N : zs[s] ? jj(v.get(0), v.get(1), n, N) : jj(v.get(H - 2), v.get(H - 1), n, N) }
          if (i) return H = i.size(), Nl[s] ? H && 0 === H % 2 ? jj(i.get(H / 2 - 1), i.get(H / 2), n, N) : N : zs[s] ? jj(k.sourcePoint, H ? i.get(0) : k.targetPoint, n, N) : jj(H ? i.get(H - 1) : k.sourcePoint, k.targetPoint, n, N) }
        return N }, getPosition: function (E, O, n, Z, u) {
        var x = this._78o;
        if (x) {
          var H, Q = x.type,
            k = x.points,
            w = x._4O,
            J = x.sourcePoint,
            U = x.targetPoint;
          if (!Q) return x.looped ? { x: J.x - x.radius + O, y: J.y + n } : (u && J && U && (J.x > U.x || J.x === U.x && J.y > U.y) && (E = kr[E], n = -n), H = Ye(E, x.rect, Z), H.x += O, H.y += n, H = x.mat.tf(H), H.x += x.origin.x, H.y += x.origin.y, H);
          if (k) {
            var H, t = k.size();
            if (Nl[E]) {
              if (t) {
                var d = t % 2;
                if (0 === d) return Kd(k.get(t / 2 - 1), k.get(t / 2), E, O, n, Z, u);
                H = k.get((t - d) / 2) } else H = { x: (J.x + U.x) / 2, y: (J.y + U.y) / 2 };
              return H = Ye(E, { x: H.x, y: H.y, width: 0, height: 0 }, Z), H.x += O, H.y += n, H }
            return zs[E] ? Kd(J, t ? k.get(0) : U, E, O, n, Z, u) : Kd(t ? k.get(t - 1) : J, U, E, O, n, Z, u) }
          if (w) {
            var g = w.points,
              t = g.size();
            if (Nl[E]) {
              var d = t % 2;
              return 0 === d ? Kd(g.get(t / 2 - 1), g.get(t / 2), E, O, n, Z, u) : (H = g.get((t - d) / 2), H = Ye(E, { x: H.x, y: H.y, width: 0, height: 0 }, Z), H.x += O, H.y += n, H) }
            return zs[E] ? Kd(g.get(0), g.get(1), E, O, n, Z, u) : Kd(g.get(t - 2), g.get(t - 1), E, O, n, Z, u) } }
        return jg }, _42: function (u) { this._78o && We.superClass._42.call(this, u) }, drawPath: function (d, e) { d.beginPath();
        var t = e.type,
          D = e.points,
          $ = e.segments,
          J = e._4O;
        if (!t || D) {
          var E = e.sourcePoint,
            K = E.x,
            p = E.y,
            j = e.targetPoint,
            A = j.x,
            W = j.y;
          if (t)
            if ($) {
              var U = new Ol({ x: K, y: p });
              U.addAll(D), U.add({ x: A, y: W }), Zh(d, U, $) } else d.moveTo(K, p), D.each(function ($) { d.lineTo($.x, $.y) }), d.lineTo(A, W);
          else e.looped ? d.arc(K, p, e.radius, 0, Q, !0) : e.center ? (d.moveTo(e.c1.x, e.c1.y), d.lineTo(K, p), d.lineTo(A, W), d.lineTo(e.c2.x, e.c2.y)) : (d.moveTo(K, p), d.lineTo(A, W)) } else J && Zh(d, J.points, J.segments) }, _80o: function (g) {
        var e = this,
          d = e.s,
          O = e._78o,
          C = O.width,
          m = O.selectWidth,
          A = O.borderWidth,
          P = O.color,
          G = g.lineJoin,
          Q = g.lineCap,
          u = O.pattern;
        g.lineJoin = O.join, g.lineCap = O.cap, e.drawPath(ac(g, u), O);
        var S = d("edge.width.absolute");
        if (S && (g.save(), g.setTransform(1, 0, 0, 1, 0, 0)), m && (g.strokeStyle = O._97o, g.lineWidth = C + 2 * (A + m), g.stroke()), A && (g.strokeStyle = O.borderColor, g.lineWidth = C + 2 * A, g.stroke()), g.strokeStyle = P, g.lineWidth = C, g.stroke(), O.is3d && hn(g, P, O._67o, C, e.gv._zoom, O._66o), S && g.restore(), rm(g, u), d("edge.dash")) { u = d("edge.dash.pattern");
          var V = ac(g, u, e._2Q("edge.dash.offset"));
          V !== g && e.drawPath(V, O), e._1Q(g, "edge", d("edge.dash.width") || C, u) }
        g.lineJoin = G, g.lineCap = Q }, _48O: function () {}, _47O: function () {}, _71o: function (U, t) {
        var Z = this,
          v = Z._data;
        if (Z._19Q = !0, !v.getEdgeGroup()) return U ? v.s("edge.gap") : 0;
        var I, r = 0,
          G = 0,
          h = 0;
        if (v.getEdgeGroup().getSiblings().each(function (K) { K.each(function (c) {
              if (Z.gv.isVisible(c) && c.s(Cg) == t) {
                var X = c.s("edge.gap");
                I ? (G += h / 2 + X / 2, h = X) : (I = c, h = X), c === v && (r = G) } }) }), U) return G - r + h;
        var p = r - G / 2;
        return I && v._40I !== I._40I && (Z._19Q = !1), p } });
    var os = function (R, Y) { Dj(os, this, [R, Y]) };
    Xk(os, Db, { _3O: function () {
        var P, V, t = this,
          m = t.s,
          I = t._data,
          F = t.gv;
        if (t._88I = $, I.isExpanded() && I.eachChild(function (D) {
            var d = F.getBoundsForGroup(D);
            d && (V || (V = []), V.push(d), P = _h(P, d)) }), P) {
          var d = F.getLabel(I),
            c = m("group.type");
          P = Al(c, V, P), $c(P, I, "group.padding", 1);
          var L = t._88I = { type: c, rect: P, _64o: P };
          if (!c && d != $) {
            var g, n = t.labelInfo = { label: d, color: m("group.title.color"), font: m("group.title.font"), align: m("group.title.align") },
              O = Ym(n, d),
              Q = O.width,
              o = O.height,
              z = m("group.title.align");
            Q > P.width && (P.width = Q), n.rect = { y: P.y - o, width: O.width, height: o }, g = z === ci ? P.x : z === Fq ? P.x + P.width - Q : P.x + P.width / 2 - Q / 2, n.rect.x = g, L.titleRect = { x: P.x, y: P.y - o, width: P.width, height: o + 1 }, L.rect = { x: P.x, y: P.y - o, width: P.width, height: P.height + o } }
          t._40O(L, m("group.border.width") / 2) } else os.superClass._3O.call(t) }, getPosition: function (D, l, C, f) {
        var X = this._88I;
        if (X) {
          var o = Ye(D, X.rect, f);
          return o.x += l, o.y += C, o }
        return os.superClass.getPosition.apply(this, arguments) }, _24O: function (g, o) {
        var B = this._88I;
        (!B || B.type || "label2" === g) && os.superClass._24O.call(this, g, o) }, _80o: function (w) {
        var K = this,
          F = K._88I;
        if (F) {
          var Z = K._data,
            j = K.s,
            i = K.gv,
            g = F.type,
            C = F.rect,
            E = F._64o,
            V = F.titleRect,
            R = K.getBodyColor(),
            f = bd(j("group.image"), R),
            u = j("group.image.stretch"),
            O = K.getBodyColor("group.background"),
            p = bd(j("group.repeat.image"), R),
            n = j("group.gradient.pack"),
            D = j("group.gradient"),
            Q = j("group.gradient.color"),
            t = j("group.depth");
          if (g) {
            var r = j("group.border.pattern"),
              N = j("group.border.width"),
              Y = w.lineJoin,
              v = w.lineCap;
            if (w.lineJoin = j("group.border.join"), w.lineCap = j("group.border.cap"), f) {
              if (w.save(), Jj(w, g, C), w.clip(), cg(w, f, u, C.x, C.y, C.width, C.height, Z, i, R), w.restore(), N > 0) {
                var B = ac(w, r);
                Jj(B, g, C), w.lineWidth = N, w.strokeStyle = j("group.border.color"), w.stroke(), rm(w, r) } } else {
              var B = ac(w, r);
              O || p || n ? (Jj(w, g, C), n ? Wd(w, n) : p ? Ao(w, p) : ks(w, O, D, Q, C), w.fill(), n && w.restore(), w !== B && Jj(B, g, C)) : Jj(B, g, C), N > 0 && (w.lineWidth = N, w.strokeStyle = j("group.border.color"), w.stroke()), rm(w, r), g === ns && tq(w, O, t, C) }
            w.lineJoin = Y, w.lineCap = v } else if (f ? cg(w, f, u, E.x, E.y, E.width, E.height, Z, i, K.getBodyColor()) : (O || p) && (p ? Ao(w, p) : ks(w, O, D, Q, E), Jj(w, ns, E), w.fill(), tq(w, O, t, E)), V) {
            var l = j("group.title.background");
            No(w, V.x, V.y, V.width, V.height, l), tq(w, l, t, V) }
          K._39O(w, F) } else os.superClass._80o.call(K, w) } });
    var Qr = function (o, N) { Dj(Qr, this, [o, N]) };
    Xk(Qr, Db, { _80o: function () {} });
    var Ir = function (W, O) { Dj(Ir, this, [W, O]) };
    Xk(Ir, Db, { _3O: function () {
        var A = this,
          I = A._data,
          U = A.s,
          o = A.gv,
          x = I.getPoints(),
          u = o.getBorderColor(I),
          S = u ? U("border.width") : 0,
          V = A.getSelectWidth(),
          F = U("shape.border.width"),
          _ = I.getRect(),
          i = o.getBodyColor(I),
          B = A._99o = x.isEmpty() ? $ : { rect: _, rotation: I.getRotation(), fillRule: U("shape.fill.rule") || "nonzero", scale: I.getScale(), position: I.p(), points: x, segments: I.getSegments(), bodyColor: i, borderColor: u, borderWidth: S, _94o: U("shape.border.3d"), _95o: U("shape.border.3d.color"), _96o: U("shape.border.3d.accuracy"), _97o: V ? U("select.color") : $, selectWidth: V, _53o: U("shape.background"), _27Q: bd(U("shape.repeat.image"), i), shapeGradientPack: U("shape.gradient.pack"), _54o: F, _55o: U("shape.border.color"), shapeGradient: U("shape.gradient"), _59o: U("shape.gradient.color"), _60o: U("shape.border.pattern"), _61o: U("shape.border.cap"), _62o: U("shape.border.join") };
        if (B) {
          var W = F * ("square" === B._61o ? .71 : .5) + S + V / A.gv._zoom;
          if (W) {
            var Z = I.getScale();
            W *= M(1, M(N(Z.x), N(Z.y))), _ = Oj(_), Zb(_, W, B._62o) }
          A._68o(_) } }, getPosition: function (E, r, q, V) {
        var D = this._99o;
        if (D) {
          var T = Ye(E, D.rect, V);
          return T.x += r, T.y += q, T }
        return jg }, _42: function (j) { this._99o && Ir.superClass._42.call(this, j) }, _80o: function (C) {
        var f, z = this,
          e = z.s,
          H = z._99o,
          k = H.position,
          G = H.scale,
          y = H.rotation,
          R = H.bodyColor,
          E = H.borderWidth,
          N = H.selectWidth,
          l = H._53o,
          u = H._27Q,
          Y = H.shapeGradientPack,
          M = H._54o,
          w = H.points,
          m = H.segments,
          p = z._data.isClosePath(),
          r = H.fillRule;
        C.save(), wg(C, k.x, k.y), gb(C, y), ii(C, G.x, G.y), wg(C, -k.x, -k.y);
        var B = H._60o,
          x = ac(C, B),
          i = C.lineJoin,
          s = C.lineCap;
        C.lineJoin = H._62o, C.lineCap = H._61o, l || u || Y ? (Zh(C, w, m, p), Y ? Wd(C, Y) : u ? Ao(C, u) : (f = R ? R : l, ks(C, f, H.shapeGradient, H._59o, H.rect)), C.fill(r), Y && C.restore(), x !== C && Zh(x, w, m, p)) : Zh(x, w, m, p);
        var g = e("shape.border.width.absolute");
        if (g && (C.save(), C.setTransform(1, 0, 0, 1, 0, 0)), N && (C.strokeStyle = H._97o, C.lineWidth = M + 2 * (E + N), C.stroke()), E && (C.strokeStyle = H.borderColor, C.lineWidth = M + 2 * E, C.stroke()), M && (f = H._55o, !l && R && (f = R), C.strokeStyle = f, C.lineWidth = M, C.stroke(), H._94o && hn(C, f, H._95o, M, z.gv._zoom, H._96o)), g && C.restore(), rm(C, B), e("shape.dash")) {
          var Q = e("shape.dash.width") || M;
          if (Q > 0) { B = e("shape.dash.pattern");
            var x = ac(C, B, z._2Q("shape.dash.offset"));
            x !== C && Zh(x, w, m, p), z._1Q(C, "shape", Q, B) } }
        C.lineJoin = i, C.lineCap = s, C.restore() }, _48O: function () {}, _47O: function () {} });
    var fg = function (z, B) { Dj(fg, this, [z, B]) };
    Xk(fg, Ir, { getRotation: function (i, z, l) { i = i || 0;
        var m = this._data.getPoints(),
          Z = m.size();
        return Z > 1 ? Nl[l] ? Z && 0 === Z % 2 ? jj(m.get(Z / 2 - 1), m.get(Z / 2), z, i) : i : zs[l] ? jj(m.get(0), m.get(1), z, i) : jj(m.get(Z - 2), m.get(Z - 1), z, i) : i }, getPosition: function (g, i, L, N, x) {
        var H = this._data.getPoints(),
          d = H.size();
        if (d > 1) {
          if (Nl[g]) {
            var O = d % 2;
            if (0 === O) return Kd(H.get(d / 2 - 1), H.get(d / 2), g, i, L, N, x);
            var b = H.get((d - O) / 2),
              B = { x: b.x, y: b.y, width: 0, height: 0 };
            return b = Ye(g, B, N), b.x += i, b.y += L, b }
          return zs[g] ? Kd(H.get(0), H.get(1), g, i, L, N, x) : Kd(H.get(d - 2), H.get(d - 1), g, i, L, N, x) }
        return jg } });
    var me = function (C, K) { Dj(me, this, [C, K]) };
    Xk(me, Db, { _3O: function () {
        var y = this;
        me.superClass._3O.call(y);
        var N = y.s,
          z = y._83o;
        y._82o = z.img || z.shape ? $ : { background: y.getBodyColor("grid.background"), depth: N("grid.depth"), rect: z.rect, _88o: N("grid.cell.depth"), cellBorderColor: N("grid.cell.border.color"), _89o: N("grid.row.count"), _90o: N("grid.column.count"), block: N("grid.block"), _91o: N("grid.block.color"), _92o: N("grid.block.padding"), _93o: N("grid.block.width") } }, _80o: function (e) {
        var X = this,
          b = X._82o;
        if (!b) return me.superClass._80o.call(X, e), void 0;
        var H, t, R = X._data,
          N = b.background,
          $ = b.rect,
          Q = b.block,
          U = b._91o,
          K = b._92o,
          Y = b._93o,
          u = b._88o,
          F = b.cellBorderColor,
          _ = b._89o,
          q = b._90o;
        if (N)
          if (No(e, $.x, $.y, $.width, $.height, N), tq(e, N, b.depth, $), u)
            for (H = 0; _ > H; H++)
              for (t = 0; q > t; t++) $ = R.getCellRect(H, t), $ && tq(e, N, u, $);
          else if (F) {
          for (e.beginPath(), H = 0; _ > H; H++)
            for (t = 0; q > t; t++) $ = R.getCellRect(H, t), $ && e.rect($.x, $.y, $.width, $.height);
          e.strokeStyle = F, e.lineWidth = 1, e.stroke() }
        if ("h" === Q)
          for (H = 0; _ > H; H++) $ = _h(R.getCellRect(H, 0), R.getCellRect(H, q - 1)), Nh($, K), Bn(e, U, $.x, $.y, $.width, $.height, Y);
        else if ("v" === Q)
          for (t = 0; q > t; t++) $ = _h(R.getCellRect(0, t), R.getCellRect(_ - 1, t)), Nh($, K), Bn(e, U, $.x, $.y, $.width, $.height, Y);
        X._39O(e, X._83o) } });
    var $n = function (w, i) { Dj($n, this, [w, i]) };
    Xk($n, Db, { _checkEmptyRect: !1, _81o: function () {
        var x = this._data,
          Z = $n.superClass._81o.call(this),
          B = x.s("text");
        if (B != $) {
          var L, H, p = x.s("text.font"),
            s = x.s("text.align"),
            C = x.s("text.vAlign"),
            R = x.getRotation(),
            f = Sj(p, B),
            W = f.width,
            k = f.height; "left" === s ? L = -x.getWidth() / 2 : "center" === s ? L = -f.width / 2 : "right" === s && (L = x.getWidth() / 2 - f.width), "top" === C ? H = -x.getHeight() / 2 : "middle" === C ? H = -f.height / 2 : "bottom" === C && (H = x.getHeight() / 2 - f.height);
          var j;
          if (R) {
            var g = new jm(R);
            j = ji([g.tf(L, H), g.tf(L + W, H), g.tf(L + W, H + k), g.tf(L, H + k)]) } else j = { x: L, y: H, width: W, height: k };
          j.x += x.getPosition().x, j.y += x.getPosition().y, Z = _h(Z, j) }
        return Z } });
    var In = de.Interactor = function (d) { this.gv = this._graphView = d };
    $o("Interactor", y, { ms_listener: 1, getView: function () {
        return this.gv.getView() }, setUp: function () { this.addListeners() }, tearDown: function () { this.removeListeners(), this.clear() }, clear: function () {}, fi: function (r) { this.gv.fi(r) }, setCursor: function (b) { c || (this.getView().style.cursor = b) }, startDragging: function (s) {
        var z = this;
        z._lastClientPoint = en(s), z._lastLogicalPoint = z.gv.lp(s), Ud(z, s) }, clearDragging: function () {
        var i = this;
        i._lastClientPoint = i._lastLogicalPoint = i._logicalPoint = $ }, autoScroll: function (f) {
        return this.gv.autoScroll(f, this._lastClientPoint) } });
    var Vm = de.DefaultInteractor = function (J) { Dj(Vm, this, [J]) };
    $o("DefaultInteractor", In, { handle_mousedown: function (T) { be(T);
        var e = this,
          q = e.gv,
          a = q.getDataAt(T);!q.setFocus(T) || q._editing || q._scrolling || (ep(T) ? q.handleDoubleClick(T, a) : q.handleClick(T, a), !Vq() && a || !q.isPannable() || !hp(T) || ll(T) || (e._tx = q.tx(), e._ty = q.ty(), e.startDragging(T))) }, handleWindowMouseUp: function (o) {
        var W = this,
          z = W.gv;
        z._panning && (delete z._panning, z.onPanEnded(), W.fi({ kind: "endPan", event: o })), delete W._tx, delete W._ty, W.clearDragging() }, handle_mousemove: function (J) {
        var M = this,
          s = M.gv;
        M._hoverTimer && (C(M._hoverTimer), delete M._hoverTimer), M._hoverTimer = T(function () { M.fi({ kind: "hover", event: J }), C(M._hoverTimer), delete M._hoverTimer }, s.getHoverDelay() || 800) }, handle_touchmove: function (F) { this.handle_mousemove(F) }, handleWindowMouseMove: function (K) {
        var P = this,
          r = P.gv,
          G = P._lastClientPoint;
        P.fi({ kind: r._panning ? "betweenPan" : "beginPan", event: K }), r._panning = 1, r.setTranslate(P._tx + K.clientX - G.x, P._ty + K.clientY - G.y) }, handle_mousewheel: function (w) { this.gv.handleScroll(w, w.wheelDelta) }, handle_DOMMouseScroll: function (b) { 2 === b.axis && this.gv.handleScroll(b, -b.detail) }, handle_keydown: function (q) { this.gv.handleKeyDown(q) } });
    var mk = de.SelectInteractor = function (g) { Dj(mk, this, [g]) };
    $o("SelectInteractor", In, { _42: function () {
        var s = this,
          T = s.gv,
          w = T.getZoom(),
          J = s.mark,
          u = s.div;
        u || (u = s.div = tp(), Af(s.getView(), u));
        var c = {};
        c.x = J.x * w + T.tx(), c.y = J.y * w + T.ty(), c.width = J.width * w, c.height = J.height * w, Am(u, c), this.intersects() ? (u.style.border = "", u.style.background = T.getRectSelectBackground()) : (u.style.background = "", u.style.border = "1px solid " + T.getRectSelectBorderColor()) }, handle_mousedown: function (L) {
        var v = this,
          d = v.gv;
        if (v._57I = $, !(d._editing || d._scrolling || Vq())) {
          var H = d.getDataAt(L),
            y = d.sm();
          H ? ll(L) ? y.co(H) ? y.rs(H) : y.as(H) : y.co(H) || y.ss(H) : ll(L) || !d.isPannable() ? hp(L) && (ll(L) || y.cs(), d.isRectSelectable() && (v.startDragging(L), d._77O = 1)) : v._57I = en(L) } }, handle_mouseup: function (F) {
        var V = this,
          t = V._57I;
        t && (Rk(t, en(F)) <= 1 && V.gv.sm().cs(), V._57I = $) }, handleWindowMouseUp: function (h) { this.clear(h) }, handleWindowMouseMove: function (a) {
        var F = this,
          x = F.gv;
        F._logicalPoint = x.lp(a), F.mark ? (F.fi({ kind: "betweenRectSelect", event: a }), F.autoScroll(a), F.redraw()) : F.fi({ kind: "beginRectSelect", event: a }), F.mark = ji(F._lastLogicalPoint, F._logicalPoint), F.redraw() }, intersects: function () {
        var l = this,
          g = l._lastLogicalPoint,
          k = l._logicalPoint;
        return g.x > k.x || g.y > k.y }, clear: function (_) {
        var y = this,
          l = y.gv,
          k = y.mark;
        if (y._57I = $, y._lastLogicalPoint) {
          if (k) {
            if (0 !== k.width && 0 !== k.height) {
              var S = l.getDatasInRect(k, y.intersects());
              if (!S.isEmpty()) {
                var L = l.sm(),
                  O = L.toSelection();
                S.each(function (S) { L.co(S) ? O.remove(S) : O.add(S) }), L.ss(O) } }
            Sc(y.div), delete y.div, delete y.mark, y.redraw(), y.fi({ kind: "endRectSelect", event: _ }), l.onRectSelectEnded() }
          y.clearDragging(), delete l._77O } }, redraw: function () {
        var z = this;
        z._draw || (z._draw = 1, T(function () { z.mark && z._42(), delete z._draw }, 16)) } });
    var vo = de.MoveInteractor = function (H) { Dj(vo, this, [H]) };
    $o("MoveInteractor", In, { handle_mousedown: function (l) {
        var g = this,
          G = g.gv;
        if (hp(l) && !G._editing && !G._scrolling && !Vq()) {
          var w = G.getSelectedDataAt(l);
          w ? (g._data = w, G.handleMouseDown && G.handleMouseDown(l, w), g.startDragging(l), G.isMovable(w) && (G._moving = 1)) : G._focusData = $ } }, handleWindowMouseUp: function (k) {
        var F = this,
          q = F.gv;
        q.handleMouseUp && q.handleMouseUp(k, F._data), F.clear(k) }, handleWindowMouseMove: function (c) {
        var V = this,
          n = V._data,
          Z = V.gv,
          Y = Z.getDataModel(),
          J = Y.getHistoryManager();
        if ((!Z._93O || !Z._93O(c, n)) && Z._moving) { V._logicalPoint || V.fi({ kind: "prepareMove", event: c });
          var w = V._logicalPoint ? "betweenMove" : "beginMove",
            E = { kind: w, event: c },
            h = V._logicalPoint = Z.lp(c);
          J && "beginMove" === w && J.beginInteraction();
          var N = V._calcShift(w, c),
            i = N.x,
            q = N.y,
            C = V.gv.getMoveMode(c, n);
          C && ("x" === C ? q = 0 : "y" === C ? i = 0 : "xy" !== C && (i = q = 0)), Z.moveSelection(i, q), V._lastLogicalPoint = h, V.autoScroll(c), V.fi(E) } }, _calcShift: function () {
        var T = this,
          k = T._logicalPoint,
          X = T._lastLogicalPoint,
          E = k.x - X.x,
          b = k.y - X.y;
        return { x: E, y: b } }, clear: function (E) {
        var j = this,
          P = j.gv,
          p = P.getDataModel(),
          Z = p.getHistoryManager();
        j._lastLogicalPoint && (j._lastLogicalPoint = j._data = P._moving = $, j._logicalPoint && (j.fi({ kind: "endMove", event: E }), P.onMoveEnded(), Z && Z.endInteraction()), j.clearDragging()) } });
    var io = de.ScrollBarInteractor = function (Z) { Dj(io, this, [Z]) };
    $o("ScrollBarInteractor", In, { _41o: function () {
        return this.gv.getViewRect().height < this.gv.getScrollRect().height }, _40o: function () {
        return this.gv.getViewRect().width < this.gv.getScrollRect().width }, isV: function (I) {
        var b = this.gv.getViewRect();
        return this._41o() && (b.x + b.width - this.gv.lp(I).x) * this.gv.getZoom() < _m }, isH: function (f) {
        var R = this.gv.getViewRect();
        return this._40o() && (R.y + R.height - this.gv.lp(f).y) * this.gv.getZoom() < _m }, handle_mousemove: function (L) { this.handle_touchmove(L) }, handle_touchmove: function (i) {
        if (!gp && hp(i)) {
          var V = this,
            c = V.isV(i),
            J = V.isH(i);
          (c || J) && V.gv.showScrollBar(), V.gv._scrolling = c || J } }, handleWindowMouseUp: function (i) { this.handleWindowTouchEnd(i) }, handleWindowTouchEnd: function (i) { this._state = this._cp = this._tx = this._ty = this.gv._scrolling = $, this.fi({ kind: "endScroll", event: i }) }, handle_mousedown: function (n) { this.handle_touchstart(n) }, handle_touchstart: function (X) {
        var t = this;
        if (t.gv.setFocus(X), be(X), t.handle_touchmove(X), !(kp(X) > 1) && t.gv._scrolling) { t._cp = en(X), t._tx = t.gv.tx(), t._ty = t.gv.ty();
          var P = t.isV(X);
          t._state = P ? "vScroll" : "hScroll", Ud(t, X), t.fi({ kind: "beginScroll", event: X }) } }, handleWindowMouseMove: function (Z) { this.handleWindowTouchMove(Z) }, handleWindowTouchMove: function (L) {
        var a = en(L),
          i = this.gv.getViewRect(),
          J = this.gv.getScrollRect(); "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - a.y) * J.height / i.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - a.x) * J.width / i.width), this.fi({ kind: "betweenScroll", event: L }) } });
    var zq = de.TouchInteractor = function (r, z) { z = z || {}, z.selectable === B && (z.selectable = !0), z.movable === B && (z.movable = !0), z.pannable === B && (z.pannable = !0), z.pinchable === B && (z.pinchable = !0), z.editable === B && (z.editable = !0), this.params = z, Dj(zq, this, [r]) };
    $o("TouchInteractor", In, { ms_edit: 1, setUp: function () {
        var V = this;
        zq.superClass.setUp.call(V), c && V.params.editable && V.gv.setEditInteractor(V) }, tearDown: function () {
        var E = this;
        zq.superClass.tearDown.call(E), c && E.params.editable && E.gv.setEditInteractor($) }, clear: function (D) {
        var r = this,
          h = r.gv,
          v = h.dm().getHistoryManager();
        h._moving && (r.fi({ kind: "endMove", event: D }), delete h._moving, h.onMoveEnded(), v && v.endInteraction()), h._panning && (r.fi({ kind: "endPan", event: D }), delete h._panning, h.onPanEnded()), h._pinching && (r.fi({ kind: "endPinch", event: D }), delete h._pinching, h.onPinchEnded()), h._editing && (r._46O(D), r._77I = r._node = r._edge = r._shape = r._rect = r._89I = r._index = h._editing = $), r._moving = r._panning = r._pinching = r._editing = r._57I = r._data = r._beginHistory = $, r.clearDragging() }, handle_touchstart: function (B) {
        var G = this;
        if (!G.gv._editing) { be(B), G._57I = $;
          var m = G.params,
            g = G.gv,
            T = g.sm(),
            N = g.getDataAt(B),
            W = kp(B);
          if (1 === W) ep(B) ? g.handleDoubleClick(B, N) : (g.handleClick(B, N), N && (g.handleMouseDown && g.handleMouseDown(B, N), G._data = N)), m.selectable || (N = $), N ? (T.co(N) || T.ss(N), m.editable && g.isEditable(N) && G._79I(B, N, !0) ? (G._editing = 1, G.startDragging(B)) : m.movable && g.isMovable(N) && (G._moving = 1, G.startDragging(B))) : (G._57I = en(B), m.pannable && g.isPannable() && (G._panning = 1, G.startDragging(B), G._translate = { x: g.tx(), y: g.ty() }));
          else if (m.pinchable && 2 === W) { G._pinching = 1, G.startDragging(B);
            var Q = g.getView(),
              X = g.getZoom(),
              U = Q.getBoundingClientRect(),
              f = B.touches[0],
              v = B.touches[1],
              x = { x: (f.clientX + v.clientX) / 2 - U.left, y: (f.clientY + v.clientY) / 2 - U.top };
            x.x -= g.tx(), x.y -= g.ty(), x.x /= X, x.y /= X, G._p = x, G._d = qs(B) } } }, handle_touchend: function (i) {
        var K = this,
          r = K.gv,
          l = K._57I,
          J = K._data;
        l && (Rk(l, en(i)) <= 1 && r.sm().cs(), K._57I = $), J && r.handleMouseUp && r.handleMouseUp(i, J) }, handleWindowTouchEnd: function (E) { this.clear(E) }, handleWindowTouchMove: function (R) {
        var N = this,
          W = N.gv,
          v = W.dm().getHistoryManager(),
          b = kp(R);
        if (1 === b) {
          if (N._editing && (v && !N._beginHistory && (N._beginHistory = 1, v.beginInteraction()), W._editing = 1, N._78I(R)), N._moving) v && !N._beginHistory && (N._beginHistory = 1, v.beginInteraction()), N.handleMove(R);
          else if (N._panning) {
            var o = en(R);
            W.setTranslate(N._translate.x + o.x - N._lastClientPoint.x, N._translate.y + o.y - N._lastClientPoint.y), N.fi({ kind: W._panning ? "betweenPan" : "beginPan", event: R }), W._panning = 1 } } else if (2 === b && N._pinching) {
          var T = qs(R);
          W.handlePinch(N._p, T, N._d), N._d = T, N.fi({ kind: W._pinching ? "betweenPinch" : "beginPinch", event: R }), W._pinching = 1 } }, handleMove: function (O) {
        var x = this,
          Q = x.gv,
          s = Q.lp(O);
        Q._93O && Q._93O(O, x._data) || (Q.moveSelection(s.x - x._lastLogicalPoint.x, s.y - x._lastLogicalPoint.y), x._lastLogicalPoint = s, x.autoScroll(O), x.fi({ kind: Q._moving ? "betweenMove" : "beginMove", event: O }), Q._moving = 1) } });
    var t = _.ht,
      Pf = t.graph._editor = { Math: {}, Guide: {} };
    Pf.getStyle = function (x) {
      var b, Z = Pf.StyleMap;
      return Z && (b = Z[x], b !== B) ? b : Pf.DefaultStyleMap[x] }, Pf.setStyle = function (J, j) {
      var c = Pf.StyleMap;
      c || (c = Pf.StyleMap = {}), c[J] = j }, Pf.inEdit = function (A) {
      return A._inXEdit === !0 }, Pf.startEdit = function (D) { D._inXEdit = !0, Pf.Inject.doInject(D) }, Pf._46O = function (G) { G._inXEdit = !1, Pf.Inject.undoInject(G) }, Pf.toScreenPosition = function (k, f) {
      var o = k.tx(),
        B = k.ty(),
        Q = k._zoom;
      return new Pf.Math.Vector2(f.x * Q + o, f.y * Q + B) }, Pf.checkHit = function (z, Q, G) {
      return z.distanceTo(Q) < G ? !0 : !1 }, Pf.toWorldPosition = function (y, Q) {
      var V = y.tx(),
        h = y.ty(),
        T = y._zoom;
      return { x: (Q.x - V) / T, y: (Q.y - h) / T } }, Pf.log = function () {};
    var Uo = Pf.Inject = { _modules: [] };
    Uo.registAsModule = function (g, c) {
      var P = {},
        k = {};
      for (var Y in g) {
        var D = c.prototype[Y];
        P[Y] = D }
      g.getBackup = function (f) {
        return P[f] }, g.getBackups = function () {
        return P }, k.doInject = function () {
        for (var P in g) "getBackup" !== P && (c.prototype[P] = g[P]) }, k.undoInject = function () {
        for (var y in g) "getBackup" !== y && (c.prototype[y] = P[y]) }, Uo._modules.push(k) }, Uo.doInject = function (Z) {
      for (var J, S = Uo._modules, i = 0, W = S.length; W > i; i++) J = S[i], J.doInject(Z) }, Uo.undoInject = function (R) {
      for (var w, x = Uo._modules, K = 0, i = x.length; i > K; K++) w = x[K], w.undoInject(R) };
    var In = t.graph.EditInteractor = function (D) {
        var W = this,
          J = w.createElement("canvas");
        J.className = "editCanvas", J.style.position = "absolute", W._styleMap = {}, W._canvas = J, W._context = J.getContext("2d"), In.superClass.constructor.call(W, D), W.setAntialias(!1), W._subModules = [new Pf.Anchor(W), new Pf.Rect(W), new Pf.Curve(W), new Pf.MoveHelper(W)], W._gridGuide = new Pf.Guide.Grid(W), W._rectGuide = new Pf.Guide.Rect(W) },
      bf = In;
    t.Default.def(In, t.graph.Interactor, { ms_edit: 1, ms_fire: 1 }), y.defineProperties(In.prototype, { editDetail: { get: function () {
          var m = !!this._editDetail;
          return m }, set: function (s) {
          var u = this,
            Y = u._editDetail;
          Y !== s && (u._editDetail = s, u.gv._editing = s, u.fp("editDetail", Y, s)) } }, gvEditing: { get: function () {
          return this.gv._editing }, set: function (W) {
          (!this._editDetail || W) && (this.gv._editing = W, W || (this.editDetail = !1)) } }, editing: { get: function () {
          return this._editing }, set: function (o) { this._editing = o, this.gvEditing = o } }, gridEnabled: { get: function () {
          var P = this._gridEnabled;
          if (!P) return !1;
          var e = this.gv;
          return e ? e._zoom < this.getStyle("gridZoomThreshold") ? !1 : !0 : !0 }, set: function (k) { k !== this._gridEnabled && (this._gridEnabled = k, this._42()) } }, alignmentGuideEnabled: { get: function () {
          return this._agEnabled }, set: function ($) { $ !== this._agEnabled && (this._agEnabled = $, this._42()) } }, gridGuide: { get: function () {
          return this._gridGuide } }, rectGuide: { get: function () {
          return this._rectGuide } } }), In.prototype.getSubModule = function (Q) {
      var x, v, P, S = this._subModules;
      for (v = 0, P = S.length; P > v; v++)
        if (x = S[v], x.catalog === Q) return x }, In.prototype.invokeSubModule = function (K, N) {
      var X = this,
        F = X._subModules;
      if (F)
        for (var d, E, j, J = Array.prototype.slice.call(arguments, 2), R = 0, c = F.length; c > R; R++)
          if (d = F[R], E = d[K], E && (j = E.apply(d, J), j != B && N)) return d }, In.prototype.invokeSubModuleInverse = function (p, Q) {
      var J = this,
        M = J._subModules;
      if (M)
        for (var G, $, z, H = Array.prototype.slice.call(arguments, 2), n = M.length - 1; n >= 0; n--)
          if (G = M[n], $ = G[p], $ && (z = $.apply(G, H), z != B && Q)) return G }, In.prototype.setUp = function () { Pf.log("setUp");
      var H = this,
        R = H.gv,
        $ = R.getView(),
        t = H._canvas;
      In.superClass.setUp.call(H), R.setEditInteractor(H), R._79O ? $.insertBefore(t, R._79O) : $.appendChild(t), Pf.startEdit(R), H.invokeSubModule("setUp"), R.dm().mm(H._onDataModelChanged, H), R.dm().md(H._onDataPropertyChanged, H) }, In.prototype.tearDown = function () { Pf.log("tearDown");
      var X = this,
        P = X.gv,
        $ = P.getView();
      In.superClass.tearDown.call(X), P.dm().umm(X._onDataModelChanged), P.dm().umd(X._onDataPropertyChanged), P.setEditInteractor(null), $.removeChild(X._canvas), Pf._46O(P), X.invokeSubModule("tearDown") }, In.prototype._onDataModelChanged = function (M) {
      var R = this;
      ("clear" === M.kind || "remove" === M.kind && R.editDetail && M.data === R.getSubModule("Curve").target) && (R.editDetail = !1, R._42()) }, In.prototype._onDataPropertyChanged = function ($) {
      var I = this;
      if (I.editDetail) {
        var M = I.getSubModule("Curve"),
          p = $.data;
        p === M.target && (p._writing || M._handleDataChanged()) } }, In.prototype.clear = function () { Pf.log("clear") }, In.prototype.redraw = function () { this._42() }, In.prototype._42 = function () {
      var j = this;
      j._drawTimer || (j._drawTimer = T(function () { delete j._drawTimer, j.drawImpl() }, 0)) }, In.prototype.drawImpl = function () {
      var s;
      for (s in { _42: !0 }) break;
      return function () {
        var W = this,
          A = W._canvas,
          C = W.gv,
          N = C.getWidth(),
          T = C.getHeight(),
          p = W._context,
          q = t.Default.getInternal();
        (A.width !== N || A.height !== T) && q.setCanvas(A, N, T), p.clearRect(0, 0, A.width, A.height);
        var j = W._getValidSelection();
        p.save();
        var e = t.Default.devicePixelRatio;
        p.scale(e, e), W._gridGuide._42(), W._rectGuide._42(), W.invokeSubModuleInverse(s, !1, p, C, j), p.restore() } }(), In.prototype._getValidSelection = function () {
      var r = this,
        J = r.gv,
        Y = J.sm().getSelection(),
        W = [];
      return Y.each(function (o) { J.isVisible(o) && W.push(o) }), W }, In.prototype.setAntialias = function (G) {
      for (var w, D = this._context, s = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], Y = 0, z = s.length; z > Y && (w = s[Y], !D[w]); Y++);
      D[w] = G }, In.prototype.handle_touchmove = function (Y) {
      return this.handle_mousemove(Y) }, In.prototype.handle_mousemove = function (i) {
      if (!t.Default.isDragging()) {
        var b = this;
        (b.editDetail || !Vq()) && (b.gvEditing = !1, b.gv.sm().size() && b._checkEdit(i) && (b.gvEditing = !0))
      }
    }, In.prototype.handle_touchstart = function (m) {
      return this.handle_mousedown(m) }, In.prototype.handle_mousedown = function (t) { be(t);
      var H = this;
      if (H.editDetail || !Vq()) {
        if (ep(t)) {
          if (H.editDetail) {
            if (H._tryQuitEditDetailMode(t)) return } else if (H._tryEnterEditDetailMode()) return;
          if (H.invokeSubModule("handleDoubleClick", !0, t)) return }
        var I = H._checkEdit(t);
        I && (H._downPosition = H._getLogicalPoint(t), I.startEdit(H, t), H.editing = !0) } }, In.prototype._checkEdit = function (F) {
      var G = this,
        U = G.gv,
        W = G._getLogicalPoint(F),
        R = G.invokeSubModule("check", !0, U, F, W) || null;
      return G._editMod = R, R }, In.prototype.handleWindowTouchMove = function (q) {
      return this.handleWindowMouseMove(q) }, In.prototype.handleWindowMouseMove = function (h) {
      var M = this,
        P = M._downPosition;
      if (P) {
        var k = M._getLogicalPoint(h);
        if (k.distanceTo(P) < M.getStyle("moveSensitivity")) return;
        delete M._downPosition }
      var Q = M._editMod;
      Q && Q.handleEdit(M.gv, h) }, In.prototype._getLogicalPoint = function (j) {
      var H = this,
        K = t.Default.getLogicalPoint(j, H._canvas);
      return new Pf.Math.Vector2(K) }, In.prototype.handleWindowTouchEnd = function (v) {
      return this.handleWindowMouseUp(v) }, In.prototype.handleWindowMouseUp = function () {
      var N;
      for (N in { _46O: !0 }) break;
      return function () {
        var W = this;
        W.editing = !1, W.setCursor("default"), W.invokeSubModule(N, !1), W._42() } }(), In.prototype.handle_mousewheel = function (B) {
      var k = this;
      be(B), k.invokeSubModule("preHandleScroll", !0) || k.gv.handleScroll(B, B.wheelDelta) }, In.prototype.handleDelete = function () {
      var U = this;
      return U.editDetail ? (U.invokeSubModule("handleDelete", !0), U._42(), void 0) : (U.gv.removeSelection(), void 0) }, In.prototype.handle_keydown = function (t) {
      var o = this;
      if ((t.metaKey || t.ctrlKey) && o._42(), Vq(t) && !o.editing) return o.gvEditing = !1, o.setCursor("default"), o._42(), void 0;
      var u = Ac(t);
      return o.editDetail ? ((u || Lj(t)) && (o.editDetail = !1, o._42()), o.invokeSubModule("handle_keydown", !0, t), void 0) : (u && o._tryEnterEditDetailMode(), void 0) }, In.prototype._tryEnterEditDetailMode = function () {
      var z = this;
      return !z.editDetail && z.invokeSubModule("canEnterEditDetailMode", !0) && 1 === z._getValidSelection().length ? (z.editDetail = !0, z._42(), !0) : void 0 }, In.prototype._tryQuitEditDetailMode = function (z) {
      var E = this;
      if (E.editDetail) {
        var R = E.gv,
          t = E.getSubModule("Curve").target;
        return R.getDataAt(z) !== t ? (E.editDetail = !1, E._42(), !0) : void 0 } }, In.prototype.setStyle = function (a, X, j) {
      var A = this;
      j ? Pf.setStyle(a, X) : A._styleMap[a] = X, A._42() }, In.prototype.getStyle = function (K) {
      var u = this,
        c = u._styleMap[K];
      return c !== B ? c : Pf.getStyle(K) };
    var Zj = Pf.Group = function (j) {
      var l = this;
      l._entities = j, l._64O = 0, l._position = { x: 0, y: 0 }, l._scale = { x: 1, y: 1 }, l._anchor = { x: .5, y: .5 }, l._anchor2 = { x: .5, y: .5 } };
    Zj.prototype = {}, Zj.prototype.constructor = Zj;
    var lj = null;
    Zj.findOrCreateGroup = function (P) {
      if (lj && lj.checkIsMe(P)) return lj;
      var H = new Pf.Group(P);
      return H.getKeyOb() ? (lj = H, H) : void 0 }, Zj.prototype.checkIsMe = function (p) {
      var R = this._entities;
      if (R.length !== p.length) return !1;
      var d, h = {},
        F = p.length;
      for (d = 0; F > d; d++) h[p[d]._id] = !0;
      for (d = 0; F > d; d++)
        if (!h[R[d]._id]) return !1;
      return !0 }, Zj.prototype.getRotation = function () {
      return this._64O }, Zj.prototype.getPosition = function () {
      return this._position }, Zj.prototype.getAnchor = function () {
      return this._anchor }, Zj.prototype.getWidth = function () {
      return this._width }, Zj.prototype.getScale = function () {
      return this._scale }, Zj.prototype.getSize = function () {
      return { width: this._width, height: this._height } }, Zj.prototype.getHeight = function () {
      return this._height }, Zj.prototype.getKeyOb = function () {
      for (var $ = this._entities, c = $.length - 1; c >= 0; c--) {
        var l = $[c];
        if (this.isNode(l)) return l } }, Zj.prototype.getAnchor2 = function () {
      var G = this,
        s = G.getKeyOb();
      if (!s) return G._anchor;
      var H = G._anchor2,
        q = s.getMatrix();
      return q.tf({ x: s.getWidth() * (H.x - s.getAnchor().x), y: s.getHeight() * (H.y - s.getAnchor().y) }) }, Zj.prototype.setAnchor2 = function (T, Y) {
      var O = this,
        w = O.getKeyOb();
      if (w) {
        var v, d = w.getMatrix();
        v = "number" == typeof T ? { x: T, y: Y } : T;
        var k = d.tfi(v);
        O._anchor2 = { x: w.getAnchor().x + k.x / w.getWidth(), y: w.getAnchor().y + k.y / w.getHeight() } } }, Zj.prototype.addRotation = function (M) {
      var D = this,
        G = D._anchor2;
      D._entities.forEach(function (t) {
        if (D.isNode(t)) {
          var f = t.getAnchor(),
            J = t.getMatrix(),
            r = J.tf({ x: t.getWidth() * (G.x - f.x), y: t.getHeight() * (G.y - f.y) }),
            Z = new Pf.Math.Matrix2;
          Z.set(J.a, J.b, J.c, J.d, J.tx, J.ty), Z.translate(-r.x, -r.y), Z.rotate(M), Z.translate(r.x, r.y);
          var F = Math.sign(t.getScale().x);
          t.setRotation(z(Z.b * F, Z.a * F)), t.setPosition(Z.tx, Z.ty) } }) }, Zj.prototype.setPosition = function (U) {
      var Y, G, D, I, L = this,
        X = L._position,
        b = U.x - X.x,
        H = U.y - X.y,
        C = L._entities;
      for (G = 0, D = C.length; D > G; G++) Y = C[G], pg(Y) && (I = Y.getPosition(), Y.setPosition(I.x + b, I.y + H));
      L._position = U }, Zj.prototype.setScale = function (T, j) {
      var F = this,
        R = T / F._scale.x,
        X = j / F._scale.y;
      F._adjustChildScaleOrSize(R, X, "size"), F._scale = { x: T, y: j } }, Zj.prototype.getRect = function () {
      var h = this,
        w = h._position,
        j = h._width,
        q = h._height;
      return { x: w.x - j / 2, y: w.y - q / 2, width: j, height: q } }, Zj.prototype.setSize = function (N, v) {
      var U = this,
        N = Math.max(1, N),
        v = Math.max(1, v),
        I = N / U._width,
        B = v / U._height;
      U._adjustChildScaleOrSize(I, B, "size"), U._width = N, U._height = v }, Zj.prototype._adjustChildScaleOrSize = function (T, N, s) {
      var Y, x, h, g, $, p, O, C, Z, k, r, J, K, u, P = this,
        b = P._position,
        H = P._entities,
        U = new Pf.Math.Matrix2;
      for (x = 0, h = H.length; h > x; x++)
        if (Y = H[x], P.isNode(Y)) {
          if (g = Y.getPosition(), $ = Y.getRotation(), p = Y.getWidth(), O = Y.getHeight(), C = Y.getScale(), r = C.x * p, J = C.y * O, U.identity().scale(r, J).rotate($).translate(g.x, g.y).translate(-b.x, -b.y).rotate(-P._64O), $ = z(U.b * Math.sign(r), U.a * Math.sign(r)), U.scale(T, N), Z = Math.cos($), k = Math.sin($), Math.abs(Z) < .001 ? (K = U.b / k, u = -U.c / k) : (K = U.a / Z, u = U.d / Z), "scale" === s) Y.setScale(K / p, u / O);
          else if ("size" === s) {
            var Q = K / C.x,
              B = u / C.y;
            Y.setScale(ol(K) * Math.abs(C.x), ol(u) * Math.abs(C.y)), Y.setSize(Math.max(.1, Math.abs(Q)), Math.max(.1, Math.abs(B))) }
          U.rotate(P._64O).translate(b.x, b.y), Y.setPosition(U.tx, U.ty) } }, Zj.prototype.getMatrix = function () {
      var S = this,
        c = S._position,
        $ = t.Default.getInternal(),
        V = S._scale;
      return new $.Mat(S._64O, c.x, c.y, V.x, V.y) }, Zj.prototype.getCorners = function () {
      var T = this,
        w = T._width,
        Q = T._height,
        m = T._anchor,
        S = -w * m.x,
        M = -Q * m.y,
        D = T.getMatrix();
      return [D.tf(S, M), D.tf(S, M + Q), D.tf(S + w, M + Q), D.tf(S + w, M)] }, Zj.prototype.calcInfo = function () {
      var C, L, q, P, o, N, g = this,
        X = [],
        I = g._entities,
        u = g._64O;
      for (P = 0, o = I.length; o > P; P++) N = I[P], g.isNode(N) && N.getCorners && X.push.apply(X, N.getCorners());
      if (X.length) {
        var Y = Math.cos(-u),
          d = Math.sin(-u),
          V = 1 / 0,
          b = -1 / 0,
          B = 1 / 0,
          F = -1 / 0;
        for (P = 0, o = X.length; o > P; P++) q = X[P], C = q.x, L = q.y, q.x = Y * C - d * L, q.y = d * C + Y * L, V = Math.min(V, q.x), b = Math.max(b, q.x), B = Math.min(B, q.y), F = Math.max(F, q.y);
        g._width = (b - V) / g._scale.x, g._height = (F - B) / g._scale.y, Y = Math.cos(u), d = Math.sin(u);
        var U = g._anchor;
        C = V + (b - V) * U.x, L = B + (F - B) * U.y, g._position = { x: Y * C - d * L, y: d * C + Y * L } } }, Zj.prototype.isNode = function (Z) {
      return pg(Z) ? Z instanceof t.Group && Z.isExpanded() ? !1 : !0 : !1 }, Zj.prototype._42 = function (G, l, u) {
      var q, K, D, e, x, n, v, L = this,
        C = L._entities,
        U = L.getKeyOb();
      for (q = 0, K = C.length; K > q; q++) D = C[q], L.isNode(D) && (n = D.getRect(), e = Pf.toScreenPosition(u, { x: n.x, y: n.y }), x = Pf.toScreenPosition(u, { x: n.x + n.width, y: n.y + n.height }), v = { min: e, max: x }, D === U && (v.isKeyOb = !0), Pf.Icons.DrawIcon(G, l, Pf.Icons.GroupSubEntityRect, v)) };
    var Hk = Pf.Guide.Grid = function (o) {
      var b = this;
      b._interactor = o, b._alignmentGuideId = 0, b._xAlignmentGuide = [], b._yAlignmentGuide = [] };
    Hk.prototype = {}, Hk.prototype.constructor = Hk, y.defineProperties(Hk.prototype, { gridBlockSize: { get: function () {
          var g = this;
          return g._gridBlockSize || g._interactor.getStyle("gridBlockSize") }, set: function (J) { this._gridBlockSize = J, this._interactor._42() } }, gridThickLinesEvery: { get: function () {
          var e = this;
          return e._gridThickLinesEvery || e._interactor.getStyle("gridThickLinesEvery") }, set: function (e) { this._gridThickLinesEvery = e, this._interactor._42() } }, gridEnabled: { get: function () {
          var q = this,
            B = q._interactor;
          return B.gridEnabled && q.isValidGrid() } } }), Hk.prototype._42 = function () {
      var w = this,
        p = w._interactor;
      w.gridEnabled && w.drawGrid(), p.alignmentGuideEnabled && w.drawAlignmentGuide() }, Hk.prototype.makeMatrix = function () {
      var e = this,
        p = e._interactor.getStyle("gridAngle"),
        S = e._interactor.getStyle("gridRotation"),
        J = new Pf.Math.Matrix2,
        t = Math.sin(p),
        N = Math.cos(p);
      return J.set(1, 0, N, t, 0, 0), J.rotate(S), J }, Hk.prototype.isValidGrid = function () {
      var i = this,
        j = Math.PI,
        V = i._interactor.getStyle("gridAngle"),
        F = Math.abs(180 * (V % j / j)),
        n = 1 - 1e-8;
      return n > F || F > 180 - n ? !1 : !0 }, Hk.prototype.drawAlignmentGuide = function () {
      var G = this,
        b = G._interactor,
        K = b.gv,
        z = b._canvas,
        L = b._context,
        d = z.width,
        f = z.height,
        D = K.tx(),
        c = K.ty(),
        O = K._zoom;
      L.beginPath(), L.strokeStyle = b.getStyle("gridAlignmentGuideColor"), L.lineWidth = 1, G._xAlignmentGuide.forEach(function (d) {
        var k = d.p * O + D;
        L.moveTo(k, 0), L.lineTo(k, f) }), G._yAlignmentGuide.forEach(function (j) {
        var U = j.p * O + c;
        L.moveTo(0, U), L.lineTo(d, U) }), L.stroke() }, Hk.prototype.drawGrid = function () {
      function Z(L, e, p, c) {
        var V = Pf.toScreenPosition(g, S.apply({ x: L, y: e })),
          F = Pf.toScreenPosition(g, S.apply({ x: p, y: c }));
        H.moveTo(V.x, V.y), H.lineTo(F.x, F.y) }
      var E = this,
        V = E._interactor,
        y = E.gridBlockSize,
        l = E.gridThickLinesEvery,
        $ = V.getStyle("gridThickColor"),
        N = V.getStyle("gridLightColor"),
        g = V.gv,
        D = V._canvas,
        H = V._context,
        M = D.width,
        O = D.height,
        S = E.makeMatrix(),
        U = S.applyInverse(Pf.toWorldPosition(g, { x: 0, y: 0 })),
        p = S.applyInverse(Pf.toWorldPosition(g, { x: M, y: 0 })),
        t = S.applyInverse(Pf.toWorldPosition(g, { x: 0, y: O })),
        L = S.applyInverse(Pf.toWorldPosition(g, { x: M, y: O })),
        d = Math.min(U.x, p.x, t.x, L.x),
        n = Math.max(U.x, p.x, t.x, L.x),
        Q = Math.min(U.y, p.y, t.y, L.y),
        I = Math.max(U.y, p.y, t.y, L.y);
      M = n - d, O = I - Q;
      var h = Math.ceil(d / y),
        b = Math.floor(n / y),
        f = Math.ceil(Q / y),
        A = Math.floor(I / y);
      g.tx(), g.ty(), g._zoom;
      var Y, e, r;
      for (H.save(), H.lineWidth = 1, H.beginPath(), H.strokeStyle = $, r = Math.ceil(h / l) * l; b >= r; r += l) Y = r * y, Z(Y, Q, Y, I);
      for (r = Math.ceil(f / l) * l; A >= r; r += l) e = r * y, Z(d, e, n, e);
      for (H.stroke(), H.beginPath(), H.strokeStyle = N, r = h; b >= r; r++) 0 !== r % l && (Y = r * y, Z(Y, Q, Y, I));
      for (r = f; A >= r; r++) 0 !== r % l && (e = r * y, Z(d, e, n, e));
      H.stroke(), H.restore() }, Hk.prototype.getAlignmentGuides = function () {
      var D = this;
      return { x: D._xAlignmentGuide, y: D._yAlignmentGuide } }, Hk.prototype.addAlignmentGuide = function (L, K, E) {
      var r = this,
        z = "x" === L ? r._xAlignmentGuide : r._yAlignmentGuide,
        E = E ? E : ++r._alignmentGuideId,
        U = { p: K, id: E };
      if (z.length) {
        var l = r._findClosestAlignmentGuide(U.p, z);
        l.dis < 0 ? z.splice(l.index + 1, 0, U) : z.splice(l.index, 0, U) } else z.push(U);
      return r._interactor._42(), E }, Hk.prototype.findClosest = function (N, Z, K) {
      var W = this,
        Y = W._interactor,
        h = Y.gv;
      K && (N = Pf.toWorldPosition(h, N));
      var s, T, q, C = 1 / 0,
        M = 1 / 0,
        I = N.x,
        m = N.y;
      if (W.gridEnabled) {
        var a = W.gridBlockSize,
          X = W.makeMatrix(),
          x = X.applyInverse(N);
        x = X.apply({ x: Math.round(x.x / a) * a, y: Math.round(x.y / a) * a }), C = x.x - I, M = x.y - m, q = !0 }
      if (Y.alignmentGuideEnabled && (s = W._findClosestAlignmentGuide(I, W._xAlignmentGuide).dis, T = W._findClosestAlignmentGuide(m, W._yAlignmentGuide).dis, Math.abs(s) < Math.abs(C) && (C = s, q = !0), Math.abs(T) < Math.abs(M) && (M = T, q = !0)), q) { q = !1;
        var S = h._zoom,
          l = Y.getStyle("smartGuideSensitivity") / S,
          f = {};
        if (Math.abs(C) < l && "y" !== Z && (f.x = K ? C * S : C, q = !0), Math.abs(M) < l && "x" !== Z && (f.y = K ? M * S : M, q = !0), q) return f } }, Hk.prototype._findClosestAlignmentGuide = function (J, t) {
      if (!t.length) return { dis: 1 / 0 };
      for (var Q, H = 0, O = t.length - 1; O - H > 1;) Q = Math.floor((H + O) / 2), t[Q].p < J ? H = Q : O = Q;
      var b = t[H].p - J,
        k = t[O].p - J;
      return Math.abs(b) <= Math.abs(k) ? { line: t[H], dis: b, index: H } : { line: t[O], dis: k, index: O } }, Hk.prototype.removeAllAlignmentGuide = function (x) {
      var E = this; "y" !== x && (E._xAlignmentGuide = []), "x" !== x && (E._yAlignmentGuide = []), E._interactor._42() }, Hk.prototype.removeAlignmentGuide = function (S) {
      var z, d, _, s = this,
        H = s._xAlignmentGuide;
      for (k = 0; 2 > k; k++)
        for (H = 0 === k ? s._xAlignmentGuide : s._yAlignmentGuide, z = 0, d = H.length; d > z; z++)
          if (_ = H[z], _.id === S) return H.splice(z, 1), s._interactor._42(), { axis: 0 === k ? "x" : "y", position: _.p };
      return !1 }, Hk.prototype.adjustAlignmentGuide = function (O, X) {
      var L = this,
        J = L.removeAlignmentGuide(O);
      return J ? (L.addAlignmentGuide(J.axis, X, O), !0) : !1 };
    var sl = Pf.Guide.Rect = function (L) {
      var y = this;
      y._interactor = L };
    sl.prototype = {}, sl.prototype.constructor = sl, sl.prototype.gatherRects = function () {
      var d, s, l, z, q = this,
        w = q._interactor.gv,
        o = [],
        i = [],
        k = { x: o, y: i },
        H = {},
        Y = w.getDataModel(),
        B = Y.a("width"),
        v = Y.a("height");
      B && v && (d = 0, s = 0, l = B, z = v, o.push({ node: Y, type: 0, p: d }, { node: Y, type: 1, p: d + l / 2 }, { node: Y, type: 2, p: d + l }), i.push({ node: Y, type: 0, p: s }, { node: Y, type: 1, p: s + z / 2 }, { node: Y, type: 2, p: s + z }), H[Y._id || 0] = { x: d, y: s, width: l, height: z }), Y.each(function (B) {
        if (pg(B) && !w.isSelected(B) && w.isVisible(B)) {
          var q = !1;
          if (w.sm().getSelection().each(function (h) { q || (B.isHostOn(h) ? q = !0 : B.isDescendantOf(h) && (q = !0)) }), !q) {
            var u = B.getRect();
            d = u.x, s = u.y, l = u.width, z = u.height, o.push({ node: B, type: 0, p: d }, { node: B, type: 1, p: d + l / 2 }, { node: B, type: 2, p: d + l }), i.push({ node: B, type: 0, p: s }, { node: B, type: 1, p: s + z / 2 }, { node: B, type: 2, p: s + z }), H[B._id] = u } } }), o.sort(function (U, t) {
        return U.p - t.p }), i.sort(function (B, h) {
        return B.p - h.p }), q._grid = k, q._87I = H }, sl.prototype.gatherLines = function (s, X, b) {
      var y, a, Y, l, z, Z, Q, E, M, C, N, R, U = this,
        L = [U.findClosest({ x: s.x, y: s.y }, X), U.findClosest({ x: s.x + s.w / 2, y: s.y + s.h / 2 }, X), U.findClosest({ x: s.x + s.w, y: s.y + s.h }, X)],
        K = {},
        F = U._87I;
      b = b || 255;
      var H, u;
      for (U._guideLine = [], y = 0; 2 > y; y++)
        for (K = {}, 0 === y ? (l = "y", E = s.x, M = E + s.w) : (l = "x", E = s.y, M = E + s.h), a = 0; 3 > a; a++) z = L[a], z && isFinite(z[l]) && (H = 1 << 3 * y + a, b & H && (Z = z[l + "Line"], Q = Z.node, u = Q._id || 0, K[u] || (K[u] = !0, R = F[u], "y" === l ? (C = R.x, N = R.x + R.width) : (C = R.y, N = R.y + R.height), Y = Z.p, U._guideLine.push({ type: l, a: E, b: M, c: C, d: N, p: Y })))) }, sl.prototype._binarySearchClosest = function (N, h) {
      if (!h.length) return { dis: 1 / 0 };
      for (var e, b = 0, l = h.length - 1; l - b > 1;) e = Math.floor((b + l) / 2), h[e].p < N ? b = e : l = e;
      var $ = h[b].p - N,
        j = h[l].p - N;
      return Math.abs($) <= Math.abs(j) ? { line: h[b], dis: $ } : { line: h[l], dis: j } }, sl.prototype.findClosest = function (K, v, k) {
      var f = this,
        H = f._interactor,
        d = H.gv,
        S = f._grid;
      k && (K = Pf.toWorldPosition(d, K));
      var e, l = f._binarySearchClosest(K.x, S.x),
        g = f._binarySearchClosest(K.y, S.y),
        Y = l.dis,
        X = g.dis,
        q = d._zoom,
        b = H.getStyle("smartGuideSensitivity") / q,
        D = {};
      return Math.abs(Y) < b && "y" !== v && (D.x = k ? Y * q : Y, D.xLine = l.line, e = !0), Math.abs(X) < b && "x" !== v && (D.y = k ? X * q : X, D.yLine = g.line, e = !0), e ? D : void 0 }, sl.prototype._42 = function () {
      var v = this,
        X = v._guideLine;
      if (X && !t.Default.isCtrlDown()) {
        var K, q, R, r, p, O, S, W, a, F, d, o, c, N, b, x, L, J = v._interactor,
          A = J.gv,
          z = J._context,
          s = A.tx(),
          T = A.ty(),
          C = A._zoom,
          g = J.getStyle("guideLineTextSpacing");
        for (K = 0, q = X.length; q > K; K++) R = X[K], W = R.type, a = R.p, F = R.a, d = R.b, o = R.c, c = R.d, N = Math.min(F, o), b = Math.max(d, c), "x" === W ? (r = a * C + s, p = N * C + T, O = r, S = b * C + T) : (r = N * C + s, p = a * C + T, O = b * C + s, S = p), Pf.Icons.DrawIcon(J, z, Pf.Icons.MoveLineGuide, [r, p, O, S]), c >= F && d >= o || (N = F > c ? c : d, b = F > c ? F : o, L = b - N, "x" === W ? (R.center2center || (r -= g, O = r), p = N * C + T, S = b * C + T, x = Pf.Icons.MoveLineGuideDistanceV) : "y" === W && (R.center2center || (p -= g, S = p), r = N * C + s, O = b * C + s, x = Pf.Icons.MoveLineGuideDistanceH), Pf.Icons.DrawIcon(J, z, x, { x0: r, y0: p, x1: O, y1: S, dis: L })) } }, sl.prototype.clear = function () { this._guideLine = null }, Pf.DefaultStyleMap = { pointSize: [24, 9], checkSize: 7, rotateCheckSize: 10, moveSensitivity: 10, rotateRound: Math.PI / 2, rotateSensitivity: Math.PI / 60, shiftRotateRound: Math.PI / 12, shiftLineRotateRound: Math.PI / 4, anchorMovable: !0, anchorVisible: !0, anchorRound: .25, anchorSensitivity: .02, smartGuideSensitivity: 8, curveIntersectSize: 5, curvePointIntersectSize: 8, guideLineTextSpacing: 32, gridBlockSize: 40, gridThickLinesEvery: 10, gridThickColor: "#5d5d5d", gridLightColor: "#d0d0d0", gridZoomThreshold: .25, gridAlignmentGuideColor: "#ff0000", gridAngle: Math.PI / 2, gridRotation: 0, tipTextColor: "#ffffff", tipBackground: "#333333", curveHighlightColor: "#30599e", rectPointBackground: "white", rectPointBorderColor: "#666666", rectPointShadowColor: "rgba(0,0,0,0.35)", shapeCtrlPointBackground: "white", shapeCtrlPointBorderColor: "#707070" };
    var Kf = Pf.Icons = {},
      Sb = 1e4,
      ki = null,
      rl = 8;
    t.Default.setImage("Icons.RectPoint", { width: rl, height: rl, comps: [{ type: "shape", points: [0, 0, 0, rl, rl, rl, rl, 0], segments: [1, 2, 2, 2, 5], shadow: !0, borderWidth: 1, shadowColor: { func: function () {
            return ki.getStyle("rectPointShadowColor") } }, background: { func: function () {
            return ki.getStyle("rectPointBackground") } }, borderColor: { func: function () {
            return ki.getStyle("rectPointBorderColor") } } }] });
    var mm = "#e000e0";
    Kf.GroupSubEntityRect = { comps: [{ type: "shape", points: { func: function () {
            var R = Kf.GroupSubEntityRect.data;
            if (!R) return [];
            var w = R.min,
              v = R.max;
            return [w.x, w.y, w.x, v.y, v.x, v.y, v.x, w.y] } }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: { func: function () {
            return Kf.GroupSubEntityRect.data.isKeyOb ? mm : "#666666" } } }] }, Kf.Line = { comps: [{ type: "image", name: "Icons.RectPoint", rect: { func: function () {
            return [
              [Kf.Line.data.P1.x, Kf.Line.data.P1.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", rect: { func: function () {
            return [
              [Kf.Line.data.P2.x, Kf.Line.data.P2.y], rl, rl
            ] } } }] }, Kf.Rect = { comps: [{ type: "shape", points: { func: function () {
            var l = Kf.Rect.data;
            if (!l) return [];
            var d = l.LT,
              i = l.LB,
              t = l.RB,
              W = l.RT;
            return [d.x, d.y, i.x, i.y, t.x, t.y, W.x, W.y] } }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: "#666666" }, { type: "image", name: "Icons.RectPoint", rotation: { func: function () {
            return Kf.Rect.data.rotation } }, rect: { func: function () {
            return [
              [Kf.Rect.data.LT.x, Kf.Rect.data.LT.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", rotation: { func: function () {
            return Kf.Rect.data.rotation } }, rect: { func: function () {
            return [
              [Kf.Rect.data.LB.x, Kf.Rect.data.LB.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", rotation: { func: function () {
            return Kf.Rect.data.rotation } }, rect: { func: function () {
            return [
              [Kf.Rect.data.RB.x, Kf.Rect.data.RB.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", rotation: { func: function () {
            return Kf.Rect.data.rotation } }, rect: { func: function () {
            return [
              [Kf.Rect.data.RT.x, Kf.Rect.data.RT.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: { func: function () {
            return Kf.Rect.data.rotation } }, visible: { func: function () {
            return Kf.Rect.data.L ? !0 : !1 } }, rect: { func: function () {
            return [
              [Kf.Rect.data.L.x, Kf.Rect.data.L.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: { func: function () {
            return Kf.Rect.data.rotation } }, visible: { func: function () {
            return Kf.Rect.data.R ? !0 : !1 } }, rect: { func: function () {
            return [
              [Kf.Rect.data.R.x, Kf.Rect.data.R.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: { func: function () {
            return Kf.Rect.data.rotation } }, visible: { func: function () {
            return Kf.Rect.data.T ? !0 : !1 } }, rect: { func: function () {
            return [
              [Kf.Rect.data.T.x, Kf.Rect.data.T.y], rl, rl
            ] } } }, { type: "image", name: "Icons.RectPoint", scaleX: .9, scaleY: .9, rotation: { func: function () {
            return Kf.Rect.data.rotation } }, visible: { func: function () {
            return Kf.Rect.data.B ? !0 : !1 } }, rect: { func: function () {
            return [
              [Kf.Rect.data.B.x, Kf.Rect.data.B.y], rl, rl
            ] } } }] };
    var Ik = 18;
    t.Default.setImage("Icons.Anchor", { width: Ik, height: Ik, comps: [{ type: "arc", rect: [4, 4, Ik - 8, Ik - 8], arcFrom: 0, arcClose: !1, background: "#ffffff", borderWidth: 0, borderColor: "#000000" }, { type: "shape", points: [2, Ik / 2, Ik - 2, Ik / 2, Ik / 2, 2, Ik / 2, Ik - 2], segments: [1, 2, 1, 2], background: null, borderWidth: 1, borderColor: "#111111" }, { type: "arc", rect: [5.5, 5.5, Ik - 11, Ik - 11], arcFrom: 0, arcClose: !1, background: null, borderWidth: 1, borderColor: "#111111" }] }), Kf.Anchor = { comps: [{ type: "image", name: "Icons.Anchor", rect: { func: function () {
            return [
              [Kf.Anchor.data.POS.x, Kf.Anchor.data.POS.y], Ik, Ik
            ] } } }] }, Kf.TipShiftX = 12, Kf.TipShiftY = 12;
    var Re = [8, 28];
    Kf.TipHelper = { comps: [{ type: "roundRect", rect: { func: function () {
            return [Kf.TipHelper.data.helperPos.x, Kf.TipHelper.data.helperPos.y, Re[0] * Kf.TipHelper.data.size, Re[1]] } }, background: { func: function () {
            return ki.getStyle("tipBackground") } }, opacity: .6 }, { type: "text", text: { func: function () {
            return Kf.TipHelper.data.text } }, rect: { func: function () {
            return [Kf.TipHelper.data.helperPos.x, Kf.TipHelper.data.helperPos.y, Re[0] * Kf.TipHelper.data.size, Re[1]] } }, color: { func: function () {
            return ki.getStyle("tipTextColor") } }, font: "bold 12px Arial", align: "center" }] };
    var Mr = 7;
    Kf.ShapePoint = { comps: [{ type: "circle", rect: { func: function () {
            var F = Kf.ShapePoint.data;
            return [F, Mr, Mr] } }, background: "#ffffff", borderWidth: 1, borderColor: "#333333" }] }, Kf.ShapeBgCurve = { comps: [{ type: "shape", points: { func: function () {
            return Kf.ShapeBgCurve.data.P } }, segments: { func: function () {
            return Kf.ShapeBgCurve.data.S } }, background: null, borderWidth: 1, borderColor: "#333333" }] };
    var Rl = 8;
    Kf.ShapeHighlighPoint = { comps: [{ type: "circle", rect: { func: function () {
            var O = Kf.ShapeHighlighPoint.data;
            return [
              [O.x, O.y], Rl, Rl
            ] } }, background: "#30599e", borderWidth: 0 }] };
    var Mo = 10;
    Kf.ShapeHighlighRealPoint = { comps: [{ type: "circle", rect: { func: function () {
            var D = Kf.ShapeHighlighRealPoint.data;
            return [
              [D.x, D.y], Mo, Mo
            ] } }, background: "#ffffff", borderWidth: 2, borderColor: "#333333" }] };
    var ah = 3;
    Kf.ShapeHighlightCurve = { comps: [{ type: "shape", points: { func: function () {
            return Kf.ShapeHighlightCurve.data } }, segments: [1, 4], background: null, borderWidth: ah, borderColor: { func: function () {
            return ki.getStyle("curveHighlightColor") } } }] }, Kf.ShapeGuideLine = { comps: [{ type: "shape", points: { func: function () {
            return Kf.ShapeGuideLine.data } }, background: null, borderWidth: 1, borderColor: "red" }] }, Kf.MoveLineGuide = { comps: [{ type: "shape", points: { func: function () {
            return Kf.MoveLineGuide.data } }, background: null, borderWidth: 1, borderColor: "red" }] };
    var nm = 5;
    Kf.MoveLineGuideDistanceH = { comps: [{ type: "shape", points: { func: function () {
            var o = Kf.MoveLineGuideDistanceH.data,
              g = o.x0,
              j = o.y0,
              O = o.x1,
              t = o.y1;
            return [g, j, O, t, g, j - nm, g, j + nm, O, t - nm, O, t + nm] } }, segments: [1, 2, 1, 2, 1, 2], background: null, borderWidth: 1, borderColor: "red" }, { type: "text", text: { func: function () {
            return Math.round(Kf.MoveLineGuideDistanceH.data.dis) } }, rect: { func: function () {
            var p = Kf.MoveLineGuideDistanceH.data;
            return [
              [(p.x0 + p.x1) / 2, p.y0 - 10], 20, 20
            ] } }, color: "red", font: "12px Arial", align: "center" }] }, Kf.MoveLineGuideDistanceV = { comps: [{ type: "shape", points: { func: function () {
            var t = Kf.MoveLineGuideDistanceV.data,
              C = t.x0,
              g = t.y0,
              D = t.x1,
              I = t.y1;
            return [C, g, D, I, C - nm, g, C + nm, g, D - nm, I, D + nm, I] } }, segments: [1, 2, 1, 2, 1, 2], background: null, borderWidth: 1, borderColor: "red" }, { type: "text", text: { func: function () {
            return Math.round(Kf.MoveLineGuideDistanceV.data.dis) } }, rect: { func: function () {
            var O = Kf.MoveLineGuideDistanceV.data;
            return [
              [O.x0 - 10, (O.y0 + O.y1) / 2], 20, 20
            ] } }, color: "red", font: "12px Arial", align: "center" }] };
    var fd = 6;
    Kf.ShapeActivingCtrl = { comps: [{ type: "shape", visible: { func: function () {
            return Kf.ShapeActivingCtrl.data.c1 ? !0 : !1 } }, points: { func: function () {
            var e = Kf.ShapeActivingCtrl.data;
            return [e.point.x, e.point.y, e.c1.x, e.c1.y] } }, segments: [1, 2], background: null, borderWidth: 1, borderColor: "#707070" }, { type: "shape", visible: { func: function () {
            return Kf.ShapeActivingCtrl.data.c2 ? !0 : !1 } }, points: { func: function () {
            var G = Kf.ShapeActivingCtrl.data;
            return [G.point.x, G.point.y, G.c2.x, G.c2.y] } }, segments: [1, 2], background: null, borderWidth: 1, borderColor: "#707070" }, { type: "shape", visible: { func: function () {
            return Kf.ShapeActivingCtrl.data.c1 ? !0 : !1 } }, points: { func: function () {
            var a = Kf.ShapeActivingCtrl.data.c1,
              s = a.x,
              L = a.y,
              q = fd / 2;
            return [s - q, L - q, s - q, L + q, s + q, L + q, s + q, L - q] } }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: { func: function () {
            return ki.getStyle("shapeCtrlPointBackground") } }, borderColor: { func: function () {
            return ki.getStyle("shapeCtrlPointBorderColor") } } }, { type: "shape", visible: { func: function () {
            return Kf.ShapeActivingCtrl.data.c2 ? !0 : !1 } }, points: { func: function () {
            var $ = Kf.ShapeActivingCtrl.data.c2,
              V = $.x,
              f = $.y,
              v = fd / 2;
            return [V - v, f - v, V - v, f + v, V + v, f + v, V + v, f - v] } }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: { func: function () {
            return ki.getStyle("shapeCtrlPointBackground") } }, borderColor: { func: function () {
            return ki.getStyle("shapeCtrlPointBorderColor") } } }] }, Pf.Icons.DrawIcon = function (I, d, E, b) { E.width = E.height = Sb, E.data = b, ki = I, t.Default.drawImage(d, E, 0, 0, Sb, Sb) }, Pf.Icons.MapPoints = function (j, $) {
      for (var J = 0, F = j.length; F > J; J++) j[J] /= $ }, Pf.roundTo = function (N, o, y) {
      var M = Math.abs(N % o);
      return y > M || y > o - M ? o * Math.round(N / o) : N }, Pf.toFixed = function (y) {
      return Math.round(100 * y) / 100 };
    var hb = Pf.Math.Matrix2 = function () { this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0 };
    hb.prototype = {}, hb.prototype.constructor = hb, hb.prototype.set = function (P, X, w, x, m, W) {
      return this.a = P, this.b = X, this.c = w, this.d = x, this.tx = m, this.ty = W, this }, hb.prototype.apply = function (Q, E) { E = E || new Rh;
      var U = Q.x,
        S = Q.y;
      return E.x = this.a * U + this.c * S + this.tx, E.y = this.b * U + this.d * S + this.ty, E }, hb.prototype.applyInverse = function (C, w) { w = w || new Rh;
      var B = 1 / (this.a * this.d + this.c * -this.b),
        z = C.x,
        I = C.y;
      return w.x = this.d * B * z + -this.c * B * I + (this.ty * this.c - this.tx * this.d) * B, w.y = this.a * B * I + -this.b * B * z + (-this.ty * this.a + this.tx * this.b) * B, w }, hb.prototype.translate = function (R, A) {
      return this.tx += R, this.ty += A, this }, hb.prototype.scale = function (M, V) {
      return this.a *= M, this.d *= V, this.c *= M, this.b *= V, this.tx *= M, this.ty *= V, this }, hb.prototype.rotate = function (K) {
      var g = Math.cos(K),
        c = Math.sin(K),
        G = this.a,
        z = this.c,
        J = this.tx;
      return this.a = G * g - this.b * c, this.b = G * c + this.b * g, this.c = z * g - this.d * c, this.d = z * c + this.d * g, this.tx = J * g - this.ty * c, this.ty = J * c + this.ty * g, this }, hb.prototype.append = function (j) {
      var F = this.a,
        G = this.b,
        A = this.c,
        l = this.d;
      return this.a = j.a * F + j.b * A, this.b = j.a * G + j.b * l, this.c = j.c * F + j.d * A, this.d = j.c * G + j.d * l, this.tx = j.tx * F + j.ty * A + this.tx, this.ty = j.tx * G + j.ty * l + this.ty, this }, hb.prototype.setTransform = function (J, Z, D, X, L, P, o, e, B) {
      var h, y, V, c, x, $, E, R, N, k;
      return x = Math.sin(o), $ = Math.cos(o), E = Math.cos(B), R = Math.sin(B), N = -Math.sin(e), k = Math.cos(e), h = $ * L, y = x * L, V = -x * P, c = $ * P, this.a = E * h + R * V, this.b = E * y + R * c, this.c = N * h + k * V, this.d = N * y + k * c, this.tx = J + (D * h + X * V), this.ty = Z + (D * y + X * c), this }, hb.prototype.prepend = function (C) {
      var Q = this.tx;
      if (1 !== C.a || 0 !== C.b || 0 !== C.c || 1 !== C.d) {
        var Z = this.a,
          f = this.c;
        this.a = Z * C.a + this.b * C.c, this.b = Z * C.b + this.b * C.d, this.c = f * C.a + this.d * C.c, this.d = f * C.b + this.d * C.d }
      return this.tx = Q * C.a + this.ty * C.c + C.tx, this.ty = Q * C.b + this.ty * C.d + C.ty, this }, hb.prototype.invert = function () {
      var g = this.a,
        I = this.b,
        L = this.c,
        D = this.d,
        q = this.tx,
        G = g * D - I * L;
      return this.a = D / G, this.b = -I / G, this.c = -L / G, this.d = g / G, this.tx = (L * this.ty - D * q) / G, this.ty = -(g * this.ty - I * q) / G, this }, hb.prototype.identity = function () {
      return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this }, hb.prototype.clone = function () {
      var R = new hb;
      return R.a = this.a, R.b = this.b, R.c = this.c, R.d = this.d, R.tx = this.tx, R.ty = this.ty, R }, hb.prototype.copy = function (d) {
      return d.a = this.a, d.b = this.b, d.c = this.c, d.d = this.d, d.tx = this.tx, d.ty = this.ty, d }, hb.IDENTITY = new hb, hb.TEMP_MATRIX = new hb;
    var Rh = Pf.Math.Vector2 = function (O, S) { "object" == typeof O && (O.x != B ? (S = O.y, O = O.x) : (S = O[1], O = O[0])), this.set(O || 0, S || 0) };
    Rh.prototype = {}, Rh.prototype.constructor = Rh, y.defineProperties(Rh.prototype, { width: { get: function () {
          return this.x }, set: function (F) { this.x = F } }, height: { get: function () {
          return this.y }, set: function (N) { this.y = N } } }), Rh.prototype.clone = function () {
      return new Rh(this.x, this.y) }, Rh.prototype.copy = function (F) {
      return this.set(F.x, F.y), this }, Rh.prototype.equals = function (u) {
      return u.x === this.x && u.y === this.y }, Rh.prototype.set = function (I, m) {
      return this.x = I || 0, this.y = m || (0 !== m ? this.x : 0), this }, Rh.prototype.setScalar = function (c) {
      return this.x = c, this.y = c, this }, Rh.prototype.setX = function (T) {
      return this.x = T || 0, this }, Rh.prototype.setY = function (e) {
      return this.y = e || 0, this }, Rh.prototype.add = function (f) {
      return this.x += f.x, this.y += f.y, this }, Rh.prototype.addVectors = function (A, N) {
      return this.x = A.x + N.x, this.y = A.y + N.y, this }, Rh.prototype.addScalar = function (e) {
      return this.x += e, this.y += e, this }, Rh.prototype.addScaledVector = function (H, G) {
      return this.x += H.x * G, this.y += H.y * G, this }, Rh.prototype.sub = function (c) {
      return this.x -= c.x, this.y -= c.y, this }, Rh.prototype.subScalar = function (u) {
      return this.x -= u, this.y -= u, this }, Rh.prototype.subVectors = function (D, s) {
      return this.x = D.x - s.x, this.y = D.y - s.y, this }, Rh.prototype.multiply = function (b) {
      return this.x *= b.x, this.y *= b.y, this }, Rh.prototype.multiplyScalar = function (G) {
      return this.x *= G, this.y *= G, this }, Rh.prototype.divide = function (A) {
      return this.x /= A.x, this.y /= A.y, this }, Rh.prototype.divideScalar = function (b) {
      return this.multiplyScalar(1 / b) }, Rh.prototype.min = function (Z) {
      return this.x = Math.min(this.x, Z.x), this.y = Math.min(this.y, Z.y), this }, Rh.prototype.max = function (j) {
      return this.x = Math.max(this.x, j.x), this.y = Math.max(this.y, j.y), this }, Rh.prototype.clamp = function (n, c) {
      return this.x = Math.max(n.x, Math.min(c.x, this.x)), this.y = Math.max(n.y, Math.min(c.y, this.y)), this }, Rh.prototype.clampScalar = function () {
      var C, A;
      return function (l, Z) {
        return C === B && (C = new Rh, A = new Rh), C.set(l, l), A.set(Z, Z), this.clamp(C, A) } }(), Rh.prototype.clampLength = function (H, Q) {
      var y = this.length();
      return this.multiplyScalar(Math.max(H, Math.min(Q, y)) / y) }, Rh.prototype.dot = function (r) {
      return this.x * r.x + this.y * r.y }, Rh.prototype.lengthSq = function () {
      return this.x * this.x + this.y * this.y }, Rh.prototype.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y) }, Rh.prototype.normalize = function () {
      return this.divideScalar(this.length()) }, Rh.prototype.angle = function () {
      var H = Math.atan2(this.y, this.x);
      return 0 > H && (H += 2 * Math.PI), H }, Rh.prototype.distanceTo = function (t) {
      return Math.sqrt(this.distanceToSquared(t)) }, Rh.prototype.distanceToSquared = function (Z) {
      var M = this.x - Z.x,
        V = this.y - Z.y;
      return M * M + V * V }, Rh.prototype.isNearEnough = function (C) {
      return this.distanceToSquared(C) < 1e-8 }, Rh.prototype.setLength = function (G) {
      return this.multiplyScalar(G / this.length()) }, Rh.prototype.lerp = function (t, W) {
      return this.x += (t.x - this.x) * W, this.y += (t.y - this.y) * W, this }, Rh.prototype.lerpVectors = function (G, D, F) {
      return this.subVectors(D, G).multiplyScalar(F).add(G) }, Rh.prototype.rotateAround = function (W, C) {
      var f = Math.cos(C),
        j = Math.sin(C),
        r = this.x - W.x,
        N = this.y - W.y;
      return this.x = r * f - N * j + W.x, this.y = r * j + N * f + W.y, this };
    var Od = Pf.Math.Curve = function () { this._curves = [] };
    Od.prototype = {}, Od.prototype.constructor = Od, Od.prototype.createFromHtShape = function (w, b) { b instanceof t.List && (b = b.toArray());
      var W, S, r, Y, q, k, C, j = this,
        f = null,
        K = null,
        h = 0,
        s = Pf.Math.Vector2,
        V = Pf.Math.CubicBezier;
      for (S = 0, r = b.length; r > S; S++) {
        switch (Y = b[S], q = null, Y) {
          case 1:
            K = new s(w[h], w[h + 1]), f = K, h += 2;
            break;
          case 2:
            W = new s(w[h], w[h + 1]), h += 2, q = new V(K, K.clone(), W.clone(), W), K = W;
            break;
          case 3:
            k = new s(w[h], w[h + 1]), W = new s(w[h + 2], w[h + 3]), h += 4, q = new V(K, k.clone().sub(K).multiplyScalar(2 / 3).add(K), k.clone().sub(W).multiplyScalar(2 / 3).add(W), W), K = W;
            break;
          case 4:
            k = new s(w[h], w[h + 1]), C = new s(w[h + 2], w[h + 3]), W = new s(w[h + 4], w[h + 5]), h += 6, q = new V(K, k, C, W), K = W;
            break;
          case 5:
            if (!f) break;
            q = new V(K, K.clone(), f.clone(), f), K = null, f = null }
        q && (q._index = j._curves.length, j._curves.push(q)) } }, Od.prototype.checkPoint = function (S, Z) {
      var T, o, h, p, b, y = this,
        A = y._curves;
      for (T = 0, o = A.length; o > T; T++)
        if (p = A[T], b = p.intersectRect(S, Z, Z), b.length) return h = 0, b.forEach(function (T) { h += T.t }), h /= b.length, S = p.getPointAt(h), S.t = h, { bezier: p, intersection: S } }, Od.prototype.insertKnot = function (R, i) {
      var e = R.insertKnot(i),
        $ = this,
        C = $._curves;
      C.splice(R._index, 1, e[0], e[1]) }, Od.prototype._isCloseEnough = function (e, P) {
      return Math.abs(e.x - P.x) < 1e-6 && Math.abs(e.y - P.y) < 1e-6 }, Od.prototype._isSamePoint = function (c, P) {
      return c === P }, Od.prototype.moveRealPoint = function (Z, i) {
      var t = this,
        D = t._curves,
        H = i.clone().sub(Z);
      D.forEach(function (q) {
        var b = q._p1;
        q._p2, q._p3;
        var U = q._p4;
        t._isSamePoint(b, Z) && (q._p2.add(H), q._p1 = i), t._isSamePoint(U, Z) && (q._p3.add(H), q._p4 = i) }) }, Od.prototype.moveCtrlPoint = function (n, p, h) {
      var T = n[h];
      if (T) {
        var r = this,
          d = r._curves;
        p.clone().sub(T), d.forEach(function (_) {
          var C; "c2" === h ? C = "_p2" : "c1" === h && (C = "_p3"), r._isSamePoint(_[C], T) && (_[C] = p) }), n[h] = p } }, Od.prototype.deleteRealPoint = function (C, I) {
      var u, n, f, D, r, g, A, Z = this,
        b = Z._curves,
        F = {},
        O = [],
        R = Pf.Math.CubicBezier;
      for (n = 0, f = b.length; f > n; n++) u = b[n], D = u._p1, r = u._p2, g = u._p3, A = u._p4, (F[n] || !Z._isSamePoint(D, C)) && (Z._isSamePoint(A, C) ? f > n + 1 && Z._isSamePoint(b[n + 1]._p1, C) && (I || O.push(new R(D, r, b[n + 1]._p3, b[n + 1]._p4))) : O.push(u));
      Z._curves = O }, Od.prototype.findPairs = function (b, G) {
      var j, X, B, Z, s, r, C, M, y = this,
        R = y._curves,
        V = {},
        Y = [];
      for (X = 0, B = R.length; B > X; X++) j = R[X], Z = j._p1, s = j._p2, r = j._p3, C = j._p4, !V[X] && y._isSamePoint(Z, b) && (G ? Y.push({ point: Z, r2: C }) : Y.push({ point: Z, c2: s })), y._isSamePoint(C, b) && (M = G ? { point: C, r1: Z } : { point: C, c1: r }, B > X + 1 && y._isSamePoint(R[X + 1]._p1, b) && (G ? M.r2 = R[X + 1]._p4 : M.c2 = R[X + 1]._p2, V[X + 1] = !0), Y.push(M));
      return Y }, Od.prototype.toHtShape = function () {
      var R = this,
        q = R._curves,
        N = [],
        P = [],
        v = { x: 1 / 0, y: 1 / 0 };
      return q.forEach(function (i) {
        var E = i._p1,
          X = i._p2,
          J = i._p3,
          m = i._p4;
        return R._isCloseEnough(E, v) || (N.push(1), P.push(E.clone())), v = m, R._isCloseEnough(E, X) && R._isCloseEnough(J, m) ? (N.push(2), P.push(m.clone()), void 0) : (N.push(4), P.push(X.clone(), J.clone(), m.clone()), void 0) }), { segments: N, points: P } };
    var Vh = Pf.Math.CubicBezier = function ($, c, e, v) {
      var w = this;
      w._p1 = $, w._p2 = c, w._p3 = e, w._p4 = v };
    Vh.prototype = {}, Vh.prototype.constructor = Vh, Vh.prototype.intersectRect = function (H, e, Q) {
      var M = e / 2,
        i = Q / 2,
        C = H.x,
        I = H.y,
        N = Pf.Math.Vector2,
        r = new N(-M + C, -i + I),
        L = new N(M + C, i + I),
        x = new N(L.x, r.y),
        W = new N(r.x, L.y),
        a = this,
        h = a.intersectLine(r, x),
        Z = a.intersectLine(x, L),
        c = a.intersectLine(L, W),
        s = a.intersectLine(W, r),
        j = h.concat(Z).concat(c).concat(s);
      return j
    }, Vh.prototype.intersectLine = function (v, Z) {
      var J, r, $, o, U, y, g, u, b, T, i, B, S, E = this,
        O = v.clone().min(Z),
        M = v.clone().max(Z);
      o = E._p1, U = E._p2, y = E._p3, g = E._p4, J = o.clone().multiplyScalar(-1), r = U.clone().multiplyScalar(3), $ = y.clone().multiplyScalar(-3), i = J.add(r).add($).add(g), J = o.clone().multiplyScalar(3), r = U.clone().multiplyScalar(-6), $ = y.clone().multiplyScalar(3), T = J.add(r).add($), J = o.clone().multiplyScalar(-3), r = U.clone().multiplyScalar(3), b = J.add(r), u = o.clone(), S = new Pf.Math.Vector2(v.y - Z.y, Z.x - v.x), B = v.x * Z.y - Z.x * v.y;
      for (var G = E.getRoots(S.dot(i), S.dot(T), S.dot(b), S.dot(u) + B), m = new Array, I = 0, V = G.length; V > I; I++) {
        var L = G[I];
        if (!(0 > L || L > 1)) {
          var n = o.clone().lerp(U, L),
            q = U.clone().lerp(y, L),
            j = y.clone().lerp(g, L),
            z = n.lerp(q, L),
            x = q.lerp(j, L),
            P = z.lerp(x, L);
          P.t = L, v.x == Z.x ? O.y <= P.y && P.y <= M.y && m.push(P) : v.y == Z.y ? O.x <= P.x && P.x <= M.x && m.push(P) : P.x >= O.x && P.y >= O.y && P.x <= M.x && P.y <= M.y && m.push(P) } }
      return m }, Vh.prototype.getPointAt = function (M) {
      var a = this,
        T = a._p1,
        G = a._p2,
        g = a._p3,
        k = a._p4,
        s = T.clone().lerp(G, M),
        d = G.clone().lerp(g, M),
        S = g.clone().lerp(k, M),
        L = s.lerp(d, M),
        N = d.lerp(S, M);
      return L.lerp(N, M) }, Vh.prototype.getRoots = function (M, j, I, h) {
      var o, $, V, e, k, F = new Array;
      if (Math.abs(M) < 1e-6) {
        var o = j,
          $ = I / o,
          V = h / o,
          e = $ * $ - 4 * V;
        if (e > 0) {
          var k = Math.sqrt(e);
          F.push(.5 * (-$ + k)), F.push(.5 * (-$ - k)) } else 0 == e && F.push(.5 * -$) }
      j /= M, I /= M, h /= M, o = (3 * I - j * j) / 3, $ = (2 * j * j * j - 9 * I * j + 27 * h) / 27;
      var T = j / 3,
        a = $ * $ / 4 + o * o * o / 27,
        W = $ / 2;
      if (Math.abs(a) <= 1e-6 && (a = 0), a > 0) {
        var S, y, k = Math.sqrt(a);
        S = -W + k, y = S >= 0 ? Math.pow(S, 1 / 3) : -Math.pow(-S, 1 / 3), S = -W - k, S >= 0 ? y += Math.pow(S, 1 / 3) : y -= Math.pow(-S, 1 / 3), F.push(y - T) } else if (0 > a) {
        var q = Math.sqrt(-o / 3),
          p = Math.atan2(Math.sqrt(-a), -W) / 3,
          s = Math.cos(p),
          m = Math.sin(p),
          r = Math.sqrt(3);
        F.push(2 * q * s - T), F.push(-q * (s + r * m) - T), F.push(-q * (s - r * m) - T) } else {
        var S;
        S = W >= 0 ? -Math.pow(W, 1 / 3) : Math.pow(-W, 1 / 3), F.push(2 * S - T), F.push(-S - T) }
      return F }, Vh.prototype._70I = function () {
      var r = this;
      return r._p1.distanceToSquared(r._p2) < 1e-10 && r._p3.distanceToSquared(r._p4) < 1e-10 }, Vh.prototype.insertKnot = function (T) {
      var F = this,
        s = F._p1,
        M = F._p2,
        k = F._p3,
        c = F._p4,
        a = s.clone().lerp(M, T),
        H = M.clone().lerp(k, T),
        i = k.clone().lerp(c, T),
        h = a.clone().lerp(H, T),
        z = H.clone().lerp(i, T),
        $ = h.clone().lerp(z, T);
      return F._70I() ? (s.clone().lerp(c, T), [new Pf.Math.CubicBezier(s, s.clone(), $.clone(), $), new Pf.Math.CubicBezier($, $.clone(), c.clone(), c)]) : [new Pf.Math.CubicBezier(s, a, h, $), new Pf.Math.CubicBezier($, z, i, c)] };
    var We = t.Default.getInternal().ui().EdgeUI,
      Co = { _47O: function (k) {
          var j = this,
            U = Co.getBackups()._47O;
          Pf.inEdit(j.gv) || U.call(j, k) } };
    Pf.Inject.registAsModule(Co, We);
    var Db = t.Default.getInternal().ui().NodeUI,
      Tf = { _47O: function (t) {
          var c = this,
            M = Tf.getBackups()._47O;
          Pf.inEdit(c.gv) || M.call(c, t) }, getSelectWidth: function () {
          var I = this,
            N = I.gv,
            y = I._data;
          if (N.isEditable(y) && Pf.inEdit(N)) return 0;
          var F = Tf.getBackup("getSelectWidth");
          return F.call(I) } };
    Pf.Inject.registAsModule(Tf, Db);
    var tl = t.graph.GraphView,
      Ek = { _editPointSize: function () {
          var d = t.Default.isTouchable,
            X = Pf.getStyle("pointSize");
          return X[d ? 0 : 1] }(), isPointEditable: function (y) {
          var x = this;
          if (Pf.inEdit(x)) return x._pointEditableFunc ? x._pointEditableFunc(y) : !0;
          var b = Ek.getBackup("isPointEditable");
          b.call(x, y) }, isEditable: function (A) {
          var _ = this,
            g = Ek.getBackup("isEditable"),
            R = g.call(_, A);
          if (!Pf.inEdit(_)) return R;
          if (!(A instanceof t.Edge)) return R;
          if (!A.s("2d.editable")) return !1;
          var j = _.getEditableFunc();
          return j ? j(A) : !0 }, _42: function (n, Q) {
          var K = this,
            B = Ek.getBackups()._42;
          if (B.call(K, n, Q), Pf.inEdit(K)) {
            var m = K.getEditInteractor();
            m.drawImpl() } } };
    Pf.Inject.registAsModule(Ek, tl);
    var Ir = t.Default.getInternal().ui().ShapeUI,
      lb = { _47O: function (T) {
          var D = this,
            S = lb.getBackups()._47O;
          Pf.inEdit(D.gv) || S.call(D, T) } };
    Pf.Inject.registAsModule(lb, Ir);
    var Vm = t.graph.DefaultInteractor,
      wk = { handle_mousewheel: function (X) {
          var V = this,
            W = wk.getBackup("handle_mousewheel");
          Pf.inEdit(V.gv) || W.call(V, X) } };
    Pf.Inject.registAsModule(wk, Vm);
    var vo = t.graph.MoveInteractor,
      Ef = { _calcShift: function (y, H) {
          var X = this,
            f = Ef.getBackup("_calcShift"),
            Y = X.gv;
          if (!Pf.inEdit(Y)) return f.call(X, y, H);
          var m = Y.getEditInteractor(),
            e = m.getSubModule("Move").calcShift(y, H, X);
          return e || f.call(X, y, H) }, clear: function (o) {
          var T = this,
            L = Ef.getBackup("clear");
          L.call(T, o);
          var v = T.gv;
          if (Pf.inEdit(v)) {
            var A = v.getEditInteractor();
            A.getSubModule("Move").clear(o) } } };
    Pf.Inject.registAsModule(Ef, vo);
    var sl = Pf.Rect = function (I) { this.catalog = "Rect", this._interactor = I };
    sl.prototype = {}, sl.prototype.constructor = sl, sl.prototype.gatherInfo = function (j, D) {
      var s = this;
      if (1 === D.length) {
        var o = D[0];
        return o instanceof t.Shape && o._70I() ? s.gatherLine(j, o) : o instanceof t.Group && o.isExpanded() ? !1 : s.gatherSingleTarget(j, o) }
      return D.length > 1 ? s.gatherMultiTargets(j, D) : !1 }, sl.prototype.gatherSingleTarget = function (C, O) {
      if (O.getCorners) {
        var s, X = this.info;
        this.target = O, s = this.screenInfo = {};
        var $ = O.getCorners();
        X.LT = new Pf.Math.Vector2($[0]), X.LB = new Pf.Math.Vector2($[1]), X.RB = new Pf.Math.Vector2($[2]), X.RT = new Pf.Math.Vector2($[3]), X.T = X.LT.clone().add(X.RT).divideScalar(2), X.B = X.LB.clone().add(X.RB).divideScalar(2), X.L = X.LT.clone().add(X.LB).divideScalar(2), X.R = X.RT.clone().add(X.RB).divideScalar(2);
        for (var W in X) s[W] = Pf.toScreenPosition(C, X[W]);
        var _ = this._interactor.getStyle("checkSize"),
          B = function (w, J, d) {
            var T = J.clone().sub(w).setLength(-_),
              v = d.clone().sub(w).setLength(-_),
              O = T.add(v).add(w);
            return O };
        return s.rotLT = B(s.LT, s.RT, s.LB), s.rotLB = B(s.LB, s.LT, s.RB), s.rotRB = B(s.RB, s.LB, s.RT), s.rotRT = B(s.RT, s.LT, s.RB), s.rotT = s.rotLT.clone().add(s.rotRT).divideScalar(2), s.rotB = s.rotLB.clone().add(s.rotRB).divideScalar(2), s.rotL = s.rotLT.clone().add(s.rotLB).divideScalar(2), s.rotR = s.rotRT.clone().add(s.rotRB).divideScalar(2), s.rotation = O.getRotation(), !0 } }, sl.prototype.gatherMultiTargets = function (A, l) {
      var j = Pf.Group.findOrCreateGroup(l);
      if (!j) return !1;
      var a = this;
      return a.editing && "rotate" !== a.editing.mode || j.calcInfo(), a.gatherSingleTarget(A, j) }, sl.prototype.gatherLine = function (X, n) { this.target = n;
      var m = this.screenInfo = {},
        M = n.getPoints();
      return m.P1 = Pf.toScreenPosition(X, M.get(0)), m.P2 = Pf.toScreenPosition(X, M.get(1)), !0 }, sl.ResizeKeys = ["LT", "RB", "LB", "RT", "L", "R", "B", "T"], sl.ResizeDirection = [{ x: -1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }], sl.RotateKeys = ["rotLT", "rotRB", "rotLB", "rotRT", "rotL", "rotR", "rotB", "rotT"], sl.prototype.check = function (z, L, x) {
      if (t.Default.isLeftButton(L)) {
        var b = this;
        if (b.editing = null, b.tipInfo = null, b.screenInfo) {
          if (b.screenInfo.P1) return b._checkLine(x);
          var B, m, Z, g = null,
            E = b._interactor,
            R = E.getStyle("checkSize");
          for (m in Pf.Rect.ResizeKeys)
            if (Z = Pf.Rect.ResizeKeys[m], Pf.checkHit(x, b.screenInfo[Z], R)) { g = Z, B = "resize";
              break }
          if (!g) {
            var F = E.getStyle("rotateCheckSize");
            for (m in Pf.Rect.RotateKeys)
              if (Z = Pf.Rect.RotateKeys[m], Pf.checkHit(x, b.screenInfo[Z], F)) { g = Z, B = "rotate";
                break } }
          if (!g) return this._interactor.setCursor("default"), void 0;
          var Q = b.target;
          if ("rotate" === B) { this._interactor.setCursor("crosshair");
            var T = z.lp(L),
              w = Q instanceof Pf.Group ? Q.getAnchor2() : Q.getPosition();
            b.editing = { mode: B, key: g, pos: w, flipY: Q.getScale().y < 0, rotation: Q.getRotation(), hitRot: Math.atan2(T.y - w.y, T.x - w.x) } } else {
            var p = Pf.Rect.ResizeKeys.indexOf(g),
              N = Pf.Rect.ResizeDirection[p],
              W = Math.cos(Q.getRotation()),
              v = Math.sin(Q.getRotation()),
              i = N.x * Math.sign(Q.getScale().x),
              M = N.y * Math.sign(Q.getScale().y),
              l = Math.atan2(-v * i - W * M, W * i - v * M),
              X = (Math.round(l / (Math.PI / 4)) + 8) % 8,
              $ = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][X];
            this._interactor.setCursor($);
            var d = Q.getWidth(),
              y = Q.getHeight(),
              u = Q.getAnchor();
            b.editing = { mode: B, key: g, rect: { x: -d * u.x, y: -y * u.y, width: d, height: y }, anchor: u, matrix: Q.getMatrix() } }
          return g } } }, sl.prototype._checkLine = function (l) {
      var A = this;
      A.screenInfo;
      var Y, b = A._interactor.getStyle("checkSize");
      if (Pf.checkHit(l, A.screenInfo.P1, b)) Y = "P1";
      else {
        if (!Pf.checkHit(l, A.screenInfo.P2, b)) return this._interactor.setCursor("default"), void 0;
        Y = "P2" }
      return A.editing = { mode: "line", key: Y }, Y }, sl.prototype.startEdit = function (V, K) { V.startDragging(K);
      var O = this,
        R = O.editing,
        s = O.target;
      R && "rotate" !== R.mode && ("line" === R.mode || s && 0 === s.getRotation()) && (O._inSmartGuide = !0, O._interactor.rectGuide.gatherRects()) }, sl.prototype._46O = function () {
      var $ = this;
      $.editing = null, $.tipInfo = null, $._inSmartGuide && ($._interactor.rectGuide.clear(), $._inSmartGuide = !1) }, sl.prototype.handleEdit = function (e, Q) {
      var n = this,
        d = n.editing;
      if (d) {
        var H, l, h, K, N, g, I = n.target,
          f = d.key,
          b = d.mode,
          v = n._interactor;
        if ("rotate" === b) {
          var c, L = e.lp(Q),
            G = d.pos,
            M = Math.atan2(L.y - G.y, L.x - G.x);
          if (I instanceof Pf.Group ? c = M - d.hitRot : (M -= d.hitRot, c = d.rotation + M), c %= 2 * Math.PI, 0 > c && (c += 2 * Math.PI), !t.Default.isCtrlDown(Q)) {
            var x, S;
            t.Default.isShiftDown(Q) ? (x = v.getStyle("shiftRotateRound"), S = x / 2) : (x = v.getStyle("rotateRound"), S = v.getStyle("rotateSensitivity")), c = Pf.roundTo(c, x, S) }
          I instanceof Pf.Group ? (M = c - (d.lastRotation || 0), 0 !== M && (I.addRotation(M), d.lastRotation = c)) : I.setRotation(c), c > Math.PI && (c -= 2 * Math.PI);
          var F = 180 * (c / Math.PI);
          F = F.toFixed(2), H = "" + F + "°" } else if ("resize" === b) {
          var J = d.rect;
          K = J.x, N = J.y;
          var r = J.width,
            Y = J.height,
            T = d.anchor,
            O = d.matrix;
          l = e.lp(Q);
          var E, j = t.Default.unionPoint;
          if (n._inSmartGuide && !t.Default.isCtrlDown(Q)) {
            var z; "L" === f || "R" === f ? z = "x" : ("T" === f || "B" === f) && (z = "y"), n._adsorbedToClosest(l, z), g = !0 }
          E = O.tfi(l);
          var u; "LT" === f ? (J = j(E, { x: K + r, y: N + Y }), u = 9) : "T" === f ? (J = j({ x: K, y: E.y }, { x: K + r, y: N + Y }), u = 1) : "RT" === f ? (J = j({ x: K, y: E.y }, { x: E.x, y: N + Y }), u = 33) : "L" === f ? (J = j({ x: E.x, y: N }, { x: K + r, y: N + Y }), u = 8) : "R" === f ? (J = j({ x: K, y: N }, { x: E.x, y: N + Y }), u = 32) : "LB" === f ? (J = j({ x: E.x, y: N }, { x: K + r, y: E.y }), u = 12) : "B" === f ? (J = j({ x: K, y: N }, { x: K + r, y: E.y }), u = 4) : "RB" === f && (J = j({ x: K, y: N }, E), u = 36);
          var $ = O.tf(J.x + J.width * T.x, J.y + J.height * T.y);
          I.setPosition($), I.setSize(J.width, J.height), g && (h = I.getRect(), v.rectGuide.gatherLines({ node: I, x: h.x, y: h.y, w: h.width, h: h.height }, z, u)), H = "" + Math.round(J.width) + " * " + Math.round(J.height) } else if ("line" === b) {
          if (l = e.lp(Q), dl(Q)) {
            var A = I.getPoints(),
              k = "P1" === f ? A.get(1) : A.get(0),
              q = { x: l.x - k.x, y: l.y - k.y },
              X = v.getStyle("shiftLineRotateRound"),
              w = n._shiftDirList;
            if (!w || n._shiftRotateRound !== X) { n._shiftRotateRound = X, n._shiftDirList = w = [];
              for (var i = 0; i < Math.PI; i += X) w.push({ x: P(i), y: s(i) }) }
            for (var D, o = 0, p = 0, Z = w.length; Z > p; p++) {
              var y = w[p],
                V = y.x * q.x + y.y * q.y;
              Math.abs(V) > Math.abs(o) && (o = V, D = y) }
            l = { x: k.x + D.x * o, y: k.y + D.y * o }, v.rectGuide.clear() } else n._inSmartGuide && !t.Default.isCtrlDown(Q) && (n._adsorbedToClosest(l), g = !0);
          I.setPoint("P1" === f ? 0 : 1, l, !0);
          var R = I.getPoints(),
            _ = R.get(0),
            a = R.get(1);
          K = _.x - a.x, N = _.y - a.y, H = " " + Math.round(Math.sqrt(K * K + N * N)) + " ", g && (h = I.getRect(), v.rectGuide.gatherLines({ node: I, x: h.x, y: h.y, w: h.width, h: h.height })) }
        var C = t.Default.getLogicalPoint(Q, v._canvas);
        C.x += Pf.Icons.TipShiftX, C.y += Pf.Icons.TipShiftY, n.tipInfo = { helperPos: C, text: H, size: H.length } } }, sl.prototype._adsorbedToClosest = function (K, T) {
      var o = this,
        _ = o._interactor,
        O = _.rectGuide.findClosest(K, T),
        t = _.gridGuide.findClosest(K, T),
        Z = 1 / 0,
        q = 1 / 0;
      O && (isFinite(O.x) && (Z = O.x), isFinite(O.y) && (q = O.y)), t && (isFinite(t.x) && Math.abs(t.x) < Math.abs(Z) && (Z = t.x), isFinite(t.y) && Math.abs(t.y) < Math.abs(q) && (q = t.y)), isFinite(Z) && (K.x += Z), isFinite(q) && (K.y += q) }, sl.prototype._42 = function (q, c, v) {
      var w = this;
      w.info = {}, w.screenInfo = null;
      var O = w._interactor;
      if (!O.editDetail && w.gatherInfo(c, v)) {
        var o = w.screenInfo;
        o.P1 ? Pf.Icons.DrawIcon(O, q, Pf.Icons.Line, w.screenInfo) : Pf.Icons.DrawIcon(O, q, Pf.Icons.Rect, w.screenInfo), w.tipInfo && Pf.Icons.DrawIcon(O, q, Pf.Icons.TipHelper, w.tipInfo), w.target instanceof Pf.Group && w.target._42(O, q, c) } };
    var He = Pf.Anchor = function (d) { this.catalog = "Anchor", this._interactor = d };
    He.prototype = {}, He.prototype.constructor = He, He.prototype.gatherInfo = function (S, N) {
      var B = this;
      if (1 === N.length) {
        var Q = N[0];
        if (!Q.getAnchor) return;
        if (Q instanceof t.Shape && Q._70I()) return;
        if (Q instanceof t.Group && Q.isExpanded()) return;
        return B.gatherSingleTarget(S, N[0]) }
      return N.length > 1 ? B.gatherMultiTargets(S, N) : !1 }, He.prototype.gatherSingleTarget = function (Z, L) {
      var x = this;
      return x.info.POS = L.getPosition(), x.screenInfo.POS = Pf.toScreenPosition(Z, x.info.POS), x.target = L, !0 }, He.prototype.gatherMultiTargets = function (w, z) {
      var O = this,
        H = Pf.Group.findOrCreateGroup(z);
      return H ? (O.screenInfo.POS = Pf.toScreenPosition(w, H.getAnchor2()), O.target = H, !0) : !1 }, He.prototype.check = function (z, C, G) {
      if (t.Default.isLeftButton(C)) {
        var b = this,
          u = b._interactor;
        if (u.getStyle("anchorMovable") !== !1) { b.editing = null, b.tipInfo = null;
          var r;
          if (b.screenInfo && (r = b.screenInfo.POS) && Pf.checkHit(G, new Pf.Math.Vector2(r), u.getStyle("checkSize"))) {
            if (b.target instanceof Pf.Group) return b.editing = {}, !0;
            var g = b.target,
              n = g.getWidth(),
              w = g.getHeight(),
              N = g.getAnchor();
            return b.editing = { rect: { x: -n * N.x, y: -w * N.y, width: n, height: w }, anchor: N, matrix: g.getMatrix() }, !0 } } } }, He.prototype.startEdit = function (l, C) { l.startDragging(C) }, He.prototype._46O = function () { this.editing = null, this.tipInfo = null }, He.prototype.handleEdit = function (o, A) {
      var C = this,
        w = C.target;
      if (w && C.editing) {
        var Q = o.lp(A);
        if (w instanceof Pf.Group) return w.setAnchor2(Q), C._interactor._42(), void 0;
        var a = C.editing.matrix,
          k = a.tfi(Q),
          f = C.editing.rect,
          F = (k.x - f.x) / f.width,
          U = (k.y - f.y) / f.height;
        if (!t.Default.isCtrlDown(A)) {
          var m = C._interactor.getStyle("anchorRound"),
            g = C._interactor.getStyle("anchorSensitivity");
          F = Pf.roundTo(F, m, g), U = Pf.roundTo(U, m, g) }
        w.setAnchor(F, U, !0);
        var q = t.Default.getLogicalPoint(A, C._interactor._canvas);
        q.x += Pf.Icons.TipShiftX, q.y += Pf.Icons.TipShiftY;
        var O = "" + F.toFixed(2) + ", " + U.toFixed(2);
        C.tipInfo = { helperPos: q, text: O, size: O.length } } }, He.prototype._42 = function (r, p, Q) {
      var x = this;
      x.info = {}, x.screenInfo = {};
      var Z = x._interactor;
      Z.editDetail || x.gatherInfo(p, Q) && Z.getStyle("anchorVisible") !== !1 && (Pf.Icons.DrawIcon(Z, r, Pf.Icons.Anchor, x.screenInfo), x.tipInfo && Pf.Icons.DrawIcon(Z, r, Pf.Icons.TipHelper, x.tipInfo)) };
    var Od = Pf.Curve = function (u) { this.catalog = "Curve", this._interactor = u };
    Od.prototype = {}, Od.prototype.constructor = Od, Od.PointType = { Mirrored: 0, Straight: 1, Disconnected: 2, Asymmetric: 3 }, Od.prototype.setUp = function () {
      var v = this,
        k = v._interactor;
      k && k.gv.mp(v._onGraphviewPropertyChanged, v) }, Od.prototype._onGraphviewPropertyChanged = function (i) {
      ("zoom" === i.property || "translateX" === i.property || "translateY" === i.property) && this._handleDataChanged() }, Od.prototype.tearDown = function () {
      var G = this,
        Q = G._interactor;
      Q && Q.gv.ump(G._onGraphviewPropertyChanged) }, Od.prototype.canEnterEditDetailMode = function () {
      var G = this,
        D = G._interactor._getValidSelection();
      if (1 === D.length) {
        var E = D[0];
        if (E instanceof t.Shape) return G.target = E, !0 } }, Od.prototype.preHandleScroll = function () {
      var c = this.editing;
      return c && c.inEdit ? !0 : void 0 }, Od.prototype.getCurrentSelectintStatus = function () {
      var C = this;
      if (C.activing && !C.activing.selections) {
        if (C.activing.status != B) return C.activing.status;
        var w = function (k) {
            var s = C.activing.status;
            C.activing.status = k, C._interactor.fp("shapePointStatus", s, k) },
          X = Pf.Curve.PointType,
          k = C.activing.point,
          y = C.activing.pairs;
        if (!y || 1 !== y.length) return w(X.Mirrored);
        var v = y[0],
          u = v.c1 && v.c1.isNearEnough(k),
          Q = v.c2 && v.c2.isNearEnough(k);
        if (!v.c1 || !v.c2) return u || Q ? w(X.Straight) : w(X.Disconnected);
        if (u && Q) return w(X.Straight);
        if (u || Q) return w(X.Asymmetric);
        var K = v.c1.clone().sub(k),
          j = v.c2.clone().sub(k);
        return Math.abs(K.x * j.y - K.y * j.x) > 1e-5 || K.x * j.x > 0 ? w(X.Disconnected) : Math.abs(K.length() - j.length()) > 1e-5 ? w(X.Asymmetric) : w(X.Mirrored) } }, Od.prototype.handle_keydown = function (M) {
      var d = this;
      if (d._interactor.editDetail) {
        var f = Pf.Curve.PointType; "1" === M.key ? d.setCurrentSelectionStatus(f.Straight) : "2" === M.key ? d.setCurrentSelectionStatus(f.Mirrored) : "3" === M.key ? d.setCurrentSelectionStatus(f.Disconnected) : "4" === M.key && d.setCurrentSelectionStatus(f.Asymmetric) } }, Od.prototype.setCurrentSelectionStatus = function (u) {
      var M = this;
      if (M.activing) {
        var G = M.getCurrentSelectintStatus();
        if (null !== G && G !== u) { M.activing.status = u;
          var l = M.activing.point,
            e = M.activing.pairs;
          if (e && 1 === e.length) {
            var F = e[0],
              k = M.screenInfo.curve,
              h = Pf.Curve.PointType,
              n = function () { M._writeToShape(), M._interactor.fp("shapePointStatus", G, u) };
            if (u === h.Straight) return k.moveCtrlPoint(F, l, "c1"), k.moveCtrlPoint(F, l, "c2"), n(), void 0;
            if (G === h.Straight) {
              var b = k.findPairs(l, !0),
                q = b[0],
                r = q.r1 || l,
                Y = q.r2 || l,
                v = Y.clone().sub(r).multiplyScalar(.25);
              return k.moveCtrlPoint(F, l.clone().sub(v), "c1"), k.moveCtrlPoint(F, l.clone().add(v), "c2"), n(), void 0 }
            var D = F.c1,
              d = F.c2;
            if (D && d) {
              if (u === h.Mirrored) return k.moveCtrlPoint(F, l.clone().multiplyScalar(2).sub(d), "c1"), n(), void 0;
              if (u === h.Asymmetric && G === h.Disconnected) {
                var m = D.clone().sub(l).length(),
                  v = l.clone().sub(d).setLength(m).add(l);
                return k.moveCtrlPoint(F, v, "c1"), n(), void 0 } }
            M._interactor.fp("shapePointStatus", G, u) } } } }, Od.prototype._handleDataChanged = function (_) {
      var $ = this;
      if ($.screenInfo && $.target) {
        var g = $._interactor;
        $.gatherSingleTarget(g.gv, $.target, !0), $.check(g.gv, null, _ ? g._getLogicalPoint(_) : new Pf.Math.Vector2(g._lastClientPoint)), g._42() } }, Od.prototype.gatherSingleTarget = function (c, d, $) {
      var K, x, A = this;
      A.screenInfo && A.screenInfo.curve && (x = A.screenInfo.curve._curves);
      var o = A.editing;
      K = o ? A.screenInfo : A.screenInfo = {}, K.S = d._58O;
      var T = K.P = [],
        J = A._getShapeMatrix();
      if (d._59O.each(function (G) { G = J.apply(G);
          var V = Pf.toScreenPosition(c, G);
          T.push(V.x, V.y) }), !K.S || !K.S.size()) { K.S = new t.List, K.S.add(1);
        for (var n = 0; n < T.length / 2 - 1; n++) K.S.add(2) }
      if ((!o || $) && A.convertToCubicBezier(x), A.activing && ($ || !A.editing || "realPoint" === A.editing.type)) {
        var v = K.curve.findPairs(A.activing.point);
        A.activing.pairs = v } }, Od.prototype._getShapeMatrix = function () {
      var t = new Pf.Math.Matrix2,
        P = this.target,
        O = P.getPosition();
      return t.translate(-O.x, -O.y).scale(P.getScale().x, P.getScale().y).rotate(P.getRotation()).translate(O.x, O.y), t }, Od.prototype._convertToNewPoint = function (e, w, W) {
      var Z, N, f;
      for (Z = 0, N = w.length; N > Z; Z++) {
        if (f = w[Z], f._p1.isNearEnough(e)) return f._p1;
        if (f._p4.isNearEnough(e)) return f._p4 }
      if (W)
        for (Z = 0, N = Math.min(W.length, N); N > Z; Z++) {
          if (f = W[Z], f._p1 === e) return w[Z]._p1;
          if (f._p4 === e) return w[Z]._p4 } }, Od.prototype.convertToCubicBezier = function (c) {
      var _, v, P = this,
        d = new Pf.Math.Curve,
        N = P.screenInfo;
      if (d.createFromHtShape(N.P, N.S), N.curve = d, P.activing) {
        var G = d._curves;
        if (_ = P.activing.point, v = P._convertToNewPoint(_, G, c), v && (P.activing.point = v), P.activing.selections) {
          var h = -1,
            K = P.activing.selections;
          K.forEach(function (D) { h++, v = P._convertToNewPoint(D, G, c), v && (K[h] = v) }) } } }, Od.prototype.check = function (q, M, C) {
      if (!M || t.Default.isLeftButton(M)) {
        var B = this;
        if (B._interactor.setCursor("default"), B.editing = null, B.highlight = null, B.tipInfo = null, B.screenInfo) {
          if (Vq()) return B._interactor._42(), !0;
          if (B._checkEditCtrlPoint(C)) return B._interactor._42(), !0;
          if (B._checkEditRealPoint(C)) return B._interactor._42(), !0;
          var U = B.screenInfo.curve,
            o = U.checkPoint(C, B._interactor.getStyle("curveIntersectSize"));
          if (o) {
            var J = B.highlight = {};
            J.type = "insertKnot", J.bezier = o.bezier, J.point = o.intersection }
          return B._interactor._42(), !0 } } }, Od.prototype._checkEditRealPoint = function (r) {
      var L, v, $, S, D, c, Q = this,
        X = Q.screenInfo.curve._curves,
        J = Q._interactor.getStyle("curvePointIntersectSize"),
        U = 1 / 0;
      for (J *= J, $ = 0, S = X.length; S > $; $++) L = X[$], D = L._p1, c = r.distanceToSquared(D), U > c && (U = c, v = D), D = L._p4, c = r.distanceToSquared(D), U > c && (U = c, v = D);
      if (U > J) return !1;
      var A = Q.highlight = {};
      return A.type = "changeRealPoint", A.point = v, Q.editing = { type: "realPoint", point: v, shiftGuide: { point: v.clone(), dir: "x", limit: 0 } }, Q._interactor.setCursor("crosshair"), !0 }, Od.prototype._checkEditCtrlPoint = function (L) {
      var z = this;
      if (z.activing && !z.activing.selections) {
        var x = z.getCurrentSelectintStatus();
        if (x !== Pf.Curve.PointType.Straight) {
          var Y = z.activing.pairs;
          if (Y) {
            var g = z._interactor.getStyle("curvePointIntersectSize");
            g *= g;
            var B, y, s, A, q, u, h, Q, f, j = 1 / 0;
            for (h = 0, f = Y.length; f > h; h++)
              for (A = Y[h], Q = 0; 2 > Q; Q++) q = 0 === Q ? "c1" : "c2", A[q] && (u = L.distanceToSquared(A[q]), j > u && (j = u, B = A, y = h, s = q));
            if (j > g) return !1;
            z.activing.hlpair = B, z.activing.hltype = s;
            var i = z.highlight = {};
            return i.type = "changeCtrlPoint", i.point = B[s], z.editing = { type: "ctrlPoint", pair: B, pairId: y, ctrlType: s, direction: B[s].clone().sub(z.activing.point).normalize() }, z._interactor.setCursor("crosshair"), !0 } } } }, Od.prototype.startEdit = function (_, P) { _.startDragging(P);
      var D = this;
      D.highlight && "insertKnot" === D.highlight.type && (D.insertKnot(), D.gatherSingleTarget(D._interactor.gv, D.target), D.activing = null, D._checkEditRealPoint(D._interactor._getLogicalPoint(P)));
      var f = D.highlight,
        T = t.Default.isCtrlDown(P);
      if (!f || Vq()) {
        var K = D._interactor.gv;
        if (!K.setFocus(P) || K._scrolling) return;
        return K.isPannable() && hp(P) && !T && (D._pan = { tx: K.tx(), ty: K.ty() }), void 0 }
      if ("changeRealPoint" === f.type) {
        var m, E = D.activing ? D.activing.point : null,
          d = D.activing ? D.activing.selections : null;
        if (T && D.activing) E === f.point ? (d ? (D.activing = { point: d[0] }, d.length > 1 && (d.splice(0, 1), D.activing.selections = d)) : D.activing = null, D.editing = null) : d && (m = d.indexOf(f.point)) >= 0 ? (d.length > 1 ? d.splice(m, 1) : delete D.activing.selections, D.editing = null) : d ? (d.push(E), D.activing = { point: f.point, selections: d }) : D.activing = { point: f.point, selections: [E] };
        else if (d) E === f.point || ((m = d.indexOf(f.point)) >= 0 ? (d.splice(m, 1, E), D.activing = { point: f.point, selections: d }) : D.activing = { point: f.point });
        else {
          var n;
          E === f.point && (n = D.activing.status), D.activing = { point: f.point }, n && (D.activing.status = n) } } }, Od.prototype.insertKnot = function () {
      var j = this,
        T = j.highlight,
        p = j.screenInfo.curve;
      p.insertKnot(T.bezier, T.point.t), j._writeToShape() }, Od.prototype._writeToShape = function () {
      var L, f, u = this,
        z = u.screenInfo.curve,
        d = z.toHtShape(),
        O = d.points,
        n = [],
        M = d.segments,
        P = u._interactor.gv,
        U = u.target,
        J = u._getShapeMatrix().invert();
      U.getPosition();
      for (var R = 0, b = O.length; b > R; R++) L = O[R], f = Pf.toWorldPosition(P, L), f = J.apply(f), n.push(f);
      u.target._writing = !0, n.length ? (u.target.setSegments(M), u.target.setPoints(n, !0)) : u.target.removeFromDataModel(), delete u.target._writing }, Od.prototype._handlePanning = function (w) {
      var d = this,
        q = d._pan;
      if (q) { q.started = !0;
        var n = d._interactor,
          b = n.gv,
          Z = n._lastClientPoint;
        b.setTranslate(q.tx + w.clientX - Z.x, q.ty + w.clientY - Z.y), d.gatherSingleTarget(n.gv, d.target), n._42() } }, Od.prototype.handleEdit = function (c, O) {
      var n = this,
        U = n.editing;
      if (n._pan) return n._handlePanning(O), void 0;
      if (U) { U.inEdit = !0;
        var k, W = n._interactor._getLogicalPoint(O),
          G = t.Default.isCtrlDown(O),
          l = t.Default.isShiftDown(O);
        if (n._guideInfo = null, "ctrlPoint" === U.type && l) {
          var R = n.editing.direction.clone();
          k = n.activing.point;
          var K = R.dot(W.clone().sub(k));
          W = R.setLength(K).add(k) } else {
          var R;
          if ("realPoint" === U.type && l) {
            var g = n.editing.shiftGuide,
              A = g.point,
              M = Math.abs(W.x - A.x),
              i = Math.abs(W.y - A.y);
            M > i && M > g.limit && "y" === g.dir && (g.dir = "x"), i > M && i > g.limit && "x" === g.dir && (g.dir = "y"), R = g.dir, "x" === R ? (W.y = A.y, g.limit = Math.max(g.limit, M)) : "y" === R && (W.x = A.x, g.limit = Math.max(g.limit, i)) }
          if (!G) {
            var H = n._guidingToEdit(W, R),
              B = "realPoint" === U.type ? n._interactor.gridGuide.findClosest(W, R, !0) : null,
              b = 1 / 0,
              h = 1 / 0;
            B && (B.x && (b = B.x), B.y && (h = B.y));
            var q = !1;
            H && (H.xList && (Math.abs(H.x) <= Math.abs(b) ? (q = !0, b = H.x) : delete H.xList), H.yList && (Math.abs(H.y) <= Math.abs(h) ? (q = !0, h = H.y) : delete H.yList), q && (n._guideInfo = H)), isFinite(b) && (W.x += b), isFinite(h) && (W.y += h), q && (H.v = W) } }
        var L = n.screenInfo.curve;
        if ("realPoint" === U.type) { k = U.point, L.moveRealPoint(k, W), U.point = W, n.highlight.point = W;
          var w = n.activing.status,
            Z = n.activing.selections;
          if (n.activing = { point: W, status: w }, Z) {
            var N = W.clone().sub(k),
              _ = 0;
            Z.forEach(function (h) {
              var d = h.clone().add(N);
              L.moveRealPoint(h, d), Z[_++] = d }), n.activing.selections = Z } } else if ("ctrlPoint" === U.type) {
          var C = n.activing,
            J = C.pairs,
            V = J[U.pairId];
          L.moveCtrlPoint(V, W, U.ctrlType);
          var F = C.status,
            T = Pf.Curve.PointType;
          if ((F === T.Mirrored || F === T.Asymmetric) && V.c1 && V.c2) {
            var k = new Pf.Math.Vector2(C.point),
              Q = "c1" === U.ctrlType ? "c2" : "c1";
            if (F === Pf.Curve.PointType.Mirrored) L.moveCtrlPoint(V, k.clone().multiplyScalar(2).sub(W), Q);
            else if (F === T.Asymmetric) {
              var K = V[Q].clone().sub(k).length(),
                a = k.clone().sub(V[U.ctrlType]).setLength(K).add(k);
              isNaN(a.x) || L.moveCtrlPoint(V, a, Q) } } }
        var z = t.Default.getLogicalPoint(O, n._interactor._canvas);
        z.x += Pf.Icons.TipShiftX, z.y += Pf.Icons.TipShiftY;
        var Y = Pf.toWorldPosition(c, W),
          o = "" + Pf.toFixed(Y.x) + ", " + Pf.toFixed(Y.y);
        n.tipInfo = { helperPos: z, text: o, size: o.length }, n._writeToShape() } }, Od.prototype._guidingToEdit = function (D, R) {
      var t, H, q = this;
      if (t = q.screenInfo.curve) { H = t._curves;
        var i, F, s, U, h, L, v, r, C = 1 / 0,
          J = 1 / 0,
          z = [];
        for (q.editing && "realPoint" === q.editing.type && (r = q.editing.point), h = 0, L = 2 * H.length; L > h; h++) v = H[Math.floor(h / 2)][h % 2 ? "_p4" : "_p1"], z.indexOf(v) >= 0 || (z.push(v), r && r === v || (s = v.x - D.x, U = v.y - D.y, Math.abs(s) < Math.abs(C) ? (C = s, i = [v]) : s === C && i.push(v), Math.abs(U) < Math.abs(J) ? (J = U, F = [v]) : U === J && F.push(v)));
        var O = q._interactor.getStyle("smartGuideSensitivity");
        if ((Math.abs(C) > O || "y" === R) && (i = null), (Math.abs(J) > O || "x" === R) && (F = null), i || F) {
          var u = !1,
            V = {};
          if (i && (u = !0, V.xList = i, V.x = C), F && (u = !0, V.yList = F, V.y = J), u) return V } } }, Od.prototype._46O = function () {
      var T = this;
      T.editing = null, T._guideInfo = null, T._pan = null, T.tipInfo = null }, Od.prototype.handleDelete = function () {
      var o = this;
      if (o.activing && o.screenInfo) {
        var n = t.Default.isShiftDown(),
          s = o.screenInfo.curve;
        s.deleteRealPoint(o.activing.point, n), o.activing.selections && o.activing.selections.forEach(function (Q) { s.deleteRealPoint(Q, n) }), delete o.activing, delete o.editing, delete o.tipInfo, delete o._pan, o._writeToShape(), o._interactor.fp("deleteShapePoint", !1, !0) } }, Od.prototype.handleDoubleClick = function (z) {
      var D = this,
        i = D._interactor._getLogicalPoint(z);
      if (D.screenInfo && D._checkEditRealPoint(i)) {
        var S = D.getCurrentSelectintStatus(),
          g = Pf.Curve.PointType;
        return S = S === g.Mirrored ? g.Straight : g.Mirrored, D.setCurrentSelectionStatus(S), D._interactor._42(), !0 } }, Od.prototype._drawHighlight = function (k) {
      var I = this,
        p = I.highlight;
      if (p) {
        var e = p.bezier,
          Z = I._interactor;
        e && Pf.Icons.DrawIcon(Z, k, Pf.Icons.ShapeHighlightCurve, [e._p1.x, e._p1.y, e._p2.x, e._p2.y, e._p3.x, e._p3.y, e._p4.x, e._p4.y]);
        var g = p.point;
        g && "insertKnot" === p.type && Pf.Icons.DrawIcon(Z, k, Pf.Icons.ShapeHighlighPoint, g) } }, Od.prototype._drawGuide = function (X) {
      var G = this,
        r = G._guideInfo;
      if (r) {
        var N, b, i, m, l = r.v;
        for (N = 0; 2 > N; N++)
          if (m = 0 === N ? r.xList : r.yList)
            for (b = 0, i = m.length; i > b; b++) Pf.Icons.DrawIcon(G._interactor, X, Pf.Icons.ShapeGuideLine, [l.x, l.y, m[b].x, m[b].y]) } }, Od.prototype._drawCurrentPoint = function (J) {
      var K = this;
      if (K.activing) {
        var R = K.activing,
          $ = K.getCurrentSelectintStatus(),
          Q = K._interactor;
        if ($ !== Pf.Curve.PointType.Straight) {
          var B = R.pairs,
            e = R.hlpair,
            Y = R.hltype,
            L = R.selections;
          if (B && !L) {
            var E, k, P;
            for (k = 0, P = B.length; P > k; k++) E = B[k], k === e && E[Y] ? Pf.Icons.DrawIcon(Q, J, Pf.Icons.ShapeActivingCtrl, { point: E.point, c1: E.c1, c2: E.c2, hl: Y }) : Pf.Icons.DrawIcon(Q, J, Pf.Icons.ShapeActivingCtrl, E) } }
        Pf.Icons.DrawIcon(Q, J, Pf.Icons.ShapeHighlighRealPoint, K.activing.point), L && L.forEach(function (s) { Pf.Icons.DrawIcon(Q, J, Pf.Icons.ShapeHighlighRealPoint, s) }) } }, Od.prototype.clear = function () {
      var b = this;
      b.editing = null, b._guideInfo = null, b.activing = null, b.highlight = null }, Od.prototype._42 = function (f) {
      var L = this;
      L.info = {}, L.editing || (L.screenInfo = null);
      var s = L._interactor;
      return s.editDetail ? L.target && L._interactor.gv.isSelected(L.target) && L._interactor.gv.isVisible(L.target) ? (L.gatherSingleTarget(s.gv, L.target), Pf.Icons.DrawIcon(s, f, Pf.Icons.ShapeBgCurve, L.screenInfo), L._drawHighlight(f), L._drawCurrentPoint(f), L._getRealPoint().forEach(function (h) { Pf.Icons.DrawIcon(s, f, Pf.Icons.ShapePoint, h) }), L._drawGuide(f), L.tipInfo && Pf.Icons.DrawIcon(s, f, Pf.Icons.TipHelper, L.tipInfo), void 0) : (s.editDetail = !1, L.clear(), void 0) : (L.clear(), void 0) }, Od.prototype._getRealPoint = function () {
      var z = this.screenInfo,
        L = z.P,
        P = z.S,
        U = -1,
        B = [];
      return P.each(function (D) {
        var v = 1;
        if (3 === D) v = 2;
        else if (4 === D) v = 3;
        else if (5 === D) return;
        U += v, B.push({ x: L[2 * U], y: L[2 * U + 1] }) }), B };
    var ck = Pf.MoveHelper = function (V) {
      var N = this;
      N.catalog = "Move", N._interactor = V };
    ck.prototype = {}, ck.prototype.constructor = ck, ck.prototype.calcShift = function (W, m, w) {
      var g, M, j = this,
        x = j._interactor.gv,
        b = x.lp(m);
      if ("beginMove" === W && j._gatherGridInfo(w._lastLogicalPoint || b), g = j._target) {
        var h = g.downPosition;
        if (h) {
          var e = j._interactor.getStyle("moveSensitivity") / x._zoom;
          if (h.distanceTo(b) < e) return { x: 0, y: 0 };
          delete g.downPosition }
        var T;
        M = t.Default.isShiftDown(m), M && (b = j._dealShiftDown(b), T = g.shiftGuide.dir);
        var Y, X = g.rawPos = { x: g.pos.x + b.x - g.lp.x, y: g.pos.y + b.y - g.lp.y };
        if (t.Default.isCtrlDown(m)) {
          if (Y = j._calcShiftByAddon(), j._target.node instanceof Pf.Group) {
            var z = j._target.node;
            z._position.x += Y.x, z._position.y += Y.y }
          return Y }
        for (var G, q = g.x + X.x, C = g.y + X.y, K = { x: q, y: C }, y = { x: q + g.w / 2, y: C + g.h / 2 }, B = { x: q + g.w, y: C + g.h }, P = j._interactor.rectGuide, U = j._interactor.gridGuide, $ = [P.findClosest(K, T), P.findClosest(y, T), P.findClosest(B, T), U.findClosest(K, T), U.findClosest(y, T), U.findClosest(B, T)], R = 1 / 0, S = 1 / 0, i = 0, E = $.length; E > i; i++) G = $[i], G && (q = G.x, C = G.y, isFinite(q) && Math.abs(q) < Math.abs(R) && (R = q), isFinite(C) && Math.abs(C) < Math.abs(S) && (S = C));
        if (isFinite(R) || (R = 0), isFinite(S) || (S = 0), Y = j._calcShiftByAddon(R, S), j._target.node instanceof Pf.Group) {
          var z = j._target.node;
          z._position.x += Y.x, z._position.y += Y.y }
        var V = g.node,
          o = V instanceof t.Group && V.isExpanded();
        if (!o) {
          var H = X.x + R,
            D = X.y + S;
          j._interactor.rectGuide.gatherLines({ node: V, x: g.x + H, y: g.y + D, w: g.w, h: g.h }, T) }
        return Y } }, ck.prototype._calcShiftByAddon = function (O, j) {
      var S = this._target,
        d = S.rawPos,
        s = S.node.getPosition();
      return O = O || 0, j = j || 0, { x: d.x - s.x + O, y: d.y - s.y + j } }, ck.prototype._dealShiftDown = function (N) {
      var v = this,
        g = v._target.shiftGuide,
        L = v._target.lp,
        C = Math.abs(N.x - L.x),
        u = Math.abs(N.y - L.y);
      C > u && C > g.limit && "y" === g.dir && (g.dir = "x"), u > C && u > g.limit && "x" === g.dir && (g.dir = "y");
      var z = g.dir;
      return "x" === z ? (N.y = L.y, g.limit = Math.max(g.limit, C)) : "y" === z && (N.x = L.x, g.limit = Math.max(g.limit, u)), N }, ck.prototype._gatherGridInfo = function (W) {
      var y, Z = this,
        C = Z._interactor,
        V = C._getValidSelection();
      if (1 === V.length) {
        if (y = V[0], !y.getRect) return Z._target = null, void 0 } else if (y = Pf.Group.findOrCreateGroup(V), !y) return Z._target = null, void 0;
      var r = y.getPosition(),
        S = y.getRect();
      Z._target = { node: y, x: S.x - r.x, y: S.y - r.y, w: S.width, h: S.height, lp: { x: W.x, y: W.y }, pos: { x: r.x, y: r.y }, shiftGuide: { dir: "x", limit: 0 }, downPosition: new Pf.Math.Vector2(W) }, C.rectGuide.gatherRects() }, ck.prototype.clear = function () {
      var W = this;
      W._interactor.rectGuide.clear(), W._interactor._42() };
    var fl = "directional",
      Kb = "point",
      zb = "spot",
      Aj = "light.color";
    ph(r, {
      graph3dViewAttributes: $,
      graph3dViewFirstPersonMode: !1,
      graph3dViewMouseRoamable: !0,
      graph3dViewMoveStep: 15,
      graph3dViewRotateStep: i / 60,
      graph3dViewPannable: !0,
      graph3dViewRotatable: !0,
      graph3dViewWalkable: !0,
      graph3dViewResettable: !0,
      graph3dViewZoomable: !0,
      graph3dViewRectSelectable: !0,
      graph3dViewRectSelectBackground: Nb,
      graph3dViewGridVisible: !1,
      graph3dViewGridSize: 50,
      graph3dViewGridGap: 50,
      graph3dViewGridColor: [.4, .75, .85, 1],
      graph3dViewOriginAxisVisible: !1,
      graph3dViewCenterAxisVisible: !1,
      graph3dViewAxisXColor: [1, 0, 0, 1],
      graph3dViewAxisYColor: [0, 1, 0, 1],
      graph3dViewAxisZColor: [0, 0, 1, 1],
      graph3dViewEditSizeColor: [1, 1, 0, 1],
      graph3dViewOrtho: !1,
      graph3dViewOrthoWidth: 2e3,
      graph3dViewFovy: i / 4,
      graph3dViewNear: 10,
      graph3dViewFar: 1e4,
      graph3dViewEye: [0, 300, 1e3],
      graph3dViewCenter: [0, 0, 0],
      graph3dViewUp: [0, 1, -1e-7],
      graph3dViewHeadlightRange: 0,
      graph3dViewHeadlightColor: [1, 1, 1, 1],
      graph3dViewHeadlightIntensity: 1,
      graph3dViewHeadlightDisabled: !1,
      graph3dViewFogDisabled: !0,
      graph3dViewFogColor: "white",
      graph3dViewFogNear: 1,
      graph3dViewFogFar: 2e3,
      graph3dViewDashDisabled: !0,
      graph3dViewBatchBlendDisabled: !0,
      graph3dViewBatchBrightnessDisabled: !0,
      graph3dViewBatchColorDisabled: !1,
      setShape3dModel: function (a, f) { Lh[a] = f },
      getShape3dModel: function (w) {
        return Lh[w] },
      createMatrix: function (v, Y) { Hq(v) || (v = [v]);
        for (var Z = v.length - 1; Z >= 0; Z--) {
          var s = v[Z];
          Y = Vr(s.mat, s.s3, s.r3, s.rotationMode, s.t3, Y) }
        return Y },
      transformVec: function (G, z) {
        return Wb(G, z) },
      createBoxModel: function () {
        return { vs: pl, ns: vk, uv: yl, is: Gq } },
      createRoundRectModel: function (m, u) {
        return Jh.roundRect(m, u) },
      createStarModel: function (P, W) {
        return Jh.star(P, W) },
      createRectModel: function (N, f) {
        return Jh.rect(N, f) },
      createTriangleModel: function (l, x) {
        return Jh.triangle(l, x) },
      createRightTriangleModel: function (O, z) {
        return Jh.rightTriangle(O, z) },
      createParallelogramModel: function (u, _) {
        return Jh.parallelogram(u, _) },
      createTrapezoidModel: function (Q, s) {
        return Jh.trapezoid(Q, s) },
      createSmoothSphereModel: function (w, i, b, _, P, F, a) {
        return Eo(new Og(w, i, b, _, P, F, a)) },
      createSphereModel: function (J, N, S, w, x, q) {
        return J ? pn(J, N, S, w, x, q) : r.createSmoothSphereModel() },
      createSmoothConeModel: function (l, f, W, r, E) {
        return hi(l, f, W, r, E) },
      createConeModel: function ($, l, v, t, _, Q) {
        return $ ? oj($, l, v, t, _, Q) : hi(Q) },
      createSmoothCylinderModel: function (r, t, V, f, s, Y, o, T) {
        return Eo(new dk(r, t, V, f, s, Y, o, T))
      },
      createCylinderModel: function (G, $, o, H, i, d, Q) {
        return G ? ml(G, $, o, H, i, d, Q) : $d(d, Q) },
      createSmoothTorusModel: function (_, O, Y, s, f, E) {
        return Eo(new Qg(_, O, Y, s, f, E)) },
      createTorusModel: function (R, h, r, s, U, S, M) {
        return R ? Dd(R, h, r, s, U, S, M) : hq(S, M) },
      createExtrusionModel: function (S, H, h, Z, r, G, V, i) {
        return Mb(S, H, h, Z, r, G, V, i) },
      createSmoothRingModel: function (K, u, V, t, N, D) {
        for (var P = [], L = 0; L < K.length - 1; L += 2) P.push({ x: K[L], y: K[L + 1] });
        for (K = Ic(P, u, V)[0], P = [], L = 0; L < K.length; L++) {
          var i = K[L];
          P.push(new up(i.x, 0, i.y)) }
        return Eo(new Jf(P, D, t, N)) },
      createTextGeometry: function ($, T) {
        return Eo(new cn($, T)) },
      loadFontFace: function (L, b) { r.xhrLoad(L, function (F) {
          if (!F) return b();
          var $;
          try { $ = JSON.parse(F) } catch (z) { $ = JSON.parse(F.substring(65, F.length - 2)) }
          _l.loadFace($), b && b($.familyName.toLowerCase()) }, b ? null : { sync: !0 }) },
      createRingModel: function (o, E, D, Q, b, Y, l, u, k, K) {
        for (var G = [], W = 0; W < o.length - 1; W += 2) G.push({ x: o[W], y: o[W + 1] });
        Y = Y || r.shapeSide, l = l || 0, u = u || Y;
        var C, Z, h, n, A, B, d, p, c, q, W, F, N, g, S, V, R, O, H = [],
          e = [],
          I = k ? [] : $,
          y = k ? [] : $,
          w = K ? [] : $,
          M = K ? [] : $,
          z = Q ? [] : $,
          v = Q ? [] : $,
          x = b ? [] : $,
          _ = b ? [] : $,
          o = Ic(G, E, D),
          X = di(o),
          m = 0,
          J = 2 * Math.PI / Y;
        return o.forEach(function (D) {
          if (h = D.length, h > 1) {
            if (n = D[0], Q)
              for (B = n.x, p = n.y, W = l; u > W; W++) F = W + 1, N = W * J, g = F * J, S = s(N), V = P(N), R = s(g), O = P(g), z.push(S * B, p, -V * B, R * B, p, -O * B, 0, p, 0), v.push(.5 - .5 * S, .5 - .5 * V, .5 - .5 * R, .5 - .5 * O, .5, .5);
            for (q = 0; h > q; q++) {
              for (A = D[q], B = n.x, d = A.x, p = n.y, c = A.y, C = m / X, m += Rk(n, A), Z = m / X, W = l; u > W; W++) F = W + 1, N = W * J, g = F * J, S = s(N), V = P(N), R = s(g), O = P(g), H.push(S * d, c, -V * d, R * d, c, -O * d, S * B, p, -V * B, R * d, c, -O * d, R * B, p, -O * B, S * B, p, -V * B), e.push(W / Y, Z, F / Y, Z, W / Y, C, F / Y, Z, F / Y, C, W / Y, C), k && W === l && (I.push(0, p, 0, 0, c, 0, S * d, c, -V * d, S * d, c, -V * d, S * B, p, -V * B, 0, p, 0), y.push(0, .5 - p, 0, .5 - c, 2 * d, .5 - c, 2 * d, .5 - c, 2 * B, .5 - p, 0, .5 - p)), K && F === u && (w.push(0, p, 0, R * d, c, -O * d, 0, c, 0, R * d, c, -O * d, 0, p, 0, R * B, p, -O * B), M.push(1, .5 - p, 1 - 2 * d, .5 - c, 1, .5 - c, 1 - 2 * d, .5 - c, 1, .5 - p, 1 - 2 * B, .5 - p));
              n = A }
            if (b)
              for (B = n.x, p = n.y, W = l; u > W; W++) F = W + 1, N = W * J, g = F * J, S = s(N), V = P(N), R = s(g), O = P(g), x.push(R * B, p, -O * B, S * B, p, -V * B, 0, p, 0), _.push(.5 - .5 * R, .5 + .5 * O, .5 - .5 * S, .5 + .5 * V, .5, .5) } }), { vs: H, uv: e, bottom_vs: x, bottom_uv: _, top_vs: z, top_uv: v, from_vs: I, from_uv: y, to_vs: w, to_uv: M } }
    }, !0), ph(U, { "3d.move.mode": B, "3d.selectable": !0, "3d.visible": !0, "3d.movable": !0, "3d.editable": !0, "shape.border.gradient.color": B, "edge.gradient.color": B, "edge.source.t3": B, "edge.target.t3": B, "light.type": Kb, "light.center": [0, 0, 0], "light.color": [1, 1, 1, 1], "light.disabled": !1, "light.angle": i / 4, "light.range": 0, "light.exponent": 1, "light.intensity": 1, "wf.visible": !1, "wf.width": 1, "wf.color": xb, "wf.short": !1, "wf.mat": B, batch: B, "transparent.mask": !1, brightness: B, "select.brightness": .7, "repeat.uv.length": B, "label.face": il, "label.t3": B, "label.r3": B, "label.texture.scale": 2, "label.rotationMode": yi, "label.light": !1, "label.blend": B, "label.reverse.flip": !1, "label.reverse.color": Xb, "label.reverse.cull": !1, "label.transparent": !1, "label.autorotate": !1, "label2.face": il, "label2.t3": B, "label2.r3": B, "label2.texture.scale": 2, "label2.rotationMode": yi, "label2.light": !1, "label2.blend": B, "label2.reverse.flip": !1, "label2.reverse.color": Xb, "label2.reverse.cull": !1, "label2.transparent": !1, "label2.autorotate": !1, "note.face": il, "note.t3": B, "note.r3": B, "note.texture.scale": 2, "note.rotationMode": yi, "note.light": !1, "note.blend": B, "note.reverse.flip": !1, "note.reverse.color": Xb, "note.reverse.cull": !1, "note.transparent": !1, "note.autorotate": !1, "note2.face": il, "note2.t3": B, "note2.r3": B, "note2.texture.scale": 2, "note2.rotationMode": yi, "note2.light": !1, "note2.blend": B, "note2.reverse.flip": !1, "note2.reverse.color": Xb, "note2.reverse.cull": !1, "note2.transparent": !1, "note2.autorotate": !1, shape3d: B, "shape3d.color": hj, "shape3d.top.color": B, "shape3d.bottom.color": B, "shape3d.from.color": B, "shape3d.to.color": B, "shape3d.image": B, "shape3d.top.image": B, "shape3d.bottom.image": B, "shape3d.from.image": B, "shape3d.to.image": B, "shape3d.light": !0, "shape3d.side": 0, "shape3d.side.from": B, "shape3d.side.to": B, "shape3d.visible": !0, "shape3d.from.visible": !0, "shape3d.to.visible": !0, "shape3d.top.visible": !0, "shape3d.bottom.visible": !0, "shape3d.torus.radius": .17, "shape3d.resolution": 0, "shape3d.blend": B, "shape3d.opacity": B, "shape3d.reverse.flip": !1, "shape3d.reverse.color": Xb, "shape3d.reverse.cull": !1, "shape3d.transparent": !1, "shape3d.uv.offset": B, "shape3d.uv.scale": B, "shape3d.top.uv.offset": B, "shape3d.top.uv.scale": B, "shape3d.bottom.uv.offset": B, "shape3d.bottom.uv.scale": B, "shape3d.from.uv.offset": B, "shape3d.from.uv.scale": B, "shape3d.to.uv.offset": B, "shape3d.to.uv.scale": B, "shape3d.top.cap": B, "shape3d.bottom.cap": B, "shape3d.start.angle": 0, "shape3d.sweep.angle": Q, "shape3d.discard.selectable": !0, "shape3d.top.discard.selectable": !0, "shape3d.bottom.discard.selectable": !0, "shape3d.from.discard.selectable": !0, "shape3d.to.discard.selectable": !0, "shape3d.scaleable": !0, "all.light": !0, "all.visible": !0, "all.color": hj, "all.image": B, "all.blend": B, "all.opacity": B, "all.reverse.flip": !1, "all.reverse.color": Xb, "all.reverse.cull": !1, "all.transparent": !1, "all.uv": B, "all.uv.offset": B, "all.uv.scale": B, "all.discard.selectable": !0, mat: B, "left.mat": B, "right.mat": B, "top.mat": B, "bottom.mat": B, "front.mat": B, "back.mat": B }, !0);
    var Ri, Hd = !1,
      sn = [0, 0, 0, 1 / 255],
      Kc = { left: [1 / 255, 0, 0, 1], right: [2 / 255, 0, 0, 1], top: [3 / 255, 0, 0, 1], bottom: [4 / 255, 0, 0, 1], front: [5 / 255, 0, 0, 1], back: [6 / 255, 0, 0, 1], m: { 1: ci, 2: Fq, 3: xd, 4: qc, 5: il, 6: Vk } },
      Ag = function (c, d, v, t) {
        if (d.getFaceVisible(c, v)) { Ck(d, Pc(c, d.getFaceMat(c, v) || d.getMat(c)));
          var r = d._26I;
          d.getFaceReverseCull(c, v) ? r.enable(r.CULL_FACE) : r.disable(r.CULL_FACE), Cm(r, d._prg.uFixPickReverseColor, Kc[v]), Dn(r), Lo(r, t, 6), Ko(r), Ch(d) } },
      we = function (h) {
        return h instanceof mo },
      rj = function (K) {
        return [K.x, K.e || 0, K.y] },
      Mj = function (f, x, M) {
        for (var x = Sk(x), G = x[0], H = x[1], R = x[2]; M--;) f.push(G, H, R) },
      gg = function (H, c, A) {
        for (var c = Sk(c), b = c[0], r = c[1], O = c[2], l = c[3]; A--;) H.push(b, r, O, l) },
      zg = function (J, h, s) {
        if (h)
          for (var X, o, D, K = h[0], j = h[1], F = h[2], G = h[4], I = h[5], v = h[6], S = h[8], b = h[9], p = h[10], A = h[12], W = h[13], t = h[14], R = s.length, Q = 0, Q = 0; R > Q; Q += 3) X = s[Q], o = s[Q + 1], D = s[Q + 2], J.push(K * X + G * o + S * D + A, j * X + I * o + b * D + W, F * X + v * o + p * D + t);
        else Bi(J, s) },
      Ei = function (c, K) {
        var R = K.s("light.intensity"),
          H = Sk(K.s(Aj)),
          $ = H[0],
          Q = H[1],
          C = H[2];
        1 !== R && ($ *= R, Q *= R, C *= R), c.push($, Q, C, K.s("light.disabled") ? 1 : 0) },
      _q = function (v, w, z) { Cm(w, z.uHeadlightRange, v._headlightRange);
        var K = v._headlightIntensity,
          M = Sk(v._headlightColor);
        1 !== K && (M = [M[0] * K, M[1] * K, M[2] * K]), Cm(w, z.uHeadlightColor, [M[0], M[1], M[2], v._headlightDisabled ? 1 : 0]);
        var I = v._59O,
          N = v._spots,
          L = v._dirs;
        if (I.length) {
          var p = [],
            $ = [],
            O = [];
          I.forEach(function (D) { Ei(p, D), Bi($, D.p3()), O.push(D.s("light.range")) }), w.uniform4fv(z.uPointColor, p), w.uniform1fv(z.uPointRange, O), w.uniform3fv(z.uPointPosition, $) }
        if (N.length) {
          var T = [],
            U = [],
            g = [],
            b = [],
            Z = [],
            a = [];
          N.forEach(function (X) { Ei(T, X), Bi(U, X.p3()), Bi(g, X.s("light.center")), b.push(X.s("light.range")), Z.push(s(X.s("light.angle") / 2)), a.push(X.s("light.exponent")) }), w.uniform4fv(z.uSpotColor, T), w.uniform1fv(z.uSpotRange, b), w.uniform1fv(z.uSpotAngle, Z), w.uniform1fv(z.uSpotExponent, a), w.uniform3fv(z.uSpotPosition, U), w.uniform3fv(z.uSpotCenter, g) }
        if (L.length) {
          var u = [],
            D = [];
          L.forEach(function (l) { Ei(u, l), Bi(D, l.p3()) }), w.uniform4fv(z.uDirColor, u), w.uniform3fv(z.uDirPosition, D) } },
      go = function (h) {
        return h > 0 && 0 === (h - 1 & h) },
      Ki = function (Q) {
        return Q = M(0, v(i, Q)), Q = M(Er, v(i - Er, Q)) },
      Ug = function () {
        return .05 + Y() / 2 },
      kd = function (A, k, w, H) {
        var L, Q = A.getEye();
        return A.isOrtho() ? (L = co(A.getCenter(), Q), L[0] += H[0], L[1] += H[1], L[2] += H[2]) : L = Q, Eh(k, w, H, L) },
      Eh = function (Y, l, b, c) {
        var E = Cc(Y, l),
          i = co(c, b, !0),
          X = Cc(i, l);
        if (N(X) < Er) return $;
        var U = (E - Cc(b, l)) / X;
        return [b[0] + i[0] * U, b[1] + i[1] * U, b[2] + i[2] * U] },
      xh = function (V, G) {
        return { x: 2 * V.x - G.x, y: 2 * V.y - G.y } },
      Ji = function (T, o, V, I) {
        var S, w;
        if (!T) return S = z(o.y - V.y, V.x - o.x), { x: o.x + I * P(S), y: o.y + I * s(S) };
        if (!V) return S = z(T.y - o.y, o.x - T.x), { x: o.x + I * P(S), y: o.y + I * s(S) };
        var v = co([T.x, T.y, 0], [o.x, o.y, 0], !0),
          W = co([V.x, V.y, 0], [o.x, o.y, 0], !0),
          D = -(v[0] + W[0]) / 2,
          d = -(v[1] + W[1]) / 2,
          F = A(D * D + d * d);
        if (Er > F) return S = z(T.y - o.y, o.x - T.x), { x: o.x + I * P(S), y: o.y + I * s(S) };
        var J = T.x - o.x,
          E = T.y - o.y,
          k = V.x - o.x,
          L = V.y - o.y,
          r = A(Math.min(J * J + E * E, k * k + L * L));
        return S = l(Cc(v, W)) / 2, w = v[1] * W[0] - v[0] * W[1] > 0 ? -1 : 1, D /= F, d /= F, F = Math.min(I / P(S), r / s(S)), { x: o.x + w * F * D, y: o.y + w * F * d } },
      uj = function (E) {
        var F = E[1],
          H = E[2],
          h = E[3],
          b = E[6],
          Y = E[7],
          $ = E[11];
        E[1] = E[4], E[2] = E[8], E[3] = E[12], E[4] = F, E[6] = E[9], E[7] = E[13], E[8] = H, E[9] = b, E[11] = E[14], E[12] = h, E[13] = Y, E[14] = $ },
      Ul = function (g) {
        var Y = g[0],
          E = g[1],
          W = g[2],
          K = g[3],
          I = g[4],
          B = g[5],
          k = g[6],
          M = g[7],
          J = g[8],
          u = g[9],
          e = g[10],
          v = g[11],
          f = g[12],
          r = g[13],
          d = g[14],
          q = g[15],
          D = Y * B - E * I,
          S = Y * k - W * I,
          L = Y * M - K * I,
          X = E * k - W * B,
          U = E * M - K * B,
          t = W * M - K * k,
          H = J * r - u * f,
          l = J * d - e * f,
          x = J * q - v * f,
          C = u * d - e * r,
          F = u * q - v * r,
          Z = e * q - v * d,
          j = D * Z - S * F + L * C + X * x - U * l + t * H;
        return j ? (j = 1 / j, g[0] = (B * Z - k * F + M * C) * j, g[1] = (W * F - E * Z - K * C) * j, g[2] = (r * t - d * U + q * X) * j, g[3] = (e * U - u * t - v * X) * j, g[4] = (k * x - I * Z - M * l) * j, g[5] = (Y * Z - W * x + K * l) * j, g[6] = (d * L - f * t - q * S) * j, g[7] = (J * t - e * L + v * S) * j, g[8] = (I * F - B * x + M * H) * j, g[9] = (E * x - Y * F - K * H) * j, g[10] = (f * U - r * L + q * D) * j, g[11] = (u * L - J * U - v * D) * j, g[12] = (B * l - I * C - k * H) * j, g[13] = (Y * C - E * l + W * H) * j, g[14] = (r * S - f * X - d * D) * j, g[15] = (J * X - u * S + e * D) * j, void 0) : $ },
      Sf = function (u, G) {
        if (G) {
          var m = G[0],
            $ = G[1],
            z = G[2];
          u[12] = u[0] * m + u[4] * $ + u[8] * z + u[12], u[13] = u[1] * m + u[5] * $ + u[9] * z + u[13], u[14] = u[2] * m + u[6] * $ + u[10] * z + u[14], u[15] = u[3] * m + u[7] * $ + u[11] * z + u[15] } },
      Fr = function (n, N) {
        if (N) {
          var r = N[0],
            G = N[1],
            A = N[2];
          n[0] = n[0] * r, n[1] = n[1] * r, n[2] = n[2] * r, n[3] = n[3] * r, n[4] = n[4] * G, n[5] = n[5] * G, n[6] = n[6] * G, n[7] = n[7] * G, n[8] = n[8] * A, n[9] = n[9] * A, n[10] = n[10] * A, n[11] = n[11] * A } },
      Ke = function (B, Z, v) {
        var R = Z[0],
          m = Z[1],
          J = Z[2],
          a = Z[3],
          w = Z[4],
          s = Z[5],
          E = Z[6],
          t = Z[7],
          K = Z[8],
          p = Z[9],
          x = Z[10],
          L = Z[11],
          H = Z[12],
          F = Z[13],
          b = Z[14],
          P = Z[15],
          g = v[0],
          f = v[1],
          D = v[2],
          A = v[3];
        return B[0] = g * R + f * w + D * K + A * H, B[1] = g * m + f * s + D * p + A * F, B[2] = g * J + f * E + D * x + A * b, B[3] = g * a + f * t + D * L + A * P, g = v[4], f = v[5], D = v[6], A = v[7], B[4] = g * R + f * w + D * K + A * H, B[5] = g * m + f * s + D * p + A * F, B[6] = g * J + f * E + D * x + A * b, B[7] = g * a + f * t + D * L + A * P, g = v[8], f = v[9], D = v[10], A = v[11], B[8] = g * R + f * w + D * K + A * H, B[9] = g * m + f * s + D * p + A * F, B[10] = g * J + f * E + D * x + A * b, B[11] = g * a + f * t + D * L + A * P, g = v[12], f = v[13], D = v[14], A = v[15], B[12] = g * R + f * w + D * K + A * H, B[13] = g * m + f * s + D * p + A * F, B[14] = g * J + f * E + D * x + A * b, B[15] = g * a + f * t + D * L + A * P, B },
      pf = function (E, J, C, d) {
        var o, Q, q, i, H, G, Z, z, D, p, m = J[0],
          x = J[1],
          c = J[2],
          r = d[0],
          S = d[1],
          k = d[2],
          W = C[0],
          b = C[1],
          g = C[2];
        return N(m - W) < Er && N(x - b) < Er && N(c - g) < Er ? Lm(E) : (Z = m - W, z = x - b, D = c - g, p = 1 / A(Z * Z + z * z + D * D), Z *= p, z *= p, D *= p, o = S * D - k * z, Q = k * Z - r * D, q = r * z - S * Z, p = A(o * o + Q * Q + q * q), p ? (p = 1 / p, o *= p, Q *= p, q *= p) : (o = 0, Q = 0, q = 0), i = z * q - D * Q, H = D * o - Z * q, G = Z * Q - z * o, p = A(i * i + H * H + G * G), p ? (p = 1 / p, i *= p, H *= p, G *= p) : (i = 0, H = 0, G = 0), E[0] = o, E[1] = i, E[2] = Z, E[3] = 0, E[4] = Q, E[5] = H, E[6] = z, E[7] = 0, E[8] = q, E[9] = G, E[10] = D, E[11] = 0, E[12] = -(o * m + Q * x + q * c), E[13] = -(i * m + H * x + G * c), E[14] = -(Z * m + z * x + D * c), E[15] = 1, E) },
      aj = function (E, I, P, b, W) {
        var O = 1 / m(I / 2),
          p = 1 / (b - W);
        return E[0] = O / P, E[1] = 0, E[2] = 0, E[3] = 0, E[4] = 0, E[5] = O, E[6] = 0, E[7] = 0, E[8] = 0, E[9] = 0, E[10] = (W + b) * p, E[11] = -1, E[12] = 0, E[13] = 0, E[14] = 2 * W * b * p, E[15] = 0, E },
      wp = function (D, M, V, G, c, E, O) {
        var Y = 1 / (M - V),
          B = 1 / (G - c),
          e = 1 / (E - O);
        return D[0] = -2 * Y, D[1] = 0, D[2] = 0, D[3] = 0, D[4] = 0, D[5] = -2 * B, D[6] = 0, D[7] = 0, D[8] = 0, D[9] = 0, D[10] = 2 * e, D[11] = 0, D[12] = (M + V) * Y, D[13] = (c + G) * B, D[14] = (O + E) * e, D[15] = 1, D },
      Rd = function (I, Z) {
        var l = Z[0],
          M = Z[1],
          Q = Z[2],
          N = Z[3],
          P = l * l + M * M + Q * Q + N * N,
          o = P ? 1 / P : 0;
        return I[0] = -l * o, I[1] = -M * o, I[2] = -Q * o, I[3] = N * o, I },
      Ob = function (C, x) {
        var X = x[0] + x[5] + x[10],
          R = 0;
        return X > 0 ? (R = 2 * Math.sqrt(X + 1), C[3] = .25 * R, C[0] = (x[6] - x[9]) / R, C[1] = (x[8] - x[2]) / R, C[2] = (x[1] - x[4]) / R) : x[0] > x[5] & x[0] > x[10] ? (R = 2 * Math.sqrt(1 + x[0] - x[5] - x[10]), C[3] = (x[6] - x[9]) / R, C[0] = .25 * R, C[1] = (x[1] + x[4]) / R, C[2] = (x[8] + x[2]) / R) : x[5] > x[10] ? (R = 2 * Math.sqrt(1 + x[5] - x[0] - x[10]), C[3] = (x[8] - x[2]) / R, C[0] = (x[1] + x[4]) / R, C[1] = .25 * R, C[2] = (x[6] + x[9]) / R) : (R = 2 * Math.sqrt(1 + x[10] - x[0] - x[5]), C[3] = (x[1] - x[4]) / R, C[0] = (x[8] + x[2]) / R, C[1] = (x[6] + x[9]) / R, C[2] = .25 * R), C },
      wc = function (N, O, T) {
        var b = O[0],
          E = O[1],
          u = O[2],
          Y = O[3],
          x = b + b,
          U = E + E,
          z = u + u,
          Z = b * x,
          D = b * U,
          R = b * z,
          L = E * U,
          o = E * z,
          s = u * z,
          i = Y * x,
          r = Y * U,
          l = Y * z;
        return N[0] = 1 - (L + s), N[1] = D + l, N[2] = R - r, N[3] = 0, N[4] = D - l, N[5] = 1 - (Z + s), N[6] = o + i, N[7] = 0, N[8] = R + r, N[9] = o - i, N[10] = 1 - (Z + L), N[11] = 0, N[12] = T[0], N[13] = T[1], N[14] = T[2], N[15] = 1, N },
      If = function (I, Y) {
        return pf(Y ? Y : Ti(), I._eye, I._center, I._up) },
      Ep = function (T) {
        var x = T.getAspect(),
          B = T._near,
          M = T._far,
          W = Ti();
        if (T._ortho) {
          var L = T._orthoWidth / 2,
            y = L / x;
          wp(W, -L, L, -y, y, B, M) } else aj(W, T._fovy, x, B, M);
        return W },
      am = function (c, h) {
        if (!c) return $;
        var W = 0,
          T = 1,
          F = 2,
          P = [],
          g = 0,
          M = c.length,
          I = M / 3;
        if (h) {
          for (; M > g; g++) P[g] = 0;
          for (g = 0; g < h.length; g += 3) {
            var o = [],
              n = [],
              X = [];
            o[W] = c[3 * h[g + 1] + W] - c[3 * h[g] + W], o[T] = c[3 * h[g + 1] + T] - c[3 * h[g] + T], o[F] = c[3 * h[g + 1] + F] - c[3 * h[g] + F], n[W] = c[3 * h[g + 2] + W] - c[3 * h[g + 1] + W], n[T] = c[3 * h[g + 2] + T] - c[3 * h[g + 1] + T], n[F] = c[3 * h[g + 2] + F] - c[3 * h[g + 1] + F], X[W] = o[T] * n[F] - o[F] * n[T], X[T] = o[F] * n[W] - o[W] * n[F], X[F] = o[W] * n[T] - o[T] * n[W];
            for (var e = 0; 3 > e; e++) P[3 * h[g + e] + W] += X[W], P[3 * h[g + e] + T] += X[T], P[3 * h[g + e] + F] += X[F] } } else
          for (g = 0; I > g; g += 3) {
            var o = [],
              n = [],
              X = [];
            o[W] = c[3 * (g + 1) + W] - c[3 * g + W], o[T] = c[3 * (g + 1) + T] - c[3 * g + T], o[F] = c[3 * (g + 1) + F] - c[3 * g + F], n[W] = c[3 * (g + 2) + W] - c[3 * (g + 1) + W], n[T] = c[3 * (g + 2) + T] - c[3 * (g + 1) + T], n[F] = c[3 * (g + 2) + F] - c[3 * (g + 1) + F], X[W] = o[T] * n[F] - o[F] * n[T], X[T] = o[F] * n[W] - o[W] * n[F], X[F] = o[W] * n[T] - o[T] * n[W];
            for (var e = 0; 3 > e; e++) P[3 * (g + e) + W] = X[W], P[3 * (g + e) + T] = X[T], P[3 * (g + e) + F] = X[F] }
        for (g = 0; M > g; g += 3) {
          var q = [];
          q[W] = P[g + W], q[T] = P[g + T], q[F] = P[g + F];
          var x = A(q[W] * q[W] + q[T] * q[T] + q[F] * q[F]);
          0 === x && (x = Er), q[W] = q[W] / x, q[T] = q[T] / x, q[F] = q[F] / x, P[g + W] = q[W], P[g + T] = q[T], P[g + F] = q[F] }
        return new gj(P) },
      yj = function (f, h, g) {
        if (g || (g = f.createTexture()), h) {
          var e = f.TEXTURE_2D,
            N = f.LINEAR,
            C = f.REPEAT,
            B = f.CLAMP_TO_EDGE,
            n = f.TEXTURE_MIN_FILTER;
          Il(f, g), f.texImage2D(e, 0, f.RGBA, f.RGBA, f.UNSIGNED_BYTE, h), ak(f, f.TEXTURE_MAG_FILTER, N), go(h.width) && go(h.height) ? (ak(f, f.TEXTURE_WRAP_S, C), ak(f, f.TEXTURE_WRAP_T, C), ak(f, n, f.LINEAR_MIPMAP_LINEAR), f.generateMipmap(e)) : (ak(f, f.TEXTURE_WRAP_S, B), ak(f, f.TEXTURE_WRAP_T, B), ak(f, n, N)), Il(f, $) }
        return g },
      Tq = function (p, L) {
        var R = new Uint8Array(3);
        return L = L || p.createTexture(), Il(p, L), ak(p, p.TEXTURE_MIN_FILTER, p.LINEAR), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 1, 1, 0, p.RGB, p.UNSIGNED_BYTE, R), L },
      Kq = function (m) { m._26I && m._prg && (m._26I.deleteProgram(m._prg), m._prg = $) },
      ge = function (z, Y, W, f) {
        var G = z.createShader(W);
        return z.shaderSource(G, f), z.compileShader(G), z.attachShader(Y, G), G },
      fi = function (j) {
        return j.createBuffer() },
      Il = function (r, Q) { r.bindTexture(r.TEXTURE_2D, Q) },
      So = function (R, O) { R.bindFramebuffer(R.FRAMEBUFFER, O) },
      ak = function (q, d, X) { q.texParameteri(q.TEXTURE_2D, d, X) },
      El = function (p, i) {
        if (i) {
          var i = Sk(i);
          p.clearColor(i[0], i[1], i[2], i[3]) } },
      Pe = function (C, g) { Cm(C, g.uFix, !0), to(C, g.aNormal) },
      Nf = function (i, H) { Cm(i, H.uFix, !1), Fe(i, H.aNormal) },
      Oc = function (A, h, Y, d, i, D, N, I) { A._picking || (Y ? (Cm(A, h.uBlend, !0), Cm(A, h.uBlendColor, Y)) : Cm(A, h.uBlend, !1), Cm(A, h.uLight, d == $ ? !0 : d), Ng(i) && 1 !== i && Cm(A, h.uPartOpacity, i), Cm(A, h.uReverseFlip, D == $ ? !1 : D), Cm(A, h.uFixPickReverseColor, N || Xb)), I ? A.enable(A.CULL_FACE) : A.disable(A.CULL_FACE) },
      xo = function (u, P) { u._picking || Cm(u, P.uPartOpacity, 1) },
      Dn = function (n, u, K, V, r, A, s, C) {
        if (!K) return Il(n, n._emptyTexture), void 0;
        Cm(n, u.uTexture, !0), Cm(n, u.uDiscardSelectable, bl(V) ? V : !0), Fe(n, u.aUv), yp(n, r, A, u.aUv, 2), n.activeTexture(n.TEXTURE0), Il(n, K), n.uniform1i(u.uSampler, 0);
        var E = [0, 0, 1, 1];
        s && (E[0] = s[0], E[1] = s[1]), C && (E[2] = C[0], E[3] = C[1]), Cm(n, u.uOffsetScale, E) },
      Ko = function (T, g, z) { Il(T, $), z && (to(T, g.aUv), Cm(T, g.uTexture, !1)) },
      wj = function (z, d, u, f, c, K) {!u || F || D || z.lineWidth(u), f && !z._picking && Cm(z, d.uFixPickReverseColor, f), c && yp(z, c, K, d.aPosition) },
      Zc = function (Y, X, x, z) { Ri && (z = Y[Ri]), Y.drawArrays(z == $ ? Y.TRIANGLES : z, X, x) },
      Lo = function (u, w, s, q) { Ri && (q = u[Ri]), u.drawElements(q == $ ? u.TRIANGLES : q, s, u.UNSIGNED_SHORT, w == $ ? 0 : 2 * w) },
      yp = function (M, N, x, S, m) {
        var e = M.ARRAY_BUFFER;
        M.bindBuffer(e, N), x && M.bufferData(e, x, M.STATIC_DRAW), S != $ && M.vertexAttribPointer(S, m ? m : 3, M.FLOAT, !1, 0, 0) },
      As = function (e, $, y) {
        var S = e.ELEMENT_ARRAY_BUFFER;
        e.bindBuffer(S, $), y && e.bufferData(S, y, e.STATIC_DRAW) },
      Cm = function (b, J, Y) {
        if (Y != $ && J != $) { Y = Sk(Y);
          var X = Y.length;
          3 === X ? b.uniform3fv(J, Y) : 4 === X ? b.uniform4fv(J, Y) : 16 === X ? b.uniformMatrix4fv(J, !1, Y) : bl(Y) ? b.uniform1i(J, Y ? 1 : 0) : 2 === X ? b.uniform2fv(J, Y) : b.uniform1f(J, Y) } },
      Fe = function (I, u) { u != $ && u >= 0 && I.enableVertexAttribArray(u) },
      to = function (X, m) { m != $ && m >= 0 && X.disableVertexAttribArray(m) },
      Ch = function (m, o) {
        var V = m.getGL(),
          Q = m._prg;
        m._7O = m._8O.pop(), o && (Cm(V, Q.uMVMatrix, m._7O), m._6O = o, Cm(V, Q.uNMatrix, o)) },
      re = function (h, n) {
        return n || (n = Ti()), Xd(n, h), Ul(n), uj(n), n },
      Ck = function (H, V) {
        var o = H.getGL(),
          J = H._prg,
          C = H._7O;
        V && (H._8O.push(Vb(C)), Ke(C, C, V)), Cm(o, J.uMVMatrix, C), Cm(o, J.uNMatrix, re(C, H._6O)) },
      Ll = function (C, j, L, z, p, i) {
        if (L) {
          if (z) {
            var y = L.value++,
              Z = [(255 & y >> 24) / 255, (255 & y >> 16) / 255, (255 & y >> 8) / 255, (255 & y) / 255];
            L[y] = { data: p, part: i } } else Z = sn;
          return Cm(C, j.uFixPickReverseColor, Z), Z } },
      qf = function () {
        var E = { center: function (G, S, X, P, b) {
            var k = S[1] / 2,
              v = { x: -S[0] / 2, y: k, width: S[0], height: S[1] },
              N = Ye(G, v, X);
            return [N.x + P, 2 * k - N.y - b, Ug()] }, front: function (O, n, o, b, Q) {
            var A = n[1] / 2,
              U = { x: -n[0] / 2, y: A, width: n[0], height: n[1] },
              L = Ye(O, U, o);
            return [L.x + b, 2 * A - L.y - Q, n[2] / 2 + Ug()] }, back: function (P, C, k, j, M) {
            var y = C[0] / 2,
              E = C[1] / 2,
              x = { x: y, y: E, width: C[0], height: C[1] },
              L = Ye(P, x, k);
            return [2 * y - L.x - j, 2 * E - L.y - M, -C[2] / 2 - Ug()] }, left: function (J, r, v, p, I) {
            var b = r[1] / 2,
              B = { x: -r[2] / 2, y: b, width: r[2], height: r[1] },
              y = Ye(J, B, v);
            return [-r[0] / 2 - Ug(), 2 * b - y.y - I, y.x + p] }, right: function (J, K, c, z, q) {
            var _ = K[2] / 2,
              L = K[1] / 2,
              k = { x: _, y: L, width: K[2], height: K[1] },
              d = Ye(J, k, c);
            return [K[0] / 2 + Ug(), 2 * L - d.y - q, 2 * _ - d.x - z] }, top: function (H, u, W, e, k) {
            var m = { x: -u[0] / 2, y: -u[2] / 2, width: u[0], height: u[2] },
              j = Ye(H, m, W);
            return [j.x + e, u[1] / 2 + Ug(), j.y + k] }, bottom: function ($, b, o, O, I) {
            var X = b[2] / 2,
              y = { x: -b[0] / 2, y: X, width: b[0], height: b[2] },
              q = Ye($, y, o);
            return [q.x + O, -b[1] / 2 - Ug(), 2 * X - q.y - I] } };
        return function ($, J, n, I, z, G) {
          return E[I]($, J, n, z || 0, G || 0) } }(),
      Zn = function (W, I, N, h, Z, B, J, E, U, R) {
        if (Z && (I[0] += Z[0], I[1] += Z[1], I[2] += Z[2]), Sf(W, N), E) {
          var u = Ti();
          if (Tk(u, U, R), Wb(I, u), Sf(W, I), W.auto = E, W.pos = Wb([0, 0, 0], W), B) {
            var t = W.mat2 = Ti();
            Tk(t, B, J) } } else Tk(W, U, R), Sf(W, I), h === ci ? rg(W, -S) : h === Fq ? rg(W, S) : h === xd ? hk(W, -S) : h === qc ? hk(W, S) : h === Vk && rg(W, i), Tk(W, B, J);
        return W },
      Yk = function (W, l) {
        var J = l.auto,
          Q = l.mat2,
          N = W.gv;
        if (J) {
          var c, r = Ti(),
            a = [0, 0, 0, 0];
          c = "string" == typeof J ? [J.indexOf("x") < 0 ? N._eye[0] : N._center[0], J.indexOf("y") < 0 ? N._eye[1] : N._center[1], J.indexOf("z") < 0 ? N._eye[2] : N._center[2]] : N._eye, Ob(a, pf(Ti(), c, N._center, N._up)), wc(r, Rd(a, a), l.pos), Q && Ke(r, r, Q), Ck(N, r) } else Ck(N, l) },
      tb = function (p, z, B, Z, $) {
        var j = p.s,
          C = p.gv,
          e = C.getGL(),
          Y = C._prg,
          L = C._buffer,
          F = C._1O;
        yj(e, dh, F), Yk(p, B), Oc(e, Y, j(z + ".blend"), j(z + ".light"), j(z + ".opacity"), j(z + ".reverse.flip"), j(z + ".reverse.color"), j(z + ".reverse.cull")), Dn(e, Y, F, $, L.uv, Fd), yp(e, L.vs, Z, Y.aPosition), yp(e, L.ns, fm, Y.aNormal), As(e, L.is, Tn), Lo(e, 0, Tn.length), Ko(e, Y, F), xo(e, Y), Ch(C) },
      cr = function (W, k, H) {
        var p = W.gv,
          E = W.data,
          x = W[k] = { blend: p.getBodyColor(E) || p.getFaceBlend(E, k), light: p.getFaceLight(E, k), color: p.getFaceColor(E, k), opacity: p.getFaceOpacity(E, k), transparent: p.getFaceTransparent(E, k), reverseFlip: p.getFaceReverseFlip(E, k), reverseColor: p.getFaceReverseColor(E, k), reverseCull: p.getFaceReverseCull(E, k), texture: p.getFaceImage(E, k), discardSelectable: p.getFaceDiscardSelectable(E, k) };
        if ("csg" !== k) { x.uv = p.getFaceUv(E, k) || H && H[k + "Uv"], x.uvScale = p.getFaceUvScale(E, k) || H && H[k + "UvScale"], x.uvOffset = p.getFaceUvOffset(E, k) || H && H[k + "UvOffset"];
          var d = p.getFaceMat(E, k);
          d && (x.mat = Pc(E, d)) }
        return x },
      Ld = function (q, T, K, j, Y) {
        if (j) {
          if (!Y(j.transparent)) return;
          var h = q.data,
            t = q.gv,
            S = t._buffer,
            R = t.getTexture(j.texture, h);
          Dn(T, K, R, j.discardSelectable, S.uv, j.tuv, j.uvOffset, j.uvScale), Oc(T, K, j.blend, j.light, j.opacity, j.reverseFlip, j.reverseColor, j.reverseCull), Cm(T, K.uDiffuse, j.color), yp(T, S.vs, j.vs, K.aPosition), yp(T, S.ns, j.ns, K.aNormal), Zc(T, 0, j.vs.length / 3), xo(T, K), Ko(T, K, R) } },
      xc = function (x, Y, J, L, n, q) {
        var m, a, e, k, z, D, s, u, r, N, w, A = [L - Y, n - J],
          H = x ? x.length : 0;
        for (e = 0; H > e; e++) {
          for (k = 2, m = x[e], z = m[0], D = m[1]; k + 1 < m.length;) {
            if (s = m[k], u = m[k + 1], a = sf(Y, J, L, n, z, D, s, u, !0)) { r = [s - z, u - D], N = Rk(r), r[0] /= N, r[1] /= N, N = Cc(A, r), N = N > 0 ? q : -q, w = [r[0] * N, r[1] * N];
              break }
            z = s, D = u, k += 2 }
          if (w) break }
        if (w)
          for (L = Y + w[0], n = J + w[1], e = 0; H > e; e++)
            for (k = 2, m = x[e], z = m[0], D = m[1]; k + 1 < m.length;) {
              if (s = m[k], u = m[k + 1], a = sf(Y, J, L, n, z, D, s, u, !0)) return [0, 0];
              z = s, D = u, k += 2 }
        return w ? w : [L - Y, n - J] },
      Dk = t.graph3d = {},
      Mi = function (Z, p, N) { Xk(e + ".graph3d." + Z, p, N) },
      Sg = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
      Uf = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
    ph(r, { setBatchInfo: function (a, C) { Yg[a] = C }, getBatchInfo: function (r) {
        return Yg[r] } }, !0);
    var ur = [1, 1, 1],
      cc = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
      ps = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
      Tj = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
      Nm = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
      gm = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
      Se = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
      Yo = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
      Rj = function (Z, s) { Aq(Z, s), zj(Z, s, "_wireframeModelMap", "_wireframeIndexMap"), zj(Z, s, "_polylineModelMap", "_polylineIndexMap") },
      Aq = function (V, h) {
        if (h) {
          var S, W, d = h._id,
            A = V._33O,
            e = V._34O,
            u = e[d];
          if (u) { W = u.batch, S = A[W];
            var z = u.begin,
              b = u.size,
              D = 3 * z,
              J = 3 * b,
              Z = 4 * z,
              P = 4 * b,
              Q = S.vs,
              T = S.uv,
              O = S.cs,
              y = S.bs,
              H = S.rs,
              i = S.ds,
              f = u.index;
            if (S.invalidate = !0, delete e[d], i.splice(f, 1), lr(i)) delete A[W];
            else {
              for (; f < i.length; f++) u = e[i[f]._id], u.index--, u.begin -= b;
              Q.splice(D, J), S.ns.splice(D, J), S.ps.splice(Z, P), T && T.splice(2 * z, 2 * b), O && O.splice(Z, P), y && y.splice(D, J), H && H.splice(z, b) } } } else V._34O = {}, V._33O = {} },
      zj = function (Q, v, _, I) {
        if (v) {
          var j, m, S = v._id,
            i = Q[_],
            H = Q[I],
            y = H[S];
          if (y) { m = y.batch, j = i[m];
            var w = y.begin,
              k = y.size,
              c = 3 * w,
              Z = 3 * k,
              f = 4 * w,
              M = 4 * k,
              Y = j.ds,
              b = y.index;
            if (j.invalidate = !0, delete H[S], Y.splice(b, 1), lr(Y)) delete i[m];
            else {
              for (; b < Y.length; b++) y = H[Y[b]._id], y.index--, y.begin -= k;
              j.vs.splice(c, Z), j.cs.splice(f, M), j.ps.splice(f, M), j.ls && j.ls.splice(w, k) } } } else Q[_] = {}, Q[I] = {} },
      gi = function (w, Z, V, g) {
        if (!g) return $;
        var l = Z[g];
        if (!l) {
          var j = Yg[g] || Oi,
            Y = j.image ? [] : $;
          l = Z[g] = { vs: [], ns: [], uv: Y, cs: Y ? $ : j.color ? $ : [], bs: j.blend ? [] : $, ps: [], rs: j.brightness ? [] : $, ds: [] } }
        return l.invalidate = !0, w[V._id] = { index: l.ds.length, begin: l.vs.length / 3, batch: g }, l.ds.push(V), l },
      mn = function (f, Q) {
        return Q != $ && 1 !== Q ? [f[0] * Q, f[1] * Q, f[2] * Q, f[3]] : f },
      Wm = function (w, v, m) {
        var U = w.getBrightness(v),
          C = Sk(m.color || "white"),
          T = C[3] < 1,
          $ = Math.ceil(m.width) || 1,
          z = (T ? "T" : "O") + $,
          q = w._wireframeIndexMap,
          H = w._wireframeModelMap,
          n = H[z];
        n || (n = H[z] = { vs: [], cs: [], ps: [], ds: [], T: T, W: $ }), n.invalidate = !0;
        var b = n.vs,
          t = n.cs,
          k = n.ds,
          G = q[v._id] = { index: k.length, begin: b.length / 3, batch: z };
        k.push(v), zg(b, Pc(v, m.mat), m.short ? fk : Wf);
        var W = G.size = b.length / 3 - G.begin;
        gg(t, mn(C, U), W) },
      xi = function (R, m, P, D, _, L, q, n, s) {
        var J = R.getBrightness(m);
        J == $ && (J = 1);
        var Y = mn(Sk(D), J),
          h = Y[3] < 1;
        L = Math.ceil(L) || 1;
        var l = (h ? "T" : "O") + L;
        if (q) {
          var W = q[0],
            i = (q[1] || W) + W;
          l += "-" + W + "-" + i, s && (l += "-" + zh(s) + "-" + J, s = mn(Sk(s), J)) }
        var E = R._polylineIndexMap,
          t = R._polylineModelMap,
          j = t[l];
        j || (j = t[l] = { vs: [], cs: [], ps: [], ds: [], ls: q ? [] : $, T: h, W: L }, q && (j.D = W, j.G = i, j.A = s)), j.invalidate = !0;
        var z, G = j.vs,
          Z = j.cs,
          e = j.ds,
          C = j.ls,
          b = E[m._id] = { index: e.length, begin: G.length / 3, batch: l };
        e.push(m), Bi(G, P);
        var K, F = b.size = G.length / 3 - b.begin,
          a = P.length,
          O = 0,
          w = [];
        if (q || _)
          for (z = 0; a > z; z += 6) K = Rk([P[z], P[z + 1], P[z + 2]], [P[z + 3], P[z + 4], P[z + 5]]), w.push(K), O += K;
        if (O && _) {
          var v, p = mn(Sk(_), J),
            U = [p[0] - Y[0], p[1] - Y[1], p[2] - Y[2], p[3] - Y[3]],
            S = 0;
          for (z = 0; a > z; z += 6) v = S / O, gg(Z, [Y[0] + U[0] * v, Y[1] + U[1] * v, Y[2] + U[2] * v, Y[3] + U[3] * v], 1), S += w[z / 6], v = S / O, gg(Z, [Y[0] + U[0] * v, Y[1] + U[1] * v, Y[2] + U[2] * v, Y[3] + U[3] * v], 1) } else gg(Z, Y, F);
        if (q)
          for (S = n || 0, z = 0; a > z; z += 6) C.push(S), S += w[z / 6], C.push(S) },
      ij = function (C, z, u) {
        if (z)
          for (var o = 4 * z.begin, N = u[z.batch].ps, l = 0; l < z.size; l++) N[o++] = C[0], N[o++] = C[1], N[o++] = C[2], N[o++] = C[3] },
      Xc = function (Z, p) {
        var S = p + ["32"],
          w = Z[p],
          Y = Z[S];
        w ? Y && Y.length === w.length ? Y.set(w) : Z[S] = new gj(w) : delete Z[S] },
      zn = function (w, P, h, y, J, K, I, V, U) {
        if (Hq(h)) h.forEach(function (o) { zn(w, P, o, y, J, K, I, V, U) });
        else if (An(h)) zn(w, P, $l(y, h), y, J, K, I, V, U);
        else if (Cq(h)) {
          var t, $ = yo(h.mat, P, w),
            G = yo(h.s3, P, w),
            D = yo(h.t3, P, w),
            v = yo(h.r3, P, w);
          if ((G || v || D || $) && (t = Vr($, G, v, yo(h.rotationMode, P, w), D), K.push(t)), h.shape3d) zn(w, P, h.shape3d, y, J, K, I, V, h);
          else {
            var E = y.s;
            U = U || Oi;
            var i = K[0],
              Y = K.length,
              N = E("shape3d.color", h.color, U.color);
            if (J || (J = E("shape3d.blend", h.blend, U.blend)), Y > 1) { i = Vb(i);
              for (var f = 1; Y > f; f++) Ke(i, i, K[f]) }
            h.vs && E(aq, h.visible, U.visible) && $k(i, I, V, h.vs, h.uv, h.is, J, N), h.top_vs && E(Zr, h.topVisible, U.topVisible) && $k(i, I, V, h.top_vs, h.top_uv, h.top_is, J, E("shape3d.top.color", h.topColor, U.topColor) || N), h.bottom_vs && E(ws, h.bottomVisible, U.bottomVisible) && $k(i, I, V, h.bottom_vs, h.bottom_uv, h.bottom_is, J, E("shape3d.bottom.color", h.bottomColor, U.bottomColor) || N), h.from_vs && E(bc, h.fromVisible, U.fromVisible) && $k(i, I, V, h.from_vs, h.from_uv, h.from_is, J, E("shape3d.from.color", h.fromColor, U.fromColor) || N), h.to_vs && E(gr, h.toVisible, U.toVisible) && $k(i, I, V, h.to_vs, h.to_uv, h.to_is, J, E("shape3d.to.color", h.toColor, U.toColor) || N) }
          t && K.pop() } },
      $k = function (U, y, A, G, S, r, L, N) {
        var i, c = y.cs,
          F = y.uv,
          s = y.bs;
        if (r) { i = r.length;
          for (var V = 0; i > V; V++) {
            var v = r[V];
            zg(A, U, [G[3 * v], G[3 * v + 1], G[3 * v + 2]]), F && Bi(F, [S[2 * v], S[2 * v + 1]]) } } else i = G.length / 3, zg(A, U, G), F && Bi(F, S);
        c && gg(c, N, i), s && (L ? Mj(s, L, i) : Bi(s, ur, i)) },
      vc = function ($, e, R, M) {
        var m = [];
        M ? zn($.gv, $.data, M, $, $.getBodyColor(), [e], R, m) : (zl($, ci, e, R, m), zl($, Fq, e, R, m), zl($, il, e, R, m), zl($, Vk, e, R, m), zl($, xd, e, R, m), zl($, qc, e, R, m), zl($, "csg", e, R, m)), m.length && (Bi(R.vs, m), Bi(R.ns, am(m))) },
      zl = function (c, Q, K, a, q) {
        var S = c[Q];
        if (S) {
          var H = S.tuv;
          if (H) {
            var A, B, t, w, p = S.uvScale,
              W = S.uvOffset;
            if (p)
              for (A = H.length, B = p[0], t = p[1], w = 0; A > w; w += 2) H[w] *= B, H[w + 1] *= t;
            if (W)
              for (A = H.length, B = W[0], t = W[1], w = 0; A > w; w += 2) H[w] += B, H[w + 1] += t
          }
          $k(K, a, q, S.vs, H, $, S.blend, S.color)
        }
      },
      oi = function (O, j, d, H, S, I, m, P) {
        var n, h = d.cs,
          B = d.uv,
          _ = d.bs;
        if (O.getFaceVisible(j, I)) {
          var i = O.getFaceMat(j, I);
          if (i && (S = Pc(j, i)), zg(m, S, P), h && gg(h, O.getFaceColor(j, I), 6), B) {
            var u = O.getFaceUv(j, I) || H[I + "Uv"],
              s = O.getFaceUvScale(j, I) || H[I + "UvScale"],
              x = O.getFaceUvOffset(j, I) || H[I + "UvOffset"];
            u = u ? [u[6], u[7], u[0], u[1], u[2], u[3], u[2], u[3], u[4], u[5], u[6], u[7]] : cc;
            var C = u[0],
              Z = u[1],
              $ = u[2],
              T = u[3],
              q = u[4],
              L = u[5],
              k = u[6],
              J = u[7],
              o = u[8],
              v = u[9],
              b = u[10],
              A = u[11];
            if (s) {
              var M = s[0],
                w = s[1];
              C *= M, Z *= w, $ *= M, T *= w, q *= M, L *= w, k *= M, J *= w, o *= M, v *= w, b *= M, A *= w }
            if (x) {
              var Y = x[0],
                R = x[1];
              C += Y, Z += R, $ += Y, T += R, q += Y, L += R, k += Y, J += R, o += Y, v += R, b += Y, A += R }
            B.push(C, Z, $, T, q, L, k, J, o, v, b, A) }
          _ && (n = O.getBodyColor(j) || O.getFaceBlend(j, I), n ? Mj(_, n, 6) : Bi(_, ur, 6)) } },
      ue = function (L, V, Y, N) {
        var v = L.getGL(),
          x = L._prg,
          B = L._buffer;
        if (!ul(V)) { Ck(L), Pe(v, x);
          for (var W in V) {
            var n = V[W];
            if (!(N && !n.T || !N && n.T)) { n.invalidate ? (n.invalidate = !1, Xc(n, "vs"), Xc(n, "cs"), Xc(n, "ls"), Xc(n, "ps")) : Y && Xc(n, "ps");
              var T = n.vs32,
                m = Y ? n.ps32 : n.cs32;
              wj(v, x, n.W, $, B.vs, T);
              var M = n.D,
                H = !L._dashDisabled && M;
              H && (Cm(v, x.uDash, !0), Cm(v, x.uDashDistance, M), Cm(v, x.uDashGapDistance, n.G), Fe(v, x.aLineDistance), yp(v, B.lineDistance, n.ls32, x.aLineDistance, 1), Cm(v, x.uDiffuse, n.A || Gj));
              var I = !L._batchColorDisabled;
              I && (Cm(v, x.uBatchColor, !0), Fe(v, x.aBatchColor), yp(v, B.batchColor, m, x.aBatchColor, 4)), Dn(v), Zc(v, 0, T.length / 3, v.LINES), Ko(v), I && (Cm(v, x.uBatchColor, !1), to(v, x.aBatchColor)), H && (Cm(v, x.uDash, !1), to(v, x.aLineDistance)) } }
          Nf(v, x) } },
      Bg = function (K, o, M) {
        var p, w, V, a, t, _, n, B, L, Z, A, h = K.getGL(),
          F = K._prg,
          z = K._buffer,
          s = K._33O;
        if (!ul(s)) { Ck(K);
          for (p in s)
            if (w = Yg[p] || Oi, !(M && !w.transparent || !M && w.transparent) && (V = s[p], o || !w.transparentMask)) {
              var l = M && w.autoSort !== !1 && (K._33Q || V.invalidate);
              if (V.invalidate ? (V.invalidate = !1, Xc(V, "vs"), Xc(V, "ns"), Xc(V, "cs"), Xc(V, "rs"), Xc(V, "ps"), Xc(V, "bs"), Xc(V, "uv")) : o && Xc(V, "ps"), t = V.vs32, _ = o ? V.ps32 : V.cs32, L = V.uv32, n = V.bs32, B = V.rs32, A = t.length / 3, l && (V.is = lk(t, K.getEye())), A) { a = w.light, Z = K.getTexture(w.image), Oc(h, F, $, w.light, w.opacity, w.reverseFlip, w.reverseColor, w.reverseCull), _ ? K._batchColorDisabled || (Cm(h, F.uBatchColor, !0), Fe(h, F.aBatchColor), yp(h, z.batchColor, _, F.aBatchColor, 4)) : Cm(h, F.uDiffuse, w.color);
                var i = n && !K._batchBlendDisabled;
                i && (Cm(h, F.uBatchBlend, !0), Fe(h, F.aBatchBlend), yp(h, z.batchBlend, n, F.aBatchBlend));
                var q = B && !K._batchBrightnessDisabled;
                q && (Cm(h, F.uBatchBrightness, !0), Fe(h, F.aBatchBrightness), yp(h, z.batchBrightness, B, F.aBatchBrightness, 1)), L ? Dn(h, F, Z, w.discardSelectable, z.uv, L, w.uvOffset, w.uvScale) : Dn(h), yp(h, z.vs, t, F.aPosition), yp(h, z.ns, V.ns32, F.aNormal), V.is ? (As(h, z.is, V.is), Lo(h, 0, A)) : Zc(h, 0, A), L ? Ko(h, F, Z) : Ko(h), _ && !K._batchColorDisabled && (Cm(h, F.uBatchColor, !1), to(h, F.aBatchColor)), i && (Cm(h, F.uBatchBlend, !1), to(h, F.aBatchBlend)), q && (Cm(h, F.uBatchBrightness, !1), to(h, F.aBatchBrightness)), xo(h, F) } } } },
      lk = function (B, Y) {
        for (var e = B.length / 3, F = new Array(e), A = e / 3, m = new Array(A), s = 0; A > s; s++) m[s] = s;
        m.sort(function (Q, r) {
          var l = 9 * Q,
            j = [(B[l] + B[l + 3] + 2 * B[l + 6]) / 4, (B[l + 1] + B[l + 4] + 2 * B[l + 7]) / 4, (B[l + 2] + B[l + 5] + 2 * B[l + 8]) / 4];
          l = 9 * r;
          var n = [(B[l] + B[l + 3] + 2 * B[l + 6]) / 4, (B[l + 1] + B[l + 4] + 2 * B[l + 7]) / 4, (B[l + 2] + B[l + 5] + 2 * B[l + 8]) / 4],
            y = Rk(Y, j) - Rk(Y, n);
          return y > 0 ? -1 : 0 > y ? 1 : 0 });
        for (var s = 0; A > s; s++) {
          var L = 3 * s,
            i = 3 * m[s];
          F[L] = i, F[L + 1] = i + 1, F[L + 2] = i + 2 }
        return new tr(F) },
      Fd = new gj([0, 0, 0, 1, 1, 1, 1, 0]),
      fm = new gj([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
      Tn = new tr([0, 1, 2, 2, 3, 0]),
      pl = new gj([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
      Gq = new tr([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
      yl = new gj([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
      Bh = new gj([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
      vk = am(pl, Gq),
      Wf = (new gj([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new tr([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
      fk = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
      pn = function (S, u, k, T, v, b) { b = b || 16, S = S || 16, u = u || 0, k = k || S;
        var N, w, Y, D, L, Z, _, l, z = .5,
          t = [],
          e = [],
          O = Q / S,
          f = i / b;
        for (N = 0; b > N; N++)
          for (L = N + 1, D = N * f, l = L * f, w = u; k > w; w++) Z = w + 1, Y = w * O, _ = Z * O, t.push(z * P(D) * s(Y), z * s(D), -z * P(D) * P(Y), z * P(l) * s(_), z * s(l), -z * P(l) * P(_), z * P(D) * s(_), z * s(D), -z * P(D) * P(_), z * P(D) * s(Y), z * s(D), -z * P(D) * P(Y), z * P(l) * s(Y), z * s(l), -z * P(l) * P(Y), z * P(l) * s(_), z * s(l), -z * P(l) * P(_)), e.push(w / S, N / b, Z / S, L / b, Z / S, N / b, w / S, N / b, w / S, L / b, Z / S, L / b);
        if (T) {
          var B = [],
            A = [];
          for (Y = u * O, N = 0; b > N; N++) L = N + 1, D = N * f, l = L * f, B.push(0, 0, 0, z * P(l) * s(Y), z * s(l), -z * P(l) * P(Y), z * P(D) * s(Y), z * s(D), -z * P(D) * P(Y)), A.push(0, .5, u / S, L / b, u / S, N / b) }
        if (v) {
          var x = [],
            n = [];
          for (Y = k * O, N = 0; b > N; N++) L = N + 1, D = N * f, l = L * f, x.push(0, 0, 0, z * P(D) * s(Y), z * s(D), -z * P(D) * P(Y), z * P(l) * s(Y), z * s(l), -z * P(l) * P(Y)), n.push(1, .5, k / S, N / b, k / S, L / b) }
        return { vs: t, uv: e, from_vs: B, from_uv: A, to_vs: x, to_uv: n } },
      hq = function (L, j, e) { L = L || .17, j = j || 12, e = e || 18, 0 > L ? L = 0 : L > .25 && (L = .25);
        var b, V, T, r, R, Z, O, $ = .5,
          X = [],
          J = [],
          m = [],
          g = Q / e,
          k = Q / j,
          D = $ - L;
        for (V = 0; j >= V; V++)
          for (r = -i + V * k, Z = s(r), R = P(r), b = 0; e >= b; b++) T = b * g, O = D + L * Z, X.push(s(T) * O, R * L, -P(T) * O), J.push(b / e, 1 - V / j);
        for (V = 0; j > V; V++) {
          var H = V * (e + 1),
            z = (V + 1) * (e + 1);
          for (b = 0; e > b; b++) m.push(H + b, z + b + 1, z + b, H + b, H + b + 1, z + b + 1) }
        return { vs: X, uv: J, is: m } },
      Dd = function (W, q, E, V, I, T, K) { K = K || 12, W = W || 18, q = q || 0, E = E || W, T = T || .17, 0 > T ? T = 0 : T > .25 && (T = .25);
        var B, r, C, h, e, l, D, y, z, t, J = .5,
          X = [],
          G = [],
          c = Q / W,
          H = Q / K,
          p = J - T;
        for (C = 0; K > C; C++)
          for (h = C + 1, D = -i + C * H, y = -i + h * H, B = q; E > B; B++) r = B + 1, e = B * c, l = r * c, z = p + T * s(D), t = p + T * s(y), X.push(s(e) * z, P(D) * T, -P(e) * z, s(l) * z, P(D) * T, -P(l) * z, s(l) * t, P(y) * T, -P(l) * t, s(e) * z, P(D) * T, -P(e) * z, s(l) * t, P(y) * T, -P(l) * t, s(e) * t, P(y) * T, -P(e) * t), G.push(B / W, 1 - C / K, r / W, 1 - C / K, r / W, 1 - h / K, B / W, 1 - C / K, r / W, 1 - h / K, B / W, 1 - h / K);
        if (V) {
          var d = [],
            _ = [];
          for (C = 0; K > C; C++) h = C + 1, D = -i + C * H, y = -i + h * H, e = q * c, z = p + T * s(D), t = p + T * s(y), d.push(s(e) * z, P(D) * T, -P(e) * z, s(e) * t, P(y) * T, -P(e) * t, s(e) * p, 0, -P(e) * p), _.push(.5 + .5 * s(D), .5 - .5 * P(D), .5 + .5 * s(y), .5 - .5 * P(y), .5, .5) }
        if (I) {
          var Z = [],
            w = [];
          for (C = 0; K > C; C++) h = C + 1, D = -i + C * H, y = -i + h * H, e = E * c, z = p + T * s(D), t = p + T * s(y), Z.push(s(e) * z, P(D) * T, -P(e) * z, s(e) * p, 0, -P(e) * p, s(e) * t, P(y) * T, -P(e) * t), w.push(.5 - .5 * s(D), .5 - .5 * P(D), .5, .5, .5 - .5 * s(y), .5 - .5 * P(y)) }
        return { vs: X, uv: G, from_vs: d, from_uv: _, to_vs: Z, to_uv: w } },
      $d = function (u, K) {
        for (var A, x, N, j = .5, V = 16, z = [], p = [], D = [], L = Q / V, R = 0; V >= R; R++) A = R * L, x = s(A) * j, N = P(A) * j, z.push(x, -j, N, x, j, N), p.push(1 - R / V, 1, 1 - R / V, 0);
        for (R = 0; V > R; R++) D.push(2 * R, 2 * R + 1, 2 * R + 3, 2 * R, 2 * R + 3, 2 * R + 2);
        if (K) {
          var $ = [],
            X = [],
            W = [];
          for ($.push(0, -j, 0), X.push(.5, .5), R = 0; V >= R; R++) A = R * L, x = s(A), N = P(A), $.push(x * j, -j, -N * j), X.push(.5 + .5 * x, .5 + .5 * N);
          for (R = 0; V > R; R++) W.push(0, R + 2, R + 1) }
        if (u) {
          var g = [],
            O = [],
            q = [];
          for (g.push(0, j, 0), O.push(.5, .5), R = 0; V >= R; R++) A = R * L, x = s(A), N = P(A), g.push(x * j, j, -N * j), O.push(.5 + .5 * x, .5 - .5 * N);
          for (R = 0; V > R; R++) q.push(0, R + 1, R + 2) }
        return { vs: z, uv: p, is: D, bottom_vs: $, bottom_uv: X, bottom_is: W, top_vs: g, top_uv: O, top_is: q } },
      ml = function (i, E, U, c, f, e, r) { i = i || 12, E = E || 0, U = U || i;
        for (var O, Z, z, D, W, B, p, q, t = .5, _ = [], T = [], X = Q / i, M = E; U > M; M++) O = M + 1, Z = M * X, z = O * X, D = s(Z) * t, W = P(Z) * t, B = s(z) * t, p = P(z) * t, _.push(D, -t, -W, B, -t, -p, D, t, -W, B, -t, -p, B, t, -p, D, t, -W), T.push(M / i, 1, O / i, 1, M / i, 0, O / i, 1, O / i, 0, M / i, 0);
        if (r) {
          var k = [],
            y = [];
          for (M = E; U > M; M++) Z = X * M, z = X * (M + 1), D = s(Z), W = P(Z), B = s(z), p = P(z), k.push(D * t, -t, -W * t, 0, -t, 0, B * t, -t, -p * t), y.push(.5 + .5 * D, .5 + .5 * W, .5, .5, .5 + .5 * B, .5 + .5 * p) }
        if (e) {
          var Y = [],
            R = [];
          for (M = E; U > M; M++) Z = X * M, z = X * (M + 1), D = s(Z), W = P(Z), B = s(z), p = P(z), Y.push(D * t, t, -W * t, B * t, t, -p * t, 0, t, 0), R.push(.5 + .5 * D, .5 - .5 * W, .5 + .5 * B, .5 - .5 * p, .5, .5) }
        if (c) {
          var A = [],
            K = [];
          Z = X * E, D = s(Z) * t, W = P(Z) * t, q = E / i, A.push(0, t, 0, 0, -t, 0, D, -t, -W, D, -t, -W, D, t, -W, 0, t, 0), K.push(0, 0, 0, 1, q, 1, q, 1, q, 0, 0, 0) }
        if (f) {
          var L = [],
            d = [];
          Z = X * U, D = s(Z) * t, W = P(Z) * t, q = U / i, L.push(0, -t, 0, 0, t, 0, D, t, -W, D, t, -W, D, -t, -W, 0, -t, 0), d.push(1, 1, 1, 0, q, 0, q, 0, q, 1, 1, 1) }
        return { vs: _, uv: T, bottom_vs: k, bottom_uv: y, top_vs: Y, top_uv: R, from_vs: A, from_uv: K, to_vs: L, to_uv: d } },
      hi = function (f, N, l, h, p) { N = N || 18, l = l || 0, h = h == $ ? Q : h, p = p == $ ? .5 : p;
        for (var d, v, e, w, i, K, t = [0, .5, .75, .875, .9375], n = [], I = [], O = [], A = h / N, g = 0; g < t.length; g++) {
          var M = 0 === g % 2 ? 0 : .5;
          for (d = 0; N >= d; d++) v = (d + M) * A + l, e = 1 - t[g], n.push(s(v) * p * e, -p + 2 * t[g] * p, -P(v) * p * e), I.push((d + M) / N, e) }
        for (g = 0; g < t.length - 1; g++) {
          var c = g * (N + 1),
            S = (g + 1) * (N + 1);
          for (d = 0; N > d; d++) O.push(c + d, S + d + 1, S + d, c + d, c + d + 1, S + d + 1) }
        for (K = n.length / 3 - (N + 1), d = 0; N > d; d++) n.push(0, p, 0), I.push((d + .5) / N, 0);
        for (d = 0; N > d; d++) O.push(K + d, K + d + 1, K + (N + 1) + d);
        if (f) {
          var V = [],
            D = [],
            u = [];
          for (V.push(0, -p, 0), D.push(.5, .5), d = 0; N >= d; d++) v = d * A + l, w = s(v), i = P(v), V.push(w * p, -p, -i * p), D.push(.5 + .5 * w, .5 + .5 * i);
          for (d = 0; N > d; d++) u.push(0, d + 2, d + 1) }
        return { vs: n, uv: I, is: O, bottom_vs: V, bottom_uv: D, bottom_is: u } },
      oj = function (h, l, w, T, b, E) { h = h || 16, l = l || 0, w = w || h;
        for (var U = .5, j = [], v = [], $ = Q / h, t = l; w > t; t++) {
          var V = t + 1,
            W = $ * t,
            A = $ * V;
          j.push(s(W) * U, -U, -P(W) * U, s(A) * U, -U, -P(A) * U, 0, U, 0), v.push(t / h, 1, V / h, 1, (t + V) / 2 / h, 0) }
        if (E) {
          var N = [],
            i = [];
          for (t = l; w > t; t++) { W = $ * t, A = $ * (t + 1);
            var u = s(W),
              J = P(W),
              p = s(A),
              K = P(A);
            N.push(u * U, -U, -J * U, 0, -U, 0, p * U, -U, -K * U), i.push(.5 + .5 * u, .5 + .5 * J, .5, .5, .5 + .5 * p, .5 + .5 * K) } }
        if (T) {
          var f = [],
            S = [];
          W = $ * l, f.push(0, U, 0, 0, -U, 0, s(W) * U, -U, -P(W) * U), S.push(0, 0, 0, 1, l / h, 1) }
        if (b) {
          var z = [],
            Z = [];
          W = $ * w, z.push(0, -U, 0, 0, U, 0, s(W) * U, -U, -P(W) * U), Z.push(1, 1, 1, 0, w / h, 1) }
        return { vs: j, uv: v, bottom_vs: N, bottom_uv: i, from_vs: f, from_uv: S, to_vs: z, to_uv: Z } },
      Mb = function (z, i, R, C, v, I, G, H) {
        for (var U = [], o = 0; o < z.length - 1; o += 2) U.push({ x: z[o], y: z[o + 1] });
        return Sh(U, i, R, C, v, I, G, H, !1) },
      Jh = { roundRect: function (U, w) {
          return Mb([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], U, w, 3) }, star: function (J, j) {
          return Mb([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], J, j) }, rect: function (z, C) {
          return Mb([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], z, C) }, triangle: function ($, P) {
          return Mb([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], $, P) }, rightTriangle: function (C, y) {
          return Mb([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], C, y) }, parallelogram: function (f, d) {
          return Mb([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], f, d) }, trapezoid: function (N, g) {
          return Mb([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], N, g) } },
      le = { sphere: 1, cylinder: 1, cone: 1, torus: 1 },
      cb = { torus: 1, sphere: 1 },
      Uc = ph(Oj(Jh), { cylinder: 1 }),
      bh = ph(Oj(Jh), { cylinder: 1, cone: 1 }),
      Xh = function (j, Y, p) {
        var b, w = yo(j.mat, p, Y),
          E = yo(j.s3, p, Y),
          l = yo(j.t3, p, Y),
          h = yo(j.r3, p, Y);
        return (E || h || l || w) && (b = Vb(Y._6O), Ck(Y, Vr(w, E, h, yo(j.rotationMode, p, Y), l))), b },
      gk = function (S, h, O, e, j, L, F) {
        if (Hq(O)) O.forEach(function (f) { gk(S, h, f, e, j, L, F) });
        else if (An(O)) gk(S, h, $l(e, O), e, j, L, F);
        else if (Cq(O))
          if (O.shape3d) {
            var N = Xh(O, S, h);
            gk(S, h, O.shape3d, e, j, L, O), N && Ch(S, N) } else Fh(S, h, O, e.s, j, L, F) },
      Fh = function (G, Z, D, w, T, f, F) {
        if (F = F || Oi, !f || f(w("shape3d.transparent", D.transparent, F.transparent))) {
          var l = Xh(D, G, Z);
          ti(D);
          var c = G._26I,
            y = G._prg,
            M = G._buffer,
            R = w("shape3d.color", D.color, F.color);
          T || (T = w("shape3d.blend", D.blend, F.blend)), Oc(c, y, T, w("shape3d.light", D.light, F.light), w("shape3d.opacity", D.opacity, F.opacity), w("shape3d.reverse.flip", D.reverseFlip, F.reverseFlip), w("shape3d.reverse.color", D.reverseColor, F.reverseColor), w("shape3d.reverse.cull", D.reverseCull, F.reverseCull)), D.vs && w(aq, D.visible, F.visible) && Qn(c, y, M, R, G.getTexture(w("shape3d.image", D.image, F.image), Z), w("shape3d.discard.selectable", D.discardSelectable, F.discardSelectable), D.vs, D.uv, D.ns, D.is, w("shape3d.uv.offset", D.uvOffset, F.uvOffset), w("shape3d.uv.scale", D.uvScale, F.uvScale)), D.top_vs && w(Zr, D.topVisible, F.topVisible) && Qn(c, y, M, w("shape3d.top.color", D.topColor, F.topColor) || R, G.getTexture(w("shape3d.top.image", D.topImage, F.topImage), Z), w("shape3d.top.discard.selectable", D.topDiscardSelectable, F.topDiscardSelectable), D.top_vs, D.top_uv, D.top_ns, D.top_is, w("shape3d.top.uv.offset", D.topUvOffset, F.topUvOffset), w("shape3d.top.uv.scale", D.topUvScale, F.topUvScale)), D.bottom_vs && w(ws, D.bottomVisible, F.bottomVisible) && Qn(c, y, M, w("shape3d.bottom.color", D.bottomColor, F.bottomColor) || R, G.getTexture(w("shape3d.bottom.image", D.bottomImage, F.bottomImage), Z), w("shape3d.bottom.discard.selectable", D.bottomDiscardSelectable, F.bottomDiscardSelectable), D.bottom_vs, D.bottom_uv, D.bottom_ns, D.bottom_is, w("shape3d.bottom.uv.offset", D.bottomUvOffset, F.bottomUvOffset), w("shape3d.bottom.uv.scale", D.bottomUvScale, F.bottomUvScale)), D.from_vs && w(bc, D.fromVisible, F.fromVisible) && Qn(c, y, M, w("shape3d.from.color", D.fromColor, F.fromColor) || R, G.getTexture(w("shape3d.from.image", D.fromImage, F.fromImage), Z), w("shape3d.from.discard.selectable", D.fromDiscardSelectable, F.fromDiscardSelectable), D.from_vs, D.from_uv, D.from_ns, D.from_is, w("shape3d.from.uv.offset", D.fromUvOffset, F.fromUvOffset), w("shape3d.from.uv.scale", D.fromUvScale, F.fromUvScale)), D.to_vs && w(gr, D.toVisible, F.toVisible) && Qn(c, y, M, w("shape3d.to.color", D.toColor, F.toColor) || R, G.getTexture(w("shape3d.to.image", D.toImage, F.toImage), Z), w("shape3d.to.discard.selectable", D.toDiscardSelectable, F.toDiscardSelectable), D.to_vs, D.to_uv, D.to_ns, D.to_is, w("shape3d.to.uv.offset", D.toUvOffset, F.toUvOffset), w("shape3d.to.uv.scale", D.toUvScale, F.toUvScale)), xo(c, y), l && Ch(G, l) } },
      Qn = function (F, b, r, m, d, V, R, v, p, I, w, S) { R && (Cm(F, b.uDiffuse, m), v ? Dn(F, b, d, V, r.uv, v, w, S) : Dn(F), yp(F, r.vs, R, b.aPosition), yp(F, r.ns, p, b.aNormal), I ? (As(F, r.is, I), Lo(F, 0, I.length)) : Zc(F, 0, R.length / 3), v ? Ko(F, b, d) : Ko(F)) },
      $l = function (v, H) {
        var y = v.s;
        if (H || (H = y(si)), !H) return $;
        if (Cq(H)) return H;
        var O = Lh[H];
        if (O) return O;
        if ("text" === H) {
          var m = { amount: y("shape3d.text.amount"), size: y("shape3d.text.size"), font: y("shape3d.text.font"), style: y("shape3d.text.style"), weight: y("shape3d.text.weight"), fill: y("shape3d.text.fill"), curveSegments: y("shape3d.text.curveSegments"), spacing: y("shape3d.text.spacing") },
            D = v.gv.getShape3dText(v.data),
            n = D;
          for (var s in m) n += "_" + (m[s] === B ? "U" : m[s]);
          return v._cachedTextKey === n ? v._cachedTextGeometry : (v._cachedTextKey = n, v._cachedTextGeometry = r.createTextGeometry(D, m)) }
        var s = H;
        if (le[H]) {
          var c = y("shape3d.side"),
            T = y("shape3d.side.from"),
            R = y("shape3d.side.to"),
            E = y(bc),
            q = y(gr);
          3 > c ? (c = 0, T = 0, R = 0, E = !1, q = !1) : ((T == $ || 0 > T) && (T = 0), (R == $ || R > c) && (R = c), 0 === T && R === c && (E = !1, q = !1)), s += "-" + c + "-" + T + "-" + R + "-" + E + "-" + q }
        if (Uc[H]) {
          var F = y(Zr);
          s += "-" + F }
        if (bh[H]) {
          var d = y(ws);
          s += "-" + d }
        if ("torus" === H) {
          var Q = y("shape3d.torus.radius");
          0 > Q ? Q = 0 : Q > .25 && (Q = .25), s += "-" + Q }
        if (cb[H]) {
          var G = y(Np);
          s += "-" + G }
        return O = Rr[s], O || ("box" === H ? O = r.createBoxModel() : Jh[H] ? O = Jh[H](F, d) : "sphere" === H ? O = r.createSphereModel(c, T, R, E, q, G) : H === Yd ? O = r.createCylinderModel(c, T, R, E, q, F, d) : "cone" === H ? O = r.createConeModel(c, T, R, E, q, d) : "torus" === H && (O = r.createTorusModel(c, T, R, E, q, Q, G)), Rr[s] = O), O },
      ti = function () {
        var x = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
          h = ["is", "top_is", "bottom_is", "from_is", "to_is"];
        return X = Ve(Sg.substr(Sg.indexOf("^#") + 2)), Pm(r[Ui(ub + x[15] + "n" + x[16])]()) && om() ? function (c) { c && !c._complete_ && (c._complete_ = !0, c.vs && lr(c.ns) && (c.ns = am(c.vs, c.is)), c.top_vs && lr(c.top_ns) && (c.top_ns = am(c.top_vs, c.top_is)), c.bottom_vs && lr(c.bottom_ns) && (c.bottom_ns = am(c.bottom_vs, c.bottom_is)), c.from_vs && lr(c.from_ns) && (c.from_ns = am(c.from_vs, c.from_is)), c.to_vs && lr(c.to_ns) && (c.to_ns = am(c.to_vs, c.to_is)), x.forEach(function (V) {
            var R = c[V];
            Hq(R) && (c[V] = new gj(R)) }), h.forEach(function (z) {
            var W = c[z];
            Hq(W) && (c[z] = new tr(W)) })) } : void 0 }(),
      Ge = function (I, z) {
        var R = I[z];
        Hq(R) && (I[z] = new gj(R)) };
    ph(Iq, { _25Q: function (C) { C._16O = function (S, P, O, U, X, H, B, c, b) {
          var v = this.info;
          if (v) {
            var a, g, E, p, l, y, d = Ti();
            if (Nl[P] ? (a = v.p3, g = v.c1, E = v.c2) : zs[P] ? (g = v.s1 || v.c1, E = v.s2 || v.c2) : (g = v.t1 || v.c1, E = v.t2 || v.c2), a) y = qf(P, qj, O, U, c, b);
            else {
              var q = co(E, g),
                A = Rk(g, E);
              p = [0, -z(q[2], q[0]), n(q[1] / A)], l = "zyx", a = [(g[0] + E[0]) / 2, (g[1] + E[1]) / 2, (g[2] + E[2]) / 2], y = qf(P, [A, 0, 0], O, U, c, b) }
            return Zn(d, y, a, U, X, H, B, S, p, l) }
          return Ce }, C._80o = function (A, q, l) {
          var M = this,
            D = M.shapeModel;
          if (D) {
            var I = M.gv;
            Ck(I), gk(I, M.data, D, M, M.getBodyColor(), l) } }, C.createLineModel = function (j, a, l, G, n) {
          for (var d = this, B = d.s, T = $h(j, a, B(Np)), p = [], E = 0; E < T.length; E++) {
            var Y = T[E],
              V = Y.length;
            if (V > 1) {
              var A = Y[0];
              p.push(A.x, A.y, A.z);
              for (var i = 1; V - 1 > i; i++) A = Y[i], p.push(A.x, A.y, A.z), p.push(A.x, A.y, A.z);
              A = Y[V - 1], p.push(A.x, A.y, A.z) } }
          var x, c, O, H = B(G + ".color"),
            L = B(n),
            s = 0;
          return L && (c = B(n + ".color"), x = B(n + ".pattern"), s = B(n + ".offset"), O = H), xi(d.gv, d.data, p, c || H, O ? $ : B(G + ".gradient.color"), l, x || B(G + ".pattern"), s, O), T }, C.createTubeModel = function (j, g, c, q) {
          for (var r = this, S = r.s, i = S("shape3d.side") || Pq, A = S("shape3d.start.angle"), L = S("shape3d.sweep.angle"), f = S(Zr) ? S("shape3d.top.cap") : $, Y = S(ws) ? S("shape3d.bottom.cap") : $, v = "flat" === f, M = "flat" === Y, T = v && (q ? q.uv : S("shape3d.top.image")), P = M && (q ? q.uv : S("shape3d.bottom.image")), x = q ? q.uv : S("shape3d.image"), a = { vs: [], uv: x ? [] : $, top_vs: v ? [] : $, top_uv: T ? [] : $, bottom_vs: M ? [] : $, bottom_uv: P ? [] : $ }, Z = $h(j, g, S(Np), c), X = 0, W = Z.length; W > X; X++) Bk(a, Z[X], S(qm), c, i, A, L, f, Y);
          if (q) {
            var o = [];
            zn(r.gv, r.data, a, r, r.getBodyColor(), [], q, o), o.length && (Bi(q.vs, o), Bi(q.ns, am(o))) } else r.shapeModel = a;
          return Z }, C.getCache = function () {
          var d = this.info;
          if (d) {
            var U = d.list;
            if (U) {
              var r = d.cache;
              return r || (r = d.cache = us(U)), r } }
          return $ } } });
    var hc = function (p, b) {
        for (var A, c = 0, J = p.length, D = 0, v = J - 1; v >= D;)
          if (c = G(D + (v - D) / 2), A = p[c].length - b, 0 > A) D = c + 1;
          else {
            if (!(A > 0)) { v = c;
              break }
            v = c - 1 }
        c = v;
        var L = p[c],
          Z = L.point;
        return c === J - 1 || L.length === b || (Z = (new up).subVectors(p[c + 1].point, Z).normalize().multiplyScalar(b - L.length).add(Z)), { point: Z, tangent: L.tangent } },
      us = function (I) {
        for (var M, B, O = [], y = 0, Y = 0; Y < I.length; Y++) {
          for (var t = I[Y], W = 0; W < t.length; W++) { M = t[W], B && (y += B.distanceTo(M));
            var b = new up,
              H = t[W + 1];
            H ? b.subVectors(H, M) : B ? b.subVectors(M, B) : b.x = 1, b.normalize(), O.push({ point: M, length: y, tangent: b }), B = M }
          B = null }
        return O },
      $h = function (g, U, J, Y) { J = J || zd;
        for (var H = [], n = 0, u = g.size(); u > n; n++) {
          var y = g.get(n);
          H.push(new up(y.x, y.e || 0, y.y)) }
        Pk(U) && (U = U._as);
        for (var E, s, D, d, R, c = [], r = 0, f = 0, p = U ? U.length : u; p > f; f++)
          if (R = U ? U[f] : 0 === f ? 1 : 2, 1 === R) c.push(D = []), D.push(H[r++]);
          else if (2 === R || 5 === R)
          if (d = 2 === R ? H[r++] : D[0], Y) {
            var S = U ? U[f + 1] : p > f + 1 ? 2 : $;
            if (2 === S || 5 === S) {
              var P = D[D.length - 1],
                M = 2 === S ? H[r] : D[0],
                a = (new up).subVectors(P, d),
                m = (new up).subVectors(M, d),
                B = a.length(),
                l = m.length();
              if (Y > B / 2 && Y > l / 2) D.push(d);
              else
                for (a.multiplyScalar(v(Y, B / 2) / B).add(d), m.multiplyScalar(v(Y, l / 2) / l).add(d), E = new Cj(a, d, m).getPoints(J), s = 0; J >= s; s++) D.push(E[s]) } else D.push(d) } else D.push(d);
        else if (3 === R)
          for (E = new Cj(D[D.length - 1], H[r++], H[r++]).getPoints(J), s = 1; J >= s; s++) D.push(E[s]);
        else if (4 === R)
          for (E = new Bf(D[D.length - 1], H[r++], H[r++], H[r++]).getPoints(J), s = 1; J >= s; s++) D.push(E[s]);
        return c },
      Zf = function (b) {
        for (var I, h, o = new up, A = [], Q = [], s = [], J = 0, v = b.length; v > J; J++) I = b[J], h = b[J + 1], h ? o.subVectors(h, I) : o.subVectors(I, b[J - 1]), A.push(o.normalize().clone());
        var j, t, q, U, R = new up,
          c = new up,
          F = new En,
          P = 1e-4,
          m = Number.MAX_VALUE,
          T = A[0],
          f = Q[0] = new up,
          V = s[0] = new up;
        for (t = N(T.x), q = N(T.y), U = N(T.z), m >= t && (m = t, R.set(1, 0, 0)), m >= q && (m = q, R.set(0, 1, 0)), m >= U && R.set(0, 0, 1), c.crossVectors(T, R).normalize(), f.crossVectors(T, c), V.crossVectors(T, f), J = 1; v > J; J++) Q[J] = Q[J - 1].clone(), s[J] = s[J - 1].clone(), c.crossVectors(A[J - 1], A[J]), c.length() > P && (c.normalize(), j = l(Tl(A[J - 1].dot(A[J]), -1, 1)), Q[J].applyMatrix4(F.makeRotationAxis(c, j))), s[J].crossVectors(A[J], Q[J]);
        return { B: s, T: A, N: Q } },
      Bk = function () {
        var u = function (f) {
            for (var G = 1; G < arguments.length; G++) {
              var F = arguments[G];
              f.push(F.x, F.y, F.z) } },
          g = function (d) {
            for (var i = 1; i < arguments.length; i++) {
              var t = arguments[i].uv;
              d.push(t[0], t[1]) } },
          w = function (H, h, L, X, B) {
            var S = -X * s(B),
              M = X * P(B);
            return new up(H.x + S * L.x + M * h.x, H.y + S * L.y + M * h.y, H.z + S * L.z + M * h.z) },
          C = function (v, g, L, C, T, x, d, G) { d = d || Q;
            for (var t = [], o = d / T, Z = 0; T >= Z; Z++) {
              var A = w(v, g, L, C, Z * o + x);
              t.push(A), G != $ && (A.uv = [G, Z / T]) }
            return t },
          Y = function (e, o, p, z, V, b, B, X, r) { r = r || Q;
            var q = o ? e.top_vs : e.bottom_vs;
            if (q)
              for (var R = o ? e.top_uv : e.bottom_uv, l = r / B, C = 0; B > C; C++) {
                var f, S;
                o ? (f = C * l + X, S = (C + 1) * l + X) : (S = C * l + X, f = (C + 1) * l + X), u(q, w(p, z, V, b, f), w(p, z, V, b, S), p), R && R.push(.5 - .5 * s(f), .5 - .5 * P(f), .5 - .5 * s(S), .5 - .5 * P(S), .5, .5) } };
        return function (U, l, p, Q, D, P, S, e, s) {
          var n = l.length;
          if (n > 1) {
            var k, j, o, Z, t, x, G, d = Zf(l),
              z = d.T,
              i = d.N,
              L = d.B; "flat" === e && Y(U, !0, l[0], L[0], i[0], Q, D, P, S), "flat" === s && Y(U, !1, l[n - 1], L[n - 1], i[n - 1], Q, D, P, S);
            var N, J, H = [],
              W = q(D / 2),
              h = "round" === e,
              V = "round" === s,
              c = l[0],
              R = z[0],
              r = L[0],
              K = i[0],
              a = l[n - 1],
              m = z[n - 1],
              _ = L[n - 1],
              w = i[n - 1];
            if (h) {
              for (o = 1; W >= o; o++) i.splice(0, 0, K), L.splice(0, 0, r), z.splice(0, 0, R), J = -o / W * Q, l.splice(0, 0, R.clone().multiplyScalar(J).add(c)), H[W - o] = A(Q * Q - J * J);
              n += W }
            if (V) {
              for (o = 1; W >= o; o++) i.push(w), L.push(_), z.push(m), J = o / W * Q, l.push(m.clone().multiplyScalar(J).add(a)), H[l.length - 1] = A(Q * Q - J * J);
              n += W }
            if (U.uv) {
              var y = 0,
                T = 0,
                b = [];
              for (p && (y = p), t = l[0], b[0] = 0, o = 1; n > o; o++) Z = l[o], b[o] = t.distanceTo(Z), t = Z, p || (y += b[o]);
              for (N = [], o = 0; n > o; o++) T += b[o], N[o] = y ? T / y : 0 }
            for (o = 0; n > o; o++) {
              if (Z = l[o], x = L[o], G = i[o], k = C(Z, x, G, H[o] === B ? Q : H[o], D, P, S, N ? N[o] : $), j)
                for (var F = 0; D > F; F++) {
                  var v = j[F],
                    I = j[F + 1] || j[0],
                    O = k[F],
                    M = k[F + 1] || k[0];
                  u(U.vs, I, v, O, O, M, I), U.uv && g(U.uv, I, v, O, O, M, I) }
              j = k } } } }();
    ph(r, { getLineLength: function (l) {
        return l[l.length - 1].length }, getLineOffset: function (x, Q) {
        return hc(x, Q) }, getLineCacheInfo: function (e, A, D, M) {
        return us($h(e, A, D, M)) } });
    var mo = t.Light = function () { Dj(mo, this), this.s(Aj, U[Aj]), this.s(si, "sphere"), this.s3(20, 20, 20) };
    Gl("Light", Ii, { _image: "light_icon", _icon: "light_icon", onStyleChanged: function (h, B, V) { mo.superClass.onStyleChanged.apply(this, arguments), h === Aj && this.s("shape3d.color", V) } });
    var mp = Dk.Graph3dView = function (I, D) {
        var o = this;
        o._attributes = D || r.graph3dViewAttributes, o._25I = {}, o._view = ef(1, o);
        var c = o._canvas = Jr(o._view);
        c.addEventListener("webglcontextlost", function (G) { G.preventDefault(), Kq(o), o._26I = $, o._1o.texture = $, o._35O = !0 }, !1), c.addEventListener("webglcontextrestored", function () { o._35O = !1, o.iv() }, !1), o._34O = {}, o._33O = {}, o._wireframeIndexMap = {}, o._wireframeModelMap = {}, o._polylineIndexMap = {}, o._polylineIndexMap = {}, o._8O = [], o._7O = Ti(), o._6O = Ti(), o._1o = new te(o), o._30O = new ko(o), o._31O = new Hp(o), o._32O = new Jm(o), o._33Q = !0, o._eye = Oj(r.graph3dViewEye), o._center = Oj(r.graph3dViewCenter), o._up = Oj(r.graph3dViewUp), o._lightChanged = !1, o._59O = [], o._spots = [], o._dirs = [], o.dm(I ? I : new he), o.setInteractors([new Ni(o)]) },
      wn = { fogDisabled: 1, dashDisabled: 1, batchColorDisabled: 1, batchBlendDisabled: 1, batchBrightnessDisabled: 1 };
    Mi("Graph3dView", y, {
      ms_v: 1,
      ms_tip: 1,
      ms_gv: 1,
      ms_dm: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_sm: 1,
      _51o: 1,
      ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", xl, _d, "firstPersonMode", rd, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", li, db, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
      _editable: !1,
      _devicePixelRatio: B,
      _boundaries: B,
      _moveStep: r.graph3dViewMoveStep,
      _rotateStep: r.graph3dViewRotateStep,
      _pannable: r.graph3dViewPannable,
      _rotatable: r.graph3dViewRotatable,
      _walkable: r.graph3dViewWalkable,
      _resettable: r.graph3dViewResettable,
      _zoomable: r.graph3dViewZoomable,
      _firstPersonMode: r.graph3dViewFirstPersonMode,
      _mouseRoamable: r.graph3dViewMouseRoamable,
      _gridVisible: r.graph3dViewGridVisible,
      _gridSize: r.graph3dViewGridSize,
      _gridGap: r.graph3dViewGridGap,
      _gridColor: r.graph3dViewGridColor,
      _originAxisVisible: r.graph3dViewOriginAxisVisible,
      _centerAxisVisible: r.graph3dViewCenterAxisVisible,
      _axisXColor: r.graph3dViewAxisXColor,
      _axisYColor: r.graph3dViewAxisYColor,
      _axisZColor: r.graph3dViewAxisZColor,
      _ortho: r.graph3dViewOrtho,
      _orthoWidth: r.graph3dViewOrthoWidth,
      _fovy: r.graph3dViewFovy,
      _near: r.graph3dViewNear,
      _far: r.graph3dViewFar,
      _headlightColor: r.graph3dViewHeadlightColor,
      _headlightIntensity: r.graph3dViewHeadlightIntensity,
      _headlightRange: r.graph3dViewHeadlightRange,
      _headlightDisabled: r.graph3dViewHeadlightDisabled,
      _rectSelectable: r.graph3dViewRectSelectable,
      _rectSelectBackground: r.graph3dViewRectSelectBackground,
      _editSizeColor: r.graph3dViewEditSizeColor,
      _autoMakeVisible: hh,
      _fogDisabled: r.graph3dViewFogDisabled,
      _fogColor: r.graph3dViewFogColor,
      _fogNear: r.graph3dViewFogNear,
      _fogFar: r.graph3dViewFogFar,
      _dashDisabled: r.graph3dViewDashDisabled,
      _batchColorDisabled: r.graph3dViewBatchColorDisabled,
      _batchBlendDisabled: r.graph3dViewBatchBlendDisabled,
      _batchBrightnessDisabled: r.graph3dViewBatchBrightnessDisabled,
      setEye: function (w, z, e) { 1 === arguments.length && (z = w[1], e = w[2], w = w[0]);
        var x = this._eye;
        x[0] = w, x[1] = z, x[2] = e, this.fp(li, $, x) },
      setCenter: function (L, A, I) { 1 === arguments.length && (A = L[1], I = L[2], L = L[0]);
        var G = this._center;
        G[0] = L, G[1] = A, G[2] = I, this.fp(db, $, G) },
      setUp: function (h, F, v) { 1 === arguments.length && (F = h[1], v = h[2], h = h[0]);
        var x = this._up;
        x[0] = h, x[1] = F, x[2] = v, this.fp("up", $, x) },
      isTransparentMask: function (m) {
        return m.s("transparent.mask") },
      getAspect: function () {
        var Y = this,
          s = Y._aspect;
        return s ? s : Y.getWidth() / Y.getHeight() },
      getCanvas: function () {
        return this._canvas },
      setDataModel: function (E) {
        var N = this,
          g = N._dataModel,
          T = N._selectionModel;
        g !== E && (g && (g.umm(N.handleDataModelChange, N), g.umd(N.handleDataPropertyChange, N), T || g.sm().ums(N.handleSelectionChange, N)), N._dataModel = E, E.mm(N.handleDataModelChange, N), E.md(N.handleDataPropertyChange, N), T ? T._21I(E) : E.sm().ms(N.handleSelectionChange, N), N.invalidateAll(!0), N.invalidateLight(), N.fp(dg, g, E)) },
      handleDataPropertyChange: function (d) {
        var U = d.data;
        this.invalidateData(U), we(U) && "s:light.type" === d.property && this.invalidateLight() },
      invalidateLight: function () { this._lightChanged || (this._lightChanged = !0, this.iv()) },
      onPropertyChanged: function (o) {
        var M = this,
          N = o.property;
        M.iv(), M._18Q = $, "eye" === N ? M._33Q = !0 : "devicePixelRatio" === N ? M._42($, M._devicePixelRatio || bk) : wn[N] && Kq(M) },
      _5O: function (R) {
        var _ = R._22Q();
        return _ ? new _(this, R) : $ },
      getData3dUI: function (A) {
        var q = this._25I[A._id];
        return q === B && (q = this._5O(A), this._25I[A._id] = q), q },
      invalidateAll: function (V) {
        var w = this;
        if (V) {
          for (var s in w._25I) {
            var J = w._25I[s];
            J && J.dispose() }
          w._25I = {}, w.iv(), Rj(w) } else w.dm().each(function (c) { w.invalidateData(c) }) },
      invalidateSelection: function () {
        var x = this;
        x.sm().each(function (n) { x.invalidateData(n) }) },
      invalidateData: function (H) {
        var T = this,
          w = T.getData3dUI(H);
        w && (w.iv(), T.iv()), Rj(T, H) },
      getShape3dText: function ($) {
        return $.getStyle("shape3d.text") || this.getLabel($) },
      invalidateBatch: function (M) {
        var z = this,
          F = z._33O,
          t = F[M],
          H = [],
          C = {};
        if (t) { t.ds.forEach(function (I) {
            var m = z.getData3dUI(I);
            m && m.iv(), delete z._34O[I._id], H.push(I._id) }), delete F[M];
          for (var D, K, O, N, U, j, V, k, Q, e = 0; 2 > e; e++) {
            var l = z[["_wireframeModelMap", "_polylineModelMap"][e]],
              g = z[["_wireframeIndexMap", "_polylineIndexMap"][e]];
            for (C = {}, k = 0; k < H.length; k++) {
              var X = g[H[k]];
              if (X) { delete g[H[k]], Q = X.batch, D = l[Q];
                var P = X.begin,
                  r = X.size,
                  y = 3 * P,
                  Y = 3 * r,
                  s = 4 * P,
                  W = 4 * r;
                for (K = D.ds, O = D.vs, N = D.cs, U = D.ps, j = D.ls, V = X.index, D.invalidate = !0, K[V] = B, V = y; y + Y > V; V++) O[V] = B;
                for (V = s; s + W > V; V++) N[V] = B;
                for (V = s; s + W > V; V++) U[V] = B;
                if (j)
                  for (V = y; y + Y > V; V++) j[V] = B;
                C[Q] = !0 } }
            for (Q in C) { D = l[Q], K = D.ds, O = D.vs, N = D.cs, U = D.ps, j = D.ls;
              var o = [];
              for (V = 0; V < K.length; V++) K[V] !== B && o.push(K[V]);
              if (0 === o.length) delete l[Q];
              else {
                for (D.ds = o, o = [], V = 0; V < O.length; V++) O[V] !== B && o.push(O[V]);
                for (D.vs = o, o = [], V = 0; V < N.length; V++) N[V] !== B && o.push(N[V]);
                for (D.cs = o, o = [], V = 0; V < U.length; V++) U[V] !== B && o.push(U[V]);
                if (D.ps = o, j) {
                  for (o = [], V = 0; V < j.length; V++) j[V] !== B && o.push(j[V]);
                  D.ls = o } } } }
          z.iv() } },
      handleDataModelChange: function (X) {
        var z = this,
          b = X.kind,
          G = X.data;
        if ("add" === b) z.invalidateData(G), lf(G) && G.getEdgeGroup() && G.getEdgeGroup().eachSiblingEdge(z.invalidateData, z), we(G) && z.invalidateLight();
        else if (b === Pr) {
          var u = G._id,
            Y = z._25I[u];
          Y && (Y.dispose(), delete z._25I[u], z.iv()), G === z._currentSubGraph && z.setCurrentSubGraph($), Rj(z, G), we(G) && z.invalidateLight() } else b === Do && (z.invalidateAll(!0), z.setCurrentSubGraph($), Rj(z), z.invalidateLight()) },
      toCanvas: function (X) {
        var y = this,
          W = y.getGL();
        if (y.validate(), X) {
          var R = W.getParameter(W.COLOR_CLEAR_VALUE);
          El(W, X) }
        y._42($, 1);
        var j = y.getWidth(),
          B = y.getHeight(),
          k = new Uint8Array(4 * j * B),
          A = Jr(),
          o = A.getContext("2d");
        W.readPixels(0, 0, j, B, W.RGBA, W.UNSIGNED_BYTE, k), vr(A, j, B, 1);
        for (var E = o.getImageData(0, 0, j, B), b = E.data, v = 0; v < b.length; v += 4) {
          var D = v / 4,
            w = G(D / j),
            m = D - w * j;
          D = 4 * ((B - 1 - w) * j + m), b[D] = k[v], b[D + 1] = k[v + 1], b[D + 2] = k[v + 2], b[D + 3] = k[v + 3] }
        return o.putImageData(E, 0, 0), X && El(W, R), y._42($, y._devicePixelRatio || bk), A },
      toDataURL: function (j, f) {
        var Y = this,
          d = Y.getGL();
        if (Y.validate(), j) {
          var r = d.getParameter(d.COLOR_CLEAR_VALUE);
          El(d, j) }
        Y._42($, 1);
        var t = Y._canvas.toDataURL(f || "image/png", 1);
        return j && El(d, r), Y._42($, Y._devicePixelRatio || bk), t },
      getGL: function () {
        var y = this,
          v = y._26I,
          w = y._prg;
        if (!v) try { y._2O = {}, v = y._26I = y._canvas.getContext("webgl", y._attributes) || y._canvas.getContext("experimental-webgl", y._attributes), v._emptyTexture = Tq(v), y._buffer = { vs: fi(v), ns: fi(v), is: fi(v), uv: fi(v), batchColor: fi(v), batchBlend: fi(v), batchBrightness: fi(v), lineDistance: fi(v) }, y._1O = yj(v);
          var V = y._cube = { vs: fi(v), ns: fi(v), is: fi(v), uv: fi(v) };
          yp(v, V.vs, pl), yp(v, V.ns, vk), yp(v, V.uv, yl), As(v, V.is, Gq) } catch (L) {}
        if (v && !w) {
          if (w = y._prg = v.createProgram(), !w) return $;
          var T = y._dirs.length,
            Q = y._spots.length,
            X = y._59O.length,
            O = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
          T && O.push("uDirColor", "uDirPosition"), Q && O.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), X && O.push("uPointColor", "uPointRange", "uPointPosition"), El(v, [0, 0, 0, 0]), v.clearDepth(1), v.enable(v.DEPTH_TEST), v.depthFunc(v.LEQUAL), v.enable(v.BLEND), v.blendFunc(v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA), Hd || (Sg = Ve(Sg.substring(0, Sg.indexOf("^#"))), Uf = Ve(Uf), Hd = !0);
          var S = ["#define MAX_DIR " + T, "#define MAX_SPOT " + Q, "#define MAX_POINT " + X, y._fogDisabled ? "" : "#define FOG", y._dashDisabled ? "" : "#define DASH", y._batchColorDisabled ? "" : "#define BATCHCOLOR", y._batchBlendDisabled ? "" : "#define BATCHBLEND", y._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
            I = ge(v, w, v.VERTEX_SHADER, Sg.replace("PREFIX", S)),
            o = ge(v, w, v.FRAGMENT_SHADER, Uf.replace("PREFIX", S));
          F ? O.push("aPosition") : (w.aPosition = 0, v.bindAttribLocation(w, 0, "aPosition")), v.linkProgram(w), O.forEach(function (L) { w[L] = /^u/.test(L) ? v.getUniformLocation(w, L) : v.getAttribLocation(w, L) }), v.useProgram(w), v.deleteShader(I), v.deleteShader(o) }
        return v },
      getBrightness: function (h) {
        var p = h.s("brightness"),
          a = this.isSelected(h) ? h.s("select.brightness") : $;
        return p == $ ? a : a == $ ? p : p * a },
      getWireframe: function (A) {
        var K = A.s("wf.visible"),
          Z = A.s("wf.width");
        return K === !0 || Z > 0 && "selected" === K && this.isSelected(A) ? { color: A.s("wf.color"), width: Z, "short": A.s("wf.short"), mat: A.s("wf.mat") } : void 0 },
      getBodyColor: function (V) {
        return V.s("body.color") },
      getMat: function (y) {
        return y.getMat ? y.getMat() : y.s("mat") },
      getFaceMat: function ($, V) {
        return $.getFaceMat ? $.getFaceMat(V) : $.s(V + ".mat") },
      getFaceBlend: function (e, r) {
        return e.s(r + ".blend") || e.s("all.blend") },
      getFaceColor: function (q, p) {
        return q.s(p + ".color") || q.s("all.color") },
      getFaceImage: function (U, f) {
        return U.s(f + ".image") || U.s("all.image") },
      getFaceDiscardSelectable: function (y, v) {
        var G = y.s(v + ".discard.selectable");
        return G == $ ? y.s("all.discard.selectable") : G },
      getFaceUv: function (y, Q) {
        return y.s(Q + ".uv") || y.s("all.uv")
      },
      getFaceUvOffset: function (x, T) {
        return x.s(T + ".uv.offset") || x.s("all.uv.offset") },
      getFaceUvScale: function (u, j) {
        return u.s(j + ".uv.scale") || u.s("all.uv.scale") },
      getFaceLight: function (U, d) {
        var X = U.s(d + ".light");
        return X == $ ? U.s("all.light") : X },
      getFaceVisible: function (C, j) {
        var y = C.s(j + ".visible");
        return y == $ ? C.s("all.visible") : y },
      getFaceOpacity: function (H, f) {
        var A = H.s(f + ".opacity");
        return A == $ ? H.s("all.opacity") : A },
      getFaceTransparent: function (D, Y) {
        var A = D.s(Y + ".transparent");
        return A == $ ? D.s("all.transparent") : A },
      getFaceReverseColor: function (f, y) {
        return f.s(y + ".reverse.color") || f.s("all.reverse.color") },
      getFaceReverseFlip: function (R, m) {
        var y = R.s(m + ".reverse.flip");
        return y == $ ? R.s("all.reverse.flip") : y },
      getFaceReverseCull: function (h, x) {
        var D = h.s(x + ".reverse.cull");
        return D == $ ? h.s("all.reverse.cull") : D },
      getTextureMap: function () {
        return this._2O },
      deleteTexture: function (V) {
        var A = this,
          X = A._2O[V];
        X && (delete A._2O[V], A.getGL().deleteTexture(X)) },
      getTexture: function (c, X) {
        if (!c) return $;
        var A = this,
          k = A.getGL(),
          Y = A._2O[c];
        if (!Y) {
          var P = bd(c);
          if (P)
            if (P.tagName) {
              if (P.dynamic) return yj(k, P, A._1O);
              Y = A._2O[c] = yj(k, P) } else {
              var o = Io(P, X),
                R = mg(P, X);
              if (o >= 1 && R >= 1) {
                var x = Sr(o, R);
                return yg(x, P, 0, 0, o, R, X, A), x.restore(), yj(k, dh, A._1O) } } }
        return Y },
      redraw: function () { this.iv() },
      validateImpl: function () {
        var W = this;
        if (W._lightChanged) { W._lightChanged = !1;
          var v = [],
            j = [],
            n = [];
          W.dm().each(function (q) {
            if (we(q)) {
              var Q = q.s("light.type");
              Q === Kb ? v.push(q) : Q === zb ? j.push(q) : Q === fl && n.push(q) } }), (v.length !== W._59O.length || j.length !== W._spots.length || n.length !== W._dirs.length) && Kq(W), W._59O = v, W._spots = j, W._dirs = n }
        W._42(), W._1o.iv() },
      _42: function (C, J) {
        var M = this;
        if (!M._35O && (!Li || yf(Li))) {
          var i, O;
          C && (C instanceof Ii ? O = C : i = C);
          var R = M._canvas,
            c = M.getWidth(),
            Y = M.getHeight(),
            j = M.getGL(),
            E = M._prg;
          if (j) {
            if (J ? C || vr(R, c, Y, J) : (J = M._devicePixelRatio || bk, C || c === R.clientWidth && Y === R.clientHeight || vr(R, c, Y, J)), j.viewport(0, 0, c * J, Y * J), M._81O = $, j.clear(j.COLOR_BUFFER_BIT | j.DEPTH_BUFFER_BIT), Cm(j, E.uBrightness, 1), Cm(j, E.uOpacity, 1), Cm(j, E.uPartOpacity, 1), j._picking = !!C, Cm(j, E.uPick, !!C), Cm(j, E.uTexture, !1), Cm(j, E.uFix, !1), Cm(j, E.uTransparent, !1), Cm(j, E.uBatchColor, !1), Cm(j, E.uBatchBlend, !1), Cm(j, E.uBatchBrightness, !1), C || (_q(M, j, E), M._fogDisabled || (Cm(j, E.uFogColor, M._fogColor), Cm(j, E.uFogNear, M._fogNear), Cm(j, E.uFogFar, M._fogFar))), Fe(j, E.aPosition), Fe(j, E.aNormal), to(j, E.aUv), to(j, E.aBatchColor), to(j, E.aBatchBlend), to(j, E.aBatchBrightness), to(j, E.aLineDistance), Cm(j, E.uPMatrix, Ep(M)), Cm(j, E.uViewMatrix, If(M, M._7O)), O) {
              var K = j.getParameter(j.COLOR_CLEAR_VALUE);
              j.clearColor(0, 0, 0, 0), j.disable(j.BLEND), to(j, E.aNormal), yp(j, M._cube.vs, $, E.aPosition), As(j, M._cube.is), Ag(O, M, ci, 0), Ag(O, M, il, 6), Ag(O, M, Fq, 12), Ag(O, M, Vk, 18), Ag(O, M, xd, 24), Ag(O, M, qc, 30), Fe(j, E.aNormal), El(j, K) } else if (i) { i.value = 2;
              var K = j.getParameter(j.COLOR_CLEAR_VALUE);
              j.clearColor(0, 0, 0, 0), j.disable(j.BLEND), M._95I(j, E, i), Bg(M, i), ue(M, M._polylineModelMap, i), ue(M, M._wireframeModelMap, i), Cm(j, E.uTransparent, !0), M._95I(j, E, i, !0), Bg(M, i, !0), ue(M, M._polylineModelMap, i, !0), ue(M, M._wireframeModelMap, i, !0), Cm(j, E.uTransparent, !1), j.disable(j.DEPTH_TEST), M._30O._42(j, E, i), j.enable(j.DEPTH_TEST), El(j, K) } else j.disable(j.BLEND), M._31O._42(j, E), M.drawSky(j, E), M._95I(j, E), Bg(M), ue(M, M._polylineModelMap), ue(M, M._wireframeModelMap), j.enable(j.BLEND), j.depthMask(!1), Cm(j, E.uTransparent, !0), M._95I(j, E, $, !0), Bg(M, $, !0), ue(M, M._polylineModelMap, $, !0), ue(M, M._wireframeModelMap, $, !0), Cm(j, E.uTransparent, !1), j.depthMask(!0), j.disable(j.BLEND), j.disable(j.DEPTH_TEST), M._32O._42(j, E), M._30O._42(j, E), j.enable(j.DEPTH_TEST);
            yp(j, $), As(j, $), M._33Q = !1 } } },
      _updateSkyBoxPosition: function (Z) {
        if (this._skyBox && Z && "eye" === Z.property) {
          var y = Z.newValue;
          this._skyBox.p3(y[0], y[1], y[2]), this.invalidateData(this._skyBox) } },
      setSkyBox: function (I) { this._skyBox = I, this.ump(this._updateSkyBoxPosition, this), this.invalidateAll(), I && (this.mp(this._updateSkyBoxPosition, this), this._updateSkyBoxPosition()) },
      drawSky: function (K, b, C) {
        var f = this,
          A = f._skyBox;
        if (A) {
          var S = f.getData3dUI(A);
          S && S._42(K, b, C, function () {
            return !0 }), K.clear(K.DEPTH_BUFFER_BIT) } },
      _95I: function (M, B, F, j) {
        function t(Q) {
          if (D.isVisible(Q) && (!f || p)) {
            if (!F && D.isTransparentMask(Q)) return;
            var e = D.getData3dUI(Q);
            e && e._42(M, B, F, O) } }
        var D = this,
          O = function (d) {
            return j ? d : !d };
        D.sky && M.clear(M.DEPTH_BUFFER_BIT), D.dm().each(t) },
      getLogicalPoint: function (i) {
        return Ur(i, this._canvas) },
      getHitFaceInfo: function (g) { g.target && (g = this.lp(g));
        var F = this.getDataInfoAt(g);
        if (F) {
          var h = this._1o.face(F.data, Vl(g.x, g.y));
          if (h) return { data: F.data, face: h } }
        return $ },
      getDataAt: function (q) {
        var k = this.getDataInfoAt(q);
        return k ? k.data : $ },
      getDataInfoAt: function (I, b) {
        return I.target && (I = this.lp(I)), this._1o.get(Vl(I.x, I.y, b), !0) },
      getDatasInRect: function (D) {
        return this._1o.get(D) },
      setEditable: function (J) {
        var B = this,
          m = B._editable;
        B._editable = J, this.fp(bg, m, J) },
      isEditable: function (m) {
        var r = this;
        return r._editable ? pg(m) ? m.s("3d.editable") ? r._editableFunc ? r._editableFunc(m) : !0 : !1 : !1 : !1 },
      isSelectable: function (s) {
        return s.s("3d.selectable") && this.sm().isSelectable(s) },
      isMovable: function (B) {
        var W = this;
        return lf(B) && B.getStyle(Cg) !== Md ? !1 : B.s("3d.movable") ? W._movableFunc ? W._movableFunc(B) : !0 : !1 },
      isSizeEditable: function (i) {
        return pg(i) ? this._sizeEditableFunc ? this._sizeEditableFunc(i) : !0 : !1 },
      isRotationEditable: function (E) {
        return pg(E) && E.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(E) : !0 : !1 },
      handleDelete: function () { this._editable && this.removeSelection() },
      zoomIn: function (k) { this.setZoom(xk, k) },
      zoomOut: function (L) { this.setZoom(1 / xk, L) },
      setZoom: function (l, E) {
        if (1 !== l) {
          var L = this;
          if (L._ortho) return L.setOrthoZoom(l, E), void 0;
          L._14o && L._14o.stop(!0);
          var k = 1 / l,
            o = L._eye,
            P = L._center,
            G = P[0] + (o[0] - P[0]) * k - o[0],
            q = P[1] + (o[1] - P[1]) * k - o[1],
            m = P[2] + (o[2] - P[2]) * k - o[2];
          if (!(Rk(o, P) < L._moveStep && 1 > k)) {
            if (E = pj(E)) {
              var C = Oj(o);
              return E.action = function (T) { L.fi({ kind: L._zooming ? "betweenZoom" : "beginZoom" }), L._zooming = 1, o[0] = C[0] + G * T, o[1] = C[1] + q * T, o[2] = C[2] + m * T, L.fp(li, $, o) }, E._37o = function () { delete L._14o, delete L._zooming, L.fi({ kind: "endZoom" }), L.onZoomEnded() }, L._14o = fr(E) }
            o[0] += G, o[1] += q, o[2] += m, L.fp(li, $, o) } } },
      setOrthoZoom: function (K, A) {
        if (1 !== K) {
          var X = this;
          X._14o && X._14o.stop(!0);
          var j = X._orthoWidth,
            u = j / K - j;
          if (!(j < X._moveStep && K > 1)) return (A = pj(A)) ? (A.action = function (T) { X.fi({ kind: X._zooming ? "betweenZoom" : "beginZoom" }), X._zooming = 1, X.setOrthoWidth(j + u * T) }, A._37o = function () { delete X._14o, delete X._zooming, X.fi({ kind: "endZoom" }), X.onZoomEnded() }, X._14o = fr(A)) : (X.setOrthoWidth(j / K), void 0) } },
      getPositionInfo: function (t) {
        var E = this,
          n = E._eye,
          v = E._center,
          k = E.getAspect(),
          D = t ? Cc(co(v, n, !0), co(t, n)) : Rk(n, v);
        if (E._ortho) {
          var M = E._orthoWidth;
          return { length: D, height: M / k, width: M } }
        var I = 2 * m(E._fovy / 2) * D;
        return { length: D, height: I, width: I * k } },
      getCenterInfo: function () {
        var A = this;
        return A._81O || (A._81O = A.getPositionInfo()), Oj(A._81O) },
      rotate: function (O, D, u, p) {
        var N = this;
        if (O || D) { p == $ && (p = N._firstPersonMode), N._88O && N._88O.stop(!0);
          var e = N._center,
            k = N._eye,
            K = N.getCenterInfo().length,
            r = p ? e : k,
            f = p ? k : e,
            t = co(r, f),
            B = z(t[0], t[2]),
            J = z(A(t[0] * t[0] + t[2] * t[2]), t[1]),
            H = p ? db : li;
          return p && (D = -D), (u = pj(u)) ? (u.action = function (C) { N.fi({ kind: N._rotating ? "betweenRotate" : "beginRotate" }), N._rotating = 1;
            var E = B + O * C,
              z = J + D * C;
            z = Ki(z), t[0] = K * P(z) * P(E), t[1] = K * s(z), t[2] = K * P(z) * s(E), r[0] = f[0] + t[0], r[1] = f[1] + t[1], r[2] = f[2] + t[2], N.fp(H, $, r) }, u._37o = function () { delete N._88O, delete N._rotating, N.fi({ kind: "endRotate" }), N.onRotateEnded() }, N._88O = fr(u)) : (B += O, J += D, J = Ki(J), t[0] = K * P(J) * P(B), t[1] = K * s(J), t[2] = K * P(J) * s(B), r[0] = f[0] + t[0], r[1] = f[1] + t[1], r[2] = f[2] + t[2], N.fp(H, $, r), void 0) } },
      pan: function (a, d, R, h) {
        if (a || d) {
          var D = this;
          h == $ && (h = D._firstPersonMode), D._89O && D._89O.stop(!0);
          var J = If(D),
            Q = [J[0] * a, J[4] * a, J[8] * a],
            G = [J[1] * d, J[5] * d, J[9] * d],
            I = Q[0] + G[0],
            t = Q[1] + G[1],
            H = Q[2] + G[2],
            k = D._center,
            l = D._eye;
          if (h) {
            var v = xc(D.getBoundaries(), l[0], l[2], l[0] + I, l[2] + H, A(I * I + H * H));
            I = v[0], H = v[1] }
          if (R = pj(R)) {
            var p = Oj(l),
              L = Oj(k);
            return R.action = function (m) { D.fi({ kind: D._panning ? "betweenPan" : "beginPan" }), D._panning = 1, k[0] = L[0] + I * m, k[1] = L[1] + t * m, k[2] = L[2] + H * m, l[0] = p[0] + I * m, l[1] = p[1] + t * m, l[2] = p[2] + H * m, D.fp(li, $, l), D.fp(db, $, k) }, R._37o = function () { delete D._89O, delete D._panning, D.fi({ kind: "endPan" }), D.onPanEnded() }, D._89O = fr(R) }
          k[0] += I, k[1] += t, k[2] += H, l[0] += I, l[1] += t, l[2] += H, D.fp(li, $, l), D.fp(db, $, k) } },
      walk: function (T, n, h) {
        if (T) {
          var k = this;
          h == $ && (h = k._firstPersonMode), k._90O && k._90O.stop(!0);
          var G = k._center,
            v = k._eye,
            O = co(G, v, !0);
          if (h) {
            var C = xc(k.getBoundaries(), v[0], v[2], v[0] + O[0] * T, v[2] + O[2] * T, N(T));
            if (T = Rk(C), !T) return;
            O = [C[0] / T, 0, C[1] / T] }
          if (n = pj(n)) {
            var y = Oj(v),
              X = Oj(G);
            return n.action = function (x) { k.fi({ kind: k._walking ? "betweenWalk" : "beginWalk" }), k._walking = 1;
              var F = T * x;
              v[0] = y[0] + O[0] * F, v[1] = y[1] + O[1] * F, v[2] = y[2] + O[2] * F, G[0] = X[0] + O[0] * F, G[1] = X[1] + O[1] * F, G[2] = X[2] + O[2] * F, k.fp(li, $, v), k.fp(db, $, G) }, n._37o = function () { delete k._90O, delete k._walking, k.fi({ kind: "endWalk" }), k.onWalkEnded() }, k._90O = fr(n) }
          v[0] += O[0] * T, v[1] += O[1] * T, v[2] += O[2] * T, G[0] += O[0] * T, G[1] += O[1] * T, G[2] += O[2] * T, k.fp(li, $, v), k.fp(db, $, G) } },
      handleScroll: function (D, N) { D.preventDefault();
        var R = this,
          s = R._moveStep;
        R.isFirstPersonMode() ? R.isPannable() && R.pan(0, N > 0 ? s : -s) : R.isZoomable() && R.setZoom(0 > N ? 1 / zc : zc) },
      handlePinch: function (Q, R) { this.isZoomable() && this.setZoom(R > Q ? 1 / Pp : Pp) },
      reset: function () { this.setCenter(r.graph3dViewCenter), this.setEye(r.graph3dViewEye), this.setUp(r.graph3dViewUp) },
      moveSelection: function (R, K, S) {
        var l, L = this,
          W = L.dm();
        W && (l = W.getHistoryManager()), l && l.beginInteraction(), uq(this.sm().toSelection(this.isMovable, this), R, K, S), l && l.endInteraction() },
      getMoveMode: function (e, a) {
        var W = a.s("3d.move.mode");
        if (W) return W;
        var V = "88",
          n = "89",
          u = "90";
        return dl(e) || jd[V] && jd[n] && jd[u] ? "xyz" : jd[V] && jd[n] ? "xy" : jd[V] && jd[u] ? "xz" : jd[n] && jd[u] ? "yz" : jd[V] ? "x" : jd[n] ? "y" : jd[u] ? "z" : "xz" },
      handleTick: function () {
        var z = this,
          N = !1,
          Q = z._moveStep,
          k = Q,
          o = !1,
          K = !0,
          R = z._rotateStep * (K ? -1 : 1);
        if (z.isWalkable() || (k = 0), z.isPannable() || (Q = 0), z.isRotatable() || (R = 0), z._32Q) {
          var Z = (Qp() - z._32Q) / 50;
          k *= Z, Q *= Z, R *= Z }
        z._31Q && (Sq(z._31Q), delete z._31Q, delete z._32Q), Vp() && (N = !0, z.pan(-Q, 0, o, K)), sj() && (N = !0, z.pan(Q, 0, o, K)), Vj() && (N = !0, dl() ? z.pan(0, Q, o, K) : z.walk(k, o, K)), bp() && (N = !0, dl() ? z.pan(0, -Q, o, K) : z.walk(-k, o, K)), Be() && (N = !0, z.rotate(-R, 0, o, K)), ih() && (N = !0, z.rotate(R, 0, o, K)), vf() && (N = !0, z.rotate(0, -R / 2, o, K)), Pj() && (N = !0, z.rotate(0, R / 2, o, K)), N && (z._32Q = Qp(), z._31Q = _f(z.handleTick, z)) },
      handleKeyDown: function (X) {
        var v = this;!ll(X) && Fi[X.keyCode] ? v.handleTick() : em(X) ? v.selectAll() : kh(X) ? v.handleDelete(X) : Vq(X) && this.isResettable() && v.reset() },
      checkDoubleClickOnNote: function (F, N, p) {
        var j = this;
        if (p === Cd) {
          if (N.s("note.toggleable")) return N.s(jf, !N.s(jf)), j.fi({ kind: "toggleNote", event: F, data: N, part: p }), !0 } else if (p === Jd && N.s("note2.toggleable")) return N.s(jn, !N.s(jn)), j.fi({ kind: "toggleNote2", event: F, data: N, part: p }), !0;
        return !1 },
      checkDoubleClickOnRotation: function (b, F, k) {
        return k === zp ? (F.setRotationX(0), !0) : k === Xq ? (F.setRotationY(0), !0) : k === Mp ? (F.setRotationZ(0), !0) : !1 },
      onRotateEnded: function () {},
      onWalkEnded: function () {},
      toViewPosition: function (f) {
        var C = this,
          s = C.getWidth() / 2,
          Q = C.getHeight() / 2,
          T = C._18Q;
        return T || (T = Ep(C), C._18Q = Ke(T, T, If(C))), f = pk([f[0], f[1], f[2], 1], T), { x: s + s * f[0] / f[3], y: Q - Q * f[1] / f[3] } },
      getHitPosition: function (u, K, _) {
        var X = this,
          M = X.getWidth(),
          d = X.getHeight(),
          F = u.target ? X.lp(u) : u,
          B = F.x - M / 2,
          q = F.y - d / 2,
          U = X.getCenterInfo(),
          R = If(X);
        K = K ? K : [0, 0, 0], _ = _ ? _ : [0, 1, 0], B = B / M * U.width, q = -1 * q / d * U.height;
        var k = [R[0] * B, R[4] * B, R[8] * B],
          a = [R[1] * q, R[5] * q, R[9] * q],
          A = [k[0] + a[0], k[1] + a[1], k[2] + a[2]],
          L = X.getCenter(),
          H = kd(X, K, _, [A[0] + L[0], A[1] + L[1], A[2] + L[2]]);
        return H ? H : [0, 0, 0] },
      getLineLength: function (v) { this.validate();
        var Q = this.getData3dUI(v);
        if (Q && Q.getCache) {
          var p = Q.getCache();
          if (p) return p[p.length - 1].length }
        return 0 },
      getLineOffset: function (_, J) {
        var r = this.getData3dUI(_);
        if (r && r.getCache) {
          var C = r.getCache();
          if (C) return hc(C, J) }
        return $ },
      isLabelVisible: function () {
        return !0 },
      isNoteVisible: function () {
        return !0 }
    });
    var ik = Dk.Interactor = function (U) { this.gv = U };
    Mi("Interactor", y, { ms_listener: 1, getView: function () {
        return this.gv.getView() }, setUp: function () { this.addListeners() }, tearDown: function () { this.removeListeners() } });
    var Ni = Dk.DefaultInteractor = function (o) { Dj(Ni, this, [o]) };
    Mi("DefaultInteractor", ik, { handle_contextmenu: function (O) { be(O) }, handle_mousewheel: function (J) { this.gv.handleScroll(J, J.wheelDelta / 40) }, handle_DOMMouseScroll: function (h) { 2 === h.axis && this.gv.handleScroll(h, -h.detail) }, handle_keydown: function (F) { this.gv.handleKeyDown(F) }, handle_mousedown: function (k) { this.handle_touchstart(k) }, handle_touchstart: function (V) { be(V);
        var Z = this,
          m = Z.gv,
          O = hp(V),
          N = m.getDataInfoAt(V),
          v = N ? N.data : $,
          z = N ? N.part : $,
          t = m.sm(),
          d = sd(V),
          U = kp(V);
        m.setFocus(V) && (Z._62O = $, Z._57I = $, v ? ll(V) ? t.co(v) ? t.rs(v) : t.as(v) : t.co(v) || t.ss(v) : O && (ll(V) ? m.isRectSelectable() && (Z._62O = Rp) : Z._57I = en(V)), Z._31Q && (Sq(Z._31Q), delete Z._31Q, delete Z._32Q), Z._62O || (m.isFirstPersonMode() && (dl(V) || U > 2 ? Z._62O = "pan" : m.isMouseRoamable() || c ? (Z._62O = "roaming", Z.foward = d && hp(V), Z._32Q = Qp(), Z._31Q = _f(Z.tick, Z)) : O || (Z._62O = "roaming")), Z._62O || (O && d && tm[z] ? (Z._62O = z, Z.p3 = v.p3()) : O && d && pg(v) && m.isSelected(v) && m.isMovable(v) ? (Z._62O = "move", Z.p3 = v.p3(), Z.movedata = v) : c && (U > 2 ? Z._62O = "pan" : 2 === U && (Z.dist = qs(V), Z._62O = "pinch")))), Z.point = m.lp(V), Ud(Z, V), ep(V) ? m.handleDoubleClick(V, v, z) : m.handleClick(V, v, z)) }, tick: function () {
        var I = this,
          J = I.gv,
          Q = J._moveStep;
        I.point && J.isWalkable() && (I._32Q && (Q *= (Qp() - I._32Q) / 50), J.walk(I.foward ? Q : -Q), I._32Q = Qp(), I._31Q = _f(I.tick, I)) }, handle_mouseup: function (Y) { this.handle_touchend(Y) }, handle_touchend: function (K) {
        var O = this._57I;
        O && (Rk(O, en(K)) <= 1 && this.gv.sm().cs(), this._57I = $) }, handleWindowMouseMove: function (F) { this.handleWindowTouchMove(F) }, handleWindowTouchMove: function (K) {
        var V, y, q = this,
          R = q.gv,
          i = q._62O,
          H = q.point,
          L = R.dm(),
          w = L.getHistoryManager(),
          c = R.lp(K),
          h = c.x - H.x,
          E = c.y - H.y,
          D = -Q * h / R.getWidth(),
          W = -Q * E / R.getHeight();
        if ("roaming" === i) q.rotate(K, D / 2, W / 2);
        else if (i === zp || i === Xq || i === Mp) w && !R._86O && w.beginInteraction(), R.fi({ kind: R._86O ? "betweenEditRotation" : "beginEditRotation", event: K }), R._86O = 1, R.sm().each(function (I) {
          if (pg(I) && R.isRotationEditable(I)) {
            var V = N(D) > N(W) ? D : W;
            i === zp ? I.setRotationX(I.getRotationX() + V) : i === Xq ? I.setRotationY(I.getRotationY() + V) : i === Mp && I.setRotationZ(I.getRotationZ() + V) } });
        else if ("move" === i || tm[i]) { i === yr || i === _p || i === Lq ? (w && !R._87O && w.beginInteraction(), R.fi({ kind: R._87O ? "betweenEditSize" : "beginEditSize", event: K }), R._87O = 1) : (w && !R._moving && w.beginInteraction(), R.fi({ kind: R._moving ? "betweenMove" : "beginMove", event: K }), R._moving = 1);
          var I, g = q.p3,
            Y = R.getPositionInfo(g),
            z = If(R);
          I = i === pi ? "x" : i === Hf ? "y" : i === Gf ? "z" : i === yr ? "sx" : i === _p ? "sy" : i === Lq ? "sz" : R.getMoveMode(K, q.movedata), h = h / R.getWidth() * Y.width, E = -1 * E / R.getHeight() * Y.height;
          var s, $, k = [z[0] * h, z[4] * h, z[8] * h],
            O = [z[1] * E, z[5] * E, z[9] * E],
            n = k[0] + O[0],
            T = k[1] + O[1],
            r = k[2] + O[2],
            o = [g[0] + n, g[1] + T, g[2] + r],
            a = co(R.getEye(), o, !0);
          if ("xyz" === I ? (s = o, R.moveSelection(n, T, r)) : "xz" === I ? (s = kd(R, g, [0, 1, 0], o), s && R.moveSelection(s[0] - g[0], 0, s[2] - g[2])) : "xy" === I ? (s = kd(R, g, [0, 0, 1], o), s && R.moveSelection(s[0] - g[0], s[1] - g[1], 0)) : "yz" === I ? (s = kd(R, g, [1, 0, 0], o), s && R.moveSelection(0, s[1] - g[1], s[2] - g[2])) : "x" === I || "sx" === I ? (a[0] = 0, s = kd(R, g, a, o), s && ($ = s[0] - g[0], "x" === I ? R.moveSelection($, 0, 0) : R.sm().each(function (q) { pg(q) && R.isSizeEditable(q) && (V = M(Er, q.getWidth() + $), y = V / q.getWidth(), q.setWidth(V), dl(K) && (q.setHeight(q.getHeight() * y), q.setTall(q.getTall() * y))) }))) : "y" === I || "sy" === I ? (a[1] = 0, s = kd(R, g, a, o), s && ($ = s[1] - g[1], "y" === I ? R.moveSelection(0, $, 0) : R.sm().each(function (C) { pg(C) && R.isSizeEditable(C) && (V = M(Er, C.getTall() + $), y = V / C.getTall(), C.setTall(V), dl(K) && (C.setHeight(C.getHeight() * y), C.setWidth(C.getWidth() * y))) }))) : ("z" === I || "sz" === I) && (a[2] = 0, s = kd(R, g, a, o), s && ($ = s[2] - g[2], "z" === I ? R.moveSelection(0, 0, $) : R.sm().each(function (T) { pg(T) && R.isSizeEditable(T) && (V = M(Er, T.getHeight() + $), y = V / T.getHeight(), T.setHeight(V), dl(K) && (T.setTall(T.getTall() * y), T.setWidth(T.getWidth() * y))) }))), !s) return;
          q.p3 = s } else if (i === Rp) {
          var m = q.div;
          m || (m = q.div = tp(), Af(q.getView(), m), m.op = H, m.style.background = R.getRectSelectBackground()), R.fi({ kind: R._rectSelecting ? "betweenRectSelect" : "beginRectSelect", event: K }), R._rectSelecting = 1, m.rect = ji(m.op, c), Am(m, m.rect) } else if ("pinch" === i && 2 === kp(K)) { R.fi({ kind: R._pinching ? "betweenPinch" : "beginPinch", event: K }), R._pinching = 1;
          var $ = qs(K);
          R.handlePinch($, q.dist), q.dist = $ } else "pan" === i || dl(K) ? q.pan(K, h, E) : R.isFirstPersonMode() || (hp(K) ? q.rotate(K, D, W) : (q.pan(K, h, 0), R.isWalkable() && (R.fi({ kind: R._walking ? "betweenWalk" : "beginWalk", event: K }), R._walking = 1, R.walk(E / R.getHeight() * R.getCenterInfo().height))));
        q.point = c }, pan: function (N, k, o) {
        var D = this.gv;
        if (D.isPannable()) {
          var a = D.getCenterInfo(),
            u = k / D.getWidth() * a.width,
            w = -1 * o / D.getHeight() * a.height;
          D.fi({ kind: D._panning ? "betweenPan" : "beginPan", event: N }), D._panning = 1, D.pan(-u, -w) } }, rotate: function (E, x, g) {
        var P = this.gv;
        P.isRotatable() && (P.fi({ kind: P._rotating ? "betweenRotate" : "beginRotate", event: E }), P._rotating = 1, P.rotate(x, g)) }, handleWindowMouseUp: function (h) { this.handleWindowTouchEnd(h) }, handleWindowTouchEnd: function (U) {
        var t = this,
          c = t.gv,
          l = c.dm(),
          n = l.getHistoryManager(),
          p = t.div;
        if (p) {
          var A = c.getDatasInRect(p.rect);
          if (!A.isEmpty()) {
            var Z = c.sm(),
              o = Z.toSelection();
            A.each(function (j) { Z.co(j) ? o.remove(j) : o.add(j) }), Z.ss(o) }
          Sc(p) }
        c._moving && (delete c._moving, c.fi({ kind: "endMove", event: U }), c.onMoveEnded(), n && n.endInteraction()), c._panning && (delete c._panning, c.fi({ kind: "endPan", event: U }), c.onPanEnded()), c._rotating && (delete c._rotating, c.fi({ kind: "endRotate", event: U }), c.onRotateEnded()), c._86O && (delete c._86O, c.fi({ kind: "endEditRotation", event: U }), n && n.endInteraction()), c._87O && (delete c._87O, c.fi({ kind: "endEditSize", event: U }), n && n.endInteraction()), c._pinching && (delete c._pinching, c.fi({ kind: "endPinch", event: U }), c.onPinchEnded()), c._rectSelecting && (delete c._rectSelecting, c.fi({ kind: "endRectSelect", event: U }), c.onRectSelectEnded()), c._walking && (delete c._walking, c.fi({ kind: "endWalk", event: U }), c.onWalkEnded()), t.dist = t.point = t._62O = t.p3 = t.movedata = t.div = t._57I = t._32Q = t._31Q = t.foward = $ } });
    var te = function (x) { this.gv = x };
    Xk(te, y, { _iv: !0, iv: function () { this._iv = !0 }, face: function (Y, l) {
        var p = this,
          V = p.gv.getGL();
        if (!V || !pg(Y)) return $;
        var I = l.x,
          s = l.width,
          g = l.height,
          Q = p.height - l.y - g,
          e = G(s / 2),
          x = new Uint8Array(4 * s * g),
          j = 0;
        for (p.iv(), p.validate(Y), So(V, p.frame), V.readPixels(I, Q, s, g, V.RGBA, V.UNSIGNED_BYTE, x), So(V, $), p.iv(); e >= j; j++)
          for (var B = e - j, w = e + j, O = B; w >= O; O++)
            for (var f = B; w >= f; f++)
              if (O === B || O === w || f === B || f === w) {
                var M = Kc.m[x[4 * (O * s + f)]];
                if (M) return M } }, get: function (K, r) { this.validate();
        var b = this,
          U = b.gv.getGL();
        if (!U) return $;
        var X, c, y = K.x,
          S = K.width,
          s = K.height,
          n = b.height - K.y - s,
          Y = G(S / 2),
          Q = new Uint8Array(4 * S * s),
          D = 0,
          C = Q.length,
          V = r ? $ : new Ol,
          H = r ? $ : {};
        if (So(U, b.frame), U.readPixels(y, n, S, s, U.RGBA, U.UNSIGNED_BYTE, Q), So(U, $), r) {
          for (; Y >= D; D++)
            for (var M = Y - D, w = Y + D, R = M; w >= R; R++)
              for (var t = M; w >= t; t++)
                if ((R === M || R === w || t === M || t === w) && (X = b.info(Q, 4 * (R * S + t)))) return X } else
          for (; C > D; D += 4) X = b.info(Q, D), X && (c = X.data, H[c._id] || (V.add(c), H[c._id] = c));
        return V }, info: function (Q, O) {
        return this.colorMap[(Q[O] << 24) + (Q[O + 1] << 16) + (Q[O + 2] << 8) + Q[O + 3]] }, validate: function (m) {
        var F = this,
          A = F.gv,
          B = A.getGL();
        if (B) {
          var O = A.getWidth(),
            l = A.getHeight(),
            N = B.RGBA,
            r = B.TEXTURE_2D,
            o = B.RENDERBUFFER,
            w = B.FRAMEBUFFER;
          F.texture || (F.texture = yj(B), F.render = B.createRenderbuffer(), F.frame = B.createFramebuffer()), (F.width !== O || F.height !== l) && (Il(B, F.texture), B.texImage2D(r, 0, N, O, l, 0, N, B.UNSIGNED_BYTE, $), ak(B, B.TEXTURE_MIN_FILTER, B.LINEAR), B.bindRenderbuffer(o, F.render), B.renderbufferStorage(o, B.DEPTH_COMPONENT16, O, l), So(B, F.frame), B.framebufferTexture2D(w, B.COLOR_ATTACHMENT0, r, F.texture, 0), B.framebufferRenderbuffer(w, B.DEPTH_ATTACHMENT, o, F.render), Il(B, $), B.bindRenderbuffer(o, $), So(B, $), F.width = O, F.height = l), F._iv && (F._iv = !1, So(B, F.frame), A._42(m || (F.colorMap = {}), 1), So(B, $)) } } });
    var Hp = function (A) { this.gv = A };
    Xk(Hp, y, { gap: 0, size: 0, _42: function (N, L) {
        var G = this,
          j = G.gv,
          V = j._gridGap,
          n = j._gridSize;
        if (j._gridVisible) {
          if (G.gap !== V || G.size !== n) {
            for (var d = [], U = j._gridSize / 2, D = V * U, a = 0; 2 * U + 1 > a; a++) {
              var u = 6 * a,
                H = 6 * (2 * U + 1) + u;
              d[u] = -D, d[u + 1] = 0, d[u + 2] = -D + a * V, d[u + 3] = D, d[u + 4] = 0, d[u + 5] = -D + a * V, d[H] = -D + a * V, d[H + 1] = 0, d[H + 2] = -D, d[H + 3] = -D + a * V, d[H + 4] = 0, d[H + 5] = D }
            G.vs = new gj(d), G.gap = V, G.size = n }
          Ck(j), Pe(N, L), Dn(N), wj(N, L, 1, j._gridColor, j._buffer.vs, G.vs), Zc(N, 0, G.vs.length / 3, N.LINES), Ko(N), Nf(N, L) } else G.vs = G.gap = G.size = $ } });
    var Jm = function (X) { this.gv = X };
    Xk(Jm, y, { _42: function (Y, C) {
        var K = this.gv,
          N = K._buffer.vs,
          n = K._axisXColor,
          V = K._axisYColor,
          B = K._axisZColor,
          h = K._originAxisVisible,
          G = K._centerAxisVisible;
        if (h || G) {
          var y = F ? Y.TRIANGLES : Y.TRIANGLE_FAN,
            R = Y.LINES;
          if (Ck(K), Pe(Y, C), Dn(Y), h) {
            var f = K.getCenterInfo(),
              S = v(f.width, f.height) / 5,
              D = .8 * S,
              b = .05 * S;
            wj(Y, C, 1.5, n, N, new gj([0, 0, 0, S, 0, 0, D, b, 0, D, 0, b, D, -b, 0, D, 0, -b, D, b, 0, 0, 0, 0, 0, S, 0, b, D, 0, 0, D, b, -b, D, 0, 0, D, -b, b, D, 0, 0, 0, 0, 0, 0, S, b, 0, D, 0, b, D, -b, 0, D, 0, -b, D, b, 0, D])), Zc(Y, 0, 2, R), Zc(Y, 1, 6, y), wj(Y, C, $, V), Zc(Y, 7, 2, R), Zc(Y, 8, 6, y), wj(Y, C, $, B), Zc(Y, 14, 2, R), Zc(Y, 15, 6, y) }
          if (G) {
            var k = K._center,
              p = k[0],
              o = k[1],
              g = k[2],
              f = K.getPositionInfo(k);
            S = v(f.width, f.height) / 20, wj(Y, C, 1.5, n, N, new gj([p, o, g, p + S, o, g, p, o, g, p, o + S, g, p, o, g, p, o, g + S])), Zc(Y, 0, 2, R), wj(Y, C, $, V), Zc(Y, 2, 2, R), wj(Y, C, $, B), Zc(Y, 4, 2, R) }
          Ko(Y), Nf(Y, C) } } });
    var ko = function (M) { this.gv = M },
      pi = "edit_tx",
      Hf = "edit_ty",
      Gf = "edit_tz",
      zp = "edit_rx",
      Xq = "edit_ry",
      Mp = "edit_rz",
      yr = "edit_sx",
      _p = "edit_sy",
      Lq = "edit_sz",
      tm = {};
    tm[pi] = 1, tm[Hf] = 1, tm[Gf] = 1, tm[zp] = 1, tm[Xq] = 1, tm[Mp] = 1, tm[yr] = 1, tm[_p] = 1, tm[Lq] = 1, Xk(ko, y, { _42: function (n, J, B) {
        var k = this,
          W = k.gv,
          w = W.sm().ld();
        if (W.isEditable(w) && pg(w) && (!W.isFirstPersonMode() || !W.isMouseRoamable() && !c)) { Ck(W);
          var _, R, O = W.isMovable(w),
            e = W.isRotationEditable(w),
            a = W.isSizeEditable(w),
            s = W._axisXColor,
            S = W._axisYColor,
            j = W._axisZColor,
            d = W._editSizeColor,
            x = W.getCenterInfo(),
            E = v(x.width, x.height) / 10,
            z = E / (B ? 5 : 10),
            t = .7 * E,
            f = .4 * t,
            K = w.p3(),
            p = K[0],
            y = K[1],
            g = K[2];
          _ = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], O && k._17O(n, J, w, B, pi, s, _, [p, y - z, g, p + t, y - z, g, p + t, y, g, p + t, y, g, p, y, g, p, y - z, g, p, y - z, g + z, p + t, y - z, g + z, p + t, y - z, g, p + t, y - z, g, p, y - z, g, p, y - z, g + z]), R = p + t, a && k._17O(n, J, w, B, yr, d, _, [R, y - z, g, R + f, y - z, g, R + f, y, g, R + f, y, g, R, y, g, R, y - z, g, R, y - z, g + z, R + f, y - z, g + z, R + f, y - z, g, R + f, y - z, g, R, y - z, g, R, y - z, g + z]), R += f, e && k._17O(n, J, w, B, zp, s, _, [R, y - z, g, R + f, y - z, g, R + f, y, g, R + f, y, g, R, y, g, R, y - z, g, R, y - z, g + z, R + f, y - z, g + z, R + f, y - z, g, R + f, y - z, g, R, y - z, g, R, y - z, g + z]), _ = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], O && k._17O(n, J, w, B, Hf, S, _, [p, y, g, p, y + t, g, p - z, y + t, g, p - z, y + t, g, p - z, y, g, p, y, g, p, y, g, p, y, g - z, p, y + t, g - z, p, y + t, g - z, p, y + t, g, p, y, g]), R = y + t, a && k._17O(n, J, w, B, _p, d, _, [p, R, g, p, R + f, g, p - z, R + f, g, p - z, R + f, g, p - z, R, g, p, R, g, p, R, g, p, R, g - z, p, R + f, g - z, p, R + f, g - z, p, R + f, g, p, R, g]), R += f, e && k._17O(n, J, w, B, Xq, S, _, [p, R, g, p, R + f, g, p - z, R + f, g, p - z, R + f, g, p - z, R, g, p, R, g, p, R, g, p, R, g - z, p, R + f, g - z, p, R + f, g - z, p, R + f, g, p, R, g]), _ = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], O && k._17O(n, J, w, B, Gf, j, _, [p, y, g, p, y, g + t, p, y - z, g + t, p, y - z, g + t, p, y - z, g, p, y, g, p, y - z, g, p - z, y - z, g, p - z, y - z, g + t, p - z, y - z, g + t, p, y - z, g + t, p, y - z, g]), R = g + t, a && k._17O(n, J, w, B, Lq, d, _, [p, y, R, p, y, R + f, p, y - z, R + f, p, y - z, R + f, p, y - z, R, p, y, R, p, y - z, R, p - z, y - z, R, p - z, y - z, R + f, p - z, y - z, R + f, p, y - z, R + f, p, y - z, R]), R += f, e && k._17O(n, J, w, B, Mp, j, _, [p, y, R, p, y, R + f, p, y - z, R + f, p, y - z, R + f, p, y - z, R, p, y, R, p, y - z, R, p - z, y - z, R, p - z, y - z, R + f, p - z, y - z, R + f, p, y - z, R + f, p, y - z, R]) } }, _17O: function (B, s, f, Q, H, l, v, p) {
        var W = this.gv._buffer;
        Ll(B, s, Q, !0, f, H), Oc(B, s, $, !0, $, !0, $, !1), Cm(B, s.uDiffuse, l), yp(B, W.vs, new gj(p), s.aPosition), yp(B, W.ns, new gj(v), s.aNormal), Dn(B), Zc(B, 0, 12), Ko(B), xo(B, s) } });
    var Fp = function (P, i) { this.gv = P, this.s = function (u, T, D) {
        return T == $ && (T = D), T == $ ? i.getStyle(u) : yo(T, i, P) }, this.data = i };
    Xk(Fp, y, { I3d: !0, ms_icons: 1, _iv: !0, iv: function () { this._iv = !0 }, _42: function (k, q, T, l) {
        var R, t, W, J, u, O, z, K = this,
          P = K.gv,
          x = K.data,
          S = x._id,
          E = K.s("batch"),
          C = P._34O,
          D = P._33O,
          I = P.isSelectable(x),
          r = P.getBrightness(x),
          N = r != $ && 1 !== r;
        if (K._iv) {
          if (W = gi(C, D, x, E), K.validate(W, E ? Yg[E] || Oi : $), W && (J = C[S], u = J.size = W.vs.length / 3 - J.begin, z = W.rs))
            for (r = N ? r : 1, O = 0; u > O; O++) z.push(r);
          if (pg(x)) {
            var X = P.getWireframe(x);
            X && Wm(P, x, X) }
          K.labelInfo = K.label2Info = K.noteInfo = K.note2Info = K._38o = $, K._24O(lq, "getLabel"), K._24O(Dr, "getLabel2"), K._26O(Cd, "getNote"), K._26O(Jd, "getNote2"), K._15O(), K._iv = !1 }
        N && Cm(k, q.uBrightness, r), t = Ll(k, q, T, I, x, Uh), t && (ij(t, C[S], D), ij(t, P._polylineIndexMap[S], P._polylineModelMap), ij(t, P._wireframeIndexMap[S], P._wireframeModelMap)), C[S] || K._80o(k, q, l), P.isLabelVisible(x) && ((R = K.labelInfo) && (Ll(k, q, T, I, x, lq), K._28O(R, lq, l)), (R = K.label2Info) && (Ll(k, q, T, I, x, Dr), K._28O(R, Dr, l))), P.isNoteVisible(x) && ((R = K.noteInfo) && (Ll(k, q, T, I, x, Cd), K._29O(R, Cd, l)), (R = K.note2Info) && (Ll(k, q, T, I, x, Jd), K._29O(R, Jd, l))), (R = K._38o) && K._99O(k, q, R, T, I, l), N && Cm(k, q.uBrightness, 1) }, validate: function () {}, _16O: function () {
        return Ce }, _80o: function () {}, dispose: function () {}, getBodyColor: function (M) {
        var u = this.data,
          i = this.gv.getBodyColor(u);
        return i ? i : M ? u.getStyle(M) : $ }, _24O: function (r, D) {
        var q = this,
          n = q.data,
          u = q.gv,
          z = q.s,
          o = u[D](n);
        if (o != $) {
          var k = z(r + ".scale"),
            C = z(r + ".max"),
            s = q[r + "Info"] = { label: o, textureScale: z(r + ".texture.scale"), color: u[D + "Color"](n), font: z(r + ".font"), align: z(r + ".align"), background: u[D + "Background"](n) },
            F = s.rect = Ym(s, o);
          C > 0 && C < F.width && (s.labelWidth = F.width, F.width = C), F.x = F.y = 0, F.width *= k, F.height *= k, s.mat = q._16O(z(r + ".autorotate"), z(r + ".position"), F, z(r + ".face"), z(r + ".t3"), z(r + ".r3"), z(r + ".rotationMode"));
          var Y = F.width / 2,
            X = F.height / 2;
          s.vs = new gj([-Y, X, 0, -Y, -X, 0, Y, -X, 0, Y, X, 0]), F.width /= k, F.height /= k } }, _26O: function (h, T) {
        var i = this,
          L = i.data,
          F = i.gv,
          n = i.s,
          s = F[T](L);
        if (s != $) {
          var x = n(h + ".scale"),
            A = this[h + "Info"] = { note: s, textureScale: n(h + ".texture.scale"), expanded: n(h + ".expanded"), font: n(h + ".font"), color: n(h + ".color"), align: n(h + ".align"), borderWidth: n(h + ".border.width"), borderColor: n(h + ".border.color"), background: F[T + "Background"](L) };
          if (A.expanded) {
            var q = n(h + ".max"),
              Z = Ym(A, s);
            Z.width += 6, Z.height += 2, q > 0 && q < Z.width && (A.labelWidth = Z.width, Z.width = q);
            var a = { x: -Z.width / 2, y: -8 - Z.height, width: Z.width, height: Z.height + 8 } } else a = { x: -6, y: -18, width: 12, height: 18 };
          A.mat = i._16O(n(h + ".autorotate"), n(h + ".position"), $, n(h + ".face"), n(h + ".t3"), n(h + ".r3"), n(h + ".rotationMode")), A.rect = a, 1 !== x && (a = Oj(a), a.x *= x, a.height *= x, a.y = -a.height, a.width *= x);
          var v = a.x,
            E = a.y,
            M = a.width,
            u = a.height;
          A.vs = new gj([v, -E, 0, v, -E - u, 0, v + M, -E - u, 0, v + M, -E, 0]) } }, _28O: function (U, X, j) {
        if (j(this.s(X + ".transparent"))) {
          var M = U.rect,
            o = U.textureScale,
            N = M.width * o,
            C = M.height * o;
          if (N >= 1 && C >= 1) {
            var J = Sr(N, C);
            1 !== o && (J.translate(J, M.x, M.y), J.scale(o, o), J.translate(J, -M.x, -M.y)), pq(J, U), J.restore(), tb(this, X, U.mat, U.vs, !0) } } }, _29O: function (p, L, N) {
        if (N(this.s(L + ".transparent"))) {
          var F = p.rect,
            o = p.textureScale,
            B = F.x,
            P = F.y,
            g = F.width * o,
            Z = F.height * o;
          if (g >= 1 && Z >= 1) { F.x = F.y = 0;
            var C = Sr(g, Z);
            1 !== o && C.scale(o, o), pc(C, p), C.restore(), F.x = B, F.y = P, tb(this, L, p.mat, p.vs, !1) } } }, _99O: function (b, M, G, Z, z, L) {
        if (G) {
          var E = this,
            O = E.gv,
            j = E.data,
            d = O._buffer,
            p = O._1O,
            x = G.icons;
          for (var r in x) {
            var f = x[r],
              J = G.rects[r];
            if (J && L(yo(f.transparent, j, O))) { Ll(b, M, Z, z, j, r);
              var u = yo(f.shape3d, j, O),
                g = u ? [u] : yo(f.names, j, O),
                q = g ? g.length : 0,
                I = yo(f.textureScale, j, O) || 1,
                H = yo(f.light, j, O);
              H == $ && (H = u ? !0 : !1), Oc(b, M, yo(f.blend, j, O), H, yo(f.opacity, j, O), yo(f.reverseFlip, j, O), yo(f.reverseColor, j, O), yo(f.reverseCull, j, O));
              for (var y = 0; q > y; y++) {
                var F = g[y],
                  c = J[y];
                if (Yk(E, c.mat), u) gk(O, j, $l(E, u), E);
                else {
                  var Q = bd(F);
                  if (Q) {
                    var t = c.width * I,
                      i = c.height * I;
                    if (t >= 1 && i >= 1) {
                      var h = Sr(t, i);
                      cg(h, Q, yo(f.stretch, j, O), 0, 0, t, i, j, O), h.restore(), yj(b, dh, p), Dn(b, M, p, yo(f.discardSelectable, j, O), d.uv, Fd), yp(b, d.vs, c.vs, M.aPosition), yp(b, d.ns, fm, M.aNormal), As(b, d.is, Tn), Lo(b, 0, Tn.length), Ko(b, M, p) } } }
                Ch(O) }
              xo(b, M) } } } } });
    var Yl = function (T, O) { Dj(Yl, this, [T, O]) };
    Xk(Yl, Fp, { _16O: function (p, D, r, e, m, q, b, F, L) {
        var Q = this.data,
          f = qf(D, Q.s3(), r, e, F, L);
        return Zn(Ti(), f, Q.p3(), e, m, q, b, p, Q.r3(), Q.getRotationMode()) }, clear: function () {
        var j = this;
        j.faceMat = j.mat = j.shapeModel = j.left = j.right = j.front = j.back = j.top = j.bottom = j.csg = $ }, validate: function (f, P) {
        var $ = this,
          _ = $.gv,
          e = $.data,
          W = $l($),
          F = Pc(e, _.getMat(e), W ? $.s("shape3d.scaleable") : !0);
        if ($.clear(), f) {
          var v = [];
          W ? zn(_, e, W, $, $.getBodyColor(), [F], f, v) : (oi(_, e, f, P, F, ci, v, ps), oi(_, e, f, P, F, Fq, v, Tj), oi(_, e, f, P, F, xd, v, Nm), oi(_, e, f, P, F, qc, v, gm), oi(_, e, f, P, F, il, v, Se), oi(_, e, f, P, F, Vk, v, Yo)), v.length && (Bi(f.vs, v), Bi(f.ns, am(v))) } else $.mat = F, ($.shapeModel = W) || ($.vf(ci), $.vf(Fq), $.vf(il), $.vf(Vk), $.vf(xd), $.vf(qc)) }, vf: function (Y) {
        var G = this;
        if (G.gv.getFaceVisible(G.data, Y)) {
          var a = cr(G, Y);
          return a.mat && (G.faceMat = !0), a } }, _80o: function (M, B, A) {
        var F = this,
          N = F.gv,
          W = F.data,
          y = N._cube,
          f = F.shapeModel;
        Ck(N, F.mat), f ? gk(N, W, f, F, F.getBodyColor(), A) : (yp(M, y.vs, $, B.aPosition), yp(M, y.ns, $, B.aNormal), As(M, y.is), F._18O(M, B, F.left, 0, A), F._18O(M, B, F.front, 6, A), F._18O(M, B, F.right, 12, A), F._18O(M, B, F.back, 18, A), F._18O(M, B, F.top, 24, A), F._18O(M, B, F.bottom, 30, A)), Ch(N), F.faceMat && (F._18O(M, B, F.left, 0, A, !0), F._18O(M, B, F.front, 6, A, !0), F._18O(M, B, F.right, 12, A, !0), F._18O(M, B, F.back, 18, A, !0), F._18O(M, B, F.top, 24, A, !0), F._18O(M, B, F.bottom, 30, A, !0)) }, _18O: function (d, W, i, C, b, T) {
        if (i) {
          if (!b(i.transparent)) return;
          if (T && !i.mat || !T && i.mat) return;
          T && Ck(this.gv, i.mat);
          var E = this,
            t = E.data,
            y = E.gv,
            w = y.getTexture(i.texture, t),
            Q = i.uv,
            M = i.uvScale,
            K = i.uvOffset,
            R = i.discardSelectable;
          if (w)
            if (Q) {
              for (var J = 8 * (C / 6), V = 0; 8 > V; V++) Bh[J + V] = Q[V];
              Dn(d, W, w, R, y._buffer.uv, Bh, K, M) } else Dn(d, W, w, R, y._cube.uv, $, K, M);
          else Dn(d);
          Oc(d, W, i.blend, i.light, i.opacity, i.reverseFlip, i.reverseColor, i.reverseCull), Cm(d, W.uDiffuse, i.color), Lo(d, C, 6), xo(d, W), Ko(d, W, w), T && Ch(y) } } });
    var Pd = function (O, r) { Dj(Pd, this, [O, r]) };
    Xk(Pd, Fp, { _25Q: 1, validate: function (R) {
        var W = this,
          u = W.gv,
          O = W.data,
          g = W.s,
          C = g("edge.width"),
          H = O._40I,
          i = O._41I;
        if (W.shapeModel = W.info = $, H && i) {
          var G, F, k, n, Y, T, x, I, o, Z, f = O.isLooped(),
            p = g(Cg),
            M = r.getEdgeType(p);
          if (M) {
            var B = M(O, Mn(W, u, O, f, p), u, W._19Q);
            if (!B.points || B.points.isEmpty()) return;
            T = W.info = {}, x = B.segments, Y = B.points, I = Y.size();
            for (var j = H.getElevation(), c = i.getElevation(), E = 0; I > E; E++) {
              var P = Y.get(E);
              P.e == $ && (P.e = j + (c - j) * E / (I - 1)) }
            o = rj(Y.get(0)), Z = rj(Y.get(I - 1));
            var s = I % 2;
            0 === s ? (T.c1 = rj(Y.get(I / 2 - 1)), T.c2 = rj(Y.get(I / 2))) : T.p3 = rj(Y.get((I - s) / 2)), T.s1 = o, T.s2 = rj(Y.get(1)), T.t1 = rj(Y.get(I - 2)), T.t2 = Z } else { Y = new Ol, T = W.info = {};
            var _ = g("edge.offset"),
              X = g("edge.center"),
              y = g("edge.source.t3"),
              w = g("edge.target.t3"),
              m = H.p3(),
              t = i.p3();
            if (y && (m[0] += y[0], m[1] += y[1], m[2] += y[2]), w && (t[0] += w[0], t[1] += w[1], t[2] += w[2]), p === Md) { x = g("edge.segments");
              var D = T.points = g(pe) || vb;
              if (I = D.size()) { o = rj(D.get(0)), Z = rj(D.get(I - 1)), !X && _ && (k = co(o, m, !0), _ = v(_, Rk(m, o)), m = [m[0] + k[0] * _, m[1] + k[1] * _, m[2] + k[2] * _], k = co(t, Z, !0), _ = v(_, Rk(Z, t)), t = [t[0] - k[0] * _, t[1] - k[1] * _, t[2] - k[2] * _]);
                var s = I % 2;
                0 === s ? (G = rj(D.get(I / 2 - 1)), F = rj(D.get(I / 2))) : T.p3 = rj(D.get((I - s) / 2)), T.s1 = m, T.s2 = o, T.t1 = Z, T.t2 = t } else !X && _ && (k = co(t, m, !0), n = Rk(m, t), _ = Nq(_, n), m = [m[0] + k[0] * _, m[1] + k[1] * _, m[2] + k[2] * _], t = [t[0] - k[0] * _, t[1] - k[1] * _, t[2] - k[2] * _]), G = m, F = t;
              Y.add({ x: m[0], y: m[2], e: m[1] }), Y.addAll(D), Y.add({ x: t[0], y: t[2], e: t[1] }) } else {
              var z = Mn(W, u, O, f, p);
              if (W._19Q || (z = -z), f) {
                var J = m[0],
                  A = m[1],
                  h = m[2],
                  S = H.getTall() / 2 + z;
                G = [J - z, A + S, h], F = [J + z, A + S, h], Y.add({ x: J - z, y: h, e: A }), Y.add({ x: J - z, y: h, e: A + S }), Y.add({ x: J + z, y: h, e: A + S }), Y.add({ x: J + z, y: h, e: A }) } else { k = co(t, m, !0), n = Rk(m, t);
                var Q = { x: m[0], y: m[2] },
                  U = { x: t[0], y: t[2] },
                  b = Ji($, Q, U, z),
                  K = b.x - Q.x,
                  e = b.y - Q.y;
                _ = Nq(_, n), k[0] *= _, k[1] *= _, k[2] *= _, G = [m[0] + k[0] + K, m[1] + k[1], m[2] + k[2] + e], F = [t[0] - k[0] + K, t[1] - k[1], t[2] - k[2] + e], X ? (Y.add({ x: m[0], y: m[2], e: m[1] }), Y.add({ x: G[0], y: G[2], e: G[1] }), Y.add({ x: F[0], y: F[2], e: F[1] }), Y.add({ x: t[0], y: t[2], e: t[1] })) : (Y.add({ x: G[0], y: G[2], e: G[1] }), Y.add({ x: F[0], y: F[2], e: F[1] })) } }
            T.c1 = G, T.c2 = F }
          T.list = g(si) === Yd ? W.createTubeModel(Y, x, C / 2, R) : W.createLineModel(Y, x, C, "edge", "edge.dash") } } });
    var Bd = function (Q, k) { Dj(Bd, this, [Q, k]) };
    Xk(Bd, Yl, {
      _80o: function (o, B, v) {
        var C = this,
          p = C.gv,
          g = C.shapeModel;
        Ck(p, C.mat), g ? gk(p, C.data, g, C, C.getBodyColor(), v) : (Ld(C, o, B, C.left, v), Ld(C, o, B, C.front, v), Ld(C, o, B, C.right, v), Ld(C, o, B, C.back, v), Ld(C, o, B, C.top, v), Ld(C, o, B, C.bottom, v)), Ch(p) },
      validate: function (Q, Y) {
        var B, s, y = this,
          O = y.s,
          p = y.data,
          q = p.p3(),
          m = p._thickness / 2,
          k = p.isClosePath(),
          i = p.getPoints(),
          P = p.getSegments(),
          r = O(Np),
          M = Q && Q.uv;
        if (y.clear(), 0 > m) s = y.shapeModel = Sh(i, P, O(Zr), O(ws), r, O(qm), p.getTall(), p.getElevation(), k), O(aq) ? O("shape3d.image") || delete s.uv : (delete s.vs, delete s.ns, delete s.uv), O("shape3d.top.image") || delete s.top_uv, O("shape3d.bottom.image") || delete s.bottom_uv;
        else if (O(si) === Yd) B = Ic(i, P, r, k), s = y.shapeModel = { vs: [] }, O("shape3d.image") && (s.uv = [], s.sum = O(qm) || di(B) || 1, s.len = 0), O(Zr) && !k && (s.top_vs = [], O("shape3d.top.image") && (s.top_uv = [])), O(ws) && !k && (s.bottom_vs = [], O("shape3d.bottom.image") && (s.bottom_uv = [])), y._12O(B, m);
        else {
          var N, X, c, z, h, w, H, E, a, C;
          B = Ic(i, P, r, k), h = y.vf(il, M, !1, Y), m && (w = y.vf(Vk, M, !1, Y), H = k ? $ : y.vf(ci, M, !1, Y), E = k ? $ : y.vf(Fq, M, !1, Y), a = y.vf(xd, M, !1, Y), C = y.vf(qc, M, !1, Y)), m ? y._12O(B, m) : h && B.forEach(function (i) {
            if (z = i.length, z > 0)
              for (N = i[0], c = 1; z > c; c++) X = i[c], y.addV(h.vs, N, X), N = X }), y._20Q(B), Q || (h && (h.ns = am(h.vs), Ge(h, "vs"), Ge(h, Xe)), m && (w && (w.ns = am(w.vs), Ge(w, "vs"), Ge(w, Xe)), H && (H.ns = am(H.vs), Ge(H, "vs"), Ge(H, Xe)), E && (E.ns = am(E.vs), Ge(E, "vs"), Ge(E, Xe)), a && (a.ns = am(a.vs), Ge(a, "vs"), Ge(a, Xe)), C && (C.ns = am(C.vs), Ge(C, "vs"), Ge(C, Xe)))) }
        var f = y.mat = Ti();
        Sf(f, q), Tk(f, p.r3(), p.getRotationMode()), Sf(f, ld(q)), Q && (vc(y, f, Q, s), y.clear())
      },
      _20Q: function (G) {
        var P, R, s, i, g, y, d, u = this,
          C = u.front,
          W = u.back,
          n = u.top,
          z = u.bottom,
          Z = C ? C.tuv : $,
          x = W ? W.tuv : $,
          o = n ? n.tuv : $,
          V = z ? z.tuv : $,
          E = 0;
        (Z || x || o || V) && (P = u.s(qm) || di(G) || 1, G.forEach(function (l) {
          if (R = l.length, R > 0)
            for (y = l[0], s = 1; R > s; s++) d = l[s], i = E / P, E += Rk(y, d), g = E / P, u._14O(C, i, g), u._14O(W, 1 - g, 1 - i), u._14O(n, i, g), u._14O(z, i, g), y = d })) },
      _14O: function (P, d, B) {
        if (P) {
          var v = P.uv,
            f = P.tuv;
          if (f) {
            if (v) var I = v[0] + (v[6] - v[0]) * d,
              e = v[1] + (v[7] - v[1]) * d,
              o = v[2] + (v[4] - v[2]) * d,
              J = v[3] + (v[5] - v[3]) * d,
              k = v[2] + (v[4] - v[2]) * B,
              p = v[3] + (v[5] - v[3]) * B,
              L = v[0] + (v[6] - v[0]) * B,
              y = v[1] + (v[7] - v[1]) * B;
            else I = d, e = 0, o = d, J = 1, k = B, p = 1, L = B, y = 0;
            f.push(o, J, k, p, L, y, L, y, I, e, o, J) } } },
      _13O: function (O) {
        var $ = O.uv,
          v = O.tuv;
        v && ($ ? v.push($[2], $[3], $[4], $[5], $[6], $[7], $[6], $[7], $[0], $[1], $[2], $[3]) : v.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1)) },
      _12O: function (O, k) {
        var a, W, U, B, H, g = this;
        O.forEach(function (R) {
          if (H = R.length, H > 0)
            for (a = { p: R[0], n: !0 }, B = 1; H > B; B++) W = R[B], U = H - 1 > B ? R[B + 1] : $, g.addPoint(a, W, U, k, R) }) },
      addPoint: function (h, v, P, z, O) {
        var s, b, I, F, j, p, q, d, a, r = this,
          Q = h.p,
          X = h.f,
          V = h.b,
          n = r.s("shape3d.side") || Pq,
          B = r.s("shape3d.start.angle"),
          Y = r.s("shape3d.sweep.angle"),
          x = r.shapeModel,
          o = r.data.isClosePath();
        if (h.n && (h.n = !1, X = o && O.length > 2 ? Ji(O[O.length - 2], Q, v, z) : Ji($, Q, v, z), V = xh(Q, X), x ? x.top_vs && r._10O(V, X, n, B, Y, x.top_vs, x.top_uv) : (s = r.left) && (r.addV(s.vs, V, X), r._13O(s))), b = P ? Ji(Q, v, P, z) : o && O.length > 2 ? Ji(Q, v, O[1], z) : Ji(Q, v, $, z), I = xh(v, b), x) {
          var k, l, W = x.vs,
            c = x.uv,
            f = x.sum;
          for (c && (k = x.len / f, x.len += Rk(Q, v), l = x.len / f), p = r._9O(V, X, n, B, Y), q = r._9O(I, b, n, B, Y), d = 0; n > d; d++) a = d + 1, Bi(W, p[a]), Bi(W, q[d]), Bi(W, p[d]), Bi(W, q[d]), Bi(W, p[a]), Bi(W, q[a]), c && (F = d / n, j = a / n, c.push(k, j, l, F, k, F, l, F, k, j, l, j));!P && x.bottom_vs && r._10O(I, b, n, B, Y, x.bottom_vs, x.bottom_uv, !0) } else !P && (s = r.right) && (r.addV(s.vs, b, I), r._13O(s)), (s = r.front) && r.addV(s.vs, X, b), (s = r.back) && r.addV(s.vs, I, V), (s = r.top) && r.addH(s.vs, X, b, I, V, !0), (s = r.bottom) && r.addH(s.vs, V, I, b, X);
        h.p = v, h.f = b, h.b = I },
      _10O: function (d, j, K, W, Y, H, V, E) {
        var _, f, z = this,
          G = z.data,
          $ = z._9O(d, j, K, W, Y),
          h = (d.x + j.x) / 2,
          M = (d.y + j.y) / 2,
          C = G.getElevation(),
          e = 0;
        for (e = 0; K > e; e++) E ? (Bi(H, $[e]), Bi(H, $[e + 1])) : (Bi(H, $[e + 1]), Bi(H, $[e])), Bi(H, [h, C, M]), V && (E ? (_ = Q * (e + 1) / K + W, f = Q * e / K + W) : (_ = Q * e / K + W, f = Q * (e + 1) / K + W), V.push(.5 - .5 * s(f), .5 - .5 * P(f), .5 - .5 * s(_), .5 - .5 * P(_), .5, .5)) },
      _9O: function (v, F, e, j, S) {
        var T, O, d = this,
          D = d.data,
          x = [],
          W = (v.x + F.x) / 2,
          V = (v.y + F.y) / 2,
          J = D.getTall() / 2,
          u = D.getElevation(),
          y = 0;
        for (S = S || Q; e >= y; y++) T = S * y / e + j, O = s(T), x.push([W + (v.x - W) * O, u + J * P(T), V + (v.y - V) * O]);
        return x },
      addV: function (q, u, I) {
        var x = u.x,
          B = u.y,
          E = I.x,
          S = I.y,
          r = this.data,
          H = r.getElevation(),
          Z = r.getTall() / 2;
        q.push(x, H - Z, B, E, H - Z, S, E, H + Z, S, E, H + Z, S, x, H + Z, B, x, H - Z, B) },
      addH: function (y, T, h, x, X, a) {
        var B = this.data,
          f = B.getTall() / 2,
          H = B.getElevation() + (a ? f : -f);
        y.push(T.x, H, T.y, h.x, H, h.y, x.x, H, x.y, x.x, H, x.y, X.x, H, X.y, T.x, H, T.y) },
      vf: function (C, y, k, O) {
        var i, T = this,
          l = T.gv.getFaceVisible(T.data, C);
        return (k || l) && (i = cr(T, C, O), i.vs = [], i.tuv = l && (i.texture || y) ? [] : $, i.visible = l), i }
    });
    var eb = function (n, H) { Dj(eb, this, [n, H]) };
    Xk(eb, Fp, { _25Q: 1, validate: function (V) {
        var r = this,
          w = r.data,
          b = r.s,
          A = w.getPoints(),
          e = A.size();
        if (r.shapeModel = r.info = $, e > 1) {
          var K = r.info = {},
            q = w.getSegments(),
            R = w.getThickness(),
            l = rj(A.get(0)),
            B = rj(A.get(e - 1)),
            o = e % 2;
          0 === o ? (K.c1 = rj(A.get(e / 2 - 1)), K.c2 = rj(A.get(e / 2))) : K.p3 = rj(A.get((e - o) / 2)), K.s1 = l, K.s2 = rj(A.get(1)), K.t1 = rj(A.get(e - 2)), K.t2 = B, K.list = b(si) === Yd ? r.createTubeModel(A, q, R / 2, V) : r.createLineModel(A, q, R, "shape.border", "shape.dash") } } }), ph(r, { accordionViewExpandIcon: ds(je), accordionViewCollapseIcon: ds(je, !0), accordionViewLabelColor: nq, accordionViewLabelFont: Eb, accordionViewTitleBackground: Yr, accordionViewSelectBackground: xb, accordionViewSelectWidth: 3, accordionViewSeparatorColor: B, splitViewDividerSize: 1, splitViewDividerBackground: Yr, splitViewDragOpacity: .5, splitViewToggleIcon: { width: 16, height: 16, comps: [{ type: Hi, rect: [2, 2, 12, 12], background: je }] }, propertyViewLabelColor: nd, propertyViewLabelSelectColor: nq, propertyViewLabelFont: Eb, propertyViewExpandIcon: ds(mi), propertyViewCollapseIcon: ds(mi, !0), propertyViewBackground: Qo, propertyViewRowLineVisible: !0, propertyViewColumnLineVisible: !0, propertyViewRowLineColor: Gc, propertyViewColumnLineColor: Gc, propertyViewSelectBackground: xb, listViewLabelColor: nd, listViewLabelSelectColor: nq, listViewLabelFont: Eb, listViewRowLineVisible: !1, listViewRowLineColor: Gc, listViewSelectBackground: xb, treeViewLabelColor: nd, treeViewLabelSelectColor: nq, treeViewLabelFont: Eb, treeViewExpandIcon: ds(Td), treeViewCollapseIcon: ds(Td, !0), treeViewRowLineVisible: !1, treeViewRowLineColor: Gc, treeViewSelectBackground: xb, treeViewDoubleClickToToggle: !0, tableViewLabelColor: nd, tableViewLabelSelectColor: nq, tableViewLabelFont: Eb, tableViewRowLineVisible: !0, tableViewColumnLineVisible: !0, tableViewRowLineColor: Gc, tableViewColumnLineColor: Gc, tableViewSelectBackground: xb, treeTableViewLabelColor: nd, treeTableViewLabelSelectColor: nq, treeTableViewLabelFont: Eb, treeTableViewExpandIcon: ds(Td), treeTableViewCollapseIcon: ds(Td, !0), treeTableViewRowLineVisible: !0, treeTableViewColumnLineVisible: !0, treeTableViewRowLineColor: Gc, treeTableViewColumnLineColor: Gc, treeTableViewSelectBackground: xb, tableHeaderLabelColor: nd, tableHeaderLabelFont: Eb, tableHeaderColumnLineVisible: !0, tableHeaderColumnLineColor: Yj, tableHeaderBackground: Qo, tableHeaderMoveBackground: ed, tableHeaderInsertColor: xb, tableHeaderSortDescIcon: Wc(mi, !0), tableHeaderSortAscIcon: Wc(mi), tabViewTabGap: 1, tabViewLabelColor: nq, tabViewLabelFont: Eb, tabViewTabBackground: Yr, tabViewSelectWidth: 3, tabViewSelectBackground: xb, tabViewMoveBackground: ed, tabViewInsertColor: xb, toolbarLabelColor: nd, toolbarLabelSelectColor: nq, toolbarLabelFont: Eb, toolbarBackground: Qo, toolbarSelectBackground: xb, toolbarItemGap: 8, toolbarSeparatorColor: sq }, !0);
    var Rm = { translateX: 1, sortColumn: 1 },
      jk = { sortable: 1, sortOrder: 1, sortFunc: 1 },
      Km = { focusData: 1 },
      xg = { dataModel: 1, sortColumn: 1, sortFunc: 1, visibleFunc: 1, rootData: 1, rootVisible: 1 },
      Pl = { dataModel: 1, sortFunc: 1, visibleFunc: 1, categorizable: 1 },
      Nr = function (f, B) { B.add(f), f.hasChildren() && f.eachChild(function (d) { Nr(d, B) }) },
      Dl = function (E, Z, w, g, Q, z, Y, o, i, N, c) {
        var j, P = w.getValueType(N),
          n = w.getAlign(N);
        if (w.getEnumValues(N)) {
          var F = w.toEnumLabel(Z, N),
            b = Nd || 0,
            I = 0,
            J = z,
            e = r.getTextSize(g, F).width;
          return j = bd(w.toEnumIcon(Z, N)), j && (I = z + Nd / 2, "center" === n ? I += (o - (b + e)) / 2 : "right" === n && (I = I + o - (b + e)), Ee(E, j, I, Y + i / 2), J = I + Nd / 2), F != $ && (j ? kj(E, F, g, Q, J, Y, o - (J - z), i) : kj(E, F, g, Q, z, Y, o, i, n)), void 0 }
        return Z = w.formatValue(Z), Z != $ ? P === dj ? (No(E, z, Y, o, i, Z), void 0) : P === nk || !P && bl(Z) ? (j = bd(Z ? Qc : bq), Ee(E, j, z + o / 2, Y + i / 2, N, c), void 0) : (kj(E, Z, g, Q, z, Y, o, i, n), void 0) : void 0 },
      jh = function (c, v) {
        var A = v.view,
          I = A.getDataModel().getHistoryManager(),
          J = ej(c),
          y = v.column || v.property;
        I && I.beginInteraction(), v.editor = c, c.info = v, A.setCurrentEditor(c), A.getView().insertBefore(J, A._79O), Am(c, v.editorRect), c.setFocus ? c.setFocus() : xs(c), c.commitValue = function () { c._17Q && (c = c._17Q), A.setValue(v.data, y, c.getValue ? c.getValue() : c.value), c.close && c.close(), Sc(J) }, y.onEditorCreated && y.onEditorCreated(v) },
      fe = function (F, h, i, L, A) {
        var B = Wk(F, i),
          q = h.value,
          I = h.view,
          D = A.getValueType(h.data);
        return B.onblur = B.onchange = function () { I.endEditing() }, "input" === F ? (q = A.formatValue(q), q != $ && (B.value = q), B.onkeydown = function (Y) { Ac(Y) && I.endEditing() }, (D === ub || D === cl) && B.addEventListener(eo, r.numberListener, !1)) : F === Rp && L.forEach(function (l) {
          var Y = w.createElement("option");
          Y.innerHTML = A.toEnumLabel(l), Y.value = l, A.isEnumEqual(q, l) && (Y.selected = !0), Af(B, Y) }), jh(B, h), B },
      dn = t.widget = {},
      Of = function (R, U, I) { Xk(e + ".widget." + R, U, I) };
    ph(Iq, { ms_value: function (p) { p.getValue = function (f) {
          var l = this.getItemById(f),
            Z = l.element;
          return An(Z) ? Z : Z ? Z.getValue ? Z.getValue() : Z.value : l.selected }, p.setValue = function (O, G) {
          var U = this.getItemById(O),
            u = U.element;
          u && !An(u) ? u.setValue ? u.setValue(G) : u.value = G : bl(G) ? (U.selected = G, this.iv()) : (U.element = G, this.iv()) }, p.v = function (O, Y) {
          var F = this;
          if (2 === arguments.length) F.setValue(O, Y);
          else {
            if (!Cq(O)) return F.getValue(O);
            for (var e in O) F.setValue(e, O[e]) }
          return F } }, _46o: function (d) { d._icon = $, d._accessType = $, d._valueType = $, d._editable = !1, d._batchEditable = !0, d._align = ci, d._nullable = !0, d._emptiable = !1, d.setParent = im, d.formatValue = function (D) {
          var K = this,
            H = K._valueType;
          return K.getEnumValues() ? K.toEnumLabel(D) : H === nk ? !!D : D != $ && H === ub ? b(D) : D }, d.setEnum = function (X, Y, v, E, k, x, N) {
          var b = this;
          X && !Hq(X) && X.values && (E = X.editable, v = X.icons, Y = X.labels, k = X.strict, x = X.maxHeight, N = X.dropDownWidth, X = X.values), Pk(X) && (X = X._as), Pk(Y) && (Y = Y._as), Pk(v) && (v = v._as), b._enumValues = X, b._enumLabels = Y, b._enumIcons = v, b._enumEditable = E, b._enumStrict = k == $ ? !0 : k, b._enumMaxHeight = x, b._enumDropDownWidth = N, X && X.length && Ng(X[0]) && (b._valueType = cl), b.fp("enum", !1, !0) }, d.getEnumDropDownWidth = function () {
          return this._enumDropDownWidth }, d.getEnumMaxHeight = function () {
          return this._enumMaxHeight }, d.isEnumEditable = function () {
          return this._enumEditable }, d.getEnumValues = function () {
          return this._enumValues }, d.getEnumLabels = function () {
          return this._enumLabels }, d.getEnumIcons = function () {
          return this._enumIcons }, d.isEnumStrict = function () {
          return this._enumStrict }, d.isEnumEqual = function (w, $) {
          return this._enumStrict ? w === $ : w == $ }, d.toEnumLabel = function (E, z) {
          var M = this,
            x = M.getEnumValues(z),
            n = M.getEnumLabels(z);
          if (x && n)
            for (var i = 0; i < x.length; i++)
              if (M.isEnumEqual(E, x[i])) return n[i];
          return E }, d.toEnumIcon = function (Y, I) {
          var Q = this,
            C = Q.getEnumValues(I),
            $ = Q.getEnumIcons(I);
          if (C && $)
            for (var e = 0; e < C.length; e++)
              if (Q.isEnumEqual(Y, C[e])) return $[e];
          return B } }, _45o: function (g) { g._87o = function (z, I, R, s, K, g) {
          if (z) {
            var i = this,
              $ = i._90I,
              Z = tp(1);
            i._columnLineVisible && (K -= 1), i._rowLineVisible && (g -= 1), 0 >= K || 0 >= g || (i._90I || ($ = i._90I = {}), $[I] || ($[I] = new Ol), Am(Z, i.tx() + R, i.ty() + s, K, g), Af(Z, z), i._view.insertBefore(Z, i._79O), z.onParentAdded && z.onParentAdded(Z), $[I].add(Z)) } }, g._76o = function () {
          var J = this,
            c = J._90I;
          if (c) {
            for (var s in c) c[s].each(function (h) { Sc(h) });
            delete J._90I } }, g._77o = function (T) {
          var i = this;
          if (i._90I) {
            var S = i._90I[T];
            S && (S.each(function (T) { Sc(T) }), delete i._90I[T]) } } }, _47o: function (x) { x.getValue = function (A, P) {
          return P.getValue ? P.getValue(A, P, this) : Rc(A, P.getAccessType(), P.getName()) }, x.setValue = function (u, A, c) {
          if (A.isEmptiable(u) || "" !== c || (c = B), A.isNullable(u) || c != $) {
            var b = this,
              s = A.getName(u),
              f = A.getAccessType(u),
              l = A.getValueType(u);
            l === ub && An(c) ? c = o(c) : l === cl && An(c) ? c = parseFloat(c) : l === nk && An(c) && (c = "true" === c), b._batchEditable && A._batchEditable && b.isSelected(u) ? b.sm().each(function (C) { A.setValue ? A.setValue(C, A, c, b) : gs(C, f, s, c) }) : A.setValue ? A.setValue(u, A, c, b) : gs(u, f, s, c) } }, x.setCurrentEditor = function (A) { this.endEditing(), this._currentEditor = A, this.redraw() }, x.isEditing = function (e, k) {
          var c = this,
            g = c._currentEditor;
          if (!g) return !1;
          if (k) {
            var b = g.info;
            return b ? (b.column || b.property) === k && b.data === e : !1 }
          return !0 }, x.endEditing = function () {
          var M = this,
            b = M._currentEditor,
            o = M.getDataModel().getHistoryManager();
          b && (delete M._currentEditor, b.commitValue && b.commitValue(b.info), M.redraw(), o && o.endInteraction()) }, x.beginEditing = function (x) { this.endEditing();
          var e = this,
            d = x.column || x.property;
          if (d.beginEditing) d.beginEditing(x);
          else {
            var W = x.data,
              H = x.value,
              l = e.getSelectBackground(W),
              Y = d.getEnumValues(W),
              j = d.getSlider(W),
              D = d.getColorPicker(W);
            if (j) {
              var U = cj(dn.Slider, j);
              return U.setValue(H), U.getView().onblur = function () { e.endEditing() }, U.isInstant() && (U.onValueChanged = function () { e.setValue(W, d, U.getValue()) }), jh(U, x), void 0 }
            if (D || d.getValueType(W) === dj) {
              var n = cj(dn.ColorPicker, D);
              return n.setValue(H), n.onClosed = function () { e.endEditing() }, n.isInstant() && (n.onValueChanged = function (G, P) { e.setValue(W, d, P) }), jh(n, x), n.open(), void 0 }
            if (Y) {
              if (dn.ComboBox) {
                var i = new dn.ComboBox;
                i.setValue(H), i.setValues(Y), i.setLabels(d.getEnumLabels(W)), i.setIcons(d.getEnumIcons(W)), i.setEditable(d.isEnumEditable(W)), i.setStrict(d.isEnumStrict(W)), i.setMaxHeight(d.getEnumMaxHeight(W)), i.setDropDownWidth(d.getEnumDropDownWidth(W)), i.onClosed = function () { e.endEditing() }, jh(i, x), i.open() } else fe(Rp, x, l, Y, d);
              return }
            var P = d.getValueType(W);
            if (P === nk || bl(H)) return e.setValue(W, d, !H), void 0;
            if (d.getItemEditor(W)) {
              var L = Go(d.getItemEditor(W)),
                w = new L(W, d, e, x),
                c = w.getView();
              return c._17Q = w, w.setValue(H), pb(c), jh(c, x), w.editBeginning && w.editBeginning(), void 0 }
            fe("input", x, l, $, d) } } }, _44o: function (i) { i.init = function (Z) {
          var m = this,
            R = m.th = new Bs(Z),
            I = m._view = ef(1, m);
          m.tv = m._tableView = Z, Af(I, R.getView()), Af(I, Z.getView()), R.mp(function (o) { o.property === Oq && m.iv() }), m.iv() }, i.getTableView = function () {
          return this.tv }, i.getTableHeader = function () {
          return this.th }, i.getDataModel = function () {
          return this.tv.dm() }, i.getColumnModel = function () {
          return this.tv.getColumnModel() }, i.setColumns = function (i) { this.tv.setColumns(i) }, i.addColumns = function (S) { this.tv.addColumns(S) }, i.endEditing = function () { this.tv.endEditing() }, i.validateImpl = function () {
          var N = this,
            i = N.th,
            x = fo(i),
            d = { x: 0, y: 0, width: N.getWidth(), height: x };
          Am(i, d), d.y = x, d.height = M(0, N.getHeight() - x), Am(N.tv, d) } }, ms_vs: function (W) { W._41o = function () {
          return this._29I.height < this._59I }, W._43o = function () {
          var F = this;
          F._41o() && (F._58I || (T(function () { F._94O() }, Th), F.iv()), F._58I = new Date) }, W._94O = function () {
          var M = this;
          if (M._58I) {
            var t = new Date;
            t.getTime() - M._58I.getTime() >= Th ? (delete M._58I, M.iv()) : T(function () { M._94O() }, Th) } }, W._93I = function () {
          var s = this,
            Y = s._27I;
          if (s._58I || !s._autoHideScrollBar) { Y || Af(s._79O, Y = s._27I = tp());
            var n = s._29I,
              a = n.height,
              i = s._59I,
              d = s.getScrollBarSize(),
              y = n.width - d - 2,
              m = a * (-s.ty() / i),
              v = a * (a / i),
              u = Y.style;
            i > a ? (Yc > v && (m = m + v / 2 - Yc / 2, 0 > m && (m = 0), m + Yc > a && (m = a - Yc), v = Yc), u.visibility = yc, u.background = s.getScrollBarColor(), u.borderRadius = d / 2 + Zq, Am(Y, y, m, d, v)) : u.visibility = dq } else Y && (Y.style.visibility = dq) } }, ms_hs: function (l) { l._40o = function () {
          return this._29I.width < this._91I }, l._42o = function () {
          var i = this;
          i._40o() && (i._95O || (T(function () { i._94I() }, Th), i.iv()), i._95O = new Date) }, l._94I = function () {
          var $ = this;
          if ($._95O) {
            var m = new Date;
            m.getTime() - $._95O.getTime() >= Th ? (delete $._95O, $.iv()) : T(function () { $._94I() }, Th) } }, l._92I = function () {
          var R = this,
            H = R._28I;
          if (R._95O || !R._autoHideScrollBar) { H || Af(R._79O, H = R._28I = tp());
            var i = R._29I,
              k = i.width,
              u = R._91I,
              P = R.getScrollBarSize(),
              F = i.height - P - 2,
              Y = k * (-R.tx() / u),
              B = k * (k / u),
              c = H.style;
            u > k ? (Yc > B && (Y = Y + B / 2 - Yc / 2, 0 > Y && (Y = 0), Y + Yc > k && (Y = k - Yc), B = Yc), c.visibility = yc, c.background = R.getScrollBarColor(), c.borderRadius = P / 2 + Zq, Am(H, Y, F, B, P)) : c.visibility = dq } else H && (H.style.visibility = dq) } } }), rn(Qc, mq(16, 16, [{ type: ns, rect: [1, 1, 14, 14], background: xb }, { type: Yp, rect: [1, 1, 14, 14], width: 1, color: yd }, { type: Vn, points: [13, 3, 7, 12, 4, 8], borderWidth: 2, borderColor: "#FFF" }])), rn(bq, mq(16, 16, { type: Yp, rect: [1, 1, 14, 14], width: 1, color: yd })), rn(qh, mq(16, 16, [{ type: Cf, rect: [2, 2, 12, 12], borderWidth: 1, borderColor: yd, background: "#FFF" }, { type: Cf, rect: [4, 4, 8, 8], background: xb }])), rn(rf, mq(16, 16, { type: Cf, rect: [2, 2, 12, 12], borderWidth: 1, borderColor: yd })), Iq._15Q = function (r) { r._29I = jg, r._59I = 0, r._91I = 0, r._5o = function (_) {
        var F = this;
        F._30I = new Ol, F._rows = new Ol, F._rowMap = {}, F._31I = 0, F._14I = 0, F._view = ef(1, F), F._canvas = Jr(F._view), Af(F._view, F._79O = tp()), F.dm(_ ? _ : new he) }, r.getCheckIcon = function (C) {
        var z = this.sm(),
          s = z.co(C);
        return z.sg() ? bd(s ? qh : rf) : bd(s ? Qc : bq) }, r.checkData = function (g) {
        var b = this.sm(),
          _ = b.co(g);
        b.sg() && _ || (this._32o = 1, _ ? b.rs(g) : b.as(g), delete this._32o) }, r.getDataAt = function (z) { z.target && (z = this.lp(z));
        var V = G(z.y / this._rowHeight),
          b = this._rows;
        return 0 > V || V >= b.size() ? $ : b.get(V) }, r.onDataDoubleClicked = function () {}, r.onDataClicked = function () {}, r.adjustTranslateX = function () {
        return 0 }, r.adjustTranslateY = function (d) {
        var T = this.getHeight() - this._59I;
        return T > d && (d = T), d > 0 ? 0 : b(d) }, r.onPropertyChanged = function (p) {
        var w = this,
          r = p.property;
        xg[r] ? w.ivm() : Km[r] || w.redraw(), r === ie ? w._42o() : r === Ro && w._43o() }, r.getLabel = function (H) {
        return H.toLabel() }, r.getLabelFont = function () {
        return this._labelFont }, r.getLabelColor = function (N) {
        var f = this;
        if (f.isCheckMode()) {
          if (f._focusData === N) return f._labelSelectColor } else if (f.isSelected(N)) return f._labelSelectColor;
        return f._labelColor }, r.getStartRowIndex = function () {
        return this._31I }, r.getEndRowIndex = function () {
        return this._14I }, r.getRowDatas = function () {
        return this._rows }, r.getRowIndex = function (L) {
        return this._rowMap[L._id] }, r.getRowSize = function () {
        return this._rows.size() }, r.getViewRect = function () {
        return Oj(this._29I) }, r.isVisible = function (q) {
        return this._visibleFunc ? this._visibleFunc(q) : !0 }, r.getCurrentSortFunc = function () {
        return this._sortFunc }, r.setDataModel = function (H) {
        var D = this,
          T = D._dataModel,
          u = D._selectionModel;
        T !== H && (T && (T.umm(D.handleDataModelChange, D), T.umd(D.handleDataPropertyChange, D), T.umh(D.handleHierarchyChange, D), u || T.sm().ums(D.handleSelectionChange, D)), D._dataModel = H, H.mm(D.handleDataModelChange, D), H.md(D.handleDataPropertyChange, D), H.mh(D.handleHierarchyChange, D), u ? u._21I(H) : H.sm().ms(D.handleSelectionChange, D), D.fp("dataModel", T, H)) }, r.validateModel = function () {
        var o = this;
        o._rows.clear(), o._rowMap = {}, o.buildChildren(o._dataModel._roots);
        var A = o._rows = o._rows.toList(o.isVisible, o),
          P = 0,
          U = o.getCurrentSortFunc(),
          h = A.size();
        for (U && A.sort(U); h > P; P++) o._rowMap[A.get(P)._id] = P }, r.buildChildren = function (C) {
        var f = this;
        C.each(function (Y) { f._rows.add(Y), f.buildChildren(Y._children) }) }, r.handleDataModelChange = function () { this.ivm() }, r.handleDataPropertyChange = function (a) { "parent" === a.property ? this.ivm() : this.invalidateData(a.data) }, r.handleHierarchyChange = function () { this.ivm() }, r.handleSelectionChange = function (n) { n.datas.each(this.invalidateData, this), this.onSelectionChanged(n) }, r.onSelectionChanged = function (J) {
        var g = this,
          $ = g.sm();!g.isAutoMakeVisible() || 1 !== $.size() || "set" !== J.kind && "append" !== J.kind || g._32o || g.makeVisible($.ld()) }, r.handleBackgroundClick = function (m) { hp(m) && !this.isCheckMode() && this.sm().cs() }, r.makeVisible = function (G) { G && (this._23I = G, this.iv()) }, r.scrollToIndex = function (f) {
        var c = this,
          m = c._29I,
          R = m.height,
          H = c._rowHeight,
          D = H * f;
        f >= 0 && f < c._rows.size() && R > 0 && (D + H > m.y + R ? c.ty(-D + R - H) : D < m.y && c.ty(-D)) }, r.autoScroll = function (u, G) {
        var c = this,
          k = c._rowHeight,
          $ = k,
          Y = k / 4,
          C = c._29I,
          B = c.lp(u),
          E = { x: c.tx(), y: c.ty() };
        return k > 0 && C && (B.x - C.x < $ ? c.translate(Y, 0) : C.x + C.width - B.x < $ && c.translate(-Y, 0), B.y - C.y < $ ? c.translate(0, Y) : C.y + C.height - B.y < $ && c.translate(0, -Y)), E.x = c.tx() - E.x, E.y = c.ty() - E.y, G && (G.x += E.x, G.y += E.y), E }, r.getTopRowOrderSelection = function () {
        var T = this.sm().getTopSelection(),
          j = {},
          M = new Ol;
        return T.each(function (F) { j[F._id] = F }), this._rows.each(function (o) { j[o._id] && M.add(o) }), M }, r.getRowOrderSelection = function () {
        var o = new Ol;
        return this._rows.each(function (h) { this.isSelected(h) && o.add(h) }, this), o }, r.ivm = function () { this.invalidateModel() }, r.invalidateModel = function () {
        var a = this;
        a._96I || (a._96I = 1, a._32I = 1, delete a._24I), a.iv() }, r.redraw = function () {
        var B = this;
        B._32I || (B._32I = 1, delete B._24I, B.iv()) }, r.invalidateData = function (J) {
        var N = this;
        V ? N.redraw() : N._32I || (N._24I || (N._24I = {}), N._24I[J._id] = J, N.iv()) }, r.getFocusData = function () {
        return this._focusData }, r.setFocusDataById = function (L) { this.setFocusData(this.dm().getDataById(L)) }, r.setFocusData = function (c) {
        var x = this,
          f = x._focusData;
        f !== c && (x._focusData = c, x.fp("focusData", f, c), f && x.invalidateData(f), c && (x.invalidateData(c), x.isAutoMakeVisible() && x.makeVisible(c))) }, r.drawRowBackground = function (j, o, p, Y, V, H, m) {
        var x = this,
          J = x.isCheckMode();
        (o === x._focusData && J || p && !J) && No(j, Y, V, H, m, x.getSelectBackground(o)) }, r.drawData = function (t, s, R) {
        var W = this,
          C = W._rowHeight,
          o = C * R,
          e = W._29I,
          T = e.x,
          g = e.width;
        t.save(), t.beginPath(), t.rect(T, o, g, C), t.clip(), W._87o(W.drawRow(t, s, W.isSelected(s), T, o, g, C), R, T, o, g, C), t.restore(), W._rowLineVisible && No(t, T, o + C - 1, g, 1, W._rowLineColor) }, r._12I = function (U) {
        var Y = this,
          e = Y._31I,
          S = Y._29I,
          b = S.x,
          r = S.y,
          t = S.width,
          w = S.height;
        for (U.beginPath(), U.rect(b, r, t, w), U.clip(), U.clearRect(b, r, t, w), Y._76o(), Y._93db(U); e < Y._14I; e++) Y.drawData(U, Y._rows.get(e), e);
        Y._92db(U) }, r._13I = function (w) {
        for (var s, Y = this, g = Y._rowHeight, L = Y._29I, V = L.x, z = L.width, S = Y._31I, c = Y._30I; S < Y._14I; S++) s = Y._rows.get(S), Y._24I[s._id] && c.add({ data: s, index: S });
        c.isEmpty() || (w.beginPath(), c.each(function (S) { w.rect(V, S.index * g, z, g) }), w.clip(), c.each(function (J) { w.clearRect(V, J.index * g, z, g) }), c.each(function (Z) { Y._77o(Z.index) }), Y._93db(w), c.each(function (e) { Y.drawData(w, e.data, e.index) }), Y._92db(w), c.clear()) }, r.validateImpl = function () {
        var d = this,
          J = d._canvas,
          s = d.getWidth(),
          D = d.getHeight(),
          H = d._rowHeight,
          x = d._32I;
        (s !== J.clientWidth || D !== J.clientHeight) && (vr(J, s, D), x = 1);
        var N = f && !p;
        d._96I && !N && d.validateModel();
        var Y = d._29I,
          K = { x: -d.tx(), y: -d.ty(), width: s, height: D },
          C = d._rows.size(),
          v = dc(J),
          X = d._23I;
        x || Qe(K, Y) || (x = 1), d._29I = K, d._59I = C * H, d._31I = G(K.y / H), d._14I = q((K.y + K.height) / H), d._31I < 0 && (d._31I = 0), d._14I > C && (d._14I = C), d._99I && x && d._99I(), Ue(v, d.tx(), d.ty(), 1), x ? d._12I(v) : d._24I && d._13I(v), d._93I(), d._92I(), v.restore(), d._32I = d._24I = d._96I = $, X && (d.scrollToIndex(d.getRowIndex(X)), delete d._23I), d.tx(d.tx()), d.ty(d.ty()) } }, Iq._48o = function (j) { j._rootVisible = !0, j._rootData = $, j._35o = function () { this._expandMap = {}, this._levelMap = {} }, j.validateModel = function () {
        var k = this,
          F = k._rootData;
        k._rows.clear(), k._levelMap = {}, k._rowMap = {}, k._currentLevel = 0, F ? k._rootVisible ? k.isVisible(F) && k.buildData(F) : k.buildChildren(F) : k.buildChildren(), delete k._currentLevel }, j.buildData = function (P) {
        var y = this,
          H = P._id,
          z = y._rows;
        y._rowMap[H] = z.size(), z.add(P), y._levelMap[H] = y._currentLevel, y.isExpanded(P) && (y._currentLevel++, y.buildChildren(P), y._currentLevel--) }, j.buildChildren = function (N) {
        var s = this,
          L = N ? N._children : s._dataModel._roots,
          a = s.getCurrentSortFunc();
        a && s.isChildrenSortable(N) ? L.toList(s.isVisible, s).sort(a).each(s.buildData, s) : L.each(function (K) { s.isVisible(K) && s.buildData(K) }) }, j.getLevel = function (b) {
        return this._levelMap[b._id] }, j.getToggleIcon = function (J) {
        var E = this,
          T = E._loader,
          N = E._collapseIcon;
        return T && !T.isLoaded(J) ? N : J.hasChildren() ? E.isExpanded(J) ? E._expandIcon : N : $ }, j.isCheckMode = function () {
        return this._checkMode != $ }, j.isChildrenSortable = function () {
        return !0 }, j.handleDataModelChange = function (A) {
        var i = this;
        A.kind === Pr ? delete i._expandMap[A.data._id] : A.kind === Do && (i._expandMap = {}), i.ivm() }, j.toggle = function (F) {
        var _ = this;
        _.isExpanded(F) ? _.collapse(F) : _.expand(F) }, j.isExpanded = function (G) {
        return 1 === this._expandMap[G._id] }, j.expand = function (c) {
        var _ = this,
          n = _._loader;
        _.isExpanded(c) || (n && !n.isLoaded(c) && n.load(c), _._expandMap[c._id] = 1, _.ivm(), _.onExpanded(c)) }, j.onExpanded = function () {}, j.collapse = function (w) {
        var u = this;
        u.isExpanded(w) && (delete u._expandMap[w._id], u.ivm(), u.onCollapsed(w)) }, j.onCollapsed = function () {}, j.expandAll = function () {
        var d = this;
        d._dataModel.each(function (Y) { Y.hasChildren() && (d._expandMap[Y._id] = 1) }), d.ivm() }, j.collapseAll = function () { this._expandMap = {}, this.ivm() }, j.makeVisible = function (Y) {
        if (Y) {
          var o = this;
          if (!o._rootData || Y.isDescendantOf(o._rootData)) {
            for (var V = Y._parent; V;) o.expand(V), V = V._parent;
            o._23I = Y, o.iv() } } }, j.checkData = function (z) {
        var A, x = this,
          y = x._checkMode,
          k = x.sm(),
          F = k.co(z);
        if (!k.sg() || !F) {
          if (x._32o = 1, y === L) F ? k.rs(z) : k.as(z);
          else if (y === hg) A = new Ol(z), A.addAll(z._children);
          else if ("descendant" === y) A = new Ol, Nr(z, A);
          else if ("all" === y && (A = new Ol, Nr(z, A), !F))
            for (var i = z._parent; i;) A.add(i), i = i._parent;
          A && (F ? k.rs(A) : k.as(A)), delete x._32o } }, j._97I = function ($, E, w, l, F, V, c) {
        var i = this,
          y = i._indent,
          z = i._levelMap[E._id],
          Q = i.getIconWidth(E),
          d = bd(i.getToggleIcon(E));
        d ? (l += y * z, Ee($, d, l + y / 2, F + c / 2, E, i), l += y) : l += y * (z + 1), i._checkMode && (Ee($, i.getCheckIcon(E), l + y / 2, F + c / 2, E, i), l += y), i.drawIcon($, E, l, F, Q, c), i.drawLabel($, E, l + Q, F, c) } }, Iq._14Q = function (M) { M.getIcon = function (S) {
        return S.getIcon() }, M.getIconWidth = function (h) {
        return this.getIcon(h) ? this._indent : 0 }, M.drawIcon = function (M, N, G, L, c, B) {
        if (c) {
          var g = this,
            _ = g.getBodyColor(N),
            k = bd(g.getIcon(N), _);
          k && (B -= g.isRowLineVisible() ? 1 : 0, cg(M, k, ng, G, L, c, B, N, g, _), Bn(M, g.getBorderColor(N), G, L, c, B)) } }, M.drawLabel = function (a, J, G, V, D) {
        var c = this;
        kj(a, c.getLabel(J), c.getLabelFont(J), c.getLabelColor(J), G, V, 0, D) } }, Iq._50o = function (H) { H._98I = function () {
        var z = this,
          S = z._39o = new he;
        z._60I = new Ol, S.mm(z._17o, z), S.md(z._18o, z), S.mh(z._19o, z) }, H.setColumns = function (R) { this._39o.clear(), this.addColumns(R) }, H.addColumns = function (m) {
        var V = this._39o;
        m.forEach(function (J) {
          if (!(J instanceof Bb)) {
            var u = Go(J.className);
            J = cj(u ? u : Bb, J) }
          V.add(J) }) }, H.onColumnClicked = function () {}, H.onCheckColumnClicked = function () {}, H._3Q = function (y) {
        for (var P, K = 0, D = this._60I, i = D.size(); i > K; K++)
          if (P = D.get(K), P.column === y) return P;
        return $ }, H.getColumnAt = function (b) {
        var H = this._4Q(b);
        return H ? H.column : $ }, H._4Q = function (X) {
        for (var t = this, M = X.target ? t.lp(X).x : X.x, E = t._60I, k = 0; k < E.size(); k++) {
          var f = E.get(k),
            U = f.startX;
          if (M >= U && M < U + f.column.getWidth()) return f }
        return $ }, H.getToolTip = function (u) {
        var T = this,
          M = T.getDataAt(u),
          j = T.getColumnAt(u);
        return M && j ? j.getToolTip(M, T) : $ }, H.adjustTranslateX = function (C) {
        var _ = this.getWidth() - this._91I;
        return _ > C && (C = _), C > 0 ? 0 : b(C) }, H._99I = function () {
        var w = this,
          b = w._29I,
          Y = w._60I;
        Y.clear(), w._91I = 0, w._39o._roots.each(function (U) {
          if (U.isVisible()) {
            var h = w._91I + U.getWidth();
            w._91I <= b.x + b.width && h >= b.x && Y.add({ column: U, startX: w._91I }), w._91I = h } }) }, H.drawData = function (O, j, K) {
        var z = this,
          D = z._rowHeight,
          C = D * K,
          q = z.isSelected(j),
          L = z._29I,
          J = L.x,
          Y = L.width;
        z.drawRowBackground(O, j, q, J, C, Y, D), z._60I.each(function (t) {
          var x = t.column,
            M = t.startX,
            y = x.getWidth();
          y > 0 && !z.isEditing(j, x) && (O.save(), O.beginPath(), O.rect(M, C, y, D), O.clip(), z._87o(z.drawCell(O, j, q, x, M, C, y, D), K, M, C, y, D), z._columnLineVisible && No(O, M + y - 1, C, 1, D, z._columnLineColor), O.restore()) }), z._rowLineVisible && No(O, J, C + D - 1, Y, 1, z._rowLineColor) }, H.drawCell = function (k, B, y, G, o, W, d, i) {
        var r = this;
        if (G.drawCell) return G.drawCell(k, B, y, G, o, W, d, i, r);
        var H = r.getValue(B, G);
        Dl(k, H, G, r.getLabelFont(B, G, H), r.getLabelColor(B, G, H), o, W, d, i, B, r) }, H.getColumnModel = function () {
        return this._39o }, H._17o = function () { this.redraw() }, H._18o = function (_) {
        var J = this;
        _.data === J._sortColumn && jk[_.property] ? J.ivm() : (J._42o(), J.redraw()) }, H._19o = function () { this.redraw() }, H.getCurrentSortFunc = function () {
        var B = this,
          m = B._sortColumn;
        if (m && m.isSortable()) {
          var J = m.getSortFunc(),
            P = Hj === m.getSortOrder() ? 1 : -1;
          return J || (J = mf),
            function (U, h) {
              return J.call(B, B.getValue(U, m), B.getValue(h, m), U, h) * P } }
        return B._sortFunc }, H.isCellEditable = function (g, w) {
        return w.isEditable() && this.isEditable() }, H._37O = function (U, g) {
        if (hp(g))
          for (var W = this, n = W.lp(g), V = W._60I, J = W._rowHeight, x = W._29I, Z = x.x, q = x.y, S = x.width, r = x.height, a = 0; a < V.size(); a++) {
            var Y = V.get(a),
              h = Y.startX,
              _ = Y.column,
              T = _.getWidth();
            if (_ !== W._31o && _ !== W._4o && W.isCellEditable(U, _, g) && n.x >= h && n.x < h + T) {
              var k = { x: h, y: W.getRowIndex(U) * J, width: T, height: J },
                v = { x: k.x + W.tx(), y: k.y + W.ty(), width: k.width, height: k.height },
                R = 0,
                w = 0;
              return k.x < Z ? R = k.x - Z : k.x + k.width > Z + S && (R = k.x + k.width - Z - S), R && (W.tx(W.tx() - R), v.x -= R), k.y < q ? w = k.y - q : k.y + J > q + r && (w = k.y + J - q - r), w && (W.ty(W.ty() - w), v.y -= w), W.beginEditing({ data: U, column: _, value: W.getValue(U, _), event: g, rect: k, editorRect: v, view: W }), void 0 } } } }, dn.BaseItemEditor = function (j, m, J, u) { this._data = j, this._column = m, this._master = J, this._editInfo = u }, Of("BaseItemEditor", y, { ms_ac: ["data", "column", "master", "editInfo"], editBeginning: function () {}, getView: function () {}, getValue: function () {}, setValue: function () {} });
    var sc = t.Tab = function () { Dj(sc, this) };
    Gl("Tab", sk, { ms_ac: ["view", "closable", "disabled"], _icon: $, _closable: !1, _disabled: !1, setParent: im });
    var Bb = t.Column = function () { Dj(Bb, this) };
    Gl("Column", sk, { _46o: 1, ms_ac: ["accessType", "valueType", yc, bg, kf, Ml, "align", dj, "sortOrder", Sp, "sortable", "clickable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"], _visible: !0, _width: 80, _sortOrder: Hj, _sortFunc: $, _sortable: !0, _clickable: !0, setWidth: function (n) { 16 > n && (n = 16);
        var $ = this._width;
        this._width = n, this.fp(Ml, $, n) }, getToolTip: function (N, C) {
        return this.formatValue(C.getValue(N, this)) } });
    var Rb = t.Property = function () { Dj(Rb, this) };
    Gl("Property", sk, { _46o: 1, ms_ac: ["accessType", "valueType", bg, kf, "categoryName", dj, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"], _categoryName: $, getToolTip: function (I, e, g) {
        var l = this;
        return e ? l.formatValue(g.getValue(I, l)) : g.getPropertyName(l) } }), dn.AccordionView = function () {
      var H = this;
      H._20o = {}, H._21o = new Ol, H._10o = $, H._9o = $, H._11o = $, H._view = ef(0, H), H.iv() }, Of("AccordionView", y, { ms_v: 1, ms_fire: 1, ms_ac: [ls, cm, "titleHeight", Qm, fc, "titleBackground", "selectWidth", sp, "orientation", "separatorColor"], _expandIcon: r.accordionViewExpandIcon, _collapseIcon: r.accordionViewCollapseIcon, _titleHeight: hs, _labelColor: r.accordionViewLabelColor, _labelFont: r.accordionViewLabelFont, _titleBackground: r.accordionViewTitleBackground, _selectBackground: r.accordionViewSelectBackground, _selectWidth: r.accordionViewSelectWidth, _orientation: "v", _separatorColor: r.accordionViewSeparatorColor, onPropertyChanged: function () { this.iv() }, getView: function () {
        return this._view }, getTitles: function () {
        return this._21o }, getCurrentTitle: function () {
        return this._10o }, add: function (t, f, T, $) {
        var N = this,
          X = tp();
        if (N._20o[t]) throw t + " already exists";
        X.onmousedown = be, X.style.cursor = Le, X.addEventListener(c ? xj : On, function (B) { be(B) }, !1), X.addEventListener(c ? yb : zo, function (c) { be(c), hp(c) && (N._10o === t ? N.collapse() : N.expand(t)) }, !1), Af(N._view, X), N._20o[t] = { content: f, div: X, canvas: Jr(X), icon: $ }, N._21o.add(t), T && N.expand(t), N.iv() }, remove: function (W) {
        var P = this,
          p = P._20o[W];
        p && (Sc(p.div), delete P._20o[W], P._21o.remove(W), P.iv()) }, clear: function () {
        var v = this;
        v._20o = {}, v._21o.clear(), v.iv() }, isExpanded: function (W) {
        return this._10o === W }, expand: function (h) {
        var l = this;
        l._20o[h] && l._10o !== h && (l._10o = h, l.onExpanded(h), l.iv()) }, onExpanded: function () {}, collapse: function () {
        var R = this;
        R._10o && (R.onCollapsed(R._10o), delete R._10o, R.iv()) }, onCollapsed: function () {}, initCanvas: function (D, a, C) { vr(D, a, C);
        var Z = dc(D);
        return Ue(Z, 0, 0, 1), Z.clearRect(0, 0, a, C), Z }, drawTitle: function (f, d, v, M, w) {
        var L = this,
          m = bd(w.icon),
          i = L.isExpanded(d),
          e = L._titleHeight,
          U = L._titleBackground,
          F = L._selectWidth,
          g = L._separatorColor,
          Y = bd(i ? L._expandIcon : L._collapseIcon),
          j = F + 4;
        No(f, 0, 0, v, M, U), i && F && No(f, 0, 0, F, M, L._selectBackground), (i || L._21o.get(L._21o.size() - 1) !== d) && No(f, 0, M - 1, v, 1, g ? g : Kp(U)), m && (Ee(f, m, j + Io(m) / 2, e / 2), j += Io(m) + 2), kj(f, d, L.getLabelFont(d), L.getLabelColor(d), j, 0, 0, e), Y && Ee(f, Y, v - Io(Y) / 2 - 4, e / 2) }, validateImpl: function () {
        var d = this,
          U = d._view,
          j = 0,
          z = 0,
          L = d.getWidth(),
          e = d.getHeight(),
          R = d._titleHeight,
          m = d._21o.size() * R,
          J = d._11o,
          s = d._9o;
        delete d._11o, delete d._9o, d._21o.each(function (K) {
          var C, y, N = d._20o[K],
            V = N.content,
            f = d._10o === K;
          bn(d) ? (Am(N.div, j, 0, R, e), C = d.initCanvas(N.canvas, R, e), wg(C, 0, e), gb(C, -S), d.drawTitle(C, K, e, R, N), C.restore(), f ? (y = M(0, L - m), V && (d._11o = V, d._9o = ej(V), Am(V, j + R, 0, y, e)), j += R + y) : j += R) : (Am(N.div, 0, z, L, R), C = d.initCanvas(N.canvas, L, R), d.drawTitle(C, K, L, R, N), C.restore(), f ? (y = M(0, e - m), V && (d._11o = V, d._9o = ej(V), Am(V, 0, z + R, L, y)), z += R + y) : z += R) });
        var D = d._9o;
        J && J !== d._11o && J.endEditing && J.endEditing(), D && D !== s && Af(U, D), s && s !== D && Sc(s) } }), dn.SplitView = function (k, F, T, O) {
      var q = this,
        D = q._dividerDiv = tp(),
        U = q._60O = Jr(),
        u = q._61O = Jr(),
        A = U.style,
        c = u.style;
      q._view = ef(1, q), Af(q._view, D), A.msTouchAction = Mg, A.pointerEvents = Mg, A.cursor = Le, c.msTouchAction = Mg, c.pointerEvents = Mg, c.cursor = Le, k && q.setLeftView(k), F && q.setRightView(F), T && q.setOrientation(T), O != $ && q.setPosition(O), q.setStatus(id), new Fj(q) }, Of("SplitView", y, {
      ms_v: 1,
      ms_fire: 1,
      ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
      _continuousLayout: !1,
      _position: .5,
      _togglable: !0,
      _orientation: "h",
      _draggable: !0,
      _dividerSize: r.splitViewDividerSize,
      _dividerBackground: r.splitViewDividerBackground,
      _dragOpacity: r.splitViewDragOpacity,
      _toggleIcon: r.splitViewToggleIcon,
      onPropertyChanged: function () { this.iv() },
      getDividerDiv: function () {
        return this._dividerDiv },
      getPosition: function () {
        return this._position },
      setPosition: function (U, y) {
        var N = this,
          _ = N._position;
        isNaN(U) || (y || (N._82O = 0 > U ? -1 : U > 1 ? 1 : 0), N._position = U, N.fp(Ff, _, U)) },
      getLeftView: function () {
        return this._leftView },
      setLeftView: function (Z) {
        var a = this,
          Y = a._leftView,
          F = a._view;
        if (a._leftView !== Z) {
          if (Y && Y !== a._rightView) {
            var d = ej(Y);
            d.parentNode === F && Sc(d) }
          if (a._leftView = Z, Z) {
            var B = ej(Z);
            B.parentNode !== F && F.insertBefore(B, a._dividerDiv) }
          a.fp("leftView", Y, Z) }
      },
      getRightView: function () {
        return this._rightView },
      setRightView: function (J) {
        var I = this,
          d = I._rightView,
          l = I._view;
        if (I._rightView !== J) {
          if (d && d !== I._leftView) {
            var A = ej(d);
            A.parentNode === l && Sc(A) }
          if (I._rightView = J, J) {
            var G = ej(J);
            G.parentNode !== l && l.insertBefore(G, I._dividerDiv) }
          I.fp("rightView", d, J) } },
      validateImpl: function () {
        var l = this,
          o = l._draggable,
          T = l._position,
          R = l.getWidth(),
          j = l.getHeight(),
          Z = l._dividerSize,
          G = l._dividerBackground,
          I = c ? 18 : 8,
          q = l._dividerDiv,
          L = l._82O,
          w = l._60O,
          D = l._61O,
          f = l._toggleIcon,
          Y = l._status,
          x = q.style,
          K = null,
          s = c ? 20 : 4,
          e = f.comps[0];
        Z >= I || 0 === Z ? l._coverDiv && (Sc(l._coverDiv), delete l._coverDiv) : l._coverDiv || (l._coverDiv = tp(), F && (l._coverDiv.style.background = ib), Af(q, l._coverDiv)), l._togglable ? w.parentNode || (Af(q, w), Af(q, D)) : (Sc(w), Sc(D));
        var g = l._coverDiv,
          A = l._leftView,
          E = l._rightView;
        if (bn(l)) {
          if (Z > R && (Z = R), Y === id)
            if (1 === L) var _ = v(T, R),
              Q = M(0, R - Z - _);
            else -1 === L ? (Q = v(-T, R), _ = M(0, R - Z - Q)) : (_ = b((R - Z) * T), Q = M(0, R - Z - _));
          else "cl" === Y ? (_ = 0, Q = M(0, R - Z)) : "cr" === Y && (Q = 0, _ = M(0, R - Z));
          A && Am(A, 0, 0, _, j), E && Am(E, _ + Z, 0, Q, j), Am(q, _, 0, Z, j), l._22o = _, g && (Am(g, Z / 2 - I / 2, 0, I, j), g.style.cursor = o ? ln : ""), q.style.cursor = o ? ln : "";
          var B = q.clientHeight / 2,
            $ = q.clientWidth;
          vr(w, $, $), Am(w, 0, B - $ - s, $, $), K = dc(w), Ue(K, 0, 0, 1), e.rotation = -S, yg(K, f, 0, 0, $, $), K.restore(), vr(D, $, $), Am(D, 0, B + s, $, $), K = dc(D), Ue(K, 0, 0, 1), e.rotation = S, yg(K, f, 0, 0, $, $), K.restore() } else {
          if (Z > j && (Z = j), Y === id)
            if (1 === L) var W = v(T, j),
              r = M(0, j - Z - W);
            else -1 === L ? (r = v(-T, j), W = M(0, j - Z - r)) : (W = b((j - Z) * T), r = M(0, j - Z - W));
          else "cl" === Y ? (W = 0, r = M(0, j - Z)) : "cr" === Y && (r = 0, W = M(0, j - Z));
          A && Am(A, 0, 0, R, W), E && Am(E, 0, W + Z, R, r), Am(q, 0, W, R, Z), l._22o = W, g && (Am(g, 0, Z / 2 - I / 2, R, I), g.style.cursor = o ? ec : ""), x.cursor = o ? ec : "";
          var t = q.clientWidth / 2,
            $ = q.clientHeight;
          vr(w, $, $), Am(w, t - $ - s, 0, $, $), K = dc(w), Ue(K, 0, 0, 1), e.rotation = 0, yg(K, f, 0, 0, $, $), K.restore(), vr(D, $, $), Am(D, t + s, 0, $, $), K = dc(D), Ue(K, 0, 0, 1), e.rotation = i, yg(K, f, 0, 0, $, $), K.restore() }
        x.background = G }
    });
    var Fj = function (c) { this.sv = c, this.addListeners() };
    Xk(Fj, y, { ms_listener: 1, getView: function () {
        return this.sv.getView() }, handle_touchstart: function (X) {
        var U = this,
          k = U.sv,
          C = k._dividerDiv,
          r = k._60O,
          j = k._61O,
          A = k._status,
          h = X.target;
        if (h === r) A === id ? k.setStatus("cl") : "cr" === A && k.setStatus(id);
        else if (h === j) A === id ? k.setStatus("cr") : "cl" === A && k.setStatus(id);
        else if (sd(X) && (h === C || h === k._coverDiv) && (be(X), k.isDraggable())) { k.getLeftView(), k.getRightView();
          var N = U.maskDiv = tp();
          if (N.style.left = 0, N.style.top = 0, N.style.width = k.getWidth() + "px", N.style.height = k.getHeight() + "px", k.getView().appendChild(N), !k.isContinuousLayout()) {
            var u = U.resizeDiv = tp();
            u.style.left = C.style.left, u.style.top = C.style.top, u.style.width = C.style.width, u.style.height = C.style.height, u.style.opacity = k.getDragOpacity(), u.style.background = k.getDividerBackground(), Af(U.getView(), u) }
          U._lastAbsPosition = k._22o, U._86o = bn(k) ? en(X).x : en(X).y, Ud(U, X) } }, handleWindowTouchMove: function (r) { sd(r) && this.update(r, this.sv.isContinuousLayout()) }, handleWindowTouchEnd: function (y) {
        var D = this;
        D.update(y, !0), D.sv.setStatus(id), D.maskDiv && Sc(D.maskDiv), D.resizeDiv && Sc(D.resizeDiv), D.maskDiv = D.resizeDiv = $ }, handle_mousedown: function (I) { hp(I) && this.handle_touchstart(I) }, handleWindowMouseMove: function (E) { this.handleWindowTouchMove(E) }, handleWindowMouseUp: function (o) { this.handleWindowTouchEnd(o) }, update: function (V, s) {
        var c = this,
          m = c.sv,
          f = bn(m) ? m.getWidth() : m.getHeight(),
          M = m._dividerSize,
          B = c._lastAbsPosition - c._86o;
        bn(m) ? (B += en(V).x, B > f - M && (B = f - M), 0 > B && (B = 0), c.resizeDiv && (c.resizeDiv.style.left = B + Zq)) : (B += en(V).y, B > f - M && (B = f - M), 0 > B && (B = 0), c.resizeDiv && (c.resizeDiv.style.top = B + Zq)), s && f !== M && (1 === m._82O ? m.setPosition(B, 1) : -1 === m._82O ? m.setPosition(B - f + M, 1) : m.setPosition(B / (f - M), 1)) } }), dn.TabView = function () {
      var K = this,
        s = K._view = ef(1, K),
        E = K._91O = tp(1),
        C = K._tabModel = new he,
        a = C.sm(),
        S = K.invalidate;
      K._7o = new Ol, K._canvas = Jr(E), Af(s, E), Af(s, K._92O = tp(1)), a.setSelectionMode(Qj), a.ms(S, K), C.mm(S, K), C.md(S, K), C.mh(S, K), new Si(K), K.iv() }, Of("TabView", y, { ms_v: 1, ms_fire: 1, ms_tx: 1, ms_ty: 1, ms_lp: 1, ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Qm, fc, "tabBackground", "selectWidth", sp, "moveBackground", "insertColor"], _tabPosition: xd, _tabHeight: hs, _tabGap: r.tabViewTabGap, _labelColor: r.tabViewLabelColor, _labelFont: r.tabViewLabelFont, _tabBackground: r.tabViewTabBackground, _selectWidth: r.tabViewSelectWidth, _selectBackground: r.tabViewSelectBackground, _moveBackground: r.tabViewMoveBackground, _insertColor: r.tabViewInsertColor, _movable: !0, getContentDiv: function () {
        return this._92O }, getTitleDiv: function () {
        return this._91O }, getTabModel: function () {
        return this._tabModel }, add: function (k, n, U) {
        var u = new sc,
          q = this._tabModel;
        return u.setName(k), u.setView(n), q.add(u), U && q.sm().ss(u), u }, getLabel: function (D) {
        return D.toLabel() }, onPropertyChanged: function () { this.iv() }, _7Q: function (s) { this._23o = s, this.iv() }, get: function (X) {
        var L = this,
          f = L._tabModel;
        if (Ng(X)) return f._roots.get(X);
        if (An(X)) {
          var p;
          return f.each(function (A) { X === L.getLabel(A) && (p = A) }), p }
        return X instanceof sc ? X : $ }, select: function (b) { this._tabModel.sm().ss(this.get(b)) }, remove: function (u) {
        var V = this;
        if (u = V.get(u)) {
          var t = V._tabModel,
            T = t._roots.indexOf(u);
          V._tabModel.remove(u), V._12Q(--T) } }, getCurrentTab: function () {
        return this._8o }, hideTabView: function (Q, y) { y.parentNode === this._92O && (Lr(y) ? (y.style.display = ms, y._tab_ = Q) : Sc(y), eq()) }, showTabView: function (M, u) { Lr(u) && (u.style.display = "block", u._tab_ = M), u.parentNode !== this._92O && (Af(this._92O, u), eq()) }, _24o: function () {
        var I, L = this,
          E = L._8o,
          c = L._9o,
          A = L._tabModel.sm().ld();
        A && (I = ej(A.getView())), I !== c && (c && (E.getView() && E.getView().endEditing && E.getView().endEditing(), L.hideTabView(E, c)), I && L.showTabView(A, I)), L._8o = A, L._9o = I, E !== A && L.onTabChanged(E, A) }, onTabClosing: function () {
        return !0 }, onTabChanged: function () {}, onTabClosed: function (J, v) { this._12Q(--v) }, _12Q: function (E) {
        var X = this,
          k = X._tabModel,
          e = k.size();
        if (e && !k.sm().ld()) { E == $ && (E = 0), E >= e && (E = e - 1), 0 > E && (E = 0);
          for (var F = E; F >= 0; F--) {
            var W = X.get(F);
            if (!W.isDisabled()) return X.select(W), W }
          for (F = E + 1; e > F; F++)
            if (W = X.get(F), !W.isDisabled()) return X.select(W), W } }, _9Q: function (K) {
        var k = 4,
          S = bd(K.getIcon());
        S && (k += Io(S, K) + 4);
        var N = this.getLabel(K);
        return N && (k += Sj(this.getLabelFont(K), N).width + 4), K.isClosable() && (k += 10), k }, drawTab: function (c, V, I, f, G, _, z) {
        var T, $ = this,
          M = $._tabPosition,
          L = I + 4,
          Q = $._selectWidth,
          B = bd(V.getIcon()),
          u = V.isDisabled(),
          P = $.getLabelColor(V),
          K = $.getLabelFont(V),
          w = $.getLabel(V),
          A = $._selectBackground,
          s = M === ci + "-vertical",
          m = M === Fq + "-vertical";
        (s || m) && (L = f + 4), u && (c.globalAlpha = Hg), No(c, I, f, G, _, z), V === $._8o && Q && (M === xd ? No(c, I, f + _ - Q, G, Q, A) : M === ci ? No(c, I + G - Q, f, Q, _, A) : M === Fq ? No(c, I, f, Q, _, A) : s ? No(c, I + G - Q, f, Q, _, A) : m ? No(c, I, f, Q, _, A) : No(c, I, f, G, Q, A));
        var k = G / 2;
        if (s && (wg(c, k, f + _ / 2), gb(c, i), wg(c, -k, -f - _ / 2)), B) {
          var h = mg(B, V),
            E = Io(B, V);
          if (s || m) {
            var F = I + G / 2,
              O = L + h / 2;
            wg(c, F, O), gb(c, S), wg(c, -F, -O), Ee(c, B, I + G / 2, L + h / 2, V, $), wg(c, F, O), gb(c, -S), wg(c, -F, -O), L += h + 4 } else Ee(c, B, L + E / 2, f + _ / 2, V, $), L += E + 4 }
        return s || m ? (wg(c, G / 2, L + G / 2), gb(c, S), wg(c, -G / 2, -L - G / 2), kj(c, w, K, P, I, L, _, G), wg(c, G / 2, L + G / 2), gb(c, -S), wg(c, -G / 2, -L - G / 2)) : kj(c, w, K, P, L, f, G, _), s && (wg(c, k, f + _ / 2), gb(c, -i), wg(c, -k, -f - _ / 2)), V.isClosable() && (T = m ? { x: I + G - 12, y: f + _ - 12, width: 12, height: 12 } : { x: I + G - 12, y: f + 2, width: 12, height: 12 }, this.drawCloseIcon(V, c, P, T)), u && (c.globalAlpha = 1), T }, drawCloseIcon: function (b, w, T, j) {
        var E = j.x,
          n = j.y;
        w.strokeStyle = T, w.lineWidth = 1, w.beginPath(), w.moveTo(E + 2, n + 8), w.lineTo(E + 8, n + 2), w.moveTo(E + 8, n + 8), w.lineTo(E + 2, n + 2), w.stroke() }, validateImpl: function () {
        var V = this;
        V._24o();
        var e, g = V._canvas,
          N = V._tabPosition,
          t = V._91O,
          h = V._92O,
          W = V._tabModel,
          f = V.getWidth(),
          H = V.getHeight(),
          j = V._tabHeight,
          Y = V._7o,
          U = V._tabGap,
          d = N === xd,
          n = N === ci,
          v = N === Fq,
          b = N === ci + "-vertical",
          i = N === Fq + "-vertical",
          w = V._23o,
          q = 0;
        if ((n || v) && W._roots.each(function (N) { q = M(V._9Q(N), q) }), d ? (Am(t, 0, 0, f, j), e = { x: 0, y: j, width: f, height: M(0, H - j) }) : n ? (Am(t, 0, 0, q, H), e = { x: q, y: 0, width: M(0, f - q), height: H }) : v ? (Am(t, f - q, 0, q, H), e = { x: 0, y: 0, width: M(0, f - q), height: H }) : b ? (Am(t, 0, 0, j, H), e = { x: j, y: 0, width: M(0, f - j), height: H }) : i ? (Am(t, f - j, 0, j, H), e = { x: 0, y: 0, width: M(0, f - j), height: H }) : (Am(t, 0, H - j, f, j), e = { x: 0, y: 0, width: f, height: M(0, H - j) }), Am(h, e), b || i) { V._9o && (e.x = 0, Am(V._8o.getView(), e)), vr(g, j, H);
          var E = dc(g),
            I = 0;
          if (Ue(E, 0, V.ty(), 1), E.clearRect(0, 0, j, H), Y.clear(), W._roots.each(function (C) {
              var r, O = V._9Q(C);
              w && w.tab === C || (r = V.drawTab(E, C, 0, I, j, O, V._tabBackground)), Y.add({ _75o: r, tab: C, startY: I, endY: I + O, height: O }), I += O + U }), V._23Q = M(0, I - U), w) {
            var Z = w.position;
            V.drawTab(E, w.tab, 0, w.startY, j, w.height, V._moveBackground), No(E, 0, Z, j, 1, V._insertColor) }
          E.restore(), V.ty(V.ty()) } else if (n || v) { V._9o && (e.x = 0, Am(V._8o.getView(), e)), vr(g, q, H);
          var E = dc(g),
            I = 0;
          if (Ue(E, 0, V.ty(), 1), E.clearRect(0, 0, q, H), Y.clear(), W._roots.each(function (_) {
              var y;
              w && w.tab === _ || (y = V.drawTab(E, _, 0, I, q, j, V._tabBackground)), Y.add({ _75o: y, tab: _, startY: I, endY: I + j, height: j }), I += j + U }), V._23Q = M(0, I - U), w) {
            var Z = w.position;
            V.drawTab(E, w.tab, 0, w.startY, q, w.height, V._moveBackground), No(E, 0, Z, q, 1, V._insertColor) }
          E.restore(), V.ty(V.ty()) } else { V._9o && (e.y = 0, Am(V._8o.getView(), e)), vr(g, f, j);
          var E = dc(g),
            S = 0;
          if (Ue(E, V.tx(), 0, 1), E.clearRect(0, 0, f, j), Y.clear(), W._roots.each(function (A) {
              var l, I = V._9Q(A);
              w && w.tab === A || (l = V.drawTab(E, A, S, 0, I, j, V._tabBackground)), Y.add({ _75o: l, tab: A, startX: S, endX: S + I, width: I }), S += I + U }), V._64I = M(0, S - U), w) {
            var Z = w.position;
            V.drawTab(E, w.tab, w.startX, 0, w.width, j, V._moveBackground), Hc(E, V._insertColor, Z, 0, j) }
          E.restore(), V.tx(V.tx()) }
        for (var L = [], m = h.children, x = 0; x < m.length; x++) {
          var J = m[x],
            r = J._tab_;
          r && !W.contains(r) && L.push(J) }
        L.forEach(function (n) { h.removeChild(n) }) } });
    var Si = function (L) { this.tv = L, this.addListeners() };
    Xk(Si, y, { ms_listener: 1, getView: function () {
        return this.tv._91O }, handle_mousewheel: function (f) { this.handleScroll(f, 10 * (f.wheelDelta / 40)) }, handle_DOMMouseScroll: function (v) { this.handleScroll(v, 10 * -v.detail) }, handleScroll: function ($, O) { be($);
        var q = this.tv,
          D = q._tabPosition;!q._40o() || D !== xd && D !== qc || q.tx(this.tv.tx() + O), !q._41o() || D !== ci && D !== Fq && D !== ci + "-vertical" && D !== Fq + "-vertical" || q.ty(this.tv.ty() + O) }, _8Q: function (i) {
        var V, j, y = this.tv,
          g = y._tabPosition,
          K = y._7o;
        if (g === xd || g === qc) {
          var s = y.lp(i).x;
          for (V = 0; V < K.size(); V++)
            if (j = K.get(V), j.startX <= s && s <= j.endX) return j } else if (g === ci || g === Fq || g === ci + "-vertical" || g === Fq + "-vertical") {
          var H = y.lp(i).y;
          for (V = 0; V < K.size(); V++)
            if (j = K.get(V), j.startY <= H && H <= j.endY) return j }
        return $ }, isClickable: function (U) {
        var G = this.tv,
          R = G._tabPosition,
          V = this._73o = this._8Q(U);
        return !G._40o() || R !== xd && R !== qc ? !G._41o() || R !== ci && R !== Fq && R !== ci + "-vertical" && R !== Fq + "-vertical" ? V && (!V.tab.isDisabled() || G.isMovable()) : !0 : !0 }, handle_mousemove: function (M) {
        var k = this;
        gp ? k._74o = k._8Q(M) : k.getView().style.cursor = k.isClickable(M) ? Le : "" }, handle_mousedown: function (Y) { this.handle_mousemove(Y), this.handle_touchstart(Y) }, handle_touchstart: function (E) {
        var Z = this,
          V = Z.tv,
          Y = V._tabPosition;
        be(E), Z.isClickable(E) && (Y === xd || Y === qc ? (Z.x = en(E).x, Z.lp = V.lp(E), Z.tx = V.tx()) : (Z.y = en(E).y, Z.lp = V.lp(E), Z.ty = V.ty()), Ud(Z, E)) }, handleWindowMouseMove: function (e) { this.handleWindowTouchMove(e) }, handleWindowTouchMove: function (U) {
        var W, J = this,
          s = J.tv,
          $ = s._tabPosition,
          d = J._73o;
        if ($ === xd || $ === qc) {
          if (W = en(U).x - J.x, !J._25o && !J.moving && N(W) > 2 && (s._40o() && !ll(U) ? J._25o = 1 : d && s.isMovable() && (J.moving = 1)), J._25o) s.tx(J.tx + W);
          else if (J.moving) {
            var n = J.lp.x + W,
              a = s._tabGap / 2;
            s._7o.each(function (w) {
              var u = w.endX,
                F = n - w.startX < u - n;
              n >= w.startX && u >= n && s._7Q({ tab: d.tab, startX: d.startX + W, width: d.width, front: F, insertTab: w.tab, position: F ? M(0, w.startX - a) : v(s._64I, u + a) }) }) } } else if (W = en(U).y - J.y, !J._25o && !J.moving && N(W) > 2 && (s._41o() && !ll(U) ? J._25o = 1 : d && s.isMovable() && (J.moving = 1)), J._25o) s.ty(J.ty + W);
        else if (J.moving) {
          var g = J.lp.y + W,
            a = s._tabGap / 2;
          s._7o.each(function (E) {
            var A = E.endY,
              b = g - E.startY < A - g;
            g >= E.startY && A >= g && s._7Q({ tab: d.tab, startY: d.startY + W, height: d.height, front: b, insertTab: E.tab, position: b ? M(0, E.startY - a) : v(s._23Q, A + a) }) }) } }, handleWindowMouseUp: function (Z) { this.handleWindowTouchEnd(Z) }, handleWindowTouchEnd: function () {
        var s = this,
          O = s.tv,
          n = O._tabPosition,
          j = O.getTabModel(),
          q = j._roots,
          d = s._73o;
        if (s.moving) {
          var T = O._23o;
          if (T && T.insertTab !== T.tab) {
            var u = T.tab,
              B = q.remove(u),
              p = q.indexOf(T.insertTab);
            p >= 0 && (T.front || p++, p <= q.size() && (q.add(u, p), j._38I(u, B, p))) }
          O._7Q($), delete s.moving } else if (!s._25o && d) { u = d.tab;
          var G = s._74o;
          if (!G || G.tab === u)
            if (!u.isDisabled() && Sm(d._75o, s.lp)) {
              var M = function () {
                var d = q.indexOf(u);
                j.remove(u), O.onTabClosed(u, d) };
              O.onTabClosing(u, M) && M() } else u.isDisabled() || O._8o === u || j.sm().ss(u) }
        s._25o = s._73o = s._74o = n === xd || n === qc ? s.x = s.lp = s.tx = $ : s.y = s.lp = s.ty = $ } }), dn.PropertyView = function (M) {
      var L = this;
      L._view = ef(1, L), L._canvas = Jr(L._view), Af(L._view, L._79O = tp()), L._rows = new Ol, L._28o = new Ol, L._26o = {}, L._26Q = {};
      var E = L._propertyModel = new he,
        I = L.ivm;
      E.mm(I, L), E.md(I, L), E.mh(I, L), L.dm(M ? M : new he), new Cn(L) }, Of("PropertyView", y, { ms_ac: [Qm, _c, fc, bg, kf, "categorizable", fb, Sp, rd, ls, cm, kn, Im, Jq, "selectRowIndex", sp, "background", ug, qn, nn, Ij, Kk], ms_v: 1, ms_dm: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, ms_lp: 1, ms_vs: 1, _45o: 1, _47o: 1, ms_tip: 1, _29I: jg, _59I: 0, _9I: 0, _selectRowIndex: -1, _editable: !0, _batchEditable: !0, _categorizable: !0, _indent: Nd, _background: r.propertyViewBackground, _expandIcon: r.propertyViewExpandIcon, _collapseIcon: r.propertyViewCollapseIcon, _scrollBarColor: dm, _scrollBarSize: Fk, _autoHideScrollBar: ke, _selectBackground: r.propertyViewSelectBackground, _rowHeight: Lk, _rowLineVisible: r.propertyViewRowLineVisible, _rowLineColor: r.propertyViewRowLineColor, _10I: .5, _columnLineVisible: r.propertyViewColumnLineVisible, _columnLineColor: r.propertyViewColumnLineColor, _labelColor: r.propertyViewLabelColor, _labelSelectColor: r.propertyViewLabelSelectColor, _labelFont: r.propertyViewLabelFont, getRows: function () {
        return this._rows }, getColumnPosition: function () {
        return this._10I }, setColumnPosition: function (b) { 0 > b && (b = 0), b > 1 && (b = 1);
        var w = this,
          X = w._10I;
        w._10I = b, w.fp("columnPosition", X, b) }, getPropertyName: function (D) {
        return D.toLabel() }, getLabelFont: function () {
        return this._labelFont }, getLabelColor: function (v, J, Z) {
        return Z === this._selectRowIndex ? this._labelSelectColor : this._labelColor }, getPropertyFont: function () {
        return this._labelFont }, getPropertyColor: function (B, p) {
        return p === this._selectRowIndex ? this._labelSelectColor : B.getColor() || this._labelColor }, getCategoryFont: function () {
        return this._labelFont }, getCategoryColor: function () {
        return this._labelColor }, adjustTranslateX: function () {
        return 0 }, adjustTranslateY: function (E) {
        var P = this.getHeight() - this._59I;
        return P > E && (E = P), E > 0 ? 0 : b(E) }, isExpanded: function (D) {
        if (!D) return !0;
        var W = this._26o[D];
        return W ? W.isExpanded : !(this._26Q[D] === !1) }, toggle: function (Q) {
        var g = this;
        g.isExpanded(Q) ? g.collapse(Q) : g.expand(Q) }, expandAll: function () { this.validate();
        for (var b in this._26o) this.expand(b) }, expand: function (w) {
        if (w && w !== ms) {
          var F = this,
            R = F._26o[w];
          R && !R.isExpanded && (R.isExpanded = !0, F.onExpanded(w), F.ivm()) } }, onExpanded: function () {}, collapseAll: function () { this.validate();
        for (var H in this._26o) this.collapse(H) }, collapse: function (K) {
        if (K && K !== ms) {
          var h = this,
            H = h._26o[K];
          H && H.isExpanded && (H.isExpanded = !1, h.onCollapsed(K), h.ivm()) } }, onCollapsed: function () {}, getCategoryName: function (u) {
        if (!this.isCategorizable()) return ms;
        var o = u.getCategoryName();
        return o ? o : ms }, getPropertyModel: function () {
        return this._propertyModel }, setDataModel: function (b) {
        var J = this,
          W = J._dataModel;
        W !== b && (W && (W.umd(J.handlePropertyChange, J), J._selectionModel || W.sm().ums(J.ivm, J)), J._dataModel = b, b.md(J.handlePropertyChange, J), J._selectionModel ? J._selectionModel._21I(b) : b.sm().ms(J.ivm, J), J.fp(dg, W, b)) }, isVisible: function (d) {
        return this._visibleFunc ? this._visibleFunc(d) : !0 }, onPropertyChanged: function (P) {
        var h = this,
          l = P.property;
        Pl[l] ? h.ivm() : h.iv(), l === Ro && h._43o() }, getCurrentData: function () {
        return this._27o }, updateCurrentData: function () { this._27o = this.sm().ld() }, getRawProperties: function () {
        return this._27o ? this._propertyModel._roots : vb }, handlePropertyChange: function (o) { this._27o === o.data && this.iv() }, ivm: function () { this.invalidateModel() }, invalidateModel: function () {
        var g = this;
        g._96I || (g.setSelectRowIndex(-1), g._96I = 1, g.iv()) }, redraw: function () { this.iv() }, validateModel: function () {
        var p = this,
          s = p._rows,
          r = p._28o,
          q = {},
          V = new Ol,
          Z = p._27o;
        p.updateCurrentData(), Z !== p._27o && p.endEditing(), s.clear(), r.clear(), p.getRawProperties().each(function (L) {
          if (p.isVisible(L)) { V.add(L);
            var G = p.getCategoryName(L);
            q[G] || (r.add(G, G === ms ? 0 : B), q[G] = { isExpanded: p.isExpanded(G), properties: new Ol }) } }), p._sortFunc && V.sort(p._sortFunc);
        for (var K in p._26o) p._26Q[K] = p.isExpanded(K);
        p._26o = q, r.each(function (C) { C !== ms && s.add(C);
          var r = q[C];
          r.isExpanded && V.each(function (u) { p.getCategoryName(u) === C && (r.properties.add(u), s.add({ property: u, data: p._27o })) }, p) }) }, validateImpl: function () {
        var s = this;
        s._76o(), s._96I && (s.validateModel(), delete s._96I);
        var y = s._canvas,
          T = s.getWidth(),
          W = s.getHeight(),
          B = -s.ty(),
          X = s._rowHeight,
          S = s._indent,
          j = T - S,
          l = s._rows,
          f = l.size(),
          L = s._9I = S + j * s._10I,
          M = s._59I = f * X;
        vr(y, T, W), s._29I = { x: 0, y: B, width: T, height: W }, s._31I = G(B / X), s._14I = q((B + W) / X), s._31I < 0 && (s._31I = 0), s._14I > f && (s._14I = f);
        var i, D = dc(y),
          u = s._background;
        Ue(D, 0, -B, 1), D.beginPath(), D.rect(0, B, T, W), D.clip(), D.clearRect(0, B, T, W), s._93db(D), u && No(D, 0, 0, S, M, u);
        for (var c = s._31I; c < s._14I; c++) {
          var H = l.get(c),
            B = X * c;
          if (An(H)) u && No(D, S, B, j, X, u), i = bd(s.isExpanded(H) ? s._expandIcon : s._collapseIcon), i && cg(D, i, ng, 0, B, S, X), D.save(), D.beginPath(), D.rect(S, B, j, X), D.clip(), s.drawCategoryName(D, H, c, S, B, j, X), D.restore();
          else {
            var A = H.property,
              n = H.data,
              i = bd(A.getIcon()),
              Q = s._selectRowIndex === c ? s.getSelectBackground() : $;
            if (i && cg(D, i, ng, 0, B, S, X), Q && No(D, S, B, j, X, Q), D.save(), D.beginPath(), D.rect(S, B, L - S, X), D.clip(), s.drawPropertyName(D, A, c, S, B, L - S, X), D.restore(), !s.isEditing(n, A)) {
              var d = L + 1,
                w = T - L - 1;
              D.save(), D.beginPath(), D.rect(d, B, w, X), D.clip(), s._87o(s.drawPropertyValue(D, A, s.getValue(n, A), c, d, B, w, X, n), c, d, B, w, X), D.restore() } }
          s._rowLineVisible && No(D, S, B + X - 1, j, 1, s._rowLineColor) }
        s._columnLineVisible && (No(D, L, 0, 1, M, s._columnLineColor), No(D, T - 1, 0, 1, M)), s._92db(D), s._93I(), D.restore(), s.ty(s.ty()) }, drawCategoryName: function (C, T, o, S, r, Q, b) { kj(C, T, this.getCategoryFont(T), this.getCategoryColor(T), S, r, Q, b) }, drawPropertyName: function (k, N, o, w, B, d, p) {
        return N.drawPropertyName ? (N.drawPropertyName(k, N, o, w, B, d, p, this), void 0) : (kj(k, this.getPropertyName(N), this.getPropertyFont(N, o), this.getPropertyColor(N, o), w, B, d, p), void 0) }, drawPropertyValue: function (h, a, B, T, w, r, p, Q, S) {
        return a.drawPropertyValue ? a.drawPropertyValue(h, a, B, T, w, r, p, Q, S, this) : (Dl(h, B, a, this.getLabelFont(a, B, T), this.getLabelColor(a, B, T), w, r, p, Q, S, this), void 0) }, isPropertyEditable: function (O) {
        return O.isEditable() && this.isEditable() }, setProperties: function (h) { this._propertyModel.clear(), this.addProperties(h) }, addProperties: function (D) {
        if (D) {
          var m = this._propertyModel;
          D.forEach(function (a) {
            if (!(a instanceof Rb)) {
              var $ = Go(a.className);
              a = cj($ ? $ : Rb, a) }
            m.add(a) }) } }, getRowIndexAt: function (_) {
        var N = this,
          j = G(N.lp(_).y / N._rowHeight);
        return j >= 0 && j < N._rows.size() ? j : -1 }, getPropertyAt: function (K) {
        var Q = this,
          s = Q.getRowIndexAt(K);
        return s >= 0 ? Q._rows.get(s).property : $ }, getToolTip: function (m) {
        var z = this,
          l = z.getPropertyAt(m),
          g = z._27o;
        return l && g ? l.getToolTip(g, z._9I < z.lp(m).x, z) : $ } });
    var Cn = function (z) { this.pv = z, this.addListeners() };
    Xk(Cn, y, { ms_listener: 1, getView: function () {
        return this.pv._view }, setCursor: function (B) { this.getView().style.cursor = B }, clear: function () {
        var z = this;
        z._62O = z.cp = z.ty = z.p = $, z.setCursor(L) }, handle_mousedown: function (T) { this.handle_touchstart(T) }, handle_touchstart: function (t) {
        var o = this,
          x = o.pv;
        be(t), x.setFocus(t) && (hp(t) ? (o.cp = en(t), o.ty = x.ty(), o.p = x.getColumnPosition(), o.handle_touchmove(t)) : x.setSelectRowIndex(x.getRowIndexAt(t))) }, handleWindowMouseUp: function () { this.clear() }, handleWindowTouchEnd: function () { this.clear() }, handle_mouseup: function (U) { this.handle_touchend(U) }, handle_touchend: function (l) {
        var s = this;
        if (s.cp && !s._62O) {
          var A = s.pv,
            $ = A.lp(l),
            k = $.x,
            w = $.y,
            Y = A._indent,
            a = A.getRowIndexAt(l),
            t = A._9I;
          if (a >= 0) {
            var u = A._rowHeight,
              c = u * a,
              i = A._rows.get(a),
              j = i.property;
            if (An(i)) bd(A.isExpanded(i) ? A._expandIcon : A._collapseIcon) && k >= 0 && Y >= k && w >= c && c + u >= w ? A.toggle(i) : ep(l) && A.toggle(i);
            else if (k > t && A.isPropertyEditable(j, l)) {
              var C = { x: t + 1, y: c, width: A.getWidth() - t - 1, height: u },
                n = { x: C.x + A.tx(), y: C.y + A.ty(), width: C.width, height: C.height },
                K = 0,
                T = A._29I;
              C.y < T.y ? K = C.y - T.y : C.y + u > T.y + T.height && (K = C.y + u - T.y - T.height), K && (A.ty(A.ty() - K), n.y -= K), A.beginEditing({ data: i.data, property: j, value: A.getValue(i.data, j), event: l, rect: C, editorRect: n, view: A }) } }
          A.setSelectRowIndex(a) }
        s.clear() }, handleWindowMouseMove: function (I) { this.handleWindowTouchMove(I) }, handleWindowTouchMove: function (d) {
        var t = this,
          n = t.pv,
          i = t.ty,
          I = t.cp,
          C = en(d),
          s = t._62O;
        if ("p" === s) n.setTranslateY(i + C.y - I.y);
        else if ("c" === s) {
          var X = n.getWidth() - n._indent;
          if (X > 16) {
            var y = t.p - (I.x - C.x) / X,
              L = 16 / X;
            L > y && (y = L), y > 1 - L && (y = 1 - L), n.setColumnPosition(y) } } else "s" === s && n.setTranslateY(i + (I.y - C.y) * n._59I / n._29I.height) }, handle_mousemove: function (f) { this.handle_touchmove(f) }, handle_touchmove: function (K) {
        if (!gp && hp(K)) {
          var Y = this,
            Z = Y.pv,
            y = N(Z.lp(K).x - Z._9I) <= (c ? 8 : 3);
          Y.cp ? Y._62O || (y ? (Y._62O = "c", Ud(Y)) : N(en(K).y - Y.cp.y) >= 2 && (Y._62O = Y.isV(K) ? "s" : "p", Ud(Y))) : (y ? Y.setCursor(ln) : Y.setCursor(L), Y.isV(K) && Z._43o()) } }, isV: function (n) {
        var r = this.pv,
          s = r._29I;
        return r._41o() && s.x + s.width - r.lp(n).x < _m }, handle_mousewheel: function (N) { this.handleScroll(N, N.wheelDelta / 40) }, handle_DOMMouseScroll: function (k) { 2 === k.axis && this.handleScroll(k, -k.detail) }, handleScroll: function (i, h) {
        var M = this.pv;
        be(i), M.endEditing(), M.translate(0, h * M.getRowHeight()) }, handle_keydown: function (W) {
        var t = this.pv,
          P = t._rows.size(),
          b = t._selectRowIndex + (vf(W) ? -1 : 1);
        (vf(W) || Pj(W)) && (0 > b && (b = 0), b >= P && (b = P - 1), t.setSelectRowIndex(b)) } }), dn.ListView = function (N) { this._5o(N), new rb(this) }, Of("ListView", y, { ms_ac: [Qm, _c, fc, ug, fb, qn, nn, Sp, rd, kn, Im, Jq, _d, sp], ms_v: 1, ms_bnb: 1, ms_tip: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, ms_lp: 1, ms_vs: 1, ms_hs: 1, _15Q: 1, _14Q: 1, ms_dm: 1, _45o: 1, _checkMode: !1, _indent: Nd, _rowHeight: Lk, _rowLineVisible: r.listViewRowLineVisible, _rowLineColor: r.listViewRowLineColor, _scrollBarColor: dm, _scrollBarSize: Fk, _autoMakeVisible: hh, _autoHideScrollBar: ke, _selectBackground: r.listViewSelectBackground, _labelColor: r.listViewLabelColor, _labelSelectColor: r.listViewLabelSelectColor, _labelFont: r.listViewLabelFont, isCheckMode: function () {
        return this._checkMode }, setCheckMode: function (O) {
        var v = this,
          N = v._checkMode;
        v._checkMode = O, v.fp(qo, N, O) }, drawRow: function (B, I, z, a, X, l, e) {
        var w = this,
          P = 0,
          K = w._indent,
          k = w.getIconWidth(I);
        w.drawRowBackground(B, I, z, a, X, l, e), w._checkMode && (Ee(B, w.getCheckIcon(I), P + K / 2, X + e / 2, I, w), P += K), w.drawIcon(B, I, P, X, k, e), w.drawLabel(B, I, P + k, X, e) } });
    var rb = function (A) { this.list = A, this._lastSelectDataTime = Qp(), this.addListeners() };
    Xk(rb, y, { ms_listener: 1, getView: function () {
        return this.list._view }, clear: function (c) {
        var N = this,
          u = N.list;
        c && "d" === N._62O && !N.dragCancel && u.handleDragAndDrop(c, "end"), u.draggingData && (u.draggingData = null, u.redraw()), N.dragCancel = N._62O = N._isV = N._isH = N.cp = N.tx = N.ty = $ }, handle_mousedown: function (j) { this.handle_touchstart(j) }, handle_touchstart: function (v) {
        var e = this,
          r = e.list;
        if (be(v), r.setFocus(v)) {
          var o = r.getDataAt(v);
          e.cp = en(v), e.tx = r.tx(), e.ty = r.ty(), hp(v) ? o && r.handleDragAndDrop && !e.isV(v) && !e.isH(v) && (r.draggingData = o, r.redraw(), r.handleDragAndDrop(v, "prepare")) : (o && e._33o(v, o), e.clear(v)) } }, handleWindowMouseUp: function (L) { this.clear(L) }, handleWindowTouchEnd: function (e) { this.clear(e) }, handle_mouseup: function (V) { this.handle_touchend(V) }, handle_touchend: function (j) {
        var x = this,
          V = x.list;
        if (!x._isV && !x._isH && x.cp && !x._62O) {
          var U = V.getDataAt(j);
          U ? (V.isCheckMode() ? x._34o(j, U) : x._33o(j, U), ep(j) ? V.onDataDoubleClicked(U, j) : V.onDataClicked(U, j)) : V.handleBackgroundClick(j) }
        x.clear(j) }, handleWindowMouseMove: function (l) { this.handleWindowTouchMove(l) }, handleWindowTouchMove: function (Y) {
        var H = this,
          D = H.list,
          d = H._62O,
          Z = H.tx,
          r = H.ty,
          X = H.cp,
          $ = en(Y),
          E = D._29I; "p" === d ? D.setTranslate(Z + $.x - X.x, r + $.y - X.y) : "v" === d ? D.ty(r + (X.y - $.y) * D._59I / E.height) : "h" === d ? D.tx(Z + (X.x - $.x) * D._91I / E.width) : "d" === d && (H.dragCancel || D.handleDragAndDrop(Y, "between")) }, handle_mousemove: function (_) { this.handle_touchmove(_) }, handle_touchmove: function (h) {
        if (!gp && hp(h)) {
          var T = this,
            k = T.list;
          if (T._isV = T.isV(h), T._isH = T.isH(h), T.cp) {
            if (!T._62O) {
              if (Rk(en(h), T.cp) < 2) return;
              T._isV ? T._62O = "v" : T._isH ? T._62O = "h" : k.draggingData && !this.dragCancel ? (T._62O = "d", k.handleDragAndDrop(h, "begin")) : T._62O = "p", T._62O && "d" !== T._62O && k.draggingData && (k.draggingData = null, k.redraw()), Ud(T) } } else T._isV && k._43o(), T._isH && k._42o() } }, isV: function (l) {
        var t = this.list,
          c = t._29I;
        return t._41o() && c.x + c.width - t.lp(l).x < _m }, isH: function (F) {
        var y = this.list,
          N = y._29I;
        return y._40o() && N.y + N.height - y.lp(F).y < _m }, handle_mousewheel: function (m) { this.handleScroll(m, m.wheelDelta / 40, m.wheelDelta !== m.wheelDeltaX) }, handle_DOMMouseScroll: function (M) { this.handleScroll(M, -M.detail, 1) }, handleScroll: function (R, c, $) {
        var f = this.list;
        be(R), f.endEditing && f.endEditing(), $ && f._41o() ? f.translate(0, c * f.getRowHeight()) : f._40o() && f.translate(10 * c, 0) }, handle_keydown: function (O) {
        if (!r.isInput(O.target)) {
          var K, x = this.list,
            N = x.sm(),
            Y = x._rows,
            H = Y.size();
          if (em(O)) x.selectAll();
          else if (kh(O)) x.handleDelete && x.handleDelete(O);
          else if (Lj(O)) "d" !== this._62O || this.dragCancel || (x.handleDragAndDrop(O, "cancel"), this.dragCancel = !0);
          else if (Vq(O)) x.isCheckMode() && (K = x.getFocusData(), K && x.checkData(K));
          else if (vf(O) || Pj(O)) {
            var z = x.isCheckMode();
            if (K = z ? x.getFocusData() : N.ld()) {
              var L = x.getRowIndex(K);
              L >= 0 && (vf(O) ? 0 !== L && (K = Y.get(L - 1), z ? x.setFocusData(K) : N.ss(K)) : L !== H - 1 && (K = Y.get(L + 1), z ? x.setFocusData(K) : N.ss(K))) } else H > 0 && (K = Y.get(0), z ? x.setFocusData(K) : N.ss(K)) } } }, _34o: function (U, g) {
        var Y = this.list,
          w = Y.lp(U).x;
        return w >= 0 && w <= Y._indent ? (Y.checkData(g), void 0) : (Y.setFocusData(g), void 0) }, _33o: function (v, q) {
        var R = this.list,
          n = R.sm(),
          z = n.ld();
        if (ll(v)) R.isSelected(q) ? n.rs(q) : n.as(q);
        else if (dl(v))
          if (z)
            for (var N = R.getRowIndex(z), F = R.getRowIndex(q); N !== F;) N += F > N ? 1 : -1, n.as(R._rows.get(N));
          else n.ss(q);
        else if (hp(v)) {
          var L = Qp();
          if (n.contains(q)) {
            var B = L - this._lastSelectDataTime;
            R.handleDataDoubleSelect && B > 500 && 1500 > B && R.handleDataDoubleSelect(v, q) }
          n.ss(q), this._lastSelectDataTime = L } else n.contains(q) || n.ss(q) } }), dn.TreeView = function (E) {
      var b = this;
      b._35o(), b._5o(E), new Fc(b) }, Of("TreeView", y, { ms_ac: [Qm, _c, fc, "rootVisible", qo, "rootData", Sp, rd, kn, Im, Jq, fb, ug, qn, nn, ls, cm, _d, sp, "loader", "doubleClickToToggle"], ms_v: 1, ms_bnb: 1, ms_tip: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, ms_lp: 1, ms_vs: 1, ms_hs: 1, _15Q: 1, ms_dm: 1, _48o: 1, _14Q: 1, _45o: 1, _checkMode: $, _indent: Nd, _rowHeight: Lk, _rowLineVisible: r.treeViewRowLineVisible, _rowLineColor: r.treeViewRowLineColor, _scrollBarColor: dm, _scrollBarSize: Fk, _autoHideScrollBar: ke, _expandIcon: r.treeViewExpandIcon, _collapseIcon: r.treeViewCollapseIcon, _autoMakeVisible: hh, _selectBackground: r.treeViewSelectBackground, _labelColor: r.treeViewLabelColor, _labelSelectColor: r.treeViewLabelSelectColor, _labelFont: r.treeViewLabelFont, _doubleClickToToggle: r.treeViewDoubleClickToToggle, drawRow: function (Z, _, G, C, u, J, b) {
        var x = this;
        x.drawRowBackground(Z, _, G, C, u, J, b), x._97I(Z, _, G, 0, u, J, b) }, isOnToggleIcon: function (f) {
        var G = this.getDataAt(f);
        if (G) {
          var O = this.getIndent(),
            v = this.lp(f).x;
          if (bd(this.getToggleIcon(G))) {
            var x = O * this.getLevel(G);
            if (v >= x && x + O >= v) return !0 } }
        return !1 } });
    var Fc = function (d) { Dj(Fc, this, [d]) };
    Xk(Fc, rb, { toggle: function (S, z, L, e) {
        var E = this.list,
          t = E.lp(S).x;
        if (bd(E.getToggleIcon(z))) {
          var n = L * e;
          if (t >= n && n + L >= t) return E.toggle(z), !0 }
        return E.isDoubleClickToToggle() && ep(S) ? (E.toggle(z), !0) : !1 }, _34o: function (S, P) {
        var p = this.list,
          B = p.lp(S).x,
          E = p._levelMap[P._id],
          o = p._indent,
          d = o * (E + 1);
        return B >= d && d + o >= B ? (p.checkData(P), void 0) : (this.toggle(S, P, o, E) || p.setFocusData(P), void 0) }, _33o: function (m, u) {
        var q = this,
          j = q.list;
        q.toggle(m, u, j._indent, j.getLevel(u)) || Fc.superClass._33o.call(q, m, u) }, handle_keydown: function (v) {
        if (Be(v) || ih(v)) {
          var h = this.list,
            l = h._rows,
            u = h.isCheckMode(),
            Y = h.sm(),
            i = u ? h.getFocusData() : Y.ld();
          i ? i.hasChildren() && (Be(v) ? h.collapse(i) : h.expand(i)) : l.size() > 0 && (i = l.get(0), u ? h.setFocusData(i) : Y.ss(i)) } else Fc.superClass.handle_keydown.call(this, v) } });
    var no = dn.TableView = function (t) { this._98I(), this._5o(t), new Op(this) };
    Of("TableView", y, { ms_ac: [Qm, _c, fc, "sortMode", bg, kf, ug, qn, nn, Ij, Kk, "sortColumn", Sp, rd, kn, Im, Jq, _d, sp], ms_v: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, ms_lp: 1, ms_vs: 1, ms_hs: 1, _15Q: 1, ms_dm: 1, ms_tip: 1, _50o: 1, _45o: 1, _47o: 1, _sortMode: Ak, _editable: !0, _batchEditable: !1, _rowHeight: Lk, _rowLineVisible: r.tableViewRowLineVisible, _rowLineColor: r.tableViewRowLineColor, _columnLineVisible: r.tableViewColumnLineVisible, _columnLineColor: r.tableViewColumnLineColor, _scrollBarColor: dm, _scrollBarSize: Fk, _autoHideScrollBar: ke, _autoMakeVisible: hh, _selectBackground: r.tableViewSelectBackground, _labelColor: r.tableViewLabelColor, _labelSelectColor: r.tableViewLabelSelectColor, _labelFont: r.tableViewLabelFont, getCheckColumn: function () {
        var Y = this;
        if (!Y._31o) {
          var v = Y._31o = new Bb;
          v.setEditable(!0), v.setWidth(40), v.getValue = Y.getCheckColumValue, v.drawCell = Y.drawCheckColumnCell }
        return Y._31o }, isCheckMode: function () {
        return this._39o.contains(this._31o) }, setCheckMode: function (t) {
        var j = this,
          R = j._39o,
          $ = j.getCheckColumn();
        t !== j.isCheckMode() && (t ? R.add($, 0) : R.remove($), j.fp(qo, !t, t)) }, getCheckColumValue: function (t, T, M) {
        return M.isSelected(t) }, drawCheckColumnCell: function (P, n, y, Y, X, t, R, Q, O) { Ee(P, O.getCheckIcon(n), X + R / 2, t + Q / 2, n, O) } });
    var Op = function (p) { Dj(Op, this, [p]) };
    Xk(Op, rb, { _34o: function (H, Z) {
        var u = this.list,
          r = u._31o;
        if (u.isCellEditable(Z, r, H)) {
          var m = u._3Q(r),
            K = u.lp(H).x;
          if (m && K >= m.startX && K < m.startX + r.getWidth()) return u.checkData(Z), void 0 }
        u.setFocusData(Z), u._37O(Z, H) }, _33o: function (K, l) { Op.superClass._33o.apply(this, arguments), this.list._37O(l, K) } });
    var wi = dn.TreeTableView = function (O) {
        var u = this,
          W = u._4o = new Bb;
        u._35o(), u._98I(), u._5o(O), W.setDisplayName("Name"), W.setEditable(!0), W.setWidth(180), W.drawCell = Nn, W.getValue = Hr, u._39o.add(W), new ts(u) },
      Nn = function (m, K, w, N, e, O, j, g, d) { d._97I(m, K, w, e, O, j, g) },
      Hr = function (D, p, V) {
        return V.getLabel(D) };
    Of("TreeTableView", y, { ms_ac: [Qm, _c, fc, "sortMode", bg, kf, fb, qo, "rootData", "rootVisible", Sp, rd, "sortColumn", ls, cm, kn, Im, Jq, _d, nn, ug, qn, Ij, Kk, sp, "loader"], ms_v: 1, ms_bnb: 1, ms_fire: 1, ms_sm: 1, _49o: 1, ms_txy: 1, ms_lp: 1, ms_vs: 1, ms_hs: 1, _15Q: 1, ms_dm: 1, ms_tip: 1, _50o: 1, _48o: 1, _14Q: 1, _45o: 1, _47o: 1, _sortMode: Ak, _checkMode: $, _editable: !0, _batchEditable: !1, _indent: Nd, _rowHeight: Lk, _rowLineVisible: r.treeTableViewRowLineVisible, _rowLineColor: r.treeTableViewRowLineColor, _columnLineVisible: r.treeTableViewColumnLineVisible, _columnLineColor: r.treeTableViewColumnLineColor, _expandIcon: r.treeTableViewExpandIcon, _collapseIcon: r.treeTableViewCollapseIcon, _scrollBarColor: dm, _scrollBarSize: Fk, _autoHideScrollBar: ke, _autoMakeVisible: hh, _selectBackground: r.treeTableViewSelectBackground, _labelColor: r.treeTableViewLabelColor, _labelSelectColor: r.treeTableViewLabelSelectColor, _labelFont: r.treeTableViewLabelFont, getTreeColumn: function () {
        return this._4o } });
    var ts = function (P) { Dj(ts, this, [P]) };
    Xk(ts, rb, { _34o: function (z, r) {
        var P = this.list,
          y = P._4o,
          j = P._3Q(y),
          L = P.lp(z).x;
        if (j) {
          var S = P._indent,
            Z = j.startX + S * P.getLevel(r);
          if (bd(P.getToggleIcon(r)) && L >= Z && Z + S >= L) return P.toggle(r), void 0;
          if (P.isCellEditable(r, y) && (Z += S, L >= Z && Z + S >= L)) return P.checkData(r), void 0 }
        P.setFocusData(r), P._37O(r, z) }, _33o: function (t, m) {
        var E = this.list,
          o = E.lp(t).x;
        if (bd(E.getToggleIcon(m))) {
          var U = E._3Q(E._4o);
          if (U) {
            var w = E._indent,
              j = U.startX + w * E.getLevel(m);
            if (o >= j && j + w >= o) return E.toggle(m), void 0 } }
        ts.superClass._33o.apply(this, arguments), E._37O(m, t) } });
    var Bs = dn.TableHeader = function (z) {
      var T = this,
        M = T._view = ef(1, T),
        O = T._39o = z.getColumnModel(),
        v = T.iv;
      T.tv = T._tableView = z, T._60I = new Ol, T._canvas = Jr(M), M.style.background = r.tableHeaderBackground || "", M.style.height = hr + Zq, O.mm(v, T), O.md(v, T), O.mh(v, T), z.mp(function (Q) { Rm[Q.property] && T.iv() }, T), new Sn(T), T.iv() };
    Of("TableHeader", y, {
      ms_v: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Qm, fc, fb, "moveBackground", "insertColor", Ij, Kk, "resizable", "movable"],
      _checkIcon: bq,
      _movable: !0,
      _resizable: !0,
      _labelColor: r.tableHeaderLabelColor,
      _labelFont: r.tableHeaderLabelFont,
      _columnLineColor: r.tableHeaderColumnLineColor,
      _columnLineVisible: r.tableHeaderColumnLineVisible,
      _sortDescIcon: r.tableHeaderSortDescIcon,
      _sortAscIcon: r.tableHeaderSortAscIcon,
      _moveBackground: r.tableHeaderMoveBackground,
      _insertColor: r.tableHeaderInsertColor,
      _indent: Nd,
      getCheckIcon: function () {
        return this._checkIcon
      },
      getTableView: function () {
        return this.tv },
      getLabel: function (J) {
        return J.toLabel() },
      getLabelFont: function () {
        return this._labelFont },
      getLabelColor: function (i) {
        return i.getColor() || this._labelColor },
      getLabelAlign: function (P) {
        return P._align },
      onPropertyChanged: function () { this.iv() },
      _5Q: function (T) { this._61I = T, this.iv() },
      getLogicalPoint: function (p) {
        return Ur(p, this._canvas, this.tv.tx()) },
      validateImpl: function () {
        var x = this,
          I = x._canvas,
          t = x.getWidth(),
          e = x.getHeight(),
          v = x.tv,
          U = x._60I,
          Z = x._61I,
          k = -v.tx(),
          o = 0;
        (t !== I.clientWidth || e !== I.clientHeight) && vr(I, t, e), U.clear(), x._39o._roots.each(function (j) {
          if (j.isVisible()) {
            var K = o + j.getWidth();
            k + t >= o && K >= k && U.add({ column: j, startX: o }), o = K } });
        var M = dc(I);
        if (Ue(M, -k, 0, 1), M.beginPath(), M.rect(k, 0, t, e), M.clip(), M.clearRect(k, 0, t, e), U.each(function (p) {
            var V = p.column,
              Y = p.startX,
              w = V.getWidth();
            w > 0 && (M.save(), M.beginPath(), M.rect(Y, 0, w, e), M.clip(), Z && Z.column === V || x.drawColumn(M, V, Y, 0, w, e), x._columnLineVisible && No(M, Y + w - 1, 0, 1, e, x._columnLineColor), M.restore()) }), Z) {
          var r = Z.column,
            o = Z.startX,
            H = Z.position,
            $ = r.getWidth();
          M.save(), M.beginPath(), M.rect(o, 0, $, e), M.clip(), M.fillStyle = x._moveBackground, M.fill(), x.drawColumn(M, r, o, 0, $, e), M.restore(), Hc(M, x._insertColor, H, 0, e) }
        M.restore() },
      _6Q: function (N) {
        var S = this.tv;
        return S._31o === N && S.sm().getSelectionMode() === Dq },
      drawColumn: function (K, k, $, s, g, Q) {
        var M = this,
          h = M.tv,
          W = bd(k.getIcon()),
          G = M.getLabelAlign(k);
        if (M._6Q(k)) {
          var p = bd(M._checkIcon);
          Ee(K, p, $ + g / 2, s + Q / 2, k, M) } else {
          var t = M.getLabel(k),
            m = M.getLabelFont(k),
            Y = M.getLabelColor(k),
            U = Sj(m, t).width,
            u = W ? M._indent : 0;
          G === ci ? (W && cg(K, W, ng, $, s, u, Q), kj(K, t, m, Y, $ + u, s, g, Q, ci)) : G === Fq ? (W && cg(K, W, ng, $ + g - U - u, s, u, Q), kj(K, t, m, Y, $, s, g, Q, Fq)) : (W && cg(K, W, ng, $ + (g - U - u) / 2, s, u, Q), kj(K, t, m, Y, $ + (g - U + u) / 2, s, 0, Q, ci)) }
        if (k.isSortable() && h.getSortColumn() === k && (W = bd(k.getSortOrder() === Hj ? M._sortAscIcon : M._sortDescIcon))) {
          var z = Io(W, k) / 2 + 2;
          Ee(K, W, G === Fq ? $ + z : $ + g - z, s + Q / 2, k, h) } }
    });
    var Sn = function (h) {
      var v = this;
      v.th = h, v.tv = h._tableView, v.addListeners() };
    Xk(Sn, y, { ms_listener: 1, getView: function () {
        return this.th.getView() }, setCursor: function (I) { this.getView().style.cursor = I }, handle_mousemove: function (U) {
        if (!gp) {
          var K = this;
          delete K._29o, K.setCursor(L);
          for (var f = K.th, I = f._60I, d = f.lp(U).x, $ = I.size() - 1; $ >= 0; $--) {
            var P = I.get($),
              Z = P.column,
              M = P.startX + Z.getWidth();
            if (f.isResizable() && N(M - d) <= (c ? 10 : 3)) return K._29o = P, K.setCursor(ln), void 0;
            d > P.startX && M > d && (K._29o = P), (Z.isClickable() || Z.isSortable() || f.isMovable() || K.tv.getCheckColumn && Z === K.tv.getCheckColumn()) && d > P.startX && M > d && K.setCursor(Le) } } }, handle_mousedown: function (c) { this.handle_touchstart(c) }, handle_touchstart: function (t) {
        var K = this;
        be(t), K.tv.endEditing(), K.handle_mousemove(t), K._29o && (K.x = en(t).x, K.lx = K.th.lp(t).x, K.w = K._29o.column.getWidth(), Ud(K, t)) }, handleWindowMouseMove: function (p) { this.handleWindowTouchMove(p) }, handleWindowTouchMove: function (y) {
        var s = this,
          k = s.th,
          J = s.getView().style.cursor,
          O = s._29o,
          F = en(y).x - s.x;
        if (s.resizing || s.moving || (J === ln ? s.resizing = 1 : k.isMovable() && J === Le && N(F) > 2 && (s.moving = 1)), s.resizing) O.column.setWidth(s.w + F);
        else if (s.moving) {
          var K = s.lx + F;
          k._60I.each(function (d) {
            var q = d.startX,
              z = q + d.column.getWidth();
            if (K >= q && z >= K) {
              var l = { column: O.column, startX: O.startX + F, front: z - K > K - q, insertColumn: d.column };
              l.position = l.front ? q : z, k._5Q(l) } }) } }, _16Q: function (b, V) {
        var a = this,
          G = a.tv,
          P = a.th,
          S = P._checkIcon;
        if (P._6Q(b)) {
          var Y = bd(S),
            X = a.lx,
            z = b.getWidth(),
            L = Io(Y, b);
          if (X >= V + z / 2 - L && V + z / 2 + L >= X) { P.setCheckIcon(S === Qc ? bq : Qc);
            var F = G.sm(),
              e = G._rows;
            return S === Qc ? F.rs(e) : F.ss(e), G.onCheckColumnClicked(b), !0 } }
        return !1 }, handleWindowMouseUp: function (j) { this.handleWindowTouchEnd(j) }, handleWindowTouchEnd: function (R) {
        var V = this,
          G = V.tv,
          t = V.th,
          w = V._29o;
        if (V.moving) {
          var c = t._61I;
          if (c && c.insertColumn !== c.column) {
            var m = c.column,
              v = G.getColumnModel()._roots,
              _ = v.remove(m),
              S = v.indexOf(c.insertColumn);
            S >= 0 && (c.front || S++, S <= v.size() && (v.add(m, S), G.getColumnModel()._38I(m, _, S))) }
          t._5Q($), delete V.moving } else if (!V.resizing && w) { m = w.column;
          var s = t.lp(R).x,
            u = w.startX,
            h = !0;
          if (t.onColumnClicked) {
            var i = t.onColumnClicked(m, R, u);
            i === !1 && (h = !1) }
          if (h && s >= u && s <= u + m.getWidth() && !V._16Q(m, u)) {
            if (m.isSortable()) {
              var Q = G.getSortMode(),
                d = m.getSortOrder();
              Q === Ak ? G.getSortColumn() === m ? (d === Fm && G.setSortColumn($), m.setSortOrder(d === Hj ? Fm : Hj)) : G.setSortColumn(m) : "bistate" === Q && (G.getSortColumn() === m ? m.setSortOrder(d === Hj ? Fm : Hj) : G.setSortColumn(m)) }
            G.onColumnClicked(m, R, u) } }
        V._29o = V.resizing = V.x = V.lx = V.w = $ } }), dn.TablePane = function (D) { this.init(new no(D)) }, Of("TablePane", y, { ms_v: 1, _44o: 1 }), dn.TreeTablePane = function (q) { this.init(new wi(q)) }, Of("TreeTablePane", y, { ms_v: 1, _44o: 1 }), dn.Toolbar = function (o) {
      var k = this,
        e = k._view = ef(1, k),
        s = e.style;
      s.background = r.toolbarBackground || "", s.height = hs + Zq, k._canvas = Jr(e), k._30o = new Ol, k._90I = new Ol, k.setItems(o || []), e.handleGroupSelectedChanged = function (Q) {
        if (Q.isSelected()) {
          var B = Q.getGroupId();
          null != B && k._items.forEach(function (_) {
            var q = _.element;
            q && q !== Q && q.setSelected && q.getGroupId && q.getGroupId() === B && q.setSelected(!1) }) } }, new Nj(k) }, Of("Toolbar", y, { ms_v: 1, ms_fire: 1, ms_tx: 1, ms_lp: 1, ms_tip: 1, ms_value: 1, ms_ac: [Ne, Qm, fc, _c, sp, "itemGap", "separatorColor", "currentItem", "stickToRight"], _labelColor: r.toolbarLabelColor, _labelSelectColor: r.toolbarLabelSelectColor, _labelFont: r.toolbarLabelFont, _selectBackground: r.toolbarSelectBackground, _itemGap: r.toolbarItemGap, _separatorColor: r.toolbarSeparatorColor, _stickToRight: !1, getSumWidth: function () {
        return this._64I }, getToolTip: function (c) {
        var Q = this.getItemInfoAt(c);
        return Q ? Q.item.toolTip : $ }, getLabelColor: function (I) {
        return I && I.selected && I.type !== Qc && I.type !== Di ? this._labelSelectColor : this._labelColor }, onPropertyChanged: function (F) { this.iv(), F.property === Ne && this._items.forEach(function ($) { rc($) }) }, redraw: function () { this.iv() }, addItem: function (r, n) {
        var V = this._items;
        n == $ ? V.push(r) : V.splice(n, 0, r), this.fp(Ne, $, V) }, removeItem: function (e) {
        if (e)
          for (var M = this._items, r = 0; r < M.length; r++) e === M[r] && (M.splice(r, 1), this.fp(Ne, $, M)) }, removeItemById: function (s) {
        if (s != $)
          for (var o = this._items, k = 0; k < o.length; k++) s === o[k].id && (o.splice(k, 1), this.fp(Ne, $, o)) }, getItemById: function (G) {
        if (G != $)
          for (var g = this._items, C = 0; C < g.length; C++) {
            var P = g[C];
            if (G === P.id) return P } }, getItemInfos: function () {
        return this._30o }, getItemInfoAt: function (d) {
        var h = this,
          t = 0,
          O = h._30o,
          e = h.lp(d),
          g = e.x,
          P = e.y;
        if (P >= 0 && P <= h.getHeight())
          for (; t < O.size(); t++) {
            var r = O.get(t);
            if (r.startX <= g && g <= r.endX) return r }
        return $ }, drawItem: function (y, W, C, U, K) {
        if (W.visible === !1) return 0;
        if (Nk(W.visible) && W.visible() === !1) return 0;
        var F = this,
          m = W.disabled;
        m && (y.globalAlpha = Hg);
        var R = F.drawItemImpl(y, W, C, U, K),
          V = F._itemGap;
        return m && (y.globalAlpha = 1), this._currentItem !== W || "separator" === W || W.separator === !0 || W.unfocusable || Bn(y, F._separatorColor, C - V / 2, 0, R + V, U), R }, drawItemImpl: function (z, n, w, a, E) {
        var j = this,
          c = j._view,
          Z = j._itemGap,
          e = a / 2,
          X = n.type,
          q = n.element,
          J = n.label;
        An(q) && (J = q, q = $);
        var P, d = j.getLabelFont(n),
          S = j.getLabelColor(n),
          m = n.selected,
          M = bd(n.icon),
          p = Io(M, n),
          C = 0,
          h = p + (J ? Sj(d, J).width : 0);
        if ("separator" === n || n.separator === !0) return Hc(z, j._separatorColor, w, a / 4, e), 1;
        if (q) { M && Ee(z, M, w + p / 2, e), kj(z, J, d, S, w + p, 0, 0, a);
          var l = ej(q);
          E || j._90I.add(l), l.parentNode !== c && Af(c, l), q.iv && q.iv(), q.validate && q.validate();
          var A = l.getBoundingClientRect(),
            G = A.width,
            K = l.style;
          return pb(l), K.left = j.tx() + w + h + Zq, K.top = (a - A.height) / 2 + Zq, h + G }
        return X === Di ? P = bd(m ? qh : rf) : X === Qc && (P = bd(m ? Qc : bq)), P ? (C = Io(P, n), Ee(z, P, w + C / 2, e), w += C, h += C) : m && No(z, w - Z / 2, 0, h + Z, a, j.getSelectBackground(n)), M && Ee(z, M, w + p / 2, e), kj(z, J, d, S, w + p, 0, 0, a), h }, validateImpl: function () {
        var e = this,
          m = e._canvas,
          y = e.getWidth(),
          R = e.getHeight(),
          Q = e._30o,
          p = e._items;
        vr(m, y, R);
        var q = dc(m),
          S = e._itemGap,
          g = S / 2;
        Ue(q, e.tx(), 0, 1), q.clearRect(0, 0, y, R);
        var X = e._90I;
        e._90I = new Ol, Q.clear(), p.forEach(function (J) {
          var _ = e.drawItem(q, J, g, R);
          Q.add({ item: J, startX: g, endX: g + _, width: _ }), _ && (g += _ + S) }), X.each(function (q) { e._90I.contains(q) || Sc(q) }), e._64I = M(0, g), q.restore(), e._stickToRight ? (e._65O = 0, q = dc(m), g = y - e._64I + S, Ue(q, 0, 0, 1), q.clearRect(0, 0, y, R), Q.clear(), p.forEach(function (T) {
          var J = e.drawItem(q, T, g, R, !0);
          Q.add({ item: T, startX: g, endX: g + J, width: J }), J && (g += J + S) }), q.restore()) : e.tx(e.tx()) }, handleClick: function (n) {
        var G = this,
          A = n.type,
          m = n.action,
          D = n.groupId,
          c = n.selected;
        n.disabled || (D != $ ? c || (n.selected = !0, this._items.forEach(function (N) { N.groupId === D && n !== N && (N.selected = !1) }), m && n.action(n, G)) : A === Qc || "toggle" === A ? (n.selected = !c, m && n.action(n, G)) : m && n.action(n, G)), eq(), G.iv() } });
    var Nj = function (P) { this.tb = P, this.addListeners() };
    Xk(Nj, y, { ms_listener: 1, getView: function () {
        return this.tb._view }, handle_mousewheel: function (e) { this.handleScroll(e, 10 * (e.wheelDelta / 40)) }, handle_DOMMouseScroll: function (n) { this.handleScroll(n, 10 * -n.detail) }, handleScroll: function (k, g) { be(k);
        var I = this.tb;
        I.isScrollable() && !I._stickToRight && (I.tx(I.tx() + g), Qq()) }, handle_mousemove: function (P) {
        var t = this;
        gp ? t.info2 = t.tb.getItemInfoAt(P) : t.setItem(P) }, handle_mouseout: function (V) {
        var s = this;
        V.target === s.getView() ? s.tb.setCurrentItem($) : s.handle_mousemove(V) }, handle_mousedown: function (r) { this.handle_mousemove(r), this.handle_touchstart(r) }, handle_touchstart: function (d) {
        var t = this,
          m = t.tb,
          X = d.target;
        hp(d) && (X === t.getView() || X === m._canvas) && (be(d), m.setFocus(d) && (this.setItem(d, !0), (m.isScrollable() || t.info && !t.info.item.disabled) && (t.x = en(d).x, t.tx = m.tx(), Ud(t, d)))) }, handleWindowMouseMove: function (U) { this.handleWindowTouchMove(U) }, handleWindowTouchMove: function (B) {
        var E = this,
          J = E.tb;
        if (!J._stickToRight) {
          var g = en(B).x - E.x;!E._25o && N(g) > 2 && J.isScrollable() && (E._25o = 1), E._25o && J.tx(E.tx + g) } }, handleWindowMouseUp: function (r) { this.handleWindowTouchEnd(r) }, handleWindowTouchEnd: function () {
        var k = this,
          W = k.tb,
          J = k.info,
          u = k.info2;
        if (!k._25o && J) {
          var A = J.item;
          u && u.item !== A || W.handleClick(A) }
        k._25o = k.x = k.tx = k.info2 = $, k.setItem() }, setItem: function (G, Y) {
        var c = this,
          x = c.tb,
          z = c.info = G ? x.getItemInfoAt(G) : $,
          R = z ? z.item : $;
        x.setCurrentItem(R), Y && R && Nk(R.onDown) && R.onDown(G) } }), dn.BorderPane = function () { this._view = ef(1, this), this.iv() }, Of("BorderPane", y, { ms_v: 1, ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"], ms_fire: 1, getLeftView: function () {
        return this._leftView }, setLeftView: function (D, B) { this._12o("leftView", D), B != $ && this.setLeftWidth(B) }, getRightView: function () {
        return this._rightView }, setRightView: function (y, X) { this._12o("rightView", y), X != $ && this.setRightWidth(X) }, getTopView: function () {
        return this._topView }, setTopView: function (C, q) { this._12o("topView", C), q != $ && this.setTopHeight(q) }, getBottomView: function () {
        return this._bottomView }, setBottomView: function (c, L) { this._12o("bottomView", c), L != $ && this.setBottomHeight(L) }, getCenterView: function () {
        return this._centerView }, setCenterView: function (o) { this._12o("centerView", o) }, _12o: function (k, t) {
        var Y = this,
          J = "_" + k,
          U = Y._view,
          S = Y[J];
        S !== t && (S && (S.getView ? Sc(S.getView()) : Sc(S)), Y[J] = t, t && (t.getView ? Af(U, t.getView(), 1) : Af(U, t, 1)), Y.fp(k, S, t)) }, onPropertyChanged: function () { this.iv() }, validateImpl: function () {
        var i = this,
          V = i._topView,
          G = i._bottomView,
          c = i._leftView,
          w = i._rightView,
          r = i._centerView,
          l = i.getWidth(),
          F = i.getHeight(),
          O = 0,
          s = 0,
          I = l,
          Z = F,
          P = 0,
          e = 0,
          Q = 0,
          E = 0;
        V && (P = i._topHeight == $ ? fo(V) : i._topHeight, s = P), G && (e = i._bottomHeight == $ ? fo(G) : i._bottomHeight, Z = F - e), c && (Q = i._leftWidth == $ ? Fb(c) : i._leftWidth, O = Q), w && (E = i._rightWidth == $ ? Fb(w) : i._rightWidth, I = l - E);
        var A = M(0, I - O),
          m = M(0, Z - s);
        V && Am(V, 0, 0, l, P), G && Am(G, 0, Z, l, e), c && Am(c, 0, s, Q, m), w && Am(w, I, s, E, m), r && Am(r, O, s, A, m) } })
  }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);
