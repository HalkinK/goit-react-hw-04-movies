(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{32:function(e,t,n){"use strict";var c=n(34),r=n.n(c),a=n(35),i=n(36),s=n.n(i),o="612ad9e57f61526bfd55d457eca2466c",u="https://api.themoviedb.org/3";function j(e){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(r.a.mark((function e(t){var n,c,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,fetch(t,n);case 3:if(!(c=e.sent).ok){e.next=10;break}return e.next=7,c.json().then((function(e){return e.results}));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={fetchMoviesTrend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="".concat(u,"/trending/movie/day?api_key=").concat(o,"&language=en-US&page=").concat(e);return j(t)},fetchMoviesByQuery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&page=").concat(t,"&query=").concat(e);return j(n)},fetchMovieDetails:function(e){return s.a.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US")).then((function(e){return e.data}))},fetchMovieCast:function(e){var t="".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US");return fetch(t).then((function(e){return e.json()})).then((function(e){return e.cast}))},fetchMovieReviews:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(t);return j(n)}};t.a=h},69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(33),r=n(0),a=n(2),i=n(8),s=n(32),o=n(1),u=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,66))})),j=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,67))}));function l(){var e=Object(a.h)().movieId,t=Object(a.i)(),n=t.url,l=t.path,h=Object(a.f)(),v=Object(a.g)(),b=Object(r.useState)({poster_path:null,title:null,overview:null,vote_average:null,genres:null,id:null}),d=Object(c.a)(b,2),f=d[0],p=d[1],O=Object(r.useState)(!1),g=Object(c.a)(O,2),x=g[0],m=g[1],w=Object(r.useState)(!1),k=Object(c.a)(w,2),y=k[0],_=k[1];Object(r.useEffect)((function(){s.a.fetchMovieDetails(e).then((function(e){var t=e.poster_path,n=e.title,c=e.overview,r=e.vote_average,a=e.genres,i=e.id;return p({poster_path:t,title:n,overview:c,genres:a,vote_average:r,id:i})}))}),[e]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){if(v.state&&v.state.from)return h.push(v.state.from);h.push("/")},children:Object(o.jsx)("span",{children:"Go Back"})}),f&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(f.poster_path),alt:f.title}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:f.title}),Object(o.jsxs)("p",{children:["User Score: ",Object(o.jsxs)("span",{children:[10*f.vote_average,"%"]})]}),Object(o.jsx)("h3",{children:"Overview"}),"Overview:",Object(o.jsx)("span",{children:f.overview}),Object(o.jsx)("h4",{children:"Genres"}),Object(o.jsx)("ul",{children:f.genres&&f.genres.map((function(e){return Object(o.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"Additional information"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{to:{pathname:"".concat(n,"/cast")},onClick:function(){!0===y&&_(!1),m(!0)},children:"Cast"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{to:{pathname:"".concat(n,"/reviews")},onClick:function(){!0===x&&m(!1),_(!0)},children:"Reviews"})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(r.Suspense,{fallback:Object(o.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:[Object(o.jsx)(a.a,{path:"".concat(l,"/:cast"),children:f&&x&&Object(o.jsx)(u,{})}),Object(o.jsx)(a.a,{path:"".concat(l,"/:reviews"),children:f&&y&&Object(o.jsx)(j,{})})]})]})]})}}}]);
//# sourceMappingURL=5.df506f34.chunk.js.map