(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[9],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(33),i=n(2),r=n(0),s=n(32),h=n(1);function o(){var e=Object(i.h)().movieId,t=Object(r.useState)(null),n=Object(c.a)(t,2),o=n[0],a=n[1];return Object(r.useEffect)((function(){s.a.fetchMovieReviews(e).then(a)}),[e]),Object(h.jsx)(h.Fragment,{children:o&&o.length>0?Object(h.jsx)("ul",{children:o.map((function(e){var t=e.id,n=e.author,c=e.content;return Object(h.jsxs)("li",{children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("span",{children:c})]},t)}))}):Object(h.jsx)("span",{children:"We don't have reviews for this movie."})})}}}]);
//# sourceMappingURL=9.a617baad.chunk.js.map