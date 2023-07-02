var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g,v,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var b={},_={},w=m.parcelRequire3a11;null==w&&((w=function(e){if(e in b)return b[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},m.parcelRequire3a11=w);var k={},E={},S=function(e){return e&&e.Math==Math&&e};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof m&&m)||function(){return this}()||E||Function("return this")();var $={},T={};$=!(T=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},j={};"use strict";j=!T(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;L=j?O.bind(O):function(){return O.apply(O,arguments)};var x={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;t=P&&!x.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:x;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},q={},H={},F=Function.prototype,N=F.call,A=j&&F.bind.bind(N,N),D={},C=(H=j?A:function(e){return function(){return N.apply(e,arguments)}})({}.toString),R=H("".slice);D=function(e){return R(C(e),8,-1)};var U=Object,W=H("".split);q=T(function(){return!U("z").propertyIsEnumerable(0)})?function(e){return"String"==D(e)?W(e,""):U(e)}:U;var G={},B={};B=function(e){return null==e};var Q=TypeError;G=function(e){if(B(e))throw Q("Can't call method on "+e);return e},I=function(e){return q(G(e))};var z={},Y={},J={},V={},K={},X="object"==typeof document&&document.all,Z=(K={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;V=K.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var ee=K.all;J=K.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:V(e)||e===ee}:function(e){return"object"==typeof e?null!==e:V(e)};var et={},er={};er=function(e,t){var r;return arguments.length<2?V(r=E[e])?r:void 0:E[e]&&E[e][t]};var en={};en=H({}.isPrototypeOf);var ei={},ea={},eo={},es={};es="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ec=E.process,eu=E.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&(n=(r=ed.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&es&&(!(r=es.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=es.match(/Chrome\/(\d+)/))&&(n=+r[1]),eo=n;var ep=E.String;ei=(ea=!!Object.getOwnPropertySymbols&&!T(function(){var e=Symbol();return!ep(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ef=Object;et=ei?function(e){return"symbol"==typeof e}:function(e){var t=er("Symbol");return V(t)&&en(t.prototype,ef(e))};var eh={},eg={},ev={},em=String;ev=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;eg=function(e){if(V(e))return e;throw ey(ev(e)+" is not a function")},eh=function(e,t){var r=e[t];return B(r)?void 0:eg(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!J(n=L(r,e))||V(r=e.valueOf)&&!J(n=L(r,e))||"string"!==t&&V(r=e.toString)&&!J(n=L(r,e)))return n;throw e_("Can't convert object to primitive value")};var ew={},ek={};ek=!1;var eE={},eS={},e$=Object.defineProperty;eS=function(e,t){try{e$(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var eT="__core-js_shared__";eE=E[eT]||eS(eT,{}),(ew=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:ek?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eL={},ej={},eO=Object;ej=function(e){return eO(G(e))};var ex=H({}.hasOwnProperty);eL=Object.hasOwn||function(e,t){return ex(ej(e),t)};var eP={},eM=0,eI=Math.random(),eq=H(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eM+eI,36)};var eH=E.Symbol,eF=ew("wks"),eN=ei?eH.for||eH:eH&&eH.withoutSetter||eP,eA=TypeError,eD=function(e){return eL(eF,e)||(eF[e]=ea&&eL(eH,e)?eH[e]:eN("Symbol."+e)),eF[e]}("toPrimitive");Y=function(e,t){if(!J(e)||et(e))return e;var r,n=eh(e,eD);if(n){if(void 0===t&&(t="default"),!J(r=L(n,e,t))||et(r))return r;throw eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},z=function(e){var t=Y(e,"string");return et(t)?t:t+""};var eC={},eR={},eU=E.document,eW=J(eU)&&J(eU.createElement);eR=function(e){return eW?eU.createElement(e):{}},eC=!$&&!T(function(){return 7!=Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;e=$?eG:function(e,r){if(e=I(e),r=z(r),eC)try{return eG(e,r)}catch(e){}if(eL(e,r))return M(!L(t,e,r),e[r])};var eB={},eQ={};eQ=$&&T(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eY=String,eJ=TypeError;ez=function(e){if(J(e))return e;throw eJ(eY(e)+" is not an object")};var eV=TypeError,eK=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";i=$?eQ?function(e,t,r){if(ez(e),t=z(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(ez(e),t=z(t),ez(r),eC)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=$?function(e,t,r){return i(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e9={},e3=Function.prototype,e4=$&&Object.getOwnPropertyDescriptor,e7=eL(e3,"name")&&(!$||$&&e4(e3,"name").configurable),e5={},e6=H(Function.toString);V(eE.inspectSource)||(eE.inspectSource=function(e){return e6(e)}),e5=eE.inspectSource;var e8={},te={},tt=E.WeakMap;te=V(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");tr=function(e){return tn[e]||(tn[e]=eP(e))};var ti={};ti={};var ta="Object already initialized",to=E.TypeError,ts=E.WeakMap;if(te||eE.state){var tc=eE.state||(eE.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,a=function(e,t){if(tc.has(e))throw to(ta);return t.facade=e,tc.set(e,t),t},o=function(e){return tc.get(e)||{}},s=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,a=function(e,t){if(eL(e,tu))throw to(ta);return t.facade=e,eB(e,tu,t),t},o=function(e){return eL(e,tu)?e[tu]:{}},s=function(e){return eL(e,tu)}}var tl=(e8={set:a,get:o,has:s,enforce:function(e){return s(e)?o(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=o(t)).type!==e)throw to("Incompatible receiver, "+e+" required");return r}}}).enforce,td=e8.get,tp=String,tf=Object.defineProperty,th=H("".slice),tg=H("".replace),tv=H([].join),tm=$&&!T(function(){return 8!==tf(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e9=function(e,t,r){"Symbol("===th(tp(t),0,7)&&(t="["+tg(tp(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eL(e,"name")||e7&&e.name!==t)&&($?tf(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&eL(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&eL(r,"constructor")&&r.constructor?$&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eL(n,"source")||(n.source=tv(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=tb(function(){return V(this)&&td(this).source||e5(this)},"toString"),e2=function(e,t,r,n){n||(n={});var a=n.enumerable,o=void 0!==n.name?n.name:t;if(V(r)&&e9(r,o,n),n.global)a?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},t$={},tT=Math.ceil,tL=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tL:tT)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tj=Math.max,tO=Math.min;tE=function(e,t){var r=tS(e);return r<0?tj(r+t,0):tO(r,t)};var tx={},tP={},tM=Math.min;tP=function(e){return e>0?tM(tS(e),9007199254740991):0},tx=function(e){return tP(e.length)};var tI=function(e){return function(t,r,n){var i,a=I(t),o=tx(a),s=tE(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tq={includes:tI(!0),indexOf:tI(!1)}.indexOf,tH=H([].push);tk=function(e,t){var r,n=I(e),i=0,a=[];for(r in n)!eL(ti,r)&&eL(n,r)&&tH(a,r);for(;t.length>i;)eL(n,r=t[i++])&&(~tq(a,r)||tH(a,r));return a};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tk(e,tF)},u=Object.getOwnPropertySymbols;var tN=H([].concat);tw=er("Reflect","ownKeys")||function(e){var t=c(ez(e));return u?tN(t,u(e)):t},t_=function(t,r,n){for(var a=tw(r),o=0;o<a.length;o++){var s=a[o];eL(t,s)||n&&eL(n,s)||i(t,s,e(r,s))}};var tA={},tD=/#|\.prototype\./,tC=function(e,t){var r=tU[tR(e)];return r==tG||r!=tW&&(V(t)?T(t):!!t)},tR=tC.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tU=tC.data={},tW=tC.NATIVE="N",tG=tC.POLYFILL="P";tA=tC,k=function(t,r){var n,i,a,o,s,c=t.target,u=t.global,l=t.stat;if(n=u?E:l?E[c]||eS(c,{}):(E[c]||{}).prototype)for(i in r){if(o=r[i],a=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!tA(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==a){if(typeof o==typeof a)continue;t_(o,a)}(t.sham||a&&a.sham)&&eB(o,"sham",!0),e2(n,i,o,t)}};var tB={},tQ={},tz=Function.prototype,tY=tz.apply,tJ=tz.call;tQ="object"==typeof Reflect&&Reflect.apply||(j?tJ.bind(tY):function(){return tJ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===D(e))return H(e)})(tK.bind);tV=function(e,t){return eg(e),void 0===t?e:j?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=er("document","documentElement");var t0={};t0=H([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw t2("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(es);var t3={},t4={},t7=t4={};function t5(){throw Error("setTimeout has not been defined")}function t6(){throw Error("clearTimeout has not been defined")}function t8(e){if(l===setTimeout)return setTimeout(e,0);if((l===t5||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t5}catch(e){l=t5}try{d="function"==typeof clearTimeout?clearTimeout:t6}catch(e){d=t6}}();var re=[],rt=!1,rr=-1;function rn(){rt&&p&&(rt=!1,p.length?re=p.concat(re):rr=-1,re.length&&ri())}function ri(){if(!rt){var e=t8(rn);rt=!0;for(var t=re.length;t;){for(p=re,re=[];++rr<t;)p&&p[rr].run();rr=-1,t=re.length}p=null,rt=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===t6||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function ra(e,t){this.fun=e,this.array=t}function ro(){}t7.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];re.push(new ra(e,t)),1!==re.length||rt||t8(ri)},ra.prototype.run=function(){this.fun.apply(null,this.array)},t7.title="browser",t7.browser=!0,t7.env={},t7.argv=[],t7.version="",t7.versions={},t7.on=ro,t7.addListener=ro,t7.once=ro,t7.off=ro,t7.removeListener=ro,t7.removeAllListeners=ro,t7.emit=ro,t7.prependListener=ro,t7.prependOnceListener=ro,t7.listeners=function(e){return[]},t7.binding=function(e){throw Error("process.binding is not supported")},t7.cwd=function(){return"/"},t7.chdir=function(e){throw Error("process.chdir is not supported")},t7.umask=function(){return 0},t3=void 0!==t4&&"process"==D(t4);var rs=E.setImmediate,rc=E.clearImmediate,ru=E.process,rl=E.Dispatch,rd=E.Function,rp=E.MessageChannel,rf=E.String,rh=0,rg={},rv="onreadystatechange";T(function(){f=E.location});var rm=function(e){if(eL(rg,e)){var t=rg[e];delete rg[e],t()}},ry=function(e){return function(){rm(e)}},rb=function(e){rm(e.data)},r_=function(e){E.postMessage(rf(e),f.protocol+"//"+f.host)};rs&&rc||(rs=function(e){t1(arguments.length,1);var t=V(e)?e:rd(e),r=t0(arguments,1);return rg[++rh]=function(){tQ(t,void 0,r)},h(rh),rh},rc=function(e){delete rg[e]},t3?h=function(e){ru.nextTick(ry(e))}:rl&&rl.now?h=function(e){rl.now(ry(e))}:rp&&!t9?(v=(g=new rp).port2,g.port1.onmessage=rb,h=tV(v.postMessage,v)):E.addEventListener&&V(E.postMessage)&&!E.importScripts&&f&&"file:"!==f.protocol&&!T(r_)?(h=r_,E.addEventListener("message",rb,!1)):h=rv in eR("script")?function(e){tZ.appendChild(eR("script"))[rv]=function(){tZ.removeChild(this),rm(e)}}:function(e){setTimeout(ry(e),0)});var rw=(tB={set:rs,clear:rc}).clear;"use strict";k({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rw},{clearImmediate:rw});var rk=tB.set,rE={},rS={};rS="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var r$=E.Function,rT=/MSIE .\./.test(es)||rS&&function(){var e=E.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rE=function(e,t){var r=t?2:1;return rT?function(n,i){var a=t1(arguments.length,1)>r,o=V(n)?n:r$(n),s=a?t0(arguments,r):[],c=a?function(){tQ(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rL=E.setImmediate?rE(rk,!1):rk;k({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rL},{setImmediate:rL});var rj=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new L(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return O()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rj}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rj:Function("r","regeneratorRuntime = r")(rj)}const rO="https://forkify-api.herokuapp.com/api/v2/recipes/",rx="c877ffea-d405-4328-9fee-04a465811d10",rP=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} ⚠⚠ (${n.status})`);return i}catch(e){throw e}};var rM={};rM=new URL(w("27Lyk").resolve("eyyUD"),import.meta.url).toString();var rI={};function rq(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rI=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2))return function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);return rq(n,i,t,r,!1)}(r,a,t);{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));return rq(u,(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rH{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clearParentElement(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${y(rM)}.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clearParentElement(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${y(rM)}.svg#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>;
      `;this._clearParentElement(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clearParentElement(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
              <use href="${y(rM)}.svg#icon-loader"></use>
            </svg>
        </div>
      `;this._clearParentElement(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rF extends rH{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${y(rM)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${y(rM)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${y(rM)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${y(rM)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${y(rM)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${y(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${y(rM)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${y(rM)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?y(rI)(e.quantity):""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>
      `}}var rN=new rF;const rA={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rD=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rC=async function(e){try{let t=await rP(`${rO}${e}?key=${rx}`);rA.recipe=rD(t),rA.bookmarks.some(t=>t.id===e)?rA.recipe.bookmarked=!0:rA.recipe.bookmarked=!1}catch(e){throw console.error(`${e.message} ⚠⚠⚠⚠`),e}},rR=async function(e){try{rA.search.query=e;let t=await rP(`${rO}?search=${e}&key=${rx}`);rA.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rA.search.page=1}catch(e){throw console.error(`${e.message} ⚠⚠⚠⚠`),e}},rU=function(e=rA.search.page){rA.search.page=e;let t=(e-1)*rA.search.resultsPerPage,r=e*rA.search.resultsPerPage;return rA.search.results.slice(t,r)},rW=function(e){rA.recipe.ingredients.forEach(t=>{t.quantity*=e/rA.recipe.servings}),rA.recipe.servings=e},rG=function(){localStorage.setItem("bookmarks",JSON.stringify(rA.bookmarks))},rB=function(e){rA.bookmarks.push(e),e.id===rA.recipe.id&&(rA.recipe.bookmarked=!0),rG()},rQ=function(e){let t=rA.bookmarks.findIndex(t=>t.id===e);rA.bookmarks.splice(t,1),e===rA.recipe.id&&(rA.recipe.bookmarked=!1),rG()};!function(){let e=localStorage.getItem("bookmarks");e&&(rA.bookmarks=JSON.parse(e))}();const rz=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format. Please use the correct format.");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rP(`${rO}?key=${rx}`,r);rA.recipe=rD(n),rB(rA.recipe)}catch(e){throw e}};class rY extends rH{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rJ=new rY,rV=new class extends rH{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${y(rM)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>;
    `}};class rK extends rH{_parentElement=document.querySelector(".results");_errorMessage="No recipies found for your query. Please try again.";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkup(){return this._data.map(e=>rV.render(e,!1)).join("")}}var rX=new rK;class rZ extends rH{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
                <use href="${y(rM)}#icon-arrow-right"></use>
            </svg>
        </button>
        `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${y(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${y(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>

        <span class="pagination__text">Page ${e} of ${t}</span>

        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
                <use href="${y(rM)}#icon-arrow-right"></use>
            </svg>
        </button>       
        `:""}}var r0=new rZ;class r1 extends rH{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and click the bookmark icon.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rV.render(e,!1)).join("")}}var r2=new r1;class r9 extends rH{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this._toggleWindowHandler.bind(this))}_toggleWindowHandler(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this._toggleWindowHandler.bind(this)),this._overlay.addEventListener("click",this._toggleWindowHandler.bind(this)),document.addEventListener("keyup",(function(e){if("Escape"!==e.key||this._overlay.classList.contains("hidden")||!(e.target.parentNode.parentNode===document||e.target===this._btnOpen))return;let t=this._toggleWindowHandler.bind(this);t()}).bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){return`
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TESTING" required name="title" type="text" />
          <label>URL</label>
          <input value="TESTING" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TESTING" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TESTING" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
    `}refreshForm(){this._clearParentElement(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}}var r3=new r9;class r4 extends rH{_parentElement=document.querySelector(".cart__items__list");addHandlerCartBtn(e){document.querySelector(".nav__btn--cart").addEventListener("click",e)}}var r7=new r4;document.querySelector(".recipe");const r5=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rX.update(rU()),r2.update(rA.bookmarks),await rC(e),rN.render(rA.recipe)}catch(e){console.error(e.message),rN.renderError()}},r6=async function(){try{rX.renderSpinner();let e=rJ.getQuery();if(!e)return;await rR(e),rX.render(rU()),r0.render(rA.search)}catch(e){console.error(e)}},r8=async function(e){try{r3.renderSpinner(),await rz(e),console.log(rA.recipe),rN.render(rA.recipe),r3.renderMessage(),r2.render(rA.bookmarks),window.history.pushState(null,"",`#${rA.recipe.id}`),setTimeout(function(){r3._toggleWindowHandler(),setTimeout(()=>r3.refreshForm(),500)},1500)}catch(e){console.error(e.message,"⚠⚠"),r3.renderError(e.message)}};r2.addHandlerRender(function(){r2.render(rA.bookmarks)}),rN.addHandlerRender(r5),rN.addHandlerUpdateServings(function(e){rW(e),rN.update(rA.recipe)}),rN.addHandlerAddBookmark(function(){rA.recipe.bookmarked?rA.recipe.bookmarked&&rQ(rA.recipe.id):rB(rA.recipe),rN.update(rA.recipe),r2.render(rA.bookmarks)}),rJ.addHandlerSearch(r6),r0.addHandlerClick(function(e){rX.render(rU(e)),r0.render(rA.search)}),r3.addHandlerUpload(r8),r7.addHandlerCartBtn(function(){alert("Sorry, this feature has not yet been implemented ⚠")});
//# sourceMappingURL=index.55cf1600.js.map
