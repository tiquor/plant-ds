(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{292:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},305:function(e,t){},306:function(e,t){},314:function(e,t){},317:function(e,t){},318:function(e,t){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var s=n(13),a=n.n(s),c=n(199),r=n.n(c),i=n(51),o=n(53),l=n(21),m=n(4),u=n(210),d=window,j=document,b=(navigator,localStorage),h=(new Date,new u.a),f=h.get("names"),x=h.get("surnames"),p=h.get("email"),O=h.get("token"),g=JSON.parse(h.get("auth")||!1),w=JSON.parse(b.getItem("webCam")+""),v=JSON.parse(b.getItem("imageBuffers")+"")||[],y={email:"",password:""},N={names:"",surnames:"",email:"",password:""},C={auth:g,user:{names:f||"",surnames:x||"",email:p||"",token:O||""}},_={files:[],buffers:v},k=n(11),S=Object(s.createContext)(_),E=function(e){var t=e.children,n=Object(s.useState)(""),a=Object(m.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)(""),o=Object(m.a)(i,2),u=o[0],d=o[1],j=Object(s.useState)(_.files),b=Object(m.a)(j,2),h=b[0],f=b[1],x=Object(s.useState)(_.buffers),p=Object(m.a)(x,2),O=p[0],g=p[1],w=function(e){var t=O,n=Array.from(e);f([].concat(Object(l.a)(h),Object(l.a)(n))),n.forEach((function(e){return v(e,t)}))},v=function(e,t){var n=new FileReader;n.readAsArrayBuffer(e),n.addEventListener("load",(function(e){if(n.result&&"string"!==typeof n.result){var s=new Uint8Array(n.result);t.push(s),g(t)}})),n.addEventListener("progress",(function(t){var n=100*t.loaded/t.total;r(n),d("<i class='fs-7'>".concat(e.name," - ").concat(n,"%</i>"))})),n.addEventListener("loadend",(function(e){setTimeout((function(){r(""),d("")}),1200)}))};return Object(k.jsx)(S.Provider,{value:{files:h,buffers:O,progress:c,progressInner:u,handleUint8Array:function(e){return g([].concat(Object(l.a)(O),[e]))},handleImageChange:function(e){e.target.files&&w(e.target.files)},handleImageDropZone:function(e){e.length&&w(e)}},children:t})},L=S,I=n(90),P=Object(s.createContext)(C),B=function(e){var t=e.children,n=Object(s.useState)(C.auth),a=Object(m.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)(C.user),l=Object(m.a)(i,2),d=l[0],j=l[1],b=new u.a,h=Object(o.f)(),f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};return b.set(e,t,n)},x=function(e){return b.remove(e,{path:"/"})};return Object(k.jsx)(P.Provider,{value:{user:d,auth:c,cookie:b,signIn:function(e){if(e.token){r(!0),f("names",e._user.names+""),f("surnames",e._user.surnames+""),f("email",e._user.email+""),f("token",e.token+""),f("auth",!0+"");var t={names:b.get("names"),surnames:b.get("surnames"),email:b.get("email"),token:b.get("token")};j(t),h.push("/")}else I.b.error("Error el token de autenticaci\xf3n no existe")},signOff:function(){r(!1),x("names"),x("surnames"),x("email"),x("token"),x("auth"),j(C.user)}},children:t})},F=P,A=n.p+"static/media/cube.b0564ecf.svg",G=n.p+"static/media/logo.9fa5235b.svg",D=n.p+"static/media/github.71253927.svg",T=n.p+"static/media/pflanze-coloured.8b1f01ef.svg",U=n.p+"static/media/plants_disease.d186ed73.svg",q=n.p+"static/media/detect_disease.91b57d8f.svg",M=n.p+"static/media/card-content-1.3861e5d3.svg",z=n.p+"static/media/card-content-2.7dc504dc.svg",R=(n(292),function(e){var t=e.title,n=e.description,s=e.img,a=e.grid,c="".concat(a," card__main d-flex justify-content-around align-items-center");return Object(k.jsxs)("section",{className:c,children:[Object(k.jsx)("img",{src:s,alt:t}),Object(k.jsxs)("section",{className:"d-flex flex-column justify-content-center",children:[Object(k.jsx)("h3",{className:"letters-s-5",children:t}),Object(k.jsx)("p",{className:"fs-text text-justify",children:n})]})]})}),W=(n(293),function(){return Object(k.jsx)("header",{className:"home__container ",children:Object(k.jsxs)("div",{className:"home__display w-100 p-3 h-100 d-flex flex-column flex-lg-row\r justify-content-between justify-content-lg-around align-items-center",children:[Object(k.jsxs)("section",{className:"d-flex justify-content-between align-items-center",children:[Object(k.jsx)("img",{className:"header__logo-home me-4",src:G,alt:"Logo de la aplicaci\xf3n"}),Object(k.jsx)("h1",{className:"fs-2 letters-s-5 mx-3",children:"PHG Plants"})]}),Object(k.jsxs)("section",{className:"d-none d-sm-flex pt-3 p-lg-0 w-nav-auto justify-content-evenly",children:[Object(k.jsx)(i.c,{to:"/options",className:"p-1 h-first fs-text fw-bold",children:"Get Started"}),Object(k.jsx)("div",{className:"header__separate"}),Object(k.jsx)(i.c,{to:"/",className:"p-1 h-first fs-text",children:"Learn"}),Object(k.jsx)("div",{className:"header__separate"}),Object(k.jsx)(i.c,{to:"/",className:"p-1 h-first fs-text",children:"Contact"}),Object(k.jsx)("div",{className:"header__separate"}),Object(k.jsx)(i.c,{to:"/",className:"p-1 h-first fs-text",children:"About Us"})]})]})})}),H=Object(s.memo)(W),J=(n(294),function(){return Object(k.jsxs)("footer",{className:"home__footer d-flex justify-content-around align-items-center",children:[Object(k.jsxs)("section",{className:"d-flex justify-content-between align-items-center",children:[Object(k.jsx)("img",{className:"header__logo-home me-4",src:G,alt:"Logo de la aplicaci\xf3n"}),Object(k.jsx)("h3",{className:"d-none d-sm-flex fs-4 letters-s-5 mx-3",children:"PHG Plants"})]}),Object(k.jsx)("p",{className:"fs-small white-color m-0",children:"sitio dise\xf1ado por @jochizan"})]})}),Z=Object(s.memo)(J),$=function(){return Object(k.jsxs)("section",{className:"vh-100 d-flex flex-column",children:[Object(k.jsx)(H,{}),Object(k.jsxs)("main",{className:"flex-grow-1",children:[Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(k.jsxs)("section",{className:"home__main flex-column flex-md-row\r mx-lg-auto mt-5 mb-5 d-flex justify-content-evenly\r justify-content-sm-around justify-content-lg-between align-items-center",children:[Object(k.jsx)("img",{className:"w-main-logo",src:G,alt:"Logo de la aplicaci\xf3n"}),Object(k.jsxs)("section",{className:"container__buttons-main d-flex flex-column flex-sm-row flex-md-column\r justify-content-around justify-content-lg-center align-items-center",children:[Object(k.jsxs)("section",{className:"w-main d-flex flex-column justify-content-center mb-4 mb-sm-0",children:[Object(k.jsx)("h2",{className:"h2 letters-s-5 fw-bold text-center",children:"PHG Plants"}),Object(k.jsx)("p",{className:"text-dark text-justify fs-text w-100 m-0 mb-md-4",children:"Web application for the detection of diseases in common plants in Peru and their possible treatment"})]}),Object(k.jsxs)("section",{className:"d-flex flex-column flex-md-row\r justify-content-between justify-content-md-between align-items-center",children:[Object(k.jsx)(i.b,{className:"button__link-main one",to:"/options",children:"Get Started"}),Object(k.jsx)(i.b,{className:"button__link-main two",to:"/why",children:"Why PHG Plants?"}),Object(k.jsxs)("a",{className:"button__link-main three",href:"https://github.com/Uncle-Liquor/phg-plants",target:"_blank",rel:"noreferrer",children:["GitHub",Object(k.jsx)("img",{className:"m-1",src:D,alt:"Logo de Github"})]})]})]})]})}),Object(k.jsx)("section",{className:"main__raison mb-5 pb-5",children:Object(k.jsxs)("article",{className:"main__grid mx-1 mx-md-5 mt-3 px-1 px-md-5 ",children:[Object(k.jsx)(R,{title:"Which plants?",img:T,description:"Slate helps you see how many\r more days you need to work to\r reach your financial goal for the\r month and year."}),Object(k.jsx)(R,{title:"What diseases?",img:U,description:"Slate helps you see how many\r more days you need to work to\r reach your financial goal for the\r month and year."}),Object(k.jsx)(R,{title:"As it detects?",img:q,grid:"grid-lg-2",description:"Slate helps you see how many\r more days you need to work to\r reach your financial goal for the\r month and year."}),Object(k.jsxs)("section",{className:"card__main-principal d-flex flex-column flex-md-row\r justify-content-evenly align-items-center",children:[Object(k.jsx)("img",{className:"img__card",src:A,alt:"technologies"}),Object(k.jsxs)("div",{className:"d-flex h-dm-100 flex-column align-items-center justify-content-evenly",children:[Object(k.jsxs)("section",{className:"d-flex flex-column justify-content-center",children:[Object(k.jsx)("h3",{className:"letters-s-5 text-center",children:"Technologies & Frameworks"}),Object(k.jsx)("img",{src:M,alt:"Technologies and frameworks"})]}),Object(k.jsxs)("section",{children:[Object(k.jsx)("h3",{className:"letters-s-5 text-center",children:"Programming Languages"}),Object(k.jsx)("img",{src:z,alt:"Programming Languages"})]})]})]})]})})]}),Object(k.jsx)(Z,{})]})},X=n(329),K=n(5),Q=n.n(K),V=n(12),Y=n(55),ee=n(25),te=function(){var e=function(){var e=Object(V.a)(Q.a.mark((function e(t,n){var s,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={accept:"application/json"},a=new AbortController,n.signal=a.signal,n.method=n.method||"GET",n.headers=n.headers?Object(ee.a)(Object(ee.a)({},s),n.headers):s,n.body||delete n.body,setTimeout((function(){return a.abort()}),3e3),e.abrupt("return",fetch(t,n).then((function(e){return e.ok?e.json():Promise.reject({err:!0,status:e.status||"00",statusText:e.statusText||"Ocurri\xf3 un error"})})).catch((function(e){return e})));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{get:function(t,n){return e(t,n)},post:function(t,n){return n.method="POST",e(t,n)},put:function(t,n){return n.method="PUT",e(t,n)},del:function(t,n){return n.method="DELETE",e(t,n)}}},ne=function(e,t,n,a){var c=Object(s.useState)(e),r=Object(m.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)({}),u=Object(m.a)(l,2),d=u[0],j=u[1],b=Object(s.useState)(!1),h=Object(m.a)(b,2),f=h[0],x=h[1],p=function(e){var t=e.target,n=t.name,s=t.value;o(Object(ee.a)(Object(ee.a)({},i),{},Object(Y.a)({},n,s)))};return{form:i,errors:d,loading:f,handleBlur:function(e){p(e),j(t(i))},handleSubmit:function(){var s=Object(V.a)(Q.a.mark((function s(c){var r;return Q.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(c.preventDefault(),j(t(i)),Object.keys(d).length){s.next=13;break}return I.b.info("Se esta enviando el formulario..."),x(!0),s.next=7,te().post("".concat("https://api-phg-plants.herokuapp.com","/api/").concat(a),{body:JSON.stringify(i),headers:{"content-type":"application/json",accept:"application/json"}});case 7:r=s.sent,x(!1),o(e),r.err||r.status>400||r instanceof DOMException?I.b.error("Error: ".concat(r.err||"Unknown"," Status: ").concat(r.status||404)):(I.b.success("Operaci\xf3n exitosa"),n&&n(r)),s.next=15;break;case 13:return I.b.warn("Complete bien los campos de email y contrase\xf1a"),s.abrupt("return");case 15:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),handleChange:p}},se=(n(296),function(e){var t=e.id,n=e.name,s=e.type,a=e.label,c=e.value,r=e.onBlur,i=e.onChange,o=e.placeholder;return Object(k.jsxs)(X.a.Group,{className:"mx-4 mx-sm-5 px-sm-3 px-md-3 mx-md-4",controlId:t,children:[Object(k.jsx)(X.a.Label,{className:"fw-bold h4 mb-2 mt-3 letters-s-5",children:a}),Object(k.jsx)(X.a.Control,{className:"formgroup__input",placeholder:o,onChange:i,onBlur:r,type:s,name:n,value:c,required:!0})]})}),ae=n(330),ce=(n(297),function(e){var t=e.to,n=e.type,s=e.title,a=e.first,c=e.clName,r=e.onClick,o="".concat(a?"principal__btn":"secondary__btn"," d-flex m-auto fw-bold justify-content-center align-content-center mb-3 mb-md-1 ").concat(c);return t?Object(k.jsx)(i.b,{to:t,className:o,children:Object(k.jsx)("p",{className:"fw-bold m-0 d-flex align-items-center letters-s-1",children:s})}):Object(k.jsx)(ae.a,{type:n,onClick:r,className:o,children:Object(k.jsx)("p",{className:"fw-bold m-0 mt-1 letters-s-1",children:s})})}),re=(n(298),function(){return Object(k.jsx)("section",{className:"d-flex justify-content-center",children:Object(k.jsxs)("div",{className:"lds-roller",children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{})]})})}),ie=(n(299),function(){return Object(k.jsxs)("footer",{className:"footer w-100 text-center",children:[Object(k.jsxs)("p",{className:"copyright fs-small",children:["Copyright ",Object(k.jsx)("span",{className:"fw-bold",children:"\xa9"})," 2021 UL, Org."]}),Object(k.jsxs)("section",{className:"container__footer d-flex align-items-center justify-content-between w-100",children:[Object(k.jsx)("img",{src:G,className:"logo__footer",alt:"logo de la aplicaci\xf3n"}),Object(k.jsx)("p",{className:"m-0 fs-small fw-bold",children:"sitio dise\xf1ado por @jochizan"})]})]})}),oe=Object(s.memo)(ie),le=function(e){var t=e.title;return Object(k.jsx)("header",{children:Object(k.jsx)("h1",{className:"h1 text-center pt-4 fw-bold letters-s-5",children:t})})},me=Object(s.memo)(le),ue=function(e){var t={};return e.email&&!e.email.trim()?t.email='El campo "email" es requerido':e.email&&!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.email.trim())&&(t.email='El campo "email" es incorrecto'),e.password&&!e.password.trim()?t.password='El campo "contrase\xf1a" es requerido':e.password&&e.password.length<6&&(t.password='El campo "contrase\xf1a" deber\xeda tener 6 caracteres como minimo'),t},de=function(e){var t={},n=/^[A-Za-z\xd1\xf1\xc1\xe1\xc9\xe9\xcd\xed\xd3\xf3\xda\xfa\xdc\xfc\s]+$/;return e.names&&!e.names.trim()?t.names='El campo "nombre" es requerido':e.names&&!n.test(e.names.trim())&&(t.names='El campo "nombre" solo acepta letras y espacios en blanco'),e.surnames&&!e.surnames.trim()?t.surnames='El campo "apellido" es requerido':e.surnames&&!n.test(e.surnames.trim())&&(t.surnames='El campo "apellido" solo acepta letras y espacios en blanco'),e.email&&!e.email.trim()?t.email='El campo "email" es requerido':e.email&&!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.email.trim())&&(t.email='El campo "email" es incorrecto'),e.password&&!e.password.trim()?t.password='El campo "contrase\xf1a" es requerido':e.password&&e.password.length<6&&(t.password='El campo "contrase\xf1a" debe tener 6 caracteres como minimo'),t},je=function(){var e=Object(s.useContext)(F).signIn,t=ne(y,ue,e,"auth"),n=t.form,a=t.loading,c=t.handleBlur,r=t.handleChange,o=t.handleSubmit;return Object(k.jsx)("section",{className:"bg__start vh-100",children:Object(k.jsxs)("div",{className:"bg__container-form d-flex flex-column",children:[Object(k.jsx)(me,{title:"SIGN IN"}),Object(k.jsxs)(X.a,{className:"flex-grow-1 d-flex flex-column justify-content-evenly",children:[Object(k.jsx)(se,{id:"emailInput",type:"email",name:"email",label:"Email",placeholder:"Email*",onChange:r,onBlur:c,value:n.email}),Object(k.jsx)(se,{id:"passwordInput",name:"password",type:"password",label:"Password",placeholder:"Password*",onBlur:c,onChange:r,value:n.password}),Object(k.jsxs)("section",{className:"d-flex flex-column justify-content-end flex-g-7 mb-2",children:[a?Object(k.jsx)(re,{}):Object(k.jsx)(ce,{title:"SIGN IN",first:!0,onClick:o}),Object(k.jsxs)(i.b,{to:"/register",className:"text-center fs-small",children:["you don't have an account"," ",Object(k.jsx)("b",{className:"text-decoration-underline",children:"sign up"})]})]})]}),Object(k.jsx)(oe,{})]})})},be=function(){return Object(k.jsxs)("section",{className:"w-100 h-100 d-flex flex-column justify-content-around",children:[Object(k.jsx)(ce,{first:!0,title:"SIGN IN",to:"/login"}),Object(k.jsxs)(i.b,{to:"/register",className:"mt-3 text-center fs-small",children:["you don't have an account"," ",Object(k.jsx)("b",{className:"text-decoration-underline",children:"sign up"})]})]})},he=(n(300),function(e){var t=e.width,n=e.height,s=e.isOpen,a=e.unClose,c=e.children,r=e.handleClose;return Object(k.jsx)("article",{className:"modal ".concat(s&&"is-open"),onClick:r,children:Object(k.jsxs)("div",{className:"modal__container",style:{width:t,height:n},onClick:function(e){return e.stopPropagation()},children:[!a&&Object(k.jsx)("button",{className:"modal__close all-animations",onClick:r,children:"X"}),c]})})}),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(s.useState)(e),n=Object(m.a)(t,2),a=n[0],c=n[1],r=function(){return c(!0)},i=function(){return c(!1)},o=[a,r,i];return o},xe=n(216),pe=n(278),Oe=function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)({}),r=Object(m.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)([]),u=Object(m.a)(l,2),d=u[0],j=u[1],b=Object(s.useState)({}),h=Object(m.a)(b,2),f=h[0],x=h[1],p=function(){var e=Object(V.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.a("".concat("https://api-phg-plants.herokuapp.com","/cnn/model.json"));case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(Object(ee.a)(Object(ee.a)({},e.t0),{},{model:!1,message:"Error a la carga del modelo"}));case 10:return e.prev=10,a(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){for(var t=pe.decode(e,{useTArray:!0}),n=t.width,s=t.height,a=t.data,c=new Uint8Array(n*s*3),r=0,i=0;i<c.length;i+=3)c[i]=a[r],c[i+1]=a[r+1],c[i+2]=a[r+2],r+=4;return xe.b(c,[s,n,3])},g=function(){var e=Object(V.a)(Q.a.mark((function e(t){var n,s,a,c,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.buffer,s=O(n).resizeBilinear([249,249]),a=s.reshape([1,249,249,3]),e.next=5,f.predict(a);case 5:return c=e.sent,e.next=8,c.array();case 8:return r=e.sent,e.abrupt("return",r[0]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(V.a)(Q.a.mark((function e(t){var n,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.keys(f).length){e.next=2;break}return e.abrupt("return",o(Object(ee.a)(Object(ee.a)({},i),{},{message:"No se puede predecir el modelo no esta cargado"})));case 2:if(t&&t.length){e.next=4;break}return e.abrupt("return",o(Object(ee.a)(Object(ee.a)({},i),{},{buffers:!1,message:"No hay imagenes que procesar"})));case 4:n=[],s=0;case 6:if(!(s<t.length)){e.next=15;break}return e.t0=n,e.next=10,g(t[s]);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:++s,e.next=6;break;case 15:j(n);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){p()}),[]),{predictions:d,loading:n,errors:i,predictionsModel:w}},ge=function(){var e=Object(o.f)(),t=Object(s.useContext)(L).buffers,n=Object(s.useContext)(F).auth,a=Oe(),c=a.predictions,r=a.errors,i=a.loading,l=a.predictionsModel,u=fe(),d=Object(m.a)(u,2),j=d[0],b=d[1];return Object(s.useEffect)((function(){n||b()}),[n]),Object(s.useEffect)((function(){i||l(t)}),[i]),Object(s.useEffect)((function(){0!==c.length&&console.log(c)}),[c]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(he,{handleClose:function(){return e.push("/")},isOpen:j,children:[Object(k.jsx)("h3",{className:"text-center fs-5",children:"Necesitas Iniciar Sesi\xf3n"}),Object(k.jsx)(be,{})]}),Object(k.jsx)("div",{className:"d-flex flex-column",children:Object(k.jsx)("b",{children:r&&"Error al cargar el modelo"})})]})},we=n(279),ve=n.n(we),ye=n(328),Ne=n(331),Ce=n.p+"static/media/camera.287dc93e.svg",_e=function(){var e=Object(s.useRef)(null),t=Object(s.useState)(w),n=Object(m.a)(t,2),a=n[0],c=n[1],r=Object(s.useContext)(L).handleUint8Array,i=Object(o.f)(),l=d.innerWidth,u=d.innerHeight,j=function(){var e=Object(V.a)(Q.a.mark((function e(t){var n,s,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:s=e.sent,a=new Uint8Array(s),r&&r(a),i.push("/detects");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{capture:Object(s.useCallback)((function(){if(e.current){var t=e.current.getScreenshot({width:249,height:249});t&&j(t)}}),[e]),webCam:a,handleWebCam:function(){c(!a),b.setItem("webCam",!0+"")},webcamRef:e,width:l,height:u}},ke=n(281),Se={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem",width:"calc(10vw + 36vh)",height:"36vh",cursor:"pointer",backgroundColor:"var(--title-color)",color:"var(--gray-light-color)",outline:"none",borderRadius:"4px",border:"dashed 4px var(--second-color)",margin:"0 auto"},Ee={borderColor:"var(--second-color)"},Le={borderColor:"var(--first-color)"},Ie={borderColor:"var(--bs-warning)"},Pe=function(){var e=Object(ke.a)({accept:"image/*"}),t=e.getRootProps,n=e.getInputProps,a=e.isDragActive,c=e.isDragAccept,r=e.isDragReject,i=e.acceptedFiles,o=Object(s.useMemo)((function(){return Object(ee.a)(Object(ee.a)(Object(ee.a)(Object(ee.a)({},Se),a?Ee:{}),c?Le:{}),r?Ie:{})}),[a,r,c]),l=Object(s.useContext)(L).handleImageDropZone;return Object(s.useEffect)((function(){l&&l(i)}),[i]),Object(k.jsx)("div",{className:"p-2",children:Object(k.jsxs)("article",Object(ee.a)(Object(ee.a)({className:"drop__zone"},t({style:o})),{},{children:[Object(k.jsx)("input",Object(ee.a)({},n())),Object(k.jsx)("p",{className:"d-flex justify-content-center align-items-center m-0",children:"Drag 'n' drop some files here, or click to select files"}),Object(k.jsx)("p",{className:"mt-2 text-base fs-6",children:"Only jpg, jpeg and png files supported"})]}))})},Be=function(e){var t=e.title,n=e.description;return Object(k.jsxs)(X.a.Group,{className:"\r m-0 mx-1 px-1 mx-md-3 px-md-3\r mx-lg-4 px-lg-4 px-xl-5 mx-xl-5 d-flex\r flex-column justify-content-center",children:[Object(k.jsx)(X.a.Label,{className:"white-color h3",children:t}),Object(k.jsx)(X.a.Text,{className:"gray-light-color text-justify mx-2 mx-lg-3",children:n})]})},Fe=function(e){var t=e.title,n=e.children,s=e.description,a=e.handleSubmit;return Object(k.jsxs)(X.a,{className:"w-100 h-100 d-flex flex-column justify-content-evenly align-items-center",onSubmit:a,children:[n,Object(k.jsx)(ye.a,{children:Object(k.jsx)(Be,{title:t,description:s})})]})},Ae=function(){var e=Object(s.useContext)(L),t=e.buffers,n=e.handleImageChange,a=e.progress,c=e.progressInner,r=Object(s.useContext)(F).auth,i=Object(o.f)(),l=fe(),u=Object(m.a)(l,2),d=u[0],j=u[1],b=_e(),h=b.capture,f=b.webCam,x=b.handleWebCam,p=b.webcamRef,O=b.width,g=b.height,w=function(e){e.preventDefault(),i.push("/detects")};return Object(s.useEffect)((function(){r||j()}),[r]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(he,{handleClose:function(){return i.push("/")},isOpen:d,children:[Object(k.jsx)("h3",{className:"text-center fs-5",children:"Necesitas Iniciar Sesi\xf3n"}),Object(k.jsx)(be,{})]}),Object(k.jsxs)("section",{className:"d-flex options__container",children:[Object(k.jsx)("div",{className:"secondary-bg options__hw",children:Object(k.jsxs)(Fe,{handleSubmit:w,title:"Use camera",description:"Slate helps you see how many \r more days you need to work to \r reach your financial goal for the \r month and year.",children:[f&&Object(k.jsx)(ve.a,{audio:!1,ref:p,width:O/2.4,height:g/2.4,screenshotFormat:"image/jpeg"}),!f&&Object(k.jsx)("img",{src:Ce,alt:"WebCam load",width:O/2.4,height:g/2.4,className:"webcam__img"}),Object(k.jsxs)(ye.a,{children:[Object(k.jsx)(ce,{type:"button",first:!0,onClick:f?h:x,title:f?"Capture Image":"Active Camera"}),f&&Object(k.jsx)("section",{className:"w-100 d-flex justify-content-center",children:Object(k.jsx)(ae.a,{className:"btn btn-dark",type:"button",onClick:x,children:"Deactivate Camera"})})]})]})}),Object(k.jsx)("div",{className:"dark-bg wh-grap"}),Object(k.jsx)("div",{className:"third-bg p-4 options__hw",children:Object(k.jsxs)(Fe,{handleSubmit:w,title:"Load Files",description:"Slate helps you see how many more days you need to \r work to reach your financial goal for the month and year.",children:[Object(k.jsx)(ye.a,{children:Object(k.jsx)(Pe,{})}),Object(k.jsx)(ye.a,{children:Object(k.jsxs)(X.a.Group,{controlId:"formFiles",className:"\r mt-3 mx-md-1 mx-lg-3 \r px-sm-2 px-md-4 px-lg-5 \r d-flex flex-column align-items-center",children:[Object(k.jsx)(X.a.Label,{className:"white-color d-flex justify-content w-90",children:"Upload Multiple Files"}),Object(k.jsxs)("section",{className:"w-options__btns",children:[Object(k.jsxs)(X.a.Label,{className:"options__input",children:[Object(k.jsx)(X.a.Control,{multiple:!0,required:!0,name:"uploadFiles",type:"file",placeholder:"Choose fields",className:"d-none",onChange:n}),Object(k.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{d:"M9.28063 11.1823C9.24934 11.1514 9.2071 11.134 9.16307 11.134C9.11904 11.134 9.0768 11.1514 9.04552 11.1823L6.62783 13.6C5.50845 14.7194 3.61925 14.838 2.38336 13.6C1.14538 12.362 1.26398 10.4749 2.38336 9.35554L4.80104 6.93785C4.86554 6.87335 4.86554 6.76724 4.80104 6.70274L3.97295 5.87465C3.94167 5.84367 3.89942 5.8263 3.8554 5.8263C3.81137 5.8263 3.76913 5.84367 3.73784 5.87465L1.32016 8.29234C-0.440052 10.0525 -0.440052 12.9009 1.32016 14.6591C3.08036 16.4172 5.92874 16.4193 7.68687 14.6591L10.1046 12.2414C10.1691 12.1769 10.1691 12.0708 10.1046 12.0063L9.28063 11.1823ZM14.6611 1.32016C12.9009 -0.440053 10.0525 -0.440053 8.29441 1.32016L5.87464 3.73785C5.84367 3.76913 5.82629 3.81138 5.82629 3.8554C5.82629 3.89943 5.84367 3.94167 5.87464 3.97296L6.70065 4.79897C6.76515 4.86347 6.87126 4.86347 6.93576 4.79897L9.35345 2.38128C10.4728 1.2619 12.362 1.1433 13.5979 2.38128C14.8359 3.61925 14.7173 5.50638 13.5979 6.62576L11.1802 9.04344C11.1493 9.07473 11.1319 9.11697 11.1319 9.161C11.1319 9.20503 11.1493 9.24727 11.1802 9.27856L12.0083 10.1066C12.0728 10.1711 12.1789 10.1711 12.2434 10.1066L14.6611 7.68896C16.4192 5.92875 16.4192 3.08037 14.6611 1.32016ZM10.0317 5.08401C10.0004 5.05303 9.9582 5.03566 9.91418 5.03566C9.87015 5.03566 9.8279 5.05303 9.79662 5.08401L5.08401 9.79455C5.05303 9.82584 5.03565 9.86808 5.03565 9.91211C5.03565 9.95613 5.05303 9.99838 5.08401 10.0297L5.90793 10.8536C5.97243 10.9181 6.07854 10.9181 6.14304 10.8536L10.8536 6.14305C10.9181 6.07855 10.9181 5.97244 10.8536 5.90794L10.0317 5.08401Z",fill:"var(--dark-color)"})}),Object(k.jsx)("span",{children:"Choose Files"})]}),a&&Object(k.jsx)(Ne.a,{className:"all-animations",now:"string"!==typeof a?a:0,max:100}),Object(k.jsx)("span",{className:"w-100 d-flex justify-content-center white-color",dangerouslySetInnerHTML:{__html:c+""}}),Object(k.jsx)(ae.a,{type:"submit",disabled:0===(null===t||void 0===t?void 0:t.length)||!(""===c),className:"primary-bg primary-border w-100",onClick:w,children:"Detects"})]})]})})]})})]})]})},Ge=function(){var e=Object(o.f)(),t=Object(s.useState)(!1),n=Object(m.a)(t,2),a=n[0],c=n[1],r=ne(N,de,(function(){return e.push("/login")}),"users"),l=r.form,u=r.errors,d=r.loading,j=r.handleBlur,b=r.handleChange,h=r.handleSubmit;return Object(k.jsx)("section",{className:"bg__start vh-100",children:Object(k.jsxs)("div",{className:"bg__container-form d-flex flex-column",children:[Object(k.jsx)(me,{title:"SIGN UP"}),Object(k.jsxs)(X.a,{className:"flex-grow-1 d-flex flex-column justify-content-evenly",children:[a?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(se,{id:"emailInput",type:"email",name:"email",label:"Email",value:l.email,onBlur:j,onChange:b,placeholder:"Email*"}),Object(k.jsx)(se,{id:"passwordInput",type:"password",name:"password",label:"Password",value:l.password,onBlur:j,onChange:b,placeholder:"Password*"})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(se,{id:"namesInput",type:"text",name:"names",label:"Names",value:l.names,onBlur:j,onChange:b,placeholder:"Names*"}),Object(k.jsx)(se,{id:"surnamesInput",type:"text",name:"surnames",label:"Surnames",value:l.surnames,onBlur:j,onChange:b,placeholder:"Surnames*"})]}),Object(k.jsxs)("section",{className:"d-flex flex-column justify-content-end flex-g-7 mb-2",children:[d?Object(k.jsx)(re,{}):a?Object(k.jsx)(ce,{title:"SIGN UP",first:!0,type:"submit",onClick:h}):Object(k.jsx)(ce,{title:"CONTINUE",first:!0,type:"button",onClick:function(e){e.preventDefault(),u.names||u.surnames?I.b.warn("Rellene todos los campos para continuar"):c(!a)}}),Object(k.jsxs)(i.b,{to:"/login",className:"text-center fs-small",children:["you don't have an account"," ",Object(k.jsx)("b",{className:"text-decoration-underline",children:"sign in"})]})]})]}),Object(k.jsx)(oe,{})]})})},De=function(){return Object(k.jsx)("section",{children:Object(k.jsx)("p",{className:"fw-bold fs-1",children:"Not Found"})})},Te=function(){return Object(k.jsxs)(i.a,{children:[Object(k.jsx)(E,{children:Object(k.jsx)(B,{children:Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{exact:!0,path:"/",component:$}),Object(k.jsx)(o.a,{path:"/login",component:je}),Object(k.jsx)(o.a,{path:"/register",component:Ge}),Object(k.jsx)(o.a,{path:"/options",component:Ae}),Object(k.jsx)(o.a,{path:"/detects",component:ge}),Object(k.jsx)(o.a,{component:De})]})})}),Object(k.jsx)(I.a,{})]})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,332)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))},qe=(n(323),n(324),n(325),n(326),j.getElementById("app"));r.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Te,{})}),qe),Ue()}},[[327,1,2]]]);
//# sourceMappingURL=main.fe46a329.chunk.js.map