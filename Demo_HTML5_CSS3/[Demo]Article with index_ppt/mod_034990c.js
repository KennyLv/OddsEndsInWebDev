var require, define;
! function(e) {
	function r(e, r) {
		if (!( e in u)) {
			u[e] = !0;
			var t = document.createElement("script");
			if (r) {
				var i = setTimeout(r, require.timeout);
				t.onerror = function() {
					clearTimeout(i), r()
				}, t.onreadystatechange = function() {
					"complete" == this.readyState && clearTimeout(i)
				}
			}
			return t.type = "text/javascript", t.src = e, n.appendChild(t), t
		}
	}

	function t(e, t, n) {
		var a = i[e] || (i[e] = []);
		a.push(t);
		var o, u = f[e] || {}, s = u.pkg;
		o = s ? c[s].url : u.url || e, r(o, n &&
		function() {
			n(e)
		})

	}

	var n = document.getElementsByTagName("head")[0], i = {}, a = {}, o = {}, u = {}, f = {}, c = {};
	define = function(e, r) {
		a[e] = r;
		var t = i[e];
		if (t) {
			for (var n = t.length - 1; n >= 0; --n)
				t[n]();
			delete i[e]
		}
	}, require = function(e) {
		e = require.alias(e);
		var r = o[e];
		if (r)
			return r.exports;
		var t = a[e];
		if (!t)
			throw Error("Cannot find module `" + e + "`");
		r = o[e] = {
			exports : {}
		};
		var n = "function" == typeof t ? t.apply(r, [require, r.exports, r]) : t;
		return n && (r.exports = n), r.exports
	}, require.async = function(r, n, i) {
		function o(e) {
			for (var r = e.length - 1; r >= 0; --r) {
				var n = e[r];
				if (!( n in a || n in s)) {
					s[n] = !0, l++, t(n, u, i);
					var c = f[n];
					c && "deps" in c && o(c.deps)
				}
			}
		}

		function u() {
			if (0 == l--) {
				var t, i, a = [];
				for ( t = 0, i = r.length; i > t; ++t)
					a[t] = require(r[t]);
				n && n.apply(e, a)
			}
		}
		"string" == typeof r && ( r = [r]);
		for (var c = r.length - 1; c >= 0; --c)
			r[c] = require.alias(r[c]);
		var s = {}, l = 0;
		o(r), u()
	}, require.resourceMap = function(e) {
		var r, t;
		t = e.res;
		for (r in t)t.hasOwnProperty(r) && (f[r] = t[r]);
		t = e.pkg;
		for (r in t)t.hasOwnProperty(r) && (c[r] = t[r])
	}, require.loadJs = function(e) {
		r(e)
	}, require.loadCss = function(e) {
		if (e.content) {
			var r = document.createElement("style");
			r.innerHTML = e.content, n.appendChild(r)
		} else if (e.url) {
			var t = document.createElement("link");
			t.href = e.url, t.rel = "stylesheet", t.type = "text/css", n.appendChild(t)
		}
	}, require.alias = function(e) {
		return e
	}, require.timeout = 5e3, define.amd = {
		jQuery : !0,
		version : "1.0.0"
	}
}(this); 