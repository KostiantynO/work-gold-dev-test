parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/Ogg-Roman.otf":[["Ogg-Roman.3d75c01a.otf","ceGe"],"ceGe"],"./../fonts/TradeGothicLTStd-Extended.otf":[["TradeGothicLTStd-Extended.42e208c5.otf","kCKX"],"kCKX"],"./../fonts/TradeGothicLTStd-BoldExt.otf":[["TradeGothicLTStd-BoldExt.f7cb7a05.otf","QZcv"],"QZcv"],"./../images/photos/live-curation/live-curation-circle.png":[["live-curation-circle.84e4dfe5.png","Z8II"],"Z8II"],"./../images/photos/live-curation/live-curation-circle@2x.png":[["live-curation-circle@2x.ac8b9231.png","rkkO"],"rkkO"]}],"atn8":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=exports.unlistenOnKeydownFocusCatch=exports.firstFocusElem=exports.listenOnKeydownFocusCatch=void 0;const t={menu:document.querySelector("[mobile-menu]"),openMenuBtn:document.querySelector("[mobile-menu-open]"),closeMenuBtn:document.querySelector("[mobile-menu-close]"),htmlAndBody:document.querySelectorAll("[no-scroll]"),decorStarsContainer:document.querySelector("[decor-stars-container]")};exports.refs=t;const n="button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",o=null===(e=t.menu)||void 0===e?void 0:e.querySelectorAll(n),s=o[0];exports.firstFocusElem=s;const r=o[o.length-1],u=e=>{t.menu.classList.contains("visually-hidden")||"false"!==t.openMenuBtn.getAttribute("aria-expanded")||"Tab"===e.code&&(e.shiftKey?document.activeElement===s&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),s.focus()))},c=()=>{var e;null===(e=t.menu)||void 0===e||e.addEventListener("keydown",u)};exports.listenOnKeydownFocusCatch=c;const l=()=>{var e;null===(e=t.menu)||void 0===e||e.removeEventListener("keydown",u)};exports.unlistenOnKeydownFocusCatch=l;
},{}],"sByI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.listenOnOpenMenuBtnClick=void 0;var e=require("./menu-focus-catch.js");const n=()=>e.refs.openMenuBtn.getAttribute("aria-expanded")||!1,t=()=>{var t;e.refs.openMenuBtn.setAttribute("aria-expanded",`${!n()}`),null===(t=e.refs.menu)||void 0===t||t.classList.toggle("visually-hidden"),e.refs.htmlAndBody.forEach(e=>e.classList.toggle("no-scroll"))},s=()=>{setTimeout(()=>{t(),document.removeEventListener("keydown",i),e.refs.menu.removeEventListener("click",o),(0,e.unlistenOnKeydownFocusCatch)(),e.refs.openMenuBtn.focus()},10)},o=t=>{n()&&t.target===e.refs.menu&&s()},r=()=>{s()},i=e=>{"Escape"===e.code&&s()},c=({target:s})=>{var c,u;n()&&(t(),null===(c=e.refs.closeMenuBtn)||void 0===c||c.addEventListener("click",r,{once:!0}),null===(u=e.refs.menu)||void 0===u||u.addEventListener("click",o),document.addEventListener("keydown",i),(0,e.listenOnKeydownFocusCatch)(),setTimeout(()=>{e.firstFocusElem.focus(),console.log("onOpenMenuBtnClick ~ firstFocusElem",e.firstFocusElem,document.activeElement===e.firstFocusElem)},100))},u=()=>{var n;return null===(n=e.refs.openMenuBtn)||void 0===n?void 0:n.addEventListener("click",c)};exports.listenOnOpenMenuBtnClick=u;
},{"./menu-focus-catch.js":"atn8"}],"p7QT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initEventListeners=void 0;var e=require("./mobile-menu");const t=()=>{(0,e.listenOnOpenMenuBtnClick)()};exports.initEventListeners=t;
},{"./mobile-menu":"sByI"}],"u9vI":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"j3D9":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"MIhM":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"j3D9"}],"pJf5":[function(require,module,exports) {
var r=require("./_root"),e=function(){return r.Date.now()};module.exports=e;
},{"./_root":"MIhM"}],"x2wq":[function(require,module,exports) {
var r=/\s/;function t(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}module.exports=t;
},{}],"SK01":[function(require,module,exports) {
var e=require("./_trimmedEndIndex"),r=/^\s+/;function n(n){return n?n.slice(0,e(n)+1).replace(r,""):n}module.exports=n;
},{"./_trimmedEndIndex":"x2wq"}],"wppe":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"MIhM"}],"uiOY":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"wppe"}],"lPmd":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"e5TX":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"wppe","./_getRawTag":"uiOY","./_objectToString":"lPmd"}],"OuyB":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"bgO7":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"e5TX","./isObjectLike":"OuyB"}],"iS0Z":[function(require,module,exports) {
var e=require("./_baseTrim"),r=require("./isObject"),t=require("./isSymbol"),i=NaN,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(t(a))return i;if(r(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=r(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=e(a);var b=f.test(a);return b||n.test(a)?s(a.slice(2),b?2:8):u.test(a)?i:+a}module.exports=a;
},{"./_baseTrim":"SK01","./isObject":"u9vI","./isSymbol":"bgO7"}],"CXfR":[function(require,module,exports) {
var i=require("./isObject"),t=require("./now"),r=require("./toNumber"),n="Expected a function",e=Math.max,u=Math.min;function o(o,a,f){var c,v,d,m,l,s,T=0,p=!1,h=!1,x=!0;if("function"!=typeof o)throw new TypeError(n);function g(i){var t=c,r=v;return c=v=void 0,T=i,m=o.apply(r,t)}function q(i){var t=i-s;return void 0===s||t>=a||t<0||h&&i-T>=d}function w(){var i=t();if(q(i))return y(i);l=setTimeout(w,function(i){var t=a-(i-s);return h?u(t,d-(i-T)):t}(i))}function y(i){return l=void 0,x&&c?g(i):(c=v=void 0,m)}function b(){var i=t(),r=q(i);if(c=arguments,v=this,s=i,r){if(void 0===l)return function(i){return T=i,l=setTimeout(w,a),p?g(i):m}(s);if(h)return clearTimeout(l),l=setTimeout(w,a),g(s)}return void 0===l&&(l=setTimeout(w,a)),m}return a=r(a)||0,i(f)&&(p=!!f.leading,d=(h="maxWait"in f)?e(r(f.maxWait)||0,a):d,x="trailing"in f?!!f.trailing:x),b.cancel=function(){void 0!==l&&clearTimeout(l),T=0,c=s=v=l=void 0},b.flush=function(){return void 0===l?m:y(t())},b}module.exports=o;
},{"./isObject":"u9vI","./now":"pJf5","./toNumber":"iS0Z"}],"Ywd4":[function(require,module,exports) {
var i=require("./debounce"),e=require("./isObject"),n="Expected a function";function r(r,t,a){var o=!0,u=!0;if("function"!=typeof r)throw new TypeError(n);return e(a)&&(o="leading"in a?!!a.leading:o,u="trailing"in a?!!a.trailing:u),i(r,t,{leading:o,maxWait:t,trailing:u})}module.exports=r;
},{"./debounce":"CXfR","./isObject":"u9vI"}],"vino":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.decorStarsMobile=exports.decorStarsDesktop=void 0;const l=[{name:"fill-1",color:"#FB8547",width:"48px",left:"40px",top:"657px",angle:-.21},{name:"fill-2",color:"#114837",width:"31px",left:"108px",top:"720px",angle:2.16},{name:"fill-3",color:"#F7B8AE",width:"31px",left:"175px",top:"683px",angle:.91},{name:"fill-4",color:"#80A08D",width:"46px",left:"275px",top:"664px",angle:.59},{name:"fill-5",color:"#F7B8AE",width:"28px",left:"393px",top:"630px",angle:.7},{name:"fill-6",color:"#F6D500",width:"24px",left:"694px",top:"649px",angle:.93},{name:"fill-7",color:"#80A08D",width:"36px",left:"749px",top:"699px",angle:.56},{name:"fill-8",color:"#F7B8AE",width:"22px",left:"840px",top:"673px",angle:.71},{name:"fill-9",color:"#C9CFDA",width:"46px",left:"900px",top:"686px",angle:.6},{name:"fill-10",color:"#F6D500",width:"26px",left:"988px",top:"695px",angle:.7}];exports.decorStarsDesktop=l;const p=[{name:"fill-1",color:"#114837",width:"14px",left:"7px",top:"617px",angle:-.34},{name:"fill-2",color:"#F6D500",width:"14px",left:"31px",top:"593px",angle:-.36},{name:"fill-3",color:"#80A08D",width:"21px",left:"65px",top:"576px",angle:-.61},{name:"fill-4",color:"#F7B8AE",width:"13px",left:"136px",top:"576px",angle:-.61},{name:"fill-5",color:"#80A08D",width:"21px",left:"239px",top:"580px",angle:-.61},{name:"fill-6",color:"#C9CFDA",width:"21px",left:"285px",top:"605px",angle:0}];exports.decorStarsMobile=p;
},{}],"vDRT":[function(require,module,exports) {
"use strict";var t=i(require("lodash/throttle")),e=require("./decor-stars.js");function i(t){return t&&t.__esModule?t:{default:t}}const n={drawStar:(t={},e={})=>{if(t){const i=t.getContext("2d"),n=e.numPoints||5,o=e.outerRadius||40,r=e.innerRadius||20,s=e.cx||0,a=e.cy||0,c=e.rotate||0;i.lineWidth=e.lineWidth||1,i.strokeStyle=e.stroke||"#000",i.beginPath();const d=(t,e,n)=>{const o=s+Math.cos(e)*t,r=a+Math.sin(e)*t;i[n](o,r)};d(o,c,"moveTo");const l=2*Math.PI/n;for(let t=0;t<=n;t+=1){const e=t*l+c,i=e+l/2;d(o,e,"lineTo"),d(r,i,"lineTo")}i.closePath(),i.stroke(),e.fill&&(i.fillStyle=e.fill,i.fill())}}},o=(t,e)=>{t&&e&&(t.getContext("2d").clearRect(0,0,t.clientWidth,t.clientHeight),e.forEach(({color:e,width:i,left:o,top:r,angle:s})=>{const a={cx:parseInt(o)+.5*parseInt(i),cy:parseInt(r)-(t.clientWidth>760?605:545),outerRadius:.55*parseInt(i),innerRadius:.25*parseInt(i),numPoints:5,lineWidth:0,stroke:"transparent",fill:`${e}`,rotate:s};n.drawStar(t,a)}))},r=document.querySelector("[decor-stars-container]"),s=t=>{t&&(t.width=t.clientWidth,t.height=t.clientHeight)};s(r),window.matchMedia("(min-width: 768px)").matches?o(r,e.decorStarsDesktop):o(r,e.decorStarsMobile);const a=()=>{if(s(r),r){const t=window.matchMedia("(min-width: 768px)").matches&&r.width>=768;o(r,t?e.decorStarsDesktop:e.decorStarsMobile)}};window.addEventListener("resize",(0,t.default)(a,500),{passive:!0});
},{"lodash/throttle":"Ywd4","./decor-stars.js":"vino"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var s=require("./js/event-listeners.js");require("./js/init-decor.js"),(0,s.initEventListeners)();
},{"./sass/main.scss":"clu1","./js/event-listeners.js":"p7QT","./js/init-decor.js":"vDRT"}]},{},["Focm"], null)
//# sourceMappingURL=/work-gold-dev-test/js/src.a5f91f3d.js.map