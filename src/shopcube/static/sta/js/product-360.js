console.log('非源码，仅用作演示。下载源码请访问：https://www.17sucai.com');// Circlr Â© 2014-2015 Andrey Polischuk github.com/andrepolischuk/circlr
!function () {
	"use strict";
	function b(b) {

		function p(a, b, c) {
			a.addEventListener
			? a.addEventListener(b, c, !1)
			: a.attachEvent("on" + b, function () {
				c.call(a, window.event);
			});
		}

		function q(a) {
			a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
		}

		function r(a) {
			(c = !1), q(a), (a = "touchstart" === a.type ? a.changedTouches[0] : a), (i = !0), b.vertical ? (m.Y = a.clientY - d.offsetTop) : (m.X = a.clientX - d.offsetLeft);
		}

		function s(a) {
			return 0 > a ? (a = b.cycle ? a + f : 0) : a > f - 1 && (a = b.cycle ? a - f : f - 1), a;
		}

		function t(a) {
			if (i) {
				q(a), (a = "touchmove" === a.type ? a.changedTouches[0] : a);
				var c = b.vertical ? a.clientY - d.offsetTop - m.Y : a.clientX - d.offsetLeft - m.X;
				c = b.reverse ? -c : c;
				var e = h / f,
				g = l;
				(c = Math.floor(c / e)),
				c !== l && ((l = s(m.frame + c)), g !== l && ((d.getElementsByTagName("img")[g].style.display = "none"), (d.getElementsByTagName("img")[l].style.display = "block"), "function" == typeof n.change && n.change(l, f)));
			}
		}
		function u(a) {
			q(a), (i = !1), (m.frame = l);
		}

		function v(a) {
			(c = !1), q(a);
			var e = a.deltaY || a.detail || -a.wheelDelta;
			(e /= Math.abs(e)),
			(e = b.reverse ? -e : e),
			(l = s(l + e)),
			(d.getElementsByTagName("img")[m.frame].style.display = "none"),
			(d.getElementsByTagName("img")[l].style.display = "block"),
			(m.frame = l),
			"function" == typeof n.change && n.change(l, f);
		}

		function w() {
			if ((e && (e.style.display = "none"), 0 === k.length)) {
				var a = s(b.start);
				if (((d.getElementsByTagName("img")[a].style.display = "block"), (l = a), (d.style.position = "relative"), (d.style.width = "100%"), "ontouchstart" in window || "onmsgesturechange" in window))
				(b.mouse || b.scroll) && (p(d, "touchstart", r), p(d, "touchmove", t), p(d, "touchend", u));
				else if ((b.mouse && (p(d, "mousedown", r), p(d, "mousemove", t), p(document, "mouseup", u)), b.scroll))
				for (var f = 0; f < o.length; f++)
				if ("on" + o[f] in window) {
					p(d, o[f], v);
					break;
				}
				c && B();
			}
			"function" == typeof n.ready && n.ready(k);
		}

		function x(a) {
			(a.onload = function () {
				j.push(this.src), j.length + k.length === f && w();
			}),
			(a.onerror = function () {
				k.push(this.src), j.length + k.length === f && w();
			}),
			(a.onreadystatechange = function () {
				this.onload();
			});
		}

		function y() {
			var a;
			e && (e.style.display = "block");
			for (var b = 0; f > b; b++)
			(a = d.getElementsByTagName("img")[b]), (a.style.display = "none"), (a.style.width = "100%"), a.setAttribute("src", a.getAttribute("data-src")), a.setAttribute("data-index", b), a.removeAttribute("data-src"), x(a);
			(g = g || d.clientHeight), (h = h || d.clientWidth);
		}

		function z(a) {
			(d.getElementsByTagName("img")[l].style.display = "none"), (d.getElementsByTagName("img")[a].style.display = "block"), (m.frame = l = a);
		}
		
		(b.mouse = b.mouse || !0), (b.scroll = b.scroll || !1), (b.vertical = b.vertical || !1), (b.reverse = b.reverse || !1), (b.cycle = b.cycle || !0), (b.start = b.start || 0), (b.speed = b.speed || 50);
		var c = b.autoplay || !1;
		b.playSpeed = b.playSpeed || 100;
		var d = (this.el = b.element);
		d.setAttribute("data-circlr", !0);
		var l,
		e = b.loader ? document.getElementById(b.loader) : void 0,
		f = (this.length = d.getElementsByTagName("img").length),
		g = b.height || void 0,
		h = b.width || void 0,
		i = !1,
		j = [],
		k = [],
		m = {};
		(m.Y = null), (m.X = null), (m.frame = 0);
		var n = {};
		(n.ready = b.ready || void 0), (n.change = b.change || void 0);
		var o = ["wheel", "mousewheel", "scroll", "DOMMouseScroll"];
		y();
		var A = (this.turn = function (a) {
			(a = s(a)),
			(c = !0),
			(function d() {
				a !== l && c ? (z(s(l > a ? l - 1 : l + 1)), setTimeout(d, "undefined" == typeof a ? b.playSpeed : b.speed)) : a === l && ((m.frame = l = a), (c = !1), "function" == typeof n.change && n.change(l, f));
			})();
		});

		this.go = function (a) {
			a !== l && (z(a), "function" == typeof n.change && n.change(l, f));
		};

		var B = (this.play = function () {
			(c = !0), A();
		});

		(this.stop = function () {
			c = !1;
		}),

		(this.show = function () {
			d.style.display = "block";
		}),

		(this.hide = function () {
			d.style.display = "none";
		}),
		
		(this.set = function (c) {
			for (var e, d = 0; d < a.length; d++) (e = a[d]), (b[e] = "undefined" != typeof c[e] ? c[e] : b[e]);
		});
	}

	function c(a, c) {
		return (a = document.getElementById(a)), a.getAttribute("data-circlr") ? void 0 : ((c = c || {}), (c.element = a), new b(c));
	}

	var a = ["vertical", "reverse", "cycle", "speed", "playSpeed"];

	"function" == typeof define && define.amd
    ? define([], function () {
        return c;
	})
    : "undefined" != typeof module && module.exports
    ? (module.exports = c)
    : (this.circlr = c);
}.call(this);





$('.ec-cycle').click(function() {
				if (!$(this).is(':checked')) 
				{
					$(this).checked = true;
					crl.set({ cycle : false });
				}
				else
				{
					$(this).checked = false;
					crl.set({ cycle : true });
				};
			});

			$('.ec-reverse').click(function() {
				if (!$(this).is(':checked')) 
				{
					$(this).checked = true;
					crl.set({ reverse : false });
				}
				else
				{
					$(this).checked = false;
					crl.set({ reverse : true });
				};
			});

			$('.ec-vertical').click(function() {
				if (!$(this).is(':checked')) 
				{
					$(this).checked = true;
					crl.set({ vertical : false });
				}
				else
				{
					$(this).checked = false;
					crl.set({ vertical : true });
				};
			});

			// crl.set({ cycle : true });
			var crl = circlr('circlr', {
				scroll : true,
				loader : 'loader'
			});
console.log('非源码，仅用作演示。下载源码请访问：https://www.17sucai.com');