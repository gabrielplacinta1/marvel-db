"use strict";(self.webpackChunkmarvel_db=self.webpackChunkmarvel_db||[]).push([[49],{9613:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r.p+"static/media/error.42292aa12b6bc303ce99.gif",c=r(184),s=function(){return(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},4191:function(e,t,r){r.r(t);var n=r(9439),c=r(7689),s=r(1087),a=r(4270),i=r(2791),o=r(2523),u=r(4304),l=(r(2524),r(184)),p=function(e){var t=e.data,r=t.title,n=t.description,c=t.pageCount,i=t.thumbnail,o=t.language,u=t.price;return(0,l.jsxs)("div",{className:"single-comic",children:[(0,l.jsxs)(a.q,{children:[(0,l.jsx)("meta",{name:"description",content:"".concat(r," comics book")}),(0,l.jsx)("title",{children:r})]}),(0,l.jsx)("img",{src:i,alt:r,className:"single-comic__img"}),(0,l.jsxs)("div",{className:"single-comic__info",children:[(0,l.jsx)("h2",{className:"single-comic__name",children:r}),(0,l.jsx)("p",{className:"single-comic__descr",children:n}),(0,l.jsx)("p",{className:"single-comic__descr",children:c}),(0,l.jsx)("p",{className:"single-comic__descr",children:o}),(0,l.jsx)("div",{className:"single-comic__price",children:"".concat(u,"$")})]}),(0,l.jsx)(s.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=(0,c.UO)().comicId,t=(0,i.useState)(null),r=(0,n.Z)(t,2),s=r[0],a=r[1],d=(0,u.Z)(),m=d.getComics,f=d.clearError,h=d.process,g=d.setProcess;(0,i.useEffect)((function(){v()}),[e]);var v=function(){f(),m(e).then(x).then((function(){return g("confirmed")}))},x=function(e){a(e)};return(0,l.jsx)(l.Fragment,{children:(0,o.Z)(h,p,s)})}},4304:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(4165),c=r(5861),s=r(9439),a=r(2791),i=function(){var e=function(){var e=(0,a.useState)(!1),t=(0,s.Z)(e,2),r=t[0],i=t[1],o=(0,a.useState)(null),u=(0,s.Z)(o,2),l=u[0],p=u[1],d=(0,a.useState)("waiting"),m=(0,s.Z)(d,2),f=m[0],h=m[1],g=(0,a.useCallback)(function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var r,c,s,a,o,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i(!0),h("loading"),e.prev=5,e.next=8,fetch(t,{method:r,body:c,headers:s});case 8:if((a=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 11:return e.next=13,a.json();case 13:return o=e.sent,i(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),i(!1),p(e.t0.message),h("error"),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:r,request:g,error:l,clearError:(0,a.useCallback)((function(){p(null),h("error")}),[]),process:f,setProcess:h}}(),t=e.loading,r=e.request,i=e.error,o=e.clearError,u=e.process,l=e.setProcess,p="https://gateway.marvel.com:443/v1/public/",d="apikey=4fdec1c0d9fca917f1352e2e554da390",m=210,f=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var t,c,s=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:m,e.next=3,r("".concat(p,"characters?limit=9&offset=").concat(t,"&").concat(d));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(p,"characters/").concat(t,"?").concat(d));case 2:return c=e.sent,e.abrupt("return",b(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var t,c,s=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:m,e.next=3,r("".concat(p,"comics?limit=8&offset=").concat(t,"&").concat(d));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(_));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(p,"comics/").concat(t,"?").concat(d));case 2:return c=e.sent,e.abrupt("return",_(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(p,"characters?name=").concat(t,"&").concat(d));case 2:return c=e.sent,e.abrupt("return",c.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",fullDescription:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},_=function(e){return{id:e.id,title:e.title,price:e.prices[0].price,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}};return{loading:t,error:i,process:u,setProcess:l,getAllCharacters:f,getCharacter:h,getCharacterByName:x,clearError:o,getAllComics:g,getComics:v}}},2523:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(9613),c=r(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]})},a=r(3394),i=function(e,t,r){switch(e){case"waiting":return(0,c.jsx)(s,{});case"loading":return(0,c.jsx)(a.Z,{});case"confirmed":return(0,c.jsx)(t,{data:r});case"error":return(0,c.jsx)(n.Z,{});default:throw new Error("Unexpected process state")}}},2524:function(){}}]);
//# sourceMappingURL=49.6836ad86.chunk.js.map