!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function a(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],i=0;i<e.length;i++){var r=e[i],c=n.base?r[0]+n.base:r[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=a(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:g(p,n),references:1}),o.push(u)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var r=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}function m(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,n){var t,o,i;if(n.singleton){var r=h++;t=f||(f=l(n)),o=p.bind(null,t,r,!1),i=p.bind(null,t,r,!0)}else t=l(n),o=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=a(t[o]);s[i].references--}for(var r=c(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}t=r}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var s,a,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"afcc659877ce8a0c4b763a03c75d4159.svg"},function(e,n,t){var o=t(0),i=t(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),i=t(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,n,t){var o=t(1),i=t(7),r=t(2);(n=o(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap);"]);var s=i(r);n.push([e.i,"body {\n    background-color: rgb(21, 21, 21);\n    color: #ffffff;\n    font-family: 'Roboto', sans-serif;\n    max-width: 800px;\n    margin: 0 auto;\n}\nheader h1 {\n    padding: 20px;\n    text-align: center;\n    font-size: 20px;\n}\n\nsection {\n\n    margin-top: 20px;\n    border: 1px solid rgb(39, 39, 39);\n    padding: 50px;\n\n}\n\nsection #timer {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nsection #timer #time {\n\n    font-size: 60px;\n}\n\n.time-count{\n\n    margin-top: 20px;\n}\n\n\n#times{\n\n    margin-top: 50px;\n    border: 1px solid rgb(39, 39, 39);\n}\n\nul{\n    padding: 20px;\n    list-style-position: inside;\n    list-style-type: none;\n}\n\nheader h2 {\n\n    padding: 10px;\n    background-color: rgb(25, 25, 25);\n    font-size: 14px;\n    border-bottom: 1px solid rgb(39, 39, 39);\n}\n\nul li {\n\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 2px;\n    cursor: pointer;\n}\n\nli:hover{\n\n    background-color: rgb(25, 25, 25);\n    color: rgb(228, 225, 225);\n    \n}\n\n\nul li a {\n    background-image: url("+s+");\n    width: 14px;\n    height: 14px;\n    margin-left: 15px;\n}\n\n#controlls{\n\n    margin-top: 10px;\n}\n\n#controlls img{\n    cursor: pointer;\n    margin: 4px;\n}\n\n.invisible {\n\n    pointer-events: none;\n    opacity: 0.1;\n}\n\n#progress {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n#progress span {\n\n    margin-right: 15px;\n}\n\n#progress-bar {\n\n    height: 10px;\n    background-color: rgb(224, 224, 224);\n}\n\n.colored {\n\n    border: 1px solid red;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n);t(3),t(5);class o{constructor(e){this._element=e}_template(e){return`\n        <div>\n            <div id="progress-bar" style="width: ${.1*(60*((1500-60*e.minutes)/60-1)+(60-e.seconds))}%;"></div>\n        </div>\n        <div class="time-count">\n           <span id="minutes">${e.minutes<10?0:""}${e.minutes}</span>:<span id="seconds">${e.seconds<10?0:""}${e.seconds}</span>\n        </div>\n        `}update(e=""){return this._element.innerHTML=this._template(e)}}t(2);class i extends o{constructor(e){super(e)}_template(e){return`\n        <header>\n            <h2>History</h2>\n        </header>\n        <ul>\n            ${e.map(e=>{let n,t;return n=0===e._minutes&&0===e._seconds?25:0!=e._minutes?(1500-60*e._minutes)/60-1:0,t=t=0!=e._seconds?60-e._seconds:0,0!=e._minutes&&0===e._seconds&&n++,`\n                    <li>\n                        <div id="progress">\n                            <span>${n<10?0:""}${n}:${t<10?0:""}${t}</span>\n                            <div id="progress-bar" style="width: ${.06*(60*n+t)}%;"></div>\n                        </div>\n                        <a key=${e._id} id="del"></a>\n                    </li>\n                `}).join("")}\n        </ul>\n        `}}class r{static render(e){let n=[{name:"play",id:document.querySelector("#play")},{name:"pause",id:document.querySelector("#pause")},{name:"stop",id:document.querySelector("#stop")}];n.map(e=>{e.id.classList.remove("invisible")}),"stop"===e&&n.map(e=>{"pause"===e.name?e.id.classList.add("invisible"):e.id}),n.filter(n=>n.name===e).map(e=>e.id.classList.add("invisible"))}}class s{constructor(e=0,n=0,t=""){this._minutes=e,this._seconds=n,this._id=t}get minutes(){return this._minutes}set minutes(e){return this._minutes=e}get seconds(){return this._seconds}set seconds(e){return this._seconds=e}get id(){return this._id}}class a{static store(e){return new Promise((n,t)=>{let o=[];0!=localStorage.length&&(o=JSON.parse(localStorage.getList)),o.push(e),localStorage.setItem("getList",JSON.stringify(o)),n(JSON.parse(localStorage.getList))})}static show(){return new Promise((e,n)=>{e(JSON.parse(localStorage.getList))})}static destroy(e){return new Promise((n,t)=>{let o=JSON.parse(localStorage.getList).filter(n=>n._id!=e);localStorage.setItem("getList",JSON.stringify(o)),n(o)})}}class c{constructor(){this.time,this.count,this.view=new o(document.querySelector("#time")),this.pomodoro={minutes:25,seconds:0},this.timeResultView=new i(document.querySelector("#times")),0!=localStorage.length&&a.show().then(e=>{this.timeResultView.update(e)}),console.log("clicado")}play(){r.render("play");const e=Number(document.querySelector("#time #minutes").innerText),n=Number(document.querySelector("#time #seconds").innerText);this.time=new s(e,n,(new Date).toJSON()),this.count=setInterval(()=>{0===this.time.minutes&&0===this.time.seconds?(this.sound(),25===this.pomodoro.minutes?this.pomodoro.minutes=5:this.pomodoro.minutes=25,this.stop(),clearInterval(this.count)):0===this.time.seconds?(this.time.minutes--,this.time.seconds=59,this.view.update(this.time)):(this.time.seconds--,this.view.update(this.time))},1e3)}pause(){r.render("pause"),this.count=clearInterval(this.count)}stop(){r.render("stop"),a.store(this.time).then(e=>this.timeResultView.update(e)),this.count=clearInterval(this.count),this.view.update(this.pomodoro)}sound(){new Audio("http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3").play()}del(){console.log("deletou")}}let l=new c;document.querySelector("#play").addEventListener("click",l.play.bind(l)),document.querySelector("#pause").addEventListener("click",l.pause.bind(l)),document.querySelector("#stop").addEventListener("click",l.stop.bind(l)),document.querySelector("#del").addEventListener("click",()=>{(new c).del()})}]);