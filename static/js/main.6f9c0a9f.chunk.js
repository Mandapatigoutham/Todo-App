(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),d=n(3),i=n.n(d),a=(n(8),n(0));var r=e=>{let{todolist:t,deleteHandler:n}=e;return Object(a.jsx)("div",{children:t.map(((e,t)=>Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{children:[e," \xa0 ",Object(a.jsx)("button",{onClick:()=>n(t),children:"Delete"})]})},t)))})};var l=()=>{const[e,t]=Object(c.useState)(""),[n,s]=Object(c.useState)([]);return Object(a.jsx)("div",{children:Object(a.jsx)("center",{children:Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:"Todo Management  Application"}),Object(a.jsxs)("form",{onSubmit:c=>{c.preventDefault();const d=[...n,e];s(d),t("")},children:[Object(a.jsx)("input",{size:"30",type:"text",name:"task",value:e,onChange:e=>{t(e.target.value)}})," \xa0\xa0",Object(a.jsx)("input",{type:"submit",value:"Add",name:"Add"})]}),Object(a.jsx)(r,{todolist:n,deleteHandler:e=>{const t=n.filter(((t,n)=>n!==e));s(t)}})]})})})})};var j=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((t=>{let{getCLS:n,getFID:c,getFCP:s,getLCP:d,getTTFB:i}=t;n(e),c(e),s(e),d(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),j()},8:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.6f9c0a9f.chunk.js.map