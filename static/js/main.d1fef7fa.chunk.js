(this["webpackJsonpdz-friday"]=this["webpackJsonpdz-friday"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"SuperInputText_input__3kPpB",superInput:"SuperInputText_superInput__1XKx8",errorInput:"SuperInputText_errorInput__PCy8H",error:"SuperInputText_error__3AhFH"}},13:function(e,t,n){e.exports={button:"SuperButton_button__3ssFB",blink:"SuperButton_blink__1Dh7h",default:"SuperButton_default__32d9q",red:"SuperButton_red__1gsB0"}},16:function(e,t,n){e.exports={label:"SuperCheckbox_label___dRgk",checkbox:"SuperCheckbox_checkbox__3ZjTB"}},18:function(e,t,n){e.exports={column:"TestPage_column__1IbTW"}},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),s=n.n(a),o=(n(26),n(27),n(2)),i=n(1),u=function(){return Object(i.jsx)("div",{children:"Profile"})},l=function(){return Object(i.jsx)("div",{children:"Register"})},j=function(){return Object(i.jsx)("div",{children:"RecoveryPass"})},b=function(){return Object(i.jsx)("div",{children:"NewPass"})},d=function(){return Object(i.jsx)("div",{children:"404"})},h=n(6),p=n(7),x=n.n(p),O=function(){return Object(i.jsxs)("div",{className:x.a.container,children:[Object(i.jsx)(h.b,{className:x.a.link,to:"/profile",children:" profile "}),Object(i.jsx)(h.b,{className:x.a.link,to:"/register",children:" register "}),Object(i.jsx)(h.b,{className:x.a.link,to:"/newPass",children:" newPass "}),Object(i.jsx)(h.b,{className:x.a.link,to:"/recoveryPass",children:" RecoveryPass"}),Object(i.jsx)(h.b,{className:x.a.link,to:"/login",children:" login "}),Object(i.jsx)(h.b,{to:"/testPage",children:" test "})]})},f=function(){return Object(i.jsx)("div",{children:"Login"})},g=n(3),_=n(8),m=n(13),v=n.n(m),N=function(e){var t=e.red,n=e.className,c=Object(_.a)(e,["red","className"]),r="".concat(v.a.button," ").concat(t?v.a.red:v.a.default," ").concat(n);return Object(i.jsx)("button",Object(g.a)({className:r},c))},k=n(10),y=n.n(k),C=function(e){e.type;var t=e.onChange,n=e.onBlur,c=e.onChangeText,r=e.onKeyPress,a=e.onEnter,s=e.error,o=e.className,u=e.spanClassName,l=Object(_.a)(e,["type","onChange","onBlur","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(y.a.error," ").concat(u||""),b="".concat(y.a.input," ").concat(s?y.a.errorInput:y.a.superInput," ").concat(o);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",Object(g.a)({type:"text",onBlur:function(e){n&&n(e)},onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:b},l)),s&&Object(i.jsx)("div",{className:j,children:s})]})},P=n(16),w=n.n(P),B=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(w.a.checkbox," ").concat(c||"");return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(i.jsx)("span",{className:w.a.spanClassName,children:r})]})},I=n(18),T=n.n(I),S=function(){return Object(i.jsxs)("div",{className:T.a.column,children:[Object(i.jsx)(N,{children:"button"}),Object(i.jsx)(C,{}),Object(i.jsx)(B,{})]})};var F=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(O,{}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/profile",element:Object(i.jsx)(u,{})}),Object(i.jsx)(o.a,{path:"/",element:Object(i.jsx)(u,{})}),Object(i.jsx)(o.a,{path:"/login",element:Object(i.jsx)(f,{})}),Object(i.jsx)(o.a,{path:"/register",element:Object(i.jsx)(l,{})}),Object(i.jsx)(o.a,{path:"/recoveryPass",element:Object(i.jsx)(j,{})}),Object(i.jsx)(o.a,{path:"/newPass",element:Object(i.jsx)(b,{})}),Object(i.jsx)(o.a,{path:"/testPage",element:Object(i.jsx)(S,{})}),Object(i.jsx)(o.a,{path:"*",element:Object(i.jsx)(d,{})})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},E=n(21),K=n(14),L=n(20),R={},D={},z={},A={},J={},q=Object(K.b)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register":return Object(g.a)({},e);default:return e}},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"password":return Object(g.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return Object(g.a)({},e);default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return Object(g.a)({},e);default:return e}},resPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"res-pass":return Object(g.a)({},e);default:return e}}}),G=Object(K.c)(q,Object(K.a)(L.a));window.store=G,s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E.a,{store:G,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(F,{})})})}),document.getElementById("root")),H()},7:function(e,t,n){e.exports={active:"Header_active__2BaGD",container:"Header_container__1gmUQ",link:"Header_link__3uFxL"}}},[[35,1,2]]]);
//# sourceMappingURL=main.d1fef7fa.chunk.js.map