(function(t){function n(n){for(var a,i,s=n[0],u=n[1],l=n[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(n);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},r=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("a026"),o=e("8c4f"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-layout"},[e("div",{staticClass:"content"},[e("div",{staticClass:"inner-content"},[t._t("default"),e("nav",[e("router-link",{attrs:{tag:"a",to:"teams"}},[t._v("\n          Teams I worked with\n        ")]),e("router-link",{attrs:{tag:"a",to:"my-projects"}},[t._v("\n          Projects I have in git\n        ")]),e("router-link",{attrs:{tag:"a",to:"about"}},[t._v("\n          About\n        ")])],1),t._m(0)],2),e("nav",{staticClass:"floating-nav"},[t._v("\n      ☰\n    ")])]),t._m(1)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("address",[e("a",{attrs:{href:"mailto:vladimir.sonnenahft@gmail.com"}},[t._v("\n            vladimir.sonnenhaft@gmail.com\n          ")])]),e("address",[t._v("\n          Singapore, "),e("span",[t._v("April 2019")])]),t._v("\n\n        designed by\n\n        "),e("a",{attrs:{target:"_blank",href:"https://speckyboy.com/25-beautiful-clean-web-designs/"}},[t._v("\n          drxlr.com\n        ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fullscreen-image",attrs:{ondragstart:"return false"}},[e("img",{attrs:{src:"https://picsum.photos/200/600",alt:"My photo"}})])}],s={name:"main-layout",props:{msg:String}},u=s,l=(e("a1a7"),e("db60"),e("2877")),c=Object(l["a"])(u,r,i,!1,null,"6960b616",null),p=c.exports;a["a"].use(o["a"]),a["a"].config.productionTip=!1;var f={template:"<main-layout>\n   <h1>Vladd's</h1>\n   <p>      \n      Vladd's is a home place for <br/>\n      one particular engineer.\n    </p>\n </main-layout>",components:{MainLayout:p}},m={template:"<main-layout>\n <h1>My projects</h1>\n <p>Here I want to leave my projects</p>\n </main-layout>",components:{MainLayout:p}},d={template:"<main-layout>\n <h1>About page</h1>\n <p>Here should be smth about me</p>\n </main-layout>",components:{MainLayout:p}},h={template:"<main-layout>\n <h1>Not found</h1>\n <p>Page that you wanted to access is not found</p>\n </main-layout>",components:{MainLayout:p}};new a["a"]({el:"#vladds",router:new o["a"]({routes:[{path:"",name:"VladdsPage",component:f},{path:"/",name:"VladdsPage-with-slash",component:f},{path:"/about",name:"AboutPage",component:d},{path:"/my-projects",name:"MyProjectsPage",component:m},{path:"*",component:h}]}),render:function(t){return t({template:"<router-view></router-view>"})}})},"6e85":function(t,n,e){},7633:function(t,n,e){},a1a7:function(t,n,e){"use strict";var a=e("6e85"),o=e.n(a);o.a},db60:function(t,n,e){"use strict";var a=e("7633"),o=e.n(a);o.a}});
//# sourceMappingURL=app.js.map