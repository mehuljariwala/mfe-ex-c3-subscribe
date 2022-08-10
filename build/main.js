(() => {
  "use strict";
  var e = {
      18: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(81),
          a = t.n(r),
          o = t(645),
          i = t.n(o)()(a());
        i.push([
          e.id,
          '.subscribe-container {\n  background: #fddddd;\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.subscribe-radio-container {\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.subscribe-radio-container,\ninput[type="radio"] {\n  height: 18px;\n  width: 18px;\n}\n\n.subscribe-radio-container,\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n',
          "",
        ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              u = o[l] || 0,
              p = "".concat(l, " ").concat(u);
            o[l] = u + 1;
            var d = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) n[d].references++, n[d].updater(f);
            else {
              var v = a(f, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: v, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function a(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = t(o[i]);
              n[c].references--;
            }
            for (var s = r(e, a), l = 0; l < o.length; l++) {
              var u = t(o[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            o = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var o = t.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var o = (n[r] = { id: r, exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t.n(void 0),
        n = t.n(void 0),
        r = t(379),
        a = t.n(r),
        o = t(795),
        i = t.n(o),
        c = t(569),
        s = t.n(c),
        l = t(565),
        u = t.n(l),
        p = t(216),
        d = t.n(p),
        f = t(589),
        v = t.n(f),
        m = t(18),
        b = {};
      (b.styleTagTransform = v()),
        (b.setAttributes = u()),
        (b.insert = s().bind(null, "head")),
        (b.domAPI = i()),
        (b.insertStyleElement = d()),
        a()(m.Z, b),
        m.Z && m.Z.locals && m.Z.locals;
      var y = function () {
        return e().createElement(
          "div",
          { className: "subscribe-container" },
          e().createElement(
            "fieldset",
            { id: "sub-group", className: "subscribe-radio-container" },
            e().createElement(
              "label",
              null,
              e().createElement("input", {
                type: "radio",
                value: "value1",
                name: "sub-group",
              }),
              e().createElement("span", null, "Weekly")
            ),
            e().createElement(
              "label",
              null,
              e().createElement("input", {
                type: "radio",
                value: "value2",
                name: "sub-group",
              }),
              e().createElement("span", null, "Monthly")
            ),
            e().createElement(
              "label",
              null,
              e().createElement("input", {
                type: "radio",
                value: "value3",
                name: "sub-group",
              }),
              e().createElement("span", null, "Yearly")
            )
          )
        );
      };
      n().render(
        e().createElement(y, null),
        document.getElementById("subcribe-container")
      );
    })();
})();
