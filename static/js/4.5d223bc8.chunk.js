(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{32:function(t,e,n){"use strict";var r=n(34),c=n.n(r),a=n(35),o=n(36),i=n.n(o),u="612ad9e57f61526bfd55d457eca2466c",s="https://api.themoviedb.org/3";function f(t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(c.a.mark((function t(e){var n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=3,fetch(e,n);case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json().then((function(t){return t.results}));case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v={fetchMoviesTrend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(u,"&language=en-US&page=").concat(t);return f(e)},fetchMoviesByQuery:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&page=").concat(e,"&query=").concat(t);return f(n)},fetchMovieDetails:function(t){return i.a.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(t){return t.data}))},fetchMovieCast:function(t){var e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US");return fetch(e).then((function(t){return t.json()})).then((function(t){return t.cast}))},fetchMovieReviews:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(e);return f(n)}};e.a=v},72:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(37);var c=n(38);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(33),i=n(0),u=n(2),s=n(8),f=n(32),h=n(1);function v(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(u.g)();return Object(i.useEffect)((function(){f.a.fetchMoviesTrend().then((function(t){return r((function(e){return[].concat(a(e),a(t))}))}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Trending today"}),Object(h.jsx)("ul",{children:n.map((function(t){var e=t.poster_path,n=t.title,r=t.id;return Object(h.jsx)("li",{children:Object(h.jsxs)(s.b,{to:{pathname:"/movies/".concat(r),state:{from:c.pathname}},children:[Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e),alt:"".concat(n),width:"200",height:"200"}),Object(h.jsx)("h2",{children:n})]})},r)}))})]})}}}]);
//# sourceMappingURL=4.5d223bc8.chunk.js.map