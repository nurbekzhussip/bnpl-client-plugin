!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BNPL=t():e.BNPL=t()}(window,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="QfWi")}({ETxl:function(e,t){"use strict";t.a={app:"app__SDpv1",dark:"dark__CUk0V",light:"light__hzREr",title:"title__SWqml",prepaymentInfo:"prepaymentInfo__tgJJg",stepperWrapper:"stepperWrapper__nlH4v",stepperItem:"stepperItem__G1h1O",stepCounter:"stepCounter__6J8b3",completed:"completed__EO7z-",stepName:"stepName__UKis9",line:"line__K-pFP",totalAmount:"totalAmount__KHfZy",totalAmountLabel:"totalAmountLabel__j7SpP",totalAmountValue:"totalAmountValue__AVnf8",tooltip:"tooltip__Hkogk"}},"IF/j":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n("wyBh"),o=function(e,t){var n=e.getFullYear(),r=e.getMonth(),o=e.getDate();return new Date(n,r+t,o)},l=function(e){return e.getDate()+" "+r.a[e.getMonth()%12]}},NJRs:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"KZT",currencyDisplay:"narrowSymbol",minimumFractionDigits:0,maximumFractionDigits:0})},QfWi:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"PaymentSchedule",(function(){return _}));var o=n("hosL"),l=n("ugae"),_=function(){function e(){}var t,n,_;return t=e,(n=[{key:"destroy",value:function(){Object(o.render)(null,window.document.querySelector("#bnpl-plugin"))}},{key:"render",value:function(e){Object(o.render)(Object(o.h)(l.a,e),window.document.querySelector("#bnpl-plugin"))}}])&&r(t.prototype,n),_&&r(t,_),Object.defineProperty(t,"prototype",{writable:!1}),e}();(new _).render({totalAmount:12e4})},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,u={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return _(e,u,r,o,null)}function _(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=E.vnode&&E.vnode(l),l}function u(){return{current:null}}function i(e){return e.children}function a(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!f.__r++||T!==E.debounceRendering)&&((T=E.debounceRendering)||setTimeout)(f)}function f(){for(var e;f.__r=I.length;)e=I.sort((function(e,t){return e.__v.__b-t.__v.__b})),I=[],e.some((function(e){var t,n,o,l,_,u;e.__d&&(_=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,C(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[_]:null,n,null==_?c(l):_,l.__h),w(n,l),l.__e!=_&&s(l)))}))}function d(e,t,n,r,o,l,u,a,s,p){var f,d,v,y,b,g,k,w=r&&r.__k||B,x=w.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(y=n.__k[f]=null==(y=t[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(i,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=w[f])||v&&y.key==v.key&&y.type===v.type)w[f]=void 0;else for(d=0;d<x;d++){if((v=w[d])&&y.key==v.key&&y.type===v.type){w[d]=void 0;break}v=null}C(e,y,v=v||F,o,l,u,a,s,p),b=y.__e,(d=y.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(d,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=h(y,s,e):s=m(e,y,v,w,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=c(v))}for(n.__e=g,f=x;f--;)null!=w[f]&&("function"==typeof n.type&&null!=w[f].__e&&w[f].__e==n.__d&&(n.__d=c(r,f+1)),S(w[f],w[f]));if(k)for(f=0;f<k.length;f++)N(k[f],k[++f],k[++f])}function h(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?h(r,t,n):m(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,r,o,l){var _,u,i;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),_=null;else{for(u=l,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,l),_=l}return void 0!==_?_:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function b(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?k:g,l):e.removeEventListener(t,l?k:g,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](E.event?E.event(e):e)}function k(e){this.l[e.type+!0](E.event?E.event(e):e)}function C(e,t,n,o,l,_,u,c,s){var p,f,h,v,m,y,b,g,k,C,w,N,S,P=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(p=E.__b)&&p(t);try{e:if("function"==typeof P){if(g=t.props,k=(p=P.contextType)&&o[p.__c],C=p?k?k.props.value:p.__:o,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in P&&P.prototype.render?t.__c=f=new P(g,C):(t.__c=f=new a(g,C),f.constructor=P,f.render=j),k&&k.sub(f),f.props=g,f.state||(f.state={}),f.context=C,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=r({},f.__s)),r(f.__s,P.getDerivedStateFromProps(g,f.__s))),v=f.props,m=f.state,h)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,C)||t.__v===n.__v){f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,C),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,y)}))}if(f.context=C,f.props=g,f.__v=t,f.__P=e,w=E.__r,N=0,"prototype"in P&&P.prototype.render)f.state=f.__s,f.__d=!1,w&&w(t),p=f.render(f.props,f.state,f.context);else do{f.__d=!1,w&&w(t),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++N<25);f.state=f.__s,null!=f.getChildContext&&(o=r(r({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),S=null!=p&&p.type===i&&null==p.key?p.props.children:p,d(e,Array.isArray(S)?S:[S],t,n,o,l,_,u,c,s),f.base=t.__e,t.__h=null,f.__h.length&&u.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,l,_,u,s);(p=E.diffed)&&p(t)}catch(e){t.__v=null,(s||null!=_)&&(t.__e=c,t.__h=!!s,_[_.indexOf(c)]=null),E.__e(e,t,n)}}function w(e,t){E.__c&&E.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){E.__e(e,t.__v)}}))}function x(e,t,n,r,l,_,u,i){var a,s,p,f=n.props,h=t.props,v=t.type,m=0;if("svg"===v&&(l=!0),null!=_)for(;m<_.length;m++)if((a=_[m])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){e=a,_[m]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),_=null,i=!1}if(null===v)f===h||i&&e.data===h||(e.data=h);else{if(_=_&&M.call(e.childNodes),s=(f=n.props||F).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!i){if(null!=_)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||b(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||b(e,l,t[l],n[l],r)}(e,h,f,l,i),p)t.__k=[];else if(m=t.props.children,d(e,Array.isArray(m)?m:[m],t,n,r,l&&"foreignObject"!==v,_,u,_?_[0]:n.__k&&c(n,0),i),null!=_)for(m=_.length;m--;)null!=_[m]&&o(_[m]);i||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==f.value)&&b(e,"value",m,f.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&b(e,"checked",m,f.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){E.__e(e,n)}}function S(e,t,n){var r,l;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&S(r[l],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function P(e,t,n){var r,o,_;E.__&&E.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,_=[],C(t,e=(!r&&n||t).__k=l(i,null,[e]),o||F,F,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?M.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),w(_,e)}function O(e,t){P(e,t,O)}function A(e,t,n){var o,l,u,i=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?l=t[u]:i[u]=t[u];return arguments.length>2&&(i.children=arguments.length>3?M.call(arguments,2):n),_(e.type,i,o||e.key,l||e.ref,null)}function D(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return O})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return D})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return E}));var M,E,L,U,I,T,W,F={},B=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;M=B.slice,E={__e:function(e,t,n,r){for(var o,l,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(t){e=t}throw e}},L=0,U=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},a.prototype.render=i,I=[],f.__r=0,W=0},ugae:function(e,t,n){"use strict";(function(e){n("wyBh");var r=n("NJRs"),o=n("ETxl"),l=n("IF/j");t.a=function(t){var n=t.theme,_=void 0===n?"light":n,u=t.totalAmount,i=new URL(document.location).searchParams;i.get("total")&&(u=i.get("total"));var a=new Date;i.get("date")&&(a=new Date(i.get("date")));var c=Math.floor(u/4),s=u-3*c,p=Object(l.a)(a,1),f=Object(l.a)(p,1),d=Object(l.a)(f,1),h=Object(l.a)(d,1);return e("div",{class:"".concat(o.a.app," ").concat("dark"===_?o.a.dark:o.a.light)},e("h3",{class:o.a.title},"График платежей ",e("div",{title:"График платежей может изменяться в зависимости от даты доставки заказа",class:o.a.tooltip},e("svg",{width:"14",height:"14",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M6.57223 0.837891C3.17405 0.837891 0.410156 3.60179 0.410156 6.99997C0.410156 10.3981 3.17405 13.162 6.57223 13.162C9.97041 13.162 12.7343 10.3981 12.7343 6.99997C12.7343 3.60179 9.97041 0.837891 6.57223 0.837891ZM6.57223 12.3404C3.62428 12.3368 1.23539 9.94792 1.23177 6.99997C1.23177 4.05532 3.62758 1.6595 6.57223 1.6595C9.51688 1.6595 11.9127 4.05532 11.9127 6.99997C11.9127 9.94462 9.51688 12.3404 6.57223 12.3404Z",fill:"#0DBA26"}),e("path",{d:"M6.56914 3.61719C6.17805 3.61719 5.85352 3.92036 5.85352 4.28434C5.85352 4.65652 6.17805 4.9597 6.56914 4.9597C6.96762 4.9597 7.29133 4.65652 7.29133 4.28434C7.29133 3.92036 6.9668 3.61719 6.56914 3.61719ZM6.16162 6.20526H6.98323V10.0397H6.16162V6.20526Z",fill:"#0DBA26"})))),e("div",{class:o.a.prepaymentInfo},e("span",null,"Предоплата"),e("span",null,"0 ₸")),e("div",{class:o.a.stepperWrapper},e("div",{class:"".concat(o.a.stepperItem," ").concat(o.a.completed)},e("div",{class:o.a.stepCounter}),e("div",{class:o.a.stepName},e("h4",null,Object(l.b)(a)),e("span",null,r.a.format(0)))),e("div",{className:o.a.stepperItem},e("div",{className:o.a.stepCounter}),e("div",{className:o.a.stepName},e("h4",null,Object(l.b)(p)),e("span",null,r.a.format(c)))),e("div",{className:o.a.stepperItem},e("div",{className:o.a.stepCounter}),e("div",{className:o.a.stepName},e("h4",null,Object(l.b)(f)),e("span",null,r.a.format(s)))),e("div",{class:o.a.stepperItem},e("div",{class:o.a.stepCounter}),e("div",{className:o.a.stepName},e("h4",null,Object(l.b)(d)),e("span",null,r.a.format(c)))),e("div",{class:o.a.stepperItem},e("div",{class:o.a.stepCounter}),e("div",{className:o.a.stepName},e("h4",null,Object(l.b)(h)),e("span",null,r.a.format(c))))),e("div",{class:o.a.line}),e("div",{class:o.a.totalAmount},e("span",{class:o.a.totalAmountLabel},"Сумма"),e("span",{class:o.a.totalAmountValue},r.a.format(u))))}}).call(this,n("hosL").h)},wyBh:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["янв","фев","март","апр","май","июнь","июль","авг","сент","окт","нояб","дек"]}})}));
//# sourceMappingURL=bnpl-plugin.bundle.js.map