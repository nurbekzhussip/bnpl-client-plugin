!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyApp=t():e.MyApp=t()}(window,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="QfWi")}({ETxl:function(e,t){"use strict";t.a={app:"app__SDpv1",dark:"dark__CUk0V",light:"light__hzREr",title:"title__SWqml",prepaymentInfo:"prepaymentInfo__tgJJg",stepperWrapper:"stepperWrapper__nlH4v",stepperItem:"stepperItem__G1h1O",stepCounter:"stepCounter__6J8b3",completed:"completed__EO7z-",stepName:"stepName__UKis9",line:"line__K-pFP",totalAmount:"totalAmount__KHfZy",totalAmountLabel:"totalAmountLabel__j7SpP"}},NJRs:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"KZT",currencyDisplay:"narrowSymbol",minimumFractionDigits:0,maximumFractionDigits:0})},QfWi:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=n("hosL"),l=n("ugae");t.default=function(){function e(){}var t,n,_;return t=e,(n=[{key:"destroy",value:function(){Object(o.render)(null,window.document.querySelector("#root"))}},{key:"render",value:function(e){Object(o.render)(Object(o.h)(l.a,e),window.document.querySelector("#root"))}}])&&r(t.prototype,n),_&&r(t,_),Object.defineProperty(t,"prototype",{writable:!1}),e}()},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,u={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?O.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return _(e,u,r,o,null)}function _(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T:o};return null==o&&null!=j.vnode&&j.vnode(l),l}function u(){return{current:null}}function i(e){return e.children}function a(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!f.__r++||I!==j.debounceRendering)&&((I=j.debounceRendering)||setTimeout)(f)}function f(){for(var e;f.__r=W.length;)e=W.sort((function(e,t){return e.__v.__b-t.__v.__b})),W=[],e.some((function(e){var t,n,o,l,_,u;e.__d&&(_=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,x(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[_]:null,n,null==_?c(l):_,l.__h),C(n,l),l.__e!=_&&s(l)))}))}function d(e,t,n,r,o,l,u,a,s,p){var f,d,v,y,g,b,k,C=r&&r.__k||R,w=C.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(y=n.__k[f]=null==(y=t[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(i,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=C[f])||v&&y.key==v.key&&y.type===v.type)C[f]=void 0;else for(d=0;d<w;d++){if((v=C[d])&&y.key==v.key&&y.type===v.type){C[d]=void 0;break}v=null}x(e,y,v=v||F,o,l,u,a,s,p),g=y.__e,(d=y.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(d,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=h(y,s,e):s=m(e,y,v,C,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=c(v))}for(n.__e=b,f=w;f--;)null!=C[f]&&("function"==typeof n.type&&null!=C[f].__e&&C[f].__e==n.__d&&(n.__d=c(r,f+1)),N(C[f],C[f]));if(k)for(f=0;f<k.length;f++)S(k[f],k[++f],k[++f])}function h(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?h(r,t,n):m(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function m(e,t,n,r,o,l){var _,u,i;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),_=null;else{for(u=l,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,l),_=l}return void 0!==_?_:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function g(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?k:b,l):e.removeEventListener(t,l?k:b,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](j.event?j.event(e):e)}function k(e){this.l[e.type+!0](j.event?j.event(e):e)}function x(e,t,n,o,l,_,u,c,s){var p,f,h,v,m,y,g,b,k,x,C,S,N,D=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(p=j.__b)&&p(t);try{e:if("function"==typeof D){if(b=t.props,k=(p=D.contextType)&&o[p.__c],x=p?k?k.props.value:p.__:o,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in D&&D.prototype.render?t.__c=f=new D(b,x):(t.__c=f=new a(b,x),f.constructor=D,f.render=P),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=D.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=r({},f.__s)),r(f.__s,D.getDerivedStateFromProps(b,f.__s))),v=f.props,m=f.state,h)null==D.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==D.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)||t.__v===n.__v){f.props=b,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,y)}))}if(f.context=x,f.props=b,f.__v=t,f.__P=e,C=j.__r,S=0,"prototype"in D&&D.prototype.render)f.state=f.__s,f.__d=!1,C&&C(t),p=f.render(f.props,f.state,f.context);else do{f.__d=!1,C&&C(t),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++S<25);f.state=f.__s,null!=f.getChildContext&&(o=r(r({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),N=null!=p&&p.type===i&&null==p.key?p.props.children:p,d(e,Array.isArray(N)?N:[N],t,n,o,l,_,u,c,s),f.base=t.__e,t.__h=null,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=w(n.__e,t,n,o,l,_,u,s);(p=j.diffed)&&p(t)}catch(e){t.__v=null,(s||null!=_)&&(t.__e=c,t.__h=!!s,_[_.indexOf(c)]=null),j.__e(e,t,n)}}function C(e,t){j.__c&&j.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){j.__e(e,t.__v)}}))}function w(e,t,n,r,l,_,u,i){var a,s,p,f=n.props,h=t.props,v=t.type,m=0;if("svg"===v&&(l=!0),null!=_)for(;m<_.length;m++)if((a=_[m])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){e=a,_[m]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),_=null,i=!1}if(null===v)f===h||i&&e.data===h||(e.data=h);else{if(_=_&&O.call(e.childNodes),s=(f=n.props||F).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!i){if(null!=_)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||g(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||g(e,l,t[l],n[l],r)}(e,h,f,l,i),p)t.__k=[];else if(m=t.props.children,d(e,Array.isArray(m)?m:[m],t,n,r,l&&"foreignObject"!==v,_,u,_?_[0]:n.__k&&c(n,0),i),null!=_)for(m=_.length;m--;)null!=_[m]&&o(_[m]);i||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==f.value)&&g(e,"value",m,f.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&g(e,"checked",m,f.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){j.__e(e,n)}}function N(e,t,n){var r,l;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){j.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&N(r[l],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function P(e,t,n){return this.constructor(e,n)}function D(e,t,n){var r,o,_;j.__&&j.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,_=[],x(t,e=(!r&&n||t).__k=l(i,null,[e]),o||F,F,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?O.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),C(_,e)}function A(e,t){D(e,t,A)}function M(e,t,n){var o,l,u,i=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?l=t[u]:i[u]=t[u];return arguments.length>2&&(i.children=arguments.length>3?O.call(arguments,2):n),_(e.type,i,o||e.key,l||e.ref,null)}function E(e,t){var n={__c:t="__cC"+L++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(p)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return D})),n.d(t,"hydrate",(function(){return A})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return M})),n.d(t,"createContext",(function(){return E})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return j}));var O,j,T,U,W,I,L,F={},R=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;O=R.slice,j={__e:function(e,t,n,r){for(var o,l,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(t){e=t}throw e}},T=0,U=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},a.prototype.render=i,W=[],f.__r=0,L=0},ugae:function(e,t,n){"use strict";(function(e){var r=n("wyBh"),o=n("NJRs"),l=n("ETxl");t.a=function(t){var n=t.theme,_=void 0===n?"light":n,u=t.totalAmount,i=new Date,a=Math.floor(u/4),c=u-3*a;return e("div",{class:"".concat(l.a.app," ").concat("dark"===_?l.a.dark:l.a.light)},e("h3",{class:l.a.title},"График платежей"),e("div",{class:l.a.prepaymentInfo},e("span",null,"Предоплата"),e("span",null,"0 ₸")),e("div",{class:l.a.stepperWrapper},e("div",{class:"".concat(l.a.stepperItem," ").concat(l.a.completed)},e("div",{class:l.a.stepCounter}),e("div",{class:l.a.stepName},e("h4",null,"".concat(i.getDate()," ").concat(r.a[i.getMonth()%12])),e("span",null,"0 ₸"))),e("div",{className:l.a.stepperItem},e("div",{className:l.a.stepCounter}),e("div",{className:l.a.stepName},e("h4",null,"".concat(i.getDate()," ").concat(r.a[(i.getMonth()+1)%12])),e("span",null,o.a.format(c)))),e("div",{class:l.a.stepperItem},e("div",{class:l.a.stepCounter}),e("div",{className:l.a.stepName},e("h4",null,"".concat(i.getDate()," ").concat(r.a[(i.getMonth()+2)%12])),e("span",null,o.a.format(a)))),e("div",{class:l.a.stepperItem},e("div",{class:l.a.stepCounter}),e("div",{className:l.a.stepName},e("h4",null,"".concat(i.getDate()," ").concat(r.a[(i.getMonth()+3)%12])),e("span",null,o.a.format(a)))),e("div",{class:l.a.stepperItem},e("div",{class:l.a.stepCounter}),e("div",{className:l.a.stepName},e("h4",null,"".concat(i.getDate()," ").concat(r.a[(i.getMonth()+4)%12])),e("span",null,o.a.format(a))))),e("div",{class:l.a.line}),e("div",{class:l.a.totalAmount},e("span",{class:l.a.totalAmountLabel},"Сумма"),e("span",null,o.a.format(u))))}}).call(this,n("hosL").h)},wyBh:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["янв","фев","март","апр","май","июнь","июль","авг","сент","окт","нояб","дек"]}})}));
//# sourceMappingURL=bundle.js.map