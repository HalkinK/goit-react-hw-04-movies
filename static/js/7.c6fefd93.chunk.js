(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{66:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return h}));var i=c(33),n=c(2),r=c(0),a=c(32),s=c(1);function h(){var t=Object(n.h)().movieId,e=Object(r.useState)([]),c=Object(i.a)(e,2),h=c[0],o=c[1];return Object(r.useEffect)((function(){a.a.fetchMovieCast(t).then(o)}),[t]),Object(s.jsx)(s.Fragment,{children:h&&Object(s.jsx)("ul",{children:h.map((function(t){var e=t.id,c=t.profile_path,i=t.name,n=t.character;return Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(c),alt:"",width:"100",height:"150"}),Object(s.jsx)("h3",{children:i}),Object(s.jsxs)("span",{children:["Charachter: ",n]})]},e)}))})})}}}]);
//# sourceMappingURL=7.c6fefd93.chunk.js.map