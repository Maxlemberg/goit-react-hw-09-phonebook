(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={title:"Filter_title__2JKOj",input:"Filter_input__2sAep",cont:"Filter_cont__3PakA"}},13:function(t,e,n){t.exports={container:"App_container__23uJz",title:"App_title__1ff7W",title2:"App_title2__2Ln79 App_title__1ff7W"}},48:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(10),o=n.n(i),s=n(7),l=n(19),u=n(20),b=n(27),d=n(26),m=n(6),p=n.n(m),j=n(1),h=function(t){var e=t.handleSubmit,n=t.handleInput,a=t.value,c=t.number,r=!(a&&c);return Object(j.jsxs)("form",{onSubmit:e,className:p.a.form,children:[Object(j.jsxs)("label",{htmlFor:"",className:p.a.label,children:["Name",Object(j.jsx)("input",{className:p.a.input,type:"text",placeholder:"Enter name",onInput:n,value:a,name:"name"})]}),Object(j.jsxs)("label",{className:p.a.label,children:["Number",Object(j.jsx)("input",{className:p.a.input,type:"number",placeholder:"Enter number",onInput:n,value:c,name:"number"})]}),r?Object(j.jsx)("button",{type:"submit",disabled:r,className:p.a.disabled,children:"Add contact"}):Object(j.jsx)("button",{type:"submit",disabled:r,className:p.a.button,children:"Add contact"})]})},f=n(12),_=n.n(f),O=n(5),x=n(22),v=n.n(x),N=n(3),I=Object(N.b)("phonebook/Add",(function(t,e){return{payload:{id:v.a.generate(),name:t,number:e}}})),y=Object(N.b)("phonebook/Delete"),k=Object(N.b)("phonebook/Filter"),g=Object(O.b)((function(t){return{filter:t.filter}}),(function(t){return{handleInput:function(e){return t(k(e.target.value))}}}))((function(t){var e=t.filter,n=t.handleInput;return Object(j.jsxs)("label",{className:_.a.cont,htmlFor:"",children:[Object(j.jsx)("h3",{className:_.a.title,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",value:e,className:_.a.input,name:"filter",onChange:n})]})})),C=n(8),A=n.n(C),S=Object(O.b)((function(t){return{contacts:t.todos.contacts,filter:t.todos.filter}}),(function(t){return{onDelete:function(e){return t(y(e.target.id))}}}))((function(t){var e=t.contacts,n=t.filter,a=t.onDelete,c=n.toLowerCase(),r=e.filter((function(t){return t.name.toLowerCase().includes(c)})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(j.jsxs)("li",{className:A.a.itemLi,children:[Object(j.jsxs)("span",{className:A.a.text,children:[n,": ",c]}),Object(j.jsx)("button",{type:"button",className:A.a.button,id:e,onClick:a,children:"Delete"})]},e)}));return Object(j.jsx)("ul",{className:A.a.list,children:r})})),L=n(13),w=n.n(L),F=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.state.some((function(e){return e.name===t.state.name}))?alert("\u0406\u043c\u044f ".concat(t.state.name," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454!")):(t.props.onSubmit(t.state.name,t.state.number),t.resetInput())},t.resetInput=function(){t.setState({name:"",number:""})},t.handleInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleInput,n=this.state,a=n.name,c=n.number;return Object(j.jsxs)("div",{className:w.a.container,children:[Object(j.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(j.jsx)(h,{handleSubmit:t,handleInput:e,value:a,number:c}),Object(j.jsx)("h2",{className:w.a.title2,children:"Contacts"}),Object(j.jsx)(g,{}),Object(j.jsx)(S,{})]})}}]),n}(c.Component),D=Object(O.b)((function(t){return{state:t.todos.contacts}}),(function(t){return{onSubmit:function(e,n){return t(I(e,n))}}}))(F),E=n(11),J=n(2),P=Object(N.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(s.a)(a,I,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(s.a)(a,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),Q=Object(N.c)("",Object(s.a)({},k,(function(t,e){return e.payload}))),W=Object(J.c)({contacts:P,filter:Q}),z=n(23),B=n.n(z),K=n(4),T=n(24),H=n.n(T),M=[].concat(Object(E.a)(Object(N.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[B.a]),R={key:"todos",storage:H.a,blacklist:["filter"]},V=Object(N.a)({reducer:{todos:Object(K.g)(R,W)},middleware:M,devTools:!1}),Y=Object(K.h)(V),Z=n(25);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O.a,{store:V,children:Object(j.jsx)(Z.a,{loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",persistor:Y,children:Object(j.jsx)(D,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={input:"Input_input__3RmHS",form:"Input_form__1TWM_",label:"Input_label__2K68X",disabled:"Input_disabled__1Q-YQ",button:"Input_button__-ZPZW Input_disabled__1Q-YQ"}},8:function(t,e,n){t.exports={itemLi:"ContactsList_itemLi__16f6z",button:"ContactsList_button__33B5V",text:"ContactsList_text__2mjPh",list:"ContactsList_list__3B5VU"}}},[[48,1,2]]]);
//# sourceMappingURL=main.74097f6e.chunk.js.map