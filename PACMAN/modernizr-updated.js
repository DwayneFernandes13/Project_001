window.Modernizr = (function (i, e, I) {
    function C(a, b) {
        for (var c in a) if (m[a[c]] !== I && (!b || b(a[c], D))) return true;
    }
    function r(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        return !!C([a, "Webkit" + c, "Moz" + c, "O" + c, "ms" + c, "Khtml" + c], b);
    }
    function P() {
        j[E] = (function (a) {
            for (var b = 0, c = a.length; b < c; b++) J[a[b]] = !!(a[b] in n);
            return J;
        })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        j[Q] = (function (a) {
            for (var b = 0, c, h = a.length; b < h; b++) {
                n.setAttribute("type", a[b]);
                if ((c = n.type !== "text")) {
                    n.value = K;
                    /tel|search/.test(n.type) || (c = /url|email/.test(n.type) ? n.checkValidity && n.checkValidity() === false : n.value != K);
                }
                L[a[b]] = !!c;
            }
            return L;
        })("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var j = {},
        s = e.documentElement,
        D = e.createElement("modernizr"),
        m = D.style,
        n = e.createElement("input"),
        E = "input",
        Q = E + "types",
        K = ":)",
        M = Object.prototype.toString,
        y = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
        d = {},
        L = {},
        J = {},
        N = [],
        u = (function () {
            var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" },
                b = {};
            return function (c, h) {
                var t = arguments.length == 1;
                if (t && b[c]) return b[c];
                h = h || document.createElement(a[c] || "div");
                c = "on" + c;
                var g = c in h;
                if (!g && h.setAttribute) {
                    h.setAttribute(c, "return;");
                    g = typeof h[c] == "function";
                }
                h = null;
                return t ? (b[c] = g) : g;
            };
        })(),
        F = {}.hasOwnProperty,
        O;
    O =
        typeof F !== "undefined" && typeof F.call !== "undefined"
            ? function (a, b) {
                  return F.call(a, b);
              }
            : function (a, b) {
                  return b in a && typeof a.constructor.prototype[b] === "undefined";
              };
    d.canvas = function () {
        return !!e.createElement("canvas").getContext;
    };
    d.canvastext = function () {
        return !!(d.canvas() && typeof e.createElement("canvas").getContext("2d").fillText == "function");
    };
    d.geolocation = function () {
        return !!navigator.geolocation;
    };
    d.crosswindowmessaging = function () {
        return !!i.postMessage;
    };
    d.websqldatabase = function () {
        var a = !!i.openDatabase;
        if (a)
            try {
                a = !!openDatabase("testdb", "1.0", "html5 test db", 2e5);
            } catch (b) {
                a = false;
            }
        return a;
    };
    d.indexedDB = function () {
        return !!i.indexedDB;
    };
    d.hashchange = function () {
        return u("hashchange", i) && (document.documentMode === I || document.documentMode > 7);
    };
    d.historymanagement = function () {
        return !!(i.history && history.pushState);
    };
    d.draganddrop = function () {
        return u("drag") && u("dragstart") && u("dragenter") && u("dragover") && u("dragleave") && u("dragend") && u("drop");
    };
    d.websockets = function () {
        return "WebSocket" in i;
    };
    d.rgba = function () {
        m.cssText = "background-color:rgba(150,255,150,.5)";
        return ("" + m.backgroundColor).indexOf("rgba") !== -1;
    };
    d.hsla = function () {
        m.cssText = "background-color:hsla(120,40%,100%,.5)";
        return ("" + m.backgroundColor).indexOf("rgba") !== -1;
    };
    d.multiplebgs = function () {
        m.cssText = "background:url(//:),url(//:),red url(//:)";
        return /(url\s*\(.*?){3}/.test(m.background);
    };
    d.backgroundsize = function () {
        return r("backgroundSize");
    };
    d.borderimage = function () {
        return r("borderImage");
    };
    d.borderradius = function () {
        return r("borderRadius", "", function (a) {
            return ("" + a).indexOf("orderRadius") !== -1;
        });
    };
    d.boxshadow = function () {
        return r("boxShadow");
    };
    d.opacity = function () {
        var a = y.join("opacity:.5;") + "";
        m.cssText = a;
        return ("" + m.opacity).indexOf("0.5") !== -1;
    };
    d.cssanimations = function () {
        return r("animationName");
    };
    d.csscolumns = function () {
        return r("columnCount");
    };
    d.cssgradients = function () {
        var a = ("background-image:" + y.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + y.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        m.cssText = a;
        return ("" + m.backgroundImage).indexOf("gradient") !== -1;
    };
    d.cssreflections = function () {
        return r("boxReflect");
    };
    d.csstransforms = function () {
        return !!C(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]);
    };
    d.csstransforms3d = function () {
        var a = !!C(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        if (a) {
            var b = document.createElement("style"),
                c = e.createElement("div");
            b.textContent = "@media (" + y.join("transform-3d),(") + "modernizr){#modernizr{height:3px}}";
            e.getElementsByTagName("head")[0].appendChild(b);
            c.id = "modernizr";
            s.appendChild(c);
            a = c.offsetHeight === 3;
            b.parentNode.removeChild(b);
            c.parentNode.removeChild(c);
        }
        return a;
    };
    d.csstransitions = function () {
        return r("transitionProperty");
    };
    d.fontface = function () {
        var a;
        if (/*@cc_on@if(@_jscript_version>=5)!@end@*/ 0) a = true;
        else {
            var b = e.createElement("style"),
                c = e.createElement("span"),
                h,
                t = false,
                g = e.body,
                o,
                w;
            b.textContent =
                "@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}";
            e.getElementsByTagName("head")[0].appendChild(b);
            c.setAttribute("style", "font:99px _,arial,helvetica;position:absolute;visibility:hidden");
            if (!g) {
                g = s.appendChild(e.createElement("fontface"));
                t = true;
            }
            c.innerHTML = "........";
            c.id = "fonttest";
            g.appendChild(c);
            h = c.offsetWidth * c.offsetHeight;
            c.style.font = "99px testfont,_,arial,helvetica";
            a = h !== c.offsetWidth * c.offsetHeight;
            var v = function () {
                if (g.parentNode) {
                    a = j.fontface = h !== c.offsetWidth * c.offsetHeight;
                    s.className = s.className.replace(/(no-)?fontface\b/, "") + (a ? " " : " no-") + "fontface";
                }
            };
            setTimeout(v, 75);
            setTimeout(v, 150);
            addEventListener(
                "load",
                function () {
                    v();
                    (w = true) && o && o(a);
                    setTimeout(function () {
                        t || (g = c);
                        g.parentNode.removeChild(g);
                        b.parentNode.removeChild(b);
                    }, 50);
                },
                false
            );
        }
        j._fontfaceready = function (p) {
            w || a ? p(a) : (o = p);
        };
        return a || h !== c.offsetWidth;
    };
    d.video = function () {
        var a = e.createElement("video"),
            b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('video/ogg; codecs="theora"');
            b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"');
            b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"');
        }
        return b;
    };
    d.audio = function () {
        var a = e.createElement("audio"),
            b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"');
            b.mp3 = a.canPlayType("audio/mpeg;");
            b.wav = a.canPlayType('audio/wav; codecs="1"');
            b.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;");
        }
        return b;
    };
    d.localStorage = function () {
        return "localStorage" in i && i.localStorage !== null;
    };
    d.sessionStorage = function () {
        try {
            return "sessionStorage" in i && i.sessionStorage !== null;
        } catch (a) {
            return false;
        }
    };
    d.webworkers = function () {
        return !!i.Worker;
    };
    d.applicationCache = function () {
        var a = i.applicationCache;
        return !!(a && typeof a.status != "undefined" && typeof a.update == "function" && typeof a.swapCache == "function");
    };
    d.svg = function () {
        return !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
    };
    d.smil = function () {
        return !!e.createElementNS && /SVG/.test(M.call(e.createElementNS("http://www.w3.org/2000/svg", "animate")));
    };
    d.svgclippaths = function () {
        return !!e.createElementNS && /SVG/.test(M.call(e.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
    };
    for (var z in d) if (O(d, z)) N.push(((j[z.toLowerCase()] = d[z]()) ? "" : "no-") + z.toLowerCase());
    j[E] || P();
    j.addTest = function (a, b) {
        a = a.toLowerCase();
        if (!j[a]) {
            b = !!b();
            s.className += " " + (b ? "" : "no-") + a;
            j[a] = b;
            return j;
        }
    };
    m.cssText = "";
    D = n = null;
    (function () {
        var a = e.createElement("div");
        a.innerHTML = "<elem></elem>";
        return a.childNodes.length !== 1;
    })() &&
        (function (a, b) {
            function c(f, k) {
                if (o[f]) o[f].styleSheet.cssText += k;
                else {
                    var l = t[G],
                        q = b[A]("style");
                    q.media = f;
                    l.insertBefore(q, l[G]);
                    o[f] = q;
                    c(f, k);
                }
            }
            function h(f, k) {
                for (
                    var l = new RegExp("\\b(" + w + ")\\b(?!.*[;}])", "gi"),
                        q = function (B) {
                            return ".iepp_" + B;
                        },
                        x = -1;
                    ++x < f.length;

                ) {
                    k = f[x].media || k;
                    h(f[x].imports, k);
                    c(k, f[x].cssText.replace(l, q));
                }
            }
            for (
                var t = b.documentElement,
                    g = b.createDocumentFragment(),
                    o = {},
                    w = "abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",
                    v = w.split("|"),
                    p = [],
                    H = -1,
                    G = "firstChild",
                    A = "createElement";
                ++H < v.length;

            ) {
                b[A](v[H]);
                g[A](v[H]);
            }
            g = g.appendChild(b[A]("div"));
            a.attachEvent("onbeforeprint", function () {
                for (var f, k = b.getElementsByTagName("*"), l, q, x = new RegExp("^" + w + "$", "i"), B = -1; ++B < k.length; )
                    if ((f = k[B]) && (q = f.nodeName.match(x))) {
                        l = new RegExp("^\\s*<" + q + "(.*)\\/" + q + ">\\s*$", "i");
                        g.innerHTML = f.outerHTML.replace(/\r|\n/g, " ").replace(l, f.currentStyle.display == "block" ? "<div$1/div>" : "<span$1/span>");
                        l = g.childNodes[0];
                        l.className += " iepp_" + q;
                        l = p[p.length] = [f, l];
                        f.parentNode.replaceChild(l[1], l[0]);
                    }
                h(b.styleSheets, "all");
            });
            a.attachEvent("onafterprint", function () {
                for (var f = -1, k; ++f < p.length; ) p[f][1].parentNode.replaceChild(p[f][0], p[f][1]);
                for (k in o) t[G].removeChild(o[k]);
                o = {};
                p = [];
            });
        })(this, e);
    j._enableHTML5 = true;
    j._version = "1.5";
    s.className = s.className.replace(/\bno-js\b/, "") + " js";
    s.className += " " + N.join(" ");
    return j;
})(this, this.document);
