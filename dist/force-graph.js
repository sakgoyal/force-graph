var Xr = Object.defineProperty;
var Wr = (e, n, r) => n in e ? Xr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var Tt = (e, n, r) => Wr(e, typeof n != "symbol" ? n + "" : n, r);
var qe = "http://www.w3.org/1999/xhtml";
const cn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ze(e) {
  var n = e += "", r = n.indexOf(":");
  return r >= 0 && (n = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), cn.hasOwnProperty(n) ? { space: cn[n], local: e } : e;
}
function Yr(e) {
  return function() {
    var n = this.ownerDocument, r = this.namespaceURI;
    return r === qe && n.documentElement.namespaceURI === qe ? n.createElement(e) : n.createElementNS(r, e);
  };
}
function Zr(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function rr(e) {
  var n = ze(e);
  return (n.local ? Zr : Yr)(n);
}
function Kr() {
}
function Je(e) {
  return e == null ? Kr : function() {
    return this.querySelector(e);
  };
}
function Qr(e) {
  typeof e != "function" && (e = Je(e));
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), f, l, c = 0; c < s; ++c)
      (f = a[c]) && (l = e.call(f, f.__data__, c, a)) && ("__data__" in f && (l.__data__ = f.__data__), u[c] = l);
  return new et(i, this._parents);
}
function Jr(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ti() {
  return [];
}
function ir(e) {
  return e == null ? ti : function() {
    return this.querySelectorAll(e);
  };
}
function ei(e) {
  return function() {
    return Jr(e.apply(this, arguments));
  };
}
function ni(e) {
  typeof e == "function" ? e = ei(e) : e = ir(e);
  for (var n = this._groups, r = n.length, i = [], o = [], a = 0; a < r; ++a)
    for (var s = n[a], u = s.length, f, l = 0; l < u; ++l)
      (f = s[l]) && (i.push(e.call(f, f.__data__, l, s)), o.push(f));
  return new et(i, o);
}
function or(e) {
  return function() {
    return this.matches(e);
  };
}
function ar(e) {
  return function(n) {
    return n.matches(e);
  };
}
var ri = Array.prototype.find;
function ii(e) {
  return function() {
    return ri.call(this.children, e);
  };
}
function oi() {
  return this.firstElementChild;
}
function ai(e) {
  return this.select(e == null ? oi : ii(typeof e == "function" ? e : ar(e)));
}
var si = Array.prototype.filter;
function ui() {
  return Array.from(this.children);
}
function li(e) {
  return function() {
    return si.call(this.children, e);
  };
}
function fi(e) {
  return this.selectAll(e == null ? ui : li(typeof e == "function" ? e : ar(e)));
}
function ci(e) {
  typeof e != "function" && (e = or(e));
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = n[o], s = a.length, u = i[o] = [], f, l = 0; l < s; ++l)
      (f = a[l]) && e.call(f, f.__data__, l, a) && u.push(f);
  return new et(i, this._parents);
}
function sr(e) {
  return new Array(e.length);
}
function hi() {
  return new et(this._enter || this._groups.map(sr), this._parents);
}
function xe(e, n) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = n;
}
xe.prototype = {
  constructor: xe,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, n) {
    return this._parent.insertBefore(e, n);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function di(e) {
  return function() {
    return e;
  };
}
function gi(e, n, r, i, o, a) {
  for (var s = 0, u, f = n.length, l = a.length; s < l; ++s)
    (u = n[s]) ? (u.__data__ = a[s], i[s] = u) : r[s] = new xe(e, a[s]);
  for (; s < f; ++s)
    (u = n[s]) && (o[s] = u);
}
function pi(e, n, r, i, o, a, s) {
  var u, f, l = /* @__PURE__ */ new Map(), c = n.length, h = a.length, d = new Array(c), g;
  for (u = 0; u < c; ++u)
    (f = n[u]) && (d[u] = g = s.call(f, f.__data__, u, n) + "", l.has(g) ? o[u] = f : l.set(g, f));
  for (u = 0; u < h; ++u)
    g = s.call(e, a[u], u, a) + "", (f = l.get(g)) ? (i[u] = f, f.__data__ = a[u], l.delete(g)) : r[u] = new xe(e, a[u]);
  for (u = 0; u < c; ++u)
    (f = n[u]) && l.get(d[u]) === f && (o[u] = f);
}
function yi(e) {
  return e.__data__;
}
function _i(e, n) {
  if (!arguments.length) return Array.from(this, yi);
  var r = n ? pi : gi, i = this._parents, o = this._groups;
  typeof e != "function" && (e = di(e));
  for (var a = o.length, s = new Array(a), u = new Array(a), f = new Array(a), l = 0; l < a; ++l) {
    var c = i[l], h = o[l], d = h.length, g = xi(e.call(c, c && c.__data__, l, i)), y = g.length, v = u[l] = new Array(y), m = s[l] = new Array(y), p = f[l] = new Array(d);
    r(c, h, v, m, p, g, n);
    for (var A = 0, M = 0, _, x; A < y; ++A)
      if (_ = v[A]) {
        for (A >= M && (M = A + 1); !(x = m[M]) && ++M < y; ) ;
        _._next = x || null;
      }
  }
  return s = new et(s, i), s._enter = u, s._exit = f, s;
}
function xi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function vi() {
  return new et(this._exit || this._groups.map(sr), this._parents);
}
function mi(e, n, r) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), n != null && (o = n(o), o && (o = o.selection())), r == null ? a.remove() : r(a), i && o ? i.merge(o).order() : o;
}
function wi(e) {
  for (var n = e.selection ? e.selection() : e, r = this._groups, i = n._groups, o = r.length, a = i.length, s = Math.min(o, a), u = new Array(o), f = 0; f < s; ++f)
    for (var l = r[f], c = i[f], h = l.length, d = u[f] = new Array(h), g, y = 0; y < h; ++y)
      (g = l[y] || c[y]) && (d[y] = g);
  for (; f < o; ++f)
    u[f] = r[f];
  return new et(u, this._parents);
}
function bi() {
  for (var e = this._groups, n = -1, r = e.length; ++n < r; )
    for (var i = e[n], o = i.length - 1, a = i[o], s; --o >= 0; )
      (s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function ki(e) {
  e || (e = Mi);
  function n(h, d) {
    return h && d ? e(h.__data__, d.__data__) : !h - !d;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
    for (var s = r[a], u = s.length, f = o[a] = new Array(u), l, c = 0; c < u; ++c)
      (l = s[c]) && (f[c] = l);
    f.sort(n);
  }
  return new et(o, this._parents).order();
}
function Mi(e, n) {
  return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Ai() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ci() {
  return Array.from(this);
}
function Si() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length; o < a; ++o) {
      var s = i[o];
      if (s) return s;
    }
  return null;
}
function zi() {
  let e = 0;
  for (const n of this) ++e;
  return e;
}
function Pi() {
  return !this.node();
}
function Ti(e) {
  for (var n = this._groups, r = 0, i = n.length; r < i; ++r)
    for (var o = n[r], a = 0, s = o.length, u; a < s; ++a)
      (u = o[a]) && e.call(u, u.__data__, a, o);
  return this;
}
function Ei(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ni(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ri(e, n) {
  return function() {
    this.setAttribute(e, n);
  };
}
function Oi(e, n) {
  return function() {
    this.setAttributeNS(e.space, e.local, n);
  };
}
function Ii(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function Di(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function $i(e, n) {
  var r = ze(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((n == null ? r.local ? Ni : Ei : typeof n == "function" ? r.local ? Di : Ii : r.local ? Oi : Ri)(r, n));
}
function ur(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Fi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ui(e, n, r) {
  return function() {
    this.style.setProperty(e, n, r);
  };
}
function Li(e, n, r) {
  return function() {
    var i = n.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function ji(e, n, r) {
  return arguments.length > 1 ? this.each((n == null ? Fi : typeof n == "function" ? Li : Ui)(e, n, r ?? "")) : Ut(this.node(), e);
}
function Ut(e, n) {
  return e.style.getPropertyValue(n) || ur(e).getComputedStyle(e, null).getPropertyValue(n);
}
function qi(e) {
  return function() {
    delete this[e];
  };
}
function Hi(e, n) {
  return function() {
    this[e] = n;
  };
}
function Vi(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function Gi(e, n) {
  return arguments.length > 1 ? this.each((n == null ? qi : typeof n == "function" ? Vi : Hi)(e, n)) : this.node()[e];
}
function lr(e) {
  return e.trim().split(/^|\s+/);
}
function tn(e) {
  return e.classList || new fr(e);
}
function fr(e) {
  this._node = e, this._names = lr(e.getAttribute("class") || "");
}
fr.prototype = {
  add: function(e) {
    var n = this._names.indexOf(e);
    n < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var n = this._names.indexOf(e);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function cr(e, n) {
  for (var r = tn(e), i = -1, o = n.length; ++i < o; ) r.add(n[i]);
}
function hr(e, n) {
  for (var r = tn(e), i = -1, o = n.length; ++i < o; ) r.remove(n[i]);
}
function Bi(e) {
  return function() {
    cr(this, e);
  };
}
function Xi(e) {
  return function() {
    hr(this, e);
  };
}
function Wi(e, n) {
  return function() {
    (n.apply(this, arguments) ? cr : hr)(this, e);
  };
}
function Yi(e, n) {
  var r = lr(e + "");
  if (arguments.length < 2) {
    for (var i = tn(this.node()), o = -1, a = r.length; ++o < a; ) if (!i.contains(r[o])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Wi : n ? Bi : Xi)(r, n));
}
function Zi() {
  this.textContent = "";
}
function Ki(e) {
  return function() {
    this.textContent = e;
  };
}
function Qi(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Ji(e) {
  return arguments.length ? this.each(e == null ? Zi : (typeof e == "function" ? Qi : Ki)(e)) : this.node().textContent;
}
function to() {
  this.innerHTML = "";
}
function eo(e) {
  return function() {
    this.innerHTML = e;
  };
}
function no(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ro(e) {
  return arguments.length ? this.each(e == null ? to : (typeof e == "function" ? no : eo)(e)) : this.node().innerHTML;
}
function io() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function oo() {
  return this.each(io);
}
function ao() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function so() {
  return this.each(ao);
}
function uo(e) {
  var n = typeof e == "function" ? e : rr(e);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function lo() {
  return null;
}
function fo(e, n) {
  var r = typeof e == "function" ? e : rr(e), i = n == null ? lo : typeof n == "function" ? n : Je(n);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function co() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ho() {
  return this.each(co);
}
function go() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function po() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function yo(e) {
  return this.select(e ? po : go);
}
function _o(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function xo(e) {
  return function(n) {
    e.call(this, n, this.__data__);
  };
}
function vo(e) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    return i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), { type: n, name: r };
  });
}
function mo(e) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var r = 0, i = -1, o = n.length, a; r < o; ++r)
        a = n[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++i] = a;
      ++i ? n.length = i : delete this.__on;
    }
  };
}
function wo(e, n, r) {
  return function() {
    var i = this.__on, o, a = xo(n);
    if (i) {
      for (var s = 0, u = i.length; s < u; ++s)
        if ((o = i[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = r), o.value = n;
          return;
        }
    }
    this.addEventListener(e.type, a, r), o = { type: e.type, name: e.name, value: n, listener: a, options: r }, i ? i.push(o) : this.__on = [o];
  };
}
function bo(e, n, r) {
  var i = vo(e + ""), o, a = i.length, s;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var f = 0, l = u.length, c; f < l; ++f)
        for (o = 0, c = u[f]; o < a; ++o)
          if ((s = i[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? wo : mo, o = 0; o < a; ++o) this.each(u(i[o], n, r));
  return this;
}
function dr(e, n, r) {
  var i = ur(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(n, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(n, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(n, !1, !1)), e.dispatchEvent(o);
}
function ko(e, n) {
  return function() {
    return dr(this, e, n);
  };
}
function Mo(e, n) {
  return function() {
    return dr(this, e, n.apply(this, arguments));
  };
}
function Ao(e, n) {
  return this.each((typeof n == "function" ? Mo : ko)(e, n));
}
function* Co() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && (yield s);
}
var gr = [null];
function et(e, n) {
  this._groups = e, this._parents = n;
}
function oe() {
  return new et([[document.documentElement]], gr);
}
function So() {
  return this;
}
et.prototype = oe.prototype = {
  constructor: et,
  select: Qr,
  selectAll: ni,
  selectChild: ai,
  selectChildren: fi,
  filter: ci,
  data: _i,
  enter: hi,
  exit: vi,
  join: mi,
  merge: wi,
  selection: So,
  order: bi,
  sort: ki,
  call: Ai,
  nodes: Ci,
  node: Si,
  size: zi,
  empty: Pi,
  each: Ti,
  attr: $i,
  style: ji,
  property: Gi,
  classed: Yi,
  text: Ji,
  html: ro,
  raise: oo,
  lower: so,
  append: uo,
  insert: fo,
  remove: ho,
  clone: yo,
  datum: _o,
  on: bo,
  dispatch: Ao,
  [Symbol.iterator]: Co
};
function at(e) {
  return typeof e == "string" ? new et([[document.querySelector(e)]], [document.documentElement]) : new et([[e]], gr);
}
function zo(e) {
  let n;
  for (; n = e.sourceEvent; ) e = n;
  return e;
}
function mt(e, n) {
  if (e = zo(e), n === void 0 && (n = e.currentTarget), n) {
    var r = n.ownerSVGElement || n;
    if (r.createSVGPoint) {
      var i = r.createSVGPoint();
      return i.x = e.clientX, i.y = e.clientY, i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (n.getBoundingClientRect) {
      var o = n.getBoundingClientRect();
      return [e.clientX - o.left - n.clientLeft, e.clientY - o.top - n.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
var Po = { value: () => {
} };
function ae() {
  for (var e = 0, n = arguments.length, r = {}, i; e < n; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ge(r);
}
function ge(e) {
  this._ = e;
}
function To(e, n) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !n.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ge.prototype = ae.prototype = {
  constructor: ge,
  on: function(e, n) {
    var r = this._, i = To(e + "", r), o, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; ) if ((o = (e = i[a]).type) && (o = Eo(r[o], e.name))) return o;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < s; )
      if (o = (e = i[a]).type) r[o] = hn(r[o], e.name, n);
      else if (n == null) for (o in r) r[o] = hn(r[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n) e[r] = n[r].slice();
    return new ge(e);
  },
  call: function(e, n) {
    if ((o = arguments.length - 2) > 0) for (var r = new Array(o), i = 0, o, a; i < o; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], i = 0, o = a.length; i < o; ++i) a[i].value.apply(n, r);
  },
  apply: function(e, n, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], o = 0, a = i.length; o < a; ++o) i[o].value.apply(n, r);
  }
};
function Eo(e, n) {
  for (var r = 0, i = e.length, o; r < i; ++r)
    if ((o = e[r]).name === n)
      return o.value;
}
function hn(e, n, r) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === n) {
      e[i] = Po, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
const No = { passive: !1 }, te = { capture: !0, passive: !1 };
function Re(e) {
  e.stopImmediatePropagation();
}
function $t(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function pr(e) {
  var n = e.document.documentElement, r = at(e).on("dragstart.drag", $t, te);
  "onselectstart" in n ? r.on("selectstart.drag", $t, te) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function yr(e, n) {
  var r = e.document.documentElement, i = at(e).on("dragstart.drag", null);
  n && (i.on("click.drag", $t, te), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in r ? i.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const ue = (e) => () => e;
function He(e, {
  sourceEvent: n,
  subject: r,
  target: i,
  identifier: o,
  active: a,
  x: s,
  y: u,
  dx: f,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: i, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
He.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Ro(e) {
  return !e.ctrlKey && !e.button;
}
function Oo() {
  return this.parentNode;
}
function Io(e, n) {
  return n ?? { x: e.x, y: e.y };
}
function Do() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $o() {
  var e = Ro, n = Oo, r = Io, i = Do, o = {}, a = ae("start", "drag", "end"), s = 0, u, f, l, c, h = 0;
  function d(_) {
    _.on("mousedown.drag", g).filter(i).on("touchstart.drag", m).on("touchmove.drag", p, No).on("touchend.drag touchcancel.drag", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, x) {
    if (!(c || !e.call(this, _, x))) {
      var w = M(this, n.call(this, _, x), _, x, "mouse");
      w && (at(_.view).on("mousemove.drag", y, te).on("mouseup.drag", v, te), pr(_.view), Re(_), l = !1, u = _.clientX, f = _.clientY, w("start", _));
    }
  }
  function y(_) {
    if ($t(_), !l) {
      var x = _.clientX - u, w = _.clientY - f;
      l = x * x + w * w > h;
    }
    o.mouse("drag", _);
  }
  function v(_) {
    at(_.view).on("mousemove.drag mouseup.drag", null), yr(_.view, l), $t(_), o.mouse("end", _);
  }
  function m(_, x) {
    if (e.call(this, _, x)) {
      var w = _.changedTouches, k = n.call(this, _, x), C = w.length, T, N;
      for (T = 0; T < C; ++T)
        (N = M(this, k, _, x, w[T].identifier, w[T])) && (Re(_), N("start", _, w[T]));
    }
  }
  function p(_) {
    var x = _.changedTouches, w = x.length, k, C;
    for (k = 0; k < w; ++k)
      (C = o[x[k].identifier]) && ($t(_), C("drag", _, x[k]));
  }
  function A(_) {
    var x = _.changedTouches, w = x.length, k, C;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), k = 0; k < w; ++k)
      (C = o[x[k].identifier]) && (Re(_), C("end", _, x[k]));
  }
  function M(_, x, w, k, C, T) {
    var N = a.copy(), O = mt(T || w, x), I, G, b;
    if ((b = r.call(_, new He("beforestart", {
      sourceEvent: w,
      target: d,
      identifier: C,
      active: s,
      x: O[0],
      y: O[1],
      dx: 0,
      dy: 0,
      dispatch: N
    }), k)) != null)
      return I = b.x - O[0] || 0, G = b.y - O[1] || 0, function P(S, R, D) {
        var $ = O, F;
        switch (S) {
          case "start":
            o[C] = P, F = s++;
            break;
          case "end":
            delete o[C], --s;
          case "drag":
            O = mt(D || R, x), F = s;
            break;
        }
        N.call(
          S,
          _,
          new He(S, {
            sourceEvent: R,
            subject: b,
            target: d,
            identifier: C,
            active: F,
            x: O[0] + I,
            y: O[1] + G,
            dx: O[0] - $[0],
            dy: O[1] - $[1],
            dispatch: N
          }),
          k
        );
      };
  }
  return d.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : ue(!!_), d) : e;
  }, d.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : ue(_), d) : n;
  }, d.subject = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : ue(_), d) : r;
  }, d.touchable = function(_) {
    return arguments.length ? (i = typeof _ == "function" ? _ : ue(!!_), d) : i;
  }, d.on = function() {
    var _ = a.on.apply(a, arguments);
    return _ === a ? d : _;
  }, d.clickDistance = function(_) {
    return arguments.length ? (h = (_ = +_) * _, d) : Math.sqrt(h);
  }, d;
}
function en(e, n, r) {
  e.prototype = n.prototype = r, r.constructor = e;
}
function _r(e, n) {
  var r = Object.create(e.prototype);
  for (var i in n) r[i] = n[i];
  return r;
}
function se() {
}
var ee = 0.7, ve = 1 / ee, Ft = "\\s*([+-]?\\d+)\\s*", ne = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fo = /^#([0-9a-f]{3,8})$/, Uo = new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`), Lo = new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`), jo = new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${ne}\\)$`), qo = new RegExp(`^rgba\\(${ht},${ht},${ht},${ne}\\)$`), Ho = new RegExp(`^hsl\\(${ne},${ht},${ht}\\)$`), Vo = new RegExp(`^hsla\\(${ne},${ht},${ht},${ne}\\)$`), dn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
en(se, re, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gn,
  // Deprecated! Use color.formatHex.
  formatHex: gn,
  formatHex8: Go,
  formatHsl: Bo,
  formatRgb: pn,
  toString: pn
});
function gn() {
  return this.rgb().formatHex();
}
function Go() {
  return this.rgb().formatHex8();
}
function Bo() {
  return xr(this).formatHsl();
}
function pn() {
  return this.rgb().formatRgb();
}
function re(e) {
  var n, r;
  return e = (e + "").trim().toLowerCase(), (n = Fo.exec(e)) ? (r = n[1].length, n = parseInt(n[1], 16), r === 6 ? yn(n) : r === 3 ? new Q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : r === 8 ? le(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : r === 4 ? le(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Uo.exec(e)) ? new Q(n[1], n[2], n[3], 1) : (n = Lo.exec(e)) ? new Q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = jo.exec(e)) ? le(n[1], n[2], n[3], n[4]) : (n = qo.exec(e)) ? le(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ho.exec(e)) ? vn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Vo.exec(e)) ? vn(n[1], n[2] / 100, n[3] / 100, n[4]) : dn.hasOwnProperty(e) ? yn(dn[e]) : e === "transparent" ? new Q(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new Q(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function le(e, n, r, i) {
  return i <= 0 && (e = n = r = NaN), new Q(e, n, r, i);
}
function Xo(e) {
  return e instanceof se || (e = re(e)), e ? (e = e.rgb(), new Q(e.r, e.g, e.b, e.opacity)) : new Q();
}
function Ve(e, n, r, i) {
  return arguments.length === 1 ? Xo(e) : new Q(e, n, r, i ?? 1);
}
function Q(e, n, r, i) {
  this.r = +e, this.g = +n, this.b = +r, this.opacity = +i;
}
en(Q, Ve, _r(se, {
  brighter(e) {
    return e = e == null ? ve : Math.pow(ve, e), new Q(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ee : Math.pow(ee, e), new Q(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Q(Nt(this.r), Nt(this.g), Nt(this.b), me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _n,
  // Deprecated! Use color.formatHex.
  formatHex: _n,
  formatHex8: Wo,
  formatRgb: xn,
  toString: xn
}));
function _n() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function Wo() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xn() {
  const e = me(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Nt(this.r)}, ${Nt(this.g)}, ${Nt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function me(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Nt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Et(e) {
  return e = Nt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function vn(e, n, r, i) {
  return i <= 0 ? e = n = r = NaN : r <= 0 || r >= 1 ? e = n = NaN : n <= 0 && (e = NaN), new st(e, n, r, i);
}
function xr(e) {
  if (e instanceof st) return new st(e.h, e.s, e.l, e.opacity);
  if (e instanceof se || (e = re(e)), !e) return new st();
  if (e instanceof st) return e;
  e = e.rgb();
  var n = e.r / 255, r = e.g / 255, i = e.b / 255, o = Math.min(n, r, i), a = Math.max(n, r, i), s = NaN, u = a - o, f = (a + o) / 2;
  return u ? (n === a ? s = (r - i) / u + (r < i) * 6 : r === a ? s = (i - n) / u + 2 : s = (n - r) / u + 4, u /= f < 0.5 ? a + o : 2 - a - o, s *= 60) : u = f > 0 && f < 1 ? 0 : s, new st(s, u, f, e.opacity);
}
function Yo(e, n, r, i) {
  return arguments.length === 1 ? xr(e) : new st(e, n, r, i ?? 1);
}
function st(e, n, r, i) {
  this.h = +e, this.s = +n, this.l = +r, this.opacity = +i;
}
en(st, Yo, _r(se, {
  brighter(e) {
    return e = e == null ? ve : Math.pow(ve, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ee : Math.pow(ee, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, n = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * n, o = 2 * r - i;
    return new Q(
      Oe(e >= 240 ? e - 240 : e + 120, o, i),
      Oe(e, o, i),
      Oe(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new st(mn(this.h), fe(this.s), fe(this.l), me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = me(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${mn(this.h)}, ${fe(this.s) * 100}%, ${fe(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function mn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fe(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Oe(e, n, r) {
  return (e < 60 ? n + (r - n) * e / 60 : e < 180 ? r : e < 240 ? n + (r - n) * (240 - e) / 60 : n) * 255;
}
const vr = (e) => () => e;
function Zo(e, n) {
  return function(r) {
    return e + r * n;
  };
}
function Ko(e, n, r) {
  return e = Math.pow(e, r), n = Math.pow(n, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * n, r);
  };
}
function Qo(e) {
  return (e = +e) == 1 ? mr : function(n, r) {
    return r - n ? Ko(n, r, e) : vr(isNaN(n) ? r : n);
  };
}
function mr(e, n) {
  var r = n - e;
  return r ? Zo(e, r) : vr(isNaN(e) ? n : e);
}
const wn = function e(n) {
  var r = Qo(n);
  function i(o, a) {
    var s = r((o = Ve(o)).r, (a = Ve(a)).r), u = r(o.g, a.g), f = r(o.b, a.b), l = mr(o.opacity, a.opacity);
    return function(c) {
      return o.r = s(c), o.g = u(c), o.b = f(c), o.opacity = l(c), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Pt(e, n) {
  return e = +e, n = +n, function(r) {
    return e * (1 - r) + n * r;
  };
}
var Ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ie = new RegExp(Ge.source, "g");
function Jo(e) {
  return function() {
    return e;
  };
}
function ta(e) {
  return function(n) {
    return e(n) + "";
  };
}
function ea(e, n) {
  var r = Ge.lastIndex = Ie.lastIndex = 0, i, o, a, s = -1, u = [], f = [];
  for (e = e + "", n = n + ""; (i = Ge.exec(e)) && (o = Ie.exec(n)); )
    (a = o.index) > r && (a = n.slice(r, a), u[s] ? u[s] += a : u[++s] = a), (i = i[0]) === (o = o[0]) ? u[s] ? u[s] += o : u[++s] = o : (u[++s] = null, f.push({ i: s, x: Pt(i, o) })), r = Ie.lastIndex;
  return r < n.length && (a = n.slice(r), u[s] ? u[s] += a : u[++s] = a), u.length < 2 ? f[0] ? ta(f[0].x) : Jo(n) : (n = f.length, function(l) {
    for (var c = 0, h; c < n; ++c) u[(h = f[c]).i] = h.x(l);
    return u.join("");
  });
}
var bn = 180 / Math.PI, Be = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wr(e, n, r, i, o, a) {
  var s, u, f;
  return (s = Math.sqrt(e * e + n * n)) && (e /= s, n /= s), (f = e * r + n * i) && (r -= e * f, i -= n * f), (u = Math.sqrt(r * r + i * i)) && (r /= u, i /= u, f /= u), e * i < n * r && (e = -e, n = -n, f = -f, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(n, e) * bn,
    skewX: Math.atan(f) * bn,
    scaleX: s,
    scaleY: u
  };
}
var ce;
function na(e) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return n.isIdentity ? Be : wr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ra(e) {
  return e == null || (ce || (ce = document.createElementNS("http://www.w3.org/2000/svg", "g")), ce.setAttribute("transform", e), !(e = ce.transform.baseVal.consolidate())) ? Be : (e = e.matrix, wr(e.a, e.b, e.c, e.d, e.e, e.f));
}
function br(e, n, r, i) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, c, h, d, g, y) {
    if (l !== h || c !== d) {
      var v = g.push("translate(", null, n, null, r);
      y.push({ i: v - 4, x: Pt(l, h) }, { i: v - 2, x: Pt(c, d) });
    } else (h || d) && g.push("translate(" + h + n + d + r);
  }
  function s(l, c, h, d) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), d.push({ i: h.push(o(h) + "rotate(", null, i) - 2, x: Pt(l, c) })) : c && h.push(o(h) + "rotate(" + c + i);
  }
  function u(l, c, h, d) {
    l !== c ? d.push({ i: h.push(o(h) + "skewX(", null, i) - 2, x: Pt(l, c) }) : c && h.push(o(h) + "skewX(" + c + i);
  }
  function f(l, c, h, d, g, y) {
    if (l !== h || c !== d) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      y.push({ i: v - 4, x: Pt(l, h) }, { i: v - 2, x: Pt(c, d) });
    } else (h !== 1 || d !== 1) && g.push(o(g) + "scale(" + h + "," + d + ")");
  }
  return function(l, c) {
    var h = [], d = [];
    return l = e(l), c = e(c), a(l.translateX, l.translateY, c.translateX, c.translateY, h, d), s(l.rotate, c.rotate, h, d), u(l.skewX, c.skewX, h, d), f(l.scaleX, l.scaleY, c.scaleX, c.scaleY, h, d), l = c = null, function(g) {
      for (var y = -1, v = d.length, m; ++y < v; ) h[(m = d[y]).i] = m.x(g);
      return h.join("");
    };
  };
}
var ia = br(na, "px, ", "px)", "deg)"), oa = br(ra, ", ", ")", ")"), aa = 1e-12;
function kn(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function sa(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ua(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const la = function e(n, r, i) {
  function o(a, s) {
    var u = a[0], f = a[1], l = a[2], c = s[0], h = s[1], d = s[2], g = c - u, y = h - f, v = g * g + y * y, m, p;
    if (v < aa)
      p = Math.log(d / l) / n, m = function(k) {
        return [
          u + k * g,
          f + k * y,
          l * Math.exp(n * k * p)
        ];
      };
    else {
      var A = Math.sqrt(v), M = (d * d - l * l + i * v) / (2 * l * r * A), _ = (d * d - l * l - i * v) / (2 * d * r * A), x = Math.log(Math.sqrt(M * M + 1) - M), w = Math.log(Math.sqrt(_ * _ + 1) - _);
      p = (w - x) / n, m = function(k) {
        var C = k * p, T = kn(x), N = l / (r * A) * (T * ua(n * C + x) - sa(x));
        return [
          u + N * g,
          f + N * y,
          l * T / kn(n * C + x)
        ];
      };
    }
    return m.duration = p * 1e3 * n / Math.SQRT2, m;
  }
  return o.rho = function(a) {
    var s = Math.max(1e-3, +a), u = s * s, f = u * u;
    return e(s, u, f);
  }, o;
}(Math.SQRT2, 2, 4);
var Lt = 0, Yt = 0, jt = 0, kr = 1e3, we, Zt, be = 0, Ot = 0, Pe = 0, ie = typeof performance == "object" && performance.now ? performance : Date, Mr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function nn() {
  return Ot || (Mr(fa), Ot = ie.now() + Pe);
}
function fa() {
  Ot = 0;
}
function ke() {
  this._call = this._time = this._next = null;
}
ke.prototype = rn.prototype = {
  constructor: ke,
  restart: function(e, n, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? nn() : +r) + (n == null ? 0 : +n), !this._next && Zt !== this && (Zt ? Zt._next = this : we = this, Zt = this), this._call = e, this._time = r, Xe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xe());
  }
};
function rn(e, n, r) {
  var i = new ke();
  return i.restart(e, n, r), i;
}
function ca() {
  nn(), ++Lt;
  for (var e = we, n; e; )
    (n = Ot - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --Lt;
}
function Mn() {
  Ot = (be = ie.now()) + Pe, Lt = Yt = 0;
  try {
    ca();
  } finally {
    Lt = 0, da(), Ot = 0;
  }
}
function ha() {
  var e = ie.now(), n = e - be;
  n > kr && (Pe -= n, be = e);
}
function da() {
  for (var e, n = we, r, i = 1 / 0; n; )
    n._call ? (i > n._time && (i = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : we = r);
  Zt = e, Xe(i);
}
function Xe(e) {
  if (!Lt) {
    Yt && (Yt = clearTimeout(Yt));
    var n = e - Ot;
    n > 24 ? (e < 1 / 0 && (Yt = setTimeout(Mn, e - ie.now() - Pe)), jt && (jt = clearInterval(jt))) : (jt || (be = ie.now(), jt = setInterval(ha, kr)), Lt = 1, Mr(Mn));
  }
}
function An(e, n, r) {
  var i = new ke();
  return n = n == null ? 0 : +n, i.restart((o) => {
    i.stop(), e(o + n);
  }, n, r), i;
}
var ga = ae("start", "end", "cancel", "interrupt"), pa = [], Ar = 0, Cn = 1, We = 2, pe = 3, Sn = 4, Ye = 5, ye = 6;
function Te(e, n, r, i, o, a) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (r in s) return;
  ya(e, r, {
    name: n,
    index: i,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ga,
    tween: pa,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ar
  });
}
function on(e, n) {
  var r = lt(e, n);
  if (r.state > Ar) throw new Error("too late; already scheduled");
  return r;
}
function gt(e, n) {
  var r = lt(e, n);
  if (r.state > pe) throw new Error("too late; already running");
  return r;
}
function lt(e, n) {
  var r = e.__transition;
  if (!r || !(r = r[n])) throw new Error("transition not found");
  return r;
}
function ya(e, n, r) {
  var i = e.__transition, o;
  i[n] = r, r.timer = rn(a, 0, r.time);
  function a(l) {
    r.state = Cn, r.timer.restart(s, r.delay, r.time), r.delay <= l && s(l - r.delay);
  }
  function s(l) {
    var c, h, d, g;
    if (r.state !== Cn) return f();
    for (c in i)
      if (g = i[c], g.name === r.name) {
        if (g.state === pe) return An(s);
        g.state === Sn ? (g.state = ye, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete i[c]) : +c < n && (g.state = ye, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete i[c]);
      }
    if (An(function() {
      r.state === pe && (r.state = Sn, r.timer.restart(u, r.delay, r.time), u(l));
    }), r.state = We, r.on.call("start", e, e.__data__, r.index, r.group), r.state === We) {
      for (r.state = pe, o = new Array(d = r.tween.length), c = 0, h = -1; c < d; ++c)
        (g = r.tween[c].value.call(e, e.__data__, r.index, r.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function u(l) {
    for (var c = l < r.duration ? r.ease.call(null, l / r.duration) : (r.timer.restart(f), r.state = Ye, 1), h = -1, d = o.length; ++h < d; )
      o[h].call(e, c);
    r.state === Ye && (r.on.call("end", e, e.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = ye, r.timer.stop(), delete i[n];
    for (var l in i) return;
    delete e.__transition;
  }
}
function _e(e, n) {
  var r = e.__transition, i, o, a = !0, s;
  if (r) {
    n = n == null ? null : n + "";
    for (s in r) {
      if ((i = r[s]).name !== n) {
        a = !1;
        continue;
      }
      o = i.state > We && i.state < Ye, i.state = ye, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[s];
    }
    a && delete e.__transition;
  }
}
function _a(e) {
  return this.each(function() {
    _e(this, e);
  });
}
function xa(e, n) {
  var r, i;
  return function() {
    var o = gt(this, e), a = o.tween;
    if (a !== r) {
      i = r = a;
      for (var s = 0, u = i.length; s < u; ++s)
        if (i[s].name === n) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function va(e, n, r) {
  var i, o;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = gt(this, e), s = a.tween;
    if (s !== i) {
      o = (i = s).slice();
      for (var u = { name: n, value: r }, f = 0, l = o.length; f < l; ++f)
        if (o[f].name === n) {
          o[f] = u;
          break;
        }
      f === l && o.push(u);
    }
    a.tween = o;
  };
}
function ma(e, n) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = lt(this.node(), r).tween, o = 0, a = i.length, s; o < a; ++o)
      if ((s = i[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((n == null ? xa : va)(r, e, n));
}
function an(e, n, r) {
  var i = e._id;
  return e.each(function() {
    var o = gt(this, i);
    (o.value || (o.value = {}))[n] = r.apply(this, arguments);
  }), function(o) {
    return lt(o, i).value[n];
  };
}
function Cr(e, n) {
  var r;
  return (typeof n == "number" ? Pt : n instanceof re ? wn : (r = re(n)) ? (n = r, wn) : ea)(e, n);
}
function wa(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ba(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ka(e, n, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === i ? a : a = n(i = s, r);
  };
}
function Ma(e, n, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === i ? a : a = n(i = s, r);
  };
}
function Aa(e, n, r) {
  var i, o, a;
  return function() {
    var s, u = r(this), f;
    return u == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), f = u + "", s === f ? null : s === i && f === o ? a : (o = f, a = n(i = s, u)));
  };
}
function Ca(e, n, r) {
  var i, o, a;
  return function() {
    var s, u = r(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), f = u + "", s === f ? null : s === i && f === o ? a : (o = f, a = n(i = s, u)));
  };
}
function Sa(e, n) {
  var r = ze(e), i = r === "transform" ? oa : Cr;
  return this.attrTween(e, typeof n == "function" ? (r.local ? Ca : Aa)(r, i, an(this, "attr." + e, n)) : n == null ? (r.local ? ba : wa)(r) : (r.local ? Ma : ka)(r, i, n));
}
function za(e, n) {
  return function(r) {
    this.setAttribute(e, n.call(this, r));
  };
}
function Pa(e, n) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, n.call(this, r));
  };
}
function Ta(e, n) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Pa(e, a)), r;
  }
  return o._value = n, o;
}
function Ea(e, n) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && za(e, a)), r;
  }
  return o._value = n, o;
}
function Na(e, n) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  var i = ze(e);
  return this.tween(r, (i.local ? Ta : Ea)(i, n));
}
function Ra(e, n) {
  return function() {
    on(this, e).delay = +n.apply(this, arguments);
  };
}
function Oa(e, n) {
  return n = +n, function() {
    on(this, e).delay = n;
  };
}
function Ia(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ra : Oa)(n, e)) : lt(this.node(), n).delay;
}
function Da(e, n) {
  return function() {
    gt(this, e).duration = +n.apply(this, arguments);
  };
}
function $a(e, n) {
  return n = +n, function() {
    gt(this, e).duration = n;
  };
}
function Fa(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Da : $a)(n, e)) : lt(this.node(), n).duration;
}
function Ua(e, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    gt(this, e).ease = n;
  };
}
function La(e) {
  var n = this._id;
  return arguments.length ? this.each(Ua(n, e)) : lt(this.node(), n).ease;
}
function ja(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    gt(this, e).ease = r;
  };
}
function qa(e) {
  if (typeof e != "function") throw new Error();
  return this.each(ja(this._id, e));
}
function Ha(e) {
  typeof e != "function" && (e = or(e));
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = n[o], s = a.length, u = i[o] = [], f, l = 0; l < s; ++l)
      (f = a[l]) && e.call(f, f.__data__, l, a) && u.push(f);
  return new At(i, this._parents, this._name, this._id);
}
function Va(e) {
  if (e._id !== this._id) throw new Error();
  for (var n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var f = n[u], l = r[u], c = f.length, h = s[u] = new Array(c), d, g = 0; g < c; ++g)
      (d = f[g] || l[g]) && (h[g] = d);
  for (; u < i; ++u)
    s[u] = n[u];
  return new At(s, this._parents, this._name, this._id);
}
function Ga(e) {
  return (e + "").trim().split(/^|\s+/).every(function(n) {
    var r = n.indexOf(".");
    return r >= 0 && (n = n.slice(0, r)), !n || n === "start";
  });
}
function Ba(e, n, r) {
  var i, o, a = Ga(n) ? on : gt;
  return function() {
    var s = a(this, e), u = s.on;
    u !== i && (o = (i = u).copy()).on(n, r), s.on = o;
  };
}
function Xa(e, n) {
  var r = this._id;
  return arguments.length < 2 ? lt(this.node(), r).on.on(e) : this.each(Ba(r, e, n));
}
function Wa(e) {
  return function() {
    var n = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    n && n.removeChild(this);
  };
}
function Ya() {
  return this.on("end.remove", Wa(this._id));
}
function Za(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = Je(e));
  for (var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, l = a[s] = new Array(f), c, h, d = 0; d < f; ++d)
      (c = u[d]) && (h = e.call(c, c.__data__, d, u)) && ("__data__" in c && (h.__data__ = c.__data__), l[d] = h, Te(l[d], n, r, d, l, lt(c, r)));
  return new At(a, this._parents, n, r);
}
function Ka(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = ir(e));
  for (var i = this._groups, o = i.length, a = [], s = [], u = 0; u < o; ++u)
    for (var f = i[u], l = f.length, c, h = 0; h < l; ++h)
      if (c = f[h]) {
        for (var d = e.call(c, c.__data__, h, f), g, y = lt(c, r), v = 0, m = d.length; v < m; ++v)
          (g = d[v]) && Te(g, n, r, v, d, y);
        a.push(d), s.push(c);
      }
  return new At(a, s, n, r);
}
var Qa = oe.prototype.constructor;
function Ja() {
  return new Qa(this._groups, this._parents);
}
function ts(e, n) {
  var r, i, o;
  return function() {
    var a = Ut(this, e), s = (this.style.removeProperty(e), Ut(this, e));
    return a === s ? null : a === r && s === i ? o : o = n(r = a, i = s);
  };
}
function Sr(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function es(e, n, r) {
  var i, o = r + "", a;
  return function() {
    var s = Ut(this, e);
    return s === o ? null : s === i ? a : a = n(i = s, r);
  };
}
function ns(e, n, r) {
  var i, o, a;
  return function() {
    var s = Ut(this, e), u = r(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), Ut(this, e))), s === f ? null : s === i && f === o ? a : (o = f, a = n(i = s, u));
  };
}
function rs(e, n) {
  var r, i, o, a = "style." + n, s = "end." + a, u;
  return function() {
    var f = gt(this, e), l = f.on, c = f.value[a] == null ? u || (u = Sr(n)) : void 0;
    (l !== r || o !== c) && (i = (r = l).copy()).on(s, o = c), f.on = i;
  };
}
function is(e, n, r) {
  var i = (e += "") == "transform" ? ia : Cr;
  return n == null ? this.styleTween(e, ts(e, i)).on("end.style." + e, Sr(e)) : typeof n == "function" ? this.styleTween(e, ns(e, i, an(this, "style." + e, n))).each(rs(this._id, e)) : this.styleTween(e, es(e, i, n), r).on("end.style." + e, null);
}
function os(e, n, r) {
  return function(i) {
    this.style.setProperty(e, n.call(this, i), r);
  };
}
function as(e, n, r) {
  var i, o;
  function a() {
    var s = n.apply(this, arguments);
    return s !== o && (i = (o = s) && os(e, s, r)), i;
  }
  return a._value = n, a;
}
function ss(e, n, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (n == null) return this.tween(i, null);
  if (typeof n != "function") throw new Error();
  return this.tween(i, as(e, n, r ?? ""));
}
function us(e) {
  return function() {
    this.textContent = e;
  };
}
function ls(e) {
  return function() {
    var n = e(this);
    this.textContent = n ?? "";
  };
}
function fs(e) {
  return this.tween("text", typeof e == "function" ? ls(an(this, "text", e)) : us(e == null ? "" : e + ""));
}
function cs(e) {
  return function(n) {
    this.textContent = e.call(this, n);
  };
}
function hs(e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && cs(o)), n;
  }
  return i._value = e, i;
}
function ds(e) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  return this.tween(n, hs(e));
}
function gs() {
  for (var e = this._name, n = this._id, r = zr(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], u = s.length, f, l = 0; l < u; ++l)
      if (f = s[l]) {
        var c = lt(f, n);
        Te(f, e, r, l, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new At(i, this._parents, e, r);
}
function ps() {
  var e, n, r = this, i = r._id, o = r.size();
  return new Promise(function(a, s) {
    var u = { value: s }, f = { value: function() {
      --o === 0 && a();
    } };
    r.each(function() {
      var l = gt(this, i), c = l.on;
      c !== e && (n = (e = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(f)), l.on = n;
    }), o === 0 && a();
  });
}
var ys = 0;
function At(e, n, r, i) {
  this._groups = e, this._parents = n, this._name = r, this._id = i;
}
function zr() {
  return ++ys;
}
var _t = oe.prototype;
At.prototype = {
  constructor: At,
  select: Za,
  selectAll: Ka,
  selectChild: _t.selectChild,
  selectChildren: _t.selectChildren,
  filter: Ha,
  merge: Va,
  selection: Ja,
  transition: gs,
  call: _t.call,
  nodes: _t.nodes,
  node: _t.node,
  size: _t.size,
  empty: _t.empty,
  each: _t.each,
  on: Xa,
  attr: Sa,
  attrTween: Na,
  style: is,
  styleTween: ss,
  text: fs,
  textTween: ds,
  remove: Ya,
  tween: ma,
  delay: Ia,
  duration: Fa,
  ease: La,
  easeVarying: qa,
  end: ps,
  [Symbol.iterator]: _t[Symbol.iterator]
};
function _s(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: _s
};
function vs(e, n) {
  for (var r; !(r = e.__transition) || !(r = r[n]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${n} not found`);
  return r;
}
function ms(e) {
  var n, r;
  e instanceof At ? (n = e._id, e = e._name) : (n = zr(), (r = xs).time = nn(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], u = s.length, f, l = 0; l < u; ++l)
      (f = s[l]) && Te(f, e, n, l, s, r || vs(f, n));
  return new At(i, this._parents, e, n);
}
oe.prototype.interrupt = _a;
oe.prototype.transition = ms;
const he = (e) => () => e;
function ws(e, {
  sourceEvent: n,
  target: r,
  transform: i,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function bt(e, n, r) {
  this.k = e, this.x = n, this.y = r;
}
bt.prototype = {
  constructor: bt,
  scale: function(e) {
    return e === 1 ? this : new bt(this.k * e, this.x, this.y);
  },
  translate: function(e, n) {
    return e === 0 & n === 0 ? this : new bt(this.k, this.x + this.k * e, this.y + this.k * n);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var sn = new bt(1, 0, 0);
ct.prototype = bt.prototype;
function ct(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return sn;
  return e.__zoom;
}
function De(e) {
  e.stopImmediatePropagation();
}
function qt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function bs(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function ks() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function zn() {
  return this.__zoom || sn;
}
function Ms(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function As() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cs(e, n, r) {
  var i = e.invertX(n[0][0]) - r[0][0], o = e.invertX(n[1][0]) - r[1][0], a = e.invertY(n[0][1]) - r[0][1], s = e.invertY(n[1][1]) - r[1][1];
  return e.translate(
    o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o),
    s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s)
  );
}
function Ss() {
  var e = bs, n = ks, r = Cs, i = Ms, o = As, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = la, l = ae("start", "zoom", "end"), c, h, d, g = 500, y = 150, v = 0, m = 10;
  function p(b) {
    b.property("__zoom", zn).on("wheel.zoom", C, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", N).filter(o).on("touchstart.zoom", O).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", G).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(b, P, S, R) {
    var D = b.selection ? b.selection() : b;
    D.property("__zoom", zn), b !== D ? x(b, P, S, R) : D.interrupt().each(function() {
      w(this, arguments).event(R).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, p.scaleBy = function(b, P, S, R) {
    p.scaleTo(b, function() {
      var D = this.__zoom.k, $ = typeof P == "function" ? P.apply(this, arguments) : P;
      return D * $;
    }, S, R);
  }, p.scaleTo = function(b, P, S, R) {
    p.transform(b, function() {
      var D = n.apply(this, arguments), $ = this.__zoom, F = S == null ? _(D) : typeof S == "function" ? S.apply(this, arguments) : S, j = $.invert(F), B = typeof P == "function" ? P.apply(this, arguments) : P;
      return r(M(A($, B), F, j), D, s);
    }, S, R);
  }, p.translateBy = function(b, P, S, R) {
    p.transform(b, function() {
      return r(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), n.apply(this, arguments), s);
    }, null, R);
  }, p.translateTo = function(b, P, S, R, D) {
    p.transform(b, function() {
      var $ = n.apply(this, arguments), F = this.__zoom, j = R == null ? _($) : typeof R == "function" ? R.apply(this, arguments) : R;
      return r(sn.translate(j[0], j[1]).scale(F.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), $, s);
    }, R, D);
  };
  function A(b, P) {
    return P = Math.max(a[0], Math.min(a[1], P)), P === b.k ? b : new bt(P, b.x, b.y);
  }
  function M(b, P, S) {
    var R = P[0] - S[0] * b.k, D = P[1] - S[1] * b.k;
    return R === b.x && D === b.y ? b : new bt(b.k, R, D);
  }
  function _(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function x(b, P, S, R) {
    b.on("start.zoom", function() {
      w(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      w(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var D = this, $ = arguments, F = w(D, $).event(R), j = n.apply(D, $), B = S == null ? _(j) : typeof S == "function" ? S.apply(D, $) : S, ft = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), X = D.__zoom, rt = typeof P == "function" ? P.apply(D, $) : P, pt = f(X.invert(B).concat(ft / X.k), rt.invert(B).concat(ft / rt.k));
      return function(it) {
        if (it === 1) it = rt;
        else {
          var yt = pt(it), Ne = ft / yt[2];
          it = new bt(Ne, B[0] - yt[0] * Ne, B[1] - yt[1] * Ne);
        }
        F.zoom(null, it);
      };
    });
  }
  function w(b, P, S) {
    return !S && b.__zooming || new k(b, P);
  }
  function k(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = n.apply(b, P), this.taps = 0;
  }
  k.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, P) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var P = at(this.that).datum();
      l.call(
        b,
        this.that,
        new ws(b, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: b,
          transform: this.that.__zoom,
          dispatch: l
        }),
        P
      );
    }
  };
  function C(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var S = w(this, P).event(b), R = this.__zoom, D = Math.max(a[0], Math.min(a[1], R.k * Math.pow(2, i.apply(this, arguments)))), $ = mt(b);
    if (S.wheel)
      (S.mouse[0][0] !== $[0] || S.mouse[0][1] !== $[1]) && (S.mouse[1] = R.invert(S.mouse[0] = $)), clearTimeout(S.wheel);
    else {
      if (R.k === D) return;
      S.mouse = [$, R.invert($)], _e(this), S.start();
    }
    qt(b), S.wheel = setTimeout(F, y), S.zoom("mouse", r(M(A(R, D), S.mouse[0], S.mouse[1]), S.extent, s));
    function F() {
      S.wheel = null, S.end();
    }
  }
  function T(b, ...P) {
    if (d || !e.apply(this, arguments)) return;
    var S = b.currentTarget, R = w(this, P, !0).event(b), D = at(b.view).on("mousemove.zoom", B, !0).on("mouseup.zoom", ft, !0), $ = mt(b, S), F = b.clientX, j = b.clientY;
    pr(b.view), De(b), R.mouse = [$, this.__zoom.invert($)], _e(this), R.start();
    function B(X) {
      if (qt(X), !R.moved) {
        var rt = X.clientX - F, pt = X.clientY - j;
        R.moved = rt * rt + pt * pt > v;
      }
      R.event(X).zoom("mouse", r(M(R.that.__zoom, R.mouse[0] = mt(X, S), R.mouse[1]), R.extent, s));
    }
    function ft(X) {
      D.on("mousemove.zoom mouseup.zoom", null), yr(X.view, R.moved), qt(X), R.event(X).end();
    }
  }
  function N(b, ...P) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, R = mt(b.changedTouches ? b.changedTouches[0] : b, this), D = S.invert(R), $ = S.k * (b.shiftKey ? 0.5 : 2), F = r(M(A(S, $), R, D), n.apply(this, P), s);
      qt(b), u > 0 ? at(this).transition().duration(u).call(x, F, R, b) : at(this).call(p.transform, F, R, b);
    }
  }
  function O(b, ...P) {
    if (e.apply(this, arguments)) {
      var S = b.touches, R = S.length, D = w(this, P, b.changedTouches.length === R).event(b), $, F, j, B;
      for (De(b), F = 0; F < R; ++F)
        j = S[F], B = mt(j, this), B = [B, this.__zoom.invert(B), j.identifier], D.touch0 ? !D.touch1 && D.touch0[2] !== B[2] && (D.touch1 = B, D.taps = 0) : (D.touch0 = B, $ = !0, D.taps = 1 + !!c);
      c && (c = clearTimeout(c)), $ && (D.taps < 2 && (h = B[0], c = setTimeout(function() {
        c = null;
      }, g)), _e(this), D.start());
    }
  }
  function I(b, ...P) {
    if (this.__zooming) {
      var S = w(this, P).event(b), R = b.changedTouches, D = R.length, $, F, j, B;
      for (qt(b), $ = 0; $ < D; ++$)
        F = R[$], j = mt(F, this), S.touch0 && S.touch0[2] === F.identifier ? S.touch0[0] = j : S.touch1 && S.touch1[2] === F.identifier && (S.touch1[0] = j);
      if (F = S.that.__zoom, S.touch1) {
        var ft = S.touch0[0], X = S.touch0[1], rt = S.touch1[0], pt = S.touch1[1], it = (it = rt[0] - ft[0]) * it + (it = rt[1] - ft[1]) * it, yt = (yt = pt[0] - X[0]) * yt + (yt = pt[1] - X[1]) * yt;
        F = A(F, Math.sqrt(it / yt)), j = [(ft[0] + rt[0]) / 2, (ft[1] + rt[1]) / 2], B = [(X[0] + pt[0]) / 2, (X[1] + pt[1]) / 2];
      } else if (S.touch0) j = S.touch0[0], B = S.touch0[1];
      else return;
      S.zoom("touch", r(M(F, j, B), S.extent, s));
    }
  }
  function G(b, ...P) {
    if (this.__zooming) {
      var S = w(this, P).event(b), R = b.changedTouches, D = R.length, $, F;
      for (De(b), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), $ = 0; $ < D; ++$)
        F = R[$], S.touch0 && S.touch0[2] === F.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === F.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (F = mt(F, this), Math.hypot(h[0] - F[0], h[1] - F[1]) < m)) {
        var j = at(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(b) {
    return arguments.length ? (i = typeof b == "function" ? b : he(+b), p) : i;
  }, p.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : he(!!b), p) : e;
  }, p.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : he(!!b), p) : o;
  }, p.extent = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : he([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), p) : n;
  }, p.scaleExtent = function(b) {
    return arguments.length ? (a[0] = +b[0], a[1] = +b[1], p) : [a[0], a[1]];
  }, p.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], p) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, p.constrain = function(b) {
    return arguments.length ? (r = b, p) : r;
  }, p.duration = function(b) {
    return arguments.length ? (u = +b, p) : u;
  }, p.interpolate = function(b) {
    return arguments.length ? (f = b, p) : f;
  }, p.on = function() {
    var b = l.on.apply(l, arguments);
    return b === l ? p : b;
  }, p.clickDistance = function(b) {
    return arguments.length ? (v = (b = +b) * b, p) : Math.sqrt(v);
  }, p.tapDistance = function(b) {
    return arguments.length ? (m = +b, p) : m;
  }, p;
}
class Pn extends Map {
  constructor(n, r = Ts) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), n != null) for (const [i, o] of n) this.set(i, o);
  }
  get(n) {
    return super.get(Tn(this, n));
  }
  has(n) {
    return super.has(Tn(this, n));
  }
  set(n, r) {
    return super.set(zs(this, n), r);
  }
  delete(n) {
    return super.delete(Ps(this, n));
  }
}
function Tn({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) ? e.get(i) : r;
}
function zs({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) ? e.get(i) : (e.set(i, r), r);
}
function Ps({ _intern: e, _key: n }, r) {
  const i = n(r);
  return e.has(i) && (r = e.get(i), e.delete(i)), r;
}
function Ts(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function En(e, n) {
  let r;
  if (n === void 0)
    for (const i of e)
      i != null && (r < i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let o of e)
      (o = n(o, ++i, e)) != null && (r < o || r === void 0 && o >= o) && (r = o);
  }
  return r;
}
function Nn(e, n) {
  let r;
  if (n === void 0)
    for (const i of e)
      i != null && (r > i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let o of e)
      (o = n(o, ++i, e)) != null && (r > o || r === void 0 && o >= o) && (r = o);
  }
  return r;
}
var Es = typeof global == "object" && global && global.Object === Object && global, Ns = typeof self == "object" && self && self.Object === Object && self, Pr = Es || Ns || Function("return this")(), Me = Pr.Symbol, Tr = Object.prototype, Rs = Tr.hasOwnProperty, Os = Tr.toString, Ht = Me ? Me.toStringTag : void 0;
function Is(e) {
  var n = Rs.call(e, Ht), r = e[Ht];
  try {
    e[Ht] = void 0;
    var i = !0;
  } catch {
  }
  var o = Os.call(e);
  return i && (n ? e[Ht] = r : delete e[Ht]), o;
}
var Ds = Object.prototype, $s = Ds.toString;
function Fs(e) {
  return $s.call(e);
}
var Us = "[object Null]", Ls = "[object Undefined]", Rn = Me ? Me.toStringTag : void 0;
function js(e) {
  return e == null ? e === void 0 ? Ls : Us : Rn && Rn in Object(e) ? Is(e) : Fs(e);
}
function qs(e) {
  return e != null && typeof e == "object";
}
var Hs = "[object Symbol]";
function Vs(e) {
  return typeof e == "symbol" || qs(e) && js(e) == Hs;
}
var Gs = /\s/;
function Bs(e) {
  for (var n = e.length; n-- && Gs.test(e.charAt(n)); )
    ;
  return n;
}
var Xs = /^\s+/;
function Ws(e) {
  return e && e.slice(0, Bs(e) + 1).replace(Xs, "");
}
function Ae(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var On = NaN, Ys = /^[-+]0x[0-9a-f]+$/i, Zs = /^0b[01]+$/i, Ks = /^0o[0-7]+$/i, Qs = parseInt;
function In(e) {
  if (typeof e == "number")
    return e;
  if (Vs(e))
    return On;
  if (Ae(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ae(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ws(e);
  var r = Zs.test(e);
  return r || Ks.test(e) ? Qs(e.slice(2), r ? 2 : 8) : Ys.test(e) ? On : +e;
}
var $e = function() {
  return Pr.Date.now();
}, Js = "Expected a function", tu = Math.max, eu = Math.min;
function Er(e, n, r) {
  var i, o, a, s, u, f, l = 0, c = !1, h = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Js);
  n = In(n) || 0, Ae(r) && (c = !!r.leading, h = "maxWait" in r, a = h ? tu(In(r.maxWait) || 0, n) : a, d = "trailing" in r ? !!r.trailing : d);
  function g(w) {
    var k = i, C = o;
    return i = o = void 0, l = w, s = e.apply(C, k), s;
  }
  function y(w) {
    return l = w, u = setTimeout(p, n), c ? g(w) : s;
  }
  function v(w) {
    var k = w - f, C = w - l, T = n - k;
    return h ? eu(T, a - C) : T;
  }
  function m(w) {
    var k = w - f, C = w - l;
    return f === void 0 || k >= n || k < 0 || h && C >= a;
  }
  function p() {
    var w = $e();
    if (m(w))
      return A(w);
    u = setTimeout(p, v(w));
  }
  function A(w) {
    return u = void 0, d && i ? g(w) : (i = o = void 0, s);
  }
  function M() {
    u !== void 0 && clearTimeout(u), l = 0, i = f = o = u = void 0;
  }
  function _() {
    return u === void 0 ? s : A($e());
  }
  function x() {
    var w = $e(), k = m(w);
    if (i = arguments, o = this, f = w, k) {
      if (u === void 0)
        return y(f);
      if (h)
        return clearTimeout(u), u = setTimeout(p, n), g(f);
    }
    return u === void 0 && (u = setTimeout(p, n)), s;
  }
  return x.cancel = M, x.flush = _, x;
}
var nu = "Expected a function";
function ru(e, n, r) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(nu);
  return Ae(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), Er(e, n, {
    leading: i,
    maxWait: n,
    trailing: o
  });
}
var Rt = Object.freeze({
  Linear: Object.freeze({
    None: function(e) {
      return e;
    },
    In: function(e) {
      return e;
    },
    Out: function(e) {
      return e;
    },
    InOut: function(e) {
      return e;
    }
  }),
  Quadratic: Object.freeze({
    In: function(e) {
      return e * e;
    },
    Out: function(e) {
      return e * (2 - e);
    },
    InOut: function(e) {
      return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(e) {
      return e * e * e;
    },
    Out: function(e) {
      return --e * e * e + 1;
    },
    InOut: function(e) {
      return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(e) {
      return e * e * e * e;
    },
    Out: function(e) {
      return 1 - --e * e * e * e;
    },
    InOut: function(e) {
      return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(e) {
      return e * e * e * e * e;
    },
    Out: function(e) {
      return --e * e * e * e * e + 1;
    },
    InOut: function(e) {
      return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(e) {
      return 1 - Math.sin((1 - e) * Math.PI / 2);
    },
    Out: function(e) {
      return Math.sin(e * Math.PI / 2);
    },
    InOut: function(e) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - e)));
    }
  }),
  Exponential: Object.freeze({
    In: function(e) {
      return e === 0 ? 0 : Math.pow(1024, e - 1);
    },
    Out: function(e) {
      return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
    },
    InOut: function(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(e) {
      return 1 - Math.sqrt(1 - e * e);
    },
    Out: function(e) {
      return Math.sqrt(1 - --e * e);
    },
    InOut: function(e) {
      return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(e) {
      return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI);
    },
    Out: function(e) {
      return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e *= 2, e < 1 ? -0.5 * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) + 1);
    }
  }),
  Back: Object.freeze({
    In: function(e) {
      var n = 1.70158;
      return e === 1 ? 1 : e * e * ((n + 1) * e - n);
    },
    Out: function(e) {
      var n = 1.70158;
      return e === 0 ? 0 : --e * e * ((n + 1) * e + n) + 1;
    },
    InOut: function(e) {
      var n = 2.5949095;
      return (e *= 2) < 1 ? 0.5 * (e * e * ((n + 1) * e - n)) : 0.5 * ((e -= 2) * e * ((n + 1) * e + n) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(e) {
      return 1 - Rt.Bounce.Out(1 - e);
    },
    Out: function(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    InOut: function(e) {
      return e < 0.5 ? Rt.Bounce.In(e * 2) * 0.5 : Rt.Bounce.Out(e * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(e) {
    return e === void 0 && (e = 4), e = e < Number.EPSILON ? Number.EPSILON : e, e = e > 1e4 ? 1e4 : e, {
      In: function(n) {
        return Math.pow(n, e);
      },
      Out: function(n) {
        return 1 - Math.pow(1 - n, e);
      },
      InOut: function(n) {
        return n < 0.5 ? Math.pow(n * 2, e) / 2 : (1 - Math.pow(2 - n * 2, e)) / 2 + 0.5;
      }
    };
  }
}), Kt = function() {
  return performance.now();
}, iu = (
  /** @class */
  function() {
    function e() {
      this._tweens = {}, this._tweensAddedDuringUpdate = {};
    }
    return e.prototype.getAll = function() {
      var n = this;
      return Object.keys(this._tweens).map(function(r) {
        return n._tweens[r];
      });
    }, e.prototype.removeAll = function() {
      this._tweens = {};
    }, e.prototype.add = function(n) {
      this._tweens[n.getId()] = n, this._tweensAddedDuringUpdate[n.getId()] = n;
    }, e.prototype.remove = function(n) {
      delete this._tweens[n.getId()], delete this._tweensAddedDuringUpdate[n.getId()];
    }, e.prototype.update = function(n, r) {
      n === void 0 && (n = Kt()), r === void 0 && (r = !1);
      var i = Object.keys(this._tweens);
      if (i.length === 0)
        return !1;
      for (; i.length > 0; ) {
        this._tweensAddedDuringUpdate = {};
        for (var o = 0; o < i.length; o++) {
          var a = this._tweens[i[o]], s = !r;
          a && a.update(n, s) === !1 && !r && delete this._tweens[i[o]];
        }
        i = Object.keys(this._tweensAddedDuringUpdate);
      }
      return !0;
    }, e;
  }()
), Dt = {
  Linear: function(e, n) {
    var r = e.length - 1, i = r * n, o = Math.floor(i), a = Dt.Utils.Linear;
    return n < 0 ? a(e[0], e[1], i) : n > 1 ? a(e[r], e[r - 1], r - i) : a(e[o], e[o + 1 > r ? r : o + 1], i - o);
  },
  Bezier: function(e, n) {
    for (var r = 0, i = e.length - 1, o = Math.pow, a = Dt.Utils.Bernstein, s = 0; s <= i; s++)
      r += o(1 - n, i - s) * o(n, s) * e[s] * a(i, s);
    return r;
  },
  CatmullRom: function(e, n) {
    var r = e.length - 1, i = r * n, o = Math.floor(i), a = Dt.Utils.CatmullRom;
    return e[0] === e[r] ? (n < 0 && (o = Math.floor(i = r * (1 + n))), a(e[(o - 1 + r) % r], e[o], e[(o + 1) % r], e[(o + 2) % r], i - o)) : n < 0 ? e[0] - (a(e[0], e[0], e[1], e[1], -i) - e[0]) : n > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], i - r) - e[r]) : a(e[o ? o - 1 : 0], e[o], e[r < o + 1 ? r : o + 1], e[r < o + 2 ? r : o + 2], i - o);
  },
  Utils: {
    Linear: function(e, n, r) {
      return (n - e) * r + e;
    },
    Bernstein: function(e, n) {
      var r = Dt.Utils.Factorial;
      return r(e) / r(n) / r(e - n);
    },
    Factorial: /* @__PURE__ */ function() {
      var e = [1];
      return function(n) {
        var r = 1;
        if (e[n])
          return e[n];
        for (var i = n; i > 1; i--)
          r *= i;
        return e[n] = r, r;
      };
    }(),
    CatmullRom: function(e, n, r, i, o) {
      var a = (r - e) * 0.5, s = (i - n) * 0.5, u = o * o, f = o * u;
      return (2 * n - 2 * r + a + s) * f + (-3 * n + 3 * r - 2 * a - s) * u + a * o + n;
    }
  }
}, ou = (
  /** @class */
  function() {
    function e() {
    }
    return e.nextId = function() {
      return e._nextId++;
    }, e._nextId = 0, e;
  }()
), Ze = new iu(), Dn = (
  /** @class */
  function() {
    function e(n, r) {
      r === void 0 && (r = Ze), this._object = n, this._group = r, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = Rt.Linear.None, this._interpolationFunction = Dt.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = ou.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1;
    }
    return e.prototype.getId = function() {
      return this._id;
    }, e.prototype.isPlaying = function() {
      return this._isPlaying;
    }, e.prototype.isPaused = function() {
      return this._isPaused;
    }, e.prototype.getDuration = function() {
      return this._duration;
    }, e.prototype.to = function(n, r) {
      if (r === void 0 && (r = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = n, this._propertiesAreSetUp = !1, this._duration = r < 0 ? 0 : r, this;
    }, e.prototype.duration = function(n) {
      return n === void 0 && (n = 1e3), this._duration = n < 0 ? 0 : n, this;
    }, e.prototype.dynamic = function(n) {
      return n === void 0 && (n = !1), this._isDynamic = n, this;
    }, e.prototype.start = function(n, r) {
      if (n === void 0 && (n = Kt()), r === void 0 && (r = !1), this._isPlaying)
        return this;
      if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var i in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = n, this._startTime += this._delayTime, !this._propertiesAreSetUp || r) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var o = {};
          for (var a in this._valuesEnd)
            o[a] = this._valuesEnd[a];
          this._valuesEnd = o;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, r);
      }
      return this;
    }, e.prototype.startFromCurrentValues = function(n) {
      return this.start(n, !0);
    }, e.prototype._setupProperties = function(n, r, i, o, a) {
      for (var s in i) {
        var u = n[s], f = Array.isArray(u), l = f ? "array" : typeof u, c = !f && Array.isArray(i[s]);
        if (!(l === "undefined" || l === "function")) {
          if (c) {
            var h = i[s];
            if (h.length === 0)
              continue;
            for (var d = [u], g = 0, y = h.length; g < y; g += 1) {
              var v = this._handleRelativeValue(u, h[g]);
              if (isNaN(v)) {
                c = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              d.push(v);
            }
            c && (i[s] = d);
          }
          if ((l === "object" || f) && u && !c) {
            r[s] = f ? [] : {};
            var m = u;
            for (var p in m)
              r[s][p] = m[p];
            o[s] = f ? [] : {};
            var h = i[s];
            if (!this._isDynamic) {
              var A = {};
              for (var p in h)
                A[p] = h[p];
              i[s] = h = A;
            }
            this._setupProperties(m, r[s], h, o[s], a);
          } else
            (typeof r[s] > "u" || a) && (r[s] = u), f || (r[s] *= 1), c ? o[s] = i[s].slice().reverse() : o[s] = r[s] || 0;
        }
      }
    }, e.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, e.prototype.end = function() {
      return this._goToEnd = !0, this.update(1 / 0), this;
    }, e.prototype.pause = function(n) {
      return n === void 0 && (n = Kt()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = n, this._group && this._group.remove(this), this);
    }, e.prototype.resume = function(n) {
      return n === void 0 && (n = Kt()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += n - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this);
    }, e.prototype.stopChainedTweens = function() {
      for (var n = 0, r = this._chainedTweens.length; n < r; n++)
        this._chainedTweens[n].stop();
      return this;
    }, e.prototype.group = function(n) {
      return n === void 0 && (n = Ze), this._group = n, this;
    }, e.prototype.delay = function(n) {
      return n === void 0 && (n = 0), this._delayTime = n, this;
    }, e.prototype.repeat = function(n) {
      return n === void 0 && (n = 0), this._initialRepeat = n, this._repeat = n, this;
    }, e.prototype.repeatDelay = function(n) {
      return this._repeatDelayTime = n, this;
    }, e.prototype.yoyo = function(n) {
      return n === void 0 && (n = !1), this._yoyo = n, this;
    }, e.prototype.easing = function(n) {
      return n === void 0 && (n = Rt.Linear.None), this._easingFunction = n, this;
    }, e.prototype.interpolation = function(n) {
      return n === void 0 && (n = Dt.Linear), this._interpolationFunction = n, this;
    }, e.prototype.chain = function() {
      for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return this._chainedTweens = n, this;
    }, e.prototype.onStart = function(n) {
      return this._onStartCallback = n, this;
    }, e.prototype.onEveryStart = function(n) {
      return this._onEveryStartCallback = n, this;
    }, e.prototype.onUpdate = function(n) {
      return this._onUpdateCallback = n, this;
    }, e.prototype.onRepeat = function(n) {
      return this._onRepeatCallback = n, this;
    }, e.prototype.onComplete = function(n) {
      return this._onCompleteCallback = n, this;
    }, e.prototype.onStop = function(n) {
      return this._onStopCallback = n, this;
    }, e.prototype.update = function(n, r) {
      var i;
      if (n === void 0 && (n = Kt()), r === void 0 && (r = !0), this._isPaused)
        return !0;
      var o = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (n > o)
          return !1;
        r && this.start(n, !0);
      }
      if (this._goToEnd = !1, n < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var a = n - this._startTime, s = this._duration + ((i = this._repeatDelayTime) !== null && i !== void 0 ? i : this._delayTime), u = this._duration + this._repeat * s, f = this._calculateElapsedPortion(a, s, u), l = this._easingFunction(f), c = this._calculateCompletionStatus(a, s);
      if (c === "repeat" && this._processRepetition(a, s), this._updateProperties(this._object, this._valuesStart, this._valuesEnd, l), c === "about-to-repeat" && this._processRepetition(a, s), this._onUpdateCallback && this._onUpdateCallback(this._object, f), c === "repeat" || c === "about-to-repeat")
        this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1;
      else if (c === "completed") {
        this._isPlaying = !1, this._onCompleteCallback && this._onCompleteCallback(this._object);
        for (var h = 0, d = this._chainedTweens.length; h < d; h++)
          this._chainedTweens[h].start(this._startTime + this._duration, !1);
      }
      return c !== "completed";
    }, e.prototype._calculateElapsedPortion = function(n, r, i) {
      if (this._duration === 0 || n > i)
        return 1;
      var o = n % r, a = Math.min(o / this._duration, 1);
      return a === 0 && n !== 0 && n % this._duration === 0 ? 1 : a;
    }, e.prototype._calculateCompletionStatus = function(n, r) {
      return this._duration !== 0 && n < this._duration ? "playing" : this._repeat <= 0 ? "completed" : n === this._duration ? "about-to-repeat" : "repeat";
    }, e.prototype._processRepetition = function(n, r) {
      var i = Math.min(Math.trunc((n - this._duration) / r) + 1, this._repeat);
      isFinite(this._repeat) && (this._repeat -= i);
      for (var o in this._valuesStartRepeat) {
        var a = this._valuesEnd[o];
        !this._yoyo && typeof a == "string" && (this._valuesStartRepeat[o] = this._valuesStartRepeat[o] + parseFloat(a)), this._yoyo && this._swapEndStartRepeatValues(o), this._valuesStart[o] = this._valuesStartRepeat[o];
      }
      this._yoyo && (this._reversed = !this._reversed), this._startTime += r * i;
    }, e.prototype._updateProperties = function(n, r, i, o) {
      for (var a in i)
        if (r[a] !== void 0) {
          var s = r[a] || 0, u = i[a], f = Array.isArray(n[a]), l = Array.isArray(u), c = !f && l;
          c ? n[a] = this._interpolationFunction(u, o) : typeof u == "object" && u ? this._updateProperties(n[a], s, u, o) : (u = this._handleRelativeValue(s, u), typeof u == "number" && (n[a] = s + (u - s) * o));
        }
    }, e.prototype._handleRelativeValue = function(n, r) {
      return typeof r != "string" ? r : r.charAt(0) === "+" || r.charAt(0) === "-" ? n + parseFloat(r) : parseFloat(r);
    }, e.prototype._swapEndStartRepeatValues = function(n) {
      var r = this._valuesStartRepeat[n], i = this._valuesEnd[n];
      typeof i == "string" ? this._valuesStartRepeat[n] = this._valuesStartRepeat[n] + parseFloat(i) : this._valuesStartRepeat[n] = this._valuesEnd[n], this._valuesEnd[n] = r;
    }, e;
  }()
), dt = Ze;
dt.getAll.bind(dt);
dt.removeAll.bind(dt);
dt.add.bind(dt);
dt.remove.bind(dt);
var au = dt.update.bind(dt), su = class {
  constructor(n, { default: r = null, triggerUpdate: i = !0, onChange: o = (a, s) => {
  } }) {
    Tt(this, "name");
    Tt(this, "defaultVal");
    Tt(this, "triggerUpdate");
    Tt(this, "onChange");
    this.name = n, this.defaultVal = r, this.triggerUpdate = i, this.onChange = o;
  }
};
function Nr({ stateInit: e = () => ({}), props: n = {}, methods: r = {}, aliases: i = {}, init: o = () => {
}, update: a = () => {
} }) {
  let s = Object.keys(n).map((u) => new su(u, n[u]));
  return function(u = {}) {
    let f = { ...e instanceof Function ? e(u) : e, initialised: !1 }, l = {};
    function c(g) {
      return h(g, u), d(), c;
    }
    function h(g, y) {
      o.call(c, g, f, y), f.initialised = !0;
    }
    let d = Er(() => {
      f.initialised && (a.call(c, f, l), l = {});
    }, 1);
    s.forEach((g) => {
      c[g.name] = y(g);
      function y({ name: v, triggerUpdate: m = !1, onChange: p = (M, _) => {
      }, defaultVal: A = null }) {
        return function(M) {
          let _ = f[v];
          if (!arguments.length) return _;
          let x = M === void 0 ? A : M;
          return f[v] = x, p.call(c, x, f, _), !l.hasOwnProperty(v) && (l[v] = _), m && d(), c;
        };
      }
    });
    for (let g in r) c[g] = (...y) => r[g].call(c, f, ...y);
    for (let [g, y] of Object.entries(i)) c[g] = c[y];
    return c.resetProps = function() {
      return s.forEach((g) => {
        c[g.name](g.defaultVal);
      }), c;
    }, c.resetProps(), f._rerender = d, c;
  };
}
function q(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (n) => n[e] : (n) => e;
}
function Ce(e) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ce(e);
}
var uu = /^\s+/, lu = /\s+$/;
function E(e, n) {
  if (e = e || "", n = n || {}, e instanceof E)
    return e;
  if (!(this instanceof E))
    return new E(e, n);
  var r = fu(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = n.format || r.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
E.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var n = this.toRgb();
    return (n.r * 299 + n.g * 587 + n.b * 114) / 1e3;
  },
  getLuminance: function() {
    var n = this.toRgb(), r, i, o, a, s, u;
    return r = n.r / 255, i = n.g / 255, o = n.b / 255, r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), i <= 0.03928 ? s = i / 12.92 : s = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? u = o / 12.92 : u = Math.pow((o + 0.055) / 1.055, 2.4), 0.2126 * a + 0.7152 * s + 0.0722 * u;
  },
  setAlpha: function(n) {
    return this._a = Rr(n), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var n = Fn(this._r, this._g, this._b);
    return {
      h: n.h * 360,
      s: n.s,
      v: n.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var n = Fn(this._r, this._g, this._b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), o = Math.round(n.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + i + "%, " + o + "%)" : "hsva(" + r + ", " + i + "%, " + o + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var n = $n(this._r, this._g, this._b);
    return {
      h: n.h * 360,
      s: n.s,
      l: n.l,
      a: this._a
    };
  },
  toHslString: function() {
    var n = $n(this._r, this._g, this._b), r = Math.round(n.h * 360), i = Math.round(n.s * 100), o = Math.round(n.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + i + "%, " + o + "%)" : "hsla(" + r + ", " + i + "%, " + o + "%, " + this._roundA + ")";
  },
  toHex: function(n) {
    return Un(this._r, this._g, this._b, n);
  },
  toHexString: function(n) {
    return "#" + this.toHex(n);
  },
  toHex8: function(n) {
    return gu(this._r, this._g, this._b, this._a, n);
  },
  toHex8String: function(n) {
    return "#" + this.toHex8(n);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(V(this._r, 255) * 100) + "%",
      g: Math.round(V(this._g, 255) * 100) + "%",
      b: Math.round(V(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(V(this._r, 255) * 100) + "%, " + Math.round(V(this._g, 255) * 100) + "%, " + Math.round(V(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(V(this._r, 255) * 100) + "%, " + Math.round(V(this._g, 255) * 100) + "%, " + Math.round(V(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Cu[Un(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(n) {
    var r = "#" + Ln(this._r, this._g, this._b, this._a), i = r, o = this._gradientType ? "GradientType = 1, " : "";
    if (n) {
      var a = E(n);
      i = "#" + Ln(a._r, a._g, a._b, a._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + r + ",endColorstr=" + i + ")";
  },
  toString: function(n) {
    var r = !!n;
    n = n || this._format;
    var i = !1, o = this._a < 1 && this._a >= 0, a = !r && o && (n === "hex" || n === "hex6" || n === "hex3" || n === "hex4" || n === "hex8" || n === "name");
    return a ? n === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (n === "rgb" && (i = this.toRgbString()), n === "prgb" && (i = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (i = this.toHexString()), n === "hex3" && (i = this.toHexString(!0)), n === "hex4" && (i = this.toHex8String(!0)), n === "hex8" && (i = this.toHex8String()), n === "name" && (i = this.toName()), n === "hsl" && (i = this.toHslString()), n === "hsv" && (i = this.toHsvString()), i || this.toHexString());
  },
  clone: function() {
    return E(this.toString());
  },
  _applyModification: function(n, r) {
    var i = n.apply(null, [this].concat([].slice.call(r)));
    return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this;
  },
  lighten: function() {
    return this._applyModification(xu, arguments);
  },
  brighten: function() {
    return this._applyModification(vu, arguments);
  },
  darken: function() {
    return this._applyModification(mu, arguments);
  },
  desaturate: function() {
    return this._applyModification(pu, arguments);
  },
  saturate: function() {
    return this._applyModification(yu, arguments);
  },
  greyscale: function() {
    return this._applyModification(_u, arguments);
  },
  spin: function() {
    return this._applyModification(wu, arguments);
  },
  _applyCombination: function(n, r) {
    return n.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(Mu, arguments);
  },
  complement: function() {
    return this._applyCombination(bu, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Au, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(ku, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(jn, [3]);
  },
  tetrad: function() {
    return this._applyCombination(jn, [4]);
  }
};
E.fromRatio = function(e, n) {
  if (Ce(e) == "object") {
    var r = {};
    for (var i in e)
      e.hasOwnProperty(i) && (i === "a" ? r[i] = e[i] : r[i] = Qt(e[i]));
    e = r;
  }
  return E(e, n);
};
function fu(e) {
  var n = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, i = null, o = null, a = null, s = !1, u = !1;
  return typeof e == "string" && (e = Tu(e)), Ce(e) == "object" && (xt(e.r) && xt(e.g) && xt(e.b) ? (n = cu(e.r, e.g, e.b), s = !0, u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : xt(e.h) && xt(e.s) && xt(e.v) ? (i = Qt(e.s), o = Qt(e.v), n = du(e.h, i, o), s = !0, u = "hsv") : xt(e.h) && xt(e.s) && xt(e.l) && (i = Qt(e.s), a = Qt(e.l), n = hu(e.h, i, a), s = !0, u = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = Rr(r), {
    ok: s,
    format: e.format || u,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
function cu(e, n, r) {
  return {
    r: V(e, 255) * 255,
    g: V(n, 255) * 255,
    b: V(r, 255) * 255
  };
}
function $n(e, n, r) {
  e = V(e, 255), n = V(n, 255), r = V(r, 255);
  var i = Math.max(e, n, r), o = Math.min(e, n, r), a, s, u = (i + o) / 2;
  if (i == o)
    a = s = 0;
  else {
    var f = i - o;
    switch (s = u > 0.5 ? f / (2 - i - o) : f / (i + o), i) {
      case e:
        a = (n - r) / f + (n < r ? 6 : 0);
        break;
      case n:
        a = (r - e) / f + 2;
        break;
      case r:
        a = (e - n) / f + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s,
    l: u
  };
}
function hu(e, n, r) {
  var i, o, a;
  e = V(e, 360), n = V(n, 100), r = V(r, 100);
  function s(l, c, h) {
    return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? l + (c - l) * 6 * h : h < 1 / 2 ? c : h < 2 / 3 ? l + (c - l) * (2 / 3 - h) * 6 : l;
  }
  if (n === 0)
    i = o = a = r;
  else {
    var u = r < 0.5 ? r * (1 + n) : r + n - r * n, f = 2 * r - u;
    i = s(f, u, e + 1 / 3), o = s(f, u, e), a = s(f, u, e - 1 / 3);
  }
  return {
    r: i * 255,
    g: o * 255,
    b: a * 255
  };
}
function Fn(e, n, r) {
  e = V(e, 255), n = V(n, 255), r = V(r, 255);
  var i = Math.max(e, n, r), o = Math.min(e, n, r), a, s, u = i, f = i - o;
  if (s = i === 0 ? 0 : f / i, i == o)
    a = 0;
  else {
    switch (i) {
      case e:
        a = (n - r) / f + (n < r ? 6 : 0);
        break;
      case n:
        a = (r - e) / f + 2;
        break;
      case r:
        a = (e - n) / f + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s,
    v: u
  };
}
function du(e, n, r) {
  e = V(e, 360) * 6, n = V(n, 100), r = V(r, 100);
  var i = Math.floor(e), o = e - i, a = r * (1 - n), s = r * (1 - o * n), u = r * (1 - (1 - o) * n), f = i % 6, l = [r, s, a, a, u, r][f], c = [u, r, r, s, a, a][f], h = [a, a, u, r, r, s][f];
  return {
    r: l * 255,
    g: c * 255,
    b: h * 255
  };
}
function Un(e, n, r, i) {
  var o = [ut(Math.round(e).toString(16)), ut(Math.round(n).toString(16)), ut(Math.round(r).toString(16))];
  return i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function gu(e, n, r, i, o) {
  var a = [ut(Math.round(e).toString(16)), ut(Math.round(n).toString(16)), ut(Math.round(r).toString(16)), ut(Or(i))];
  return o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ln(e, n, r, i) {
  var o = [ut(Or(i)), ut(Math.round(e).toString(16)), ut(Math.round(n).toString(16)), ut(Math.round(r).toString(16))];
  return o.join("");
}
E.equals = function(e, n) {
  return !e || !n ? !1 : E(e).toRgbString() == E(n).toRgbString();
};
E.random = function() {
  return E.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function pu(e, n) {
  n = n === 0 ? 0 : n || 10;
  var r = E(e).toHsl();
  return r.s -= n / 100, r.s = Ee(r.s), E(r);
}
function yu(e, n) {
  n = n === 0 ? 0 : n || 10;
  var r = E(e).toHsl();
  return r.s += n / 100, r.s = Ee(r.s), E(r);
}
function _u(e) {
  return E(e).desaturate(100);
}
function xu(e, n) {
  n = n === 0 ? 0 : n || 10;
  var r = E(e).toHsl();
  return r.l += n / 100, r.l = Ee(r.l), E(r);
}
function vu(e, n) {
  n = n === 0 ? 0 : n || 10;
  var r = E(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))), E(r);
}
function mu(e, n) {
  n = n === 0 ? 0 : n || 10;
  var r = E(e).toHsl();
  return r.l -= n / 100, r.l = Ee(r.l), E(r);
}
function wu(e, n) {
  var r = E(e).toHsl(), i = (r.h + n) % 360;
  return r.h = i < 0 ? 360 + i : i, E(r);
}
function bu(e) {
  var n = E(e).toHsl();
  return n.h = (n.h + 180) % 360, E(n);
}
function jn(e, n) {
  if (isNaN(n) || n <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = E(e).toHsl(), i = [E(e)], o = 360 / n, a = 1; a < n; a++)
    i.push(E({
      h: (r.h + a * o) % 360,
      s: r.s,
      l: r.l
    }));
  return i;
}
function ku(e) {
  var n = E(e).toHsl(), r = n.h;
  return [E(e), E({
    h: (r + 72) % 360,
    s: n.s,
    l: n.l
  }), E({
    h: (r + 216) % 360,
    s: n.s,
    l: n.l
  })];
}
function Mu(e, n, r) {
  n = n || 6, r = r || 30;
  var i = E(e).toHsl(), o = 360 / r, a = [E(e)];
  for (i.h = (i.h - (o * n >> 1) + 720) % 360; --n; )
    i.h = (i.h + o) % 360, a.push(E(i));
  return a;
}
function Au(e, n) {
  n = n || 6;
  for (var r = E(e).toHsv(), i = r.h, o = r.s, a = r.v, s = [], u = 1 / n; n--; )
    s.push(E({
      h: i,
      s: o,
      v: a
    })), a = (a + u) % 1;
  return s;
}
E.mix = function(e, n, r) {
  r = r === 0 ? 0 : r || 50;
  var i = E(e).toRgb(), o = E(n).toRgb(), a = r / 100, s = {
    r: (o.r - i.r) * a + i.r,
    g: (o.g - i.g) * a + i.g,
    b: (o.b - i.b) * a + i.b,
    a: (o.a - i.a) * a + i.a
  };
  return E(s);
};
E.readability = function(e, n) {
  var r = E(e), i = E(n);
  return (Math.max(r.getLuminance(), i.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), i.getLuminance()) + 0.05);
};
E.isReadable = function(e, n, r) {
  var i = E.readability(e, n), o, a;
  switch (a = !1, o = Eu(r), o.level + o.size) {
    case "AAsmall":
    case "AAAlarge":
      a = i >= 4.5;
      break;
    case "AAlarge":
      a = i >= 3;
      break;
    case "AAAsmall":
      a = i >= 7;
      break;
  }
  return a;
};
E.mostReadable = function(e, n, r) {
  var i = null, o = 0, a, s, u, f;
  r = r || {}, s = r.includeFallbackColors, u = r.level, f = r.size;
  for (var l = 0; l < n.length; l++)
    a = E.readability(e, n[l]), a > o && (o = a, i = E(n[l]));
  return E.isReadable(e, i, {
    level: u,
    size: f
  }) || !s ? i : (r.includeFallbackColors = !1, E.mostReadable(e, ["#fff", "#000"], r));
};
var Ke = E.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, Cu = E.hexNames = Su(Ke);
function Su(e) {
  var n = {};
  for (var r in e)
    e.hasOwnProperty(r) && (n[e[r]] = r);
  return n;
}
function Rr(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function V(e, n) {
  zu(e) && (e = "100%");
  var r = Pu(e);
  return e = Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(e * n, 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : e % n / parseFloat(n);
}
function Ee(e) {
  return Math.min(1, Math.max(0, e));
}
function tt(e) {
  return parseInt(e, 16);
}
function zu(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Pu(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function ut(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Qt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function Or(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function qn(e) {
  return tt(e) / 255;
}
var ot = function() {
  var e = "[-\\+]?\\d+%?", n = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + n + ")|(?:" + e + ")", i = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + i),
    rgba: new RegExp("rgba" + o),
    hsl: new RegExp("hsl" + i),
    hsla: new RegExp("hsla" + o),
    hsv: new RegExp("hsv" + i),
    hsva: new RegExp("hsva" + o),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function xt(e) {
  return !!ot.CSS_UNIT.exec(e);
}
function Tu(e) {
  e = e.replace(uu, "").replace(lu, "").toLowerCase();
  var n = !1;
  if (Ke[e])
    e = Ke[e], n = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var r;
  return (r = ot.rgb.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3]
  } : (r = ot.rgba.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3],
    a: r[4]
  } : (r = ot.hsl.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3]
  } : (r = ot.hsla.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3],
    a: r[4]
  } : (r = ot.hsv.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3]
  } : (r = ot.hsva.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3],
    a: r[4]
  } : (r = ot.hex8.exec(e)) ? {
    r: tt(r[1]),
    g: tt(r[2]),
    b: tt(r[3]),
    a: qn(r[4]),
    format: n ? "name" : "hex8"
  } : (r = ot.hex6.exec(e)) ? {
    r: tt(r[1]),
    g: tt(r[2]),
    b: tt(r[3]),
    format: n ? "name" : "hex"
  } : (r = ot.hex4.exec(e)) ? {
    r: tt(r[1] + "" + r[1]),
    g: tt(r[2] + "" + r[2]),
    b: tt(r[3] + "" + r[3]),
    a: qn(r[4] + "" + r[4]),
    format: n ? "name" : "hex8"
  } : (r = ot.hex3.exec(e)) ? {
    r: tt(r[1] + "" + r[1]),
    g: tt(r[2] + "" + r[2]),
    b: tt(r[3] + "" + r[3]),
    format: n ? "name" : "hex"
  } : !1;
}
function Eu(e) {
  var n, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, n = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), n !== "AA" && n !== "AAA" && (n = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: n,
    size: r
  };
}
var Nu = 123;
function Ru(e) {
  return `#${Math.min(e, Math.pow(2, 24)).toString(16).padStart(6, "0")}`;
}
function Ir(e, n, r) {
  return (e << 16) + (n << 8) + r;
}
function Ou(e) {
  let { r: n, g: r, b: i } = E(e).toRgb();
  return Ir(n, r, i);
}
function Hn(e, n) {
  return e * Nu % Math.pow(2, n);
}
var Iu = class {
  constructor(e = 6) {
    Tt(this, "csBits");
    Tt(this, "registry");
    this.csBits = e, this.registry = ["__reserved for background__"];
  }
  register(e) {
    if (this.registry.length >= Math.pow(2, 24 - this.csBits)) return null;
    let n = this.registry.length, r = Hn(n, this.csBits), i = Ru(n + (r << 24 - this.csBits));
    return this.registry.push(e), i;
  }
  lookup(e) {
    let n = typeof e == "string" ? Ou(e) : Ir(...e);
    if (!n) return null;
    let r = n & Math.pow(2, 24 - this.csBits) - 1, i = n >> 24 - this.csBits & Math.pow(2, this.csBits) - 1;
    return Hn(r, this.csBits) !== i || r >= this.registry.length ? null : this.registry[r];
  }
};
function Du(e, n, r) {
  var i, o = 1;
  e == null && (e = 0), n == null && (n = 0), r == null && (r = 0);
  function a() {
    var s, u = i.length, f, l = 0, c = 0, h = 0;
    for (s = 0; s < u; ++s)
      f = i[s], l += f.x || 0, c += f.y || 0, h += f.z || 0;
    for (l = (l / u - e) * o, c = (c / u - n) * o, h = (h / u - r) * o, s = 0; s < u; ++s)
      f = i[s], l && (f.x -= l), c && (f.y -= c), h && (f.z -= h);
  }
  return a.initialize = function(s) {
    i = s;
  }, a.x = function(s) {
    return arguments.length ? (e = +s, a) : e;
  }, a.y = function(s) {
    return arguments.length ? (n = +s, a) : n;
  }, a.z = function(s) {
    return arguments.length ? (r = +s, a) : r;
  }, a.strength = function(s) {
    return arguments.length ? (o = +s, a) : o;
  }, a;
}
function $u(e) {
  const n = +this._x.call(null, e);
  return Dr(this.cover(n), n, e);
}
function Dr(e, n, r) {
  if (isNaN(n)) return e;
  var i, o = e._root, a = { data: r }, s = e._x0, u = e._x1, f, l, c, h, d;
  if (!o) return e._root = a, e;
  for (; o.length; )
    if ((c = n >= (f = (s + u) / 2)) ? s = f : u = f, i = o, !(o = o[h = +c])) return i[h] = a, e;
  if (l = +e._x.call(null, o.data), n === l) return a.next = o, i ? i[h] = a : e._root = a, e;
  do
    i = i ? i[h] = new Array(2) : e._root = new Array(2), (c = n >= (f = (s + u) / 2)) ? s = f : u = f;
  while ((h = +c) == (d = +(l >= f)));
  return i[d] = o, i[h] = a, e;
}
function Fu(e) {
  Array.isArray(e) || (e = Array.from(e));
  const n = e.length, r = new Float64Array(n);
  let i = 1 / 0, o = -1 / 0;
  for (let a = 0, s; a < n; ++a)
    isNaN(s = +this._x.call(null, e[a])) || (r[a] = s, s < i && (i = s), s > o && (o = s));
  if (i > o) return this;
  this.cover(i).cover(o);
  for (let a = 0; a < n; ++a)
    Dr(this, r[a], e[a]);
  return this;
}
function Uu(e) {
  if (isNaN(e = +e)) return this;
  var n = this._x0, r = this._x1;
  if (isNaN(n))
    r = (n = Math.floor(e)) + 1;
  else {
    for (var i = r - n || 1, o = this._root, a, s; n > e || e >= r; )
      switch (s = +(e < n), a = new Array(2), a[s] = o, o = a, i *= 2, s) {
        case 0:
          r = n + i;
          break;
        case 1:
          n = r - i;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._x1 = r, this;
}
function Lu() {
  var e = [];
  return this.visit(function(n) {
    if (!n.length) do
      e.push(n.data);
    while (n = n.next);
  }), e;
}
function ju(e) {
  return arguments.length ? this.cover(+e[0][0]).cover(+e[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function Mt(e, n, r) {
  this.node = e, this.x0 = n, this.x1 = r;
}
function qu(e, n) {
  var r, i = this._x0, o, a, s = this._x1, u = [], f = this._root, l, c;
  for (f && u.push(new Mt(f, i, s)), n == null ? n = 1 / 0 : (i = e - n, s = e + n); l = u.pop(); )
    if (!(!(f = l.node) || (o = l.x0) > s || (a = l.x1) < i))
      if (f.length) {
        var h = (o + a) / 2;
        u.push(
          new Mt(f[1], h, a),
          new Mt(f[0], o, h)
        ), (c = +(e >= h)) && (l = u[u.length - 1], u[u.length - 1] = u[u.length - 1 - c], u[u.length - 1 - c] = l);
      } else {
        var d = Math.abs(e - +this._x.call(null, f.data));
        d < n && (n = d, i = e - d, s = e + d, r = f.data);
      }
  return r;
}
function Hu(e) {
  if (isNaN(f = +this._x.call(null, e))) return this;
  var n, r = this._root, i, o, a, s = this._x0, u = this._x1, f, l, c, h, d;
  if (!r) return this;
  if (r.length) for (; ; ) {
    if ((c = f >= (l = (s + u) / 2)) ? s = l : u = l, n = r, !(r = r[h = +c])) return this;
    if (!r.length) break;
    n[h + 1 & 1] && (i = n, d = h);
  }
  for (; r.data !== e; ) if (o = r, !(r = r.next)) return this;
  return (a = r.next) && delete r.next, o ? (a ? o.next = a : delete o.next, this) : n ? (a ? n[h] = a : delete n[h], (r = n[0] || n[1]) && r === (n[1] || n[0]) && !r.length && (i ? i[d] = r : this._root = r), this) : (this._root = a, this);
}
function Vu(e) {
  for (var n = 0, r = e.length; n < r; ++n) this.remove(e[n]);
  return this;
}
function Gu() {
  return this._root;
}
function Bu() {
  var e = 0;
  return this.visit(function(n) {
    if (!n.length) do
      ++e;
    while (n = n.next);
  }), e;
}
function Xu(e) {
  var n = [], r, i = this._root, o, a, s;
  for (i && n.push(new Mt(i, this._x0, this._x1)); r = n.pop(); )
    if (!e(i = r.node, a = r.x0, s = r.x1) && i.length) {
      var u = (a + s) / 2;
      (o = i[1]) && n.push(new Mt(o, u, s)), (o = i[0]) && n.push(new Mt(o, a, u));
    }
  return this;
}
function Wu(e) {
  var n = [], r = [], i;
  for (this._root && n.push(new Mt(this._root, this._x0, this._x1)); i = n.pop(); ) {
    var o = i.node;
    if (o.length) {
      var a, s = i.x0, u = i.x1, f = (s + u) / 2;
      (a = o[0]) && n.push(new Mt(a, s, f)), (a = o[1]) && n.push(new Mt(a, f, u));
    }
    r.push(i);
  }
  for (; i = r.pop(); )
    e(i.node, i.x0, i.x1);
  return this;
}
function Yu(e) {
  return e[0];
}
function Zu(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function $r(e, n) {
  var r = new un(n ?? Yu, NaN, NaN);
  return e == null ? r : r.addAll(e);
}
function un(e, n, r) {
  this._x = e, this._x0 = n, this._x1 = r, this._root = void 0;
}
function Vn(e) {
  for (var n = { data: e.data }, r = n; e = e.next; ) r = r.next = { data: e.data };
  return n;
}
var J = $r.prototype = un.prototype;
J.copy = function() {
  var e = new un(this._x, this._x0, this._x1), n = this._root, r, i;
  if (!n) return e;
  if (!n.length) return e._root = Vn(n), e;
  for (r = [{ source: n, target: e._root = new Array(2) }]; n = r.pop(); )
    for (var o = 0; o < 2; ++o)
      (i = n.source[o]) && (i.length ? r.push({ source: i, target: n.target[o] = new Array(2) }) : n.target[o] = Vn(i));
  return e;
};
J.add = $u;
J.addAll = Fu;
J.cover = Uu;
J.data = Lu;
J.extent = ju;
J.find = qu;
J.remove = Hu;
J.removeAll = Vu;
J.root = Gu;
J.size = Bu;
J.visit = Xu;
J.visitAfter = Wu;
J.x = Zu;
function Ku(e) {
  const n = +this._x.call(null, e), r = +this._y.call(null, e);
  return Fr(this.cover(n, r), n, r, e);
}
function Fr(e, n, r, i) {
  if (isNaN(n) || isNaN(r)) return e;
  var o, a = e._root, s = { data: i }, u = e._x0, f = e._y0, l = e._x1, c = e._y1, h, d, g, y, v, m, p, A;
  if (!a) return e._root = s, e;
  for (; a.length; )
    if ((v = n >= (h = (u + l) / 2)) ? u = h : l = h, (m = r >= (d = (f + c) / 2)) ? f = d : c = d, o = a, !(a = a[p = m << 1 | v])) return o[p] = s, e;
  if (g = +e._x.call(null, a.data), y = +e._y.call(null, a.data), n === g && r === y) return s.next = a, o ? o[p] = s : e._root = s, e;
  do
    o = o ? o[p] = new Array(4) : e._root = new Array(4), (v = n >= (h = (u + l) / 2)) ? u = h : l = h, (m = r >= (d = (f + c) / 2)) ? f = d : c = d;
  while ((p = m << 1 | v) === (A = (y >= d) << 1 | g >= h));
  return o[A] = a, o[p] = s, e;
}
function Qu(e) {
  var n, r, i = e.length, o, a, s = new Array(i), u = new Array(i), f = 1 / 0, l = 1 / 0, c = -1 / 0, h = -1 / 0;
  for (r = 0; r < i; ++r)
    isNaN(o = +this._x.call(null, n = e[r])) || isNaN(a = +this._y.call(null, n)) || (s[r] = o, u[r] = a, o < f && (f = o), o > c && (c = o), a < l && (l = a), a > h && (h = a));
  if (f > c || l > h) return this;
  for (this.cover(f, l).cover(c, h), r = 0; r < i; ++r)
    Fr(this, s[r], u[r], e[r]);
  return this;
}
function Ju(e, n) {
  if (isNaN(e = +e) || isNaN(n = +n)) return this;
  var r = this._x0, i = this._y0, o = this._x1, a = this._y1;
  if (isNaN(r))
    o = (r = Math.floor(e)) + 1, a = (i = Math.floor(n)) + 1;
  else {
    for (var s = o - r || 1, u = this._root, f, l; r > e || e >= o || i > n || n >= a; )
      switch (l = (n < i) << 1 | e < r, f = new Array(4), f[l] = u, u = f, s *= 2, l) {
        case 0:
          o = r + s, a = i + s;
          break;
        case 1:
          r = o - s, a = i + s;
          break;
        case 2:
          o = r + s, i = a - s;
          break;
        case 3:
          r = o - s, i = a - s;
          break;
      }
    this._root && this._root.length && (this._root = u);
  }
  return this._x0 = r, this._y0 = i, this._x1 = o, this._y1 = a, this;
}
function tl() {
  var e = [];
  return this.visit(function(n) {
    if (!n.length) do
      e.push(n.data);
    while (n = n.next);
  }), e;
}
function el(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(e, n, r, i, o) {
  this.node = e, this.x0 = n, this.y0 = r, this.x1 = i, this.y1 = o;
}
function nl(e, n, r) {
  var i, o = this._x0, a = this._y0, s, u, f, l, c = this._x1, h = this._y1, d = [], g = this._root, y, v;
  for (g && d.push(new Z(g, o, a, c, h)), r == null ? r = 1 / 0 : (o = e - r, a = n - r, c = e + r, h = n + r, r *= r); y = d.pop(); )
    if (!(!(g = y.node) || (s = y.x0) > c || (u = y.y0) > h || (f = y.x1) < o || (l = y.y1) < a))
      if (g.length) {
        var m = (s + f) / 2, p = (u + l) / 2;
        d.push(
          new Z(g[3], m, p, f, l),
          new Z(g[2], s, p, m, l),
          new Z(g[1], m, u, f, p),
          new Z(g[0], s, u, m, p)
        ), (v = (n >= p) << 1 | e >= m) && (y = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - v], d[d.length - 1 - v] = y);
      } else {
        var A = e - +this._x.call(null, g.data), M = n - +this._y.call(null, g.data), _ = A * A + M * M;
        if (_ < r) {
          var x = Math.sqrt(r = _);
          o = e - x, a = n - x, c = e + x, h = n + x, i = g.data;
        }
      }
  return i;
}
function rl(e) {
  if (isNaN(c = +this._x.call(null, e)) || isNaN(h = +this._y.call(null, e))) return this;
  var n, r = this._root, i, o, a, s = this._x0, u = this._y0, f = this._x1, l = this._y1, c, h, d, g, y, v, m, p;
  if (!r) return this;
  if (r.length) for (; ; ) {
    if ((y = c >= (d = (s + f) / 2)) ? s = d : f = d, (v = h >= (g = (u + l) / 2)) ? u = g : l = g, n = r, !(r = r[m = v << 1 | y])) return this;
    if (!r.length) break;
    (n[m + 1 & 3] || n[m + 2 & 3] || n[m + 3 & 3]) && (i = n, p = m);
  }
  for (; r.data !== e; ) if (o = r, !(r = r.next)) return this;
  return (a = r.next) && delete r.next, o ? (a ? o.next = a : delete o.next, this) : n ? (a ? n[m] = a : delete n[m], (r = n[0] || n[1] || n[2] || n[3]) && r === (n[3] || n[2] || n[1] || n[0]) && !r.length && (i ? i[p] = r : this._root = r), this) : (this._root = a, this);
}
function il(e) {
  for (var n = 0, r = e.length; n < r; ++n) this.remove(e[n]);
  return this;
}
function ol() {
  return this._root;
}
function al() {
  var e = 0;
  return this.visit(function(n) {
    if (!n.length) do
      ++e;
    while (n = n.next);
  }), e;
}
function sl(e) {
  var n = [], r, i = this._root, o, a, s, u, f;
  for (i && n.push(new Z(i, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); )
    if (!e(i = r.node, a = r.x0, s = r.y0, u = r.x1, f = r.y1) && i.length) {
      var l = (a + u) / 2, c = (s + f) / 2;
      (o = i[3]) && n.push(new Z(o, l, c, u, f)), (o = i[2]) && n.push(new Z(o, a, c, l, f)), (o = i[1]) && n.push(new Z(o, l, s, u, c)), (o = i[0]) && n.push(new Z(o, a, s, l, c));
    }
  return this;
}
function ul(e) {
  var n = [], r = [], i;
  for (this._root && n.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); i = n.pop(); ) {
    var o = i.node;
    if (o.length) {
      var a, s = i.x0, u = i.y0, f = i.x1, l = i.y1, c = (s + f) / 2, h = (u + l) / 2;
      (a = o[0]) && n.push(new Z(a, s, u, c, h)), (a = o[1]) && n.push(new Z(a, c, u, f, h)), (a = o[2]) && n.push(new Z(a, s, h, c, l)), (a = o[3]) && n.push(new Z(a, c, h, f, l));
    }
    r.push(i);
  }
  for (; i = r.pop(); )
    e(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function ll(e) {
  return e[0];
}
function fl(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function cl(e) {
  return e[1];
}
function hl(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Ur(e, n, r) {
  var i = new ln(n ?? ll, r ?? cl, NaN, NaN, NaN, NaN);
  return e == null ? i : i.addAll(e);
}
function ln(e, n, r, i, o, a) {
  this._x = e, this._y = n, this._x0 = r, this._y0 = i, this._x1 = o, this._y1 = a, this._root = void 0;
}
function Gn(e) {
  for (var n = { data: e.data }, r = n; e = e.next; ) r = r.next = { data: e.data };
  return n;
}
var K = Ur.prototype = ln.prototype;
K.copy = function() {
  var e = new ln(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, r, i;
  if (!n) return e;
  if (!n.length) return e._root = Gn(n), e;
  for (r = [{ source: n, target: e._root = new Array(4) }]; n = r.pop(); )
    for (var o = 0; o < 4; ++o)
      (i = n.source[o]) && (i.length ? r.push({ source: i, target: n.target[o] = new Array(4) }) : n.target[o] = Gn(i));
  return e;
};
K.add = Ku;
K.addAll = Qu;
K.cover = Ju;
K.data = tl;
K.extent = el;
K.find = nl;
K.remove = rl;
K.removeAll = il;
K.root = ol;
K.size = al;
K.visit = sl;
K.visitAfter = ul;
K.x = fl;
K.y = hl;
function dl(e) {
  const n = +this._x.call(null, e), r = +this._y.call(null, e), i = +this._z.call(null, e);
  return Lr(this.cover(n, r, i), n, r, i, e);
}
function Lr(e, n, r, i, o) {
  if (isNaN(n) || isNaN(r) || isNaN(i)) return e;
  var a, s = e._root, u = { data: o }, f = e._x0, l = e._y0, c = e._z0, h = e._x1, d = e._y1, g = e._z1, y, v, m, p, A, M, _, x, w, k, C;
  if (!s) return e._root = u, e;
  for (; s.length; )
    if ((_ = n >= (y = (f + h) / 2)) ? f = y : h = y, (x = r >= (v = (l + d) / 2)) ? l = v : d = v, (w = i >= (m = (c + g) / 2)) ? c = m : g = m, a = s, !(s = s[k = w << 2 | x << 1 | _])) return a[k] = u, e;
  if (p = +e._x.call(null, s.data), A = +e._y.call(null, s.data), M = +e._z.call(null, s.data), n === p && r === A && i === M) return u.next = s, a ? a[k] = u : e._root = u, e;
  do
    a = a ? a[k] = new Array(8) : e._root = new Array(8), (_ = n >= (y = (f + h) / 2)) ? f = y : h = y, (x = r >= (v = (l + d) / 2)) ? l = v : d = v, (w = i >= (m = (c + g) / 2)) ? c = m : g = m;
  while ((k = w << 2 | x << 1 | _) === (C = (M >= m) << 2 | (A >= v) << 1 | p >= y));
  return a[C] = s, a[k] = u, e;
}
function gl(e) {
  Array.isArray(e) || (e = Array.from(e));
  const n = e.length, r = new Float64Array(n), i = new Float64Array(n), o = new Float64Array(n);
  let a = 1 / 0, s = 1 / 0, u = 1 / 0, f = -1 / 0, l = -1 / 0, c = -1 / 0;
  for (let h = 0, d, g, y, v; h < n; ++h)
    isNaN(g = +this._x.call(null, d = e[h])) || isNaN(y = +this._y.call(null, d)) || isNaN(v = +this._z.call(null, d)) || (r[h] = g, i[h] = y, o[h] = v, g < a && (a = g), g > f && (f = g), y < s && (s = y), y > l && (l = y), v < u && (u = v), v > c && (c = v));
  if (a > f || s > l || u > c) return this;
  this.cover(a, s, u).cover(f, l, c);
  for (let h = 0; h < n; ++h)
    Lr(this, r[h], i[h], o[h], e[h]);
  return this;
}
function pl(e, n, r) {
  if (isNaN(e = +e) || isNaN(n = +n) || isNaN(r = +r)) return this;
  var i = this._x0, o = this._y0, a = this._z0, s = this._x1, u = this._y1, f = this._z1;
  if (isNaN(i))
    s = (i = Math.floor(e)) + 1, u = (o = Math.floor(n)) + 1, f = (a = Math.floor(r)) + 1;
  else {
    for (var l = s - i || 1, c = this._root, h, d; i > e || e >= s || o > n || n >= u || a > r || r >= f; )
      switch (d = (r < a) << 2 | (n < o) << 1 | e < i, h = new Array(8), h[d] = c, c = h, l *= 2, d) {
        case 0:
          s = i + l, u = o + l, f = a + l;
          break;
        case 1:
          i = s - l, u = o + l, f = a + l;
          break;
        case 2:
          s = i + l, o = u - l, f = a + l;
          break;
        case 3:
          i = s - l, o = u - l, f = a + l;
          break;
        case 4:
          s = i + l, u = o + l, a = f - l;
          break;
        case 5:
          i = s - l, u = o + l, a = f - l;
          break;
        case 6:
          s = i + l, o = u - l, a = f - l;
          break;
        case 7:
          i = s - l, o = u - l, a = f - l;
          break;
      }
    this._root && this._root.length && (this._root = c);
  }
  return this._x0 = i, this._y0 = o, this._z0 = a, this._x1 = s, this._y1 = u, this._z1 = f, this;
}
function yl() {
  var e = [];
  return this.visit(function(n) {
    if (!n.length) do
      e.push(n.data);
    while (n = n.next);
  }), e;
}
function _l(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1], +e[0][2]).cover(+e[1][0], +e[1][1], +e[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function L(e, n, r, i, o, a, s) {
  this.node = e, this.x0 = n, this.y0 = r, this.z0 = i, this.x1 = o, this.y1 = a, this.z1 = s;
}
function xl(e, n, r, i) {
  var o, a = this._x0, s = this._y0, u = this._z0, f, l, c, h, d, g, y = this._x1, v = this._y1, m = this._z1, p = [], A = this._root, M, _;
  for (A && p.push(new L(A, a, s, u, y, v, m)), i == null ? i = 1 / 0 : (a = e - i, s = n - i, u = r - i, y = e + i, v = n + i, m = r + i, i *= i); M = p.pop(); )
    if (!(!(A = M.node) || (f = M.x0) > y || (l = M.y0) > v || (c = M.z0) > m || (h = M.x1) < a || (d = M.y1) < s || (g = M.z1) < u))
      if (A.length) {
        var x = (f + h) / 2, w = (l + d) / 2, k = (c + g) / 2;
        p.push(
          new L(A[7], x, w, k, h, d, g),
          new L(A[6], f, w, k, x, d, g),
          new L(A[5], x, l, k, h, w, g),
          new L(A[4], f, l, k, x, w, g),
          new L(A[3], x, w, c, h, d, k),
          new L(A[2], f, w, c, x, d, k),
          new L(A[1], x, l, c, h, w, k),
          new L(A[0], f, l, c, x, w, k)
        ), (_ = (r >= k) << 2 | (n >= w) << 1 | e >= x) && (M = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - _], p[p.length - 1 - _] = M);
      } else {
        var C = e - +this._x.call(null, A.data), T = n - +this._y.call(null, A.data), N = r - +this._z.call(null, A.data), O = C * C + T * T + N * N;
        if (O < i) {
          var I = Math.sqrt(i = O);
          a = e - I, s = n - I, u = r - I, y = e + I, v = n + I, m = r + I, o = A.data;
        }
      }
  return o;
}
function vl(e) {
  if (isNaN(d = +this._x.call(null, e)) || isNaN(g = +this._y.call(null, e)) || isNaN(y = +this._z.call(null, e))) return this;
  var n, r = this._root, i, o, a, s = this._x0, u = this._y0, f = this._z0, l = this._x1, c = this._y1, h = this._z1, d, g, y, v, m, p, A, M, _, x, w;
  if (!r) return this;
  if (r.length) for (; ; ) {
    if ((A = d >= (v = (s + l) / 2)) ? s = v : l = v, (M = g >= (m = (u + c) / 2)) ? u = m : c = m, (_ = y >= (p = (f + h) / 2)) ? f = p : h = p, n = r, !(r = r[x = _ << 2 | M << 1 | A])) return this;
    if (!r.length) break;
    (n[x + 1 & 7] || n[x + 2 & 7] || n[x + 3 & 7] || n[x + 4 & 7] || n[x + 5 & 7] || n[x + 6 & 7] || n[x + 7 & 7]) && (i = n, w = x);
  }
  for (; r.data !== e; ) if (o = r, !(r = r.next)) return this;
  return (a = r.next) && delete r.next, o ? (a ? o.next = a : delete o.next, this) : n ? (a ? n[x] = a : delete n[x], (r = n[0] || n[1] || n[2] || n[3] || n[4] || n[5] || n[6] || n[7]) && r === (n[7] || n[6] || n[5] || n[4] || n[3] || n[2] || n[1] || n[0]) && !r.length && (i ? i[w] = r : this._root = r), this) : (this._root = a, this);
}
function ml(e) {
  for (var n = 0, r = e.length; n < r; ++n) this.remove(e[n]);
  return this;
}
function wl() {
  return this._root;
}
function bl() {
  var e = 0;
  return this.visit(function(n) {
    if (!n.length) do
      ++e;
    while (n = n.next);
  }), e;
}
function kl(e) {
  var n = [], r, i = this._root, o, a, s, u, f, l, c;
  for (i && n.push(new L(i, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = n.pop(); )
    if (!e(i = r.node, a = r.x0, s = r.y0, u = r.z0, f = r.x1, l = r.y1, c = r.z1) && i.length) {
      var h = (a + f) / 2, d = (s + l) / 2, g = (u + c) / 2;
      (o = i[7]) && n.push(new L(o, h, d, g, f, l, c)), (o = i[6]) && n.push(new L(o, a, d, g, h, l, c)), (o = i[5]) && n.push(new L(o, h, s, g, f, d, c)), (o = i[4]) && n.push(new L(o, a, s, g, h, d, c)), (o = i[3]) && n.push(new L(o, h, d, u, f, l, g)), (o = i[2]) && n.push(new L(o, a, d, u, h, l, g)), (o = i[1]) && n.push(new L(o, h, s, u, f, d, g)), (o = i[0]) && n.push(new L(o, a, s, u, h, d, g));
    }
  return this;
}
function Ml(e) {
  var n = [], r = [], i;
  for (this._root && n.push(new L(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); i = n.pop(); ) {
    var o = i.node;
    if (o.length) {
      var a, s = i.x0, u = i.y0, f = i.z0, l = i.x1, c = i.y1, h = i.z1, d = (s + l) / 2, g = (u + c) / 2, y = (f + h) / 2;
      (a = o[0]) && n.push(new L(a, s, u, f, d, g, y)), (a = o[1]) && n.push(new L(a, d, u, f, l, g, y)), (a = o[2]) && n.push(new L(a, s, g, f, d, c, y)), (a = o[3]) && n.push(new L(a, d, g, f, l, c, y)), (a = o[4]) && n.push(new L(a, s, u, y, d, g, h)), (a = o[5]) && n.push(new L(a, d, u, y, l, g, h)), (a = o[6]) && n.push(new L(a, s, g, y, d, c, h)), (a = o[7]) && n.push(new L(a, d, g, y, l, c, h));
    }
    r.push(i);
  }
  for (; i = r.pop(); )
    e(i.node, i.x0, i.y0, i.z0, i.x1, i.y1, i.z1);
  return this;
}
function Al(e) {
  return e[0];
}
function Cl(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Sl(e) {
  return e[1];
}
function zl(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Pl(e) {
  return e[2];
}
function Tl(e) {
  return arguments.length ? (this._z = e, this) : this._z;
}
function jr(e, n, r, i) {
  var o = new fn(n ?? Al, r ?? Sl, i ?? Pl, NaN, NaN, NaN, NaN, NaN, NaN);
  return e == null ? o : o.addAll(e);
}
function fn(e, n, r, i, o, a, s, u, f) {
  this._x = e, this._y = n, this._z = r, this._x0 = i, this._y0 = o, this._z0 = a, this._x1 = s, this._y1 = u, this._z1 = f, this._root = void 0;
}
function Bn(e) {
  for (var n = { data: e.data }, r = n; e = e.next; ) r = r.next = { data: e.data };
  return n;
}
var Y = jr.prototype = fn.prototype;
Y.copy = function() {
  var e = new fn(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), n = this._root, r, i;
  if (!n) return e;
  if (!n.length) return e._root = Bn(n), e;
  for (r = [{ source: n, target: e._root = new Array(8) }]; n = r.pop(); )
    for (var o = 0; o < 8; ++o)
      (i = n.source[o]) && (i.length ? r.push({ source: i, target: n.target[o] = new Array(8) }) : n.target[o] = Bn(i));
  return e;
};
Y.add = dl;
Y.addAll = gl;
Y.cover = pl;
Y.data = yl;
Y.extent = _l;
Y.find = xl;
Y.remove = vl;
Y.removeAll = ml;
Y.root = wl;
Y.size = bl;
Y.visit = kl;
Y.visitAfter = Ml;
Y.x = Cl;
Y.y = zl;
Y.z = Tl;
function kt(e) {
  return function() {
    return e;
  };
}
function wt(e) {
  return (e() - 0.5) * 1e-6;
}
function El(e) {
  return e.index;
}
function Xn(e, n) {
  var r = e.get(n);
  if (!r) throw new Error("node not found: " + n);
  return r;
}
function Nl(e) {
  var n = El, r = d, i, o = kt(30), a, s, u, f, l, c, h = 1;
  e == null && (e = []);
  function d(p) {
    return 1 / Math.min(f[p.source.index], f[p.target.index]);
  }
  function g(p) {
    for (var A = 0, M = e.length; A < h; ++A)
      for (var _ = 0, x, w, k, C = 0, T = 0, N = 0, O, I; _ < M; ++_)
        x = e[_], w = x.source, k = x.target, C = k.x + k.vx - w.x - w.vx || wt(c), u > 1 && (T = k.y + k.vy - w.y - w.vy || wt(c)), u > 2 && (N = k.z + k.vz - w.z - w.vz || wt(c)), O = Math.sqrt(C * C + T * T + N * N), O = (O - a[_]) / O * p * i[_], C *= O, T *= O, N *= O, k.vx -= C * (I = l[_]), u > 1 && (k.vy -= T * I), u > 2 && (k.vz -= N * I), w.vx += C * (I = 1 - I), u > 1 && (w.vy += T * I), u > 2 && (w.vz += N * I);
  }
  function y() {
    if (s) {
      var p, A = s.length, M = e.length, _ = new Map(s.map((w, k) => [n(w, k, s), w])), x;
      for (p = 0, f = new Array(A); p < M; ++p)
        x = e[p], x.index = p, typeof x.source != "object" && (x.source = Xn(_, x.source)), typeof x.target != "object" && (x.target = Xn(_, x.target)), f[x.source.index] = (f[x.source.index] || 0) + 1, f[x.target.index] = (f[x.target.index] || 0) + 1;
      for (p = 0, l = new Array(M); p < M; ++p)
        x = e[p], l[p] = f[x.source.index] / (f[x.source.index] + f[x.target.index]);
      i = new Array(M), v(), a = new Array(M), m();
    }
  }
  function v() {
    if (s)
      for (var p = 0, A = e.length; p < A; ++p)
        i[p] = +r(e[p], p, e);
  }
  function m() {
    if (s)
      for (var p = 0, A = e.length; p < A; ++p)
        a[p] = +o(e[p], p, e);
  }
  return g.initialize = function(p, ...A) {
    s = p, c = A.find((M) => typeof M == "function") || Math.random, u = A.find((M) => [1, 2, 3].includes(M)) || 2, y();
  }, g.links = function(p) {
    return arguments.length ? (e = p, y(), g) : e;
  }, g.id = function(p) {
    return arguments.length ? (n = p, g) : n;
  }, g.iterations = function(p) {
    return arguments.length ? (h = +p, g) : h;
  }, g.strength = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : kt(+p), v(), g) : r;
  }, g.distance = function(p) {
    return arguments.length ? (o = typeof p == "function" ? p : kt(+p), m(), g) : o;
  }, g;
}
const Rl = 1664525, Ol = 1013904223, Wn = 4294967296;
function Il() {
  let e = 1;
  return () => (e = (Rl * e + Ol) % Wn) / Wn;
}
var Yn = 3;
function Fe(e) {
  return e.x;
}
function Zn(e) {
  return e.y;
}
function Dl(e) {
  return e.z;
}
var $l = 10, Fl = Math.PI * (3 - Math.sqrt(5)), Ul = Math.PI * 20 / (9 + Math.sqrt(221));
function Ll(e, n) {
  n = n || 2;
  var r = Math.min(Yn, Math.max(1, Math.round(n))), i, o = 1, a = 1e-3, s = 1 - Math.pow(a, 1 / 300), u = 0, f = 0.6, l = /* @__PURE__ */ new Map(), c = rn(g), h = ae("tick", "end"), d = Il();
  e == null && (e = []);
  function g() {
    y(), h.call("tick", i), o < a && (c.stop(), h.call("end", i));
  }
  function y(p) {
    var A, M = e.length, _;
    p === void 0 && (p = 1);
    for (var x = 0; x < p; ++x)
      for (o += (u - o) * s, l.forEach(function(w) {
        w(o);
      }), A = 0; A < M; ++A)
        _ = e[A], _.fx == null ? _.x += _.vx *= f : (_.x = _.fx, _.vx = 0), r > 1 && (_.fy == null ? _.y += _.vy *= f : (_.y = _.fy, _.vy = 0)), r > 2 && (_.fz == null ? _.z += _.vz *= f : (_.z = _.fz, _.vz = 0));
    return i;
  }
  function v() {
    for (var p = 0, A = e.length, M; p < A; ++p) {
      if (M = e[p], M.index = p, M.fx != null && (M.x = M.fx), M.fy != null && (M.y = M.fy), M.fz != null && (M.z = M.fz), isNaN(M.x) || r > 1 && isNaN(M.y) || r > 2 && isNaN(M.z)) {
        var _ = $l * (r > 2 ? Math.cbrt(0.5 + p) : r > 1 ? Math.sqrt(0.5 + p) : p), x = p * Fl, w = p * Ul;
        r === 1 ? M.x = _ : r === 2 ? (M.x = _ * Math.cos(x), M.y = _ * Math.sin(x)) : (M.x = _ * Math.sin(x) * Math.cos(w), M.y = _ * Math.cos(x), M.z = _ * Math.sin(x) * Math.sin(w));
      }
      (isNaN(M.vx) || r > 1 && isNaN(M.vy) || r > 2 && isNaN(M.vz)) && (M.vx = 0, r > 1 && (M.vy = 0), r > 2 && (M.vz = 0));
    }
  }
  function m(p) {
    return p.initialize && p.initialize(e, d, r), p;
  }
  return v(), i = {
    tick: y,
    restart: function() {
      return c.restart(g), i;
    },
    stop: function() {
      return c.stop(), i;
    },
    numDimensions: function(p) {
      return arguments.length ? (r = Math.min(Yn, Math.max(1, Math.round(p))), l.forEach(m), i) : r;
    },
    nodes: function(p) {
      return arguments.length ? (e = p, v(), l.forEach(m), i) : e;
    },
    alpha: function(p) {
      return arguments.length ? (o = +p, i) : o;
    },
    alphaMin: function(p) {
      return arguments.length ? (a = +p, i) : a;
    },
    alphaDecay: function(p) {
      return arguments.length ? (s = +p, i) : +s;
    },
    alphaTarget: function(p) {
      return arguments.length ? (u = +p, i) : u;
    },
    velocityDecay: function(p) {
      return arguments.length ? (f = 1 - p, i) : 1 - f;
    },
    randomSource: function(p) {
      return arguments.length ? (d = p, l.forEach(m), i) : d;
    },
    force: function(p, A) {
      return arguments.length > 1 ? (A == null ? l.delete(p) : l.set(p, m(A)), i) : l.get(p);
    },
    find: function() {
      var p = Array.prototype.slice.call(arguments), A = p.shift() || 0, M = (r > 1 ? p.shift() : null) || 0, _ = (r > 2 ? p.shift() : null) || 0, x = p.shift() || 1 / 0, w = 0, k = e.length, C, T, N, O, I, G;
      for (x *= x, w = 0; w < k; ++w)
        I = e[w], C = A - I.x, T = M - (I.y || 0), N = _ - (I.z || 0), O = C * C + T * T + N * N, O < x && (G = I, x = O);
      return G;
    },
    on: function(p, A) {
      return arguments.length > 1 ? (h.on(p, A), i) : h.on(p);
    }
  };
}
function jl() {
  var e, n, r, i, o, a = kt(-30), s, u = 1, f = 1 / 0, l = 0.81;
  function c(y) {
    var v, m = e.length, p = (n === 1 ? $r(e, Fe) : n === 2 ? Ur(e, Fe, Zn) : n === 3 ? jr(e, Fe, Zn, Dl) : null).visitAfter(d);
    for (o = y, v = 0; v < m; ++v) r = e[v], p.visit(g);
  }
  function h() {
    if (e) {
      var y, v = e.length, m;
      for (s = new Array(v), y = 0; y < v; ++y) m = e[y], s[m.index] = +a(m, y, e);
    }
  }
  function d(y) {
    var v = 0, m, p, A = 0, M, _, x, w, k = y.length;
    if (k) {
      for (M = _ = x = w = 0; w < k; ++w)
        (m = y[w]) && (p = Math.abs(m.value)) && (v += m.value, A += p, M += p * (m.x || 0), _ += p * (m.y || 0), x += p * (m.z || 0));
      v *= Math.sqrt(4 / k), y.x = M / A, n > 1 && (y.y = _ / A), n > 2 && (y.z = x / A);
    } else {
      m = y, m.x = m.data.x, n > 1 && (m.y = m.data.y), n > 2 && (m.z = m.data.z);
      do
        v += s[m.data.index];
      while (m = m.next);
    }
    y.value = v;
  }
  function g(y, v, m, p, A) {
    if (!y.value) return !0;
    var M = [m, p, A][n - 1], _ = y.x - r.x, x = n > 1 ? y.y - r.y : 0, w = n > 2 ? y.z - r.z : 0, k = M - v, C = _ * _ + x * x + w * w;
    if (k * k / l < C)
      return C < f && (_ === 0 && (_ = wt(i), C += _ * _), n > 1 && x === 0 && (x = wt(i), C += x * x), n > 2 && w === 0 && (w = wt(i), C += w * w), C < u && (C = Math.sqrt(u * C)), r.vx += _ * y.value * o / C, n > 1 && (r.vy += x * y.value * o / C), n > 2 && (r.vz += w * y.value * o / C)), !0;
    if (y.length || C >= f) return;
    (y.data !== r || y.next) && (_ === 0 && (_ = wt(i), C += _ * _), n > 1 && x === 0 && (x = wt(i), C += x * x), n > 2 && w === 0 && (w = wt(i), C += w * w), C < u && (C = Math.sqrt(u * C)));
    do
      y.data !== r && (k = s[y.data.index] * o / C, r.vx += _ * k, n > 1 && (r.vy += x * k), n > 2 && (r.vz += w * k));
    while (y = y.next);
  }
  return c.initialize = function(y, ...v) {
    e = y, i = v.find((m) => typeof m == "function") || Math.random, n = v.find((m) => [1, 2, 3].includes(m)) || 2, h();
  }, c.strength = function(y) {
    return arguments.length ? (a = typeof y == "function" ? y : kt(+y), h(), c) : a;
  }, c.distanceMin = function(y) {
    return arguments.length ? (u = y * y, c) : Math.sqrt(u);
  }, c.distanceMax = function(y) {
    return arguments.length ? (f = y * y, c) : Math.sqrt(f);
  }, c.theta = function(y) {
    return arguments.length ? (l = y * y, c) : Math.sqrt(l);
  }, c;
}
function ql(e, n, r, i) {
  var o, a, s = kt(0.1), u, f;
  typeof e != "function" && (e = kt(+e)), n == null && (n = 0), r == null && (r = 0), i == null && (i = 0);
  function l(h) {
    for (var d = 0, g = o.length; d < g; ++d) {
      var y = o[d], v = y.x - n || 1e-6, m = (y.y || 0) - r || 1e-6, p = (y.z || 0) - i || 1e-6, A = Math.sqrt(v * v + m * m + p * p), M = (f[d] - A) * u[d] * h / A;
      y.vx += v * M, a > 1 && (y.vy += m * M), a > 2 && (y.vz += p * M);
    }
  }
  function c() {
    if (o) {
      var h, d = o.length;
      for (u = new Array(d), f = new Array(d), h = 0; h < d; ++h)
        f[h] = +e(o[h], h, o), u[h] = isNaN(f[h]) ? 0 : +s(o[h], h, o);
    }
  }
  return l.initialize = function(h, ...d) {
    o = h, a = d.find((g) => [1, 2, 3].includes(g)) || 2, c();
  }, l.strength = function(h) {
    return arguments.length ? (s = typeof h == "function" ? h : kt(+h), c(), l) : s;
  }, l.radius = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : kt(+h), c(), l) : e;
  }, l.x = function(h) {
    return arguments.length ? (n = +h, l) : n;
  }, l.y = function(h) {
    return arguments.length ? (r = +h, l) : r;
  }, l.z = function(h) {
    return arguments.length ? (i = +h, l) : i;
  }, l;
}
const { abs: Vt, cos: vt, sin: It, acos: Hl, atan2: Gt, sqrt: Ct, pow: nt } = Math;
function Bt(e) {
  return e < 0 ? -nt(-e, 1 / 3) : nt(e, 1 / 3);
}
const qr = Math.PI, de = 2 * qr, St = qr / 2, Vl = 1e-6, Ue = Number.MAX_SAFE_INTEGER || 9007199254740991, Le = Number.MIN_SAFE_INTEGER || -9007199254740991, Gl = { x: 0, y: 0, z: 0 }, z = {
  // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
  Tvalues: [
    -0.06405689286260563,
    0.06405689286260563,
    -0.1911188674736163,
    0.1911188674736163,
    -0.3150426796961634,
    0.3150426796961634,
    -0.4337935076260451,
    0.4337935076260451,
    -0.5454214713888396,
    0.5454214713888396,
    -0.6480936519369755,
    0.6480936519369755,
    -0.7401241915785544,
    0.7401241915785544,
    -0.820001985973903,
    0.820001985973903,
    -0.8864155270044011,
    0.8864155270044011,
    -0.9382745520027328,
    0.9382745520027328,
    -0.9747285559713095,
    0.9747285559713095,
    -0.9951872199970213,
    0.9951872199970213
  ],
  // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
  Cvalues: [
    0.12793819534675216,
    0.12793819534675216,
    0.1258374563468283,
    0.1258374563468283,
    0.12167047292780339,
    0.12167047292780339,
    0.1155056680537256,
    0.1155056680537256,
    0.10744427011596563,
    0.10744427011596563,
    0.09761865210411388,
    0.09761865210411388,
    0.08619016153195327,
    0.08619016153195327,
    0.0733464814110803,
    0.0733464814110803,
    0.05929858491543678,
    0.05929858491543678,
    0.04427743881741981,
    0.04427743881741981,
    0.028531388628933663,
    0.028531388628933663,
    0.0123412297999872,
    0.0123412297999872
  ],
  arcfn: function(e, n) {
    const r = n(e);
    let i = r.x * r.x + r.y * r.y;
    return typeof r.z < "u" && (i += r.z * r.z), Ct(i);
  },
  compute: function(e, n, r) {
    if (e === 0)
      return n[0].t = 0, n[0];
    const i = n.length - 1;
    if (e === 1)
      return n[i].t = 1, n[i];
    const o = 1 - e;
    let a = n;
    if (i === 0)
      return n[0].t = e, n[0];
    if (i === 1) {
      const u = {
        x: o * a[0].x + e * a[1].x,
        y: o * a[0].y + e * a[1].y,
        t: e
      };
      return r && (u.z = o * a[0].z + e * a[1].z), u;
    }
    if (i < 4) {
      let u = o * o, f = e * e, l, c, h, d = 0;
      i === 2 ? (a = [a[0], a[1], a[2], Gl], l = u, c = o * e * 2, h = f) : i === 3 && (l = u * o, c = u * e * 3, h = o * f * 3, d = e * f);
      const g = {
        x: l * a[0].x + c * a[1].x + h * a[2].x + d * a[3].x,
        y: l * a[0].y + c * a[1].y + h * a[2].y + d * a[3].y,
        t: e
      };
      return r && (g.z = l * a[0].z + c * a[1].z + h * a[2].z + d * a[3].z), g;
    }
    const s = JSON.parse(JSON.stringify(n));
    for (; s.length > 1; ) {
      for (let u = 0; u < s.length - 1; u++)
        s[u] = {
          x: s[u].x + (s[u + 1].x - s[u].x) * e,
          y: s[u].y + (s[u + 1].y - s[u].y) * e
        }, typeof s[u].z < "u" && (s[u].z = s[u].z + (s[u + 1].z - s[u].z) * e);
      s.splice(s.length - 1, 1);
    }
    return s[0].t = e, s[0];
  },
  computeWithRatios: function(e, n, r, i) {
    const o = 1 - e, a = r, s = n;
    let u = a[0], f = a[1], l = a[2], c = a[3], h;
    if (u *= o, f *= e, s.length === 2)
      return h = u + f, {
        x: (u * s[0].x + f * s[1].x) / h,
        y: (u * s[0].y + f * s[1].y) / h,
        z: i ? (u * s[0].z + f * s[1].z) / h : !1,
        t: e
      };
    if (u *= o, f *= 2 * o, l *= e * e, s.length === 3)
      return h = u + f + l, {
        x: (u * s[0].x + f * s[1].x + l * s[2].x) / h,
        y: (u * s[0].y + f * s[1].y + l * s[2].y) / h,
        z: i ? (u * s[0].z + f * s[1].z + l * s[2].z) / h : !1,
        t: e
      };
    if (u *= o, f *= 1.5 * o, l *= 3 * o, c *= e * e * e, s.length === 4)
      return h = u + f + l + c, {
        x: (u * s[0].x + f * s[1].x + l * s[2].x + c * s[3].x) / h,
        y: (u * s[0].y + f * s[1].y + l * s[2].y + c * s[3].y) / h,
        z: i ? (u * s[0].z + f * s[1].z + l * s[2].z + c * s[3].z) / h : !1,
        t: e
      };
  },
  derive: function(e, n) {
    const r = [];
    for (let i = e, o = i.length, a = o - 1; o > 1; o--, a--) {
      const s = [];
      for (let u = 0, f; u < a; u++)
        f = {
          x: a * (i[u + 1].x - i[u].x),
          y: a * (i[u + 1].y - i[u].y)
        }, n && (f.z = a * (i[u + 1].z - i[u].z)), s.push(f);
      r.push(s), i = s;
    }
    return r;
  },
  between: function(e, n, r) {
    return n <= e && e <= r || z.approximately(e, n) || z.approximately(e, r);
  },
  approximately: function(e, n, r) {
    return Vt(e - n) <= (r || Vl);
  },
  length: function(e) {
    const r = z.Tvalues.length;
    let i = 0;
    for (let o = 0, a; o < r; o++)
      a = 0.5 * z.Tvalues[o] + 0.5, i += z.Cvalues[o] * z.arcfn(a, e);
    return 0.5 * i;
  },
  map: function(e, n, r, i, o) {
    const a = r - n, s = o - i, u = e - n, f = u / a;
    return i + s * f;
  },
  lerp: function(e, n, r) {
    const i = {
      x: n.x + e * (r.x - n.x),
      y: n.y + e * (r.y - n.y)
    };
    return n.z !== void 0 && r.z !== void 0 && (i.z = n.z + e * (r.z - n.z)), i;
  },
  pointToString: function(e) {
    let n = e.x + "/" + e.y;
    return typeof e.z < "u" && (n += "/" + e.z), n;
  },
  pointsToString: function(e) {
    return "[" + e.map(z.pointToString).join(", ") + "]";
  },
  copy: function(e) {
    return JSON.parse(JSON.stringify(e));
  },
  angle: function(e, n, r) {
    const i = n.x - e.x, o = n.y - e.y, a = r.x - e.x, s = r.y - e.y, u = i * s - o * a, f = i * a + o * s;
    return Gt(u, f);
  },
  // round as string, to avoid rounding errors
  round: function(e, n) {
    const r = "" + e, i = r.indexOf(".");
    return parseFloat(r.substring(0, i + 1 + n));
  },
  dist: function(e, n) {
    const r = e.x - n.x, i = e.y - n.y;
    return Ct(r * r + i * i);
  },
  closest: function(e, n) {
    let r = nt(2, 63), i, o;
    return e.forEach(function(a, s) {
      o = z.dist(n, a), o < r && (r = o, i = s);
    }), { mdist: r, mpos: i };
  },
  abcratio: function(e, n) {
    if (n !== 2 && n !== 3)
      return !1;
    if (typeof e > "u")
      e = 0.5;
    else if (e === 0 || e === 1)
      return e;
    const r = nt(e, n) + nt(1 - e, n), i = r - 1;
    return Vt(i / r);
  },
  projectionratio: function(e, n) {
    if (n !== 2 && n !== 3)
      return !1;
    if (typeof e > "u")
      e = 0.5;
    else if (e === 0 || e === 1)
      return e;
    const r = nt(1 - e, n), i = nt(e, n) + r;
    return r / i;
  },
  lli8: function(e, n, r, i, o, a, s, u) {
    const f = (e * i - n * r) * (o - s) - (e - r) * (o * u - a * s), l = (e * i - n * r) * (a - u) - (n - i) * (o * u - a * s), c = (e - r) * (a - u) - (n - i) * (o - s);
    return c == 0 ? !1 : { x: f / c, y: l / c };
  },
  lli4: function(e, n, r, i) {
    const o = e.x, a = e.y, s = n.x, u = n.y, f = r.x, l = r.y, c = i.x, h = i.y;
    return z.lli8(o, a, s, u, f, l, c, h);
  },
  lli: function(e, n) {
    return z.lli4(e, e.c, n, n.c);
  },
  makeline: function(e, n) {
    return new H(
      e.x,
      e.y,
      (e.x + n.x) / 2,
      (e.y + n.y) / 2,
      n.x,
      n.y
    );
  },
  findbbox: function(e) {
    let n = Ue, r = Ue, i = Le, o = Le;
    return e.forEach(function(a) {
      const s = a.bbox();
      n > s.x.min && (n = s.x.min), r > s.y.min && (r = s.y.min), i < s.x.max && (i = s.x.max), o < s.y.max && (o = s.y.max);
    }), {
      x: { min: n, mid: (n + i) / 2, max: i, size: i - n },
      y: { min: r, mid: (r + o) / 2, max: o, size: o - r }
    };
  },
  shapeintersections: function(e, n, r, i, o) {
    if (!z.bboxoverlap(n, i)) return [];
    const a = [], s = [e.startcap, e.forward, e.back, e.endcap], u = [r.startcap, r.forward, r.back, r.endcap];
    return s.forEach(function(f) {
      f.virtual || u.forEach(function(l) {
        if (l.virtual) return;
        const c = f.intersects(l, o);
        c.length > 0 && (c.c1 = f, c.c2 = l, c.s1 = e, c.s2 = r, a.push(c));
      });
    }), a;
  },
  makeshape: function(e, n, r) {
    const i = n.points.length, o = e.points.length, a = z.makeline(n.points[i - 1], e.points[0]), s = z.makeline(e.points[o - 1], n.points[0]), u = {
      startcap: a,
      forward: e,
      back: n,
      endcap: s,
      bbox: z.findbbox([a, e, n, s])
    };
    return u.intersections = function(f) {
      return z.shapeintersections(
        u,
        u.bbox,
        f,
        f.bbox,
        r
      );
    }, u;
  },
  getminmax: function(e, n, r) {
    if (!r) return { min: 0, max: 0 };
    let i = Ue, o = Le, a, s;
    r.indexOf(0) === -1 && (r = [0].concat(r)), r.indexOf(1) === -1 && r.push(1);
    for (let u = 0, f = r.length; u < f; u++)
      a = r[u], s = e.get(a), s[n] < i && (i = s[n]), s[n] > o && (o = s[n]);
    return { min: i, mid: (i + o) / 2, max: o, size: o - i };
  },
  align: function(e, n) {
    const r = n.p1.x, i = n.p1.y, o = -Gt(n.p2.y - i, n.p2.x - r), a = function(s) {
      return {
        x: (s.x - r) * vt(o) - (s.y - i) * It(o),
        y: (s.x - r) * It(o) + (s.y - i) * vt(o)
      };
    };
    return e.map(a);
  },
  roots: function(e, n) {
    n = n || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
    const r = e.length - 1, i = z.align(e, n), o = function(k) {
      return 0 <= k && k <= 1;
    };
    if (r === 2) {
      const k = i[0].y, C = i[1].y, T = i[2].y, N = k - 2 * C + T;
      if (N !== 0) {
        const O = -Ct(C * C - k * T), I = -k + C, G = -(O + I) / N, b = -(-O + I) / N;
        return [G, b].filter(o);
      } else if (C !== T && N === 0)
        return [(2 * C - T) / (2 * C - 2 * T)].filter(o);
      return [];
    }
    const a = i[0].y, s = i[1].y, u = i[2].y, f = i[3].y;
    let l = -a + 3 * s - 3 * u + f, c = 3 * a - 6 * s + 3 * u, h = -3 * a + 3 * s, d = a;
    if (z.approximately(l, 0)) {
      if (z.approximately(c, 0))
        return z.approximately(h, 0) ? [] : [-d / h].filter(o);
      const k = Ct(h * h - 4 * c * d), C = 2 * c;
      return [(k - h) / C, (-h - k) / C].filter(o);
    }
    c /= l, h /= l, d /= l;
    const g = (3 * h - c * c) / 3, y = g / 3, v = (2 * c * c * c - 9 * c * h + 27 * d) / 27, m = v / 2, p = m * m + y * y * y;
    let A, M, _, x, w;
    if (p < 0) {
      const k = -g / 3, C = k * k * k, T = Ct(C), N = -v / (2 * T), O = N < -1 ? -1 : N > 1 ? 1 : N, I = Hl(O), G = Bt(T), b = 2 * G;
      return _ = b * vt(I / 3) - c / 3, x = b * vt((I + de) / 3) - c / 3, w = b * vt((I + 2 * de) / 3) - c / 3, [_, x, w].filter(o);
    } else {
      if (p === 0)
        return A = m < 0 ? Bt(-m) : -Bt(m), _ = 2 * A - c / 3, x = -A - c / 3, [_, x].filter(o);
      {
        const k = Ct(p);
        return A = Bt(-m + k), M = Bt(m + k), [A - M - c / 3].filter(o);
      }
    }
  },
  droots: function(e) {
    if (e.length === 3) {
      const n = e[0], r = e[1], i = e[2], o = n - 2 * r + i;
      if (o !== 0) {
        const a = -Ct(r * r - n * i), s = -n + r, u = -(a + s) / o, f = -(-a + s) / o;
        return [u, f];
      } else if (r !== i && o === 0)
        return [(2 * r - i) / (2 * (r - i))];
      return [];
    }
    if (e.length === 2) {
      const n = e[0], r = e[1];
      return n !== r ? [n / (n - r)] : [];
    }
    return [];
  },
  curvature: function(e, n, r, i, o) {
    let a, s, u, f, l = 0, c = 0;
    const h = z.compute(e, n), d = z.compute(e, r), g = h.x * h.x + h.y * h.y;
    if (i ? (a = Ct(
      nt(h.y * d.z - d.y * h.z, 2) + nt(h.z * d.x - d.z * h.x, 2) + nt(h.x * d.y - d.x * h.y, 2)
    ), s = nt(g + h.z * h.z, 3 / 2)) : (a = h.x * d.y - h.y * d.x, s = nt(g, 3 / 2)), a === 0 || s === 0)
      return { k: 0, r: 0 };
    if (l = a / s, c = s / a, !o) {
      const y = z.curvature(e - 1e-3, n, r, i, !0).k, v = z.curvature(e + 1e-3, n, r, i, !0).k;
      f = (v - l + (l - y)) / 2, u = (Vt(v - l) + Vt(l - y)) / 2;
    }
    return { k: l, r: c, dk: f, adk: u };
  },
  inflections: function(e) {
    if (e.length < 4) return [];
    const n = z.align(e, { p1: e[0], p2: e.slice(-1)[0] }), r = n[2].x * n[1].y, i = n[3].x * n[1].y, o = n[1].x * n[2].y, a = n[3].x * n[2].y, s = 18 * (-3 * r + 2 * i + 3 * o - a), u = 18 * (3 * r - i - 3 * o), f = 18 * (o - r);
    if (z.approximately(s, 0)) {
      if (!z.approximately(u, 0)) {
        let d = -f / u;
        if (0 <= d && d <= 1) return [d];
      }
      return [];
    }
    const l = 2 * s;
    if (z.approximately(l, 0)) return [];
    const c = u * u - 4 * s * f;
    if (c < 0) return [];
    const h = Math.sqrt(c);
    return [(h - u) / l, -(u + h) / l].filter(function(d) {
      return 0 <= d && d <= 1;
    });
  },
  bboxoverlap: function(e, n) {
    const r = ["x", "y"], i = r.length;
    for (let o = 0, a, s, u, f; o < i; o++)
      if (a = r[o], s = e[a].mid, u = n[a].mid, f = (e[a].size + n[a].size) / 2, Vt(s - u) >= f) return !1;
    return !0;
  },
  expandbox: function(e, n) {
    n.x.min < e.x.min && (e.x.min = n.x.min), n.y.min < e.y.min && (e.y.min = n.y.min), n.z && n.z.min < e.z.min && (e.z.min = n.z.min), n.x.max > e.x.max && (e.x.max = n.x.max), n.y.max > e.y.max && (e.y.max = n.y.max), n.z && n.z.max > e.z.max && (e.z.max = n.z.max), e.x.mid = (e.x.min + e.x.max) / 2, e.y.mid = (e.y.min + e.y.max) / 2, e.z && (e.z.mid = (e.z.min + e.z.max) / 2), e.x.size = e.x.max - e.x.min, e.y.size = e.y.max - e.y.min, e.z && (e.z.size = e.z.max - e.z.min);
  },
  pairiteration: function(e, n, r) {
    const i = e.bbox(), o = n.bbox(), a = 1e5, s = r || 0.5;
    if (i.x.size + i.y.size < s && o.x.size + o.y.size < s)
      return [
        (a * (e._t1 + e._t2) / 2 | 0) / a + "/" + (a * (n._t1 + n._t2) / 2 | 0) / a
      ];
    let u = e.split(0.5), f = n.split(0.5), l = [
      { left: u.left, right: f.left },
      { left: u.left, right: f.right },
      { left: u.right, right: f.right },
      { left: u.right, right: f.left }
    ];
    l = l.filter(function(h) {
      return z.bboxoverlap(h.left.bbox(), h.right.bbox());
    });
    let c = [];
    return l.length === 0 || (l.forEach(function(h) {
      c = c.concat(
        z.pairiteration(h.left, h.right, s)
      );
    }), c = c.filter(function(h, d) {
      return c.indexOf(h) === d;
    })), c;
  },
  getccenter: function(e, n, r) {
    const i = n.x - e.x, o = n.y - e.y, a = r.x - n.x, s = r.y - n.y, u = i * vt(St) - o * It(St), f = i * It(St) + o * vt(St), l = a * vt(St) - s * It(St), c = a * It(St) + s * vt(St), h = (e.x + n.x) / 2, d = (e.y + n.y) / 2, g = (n.x + r.x) / 2, y = (n.y + r.y) / 2, v = h + u, m = d + f, p = g + l, A = y + c, M = z.lli8(h, d, v, m, g, y, p, A), _ = z.dist(M, e);
    let x = Gt(e.y - M.y, e.x - M.x), w = Gt(n.y - M.y, n.x - M.x), k = Gt(r.y - M.y, r.x - M.x), C;
    return x < k ? ((x > w || w > k) && (x += de), x > k && (C = k, k = x, x = C)) : k < w && w < x ? (C = k, k = x, x = C) : k += de, M.s = x, M.e = k, M.r = _, M;
  },
  numberSort: function(e, n) {
    return e - n;
  }
};
class Jt {
  constructor(n) {
    this.curves = [], this._3d = !1, n && (this.curves = n, this._3d = this.curves[0]._3d);
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return "[" + this.curves.map(function(n) {
      return z.pointsToString(n.points);
    }).join(", ") + "]";
  }
  addCurve(n) {
    this.curves.push(n), this._3d = this._3d || n._3d;
  }
  length() {
    return this.curves.map(function(n) {
      return n.length();
    }).reduce(function(n, r) {
      return n + r;
    });
  }
  curve(n) {
    return this.curves[n];
  }
  bbox() {
    const n = this.curves;
    for (var r = n[0].bbox(), i = 1; i < n.length; i++)
      z.expandbox(r, n[i].bbox());
    return r;
  }
  offset(n) {
    const r = [];
    return this.curves.forEach(function(i) {
      r.push(...i.offset(n));
    }), new Jt(r);
  }
}
const { abs: Xt, min: Kn, max: Qn, cos: Bl, sin: Xl, acos: Wl, sqrt: Wt } = Math, Yl = Math.PI;
class H {
  constructor(n) {
    let r = n && n.forEach ? n : Array.from(arguments).slice(), i = !1;
    if (typeof r[0] == "object") {
      i = r.length;
      const g = [];
      r.forEach(function(y) {
        ["x", "y", "z"].forEach(function(v) {
          typeof y[v] < "u" && g.push(y[v]);
        });
      }), r = g;
    }
    let o = !1;
    const a = r.length;
    if (i) {
      if (i > 4) {
        if (arguments.length !== 1)
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        o = !0;
      }
    } else if (a !== 6 && a !== 8 && a !== 9 && a !== 12 && arguments.length !== 1)
      throw new Error(
        "Only new Bezier(point[]) is accepted for 4th and higher order curves"
      );
    const s = this._3d = !o && (a === 9 || a === 12) || n && n[0] && typeof n[0].z < "u", u = this.points = [];
    for (let g = 0, y = s ? 3 : 2; g < a; g += y) {
      var f = {
        x: r[g],
        y: r[g + 1]
      };
      s && (f.z = r[g + 2]), u.push(f);
    }
    const l = this.order = u.length - 1, c = this.dims = ["x", "y"];
    s && c.push("z"), this.dimlen = c.length;
    const h = z.align(u, { p1: u[0], p2: u[l] }), d = z.dist(u[0], u[l]);
    this._linear = h.reduce((g, y) => g + Xt(y.y), 0) < d / 50, this._lut = [], this._t1 = 0, this._t2 = 1, this.update();
  }
  static quadraticFromPoints(n, r, i, o) {
    if (typeof o > "u" && (o = 0.5), o === 0)
      return new H(r, r, i);
    if (o === 1)
      return new H(n, r, r);
    const a = H.getABC(2, n, r, i, o);
    return new H(n, a.A, i);
  }
  static cubicFromPoints(n, r, i, o, a) {
    typeof o > "u" && (o = 0.5);
    const s = H.getABC(3, n, r, i, o);
    typeof a > "u" && (a = z.dist(r, s.C));
    const u = a * (1 - o) / o, f = z.dist(n, i), l = (i.x - n.x) / f, c = (i.y - n.y) / f, h = a * l, d = a * c, g = u * l, y = u * c, v = { x: r.x - h, y: r.y - d }, m = { x: r.x + g, y: r.y + y }, p = s.A, A = { x: p.x + (v.x - p.x) / (1 - o), y: p.y + (v.y - p.y) / (1 - o) }, M = { x: p.x + (m.x - p.x) / o, y: p.y + (m.y - p.y) / o }, _ = { x: n.x + (A.x - n.x) / o, y: n.y + (A.y - n.y) / o }, x = {
      x: i.x + (M.x - i.x) / (1 - o),
      y: i.y + (M.y - i.y) / (1 - o)
    };
    return new H(n, _, x, i);
  }
  static getUtils() {
    return z;
  }
  getUtils() {
    return H.getUtils();
  }
  static get PolyBezier() {
    return Jt;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return z.pointsToString(this.points);
  }
  toSVG() {
    if (this._3d) return !1;
    const n = this.points, r = n[0].x, i = n[0].y, o = ["M", r, i, this.order === 2 ? "Q" : "C"];
    for (let a = 1, s = n.length; a < s; a++)
      o.push(n[a].x), o.push(n[a].y);
    return o.join(" ");
  }
  setRatios(n) {
    if (n.length !== this.points.length)
      throw new Error("incorrect number of ratio values");
    this.ratios = n, this._lut = [];
  }
  verify() {
    const n = this.coordDigest();
    n !== this._print && (this._print = n, this.update());
  }
  coordDigest() {
    return this.points.map(function(n, r) {
      return "" + r + n.x + n.y + (n.z ? n.z : 0);
    }).join("");
  }
  update() {
    this._lut = [], this.dpoints = z.derive(this.points, this._3d), this.computedirection();
  }
  computedirection() {
    const n = this.points, r = z.angle(n[0], n[this.order], n[1]);
    this.clockwise = r > 0;
  }
  length() {
    return z.length(this.derivative.bind(this));
  }
  static getABC(n = 2, r, i, o, a = 0.5) {
    const s = z.projectionratio(a, n), u = 1 - s, f = {
      x: s * r.x + u * o.x,
      y: s * r.y + u * o.y
    }, l = z.abcratio(a, n);
    return { A: {
      x: i.x + (i.x - f.x) / l,
      y: i.y + (i.y - f.y) / l
    }, B: i, C: f, S: r, E: o };
  }
  getABC(n, r) {
    r = r || this.get(n);
    let i = this.points[0], o = this.points[this.order];
    return H.getABC(this.order, i, r, o, n);
  }
  getLUT(n) {
    if (this.verify(), n = n || 100, this._lut.length === n + 1)
      return this._lut;
    this._lut = [], n++, this._lut = [];
    for (let r = 0, i, o; r < n; r++)
      o = r / (n - 1), i = this.compute(o), i.t = o, this._lut.push(i);
    return this._lut;
  }
  on(n, r) {
    r = r || 5;
    const i = this.getLUT(), o = [];
    for (let a = 0, s, u = 0; a < i.length; a++)
      s = i[a], z.dist(s, n) < r && (o.push(s), u += a / i.length);
    return o.length ? t /= o.length : !1;
  }
  project(n) {
    const r = this.getLUT(), i = r.length - 1, o = z.closest(r, n), a = o.mpos, s = (a - 1) / i, u = (a + 1) / i, f = 0.1 / i;
    let l = o.mdist, c = s, h = c, d;
    l += 1;
    for (let g; c < u + f; c += f)
      d = this.compute(c), g = z.dist(n, d), g < l && (l = g, h = c);
    return h = h < 0 ? 0 : h > 1 ? 1 : h, d = this.compute(h), d.t = h, d.d = l, d;
  }
  get(n) {
    return this.compute(n);
  }
  point(n) {
    return this.points[n];
  }
  compute(n) {
    return this.ratios ? z.computeWithRatios(n, this.points, this.ratios, this._3d) : z.compute(n, this.points, this._3d, this.ratios);
  }
  raise() {
    const n = this.points, r = [n[0]], i = n.length;
    for (let o = 1, a, s; o < i; o++)
      a = n[o], s = n[o - 1], r[o] = {
        x: (i - o) / i * a.x + o / i * s.x,
        y: (i - o) / i * a.y + o / i * s.y
      };
    return r[i] = n[i - 1], new H(r);
  }
  derivative(n) {
    return z.compute(n, this.dpoints[0], this._3d);
  }
  dderivative(n) {
    return z.compute(n, this.dpoints[1], this._3d);
  }
  align() {
    let n = this.points;
    return new H(z.align(n, { p1: n[0], p2: n[n.length - 1] }));
  }
  curvature(n) {
    return z.curvature(n, this.dpoints[0], this.dpoints[1], this._3d);
  }
  inflections() {
    return z.inflections(this.points);
  }
  normal(n) {
    return this._3d ? this.__normal3(n) : this.__normal2(n);
  }
  __normal2(n) {
    const r = this.derivative(n), i = Wt(r.x * r.x + r.y * r.y);
    return { t: n, x: -r.y / i, y: r.x / i };
  }
  __normal3(n) {
    const r = this.derivative(n), i = this.derivative(n + 0.01), o = Wt(r.x * r.x + r.y * r.y + r.z * r.z), a = Wt(i.x * i.x + i.y * i.y + i.z * i.z);
    r.x /= o, r.y /= o, r.z /= o, i.x /= a, i.y /= a, i.z /= a;
    const s = {
      x: i.y * r.z - i.z * r.y,
      y: i.z * r.x - i.x * r.z,
      z: i.x * r.y - i.y * r.x
    }, u = Wt(s.x * s.x + s.y * s.y + s.z * s.z);
    s.x /= u, s.y /= u, s.z /= u;
    const f = [
      s.x * s.x,
      s.x * s.y - s.z,
      s.x * s.z + s.y,
      s.x * s.y + s.z,
      s.y * s.y,
      s.y * s.z - s.x,
      s.x * s.z - s.y,
      s.y * s.z + s.x,
      s.z * s.z
    ];
    return {
      t: n,
      x: f[0] * r.x + f[1] * r.y + f[2] * r.z,
      y: f[3] * r.x + f[4] * r.y + f[5] * r.z,
      z: f[6] * r.x + f[7] * r.y + f[8] * r.z
    };
  }
  hull(n) {
    let r = this.points, i = [], o = [], a = 0;
    for (o[a++] = r[0], o[a++] = r[1], o[a++] = r[2], this.order === 3 && (o[a++] = r[3]); r.length > 1; ) {
      i = [];
      for (let s = 0, u, f = r.length - 1; s < f; s++)
        u = z.lerp(n, r[s], r[s + 1]), o[a++] = u, i.push(u);
      r = i;
    }
    return o;
  }
  split(n, r) {
    if (n === 0 && r)
      return this.split(r).left;
    if (r === 1)
      return this.split(n).right;
    const i = this.hull(n), o = {
      left: this.order === 2 ? new H([i[0], i[3], i[5]]) : new H([i[0], i[4], i[7], i[9]]),
      right: this.order === 2 ? new H([i[5], i[4], i[2]]) : new H([i[9], i[8], i[6], i[3]]),
      span: i
    };
    return o.left._t1 = z.map(0, 0, 1, this._t1, this._t2), o.left._t2 = z.map(n, 0, 1, this._t1, this._t2), o.right._t1 = z.map(n, 0, 1, this._t1, this._t2), o.right._t2 = z.map(1, 0, 1, this._t1, this._t2), r ? (r = z.map(r, n, 1, 0, 1), o.right.split(r).left) : o;
  }
  extrema() {
    const n = {};
    let r = [];
    return this.dims.forEach(
      (function(i) {
        let o = function(s) {
          return s[i];
        }, a = this.dpoints[0].map(o);
        n[i] = z.droots(a), this.order === 3 && (a = this.dpoints[1].map(o), n[i] = n[i].concat(z.droots(a))), n[i] = n[i].filter(function(s) {
          return s >= 0 && s <= 1;
        }), r = r.concat(n[i].sort(z.numberSort));
      }).bind(this)
    ), n.values = r.sort(z.numberSort).filter(function(i, o) {
      return r.indexOf(i) === o;
    }), n;
  }
  bbox() {
    const n = this.extrema(), r = {};
    return this.dims.forEach(
      (function(i) {
        r[i] = z.getminmax(this, i, n[i]);
      }).bind(this)
    ), r;
  }
  overlaps(n) {
    const r = this.bbox(), i = n.bbox();
    return z.bboxoverlap(r, i);
  }
  offset(n, r) {
    if (typeof r < "u") {
      const i = this.get(n), o = this.normal(n), a = {
        c: i,
        n: o,
        x: i.x + o.x * r,
        y: i.y + o.y * r
      };
      return this._3d && (a.z = i.z + o.z * r), a;
    }
    if (this._linear) {
      const i = this.normal(0), o = this.points.map(function(a) {
        const s = {
          x: a.x + n * i.x,
          y: a.y + n * i.y
        };
        return a.z && i.z && (s.z = a.z + n * i.z), s;
      });
      return [new H(o)];
    }
    return this.reduce().map(function(i) {
      return i._linear ? i.offset(n)[0] : i.scale(n);
    });
  }
  simple() {
    if (this.order === 3) {
      const o = z.angle(this.points[0], this.points[3], this.points[1]), a = z.angle(this.points[0], this.points[3], this.points[2]);
      if (o > 0 && a < 0 || o < 0 && a > 0) return !1;
    }
    const n = this.normal(0), r = this.normal(1);
    let i = n.x * r.x + n.y * r.y;
    return this._3d && (i += n.z * r.z), Xt(Wl(i)) < Yl / 3;
  }
  reduce() {
    let n, r = 0, i = 0, o = 0.01, a, s = [], u = [], f = this.extrema().values;
    for (f.indexOf(0) === -1 && (f = [0].concat(f)), f.indexOf(1) === -1 && f.push(1), r = f[0], n = 1; n < f.length; n++)
      i = f[n], a = this.split(r, i), a._t1 = r, a._t2 = i, s.push(a), r = i;
    return s.forEach(function(l) {
      for (r = 0, i = 0; i <= 1; )
        for (i = r + o; i <= 1 + o; i += o)
          if (a = l.split(r, i), !a.simple()) {
            if (i -= o, Xt(r - i) < o)
              return [];
            a = l.split(r, i), a._t1 = z.map(r, 0, 1, l._t1, l._t2), a._t2 = z.map(i, 0, 1, l._t1, l._t2), u.push(a), r = i;
            break;
          }
      r < 1 && (a = l.split(r, 1), a._t1 = z.map(r, 0, 1, l._t1, l._t2), a._t2 = l._t2, u.push(a));
    }), u;
  }
  translate(n, r, i) {
    i = typeof i == "number" ? i : r;
    const o = this.order;
    let a = this.points.map((s, u) => (1 - u / o) * r + u / o * i);
    return new H(
      this.points.map((s, u) => ({
        x: s.x + n.x * a[u],
        y: s.y + n.y * a[u]
      }))
    );
  }
  scale(n) {
    const r = this.order;
    let i = !1;
    if (typeof n == "function" && (i = n), i && r === 2)
      return this.raise().scale(i);
    const o = this.clockwise, a = this.points;
    if (this._linear)
      return this.translate(
        this.normal(0),
        i ? i(0) : n,
        i ? i(1) : n
      );
    const s = i ? i(0) : n, u = i ? i(1) : n, f = [this.offset(0, 10), this.offset(1, 10)], l = [], c = z.lli4(f[0], f[0].c, f[1], f[1].c);
    if (!c)
      throw new Error("cannot scale this curve. Try reducing it first.");
    return [0, 1].forEach(function(h) {
      const d = l[h * r] = z.copy(a[h * r]);
      d.x += (h ? u : s) * f[h].n.x, d.y += (h ? u : s) * f[h].n.y;
    }), i ? ([0, 1].forEach(function(h) {
      if (!(r === 2 && h)) {
        var d = a[h + 1], g = {
          x: d.x - c.x,
          y: d.y - c.y
        }, y = i ? i((h + 1) / r) : n;
        i && !o && (y = -y);
        var v = Wt(g.x * g.x + g.y * g.y);
        g.x /= v, g.y /= v, l[h + 1] = {
          x: d.x + y * g.x,
          y: d.y + y * g.y
        };
      }
    }), new H(l)) : ([0, 1].forEach((h) => {
      if (r === 2 && h) return;
      const d = l[h * r], g = this.derivative(h), y = { x: d.x + g.x, y: d.y + g.y };
      l[h + 1] = z.lli4(d, y, c, a[h + 1]);
    }), new H(l));
  }
  outline(n, r, i, o) {
    if (r = r === void 0 ? n : r, this._linear) {
      const x = this.normal(0), w = this.points[0], k = this.points[this.points.length - 1];
      let C, T, N;
      i === void 0 && (i = n, o = r), C = { x: w.x + x.x * n, y: w.y + x.y * n }, N = { x: k.x + x.x * i, y: k.y + x.y * i }, T = { x: (C.x + N.x) / 2, y: (C.y + N.y) / 2 };
      const O = [C, T, N];
      C = { x: w.x - x.x * r, y: w.y - x.y * r }, N = { x: k.x - x.x * o, y: k.y - x.y * o }, T = { x: (C.x + N.x) / 2, y: (C.y + N.y) / 2 };
      const I = [N, T, C], G = z.makeline(I[2], O[0]), b = z.makeline(O[2], I[0]), P = [G, new H(O), b, new H(I)];
      return new Jt(P);
    }
    const a = this.reduce(), s = a.length, u = [];
    let f = [], l, c = 0, h = this.length();
    const d = typeof i < "u" && typeof o < "u";
    function g(x, w, k, C, T) {
      return function(N) {
        const O = C / k, I = (C + T) / k, G = w - x;
        return z.map(N, 0, 1, x + O * G, x + I * G);
      };
    }
    a.forEach(function(x) {
      const w = x.length();
      d ? (u.push(
        x.scale(g(n, i, h, c, w))
      ), f.push(
        x.scale(g(-r, -o, h, c, w))
      )) : (u.push(x.scale(n)), f.push(x.scale(-r))), c += w;
    }), f = f.map(function(x) {
      return l = x.points, l[3] ? x.points = [l[3], l[2], l[1], l[0]] : x.points = [l[2], l[1], l[0]], x;
    }).reverse();
    const y = u[0].points[0], v = u[s - 1].points[u[s - 1].points.length - 1], m = f[s - 1].points[f[s - 1].points.length - 1], p = f[0].points[0], A = z.makeline(m, y), M = z.makeline(v, p), _ = [A].concat(u).concat([M]).concat(f);
    return new Jt(_);
  }
  outlineshapes(n, r, i) {
    r = r || n;
    const o = this.outline(n, r).curves, a = [];
    for (let s = 1, u = o.length; s < u / 2; s++) {
      const f = z.makeshape(
        o[s],
        o[u - s],
        i
      );
      f.startcap.virtual = s > 1, f.endcap.virtual = s < u / 2 - 1, a.push(f);
    }
    return a;
  }
  intersects(n, r) {
    return n ? n.p1 && n.p2 ? this.lineIntersects(n) : (n instanceof H && (n = n.reduce()), this.curveintersects(
      this.reduce(),
      n,
      r
    )) : this.selfintersects(r);
  }
  lineIntersects(n) {
    const r = Kn(n.p1.x, n.p2.x), i = Kn(n.p1.y, n.p2.y), o = Qn(n.p1.x, n.p2.x), a = Qn(n.p1.y, n.p2.y);
    return z.roots(this.points, n).filter((s) => {
      var u = this.get(s);
      return z.between(u.x, r, o) && z.between(u.y, i, a);
    });
  }
  selfintersects(n) {
    const r = this.reduce(), i = r.length - 2, o = [];
    for (let a = 0, s, u, f; a < i; a++)
      u = r.slice(a, a + 1), f = r.slice(a + 2), s = this.curveintersects(u, f, n), o.push(...s);
    return o;
  }
  curveintersects(n, r, i) {
    const o = [];
    n.forEach(function(s) {
      r.forEach(function(u) {
        s.overlaps(u) && o.push({ left: s, right: u });
      });
    });
    let a = [];
    return o.forEach(function(s) {
      const u = z.pairiteration(
        s.left,
        s.right,
        i
      );
      u.length > 0 && (a = a.concat(u));
    }), a;
  }
  arcs(n) {
    return n = n || 0.5, this._iterate(n, []);
  }
  _error(n, r, i, o) {
    const a = (o - i) / 4, s = this.get(i + a), u = this.get(o - a), f = z.dist(n, r), l = z.dist(n, s), c = z.dist(n, u);
    return Xt(l - f) + Xt(c - f);
  }
  _iterate(n, r) {
    let i = 0, o = 1, a;
    do {
      a = 0, o = 1;
      let s = this.get(i), u, f, l, c, h = !1, d = !1, g, y = o, v = 1;
      do
        if (d = h, c = l, y = (i + o) / 2, u = this.get(y), f = this.get(o), l = z.getccenter(s, u, f), l.interval = {
          start: i,
          end: o
        }, h = this._error(l, s, i, o) <= n, g = d && !h, g || (v = o), h) {
          if (o >= 1) {
            if (l.interval.end = v = 1, c = l, o > 1) {
              let p = {
                x: l.x + l.r * Bl(l.e),
                y: l.y + l.r * Xl(l.e)
              };
              l.e += z.angle({ x: l.x, y: l.y }, p, this.get(1));
            }
            break;
          }
          o = o + (o - i) / 2;
        } else
          o = y;
      while (!g && a++ < 100);
      if (a >= 100)
        break;
      c = c || l, r.push(c), i = v;
    } while (o < 1);
    return r;
  }
}
function Qe(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
  return i;
}
function Zl(e) {
  if (Array.isArray(e)) return e;
}
function Kl(e) {
  if (Array.isArray(e)) return Qe(e);
}
function Ql(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jl(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, o, a, s, u = [], f = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, n !== 0) for (; !(f = (i = a.call(r)).done) && (u.push(i.value), u.length !== n); f = !0) ;
    } catch (c) {
      l = !0, o = c;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return u;
  }
}
function tf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ef() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nf(e, n) {
  if (e == null) return {};
  var r, i, o = rf(e, n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++) r = a[i], n.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function rf(e, n) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (n.includes(i)) continue;
    r[i] = e[i];
  }
  return r;
}
function of(e, n) {
  return Zl(e) || Jl(e, n) || Hr(e, n) || tf();
}
function af(e) {
  return Kl(e) || Ql(e) || Hr(e) || ef();
}
function sf(e, n) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, n);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function uf(e) {
  var n = sf(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Hr(e, n) {
  if (e) {
    if (typeof e == "string") return Qe(e, n);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qe(e, n) : void 0;
  }
}
var lf = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = (n instanceof Array ? n.length ? n : [void 0] : [n]).map(function(u) {
    return {
      keyAccessor: u,
      isProp: !(u instanceof Function)
    };
  }), a = e.reduce(function(u, f) {
    var l = u, c = f;
    return o.forEach(function(h, d) {
      var g = h.keyAccessor, y = h.isProp, v;
      if (y) {
        var m = c, p = m[g], A = nf(m, [g].map(uf));
        v = p, c = A;
      } else
        v = g(c, d);
      d + 1 < o.length ? (l.hasOwnProperty(v) || (l[v] = {}), l = l[v]) : r ? (l.hasOwnProperty(v) || (l[v] = []), l[v].push(c)) : l[v] = c;
    }), u;
  }, {});
  r instanceof Function && function u(f) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    l === o.length ? Object.keys(f).forEach(function(c) {
      return f[c] = r(f[c]);
    }) : Object.values(f).forEach(function(c) {
      return u(c, l + 1);
    });
  }(a);
  var s = a;
  return i && (s = [], function u(f) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    l.length === o.length ? s.push({
      keys: l,
      vals: f
    }) : Object.entries(f).forEach(function(c) {
      var h = of(c, 2), d = h[0], g = h[1];
      return u(g, [].concat(af(l), [d]));
    });
  }(a), n instanceof Array && n.length === 0 && s.length === 1 && (s[0].keys = [])), s;
};
function ff(e, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(n).domain(e);
      break;
  }
  return this;
}
const Jn = Symbol("implicit");
function Vr() {
  var e = new Pn(), n = [], r = [], i = Jn;
  function o(a) {
    let s = e.get(a);
    if (s === void 0) {
      if (i !== Jn) return i;
      e.set(a, s = n.push(a) - 1);
    }
    return r[s % r.length];
  }
  return o.domain = function(a) {
    if (!arguments.length) return n.slice();
    n = [], e = new Pn();
    for (const s of a)
      e.has(s) || e.set(s, n.push(s) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (r = Array.from(a), o) : r.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (i = a, o) : i;
  }, o.copy = function() {
    return Vr(n, r).unknown(i);
  }, ff.apply(o, arguments), o;
}
function cf(e) {
  for (var n = e.length / 6 | 0, r = new Array(n), i = 0; i < n; ) r[i] = "#" + e.slice(i * 6, ++i * 6);
  return r;
}
const hf = cf("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), df = Vr(hf);
function tr(e, n, r) {
  !n || typeof r != "string" || e.filter((i) => !i[r]).forEach((i) => {
    i[r] = df(n(i));
  });
}
function gf({ nodes: e, links: n }, r, {
  nodeFilter: i = () => !0,
  onLoopError: o = (a) => {
    throw new Error(`Invalid DAG structure! Found cycle in node path: ${a.join(" -> ")}.`);
  }
} = {}) {
  const a = {};
  e.forEach((l) => a[r(l)] = { data: l, out: [], depth: -1, skip: !i(l) }), n.forEach(({ source: l, target: c }) => {
    const h = v(l), d = v(c);
    if (!a.hasOwnProperty(h)) throw new Error(`Missing source node with id: ${h}`);
    if (!a.hasOwnProperty(d)) throw new Error(`Missing target node with id: ${d}`);
    const g = a[h], y = a[d];
    g.out.push(y);
    function v(m) {
      return typeof m == "object" ? r(m) : m;
    }
  });
  const s = [];
  return f(Object.values(a)), Object.assign(
    {},
    ...Object.entries(a).filter(([, l]) => !l.skip).map(([l, c]) => ({ [l]: c.depth }))
  );
  function f(l, c = [], h = 0) {
    for (let d = 0, g = l.length; d < g; d++) {
      const y = l[d];
      if (c.indexOf(y) !== -1) {
        const v = [...c.slice(c.indexOf(y)), y].map((m) => r(m.data));
        s.some((m) => m.length === v.length && m.every((p, A) => p === v[A])) || (s.push(v), o(v));
        continue;
      }
      h > y.depth && (y.depth = h, f(y.out, [...c, y], h + (y.skip ? 0 : 1)));
    }
  }
}
const pf = 2, W = (e, n) => {
  var r;
  return (r = n == null ? void 0 : n.onNeedsRedraw) == null ? void 0 : r.call(n);
}, er = (e, n) => {
  if (!n.isShadow) {
    const r = q(n.linkDirectionalParticles);
    n.graphData.links.forEach((i) => {
      const o = Math.round(Math.abs(r(i)));
      o ? i.__photons = [...Array(o)].map(() => ({})) : delete i.__photons;
    });
  }
}, Se = Nr({
  props: {
    graphData: {
      default: {
        nodes: [],
        links: []
      },
      onChange(e, n) {
        n.engineRunning = !1, er(e, n);
      }
    },
    dagMode: { onChange(e, n) {
      !e && (n.graphData.nodes || []).forEach((r) => r.fx = r.fy = void 0);
    } },
    dagLevelDistance: {},
    dagNodeFilter: { default: (e) => !0 },
    onDagError: { triggerUpdate: !1 },
    nodeRelSize: { default: 4, triggerUpdate: !1, onChange: W },
    // area per val unit
    nodeId: { default: "id" },
    nodeVal: { default: "val", triggerUpdate: !1, onChange: W },
    nodeColor: { default: "color", triggerUpdate: !1, onChange: W },
    nodeAutoColorBy: {},
    nodeCanvasObject: { triggerUpdate: !1, onChange: W },
    nodeCanvasObjectMode: { default: () => "replace", triggerUpdate: !1, onChange: W },
    nodeVisibility: { default: !0, triggerUpdate: !1, onChange: W },
    linkSource: { default: "source" },
    linkTarget: { default: "target" },
    linkVisibility: { default: !0, triggerUpdate: !1, onChange: W },
    linkColor: { default: "color", triggerUpdate: !1, onChange: W },
    linkAutoColorBy: {},
    linkLineDash: { triggerUpdate: !1, onChange: W },
    linkWidth: { default: 1, triggerUpdate: !1, onChange: W },
    linkCurvature: { default: 0, triggerUpdate: !1, onChange: W },
    linkCanvasObject: { triggerUpdate: !1, onChange: W },
    linkCanvasObjectMode: { default: () => "replace", triggerUpdate: !1, onChange: W },
    linkDirectionalArrowLength: { default: 0, triggerUpdate: !1, onChange: W },
    linkDirectionalArrowColor: { triggerUpdate: !1, onChange: W },
    linkDirectionalArrowRelPos: { default: 0.5, triggerUpdate: !1, onChange: W },
    // value between 0<>1 indicating the relative pos along the (exposed) line
    linkDirectionalParticles: { default: 0, triggerUpdate: !1, onChange: er },
    // animate photons travelling in the link direction
    linkDirectionalParticleSpeed: { default: 0.01, triggerUpdate: !1 },
    // in link length ratio per frame
    linkDirectionalParticleWidth: { default: 4, triggerUpdate: !1 },
    linkDirectionalParticleColor: { triggerUpdate: !1 },
    globalScale: { default: 1, triggerUpdate: !1 },
    d3AlphaMin: { default: 0, triggerUpdate: !1 },
    d3AlphaDecay: { default: 0.0228, triggerUpdate: !1, onChange(e, n) {
      n.forceLayout.alphaDecay(e);
    } },
    d3AlphaTarget: { default: 0, triggerUpdate: !1, onChange(e, n) {
      n.forceLayout.alphaTarget(e);
    } },
    d3VelocityDecay: { default: 0.4, triggerUpdate: !1, onChange(e, n) {
      n.forceLayout.velocityDecay(e);
    } },
    warmupTicks: { default: 0, triggerUpdate: !1 },
    // how many times to tick the force engine at init before starting to render
    cooldownTicks: { default: 1 / 0, triggerUpdate: !1 },
    cooldownTime: { default: 15e3, triggerUpdate: !1 },
    // ms
    onUpdate: { default: () => {
    }, triggerUpdate: !1 },
    onFinishUpdate: { default: () => {
    }, triggerUpdate: !1 },
    onEngineTick: { default: () => {
    }, triggerUpdate: !1 },
    onEngineStop: { default: () => {
    }, triggerUpdate: !1 },
    onNeedsRedraw: { triggerUpdate: !1 },
    isShadow: { default: !1, triggerUpdate: !1 }
  },
  methods: {
    // Expose d3 forces for external manipulation
    d3Force: (e, n, r) => {
      if (r === void 0)
        return e.forceLayout.force(n);
      e.forceLayout.force(n, r);
    },
    d3ReheatSimulation: function(e) {
      return e.forceLayout.alpha(1), this.resetCountdown(), this;
    },
    // reset cooldown state
    resetCountdown: function(e) {
      return e.cntTicks = 0, e.startTickTime = /* @__PURE__ */ new Date(), e.engineRunning = !0, this;
    },
    isEngineRunning: (e) => !!e.engineRunning,
    tickFrame: function(e) {
      return !e.isShadow && n(), i(), !e.isShadow && o(), !e.isShadow && a(), r(), this;
      function n() {
        e.engineRunning && (++e.cntTicks > e.cooldownTicks || (/* @__PURE__ */ new Date()).getTime() - e.startTickTime > e.cooldownTime || e.d3AlphaMin > 0 && e.forceLayout.alpha() < e.d3AlphaMin ? (e.engineRunning = !1, e.onEngineStop()) : (e.forceLayout.tick(), e.onEngineTick()));
      }
      function r() {
        const s = q(e.nodeVisibility), u = q(e.nodeVal), f = q(e.nodeColor), l = q(e.nodeCanvasObjectMode), c = e.ctx, h = e.isShadow / e.globalScale, d = e.graphData.nodes.filter(s);
        c.save(), d.forEach((g) => {
          const y = l(g);
          if (e.nodeCanvasObject && (y === "before" || y === "replace") && (e.nodeCanvasObject(g, c, e.globalScale), y === "replace")) {
            c.restore();
            return;
          }
          const v = Math.sqrt(Math.max(0, u(g) || 1)) * e.nodeRelSize + h;
          c.beginPath(), c.arc(g.x, g.y, v, 0, 2 * Math.PI, !1), c.fillStyle = f(g) || "rgba(31, 120, 180, 0.92)", c.fill(), e.nodeCanvasObject && y === "after" && e.nodeCanvasObject(g, e.ctx, e.globalScale);
        }), c.restore();
      }
      function i() {
        const s = q(e.linkVisibility), u = q(e.linkColor), f = q(e.linkWidth), l = q(e.linkLineDash), c = q(e.linkCurvature), h = q(e.linkCanvasObjectMode), d = e.ctx, g = e.isShadow * 2, y = e.graphData.links.filter(s);
        y.forEach(M);
        let v = [], m = [], p = y;
        if (e.linkCanvasObject) {
          const _ = [], x = [];
          y.forEach(
            (w) => ({
              before: v,
              after: m,
              replace: _
            }[h(w)] || x).push(w)
          ), p = [...v, ...m, ...x], v = v.concat(_);
        }
        d.save(), v.forEach((_) => e.linkCanvasObject(_, d, e.globalScale)), d.restore();
        const A = lf(p, [u, f, l]);
        d.save(), Object.entries(A).forEach(([_, x]) => {
          const w = !_ || _ === "undefined" ? "rgba(0,0,0,0.15)" : _;
          Object.entries(x).forEach(([k, C]) => {
            const T = (k || 1) / e.globalScale + g;
            Object.entries(C).forEach(([N, O]) => {
              const I = l(O[0]);
              d.beginPath(), O.forEach((G) => {
                const b = G.source, P = G.target;
                if (!b || !P || !b.hasOwnProperty("x") || !P.hasOwnProperty("x")) return;
                d.moveTo(b.x, b.y);
                const S = G.__controlPoints;
                S ? d[S.length === 2 ? "quadraticCurveTo" : "bezierCurveTo"](...S, P.x, P.y) : d.lineTo(P.x, P.y);
              }), d.strokeStyle = w, d.lineWidth = T, d.setLineDash(I || []), d.stroke();
            });
          });
        }), d.restore(), d.save(), m.forEach((_) => e.linkCanvasObject(_, d, e.globalScale)), d.restore();
        function M(_) {
          const x = c(_);
          if (!x) {
            _.__controlPoints = null;
            return;
          }
          const w = _.source, k = _.target;
          if (!w || !k || !w.hasOwnProperty("x") || !k.hasOwnProperty("x")) return;
          const C = Math.sqrt(Math.pow(k.x - w.x, 2) + Math.pow(k.y - w.y, 2));
          if (C > 0) {
            const T = Math.atan2(k.y - w.y, k.x - w.x), N = C * x, O = {
              // control point
              x: (w.x + k.x) / 2 + N * Math.cos(T - Math.PI / 2),
              y: (w.y + k.y) / 2 + N * Math.sin(T - Math.PI / 2)
            };
            _.__controlPoints = [O.x, O.y];
          } else {
            const T = x * 70;
            _.__controlPoints = [k.x, k.y - T, k.x + T, k.y];
          }
        }
      }
      function o() {
        const f = q(e.linkDirectionalArrowLength), l = q(e.linkDirectionalArrowRelPos), c = q(e.linkVisibility), h = q(e.linkDirectionalArrowColor || e.linkColor), d = q(e.nodeVal), g = e.ctx;
        g.save(), e.graphData.links.filter(c).forEach((y) => {
          const v = f(y);
          if (!v || v < 0) return;
          const m = y.source, p = y.target;
          if (!m || !p || !m.hasOwnProperty("x") || !p.hasOwnProperty("x")) return;
          const A = Math.sqrt(Math.max(0, d(m) || 1)) * e.nodeRelSize, M = Math.sqrt(Math.max(0, d(p) || 1)) * e.nodeRelSize, _ = Math.min(1, Math.max(0, l(y))), x = h(y) || "rgba(0,0,0,0.28)", w = v / 1.6 / 2, k = y.__controlPoints && new H(m.x, m.y, ...y.__controlPoints, p.x, p.y), C = k ? (P) => k.get(P) : (P) => ({
            // straight line: interpolate linearly
            x: m.x + (p.x - m.x) * P || 0,
            y: m.y + (p.y - m.y) * P || 0
          }), T = k ? k.length() : Math.sqrt(Math.pow(p.x - m.x, 2) + Math.pow(p.y - m.y, 2)), N = A + v + (T - A - M - v) * _, O = C(N / T), I = C((N - v) / T), G = C((N - v * (1 - 0.2)) / T), b = Math.atan2(O.y - I.y, O.x - I.x) - Math.PI / 2;
          g.beginPath(), g.moveTo(O.x, O.y), g.lineTo(I.x + w * Math.cos(b), I.y + w * Math.sin(b)), g.lineTo(G.x, G.y), g.lineTo(I.x - w * Math.cos(b), I.y - w * Math.sin(b)), g.fillStyle = x, g.fill();
        }), g.restore();
      }
      function a() {
        const s = q(e.linkDirectionalParticles), u = q(e.linkDirectionalParticleSpeed), f = q(e.linkDirectionalParticleWidth), l = q(e.linkVisibility), c = q(e.linkDirectionalParticleColor || e.linkColor), h = e.ctx;
        h.save(), e.graphData.links.filter(l).forEach((d) => {
          const g = s(d);
          if (!d.hasOwnProperty("__photons") || !d.__photons.length) return;
          const y = d.source, v = d.target;
          if (!y || !v || !y.hasOwnProperty("x") || !v.hasOwnProperty("x")) return;
          const m = u(d), p = d.__photons || [], A = Math.max(0, f(d) / 2) / Math.sqrt(e.globalScale), M = c(d) || "rgba(0,0,0,0.28)";
          h.fillStyle = M;
          const _ = d.__controlPoints ? new H(y.x, y.y, ...d.__controlPoints, v.x, v.y) : null;
          let x = 0, w = !1;
          p.forEach((k) => {
            const C = !!k.__singleHop;
            if (k.hasOwnProperty("__progressRatio") || (k.__progressRatio = C ? 0 : x / g), !C && x++, k.__progressRatio += m, k.__progressRatio >= 1)
              if (!C)
                k.__progressRatio = k.__progressRatio % 1;
              else {
                w = !0;
                return;
              }
            const T = k.__progressRatio, N = _ ? _.get(T) : {
              // straight line: interpolate linearly
              x: y.x + (v.x - y.x) * T || 0,
              y: y.y + (v.y - y.y) * T || 0
            };
            h.beginPath(), h.arc(N.x, N.y, A, 0, 2 * Math.PI, !1), h.fill();
          }), w && (d.__photons = d.__photons.filter((k) => !k.__singleHop || k.__progressRatio <= 1));
        }), h.restore();
      }
    },
    emitParticle: function(e, n) {
      return n && (!n.__photons && (n.__photons = []), n.__photons.push({ __singleHop: !0 })), this;
    }
  },
  stateInit: () => ({
    forceLayout: Ll().force("link", Nl()).force("charge", jl()).force("center", Du()).force("dagRadial", null).stop(),
    engineRunning: !1
  }),
  init(e, n) {
    n.ctx = e;
  },
  update(e) {
    e.engineRunning = !1, e.onUpdate(), e.nodeAutoColorBy !== null && tr(e.graphData.nodes, q(e.nodeAutoColorBy), e.nodeColor), e.linkAutoColorBy !== null && tr(e.graphData.links, q(e.linkAutoColorBy), e.linkColor), e.graphData.links.forEach((a) => {
      a.source = a[e.linkSource], a.target = a[e.linkTarget];
    }), e.forceLayout.stop().alpha(1).nodes(e.graphData.nodes);
    const n = e.forceLayout.force("link");
    n && n.id((a) => a[e.nodeId]).links(e.graphData.links);
    const r = e.dagMode && gf(
      e.graphData,
      (a) => a[e.nodeId],
      {
        nodeFilter: e.dagNodeFilter,
        onLoopError: e.onDagError || void 0
      }
    ), i = Math.max(...Object.values(r || [])), o = e.dagLevelDistance || e.graphData.nodes.length / (i || 1) * pf * (["radialin", "radialout"].indexOf(e.dagMode) !== -1 ? 0.7 : 1);
    if (e.dagMode) {
      const a = (f, l) => (c) => f ? (r[c[e.nodeId]] - i / 2) * o * (l ? -1 : 1) : void 0, s = a(["lr", "rl"].indexOf(e.dagMode) !== -1, e.dagMode === "rl"), u = a(["td", "bu"].indexOf(e.dagMode) !== -1, e.dagMode === "bu");
      e.graphData.nodes.filter(e.dagNodeFilter).forEach((f) => {
        f.fx = s(f), f.fy = u(f);
      });
    }
    e.forceLayout.force(
      "dagRadial",
      ["radialin", "radialout"].indexOf(e.dagMode) !== -1 ? ql((a) => {
        const s = r[a[e.nodeId]] || -1;
        return (e.dagMode === "radialin" ? i - s : s) * o;
      }).strength((a) => e.dagNodeFilter(a) ? 1 : 0) : null
    );
    for (let a = 0; a < e.warmupTicks && !(e.d3AlphaMin > 0 && e.forceLayout.alpha() < e.d3AlphaMin); a++)
      e.forceLayout.tick();
    this.resetCountdown(), e.onFinishUpdate();
  }
});
function Gr(e, n) {
  const r = e, i = new n();
  return i._destructor && i._destructor(), {
    linkProp: (o) => ({
      default: i[o](),
      onChange(a, s) {
        r.forEach((u) => s[u][o](a));
      },
      triggerUpdate: !1
    }),
    linkMethod: (o) => (a, ...s) => {
      const u = [];
      return r.forEach((f) => {
        const l = a[f], c = l[o](...s);
        c !== l && u.push(c);
      }), u.length ? u[0] : this;
    }
  };
}
const yf = 800, _f = 4, U = Gr(["forceGraph"], Se), zt = Gr(["forceGraph", "shadowGraph"], Se), xf = {
  nodeColor: U.linkProp("nodeColor"),
  nodeAutoColorBy: U.linkProp("nodeAutoColorBy"),
  nodeCanvasObject: U.linkProp("nodeCanvasObject"),
  nodeCanvasObjectMode: U.linkProp("nodeCanvasObjectMode"),
  linkColor: U.linkProp("linkColor"),
  linkAutoColorBy: U.linkProp("linkAutoColorBy"),
  linkLineDash: U.linkProp("linkLineDash"),
  linkWidth: U.linkProp("linkWidth"),
  linkCanvasObject: U.linkProp("linkCanvasObject"),
  linkCanvasObjectMode: U.linkProp("linkCanvasObjectMode"),
  linkDirectionalArrowLength: U.linkProp("linkDirectionalArrowLength"),
  linkDirectionalArrowColor: U.linkProp("linkDirectionalArrowColor"),
  linkDirectionalArrowRelPos: U.linkProp("linkDirectionalArrowRelPos"),
  linkDirectionalParticles: U.linkProp("linkDirectionalParticles"),
  linkDirectionalParticleSpeed: U.linkProp("linkDirectionalParticleSpeed"),
  linkDirectionalParticleWidth: U.linkProp("linkDirectionalParticleWidth"),
  linkDirectionalParticleColor: U.linkProp("linkDirectionalParticleColor"),
  dagMode: U.linkProp("dagMode"),
  dagLevelDistance: U.linkProp("dagLevelDistance"),
  dagNodeFilter: U.linkProp("dagNodeFilter"),
  onDagError: U.linkProp("onDagError"),
  d3AlphaMin: U.linkProp("d3AlphaMin"),
  d3AlphaDecay: U.linkProp("d3AlphaDecay"),
  d3VelocityDecay: U.linkProp("d3VelocityDecay"),
  warmupTicks: U.linkProp("warmupTicks"),
  cooldownTicks: U.linkProp("cooldownTicks"),
  cooldownTime: U.linkProp("cooldownTime"),
  onEngineTick: U.linkProp("onEngineTick"),
  onEngineStop: U.linkProp("onEngineStop"),
  ///
  nodeRelSize: zt.linkProp("nodeRelSize"),
  nodeId: zt.linkProp("nodeId"),
  nodeVal: zt.linkProp("nodeVal"),
  nodeVisibility: zt.linkProp("nodeVisibility"),
  linkSource: zt.linkProp("linkSource"),
  linkTarget: zt.linkProp("linkTarget"),
  linkVisibility: zt.linkProp("linkVisibility"),
  linkCurvature: zt.linkProp("linkCurvature")
}, vf = {
  d3Force: U.linkMethod("d3Force"),
  d3ReheatSimulation: U.linkMethod("d3ReheatSimulation"),
  emitParticle: U.linkMethod("emitParticle")
};
function je(e) {
  if (e.canvas) {
    let n = e.canvas.width, r = e.canvas.height;
    n === 300 && r === 150 && (n = r = 0);
    const i = window.devicePixelRatio;
    n /= i, r /= i, [e.canvas, e.shadowCanvas].forEach((a) => {
      a.style.width = `${e.width}px`, a.style.height = `${e.height}px`, a.width = e.width * i, a.height = e.height * i, !n && !r && a.getContext("2d").scale(i, i);
    });
    const o = ct(e.canvas).k;
    e.zoom.translateBy(
      e.zoom.__baseElem,
      (e.width - n) / 2 / o,
      (e.height - r) / 2 / o
    ), e.needsRedraw = !0;
  }
}
function Br(e) {
  const n = window.devicePixelRatio;
  e.setTransform(n, 0, 0, n, 0, 0);
}
function nr(e, n, r) {
  e.save(), Br(e), e.clearRect(0, 0, n, r), e.restore();
}
const bf = Nr({
  props: {
    width: { default: window.innerWidth, onChange: (e, n) => je(n), triggerUpdate: !1 },
    height: { default: window.innerHeight, onChange: (e, n) => je(n), triggerUpdate: !1 },
    graphData: {
      default: { nodes: [], links: [] },
      onChange: (e, n) => {
        [{ type: "Node", objs: e.nodes }, { type: "Link", objs: e.links }].forEach(r), n.forceGraph.graphData(e), n.shadowGraph.graphData(e);
        function r({ type: i, objs: o }) {
          o.filter((a) => {
            if (!a.hasOwnProperty("__indexColor")) return !0;
            const s = n.colorTracker.lookup(a.__indexColor);
            return !s || !s.hasOwnProperty("d") || s.d !== a;
          }).forEach((a) => {
            a.__indexColor = n.colorTracker.register({ type: i, d: a });
          });
        }
      },
      triggerUpdate: !1
    },
    backgroundColor: { onChange(e, n) {
      n.canvas && e && (n.canvas.style.background = e);
    }, triggerUpdate: !1 },
    nodeLabel: { default: "name", triggerUpdate: !1 },
    nodePointerAreaPaint: { onChange(e, n) {
      n.shadowGraph.nodeCanvasObject(
        e ? (r, i, o) => e(r, r.__indexColor, i, o) : null
      ), n.flushShadowCanvas && n.flushShadowCanvas();
    }, triggerUpdate: !1 },
    linkPointerAreaPaint: { onChange(e, n) {
      n.shadowGraph.linkCanvasObject(
        e ? (r, i, o) => e(r, r.__indexColor, i, o) : null
      ), n.flushShadowCanvas && n.flushShadowCanvas();
    }, triggerUpdate: !1 },
    linkLabel: { default: "name", triggerUpdate: !1 },
    linkHoverPrecision: { default: 4, triggerUpdate: !1 },
    minZoom: { default: 0.01, onChange(e, n) {
      n.zoom.scaleExtent([e, n.zoom.scaleExtent()[1]]);
    }, triggerUpdate: !1 },
    maxZoom: { default: 1e3, onChange(e, n) {
      n.zoom.scaleExtent([n.zoom.scaleExtent()[0], e]);
    }, triggerUpdate: !1 },
    enableNodeDrag: { default: !0, triggerUpdate: !1 },
    enableZoomInteraction: { default: !0, triggerUpdate: !1 },
    enablePanInteraction: { default: !0, triggerUpdate: !1 },
    enableZoomPanInteraction: { default: !0, triggerUpdate: !1 },
    // to be deprecated
    enablePointerInteraction: { default: !0, onChange(e, n) {
      n.hoverObj = null;
    }, triggerUpdate: !1 },
    autoPauseRedraw: { default: !0, triggerUpdate: !1 },
    onNodeDrag: { default: () => {
    }, triggerUpdate: !1 },
    onNodeDragEnd: { default: () => {
    }, triggerUpdate: !1 },
    onNodeClick: { triggerUpdate: !1 },
    onNodeRightClick: { triggerUpdate: !1 },
    onNodeHover: { triggerUpdate: !1 },
    onLinkClick: { triggerUpdate: !1 },
    onLinkRightClick: { triggerUpdate: !1 },
    onLinkHover: { triggerUpdate: !1 },
    onBackgroundClick: { triggerUpdate: !1 },
    onBackgroundRightClick: { triggerUpdate: !1 },
    onZoom: { triggerUpdate: !1 },
    onZoomEnd: { triggerUpdate: !1 },
    onRenderFramePre: { triggerUpdate: !1 },
    onRenderFramePost: { triggerUpdate: !1 },
    ...xf
  },
  aliases: {
    // Prop names supported for backwards compatibility
    stopAnimation: "pauseAnimation"
  },
  methods: {
    graph2ScreenCoords: function(e, n, r) {
      const i = ct(e.canvas);
      return { x: n * i.k + i.x, y: r * i.k + i.y };
    },
    screen2GraphCoords: function(e, n, r) {
      const i = ct(e.canvas);
      return { x: (n - i.x) / i.k, y: (r - i.y) / i.k };
    },
    centerAt: function(e, n, r, i) {
      if (!e.canvas) return null;
      if (n !== void 0 || r !== void 0) {
        const s = Object.assign(
          {},
          n !== void 0 ? { x: n } : {},
          r !== void 0 ? { y: r } : {}
        );
        return i ? new Dn(o()).to(s, i).easing(Rt.Quadratic.Out).onUpdate(a).start() : a(s), this;
      }
      return o();
      function o() {
        const s = ct(e.canvas);
        return { x: (e.width / 2 - s.x) / s.k, y: (e.height / 2 - s.y) / s.k };
      }
      function a({ x: s, y: u }) {
        e.zoom.translateTo(
          e.zoom.__baseElem,
          s === void 0 ? o().x : s,
          u === void 0 ? o().y : u
        ), e.needsRedraw = !0;
      }
    },
    zoom: function(e, n, r) {
      if (!e.canvas) return null;
      if (n !== void 0)
        return r ? new Dn({ k: i() }).to({ k: n }, r).easing(Rt.Quadratic.Out).onUpdate(({ k: a }) => o(a)).start() : o(n), this;
      return i();
      function i() {
        return ct(e.canvas).k;
      }
      function o(a) {
        e.zoom.scaleTo(e.zoom.__baseElem, a), e.needsRedraw = !0;
      }
    },
    zoomToFit: function(e, n = 0, r = 10, ...i) {
      const o = this.getGraphBbox(...i);
      if (o) {
        const a = {
          x: (o.x[0] + o.x[1]) / 2,
          y: (o.y[0] + o.y[1]) / 2
        }, s = Math.max(
          1e-12,
          Math.min(
            1e12,
            (e.width - r * 2) / (o.x[1] - o.x[0]),
            (e.height - r * 2) / (o.y[1] - o.y[0])
          )
        );
        this.centerAt(a.x, a.y, n), this.zoom(s, n);
      }
      return this;
    },
    getGraphBbox: function(e, n = () => !0) {
      const r = q(e.nodeVal), i = (a) => Math.sqrt(Math.max(0, r(a) || 1)) * e.nodeRelSize, o = e.graphData.nodes.filter(n).map((a) => ({
        x: a.x,
        y: a.y,
        r: i(a)
      }));
      return o.length ? {
        x: [
          Nn(o, ({ x: a, r: s }) => a - s),
          En(o, ({ x: a, r: s }) => a + s)
        ],
        y: [
          Nn(o, ({ y: a, r: s }) => a - s),
          En(o, ({ y: a, r: s }) => a + s)
        ]
      } : null;
    },
    pauseAnimation: function(e) {
      return e.animationFrameRequestId && (cancelAnimationFrame(e.animationFrameRequestId), e.animationFrameRequestId = null), this;
    },
    resumeAnimation: function(e) {
      return e.animationFrameRequestId || this._animationCycle(), this;
    },
    _destructor: function() {
      this.pauseAnimation(), this.graphData({ nodes: [], links: [] });
    },
    ...vf
  },
  stateInit: () => ({
    lastSetZoom: 1,
    zoom: Ss(),
    forceGraph: Se(),
    shadowGraph: Se().cooldownTicks(0).nodeColor("__indexColor").linkColor("__indexColor").isShadow(!0),
    colorTracker: new Iu()
    // indexed objects for rgb lookup
  }),
  init: function(e, n) {
    e.innerHTML = "";
    const r = document.createElement("div");
    r.classList.add("force-graph-container"), r.style.position = "relative", e.appendChild(r), n.canvas = document.createElement("canvas"), n.backgroundColor && (n.canvas.style.background = n.backgroundColor), r.appendChild(n.canvas), n.shadowCanvas = document.createElement("canvas");
    const i = n.canvas.getContext("2d"), o = n.shadowCanvas.getContext("2d", { willReadFrequently: !0 }), a = { x: -1e12, y: -1e12 }, s = () => {
      let l = null;
      const c = window.devicePixelRatio, h = a.x > 0 && a.y > 0 ? o.getImageData(a.x * c, a.y * c, 1, 1) : null;
      return h && (l = n.colorTracker.lookup(h.data)), l;
    };
    at(n.canvas).call(
      $o().subject(() => {
        if (!n.enableNodeDrag)
          return null;
        const l = s();
        return l && l.type === "Node" ? l.d : null;
      }).on("start", (l) => {
        const c = l.subject;
        c.__initialDragPos = { x: c.x, y: c.y, fx: c.fx, fy: c.fy }, l.active || (c.fx = c.x, c.fy = c.y), n.canvas.classList.add("grabbable");
      }).on("drag", (l) => {
        const c = l.subject, h = c.__initialDragPos, d = l, g = ct(n.canvas).k, y = {
          x: h.x + (d.x - h.x) / g - c.x,
          y: h.y + (d.y - h.y) / g - c.y
        };
        ["x", "y"].forEach((v) => c[`f${v}`] = c[v] = h[v] + (d[v] - h[v]) / g), n.forceGraph.d3AlphaTarget(0.3).resetCountdown(), n.isPointerDragging = !0, c.__dragged = !0, n.onNodeDrag(c, y);
      }).on("end", (l) => {
        const c = l.subject, h = c.__initialDragPos, d = { x: c.x - h.x, y: c.y - h.y };
        h.fx === void 0 && (c.fx = void 0), h.fy === void 0 && (c.fy = void 0), delete c.__initialDragPos, n.forceGraph.d3AlphaTarget() && n.forceGraph.d3AlphaTarget(0).resetCountdown(), n.canvas.classList.remove("grabbable"), n.isPointerDragging = !1, c.__dragged && (delete c.__dragged, n.onNodeDragEnd(c, d));
      })
    ), n.zoom(n.zoom.__baseElem = at(n.canvas)), n.zoom.__baseElem.on("dblclick.zoom", null), n.zoom.filter(
      (l) => (
        // disable zoom interaction
        !l.button && n.enableZoomPanInteraction && (n.enableZoomInteraction || l.type !== "wheel") && (n.enablePanInteraction || l.type === "wheel")
      )
    ).on("zoom", (l) => {
      const c = l.transform;
      [i, o].forEach((h) => {
        Br(h), h.translate(c.x, c.y), h.scale(c.k, c.k);
      }), n.onZoom && n.onZoom({ ...c, ...this.centerAt() }), n.needsRedraw = !0;
    }).on("end", (l) => n.onZoomEnd && n.onZoomEnd({ ...l.transform, ...this.centerAt() })), je(n), n.forceGraph.onNeedsRedraw(() => n.needsRedraw = !0).onFinishUpdate(() => {
      ct(n.canvas).k === n.lastSetZoom && n.graphData.nodes.length && (n.zoom.scaleTo(
        n.zoom.__baseElem,
        n.lastSetZoom = _f / Math.cbrt(n.graphData.nodes.length)
      ), n.needsRedraw = !0);
    });
    const u = document.createElement("div");
    u.classList.add("graph-tooltip"), r.appendChild(u), ["pointermove", "pointerdown"].forEach(
      (l) => r.addEventListener(l, (c) => {
        l === "pointerdown" && (n.isPointerPressed = !0, n.pointerDownEvent = c), !n.isPointerDragging && c.type === "pointermove" && n.onBackgroundClick && (c.pressure > 0 || n.isPointerPressed) && (c.pointerType !== "touch" || c.movementX === void 0 || [c.movementX, c.movementY].some((g) => Math.abs(g) > 1)) && (n.isPointerDragging = !0);
        const h = d(r);
        a.x = c.pageX - h.left, a.y = c.pageY - h.top, u.style.top = `${a.y}px`, u.style.left = `${a.x}px`, u.style.transform = `translate(-${a.x / n.width * 100}%, ${// flip to above if near bottom
        n.height - a.y < 100 ? "calc(-100% - 8px)" : "21px"})`;
        function d(g) {
          const y = g.getBoundingClientRect(), v = window.pageXOffset || document.documentElement.scrollLeft, m = window.pageYOffset || document.documentElement.scrollTop;
          return { top: y.top + m, left: y.left + v };
        }
      }, { passive: !0 })
    ), r.addEventListener("pointerup", (l) => {
      if (n.isPointerPressed = !1, n.isPointerDragging) {
        n.isPointerDragging = !1;
        return;
      }
      const c = [l, n.pointerDownEvent];
      requestAnimationFrame(() => {
        if (l.button === 0)
          if (n.hoverObj) {
            const h = n[`on${n.hoverObj.type}Click`];
            h && h(n.hoverObj.d, ...c);
          } else
            n.onBackgroundClick && n.onBackgroundClick(...c);
        if (l.button === 2)
          if (n.hoverObj) {
            const h = n[`on${n.hoverObj.type}RightClick`];
            h && h(n.hoverObj.d, ...c);
          } else
            n.onBackgroundRightClick && n.onBackgroundRightClick(...c);
      });
    }, { passive: !0 }), r.addEventListener("contextmenu", (l) => !n.onBackgroundRightClick && !n.onNodeRightClick && !n.onLinkRightClick ? !0 : (l.preventDefault(), !1)), n.forceGraph(i), n.shadowGraph(o);
    const f = ru(() => {
      nr(o, n.width, n.height), n.shadowGraph.linkWidth((c) => q(n.linkWidth)(c) + n.linkHoverPrecision);
      const l = ct(n.canvas);
      n.shadowGraph.globalScale(l.k).tickFrame();
    }, yf);
    n.flushShadowCanvas = f.flush, (this._animationCycle = function l() {
      const c = !n.autoPauseRedraw || !!n.needsRedraw || n.forceGraph.isEngineRunning() || n.graphData.links.some((h) => h.__photons && h.__photons.length);
      if (n.needsRedraw = !1, n.enablePointerInteraction) {
        const h = n.isPointerDragging ? null : s();
        if (h !== n.hoverObj) {
          const d = n.hoverObj, g = d ? d.type : null, y = h ? h.type : null;
          if (g && g !== y) {
            const m = n[`on${g}Hover`];
            m && m(null, d.d);
          }
          if (y) {
            const m = n[`on${y}Hover`];
            m && m(h.d, g === y ? d.d : null);
          }
          const v = h && q(n[`${h.type.toLowerCase()}Label`])(h.d) || "";
          u.style.visibility = v ? "visible" : "hidden", u.innerHTML = v, n.canvas.classList[h && n[`on${y}Click`] || !h && n.onBackgroundClick ? "add" : "remove"]("clickable"), n.hoverObj = h;
        }
        c && f();
      }
      if (c) {
        nr(i, n.width, n.height);
        const h = ct(n.canvas).k;
        n.onRenderFramePre && n.onRenderFramePre(i, h), n.forceGraph.globalScale(h).tickFrame(), n.onRenderFramePost && n.onRenderFramePost(i, h);
      }
      au(), n.animationFrameRequestId = requestAnimationFrame(l);
    })();
  },
  update: function(n) {
  }
});
export {
  bf as default
};
