(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),r=t.n(c),a=t(8),u=t(3),o=t(1),i=t(4),s=t.n(i),d="/api/people",l=function(){return s.a.get(d).then((function(e){return e.data}))},j=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(d,"/").concat(e))},m=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},f=t(0),h=function(e){var n=e.person,t=e.deletePerson;return Object(f.jsxs)("div",{children:[n.name," ",n.number,Object(f.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.people,t=e.newFilter,c=e.deletePerson;return Object(f.jsx)("div",{children:n.filter((function(e){return e.name.includes(t)})).map((function(e){return Object(f.jsx)(h,{person:e,deletePerson:function(){return c(e.id)}},e.name)}))})},v=function(e){var n=e.addName,t=e.newName,c=e.newNumber,r=e.handleNameChange,a=e.handleNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:r})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:a})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e,n){for(var t=e.people.length,c=n.newName,r=0;r<t;r++)if(e.people[r].name===c)return window.confirm("".concat(c," is already added to phonebook, replace the old number with a new one?"))?e.people[r].id:"dont add anything";return"add name and number"},x=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"success",children:n})},w=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),i=Object(u.a)(r,2),s=i[0],d=i[1],h=Object(o.useState)(""),g=Object(u.a)(h,2),N=g[0],C=g[1],y=Object(o.useState)(""),S=Object(u.a)(y,2),k=S[0],P=S[1],T=Object(o.useState)(null),D=Object(u.a)(T,2),F=D[0],I=D[1],E=Object(o.useState)(null),J=Object(u.a)(E,2),A=J[0],B=J[1];Object(o.useEffect)((function(){l().then((function(e){c(e)}))}),[]);var q=function(e){var n=e[1],r=e[2],u=t.find((function(e){return e.id===r})),o=Object(a.a)(Object(a.a)({},u),{},{number:n});m(r,o).then((function(e){c(t.map((function(n){return n.id!==r?n:e})))})).catch((function(e){B("Information of ".concat(u.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)})),d(""),C("")};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(x,{message:F}),Object(f.jsx)(w,{message:A}),Object(f.jsx)("form",{children:Object(f.jsxs)("div",{children:["Filter shown with:",Object(f.jsx)("input",{value:k,onChange:function(e){P(e.target.value)}})]})}),Object(f.jsx)("h2",{children:"add a new"}),Object(f.jsx)(v,{addName:function(e){e.preventDefault();var n=p({people:t},{newName:s});"add name and number"===n?function(e){var n={name:e.newName,number:e.newNumber};j(n).then((function(e){c(t.concat(e)),d(""),C(""),I("Added ".concat(n.name)),setTimeout((function(){I(null)}),5e3)}))}({newName:s,newNumber:N}):"dont add anything"===n?(d(""),C("")):q([s,N,n])},newName:s,newNumber:N,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(O,{people:t,newFilter:k,deletePerson:function(e){var n=t.filter((function(n){return n.id===e})),r=t.filter((function(n){return n.id!==e}));window.confirm("Delete ".concat(n[0].name,"?"))&&b(e).then((function(e){c(r),I("Deleted ".concat(n[0].name)),setTimeout((function(){I(null)}),5e3)})).catch((function(e){B("Information of ".concat(n[0].name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)}))}})]})};t(41);r.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.704248b2.chunk.js.map