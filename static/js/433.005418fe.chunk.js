"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{433:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(885),a=e(9157),c=e(2791),u=e(501),s="Home_title__XLxL1",i="Home_list__axoM8",o="Home_item__KHBnP",p="Home_link__nk6bm",f=e(184),l=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],l=n[1];return(0,c.useEffect)((function(){(0,a.wr)().then((function(t){l(t)})).catch((function(t){console.log(t)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:s,children:"Trending films"}),e&&(0,f.jsx)("ul",{className:i,children:e.map((function(t){return(0,f.jsx)("li",{className:o,children:(0,f.jsx)(u.rU,{className:p,to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}},9157:function(t,n,e){e.d(n,{Hx:function(){return x},QB:function(){return f},Y5:function(){return h},wr:function(){return o},xc:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=b34281a335cdd1f5098a9d04801c5c05";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?".concat(i,"&query=").concat(n,"&page=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/credits?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/reviews?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=433.005418fe.chunk.js.map