/* Vault Graph -- built by scripts/build-plugin.mjs. Source: plugin/ and src/. */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// vendor/graphology.umd.min.js
var require_graphology_umd_min = __commonJS({
  "vendor/graphology.umd.min.js"(exports, module2) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).graphology = e();
    }(exports, function() {
      "use strict";
      function t(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      function e(t2, e2, n2) {
        return (e2 = function(t3) {
          var e3 = function(t4, e4) {
            if ("object" != typeof t4 || !t4) return t4;
            var n3 = t4[Symbol.toPrimitive];
            if (void 0 !== n3) {
              var r2 = n3.call(t4, e4 || "default");
              if ("object" != typeof r2) return r2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" == typeof e3 ? e3 : e3 + "";
        }(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      function n(t2) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, n(t2);
      }
      function r(t2, e2) {
        t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, o(t2, e2);
      }
      function i() {
        try {
          var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t3) {
        }
        return (i = function() {
          return !!t2;
        })();
      }
      function o(t2, e2) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
          return t3.__proto__ = e3, t3;
        }, o(t2, e2);
      }
      function a(t2) {
        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        }, a(t2);
      }
      function c(t2) {
        var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return c = function(t3) {
          if (null === t3 || !function(t4) {
            try {
              return -1 !== Function.toString.call(t4).indexOf("[native code]");
            } catch (e3) {
              return "function" == typeof t4;
            }
          }(t3)) return t3;
          if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e2) {
            if (e2.has(t3)) return e2.get(t3);
            e2.set(t3, r2);
          }
          function r2() {
            return function(t4, e3, n2) {
              if (i()) return Reflect.construct.apply(null, arguments);
              var r3 = [null];
              r3.push.apply(r3, e3);
              var a2 = new (t4.bind.apply(t4, r3))();
              return n2 && o(a2, n2.prototype), a2;
            }(t3, arguments, n(this).constructor);
          }
          return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
        }, c(t2);
      }
      var u = function() {
        for (var t2 = arguments[0], e2 = 1, n2 = arguments.length; e2 < n2; e2++) if (arguments[e2]) for (var r2 in arguments[e2]) t2[r2] = arguments[e2][r2];
        return t2;
      };
      function d(t2, e2, n2, r2) {
        var i2 = t2._nodes.get(e2), o2 = null;
        return i2 ? o2 = "mixed" === r2 ? i2.out && i2.out[n2] || i2.undirected && i2.undirected[n2] : "directed" === r2 ? i2.out && i2.out[n2] : i2.undirected && i2.undirected[n2] : o2;
      }
      function s(t2) {
        return "object" === a(t2) && null !== t2;
      }
      function h(t2) {
        var e2;
        for (e2 in t2) return false;
        return true;
      }
      function p(t2, e2, n2) {
        Object.defineProperty(t2, e2, { enumerable: false, configurable: false, writable: true, value: n2 });
      }
      function f(t2, e2, n2) {
        var r2 = { enumerable: true, configurable: true };
        "function" == typeof n2 ? r2.get = n2 : (r2.value = n2, r2.writable = false), Object.defineProperty(t2, e2, r2);
      }
      function l(t2) {
        return !!s(t2) && !(t2.attributes && !Array.isArray(t2.attributes));
      }
      function g() {
        var t2 = arguments, n2 = null, r2 = -1;
        return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          for (var e2 = null; ; ) {
            if (null === n2) {
              if (++r2 >= t2.length) return { done: true };
              n2 = t2[r2][Symbol.iterator]();
            }
            if (!(e2 = n2.next()).done) break;
            n2 = null;
          }
          return e2;
        });
      }
      function y() {
        return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          return { done: true };
        });
      }
      "function" == typeof Object.assign && (u = Object.assign);
      var w, v = { exports: {} }, b = "object" == typeof Reflect ? Reflect : null, m = b && "function" == typeof b.apply ? b.apply : function(t2, e2, n2) {
        return Function.prototype.apply.call(t2, e2, n2);
      };
      w = b && "function" == typeof b.ownKeys ? b.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
        return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
      } : function(t2) {
        return Object.getOwnPropertyNames(t2);
      };
      var k = Number.isNaN || function(t2) {
        return t2 != t2;
      };
      function _() {
        _.init.call(this);
      }
      v.exports = _, v.exports.once = function(t2, e2) {
        return new Promise(function(n2, r2) {
          function i2(n3) {
            t2.removeListener(e2, o2), r2(n3);
          }
          function o2() {
            "function" == typeof t2.removeListener && t2.removeListener("error", i2), n2([].slice.call(arguments));
          }
          j(t2, e2, o2, { once: true }), "error" !== e2 && function(t3, e3, n3) {
            "function" == typeof t3.on && j(t3, "error", e3, n3);
          }(t2, i2, { once: true });
        });
      }, _.EventEmitter = _, _.prototype._events = void 0, _.prototype._eventsCount = 0, _.prototype._maxListeners = void 0;
      var G = 10;
      function x(t2) {
        if ("function" != typeof t2) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
      }
      function E(t2) {
        return void 0 === t2._maxListeners ? _.defaultMaxListeners : t2._maxListeners;
      }
      function A(t2, e2, n2, r2) {
        var i2, o2, a2, c2;
        if (x(n2), void 0 === (o2 = t2._events) ? (o2 = t2._events = /* @__PURE__ */ Object.create(null), t2._eventsCount = 0) : (void 0 !== o2.newListener && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), o2 = t2._events), a2 = o2[e2]), void 0 === a2) a2 = o2[e2] = n2, ++t2._eventsCount;
        else if ("function" == typeof a2 ? a2 = o2[e2] = r2 ? [n2, a2] : [a2, n2] : r2 ? a2.unshift(n2) : a2.push(n2), (i2 = E(t2)) > 0 && a2.length > i2 && !a2.warned) {
          a2.warned = true;
          var u2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a2.length, c2 = u2, console && console.warn && console.warn(c2);
        }
        return t2;
      }
      function L() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function S(t2, e2, n2) {
        var r2 = { fired: false, wrapFn: void 0, target: t2, type: e2, listener: n2 }, i2 = L.bind(r2);
        return i2.listener = n2, r2.wrapFn = i2, i2;
      }
      function D(t2, e2, n2) {
        var r2 = t2._events;
        if (void 0 === r2) return [];
        var i2 = r2[e2];
        return void 0 === i2 ? [] : "function" == typeof i2 ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(t3) {
          for (var e3 = new Array(t3.length), n3 = 0; n3 < e3.length; ++n3) e3[n3] = t3[n3].listener || t3[n3];
          return e3;
        }(i2) : N(i2, i2.length);
      }
      function U(t2) {
        var e2 = this._events;
        if (void 0 !== e2) {
          var n2 = e2[t2];
          if ("function" == typeof n2) return 1;
          if (void 0 !== n2) return n2.length;
        }
        return 0;
      }
      function N(t2, e2) {
        for (var n2 = new Array(e2), r2 = 0; r2 < e2; ++r2) n2[r2] = t2[r2];
        return n2;
      }
      function j(t2, e2, n2, r2) {
        if ("function" == typeof t2.on) r2.once ? t2.once(e2, n2) : t2.on(e2, n2);
        else {
          if ("function" != typeof t2.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
          t2.addEventListener(e2, function i2(o2) {
            r2.once && t2.removeEventListener(e2, i2), n2(o2);
          });
        }
      }
      Object.defineProperty(_, "defaultMaxListeners", { enumerable: true, get: function() {
        return G;
      }, set: function(t2) {
        if ("number" != typeof t2 || t2 < 0 || k(t2)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
        G = t2;
      } }), _.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, _.prototype.setMaxListeners = function(t2) {
        if ("number" != typeof t2 || t2 < 0 || k(t2)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
        return this._maxListeners = t2, this;
      }, _.prototype.getMaxListeners = function() {
        return E(this);
      }, _.prototype.emit = function(t2) {
        for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2.push(arguments[n2]);
        var r2 = "error" === t2, i2 = this._events;
        if (void 0 !== i2) r2 = r2 && void 0 === i2.error;
        else if (!r2) return false;
        if (r2) {
          var o2;
          if (e2.length > 0 && (o2 = e2[0]), o2 instanceof Error) throw o2;
          var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
          throw a2.context = o2, a2;
        }
        var c2 = i2[t2];
        if (void 0 === c2) return false;
        if ("function" == typeof c2) m(c2, this, e2);
        else {
          var u2 = c2.length, d2 = N(c2, u2);
          for (n2 = 0; n2 < u2; ++n2) m(d2[n2], this, e2);
        }
        return true;
      }, _.prototype.addListener = function(t2, e2) {
        return A(this, t2, e2, false);
      }, _.prototype.on = _.prototype.addListener, _.prototype.prependListener = function(t2, e2) {
        return A(this, t2, e2, true);
      }, _.prototype.once = function(t2, e2) {
        return x(e2), this.on(t2, S(this, t2, e2)), this;
      }, _.prototype.prependOnceListener = function(t2, e2) {
        return x(e2), this.prependListener(t2, S(this, t2, e2)), this;
      }, _.prototype.removeListener = function(t2, e2) {
        var n2, r2, i2, o2, a2;
        if (x(e2), void 0 === (r2 = this._events)) return this;
        if (void 0 === (n2 = r2[t2])) return this;
        if (n2 === e2 || n2.listener === e2) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
        else if ("function" != typeof n2) {
          for (i2 = -1, o2 = n2.length - 1; o2 >= 0; o2--) if (n2[o2] === e2 || n2[o2].listener === e2) {
            a2 = n2[o2].listener, i2 = o2;
            break;
          }
          if (i2 < 0) return this;
          0 === i2 ? n2.shift() : function(t3, e3) {
            for (; e3 + 1 < t3.length; e3++) t3[e3] = t3[e3 + 1];
            t3.pop();
          }(n2, i2), 1 === n2.length && (r2[t2] = n2[0]), void 0 !== r2.removeListener && this.emit("removeListener", t2, a2 || e2);
        }
        return this;
      }, _.prototype.off = _.prototype.removeListener, _.prototype.removeAllListeners = function(t2) {
        var e2, n2, r2;
        if (void 0 === (n2 = this._events)) return this;
        if (void 0 === n2.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[t2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[t2]), this;
        if (0 === arguments.length) {
          var i2, o2 = Object.keys(n2);
          for (r2 = 0; r2 < o2.length; ++r2) "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e2 = n2[t2])) this.removeListener(t2, e2);
        else if (void 0 !== e2) for (r2 = e2.length - 1; r2 >= 0; r2--) this.removeListener(t2, e2[r2]);
        return this;
      }, _.prototype.listeners = function(t2) {
        return D(this, t2, true);
      }, _.prototype.rawListeners = function(t2) {
        return D(this, t2, false);
      }, _.listenerCount = function(t2, e2) {
        return "function" == typeof t2.listenerCount ? t2.listenerCount(e2) : U.call(t2, e2);
      }, _.prototype.listenerCount = U, _.prototype.eventNames = function() {
        return this._eventsCount > 0 ? w(this._events) : [];
      };
      var O = function(t2) {
        function e2(e3) {
          var n2;
          return (n2 = t2.call(this) || this).name = "GraphError", n2.message = e3, n2;
        }
        return r(e2, t2), e2;
      }(c(Error)), C = function(e2) {
        function n2(r2) {
          var i2;
          return (i2 = e2.call(this, r2) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(t(i2), n2.prototype.constructor), i2;
        }
        return r(n2, e2), n2;
      }(O), M = function(e2) {
        function n2(r2) {
          var i2;
          return (i2 = e2.call(this, r2) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(t(i2), n2.prototype.constructor), i2;
        }
        return r(n2, e2), n2;
      }(O), z = function(e2) {
        function n2(r2) {
          var i2;
          return (i2 = e2.call(this, r2) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(t(i2), n2.prototype.constructor), i2;
        }
        return r(n2, e2), n2;
      }(O);
      function W(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function P(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function K(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function T(t2, e2, n2, r2, i2) {
        this.key = e2, this.attributes = i2, this.undirected = t2, this.source = n2, this.target = r2;
      }
      W.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
      }, P.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
      }, K.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
      }, T.prototype.attach = function() {
        var t2 = "out", e2 = "in";
        this.undirected && (t2 = e2 = "undirected");
        var n2 = this.source.key, r2 = this.target.key;
        this.source[t2][r2] = this, this.undirected && n2 === r2 || (this.target[e2][n2] = this);
      }, T.prototype.attachMulti = function() {
        var t2 = "out", e2 = "in", n2 = this.source.key, r2 = this.target.key;
        this.undirected && (t2 = e2 = "undirected");
        var i2 = this.source[t2], o2 = i2[r2];
        if (void 0 === o2) return i2[r2] = this, void (this.undirected && n2 === r2 || (this.target[e2][n2] = this));
        o2.previous = this, this.next = o2, i2[r2] = this, this.target[e2][n2] = this;
      }, T.prototype.detach = function() {
        var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
        this.undirected && (n2 = r2 = "undirected"), delete this.source[n2][e2], delete this.target[r2][t2];
      }, T.prototype.detachMulti = function() {
        var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
        this.undirected && (n2 = r2 = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n2][e2], delete this.target[r2][t2]) : (this.next.previous = void 0, this.source[n2][e2] = this.next, this.target[r2][t2] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
      };
      var I = 0, R = 1, F = 3;
      function B(t2, e2, n2, r2, i2, o2, a2) {
        var c2, u2, d2, s2;
        if (r2 = "" + r2, n2 === I) {
          if (!(c2 = t2._nodes.get(r2))) throw new M("Graph.".concat(e2, ': could not find the "').concat(r2, '" node in the graph.'));
          d2 = i2, s2 = o2;
        } else if (n2 === F) {
          if (i2 = "" + i2, !(u2 = t2._edges.get(i2))) throw new M("Graph.".concat(e2, ': could not find the "').concat(i2, '" edge in the graph.'));
          var h2 = u2.source.key, p2 = u2.target.key;
          if (r2 === h2) c2 = u2.target;
          else {
            if (r2 !== p2) throw new M("Graph.".concat(e2, ': the "').concat(r2, '" node is not attached to the "').concat(i2, '" edge (').concat(h2, ", ").concat(p2, ")."));
            c2 = u2.source;
          }
          d2 = o2, s2 = a2;
        } else {
          if (!(u2 = t2._edges.get(r2))) throw new M("Graph.".concat(e2, ': could not find the "').concat(r2, '" edge in the graph.'));
          c2 = n2 === R ? u2.source : u2.target, d2 = i2, s2 = o2;
        }
        return [c2, d2, s2];
      }
      var Y = [{ name: function(t2) {
        return "get".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return a2.attributes[c2];
        };
      } }, { name: function(t2) {
        return "get".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          return B(this, e2, n2, t3, r2)[0].attributes;
        };
      } }, { name: function(t2) {
        return "has".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return a2.attributes.hasOwnProperty(c2);
        };
      } }, { name: function(t2) {
        return "set".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2, o2) {
          var a2 = B(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
          return c2.attributes[u2] = d2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2, o2) {
          var a2 = B(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
          if ("function" != typeof d2) throw new C("Graph.".concat(e2, ": updater should be a function."));
          var s2 = c2.attributes, h2 = d2(s2[u2]);
          return s2[u2] = h2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
        };
      } }, { name: function(t2) {
        return "remove".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return delete a2.attributes[c2], this.emit("nodeAttributesUpdated", { key: a2.key, type: "remove", attributes: a2.attributes, name: c2 }), this;
        };
      } }, { name: function(t2) {
        return "replace".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if (!s(c2)) throw new C("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return a2.attributes = c2, this.emit("nodeAttributesUpdated", { key: a2.key, type: "replace", attributes: a2.attributes }), this;
        };
      } }, { name: function(t2) {
        return "merge".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if (!s(c2)) throw new C("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return u(a2.attributes, c2), this.emit("nodeAttributesUpdated", { key: a2.key, type: "merge", attributes: a2.attributes, data: c2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = B(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if ("function" != typeof c2) throw new C("Graph.".concat(e2, ": provided updater is not a function."));
          return a2.attributes = c2(a2.attributes), this.emit("nodeAttributesUpdated", { key: a2.key, type: "update", attributes: a2.attributes }), this;
        };
      } }];
      var J = [{ name: function(t2) {
        return "get".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return i2.attributes[r2];
        };
      } }, { name: function(t2) {
        return "get".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3) {
          var r2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 1) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var i2 = "" + t3, o2 = "" + arguments[1];
            if (!(r2 = d(this, i2, o2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(i2, '" - "').concat(o2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(r2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return r2.attributes;
        };
      } }, { name: function(t2) {
        return "has".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return i2.attributes.hasOwnProperty(r2);
        };
      } }, { name: function(t2) {
        return "set".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a2 = "" + t3, c2 = "" + r2;
            if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(o2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return o2.attributes[r2] = i2, this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a2 = "" + t3, c2 = "" + r2;
            if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(o2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if ("function" != typeof i2) throw new C("Graph.".concat(e2, ": updater should be a function."));
          return o2.attributes[r2] = i2(o2.attributes[r2]), this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "remove".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return delete i2.attributes[r2], this.emit("edgeAttributesUpdated", { key: i2.key, type: "remove", attributes: i2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "replace".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if (!s(r2)) throw new C("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return i2.attributes = r2, this.emit("edgeAttributesUpdated", { key: i2.key, type: "replace", attributes: i2.attributes }), this;
        };
      } }, { name: function(t2) {
        return "merge".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if (!s(r2)) throw new C("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return u(i2.attributes, r2), this.emit("edgeAttributesUpdated", { key: i2.key, type: "merge", attributes: i2.attributes, data: r2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new z("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new z("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new M("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new z("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new M("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if ("function" != typeof r2) throw new C("Graph.".concat(e2, ": provided updater is not a function."));
          return i2.attributes = r2(i2.attributes), this.emit("edgeAttributesUpdated", { key: i2.key, type: "update", attributes: i2.attributes }), this;
        };
      } }];
      var q = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
      function H(t2, e2, n2, r2) {
        var i2 = false;
        for (var o2 in e2) if (o2 !== r2) {
          var a2 = e2[o2];
          if (i2 = n2(a2.key, a2.attributes, a2.source.key, a2.target.key, a2.source.attributes, a2.target.attributes, a2.undirected), t2 && i2) return a2.key;
        }
      }
      function Q(t2, e2, n2, r2) {
        var i2, o2, a2, c2 = false;
        for (var u2 in e2) if (u2 !== r2) {
          i2 = e2[u2];
          do {
            if (o2 = i2.source, a2 = i2.target, c2 = n2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected), t2 && c2) return i2.key;
            i2 = i2.next;
          } while (void 0 !== i2);
        }
      }
      function V(t2, n2) {
        var r2, i2 = Object.keys(t2), o2 = i2.length, a2 = 0;
        return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          do {
            if (r2) r2 = r2.next;
            else {
              if (a2 >= o2) return { done: true };
              var e2 = i2[a2++];
              if (e2 === n2) {
                r2 = void 0;
                continue;
              }
              r2 = t2[e2];
            }
          } while (!r2);
          return { done: false, value: { edge: r2.key, attributes: r2.attributes, source: r2.source.key, target: r2.target.key, sourceAttributes: r2.source.attributes, targetAttributes: r2.target.attributes, undirected: r2.undirected } };
        });
      }
      function X(t2, e2, n2, r2) {
        var i2 = e2[n2];
        if (i2) {
          var o2 = i2.source, a2 = i2.target;
          return r2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected) && t2 ? i2.key : void 0;
        }
      }
      function Z(t2, e2, n2, r2) {
        var i2 = e2[n2];
        if (i2) {
          var o2 = false;
          do {
            if (o2 = r2(i2.key, i2.attributes, i2.source.key, i2.target.key, i2.source.attributes, i2.target.attributes, i2.undirected), t2 && o2) return i2.key;
            i2 = i2.next;
          } while (void 0 !== i2);
        }
      }
      function $(t2, n2) {
        var r2 = t2[n2];
        if (void 0 !== r2.next) return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          if (!r2) return { done: true };
          var t3 = { edge: r2.key, attributes: r2.attributes, source: r2.source.key, target: r2.target.key, sourceAttributes: r2.source.attributes, targetAttributes: r2.target.attributes, undirected: r2.undirected };
          return r2 = r2.next, { done: false, value: t3 };
        });
        var i2 = false;
        return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          return true === i2 ? { done: true } : (i2 = true, { done: false, value: { edge: r2.key, attributes: r2.attributes, source: r2.source.key, target: r2.target.key, sourceAttributes: r2.source.attributes, targetAttributes: r2.target.attributes, undirected: r2.undirected } });
        });
      }
      function tt(t2, e2, n2, r2) {
        if (0 !== e2.size) {
          for (var i2, o2, a2 = "mixed" !== n2 && n2 !== e2.type, c2 = "undirected" === n2, u2 = false, d2 = e2._edges.values(); true !== (i2 = d2.next()).done; ) if (o2 = i2.value, !a2 || o2.undirected === c2) {
            var s2 = o2, h2 = s2.key, p2 = s2.attributes, f2 = s2.source, l2 = s2.target;
            if (u2 = r2(h2, p2, f2.key, l2.key, f2.attributes, l2.attributes, o2.undirected), t2 && u2) return h2;
          }
        }
      }
      function et(t2, e2, n2, r2, i2, o2) {
        var a2, c2 = e2 ? Q : H;
        if ("undirected" !== n2) {
          if ("out" !== r2 && (a2 = c2(t2, i2.in, o2), t2 && a2)) return a2;
          if ("in" !== r2 && (a2 = c2(t2, i2.out, o2, r2 ? void 0 : i2.key), t2 && a2)) return a2;
        }
        if ("directed" !== n2 && (a2 = c2(t2, i2.undirected, o2), t2 && a2)) return a2;
      }
      function nt(t2, e2, n2, r2, i2, o2, a2) {
        var c2, u2 = n2 ? Z : X;
        if ("undirected" !== e2) {
          if (void 0 !== i2.in && "out" !== r2 && (c2 = u2(t2, i2.in, o2, a2), t2 && c2)) return c2;
          if (void 0 !== i2.out && "in" !== r2 && (r2 || i2.key !== o2) && (c2 = u2(t2, i2.out, o2, a2), t2 && c2)) return c2;
        }
        if ("directed" !== e2 && void 0 !== i2.undirected && (c2 = u2(t2, i2.undirected, o2, a2), t2 && c2)) return c2;
      }
      function rt(t2, e2) {
        var n2 = e2.name, r2 = e2.type, i2 = e2.direction;
        t2.prototype[n2] = function(t3, e3) {
          if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return [];
          if (!arguments.length) return function(t4, e4) {
            if (0 === t4.size) return [];
            if ("mixed" === e4 || e4 === t4.type) return Array.from(t4._edges.keys());
            for (var n3, r3, i3 = "undirected" === e4 ? t4.undirectedSize : t4.directedSize, o3 = new Array(i3), a3 = "undirected" === e4, c2 = t4._edges.values(), u2 = 0; true !== (n3 = c2.next()).done; ) (r3 = n3.value).undirected === a3 && (o3[u2++] = r3.key);
            return o3;
          }(this, r2);
          if (1 === arguments.length) {
            t3 = "" + t3;
            var o2 = this._nodes.get(t3);
            if (void 0 === o2) throw new M("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
            return function(t4, e4, n3, r3) {
              var i3 = [];
              return et(false, t4, e4, n3, r3, function(t5) {
                i3.push(t5);
              }), i3;
            }(this.multi, "mixed" === r2 ? this.type : r2, i2, o2);
          }
          if (2 === arguments.length) {
            t3 = "" + t3, e3 = "" + e3;
            var a2 = this._nodes.get(t3);
            if (!a2) throw new M("Graph.".concat(n2, ':  could not find the "').concat(t3, '" source node in the graph.'));
            if (!this._nodes.has(e3)) throw new M("Graph.".concat(n2, ':  could not find the "').concat(e3, '" target node in the graph.'));
            return function(t4, e4, n3, r3, i3) {
              var o3 = [];
              return nt(false, t4, e4, n3, r3, i3, function(t5) {
                o3.push(t5);
              }), o3;
            }(r2, this.multi, i2, a2, e3);
          }
          throw new C("Graph.".concat(n2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
        };
      }
      function it(t2, n2) {
        var r2 = n2.name, i2 = n2.type, o2 = n2.direction, a2 = r2.slice(0, -1) + "Entries";
        t2.prototype[a2] = function(t3, n3) {
          if ("mixed" !== i2 && "mixed" !== this.type && i2 !== this.type) return y();
          if (!arguments.length) return function(t4, n4) {
            if (0 === t4.size) return y();
            var r4 = "mixed" !== n4 && n4 !== t4.type, i3 = "undirected" === n4, o3 = t4._edges.values();
            return e(e({}, Symbol.iterator, function() {
              return this;
            }), "next", function() {
              for (var t5, e2; ; ) {
                if ((t5 = o3.next()).done) return t5;
                if (e2 = t5.value, !r4 || e2.undirected === i3) break;
              }
              return { value: { edge: e2.key, attributes: e2.attributes, source: e2.source.key, target: e2.target.key, sourceAttributes: e2.source.attributes, targetAttributes: e2.target.attributes, undirected: e2.undirected }, done: false };
            });
          }(this, i2);
          if (1 === arguments.length) {
            t3 = "" + t3;
            var r3 = this._nodes.get(t3);
            if (!r3) throw new M("Graph.".concat(a2, ': could not find the "').concat(t3, '" node in the graph.'));
            return function(t4, e2, n4) {
              var r4 = y();
              return "undirected" !== t4 && ("out" !== e2 && void 0 !== n4.in && (r4 = g(r4, V(n4.in))), "in" !== e2 && void 0 !== n4.out && (r4 = g(r4, V(n4.out, e2 ? void 0 : n4.key)))), "directed" !== t4 && void 0 !== n4.undirected && (r4 = g(r4, V(n4.undirected))), r4;
            }(i2, o2, r3);
          }
          if (2 === arguments.length) {
            t3 = "" + t3, n3 = "" + n3;
            var c2 = this._nodes.get(t3);
            if (!c2) throw new M("Graph.".concat(a2, ':  could not find the "').concat(t3, '" source node in the graph.'));
            if (!this._nodes.has(n3)) throw new M("Graph.".concat(a2, ':  could not find the "').concat(n3, '" target node in the graph.'));
            return function(t4, e2, n4, r4) {
              var i3 = y();
              return "undirected" !== t4 && (void 0 !== n4.in && "out" !== e2 && r4 in n4.in && (i3 = g(i3, $(n4.in, r4))), void 0 !== n4.out && "in" !== e2 && r4 in n4.out && (e2 || n4.key !== r4) && (i3 = g(i3, $(n4.out, r4)))), "directed" !== t4 && void 0 !== n4.undirected && r4 in n4.undirected && (i3 = g(i3, $(n4.undirected, r4))), i3;
            }(i2, o2, c2, n3);
          }
          throw new C("Graph.".concat(a2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
        };
      }
      var ot = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
      function at() {
        this.A = null, this.B = null;
      }
      function ct(t2, e2, n2, r2, i2) {
        for (var o2 in r2) {
          var a2 = r2[o2], c2 = a2.source, u2 = a2.target, d2 = c2 === n2 ? u2 : c2;
          if (!e2 || !e2.has(d2.key)) {
            var s2 = i2(d2.key, d2.attributes);
            if (t2 && s2) return d2.key;
          }
        }
      }
      function ut(t2, e2, n2, r2, i2) {
        if ("mixed" !== e2) {
          if ("undirected" === e2) return ct(t2, null, r2, r2.undirected, i2);
          if ("string" == typeof n2) return ct(t2, null, r2, r2[n2], i2);
        }
        var o2, a2 = new at();
        if ("undirected" !== e2) {
          if ("out" !== n2) {
            if (o2 = ct(t2, null, r2, r2.in, i2), t2 && o2) return o2;
            a2.wrap(r2.in);
          }
          if ("in" !== n2) {
            if (o2 = ct(t2, a2, r2, r2.out, i2), t2 && o2) return o2;
            a2.wrap(r2.out);
          }
        }
        if ("directed" !== e2 && (o2 = ct(t2, a2, r2, r2.undirected, i2), t2 && o2)) return o2;
      }
      function dt(t2, n2, r2) {
        var i2 = Object.keys(r2), o2 = i2.length, a2 = 0;
        return e(e({}, Symbol.iterator, function() {
          return this;
        }), "next", function() {
          var e2 = null;
          do {
            if (a2 >= o2) return t2 && t2.wrap(r2), { done: true };
            var c2 = r2[i2[a2++]], u2 = c2.source, d2 = c2.target;
            e2 = u2 === n2 ? d2 : u2, t2 && t2.has(e2.key) && (e2 = null);
          } while (null === e2);
          return { done: false, value: { neighbor: e2.key, attributes: e2.attributes } };
        });
      }
      function st(t2, e2) {
        var n2 = e2.name, r2 = e2.type, i2 = e2.direction;
        t2.prototype[n2] = function(t3) {
          if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return [];
          t3 = "" + t3;
          var e3 = this._nodes.get(t3);
          if (void 0 === e3) throw new M("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
          return function(t4, e4, n3) {
            if ("mixed" !== t4) {
              if ("undirected" === t4) return Object.keys(n3.undirected);
              if ("string" == typeof e4) return Object.keys(n3[e4]);
            }
            var r3 = [];
            return ut(false, t4, e4, n3, function(t5) {
              r3.push(t5);
            }), r3;
          }("mixed" === r2 ? this.type : r2, i2, e3);
        };
      }
      function ht(t2, e2) {
        var n2 = e2.name, r2 = e2.type, i2 = e2.direction, o2 = n2.slice(0, -1) + "Entries";
        t2.prototype[o2] = function(t3) {
          if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return y();
          t3 = "" + t3;
          var e3 = this._nodes.get(t3);
          if (void 0 === e3) throw new M("Graph.".concat(o2, ': could not find the "').concat(t3, '" node in the graph.'));
          return function(t4, e4, n3) {
            if ("mixed" !== t4) {
              if ("undirected" === t4) return dt(null, n3, n3.undirected);
              if ("string" == typeof e4) return dt(null, n3, n3[e4]);
            }
            var r3 = y(), i3 = new at();
            return "undirected" !== t4 && ("out" !== e4 && (r3 = g(r3, dt(i3, n3, n3.in))), "in" !== e4 && (r3 = g(r3, dt(i3, n3, n3.out)))), "directed" !== t4 && (r3 = g(r3, dt(i3, n3, n3.undirected))), r3;
          }("mixed" === r2 ? this.type : r2, i2, e3);
        };
      }
      function pt(t2, e2, n2, r2, i2) {
        for (var o2, a2, c2, u2, d2, s2, h2, p2 = r2._nodes.values(), f2 = r2.type; true !== (o2 = p2.next()).done; ) {
          var l2 = false;
          if (a2 = o2.value, "undirected" !== f2) for (c2 in u2 = a2.out) {
            d2 = u2[c2];
            do {
              if (s2 = d2.target, l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2) return d2;
              d2 = d2.next;
            } while (d2);
          }
          if ("directed" !== f2) {
            for (c2 in u2 = a2.undirected) if (!(e2 && a2.key > c2)) {
              d2 = u2[c2];
              do {
                if ((s2 = d2.target).key !== c2 && (s2 = d2.source), l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2) return d2;
                d2 = d2.next;
              } while (d2);
            }
          }
          if (n2 && !l2 && (h2 = i2(a2.key, null, a2.attributes, null, null, null, null), t2 && h2)) return null;
        }
      }
      function ft(t2) {
        if (!s(t2)) throw new C('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t2)) throw new C("Graph.import: serialized node is missing its key.");
        if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes)) throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
      }
      function lt(t2) {
        if (!s(t2)) throw new C('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t2)) throw new C("Graph.import: serialized edge is missing its source.");
        if (!("target" in t2)) throw new C("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes)) throw new C("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t2 && "boolean" != typeof t2.undirected) throw new C("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
      }
      at.prototype.wrap = function(t2) {
        null === this.A ? this.A = t2 : null === this.B && (this.B = t2);
      }, at.prototype.has = function(t2) {
        return null !== this.A && t2 in this.A || null !== this.B && t2 in this.B;
      };
      var gt, yt = (gt = 255 & Math.floor(256 * Math.random()), function() {
        return gt++;
      }), wt = /* @__PURE__ */ new Set(["directed", "undirected", "mixed"]), vt = /* @__PURE__ */ new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), bt = { allowSelfLoops: true, multi: false, type: "mixed" };
      function mt(t2, e2, n2) {
        var r2 = new t2.NodeDataClass(e2, n2);
        return t2._nodes.set(e2, r2), t2.emit("nodeAdded", { key: e2, attributes: n2 }), r2;
      }
      function kt(t2, e2, n2, r2, i2, o2, a2, c2) {
        if (!r2 && "undirected" === t2.type) throw new z("Graph.".concat(e2, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r2 && "directed" === t2.type) throw new z("Graph.".concat(e2, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (c2 && !s(c2)) throw new C("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
        if (o2 = "" + o2, a2 = "" + a2, c2 = c2 || {}, !t2.allowSelfLoops && o2 === a2) throw new z("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var u2 = t2._nodes.get(o2), d2 = t2._nodes.get(a2);
        if (!u2) throw new M("Graph.".concat(e2, ': source node "').concat(o2, '" not found.'));
        if (!d2) throw new M("Graph.".concat(e2, ': target node "').concat(a2, '" not found.'));
        var h2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
        if (n2) i2 = t2._edgeKeyGenerator();
        else if (i2 = "" + i2, t2._edges.has(i2)) throw new z("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
        if (!t2.multi && (r2 ? void 0 !== u2.undirected[a2] : void 0 !== u2.out[a2])) throw new z("Graph.".concat(e2, ': an edge linking "').concat(o2, '" to "').concat(a2, `" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`));
        var p2 = new T(r2, i2, u2, d2, c2);
        t2._edges.set(i2, p2);
        var f2 = o2 === a2;
        return r2 ? (u2.undirectedDegree++, d2.undirectedDegree++, f2 && (u2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (u2.outDegree++, d2.inDegree++, f2 && (u2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, h2.key = i2, t2.emit("edgeAdded", h2), i2;
      }
      function _t(t2, e2, n2, r2, i2, o2, a2, c2, d2) {
        if (!r2 && "undirected" === t2.type) throw new z("Graph.".concat(e2, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r2 && "directed" === t2.type) throw new z("Graph.".concat(e2, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (c2) {
          if (d2) {
            if ("function" != typeof c2) throw new C("Graph.".concat(e2, ': invalid updater function. Expecting a function but got "').concat(c2, '"'));
          } else if (!s(c2)) throw new C("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
        }
        var h2;
        if (o2 = "" + o2, a2 = "" + a2, d2 && (h2 = c2, c2 = void 0), !t2.allowSelfLoops && o2 === a2) throw new z("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var p2, f2, l2 = t2._nodes.get(o2), g2 = t2._nodes.get(a2);
        if (!n2 && (p2 = t2._edges.get(i2))) {
          if (!(p2.source.key === o2 && p2.target.key === a2 || r2 && p2.source.key === a2 && p2.target.key === o2)) throw new z("Graph.".concat(e2, ': inconsistency detected when attempting to merge the "').concat(i2, '" edge with "').concat(o2, '" source & "').concat(a2, '" target vs. ("').concat(p2.source.key, '", "').concat(p2.target.key, '").'));
          f2 = p2;
        }
        if (f2 || t2.multi || !l2 || (f2 = r2 ? l2.undirected[a2] : l2.out[a2]), f2) {
          var y2 = [f2.key, false, false, false];
          if (d2 ? !h2 : !c2) return y2;
          if (d2) {
            var w2 = f2.attributes;
            f2.attributes = h2(w2), t2.emit("edgeAttributesUpdated", { type: "replace", key: f2.key, attributes: f2.attributes });
          } else u(f2.attributes, c2), t2.emit("edgeAttributesUpdated", { type: "merge", key: f2.key, attributes: f2.attributes, data: c2 });
          return y2;
        }
        c2 = c2 || {}, d2 && h2 && (c2 = h2(c2));
        var v2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
        if (n2) i2 = t2._edgeKeyGenerator();
        else if (i2 = "" + i2, t2._edges.has(i2)) throw new z("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
        var b2 = false, m2 = false;
        l2 || (l2 = mt(t2, o2, {}), b2 = true, o2 === a2 && (g2 = l2, m2 = true)), g2 || (g2 = mt(t2, a2, {}), m2 = true), p2 = new T(r2, i2, l2, g2, c2), t2._edges.set(i2, p2);
        var k2 = o2 === a2;
        return r2 ? (l2.undirectedDegree++, g2.undirectedDegree++, k2 && (l2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (l2.outDegree++, g2.inDegree++, k2 && (l2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, v2.key = i2, t2.emit("edgeAdded", v2), [i2, true, b2, m2];
      }
      function Gt(t2, e2) {
        t2._edges.delete(e2.key);
        var n2 = e2.source, r2 = e2.target, i2 = e2.attributes, o2 = e2.undirected, a2 = n2 === r2;
        o2 ? (n2.undirectedDegree--, r2.undirectedDegree--, a2 && (n2.undirectedLoops--, t2._undirectedSelfLoopCount--)) : (n2.outDegree--, r2.inDegree--, a2 && (n2.directedLoops--, t2._directedSelfLoopCount--)), t2.multi ? e2.detachMulti() : e2.detach(), o2 ? t2._undirectedSize-- : t2._directedSize--, t2.emit("edgeDropped", { key: e2.key, attributes: i2, source: n2.key, target: r2.key, undirected: o2 });
      }
      var xt = function(n2) {
        function i2(e2) {
          var r2;
          if (r2 = n2.call(this) || this, "boolean" != typeof (e2 = u({}, bt, e2)).multi) throw new C(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "`.concat(e2.multi, '".'));
          if (!wt.has(e2.type)) throw new C(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "`.concat(e2.type, '".'));
          if ("boolean" != typeof e2.allowSelfLoops) throw new C(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "`.concat(e2.allowSelfLoops, '".'));
          var i3 = "mixed" === e2.type ? W : "directed" === e2.type ? P : K;
          p(t(r2), "NodeDataClass", i3);
          var o3 = "geid_" + yt() + "_", a2 = 0;
          return p(t(r2), "_attributes", {}), p(t(r2), "_nodes", /* @__PURE__ */ new Map()), p(t(r2), "_edges", /* @__PURE__ */ new Map()), p(t(r2), "_directedSize", 0), p(t(r2), "_undirectedSize", 0), p(t(r2), "_directedSelfLoopCount", 0), p(t(r2), "_undirectedSelfLoopCount", 0), p(t(r2), "_edgeKeyGenerator", function() {
            var t2;
            do {
              t2 = o3 + a2++;
            } while (r2._edges.has(t2));
            return t2;
          }), p(t(r2), "_options", e2), vt.forEach(function(e3) {
            return p(t(r2), e3, r2[e3]);
          }), f(t(r2), "order", function() {
            return r2._nodes.size;
          }), f(t(r2), "size", function() {
            return r2._edges.size;
          }), f(t(r2), "directedSize", function() {
            return r2._directedSize;
          }), f(t(r2), "undirectedSize", function() {
            return r2._undirectedSize;
          }), f(t(r2), "selfLoopCount", function() {
            return r2._directedSelfLoopCount + r2._undirectedSelfLoopCount;
          }), f(t(r2), "directedSelfLoopCount", function() {
            return r2._directedSelfLoopCount;
          }), f(t(r2), "undirectedSelfLoopCount", function() {
            return r2._undirectedSelfLoopCount;
          }), f(t(r2), "multi", r2._options.multi), f(t(r2), "type", r2._options.type), f(t(r2), "allowSelfLoops", r2._options.allowSelfLoops), f(t(r2), "implementation", function() {
            return "graphology";
          }), r2;
        }
        r(i2, n2);
        var o2 = i2.prototype;
        return o2._resetInstanceCounters = function() {
          this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, o2.hasNode = function(t2) {
          return this._nodes.has("" + t2);
        }, o2.hasDirectedEdge = function(t2, e2) {
          if ("undirected" === this.type) return false;
          if (1 === arguments.length) {
            var n3 = "" + t2, r2 = this._edges.get(n3);
            return !!r2 && !r2.undirected;
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var i3 = this._nodes.get(t2);
            return !!i3 && i3.out.hasOwnProperty(e2);
          }
          throw new C("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, o2.hasUndirectedEdge = function(t2, e2) {
          if ("directed" === this.type) return false;
          if (1 === arguments.length) {
            var n3 = "" + t2, r2 = this._edges.get(n3);
            return !!r2 && r2.undirected;
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var i3 = this._nodes.get(t2);
            return !!i3 && i3.undirected.hasOwnProperty(e2);
          }
          throw new C("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, o2.hasEdge = function(t2, e2) {
          if (1 === arguments.length) {
            var n3 = "" + t2;
            return this._edges.has(n3);
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var r2 = this._nodes.get(t2);
            return !!r2 && (void 0 !== r2.out && r2.out.hasOwnProperty(e2) || void 0 !== r2.undirected && r2.undirected.hasOwnProperty(e2));
          }
          throw new C("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, o2.directedEdge = function(t2, e2) {
          if ("undirected" !== this.type) {
            if (t2 = "" + t2, e2 = "" + e2, this.multi) throw new z("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
            var n3 = this._nodes.get(t2);
            if (!n3) throw new M('Graph.directedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
            if (!this._nodes.has(e2)) throw new M('Graph.directedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
            var r2 = n3.out && n3.out[e2] || void 0;
            return r2 ? r2.key : void 0;
          }
        }, o2.undirectedEdge = function(t2, e2) {
          if ("directed" !== this.type) {
            if (t2 = "" + t2, e2 = "" + e2, this.multi) throw new z("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
            var n3 = this._nodes.get(t2);
            if (!n3) throw new M('Graph.undirectedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
            if (!this._nodes.has(e2)) throw new M('Graph.undirectedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
            var r2 = n3.undirected && n3.undirected[e2] || void 0;
            return r2 ? r2.key : void 0;
          }
        }, o2.edge = function(t2, e2) {
          if (this.multi) throw new z("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.edge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2)) throw new M('Graph.edge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r2 = n3.out && n3.out[e2] || n3.undirected && n3.undirected[e2] || void 0;
          if (r2) return r2.key;
        }, o2.areDirectedNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areDirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out);
        }, o2.areOutNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areOutNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.out;
        }, o2.areInNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areInNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.in;
        }, o2.areUndirectedNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areUndirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" !== this.type && e2 in n3.undirected;
        }, o2.areNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out) || "directed" !== this.type && e2 in n3.undirected;
        }, o2.areInboundNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areInboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.in || "directed" !== this.type && e2 in n3.undirected;
        }, o2.areOutboundNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.areOutboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.out || "directed" !== this.type && e2 in n3.undirected;
        }, o2.inDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.inDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree;
        }, o2.outDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.outDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.outDegree;
        }, o2.directedDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.directedDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree;
        }, o2.undirectedDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.undirectedDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" === this.type ? 0 : e2.undirectedDegree;
        }, o2.inboundDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.inboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree), n3;
        }, o2.outboundDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.outboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.outDegree), n3;
        }, o2.degree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.degree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree), n3;
        }, o2.inDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree - e2.directedLoops;
        }, o2.outDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.outDegree - e2.directedLoops;
        }, o2.directedDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree - 2 * e2.directedLoops;
        }, o2.undirectedDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" === this.type ? 0 : e2.undirectedDegree - 2 * e2.undirectedLoops;
        }, o2.inboundDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r2 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r2 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree, r2 += e2.directedLoops), n3 - r2;
        }, o2.outboundDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r2 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r2 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.outDegree, r2 += e2.directedLoops), n3 - r2;
        }, o2.degreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new M('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r2 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r2 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree, r2 += 2 * e2.directedLoops), n3 - r2;
        }, o2.source = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.source: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.source.key;
        }, o2.target = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.target: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.target.key;
        }, o2.extremities = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.extremities: could not find the "'.concat(t2, '" edge in the graph.'));
          return [e2.source.key, e2.target.key];
        }, o2.opposite = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._edges.get(e2);
          if (!n3) throw new M('Graph.opposite: could not find the "'.concat(e2, '" edge in the graph.'));
          var r2 = n3.source.key, i3 = n3.target.key;
          if (t2 === r2) return i3;
          if (t2 === i3) return r2;
          throw new M('Graph.opposite: the "'.concat(t2, '" node is not attached to the "').concat(e2, '" edge (').concat(r2, ", ").concat(i3, ")."));
        }, o2.hasExtremity = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._edges.get(t2);
          if (!n3) throw new M('Graph.hasExtremity: could not find the "'.concat(t2, '" edge in the graph.'));
          return n3.source.key === e2 || n3.target.key === e2;
        }, o2.isUndirected = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.isUndirected: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.undirected;
        }, o2.isDirected = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.isDirected: could not find the "'.concat(t2, '" edge in the graph.'));
          return !e2.undirected;
        }, o2.isSelfLoop = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new M('Graph.isSelfLoop: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.source === e2.target;
        }, o2.addNode = function(t2, e2) {
          var n3 = function(t3, e3, n4) {
            if (n4 && !s(n4)) throw new C('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n4, '"'));
            if (e3 = "" + e3, n4 = n4 || {}, t3._nodes.has(e3)) throw new z('Graph.addNode: the "'.concat(e3, '" node already exist in the graph.'));
            var r2 = new t3.NodeDataClass(e3, n4);
            return t3._nodes.set(e3, r2), t3.emit("nodeAdded", { key: e3, attributes: n4 }), r2;
          }(this, t2, e2);
          return n3.key;
        }, o2.mergeNode = function(t2, e2) {
          if (e2 && !s(e2)) throw new C('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e2, '"'));
          t2 = "" + t2, e2 = e2 || {};
          var n3 = this._nodes.get(t2);
          return n3 ? (e2 && (u(n3.attributes, e2), this.emit("nodeAttributesUpdated", { type: "merge", key: t2, attributes: n3.attributes, data: e2 })), [t2, false]) : (n3 = new this.NodeDataClass(t2, e2), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: e2 }), [t2, true]);
        }, o2.updateNode = function(t2, e2) {
          if (e2 && "function" != typeof e2) throw new C('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e2, '"'));
          t2 = "" + t2;
          var n3 = this._nodes.get(t2);
          if (n3) {
            if (e2) {
              var r2 = n3.attributes;
              n3.attributes = e2(r2), this.emit("nodeAttributesUpdated", { type: "replace", key: t2, attributes: n3.attributes });
            }
            return [t2, false];
          }
          var i3 = e2 ? e2({}) : {};
          return n3 = new this.NodeDataClass(t2, i3), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: i3 }), [t2, true];
        }, o2.dropNode = function(t2) {
          t2 = "" + t2;
          var e2, n3 = this._nodes.get(t2);
          if (!n3) throw new M('Graph.dropNode: could not find the "'.concat(t2, '" node in the graph.'));
          if ("undirected" !== this.type) {
            for (var r2 in n3.out) {
              e2 = n3.out[r2];
              do {
                Gt(this, e2), e2 = e2.next;
              } while (e2);
            }
            for (var i3 in n3.in) {
              e2 = n3.in[i3];
              do {
                Gt(this, e2), e2 = e2.next;
              } while (e2);
            }
          }
          if ("directed" !== this.type) for (var o3 in n3.undirected) {
            e2 = n3.undirected[o3];
            do {
              Gt(this, e2), e2 = e2.next;
            } while (e2);
          }
          this._nodes.delete(t2), this.emit("nodeDropped", { key: t2, attributes: n3.attributes });
        }, o2.dropEdge = function(t2) {
          var e2;
          if (arguments.length > 1) {
            var n3 = "" + arguments[0], r2 = "" + arguments[1];
            if (!(e2 = d(this, n3, r2, this.type))) throw new M('Graph.dropEdge: could not find the "'.concat(n3, '" -> "').concat(r2, '" edge in the graph.'));
          } else if (t2 = "" + t2, !(e2 = this._edges.get(t2))) throw new M('Graph.dropEdge: could not find the "'.concat(t2, '" edge in the graph.'));
          return Gt(this, e2), this;
        }, o2.dropDirectedEdge = function(t2, e2) {
          if (arguments.length < 2) throw new z("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi) throw new z("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n3 = d(this, t2 = "" + t2, e2 = "" + e2, "directed");
          if (!n3) throw new M('Graph.dropDirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
          return Gt(this, n3), this;
        }, o2.dropUndirectedEdge = function(t2, e2) {
          if (arguments.length < 2) throw new z("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi) throw new z("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n3 = d(this, t2, e2, "undirected");
          if (!n3) throw new M('Graph.dropUndirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
          return Gt(this, n3), this;
        }, o2.clear = function() {
          this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, o2.clearEdges = function() {
          for (var t2, e2 = this._nodes.values(); true !== (t2 = e2.next()).done; ) t2.value.clear();
          this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, o2.getAttribute = function(t2) {
          return this._attributes[t2];
        }, o2.getAttributes = function() {
          return this._attributes;
        }, o2.hasAttribute = function(t2) {
          return this._attributes.hasOwnProperty(t2);
        }, o2.setAttribute = function(t2, e2) {
          return this._attributes[t2] = e2, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
        }, o2.updateAttribute = function(t2, e2) {
          if ("function" != typeof e2) throw new C("Graph.updateAttribute: updater should be a function.");
          var n3 = this._attributes[t2];
          return this._attributes[t2] = e2(n3), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
        }, o2.removeAttribute = function(t2) {
          return delete this._attributes[t2], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t2 }), this;
        }, o2.replaceAttributes = function(t2) {
          if (!s(t2)) throw new C("Graph.replaceAttributes: provided attributes are not a plain object.");
          return this._attributes = t2, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
        }, o2.mergeAttributes = function(t2) {
          if (!s(t2)) throw new C("Graph.mergeAttributes: provided attributes are not a plain object.");
          return u(this._attributes, t2), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t2 }), this;
        }, o2.updateAttributes = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.updateAttributes: provided updater is not a function.");
          return this._attributes = t2(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
        }, o2.updateEachNodeAttributes = function(t2, e2) {
          if ("function" != typeof t2) throw new C("Graph.updateEachNodeAttributes: expecting an updater function.");
          if (e2 && !l(e2)) throw new C("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n3, r2, i3 = this._nodes.values(); true !== (n3 = i3.next()).done; ) (r2 = n3.value).attributes = t2(r2.key, r2.attributes);
          this.emit("eachNodeAttributesUpdated", { hints: e2 || null });
        }, o2.updateEachEdgeAttributes = function(t2, e2) {
          if ("function" != typeof t2) throw new C("Graph.updateEachEdgeAttributes: expecting an updater function.");
          if (e2 && !l(e2)) throw new C("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n3, r2, i3, o3, a2 = this._edges.values(); true !== (n3 = a2.next()).done; ) i3 = (r2 = n3.value).source, o3 = r2.target, r2.attributes = t2(r2.key, r2.attributes, i3.key, o3.key, i3.attributes, o3.attributes, r2.undirected);
          this.emit("eachEdgeAttributesUpdated", { hints: e2 || null });
        }, o2.forEachAdjacencyEntry = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.forEachAdjacencyEntry: expecting a callback.");
          pt(false, false, false, this, t2);
        }, o2.forEachAdjacencyEntryWithOrphans = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
          pt(false, false, true, this, t2);
        }, o2.forEachAssymetricAdjacencyEntry = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
          pt(false, true, false, this, t2);
        }, o2.forEachAssymetricAdjacencyEntryWithOrphans = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
          pt(false, true, true, this, t2);
        }, o2.nodes = function() {
          return Array.from(this._nodes.keys());
        }, o2.forEachNode = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.forEachNode: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(); true !== (e2 = r2.next()).done; ) t2((n3 = e2.value).key, n3.attributes);
        }, o2.findNode = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.findNode: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(); true !== (e2 = r2.next()).done; ) if (t2((n3 = e2.value).key, n3.attributes)) return n3.key;
        }, o2.mapNodes = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.mapNode: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(), i3 = new Array(this.order), o3 = 0; true !== (e2 = r2.next()).done; ) n3 = e2.value, i3[o3++] = t2(n3.key, n3.attributes);
          return i3;
        }, o2.someNode = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.someNode: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(); true !== (e2 = r2.next()).done; ) if (t2((n3 = e2.value).key, n3.attributes)) return true;
          return false;
        }, o2.everyNode = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.everyNode: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(); true !== (e2 = r2.next()).done; ) if (!t2((n3 = e2.value).key, n3.attributes)) return false;
          return true;
        }, o2.filterNodes = function(t2) {
          if ("function" != typeof t2) throw new C("Graph.filterNodes: expecting a callback.");
          for (var e2, n3, r2 = this._nodes.values(), i3 = []; true !== (e2 = r2.next()).done; ) t2((n3 = e2.value).key, n3.attributes) && i3.push(n3.key);
          return i3;
        }, o2.reduceNodes = function(t2, e2) {
          if ("function" != typeof t2) throw new C("Graph.reduceNodes: expecting a callback.");
          if (arguments.length < 2) throw new C("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
          for (var n3, r2, i3 = e2, o3 = this._nodes.values(); true !== (n3 = o3.next()).done; ) i3 = t2(i3, (r2 = n3.value).key, r2.attributes);
          return i3;
        }, o2.nodeEntries = function() {
          var t2 = this._nodes.values();
          return e(e({}, Symbol.iterator, function() {
            return this;
          }), "next", function() {
            var e2 = t2.next();
            if (e2.done) return e2;
            var n3 = e2.value;
            return { value: { node: n3.key, attributes: n3.attributes }, done: false };
          });
        }, o2.export = function() {
          var t2 = this, e2 = new Array(this._nodes.size), n3 = 0;
          this._nodes.forEach(function(t3, r3) {
            e2[n3++] = function(t4, e3) {
              var n4 = { key: t4 };
              return h(e3.attributes) || (n4.attributes = u({}, e3.attributes)), n4;
            }(r3, t3);
          });
          var r2 = new Array(this._edges.size);
          return n3 = 0, this._edges.forEach(function(e3, i3) {
            r2[n3++] = function(t3, e4, n4) {
              var r3 = { key: e4, source: n4.source.key, target: n4.target.key };
              return h(n4.attributes) || (r3.attributes = u({}, n4.attributes)), "mixed" === t3 && n4.undirected && (r3.undirected = true), r3;
            }(t2.type, i3, e3);
          }), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e2, edges: r2 };
        }, o2.import = function(t2) {
          var e2, n3, r2, o3, a2, c2 = this, u2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (t2 instanceof i2) return t2.forEachNode(function(t3, e3) {
            u2 ? c2.mergeNode(t3, e3) : c2.addNode(t3, e3);
          }), t2.forEachEdge(function(t3, e3, n4, r3, i3, o4, a3) {
            u2 ? a3 ? c2.mergeUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.mergeDirectedEdgeWithKey(t3, n4, r3, e3) : a3 ? c2.addUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.addDirectedEdgeWithKey(t3, n4, r3, e3);
          }), this;
          if (!s(t2)) throw new C("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
          if (t2.attributes) {
            if (!s(t2.attributes)) throw new C("Graph.import: invalid attributes. Expecting a plain object.");
            u2 ? this.mergeAttributes(t2.attributes) : this.replaceAttributes(t2.attributes);
          }
          if (t2.nodes) {
            if (r2 = t2.nodes, !Array.isArray(r2)) throw new C("Graph.import: invalid nodes. Expecting an array.");
            for (e2 = 0, n3 = r2.length; e2 < n3; e2++) {
              ft(o3 = r2[e2]);
              var d2 = o3, h2 = d2.key, p2 = d2.attributes;
              u2 ? this.mergeNode(h2, p2) : this.addNode(h2, p2);
            }
          }
          if (t2.edges) {
            var f2 = false;
            if ("undirected" === this.type && (f2 = true), r2 = t2.edges, !Array.isArray(r2)) throw new C("Graph.import: invalid edges. Expecting an array.");
            for (e2 = 0, n3 = r2.length; e2 < n3; e2++) {
              lt(a2 = r2[e2]);
              var l2 = a2, g2 = l2.source, y2 = l2.target, w2 = l2.attributes, v2 = l2.undirected, b2 = void 0 === v2 ? f2 : v2;
              "key" in a2 ? (u2 ? b2 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b2 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a2.key, g2, y2, w2) : (u2 ? b2 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b2 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g2, y2, w2);
            }
          }
          return this;
        }, o2.nullCopy = function(t2) {
          var e2 = new i2(u({}, this._options, t2));
          return e2.replaceAttributes(u({}, this.getAttributes())), e2;
        }, o2.emptyCopy = function(t2) {
          var e2 = this.nullCopy(t2);
          return this._nodes.forEach(function(t3, n3) {
            var r2 = u({}, t3.attributes);
            t3 = new e2.NodeDataClass(n3, r2), e2._nodes.set(n3, t3);
          }), e2;
        }, o2.copy = function(t2) {
          if ("string" == typeof (t2 = t2 || {}).type && t2.type !== this.type && "mixed" !== t2.type) throw new z('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t2.type, '" because this would mean losing information about the current graph.'));
          if ("boolean" == typeof t2.multi && t2.multi !== this.multi && true !== t2.multi) throw new z("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
          if ("boolean" == typeof t2.allowSelfLoops && t2.allowSelfLoops !== this.allowSelfLoops && true !== t2.allowSelfLoops) throw new z("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
          for (var e2, n3, r2 = this.emptyCopy(t2), i3 = this._edges.values(); true !== (e2 = i3.next()).done; ) kt(r2, "copy", false, (n3 = e2.value).undirected, n3.key, n3.source.key, n3.target.key, u({}, n3.attributes));
          return r2;
        }, o2.toJSON = function() {
          return this.export();
        }, o2.toString = function() {
          return "[object Graph]";
        }, o2.inspect = function() {
          var t2 = this, e2 = {};
          this._nodes.forEach(function(t3, n4) {
            e2[n4] = t3.attributes;
          });
          var n3 = {}, r2 = {};
          this._edges.forEach(function(e3, i4) {
            var o4, a2 = e3.undirected ? "--" : "->", c2 = "", u2 = e3.source.key, d2 = e3.target.key;
            e3.undirected && u2 > d2 && (o4 = u2, u2 = d2, d2 = o4);
            var s2 = "(".concat(u2, ")").concat(a2, "(").concat(d2, ")");
            i4.startsWith("geid_") ? t2.multi && (void 0 === r2[s2] ? r2[s2] = 0 : r2[s2]++, c2 += "".concat(r2[s2], ". ")) : c2 += "[".concat(i4, "]: "), n3[c2 += s2] = e3.attributes;
          });
          var i3 = {};
          for (var o3 in this) this.hasOwnProperty(o3) && !vt.has(o3) && "function" != typeof this[o3] && "symbol" !== a(o3) && (i3[o3] = this[o3]);
          return i3.attributes = this._attributes, i3.nodes = e2, i3.edges = n3, p(i3, "constructor", this.constructor), i3;
        }, i2;
      }(v.exports.EventEmitter);
      "undefined" != typeof Symbol && (xt.prototype[Symbol.for("nodejs.util.inspect.custom")] = xt.prototype.inspect), [{ name: function(t2) {
        return "".concat(t2, "Edge");
      }, generateKey: true }, { name: function(t2) {
        return "".concat(t2, "DirectedEdge");
      }, generateKey: true, type: "directed" }, { name: function(t2) {
        return "".concat(t2, "UndirectedEdge");
      }, generateKey: true, type: "undirected" }, { name: function(t2) {
        return "".concat(t2, "EdgeWithKey");
      } }, { name: function(t2) {
        return "".concat(t2, "DirectedEdgeWithKey");
      }, type: "directed" }, { name: function(t2) {
        return "".concat(t2, "UndirectedEdgeWithKey");
      }, type: "undirected" }].forEach(function(t2) {
        ["add", "merge", "update"].forEach(function(e2) {
          var n2 = t2.name(e2), r2 = "add" === e2 ? kt : _t;
          t2.generateKey ? xt.prototype[n2] = function(i2, o2, a2) {
            return r2(this, n2, true, "undirected" === (t2.type || this.type), null, i2, o2, a2, "update" === e2);
          } : xt.prototype[n2] = function(i2, o2, a2, c2) {
            return r2(this, n2, false, "undirected" === (t2.type || this.type), i2, o2, a2, c2, "update" === e2);
          };
        });
      }), function(t2) {
        Y.forEach(function(e2) {
          var n2 = e2.name, r2 = e2.attacher;
          r2(t2, n2("Node"), I), r2(t2, n2("Source"), R), r2(t2, n2("Target"), 2), r2(t2, n2("Opposite"), F);
        });
      }(xt), function(t2) {
        J.forEach(function(e2) {
          var n2 = e2.name, r2 = e2.attacher;
          r2(t2, n2("Edge"), "mixed"), r2(t2, n2("DirectedEdge"), "directed"), r2(t2, n2("UndirectedEdge"), "undirected");
        });
      }(xt), function(t2) {
        q.forEach(function(e2) {
          rt(t2, e2), function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4, n3) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                if (1 === arguments.length) return tt(false, this, r2, n3 = t4);
                if (2 === arguments.length) {
                  t4 = "" + t4, n3 = e4;
                  var a3 = this._nodes.get(t4);
                  if (void 0 === a3) throw new M("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return et(false, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
                }
                if (3 === arguments.length) {
                  t4 = "" + t4, e4 = "" + e4;
                  var c3 = this._nodes.get(t4);
                  if (!c3) throw new M("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                  if (!this._nodes.has(e4)) throw new M("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                  return nt(false, r2, this.multi, i2, c3, e4, n3);
                }
                throw new C("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
              }
            };
            var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[a2] = function() {
              var t4, e4 = Array.prototype.slice.call(arguments), n3 = e4.pop();
              if (0 === e4.length) {
                var i3 = 0;
                "directed" !== r2 && (i3 += this.undirectedSize), "undirected" !== r2 && (i3 += this.directedSize), t4 = new Array(i3);
                var a3 = 0;
                e4.push(function(e5, r3, i4, o3, c3, u3, d2) {
                  t4[a3++] = n3(e5, r3, i4, o3, c3, u3, d2);
                });
              } else t4 = [], e4.push(function(e5, r3, i4, o3, a4, c3, u3) {
                t4.push(n3(e5, r3, i4, o3, a4, c3, u3));
              });
              return this[o2].apply(this, e4), t4;
            };
            var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[c2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop(), n3 = [];
              return t4.push(function(t5, r3, i3, o3, a3, c3, u3) {
                e4(t5, r3, i3, o3, a3, c3, u3) && n3.push(t5);
              }), this[o2].apply(this, t4), n3;
            };
            var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[u2] = function() {
              var t4, e4, n3 = Array.prototype.slice.call(arguments);
              if (n3.length < 2 || n3.length > 4) throw new C("Graph.".concat(u2, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n3.length, ")."));
              if ("function" == typeof n3[n3.length - 1] && "function" != typeof n3[n3.length - 2]) throw new C("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              2 === n3.length ? (t4 = n3[0], e4 = n3[1], n3 = []) : 3 === n3.length ? (t4 = n3[1], e4 = n3[2], n3 = [n3[0]]) : 4 === n3.length && (t4 = n3[2], e4 = n3[3], n3 = [n3[0], n3[1]]);
              var r3 = e4;
              return n3.push(function(e5, n4, i3, o3, a3, c3, u3) {
                r3 = t4(r3, e5, n4, i3, o3, a3, c3, u3);
              }), this[o2].apply(this, n3), r3;
            };
          }(t2, e2), function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "find" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4, n3) {
              if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return false;
              if (1 === arguments.length) return tt(true, this, r2, n3 = t4);
              if (2 === arguments.length) {
                t4 = "" + t4, n3 = e4;
                var a3 = this._nodes.get(t4);
                if (void 0 === a3) throw new M("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                return et(true, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
              }
              if (3 === arguments.length) {
                t4 = "" + t4, e4 = "" + e4;
                var c3 = this._nodes.get(t4);
                if (!c3) throw new M("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4)) throw new M("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return nt(true, r2, this.multi, i2, c3, e4, n3);
              }
              throw new C("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
            };
            var a2 = "some" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[a2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
              return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
                return e4(t5, n3, r3, i3, o3, a3, c3);
              }), !!this[o2].apply(this, t4);
            };
            var c2 = "every" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[c2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
              return t4.push(function(t5, n3, r3, i3, o3, a3, c3) {
                return !e4(t5, n3, r3, i3, o3, a3, c3);
              }), !this[o2].apply(this, t4);
            };
          }(t2, e2), it(t2, e2);
        });
      }(xt), function(t2) {
        ot.forEach(function(e2) {
          st(t2, e2), function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                t4 = "" + t4;
                var n3 = this._nodes.get(t4);
                if (void 0 === n3) throw new M("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                ut(false, "mixed" === r2 ? this.type : r2, i2, n3, e4);
              }
            };
            var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[a2] = function(t4, e4) {
              var n3 = [];
              return this[o2](t4, function(t5, r3) {
                n3.push(e4(t5, r3));
              }), n3;
            };
            var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[c2] = function(t4, e4) {
              var n3 = [];
              return this[o2](t4, function(t5, r3) {
                e4(t5, r3) && n3.push(t5);
              }), n3;
            };
            var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[u2] = function(t4, e4, n3) {
              if (arguments.length < 3) throw new C("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              var r3 = n3;
              return this[o2](t4, function(t5, n4) {
                r3 = e4(r3, t5, n4);
              }), r3;
            };
          }(t2, e2), function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = n2[0].toUpperCase() + n2.slice(1, -1), a2 = "find" + o2;
            t3.prototype[a2] = function(t4, e4) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                t4 = "" + t4;
                var n3 = this._nodes.get(t4);
                if (void 0 === n3) throw new M("Graph.".concat(a2, ': could not find the "').concat(t4, '" node in the graph.'));
                return ut(true, "mixed" === r2 ? this.type : r2, i2, n3, e4);
              }
            };
            var c2 = "some" + o2;
            t3.prototype[c2] = function(t4, e4) {
              return !!this[a2](t4, e4);
            };
            var u2 = "every" + o2;
            t3.prototype[u2] = function(t4, e4) {
              return !this[a2](t4, function(t5, n3) {
                return !e4(t5, n3);
              });
            };
          }(t2, e2), ht(t2, e2);
        });
      }(xt);
      var Et = function(t2) {
        function e2(e3) {
          var n2 = u({ type: "directed" }, e3);
          if ("multi" in n2 && false !== n2.multi) throw new C("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("directed" !== n2.type) throw new C('DirectedGraph.from: inconsistent "' + n2.type + '" type in given options!');
          return t2.call(this, n2) || this;
        }
        return r(e2, t2), e2;
      }(xt), At = function(t2) {
        function e2(e3) {
          var n2 = u({ type: "undirected" }, e3);
          if ("multi" in n2 && false !== n2.multi) throw new C("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("undirected" !== n2.type) throw new C('UndirectedGraph.from: inconsistent "' + n2.type + '" type in given options!');
          return t2.call(this, n2) || this;
        }
        return r(e2, t2), e2;
      }(xt), Lt = function(t2) {
        function e2(e3) {
          var n2 = u({ multi: true }, e3);
          if ("multi" in n2 && true !== n2.multi) throw new C("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
          return t2.call(this, n2) || this;
        }
        return r(e2, t2), e2;
      }(xt), St = function(t2) {
        function e2(e3) {
          var n2 = u({ type: "directed", multi: true }, e3);
          if ("multi" in n2 && true !== n2.multi) throw new C("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("directed" !== n2.type) throw new C('MultiDirectedGraph.from: inconsistent "' + n2.type + '" type in given options!');
          return t2.call(this, n2) || this;
        }
        return r(e2, t2), e2;
      }(xt), Dt = function(t2) {
        function e2(e3) {
          var n2 = u({ type: "undirected", multi: true }, e3);
          if ("multi" in n2 && true !== n2.multi) throw new C("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("undirected" !== n2.type) throw new C('MultiUndirectedGraph.from: inconsistent "' + n2.type + '" type in given options!');
          return t2.call(this, n2) || this;
        }
        return r(e2, t2), e2;
      }(xt);
      function Ut(t2) {
        t2.from = function(e2, n2) {
          var r2 = u({}, e2.options, n2), i2 = new t2(r2);
          return i2.import(e2), i2;
        };
      }
      return Ut(xt), Ut(Et), Ut(At), Ut(Lt), Ut(St), Ut(Dt), xt.Graph = xt, xt.DirectedGraph = Et, xt.UndirectedGraph = At, xt.MultiGraph = Lt, xt.MultiDirectedGraph = St, xt.MultiUndirectedGraph = Dt, xt.InvalidArgumentsGraphError = C, xt.NotFoundGraphError = M, xt.UsageGraphError = z, xt;
    });
  }
});

// vendor/sigma.min.js
var require_sigma_min = __commonJS({
  "vendor/sigma.min.js"(exports, module2) {
    (function(Ee, ue) {
      typeof exports == "object" && typeof module2 < "u" ? module2.exports = ue() : typeof define == "function" && define.amd ? define(ue) : (Ee = typeof globalThis < "u" ? globalThis : Ee || self, Ee.Sigma = ue());
    })(exports, function() {
      "use strict";
      function Ee(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function ue(r) {
        var e = Ee(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function ne(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function oi(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, ue(n.key), n);
        }
      }
      function ie(r, e, t) {
        return e && oi(r.prototype, e), Object.defineProperty(r, "prototype", { writable: false }), r;
      }
      function he(r) {
        return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, he(r);
      }
      function lr() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (lr = function() {
          return !!r;
        })();
      }
      function ai(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function si(r, e) {
        if (e && (typeof e == "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return ai(r);
      }
      function Te(r, e, t) {
        return e = he(e), si(r, lr() ? Reflect.construct(e, t || [], he(r).constructor) : e.apply(r, t));
      }
      function tt(r, e) {
        return tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
          return t.__proto__ = n, t;
        }, tt(r, e);
      }
      function Re(r, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: true, configurable: true } }), Object.defineProperty(r, "prototype", { writable: false }), e && tt(r, e);
      }
      var rt = { black: "#000000", silver: "#C0C0C0", gray: "#808080", grey: "#808080", white: "#FFFFFF", maroon: "#800000", red: "#FF0000", purple: "#800080", fuchsia: "#FF00FF", green: "#008000", lime: "#00FF00", olive: "#808000", yellow: "#FFFF00", navy: "#000080", blue: "#0000FF", teal: "#008080", aqua: "#00FFFF", darkblue: "#00008B", mediumblue: "#0000CD", darkgreen: "#006400", darkcyan: "#008B8B", deepskyblue: "#00BFFF", darkturquoise: "#00CED1", mediumspringgreen: "#00FA9A", springgreen: "#00FF7F", cyan: "#00FFFF", midnightblue: "#191970", dodgerblue: "#1E90FF", lightseagreen: "#20B2AA", forestgreen: "#228B22", seagreen: "#2E8B57", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", limegreen: "#32CD32", mediumseagreen: "#3CB371", turquoise: "#40E0D0", royalblue: "#4169E1", steelblue: "#4682B4", darkslateblue: "#483D8B", mediumturquoise: "#48D1CC", indigo: "#4B0082", darkolivegreen: "#556B2F", cadetblue: "#5F9EA0", cornflowerblue: "#6495ED", rebeccapurple: "#663399", mediumaquamarine: "#66CDAA", dimgray: "#696969", dimgrey: "#696969", slateblue: "#6A5ACD", olivedrab: "#6B8E23", slategray: "#708090", slategrey: "#708090", lightslategray: "#778899", lightslategrey: "#778899", mediumslateblue: "#7B68EE", lawngreen: "#7CFC00", chartreuse: "#7FFF00", aquamarine: "#7FFFD4", skyblue: "#87CEEB", lightskyblue: "#87CEFA", blueviolet: "#8A2BE2", darkred: "#8B0000", darkmagenta: "#8B008B", saddlebrown: "#8B4513", darkseagreen: "#8FBC8F", lightgreen: "#90EE90", mediumpurple: "#9370DB", darkviolet: "#9400D3", palegreen: "#98FB98", darkorchid: "#9932CC", yellowgreen: "#9ACD32", sienna: "#A0522D", brown: "#A52A2A", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", lightblue: "#ADD8E6", greenyellow: "#ADFF2F", paleturquoise: "#AFEEEE", lightsteelblue: "#B0C4DE", powderblue: "#B0E0E6", firebrick: "#B22222", darkgoldenrod: "#B8860B", mediumorchid: "#BA55D3", rosybrown: "#BC8F8F", darkkhaki: "#BDB76B", mediumvioletred: "#C71585", indianred: "#CD5C5C", peru: "#CD853F", chocolate: "#D2691E", tan: "#D2B48C", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", thistle: "#D8BFD8", orchid: "#DA70D6", goldenrod: "#DAA520", palevioletred: "#DB7093", crimson: "#DC143C", gainsboro: "#DCDCDC", plum: "#DDA0DD", burlywood: "#DEB887", lightcyan: "#E0FFFF", lavender: "#E6E6FA", darksalmon: "#E9967A", violet: "#EE82EE", palegoldenrod: "#EEE8AA", lightcoral: "#F08080", khaki: "#F0E68C", aliceblue: "#F0F8FF", honeydew: "#F0FFF0", azure: "#F0FFFF", sandybrown: "#F4A460", wheat: "#F5DEB3", beige: "#F5F5DC", whitesmoke: "#F5F5F5", mintcream: "#F5FFFA", ghostwhite: "#F8F8FF", salmon: "#FA8072", antiquewhite: "#FAEBD7", linen: "#FAF0E6", lightgoldenrodyellow: "#FAFAD2", oldlace: "#FDF5E6", magenta: "#FF00FF", deeppink: "#FF1493", orangered: "#FF4500", tomato: "#FF6347", hotpink: "#FF69B4", coral: "#FF7F50", darkorange: "#FF8C00", lightsalmon: "#FFA07A", orange: "#FFA500", lightpink: "#FFB6C1", pink: "#FFC0CB", gold: "#FFD700", peachpuff: "#FFDAB9", navajowhite: "#FFDEAD", moccasin: "#FFE4B5", bisque: "#FFE4C4", mistyrose: "#FFE4E1", blanchedalmond: "#FFEBCD", papayawhip: "#FFEFD5", lavenderblush: "#FFF0F5", seashell: "#FFF5EE", cornsilk: "#FFF8DC", lemonchiffon: "#FFFACD", floralwhite: "#FFFAF0", snow: "#FFFAFA", lightyellow: "#FFFFE0", ivory: "#FFFFF0" }, ur = new Int8Array(4), Oe = new Int32Array(ur.buffer, 0, 1), hr = new Float32Array(ur.buffer, 0, 1), ci = /^\s*rgba?\s*\(/, li = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
      function ui(r) {
        var e = 0, t = 0, n = 0, i = 1;
        if (r[0] === "#") r.length === 4 ? (e = parseInt(r.charAt(1) + r.charAt(1), 16), t = parseInt(r.charAt(2) + r.charAt(2), 16), n = parseInt(r.charAt(3) + r.charAt(3), 16)) : (e = parseInt(r.charAt(1) + r.charAt(2), 16), t = parseInt(r.charAt(3) + r.charAt(4), 16), n = parseInt(r.charAt(5) + r.charAt(6), 16)), r.length === 9 && (i = parseInt(r.charAt(7) + r.charAt(8), 16) / 255);
        else if (ci.test(r)) {
          var o = r.match(li);
          o && (e = +o[1], t = +o[2], n = +o[3], o[4] && (i = +o[4]));
        }
        return { r: e, g: t, b: n, a: i };
      }
      var de = {};
      for (var De in rt) de[De] = X(rt[De]), de[rt[De]] = de[De];
      function dr(r, e, t, n, i) {
        return Oe[0] = n << 24 | t << 16 | e << 8 | r, Oe[0] = Oe[0] & 4278190079, hr[0];
      }
      function X(r) {
        if (r = r.toLowerCase(), typeof de[r] < "u") return de[r];
        var e = ui(r), t = e.r, n = e.g, i = e.b, o = e.a;
        o = o * 255 | 0;
        var a = dr(t, n, i, o);
        return de[r] = a, a;
      }
      function nt(r, e) {
        hr[0] = X(r);
        var t = Oe[0], n = t & 255, i = t >> 8 & 255, o = t >> 16 & 255, a = t >> 24 & 255;
        return [n, i, o, a];
      }
      var it = {};
      function fr(r) {
        if (typeof it[r] < "u") return it[r];
        var e = (r & 16711680) >>> 16, t = (r & 65280) >>> 8, n = r & 255, i = 255, o = dr(e, t, n, i);
        return it[r] = o, o;
      }
      function I(r, e, t) {
        return (e = ue(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
      }
      function gr(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function fe(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? gr(Object(t), true).forEach(function(n) {
            I(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gr(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      function hi(r, e) {
        for (; !{}.hasOwnProperty.call(r, e) && (r = he(r)) !== null; ) ;
        return r;
      }
      function ot() {
        return ot = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, e, t) {
          var n = hi(r, e);
          if (n) {
            var i = Object.getOwnPropertyDescriptor(n, e);
            return i.get ? i.get.call(arguments.length < 3 ? r : t) : i.value;
          }
        }, ot.apply(null, arguments);
      }
      function mr(r, e, t, n) {
        var i = ot(he(r.prototype), e, t);
        return typeof i == "function" ? function(o) {
          return i.apply(t, o);
        } : i;
      }
      function di(r) {
        return r.normalized ? 1 : r.size;
      }
      function at(r) {
        var e = 0;
        return r.forEach(function(t) {
          return e += di(t);
        }), e;
      }
      function vr(r, e, t) {
        var n = r === "VERTEX" ? e.VERTEX_SHADER : e.FRAGMENT_SHADER, i = e.createShader(n);
        if (i === null) throw new Error("loadShader: error while creating the shader");
        e.shaderSource(i, t), e.compileShader(i);
        var o = e.getShaderParameter(i, e.COMPILE_STATUS);
        if (!o) {
          var a = e.getShaderInfoLog(i);
          throw e.deleteShader(i), new Error(`loadShader: error while compiling the shader:
`.concat(a, `
`).concat(t));
        }
        return i;
      }
      function fi(r, e) {
        return vr("VERTEX", r, e);
      }
      function gi(r, e) {
        return vr("FRAGMENT", r, e);
      }
      function mi(r, e) {
        var t = r.createProgram();
        if (t === null) throw new Error("loadProgram: error while creating the program.");
        var n, i;
        for (n = 0, i = e.length; n < i; n++) r.attachShader(t, e[n]);
        r.linkProgram(t);
        var o = r.getProgramParameter(t, r.LINK_STATUS);
        if (!o) throw r.deleteProgram(t), new Error("loadProgram: error while linking the program.");
        return t;
      }
      function pr(r) {
        var e = r.gl, t = r.buffer, n = r.program, i = r.vertexShader, o = r.fragmentShader;
        e.deleteShader(i), e.deleteShader(o), e.deleteProgram(n), e.deleteBuffer(t);
      }
      function st(r) {
        return r % 1 === 0 ? r.toFixed(1) : r.toString();
      }
      var _r = `#define PICKING_MODE
`, vi = I(I(I(I(I(I(I(I({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4), br = function() {
        function r(e, t, n) {
          ne(this, r), I(this, "array", new Float32Array()), I(this, "constantArray", new Float32Array()), I(this, "capacity", 0), I(this, "verticesCount", 0);
          var i = this.getDefinition();
          if (this.VERTICES = i.VERTICES, this.VERTEX_SHADER_SOURCE = i.VERTEX_SHADER_SOURCE, this.FRAGMENT_SHADER_SOURCE = i.FRAGMENT_SHADER_SOURCE, this.UNIFORMS = i.UNIFORMS, this.ATTRIBUTES = i.ATTRIBUTES, this.METHOD = i.METHOD, this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in i ? i.CONSTANT_ATTRIBUTES : [], this.CONSTANT_DATA = "CONSTANT_DATA" in i ? i.CONSTANT_DATA : [], this.isInstanced = "CONSTANT_ATTRIBUTES" in i, this.ATTRIBUTES_ITEMS_COUNT = at(this.ATTRIBUTES), this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT, this.renderer = n, this.normalProgram = this.getProgramInfo("normal", e, i.VERTEX_SHADER_SOURCE, i.FRAGMENT_SHADER_SOURCE, null), this.pickProgram = t ? this.getProgramInfo("pick", e, _r + i.VERTEX_SHADER_SOURCE, _r + i.FRAGMENT_SHADER_SOURCE, t) : null, this.isInstanced) {
            var o = at(this.CONSTANT_ATTRIBUTES);
            if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
            this.constantArray = new Float32Array(this.CONSTANT_DATA.length * o);
            for (var a = 0; a < this.CONSTANT_DATA.length; a++) {
              var s = this.CONSTANT_DATA[a];
              if (s.length !== o) throw new Error("Program: error while getting constant data (one vector has ".concat(s.length, " items instead of ").concat(o, ")"));
              for (var l = 0; l < s.length; l++) this.constantArray[a * o + l] = s[l];
            }
            this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
          }
        }
        return ie(r, [{ key: "kill", value: function() {
          pr(this.normalProgram), this.pickProgram && (pr(this.pickProgram), this.pickProgram = null);
        } }, { key: "getProgramInfo", value: function(t, n, i, o, a) {
          var s = this.getDefinition(), l = n.createBuffer();
          if (l === null) throw new Error("Program: error while creating the WebGL buffer.");
          var c = fi(n, i), u = gi(n, o), d = mi(n, [c, u]), h = {};
          s.UNIFORMS.forEach(function(b) {
            var E = n.getUniformLocation(d, b);
            E && (h[b] = E);
          });
          var m = {};
          s.ATTRIBUTES.forEach(function(b) {
            m[b.name] = n.getAttribLocation(d, b.name);
          });
          var g;
          if ("CONSTANT_ATTRIBUTES" in s && (s.CONSTANT_ATTRIBUTES.forEach(function(b) {
            m[b.name] = n.getAttribLocation(d, b.name);
          }), g = n.createBuffer(), g === null)) throw new Error("Program: error while creating the WebGL constant buffer.");
          return { name: t, program: d, gl: n, frameBuffer: a, buffer: l, constantBuffer: g || {}, uniformLocations: h, attributeLocations: m, isPicking: t === "pick", vertexShader: c, fragmentShader: u };
        } }, { key: "bindProgram", value: function(t) {
          var n = this, i = 0, o = t.gl, a = t.buffer;
          this.isInstanced ? (o.bindBuffer(o.ARRAY_BUFFER, t.constantBuffer), i = 0, this.CONSTANT_ATTRIBUTES.forEach(function(s) {
            return i += n.bindAttribute(s, t, i, false);
          }), o.bufferData(o.ARRAY_BUFFER, this.constantArray, o.STATIC_DRAW), o.bindBuffer(o.ARRAY_BUFFER, t.buffer), i = 0, this.ATTRIBUTES.forEach(function(s) {
            return i += n.bindAttribute(s, t, i, true);
          }), o.bufferData(o.ARRAY_BUFFER, this.array, o.DYNAMIC_DRAW)) : (o.bindBuffer(o.ARRAY_BUFFER, a), i = 0, this.ATTRIBUTES.forEach(function(s) {
            return i += n.bindAttribute(s, t, i);
          }), o.bufferData(o.ARRAY_BUFFER, this.array, o.DYNAMIC_DRAW)), o.bindBuffer(o.ARRAY_BUFFER, null);
        } }, { key: "unbindProgram", value: function(t) {
          var n = this;
          this.isInstanced ? (this.CONSTANT_ATTRIBUTES.forEach(function(i) {
            return n.unbindAttribute(i, t, false);
          }), this.ATTRIBUTES.forEach(function(i) {
            return n.unbindAttribute(i, t, true);
          })) : this.ATTRIBUTES.forEach(function(i) {
            return n.unbindAttribute(i, t);
          });
        } }, { key: "bindAttribute", value: function(t, n, i, o) {
          var a = vi[t.type];
          if (typeof a != "number") throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type, '"'));
          var s = n.attributeLocations[t.name], l = n.gl;
          if (s !== -1) {
            l.enableVertexAttribArray(s);
            var c = this.isInstanced ? (o ? this.ATTRIBUTES_ITEMS_COUNT : at(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT : this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT;
            if (l.vertexAttribPointer(s, t.size, t.type, t.normalized || false, c, i), this.isInstanced && o) if (l instanceof WebGL2RenderingContext) l.vertexAttribDivisor(s, 1);
            else {
              var u = l.getExtension("ANGLE_instanced_arrays");
              u && u.vertexAttribDivisorANGLE(s, 1);
            }
          }
          return t.size * a;
        } }, { key: "unbindAttribute", value: function(t, n, i) {
          var o = n.attributeLocations[t.name], a = n.gl;
          if (o !== -1 && (a.disableVertexAttribArray(o), this.isInstanced && i)) if (a instanceof WebGL2RenderingContext) a.vertexAttribDivisor(o, 0);
          else {
            var s = a.getExtension("ANGLE_instanced_arrays");
            s && s.vertexAttribDivisorANGLE(o, 0);
          }
        } }, { key: "reallocate", value: function(t) {
          t !== this.capacity && (this.capacity = t, this.verticesCount = this.VERTICES * t, this.array = new Float32Array(this.isInstanced ? this.capacity * this.ATTRIBUTES_ITEMS_COUNT : this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT));
        } }, { key: "hasNothingToRender", value: function() {
          return this.verticesCount === 0;
        } }, { key: "renderProgram", value: function(t, n) {
          var i = n.gl, o = n.program;
          i.enable(i.BLEND), i.useProgram(o), this.setUniforms(t, n), this.drawWebGL(this.METHOD, n);
        } }, { key: "render", value: function(t) {
          this.hasNothingToRender() || (this.pickProgram && (this.pickProgram.gl.viewport(0, 0, t.width * t.pixelRatio / t.downSizingRatio, t.height * t.pixelRatio / t.downSizingRatio), this.bindProgram(this.pickProgram), this.renderProgram(fe(fe({}, t), {}, { pixelRatio: t.pixelRatio / t.downSizingRatio }), this.pickProgram), this.unbindProgram(this.pickProgram)), this.normalProgram.gl.viewport(0, 0, t.width * t.pixelRatio, t.height * t.pixelRatio), this.bindProgram(this.normalProgram), this.renderProgram(t, this.normalProgram), this.unbindProgram(this.normalProgram));
        } }, { key: "drawWebGL", value: function(t, n) {
          var i = n.gl, o = n.frameBuffer;
          if (i.bindFramebuffer(i.FRAMEBUFFER, o), !this.isInstanced) i.drawArrays(t, 0, this.verticesCount);
          else if (i instanceof WebGL2RenderingContext) i.drawArraysInstanced(t, 0, this.VERTICES, this.capacity);
          else {
            var a = i.getExtension("ANGLE_instanced_arrays");
            a && a.drawArraysInstancedANGLE(t, 0, this.VERTICES, this.capacity);
          }
        } }]);
      }(), ke = function(r) {
        function e() {
          return ne(this, e), Te(this, e, arguments);
        }
        return Re(e, r), ie(e, [{ key: "kill", value: function() {
          mr(e, "kill", this)([]);
        } }, { key: "process", value: function(n, i, o) {
          var a = i * this.STRIDE;
          if (o.hidden) {
            for (var s = a + this.STRIDE; a < s; a++) this.array[a] = 0;
            return;
          }
          return this.processVisibleItem(fr(n), a, o);
        } }]);
      }(br), ct = function(r) {
        function e() {
          var t;
          ne(this, e);
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
          return t = Te(this, e, [].concat(i)), I(t, "drawLabel", void 0), t;
        }
        return Re(e, r), ie(e, [{ key: "kill", value: function() {
          mr(e, "kill", this)([]);
        } }, { key: "process", value: function(n, i, o, a, s) {
          var l = i * this.STRIDE;
          if (s.hidden || o.hidden || a.hidden) {
            for (var c = l + this.STRIDE; l < c; l++) this.array[l] = 0;
            return;
          }
          return this.processVisibleItem(fr(n), l, o, a, s);
        } }]);
      }(br);
      function pi(r, e) {
        return function() {
          function t(n, i, o) {
            ne(this, t), I(this, "drawLabel", e), this.programs = r.map(function(a) {
              return new a(n, i, o);
            });
          }
          return ie(t, [{ key: "reallocate", value: function(i) {
            this.programs.forEach(function(o) {
              return o.reallocate(i);
            });
          } }, { key: "process", value: function(i, o, a, s, l) {
            this.programs.forEach(function(c) {
              return c.process(i, o, a, s, l);
            });
          } }, { key: "render", value: function(i) {
            this.programs.forEach(function(o) {
              return o.render(i);
            });
          } }, { key: "kill", value: function() {
            this.programs.forEach(function(i) {
              return i.kill();
            });
          } }]);
        }();
      }
      var _i = `
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;

uniform float u_correctionRatio;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) - v_radius + border;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > border)
    gl_FragColor = transparent;
  else
    gl_FragColor = v_color;

  #else
  float t = 0.0;
  if (dist > border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / border;

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`, bi = _i, yi = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_border;

const float bias = 255.0 / 254.0;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, Ei = yi, yr = WebGLRenderingContext, Er = yr.UNSIGNED_BYTE, lt = yr.FLOAT, Ti = ["u_sizeRatio", "u_correctionRatio", "u_matrix"], ut = function(r) {
        function e() {
          return ne(this, e), Te(this, e, arguments);
        }
        return Re(e, r), ie(e, [{ key: "getDefinition", value: function() {
          return { VERTICES: 3, VERTEX_SHADER_SOURCE: Ei, FRAGMENT_SHADER_SOURCE: bi, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Ti, ATTRIBUTES: [{ name: "a_position", size: 2, type: lt }, { name: "a_size", size: 1, type: lt }, { name: "a_color", size: 4, type: Er, normalized: true }, { name: "a_id", size: 4, type: Er, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: lt }], CONSTANT_DATA: [[e.ANGLE_1], [e.ANGLE_2], [e.ANGLE_3]] };
        } }, { key: "processVisibleItem", value: function(n, i, o) {
          var a = this.array, s = X(o.color);
          a[i++] = o.x, a[i++] = o.y, a[i++] = o.size, a[i++] = s, a[i++] = n;
        } }, { key: "setUniforms", value: function(n, i) {
          var o = i.gl, a = i.uniformLocations, s = a.u_sizeRatio, l = a.u_correctionRatio, c = a.u_matrix;
          o.uniform1f(l, n.correctionRatio), o.uniform1f(s, n.sizeRatio), o.uniformMatrix3fv(c, false, n.matrix);
        } }]);
      }(ke);
      I(ut, "ANGLE_1", 0), I(ut, "ANGLE_2", 2 * Math.PI / 3), I(ut, "ANGLE_3", 4 * Math.PI / 3);
      var Ri = `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`, Ci = Ri, wi = `
attribute vec2 a_position;
attribute vec2 a_normal;
attribute float a_radius;
attribute vec3 a_barycentric;

#ifdef PICKING_MODE
attribute vec4 a_id;
#else
attribute vec4 a_color;
#endif

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;

varying vec4 v_color;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float normalLength = length(a_normal);
  vec2 unitNormal = a_normal / normalLength;

  // These first computations are taken from edge.vert.glsl and
  // edge.clamped.vert.glsl. Please read it to get better comments on what's
  // happening:
  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);
  float webGLThickness = pixelsThickness * u_correctionRatio;
  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;

  float da = a_barycentric.x;
  float db = a_barycentric.y;
  float dc = a_barycentric.z;

  vec2 delta = vec2(
      da * (webGLNodeRadius * unitNormal.y)
    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)
    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),

      da * (-webGLNodeRadius * unitNormal.x)
    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)
    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)
  );

  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;

  gl_Position = vec4(position, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, Ai = wi, Tr = WebGLRenderingContext, Rr = Tr.UNSIGNED_BYTE, Ie = Tr.FLOAT, Si = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"], ze = { extremity: "target", lengthToThicknessRatio: 2.5, widenessToThicknessRatio: 2 };
      function Cr(r) {
        var e = fe(fe({}, ze), {});
        return function(t) {
          function n() {
            return ne(this, n), Te(this, n, arguments);
          }
          return Re(n, t), ie(n, [{ key: "getDefinition", value: function() {
            return { VERTICES: 3, VERTEX_SHADER_SOURCE: Ai, FRAGMENT_SHADER_SOURCE: Ci, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Si, ATTRIBUTES: [{ name: "a_position", size: 2, type: Ie }, { name: "a_normal", size: 2, type: Ie }, { name: "a_radius", size: 1, type: Ie }, { name: "a_color", size: 4, type: Rr, normalized: true }, { name: "a_id", size: 4, type: Rr, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_barycentric", size: 3, type: Ie }], CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] };
          } }, { key: "processVisibleItem", value: function(o, a, s, l, c) {
            if (e.extremity === "source") {
              var u = [l, s];
              s = u[0], l = u[1];
            }
            var d = c.size || 1, h = l.size || 1, m = s.x, g = s.y, b = l.x, E = l.y, v = X(c.color), T = b - m, _ = E - g, f = T * T + _ * _, p = 0, y = 0;
            f && (f = 1 / Math.sqrt(f), p = -_ * f * d, y = T * f * d);
            var R = this.array;
            R[a++] = b, R[a++] = E, R[a++] = -p, R[a++] = -y, R[a++] = h, R[a++] = v, R[a++] = o;
          } }, { key: "setUniforms", value: function(o, a) {
            var s = a.gl, l = a.uniformLocations, c = l.u_matrix, u = l.u_sizeRatio, d = l.u_correctionRatio, h = l.u_minEdgeThickness, m = l.u_lengthToThicknessRatio, g = l.u_widenessToThicknessRatio;
            s.uniformMatrix3fv(c, false, o.matrix), s.uniform1f(u, o.sizeRatio), s.uniform1f(d, o.correctionRatio), s.uniform1f(h, o.minEdgeThickness), s.uniform1f(m, e.lengthToThicknessRatio), s.uniform1f(g, e.widenessToThicknessRatio);
          } }]);
        }(ct);
      }
      Cr();
      var xi = `
precision mediump float;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  // We only handle antialiasing for normal mode:
  #ifdef PICKING_MODE
  gl_FragColor = v_color;
  #else
  float dist = length(v_normal) * v_thickness;

  float t = smoothstep(
    v_thickness - v_feather,
    v_thickness,
    dist
  );

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`, Li = xi, Fi = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;
attribute float a_radius;
attribute float a_radiusCoef;

uniform mat3 u_matrix;
uniform float u_zoomRatio;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float radius = a_radius * a_radiusCoef;
  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // These first computations are taken from edge.vert.glsl. Please read it to
  // get better comments on what's happening:
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here, we move the point to leave space for the arrow head:
  float direction = sign(radius);
  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;

  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);

  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, Ni = Fi, wr = WebGLRenderingContext, Ar = wr.UNSIGNED_BYTE, oe = wr.FLOAT, Pi = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"], Oi = { lengthToThicknessRatio: ze.lengthToThicknessRatio };
      function Sr(r) {
        var e = fe(fe({}, Oi), {});
        return function(t) {
          function n() {
            return ne(this, n), Te(this, n, arguments);
          }
          return Re(n, t), ie(n, [{ key: "getDefinition", value: function() {
            return { VERTICES: 6, VERTEX_SHADER_SOURCE: Ni, FRAGMENT_SHADER_SOURCE: Li, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Pi, ATTRIBUTES: [{ name: "a_positionStart", size: 2, type: oe }, { name: "a_positionEnd", size: 2, type: oe }, { name: "a_normal", size: 2, type: oe }, { name: "a_color", size: 4, type: Ar, normalized: true }, { name: "a_id", size: 4, type: Ar, normalized: true }, { name: "a_radius", size: 1, type: oe }], CONSTANT_ATTRIBUTES: [{ name: "a_positionCoef", size: 1, type: oe }, { name: "a_normalCoef", size: 1, type: oe }, { name: "a_radiusCoef", size: 1, type: oe }], CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]] };
          } }, { key: "processVisibleItem", value: function(o, a, s, l, c) {
            var u = c.size || 1, d = s.x, h = s.y, m = l.x, g = l.y, b = X(c.color), E = m - d, v = g - h, T = l.size || 1, _ = E * E + v * v, f = 0, p = 0;
            _ && (_ = 1 / Math.sqrt(_), f = -v * _ * u, p = E * _ * u);
            var y = this.array;
            y[a++] = d, y[a++] = h, y[a++] = m, y[a++] = g, y[a++] = f, y[a++] = p, y[a++] = b, y[a++] = o, y[a++] = T;
          } }, { key: "setUniforms", value: function(o, a) {
            var s = a.gl, l = a.uniformLocations, c = l.u_matrix, u = l.u_zoomRatio, d = l.u_feather, h = l.u_pixelRatio, m = l.u_correctionRatio, g = l.u_sizeRatio, b = l.u_minEdgeThickness, E = l.u_lengthToThicknessRatio;
            s.uniformMatrix3fv(c, false, o.matrix), s.uniform1f(u, o.zoomRatio), s.uniform1f(g, o.sizeRatio), s.uniform1f(m, o.correctionRatio), s.uniform1f(h, o.pixelRatio), s.uniform1f(d, o.antiAliasingFeather), s.uniform1f(b, o.minEdgeThickness), s.uniform1f(E, e.lengthToThicknessRatio);
          } }]);
        }(ct);
      }
      Sr();
      function Di(r) {
        return pi([Sr(), Cr()]);
      }
      Di();
      function ki(r) {
        return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
      }
      var ht, xr;
      function Ii() {
        return xr || (xr = 1, ht = function(e) {
          return e !== null && typeof e == "object" && typeof e.addUndirectedEdgeWithKey == "function" && typeof e.dropNode == "function" && typeof e.multi == "boolean";
        }), ht;
      }
      var zi = Ii();
      const Gi = ki(zi);
      function Mi(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function Lr(r) {
        var e = Mi(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function Fr(r, e, t) {
        return (e = Lr(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
      }
      function Nr(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function Ge(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? Nr(Object(t), true).forEach(function(n) {
            Fr(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Nr(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      function Ui(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function Bi(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, Lr(n.key), n);
        }
      }
      function Hi(r, e, t) {
        return e && Bi(r.prototype, e), Object.defineProperty(r, "prototype", { writable: false }), r;
      }
      function Me(r) {
        return Me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, Me(r);
      }
      function Pr() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (Pr = function() {
          return !!r;
        })();
      }
      function $i(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function ji(r, e) {
        if (e && (typeof e == "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return $i(r);
      }
      function Vi(r, e, t) {
        return e = Me(e), ji(r, Pr() ? Reflect.construct(e, t || [], Me(r).constructor) : e.apply(r, t));
      }
      function dt(r, e) {
        return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
          return t.__proto__ = n, t;
        }, dt(r, e);
      }
      function Wi(r, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: true, configurable: true } }), Object.defineProperty(r, "prototype", { writable: false }), e && dt(r, e);
      }
      function ft(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function Yi(r) {
        if (Array.isArray(r)) return ft(r);
      }
      function Xi(r) {
        if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
      }
      function qi(r, e) {
        if (r) {
          if (typeof r == "string") return ft(r, e);
          var t = {}.toString.call(r).slice(8, -1);
          return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ft(r, e) : void 0;
        }
      }
      function Ki() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function gt(r) {
        return Yi(r) || Xi(r) || qi(r) || Ki();
      }
      function Or(r, e, t, n) {
        var i = Math.pow(1 - r, 2) * e.x + 2 * (1 - r) * r * t.x + Math.pow(r, 2) * n.x, o = Math.pow(1 - r, 2) * e.y + 2 * (1 - r) * r * t.y + Math.pow(r, 2) * n.y;
        return { x: i, y: o };
      }
      function Zi(r, e, t) {
        for (var n = 20, i = 0, o = r, a = 0; a < n; a++) {
          var s = Or((a + 1) / n, r, e, t);
          i += Math.sqrt(Math.pow(o.x - s.x, 2) + Math.pow(o.y - s.y, 2)), o = s;
        }
        return i;
      }
      function Qi(r) {
        var e = r.curvatureAttribute, t = r.defaultCurvature, n = r.keepLabelUpright, i = n === void 0 ? true : n;
        return function(o, a, s, l, c) {
          var u = c.edgeLabelSize, d = a[e] || t, h = c.edgeLabelFont, m = c.edgeLabelWeight, g = c.edgeLabelColor.attribute ? a[c.edgeLabelColor.attribute] || c.edgeLabelColor.color || "#000" : c.edgeLabelColor.color, b = a.label;
          if (b) {
            o.fillStyle = g, o.font = "".concat(m, " ").concat(u, "px ").concat(h);
            var E = !i || s.x < l.x, v = E ? s.x : l.x, T = E ? s.y : l.y, _ = E ? l.x : s.x, f = E ? l.y : s.y, p = (v + _) / 2, y = (T + f) / 2, R = _ - v, S = f - T, F = Math.sqrt(Math.pow(R, 2) + Math.pow(S, 2)), x = E ? 1 : -1, O = p + S * d * x, k = y - R * d * x, z = a.size * 0.7 + 5, M = { x: k - T, y: -(O - v) }, H = Math.sqrt(Math.pow(M.x, 2) + Math.pow(M.y, 2)), w = { x: f - k, y: -(_ - O) }, C = Math.sqrt(Math.pow(w.x, 2) + Math.pow(w.y, 2));
            v += z * M.x / H, T += z * M.y / H, _ += z * w.x / C, f += z * w.y / C, O += z * S / F, k -= z * R / F;
            var A = { x: O, y: k }, N = { x: v, y: T }, L = { x: _, y: f }, P = Zi(N, A, L);
            if (!(P < s.size + l.size)) {
              var D = o.measureText(b).width, U = P - s.size - l.size;
              if (D > U) {
                var B = "\u2026";
                for (b = b + B, D = o.measureText(b).width; D > U && b.length > 1; ) b = b.slice(0, -2) + B, D = o.measureText(b).width;
                if (b.length < 4) return;
              }
              for (var Y = {}, J = 0, ee = b.length; J < ee; J++) {
                var sr = b[J];
                Y[sr] || (Y[sr] = o.measureText(sr).width * (1 + d * 0.35));
              }
              for (var ye = 0.5 - D / P / 2, cr = 0, fs = b.length; cr < fs; cr++) {
                var ni = b[cr], ii = Or(ye, N, A, L), gs = 2 * (1 - ye) * (O - v) + 2 * ye * (_ - O), ms = 2 * (1 - ye) * (k - T) + 2 * ye * (f - k), vs = Math.atan2(ms, gs);
                o.save(), o.translate(ii.x, ii.y), o.rotate(vs), o.fillText(ni, 0, 0), o.restore(), ye += Y[ni] / P;
              }
            }
          }
        };
      }
      function Ji(r) {
        var e = r.arrowHead, t = (e == null ? void 0 : e.extremity) === "target" || (e == null ? void 0 : e.extremity) === "both", n = (e == null ? void 0 : e.extremity) === "source" || (e == null ? void 0 : e.extremity) === "both", i = `
precision highp float;

varying vec4 v_color;
varying float v_thickness;
varying float v_feather;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;
`.concat(t ? `
varying float v_targetSize;
varying vec2 v_targetPoint;` : "", `
`).concat(n ? `
varying float v_sourceSize;
varying vec2 v_sourcePoint;` : "", `
`).concat(e ? `
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;` : "", `

float det(vec2 a, vec2 b) {
  return a.x * b.y - b.x * a.y;
}

vec2 getDistanceVector(vec2 b0, vec2 b1, vec2 b2) {
  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);
  float f = b * d - a * a;
  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;
  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);
  gf = vec2(gf.y, -gf.x);
  vec2 pp = -f * gf / dot(gf, gf);
  vec2 d0p = b0 - pp;
  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);
  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);
  return mix(mix(b0, b1, t), mix(b1, b2, t), t);
}

float distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {
  return length(getDistanceVector(b0 - p, b1 - p, b2 - p));
}

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);
  float thickness = v_thickness;
`).concat(t ? `
  float distToTarget = length(gl_FragCoord.xy - v_targetPoint);
  float targetArrowLength = v_targetSize + thickness * u_lengthToThicknessRatio;
  if (distToTarget < targetArrowLength) {
    thickness = (distToTarget - v_targetSize) / (targetArrowLength - v_targetSize) * u_widenessToThicknessRatio * thickness;
  }` : "", `
`).concat(n ? `
  float distToSource = length(gl_FragCoord.xy - v_sourcePoint);
  float sourceArrowLength = v_sourceSize + thickness * u_lengthToThicknessRatio;
  if (distToSource < sourceArrowLength) {
    thickness = (distToSource - v_sourceSize) / (sourceArrowLength - v_sourceSize) * u_widenessToThicknessRatio * thickness;
  }` : "", `

  float halfThickness = thickness / 2.0;
  if (dist < halfThickness) {
    #ifdef PICKING_MODE
    gl_FragColor = v_color;
    #else
    float t = smoothstep(
      halfThickness - v_feather,
      halfThickness,
      dist
    );

    gl_FragColor = mix(v_color, transparent, t);
    #endif
  } else {
    gl_FragColor = transparent;
  }
}
`);
        return i;
      }
      function eo(r) {
        var e = r.arrowHead, t = (e == null ? void 0 : e.extremity) === "target" || (e == null ? void 0 : e.extremity) === "both", n = (e == null ? void 0 : e.extremity) === "source" || (e == null ? void 0 : e.extremity) === "both", i = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute float a_direction;
attribute float a_thickness;
attribute vec2 a_source;
attribute vec2 a_target;
attribute float a_current;
attribute float a_curvature;
`.concat(t ? `attribute float a_targetSize;
` : "", `
`).concat(n ? `attribute float a_sourceSize;
` : "", `

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform vec2 u_dimensions;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying float v_thickness;
varying float v_feather;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;
`).concat(t ? `
varying float v_targetSize;
varying vec2 v_targetPoint;` : "", `
`).concat(n ? `
varying float v_sourceSize;
varying vec2 v_sourcePoint;` : "", `
`).concat(e ? `
uniform float u_widenessToThicknessRatio;` : "", `

const float bias = 255.0 / 254.0;
const float epsilon = 0.7;

vec2 clipspaceToViewport(vec2 pos, vec2 dimensions) {
  return vec2(
    (pos.x + 1.0) * dimensions.x / 2.0,
    (pos.y + 1.0) * dimensions.y / 2.0
  );
}

vec2 viewportToClipspace(vec2 pos, vec2 dimensions) {
  return vec2(
    pos.x / dimensions.x * 2.0 - 1.0,
    pos.y / dimensions.y * 2.0 - 1.0
  );
}

void main() {
  float minThickness = u_minEdgeThickness;

  // Selecting the correct position
  // Branchless "position = a_source if a_current == 1.0 else a_target"
  vec2 position = a_source * max(0.0, a_current) + a_target * max(0.0, 1.0 - a_current);
  position = (u_matrix * vec3(position, 1)).xy;

  vec2 source = (u_matrix * vec3(a_source, 1)).xy;
  vec2 target = (u_matrix * vec3(a_target, 1)).xy;

  vec2 viewportPosition = clipspaceToViewport(position, u_dimensions);
  vec2 viewportSource = clipspaceToViewport(source, u_dimensions);
  vec2 viewportTarget = clipspaceToViewport(target, u_dimensions);

  vec2 delta = viewportTarget.xy - viewportSource.xy;
  float len = length(delta);
  vec2 normal = vec2(-delta.y, delta.x) * a_direction;
  vec2 unitNormal = normal / len;
  float boundingBoxThickness = len * a_curvature;

  float curveThickness = max(minThickness, a_thickness / u_sizeRatio);
  v_thickness = curveThickness * u_pixelRatio;
  v_feather = u_feather;

  v_cpA = viewportSource;
  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;
  v_cpC = viewportTarget;

  vec2 viewportOffsetPosition = (
    viewportPosition +
    unitNormal * (boundingBoxThickness / 2.0 + sign(boundingBoxThickness) * (`).concat(e ? "curveThickness * u_widenessToThicknessRatio" : "curveThickness", ` + epsilon)) *
    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw
  );

  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);
  gl_Position = vec4(position, 0, 1);
    
`).concat(t ? `
  v_targetSize = a_targetSize * u_pixelRatio / u_sizeRatio;
  v_targetPoint = viewportTarget;
` : "", `
`).concat(n ? `
  v_sourceSize = a_sourceSize * u_pixelRatio / u_sizeRatio;
  v_sourcePoint = viewportSource;
` : "", `

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`);
        return i;
      }
      var Dr = 0.25, to = { arrowHead: null, curvatureAttribute: "curvature", defaultCurvature: Dr }, kr = WebGLRenderingContext, Ir = kr.UNSIGNED_BYTE, te = kr.FLOAT;
      function mt(r) {
        var e = Ge(Ge({}, to), r || {}), t = e, n = t.arrowHead, i = t.curvatureAttribute, o = t.drawLabel, a = (n == null ? void 0 : n.extremity) === "target" || (n == null ? void 0 : n.extremity) === "both", s = (n == null ? void 0 : n.extremity) === "source" || (n == null ? void 0 : n.extremity) === "both", l = ["u_matrix", "u_sizeRatio", "u_dimensions", "u_pixelRatio", "u_feather", "u_minEdgeThickness"].concat(gt(n ? ["u_lengthToThicknessRatio", "u_widenessToThicknessRatio"] : []));
        return function(c) {
          function u() {
            var d;
            Ui(this, u);
            for (var h = arguments.length, m = new Array(h), g = 0; g < h; g++) m[g] = arguments[g];
            return d = Vi(this, u, [].concat(m)), Fr(d, "drawLabel", o || Qi(e)), d;
          }
          return Wi(u, c), Hi(u, [{ key: "getDefinition", value: function() {
            return { VERTICES: 6, VERTEX_SHADER_SOURCE: eo(e), FRAGMENT_SHADER_SOURCE: Ji(e), METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: l, ATTRIBUTES: [{ name: "a_source", size: 2, type: te }, { name: "a_target", size: 2, type: te }].concat(gt(a ? [{ name: "a_targetSize", size: 1, type: te }] : []), gt(s ? [{ name: "a_sourceSize", size: 1, type: te }] : []), [{ name: "a_thickness", size: 1, type: te }, { name: "a_curvature", size: 1, type: te }, { name: "a_color", size: 4, type: Ir, normalized: true }, { name: "a_id", size: 4, type: Ir, normalized: true }]), CONSTANT_ATTRIBUTES: [{ name: "a_current", size: 1, type: te }, { name: "a_direction", size: 1, type: te }], CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [0, -1], [1, 1], [1, -1]] };
          } }, { key: "processVisibleItem", value: function(h, m, g, b, E) {
            var v, T = E.size || 1, _ = g.x, f = g.y, p = b.x, y = b.y, R = X(E.color), S = (v = E[i]) !== null && v !== void 0 ? v : Dr, F = this.array;
            F[m++] = _, F[m++] = f, F[m++] = p, F[m++] = y, a && (F[m++] = b.size), s && (F[m++] = g.size), F[m++] = T, F[m++] = S, F[m++] = R, F[m++] = h;
          } }, { key: "setUniforms", value: function(h, m) {
            var g = m.gl, b = m.uniformLocations, E = b.u_matrix, v = b.u_pixelRatio, T = b.u_feather, _ = b.u_sizeRatio, f = b.u_dimensions, p = b.u_minEdgeThickness;
            if (g.uniformMatrix3fv(E, false, h.matrix), g.uniform1f(v, h.pixelRatio), g.uniform1f(_, h.sizeRatio), g.uniform1f(T, h.antiAliasingFeather), g.uniform2f(f, h.width * h.pixelRatio, h.height * h.pixelRatio), g.uniform1f(p, h.minEdgeThickness), n) {
              var y = b.u_lengthToThicknessRatio, R = b.u_widenessToThicknessRatio;
              g.uniform1f(y, n.lengthToThicknessRatio), g.uniform1f(R, n.widenessToThicknessRatio);
            }
          } }]);
        }(ct);
      }
      var ro = mt();
      mt({ arrowHead: ze }), mt({ arrowHead: Ge(Ge({}, ze), {}, { extremity: "both" }) });
      function no(r) {
        if (Array.isArray(r)) return r;
      }
      function io(r, e) {
        var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (t != null) {
          var n, i, o, a, s = [], l = true, c = false;
          try {
            if (o = (t = t.call(r)).next, e !== 0) for (; !(l = (n = o.call(t)).done) && (s.push(n.value), s.length !== e); l = true) ;
          } catch (u) {
            c = true, i = u;
          } finally {
            try {
              if (!l && t.return != null && (a = t.return(), Object(a) !== a)) return;
            } finally {
              if (c) throw i;
            }
          }
          return s;
        }
      }
      function vt(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function zr(r, e) {
        if (r) {
          if (typeof r == "string") return vt(r, e);
          var t = {}.toString.call(r).slice(8, -1);
          return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? vt(r, e) : void 0;
        }
      }
      function oo() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ao(r, e) {
        return no(r) || io(r, e) || zr(r, e) || oo();
      }
      function so(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function co(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function Gr(r) {
        var e = co(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function lo(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, Gr(n.key), n);
        }
      }
      function uo(r, e, t) {
        return e && lo(r.prototype, e), Object.defineProperty(r, "prototype", { writable: false }), r;
      }
      function Ue(r) {
        return Ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, Ue(r);
      }
      function Mr() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (Mr = function() {
          return !!r;
        })();
      }
      function ho(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function fo(r, e) {
        if (e && (typeof e == "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return ho(r);
      }
      function go(r, e, t) {
        return e = Ue(e), fo(r, Mr() ? Reflect.construct(e, t || [], Ue(r).constructor) : e.apply(r, t));
      }
      function pt(r, e) {
        return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
          return t.__proto__ = n, t;
        }, pt(r, e);
      }
      function mo(r, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: true, configurable: true } }), Object.defineProperty(r, "prototype", { writable: false }), e && pt(r, e);
      }
      function ge(r, e, t) {
        return (e = Gr(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
      }
      function vo(r) {
        if (Array.isArray(r)) return vt(r);
      }
      function po(r) {
        if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
      }
      function _o() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function _t(r) {
        return vo(r) || po(r) || zr(r) || _o();
      }
      function Ur(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function Br(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? Ur(Object(t), true).forEach(function(n) {
            ge(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ur(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      var bo = "relative", yo = { drawLabel: void 0, drawHover: void 0, borders: [{ size: { value: 0.1 }, color: { attribute: "borderColor" } }, { size: { fill: true }, color: { attribute: "color" } }] }, Eo = "#000000";
      function To(r) {
        var e = r.borders, t = st(e.filter(function(i) {
          var o = i.size;
          return "fill" in o;
        }).length), n = `
precision highp float;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
varying vec4 v_color;
#else
// For normal mode, we use the border colors defined in the program:
`.concat(e.flatMap(function(i, o) {
          var a = i.size;
          return "attribute" in a ? ["varying float v_borderSize_".concat(o + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.flatMap(function(i, o) {
          var a = i.color;
          return "attribute" in a ? ["varying vec4 v_borderColor_".concat(o + 1, ";")] : "value" in a ? ["uniform vec4 u_borderColor_".concat(o + 1, ";")] : [];
        }).join(`
`), `
#endif

uniform float u_correctionRatio;

const float bias = 255.0 / 254.0;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float dist = length(v_diffVector);
  float aaBorder = 2.0 * u_correctionRatio;
  float v_borderSize_0 = v_radius;
  vec4 v_borderColor_0 = transparent;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > v_radius)
    gl_FragColor = transparent;
  else {
    gl_FragColor = v_color;
    gl_FragColor.a *= bias;
  }
  #else
  // Sizes:
`).concat(e.flatMap(function(i, o) {
          var a = i.size;
          if ("fill" in a) return [];
          a = a;
          var s = "attribute" in a ? "v_borderSize_".concat(o + 1) : st(a.value), l = (a.mode || bo) === "pixels" ? "u_correctionRatio" : "v_radius";
          return ["  float borderSize_".concat(o + 1, " = ").concat(l, " * ").concat(s, ";")];
        }).join(`
`), `
  // Now, let's split the remaining space between "fill" borders:
  float fillBorderSize = (v_radius - (`).concat(e.flatMap(function(i, o) {
          var a = i.size;
          return "fill" in a ? [] : ["borderSize_".concat(o + 1)];
        }).join(" + "), ") ) / ").concat(t, `;
`).concat(e.flatMap(function(i, o) {
          var a = i.size;
          return "fill" in a ? ["  float borderSize_".concat(o + 1, " = fillBorderSize;")] : [];
        }).join(`
`), `

  // Finally, normalize all border sizes, to start from the full size and to end with the smallest:
  float adjustedBorderSize_0 = v_radius;
`).concat(e.map(function(i, o) {
          return "  float adjustedBorderSize_".concat(o + 1, " = adjustedBorderSize_").concat(o, " - borderSize_").concat(o + 1, ";");
        }).join(`
`), `

  // Colors:
  vec4 borderColor_0 = transparent;
`).concat(e.map(function(i, o) {
          var a = i.color, s = [];
          return "attribute" in a ? s.push("  vec4 borderColor_".concat(o + 1, " = v_borderColor_").concat(o + 1, ";")) : "transparent" in a ? s.push("  vec4 borderColor_".concat(o + 1, " = vec4(0.0, 0.0, 0.0, 0.0);")) : s.push("  vec4 borderColor_".concat(o + 1, " = u_borderColor_").concat(o + 1, ";")), s.push("  borderColor_".concat(o + 1, ".a *= bias;")), s.push("  if (borderSize_".concat(o + 1, " <= 1.0 * u_correctionRatio) { borderColor_").concat(o + 1, " = borderColor_").concat(o, "; }")), s.join(`
`);
        }).join(`
`), `
  if (dist > adjustedBorderSize_0) {
    gl_FragColor = borderColor_0;
  } else `).concat(e.map(function(i, o) {
          return "if (dist > adjustedBorderSize_".concat(o, ` - aaBorder) {
    gl_FragColor = mix(borderColor_`).concat(o + 1, ", borderColor_").concat(o, ", (dist - adjustedBorderSize_").concat(o, ` + aaBorder) / aaBorder);
  } else if (dist > adjustedBorderSize_`).concat(o + 1, `) {
    gl_FragColor = borderColor_`).concat(o + 1, `;
  } else `);
        }).join(""), ` { /* Nothing to add here */ }
  #endif
}
`);
        return n;
      }
      function Ro(r) {
        var e = r.borders, t = `
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
attribute vec4 a_id;
varying vec4 v_color;
#else
`.concat(e.flatMap(function(n, i) {
          var o = n.size;
          return "attribute" in o ? ["attribute float a_borderSize_".concat(i + 1, ";"), "varying float v_borderSize_".concat(i + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.flatMap(function(n, i) {
          var o = n.color;
          return "attribute" in o ? ["attribute vec4 a_borderColor_".concat(i + 1, ";"), "varying vec4 v_borderColor_".concat(i + 1, ";")] : [];
        }).join(`
`), `
#endif

const float bias = 255.0 / 254.0;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_radius = size / 2.0;
  v_diffVector = diffVector;

  #ifdef PICKING_MODE
  v_color = a_id;
  #else
`).concat(e.flatMap(function(n, i) {
          var o = n.size;
          return "attribute" in o ? ["  v_borderSize_".concat(i + 1, " = a_borderSize_").concat(i + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.flatMap(function(n, i) {
          var o = n.color;
          return "attribute" in o ? ["  v_borderColor_".concat(i + 1, " = a_borderColor_").concat(i + 1, ";")] : [];
        }).join(`
`), `
  #endif
}
`);
        return t;
      }
      var Hr = WebGLRenderingContext, $r = Hr.UNSIGNED_BYTE, Be = Hr.FLOAT;
      function jr(r) {
        var e, t = Br(Br({}, yo), r || {}), n = t.borders, i = t.drawLabel, o = t.drawHover, a = ["u_sizeRatio", "u_correctionRatio", "u_matrix"].concat(_t(n.flatMap(function(s, l) {
          var c = s.color;
          return "value" in c ? ["u_borderColor_".concat(l + 1)] : [];
        })));
        return e = function(s) {
          function l() {
            var c;
            so(this, l);
            for (var u = arguments.length, d = new Array(u), h = 0; h < u; h++) d[h] = arguments[h];
            return c = go(this, l, [].concat(d)), ge(c, "drawLabel", i), ge(c, "drawHover", o), c;
          }
          return mo(l, s), uo(l, [{ key: "getDefinition", value: function() {
            return { VERTICES: 3, VERTEX_SHADER_SOURCE: Ro(t), FRAGMENT_SHADER_SOURCE: To(t), METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: a, ATTRIBUTES: [{ name: "a_position", size: 2, type: Be }, { name: "a_id", size: 4, type: $r, normalized: true }, { name: "a_size", size: 1, type: Be }].concat(_t(n.flatMap(function(u, d) {
              var h = u.color;
              return "attribute" in h ? [{ name: "a_borderColor_".concat(d + 1), size: 4, type: $r, normalized: true }] : [];
            })), _t(n.flatMap(function(u, d) {
              var h = u.size;
              return "attribute" in h ? [{ name: "a_borderSize_".concat(d + 1), size: 1, type: Be }] : [];
            }))), CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: Be }], CONSTANT_DATA: [[l.ANGLE_1], [l.ANGLE_2], [l.ANGLE_3]] };
          } }, { key: "processVisibleItem", value: function(u, d, h) {
            var m = this.array;
            m[d++] = h.x, m[d++] = h.y, m[d++] = u, m[d++] = h.size, n.forEach(function(g) {
              var b = g.color;
              "attribute" in b && (m[d++] = X(h[b.attribute] || b.defaultValue || Eo));
            }), n.forEach(function(g) {
              var b = g.size;
              "attribute" in b && (m[d++] = h[b.attribute] || b.defaultValue);
            });
          } }, { key: "setUniforms", value: function(u, d) {
            var h = d.gl, m = d.uniformLocations, g = m.u_sizeRatio, b = m.u_correctionRatio, E = m.u_matrix;
            h.uniform1f(b, u.correctionRatio), h.uniform1f(g, u.sizeRatio), h.uniformMatrix3fv(E, false, u.matrix), n.forEach(function(v, T) {
              var _ = v.color;
              if ("value" in _) {
                var f = m["u_borderColor_".concat(T + 1)], p = nt(_.value), y = ao(p, 4), R = y[0], S = y[1], F = y[2], x = y[3];
                h.uniform4f(f, R / 255, S / 255, F / 255, x / 255);
              }
            });
          } }]);
        }(ke), ge(e, "ANGLE_1", 0), ge(e, "ANGLE_2", 2 * Math.PI / 3), ge(e, "ANGLE_3", 4 * Math.PI / 3), e;
      }
      jr();
      var He = { exports: {} }, Vr;
      function Co() {
        if (Vr) return He.exports;
        Vr = 1;
        var r = typeof Reflect == "object" ? Reflect : null, e = r && typeof r.apply == "function" ? r.apply : function(p, y, R) {
          return Function.prototype.apply.call(p, y, R);
        }, t;
        r && typeof r.ownKeys == "function" ? t = r.ownKeys : Object.getOwnPropertySymbols ? t = function(p) {
          return Object.getOwnPropertyNames(p).concat(Object.getOwnPropertySymbols(p));
        } : t = function(p) {
          return Object.getOwnPropertyNames(p);
        };
        function n(f) {
          console && console.warn && console.warn(f);
        }
        var i = Number.isNaN || function(p) {
          return p !== p;
        };
        function o() {
          o.init.call(this);
        }
        He.exports = o, He.exports.once = v, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
        var a = 10;
        function s(f) {
          if (typeof f != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof f);
        }
        Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
          return a;
        }, set: function(f) {
          if (typeof f != "number" || f < 0 || i(f)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + f + ".");
          a = f;
        } }), o.init = function() {
          (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, o.prototype.setMaxListeners = function(p) {
          if (typeof p != "number" || p < 0 || i(p)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + p + ".");
          return this._maxListeners = p, this;
        };
        function l(f) {
          return f._maxListeners === void 0 ? o.defaultMaxListeners : f._maxListeners;
        }
        o.prototype.getMaxListeners = function() {
          return l(this);
        }, o.prototype.emit = function(p) {
          for (var y = [], R = 1; R < arguments.length; R++) y.push(arguments[R]);
          var S = p === "error", F = this._events;
          if (F !== void 0) S = S && F.error === void 0;
          else if (!S) return false;
          if (S) {
            var x;
            if (y.length > 0 && (x = y[0]), x instanceof Error) throw x;
            var O = new Error("Unhandled error." + (x ? " (" + x.message + ")" : ""));
            throw O.context = x, O;
          }
          var k = F[p];
          if (k === void 0) return false;
          if (typeof k == "function") e(k, this, y);
          else for (var z = k.length, M = g(k, z), R = 0; R < z; ++R) e(M[R], this, y);
          return true;
        };
        function c(f, p, y, R) {
          var S, F, x;
          if (s(y), F = f._events, F === void 0 ? (F = f._events = /* @__PURE__ */ Object.create(null), f._eventsCount = 0) : (F.newListener !== void 0 && (f.emit("newListener", p, y.listener ? y.listener : y), F = f._events), x = F[p]), x === void 0) x = F[p] = y, ++f._eventsCount;
          else if (typeof x == "function" ? x = F[p] = R ? [y, x] : [x, y] : R ? x.unshift(y) : x.push(y), S = l(f), S > 0 && x.length > S && !x.warned) {
            x.warned = true;
            var O = new Error("Possible EventEmitter memory leak detected. " + x.length + " " + String(p) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            O.name = "MaxListenersExceededWarning", O.emitter = f, O.type = p, O.count = x.length, n(O);
          }
          return f;
        }
        o.prototype.addListener = function(p, y) {
          return c(this, p, y, false);
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(p, y) {
          return c(this, p, y, true);
        };
        function u() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function d(f, p, y) {
          var R = { fired: false, wrapFn: void 0, target: f, type: p, listener: y }, S = u.bind(R);
          return S.listener = y, R.wrapFn = S, S;
        }
        o.prototype.once = function(p, y) {
          return s(y), this.on(p, d(this, p, y)), this;
        }, o.prototype.prependOnceListener = function(p, y) {
          return s(y), this.prependListener(p, d(this, p, y)), this;
        }, o.prototype.removeListener = function(p, y) {
          var R, S, F, x, O;
          if (s(y), S = this._events, S === void 0) return this;
          if (R = S[p], R === void 0) return this;
          if (R === y || R.listener === y) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete S[p], S.removeListener && this.emit("removeListener", p, R.listener || y));
          else if (typeof R != "function") {
            for (F = -1, x = R.length - 1; x >= 0; x--) if (R[x] === y || R[x].listener === y) {
              O = R[x].listener, F = x;
              break;
            }
            if (F < 0) return this;
            F === 0 ? R.shift() : b(R, F), R.length === 1 && (S[p] = R[0]), S.removeListener !== void 0 && this.emit("removeListener", p, O || y);
          }
          return this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(p) {
          var y, R, S;
          if (R = this._events, R === void 0) return this;
          if (R.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : R[p] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete R[p]), this;
          if (arguments.length === 0) {
            var F = Object.keys(R), x;
            for (S = 0; S < F.length; ++S) x = F[S], x !== "removeListener" && this.removeAllListeners(x);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (y = R[p], typeof y == "function") this.removeListener(p, y);
          else if (y !== void 0) for (S = y.length - 1; S >= 0; S--) this.removeListener(p, y[S]);
          return this;
        };
        function h(f, p, y) {
          var R = f._events;
          if (R === void 0) return [];
          var S = R[p];
          return S === void 0 ? [] : typeof S == "function" ? y ? [S.listener || S] : [S] : y ? E(S) : g(S, S.length);
        }
        o.prototype.listeners = function(p) {
          return h(this, p, true);
        }, o.prototype.rawListeners = function(p) {
          return h(this, p, false);
        }, o.listenerCount = function(f, p) {
          return typeof f.listenerCount == "function" ? f.listenerCount(p) : m.call(f, p);
        }, o.prototype.listenerCount = m;
        function m(f) {
          var p = this._events;
          if (p !== void 0) {
            var y = p[f];
            if (typeof y == "function") return 1;
            if (y !== void 0) return y.length;
          }
          return 0;
        }
        o.prototype.eventNames = function() {
          return this._eventsCount > 0 ? t(this._events) : [];
        };
        function g(f, p) {
          for (var y = new Array(p), R = 0; R < p; ++R) y[R] = f[R];
          return y;
        }
        function b(f, p) {
          for (; p + 1 < f.length; p++) f[p] = f[p + 1];
          f.pop();
        }
        function E(f) {
          for (var p = new Array(f.length), y = 0; y < p.length; ++y) p[y] = f[y].listener || f[y];
          return p;
        }
        function v(f, p) {
          return new Promise(function(y, R) {
            function S(x) {
              f.removeListener(p, F), R(x);
            }
            function F() {
              typeof f.removeListener == "function" && f.removeListener("error", S), y([].slice.call(arguments));
            }
            _(f, p, F, { once: true }), p !== "error" && T(f, S, { once: true });
          });
        }
        function T(f, p, y) {
          typeof f.on == "function" && _(f, "error", p, y);
        }
        function _(f, p, y, R) {
          if (typeof f.on == "function") R.once ? f.once(p, y) : f.on(p, y);
          else if (typeof f.addEventListener == "function") f.addEventListener(p, function S(F) {
            R.once && f.removeEventListener(p, S), y(F);
          });
          else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof f);
        }
        return He.exports;
      }
      var Wr = Co();
      function bt(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function wo(r) {
        if (Array.isArray(r)) return bt(r);
      }
      function Ao(r) {
        if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
      }
      function So(r, e) {
        if (r) {
          if (typeof r == "string") return bt(r, e);
          var t = {}.toString.call(r).slice(8, -1);
          return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? bt(r, e) : void 0;
        }
      }
      function xo() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function yt(r) {
        return wo(r) || Ao(r) || So(r) || xo();
      }
      function Et(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function Lo(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function Yr(r) {
        var e = Lo(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function Fo(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, Yr(n.key), n);
        }
      }
      function Tt(r, e, t) {
        return e && Fo(r.prototype, e), Object.defineProperty(r, "prototype", { writable: false }), r;
      }
      function me(r) {
        return me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, me(r);
      }
      function Xr() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (Xr = function() {
          return !!r;
        })();
      }
      function No(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function Po(r, e) {
        if (e && (typeof e == "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return No(r);
      }
      function qr(r, e, t) {
        return e = me(e), Po(r, Xr() ? Reflect.construct(e, t || [], me(r).constructor) : e.apply(r, t));
      }
      function Oo(r, e) {
        for (; !{}.hasOwnProperty.call(r, e) && (r = me(r)) !== null; ) ;
        return r;
      }
      function Rt() {
        return Rt = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, e, t) {
          var n = Oo(r, e);
          if (n) {
            var i = Object.getOwnPropertyDescriptor(n, e);
            return i.get ? i.get.call(arguments.length < 3 ? r : t) : i.value;
          }
        }, Rt.apply(null, arguments);
      }
      function Kr(r, e, t, n) {
        var i = Rt(me(r.prototype), e, t);
        return typeof i == "function" ? function(o) {
          return i.apply(t, o);
        } : i;
      }
      function Ct(r, e) {
        return Ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
          return t.__proto__ = n, t;
        }, Ct(r, e);
      }
      function Zr(r, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: true, configurable: true } }), Object.defineProperty(r, "prototype", { writable: false }), e && Ct(r, e);
      }
      function G(r, e, t) {
        return (e = Yr(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
      }
      function Do(r, e) {
        if (r == null) return {};
        var t = {};
        for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
          if (e.indexOf(n) !== -1) continue;
          t[n] = r[n];
        }
        return t;
      }
      function ko(r, e) {
        if (r == null) return {};
        var t, n, i = Do(r, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          for (n = 0; n < o.length; n++) t = o[n], e.indexOf(t) === -1 && {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
        }
        return i;
      }
      function Qr(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function $(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? Qr(Object(t), true).forEach(function(n) {
            G(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Qr(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      function Io(r) {
        var e = r.texturesCount, t = `
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;
varying float v_textureIndex;

uniform sampler2D u_atlas[`.concat(e, `];
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_percentagePadding;
uniform bool u_colorizeImages;
uniform bool u_keepWithinCircle;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

const float radius = 0.5;

void main(void) {
  float border = 2.0 * u_correctionRatio;
  float dist = length(v_diffVector);
  vec4 color = gl_FragColor;

  float c = cos(-u_cameraAngle);
  float s = sin(-u_cameraAngle);
  vec2 diffVector = mat2(c, s, -s, c) * (v_diffVector);

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  border = 0.0;
  color = v_color;

  #else
  // First case: No image to display
  if (v_texture.w <= 0.0) {
    if (!u_colorizeImages) {
      color = v_color;
    }
  }

  // Second case: Image loaded into the texture
  else {
    float paddingRatio = 1.0 + 2.0 * u_percentagePadding;
    float coef = u_keepWithinCircle ? 1.0 : `).concat(Math.SQRT2, `;
    vec2 coordinateInTexture = diffVector * vec2(paddingRatio, -paddingRatio) / v_radius / 2.0 * coef + vec2(0.5, 0.5);
    int index = int(v_textureIndex + 0.5); // +0.5 avoid rounding errors

    bool noTextureFound = false;
    vec4 texel;

    `).concat(yt(new Array(e)).map(function(n, i) {
          return "if (index == ".concat(i, ") texel = texture2D(u_atlas[").concat(i, "], (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);");
        }).join(`
    else `) + `else {
      texel = texture2D(u_atlas[0], (v_texture.xy + coordinateInTexture * v_texture.zw), -1.0);
      noTextureFound = true;
    }`, `

    if (noTextureFound) {
      color = v_color;
    } else {
      // Colorize all visible image pixels:
      if (u_colorizeImages) {
        color = mix(gl_FragColor, v_color, texel.a);
      }

      // Colorize background pixels, keep image pixel colors:
      else {
        color = vec4(mix(v_color, texel, texel.a).rgb, max(texel.a, v_color.a));
      }

      // Erase pixels "in the padding":
      if (abs(diffVector.x) > v_radius / paddingRatio || abs(diffVector.y) > v_radius / paddingRatio) {
        color = u_colorizeImages ? gl_FragColor : v_color;
      }
    }
  }
  #endif

  // Crop in a circle when u_keepWithinCircle is truthy:
  if (u_keepWithinCircle) {
    if (dist < v_radius - border) {
      gl_FragColor = color;
    } else if (dist < v_radius) {
      gl_FragColor = mix(transparent, color, (v_radius - dist) / border);
    }
  }

  // Crop in a square else:
  else {
    float squareHalfSize = v_radius * `).concat(Math.SQRT1_2 * Math.cos(Math.PI / 12), `;
    if (abs(diffVector.x) > squareHalfSize || abs(diffVector.y) > squareHalfSize) {
      gl_FragColor = transparent;
    } else {
      gl_FragColor = color;
    }
  }
}
`);
        return t;
      }
      var zo = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;
attribute vec4 a_texture;
attribute float a_textureIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying vec4 v_texture;
varying float v_textureIndex;

const float bias = 255.0 / 254.0;
const float marginRatio = 1.05;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector * marginRatio;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0 / marginRatio;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;

  // Pass the texture coordinates:
  v_textureIndex = a_textureIndex;
  v_texture = a_texture;
  #endif

  v_color.a *= bias;
}
`, Go = zo;
      function ae() {
        ae = function() {
          return e;
        };
        var r, e = {}, t = Object.prototype, n = t.hasOwnProperty, i = Object.defineProperty || function(w, C, A) {
          w[C] = A.value;
        }, o = typeof Symbol == "function" ? Symbol : {}, a = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
        function c(w, C, A) {
          return Object.defineProperty(w, C, { value: A, enumerable: true, configurable: true, writable: true }), w[C];
        }
        try {
          c({}, "");
        } catch {
          c = function(C, A, N) {
            return C[A] = N;
          };
        }
        function u(w, C, A, N) {
          var L = C && C.prototype instanceof v ? C : v, P = Object.create(L.prototype), D = new M(N || []);
          return i(P, "_invoke", { value: x(w, A, D) }), P;
        }
        function d(w, C, A) {
          try {
            return { type: "normal", arg: w.call(C, A) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var h = "suspendedStart", m = "suspendedYield", g = "executing", b = "completed", E = {};
        function v() {
        }
        function T() {
        }
        function _() {
        }
        var f = {};
        c(f, a, function() {
          return this;
        });
        var p = Object.getPrototypeOf, y = p && p(p(H([])));
        y && y !== t && n.call(y, a) && (f = y);
        var R = _.prototype = v.prototype = Object.create(f);
        function S(w) {
          ["next", "throw", "return"].forEach(function(C) {
            c(w, C, function(A) {
              return this._invoke(C, A);
            });
          });
        }
        function F(w, C) {
          function A(L, P, D, U) {
            var B = d(w[L], w, P);
            if (B.type !== "throw") {
              var Y = B.arg, J = Y.value;
              return J && typeof J == "object" && n.call(J, "__await") ? C.resolve(J.__await).then(function(ee) {
                A("next", ee, D, U);
              }, function(ee) {
                A("throw", ee, D, U);
              }) : C.resolve(J).then(function(ee) {
                Y.value = ee, D(Y);
              }, function(ee) {
                return A("throw", ee, D, U);
              });
            }
            U(B.arg);
          }
          var N;
          i(this, "_invoke", { value: function(L, P) {
            function D() {
              return new C(function(U, B) {
                A(L, P, U, B);
              });
            }
            return N = N ? N.then(D, D) : D();
          } });
        }
        function x(w, C, A) {
          var N = h;
          return function(L, P) {
            if (N === g) throw Error("Generator is already running");
            if (N === b) {
              if (L === "throw") throw P;
              return { value: r, done: true };
            }
            for (A.method = L, A.arg = P; ; ) {
              var D = A.delegate;
              if (D) {
                var U = O(D, A);
                if (U) {
                  if (U === E) continue;
                  return U;
                }
              }
              if (A.method === "next") A.sent = A._sent = A.arg;
              else if (A.method === "throw") {
                if (N === h) throw N = b, A.arg;
                A.dispatchException(A.arg);
              } else A.method === "return" && A.abrupt("return", A.arg);
              N = g;
              var B = d(w, C, A);
              if (B.type === "normal") {
                if (N = A.done ? b : m, B.arg === E) continue;
                return { value: B.arg, done: A.done };
              }
              B.type === "throw" && (N = b, A.method = "throw", A.arg = B.arg);
            }
          };
        }
        function O(w, C) {
          var A = C.method, N = w.iterator[A];
          if (N === r) return C.delegate = null, A === "throw" && w.iterator.return && (C.method = "return", C.arg = r, O(w, C), C.method === "throw") || A !== "return" && (C.method = "throw", C.arg = new TypeError("The iterator does not provide a '" + A + "' method")), E;
          var L = d(N, w.iterator, C.arg);
          if (L.type === "throw") return C.method = "throw", C.arg = L.arg, C.delegate = null, E;
          var P = L.arg;
          return P ? P.done ? (C[w.resultName] = P.value, C.next = w.nextLoc, C.method !== "return" && (C.method = "next", C.arg = r), C.delegate = null, E) : P : (C.method = "throw", C.arg = new TypeError("iterator result is not an object"), C.delegate = null, E);
        }
        function k(w) {
          var C = { tryLoc: w[0] };
          1 in w && (C.catchLoc = w[1]), 2 in w && (C.finallyLoc = w[2], C.afterLoc = w[3]), this.tryEntries.push(C);
        }
        function z(w) {
          var C = w.completion || {};
          C.type = "normal", delete C.arg, w.completion = C;
        }
        function M(w) {
          this.tryEntries = [{ tryLoc: "root" }], w.forEach(k, this), this.reset(true);
        }
        function H(w) {
          if (w || w === "") {
            var C = w[a];
            if (C) return C.call(w);
            if (typeof w.next == "function") return w;
            if (!isNaN(w.length)) {
              var A = -1, N = function L() {
                for (; ++A < w.length; ) if (n.call(w, A)) return L.value = w[A], L.done = false, L;
                return L.value = r, L.done = true, L;
              };
              return N.next = N;
            }
          }
          throw new TypeError(typeof w + " is not iterable");
        }
        return T.prototype = _, i(R, "constructor", { value: _, configurable: true }), i(_, "constructor", { value: T, configurable: true }), T.displayName = c(_, l, "GeneratorFunction"), e.isGeneratorFunction = function(w) {
          var C = typeof w == "function" && w.constructor;
          return !!C && (C === T || (C.displayName || C.name) === "GeneratorFunction");
        }, e.mark = function(w) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(w, _) : (w.__proto__ = _, c(w, l, "GeneratorFunction")), w.prototype = Object.create(R), w;
        }, e.awrap = function(w) {
          return { __await: w };
        }, S(F.prototype), c(F.prototype, s, function() {
          return this;
        }), e.AsyncIterator = F, e.async = function(w, C, A, N, L) {
          L === void 0 && (L = Promise);
          var P = new F(u(w, C, A, N), L);
          return e.isGeneratorFunction(C) ? P : P.next().then(function(D) {
            return D.done ? D.value : P.next();
          });
        }, S(R), c(R, l, "Generator"), c(R, a, function() {
          return this;
        }), c(R, "toString", function() {
          return "[object Generator]";
        }), e.keys = function(w) {
          var C = Object(w), A = [];
          for (var N in C) A.push(N);
          return A.reverse(), function L() {
            for (; A.length; ) {
              var P = A.pop();
              if (P in C) return L.value = P, L.done = false, L;
            }
            return L.done = true, L;
          };
        }, e.values = H, M.prototype = { constructor: M, reset: function(w) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = false, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(z), !w) for (var C in this) C.charAt(0) === "t" && n.call(this, C) && !isNaN(+C.slice(1)) && (this[C] = r);
        }, stop: function() {
          this.done = true;
          var w = this.tryEntries[0].completion;
          if (w.type === "throw") throw w.arg;
          return this.rval;
        }, dispatchException: function(w) {
          if (this.done) throw w;
          var C = this;
          function A(B, Y) {
            return P.type = "throw", P.arg = w, C.next = B, Y && (C.method = "next", C.arg = r), !!Y;
          }
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var L = this.tryEntries[N], P = L.completion;
            if (L.tryLoc === "root") return A("end");
            if (L.tryLoc <= this.prev) {
              var D = n.call(L, "catchLoc"), U = n.call(L, "finallyLoc");
              if (D && U) {
                if (this.prev < L.catchLoc) return A(L.catchLoc, true);
                if (this.prev < L.finallyLoc) return A(L.finallyLoc);
              } else if (D) {
                if (this.prev < L.catchLoc) return A(L.catchLoc, true);
              } else {
                if (!U) throw Error("try statement without catch or finally");
                if (this.prev < L.finallyLoc) return A(L.finallyLoc);
              }
            }
          }
        }, abrupt: function(w, C) {
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var N = this.tryEntries[A];
            if (N.tryLoc <= this.prev && n.call(N, "finallyLoc") && this.prev < N.finallyLoc) {
              var L = N;
              break;
            }
          }
          L && (w === "break" || w === "continue") && L.tryLoc <= C && C <= L.finallyLoc && (L = null);
          var P = L ? L.completion : {};
          return P.type = w, P.arg = C, L ? (this.method = "next", this.next = L.finallyLoc, E) : this.complete(P);
        }, complete: function(w, C) {
          if (w.type === "throw") throw w.arg;
          return w.type === "break" || w.type === "continue" ? this.next = w.arg : w.type === "return" ? (this.rval = this.arg = w.arg, this.method = "return", this.next = "end") : w.type === "normal" && C && (this.next = C), E;
        }, finish: function(w) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var A = this.tryEntries[C];
            if (A.finallyLoc === w) return this.complete(A.completion, A.afterLoc), z(A), E;
          }
        }, catch: function(w) {
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var A = this.tryEntries[C];
            if (A.tryLoc === w) {
              var N = A.completion;
              if (N.type === "throw") {
                var L = N.arg;
                z(A);
              }
              return L;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(w, C, A) {
          return this.delegate = { iterator: H(w), resultName: C, nextLoc: A }, this.method === "next" && (this.arg = r), E;
        } }, e;
      }
      function Jr(r, e, t, n, i, o, a) {
        try {
          var s = r[o](a), l = s.value;
        } catch (c) {
          return void t(c);
        }
        s.done ? e(l) : Promise.resolve(l).then(n, i);
      }
      function wt(r) {
        return function() {
          var e = this, t = arguments;
          return new Promise(function(n, i) {
            var o = r.apply(e, t);
            function a(l) {
              Jr(o, n, i, a, s, "next", l);
            }
            function s(l) {
              Jr(o, n, i, a, s, "throw", l);
            }
            a(void 0);
          });
        };
      }
      var At = { size: { mode: "max", value: 512 }, objectFit: "cover", correctCentering: false, maxTextureSize: 4096, debounceTimeout: 500, crossOrigin: "anonymous" }, Mo = 1;
      function St(r) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.crossOrigin;
        return new Promise(function(n, i) {
          var o = new Image();
          o.addEventListener("load", function() {
            n(o);
          }, { once: true }), o.addEventListener("error", function(a) {
            i(a.error);
          }, { once: true }), t && o.setAttribute("crossOrigin", t), o.src = r;
        });
      }
      function Uo(r) {
        return xt.apply(this, arguments);
      }
      function xt() {
        return xt = wt(ae().mark(function r(e) {
          var t, n, i, o, a, s, l, c, u, d, h, m, g, b = arguments;
          return ae().wrap(function(v) {
            for (; ; ) switch (v.prev = v.next) {
              case 0:
                if (t = b.length > 1 && b[1] !== void 0 ? b[1] : {}, n = t.size, i = t.crossOrigin, i !== "use-credentials") {
                  v.next = 7;
                  break;
                }
                return v.next = 4, function() {
                  throw new Error("vault-graph: this build makes no network requests");
                }(e, { credentials: "include" });
              case 4:
                o = v.sent, v.next = 10;
                break;
              case 7:
                return v.next = 9, function() {
                  throw new Error("vault-graph: this build makes no network requests");
                }(e);
              case 9:
                o = v.sent;
              case 10:
                return v.next = 12, o.text();
              case 12:
                if (a = v.sent, s = new DOMParser().parseFromString(a, "image/svg+xml"), l = s.documentElement, c = l.getAttribute("width"), u = l.getAttribute("height"), !(!c || !u)) {
                  v.next = 19;
                  break;
                }
                throw new Error("loadSVGImage: cannot use `size` if target SVG has no definite dimensions.");
              case 19:
                return typeof n == "number" && (l.setAttribute("width", "" + n), l.setAttribute("height", "" + n)), d = new XMLSerializer().serializeToString(s), h = new Blob([d], { type: "image/svg+xml" }), m = URL.createObjectURL(h), g = St(m), g.finally(function() {
                  return URL.revokeObjectURL(m);
                }), v.abrupt("return", g);
              case 26:
              case "end":
                return v.stop();
            }
          }, r);
        })), xt.apply(this, arguments);
      }
      function Bo(r) {
        return Lt.apply(this, arguments);
      }
      function Lt() {
        return Lt = wt(ae().mark(function r(e) {
          var t, n, i, o, a, s, l = arguments;
          return ae().wrap(function(u) {
            for (; ; ) switch (u.prev = u.next) {
              case 0:
                if (n = l.length > 1 && l[1] !== void 0 ? l[1] : {}, i = n.size, o = n.crossOrigin, a = ((t = e.split(/[#?]/)[0].split(".").pop()) === null || t === void 0 ? void 0 : t.trim().toLowerCase()) === "svg", !(a && i)) {
                  u.next = 16;
                  break;
                }
                return u.prev = 3, u.next = 6, Uo(e, { size: i, crossOrigin: o });
              case 6:
                s = u.sent, u.next = 14;
                break;
              case 9:
                return u.prev = 9, u.t0 = u.catch(3), u.next = 13, St(e, { crossOrigin: o });
              case 13:
                s = u.sent;
              case 14:
                u.next = 19;
                break;
              case 16:
                return u.next = 18, St(e, { crossOrigin: o });
              case 18:
                s = u.sent;
              case 19:
                return u.abrupt("return", s);
              case 20:
              case "end":
                return u.stop();
            }
          }, r, null, [[3, 9]]);
        })), Lt.apply(this, arguments);
      }
      function Ho(r, e, t) {
        var n = t.objectFit, i = t.size, o = t.correctCentering, a = n === "contain" ? Math.max(r.width, r.height) : Math.min(r.width, r.height), s = i.mode === "auto" ? a : i.mode === "force" ? i.value : Math.min(i.value, a), l = (r.width - a) / 2, c = (r.height - a) / 2;
        if (o) {
          var u = e.getCorrectionOffset(r, a);
          l = u.x, c = u.y;
        }
        return { sourceX: l, sourceY: c, sourceSize: a, destinationSize: s };
      }
      function $o(r, e, t) {
        for (var n = e.canvas, i = n.width, o = n.height, a = [], s = t.x, l = t.y, c = t.rowHeight, u = t.maxRowWidth, d = {}, h = 0, m = r.length; h < m; h++) {
          var g = r[h], b = g.key, E = g.image, v = g.sourceSize, T = g.sourceX, _ = g.sourceY, f = g.destinationSize, p = f + Mo;
          l + p > o || s + p > i && l + p + c > o || (s + p > i && (u = Math.max(u, s), s = 0, l += c, c = p), a.push({ key: b, image: E, sourceX: T, sourceY: _, sourceSize: v, destinationX: s, destinationY: l, destinationSize: f }), d[b] = { x: s, y: l, size: f }, s += p, c = Math.max(c, p));
        }
        u = Math.max(u, s);
        for (var y = u, R = l + c, S = 0, F = a.length; S < F; S++) {
          var x = a[S], O = x.image, k = x.sourceSize, z = x.sourceX, M = x.sourceY, H = x.destinationSize, w = x.destinationX, C = x.destinationY;
          e.drawImage(O, z, M, k, k, w, C, H, H);
        }
        return { atlas: d, texture: e.getImageData(0, 0, y, R), cursor: { x: s, y: l, rowHeight: c, maxRowWidth: u } };
      }
      function jo(r, e, t) {
        var n = r.atlas, i = r.textures, o = r.cursor, a = { atlas: $({}, n), textures: yt(i.slice(0, -1)), cursor: $({}, o) }, s = [];
        for (var l in e) {
          var c, u = e[l];
          if (u.status === "ready") {
            var d = (c = n[l]) === null || c === void 0 ? void 0 : c.textureIndex;
            typeof d != "number" && s.push($({ key: l }, u));
          }
        }
        for (var h = function() {
          var g = $o(s, t, a.cursor), b = g.atlas, E = g.texture, v = g.cursor;
          a.cursor = v;
          var T = [];
          s.forEach(function(_) {
            b[_.key] ? a.atlas[_.key] = $($({}, b[_.key]), {}, { textureIndex: a.textures.length }) : T.push(_);
          }), a.textures.push(E), s = T, s.length && (a.cursor = { x: 0, y: 0, rowHeight: 0, maxRowWidth: 0 }, t.clearRect(0, 0, t.canvas.width, t.canvas.height));
        }; s.length; ) h();
        return a;
      }
      var Vo = function() {
        function r() {
          Et(this, r), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d", { willReadFrequently: true });
        }
        return Tt(r, [{ key: "getCorrectionOffset", value: function(t, n) {
          this.canvas.width = n, this.canvas.height = n, this.context.clearRect(0, 0, n, n), this.context.drawImage(t, 0, 0, n, n);
          for (var i = this.context.getImageData(0, 0, n, n).data, o = new Uint8ClampedArray(i.length / 4), a = 0; a < i.length; a++) o[a] = i[a * 4 + 3];
          for (var s = 0, l = 0, c = 0, u = 0; u < n; u++) for (var d = 0; d < n; d++) {
            var h = o[u * n + d];
            c += h, s += h * d, l += h * u;
          }
          var m = s / c, g = l / c;
          return { x: m - n / 2, y: g - n / 2 };
        } }]);
      }(), $e = function(r) {
        function e() {
          var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return Et(this, e), t = qr(this, e), G(t, "canvas", document.createElement("canvas")), G(t, "ctx", t.canvas.getContext("2d", { willReadFrequently: true })), G(t, "corrector", new Vo()), G(t, "imageStates", {}), G(t, "textures", [t.ctx.getImageData(0, 0, 1, 1)]), G(t, "lastTextureCursor", { x: 0, y: 0, rowHeight: 0, maxRowWidth: 0 }), G(t, "atlas", {}), t.options = $($({}, At), n), t.canvas.width = t.options.maxTextureSize, t.canvas.height = t.options.maxTextureSize, t;
        }
        return Zr(e, r), Tt(e, [{ key: "scheduleGenerateTexture", value: function() {
          var n = this;
          typeof this.frameId != "number" && (typeof this.options.debounceTimeout == "number" ? this.frameId = window.setTimeout(function() {
            n.generateTextures(), n.frameId = void 0;
          }, this.options.debounceTimeout) : this.generateTextures());
        } }, { key: "generateTextures", value: function() {
          var n = jo({ atlas: this.atlas, textures: this.textures, cursor: this.lastTextureCursor }, this.imageStates, this.ctx), i = n.atlas, o = n.textures, a = n.cursor;
          this.atlas = i, this.textures = o, this.lastTextureCursor = a, this.emit(e.NEW_TEXTURE_EVENT, { atlas: i, textures: o });
        } }, { key: "registerImage", value: function() {
          var t = wt(ae().mark(function i(o) {
            var a, s;
            return ae().wrap(function(c) {
              for (; ; ) switch (c.prev = c.next) {
                case 0:
                  if (!this.imageStates[o]) {
                    c.next = 2;
                    break;
                  }
                  return c.abrupt("return");
                case 2:
                  return this.imageStates[o] = { status: "loading" }, c.prev = 3, a = this.options.size, c.next = 7, Bo(o, { size: a.mode === "force" ? a.value : void 0, crossOrigin: this.options.crossOrigin || void 0 });
                case 7:
                  s = c.sent, this.imageStates[o] = $({ status: "ready", image: s }, Ho(s, this.corrector, this.options)), this.scheduleGenerateTexture(), c.next = 15;
                  break;
                case 12:
                  c.prev = 12, c.t0 = c.catch(3), this.imageStates[o] = { status: "error" };
                case 15:
                case "end":
                  return c.stop();
              }
            }, i, this, [[3, 12]]);
          }));
          function n(i) {
            return t.apply(this, arguments);
          }
          return n;
        }() }, { key: "getAtlas", value: function() {
          return this.atlas;
        } }, { key: "getTextures", value: function() {
          return this.textures;
        } }]);
      }(Wr.EventEmitter);
      G($e, "NEW_TEXTURE_EVENT", "newTexture");
      var Wo = ["drawHover", "drawLabel", "drawingMode", "keepWithinCircle", "padding", "colorAttribute", "imageAttribute"], en = WebGLRenderingContext, tn = en.UNSIGNED_BYTE, Ce = en.FLOAT, Yo = $($({}, At), {}, { drawingMode: "background", keepWithinCircle: true, drawLabel: void 0, drawHover: void 0, padding: 0, colorAttribute: "color", imageAttribute: "image" }), Xo = ["u_sizeRatio", "u_correctionRatio", "u_cameraAngle", "u_percentagePadding", "u_matrix", "u_colorizeImages", "u_keepWithinCircle", "u_atlas"];
      function Ft(r) {
        var e, t = document.createElement("canvas").getContext("webgl"), n = Math.min(t.getParameter(t.MAX_TEXTURE_SIZE), At.maxTextureSize);
        t.canvas.remove();
        var i = $($($({}, Yo), { maxTextureSize: n }), r || {}), o = i.drawHover, a = i.drawLabel, s = i.drawingMode, l = i.keepWithinCircle, c = i.padding, u = i.colorAttribute, d = i.imageAttribute, h = ko(i, Wo), m = new $e(h);
        return e = function(g) {
          function b(E, v, T) {
            var _;
            return Et(this, b), _ = qr(this, b, [E, v, T]), G(_, "drawLabel", a), G(_, "drawHover", o), G(_, "textureManagerCallback", null), _.textureManagerCallback = function(f) {
              var p = f.atlas, y = f.textures, R = y.length !== _.textures.length;
              _.atlas = p, _.textureImages = y, R && _.upgradeShaders(), _.bindTextures(), _.latestRenderParams && _.render(_.latestRenderParams), _.renderer && _.renderer.refresh && _.renderer.refresh();
            }, m.on($e.NEW_TEXTURE_EVENT, _.textureManagerCallback), _.atlas = m.getAtlas(), _.textureImages = m.getTextures(), _.textures = _.textureImages.map(function() {
              return E.createTexture();
            }), _.bindTextures(), _;
          }
          return Zr(b, g), Tt(b, [{ key: "getDefinition", value: function() {
            return { VERTICES: 3, VERTEX_SHADER_SOURCE: Go, FRAGMENT_SHADER_SOURCE: Io({ texturesCount: m.getTextures().length }), METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Xo, ATTRIBUTES: [{ name: "a_position", size: 2, type: Ce }, { name: "a_size", size: 1, type: Ce }, { name: "a_color", size: 4, type: tn, normalized: true }, { name: "a_id", size: 4, type: tn, normalized: true }, { name: "a_texture", size: 4, type: Ce }, { name: "a_textureIndex", size: 1, type: Ce }], CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: Ce }], CONSTANT_DATA: [[b.ANGLE_1], [b.ANGLE_2], [b.ANGLE_3]] };
          } }, { key: "upgradeShaders", value: function() {
            var v = this.getDefinition(), T = this.normalProgram, _ = T.program, f = T.buffer, p = T.vertexShader, y = T.fragmentShader, R = T.gl;
            R.deleteProgram(_), R.deleteBuffer(f), R.deleteShader(p), R.deleteShader(y), this.normalProgram = this.getProgramInfo("normal", R, v.VERTEX_SHADER_SOURCE, v.FRAGMENT_SHADER_SOURCE, null);
          } }, { key: "kill", value: function() {
            var v, T = (v = this.normalProgram) === null || v === void 0 ? void 0 : v.gl;
            if (T) for (var _ = 0; _ < this.textures.length; _++) T.deleteTexture(this.textures[_]);
            this.textureManagerCallback && (m.off($e.NEW_TEXTURE_EVENT, this.textureManagerCallback), this.textureManagerCallback = null), Kr(b, "kill", this)([]);
          } }, { key: "bindTextures", value: function() {
            for (var v = this.normalProgram.gl, T = 0; T < this.textureImages.length; T++) {
              if (T >= this.textures.length) {
                var _ = v.createTexture();
                _ && this.textures.push(_);
              }
              v.activeTexture(v.TEXTURE0 + T), v.bindTexture(v.TEXTURE_2D, this.textures[T]), v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, v.RGBA, v.UNSIGNED_BYTE, this.textureImages[T]), v.generateMipmap(v.TEXTURE_2D);
            }
          } }, { key: "renderProgram", value: function(v, T) {
            if (!T.isPicking) for (var _ = T.gl, f = 0; f < this.textureImages.length; f++) _.activeTexture(_.TEXTURE0 + f), _.bindTexture(_.TEXTURE_2D, this.textures[f]);
            Kr(b, "renderProgram", this)([v, T]);
          } }, { key: "processVisibleItem", value: function(v, T, _) {
            var f = this.array, p = X(_[u]), y = _[d], R = y ? this.atlas[y] : void 0;
            if (typeof y == "string" && !R && m.registerImage(y), f[T++] = _.x, f[T++] = _.y, f[T++] = _.size, f[T++] = p, f[T++] = v, R && typeof R.textureIndex == "number") {
              var S = this.textureImages[R.textureIndex], F = S.width, x = S.height;
              f[T++] = R.x / F, f[T++] = R.y / x, f[T++] = R.size / F, f[T++] = R.size / x, f[T++] = R.textureIndex;
            } else f[T++] = 0, f[T++] = 0, f[T++] = 0, f[T++] = 0, f[T++] = 0;
          } }, { key: "setUniforms", value: function(v, T) {
            var _ = T.gl, f = T.uniformLocations, p = f.u_sizeRatio, y = f.u_correctionRatio, R = f.u_matrix, S = f.u_atlas, F = f.u_colorizeImages, x = f.u_keepWithinCircle, O = f.u_cameraAngle, k = f.u_percentagePadding;
            this.latestRenderParams = v, _.uniform1f(y, v.correctionRatio), _.uniform1f(p, l ? v.sizeRatio : v.sizeRatio / Math.SQRT2), _.uniform1f(O, v.cameraAngle), _.uniform1f(k, c), _.uniformMatrix3fv(R, false, v.matrix), _.uniform1iv(S, yt(new Array(this.textureImages.length)).map(function(z, M) {
              return M;
            })), _.uniform1i(F, s === "color" ? 1 : 0), _.uniform1i(x, l ? 1 : 0);
          } }]);
        }(ke), G(e, "ANGLE_1", 0), G(e, "ANGLE_2", 2 * Math.PI / 3), G(e, "ANGLE_3", 4 * Math.PI / 3), G(e, "textureManager", m), e;
      }
      Ft(), Ft({ keepWithinCircle: false, size: { mode: "force", value: 256 }, drawingMode: "color", correctCentering: true });
      function qo(r) {
        if (Array.isArray(r)) return r;
      }
      function Ko(r, e) {
        var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (t != null) {
          var n, i, o, a, s = [], l = true, c = false;
          try {
            if (o = (t = t.call(r)).next, e !== 0) for (; !(l = (n = o.call(t)).done) && (s.push(n.value), s.length !== e); l = true) ;
          } catch (u) {
            c = true, i = u;
          } finally {
            try {
              if (!l && t.return != null && (a = t.return(), Object(a) !== a)) return;
            } finally {
              if (c) throw i;
            }
          }
          return s;
        }
      }
      function Nt(r, e) {
        (e == null || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function rn(r, e) {
        if (r) {
          if (typeof r == "string") return Nt(r, e);
          var t = {}.toString.call(r).slice(8, -1);
          return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Nt(r, e) : void 0;
        }
      }
      function Zo() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function nn(r, e) {
        return qo(r) || Ko(r, e) || rn(r, e) || Zo();
      }
      function Qo(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function Jo(r, e) {
        if (typeof r != "object" || !r) return r;
        var t = r[Symbol.toPrimitive];
        if (t !== void 0) {
          var n = t.call(r, e);
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function on(r) {
        var e = Jo(r, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      function ea(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, on(n.key), n);
        }
      }
      function ta(r, e, t) {
        return e && ea(r.prototype, e), Object.defineProperty(r, "prototype", { writable: false }), r;
      }
      function je(r) {
        return je = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, je(r);
      }
      function an() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (an = function() {
          return !!r;
        })();
      }
      function ra(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function na(r, e) {
        if (e && (typeof e == "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return ra(r);
      }
      function ia(r, e, t) {
        return e = je(e), na(r, an() ? Reflect.construct(e, t || [], je(r).constructor) : e.apply(r, t));
      }
      function Pt(r, e) {
        return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
          return t.__proto__ = n, t;
        }, Pt(r, e);
      }
      function oa(r, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: true, configurable: true } }), Object.defineProperty(r, "prototype", { writable: false }), e && Pt(r, e);
      }
      function ve(r, e, t) {
        return (e = on(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: true, configurable: true, writable: true }) : r[e] = t, r;
      }
      function aa(r) {
        if (Array.isArray(r)) return Nt(r);
      }
      function sa(r) {
        if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
      }
      function ca() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function we(r) {
        return aa(r) || sa(r) || rn(r) || ca();
      }
      function sn(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(r, i).enumerable;
          })), t.push.apply(t, n);
        }
        return t;
      }
      function cn(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e] != null ? arguments[e] : {};
          e % 2 ? sn(Object(t), true).forEach(function(n) {
            ve(r, n, t[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : sn(Object(t)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
          });
        }
        return r;
      }
      function la(r) {
        var e = r.slices, t = r.offset, n = `
precision highp float;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
varying vec4 v_color;
#else
// For normal mode, we use the border colors defined in the program:
`.concat(e.flatMap(function(i, o) {
          var a = i.value;
          return "attribute" in a ? ["varying float v_sliceValue_".concat(o + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.map(function(i, o) {
          var a = i.color;
          return "attribute" in a ? "varying vec4 v_sliceColor_".concat(o + 1, ";") : "uniform vec4 u_sliceColor_".concat(o + 1, ";");
        }).join(`
`), `
#endif

uniform vec4 u_defaultColor;
uniform float u_cameraAngle;
uniform float u_correctionRatio;

`).concat("attribute" in t ? `varying float v_offset;
` : "", `
`).concat("value" in t ? `uniform float u_offset;
` : "", `

const float bias = 255.0 / 254.0;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float aaBorder = u_correctionRatio * 2.0;;
  float dist = length(v_diffVector);
  float offset = `).concat("attribute" in t ? "v_offset" : "u_offset", `;
  float angle = atan(v_diffVector.y / v_diffVector.x);
  if (v_diffVector.x < 0.0 && v_diffVector.y < 0.0) angle += `).concat(Math.PI, `;
  else if (v_diffVector.x < 0.0) angle += `).concat(Math.PI, `;
  else if (v_diffVector.y < 0.0) angle += `).concat(2 * Math.PI, `;
  angle = angle - u_cameraAngle + offset;
  angle = mod(angle, `).concat(2 * Math.PI, `);

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > v_radius)
    gl_FragColor = transparent;
  else {
    gl_FragColor = v_color;
    gl_FragColor.a *= bias;
  }
  #else
  // Colors:
`).concat(e.map(function(i, o) {
          var a = i.color, s = [];
          return "attribute" in a ? s.push("  vec4 sliceColor_".concat(o + 1, " = v_sliceColor_").concat(o + 1, ";")) : "transparent" in a ? s.push("  vec4 sliceColor_".concat(o + 1, " = vec4(0.0, 0.0, 0.0, 0.0);")) : s.push("  vec4 sliceColor_".concat(o + 1, " = u_sliceColor_").concat(o + 1, ";")), s.push("  sliceColor_".concat(o + 1, ".a *= bias;")), s.join(`
`);
        }).join(`
`), `
  vec4 color = u_defaultColor;
  color.a *= bias;

  // Sizes:
`).concat(e.map(function(i, o) {
          var a = i.value;
          return "  float sliceValue_".concat(o + 1, " = ").concat("attribute" in a ? "v_sliceValue_".concat(o + 1) : st(a.value), ";");
        }).join(`
`), `

  // Angles and final color:
  float total = `).concat(e.map(function(i, o) {
          return "sliceValue_".concat(o + 1);
        }).join(" + "), `;
  float angle_0 = 0.0;
  if (total > 0.0) {
`).concat(e.map(function(i, o) {
          return "    float angle_".concat(o + 1, " = angle_").concat(o, " + sliceValue_").concat(o + 1, " * ").concat(2 * Math.PI, " / total;");
        }).join(`
`), `
    `).concat(e.map(function(i, o) {
          return "if (angle < angle_".concat(o + 1, ") color = sliceColor_").concat(o + 1, ";");
        }).join(`
    else `), `
  }

  if (dist < v_radius - aaBorder) {
    gl_FragColor = color;
  } else if (dist < v_radius) {
    gl_FragColor = mix(transparent, color, (v_radius - dist) / aaBorder);
  }
  #endif
}
`);
        return n;
      }
      function ua(r) {
        var e = r.slices, t = r.offset, n = `
attribute vec4 a_id;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec2 v_diffVector;
varying float v_radius;

`.concat("attribute" in t ? `attribute float a_offset;
` : "", `
`).concat("attribute" in t ? `varying float v_offset;
` : "", `

#ifdef PICKING_MODE
varying vec4 v_color;
#else
`).concat(e.flatMap(function(i, o) {
          var a = i.value;
          return "attribute" in a ? ["attribute float a_sliceValue_".concat(o + 1, ";"), "varying float v_sliceValue_".concat(o + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.flatMap(function(i, o) {
          var a = i.color;
          return "attribute" in a ? ["attribute vec4 a_sliceColor_".concat(o + 1, ";"), "varying vec4 v_sliceColor_".concat(o + 1, ";")] : [];
        }).join(`
`), `
#endif

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_radius = size / 2.0;
  v_diffVector = diffVector;
  `).concat("attribute" in t ? `v_offset = a_offset;
` : "", `

  #ifdef PICKING_MODE
  v_color = a_id;
  #else
`).concat(e.flatMap(function(i, o) {
          var a = i.value;
          return "attribute" in a ? ["  v_sliceValue_".concat(o + 1, " = a_sliceValue_").concat(o + 1, ";")] : [];
        }).join(`
`), `
`).concat(e.flatMap(function(i, o) {
          var a = i.color;
          return "attribute" in a ? ["  v_sliceColor_".concat(o + 1, " = a_sliceColor_").concat(o + 1, ";")] : [];
        }).join(`
`), `
  #endif
}
`);
        return n;
      }
      var Ot = "#000000", ha = { drawLabel: void 0, drawHover: void 0, defaultColor: Ot, offset: { value: 0 } }, ln = WebGLRenderingContext, un = ln.UNSIGNED_BYTE, Ae = ln.FLOAT;
      function da(r) {
        var e, t = cn(cn({}, ha), r), n = t.slices, i = t.offset, o = t.drawHover, a = t.drawLabel, s = ["u_sizeRatio", "u_correctionRatio", "u_cameraAngle", "u_matrix", "u_defaultColor"].concat(we("value" in i ? ["u_offset"] : []), we(n.flatMap(function(l, c) {
          var u = l.color;
          return "value" in u ? ["u_sliceColor_".concat(c + 1)] : [];
        })));
        return e = function(l) {
          function c() {
            var u;
            Qo(this, c);
            for (var d = arguments.length, h = new Array(d), m = 0; m < d; m++) h[m] = arguments[m];
            return u = ia(this, c, [].concat(h)), ve(u, "drawLabel", a), ve(u, "drawHover", o), u;
          }
          return oa(c, l), ta(c, [{ key: "getDefinition", value: function() {
            return { VERTICES: 3, VERTEX_SHADER_SOURCE: ua(t), FRAGMENT_SHADER_SOURCE: la(t), METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: s, ATTRIBUTES: [{ name: "a_position", size: 2, type: Ae }, { name: "a_id", size: 4, type: un, normalized: true }, { name: "a_size", size: 1, type: Ae }].concat(we("attribute" in i ? [{ name: "a_offset", size: 1, type: Ae }] : []), we(n.flatMap(function(d, h) {
              var m = d.color;
              return "attribute" in m ? [{ name: "a_sliceColor_".concat(h + 1), size: 4, type: un, normalized: true }] : [];
            })), we(n.flatMap(function(d, h) {
              var m = d.value;
              return "attribute" in m ? [{ name: "a_sliceValue_".concat(h + 1), size: 1, type: Ae }] : [];
            }))), CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: Ae }], CONSTANT_DATA: [[c.ANGLE_1], [c.ANGLE_2], [c.ANGLE_3]] };
          } }, { key: "processVisibleItem", value: function(d, h, m) {
            var g = this.array;
            g[h++] = m.x, g[h++] = m.y, g[h++] = d, g[h++] = m.size, "attribute" in i && (g[h++] = m[i.attribute] || 0), n.forEach(function(b) {
              var E = b.color;
              "attribute" in E && (g[h++] = X(m[E.attribute] || E.defaultValue || Ot));
            }), n.forEach(function(b) {
              var E = b.value;
              "attribute" in E && (g[h++] = m[E.attribute] || 0);
            });
          } }, { key: "setUniforms", value: function(d, h) {
            var m = h.gl, g = h.uniformLocations, b = g.u_sizeRatio, E = g.u_correctionRatio, v = g.u_cameraAngle, T = g.u_matrix, _ = g.u_defaultColor;
            m.uniform1f(E, d.correctionRatio), m.uniform1f(b, d.sizeRatio), m.uniform1f(v, d.cameraAngle), m.uniformMatrix3fv(T, false, d.matrix), "value" in i && m.uniform1f(g.u_offset, i.value);
            var f = nt(t.defaultColor || Ot), p = nn(f, 4), y = p[0], R = p[1], S = p[2], F = p[3];
            m.uniform4f(_, y / 255, R / 255, S / 255, F / 255), n.forEach(function(x, O) {
              var k = x.color;
              if ("value" in k) {
                var z = g["u_sliceColor_".concat(O + 1)], M = nt(k.value), H = nn(M, 4), w = H[0], C = H[1], A = H[2], N = H[3];
                m.uniform4f(z, w / 255, C / 255, A / 255, N / 255);
              }
            });
          } }]);
        }(ke), ve(e, "ANGLE_1", 0), ve(e, "ANGLE_2", 2 * Math.PI / 3), ve(e, "ANGLE_3", 4 * Math.PI / 3), e;
      }
      const hn = (r) => r, dn = (r) => r * r, fn = (r) => r * (2 - r), gn = (r) => (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1), mn = (r) => r * r * r, vn = (r) => --r * r * r + 1, pn = (r) => (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2), Dt = { linear: hn, quadraticIn: dn, quadraticOut: fn, quadraticInOut: gn, cubicIn: mn, cubicOut: vn, cubicInOut: pn }, kt = { easing: "quadraticInOut", duration: 150 };
      function fa(r, e, t, n) {
        const i = Object.assign({}, kt, t), o = typeof i.easing == "function" ? i.easing : Dt[i.easing], a = Date.now(), s = {};
        for (const u in e) {
          const d = e[u];
          s[u] = {};
          for (const h in d) s[u][h] = r.getNodeAttribute(u, h);
        }
        let l = null;
        const c = () => {
          l = null;
          let u = (Date.now() - a) / i.duration;
          if (u >= 1) {
            for (const d in e) {
              const h = e[d];
              for (const m in h) r.setNodeAttribute(d, m, h[m]);
            }
            typeof n == "function" && n();
            return;
          }
          u = o(u);
          for (const d in e) {
            const h = e[d], m = s[d];
            for (const g in h) r.setNodeAttribute(d, g, h[g] * u + m[g] * (1 - u));
          }
          l = requestAnimationFrame(c);
        };
        return c(), () => {
          l && cancelAnimationFrame(l);
        };
      }
      const Ve = { black: "#000000", silver: "#C0C0C0", gray: "#808080", grey: "#808080", white: "#FFFFFF", maroon: "#800000", red: "#FF0000", purple: "#800080", fuchsia: "#FF00FF", green: "#008000", lime: "#00FF00", olive: "#808000", yellow: "#FFFF00", navy: "#000080", blue: "#0000FF", teal: "#008080", aqua: "#00FFFF", darkblue: "#00008B", mediumblue: "#0000CD", darkgreen: "#006400", darkcyan: "#008B8B", deepskyblue: "#00BFFF", darkturquoise: "#00CED1", mediumspringgreen: "#00FA9A", springgreen: "#00FF7F", cyan: "#00FFFF", midnightblue: "#191970", dodgerblue: "#1E90FF", lightseagreen: "#20B2AA", forestgreen: "#228B22", seagreen: "#2E8B57", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", limegreen: "#32CD32", mediumseagreen: "#3CB371", turquoise: "#40E0D0", royalblue: "#4169E1", steelblue: "#4682B4", darkslateblue: "#483D8B", mediumturquoise: "#48D1CC", indigo: "#4B0082", darkolivegreen: "#556B2F", cadetblue: "#5F9EA0", cornflowerblue: "#6495ED", rebeccapurple: "#663399", mediumaquamarine: "#66CDAA", dimgray: "#696969", dimgrey: "#696969", slateblue: "#6A5ACD", olivedrab: "#6B8E23", slategray: "#708090", slategrey: "#708090", lightslategray: "#778899", lightslategrey: "#778899", mediumslateblue: "#7B68EE", lawngreen: "#7CFC00", chartreuse: "#7FFF00", aquamarine: "#7FFFD4", skyblue: "#87CEEB", lightskyblue: "#87CEFA", blueviolet: "#8A2BE2", darkred: "#8B0000", darkmagenta: "#8B008B", saddlebrown: "#8B4513", darkseagreen: "#8FBC8F", lightgreen: "#90EE90", mediumpurple: "#9370DB", darkviolet: "#9400D3", palegreen: "#98FB98", darkorchid: "#9932CC", yellowgreen: "#9ACD32", sienna: "#A0522D", brown: "#A52A2A", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", lightblue: "#ADD8E6", greenyellow: "#ADFF2F", paleturquoise: "#AFEEEE", lightsteelblue: "#B0C4DE", powderblue: "#B0E0E6", firebrick: "#B22222", darkgoldenrod: "#B8860B", mediumorchid: "#BA55D3", rosybrown: "#BC8F8F", darkkhaki: "#BDB76B", mediumvioletred: "#C71585", indianred: "#CD5C5C", peru: "#CD853F", chocolate: "#D2691E", tan: "#D2B48C", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", thistle: "#D8BFD8", orchid: "#DA70D6", goldenrod: "#DAA520", palevioletred: "#DB7093", crimson: "#DC143C", gainsboro: "#DCDCDC", plum: "#DDA0DD", burlywood: "#DEB887", lightcyan: "#E0FFFF", lavender: "#E6E6FA", darksalmon: "#E9967A", violet: "#EE82EE", palegoldenrod: "#EEE8AA", lightcoral: "#F08080", khaki: "#F0E68C", aliceblue: "#F0F8FF", honeydew: "#F0FFF0", azure: "#F0FFFF", sandybrown: "#F4A460", wheat: "#F5DEB3", beige: "#F5F5DC", whitesmoke: "#F5F5F5", mintcream: "#F5FFFA", ghostwhite: "#F8F8FF", salmon: "#FA8072", antiquewhite: "#FAEBD7", linen: "#FAF0E6", lightgoldenrodyellow: "#FAFAD2", oldlace: "#FDF5E6", magenta: "#FF00FF", deeppink: "#FF1493", orangered: "#FF4500", tomato: "#FF6347", hotpink: "#FF69B4", coral: "#FF7F50", darkorange: "#FF8C00", lightsalmon: "#FFA07A", orange: "#FFA500", lightpink: "#FFB6C1", pink: "#FFC0CB", gold: "#FFD700", peachpuff: "#FFDAB9", navajowhite: "#FFDEAD", moccasin: "#FFE4B5", bisque: "#FFE4C4", mistyrose: "#FFE4E1", blanchedalmond: "#FFEBCD", papayawhip: "#FFEFD5", lavenderblush: "#FFF0F5", seashell: "#FFF5EE", cornsilk: "#FFF8DC", lemonchiffon: "#FFFACD", floralwhite: "#FFFAF0", snow: "#FFFAFA", lightyellow: "#FFFFE0", ivory: "#FFFFF0" };
      function ga(r, e, t, n) {
        const i = n || new Uint8Array(4);
        return r.readPixels(e, t, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i), i;
      }
      const _n = new Int8Array(4), We = new Int32Array(_n.buffer, 0, 1), bn = new Float32Array(_n.buffer, 0, 1), ma = /^\s*rgba?\s*\(/, va = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
      function yn(r) {
        let e = 0, t = 0, n = 0, i = 1;
        if (r[0] === "#") r.length === 4 ? (e = parseInt(r.charAt(1) + r.charAt(1), 16), t = parseInt(r.charAt(2) + r.charAt(2), 16), n = parseInt(r.charAt(3) + r.charAt(3), 16)) : (e = parseInt(r.charAt(1) + r.charAt(2), 16), t = parseInt(r.charAt(3) + r.charAt(4), 16), n = parseInt(r.charAt(5) + r.charAt(6), 16)), r.length === 9 && (i = parseInt(r.charAt(7) + r.charAt(8), 16) / 255);
        else if (ma.test(r)) {
          const o = r.match(va);
          o && (e = +o[1], t = +o[2], n = +o[3], o[4] && (i = +o[4]));
        }
        return { r: e, g: t, b: n, a: i };
      }
      const pe = {};
      for (const r in Ve) pe[r] = V(Ve[r]), pe[Ve[r]] = pe[r];
      function It(r, e, t, n, i) {
        return We[0] = n << 24 | t << 16 | e << 8 | r, i && (We[0] = We[0] & 4278190079), bn[0];
      }
      function V(r) {
        if (r = r.toLowerCase(), typeof pe[r] < "u") return pe[r];
        const e = yn(r), { r: t, g: n, b: i } = e;
        let { a: o } = e;
        o = o * 255 | 0;
        const a = It(t, n, i, o, true);
        return pe[r] = a, a;
      }
      function pa(r, e) {
        bn[0] = V(r);
        let t = We[0];
        e && (t = t | 16777216);
        const n = t & 255, i = t >> 8 & 255, o = t >> 16 & 255, a = t >> 24 & 255;
        return [n, i, o, a];
      }
      const zt = {};
      function Gt(r) {
        if (typeof zt[r] < "u") return zt[r];
        const e = (r & 16711680) >>> 16, t = (r & 65280) >>> 8, n = r & 255, o = It(e, t, n, 255, true);
        return zt[r] = o, o;
      }
      function Mt(r, e, t, n) {
        return t + (e << 8) + (r << 16);
      }
      function Ut(r, e, t, n, i, o) {
        const a = Math.floor(t / o * i), s = Math.floor(r.drawingBufferHeight / o - n / o * i), l = new Uint8Array(4);
        r.bindFramebuffer(r.FRAMEBUFFER, e), r.readPixels(a, s, 1, 1, r.RGBA, r.UNSIGNED_BYTE, l);
        const [c, u, d, h] = l;
        return [c, u, d, h];
      }
      function j() {
        return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
      function Se(r, e, t) {
        return r[0] = e, r[4] = typeof t == "number" ? t : e, r;
      }
      function Bt(r, e) {
        const t = Math.sin(e), n = Math.cos(e);
        return r[0] = n, r[1] = t, r[3] = -t, r[4] = n, r;
      }
      function Ht(r, e, t) {
        return r[6] = e, r[7] = t, r;
      }
      function q(r, e) {
        const t = r[0], n = r[1], i = r[2], o = r[3], a = r[4], s = r[5], l = r[6], c = r[7], u = r[8], d = e[0], h = e[1], m = e[2], g = e[3], b = e[4], E = e[5], v = e[6], T = e[7], _ = e[8];
        return r[0] = d * t + h * o + m * l, r[1] = d * n + h * a + m * c, r[2] = d * i + h * s + m * u, r[3] = g * t + b * o + E * l, r[4] = g * n + b * a + E * c, r[5] = g * i + b * s + E * u, r[6] = v * t + T * o + _ * l, r[7] = v * n + T * a + _ * c, r[8] = v * i + T * s + _ * u, r;
      }
      function Ye(r, e, t = 1) {
        const n = r[0], i = r[1], o = r[3], a = r[4], s = r[6], l = r[7], c = e.x, u = e.y;
        return { x: c * n + u * o + s * t, y: c * i + u * a + l * t };
      }
      function En(r, e) {
        const t = r.height / r.width, n = e.height / e.width;
        return t < 1 && n > 1 || t > 1 && n < 1 ? 1 : Math.min(Math.max(n, 1 / n), Math.max(1 / t, t));
      }
      function _e(r, e, t, n, i) {
        const { angle: o, ratio: a, x: s, y: l } = r, { width: c, height: u } = e, d = j(), h = Math.min(c, u) - 2 * n, m = En(e, t);
        return i ? (q(d, Ht(j(), s, l)), q(d, Se(j(), a)), q(d, Bt(j(), o)), q(d, Se(j(), c / h / 2 / m, u / h / 2 / m))) : (q(d, Se(j(), 2 * (h / c) * m, 2 * (h / u) * m)), q(d, Bt(j(), -o)), q(d, Se(j(), 1 / a)), q(d, Ht(j(), -s, -l))), d;
      }
      function Tn(r, e, t) {
        const { x: n, y: i } = Ye(r, { x: Math.cos(e.angle), y: Math.sin(e.angle) }, 0);
        return 1 / Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)) / t.width;
      }
      function $t(r, e) {
        const t = e.size;
        if (t === 0) return;
        const n = r.length;
        r.length += t;
        let i = 0;
        e.forEach((o) => {
          r[n + i] = o, i++;
        });
      }
      function Rn(r) {
        return typeof r == "object" && r !== null && r.constructor === Object;
      }
      function Xe(r, ...e) {
        r = r || {};
        for (let t = 0, n = e.length; t < n; t++) {
          const i = e[t];
          i && Object.assign(r, i);
        }
        return r;
      }
      function Cn(r, ...e) {
        r = r || {};
        for (let t = 0, n = e.length; t < n; t++) {
          const i = e[t];
          if (i) for (const o in i) Rn(i[o]) ? r[o] = Cn(r[o], i[o]) : r[o] = i[o];
        }
        return r;
      }
      function wn(r) {
        if (!r.order) return { x: [0, 1], y: [0, 1] };
        let e = 1 / 0, t = -1 / 0, n = 1 / 0, i = -1 / 0;
        return r.forEachNode((o, a) => {
          const { x: s, y: l } = a;
          s < e && (e = s), s > t && (t = s), l < n && (n = l), l > i && (i = l);
        }), { x: [e, t], y: [n, i] };
      }
      function An(r) {
        if (!Gi(r)) throw new Error("Sigma: invalid graph instance.");
        r.forEachNode((e, t) => {
          if (!Number.isFinite(t.x) || !Number.isFinite(t.y)) throw new Error(`Sigma: Coordinates of node ${e} are invalid. A node must have a numeric 'x' and 'y' attribute.`);
        });
      }
      function Sn(r, e, t) {
        const n = document.createElement(r);
        if (e) for (const i in e) n.style[i] = e[i];
        if (t) for (const i in t) n.setAttribute(i, t[i]);
        return n;
      }
      function jt() {
        return typeof window.devicePixelRatio < "u" ? window.devicePixelRatio : 1;
      }
      function Vt(r, e, t) {
        return t.sort(function(n, i) {
          const o = e(n) || 0, a = e(i) || 0;
          return o < a ? -1 : o > a ? 1 : 0;
        });
      }
      function Wt(r) {
        const { x: [e, t], y: [n, i] } = r;
        let o = Math.max(t - e, i - n), a = (t + e) / 2, s = (i + n) / 2;
        (o === 0 || Math.abs(o) === 1 / 0 || isNaN(o)) && (o = 1), isNaN(a) && (a = 0), isNaN(s) && (s = 0);
        const l = (c) => ({ x: 0.5 + (c.x - a) / o, y: 0.5 + (c.y - s) / o });
        return l.applyTo = (c) => {
          c.x = 0.5 + (c.x - a) / o, c.y = 0.5 + (c.y - s) / o;
        }, l.inverse = (c) => ({ x: a + o * (c.x - 0.5), y: s + o * (c.y - 0.5) }), l.ratio = o, l;
      }
      const _a = Object.freeze(Object.defineProperty({ __proto__: null, ANIMATE_DEFAULTS: kt, HTML_COLORS: Ve, animateNodes: fa, assign: Xe, assignDeep: Cn, colorToArray: pa, colorToIndex: Mt, createElement: Sn, createNormalizationFunction: Wt, cubicIn: mn, cubicInOut: pn, cubicOut: vn, easings: Dt, extend: $t, extractPixel: ga, floatColor: V, getCorrectionRatio: En, getMatrixImpact: Tn, getPixelColor: Ut, getPixelRatio: jt, graphExtent: wn, identity: j, indexToColor: Gt, isPlainObject: Rn, linear: hn, matrixFromCamera: _e, multiply: q, multiplyVec2: Ye, parseColor: yn, quadraticIn: dn, quadraticInOut: gn, quadraticOut: fn, rgbaToFloat: It, rotate: Bt, scale: Se, translate: Ht, validateGraph: An, zIndexOrdering: Vt }, Symbol.toStringTag, { value: "Module" }));
      function xn(r) {
        return r.normalized ? 1 : r.size;
      }
      function qe(r) {
        let e = 0;
        return r.forEach((t) => e += xn(t)), e;
      }
      function Ln(r, e, t) {
        const n = r === "VERTEX" ? e.VERTEX_SHADER : e.FRAGMENT_SHADER, i = e.createShader(n);
        if (i === null) throw new Error("loadShader: error while creating the shader");
        if (e.shaderSource(i, t), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
          const a = e.getShaderInfoLog(i);
          throw e.deleteShader(i), new Error(`loadShader: error while compiling the shader:
${a}
${t}`);
        }
        return i;
      }
      function Fn(r, e) {
        return Ln("VERTEX", r, e);
      }
      function Nn(r, e) {
        return Ln("FRAGMENT", r, e);
      }
      function Pn(r, e) {
        const t = r.createProgram();
        if (t === null) throw new Error("loadProgram: error while creating the program.");
        let n, i;
        for (n = 0, i = e.length; n < i; n++) r.attachShader(t, e[n]);
        if (r.linkProgram(t), !r.getProgramParameter(t, r.LINK_STATUS)) throw r.deleteProgram(t), new Error("loadProgram: error while linking the program.");
        return t;
      }
      function Yt({ gl: r, buffer: e, program: t, vertexShader: n, fragmentShader: i }) {
        r.deleteShader(n), r.deleteShader(i), r.deleteProgram(t), r.deleteBuffer(e);
      }
      function ba(r) {
        return r % 1 === 0 ? r.toFixed(1) : r.toString();
      }
      const On = `#define PICKING_MODE
`, ya = { [WebGL2RenderingContext.BOOL]: 1, [WebGL2RenderingContext.BYTE]: 1, [WebGL2RenderingContext.UNSIGNED_BYTE]: 1, [WebGL2RenderingContext.SHORT]: 2, [WebGL2RenderingContext.UNSIGNED_SHORT]: 2, [WebGL2RenderingContext.INT]: 4, [WebGL2RenderingContext.UNSIGNED_INT]: 4, [WebGL2RenderingContext.FLOAT]: 4 };
      class Xt {
        constructor(e, t, n) {
        }
      }
      class qt {
        constructor(e, t, n) {
          this.array = new Float32Array(), this.constantArray = new Float32Array(), this.capacity = 0, this.verticesCount = 0;
          const i = this.getDefinition();
          if (this.VERTICES = i.VERTICES, this.VERTEX_SHADER_SOURCE = i.VERTEX_SHADER_SOURCE, this.FRAGMENT_SHADER_SOURCE = i.FRAGMENT_SHADER_SOURCE, this.UNIFORMS = i.UNIFORMS, this.ATTRIBUTES = i.ATTRIBUTES, this.METHOD = i.METHOD, this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in i ? i.CONSTANT_ATTRIBUTES : [], this.CONSTANT_DATA = "CONSTANT_DATA" in i ? i.CONSTANT_DATA : [], this.isInstanced = "CONSTANT_ATTRIBUTES" in i, this.ATTRIBUTES_ITEMS_COUNT = qe(this.ATTRIBUTES), this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT, this.renderer = n, this.normalProgram = this.getProgramInfo("normal", e, i.VERTEX_SHADER_SOURCE, i.FRAGMENT_SHADER_SOURCE, null), this.pickProgram = t ? this.getProgramInfo("pick", e, On + i.VERTEX_SHADER_SOURCE, On + i.FRAGMENT_SHADER_SOURCE, t) : null, this.isInstanced) {
            const o = qe(this.CONSTANT_ATTRIBUTES);
            if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);
            this.constantArray = new Float32Array(this.CONSTANT_DATA.length * o);
            for (let a = 0; a < this.CONSTANT_DATA.length; a++) {
              const s = this.CONSTANT_DATA[a];
              if (s.length !== o) throw new Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${o})`);
              for (let l = 0; l < s.length; l++) this.constantArray[a * o + l] = s[l];
            }
            this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
          }
        }
        kill() {
          Yt(this.normalProgram), this.pickProgram && (Yt(this.pickProgram), this.pickProgram = null);
        }
        getProgramInfo(e, t, n, i, o) {
          const a = this.getDefinition(), s = t.createBuffer();
          if (s === null) throw new Error("Program: error while creating the WebGL buffer.");
          const l = Fn(t, n), c = Nn(t, i), u = Pn(t, [l, c]), d = {};
          a.UNIFORMS.forEach((g) => {
            const b = t.getUniformLocation(u, g);
            b && (d[g] = b);
          });
          const h = {};
          a.ATTRIBUTES.forEach((g) => {
            h[g.name] = t.getAttribLocation(u, g.name);
          });
          let m;
          if ("CONSTANT_ATTRIBUTES" in a && (a.CONSTANT_ATTRIBUTES.forEach((g) => {
            h[g.name] = t.getAttribLocation(u, g.name);
          }), m = t.createBuffer(), m === null)) throw new Error("Program: error while creating the WebGL constant buffer.");
          return { name: e, program: u, gl: t, frameBuffer: o, buffer: s, constantBuffer: m || {}, uniformLocations: d, attributeLocations: h, isPicking: e === "pick", vertexShader: l, fragmentShader: c };
        }
        bindProgram(e) {
          let t = 0;
          const { gl: n, buffer: i } = e;
          this.isInstanced ? (n.bindBuffer(n.ARRAY_BUFFER, e.constantBuffer), t = 0, this.CONSTANT_ATTRIBUTES.forEach((o) => t += this.bindAttribute(o, e, t, false)), n.bufferData(n.ARRAY_BUFFER, this.constantArray, n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, e.buffer), t = 0, this.ATTRIBUTES.forEach((o) => t += this.bindAttribute(o, e, t, true)), n.bufferData(n.ARRAY_BUFFER, this.array, n.DYNAMIC_DRAW)) : (n.bindBuffer(n.ARRAY_BUFFER, i), t = 0, this.ATTRIBUTES.forEach((o) => t += this.bindAttribute(o, e, t)), n.bufferData(n.ARRAY_BUFFER, this.array, n.DYNAMIC_DRAW)), n.bindBuffer(n.ARRAY_BUFFER, null);
        }
        unbindProgram(e) {
          this.isInstanced ? (this.CONSTANT_ATTRIBUTES.forEach((t) => this.unbindAttribute(t, e, false)), this.ATTRIBUTES.forEach((t) => this.unbindAttribute(t, e, true))) : this.ATTRIBUTES.forEach((t) => this.unbindAttribute(t, e));
        }
        bindAttribute(e, t, n, i) {
          const o = ya[e.type];
          if (typeof o != "number") throw new Error(`Program.bind: yet unsupported attribute type "${e.type}"`);
          const a = t.attributeLocations[e.name], s = t.gl;
          if (a !== -1) {
            s.enableVertexAttribArray(a);
            const l = this.isInstanced ? (i ? this.ATTRIBUTES_ITEMS_COUNT : qe(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT : this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT;
            if (s.vertexAttribPointer(a, e.size, e.type, e.normalized || false, l, n), this.isInstanced && i) if (s instanceof WebGL2RenderingContext) s.vertexAttribDivisor(a, 1);
            else {
              const c = s.getExtension("ANGLE_instanced_arrays");
              c && c.vertexAttribDivisorANGLE(a, 1);
            }
          }
          return e.size * o;
        }
        unbindAttribute(e, t, n) {
          const i = t.attributeLocations[e.name], o = t.gl;
          if (i !== -1 && (o.disableVertexAttribArray(i), this.isInstanced && n)) if (o instanceof WebGL2RenderingContext) o.vertexAttribDivisor(i, 0);
          else {
            const a = o.getExtension("ANGLE_instanced_arrays");
            a && a.vertexAttribDivisorANGLE(i, 0);
          }
        }
        reallocate(e) {
          e !== this.capacity && (this.capacity = e, this.verticesCount = this.VERTICES * e, this.array = new Float32Array(this.isInstanced ? this.capacity * this.ATTRIBUTES_ITEMS_COUNT : this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT));
        }
        hasNothingToRender() {
          return this.verticesCount === 0;
        }
        renderProgram(e, t) {
          const { gl: n, program: i } = t;
          n.enable(n.BLEND), n.useProgram(i), this.setUniforms(e, t), this.drawWebGL(this.METHOD, t);
        }
        render(e) {
          this.hasNothingToRender() || (this.pickProgram && (this.pickProgram.gl.viewport(0, 0, e.width * e.pixelRatio / e.downSizingRatio, e.height * e.pixelRatio / e.downSizingRatio), this.bindProgram(this.pickProgram), this.renderProgram({ ...e, pixelRatio: e.pixelRatio / e.downSizingRatio }, this.pickProgram), this.unbindProgram(this.pickProgram)), this.normalProgram.gl.viewport(0, 0, e.width * e.pixelRatio, e.height * e.pixelRatio), this.bindProgram(this.normalProgram), this.renderProgram(e, this.normalProgram), this.unbindProgram(this.normalProgram));
        }
        drawWebGL(e, { gl: t, frameBuffer: n }) {
          if (t.bindFramebuffer(t.FRAMEBUFFER, n), !this.isInstanced) t.drawArrays(e, 0, this.verticesCount);
          else if (t instanceof WebGL2RenderingContext) t.drawArraysInstanced(e, 0, this.VERTICES, this.capacity);
          else {
            const i = t.getExtension("ANGLE_instanced_arrays");
            i && i.drawArraysInstancedANGLE(e, 0, this.VERTICES, this.capacity);
          }
        }
      }
      class Ea extends Xt {
      }
      class Kt extends qt {
        kill() {
          super.kill();
        }
        process(e, t, n) {
          let i = t * this.STRIDE;
          if (n.hidden) {
            for (let o = i + this.STRIDE; i < o; i++) this.array[i] = 0;
            return;
          }
          return this.processVisibleItem(Gt(e), i, n);
        }
      }
      function Ta(r, e, t) {
        return class {
          constructor(i, o, a) {
            this.drawLabel = e, this.drawHover = t, this.programs = r.map((s) => new s(i, o, a));
          }
          reallocate(i) {
            this.programs.forEach((o) => o.reallocate(i));
          }
          process(i, o, a) {
            this.programs.forEach((s) => s.process(i, o, a));
          }
          render(i) {
            this.programs.forEach((o) => o.render(i));
          }
          kill() {
            this.programs.forEach((i) => i.kill());
          }
        };
      }
      class Ra extends Xt {
      }
      class se extends qt {
        constructor() {
          super(...arguments), this.drawLabel = void 0;
        }
        kill() {
          super.kill();
        }
        process(e, t, n, i, o) {
          let a = t * this.STRIDE;
          if (o.hidden || n.hidden || i.hidden) {
            for (let s = a + this.STRIDE; a < s; a++) this.array[a] = 0;
            return;
          }
          return this.processVisibleItem(Gt(e), a, n, i, o);
        }
      }
      function Zt(r, e) {
        return class {
          constructor(n, i, o) {
            this.drawLabel = e, this.programs = r.map((a) => new a(n, i, o));
          }
          reallocate(n) {
            this.programs.forEach((i) => i.reallocate(n));
          }
          process(n, i, o, a, s) {
            this.programs.forEach((l) => l.process(n, i, o, a, s));
          }
          render(n) {
            this.programs.forEach((i) => i.render(n));
          }
          kill() {
            this.programs.forEach((n) => n.kill());
          }
        };
      }
      function Dn(r, e, t, n, i) {
        const o = i.edgeLabelSize, a = i.edgeLabelFont, s = i.edgeLabelWeight, l = i.edgeLabelColor.attribute ? e[i.edgeLabelColor.attribute] || i.edgeLabelColor.color || "#000" : i.edgeLabelColor.color;
        let c = e.label;
        if (!c) return;
        r.fillStyle = l, r.font = `${s} ${o}px ${a}`;
        const u = t.size, d = n.size;
        let h = t.x, m = t.y, g = n.x, b = n.y, E = (h + g) / 2, v = (m + b) / 2, T = g - h, _ = b - m, f = Math.sqrt(T * T + _ * _);
        if (f < u + d) return;
        h += T * u / f, m += _ * u / f, g -= T * d / f, b -= _ * d / f, E = (h + g) / 2, v = (m + b) / 2, T = g - h, _ = b - m, f = Math.sqrt(T * T + _ * _);
        let p = r.measureText(c).width;
        if (p > f) {
          const R = "\u2026";
          for (c = c + R, p = r.measureText(c).width; p > f && c.length > 1; ) c = c.slice(0, -2) + R, p = r.measureText(c).width;
          if (c.length < 4) return;
        }
        let y;
        T > 0 ? _ > 0 ? y = Math.acos(T / f) : y = Math.asin(_ / f) : _ > 0 ? y = Math.acos(T / f) + Math.PI : y = Math.asin(T / f) + Math.PI / 2, r.save(), r.translate(E, v), r.rotate(y), r.fillText(c, -p / 2, e.size / 2 + o), r.restore();
      }
      function Qt(r, e, t) {
        if (!e.label) return;
        const n = t.labelSize, i = t.labelFont, o = t.labelWeight, a = t.labelColor.attribute ? e[t.labelColor.attribute] || t.labelColor.color || "#000" : t.labelColor.color;
        r.fillStyle = a, r.font = `${o} ${n}px ${i}`, r.fillText(e.label, e.x + e.size + 3, e.y + n / 3);
      }
      function kn(r, e, t) {
        const n = t.labelSize, i = t.labelFont, o = t.labelWeight;
        r.font = `${o} ${n}px ${i}`, r.fillStyle = "#FFF", r.shadowOffsetX = 0, r.shadowOffsetY = 0, r.shadowBlur = 8, r.shadowColor = "#000";
        const a = 2;
        if (typeof e.label == "string") {
          const s = r.measureText(e.label).width, l = Math.round(s + 5), c = Math.round(n + 2 * a), u = Math.max(e.size, n / 2) + a, d = Math.asin(c / 2 / u), h = Math.sqrt(Math.abs(Math.pow(u, 2) - Math.pow(c / 2, 2)));
          r.beginPath(), r.moveTo(e.x + h, e.y + c / 2), r.lineTo(e.x + u + l, e.y + c / 2), r.lineTo(e.x + u + l, e.y - c / 2), r.lineTo(e.x + h, e.y - c / 2), r.arc(e.x, e.y, u, d, -d), r.closePath(), r.fill();
        } else r.beginPath(), r.arc(e.x, e.y, e.size + a, 0, Math.PI * 2), r.closePath(), r.fill();
        r.shadowOffsetX = 0, r.shadowOffsetY = 0, r.shadowBlur = 0, Qt(r, e, t);
      }
      const Ca = `
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;

uniform float u_correctionRatio;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) - v_radius + border;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > border)
    gl_FragColor = transparent;
  else
    gl_FragColor = v_color;

  #else
  float t = 0.0;
  if (dist > border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / border;

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`, wa = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_border;

const float bias = 255.0 / 254.0;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: In, FLOAT: Jt } = WebGLRenderingContext, Aa = ["u_sizeRatio", "u_correctionRatio", "u_matrix"], re = class re2 extends Kt {
        getDefinition() {
          return { VERTICES: 3, VERTEX_SHADER_SOURCE: wa, FRAGMENT_SHADER_SOURCE: Ca, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Aa, ATTRIBUTES: [{ name: "a_position", size: 2, type: Jt }, { name: "a_size", size: 1, type: Jt }, { name: "a_color", size: 4, type: In, normalized: true }, { name: "a_id", size: 4, type: In, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_angle", size: 1, type: Jt }], CONSTANT_DATA: [[re2.ANGLE_1], [re2.ANGLE_2], [re2.ANGLE_3]] };
        }
        processVisibleItem(e, t, n) {
          const i = this.array, o = V(n.color);
          i[t++] = n.x, i[t++] = n.y, i[t++] = n.size, i[t++] = o, i[t++] = e;
        }
        setUniforms(e, { gl: t, uniformLocations: n }) {
          const { u_sizeRatio: i, u_correctionRatio: o, u_matrix: a } = n;
          t.uniform1f(o, e.correctionRatio), t.uniform1f(i, e.sizeRatio), t.uniformMatrix3fv(a, false, e.matrix);
        }
      };
      re.ANGLE_1 = 0, re.ANGLE_2 = 2 * Math.PI / 3, re.ANGLE_3 = 4 * Math.PI / 3;
      let Ke = re;
      const Sa = `
precision mediump float;

varying vec4 v_color;
varying float v_border;

const float radius = 0.5;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  vec2 m = gl_PointCoord - vec2(0.5, 0.5);
  float dist = radius - length(m);

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > v_border)
    gl_FragColor = v_color;
  else
    gl_FragColor = transparent;

  #else
  float t = 0.0;
  if (dist > v_border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / v_border;

  gl_FragColor = mix(transparent, v_color, t);
  #endif
}
`, xa = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;

uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform mat3 u_matrix;

varying vec4 v_color;
varying float v_border;

const float bias = 255.0 / 254.0;

void main() {
  gl_Position = vec4(
    (u_matrix * vec3(a_position, 1)).xy,
    0,
    1
  );

  // Multiply the point size twice:
  //  - x SCALING_RATIO to correct the canvas scaling
  //  - x 2 to correct the formulae
  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;

  v_border = (0.5 / a_size) * u_sizeRatio;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: zn, FLOAT: Gn } = WebGLRenderingContext, La = ["u_sizeRatio", "u_pixelRatio", "u_matrix"];
      class Fa extends Kt {
        getDefinition() {
          return { VERTICES: 1, VERTEX_SHADER_SOURCE: xa, FRAGMENT_SHADER_SOURCE: Sa, METHOD: WebGLRenderingContext.POINTS, UNIFORMS: La, ATTRIBUTES: [{ name: "a_position", size: 2, type: Gn }, { name: "a_size", size: 1, type: Gn }, { name: "a_color", size: 4, type: zn, normalized: true }, { name: "a_id", size: 4, type: zn, normalized: true }] };
        }
        processVisibleItem(e, t, n) {
          const i = this.array;
          i[t++] = n.x, i[t++] = n.y, i[t++] = n.size, i[t++] = V(n.color), i[t++] = e;
        }
        setUniforms({ sizeRatio: e, pixelRatio: t, matrix: n }, { gl: i, uniformLocations: o }) {
          const { u_sizeRatio: a, u_pixelRatio: s, u_matrix: l } = o;
          i.uniform1f(s, t), i.uniform1f(a, e), i.uniformMatrix3fv(l, false, n);
        }
      }
      const Na = `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`, Pa = `
attribute vec2 a_position;
attribute vec2 a_normal;
attribute float a_radius;
attribute vec3 a_barycentric;

#ifdef PICKING_MODE
attribute vec4 a_id;
#else
attribute vec4 a_color;
#endif

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;

varying vec4 v_color;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float normalLength = length(a_normal);
  vec2 unitNormal = a_normal / normalLength;

  // These first computations are taken from edge.vert.glsl and
  // edge.clamped.vert.glsl. Please read it to get better comments on what's
  // happening:
  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);
  float webGLThickness = pixelsThickness * u_correctionRatio;
  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;

  float da = a_barycentric.x;
  float db = a_barycentric.y;
  float dc = a_barycentric.z;

  vec2 delta = vec2(
      da * (webGLNodeRadius * unitNormal.y)
    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)
    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),

      da * (-webGLNodeRadius * unitNormal.x)
    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)
    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)
  );

  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;

  gl_Position = vec4(position, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Mn, FLOAT: Ze } = WebGLRenderingContext, Oa = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"], Qe = { extremity: "target", lengthToThicknessRatio: 2.5, widenessToThicknessRatio: 2 };
      function xe(r) {
        const e = { ...Qe, ...r || {} };
        return class extends se {
          getDefinition() {
            return { VERTICES: 3, VERTEX_SHADER_SOURCE: Pa, FRAGMENT_SHADER_SOURCE: Na, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Oa, ATTRIBUTES: [{ name: "a_position", size: 2, type: Ze }, { name: "a_normal", size: 2, type: Ze }, { name: "a_radius", size: 1, type: Ze }, { name: "a_color", size: 4, type: Mn, normalized: true }, { name: "a_id", size: 4, type: Mn, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_barycentric", size: 3, type: Ze }], CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] };
          }
          processVisibleItem(n, i, o, a, s) {
            e.extremity === "source" && ([o, a] = [a, o]);
            const l = s.size || 1, c = a.size || 1, u = o.x, d = o.y, h = a.x, m = a.y, g = V(s.color), b = h - u, E = m - d;
            let v = b * b + E * E, T = 0, _ = 0;
            v && (v = 1 / Math.sqrt(v), T = -E * v * l, _ = b * v * l);
            const f = this.array;
            f[i++] = h, f[i++] = m, f[i++] = -T, f[i++] = -_, f[i++] = c, f[i++] = g, f[i++] = n;
          }
          setUniforms(n, { gl: i, uniformLocations: o }) {
            const { u_matrix: a, u_sizeRatio: s, u_correctionRatio: l, u_minEdgeThickness: c, u_lengthToThicknessRatio: u, u_widenessToThicknessRatio: d } = o;
            i.uniformMatrix3fv(a, false, n.matrix), i.uniform1f(s, n.sizeRatio), i.uniform1f(l, n.correctionRatio), i.uniform1f(c, n.minEdgeThickness), i.uniform1f(u, e.lengthToThicknessRatio), i.uniform1f(d, e.widenessToThicknessRatio);
          }
        };
      }
      const Da = xe(), er = `
precision mediump float;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  // We only handle antialiasing for normal mode:
  #ifdef PICKING_MODE
  gl_FragColor = v_color;
  #else
  float dist = length(v_normal) * v_thickness;

  float t = smoothstep(
    v_thickness - v_feather,
    v_thickness,
    dist
  );

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`, ka = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;
attribute float a_radius;
attribute float a_radiusCoef;

uniform mat3 u_matrix;
uniform float u_zoomRatio;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float radius = a_radius * a_radiusCoef;
  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // These first computations are taken from edge.vert.glsl. Please read it to
  // get better comments on what's happening:
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here, we move the point to leave space for the arrow head:
  float direction = sign(radius);
  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;

  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);

  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Un, FLOAT: ce } = WebGLRenderingContext, Ia = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"], Bn = { lengthToThicknessRatio: Qe.lengthToThicknessRatio };
      function tr(r) {
        const e = { ...Bn, ...r || {} };
        return class extends se {
          getDefinition() {
            return { VERTICES: 6, VERTEX_SHADER_SOURCE: ka, FRAGMENT_SHADER_SOURCE: er, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Ia, ATTRIBUTES: [{ name: "a_positionStart", size: 2, type: ce }, { name: "a_positionEnd", size: 2, type: ce }, { name: "a_normal", size: 2, type: ce }, { name: "a_color", size: 4, type: Un, normalized: true }, { name: "a_id", size: 4, type: Un, normalized: true }, { name: "a_radius", size: 1, type: ce }], CONSTANT_ATTRIBUTES: [{ name: "a_positionCoef", size: 1, type: ce }, { name: "a_normalCoef", size: 1, type: ce }, { name: "a_radiusCoef", size: 1, type: ce }], CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]] };
          }
          processVisibleItem(n, i, o, a, s) {
            const l = s.size || 1, c = o.x, u = o.y, d = a.x, h = a.y, m = V(s.color), g = d - c, b = h - u, E = a.size || 1;
            let v = g * g + b * b, T = 0, _ = 0;
            v && (v = 1 / Math.sqrt(v), T = -b * v * l, _ = g * v * l);
            const f = this.array;
            f[i++] = c, f[i++] = u, f[i++] = d, f[i++] = h, f[i++] = T, f[i++] = _, f[i++] = m, f[i++] = n, f[i++] = E;
          }
          setUniforms(n, { gl: i, uniformLocations: o }) {
            const { u_matrix: a, u_zoomRatio: s, u_feather: l, u_pixelRatio: c, u_correctionRatio: u, u_sizeRatio: d, u_minEdgeThickness: h, u_lengthToThicknessRatio: m } = o;
            i.uniformMatrix3fv(a, false, n.matrix), i.uniform1f(s, n.zoomRatio), i.uniform1f(d, n.sizeRatio), i.uniform1f(u, n.correctionRatio), i.uniform1f(c, n.pixelRatio), i.uniform1f(l, n.antiAliasingFeather), i.uniform1f(h, n.minEdgeThickness), i.uniform1f(m, e.lengthToThicknessRatio);
          }
        };
      }
      const za = tr(), Ga = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;
attribute float a_sourceRadius;
attribute float a_targetRadius;
attribute float a_sourceRadiusCoef;
attribute float a_targetRadiusCoef;

uniform mat3 u_matrix;
uniform float u_zoomRatio;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // These first computations are taken from edge.vert.glsl. Please read it to
  // get better comments on what's happening:
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here, we move the point to leave space for the arrow heads:
  // Source arrow head
  float sourceRadius = a_sourceRadius * a_sourceRadiusCoef;
  float sourceDirection = sign(sourceRadius);
  float webGLSourceRadius = sourceDirection * sourceRadius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLSourceArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  vec2 sourceCompensationVector =
    vec2(-sourceDirection * unitNormal.y, sourceDirection * unitNormal.x)
    * (webGLSourceRadius + webGLSourceArrowHeadLength);
    
  // Target arrow head
  float targetRadius = a_targetRadius * a_targetRadiusCoef;
  float targetDirection = sign(targetRadius);
  float webGLTargetRadius = targetDirection * targetRadius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLTargetArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  vec2 targetCompensationVector =
  vec2(-targetDirection * unitNormal.y, targetDirection * unitNormal.x)
    * (webGLTargetRadius + webGLTargetArrowHeadLength);

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + sourceCompensationVector + targetCompensationVector, 1)).xy, 0, 1);

  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Hn, FLOAT: K } = WebGLRenderingContext, Ma = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"], $n = { lengthToThicknessRatio: Qe.lengthToThicknessRatio };
      function rr(r) {
        const e = { ...$n, ...r || {} };
        return class extends se {
          getDefinition() {
            return { VERTICES: 6, VERTEX_SHADER_SOURCE: Ga, FRAGMENT_SHADER_SOURCE: er, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Ma, ATTRIBUTES: [{ name: "a_positionStart", size: 2, type: K }, { name: "a_positionEnd", size: 2, type: K }, { name: "a_normal", size: 2, type: K }, { name: "a_color", size: 4, type: Hn, normalized: true }, { name: "a_id", size: 4, type: Hn, normalized: true }, { name: "a_sourceRadius", size: 1, type: K }, { name: "a_targetRadius", size: 1, type: K }], CONSTANT_ATTRIBUTES: [{ name: "a_positionCoef", size: 1, type: K }, { name: "a_normalCoef", size: 1, type: K }, { name: "a_sourceRadiusCoef", size: 1, type: K }, { name: "a_targetRadiusCoef", size: 1, type: K }], CONSTANT_DATA: [[0, 1, -1, 0], [0, -1, 1, 0], [1, 1, 0, 1], [1, 1, 0, 1], [0, -1, 1, 0], [1, -1, 0, -1]] };
          }
          processVisibleItem(n, i, o, a, s) {
            const l = s.size || 1, c = o.x, u = o.y, d = a.x, h = a.y, m = V(s.color), g = d - c, b = h - u, E = o.size || 1, v = a.size || 1;
            let T = g * g + b * b, _ = 0, f = 0;
            T && (T = 1 / Math.sqrt(T), _ = -b * T * l, f = g * T * l);
            const p = this.array;
            p[i++] = c, p[i++] = u, p[i++] = d, p[i++] = h, p[i++] = _, p[i++] = f, p[i++] = m, p[i++] = n, p[i++] = E, p[i++] = v;
          }
          setUniforms(n, { gl: i, uniformLocations: o }) {
            const { u_matrix: a, u_zoomRatio: s, u_feather: l, u_pixelRatio: c, u_correctionRatio: u, u_sizeRatio: d, u_minEdgeThickness: h, u_lengthToThicknessRatio: m } = o;
            i.uniformMatrix3fv(a, false, n.matrix), i.uniform1f(s, n.zoomRatio), i.uniform1f(d, n.sizeRatio), i.uniform1f(u, n.correctionRatio), i.uniform1f(c, n.pixelRatio), i.uniform1f(l, n.antiAliasingFeather), i.uniform1f(h, n.minEdgeThickness), i.uniform1f(m, e.lengthToThicknessRatio);
          }
        };
      }
      const Ua = rr();
      function jn(r) {
        return Zt([tr(r), xe(r)]);
      }
      const Vn = jn();
      function Wn(r) {
        return Zt([rr(r), xe(r), xe({ ...r, extremity: "source" })]);
      }
      const Ba = Wn(), Ha = `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`, $a = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;

uniform mat3 u_matrix;

varying vec4 v_color;

const float bias = 255.0 / 254.0;

void main() {
  // Scale from [[-1 1] [-1 1]] to the container:
  gl_Position = vec4(
    (u_matrix * vec3(a_position, 1)).xy,
    0,
    1
  );

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Yn, FLOAT: ja } = WebGLRenderingContext, Va = ["u_matrix"];
      class Wa extends se {
        getDefinition() {
          return { VERTICES: 2, VERTEX_SHADER_SOURCE: $a, FRAGMENT_SHADER_SOURCE: Ha, METHOD: WebGLRenderingContext.LINES, UNIFORMS: Va, ATTRIBUTES: [{ name: "a_position", size: 2, type: ja }, { name: "a_color", size: 4, type: Yn, normalized: true }, { name: "a_id", size: 4, type: Yn, normalized: true }] };
        }
        processVisibleItem(e, t, n, i, o) {
          const a = this.array, s = n.x, l = n.y, c = i.x, u = i.y, d = V(o.color);
          a[t++] = s, a[t++] = l, a[t++] = d, a[t++] = e, a[t++] = c, a[t++] = u, a[t++] = d, a[t++] = e;
        }
        setUniforms(e, { gl: t, uniformLocations: n }) {
          const { u_matrix: i } = n;
          t.uniformMatrix3fv(i, false, e.matrix);
        }
      }
      const Ya = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // We require edges to be at least "minThickness" pixels thick *on screen*
  // (so we need to compensate the size ratio):
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);

  // Then, we need to retrieve the normalized thickness of the edge in the WebGL
  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction
  // ratio:
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);

  // For the fragment shader though, we need a thickness that takes the "magic"
  // correction ratio into account (as in webGLThickness), but so that the
  // antialiasing effect does not depend on the zoom level. So here's yet
  // another thickness version:
  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Xn, FLOAT: Le } = WebGLRenderingContext, Xa = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness"];
      class qn extends se {
        getDefinition() {
          return { VERTICES: 6, VERTEX_SHADER_SOURCE: Ya, FRAGMENT_SHADER_SOURCE: er, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Xa, ATTRIBUTES: [{ name: "a_positionStart", size: 2, type: Le }, { name: "a_positionEnd", size: 2, type: Le }, { name: "a_normal", size: 2, type: Le }, { name: "a_color", size: 4, type: Xn, normalized: true }, { name: "a_id", size: 4, type: Xn, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_positionCoef", size: 1, type: Le }, { name: "a_normalCoef", size: 1, type: Le }], CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]] };
        }
        processVisibleItem(e, t, n, i, o) {
          const a = o.size || 1, s = n.x, l = n.y, c = i.x, u = i.y, d = V(o.color), h = c - s, m = u - l;
          let g = h * h + m * m, b = 0, E = 0;
          g && (g = 1 / Math.sqrt(g), b = -m * g * a, E = h * g * a);
          const v = this.array;
          v[t++] = s, v[t++] = l, v[t++] = c, v[t++] = u, v[t++] = b, v[t++] = E, v[t++] = d, v[t++] = e;
        }
        setUniforms(e, { gl: t, uniformLocations: n }) {
          const { u_matrix: i, u_zoomRatio: o, u_feather: a, u_pixelRatio: s, u_correctionRatio: l, u_sizeRatio: c, u_minEdgeThickness: u } = n;
          t.uniformMatrix3fv(i, false, e.matrix), t.uniform1f(o, e.zoomRatio), t.uniform1f(c, e.sizeRatio), t.uniform1f(l, e.correctionRatio), t.uniform1f(s, e.pixelRatio), t.uniform1f(a, e.antiAliasingFeather), t.uniform1f(u, e.minEdgeThickness);
        }
      }
      const qa = `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`, Ka = `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;

const float minThickness = 1.7;
const float bias = 255.0 / 254.0;

void main() {
  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  // The only different here with edge.vert.glsl is that we need to handle null
  // input normal vector. Apart from that, you can read edge.vert.glsl more info
  // on how it works:
  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;
  if (normalLength <= 0.0) unitNormal = normal;
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`, { UNSIGNED_BYTE: Kn, FLOAT: Fe } = WebGLRenderingContext, Za = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness"];
      class Qa extends se {
        getDefinition() {
          return { VERTICES: 3, VERTEX_SHADER_SOURCE: Ka, FRAGMENT_SHADER_SOURCE: qa, METHOD: WebGLRenderingContext.TRIANGLES, UNIFORMS: Za, ATTRIBUTES: [{ name: "a_positionStart", size: 2, type: Fe }, { name: "a_positionEnd", size: 2, type: Fe }, { name: "a_normal", size: 2, type: Fe }, { name: "a_color", size: 4, type: Kn, normalized: true }, { name: "a_id", size: 4, type: Kn, normalized: true }], CONSTANT_ATTRIBUTES: [{ name: "a_positionCoef", size: 1, type: Fe }, { name: "a_normalCoef", size: 1, type: Fe }], CONSTANT_DATA: [[0, 1], [0, -1], [1, 0]] };
        }
        processVisibleItem(e, t, n, i, o) {
          const a = o.size || 1, s = n.x, l = n.y, c = i.x, u = i.y, d = V(o.color), h = c - s, m = u - l;
          let g = h * h + m * m, b = 0, E = 0;
          g && (g = 1 / Math.sqrt(g), b = -m * g * a, E = h * g * a);
          const v = this.array;
          v[t++] = s, v[t++] = l, v[t++] = c, v[t++] = u, v[t++] = b, v[t++] = E, v[t++] = d, v[t++] = e;
        }
        setUniforms(e, { gl: t, uniformLocations: n }) {
          const { u_matrix: i, u_sizeRatio: o, u_correctionRatio: a, u_minEdgeThickness: s } = n;
          t.uniformMatrix3fv(i, false, e.matrix), t.uniform1f(o, e.sizeRatio), t.uniform1f(a, e.correctionRatio), t.uniform1f(s, e.minEdgeThickness);
        }
      }
      const Ja = Object.freeze(Object.defineProperty({ __proto__: null, AbstractEdgeProgram: Ra, AbstractNodeProgram: Ea, AbstractProgram: Xt, DEFAULT_EDGE_ARROW_HEAD_PROGRAM_OPTIONS: Qe, DEFAULT_EDGE_CLAMPED_PROGRAM_OPTIONS: Bn, DEFAULT_EDGE_DOUBLE_CLAMPED_PROGRAM_OPTIONS: $n, EdgeArrowHeadProgram: Da, EdgeArrowProgram: Vn, EdgeClampedProgram: za, EdgeDoubleArrowProgram: Ba, EdgeDoubleClampedProgram: Ua, EdgeLineProgram: Wa, EdgeProgram: se, EdgeRectangleProgram: qn, EdgeTriangleProgram: Qa, NodeCircleProgram: Ke, NodePointProgram: Fa, NodeProgram: Kt, Program: qt, createEdgeArrowHeadProgram: xe, createEdgeArrowProgram: jn, createEdgeClampedProgram: tr, createEdgeCompoundProgram: Zt, createEdgeDoubleArrowProgram: Wn, createEdgeDoubleClampedProgram: rr, createNodeCompoundProgram: Ta, drawDiscNodeHover: kn, drawDiscNodeLabel: Qt, drawStraightEdgeLabel: Dn, getAttributeItemsCount: xn, getAttributesItemsCount: qe, killProgram: Yt, loadFragmentShader: Nn, loadProgram: Pn, loadVertexShader: Fn, numberToGLSLFloat: ba }, Symbol.toStringTag, { value: "Module" }));
      class nr extends Wr.EventEmitter {
        constructor() {
          super(), this.rawEmitter = this;
        }
      }
      const Je = 1.5;
      class be extends nr {
        constructor() {
          super(), this.x = 0.5, this.y = 0.5, this.angle = 0, this.ratio = 1, this.minRatio = null, this.maxRatio = null, this.enabledZooming = true, this.enabledPanning = true, this.enabledRotation = true, this.clean = null, this.nextFrame = null, this.previousState = null, this.enabled = true, this.previousState = this.getState();
        }
        static from(e) {
          return new be().setState(e);
        }
        enable() {
          return this.enabled = true, this;
        }
        disable() {
          return this.enabled = false, this;
        }
        getState() {
          return { x: this.x, y: this.y, angle: this.angle, ratio: this.ratio };
        }
        hasState(e) {
          return this.x === e.x && this.y === e.y && this.ratio === e.ratio && this.angle === e.angle;
        }
        getPreviousState() {
          const e = this.previousState;
          return e ? { x: e.x, y: e.y, angle: e.angle, ratio: e.ratio } : null;
        }
        getBoundedRatio(e) {
          let t = e;
          return typeof this.minRatio == "number" && (t = Math.max(t, this.minRatio)), typeof this.maxRatio == "number" && (t = Math.min(t, this.maxRatio)), t;
        }
        validateState(e) {
          const t = {};
          return this.enabledPanning && typeof e.x == "number" && (t.x = e.x), this.enabledPanning && typeof e.y == "number" && (t.y = e.y), this.enabledZooming && typeof e.ratio == "number" && (t.ratio = this.getBoundedRatio(e.ratio)), this.enabledRotation && typeof e.angle == "number" && (t.angle = e.angle), this.clean ? this.clean({ ...this.getState(), ...t }) : t;
        }
        isAnimated() {
          return !!this.nextFrame;
        }
        setState(e) {
          if (!this.enabled) return this;
          this.previousState = this.getState();
          const t = this.validateState(e);
          return typeof t.x == "number" && (this.x = t.x), typeof t.y == "number" && (this.y = t.y), typeof t.ratio == "number" && (this.ratio = t.ratio), typeof t.angle == "number" && (this.angle = t.angle), this.hasState(this.previousState) || this.emit("updated", this.getState()), this;
        }
        updateState(e) {
          return this.setState(e(this.getState())), this;
        }
        animate(e, t = {}, n) {
          if (!n) return new Promise((u) => this.animate(e, t, u));
          if (!this.enabled) return;
          const i = { ...kt, ...t }, o = this.validateState(e), a = typeof i.easing == "function" ? i.easing : Dt[i.easing], s = Date.now(), l = this.getState(), c = () => {
            const u = (Date.now() - s) / i.duration;
            if (u >= 1) {
              this.nextFrame = null, this.setState(o), this.animationCallback && (this.animationCallback.call(null), this.animationCallback = void 0);
              return;
            }
            const d = a(u), h = {};
            typeof o.x == "number" && (h.x = l.x + (o.x - l.x) * d), typeof o.y == "number" && (h.y = l.y + (o.y - l.y) * d), this.enabledRotation && typeof o.angle == "number" && (h.angle = l.angle + (o.angle - l.angle) * d), typeof o.ratio == "number" && (h.ratio = l.ratio + (o.ratio - l.ratio) * d), this.setState(h), this.nextFrame = requestAnimationFrame(c);
          };
          this.nextFrame ? (cancelAnimationFrame(this.nextFrame), this.animationCallback && this.animationCallback.call(null), this.nextFrame = requestAnimationFrame(c)) : c(), this.animationCallback = n;
        }
        animatedZoom(e) {
          return e ? typeof e == "number" ? this.animate({ ratio: this.ratio / e }) : this.animate({ ratio: this.ratio / (e.factor || Je) }, e) : this.animate({ ratio: this.ratio / Je });
        }
        animatedUnzoom(e) {
          return e ? typeof e == "number" ? this.animate({ ratio: this.ratio * e }) : this.animate({ ratio: this.ratio * (e.factor || Je) }, e) : this.animate({ ratio: this.ratio * Je });
        }
        animatedReset(e) {
          return this.animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, e);
        }
        copy() {
          return be.from(this.getState());
        }
      }
      const ir = { hideEdgesOnMove: false, hideLabelsOnMove: false, renderLabels: true, renderEdgeLabels: false, enableEdgeEvents: false, defaultNodeColor: "#999", defaultNodeType: "circle", defaultEdgeColor: "#ccc", defaultEdgeType: "line", labelFont: "Arial", labelSize: 14, labelWeight: "normal", labelColor: { color: "#000" }, edgeLabelFont: "Arial", edgeLabelSize: 14, edgeLabelWeight: "normal", edgeLabelColor: { attribute: "color" }, stagePadding: 30, defaultDrawEdgeLabel: Dn, defaultDrawNodeLabel: Qt, defaultDrawNodeHover: kn, minEdgeThickness: 1.7, antiAliasingFeather: 1, dragTimeout: 100, draggedEventsTolerance: 3, inertiaDuration: 200, inertiaRatio: 3, zoomDuration: 250, zoomingRatio: 1.7, doubleClickTimeout: 300, doubleClickZoomingRatio: 2.2, doubleClickZoomingDuration: 200, tapMoveTolerance: 10, zoomToSizeRatioFunction: Math.sqrt, itemSizesReference: "screen", autoRescale: true, autoCenter: true, labelDensity: 1, labelGridCellSize: 100, labelRenderedSizeThreshold: 6, nodeReducer: null, edgeReducer: null, zIndex: false, minCameraRatio: null, maxCameraRatio: null, enableCameraZooming: true, enableCameraPanning: true, enableCameraRotation: true, cameraPanBoundaries: null, allowInvalidContainer: false, nodeProgramClasses: {}, nodeHoverProgramClasses: {}, edgeProgramClasses: {} }, es = { circle: Ke }, ts = { arrow: Vn, line: qn };
      function or(r) {
        if (typeof r.labelDensity != "number" || r.labelDensity < 0) throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
        const { minCameraRatio: e, maxCameraRatio: t } = r;
        if (typeof e == "number" && typeof t == "number" && t < e) throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
      }
      function rs(r) {
        const e = Xe({}, ir, r);
        return e.nodeProgramClasses = Xe({}, es, e.nodeProgramClasses), e.edgeProgramClasses = Xe({}, ts, e.edgeProgramClasses), e;
      }
      function W(r, e) {
        const t = e.getBoundingClientRect();
        return { x: r.clientX - t.left, y: r.clientY - t.top };
      }
      function Z(r, e) {
        const t = { ...W(r, e), sigmaDefaultPrevented: false, preventSigmaDefault() {
          t.sigmaDefaultPrevented = true;
        }, original: r };
        return t;
      }
      function Ne(r) {
        const e = "x" in r ? r : { ...r.touches[0] || r.previousTouches[0], original: r.original, sigmaDefaultPrevented: r.sigmaDefaultPrevented, preventSigmaDefault: () => {
          r.sigmaDefaultPrevented = true, e.sigmaDefaultPrevented = true;
        } };
        return e;
      }
      function ns(r, e) {
        return { ...Z(r, e), delta: Zn(r) };
      }
      const is = 2;
      function et(r) {
        const e = [];
        for (let t = 0, n = Math.min(r.length, is); t < n; t++) e.push(r[t]);
        return e;
      }
      function Pe(r, e, t) {
        const n = { touches: et(r.touches).map((i) => W(i, t)), previousTouches: e.map((i) => W(i, t)), sigmaDefaultPrevented: false, preventSigmaDefault() {
          n.sigmaDefaultPrevented = true;
        }, original: r };
        return n;
      }
      function Zn(r) {
        if (typeof r.deltaY < "u") return r.deltaY * -3 / 360;
        if (typeof r.detail < "u") return r.detail / -9;
        throw new Error("Captor: could not extract delta from event.");
      }
      class Qn extends nr {
        constructor(e, t) {
          super(), this.container = e, this.renderer = t;
        }
      }
      const os = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"].reduce((r, e) => ({ ...r, [e]: ir[e] }), {});
      class Jn extends Qn {
        constructor(e, t) {
          super(e, t), this.enabled = true, this.draggedEvents = 0, this.downStartTime = null, this.lastMouseX = null, this.lastMouseY = null, this.isMouseDown = false, this.isMoving = false, this.movingTimeout = null, this.startCameraState = null, this.clicks = 0, this.doubleClickTimeout = null, this.currentWheelDirection = 0, this.settings = os, this.handleClick = this.handleClick.bind(this), this.handleRightClick = this.handleRightClick.bind(this), this.handleDown = this.handleDown.bind(this), this.handleUp = this.handleUp.bind(this), this.handleMove = this.handleMove.bind(this), this.handleWheel = this.handleWheel.bind(this), this.handleLeave = this.handleLeave.bind(this), this.handleEnter = this.handleEnter.bind(this), e.addEventListener("click", this.handleClick, { capture: false }), e.addEventListener("contextmenu", this.handleRightClick, { capture: false }), e.addEventListener("mousedown", this.handleDown, { capture: false }), e.addEventListener("wheel", this.handleWheel, { capture: false }), e.addEventListener("mouseleave", this.handleLeave, { capture: false }), e.addEventListener("mouseenter", this.handleEnter, { capture: false }), document.addEventListener("mousemove", this.handleMove, { capture: false }), document.addEventListener("mouseup", this.handleUp, { capture: false });
        }
        kill() {
          const e = this.container;
          e.removeEventListener("click", this.handleClick), e.removeEventListener("contextmenu", this.handleRightClick), e.removeEventListener("mousedown", this.handleDown), e.removeEventListener("wheel", this.handleWheel), e.removeEventListener("mouseleave", this.handleLeave), e.removeEventListener("mouseenter", this.handleEnter), document.removeEventListener("mousemove", this.handleMove), document.removeEventListener("mouseup", this.handleUp);
        }
        handleClick(e) {
          if (this.enabled) {
            if (this.clicks++, this.clicks === 2) return this.clicks = 0, typeof this.doubleClickTimeout == "number" && (clearTimeout(this.doubleClickTimeout), this.doubleClickTimeout = null), this.handleDoubleClick(e);
            setTimeout(() => {
              this.clicks = 0, this.doubleClickTimeout = null;
            }, this.settings.doubleClickTimeout), this.draggedEvents < this.settings.draggedEventsTolerance && this.emit("click", Z(e, this.container));
          }
        }
        handleRightClick(e) {
          this.enabled && this.emit("rightClick", Z(e, this.container));
        }
        handleDoubleClick(e) {
          if (!this.enabled) return;
          e.preventDefault(), e.stopPropagation();
          const t = Z(e, this.container);
          if (this.emit("doubleClick", t), t.sigmaDefaultPrevented) return;
          const n = this.renderer.getCamera(), i = n.getBoundedRatio(n.getState().ratio / this.settings.doubleClickZoomingRatio);
          n.animate(this.renderer.getViewportZoomedState(W(e, this.container), i), { easing: "quadraticInOut", duration: this.settings.doubleClickZoomingDuration });
        }
        handleDown(e) {
          if (this.enabled) {
            if (e.button === 0) {
              this.startCameraState = this.renderer.getCamera().getState();
              const { x: t, y: n } = W(e, this.container);
              this.lastMouseX = t, this.lastMouseY = n, this.draggedEvents = 0, this.downStartTime = Date.now(), this.isMouseDown = true;
            }
            this.emit("mousedown", Z(e, this.container));
          }
        }
        handleUp(e) {
          if (!this.enabled || !this.isMouseDown) return;
          const t = this.renderer.getCamera();
          this.isMouseDown = false, typeof this.movingTimeout == "number" && (clearTimeout(this.movingTimeout), this.movingTimeout = null);
          const { x: n, y: i } = W(e, this.container), o = t.getState(), a = t.getPreviousState() || { x: 0, y: 0 };
          this.isMoving ? t.animate({ x: o.x + this.settings.inertiaRatio * (o.x - a.x), y: o.y + this.settings.inertiaRatio * (o.y - a.y) }, { duration: this.settings.inertiaDuration, easing: "quadraticOut" }) : (this.lastMouseX !== n || this.lastMouseY !== i) && t.setState({ x: o.x, y: o.y }), this.isMoving = false, setTimeout(() => {
            const s = this.draggedEvents > 0;
            this.draggedEvents = 0, s && this.renderer.getSetting("hideEdgesOnMove") && this.renderer.refresh();
          }, 0), this.emit("mouseup", Z(e, this.container));
        }
        handleMove(e) {
          if (!this.enabled) return;
          const t = Z(e, this.container);
          if (this.emit("mousemovebody", t), (e.target === this.container || e.composedPath()[0] === this.container) && this.emit("mousemove", t), !t.sigmaDefaultPrevented && this.isMouseDown) {
            this.isMoving = true, this.draggedEvents++, typeof this.movingTimeout == "number" && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(() => {
              this.movingTimeout = null, this.isMoving = false;
            }, this.settings.dragTimeout);
            const n = this.renderer.getCamera(), { x: i, y: o } = W(e, this.container), a = this.renderer.viewportToFramedGraph({ x: this.lastMouseX, y: this.lastMouseY }), s = this.renderer.viewportToFramedGraph({ x: i, y: o }), l = a.x - s.x, c = a.y - s.y, u = n.getState(), d = u.x + l, h = u.y + c;
            n.setState({ x: d, y: h }), this.lastMouseX = i, this.lastMouseY = o, e.preventDefault(), e.stopPropagation();
          }
        }
        handleLeave(e) {
          this.emit("mouseleave", Z(e, this.container));
        }
        handleEnter(e) {
          this.emit("mouseenter", Z(e, this.container));
        }
        handleWheel(e) {
          const t = this.renderer.getCamera();
          if (!this.enabled || !t.enabledZooming) return;
          const n = Zn(e);
          if (!n) return;
          const i = ns(e, this.container);
          if (this.emit("wheel", i), i.sigmaDefaultPrevented) {
            e.preventDefault(), e.stopPropagation();
            return;
          }
          const o = t.getState().ratio, a = n > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio, s = t.getBoundedRatio(o * a), l = n > 0 ? 1 : -1, c = Date.now();
          o !== s && (e.preventDefault(), e.stopPropagation(), !(this.currentWheelDirection === l && this.lastWheelTriggerTime && c - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) && (t.animate(this.renderer.getViewportZoomedState(W(e, this.container), s), { easing: "quadraticOut", duration: this.settings.zoomDuration }, () => {
            this.currentWheelDirection = 0;
          }), this.currentWheelDirection = l, this.lastWheelTriggerTime = c));
        }
        setSettings(e) {
          this.settings = e;
        }
      }
      const as = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"].reduce((r, e) => ({ ...r, [e]: ir[e] }), {});
      class ss extends Qn {
        constructor(e, t) {
          super(e, t), this.enabled = true, this.isMoving = false, this.hasMoved = false, this.touchMode = 0, this.startTouchesPositions = [], this.lastTouches = [], this.lastTap = null, this.settings = as, this.handleStart = this.handleStart.bind(this), this.handleLeave = this.handleLeave.bind(this), this.handleMove = this.handleMove.bind(this), e.addEventListener("touchstart", this.handleStart, { capture: false }), e.addEventListener("touchcancel", this.handleLeave, { capture: false }), document.addEventListener("touchend", this.handleLeave, { capture: false, passive: false }), document.addEventListener("touchmove", this.handleMove, { capture: false, passive: false });
        }
        kill() {
          const e = this.container;
          e.removeEventListener("touchstart", this.handleStart), e.removeEventListener("touchcancel", this.handleLeave), document.removeEventListener("touchend", this.handleLeave), document.removeEventListener("touchmove", this.handleMove);
        }
        getDimensions() {
          return { width: this.container.offsetWidth, height: this.container.offsetHeight };
        }
        handleStart(e) {
          if (!this.enabled) return;
          e.preventDefault();
          const t = et(e.touches);
          if (this.touchMode = t.length, this.startCameraState = this.renderer.getCamera().getState(), this.startTouchesPositions = t.map((n) => W(n, this.container)), this.touchMode === 2) {
            const [{ x: n, y: i }, { x: o, y: a }] = this.startTouchesPositions;
            this.startTouchesAngle = Math.atan2(a - i, o - n), this.startTouchesDistance = Math.sqrt(Math.pow(o - n, 2) + Math.pow(a - i, 2));
          }
          this.emit("touchdown", Pe(e, this.lastTouches, this.container)), this.lastTouches = t, this.lastTouchesPositions = this.startTouchesPositions;
        }
        handleLeave(e) {
          if (!(!this.enabled || !this.startTouchesPositions.length)) {
            switch (e.cancelable && e.preventDefault(), this.movingTimeout && (this.isMoving = false, clearTimeout(this.movingTimeout)), this.touchMode) {
              case 2:
                if (e.touches.length === 1) {
                  this.handleStart(e), e.preventDefault();
                  break;
                }
              case 1:
                if (this.isMoving) {
                  const t = this.renderer.getCamera(), n = t.getState(), i = t.getPreviousState() || { x: 0, y: 0 };
                  t.animate({ x: n.x + this.settings.inertiaRatio * (n.x - i.x), y: n.y + this.settings.inertiaRatio * (n.y - i.y) }, { duration: this.settings.inertiaDuration, easing: "quadraticOut" });
                }
                this.hasMoved = false, this.isMoving = false, this.touchMode = 0;
                break;
            }
            if (this.emit("touchup", Pe(e, this.lastTouches, this.container)), !e.touches.length) {
              const t = W(this.lastTouches[0], this.container), n = this.startTouchesPositions[0], i = (t.x - n.x) ** 2 + (t.y - n.y) ** 2;
              if (!e.touches.length && i < this.settings.tapMoveTolerance ** 2) if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
                const o = Pe(e, this.lastTouches, this.container);
                if (this.emit("doubletap", o), this.lastTap = null, !o.sigmaDefaultPrevented) {
                  const a = this.renderer.getCamera(), s = a.getBoundedRatio(a.getState().ratio / this.settings.doubleClickZoomingRatio);
                  a.animate(this.renderer.getViewportZoomedState(t, s), { easing: "quadraticInOut", duration: this.settings.doubleClickZoomingDuration });
                }
              } else {
                const o = Pe(e, this.lastTouches, this.container);
                this.emit("tap", o), this.lastTap = { time: Date.now(), position: o.touches[0] || o.previousTouches[0] };
              }
            }
            this.lastTouches = et(e.touches), this.startTouchesPositions = [];
          }
        }
        handleMove(e) {
          if (!this.enabled || !this.startTouchesPositions.length) return;
          e.preventDefault();
          const t = et(e.touches), n = t.map((c) => W(c, this.container)), i = this.lastTouches;
          this.lastTouches = t, this.lastTouchesPositions = n;
          const o = Pe(e, i, this.container);
          if (this.emit("touchmove", o), o.sigmaDefaultPrevented || (this.hasMoved || (this.hasMoved = n.some((c, u) => {
            const d = this.startTouchesPositions[u];
            return d && (c.x !== d.x || c.y !== d.y);
          })), !this.hasMoved)) return;
          this.isMoving = true, this.movingTimeout && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(() => {
            this.isMoving = false;
          }, this.settings.dragTimeout);
          const a = this.renderer.getCamera(), s = this.startCameraState, l = this.renderer.getSetting("stagePadding");
          switch (this.touchMode) {
            case 1: {
              const { x: c, y: u } = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), { x: d, y: h } = this.renderer.viewportToFramedGraph(n[0]);
              a.setState({ x: s.x + c - d, y: s.y + u - h });
              break;
            }
            case 2: {
              const c = { x: 0.5, y: 0.5, angle: 0, ratio: 1 }, { x: u, y: d } = n[0], { x: h, y: m } = n[1], g = Math.atan2(m - d, h - u) - this.startTouchesAngle, b = Math.hypot(m - d, h - u) / this.startTouchesDistance, E = a.getBoundedRatio(s.ratio / b);
              c.ratio = E, c.angle = s.angle + g;
              const v = this.getDimensions(), T = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: s }), _ = Math.min(v.width, v.height) - 2 * l, f = _ / v.width, p = _ / v.height, y = E / _;
              let R = u - _ / 2 / f, S = d - _ / 2 / p;
              [R, S] = [R * Math.cos(-c.angle) - S * Math.sin(-c.angle), S * Math.cos(-c.angle) + R * Math.sin(-c.angle)], c.x = T.x - R * y, c.y = T.y + S * y, a.setState(c);
              break;
            }
          }
        }
        setSettings(e) {
          this.settings = e;
        }
      }
      class ei {
        constructor(e, t) {
          this.key = e, this.size = t;
        }
        static compare(e, t) {
          return e.size > t.size ? -1 : e.size < t.size || e.key > t.key ? 1 : -1;
        }
      }
      class ti {
        constructor() {
          this.width = 0, this.height = 0, this.cellSize = 0, this.columns = 0, this.rows = 0, this.cells = {};
        }
        resizeAndClear(e, t) {
          this.width = e.width, this.height = e.height, this.cellSize = t, this.columns = Math.ceil(e.width / t), this.rows = Math.ceil(e.height / t), this.cells = {};
        }
        getIndex(e) {
          const t = Math.floor(e.x / this.cellSize);
          return Math.floor(e.y / this.cellSize) * this.columns + t;
        }
        add(e, t, n) {
          const i = new ei(e, t), o = this.getIndex(n);
          let a = this.cells[o];
          a || (a = [], this.cells[o] = a), a.push(i);
        }
        organize() {
          for (const e in this.cells) this.cells[e].sort(ei.compare);
        }
        getLabelsToDisplay(e, t) {
          const n = this.cellSize * this.cellSize, o = n / e / e * t / n, a = Math.ceil(o), s = [];
          for (const l in this.cells) {
            const c = this.cells[l];
            for (let u = 0; u < Math.min(a, c.length); u++) s.push(c[u].key);
          }
          return s;
        }
      }
      function cs(r) {
        const { graph: e, hoveredNode: t, highlightedNodes: n, displayedNodeLabels: i } = r, o = [];
        return e.forEachEdge((a, s, l, c) => {
          (l === t || c === t || n.has(l) || n.has(c) || i.has(l) && i.has(c)) && o.push(a);
        }), o;
      }
      const ls = 150, us = 50, Q = Object.prototype.hasOwnProperty;
      function hs(r, e, t) {
        if (!Q.call(t, "x") || !Q.call(t, "y")) throw new Error(`Sigma: could not find a valid position (x, y) for node "${e}". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?`);
        return t.color || (t.color = r.defaultNodeColor), !t.label && t.label !== "" && (t.label = null), t.label !== void 0 && t.label !== null ? t.label = "" + t.label : t.label = null, t.size || (t.size = 2), Q.call(t, "hidden") || (t.hidden = false), Q.call(t, "highlighted") || (t.highlighted = false), Q.call(t, "forceLabel") || (t.forceLabel = false), (!t.type || t.type === "") && (t.type = r.defaultNodeType), t.zIndex || (t.zIndex = 0), t;
      }
      function ds(r, e, t) {
        return t.color || (t.color = r.defaultEdgeColor), t.label || (t.label = ""), t.size || (t.size = 0.5), Q.call(t, "hidden") || (t.hidden = false), Q.call(t, "forceLabel") || (t.forceLabel = false), (!t.type || t.type === "") && (t.type = r.defaultEdgeType), t.zIndex || (t.zIndex = 0), t;
      }
      let ri = class extends nr {
        constructor(e, t, n = {}) {
          if (super(), this.elements = {}, this.canvasContexts = {}, this.webGLContexts = {}, this.pickingLayers = /* @__PURE__ */ new Set(), this.textures = {}, this.frameBuffers = {}, this.activeListeners = {}, this.labelGrid = new ti(), this.nodeDataCache = {}, this.edgeDataCache = {}, this.nodeProgramIndex = {}, this.edgeProgramIndex = {}, this.nodesWithForcedLabels = /* @__PURE__ */ new Set(), this.edgesWithForcedLabels = /* @__PURE__ */ new Set(), this.nodeExtent = { x: [0, 1], y: [0, 1] }, this.nodeZExtent = [1 / 0, -1 / 0], this.edgeZExtent = [1 / 0, -1 / 0], this.matrix = j(), this.invMatrix = j(), this.correctionRatio = 1, this.customBBox = null, this.normalizationFunction = Wt({ x: [0, 1], y: [0, 1] }), this.graphToViewportRatio = 1, this.itemIDsIndex = {}, this.nodeIndices = {}, this.edgeIndices = {}, this.width = 0, this.height = 0, this.pixelRatio = jt(), this.pickingDownSizingRatio = 2 * this.pixelRatio, this.displayedNodeLabels = /* @__PURE__ */ new Set(), this.displayedEdgeLabels = /* @__PURE__ */ new Set(), this.highlightedNodes = /* @__PURE__ */ new Set(), this.hoveredNode = null, this.hoveredEdge = null, this.renderFrame = null, this.renderHighlightedNodesFrame = null, this.needToProcess = false, this.checkEdgesEventsFrame = null, this.nodePrograms = {}, this.nodeHoverPrograms = {}, this.edgePrograms = {}, this.settings = rs(n), or(this.settings), An(e), !(t instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
          this.graph = e, this.container = t, this.createWebGLContext("edges", { picking: n.enableEdgeEvents }), this.createCanvasContext("edgeLabels"), this.createWebGLContext("nodes", { picking: true }), this.createCanvasContext("labels"), this.createCanvasContext("hovers"), this.createWebGLContext("hoverNodes"), this.createCanvasContext("mouse", { style: { touchAction: "none", userSelect: "none" } }), this.resize();
          for (const i in this.settings.nodeProgramClasses) this.registerNodeProgram(i, this.settings.nodeProgramClasses[i], this.settings.nodeHoverProgramClasses[i]);
          for (const i in this.settings.edgeProgramClasses) this.registerEdgeProgram(i, this.settings.edgeProgramClasses[i]);
          this.camera = new be(), this.bindCameraHandlers(), this.mouseCaptor = new Jn(this.elements.mouse, this), this.mouseCaptor.setSettings(this.settings), this.touchCaptor = new ss(this.elements.mouse, this), this.touchCaptor.setSettings(this.settings), this.bindEventHandlers(), this.bindGraphHandlers(), this.handleSettingsUpdate(), this.refresh();
        }
        registerNodeProgram(e, t, n) {
          return this.nodePrograms[e] && this.nodePrograms[e].kill(), this.nodeHoverPrograms[e] && this.nodeHoverPrograms[e].kill(), this.nodePrograms[e] = new t(this.webGLContexts.nodes, this.frameBuffers.nodes, this), this.nodeHoverPrograms[e] = new (n || t)(this.webGLContexts.hoverNodes, null, this), this;
        }
        registerEdgeProgram(e, t) {
          return this.edgePrograms[e] && this.edgePrograms[e].kill(), this.edgePrograms[e] = new t(this.webGLContexts.edges, this.frameBuffers.edges, this), this;
        }
        unregisterNodeProgram(e) {
          if (this.nodePrograms[e]) {
            const { [e]: t, ...n } = this.nodePrograms;
            t.kill(), this.nodePrograms = n;
          }
          if (this.nodeHoverPrograms[e]) {
            const { [e]: t, ...n } = this.nodeHoverPrograms;
            t.kill(), this.nodePrograms = n;
          }
          return this;
        }
        unregisterEdgeProgram(e) {
          if (this.edgePrograms[e]) {
            const { [e]: t, ...n } = this.edgePrograms;
            t.kill(), this.edgePrograms = n;
          }
          return this;
        }
        resetWebGLTexture(e) {
          const t = this.webGLContexts[e], n = this.frameBuffers[e], i = this.textures[e];
          i && t.deleteTexture(i);
          const o = t.createTexture();
          return t.bindFramebuffer(t.FRAMEBUFFER, n), t.bindTexture(t.TEXTURE_2D, o), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, o, 0), this.textures[e] = o, this;
        }
        bindCameraHandlers() {
          return this.activeListeners.camera = () => {
            this.scheduleRender();
          }, this.camera.on("updated", this.activeListeners.camera), this;
        }
        unbindCameraHandlers() {
          return this.camera.removeListener("updated", this.activeListeners.camera), this;
        }
        getNodeAtPosition(e) {
          const { x: t, y: n } = e, i = Ut(this.webGLContexts.nodes, this.frameBuffers.nodes, t, n, this.pixelRatio, this.pickingDownSizingRatio), o = Mt(...i), a = this.itemIDsIndex[o];
          return a && a.type === "node" ? a.id : null;
        }
        bindEventHandlers() {
          this.activeListeners.handleResize = () => {
            this.scheduleRefresh();
          }, window.addEventListener("resize", this.activeListeners.handleResize), this.activeListeners.handleMove = (t) => {
            const n = Ne(t), i = { event: n, preventSigmaDefault() {
              n.preventSigmaDefault();
            } }, o = this.getNodeAtPosition(n);
            if (o && this.hoveredNode !== o && !this.nodeDataCache[o].hidden) {
              this.hoveredNode && this.emit("leaveNode", { ...i, node: this.hoveredNode }), this.hoveredNode = o, this.emit("enterNode", { ...i, node: o }), this.scheduleHighlightedNodesRender();
              return;
            }
            if (this.hoveredNode && this.getNodeAtPosition(n) !== this.hoveredNode) {
              const a = this.hoveredNode;
              this.hoveredNode = null, this.emit("leaveNode", { ...i, node: a }), this.scheduleHighlightedNodesRender();
              return;
            }
            if (this.settings.enableEdgeEvents) {
              const a = this.hoveredNode ? null : this.getEdgeAtPoint(i.event.x, i.event.y);
              a !== this.hoveredEdge && (this.hoveredEdge && this.emit("leaveEdge", { ...i, edge: this.hoveredEdge }), a && this.emit("enterEdge", { ...i, edge: a }), this.hoveredEdge = a);
            }
          }, this.activeListeners.handleMoveBody = (t) => {
            const n = Ne(t);
            this.emit("moveBody", { event: n, preventSigmaDefault() {
              n.preventSigmaDefault();
            } });
          }, this.activeListeners.handleLeave = (t) => {
            const n = Ne(t), i = { event: n, preventSigmaDefault() {
              n.preventSigmaDefault();
            } };
            this.hoveredNode && (this.emit("leaveNode", { ...i, node: this.hoveredNode }), this.hoveredNode = null, this.scheduleHighlightedNodesRender()), this.settings.enableEdgeEvents && this.hoveredEdge && (this.emit("leaveEdge", { ...i, edge: this.hoveredEdge }), this.hoveredEdge = null, this.scheduleHighlightedNodesRender()), this.emit("leaveStage", { ...i });
          }, this.activeListeners.handleEnter = (t) => {
            const n = Ne(t), i = { event: n, preventSigmaDefault() {
              n.preventSigmaDefault();
            } };
            this.emit("enterStage", { ...i });
          };
          const e = (t) => (n) => {
            const i = Ne(n), o = { event: i, preventSigmaDefault: () => {
              i.preventSigmaDefault();
            } }, a = this.getNodeAtPosition(i);
            if (a) return this.emit(`${t}Node`, { ...o, node: a });
            if (this.settings.enableEdgeEvents) {
              const s = this.getEdgeAtPoint(i.x, i.y);
              if (s) return this.emit(`${t}Edge`, { ...o, edge: s });
            }
            return this.emit(`${t}Stage`, o);
          };
          return this.activeListeners.handleClick = e("click"), this.activeListeners.handleRightClick = e("rightClick"), this.activeListeners.handleDoubleClick = e("doubleClick"), this.activeListeners.handleWheel = e("wheel"), this.activeListeners.handleDown = e("down"), this.activeListeners.handleUp = e("up"), this.mouseCaptor.on("mousemove", this.activeListeners.handleMove), this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody), this.mouseCaptor.on("click", this.activeListeners.handleClick), this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick), this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick), this.mouseCaptor.on("wheel", this.activeListeners.handleWheel), this.mouseCaptor.on("mousedown", this.activeListeners.handleDown), this.mouseCaptor.on("mouseup", this.activeListeners.handleUp), this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave), this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter), this.touchCaptor.on("touchdown", this.activeListeners.handleDown), this.touchCaptor.on("touchdown", this.activeListeners.handleMove), this.touchCaptor.on("touchup", this.activeListeners.handleUp), this.touchCaptor.on("touchmove", this.activeListeners.handleMove), this.touchCaptor.on("tap", this.activeListeners.handleClick), this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick), this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody), this;
        }
        bindGraphHandlers() {
          const e = this.graph, t = /* @__PURE__ */ new Set(["x", "y", "zIndex", "type"]);
          return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = (n) => {
            var a;
            const i = (a = n.hints) == null ? void 0 : a.attributes;
            this.graph.forEachNode((s) => this.updateNode(s));
            const o = !i || i.some((s) => t.has(s));
            this.refresh({ partialGraph: { nodes: e.nodes() }, skipIndexation: !o, schedule: true });
          }, this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = (n) => {
            var a;
            const i = (a = n.hints) == null ? void 0 : a.attributes;
            this.graph.forEachEdge((s) => this.updateEdge(s));
            const o = i && ["zIndex", "type"].some((s) => i == null ? void 0 : i.includes(s));
            this.refresh({ partialGraph: { edges: e.edges() }, skipIndexation: !o, schedule: true });
          }, this.activeListeners.addNodeGraphUpdate = (n) => {
            const i = n.key;
            this.addNode(i), this.refresh({ partialGraph: { nodes: [i] }, skipIndexation: false, schedule: true });
          }, this.activeListeners.updateNodeGraphUpdate = (n) => {
            const i = n.key;
            this.refresh({ partialGraph: { nodes: [i] }, skipIndexation: false, schedule: true });
          }, this.activeListeners.dropNodeGraphUpdate = (n) => {
            const i = n.key;
            this.removeNode(i), this.refresh({ schedule: true });
          }, this.activeListeners.addEdgeGraphUpdate = (n) => {
            const i = n.key;
            this.addEdge(i), this.refresh({ partialGraph: { edges: [i] }, schedule: true });
          }, this.activeListeners.updateEdgeGraphUpdate = (n) => {
            const i = n.key;
            this.refresh({ partialGraph: { edges: [i] }, skipIndexation: false, schedule: true });
          }, this.activeListeners.dropEdgeGraphUpdate = (n) => {
            const i = n.key;
            this.removeEdge(i), this.refresh({ schedule: true });
          }, this.activeListeners.clearEdgesGraphUpdate = () => {
            this.clearEdgeState(), this.clearEdgeIndices(), this.refresh({ schedule: true });
          }, this.activeListeners.clearGraphUpdate = () => {
            this.clearEdgeState(), this.clearNodeState(), this.clearEdgeIndices(), this.clearNodeIndices(), this.refresh({ schedule: true });
          }, e.on("nodeAdded", this.activeListeners.addNodeGraphUpdate), e.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate), e.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate), e.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate), e.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate), e.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), e.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate), e.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate), e.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), e.on("cleared", this.activeListeners.clearGraphUpdate), this;
        }
        unbindGraphHandlers() {
          const e = this.graph;
          e.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate), e.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate), e.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate), e.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate), e.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate), e.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), e.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate), e.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate), e.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), e.removeListener("cleared", this.activeListeners.clearGraphUpdate);
        }
        getEdgeAtPoint(e, t) {
          const n = Ut(this.webGLContexts.edges, this.frameBuffers.edges, e, t, this.pixelRatio, this.pickingDownSizingRatio), i = Mt(...n), o = this.itemIDsIndex[i];
          return o && o.type === "edge" ? o.id : null;
        }
        process() {
          this.emit("beforeProcess");
          const e = this.graph, t = this.settings, n = this.getDimensions();
          if (this.nodeExtent = wn(this.graph), !this.settings.autoRescale) {
            const { width: g, height: b } = n, { x: E, y: v } = this.nodeExtent;
            this.nodeExtent = { x: [(E[0] + E[1]) / 2 - g / 2, (E[0] + E[1]) / 2 + g / 2], y: [(v[0] + v[1]) / 2 - b / 2, (v[0] + v[1]) / 2 + b / 2] };
          }
          this.normalizationFunction = Wt(this.customBBox || this.nodeExtent);
          const i = new be(), o = _e(i.getState(), n, this.getGraphDimensions(), this.getStagePadding());
          this.labelGrid.resizeAndClear(n, t.labelGridCellSize);
          const a = {}, s = {}, l = {}, c = {};
          let u = 1, d = e.nodes();
          for (let g = 0, b = d.length; g < b; g++) {
            const E = d[g], v = this.nodeDataCache[E], T = e.getNodeAttributes(E);
            v.x = T.x, v.y = T.y, this.normalizationFunction.applyTo(v), typeof v.label == "string" && !v.hidden && this.labelGrid.add(E, v.size, this.framedGraphToViewport(v, { matrix: o })), a[v.type] = (a[v.type] || 0) + 1;
          }
          this.labelGrid.organize();
          for (const g in this.nodePrograms) {
            if (!Q.call(this.nodePrograms, g)) throw new Error(`Sigma: could not find a suitable program for node type "${g}"!`);
            this.nodePrograms[g].reallocate(a[g] || 0), a[g] = 0;
          }
          this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1] && (d = Vt(this.nodeZExtent, (g) => this.nodeDataCache[g].zIndex, d));
          for (let g = 0, b = d.length; g < b; g++) {
            const E = d[g];
            s[E] = u, c[s[E]] = { type: "node", id: E }, u++;
            const v = this.nodeDataCache[E];
            this.addNodeToProgram(E, s[E], a[v.type]++);
          }
          const h = {};
          let m = e.edges();
          for (let g = 0, b = m.length; g < b; g++) {
            const E = m[g], v = this.edgeDataCache[E];
            h[v.type] = (h[v.type] || 0) + 1;
          }
          this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1] && (m = Vt(this.edgeZExtent, (g) => this.edgeDataCache[g].zIndex, m));
          for (const g in this.edgePrograms) {
            if (!Q.call(this.edgePrograms, g)) throw new Error(`Sigma: could not find a suitable program for edge type "${g}"!`);
            this.edgePrograms[g].reallocate(h[g] || 0), h[g] = 0;
          }
          for (let g = 0, b = m.length; g < b; g++) {
            const E = m[g];
            l[E] = u, c[l[E]] = { type: "edge", id: E }, u++;
            const v = this.edgeDataCache[E];
            this.addEdgeToProgram(E, l[E], h[v.type]++);
          }
          return this.itemIDsIndex = c, this.nodeIndices = s, this.edgeIndices = l, this.emit("afterProcess"), this;
        }
        handleSettingsUpdate(e) {
          const t = this.settings;
          if (this.camera.minRatio = t.minCameraRatio, this.camera.maxRatio = t.maxCameraRatio, this.camera.enabledZooming = t.enableCameraZooming, this.camera.enabledPanning = t.enableCameraPanning, this.camera.enabledRotation = t.enableCameraRotation, t.cameraPanBoundaries ? this.camera.clean = (n) => this.cleanCameraState(n, t.cameraPanBoundaries && typeof t.cameraPanBoundaries == "object" ? t.cameraPanBoundaries : {}) : this.camera.clean = null, this.camera.setState(this.camera.validateState(this.camera.getState())), e) {
            if (e.edgeProgramClasses !== t.edgeProgramClasses) {
              for (const n in t.edgeProgramClasses) t.edgeProgramClasses[n] !== e.edgeProgramClasses[n] && this.registerEdgeProgram(n, t.edgeProgramClasses[n]);
              for (const n in e.edgeProgramClasses) t.edgeProgramClasses[n] || this.unregisterEdgeProgram(n);
            }
            if (e.nodeProgramClasses !== t.nodeProgramClasses || e.nodeHoverProgramClasses !== t.nodeHoverProgramClasses) {
              for (const n in t.nodeProgramClasses) (t.nodeProgramClasses[n] !== e.nodeProgramClasses[n] || t.nodeHoverProgramClasses[n] !== e.nodeHoverProgramClasses[n]) && this.registerNodeProgram(n, t.nodeProgramClasses[n], t.nodeHoverProgramClasses[n]);
              for (const n in e.nodeProgramClasses) t.nodeProgramClasses[n] || this.unregisterNodeProgram(n);
            }
          }
          return this.mouseCaptor.setSettings(this.settings), this.touchCaptor.setSettings(this.settings), this;
        }
        cleanCameraState(e, { tolerance: t = 0, boundaries: n } = {}) {
          const i = { ...e }, { x: [o, a], y: [s, l] } = n || this.nodeExtent, c = [this.graphToViewport({ x: o, y: s }, { cameraState: e }), this.graphToViewport({ x: a, y: s }, { cameraState: e }), this.graphToViewport({ x: o, y: l }, { cameraState: e }), this.graphToViewport({ x: a, y: l }, { cameraState: e })];
          let u = 1 / 0, d = -1 / 0, h = 1 / 0, m = -1 / 0;
          c.forEach(({ x: f, y: p }) => {
            u = Math.min(u, f), d = Math.max(d, f), h = Math.min(h, p), m = Math.max(m, p);
          });
          const g = d - u, b = m - h, { width: E, height: v } = this.getDimensions();
          let T = 0, _ = 0;
          if (g >= E ? d < E - t ? T = d - (E - t) : u > t && (T = u - t) : d > E + t ? T = d - (E + t) : u < -t && (T = u + t), b >= v ? m < v - t ? _ = m - (v - t) : h > t && (_ = h - t) : m > v + t ? _ = m - (v + t) : h < -t && (_ = h + t), T || _) {
            const f = this.viewportToFramedGraph({ x: 0, y: 0 }, { cameraState: e }), p = this.viewportToFramedGraph({ x: T, y: _ }, { cameraState: e });
            T = p.x - f.x, _ = p.y - f.y, i.x += T, i.y += _;
          }
          return i;
        }
        renderLabels() {
          if (!this.settings.renderLabels) return this;
          const e = this.camera.getState(), t = this.labelGrid.getLabelsToDisplay(e.ratio, this.settings.labelDensity);
          $t(t, this.nodesWithForcedLabels), this.displayedNodeLabels = /* @__PURE__ */ new Set();
          const n = this.canvasContexts.labels;
          for (let i = 0, o = t.length; i < o; i++) {
            const a = t[i], s = this.nodeDataCache[a];
            if (this.displayedNodeLabels.has(a) || s.hidden) continue;
            const { x: l, y: c } = this.framedGraphToViewport(s), u = this.scaleSize(s.size);
            if (!s.forceLabel && u < this.settings.labelRenderedSizeThreshold || l < -150 || l > this.width + ls || c < -50 || c > this.height + us) continue;
            this.displayedNodeLabels.add(a);
            const { defaultDrawNodeLabel: d } = this.settings, h = this.nodePrograms[s.type];
            ((h == null ? void 0 : h.drawLabel) || d)(n, { key: a, ...s, size: u, x: l, y: c }, this.settings);
          }
          return this;
        }
        renderEdgeLabels() {
          if (!this.settings.renderEdgeLabels) return this;
          const e = this.canvasContexts.edgeLabels;
          e.clearRect(0, 0, this.width, this.height);
          const t = cs({ graph: this.graph, hoveredNode: this.hoveredNode, displayedNodeLabels: this.displayedNodeLabels, highlightedNodes: this.highlightedNodes });
          $t(t, this.edgesWithForcedLabels);
          const n = /* @__PURE__ */ new Set();
          for (let i = 0, o = t.length; i < o; i++) {
            const a = t[i], s = this.graph.extremities(a), l = this.nodeDataCache[s[0]], c = this.nodeDataCache[s[1]], u = this.edgeDataCache[a];
            if (n.has(a) || u.hidden || l.hidden || c.hidden) continue;
            const { defaultDrawEdgeLabel: d } = this.settings, h = this.edgePrograms[u.type];
            ((h == null ? void 0 : h.drawLabel) || d)(e, { key: a, ...u, size: this.scaleSize(u.size) }, { key: s[0], ...l, ...this.framedGraphToViewport(l), size: this.scaleSize(l.size) }, { key: s[1], ...c, ...this.framedGraphToViewport(c), size: this.scaleSize(c.size) }, this.settings), n.add(a);
          }
          return this.displayedEdgeLabels = n, this;
        }
        renderHighlightedNodes() {
          const e = this.canvasContexts.hovers;
          e.clearRect(0, 0, this.width, this.height);
          const t = (a) => {
            const s = this.nodeDataCache[a], { x: l, y: c } = this.framedGraphToViewport(s), u = this.scaleSize(s.size), { defaultDrawNodeHover: d } = this.settings, h = this.nodePrograms[s.type];
            ((h == null ? void 0 : h.drawHover) || d)(e, { key: a, ...s, size: u, x: l, y: c }, this.settings);
          }, n = [];
          this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden && n.push(this.hoveredNode), this.highlightedNodes.forEach((a) => {
            a !== this.hoveredNode && n.push(a);
          }), n.forEach((a) => t(a));
          const i = {};
          n.forEach((a) => {
            const s = this.nodeDataCache[a].type;
            i[s] = (i[s] || 0) + 1;
          });
          for (const a in this.nodeHoverPrograms) this.nodeHoverPrograms[a].reallocate(i[a] || 0), i[a] = 0;
          n.forEach((a) => {
            const s = this.nodeDataCache[a];
            this.nodeHoverPrograms[s.type].process(0, i[s.type]++, s);
          }), this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
          const o = this.getRenderParams();
          for (const a in this.nodeHoverPrograms) this.nodeHoverPrograms[a].render(o);
        }
        scheduleHighlightedNodesRender() {
          this.renderHighlightedNodesFrame || this.renderFrame || (this.renderHighlightedNodesFrame = requestAnimationFrame(() => {
            this.renderHighlightedNodesFrame = null, this.renderHighlightedNodes(), this.renderEdgeLabels();
          }));
        }
        render() {
          this.emit("beforeRender");
          const e = () => (this.emit("afterRender"), this);
          if (this.renderFrame && (cancelAnimationFrame(this.renderFrame), this.renderFrame = null), this.resize(), this.needToProcess && this.process(), this.needToProcess = false, this.clear(), this.pickingLayers.forEach((c) => this.resetWebGLTexture(c)), !this.graph.order) return e();
          const t = this.mouseCaptor, n = this.camera.isAnimated() || t.isMoving || t.draggedEvents || t.currentWheelDirection, i = this.camera.getState(), o = this.getDimensions(), a = this.getGraphDimensions(), s = this.getStagePadding();
          this.matrix = _e(i, o, a, s), this.invMatrix = _e(i, o, a, s, true), this.correctionRatio = Tn(this.matrix, i, o), this.graphToViewportRatio = this.getGraphToViewportRatio();
          const l = this.getRenderParams();
          for (const c in this.nodePrograms) this.nodePrograms[c].render(l);
          if (!this.settings.hideEdgesOnMove || !n) for (const c in this.edgePrograms) this.edgePrograms[c].render(l);
          return this.settings.hideLabelsOnMove && n || (this.renderLabels(), this.renderEdgeLabels(), this.renderHighlightedNodes()), e();
        }
        addNode(e) {
          let t = Object.assign({}, this.graph.getNodeAttributes(e));
          this.settings.nodeReducer && (t = this.settings.nodeReducer(e, t));
          const n = hs(this.settings, e, t);
          this.nodeDataCache[e] = n, this.nodesWithForcedLabels.delete(e), n.forceLabel && !n.hidden && this.nodesWithForcedLabels.add(e), this.highlightedNodes.delete(e), n.highlighted && !n.hidden && this.highlightedNodes.add(e), this.settings.zIndex && (n.zIndex < this.nodeZExtent[0] && (this.nodeZExtent[0] = n.zIndex), n.zIndex > this.nodeZExtent[1] && (this.nodeZExtent[1] = n.zIndex));
        }
        updateNode(e) {
          this.addNode(e);
          const t = this.nodeDataCache[e];
          this.normalizationFunction.applyTo(t);
        }
        removeNode(e) {
          delete this.nodeDataCache[e], delete this.nodeProgramIndex[e], this.highlightedNodes.delete(e), this.hoveredNode === e && (this.hoveredNode = null), this.nodesWithForcedLabels.delete(e);
        }
        addEdge(e) {
          let t = Object.assign({}, this.graph.getEdgeAttributes(e));
          this.settings.edgeReducer && (t = this.settings.edgeReducer(e, t));
          const n = ds(this.settings, e, t);
          this.edgeDataCache[e] = n, this.edgesWithForcedLabels.delete(e), n.forceLabel && !n.hidden && this.edgesWithForcedLabels.add(e), this.settings.zIndex && (n.zIndex < this.edgeZExtent[0] && (this.edgeZExtent[0] = n.zIndex), n.zIndex > this.edgeZExtent[1] && (this.edgeZExtent[1] = n.zIndex));
        }
        updateEdge(e) {
          this.addEdge(e);
        }
        removeEdge(e) {
          delete this.edgeDataCache[e], delete this.edgeProgramIndex[e], this.hoveredEdge === e && (this.hoveredEdge = null), this.edgesWithForcedLabels.delete(e);
        }
        clearNodeIndices() {
          this.labelGrid = new ti(), this.nodeExtent = { x: [0, 1], y: [0, 1] }, this.nodeDataCache = {}, this.edgeProgramIndex = {}, this.nodesWithForcedLabels = /* @__PURE__ */ new Set(), this.nodeZExtent = [1 / 0, -1 / 0], this.highlightedNodes = /* @__PURE__ */ new Set();
        }
        clearEdgeIndices() {
          this.edgeDataCache = {}, this.edgeProgramIndex = {}, this.edgesWithForcedLabels = /* @__PURE__ */ new Set(), this.edgeZExtent = [1 / 0, -1 / 0];
        }
        clearIndices() {
          this.clearEdgeIndices(), this.clearNodeIndices();
        }
        clearNodeState() {
          this.displayedNodeLabels = /* @__PURE__ */ new Set(), this.highlightedNodes = /* @__PURE__ */ new Set(), this.hoveredNode = null;
        }
        clearEdgeState() {
          this.displayedEdgeLabels = /* @__PURE__ */ new Set(), this.highlightedNodes = /* @__PURE__ */ new Set(), this.hoveredEdge = null;
        }
        clearState() {
          this.clearEdgeState(), this.clearNodeState();
        }
        addNodeToProgram(e, t, n) {
          const i = this.nodeDataCache[e], o = this.nodePrograms[i.type];
          if (!o) throw new Error(`Sigma: could not find a suitable program for node type "${i.type}"!`);
          o.process(t, n, i), this.nodeProgramIndex[e] = n;
        }
        addEdgeToProgram(e, t, n) {
          const i = this.edgeDataCache[e], o = this.edgePrograms[i.type];
          if (!o) throw new Error(`Sigma: could not find a suitable program for edge type "${i.type}"!`);
          const a = this.graph.extremities(e), s = this.nodeDataCache[a[0]], l = this.nodeDataCache[a[1]];
          o.process(t, n, s, l, i), this.edgeProgramIndex[e] = n;
        }
        getRenderParams() {
          return { matrix: this.matrix, invMatrix: this.invMatrix, width: this.width, height: this.height, pixelRatio: this.pixelRatio, zoomRatio: this.camera.ratio, cameraAngle: this.camera.angle, sizeRatio: 1 / this.scaleSize(), correctionRatio: this.correctionRatio, downSizingRatio: this.pickingDownSizingRatio, minEdgeThickness: this.settings.minEdgeThickness, antiAliasingFeather: this.settings.antiAliasingFeather };
        }
        getStagePadding() {
          const { stagePadding: e, autoRescale: t } = this.settings;
          return t && e || 0;
        }
        createLayer(e, t, n = {}) {
          if (this.elements[e]) throw new Error(`Sigma: a layer named "${e}" already exists`);
          const i = Sn(t, { position: "absolute" }, { class: `sigma-${e}` });
          return n.style && Object.assign(i.style, n.style), this.elements[e] = i, "beforeLayer" in n && n.beforeLayer ? this.elements[n.beforeLayer].before(i) : "afterLayer" in n && n.afterLayer ? this.elements[n.afterLayer].after(i) : this.container.appendChild(i), i;
        }
        createCanvas(e, t = {}) {
          return this.createLayer(e, "canvas", t);
        }
        createCanvasContext(e, t = {}) {
          const n = this.createCanvas(e, t), i = { preserveDrawingBuffer: false, antialias: false };
          return this.canvasContexts[e] = n.getContext("2d", i), this;
        }
        createWebGLContext(e, t = {}) {
          const n = (t == null ? void 0 : t.canvas) || this.createCanvas(e, t);
          t.hidden && n.remove();
          const i = { preserveDrawingBuffer: false, antialias: false, ...t };
          let o;
          o = n.getContext("webgl2", i), o || (o = n.getContext("webgl", i)), o || (o = n.getContext("experimental-webgl", i));
          const a = o;
          if (this.webGLContexts[e] = a, a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), t.picking) {
            this.pickingLayers.add(e);
            const s = a.createFramebuffer();
            if (!s) throw new Error(`Sigma: cannot create a new frame buffer for layer ${e}`);
            this.frameBuffers[e] = s;
          }
          return a;
        }
        killLayer(e) {
          var n;
          const t = this.elements[e];
          if (!t) throw new Error(`Sigma: cannot kill layer ${e}, which does not exist`);
          return this.webGLContexts[e] ? ((n = this.webGLContexts[e].getExtension("WEBGL_lose_context")) == null || n.loseContext(), delete this.webGLContexts[e]) : this.canvasContexts[e] && delete this.canvasContexts[e], t.remove(), delete this.elements[e], this;
        }
        getCamera() {
          return this.camera;
        }
        setCamera(e) {
          this.unbindCameraHandlers(), this.camera = e, this.bindCameraHandlers();
        }
        getContainer() {
          return this.container;
        }
        getGraph() {
          return this.graph;
        }
        setGraph(e) {
          e !== this.graph && (this.hoveredNode && !e.hasNode(this.hoveredNode) && (this.hoveredNode = null), this.hoveredEdge && !e.hasEdge(this.hoveredEdge) && (this.hoveredEdge = null), this.unbindGraphHandlers(), this.checkEdgesEventsFrame !== null && (cancelAnimationFrame(this.checkEdgesEventsFrame), this.checkEdgesEventsFrame = null), this.graph = e, this.bindGraphHandlers(), this.refresh());
        }
        getMouseCaptor() {
          return this.mouseCaptor;
        }
        getTouchCaptor() {
          return this.touchCaptor;
        }
        getDimensions() {
          return { width: this.width, height: this.height };
        }
        getGraphDimensions() {
          const e = this.customBBox || this.nodeExtent;
          return { width: e.x[1] - e.x[0] || 1, height: e.y[1] - e.y[0] || 1 };
        }
        getNodeDisplayData(e) {
          const t = this.nodeDataCache[e];
          return t ? Object.assign({}, t) : void 0;
        }
        getEdgeDisplayData(e) {
          const t = this.edgeDataCache[e];
          return t ? Object.assign({}, t) : void 0;
        }
        getNodeDisplayedLabels() {
          return new Set(this.displayedNodeLabels);
        }
        getEdgeDisplayedLabels() {
          return new Set(this.displayedEdgeLabels);
        }
        getSettings() {
          return { ...this.settings };
        }
        getSetting(e) {
          return this.settings[e];
        }
        setSetting(e, t) {
          const n = { ...this.settings };
          return this.settings[e] = t, or(this.settings), this.handleSettingsUpdate(n), this.scheduleRefresh(), this;
        }
        updateSetting(e, t) {
          return this.setSetting(e, t(this.settings[e])), this;
        }
        setSettings(e) {
          const t = { ...this.settings };
          return this.settings = { ...this.settings, ...e }, or(this.settings), this.handleSettingsUpdate(t), this.scheduleRefresh(), this;
        }
        resize(e) {
          const t = this.width, n = this.height;
          if (this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.pixelRatio = jt(), this.width === 0) if (this.settings.allowInvalidContainer) this.width = 1;
          else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
          if (this.height === 0) if (this.settings.allowInvalidContainer) this.height = 1;
          else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
          if (!e && t === this.width && n === this.height) return this;
          for (const i in this.elements) {
            const o = this.elements[i];
            o.style.width = this.width + "px", o.style.height = this.height + "px";
          }
          for (const i in this.canvasContexts) this.elements[i].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[i].setAttribute("height", this.height * this.pixelRatio + "px"), this.pixelRatio !== 1 && this.canvasContexts[i].scale(this.pixelRatio, this.pixelRatio);
          for (const i in this.webGLContexts) {
            this.elements[i].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[i].setAttribute("height", this.height * this.pixelRatio + "px");
            const o = this.webGLContexts[i];
            if (o.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio), this.pickingLayers.has(i)) {
              const a = this.textures[i];
              a && o.deleteTexture(a);
            }
          }
          return this.emit("resize"), this;
        }
        clear() {
          return this.emit("beforeClear"), this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null), this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null), this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.canvasContexts.labels.clearRect(0, 0, this.width, this.height), this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height), this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height), this.emit("afterClear"), this;
        }
        refresh(e) {
          var o, a;
          const t = (e == null ? void 0 : e.skipIndexation) !== void 0 ? e == null ? void 0 : e.skipIndexation : false, n = (e == null ? void 0 : e.schedule) !== void 0 ? e.schedule : false, i = !e || !e.partialGraph;
          if (i) this.clearEdgeIndices(), this.clearNodeIndices(), this.graph.forEachNode((s) => this.addNode(s)), this.graph.forEachEdge((s) => this.addEdge(s));
          else {
            const s = ((o = e.partialGraph) == null ? void 0 : o.nodes) || [];
            for (let c = 0, u = (s == null ? void 0 : s.length) || 0; c < u; c++) {
              const d = s[c];
              if (this.updateNode(d), t) {
                const h = this.nodeProgramIndex[d];
                if (h === void 0) throw new Error(`Sigma: node "${d}" can't be repaint`);
                this.addNodeToProgram(d, this.nodeIndices[d], h);
              }
            }
            const l = ((a = e == null ? void 0 : e.partialGraph) == null ? void 0 : a.edges) || [];
            for (let c = 0, u = l.length; c < u; c++) {
              const d = l[c];
              if (this.updateEdge(d), t) {
                const h = this.edgeProgramIndex[d];
                if (h === void 0) throw new Error(`Sigma: edge "${d}" can't be repaint`);
                this.addEdgeToProgram(d, this.edgeIndices[d], h);
              }
            }
          }
          return (i || !t) && (this.needToProcess = true), n ? this.scheduleRender() : this.render(), this;
        }
        scheduleRender() {
          return this.renderFrame || (this.renderFrame = requestAnimationFrame(() => {
            this.render();
          })), this;
        }
        scheduleRefresh(e) {
          return this.refresh({ ...e, schedule: true });
        }
        getViewportZoomedState(e, t) {
          const { ratio: n, angle: i, x: o, y: a } = this.camera.getState(), { minCameraRatio: s, maxCameraRatio: l } = this.settings;
          typeof l == "number" && (t = Math.min(t, l)), typeof s == "number" && (t = Math.max(t, s));
          const c = t / n, u = { x: this.width / 2, y: this.height / 2 }, d = this.viewportToFramedGraph(e), h = this.viewportToFramedGraph(u);
          return { angle: i, x: (d.x - h.x) * (1 - c) + o, y: (d.y - h.y) * (1 - c) + a, ratio: t };
        }
        viewRectangle() {
          const e = this.viewportToFramedGraph({ x: 0, y: 0 }), t = this.viewportToFramedGraph({ x: this.width, y: 0 }), n = this.viewportToFramedGraph({ x: 0, y: this.height });
          return { x1: e.x, y1: e.y, x2: t.x, y2: t.y, height: t.y - n.y };
        }
        framedGraphToViewport(e, t = {}) {
          const n = !!t.cameraState || !!t.viewportDimensions || !!t.graphDimensions, i = t.matrix ? t.matrix : n ? _e(t.cameraState || this.camera.getState(), t.viewportDimensions || this.getDimensions(), t.graphDimensions || this.getGraphDimensions(), t.padding || this.getStagePadding()) : this.matrix, o = Ye(i, e);
          return { x: (1 + o.x) * this.width / 2, y: (1 - o.y) * this.height / 2 };
        }
        viewportToFramedGraph(e, t = {}) {
          const n = !!t.cameraState || !!t.viewportDimensions || !t.graphDimensions, i = t.matrix ? t.matrix : n ? _e(t.cameraState || this.camera.getState(), t.viewportDimensions || this.getDimensions(), t.graphDimensions || this.getGraphDimensions(), t.padding || this.getStagePadding(), true) : this.invMatrix, o = Ye(i, { x: e.x / this.width * 2 - 1, y: 1 - e.y / this.height * 2 });
          return isNaN(o.x) && (o.x = 0), isNaN(o.y) && (o.y = 0), o;
        }
        viewportToGraph(e, t = {}) {
          return this.normalizationFunction.inverse(this.viewportToFramedGraph(e, t));
        }
        graphToViewport(e, t = {}) {
          return this.framedGraphToViewport(this.normalizationFunction(e), t);
        }
        getGraphToViewportRatio() {
          const e = { x: 0, y: 0 }, t = { x: 1, y: 1 }, n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), i = this.graphToViewport(e), o = this.graphToViewport(t);
          return Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2)) / n;
        }
        getBBox() {
          return this.nodeExtent;
        }
        getCustomBBox() {
          return this.customBBox;
        }
        setCustomBBox(e) {
          return this.customBBox = e, this.scheduleRender(), this;
        }
        kill() {
          this.emit("kill"), this.removeAllListeners(), this.unbindCameraHandlers(), window.removeEventListener("resize", this.activeListeners.handleResize), this.mouseCaptor.kill(), this.touchCaptor.kill(), this.unbindGraphHandlers(), this.clearIndices(), this.clearState(), this.nodeDataCache = {}, this.edgeDataCache = {}, this.highlightedNodes.clear(), this.renderFrame && (cancelAnimationFrame(this.renderFrame), this.renderFrame = null), this.renderHighlightedNodesFrame && (cancelAnimationFrame(this.renderHighlightedNodesFrame), this.renderHighlightedNodesFrame = null);
          const e = this.container;
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          for (const t in this.nodePrograms) this.nodePrograms[t].kill();
          for (const t in this.nodeHoverPrograms) this.nodeHoverPrograms[t].kill();
          for (const t in this.edgePrograms) this.edgePrograms[t].kill();
          this.nodePrograms = {}, this.nodeHoverPrograms = {}, this.edgePrograms = {};
          for (const t in this.elements) this.killLayer(t);
          this.canvasContexts = {}, this.webGLContexts = {}, this.elements = {};
        }
        scaleSize(e = 1, t = this.camera.ratio) {
          return e / this.settings.zoomToSizeRatioFunction(t) * (this.getSetting("itemSizesReference") === "positions" ? t * this.graphToViewportRatio : 1);
        }
        getCanvases() {
          const e = {};
          for (const t in this.elements) this.elements[t] instanceof HTMLCanvasElement && (e[t] = this.elements[t]);
          return e;
        }
      };
      const le = class le extends ri {
      };
      le.Camera = be, le.MouseCaptor = Jn, le.Sigma = ri, le.rendering = { ...Ja, createNodeBorderProgram: jr, createNodeImageProgram: Ft, createNodePiechartProgram: da, EdgeCurveProgram: ro }, le.utils = _a;
      let ar = le;
      return ar;
    });
  }
});

// plugin/main.js
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/page.js
function mountVaultGraph(root, data, deps) {
  "use strict";
  var DATA = data;
  var Graph = deps.Graph;
  var SigmaCls = deps.Sigma;
  var RENDERING = deps.rendering || {};
  var LOGO_MASK = deps.logoMask || "";
  var WIN = deps.win || window;
  var DOC = deps.doc || root && root.ownerDocument || WIN && WIN.document || null;
  var API = null;
  var ID = "vg-";
  var $ = function(id) {
    return root.querySelector("#" + ID + id);
  };
  var ROOT = root;
  var setHTML = function(el, html) {
    var parsed = new DOMParser().parseFromString("<body>" + html + "</body>", "text/html");
    el.replaceChildren.apply(el, Array.prototype.slice.call(parsed.body.childNodes));
  };
  var css = function(name) {
    return getComputedStyle(ROOT).getPropertyValue(name).trim();
  };
  var s2lin = function(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  var lin2s = function(c) {
    c = Math.max(0, Math.min(1, c));
    return c <= 31308e-7 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  };
  function relLum(h) {
    h = String(h).trim().replace(/^#/, "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var c = [0, 2, 4].map(function(i) {
      return s2lin(parseInt(h.slice(i, i + 2), 16) / 255);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function hex2lab(h) {
    h = String(h).trim().replace(/^#/, "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = s2lin(parseInt(h.slice(0, 2), 16) / 255), g = s2lin(parseInt(h.slice(2, 4), 16) / 255), b = s2lin(parseInt(h.slice(4, 6), 16) / 255);
    var l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b), m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b), s2 = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s2,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s2,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s2
    ];
  }
  function lab2hex(L, A, B) {
    var l = Math.pow(L + 0.3963377774 * A + 0.2158037573 * B, 3), m = Math.pow(L - 0.1055613458 * A - 0.0638541728 * B, 3), s2 = Math.pow(L - 0.0894841775 * A - 1.291485548 * B, 3);
    var rgb = [
      lin2s(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s2),
      lin2s(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s2),
      lin2s(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s2)
    ];
    return "#" + rgb.map(function(v) {
      var n = Math.round(v * 255).toString(16);
      return n.length < 2 ? "0" + n : n;
    }).join("");
  }
  function shade(hex, dh, dL) {
    var lab = hex2lab(hex), C = Math.hypot(lab[1], lab[2]);
    var h = Math.atan2(lab[2], lab[1]) + dh * Math.PI / 180;
    var L = Math.max(0.18, Math.min(0.92, lab[0] + dL));
    return lab2hex(L, C * Math.cos(h), C * Math.sin(h));
  }
  var SLOT_NAMES2 = [
    "Blue",
    "Orange",
    "Aqua",
    "Yellow",
    "Green",
    "Magenta",
    "Violet",
    "Red",
    "Cyan",
    "Orchid",
    "Grey",
    "Slate"
  ];
  var THEME = {};
  function readTheme() {
    var surf = css("--surface-1");
    THEME = {
      dark: relLum(surf) < 0.4,
      text: css("--text-1"),
      dim: css("--dim"),
      today: css("--today"),
      edge: css("--edge"),
      edgeHi: css("--edge-hi"),
      surface: surf,
      hoverBg: css("--surface-2"),
      hoverBorder: css("--border-strong"),
      slots: [
        "--g1",
        "--g2",
        "--g3",
        "--g4",
        "--g5",
        "--g6",
        "--g7",
        "--g8",
        "--g9",
        "--g10",
        "--g11",
        "--g12"
      ].map(css),
      // Still here, and still used: --dim's neighbours for the colorOf fallback. They
      // are no longer the overflow palette -- slots 11-12 carry the same two values as
      // real slots, and the automatic run cycles rather than falling back.
      neutrals: ["--n1", "--n2", "--n3"].map(css)
    };
    THEME.byKey = /* @__PURE__ */ Object.create(null);
    THEME.slots.forEach(function(hex, i) {
      THEME.byKey["g" + (i + 1)] = hex;
    });
  }
  readTheme();
  function cleanFolderColors(raw) {
    var out = /* @__PURE__ */ Object.create(null);
    if (!raw || typeof raw !== "object") return out;
    Object.keys(raw).forEach(function(g) {
      var k = raw[g];
      if (typeof k === "string" && /^g([1-9]|1[0-2])$/.test(k)) out[g] = k;
    });
    return out;
  }
  var folderColors = cleanFolderColors(deps.folderColors);
  var panEnabled = deps.panEnabled === false ? false : true;
  var onPanEnabled = typeof deps.onPanEnabled === "function" ? deps.onPanEnabled : null;
  function isArchiveGroup2(g) {
    return String(g).charAt(0) === "_";
  }
  var ARCHIVE_SLOT2 = "g11";
  function eyeSvg(on) {
    var lid = '<path d="M1.6 8S4 3.9 8 3.9 14.4 8 14.4 8 12 12.1 8 12.1 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.25"/>';
    return '<svg viewBox="0 0 16 16" aria-hidden="true">' + lid + (on ? '<circle cx="8" cy="8" r="2" fill="currentColor"/>' : '<path d="M3 13L13 3" stroke="currentColor" stroke-width="1.25"/>') + "</svg>";
  }
  function cleanFolderShown(raw) {
    var out = /* @__PURE__ */ Object.create(null);
    if (!raw || typeof raw !== "object") return out;
    Object.keys(raw).forEach(function(g) {
      if (typeof raw[g] === "boolean") out[g] = raw[g];
    });
    return out;
  }
  var folderShown = cleanFolderShown(deps.folderShown);
  function hiddenByDefault(g) {
    if (typeof folderShown[g] === "boolean") return !folderShown[g];
    return isArchiveGroup2(g);
  }
  var SETTINGS_UI = !!deps.settingsUI;
  var openHostSettings = typeof deps.openSettings === "function" ? deps.openSettings : null;
  var saveFolderColors = typeof deps.onFolderColors === "function" ? deps.onFolderColors : null;
  var saveFolderShown = typeof deps.onFolderShown === "function" ? deps.onFolderShown : null;
  var state = {
    // Grouping is fixed to the PARA folder and there is only one layout now, so
    // both are constants rather than switchable state.
    dim: "folder",
    layout: "rings",
    hiddenSub: /* @__PURE__ */ Object.create(null),
    // "folder/sub" -> true
    hidden: /* @__PURE__ */ Object.create(null),
    // dim -> {group: true}
    // Highlighting is a SEPARATE axis from visibility, which is the whole point of
    // the eye icons: the row used to hide a group, so there was no way to say "show
    // me where this one is" without hiding everything else.
    highlight: /* @__PURE__ */ Object.create(null),
    // group -> true: pushed out and haloed
    highlightSub: /* @__PURE__ */ Object.create(null),
    // "folder/sub" -> true: same, one subfolder
    // Hovering a legend row haloes its notes for as long as the pointer is on it. A
    // SEPARATE axis again, and transient: it never survives a rebuild of the legend and
    // it is never persisted, so it cannot leave the disc in a state nobody chose.
    hoverGroup: null,
    // group name under the pointer, or null
    // Path keys under the pointer, as a SET rather than one string. A depth-1 row can
    // stand for several subfolders at once -- the "N smaller subfolders" tail row carries
    // every index it pools -- so one row is not one key, and hovering it has to light all
    // of them or it lights the wrong part of the wedge it points at.
    hoverSub: /* @__PURE__ */ Object.create(null),
    // Every group starts COLLAPSED, so the legend opens as a list of the vault's
    // top-level folders and nothing else. It used to open with one level of subfolders
    // showing, on the reasoning that that level is what the pie already draws as
    // sub-wedges -- but on this vault that is 24 rows before you have asked anything,
    // and the folder names it is trying to show are the ones that get truncated. The
    // tree is still one click deep; it just is not unfolded for you.
    //
    // Filled by regroup(), which is the first place the group names exist.
    collapsed: /* @__PURE__ */ Object.create(null),
    // group -> true: its subfolder rows folded away
    tailOpen: /* @__PURE__ */ Object.create(null),
    // group -> true: "N smaller subfolders" unfolded
    // "PARA/a/b/..." -> true: that folder's children are unfolded. Any depth; the tree
    // comes from each note's own `dirs` chain, so nothing here assumes a level count.
    pathOpen: /* @__PURE__ */ Object.create(null),
    selected: null,
    hovered: null,
    // Days marked on the heatmap: one picked by clicking, one under the pointer.
    // Both halo their notes without moving them (see isPushed), and neither is a
    // visibility filter.
    //
    // markDay IS THE WHOLE OF "MARK TODAY" NOW. There used to be a separate `markToday`
    // flag behind a sidebar button, and clicking the band's today column already did the
    // same job by the same predicate -- `created === the key`, which for that column IS
    // today. Two controls answering one question, one of which had to be found in the
    // sidebar while the answer was drawn in the band. The button went; the band is the
    // control, so the fill treatment the button owned moved onto the picked day -- see
    // nodeStyle.
    markDay: null,
    hoverDay: null,
    // The year label under the pointer, if any. Same shape as hoverDay and read the same
    // way -- a transient halo answering "where did this year go", with no push.
    hoverYear: null,
    query: "",
    until: null,
    // timeline: reveal the oldest N notes, or null for all
    // DATE RANGE CAP. Two ends, either of which may be null for "no bound", in ms UTC at
    // midnight. Separate from `until` on purpose: that one reveals the oldest N notes and
    // is a growth animation, this one is a filter. They compose -- see timeFactor.
    from: null,
    to: null,
    // The RIGHT EDGE of the heatmap's 52-week window, or null for "the last 52 weeks".
    // The band was a fixed sliding window onto today, which is what made everything before
    // it unreachable: on the 10-year fixture that is nine years of the vault with no way to
    // point at it. Concepts that move the window write this.
    heatEnd: null,
    // Bow links away from the hub instead of chording across it. 91% of links cross
    // the disc, so straight is the case that would need the excuse. No longer a
    // control: these two are fixed, and the code paths for false are kept only
    // because flipping either here is still the way to compare the two renderings.
    curveEdges: true,
    // Logo colouring: true = the inner band's palette in the middle, fading out into
    // the outer's. false = the outer ring's palette across the whole mark.
    logoTwoRing: true
  };
  var graph = new Graph({ type: "undirected" });
  var N = DATA.nodes.length;
  DATA.nodes.forEach(function(n, i) {
    graph.addNode(String(i), {
      label: n.label,
      x: 0,
      y: 0,
      size: 4,
      folder: n.folder,
      sub: n.sub || "",
      dirs: n.dirs || [],
      ntype: n.type || "note",
      tags: n.tags || [],
      path: n.id,
      deg: n.deg,
      created: n.created || "",
      touched: n.touched || "",
      words: n.words || 0,
      ghost: !!n.ghost
    });
  });
  var EDGE_RAMP_START = 2e3, EDGE_RAMP_END = 1e4, EDGE_FLOOR = 0.1;
  var adj = /* @__PURE__ */ Object.create(null);
  var EDGE_TOTAL = 0;
  var edgeAttrsOf = function(w) {
    return { weight: w, size: Math.min(1.6, 0.35 + w * 0.25) };
  };
  var EDGE_SHOWN = 0;
  var lazyEdges = false;
  (function() {
    var seen = /* @__PURE__ */ Object.create(null), list = [];
    DATA.edges.forEach(function(e) {
      var a = String(e.s), b = String(e.t);
      var k = a < b ? a + "\0" + b : b + "\0" + a;
      if (seen[k]) return;
      seen[k] = 1;
      EDGE_TOTAL++;
      list.push({ a, b, w: e.w, k });
      (adj[a] || (adj[a] = [])).push({ o: b, w: e.w });
      if (b !== a) (adj[b] || (adj[b] = [])).push({ o: a, w: e.w });
    });
    var share = EDGE_TOTAL <= EDGE_RAMP_START ? 1 : EDGE_TOTAL >= EDGE_RAMP_END ? EDGE_FLOOR : 1 - (1 - EDGE_FLOOR) * (EDGE_TOTAL - EDGE_RAMP_START) / (EDGE_RAMP_END - EDGE_RAMP_START);
    EDGE_SHOWN = Math.round(EDGE_TOTAL * share);
    lazyEdges = EDGE_SHOWN < EDGE_TOTAL;
    if (lazyEdges) {
      list.sort(function(p, q) {
        return q.w - p.w || (p.k < q.k ? -1 : 1);
      });
      list.length = EDGE_SHOWN;
    }
    list.forEach(function(e) {
      if (!graph.hasEdge(e.a, e.b)) graph.addUndirectedEdge(e.a, e.b, edgeAttrsOf(e.w));
    });
  })();
  var NODE_MIN = 2.6, NODE_MAX = 11, NODE_ORPHAN = 6;
  graph.forEachNode(function(id, a) {
    graph.setNodeAttribute(id, "size", a.deg === 0 ? NODE_ORPHAN : Math.min(NODE_MAX, NODE_MIN + 1.55 * Math.sqrt(a.deg)));
  });
  measureDotTyp();
  var hubRank = /* @__PURE__ */ Object.create(null);
  (function() {
    graph.nodes().slice().sort(function(a, b) {
      return graph.getNodeAttribute(b, "deg") - graph.getNodeAttribute(a, "deg") || String(graph.getNodeAttribute(a, "label")).localeCompare(String(graph.getNodeAttribute(b, "label")));
    }).forEach(function(id, i) {
      hubRank[id] = i;
    });
  })();
  var subOrder = /* @__PURE__ */ Object.create(null);
  (function() {
    var tally = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(_id, a) {
      var f = a.folder, sb = a.sub || "";
      if (!tally[f]) tally[f] = /* @__PURE__ */ Object.create(null);
      tally[f][sb] = (tally[f][sb] || 0) + 1;
    });
    Object.keys(tally).forEach(function(f) {
      subOrder[f] = Object.keys(tally[f]).sort(function(x, y) {
        return tally[f][y] - tally[f][x] || x.localeCompare(y);
      });
    });
  })();
  var base = {};
  var UNIT = 160;
  var UNLINKED = "(unlinked)";
  function groupOf(id) {
    if (!adj[id]) return UNLINKED;
    return graph.getNodeAttribute(id, "folder");
  }
  var SLOT_COUNT = 12;
  var groupColor = /* @__PURE__ */ Object.create(null);
  var groupSlot = /* @__PURE__ */ Object.create(null);
  var order = {};
  function computeOrder() {
    var count = {};
    graph.forEachNode(function(id) {
      var g = groupOf(id);
      count[g] = (count[g] || 0) + 1;
    });
    var names = Object.keys(count).sort(function(a, b) {
      var rank = function(s) {
        var c = s.charAt(0);
        return c === "_" ? 0 : c === "(" ? 1 : 2;
      };
      return rank(a) - rank(b) || a.localeCompare(b, void 0, { numeric: true });
    });
    order[state.dim] = names;
    return count;
  }
  var counts = {};
  function buildColors() {
    groupColor = /* @__PURE__ */ Object.create(null);
    var names = order[state.dim] || [];
    var byFolder = state.dim === "folder" ? folderColors : /* @__PURE__ */ Object.create(null);
    groupSlot = /* @__PURE__ */ Object.create(null);
    var auto = 0;
    names.forEach(function(g) {
      var k = byFolder[g];
      var picked = k && THEME.byKey[k] ? k : "";
      if (isArchiveGroup2(g)) {
        var akey = picked || ARCHIVE_SLOT2;
        groupColor[g] = THEME.byKey[akey];
        groupSlot[g] = akey;
        return;
      }
      var key = "g" + (auto++ % SLOT_COUNT + 1);
      var use = picked || key;
      groupColor[g] = THEME.byKey[use];
      groupSlot[g] = use;
    });
    buildSubShades();
  }
  function paletteInfo() {
    return SLOT_NAMES2.map(function(name, i) {
      return { key: "g" + (i + 1), name, hex: THEME.slots[i] };
    });
  }
  function applyFolderShown(map) {
    folderShown = cleanFolderShown(map);
    return folderShown;
  }
  function applyFolderColors(map) {
    folderColors = cleanFolderColors(map);
    buildColors();
    if (renderer) renderer.refresh();
    try {
      placeLogo();
    } catch {
    }
    try {
      heatBuild();
    } catch {
    }
    try {
      buildLegend();
    } catch {
    }
    return folderColors;
  }
  function colorOf(group) {
    return groupColor[group] || THEME.neutrals[0];
  }
  var subShade = /* @__PURE__ */ Object.create(null);
  var SLICE_GAP = 2;
  var SUB_GAP = 0.3;
  var EDGE_PAD_ARC = 0;
  var EDGE_PAD_MAX = 0;
  var INNER_SCALE = 0.8;
  var INNER_FILL = 0.8;
  var GAP_BAND = { i: 0.5, o: 1 };
  var CLEAR_OF_ROOM = 0.12;
  var MIN_SPAN = 6 * Math.PI / 180;
  var HL_PUSH = 0.9;
  var DENSITY_MAX = 2.6;
  var BAND = null;
  function bandOf(k) {
    if (!BAND) {
      BAND = {
        i: { key: "i", sp: 1, rows: 0, room: 0, ramp: { m: 1, b: 0, lo: 0 }, gapDeg: 0, nG: 0 },
        o: { key: "o", sp: 1, rows: 0, room: 0, ramp: { m: 1, b: 0, lo: 0 }, gapDeg: 0, nG: 0 }
      };
    }
    return k === "i" ? BAND.i : BAND.o;
  }
  function bandScale(k) {
    return k === "i" ? INNER_SCALE : 1;
  }
  function pitchUnits(band) {
    return UNIT * (bandOf(band).sp || 1) * bandScale(band);
  }
  var NEST_MIN = 2;
  var SMALL_GROUP = 0;
  var SUB_SLOTS = 4;
  var SUB_NAMED = 3;
  var HUE_BUDGET_FRACTION = 0.6;
  var SUB_L_SPAN = 0.28;
  var SUB_L_LIMIT = 0.9;
  function hueOf(hex) {
    var l = hex2lab(hex);
    return (Math.atan2(l[2], l[1]) * 180 / Math.PI % 360 + 360) % 360;
  }
  function hueBudget(basecol) {
    var h = hueOf(basecol), gap = 180;
    Object.keys(groupColor).forEach(function(g) {
      var c = groupColor[g];
      if (c === basecol) return;
      var lab = hex2lab(c);
      if (Math.hypot(lab[1], lab[2]) < 0.02) return;
      var d = Math.abs(h - hueOf(c));
      d = Math.min(d, 360 - d);
      if (d < gap) gap = d;
    });
    return gap * HUE_BUDGET_FRACTION;
  }
  function subTintIndex(folder, sub) {
    var subs = subOrder[folder] || [];
    var k = subs.indexOf(sub || "");
    return k < 0 ? 0 : Math.min(k, SUB_SLOTS - 1);
  }
  function buildSubShades() {
    subShade = /* @__PURE__ */ Object.create(null);
    Object.keys(subOrder).forEach(function(f) {
      var subs = subOrder[f];
      if (subs.length < 2) return;
      var basecol = colorOf(f);
      var lab = hex2lab(basecol);
      var grey = Math.hypot(lab[1], lab[2]) < 0.02;
      if (grey) {
        subs.forEach(function(sb) {
          subShade[f + "/" + sb] = basecol;
        });
        return;
      }
      var sign = THEME.dark ? 1 : -1;
      var budget = hueBudget(basecol);
      var Lend = THEME.dark ? Math.min(SUB_L_LIMIT, lab[0] + SUB_L_SPAN) : Math.max(1 - SUB_L_LIMIT, lab[0] - SUB_L_SPAN);
      subs.forEach(function(sb) {
        var t = subTintIndex(f, sb) / (SUB_SLOTS - 1);
        subShade[f + "/" + sb] = shade(basecol, sign * budget * t, (Lend - lab[0]) * t);
      });
    });
  }
  function nodeColor(id) {
    var a = graph.getNodeAttributes(id);
    if (state.dim !== "folder") return colorOf(groupOf(id));
    if (groupOf(id) === UNLINKED) return colorOf(UNLINKED);
    return subShade[a.folder + "/" + (a.sub || "")] || colorOf(a.folder);
  }
  function isHidden(group) {
    var h = state.hidden[state.dim];
    return !!(h && h[group]);
  }
  var bandLock = null;
  var geomLock = null;
  var DBG = { on: false, cells: null, canvas: null };
  var SEAM_YELLOW = "rgb(255,196,0)";
  var SEAM_YELLOW_45 = "rgba(255,196,0,0.45)";
  var bandRefLock = null;
  var ringsMerged = /* @__PURE__ */ Object.create(null);
  var MERGED = "merged";
  function sweepAngle(sw) {
    return Math.PI / 2 - sw;
  }
  function angleSweep(a) {
    var t = (Math.PI / 2 - a) % (2 * Math.PI);
    return t < 0 ? t + 2 * Math.PI : t;
  }
  function isOrphan(id) {
    return !adj[id];
  }
  var SEAM_ROWS = 0.3;
  var SEAM_MAX_ROWS = 0.16;
  var REF_ROWS = 5;
  var SEAM_FALL = 1.5;
  var GAP_FULL_TO = 1e3;
  var GAP_ZERO_AT = 1e4;
  function gapScale() {
    var n = graph.order;
    if (n <= GAP_FULL_TO) return 1;
    if (n >= GAP_ZERO_AT) return 0;
    return 1 - (n - GAP_FULL_TO) / (GAP_ZERO_AT - GAP_FULL_TO);
  }
  function seamFall(band) {
    var k = band === "i" ? "i" : "o";
    var rows = bandOf(k).rows || REF_ROWS;
    return Math.pow(REF_ROWS / Math.max(1, rows), SEAM_FALL);
  }
  function seamAngle(band, frac) {
    var k = band === "i" ? "i" : "o";
    var r = geomLock && geomLock.bandR ? geomLock.bandR[k] : 0;
    if (!r) return SLICE_GAP * Math.PI / 180 * gapScale() * frac;
    var w = SEAM_ROWS * seamFall(band) * pitchUnits(band) * (GAP_BAND[k] || 1);
    var cap = SEAM_MAX_ROWS * UNIT;
    if (w > cap) w = cap;
    return w * frac / r;
  }
  function gapFor(nGroups, band) {
    var g = seamAngle(band, 1);
    return g * nGroups > Math.PI ? Math.PI / Math.max(1, nGroups) : g;
  }
  var SEAM_CAP = 0.45;
  var MARGIN_ROWS = 0.5;
  var EXCESS_KEEP = 0.35;
  var DOT_TYP_I = 0, DOT_TYP_O = 0;
  var dotTyp = function(band) {
    return band === "i" ? DOT_TYP_I : DOT_TYP_O;
  };
  function measureDotTyp() {
    var sizes = [];
    graph.forEachNode(function(id, a) {
      sizes.push(a.size || 4);
    });
    sizes.sort(function(x, y) {
      return x - y;
    });
    var mid = sizes.length ? sizes[Math.floor(sizes.length / 2)] : 4;
    DOT_TYP_I = dotUnits(mid, "i");
    DOT_TYP_O = dotUnits(mid, "o");
  }
  function dotUnits(size, band) {
    var z = size || 4;
    if (z > NODE_MAX) z = NODE_MAX;
    return DOT_OF_PITCH * pitchUnits(band) / bandScale(band) * (z / NODE_MAX);
  }
  function edgeSweep(c, which, rGraph) {
    var sm = seamAt(rGraph, c.nB, c.bandKey);
    return which === "lead" ? c.pLead + sm.gap / 2 : c.pTrail - sm.gap / 2;
  }
  function seamAt(r, nBoundaries, band) {
    var g = r > 1e-6 ? SEAM_ROWS * pitchUnits(band) / r : 0;
    var tot = g * nBoundaries;
    var cap = 2 * Math.PI * SEAM_CAP;
    if (tot > cap) {
      g *= cap / tot;
      tot = cap;
    }
    return { gap: g, avail: 2 * Math.PI - tot };
  }
  function allocateBand(list, weightOf, opts) {
    var TWO = 2 * Math.PI;
    var tot = 0, gw = /* @__PURE__ */ Object.create(null);
    list.forEach(function(c) {
      tot += weightOf(c);
      var g = gw[c.g] || (gw[c.g] = { w: 0 });
      g.w += weightOf(c);
    });
    var presOf = function(c) {
      return Math.min(1, weightOf(c));
    };
    var given = opts.groupPres || null;
    var groupPres = /* @__PURE__ */ Object.create(null), nG = 0;
    Object.keys(gw).forEach(function(k2) {
      var p = given && given[k2] !== void 0 ? given[k2] : gw[k2].w;
      groupPres[k2] = p < 0 ? 0 : p > 1 ? 1 : p;
      nG += groupPres[k2];
    });
    var nSub = 0;
    if (opts.subGaps) {
      var firstOf = /* @__PURE__ */ Object.create(null);
      list.forEach(function(c) {
        if (!firstOf[c.g]) {
          firstOf[c.g] = 1;
          return;
        }
        nSub += presOf(c);
      });
    }
    var gap = gapFor(nG, opts.band);
    var subGap = opts.subGaps ? gap : 0;
    var gapTotal = gap * nG + subGap * nSub;
    if (opts.clamp && gapTotal > TWO * opts.clamp) {
      var k = TWO * opts.clamp / gapTotal;
      gap *= k;
      subGap *= k;
      gapTotal *= k;
    }
    var avail = TWO - gapTotal;
    var floorAng = 0;
    if (opts.band && geomLock && geomLock.bandR) {
      var rRef = geomLock.bandR[opts.band === "i" ? "i" : "o"] || 0;
      if (rRef > 1e-6) floorAng = 0.8 * pitchUnits(opts.band) / rRef;
    }
    var shareMap = null;
    if (floorAng > 0 && tot > opts.totFloor) {
      shareMap = /* @__PURE__ */ Object.create(null);
      var floorFor = function(w, c0) {
        if (colWalk && c0 && colWalk[c0.g] !== void 0) return floorAng * colWalk[c0.g].f;
        return floorAng * (w > 1 ? 1 : w < 0 ? 0 : w);
      };
      var over = 0, under2 = 0, live = [];
      list.forEach(function(c) {
        var w = weightOf(c);
        var raw = w > 1e-4 ? avail * (w / Math.max(opts.totFloor, tot)) : 0;
        shareMap[c.k] = raw;
        if (raw <= 0) return;
        live.push(c);
        var fl = floorFor(w, c);
        if (raw < fl) under2 += fl - raw;
        else over += raw - fl;
      });
      var lift = under2 > 0 && over > 0 ? Math.min(1, over / under2) : 0;
      if (lift > 0) {
        var take = under2 * lift / over;
        live.forEach(function(c) {
          var raw = shareMap[c.k], fl = floorFor(weightOf(c), c);
          shareMap[c.k] = raw < fl ? raw + (fl - raw) * lift : raw - (raw - fl) * take;
        });
      } else {
        shareMap = null;
      }
    }
    return {
      tot,
      nG,
      nSub,
      gap,
      subGap,
      avail,
      /** The angular floor actually applied, or 0. For the probe. */
      minArc: function() {
        lastMinArc = shareMap ? floorAng : 0;
        return lastMinArc;
      }(),
      groupPres,
      presOf,
      shareOf: function(c) {
        if (shareMap && shareMap[c.k] !== void 0) return shareMap[c.k];
        return avail * (weightOf(c) / Math.max(opts.totFloor, tot));
      },
      // The share as a plain FRACTION of whatever arc is going. The rendered placement needs
      // this rather than shareOf, because the arc going depends on the radius and so cannot be
      // baked in here.
      fracOf: function(c) {
        if (shareMap && shareMap[c.k] !== void 0) {
          return avail > 1e-9 ? shareMap[c.k] / avail : 0;
        }
        return weightOf(c) / Math.max(opts.totFloor, tot);
      }
    };
  }
  function buildWedgePlan(onlyVisible, weightOf, rowsOf, spIn) {
    var W = weightOf || function() {
      return 1;
    };
    var all = order[state.dim] || [];
    var nested = state.dim === "folder";
    var SEP = "\0";
    var byCell = {}, cellsOf = {}, planTotal = 0;
    var presMax = /* @__PURE__ */ Object.create(null);
    var liveG = /* @__PURE__ */ Object.create(null);
    var liveN = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      if (onlyVisible && !(planKeep || willShow)(id)) return;
      var g0 = groupOf(id);
      var wv = W(id);
      liveG[g0] = (liveG[g0] || 0) + (wv > 1 ? 1 : wv < 0 ? 0 : wv);
      liveN[g0] = (liveN[g0] || 0) + 1;
    });
    var bandLive = { i: 0, o: 0 };
    Object.keys(liveG).forEach(function(g) {
      bandLive[bandLock && bandLock[g] ? "i" : "o"] += liveG[g];
    });
    var depthOfBand = function(isInner) {
      if (!geomLock) return REF_ROWS;
      var n = bandLive[isInner ? "i" : "o"];
      var thick = isInner ? (geomLock.rOuter - geomLock.r0) * INNER_FILL : geomLock.maxR - geomLock.rOuter;
      var scale = isInner ? INNER_SCALE : 1;
      var base2 = isInner ? geomLock.r0 : geomLock.rOuter;
      if (!(thick > 0) || !(n > 0.5)) return REF_ROWS;
      var T = thick * scale, R = (base2 + thick / 2) * scale;
      var rw = Math.round(T / Math.sqrt(2 * Math.PI * R * T / n));
      return rw < 1 ? 1 : rw > 200 ? 200 : rw;
    };
    var bandDepth = { i: 0, o: 0 };
    var splitOf = /* @__PURE__ */ Object.create(null);
    var splitFor = function(g) {
      if (splitOf[g] === void 0) {
        var bk = bandLock && bandLock[g] ? "i" : "o";
        if (!bandDepth[bk]) bandDepth[bk] = depthOfBand(bk === "i");
        var nSubs = (subOrder[g] || []).length;
        splitOf[g] = nested && nSubs > 1 && (liveN[g] || 0) >= Math.max(NEST_MIN, nSubs * bandDepth[bk]);
      }
      return splitOf[g];
    };
    graph.forEachNode(function(id) {
      if (onlyVisible && !(planKeep || willShow)(id)) return;
      var g = groupOf(id), a = graph.getNodeAttributes(id);
      var split = splitFor(g);
      var key = split ? g + SEP + subTintIndex(g, a.sub) : g;
      if (!byCell[key]) {
        byCell[key] = [];
        (cellsOf[g] || (cellsOf[g] = [])).push(key);
      }
      byCell[key].push(id);
      planTotal += W(id);
      var pw = W(id);
      if (colWalk && colWalk[g] !== void 0) pw = colWalk[g].f;
      if (!(presMax[g] >= pw)) presMax[g] = pw;
    });
    ringsMerged = /* @__PURE__ */ Object.create(null);
    var big = [], smallIds = [];
    all.filter(function(g) {
      return cellsOf[g];
    }).forEach(function(g) {
      if ((counts[g] || 0) >= SMALL_GROUP) {
        big.push(g);
        return;
      }
      ringsMerged[g] = true;
      cellsOf[g].forEach(function(k) {
        smallIds = smallIds.concat(byCell[k]);
      });
    });
    var cells = [];
    big.forEach(function(g) {
      var ks = cellsOf[g];
      if (nested) {
        ks.sort(function(x, y) {
          return +(x.split(SEP)[1] || 0) - +(y.split(SEP)[1] || 0);
        });
      }
      ks.forEach(function(k) {
        cells.push({ g, k, list: byCell[k] });
      });
    });
    if (smallIds.length) cells.push({ g: MERGED, k: MERGED, list: smallIds });
    if (!cells.length) return null;
    cells.forEach(function(c) {
      c.list.sort(function(a, b) {
        return hubRank[a] - hubRank[b];
      });
      c.wsum = 0;
      c.list.forEach(function(id) {
        c.wsum += W(id);
      });
    });
    var TOTAL = planTotal;
    var MIN = MIN_SPAN, TWO = 2 * Math.PI;
    var smallAt = TOTAL * (MIN / TWO);
    var groupInner = {};
    cells.forEach(function(c) {
      var small = c.wsum < smallAt;
      if (groupInner[c.g] === void 0) groupInner[c.g] = small;
      else groupInner[c.g] = groupInner[c.g] || small;
    });
    if (bandLock) cells.forEach(function(c) {
      if (bandLock[c.g] !== void 0) groupInner[c.g] = bandLock[c.g];
    });
    cells.forEach(function(c) {
      c.inner = groupInner[c.g];
    });
    var inner = cells.filter(function(c) {
      return c.inner;
    });
    var outer = cells.filter(function(c) {
      return !c.inner;
    });
    if (!outer.length && !bandLock) {
      inner.forEach(function(c) {
        c.inner = false;
      });
      outer = cells;
      inner = [];
    }
    var share = function(list, band) {
      var a = allocateBand(
        list,
        function(c) {
          return c.wsum;
        },
        { subGaps: false, clamp: null, totFloor: 1e-4, band }
      );
      lastGapN[band] = Math.round(a.nG * 1e3) / 1e3;
      list.forEach(function(c) {
        c.band = a.shareOf(c);
      });
    };
    share(inner, "i");
    share(outer, "o");
    cells.forEach(function(c) {
      c.bandRef = c.band;
    });
    var HOLE = 0.3;
    var fullTotal = geomLock && geomLock.total > 0 ? geomLock.total : planTotal;
    var density = spIn && typeof spIn === "object" ? spIn.o || 1 : spIn > 0 ? spIn : planTotal > 1e-4 ? Math.min(DENSITY_MAX, Math.sqrt(fullTotal / planTotal)) : 1;
    var SP = density;
    var given = spIn && typeof spIn === "object" ? spIn : null;
    var givenRoom = given && given.room ? given.room : null;
    var SP_I = given && given.i > 0 ? given.i : SP;
    var SP_O = given && given.o > 0 ? given.o : SP;
    var bandDensity = function(cells2, key) {
      if (!geomLock || !geomLock.bandTotal) return SP;
      var full = geomLock.bandTotal[key] || 0, now = 0;
      cells2.forEach(function(c) {
        now += c.wsum;
      });
      if (!(full > 1e-4) || !(now > 1e-4)) return SP;
      return Math.min(DENSITY_MAX, Math.sqrt(full / now));
    };
    var r0 = geomLock ? geomLock.r0 : Math.max(1.5, HOLE * Math.sqrt(
      Math.max(1, TOTAL) / (Math.PI * (1 - HOLE * HOLE))
    ));
    function rowsNeeded(span, n, st, sp) {
      if (!(n > 0)) return 0;
      var p = sp > 0 ? sp : SP;
      var i = 0, r = st, k = 0;
      while (i < n && k < 500) {
        i += Math.max(0.05, span * r / p);
        r += p;
        k++;
      }
      var cap = Math.ceil(n - 1e-9);
      return Math.max(1, cap > 0 && k > cap ? cap : k);
    }
    function padFor(base2, ref) {
      var refArc = base2 * (ref || 0) * UNIT;
      return refArc > 1e-6 ? Math.min(EDGE_PAD_MAX, EDGE_PAD_ARC / refArc) : 0;
    }
    function usableRef(c, base2) {
      c.pad = padFor(base2, c.bandRef);
      return c.bandRef * (1 - 2 * c.pad);
    }
    var GUTTER = 1.6 * SP;
    var BAND_RATIO = 0.55;
    if (!bandLock) (function balanceBands() {
      var names = [];
      cells.forEach(function(c) {
        if (names.indexOf(c.g) < 0) names.push(c.g);
      });
      if (names.length < 2) return;
      var assign = {};
      cells.forEach(function(c) {
        assign[c.g] = !!c.inner;
      });
      var PIN_BELOW = 10;
      var groupNotes = {};
      var totalNotes = 0;
      cells.forEach(function(c) {
        groupNotes[c.g] = (groupNotes[c.g] || 0) + c.list.length;
        totalNotes += c.list.length;
      });
      var pinnedInner = {};
      names.forEach(function(g) {
        if (assign[g] && (groupNotes[g] || 0) < PIN_BELOW) pinnedInner[g] = true;
      });
      var movable = names.filter(function(g) {
        return !pinnedInner[g];
      });
      if (!movable.length) return;
      var spanFor = function(ins, outs, rv) {
        var iR = 0;
        ins.forEach(function(c) {
          var r = rowsNeeded(usableRef(c, rv), c.wsum, rv);
          if (r > iR) iR = r;
        });
        var rOut = ins.length ? rv + iR * SP + GUTTER : rv;
        var oR = 0;
        outs.forEach(function(c) {
          var r = rowsNeeded(usableRef(c, rOut), c.wsum, rOut);
          if (r > oR) oR = r;
        });
        return {
          inner: Math.max(0, iR - 1) * SP * INNER_SCALE,
          outer: Math.max(0, oR - 1) * SP,
          iR,
          oR,
          // The hole as a share of the whole disc. Needed here because growing the hub to
          // hit a thickness ratio trades against the one thing HOLE exists to hold fixed.
          holeShare: rOut + oR * SP > 0 ? rv / (rOut + oR * SP) : 1
        };
      };
      var R0_BASE = r0;
      var HOLE_MAX = 0.36;
      var evaluate = function(a) {
        var ins = [], outs = [];
        cells.forEach(function(c) {
          (a[c.g] ? ins : outs).push(c);
        });
        if (!ins.length || !outs.length) return { cost: Infinity, r0: R0_BASE };
        share(ins, "i");
        share(outs, "o");
        cells.forEach(function(c) {
          c.bandRef = c.band;
        });
        var biggestInner = 0, smallestOuter = Infinity;
        names.forEach(function(g) {
          var n = groupNotes[g] || 0;
          if (a[g]) {
            if (n > biggestInner) biggestInner = n;
          } else if (n < smallestOuter) smallestOuter = n;
        });
        if (!isFinite(smallestOuter)) smallestOuter = biggestInner;
        var innerPeak = totalNotes ? Math.max(0, biggestInner - smallestOuter) / totalNotes : 0;
        var bc2 = Infinity, br = R0_BASE;
        for (var m = 100; m <= 300; m += 5) {
          var rv = R0_BASE * (m / 100), t = spanFor(ins, outs, rv);
          var c22 = Math.abs(t.inner - BAND_RATIO * t.outer) + (t.iR > t.oR ? INVERT_WEIGHT * (t.iR - t.oR) : 0) + SIZE_WEIGHT * SP * innerPeak + (t.inner >= t.outer ? 1e3 : 0) + // Priced, not forbidden: on a vault where nothing else works the least
          // bad answer is still a slightly larger hub, and a wall would leave the
          // search sitting on its starting point.
          (t.holeShare > HOLE_MAX ? 4e3 * (t.holeShare - HOLE_MAX) : 0);
          if (c22 < bc2 - 1e-9) {
            bc2 = c22;
            br = rv;
          }
        }
        return { cost: bc2, r0: br };
      };
      var INVERT_WEIGHT = 0.5;
      var SIZE_WEIGHT = 5;
      var cost = function(a) {
        return evaluate(a).cost;
      };
      var EXHAUSTIVE_UP_TO = 14;
      if (movable.length <= EXHAUSTIVE_UP_TO) {
        var bestMask = -1, bestCost = Infinity;
        for (var mask = 0; mask < 1 << movable.length; mask++) {
          for (var b = 0; b < movable.length; b++) assign[movable[b]] = !!(mask & 1 << b);
          var cm = cost(assign);
          if (cm < bestCost) {
            bestCost = cm;
            bestMask = mask;
          }
        }
        for (var b2 = 0; b2 < movable.length; b2++) {
          assign[movable[b2]] = !!(bestMask & 1 << b2);
        }
      } else {
        var best = cost(assign);
        for (var pass = 0; pass < 60 && best > 1e-9; pass++) {
          var move = null, bc = best;
          for (var i = 0; i < movable.length; i++) {
            assign[movable[i]] = !assign[movable[i]];
            var c2 = cost(assign);
            assign[movable[i]] = !assign[movable[i]];
            if (c2 < bc - 1e-9) {
              bc = c2;
              move = movable[i];
            }
          }
          if (!move) break;
          assign[move] = !assign[move];
          best = bc;
        }
      }
      cells.forEach(function(c) {
        c.inner = !!assign[c.g];
      });
      inner = cells.filter(function(c) {
        return c.inner;
      });
      outer = cells.filter(function(c) {
        return !c.inner;
      });
      share(inner, "i");
      share(outer, "o");
      cells.forEach(function(c) {
        c.bandRef = c.band;
      });
      r0 = evaluate(assign).r0;
    })();
    if (!given) {
      SP_I = bandDensity(inner, "i");
      SP_O = bandDensity(outer, "o");
    }
    var solveBand = function(list, base2, thick, scale, sp) {
      if (!list.length) return { sp, rows: 0 };
      var n = 0;
      list.forEach(function(c) {
        n += c.wsum;
      });
      if (!(n > 1e-4)) return { sp, rows: 0 };
      if (given || !(thick > 0) || !(n > 0.5)) {
        var rk = Math.round(thick > 0 && sp > 0 ? thick / sp : 1);
        return { sp, rows: rk > 0 ? rk : 1 };
      }
      var T = thick * scale, R = (base2 + thick / 2) * scale;
      var s = Math.sqrt(2 * Math.PI * R * T / n);
      var rw = Math.round(T / s);
      if (rw < 1) rw = 1;
      if (rw > 200) rw = 200;
      return { sp: thick / rw, rows: rw };
    };
    var thickI = geomLock ? (geomLock.rOuter - geomLock.r0) * INNER_FILL : 0;
    var innerRows = 0;
    if (geomLock && thickI > 0) {
      var si = solveBand(inner, r0, thickI, INNER_SCALE, SP_I);
      SP_I = si.sp;
      innerRows = si.rows;
      inner.forEach(function(c) {
        c.rows = c.wsum > 1e-4 ? innerRows : 0;
      });
    } else {
      inner.forEach(function(c) {
        c.rows = rowsNeeded(usableRef(c, r0), c.wsum, r0, SP_I);
        if (c.rows > innerRows) innerRows = c.rows;
      });
    }
    var rOuter = geomLock ? geomLock.rOuter : inner.length ? r0 + innerRows * SP_I + 1.6 * SP_I : r0;
    var thickO = geomLock ? geomLock.maxR - geomLock.rOuter : 0;
    var maxR = rOuter, outerRows = 0;
    if (geomLock && thickO > 0) {
      var so = solveBand(outer, rOuter, thickO, 1, SP_O);
      SP_O = so.sp;
      outerRows = so.rows;
      outer.forEach(function(c) {
        c.rows = c.wsum > 1e-4 ? outerRows : 0;
      });
      maxR = rOuter + outerRows * SP_O;
    } else {
      outer.forEach(function(c) {
        c.rows = rowsNeeded(usableRef(c, rOuter), c.wsum, rOuter, SP_O);
        if (c.rows > outerRows) outerRows = c.rows;
        var r = rOuter + c.rows * SP_O;
        if (r > maxR) maxR = r;
      });
    }
    function placeCell(c, rows, base2, bandRows) {
      var SP2 = c.inner ? SP_I : SP_O;
      var seq = c.list;
      var wTot = 0;
      seq.forEach(function(id) {
        wTot += W(id);
      });
      var nEff = wTot;
      var total = base2 * rows + SP2 * rows * rows / 2;
      var pad = typeof c.pad === "number" ? c.pad : padFor(base2, c.bandRef);
      var span = 1 - 2 * pad;
      var centred = bandRows > 0 && nEff > 1e-4 && nEff < bandRows - 1e-4;
      var cStart = centred ? Math.round((bandRows - nEff) / 2) : 0;
      var recs = [], acc = 0;
      seq.forEach(function(id, idx) {
        var w = W(id);
        var s = wTot > 1e-4 ? (acc + w / 2) / wTot : 0.5;
        acc += w;
        s = s < 0 ? 0 : s > 1 ? 1 : s;
        var target = s * total;
        var pp = SP2 > 1e-9 ? (-base2 + Math.sqrt(Math.max(0, base2 * base2 + 2 * SP2 * target))) / SP2 : target / Math.max(1e-9, base2);
        if (pp < 0) pp = 0;
        if (pp > rows - 1e-9) pp = Math.max(0, rows - 1e-9);
        var cRow = 0;
        if (centred) {
          var top = Math.max(0, Math.ceil(nEff - 1e-4) - 1);
          cRow = cStart + Math.min(Math.floor(s * nEff), top);
        }
        recs.push({ id, w, row: centred ? cRow : Math.floor(pp) });
      });
      var rowW = /* @__PURE__ */ Object.create(null), rowFirst = /* @__PURE__ */ Object.create(null), rowLast = /* @__PURE__ */ Object.create(null);
      var edgeA = /* @__PURE__ */ Object.create(null), edgeB = /* @__PURE__ */ Object.create(null);
      recs.forEach(function(r) {
        rowW[r.row] = (rowW[r.row] || 0) + r.w;
        if (rowFirst[r.row] === void 0) rowFirst[r.row] = r.w;
        rowLast[r.row] = r.w;
        var dz = graph.getNodeAttribute(r.id, "size") || 4;
        if (edgeA[r.row] === void 0) edgeA[r.row] = dz;
        edgeB[r.row] = dz;
      });
      var rowAcc = /* @__PURE__ */ Object.create(null);
      var out = [];
      recs.forEach(function(r) {
        var before = rowAcc[r.row] || 0, tot = rowW[r.row] || 0;
        var t = tot > 1e-9 ? (before + r.w / 2) / tot : 0.5;
        var hA = tot > 1e-9 ? (rowFirst[r.row] || 0) / (2 * tot) : 0;
        var hB = tot > 1e-9 ? (rowLast[r.row] || 0) / (2 * tot) : 0;
        var keep = 1 - hA - hB;
        if (keep > 1e-9) t = (t - hA) / keep;
        if (t < 0) t = 0;
        else if (t > 1) t = 1;
        rowAcc[r.row] = before + r.w;
        var rr = (base2 + r.row * SP2) * (c.inner ? INNER_SCALE : 1);
        var u0 = r.row % 2 === 1 ? 1 - t : t;
        var eA = edgeA[r.row] || 0, eB = edgeB[r.row] || 0;
        out.push({
          id: r.id,
          r: rr,
          u: pad + u0 * span,
          eA: r.row % 2 === 1 ? eB : eA,
          eB: r.row % 2 === 1 ? eA : eB
        });
      });
      return out;
    }
    cells.forEach(function(c) {
      var base2 = c.inner ? r0 : rOuter;
      var rf = rowsOf ? rowsOf(c) : c.rows;
      if (!rf) rf = c.rows;
      c.slots = placeCell(c, rf, base2, c.inner ? innerRows : outerRows);
    });
    var roomOf = function(list) {
      var v = [];
      list.forEach(function(c) {
        if (!c.slots || !c.slots.length) return;
        var rn = /* @__PURE__ */ Object.create(null);
        c.slots.forEach(function(sl) {
          rn[sl.r] = (rn[sl.r] || 0) + 1;
        });
        c.slots.forEach(function(sl) {
          var n = rn[sl.r] || 1;
          var step = (c.band || 0) * sl.r * UNIT / n;
          if (step > 1) v.push(step);
        });
      });
      if (!v.length) return 0;
      v.sort(function(x, y) {
        return x - y;
      });
      return v[Math.floor(v.length * 0.1)];
    };
    var roomPlan = givenRoom || { i: roomOf(inner), o: roomOf(outer) };
    var depthOf = function(list, fallback, band) {
      var given2 = spIn && typeof spIn === "object" && spIn.depth ? spIn.depth[band] : 0;
      if (given2 > 0) return given2;
      return fallback;
    };
    return {
      cells,
      maxR,
      total: planTotal,
      r0,
      rOuter,
      sp: SP_O,
      spInner: SP_I,
      density,
      room: roomPlan,
      // The sub-split gate's inputs, so a probe can see WHY a group did or did not
      // split rather than inferring it from the cell count.
      dbgLive: liveG,
      dbgSplit: splitOf,
      presMax,
      rows: {
        i: depthOf(inner, innerRows, "i"),
        o: depthOf(outer, outerRows || REF_ROWS, "o")
      }
    };
  }
  var REPACK_BELOW = 0.55;
  function ringsLayout(planIn, strict) {
    if (roomNow) {
      if (roomNow.i > 1) bandOf("i").room = roomNow.i;
      if (roomNow.o > 1) bandOf("o").room = roomNow.o;
    }
    var shownCount = 0;
    graph.forEachNode(function(id) {
      if (visible(id)) shownCount++;
    });
    var plan = planIn || pinnedPlan || buildWedgePlan(
      true,
      function(id) {
        return alpha[id] || 0;
      }
    );
    if (!plan) return null;
    var live = 0;
    plan.cells.forEach(function(c) {
      c.geom = 0;
      c.live = 0;
      c.slots.forEach(function(sl) {
        var al = alpha[sl.id] || 0;
        var will = willShow(sl.id);
        if (colWalk) {
          var cw = colWalk[groupOf(sl.id)];
          if (cw !== void 0) {
            c.geom = c.live = cw.n * cw.f;
            return;
          }
        }
        c.geom += fullRing || !will ? al : 1;
        c.live += al;
      });
      live += c.geom;
    });
    var shown = plan.cells.filter(function(c) {
      return c.geom > 1e-4;
    });
    if (!shown.length || !live) return null;
    lastMaxR = plan.maxR || lastMaxR;
    if (plan.sp > 0) bandOf("o").sp = plan.sp;
    if (plan.spInner > 0) bandOf("i").sp = plan.spInner;
    if (plan.rows) {
      bandOf("i").rows = plan.rows.i;
      bandOf("o").rows = plan.rows.o;
    }
    var TWO = 2 * Math.PI;
    var pos = {};
    var fit2 = /* @__PURE__ */ Object.create(null);
    var lastAt = null, firstAt = null;
    var roomPool = { i: [], o: [] };
    var cellRoomNext = /* @__PURE__ */ Object.create(null);
    var cellMin = /* @__PURE__ */ Object.create(null), cellOf = /* @__PURE__ */ Object.create(null);
    var edgeCapNext = /* @__PURE__ */ Object.create(null);
    var dbgCells = DBG.on ? [] : null;
    if (probe) {
      lastStart = /* @__PURE__ */ Object.create(null);
      lastArc = /* @__PURE__ */ Object.create(null);
      lastBand = /* @__PURE__ */ Object.create(null);
    }
    [true, false].forEach(function(isInner) {
      var band = shown.filter(function(c) {
        return !!c.inner === isInner;
      });
      if (!band.length) return;
      var tot = 0;
      band.forEach(function(c) {
        tot += c.geom;
      });
      var a = allocateBand(
        band,
        function(c) {
          return c.geom;
        },
        {
          subGaps: true,
          clamp: 0.45,
          totFloor: 1e-6,
          // FROM THE PLAN, on the same clock as everything else it packs.
          //
          // This used to be gapPres, walked 1 -> 0 across the whole cascade
          // on the cascade's own clock. A note's opacity runs on a per-note
          // fade clock that finishes far sooner: measured on a vault where
          // 07 - Yearly Reviews holds a single note, the note reached
          // present()'s 0.004 floor at 32% of the span and its cell was
          // correctly culled -- while the walked reservation still stood at
          // 0.767. Three quarters of a gap released in one frame, and every
          // wedge boundary in the band shifted to absorb it: 10.66 degrees
          // on 06 - Monthly Reviews, in a toggle where no note moved more
          // than 162 units. The wedge and its seams have to shrink on the
          // clock of the notes they belong to, and now they do.
          groupPres: plan.presMax || null,
          band: isInner ? "i" : "o"
        }
      );
      var gap = a.gap;
      bandOf(isInner ? "i" : "o").gapDeg = Math.round(gap * 180 / Math.PI * 1e3) / 1e3;
      bandOf(isInner ? "i" : "o").nG = Math.round(a.nG * 1e3) / 1e3;
      bandOf(isInner ? "i" : "o").nSub = Math.round(a.nSub * 1e3) / 1e3;
      band.forEach(function(c) {
        c.span = a.shareOf(c);
        if (probe && lastArc) {
          lastArc[c.g] = (lastArc[c.g] || 0) + c.span * 180 / Math.PI;
          lastBand[c.g] = isInner ? "i" : "o";
        }
      });
      lastAt = /* @__PURE__ */ Object.create(null);
      firstAt = /* @__PURE__ */ Object.create(null);
      var nB = a.nG + a.nSub;
      var refR = geomLock && geomLock.bandR ? geomLock.bandR[isInner ? "i" : "o"] : 0;
      var sBand = refR > 0 ? seamAt(refR, nB, isInner ? "i" : "o") : null;
      var rowShare = null;
      if (rowArcOn()) {
        rowShare = /* @__PURE__ */ Object.create(null);
        var presIn = /* @__PURE__ */ Object.create(null);
        band.forEach(function(c0, ci) {
          c0.slots.forEach(function(sl0) {
            var w0 = alpha[sl0.id] || 0;
            if (!(w0 > 4e-3)) return;
            if (w0 > 1) w0 = 1;
            var rk0 = Math.round(sl0.r * 1e3);
            var arr0 = presIn[rk0] || (presIn[rk0] = []);
            if (!(arr0[ci] >= w0)) arr0[ci] = w0;
          });
        });
        Object.keys(presIn).forEach(function(rk0) {
          var arr0 = presIn[rk0], tot0 = 0;
          band.forEach(function(c0, ci) {
            tot0 += a.fracOf(c0) * (arr0[ci] || 0);
          });
          if (!(tot0 > 1e-9)) return;
          var acc0 = 0, sb0 = 0, seams0 = [], before0 = [], frac0 = [];
          band.forEach(function(c0, ci) {
            var p0 = arr0[ci] || 0;
            sb0 += p0;
            seams0[ci] = sb0;
            before0[ci] = acc0;
            frac0[ci] = a.fracOf(c0) * p0 / tot0;
            acc0 += frac0[ci];
          });
          rowShare[rk0] = { seams: seams0, before: before0, frac: frac0, nB: sb0 };
        });
      }
      var seamsBefore = a.groupPres[band[0].g], fracBefore = 0, prevG = null;
      band.forEach(function(c, cIdx) {
        if (prevG !== null) seamsBefore += c.g !== prevG ? a.groupPres[c.g] : a.presOf(c);
        prevG = c.g;
        var frac = a.fracOf(c);
        if (probe && lastStart && lastStart[c.g] === void 0) {
          var sProbe = seamAt(refR, nB, isInner ? "i" : "o");
          lastStart[c.g] = Math.round((sProbe.gap * seamsBefore + sProbe.avail * fracBefore) * 180 / Math.PI * 1e3) / 1e3;
        }
        var open = c.geom > 1e-6 ? c.live / c.geom : 0;
        c.bandKey = isInner ? "i" : "o";
        c.nB = nB;
        if (sBand) {
          var A0c = sBand.gap * seamsBefore + sBand.avail * fracBefore;
          c.pLead = A0c - sBand.gap;
          c.pTrail = A0c + sBand.avail * frac * open;
        } else {
          c.pLead = void 0;
          c.pTrail = void 0;
        }
        if (dbgCells) {
          dbgCells.push({
            g: c.g,
            k: c.k,
            inner: !!c.inner,
            nB,
            bandKey: c.bandKey,
            seams: seamsBefore,
            f0: fracBefore,
            f1: fracBefore + frac * open,
            pLead: c.pLead,
            pTrail: c.pTrail,
            ids: c.slots.map(function(sl) {
              return sl.id;
            })
          });
        }
        var rowN = /* @__PURE__ */ Object.create(null);
        c.slots.forEach(function(sl) {
          var w = alpha[sl.id] || 0;
          if (w > 0) rowN[sl.r] = (rowN[sl.r] || 0) + w;
        });
        var rowsUsed = 0;
        Object.keys(rowN).forEach(function(rk) {
          rowsUsed += rowN[rk] > 1 ? 1 : rowN[rk];
        });
        if (!(rowsUsed > 0)) rowsUsed = 1;
        var maxRowR = -1;
        Object.keys(rowN).forEach(function(rk) {
          if (+rk > maxRowR) maxRowR = +rk;
        });
        c.slots.forEach(function(sl) {
          if (!present(sl.id)) return;
          var rs = rowShare ? rowShare[Math.round(sl.r * 1e3)] : null;
          var sm = seamAt(sl.r * UNIT, rs ? rs.nB : nB, isInner ? "i" : "o");
          var a0, a1;
          if (c.pLead !== void 0) {
            a0 = edgeSweep(c, "lead", sl.r * UNIT);
            a1 = edgeSweep(c, "trail", sl.r * UNIT);
          } else if (rs && rs.frac[cIdx] > 0) {
            a0 = sm.gap * rs.seams[cIdx] + sm.avail * rs.before[cIdx] - sm.gap / 2;
            a1 = a0 + sm.avail * rs.frac[cIdx] * open;
          } else {
            a0 = sm.gap * seamsBefore + sm.avail * fracBefore - sm.gap / 2;
            a1 = a0 + sm.avail * frac * open;
          }
          if (probe && probe.watch === sl.id) {
            probe.watched = {
              k: c.k,
              g: c.g,
              u: Math.round(sl.u * 1e5) / 1e5,
              slotR: Math.round(sl.r),
              slots: c.slots.length,
              a0: Math.round(a0 * 1e4) / 1e4,
              a1: Math.round(a1 * 1e4) / 1e4,
              span: Math.round(c.span * 1e4) / 1e4,
              open: Math.round((c.geom > 1e-6 ? c.live / c.geom : 0) * 1e4) / 1e4,
              geom: Math.round(c.geom * 1e3) / 1e3,
              live: Math.round(c.live * 1e3) / 1e3,
              inner: !!c.inner
            };
          }
          var arc = a1 - a0;
          var rGraph = Math.max(1e-6, sl.r * UNIT);
          var bk = isInner ? "i" : "o";
          var room = bandOf(bk).room > 1 ? bandOf(bk).room : pitchUnits(bk);
          var clear = CLEAR_OF_ROOM * room * (GAP_BAND[bk] || 1);
          var radOf = function(z) {
            return DOT_OF_PITCH * room * (Math.min(z || 4, NODE_MAX) / NODE_MAX);
          };
          var nRow = rowN[sl.r] > 1e-3 ? rowN[sl.r] : 1;
          if (nRow > 1.5) {
            var ownStep = arc * rGraph / nRow;
            roomPool[isInner ? "i" : "o"].push(ownStep);
            if (cellMin[c.k] === void 0 || ownStep < cellMin[c.k]) cellMin[c.k] = ownStep;
          }
          cellOf[sl.id] = c.k;
          var seamArc = sm.gap * rGraph / 2;
          var keep = EXCESS_KEEP * seamFall(isInner ? "i" : "o");
          var typ = dotTyp(isInner ? "i" : "o");
          var side = function(z) {
            var f = (z || NODE_MAX) / NODE_MAX;
            if (f > 1) f = 1;
            else if (f < 0.15) f = 0.15;
            return (clear + DOT_OF_PITCH * room * f) / rGraph;
          };
          var mgA = side(sl.eA), mgB = side(sl.eB);
          var arcCap = arc * 0.66;
          if (mgA + mgB > arcCap) {
            var k = arcCap / (mgA + mgB);
            mgA *= k;
            mgB *= k;
          }
          var t = sweepAngle(a0 + mgA + (arc - mgA - mgB) * sl.u);
          var spanArc = arc - mgA - mgB;
          var dEdge = Math.min(mgA + spanArc * sl.u, mgB + spanArc * (1 - sl.u)) * rGraph;
          if (dEdge > 0) edgeCapNext[sl.id] = dEdge;
          var dLo = (mgA + spanArc * sl.u) * rGraph;
          var dHi = (mgB + spanArc * (1 - sl.u)) * rGraph;
          var edgeRoom = 2 * Math.min(dLo, dHi);
          if (edgeRoom > 1 && (fit2[sl.id] === void 0 || edgeRoom < fit2[sl.id])) {
            fit2[sl.id] = edgeRoom;
          }
          var prev = lastAt[sl.r];
          if (prev) {
            var step = Math.abs(t - prev.t) * rGraph;
            if (step > 1) {
              if (fit2[sl.id] === void 0 || step < fit2[sl.id]) fit2[sl.id] = step;
              if (fit2[prev.id] === void 0 || step < fit2[prev.id]) fit2[prev.id] = step;
            }
          }
          lastAt[sl.r] = { t, id: sl.id };
          if (firstAt[sl.r] === void 0) firstAt[sl.r] = { t, id: sl.id };
          var rr = sl.r + (isPushed(sl.id) ? HL_PUSH : 0);
          pos[sl.id] = { x: rr * Math.cos(t), y: rr * Math.sin(t) };
        });
        fracBefore += frac * open;
      });
      Object.keys(firstAt).forEach(function(rk) {
        var fst = firstAt[rk], lst = lastAt[rk];
        if (!fst || !lst || fst.id === lst.id) return;
        var d = fst.t - lst.t;
        while (d < 0) d += TWO;
        var step = d * Math.max(1e-6, +rk * UNIT);
        if (step > 1) {
          if (fit2[fst.id] === void 0 || step < fit2[fst.id]) fit2[fst.id] = step;
          if (fit2[lst.id] === void 0 || step < fit2[lst.id]) fit2[lst.id] = step;
        }
      });
    });
    var scale = UNIT;
    var out = {};
    graph.forEachNode(function(id) {
      var q = pos[id];
      if (q) out[id] = { x: q.x * scale, y: q.y * scale };
      else if (!strict) out[id] = {
        x: graph.getNodeAttribute(id, "x"),
        y: graph.getNodeAttribute(id, "y")
      };
    });
    var pool = roomPool;
    var planRoom = plan.room || null;
    var pick = function(v) {
      if (!v.length) return 0;
      v.sort(function(x, y) {
        return x - y;
      });
      return v[Math.floor(v.length * 0.1)];
    };
    if (!roomNow) {
      bandOf("i").room = pick(pool.i);
      bandOf("o").room = pick(pool.o);
    }
    Object.keys(cellOf).forEach(function(id) {
      var m = cellMin[cellOf[id]];
      if (m > 1) cellRoomNext[id] = m;
    });
    cellRoom = cellNow || cellRoomNext;
    edgeCap = edgeNow || edgeCapNext;
    if (planRoom) {
    }
    dotFit = fit2;
    if (dbgCells) DBG.cells = dbgCells;
    return out;
  }
  var tlRank = /* @__PURE__ */ Object.create(null), tlDate = [], tlMax = 0;
  var tlDateMs = [];
  var tlMs = /* @__PURE__ */ Object.create(null);
  var dateSpan = null;
  function buildTimeline() {
    var dated = [];
    graph.forEachNode(function(id, a) {
      if (a.created) dated.push([id, a.created]);
    });
    dated.sort(function(x, y) {
      return x[1] < y[1] ? -1 : x[1] > y[1] ? 1 : 0;
    });
    tlRank = /* @__PURE__ */ Object.create(null);
    tlDate = [];
    tlDateMs = [];
    tlMs = /* @__PURE__ */ Object.create(null);
    dated.forEach(function(pair, i) {
      tlRank[pair[0]] = i + 1;
      tlDate.push(pair[1]);
      var ms = heatParse(pair[1]);
      if (!Number.isNaN(ms)) tlMs[pair[0]] = ms;
      tlDateMs.push(ms);
    });
    tlMax = dated.length;
    buildDateSpan(dated);
  }
  function buildDateSpan(dated) {
    dateSpan = null;
    if (!dated.length) return;
    var lo = heatParse(dated[0][1]), hi = heatParse(dated[dated.length - 1][1]);
    if (Number.isNaN(lo) || Number.isNaN(hi)) return;
    var d0 = new Date(lo), d1 = new Date(hi);
    var y0 = d0.getUTCFullYear(), m0 = d0.getUTCMonth();
    var y1 = d1.getUTCFullYear(), m1 = d1.getUTCMonth();
    var months = [], index = /* @__PURE__ */ Object.create(null);
    for (var y = y0, m = m0; y < y1 || y === y1 && m <= m1; ) {
      var key = y + "-" + (m < 9 ? "0" : "") + (m + 1);
      index[key] = months.length;
      months.push({ key, y, m, ms: Date.UTC(y, m, 1), n: 0 });
      if (++m > 11) {
        m = 0;
        y++;
      }
    }
    var years = /* @__PURE__ */ Object.create(null);
    for (var i = 0; i < dated.length; i++) {
      var s = dated[i][1], k = s.slice(0, 7), ix = index[k];
      if (ix !== void 0) months[ix].n++;
      var yy = s.slice(0, 4);
      years[yy] = (years[yy] || 0) + 1;
    }
    var ylist = [];
    for (var yk = y0; yk <= y1; yk++) ylist.push({ y: yk, n: years[String(yk)] || 0 });
    var nMax = 1, tot = 0;
    months.forEach(function(mm) {
      if (mm.n > nMax) nMax = mm.n;
      tot += mm.n;
    });
    var sorted = months.map(function(mm) {
      return mm.n;
    }).sort(function(x, y2) {
      return x - y2;
    });
    var p90 = sorted.length ? sorted[Math.floor(sorted.length * 0.9)] : 1;
    var nRef = Math.max(1, p90, nMax * 0.35);
    var yMax = 1;
    ylist.forEach(function(yy2) {
      if (yy2.n > yMax) yMax = yy2.n;
    });
    dateSpan = {
      months,
      years: ylist,
      index,
      lo: months[0].ms,
      hi: Date.UTC(y1, m1 + 1, 0),
      // last day of the last month
      nMax,
      nRef,
      yMax,
      dated: tot,
      undated: graph.order - tot
    };
  }
  function rangeLabel() {
    if (!dateSpan) return "";
    var f = state.from === null ? dateSpan.lo : state.from;
    var t = state.to === null ? dateSpan.hi : state.to;
    var iso = function(ms) {
      return new Date(ms).toISOString().slice(0, 10);
    };
    return iso(f) + "  \u2192  " + iso(t);
  }
  function setRangeMs(from, to) {
    if (!dateSpan) return;
    if (from !== null && to !== null && from > to) {
      var sw = from;
      from = to;
      to = sw;
    }
    state.from = from === null || from <= dateSpan.lo ? null : from;
    state.to = to === null || to >= dateSpan.hi ? null : to;
    applyRange();
  }
  function rangeChrome() {
    var el = $("rangenote");
    if (el) el.textContent = rangeLabel();
    if (dateSpan) {
      var lo = isoDay(dateSpan.lo), hi = isoDay(dateSpan.hi);
      var f = $("from"), t = $("to");
      if (f) {
        f.min = lo;
        f.max = hi;
        f.value = isoDay(state.from === null ? dateSpan.lo : state.from);
      }
      if (t) {
        t.min = lo;
        t.max = hi;
        t.value = isoDay(state.to === null ? dateSpan.hi : state.to);
      }
    }
    var btn = $("rangeall");
    if (btn) btn.disabled = state.from === null && state.to === null;
    drawDateUI();
  }
  function applyRange() {
    rangeChrome();
    cascade();
  }
  var TODAY = function() {
    var d = /* @__PURE__ */ new Date(), p = function(n) {
      return (n < 10 ? "0" : "") + n;
    };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }();
  function isMarkedDay(id) {
    if (!state.markDay && !state.hoverDay && state.hoverYear === null) return false;
    var c = graph.getNodeAttribute(id, "created");
    if (c === state.markDay || c === state.hoverDay) return true;
    return state.hoverYear !== null && !!c && c.slice(0, 4) === state.hoverYear;
  }
  function isHighlighted(id) {
    if (isMarkedDay(id)) return true;
    var g = groupOf(id);
    if (state.highlight[g]) return true;
    if (state.hoverGroup === g) return true;
    var a = graph.getNodeAttributes(id), d = a.dirs || [];
    for (var k = 1; k <= d.length; k++) {
      var pk = pathKey(a, k);
      if (state.highlightSub[pk]) return true;
      if (state.hoverSub[pk]) return true;
    }
    return false;
  }
  function cellNoteFrac(c) {
    if (!renderer || !c || !c.ids || !c.ids.length) return null;
    var q0 = renderer.graphToViewport({ x: 0, y: 0 });
    var q1 = renderer.graphToViewport({ x: UNIT, y: 0 });
    var d0 = Math.hypot(q1.x - q0.x, q1.y - q0.y);
    var perPx = d0 > 1e-3 ? UNIT / d0 : 0;
    var lo = Infinity, hi = -Infinity;
    c.ids.forEach(function(id) {
      if ((alpha[id] || 0) < 0.5) return;
      var at = graph.getNodeAttributes(id);
      var rl = Math.hypot(at.x, at.y) / UNIT;
      if (!(rl > 1e-6)) return;
      var dd = renderer.getNodeDisplayData(id);
      if (!dd || dd.hidden) return;
      var sn = seamAt(rl * UNIT, c.nB, c.inner ? "i" : "o");
      if (!(sn.avail > 1e-9)) return;
      var f = (angleSweep(Math.atan2(at.y, at.x)) + sn.gap / 2 - sn.gap * c.seams) / sn.avail;
      var half = renderer.scaleSize(dd.size) * perPx / (rl * UNIT) / sn.avail;
      if (f - half < lo) lo = f - half;
      if (f + half > hi) hi = f + half;
    });
    return lo < hi ? { lo, hi } : null;
  }
  function wedgeEdges(rLattice) {
    var cells = DBG.cells;
    if (!cells || !cells.length) return [];
    var out = [];
    ["i", "o"].forEach(function(bk) {
      var band = cells.filter(function(c) {
        return (c.inner ? "i" : "o") === bk;
      });
      if (!band.length) return;
      var r = rLattice || (geomLock ? bk === "i" ? geomLock.r0 + (geomLock.rOuter - geomLock.r0) * INNER_FILL * 0.5 : (geomLock.rOuter + geomLock.maxR) / 2 : 1);
      var sm = seamAt(r * UNIT, band[0].nB, bk);
      var sw = function(c, which) {
        if (c.pLead !== void 0) return edgeSweep(c, which === "f0" ? "lead" : "trail", r * UNIT);
        return sm.gap * c.seams + sm.avail * c[which] - sm.gap / 2;
      };
      var runs = [];
      band.slice().sort(function(x, y) {
        return x.f0 - y.f0;
      }).forEach(function(c) {
        var last = runs[runs.length - 1];
        if (last && last.g === c.g) {
          last.b = c;
          return;
        }
        runs.push({ g: c.g, band: bk, a: c, b: c });
      });
      var noteFrac = function(run) {
        var lo = Infinity, hi = -Infinity;
        band.filter(function(c) {
          return c.g === run.g && c.f0 >= run.a.f0 && c.f1 <= run.b.f1;
        }).forEach(function(c) {
          var e = cellNoteFrac(c);
          if (!e) return;
          if (e.lo < lo) lo = e.lo;
          if (e.hi > hi) hi = e.hi;
        });
        return lo < hi ? { lo, hi } : null;
      };
      runs.forEach(function(run, i) {
        var prev = runs[(i - 1 + runs.length) % runs.length];
        var next = runs[(i + 1) % runs.length];
        var lo = sw(prev.b, "f1"), hi = sw(next.a, "f0");
        if (runs.length < 2) {
          lo = sw(run.a, "f0") - sm.gap;
          hi = sw(run.b, "f1") + sm.gap;
        } else {
          while (hi < lo) hi += 2 * Math.PI;
        }
        var deg = function(x) {
          return sweepAngle(x) * 180 / Math.PI;
        };
        var nf = noteFrac(run);
        out.push({
          g: run.g,
          band: bk,
          r,
          // The note-hugging edges, in the same fraction space as f0/f1 so the
          // drawing can put its curve through them. Null when nothing is drawn.
          nf0: nf ? nf.lo : null,
          nf1: nf ? nf.hi : null,
          nStart: nf ? deg(sw({ seams: run.a.seams, f0: nf.lo }, "f0")) : null,
          nEnd: nf ? deg(sw({ seams: run.a.seams, f0: nf.hi }, "f0")) : null,
          // The raw terms too: a swing in `start` is either the seam count or the
          // fraction before it, and the sum alone cannot say which.
          seams: run.a.seams,
          f0: run.a.f0,
          f1: run.b.f1,
          gap: sm.gap * 180 / Math.PI,
          avail: sm.avail * 180 / Math.PI,
          start: deg(sw(run.a, "f0")),
          end: deg(sw(run.b, "f1")),
          arc: (sw(run.b, "f1") - sw(run.a, "f0")) * 180 / Math.PI,
          centre: deg((lo + hi) / 2)
        });
      });
    });
    return out;
  }
  function drawWedgeDebug() {
    var cv = DBG.canvas;
    if (!cv) return;
    if (!DBG.on || !renderer || !geomLock) {
      cv.hidden = true;
      return;
    }
    cv.hidden = false;
    var host = $("graph");
    var w = host.clientWidth, h = host.clientHeight, dpr = WIN.devicePixelRatio || 1;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = w + "px";
      cv.style.height = h + "px";
    }
    var g2 = cv.getContext("2d");
    g2.setTransform(dpr, 0, 0, dpr, 0, 0);
    g2.clearRect(0, 0, w, h);
    var perPx = function() {
      var a0 = renderer.graphToViewport({ x: 0, y: 0 });
      var b0 = renderer.graphToViewport({ x: UNIT, y: 0 });
      var d0 = Math.hypot(b0.x - a0.x, b0.y - a0.y);
      return d0 > 1e-3 ? UNIT / d0 : 0;
    }();
    var seen = { i: null, o: null };
    graph.forEachNode(function(id, a) {
      if ((alpha[id] || 0) < 0.5 || isOrphan(id)) return;
      var dd = renderer.getNodeDisplayData(id);
      if (!dd || dd.hidden) return;
      var rl = Math.hypot(a.x, a.y) / UNIT;
      var dot = renderer.scaleSize(dd.size) * perPx / UNIT;
      var k = bandLock && bandLock[groupOf(id)] ? "i" : "o";
      var bb = seen[k] || (seen[k] = { lo: Infinity, hi: -Infinity });
      if (rl - dot < bb.lo) bb.lo = rl - dot;
      if (rl + dot > bb.hi) bb.hi = rl + dot;
    });
    var thickI = (geomLock.rOuter - geomLock.r0) * INNER_FILL;
    var bandR = { i: [geomLock.r0, geomLock.r0 + thickI], o: [geomLock.rOuter, geomLock.maxR] };
    ["i", "o"].forEach(function(k) {
      if (seen[k] && seen[k].lo < seen[k].hi) bandR[k] = [seen[k].lo, seen[k].hi];
    });
    var vp = function(rl, ang) {
      return renderer.graphToViewport({ x: rl * UNIT * Math.cos(ang), y: rl * UNIT * Math.sin(ang) });
    };
    var tint = function(g0, a) {
      return { c: colorOf(g0), a };
    };
    g2.lineWidth = 1;
    g2.strokeStyle = SEAM_YELLOW_45;
    g2.lineWidth = 2;
    g2.setLineDash([4, 4]);
    [bandR.i[0], bandR.i[1], bandR.o[0], bandR.o[1]].forEach(function(rl) {
      g2.beginPath();
      for (var i = 0; i <= 96; i++) {
        var q = vp(rl, i / 96 * 2 * Math.PI);
        if (i) g2.lineTo(q.x, q.y);
        else g2.moveTo(q.x, q.y);
      }
      g2.stroke();
    });
    g2.setLineDash([]);
    var cells = DBG.cells || [];
    ["i", "o"].forEach(function(bk) {
      var band = cells.filter(function(c) {
        return (c.inner ? "i" : "o") === bk;
      });
      if (!band.length) return;
      var lo = bandR[bk][0], hi = bandR[bk][1];
      var rMid = (lo + hi) / 2, loG = lo * UNIT, hiG = hi * UNIT;
      var fracOf = function(c, which) {
        var e = cellNoteFrac(c);
        return e ? which === "f0" ? e.lo : e.hi : c[which];
      };
      var angAt = function(c, which, rl) {
        var sm = seamAt(rl * UNIT, c.nB, c.inner ? "i" : "o");
        return sweepAngle(sm.gap * c.seams + sm.avail * fracOf(c, which) - sm.gap / 2);
      };
      var inkOf = function(c) {
        var out = [];
        var q0 = renderer.graphToViewport({ x: 0, y: 0 });
        var q1 = renderer.graphToViewport({ x: UNIT, y: 0 });
        var d0 = Math.hypot(q1.x - q0.x, q1.y - q0.y);
        var perPx2 = d0 > 1e-3 ? UNIT / d0 : 0;
        (c.ids || []).forEach(function(id) {
          if ((alpha[id] || 0) < 0.5) return;
          var dd = renderer.getNodeDisplayData(id);
          if (!dd || dd.hidden) return;
          var at = graph.getNodeAttributes(id);
          out.push({ x: at.x, y: at.y, rad: renderer.scaleSize(dd.size) * perPx2 });
        });
        return out;
      };
      (function() {
        var runs = [];
        band.slice().sort(function(x, y) {
          return x.f0 - y.f0;
        }).forEach(function(c0) {
          var last = runs[runs.length - 1];
          if (last && last.g === c0.g) {
            last.cells.push(c0);
            return;
          }
          runs.push({ g: c0.g, cells: [c0] });
        });
        runs.forEach(function(run) {
          var a0c = run.cells[0], b0c = run.cells[run.cells.length - 1];
          var fMid = (a0c.f0 + b0c.f1) / 2;
          var host0 = a0c;
          run.cells.forEach(function(c0) {
            if (c0.f0 <= fMid && fMid <= c0.f1) host0 = c0;
          });
          var mid = function(rl) {
            if (a0c.pLead !== void 0) {
              return sweepAngle((edgeSweep(a0c, "lead", rl * UNIT) + edgeSweep(b0c, "trail", rl * UNIT)) / 2);
            }
            var sm0 = seamAt(rl * UNIT, host0.nB, host0.inner ? "i" : "o");
            return sweepAngle(sm0.gap * host0.seams + sm0.avail * fMid - sm0.gap / 2);
          };
          var pts = [];
          for (var qq = 0; qq <= 24; qq++) {
            var rq = lo + (hi - lo) * qq / 24;
            pts.push(vp(rq, mid(rq)));
          }
          g2.strokeStyle = "#fff";
          g2.globalAlpha = 0.6;
          g2.lineWidth = 2;
          g2.setLineDash([5, 5]);
          g2.beginPath();
          pts.forEach(function(pt, qq2) {
            if (qq2) g2.lineTo(pt.x, pt.y);
            else g2.moveTo(pt.x, pt.y);
          });
          g2.stroke();
          g2.setLineDash([]);
          g2.globalAlpha = 1;
        });
      })();
      var sorted = band.slice().sort(function(x, y) {
        return x.f0 - y.f0;
      });
      sorted.forEach(function(c, i) {
        var next = sorted[(i + 1) % sorted.length];
        if (next === c) return;
        var angOf = function(cell, which, rl) {
          if (cell.pLead !== void 0) {
            return edgeSweep(cell, which === "f0" ? "lead" : "trail", rl * UNIT);
          }
          var sm0 = seamAt(rl * UNIT, cell.nB, cell.inner ? "i" : "o");
          return sm0.gap * cell.seams + sm0.avail * cell[which] - sm0.gap / 2;
        };
        var chord = function(fn, style, width, dash, tag, rFrom) {
          if (DBG.trace) DBG.trace.push({
            tag: tag || "?",
            c: c.k,
            next: next.k,
            deg: sweepAngle(fn(DBG.traceR)) * 180 / Math.PI
          });
          g2.strokeStyle = style.c;
          g2.globalAlpha = style.a;
          g2.lineWidth = width;
          if (dash) g2.setLineDash(dash);
          var r0c = rFrom !== void 0 ? rFrom : lo;
          g2.beginPath();
          for (var q = 0; q <= 48; q++) {
            var rl = r0c + (hi - r0c) * q / 48;
            var pt = vp(rl, sweepAngle(fn(rl)));
            if (q) g2.lineTo(pt.x, pt.y);
            else g2.moveTo(pt.x, pt.y);
          }
          g2.stroke();
          if (dash) g2.setLineDash([]);
          g2.globalAlpha = 1;
        };
        var sweepA = function(rl) {
          return angOf(c, "f1", rl);
        };
        var sweepB = function(rl) {
          var a = angOf(next, "f0", rl), b = sweepA(rl);
          while (a < b) a += 2 * Math.PI;
          while (a - b > Math.PI) a -= 2 * Math.PI;
          return a;
        };
        var groupBoundary = c.g !== next.g;
        (function() {
          var mid = function(rl) {
            return sweepAngle((sweepA(rl) + sweepB(rl)) / 2);
          };
          var pOut = { x: hi * UNIT * Math.cos(mid(hi)), y: hi * UNIT * Math.sin(mid(hi)) };
          var pIn = { x: lo * UNIT * Math.cos(mid(lo)), y: lo * UNIT * Math.sin(mid(lo)) };
          var dx = pIn.x - pOut.x, dy = pIn.y - pOut.y, L = Math.hypot(dx, dy);
          if (!(L > 1e-6)) return;
          var reach = Math.hypot(pIn.x, pIn.y);
          var pEnd = { x: pIn.x + dx / L * reach, y: pIn.y + dy / L * reach };
          var q0 = renderer.graphToViewport(pOut), q1 = renderer.graphToViewport(pEnd);
          g2.strokeStyle = SEAM_YELLOW;
          g2.globalAlpha = groupBoundary ? 0.75 : 0.45;
          g2.lineWidth = 2;
          g2.setLineDash([3, 4]);
          g2.beginPath();
          g2.moveTo(q0.x, q0.y);
          g2.lineTo(q1.x, q1.y);
          g2.stroke();
          g2.setLineDash([]);
          g2.globalAlpha = 1;
        })();
        chord(
          sweepA,
          tint(c.g, groupBoundary ? 0.9 : 0.35),
          groupBoundary ? 3 : 2,
          null,
          c.g + " trailing"
        );
        chord(
          sweepB,
          tint(next.g, groupBoundary ? 0.9 : 0.35),
          groupBoundary ? 3 : 2,
          null,
          next.g + " leading"
        );
      });
    });
    drawWedgeLegend(g2);
  }
  function drawWedgeLegend(g2) {
    var rows = [
      ["solid, folder colour", "wedge edge"],
      ["dashed white", "wedge centre"],
      ["dotted yellow", "seam centre"],
      ["dashed yellow", "band radius"]
    ];
    var pad = 8, lh = 16, sw = 34, x = 12, y = 12;
    g2.font = "11px ui-monospace, monospace";
    g2.textBaseline = "middle";
    var wide = 0;
    rows.forEach(function(r) {
      wide = Math.max(wide, g2.measureText(r[1]).width);
    });
    var w = sw + 8 + wide + pad * 2, h = lh * (rows.length + 1) + pad * 2;
    g2.globalAlpha = 0.72;
    g2.fillStyle = "#000";
    g2.fillRect(x, y, w, h);
    g2.globalAlpha = 1;
    rows.forEach(function(r, i) {
      var yy = y + pad + lh * i + lh / 2;
      g2.strokeStyle = i === 0 ? "#e66767" : i === 1 ? "#fff" : SEAM_YELLOW;
      g2.globalAlpha = i === 0 ? 0.9 : i === 1 ? 0.5 : i === 2 ? 0.75 : 0.45;
      g2.lineWidth = i === 0 ? 1.5 : 1;
      g2.setLineDash(i === 0 ? [] : i === 1 ? [5, 5] : i === 2 ? [3, 4] : [4, 4]);
      g2.beginPath();
      g2.moveTo(x + pad, yy);
      g2.lineTo(x + pad + sw, yy);
      g2.stroke();
      g2.setLineDash([]);
      g2.globalAlpha = 0.85;
      g2.fillStyle = "#fff";
      g2.fillText(r[1], x + pad + sw + 8, yy);
    });
    g2.globalAlpha = 0.55;
    g2.fillStyle = "#fff";
    g2.fillText(
      "built " + (DATA && DATA.generated ? DATA.generated : "?"),
      x + pad,
      y + pad + lh * rows.length + lh / 2
    );
    g2.globalAlpha = 1;
  }
  function wedgeDebug(v) {
    DBG.on = !!v;
    if (DBG.on && !DBG.canvas) {
      var host = $("graph");
      if (host) {
        var cv = DOC.createElement("canvas");
        cv.className = "vg-wedge-debug";
        host.appendChild(cv);
        DBG.canvas = cv;
      }
    }
    if (!DBG.on) {
      DBG.cells = null;
      if (DBG.canvas) DBG.canvas.hidden = true;
    }
    if (renderer) renderer.refresh({ skipIndexation: true });
    return DBG.on;
  }
  function hoverHighlight(group, keys) {
    group = group || null;
    var next = /* @__PURE__ */ Object.create(null);
    (keys || []).forEach(function(k) {
      if (k) next[k] = true;
    });
    var a = Object.keys(state.hoverSub).sort().join(","), b = Object.keys(next).sort().join(",");
    if (state.hoverGroup === group && a === b) return;
    state.hoverGroup = group;
    state.hoverSub = next;
    if (renderer) renderer.refresh();
  }
  function ownsWedge(folder, sub) {
    var subs = subOrder[folder] || [];
    var k = subs.indexOf(sub || "");
    if (k < 0) return false;
    return k < SUB_NAMED || subs.length === SUB_NAMED + 1;
  }
  function isPushed(id) {
    if (state.highlight[groupOf(id)]) return true;
    var a = graph.getNodeAttributes(id);
    return !!state.highlightSub[pathKey(a, 1)] && ownsWedge(a.folder, a.sub || "");
  }
  function willShow(id) {
    return visible(id) && timeFactor(id) > 4e-3;
  }
  var TL_FADE = 8;
  function timeFactor(id) {
    if (state.from !== null || state.to !== null) {
      var ms = tlMs[id];
      if (ms !== void 0) {
        if (state.from !== null && ms < state.from) return 0;
        if (state.to !== null && ms > state.to) return 0;
      }
    }
    if (state.until === null) return 1;
    var rk = tlRank[id];
    if (!rk) return 1;
    var f = (state.until - rk + 1) / TL_FADE;
    return f <= 0 ? 0 : f >= 1 ? 1 : f;
  }
  var alpha = /* @__PURE__ */ Object.create(null);
  function present(id) {
    return (alpha[id] || 0) > 4e-3;
  }
  function syncAlpha() {
    graph.forEachNode(function(id) {
      alpha[id] = visible(id) ? timeFactor(id) : 0;
    });
  }
  function clearAlpha() {
    graph.forEachNode(function(id) {
      alpha[id] = 0;
    });
  }
  var rgbCache = /* @__PURE__ */ Object.create(null);
  function toRgb(hex) {
    var c = rgbCache[hex];
    if (c) return c;
    var h = String(hex).trim();
    if (h.charAt(0) === "#") {
      if (h.length === 4) h = "#" + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2) + h.charAt(3) + h.charAt(3);
      c = [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    } else {
      var m = /(\d+)\D+(\d+)\D+(\d+)/.exec(h);
      c = m ? [+m[1], +m[2], +m[3]] : [128, 128, 128];
    }
    return rgbCache[hex] = c;
  }
  function withAlpha(color, a) {
    if (a >= 0.999) return color;
    var c = toRgb(color);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a.toFixed(3) + ")";
  }
  var FADE_FRAMES = 12;
  var RADIAL_EASE = 0.25;
  var SPREAD_MAX = 78;
  var SPREAD_PER = 0.17;
  var SPREAD_MIN = 24;
  var TIME_SCALE = 1.25;
  var TIMELINE_MS = 4500;
  var CASCADE_MS = 1600;
  var TWEEN_MS = 380;
  var NOW = function() {
    return (window.performance || Date).now();
  };
  var fullRing = false;
  var planKeep = null;
  var cascadeRun = null;
  var pinnedPlan = null;
  var planMs = 0;
  var lastGapN = { i: 0, o: 0 };
  var lastStart = null;
  var lastArc = null;
  var lastBand = null;
  var lastMaxR = 0;
  var dotFit = /* @__PURE__ */ Object.create(null);
  var lastMinArc = 0;
  var roomNow = null;
  var colWalk = null;
  var posSrc = null, posDst = null;
  var cellRoom = /* @__PURE__ */ Object.create(null);
  var cellNow = null;
  var edgeNow = null;
  var edgeCap = /* @__PURE__ */ Object.create(null);
  var lastCascade = { ins: 0, outs: 0, span: 0, path: "none", frames: 0, ms: 0 };
  function pinPlan() {
    var t0 = (window.performance || Date).now();
    var keep = planKeep || visible;
    var shownCount = 0;
    graph.forEachNode(function(id) {
      if (keep(id)) shownCount++;
    });
    pinnedPlan = buildWedgePlan(true);
    planMs = (window.performance || Date).now() - t0;
    return pinnedPlan;
  }
  function cascade(done, opts) {
    opts = opts || {};
    stopPlay();
    if (anim) {
      WIN.cancelAnimationFrame(anim);
      anim = null;
    }
    if (animGuard) {
      WIN.clearTimeout(animGuard);
      animGuard = null;
    }
    if (cascadeRun) {
      WIN.cancelAnimationFrame(cascadeRun.raf);
      WIN.clearTimeout(cascadeRun.guard);
      cascadeRun = null;
    }
    fullRing = false;
    graph.forEachNode(function(id) {
      if (present(id)) fullRing = true;
    });
    if (opts.fullRing !== void 0) fullRing = !!opts.fullRing;
    planKeep = function(id) {
      return willShow(id) || present(id);
    };
    var plan = pinPlan();
    colWalk = null;
    var keep = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      keep[id] = alpha[id] || 0;
      alpha[id] = visible(id) ? timeFactor(id) : 0;
    });
    var pinWas = pinnedPlan, keepWas = planKeep, roomWas = roomNow;
    pinnedPlan = null;
    planKeep = null;
    roomNow = null;
    cellNow = null;
    edgeNow = null;
    colWalk = null;
    ringsLayout();
    var finalPos = ringsLayout() || {};
    pinnedPlan = pinWas;
    planKeep = keepWas;
    roomNow = roomWas;
    graph.forEachNode(function(id) {
      alpha[id] = keep[id];
    });
    var sweepOf = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      var q = finalPos[id];
      sweepOf[id] = q ? angleSweep(Math.atan2(q.y, q.x)) : 0;
    });
    var ins = [], outs = [], to = /* @__PURE__ */ Object.create(null), from = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      var want = visible(id) ? timeFactor(id) : 0;
      var now = alpha[id] || 0;
      if (Math.abs(now - want) <= 4e-3) return;
      to[id] = want;
      from[id] = now;
      (want ? ins : outs).push(id);
    });
    if (!ins.length && !outs.length) {
      lastCascade = { ins: 0, outs: 0, span: 0, path: "instant: nothing to move", frames: 0, ms: 0 };
      pinnedPlan = null;
      roomNow = null;
      cellNow = null;
      edgeNow = null;
      posSrc = posDst = null;
      applyLayout(true);
      return;
    }
    var clockwise = function(a, b) {
      return sweepOf[a] - sweepOf[b];
    };
    var rank = typeof opts.order === "function" ? opts.order : null;
    var arrival = rank ? function(a, b) {
      return rank(a) - rank(b);
    } : clockwise;
    ins.sort(arrival);
    outs.sort(arrival);
    var windowFor = function(n) {
      if (opts.spread > 0) return opts.spread;
      return Math.max(SPREAD_MIN, Math.min(SPREAD_MAX, n * SPREAD_PER)) * TIME_SCALE;
    };
    var delay = /* @__PURE__ */ Object.create(null);
    [ins, outs].forEach(function(set) {
      var w = windowFor(set.length);
      set.forEach(function(id, i) {
        delay[id] = set.length < 2 ? 0 : w * i / (set.length - 1);
      });
    });
    var span = Math.max(windowFor(ins.length), windowFor(outs.length)) + FADE_FRAMES * TIME_SCALE;
    var tglDir = /* @__PURE__ */ Object.create(null), tglN = /* @__PURE__ */ Object.create(null);
    if (opts.colToggle) (function() {
      var startN = /* @__PURE__ */ Object.create(null), outN = /* @__PURE__ */ Object.create(null), inN = /* @__PURE__ */ Object.create(null);
      graph.forEachNode(function(id) {
        if ((alpha[id] || 0) > 4e-3) {
          var g0 = groupOf(id);
          startN[g0] = (startN[g0] || 0) + 1;
        }
      });
      outs.forEach(function(id) {
        var g0 = groupOf(id);
        outN[g0] = (outN[g0] || 0) + 1;
      });
      ins.forEach(function(id) {
        var g0 = groupOf(id);
        inN[g0] = (inN[g0] || 0) + 1;
      });
      Object.keys(outN).forEach(function(g0) {
        if (!inN[g0] && outN[g0] === (startN[g0] || 0)) {
          tglDir[g0] = "out";
          tglN[g0] = outN[g0];
        }
      });
      Object.keys(inN).forEach(function(g0) {
        if (!outN[g0] && !(startN[g0] || 0)) {
          tglDir[g0] = "in";
          tglN[g0] = inN[g0];
        }
      });
    })();
    var moving = ins.concat(outs);
    lastCascade = {
      ins: ins.length,
      outs: outs.length,
      span: Math.round(span * 100) / 100,
      path: "animated",
      frames: 0,
      ms: 0,
      t0: NOW()
    };
    var settle = function() {
      if (!lastCascade.exit) lastCascade.exit = "settle() called from outside the loop";
      if (cascadeRun) {
        WIN.cancelAnimationFrame(cascadeRun.raf);
        WIN.clearTimeout(cascadeRun.guard);
        cascadeRun = null;
      }
      probeSample("pre-settle");
      moving.forEach(function(id) {
        alpha[id] = to[id];
      });
      pinnedPlan = null;
      planKeep = null;
      roomNow = null;
      cellNow = null;
      edgeNow = null;
      posSrc = posDst = null;
      colWalk = null;
      assignPositions(finalPos);
      renderer.refresh({ skipIndexation: false });
      probeSample("settled");
      if (done) done();
    };
    var weightOf = function(id) {
      return alpha[id] || 0;
    };
    var wasPresent = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      wasPresent[id] = present(id);
    });
    var shownAfter = 0;
    graph.forEachNode(function(id) {
      if (willShow(id)) shownAfter++;
    });
    var ovAfter = true;
    var spSrc = 1, spDst = 1;
    var spSrcB = { i: 1, o: 1 }, spDstB = { i: 1, o: 1 };
    var roomSrcB = { i: 0, o: 0 }, roomDstB = { i: 0, o: 0 };
    var cellSrc = null, cellDst = null;
    var edgeSrc = null, edgeDst = null;
    var rowsSrc = /* @__PURE__ */ Object.create(null), rowsDst = /* @__PURE__ */ Object.create(null);
    var bandSrc = /* @__PURE__ */ Object.create(null), bandDst = /* @__PURE__ */ Object.create(null);
    var staticPlan = function(presentFn) {
      var save = planKeep;
      planKeep = presentFn;
      var shown = 0;
      graph.forEachNode(function(id) {
        if (presentFn(id)) shown++;
      });
      var p = buildWedgePlan(
        true,
        function(id) {
          return presentFn(id) ? 1 : 0;
        }
      );
      planKeep = save;
      return p;
    };
    (function() {
      var a = staticPlan(function(id) {
        return wasPresent[id];
      });
      var cellsOfG = function(p0) {
        var m = /* @__PURE__ */ Object.create(null);
        if (p0) p0.cells.forEach(function(c) {
          m[c.g] = (m[c.g] || 0) + 1;
        });
        return m;
      };
      var b = staticPlan(function(id) {
        return willShow(id);
      });
      var aCells = cellsOfG(a), bCells = cellsOfG(b);
      Object.keys(tglDir).forEach(function(g0) {
        var n0 = tglDir[g0] === "out" ? aCells[g0] : bCells[g0];
        if (n0 !== 1) delete tglDir[g0];
      });
      var deepen = function(m, c) {
        var k = c.inner ? "i" : "o";
        if (m[k] === void 0 || c.rows > m[k]) m[k] = c.rows;
      };
      var record = function(rows, band) {
        return function(c) {
          if (c.wsum <= 1e-4) return;
          rows[c.k] = c.rows;
          deepen(band, c);
        };
      };
      if (a) a.cells.forEach(record(rowsSrc, bandSrc));
      if (b) b.cells.forEach(record(rowsDst, bandDst));
      ["i", "o"].forEach(function(k) {
        if (bandSrc[k] === void 0 && bandDst[k] !== void 0) bandSrc[k] = 1;
      });
      if (a && a.sp > 0) spSrc = a.sp;
      if (b && b.sp > 0) spDst = b.sp;
      if (a) {
        spSrcB = { i: a.spInner || a.sp || 1, o: a.sp || 1 };
      }
      if (b) {
        spDstB = { i: b.spInner || b.sp || 1, o: b.sp || 1 };
      }
      var roomOf = function(pl, alphaFn) {
        if (!pl) return null;
        var outPos = null;
        var keepAlpha = null;
        if (alphaFn) {
          keepAlpha = /* @__PURE__ */ Object.create(null);
          graph.forEachNode(function(id) {
            keepAlpha[id] = alpha[id];
            alpha[id] = alphaFn(id);
          });
        }
        var keepI = bandOf("i").room, keepO = bandOf("o").room;
        var keepFit = dotFit, keepCell = cellRoom, keepEdge = edgeCap;
        var keepPin = pinnedPlan, keepKeep = planKeep;
        var saved = roomNow, savedCell = cellNow, savedEdge = edgeNow;
        roomNow = null;
        cellNow = null;
        edgeNow = null;
        edgeNow = null;
        outPos = ringsLayout(pl, true);
        var got = {
          i: bandOf("i").room,
          o: bandOf("o").room,
          pos: outPos,
          cells: cellRoom,
          edges: edgeCap
        };
        roomNow = saved;
        cellNow = savedCell;
        edgeNow = savedEdge;
        bandOf("i").room = keepI;
        bandOf("o").room = keepO;
        dotFit = keepFit;
        cellRoom = keepCell;
        edgeCap = keepEdge;
        pinnedPlan = keepPin;
        planKeep = keepKeep;
        if (keepAlpha) graph.forEachNode(function(id) {
          alpha[id] = keepAlpha[id];
        });
        return got;
      };
      var rA = roomOf(a, null);
      var rB = roomOf(b, function(id) {
        return willShow(id) ? timeFactor(id) : 0;
      });
      if (rA) roomSrcB = { i: rA.i || 0, o: rA.o || 0 };
      if (rB) roomDstB = { i: rB.i || 0, o: rB.o || 0 };
      cellSrc = rA && rA.cells || null;
      cellDst = rB && rB.cells || null;
      edgeSrc = rA && rA.edges || null;
      edgeDst = rB && rB.edges || null;
      posSrc = /* @__PURE__ */ Object.create(null);
      graph.forEachNode(function(id) {
        posSrc[id] = { x: graph.getNodeAttribute(id, "x"), y: graph.getNodeAttribute(id, "y") };
      });
      posDst = finalPos;
    })();
    var STALL_MS = 400;
    var watchdog = function() {
      if (cascadeRun && NOW() - cascadeRun.tick < STALL_MS) {
        cascadeRun.guard = WIN.setTimeout(watchdog, STALL_MS);
        return;
      }
      settle();
    };
    var msPerFrame = (opts.totalMs > 0 ? opts.totalMs : CASCADE_MS * TIME_SCALE) / Math.max(1, span);
    var MIN_FRAMES = 20;
    var maxAdv = Math.max(1, span) / MIN_FRAMES;
    var frame = 0, tPrev = NOW(), tailFrames = 0;
    cascadeRun = { raf: 0, tick: NOW(), guard: WIN.setTimeout(watchdog, STALL_MS) };
    (function step() {
      var tn = NOW();
      var adv = (tn - tPrev) / msPerFrame;
      tPrev = tn;
      if (adv > maxAdv) adv = maxAdv;
      frame += adv;
      if (cascadeRun) cascadeRun.tick = tn;
      var busy = false;
      for (var i = 0; i < moving.length; i++) {
        var id = moving[i];
        var q = (frame - delay[id]) / (FADE_FRAMES * TIME_SCALE);
        q = q < 0 ? 0 : q > 1 ? 1 : q;
        alpha[id] = from[id] + (to[id] - from[id]) * (q * q * (3 - 2 * q));
        if (q < 1) busy = true;
      }
      var pr = Math.min(1, frame / Math.max(1, span));
      var ease = pr * pr * (3 - 2 * pr);
      if (opts.onFrame) opts.onFrame(pr);
      (function() {
        var stretch = Math.max(1, span - FADE_FRAMES * TIME_SCALE);
        Object.keys(tglDir).forEach(function(g0) {
          var set = (tglDir[g0] === "out" ? outs : ins).filter(function(id2) {
            return groupOf(id2) === g0;
          });
          if (!set.length) return;
          set.sort(function(p, q2) {
            var ap = graph.getNodeAttributes(p), aq = graph.getNodeAttributes(q2);
            var d = Math.hypot(ap.x, ap.y) - Math.hypot(aq.x, aq.y);
            return tglDir[g0] === "out" ? d : -d;
          });
          if (tglDir[g0] === "out") {
            set.forEach(function(id2, i2) {
              delay[id2] = set.length < 2 ? stretch : stretch * i2 / (set.length - 1);
            });
          } else {
            var base0 = set.map(function(id2) {
              return delay[id2] || 0;
            }).sort(function(x, y) {
              return x - y;
            });
            set.forEach(function(id2, i2) {
              delay[id2] = base0[i2];
            });
          }
        });
      })();
      var rowsAt = function(c) {
        var s = rowsSrc[c.k], d = rowsDst[c.k];
        if (s === void 0 && d === void 0) return 0;
        var bk = c.inner ? "i" : "o";
        if (s === void 0) s = bandSrc[bk] !== void 0 ? bandSrc[bk] : d;
        if (d === void 0) d = bandDst[bk] !== void 0 ? bandDst[bk] : s;
        return s + (d - s) * ease;
      };
      var roomWalk = function(k) {
        var sv = roomSrcB[k], dv = roomDstB[k];
        if (!(sv > 1)) return dv;
        if (!(dv > 1)) return sv;
        return sv + (dv - sv) * ease;
      };
      var depthWalk = function(k) {
        var a2 = bandSrc[k], b2 = bandDst[k];
        if (a2 === void 0 && b2 === void 0) return 0;
        if (a2 === void 0) a2 = b2;
        if (b2 === void 0) b2 = a2;
        return a2 + (b2 - a2) * ease;
      };
      var spNow = {
        i: spSrcB.i + (spDstB.i - spSrcB.i) * ease,
        o: spSrcB.o + (spDstB.o - spSrcB.o) * ease,
        depth: { i: depthWalk("i"), o: depthWalk("o") }
      };
      roomNow = { i: roomWalk("i"), o: roomWalk("o") };
      colWalk = /* @__PURE__ */ Object.create(null);
      Object.keys(tglDir).forEach(function(g0) {
        colWalk[g0] = { f: tglDir[g0] === "out" ? 1 - pr : pr, n: tglN[g0] || 1 };
      });
      if (cellSrc || cellDst) {
        var cn = /* @__PURE__ */ Object.create(null);
        var put = function(id2) {
          if (cn[id2] !== void 0) return;
          var a0 = cellSrc ? cellSrc[id2] : void 0, b0 = cellDst ? cellDst[id2] : void 0;
          if (a0 === void 0 && b0 === void 0) return;
          if (a0 === void 0) a0 = b0;
          if (b0 === void 0) b0 = a0;
          cn[id2] = a0 + (b0 - a0) * ease;
        };
        if (cellSrc) Object.keys(cellSrc).forEach(put);
        if (cellDst) Object.keys(cellDst).forEach(put);
        cellNow = cn;
      }
      if (edgeSrc || edgeDst) {
        var en = /* @__PURE__ */ Object.create(null);
        var putE = function(id2) {
          if (en[id2] !== void 0) return;
          var a1 = edgeSrc ? edgeSrc[id2] : void 0, b1 = edgeDst ? edgeDst[id2] : void 0;
          if (a1 === void 0 && b1 === void 0) return;
          if (a1 === void 0) a1 = b1;
          if (b1 === void 0) b1 = a1;
          en[id2] = a1 + (b1 - a1) * ease;
        };
        if (edgeSrc) Object.keys(edgeSrc).forEach(putE);
        if (edgeDst) Object.keys(edgeDst).forEach(putE);
        edgeNow = en;
      }
      var plan2 = buildWedgePlan(ovAfter, weightOf, rowsAt, spNow);
      var targets = plan2 ? ringsLayout(plan2, true) : null;
      var ez = pr < 1 ? RADIAL_EASE : Math.min(1, RADIAL_EASE + tailFrames * 0.15);
      var resid = 0;
      if (targets) graph.forEachNode(function(id2) {
        var q2 = targets[id2];
        if (!q2) return;
        var x = graph.getNodeAttribute(id2, "x"), y = graph.getNodeAttribute(id2, "y");
        var h = Math.atan2(q2.y, q2.x);
        var rNow = Math.hypot(x, y), rWant = Math.hypot(q2.x, q2.y);
        var gap = rWant - rNow;
        if (gap < 0 ? -gap > resid : gap > resid) resid = gap < 0 ? -gap : gap;
        var r = rNow + gap * ez;
        graph.mergeNodeAttributes(id2, { x: r * Math.cos(h), y: r * Math.sin(h) });
      });
      if (pr >= 1) tailFrames++;
      probeSample("cascade");
      lastCascade.frames++;
      lastCascade.ms = Math.round(NOW() - lastCascade.t0);
      renderer.refresh({ skipIndexation: true });
      if (probe) lastCascade.last = {
        adv: Math.round(adv * 1e3) / 1e3,
        frame: Math.round(frame * 100) / 100,
        span: Math.round(span * 100) / 100,
        pr: Math.round(pr * 1e3) / 1e3,
        busy,
        resid: Math.round(resid * 100) / 100,
        msPerFrame: Math.round(msPerFrame * 1e3) / 1e3,
        moving: moving.length,
        run: !!cascadeRun
      };
      if (busy || pr < 1 || resid > 0.5) cascadeRun.raf = WIN.requestAnimationFrame(step);
      else {
        lastCascade.exit = "converged";
        settle();
      }
    })();
  }
  var probe = null;
  function probeSample(tag) {
    if (!probe) return;
    var iMin = Infinity, iMax = 0, oMin = Infinity, oMax = 0, iN = 0, oN = 0;
    var prev = probe.prevAng, now = /* @__PURE__ */ Object.create(null);
    var prevR = probe.prevR, nowR = /* @__PURE__ */ Object.create(null);
    var tanStep = 0, tanId = null, tanOver = 0, tanSum = 0, tanN = 0;
    var radStep = 0, radId = null, radSum = 0, radN = 0;
    graph.forEachNode(function(id, a) {
      var r = Math.hypot(a.x, a.y);
      if (present(id)) {
        var th = Math.atan2(a.y, a.x);
        now[id] = th;
        nowR[id] = r;
        if (prevR && prevR[id] !== void 0) {
          var dr = Math.abs(r - prevR[id]);
          if (dr > radStep) {
            radStep = dr;
            radId = id;
          }
          radSum += dr;
          radN++;
        }
        if (prev && prev[id] !== void 0) {
          var d = th - prev[id];
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d < -Math.PI) d += 2 * Math.PI;
          var moved = Math.abs(d) * r;
          if (moved > tanStep) {
            tanStep = moved;
            tanId = id;
          }
          if (moved > 160) tanOver++;
          tanSum += moved;
          tanN++;
        }
      }
      if (probe.set && !probe.set[id]) return;
      if (bandLock && bandLock[groupOf(id)]) {
        iN++;
        if (r < iMin) iMin = r;
        if (r > iMax) iMax = r;
      } else {
        oN++;
        if (r < oMin) oMin = r;
        if (r > oMax) oMax = r;
      }
    });
    probe.prevAng = now;
    probe.prevR = nowR;
    if (probe.watch) probe.watchSeries.push(probe.watched || null);
    probe.samples.push({
      tag,
      ms: Math.round(NOW() - probe.t0),
      gapI: lastGapN.i,
      gapO: lastGapN.o,
      ngI: bandOf("i").nG,
      ngO: bandOf("o").nG,
      gapDegI: bandOf("i").gapDeg,
      gapDegO: bandOf("o").gapDeg,
      radStep: Math.round(radStep),
      radId,
      radMean: Math.round(radN ? radSum / radN : 0),
      tanStep: Math.round(tanStep),
      tanId,
      tanOver,
      tanMean: Math.round(tanN ? tanSum / tanN : 0),
      // Where each group's wedge STARTS. "The gap jumped" is precisely this series
      // moving in a step rather than a ramp, and it is what a person sees: every
      // wedge boundary shifting round the disc at once.
      starts: lastStart,
      arcs: lastArc,
      bands: lastBand,
      innerN: iN,
      innerMin: Math.round(iMin === Infinity ? 0 : iMin),
      innerMax: Math.round(iMax),
      outerN: oN,
      outerMin: Math.round(oMin === Infinity ? 0 : oMin),
      outerMax: Math.round(oMax)
    });
  }
  var anim = null, animGuard = null;
  function assignPositions(targets) {
    graph.forEachNode(function(id) {
      var t = targets[id];
      if (t) graph.mergeNodeAttributes(id, { x: t.x, y: t.y });
    });
  }
  function animateTo(targets, done) {
    if (anim) {
      WIN.cancelAnimationFrame(anim);
      anim = null;
    }
    if (animGuard) WIN.clearTimeout(animGuard);
    var polar = state.layout === "rings";
    var from = {};
    graph.forEachNode(function(id, a) {
      var t = targets[id] || { x: a.x, y: a.y };
      if (!polar) {
        from[id] = { x: a.x, y: a.y, tx: t.x, ty: t.y };
        return;
      }
      var r0_ = Math.hypot(a.x, a.y), r1_ = Math.hypot(t.x, t.y);
      var h0 = Math.atan2(a.y, a.x), h1 = Math.atan2(t.y, t.x);
      var d = h1 - h0;
      while (d > Math.PI) d -= 2 * Math.PI;
      while (d < -Math.PI) d += 2 * Math.PI;
      from[id] = { r: r0_, h: h0, dr: r1_ - r0_, dh: d };
    });
    var settle = function() {
      if (anim) {
        WIN.cancelAnimationFrame(anim);
        anim = null;
      }
      if (animGuard) {
        WIN.clearTimeout(animGuard);
        animGuard = null;
      }
      assignPositions(targets);
      renderer.refresh({ skipIndexation: false });
      if (done) done();
    };
    var dur = TWEEN_MS * TIME_SCALE;
    var lastFrame = NOW();
    var TWEEN_STALL = 400;
    var tweenDog = function() {
      if (anim && NOW() - lastFrame < TWEEN_STALL) {
        animGuard = WIN.setTimeout(tweenDog, TWEEN_STALL);
        return;
      }
      settle();
    };
    animGuard = WIN.setTimeout(tweenDog, TWEEN_STALL);
    var MIN_FRAMES = 20;
    var p = 0, tPrev = NOW();
    (function step() {
      var tn = NOW();
      lastFrame = tn;
      var adv = (tn - tPrev) / dur;
      tPrev = tn;
      if (adv > 1 / MIN_FRAMES) adv = 1 / MIN_FRAMES;
      p = Math.min(1, p + adv);
      var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      graph.forEachNode(function(id) {
        var f = from[id];
        if (!f) return;
        if (polar) {
          var r = f.r + f.dr * e, h = f.h + f.dh * e;
          graph.mergeNodeAttributes(id, { x: r * Math.cos(h), y: r * Math.sin(h) });
        } else {
          graph.mergeNodeAttributes(id, {
            x: f.x + (f.tx - f.x) * e,
            y: f.y + (f.ty - f.y) * e
          });
        }
      });
      probeSample("tween");
      renderer.refresh({ skipIndexation: false });
      if (p < 1) {
        anim = WIN.requestAnimationFrame(step);
      } else {
        settle();
      }
    })();
  }
  function applyLayout(animate) {
    var targets = ringsLayout();
    if (!targets) return;
    if (animate) animateTo(targets);
    else {
      assignPositions(targets);
      renderer.refresh({ skipIndexation: false });
    }
  }
  var renderer, neighbourCache = null;
  function neighboursOf(id) {
    if (!neighbourCache) neighbourCache = {};
    if (!neighbourCache[id]) {
      neighbourCache[id] = (adj[id] || []).map(function(e) {
        return e.o;
      });
    }
    return neighbourCache[id];
  }
  var lazyShown = null, lazyAdded = [];
  function syncLazyEdges() {
    if (!lazyEdges) return;
    var want = state.hovered || state.selected || null;
    if (want === lazyShown) return;
    lazyAdded.forEach(function(pr) {
      if (graph.hasEdge(pr[0], pr[1])) graph.dropEdge(pr[0], pr[1]);
    });
    lazyAdded = [];
    if (want) (adj[want] || []).forEach(function(e) {
      if (!graph.hasEdge(want, e.o)) {
        graph.addUndirectedEdge(want, e.o, edgeAttrsOf(e.w));
        lazyAdded.push([want, e.o]);
      }
    });
    lazyShown = want;
  }
  function pathKey(a, k) {
    return a.folder + "/" + (a.dirs || []).slice(0, k).join("/");
  }
  function visible(id) {
    var a = graph.getNodeAttributes(id);
    if (isHidden(groupOf(id))) return false;
    if (state.dim === "folder") {
      var d = a.dirs || [];
      if (!d.length && state.hiddenSub[a.folder + "/"]) return false;
      for (var k = 1; k <= d.length; k++) if (state.hiddenSub[pathKey(a, k)]) return false;
    }
    return true;
  }
  var HOVER_MS = 150;
  var HOVER_GROW = 0.45;
  var hoverT = 0, hoverAim = 0, hoverRaf = 0, hoverPrev = 0;
  var mixCache = /* @__PURE__ */ Object.create(null);
  function mixHex(from, to, t) {
    if (t <= 0) return from;
    if (t >= 1) return to;
    var key = from + to + t.toFixed(2);
    var hit = mixCache[key];
    if (hit) return hit;
    var a = toRgb(from), b = toRgb(to), out = "#";
    for (var i = 0; i < 3; i++) {
      var v = Math.round(a[i] + (b[i] - a[i]) * t).toString(16);
      out += v.length < 2 ? "0" + v : v;
    }
    return mixCache[key] = out;
  }
  function hoverAmount() {
    return state.hovered ? hoverT : 1;
  }
  function hoverTo(aim) {
    hoverAim = aim;
    if (hoverRaf) return;
    hoverPrev = NOW();
    (function step() {
      var now = NOW(), dt = now - hoverPrev;
      hoverPrev = now;
      var adv = Math.min(dt, HOVER_MS) / (HOVER_MS * TIME_SCALE);
      hoverT += hoverAim > hoverT ? adv : -adv;
      if (hoverT > 1) hoverT = 1;
      if (hoverT < 0) hoverT = 0;
      var landed = hoverT === hoverAim;
      if (landed && hoverT === 0) {
        state.hovered = null;
        syncLazyEdges();
      }
      renderer.refresh({ skipIndexation: true });
      if (landed) {
        hoverRaf = 0;
        return;
      }
      hoverRaf = WIN.requestAnimationFrame(step);
    })();
  }
  var hl = /* @__PURE__ */ Object.create(null);
  var hlRaf = 0, hlPrev = 0, hlSig = "";
  var HL_GROW = 0.2;
  function hlSignature() {
    return Object.keys(state.highlight).join(",") + "|" + Object.keys(state.highlightSub).join(",") + "|" + (state.markDay || "") + "|" + (state.hoverDay || "") + "|" + // Both hover sources belong here for the same reason everything else does:
    // this is what decides whether the per-note sweep runs at all, so a source
    // missing from it is a source whose highlight silently never ramps.
    (state.hoverGroup || "") + "|" + Object.keys(state.hoverSub).join(",") + "|" + // The hovered YEAR, for exactly that reason: it haloes notes, so it has to be
    // able to change the signature or the ramp never starts.
    (state.hoverYear || "");
  }
  function hlWalk() {
    if (hlRaf) return;
    hlPrev = NOW();
    (function step() {
      var now = NOW(), dt = now - hlPrev;
      hlPrev = now;
      var adv = Math.min(dt, TWEEN_MS) / (TWEEN_MS * TIME_SCALE);
      var moving = false;
      graph.forEachNode(function(id) {
        var aim = isHighlighted(id) ? 1 : 0, v = hl[id] || 0;
        if (v === aim) return;
        v += aim > v ? adv : -adv;
        if (v > 1) v = 1;
        if (v < 0) v = 0;
        hl[id] = v;
        if (v !== aim) moving = true;
      });
      renderer.refresh({ skipIndexation: true });
      if (!moving) {
        hlRaf = 0;
        return;
      }
      hlRaf = WIN.requestAnimationFrame(step);
    })();
  }
  function hlSync() {
    var sig = hlSignature();
    if (sig === hlSig) return;
    hlSig = sig;
    hlWalk();
  }
  function focusSet() {
    var f = state.hovered || state.selected;
    if (!f) return null;
    var set = /* @__PURE__ */ Object.create(null);
    set[f] = true;
    neighboursOf(f).forEach(function(n) {
      set[n] = true;
    });
    return set;
  }
  function drawHover(ctx, data2, settings) {
    if (typeof data2.label !== "string" || !data2.label) return;
    var n = settings.labelSize;
    ctx.font = settings.labelWeight + " " + n + "px " + settings.labelFont;
    var w = ctx.measureText(data2.label).width;
    var x0 = data2.x + data2.size, x1 = x0 + w + 9;
    var h = n + 9, y0 = data2.y - h / 2, y1 = data2.y + h / 2, r = 5;
    ctx.beginPath();
    ctx.moveTo(x0 + r, y0);
    ctx.lineTo(x1 - r, y0);
    ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
    ctx.lineTo(x1, y1 - r);
    ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
    ctx.lineTo(x0 + r, y1);
    ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
    ctx.lineTo(x0, y0 + r);
    ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
    ctx.closePath();
    ctx.fillStyle = THEME.hoverBg;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = THEME.hoverBorder;
    ctx.stroke();
    ctx.fillStyle = THEME.text;
    ctx.fillText(data2.label, data2.x + data2.size + 5, data2.y + n / 3);
  }
  function nodeStyle(id, a) {
    var r = Object.assign({}, a);
    r.color = nodeColor(id);
    var hv = hl[id] || 0;
    if (state.markDay && graph.getNodeAttribute(id, "created") === state.markDay) {
      r.color = mixHex(r.color, THEME.today, hv);
      r.zIndex = 3;
    }
    if (haloOn && hv > 4e-3) {
      r.type = "halo";
      r.haloColor = mixHex(nodeColor(id), THEME.today, hv);
      r.size = (r.size || a.size) * (1 + (0.3 + HL_GROW) * hv);
      r.zIndex = 4;
    }
    if (state.query) {
      if (a.label.toLowerCase().indexOf(state.query) < 0) {
        r.color = THEME.dim;
        r.label = "";
        r.zIndex = 0;
        return r;
      }
      r.zIndex = 2;
      r.highlighted = true;
      r.forceLabel = true;
      return r;
    }
    var focusNode = state.hovered || state.selected;
    var focus = focusSet();
    var ht = hoverAmount();
    if (focus && !focus[id]) {
      r.color = mixHex(r.color || nodeColor(id), THEME.dim, ht);
      r.label = "";
      r.zIndex = 0;
      return r;
    }
    if (focus) r.zIndex = 2;
    if (id === focusNode) {
      r.size = (r.size || a.size) * (1 + HOVER_GROW * ht);
      if (ht > 0.5) {
        r.highlighted = true;
        r.forceLabel = true;
      }
      return r;
    }
    r.label = "";
    return r;
  }
  var LOGO_OF_HOLE = 0.5;
  var LOGO_PX = 128;
  var RING_BUCKETS = 144;
  var LOGO_BLEND_BUCKETS = 5;
  var CORE_SOLID = 9, CORE_FADE = 34;
  var lastGradient = "", lastGradientInner = "";
  var logoMaskReady = false, logoMaskImg = null;
  var LOGO_INNER_FADE = "16%, 40%";
  function ringColors() {
    var o = bandColors(false), i = bandColors(true);
    if (!o) return i || new Array(RING_BUCKETS);
    if (!i) return o;
    var t = outerPresence();
    if (t >= 0.999) return o;
    if (t <= 1e-3) return i;
    return mixColorArrays(i, o, t);
  }
  var BAND_HANDOVER = 0.5;
  function outerPresence() {
    var s = 0, n = 0;
    graph.forEachNode(function(id) {
      if (bandLock && bandLock[groupOf(id)]) return;
      n++;
      s += alpha[id] || 0;
    });
    if (!n) return 0;
    var t = Math.max(0, Math.min(1, s / n / BAND_HANDOVER));
    return t * t * (3 - 2 * t);
  }
  function mixColorArrays(a, b, t) {
    var out = new Array(RING_BUCKETS);
    for (var i = 0; i < RING_BUCKETS; i++) {
      var x = toRgb(a[i] || "#888"), y = toRgb(b[i] || "#888");
      out[i] = "rgb(" + Math.round(x[0] + (y[0] - x[0]) * t) + "," + Math.round(x[1] + (y[1] - x[1]) * t) + "," + Math.round(x[2] + (y[2] - x[2]) * t) + ")";
    }
    return out;
  }
  function bandColors(wantInner) {
    var col = new Array(RING_BUCKETS), rad = new Array(RING_BUCKETS), any = false;
    graph.forEachNode(function(id, a) {
      if (!present(id)) return;
      if ((bandLock ? !!bandLock[groupOf(id)] : false) !== wantInner) return;
      var r = Math.hypot(a.x, a.y);
      if (!(r > 1e-6)) return;
      var k = Math.floor(angleSweep(Math.atan2(a.y, a.x)) / (2 * Math.PI) * RING_BUCKETS);
      k = (k % RING_BUCKETS + RING_BUCKETS) % RING_BUCKETS;
      if (rad[k] === void 0 || r > rad[k]) {
        rad[k] = r;
        col[k] = nodeColor(id);
        any = true;
      }
    });
    if (!any) return null;
    var first = -1;
    for (var i = 0; i < RING_BUCKETS; i++) if (col[i]) {
      first = i;
      break;
    }
    var carry = col[first];
    for (var n = 0; n < RING_BUCKETS; n++) {
      var j = (first + n) % RING_BUCKETS;
      if (col[j]) carry = col[j];
      else col[j] = carry;
    }
    return col;
  }
  function ringColorsSmooth(src) {
    var col = src || ringColors();
    if (!col || !col[0]) return col || new Array(RING_BUCKETS);
    var n = RING_BUCKETS, w = LOGO_BLEND_BUCKETS, out = new Array(n);
    for (var i = 0; i < n; i++) {
      var r = 0, g = 0, b = 0, k = 0;
      for (var d = -w; d <= w; d++) {
        var c = toRgb(col[((i + d) % n + n) % n]);
        r += c[0];
        g += c[1];
        b += c[2];
        k++;
      }
      out[i] = "rgb(" + Math.round(r / k) + "," + Math.round(g / k) + "," + Math.round(b / k) + ")";
    }
    return out;
  }
  function ringGradient(src) {
    var col = ringColorsSmooth(src);
    if (!col || !col[0]) return "";
    var step = 360 / RING_BUCKETS, stops = [];
    for (var i = 0; i < RING_BUCKETS; i++) {
      var prev = col[(i - 1 + RING_BUCKETS) % RING_BUCKETS];
      var next = col[(i + 1) % RING_BUCKETS];
      if (col[i] === prev && col[i] === next) continue;
      stops.push(col[i] + " " + ((i + 0.5) * step).toFixed(2) + "deg");
    }
    var seam = function() {
      var a = toRgb(col[RING_BUCKETS - 1]), b = toRgb(col[0]);
      return "rgb(" + Math.round((a[0] + b[0]) / 2) + "," + Math.round((a[1] + b[1]) / 2) + "," + Math.round((a[2] + b[2]) / 2) + ")";
    }();
    stops.unshift(seam + " 0deg");
    stops.push(seam + " 360deg");
    var conic = "conic-gradient(from 0deg at 50% 50%, " + stops.join(", ") + ")";
    var m = [0, 0, 0], k = 0;
    for (var q = 0; q < RING_BUCKETS; q++) {
      var c = toRgb(col[q]);
      m[0] += c[0];
      m[1] += c[1];
      m[2] += c[2];
      k++;
    }
    k = Math.max(1, k);
    var mean = "rgba(" + Math.round(m[0] / k) + "," + Math.round(m[1] / k) + "," + Math.round(m[2] / k) + ",";
    var core = "radial-gradient(circle at 50% 50%, " + mean + "1) 0%, " + mean + "0.92) " + CORE_SOLID + "%, " + mean + "0) " + CORE_FADE + "%)";
    return core + ", " + conic;
  }
  function placeLogo() {
    var el = $("logo");
    if (!el || !logoMaskReady || !renderer || !geomLock) return;
    var two = state.logoTwoRing;
    var g = ringGradient();
    var inner = two ? bandColors(true) : null;
    var gi = two && inner ? ringGradient(inner) : "";
    if (g && g !== lastGradient) {
      lastGradient = g;
      el.style.background = g;
    }
    var eli = $("logoInner");
    if (eli) {
      if (gi) {
        if (gi !== lastGradientInner) {
          lastGradientInner = gi;
          eli.style.background = gi;
        }
      } else if (lastGradientInner) {
        lastGradientInner = "";
      }
      eli.hidden = !gi;
    }
    var c = renderer.graphToViewport({ x: 0, y: 0 });
    var edge = renderer.graphToViewport({ x: geomLock.r0 * UNIT, y: 0 });
    var holePx = Math.hypot(edge.x - c.x, edge.y - c.y);
    var size = Math.max(24, Math.min(LOGO_PX, holePx * 2 * LOGO_OF_HOLE));
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.left = c.x + "px";
    el.style.top = c.y + "px";
    el.hidden = false;
    if (eli && gi) {
      eli.style.width = size + "px";
      eli.style.height = size + "px";
      eli.style.left = c.x + "px";
      eli.style.top = c.y + "px";
    }
  }
  var REF_PITCH = 28;
  var DOT_OF_PITCH = 11 / 28;
  var DOT_MIN_PX = 1.5;
  var DOT_MAX_SPREAD = DENSITY_MAX;
  var DOT_ROOM_MAX = DENSITY_MAX;
  var sizeScale = 1;
  var haloOn = !!RENDERING.createNodeBorderProgram;
  function measureSizeScale() {
    if (!renderer) return sizeScale;
    var a = renderer.graphToViewport({ x: 0, y: 0 });
    var b = renderer.graphToViewport({ x: UNIT * (bandOf("o").sp || 1), y: 0 });
    var pitch = Math.hypot(b.x - a.x, b.y - a.y);
    if (!(pitch > 0)) return sizeScale;
    var cam = renderer.getCamera().getState().ratio || 1;
    pitch *= cam;
    var rampFor = function(units) {
      var bb = renderer.graphToViewport({ x: units, y: 0 });
      var pit = Math.hypot(bb.x - a.x, bb.y - a.y) * cam;
      var hi = DOT_OF_PITCH * pit;
      var hiCap = DOT_OF_PITCH * UNIT * DOT_MAX_SPREAD * cam;
      if (hi > hiCap) hi = hiCap;
      var lo = Math.min(hi, DOT_MIN_PX * cam);
      return {
        m: (hi - lo) / Math.max(1e-6, NODE_MAX - NODE_MIN),
        b: lo - (hi - lo) / Math.max(1e-6, NODE_MAX - NODE_MIN) * NODE_MIN,
        lo,
        hi
      };
    };
    var ro = rampFor(UNIT * (bandOf("o").sp || 1) * bandScale("o"));
    var ri = rampFor(UNIT * (bandOf("i").sp || 1) * bandScale("i"));
    bandOf("o").ramp = ro;
    bandOf("i").ramp = ri;
    return ro.hi / NODE_MAX;
  }
  function dotPx(size, id) {
    var isIn = id !== void 0 && bandLock && !!bandLock[groupOf(id)];
    var rp = bandOf(isIn ? "i" : "o").ramp;
    var v = rp.m * (size || 4) + rp.b;
    var scale = 1;
    if (id !== void 0) {
      var room = bandOf(isIn ? "i" : "o").room;
      var mine = cellRoom[id];
      if (colWalk) {
        var cwd = colWalk[groupOf(id)];
        if (cwd !== void 0) mine = (mine === void 0 ? room : mine) * cwd.f;
      }
      if (mine !== void 0 && mine > 1 && (!(room > 1) || mine < room)) room = mine;
      room *= 0.92;
      var pit = pitchUnits(isIn ? "i" : "o");
      if (room !== void 0 && pit > 1e-9) {
        var f = room / pit;
        if (f > DOT_ROOM_MAX) f = DOT_ROOM_MAX;
        v *= f;
        scale = f;
      }
    }
    var lo = (rp.lo || DOT_MIN_PX) * scale;
    if (v < lo) v = lo;
    var capU = edgeCap[id];
    if (capU !== void 0 && capU > 0) {
      var pitU = pitchUnits(isIn ? "i" : "o");
      var hiU = DOT_OF_PITCH * pitU;
      if (hiU > 1e-6) {
        var capV = rp.m * NODE_MAX + rp.b;
        var vMax = capV * (capU / hiU);
        if (v > vMax) v = vMax;
      }
    }
    return v;
  }
  function syncSizeScale() {
    var next = measureSizeScale();
    if (Math.abs(next - sizeScale) < 0.01) return false;
    sizeScale = next;
    return true;
  }
  function refreshSizeScale() {
    if (syncSizeScale() && renderer) renderer.refresh();
  }
  var CURVE_MIN = 0.05, CURVE_MAX = 0.55;
  function discR() {
    return geomLock && geomLock.maxR ? geomLock.maxR * UNIT : 1;
  }
  function curvatureFor(s, t) {
    var dx = t.x - s.x, dy = t.y - s.y;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (!len) return CURVE_MIN;
    var h = Math.abs(s.x * t.y - s.y * t.x) / len;
    var near = 1 - Math.min(1, h / (discR() * 0.5));
    var mag = CURVE_MIN + (CURVE_MAX - CURVE_MIN) * near * near;
    var out = -dy / len * (s.x + t.x) / 2 + dx / len * (s.y + t.y) / 2;
    return out >= 0 ? mag : -mag;
  }
  function makeRenderer() {
    renderer = new SigmaCls(graph, $("graph"), {
      allowInvalidContainer: true,
      renderLabels: true,
      labelRenderedSizeThreshold: 11,
      labelDensity: 0.2,
      labelGridCellSize: 150,
      labelFont: 'ui-sans-serif, "Segoe UI", system-ui, sans-serif',
      labelSize: 11,
      labelWeight: "500",
      // Sigma defaults these to black-on-anything and a hardcoded #FFF hover pill,
      // which is illegible / jarring on the dark surface.
      labelColor: { color: THEME.text },
      defaultDrawNodeHover: drawHover,
      zIndex: true,
      // SIZES SCALE WITH THE LATTICE, NOT WITH ITS SQUARE ROOT.
      //
      // Sigma's default zoomToSizeRatioFunction is Math.sqrt, so a node's drawn radius goes as
      // 1/sqrt(ratio) while its POSITION goes as 1/ratio. The two therefore diverge on every
      // zoom, and no choice of size can hold a dot at a fixed fraction of the gap to its
      // neighbour. Measured, drawn diameter over row pitch: 0.76 at rest, 1.44 three notches
      // in, 3.51 at the far end -- dots that end up swallowing their neighbours, which is
      // exactly what "they still touch when zooming in" was.
      //
      // Identity makes the multiplier 1/ratio, the same law the positions follow, so the
      // relationship between a dot and the space it has is the one thing that does NOT change
      // as the camera moves. The sizes fed in are then pinned to the lattice once (see
      // measureSizeScale) rather than re-derived per frame.
      zoomToSizeRatioFunction: function(x) {
        return x;
      },
      minCameraRatio: 0.02,
      maxCameraRatio: 12,
      // PANNING IS ON, and the centre lock that used to fight it is gone.
      //
      // The disc was pinned to the middle of the stage on the reasoning that it is the whole
      // point of the view, with a camera listener that put x and y back to 0.5 after every
      // update. That is defensible while the only camera gesture is zoom -- but it also
      // makes zoom-toward-pointer a lie, since the camera is dragged back the moment it
      // moves, so zooming in on one wedge walks it off the far edge instead. Panning plus a
      // reset is the ordinary answer, and it costs nothing that a reset does not give back.
      //
      // Rotation stays off: the wedge labels and the heatmap's day rows both assume up is up.
      //
      // The initial value is the SETTING rather than a literal: the host may have persisted
      // it off, and starting on and correcting afterwards would let one drag through before
      // the lock arrived.
      enableCameraPanning: panEnabled,
      enableCameraRotation: false,
      enableCameraZooming: true,
      // ONE WHEEL NOTCH WAS 70%. Sigma's default zoomingRatio is 1.7, so every notch
      // multiplied or divided the ratio by that -- three notches and the disc has gone from
      // filling the stage to a sixth of it. 1.2 is about 32 notches across the whole
      // 0.02..12 range, which is a scroll rather than a teleport.
      //
      // The animation is shortened with it. 250ms per notch is fine at 70% and lags visibly
      // at 20%, because the next notch arrives before the last one has landed.
      zoomingRatio: 1.2,
      zoomDuration: 120,
      defaultEdgeType: "line",
      // Both programs are registered up front so the toggle is a per-edge `type`
      // in the reducer rather than a renderer rebuild. Sigma merges these with its
      // own defaults, so "line" survives. NB the programs live on
      // Sigma.rendering, NOT on Sigma -- getting that wrong makes a program
      // silently never appear, with no error anywhere.
      edgeProgramClasses: RENDERING.EdgeCurveProgram ? { curve: RENDERING.EdgeCurveProgram } : {},
      // A ring around highlighted notes. borders[0] is the OUTER band and the
      // {fill:true} entry is the CORE -- the reverse of what the option order
      // suggests, which is worth stating because getting it backwards silently
      // draws a solid blob in the halo colour.
      nodeProgramClasses: RENDERING.createNodeBorderProgram ? {
        halo: RENDERING.createNodeBorderProgram({
          borders: [
            { size: { value: 0.26 }, color: { attribute: "haloColor" } },
            { size: { fill: true }, color: { attribute: "color" } }
          ]
        })
      } : {},
      enableEdgeEvents: false,
      // Opacity is applied here, once, rather than at each of nodeStyle's five
      // exits. Everything below 0.004 is genuinely hidden, so a fully faded note
      // costs nothing to render and drops out of hit-testing.
      nodeReducer: function(id, a) {
        var al = alpha[id] || 0;
        if (al <= 4e-3) {
          var h = Object.assign({}, a);
          h.hidden = true;
          return h;
        }
        var r = nodeStyle(id, a);
        if (al < 0.999) {
          r.color = withAlpha(r.color || a.color, al);
          r.size = (r.size || a.size) * (0.45 + 0.55 * al);
          if (al < 0.62) {
            r.label = "";
            r.forceLabel = false;
            r.highlighted = false;
          }
        }
        if (colWalk) {
          var cwr = colWalk[groupOf(id)];
          if (cwr !== void 0) {
            r.size = Math.max(0.05, (r.size === void 0 ? base2 : r.size) * cwr.f);
          }
        }
        var base2 = a.size || 4;
        r.size = dotPx(base2, id) * ((r.size === void 0 ? base2 : r.size) / base2);
        return r;
      },
      edgeReducer: function(id, a) {
        var r = Object.assign({}, a);
        var x = graph.extremities(id);
        var al = Math.min(alpha[x[0]] || 0, alpha[x[1]] || 0);
        if (al <= 4e-3) {
          r.hidden = true;
          return r;
        }
        if (state.curveEdges && RENDERING.EdgeCurveProgram) {
          r.type = "curve";
          r.curvature = curvatureFor(
            graph.getNodeAttributes(x[0]),
            graph.getNodeAttributes(x[1])
          );
        }
        r.color = THEME.edge;
        var focus = focusSet();
        if (state.query) {
          r.color = THEME.dim;
          return r;
        }
        if (focus) {
          var ht = hoverAmount(), base2 = a.size || 1;
          if (focus[x[0]] && focus[x[1]]) {
            r.color = mixHex(THEME.edge, THEME.edgeHi, ht);
            r.size = base2 + (1.4 - base2) * ht;
            r.zIndex = 2;
          } else {
            r.color = mixHex(THEME.edge, THEME.dim, ht);
            r.zIndex = 0;
          }
        }
        if (al < 0.999) r.color = withAlpha(r.color, al * al);
        return r;
      }
    });
    (function() {
      var cam = renderer.getCamera();
      cam.on("updated", function() {
        placeLogo();
        refreshSizeScale();
      });
    })();
    var rzTimer = null;
    var onResize = function() {
      if (rzTimer) WIN.clearTimeout(rzTimer);
      rzTimer = WIN.setTimeout(function() {
        rzTimer = null;
        refreshSizeScale();
        placeLogo();
      }, 120);
    };
    if (window.ResizeObserver) new ResizeObserver(onResize).observe(root);
    else window.addEventListener("resize", onResize);
    renderer.on("afterRender", function() {
      if (DBG.on) drawWedgeDebug();
      placeLogo();
      refreshSizeScale();
      heatDraw();
      hlSync();
    });
    renderer.on("enterNode", function(e) {
      state.hovered = e.node;
      syncLazyEdges();
      showTip(e.node);
      hoverTo(1);
    });
    renderer.on("leaveNode", function() {
      hideTip();
      hoverTo(0);
    });
    renderer.on("clickNode", function(e) {
      select(e.node);
    });
    renderer.on("clickStage", function() {
      select(null);
    });
    var onDoubleClick = function(e) {
      if (e && e.preventSigmaDefault) e.preventSigmaDefault();
      fit();
    };
    renderer.on("doubleClickStage", onDoubleClick);
    renderer.on("doubleClickNode", onDoubleClick);
    if (wantWedgeDebug()) wedgeDebug(true);
  }
  function showTip(id) {
    var a = graph.getNodeAttributes(id), t = $("tip");
    var p = renderer.graphToViewport({ x: a.x, y: a.y });
    setHTML(t, '<div class="t">' + esc(a.label) + '</div><div class="m">' + esc(groupOf(id)) + " &middot; " + a.deg + " link" + (a.deg === 1 ? "" : "s") + "<br>" + esc(a.ntype) + " &middot; " + esc(a.folder) + (a.sub ? " / " + esc(a.sub) : "") + "</div>");
    t.hidden = false;
    var box = t.getBoundingClientRect(), st = $("canvas").getBoundingClientRect();
    var x = Math.min(p.x + 14, st.width - box.width - 8);
    var y = Math.min(Math.max(p.y - box.height - 10, 8), st.height - box.height - 8);
    t.style.left = x + "px";
    t.style.top = y + "px";
  }
  function hideTip() {
    $("tip").hidden = true;
  }
  function select(id) {
    state.selected = id;
    syncLazyEdges();
    var d = $("detail");
    if (!id) {
      d.hidden = true;
      renderer.refresh();
      return;
    }
    var a = graph.getNodeAttributes(id);
    var nb = neighboursOf(id).slice().sort(function(p, q) {
      return graph.getNodeAttribute(q, "deg") - graph.getNodeAttribute(p, "deg");
    });
    var vault = encodeURIComponent(DATA.vault);
    var file = encodeURIComponent(a.path.replace(/\.md$/, ""));
    var h = '<button class="x" title="Close">&times;</button><h2>' + esc(a.label) + '</h2><div class="meta"><span><b style="color:' + colorOf(groupOf(id)) + '">&#9632;</b> ' + esc(groupOf(id)) + "</span><span>" + a.deg + " link" + (a.deg === 1 ? "" : "s") + "</span>" + (a.words ? "<span>" + a.words + " words</span>" : "") + (a.created ? "<span>" + esc(a.created) + "</span>" : "") + "</div><div>" + (a.tags || []).slice(0, 8).map(function(t) {
      return '<span class="chip">#' + esc(t) + "</span>";
    }).join("") + '</div><div class="chip" style="border-style:dashed">' + esc(a.folder) + (a.sub ? " / " + esc(a.sub) : "") + " / " + esc(a.ntype) + "</div>" + (a.ghost ? "" : '<div><a class="open" href="obsidian://open?vault=' + vault + "&file=" + file + '">Open in Obsidian</a></div>');
    if (nb.length) {
      h += '<div class="nb">Linked notes (' + nb.length + ")</div><ul>" + nb.slice(0, 40).map(function(n) {
        return '<li><button data-go="' + n + '">' + esc(graph.getNodeAttribute(n, "label")) + ' <span style="color:var(--text-3)">' + graph.getNodeAttribute(n, "deg") + "</span></button></li>";
      }).join("") + "</ul>";
    } else {
      h += '<div class="nb">No links</div>';
    }
    setHTML(d, h);
    d.hidden = false;
    d.querySelector(".x").onclick = function() {
      select(null);
    };
    Array.prototype.forEach.call(d.querySelectorAll("[data-go]"), function(b) {
      b.onclick = function() {
        select(b.getAttribute("data-go"));
        centerOn(b.getAttribute("data-go"));
      };
    });
    renderer.refresh();
  }
  function centerOn(id) {
    var d = renderer.getNodeDisplayData(id);
    if (!d) return;
    renderer.getCamera().animate({ x: d.x, y: d.y, ratio: 0.22 }, { duration: 420 });
  }
  function buildLegend() {
    hoverHighlight(null, null);
    var names = order[state.dim] || [];
    $("gcount").textContent = "(" + names.length + ")";
    var subCount = /* @__PURE__ */ Object.create(null);
    var kids = /* @__PURE__ */ Object.create(null);
    if (state.dim === "folder") {
      graph.forEachNode(function(_id, a) {
        var k = a.folder + "/" + (a.sub || "");
        subCount[k] = (subCount[k] || 0) + 1;
        var d = a.dirs || [];
        for (var i = 0; i < d.length; i++) {
          var pk = a.folder + "/" + d.slice(0, i).join("/");
          if (!kids[pk]) kids[pk] = /* @__PURE__ */ Object.create(null);
          kids[pk][d[i]] = (kids[pk][d[i]] || 0) + 1;
        }
      });
    }
    var eyeBtn = function(attrs, on, what) {
      return '<button class="eye" ' + attrs + ' aria-pressed="' + on + '" title="' + (on ? "Hide " : "Show ") + esc(what) + '">' + eyeSvg(on) + "</button>";
    };
    var twBtn = function(attrs, open) {
      return attrs ? '<button class="tw" ' + attrs + ' aria-expanded="' + open + '">' + (open ? "\u25BE" : "\u25B8") + "</button>" : '<span class="tw none">\u25B8</span>';
    };
    var subtree = function(prefix, depth, col) {
      var m = kids[prefix];
      if (!m || !state.pathOpen[prefix]) return "";
      return Object.keys(m).sort(function(a, b) {
        return m[b] - m[a] || a.localeCompare(b);
      }).map(function(nm) {
        var pk = prefix + "/" + nm;
        var on = !state.hiddenSub[pk];
        var hlk = !!state.highlightSub[pk];
        return '<div class="lgr sub' + Math.min(depth, 4) + '">' + twBtn(kids[pk] ? 'data-twp="' + esc(pk) + '"' : null, !!state.pathOpen[pk]) + eyeBtn('data-epath="' + esc(pk) + '"', on, nm) + '<button class="lgs" data-hpath="' + esc(pk) + '" data-hl="' + (hlk ? "on" : "off") + '" aria-pressed="' + on + '" title="Highlight ' + esc(nm) + '"><span class="sw" style="background:' + col + ';border-radius:50%"></span><span class="nm">' + esc(nm) + '</span><span class="only" data-only="1" title="Show only ' + esc(nm) + '">only</span><span class="ct">' + m[nm] + "</span></button></div>" + subtree(pk, depth + 1, col);
      }).join("");
    };
    setHTML($("legend"), names.map(function(g) {
      var vis = !isHidden(g);
      var hasSubs = state.dim === "folder" && (subOrder[g] || []).length > 1 && (counts[g] || 0) >= NEST_MIN;
      var open = hasSubs && !state.collapsed[g];
      var hl2 = !!state.highlight[g];
      var row = '<div class="lgr">' + twBtn(hasSubs ? 'data-tw="' + esc(g) + '"' : null, open) + eyeBtn('data-eye="' + esc(g) + '"', vis, g) + '<button class="lg" data-g="' + esc(g) + '" data-hl="' + (hl2 ? "on" : "off") + '" aria-pressed="' + vis + '" title="Highlight ' + esc(g) + '"><span class="sw' + (bandLock && bandLock[g] ? " sw-in" : "") + '" title="' + (bandLock && bandLock[g] ? "Inner ring" : "Outer ring") + '" style="background:' + colorOf(g) + '"></span><span class="nm" title="' + esc(g) + '">' + esc(g) + '</span><span class="only" data-only="1" title="Show only ' + esc(g) + '">only</span><span class="ct">' + counts[g] + "</span></button></div>";
      if (open && vis) {
        var subs = subOrder[g];
        var srow = function(col, nm, ct, idx, depth, twAttrs, twOpen) {
          var on = !state.hiddenSub[g + "/" + subs[idx[0]]];
          var hlSub = idx.every(function(i) {
            return !!state.highlightSub[g + "/" + subs[+i]];
          });
          return '<div class="lgr ' + (depth === 2 ? "sub2" : "sub") + '">' + twBtn(twAttrs || null, !!twOpen) + eyeBtn('data-esub="' + esc(g) + '" data-idx="' + idx.join(",") + '"', on, nm) + '<button class="lgs" data-hsub="' + esc(g) + '" data-idx="' + idx.join(",") + '" data-hl="' + (hlSub ? "on" : "off") + '" aria-pressed="' + on + '" title="Highlight ' + esc(nm) + '"><span class="sw" style="background:' + col + ';border-radius:50%"></span><span class="nm">' + esc(nm) + '</span><span class="only" data-only="1" title="Show only ' + esc(nm) + '">only</span><span class="ct">' + ct + "</span></button></div>";
        };
        subs.slice(0, SUB_NAMED).forEach(function(sb, k) {
          var pk = g + "/" + sb, tint = subShade[pk] || colorOf(g);
          row += srow(
            tint,
            sb || "(directly in folder)",
            subCount[pk] || 0,
            [k],
            1,
            kids[pk] ? 'data-twp="' + esc(pk) + '"' : null,
            !!state.pathOpen[pk]
          );
          row += subtree(pk, 2, tint);
        });
        var tail = subs.slice(SUB_NAMED);
        if (tail.length) {
          var n = 0;
          tail.forEach(function(sb) {
            n += subCount[g + "/" + sb] || 0;
          });
          var tOpen = !!state.tailOpen[g];
          row += srow(
            subShade[g + "/" + tail[0]] || colorOf(g),
            tail.length + " smaller subfolders",
            n,
            tail.map(function(_, j) {
              return SUB_NAMED + j;
            }),
            1,
            'data-twtail="' + esc(g) + '"',
            tOpen
          );
          if (tOpen) {
            tail.forEach(function(sb, j) {
              var pk = g + "/" + sb, tint = subShade[pk] || colorOf(g);
              row += srow(
                tint,
                sb || "(directly in folder)",
                subCount[pk] || 0,
                [SUB_NAMED + j],
                2,
                kids[pk] ? 'data-twp="' + esc(pk) + '"' : null,
                !!state.pathOpen[pk]
              );
              row += subtree(pk, 3, tint);
            });
          }
        }
      }
      return row;
    }).join(""));
    var each = function(sel, fn) {
      Array.prototype.forEach.call($("legend").querySelectorAll(sel), fn);
    };
    var onlySubs = function(g, keep) {
      var h = state.hidden[state.dim] || (state.hidden[state.dim] = /* @__PURE__ */ Object.create(null));
      (order[state.dim] || []).forEach(function(n) {
        h[n] = n !== g;
      });
      state.hiddenSub = /* @__PURE__ */ Object.create(null);
      (subOrder[g] || []).forEach(function(sb) {
        if (keep.indexOf(sb) < 0) state.hiddenSub[g + "/" + sb] = true;
      });
    };
    var onlyUnder = function(g, path) {
      var h = state.hidden[state.dim] || (state.hidden[state.dim] = /* @__PURE__ */ Object.create(null));
      (order[state.dim] || []).forEach(function(n) {
        h[n] = n !== g;
      });
      state.hiddenSub = /* @__PURE__ */ Object.create(null);
      var rest = path.slice(g.length + 1);
      var want = rest ? rest.split("/") : [];
      graph.forEachNode(function(_id, a) {
        if (a.folder !== g) return;
        var d = a.dirs || [], i = 0;
        while (i < want.length && i < d.length && d[i] === want[i]) i++;
        if (i === want.length) return;
        state.hiddenSub[g + "/" + d.slice(0, i + 1).join("/")] = true;
      });
    };
    each("[data-tw]", function(b) {
      var g = b.getAttribute("data-tw");
      b.onmouseenter = function() {
        hoverHighlight(g, null);
      };
      b.onmouseleave = function() {
        hoverHighlight(null, null);
      };
      b.onclick = function() {
        if (state.collapsed[g]) delete state.collapsed[g];
        else state.collapsed[g] = true;
        buildLegend();
      };
    });
    each("[data-twp]", function(b) {
      b.onclick = function() {
        var p = b.getAttribute("data-twp");
        if (state.pathOpen[p]) delete state.pathOpen[p];
        else state.pathOpen[p] = true;
        buildLegend();
      };
    });
    each("[data-epath]", function(b) {
      b.onclick = function() {
        var p = b.getAttribute("data-epath");
        if (state.hiddenSub[p]) delete state.hiddenSub[p];
        else state.hiddenSub[p] = true;
        buildLegend();
        cascade(null, { colToggle: true });
      };
    });
    each("[data-hpath]", function(b) {
      var hp = b.getAttribute("data-hpath");
      b.onmouseenter = function() {
        hoverHighlight(null, [hp]);
      };
      b.onmouseleave = function() {
        hoverHighlight(null, null);
      };
      b.onclick = function(ev) {
        var p = b.getAttribute("data-hpath");
        if (ev && ev.target && ev.target.getAttribute("data-only")) {
          onlyUnder(p.slice(0, p.indexOf("/")), p);
          buildLegend();
          cascade(null, { colToggle: true });
          return;
        }
        if (state.highlightSub[p]) delete state.highlightSub[p];
        else state.highlightSub[p] = true;
        buildLegend();
        applyLayout(true);
        renderer.refresh();
      };
    });
    each("[data-twtail]", function(b) {
      b.onclick = function() {
        var g = b.getAttribute("data-twtail");
        if (state.tailOpen[g]) delete state.tailOpen[g];
        else state.tailOpen[g] = true;
        buildLegend();
      };
    });
    each("[data-eye]", function(b) {
      var g = b.getAttribute("data-eye");
      b.onclick = function() {
        var h = state.hidden[state.dim] || (state.hidden[state.dim] = /* @__PURE__ */ Object.create(null));
        h[g] = !h[g];
        buildLegend();
        cascade(null, { colToggle: true });
      };
    });
    each("[data-esub]", function(b) {
      b.onclick = function() {
        var f = b.getAttribute("data-esub");
        var subs = subOrder[f] || [];
        var off = b.getAttribute("aria-pressed") === "true";
        b.getAttribute("data-idx").split(",").forEach(function(i) {
          var key = f + "/" + subs[+i];
          if (off) state.hiddenSub[key] = true;
          else delete state.hiddenSub[key];
        });
        buildLegend();
        cascade(null, { colToggle: true });
      };
    });
    each("[data-hsub]", function(b) {
      var hoverKeys = function() {
        var f = b.getAttribute("data-hsub");
        var subs = subOrder[f] || [];
        return b.getAttribute("data-idx").split(",").map(function(i) {
          return f + "/" + subs[+i];
        });
      };
      b.onmouseenter = function() {
        hoverHighlight(null, hoverKeys());
      };
      b.onmouseleave = function() {
        hoverHighlight(null, null);
      };
      b.onclick = function(ev) {
        var f = b.getAttribute("data-hsub");
        var subs = subOrder[f] || [];
        var idx = b.getAttribute("data-idx").split(",");
        if (ev && ev.target && ev.target.getAttribute("data-only")) {
          onlySubs(f, idx.map(function(i) {
            return subs[+i];
          }));
          buildLegend();
          cascade(null, { colToggle: true });
          return;
        }
        var allOn = idx.every(function(i) {
          return !!state.highlightSub[f + "/" + subs[+i]];
        });
        idx.forEach(function(i) {
          var key = f + "/" + subs[+i];
          if (allOn) delete state.highlightSub[key];
          else state.highlightSub[key] = true;
        });
        buildLegend();
        applyLayout(true);
        renderer.refresh();
      };
    });
    each(".lg[data-g]", function(b) {
      var g = b.getAttribute("data-g");
      b.onmouseenter = function() {
        hoverHighlight(g, null);
      };
      b.onmouseleave = function() {
        hoverHighlight(null, null);
      };
      b.onclick = function(ev) {
        if (ev.target && ev.target.getAttribute("data-only")) {
          var h = state.hidden[state.dim] || (state.hidden[state.dim] = /* @__PURE__ */ Object.create(null));
          (order[state.dim] || []).forEach(function(n) {
            h[n] = n !== g;
          });
          buildLegend();
          cascade(null, { colToggle: true });
          return;
        }
        if (state.highlight[g]) delete state.highlight[g];
        else state.highlight[g] = true;
        buildLegend();
        applyLayout(true);
        renderer.refresh();
      };
    });
  }
  function seedHidden() {
    var h = state.hidden[state.dim] = /* @__PURE__ */ Object.create(null);
    (order[state.dim] || []).forEach(function(g) {
      if (hiddenByDefault(g)) h[g] = true;
    });
  }
  function collapseAll() {
    state.collapsed = /* @__PURE__ */ Object.create(null);
    (order[state.dim] || []).forEach(function(g) {
      state.collapsed[g] = true;
    });
  }
  var collapsedInit = false;
  function regroup() {
    counts = computeOrder();
    buildColors();
    if (!collapsedInit) {
      collapsedInit = true;
      collapseAll();
      seedHidden();
    }
    if (!bandLock) {
      var base2 = buildWedgePlan(false);
      if (base2) {
        bandLock = /* @__PURE__ */ Object.create(null);
        base2.cells.forEach(function(c) {
          bandLock[c.g] = c.inner;
        });
        var bandTotal = { i: 0, o: 0 };
        base2.cells.forEach(function(c) {
          bandTotal[c.inner ? "i" : "o"] += c.wsum;
        });
        var bandR = { i: 0, o: 0 }, bandRows = { i: 0, o: 0 };
        base2.cells.forEach(function(c) {
          var k = c.inner ? "i" : "o";
          if (c.rows > bandRows[k]) bandRows[k] = c.rows;
          (c.slots || []).forEach(function(sl) {
            var rr = sl.r * UNIT;
            if (rr > bandR[k]) bandR[k] = rr;
          });
        });
        geomLock = {
          r0: base2.r0,
          rOuter: base2.rOuter,
          maxR: base2.maxR,
          total: base2.total,
          bandTotal,
          bandR,
          rows: bandRows
        };
        var again = buildWedgePlan(false);
        if (again) geomLock = {
          r0: again.r0,
          rOuter: again.rOuter,
          maxR: again.maxR,
          total: again.total,
          bandTotal,
          bandR,
          rows: bandRows
        };
        if (renderer) {
          var span = base2.maxR * UNIT * 1.02;
          renderer.setCustomBBox({ x: [-span, span], y: [-span, span] });
        }
      }
    }
    buildLegend();
    syncAlpha();
    applyLayout(false);
    if (heat) {
      heatSig = "";
      heatDraw();
    }
  }
  function buildSearch() {
    var q = $("q");
    q.oninput = function() {
      state.query = q.value.trim().toLowerCase();
      var hits = $("hits");
      if (!state.query) {
        hits.replaceChildren();
        renderer.refresh();
        return;
      }
      var found = [];
      graph.forEachNode(function(id, a) {
        if (a.label.toLowerCase().indexOf(state.query) > -1) found.push(id);
      });
      found.sort(function(p, o) {
        return graph.getNodeAttribute(o, "deg") - graph.getNodeAttribute(p, "deg");
      });
      setHTML(hits, found.slice(0, 40).map(function(id) {
        return '<button data-hit="' + id + '">' + esc(graph.getNodeAttribute(id, "label")) + ' <span style="color:var(--text-3)">' + graph.getNodeAttribute(id, "deg") + "</span></button>";
      }).join("") || '<div style="color:var(--text-3);font-size:11px;padding:4px">No match</div>');
      Array.prototype.forEach.call(hits.querySelectorAll("[data-hit]"), function(b) {
        b.onclick = function() {
          var id = b.getAttribute("data-hit");
          q.value = "";
          state.query = "";
          hits.replaceChildren();
          select(id);
          centerOn(id);
        };
      });
      renderer.refresh();
    };
    q.onkeydown = function(e) {
      if (e.key !== "Enter") return;
      var first = $("hits").querySelector("[data-hit]");
      if (first) first.click();
    };
  }
  var play = null;
  var introOwed = false;
  if (DOC && typeof DOC.addEventListener === "function") {
    DOC.addEventListener("visibilitychange", function() {
      var away = typeof DOC.visibilityState === "string" ? DOC.visibilityState === "hidden" : !!DOC.hidden;
      if (!away) {
        if (introOwed) {
          introOwed = false;
          playTimeline();
        }
        return;
      }
      if (!play && !cascadeRun && !anim) return;
      var wasPlaying = !!play;
      stopPlay();
      if (cascadeRun) {
        WIN.cancelAnimationFrame(cascadeRun.raf);
        WIN.clearTimeout(cascadeRun.guard);
        cascadeRun = null;
      }
      if (anim) {
        WIN.cancelAnimationFrame(anim);
        anim = null;
      }
      if (animGuard) {
        WIN.clearTimeout(animGuard);
        animGuard = null;
      }
      pinnedPlan = null;
      planKeep = null;
      roomNow = null;
      cellNow = null;
      edgeNow = null;
      colWalk = null;
      posSrc = posDst = null;
      state.until = null;
      timelineFrame(true);
      if (wasPlaying) introOwed = true;
    });
  }
  function stopPlay() {
    if (!play) return;
    var viaCascade = play.viaCascade;
    WIN.cancelAnimationFrame(play.raf);
    if (play.guard) WIN.clearTimeout(play.guard);
    play = null;
    endSweep();
    if (!viaCascade) return;
    if (cascadeRun) {
      WIN.cancelAnimationFrame(cascadeRun.raf);
      WIN.clearTimeout(cascadeRun.guard);
      cascadeRun = null;
    }
    pinnedPlan = null;
    planKeep = null;
    roomNow = null;
    cellNow = null;
    edgeNow = null;
    posSrc = posDst = null;
    colWalk = null;
    state.until = null;
    timelineFrame(true);
  }
  function timelineFrame(full) {
    fullRing = true;
    syncAlpha();
    var targets = ringsLayout();
    if (targets) assignPositions(targets);
    renderer.refresh({ skipIndexation: !full });
  }
  function playTimeline() {
    stopPlay();
    if (cascadeRun) {
      WIN.cancelAnimationFrame(cascadeRun.raf);
      WIN.clearTimeout(cascadeRun.guard);
      cascadeRun = null;
    }
    if (anim) {
      WIN.cancelAnimationFrame(anim);
      anim = null;
    }
    if (animGuard) {
      WIN.clearTimeout(animGuard);
      animGuard = null;
    }
    pinnedPlan = null;
    planKeep = null;
    roomNow = null;
    cellNow = null;
    edgeNow = null;
    colWalk = null;
    posSrc = posDst = null;
    var dur = TIMELINE_MS * TIME_SCALE;
    state.until = null;
    state.from = null;
    state.to = null;
    rangeChrome();
    clearAlpha();
    cascade(function() {
      if (play) play = null;
      endSweep();
    }, {
      fullRing: true,
      order: function(id) {
        return tlRank[id] || 0;
      },
      // NO spread override: the stagger is windowFor(n), the same expression a folder toggle
      // uses, so a note's own fade is the same fraction of the animation in both. Overriding it
      // (240 frames against windowFor's ~74) made the timeline a visibly different animation
      // rather than the same one over a longer clock, which is the whole point of it going
      // through cascade().
      totalMs: dur,
      onFrame: function(pr) {
        sweepTo(pr);
      }
    });
    play = { raf: 0, guard: 0, viaCascade: true };
  }
  function sweepTo(pr) {
    if (!dateSpan || !tlMax) return;
    var k = Math.max(0, Math.min(1, pr)) * tlMax;
    var i = Math.round(k) - 1;
    if (i < 0) i = 0;
    if (i > tlDateMs.length - 1) i = tlDateMs.length - 1;
    var ms = tlDateMs[i];
    if (!(ms >= dateSpan.lo)) ms = dateSpan.lo;
    if (ms > dateSpan.hi) ms = dateSpan.hi;
    brushSweep = pr >= 1 ? dateSpan.hi : ms;
    drawRibbon();
    if (pr >= 1) {
      hideRTip();
      return;
    }
    showRTip(ribbonX(brushSweep, ribbonW()), isoDay(brushSweep));
  }
  function endSweep() {
    if (brushSweep === null) return;
    brushSweep = null;
    hideRTip();
    drawDateUI();
  }
  function resetView() {
    stopPlay();
    seedHidden();
    state.hiddenSub = /* @__PURE__ */ Object.create(null);
    state.highlight = /* @__PURE__ */ Object.create(null);
    state.highlightSub = /* @__PURE__ */ Object.create(null);
    collapseAll();
    state.tailOpen = /* @__PURE__ */ Object.create(null);
    state.pathOpen = /* @__PURE__ */ Object.create(null);
    state.markDay = null;
    state.hoverDay = null;
    state.until = null;
    state.query = "";
    state.hovered = null;
    select(null);
    hideTip();
    $("q").value = "";
    $("hits").replaceChildren();
    state.from = null;
    state.to = null;
    state.heatEnd = null;
    rangeChrome();
    buildLegend();
  }
  function buildTools() {
    $("allon").onclick = function() {
      state.hidden[state.dim] = /* @__PURE__ */ Object.create(null);
      state.hiddenSub = /* @__PURE__ */ Object.create(null);
      buildLegend();
      cascade(null, { colToggle: true });
    };
    $("alloff").onclick = function() {
      var h = state.hidden[state.dim] = /* @__PURE__ */ Object.create(null);
      (order[state.dim] || []).forEach(function(g) {
        h[g] = true;
      });
      buildLegend();
      cascade(null, { colToggle: true });
    };
    var onRefresh = typeof deps.onRefresh === "function" ? deps.onRefresh : null;
    if (onRefresh) {
      $("refresh").title = "Rebuild from the vault and replay. Picks up notes written since the graph was drawn, and clears every filter.";
    }
    $("refresh").onclick = function() {
      if (onRefresh) {
        onRefresh();
        return;
      }
      resetView();
      fit();
      playTimeline();
    };
    if ($("reset")) $("reset").onclick = fit;
    if ($("zin")) $("zin").onclick = function() {
      zoomBy(1);
    };
    if ($("zout")) $("zout").onclick = function() {
      zoomBy(-1);
    };
    if ($("pan")) $("pan").onclick = function() {
      setPan(!panEnabled, true);
    };
    setPan(panEnabled, false);
    $("png").onclick = savePng;
    if ($("dbg")) $("dbg").onclick = function() {
      var txt = JSON.stringify(API.debugDump(), null, 2);
      var done = function(how) {
        var b = $("dbg");
        b.textContent = how;
        WIN.setTimeout(function() {
          b.textContent = "Debug";
        }, 1600);
      };
      var save = function() {
        try {
          var a = DOC.createElement("a");
          a.href = "data:application/json;charset=utf-8," + encodeURIComponent(txt);
          a.download = "vault-graph-debug.json";
          a.click();
          done("Saved");
        } catch (e2) {
          done("Failed");
        }
      };
      try {
        WIN.navigator.clipboard.writeText(txt).then(function() {
          done("Copied");
        }, save);
      } catch (e) {
        save();
      }
    };
    if (openHostSettings) {
      $("gear").hidden = false;
      $("gear").removeAttribute("aria-expanded");
      $("gear").removeAttribute("aria-controls");
      $("gear").onclick = function() {
        openHostSettings();
      };
    } else if (SETTINGS_UI) {
      $("gear").hidden = false;
      $("gear").onclick = function() {
        var open = $("settings").hidden;
        $("settings").hidden = !open;
        $("gear").setAttribute("aria-expanded", String(open));
        if (open) buildSettings();
      };
      $("fcreset").onclick = function() {
        pickColor(null, null);
      };
      $("setbody").addEventListener("click", function(ev) {
        var t = ev.target instanceof Element ? ev.target : null;
        if (!t) return;
        var v = t.closest("[data-vis]");
        if (v) {
          pickVisible(v.getAttribute("data-vis"));
          return;
        }
        var b = t.closest("[data-fc]");
        if (b) pickColor(b.getAttribute("data-fc"), b.getAttribute("data-key") || null);
      });
    }
    function pickColor(folder, key) {
      var next = /* @__PURE__ */ Object.create(null);
      if (folder) {
        Object.keys(folderColors).forEach(function(g) {
          next[g] = folderColors[g];
        });
        if (key) next[folder] = key;
        else delete next[folder];
      }
      var saved = applyFolderColors(next);
      if (saveFolderColors) saveFolderColors(Object.assign({}, saved));
      buildSettings();
    }
    function pickVisible(folder) {
      var next = /* @__PURE__ */ Object.create(null);
      Object.keys(folderShown).forEach(function(g) {
        next[g] = folderShown[g];
      });
      next[folder] = hiddenByDefault(folder);
      var saved = applyFolderShown(next);
      if (saveFolderShown) saveFolderShown(Object.assign({}, saved));
      var h = state.hidden[state.dim] || (state.hidden[state.dim] = /* @__PURE__ */ Object.create(null));
      if (hiddenByDefault(folder)) h[folder] = true;
      else delete h[folder];
      buildLegend();
      cascade(null, { colToggle: true });
      buildSettings();
    }
    function buildSettings() {
      var pal = paletteInfo();
      var rows = (order[state.dim] || []).map(function(g) {
        var pinned = folderColors[g] || "";
        var cur = pinned || groupSlot[g] || "";
        var sws = pal.map(function(p) {
          var on = cur === p.key;
          return '<button class="swatch vg-' + p.key + '" role="radio" data-fc="' + esc(g) + '" data-key="' + p.key + '" aria-checked="' + on + '"' + (on && !pinned ? ' data-auto="1"' : "") + ' title="' + esc(p.name) + (on ? pinned ? " (chosen)" : " (automatic)" : "") + '" aria-label="' + esc(p.name) + '"></button>';
        }).join("");
        var shown = !hiddenByDefault(g);
        return '<div class="scr" role="radiogroup" aria-label="Colour for ' + esc(g) + '"><div class="scrh"><button class="eye vis" data-vis="' + esc(g) + '" aria-pressed="' + shown + '" title="' + (shown ? "Shown by default" : "Hidden by default") + '" aria-label="' + (shown ? "Hide" : "Show") + " " + esc(g) + '">' + eyeSvg(shown) + '</button><span class="nm" title="' + esc(g) + '">' + esc(g) + '</span><button class="auto" data-fc="' + esc(g) + '" data-key="" aria-pressed="' + !pinned + '" title="Back to the slot this folder gets automatically">Auto</button></div><span class="sws">' + sws + "</span></div>";
      }).join("");
      setHTML($("setbody"), rows);
    }
  }
  var FIT_RATIO = 1.08;
  function fitRatio() {
    var locked = geomLock && geomLock.maxR ? geomLock.maxR : 0;
    var live = lastMaxR;
    if (!locked || !live) return FIT_RATIO;
    var k = live / locked;
    if (k > 1.35) k = 1.35;
    if (k < 0.12) k = 0.12;
    return FIT_RATIO * k;
  }
  function fit() {
    var to = { x: 0.5, y: 0.5, ratio: fitRatio(), angle: 0 };
    if (!panEnabled) {
      renderer.setSetting("enableCameraPanning", true);
      renderer.getCamera().animate(to, { duration: 380 }, function() {
        renderer.setSetting("enableCameraPanning", false);
      });
      return;
    }
    renderer.getCamera().animate(to, { duration: 380 });
  }
  function zoomBy(dir) {
    var cam = renderer.getCamera();
    var step = renderer.getSetting("zoomingRatio") || 1.2;
    var r = cam.getState().ratio * (dir > 0 ? 1 / step : step);
    var lo = renderer.getSetting("minCameraRatio"), hi = renderer.getSetting("maxCameraRatio");
    if (typeof lo === "number" && r < lo) r = lo;
    if (typeof hi === "number" && r > hi) r = hi;
    cam.animate({ ratio: r }, { duration: renderer.getSetting("zoomDuration") || 120 });
  }
  function setPan(on, persist) {
    panEnabled = !!on;
    var btn = $("pan");
    if (btn) btn.setAttribute("aria-pressed", panEnabled ? "true" : "false");
    if (renderer) {
      if (panEnabled) renderer.setSetting("enableCameraPanning", true);
      else fit();
    }
    if (persist && onPanEnabled) onPanEnabled(panEnabled);
    return panEnabled;
  }
  function savePng() {
    var canvases = renderer.getCanvases();
    var src = canvases.nodes;
    var out = DOC.createElement("canvas");
    out.width = src.width;
    out.height = src.height;
    var ctx = out.getContext("2d");
    ctx.fillStyle = css("--surface-1");
    ctx.fillRect(0, 0, out.width, out.height);
    var lg = $("logo");
    if (lg && logoMaskImg && logoMaskImg.complete && !lg.hidden) {
      var w = parseFloat(lg.style.width) || 0;
      var dpr = src.width / ($("graph").clientWidth || src.width);
      if (w > 0) {
        var side = Math.round(w * dpr);
        var layer = function(cols) {
          var lc = DOC.createElement("canvas");
          lc.width = side;
          lc.height = side;
          var lx = lc.getContext("2d");
          var cx = side / 2, step = 2 * Math.PI / RING_BUCKETS;
          for (var i = 0; i < RING_BUCKETS; i++) {
            if (!cols[i]) continue;
            lx.beginPath();
            lx.moveTo(cx, cx);
            lx.arc(cx, cx, side, i * step - Math.PI / 2, (i + 1) * step - Math.PI / 2);
            lx.closePath();
            lx.fillStyle = cols[i];
            lx.fill();
          }
          var mm = [0, 0, 0], mk = 0;
          for (var j = 0; j < RING_BUCKETS; j++) {
            if (!cols[j]) continue;
            var cc = toRgb(cols[j]);
            mm[0] += cc[0];
            mm[1] += cc[1];
            mm[2] += cc[2];
            mk++;
          }
          if (mk) {
            var mr = Math.round(mm[0] / mk), mg = Math.round(mm[1] / mk), mb = Math.round(mm[2] / mk);
            var half = side / 2;
            var cg = lx.createRadialGradient(half, half, 0, half, half, half * CORE_FADE / 100);
            cg.addColorStop(0, "rgba(" + mr + "," + mg + "," + mb + ",1)");
            cg.addColorStop(CORE_SOLID / CORE_FADE, "rgba(" + mr + "," + mg + "," + mb + ",0.92)");
            cg.addColorStop(1, "rgba(" + mr + "," + mg + "," + mb + ",0)");
            lx.fillStyle = cg;
            lx.fillRect(0, 0, side, side);
          }
          lx.globalCompositeOperation = "destination-in";
          lx.drawImage(logoMaskImg, 0, 0, side, side);
          return lc;
        };
        var two = state.logoTwoRing;
        var base2 = layer(ringColorsSmooth());
        var innerRaw = two ? bandColors(true) : null;
        if (two && innerRaw) {
          var ic = layer(ringColorsSmooth(innerRaw));
          var ix = ic.getContext("2d");
          var f = LOGO_INNER_FADE.split(",");
          var r0f = parseFloat(f[0]) / 100 * (side / 2), r1f = parseFloat(f[1]) / 100 * (side / 2);
          var rg = ix.createRadialGradient(side / 2, side / 2, r0f, side / 2, side / 2, r1f);
          rg.addColorStop(0, "rgba(0,0,0,1)");
          rg.addColorStop(1, "rgba(0,0,0,0)");
          ix.globalCompositeOperation = "destination-in";
          ix.fillStyle = rg;
          ix.fillRect(0, 0, side, side);
          base2.getContext("2d").drawImage(ic, 0, 0);
        }
        ctx.globalAlpha = 0.95;
        ctx.drawImage(
          base2,
          (parseFloat(lg.style.left) - w / 2) * dpr,
          (parseFloat(lg.style.top) - w / 2) * dpr,
          side,
          side
        );
        ctx.globalAlpha = 1;
      }
    }
    ["edges", "nodes", "labels"].forEach(function(k) {
      if (canvases[k]) ctx.drawImage(canvases[k], 0, 0);
    });
    var a = DOC.createElement("a");
    a.href = out.toDataURL("image/png");
    a.download = "vault-graph.png";
    a.click();
  }
  function buildStats() {
    var s = DATA.stats;
    $("vname").textContent = DATA.vault + " graph";
    setHTML($("stats"), "<b>" + s.nodes + "</b> notes &middot; <b>" + s.edges + "</b> links &middot; <b>" + s.orphans + "</b> unlinked<br><b>" + s.unresolved + "</b> link(s) point at notes that do not exist" + (s.ghostsIncluded ? " (shown as ghosts)" : " (hidden)") + "<br>" + (s.templatesExcluded ? "Templates excluded. " : "") + "Generated " + esc(DATA.generated));
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function(c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var HEAT_WEEKS = 52;
  var HEAT_WEEKS_MIN = 8;
  var HEAT_GAP = 2, HEAT_CELL_MIN = 7, HEAT_CELL_MAX = 13;
  var HEAT_GUTTER = 18;
  var HEAT_MONTH_H = 12;
  var HEAT_ARROW_W = 9;
  var HEAT_EMPTY_A = 0.5;
  var DAY_MS = 864e5, WEEK_MS = 7 * DAY_MS;
  var MONTH_ABBR = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var heat = null;
  var heatSig = "";
  var heatRz = null;
  function heatParse(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
    return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
  }
  function heatKey(ms) {
    var d = new Date(ms), p = function(n) {
      return (n < 10 ? "0" : "") + n;
    };
    return d.getUTCFullYear() + "-" + p(d.getUTCMonth() + 1) + "-" + p(d.getUTCDate());
  }
  function heatMonday(ms) {
    return ms - (new Date(ms).getUTCDay() + 6) % 7 * DAY_MS;
  }
  function heatGeom() {
    var wrap = $("heatwrap");
    var avail = (wrap && wrap.clientWidth || $("stage").clientWidth || 900) - HEAT_GUTTER;
    avail -= HEAT_ARROW_W;
    var want = Math.floor((avail + HEAT_GAP) / (HEAT_CELL_MAX + HEAT_GAP));
    var span = dateSpan ? Math.ceil((dateSpan.hi - dateSpan.lo) / WEEK_MS) + 1 : HEAT_WEEKS;
    var cols = Math.max(HEAT_WEEKS_MIN, Math.min(HEAT_WEEKS, span, want));
    var cell = Math.floor((avail - (cols - 1) * HEAT_GAP) / cols);
    return { cols, cell: Math.max(HEAT_CELL_MIN, Math.min(HEAT_CELL_MAX, cell)) };
  }
  function heatBuild() {
    var wrap = $("heatwrap"), cv = $("heatc");
    if (!wrap || !cv) return;
    var g = heatGeom();
    var cols = g.cols, cell = g.cell;
    var pitch = cell + HEAT_GAP;
    var endMs = state.heatEnd === null ? heatParse(TODAY) : state.heatEnd;
    var start = heatMonday(endMs) - (cols - 1) * WEEK_MS;
    var days = /* @__PURE__ */ Object.create(null), keys = [];
    for (var c = 0; c < cols; c++) {
      for (var r = 0; r < 7; r++) {
        var ms = start + c * WEEK_MS + r * DAY_MS;
        var k = heatKey(ms);
        days[k] = { key: k, ms, col: c, row: r, ids: [], parts: [], n: 0 };
        keys.push(k);
      }
    }
    var before = 0, after = 0, undated = 0, all = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id, a) {
      var k2 = a.created;
      if (!heatParse(k2)) {
        undated++;
        return;
      }
      all[k2] = (all[k2] || 0) + 1;
      var d = days[k2];
      if (d) d.ids.push(id);
      else if (heatParse(k2) < start) before++;
      else after++;
    });
    var counts2 = [];
    for (var kk in all) counts2.push(all[kk]);
    counts2.sort(function(x, y) {
      return x - y;
    });
    var q = function(p) {
      return counts2.length ? counts2[Math.min(counts2.length - 1, Math.floor(p * counts2.length))] : 1;
    };
    var cuts = [q(0.2), q(0.4), q(0.6), q(0.8)];
    var nMax = 1;
    for (var w = 0; w < keys.length; w++) {
      var wn = days[keys[w]].ids.length;
      if (wn > nMax) nMax = wn;
    }
    heat = {
      cols,
      cell,
      pitch,
      start,
      days,
      keys,
      cuts,
      nMax,
      before,
      after,
      undated,
      dated: counts2.length,
      w: HEAT_GUTTER + cols * pitch - HEAT_GAP + HEAT_ARROW_W,
      h: HEAT_MONTH_H + 7 * pitch - HEAT_GAP
    };
    var hkey = /* @__PURE__ */ Object.create(null);
    graph.forEachNode(function(id) {
      var c2 = nodeColor(id), l = hex2lab(c2);
      hkey[id] = [hueOf(c2), l[0]];
    });
    keys.forEach(function(k2) {
      days[k2].ids.sort(function(a, b) {
        return hkey[a][0] - hkey[b][0] || hkey[a][1] - hkey[b][1];
      });
    });
    var dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(heat.w * dpr);
    cv.height = Math.round(heat.h * dpr);
    cv.style.width = heat.w + "px";
    cv.style.height = heat.h + "px";
    var inWin = 0;
    for (var i = 0; i < keys.length; i++) inWin += days[keys[i]].ids.length;
    $("heatnote").textContent = "last " + cols + " weeks \xB7 " + inWin + " of " + graph.order + " notes" + (before ? " \xB7 " + before + " earlier" : "") + (after ? " \xB7 " + after + " later" : "") + (undated ? " \xB7 " + undated + " undated" : "");
    heatSig = "";
    heatDraw();
  }
  function heatLevel(n) {
    var c = heat.cuts;
    for (var i = 0; i < c.length; i++) if (n <= c[i]) return i;
    return c.length;
  }
  function heatTile(ctx, x, y, side, parts) {
    var n = parts.length;
    if (!n) return;
    var cols = Math.max(1, Math.round(Math.sqrt(n)));
    for (var c = 0; c < cols; c++) {
      var i0 = Math.floor(c * n / cols), i1 = Math.floor((c + 1) * n / cols);
      if (i1 <= i0) continue;
      var x0 = x + side * c / cols, x1 = x + side * (c + 1) / cols;
      var m = i1 - i0;
      for (var j = 0; j < m; j++) {
        var q = parts[i0 + j];
        var y0 = y + side * j / m, y1 = y + side * (j + 1) / m;
        ctx.globalAlpha = q.w;
        ctx.fillStyle = q.c;
        ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      }
    }
    ctx.globalAlpha = 1;
  }
  function heatCompute() {
    for (var i = 0; i < heat.keys.length; i++) {
      var d = heat.days[heat.keys[i]];
      d.n = 0;
      d.parts.length = 0;
      for (var j = 0; j < d.ids.length; j++) {
        var id = d.ids[j], w = alpha[id] || 0;
        if (w <= 4e-3) continue;
        d.n += w;
        d.parts.push({ c: nodeColor(id), w });
      }
    }
  }
  function heatDraw() {
    var cv = $("heatc");
    if (!heat || !cv || !cv.getContext) return;
    heatCompute();
    var sig = [];
    for (var i = 0; i < heat.keys.length; i++) {
      sig.push(Math.round(heat.days[heat.keys[i]].n * 4));
    }
    sig.push(state.markDay || "", state.hoverDay || "", heat.cell);
    sig = sig.join(",");
    if (sig === heatSig) return;
    heatSig = sig;
    var dpr = window.devicePixelRatio || 1;
    var ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, heat.w, heat.h);
    var cell = heat.cell, pitch = heat.pitch;
    var R = Math.max(2, Math.round(cell * 0.22));
    var td = heat.days[TODAY];
    ctx.font = "9px ui-sans-serif, -apple-system, 'Segoe UI', system-ui, sans-serif";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = THEME.text;
    ctx.globalAlpha = 0.45;
    var lastEnd = -99;
    for (var c = 0; c < heat.cols; c++) {
      var first = new Date(heat.start + c * WEEK_MS);
      if (first.getUTCDate() > 7) continue;
      var x = HEAT_GUTTER + c * pitch;
      if (x < lastEnd + 4) continue;
      var lab2 = MONTH_ABBR[first.getUTCMonth()];
      ctx.fillText(lab2, x, HEAT_MONTH_H - 3);
      lastEnd = x + ctx.measureText(lab2).width;
    }
    ctx.globalAlpha = 1;
    if (td) {
      var ax = HEAT_GUTTER + heat.cols * pitch - HEAT_GAP;
      var ay = HEAT_MONTH_H + td.row * pitch + cell / 2;
      ctx.fillStyle = THEME.today;
      ctx.beginPath();
      ctx.moveTo(ax + 2.5, ay);
      ctx.lineTo(ax + HEAT_ARROW_W - 1, ay - 3.5);
      ctx.lineTo(ax + HEAT_ARROW_W - 1, ay + 3.5);
      ctx.closePath();
      ctx.fill();
    }
    var INIT = ["M", "", "W", "", "F", "", ""];
    ctx.fillStyle = THEME.text;
    ctx.globalAlpha = 0.45;
    for (var r = 0; r < 7; r++) {
      if (INIT[r]) ctx.fillText(INIT[r], 0, HEAT_MONTH_H + r * pitch + cell - 1);
    }
    ctx.globalAlpha = 1;
    for (var i2 = 0; i2 < heat.keys.length; i2++) {
      var d = heat.days[heat.keys[i2]];
      var x2 = HEAT_GUTTER + d.col * pitch, y2 = HEAT_MONTH_H + d.row * pitch;
      ctx.globalAlpha = HEAT_EMPTY_A;
      ctx.fillStyle = THEME.dim;
      heatRect(ctx, x2, y2, cell, cell, R);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (d.n > 4e-3) {
        ctx.save();
        heatRect(ctx, x2, y2, cell, cell, R);
        ctx.clip();
        heatTile(ctx, x2, y2, cell, d.parts);
        ctx.restore();
      }
      if (d.key === state.markDay) {
        ctx.strokeStyle = THEME.today;
        ctx.lineWidth = 1.5;
        heatRect(ctx, x2 - 1, y2 - 1, cell + 2, cell + 2, R + 1);
        ctx.stroke();
      } else if (d.key === state.hoverDay) {
        ctx.strokeStyle = THEME.today;
        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 1;
        heatRect(ctx, x2 - 1, y2 - 1, cell + 2, cell + 2, R + 1);
        ctx.stroke();
        ctx.globalAlpha = 1;
      } else if (d.key === TODAY) {
        ctx.strokeStyle = THEME.today;
        ctx.lineWidth = 1;
        heatRect(ctx, x2 - 1, y2 - 1, cell + 2, cell + 2, R + 1);
        ctx.stroke();
      }
    }
    heatDrawKey(cell, R);
  }
  function heatDrawKey(cell, R) {
    var cv = $("heatkey");
    if (!cv || !cv.getContext) return;
    var anchors = [];
    heat.cuts.concat([heat.nMax]).forEach(function(a) {
      if (anchors.indexOf(a) < 0) anchors.push(a);
    });
    var pitch = cell + 4;
    var dpr = window.devicePixelRatio || 1;
    var w = anchors.length * pitch - 4;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(cell * dpr)) {
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(cell * dpr);
      cv.style.width = w + "px";
      cv.style.height = cell + "px";
    }
    var ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, cell);
    var greys = [THEME.neutrals[0], THEME.neutrals[2]];
    for (var i = 0; i < anchors.length; i++) {
      var parts = [];
      for (var j = 0; j < anchors[i]; j++) parts.push({ c: greys[j % 2], w: 1 });
      ctx.save();
      heatRect(ctx, i * pitch, 0, cell, cell, R);
      ctx.clip();
      heatTile(ctx, i * pitch, 0, cell, parts);
      ctx.restore();
    }
    cv.title = anchors.map(function(a) {
      return a + (a === 1 ? " note" : " notes");
    }).join("  \xB7  ");
  }
  function heatRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function heatHit(ev) {
    if (!heat) return null;
    var b = $("heatc").getBoundingClientRect();
    var x = ev.clientX - b.left - HEAT_GUTTER, y = ev.clientY - b.top - HEAT_MONTH_H;
    if (x < 0 || y < 0) return null;
    var c = Math.floor(x / heat.pitch), r = Math.floor(y / heat.pitch);
    if (c < 0 || c >= heat.cols || r < 0 || r > 6) return null;
    if (x - c * heat.pitch > heat.cell || y - r * heat.pitch > heat.cell) return null;
    return heat.days[heatKey(heat.start + c * WEEK_MS + r * DAY_MS)] || null;
  }
  var HEAT_WD = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  function heatShowTip(d) {
    var t = $("htip"), n = Math.round(d.n);
    var by = /* @__PURE__ */ Object.create(null);
    for (var i = 0; i < d.ids.length; i++) {
      if ((alpha[d.ids[i]] || 0) <= 4e-3) continue;
      var g = groupOf(d.ids[i]);
      by[g] = (by[g] || 0) + 1;
    }
    var top = Object.keys(by).sort(function(a, b) {
      return by[b] - by[a];
    }).slice(0, 3);
    var wd = HEAT_WD[(new Date(d.ms).getUTCDay() + 6) % 7];
    setHTML(t, '<div class="t">' + esc(d.key) + " \xB7 " + wd + (d.key === TODAY ? " \xB7 today" : "") + '</div><div class="m">' + (n ? n + " note" + (n === 1 ? "" : "s") + " added" : "nothing added") + (top.length ? "<br>" + top.map(function(g2) {
      return '<b style="color:' + colorOf(g2) + '">\u25A0</b> ' + esc(g2) + " " + by[g2];
    }).join("<br>") : "") + (n ? "<br><i>click to mark them on the disc</i>" : "") + "</div>");
    t.hidden = false;
    var box = t.getBoundingClientRect();
    var host = $("heat").getBoundingClientRect(), cv = $("heatc").getBoundingClientRect();
    var cx = cv.left - host.left + HEAT_GUTTER + d.col * heat.pitch + heat.cell / 2;
    var cy = cv.top - host.top + HEAT_MONTH_H + d.row * heat.pitch;
    t.style.left = Math.max(4, Math.min(cx - box.width / 2, host.width - box.width - 4)) + "px";
    var above = cy - box.height - 8;
    t.style.top = (above >= 2 ? above : cy + heat.cell + 8) + "px";
  }
  function buildHeatmapUI() {
    var cv = $("heatc");
    var setHover = function(key) {
      if (state.hoverDay === key) return;
      state.hoverDay = key;
      heatSig = "";
      renderer.refresh();
    };
    cv.addEventListener("mousemove", function(ev) {
      var d = heatHit(ev);
      if (d) heatShowTip(d);
      else $("htip").hidden = true;
      cv.style.cursor = d && d.n > 4e-3 ? "pointer" : "default";
      setHover(d && d.n > 4e-3 ? d.key : null);
    });
    cv.addEventListener("mouseleave", function() {
      $("htip").hidden = true;
      setHover(null);
    });
    cv.addEventListener("click", function(ev) {
      var d = heatHit(ev);
      if (!d || d.n <= 4e-3) return;
      state.markDay = state.markDay === d.key ? null : d.key;
      heatSig = "";
      renderer.refresh();
    });
    var reflow = function() {
      if (heatRz) WIN.clearTimeout(heatRz);
      heatRz = WIN.setTimeout(function() {
        heatRz = null;
        var g = heatGeom();
        if (heat && g.cell === heat.cell && g.cols === heat.cols) return;
        heatBuild();
      }, 60);
    };
    if (window.ResizeObserver) new ResizeObserver(reflow).observe($("heatwrap"));
    else window.addEventListener("resize", reflow);
  }
  var DEMO_DONE_TITLE = "vault-graph demo complete";
  var RIBBON_BARS = 26;
  var RIBBON_TRACK = 14;
  var RIBBON_H = RIBBON_BARS + RIBBON_TRACK;
  var GRAB_PX = 6;
  var DRAG_MIN = 3;
  var brushDrag = null;
  var brushSweep = null;
  function drawDateUI() {
    ribW = measureRibbon() || ribW;
    drawRibbon();
    buildYears();
  }
  function buildYears() {
    var host = $("years");
    if (!host) return;
    if (!dateSpan || !dateSpan.years.length) {
      host.textContent = "";
      return;
    }
    var w = ribbonW();
    var span = dateSpan.hi - dateSpan.lo;
    var pitchY = span > 0 ? w * (365.25 * 864e5) / span : w;
    var every = pitchY < 20 ? 2 : 1;
    var cur = null;
    var cf = state.from === null ? dateSpan.lo : state.from;
    var ct = state.to === null ? dateSpan.hi : state.to;
    var ca = new Date(cf), cb = new Date(ct);
    if (ca.getUTCFullYear() === cb.getUTCFullYear() && ca.getUTCMonth() === 0 && ca.getUTCDate() === 1 && (cb.getUTCMonth() === 11 && cb.getUTCDate() === 31 || ct >= dateSpan.hi)) cur = ca.getUTCFullYear();
    var made = [];
    dateSpan.years.forEach(function(yy) {
      if (yy.y % every !== 0) return;
      var at = Math.max(0, Math.min(w, ribbonX(Date.UTC(yy.y, 0, 1), w)));
      var b = DOC.createElement("button");
      b.type = "button";
      b.setAttribute("data-yr", String(yy.y));
      b.setAttribute("aria-pressed", cur === yy.y ? "true" : "false");
      b.title = yy.y + " -- " + yy.n + " note" + (yy.n === 1 ? "" : "s");
      b.style.setProperty("left", Math.round(at) + "px");
      b.textContent = "'" + String(yy.y).slice(2);
      made.push(b);
    });
    host.replaceChildren.apply(host, made);
  }
  function fitCanvas(cv, w, h) {
    var dpr = Math.min(2, WIN.devicePixelRatio || 1);
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    cv.style.width = w + "px";
    cv.style.height = h + "px";
    var cx = cv.getContext("2d");
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx.clearRect(0, 0, w, h);
    return cx;
  }
  function dateRamp(t) {
    return t <= 0 ? css("--dim") : mixHex(css("--surface-2"), css("--accent"), 0.25 + 0.75 * Math.min(1, t));
  }
  function scrubColor() {
    return mixHex(css("--accent"), css("--text-1"), 0.3);
  }
  function rgbaHex(hex, a) {
    var c = toRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }
  var ribW = 0;
  function measureRibbon() {
    var cv = $("ribbon");
    if (!cv) return 0;
    var keep = cv.style.width;
    cv.style.removeProperty("width");
    var w = cv.getBoundingClientRect().width;
    if (keep) cv.style.setProperty("width", keep);
    return w;
  }
  function ribbonW() {
    if (!ribW) ribW = measureRibbon();
    return ribW || 600;
  }
  function ribbonX(ms, w) {
    var span = dateSpan.hi - dateSpan.lo;
    return span > 0 ? (ms - dateSpan.lo) / span * w : 0;
  }
  function ribbonMs(x, w) {
    return dateSpan.lo + Math.max(0, Math.min(w, x)) / w * (dateSpan.hi - dateSpan.lo);
  }
  function brushEnds() {
    if (brushDrag && brushDrag.pFrom !== void 0) return [brushDrag.pFrom, brushDrag.pTo];
    if (brushSweep !== null) return [dateSpan.lo, brushSweep];
    return [
      state.from === null ? dateSpan.lo : state.from,
      state.to === null ? dateSpan.hi : state.to
    ];
  }
  function winEndNow() {
    if (state.heatEnd !== null) return state.heatEnd;
    return heat ? heat.start + heat.cols * WEEK_MS : heatParse(TODAY);
  }
  function drawRibbon() {
    var cv = $("ribbon");
    if (!cv || !dateSpan) return;
    var w = Math.max(200, ribbonW());
    var cx = fitCanvas(cv, w, RIBBON_H);
    var top = RIBBON_BARS;
    var ms = dateSpan.months, n = ms.length;
    var pitch = w / n;
    for (var i = 0; i < n; i++) {
      var m = ms[i];
      var t = Math.min(1, m.n / dateSpan.nRef);
      var bh = m.n ? Math.max(1.5, (top - 2) * t) : 0;
      cx.fillStyle = m.n ? dateRamp(t) : css("--dim");
      cx.fillRect(i * pitch, top - bh, Math.max(1, pitch - 0.6), bh || 1);
    }
    for (var j = 0; j < n; j++) {
      if (ms[j].m !== 0) continue;
      cx.fillStyle = rgbaHex(css("--text-3"), 0.28);
      cx.fillRect(j * pitch, 0, 1, top);
    }
    var tw = winTrack(w);
    cx.fillStyle = rgbaHex(css("--text-3"), 0.16);
    heatRect(cx, 0, tw.y + tw.h / 2 - 1, w, 2, 1);
    cx.fill();
    var pillW = Math.max(10, tw.x1 - tw.x0);
    cx.fillStyle = scrubColor();
    cx.globalAlpha = brushDrag && brushDrag.mode === "win" ? 1 : 0.86;
    heatRect(cx, tw.x0, tw.y, pillW, tw.h, tw.h / 2);
    cx.fill();
    cx.globalAlpha = 1;
    cx.strokeStyle = rgbaHex(css("--surface-0"), 0.9);
    cx.lineWidth = 1;
    heatRect(cx, tw.x0, tw.y, pillW, tw.h, tw.h / 2);
    cx.stroke();
    var e = brushEnds(), x0 = ribbonX(e[0], w), x1 = ribbonX(e[1], w);
    cx.fillStyle = rgbaHex(css("--surface-0"), 0.72);
    cx.fillRect(0, 0, x0, top);
    cx.fillRect(x1, 0, w - x1, top);
    var col = scrubColor(), rim = rgbaHex(css("--surface-0"), 0.92);
    var gw = 9, gh = Math.max(12, top - 8), gy = (top - gh) / 2;
    [x0, x1].forEach(function(x) {
      var gx = Math.max(0, Math.min(w - gw, x - gw / 2));
      cx.fillStyle = rim;
      cx.fillRect(x - 2.5, 0, 5, top);
      cx.fillStyle = col;
      cx.fillRect(x - 1.5, 0, 3, top);
      heatRect(cx, gx, gy, gw, gh, 3);
      cx.fill();
      cx.strokeStyle = rim;
      cx.lineWidth = 1;
      heatRect(cx, gx, gy, gw, gh, 3);
      cx.stroke();
      cx.fillStyle = rim;
      cx.fillRect(gx + gw / 2 - 2, gy + gh / 2 - 3, 1, 6);
      cx.fillRect(gx + gw / 2 + 1, gy + gh / 2 - 3, 1, 6);
    });
  }
  function rebuildBand() {
    var endMs = state.heatEnd === null ? heatParse(TODAY) : state.heatEnd;
    var wantStart = heatMonday(endMs) - ((heat ? heat.cols : HEAT_WEEKS) - 1) * WEEK_MS;
    var moved = !heat || heat.start !== wantStart;
    if (moved) heatBuild();
    drawDateUI();
    if (moved) heatDraw();
  }
  function winTrack(w) {
    var span = (heat ? heat.cols : HEAT_WEEKS) * WEEK_MS;
    var end = winEndNow();
    return {
      x0: ribbonX(end - span, w),
      x1: ribbonX(end, w),
      y: RIBBON_BARS + 2,
      h: RIBBON_TRACK - 5
    };
  }
  function inWinTrack(y) {
    return y >= RIBBON_BARS && y < RIBBON_BARS + RIBBON_TRACK;
  }
  function winSpan() {
    return (heat ? heat.cols : HEAT_WEEKS) * WEEK_MS;
  }
  function clampWinEnd(ms) {
    var todayMs = heatParse(TODAY);
    var lo = dateSpan.lo + winSpan();
    return Math.max(Math.min(ms, todayMs), Math.min(lo, todayMs));
  }
  function winEndCentred(ms) {
    return clampWinEnd(ms + winSpan() / 2);
  }
  function brushHit(x, w, y) {
    if (y !== void 0 && inWinTrack(y)) return "win";
    var e = brushEnds(), x0 = ribbonX(e[0], w), x1 = ribbonX(e[1], w);
    var d0 = Math.abs(x - x0), d1 = Math.abs(x - x1);
    if (d0 <= GRAB_PX || d1 <= GRAB_PX) return d0 <= d1 ? "from" : "to";
    if (x > x0 && x < x1) {
      return state.from === null && state.to === null ? "new" : "body";
    }
    return "new";
  }
  function showRTip(x, text) {
    var t = $("rtip"), rib = $("ribbon"), band = $("heat");
    if (!t || !rib || !band) return;
    setHTML(t, esc(text));
    t.hidden = false;
    var bb = band.getBoundingClientRect(), rb = rib.getBoundingClientRect();
    var tb = t.getBoundingClientRect();
    var left = Math.max(4, Math.min(bb.width - tb.width - 4, rb.left - bb.left + x - tb.width / 2));
    t.style.left = left + "px";
    t.style.top = rb.top - bb.top - tb.height - 3 + "px";
  }
  function hideRTip() {
    var t = $("rtip");
    if (t) t.hidden = true;
  }
  function isoDay(ms) {
    return new Date(ms).toISOString().slice(0, 10);
  }
  function winLabel() {
    if (!heat) return "";
    return isoDay(heat.start) + "  \u2192  " + isoDay(heat.start + heat.cols * WEEK_MS - DAY_MS);
  }
  function buildDateUI() {
    var rib = $("ribbon");
    if (!rib) return;
    var pend = null, pendRaf = 0;
    var flush = function() {
      pendRaf = 0;
      var f = pend;
      pend = null;
      if (f) f();
    };
    var onFrame = function(fn) {
      pend = fn;
      if (!pendRaf) pendRaf = WIN.requestAnimationFrame(flush);
    };
    $("rangeall").onclick = function() {
      state.from = null;
      state.to = null;
      state.heatEnd = null;
      heatBuild();
      applyRange();
      heatDraw();
    };
    var fieldMs = function(el) {
      var v = el && el.value;
      if (!v) return null;
      var t = heatParse(v);
      return isFinite(t) ? t : null;
    };
    ["from", "to"].forEach(function(which) {
      var el = $(which);
      if (!el) return;
      el.onchange = function() {
        setRangeMs(fieldMs($("from")), fieldMs($("to")));
      };
    });
    var xOf = function(ev) {
      return ev.clientX - rib.getBoundingClientRect().left;
    };
    var yOf = function(ev) {
      return ev.clientY - rib.getBoundingClientRect().top;
    };
    rib.addEventListener("pointerdown", function(ev) {
      if (!dateSpan) return;
      var w = ribbonW(), x = xOf(ev), mode = brushHit(x, w, yOf(ev)), e = brushEnds();
      brushDrag = {
        mode,
        x0: ev.clientX,
        moved: false,
        // For an edge drag the OTHER end is the anchor and does not move. For a
        // body drag both ends move together, so both originals are kept.
        anchor: mode === "from" ? e[1] : e[0],
        from0: e[0],
        to0: e[1],
        grab: ribbonMs(x, w),
        winEnd0: heat ? heat.start + heat.cols * WEEK_MS : 0
      };
      try {
        rib.setPointerCapture(ev.pointerId);
      } catch {
      }
      rib.setAttribute("data-grab", mode === "win" ? "moving" : mode === "body" ? "moving" : "edge");
      if (mode === "win") {
        state.heatEnd = winEndCentred(ribbonMs(x, w));
        rebuildBand();
        showRTip(x, winLabel());
      }
    });
    rib.addEventListener("pointermove", function(ev) {
      if (!brushDrag) {
        if (dateSpan) {
          var x = xOf(ev), w2 = ribbonW(), m = brushHit(x, w2, yOf(ev));
          if (m === "win") rib.setAttribute("data-grab", "body");
          else if (m === "from" || m === "to") rib.setAttribute("data-grab", "edge");
          else if (m === "body") rib.setAttribute("data-grab", "body");
          else rib.removeAttribute("data-grab");
          showRTip(x, m === "win" ? winLabel() : isoDay(ribbonMs(x, w2)));
        }
        return;
      }
      if (Math.abs(ev.clientX - brushDrag.x0) > DRAG_MIN) brushDrag.moved = true;
      if (!brushDrag.moved) return;
      var w = ribbonW(), here = ribbonMs(xOf(ev), w), lo, hi, follow;
      if (brushDrag.mode === "win") {
        var wx = xOf(ev);
        onFrame(function() {
          if (!brushDrag) return;
          state.heatEnd = winEndCentred(here);
          rebuildBand();
          showRTip(wx, winLabel());
        });
        return;
      }
      if (brushDrag.mode === "body") {
        var d = here - brushDrag.grab;
        var width = brushDrag.to0 - brushDrag.from0;
        lo = Math.max(dateSpan.lo, Math.min(dateSpan.hi - width, brushDrag.from0 + d));
        hi = lo + width;
        follow = hi;
      } else if (brushDrag.mode === "from" || brushDrag.mode === "to") {
        lo = Math.min(brushDrag.anchor, here);
        hi = Math.max(brushDrag.anchor, here);
        follow = here;
      } else {
        lo = Math.min(brushDrag.grab, here);
        hi = Math.max(brushDrag.grab, here);
        follow = here;
      }
      var mode = brushDrag.mode;
      brushDrag.pFrom = lo;
      brushDrag.pTo = hi;
      onFrame(function() {
        if (!brushDrag) return;
        showRTip(
          ribbonX(follow, w),
          mode === "body" ? isoDay(lo) + "  \u2192  " + isoDay(hi) : isoDay(follow)
        );
        drawDateUI();
        var el = $("rangenote");
        if (el) el.textContent = isoDay(lo) + "  \u2192  " + isoDay(hi);
      });
    });
    var endDrag = function(ev) {
      if (!brushDrag) return;
      var d = brushDrag;
      brushDrag = null;
      rib.removeAttribute("data-grab");
      hideRTip();
      try {
        rib.releasePointerCapture(ev.pointerId);
      } catch {
      }
      if (d.mode === "win") return;
      if (d.moved && d.pFrom !== void 0) {
        state.from = d.pFrom <= dateSpan.lo ? null : d.pFrom;
        state.to = d.pTo >= dateSpan.hi ? null : d.pTo;
        applyRange();
      } else {
        rangeChrome();
      }
    };
    rib.addEventListener("pointerup", endDrag);
    rib.addEventListener("pointercancel", endDrag);
    rib.addEventListener("pointerleave", function() {
      if (!brushDrag) hideRTip();
    });
    var yrHost = $("years");
    var hoverYear = function(yr) {
      if (state.hoverYear === yr) return;
      state.hoverYear = yr;
      if (renderer) renderer.refresh();
    };
    if (yrHost) {
      var yrOf = function(ev) {
        var b = ev.target && ev.target.closest && ev.target.closest("button[data-yr]");
        return b ? b.getAttribute("data-yr") : null;
      };
      yrHost.addEventListener("click", function(ev) {
        var yr = yrOf(ev);
        if (yr === null) return;
        state.hoverYear = null;
        setRangeMs(Date.UTC(+yr, 0, 1), Date.UTC(+yr, 11, 31));
      });
      yrHost.addEventListener("pointerover", function(ev) {
        hoverYear(yrOf(ev));
      });
      yrHost.addEventListener("pointerout", function(ev) {
        if (!ev.relatedTarget || !yrHost.contains(ev.relatedTarget)) hoverYear(null);
      });
    }
    var onSlot = function() {
      var w = measureRibbon();
      if (w && Math.abs(w - ribW) < 0.5) return;
      ribW = w;
      drawDateUI();
    };
    if (WIN.ResizeObserver) new WIN.ResizeObserver(onSlot).observe($("heat"));
    else WIN.addEventListener("resize", onSlot);
    applyRange();
  }
  function wantWedgeDebug() {
    var q = String(WIN.location ? WIN.location.search : "") + " " + String(WIN.location ? WIN.location.hash : "");
    if (/(^|[?&#])nowedges\b/.test(q)) return false;
    if (/(^|[?&#])wedges\b/.test(q)) return true;
    return !!(DATA && DATA.dev);
  }
  function restOn() {
    return /(^|[?&#])rest\b/.test(String(location.search) + " " + String(location.hash));
  }
  function rowArcOn() {
    return /(^|[?&#])rowarc/.test(String(location.search) + " " + String(location.hash));
  }
  function demoOn() {
    return /(^|[?&#])demo\b/.test(String(location.search) + " " + String(location.hash));
  }
  function demoBusy() {
    return !!(play || cascadeRun || anim || hoverRaf || hlRaf);
  }
  function demoGroup(spec) {
    var names = order[state.dim] || [];
    if (!names.length) return null;
    var bySize = names.slice().sort(function(a, b) {
      return (counts[b] || 0) - (counts[a] || 0);
    });
    if (/^#\d+$/.test(spec)) return bySize[parseInt(spec.slice(1), 10) - 1] || null;
    for (var i = 0; i < names.length; i++) {
      if (names[i].indexOf(spec) === 0) return names[i];
    }
    return bySize[0];
  }
  function demoFind(kind, arg) {
    if (kind === "id") return $(arg);
    if (kind === "stage") {
      var stageEl = $("graph");
      if (!stageEl) return null;
      var sb = stageEl.getBoundingClientRect();
      var f = arg === "centre" || !arg ? [0.5, 0.5] : String(arg).split(",").map(Number);
      return demoPoint(
        sb.left + sb.width * f[0],
        sb.top + sb.height * f[1],
        2,
        2,
        "stage " + (arg || "centre")
      );
    }
    if (kind === "brush") return demoRibbonPoint(arg);
    if (kind === "eye" || kind === "group") {
      var g = demoGroup(arg);
      if (!g) return null;
      var attr = kind === "eye" ? "data-eye" : "data-g";
      var all = $("legend").querySelectorAll("[" + attr + "]");
      for (var i = 0; i < all.length; i++) {
        if (all[i].getAttribute(attr) === g) return all[i];
      }
      return null;
    }
    if (kind === "sub") {
      var slash = arg.indexOf("/");
      var g2 = demoGroup(arg.slice(0, slash)), nm = arg.slice(slash + 1);
      if (!g2) return null;
      var subs2 = subOrder[g2] || [];
      var k2 = subs2.indexOf(nm);
      if (k2 < 0) k2 = subs2.length ? 0 : -1;
      if (k2 < 0) return null;
      var rows = $("legend").querySelectorAll("[data-hsub]");
      for (var j = 0; j < rows.length; j++) {
        if (rows[j].getAttribute("data-hsub") !== g2) continue;
        var idx = rows[j].getAttribute("data-idx").split(",");
        if (idx.indexOf(String(k2)) >= 0) return rows[j];
      }
      return null;
    }
    if (kind === "twisty") {
      var gt = demoGroup(arg);
      if (!gt) return null;
      var tws = $("legend").querySelectorAll("[data-tw]");
      for (var t = 0; t < tws.length; t++) {
        if (tws[t].getAttribute("data-tw") === gt) return tws[t];
      }
      return null;
    }
    if (kind === "only") {
      var row = demoFind("group", arg);
      return row ? row.querySelector(".only") : null;
    }
    if (kind === "swatch") {
      var cut = arg.indexOf("/");
      var gsw = demoGroup(arg.slice(0, cut)), key = arg.slice(cut + 1);
      if (!gsw) return null;
      var sw = $("setbody").querySelectorAll(".swatch");
      for (var s = 0; s < sw.length; s++) {
        if (sw[s].getAttribute("data-fc") === gsw && sw[s].getAttribute("data-key") === key) return sw[s];
      }
      return null;
    }
    if (kind === "year") {
      var yh = $("years");
      if (!yh || !dateSpan) return null;
      var chips = [].slice.call(yh.querySelectorAll("button[data-yr]"));
      if (!chips.length) return null;
      var have = /* @__PURE__ */ Object.create(null);
      dateSpan.years.forEach(function(yy) {
        have[String(yy.y)] = yy.n;
      });
      var pickY = null, bestN = -1;
      chips.forEach(function(c) {
        var y = c.getAttribute("data-yr");
        if (arg && /^\d{4}$/.test(arg)) {
          if (y === arg) pickY = c;
          return;
        }
        var n = have[y] || 0;
        if (n > bestN) {
          bestN = n;
          pickY = c;
        }
      });
      if (!pickY || !arg && bestN <= 0) return null;
      pickY.demoLabel = "year " + pickY.getAttribute("data-yr") + " (" + (have[pickY.getAttribute("data-yr")] || 0) + " notes)";
      return pickY;
    }
    if (kind === "note") return demoNoteRect(arg);
    if (kind === "day") return demoCellRect(heat && heat.days[arg]);
    if (kind === "busiest") {
      if (!heat) return null;
      var ds = [];
      for (var kk in heat.days) if (heat.days[kk].n > 4e-3) ds.push(heat.days[kk]);
      ds.sort(function(a, b) {
        return b.n - a.n;
      });
      return demoCellRect(ds[Math.max(1, parseInt(arg, 10) || 1) - 1]);
    }
    return null;
  }
  function demoNoteRect(prefix) {
    var g = demoGroup(prefix);
    if (!g || !renderer) return null;
    var org = $("graph").getBoundingClientRect();
    var pts = [], maxR = 0;
    graph.forEachNode(function(id, a) {
      if ((alpha[id] || 0) < 0.5) return;
      var v = renderer.graphToViewport({ x: a.x, y: a.y });
      v = { x: v.x + org.left, y: v.y + org.top };
      var r = renderer.scaleSize ? renderer.scaleSize(dotPx(a.size, id)) : dotPx(a.size, id);
      if (r > maxR) maxR = r;
      pts.push({ id, x: v.x, y: v.y, r, mine: a.folder === g, label: a.label });
    });
    var best = null, bestGap = -1;
    for (var i = 0; i < pts.length; i++) {
      if (!pts[i].mine) continue;
      var gap = Infinity;
      for (var j = 0; j < pts.length; j++) {
        if (i === j) continue;
        var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < gap) gap = d2;
      }
      if (gap > bestGap) {
        bestGap = gap;
        best = pts[i];
      }
    }
    if (!best) return null;
    var box = Math.max(6, best.r * 1.5);
    return {
      left: best.x - box / 2,
      top: best.y - box / 2,
      width: box,
      height: box,
      // `expect` lets the driver confirm afterwards that the hover landed where it aimed.
      // The title is logged because it is on camera anyway -- and the storyboard aims only
      // at date-titled folders, which is what makes that safe.
      expect: best.id,
      gap: Math.round(Math.sqrt(bestGap) * 10) / 10,
      demoLabel: "note " + best.label
    };
  }
  function demoCellRect(d) {
    if (!d || !heat) return null;
    var b = $("heatc").getBoundingClientRect();
    return {
      left: b.left + HEAT_GUTTER + d.col * heat.pitch,
      top: b.top + HEAT_MONTH_H + d.row * heat.pitch,
      width: heat.cell,
      height: heat.cell,
      demoLabel: "heatmap " + d.key + " (" + Math.round(d.n) + " notes)"
    };
  }
  function demoPoint(cx, cy, w, h, label) {
    return {
      getBoundingClientRect: function() {
        return { left: cx - w / 2, top: cy - h / 2, width: w, height: h };
      },
      demoLabel: label
    };
  }
  function demoRibbonPoint(which) {
    var rib = $("ribbon");
    if (!rib || !dateSpan) return null;
    var b = rib.getBoundingClientRect();
    var w = b.width;
    if (which === "window") {
      var t = winTrack(w);
      return demoPoint(b.left + (t.x0 + t.x1) / 2, b.top + t.y + t.h / 2, 8, 8, "band window");
    }
    var e = brushEnds();
    var x = ribbonX(which === "to" ? e[1] : e[0], w);
    x = Math.max(2, Math.min(w - 2, x));
    return demoPoint(
      b.left + x,
      b.top + RIBBON_BARS / 2,
      8,
      8,
      which === "to" ? "range end" : "range start"
    );
  }
  function demoWhere(kind, arg) {
    var el = demoFind(kind, arg);
    if (!el) return null;
    if (el.scrollIntoView) el.scrollIntoView({ block: "nearest", inline: "nearest" });
    var b = el.getBoundingClientRect ? el.getBoundingClientRect() : el;
    if (!b.width || !b.height) return null;
    return {
      x: Math.round(b.left + b.width / 2),
      y: Math.round(b.top + b.height / 2),
      w: Math.round(b.width),
      h: Math.round(b.height),
      expect: el.expect || null,
      // How much clear space the aim actually had, when the target knows. Reported rather
      // than asserted: the driver verifies the hit itself, and this is the number that
      // explains a miss.
      gap: el.gap != null ? el.gap : null,
      // Truncated: a control's `title` is help text, not a name -- Refresh's runs to
      // 180 characters and swamped the driver's log line for that beat.
      label: (el.demoLabel || el.getAttribute && (el.getAttribute("title") || el.id) || kind + " " + arg).slice(0, 44)
    };
  }
  function demoMode() {
    return [
      /* --- 1. the vault, growing --------------------------------------- */
      // The intro is a BEAT, not the page's own boot animation -- see the `?demo` branch
      // at the bottom of this file. Refresh is the real control for "replay it", so the
      // demo presses it rather than calling playTimeline() behind the scenes.
      //
      // It also shows the STRIP now: the intro sweeps the range end from one end of the
      // ribbon to the other, with the date under the handle, so this one beat says both
      // "here is the vault" and "here is the control that scrubs it". Which is why the act
      // that picks that handle up by hand comes next but one.
      { settle: true, why: "start from a disc at rest" },
      { click: true, target: ["id", "refresh"], why: "replay the intro on camera" },
      { settle: true, why: "the vault grows from its first note to now, and the range end sweeps with it" },
      /* --- 2. one note -------------------------------------------------- */
      // Hovering a note names it, lifts it, and lights its links while the rest of the
      // disc recedes. The FOLDERS here are chosen, not incidental: daily notes and
      // weekly reviews are titled by date, so the label that appears on camera carries
      // no personal information -- unlike a note in 03 - Resources / People.
      // "04"/"05" resolve by prefix on a PARA-ish vault and fall back to the largest
      // group elsewhere. Both are date-titled folders on the vaults this is recorded
      // against -- see the note on demoNoteRect.
      //
      // BEFORE ANY FILTER RUNS, which is why this act moved up past the legend as well as
      // past the ribbon: demoNoteRect picks the most ISOLATED visible note, and the more
      // the disc has been thinned the further that aim drifts from a typical note.
      { hover: true, target: ["note", "04"], why: "hover a daily note" },
      { hover: true, target: ["note", "05"], why: "hover a meeting note" },
      /* --- 3. the timeline ---------------------------------------------- */
      // The strip under the band carries every month of the vault, and it is the timeline:
      // two handles that are the filter, a pill below them for the 52 weeks the grid above
      // is drawing, and a chip per year. Moved up from LAST -- the sidebar's rank slider is
      // gone and this is the only timeline now, so it belongs beside the intro that has
      // just swept it rather than after the preference panel.
      //
      // The `to` handle first, and deliberately the same one the intro moved: the intro
      // showed it travelling, this shows a hand doing it. The disc waits for the release on
      // each of these, by design -- a drag repaints one small canvas and the filter lands
      // once, when the button comes up.
      { drag: [-320, 0], target: ["brush", "to"], why: "pull the range end back by hand -- the handle the intro just swept" },
      { settle: true, why: "let the disc thin out" },
      { drag: [200, 0], target: ["brush", "from"], why: "...and bring the range start forward" },
      { settle: true, why: "let it thin further" },
      // THE YEAR CHIPS, which have never been in the demo. Hover haloes that year's notes
      // wherever they landed; clicking sets the range to that calendar year, and the chip
      // reads pressed. "busiest" picks the fullest year that has a chip, so the hover
      // always lights something -- see demoFind.
      { hover: true, target: ["year", "busiest"], why: "hover a year to find it on the disc" },
      { click: true, target: ["year", "busiest"], why: "...and click it to filter to that year" },
      { settle: true, why: "let the year land" },
      // The band's window, moved on its own. The range above stays exactly where it was --
      // which is most of what this act is for: they are two instruments, not one.
      { drag: [-260, 0], target: ["brush", "window"], why: "slide the heatmap window back on its own" },
      { settle: true, why: "let the band redraw" },
      { drag: [170, 0], target: ["brush", "window"], why: "...and forward again" },
      { settle: true, why: "let the band redraw" },
      // Clear it, so everything after this runs on the whole vault. Also puts the window
      // back, which is what makes the `busiest` targets in the next act land on cells that
      // are actually on screen.
      { click: true, target: ["id", "rangeall"], why: "clear the date range" },
      { settle: true, why: "let the whole vault come back" },
      /* --- 4. the heatmap ----------------------------------------------- */
      // Hovering a day haloes the notes added that day, wherever they landed on the disc.
      // Ranked by what is VISIBLE rather than by date, so this works on any vault.
      { hover: true, target: ["busiest", "1"], why: "hover the busiest day" },
      { hover: true, target: ["busiest", "2"], why: "...and the next" },
      { hover: true, target: ["busiest", "3"], why: "...and the next" },
      // AND CLICKING KEEPS IT. This is what replaced the sidebar's "Mark today" in 1.7.0:
      // a picked day's notes are recoloured to the neutral extreme as well as haloed, and
      // it stays when the pointer leaves. Clicking today's square -- the last cell of the
      // grid -- is the whole of what that button did.
      //
      // The busiest day rather than today, because today is allowed to hold no notes and a
      // beat that marks nothing reads as a mis-click. Clicked twice, so nothing is left
      // marked for the acts below.
      { click: true, target: ["busiest", "1"], why: "click a day to keep it marked -- recoloured, haloed, nothing moved" },
      { settle: true, why: "let the mark ramp in" },
      { click: true, target: ["busiest", "1"], why: "...and click again to let it go" },
      { settle: true, why: "let it ramp back" },
      /* --- 5. folders --------------------------------------------------- */
      // Hiding: the wedges reallocate and the disc stays a full circle.
      { click: true, target: ["eye", "04"], why: "hide a folder -- the wedges reallocate" },
      { settle: true, why: "let the wedges reallocate" },
      // And `only`, which is the fastest way to answer "where does one folder live".
      // SAFE HERE because nothing has been unfolded yet: see the note at the top about the
      // 97px row shift that soloing an unfolded legend causes.
      { click: true, target: ["only", "08"], why: "solo a single folder" },
      { settle: true, why: "let everything else recede" },
      { click: true, target: ["id", "allon"], why: "show everything again" },
      { settle: true, why: "let the whole disc come back" },
      /* --- 6. subfolders ------------------------------------------------ */
      // The tree starts folded, so getting to a subfolder means opening its folder first.
      // That is the honest sequence and it is worth showing: the disc already draws 03's
      // sub-wedges, and this is where the legend admits they are there. It is also
      // load-bearing -- the row the next beats aim at does not exist until this has run.
      { click: true, target: ["twisty", "03"], why: "unfold a folder to reach its subfolders" },
      // HOVER FIRST, and at both levels. It is the cheaper question and the one you would
      // try first: a halo, with nothing hidden and no wedge moved.
      { hover: true, target: ["group", "01"], why: "hover a folder to find it on the disc" },
      { hover: true, target: ["sub", "03/People"], why: "...and one subfolder inside it" },
      // Then the click, which is the same question answered permanently: highlighting is
      // a SEPARATE axis from visibility -- the whole point of the eye being its own
      // control -- and on a subfolder that owns a sub-wedge it moves as a block rather
      // than only being ringed. Hover haloes; a click also pushes. Shown back to back so
      // the difference is visible rather than asserted.
      { click: true, target: ["sub", "03/People"], why: "click it instead: haloed AND pushed out" },
      { settle: true, why: "let the sub-wedge push out" },
      { click: true, target: ["sub", "03/People"], why: "...and let it back down" },
      { settle: true, why: "let it settle back" },
      { click: true, target: ["twisty", "03"], why: "fold the subfolders away again" },
      /* --- 7. the camera ------------------------------------------------ */
      // Zoom in a few notches rather than one. One notch is a fifth now, which is the point
      // -- it is a scroll and not a teleport -- and a single notch on camera looks like
      // nothing happened.
      { wheel: 4, target: ["stage", "0.42,0.40"], why: "zoom in, a fifth per notch" },
      { settle: true, why: "let the last notch land" },
      // Then pan, which is only possible now that the disc is not pinned to the middle. Held
      // button the whole way, or the page sees a click and a release with nothing between.
      { drag: [190, 110], target: ["stage", "0.55,0.45"], why: "drag the disc around" },
      { settle: true, why: "let the pan settle" },
      // Two ways back, both shown, because the button is discoverable and the double-click is
      // faster once you know it.
      { dblclick: true, target: ["stage", "centre"], why: "double-click anywhere to reset" },
      { settle: true, why: "let the view come back" },
      { wheel: 3, target: ["stage", "0.60,0.55"], why: "zoom in again, to have something to reset" },
      { settle: true, why: "let it land" },
      { click: true, target: ["id", "reset"], why: "...and the reset button in the corner" },
      { settle: true, why: "let the view come back" },
      /* --- 8. colours --------------------------------------------------- */
      // LAST on purpose. It is a preference panel, and it was landing before the timeline.
      // The gear has to come first regardless -- the panel's swatches do not exist in the
      // DOM until buildSettings has run, so the `swatch` targets below resolve to nothing
      // without this beat. Two folders are recoloured rather than one, because one swatch
      // click looks like a highlight and two look like a choice; and the second is a grey,
      // which is the answer to "can a folder recede on purpose" that the archives rule
      // only implies.
      { click: true, target: ["id", "gear"], why: "open the settings panel" },
      { click: true, target: ["swatch", "01/g8"], why: "give a folder a colour of its own" },
      { settle: true, why: "the disc repaints -- no relayout, nothing moves" },
      { click: true, target: ["swatch", "03/g11"], why: "...and let another one go grey" },
      { settle: true, why: "let the second repaint land" },
      { click: true, target: ["id", "fcreset"], why: "put every folder back to automatic" },
      { settle: true, why: "let the palette snap back" },
      { click: true, target: ["id", "gear"], why: "close the panel" },
      // Pointer out of the way, so the last frame is the disc rather than a hover state
      // left behind by the last click.
      { park: true, why: "leave the final frame clean" }
    ];
  }
  var demoApi = {
    on: demoOn,
    doneTitle: DEMO_DONE_TITLE,
    storyboard: demoMode,
    busy: demoBusy,
    /**
     * WHICH of the five things busy() ors together is still running.
     *
     * busy() answers "is anything moving", which is the right question for a driver deciding
     * whether to act. It is the wrong question for a driver that has GIVEN UP waiting: then
     * the only useful thing to know is what it was waiting for, and a boolean cannot say.
     * Every "settle timed out" before this was a guess between five candidates.
     */
    busyWhy: function() {
      return {
        play: !!play,
        cascade: !!cascadeRun,
        anim: !!anim,
        hover: !!hoverRaf,
        highlight: !!hlRaf
      };
    },
    where: demoWhere,
    // What is hovered right now. The driver compares this against a target's `expect`
    // after a hover beat: aiming at a dot is only as good as the hit-test agreeing, and
    // a silent miss puts the wrong note's NAME on camera.
    hovered: function() {
      return state.hovered;
    },
    // Called by the driver when the last beat lands. The title is the signal on
    // purpose: a screen recorder outside the browser can poll a window title with no
    // debugging port of its own, no extension and nothing injected.
    finish: function(ms, trace) {
      window.__vgDemoDone = { ms, trace: trace || [] };
      DOC.title = DEMO_DONE_TITLE;
      return true;
    }
  };
  WIN.setTimeout(function() {
    makeRenderer();
    API = window.__vg = {
      graph,
      state,
      // Re-read the palette from CSS. Called once at init, and again by a
      // host whose theme changed: THEME is a snapshot, so without this a
      // theme flip restyles the DOM and leaves every canvas colour behind.
      readTheme,
      get renderer() {
        return renderer;
      },
      ringsLayout,
      visible,
      groupOf,
      alpha,
      cascade,
      syncAlpha,
      // The lazy-edge seam, exposed for the probes: a test that wants to know
      // whether hover materialisation works should drive the same function the
      // pointer does, not re-implement it.
      syncLazyEdges,
      get lazyEdges() {
        return lazyEdges;
      },
      // The page's own definition of unlinked. A check that re-derives it from
      // graph.degree gets a different answer in a budgeted vault, where a note
      // whose links were all trimmed has degree 0 and is not unlinked at all.
      isOrphan,
      // The wedge overlay, and the numbers it draws. wedgeEdges() is the honest
      // answer to "where is this wedge", in the same screen-angle convention as
      // a node's atan2 -- a probe that re-derives it from lastStart is working in
      // sweep space and off by the half-gap rotation.
      wedgeDebug,
      wedgeEdges,
      // The locked band radii, in graph units -- what the boundary rays are
      // pinned at, and the number a unit slip in it silently disables.
      bandRef: function() {
        return geomLock ? geomLock.bandR : null;
      },
      // Every line the overlay draws, with its angle at one radius: the only way
      // to tell a line that is misplaced from a line that is missing.
      wedgeTrace: function(rLattice) {
        DBG.trace = [];
        DBG.traceR = rLattice;
        drawWedgeDebug();
        var out = DBG.trace;
        DBG.trace = null;
        return out;
      },
      // The raw captured cells, for diagnosing what the overlay drew: one entry
      // per CELL, which is one per sub-wedge, not one per folder.
      wedgeCells: function() {
        return (DBG.cells || []).map(function(c) {
          return {
            g: c.g,
            k: c.k,
            band: c.inner ? "i" : "o",
            seams: c.seams,
            f0: c.f0,
            f1: c.f1,
            pLead: c.pLead,
            pTrail: c.pTrail,
            n: (c.ids || []).length
          };
        });
      },
      // The two terms a wedge edge is made of, so a probe can decompose a
      // measured swing instead of guessing which one moved.
      seamDeg: function(bk) {
        return bandOf(bk).gapDeg || 0;
      },
      seamNB: function(bk) {
        return (bandOf(bk).nG || 0) + (bandOf(bk).nSub || 0);
      },
      clearAlpha,
      buildWedgePlan,
      // Both added after wanting them from a test page: applyLayout to
      // settle without waiting on rAF (which a hidden tab throttles,
      // making a working animation look like a no-op), and
      // isHighlighted to check the predicate directly.
      applyLayout,
      isHighlighted,
      // Logo internals: placeLogo has to be callable directly, because
      // refresh() only schedules a render and a tab that is not being
      // composited never runs one -- so testing the mark through the
      // renderer silently measures a stale DOM.
      placeLogo,
      ringColors,
      // Folder colours, for the two settings UIs and for the suite. The
      // setter repaints rather than rebuilds -- colour is not an input to
      // the layout, and an override must not be able to move a node.
      palette: paletteInfo,
      groupOrder: function() {
        return (order[state.dim] || []).slice();
      },
      groupCount: function(g) {
        return counts[g] || 0;
      },
      colorOf,
      // The slot a group is ON, which is not derivable from its position any
      // more: archives are skipped in the rotation, and sit on no slot at
      // all. "" means exactly that.
      slotOf: function(g) {
        return groupSlot[g] || "";
      },
      isArchiveGroup: isArchiveGroup2,
      get folderColors() {
        return Object.assign(/* @__PURE__ */ Object.create(null), folderColors);
      },
      setFolderColors: applyFolderColors,
      // Visibility DEFAULTS. Setting these does not move the live filter --
      // the host is expected to apply them, which is what setHiddenDefaults
      // is for.
      get folderShown() {
        return Object.assign(/* @__PURE__ */ Object.create(null), folderShown);
      },
      setFolderShown: applyFolderShown,
      // The saved default, applied live. Mirrors setFolderShown: the host owns
      // the store and this owns the camera.
      setPanEnabled: function(v) {
        return setPan(v !== false, false);
      },
      get panEnabled() {
        return panEnabled;
      },
      hiddenByDefault,
      // Push the defaults into the live filter and repaint. This is the
      // "and now show it" half, kept separate so loading saved settings at
      // boot cannot be confused with a person clicking an eye.
      applyHiddenDefaults: function() {
        seedHidden();
        buildLegend();
        cascade(null, { colToggle: true });
      },
      // The band, for the same reason placeLogo is exposed: it paints
      // from afterRender, so a tab that is not being composited never
      // repaints it and testing through the renderer measures a stale
      // canvas.
      heatBuild,
      heatDraw,
      get heat() {
        return heat;
      },
      // Live, for the same reason radialEase and subGap are: the cell
      // size trades how legible the mosaic inside one square is against
      // how much of the stage the band takes from the disc, and that is
      // a looking-at-it decision, not a derivable one. The cap is what
      // moves; the floor and the width still decide the actual size, so
      // a narrow window is unaffected.
      get heatCell() {
        return HEAT_CELL_MAX;
      },
      set heatCell(v) {
        HEAT_CELL_MAX = Math.max(HEAT_CELL_MIN, +v || HEAT_CELL_MAX);
        heatBuild();
      },
      heatReport: function() {
        if (!heat) return "not built";
        heatCompute();
        var lv = [0, 0, 0, 0, 0], nz = 0, top = null;
        heat.keys.forEach(function(k) {
          var d = heat.days[k];
          if (d.n <= 4e-3) return;
          nz++;
          lv[heatLevel(d.n)]++;
          if (!top || d.n > top.n) top = { day: k, n: Math.round(d.n) };
        });
        var out = {
          cell: heat.cell,
          cols: heat.cols,
          canvas: heat.w + "x" + heat.h,
          cuts: heat.cuts,
          nMax: heat.nMax,
          daysWithNotes: nz,
          byLevel: lv,
          blocksAtBusiest: heat.days[top ? top.day : ""] ? heat.days[top.day].parts.length : 0,
          pxPerNoteAtBusiest: top ? +(heat.cell * heat.cell / top.n).toFixed(2) : null,
          busiest: top,
          inWindow: heat.keys.reduce(function(a, k) {
            return a + heat.days[k].ids.length;
          }, 0),
          earlier: heat.before,
          later: heat.after,
          undated: heat.undated,
          markDay: state.markDay,
          hoverDay: state.hoverDay
        };
        return out;
      },
      bandColors,
      outerPresence,
      get planMs() {
        return planMs;
      },
      get fullRing() {
        return fullRing;
      },
      set fullRing(v) {
        fullRing = v;
      },
      get timeScale() {
        return TIME_SCALE;
      },
      set timeScale(v) {
        TIME_SCALE = +v > 0 ? +v : 1;
      },
      // Spacing knobs, live. Same motive as timeScale: these three
      // trade edge collisions against interior ones against how much
      // whitespace the disc carries, and that balance is only findable
      // by measuring, not by reasoning. Setting any of them needs
      // bandLock cleared, since pads feed the row counts.
      // How far a note closes the gap to its target RADIUS per frame.
      // 1 = follow exactly. Below 1 it smooths a row-count TICK, which
      // the code above wrongly assumed no longer existed. Live, so it
      // can be swept against the probe.
      get radialEase() {
        return RADIAL_EASE;
      },
      set radialEase(v) {
        RADIAL_EASE = +v > 0 ? Math.min(1, +v) : 1;
      },
      get subGap() {
        return SUB_GAP;
      },
      set subGap(v) {
        SUB_GAP = +v;
      },
      get edgePadArc() {
        return EDGE_PAD_ARC;
      },
      set edgePadArc(v) {
        EDGE_PAD_ARC = +v;
      },
      get edgePadMax() {
        return EDGE_PAD_MAX;
      },
      set edgePadMax(v) {
        EDGE_PAD_MAX = +v;
      },
      // ZERO-WEIGHT INVARIANCE. The strongest of the plan guarantees, and the
      // one that actually catches this class of bug: **a member with no weight
      // must not change any output.**
      //
      // The cascade and the resting path legitimately disagree on MEMBERSHIP --
      // a departing note is still in the plan while it fades, and gone once it
      // has -- so they can never be made identical. What must hold instead is
      // that the extra zero-weight members cost nothing. They did not: the gap
      // count counted GROUPS PRESENT rather than weight present, so handing over
      // from one membership set to the other moved every wedge by one 2-degree
      // gap. Measured, one isolated frame of 33 graph units / 6 screen px after
      // the animation had already converged.
      //
      // This compares the plan over visible notes against the same plan with
      // every hidden note added back at weight 0. Every cell's rows and maxR must
      // be identical.
      checkZeroWeightInvariance: function() {
        var W = function(id) {
          return visible(id) ? 1 : 0;
        };
        var save = planKeep;
        planKeep = function(id) {
          return visible(id);
        };
        var lean = buildWedgePlan(true, W);
        planKeep = function() {
          return true;
        };
        var padded = buildWedgePlan(true, W);
        planKeep = save;
        var rows = function(p) {
          var m = {};
          p.cells.forEach(function(c) {
            m[c.k] = c.rows;
          });
          return m;
        };
        var a = rows(lean), b = rows(padded), diffs = {};
        Object.keys(a).concat(Object.keys(b)).forEach(function(k) {
          if ((a[k] || 0) !== (b[k] || 0)) {
            diffs[k] = { withoutZeros: a[k] || 0, withZeros: b[k] || 0 };
          }
        });
        var out = {
          leanMaxR: Math.round(lean.maxR),
          paddedMaxR: Math.round(padded.maxR),
          maxRMatches: Math.round(lean.maxR) === Math.round(padded.maxR),
          cellsLean: lean.cells.length,
          cellsPadded: padded.cells.length,
          rowDiffs: diffs,
          invariantOK: Object.keys(diffs).length === 0 && Math.round(lean.maxR) === Math.round(padded.maxR)
        };
        return out;
      },
      // DENSITY. The question github#13 is about: does the disc that is on
      // screen depend on how many notes are on screen, or on how many the
      // vault happens to hold? Everything here is measured, not planned --
      // the plan is what the layout intends, and after a cascade the two
      // agree while during one they do not.
      //
      // pitchPx is the whole point. It is one lattice row in SCREEN pixels,
      // which is what decides whether two notes in a column touch, and with
      // the normalisation box pinned and the camera still it is invariant to
      // note count by construction -- so it reads the same at 1500 notes and
      // at 500, which is the bug.
      //
      // pitchRoot is that made scale-free: if a filtered disc were to refill
      // its box, area per note would scale as 1/n and pitch as its root, so
      // pitchPx * sqrt(shown) would hold still across every filter state.
      // That product is the invariant, and it does not need a second vault to
      // compare against.
      densityReport: function() {
        var shown = 0, lit = 0, shownI = 0, shownO = 0;
        graph.forEachNode(function(id) {
          if (visible(id)) {
            shown++;
            if (bandLock && bandLock[groupOf(id)]) shownI++;
            else shownO++;
          }
          if ((alpha[id] || 0) > 4e-3) lit++;
        });
        var pitchPx = null, pitchPxI = null, unitPx = null, discPx = null;
        if (renderer) {
          var a = renderer.graphToViewport({ x: 0, y: 0 });
          var u = renderer.graphToViewport({ x: UNIT, y: 0 });
          unitPx = Math.hypot(u.x - a.x, u.y - a.y);
          var b = renderer.graphToViewport({ x: UNIT * (bandOf("o").sp || 1), y: 0 });
          pitchPx = Math.hypot(b.x - a.x, b.y - a.y);
          var bi = renderer.graphToViewport({
            x: UNIT * (bandOf("i").sp || 1) * bandScale("i"),
            y: 0
          });
          pitchPxI = Math.hypot(bi.x - a.x, bi.y - a.y);
          var e = renderer.graphToViewport({ x: (lastMaxR || 0) * UNIT, y: 0 });
          discPx = Math.hypot(e.x - a.x, e.y - a.y);
        }
        var sizes = [];
        if (renderer) {
          graph.forEachNode(function(id) {
            if (!visible(id)) return;
            var d = renderer.getNodeDisplayData(id);
            if (d && d.size > 0) sizes.push(d.size);
          });
          sizes.sort(function(x, y) {
            return x - y;
          });
        }
        var med = sizes.length ? sizes[Math.floor(sizes.length / 2)] : null;
        var r3 = function(v) {
          return v === null ? null : Math.round(v * 1e3) / 1e3;
        };
        return {
          shown,
          lit,
          total: graph.order,
          // The locked geometry, and how much of it the notes reach.
          lockedMaxR: geomLock ? Math.round(geomLock.maxR) : null,
          liveMaxR: Math.round(lastMaxR || 0),
          reach: geomLock && geomLock.maxR ? r3((lastMaxR || 0) / geomLock.maxR) : null,
          r0: geomLock ? r3(geomLock.r0) : null,
          // The hole as a SHARE of what is drawn. The r0 formula exists to hold
          // this constant; pinning r0 while the disc shrinks is what breaks it.
          holeShare: lastMaxR ? r3((geomLock ? geomLock.r0 : 0) / lastMaxR) : null,
          sp: r3(bandOf("o").sp),
          unitPx: r3(unitPx),
          pitchPx: r3(pitchPx),
          // PITCH TIMES THE ROOT OF THE NOTE COUNT, and both PER BAND.
          //
          // The quantity that is conserved is sqrt(area): a band of fixed area
          // holding n notes on a square lattice has pitch sqrt(area/n), so
          // pitch * sqrt(n) is the band's own constant. Multiplying the OUTER
          // band's pitch by the WHOLE disc's note count -- which this reported,
          // and which was right when one spacing served both rings -- mixes two
          // bands, so hiding folders from one of them moves it for a reason that
          // is not a density change. The bands were made independent because a
          // single spacing made each ring answer for the other's filtering, which
          // was a reported bug; this is the same correction applied to its
          // measurement.
          shownInner: shownI,
          shownOuter: shownO,
          pitchPxInner: r3(pitchPxI),
          pitchRoot: pitchPx ? r3(pitchPx * Math.sqrt(Math.max(1, shown))) : null,
          pitchRootOuter: pitchPx ? r3(pitchPx * Math.sqrt(Math.max(1, shownO))) : null,
          pitchRootInner: pitchPxI ? r3(pitchPxI * Math.sqrt(Math.max(1, shownI))) : null,
          sizeScale: r3(sizeScale),
          sizeMedian: r3(med),
          sizeMin: r3(sizes.length ? sizes[0] : null),
          sizeMax: r3(sizes.length ? sizes[sizes.length - 1] : null),
          cameraRatio: r3(renderer ? renderer.getCamera().ratio : null)
        };
      },
      // PLAN PARITY. The cascade must animate between the static
      // planner's own outputs, or it walks between packings nothing else
      // renders -- which is every jump chased on 2026-08-22. This
      // compares, for the CURRENT visibility state, the plan the static
      // path builds against the one the cascade would end on. Per-cell
      // row counts and maxR must match exactly. Run it with a folder
      // hidden, not just at full vault, since the REPACK_BELOW flag is
      // what used to differ.
      checkPlanParity: function() {
        var shown = 0;
        graph.forEachNode(function(id) {
          if (visible(id)) shown++;
        });
        var ov = true;
        var stat = buildWedgePlan(ov, function(id) {
          return visible(id) ? 1 : 0;
        });
        var live = buildWedgePlan(ov, function(id) {
          return alpha[id] || 0;
        });
        var diffs = {};
        var rows = function(p) {
          var m = {};
          p.cells.forEach(function(c) {
            m[c.k] = c.rows;
          });
          return m;
        };
        var rs = rows(stat), rl = rows(live);
        Object.keys(rs).concat(Object.keys(rl)).forEach(function(k) {
          if (rs[k] !== rl[k]) diffs[k] = { staticPlan: rs[k], livePlan: rl[k] };
        });
        var out = {
          shown,
          threshold: Math.round(graph.order * REPACK_BELOW),
          onlyVisible: ov,
          staticMaxR: Math.round(stat.maxR),
          liveMaxR: Math.round(live.maxR),
          maxRMatches: Math.round(stat.maxR) === Math.round(live.maxR),
          cellsStatic: stat.cells.length,
          cellsLive: live.cells.length,
          rowDiffs: diffs,
          parityOK: Object.keys(diffs).length === 0 && Math.round(stat.maxR) === Math.round(live.maxR)
        };
        return out;
      },
      // Record each band's radial extent per animated frame. probe(true)
      // then toggle, then probeReport() -- it names the biggest single
      // frame step per band, which is what "a jump" actually is.
      probe: function(on) {
        probe = on === false ? null : {
          t0: NOW(),
          samples: [],
          prevAng: null,
          prevR: null,
          set: function() {
            var m = /* @__PURE__ */ Object.create(null);
            graph.forEachNode(function(id) {
              if ((alpha[id] || 0) >= 0.999) m[id] = 1;
            });
            return m;
          }(),
          watch: arguments.length > 1 ? String(arguments[1]) : null,
          watched: null,
          watchSeries: []
        };
        return probe ? "recording" : "off";
      },
      probeReport: function() {
        if (!probe || !probe.samples.length) return "nothing recorded -- call __vg.probe(true) first";
        var s = probe.samples, worst = { inner: 0, outer: 0 }, at = { inner: 0, outer: 0 };
        var tanWorst = 0, tanAt = 0, tanWho = null, ngWorst = 0, ngAt = 0;
        var startWorst = 0, startAt = 0, startG = null, overWorst = 0;
        for (var i = 1; i < s.length; i++) {
          var di = Math.abs(s[i].innerMax - s[i - 1].innerMax);
          var doo = Math.abs(s[i].outerMax - s[i - 1].outerMax);
          if (di > worst.inner) {
            worst.inner = di;
            at.inner = s[i].ms;
          }
          if (doo > worst.outer) {
            worst.outer = doo;
            at.outer = s[i].ms;
          }
          if (s[i].tanStep > tanWorst) {
            tanWorst = s[i].tanStep;
            tanAt = s[i].ms;
            tanWho = s[i].tanId;
          }
          var ds = 0, dsG = null;
          Object.keys(s[i].starts || {}).forEach(function(g) {
            var was = (s[i - 1].starts || {})[g];
            if (was === void 0) return;
            var dd = Math.abs(s[i].starts[g] - was);
            if (dd > 180) dd = 360 - dd;
            if (dd > ds) {
              ds = dd;
              dsG = g;
            }
          });
          if (ds > startWorst) {
            startWorst = ds;
            startAt = s[i].ms;
            startG = dsG;
          }
          var dng = Math.max(Math.abs(s[i].ngO - s[i - 1].ngO), Math.abs(s[i].ngI - s[i - 1].ngI));
          if (dng > ngWorst) {
            ngWorst = dng;
            ngAt = s[i].ms;
          }
        }
        var out = {
          frames: s.length,
          spanMs: s[s.length - 1].ms,
          // The per-note radial worst, and the mean note's move. This is the
          // radial counterpart of tanMaxStep and the number to judge a jump by;
          // the band extents below are kept for context but are a max over a
          // churning set, so their step is not a step in the disc.
          radMaxStep: function() {
            var w = 0, who = null, when = 0;
            for (var j = 0; j < s.length; j++) {
              if (s[j].radStep > w) {
                w = s[j].radStep;
                who = s[j].radId;
                when = s[j].ms;
              }
            }
            return { step: w, node: who, atMs: when };
          }(),
          radMeanStep: function() {
            var t = 0, k = 0;
            for (var j = 0; j < s.length; j++) {
              t += s[j].radMean || 0;
              k++;
            }
            return Math.round(k ? t / k : 0);
          }(),
          innerMaxStep: worst.inner,
          innerStepAtMs: at.inner,
          outerMaxStep: worst.outer,
          outerStepAtMs: at.outer,
          // HOW FAR EACH BAND WENT IN TOTAL. A per-frame step means nothing
          // on its own: a smooth animation over a long distance and a snap
          // over a short one produce the same number. Reported so a caller
          // can ask the only question that scales -- is this frame's move a
          // reasonable multiple of the average frame's share of the trip.
          // Needed once the lattice spacing began following the visible count
          // (github#13), which made a range cascade travel much further.
          innerTravel: Math.abs(s[s.length - 1].innerMax - s[0].innerMax),
          outerTravel: Math.abs(s[s.length - 1].outerMax - s[0].outerMax),
          // AND THE PATH, which is the honest denominator. Travel is net, so a
          // band that moves out and part-way back reports less than it went --
          // and comparing a frame's step against a net figure then flags a
          // smooth animation whose target was moving. The path is the sum of
          // the steps, so path / frames is the mean frame, and a frame can be
          // judged as a multiple of that.
          innerPath: function() {
            var t = 0;
            for (var j = 1; j < s.length; j++) t += Math.abs(s[j].innerMax - s[j - 1].innerMax);
            return Math.round(t);
          }(),
          outerPath: function() {
            var t = 0;
            for (var j = 1; j < s.length; j++) t += Math.abs(s[j].outerMax - s[j - 1].outerMax);
            return Math.round(t);
          }(),
          // The tangential jump, and the gap reservation behind it.
          tanMaxStep: tanWorst,
          tanStepAtMs: tanAt,
          tanStepNode: tanWho,
          // The handover frame, called out on its own: settle() replacing
          // the interpolation with a fresh rest computation.
          settleStep: function() {
            for (var j = 1; j < s.length; j++) {
              if (s[j].tag === "settled") {
                return {
                  tan: s[j].tanStep,
                  over: s[j].tanOver,
                  mean: s[j].tanMean,
                  ngBefore: s[j - 1].ngO,
                  ngAfter: s[j].ngO,
                  startsMoved: function() {
                    var m = 0, g = null, a = s[j].starts || {}, b = s[j - 1].starts || {};
                    Object.keys(a).forEach(function(k) {
                      if (b[k] === void 0) return;
                      var d = Math.abs(a[k] - b[k]);
                      if (d > 180) d = 360 - d;
                      if (d > m) {
                        m = d;
                        g = k;
                      }
                    });
                    return { deg: Math.round(m * 1e3) / 1e3, group: g };
                  }()
                };
              }
            }
            return null;
          }(),
          // A wedge boundary moving in one step IS the gap jumping.
          startMaxStep: Math.round(startWorst * 1e3) / 1e3,
          startStepAtMs: startAt,
          startStepGroup: startG,
          ngMaxStep: Math.round(ngWorst * 1e3) / 1e3,
          ngStepAtMs: ngAt,
          first: s[0],
          last: s[s.length - 1],
          samples: s,
          watch: probe.watch,
          watchSeries: probe.watchSeries
        };
        return out;
      },
      // What is ACTUALLY pushed and haloed right now, grouped by full
      // path, plus the highlight keys that are set. Reading the code was
      // not enough to settle whether a depth-2 selection pushes: every
      // write path stores the clicked path and isPushed only reads
      // pathKey(a,1), yet the movement is visible. Click the row, then
      // run this -- if PUSHED is 0 the movement is coming from somewhere
      // other than the highlight, and the paths tell us where.
      pushReport: function() {
        var pushed = [], haloed = [];
        graph.forEachNode(function(id) {
          if (isPushed(id)) pushed.push(id);
          if (isHighlighted(id)) haloed.push(id);
        });
        var byPath = function(ids) {
          var m = /* @__PURE__ */ Object.create(null);
          ids.forEach(function(id) {
            var a = graph.getNodeAttributes(id);
            var k = a.folder + "/" + (a.dirs || []).join("/");
            m[k] = (m[k] || 0) + 1;
          });
          return m;
        };
        var out = {
          highlightSubKeys: Object.keys(state.highlightSub),
          highlightGroups: Object.keys(state.highlight),
          pushedCount: pushed.length,
          pushedByPath: byPath(pushed),
          haloedCount: haloed.length,
          haloedByPath: byPath(haloed)
        };
        return out;
      },
      // The demo, as data plus two questions about the page. The driver
      // lives in scripts/demo.mjs and does the input through CDP; nothing
      // in here clicks anything.
      demo: demoApi,
      // The hover tween, for measuring it. Everything visible about a
      // hover is a function of hoverT, so a ramp that is wrong is only
      // findable by sampling it -- reading the reducers proves nothing.
      get hoverT() {
        return hoverT;
      },
      get hoverBusy() {
        return !!hoverRaf;
      },
      // The highlight ramp, per note. Same motive as hoverT: the size and
      // the ring are functions of it, so a ramp that is wrong is only
      // findable by sampling it.
      hl,
      get hlBusy() {
        return !!hlRaf;
      },
      // Re-derive the locked geometry, then settle. Needed after any of
      // the above, because r0/rOuter/band membership are locked at load.
      // The date range, for the suite and the shooter.
      get dateSpan() {
        return dateSpan;
      },
      setRange: function(fromISO, toISO) {
        state.from = fromISO ? heatParse(fromISO) : null;
        state.to = toISO ? heatParse(toISO) : null;
        applyRange();
        heatDraw();
      },
      setHeatEnd: function(iso) {
        state.heatEnd = iso ? heatParse(iso) : null;
        heatBuild();
        drawDateUI();
        heatDraw();
      },
      lastCascade: function() {
        return lastCascade;
      },
      // The gap the LAST layout pass actually spent, per band. The probe
      // reports this per frame during an animation; a resting disc has no
      // frames, and "do two rest states agree about the gap" is the whole
      // question behind a jump at the end of one.
      // Where the strip puts a date, for checking the year buttons line up.
      ribbonXOf: function(ms) {
        return ribbonX(ms, ribbonW());
      },
      /**
       * The two ends the strip is DRAWING, and where they are on it.
       *
       * Not state.from/state.to: a drag and the intro's sweep are both previews
       * that deliberately leave state alone, so state cannot answer "where is
       * the handle". This is brushEnds() -- the one thing drawRibbon reads --
       * so a check of the sweep is a check of the pixels rather than of a
       * variable that happens to be nearby.
       */
      brushNow: function() {
        if (!dateSpan) return null;
        var w = ribbonW(), e = brushEnds();
        return {
          from: e[0],
          to: e[1],
          fromISO: isoDay(e[0]),
          toISO: isoDay(e[1]),
          x0: ribbonX(e[0], w),
          x1: ribbonX(e[1], w),
          w,
          sweeping: brushSweep !== null
        };
      },
      /**
       * EVERYTHING NEEDED TO REPRODUCE WHAT IS ON SCREEN, as one object.
       *
       * Reporting a layout problem by describing it costs a round trip per
       * unknown -- which folders were hidden, what the range was, how deep each
       * band was, what the spacing came out as. Most of this session's
       * measurements were a probe written to answer one of those and then thrown
       * away. This is those probes, kept, behind a button.
       *
       * Measured off the LIVE state, not the plan: what matters is the disc a
       * person is looking at, and the two have disagreed more than once.
       */
      debugDump: function() {
        var a0 = renderer ? renderer.graphToViewport({ x: 0, y: 0 }) : null;
        var b0 = renderer ? renderer.graphToViewport({ x: UNIT, y: 0 }) : null;
        var pxPerRow = a0 && b0 ? Math.hypot(b0.x - a0.x, b0.y - a0.y) : 0;
        var perPx = pxPerRow > 0 ? UNIT / pxPerRow : 0;
        var pts = [];
        graph.forEachNode(function(id, a) {
          if ((alpha[id] || 0) <= 4e-3) return;
          var d = renderer && renderer.getNodeDisplayData(id);
          pts.push({
            r: Math.hypot(a.x, a.y),
            th: Math.atan2(a.y, a.x),
            rad: (d && renderer ? renderer.scaleSize(d.size) : 4) * perPx,
            g: a.folder
          });
        });
        pts.sort(function(x, y) {
          return x.r - y.r;
        });
        var gi = 0, gap = 0;
        for (var i = 1; i < pts.length; i++) {
          var gg = pts[i].r - pts[i - 1].r;
          if (gg > gap) {
            gap = gg;
            gi = i;
          }
        }
        var r3 = function(v) {
          return Math.round(v * 1e3) / 1e3;
        };
        var bandStat = function(arr) {
          if (!arr.length) return null;
          var rows = {}, steps = [], clears = [], worst = 1e9;
          arr.forEach(function(q2) {
            var k = Math.round(q2.r / 8) * 8;
            (rows[k] || (rows[k] = [])).push(q2);
          });
          Object.keys(rows).forEach(function(k) {
            var row = rows[k].slice().sort(function(x, y) {
              return x.th - y.th;
            });
            for (var i2 = 1; i2 < row.length; i2++) {
              var arc = (row[i2].th - row[i2 - 1].th) * +k;
              if (!(arc > 1 && arc < 3e3)) continue;
              steps.push(arc);
              var cl = arc - row[i2].rad - row[i2 - 1].rad;
              clears.push(cl);
              if (cl < worst) worst = cl;
            }
          });
          steps.sort(function(x, y) {
            return x - y;
          });
          var q = function(f) {
            return steps.length ? Math.round(steps[Math.floor(steps.length * f)]) : 0;
          };
          var radii = arr.map(function(x) {
            return x.rad;
          }).sort(function(x, y) {
            return x - y;
          });
          return {
            notes: arr.length,
            rows: Object.keys(rows).length,
            inner: Math.round(arr[0].r),
            outer: Math.round(arr[arr.length - 1].r),
            step35: q(0.35),
            step95: q(0.95),
            channelRatio: q(0.35) ? r3(q(0.95) / q(0.35)) : 0,
            dotRadius: {
              min: Math.round(radii[0]),
              med: Math.round(radii[Math.floor(radii.length / 2)]),
              max: Math.round(radii[radii.length - 1])
            },
            worstPairClearance: worst === 1e9 ? null : Math.round(worst),
            overlappingPairs: clears.filter(function(c) {
              return c < 0;
            }).length
          };
        };
        var cam = renderer ? renderer.getCamera().getState() : null;
        var hidden2 = Object.keys(state.hidden[state.dim] || {}).filter(function(k) {
          return (state.hidden[state.dim] || {})[k];
        });
        return {
          note: "vault-graph debug dump -- paste this back verbatim",
          vault: {
            name: DATA.vault || "",
            notes: graph.order,
            // EDGE_TOTAL, not graph.size: in a budgeted vault the graph
            // holds only the resting share, and a dump that said
            // "links: 8027" about a 37k-link vault would send whoever
            // reads it in the wrong direction. linksShown is the budget.
            links: EDGE_TOTAL,
            linksShown: EDGE_SHOWN,
            lazyEdges,
            generated: DATA.generated || ""
          },
          screen: {
            win: WIN.innerWidth + "x" + WIN.innerHeight,
            dpr: WIN.devicePixelRatio || 1,
            stage: $("canvas") ? Math.round($("canvas").clientWidth) + "x" + Math.round($("canvas").clientHeight) : "",
            pxPerRow: r3(pxPerRow)
          },
          camera: cam ? { x: r3(cam.x), y: r3(cam.y), ratio: r3(cam.ratio) } : null,
          filters: {
            hiddenFolders: hidden2,
            hiddenSub: Object.keys(state.hiddenSub || {}),
            range: rangeLabel(),
            from: state.from,
            to: state.to,
            heatEnd: state.heatEnd,
            timelineUntil: state.until,
            markDay: state.markDay,
            shown: pts.length
          },
          // The room each band reports and the arc floor in force -- both feed
          // POSITIONS now, so a jump investigation needs to see them per frame.
          room: { i: r3(bandOf("i").room), o: r3(bandOf("o").room) },
          minArcDeg: r3(lastMinArc * 180 / Math.PI),
          spacing: {
            spOuter: r3(bandOf("o").sp),
            spInner: r3(bandOf("i").sp),
            rowsOuter: bandOf("o").rows,
            rowsInner: bandOf("i").rows,
            pitchOuterUnits: r3(pitchUnits("o")),
            pitchInnerUnits: r3(pitchUnits("i"))
          },
          seam: {
            outerDeg: bandOf("o").gapDeg,
            innerDeg: bandOf("i").gapDeg,
            nGOuter: bandOf("o").nG,
            nGInner: bandOf("i").nG,
            nSubOuter: bandOf("o").nSub,
            nSubInner: bandOf("i").nSub,
            fallOuter: r3(seamFall("o")),
            fallInner: r3(seamFall("i"))
          },
          locked: geomLock ? {
            r0: r3(geomLock.r0),
            rOuter: r3(geomLock.rOuter),
            maxR: r3(geomLock.maxR),
            rows: geomLock.rows,
            bandTotal: geomLock.bandTotal
          } : null,
          bands: { inner: bandStat(pts.slice(0, gi)), outer: bandStat(pts.slice(gi)) },
          dots: {
            ofPitch: r3(DOT_OF_PITCH),
            minPx: DOT_MIN_PX,
            maxSpread: DOT_MAX_SPREAD,
            m: r3(bandOf("o").ramp.m),
            b: r3(bandOf("o").ramp.b),
            lo: r3(bandOf("o").ramp.lo)
          }
        };
      },
      lastGap: function() {
        return {
          ngI: bandOf("i").nG,
          ngO: bandOf("o").nG,
          gapDegI: bandOf("i").gapDeg,
          gapDegO: bandOf("o").gapDeg
        };
      },
      rangeReport: function() {
        var lit = 0, dated = 0;
        var byYear = /* @__PURE__ */ Object.create(null);
        graph.forEachNode(function(id) {
          if ((alpha[id] || 0) > 4e-3) lit++;
          if (tlMs[id] !== void 0) {
            dated++;
            var y = new Date(tlMs[id]).getUTCFullYear();
            byYear[y] = (byYear[y] || 0) + 1;
          }
        });
        return {
          byYear,
          from: state.from,
          to: state.to,
          heatEnd: state.heatEnd,
          lit,
          dated,
          total: graph.order,
          label: rangeLabel()
        };
      },
      relayout: function() {
        bandLock = null;
        geomLock = null;
        regroup();
        applyLayout(false);
        renderer.refresh();
      }
    };
    buildTimeline();
    buildSearch();
    buildTools();
    buildStats();
    if (LOGO_MASK) {
      var mu = 'url("' + LOGO_MASK + '")';
      $("logo").style.webkitMaskImage = mu;
      $("logo").style.maskImage = mu;
      var fade = "radial-gradient(circle at 50% 50%, #000 " + LOGO_INNER_FADE.split(",")[0].trim() + ", transparent " + LOGO_INNER_FADE.split(",")[1].trim() + ")";
      var eli = $("logoInner");
      eli.style.webkitMaskImage = mu + ", " + fade;
      eli.style.maskImage = mu + ", " + fade;
      logoMaskReady = true;
      logoMaskImg = new Image();
      logoMaskImg.src = LOGO_MASK;
    }
    regroup();
    buildHeatmapUI();
    heatBuild();
    buildDateUI();
    fit();
    syncSizeScale();
    var hidden = DOC ? typeof DOC.visibilityState === "string" ? DOC.visibilityState === "hidden" : !!DOC.hidden : false;
    if (hidden && !demoOn() && !restOn()) introOwed = true;
    if (demoOn() || restOn() || hidden) {
      timelineFrame(true);
    } else {
      playTimeline();
    }
    $("busy").hidden = true;
  }, 20);
  return { get api() {
    return API;
  }, get ready() {
    return API !== null;
  } };
}

// plugin/main.js
var import_graphology_umd_min = __toESM(require_graphology_umd_min());
var import_sigma_min = __toESM(require_sigma_min());

// src/dates.mjs
var ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
function isRealDay(s) {
  if (!ISO_DAY.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === d;
}
function day10(v) {
  if (v instanceof Date && !isNaN(v.getTime())) return localDay(v.getTime());
  const s = typeof v === "string" ? v.slice(0, 10) : "";
  return isRealDay(s) ? s : "";
}
function localDay(ms) {
  const d = new Date(ms), p2 = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate());
}
var NAME_DAY = /^(\d{4}-\d{2}-\d{2})(?![\d-])/;
function nameDay(basename) {
  const m = NAME_DAY.exec(String(basename || ""));
  return m && isRealDay(m[1]) ? m[1] : "";
}
function stampDay(ctimeMs, mtimeMs) {
  const c = Number(ctimeMs) || 0, m = Number(mtimeMs) || 0;
  const pick = c && m ? Math.min(c, m) : c || m;
  return pick ? localDay(pick) : "";
}
function resolveCreated(fm, basename, ctimeMs, mtimeMs) {
  const f = day10(fm && fm.created) || day10(fm && fm.date);
  if (f) return { day: f, source: "frontmatter" };
  const n = nameDay(basename);
  if (n) return { day: n, source: "filename" };
  const s = stampDay(ctimeMs, mtimeMs);
  if (s) return { day: s, source: "stamp" };
  return { day: "", source: "none" };
}
function dateTally() {
  return { frontmatter: 0, filename: 0, stamp: 0, none: 0 };
}

// raw::C:\git-personal\vault-graph\src\page.html
var page_default = `<div id="vg-app" class="vault-graph" data-theme="dark">
  <aside id="vg-sidebar">
    <div class="brand">
      <h1 id="vg-vname">Vault Graph</h1>
      <!-- Hidden until a host opts in, and TWO different deps opt in -- which is worth
           saying plainly here, because this comment used to name only one and was read
           (by its own author, out loud, wrongly) as "the plugin has no gear". Both hosts
           show it; they differ in what it OPENS.

             settingsUI      the gear opens the panel below, #vg-settings. The STANDALONE
                             sets this, because nothing else there can hold a setting.
             openSettings()  the gear hands its click to the host. The PLUGIN sets this,
                             and Obsidian's own settings tab opens -- the same setting
                             behind two UIs in one product is how the two drift apart.

           So the swatch panel below is standalone-only, which is also why the demo
           storyboard can click through it: the demo records the standalone page. See the
           deps table at the top of page.js, which had this right. -->
      <button id="vg-gear" class="gear" hidden aria-expanded="false"
              aria-controls="vg-settings" title="Settings">
        <span aria-hidden="true">&#9881;</span><span class="sr">Settings</span>
      </button>
    </div>

    <div class="block" id="vg-settings" hidden>
      <div class="row" style="margin-bottom:7px">
        <div class="lbl" style="margin:0">Folder colours</div>
        <div class="mini"><button id="vg-fcreset" title="Drop every override and go back to the automatic order">Reset</button></div>
      </div>
      <div id="vg-setbody"></div>
      <p class="hint">Twelve slots, handed out in folder order and round again. Setting
        one folder never moves another, and two folders may share a colour.</p>
    </div>

    <div class="block">
    </div>

    <div class="block">
      <div class="lbl">Search</div>
      <input type="search" id="vg-q" placeholder="Find a note...">
      <div id="vg-hits"></div>
    </div>

    <div class="block">
      <div class="row" style="margin-bottom:7px">
        <div class="lbl" style="margin:0">Groups <span id="vg-gcount" class="val"></span></div>
        <div class="mini"><button id="vg-allon">All</button><button id="vg-alloff">None</button></div>
      </div>
      <div id="vg-legend"></div>
    </div>

    <div class="block">
      <div class="lbl">View</div>
      <div class="tools">
        <button id="vg-refresh" title="Back to the defaults, and replay the intro. Clears highlights and the date range, and returns each folder to the visibility set in the gear -- so archives go back to hidden. This page is a snapshot -- its data was baked in when it was built -- so to pick up notes written since, rebuild it with refresh-graph.ps1 (or build-graph.mjs). The Obsidian plugin rebuilds in place instead.">Refresh</button>
        <button id="vg-png">Save PNG</button>
        <!-- Dumps the exact state to the clipboard: filters, spacing, seam, per-band
             geometry and dot sizes. For pasting into a bug report rather than describing it. -->
        <button id="vg-dbg" title="Copy the exact layout state, for a bug report">Debug</button>
      </div>
    </div>

    <div id="vg-stats"></div>
  </aside>

  <main id="vg-stage">
    <!-- Notes added per day, above the disc. Its own grid row, so the disc is
         centred in what is left rather than being overlapped. -->
    <div id="vg-heat">
      <div class="hrow">
        <div class="lbl">Notes added</div>
        <span id="vg-heatnote"></span>
        <div id="vg-heatscale" aria-hidden="true">
          <span>fewer</span><canvas id="vg-heatkey"></canvas><span>more</span>
        </div>
        <!-- THE RANGE LIVES UP HERE, beside the counts it qualifies, so the strip below is
             nothing but the strip: a row of its own under the ribbon cost 22px of the disc
             for two things nobody looks at except when they are already looking here.

             AT THE END OF THE ROW, and as one group. It was loose in the middle, between the
             prose and the legend, where it read as a third unrelated thing rather than as
             the control it is. Three items that act on one filter belong together, and the
             end of the row is the one place a group can grow without pushing anything about.

             REAL DATE FIELDS, not a readout. They were text, so the only way to set a range
             was to find and drag a handle -- fine for browsing, useless for "just show me
             2024". A native picker also brings a calendar, keyboard entry and the locale's
             own date order for free, none of which is worth reimplementing on a canvas. -->
        <div id="vg-rangebox">
          <input id="vg-from" class="dt" type="date" aria-label="Range start">
          <span class="arw" aria-hidden="true">&rarr;</span>
          <input id="vg-to" class="dt" type="date" aria-label="Range end">
          <button id="vg-rangeall" class="btn" title="Clear the date range">All dates</button>
        </div>
      </div>
      <div id="vg-heatwrap"><canvas id="vg-heatc"></canvas></div>
      <!-- The whole history, brushable. The band above is a 52-week window onto whatever
           this selects. -->
      <canvas id="vg-ribbon"></canvas>
      <!-- THE YEARS ARE BUTTONS, not text painted on the strip above. They were canvas, which
           meant hit-testing a pixel band by hand, no keyboard, no focus ring, no hover state
           the browser could give us -- and a control that only a mouse can reach is half a
           control. Positioned per year against the same scale the strip uses. -->
      <div id="vg-years"></div>
      <div id="vg-rtip" hidden></div>
      <div id="vg-htip" hidden></div>
    </div>

    <div id="vg-canvas">
      <!-- Before #graph on purpose: the canvases then paint OVER the logo, so if an
           unlinked note is ever sunflower-packed into the hub hole it draws on top of
           the logo rather than being hidden behind it. (This vault currently has 0
           unlinked notes, so the hole is empty -- but that is data, not a guarantee.) -->
      <div id="vg-logo" aria-hidden="true" hidden></div>
      <!-- Two-ring mode only: the inner band's palette, masked to the middle of the mark
           so it fades out into the outer band's colours. Same logo mask, intersected
           with a radial fade. -->
      <div id="vg-logoInner" aria-hidden="true" hidden></div>
      <div id="vg-graph"></div>
      <!-- CAMERA CONTROLS, in the corner of the STAGE rather than in the sidebar, because
           they answer questions you have while looking at the graph -- "closer", "how do I
           get back" -- and the sidebar is not where you are looking when you have them.
           github#4 asked for the cluster, and it REPLACES the Fit button in View: one
           place to look rather than two doing the same job.

           BOTTOM right, not top: the detail card owns the top-right corner, and a control
           that moves out of a panel's way is a moving target. The card yields instead --
           see --controls-h in page.css.

           Order is deliberate. Zoom is the pair reached for most, so it sits furthest from
           the corner and is easiest to hit twice; pan is a MODE rather than an action, so
           it sits apart at the bottom, where a mode switch belongs. -->
      <div id="vg-cam" role="group" aria-label="View controls">
        <button id="vg-zin" type="button" title="Zoom in" aria-label="Zoom in">
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false">
            <path d="M8 3.5v9M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.6"
                  stroke-linecap="round"/>
          </svg>
        </button>
        <button id="vg-zout" type="button" title="Zoom out" aria-label="Zoom out">
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false">
            <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.6"
                  stroke-linecap="round"/>
          </svg>
        </button>
        <button id="vg-reset" type="button" title="Fit the disc (or double-click the graph)"
                aria-label="Fit the disc">
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false">
            <path d="M1.5 5.5V2.5a1 1 0 0 1 1-1h3M14.5 5.5V2.5a1 1 0 0 0-1-1h-3M1.5 10.5v3a1 1 0 0 0 1 1h3M14.5 10.5v3a1 1 0 0 1-1 1h-3"
                  fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8" cy="8" r="1.6" fill="currentColor"/>
          </svg>
        </button>
        <!-- A MODE, so it carries aria-pressed and fills when on. On by default; the gear
             holds that default, so a vault where dragging gets in the way can start with
             it off. -->
        <button id="vg-pan" type="button" aria-pressed="true"
                title="Drag to pan. Off pins the disc to the centre."
                aria-label="Drag to pan">
          <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false">
            <path d="M8 2v12M2 8h12M8 2 6.4 4M8 2l1.6 2M8 14l-1.6-2M8 14l1.6-2M2 8l2-1.6M2 8l2 1.6M14 8l-2-1.6M14 8l-2 1.6"
                  fill="none" stroke="currentColor" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div id="vg-tip" hidden></div>
      <div id="vg-detail" hidden></div>
    </div>

    <div id="vg-busy">Laying out graph...</div>
  </main>
</div>
`;

// b64::C:\git-personal\vault-graph\assets\logo-mask.png
var logo_mask_default = "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAJ95SURBVHhe7b0HvGZVdff/T31jiUrvHaQjIgICih0VK4q9a4wxxsQaC0ajsURjNEYNtmjU5FWMGmMLRsEkig0FcaQMDDN3yu3l6c85Z5fn//muvdZ59j3zzDD4KiK5289xLvc+zzn77L3W2qv+1v/3/62NtbE21sbaWBtrY22sjbWxNtbG2lgba2Nt3F7GaDSqr7WxNv5XjZz415hgbfyvGE2CXyP6tfFzjV8nAmoSfPNaG2vjFo9fJyJqzrV5rY21scujSTzN67Y4mnPc2bU21saqceGFF/7GZz7zmd8cjUa/eemll/7WD3/4w9/mWnfxxb/zlfXrf/crX/nK765bt+53Lr744t/h7/rZ3/hVE5U9m/nYvJnr+vXrZb42Z35/0UUX/Taf4R1l/hdeKPNfG/9LR044l1566f9Zt27dnb73ve/9/pVXXnnXdevW7XbNNdfsvn79+j3XrVu3z4arr977x+vX78nvrtiw4S7rLlt3pyuuuOIOl19++e/pd38HwvplExT3v3A0EmZl3jx348aNMvf169f/PvO2OV9zzTX78u9VV121F7/fsGHDXXg/PnvVVVfdkbnD4MbMzWetjdvJaBz/v2GEAwFDEFdfffXdIJJrr712vxtuuOHAqampwzZu3HjM1NTUcZs3bz5+y5YtJ83MzBzP77betPXu119//WHr168/YNOmTftu2LBhbwgOxrj22mvvjKTlNPllnAw2d6Q7BLzhiivuct111+3BvDdu3HjIhg1bj9q2bdvR09PTx27evPmELVu2nMjcufR9Dt903XWHMndjDGXy37/qkkvuyMkx+sxnftPmvzZuJyMR4oW/AXEirWXDr7pqrxt+esOBmzdvPmLTpk3Hbt269R7T09P3mp2dPX1hYeGc+fn581ZWVh67uLj4+KWlpScuLi4+bn5+/hFLc3Pnzs7OPnBubu4+i7Ozp89s2XIa34XwbvrZzw7evHnzbhAnz1F14/+JmHKmRdIzdxgORt2yZcuRs7OzJ26Z3XL6/Pz8fZnX4uzig5eXl89bWlp6QqvVelKr1Xry0sLCU1ZWVh4zNzf3kPn5+fvNzMww55NhjOlNm45dv3794TARpwRzhxF4HozQnM/a+DUamRT+TSQ+m4vEu+mm6YO3bt0I0Z65sLDwwIWFhUevrKw8r9frXVgUxXurqvp0VVXfcM5d4Zxb55z7mauqq51z33fOfassyy8VRfGxwWDwrk6n85qVlZXnLCwsPHJpbu4+MzMzx23atOnQjRs37oPKsXnz5t8bjUY1Md2SU0E/+1vcg3shtWHYubm5k5aWls5YXFx8cKvVuqDd7f7JsD98U1EUHyjL6l+rqrrUOfcj59w1zrnreIeyLH9QluU3h8PhZ4aDwbt7vd4rVlZWnru4uPhYmGJ6evqUm2666e6cajACpxknjal1t2Tea+M2MNgsdFs1BO+km7rf3NzcEQvT0/daXl5+ZKvVetFwMHxPVVVfdc7d6L3vjW7B8CGU3vtZ59zlg8Hgg91u90VLS0vnzs/Pn42EhRFuvPHGvVQ3/51dVY1M6kOAED7MNDs7e9jc3Nw9lpeXz261lh7a6XSeWxbFe51z/+2cn/beF8357WjEGEfe+7b3fn1Zlv/e6/Vey0nHyQcjbN0qat7+GzduvCvM11Tr1savwYD41TjE+DsINQcVZ25u6T7tdvsZVVF92ns/BTHUhBHiKPjgvVzj4ZzLf+GCD84770MITaLaXBTFx/udzh+icizPz5/NicDzIabcUL6ZS+aOOrVt27aDsD8g/Ha7fV6/339RVVWfcs5N1Q8fjUbMJc3OLse89T/qf5g1P4XR+LX53tA7d2VRFO9rLbeeOjs7++DNmzffGwZG3YKBxT4YrTHBbX6wOeivGLg//vGP99ywYcNRc9u2nYn+3m63n4Pq4r2fzjY/J+5VhLGzoQRv34VDam5wzm0riuITnU7nhTDC0uzsGTMzM4dOTU3dTb1G2AZNoq/nPto2usP09PSefGdlZeUeKysr9+/1es+pqvJzIYRFe449X1g2Y8abG8w9MYcXRo7ZS3vnrh8MBu9rt9tPRzXCvrn22msP4SQy22CNAW6jIyd+VA+8IRiGGIP9fv+dzrkbbKMhGJXsqyjHe9/y3m8IIVwRQvhWCOErIYTPB+//PXh/afDhB977jU2VQ+gQonLj+3nnfjoYDP6i0+k8vr20dB/UmG3btu2xbdu2O6jrMSd+MXRROSD+hYWFo9vt9n16rda5g8Hg5d77n2bPMok+ae7Xe+8vDyF8Ocb4qRDCJ0IIMM7/hBDWBR82Bu+7je8pG+dz99/tdrsvWVxcfMj09PSpeJnEwL/kEgz8moHXxm1kGPFDQDdedeNeuP0WFxcfJLpyKZJTCNakZq76hBA2C4GH8Dbv/R9575/inHtMjPFc59yDnHMPcM492Dn3cOfced77p3rvX+Oce5/3/j+DD3M14dTEmUQyNkJZlu/udDqPa7cXT5ufnz+y3W7jesTARKWw6zdjjL/barV2a7fbR3Y6nfv1+/3Hl2X5XpP6mSo2JlTvp5TA36xzf4Jz7iFVVZ1dVdUZet3PRfcI7/0TvfdP996/Mrjwce/9d0MIK6vmnp0m3vtt/X7/LdhLeMdwo3Kqop79v3q31sYveJjRuPWaa3aH+DHo8OyUZflf+QZDRPwMA4QQfhRifHt07iFlWZ4cYzypLMsTY1EcMxwOD4sxHtjv9w+IMR4wGo0OicPhEUWMR8YYj4oxHl9V1SlVVd3HOff4EML7TbUS9Qht2wevz+2VZfm3vV4PHf407t0ate4GwePl4YKoWq3W3drt9lGDwUCIv6qqj4VQ30PUFXuXEMKPY4yvd849oqqqezP3oiiOHY1GMu8Y4/5cg8HgwMFocFCM8eAY4+Gj0ejoshzdQ+f90Bjjc5xzHwwhbK3nrkOfUw6Hw/+bXMIzpxEj0UAh9swaE9wWBpvAhqCnzk5N4S05q9vtPrUsy/+WTQ1CkIF/dZO3hBD+0jl3LsRTluVxMcYjhcgT4ewZY9xtNBrdbTQa3ZWL/44x7q4Xf993MBhBWEfGsjwZguJkCCF8yU4XoSIl2hBCxzn3puFweG6/37/XYDA4GIKfmZm5IyoRPw+Hw0MHg8HZg8HgiVVVfdCIUPV1u08RQ/iwc+6Bo9HoHmVZnhCLAoaEwPcdjUZ76Lzvohfzh9mYP/PeO8a433A4OiQxgzD+GdH7p4QQLvbeV825M4qi+HBrqXUuMQRiEHjW8A6tMcCveJjqMzc3d6ebbrrp4MXFxXuvrKycX1XVF4VgvBfVwTYy+HBZ9PHpVVWdGmM8QQkfQt5bCeXOo9HoDqPRiGN+Z9cd9LMQ3EEwUVVVp6EmhRDeHkJYqAlpTLxTVVX92XA4fFDRKY7t9/v7dzqdPVB7+LnX692z6Pcf7Zz7axhmwvc3ee9fhXpTluU9hPli5ITaUwn9TjovYg//hxMmu/gd73WnGOPvK5PsEfvC8NznxBir+4YQ3opKKM92PsB8+uzhcDh8u6pDJ2KnEFfBlmnuydq4FUZuPKL6zMzMYPTi3380np4YY4i4Bp0TfT8wnHt3rOIZSE0jepX0EAZHOhJNksV2cOV/E72d7yhx3UWZ6GhUIx/9M4L3m5pE7L3/QVEU6Pb3LIriyMFgcBBqSlEUfA+9/Q+9fU89mPwcY/yeqizHo8qoNIeQYcabm3fz4rN853dijHfUNdhnOBweEdNJxmkgp6fZHTr3Vr/ff+PKwsID5ubmDscoVlWo3o+1cSuMhvfktxcWFu6Mh6W1uPiQfr//Bu99LT2he5VgHy3L8iT0e9Qck5iqhxtB7+oljJddOSPsYRLVe//CEEJrwlzexmmB+lEUxTFcMA1qjff+8zXhjdUnfP6PiUW8exzGQ1UN41kQcXPuzbnd3MU9EACoS8z9CDkdXXxkCOG78nz8Buoh8s6vJ44yPz9/8sLCwn52Cqwxwa04bJPRQdGhN83P74vq0+12n+bK8tuZ1DVPzFfw5sQY0fUxaDn+Teqb5MwJKCeiJsNNunLJeqder7cvhnJVVfdyzr1dibiWpMH7n6in5j4QG59TG+J53vsV3PJ8NsbA9wbe+z/nM6ORGOZ7qapjxG9zb86pSeiT3o1LvE/KUNwXle6w0Wh0ivf+SbhVs9NI1rMoin/ES7WwsHB3ToEUJBvff238EoZtnGVy4u4kurply5YDSBHot9uPKsvyr/HPmydDCe8HEH9ZlqgOqCioKiY9m8Q/iUiahLWjyz6PWiG2gaoqJ3vvv5CdAsyJH1/pnLu/c+6cqqru66L8/E+19FdiCyF8gNNEvVIYsnecIPl3NJdJ79X8nJxephKpYMDox5N0YvTxacH7OWFKPZG891uGveHzCdC1Wq0jtm7dujs2GJ6sH1500W9zIqxllP4ChxF+ng3J8Ts/P39Uq9W6V6/Xe+hwOHy+d0701iQ9I96fvo/xaTFG1B42FMI0nTnXiZuE0vzvXb2MoEy3Rlof5qI713s/nzNmDOFLxBqcc4/CcEbahlraquHp/Q0xxvuod6qp9jSf3ZxH82p+Jp+vnV5iG5hNo889JoTwN3oK1IxZVdUner3e07vd7gOWl5dPxCaYn5/fV1M+7nTpxo0pG3aNEX7+oVLkt0gfgPCJ7s5smjmU3BgIv9PpnMkGDAaDJ+NihMjsuFbp+TnVx3ETQoxIt0kGY5NYdnQ1CWjSJXNWL8zu6pe/Oy5GY06d203R+z+K3j+99CUBqj8PIfRTDCF5rUII7x4Oh5wieHoweE1lu7m5NOc9af72u3wdjBHsJNgH+yS6+BCkfr623vuri6J4yWAweBLR6uXl5bOW5+ZOIlgmbtKN6/YhXpClfqylVu/qsA1C1SEtF8JnYefn5++5sLBwf/LdB93uk4qi/2dlUb7Xe//VEMJ1olg4sTWDnADeP380HCLFDla93wjIGKD2hmReILvyzxmTNAltR5cwAScOPncMS1QeVSPEFg4hdENwqGwv9N4/N4TwIZOyelIM8cbEKEYvqhsEuavzyIm+Sdz5O+fvma8Jc8cu2G00kvU7Ijj3AWPg4NHhQj/48CPv/RcJ8g0Gg5d2W60LVhZW7j83N3fmtm3b7nnDDTccQcGQVqFJNmxzr9dGY+gGUu73f5AgVC+R00PBB4UpvV7v1VVR/DMSCCJiU2yknDSTsH7LyLlzRkl3xihFguabLUe9qkUSLFLdl8/hHULXzl2Mu0J4q4hQ74+P/rCk4oQOMTJNXuP6WPTxZd77PyOAlt6hjvxuwD5Q5sWewNBsPmNHV078Quxm5Or7ot7Y+0rcI49KZ+sDA+MqPiC6+DgM8izKnS89niLykMgo/Ydut/tikgBJC6cq7Wc33XTwFVdcIcl05jFaGxMGEsKS2Sj1Ix0Xd9vS3NKZJLSVZflZ770EmGxYbg9qA2LJNobkLzwZqvvjMzfjUaSbBr32ShHdwYHD4fAQfPKqKu0ROx0JLqkub8QxSZXY2SVqEERM1HmsRtTBpc/4qnqV9/4VIYRL09+80/f6Ea7SmFIx8NMz9+b9d3QZ8Zsqk1yc3e5enU5nT/5FvckuPD9N5wD/ildIo+Onex/W67zH655+yLcEI34KT1G3230CJzbJdKR1U3rK3q5llE4YbBpuzW9/+9t3piqJ/H3y6TsrnccOh0N8+1k2pEjPVSnINmpfu3MfR/fXDTa3JwTJJouXYxiHhxOQ0iSxl3rvX+1L/4xYVfcru10JlnVjFwn4+1m8YJfVkIzRIKAzUdNk/mMb5V/R/VGPYgiSs5QxwLc1Ug2xQsAQ5C491yS/SvA9iTKTZjGqqlOic4/0pX9ujPH5McbH4oaF+TUwiEBAUJhKKMxjpxiZsTrvVWvOsLhFnqjnnP8uJzbFNrOzs2egxqISWRrFmkqkg41DKhBUoWqLaqqlJal6eiHlfUbUaZFTZNdGCGGb5N+E+O4Qwhu993/ifXyeqg+oPrgOIQQ2FhVgNyQ9SW/e+z8NIXwnhNDOMiCp8toaY/yPsiyf1+l0LHAGEeYepJsjRv6O6oFKBROeEkL4mb6HqTmfJ6tUsjO3Z4D/1jQNmBdJvCtqGH83/f3OsdfbF+KuBtXZIYR3hRB+mmyPYElv/RDCNSEEKsvOVWeBuYo5+SR9Qt9hDzJivfd/QNZpVVWvc859yHv/XyGE2fF+eLUTajdubzgcfr7dbj9zYWbmAZtvvPEEQau47LK1XCIGC4BeqPW6+85u2XKipjFjHP6YRTT3oSWzEZcMPnw3hvB27z1uztMlizPGY/GX91JSmBztE4j/4FhV9w4hfJxTJBGdG1VlNSrKIlRVJc/T55LA9k6itGrMWurBrhIjUhTG2SfGyElzTc4AYcwAeICEAbK/fSsW2zFA8xnNi2ea6rJPHA4P995fEEK42gjUOTcqy3JUFsXIVfL6MkKI12KMxzjE6IbhObmwYbgkXUJVSf4mni0yUKvB4ExO0BDCO73368b3k+hxrRuVZXkpqelUm5Gtiysbdeh/tU3Ai7MAuMo2rlu3DwaTEv8LvPc/YeGSfj9eSCR2VVWvRhpxpGsmp2RC6gbheqwNPCN+/e/9UHlCCJ/kXhDDcDh0ZVn6qqq8q5z8WxSFHwyGdV58cO7DknWZ9HmzJXaZAbLnCoHUKlAUFei1vvKvsdyb2oj3/lJ14aL/7yoDENWVdAwkf1FImrbkFQ2Hw1AMh74qS++qSt6T9+Z3w8FAnhljmPY+PrlI2aUIEYRGzgQIANaRdUBdQrVDjZTU8BjjeSGEvw0hbNC9Qg3y5GQxSue+1emsPA+HBh4ihWSRKHKTNm73w4gfbw9FFuj8s7OzIvlBYTBiMJUANcV7fyHSXlIaBuIdQbKyGZbBWWdCZnosej86PLr83ZG4RvxsvqQa13W0yajjdxBHv9/nP2TzyMI0yaj3ncQAzd+hh/PsA0iZDiHUTK3v9Flf+dd671+nRnvOAN9USSsq3C4wgOj+fBajntQKy+UxJl891HdQOV8MC9fv9031AgXjIXjP9BQwJ0DuJka1s/QJGAIb47CiKDgVjnHOPQz7RlzRUn6ZrDZhgrL8r6WlpSfNLi6ePjW1/nACZyDW/a+LHPOy6IAEuCi3A2dnaWmJgJYRglSeK6EsV1V1oao5FtU1wjAXnm3OKleeMgMbeSB2QQjhe9xzMBiINExF8GPiN9KACWCQXq9nc/g2Kci9pFrBbE0CnHSNGSCWJ4cYrmoQeToBvL8w+MQAPFs/802NAdwSBuAzvCuqzyshPpP8VlOw3XC+ZvZ+v296+5vJTlXjl9PH4ieTYgqsryXScQoz55NgIhcCBT2qZo4rzaqi+iA2HlVmBM2+eMUVFuNoksntc9iGoQMC+aE4N+cWRfHBtAEx8+fHrUjI6NyDJSqZjt08hTkn+NxLY54Qjm8+f4iP8Zmk9KLnDwdjomgSh2Y/iiokp4D3EMVsURSPVnULguQZTYnfJEhTgQ5UI1h0cXODemOAqnq9nQCZDQADEAW2E25nDGBz+W3ct2SZhhAk/6g/GCTpb6+Yvaq9N+oQalCv19PT1l9K8l2WeGfrbOtq/xojyEmbJdMdpNmtjw7B/b2Vo2bG/8pgMHgFWEog2OEeXa8JdU1auV0ONu2iH1702xx/IKqh9wPUFEJYkoUaqwgLvvLAgNyPcj/V71nk3BDd0SWbY8Eo9Gm8ROijg/6A6o7VhN8UkKhBRek5KYqiYNMIAj1Xj3kYKn9WkyCFKM0NmgzveNrYCNb3c+7TvvKv9t7/xTj1uD4dLqO2QHVtGGBVHMDWMWMA3lfiDiTZhRCu5T6DnTCA/bcwAKddt2vJelPkJ3Vih3XDjtrVlHHLLMVO4kTANjg7uPAOZJrGD+T9XFX9tN1uvwR7YGpqaj80ATSCJq3c7oZt2Pr1X/ndjRvX7TMzM3PvVqv1RFDLVDrU+qJz4R0SDIpigIpRlrkid0p82YYkBigkH+fvRSr2+344TCrQjobYAWIM92ECyc/x3r9c6glawgD5aTNpHvwOgkSFwfN0hhEl54syOAxAHIAT4PImA6i6tysMYJL4/8RWazdcmiHELXjNBv2+26kKVJ8AiQE4HUMIc3iPMi9azgDN92y+s5y8qprui9paVdVZIYR/s/21WMFgMPgspwAQj3iFsAft3W63gxfE+KUOFt1/eXn5vgRLvPfdPFuSyqno3EMljRkJmggJoys/jpsb0NyMOqdF8llCeIcxQGKCMWHUYU2GSkUIp9/rCQPo516uHhJLq9glBpATIMbT8bnruxkDfNZX1at9Vb02eG+2jxmj39A4gBBhUwWytdRrzAAxwgDYOteTe4RaA3HzPjsaZgN0u10xu4itOOfOl6jxODB2Sxggj7bz7tgEj9bCnloFrKpqa6fTeT4q8PWbr98fV7i92+16EPSaunqKgvDjQDuryupfTTpQyqj4Nn+kBdukAqD6NDM5d2UzTD9FDz84+vgcDcyMup2OqDdsfvIEJSQ1rtoV2u/7XrfH70QqOuceNxjIhu5qTn5KhRgMDuYk88GnQNhYyn9B4gCVfzUYRPI3y7as/CVxKCgOxgCrToAJz2IueGewGU4IIXyN+3R7Xcd7cJrh/qxPAnll3rVM6k+v5zqdjjHm91BdYIBs3Xd1zWsm0FOAvTtIPVp40kYpkJ8M4uFw+J7FxcXTwDwF1OB2X2PMQuH7nZ2d3bvVat273++/wDl3kzGAbsDnq6rC3XlE5nvPpdCOiK65GTkDHKCuwR/xjE6n6/DwsPkQOxdEMuQaDv2gPxDp3+12bU6A4uKFQiXhJNrVE0AYIFbx1OBTHKA2dEP4YlX513lfEQizXCD729fwqCgDcOLsLPZgc8Do340UahwH3GfQ7wfewU48ec+Sdy3lZzV+RfpnHq+/xeGgBu0tYYB8LsaQuFGFCUQIeC9qIE6hxOjVN1dWVh44Ozt7AoX2l45ux3lCukAA1t6J5KhOp3PfsixJX5AqLoEvSeNlUr+bpH9exJIT/81thjEA371r7McDuGcI4a9jjA7pz6YbccjV039F8nd9p9PhhBBJ5Sv/elQZzRzlnjsjfnm+qV+qAp1aB8LGKtAXIVRfVX8eYzQbKP3N+/9UqYkAuDkGqN9XdfYDh849yPvkdep2Oo4TT9S5/kBOPi55z15P3pUTQAxgH0CWe0qMUkHHs5u1x83nTrpsXUwFVVdwPJYM2MQAqeYBYC9KWRdbi/emuk8DY3Kf283IFwdLH+8P6Ge9Xg9Aqot0IcwHDZw3v7cSRgtqNaX/zjaDv/F5JKKE8QdRiBDV4K9ijOKWw+/NsQ8TQAT8a1ev28V7IsSPsargU7lOvCtz4HMEzpB+29sA3n8JDxCuUFOBMhvg0jiMRzROgOYzms8TLwxQK3jNvPcviDEKqhwEPuk9YXKYQLOwedcfk9pQZo6HnyMbtmYA3QMcEZycBCJfYGnVWvvcLwaDVy0vL9+PqjJKK2932aKyKJrqjPGL+tNb7p3U7/fP995/WTfcjN+Ly9HoHhqI4ehs6v0724T87+aS4wQhYkxRyssIqulGL5giOhwMRkhHk/5IR0kYC6Fyzl0E8ff7fXKBmqnRzec35wIDEClF/TojBC/ZoOYF4t1DCGS6XphFgscMMDaCd5UBuITpZb6FENwLY4xifCbVrpb6QY17I/xl77xwPNiipJqoAWvBMDsFduUkqPcgOwU4TUjteID3XjBa2XIYoSjLv+v1eg9bmlk6HngbgA5uFy5RFsNy/LVp253Q8yik7na75wyHQzILr5DFUNgNF8J7kP7DBOOH9GwyQHOxJy08FwsPwe5JXkz0/qWUHOrCU8n08hACkID0BUhUoEND+FuDC28cDAb30bQAop15RLT57OaVMwDMc+8Qkv6b1QP8Gy5QSYXwXnKBauYIgWYW2EAWCb45FcieaXbPHVTtO8F7/4w8IS4f1E2Tii2nkAsErYb8nn2BWC2jNou97MpJkO+D2ALqEToUYeK9/w7PMMAy59ynqPCjxBV4G2gEWuFZv5YpEvlCwMlIfaDBKWQHSqPdbp9R9PuPK4qC4JdIA1uMEMKbRkn6I3121d2YL7aoPuYSBHzKOffGDBz3EtyEJKexGYUrKEj/Y2yDEMKHQwhf1XlsJKdFo8/or6g+uyoBbV6WCgER3csMwIwBKPD586ryFMUQ+BqrRyF8XavZcgZoPqN52RoYE+wBbOJoNMIPn+IMIfx3COEfwDJFHSzL8vkKAHx/hWb5sxhCW+dCV5yHcZpkts+u2gP5ntg6HBjL8njv/b/r/e3U/9pwOHxBv99/3FK7fQbI2NAKwbGs1VSTzG6bwxbAurOg01EEQWeWVr9/CpJ/MBg8hTpSfP1IHHHD6wkA4KsclX3B70EK7Ij4m0SfH7cQ610BkQrOvQOMONl877+sEWV0eS700v20IuxwxfF5ZAh+E5j51BZoSSIqFMbgpHns7EpGaS/uG6t4LwuEZQzwf7UQh5JIjN4xA3hxY1KPa9mgu8IAXDUTKPMcGJ07H/evJhQ+RzI3AdnqxwNUtYPByeE5grWIUQSCgYttAPM0SwTEK3RLTgETSNgS+xJJ9xlAgOIlrVBXAIp2v995YbvdfiSuUfojcBpQF06r2l+L1Gl9ecny1ES3fRYXF49ZWlq6DxDhZVkCKX695dznJY1KFG9W7wdS06TupMWexAAstODaaAXTe+Qh6b7/nBFUjqPJM6TqSVN7MZQ/YQSqiMqWADdpHju76hNAc4GSC9AYwDlqm/8URgshfn0SA1hGphJd8/6TrprohAH6cT+K7/V9/gf//qiQFAspfNF14GINdrcSURglhDCjc5rFMAbRWj/XrI7LL5vDJAYgIxdbLNU/E5IgXVppISAGnb+uKIr3d7vdJ9OEcGHrVsC39idfCFic23ScQF9e8vsBS9JI74lY+MP+8EX00jKCVKkvOYL2u7QI4Q1ZMUsudZtXLfV1ga3wmw061jn3cbunc+5jo6EQP6qEpVOgIvA9U5cMI5PSwD+MISKdKKwHUQ4VwE4jkUK7eHFvqQdA6poXKGOAT3nvXxJhAB++sepvqfyQABLMalJ31f2zNc8vWxvecQ9NjJM0bBCxc4ZWQrZ14F9JaNOTA4FAPYEA5Wp0+PEaG5iUIdrcnyYDWFBsH+BqbG8Ymp/E/5sQJBj5zV6v9yzt2HnyNm0zdZuuH7DiFgraN27ciB53Dl0Mi6LAuDK0ZCX8ce0ozdqo0EIXV/DXpuE36TLiF8K3Yg1Sli3vRBfznTH285LGfNNyJkr36ca9YiX1uylvJ4S3a4+AW4LLI4SYpQOgZkCIzUDYJ2EALc1MgbCxXvyVrBRzIgNMuGxtzAGwV1VVf6zP2oInStU51jYn4CaxSg0Fcwe4K3gvBS4xhmVfVX9mKBuN1JTmvex+sr66FnLSMA/1fH1WhIwOjQG5TDvY2O/3395ZWTkfSBxSpzdeeeVdQZe4zRnHvDDcCZcqhs99W60Wuv6/2QullIOay7m+MwrhDYLbiU6aNjxPwMqJbRIDGIoZnhYk1nFEkW1BYwxv0r9Z+nSuuzbvZW7T3SnucM6ZGvQ9IAIzBtplIzBz/+2/uiKsZoBPIP3VBkhG8DhlmEiwlWHeEgZgbgLPiPcrhAS2S4EKtdDZybqztRAmqPP8nQMY6/tpTWMBeICeIoYkYadI857bCxitkY4pqxbYyCeEEC4KISFO6LvXKjFZuMVg8FHqB4DABAIfdcjwSJt0eKuOfPHx9mCsbN269UAMmJWVFSDAJccH8hepp7XsHMl4PxSz82RFP2OzBfJbid8IzRbQ1BX7XS2p5HsVbsYgMYUYI3kuRHzFh53l7tjGNIkm33iBOVcduFIj/RlqAN4SBvj/MgY4MMbq1NCsCXbuEz5GGAAX7SovkPf+61r4Y5J2VxlA1A1Vnc7x3oseX1XVK3u9hJCR6fCT3qFeCyVYhNFuOAgo0tH94wQn1YL7iUqZqVN2Gth+GWNwPz6DKsQJvx/7TnS+qqoz5aQJ8T3Bp3ZQUhBVC4pIl5q3KcTKvWjaB2bUr7SoPl80VB+KW4AzkfTmpaUn0JBZJh+lGZ1JPAjqI9HF+6t7EXx8NhkimVTdxUayYVbna5d0P9HvoV/f1/sUSY0xdr33QH6wcUY8RrTNzc43XTZen3/XWJYneZ90Z+fce9vjtIBcDZrEUPWl99qD8k3F3V+F/ckpE2P8k+gjDJAiwRqZUgbAA2VSdmcMkDOxpH5AnFb+CWQka6TrKP71nc07u6edJggQ9gGJfYnuJTbSOwVuJc2RtZ50WV123rCD92EednKjYh4utRYuPlZcwDzDp/4O6R1Cr9/v//XK4uJjp6emTgE9RKDZdV9v9VEvlNb1YvROb9x4zNzc3EMHg8HfiyRLUIBG/EBwvBF0BAJd6uFAHzXE41yKcInbDHVEc2lYoKMJDo1SU4mDkSCcIkQu9RlI6z8gkqgLb8S/qxsuEpTv4h40LxLFKoqdk9cjmAS1+066vxiiELL62BUXaKwCqQ0wPgGsBtoHbABcwbkNMOkZ+dz5DOu2FwKmjmkkdQpCheBYk50Jg+Z9hQn0vrtXFQBZyY+v7/A+Yi3qKGA/98Jm0lOdfdsvxh5eMHl2xgQ5I8BceKUOiWV5Ak0JST/R++d4pCvdfvfNdK6kmTdF9aoKyXxv9cECofejk83MzByC9O90OkR3BScmk/wl7k2CQUb8qp7Y5tYeGV0YJIe07imce2SM8Z0xxq/GEL8VYvg3AjiKqIz+KDW+VJN57//Qkscakn9Hx33zMgYQAxL0ZvJWCKLRjE7110m5MfmV3w+m3pMUajIhm7hAYgRHcYO+FBQIZQD7279nvQwsDtC8fz5vLtbxroOB+P4fgueGe1UJTAAVMy9uad5jR5cxlqmb+1YppiEnvL7PR1SNYU/+Iibj9j810Hehnj4wgZxmmaCz/RbECS3BPAywrlTUEyxgVjcLca66od1uPwtawx4gYvwriQ/wQCJ06P1Y58DftVqtJ+C+0kknlFrpTOT+NkplVzxSPSqS3z9Bb0yBo6Fg0xDCBy5EdNjmwHNkOSXqonus3tfchk0vR3NjJ1222XfodrsEyU40uJLgwrvVSEfKmWGau1PzE0Eu3WwY/ZCUC9RgAO8/AyyiQCN6n4Cxxl6gS9RlablAPCd/Bj+bbm2wJZL3hCoxGo3+XNfmRm2oZ7EMu0/z3Xd02fN4R5hA0OYU8VoAc3W+37HWTs0RQ7i2LMtnSEpKW/bITtF637P32E3gIFGRq8ipWUeNLVugKIp/WlhYeABNvK+++uq9s5azTTL95Q0eyINxeU5NTR23vLDwyOFw+O4QY5VXdikXn4VvPssryQnUiDRFcXtSRncSuSkxRknOIomLwpWyqnPYaxcqxI+RqlFdi5rmC5wTZXNzm1fNABBekQJGeJJ4zs80QQzbxaLDgkOkBGou1vx5MDmfgaFr12p2AtTQiMErMtyYAUiGw1MiJ2Umue2q1RINMLG29Bqj3RLMJpFllzCN8jqGn5cB+I553QRlo0rv9LEQw0AIPUYAt9grMmldURQOVAp5n+Aps3yWJjmai7u5R1LDreoSJ8bRMG9QW6xWhUKYo45E64kP33DFFXe51Q1iTXW4E+jNc9u2ndlptV7gvLsy30SCKN77J+MCzJo85BmV+YYm3/VAgGTpTyV9a1nEOkyig4otsjb1WZdVtPkcG4xiT0w4AZpXc6Nts00F2jOW8fjoIw3jgF/kKKMXMM2on4VKNCrLe2AEqrpmVWu2oTxXGEDsnWp0Fv21ZF3ykkhjgLEXSE+HcGmRoApNVTQGM5+6EMlwNDwEO2lUCRDwo2P0IF9wvw4X6cfaERMmaVayNd+/edl7rDpt9NlkuJ4dowfEbJppF0M8pAn5Ot8r6qr1vckyvb/SQX7650zG78z5wdoe7335vLp3guZtV1X52aX5+UdwCoAoSPzpVmMAHoT6gyvqpptuujuQJoPBAGxOdH3R2XSDaQbHxpDVaOV1zZeWF9cFuQsERatOvo/kr1wlaPT1SIglUt0EnKHmkTxLI7jidVDCW6VrNhiuyQS2+HxOQvaCFF2WeD0wUKViLXjPDmNog5UyS2oBto3quLwjUtj0bNOZ9+adkqfK39gQEIkBqAu2bNBaPQqcAMep6iIo1bp+BvGItD9KdWXQ2L6Pt4faau+8SGSgXEgupLukRpVze2KSYLC1yAlSCF/XESZMWKG90T560rxP9mowAFYy4XPbhmmqQ1GAPjfkNHIVTUHSqWj706SFmtH0cyTzEUWX6LGtnfd+rt1uv3R6evq+oIhr4txvNWn1Fzpy6UCiG40raISwsrLyuLIqV0UyVWV4eIy4O/tIyEmZnflLm3/4KAtm5dg9uVRhFIUUckszCc1qBCLR1CDLWandcNmCN49d22gj/v0gLKQmLltNIgPRDBSJUVU5NrLGD9V3vbKqqhdp796DY1cQpSXhjoZ5mmh3P2OALPNVs0Er0qENGMtOB3CBUF3wrpjrVyDdkfg6P7JcJdefAeQLc3MVOKdS62z1tz8oy/JZIlG7chKYCtLcDyN4I0JhZN0bcSurjbUHjUdgaqraZK+GQ6mrtpN6DDjmRG21cstRCG9TY9dswOZe1PPQZxJEPMGX5bPpQaDqtazfcDi8eH5m5rxN6zcdC7ogNNmk2V/4MCnBkYPxC6KbqD/OWeKU5Xj/PVVQ5vFRCdZccLtq3RIDzhZV0NsUzSBnAJgiITb0Dcfmi5X3rwLJAAQCOQ3SRsMMEA6bZgxhKphJQSF+fT4Gp2SFmhsuHe3JBgFGhfkIrqbWDheq48YYlyvvX4u6p4BWGPucCPtnKcmpImwc5bxYYFEqgUZsVoR9U6viuAcqA+/C/A7tV32qy6S0kCE1zcNU01yVlcwTASG2UyFZ4MwPLxlNukk0tABhLhAE7lBPLjGq9TMQva2hgV4RFLtAnRRXQZS2VxrtT83EyG5zijmkDBBD+DtVx5oxlfz0MUZMNdWcruyJNRtUW6CqqmuWlpaeghpEDIpkuVxI/9KG6f9TU1OHzczMnEOAQh0+sthyFJf+OWXCt8+ju5O4XRjAPAz4+enpy32o0hJVRxeWy4hPq5ryvBHQo2diCN8Kzr0vev8i5+JDNLfoiL52VDemUCkomZAqaXYjvgDgrmaOotMKgNaYCS17Nw2Ijb+bPSJVVd5zEqC6oJJJqrE0z44RFUgZQFVE7zkBXlOBDKcqUOYh+oaeahYhl9RtzVaV1qsK7jtGtmgMA7yqdfAQ5tGn1UePFLaTRdJFMi/aXWNsQ3hiiMYY7xdjpGXqa2OInwwh/NByu3TtZa9ylA272CuttEuFRt6/3NIxJtBEzgR2CrE3rMGR0fsXawBOnltVVbfb7f7J9PT0KRs2bDjoVoNVMfcnwQiCEnRuMSLUf7+BsSPG2WqvTJPw85cV40dTcXlRVxblCFgSFjYhGiQ0Yxa0024nuBLvF4L3PwshrNiG2OB3oEwTEArO/UMk8zLGhyljopZBWOZBOZhaAU3HFghxEBOE+BO4a3Lr5haJgujyuYwJQK8+S08+iJ9eBMdrE2wJhGVEDjz6hYoMl/obj3OB/lP7GhMpt5x9inseh/7LZ1YR/5j+pbbC/kPmtxrj9KfOufMU34h7H4jbWYpvioIsWkoWnxa9QLX8k9oWq7ry2PDeL4I/hEbKSUON8XivDF1D8IYk5dn7sEnXxgJyTdduftUnswqtQ6gVt+S51AkoUtf9ls2bZ+6NNwg7gO826fUXPgTXZ2rqbjNLS+D6PLzU9qQQifyLfzjpw0iQHRm+zZc178YeGjSSvJ5erxc67Y4Wqvd8V6FKpGY3Rjwz7yFNl3x1CDyE8I/Bh++FEKZzPd1GMhTD5SRgYeDy3RirM3mmGpRSOghBC5bOavhEIy6tYfC+Uh23P+gLhCKMW1UVqsYRGs+QfBdlgFQQM9bzgX95PYgT3mu8Yfy3ryHttWk1nh4i4SAvv5e/Y3Ty3Hp+43mOGUCxfwzjFILUe7/HRffQoRvSFIPuOFSBYUj/Rwxhi6mx+fDeU0xDX7bPcQLFGF/oS2mk/QyfahdQxcAhWlV0DxoFv2c4596lcaAc6ePmGECcI+J2TXbPqnLKoig+SlM+nDEEZH/p9QIcMYrqvCfZeZ1Oh8J2gzM3446oL+FxjtE8Ipu/YO6BGb/wwgJHHptNLjrBFfEls4gAWukhwzPodPIujTEcFfspSJXckuU9kRbe+6d7X4G4AErxty0xLB/eh26IkRPky4DVBh8GRVFQMC4qTj6sgXXNAOmXNYYoiAvcM4b4z/jesWcUXwdhAF6nrZOmO8gJ8LrKV2MbYJwLRCAM9/HRZE5m/n2JfOMg2B7yXEbGAOkfPicwKAZ9EsK1xGdISgwhJZ/lQ6ERr0AVDCG8JUaJsD9U3L50q09ETCXdQQSslLlFP2cAr1gUQ2EI1jIGySD9jNiEvZ4F5HJnxCoHS0YTZpvcMfb7qH8EJle1m62q6osrCwvnEIsiNeKXXj5pHiAqvQhHt9u9Z3uXmr+pVOZ6jSIiWwDn5nzPNRPokbc/hlZVVRSuW2keEohrGuloQZV+Ivy8sskaOIhOq1cqjI/xtOj9M0niUgK4LvhUK2wDIhdpuWM4wdUMYGpGYgAh3hjCf+P1QYJLEKoUhpzEAJ9TZLjX0BEm/5sPEgg7g++LMZyCg8QkFtj7Vah244HV2fCXYQuM1SDeK39fmUcIM6Q7Uys8Go2eQMqKxVVG27ZJxFultqWW8y+CKv2uK7lHR2tS33eFgZxD/TQQgi0pUi85Q9gy0IQ5IHZEE0YXYgx3Y9ybdbDoswlbMGUB1sIQRihbQOyXxgTGAFjdi4uLp/f7fXJ/RLIa+i+qhSVyNRig+YJNBiB9AG6X/HnQAvRlqUulldAfF0VxPrEFVAyOUzXkLC3BLil1VA8GrsOaGdQAQ+c/PFbx7NFo9CziFTFGjvbNqPn9fm7QNagp2cLj/1I7AMApsHfUTYcL+DGkemsQkFjI/Se0SMIIJgaAvr06GS74b5FfowBhxyN9vffPw8+PhFXU6poBdE605loVNBRDVBg0MQASmVhGCOGSEMLfEdiDOdXgNuj5Ouu2EVeRSxmiTmizPB7pR1ZV98Eb571/NusaPG7kiDB5pbZfwvhmj3aVAfgMp8Be6gAQgGNjAPpJLC0tPWxu69ytxwBk4CkD3LvX6z3Xey9JV5q5xwL/qXhUkqS4uROgJv7M97sfxl7QpLpALlGM91SYEMs6hKBlc7Jglx2r/LvKrZcxhUgt3WCYgbz0Q8sY69ZJhhK3HZ7mmNCMvBKOqBrmxgAxxHV0f5cgoKJPSEjfToBxKsTFvqpgbJig6Qa9rBqNztIT4Dht6vc0An/EI7A5cg+VjWbDjxrnVCEQVQWixpcTlPQUDGw7KREQdpqa5Lf9yy/WuF5nJWgrpdxX9fwjBAqxSrk8wQu0JC5q9q7pEm/SxCoGUEbDWUHB0/tVUBgDfIciegB2iUvdKgxADhDV+isrvZNBeCAxTV9SVCB632YF6DeXl2Ncnof490c6KSFsRZ/PuqWblLd7Nm0Lu5/ccweX1Q9zPzacTaF/wBvEp93vY3yL1BT/f84ERl8NEF2DU1TC/p+iKB6F9OcUQHeXPKJGgwzpEJNaJKECWY8wM4K/rmoURHM0xEqKiA+eU6p2O/L8VfPTsWp+Sf/PPUGcUGS3Sg9lFQai1mQOi3z9bD1zqT1pvQ0LVNzKMAOIEooExwQB6WIfd1ZT3KQL9hnhxalNjEgYIMMUuqzT6TwaexSa1Hv+chkAFajdbu++srJyD7BcLB8fq0sXmPRly2Q0I7jJAM0FlBfV71A/a5mTdI0RdIRs0ZqE35QazY3ZjgHsZLAUXxiALokiYatKXHqcAjmRrYpHSLBpLFkFX7PbtfcnPfjeGK5Ib/Uw0WJUeh1nJ8C/EgXWgJIlw9WBMPzvmj5O8IoAHeC+EjHmeYZiVwfqrNFfqQ3w1BVpGKBZ/hTYSA805LdM7bFimSbBN4l+R2ttsDSsK8y0RywiEI1yulHorzEISx7ckRDLGUDKOyOFU9Q4OPcv+g7yLlQd9nqtc5fn5k76pTOA3djQnfv9/ilFUTzGPABZLvsXJZFsdcSv+ZKrFs/cXRSigNqmLzmDX9oilztYsJz4J21KzgSWf24qkaQP40XSVp//jk2LhE0uPAGNrX3b5t9OkdcMZhDXbIdCNMHWXy69fyYqAL51/O1qzzwwaBvRjMjzLpGrGID/jlUkx4iMUCQ1xEqRi+RJDQYDQX0Wwu5htDf874NE+IZwzWVZtBSbq93zAKlWS4Ypkjkvl2xeTQLd0Xqb6xJhxqmyHxoBHmnMK+/LZ2pE2U5z9nTSM7iMoThRyKeimP4H+g5mBL+n2+0+EPQRGOCXpgLZy/KAdXNzdwK0CHTnwWDwROccSGPiHZHNS42mH6Yb18TTbF5jLk8GEpFY6Q/MSaIqimVDNheqSfyTNiQnfMEAMm8G0pkiGhg28zbxHmVZlaN2u+0lBqGMkNCj9V8jfPV1Q5A65/dmFW8HgfGPGkTlWtMLFEO8WJvk4QZNKtC4+umyWMUzGgErKuDOiSHKZwXwtqOM2k3zyS+bGwC4MIOCfdU+for0QcRjbqKypvSRvNaBK1dVdrTuzTXPC132jFFSJ2RPaQ4uwmGc4GfCsckAch89qTmlgXzHYdEFRVydDR1a5oIrutxdPhGhvHnz5t8zV+gvlAm4GTcG6W1+06Z9V1ZW7ln0++i5zwZ3h0xQkrGsvZHq07hCMY5MDcpfMF8sFkLyTCgR1O8PIynHYxArkxQ72oTmZgjxZxKfe5hXA/sElGLaEBk98ExceG8PIXxKGXoE8XAZoXGl/9bfIVmHAqcJ49NY4n6aBoFHhetQyvyog7Z4SRbs4gSgYopIcJMBvhlJYy4knoJReQCOBT1RnhmCn+dzEhxkLt0ULMznx78wcb/XM8l/HUEwqdbyKYdff7+FmAoqVmYTNHOnmgJsZ+teEy/3Ig0FRtdntdT+4MSxiPCO1C4zsO9C2aW6acWLpkmQC865NxRF8bh2u32flZWVQzdv3rzbL5QJ7Aa8HLkWoHShb/V6vXPLYfncqqoIlnSS/y0N3dwrNZ9b0nizo3U7Dtejl1669ww+/IcuFFB5wJFMatKwsw3IGcuOYsn3wYtEcMyKrnWeqDyXUEhPpFHdeBRmfwjjjc8MhgNViYwZ0kWU2vgHXJ+yLJ8IpDmdGmNbcmmQqPjTjyZ33jqpmxvUe095JxmdXKsaZZNOMhold696arjXXiC94Q6s6CmgmaB4TpkLga6k7mjknPkFRV3z4Qe8O2qP1lFz8n3C+3HFHWnfnLpWwki/MWWEXFLn65/vQ3P9c/WFuE7dH8GF8I4UTBPM0bxMMleHzFaT9GsF1ZV4k/m4lAmmnXNvLfr9x4A5S0qE4lJBVzK/n3vYyxng1fz8/L4rc3P3aLfbD+v1evikJQQuL+Xwf6bTNcaIROEEMHxPgSbJfMimityN0sMUURRj6flyxMVIzv0LFBx2UpueSVctNXRBJZtRF5ggEtg7NTIdurpz7kMYp6QsqwsQe4DAGunGHNsEdkCSFomt7zmiw0p2HwJzb8dnr1mfFpew9O4DwTyqqkjqsFaE1UT+xRjCG51zbw7Bay5QLUC+ri2iECKsgQWfpMaAKLP03XIC3yiQ71VVSXqEzU3vQzHPh4nC9lNaOuqURM31vUk7eUdeehqSp+n9pIZkdQR5CevO9PaaATIChoEPBglb7u/D9QkLqjhW9j6pvgg6U4ssziAnt64jHiBOLwuujYWtD72iqj7W7XYvWFpaOgMc2nXrNu+Gs4b5NOl6lwfEDwKXlT7S06vVWjq31+s9vyxLgfJDwphE0wX/IkEfzQOSelbLI1dfMwYXncUP4Vgjhx7pKHk4PghmZPCBRLAzFW3A8tcn6aK22GyIEX6dt07sIMb4Zqsd1vktAYsOwWb+7vq4z5gGINdjh8MhKRUwAifdj2KIS5KDFAJ5MVSIPUUJn41EYjIXuSymEYtIfcH9pHGdvN/YWSDSXxggJcPVQbIQgEXBkYD6Y2Wkdt87quA4WOHPCTp9VNrMJmOTuoPLQgh/Q29jorRKYPa+ciqaLaSeoAcEJ6deXV/gvV+m37D3HsNV/PcZEzYr+5p7Igygn0PSk1X6AEOZw26kXkSDcCcP4xBgXpjNkEIMgIBnCXQKAlGFpLiTcVbYenEaFEXx8eXl5fNgAmxUeo4pEzRJe9eGSX+y7GY2bTp0eW7urG63+9SqqsTrYy2NdDKD4ByF46dirKlr0fLxISgBQ8qkK2Vu78M1hrqk+Sl9DDVd9GdrPrxkbU7wAtkim6rD3wVDSPFrQJmuCd8HyVz8eIwR9x8LWm+kGXzKQLWHqNfrkVsEo0LAIEc/3GoVQgj/ol1j6s71DYMOzxb3luYcwC3W6dBNBgjuTc0GGSGgAo0gXKsI4x2NwFgHgT9hfhosQ7WbB3upqirqqR8IcyikjNRjZBJcgoSZwLBagwM04/ItJL7Z2pHgp3vypMy9bVhNk05nE0r8jT1JRS3JiL1K7wlzkYOFasY6/C2qJyqfpq0IeK/ukdAOqRRlGU9wRfEor4gRjEylHJbl8A1oKKTpUK9C1vLPXSnGy6BLofeD+tBeXn5kWRYQrRPAK3pqqlSl+wpFCxxVFqlVA9akDCfCYa4AAUzycOQoy0dZluyeJWzRweVDpM8Oh3XHdNEVs2tcuNGRTUZ3pTZBShgZZGCqOgYqhdUmsOl5QUZNtA0CNs/RXVXa0mNMsIJIV9biF/B2IATzUtWSUOdnUB+oGhIHyKQ868AJ8MYQVrdJ1YqwvCZYjvOcwHiPbqo+I4bxR0qo065w5yP1YWBllFxSN6/cVoLgWCOEFynjnHxjQOOUi8+8XqjAZhCpoVbUKpLdT/dsfxfdA8MogIDRQU2uShrv1FplPTJ1kgRHK6O1tAxOMN6H9HJiK9hqZLBWDfyp6cGgd+Hy8vKjaLxHdBjcKjSZJn3vcJjuLy7Pdet2m9m8+filpaVH9Ho9XHYGcmsbhb7+Ck1/rjdMF4V/d+/3+/sjRZH6MUQ5AlM+i9SKjn3rCUWAq7YnVAcH9YF7W6jeKpSkRFDTDMCXnLbFjDH+jBQDXUg2BAJt+p7zY3tHRrUd5WwmhPYKndc1MUa8Jtg53Hc7I9EYIOuMMpEBfOX/YrtIsPffVBeoMK3OOZ+XqEKmH1NTkL4Xvh85mQYD8cDt4F2bV80MdvrVa1wURwuCdQj/E4M2Ekvz+y5rwWmrDCPEmu07zclZL5C2rT+wZLGmOoaCeg9DjhA3snnkEAakqRM0M5VI91vsRmwXgX4pR/eACXQtgwnkqqo2dbvdl87Pz58NQvktPgVM9QHukGNkfn7+fisrK88ry1JScTnCrfwL15Tq03Zcm9dAdEx+hzSqvH9RiGGJ70DkRTEEOiOLrq4O32tgx56xUWtaj1fMG45IikPw1uCCbdnGxNTk7dUqnSFaiMQM8El2RJPwcwYwwuA7vBenwNO8D6T3rqg7D7VupwwwGkoklxOgiQ79BVygnoqw7QNhpEOLFJzAAPnptEcsIyfTh/R7X9EEOgxP3tneYWfva+9qhmvtqFDi2wdbzZf+eTHGz4vU1aElka+uYryPFQGp4W6nknSbsYj66j13GrlOUWuNbJvLlnQNQNHMCSAubL3YV9ROTikq7UQdsnR1fh4Oh19Ymp9/OHYr9iu2wC4hStui8AWR/lMzxy0sLDxmMBj8HUymRq8RJsjP6NTSUzZTLZCyMADH1mFlWT7JYE7ImqR+dVUSl9aQpp+17FFz2Ln0Wd9RownAV4w+dNIajyaE8A1gETXIYicQc9jVYM6kKycMKZiXtGYfNmkg5rnqUTEG4HP1vTMViCxJwHubDEBBDH2CX2u4QJla+ZUi1VRYIwsx5poMAHGoizHhaYbwPq1J5rnbMeUOLvu7vWtuW4kb0lQj3kUR+YiViPdJn3uDFNoU7mG8K2nVIUQBypLiIghfib6Gi7D/zwSflk+aTv81or/anlYEq17s7R6jgTgeKDY6z2yWLI6y3O12/3hpbu7MmY0bD5kBR3RHCHLNBeGD+PzB/JmdnT1jZWXluc45A4q1aC+IYw9XXdCS3sTA0p+R/hRQk78iKNGWTlBuX2iy6r+l0qpKlUwqOeTAkUX34Uvmn9c6ZHoBPEalhCW55VHMScf/du+8gysnCghhr1hKRqKhJL8dXJ7G6ZLfnzlYITkR7pQLVKs54XOVF0gUGmVbNqht4JcVQtxQIXbEAHurULBqs+ejIuh3ODV25Z2bf1/FEMoIuZMBhthdnQKkVGc2V9iqMRTBJZX0jKbAs5oKJwjQIvvS6U/dgjCBGw4LVCK+9DpOHwUnlpNc19vmw0lARP+FCmNZr2FVVV9dSb0FTgY1wvoKNOl/1WAB0P0pL7vxxhuPXJidfeBwOMRP7EIQSZsYwLm3UKShfuLcQyN1nGy89INKlj/4NKtz2C25Mi/fmJTHrslcGMi2yPL8VBRDYAcvBydPHWdoEOPPQ/g5IZgKIQygRfuSNg0+phr9uaGZP69mAC22bzbKNmS4vEmeMcB/qIfJenOtYgBVU8TNiis2GZi+CwZQdmrsKgNMulYxQcNYNvUWAtwvJhcvEXRx8+q7CZTMqsId219NmzEmsBxbTgj9jrPiIj35z8kN+symE08Ye6B9mFNOGmuIYex9p9frvRoVnqL5b3/72zdvC/Dy+P2xnmdnZ08E84eig8bmXBuje6Dmk1vCmxGKGFJIIVxWhmCAbjdxMazgfDX9y38hNWAASU0eDr2mWlxFqx99thjFmWQwN1+TEP+fiYD7swlEekNwf6Obg4fkFCUEOwVsHeQ7qhrCpLh+GyqQJMMJAzQ7xIQEjy5xAL0/72ZzkhPJ7BJLHsRWijGerUYpakK+Ds13u7krX7f6ncxOaNgI4qER700IfxN82CBp5Zqg10zXVpGXMYHjqoWeMECvR20177TiS/9sqyXO9tgYEi8j6ysVc1QNYkrbOg6Hw88vLCw8enp6+lhsATxCE5Sg8eDlMX5V/Tm9N+gB3iqGDOkOutDvUgOEBzf936Yvg4gMV0r6KscaL8YLWpmVaILy8kby+REA7Igcia7f6ztJ5opif/zfrHWnGdxWuGEq2I4YoHk1N7151ZuvDCbBsQx3n8J7DDUjUvO1IwQsCEQ5pgBZgVAhDFCN06G1GAYGsJpgY4D/iGU82SAlzc2Y6+XqITkuuCRkvA8/ospNDVEznJn/rr5v892bDFDbB3YC5R45RW54WPBJElshPvu4aoz3O/FCtu2q9goDYC+C/EDmqsYzrJieOdh8WAuE8N3VTS294UzIuMptarVaL9qyZcvpOHSA89mpGoT+j9sIzB/AR4ui+Ee9oRE/9aPPK8sE29dYaDkBhFOH4voDT0Z0QWMA9MFVOr8xgBnCZIoll5CpQBC/MIESxpcpudMcGUuoagazaimRbVpOCM2rufk5AchCKzGjbxJkez71rlp8+McEeRQj1Hz2knukc2NzyOXHC5QimGMV6LN4UFbbAHVQh4IYMD0xaGsviBLbHpYfr+5VsbHUq3RWpIfCOIdq0rs337X5zpMI32w7iySLuzRze+4GmHAKlqWgHrlJ6dRv7vn4x3zwGfUACgOQ6Ke092F1iVpWsL0TF3u+GxD02oOYmm/KMEUN47b9Xu+d09PT94OmL7vsMtZvx8gRP7wo+f6np6dpbfpwV65Wf8gkJAeFRTY3Y2NCwgBaH0r+C90OEwP0B+LzbRhE9cjLDcUrMKyrmWRB1Pt6dQjuQ/iXSZ+IUfJl8kYSBnRlXiA2qukCza/mpq8ifNt48bcnvzzNG0heExwiUhiCC28dOQzxuuibdbHoagJ12jE6dKoIMzdong2agnfC6HpPy1dCGt575Ed/gNfHB6vJ9v+h0VraTuF6zQF7d/auk95bTrGM6C0tIU9R4N2OGY09c2+nBWqIcQbdnj0jdbw2gied9Nm+1xVsWl9NQp+u00eIiahAMXXb5spJa6chEXsQ+H6U0ywuURq3bL3pprt///vf3x0bt0n3MpACuD8pLgbzs9Pp4P1JbTJ9MBxOCilO0weaTtZkgDuis1Ux4p6TZnO9fk8keV5hVUv9fGg8IDeAMYhYECMcJZQhuiZoCuTBRFDLfMQo5tThdDqEfBmLRmeSGYZtJnbZKZEfrWbMI90g6iN95V8eQ7giiL3mAACqw5ngDWEUIxxSBZcknu2vEeTjFHBKSkeNyPFgkbKhyHCrgLEQNKBC4EggkIj6NUhuPzJa6V/2PeoW+KzlY1m9L2tOSaadSvrOJgB43+Y1sX46Eya7KxYo6SBgCT1vNBq9LQQBEiDush20ChF93TeJ6YjtN6F00wa/p5LN6qtTRR7ZthGHyzvkBFiRfYQhcwGWQ6pL3zGS/2Qtx96gHy/Nzz8B5Ih169btY11lthv8Ujq+bNiwN+7PXq/3OufcYGQROh9aLD5HjUo4ywPZjgEgGq1jlTpbgGzlpayML6tltUWRRdAYgFRcCdRIT1KQMaKlzZL3RIapaEpJ+I0BJAfEQRNq58JfEkVWz8gxkqbMvFst9HXxHDWO9Py/k5stEd/xwYX3UNfKM0CNs6COVmDBx/L8GOKm0pckCwoko+bv3yO6SFKd5CbxqjJXH77I+nAF7wXwKUOGQwU6UwFyBReIn4kbxBB7fAZ07BRBH89DnXR8/zpOA4NBVIltfvScuOUy4WA+dk1ERJiQY/RXIYQv+eCvDX7s+88HqjF5PQqcJXUWqYhIBJ8fCE5po77aDN98z7XKjnRzjGDvfQ+4SRUCxsg5A8gpoPNnfw+OaqNZbQpCfGVl5TkzW7achh1gUOrbMQG/wEoGb53Et8FgQK5Fvqj4/gVWL9PHtmMAJaC7ogZptFYCR51OR441YwKJCSghZcQk6RGyEBR7dFOBhz7/avoNKDAruPSvAYSXIJAEYrzvrt4WadKHZGRzvqNR69f4siS14kyFbkSqCPHr5ouvGyLoxz5I0VmagU9whHkkU5lWwvljeERgXJ6OxCQjFf0/JuNQGSAlwgD2KpFggUZUBjBPW5UYgDiK/nsWHeVjCEL8KZ6iOJz8b9U86uq0nxCthpgBpMrUKCl40XfdM50s1anR+wuARIwxflyJeTvJzqBUNfhAKsS/UlGG+kM6ir7vvbwvydik8GXU1T1HrZGYQLbfdqU9H6wifmoaeFbw/sd66uSdZUwFMjVITmuEG3vqqwraKKwrKRhFBMW2bt16H+wAwxCdxAC/gQeI5Dd8p0VR2FFiCwrgE/kvROaQkKZCTOLIO7Rard20WRsIbuIVsAWxIm0WRhYHos8XQQmfK0uJeBP6rWDYJMmGt0Py9/m9IJRF0YFfG1z4tPf+Ku+9pF/kA472XnLe/xsoRfXEPI1MSFDcuJ8lvymqgeQYTbRfVJgZ8bGR+ozPETUeudE5qD+oRnYCNGwAwwZddQLgBtU08fszL4V/lEAa6ySS1J6faRVNJvDefzZW1X0VZpF0FfJnQHJ7ZozhL2Nq1Eeez5YYV4VamB/JdRsI/IHHIwwY4yM11cJ6OptNQE4STgmS1XAUCF6sFOl0Oq7XGws+uyQvKKtdptDfCo5A3dZ9eo0w8JjeELaT7Bb+Rn8JVMQLgmJVqeew6PV6r9y2bdtZxLZ2CKJrEWCCBvRkLYoiAVONm1t/gRwbBaTKw/85R8qEVKe8E+5KNhKQVe7R7XZhAK1cGl9S05rhSQJ+ywUz6EZ+F+YbprwawbJRCWaoxnmK7l212IOOg4/gtCDFF5eslj1uB5HI8MGvKFwglVofUAxMwSjNJe6qMT7NhfjYWIQ4mEYwjxLvw1NqQGoGbQwAkWjH9DfUDJDlAhEAomBHXIsaT1GYyMY8xpaUqBT0Tuj15KAhZ4k6ZefcRSFI2vGPcmTnfKgdA67qp6L3rxc0N4pyUitUq+3Io7HmebMAGacKnztU0yWkggtbIEn1bL/z+uWs2o49t1SI4MM38IQpnKJ5f4zGmp4r/gYj4jR4BKh/cg9t2NLr9S6EAbbceOOR2xLaXZP8EwN873vf+32OCRigKgrByDcXKHj2wgCxZoBc/WlypNkC+MHhyqfZkYpBKwTe4eo6k/S2AFKMngq5jfFuVCAn9NK65aZ5KJo6rR3vuhm4EC2VFp+6GaSUBKLikZH5Q/Hpa/lgPmi6jUFXxzB2MowBrHEHxI3ur0ldoE5IpLQ+ARIDvF7Sob0VxNT2wdcUuuRh1Eabb50TMsVSVj9bGEJ/x99NqprB3Ryawv5TMFGpCJNMXRdB4JD8I05vcyCY9ycj/jzgaJcEpnQvSJ4DyIsqPIkhqXRn39lvORXG9dbjGut6z33YCBNppJ39M90/J/5JDABwAN0qpfYCBuBk6/V6fzG3det9OAHQciYygLU92rJly5F04SvLUlphWkMH59w/k/6gRSq8qDFATvyrTgE9IjkWqWP9U6Qg4hJVQaW9LIhdSAtNfUB3p16X2uBna7o1kp/7NYMhzWs774YyivisM+YQ9UnTjske5bT4E+fc+0hFQGWhPBMGwIO1Ci16OwIcg9BSi6uLT4GQMAAGKXZKWs/aCwQ2KF4g7IDkbh6fDpwA8l0XRX2SCjxBrMtOotVIdWkYA7C+8pnUtwBE7A/HGEnnhrCouKNKa7+s9tfUmTylJPeS5WpuU+DZuvMd7L8jVIUkyLcZIbr9niszdBNqhe45L4at91yN9SDwUH+MziYRvz2fz2F3kqNUnwBkEODQIbC7UwbgRtb3a3Fx8UFFUUijiMwG+GyWapv7//OJrZqULiYp0QRt0GmpfhL3nQ11r+a/koH+XlXVHxBRViK1pLsdMd2kedhcbJHMt81iWRTT3KSSvs3Ca+QWMNrrMKZSgtb2NoDlMtU+7IwBYgjvdlFUGBgLGHKpheDz/KsZra8XNUgZgN3Xz9Bj4WHOuUdpv2JlgJ4fFvk80vONDWweygBpHjF+VFPWcaNafbFVw1mcxFSZfG1zYtvZlRNhCoRqn2fNgn1fXktgY9KeU9VWVf7FrL9F+zPX56Tn2rNhvjup4wWBsdGegcAZ9HqvnJmZOW3z5s1HTGQAuyFR4IwBkhE8tgG+oZLSGCC3yJuT4hIGQDfXPlkEKSQyrFjzn1AD61rv/ZSm1H5Dgjvei7pA5ZU1oVPJbarXJKJvXvlnmptkKQUc6xY44/4SaKpbdCpag4TmV8UwVOVoxC3UuCeCLyoQ99A0bgBj0ztl9QAYwAKLUjNA/bdv6vfOU4kmsODcP0VXmy5FL372FEhKMI3WlQX7R1ulQpTWGUaChBMk/c7Wc2eX7LeeuqynGMSKh2TuXzxx1G+w5z9VNeea4AWo95PYIFpv/XcqaHHfWvrDzTGABMQURgZ1O9l5aR8G3W73JTAADfUmdpS0G5Ixd8MNNxxBGsSw38dwzN2g1xqkXmaVN4/D/KoZgFA1xxpd12OMWIpw+f20kwxE8lDcXZwSSI2qql5q+f40VtATACPXnps/p7kwk66JjKD3qmtkVRWQImzUPQrLmYPp1MYE4sKr1JWnSHGAZqHTWkBKYxBixGpnl5SyPO53+2+BGEAygjXiXqtAxgDnqtcG8KwwGAwx6LZ3I0v3HI2iom+3QZL33GdbWZbULVh6hETMs5ylXL3Z1bWcdNX7rScMjHZ0DAp0kFyyj+Y0r/oCfQ9e6gPY+8FgAB1QlC/Iz6hM9COIUZqV5wzQpC/byzoDGQFNcmDwXtqq6loutNsrz6FOeMO6dQdJQtyOGIBkIcrI4JZ+p09PXDFiBG3AB4ISVAXlcYCdqSOWQwO2O5mhgvkTgv9SLMvj0EGJVoIzqkeyVB/hy8WVZkBIqsOit4r00pdtLkhzQ3Z2NedpKpIY7qIK9cSQo7URxyl1xfi0TbKucudp6L7GCtI5fwzppycAfuzHWSpEpudrUbxczZQTVCCI/xyIRos+JJnOjEZjyPEckuTXjjoY4jgyP6GBQIRWM2HvF0H4+ZoKurelgOBk0HfBe/D0hJY3OIg6ZotF1MErGqmnVrJmvIIIbrUQnFQ7orMaf0hPHFJVhG4yBOn1Kysrj5+amjrl+iuv3H9iJJhfkCUHqhaZoDQea7fbT3fOSVVPZgf8jeapWyR4Z6eAGESSyecFia1CZ47eP9+waXRT6gxKNcJgCLJJKaYR9ymYkBm8djPV9+fZwPy7NQPoOwmSAYyODm5pzEQma89FAsNdFbPIENh+iN7f7/dPU+LFnfmY0GyR5D2R4L9Uu6gJjPVNF+MDCC5J6neySV6BjixMoK7DXuZetLkZE+p+fYFTSLMp5QTN1jvft+b63JJr1X5D1OoGlcAkyIFZVmudvm62mLqy92WOnIb6/sBr0gDdToHmfG3f8lPnCFUXV9VWlGX5LXoIbN68+fgcQn07BuCy/r9btmw5SWoByrIJ2Xe5Vu1bA4xJ0thUDIiJPHHajlrJ3lfV+8BL58ebXcIERoQsJHB6upDvoomeGnLNY7G5Kbt62XxZFCsyQSrtrzbAd2Xe3tOZRRLgaP2DUSwZi5K2m9ye+n7fxXMDsypcyUl63D+yPgHG0Cf/FgKIEJKy0USFuITvFUhGgn5FQdEHTEAwSoSSqwQRDuKv86zweOj3AcSy04SqOZp0mP4/KYbTXJddvfL1Q7XaHVd5LbgS2gUePIQapyv7xmflsniROSAUGVwCfuSd4XLX7zZzzuy5SfdPjEKqOv2Exd1uqRCDweCjuPUxgCn04nsTiZ+LWACeIMsGLYoC8CcBxFAcII6zl7KxGhBDFTLutMu8LXehgEQ7xiD9e0QSdRPM+MpfSr6bB1ZIaGMhdEE6uSo0QQVrbs7OrpxZLXffMGgo93tkVIIN3m8CGcFXFbGDb8bUn0wSvkBjE50/1ghsp6HWacziyNGoABbxVPVNb9clkoCTRoKbDEBx+z00CnoIKM4c8QomhnT9cggRbB2+g0soVYQnwv94ys4UySsDr5JmlxoKdJ5Xc0vXLl/DnPh3AwyY6Lq+31bUmp2oXrngEdWTexCZt++rzZkDD+TfFSGrAguXKSnnUg+QnaTLvV7vz+lnTYAXFZ95r2IAG7wUapDZAcBKkEPhvU9qkPmvvf9vxeCxIMV2UlyN371UjREXXvDhX/VlYJqmBMoJMg+q3EUQCbwTfJrgw08158Ry5FnU/PvNTWpe+We5xE7RTeKe+2hqr3Sn8T6gzki7I01GQwq/CI+GLjB5RlSoPRY7J1UudST4JpVZKY+d9IOHmgq0KhWCong6xY9VIFOPYIDjNa1Z0g5USjJPOiYCFc48/xldH0OPvCjcrWVKFyEH6YwYIo4MSRz03n8PHVlVT0OK+3mYoLl+dTamBr8ENYIeb62UeIhgmSTB5fs6Bzt9kfacAhY0fJ92ymSuucdKVGburWkrnDIXkAyZ02pZlJcvLy8/FYwgspwneoDywR8Bw0INmpmZOb7dXn5kURT/pAuI11sdQ+ENFIjr5thC5qBIEgBTaIxhDBHMTyKiptM1GSBfXH5vTHBnMjLJhQk+EaXiYUqhiN6ryUjNDdvh5umiSsqzzvf1MaTGedqlBfQ3yzkSF6nq9WwMnhw8Y6SNHBn7qRJL5806sPno3sfFpE5Zp/iaAUBxo03ShHqAr+IoUJh1qYe1Ndb5HkFBDAU5iWHCTYaspmtsAFfAk9BsUHKimAN2jb5Ljrh3c+s2aQ1N2Jnb8xwSH3X+l2i9uKnJk3R4u4cRM6eE2ANkoOp8ZzmNs1MkT8Uw6U+Q9Wwi6/ps8cR558p+v/+Xi4uLD0agg3CIit+k+VVDX1AaYW/ZsuUAGuEBhziuZ61PASrDLhDrPRVsWLEEkgBjh/xxSiKl1jU46b4ukHc3c/zmC2Nu1N3wyvhKmEmCaADKanMHK/qwo7W5wDu66nx/ldaHmxtO7/8vydhvc3+rOrsDablI1xroNYSrOeUGUaA7LGRv74KBJw2uFRu0qQIRCX41GPfBe2WA2kP0FZ6vxqs1lpO565pA3DQVf47OYz1EkK2H5fbfjRay9PQ13E/cjN5HkgbNnspdy01i39neiP6e9P5INZYVpU8J+O1qnX9HAqq+n84ZOuLdOOEUSCy8H+zQzCvEnkkVGoJA28e+TbvIiyYo86iqf1tstR5sCHEq/SerP/ngQ/hKKSJeXFw8ptfr0Q3+beiamuNiEuxqVxSPVWksUpILaahw4H9OLg26P7k8GqSwHlH5ouxsoc01CZEeGJz7qD6bXJYnxCgQICZlcqba2ZUXuyBBgDoR3VHv/X6rd1amHhNUL9Xh8m6JiMOVPQHh6ht6Axsp75GkleSxs0lUxzUDYeQCgQjxymCoEGMG+BrCxaK3Smx2X06Yvemd60sBroWZYAB0fAhIPCzKKEjM3YFVFzRpA+gNYZHTQ5nAcDhzdbK5F/memOtRJLbAvqC3J2BeInP0AuMUmiT5m3tdM0F94qdAKy1RUxzKS/PuZ5O+ofvC37kOBRQsJrVLHBT1Cer84nA4/AMg02dnZw/Drp3o/Zk0dFK/xZHBl7vd7jmDweAZVVWJLm+F7LqQPyXQo4UbNIJ4VIyRCO86897gxycPX7DzE3c33VqTFsQWu84p0kXlVDF4ke/w31l437xKtY6YnQxyrwbx707gJHgv0WmZa5T+Zlbsby7DPFAmxd/W8IHsSi1WQUojmWoGSEe0MABBPHzc5gWytaNDzCvVvSlYQ5l9kFAhBtJkpD5ZdH+Yz56xJ03onqH3JG8JBqhdjDp3cTVyDykqAYVbSwaJq6mQOoC/6buZOpTvgb2/XdxfPDcQojJWqhwM4aIJYME7I36uep9lX1IGMQYt+EJ24hMLAkz3IuwptAs66MQoWoG4hiU677145Mqy/Gy/33kMjVzQZMhy3iEwVnMYEV6+efPvLS4uHtBqtcjLeLxz5Ru9c9dpqx0Z8tI+/DTGeH70ERed5GDopHEZChAqdgBqCwUmmUS7OQaoJU6uq5NYRqWQLvh7RcdO5X8HaBo0apYAt6ruaHkvkv+T6cekaScVLQQyx16m3xXizzbQiMA2fo/6BAAyPZ2AnBY8QxZ5zAByIsIgMMBqWJQoDJBOAINFGQsWGm6cpG5f1Joaz0aZWPLvfZkYgIxZrdXIid8Y3wxVKfbRIKOkeafUA/cWTufM1mCtxTNjaq1+d5x63q0xT8/2ar8AE5O5uC1X7OaIn7+N1Z9eb19xm/vwOe5ZlWXQLFwjKxG6gjka44t98NLayrojqwr0P/Ql7rXbD19cXBQ4lJHCpN8SBpCYgDTFWFk5ud/vgzNP4ciVslH6MM01+VyM8WWW7DUshrgHE4do5idMoDlbL9PGF83jsbkoq04BU4XMRw/h6zzoSE53l9Otq7p6BE5W7CCkubQYkpZNCneuiW5CkHgOYowQkjGMuewmnRwSuMkY4EoMT5WGomPaIisDHKCloRiITXDcz/rK/zndXmoVaOy++2/NgBU/eIMBmBfz3FsjrHz+JuIz+kw5tRrSl7U258Rd8U5ZvbbO5SMiSNL6cjJyQeRcCAVOIjJnjxTPVEpNIb7zEb4fY2zH6J9s6RYNdWpnTFCrPp1O3FMLqKRFLqWnhiII4QCvkmGHAqvO6alxGk0KFAaoLhkOhy+med78/PxR6vuXk3mXhk2O+mBlgHv2er3zXOneLdHc5AiyjWLjBJ0AZiAnBuKXeWSZkgRqdKFonUQfLVuk5kY1LyNAkxJIlwOQduaKxIceYyTPiKDSB/GuEHDDRYiPPe/arm7Ml5i7DCh1PEyZa9D8zcacq55vRt9YBfJXKmCvpYbUG62MBAMcI5ii6gVa1SOsqsQI9mE1A4hb9JYwgPObtD+ZSfCm7i1MnBmauw1GA1IHpO+uzuvfxMU8jGD009yPgiKA0chV+iRRZeYcQ/wbqQ2PkXVMmFEh/J2uA7aaJUo297LJDPxbp5/wruIuDkG0CPKblKiTMCUIVUjSIetEqvy7sWPIM+LzIMulXDrfG5bDN6+srDxgYWHh7vQN22X93waTIy1iampqv4WFhVP7nc7jnPOCDp1VNF0fY/xDDXuLB4BEMePYfGgWJd8hSwuDRjqfmJHZkLhN4hcC1M/cVTBxEiG/MCbpzX3pJ2B7uWpg8DE/pLwmlSXbxHsStLBfUrH8OOdkEkPWXg9RgapUJ+y9RwXCtrE6BdtcOQFoS6QNNs4OfnWneLwmzAdmytChVa30l6pExobYEQPsF6MQIu+I5+XBy8vLkuy2E8GS44rCCOjwlEYmvFXvL6d4qUp5/CBP1M308gHsoEXGNXEPpGzUKOZlp/vEfTT7TNczBdCSUUsnyBc65yq6dKLS18SvCILQHhFvnssJplm2LwrBL4UUDxHhUlXVV3q91kOWl5dP2rhx4z4I811Ch7YxuvRScYUuLS0duNhePL0YDF5OBw4lNokKY6Vr0QYpr4L/Q4Ziqk7SyxhgSMF7AfPAuX/vhkN850fFlBhV56fr4uXGq12igojkSr74szwGkE9+Z1IAyqIQqZGQEup+A+IT1gWbzgzzb0nL0eTfN/VlZyoZv2dewgCcNrr5Vyj8yEQGUFtDmlxHA8cdMwCwKH/hKw88uqacjI3gUSFthaz8c5UNYBJTEbE5iYiantcw3plz/h75u+TOAIxpJKn1fpjn4OZnV1V1GWYNWjAcBtIwsnUFrAwVGftud5XorFW9d/rfZldI+rk6Le6mXW6o1CNn6r3cl2eIJiFIaeMCJKu60+f+kyYMkklqtStpbZ3bNuh2nwa6yfT09MGUQZoRfLNMwAfgmGuuuWb3+fn5I1dWVu5PN8hVDwAhIrrHQohVJbqguCd7/f44Z77W3aq66zqfUYl1fdKBaaIsnhzSKizaaQUqcjKYpOD3tNzUdjsgO4hKYWgD6Igwn13MYYw6MKytKPRHiIX7EGTTe7NJJrWaRMNlKgTERXrGm/RenADYGeZ+XMUAEnBKHW6IiMsJkNkAn08VYcIAq/sDeP+f2lfLGECOcL342XKlwOjhXjQVf6yqIIbXNIkBjAkgTMujYU3voQh1otIo4YvK4VyO528QJqn4h591vl/Vug189RI30TkgFFgHcUCop0mi7tIKyUVUHpIBsSPRKGSPVhUgKQPws9ZcWGLm+y2lnhwpTnahLU8ZZBwNiuIvlpaWztyy5cYj8WjucutUPoD6syHhA53Q6XQeb/DoxgDBuY+p1+FeWvpGWL6L4UKBeyoiL5AcwTCBlPA3mdvKhoI5URTxTh/jk2m1pDkwspm6oJIqTXBIi8RF/5dmG8AtVlmNYqNc0RaOQhGmr/nmz9F8JhjAcoq4dsoAzAdPUwjhzWnu/qoYRfKZ5yg/QYQBtEUSxUDNVAgYAFSI123XISYBYxk6dDPABuHujipYVf4P9PNbi6Kgr7IVr98cAxhDcwLgacK9/PcxxhIkbhNicprnQwuBTLhoXYKlHX9Y6zZq0ALzPKk3DGcA9dhkBgNn8195cxN9jxtjiOQzScarMJnWPLCH/A5HGTk+3AfVcpAgOB+iQqOm0aqqPrewsPBAgHE3btx4111uksGHKBvbtGnTvgsLC/fq9/t/YuhfmnzFqrxcif9EGkEjQSwPm2xJ6Vvb74det0v/2vRyXlSQZ0sAy0d0cYzV2m3KQABwumDExhBIFX64gkwRaYWQgBgUDxAeARhgXB5om5T+EdTpkPRG26zBoMbu+RIRRA3XNxmgyQSiuypR3QXXZHB1qB61hkxL2/Sa6PREkPoGYQC/XSAMG4BG2ayF1QQLA5C8JvAv4yquOlKrp+LeqF7ov/L5EDaSONZJ4F+mjk1S54wBuLgnBHpodO58BJFITiG6CQgYjSHll8MCiSyVnN6HdvTxyeyXQtVwMpJD9WSMZAie3Klsu0cxSq3AT4Jzn6y8fznCTd3CQjTdTicIpIoiSFhvseDCX2vG7XEl8acqnkqTRv5Wgzg4d83S0tITyGxGm0GrsfXY6eBD1hSbVIjBYPB675zo/3Jj74kiPpOmD+h9ij5GlPfUENw/S/VMY8QQ11MRhpcB1UMlhUkEghl4b74XVEe3oRmkPwCsKSZp+SJzX4I1ugoiZPV+JespOz4Ndk9dskCPvUANWAvM5QyQXyYtJd2XlkemAhENR3qqHUBU2o7ZukmexihQgSQVIlNz6LBzoSbDrc4G9dKMDgRupHPNALo/6NK0mj3CV/4l6XsOI5j+zdYcwwz65rvk78R9kM5HYc9xH9H3J9Q+1yM/aAWCpSAdXHBfdT2+xD5rcI/WrcDZJ6rV4b3nxP9PxRK9wLCYtJvQ8dCV9/5P6Tedf49BRSGCNivxpI4A0AVQKDDcGfJZV7ltnU7nedPT0/ciFYIcN+yAJr1vN1ggMkK3bt16IAzQ7/cxdqV7I4PsUCdgsJE2nJJPov5ieuKSk00onKZ1eF4EPUyaLif/v4XeOdY5rsXXrOrNETExBET+D/h4fQgS6KgXwPtteCZEpcn7DWRDKD81XkjDGKDRggeppDiiufsTooE47KoNcDMYNRXiQr3HVei+RYr2YseYISxtUtWHTsDo9KDVTqYCRS2Kr6rqQoNFyVQgIsO4QTn5DBdHGFEhS4RYcOnq90BeeJw1F8/UoOb72DuJQc/aS/2tBsZY09yGs/Vr/JD+SxnAELyTyuTRM1eruN5v5UQLzr0H96msVzKYpQWuqo8WaBM6IgdKekenHJ/PKOTiB6qqelFV9ckGFptRGXjfxADVi8VrNRbUy912W2qB8QSh1ewyA4APdNNNNx0MlMSw36f1KO9sxsd1eH8UIlHSapVAxFDld91u3BvO5EX0WGaiuYfCNsayPuX7mXtud4pA9EgkW5LWSILQBkxLvz8YQ29X9NpZtTfjob+34xri58jW9/hX6aiYDDfTnc0LZZf4zfXvhnSAPv8O7oHhRmQ6ZY3KqSbZrplvW7xA6rYVePSGDZCK4puNsr3/JjELCToldASkeioaIeMzwcycliXloV4+NxbxGO0Qacaw4Phkl0WzJWlR3aDUHIt6xvrIqZrbVBOGBZ7KsnTDQWIAYM21HhrV8waFl3mK9I7WHgpqCOdgxbnXr/YW1UZzp0MKxwHSD6yfJL7SHMLIki8puSVB8cW1TZFU6V6v13kVDADc5y4zgHaIvAsMQCHxYDB4V0Ig1iw779ejumgHP7g2JxrJ69aXlE0zF2cWoGlKJZOy5u2xPB05WYDH0CPv8TFKdZNslEkrPBOTRo2ZI802kiFsEHxKNJfiO1d9lcU1l6yBxiakiJ7o8USQwQklMxYsUpLxGLh1p2KMpDU8Mcvf50TbW1OkUQ/pECNNok3KEwcILgCO+8asvsD+BsAsxTWoaLLxpvbEKE6HF4QojoMFPe0caSjYRxIRHo4Ok442Y8FjIFeSzmBry7tLZxUndQ2COzSGM8/1nfGP9a8aeP4aoALF+N2amk32L8+TS+dggToj+iYt1CdUJgz5rkh7vUednKh/31vVJrIRehC/uuu7nU7nVTTHuEUMYCeAQiSe0u/3/4oXrsvtvN8iKk0iHGMAexmT6OIC03+bL9vUR00nzb8vmYyWeiBEQGG99oU1VSZ5m7ZXg8aGsOxUggtJmD3CAMlo89OAfeEDhxFiGY/PCraloCWrwsL1+mcxRDnesSOQftx37A+PmwjMqNtTUjBSOrMc9+DjCAOMpXz4vPQIBhXCbweNeJlmdx4xGgwO4lKwgONccH9pjcZ5D/XR11FArUl+PPPWDotklEov3xi7GM+kqp9ChFyq0bz0W+vj/clhV5prmuP6J8eCete0pxfOD+Isla9opE0aisDTZydiM0K9M1qotQNzpSpNGDKd0QkMgApElJ+gojeEP+/9XGu59UfTmzefunHdun1uUTo0NgDF8fNbt57c73Zf4pyrdXE4C0moiU/WIwzincTNdjVfcpJnwv41ZjBJwP3vhn6rvuoMbn3ghxID2N5lV6Mmm/QHLKqXCtmtTZENyQcK8dvomRA6BCRF2aTbxoiqQRdCOV7F8+SkClHuI8w1bu25Tk+VQ6IQvxjAx+K9ajbKBl0Z/V/xQZslkZfh2RAGSHiohxcdac9E6m+Z0k4yiPlK9HHiLaamXjEauQdpbtSJ6mwgXQSdGjhEMJik8McGRG+gxasES8PJkNZUe/sOkkoJ2pu6mHHHPk7pwopXcpX35migeeWnQn4Zg1gc457O1b3b5H1I3DQv0FVXXZXqAXbWHskGD+a40DjAicvLy09zVSURVzJ8WHyaOqiXwgJJTQZovsikF5505S8uJ4Lp4Rr5lLI3FtsaMIgqlOPPV5X8m3zVKXpp0h+mUTx/JDfwhxD9djDg0osgBNJvAcrFhfcDfo+0gwJE50AnVGYrSuyLOkDzduwjJLadHjFVLKXku7EXiHoASiJfT3d0fgdP6T3kBCCPiG7tCtFCPpEkf/FOadR5kPJvClDJ+wGJ8mHSh5P7MWzL30+f0Q8+XCf2lYdh0smaMwHvtXpNEw6SrSkqpQHf6j2/BbOr3deMru8qDeR00LxyoSoMoMVXFMV8njmYrQqgw9zc3LkbN248hq5Hu9wmlcsiwdu2bTt6aWkegKYmbg0eHhoio+c1SxwnMUDzBXd22XdylUjyVkbJABWPhaEyCBMIxLqCVlkqhG1SBrmebRRJcOdLkUXC/gHviGQ6sHqIUqfgRTZU1VDCW60XQyAQg94bNLt7S8ZkSoXmFKEgRvsE4xaMeIGIhAOOmwFjjW0ACKmrGa4K+PT8ECQAJNLaXLz5fCBS3reqylWuR7mn80sAAccYpcVUjPHRGMCUMkpVWggF+VqA1BoTaKArrWdO+I01Vf0fF+RbNRvXCmJyyd/c551d9vkmHdWCUU8WvEdHuRgfa9nI5gcthsXH5rdtO3v91NTh2LT6vSbJrx42gYsuuui3yQXatmHDQRTHDwaDD8jNFWpCm+U9kbpV1fWa3p2fl/jzlzYulxwgikO0UQR5SR3yUQwPR3B6dNPqC6CobJPYWCLVUrVU+VcpYWGgYqiyYdgaSC7wgPCMoPb8Pfnu1DMURQZN3iA+CJJnSitXKuWco4ruhLLXgxhOdVEAm1Z5gTCC1QMEA4gXKDsd/quqBHiAYM8JMYrHh35iJbo2XWFWGak6pLNmSj8nM5IEwa/QYkizN89WgSUGqbxrXyK0eNt4X0FxY93SmnZ8d7s1zSDNFZvIhIp1pdH2rrtS+Tfpyj83ifiFAVQoYlug/4Pg90ZqG9BOtF6l6Ha7L928efO96QojPQFuSUEM1jI6E2oQnqBWq/VHzqVmE2OsUAcMCEGgw0ajTp4G2zwFmi+5syt/4XEGaHJVHqZqAH5hIRSIIQerGhN7Qk/LodeRUrpRXybVWA1EfOzmqaovlSx0iDnGFRIlpSwvwZNXqw1E8YZomF7TPTBCa/2bk5LmejEEqaWojeAQPic2QOYGzWyA/8JfLsTPKZLSTV7snRuQ9IcUFvevZkvyL9LfPF16j89i7GI/aCmnET7vh8ASVy1eNgSZFhrdKEzQT0wwXtf0b76eikBXG50h+FaGQ4orFo+NRdmbtLArdLEjBoDGJC1dYkep3npVOnlVVdctLq48Fv3/6quv3psS311Kg2DYBMidoJqGmywsLDyqLItVzZw1a/CZWhgvSVDZC/+8p0D9skr8EnxSTwZlcv8uq52eT7MHMeRIvdBNWoU9L0hpXUqSk80LoRVFgepTI6WZC7fhcYARONnQLzl1xAZIx32KP2BcW4BNbIyxevUvSCWJk6SMTprLcQL8mL/XDJAqwl69g0gwKtBZOBpg/GGMh+aN9iBynjvWz9UoTSeendJvjgmfSKrKGu5o8czZGiMINLCGL13svaIYJgS6rvZw0KYl9HWQLi5FsqFVOIgNoeh/7xMYmXbcPS7UZao5E+wqTUwifu7D/UQoFhJ4rYg6S0sZE87D4fBfZmZm7g/QM6r8xRdfzPs2SX3ysAmQPXfFFRvusmHDhqO4WafTAcSJ1ASpwNENk4AN+q5K07xAvckIzRdsXvY5vlfDbagf/MGWABdjxEAlT+ihGiSTJLNEOKIfy8mAPsvPKiHpfvIRvqOJduZPZp42R1tkU70kkovbUL0v4uuGKFapBYrGnNQfv1SW5VMLWqYOh4fLs5DCLj7YvEBZLtBnfFXRKf41sYkLFMJ/xOQGPZIqNgTAMEqXegnAMQ+I3Z7PyWRSW78vBTIUw6vk31kMxjxtNMfD0wT4GJ4iwruhksosXVMnWdJprUPA5//v0iNs5B4DXE32N1A1JE5kmb2N5+c00WSMSZfp/czTAoyoqkDPp9ZT6tmrqmpqaWnphbNbtpz+s5/97OBblAlqgw9qQOwO119//f5ghS4uLj6+LEsBuBWiMnvAuXer4YO/25LCmjW1zRfa0SUcrsSPPk6kEhVEJB/puujCSFc2q+x2TwSUKoZAHvl3o0B+SFugthbCVCEGMjko1n6gIrZZTfKOPBT8zO+Zv6Qd0yoohPBphAzEx4kjurDBoSfGhNEAyQL097AYBwer7z4BY9XZoLUj4dOUQwIYsF06NMmAkeosybNCAOw3SDYQ7lQwdwQaEWlval+v1xdixV2rxe4QoNhnO5DAdtkeSQ0zJwGZpahyOhfKTsn/Yl2xK+gb9mVfVS/B+4KahRtSAAacoylIfhLek2BgHpmesO67cplA4iRjPYCKxCFSZ4AaPRaDwd/Nzs4+aNOmTcea+3OXC+JtGDFwdAApcf311x82Ozv7wG63+6dAbstDnRedl/ahAmSU9E2D8sCotMLoXOo0X8ykkF3J5ZncaLg9SZ1NgFgh3ODL8rkEg/QZLMTBMILCD56rXSSpEX4JCVWmuuDdSSgCQhSWX59Lo+ZJJAxg3ictD/wrnItC7Y2hof+3avAK/Rede1/wgmIKCt0/BINHr08AGvm9CmAsb7hAYwYAS5X1FFwgZVrJK1IA2C9Sh9uYhgwCfDgoFFTLbLMdMXq9B0qc+3CaSwpDiOj0uFOBx3xBWZbPBJaxKIrzOF2qfp9kyGNGw9EhkqpAzIOAYWJoiRt5L32En6wSO0f3Zv2bJ5LNJZ+rzc2IH3UObeMU1k/fVwwhfi7L8ttL8/NPJP0BwQ3cv5VD3iIGYNgpQBbd1q1bd5/etOlY8quH/T5grlIqZw9mmYDm07yPYzRDlE1bpXPqJUeuvlR+SYWQehBIIcY4FFgM8HcwJMXYHqf8YgjdWeH3yD2CWETtSB4e8ZxcmFQ2Px2de7gSp+GZTmKAfOGNAUAqwI2Z2u74cKk20MPH/h7vKwJnnC6Wv295OxCfpEKMRqNJ9QCfgQHUBfktXU9zg1IPgDEppaN6T4lQKxQgnRjpO0ZU+B8UjoScLcs4/ewweXwMiW9nJ4CoF3UBTyyODK6Gpv+J9CkryxM4zTT5cX+yTvH1855zc3OcMJZfBJMCkUhHHBGUMQSS4S7o60mm7yFGuAXLJtCIXOrtgYbI/4GhwVplLwQ1AuK39XSV29Jttf4YQb1x48ajKYZfn/n+bzEDMPgSHIQbSeESj2stLj5oOBzWiAI2AXnZGD5NApuqRDABnI/ExTaQHBslcslt0evA2O+TNoBUh4jODM4JwKq+5Nel5ehYl8z1WdMNLX3CCmhgEkoRgT6RSiyIRQkqxyWSo3GC9OeSInyYEYwavce0j2L439tUHYiCvBvd2DpPxXRVSRlJiWtNBsAIxgYAGsW8GIkBKn+JGsB2X8mh0fuKB4S/kSimOTeodhixpJZzIuOmolrMvg9xNQm/ZoDMrbi3uETVEKbF7TDto6H/mUDLT2257B7K+MDXPDGGKF4ldZv/YZGq3Aw36G6dTmePrCEfdCFpE/qcnKlget6PwivDNcoFcLvf7f7V/Pz8I3Da1Nmfo1uo+jSHEQUeoYVrFwQucWF64dTl5eVnDIdD8RvLhqVopPxMOFwbRDyal1UUaUkO41+RIsnt9tRIFRJZmTH+k/YBfiGoaHZf5xzNrSmZZNHyWlMjUrtqRsi8OPi4j8YrofO6XKVqM3A3iQFgEAgNXNLzrUM6qd1i9Kc6AphpXzZwBycd30dKHoR6CLBTWqs64/NzGMExRuIaCiBcnwAgwxmSHkRQqw0mFfUdLYUYIjkgRoE7kYgoEOUphlBDK+aqhV120tWJZb7yNNLj+ysktalg4sRt5nRNWn/mmdLGh0M6NgKaJR6imKLrpERjZNP0+31iLIfw3sK5x+lzeBdUHUug26coBN+U+AJtbiVAqR5oI/6VQW/w3vn5+SdNT0+fSh0LuWw/t+qTD7tBrQpds3V3ukjSSLvVaj2lqqp/tMQs9Y3XOrIaoW9DSlIwMlRcGQhI+4Ml61GHZvBJWkKMkcKHd2o2pPmUc6nd3EjbzHwjIBzwM0Gt6AUv1UdEfFlg81TZvXL1h3tIsYiASPkgRieqD4aexg8knVeZzQzqVYShRCWJfOT2B684RGNXJ7AoSP+XGYJ2lgrxVWUACALC5BmriK2hSsLUAhwWo3tIjDHFbLx/Xa9Xo/FNckrUMIesF6pr8AngwDn3Kc3bN3hye7/muudrzzMsdYVT+OAYBRj4izofsmm269NMOa1z7i2qxiJYcKZweiLAQMCuI/OagiI/+xC2DIfDNywvLD96aXb2DDKYKX/Mq7/+nxiAYTfBlYQqRGCBZgNLS0tntNvthw8GAxK6xo2JFcJC//u/QJE2wKpRJYadRJUlpC++7Dq/xIC28KbgS8azILg4GQE0F96unIC5LIIMEZ+QAU9hPEJY5pHImUC+l50gbIJg1Y9GYSX1rVoFy74zgqAizOIYSOeTrCAmM3Q/E6NEtWEAi7GM3aCpyAYiMuKd9K71yWfSF6lZtyfyfqviBYnbtzFvIVpTHZVZcSR08J5h8OrpjUqzo/Vvnpx2mRt7T5L5FOpQ2u5KIl9R8IC6Uk/2PQb+pZgKlYt3R/hRR2GI0xJ9T/vBf7sf9vv9P1taWjp3bm7uJLSTqauvvtsuV37d0mFMgG5FgGxubu7w9uLiab1e79zhcIjqQtEKzSMkPllvclnesxyN7iGG22hExxfJZ6HBhB1lFsmkzjfB9YWPaxTTAmxNQp20CflmiBTXU4AGfULIiqNPLYPosw3JmgO0wnRsmumwIKdZ4Yx5t2w+zefbHMyIhojpkba6Q4xzn44phx0GEGxQ2+AQPNigOQPAmM1n2fsbIZsdtKe6Sw2NmkYZFvFuRuvFvWgGNiqezvFqteM4PVB/Jj1/R3Ox+bC+MBVSnfcX5BBJJ1mVxEQSX0Lt0GKr+xvKn6aRSwKg0gljm3PuI71e77ntdvthED/pDmL0rl//u7fY5bmrw16WB4Aacc3WrbvPzMwc2mq1KJx/ZDWUDioJ/9KnwmQpY0ueIYqjQfwVNAVC9pZOoBJffiaiml42/ERbMQn6c6azN4l/0qbIRkAQC3EB4tknVuCAeoEHV2aQ6qRMt85VJ/EqOS2yJq+cQFxWNdaUhs3n2xxWMYAZwbWeH/xnYsprIpKZMErHUXY6uuTIGDsjwFVMoO+FC5nOPOxBn3QOC0plp0BtuFIHoURq+UqcIAAG5Ay/s+dvxwB64sAAnOLEUcQWyMstZe99SNA5gzqeQj3wcbEsaUiCEBKVjM/r9784GAye3ul0Hk29ikj+qam74e/f5XSHn3fYS1uuEO7RlZWVQ4ChHvR6IK8lj4tis5CkhM4vPu3E0YYcgds0EX6G/kUiF/odkmA4HFJ0wyZArGZgTlI7drQhps7shh2Cq1DmFgKo0hiHqDhWNgjhm+oDMTw8xNRUIsYIAgQG2qSwfvPZ9RyU0JC66PEUbTd6hNXw6BRzN/sDwAACupslle30eRkT8C4QLu2prE0pRrWVSorBnqlNdkq+WD+7eTgcPliFj0XMbwkDmC2Q8nX6faAsSSe5EZpQsNtVgk9rEcYpHFHUZvqrcQJ8it8b2kPlqy8NBoMndDqd+4Fejs5vwa4mvf7CR/7iqEP4gMEPBYKuIwjSTk6A6CUrMkTvX4Mqo+rMCTGmI1aSynQhIHyYQaBLKCxJjAPsusDtCay3Qn0oUdkRni/8pMuIwYxh/OZEMzl66FSJiiFeFv1MqjxLKAkidaQwRUFjM/frzlSfmih0rpwmFJ7XDJAnw2mDDIp8LA5gDEAc4NDMBWo2QPM5q56pc7OTB0Y+PwTfjexESoGWzNcsVpEi3anQXwzVGMKnVUCY+pMz/aRn5sTP+vD5VMlHot1wSPdGaruFAfLTX7YfAOVUsGSOkJdrQt2Joj2E8MmcAXxVfa3T6TwWyE6gO9FGfmlqz46GvTwPn56e3nNpaem4fr//KOeclP1hDOvLvF5QB6isKkUKggs0JLeE3BXJNR9ao2nyWepMRpKbvhSjv0DxcSzl2gInuR67I2YY2wGDCJ4ox6l4dNjsqooUnR9BNqT60zG6aDv0UjFjQElL6BcYgrkXahIhbHdlJ8CebGjdImlM5F/wviLFGQbQBhn137ABcga4uRNA9iN7b06zPYlCAyGoa3p9VcX7ETnXoBJllkTGj5QWVCEsxhBLX/k/007t4j3KVCa7vz3L1sL2ACaVU1QZixP2dMU+/S4ZA9CE7bvVbVi1ns5RIB4TA0jhPx7D5Na1dauqr7Tb7UcA2gbtqcdH1uBWHTyQ+ADouwsLC0czKdqo6kbacUbDY1J6SQfABUotqsAswgQpg7Nu/Myv+Y70l9WfcYdSufVH3MeCJVlAzHzTzc0waSRIFSL5EgP8leTseDkJPhpi+IDi0xCQwpB/VlZYQV4LhehW9JMzW5P4Jl3YFJbTdGLw1iOs9vWDDfo6+oQFv7pPsBrBwgCZDt68f/MyAjVivCuJdJyklktFXIVaBdSdGCRybFVj8nxt83ou+0TuUWYzTBI4FndhHyD85IpNPd0e6ELg/qISp3cLnRBGAqiLtLdcKlQfRZOAxl8tAg/Aq4QRdJr3tYMgqUBF9Y/Ly8v327p161Ho/r8Qf//PO9iYDRs23GVubu6IxcXFh1RVJdVatpES5KoiNgBRTfRogG1Bd/uspTnkA7x9rZEFKeFbdXSNe/K3qnodvniVMneKcaFZcC3Gnao/Ukmm6AhHFEXx+BjC53HxWQ57PigMx8PAz855KsYeQRCGXrXKSPnp0iS+SRfzsLx1ToAUCBvbAMCivFa654S4Gh06BLEBMh0comvev3nlDMBaGOwhejTEiN7R9iFcY8/Jh3pYbiL+oj2+pGlGZoTb2hrhJ+iSMcQJJwaBL4KaNTaQInf/C0KMzpGWFp6PGCPeQwxvIsVyKiU1THA/DZbTUp3furi4eBr6P5me+drc6oOHU0A/MzNzyPL8PMfrB/PJUgfrXDxXq4TYDEmBoK9WgvaI1Nt+gjK94MIbSfTi2BPIO45h74HV+6TP6na1oPttWnwuxqlukuHMwAymh9J04WhfiUck4c6XpVNEB+k+wsXPOU3AfHoU30OhTbhvfuw3iW/SJQyghueYAcY2AIEwbKSxCmQMkGBRpPHGLWSA/PQT41Z7KaBq1SerpjcHw900VSTGOpp/Od0kjQmyGIKsq6pm4klTaJWna/+AutAet6+AohXFI3Q/JRakYLZAa9IC6VMQPnUl6vZkrTl16U9AERB2m6BWoz4BnT7o9V4xPz9/T4Jec9r3l/f/lQyMD4Jj0lFydvZ0mhLTnlKzRFkE6gderFLbkMAM30UMRHRFDF01dvelObZ+DiNuL22bcx8Xwt+QipstMI2ikaJPUogWua+eDikqmlqJkp0oPjarb63RFDIkaSMCiELv/9UMAKyZQNckvkkXp5AZo7gBlQFqPf9fva/oukOnk2aTPBjgqCzNYldVIJPQEg8YxiGY+3TD2WQGqNRNT0LSzuDP9f0p7XxMBoBm6G17atoCWEcvjTHVaeh3GN+ISWXFdttdkhcVHE2L5S11Ay+TtGvl6qa2S1wIySOJH1m71Npucm7LysrKs/H9k++DDforZQAeTLkZk5mfnz+51Wo90blK9M3sOP8kxeyW2qsLaZJadEdTaTLdHo8PG28gWcIo0vw5Cpy4+Kuzhf+2+r2RItJsQSRIlGYcIkFwsU7Cu6lhRK26K6GjyX0JIqGHau8xixzvyCPSvEwN4bs049v+BKAiLIHBJj13fAJ8U2FnrLbi5hjApH+t+iFQUqva1NgkZ/5GHGq1J05AhGusz2/RWE89ZvuDOqfp2GC55sKoHWME4vyJlrqizIIAkL3O7QU9nXNbzk7s3VOz8XicljquypIl3XlxcfFx5PpT6QXSQ74Ot/rgoVY6CQz1wuwCacHit603M4QtoLqpfmfpvfWCZMywSofPdE0zZJPkACIvtWEljfi/LO1Cn/UT1CMS7ZBeMUYpoaxR5IT4s93XH0US+vFJgFeC6XPKkD9EAp8S4s5cgs0LZjFvCNJMKsKyFkm4QakFeCV5RmnNLFEu/CfQkMr8NxeI4jIGEEQ1fS4FNIJhKp62okhI2tk7r2IEZQIt8RTQL77rgvuoujFRR8n9ksRAfYdNIcQPoi5qHo9keapAs4q7fE9lX3WeMKpcNm8VkJzmeAxJi+irN1GOln6//9G5ubmHrl+//nAiv7kBzPUrGcQDmMzU1NThc3NzZ/V6vVc552TiGPayiE7C4BRQ4ILj2LM0hBw9ztSL3NgUqWbMoN+zLEiOTlyXj6VZgrXqTIQkhtelpF2AeJbQziZAKCrwU30qZFLQ+pq54P6lUUa5Sy5JnS8EDCFiiGqQsE6G+3xMJ0AdCWYK/BtD+KrCLJoKZM+c9Fz7PesEg3LqkA5B4xJJHba4y/anXzZENiQhYO+fvDOeKrvvUAJp6yvBRO//RAF8eUcjfNtX28vca5TvqdkpeS22RLBxgWoa+yq7yDm3sbW8/OJt27adReoDxS6/UgPYBnYAECpMatu2bfdstVpP4KiyySsHU8pIQ4MzFBrdJJu5Mk06TDIy88XLc16EGXTh91XEiLebpNVFo3ZWgHRJvrJR44bWO28/JtQz1KUMRPfHqEGWCpEFpZrzbM4Z5t4TVyTVaNvlAmkgTBjA+1UMQK2t5c1PYIDms42oWD8YdA/sptKXzw4+FBi8BndoUCo7YYMxuoQA3g7Fd69zAgf169FHg5Wv0SUahN+c544uPmsZrajBnPCUOt7bOZfg51OagHl/PjU7O/uojRs33gO0Ekt9aNLjrT7YBOwA6i+3bthw1Pz8/H17vR44jQm/clwDewUQ3gRHFJ+G6KpFOXeVAWrJkdkJUjShALb0HADjBqQFvEVSu0uLJPJNVo0mFah2ZCeANX6IMZJ8Rf8tixrDtE2p1ryYd8YAgly2IwZ4+SQGUEOzmQox6TKJagloshbWwwD4SCAMJ50A8l+1VpiEgjFAAhzrqwATG+slCoYmOUIqsXMhdnNr0pyz5S6Jp0yDc7RqwvMjp7nRjnPuppWVlecBzjA1NXUYQFe3uPPjL3OgBnEKXH/llftTkbO4uPjYshxqTECQBM2zQEO1x3A8q66Xg2rxQje3iPVm56pRZieA5UPQ7cwQUvE4iA0iAfNmGjUFNAhCMO9JyRhIoXlZVTDAsi8F5tvgRfIEuh3O1zwxGaTL6ppg7/FgJRugEQkOqwtiLBhlz7I1sHVgLqZOYPxKb+IYwjsTAwjCmyPavh2S9nbrkQSAnoB5fs47JJ0l9USWfgo3o7o259mcO/M1lyr3Y43YN1odidHOXLQZI/N/z/z09MM2bNhw4s9d6P7LHBxFWOQU0G/atOnQLTMzD2i1Wn/sKifpxLyMhPuSlPsiElULyO+eCqp3ehrc3KLa75PRCTpzJT2vpLIMBoAIisKaruWbPkH9MSBd+lGlLvdgkT6Z4hDtKWYN/JrGe3NufGYvkJ2RnH77ovgv+Io2qVJELpFYGFDX6OuaAiKwJvosu+8qxjcVxLwoWk+NzSEMoJAp0shi0ilQD3MHaz81RbwwBvgrrS6zyrxJe9O8bK75lQfR5OTWpD+8d2OAK50iP5dlednK4uKztm3bdub6n/zkgGuvTYXuv/TMz1symIikSV9++e+tX79+z6mpqePm5+cf1u1232z9ZPGyZPokTPBojB0tfEHakW8PcdmRmnuFmsTVZABbcAnMKAFI3bLB+ZknqI4BrNr7MeIxfcQS9F/H7JcbyrJ8UtkrSelO7sBxLAPpnNcW2Fz5F4LkhEsMYNmg9QkQSIV4vQJjNdukfilrk4oaZMZ3LjnF1ai2icVNDlSUDIzIt/Ju1Fj0umIH4dlJnVwaHWDqWMDYASBrUAyHYrRXVfUKZQAEAHvTVE1t/VcxqX429/hIcqI6QvAIHgVKn3PukaOx0VujPIDx02q1Xjs9Pf3wLTfeeOTll1++2y73+rq1h9oCv0Vk+Nprr91v69at9wBRrtcbvKuu5UwngTHBDyUimApUTssigUg8S3Fg40XaZovYPHrrSz8nfnfFi3dACSbcnAxJWqqRSiH6PBJqko/cpAzp7SYgVhQDh/Y8HNUCfWK1zmrAGaHahkuevaAzVPG0ZoskkKdTn2BaJCk6dF0THL6kcQDp+aUMJmnbanxK4bk+GyYhme8wAn/MUdsLfST1KC9CtyNI2qmTS+rgKe+OXYR3zBLT1Pap4SXVk7e5LEugTY5RdYW1zhmA/xbm1L0R17bOWWI8OmcYFhUSJuXdjiXbU5MBk6YA8Y/1/q3tdvvN09PTj0f1QbBecskld7zFIFe35mBSHE8YKXiFCI7Nzy+fNxgO3hN83Y0c4WtHK5lQH6FLoWJh2mkAUgQnQk5kqEnWS9hUELMbaskjAZaiOBqD2/JODMTVAHTZaPRciXymwE/KRs0234pzdJ6bNWT/ZDGIvX+m9rel3ScNRC6wCi47GZRwMUhpkYQRrH2CqzEDVP4vvJceAavg0b33/6ECQXLyLdUjuyeJco9RYN13xRhB7XsazaYVQh70bonmUZshGP4JTl6YQN4/RX0T42drIKdfgpSUPXJ0cKyqs9TPj1BaJfUzGyylQGvQUrNNDxuikrIGyZUM4dPVEZQMItR4u2SNc7XHe39Tp9N5JSgPGzduPPmaH16zL4IVnCpTfW6TDMAwe4DYwLXXXnsIfcZoVNDv9z+GO1Q3peZ0JQba+5Aw9UK8OAIvXsbjBBokSYsjh1E2/RBtBGd4Nyx8fhLwMxJoLyS2cw63aIUun5hAIdW7NapbMvb4724ifuAFLT2X3llshs2TNkfkyUwo6F+mQcNwKN0O6/A+P0uadRUpUZx0AqACXRhCo0/wGBfIuj5K6gj30xThT1pTaxuK3AakoUhT/d2VFrhSoFthhH6v72hqbkxviM92sQ76/RsIKioYGcIH9StnAASQqWM14WPbpYKW0SnEf/Du6MkEnCXp5jCozEtOGS/1wDJn59wNwHDOz8+ft2nTpnsiSBGoBFzN8L3NEr8NqxijMQGoclu3br3PwsLCU9rt9lu8T0230wKn9nb23wppCOgtG/l3uAm1bPDPgwtvBm6FIIwL7gPqIUEimu5tF+rRHXAjSlpugkWkYTCqkBCAEINdDVTpzPAja5LOg5R6fj74McFpi6RgenMtxbx/ZRzEg9VYhhH2gwG0Imq1G9SHL0ZlgPoEqFUgT5tUawUqzKSnIPn9X9DPSHUVaowk843hmZg7jS/erHn+bw0+qaB2EqSr8e56Zbn5gB8Df3hqjNJ+1eyQ3M6BIdiD44MPX4ghkhAHTOVb9L1IWyFxkbTzL9PP2NZK3wGzx9ab5MT/XFlZeens7OxjIf5169Yd9P3vf3933Oym99/miZ9hRjETxzMkNsFNN919bmnuPktLSxcUxeAfidbmC8FaTEpTnjQ0bfkc9UlbioIZzhY1vrP2kCUR7W/ogs53B4OBoR7rVatH5qji/j9C3UEtIyVXsT3BsRkNhwMhfBu46SxtgKonPiu9gSWLdHBgLBIyXFaknqlAFV0iUV9S4HDsBQKChfoHg4A8UE++l/F3gH9tDimoF6y53ch5TwO/V2AHkX1J+jk1BzHGrXxXG5mPGQF1R09Dvq9z20i7WhLeUOFGc3UsIr8M/oT642fo1tzsAETYls5+572fQk3GfT4zM/OAm2666SQatf/P//zP3a744i42t7stDeNUYwJiBD/+8Y/xDh0+s2XLaXNLS+d2u92XlGWJpBcvUVodWQzNTiMSL0OKIcxASohggvHzgljEu2cpCuaSzL0ld0V3xeUK7gx6eL7wzYHLE8SBGCMpvCdoUcap6lX5OJ9BZ7Y8GutGj0E56A8C0izG+CrDM6JPmEa++X6DASQOQD0AFVOS9JUBY8EAnADo3RjcNOtDFfwX/g6xK/XXA5ANmFvnRCd1gINpr3ScNijHbqHD5areYPmIIdJ76ZKyLJ/Od/Q98HhZoKt2Zao9gDF+eAhRgm5Zf2ZJLwevlt9RziitpjXd2oZzbnNVFJ/qdDovnJ+ffzi9KIA0R2ACbgXtvOHSN4jR+2s3jAk4utDfMGKUCQ7bOj9/8sLCwjmLi4vn93q915bD4eedc6gcEwFfbZjLjp+Dc+/T9kNiDzSyNc0gRj26i3ZGPJ2iGIxWUp1V1bqaCDUpvFSIYUgqtj+JaPi89wMsNmVVJjxKGEB22Ir5rah77DX6ay1mOYgosN7rvtaLNzsBAMdVVAhv2aAWJf4mJ5dGzIUBtFZZ1B+Zg/rzbR6cCJn69iEBrmUOKQ5BdizMzGnwUu89uKTfJW1EEgi9/75mp9IQ8RyerQBgeeTbGCBHksMDhfqTgp7MSfO/Jg2Zq/MIme8Wg+LDxIqWlpYeQQ7Zli1bTiTHn0AXxI8d+Wuj8+9o2OQxjNU7dAdUIvq2Aq61devWk+njBLhRq9V6EujTZVm+s6qqTxENlSSstDm4TKdQkdhsFpNmESTCIaVUEjXRz3LP0O/RvFsb1+Enp7MNuf70P7s/RjcEI7CNqR6hxqtEl4d4DB8Uo9HSKsx/TqoFJZ0aZEJNOUxx/Q/DmAdglm7uOu9U+O8Ea4gyTFCsUyrEOEZwWYXxmNQeXMMwI7CHH+bvqGvNnH5NX7A6jLeo9JZ3Me9Msk0GnCZH9av+6WAkccEYQM3jXVL7JbetVq2lMoTUW2gxDJ1lWhIzEaAPYUiM5++j2vFuvqo+hx3Q7w/f1O12/6TVaj15aWnpoXNzc2ca4a9f/+M9IXxsxzzQ9WtL/Iz8BUwl4jS46qpL7oiBTFU/kWPyu+lBsLS0hLFMFPkhvXb7EZ1O5/zBYPDUqqoop/sgwlbD40nSufCOTFXYXTetyQD5xpnHAqNyf6Sc5txIB3LLX8/82ZJajB6M9wKaVx06uVKHyX2YSX9g0oEUoaxP0KoVEeJpIK4pcUtPR04KBQkAAl7gS4y5g/dXUwQk+reWkgJD7n38Q4Q+CW71HNSFiS6v36Vf8aOk9dH2sC8ICfPHS/GJea2U2S2/Z6IgUWEiacu8Y1nG45xzopZlgokM3L8py/L5g8HgSf1O/zGtVuvclZWVB4IuzskPfDlo49PT0wcDukxpI4hu9KbLCf/XmvibIz8NCGYQ0cM2wF0K3KIAHM3OHra4uHjM3NwcQbRTQJ7rdDr37fc7gKe+zDuDFqkX+1rpv1UIqjQBMMudn7R5ZhvUKbgZYUjQTX+f2xEQAv7tA6iTJX+H51bJoxQ67XbodVOloTbIeKOpHniD6sIchWlHQioD08QC9YfO80+LMX7Q3IHKJJ0Y4+Pwnwuuahweqs02jo9RcXK8gwlw75Lwl88BkOG7Ly8vWw5R7RzI1Bd737yE1LCC7DvN9TMPGycjqhnVdsCgJ+k/Tlv+Tr/ffzFgaSsrK+eoULsXLXfpOorAA7ufPUcboKoLoZgHuG53xJ+P/ERgcTnu4P5t27bdYf367/0+lf7btm3bY2ZmZi9OCAruW63WKb1eD3WFqHIyjMfBtA+RqKVGouQUZYRsG2cMkP93829cTcbhSjlGhaBaYMziDaLlEkYj3pgqxnitQsCg7hwM8SuRoP+fEbyn4UWeGcvnn4GbEgRmBceiqkqYRD+D5wrGPhxViGs4Sh1nBMnB++mqLO2zeFfWV1X1ym63e5wCAezoNDTGbqab5OvQ/D2fNa8PDUNOwsUcfN3cz6LGK4PB4BW9Xu+hS0tLJ4AcuLi4uD8Vg+ypxobujCqMgdtUdW63RL+z0TwZWPCLk9H8OzAF2C8gALRarXv3+/3zresLDKCLjkvktTGlKVivMsPqz6XfpI1tXhBIHuixUD+bj9pApuUxvvQXQPCjUXgbUH7o0YqxwymEzs7PijMk3pduLiVxgRJRpryQtAX110sXyUyVACfzYRiZ9AcTmJTh8BBUNvR7UCtGKY0ARnk1No1CuBAv2FnC2s4IvblWeSGSwBxq5/lznAum+gi+Hz9XVfVp8DoRWBA+iCEQO3vJ/dlf1ODbVCLbbWXkUsAWyNDnkCCoRisrK/cfDAZg+KRag5qgfEeCZilh6whqeCdkbebVZ83LCGFnRGPGH4xg9Qd315PHilf4m7Tx0eQxjGdBRRY3YHLhMt6kQbpz1BB9kHNOEDXyIhCCgakOuiQmgEFs7ZfEoCXyjJ0gdbSpqJzn50U7rGfzXUylWVWW2LwyFdGgXWhSwQlH1uYnFMGvTlzzzm/Cnbm4uPhgymOBzRSk5vS8Vfv7v1ri72g0F8YujkmMJGyElZUVKs7OBX4Fiaoqg0nVoXPuPVWM9wVYSVEmzJsDM/BvnsGZF+LncYRJjLCKaIw4Fsaw4gY8CxEeocjK1rEltfAcS3YgRyQdXFGQSdwjUPZU6qeVWbT/Wlik9FA70qAOYVdIBDx7F0PLs8RB895MYgBRgTLCtnUwmBNbI7xAED3OAmosYOh7FkXxuOBTmnneoYXuof1+/53Ly8uPBLKEvcqbU0+61sYuDhaLIxTsd2II5Ba12+3zqrIUv3xSLcZ5AMmv796kSBQHKMa99JfCa4HUNv967f1ppzZOGQHJkT1Bf85VJWMIPCsC8YKh2iP6mtKfSfaS6CvuTVXXhr4SPNDTmAdeKDVuAYKl95UA+FrQT99nA11qpL9CSpEWkNuM+JunGkzcZGA5xfSzkrSmJ8m+inuEynZULCLdN+XSpERKFMnhoVMnsDTWOomgn82vKoriQ62lpSfQmhSXJqrPrxSx7fY22ED8w7jMtm3ceDSBk6WlpSeVZSkgtgxJMVX3qBIb8QNy4snnEZQI3IPkngPfEUaSSflPlGiq7i79zCy/X4kpJ/ycAewa2wYJy4aCbtohPcMHL0BcmuUo86JLfVmWF/R6vZM5oeiRBVYO9gOxCCKw3nvJYJUvjRuNfD9G93DtHCnYnsq8uaenadTmjJsHr1LbpuTDf47kOSXPEW2IHpBSTFDJiscTNFMkCAni2bwyWwbi/9jS0tKTp6en74uAmrp6ahVO/xoD/AIGi2i1BuvWrduHLoBz27ad1WotXTAcFvSOsq6VCXFec3p0k1A/lsDH1CQxUA7qbE5BQRtKl0eaWyMJ8Z8T5DGfuKlIpmLkee41onRZxpO1GR4NL0SVWZXi6/yV5bB8PtDjRbt95GjUutvMzEy6VzfuTYBuOBw+CPhA7720EcqJLYZwtff+j6mdiKVUUGEYGxMwF8mONb9/5v9HzeMzzHXv4VCYh75bLwgh1hCGuF6DD2S//gT3Mu2q8twsDF3mYsls3vst/V7vnSuLi+cTzKShOlg9t7lyxdvLsGgyuiU4RJtvuOGI2dnZM0in6Hb7f20xAtksjRhnh8Lqoe7GTJJR9PJnqeu9FLzgvjxS273i0kRi1leWnsDfSf092UfJw78Yqcg95enq0qTNT1EUf4J7sNfrnQSkvBKnuIBp9UqfhV6vd09197513GtXIs5mFJOx976Rcw8qYzw59ekdHqbpDtKGNLv4b9QbiSTLqVHEo0hRjjGCv9qq57mD/CjT8/N0Zd6vqqqv9Xq95ywsLNyf/B1yvK674oo9qAg0f/7a+AUPM+goijAmkCN3auqs+fn5C1ZWVl4+GAz+3Tk3Y5uVDzOa86GbXx/nmg9DIthZ6Nzo5mWqVz0WCS3F5qnoHqxLMi2B8Hh0iAGM09QXV92dxnje+dZwOHxHr90+r9VavPfy8vJBCwsL1sBZVBTcvahC0naq3T693+8/tizL93tNY87nqXO9JoZwEZFkqa0uI4l7J+gc8Uyhx/PvsRjao5HM9SwgTawhX5pbOqLsv22NJgkN0o3I16JAHegbsja3bdp0T9LdyfFiT9aI/5c4Mg+CnAQctQRWrrvuukOnpqbuNT09fe7CwsLTV9rtlw8Hg3eBVK0JduS1A/UGAi4xg573YcES76BVM+gYFJDEGL8e6Azv/bMJVGm+zFnqtnwUDTbItyEJzDrZy70ylUfvfTUE0+71nt5qtU5ttVqHASevfnHz0nD9FuoQTNBut49cXl4+u9vtXgDjeO/FkIYoNdeopk7SDogp0APZV/4P1MY5p55rUTyatGa8Y9RRsAZyL0+WpiTu2H3mvXOg4A1IN/HBk23bpdm1c+4nZVl+sdvtvmVlaeV5CwsLjwScavPmzcdbby58/bcpmJLb+2CZ7TRg8dE92QxsA8C5VDV60MrKCtmmz+73+y8qiuIlRVG8wq6yLCnYrzFGm1JWfzcI3s8FH25S/XiD937Wyjvrz6FOra53HlZV9Zler/es9vLyea2FhVOJihLUmwTomjMBEXD6LVgXTubtvf+vSK64MmyT0fSZtIKlR/P1isy8AeY0omcg3ZWJcib9ZlVUrxkMBq8uisHraTs6GAxe1+/3/7Tdbj8d1+bi4txDwOQhhwfCR+iQtbnuMrHJ6kqttXErDxadxcfroAbybmSabty48RAS7Kamp+/FpmlZ5hnLy8v3bbVaD15ZWSFB68n9fv8lriz/O/iktytByJDo5gRVygY0tL2NgW3hrun1eh9YXl5+JkyoOTAHERiCwCepCflJYNFvGGZheuGUVqv10Hav/ayiKCgiquEfTdVKk52gs+jQz9V5+vZ7To+qqj7Z6/We3+12n9zpdB5DajJZmiQkbts2fzZrR8YuRI+Ru2HDhoN++MMfUp+7G4LnootuJ1mbv84jLf6Fv0EmIYzAxpBWi166fv36A1RFOpwG35wQMzMzx09PT99rfn7+7OXl5fM6rdYLer3e3znnLkc9alBPrRPjkUwOpu1pjXpc58ofEKDrttsvWV5efiqZj0REyWfCL46xO4n4bWRMIF04UZVgHBhodnb2QUtLS0+kiIjm5DQjpPH3hHlYlYLMtGnz6GcWy7L8JnUYpKAvLCzQbfH+dFmn7dDM1NRx09PTx5Cujk//J+vXH0DiGkRPQFJ1fXmXNeK/jQ3dDIl4cjRjJ1x22WV3YuOu2HAFRHhXNnJ6/fSeRCtRNVCX5hbnHrKysvK4XqfzurIsP1O68nvAcjgntkPFaUApn0pTOlx2qG91zl1WluW7+53OCyFQJOj89DTdC0+AeEzqN1GMd0YwxgRm41w7NbWfAg+TIUt25SPa7fazhsPhW6qqBF+JKrcZ0q1lrjpP9eCg7/TwQjnnvlUUxUXdbvdlwNhzOuHB0bSFAzl11q3bTIr63bSM9c4QuyWurbv4YsvYzG2Xnb7L2vgVDjYGCaVlmZKIZZepTBAopwRleNQjIGlxqy4vLz+93W6/tN1tv33Q671nMBi8vxgMLioGxQf6/f47yEeCCCHGhZmFcwjMCTFt2nQsagIeKjw9O2rc3Pzv5uDvfI+qKAgRpp3dMLu3oO5t2YIb9b5LS0sPby0tPXF5efmP2r02GZjo7389GAzeVwwG/1AMBh8YDAbv7vf7b2q1Wi/CcwPMiEj7hel70WOLuYK3M3PVDPUZdcKaJa1ZFHktee3XcDSlVH5ZTAEpC4FBsGZET01NnbJtbttZ27ZteyhoxAsLC4+Zm1s8f3Fu7nw8IODTz87OPhCoPpgG/fjGG288csO6dQdhGK7XqibDsGnOa1dGNlfJkFXwYaTxXbSA5PDNmzefsHXr1jN0Lg+dm547d35++uHMEbVmdnYW1YbcHGptxV9P9RWqzZVXXrk/hI+kVwm/Sp2xa23cTsaONrQmsI0bpXAflQPCuP76K8lhP2TzDaIH3x2oR9DJbrjhhuNgkg3XXHMUtgWFHTAPOj4nipXzcd/ms27JaBKinWRWO4FKR+AJg3/DhnWcOIfecMMNR2zcuPGYG2+88QTmuvnGzcfjCGD+vAuF5rwb7wgzcTqtqTRro950U5XMdoBIaMKgBRx3AZcSmA6VmkLwluueEdIvTVVoEOlvcsJAxDZX5sncwNHhQm26+n+uvhsnEn9XnCaZaw4zskb8a6MeTYlLOi//Nu0I+duFF67SjW9NImoSbaYq/RanhF14xmCWPDHt1pjf2rgdjF83QpnAFGsEvzbWxtpYG2tjbayNtbE21sbaWBtrY22sjbWxNtbG2lgba2NtrI3/1eP/B1lSxDFdCFH9AAAAAElFTkSuQmCC";

// plugin/main.js
var VIEW_TYPE = "vault-graph-view";
var ICON_ID = "vault-graph-disc";
function discIcon() {
  const ring = (r, dot, slots, offset) => {
    let out = "";
    for (let i = 0; i < slots; i++) {
      const rad = (-90 + (offset || 0) + 360 * i / slots) * Math.PI / 180;
      out += '<circle cx="' + (50 + r * Math.cos(rad)).toFixed(2) + '" cy="' + (50 + r * Math.sin(rad)).toFixed(2) + '" r="' + dot + '"/>';
    }
    return out;
  };
  return '<g fill="currentColor" stroke="none">' + ring(36, 8.5, 8, 0) + ring(16, 6.5, 4, 22.5) + "</g>";
}
var MONTHISH = /^\d{4}(?:[-_ ]?(?:\d{2}|Q[1-4]|W\d{1,2}))?$/i;
var TYPE_ALIAS = {
  people: "person",
  person: "person",
  "zettel/permanent": "zettel",
  "zettel/fleeting": "zettel",
  "zettel/literature": "zettel"
};
var SKIP_FILES = /* @__PURE__ */ new Set(["claude.md", "readme.md", "license.md"]);
var deNumber = (s) => String(s).replace(/^[\s\d._)-]+/, "").trim();
var slug = (s) => deNumber(s).toLowerCase().replace(/[\s_]+/g, "-");
var singular = (s) => s.replace(/ies$/, "y").replace(/([^aeious])s$/, "$1");
var norm = (s) => String(s).split(/[\\/]/).filter(Boolean).join("/");
var under = (rel, dir) => !!dir && (rel === dir || rel.startsWith(dir + "/"));
var paraFolder = (path) => {
  const seg = path.split("/");
  return seg.length > 1 ? seg[0] : "(vault root)";
};
var paraDirs = (path, flatMonths) => {
  const seg = path.split("/").slice(1, -1);
  const out = [];
  for (let i = 0; i < seg.length; i++) {
    if (MONTHISH.test(seg[i])) {
      if (i === 0 && !flatMonths) out.push(seg[i]);
      break;
    }
    out.push(seg[i]);
  }
  return out;
};
function inferType(fm, path, tags, dailyDir, isTemplate) {
  const raw = typeof fm.type === "string" ? fm.type.toLowerCase() : "";
  if (raw) return TYPE_ALIAS[raw] || raw;
  if (tags.indexOf("daily-note") >= 0) return "daily";
  if (under(path, dailyDir)) return "daily";
  if (isTemplate(path)) return "template";
  const dirs = path.split("/").slice(0, -1).filter(Boolean);
  const named = dirs.filter((d) => !MONTHISH.test(d));
  const pick = named.length ? named[named.length - 1] : dirs[0];
  const type = pick ? singular(slug(pick)) : "";
  return type || "note";
}
async function readConfigJson(app, name) {
  try {
    const p = (0, import_obsidian.normalizePath)(app.vault.configDir + "/" + name);
    if (!await app.vault.adapter.exists(p)) return null;
    return JSON.parse(await app.vault.adapter.read(p));
  } catch {
    return null;
  }
}
async function readFolders(app) {
  const dirs = /* @__PURE__ */ new Set();
  const core = await readConfigJson(app, "templates.json");
  if (core && typeof core.folder === "string" && core.folder.trim()) dirs.add(norm(core.folder));
  const templater = await readConfigJson(app, "plugins/templater-obsidian/data.json");
  if (templater && typeof templater.templates_folder === "string" && templater.templates_folder.trim()) {
    dirs.add(norm(templater.templates_folder));
  }
  const dn = await readConfigJson(app, "daily-notes.json");
  const dailyDir = dn && typeof dn.folder === "string" && dn.folder.trim() ? norm(dn.folder) : "";
  return { templateDirs: Array.from(dirs), dailyDir };
}
async function buildData(app, opts) {
  const t0 = performance.now();
  const folders = await readFolders(app);
  const templateDirs = folders.templateDirs, dailyDir = folders.dailyDir;
  const isTemplate = (path) => templateDirs.some((d) => under(path, d));
  const files = app.vault.getMarkdownFiles().filter((f) => {
    if (SKIP_FILES.has(f.name.toLowerCase())) return false;
    return opts.templates ? true : !isTemplate(f.path);
  });
  const index = /* @__PURE__ */ new Map();
  const nodes = [];
  const dates = dateTally();
  for (const file of files) {
    const cache = app.metadataCache.getFileCache(file) || {};
    const fm = cache.frontmatter || {};
    const tags = [].concat(fm.tags || [], fm.tag || []).reduce((acc, t) => acc.concat(String(t).split(/[,\s]+/)), []).map((t) => t.replace(/^#/, "").trim()).filter(Boolean);
    const dirs = paraDirs(file.path, opts.flatMonths);
    const dated = resolveCreated(fm, file.basename, file.stat.ctime, file.stat.mtime);
    dates[dated.source]++;
    index.set(file.path, nodes.length);
    nodes.push({
      id: file.path,
      label: file.basename,
      folder: paraFolder(file.path),
      dirs,
      sub: dirs[0] || "",
      type: inferType(fm, file.path, tags, dailyDir, isTemplate),
      tags,
      created: dated.day,
      touched: localDay(file.stat.mtime),
      words: 0,
      // filled below; the one field still needing a read
      _file: file
    });
  }
  const tIndex = performance.now();
  const weight = /* @__PURE__ */ new Map();
  const addEdge = (i, j, w) => {
    if (i === j) return;
    const key = i < j ? i + " " + j : j + " " + i;
    weight.set(key, (weight.get(key) || 0) + w);
  };
  let attachmentLinks = 0, filteredLinks = 0;
  const resolved = app.metadataCache.resolvedLinks || {};
  for (const src of Object.keys(resolved)) {
    const i = index.get(src);
    if (i === void 0) continue;
    for (const dest of Object.keys(resolved[src])) {
      const j = index.get(dest);
      if (j === void 0) {
        if (dest.toLowerCase().endsWith(".md")) filteredLinks++;
        else attachmentLinks++;
        continue;
      }
      addEdge(i, j, resolved[src][dest]);
    }
  }
  const unresolvedMap = app.metadataCache.unresolvedLinks || {};
  let unresolved = 0;
  const ghosts = /* @__PURE__ */ new Map();
  for (const src of Object.keys(unresolvedMap)) {
    const i = index.get(src);
    if (i === void 0) continue;
    for (const target of Object.keys(unresolvedMap[src])) {
      const n = unresolvedMap[src][target];
      unresolved += n;
      if (!opts.ghosts) continue;
      const key = target.split("/").pop();
      if (!ghosts.has(key)) ghosts.set(key, []);
      ghosts.get(key).push([i, n]);
    }
  }
  if (opts.ghosts) {
    for (const entry of ghosts) {
      const name = entry[0], sources = entry[1];
      const j = nodes.length;
      nodes.push({
        id: "ghost:" + name,
        label: name,
        folder: "(unresolved)",
        sub: "",
        dirs: [],
        type: "ghost",
        tags: [],
        created: "",
        touched: "",
        words: 0,
        ghost: true
      });
      for (const pair of sources) addEdge(pair[0], j, pair[1]);
    }
  }
  const tEdges = performance.now();
  if (opts.words) {
    await Promise.all(nodes.filter((n) => n._file).map(async (n) => {
      try {
        const raw = await app.vault.cachedRead(n._file);
        const m = /^---\r?\n[\s\S]*?\r?\n---/.exec(raw.replace(/^\uFEFF/, ""));
        const body = m ? raw.slice(m[0].length) : raw;
        n.words = body.split(/\s+/).filter(Boolean).length;
      } catch {
        n.words = 0;
      }
    }));
  }
  const tWords = performance.now();
  const edges = Array.from(weight).map((entry) => {
    const ab = entry[0].split(" ");
    return { s: Number(ab[0]), t: Number(ab[1]), w: entry[1] };
  });
  const degree = new Array(nodes.length).fill(0);
  for (const e of edges) {
    degree[e.s]++;
    degree[e.t]++;
  }
  const out = nodes.map((n, i) => {
    const clean = Object.assign({}, n, { deg: degree[i] });
    delete clean._file;
    return clean;
  });
  const p2 = (n) => String(n).padStart(2, "0");
  const now = /* @__PURE__ */ new Date();
  return {
    vault: app.vault.getName(),
    generated: now.getFullYear() + "-" + p2(now.getMonth() + 1) + "-" + p2(now.getDate()) + " " + p2(now.getHours()) + ":" + p2(now.getMinutes()),
    nodes: out,
    edges,
    stats: {
      files: files.length,
      nodes: out.length,
      edges: edges.length,
      unresolved,
      orphans: degree.filter((d) => d === 0).length,
      // Where every note's date came from. Surfaced by the "Report diagnostics" command,
      // so "why is everything undated" is answerable without a rebuild. github#6
      dates,
      templatesExcluded: !opts.templates,
      ghostsIncluded: !!opts.ghosts
    },
    // Spike-only. Not part of the shape the page reads; the view prints it and the CDP
    // harness asserts on it.
    _spike: {
      msIndex: Math.round(tIndex - t0),
      msEdges: Math.round(tEdges - tIndex),
      msWords: Math.round(tWords - tEdges),
      msTotal: Math.round(tWords - t0),
      templateDirs,
      dailyDir,
      attachmentLinks,
      filteredLinks
    }
  };
}
var VaultGraphView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.handle = null;
    this.lastData = null;
    this.mountMs = 0;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Vault graph";
  }
  getIcon() {
    return ICON_ID;
  }
  async onOpen() {
    await this.render();
  }
  async onClose() {
    this.teardown();
  }
  // FREE THE WEBGL CONTEXT. Sigma holds one per renderer and a browser allows a small
  // number of them; opening and closing this view a dozen times without killing the
  // renderer exhausts them and the thirteenth mount draws nothing at all.
  teardown() {
    const api = this.handle && this.handle.api;
    if (api && api.renderer) {
      try {
        api.renderer.kill();
      } catch {
      }
    }
    this.handle = null;
    this.contentEl.empty();
  }
  // activeDocument, not document: a view torn out into a popout window lives in a different
  // document, and reading the main window's theme there gives the wrong answer.
  syncTheme() {
    if (!this.page) return;
    const want = activeDocument.body.classList.contains("theme-light") ? "light" : "dark";
    if (this.page.getAttribute("data-theme") === want) return;
    this.page.setAttribute("data-theme", want);
    const api = this.handle && this.handle.api;
    if (api) {
      try {
        if (api.readTheme) api.readTheme();
        if (api.renderer) api.renderer.refresh();
        if (api.placeLogo) api.placeLogo();
        if (api.heatBuild) api.heatBuild();
      } catch {
      }
    } else {
    }
  }
  async render() {
    this.teardown();
    const root = this.contentEl;
    root.addClass("vault-graph-view");
    const data = await buildData(this.app, this.plugin.settings);
    this.lastData = data;
    const parsed = new DOMParser().parseFromString(page_default, "text/html");
    const page = parsed.body.firstElementChild;
    if (!page) throw new Error("page markup did not parse to an element");
    root.appendChild(page);
    this.page = page;
    this.syncTheme();
    this.registerEvent(this.app.workspace.on("css-change", () => this.syncTheme()));
    const t0 = performance.now();
    this.handle = mountVaultGraph(page, data, {
      // Real module imports, not globals: the UMD wrappers take their `module.exports`
      // branch under esbuild, so nothing is ever assigned to `window`. This is exactly why
      // page.js takes its libraries as arguments.
      Graph: import_graphology_umd_min.default.Graph || import_graphology_umd_min.default,
      Sigma: import_sigma_min.default.Sigma || import_sigma_min.default,
      rendering: import_sigma_min.default.rendering || {},
      logoMask: "data:image/png;base64," + logo_mask_default,
      // The saved per-folder palette slots and visibility defaults. No onFolderColors or
      // onFolderShown: in Obsidian the settings tab owns writing both.
      folderColors: this.plugin.settings.folderColors,
      folderShown: this.plugin.settings.folderShown,
      // Pan DOES get a writer, unlike the two maps above: the control that flips it is in
      // the view rather than in the settings tab, so the view is what has to persist it.
      panEnabled: this.plugin.settings.panEnabled,
      onPanEnabled: async (v) => {
        this.plugin.settings.panEnabled = !!v;
        await this.plugin.saveSettings();
      },
      // The gear IS shown here -- it is where somebody looking at the disc goes to look
      // for the colours -- but it opens Obsidian's settings tab rather than a second
      // panel inside the view saying the same things. `settingsUI` is deliberately not
      // set: that is the standalone's mode, where nothing else can hold a setting.
      openSettings: () => this.plugin.openSettings(),
      // The window this view is actually in. A view dragged out into a popout must schedule
      // its timers and animation frames there, not on the main window -- which is what
      // obsidianmd/prefer-active-window-timers is about. The standalone page passes nothing
      // and gets its own window, because `activeWindow` is an Obsidian global.
      win: activeWindow,
      // What the standalone page cannot do. There the data is baked into the file, so
      // Refresh can only reset filters and replay -- and it was reported, fairly, as a
      // button that does not pick up new files (github#6). Here the vault is right
      // there: render() tears this view down, rebuilds from the metadata cache and
      // mounts again, so the button means what its label says.
      //
      // Guarded, because a rebuild triggered from inside the mount it is about to
      // destroy will re-enter if the user leans on it. render() is async and the click
      // handler cannot await it.
      onRefresh: () => {
        if (this.rebuilding) return;
        this.rebuilding = true;
        this.render().catch((e) => new import_obsidian.Notice("Vault Graph: rebuild failed -- " + e.message)).finally(() => {
          this.rebuilding = false;
        });
      }
    });
    this.mountMs = Math.round(performance.now() - t0);
    this.registerDomEvent(page, "click", (ev) => {
      const a = ev.target instanceof Element ? ev.target.closest('a[href^="obsidian://"]') : null;
      if (!a) return;
      ev.preventDefault();
      try {
        const q = new URLSearchParams(a.getAttribute("href").split("?")[1] || "");
        const file = q.get("file");
        if (file) this.app.workspace.openLinkText(file, "", false);
      } catch {
        new import_obsidian.Notice("Could not open that note.");
      }
    });
  }
};
var DEFAULTS = {
  ghosts: false,
  // --ghosts
  templates: false,
  // --templates
  flatMonths: false,
  // --flat-months
  words: true,
  // the one field that still costs I/O
  // folder name -> palette slot key ("g7"). A SLOT, not a hex: the palette has separate
  // light and dark values, so a saved hex would be right in one Obsidian theme and wrong
  // in the other. Empty means every folder takes the slot its position gives it.
  folderColors: {},
  // folder name -> true (shown) / false (hidden), as a DEFAULT. Absent means the `_` rule
  // decides: a folder whose name starts with an underscore is an archive, so it is out of
  // the colour rotation, grey, and hidden until somebody says otherwise.
  folderShown: {},
  // Drag-to-pan in the view. ON by default: the rim of a big vault is unreachable without
  // it, and the corner control is a cheaper way to discover that than a settings tab is.
  // Held here so a vault where dragging gets in the way can start locked.
  panEnabled: true
};
var BUILD_SETTINGS = [
  {
    key: "ghosts",
    name: "Include notes that do not exist yet",
    desc: "Wikilinks pointing at a note nobody has written. They are intentions rather than notes, so they are off by default."
  },
  {
    key: "templates",
    name: "Include templates",
    desc: "Notes under the template folders. Off by default: a template links to nothing and is linked from nothing, so it lands in the hub as noise."
  },
  {
    key: "flatMonths",
    name: "Flatten month folders",
    desc: "Treat 2026-08 and its siblings as one folder rather than as a subfolder each. Turn this on if a year of daily notes is drowning its parent's legend row."
  },
  {
    key: "words",
    name: "Count words",
    desc: "Sizes each note by its length. The one setting that costs real I/O: it reads every file rather than answering from the metadata cache."
  }
];
var SLOT_NAMES = [
  "Blue",
  "Orange",
  "Aqua",
  "Yellow",
  "Green",
  "Magenta",
  "Violet",
  "Red",
  "Cyan",
  "Orchid",
  "Grey",
  "Slate"
];
var isArchiveGroup = (name) => String(name).charAt(0) === "_";
var ARCHIVE_SLOT = "g11";
function topFolders(app) {
  const count = /* @__PURE__ */ new Map();
  for (const file of app.vault.getMarkdownFiles()) {
    if (SKIP_FILES.has(file.name.toLowerCase())) continue;
    const g = paraFolder(file.path);
    count.set(g, (count.get(g) || 0) + 1);
  }
  const rank = (s) => s.charAt(0) === "_" ? 0 : s.charAt(0) === "(" ? 1 : 2;
  return Array.from(count.entries()).sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0], void 0, { numeric: true })).map(([name, n]) => ({ name, n }));
}
var VaultGraphSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    for (const s of BUILD_SETTINGS) {
      new import_obsidian.Setting(containerEl).setName(s.name).setDesc(s.desc).addToggle((t) => t.setValue(!!this.plugin.settings[s.key]).onChange(async (v) => {
        this.plugin.settings[s.key] = v;
        await this.plugin.saveSettings();
        await this.plugin.rebuildViews();
      }));
    }
    new import_obsidian.Setting(containerEl).setName("View").setHeading();
    new import_obsidian.Setting(containerEl).setName("Drag to pan").setDesc("Drag the graph to move it, and zoom toward the pointer. Off pins the disc to the centre of the view. The control in the graph's bottom-right corner flips it too, and lands back here.").addToggle((t) => t.setValue(this.plugin.settings.panEnabled !== false).onChange(async (v) => {
      this.plugin.settings.panEnabled = v;
      await this.plugin.saveSettings();
      const view = await this.plugin.currentView();
      const api = view && view.handle && view.handle.api;
      if (api && api.setPanEnabled) api.setPanEnabled(v);
    }));
    new import_obsidian.Setting(containerEl).setName("Folder colours").setHeading();
    new import_obsidian.Setting(containerEl).setDesc("Twelve slots, handed out in folder order and round again. Setting one folder never moves another, and two folders may share a colour.").addButton((b) => b.setButtonText("Reset all").onClick(async () => {
      this.plugin.settings.folderColors = {};
      await this.plugin.saveSettings();
      await this.plugin.applyFolderColors();
      this.display();
    }));
    const scope = containerEl.createDiv({ cls: ["vault-graph", "vg-tokens"] });
    scope.setAttribute(
      "data-theme",
      activeDocument.body.classList.contains("theme-light") ? "light" : "dark"
    );
    this.scope = scope;
    let auto = 0;
    this.renderColours(topFolders(this.app).map((f) => ({
      name: f.name,
      n: f.n,
      slot: isArchiveGroup(f.name) ? ARCHIVE_SLOT : "g" + (auto++ % SLOT_NAMES.length + 1)
    })));
    this.refreshFromView();
  }
  // Re-render the colour rows from the live graph's own grouping and colours.
  async refreshFromView() {
    const scope = this.scope;
    const view = await this.plugin.currentView();
    const api = view && view.handle && view.handle.api;
    if (!api || !api.groupOrder || !api.palette || !scope || !scope.isConnected) return;
    const groups = api.groupOrder().map((name) => ({
      name,
      n: api.groupCount(name),
      slot: api.slotOf ? api.slotOf(name) : ""
    }));
    if (groups.length) this.renderColours(groups);
  }
  // One row per group: its name, its note count, and the twelve slots.
  //
  // `slot` is the slot the group is CURRENTLY USING, whether or not anybody chose it.
  // Marking only the chosen one meant a folder on Auto -- every folder, until somebody
  // changes something -- had no mark anywhere, so the panel showed twelve colours and
  // would not say which of them the folder was.
  renderColours(groups) {
    const scope = this.scope;
    scope.empty();
    if (!groups.length) {
      scope.createEl("p", { text: "No folders to colour yet." });
      return;
    }
    for (const group of groups) {
      const pinned = this.plugin.settings.folderColors[group.name] || "";
      const current = pinned || group.slot;
      const shown = this.shownByDefault(group.name);
      const row = new import_obsidian.Setting(scope).setName(group.name).setDesc((group.n === 1 ? "1 note" : group.n + " notes") + (shown ? "" : " \xB7 hidden by default")).addExtraButton((b) => b.setIcon(shown ? "eye" : "eye-off").setTooltip(shown ? "Shown by default" : "Hidden by default").onClick(() => this.pickVisible(group.name)));
      row.controlEl.addClass("sws");
      SLOT_NAMES.forEach((name, i) => {
        const key = "g" + (i + 1);
        const on = current === key;
        const attr = {
          role: "radio",
          "aria-checked": String(on),
          "aria-label": name,
          title: name + (on ? pinned ? " (chosen)" : " (automatic)" : "")
        };
        if (on && !pinned) attr["data-auto"] = "1";
        const b = row.controlEl.createEl("button", { cls: ["swatch", "vg-" + key], attr });
        b.addEventListener("click", () => this.pick(group.name, key));
      });
      const auto = row.controlEl.createEl("button", {
        cls: "auto",
        text: "Auto",
        attr: {
          "aria-pressed": String(!pinned),
          title: "Back to the slot this folder gets automatically"
        }
      });
      auto.addEventListener("click", () => this.pick(group.name, null));
    }
  }
  // Shown unless something says otherwise: an explicit choice first, then the `_` rule.
  // Mirrors hiddenByDefault in page.js.
  shownByDefault(folder) {
    const saved = this.plugin.settings.folderShown[folder];
    if (typeof saved === "boolean") return saved;
    return !isArchiveGroup(folder);
  }
  // Flip one folder's DEFAULT visibility. Written as an explicit boolean rather than by
  // deleting the key, so "shown, and I said so" survives a later change to what the `_`
  // rule does.
  async pickVisible(folder) {
    const map = Object.assign({}, this.plugin.settings.folderShown);
    map[folder] = !this.shownByDefault(folder);
    this.plugin.settings.folderShown = map;
    await this.plugin.saveSettings();
    await this.plugin.applyHiddenDefaults();
    this.display();
  }
  // One folder's slot. `key` null clears the override. Nothing else in the map is
  // touched -- two folders may hold the same slot on purpose.
  async pick(folder, key) {
    const map = Object.assign({}, this.plugin.settings.folderColors);
    if (key) map[folder] = key;
    else delete map[folder];
    this.plugin.settings.folderColors = map;
    await this.plugin.saveSettings();
    await this.plugin.applyFolderColors();
    this.display();
  }
};
var VaultGraphPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULTS, await this.loadData());
    this.addSettingTab(new VaultGraphSettingTab(this.app, this));
    this.registerView(VIEW_TYPE, (leaf) => new VaultGraphView(leaf, this));
    (0, import_obsidian.addIcon)(ICON_ID, discIcon());
    this.addRibbonIcon(ICON_ID, "Vault graph", () => this.activate());
    this.addCommand({
      id: "open",
      name: "Open the graph",
      callback: () => this.activate()
    });
    this.addCommand({
      id: "rebuild",
      name: "Rebuild from the metadata cache",
      callback: async () => {
        const view = await this.currentView();
        if (!view) {
          new import_obsidian.Notice("Open the graph first.");
          return;
        }
        await view.render();
      }
    });
    this.addCommand({
      id: "report",
      name: "Report diagnostics",
      callback: async () => {
        const view = await this.currentView();
        if (!view) {
          new import_obsidian.Notice("Open the graph first.");
          return;
        }
        const api = view.handle && view.handle.api;
        const report = {
          mount: "in-dom",
          mountMs: view.mountMs,
          hasApi: !!api,
          order: api && api.graph ? api.graph.order : 0,
          size: api && api.graph ? api.graph.size : 0,
          canvases: view.contentEl.querySelectorAll("#vg-graph canvas").length,
          planParity: api && api.checkPlanParity ? api.checkPlanParity() : null,
          build: view.lastData && view.lastData._spike,
          stats: view.lastData && view.lastData.stats
        };
        window.__vgSpikeReport = report;
        new import_obsidian.Notice("Diagnostics ready.");
        return report;
      }
    });
  }
  // Guidelines: don't hold a reference to the view, and don't detach leaves in onunload.
  //
  // The `instanceof` is NOT belt and braces, and neither is the await. Since 1.7.2 a leaf
  // restored from a saved workspace is DEFERRED: the leaf is real and getLeavesOfType finds
  // it, but until something reveals it `leaf.view` is a DeferredView placeholder rather than
  // this plugin's view. Handing that placeholder back made "Rebuild" a TypeError -- the stub
  // has no `render` -- and made the diagnostics report say hasApi:false about a graph that
  // was perfectly fine. Both read as bugs in the graph, and neither is.
  async currentView() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      await leaf.loadIfDeferred();
      if (leaf.view instanceof VaultGraphView) return leaf.view;
    }
    return null;
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  // Open this plugin's own settings tab, for the gear in the view.
  //
  // `app.setting` is NOT in the public API. It is what every plugin uses for this, because
  // there is nothing else -- there is no documented "open my settings tab" -- so it is
  // guarded at both steps and falls back to telling the user where to click rather than
  // throwing inside a click handler. If a future Obsidian drops it, the gear degrades to a
  // signpost instead of doing nothing.
  openSettings() {
    const setting = this.app.setting;
    if (!setting || typeof setting.open !== "function") {
      new import_obsidian.Notice("Open the plugin's settings tab from the community plugins list.");
      return;
    }
    setting.open();
    if (typeof setting.openTabById === "function") setting.openTabById(this.manifest.id);
  }
  // A COLOUR CHANGE REPAINTS. It does not rebuild, and the difference is the whole
  // reason setFolderColors exists on the page's api: colour is not an input to the
  // layout, so going through render() would throw away a settled disc and replay the
  // reveal animation because somebody clicked a swatch.
  async applyFolderColors() {
    const view = await this.currentView();
    const api = view && view.handle && view.handle.api;
    if (api && api.setFolderColors) api.setFolderColors(this.settings.folderColors);
  }
  // Visibility defaults changed: push them into the live filter and let the notes fade.
  // Like a colour, this repaints rather than rebuilding -- the notes are all still in the
  // graph, they are just not being drawn.
  async applyHiddenDefaults() {
    const view = await this.currentView();
    const api = view && view.handle && view.handle.api;
    if (!api || !api.setFolderShown) return;
    api.setFolderShown(this.settings.folderShown);
    if (api.setPanEnabled) api.setPanEnabled(this.settings.panEnabled !== false);
    if (api.applyHiddenDefaults) api.applyHiddenDefaults();
  }
  // The four build settings DO change the data, so they get the full path.
  async rebuildViews() {
    const view = await this.currentView();
    if (view) await view.render();
  }
  // `revealLeaf` is awaited on purpose: since 1.7.2 it resolves once the view is really
  // loaded rather than merely fronted, which is the difference between a tab that shows a
  // graph and a tab that shows nothing until you click it.
  async activate() {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (existing.length) {
      await this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = this.app.workspace.getLeaf("tab");
    await leaf.setViewState({ type: VIEW_TYPE, active: true });
    await this.app.workspace.revealLeaf(leaf);
  }
};
var main_default = VaultGraphPlugin;

/* nosourcemap */