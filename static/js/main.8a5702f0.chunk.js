(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},35:function(e,t,a){e.exports=a.p+"static/media/virus.88f9663c.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/White_Intro.4ea58bd7.png"},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=a(8),s=a(6),m=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("img",{className:"virus-logo",src:a(35),alt:""}),r.a.createElement("h1",{className:"title"},"CoViD-19 Updates & Statistics ",r.a.createElement("span",{className:"live"},"Live")," "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.cdc.gov/coronavirus/2019-nCoV/index.html"},"About")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"},"Symptoms")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html"},"Protection")))))},i=function(){var e=new Date;return r.a.createElement("footer",null,r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"CoronaVirus Online Statistics ",r.a.createElement("span",null,"By Max Tsh V1.0.0")),r.a.createElement("p",null,"All Rights Reserved @ ",e.getFullYear())),r.a.createElement("div",{className:"author"},r.a.createElement(o.b,{to:"#"},r.a.createElement("img",{src:a(41),alt:""})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/maxtsh/"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/realmaxtsh/"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/Max_tsh"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/maxtsh"},"Github")))))},u=a(9),E=a.n(u),h=a(11),d=a(13),p=a(12),v=a.n(p),f=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://covid19.mathdro.id/api/confirmed");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a},g=function(){var e=f();return e?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Countries"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Active"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.provinceState?e.provinceState:e.countryRegion),r.a.createElement("td",null,e.confirmed),r.a.createElement("td",{className:"deaths"},e.deaths),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.active))})))):r.a.createElement("h1",null,"Loading...")},b=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://covid19.mathdro.id/api");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a},w=function(){var e=b();return e?r.a.createElement("div",{className:"main-container"},r.a.createElement(m,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"live-stats"},r.a.createElement("h1",{className:"stats-title"},"COVID-19 World Wide Outbreak Live Statistics"),r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"total-infect"},r.a.createElement("h1",null,r.a.createElement("span",{className:"infected"},"Infected:")," ",e.confirmed.value)),r.a.createElement("div",{className:"total-death"},r.a.createElement("h1",null,r.a.createElement("span",{className:"death"},"Death:")," ",e.deaths.value)),r.a.createElement("div",{className:"total-recovered"},r.a.createElement("h1",null,r.a.createElement("span",{className:"recover"},"Recovered:")," ",e.recovered.value)))),r.a.createElement("div",{className:"graph"},r.a.createElement("h1",null,"Global Pandemic Crisis Graph"),r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"countries"},r.a.createElement(g,null))),r.a.createElement(i,null)):r.a.createElement("h1",null,"Loading...")},N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Oppsss!...Not Found!"))},k=(a(60),function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{component:N})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8a5702f0.chunk.js.map