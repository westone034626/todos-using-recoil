(this["webpackJsonptodos-using-recoil"]=this["webpackJsonptodos-using-recoil"]||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var o,r=t(0),c=t.n(r),i=t(12),a=t.n(i),l=t(7),s=t(16),b=t(22),d=t(3),u=t(2);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var j=Object(l.b)({key:"category",default:o.TO_DO}),O=Object(l.b)({key:"toDo",default:[]}),f=Object(l.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(O),o=n(j);return t.filter((function(e){return e.category===o}))}}),h=t(6),g=t(23),p=t(4);var m=function(){var e=Object(l.f)(O),n=Object(l.e)(j),t=Object(g.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(p.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;e((function(e){return[{text:o,id:Date.now(),category:n}].concat(Object(h.a)(e))})),c("toDo","")})),children:[Object(p.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(p.jsx)("button",{children:"Add"})]})};var x=function(e){var n=e.text,t=e.category,r=e.id,c=Object(l.f)(O),i=function(e){var t=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:n,id:r,category:t};return[].concat(Object(h.a)(e.slice(0,o)),[c],Object(h.a)(e.slice(o+1)))}))};return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:n}),t!==o.DOING&&Object(p.jsx)("button",{name:o.DOING,onClick:i,children:"Doing"}),t!==o.TO_DO&&Object(p.jsx)("button",{name:o.TO_DO,onClick:i,children:"To Do"}),t!==o.DONE&&Object(p.jsx)("button",{name:o.DONE,onClick:i,children:"Done"})]})};var D,v=function(){var e=Object(l.e)(f),n=Object(l.d)(j),t=Object(u.a)(n,2),r=t[0],c=t[1];return console.log(e),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"To Dos"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(p.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(p.jsx)("option",{value:o.DOING,children:"Doing"}),Object(p.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(p.jsx)(m,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(p.jsx)(x,Object(d.a)({},e),e.id)}))]})},y=Object(s.b)(D||(D=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(v,{})]})};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(p.jsx)(k,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c1b77ce0.chunk.js.map