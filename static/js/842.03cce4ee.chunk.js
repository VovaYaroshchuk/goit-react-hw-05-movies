"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{7842:function(t,n,r){r.r(n);var e=r(885),c=r(9157),a=r(2791),u=r(501),i=r(184);n.default=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1];return(0,a.useEffect)((function(){(0,c.wr)().then((function(t){o(t)})).catch((function(t){console.log(t)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending films"}),r&&(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}},9157:function(t,n,r){r.d(n,{Hx:function(){return w},QB:function(){return f},Y5:function(){return d},wr:function(){return s},xc:function(){return v}});var e=r(5861),c=r(7757),a=r.n(c),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="api_key=b34281a335cdd1f5098a9d04801c5c05";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function t(n,r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?".concat(o,"&query=").concat(n,"&page=").concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=842.03cce4ee.chunk.js.map