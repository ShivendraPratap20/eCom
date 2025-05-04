var iS=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports);var e8=iS((Xe,Ie)=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function to(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $f={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function lS(){if(Mg)return Dl;Mg=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(o,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:o,key:d,ref:u!==void 0?u:null,props:f}}return Dl.Fragment=r,Dl.jsx=i,Dl.jsxs=i,Dl}var kg;function oS(){return kg||(kg=1,$f.exports=lS()),$f.exports}var g=oS(),Hf={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function sS(){if(Ug)return vt;Ug=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=S&&C[S]||C["@@iterator"],typeof C=="function"?C:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,O={};function R(C,V,Q){this.props=C,this.context=V,this.refs=O,this.updater=Q||E}R.prototype.isReactComponent={},R.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function w(){}w.prototype=R.prototype;function z(C,V,Q){this.props=C,this.context=V,this.refs=O,this.updater=Q||E}var D=z.prototype=new w;D.constructor=z,j(D,R.prototype),D.isPureReactComponent=!0;var Y=Array.isArray,A={H:null,A:null,T:null,S:null,V:null},q=Object.prototype.hasOwnProperty;function H(C,V,Q,J,at,mt){return Q=mt.ref,{$$typeof:n,type:C,key:V,ref:Q!==void 0?Q:null,props:mt}}function W(C,V){return H(C.type,V,void 0,void 0,void 0,C.props)}function rt(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function jt(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Q){return V[Q]})}var ct=/\/+/g;function St(C,V){return typeof C=="object"&&C!==null&&C.key!=null?jt(""+C.key):V.toString(36)}function kt(){}function re(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(kt,kt):(C.status="pending",C.then(function(V){C.status==="pending"&&(C.status="fulfilled",C.value=V)},function(V){C.status==="pending"&&(C.status="rejected",C.reason=V)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function Xt(C,V,Q,J,at){var mt=typeof C;(mt==="undefined"||mt==="boolean")&&(C=null);var st=!1;if(C===null)st=!0;else switch(mt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(C.$$typeof){case n:case r:st=!0;break;case v:return st=C._init,Xt(st(C._payload),V,Q,J,at)}}if(st)return at=at(C),st=J===""?"."+St(C,0):J,Y(at)?(Q="",st!=null&&(Q=st.replace(ct,"$&/")+"/"),Xt(at,V,Q,"",function(se){return se})):at!=null&&(rt(at)&&(at=W(at,Q+(at.key==null||C&&C.key===at.key?"":(""+at.key).replace(ct,"$&/")+"/")+st)),V.push(at)),1;st=0;var Wt=J===""?".":J+":";if(Y(C))for(var Ct=0;Ct<C.length;Ct++)J=C[Ct],mt=Wt+St(J,Ct),st+=Xt(J,V,Q,mt,at);else if(Ct=x(C),typeof Ct=="function")for(C=Ct.call(C),Ct=0;!(J=C.next()).done;)J=J.value,mt=Wt+St(J,Ct++),st+=Xt(J,V,Q,mt,at);else if(mt==="object"){if(typeof C.then=="function")return Xt(re(C),V,Q,J,at);throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return st}function F(C,V,Q){if(C==null)return C;var J=[],at=0;return Xt(C,J,"","",function(mt){return V.call(Q,mt,at++)}),J}function K(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(Q){(C._status===0||C._status===-1)&&(C._status=1,C._result=Q)},function(Q){(C._status===0||C._status===-1)&&(C._status=2,C._result=Q)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var nt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function xt(){}return vt.Children={map:F,forEach:function(C,V,Q){F(C,function(){V.apply(this,arguments)},Q)},count:function(C){var V=0;return F(C,function(){V++}),V},toArray:function(C){return F(C,function(V){return V})||[]},only:function(C){if(!rt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},vt.Component=R,vt.Fragment=i,vt.Profiler=u,vt.PureComponent=z,vt.StrictMode=o,vt.Suspense=h,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,vt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return A.H.useMemoCache(C)}},vt.cache=function(C){return function(){return C.apply(null,arguments)}},vt.cloneElement=function(C,V,Q){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var J=j({},C.props),at=C.key,mt=void 0;if(V!=null)for(st in V.ref!==void 0&&(mt=void 0),V.key!==void 0&&(at=""+V.key),V)!q.call(V,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&V.ref===void 0||(J[st]=V[st]);var st=arguments.length-2;if(st===1)J.children=Q;else if(1<st){for(var Wt=Array(st),Ct=0;Ct<st;Ct++)Wt[Ct]=arguments[Ct+2];J.children=Wt}return H(C.type,at,void 0,void 0,mt,J)},vt.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},vt.createElement=function(C,V,Q){var J,at={},mt=null;if(V!=null)for(J in V.key!==void 0&&(mt=""+V.key),V)q.call(V,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(at[J]=V[J]);var st=arguments.length-2;if(st===1)at.children=Q;else if(1<st){for(var Wt=Array(st),Ct=0;Ct<st;Ct++)Wt[Ct]=arguments[Ct+2];at.children=Wt}if(C&&C.defaultProps)for(J in st=C.defaultProps,st)at[J]===void 0&&(at[J]=st[J]);return H(C,mt,void 0,void 0,null,at)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(C){return{$$typeof:m,render:C}},vt.isValidElement=rt,vt.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:K}},vt.memo=function(C,V){return{$$typeof:p,type:C,compare:V===void 0?null:V}},vt.startTransition=function(C){var V=A.T,Q={};A.T=Q;try{var J=C(),at=A.S;at!==null&&at(Q,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(xt,nt)}catch(mt){nt(mt)}finally{A.T=V}},vt.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},vt.use=function(C){return A.H.use(C)},vt.useActionState=function(C,V,Q){return A.H.useActionState(C,V,Q)},vt.useCallback=function(C,V){return A.H.useCallback(C,V)},vt.useContext=function(C){return A.H.useContext(C)},vt.useDebugValue=function(){},vt.useDeferredValue=function(C,V){return A.H.useDeferredValue(C,V)},vt.useEffect=function(C,V,Q){var J=A.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(C,V)},vt.useId=function(){return A.H.useId()},vt.useImperativeHandle=function(C,V,Q){return A.H.useImperativeHandle(C,V,Q)},vt.useInsertionEffect=function(C,V){return A.H.useInsertionEffect(C,V)},vt.useLayoutEffect=function(C,V){return A.H.useLayoutEffect(C,V)},vt.useMemo=function(C,V){return A.H.useMemo(C,V)},vt.useOptimistic=function(C,V){return A.H.useOptimistic(C,V)},vt.useReducer=function(C,V,Q){return A.H.useReducer(C,V,Q)},vt.useRef=function(C){return A.H.useRef(C)},vt.useState=function(C){return A.H.useState(C)},vt.useSyncExternalStore=function(C,V,Q){return A.H.useSyncExternalStore(C,V,Q)},vt.useTransition=function(){return A.H.useTransition()},vt.version="19.1.0",vt}var Lg;function lh(){return Lg||(Lg=1,Hf.exports=sS()),Hf.exports}var T=lh();const zt=to(T);var Bf={exports:{}},Ml={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function uS(){return $g||($g=1,function(n){function r(F,K){var nt=F.length;F.push(K);t:for(;0<nt;){var xt=nt-1>>>1,C=F[xt];if(0<u(C,K))F[xt]=K,F[nt]=C,nt=xt;else break t}}function i(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var K=F[0],nt=F.pop();if(nt!==K){F[0]=nt;t:for(var xt=0,C=F.length,V=C>>>1;xt<V;){var Q=2*(xt+1)-1,J=F[Q],at=Q+1,mt=F[at];if(0>u(J,nt))at<C&&0>u(mt,J)?(F[xt]=mt,F[at]=nt,xt=at):(F[xt]=J,F[Q]=nt,xt=Q);else if(at<C&&0>u(mt,nt))F[xt]=mt,F[at]=nt,xt=at;else break t}}return K}function u(F,K){var nt=F.sortIndex-K.sortIndex;return nt!==0?nt:F.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],p=[],v=1,S=null,x=3,E=!1,j=!1,O=!1,R=!1,w=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function Y(F){for(var K=i(p);K!==null;){if(K.callback===null)o(p);else if(K.startTime<=F)o(p),K.sortIndex=K.expirationTime,r(h,K);else break;K=i(p)}}function A(F){if(O=!1,Y(F),!j)if(i(h)!==null)j=!0,q||(q=!0,St());else{var K=i(p);K!==null&&Xt(A,K.startTime-F)}}var q=!1,H=-1,W=5,rt=-1;function jt(){return R?!0:!(n.unstable_now()-rt<W)}function ct(){if(R=!1,q){var F=n.unstable_now();rt=F;var K=!0;try{t:{j=!1,O&&(O=!1,z(H),H=-1),E=!0;var nt=x;try{e:{for(Y(F),S=i(h);S!==null&&!(S.expirationTime>F&&jt());){var xt=S.callback;if(typeof xt=="function"){S.callback=null,x=S.priorityLevel;var C=xt(S.expirationTime<=F);if(F=n.unstable_now(),typeof C=="function"){S.callback=C,Y(F),K=!0;break e}S===i(h)&&o(h),Y(F)}else o(h);S=i(h)}if(S!==null)K=!0;else{var V=i(p);V!==null&&Xt(A,V.startTime-F),K=!1}}break t}finally{S=null,x=nt,E=!1}K=void 0}}finally{K?St():q=!1}}}var St;if(typeof D=="function")St=function(){D(ct)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,re=kt.port2;kt.port1.onmessage=ct,St=function(){re.postMessage(null)}}else St=function(){w(ct,0)};function Xt(F,K){H=w(function(){F(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(F){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var nt=x;x=K;try{return F()}finally{x=nt}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var nt=x;x=F;try{return K()}finally{x=nt}},n.unstable_scheduleCallback=function(F,K,nt){var xt=n.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?xt+nt:xt):nt=xt,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=nt+C,F={id:v++,callback:K,priorityLevel:F,startTime:nt,expirationTime:C,sortIndex:-1},nt>xt?(F.sortIndex=nt,r(p,F),i(h)===null&&F===i(p)&&(O?(z(H),H=-1):O=!0,Xt(A,nt-xt))):(F.sortIndex=C,r(h,F),j||E||(j=!0,q||(q=!0,St()))),F},n.unstable_shouldYield=jt,n.unstable_wrapCallback=function(F){var K=x;return function(){var nt=x;x=K;try{return F.apply(this,arguments)}finally{x=nt}}}}(Yf)),Yf}var Hg;function cS(){return Hg||(Hg=1,qf.exports=uS()),qf.exports}var Ff={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function fS(){if(Bg)return Te;Bg=1;var n=lh();function r(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:h,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Te.createPortal=function(h,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return f(h,p,null,v)},Te.flushSync=function(h){var p=d.T,v=o.p;try{if(d.T=null,o.p=2,h)return h()}finally{d.T=p,o.p=v,o.d.f()}},Te.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(h,p))},Te.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},Te.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var v=p.as,S=m(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:E}):v==="script"&&o.d.X(h,{crossOrigin:S,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Te.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);o.d.M(h,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(h)},Te.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=m(v,p.crossOrigin);o.d.L(h,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Te.preloadModule=function(h,p){if(typeof h=="string")if(p){var v=m(p.as,p.crossOrigin);o.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(h)},Te.requestFormReset=function(h){o.d.r(h)},Te.unstable_batchedUpdates=function(h,p){return h(p)},Te.useFormState=function(h,p,v){return d.H.useFormState(h,p,v)},Te.useFormStatus=function(){return d.H.useHostTransitionStatus()},Te.version="19.1.0",Te}var qg;function dS(){if(qg)return Ff.exports;qg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Ff.exports=fS(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function hS(){if(Yg)return Ml;Yg=1;var n=cS(),r=lh(),i=dS();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(o(188))}function h(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,l=e;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return m(s),t;if(c===l)return m(s),e;c=c.sibling}throw Error(o(188))}if(a.return!==l.return)a=s,l=c;else{for(var y=!1,b=s.child;b;){if(b===a){y=!0,a=s,l=c;break}if(b===l){y=!0,l=s,a=c;break}b=b.sibling}if(!y){for(b=c.child;b;){if(b===a){y=!0,a=c,l=s;break}if(b===l){y=!0,l=c,a=s;break}b=b.sibling}if(!y)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),jt=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function St(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Symbol.for("react.client.reference");function re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===kt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case R:return"Profiler";case O:return"StrictMode";case A:return"Suspense";case q:return"SuspenseList";case rt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case Y:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return e=t.displayName||null,e!==null?e:re(t.type)||"Memo";case W:e=t._payload,t=t._init;try{return re(t(e))}catch{}}return null}var Xt=Array.isArray,F=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},xt=[],C=-1;function V(t){return{current:t}}function Q(t){0>C||(t.current=xt[C],xt[C]=null,C--)}function J(t,e){C++,xt[C]=t.current,t.current=e}var at=V(null),mt=V(null),st=V(null),Wt=V(null);function Ct(t,e){switch(J(st,e),J(mt,t),J(at,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=sg(e),t=ug(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(at),J(at,t)}function se(){Q(at),Q(mt),Q(st)}function xn(t){t.memoizedState!==null&&J(Wt,t);var e=at.current,a=ug(e,t.type);e!==a&&(J(mt,t),J(at,a))}function Le(t){mt.current===t&&(Q(at),Q(mt)),Wt.current===t&&(Q(Wt),Ol._currentValue=nt)}var Oe=Object.prototype.hasOwnProperty,Er=n.unstable_scheduleCallback,Mi=n.unstable_cancelCallback,wu=n.unstable_shouldYield,Eu=n.unstable_requestPaint,Ze=n.unstable_now,Tu=n.unstable_getCurrentPriorityLevel,Tr=n.unstable_ImmediatePriority,fo=n.unstable_UserBlockingPriority,_r=n.unstable_NormalPriority,B=n.unstable_LowPriority,tt=n.unstable_IdlePriority,it=n.log,ut=n.unstable_setDisableYieldValue,gt=null,yt=null;function It(t){if(typeof it=="function"&&ut(t),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(gt,t)}catch{}}var Kt=Math.clz32?Math.clz32:_u,ki=Math.log,Ui=Math.LN2;function _u(t){return t>>>=0,t===0?32:31-(ki(t)/Ui|0)|0}var Ba=256,Ar=4194304;function qa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ho(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var s=0,c=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?s=qa(l):(y&=b,y!==0?s=qa(y):a||(a=b&~t,a!==0&&(s=qa(a))))):(b=l&~c,b!==0?s=qa(b):y!==0?s=qa(y):a||(a=l&~t,a!==0&&(s=qa(a)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:s}function Li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Vx(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ph(){var t=Ba;return Ba<<=1,(Ba&4194048)===0&&(Ba=256),t}function Vh(){var t=Ar;return Ar<<=1,(Ar&62914560)===0&&(Ar=4194304),t}function Au(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function $i(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xx(t,e,a,l,s,c){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,_=t.expirationTimes,U=t.hiddenUpdates;for(a=y&~a;0<a;){var G=31-Kt(a),X=1<<G;b[G]=0,_[G]=-1;var L=U[G];if(L!==null)for(U[G]=null,G=0;G<L.length;G++){var $=L[G];$!==null&&($.lane&=-536870913)}a&=~X}l!==0&&Xh(t,l,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(y&~e))}function Xh(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Kt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Ih(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Kt(a),s=1<<l;s&e|t[l]&e&&(t[l]|=e),a&=~s}}function ju(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ou(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qh(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Og(t.type))}function Ix(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var oa=Math.random().toString(36).slice(2),we="__reactFiber$"+oa,Ce="__reactProps$"+oa,jr="__reactContainer$"+oa,Cu="__reactEvents$"+oa,Qx="__reactListeners$"+oa,Zx="__reactHandles$"+oa,Zh="__reactResources$"+oa,Hi="__reactMarker$"+oa;function Ru(t){delete t[we],delete t[Ce],delete t[Cu],delete t[Qx],delete t[Zx]}function Or(t){var e=t[we];if(e)return e;for(var a=t.parentNode;a;){if(e=a[jr]||a[we]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=hg(t);t!==null;){if(a=t[we])return a;t=hg(t)}return e}t=a,a=t.parentNode}return null}function Cr(t){if(t=t[we]||t[jr]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Bi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Rr(t){var e=t[Zh];return e||(e=t[Zh]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Hi]=!0}var Kh=new Set,Jh={};function Ya(t,e){zr(t,e),zr(t+"Capture",e)}function zr(t,e){for(Jh[t]=e,t=0;t<e.length;t++)Kh.add(e[t])}var Kx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wh={},tp={};function Jx(t){return Oe.call(tp,t)?!0:Oe.call(Wh,t)?!1:Kx.test(t)?tp[t]=!0:(Wh[t]=!0,!1)}function po(t,e,a){if(Jx(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function mo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function kn(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var zu,ep;function Nr(t){if(zu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||"",ep=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+t+ep}var Nu=!1;function Du(t,e){if(!t||Nu)return"";Nu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch($){var L=$}Reflect.construct(t,[],X)}else{try{X.call()}catch($){L=$}t.call(X.prototype)}}else{try{throw Error()}catch($){L=$}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch($){if($&&L&&typeof $.stack=="string")return[$.stack,L.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),y=c[0],b=c[1];if(y&&b){var _=y.split(`
`),U=b.split(`
`);for(s=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;if(l===_.length||s===U.length)for(l=_.length-1,s=U.length-1;1<=l&&0<=s&&_[l]!==U[s];)s--;for(;1<=l&&0<=s;l--,s--)if(_[l]!==U[s]){if(l!==1||s!==1)do if(l--,s--,0>s||_[l]!==U[s]){var G=`
`+_[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=s);break}}}finally{Nu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Nr(a):""}function Wx(t){switch(t.tag){case 26:case 27:case 5:return Nr(t.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 15:return Du(t.type,!1);case 11:return Du(t.type.render,!1);case 1:return Du(t.type,!0);case 31:return Nr("Activity");default:return""}}function np(t){try{var e="";do e+=Wx(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ap(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tb(t){var e=ap(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(y){l=""+y,c.call(this,y)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=tb(t))}function rp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ap(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function yo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var eb=/[\n"\\]/g;function Je(t){return t.replace(eb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Mu(t,e,a,l,s,c,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ke(e)):t.value!==""+Ke(e)&&(t.value=""+Ke(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?ku(t,y,Ke(e)):a!=null?ku(t,y,Ke(a)):l!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ke(b):t.removeAttribute("name")}function ip(t,e,a,l,s,c,y,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+Ke(a):"",e=e!=null?""+Ke(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=b?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function ku(t,e,a){e==="number"&&yo(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Dr(t,e,a,l){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,l&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function lp(t,e,a){if(e!=null&&(e=""+Ke(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ke(a):""}function op(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(o(92));if(Xt(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ke(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Mr(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var nb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sp(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||nb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function up(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var s in e)l=e[s],e.hasOwnProperty(s)&&a[s]!==l&&sp(t,s,l)}else for(var c in e)e.hasOwnProperty(c)&&sp(t,c,e[c])}function Uu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ab=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vo(t){return rb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lu=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Ur=null;function cp(t){var e=Cr(t);if(e&&(t=e.stateNode)){var a=t[Ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(Mu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var s=l[Ce]||null;if(!s)throw Error(o(90));Mu(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&rp(l)}break t;case"textarea":lp(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Dr(t,!!a.multiple,e,!1)}}}var Hu=!1;function fp(t,e,a){if(Hu)return t(e,a);Hu=!0;try{var l=t(e);return l}finally{if(Hu=!1,(kr!==null||Ur!==null)&&(as(),kr&&(e=kr,t=Ur,Ur=kr=null,cp(e),t)))for(e=0;e<t.length;e++)cp(t[e])}}function qi(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Ce]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(Un)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Bu=!1}var sa=null,qu=null,xo=null;function dp(){if(xo)return xo;var t,e=qu,a=e.length,l,s="value"in sa?sa.value:sa.textContent,c=s.length;for(t=0;t<a&&e[t]===s[t];t++);var y=a-t;for(l=1;l<=y&&e[a-l]===s[c-l];l++);return xo=s.slice(t,1<l?1-l:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function hp(){return!1}function Re(t){function e(a,l,s,c,y){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=c,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?So:hp,this.isPropagationStopped=hp,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wo=Re(Fa),Fi=v({},Fa,{view:0,detail:0}),ib=Re(Fi),Yu,Fu,Gi,Eo=v({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(Yu=t.screenX-Gi.screenX,Fu=t.screenY-Gi.screenY):Fu=Yu=0,Gi=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),pp=Re(Eo),lb=v({},Eo,{dataTransfer:0}),ob=Re(lb),sb=v({},Fi,{relatedTarget:0}),Gu=Re(sb),ub=v({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),cb=Re(ub),fb=v({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),db=Re(fb),hb=v({},Fa,{data:0}),mp=Re(hb),pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gb[t])?!!e[t]:!1}function Pu(){return yb}var vb=v({},Fi,{key:function(t){if(t.key){var e=pb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xb=Re(vb),bb=v({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Re(bb),Sb=v({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),wb=Re(Sb),Eb=v({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tb=Re(Eb),_b=v({},Eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=Re(_b),jb=v({},Fa,{newState:0,oldState:0}),Ob=Re(jb),Cb=[9,13,27,32],Vu=Un&&"CompositionEvent"in window,Pi=null;Un&&"documentMode"in document&&(Pi=document.documentMode);var Rb=Un&&"TextEvent"in window&&!Pi,yp=Un&&(!Vu||Pi&&8<Pi&&11>=Pi),vp=" ",xp=!1;function bp(t,e){switch(t){case"keyup":return Cb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function zb(t,e){switch(t){case"compositionend":return Sp(e);case"keypress":return e.which!==32?null:(xp=!0,vp);case"textInput":return t=e.data,t===vp&&xp?null:t;default:return null}}function Nb(t,e){if(Lr)return t==="compositionend"||!Vu&&bp(t,e)?(t=dp(),xo=qu=sa=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yp&&e.locale!=="ko"?null:e.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Db[t.type]:e==="textarea"}function Ep(t,e,a,l){kr?Ur?Ur.push(l):Ur=[l]:kr=l,e=us(e,"onChange"),0<e.length&&(a=new wo("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Vi=null,Xi=null;function Mb(t){ag(t,0)}function To(t){var e=Bi(t);if(rp(e))return t}function Tp(t,e){if(t==="change")return e}var _p=!1;if(Un){var Xu;if(Un){var Iu="oninput"in document;if(!Iu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Iu=typeof Ap.oninput=="function"}Xu=Iu}else Xu=!1;_p=Xu&&(!document.documentMode||9<document.documentMode)}function jp(){Vi&&(Vi.detachEvent("onpropertychange",Op),Xi=Vi=null)}function Op(t){if(t.propertyName==="value"&&To(Xi)){var e=[];Ep(e,Xi,t,$u(t)),fp(Mb,e)}}function kb(t,e,a){t==="focusin"?(jp(),Vi=e,Xi=a,Vi.attachEvent("onpropertychange",Op)):t==="focusout"&&jp()}function Ub(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return To(Xi)}function Lb(t,e){if(t==="click")return To(e)}function $b(t,e){if(t==="input"||t==="change")return To(e)}function Hb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:Hb;function Ii(t,e){if($e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!Oe.call(e,s)||!$e(t[s],e[s]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var a=Cp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function zp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=yo(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=yo(t.document)}return e}function Qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Bb=Un&&"documentMode"in document&&11>=document.documentMode,$r=null,Zu=null,Qi=null,Ku=!1;function Dp(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||$r==null||$r!==yo(l)||(l=$r,"selectionStart"in l&&Qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qi&&Ii(Qi,l)||(Qi=l,l=us(Zu,"onSelect"),0<l.length&&(e=new wo("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=$r)))}function Ga(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Hr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Ju={},Mp={};Un&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Pa(t){if(Ju[t])return Ju[t];if(!Hr[t])return t;var e=Hr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Mp)return Ju[t]=e[a];return t}var kp=Pa("animationend"),Up=Pa("animationiteration"),Lp=Pa("animationstart"),qb=Pa("transitionrun"),Yb=Pa("transitionstart"),Fb=Pa("transitioncancel"),$p=Pa("transitionend"),Hp=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function cn(t,e){Hp.set(t,e),Ya(e,[t])}var Bp=new WeakMap;function We(t,e){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(e={value:t,source:e,stack:np(e)},Bp.set(t,e),e)}return{value:t,source:e,stack:np(e)}}var tn=[],Br=0,tc=0;function _o(){for(var t=Br,e=tc=Br=0;e<t;){var a=tn[e];tn[e++]=null;var l=tn[e];tn[e++]=null;var s=tn[e];tn[e++]=null;var c=tn[e];if(tn[e++]=null,l!==null&&s!==null){var y=l.pending;y===null?s.next=s:(s.next=y.next,y.next=s),l.pending=s}c!==0&&qp(a,s,c)}}function Ao(t,e,a,l){tn[Br++]=t,tn[Br++]=e,tn[Br++]=a,tn[Br++]=l,tc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ec(t,e,a,l){return Ao(t,e,a,l),jo(t)}function qr(t,e){return Ao(t,null,null,e),jo(t)}function qp(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var s=!1,c=t.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-Kt(a),t=c.hiddenUpdates,l=t[s],l===null?t[s]=[e]:l.push(e),e.lane=a|536870912),c):null}function jo(t){if(50<bl)throw bl=0,sf=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Yr={};function Gb(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(t,e,a,l){return new Gb(t,e,a,l)}function nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ln(t,e){var a=t.alternate;return a===null?(a=He(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yp(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Oo(t,e,a,l,s,c){var y=0;if(l=t,typeof t=="function")nc(t)&&(y=1);else if(typeof t=="string")y=V2(t,a,at.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case rt:return t=He(31,a,e,s),t.elementType=rt,t.lanes=c,t;case j:return Va(a.children,s,c,e);case O:y=8,s|=24;break;case R:return t=He(12,a,e,s|2),t.elementType=R,t.lanes=c,t;case A:return t=He(13,a,e,s),t.elementType=A,t.lanes=c,t;case q:return t=He(19,a,e,s),t.elementType=q,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case D:y=10;break t;case z:y=9;break t;case Y:y=11;break t;case H:y=14;break t;case W:y=16,l=null;break t}y=29,a=Error(o(130,t===null?"null":typeof t,"")),l=null}return e=He(y,a,e,s),e.elementType=t,e.type=l,e.lanes=c,e}function Va(t,e,a,l){return t=He(7,t,l,e),t.lanes=a,t}function ac(t,e,a){return t=He(6,t,null,e),t.lanes=a,t}function rc(t,e,a){return e=He(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Fr=[],Gr=0,Co=null,Ro=0,en=[],nn=0,Xa=null,$n=1,Hn="";function Ia(t,e){Fr[Gr++]=Ro,Fr[Gr++]=Co,Co=t,Ro=e}function Fp(t,e,a){en[nn++]=$n,en[nn++]=Hn,en[nn++]=Xa,Xa=t;var l=$n;t=Hn;var s=32-Kt(l)-1;l&=~(1<<s),a+=1;var c=32-Kt(e)+s;if(30<c){var y=s-s%5;c=(l&(1<<y)-1).toString(32),l>>=y,s-=y,$n=1<<32-Kt(e)+s|a<<s|l,Hn=c+t}else $n=1<<c|a<<s|l,Hn=t}function ic(t){t.return!==null&&(Ia(t,1),Fp(t,1,0))}function lc(t){for(;t===Co;)Co=Fr[--Gr],Fr[Gr]=null,Ro=Fr[--Gr],Fr[Gr]=null;for(;t===Xa;)Xa=en[--nn],en[nn]=null,Hn=en[--nn],en[nn]=null,$n=en[--nn],en[nn]=null}var Ae=null,te=null,Nt=!1,Qa=null,bn=!1,oc=Error(o(519));function Za(t){var e=Error(o(418,""));throw Ji(We(e,t)),oc}function Gp(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[we]=t,e[Ce]=l,a){case"dialog":_t("cancel",e),_t("close",e);break;case"iframe":case"object":case"embed":_t("load",e);break;case"video":case"audio":for(a=0;a<wl.length;a++)_t(wl[a],e);break;case"source":_t("error",e);break;case"img":case"image":case"link":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"input":_t("invalid",e),ip(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),go(e);break;case"select":_t("invalid",e);break;case"textarea":_t("invalid",e),op(e,l.value,l.defaultValue,l.children),go(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||og(e.textContent,a)?(l.popover!=null&&(_t("beforetoggle",e),_t("toggle",e)),l.onScroll!=null&&_t("scroll",e),l.onScrollEnd!=null&&_t("scrollend",e),l.onClick!=null&&(e.onclick=cs),e=!0):e=!1,e||Za(t)}function Pp(t){for(Ae=t.return;Ae;)switch(Ae.tag){case 5:case 13:bn=!1;return;case 27:case 3:bn=!0;return;default:Ae=Ae.return}}function Zi(t){if(t!==Ae)return!1;if(!Nt)return Pp(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Tf(t.type,t.memoizedProps)),a=!a),a&&te&&Za(t),Pp(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){te=dn(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}te=null}}else e===27?(e=te,Ta(t.type)?(t=Of,Of=null,te=t):te=e):te=Ae?dn(t.stateNode.nextSibling):null;return!0}function Ki(){te=Ae=null,Nt=!1}function Vp(){var t=Qa;return t!==null&&(De===null?De=t:De.push.apply(De,t),Qa=null),t}function Ji(t){Qa===null?Qa=[t]:Qa.push(t)}var sc=V(null),Ka=null,Bn=null;function ua(t,e,a){J(sc,e._currentValue),e._currentValue=a}function qn(t){t._currentValue=sc.current,Q(sc)}function uc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function cc(t,e,a,l){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var y=s.child;c=c.firstContext;t:for(;c!==null;){var b=c;c=s;for(var _=0;_<e.length;_++)if(b.context===e[_]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),uc(c.return,a,t),l||(y=null);break t}c=b.next}}else if(s.tag===18){if(y=s.return,y===null)throw Error(o(341));y.lanes|=a,c=y.alternate,c!==null&&(c.lanes|=a),uc(y,a,t),y=null}else y=s.child;if(y!==null)y.return=s;else for(y=s;y!==null;){if(y===t){y=null;break}if(s=y.sibling,s!==null){s.return=y.return,y=s;break}y=y.return}s=y}}function Wi(t,e,a,l){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var y=s.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var b=s.type;$e(s.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(s===Wt.current){if(y=s.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Ol):t=[Ol])}s=s.return}t!==null&&cc(e,t,a,l),e.flags|=262144}function zo(t){for(t=t.firstContext;t!==null;){if(!$e(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Ka=t,Bn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ee(t){return Xp(Ka,t)}function No(t,e){return Ka===null&&Ja(t),Xp(t,e)}function Xp(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Bn===null){if(t===null)throw Error(o(308));Bn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bn=Bn.next=e;return a}var Pb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Vb=n.unstable_scheduleCallback,Xb=n.unstable_NormalPriority,ue={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new Pb,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&Vb(Xb,function(){t.controller.abort()})}var el=null,dc=0,Pr=0,Vr=null;function Ib(t,e){if(el===null){var a=el=[];dc=0,Pr=mf(),Vr={status:"pending",value:void 0,then:function(l){a.push(l)}}}return dc++,e.then(Ip,Ip),e}function Ip(){if(--dc===0&&el!==null){Vr!==null&&(Vr.status="fulfilled");var t=el;el=null,Pr=0,Vr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Qb(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var Qp=F.S;F.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ib(t,e),Qp!==null&&Qp(t,e)};var Wa=V(null);function hc(){var t=Wa.current;return t!==null?t:Yt.pooledCache}function Do(t,e){e===null?J(Wa,Wa.current):J(Wa,e.pool)}function Zp(){var t=hc();return t===null?null:{parent:ue._currentValue,pool:t}}var nl=Error(o(460)),Kp=Error(o(474)),Mo=Error(o(542)),pc={then:function(){}};function Jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ko(){}function Wp(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ko,ko),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,em(t),t;default:if(typeof e.status=="string")e.then(ko,ko);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=l}},function(l){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,em(t),t}throw al=e,nl}}var al=null;function tm(){if(al===null)throw Error(o(459));var t=al;return al=null,t}function em(t){if(t===nl||t===Mo)throw Error(o(483))}var ca=!1;function mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ut&2)!==0){var s=l.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),l.pending=e,e=jo(t),qp(t,null,a),e}return Ao(t,l,e,a),jo(t)}function rl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Ih(t,a)}}function yc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=y:c=c.next=y,a=a.next}while(a!==null);c===null?s=c=e:c=c.next=e}else s=c=e;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var vc=!1;function il(){if(vc){var t=Vr;if(t!==null)throw t}}function ll(t,e,a,l){vc=!1;var s=t.updateQueue;ca=!1;var c=s.firstBaseUpdate,y=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var _=b,U=_.next;_.next=null,y===null?c=U:y.next=U,y=_;var G=t.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==y&&(b===null?G.firstBaseUpdate=U:b.next=U,G.lastBaseUpdate=_))}if(c!==null){var X=s.baseState;y=0,G=U=_=null,b=c;do{var L=b.lane&-536870913,$=L!==b.lane;if($?(Ot&L)===L:(l&L)===L){L!==0&&L===Pr&&(vc=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var pt=t,ft=b;L=e;var Bt=a;switch(ft.tag){case 1:if(pt=ft.payload,typeof pt=="function"){X=pt.call(Bt,X,L);break t}X=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=ft.payload,L=typeof pt=="function"?pt.call(Bt,X,L):pt,L==null)break t;X=v({},X,L);break t;case 2:ca=!0}}L=b.callback,L!==null&&(t.flags|=64,$&&(t.flags|=8192),$=s.callbacks,$===null?s.callbacks=[L]:$.push(L))}else $={lane:L,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(U=G=$,_=X):G=G.next=$,y|=L;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;$=b,b=$.next,$.next=null,s.lastBaseUpdate=$,s.shared.pending=null}}while(!0);G===null&&(_=X),s.baseState=_,s.firstBaseUpdate=U,s.lastBaseUpdate=G,c===null&&(s.shared.lanes=0),ba|=y,t.lanes=y,t.memoizedState=X}}function nm(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function am(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],e)}var Xr=V(null),Uo=V(0);function rm(t,e){t=In,J(Uo,t),J(Xr,e),In=t|e.baseLanes}function xc(){J(Uo,In),J(Xr,Xr.current)}function bc(){In=Uo.current,Q(Xr),Q(Uo)}var ha=0,wt=null,$t=null,ie=null,Lo=!1,Ir=!1,tr=!1,$o=0,ol=0,Qr=null,Zb=0;function ne(){throw Error(o(321))}function Sc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!$e(t[a],e[a]))return!1;return!0}function wc(t,e,a,l,s,c){return ha=c,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,F.H=t===null||t.memoizedState===null?qm:Ym,tr=!1,c=a(l,s),tr=!1,Ir&&(c=lm(e,a,l,s)),im(t),c}function im(t){F.H=Go;var e=$t!==null&&$t.next!==null;if(ha=0,ie=$t=wt=null,Lo=!1,ol=0,Qr=null,e)throw Error(o(300));t===null||de||(t=t.dependencies,t!==null&&zo(t)&&(de=!0))}function lm(t,e,a,l){wt=t;var s=0;do{if(Ir&&(Qr=null),ol=0,Ir=!1,25<=s)throw Error(o(301));if(s+=1,ie=$t=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}F.H=a2,c=e(a,l)}while(Ir);return c}function Kb(){var t=F.H,e=t.useState()[0];return e=typeof e.then=="function"?sl(e):e,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(wt.flags|=1024),e}function Ec(){var t=$o!==0;return $o=0,t}function Tc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function _c(t){if(Lo){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Lo=!1}ha=0,ie=$t=wt=null,Ir=!1,ol=$o=0,Qr=null}function ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?wt.memoizedState=ie=t:ie=ie.next=t,ie}function le(){if($t===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=ie===null?wt.memoizedState:ie.next;if(e!==null)ie=e,$t=t;else{if(t===null)throw wt.alternate===null?Error(o(467)):Error(o(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},ie===null?wt.memoizedState=ie=t:ie=ie.next=t}return ie}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(t){var e=ol;return ol+=1,Qr===null&&(Qr=[]),t=Wp(Qr,t,e),e=wt,(ie===null?e.memoizedState:ie.next)===null&&(e=e.alternate,F.H=e===null||e.memoizedState===null?qm:Ym),t}function Ho(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sl(t);if(t.$$typeof===D)return Ee(t)}throw Error(o(438,String(t)))}function jc(t){var e=null,a=wt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=wt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Ac(),wt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=jt;return e.index++,a}function Yn(t,e){return typeof e=="function"?e(t):e}function Bo(t){var e=le();return Oc(e,$t,t)}function Oc(t,e,a){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var s=t.baseQueue,c=l.pending;if(c!==null){if(s!==null){var y=s.next;s.next=c.next,c.next=y}e.baseQueue=s=c,l.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var b=y=null,_=null,U=e,G=!1;do{var X=U.lane&-536870913;if(X!==U.lane?(Ot&X)===X:(ha&X)===X){var L=U.revertLane;if(L===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),X===Pr&&(G=!0);else if((ha&L)===L){U=U.next,L===Pr&&(G=!0);continue}else X={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},_===null?(b=_=X,y=c):_=_.next=X,wt.lanes|=L,ba|=L;X=U.action,tr&&a(c,X),c=U.hasEagerState?U.eagerState:a(c,X)}else L={lane:X,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},_===null?(b=_=L,y=c):_=_.next=L,wt.lanes|=X,ba|=X;U=U.next}while(U!==null&&U!==e);if(_===null?y=c:_.next=b,!$e(c,t.memoizedState)&&(de=!0,G&&(a=Vr,a!==null)))throw a;t.memoizedState=c,t.baseState=y,t.baseQueue=_,l.lastRenderedState=c}return s===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cc(t){var e=le(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=a.dispatch,s=a.pending,c=e.memoizedState;if(s!==null){a.pending=null;var y=s=s.next;do c=t(c,y.action),y=y.next;while(y!==s);$e(c,e.memoizedState)||(de=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,l]}function om(t,e,a){var l=wt,s=le(),c=Nt;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=e();var y=!$e(($t||s).memoizedState,a);y&&(s.memoizedState=a,de=!0),s=s.queue;var b=cm.bind(null,l,s,t);if(ul(2048,8,b,[t]),s.getSnapshot!==e||y||ie!==null&&ie.memoizedState.tag&1){if(l.flags|=2048,Zr(9,qo(),um.bind(null,l,s,a,e),null),Yt===null)throw Error(o(349));c||(ha&124)!==0||sm(l,e,a)}return a}function sm(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=wt.updateQueue,e===null?(e=Ac(),wt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function um(t,e,a,l){e.value=a,e.getSnapshot=l,fm(e)&&dm(t)}function cm(t,e,a){return a(function(){fm(e)&&dm(t)})}function fm(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!$e(t,a)}catch{return!0}}function dm(t){var e=qr(t,2);e!==null&&Ge(e,t,2)}function Rc(t){var e=ze();if(typeof t=="function"){var a=t;if(t=a(),tr){It(!0);try{a()}finally{It(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:t},e}function hm(t,e,a,l){return t.baseState=a,Oc(t,$t,typeof l=="function"?l:Yn)}function Jb(t,e,a,l,s){if(Fo(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){c.listeners.push(y)}};F.T!==null?a(!0):c.isTransition=!1,l(c),a=e.pending,a===null?(c.next=e.pending=c,pm(e,c)):(c.next=a.next,e.pending=a.next=c)}}function pm(t,e){var a=e.action,l=e.payload,s=t.state;if(e.isTransition){var c=F.T,y={};F.T=y;try{var b=a(s,l),_=F.S;_!==null&&_(y,b),mm(t,e,b)}catch(U){zc(t,e,U)}finally{F.T=c}}else try{c=a(s,l),mm(t,e,c)}catch(U){zc(t,e,U)}}function mm(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){gm(t,e,l)},function(l){return zc(t,e,l)}):gm(t,e,a)}function gm(t,e,a){e.status="fulfilled",e.value=a,ym(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,pm(t,a)))}function zc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,ym(e),e=e.next;while(e!==l)}t.action=null}function ym(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function vm(t,e){return e}function xm(t,e){if(Nt){var a=Yt.formState;if(a!==null){t:{var l=wt;if(Nt){if(te){e:{for(var s=te,c=bn;s.nodeType!==8;){if(!c){s=null;break e}if(s=dn(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){te=dn(s.nextSibling),l=s.data==="F!";break t}}Za(l)}l=!1}l&&(e=a[0])}}return a=ze(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:e},a.queue=l,a=$m.bind(null,wt,l),l.dispatch=a,l=Rc(!1),c=Uc.bind(null,wt,!1,l.queue),l=ze(),s={state:e,dispatch:null,action:t,pending:null},l.queue=s,a=Jb.bind(null,wt,s,c,a),s.dispatch=a,l.memoizedState=t,[e,a,!1]}function bm(t){var e=le();return Sm(e,$t,t)}function Sm(t,e,a){if(e=Oc(t,e,vm)[0],t=Bo(Yn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=sl(e)}catch(y){throw y===nl?Mo:y}else l=e;e=le();var s=e.queue,c=s.dispatch;return a!==e.memoizedState&&(wt.flags|=2048,Zr(9,qo(),Wb.bind(null,s,a),null)),[l,c,t]}function Wb(t,e){t.action=e}function wm(t){var e=le(),a=$t;if(a!==null)return Sm(e,a,t);le(),e=e.memoizedState,a=le();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Zr(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=wt.updateQueue,e===null&&(e=Ac(),wt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function qo(){return{destroy:void 0,resource:void 0}}function Em(){return le().memoizedState}function Yo(t,e,a,l){var s=ze();l=l===void 0?null:l,wt.flags|=t,s.memoizedState=Zr(1|e,qo(),a,l)}function ul(t,e,a,l){var s=le();l=l===void 0?null:l;var c=s.memoizedState.inst;$t!==null&&l!==null&&Sc(l,$t.memoizedState.deps)?s.memoizedState=Zr(e,c,a,l):(wt.flags|=t,s.memoizedState=Zr(1|e,c,a,l))}function Tm(t,e){Yo(8390656,8,t,e)}function _m(t,e){ul(2048,8,t,e)}function Am(t,e){return ul(4,2,t,e)}function jm(t,e){return ul(4,4,t,e)}function Om(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cm(t,e,a){a=a!=null?a.concat([t]):null,ul(4,4,Om.bind(null,e,t),a)}function Nc(){}function Rm(t,e){var a=le();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Sc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function zm(t,e){var a=le();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Sc(e,l[1]))return l[0];if(l=t(),tr){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[l,e],l}function Dc(t,e,a){return a===void 0||(ha&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=M0(),wt.lanes|=t,ba|=t,a)}function Nm(t,e,a,l){return $e(a,e)?a:Xr.current!==null?(t=Dc(t,a,l),$e(t,e)||(de=!0),t):(ha&42)===0?(de=!0,t.memoizedState=a):(t=M0(),wt.lanes|=t,ba|=t,e)}function Dm(t,e,a,l,s){var c=K.p;K.p=c!==0&&8>c?c:8;var y=F.T,b={};F.T=b,Uc(t,!1,e,a);try{var _=s(),U=F.S;if(U!==null&&U(b,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var G=Qb(_,l);cl(t,e,G,Fe(t))}else cl(t,e,l,Fe(t))}catch(X){cl(t,e,{then:function(){},status:"rejected",reason:X},Fe())}finally{K.p=c,F.T=y}}function t2(){}function Mc(t,e,a,l){if(t.tag!==5)throw Error(o(476));var s=Mm(t).queue;Dm(t,s,e,nt,a===null?t2:function(){return km(t),a(l)})}function Mm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:nt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function km(t){var e=Mm(t).next.queue;cl(t,e,{},Fe())}function kc(){return Ee(Ol)}function Um(){return le().memoizedState}function Lm(){return le().memoizedState}function e2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Fe();t=fa(a);var l=da(e,t,a);l!==null&&(Ge(l,e,a),rl(l,e,a)),e={cache:fc()},t.payload=e;return}e=e.return}}function n2(t,e,a){var l=Fe();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fo(t)?Hm(e,a):(a=ec(t,e,a,l),a!==null&&(Ge(a,t,l),Bm(a,e,l)))}function $m(t,e,a){var l=Fe();cl(t,e,a,l)}function cl(t,e,a,l){var s={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fo(t))Hm(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var y=e.lastRenderedState,b=c(y,a);if(s.hasEagerState=!0,s.eagerState=b,$e(b,y))return Ao(t,e,s,0),Yt===null&&_o(),!1}catch{}finally{}if(a=ec(t,e,s,l),a!==null)return Ge(a,t,l),Bm(a,e,l),!0}return!1}function Uc(t,e,a,l){if(l={lane:2,revertLane:mf(),action:l,hasEagerState:!1,eagerState:null,next:null},Fo(t)){if(e)throw Error(o(479))}else e=ec(t,a,l,2),e!==null&&Ge(e,t,2)}function Fo(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Hm(t,e){Ir=Lo=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Bm(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Ih(t,a)}}var Go={readContext:Ee,use:Ho,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useLayoutEffect:ne,useInsertionEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useSyncExternalStore:ne,useId:ne,useHostTransitionStatus:ne,useFormState:ne,useActionState:ne,useOptimistic:ne,useMemoCache:ne,useCacheRefresh:ne},qm={readContext:Ee,use:Ho,useCallback:function(t,e){return ze().memoizedState=[t,e===void 0?null:e],t},useContext:Ee,useEffect:Tm,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Yo(4194308,4,Om.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){Yo(4,2,t,e)},useMemo:function(t,e){var a=ze();e=e===void 0?null:e;var l=t();if(tr){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=ze();if(a!==void 0){var s=a(e);if(tr){It(!0);try{a(e)}finally{It(!1)}}}else s=e;return l.memoizedState=l.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},l.queue=t,t=t.dispatch=n2.bind(null,wt,t),[l.memoizedState,t]},useRef:function(t){var e=ze();return t={current:t},e.memoizedState=t},useState:function(t){t=Rc(t);var e=t.queue,a=$m.bind(null,wt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Nc,useDeferredValue:function(t,e){var a=ze();return Dc(a,t,e)},useTransition:function(){var t=Rc(!1);return t=Dm.bind(null,wt,t.queue,!0,!1),ze().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=wt,s=ze();if(Nt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Yt===null)throw Error(o(349));(Ot&124)!==0||sm(l,e,a)}s.memoizedState=a;var c={value:a,getSnapshot:e};return s.queue=c,Tm(cm.bind(null,l,c,t),[t]),l.flags|=2048,Zr(9,qo(),um.bind(null,l,c,a,e),null),a},useId:function(){var t=ze(),e=Yt.identifierPrefix;if(Nt){var a=Hn,l=$n;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=$o++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Zb++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:kc,useFormState:xm,useActionState:xm,useOptimistic:function(t){var e=ze();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Uc.bind(null,wt,!0,a),a.dispatch=e,[t,e]},useMemoCache:jc,useCacheRefresh:function(){return ze().memoizedState=e2.bind(null,wt)}},Ym={readContext:Ee,use:Ho,useCallback:Rm,useContext:Ee,useEffect:_m,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:jm,useMemo:zm,useReducer:Bo,useRef:Em,useState:function(){return Bo(Yn)},useDebugValue:Nc,useDeferredValue:function(t,e){var a=le();return Nm(a,$t.memoizedState,t,e)},useTransition:function(){var t=Bo(Yn)[0],e=le().memoizedState;return[typeof t=="boolean"?t:sl(t),e]},useSyncExternalStore:om,useId:Um,useHostTransitionStatus:kc,useFormState:bm,useActionState:bm,useOptimistic:function(t,e){var a=le();return hm(a,$t,t,e)},useMemoCache:jc,useCacheRefresh:Lm},a2={readContext:Ee,use:Ho,useCallback:Rm,useContext:Ee,useEffect:_m,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:jm,useMemo:zm,useReducer:Cc,useRef:Em,useState:function(){return Cc(Yn)},useDebugValue:Nc,useDeferredValue:function(t,e){var a=le();return $t===null?Dc(a,t,e):Nm(a,$t.memoizedState,t,e)},useTransition:function(){var t=Cc(Yn)[0],e=le().memoizedState;return[typeof t=="boolean"?t:sl(t),e]},useSyncExternalStore:om,useId:Um,useHostTransitionStatus:kc,useFormState:wm,useActionState:wm,useOptimistic:function(t,e){var a=le();return $t!==null?hm(a,$t,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jc,useCacheRefresh:Lm},Kr=null,fl=0;function Po(t){var e=fl;return fl+=1,Kr===null&&(Kr=[]),Wp(Kr,t,e)}function dl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vo(t,e){throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fm(t){var e=t._init;return e(t._payload)}function Gm(t){function e(M,N){if(t){var k=M.deletions;k===null?(M.deletions=[N],M.flags|=16):k.push(N)}}function a(M,N){if(!t)return null;for(;N!==null;)e(M,N),N=N.sibling;return null}function l(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function s(M,N){return M=Ln(M,N),M.index=0,M.sibling=null,M}function c(M,N,k){return M.index=k,t?(k=M.alternate,k!==null?(k=k.index,k<N?(M.flags|=67108866,N):k):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function y(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function b(M,N,k,P){return N===null||N.tag!==6?(N=ac(k,M.mode,P),N.return=M,N):(N=s(N,k),N.return=M,N)}function _(M,N,k,P){var et=k.type;return et===j?G(M,N,k.props.children,P,k.key):N!==null&&(N.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===W&&Fm(et)===N.type)?(N=s(N,k.props),dl(N,k),N.return=M,N):(N=Oo(k.type,k.key,k.props,null,M.mode,P),dl(N,k),N.return=M,N)}function U(M,N,k,P){return N===null||N.tag!==4||N.stateNode.containerInfo!==k.containerInfo||N.stateNode.implementation!==k.implementation?(N=rc(k,M.mode,P),N.return=M,N):(N=s(N,k.children||[]),N.return=M,N)}function G(M,N,k,P,et){return N===null||N.tag!==7?(N=Va(k,M.mode,P,et),N.return=M,N):(N=s(N,k),N.return=M,N)}function X(M,N,k){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ac(""+N,M.mode,k),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case x:return k=Oo(N.type,N.key,N.props,null,M.mode,k),dl(k,N),k.return=M,k;case E:return N=rc(N,M.mode,k),N.return=M,N;case W:var P=N._init;return N=P(N._payload),X(M,N,k)}if(Xt(N)||St(N))return N=Va(N,M.mode,k,null),N.return=M,N;if(typeof N.then=="function")return X(M,Po(N),k);if(N.$$typeof===D)return X(M,No(M,N),k);Vo(M,N)}return null}function L(M,N,k,P){var et=N!==null?N.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return et!==null?null:b(M,N,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return k.key===et?_(M,N,k,P):null;case E:return k.key===et?U(M,N,k,P):null;case W:return et=k._init,k=et(k._payload),L(M,N,k,P)}if(Xt(k)||St(k))return et!==null?null:G(M,N,k,P,null);if(typeof k.then=="function")return L(M,N,Po(k),P);if(k.$$typeof===D)return L(M,N,No(M,k),P);Vo(M,k)}return null}function $(M,N,k,P,et){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return M=M.get(k)||null,b(N,M,""+P,et);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case x:return M=M.get(P.key===null?k:P.key)||null,_(N,M,P,et);case E:return M=M.get(P.key===null?k:P.key)||null,U(N,M,P,et);case W:var Et=P._init;return P=Et(P._payload),$(M,N,k,P,et)}if(Xt(P)||St(P))return M=M.get(k)||null,G(N,M,P,et,null);if(typeof P.then=="function")return $(M,N,k,Po(P),et);if(P.$$typeof===D)return $(M,N,k,No(N,P),et);Vo(N,P)}return null}function pt(M,N,k,P){for(var et=null,Et=null,ot=N,dt=N=0,pe=null;ot!==null&&dt<k.length;dt++){ot.index>dt?(pe=ot,ot=null):pe=ot.sibling;var Rt=L(M,ot,k[dt],P);if(Rt===null){ot===null&&(ot=pe);break}t&&ot&&Rt.alternate===null&&e(M,ot),N=c(Rt,N,dt),Et===null?et=Rt:Et.sibling=Rt,Et=Rt,ot=pe}if(dt===k.length)return a(M,ot),Nt&&Ia(M,dt),et;if(ot===null){for(;dt<k.length;dt++)ot=X(M,k[dt],P),ot!==null&&(N=c(ot,N,dt),Et===null?et=ot:Et.sibling=ot,Et=ot);return Nt&&Ia(M,dt),et}for(ot=l(ot);dt<k.length;dt++)pe=$(ot,M,dt,k[dt],P),pe!==null&&(t&&pe.alternate!==null&&ot.delete(pe.key===null?dt:pe.key),N=c(pe,N,dt),Et===null?et=pe:Et.sibling=pe,Et=pe);return t&&ot.forEach(function(Ca){return e(M,Ca)}),Nt&&Ia(M,dt),et}function ft(M,N,k,P){if(k==null)throw Error(o(151));for(var et=null,Et=null,ot=N,dt=N=0,pe=null,Rt=k.next();ot!==null&&!Rt.done;dt++,Rt=k.next()){ot.index>dt?(pe=ot,ot=null):pe=ot.sibling;var Ca=L(M,ot,Rt.value,P);if(Ca===null){ot===null&&(ot=pe);break}t&&ot&&Ca.alternate===null&&e(M,ot),N=c(Ca,N,dt),Et===null?et=Ca:Et.sibling=Ca,Et=Ca,ot=pe}if(Rt.done)return a(M,ot),Nt&&Ia(M,dt),et;if(ot===null){for(;!Rt.done;dt++,Rt=k.next())Rt=X(M,Rt.value,P),Rt!==null&&(N=c(Rt,N,dt),Et===null?et=Rt:Et.sibling=Rt,Et=Rt);return Nt&&Ia(M,dt),et}for(ot=l(ot);!Rt.done;dt++,Rt=k.next())Rt=$(ot,M,dt,Rt.value,P),Rt!==null&&(t&&Rt.alternate!==null&&ot.delete(Rt.key===null?dt:Rt.key),N=c(Rt,N,dt),Et===null?et=Rt:Et.sibling=Rt,Et=Rt);return t&&ot.forEach(function(rS){return e(M,rS)}),Nt&&Ia(M,dt),et}function Bt(M,N,k,P){if(typeof k=="object"&&k!==null&&k.type===j&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case x:t:{for(var et=k.key;N!==null;){if(N.key===et){if(et=k.type,et===j){if(N.tag===7){a(M,N.sibling),P=s(N,k.props.children),P.return=M,M=P;break t}}else if(N.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===W&&Fm(et)===N.type){a(M,N.sibling),P=s(N,k.props),dl(P,k),P.return=M,M=P;break t}a(M,N);break}else e(M,N);N=N.sibling}k.type===j?(P=Va(k.props.children,M.mode,P,k.key),P.return=M,M=P):(P=Oo(k.type,k.key,k.props,null,M.mode,P),dl(P,k),P.return=M,M=P)}return y(M);case E:t:{for(et=k.key;N!==null;){if(N.key===et)if(N.tag===4&&N.stateNode.containerInfo===k.containerInfo&&N.stateNode.implementation===k.implementation){a(M,N.sibling),P=s(N,k.children||[]),P.return=M,M=P;break t}else{a(M,N);break}else e(M,N);N=N.sibling}P=rc(k,M.mode,P),P.return=M,M=P}return y(M);case W:return et=k._init,k=et(k._payload),Bt(M,N,k,P)}if(Xt(k))return pt(M,N,k,P);if(St(k)){if(et=St(k),typeof et!="function")throw Error(o(150));return k=et.call(k),ft(M,N,k,P)}if(typeof k.then=="function")return Bt(M,N,Po(k),P);if(k.$$typeof===D)return Bt(M,N,No(M,k),P);Vo(M,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,N!==null&&N.tag===6?(a(M,N.sibling),P=s(N,k),P.return=M,M=P):(a(M,N),P=ac(k,M.mode,P),P.return=M,M=P),y(M)):a(M,N)}return function(M,N,k,P){try{fl=0;var et=Bt(M,N,k,P);return Kr=null,et}catch(ot){if(ot===nl||ot===Mo)throw ot;var Et=He(29,ot,null,M.mode);return Et.lanes=P,Et.return=M,Et}finally{}}}var Jr=Gm(!0),Pm=Gm(!1),an=V(null),Sn=null;function pa(t){var e=t.alternate;J(ce,ce.current&1),J(an,t),Sn===null&&(e===null||Xr.current!==null||e.memoizedState!==null)&&(Sn=t)}function Vm(t){if(t.tag===22){if(J(ce,ce.current),J(an,t),Sn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Sn=t)}}else ma()}function ma(){J(ce,ce.current),J(an,an.current)}function Fn(t){Q(an),Sn===t&&(Sn=null),Q(ce)}var ce=V(0);function Xo(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jf(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Lc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:v({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $c={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Fe(),s=fa(l);s.payload=e,a!=null&&(s.callback=a),e=da(t,s,l),e!==null&&(Ge(e,t,l),rl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Fe(),s=fa(l);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=da(t,s,l),e!==null&&(Ge(e,t,l),rl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Fe(),l=fa(a);l.tag=2,e!=null&&(l.callback=e),e=da(t,l,a),e!==null&&(Ge(e,t,a),rl(e,t,a))}};function Xm(t,e,a,l,s,c,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,c,y):e.prototype&&e.prototype.isPureReactComponent?!Ii(a,l)||!Ii(s,c):!0}function Im(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function er(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=v({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var Io=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qm(t){Io(t)}function Zm(t){console.error(t)}function Km(t){Io(t)}function Qo(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Jm(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Hc(t,e,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Qo(t,e)},a}function Wm(t){return t=fa(t),t.tag=3,t}function t0(t,e,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=l.value;t.payload=function(){return s(c)},t.callback=function(){Jm(e,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Jm(e,a,l),typeof s!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function r2(t,e,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&Wi(e,a,s,!0),a=an.current,a!==null){switch(a.tag){case 13:return Sn===null?cf():a.alternate===null&&ee===0&&(ee=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===pc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),df(t,l,s)),!1;case 22:return a.flags|=65536,l===pc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),df(t,l,s)),!1}throw Error(o(435,a.tag))}return df(t,l,s),cf(),!1}if(Nt)return e=an.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,l!==oc&&(t=Error(o(422),{cause:l}),Ji(We(t,a)))):(l!==oc&&(e=Error(o(423),{cause:l}),Ji(We(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,l=We(l,a),s=Hc(t.stateNode,l,s),yc(t,s),ee!==4&&(ee=2)),!1;var c=Error(o(520),{cause:l});if(c=We(c,a),xl===null?xl=[c]:xl.push(c),ee!==4&&(ee=2),e===null)return!0;l=We(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=Hc(a.stateNode,l,t),yc(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Sa===null||!Sa.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Wm(s),t0(s,t,a,l),yc(a,s),!1}a=a.return}while(a!==null);return!1}var e0=Error(o(461)),de=!1;function ve(t,e,a,l){e.child=t===null?Pm(e,null,a,l):Jr(e,t.child,a,l)}function n0(t,e,a,l,s){a=a.render;var c=e.ref;if("ref"in l){var y={};for(var b in l)b!=="ref"&&(y[b]=l[b])}else y=l;return Ja(e),l=wc(t,e,a,y,c,s),b=Ec(),t!==null&&!de?(Tc(t,e,s),Gn(t,e,s)):(Nt&&b&&ic(e),e.flags|=1,ve(t,e,l,s),e.child)}function a0(t,e,a,l,s){if(t===null){var c=a.type;return typeof c=="function"&&!nc(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,r0(t,e,c,l,s)):(t=Oo(a.type,null,l,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Xc(t,s)){var y=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ii,a(y,l)&&t.ref===e.ref)return Gn(t,e,s)}return e.flags|=1,t=Ln(c,l),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,a,l,s){if(t!==null){var c=t.memoizedProps;if(Ii(c,l)&&t.ref===e.ref)if(de=!1,e.pendingProps=l=c,Xc(t,s))(t.flags&131072)!==0&&(de=!0);else return e.lanes=t.lanes,Gn(t,e,s)}return Bc(t,e,a,l,s)}function i0(t,e,a){var l=e.pendingProps,s=l.children,c=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=c!==null?c.baseLanes|a:a,t!==null){for(s=e.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;e.childLanes=c&~l}else e.childLanes=0,e.child=null;return l0(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Do(e,c!==null?c.cachePool:null),c!==null?rm(e,c):xc(),Vm(e);else return e.lanes=e.childLanes=536870912,l0(t,e,c!==null?c.baseLanes|a:a,a)}else c!==null?(Do(e,c.cachePool),rm(e,c),ma(),e.memoizedState=null):(t!==null&&Do(e,null),xc(),ma());return ve(t,e,s,a),e.child}function l0(t,e,a,l){var s=hc();return s=s===null?null:{parent:ue._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Do(e,null),xc(),Vm(e),t!==null&&Wi(t,e,l,!0),null}function Zo(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Bc(t,e,a,l,s){return Ja(e),a=wc(t,e,a,l,void 0,s),l=Ec(),t!==null&&!de?(Tc(t,e,s),Gn(t,e,s)):(Nt&&l&&ic(e),e.flags|=1,ve(t,e,a,s),e.child)}function o0(t,e,a,l,s,c){return Ja(e),e.updateQueue=null,a=lm(e,l,a,s),im(t),l=Ec(),t!==null&&!de?(Tc(t,e,c),Gn(t,e,c)):(Nt&&l&&ic(e),e.flags|=1,ve(t,e,a,c),e.child)}function s0(t,e,a,l,s){if(Ja(e),e.stateNode===null){var c=Yr,y=a.contextType;typeof y=="object"&&y!==null&&(c=Ee(y)),c=new a(l,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=$c,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=l,c.state=e.memoizedState,c.refs={},mc(e),y=a.contextType,c.context=typeof y=="object"&&y!==null?Ee(y):Yr,c.state=e.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Lc(e,a,y,l),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(y=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),y!==c.state&&$c.enqueueReplaceState(c,c.state,null),ll(e,l,c,s),il(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){c=e.stateNode;var b=e.memoizedProps,_=er(a,b);c.props=_;var U=c.context,G=a.contextType;y=Yr,typeof G=="object"&&G!==null&&(y=Ee(G));var X=a.getDerivedStateFromProps;G=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,G||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||U!==y)&&Im(e,c,l,y),ca=!1;var L=e.memoizedState;c.state=L,ll(e,l,c,s),il(),U=e.memoizedState,b||L!==U||ca?(typeof X=="function"&&(Lc(e,a,X,l),U=e.memoizedState),(_=ca||Xm(e,a,_,l,L,U,y))?(G||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=U),c.props=l,c.state=U,c.context=y,l=_):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{c=e.stateNode,gc(t,e),y=e.memoizedProps,G=er(a,y),c.props=G,X=e.pendingProps,L=c.context,U=a.contextType,_=Yr,typeof U=="object"&&U!==null&&(_=Ee(U)),b=a.getDerivedStateFromProps,(U=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y!==X||L!==_)&&Im(e,c,l,_),ca=!1,L=e.memoizedState,c.state=L,ll(e,l,c,s),il();var $=e.memoizedState;y!==X||L!==$||ca||t!==null&&t.dependencies!==null&&zo(t.dependencies)?(typeof b=="function"&&(Lc(e,a,b,l),$=e.memoizedState),(G=ca||Xm(e,a,G,l,L,$,_)||t!==null&&t.dependencies!==null&&zo(t.dependencies))?(U||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,$,_),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,$,_)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=$),c.props=l,c.state=$,c.context=_,l=G):(typeof c.componentDidUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),l=!1)}return c=l,Zo(t,e),l=(e.flags&128)!==0,c||l?(c=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&l?(e.child=Jr(e,t.child,null,s),e.child=Jr(e,null,a,s)):ve(t,e,a,s),e.memoizedState=c.state,t=e.child):t=Gn(t,e,s),t}function u0(t,e,a,l){return Ki(),e.flags|=256,ve(t,e,a,l),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(t){return{baseLanes:t,cachePool:Zp()}}function Fc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=rn),t}function c0(t,e,a){var l=e.pendingProps,s=!1,c=(e.flags&128)!==0,y;if((y=c)||(y=t!==null&&t.memoizedState===null?!1:(ce.current&2)!==0),y&&(s=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(s?pa(e):ma(),Nt){var b=te,_;if(_=b){t:{for(_=b,b=bn;_.nodeType!==8;){if(!b){b=null;break t}if(_=dn(_.nextSibling),_===null){b=null;break t}}b=_}b!==null?(e.memoizedState={dehydrated:b,treeContext:Xa!==null?{id:$n,overflow:Hn}:null,retryLane:536870912,hydrationErrors:null},_=He(18,null,null,0),_.stateNode=b,_.return=e,e.child=_,Ae=e,te=null,_=!0):_=!1}_||Za(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return jf(b)?e.lanes=32:e.lanes=536870912,null;Fn(e)}return b=l.children,l=l.fallback,s?(ma(),s=e.mode,b=Ko({mode:"hidden",children:b},s),l=Va(l,s,a,null),b.return=e,l.return=e,b.sibling=l,e.child=b,s=e.child,s.memoizedState=Yc(a),s.childLanes=Fc(t,y,a),e.memoizedState=qc,l):(pa(e),Gc(e,b))}if(_=t.memoizedState,_!==null&&(b=_.dehydrated,b!==null)){if(c)e.flags&256?(pa(e),e.flags&=-257,e=Pc(t,e,a)):e.memoizedState!==null?(ma(),e.child=t.child,e.flags|=128,e=null):(ma(),s=l.fallback,b=e.mode,l=Ko({mode:"visible",children:l.children},b),s=Va(s,b,a,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,Jr(e,t.child,null,a),l=e.child,l.memoizedState=Yc(a),l.childLanes=Fc(t,y,a),e.memoizedState=qc,e=s);else if(pa(e),jf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var U=y.dgst;y=U,l=Error(o(419)),l.stack="",l.digest=y,Ji({value:l,source:null,stack:null}),e=Pc(t,e,a)}else if(de||Wi(t,e,a,!1),y=(a&t.childLanes)!==0,de||y){if(y=Yt,y!==null&&(l=a&-a,l=(l&42)!==0?1:ju(l),l=(l&(y.suspendedLanes|a))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,qr(t,l),Ge(y,t,l),e0;b.data==="$?"||cf(),e=Pc(t,e,a)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=_.treeContext,te=dn(b.nextSibling),Ae=e,Nt=!0,Qa=null,bn=!1,t!==null&&(en[nn++]=$n,en[nn++]=Hn,en[nn++]=Xa,$n=t.id,Hn=t.overflow,Xa=e),e=Gc(e,l.children),e.flags|=4096);return e}return s?(ma(),s=l.fallback,b=e.mode,_=t.child,U=_.sibling,l=Ln(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,U!==null?s=Ln(U,s):(s=Va(s,b,a,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,l=s,s=e.child,b=t.child.memoizedState,b===null?b=Yc(a):(_=b.cachePool,_!==null?(U=ue._currentValue,_=_.parent!==U?{parent:U,pool:U}:_):_=Zp(),b={baseLanes:b.baseLanes|a,cachePool:_}),s.memoizedState=b,s.childLanes=Fc(t,y,a),e.memoizedState=qc,l):(pa(e),a=t.child,t=a.sibling,a=Ln(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=a,e.memoizedState=null,a)}function Gc(t,e){return e=Ko({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ko(t,e){return t=He(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Pc(t,e,a){return Jr(e,t.child,null,a),t=Gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f0(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),uc(t.return,e,a)}function Vc(t,e,a,l,s){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=s)}function d0(t,e,a){var l=e.pendingProps,s=l.revealOrder,c=l.tail;if(ve(t,e,l.children,a),l=ce.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,a,e);else if(t.tag===19)f0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(J(ce,l),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&Xo(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),Vc(e,!1,s,a,c);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Xo(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}Vc(e,!0,a,null,c);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ba|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Wi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=Ln(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ln(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Xc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&zo(t)))}function i2(t,e,a){switch(e.tag){case 3:Ct(e,e.stateNode.containerInfo),ua(e,ue,t.memoizedState.cache),Ki();break;case 27:case 5:xn(e);break;case 4:Ct(e,e.stateNode.containerInfo);break;case 10:ua(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(pa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?c0(t,e,a):(pa(e),t=Gn(t,e,a),t!==null?t.sibling:null);pa(e);break;case 19:var s=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(Wi(t,e,a,!1),l=(a&e.childLanes)!==0),s){if(l)return d0(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),J(ce,ce.current),l)break;return null;case 22:case 23:return e.lanes=0,i0(t,e,a);case 24:ua(e,ue,t.memoizedState.cache)}return Gn(t,e,a)}function h0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)de=!0;else{if(!Xc(t,a)&&(e.flags&128)===0)return de=!1,i2(t,e,a);de=(t.flags&131072)!==0}else de=!1,Nt&&(e.flags&1048576)!==0&&Fp(e,Ro,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,s=l._init;if(l=s(l._payload),e.type=l,typeof l=="function")nc(l)?(t=er(l,t),e.tag=1,e=s0(null,e,l,t,a)):(e.tag=0,e=Bc(null,e,l,t,a));else{if(l!=null){if(s=l.$$typeof,s===Y){e.tag=11,e=n0(null,e,l,t,a);break t}else if(s===H){e.tag=14,e=a0(null,e,l,t,a);break t}}throw e=re(l)||l,Error(o(306,e,""))}}return e;case 0:return Bc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,s=er(l,e.pendingProps),s0(t,e,l,s,a);case 3:t:{if(Ct(e,e.stateNode.containerInfo),t===null)throw Error(o(387));l=e.pendingProps;var c=e.memoizedState;s=c.element,gc(t,e),ll(e,l,null,a);var y=e.memoizedState;if(l=y.cache,ua(e,ue,l),l!==c.cache&&cc(e,[ue],a,!0),il(),l=y.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=u0(t,e,l,a);break t}else if(l!==s){s=We(Error(o(424)),e),Ji(s),e=u0(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(te=dn(t.firstChild),Ae=e,Nt=!0,Qa=null,bn=!0,a=Pm(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ki(),l===s){e=Gn(t,e,a);break t}ve(t,e,l,a)}e=e.child}return e;case 26:return Zo(t,e),t===null?(a=yg(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,l=fs(st.current).createElement(a),l[we]=e,l[Ce]=t,be(l,a,t),fe(l),e.stateNode=l):e.memoizedState=yg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return xn(e),t===null&&Nt&&(l=e.stateNode=pg(e.type,e.pendingProps,st.current),Ae=e,bn=!0,s=te,Ta(e.type)?(Of=s,te=dn(l.firstChild)):te=s),ve(t,e,e.pendingProps.children,a),Zo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((s=l=te)&&(l=D2(l,e.type,e.pendingProps,bn),l!==null?(e.stateNode=l,Ae=e,te=dn(l.firstChild),bn=!1,s=!0):s=!1),s||Za(e)),xn(e),s=e.type,c=e.pendingProps,y=t!==null?t.memoizedProps:null,l=c.children,Tf(s,c)?l=null:y!==null&&Tf(s,y)&&(e.flags|=32),e.memoizedState!==null&&(s=wc(t,e,Kb,null,null,a),Ol._currentValue=s),Zo(t,e),ve(t,e,l,a),e.child;case 6:return t===null&&Nt&&((t=a=te)&&(a=M2(a,e.pendingProps,bn),a!==null?(e.stateNode=a,Ae=e,te=null,t=!0):t=!1),t||Za(e)),null;case 13:return c0(t,e,a);case 4:return Ct(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Jr(e,null,l,a):ve(t,e,l,a),e.child;case 11:return n0(t,e,e.type,e.pendingProps,a);case 7:return ve(t,e,e.pendingProps,a),e.child;case 8:return ve(t,e,e.pendingProps.children,a),e.child;case 12:return ve(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ua(e,e.type,l.value),ve(t,e,l.children,a),e.child;case 9:return s=e.type._context,l=e.pendingProps.children,Ja(e),s=Ee(s),l=l(s),e.flags|=1,ve(t,e,l,a),e.child;case 14:return a0(t,e,e.type,e.pendingProps,a);case 15:return r0(t,e,e.type,e.pendingProps,a);case 19:return d0(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=Ko(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Ln(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return i0(t,e,a);case 24:return Ja(e),l=Ee(ue),t===null?(s=hc(),s===null&&(s=Yt,c=fc(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),e.memoizedState={parent:l,cache:s},mc(e),ua(e,ue,s)):((t.lanes&a)!==0&&(gc(t,e),ll(e,null,null,a),il()),s=t.memoizedState,c=e.memoizedState,s.parent!==l?(s={parent:l,cache:l},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),ua(e,ue,l)):(l=c.cache,ua(e,ue,l),l!==s.cache&&cc(e,[ue],a,!0))),ve(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Pn(t){t.flags|=4}function p0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(e)){if(e=an.current,e!==null&&((Ot&4194048)===Ot?Sn!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||e!==Sn))throw al=pc,Kp;t.flags|=8192}}function Jo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vh():536870912,t.lanes|=e,ni|=e)}function hl(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function l2(t,e,a){var l=e.pendingProps;switch(lc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Jt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),qn(ue),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?Pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vp())),Jt(e),null;case 26:return a=e.memoizedState,t===null?(Pn(e),a!==null?(Jt(e),p0(e,a)):(Jt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Pn(e),Jt(e),p0(e,a)):(Jt(e),e.flags&=-16777217):(t.memoizedProps!==l&&Pn(e),Jt(e),e.flags&=-16777217),null;case 27:Le(e),a=st.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Pn(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Jt(e),null}t=at.current,Zi(e)?Gp(e):(t=pg(s,l,a),e.stateNode=t,Pn(e))}return Jt(e),null;case 5:if(Le(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Pn(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Jt(e),null}if(t=at.current,Zi(e))Gp(e);else{switch(s=fs(st.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?s.createElement(a,{is:l.is}):s.createElement(a)}}t[we]=e,t[Ce]=l;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(be(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Pn(e)}}return Jt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Pn(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(t=st.current,Zi(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,s=Ae,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}t[we]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||og(t.nodeValue,a)),t||Za(e)}else t=fs(t).createTextNode(l),t[we]=e,e.stateNode=t}return Jt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Zi(e),l!==null&&l.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[we]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else s=Vp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Fn(e),e):(Fn(e),null)}if(Fn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool);var c=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==s&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Jo(e,e.updateQueue),Jt(e),null;case 4:return se(),t===null&&xf(e.stateNode.containerInfo),Jt(e),null;case 10:return qn(e.type),Jt(e),null;case 19:if(Q(ce),s=e.memoizedState,s===null)return Jt(e),null;if(l=(e.flags&128)!==0,c=s.rendering,c===null)if(l)hl(s,!1);else{if(ee!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Xo(t),c!==null){for(e.flags|=128,hl(s,!1),t=c.updateQueue,e.updateQueue=t,Jo(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Yp(a,t),a=a.sibling;return J(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>es&&(e.flags|=128,l=!0,hl(s,!1),e.lanes=4194304)}else{if(!l)if(t=Xo(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Jo(e,t),hl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Nt)return Jt(e),null}else 2*Ze()-s.renderingStartTime>es&&a!==536870912&&(e.flags|=128,l=!0,hl(s,!1),e.lanes=4194304);s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,t=ce.current,J(ce,l?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return Fn(e),bc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),a=e.updateQueue,a!==null&&Jo(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&Q(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),qn(ue),Jt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function o2(t,e){switch(lc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qn(ue),se(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Le(e),null;case 13:if(Fn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(ce),null;case 4:return se(),null;case 10:return qn(e.type),null;case 22:case 23:return Fn(e),bc(),t!==null&&Q(Wa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qn(ue),null;case 25:return null;default:return null}}function m0(t,e){switch(lc(e),e.tag){case 3:qn(ue),se();break;case 26:case 27:case 5:Le(e);break;case 4:se();break;case 13:Fn(e);break;case 19:Q(ce);break;case 10:qn(e.type);break;case 22:case 23:Fn(e),bc(),t!==null&&Q(Wa);break;case 24:qn(ue)}}function pl(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&t)===t){l=void 0;var c=a.create,y=a.inst;l=c(),y.destroy=l}a=a.next}while(a!==s)}}catch(b){qt(e,e.return,b)}}function ga(t,e,a){try{var l=e.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var c=s.next;l=c;do{if((l.tag&t)===t){var y=l.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,s=e;var _=a,U=b;try{U()}catch(G){qt(s,_,G)}}}l=l.next}while(l!==c)}}catch(G){qt(e,e.return,G)}}function g0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{am(e,a)}catch(l){qt(t,t.return,l)}}}function y0(t,e,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){qt(t,e,l)}}function ml(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(s){qt(t,e,s)}}function wn(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){qt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){qt(t,e,s)}else a.current=null}function v0(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){qt(t,t.return,s)}}function Ic(t,e,a){try{var l=t.stateNode;O2(l,t.type,a,e),l[Ce]=e}catch(s){qt(t,t.return,s)}}function x0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=cs));else if(l!==4&&(l===27&&Ta(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Zc(t,e,a),t=t.sibling;t!==null;)Zc(t,e,a),t=t.sibling}function Wo(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wo(t,e,a),t=t.sibling;t!==null;)Wo(t,e,a),t=t.sibling}function b0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);be(e,l,a),e[we]=t,e[Ce]=a}catch(c){qt(t,t.return,c)}}var Vn=!1,ae=!1,Kc=!1,S0=typeof WeakSet=="function"?WeakSet:Set,he=null;function s2(t,e){if(t=t.containerInfo,wf=ys,t=Np(t),Qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var y=0,b=-1,_=-1,U=0,G=0,X=t,L=null;e:for(;;){for(var $;X!==a||s!==0&&X.nodeType!==3||(b=y+s),X!==c||l!==0&&X.nodeType!==3||(_=y+l),X.nodeType===3&&(y+=X.nodeValue.length),($=X.firstChild)!==null;)L=X,X=$;for(;;){if(X===t)break e;if(L===a&&++U===s&&(b=y),L===c&&++G===l&&(_=y),($=X.nextSibling)!==null)break;X=L,L=X.parentNode}X=$}a=b===-1||_===-1?null:{start:b,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:t,selectionRange:a},ys=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){switch(e=he,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,s=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var pt=er(a.type,s,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(pt,c),l.__reactInternalSnapshotBeforeUpdate=t}catch(ft){qt(a,a.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function w0(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ya(t,a),l&4&&pl(5,a);break;case 1:if(ya(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){qt(a,a.return,y)}else{var s=er(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){qt(a,a.return,y)}}l&64&&g0(a),l&512&&ml(a,a.return);break;case 3:if(ya(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{am(t,e)}catch(y){qt(a,a.return,y)}}break;case 27:e===null&&l&4&&b0(a);case 26:case 5:ya(t,a),e===null&&l&4&&v0(a),l&512&&ml(a,a.return);break;case 12:ya(t,a);break;case 13:ya(t,a),l&4&&_0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=y2.bind(null,a),k2(t,a))));break;case 22:if(l=a.memoizedState!==null||Vn,!l){e=e!==null&&e.memoizedState!==null||ae,s=Vn;var c=ae;Vn=l,(ae=e)&&!c?va(t,a,(a.subtreeFlags&8772)!==0):ya(t,a),Vn=s,ae=c}break;case 30:break;default:ya(t,a)}}function E0(t){var e=t.alternate;e!==null&&(t.alternate=null,E0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ru(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Ne=!1;function Xn(t,e,a){for(a=a.child;a!==null;)T0(t,e,a),a=a.sibling}function T0(t,e,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:ae||wn(a,e),Xn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ae||wn(a,e);var l=Qt,s=Ne;Ta(a.type)&&(Qt=a.stateNode,Ne=!1),Xn(t,e,a),Tl(a.stateNode),Qt=l,Ne=s;break;case 5:ae||wn(a,e);case 6:if(l=Qt,s=Ne,Qt=null,Xn(t,e,a),Qt=l,Ne=s,Qt!==null)if(Ne)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(c){qt(a,e,c)}else try{Qt.removeChild(a.stateNode)}catch(c){qt(a,e,c)}break;case 18:Qt!==null&&(Ne?(t=Qt,dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Nl(t)):dg(Qt,a.stateNode));break;case 4:l=Qt,s=Ne,Qt=a.stateNode.containerInfo,Ne=!0,Xn(t,e,a),Qt=l,Ne=s;break;case 0:case 11:case 14:case 15:ae||ga(2,a,e),ae||ga(4,a,e),Xn(t,e,a);break;case 1:ae||(wn(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&y0(a,e,l)),Xn(t,e,a);break;case 21:Xn(t,e,a);break;case 22:ae=(l=ae)||a.memoizedState!==null,Xn(t,e,a),ae=l;break;default:Xn(t,e,a)}}function _0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nl(t)}catch(a){qt(e,e.return,a)}}function u2(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new S0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new S0),e;default:throw Error(o(435,t.tag))}}function Jc(t,e){var a=u2(t);e.forEach(function(l){var s=v2.bind(null,t,l);a.has(l)||(a.add(l),l.then(s,s))})}function Be(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],c=t,y=e,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Qt=b.stateNode,Ne=!1;break t}break;case 5:Qt=b.stateNode,Ne=!1;break t;case 3:case 4:Qt=b.stateNode.containerInfo,Ne=!0;break t}b=b.return}if(Qt===null)throw Error(o(160));T0(c,y,s),Qt=null,Ne=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}var fn=null;function A0(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Be(e,t),qe(t),l&4&&(ga(3,t,t.return),pl(3,t),ga(5,t,t.return));break;case 1:Be(e,t),qe(t),l&512&&(ae||a===null||wn(a,a.return)),l&64&&Vn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=fn;if(Be(e,t),qe(t),l&512&&(ae||a===null||wn(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(l){case"title":c=s.getElementsByTagName("title")[0],(!c||c[Hi]||c[we]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(l),s.head.insertBefore(c,s.querySelector("head > title"))),be(c,l,a),c[we]=t,fe(c),l=c;break t;case"link":var y=bg("link","href",s).get(l+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(c=y[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}c=s.createElement(l),be(c,l,a),s.head.appendChild(c);break;case"meta":if(y=bg("meta","content",s).get(l+(a.content||""))){for(b=0;b<y.length;b++)if(c=y[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}c=s.createElement(l),be(c,l,a),s.head.appendChild(c);break;default:throw Error(o(468,l))}c[we]=t,fe(c),l=c}t.stateNode=l}else Sg(s,t.type,t.stateNode);else t.stateNode=xg(s,l,t.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Sg(s,t.type,t.stateNode):xg(s,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ic(t,t.memoizedProps,a.memoizedProps)}break;case 27:Be(e,t),qe(t),l&512&&(ae||a===null||wn(a,a.return)),a!==null&&l&4&&Ic(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Be(e,t),qe(t),l&512&&(ae||a===null||wn(a,a.return)),t.flags&32){s=t.stateNode;try{Mr(s,"")}catch($){qt(t,t.return,$)}}l&4&&t.stateNode!=null&&(s=t.memoizedProps,Ic(t,s,a!==null?a.memoizedProps:s)),l&1024&&(Kc=!0);break;case 6:if(Be(e,t),qe(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch($){qt(t,t.return,$)}}break;case 3:if(ps=null,s=fn,fn=ds(e.containerInfo),Be(e,t),fn=s,qe(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Nl(e.containerInfo)}catch($){qt(t,t.return,$)}Kc&&(Kc=!1,j0(t));break;case 4:l=fn,fn=ds(t.stateNode.containerInfo),Be(e,t),qe(t),fn=l;break;case 12:Be(e,t),qe(t);break;case 13:Be(e,t),qe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rf=Ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Jc(t,l)));break;case 22:s=t.memoizedState!==null;var _=a!==null&&a.memoizedState!==null,U=Vn,G=ae;if(Vn=U||s,ae=G||_,Be(e,t),ae=G,Vn=U,qe(t),l&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||_||Vn||ae||nr(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){_=a=e;try{if(c=_.stateNode,s)y=c.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=_.stateNode;var X=_.memoizedProps.style,L=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch($){qt(_,_.return,$)}}}else if(e.tag===6){if(a===null){_=e;try{_.stateNode.nodeValue=s?"":_.memoizedProps}catch($){qt(_,_.return,$)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Jc(t,a))));break;case 19:Be(e,t),qe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Jc(t,l)));break;case 30:break;case 21:break;default:Be(e,t),qe(t)}}function qe(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(x0(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,c=Qc(t);Wo(t,c,s);break;case 5:var y=a.stateNode;a.flags&32&&(Mr(y,""),a.flags&=-33);var b=Qc(t);Wo(t,b,y);break;case 3:case 4:var _=a.stateNode.containerInfo,U=Qc(t);Zc(t,U,_);break;default:throw Error(o(161))}}catch(G){qt(t,t.return,G)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;j0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ya(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)w0(t,e.alternate,e),e=e.sibling}function nr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ga(4,e,e.return),nr(e);break;case 1:wn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&y0(e,e.return,a),nr(e);break;case 27:Tl(e.stateNode);case 26:case 5:wn(e,e.return),nr(e);break;case 22:e.memoizedState===null&&nr(e);break;case 30:nr(e);break;default:nr(e)}t=t.sibling}}function va(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,s=t,c=e,y=c.flags;switch(c.tag){case 0:case 11:case 15:va(s,c,a),pl(4,c);break;case 1:if(va(s,c,a),l=c,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(U){qt(l,l.return,U)}if(l=c,s=l.updateQueue,s!==null){var b=l.stateNode;try{var _=s.shared.hiddenCallbacks;if(_!==null)for(s.shared.hiddenCallbacks=null,s=0;s<_.length;s++)nm(_[s],b)}catch(U){qt(l,l.return,U)}}a&&y&64&&g0(c),ml(c,c.return);break;case 27:b0(c);case 26:case 5:va(s,c,a),a&&l===null&&y&4&&v0(c),ml(c,c.return);break;case 12:va(s,c,a);break;case 13:va(s,c,a),a&&y&4&&_0(s,c);break;case 22:c.memoizedState===null&&va(s,c,a),ml(c,c.return);break;case 30:break;default:va(s,c,a)}e=e.sibling}}function Wc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function tf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t))}function En(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(t,e,a,l),e=e.sibling}function O0(t,e,a,l){var s=e.flags;switch(e.tag){case 0:case 11:case 15:En(t,e,a,l),s&2048&&pl(9,e);break;case 1:En(t,e,a,l);break;case 3:En(t,e,a,l),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tl(t)));break;case 12:if(s&2048){En(t,e,a,l),t=e.stateNode;try{var c=e.memoizedProps,y=c.id,b=c.onPostCommit;typeof b=="function"&&b(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(_){qt(e,e.return,_)}}else En(t,e,a,l);break;case 13:En(t,e,a,l);break;case 23:break;case 22:c=e.stateNode,y=e.alternate,e.memoizedState!==null?c._visibility&2?En(t,e,a,l):gl(t,e):c._visibility&2?En(t,e,a,l):(c._visibility|=2,Wr(t,e,a,l,(e.subtreeFlags&10256)!==0)),s&2048&&Wc(y,e);break;case 24:En(t,e,a,l),s&2048&&tf(e.alternate,e);break;default:En(t,e,a,l)}}function Wr(t,e,a,l,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,y=e,b=a,_=l,U=y.flags;switch(y.tag){case 0:case 11:case 15:Wr(c,y,b,_,s),pl(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?Wr(c,y,b,_,s):gl(c,y):(G._visibility|=2,Wr(c,y,b,_,s)),s&&U&2048&&Wc(y.alternate,y);break;case 24:Wr(c,y,b,_,s),s&&U&2048&&tf(y.alternate,y);break;default:Wr(c,y,b,_,s)}e=e.sibling}}function gl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,s=l.flags;switch(l.tag){case 22:gl(a,l),s&2048&&Wc(l.alternate,l);break;case 24:gl(a,l),s&2048&&tf(l.alternate,l);break;default:gl(a,l)}e=e.sibling}}var yl=8192;function ti(t){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 26:ti(t),t.flags&yl&&t.memoizedState!==null&&I2(fn,t.memoizedState,t.memoizedProps);break;case 5:ti(t);break;case 3:case 4:var e=fn;fn=ds(t.stateNode.containerInfo),ti(t),fn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=yl,yl=16777216,ti(t),yl=e):ti(t));break;default:ti(t)}}function R0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];he=l,N0(l,t)}R0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 0:case 11:case 15:vl(t),t.flags&2048&&ga(9,t,t.return);break;case 3:vl(t);break;case 12:vl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ts(t)):vl(t);break;default:vl(t)}}function ts(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];he=l,N0(l,t)}R0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ga(8,e,e.return),ts(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,ts(e));break;default:ts(e)}t=t.sibling}}function N0(t,e){for(;he!==null;){var a=he;switch(a.tag){case 0:case 11:case 15:ga(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,he=l;else t:for(a=t;he!==null;){l=he;var s=l.sibling,c=l.return;if(E0(l),l===a){he=null;break t}if(s!==null){s.return=c,he=s;break t}he=c}}}var c2={getCacheForType:function(t){var e=Ee(ue),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},f2=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Yt=null,Tt=null,Ot=0,Lt=0,Ye=null,xa=!1,ei=!1,ef=!1,In=0,ee=0,ba=0,ar=0,nf=0,rn=0,ni=0,xl=null,De=null,af=!1,rf=0,es=1/0,ns=null,Sa=null,xe=0,wa=null,ai=null,ri=0,lf=0,of=null,D0=null,bl=0,sf=null;function Fe(){if((Ut&2)!==0&&Ot!==0)return Ot&-Ot;if(F.T!==null){var t=Pr;return t!==0?t:mf()}return Qh()}function M0(){rn===0&&(rn=(Ot&536870912)===0||Nt?Ph():536870912);var t=an.current;return t!==null&&(t.flags|=32),rn}function Ge(t,e,a){(t===Yt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(ii(t,0),Ea(t,Ot,rn,!1)),$i(t,a),((Ut&2)===0||t!==Yt)&&(t===Yt&&((Ut&2)===0&&(ar|=a),ee===4&&Ea(t,Ot,rn,!1)),Tn(t))}function k0(t,e,a){if((Ut&6)!==0)throw Error(o(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Li(t,e),s=l?p2(t,e):ff(t,e,!0),c=l;do{if(s===0){ei&&!l&&Ea(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!d2(a)){s=ff(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var b=t;s=xl;var _=b.current.memoizedState.isDehydrated;if(_&&(ii(b,y).flags|=256),y=ff(b,y,!1),y!==2){if(ef&&!_){b.errorRecoveryDisabledLanes|=c,ar|=c,s=4;break t}c=De,De=s,c!==null&&(De===null?De=c:De.push.apply(De,c))}s=y}if(c=!1,s!==2)continue}}if(s===1){ii(t,0),Ea(t,e,0,!0);break}t:{switch(l=t,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Ea(l,e,rn,!xa);break t;case 2:De=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(s=rf+300-Ze(),10<s)){if(Ea(l,e,rn,!xa),ho(l,0,!0)!==0)break t;l.timeoutHandle=cg(U0.bind(null,l,a,De,ns,af,e,rn,ar,ni,xa,c,2,-0,0),s);break t}U0(l,a,De,ns,af,e,rn,ar,ni,xa,c,0,-0,0)}}break}while(!0);Tn(t)}function U0(t,e,a,l,s,c,y,b,_,U,G,X,L,$){if(t.timeoutHandle=-1,X=e.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:X2},C0(e),X=Q2(),X!==null)){t.cancelPendingCommit=X(F0.bind(null,t,e,c,a,l,s,y,b,_,G,1,L,$)),Ea(t,c,y,!U);return}F0(t,e,c,a,l,s,y,b,_)}function d2(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],c=s.getSnapshot;s=s.value;try{if(!$e(c(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ea(t,e,a,l){e&=~nf,e&=~ar,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var s=e;0<s;){var c=31-Kt(s),y=1<<c;l[c]=-1,s&=~y}a!==0&&Xh(t,a,e)}function as(){return(Ut&6)===0?(Sl(0),!1):!0}function uf(){if(Tt!==null){if(Lt===0)var t=Tt.return;else t=Tt,Bn=Ka=null,_c(t),Kr=null,fl=0,t=Tt;for(;t!==null;)m0(t.alternate,t),t=t.return;Tt=null}}function ii(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,R2(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),uf(),Yt=t,Tt=a=Ln(t.current,null),Ot=e,Lt=0,Ye=null,xa=!1,ei=Li(t,e),ef=!1,ni=rn=nf=ar=ba=ee=0,De=xl=null,af=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var s=31-Kt(l),c=1<<s;e|=t[s],l&=~c}return In=e,_o(),a}function L0(t,e){wt=null,F.H=Go,e===nl||e===Mo?(e=tm(),Lt=3):e===Kp?(e=tm(),Lt=4):Lt=e===e0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ye=e,Tt===null&&(ee=1,Qo(t,We(e,t.current)))}function $0(){var t=F.H;return F.H=Go,t===null?Go:t}function H0(){var t=F.A;return F.A=c2,t}function cf(){ee=4,xa||(Ot&4194048)!==Ot&&an.current!==null||(ei=!0),(ba&134217727)===0&&(ar&134217727)===0||Yt===null||Ea(Yt,Ot,rn,!1)}function ff(t,e,a){var l=Ut;Ut|=2;var s=$0(),c=H0();(Yt!==t||Ot!==e)&&(ns=null,ii(t,e)),e=!1;var y=ee;t:do try{if(Lt!==0&&Tt!==null){var b=Tt,_=Ye;switch(Lt){case 8:uf(),y=6;break t;case 3:case 2:case 9:case 6:an.current===null&&(e=!0);var U=Lt;if(Lt=0,Ye=null,li(t,b,_,U),a&&ei){y=0;break t}break;default:U=Lt,Lt=0,Ye=null,li(t,b,_,U)}}h2(),y=ee;break}catch(G){L0(t,G)}while(!0);return e&&t.shellSuspendCounter++,Bn=Ka=null,Ut=l,F.H=s,F.A=c,Tt===null&&(Yt=null,Ot=0,_o()),y}function h2(){for(;Tt!==null;)B0(Tt)}function p2(t,e){var a=Ut;Ut|=2;var l=$0(),s=H0();Yt!==t||Ot!==e?(ns=null,es=Ze()+500,ii(t,e)):ei=Li(t,e);t:do try{if(Lt!==0&&Tt!==null){e=Tt;var c=Ye;e:switch(Lt){case 1:Lt=0,Ye=null,li(t,e,c,1);break;case 2:case 9:if(Jp(c)){Lt=0,Ye=null,q0(e);break}e=function(){Lt!==2&&Lt!==9||Yt!==t||(Lt=7),Tn(t)},c.then(e,e);break t;case 3:Lt=7;break t;case 4:Lt=5;break t;case 7:Jp(c)?(Lt=0,Ye=null,q0(e)):(Lt=0,Ye=null,li(t,e,c,7));break;case 5:var y=null;switch(Tt.tag){case 26:y=Tt.memoizedState;case 5:case 27:var b=Tt;if(!y||wg(y)){Lt=0,Ye=null;var _=b.sibling;if(_!==null)Tt=_;else{var U=b.return;U!==null?(Tt=U,rs(U)):Tt=null}break e}}Lt=0,Ye=null,li(t,e,c,5);break;case 6:Lt=0,Ye=null,li(t,e,c,6);break;case 8:uf(),ee=6;break t;default:throw Error(o(462))}}m2();break}catch(G){L0(t,G)}while(!0);return Bn=Ka=null,F.H=l,F.A=s,Ut=a,Tt!==null?0:(Yt=null,Ot=0,_o(),ee)}function m2(){for(;Tt!==null&&!wu();)B0(Tt)}function B0(t){var e=h0(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?rs(t):Tt=e}function q0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=o0(a,e,e.pendingProps,e.type,void 0,Ot);break;case 11:e=o0(a,e,e.pendingProps,e.type.render,e.ref,Ot);break;case 5:_c(e);default:m0(a,e),e=Tt=Yp(e,In),e=h0(a,e,In)}t.memoizedProps=t.pendingProps,e===null?rs(t):Tt=e}function li(t,e,a,l){Bn=Ka=null,_c(e),Kr=null,fl=0;var s=e.return;try{if(r2(t,s,e,a,Ot)){ee=1,Qo(t,We(a,t.current)),Tt=null;return}}catch(c){if(s!==null)throw Tt=s,c;ee=1,Qo(t,We(a,t.current)),Tt=null;return}e.flags&32768?(Nt||l===1?t=!0:ei||(Ot&536870912)!==0?t=!1:(xa=t=!0,(l===2||l===9||l===3||l===6)&&(l=an.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y0(e,t)):rs(e)}function rs(t){var e=t;do{if((e.flags&32768)!==0){Y0(e,xa);return}t=e.return;var a=l2(e.alternate,e,In);if(a!==null){Tt=a;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);ee===0&&(ee=5)}function Y0(t,e){do{var a=o2(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);ee=6,Tt=null}function F0(t,e,a,l,s,c,y,b,_){t.cancelPendingCommit=null;do is();while(xe!==0);if((Ut&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=tc,Xx(t,a,c,y,b,_),t===Yt&&(Tt=Yt=null,Ot=0),ai=e,wa=t,ri=a,lf=c,of=s,D0=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,x2(_r,function(){return I0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,s=K.p,K.p=2,y=Ut,Ut|=4;try{s2(t,e,a)}finally{Ut=y,K.p=s,F.T=l}}xe=1,G0(),P0(),V0()}}function G0(){if(xe===1){xe=0;var t=wa,e=ai,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=K.p;K.p=2;var s=Ut;Ut|=4;try{A0(e,t);var c=Ef,y=Np(t.containerInfo),b=c.focusedElem,_=c.selectionRange;if(y!==b&&b&&b.ownerDocument&&zp(b.ownerDocument.documentElement,b)){if(_!==null&&Qu(b)){var U=_.start,G=_.end;if(G===void 0&&(G=U),"selectionStart"in b)b.selectionStart=U,b.selectionEnd=Math.min(G,b.value.length);else{var X=b.ownerDocument||document,L=X&&X.defaultView||window;if(L.getSelection){var $=L.getSelection(),pt=b.textContent.length,ft=Math.min(_.start,pt),Bt=_.end===void 0?ft:Math.min(_.end,pt);!$.extend&&ft>Bt&&(y=Bt,Bt=ft,ft=y);var M=Rp(b,ft),N=Rp(b,Bt);if(M&&N&&($.rangeCount!==1||$.anchorNode!==M.node||$.anchorOffset!==M.offset||$.focusNode!==N.node||$.focusOffset!==N.offset)){var k=X.createRange();k.setStart(M.node,M.offset),$.removeAllRanges(),ft>Bt?($.addRange(k),$.extend(N.node,N.offset)):(k.setEnd(N.node,N.offset),$.addRange(k))}}}}for(X=[],$=b;$=$.parentNode;)$.nodeType===1&&X.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var P=X[b];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}ys=!!wf,Ef=wf=null}finally{Ut=s,K.p=l,F.T=a}}t.current=e,xe=2}}function P0(){if(xe===2){xe=0;var t=wa,e=ai,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=K.p;K.p=2;var s=Ut;Ut|=4;try{w0(t,e.alternate,e)}finally{Ut=s,K.p=l,F.T=a}}xe=3}}function V0(){if(xe===4||xe===3){xe=0,Eu();var t=wa,e=ai,a=ri,l=D0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?xe=5:(xe=0,ai=wa=null,X0(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Sa=null),Ou(a),e=e.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(gt,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=F.T,s=K.p,K.p=2,F.T=null;try{for(var c=t.onRecoverableError,y=0;y<l.length;y++){var b=l[y];c(b.value,{componentStack:b.stack})}}finally{F.T=e,K.p=s}}(ri&3)!==0&&is(),Tn(t),s=t.pendingLanes,(a&4194090)!==0&&(s&42)!==0?t===sf?bl++:(bl=0,sf=t):bl=0,Sl(0)}}function X0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,tl(e)))}function is(t){return G0(),P0(),V0(),I0()}function I0(){if(xe!==5)return!1;var t=wa,e=lf;lf=0;var a=Ou(ri),l=F.T,s=K.p;try{K.p=32>a?32:a,F.T=null,a=of,of=null;var c=wa,y=ri;if(xe=0,ai=wa=null,ri=0,(Ut&6)!==0)throw Error(o(331));var b=Ut;if(Ut|=4,z0(c.current),O0(c,c.current,y,a),Ut=b,Sl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(gt,c)}catch{}return!0}finally{K.p=s,F.T=l,X0(t,e)}}function Q0(t,e,a){e=We(a,e),e=Hc(t.stateNode,e,2),t=da(t,e,2),t!==null&&($i(t,2),Tn(t))}function qt(t,e,a){if(t.tag===3)Q0(t,t,a);else for(;e!==null;){if(e.tag===3){Q0(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){t=We(a,t),a=Wm(2),l=da(e,a,2),l!==null&&(t0(a,l,e,t),$i(l,2),Tn(l));break}}e=e.return}}function df(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new f2;var s=new Set;l.set(e,s)}else s=l.get(e),s===void 0&&(s=new Set,l.set(e,s));s.has(a)||(ef=!0,s.add(a),t=g2.bind(null,t,e,a),e.then(t,t))}function g2(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(Ot&a)===a&&(ee===4||ee===3&&(Ot&62914560)===Ot&&300>Ze()-rf?(Ut&2)===0&&ii(t,0):nf|=a,ni===Ot&&(ni=0)),Tn(t)}function Z0(t,e){e===0&&(e=Vh()),t=qr(t,e),t!==null&&($i(t,e),Tn(t))}function y2(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Z0(t,a)}function v2(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),Z0(t,a)}function x2(t,e){return Er(t,e)}var ls=null,oi=null,hf=!1,os=!1,pf=!1,rr=0;function Tn(t){t!==oi&&t.next===null&&(oi===null?ls=oi=t:oi=oi.next=t),os=!0,hf||(hf=!0,S2())}function Sl(t,e){if(!pf&&os){pf=!0;do for(var a=!1,l=ls;l!==null;){if(t!==0){var s=l.pendingLanes;if(s===0)var c=0;else{var y=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-Kt(42|t)+1)-1,c&=s&~(y&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,tg(l,c))}else c=Ot,c=ho(l,l===Yt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Li(l,c)||(a=!0,tg(l,c));l=l.next}while(a);pf=!1}}function b2(){K0()}function K0(){os=hf=!1;var t=0;rr!==0&&(C2()&&(t=rr),rr=0);for(var e=Ze(),a=null,l=ls;l!==null;){var s=l.next,c=J0(l,e);c===0?(l.next=null,a===null?ls=s:a.next=s,s===null&&(oi=a)):(a=l,(t!==0||(c&3)!==0)&&(os=!0)),l=s}Sl(t)}function J0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var y=31-Kt(c),b=1<<y,_=s[y];_===-1?((b&a)===0||(b&l)!==0)&&(s[y]=Vx(b,e)):_<=e&&(t.expiredLanes|=b),c&=~b}if(e=Yt,a=Ot,a=ho(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Mi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Li(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Mi(l),Ou(a)){case 2:case 8:a=fo;break;case 32:a=_r;break;case 268435456:a=tt;break;default:a=_r}return l=W0.bind(null,t),a=Er(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Mi(l),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,e){if(xe!==0&&xe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(is()&&t.callbackNode!==a)return null;var l=Ot;return l=ho(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(k0(t,l,e),J0(t,Ze()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function tg(t,e){if(is())return null;k0(t,e,!0)}function S2(){z2(function(){(Ut&6)!==0?Er(Tr,b2):K0()})}function mf(){return rr===0&&(rr=Ph()),rr}function eg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vo(""+t)}function ng(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function w2(t,e,a,l,s){if(e==="submit"&&a&&a.stateNode===s){var c=eg((s[Ce]||null).action),y=l.submitter;y&&(e=(e=y[Ce]||null)?eg(e.formAction):y.getAttribute("formAction"),e!==null&&(c=e,y=null));var b=new wo("action","action",null,l,s);t.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rr!==0){var _=y?ng(s,y):new FormData(s);Mc(a,{pending:!0,data:_,method:s.method,action:c},null,_)}}else typeof c=="function"&&(b.preventDefault(),_=y?ng(s,y):new FormData(s),Mc(a,{pending:!0,data:_,method:s.method,action:c},c,_))},currentTarget:s}]})}}for(var gf=0;gf<Wu.length;gf++){var yf=Wu[gf],E2=yf.toLowerCase(),T2=yf[0].toUpperCase()+yf.slice(1);cn(E2,"on"+T2)}cn(kp,"onAnimationEnd"),cn(Up,"onAnimationIteration"),cn(Lp,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(qb,"onTransitionRun"),cn(Yb,"onTransitionStart"),cn(Fb,"onTransitionCancel"),cn($p,"onTransitionEnd"),zr("onMouseEnter",["mouseout","mouseover"]),zr("onMouseLeave",["mouseout","mouseover"]),zr("onPointerEnter",["pointerout","pointerover"]),zr("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function ag(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],s=l.event;l=l.listeners;t:{var c=void 0;if(e)for(var y=l.length-1;0<=y;y--){var b=l[y],_=b.instance,U=b.currentTarget;if(b=b.listener,_!==c&&s.isPropagationStopped())break t;c=b,s.currentTarget=U;try{c(s)}catch(G){Io(G)}s.currentTarget=null,c=_}else for(y=0;y<l.length;y++){if(b=l[y],_=b.instance,U=b.currentTarget,b=b.listener,_!==c&&s.isPropagationStopped())break t;c=b,s.currentTarget=U;try{c(s)}catch(G){Io(G)}s.currentTarget=null,c=_}}}}function _t(t,e){var a=e[Cu];a===void 0&&(a=e[Cu]=new Set);var l=t+"__bubble";a.has(l)||(rg(e,t,2,!1),a.add(l))}function vf(t,e,a){var l=0;e&&(l|=4),rg(a,t,l,e)}var ss="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[ss]){t[ss]=!0,Kh.forEach(function(a){a!=="selectionchange"&&(_2.has(a)||vf(a,!1,t),vf(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ss]||(e[ss]=!0,vf("selectionchange",!1,e))}}function rg(t,e,a,l){switch(Og(e)){case 2:var s=J2;break;case 8:s=W2;break;default:s=Df}a=s.bind(null,e,a,t),s=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),l?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function bf(t,e,a,l,s){var c=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var b=l.stateNode.containerInfo;if(b===s)break;if(y===4)for(y=l.return;y!==null;){var _=y.tag;if((_===3||_===4)&&y.stateNode.containerInfo===s)return;y=y.return}for(;b!==null;){if(y=Or(b),y===null)return;if(_=y.tag,_===5||_===6||_===26||_===27){l=c=y;continue t}b=b.parentNode}}l=l.return}fp(function(){var U=c,G=$u(a),X=[];t:{var L=Hp.get(t);if(L!==void 0){var $=wo,pt=t;switch(t){case"keypress":if(bo(a)===0)break t;case"keydown":case"keyup":$=xb;break;case"focusin":pt="focus",$=Gu;break;case"focusout":pt="blur",$=Gu;break;case"beforeblur":case"afterblur":$=Gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=wb;break;case kp:case Up:case Lp:$=cb;break;case $p:$=Tb;break;case"scroll":case"scrollend":$=ib;break;case"wheel":$=Ab;break;case"copy":case"cut":case"paste":$=db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=gp;break;case"toggle":case"beforetoggle":$=Ob}var ft=(e&4)!==0,Bt=!ft&&(t==="scroll"||t==="scrollend"),M=ft?L!==null?L+"Capture":null:L;ft=[];for(var N=U,k;N!==null;){var P=N;if(k=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||k===null||M===null||(P=qi(N,M),P!=null&&ft.push(El(N,P,k))),Bt)break;N=N.return}0<ft.length&&(L=new $(L,pt,null,a,G),X.push({event:L,listeners:ft}))}}if((e&7)===0){t:{if(L=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",L&&a!==Lu&&(pt=a.relatedTarget||a.fromElement)&&(Or(pt)||pt[jr]))break t;if(($||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,$?(pt=a.relatedTarget||a.toElement,$=U,pt=pt?Or(pt):null,pt!==null&&(Bt=f(pt),ft=pt.tag,pt!==Bt||ft!==5&&ft!==27&&ft!==6)&&(pt=null)):($=null,pt=U),$!==pt)){if(ft=pp,P="onMouseLeave",M="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(ft=gp,P="onPointerLeave",M="onPointerEnter",N="pointer"),Bt=$==null?L:Bi($),k=pt==null?L:Bi(pt),L=new ft(P,N+"leave",$,a,G),L.target=Bt,L.relatedTarget=k,P=null,Or(G)===U&&(ft=new ft(M,N+"enter",pt,a,G),ft.target=k,ft.relatedTarget=Bt,P=ft),Bt=P,$&&pt)e:{for(ft=$,M=pt,N=0,k=ft;k;k=si(k))N++;for(k=0,P=M;P;P=si(P))k++;for(;0<N-k;)ft=si(ft),N--;for(;0<k-N;)M=si(M),k--;for(;N--;){if(ft===M||M!==null&&ft===M.alternate)break e;ft=si(ft),M=si(M)}ft=null}else ft=null;$!==null&&ig(X,L,$,ft,!1),pt!==null&&Bt!==null&&ig(X,Bt,pt,ft,!0)}}t:{if(L=U?Bi(U):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var et=Tp;else if(wp(L))if(_p)et=$b;else{et=Ub;var Et=kb}else $=L.nodeName,!$||$.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?U&&Uu(U.elementType)&&(et=Tp):et=Lb;if(et&&(et=et(t,U))){Ep(X,et,a,G);break t}Et&&Et(t,L,U),t==="focusout"&&U&&L.type==="number"&&U.memoizedProps.value!=null&&ku(L,"number",L.value)}switch(Et=U?Bi(U):window,t){case"focusin":(wp(Et)||Et.contentEditable==="true")&&($r=Et,Zu=U,Qi=null);break;case"focusout":Qi=Zu=$r=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Dp(X,a,G);break;case"selectionchange":if(Bb)break;case"keydown":case"keyup":Dp(X,a,G)}var ot;if(Vu)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Lr?bp(t,a)&&(dt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(yp&&a.locale!=="ko"&&(Lr||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Lr&&(ot=dp()):(sa=G,qu="value"in sa?sa.value:sa.textContent,Lr=!0)),Et=us(U,dt),0<Et.length&&(dt=new mp(dt,t,null,a,G),X.push({event:dt,listeners:Et}),ot?dt.data=ot:(ot=Sp(a),ot!==null&&(dt.data=ot)))),(ot=Rb?zb(t,a):Nb(t,a))&&(dt=us(U,"onBeforeInput"),0<dt.length&&(Et=new mp("onBeforeInput","beforeinput",null,a,G),X.push({event:Et,listeners:dt}),Et.data=ot)),w2(X,t,U,a,G)}ag(X,e)})}function El(t,e,a){return{instance:t,listener:e,currentTarget:a}}function us(t,e){for(var a=e+"Capture",l=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=qi(t,a),s!=null&&l.unshift(El(t,s,c)),s=qi(t,e),s!=null&&l.push(El(t,s,c))),t.tag===3)return l;t=t.return}return[]}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ig(t,e,a,l,s){for(var c=e._reactName,y=[];a!==null&&a!==l;){var b=a,_=b.alternate,U=b.stateNode;if(b=b.tag,_!==null&&_===l)break;b!==5&&b!==26&&b!==27||U===null||(_=U,s?(U=qi(a,c),U!=null&&y.unshift(El(a,U,_))):s||(U=qi(a,c),U!=null&&y.push(El(a,U,_)))),a=a.return}y.length!==0&&t.push({event:e,listeners:y})}var A2=/\r\n?/g,j2=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(A2,`
`).replace(j2,"")}function og(t,e){return e=lg(e),lg(t)===e}function cs(){}function Ht(t,e,a,l,s,c){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Mr(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Mr(t,""+l);break;case"className":mo(t,"class",l);break;case"tabIndex":mo(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mo(t,a,l);break;case"style":up(t,l,c);break;case"data":if(e!=="object"){mo(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=vo(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ht(t,e,"name",s.name,s,null),Ht(t,e,"formEncType",s.formEncType,s,null),Ht(t,e,"formMethod",s.formMethod,s,null),Ht(t,e,"formTarget",s.formTarget,s,null)):(Ht(t,e,"encType",s.encType,s,null),Ht(t,e,"method",s.method,s,null),Ht(t,e,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=vo(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=cs);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=vo(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":_t("beforetoggle",t),_t("toggle",t),po(t,"popover",l);break;case"xlinkActuate":kn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":po(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ab.get(a)||a,po(t,a,l))}}function Sf(t,e,a,l,s,c){switch(a){case"style":up(t,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Mr(t,l):(typeof l=="number"||typeof l=="bigint")&&Mr(t,""+l);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"onClick":l!=null&&(t.onclick=cs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jh.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),c=t[Ce]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof l=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,s);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):po(t,a,l)}}}function be(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var l=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var y=a[c];if(y!=null)switch(c){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ht(t,e,c,y,a,null)}}s&&Ht(t,e,"srcSet",a.srcSet,a,null),l&&Ht(t,e,"src",a.src,a,null);return;case"input":_t("invalid",t);var b=c=y=s=null,_=null,U=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":s=G;break;case"type":y=G;break;case"checked":_=G;break;case"defaultChecked":U=G;break;case"value":c=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,e));break;default:Ht(t,e,l,G,a,null)}}ip(t,c,b,_,U,y,s,!1),go(t);return;case"select":_t("invalid",t),l=y=c=null;for(s in a)if(a.hasOwnProperty(s)&&(b=a[s],b!=null))switch(s){case"value":c=b;break;case"defaultValue":y=b;break;case"multiple":l=b;default:Ht(t,e,s,b,a,null)}e=c,a=y,t.multiple=!!l,e!=null?Dr(t,!!l,e,!1):a!=null&&Dr(t,!!l,a,!0);return;case"textarea":_t("invalid",t),c=s=l=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":l=b;break;case"defaultValue":s=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Ht(t,e,y,b,a,null)}op(t,l,s,c),go(t);return;case"option":for(_ in a)if(a.hasOwnProperty(_)&&(l=a[_],l!=null))switch(_){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ht(t,e,_,l,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(l=0;l<wl.length;l++)_t(wl[l],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ht(t,e,U,l,a,null)}return;default:if(Uu(e)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Sf(t,e,G,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ht(t,e,b,l,a,null))}function O2(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,y=null,b=null,_=null,U=null,G=null;for($ in a){var X=a[$];if(a.hasOwnProperty($)&&X!=null)switch($){case"checked":break;case"value":break;case"defaultValue":_=X;default:l.hasOwnProperty($)||Ht(t,e,$,null,l,X)}}for(var L in l){var $=l[L];if(X=a[L],l.hasOwnProperty(L)&&($!=null||X!=null))switch(L){case"type":c=$;break;case"name":s=$;break;case"checked":U=$;break;case"defaultChecked":G=$;break;case"value":y=$;break;case"defaultValue":b=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,e));break;default:$!==X&&Ht(t,e,L,$,l,X)}}Mu(t,y,b,_,U,G,c,s);return;case"select":$=y=b=L=null;for(c in a)if(_=a[c],a.hasOwnProperty(c)&&_!=null)switch(c){case"value":break;case"multiple":$=_;default:l.hasOwnProperty(c)||Ht(t,e,c,null,l,_)}for(s in l)if(c=l[s],_=a[s],l.hasOwnProperty(s)&&(c!=null||_!=null))switch(s){case"value":L=c;break;case"defaultValue":b=c;break;case"multiple":y=c;default:c!==_&&Ht(t,e,s,c,l,_)}e=b,a=y,l=$,L!=null?Dr(t,!!a,L,!1):!!l!=!!a&&(e!=null?Dr(t,!!a,e,!0):Dr(t,!!a,a?[]:"",!1));return;case"textarea":$=L=null;for(b in a)if(s=a[b],a.hasOwnProperty(b)&&s!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ht(t,e,b,null,l,s)}for(y in l)if(s=l[y],c=a[y],l.hasOwnProperty(y)&&(s!=null||c!=null))switch(y){case"value":L=s;break;case"defaultValue":$=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Ht(t,e,y,s,l,c)}lp(t,L,$);return;case"option":for(var pt in a)if(L=a[pt],a.hasOwnProperty(pt)&&L!=null&&!l.hasOwnProperty(pt))switch(pt){case"selected":t.selected=!1;break;default:Ht(t,e,pt,null,l,L)}for(_ in l)if(L=l[_],$=a[_],l.hasOwnProperty(_)&&L!==$&&(L!=null||$!=null))switch(_){case"selected":t.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ht(t,e,_,L,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)L=a[ft],a.hasOwnProperty(ft)&&L!=null&&!l.hasOwnProperty(ft)&&Ht(t,e,ft,null,l,L);for(U in l)if(L=l[U],$=a[U],l.hasOwnProperty(U)&&L!==$&&(L!=null||$!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,e));break;default:Ht(t,e,U,L,l,$)}return;default:if(Uu(e)){for(var Bt in a)L=a[Bt],a.hasOwnProperty(Bt)&&L!==void 0&&!l.hasOwnProperty(Bt)&&Sf(t,e,Bt,void 0,l,L);for(G in l)L=l[G],$=a[G],!l.hasOwnProperty(G)||L===$||L===void 0&&$===void 0||Sf(t,e,G,L,l,$);return}}for(var M in a)L=a[M],a.hasOwnProperty(M)&&L!=null&&!l.hasOwnProperty(M)&&Ht(t,e,M,null,l,L);for(X in l)L=l[X],$=a[X],!l.hasOwnProperty(X)||L===$||L==null&&$==null||Ht(t,e,X,L,l,$)}var wf=null,Ef=null;function fs(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=null;function C2(){var t=window.event;return t&&t.type==="popstate"?t===_f?!1:(_f=t,!0):(_f=null,!1)}var cg=typeof setTimeout=="function"?setTimeout:void 0,R2=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,z2=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(N2)}:cg;function N2(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function dg(t,e){var a=e,l=0,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<l&&8>l){a=l;var y=t.ownerDocument;if(a&1&&Tl(y.documentElement),a&2&&Tl(y.body),a&4)for(a=y.head,Tl(a),y=a.firstChild;y;){var b=y.nextSibling,_=y.nodeName;y[Hi]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(s===0){t.removeChild(c),Nl(e);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:l=a.charCodeAt(0)-48;else l=0;a=c}while(a);Nl(e)}function Af(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),Ru(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function D2(t,e,a,l){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Hi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=dn(t.nextSibling),t===null)break}return null}function M2(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=dn(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function k2(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Of=null;function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function pg(t,e,a){switch(e=fs(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Tl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ru(t)}var ln=new Map,mg=new Set;function ds(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qn=K.d;K.d={f:U2,r:L2,D:$2,C:H2,L:B2,m:q2,X:F2,S:Y2,M:G2};function U2(){var t=Qn.f(),e=as();return t||e}function L2(t){var e=Cr(t);e!==null&&e.tag===5&&e.type==="form"?km(e):Qn.r(t)}var ui=typeof document>"u"?null:document;function gg(t,e,a){var l=ui;if(l&&typeof e=="string"&&e){var s=Je(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),mg.has(s)||(mg.add(s),t={rel:t,crossOrigin:a,href:e},l.querySelector(s)===null&&(e=l.createElement("link"),be(e,"link",t),fe(e),l.head.appendChild(e)))}}function $2(t){Qn.D(t),gg("dns-prefetch",t,null)}function H2(t,e){Qn.C(t,e),gg("preconnect",t,e)}function B2(t,e,a){Qn.L(t,e,a);var l=ui;if(l&&t&&e){var s='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Je(a.imageSizes)+'"]')):s+='[href="'+Je(t)+'"]';var c=s;switch(e){case"style":c=ci(t);break;case"script":c=fi(t)}ln.has(c)||(t=v({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ln.set(c,t),l.querySelector(s)!==null||e==="style"&&l.querySelector(_l(c))||e==="script"&&l.querySelector(Al(c))||(e=l.createElement("link"),be(e,"link",t),fe(e),l.head.appendChild(e)))}}function q2(t,e){Qn.m(t,e);var a=ui;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Je(l)+'"][href="'+Je(t)+'"]',c=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fi(t)}if(!ln.has(c)&&(t=v({rel:"modulepreload",href:t},e),ln.set(c,t),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(c)))return}l=a.createElement("link"),be(l,"link",t),fe(l),a.head.appendChild(l)}}}function Y2(t,e,a){Qn.S(t,e,a);var l=ui;if(l&&t){var s=Rr(l).hoistableStyles,c=ci(t);e=e||"default";var y=s.get(c);if(!y){var b={loading:0,preload:null};if(y=l.querySelector(_l(c)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ln.get(c))&&Cf(t,a);var _=y=l.createElement("link");fe(_),be(_,"link",t),_._p=new Promise(function(U,G){_.onload=U,_.onerror=G}),_.addEventListener("load",function(){b.loading|=1}),_.addEventListener("error",function(){b.loading|=2}),b.loading|=4,hs(y,e,l)}y={type:"stylesheet",instance:y,count:1,state:b},s.set(c,y)}}}function F2(t,e){Qn.X(t,e);var a=ui;if(a&&t){var l=Rr(a).hoistableScripts,s=fi(t),c=l.get(s);c||(c=a.querySelector(Al(s)),c||(t=v({src:t,async:!0},e),(e=ln.get(s))&&Rf(t,e),c=a.createElement("script"),fe(c),be(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function G2(t,e){Qn.M(t,e);var a=ui;if(a&&t){var l=Rr(a).hoistableScripts,s=fi(t),c=l.get(s);c||(c=a.querySelector(Al(s)),c||(t=v({src:t,async:!0,type:"module"},e),(e=ln.get(s))&&Rf(t,e),c=a.createElement("script"),fe(c),be(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(s,c))}}function yg(t,e,a,l){var s=(s=st.current)?ds(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ci(a.href),a=Rr(s).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ci(a.href);var c=Rr(s).hoistableStyles,y=c.get(t);if(y||(s=s.ownerDocument||s,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,y),(c=s.querySelector(_l(t)))&&!c._p&&(y.instance=c,y.state.loading=5),ln.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ln.set(t,a),c||P2(s,t,a,y.state))),e&&l===null)throw Error(o(528,""));return y}if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fi(a),a=Rr(s).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ci(t){return'href="'+Je(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function vg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function P2(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),be(e,"link",a),fe(e),t.head.appendChild(e))}function fi(t){return'[src="'+Je(t)+'"]'}function Al(t){return"script[async]"+t}function xg(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Je(a.href)+'"]');if(l)return e.instance=l,fe(l),l;var s=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),fe(l),be(l,"style",s),hs(l,a.precedence,t),e.instance=l;case"stylesheet":s=ci(a.href);var c=t.querySelector(_l(s));if(c)return e.state.loading|=4,e.instance=c,fe(c),c;l=vg(a),(s=ln.get(s))&&Cf(l,s),c=(t.ownerDocument||t).createElement("link"),fe(c);var y=c;return y._p=new Promise(function(b,_){y.onload=b,y.onerror=_}),be(c,"link",l),e.state.loading|=4,hs(c,a.precedence,t),e.instance=c;case"script":return c=fi(a.src),(s=t.querySelector(Al(c)))?(e.instance=s,fe(s),s):(l=a,(s=ln.get(c))&&(l=v({},a),Rf(l,s)),t=t.ownerDocument||t,s=t.createElement("script"),fe(s),be(s,"link",l),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,hs(l,a.precedence,t));return e.instance}function hs(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,c=s,y=0;y<l.length;y++){var b=l[y];if(b.dataset.precedence===e)c=b;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Cf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Rf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ps=null;function bg(t,e,a){if(ps===null){var l=new Map,s=ps=new Map;s.set(a,l)}else s=ps,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var c=a[s];if(!(c[Hi]||c[we]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var y=c.getAttribute(e)||"";y=t+y;var b=l.get(y);b?b.push(c):l.set(y,[c])}}return l}function Sg(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function V2(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var jl=null;function X2(){}function I2(t,e,a){if(jl===null)throw Error(o(475));var l=jl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=ci(a.href),c=t.querySelector(_l(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ms.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=c,fe(c);return}c=t.ownerDocument||t,a=vg(a),(s=ln.get(s))&&Cf(a,s),c=c.createElement("link"),fe(c);var y=c;y._p=new Promise(function(b,_){y.onload=b,y.onerror=_}),be(c,"link",a),e.instance=c}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=ms.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function Q2(){if(jl===null)throw Error(o(475));var t=jl;return t.stylesheets&&t.count===0&&zf(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&zf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ms(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gs=null;function zf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gs=new Map,e.forEach(Z2,t),gs=null,ms.call(t))}function Z2(t,e){if(!(e.state.loading&4)){var a=gs.get(t);if(a)var l=a.get(null);else{a=new Map,gs.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var y=s[c];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}s=e.instance,y=s.getAttribute("data-precedence"),c=a.get(y)||l,c===l&&a.set(null,s),a.set(y,s),this.count++,l=ms.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Ol={$$typeof:D,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function K2(t,e,a,l,s,c,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.hiddenUpdates=Au(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Eg(t,e,a,l,s,c,y,b,_,U,G,X){return t=new K2(t,e,a,y,b,_,U,X),e=1,c===!0&&(e|=24),c=He(3,null,null,e),t.current=c,c.stateNode=t,e=fc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:e},mc(c),t}function Tg(t){return t?(t=Yr,t):Yr}function _g(t,e,a,l,s,c){s=Tg(s),l.context===null?l.context=s:l.pendingContext=s,l=fa(e),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=da(t,l,e),a!==null&&(Ge(a,t,e),rl(a,t,e))}function Ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Nf(t,e){Ag(t,e),(t=t.alternate)&&Ag(t,e)}function jg(t){if(t.tag===13){var e=qr(t,67108864);e!==null&&Ge(e,t,67108864),Nf(t,67108864)}}var ys=!0;function J2(t,e,a,l){var s=F.T;F.T=null;var c=K.p;try{K.p=2,Df(t,e,a,l)}finally{K.p=c,F.T=s}}function W2(t,e,a,l){var s=F.T;F.T=null;var c=K.p;try{K.p=8,Df(t,e,a,l)}finally{K.p=c,F.T=s}}function Df(t,e,a,l){if(ys){var s=Mf(l);if(s===null)bf(t,e,l,vs,a),Cg(t,l);else if(eS(s,t,e,a,l))l.stopPropagation();else if(Cg(t,l),e&4&&-1<tS.indexOf(t)){for(;s!==null;){var c=Cr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var y=qa(c.pendingLanes);if(y!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var _=1<<31-Kt(y);b.entanglements[1]|=_,y&=~_}Tn(c),(Ut&6)===0&&(es=Ze()+500,Sl(0))}}break;case 13:b=qr(c,2),b!==null&&Ge(b,c,2),as(),Nf(c,2)}if(c=Mf(l),c===null&&bf(t,e,l,vs,a),c===s)break;s=c}s!==null&&l.stopPropagation()}else bf(t,e,l,null,a)}}function Mf(t){return t=$u(t),kf(t)}var vs=null;function kf(t){if(vs=null,t=Or(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vs=t,null}function Og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tu()){case Tr:return 2;case fo:return 8;case _r:case B:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Uf=!1,_a=null,Aa=null,ja=null,Cl=new Map,Rl=new Map,Oa=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cg(t,e){switch(t){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(e.pointerId)}}function zl(t,e,a,l,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[s]},e!==null&&(e=Cr(e),e!==null&&jg(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function eS(t,e,a,l,s){switch(e){case"focusin":return _a=zl(_a,t,e,a,l,s),!0;case"dragenter":return Aa=zl(Aa,t,e,a,l,s),!0;case"mouseover":return ja=zl(ja,t,e,a,l,s),!0;case"pointerover":var c=s.pointerId;return Cl.set(c,zl(Cl.get(c)||null,t,e,a,l,s)),!0;case"gotpointercapture":return c=s.pointerId,Rl.set(c,zl(Rl.get(c)||null,t,e,a,l,s)),!0}return!1}function Rg(t){var e=Or(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Ix(t.priority,function(){if(a.tag===13){var l=Fe();l=ju(l);var s=qr(a,l);s!==null&&Ge(s,a,l),Nf(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Mf(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Lu=l,a.target.dispatchEvent(l),Lu=null}else return e=Cr(a),e!==null&&jg(e),t.blockedOn=a,!1;e.shift()}return!0}function zg(t,e,a){xs(t)&&a.delete(e)}function nS(){Uf=!1,_a!==null&&xs(_a)&&(_a=null),Aa!==null&&xs(Aa)&&(Aa=null),ja!==null&&xs(ja)&&(ja=null),Cl.forEach(zg),Rl.forEach(zg)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nS)))}var Ss=null;function Ng(t){Ss!==t&&(Ss=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ss===t&&(Ss=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],s=t[e+2];if(typeof l!="function"){if(kf(l||a)===null)continue;break}var c=Cr(a);c!==null&&(t.splice(e,3),e-=3,Mc(c,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function Nl(t){function e(_){return bs(_,t)}_a!==null&&bs(_a,t),Aa!==null&&bs(Aa,t),ja!==null&&bs(ja,t),Cl.forEach(e),Rl.forEach(e);for(var a=0;a<Oa.length;a++){var l=Oa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)Rg(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],c=a[l+1],y=s[Ce]||null;if(typeof c=="function")y||Ng(a);else if(y){var b=null;if(c&&c.hasAttribute("formAction")){if(s=c,y=c[Ce]||null)b=y.formAction;else if(kf(s)!==null)continue}else b=y.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Ng(a)}}}function Lf(t){this._internalRoot=t}ws.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,l=Fe();_g(a,l,t,e,null,null)},ws.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_g(t.current,2,null,t,null,null),as(),e[jr]=null}};function ws(t){this._internalRoot=t}ws.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qh();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Oa.length&&e!==0&&e<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&Rg(t)}};var Dg=r.version;if(Dg!=="19.1.0")throw Error(o(527,Dg,"19.1.0"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=h(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var aS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{gt=Es.inject(aS),yt=Es}catch{}}return Ml.createRoot=function(t,e){if(!u(t))throw Error(o(299));var a=!1,l="",s=Qm,c=Zm,y=Km,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=Eg(t,1,!1,null,null,a,l,s,c,y,b,null),t[jr]=e.current,xf(t),new Lf(e)},Ml.hydrateRoot=function(t,e,a){if(!u(t))throw Error(o(299));var l=!1,s="",c=Qm,y=Zm,b=Km,_=null,U=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(_=a.unstable_transitionCallbacks),a.formState!==void 0&&(U=a.formState)),e=Eg(t,1,!0,e,a??null,l,s,c,y,b,_,U),e.context=Tg(null),a=e.current,l=Fe(),l=ju(l),s=fa(l),s.callback=null,da(a,s,l),a=l,e.current.lanes=a,$i(e,a),Tn(e),t[jr]=e.current,xf(t),new ws(e)},Ml.version="19.1.0",Ml}var Fg;function pS(){if(Fg)return Bf.exports;Fg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Bf.exports=hS(),Bf.exports}var mS=pS(),kl={},Gg;function gS(){if(Gg)return kl;Gg=1,Object.defineProperty(kl,"__esModule",{value:!0}),kl.parse=d,kl.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,E){const j=new f,O=x.length;if(O<2)return j;const R=(E==null?void 0:E.decode)||v;let w=0;do{const z=x.indexOf("=",w);if(z===-1)break;const D=x.indexOf(";",w),Y=D===-1?O:D;if(z>Y){w=x.lastIndexOf(";",z-1)+1;continue}const A=m(x,w,z),q=h(x,z,A),H=x.slice(A,q);if(j[H]===void 0){let W=m(x,z+1,Y),rt=h(x,Y,W);const jt=R(x.slice(W,rt));j[H]=jt}w=Y+1}while(w<O);return j}function m(x,E,j){do{const O=x.charCodeAt(E);if(O!==32&&O!==9)return E}while(++E<j);return j}function h(x,E,j){for(;E>j;){const O=x.charCodeAt(--E);if(O!==32&&O!==9)return E+1}return j}function p(x,E,j){const O=(j==null?void 0:j.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const R=O(E);if(!r.test(R))throw new TypeError(`argument val is invalid: ${E}`);let w=x+"="+R;if(!j)return w;if(j.maxAge!==void 0){if(!Number.isInteger(j.maxAge))throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);w+="; Max-Age="+j.maxAge}if(j.domain){if(!i.test(j.domain))throw new TypeError(`option domain is invalid: ${j.domain}`);w+="; Domain="+j.domain}if(j.path){if(!o.test(j.path))throw new TypeError(`option path is invalid: ${j.path}`);w+="; Path="+j.path}if(j.expires){if(!S(j.expires)||!Number.isFinite(j.expires.valueOf()))throw new TypeError(`option expires is invalid: ${j.expires}`);w+="; Expires="+j.expires.toUTCString()}if(j.httpOnly&&(w+="; HttpOnly"),j.secure&&(w+="; Secure"),j.partitioned&&(w+="; Partitioned"),j.priority)switch(typeof j.priority=="string"?j.priority.toLowerCase():void 0){case"low":w+="; Priority=Low";break;case"medium":w+="; Priority=Medium";break;case"high":w+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${j.priority}`)}if(j.sameSite)switch(typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite){case!0:case"strict":w+="; SameSite=Strict";break;case"lax":w+="; SameSite=Lax";break;case"none":w+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${j.sameSite}`)}return w}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function S(x){return u.call(x)==="[object Date]"}return kl}gS();var Pg="popstate";function yS(n={}){function r(o,u){let{pathname:f,search:d,hash:m}=o.location;return vd("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(o,u){return typeof u=="string"?u:Vl(u)}return xS(r,i,null,n)}function Zt(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function yn(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function vS(){return Math.random().toString(36).substring(2,10)}function Vg(n,r){return{usr:n.state,key:n.key,idx:r}}function vd(n,r,i=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?ji(r):r,state:i,key:r&&r.key||o||vS()}}function Vl({pathname:n="/",search:r="",hash:i=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ji(n){let r={};if(n){let i=n.indexOf("#");i>=0&&(r.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(r.search=n.substring(o),n=n.substring(0,o)),n&&(r.pathname=n)}return r}function xS(n,r,i,o={}){let{window:u=document.defaultView,v5Compat:f=!1}=o,d=u.history,m="POP",h=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function S(){m="POP";let R=v(),w=R==null?null:R-p;p=R,h&&h({action:m,location:O.location,delta:w})}function x(R,w){m="PUSH";let z=vd(O.location,R,w);p=v()+1;let D=Vg(z,p),Y=O.createHref(z);try{d.pushState(D,"",Y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;u.location.assign(Y)}f&&h&&h({action:m,location:O.location,delta:1})}function E(R,w){m="REPLACE";let z=vd(O.location,R,w);p=v();let D=Vg(z,p),Y=O.createHref(z);d.replaceState(D,"",Y),f&&h&&h({action:m,location:O.location,delta:0})}function j(R){let w=u.location.origin!=="null"?u.location.origin:u.location.href,z=typeof R=="string"?R:Vl(R);return z=z.replace(/ $/,"%20"),Zt(w,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,w)}let O={get action(){return m},get location(){return n(u,d)},listen(R){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Pg,S),h=R,()=>{u.removeEventListener(Pg,S),h=null}},createHref(R){return r(u,R)},createURL:j,encodeLocation(R){let w=j(R);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:x,replace:E,go(R){return d.go(R)}};return O}function k1(n,r,i="/"){return bS(n,r,i,!1)}function bS(n,r,i,o){let u=typeof r=="string"?ji(r):r,f=ta(u.pathname||"/",i);if(f==null)return null;let d=U1(n);SS(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let p=NS(f);m=RS(d[h],p,o)}return m}function U1(n,r=[],i=[],o=""){let u=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Zt(h.relativePath.startsWith(o),`Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(o.length));let p=Wn([o,h.relativePath]),v=i.concat(h);f.children&&f.children.length>0&&(Zt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),U1(f.children,r,v,p)),!(f.path==null&&!f.index)&&r.push({path:p,score:OS(p,f.index),routesMeta:v})};return n.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,d);else for(let h of L1(f.path))u(f,d,h)}),r}function L1(n){let r=n.split("/");if(r.length===0)return[];let[i,...o]=r,u=i.endsWith("?"),f=i.replace(/\?$/,"");if(o.length===0)return u?[f,""]:[f];let d=L1(o.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&m.push(...d),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function SS(n){n.sort((r,i)=>r.score!==i.score?i.score-r.score:CS(r.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var wS=/^:[\w-]+$/,ES=3,TS=2,_S=1,AS=10,jS=-2,Xg=n=>n==="*";function OS(n,r){let i=n.split("/"),o=i.length;return i.some(Xg)&&(o+=jS),r&&(o+=TS),i.filter(u=>!Xg(u)).reduce((u,f)=>u+(wS.test(f)?ES:f===""?_S:AS),o)}function CS(n,r){return n.length===r.length&&n.slice(0,-1).every((o,u)=>o===r[u])?n[n.length-1]-r[r.length-1]:0}function RS(n,r,i=!1){let{routesMeta:o}=n,u={},f="/",d=[];for(let m=0;m<o.length;++m){let h=o[m],p=m===o.length-1,v=f==="/"?r:r.slice(f.length)||"/",S=Gs({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!S&&p&&i&&!o[o.length-1].route.index&&(S=Gs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!S)return null;Object.assign(u,S.params),d.push({params:u,pathname:Wn([f,S.pathname]),pathnameBase:US(Wn([f,S.pathnameBase])),route:x}),S.pathnameBase!=="/"&&(f=Wn([f,S.pathnameBase]))}return d}function Gs(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=zS(n.path,n.caseSensitive,n.end),u=r.match(i);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:o.reduce((p,{paramName:v,isOptional:S},x)=>{if(v==="*"){let j=m[x]||"";d=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const E=m[x];return S&&!E?p[v]=void 0:p[v]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function zS(n,r=!1,i=!0){yn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(o.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),o]}function NS(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return yn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function ta(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function DS(n,r="/"){let{pathname:i,search:o="",hash:u=""}=typeof n=="string"?ji(n):n;return{pathname:i?i.startsWith("/")?i:MS(i,r):r,search:LS(o),hash:$S(u)}}function MS(n,r){let i=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function Gf(n,r,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kS(n){return n.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function oh(n){let r=kS(n);return r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase)}function sh(n,r,i,o=!1){let u;typeof n=="string"?u=ji(n):(u={...n},Zt(!u.pathname||!u.pathname.includes("?"),Gf("?","pathname","search",u)),Zt(!u.pathname||!u.pathname.includes("#"),Gf("#","pathname","hash",u)),Zt(!u.search||!u.search.includes("#"),Gf("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,m;if(d==null)m=i;else{let S=r.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),S-=1;u.pathname=x.join("/")}m=S>=0?r[S]:"/"}let h=DS(u,m),p=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}var Wn=n=>n.join("/").replace(/\/\/+/g,"/"),US=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),LS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$S=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function HS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var $1=["POST","PUT","PATCH","DELETE"];new Set($1);var BS=["GET",...$1];new Set(BS);var Oi=T.createContext(null);Oi.displayName="DataRouter";var eu=T.createContext(null);eu.displayName="DataRouterState";var H1=T.createContext({isTransitioning:!1});H1.displayName="ViewTransition";var qS=T.createContext(new Map);qS.displayName="Fetchers";var YS=T.createContext(null);YS.displayName="Await";var vn=T.createContext(null);vn.displayName="Navigation";var eo=T.createContext(null);eo.displayName="Location";var zn=T.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var uh=T.createContext(null);uh.displayName="RouteError";function FS(n,{relative:r}={}){Zt(Ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=T.useContext(vn),{hash:u,pathname:f,search:d}=no(n,{relative:r}),m=f;return i!=="/"&&(m=f==="/"?i:Wn([i,f])),o.createHref({pathname:m,search:d,hash:u})}function Ci(){return T.useContext(eo)!=null}function un(){return Zt(Ci(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(eo).location}var B1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q1(n){T.useContext(vn).static||T.useLayoutEffect(n)}function ye(){let{isDataRoute:n}=T.useContext(zn);return n?nw():GS()}function GS(){Zt(Ci(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(Oi),{basename:r,navigator:i}=T.useContext(vn),{matches:o}=T.useContext(zn),{pathname:u}=un(),f=JSON.stringify(oh(o)),d=T.useRef(!1);return q1(()=>{d.current=!0}),T.useCallback((h,p={})=>{if(yn(d.current,B1),!d.current)return;if(typeof h=="number"){i.go(h);return}let v=sh(h,JSON.parse(f),u,p.relative==="path");n==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:Wn([r,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[r,i,f,u,n])}T.createContext(null);function no(n,{relative:r}={}){let{matches:i}=T.useContext(zn),{pathname:o}=un(),u=JSON.stringify(oh(i));return T.useMemo(()=>sh(n,JSON.parse(u),o,r==="path"),[n,u,o,r])}function PS(n,r){return Y1(n,r)}function Y1(n,r,i,o){var z;Zt(Ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=T.useContext(vn),{matches:d}=T.useContext(zn),m=d[d.length-1],h=m?m.params:{},p=m?m.pathname:"/",v=m?m.pathnameBase:"/",S=m&&m.route;{let D=S&&S.path||"";F1(p,!S||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=un(),E;if(r){let D=typeof r=="string"?ji(r):r;Zt(v==="/"||((z=D.pathname)==null?void 0:z.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),E=D}else E=x;let j=E.pathname||"/",O=j;if(v!=="/"){let D=v.replace(/^\//,"").split("/");O="/"+j.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=!f&&i&&i.matches&&i.matches.length>0?i.matches:k1(n,{pathname:O});yn(S||R!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),yn(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ZS(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},h,D.params),pathname:Wn([v,u.encodeLocation?u.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:Wn([v,u.encodeLocation?u.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,i,o);return r&&w?T.createElement(eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},w):w}function VS(){let n=ew(),r=HS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},r),i?T.createElement("pre",{style:u},i):null,d)}var XS=T.createElement(VS,null),IS=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?T.createElement(zn.Provider,{value:this.props.routeContext},T.createElement(uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QS({routeContext:n,match:r,children:i}){let o=T.useContext(Oi);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(zn.Provider,{value:n},i)}function ZS(n,r=[],i=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,f=i==null?void 0:i.errors;if(f!=null){let h=u.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Zt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,m=-1;if(i)for(let h=0;h<u.length;h++){let p=u[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=h),p.route.id){let{loaderData:v,errors:S}=i,x=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||x){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((h,p,v)=>{let S,x=!1,E=null,j=null;i&&(S=f&&p.route.id?f[p.route.id]:void 0,E=p.route.errorElement||XS,d&&(m<0&&v===0?(F1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,j=null):m===v&&(x=!0,j=p.route.hydrateFallbackElement||null)));let O=r.concat(u.slice(0,v+1)),R=()=>{let w;return S?w=E:x?w=j:p.route.Component?w=T.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=h,T.createElement(QS,{match:p,routeContext:{outlet:h,matches:O,isDataRoute:i!=null},children:w})};return i&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?T.createElement(IS,{location:i.location,revalidation:i.revalidation,component:E,error:S,children:R(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):R()},null)}function ch(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KS(n){let r=T.useContext(Oi);return Zt(r,ch(n)),r}function JS(n){let r=T.useContext(eu);return Zt(r,ch(n)),r}function WS(n){let r=T.useContext(zn);return Zt(r,ch(n)),r}function fh(n){let r=WS(n),i=r.matches[r.matches.length-1];return Zt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function tw(){return fh("useRouteId")}function ew(){var o;let n=T.useContext(uh),r=JS("useRouteError"),i=fh("useRouteError");return n!==void 0?n:(o=r.errors)==null?void 0:o[i]}function nw(){let{router:n}=KS("useNavigate"),r=fh("useNavigate"),i=T.useRef(!1);return q1(()=>{i.current=!0}),T.useCallback(async(u,f={})=>{yn(i.current,B1),i.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:r,...f}))},[n,r])}var Ig={};function F1(n,r,i){!r&&!Ig[n]&&(Ig[n]=!0,yn(!1,i))}T.memo(aw);function aw({routes:n,future:r,state:i}){return Y1(n,void 0,i,r)}function G1({to:n,replace:r,state:i,relative:o}){Zt(Ci(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=T.useContext(vn);yn(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=T.useContext(zn),{pathname:d}=un(),m=ye(),h=sh(n,oh(f),d,o==="path"),p=JSON.stringify(h);return T.useEffect(()=>{m(JSON.parse(p),{replace:r,state:i,relative:o})},[m,p,o,r,i]),null}function hn(n){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rw({basename:n="/",children:r=null,location:i,navigationType:o="POP",navigator:u,static:f=!1}){Zt(!Ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=T.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof i=="string"&&(i=ji(i));let{pathname:h="/",search:p="",hash:v="",state:S=null,key:x="default"}=i,E=T.useMemo(()=>{let j=ta(h,d);return j==null?null:{location:{pathname:j,search:p,hash:v,state:S,key:x},navigationType:o}},[d,h,p,v,S,x,o]);return yn(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:T.createElement(vn.Provider,{value:m},T.createElement(eo.Provider,{children:r,value:E}))}function iw({children:n,location:r}){return PS(xd(n),r)}function xd(n,r=[]){let i=[];return T.Children.forEach(n,(o,u)=>{if(!T.isValidElement(o))return;let f=[...r,u];if(o.type===T.Fragment){i.push.apply(i,xd(o.props.children,f));return}Zt(o.type===hn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=xd(o.props.children,f)),i.push(d)}),i}var Ds="get",Ms="application/x-www-form-urlencoded";function nu(n){return n!=null&&typeof n.tagName=="string"}function lw(n){return nu(n)&&n.tagName.toLowerCase()==="button"}function ow(n){return nu(n)&&n.tagName.toLowerCase()==="form"}function sw(n){return nu(n)&&n.tagName.toLowerCase()==="input"}function uw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cw(n,r){return n.button===0&&(!r||r==="_self")&&!uw(n)}var Ts=null;function fw(){if(Ts===null)try{new FormData(document.createElement("form"),0),Ts=!1}catch{Ts=!0}return Ts}var dw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pf(n){return n!=null&&!dw.has(n)?(yn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ms}"`),null):n}function hw(n,r){let i,o,u,f,d;if(ow(n)){let m=n.getAttribute("action");o=m?ta(m,r):null,i=n.getAttribute("method")||Ds,u=Pf(n.getAttribute("enctype"))||Ms,f=new FormData(n)}else if(lw(n)||sw(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(o=h?ta(h,r):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Ds,u=Pf(n.getAttribute("formenctype"))||Pf(m.getAttribute("enctype"))||Ms,f=new FormData(m,n),!fw()){let{name:p,type:v,value:S}=n;if(v==="image"){let x=p?`${p}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else p&&f.append(p,S)}}else{if(nu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ds,o=null,u=Ms,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:o,method:i.toLowerCase(),encType:u,formData:f,body:d}}function dh(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function pw(n,r){if(n.id in r)return r[n.id];try{let i=await import(n.module);return r[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mw(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function gw(n,r,i){let o=await Promise.all(n.map(async u=>{let f=r.routes[u.route.id];if(f){let d=await pw(f,i);return d.links?d.links():[]}return[]}));return bw(o.flat(1).filter(mw).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Qg(n,r,i,o,u,f){let d=(h,p)=>i[p]?h.route.id!==i[p].route.id:!0,m=(h,p)=>{var v;return i[p].pathname!==h.pathname||((v=i[p].route.path)==null?void 0:v.endsWith("*"))&&i[p].params["*"]!==h.params["*"]};return f==="assets"?r.filter((h,p)=>d(h,p)||m(h,p)):f==="data"?r.filter((h,p)=>{var S;let v=o.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function yw(n,r,{includeHydrateFallback:i}={}){return vw(n.map(o=>{let u=r.routes[o.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function vw(n){return[...new Set(n)]}function xw(n){let r={},i=Object.keys(n).sort();for(let o of i)r[o]=n[o];return r}function bw(n,r){let i=new Set;return new Set(r),n.reduce((o,u)=>{let f=JSON.stringify(xw(u));return i.has(f)||(i.add(f),o.push({key:f,link:u})),o},[])}var Sw=new Set([100,101,204,205]);function ww(n,r){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname="_root.data":r&&ta(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function P1(){let n=T.useContext(Oi);return dh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Ew(){let n=T.useContext(eu);return dh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var hh=T.createContext(void 0);hh.displayName="FrameworkContext";function V1(){let n=T.useContext(hh);return dh(n,"You must render this element inside a <HydratedRouter> element"),n}function Tw(n,r){let i=T.useContext(hh),[o,u]=T.useState(!1),[f,d]=T.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:v,onTouchStart:S}=r,x=T.useRef(null);T.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let O=w=>{w.forEach(z=>{d(z.isIntersecting)})},R=new IntersectionObserver(O,{threshold:.5});return x.current&&R.observe(x.current),()=>{R.disconnect()}}},[n]),T.useEffect(()=>{if(o){let O=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(O)}}},[o]);let E=()=>{u(!0)},j=()=>{u(!1),d(!1)};return i?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Ul(m,E),onBlur:Ul(h,j),onMouseEnter:Ul(p,E),onMouseLeave:Ul(v,j),onTouchStart:Ul(S,E)}]:[!1,x,{}]}function Ul(n,r){return i=>{n&&n(i),i.defaultPrevented||r(i)}}function _w({page:n,...r}){let{router:i}=P1(),o=T.useMemo(()=>k1(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?T.createElement(jw,{page:n,matches:o,...r}):null}function Aw(n){let{manifest:r,routeModules:i}=V1(),[o,u]=T.useState([]);return T.useEffect(()=>{let f=!1;return gw(n,r,i).then(d=>{f||u(d)}),()=>{f=!0}},[n,r,i]),o}function jw({page:n,matches:r,...i}){let o=un(),{manifest:u,routeModules:f}=V1(),{basename:d}=P1(),{loaderData:m,matches:h}=Ew(),p=T.useMemo(()=>Qg(n,r,h,u,o,"data"),[n,r,h,u,o]),v=T.useMemo(()=>Qg(n,r,h,u,o,"assets"),[n,r,h,u,o]),S=T.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let j=new Set,O=!1;if(r.forEach(w=>{var D;let z=u.routes[w.route.id];!z||!z.hasLoader||(!p.some(Y=>Y.route.id===w.route.id)&&w.route.id in m&&((D=f[w.route.id])!=null&&D.shouldRevalidate)||z.hasClientLoader?O=!0:j.add(w.route.id))}),j.size===0)return[];let R=ww(n,d);return O&&j.size>0&&R.searchParams.set("_routes",r.filter(w=>j.has(w.route.id)).map(w=>w.route.id).join(",")),[R.pathname+R.search]},[d,m,o,u,p,r,n,f]),x=T.useMemo(()=>yw(v,u),[v,u]),E=Aw(v);return T.createElement(T.Fragment,null,S.map(j=>T.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...i})),x.map(j=>T.createElement("link",{key:j,rel:"modulepreload",href:j,...i})),E.map(({key:j,link:O})=>T.createElement("link",{key:j,...O})))}function Ow(...n){return r=>{n.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X1&&(window.__reactRouterVersion="7.5.3")}catch{}function Cw({basename:n,children:r,window:i}){let o=T.useRef();o.current==null&&(o.current=yS({window:i,v5Compat:!0}));let u=o.current,[f,d]=T.useState({action:u.action,location:u.location}),m=T.useCallback(h=>{T.startTransition(()=>d(h))},[d]);return T.useLayoutEffect(()=>u.listen(m),[u,m]),T.createElement(rw,{basename:n,children:r,location:f.location,navigationType:f.action,navigator:u})}var I1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ao=T.forwardRef(function({onClick:r,discover:i="render",prefetch:o="none",relative:u,reloadDocument:f,replace:d,state:m,target:h,to:p,preventScrollReset:v,viewTransition:S,...x},E){let{basename:j}=T.useContext(vn),O=typeof p=="string"&&I1.test(p),R,w=!1;if(typeof p=="string"&&O&&(R=p,X1))try{let rt=new URL(window.location.href),jt=p.startsWith("//")?new URL(rt.protocol+p):new URL(p),ct=ta(jt.pathname,j);jt.origin===rt.origin&&ct!=null?p=ct+jt.search+jt.hash:w=!0}catch{yn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=FS(p,{relative:u}),[D,Y,A]=Tw(o,x),q=Dw(p,{replace:d,state:m,target:h,preventScrollReset:v,relative:u,viewTransition:S});function H(rt){r&&r(rt),rt.defaultPrevented||q(rt)}let W=T.createElement("a",{...x,...A,href:R||z,onClick:w||f?r:H,ref:Ow(E,Y),target:h,"data-discover":!O&&i==="render"?"true":void 0});return D&&!O?T.createElement(T.Fragment,null,W,T.createElement(_w,{page:z})):W});ao.displayName="Link";var Rw=T.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:o="",end:u=!1,style:f,to:d,viewTransition:m,children:h,...p},v){let S=no(d,{relative:p.relative}),x=un(),E=T.useContext(eu),{navigator:j,basename:O}=T.useContext(vn),R=E!=null&&$w(S)&&m===!0,w=j.encodeLocation?j.encodeLocation(S).pathname:S.pathname,z=x.pathname,D=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(z=z.toLowerCase(),D=D?D.toLowerCase():null,w=w.toLowerCase()),D&&O&&(D=ta(D,O)||D);const Y=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let A=z===w||!u&&z.startsWith(w)&&z.charAt(Y)==="/",q=D!=null&&(D===w||!u&&D.startsWith(w)&&D.charAt(w.length)==="/"),H={isActive:A,isPending:q,isTransitioning:R},W=A?r:void 0,rt;typeof o=="function"?rt=o(H):rt=[o,A?"active":null,q?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let jt=typeof f=="function"?f(H):f;return T.createElement(ao,{...p,"aria-current":W,className:rt,ref:v,style:jt,to:d,viewTransition:m},typeof h=="function"?h(H):h)});Rw.displayName="NavLink";var zw=T.forwardRef(({discover:n="render",fetcherKey:r,navigate:i,reloadDocument:o,replace:u,state:f,method:d=Ds,action:m,onSubmit:h,relative:p,preventScrollReset:v,viewTransition:S,...x},E)=>{let j=Uw(),O=Lw(m,{relative:p}),R=d.toLowerCase()==="get"?"get":"post",w=typeof m=="string"&&I1.test(m),z=D=>{if(h&&h(D),D.defaultPrevented)return;D.preventDefault();let Y=D.nativeEvent.submitter,A=(Y==null?void 0:Y.getAttribute("formmethod"))||d;j(Y||D.currentTarget,{fetcherKey:r,method:A,navigate:i,replace:u,state:f,relative:p,preventScrollReset:v,viewTransition:S})};return T.createElement("form",{ref:E,method:R,action:O,onSubmit:o?h:z,...x,"data-discover":!w&&n==="render"?"true":void 0})});zw.displayName="Form";function Nw(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(n){let r=T.useContext(Oi);return Zt(r,Nw(n)),r}function Dw(n,{target:r,replace:i,state:o,preventScrollReset:u,relative:f,viewTransition:d}={}){let m=ye(),h=un(),p=no(n,{relative:f});return T.useCallback(v=>{if(cw(v,r)){v.preventDefault();let S=i!==void 0?i:Vl(h)===Vl(p);m(n,{replace:S,state:o,preventScrollReset:u,relative:f,viewTransition:d})}},[h,m,p,i,o,r,n,u,f,d])}var Mw=0,kw=()=>`__${String(++Mw)}__`;function Uw(){let{router:n}=Q1("useSubmit"),{basename:r}=T.useContext(vn),i=tw();return T.useCallback(async(o,u={})=>{let{action:f,method:d,encType:m,formData:h,body:p}=hw(o,r);if(u.navigate===!1){let v=u.fetcherKey||kw();await n.fetch(v,i,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,r,i])}function Lw(n,{relative:r}={}){let{basename:i}=T.useContext(vn),o=T.useContext(zn);Zt(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),f={...no(n||".",{relative:r})},d=un();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(v=>v==="")){m.delete("index"),h.filter(S=>S).forEach(S=>m.append("index",S));let v=m.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:Wn([i,f.pathname])),Vl(f)}function $w(n,r={}){let i=T.useContext(H1);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Q1("useViewTransitionState"),u=no(n,{relative:r.relative});if(!i.isTransitioning)return!1;let f=ta(i.currentLocation.pathname,o)||i.currentLocation.pathname,d=ta(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Gs(u.pathname,d)!=null||Gs(u.pathname,f)!=null}new TextEncoder;[...Sw];var Ue=function(){return Ue=Object.assign||function(r){for(var i,o=1,u=arguments.length;o<u;o++){i=arguments[o];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(r[f]=i[f])}return r},Ue.apply(this,arguments)};function Ps(n,r,i){if(i||arguments.length===2)for(var o=0,u=r.length,f;o<u;o++)(f||!(o in r))&&(f||(f=Array.prototype.slice.call(r,0,o)),f[o]=r[o]);return n.concat(f||Array.prototype.slice.call(r))}var Gt="-ms-",ql="-moz-",Mt="-webkit-",Z1="comm",au="rule",ph="decl",Hw="@import",K1="@keyframes",Bw="@layer",J1=Math.abs,mh=String.fromCharCode,bd=Object.assign;function qw(n,r){return ge(n,0)^45?(((r<<2^ge(n,0))<<2^ge(n,1))<<2^ge(n,2))<<2^ge(n,3):0}function W1(n){return n.trim()}function Kn(n,r){return(n=r.exec(n))?n[0]:n}function bt(n,r,i){return n.replace(r,i)}function ks(n,r,i){return n.indexOf(r,i)}function ge(n,r){return n.charCodeAt(r)|0}function bi(n,r,i){return n.slice(r,i)}function An(n){return n.length}function tv(n){return n.length}function Hl(n,r){return r.push(n),n}function Yw(n,r){return n.map(r).join("")}function Zg(n,r){return n.filter(function(i){return!Kn(i,r)})}var ru=1,Si=1,ev=0,sn=0,oe=0,Ri="";function iu(n,r,i,o,u,f,d,m){return{value:n,root:r,parent:i,type:o,props:u,children:f,line:ru,column:Si,length:d,return:"",siblings:m}}function za(n,r){return bd(iu("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function di(n){for(;n.root;)n=za(n.root,{children:[n]});Hl(n,n.siblings)}function Fw(){return oe}function Gw(){return oe=sn>0?ge(Ri,--sn):0,Si--,oe===10&&(Si=1,ru--),oe}function gn(){return oe=sn<ev?ge(Ri,sn++):0,Si++,oe===10&&(Si=1,ru++),oe}function cr(){return ge(Ri,sn)}function Us(){return sn}function lu(n,r){return bi(Ri,n,r)}function Sd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pw(n){return ru=Si=1,ev=An(Ri=n),sn=0,[]}function Vw(n){return Ri="",n}function Vf(n){return W1(lu(sn-1,wd(n===91?n+2:n===40?n+1:n)))}function Xw(n){for(;(oe=cr())&&oe<33;)gn();return Sd(n)>2||Sd(oe)>3?"":" "}function Iw(n,r){for(;--r&&gn()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return lu(n,Us()+(r<6&&cr()==32&&gn()==32))}function wd(n){for(;gn();)switch(oe){case n:return sn;case 34:case 39:n!==34&&n!==39&&wd(oe);break;case 40:n===41&&wd(n);break;case 92:gn();break}return sn}function Qw(n,r){for(;gn()&&n+oe!==57;)if(n+oe===84&&cr()===47)break;return"/*"+lu(r,sn-1)+"*"+mh(n===47?n:gn())}function Zw(n){for(;!Sd(cr());)gn();return lu(n,sn)}function Kw(n){return Vw(Ls("",null,null,null,[""],n=Pw(n),0,[0],n))}function Ls(n,r,i,o,u,f,d,m,h){for(var p=0,v=0,S=d,x=0,E=0,j=0,O=1,R=1,w=1,z=0,D="",Y=u,A=f,q=o,H=D;R;)switch(j=z,z=gn()){case 40:if(j!=108&&ge(H,S-1)==58){ks(H+=bt(Vf(z),"&","&\f"),"&\f",J1(p?m[p-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:H+=Vf(z);break;case 9:case 10:case 13:case 32:H+=Xw(j);break;case 92:H+=Iw(Us()-1,7);continue;case 47:switch(cr()){case 42:case 47:Hl(Jw(Qw(gn(),Us()),r,i,h),h);break;default:H+="/"}break;case 123*O:m[p++]=An(H)*w;case 125*O:case 59:case 0:switch(z){case 0:case 125:R=0;case 59+v:w==-1&&(H=bt(H,/\f/g,"")),E>0&&An(H)-S&&Hl(E>32?Jg(H+";",o,i,S-1,h):Jg(bt(H," ","")+";",o,i,S-2,h),h);break;case 59:H+=";";default:if(Hl(q=Kg(H,r,i,p,v,u,m,D,Y=[],A=[],S,f),f),z===123)if(v===0)Ls(H,r,q,q,Y,f,S,m,A);else switch(x===99&&ge(H,3)===110?100:x){case 100:case 108:case 109:case 115:Ls(n,q,q,o&&Hl(Kg(n,q,q,0,0,u,m,D,u,Y=[],S,A),A),u,A,S,m,o?Y:A);break;default:Ls(H,q,q,q,[""],A,0,m,A)}}p=v=E=0,O=w=1,D=H="",S=d;break;case 58:S=1+An(H),E=j;default:if(O<1){if(z==123)--O;else if(z==125&&O++==0&&Gw()==125)continue}switch(H+=mh(z),z*O){case 38:w=v>0?1:(H+="\f",-1);break;case 44:m[p++]=(An(H)-1)*w,w=1;break;case 64:cr()===45&&(H+=Vf(gn())),x=cr(),v=S=An(D=H+=Zw(Us())),z++;break;case 45:j===45&&An(H)==2&&(O=0)}}return f}function Kg(n,r,i,o,u,f,d,m,h,p,v,S){for(var x=u-1,E=u===0?f:[""],j=tv(E),O=0,R=0,w=0;O<o;++O)for(var z=0,D=bi(n,x+1,x=J1(R=d[O])),Y=n;z<j;++z)(Y=W1(R>0?E[z]+" "+D:bt(D,/&\f/g,E[z])))&&(h[w++]=Y);return iu(n,r,i,u===0?au:m,h,p,v,S)}function Jw(n,r,i,o){return iu(n,r,i,Z1,mh(Fw()),bi(n,2,-2),0,o)}function Jg(n,r,i,o,u){return iu(n,r,i,ph,bi(n,0,o),bi(n,o+1,-1),o,u)}function nv(n,r,i){switch(qw(n,r)){case 5103:return Mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mt+n+n;case 4789:return ql+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+n+ql+n+Gt+n+n;case 5936:switch(ge(n,r+11)){case 114:return Mt+n+Gt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Mt+n+Gt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Mt+n+Gt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Mt+n+Gt+n+n;case 6165:return Mt+n+Gt+"flex-"+n+n;case 5187:return Mt+n+bt(n,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+Gt+"flex-$1$2")+n;case 5443:return Mt+n+Gt+"flex-item-"+bt(n,/flex-|-self/g,"")+(Kn(n,/flex-|baseline/)?"":Gt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return Mt+n+Gt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Mt+n+Gt+bt(n,"shrink","negative")+n;case 5292:return Mt+n+Gt+bt(n,"basis","preferred-size")+n;case 6060:return Mt+"box-"+bt(n,"-grow","")+Mt+n+Gt+bt(n,"grow","positive")+n;case 4554:return Mt+bt(n,/([^-])(transform)/g,"$1"+Mt+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+Gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mt+n+n;case 4200:if(!Kn(n,/flex-|baseline/))return Gt+"grid-column-align"+bi(n,r)+n;break;case 2592:case 3360:return Gt+bt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(o,u){return r=u,Kn(o.props,/grid-\w+-end/)})?~ks(n+(i=i[r].value),"span",0)?n:Gt+bt(n,"-start","")+n+Gt+"grid-row-span:"+(~ks(i,"span",0)?Kn(i,/\d+/):+Kn(i,/\d+/)-+Kn(n,/\d+/))+";":Gt+bt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(o){return Kn(o.props,/grid-\w+-start/)})?n:Gt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,Mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(n)-1-r>6)switch(ge(n,r+1)){case 109:if(ge(n,r+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+ql+(ge(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~ks(n,"stretch",0)?nv(bt(n,"stretch","fill-available"),r,i)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,u,f,d,m,h,p){return Gt+u+":"+f+p+(d?Gt+u+"-span:"+(m?h:+h-+f)+p:"")+n});case 4949:if(ge(n,r+6)===121)return bt(n,":",":"+Mt)+n;break;case 6444:switch(ge(n,ge(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(ge(n,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+Gt+"$2box$3")+n;case 100:return bt(n,":",":"+Gt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function Vs(n,r){for(var i="",o=0;o<n.length;o++)i+=r(n[o],o,n,r)||"";return i}function Ww(n,r,i,o){switch(n.type){case Bw:if(n.children.length)break;case Hw:case ph:return n.return=n.return||n.value;case Z1:return"";case K1:return n.return=n.value+"{"+Vs(n.children,o)+"}";case au:if(!An(n.value=n.props.join(",")))return""}return An(i=Vs(n.children,o))?n.return=n.value+"{"+i+"}":""}function tE(n){var r=tv(n);return function(i,o,u,f){for(var d="",m=0;m<r;m++)d+=n[m](i,o,u,f)||"";return d}}function eE(n){return function(r){r.root||(r=r.return)&&n(r)}}function nE(n,r,i,o){if(n.length>-1&&!n.return)switch(n.type){case ph:n.return=nv(n.value,n.length,i);return;case K1:return Vs([za(n,{value:bt(n.value,"@","@"+Mt)})],o);case au:if(n.length)return Yw(i=n.props,function(u){switch(Kn(u,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":di(za(n,{props:[bt(u,/:(read-\w+)/,":"+ql+"$1")]})),di(za(n,{props:[u]})),bd(n,{props:Zg(i,o)});break;case"::placeholder":di(za(n,{props:[bt(u,/:(plac\w+)/,":"+Mt+"input-$1")]})),di(za(n,{props:[bt(u,/:(plac\w+)/,":"+ql+"$1")]})),di(za(n,{props:[bt(u,/:(plac\w+)/,Gt+"input-$1")]})),di(za(n,{props:[u]})),bd(n,{props:Zg(i,o)});break}return""})}}var aE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ve={},wi=typeof process<"u"&&Ve!==void 0&&(Ve.REACT_APP_SC_ATTR||Ve.SC_ATTR)||"data-styled",av="active",rv="data-styled-version",ou="6.1.17",gh=`/*!sc*/
`,Xs=typeof window<"u"&&"HTMLElement"in window,rE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ve.REACT_APP_SC_DISABLE_SPEEDY!==""?Ve.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ve.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ve!==void 0&&Ve.SC_DISABLE_SPEEDY!==void 0&&Ve.SC_DISABLE_SPEEDY!==""&&Ve.SC_DISABLE_SPEEDY!=="false"&&Ve.SC_DISABLE_SPEEDY),su=Object.freeze([]),Ei=Object.freeze({});function iE(n,r,i){return i===void 0&&(i=Ei),n.theme!==i.theme&&n.theme||r||i.theme}var iv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oE=/(^-|-$)/g;function Wg(n){return n.replace(lE,"-").replace(oE,"")}var sE=/(a)(d)/gi,_s=52,ty=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ed(n){var r,i="";for(r=Math.abs(n);r>_s;r=r/_s|0)i=ty(r%_s)+i;return(ty(r%_s)+i).replace(sE,"$1-$2")}var Xf,lv=5381,pi=function(n,r){for(var i=r.length;i;)n=33*n^r.charCodeAt(--i);return n},ov=function(n){return pi(lv,n)};function uE(n){return Ed(ov(n)>>>0)}function cE(n){return n.displayName||n.name||"Component"}function If(n){return typeof n=="string"&&!0}var sv=typeof Symbol=="function"&&Symbol.for,uv=sv?Symbol.for("react.memo"):60115,fE=sv?Symbol.for("react.forward_ref"):60112,dE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pE=((Xf={})[fE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xf[uv]=cv,Xf);function ey(n){return("type"in(r=n)&&r.type.$$typeof)===uv?cv:"$$typeof"in n?pE[n.$$typeof]:dE;var r}var mE=Object.defineProperty,gE=Object.getOwnPropertyNames,ny=Object.getOwnPropertySymbols,yE=Object.getOwnPropertyDescriptor,vE=Object.getPrototypeOf,ay=Object.prototype;function fv(n,r,i){if(typeof r!="string"){if(ay){var o=vE(r);o&&o!==ay&&fv(n,o,i)}var u=gE(r);ny&&(u=u.concat(ny(r)));for(var f=ey(n),d=ey(r),m=0;m<u.length;++m){var h=u[m];if(!(h in hE||i&&i[h]||d&&h in d||f&&h in f)){var p=yE(r,h);try{mE(n,h,p)}catch{}}}}return n}function Ti(n){return typeof n=="function"}function yh(n){return typeof n=="object"&&"styledComponentId"in n}function or(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function ry(n,r){if(n.length===0)return"";for(var i=n[0],o=1;o<n.length;o++)i+=n[o];return i}function Xl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Td(n,r,i){if(i===void 0&&(i=!1),!i&&!Xl(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)n[o]=Td(n[o],r[o]);else if(Xl(r))for(var o in r)n[o]=Td(n[o],r[o]);return n}function vh(n,r){Object.defineProperty(n,"toString",{value:r})}function ro(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var xE=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var i=0,o=0;o<r;o++)i+=this.groupSizes[o];return i},n.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var o=this.groupSizes,u=o.length,f=u;r>=f;)if((f<<=1)<0)throw ro(16,"".concat(r));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(r+1),h=(d=0,i.length);d<h;d++)this.tag.insertRule(m,i[d])&&(this.groupSizes[r]++,m++)},n.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],o=this.indexOfGroup(r),u=o+i;this.groupSizes[r]=0;for(var f=o;f<u;f++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var o=this.groupSizes[r],u=this.indexOfGroup(r),f=u+o,d=u;d<f;d++)i+="".concat(this.tag.getRule(d)).concat(gh);return i},n}(),$s=new Map,Is=new Map,Hs=1,As=function(n){if($s.has(n))return $s.get(n);for(;Is.has(Hs);)Hs++;var r=Hs++;return $s.set(n,r),Is.set(r,n),r},bE=function(n,r){Hs=r+1,$s.set(n,r),Is.set(r,n)},SE="style[".concat(wi,"][").concat(rv,'="').concat(ou,'"]'),wE=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),EE=function(n,r,i){for(var o,u=i.split(","),f=0,d=u.length;f<d;f++)(o=u[f])&&n.registerName(r,o)},TE=function(n,r){for(var i,o=((i=r.textContent)!==null&&i!==void 0?i:"").split(gh),u=[],f=0,d=o.length;f<d;f++){var m=o[f].trim();if(m){var h=m.match(wE);if(h){var p=0|parseInt(h[1],10),v=h[2];p!==0&&(bE(v,p),EE(n,v,h[3]),n.getTag().insertRules(p,u)),u.length=0}else u.push(m)}}},iy=function(n){for(var r=document.querySelectorAll(SE),i=0,o=r.length;i<o;i++){var u=r[i];u&&u.getAttribute(wi)!==av&&(TE(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function _E(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dv=function(n){var r=document.head,i=n||r,o=document.createElement("style"),u=function(m){var h=Array.from(m.querySelectorAll("style[".concat(wi,"]")));return h[h.length-1]}(i),f=u!==void 0?u.nextSibling:null;o.setAttribute(wi,av),o.setAttribute(rv,ou);var d=_E();return d&&o.setAttribute("nonce",d),i.insertBefore(o,f),o},AE=function(){function n(r){this.element=dv(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,u=0,f=o.length;u<f;u++){var d=o[u];if(d.ownerNode===i)return d}throw ro(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},n}(),jE=function(){function n(r){this.element=dv(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),OE=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),ly=Xs,CE={isServer:!Xs,useCSSOMInjection:!rE},hv=function(){function n(r,i,o){r===void 0&&(r=Ei),i===void 0&&(i={});var u=this;this.options=Ue(Ue({},CE),r),this.gs=i,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Xs&&ly&&(ly=!1,iy(this)),vh(this,function(){return function(f){for(var d=f.getTag(),m=d.length,h="",p=function(S){var x=function(w){return Is.get(w)}(S);if(x===void 0)return"continue";var E=f.names.get(x),j=d.getGroup(S);if(E===void 0||!E.size||j.length===0)return"continue";var O="".concat(wi,".g").concat(S,'[id="').concat(x,'"]'),R="";E!==void 0&&E.forEach(function(w){w.length>0&&(R+="".concat(w,","))}),h+="".concat(j).concat(O,'{content:"').concat(R,'"}').concat(gh)},v=0;v<m;v++)p(v);return h}(u)})}return n.registerId=function(r){return As(r)},n.prototype.rehydrate=function(){!this.server&&Xs&&iy(this)},n.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new n(Ue(Ue({},this.options),r),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var o=i.useCSSOMInjection,u=i.target;return i.isServer?new OE(u):o?new AE(u):new jE(u)}(this.options),new xE(r)));var r},n.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},n.prototype.registerName=function(r,i){if(As(r),this.names.has(r))this.names.get(r).add(i);else{var o=new Set;o.add(i),this.names.set(r,o)}},n.prototype.insertRules=function(r,i,o){this.registerName(r,i),this.getTag().insertRules(As(r),o)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(As(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),RE=/&/g,zE=/^\s*\/\/.*$/gm;function pv(n,r){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=pv(i.children,r)),i})}function NE(n){var r,i,o,u=Ei,f=u.options,d=f===void 0?Ei:f,m=u.plugins,h=m===void 0?su:m,p=function(x,E,j){return j.startsWith(i)&&j.endsWith(i)&&j.replaceAll(i,"").length>0?".".concat(r):x},v=h.slice();v.push(function(x){x.type===au&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(RE,i).replace(o,p))}),d.prefix&&v.push(nE),v.push(Ww);var S=function(x,E,j,O){E===void 0&&(E=""),j===void 0&&(j=""),O===void 0&&(O="&"),r=O,i=E,o=new RegExp("\\".concat(i,"\\b"),"g");var R=x.replace(zE,""),w=Kw(j||E?"".concat(j," ").concat(E," { ").concat(R," }"):R);d.namespace&&(w=pv(w,d.namespace));var z=[];return Vs(w,tE(v.concat(eE(function(D){return z.push(D)})))),z};return S.hash=h.length?h.reduce(function(x,E){return E.name||ro(15),pi(x,E.name)},lv).toString():"",S}var DE=new hv,_d=NE(),mv=zt.createContext({shouldForwardProp:void 0,styleSheet:DE,stylis:_d});mv.Consumer;zt.createContext(void 0);function oy(){return T.useContext(mv)}var ME=function(){function n(r,i){var o=this;this.inject=function(u,f){f===void 0&&(f=_d);var d=o.name+f.hash;u.hasNameForId(o.id,d)||u.insertRules(o.id,d,f(o.rules,d,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,vh(this,function(){throw ro(12,String(o.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=_d),this.name+r.hash},n}(),kE=function(n){return n>="A"&&n<="Z"};function sy(n){for(var r="",i=0;i<n.length;i++){var o=n[i];if(i===1&&o==="-"&&n[0]==="-")return n;kE(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var gv=function(n){return n==null||n===!1||n===""},yv=function(n){var r,i,o=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!gv(f)&&(Array.isArray(f)&&f.isCss||Ti(f)?o.push("".concat(sy(u),":"),f,";"):Xl(f)?o.push.apply(o,Ps(Ps(["".concat(u," {")],yv(f),!1),["}"],!1)):o.push("".concat(sy(u),": ").concat((r=u,(i=f)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in aE||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return o};function fr(n,r,i,o){if(gv(n))return[];if(yh(n))return[".".concat(n.styledComponentId)];if(Ti(n)){if(!Ti(f=n)||f.prototype&&f.prototype.isReactComponent||!r)return[n];var u=n(r);return fr(u,r,i,o)}var f;return n instanceof ME?i?(n.inject(i,o),[n.getName(o)]):[n]:Xl(n)?yv(n):Array.isArray(n)?Array.prototype.concat.apply(su,n.map(function(d){return fr(d,r,i,o)})):[n.toString()]}function UE(n){for(var r=0;r<n.length;r+=1){var i=n[r];if(Ti(i)&&!yh(i))return!1}return!0}var LE=ov(ou),$E=function(){function n(r,i,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&UE(r),this.componentId=i,this.baseHash=pi(LE,i),this.baseStyle=o,hv.registerId(i)}return n.prototype.generateAndInjectStyles=function(r,i,o){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=or(u,this.staticRulesId);else{var f=ry(fr(this.rules,r,i,o)),d=Ed(pi(this.baseHash,f)>>>0);if(!i.hasNameForId(this.componentId,d)){var m=o(f,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,m)}u=or(u,d),this.staticRulesId=d}else{for(var h=pi(this.baseHash,o.hash),p="",v=0;v<this.rules.length;v++){var S=this.rules[v];if(typeof S=="string")p+=S;else if(S){var x=ry(fr(S,r,i,o));h=pi(h,x+v),p+=x}}if(p){var E=Ed(h>>>0);i.hasNameForId(this.componentId,E)||i.insertRules(this.componentId,E,o(p,".".concat(E),void 0,this.componentId)),u=or(u,E)}}return u},n}(),vv=zt.createContext(void 0);vv.Consumer;var Qf={};function HE(n,r,i){var o=yh(n),u=n,f=!If(n),d=r.attrs,m=d===void 0?su:d,h=r.componentId,p=h===void 0?function(Y,A){var q=typeof Y!="string"?"sc":Wg(Y);Qf[q]=(Qf[q]||0)+1;var H="".concat(q,"-").concat(uE(ou+q+Qf[q]));return A?"".concat(A,"-").concat(H):H}(r.displayName,r.parentComponentId):h,v=r.displayName,S=v===void 0?function(Y){return If(Y)?"styled.".concat(Y):"Styled(".concat(cE(Y),")")}(n):v,x=r.displayName&&r.componentId?"".concat(Wg(r.displayName),"-").concat(r.componentId):r.componentId||p,E=o&&u.attrs?u.attrs.concat(m).filter(Boolean):m,j=r.shouldForwardProp;if(o&&u.shouldForwardProp){var O=u.shouldForwardProp;if(r.shouldForwardProp){var R=r.shouldForwardProp;j=function(Y,A){return O(Y,A)&&R(Y,A)}}else j=O}var w=new $E(i,x,o?u.componentStyle:void 0);function z(Y,A){return function(q,H,W){var rt=q.attrs,jt=q.componentStyle,ct=q.defaultProps,St=q.foldedComponentIds,kt=q.styledComponentId,re=q.target,Xt=zt.useContext(vv),F=oy(),K=q.shouldForwardProp||F.shouldForwardProp,nt=iE(H,Xt,ct)||Ei,xt=function(mt,st,Wt){for(var Ct,se=Ue(Ue({},st),{className:void 0,theme:Wt}),xn=0;xn<mt.length;xn+=1){var Le=Ti(Ct=mt[xn])?Ct(se):Ct;for(var Oe in Le)se[Oe]=Oe==="className"?or(se[Oe],Le[Oe]):Oe==="style"?Ue(Ue({},se[Oe]),Le[Oe]):Le[Oe]}return st.className&&(se.className=or(se.className,st.className)),se}(rt,H,nt),C=xt.as||re,V={};for(var Q in xt)xt[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&xt.theme===nt||(Q==="forwardedAs"?V.as=xt.forwardedAs:K&&!K(Q,C)||(V[Q]=xt[Q]));var J=function(mt,st){var Wt=oy(),Ct=mt.generateAndInjectStyles(st,Wt.styleSheet,Wt.stylis);return Ct}(jt,xt),at=or(St,kt);return J&&(at+=" "+J),xt.className&&(at+=" "+xt.className),V[If(C)&&!iv.has(C)?"class":"className"]=at,W&&(V.ref=W),T.createElement(C,V)}(D,Y,A)}z.displayName=S;var D=zt.forwardRef(z);return D.attrs=E,D.componentStyle=w,D.displayName=S,D.shouldForwardProp=j,D.foldedComponentIds=o?or(u.foldedComponentIds,u.styledComponentId):"",D.styledComponentId=x,D.target=o?u.target:n,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=o?function(A){for(var q=[],H=1;H<arguments.length;H++)q[H-1]=arguments[H];for(var W=0,rt=q;W<rt.length;W++)Td(A,rt[W],!0);return A}({},u.defaultProps,Y):Y}}),vh(D,function(){return".".concat(D.styledComponentId)}),f&&fv(D,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function uy(n,r){for(var i=[n[0]],o=0,u=r.length;o<u;o+=1)i.push(r[o],n[o+1]);return i}var cy=function(n){return Object.assign(n,{isCss:!0})};function BE(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(Ti(n)||Xl(n))return cy(fr(uy(su,Ps([n],r,!0))));var o=n;return r.length===0&&o.length===1&&typeof o[0]=="string"?fr(o):cy(fr(uy(o,r)))}function Ad(n,r,i){if(i===void 0&&(i=Ei),!r)throw ro(1,r);var o=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(r,i,BE.apply(void 0,Ps([u],f,!1)))};return o.attrs=function(u){return Ad(n,r,Ue(Ue({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},o.withConfig=function(u){return Ad(n,r,Ue(Ue({},i),u))},o}var xv=function(n){return Ad(HE,n)},Z=xv;iv.forEach(function(n){Z[n]=xv(n)});const Nn=T.createContext(),qE="/hmdt";function ra({children:n}){const[r,i]=T.useState("none"),[o,u]=T.useState(!1),[f,d]=T.useState({}),[m,h]=T.useState(!1),[p,v]=T.useState(""),[S,x]=T.useState(!0);if(T.useEffect(()=>{fetch(qE).then(E=>{if(!E.ok)throw h(!0),new Error("Network response was not ok");return E.json()}).then(E=>{E==null?console.log("Null"):(console.log("Fetched Data:",E),d(j=>({...j,...E})),x(!1))}).catch(E=>{console.error("There was a problem with the fetch operation:",E),v(E)})},[]),!S)return g.jsx(Nn.Provider,{value:{display:r,setDisplay:i,isOpen:o,setIsOpen:u,hmdt:f,hmdtError:m,errorMsg:p,loading:S},children:n})}function Dn(){const[n,r]=T.useState(!1),[i,o]=T.useState(null),[u,f]=T.useState(!0),[d,m]=T.useState(null),h=async()=>{try{const p=await fetch("/verification",{method:"GET",credentials:"include"});if(!p.ok)throw new Error(`HTTP error! Status: ${p.status}`);const v=await p.json();v!=null||v!=null?(r(!0),o(v.data[0]),f(!0)):r(!1)}catch(p){m(p.message),r(!1)}finally{f(!1)}};return T.useEffect(()=>{h()},[]),{verifyAuth:h,authorized:n,userData:i,loading:u,error:d}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function YE(n,r,i){return(r=GE(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function fy(n,r){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),i.push.apply(i,o)}return i}function I(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?fy(Object(i),!0).forEach(function(o){YE(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):fy(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function FE(n,r){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function GE(n){var r=FE(n,"string");return typeof r=="symbol"?r:r+""}const dy=()=>{};let xh={},bv={},Sv=null,wv={mark:dy,measure:dy};try{typeof window<"u"&&(xh=window),typeof document<"u"&&(bv=document),typeof MutationObserver<"u"&&(Sv=MutationObserver),typeof performance<"u"&&(wv=performance)}catch{}const{userAgent:hy=""}=xh.navigator||{},Da=xh,Vt=bv,py=Sv,js=wv;Da.document;const ia=!!Vt.documentElement&&!!Vt.head&&typeof Vt.addEventListener=="function"&&typeof Vt.createElement=="function",Ev=~hy.indexOf("MSIE")||~hy.indexOf("Trident/");var PE=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,VE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},XE={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_v=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_e="classic",uu="duotone",IE="sharp",QE="sharp-duotone",Av=[_e,uu,IE,QE],ZE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},KE={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},JE=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),WE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},tT=["fak","fa-kit","fakd","fa-kit-duotone"],my={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},eT=["kit"],nT={kit:{"fa-kit":"fak"}},aT=["fak","fakd"],rT={kit:{fak:"fa-kit"}},gy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Os={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},iT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],lT=["fak","fa-kit","fakd","fa-kit-duotone"],oT={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},sT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},uT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},jd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},cT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Od=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...iT,...cT],fT=["solid","regular","light","thin","duotone","brands"],jv=[1,2,3,4,5,6,7,8,9,10],dT=jv.concat([11,12,13,14,15,16,17,18,19,20]),hT=[...Object.keys(uT),...fT,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Os.GROUP,Os.SWAP_OPACITY,Os.PRIMARY,Os.SECONDARY].concat(jv.map(n=>"".concat(n,"x"))).concat(dT.map(n=>"w-".concat(n))),pT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ea="___FONT_AWESOME___",Cd=16,Ov="fa",Cv="svg-inline--fa",mr="data-fa-i2svg",Rd="data-fa-pseudo-element",mT="data-fa-pseudo-element-pending",bh="data-prefix",Sh="data-icon",yy="fontawesome-i2svg",gT="async",yT=["HTML","HEAD","STYLE","SCRIPT"],Rv=(()=>{try{return!0}catch{return!1}})();function io(n){return new Proxy(n,{get(r,i){return i in r?r[i]:r[_e]}})}const zv=I({},Tv);zv[_e]=I(I(I(I({},{"fa-duotone":"duotone"}),Tv[_e]),my.kit),my["kit-duotone"]);const vT=io(zv),zd=I({},WE);zd[_e]=I(I(I(I({},{duotone:"fad"}),zd[_e]),gy.kit),gy["kit-duotone"]);const vy=io(zd),Nd=I({},jd);Nd[_e]=I(I({},Nd[_e]),rT.kit);const wh=io(Nd),Dd=I({},sT);Dd[_e]=I(I({},Dd[_e]),nT.kit);io(Dd);const xT=PE,Nv="fa-layers-text",bT=VE,ST=I({},ZE);io(ST);const wT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zf=XE,ET=[...eT,...hT],Yl=Da.FontAwesomeConfig||{};function TT(n){var r=Vt.querySelector("script["+n+"]");if(r)return r.getAttribute(n)}function _T(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Vt&&typeof Vt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[i,o]=r;const u=_T(TT(i));u!=null&&(Yl[o]=u)});const Dv={styleDefault:"solid",familyDefault:_e,cssPrefix:Ov,replacementClass:Cv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yl.familyPrefix&&(Yl.cssPrefix=Yl.familyPrefix);const _i=I(I({},Dv),Yl);_i.autoReplaceSvg||(_i.observeMutations=!1);const lt={};Object.keys(Dv).forEach(n=>{Object.defineProperty(lt,n,{enumerable:!0,set:function(r){_i[n]=r,Fl.forEach(i=>i(lt))},get:function(){return _i[n]}})});Object.defineProperty(lt,"familyPrefix",{enumerable:!0,set:function(n){_i.cssPrefix=n,Fl.forEach(r=>r(lt))},get:function(){return _i.cssPrefix}});Da.FontAwesomeConfig=lt;const Fl=[];function AT(n){return Fl.push(n),()=>{Fl.splice(Fl.indexOf(n),1)}}const Ra=Cd,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jT(n){if(!n||!ia)return;const r=Vt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=n;const i=Vt.head.childNodes;let o=null;for(let u=i.length-1;u>-1;u--){const f=i[u],d=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(d)>-1&&(o=f)}return Vt.head.insertBefore(r,o),n}const OT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Il(){let n=12,r="";for(;n-- >0;)r+=OT[Math.random()*62|0];return r}function zi(n){const r=[];for(let i=(n||[]).length>>>0;i--;)r[i]=n[i];return r}function Eh(n){return n.classList?zi(n.classList):(n.getAttribute("class")||"").split(" ").filter(r=>r)}function Mv(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function CT(n){return Object.keys(n||{}).reduce((r,i)=>r+"".concat(i,'="').concat(Mv(n[i]),'" '),"").trim()}function cu(n){return Object.keys(n||{}).reduce((r,i)=>r+"".concat(i,": ").concat(n[i].trim(),";"),"")}function Th(n){return n.size!==On.size||n.x!==On.x||n.y!==On.y||n.rotate!==On.rotate||n.flipX||n.flipY}function RT(n){let{transform:r,containerWidth:i,iconWidth:o}=n;const u={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(f," ").concat(d," ").concat(m)},p={transform:"translate(".concat(o/2*-1," -256)")};return{outer:u,inner:h,path:p}}function zT(n){let{transform:r,width:i=Cd,height:o=Cd,startCentered:u=!1}=n,f="";return u&&Ev?f+="translate(".concat(r.x/Ra-i/2,"em, ").concat(r.y/Ra-o/2,"em) "):u?f+="translate(calc(-50% + ".concat(r.x/Ra,"em), calc(-50% + ").concat(r.y/Ra,"em)) "):f+="translate(".concat(r.x/Ra,"em, ").concat(r.y/Ra,"em) "),f+="scale(".concat(r.size/Ra*(r.flipX?-1:1),", ").concat(r.size/Ra*(r.flipY?-1:1),") "),f+="rotate(".concat(r.rotate,"deg) "),f}var NT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function kv(){const n=Ov,r=Cv,i=lt.cssPrefix,o=lt.replacementClass;let u=NT;if(i!==n||o!==r){const f=new RegExp("\\.".concat(n,"\\-"),"g"),d=new RegExp("\\--".concat(n,"\\-"),"g"),m=new RegExp("\\.".concat(r),"g");u=u.replace(f,".".concat(i,"-")).replace(d,"--".concat(i,"-")).replace(m,".".concat(o))}return u}let xy=!1;function Kf(){lt.autoAddCss&&!xy&&(jT(kv()),xy=!0)}var DT={mixout(){return{dom:{css:kv,insertCss:Kf}}},hooks(){return{beforeDOMElementCreation(){Kf()},beforeI2svg(){Kf()}}}};const na=Da||{};na[ea]||(na[ea]={});na[ea].styles||(na[ea].styles={});na[ea].hooks||(na[ea].hooks={});na[ea].shims||(na[ea].shims=[]);var Cn=na[ea];const Uv=[],Lv=function(){Vt.removeEventListener("DOMContentLoaded",Lv),Qs=1,Uv.map(n=>n())};let Qs=!1;ia&&(Qs=(Vt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Vt.readyState),Qs||Vt.addEventListener("DOMContentLoaded",Lv));function MT(n){ia&&(Qs?setTimeout(n,0):Uv.push(n))}function lo(n){const{tag:r,attributes:i={},children:o=[]}=n;return typeof n=="string"?Mv(n):"<".concat(r," ").concat(CT(i),">").concat(o.map(lo).join(""),"</").concat(r,">")}function by(n,r,i){if(n&&n[r]&&n[r][i])return{prefix:r,iconName:i,icon:n[r][i]}}var Jf=function(r,i,o,u){var f=Object.keys(r),d=f.length,m=i,h,p,v;for(o===void 0?(h=1,v=r[f[0]]):(h=0,v=o);h<d;h++)p=f[h],v=m(v,r[p],p,r);return v};function kT(n){const r=[];let i=0;const o=n.length;for(;i<o;){const u=n.charCodeAt(i++);if(u>=55296&&u<=56319&&i<o){const f=n.charCodeAt(i++);(f&64512)==56320?r.push(((u&1023)<<10)+(f&1023)+65536):(r.push(u),i--)}else r.push(u)}return r}function Md(n){const r=kT(n);return r.length===1?r[0].toString(16):null}function UT(n,r){const i=n.length;let o=n.charCodeAt(r),u;return o>=55296&&o<=56319&&i>r+1&&(u=n.charCodeAt(r+1),u>=56320&&u<=57343)?(o-55296)*1024+u-56320+65536:o}function Sy(n){return Object.keys(n).reduce((r,i)=>{const o=n[i];return!!o.icon?r[o.iconName]=o.icon:r[i]=o,r},{})}function kd(n,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=i,u=Sy(r);typeof Cn.hooks.addPack=="function"&&!o?Cn.hooks.addPack(n,Sy(r)):Cn.styles[n]=I(I({},Cn.styles[n]||{}),u),n==="fas"&&kd("fa",r)}const{styles:Ql,shims:LT}=Cn,$v=Object.keys(wh),$T=$v.reduce((n,r)=>(n[r]=Object.keys(wh[r]),n),{});let _h=null,Hv={},Bv={},qv={},Yv={},Fv={};function HT(n){return~ET.indexOf(n)}function BT(n,r){const i=r.split("-"),o=i[0],u=i.slice(1).join("-");return o===n&&u!==""&&!HT(u)?u:null}const Gv=()=>{const n=o=>Jf(Ql,(u,f,d)=>(u[d]=Jf(f,o,{}),u),{});Hv=n((o,u,f)=>(u[3]&&(o[u[3]]=f),u[2]&&u[2].filter(m=>typeof m=="number").forEach(m=>{o[m.toString(16)]=f}),o)),Bv=n((o,u,f)=>(o[f]=f,u[2]&&u[2].filter(m=>typeof m=="string").forEach(m=>{o[m]=f}),o)),Fv=n((o,u,f)=>{const d=u[2];return o[f]=f,d.forEach(m=>{o[m]=f}),o});const r="far"in Ql||lt.autoFetchSvg,i=Jf(LT,(o,u)=>{const f=u[0];let d=u[1];const m=u[2];return d==="far"&&!r&&(d="fas"),typeof f=="string"&&(o.names[f]={prefix:d,iconName:m}),typeof f=="number"&&(o.unicodes[f.toString(16)]={prefix:d,iconName:m}),o},{names:{},unicodes:{}});qv=i.names,Yv=i.unicodes,_h=fu(lt.styleDefault,{family:lt.familyDefault})};AT(n=>{_h=fu(n.styleDefault,{family:lt.familyDefault})});Gv();function Ah(n,r){return(Hv[n]||{})[r]}function qT(n,r){return(Bv[n]||{})[r]}function sr(n,r){return(Fv[n]||{})[r]}function Pv(n){return qv[n]||{prefix:null,iconName:null}}function YT(n){const r=Yv[n],i=Ah("fas",n);return r||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Ma(){return _h}const Vv=()=>({prefix:null,iconName:null,rest:[]});function FT(n){let r=_e;const i=$v.reduce((o,u)=>(o[u]="".concat(lt.cssPrefix,"-").concat(u),o),{});return Av.forEach(o=>{(n.includes(i[o])||n.some(u=>$T[o].includes(u)))&&(r=o)}),r}function fu(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:i=_e}=r,o=vT[i][n];if(i===uu&&!n)return"fad";const u=vy[i][n]||vy[i][o],f=n in Cn.styles?n:null;return u||f||null}function GT(n){let r=[],i=null;return n.forEach(o=>{const u=BT(lt.cssPrefix,o);u?i=u:o&&r.push(o)}),{iconName:i,rest:r}}function wy(n){return n.sort().filter((r,i,o)=>o.indexOf(r)===i)}function du(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:i=!1}=r;let o=null;const u=Od.concat(lT),f=wy(n.filter(S=>u.includes(S))),d=wy(n.filter(S=>!Od.includes(S))),m=f.filter(S=>(o=S,!_v.includes(S))),[h=null]=m,p=FT(f),v=I(I({},GT(d)),{},{prefix:fu(h,{family:p})});return I(I(I({},v),IT({values:n,family:p,styles:Ql,config:lt,canonical:v,givenPrefix:o})),PT(i,o,v))}function PT(n,r,i){let{prefix:o,iconName:u}=i;if(n||!o||!u)return{prefix:o,iconName:u};const f=r==="fa"?Pv(u):{},d=sr(o,u);return u=f.iconName||d||u,o=f.prefix||o,o==="far"&&!Ql.far&&Ql.fas&&!lt.autoFetchSvg&&(o="fas"),{prefix:o,iconName:u}}const VT=Av.filter(n=>n!==_e||n!==uu),XT=Object.keys(jd).filter(n=>n!==_e).map(n=>Object.keys(jd[n])).flat();function IT(n){const{values:r,family:i,canonical:o,givenPrefix:u="",styles:f={},config:d={}}=n,m=i===uu,h=r.includes("fa-duotone")||r.includes("fad"),p=d.familyDefault==="duotone",v=o.prefix==="fad"||o.prefix==="fa-duotone";if(!m&&(h||p||v)&&(o.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(o.prefix="fab"),!o.prefix&&VT.includes(i)&&(Object.keys(f).find(x=>XT.includes(x))||d.autoFetchSvg)){const x=JE.get(i).defaultShortPrefixId;o.prefix=x,o.iconName=sr(o.prefix,o.iconName)||o.iconName}return(o.prefix==="fa"||u==="fa")&&(o.prefix=Ma()||"fas"),o}class QT{constructor(){this.definitions={}}add(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];const u=i.reduce(this._pullDefinitions,{});Object.keys(u).forEach(f=>{this.definitions[f]=I(I({},this.definitions[f]||{}),u[f]),kd(f,u[f]);const d=wh[_e][f];d&&kd(d,u[f]),Gv()})}reset(){this.definitions={}}_pullDefinitions(r,i){const o=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(o).map(u=>{const{prefix:f,iconName:d,icon:m}=o[u],h=m[2];r[f]||(r[f]={}),h.length>0&&h.forEach(p=>{typeof p=="string"&&(r[f][p]=m)}),r[f][d]=m}),r}}let Ey=[],mi={};const xi={},ZT=Object.keys(xi);function KT(n,r){let{mixoutsTo:i}=r;return Ey=n,mi={},Object.keys(xi).forEach(o=>{ZT.indexOf(o)===-1&&delete xi[o]}),Ey.forEach(o=>{const u=o.mixout?o.mixout():{};if(Object.keys(u).forEach(f=>{typeof u[f]=="function"&&(i[f]=u[f]),typeof u[f]=="object"&&Object.keys(u[f]).forEach(d=>{i[f]||(i[f]={}),i[f][d]=u[f][d]})}),o.hooks){const f=o.hooks();Object.keys(f).forEach(d=>{mi[d]||(mi[d]=[]),mi[d].push(f[d])})}o.provides&&o.provides(xi)}),i}function Ud(n,r){for(var i=arguments.length,o=new Array(i>2?i-2:0),u=2;u<i;u++)o[u-2]=arguments[u];return(mi[n]||[]).forEach(d=>{r=d.apply(null,[r,...o])}),r}function gr(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];(mi[n]||[]).forEach(f=>{f.apply(null,i)})}function ka(){const n=arguments[0],r=Array.prototype.slice.call(arguments,1);return xi[n]?xi[n].apply(null,r):void 0}function Ld(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:r}=n;const i=n.prefix||Ma();if(r)return r=sr(i,r)||r,by(Xv.definitions,i,r)||by(Cn.styles,i,r)}const Xv=new QT,JT=()=>{lt.autoReplaceSvg=!1,lt.observeMutations=!1,gr("noAuto")},WT={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ia?(gr("beforeI2svg",n),ka("pseudoElements2svg",n),ka("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r}=n;lt.autoReplaceSvg===!1&&(lt.autoReplaceSvg=!0),lt.observeMutations=!0,MT(()=>{e4({autoReplaceSvgRoot:r}),gr("watch",n)})}},t4={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:sr(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const r=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],i=fu(n[0]);return{prefix:i,iconName:sr(i,r)||r}}if(typeof n=="string"&&(n.indexOf("".concat(lt.cssPrefix,"-"))>-1||n.match(xT))){const r=du(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ma(),iconName:sr(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){const r=Ma();return{prefix:r,iconName:sr(r,n)||n}}}},Qe={noAuto:JT,config:lt,dom:WT,parse:t4,library:Xv,findIconDefinition:Ld,toHtml:lo},e4=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r=Vt}=n;(Object.keys(Cn.styles).length>0||lt.autoFetchSvg)&&ia&&lt.autoReplaceSvg&&Qe.dom.i2svg({node:r})};function hu(n,r){return Object.defineProperty(n,"abstract",{get:r}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(i=>lo(i))}}),Object.defineProperty(n,"node",{get:function(){if(!ia)return;const i=Vt.createElement("div");return i.innerHTML=n.html,i.children}}),n}function n4(n){let{children:r,main:i,mask:o,attributes:u,styles:f,transform:d}=n;if(Th(d)&&i.found&&!o.found){const{width:m,height:h}=i,p={x:m/h/2,y:.5};u.style=cu(I(I({},f),{},{"transform-origin":"".concat(p.x+d.x/16,"em ").concat(p.y+d.y/16,"em")}))}return[{tag:"svg",attributes:u,children:r}]}function a4(n){let{prefix:r,iconName:i,children:o,attributes:u,symbol:f}=n;const d=f===!0?"".concat(r,"-").concat(lt.cssPrefix,"-").concat(i):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},u),{},{id:d}),children:o}]}]}function jh(n){const{icons:{main:r,mask:i},prefix:o,iconName:u,transform:f,symbol:d,title:m,maskId:h,titleId:p,extra:v,watchable:S=!1}=n,{width:x,height:E}=i.found?i:r,j=aT.includes(o),O=[lt.replacementClass,u?"".concat(lt.cssPrefix,"-").concat(u):""].filter(A=>v.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(v.classes).join(" ");let R={children:[],attributes:I(I({},v.attributes),{},{"data-prefix":o,"data-icon":u,class:O,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(E)})};const w=j&&!~v.classes.indexOf("fa-fw")?{width:"".concat(x/E*16*.0625,"em")}:{};S&&(R.attributes[mr]=""),m&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(p||Il())},children:[m]}),delete R.attributes.title);const z=I(I({},R),{},{prefix:o,iconName:u,main:r,mask:i,maskId:h,transform:f,symbol:d,styles:I(I({},w),v.styles)}),{children:D,attributes:Y}=i.found&&r.found?ka("generateAbstractMask",z)||{children:[],attributes:{}}:ka("generateAbstractIcon",z)||{children:[],attributes:{}};return z.children=D,z.attributes=Y,d?a4(z):n4(z)}function Ty(n){const{content:r,width:i,height:o,transform:u,title:f,extra:d,watchable:m=!1}=n,h=I(I(I({},d.attributes),f?{title:f}:{}),{},{class:d.classes.join(" ")});m&&(h[mr]="");const p=I({},d.styles);Th(u)&&(p.transform=zT({transform:u,startCentered:!0,width:i,height:o}),p["-webkit-transform"]=p.transform);const v=cu(p);v.length>0&&(h.style=v);const S=[];return S.push({tag:"span",attributes:h,children:[r]}),f&&S.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),S}function r4(n){const{content:r,title:i,extra:o}=n,u=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")}),f=cu(o.styles);f.length>0&&(u.style=f);const d=[];return d.push({tag:"span",attributes:u,children:[r]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}const{styles:Wf}=Cn;function $d(n){const r=n[0],i=n[1],[o]=n.slice(4);let u=null;return Array.isArray(o)?u={tag:"g",attributes:{class:"".concat(lt.cssPrefix,"-").concat(Zf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(lt.cssPrefix,"-").concat(Zf.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(lt.cssPrefix,"-").concat(Zf.PRIMARY),fill:"currentColor",d:o[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:r,height:i,icon:u}}const i4={found:!1,width:512,height:512};function l4(n,r){!Rv&&!lt.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(r,'" is missing.'))}function Hd(n,r){let i=r;return r==="fa"&&lt.styleDefault!==null&&(r=Ma()),new Promise((o,u)=>{if(i==="fa"){const f=Pv(n)||{};n=f.iconName||n,r=f.prefix||r}if(n&&r&&Wf[r]&&Wf[r][n]){const f=Wf[r][n];return o($d(f))}l4(n,r),o(I(I({},i4),{},{icon:lt.showMissingIcons&&n?ka("missingIconAbstract")||{}:{}}))})}const _y=()=>{},Bd=lt.measurePerformance&&js&&js.mark&&js.measure?js:{mark:_y,measure:_y},Bl='FA "6.7.2"',o4=n=>(Bd.mark("".concat(Bl," ").concat(n," begins")),()=>Iv(n)),Iv=n=>{Bd.mark("".concat(Bl," ").concat(n," ends")),Bd.measure("".concat(Bl," ").concat(n),"".concat(Bl," ").concat(n," begins"),"".concat(Bl," ").concat(n," ends"))};var Oh={begin:o4,end:Iv};const Bs=()=>{};function Ay(n){return typeof(n.getAttribute?n.getAttribute(mr):null)=="string"}function s4(n){const r=n.getAttribute?n.getAttribute(bh):null,i=n.getAttribute?n.getAttribute(Sh):null;return r&&i}function u4(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(lt.replacementClass)}function c4(){return lt.autoReplaceSvg===!0?qs.replace:qs[lt.autoReplaceSvg]||qs.replace}function f4(n){return Vt.createElementNS("http://www.w3.org/2000/svg",n)}function d4(n){return Vt.createElement(n)}function Qv(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:i=n.tag==="svg"?f4:d4}=r;if(typeof n=="string")return Vt.createTextNode(n);const o=i(n.tag);return Object.keys(n.attributes||[]).forEach(function(f){o.setAttribute(f,n.attributes[f])}),(n.children||[]).forEach(function(f){o.appendChild(Qv(f,{ceFn:i}))}),o}function h4(n){let r=" ".concat(n.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}const qs={replace:function(n){const r=n[0];if(r.parentNode)if(n[1].forEach(i=>{r.parentNode.insertBefore(Qv(i),r)}),r.getAttribute(mr)===null&&lt.keepOriginalSource){let i=Vt.createComment(h4(r));r.parentNode.replaceChild(i,r)}else r.remove()},nest:function(n){const r=n[0],i=n[1];if(~Eh(r).indexOf(lt.replacementClass))return qs.replace(n);const o=new RegExp("".concat(lt.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){const f=i[0].attributes.class.split(" ").reduce((d,m)=>(m===lt.replacementClass||m.match(o)?d.toSvg.push(m):d.toNode.push(m),d),{toNode:[],toSvg:[]});i[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",f.toNode.join(" "))}const u=i.map(f=>lo(f)).join(`
`);r.setAttribute(mr,""),r.innerHTML=u}};function jy(n){n()}function Zv(n,r){const i=typeof r=="function"?r:Bs;if(n.length===0)i();else{let o=jy;lt.mutateApproach===gT&&(o=Da.requestAnimationFrame||jy),o(()=>{const u=c4(),f=Oh.begin("mutate");n.map(u),f(),i()})}}let Ch=!1;function Kv(){Ch=!0}function qd(){Ch=!1}let Zs=null;function Oy(n){if(!py||!lt.observeMutations)return;const{treeCallback:r=Bs,nodeCallback:i=Bs,pseudoElementsCallback:o=Bs,observeMutationsRoot:u=Vt}=n;Zs=new py(f=>{if(Ch)return;const d=Ma();zi(f).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!Ay(m.addedNodes[0])&&(lt.searchPseudoElements&&o(m.target),r(m.target)),m.type==="attributes"&&m.target.parentNode&&lt.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ay(m.target)&&~wT.indexOf(m.attributeName))if(m.attributeName==="class"&&s4(m.target)){const{prefix:h,iconName:p}=du(Eh(m.target));m.target.setAttribute(bh,h||d),p&&m.target.setAttribute(Sh,p)}else u4(m.target)&&i(m.target)})}),ia&&Zs.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p4(){Zs&&Zs.disconnect()}function m4(n){const r=n.getAttribute("style");let i=[];return r&&(i=r.split(";").reduce((o,u)=>{const f=u.split(":"),d=f[0],m=f.slice(1);return d&&m.length>0&&(o[d]=m.join(":").trim()),o},{})),i}function g4(n){const r=n.getAttribute("data-prefix"),i=n.getAttribute("data-icon"),o=n.innerText!==void 0?n.innerText.trim():"";let u=du(Eh(n));return u.prefix||(u.prefix=Ma()),r&&i&&(u.prefix=r,u.iconName=i),u.iconName&&u.prefix||(u.prefix&&o.length>0&&(u.iconName=qT(u.prefix,n.innerText)||Ah(u.prefix,Md(n.innerText))),!u.iconName&&lt.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=n.firstChild.data)),u}function y4(n){const r=zi(n.attributes).reduce((u,f)=>(u.name!=="class"&&u.name!=="style"&&(u[f.name]=f.value),u),{}),i=n.getAttribute("title"),o=n.getAttribute("data-fa-title-id");return lt.autoA11y&&(i?r["aria-labelledby"]="".concat(lt.replacementClass,"-title-").concat(o||Il()):(r["aria-hidden"]="true",r.focusable="false")),r}function v4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cy(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:i,prefix:o,rest:u}=g4(n),f=y4(n),d=Ud("parseNodeAttributes",{},n);let m=r.styleParser?m4(n):[];return I({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:o,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:f}},d)}const{styles:x4}=Cn;function Jv(n){const r=lt.autoReplaceSvg==="nest"?Cy(n,{styleParser:!1}):Cy(n);return~r.extra.classes.indexOf(Nv)?ka("generateLayersText",n,r):ka("generateSvgReplacementMutation",n,r)}function b4(){return[...tT,...Od]}function Ry(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ia)return Promise.resolve();const i=Vt.documentElement.classList,o=v=>i.add("".concat(yy,"-").concat(v)),u=v=>i.remove("".concat(yy,"-").concat(v)),f=lt.autoFetchSvg?b4():_v.concat(Object.keys(x4));f.includes("fa")||f.push("fa");const d=[".".concat(Nv,":not([").concat(mr,"])")].concat(f.map(v=>".".concat(v,":not([").concat(mr,"])"))).join(", ");if(d.length===0)return Promise.resolve();let m=[];try{m=zi(n.querySelectorAll(d))}catch{}if(m.length>0)o("pending"),u("complete");else return Promise.resolve();const h=Oh.begin("onTree"),p=m.reduce((v,S)=>{try{const x=Jv(S);x&&v.push(x)}catch(x){Rv||x.name==="MissingIcon"&&console.error(x)}return v},[]);return new Promise((v,S)=>{Promise.all(p).then(x=>{Zv(x,()=>{o("active"),o("complete"),u("pending"),typeof r=="function"&&r(),h(),v()})}).catch(x=>{h(),S(x)})})}function S4(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jv(n).then(i=>{i&&Zv([i],r)})}function w4(n){return function(r){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(r||{}).icon?r:Ld(r||{});let{mask:u}=i;return u&&(u=(u||{}).icon?u:Ld(u||{})),n(o,I(I({},i),{},{mask:u}))}}const E4=function(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:i=On,symbol:o=!1,mask:u=null,maskId:f=null,title:d=null,titleId:m=null,classes:h=[],attributes:p={},styles:v={}}=r;if(!n)return;const{prefix:S,iconName:x,icon:E}=n;return hu(I({type:"icon"},n),()=>(gr("beforeDOMElementCreation",{iconDefinition:n,params:r}),lt.autoA11y&&(d?p["aria-labelledby"]="".concat(lt.replacementClass,"-title-").concat(m||Il()):(p["aria-hidden"]="true",p.focusable="false")),jh({icons:{main:$d(E),mask:u?$d(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:x,transform:I(I({},On),i),symbol:o,title:d,maskId:f,titleId:m,extra:{attributes:p,styles:v,classes:h}})))};var T4={mixout(){return{icon:w4(E4)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Ry,n.nodeCallback=S4,n}}},provides(n){n.i2svg=function(r){const{node:i=Vt,callback:o=()=>{}}=r;return Ry(i,o)},n.generateSvgReplacementMutation=function(r,i){const{iconName:o,title:u,titleId:f,prefix:d,transform:m,symbol:h,mask:p,maskId:v,extra:S}=i;return new Promise((x,E)=>{Promise.all([Hd(o,d),p.iconName?Hd(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[O,R]=j;x([r,jh({icons:{main:O,mask:R},prefix:d,iconName:o,transform:m,symbol:h,maskId:v,title:u,titleId:f,extra:S,watchable:!0})])}).catch(E)})},n.generateAbstractIcon=function(r){let{children:i,attributes:o,main:u,transform:f,styles:d}=r;const m=cu(d);m.length>0&&(o.style=m);let h;return Th(f)&&(h=ka("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),i.push(h||u.icon),{children:i,attributes:o}}}},_4={mixout(){return{layer(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:i=[]}=r;return hu({type:"layer"},()=>{gr("beforeDOMElementCreation",{assembler:n,params:r});let o=[];return n(u=>{Array.isArray(u)?u.map(f=>{o=o.concat(f.abstract)}):o=o.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(lt.cssPrefix,"-layers"),...i].join(" ")},children:o}]})}}}},A4={mixout(){return{counter(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:i=null,classes:o=[],attributes:u={},styles:f={}}=r;return hu({type:"counter",content:n},()=>(gr("beforeDOMElementCreation",{content:n,params:r}),r4({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(lt.cssPrefix,"-layers-counter"),...o]}})))}}}},j4={mixout(){return{text(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:i=On,title:o=null,classes:u=[],attributes:f={},styles:d={}}=r;return hu({type:"text",content:n},()=>(gr("beforeDOMElementCreation",{content:n,params:r}),Ty({content:n,transform:I(I({},On),i),title:o,extra:{attributes:f,styles:d,classes:["".concat(lt.cssPrefix,"-layers-text"),...u]}})))}}},provides(n){n.generateLayersText=function(r,i){const{title:o,transform:u,extra:f}=i;let d=null,m=null;if(Ev){const h=parseInt(getComputedStyle(r).fontSize,10),p=r.getBoundingClientRect();d=p.width/h,m=p.height/h}return lt.autoA11y&&!o&&(f.attributes["aria-hidden"]="true"),Promise.resolve([r,Ty({content:r.innerHTML,width:d,height:m,transform:u,title:o,extra:f,watchable:!0})])}}};const O4=new RegExp('"',"ug"),zy=[1105920,1112319],Ny=I(I(I(I({},{FontAwesome:{normal:"fas",400:"fas"}}),KE),pT),oT),Yd=Object.keys(Ny).reduce((n,r)=>(n[r.toLowerCase()]=Ny[r],n),{}),C4=Object.keys(Yd).reduce((n,r)=>{const i=Yd[r];return n[r]=i[900]||[...Object.entries(i)][0][1],n},{});function R4(n){const r=n.replace(O4,""),i=UT(r,0),o=i>=zy[0]&&i<=zy[1],u=r.length===2?r[0]===r[1]:!1;return{value:Md(u?r[0]:r),isSecondary:o||u}}function z4(n,r){const i=n.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(r),u=isNaN(o)?"normal":o;return(Yd[i]||{})[u]||C4[i]}function Dy(n,r){const i="".concat(mT).concat(r.replace(":","-"));return new Promise((o,u)=>{if(n.getAttribute(i)!==null)return o();const d=zi(n.children).filter(x=>x.getAttribute(Rd)===r)[0],m=Da.getComputedStyle(n,r),h=m.getPropertyValue("font-family"),p=h.match(bT),v=m.getPropertyValue("font-weight"),S=m.getPropertyValue("content");if(d&&!p)return n.removeChild(d),o();if(p&&S!=="none"&&S!==""){const x=m.getPropertyValue("content");let E=z4(h,v);const{value:j,isSecondary:O}=R4(x),R=p[0].startsWith("FontAwesome");let w=Ah(E,j),z=w;if(R){const D=YT(j);D.iconName&&D.prefix&&(w=D.iconName,E=D.prefix)}if(w&&!O&&(!d||d.getAttribute(bh)!==E||d.getAttribute(Sh)!==z)){n.setAttribute(i,z),d&&n.removeChild(d);const D=v4(),{extra:Y}=D;Y.attributes[Rd]=r,Hd(w,E).then(A=>{const q=jh(I(I({},D),{},{icons:{main:A,mask:Vv()},prefix:E,iconName:z,extra:Y,watchable:!0})),H=Vt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?n.insertBefore(H,n.firstChild):n.appendChild(H),H.outerHTML=q.map(W=>lo(W)).join(`
`),n.removeAttribute(i),o()}).catch(u)}else o()}else o()})}function N4(n){return Promise.all([Dy(n,"::before"),Dy(n,"::after")])}function D4(n){return n.parentNode!==document.head&&!~yT.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Rd)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function My(n){if(ia)return new Promise((r,i)=>{const o=zi(n.querySelectorAll("*")).filter(D4).map(N4),u=Oh.begin("searchPseudoElements");Kv(),Promise.all(o).then(()=>{u(),qd(),r()}).catch(()=>{u(),qd(),i()})})}var M4={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=My,n}}},provides(n){n.pseudoElements2svg=function(r){const{node:i=Vt}=r;lt.searchPseudoElements&&My(i)}}};let ky=!1;var k4={mixout(){return{dom:{unwatch(){Kv(),ky=!0}}}},hooks(){return{bootstrap(){Oy(Ud("mutationObserverCallbacks",{}))},noAuto(){p4()},watch(n){const{observeMutationsRoot:r}=n;ky?qd():Oy(Ud("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}};const Uy=n=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((i,o)=>{const u=o.toLowerCase().split("-"),f=u[0];let d=u.slice(1).join("-");if(f&&d==="h")return i.flipX=!0,i;if(f&&d==="v")return i.flipY=!0,i;if(d=parseFloat(d),isNaN(d))return i;switch(f){case"grow":i.size=i.size+d;break;case"shrink":i.size=i.size-d;break;case"left":i.x=i.x-d;break;case"right":i.x=i.x+d;break;case"up":i.y=i.y-d;break;case"down":i.y=i.y+d;break;case"rotate":i.rotate=i.rotate+d;break}return i},r)};var U4={mixout(){return{parse:{transform:n=>Uy(n)}}},hooks(){return{parseNodeAttributes(n,r){const i=r.getAttribute("data-fa-transform");return i&&(n.transform=Uy(i)),n}}},provides(n){n.generateAbstractTransformGrouping=function(r){let{main:i,transform:o,containerWidth:u,iconWidth:f}=r;const d={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),h="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),p="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(m," ").concat(h," ").concat(p)},S={transform:"translate(".concat(f/2*-1," -256)")},x={outer:d,inner:v,path:S};return{tag:"g",attributes:I({},x.outer),children:[{tag:"g",attributes:I({},x.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:I(I({},i.icon.attributes),x.path)}]}]}}}};const td={x:0,y:0,width:"100%",height:"100%"};function Ly(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||r)&&(n.attributes.fill="black"),n}function L4(n){return n.tag==="g"?n.children:[n]}var $4={hooks(){return{parseNodeAttributes(n,r){const i=r.getAttribute("data-fa-mask"),o=i?du(i.split(" ").map(u=>u.trim())):Vv();return o.prefix||(o.prefix=Ma()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(r){let{children:i,attributes:o,main:u,mask:f,maskId:d,transform:m}=r;const{width:h,icon:p}=u,{width:v,icon:S}=f,x=RT({transform:m,containerWidth:v,iconWidth:h}),E={tag:"rect",attributes:I(I({},td),{},{fill:"white"})},j=p.children?{children:p.children.map(Ly)}:{},O={tag:"g",attributes:I({},x.inner),children:[Ly(I({tag:p.tag,attributes:I(I({},p.attributes),x.path)},j))]},R={tag:"g",attributes:I({},x.outer),children:[O]},w="mask-".concat(d||Il()),z="clip-".concat(d||Il()),D={tag:"mask",attributes:I(I({},td),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,R]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:L4(S)},D]};return i.push(Y,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(w,")")},td)}),{children:i,attributes:o}}}},H4={provides(n){let r=!1;Da.matchMedia&&(r=Da.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const i=[],o={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:I(I({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=I(I({},u),{},{attributeName:"opacity"}),d={tag:"circle",attributes:I(I({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||d.children.push({tag:"animate",attributes:I(I({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},f),{},{values:"1;0;1;1;0;1;"})}),i.push(d),i.push({tag:"path",attributes:I(I({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:I(I({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||i.push({tag:"path",attributes:I(I({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},B4={hooks(){return{parseNodeAttributes(n,r){const i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},q4=[DT,T4,_4,A4,j4,M4,k4,U4,$4,H4,B4];KT(q4,{mixoutsTo:Qe});Qe.noAuto;Qe.config;Qe.library;Qe.dom;const Fd=Qe.parse;Qe.findIconDefinition;Qe.toHtml;const Y4=Qe.icon;Qe.layer;Qe.text;Qe.counter;var ed={exports:{}},nd,$y;function F4(){if($y)return nd;$y=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return nd=n,nd}var ad,Hy;function G4(){if(Hy)return ad;Hy=1;var n=F4();function r(){}function i(){}return i.resetWarningCache=r,ad=function(){function o(d,m,h,p,v,S){if(S!==n){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}o.isRequired=o;function u(){return o}var f={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:u,element:o,elementType:o,instanceOf:u,node:o,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:i,resetWarningCache:r};return f.PropTypes=f,f},ad}var By;function P4(){return By||(By=1,ed.exports=G4()()),ed.exports}var V4=P4();const At=to(V4);function qy(n,r){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),i.push.apply(i,o)}return i}function jn(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?qy(Object(i),!0).forEach(function(o){gi(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):qy(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function Ks(n){"@babel/helpers - typeof";return Ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ks(n)}function gi(n,r,i){return r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function X4(n,r){if(n==null)return{};var i={},o=Object.keys(n),u,f;for(f=0;f<o.length;f++)u=o[f],!(r.indexOf(u)>=0)&&(i[u]=n[u]);return i}function I4(n,r){if(n==null)return{};var i=X4(n,r),o,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)o=f[u],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function Gd(n){return Q4(n)||Z4(n)||K4(n)||J4()}function Q4(n){if(Array.isArray(n))return Pd(n)}function Z4(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function K4(n,r){if(n){if(typeof n=="string")return Pd(n,r);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Pd(n,r)}}function Pd(n,r){(r==null||r>n.length)&&(r=n.length);for(var i=0,o=new Array(r);i<r;i++)o[i]=n[i];return o}function J4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W4(n){var r,i=n.beat,o=n.fade,u=n.beatFade,f=n.bounce,d=n.shake,m=n.flash,h=n.spin,p=n.spinPulse,v=n.spinReverse,S=n.pulse,x=n.fixedWidth,E=n.inverse,j=n.border,O=n.listItem,R=n.flip,w=n.size,z=n.rotation,D=n.pull,Y=(r={"fa-beat":i,"fa-fade":o,"fa-beat-fade":u,"fa-bounce":f,"fa-shake":d,"fa-flash":m,"fa-spin":h,"fa-spin-reverse":v,"fa-spin-pulse":p,"fa-pulse":S,"fa-fw":x,"fa-inverse":E,"fa-border":j,"fa-li":O,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},gi(r,"fa-".concat(w),typeof w<"u"&&w!==null),gi(r,"fa-rotate-".concat(z),typeof z<"u"&&z!==null&&z!==0),gi(r,"fa-pull-".concat(D),typeof D<"u"&&D!==null),gi(r,"fa-swap-opacity",n.swapOpacity),r);return Object.keys(Y).map(function(A){return Y[A]?A:null}).filter(function(A){return A})}function t3(n){return n=n-0,n===n}function Wv(n){return t3(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(r,i){return i?i.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var e3=["style"];function n3(n){return n.charAt(0).toUpperCase()+n.slice(1)}function a3(n){return n.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,i){var o=i.indexOf(":"),u=Wv(i.slice(0,o)),f=i.slice(o+1).trim();return u.startsWith("webkit")?r[n3(u)]=f:r[u]=f,r},{})}function tx(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var o=(r.children||[]).map(function(h){return tx(n,h)}),u=Object.keys(r.attributes||{}).reduce(function(h,p){var v=r.attributes[p];switch(p){case"class":h.attrs.className=v,delete r.attributes.class;break;case"style":h.attrs.style=a3(v);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?h.attrs[p.toLowerCase()]=v:h.attrs[Wv(p)]=v}return h},{attrs:{}}),f=i.style,d=f===void 0?{}:f,m=I4(i,e3);return u.attrs.style=jn(jn({},u.attrs.style),d),n.apply(void 0,[r.tag,jn(jn({},u.attrs),m)].concat(Gd(o)))}var ex=!1;try{ex=!0}catch{}function r3(){if(!ex&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Yy(n){if(n&&Ks(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Fd.icon)return Fd.icon(n);if(n===null)return null;if(n&&Ks(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function rd(n,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?gi({},n,r):{}}var Fy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Se=zt.forwardRef(function(n,r){var i=jn(jn({},Fy),n),o=i.icon,u=i.mask,f=i.symbol,d=i.className,m=i.title,h=i.titleId,p=i.maskId,v=Yy(o),S=rd("classes",[].concat(Gd(W4(i)),Gd((d||"").split(" ")))),x=rd("transform",typeof i.transform=="string"?Fd.transform(i.transform):i.transform),E=rd("mask",Yy(u)),j=Y4(v,jn(jn(jn(jn({},S),x),E),{},{symbol:f,title:m,titleId:h,maskId:p}));if(!j)return r3("Could not find icon",v),null;var O=j.abstract,R={ref:r};return Object.keys(i).forEach(function(w){Fy.hasOwnProperty(w)||(R[w]=i[w])}),i3(O[0],R)});Se.displayName="FontAwesomeIcon";Se.propTypes={beat:At.bool,border:At.bool,beatFade:At.bool,bounce:At.bool,className:At.string,fade:At.bool,flash:At.bool,mask:At.oneOfType([At.object,At.array,At.string]),maskId:At.string,fixedWidth:At.bool,inverse:At.bool,flip:At.oneOf([!0,!1,"horizontal","vertical","both"]),icon:At.oneOfType([At.object,At.array,At.string]),listItem:At.bool,pull:At.oneOf(["right","left"]),pulse:At.bool,rotation:At.oneOf([0,90,180,270]),shake:At.bool,size:At.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:At.bool,spinPulse:At.bool,spinReverse:At.bool,symbol:At.oneOfType([At.bool,At.string]),title:At.string,titleId:At.string,transform:At.oneOfType([At.string,At.object]),swapOpacity:At.bool};var i3=tx.bind(null,zt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const l3={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},o3={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Rh={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},s3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},u3={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},c3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},f3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},d3={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},h3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Vd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},p3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function nx(n){var r,i,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(r=0;r<u;r++)n[r]&&(i=nx(n[r]))&&(o&&(o+=" "),o+=i)}else for(i in n)n[i]&&(o&&(o+=" "),o+=i);return o}function dr(){for(var n,r,i=0,o="",u=arguments.length;i<u;i++)(n=arguments[i])&&(r=nx(n))&&(o&&(o+=" "),o+=r);return o}function m3(n){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}m3(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var oo=n=>typeof n=="number"&&!isNaN(n),yr=n=>typeof n=="string",aa=n=>typeof n=="function",g3=n=>yr(n)||oo(n),Xd=n=>yr(n)||aa(n)?n:null,y3=(n,r)=>n===!1||oo(n)&&n>0?n:r,Id=n=>T.isValidElement(n)||yr(n)||aa(n)||oo(n);function v3(n,r,i=300){let{scrollHeight:o,style:u}=n;requestAnimationFrame(()=>{u.minHeight="initial",u.height=o+"px",u.transition=`all ${i}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(r,i)})})}function x3({enter:n,exit:r,appendPosition:i=!1,collapse:o=!0,collapseDuration:u=300}){return function({children:f,position:d,preventExitTransition:m,done:h,nodeRef:p,isIn:v,playToast:S}){let x=i?`${n}--${d}`:n,E=i?`${r}--${d}`:r,j=T.useRef(0);return T.useLayoutEffect(()=>{let O=p.current,R=x.split(" "),w=z=>{z.target===p.current&&(S(),O.removeEventListener("animationend",w),O.removeEventListener("animationcancel",w),j.current===0&&z.type!=="animationcancel"&&O.classList.remove(...R))};O.classList.add(...R),O.addEventListener("animationend",w),O.addEventListener("animationcancel",w)},[]),T.useEffect(()=>{let O=p.current,R=()=>{O.removeEventListener("animationend",R),o?v3(O,h,u):h()};v||(m?R():(j.current=1,O.className+=` ${E}`,O.addEventListener("animationend",R)))},[v]),zt.createElement(zt.Fragment,null,f)}}function Gy(n,r){return{content:ax(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:r}}function ax(n,r,i=!1){return T.isValidElement(n)&&!yr(n.type)?T.cloneElement(n,{closeToast:r.closeToast,toastProps:r,data:r.data,isPaused:i}):aa(n)?n({closeToast:r.closeToast,toastProps:r,data:r.data,isPaused:i}):n}function b3({closeToast:n,theme:r,ariaLabel:i="close"}){return zt.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:o=>{o.stopPropagation(),n(!0)},"aria-label":i},zt.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},zt.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S3({delay:n,isRunning:r,closeToast:i,type:o="default",hide:u,className:f,controlledProgress:d,progress:m,rtl:h,isIn:p,theme:v}){let S=u||d&&m===0,x={animationDuration:`${n}ms`,animationPlayState:r?"running":"paused"};d&&(x.transform=`scaleX(${m})`);let E=dr("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":h}),j=aa(f)?f({rtl:h,type:o,defaultClassName:E}):dr(E,f),O={[d&&m>=1?"onTransitionEnd":"onAnimationEnd"]:d&&m<1?null:()=>{p&&i()}};return zt.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":S},zt.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${o}`}),zt.createElement("div",{role:"progressbar","aria-hidden":S?"true":"false","aria-label":"notification timer",className:j,style:x,...O}))}var w3=1,rx=()=>`${w3++}`;function E3(n,r,i){let o=1,u=0,f=[],d=[],m=r,h=new Map,p=new Set,v=z=>(p.add(z),()=>p.delete(z)),S=()=>{d=Array.from(h.values()),p.forEach(z=>z())},x=({containerId:z,toastId:D,updateId:Y})=>{let A=z?z!==n:n!==1,q=h.has(D)&&Y==null;return A||q},E=(z,D)=>{h.forEach(Y=>{var A;(D==null||D===Y.props.toastId)&&((A=Y.toggle)==null||A.call(Y,z))})},j=z=>{var D,Y;(Y=(D=z.props)==null?void 0:D.onClose)==null||Y.call(D,z.removalReason),z.isActive=!1},O=z=>{if(z==null)h.forEach(j);else{let D=h.get(z);D&&j(D)}S()},R=()=>{u-=f.length,f=[]},w=z=>{var D,Y;let{toastId:A,updateId:q}=z.props,H=q==null;z.staleId&&h.delete(z.staleId),z.isActive=!0,h.set(A,z),S(),i(Gy(z,H?"added":"updated")),H&&((Y=(D=z.props).onOpen)==null||Y.call(D))};return{id:n,props:m,observe:v,toggle:E,removeToast:O,toasts:h,clearQueue:R,buildToast:(z,D)=>{if(x(D))return;let{toastId:Y,updateId:A,data:q,staleId:H,delay:W}=D,rt=A==null;rt&&u++;let jt={...m,style:m.toastStyle,key:o++,...Object.fromEntries(Object.entries(D).filter(([St,kt])=>kt!=null)),toastId:Y,updateId:A,data:q,isIn:!1,className:Xd(D.className||m.toastClassName),progressClassName:Xd(D.progressClassName||m.progressClassName),autoClose:D.isLoading?!1:y3(D.autoClose,m.autoClose),closeToast(St){h.get(Y).removalReason=St,O(Y)},deleteToast(){let St=h.get(Y);if(St!=null){if(i(Gy(St,"removed")),h.delete(Y),u--,u<0&&(u=0),f.length>0){w(f.shift());return}S()}}};jt.closeButton=m.closeButton,D.closeButton===!1||Id(D.closeButton)?jt.closeButton=D.closeButton:D.closeButton===!0&&(jt.closeButton=Id(m.closeButton)?m.closeButton:!0);let ct={content:z,props:jt,staleId:H};m.limit&&m.limit>0&&u>m.limit&&rt?f.push(ct):oo(W)?setTimeout(()=>{w(ct)},W):w(ct)},setProps(z){m=z},setToggle:(z,D)=>{let Y=h.get(z);Y&&(Y.toggle=D)},isToastActive:z=>{var D;return(D=h.get(z))==null?void 0:D.isActive},getSnapshot:()=>d}}var je=new Map,Zl=[],Qd=new Set,T3=n=>Qd.forEach(r=>r(n)),ix=()=>je.size>0;function _3(){Zl.forEach(n=>ox(n.content,n.options)),Zl=[]}var A3=(n,{containerId:r})=>{var i;return(i=je.get(r||1))==null?void 0:i.toasts.get(n)};function lx(n,r){var i;if(r)return!!((i=je.get(r))!=null&&i.isToastActive(n));let o=!1;return je.forEach(u=>{u.isToastActive(n)&&(o=!0)}),o}function j3(n){if(!ix()){Zl=Zl.filter(r=>n!=null&&r.options.toastId!==n);return}if(n==null||g3(n))je.forEach(r=>{r.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let r=je.get(n.containerId);r?r.removeToast(n.id):je.forEach(i=>{i.removeToast(n.id)})}}var O3=(n={})=>{je.forEach(r=>{r.props.limit&&(!n.containerId||r.id===n.containerId)&&r.clearQueue()})};function ox(n,r){Id(n)&&(ix()||Zl.push({content:n,options:r}),je.forEach(i=>{i.buildToast(n,r)}))}function C3(n){var r;(r=je.get(n.containerId||1))==null||r.setToggle(n.id,n.fn)}function sx(n,r){je.forEach(i=>{(r==null||!(r!=null&&r.containerId)||(r==null?void 0:r.containerId)===i.id)&&i.toggle(n,r==null?void 0:r.id)})}function R3(n){let r=n.containerId||1;return{subscribe(i){let o=E3(r,n,T3);je.set(r,o);let u=o.observe(i);return _3(),()=>{u(),je.delete(r)}},setProps(i){var o;(o=je.get(r))==null||o.setProps(i)},getSnapshot(){var i;return(i=je.get(r))==null?void 0:i.getSnapshot()}}}function z3(n){return Qd.add(n),()=>{Qd.delete(n)}}function N3(n){return n&&(yr(n.toastId)||oo(n.toastId))?n.toastId:rx()}function so(n,r){return ox(n,r),r.toastId}function pu(n,r){return{...r,type:r&&r.type||n,toastId:N3(r)}}function mu(n){return(r,i)=>so(r,pu(n,i))}function ht(n,r){return so(n,pu("default",r))}ht.loading=(n,r)=>so(n,pu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...r}));function D3(n,{pending:r,error:i,success:o},u){let f;r&&(f=yr(r)?ht.loading(r,u):ht.loading(r.render,{...u,...r}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},m=(p,v,S)=>{if(v==null){ht.dismiss(f);return}let x={type:p,...d,...u,data:S},E=yr(v)?{render:v}:v;return f?ht.update(f,{...x,...E}):ht(E.render,{...x,...E}),S},h=aa(n)?n():n;return h.then(p=>m("success",o,p)).catch(p=>m("error",i,p)),h}ht.promise=D3;ht.success=mu("success");ht.info=mu("info");ht.error=mu("error");ht.warning=mu("warning");ht.warn=ht.warning;ht.dark=(n,r)=>so(n,pu("default",{theme:"dark",...r}));function M3(n){j3(n)}ht.dismiss=M3;ht.clearWaitingQueue=O3;ht.isActive=lx;ht.update=(n,r={})=>{let i=A3(n,r);if(i){let{props:o,content:u}=i,f={delay:100,...o,...r,toastId:r.toastId||n,updateId:rx()};f.toastId!==n&&(f.staleId=n);let d=f.render||u;delete f.render,so(d,f)}};ht.done=n=>{ht.update(n,{progress:1})};ht.onChange=z3;ht.play=n=>sx(!0,n);ht.pause=n=>sx(!1,n);function k3(n){var r;let{subscribe:i,getSnapshot:o,setProps:u}=T.useRef(R3(n)).current;u(n);let f=(r=T.useSyncExternalStore(i,o,o))==null?void 0:r.slice();function d(m){if(!f)return[];let h=new Map;return n.newestOnTop&&f.reverse(),f.forEach(p=>{let{position:v}=p.props;h.has(v)||h.set(v,[]),h.get(v).push(p)}),Array.from(h,p=>m(p[0],p[1]))}return{getToastToRender:d,isToastActive:lx,count:f==null?void 0:f.length}}function U3(n){let[r,i]=T.useState(!1),[o,u]=T.useState(!1),f=T.useRef(null),d=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:m,pauseOnHover:h,closeToast:p,onClick:v,closeOnClick:S}=n;C3({id:n.toastId,containerId:n.containerId,fn:i}),T.useEffect(()=>{if(n.pauseOnFocusLoss)return x(),()=>{E()}},[n.pauseOnFocusLoss]);function x(){document.hasFocus()||w(),window.addEventListener("focus",R),window.addEventListener("blur",w)}function E(){window.removeEventListener("focus",R),window.removeEventListener("blur",w)}function j(H){if(n.draggable===!0||n.draggable===H.pointerType){z();let W=f.current;d.canCloseOnClick=!0,d.canDrag=!0,W.style.transition="none",n.draggableDirection==="x"?(d.start=H.clientX,d.removalDistance=W.offsetWidth*(n.draggablePercent/100)):(d.start=H.clientY,d.removalDistance=W.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function O(H){let{top:W,bottom:rt,left:jt,right:ct}=f.current.getBoundingClientRect();H.nativeEvent.type!=="touchend"&&n.pauseOnHover&&H.clientX>=jt&&H.clientX<=ct&&H.clientY>=W&&H.clientY<=rt?w():R()}function R(){i(!0)}function w(){i(!1)}function z(){d.didMove=!1,document.addEventListener("pointermove",Y),document.addEventListener("pointerup",A)}function D(){document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",A)}function Y(H){let W=f.current;if(d.canDrag&&W){d.didMove=!0,r&&w(),n.draggableDirection==="x"?d.delta=H.clientX-d.start:d.delta=H.clientY-d.start,d.start!==H.clientX&&(d.canCloseOnClick=!1);let rt=n.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;W.style.transform=`translate3d(${rt},0)`,W.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function A(){D();let H=f.current;if(d.canDrag&&d.didMove&&H){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){u(!0),n.closeToast(!0),n.collapseAll();return}H.style.transition="transform 0.2s, opacity 0.2s",H.style.removeProperty("transform"),H.style.removeProperty("opacity")}}let q={onPointerDown:j,onPointerUp:O};return m&&h&&(q.onMouseEnter=w,n.stacked||(q.onMouseLeave=R)),S&&(q.onClick=H=>{v&&v(H),d.canCloseOnClick&&p(!0)}),{playToast:R,pauseToast:w,isRunning:r,preventExitTransition:o,toastRef:f,eventHandlers:q}}var L3=typeof window<"u"?T.useLayoutEffect:T.useEffect,gu=({theme:n,type:r,isLoading:i,...o})=>zt.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...o});function $3(n){return zt.createElement(gu,{...n},zt.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function H3(n){return zt.createElement(gu,{...n},zt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function B3(n){return zt.createElement(gu,{...n},zt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function q3(n){return zt.createElement(gu,{...n},zt.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Y3(){return zt.createElement("div",{className:"Toastify__spinner"})}var Zd={info:H3,warning:$3,success:B3,error:q3,spinner:Y3},F3=n=>n in Zd;function G3({theme:n,type:r,isLoading:i,icon:o}){let u=null,f={theme:n,type:r};return o===!1||(aa(o)?u=o({...f,isLoading:i}):T.isValidElement(o)?u=T.cloneElement(o,f):i?u=Zd.spinner():F3(r)&&(u=Zd[r](f))),u}var P3=n=>{let{isRunning:r,preventExitTransition:i,toastRef:o,eventHandlers:u,playToast:f}=U3(n),{closeButton:d,children:m,autoClose:h,onClick:p,type:v,hideProgressBar:S,closeToast:x,transition:E,position:j,className:O,style:R,progressClassName:w,updateId:z,role:D,progress:Y,rtl:A,toastId:q,deleteToast:H,isIn:W,isLoading:rt,closeOnClick:jt,theme:ct,ariaLabel:St}=n,kt=dr("Toastify__toast",`Toastify__toast-theme--${ct}`,`Toastify__toast--${v}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":jt}),re=aa(O)?O({rtl:A,position:j,type:v,defaultClassName:kt}):dr(kt,O),Xt=G3(n),F=!!Y||!h,K={closeToast:x,type:v,theme:ct},nt=null;return d===!1||(aa(d)?nt=d(K):T.isValidElement(d)?nt=T.cloneElement(d,K):nt=b3(K)),zt.createElement(E,{isIn:W,done:H,position:j,preventExitTransition:i,nodeRef:o,playToast:f},zt.createElement("div",{id:q,tabIndex:0,onClick:p,"data-in":W,className:re,...u,style:R,ref:o,...W&&{role:D,"aria-label":St}},Xt!=null&&zt.createElement("div",{className:dr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!rt})},Xt),ax(m,n,!r),nt,!n.customProgressBar&&zt.createElement(S3,{...z&&!F?{key:`p-${z}`}:{},rtl:A,theme:ct,delay:h,isRunning:r,isIn:W,closeToast:x,hide:S,type:v,className:w,controlledProgress:F,progress:Y||0})))},V3=(n,r=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:r}),X3=x3(V3("bounce",!0)),I3={position:"top-right",transition:X3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function Q3(n){let r={...I3,...n},i=n.stacked,[o,u]=T.useState(!0),f=T.useRef(null),{getToastToRender:d,isToastActive:m,count:h}=k3(r),{className:p,style:v,rtl:S,containerId:x,hotKeys:E}=r;function j(R){let w=dr("Toastify__toast-container",`Toastify__toast-container--${R}`,{"Toastify__toast-container--rtl":S});return aa(p)?p({position:R,rtl:S,defaultClassName:w}):dr(w,Xd(p))}function O(){i&&(u(!0),ht.play())}return L3(()=>{var R;if(i){let w=f.current.querySelectorAll('[data-in="true"]'),z=12,D=(R=r.position)==null?void 0:R.includes("top"),Y=0,A=0;Array.from(w).reverse().forEach((q,H)=>{let W=q;W.classList.add("Toastify__toast--stacked"),H>0&&(W.dataset.collapsed=`${o}`),W.dataset.pos||(W.dataset.pos=D?"top":"bot");let rt=Y*(o?.2:1)+(o?0:z*H);W.style.setProperty("--y",`${D?rt:rt*-1}px`),W.style.setProperty("--g",`${z}`),W.style.setProperty("--s",`${1-(o?A:0)}`),Y+=W.offsetHeight,A+=.025})}},[o,h,i]),T.useEffect(()=>{function R(w){var z;let D=f.current;E(w)&&((z=D.querySelector('[tabIndex="0"]'))==null||z.focus(),u(!1),ht.pause()),w.key==="Escape"&&(document.activeElement===D||D!=null&&D.contains(document.activeElement))&&(u(!0),ht.play())}return document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R)}},[E]),zt.createElement("section",{ref:f,className:"Toastify",id:x,onMouseEnter:()=>{i&&(u(!1),ht.pause())},onMouseLeave:O,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":r["aria-label"]},d((R,w)=>{let z=w.length?{...v}:{...v,pointerEvents:"none"};return zt.createElement("div",{tabIndex:-1,className:j(R),"data-stacked":i,style:z,key:`c-${R}`},w.map(({content:D,props:Y})=>zt.createElement(P3,{...Y,stacked:i,collapseAll:O,isIn:m(Y.toastId,Y.containerId),key:`t-${Y.key}`},D)))}))}const Z3=Z.h2`
  padding:10px 0;
  color:#4A7766;
`,K3=Z.h4`
  color:black;
  font-size:1.4em;
`,J3=Z.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  position:relative;
  justify-content:space-between;
  align-items:space-between;  
  color:black;
  Span{
    color:#4A7766;
    font-size:1.5em;
  }
`,W3=Z.div`
  display:flex;
  gap:12px;
  width:100%;
  align-items:center;
  background-color:#4A7766;
  color:whitesmoke;
  padding:10px;
  border-radius:10px;
  img{
    width:50px;
    height:50px;
  }
  .body{

  }
`,ux=Z.div`
height:55vh;
width:100%;
padding:0 5px;
margin-top:20px;  
overflow:auto;
`,zh=Z.div`
background-color:whitesmoke;
display:flex;
position:relative;
align-items:center;
padding:5px;
border-radius:10px;
margin-bottom:5px;
gap:10px;
  img{
    width:60px;
    height:60px;
    gap:5px;
  }
  .body{
    h5, p, h6{
      padding:0;
      margin:0;
    }
    p{
      color:#4A7766;
      font-weight:700;
    }
  }
    &:hover{
      cursor:pointer;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`,t_=Z.div`
  display:grid;
  grid-template-row:auto auto;
  grid-template-column:auto auto;
  gap:5px 5px;
  width:100%;
  button{
    grid-column-start:1;
    grid-column-end:3;
    background-color:#4A7766;
    color:whitesmoke;
    padding:10px;
    border-radius:10px;
  }
`,e_=Z.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
  height:100%;
  button{
    padding:10px;
    background-color:#4A7766;
    color:whitesmoke;
    border-radius:10px;
    border:none;
    font-size:1.5em;
    width:50%;
  }
`,n_=()=>{const{isOpen:n,setIsOpen:r}=T.useContext(Nn),i=ye(),{authorized:o,loading:u,userData:f,verifyAuth:d}=Dn(),m=(h,p)=>{fetch(`/removeProduct?userID=${h}&productID=${p}`,{method:"DELETE"}).then(v=>v.json()).then(v=>{console.log(v),ht.success("Product removed from the cart"),d()}).catch(v=>console.error("Error:",v))};return T.useEffect(()=>{d()},[n]),u?g.jsx("div",{children:"Loading..."}):g.jsxs("div",{className:`sidebar ${n?"visible":""}`,children:[g.jsx(Se,{icon:Vd,style:{width:"50px",height:"50px",color:"#4a7766",position:"absolute",top:"0px",right:"0px",cursor:"pointer"},onClick:()=>{r(h=>!h)}}),g.jsx(Z3,{children:"My Cart"}),o?g.jsxs(J3,{children:[g.jsxs(W3,{children:[g.jsx(Se,{icon:Rh,style:{color:"white",height:"60px",width:"60px"}}),g.jsxs("div",{className:"body",children:[g.jsx("h4",{children:f.name.length>10?`${f.name.slice(0,10)}...`:f.name}),g.jsx("h6",{children:f.phone})]})]}),g.jsxs(ux,{children:[g.jsxs("h3",{children:["Total Products ",g.jsx("span",{children:f.cartProduct.length})]}),u?g.jsx("div",{children:"Loading..."}):f.cartProduct.map((h,p)=>g.jsxs(zh,{children:[g.jsx("img",{src:h.imageURL,alt:""}),g.jsxs("div",{className:"body",onClick:()=>{i(`/results?category=${encodeURIComponent(h.category)}&pid=${encodeURIComponent(h._id)}&pname=${encodeURIComponent(h.name)}`)},children:[g.jsx("h6",{children:h.name.length>22?`${h.name.slice(0,25)}....`:h.name}),g.jsx("p",{children:h.salePrice})]}),g.jsx("div",{children:g.jsx(Se,{icon:Vd,style:{width:"30px",height:"30px",color:"#4a7766",cursor:"pointer",position:"absolute",top:"5px",right:"5px"},onClick:()=>{m(f._id,h._id)}})})]},p))]}),g.jsxs(t_,{children:[g.jsx("h5",{children:"Total Amount"}),f.cartProduct.length>0?g.jsxs("h5",{children:["₹",f.cartProduct.map(h=>Number(h.salePrice.replace(/[₹,]/g,""))).reduce((h,p)=>h+p,0).toLocaleString()]}):g.jsx("h5",{children:"₹ 0"}),g.jsx("button",{onClick:()=>{f.cartProduct.length>0?i(`/payment?pd=${encodeURIComponent(JSON.stringify(f.cartProduct))}`):ht.warning("Add some product to cart")},children:"Check Out All"})]})]}):g.jsxs(e_,{children:[g.jsx(K3,{children:"You need to SignIn first!"}),g.jsx("button",{onClick:()=>{i("/signin")},children:"Login"})]})]})},a_=Z.div`
    padding:10px;
    background-color:#4A7766;
    @media (min-width:979px){
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`,r_=Z.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        text-decoration:none;
    }
    .logo-txt{
        margin:0;
        padding:0;
        text-align:center;
        color:whitesmoke;
    }
    .searchInput{
        display:flex;
        align-items:center;
        gap:5px;
            input{
                background-color:whitesmoke;
                color:black;
                padding:5px;
                border:none;
                border-radius:10px;
            }
            .searchIcon{
                width:30px;
                height:30px;    
            }
    }
    .icons{
            .menuIcon{
            transition: background-color 0.3s ease;
                &:hover{
                    background-color: #3E6254;
                }
            }
    }
    @media (max-width:576px){
        .logo-txt{
            img{
                width:40px;
                height:40px;
            }
            p{
                font-size:1.3em;
                font-weight:500;
            }
        }
        .searchInput{
            width:60%;
            input{
                width:70%;
            }
            .searchIcon{
                width:20px;
                height:20px;

            }
            
        }
    }
    @media (min-width:577px) and (max-width:978px ){
        .logo-txt{
            img{
                width:70px;
                height:70px;
            }
            p{
                font-size:1.7em;
                font-weight:600;
            }
        }
        .searchInput{
            width:74%;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:5px;
            input{
                background: white;
                outline: none;
                border: none;
                padding: 10px;
                margin:0;
                border-radius: 10px;
                width:70%;
            }
        }
    }
    @media (min-width:979px){
        width:55%;
        .logo-txt{
            display:flex;
            align-items:center;
            gap:10px;
            img{
                width:90px;
                height:90px;
            }
            p{
                font-size:2.1em;
                font-weight:600;
            }
        }
        .searchInput{
            display:flex;
            justify-content:center;
            align-items:center;
            width:60%;
            input{
                width:70%;
                margin-right:10px;
                padding:10px;
                background-color:whitesmoke;
                color:black;
                border:none;
                border-radius:10px;
            }
            
        }
        .searchInput{
            display:block;
        }
        .icons{
            display:none;
        }
    }
`,i_=Z.div`
    display:flex;
    flex-direction:column;
    align-items: space-evenly;
    gap:10px;
        #login{
            border:2px solid whitesmoke;
        }
    button{
        color:whitesmoke;
        width:100%;
        background-color:transparent;
        padding:5px;
        border:none;
        transition: background-color 0.3s ease;
        a{
            text-decoration:none;
            color:whitesmoke;
        }
        &:hover{
            background-color: #3E6254;
            border:2px solid whitesmoke;
        }
    }
    @media (min-width:979px){
       flex-direction:row; 
    }
`;function La(){const[n,r]=T.useState("none"),[i,o]=T.useState(null),u=ye(),{authorized:f,userData:d,loading:m}=Dn(),{setIsOpen:h}=T.useContext(Nn),p=Z.div`
        display:${n};
        margin-top:10px;
        @media (min-width:979px){
            display:block;
            margin:0;
            width:40%;
        }
    `,v=()=>{i==null||i==" "?ht.warn("Type something"):u(`/search?search=${encodeURIComponent(i)}`)};return g.jsxs(g.Fragment,{children:[g.jsx(n_,{}),g.jsxs(a_,{children:[g.jsxs(r_,{children:[g.jsx(ao,{to:"/",children:g.jsxs("div",{className:"logo-txt",children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png",alt:""}),g.jsx("p",{children:"eCom"})]})}),g.jsxs("div",{className:"searchInput",children:[g.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Search your item",onChange:S=>{o(S.target.value)},onKeyDown:S=>{S.key==="Enter"&&v()}}),g.jsx(Se,{icon:h3,size:"sm",style:{color:"#ffffff"},className:"searchIcon",onClick:()=>{v()}})]}),g.jsx("div",{className:"icons",children:g.jsx(Se,{icon:o3,style:{width:"30px",height:"30px",color:"#ffffff"},className:"menuIcon",onClick:()=>{n=="none"?r("block"):r("none")}})})]}),g.jsx(p,{children:g.jsxs(i_,{children:[g.jsxs("button",{id:"login",onClick:()=>{f&!m?u("/profile"):u("/signin")},children:[g.jsx(Se,{icon:Rh,size:"2xl",style:{marginRight:"15px"}}),f&!m?d.name.length>10?`${d.name.slice(0,10)}...`:d.name:"Login"]}),g.jsxs("button",{onClick:()=>{h(S=>!S)},children:[g.jsx(Se,{icon:d3,size:"2xl",style:{marginRight:"15px"}}),"Cart"]}),g.jsxs("button",{onClick:()=>{f?u("/help"):ht.error("Login First")},children:[g.jsx(Se,{icon:u3,size:"2xl",style:{marginRight:"15px"}}),"Help"]})]})})]})]})}const l_=Z.h2`
  color: #4A7766;
  text-align: center;
  padding: 15px 10px; 
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 1.75em;
    padding: 10px;
  }

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`,o_=Z.div`
  width: 95%; 
  max-width: 600px; 
  background-color: #ECE7E2;
  padding: 15px 10px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto; 
  border-radius: 10px;
  overflow-x: auto; 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &::-webkit-scrollbar {
    height: 8px; 
    background-color: #f1f1f1; 
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4A7766; 
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #3E6254; 
  }

  scrollbar-width: thin;
  scrollbar-color: #4A7766 #f1f1f1;
`,s_=Z.div`
  padding: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px; 
  flex-shrink: 0; 
  width: auto; 
  margin: 0 5px; 

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05); 
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 576px) {
    padding: 8px;
    gap: 5px;
  }
`,u_=Z.img`
  width: 70px; 
  height: 70px;
  border-radius: 10px;
  object-fit: cover; 

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`,c_=Z.p`
  text-align: center;
  font-size: 1em; 
  font-weight: 450;
  white-space: nowrap; 

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 576px) {
    font-size: 0.8em;
  }
`;function f_(){const n=ye(),{hmdt:r,loading:i}=T.useContext(Nn);return g.jsxs(g.Fragment,{children:[g.jsx(l_,{children:"Looking For"}),g.jsx(o_,{children:i?g.jsx("div",{children:"Loading"}):r.tabCard.map((o,u)=>g.jsxs(s_,{onClick:()=>n(`/products?category=${encodeURIComponent(o.category)}`),children:[g.jsx(u_,{src:o.imageURL,alt:o.text}),g.jsx(c_,{children:o.text})]},u))})]})}const d_=Z.div`
        padding:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:5px;
        &:hover{
            cursor:pointer;
            background-color:whitemsoke;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `,h_=Z.img`
        width:100px;
        height:100px;
    `,p_=Z.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `;function m_(){const{hmdt:n,loading:r}=T.useContext(Nn),i=ye();return g.jsx(g.Fragment,{children:r?g.jsx("div",{children:"Loading"}):n.card.map((o,u)=>g.jsxs(d_,{onClick:()=>{i(`/products?category=${encodeURIComponent(o.category)}`)},children:[g.jsx(h_,{src:o.imageURL}),g.jsxs(p_,{children:[g.jsx("h5",{children:o.brand}),g.jsx("p",{children:o.text})]})]},u))})}const g_=Z.div`
        width:100%;
        display:flex;
        flex-direction:column;
        gap:5px;
        padding:10px;
        background-color:white;
        margin:25px 0px;
        border-radius:10px;
        flex-wrap:wrap;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `,y_=Z.div`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        @media (max-width: 767.98px){
            display:grid;
            grid-template-rows :auto auto auto;
            grid-template-columns : auto auto auto;
        }
         @media (max-width: 512.98px){
            display:grid;
            grid-template-rows :auto auto;
            grid-template-columns : auto auto;
        }   
    `;function v_(){return g.jsxs(g_,{children:[g.jsx("h3",{children:"Best Deals on Smartphones"}),g.jsx(y_,{children:g.jsx(m_,{})})]})}const x_=Z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    padding: 15px;
    width: 100%;
    background-color: #ECE7E2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    h2 {
        color: #4A7766;
        font-size: clamp(1.2rem, 2vw, 1.8rem);
        margin: 0;
    }

    @media (min-width: 768px) {
        width: 48%;
        padding: 20px;
    }

    @media (min-width: 1024px) {
        gap: 20px;
    }
`,b_=Z.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    @media (min-width: 768px) {
        height: 270px;
    }
`,S_=Z.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    color: black;
    font-weight: 400;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease;

        &:hover {
            cursor: pointer;
            transform: translateY(-3px);
        }
    }

    img {
        width: 100%;
        height: auto;
        max-width: 120px;
        aspect-ratio: 1/1;
        border-radius: 10px;
        object-fit: cover;
    }

    p {
        margin: 0;
        font-size: clamp(0.8rem, 1.5vw, 1rem);
        text-align: center;
    }

    @media (min-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 768px) {
        img {
            width: 80px;
            height: 80px;
        }
    }
`;function w_(){const{hmdt:n,loading:r}=T.useContext(Nn),i=ye();return g.jsx(g.Fragment,{children:r?g.jsx("h5",{children:"Loading..."}):g.jsxs(x_,{children:[g.jsx("h2",{children:"Great fashions collections"}),g.jsx(b_,{src:n.gridCardFirst.bannerImgURL,onClick:()=>{i(`/products?category=${encodeURIComponent(n.gridCardFirst.category)}`)},alt:"Fashion collection banner"}),g.jsx(S_,{children:n.gridCardFirst.secondaryData.map((o,u)=>g.jsxs("div",{onClick:()=>{i(`/products?category=${encodeURIComponent(o.category)}`)},children:[g.jsx("img",{src:o.imageURL,alt:o.text}),g.jsx("p",{children:o.text})]},u))})]})})}const E_=Z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    padding: 15px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #ECE7E2;
    
    h2 {
        color: #4A7766;
        font-size: clamp(1.2rem, 2vw, 1.8rem);
        margin: 0 0 10px 0;
    }

    @media (min-width: 768px) {
        width: 48%;
        padding: 20px;
    }
`,T_=Z.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    width: 100%;
    
    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
        gap: 15px;
        height: 100%;
    }
`,__=Z.div`
    display: flex;
    flex-direction: column;
    background-color: #4A7766;
    border-radius: 15px;
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 180px;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12px;
        flex-grow: 1;

        h4 {
            margin: 0 0 5px 0;
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
        }

        h6 {
            margin: 0;
            font-size: clamp(0.75rem, 1.2vw, 0.9rem);
            font-weight: 400;
            opacity: 0.9;
        }
    }

    @media (min-width: 480px) {
        flex-direction: row;
        min-height: auto;

        img {
            width: 48%;
            height: auto;
            border-radius: 15px 0 0 15px;
        }

        div {
            width: 52%;
            padding: 10px 12px;
        }
    }

    @media (min-width: 768px) {
        height: 100%;
    }
`;function A_(){const n=ye(),{hmdt:r,loading:i}=T.useContext(Nn);return g.jsxs(E_,{children:[g.jsx("h2",{children:"Grab Amazing Deals"}),i?g.jsx("h4",{children:"Loading..."}):g.jsx(T_,{children:r.gridCardSecond.map((o,u)=>g.jsxs(__,{onClick:()=>n(`/products?category=${encodeURIComponent(o.category)}`),children:[g.jsx("img",{src:o.imageURL,alt:o.headText||"Deal item"}),g.jsxs("div",{children:[g.jsx("h4",{children:o.headText}),g.jsx("h6",{children:o.text})]})]},u))})]})}const j_=Z.div`
@media (min-width:778px){
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
width:100%;
display:flex;
flex-direction:column;
gap:10px;
`;function O_(){return g.jsxs(j_,{children:[g.jsx(w_,{}),g.jsx(A_,{})]})}const C_=Z.h1`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #4A7766;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin: 0;
  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`,R_=Z.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  background-color: #ECE7E2;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  color: white;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 90%;
    padding: 25px;
  }

  @media (min-width: 1024px) {
    width: 85%;
    gap: 25px;
  }

  @media (min-width: 1280px) {
    width: 80%;
    max-width: 1200px;
  }
`,id=Z.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4A7766;
  gap: 15px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: contain;
    @media (min-width: 768px) {
      max-width: 120px;
    }
  }

  h3 {
    margin: 0;
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    font-weight: 600;
    line-height: 1.3;
  }

  h4 {
    margin: 0;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    font-weight: 500;
  }

  @media (min-width: 480px) {
    width: calc(50% - 15px);
    padding: 15px;
  }

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
    padding: 20px;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: clamp(1.1rem, 1.2vw, 1.4rem);
    }
  }
`;function z_(){return g.jsxs(g.Fragment,{children:[g.jsx(C_,{children:"We Guarantee"}),g.jsxs(R_,{children:[g.jsxs(id,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/delivery_wfulge.png",alt:"Fast delivery truck icon"}),g.jsx("h4",{children:"Fast Delivery"})]}),g.jsxs(id,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/quality_hqauyu.png",alt:"Quality assurance badge icon"}),g.jsx("h3",{children:"Quality Products"})]}),g.jsxs(id,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746162101/replace_pdzy8w.png",alt:"Return/Exchange arrows icon"}),g.jsx("h3",{children:"Easy Returns & Replacements"})]})]})]})}const N_="Left",D_="Right",M_="Up",k_="Down",yi={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},Kd={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Py="mousemove",Vy="mouseup",U_="touchend",L_="touchmove",$_="touchstart";function H_(n,r,i,o){return n>r?i>0?D_:N_:o>0?k_:M_}function Xy(n,r){if(r===0)return n;const i=Math.PI/180*r,o=n[0]*Math.cos(i)+n[1]*Math.sin(i),u=n[1]*Math.cos(i)-n[0]*Math.sin(i);return[o,u]}function B_(n,r){const i=v=>{const S="touches"in v;S&&v.touches.length>1||n((x,E)=>{E.trackMouse&&!S&&(document.addEventListener(Py,o),document.addEventListener(Vy,d));const{clientX:j,clientY:O}=S?v.touches[0]:v,R=Xy([j,O],E.rotationAngle);return E.onTouchStartOrOnMouseDown&&E.onTouchStartOrOnMouseDown({event:v}),Object.assign(Object.assign(Object.assign({},x),Kd),{initial:R.slice(),xy:R,start:v.timeStamp||0})})},o=v=>{n((S,x)=>{const E="touches"in v;if(E&&v.touches.length>1)return S;if(v.timeStamp-S.start>x.swipeDuration)return S.swiping?Object.assign(Object.assign({},S),{swiping:!1}):S;const{clientX:j,clientY:O}=E?v.touches[0]:v,[R,w]=Xy([j,O],x.rotationAngle),z=R-S.xy[0],D=w-S.xy[1],Y=Math.abs(z),A=Math.abs(D),q=(v.timeStamp||0)-S.start,H=Math.sqrt(Y*Y+A*A)/(q||1),W=[z/(q||1),D/(q||1)],rt=H_(Y,A,z,D),jt=typeof x.delta=="number"?x.delta:x.delta[rt.toLowerCase()]||yi.delta;if(Y<jt&&A<jt&&!S.swiping)return S;const ct={absX:Y,absY:A,deltaX:z,deltaY:D,dir:rt,event:v,first:S.first,initial:S.initial,velocity:H,vxvy:W};ct.first&&x.onSwipeStart&&x.onSwipeStart(ct),x.onSwiping&&x.onSwiping(ct);let St=!1;return(x.onSwiping||x.onSwiped||x[`onSwiped${rt}`])&&(St=!0),St&&x.preventScrollOnSwipe&&x.trackTouch&&v.cancelable&&v.preventDefault(),Object.assign(Object.assign({},S),{first:!1,eventData:ct,swiping:!0})})},u=v=>{n((S,x)=>{let E;if(S.swiping&&S.eventData){if(v.timeStamp-S.start<x.swipeDuration){E=Object.assign(Object.assign({},S.eventData),{event:v}),x.onSwiped&&x.onSwiped(E);const j=x[`onSwiped${E.dir}`];j&&j(E)}}else x.onTap&&x.onTap({event:v});return x.onTouchEndOrOnMouseUp&&x.onTouchEndOrOnMouseUp({event:v}),Object.assign(Object.assign(Object.assign({},S),Kd),{eventData:E})})},f=()=>{document.removeEventListener(Py,o),document.removeEventListener(Vy,d)},d=v=>{f(),u(v)},m=(v,S)=>{let x=()=>{};if(v&&v.addEventListener){const E=Object.assign(Object.assign({},yi.touchEventOptions),S.touchEventOptions),j=[[$_,i,E],[L_,o,Object.assign(Object.assign({},E),S.preventScrollOnSwipe?{passive:!1}:{})],[U_,u,E]];j.forEach(([O,R,w])=>v.addEventListener(O,R,w)),x=()=>j.forEach(([O,R])=>v.removeEventListener(O,R))}return x},p={ref:v=>{v!==null&&n((S,x)=>{if(S.el===v)return S;const E={};return S.el&&S.el!==v&&S.cleanUpTouch&&(S.cleanUpTouch(),E.cleanUpTouch=void 0),x.trackTouch&&v&&(E.cleanUpTouch=m(v,x)),Object.assign(Object.assign(Object.assign({},S),{el:v}),E)})}};return r.trackMouse&&(p.onMouseDown=i),[p,m]}function q_(n,r,i,o){return!r.trackTouch||!n.el?(n.cleanUpTouch&&n.cleanUpTouch(),Object.assign(Object.assign({},n),{cleanUpTouch:void 0})):n.cleanUpTouch?r.preventScrollOnSwipe!==i.preventScrollOnSwipe||r.touchEventOptions.passive!==i.touchEventOptions.passive?(n.cleanUpTouch(),Object.assign(Object.assign({},n),{cleanUpTouch:o(n.el,r)})):n:Object.assign(Object.assign({},n),{cleanUpTouch:o(n.el,r)})}function Y_(n){const{trackMouse:r}=n,i=T.useRef(Object.assign({},Kd)),o=T.useRef(Object.assign({},yi)),u=T.useRef(Object.assign({},o.current));u.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},yi),n);let f;for(f in yi)o.current[f]===void 0&&(o.current[f]=yi[f]);const[d,m]=T.useMemo(()=>B_(h=>i.current=h(i.current,o.current),{trackMouse:r}),[r]);return i.current=q_(i.current,o.current,u.current,m),d}var ld={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Iy;function F_(){return Iy||(Iy=1,function(n){(function(){var r={}.hasOwnProperty;function i(){for(var f="",d=0;d<arguments.length;d++){var m=arguments[d];m&&(f=u(f,o(m)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return i.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var d="";for(var m in f)r.call(f,m)&&f[m]&&(d=u(d,m));return d}function u(f,d){return d?f?f+" "+d:f+d:f}n.exports?(i.default=i,n.exports=i):window.classNames=i})()}(ld)),ld.exports}var G_=F_();const P_=to(G_),V_=()=>{const{hmdt:n,loading:r}=T.useContext(Nn),[i,o]=T.useState(0),u=ye();T.useRef(null);const f=()=>{o(p=>p===0?n.banners.length-1:p-1)},d=()=>{o(p=>(p+1)%n.banners.length)},m=p=>{o(p)},h=Y_({onSwipedLeft:d,onSwipedRight:f,preventDefaultTouchmoveEvent:!0,trackMouse:!0});return T.useEffect(()=>{const p=setInterval(d,5e3);return()=>clearInterval(p)},[]),r?g.jsx("div",{children:"Loading"}):g.jsxs("div",{className:"carousel-container",...h,children:[g.jsxs("div",{className:"carousel-wrapper",children:[g.jsx("button",{className:"arrow left-arrow",onClick:f,children:"❮"}),g.jsx("button",{className:"arrow right-arrow",onClick:d,children:"❯"}),g.jsx("div",{className:"carousel-slide",style:{transform:`translateX(-${i*100}%)`},children:n.banners.map((p,v)=>g.jsx("img",{src:p.imageURL,alt:`Slide ${v}`,className:"carousel-image",onClick:()=>{u(`/products?category=${encodeURIComponent(p.category)}`)}},v))})]}),g.jsx("div",{className:"carousel-dots",children:n.banners.map((p,v)=>g.jsx("span",{className:P_("dot",{active:v===i}),onClick:()=>m(v)},v))})]})},X_=Z.div`
    display:grid;
    width:100%;
    padding:10px 0;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    gap:5px 10px;
    @media (min-width:577px) and (max-width:1024px ){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
    .card-container{
        border-radius:10px;
        background-color:whitesmoke;
        padding:10px;
        display:flex;
        align-items:center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
    }
    @media (max-width:576px){
        .card-container{
            grid-column-start:1;
            grid-column-end:3;
            gap:5px;
        }
    }
    .card-img{
    	width:40%;
        height:100%;
    }
    img{
    	width:100%;
        height:100%;
    }
    .card-body{
        width:60%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:5px;
        text-align:center;
    }
    span{
    	color:#4A7766;
        font-weight:bold;
        font-size:2.5em;
    }
    .card-button{
    	background-color:#4A7766;
      color:whitesmoke;
        padding:10px;
        width:70%;
        border:none;
        border-radius:10px;
        transition: background-color 0.3s ease;
        a{
            display:inline-block;
            color:whitesmoke;
            text-decoration:none;
            width:100%;
        }
            &:hover{
                background-color: #3E6254;
            }
    }
    `;function I_(){const n=ye(),{hmdt:r,loading:i}=T.useContext(Nn);return i?g.jsx("div",{children:"Loading"}):g.jsxs(X_,{children:[g.jsx(V_,{}),r.sideCard.map((o,u)=>g.jsxs("div",{className:"card-container",children:[g.jsx("div",{className:"card-img",children:g.jsx("img",{src:o.imgaeURL,alt:""})}),g.jsxs("div",{className:"card-body",children:[g.jsx("h3",{children:`${o.text}`}),g.jsxs("p",{children:[g.jsxs("span",{children:[o.discount,"%"]})," OFF"]}),g.jsx("button",{className:"card-button",onClick:()=>{n(`/products?category=${encodeURIComponent(o.category)}`)},children:"Explore Now"})]})]},u))]})}const Q_=Z.div`
    background-color: transparent;
    width: 90%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    color: black;
    border-radius: 10px;
    border: 3px solid #4A7766;
    gap: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h3 {
        margin: 0;
        font-size: clamp(1.1rem, 4vw, 1.5rem);
        color: #4A7766;
    }

    h4, h5 {
        margin: 0;
        font-size: clamp(0.9rem, 3vw, 1.2rem);
        font-weight: 500;
    }

    button {
        padding: 12px 25px;
        border-radius: 8px;
        background: #157450;
        border: none;
        font-size: clamp(1rem, 4vw, 1.3rem);
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        max-width: 200px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

        &:hover {
            background: #0e5a3a;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }

    @media (min-width: 600px) {
        width: 70%;
        padding: 25px;
        gap: 20px;
    }

    @media (min-width: 900px) {
        width: 50%;
        padding: 30px;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`;function Z_(){return g.jsxs(Q_,{children:[g.jsx("h3",{children:"Didn't find your product?"}),g.jsx("h5",{children:"Try"}),g.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Search"}),g.jsx("h4",{children:"And grab amazing offers on products"})]})}const K_=Z.div`
    margin-top:20px;
    background-color:rgba(0, 0, 0, 0.8);
    display:flex;
    width:100%;
    padding:20px 10px;
    font-size:1.2em;
    .box{
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;  
        color:whitesmoke;
        text-align:justify;
        .para{
            width:60%;
            
        }
    .socialIcons{
        display:flex;
        gap:10px;
        img{
            width:40px;
            height:40px;
            &:hover{
                cursor:pointer;
            }
        }
    }
    .imgtxt{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }
    }
    @media (max-width:767.98px){
        flex-direction:column;
        .box{
            width:100%;
        }
    }
`,J_=Z.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    h1{
        color:#4A7766;
    }
    img{
        width:90px;
        height:90px;
        
    }
`;function Ni(){return g.jsxs(K_,{children:[g.jsxs("div",{className:"box",children:[g.jsxs(J_,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png",alt:""}),g.jsx("h1",{children:"eCom"})]}),g.jsx("div",{className:"para",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere ex illum minus. Aspernatur culpa, quasi porro voluptatibus qui neque sit vitae, voluptatem veniam ducimus nesciunt libero, tempora delectus consequatur?"})]}),g.jsxs("div",{className:"box",children:[g.jsx("h5",{children:"Follow us on"}),g.jsxs("div",{className:"socialIcons",children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002945/linked_uj3yue.png",alt:""}),g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002944/insta_j5qmv9.png",alt:""}),g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746002944/fb_pqkdbr.png",alt:""}),g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746003257/social_jkwqwj.png",alt:""})]}),g.jsx("h5",{children:"Contact Info"}),g.jsxs("div",{className:"imgtxt",children:[g.jsx(Se,{icon:c3,style:{color:"#ffffff"}}),g.jsx("p",{children:"+1 2234 5424"})]}),g.jsxs("div",{className:"imgtxt",children:[g.jsx(Se,{icon:f3,style:{color:"#ffffff"}}),g.jsx("p",{children:"shivendragkp2002@gmail.com"})]})]})]})}function W_(){return g.jsxs(ra,{children:[g.jsx(La,{}),g.jsx(I_,{}),g.jsx(f_,{}),g.jsx(v_,{}),g.jsx(O_,{}),g.jsx(z_,{}),g.jsx(Z_,{}),g.jsx(Ni,{})]})}var t5=function(r){return e5(r)&&!n5(r)};function e5(n){return!!n&&typeof n=="object"}function n5(n){var r=Object.prototype.toString.call(n);return r==="[object RegExp]"||r==="[object Date]"||i5(n)}var a5=typeof Symbol=="function"&&Symbol.for,r5=a5?Symbol.for("react.element"):60103;function i5(n){return n.$$typeof===r5}function l5(n){return Array.isArray(n)?[]:{}}function Js(n,r){return r.clone!==!1&&r.isMergeableObject(n)?Kl(l5(n),n,r):n}function o5(n,r,i){return n.concat(r).map(function(o){return Js(o,i)})}function s5(n,r,i){var o={};return i.isMergeableObject(n)&&Object.keys(n).forEach(function(u){o[u]=Js(n[u],i)}),Object.keys(r).forEach(function(u){!i.isMergeableObject(r[u])||!n[u]?o[u]=Js(r[u],i):o[u]=Kl(n[u],r[u],i)}),o}function Kl(n,r,i){i=i||{},i.arrayMerge=i.arrayMerge||o5,i.isMergeableObject=i.isMergeableObject||t5;var o=Array.isArray(r),u=Array.isArray(n),f=o===u;return f?o?i.arrayMerge(n,r,i):s5(n,r,i):Js(r,i)}Kl.all=function(r,i){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(o,u){return Kl(o,u,i)},{})};var Jd=Kl,cx=typeof global=="object"&&global&&global.Object===Object&&global,u5=typeof self=="object"&&self&&self.Object===Object&&self,Mn=cx||u5||Function("return this")(),Ua=Mn.Symbol,fx=Object.prototype,c5=fx.hasOwnProperty,f5=fx.toString,Ll=Ua?Ua.toStringTag:void 0;function d5(n){var r=c5.call(n,Ll),i=n[Ll];try{n[Ll]=void 0;var o=!0}catch{}var u=f5.call(n);return o&&(r?n[Ll]=i:delete n[Ll]),u}var h5=Object.prototype,p5=h5.toString;function m5(n){return p5.call(n)}var g5="[object Null]",y5="[object Undefined]",Qy=Ua?Ua.toStringTag:void 0;function xr(n){return n==null?n===void 0?y5:g5:Qy&&Qy in Object(n)?d5(n):m5(n)}function dx(n,r){return function(i){return n(r(i))}}var Nh=dx(Object.getPrototypeOf,Object);function br(n){return n!=null&&typeof n=="object"}var v5="[object Object]",x5=Function.prototype,b5=Object.prototype,hx=x5.toString,S5=b5.hasOwnProperty,w5=hx.call(Object);function Zy(n){if(!br(n)||xr(n)!=v5)return!1;var r=Nh(n);if(r===null)return!0;var i=S5.call(r,"constructor")&&r.constructor;return typeof i=="function"&&i instanceof i&&hx.call(i)==w5}function E5(){this.__data__=[],this.size=0}function px(n,r){return n===r||n!==n&&r!==r}function yu(n,r){for(var i=n.length;i--;)if(px(n[i][0],r))return i;return-1}var T5=Array.prototype,_5=T5.splice;function A5(n){var r=this.__data__,i=yu(r,n);if(i<0)return!1;var o=r.length-1;return i==o?r.pop():_5.call(r,i,1),--this.size,!0}function j5(n){var r=this.__data__,i=yu(r,n);return i<0?void 0:r[i][1]}function O5(n){return yu(this.__data__,n)>-1}function C5(n,r){var i=this.__data__,o=yu(i,n);return o<0?(++this.size,i.push([n,r])):i[o][1]=r,this}function la(n){var r=-1,i=n==null?0:n.length;for(this.clear();++r<i;){var o=n[r];this.set(o[0],o[1])}}la.prototype.clear=E5;la.prototype.delete=A5;la.prototype.get=j5;la.prototype.has=O5;la.prototype.set=C5;function R5(){this.__data__=new la,this.size=0}function z5(n){var r=this.__data__,i=r.delete(n);return this.size=r.size,i}function N5(n){return this.__data__.get(n)}function D5(n){return this.__data__.has(n)}function uo(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}var M5="[object AsyncFunction]",k5="[object Function]",U5="[object GeneratorFunction]",L5="[object Proxy]";function mx(n){if(!uo(n))return!1;var r=xr(n);return r==k5||r==U5||r==M5||r==L5}var od=Mn["__core-js_shared__"],Ky=function(){var n=/[^.]+$/.exec(od&&od.keys&&od.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function $5(n){return!!Ky&&Ky in n}var H5=Function.prototype,B5=H5.toString;function Sr(n){if(n!=null){try{return B5.call(n)}catch{}try{return n+""}catch{}}return""}var q5=/[\\^$.*+?()[\]{}|]/g,Y5=/^\[object .+?Constructor\]$/,F5=Function.prototype,G5=Object.prototype,P5=F5.toString,V5=G5.hasOwnProperty,X5=RegExp("^"+P5.call(V5).replace(q5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function I5(n){if(!uo(n)||$5(n))return!1;var r=mx(n)?X5:Y5;return r.test(Sr(n))}function Q5(n,r){return n==null?void 0:n[r]}function wr(n,r){var i=Q5(n,r);return I5(i)?i:void 0}var Jl=wr(Mn,"Map"),Wl=wr(Object,"create");function Z5(){this.__data__=Wl?Wl(null):{},this.size=0}function K5(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}var J5="__lodash_hash_undefined__",W5=Object.prototype,t6=W5.hasOwnProperty;function e6(n){var r=this.__data__;if(Wl){var i=r[n];return i===J5?void 0:i}return t6.call(r,n)?r[n]:void 0}var n6=Object.prototype,a6=n6.hasOwnProperty;function r6(n){var r=this.__data__;return Wl?r[n]!==void 0:a6.call(r,n)}var i6="__lodash_hash_undefined__";function l6(n,r){var i=this.__data__;return this.size+=this.has(n)?0:1,i[n]=Wl&&r===void 0?i6:r,this}function vr(n){var r=-1,i=n==null?0:n.length;for(this.clear();++r<i;){var o=n[r];this.set(o[0],o[1])}}vr.prototype.clear=Z5;vr.prototype.delete=K5;vr.prototype.get=e6;vr.prototype.has=r6;vr.prototype.set=l6;function o6(){this.size=0,this.__data__={hash:new vr,map:new(Jl||la),string:new vr}}function s6(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function vu(n,r){var i=n.__data__;return s6(r)?i[typeof r=="string"?"string":"hash"]:i.map}function u6(n){var r=vu(this,n).delete(n);return this.size-=r?1:0,r}function c6(n){return vu(this,n).get(n)}function f6(n){return vu(this,n).has(n)}function d6(n,r){var i=vu(this,n),o=i.size;return i.set(n,r),this.size+=i.size==o?0:1,this}function $a(n){var r=-1,i=n==null?0:n.length;for(this.clear();++r<i;){var o=n[r];this.set(o[0],o[1])}}$a.prototype.clear=o6;$a.prototype.delete=u6;$a.prototype.get=c6;$a.prototype.has=f6;$a.prototype.set=d6;var h6=200;function p6(n,r){var i=this.__data__;if(i instanceof la){var o=i.__data__;if(!Jl||o.length<h6-1)return o.push([n,r]),this.size=++i.size,this;i=this.__data__=new $a(o)}return i.set(n,r),this.size=i.size,this}function Di(n){var r=this.__data__=new la(n);this.size=r.size}Di.prototype.clear=R5;Di.prototype.delete=z5;Di.prototype.get=N5;Di.prototype.has=D5;Di.prototype.set=p6;function m6(n,r){for(var i=-1,o=n==null?0:n.length;++i<o&&r(n[i],i,n)!==!1;);return n}var Jy=function(){try{var n=wr(Object,"defineProperty");return n({},"",{}),n}catch{}}();function gx(n,r,i){r=="__proto__"&&Jy?Jy(n,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[r]=i}var g6=Object.prototype,y6=g6.hasOwnProperty;function yx(n,r,i){var o=n[r];(!(y6.call(n,r)&&px(o,i))||i===void 0&&!(r in n))&&gx(n,r,i)}function xu(n,r,i,o){var u=!i;i||(i={});for(var f=-1,d=r.length;++f<d;){var m=r[f],h=void 0;h===void 0&&(h=n[m]),u?gx(i,m,h):yx(i,m,h)}return i}function v6(n,r){for(var i=-1,o=Array(n);++i<n;)o[i]=r(i);return o}var x6="[object Arguments]";function Wy(n){return br(n)&&xr(n)==x6}var vx=Object.prototype,b6=vx.hasOwnProperty,S6=vx.propertyIsEnumerable,w6=Wy(function(){return arguments}())?Wy:function(n){return br(n)&&b6.call(n,"callee")&&!S6.call(n,"callee")},co=Array.isArray;function E6(){return!1}var xx=typeof Xe=="object"&&Xe&&!Xe.nodeType&&Xe,t1=xx&&typeof Ie=="object"&&Ie&&!Ie.nodeType&&Ie,T6=t1&&t1.exports===xx,e1=T6?Mn.Buffer:void 0,_6=e1?e1.isBuffer:void 0,bx=_6||E6,A6=9007199254740991,j6=/^(?:0|[1-9]\d*)$/;function O6(n,r){var i=typeof n;return r=r??A6,!!r&&(i=="number"||i!="symbol"&&j6.test(n))&&n>-1&&n%1==0&&n<r}var C6=9007199254740991;function Sx(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C6}var R6="[object Arguments]",z6="[object Array]",N6="[object Boolean]",D6="[object Date]",M6="[object Error]",k6="[object Function]",U6="[object Map]",L6="[object Number]",$6="[object Object]",H6="[object RegExp]",B6="[object Set]",q6="[object String]",Y6="[object WeakMap]",F6="[object ArrayBuffer]",G6="[object DataView]",P6="[object Float32Array]",V6="[object Float64Array]",X6="[object Int8Array]",I6="[object Int16Array]",Q6="[object Int32Array]",Z6="[object Uint8Array]",K6="[object Uint8ClampedArray]",J6="[object Uint16Array]",W6="[object Uint32Array]",Pt={};Pt[P6]=Pt[V6]=Pt[X6]=Pt[I6]=Pt[Q6]=Pt[Z6]=Pt[K6]=Pt[J6]=Pt[W6]=!0;Pt[R6]=Pt[z6]=Pt[F6]=Pt[N6]=Pt[G6]=Pt[D6]=Pt[M6]=Pt[k6]=Pt[U6]=Pt[L6]=Pt[$6]=Pt[H6]=Pt[B6]=Pt[q6]=Pt[Y6]=!1;function tA(n){return br(n)&&Sx(n.length)&&!!Pt[xr(n)]}function Dh(n){return function(r){return n(r)}}var wx=typeof Xe=="object"&&Xe&&!Xe.nodeType&&Xe,Gl=wx&&typeof Ie=="object"&&Ie&&!Ie.nodeType&&Ie,eA=Gl&&Gl.exports===wx,sd=eA&&cx.process,Ai=function(){try{var n=Gl&&Gl.require&&Gl.require("util").types;return n||sd&&sd.binding&&sd.binding("util")}catch{}}(),n1=Ai&&Ai.isTypedArray,nA=n1?Dh(n1):tA,aA=Object.prototype,rA=aA.hasOwnProperty;function Ex(n,r){var i=co(n),o=!i&&w6(n),u=!i&&!o&&bx(n),f=!i&&!o&&!u&&nA(n),d=i||o||u||f,m=d?v6(n.length,String):[],h=m.length;for(var p in n)(r||rA.call(n,p))&&!(d&&(p=="length"||u&&(p=="offset"||p=="parent")||f&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||O6(p,h)))&&m.push(p);return m}var iA=Object.prototype;function Mh(n){var r=n&&n.constructor,i=typeof r=="function"&&r.prototype||iA;return n===i}var lA=dx(Object.keys,Object),oA=Object.prototype,sA=oA.hasOwnProperty;function uA(n){if(!Mh(n))return lA(n);var r=[];for(var i in Object(n))sA.call(n,i)&&i!="constructor"&&r.push(i);return r}function Tx(n){return n!=null&&Sx(n.length)&&!mx(n)}function kh(n){return Tx(n)?Ex(n):uA(n)}function cA(n,r){return n&&xu(r,kh(r),n)}function fA(n){var r=[];if(n!=null)for(var i in Object(n))r.push(i);return r}var dA=Object.prototype,hA=dA.hasOwnProperty;function pA(n){if(!uo(n))return fA(n);var r=Mh(n),i=[];for(var o in n)o=="constructor"&&(r||!hA.call(n,o))||i.push(o);return i}function Uh(n){return Tx(n)?Ex(n,!0):pA(n)}function mA(n,r){return n&&xu(r,Uh(r),n)}var _x=typeof Xe=="object"&&Xe&&!Xe.nodeType&&Xe,a1=_x&&typeof Ie=="object"&&Ie&&!Ie.nodeType&&Ie,gA=a1&&a1.exports===_x,r1=gA?Mn.Buffer:void 0,i1=r1?r1.allocUnsafe:void 0;function yA(n,r){if(r)return n.slice();var i=n.length,o=i1?i1(i):new n.constructor(i);return n.copy(o),o}function Ax(n,r){var i=-1,o=n.length;for(r||(r=Array(o));++i<o;)r[i]=n[i];return r}function vA(n,r){for(var i=-1,o=n==null?0:n.length,u=0,f=[];++i<o;){var d=n[i];r(d,i,n)&&(f[u++]=d)}return f}function jx(){return[]}var xA=Object.prototype,bA=xA.propertyIsEnumerable,l1=Object.getOwnPropertySymbols,Lh=l1?function(n){return n==null?[]:(n=Object(n),vA(l1(n),function(r){return bA.call(n,r)}))}:jx;function SA(n,r){return xu(n,Lh(n),r)}function Ox(n,r){for(var i=-1,o=r.length,u=n.length;++i<o;)n[u+i]=r[i];return n}var wA=Object.getOwnPropertySymbols,Cx=wA?function(n){for(var r=[];n;)Ox(r,Lh(n)),n=Nh(n);return r}:jx;function EA(n,r){return xu(n,Cx(n),r)}function Rx(n,r,i){var o=r(n);return co(n)?o:Ox(o,i(n))}function TA(n){return Rx(n,kh,Lh)}function _A(n){return Rx(n,Uh,Cx)}var Wd=wr(Mn,"DataView"),th=wr(Mn,"Promise"),eh=wr(Mn,"Set"),nh=wr(Mn,"WeakMap"),o1="[object Map]",AA="[object Object]",s1="[object Promise]",u1="[object Set]",c1="[object WeakMap]",f1="[object DataView]",jA=Sr(Wd),OA=Sr(Jl),CA=Sr(th),RA=Sr(eh),zA=Sr(nh),Jn=xr;(Wd&&Jn(new Wd(new ArrayBuffer(1)))!=f1||Jl&&Jn(new Jl)!=o1||th&&Jn(th.resolve())!=s1||eh&&Jn(new eh)!=u1||nh&&Jn(new nh)!=c1)&&(Jn=function(n){var r=xr(n),i=r==AA?n.constructor:void 0,o=i?Sr(i):"";if(o)switch(o){case jA:return f1;case OA:return o1;case CA:return s1;case RA:return u1;case zA:return c1}return r});var NA=Object.prototype,DA=NA.hasOwnProperty;function MA(n){var r=n.length,i=new n.constructor(r);return r&&typeof n[0]=="string"&&DA.call(n,"index")&&(i.index=n.index,i.input=n.input),i}var d1=Mn.Uint8Array;function $h(n){var r=new n.constructor(n.byteLength);return new d1(r).set(new d1(n)),r}function kA(n,r){var i=r?$h(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}var UA=/\w*$/;function LA(n){var r=new n.constructor(n.source,UA.exec(n));return r.lastIndex=n.lastIndex,r}var h1=Ua?Ua.prototype:void 0,p1=h1?h1.valueOf:void 0;function $A(n){return p1?Object(p1.call(n)):{}}function HA(n,r){var i=r?$h(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}var BA="[object Boolean]",qA="[object Date]",YA="[object Map]",FA="[object Number]",GA="[object RegExp]",PA="[object Set]",VA="[object String]",XA="[object Symbol]",IA="[object ArrayBuffer]",QA="[object DataView]",ZA="[object Float32Array]",KA="[object Float64Array]",JA="[object Int8Array]",WA="[object Int16Array]",tj="[object Int32Array]",ej="[object Uint8Array]",nj="[object Uint8ClampedArray]",aj="[object Uint16Array]",rj="[object Uint32Array]";function ij(n,r,i){var o=n.constructor;switch(r){case IA:return $h(n);case BA:case qA:return new o(+n);case QA:return kA(n,i);case ZA:case KA:case JA:case WA:case tj:case ej:case nj:case aj:case rj:return HA(n,i);case YA:return new o;case FA:case VA:return new o(n);case GA:return LA(n);case PA:return new o;case XA:return $A(n)}}var m1=Object.create,lj=function(){function n(){}return function(r){if(!uo(r))return{};if(m1)return m1(r);n.prototype=r;var i=new n;return n.prototype=void 0,i}}();function oj(n){return typeof n.constructor=="function"&&!Mh(n)?lj(Nh(n)):{}}var sj="[object Map]";function uj(n){return br(n)&&Jn(n)==sj}var g1=Ai&&Ai.isMap,cj=g1?Dh(g1):uj,fj="[object Set]";function dj(n){return br(n)&&Jn(n)==fj}var y1=Ai&&Ai.isSet,hj=y1?Dh(y1):dj,pj=1,mj=2,gj=4,zx="[object Arguments]",yj="[object Array]",vj="[object Boolean]",xj="[object Date]",bj="[object Error]",Nx="[object Function]",Sj="[object GeneratorFunction]",wj="[object Map]",Ej="[object Number]",Dx="[object Object]",Tj="[object RegExp]",_j="[object Set]",Aj="[object String]",jj="[object Symbol]",Oj="[object WeakMap]",Cj="[object ArrayBuffer]",Rj="[object DataView]",zj="[object Float32Array]",Nj="[object Float64Array]",Dj="[object Int8Array]",Mj="[object Int16Array]",kj="[object Int32Array]",Uj="[object Uint8Array]",Lj="[object Uint8ClampedArray]",$j="[object Uint16Array]",Hj="[object Uint32Array]",Ft={};Ft[zx]=Ft[yj]=Ft[Cj]=Ft[Rj]=Ft[vj]=Ft[xj]=Ft[zj]=Ft[Nj]=Ft[Dj]=Ft[Mj]=Ft[kj]=Ft[wj]=Ft[Ej]=Ft[Dx]=Ft[Tj]=Ft[_j]=Ft[Aj]=Ft[jj]=Ft[Uj]=Ft[Lj]=Ft[$j]=Ft[Hj]=!0;Ft[bj]=Ft[Nx]=Ft[Oj]=!1;function Pl(n,r,i,o,u,f){var d,m=r&pj,h=r&mj,p=r&gj;if(d!==void 0)return d;if(!uo(n))return n;var v=co(n);if(v){if(d=MA(n),!m)return Ax(n,d)}else{var S=Jn(n),x=S==Nx||S==Sj;if(bx(n))return yA(n,m);if(S==Dx||S==zx||x&&!u){if(d=h||x?{}:oj(n),!m)return h?EA(n,mA(d,n)):SA(n,cA(d,n))}else{if(!Ft[S])return u?n:{};d=ij(n,S,m)}}f||(f=new Di);var E=f.get(n);if(E)return E;f.set(n,d),hj(n)?n.forEach(function(R){d.add(Pl(R,r,i,R,n,f))}):cj(n)&&n.forEach(function(R,w){d.set(w,Pl(R,r,i,w,n,f))});var j=p?h?_A:TA:h?Uh:kh,O=v?void 0:j(n);return m6(O||n,function(R,w){O&&(w=R,R=n[w]),yx(d,w,Pl(R,r,i,w,n,f))}),d}var Bj=1,qj=4;function Cs(n){return Pl(n,Bj|qj)}var ud,v1;function Yj(){if(v1)return ud;v1=1;var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,o=typeof Element<"u";function u(f,d){if(f===d)return!0;if(f&&d&&typeof f=="object"&&typeof d=="object"){var m=n(f),h=n(d),p,v,S;if(m&&h){if(v=f.length,v!=d.length)return!1;for(p=v;p--!==0;)if(!u(f[p],d[p]))return!1;return!0}if(m!=h)return!1;var x=f instanceof Date,E=d instanceof Date;if(x!=E)return!1;if(x&&E)return f.getTime()==d.getTime();var j=f instanceof RegExp,O=d instanceof RegExp;if(j!=O)return!1;if(j&&O)return f.toString()==d.toString();var R=r(f);if(v=R.length,v!==r(d).length)return!1;for(p=v;p--!==0;)if(!i.call(d,R[p]))return!1;if(o&&f instanceof Element&&d instanceof Element)return f===d;for(p=v;p--!==0;)if(S=R[p],!(S==="_owner"&&f.$$typeof)&&!u(f[S],d[S]))return!1;return!0}return f!==f&&d!==d}return ud=function(d,m){try{return u(d,m)}catch(h){if(h.message&&h.message.match(/stack|recursion/i)||h.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",h.name,h.message),!1;throw h}},ud}var Fj=Yj();const lr=to(Fj);var Gj=4;function x1(n){return Pl(n,Gj)}function Mx(n,r){for(var i=-1,o=n==null?0:n.length,u=Array(o);++i<o;)u[i]=r(n[i],i,n);return u}var Pj="[object Symbol]";function Hh(n){return typeof n=="symbol"||br(n)&&xr(n)==Pj}var Vj="Expected a function";function Bh(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(Vj);var i=function(){var o=arguments,u=r?r.apply(this,o):o[0],f=i.cache;if(f.has(u))return f.get(u);var d=n.apply(this,o);return i.cache=f.set(u,d)||f,d};return i.cache=new(Bh.Cache||$a),i}Bh.Cache=$a;var Xj=500;function Ij(n){var r=Bh(n,function(o){return i.size===Xj&&i.clear(),o}),i=r.cache;return r}var Qj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zj=/\\(\\)?/g,Kj=Ij(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Qj,function(i,o,u,f){r.push(u?f.replace(Zj,"$1"):o||i)}),r});function Jj(n){if(typeof n=="string"||Hh(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}var b1=Ua?Ua.prototype:void 0,S1=b1?b1.toString:void 0;function kx(n){if(typeof n=="string")return n;if(co(n))return Mx(n,kx)+"";if(Hh(n))return S1?S1.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function Wj(n){return n==null?"":kx(n)}function Ux(n){return co(n)?Mx(n,Jj):Hh(n)?[n]:Ax(Kj(Wj(n)))}var cd={exports:{}},Dt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function tO(){if(w1)return Dt;w1=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,h=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,S=n?Symbol.for("react.suspense"):60113,x=n?Symbol.for("react.suspense_list"):60120,E=n?Symbol.for("react.memo"):60115,j=n?Symbol.for("react.lazy"):60116,O=n?Symbol.for("react.block"):60121,R=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,z=n?Symbol.for("react.scope"):60119;function D(A){if(typeof A=="object"&&A!==null){var q=A.$$typeof;switch(q){case r:switch(A=A.type,A){case h:case p:case o:case f:case u:case S:return A;default:switch(A=A&&A.$$typeof,A){case m:case v:case j:case E:case d:return A;default:return q}}case i:return q}}}function Y(A){return D(A)===p}return Dt.AsyncMode=h,Dt.ConcurrentMode=p,Dt.ContextConsumer=m,Dt.ContextProvider=d,Dt.Element=r,Dt.ForwardRef=v,Dt.Fragment=o,Dt.Lazy=j,Dt.Memo=E,Dt.Portal=i,Dt.Profiler=f,Dt.StrictMode=u,Dt.Suspense=S,Dt.isAsyncMode=function(A){return Y(A)||D(A)===h},Dt.isConcurrentMode=Y,Dt.isContextConsumer=function(A){return D(A)===m},Dt.isContextProvider=function(A){return D(A)===d},Dt.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===r},Dt.isForwardRef=function(A){return D(A)===v},Dt.isFragment=function(A){return D(A)===o},Dt.isLazy=function(A){return D(A)===j},Dt.isMemo=function(A){return D(A)===E},Dt.isPortal=function(A){return D(A)===i},Dt.isProfiler=function(A){return D(A)===f},Dt.isStrictMode=function(A){return D(A)===u},Dt.isSuspense=function(A){return D(A)===S},Dt.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===o||A===p||A===f||A===u||A===S||A===x||typeof A=="object"&&A!==null&&(A.$$typeof===j||A.$$typeof===E||A.$$typeof===d||A.$$typeof===m||A.$$typeof===v||A.$$typeof===R||A.$$typeof===w||A.$$typeof===z||A.$$typeof===O)},Dt.typeOf=D,Dt}var E1;function eO(){return E1||(E1=1,cd.exports=tO()),cd.exports}var fd,T1;function nO(){if(T1)return fd;T1=1;var n=eO(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};f[n.ForwardRef]=o,f[n.Memo]=u;function d(j){return n.isMemo(j)?u:f[j.$$typeof]||r}var m=Object.defineProperty,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,S=Object.getPrototypeOf,x=Object.prototype;function E(j,O,R){if(typeof O!="string"){if(x){var w=S(O);w&&w!==x&&E(j,w,R)}var z=h(O);p&&(z=z.concat(p(O)));for(var D=d(j),Y=d(O),A=0;A<z.length;++A){var q=z[A];if(!i[q]&&!(R&&R[q])&&!(Y&&Y[q])&&!(D&&D[q])){var H=v(O,q);try{m(j,q,H)}catch{}}}}return j}return fd=E,fd}nO();function me(){return me=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},me.apply(this,arguments)}function Lx(n,r){if(n==null)return{};var i={},o=Object.keys(n),u,f;for(f=0;f<o.length;f++)u=o[f],!(r.indexOf(u)>=0)&&(i[u]=n[u]);return i}var bu=T.createContext(void 0);bu.displayName="FormikContext";bu.Provider;bu.Consumer;function aO(){var n=T.useContext(bu);return n}var pn=function(r){return typeof r=="function"},Su=function(r){return r!==null&&typeof r=="object"},rO=function(r){return String(Math.floor(Number(r)))===r},dd=function(r){return Object.prototype.toString.call(r)==="[object String]"},hd=function(r){return Su(r)&&pn(r.then)};function Pe(n,r,i,o){o===void 0&&(o=0);for(var u=Ux(r);n&&o<u.length;)n=n[u[o++]];return o!==u.length&&!n||n===void 0?i:n}function hr(n,r,i){for(var o=x1(n),u=o,f=0,d=Ux(r);f<d.length-1;f++){var m=d[f],h=Pe(n,d.slice(0,f+1));if(h&&(Su(h)||Array.isArray(h)))u=u[m]=x1(h);else{var p=d[f+1];u=u[m]=rO(p)&&Number(p)>=0?[]:{}}}return(f===0?n:u)[d[f]]===i?n:(i===void 0?delete u[d[f]]:u[d[f]]=i,f===0&&i===void 0&&delete o[d[f]],o)}function $x(n,r,i,o){i===void 0&&(i=new WeakMap),o===void 0&&(o={});for(var u=0,f=Object.keys(n);u<f.length;u++){var d=f[u],m=n[d];Su(m)?i.get(m)||(i.set(m,!0),o[d]=Array.isArray(m)?[]:{},$x(m,r,i,o[d])):o[d]=r}return o}function iO(n,r){switch(r.type){case"SET_VALUES":return me({},n,{values:r.payload});case"SET_TOUCHED":return me({},n,{touched:r.payload});case"SET_ERRORS":return lr(n.errors,r.payload)?n:me({},n,{errors:r.payload});case"SET_STATUS":return me({},n,{status:r.payload});case"SET_ISSUBMITTING":return me({},n,{isSubmitting:r.payload});case"SET_ISVALIDATING":return me({},n,{isValidating:r.payload});case"SET_FIELD_VALUE":return me({},n,{values:hr(n.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return me({},n,{touched:hr(n.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return me({},n,{errors:hr(n.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return me({},n,r.payload);case"SET_FORMIK_STATE":return r.payload(n);case"SUBMIT_ATTEMPT":return me({},n,{touched:$x(n.values,!0),isSubmitting:!0,submitCount:n.submitCount+1});case"SUBMIT_FAILURE":return me({},n,{isSubmitting:!1});case"SUBMIT_SUCCESS":return me({},n,{isSubmitting:!1});default:return n}}var ir={},Rs={};function qh(n){var r=n.validateOnChange,i=r===void 0?!0:r,o=n.validateOnBlur,u=o===void 0?!0:o,f=n.validateOnMount,d=f===void 0?!1:f,m=n.isInitialValid,h=n.enableReinitialize,p=h===void 0?!1:h,v=n.onSubmit,S=Lx(n,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),x=me({validateOnChange:i,validateOnBlur:u,validateOnMount:d,onSubmit:v},S),E=T.useRef(x.initialValues),j=T.useRef(x.initialErrors||ir),O=T.useRef(x.initialTouched||Rs),R=T.useRef(x.initialStatus),w=T.useRef(!1),z=T.useRef({});T.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]);var D=T.useState(0),Y=D[1],A=T.useRef({values:Cs(x.initialValues),errors:Cs(x.initialErrors)||ir,touched:Cs(x.initialTouched)||Rs,status:Cs(x.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),q=A.current,H=T.useCallback(function(B){var tt=A.current;A.current=iO(tt,B),tt!==A.current&&Y(function(it){return it+1})},[]),W=T.useCallback(function(B,tt){return new Promise(function(it,ut){var gt=x.validate(B,tt);gt==null?it(ir):hd(gt)?gt.then(function(yt){it(yt||ir)},function(yt){ut(yt)}):it(gt)})},[x.validate]),rt=T.useCallback(function(B,tt){var it=x.validationSchema,ut=pn(it)?it(tt):it,gt=tt&&ut.validateAt?ut.validateAt(tt,B):oO(B,ut);return new Promise(function(yt,It){gt.then(function(){yt(ir)},function(Kt){Kt.name==="ValidationError"?yt(lO(Kt)):It(Kt)})})},[x.validationSchema]),jt=T.useCallback(function(B,tt){return new Promise(function(it){return it(z.current[B].validate(tt))})},[]),ct=T.useCallback(function(B){var tt=Object.keys(z.current).filter(function(ut){return pn(z.current[ut].validate)}),it=tt.length>0?tt.map(function(ut){return jt(ut,Pe(B,ut))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(it).then(function(ut){return ut.reduce(function(gt,yt,It){return yt==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||yt&&(gt=hr(gt,tt[It],yt)),gt},{})})},[jt]),St=T.useCallback(function(B){return Promise.all([ct(B),x.validationSchema?rt(B):{},x.validate?W(B):{}]).then(function(tt){var it=tt[0],ut=tt[1],gt=tt[2],yt=Jd.all([it,ut,gt],{arrayMerge:sO});return yt})},[x.validate,x.validationSchema,ct,W,rt]),kt=on(function(B){return B===void 0&&(B=q.values),H({type:"SET_ISVALIDATING",payload:!0}),St(B).then(function(tt){return w.current&&(H({type:"SET_ISVALIDATING",payload:!1}),H({type:"SET_ERRORS",payload:tt})),tt})});T.useEffect(function(){d&&w.current===!0&&lr(E.current,x.initialValues)&&kt(E.current)},[d,kt]);var re=T.useCallback(function(B){var tt=B&&B.values?B.values:E.current,it=B&&B.errors?B.errors:j.current?j.current:x.initialErrors||{},ut=B&&B.touched?B.touched:O.current?O.current:x.initialTouched||{},gt=B&&B.status?B.status:R.current?R.current:x.initialStatus;E.current=tt,j.current=it,O.current=ut,R.current=gt;var yt=function(){H({type:"RESET_FORM",payload:{isSubmitting:!!B&&!!B.isSubmitting,errors:it,touched:ut,status:gt,values:tt,isValidating:!!B&&!!B.isValidating,submitCount:B&&B.submitCount&&typeof B.submitCount=="number"?B.submitCount:0}})};if(x.onReset){var It=x.onReset(q.values,Er);hd(It)?It.then(yt):yt()}else yt()},[x.initialErrors,x.initialStatus,x.initialTouched,x.onReset]);T.useEffect(function(){w.current===!0&&!lr(E.current,x.initialValues)&&p&&(E.current=x.initialValues,re(),d&&kt(E.current))},[p,x.initialValues,re,d,kt]),T.useEffect(function(){p&&w.current===!0&&!lr(j.current,x.initialErrors)&&(j.current=x.initialErrors||ir,H({type:"SET_ERRORS",payload:x.initialErrors||ir}))},[p,x.initialErrors]),T.useEffect(function(){p&&w.current===!0&&!lr(O.current,x.initialTouched)&&(O.current=x.initialTouched||Rs,H({type:"SET_TOUCHED",payload:x.initialTouched||Rs}))},[p,x.initialTouched]),T.useEffect(function(){p&&w.current===!0&&!lr(R.current,x.initialStatus)&&(R.current=x.initialStatus,H({type:"SET_STATUS",payload:x.initialStatus}))},[p,x.initialStatus,x.initialTouched]);var Xt=on(function(B){if(z.current[B]&&pn(z.current[B].validate)){var tt=Pe(q.values,B),it=z.current[B].validate(tt);return hd(it)?(H({type:"SET_ISVALIDATING",payload:!0}),it.then(function(ut){return ut}).then(function(ut){H({type:"SET_FIELD_ERROR",payload:{field:B,value:ut}}),H({type:"SET_ISVALIDATING",payload:!1})})):(H({type:"SET_FIELD_ERROR",payload:{field:B,value:it}}),Promise.resolve(it))}else if(x.validationSchema)return H({type:"SET_ISVALIDATING",payload:!0}),rt(q.values,B).then(function(ut){return ut}).then(function(ut){H({type:"SET_FIELD_ERROR",payload:{field:B,value:Pe(ut,B)}}),H({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),F=T.useCallback(function(B,tt){var it=tt.validate;z.current[B]={validate:it}},[]),K=T.useCallback(function(B){delete z.current[B]},[]),nt=on(function(B,tt){H({type:"SET_TOUCHED",payload:B});var it=tt===void 0?u:tt;return it?kt(q.values):Promise.resolve()}),xt=T.useCallback(function(B){H({type:"SET_ERRORS",payload:B})},[]),C=on(function(B,tt){var it=pn(B)?B(q.values):B;H({type:"SET_VALUES",payload:it});var ut=tt===void 0?i:tt;return ut?kt(it):Promise.resolve()}),V=T.useCallback(function(B,tt){H({type:"SET_FIELD_ERROR",payload:{field:B,value:tt}})},[]),Q=on(function(B,tt,it){H({type:"SET_FIELD_VALUE",payload:{field:B,value:tt}});var ut=it===void 0?i:it;return ut?kt(hr(q.values,B,tt)):Promise.resolve()}),J=T.useCallback(function(B,tt){var it=tt,ut=B,gt;if(!dd(B)){B.persist&&B.persist();var yt=B.target?B.target:B.currentTarget,It=yt.type,Kt=yt.name,ki=yt.id,Ui=yt.value,_u=yt.checked;yt.outerHTML;var Ba=yt.options,Ar=yt.multiple;it=tt||Kt||ki,ut=/number|range/.test(It)?(gt=parseFloat(Ui),isNaN(gt)?"":gt):/checkbox/.test(It)?cO(Pe(q.values,it),_u,Ui):Ba&&Ar?uO(Ba):Ui}it&&Q(it,ut)},[Q,q.values]),at=on(function(B){if(dd(B))return function(tt){return J(tt,B)};J(B)}),mt=on(function(B,tt,it){tt===void 0&&(tt=!0),H({type:"SET_FIELD_TOUCHED",payload:{field:B,value:tt}});var ut=it===void 0?u:it;return ut?kt(q.values):Promise.resolve()}),st=T.useCallback(function(B,tt){B.persist&&B.persist();var it=B.target,ut=it.name,gt=it.id;it.outerHTML;var yt=tt||ut||gt;mt(yt,!0)},[mt]),Wt=on(function(B){if(dd(B))return function(tt){return st(tt,B)};st(B)}),Ct=T.useCallback(function(B){pn(B)?H({type:"SET_FORMIK_STATE",payload:B}):H({type:"SET_FORMIK_STATE",payload:function(){return B}})},[]),se=T.useCallback(function(B){H({type:"SET_STATUS",payload:B})},[]),xn=T.useCallback(function(B){H({type:"SET_ISSUBMITTING",payload:B})},[]),Le=on(function(){return H({type:"SUBMIT_ATTEMPT"}),kt().then(function(B){var tt=B instanceof Error,it=!tt&&Object.keys(B).length===0;if(it){var ut;try{if(ut=Mi(),ut===void 0)return}catch(gt){throw gt}return Promise.resolve(ut).then(function(gt){return w.current&&H({type:"SUBMIT_SUCCESS"}),gt}).catch(function(gt){if(w.current)throw H({type:"SUBMIT_FAILURE"}),gt})}else if(w.current&&(H({type:"SUBMIT_FAILURE"}),tt))throw B})}),Oe=on(function(B){B&&B.preventDefault&&pn(B.preventDefault)&&B.preventDefault(),B&&B.stopPropagation&&pn(B.stopPropagation)&&B.stopPropagation(),Le().catch(function(tt){console.warn("Warning: An unhandled error was caught from submitForm()",tt)})}),Er={resetForm:re,validateForm:kt,validateField:Xt,setErrors:xt,setFieldError:V,setFieldTouched:mt,setFieldValue:Q,setStatus:se,setSubmitting:xn,setTouched:nt,setValues:C,setFormikState:Ct,submitForm:Le},Mi=on(function(){return v(q.values,Er)}),wu=on(function(B){B&&B.preventDefault&&pn(B.preventDefault)&&B.preventDefault(),B&&B.stopPropagation&&pn(B.stopPropagation)&&B.stopPropagation(),re()}),Eu=T.useCallback(function(B){return{value:Pe(q.values,B),error:Pe(q.errors,B),touched:!!Pe(q.touched,B),initialValue:Pe(E.current,B),initialTouched:!!Pe(O.current,B),initialError:Pe(j.current,B)}},[q.errors,q.touched,q.values]),Ze=T.useCallback(function(B){return{setValue:function(it,ut){return Q(B,it,ut)},setTouched:function(it,ut){return mt(B,it,ut)},setError:function(it){return V(B,it)}}},[Q,mt,V]),Tu=T.useCallback(function(B){var tt=Su(B),it=tt?B.name:B,ut=Pe(q.values,it),gt={name:it,value:ut,onChange:at,onBlur:Wt};if(tt){var yt=B.type,It=B.value,Kt=B.as,ki=B.multiple;yt==="checkbox"?It===void 0?gt.checked=!!ut:(gt.checked=!!(Array.isArray(ut)&&~ut.indexOf(It)),gt.value=It):yt==="radio"?(gt.checked=ut===It,gt.value=It):Kt==="select"&&ki&&(gt.value=gt.value||[],gt.multiple=!0)}return gt},[Wt,at,q.values]),Tr=T.useMemo(function(){return!lr(E.current,q.values)},[E.current,q.values]),fo=T.useMemo(function(){return typeof m<"u"?Tr?q.errors&&Object.keys(q.errors).length===0:m!==!1&&pn(m)?m(x):m:q.errors&&Object.keys(q.errors).length===0},[m,Tr,q.errors,x]),_r=me({},q,{initialValues:E.current,initialErrors:j.current,initialTouched:O.current,initialStatus:R.current,handleBlur:Wt,handleChange:at,handleReset:wu,handleSubmit:Oe,resetForm:re,setErrors:xt,setFormikState:Ct,setFieldTouched:mt,setFieldValue:Q,setFieldError:V,setStatus:se,setSubmitting:xn,setTouched:nt,setValues:C,submitForm:Le,validateForm:kt,validateField:Xt,isValid:fo,dirty:Tr,unregisterField:K,registerField:F,getFieldProps:Tu,getFieldMeta:Eu,getFieldHelpers:Ze,validateOnBlur:u,validateOnChange:i,validateOnMount:d});return _r}function lO(n){var r={};if(n.inner){if(n.inner.length===0)return hr(r,n.path,n.message);for(var u=n.inner,i=Array.isArray(u),o=0,u=i?u:u[Symbol.iterator]();;){var f;if(i){if(o>=u.length)break;f=u[o++]}else{if(o=u.next(),o.done)break;f=o.value}var d=f;Pe(r,d.path)||(r=hr(r,d.path,d.message))}}return r}function oO(n,r,i,o){i===void 0&&(i=!1);var u=ah(n);return r[i?"validateSync":"validate"](u,{abortEarly:!1,context:u})}function ah(n){var r=Array.isArray(n)?[]:{};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=String(i);Array.isArray(n[o])===!0?r[o]=n[o].map(function(u){return Array.isArray(u)===!0||Zy(u)?ah(u):u!==""?u:void 0}):Zy(n[o])?r[o]=ah(n[o]):r[o]=n[o]!==""?n[o]:void 0}return r}function sO(n,r,i){var o=n.slice();return r.forEach(function(f,d){if(typeof o[d]>"u"){var m=i.clone!==!1,h=m&&i.isMergeableObject(f);o[d]=h?Jd(Array.isArray(f)?[]:{},f,i):f}else i.isMergeableObject(f)?o[d]=Jd(n[d],f,i):n.indexOf(f)===-1&&o.push(f)}),o}function uO(n){return Array.from(n).filter(function(r){return r.selected}).map(function(r){return r.value})}function cO(n,r,i){if(typeof n=="boolean")return!!r;var o=[],u=!1,f=-1;if(Array.isArray(n))o=n,f=n.indexOf(i),u=f>=0;else if(!i||i=="true"||i=="false")return!!r;return r&&i&&!u?o.concat(i):u?o.slice(0,f).concat(o.slice(f+1)):o}var fO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function on(n){var r=T.useRef(n);return fO(function(){r.current=n}),T.useCallback(function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return r.current.apply(void 0,o)},[])}var dO=T.forwardRef(function(n,r){var i=n.action,o=Lx(n,["action"]),u=i??"#",f=aO(),d=f.handleReset,m=f.handleSubmit;return T.createElement("form",me({onSubmit:m,ref:r,onReset:d,action:u},o))});dO.displayName="Form";const hO=Z.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80%;
    max-width: 900px;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: black;
    color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        max-width: 500px;
    }
    @media (max-width: 480px) {
        width: 95%;
        top: 45%;
    }
`,pO=Z.div`
    width: 40%;
    padding: 20px;
    background-color: #4A7766;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    h2, h5, p {
        padding: 0;
        margin: 0;
    }
    img {
        width: clamp(100px, 25vw, 140px);
        height: clamp(100px, 25vw, 140px);
        object-fit: contain;
    }
    div {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    button {
        padding: 12px 24px;
        color: #4A7766;
        background-color: whitesmoke;
        border-radius: 8px;
        border: none;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #e0e0e0;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 16px;
        padding: 16px;
        img {
            width: clamp(80px, 20vw, 100px);
            height: clamp(80px, 20vw, 100px);
        }
        h2 {
            font-size: clamp(1.2rem, 4vw, 1.5rem);
        }
        button {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            padding: 10px 20px;
        }
    }
`,mO=Z.div`
    width: 60%;
    background-color: #ECE7E2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 0 12px 12px 0;
    h2 {
        color: #4A7766;
        font-size: clamp(1.5rem, 4vw, 1.8rem);
        margin-bottom: 16px;
    }
    form {
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 300px;
        input {
            padding: 12px;
            border-radius: 8px;
            width: 100%;
            background-color: white;
            outline: none;
            border: none;
            color: black;
            font-size: clamp(0.9rem, 2.5vw, 1rem);
        }
        button {
            background-color: #4A7766;
            color: white;
            border: none;
            font-size: clamp(1rem, 2.5vw, 1.1rem);
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            &:hover {
                background-color: #3a5f50;
            }
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 16px;
        border-radius: 0 0 12px 12px;
        form {
            max-width: 100%;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;
        h2 {
            font-size: clamp(1.3rem, 4vw, 1.5rem);
        }
    }
`;function gO(){const{authorized:n,loading:r}=Dn(),[i,o]=T.useState(!1),[u,f]=T.useState(""),d=ye(),{values:m,errors:h,handleChange:p,handleBlur:v,handleSubmit:S,touched:x}=qh({initialValues:{username:"",userpassword:""},validate:E=>{Object.keys(E).forEach(j=>{E[j]?delete h[j]:h[j]=`${j.charAt(0).toUpperCase()+j.slice(1)} is required`})},onSubmit:(E,j)=>{fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E),credentials:"include"}).then(O=>O.json()).then(O=>{if(O.status==="SUCCESS")o(!1),d("/"),ht.success("Login Successful");else if(O.status==="FAILED")throw o(!0),f(O.message),ht.error("Login Failed! Try Again"),new Error(O.message)}).catch(O=>{console.log("Error while login",O)})}});return r?g.jsx("div",{children:"Loading..."}):n?g.jsx(G1,{to:"/"}):g.jsxs(g.Fragment,{children:[g.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),g.jsxs(hO,{children:[g.jsxs(pO,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png",alt:"Logo"}),g.jsx("h2",{children:"Welcome Back!"}),g.jsxs("div",{children:[g.jsx("h5",{children:"Login"}),g.jsxs("p",{children:["Continue your shopping",g.jsx("br",{}),g.jsx("b",{children:"New User?"})]}),g.jsx(ao,{to:"/signup",children:g.jsx("button",{children:"SignUp"})})]})]}),g.jsx(mO,{children:g.jsxs("form",{onSubmit:S,children:[g.jsx("h2",{children:"LogIn"}),g.jsx("input",{type:"text",name:"username",id:"username",placeholder:"User Name",onChange:p,onBlur:v,value:m.username}),x.username&&h.username&&g.jsx("div",{className:"text-danger",children:h.username}),g.jsx("input",{type:"password",name:"userpassword",id:"userpassword",placeholder:"Password",onChange:p,onBlur:v,value:m.userpassword}),x.userpassword&&h.userpassword&&g.jsx("div",{className:"text-danger",children:h.userpassword}),i&&g.jsx("div",{className:"text-danger",children:u}),g.jsx("button",{type:"submit",children:"Login"})]})})]})]})}var pd,_1;function yO(){if(_1)return pd;_1=1;function n(w){this._maxSize=w,this.clear()}n.prototype.clear=function(){this._size=0,this._values=Object.create(null)},n.prototype.get=function(w){return this._values[w]},n.prototype.set=function(w,z){return this._size>=this._maxSize&&this.clear(),w in this._values||this._size++,this._values[w]=z};var r=/[^.^\]^[]+|(?=\[\]|\.\.)/g,i=/^\d+$/,o=/^\d/,u=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,f=/^\s*(['"]?)(.*?)(\1)\s*$/,d=512,m=new n(d),h=new n(d),p=new n(d);pd={Cache:n,split:S,normalizePath:v,setter:function(w){var z=v(w);return h.get(w)||h.set(w,function(Y,A){for(var q=0,H=z.length,W=Y;q<H-1;){var rt=z[q];if(rt==="__proto__"||rt==="constructor"||rt==="prototype")return Y;W=W[z[q++]]}W[z[q]]=A})},getter:function(w,z){var D=v(w);return p.get(w)||p.set(w,function(A){for(var q=0,H=D.length;q<H;)if(A!=null||!z)A=A[D[q++]];else return;return A})},join:function(w){return w.reduce(function(z,D){return z+(E(D)||i.test(D)?"["+D+"]":(z?".":"")+D)},"")},forEach:function(w,z,D){x(Array.isArray(w)?w:S(w),z,D)}};function v(w){return m.get(w)||m.set(w,S(w).map(function(z){return z.replace(f,"$2")}))}function S(w){return w.match(r)||[""]}function x(w,z,D){var Y=w.length,A,q,H,W;for(q=0;q<Y;q++)A=w[q],A&&(R(A)&&(A='"'+A+'"'),W=E(A),H=!W&&/^\d+$/.test(A),z.call(D,A,W,H,q,w))}function E(w){return typeof w=="string"&&w&&["'",'"'].indexOf(w.charAt(0))!==-1}function j(w){return w.match(o)&&!w.match(i)}function O(w){return u.test(w)}function R(w){return!E(w)&&(j(w)||O(w))}return pd}var pr=yO(),md,A1;function vO(){if(A1)return md;A1=1;const n=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,r=v=>v.match(n)||[],i=v=>v[0].toUpperCase()+v.slice(1),o=(v,S)=>r(v).join(S).toLowerCase(),u=v=>r(v).reduce((S,x)=>`${S}${S?x[0].toUpperCase()+x.slice(1).toLowerCase():x.toLowerCase()}`,"");return md={words:r,upperFirst:i,camelCase:u,pascalCase:v=>i(u(v)),snakeCase:v=>o(v,"_"),kebabCase:v=>o(v,"-"),sentenceCase:v=>i(o(v," ")),titleCase:v=>r(v).map(i).join(" ")},md}var gd=vO(),zs={exports:{}},j1;function xO(){if(j1)return zs.exports;j1=1,zs.exports=function(u){return n(r(u),u)},zs.exports.array=n;function n(u,f){var d=u.length,m=new Array(d),h={},p=d,v=i(f),S=o(u);for(f.forEach(function(E){if(!S.has(E[0])||!S.has(E[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});p--;)h[p]||x(u[p],p,new Set);return m;function x(E,j,O){if(O.has(E)){var R;try{R=", node was:"+JSON.stringify(E)}catch{R=""}throw new Error("Cyclic dependency"+R)}if(!S.has(E))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(E));if(!h[j]){h[j]=!0;var w=v.get(E)||new Set;if(w=Array.from(w),j=w.length){O.add(E);do{var z=w[--j];x(z,S.get(z),O)}while(j);O.delete(E)}m[--d]=E}}}function r(u){for(var f=new Set,d=0,m=u.length;d<m;d++){var h=u[d];f.add(h[0]),f.add(h[1])}return Array.from(f)}function i(u){for(var f=new Map,d=0,m=u.length;d<m;d++){var h=u[d];f.has(h[0])||f.set(h[0],new Set),f.has(h[1])||f.set(h[1],new Set),f.get(h[0]).add(h[1])}return f}function o(u){for(var f=new Map,d=0,m=u.length;d<m;d++)f.set(u[d],d);return f}return zs.exports}var bO=xO();const SO=to(bO),wO=Object.prototype.toString,EO=Error.prototype.toString,TO=RegExp.prototype.toString,_O=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",AO=/^Symbol\((.*)\)(.*)$/;function jO(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function O1(n,r=!1){if(n==null||n===!0||n===!1)return""+n;const i=typeof n;if(i==="number")return jO(n);if(i==="string")return r?`"${n}"`:n;if(i==="function")return"[Function "+(n.name||"anonymous")+"]";if(i==="symbol")return _O.call(n).replace(AO,"Symbol($1)");const o=wO.call(n).slice(8,-1);return o==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):o==="Error"||n instanceof Error?"["+EO.call(n)+"]":o==="RegExp"?TO.call(n):null}function Na(n,r){let i=O1(n,r);return i!==null?i:JSON.stringify(n,function(o,u){let f=O1(this[o],r);return f!==null?f:u},2)}function Hx(n){return n==null?[]:[].concat(n)}let Bx,qx,Yx,OO=/\$\{\s*(\w+)\s*\}/g;Bx=Symbol.toStringTag;class C1{constructor(r,i,o,u){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Bx]="Error",this.name="ValidationError",this.value=i,this.path=o,this.type=u,this.errors=[],this.inner=[],Hx(r).forEach(f=>{if(ke.isError(f)){this.errors.push(...f.errors);const d=f.inner.length?f.inner:[f];this.inner.push(...d)}else this.errors.push(f)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}qx=Symbol.hasInstance;Yx=Symbol.toStringTag;class ke extends Error{static formatError(r,i){const o=i.label||i.path||"this";return i=Object.assign({},i,{path:o,originalPath:i.path}),typeof r=="string"?r.replace(OO,(u,f)=>Na(i[f])):typeof r=="function"?r(i):r}static isError(r){return r&&r.name==="ValidationError"}constructor(r,i,o,u,f){const d=new C1(r,i,o,u);if(f)return d;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Yx]="Error",this.name=d.name,this.message=d.message,this.type=d.type,this.value=d.value,this.path=d.path,this.errors=d.errors,this.inner=d.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ke)}static[qx](r){return C1[Symbol.hasInstance](r)||super[Symbol.hasInstance](r)}}let _n={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:r,value:i,originalValue:o})=>{const u=o!=null&&o!==i?` (cast from the value \`${Na(o,!0)}\`).`:".";return r!=="mixed"?`${n} must be a \`${r}\` type, but the final value was: \`${Na(i,!0)}\``+u:`${n} must match the configured type. The validated value was: \`${Na(i,!0)}\``+u}},Me={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},CO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},RO={isValue:"${path} field must be ${value}"},Ys={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},zO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},NO={notType:n=>{const{path:r,value:i,spec:o}=n,u=o.types.length;if(Array.isArray(i)){if(i.length<u)return`${r} tuple value has too few items, expected a length of ${u} but got ${i.length} for value: \`${Na(i,!0)}\``;if(i.length>u)return`${r} tuple value has too many items, expected a length of ${u} but got ${i.length} for value: \`${Na(i,!0)}\``}return ke.formatError(_n.notType,n)}};Object.assign(Object.create(null),{mixed:_n,string:Me,number:CO,date:rh,object:Ys,array:zO,boolean:RO,tuple:NO});const Yh=n=>n&&n.__isYupSchema__;class Ws{static fromOptions(r,i){if(!i.then&&!i.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:o,then:u,otherwise:f}=i,d=typeof o=="function"?o:(...m)=>m.every(h=>h===o);return new Ws(r,(m,h)=>{var p;let v=d(...m)?u:f;return(p=v==null?void 0:v(h))!=null?p:h})}constructor(r,i){this.fn=void 0,this.refs=r,this.refs=r,this.fn=i}resolve(r,i){let o=this.refs.map(f=>f.getValue(i==null?void 0:i.value,i==null?void 0:i.parent,i==null?void 0:i.context)),u=this.fn(o,r,i);if(u===void 0||u===r)return r;if(!Yh(u))throw new TypeError("conditions must return a schema object");return u.resolve(i)}}const Ns={context:"$",value:"."};function DO(n,r){return new Ha(n,r)}class Ha{constructor(r,i={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof r!="string")throw new TypeError("ref must be a string, got: "+r);if(this.key=r.trim(),r==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ns.context,this.isValue=this.key[0]===Ns.value,this.isSibling=!this.isContext&&!this.isValue;let o=this.isContext?Ns.context:this.isValue?Ns.value:"";this.path=this.key.slice(o.length),this.getter=this.path&&pr.getter(this.path,!0),this.map=i.map}getValue(r,i,o){let u=this.isContext?o:this.isValue?r:i;return this.getter&&(u=this.getter(u||{})),this.map&&(u=this.map(u)),u}cast(r,i){return this.getValue(r,i==null?void 0:i.parent,i==null?void 0:i.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(r){return r&&r.__isYupRef}}Ha.prototype.__isYupRef=!0;const ur=n=>n==null;function hi(n){function r({value:i,path:o="",options:u,originalValue:f,schema:d},m,h){const{name:p,test:v,params:S,message:x,skipAbsent:E}=n;let{parent:j,context:O,abortEarly:R=d.spec.abortEarly,disableStackTrace:w=d.spec.disableStackTrace}=u;function z(ct){return Ha.isRef(ct)?ct.getValue(i,j,O):ct}function D(ct={}){const St=Object.assign({value:i,originalValue:f,label:d.spec.label,path:ct.path||o,spec:d.spec,disableStackTrace:ct.disableStackTrace||w},S,ct.params);for(const re of Object.keys(St))St[re]=z(St[re]);const kt=new ke(ke.formatError(ct.message||x,St),i,St.path,ct.type||p,St.disableStackTrace);return kt.params=St,kt}const Y=R?m:h;let A={path:o,parent:j,type:p,from:u.from,createError:D,resolve:z,options:u,originalValue:f,schema:d};const q=ct=>{ke.isError(ct)?Y(ct):ct?h(null):Y(D())},H=ct=>{ke.isError(ct)?Y(ct):m(ct)};if(E&&ur(i))return q(!0);let rt;try{var jt;if(rt=v.call(A,i,A),typeof((jt=rt)==null?void 0:jt.then)=="function"){if(u.sync)throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(rt).then(q,H)}}catch(ct){H(ct);return}q(rt)}return r.OPTIONS=n,r}function MO(n,r,i,o=i){let u,f,d;return r?(pr.forEach(r,(m,h,p)=>{let v=h?m.slice(1,m.length-1):m;n=n.resolve({context:o,parent:u,value:i});let S=n.type==="tuple",x=p?parseInt(v,10):0;if(n.innerType||S){if(S&&!p)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${d}" must contain an index to the tuple element, e.g. "${d}[0]"`);if(i&&x>=i.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${m}, in the path: ${r}. because there is no value at that index. `);u=i,i=i&&i[x],n=S?n.spec.types[x]:n.innerType}if(!p){if(!n.fields||!n.fields[v])throw new Error(`The schema does not contain the path: ${r}. (failed at: ${d} which is a type: "${n.type}")`);u=i,i=i&&i[v],n=n.fields[v]}f=v,d=h?"["+m+"]":"."+m}),{schema:n,parent:u,parentPath:f}):{parent:u,parentPath:r,schema:n}}class tu extends Set{describe(){const r=[];for(const i of this.values())r.push(Ha.isRef(i)?i.describe():i);return r}resolveAll(r){let i=[];for(const o of this.values())i.push(r(o));return i}clone(){return new tu(this.values())}merge(r,i){const o=this.clone();return r.forEach(u=>o.add(u)),i.forEach(u=>o.delete(u)),o}}function vi(n,r=new Map){if(Yh(n)||!n||typeof n!="object")return n;if(r.has(n))return r.get(n);let i;if(n instanceof Date)i=new Date(n.getTime()),r.set(n,i);else if(n instanceof RegExp)i=new RegExp(n),r.set(n,i);else if(Array.isArray(n)){i=new Array(n.length),r.set(n,i);for(let o=0;o<n.length;o++)i[o]=vi(n[o],r)}else if(n instanceof Map){i=new Map,r.set(n,i);for(const[o,u]of n.entries())i.set(o,vi(u,r))}else if(n instanceof Set){i=new Set,r.set(n,i);for(const o of n)i.add(vi(o,r))}else if(n instanceof Object){i={},r.set(n,i);for(const[o,u]of Object.entries(n))i[o]=vi(u,r)}else throw Error(`Unable to clone ${n}`);return i}class Rn{constructor(r){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new tu,this._blacklist=new tu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(_n.notType)}),this.type=r.type,this._typeCheck=r.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},r==null?void 0:r.spec),this.withMutation(i=>{i.nonNullable()})}get _type(){return this.type}clone(r){if(this._mutate)return r&&Object.assign(this.spec,r),this;const i=Object.create(Object.getPrototypeOf(this));return i.type=this.type,i._typeCheck=this._typeCheck,i._whitelist=this._whitelist.clone(),i._blacklist=this._blacklist.clone(),i.internalTests=Object.assign({},this.internalTests),i.exclusiveTests=Object.assign({},this.exclusiveTests),i.deps=[...this.deps],i.conditions=[...this.conditions],i.tests=[...this.tests],i.transforms=[...this.transforms],i.spec=vi(Object.assign({},this.spec,r)),i}label(r){let i=this.clone();return i.spec.label=r,i}meta(...r){if(r.length===0)return this.spec.meta;let i=this.clone();return i.spec.meta=Object.assign(i.spec.meta||{},r[0]),i}withMutation(r){let i=this._mutate;this._mutate=!0;let o=r(this);return this._mutate=i,o}concat(r){if(!r||r===this)return this;if(r.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${r.type}`);let i=this,o=r.clone();const u=Object.assign({},i.spec,o.spec);return o.spec=u,o.internalTests=Object.assign({},i.internalTests,o.internalTests),o._whitelist=i._whitelist.merge(r._whitelist,r._blacklist),o._blacklist=i._blacklist.merge(r._blacklist,r._whitelist),o.tests=i.tests,o.exclusiveTests=i.exclusiveTests,o.withMutation(f=>{r.tests.forEach(d=>{f.test(d.OPTIONS)})}),o.transforms=[...i.transforms,...o.transforms],o}isType(r){return r==null?!!(this.spec.nullable&&r===null||this.spec.optional&&r===void 0):this._typeCheck(r)}resolve(r){let i=this;if(i.conditions.length){let o=i.conditions;i=i.clone(),i.conditions=[],i=o.reduce((u,f)=>f.resolve(u,r),i),i=i.resolve(r)}return i}resolveOptions(r){var i,o,u,f;return Object.assign({},r,{from:r.from||[],strict:(i=r.strict)!=null?i:this.spec.strict,abortEarly:(o=r.abortEarly)!=null?o:this.spec.abortEarly,recursive:(u=r.recursive)!=null?u:this.spec.recursive,disableStackTrace:(f=r.disableStackTrace)!=null?f:this.spec.disableStackTrace})}cast(r,i={}){let o=this.resolve(Object.assign({value:r},i)),u=i.assert==="ignore-optionality",f=o._cast(r,i);if(i.assert!==!1&&!o.isType(f)){if(u&&ur(f))return f;let d=Na(r),m=Na(f);throw new TypeError(`The value of ${i.path||"field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${d} 
`+(m!==d?`result of cast: ${m}`:""))}return f}_cast(r,i){let o=r===void 0?r:this.transforms.reduce((u,f)=>f.call(this,u,r,this),r);return o===void 0&&(o=this.getDefault(i)),o}_validate(r,i={},o,u){let{path:f,originalValue:d=r,strict:m=this.spec.strict}=i,h=r;m||(h=this._cast(h,Object.assign({assert:!1},i)));let p=[];for(let v of Object.values(this.internalTests))v&&p.push(v);this.runTests({path:f,value:h,originalValue:d,options:i,tests:p},o,v=>{if(v.length)return u(v,h);this.runTests({path:f,value:h,originalValue:d,options:i,tests:this.tests},o,u)})}runTests(r,i,o){let u=!1,{tests:f,value:d,originalValue:m,path:h,options:p}=r,v=O=>{u||(u=!0,i(O,d))},S=O=>{u||(u=!0,o(O,d))},x=f.length,E=[];if(!x)return S([]);let j={value:d,originalValue:m,path:h,options:p,schema:this};for(let O=0;O<f.length;O++){const R=f[O];R(j,v,function(z){z&&(Array.isArray(z)?E.push(...z):E.push(z)),--x<=0&&S(E)})}}asNestedTest({key:r,index:i,parent:o,parentPath:u,originalParent:f,options:d}){const m=r??i;if(m==null)throw TypeError("Must include `key` or `index` for nested validations");const h=typeof m=="number";let p=o[m];const v=Object.assign({},d,{strict:!0,parent:o,value:p,originalValue:f[m],key:void 0,[h?"index":"key"]:m,path:h||m.includes(".")?`${u||""}[${h?m:`"${m}"`}]`:(u?`${u}.`:"")+r});return(S,x,E)=>this.resolve(v)._validate(p,v,x,E)}validate(r,i){var o;let u=this.resolve(Object.assign({},i,{value:r})),f=(o=i==null?void 0:i.disableStackTrace)!=null?o:u.spec.disableStackTrace;return new Promise((d,m)=>u._validate(r,i,(h,p)=>{ke.isError(h)&&(h.value=p),m(h)},(h,p)=>{h.length?m(new ke(h,p,void 0,void 0,f)):d(p)}))}validateSync(r,i){var o;let u=this.resolve(Object.assign({},i,{value:r})),f,d=(o=i==null?void 0:i.disableStackTrace)!=null?o:u.spec.disableStackTrace;return u._validate(r,Object.assign({},i,{sync:!0}),(m,h)=>{throw ke.isError(m)&&(m.value=h),m},(m,h)=>{if(m.length)throw new ke(m,r,void 0,void 0,d);f=h}),f}isValid(r,i){return this.validate(r,i).then(()=>!0,o=>{if(ke.isError(o))return!1;throw o})}isValidSync(r,i){try{return this.validateSync(r,i),!0}catch(o){if(ke.isError(o))return!1;throw o}}_getDefault(r){let i=this.spec.default;return i==null?i:typeof i=="function"?i.call(this,r):vi(i)}getDefault(r){return this.resolve(r||{})._getDefault(r)}default(r){return arguments.length===0?this._getDefault():this.clone({default:r})}strict(r=!0){return this.clone({strict:r})}nullability(r,i){const o=this.clone({nullable:r});return o.internalTests.nullable=hi({message:i,name:"nullable",test(u){return u===null?this.schema.spec.nullable:!0}}),o}optionality(r,i){const o=this.clone({optional:r});return o.internalTests.optionality=hi({message:i,name:"optionality",test(u){return u===void 0?this.schema.spec.optional:!0}}),o}optional(){return this.optionality(!0)}defined(r=_n.defined){return this.optionality(!1,r)}nullable(){return this.nullability(!0)}nonNullable(r=_n.notNull){return this.nullability(!1,r)}required(r=_n.required){return this.clone().withMutation(i=>i.nonNullable(r).defined(r))}notRequired(){return this.clone().withMutation(r=>r.nullable().optional())}transform(r){let i=this.clone();return i.transforms.push(r),i}test(...r){let i;if(r.length===1?typeof r[0]=="function"?i={test:r[0]}:i=r[0]:r.length===2?i={name:r[0],test:r[1]}:i={name:r[0],message:r[1],test:r[2]},i.message===void 0&&(i.message=_n.default),typeof i.test!="function")throw new TypeError("`test` is a required parameters");let o=this.clone(),u=hi(i),f=i.exclusive||i.name&&o.exclusiveTests[i.name]===!0;if(i.exclusive&&!i.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return i.name&&(o.exclusiveTests[i.name]=!!i.exclusive),o.tests=o.tests.filter(d=>!(d.OPTIONS.name===i.name&&(f||d.OPTIONS.test===u.OPTIONS.test))),o.tests.push(u),o}when(r,i){!Array.isArray(r)&&typeof r!="string"&&(i=r,r=".");let o=this.clone(),u=Hx(r).map(f=>new Ha(f));return u.forEach(f=>{f.isSibling&&o.deps.push(f.key)}),o.conditions.push(typeof i=="function"?new Ws(u,i):Ws.fromOptions(u,i)),o}typeError(r){let i=this.clone();return i.internalTests.typeError=hi({message:r,name:"typeError",skipAbsent:!0,test(o){return this.schema._typeCheck(o)?!0:this.createError({params:{type:this.schema.type}})}}),i}oneOf(r,i=_n.oneOf){let o=this.clone();return r.forEach(u=>{o._whitelist.add(u),o._blacklist.delete(u)}),o.internalTests.whiteList=hi({message:i,name:"oneOf",skipAbsent:!0,test(u){let f=this.schema._whitelist,d=f.resolveAll(this.resolve);return d.includes(u)?!0:this.createError({params:{values:Array.from(f).join(", "),resolved:d}})}}),o}notOneOf(r,i=_n.notOneOf){let o=this.clone();return r.forEach(u=>{o._blacklist.add(u),o._whitelist.delete(u)}),o.internalTests.blacklist=hi({message:i,name:"notOneOf",test(u){let f=this.schema._blacklist,d=f.resolveAll(this.resolve);return d.includes(u)?this.createError({params:{values:Array.from(f).join(", "),resolved:d}}):!0}}),o}strip(r=!0){let i=this.clone();return i.spec.strip=r,i}describe(r){const i=(r?this.resolve(r):this).clone(),{label:o,meta:u,optional:f,nullable:d}=i.spec;return{meta:u,label:o,optional:f,nullable:d,default:i.getDefault(r),type:i.type,oneOf:i._whitelist.describe(),notOneOf:i._blacklist.describe(),tests:i.tests.map(h=>({name:h.OPTIONS.name,params:h.OPTIONS.params})).filter((h,p,v)=>v.findIndex(S=>S.name===h.name)===p)}}}Rn.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])Rn.prototype[`${n}At`]=function(r,i,o={}){const{parent:u,parentPath:f,schema:d}=MO(this,r,i,o.context);return d[n](u&&u[f],Object.assign({},o,{parent:u,path:r}))};for(const n of["equals","is"])Rn.prototype[n]=Rn.prototype.oneOf;for(const n of["not","nope"])Rn.prototype[n]=Rn.prototype.notOneOf;const kO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function UO(n){const r=ih(n);if(!r)return Date.parse?Date.parse(n):Number.NaN;if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let i=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(i=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(i=0-i)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+i,r.second,r.millisecond)}function ih(n){var r,i;const o=kO.exec(n);return o?{year:Zn(o[1]),month:Zn(o[2],1)-1,day:Zn(o[3],1),hour:Zn(o[4]),minute:Zn(o[5]),second:Zn(o[6]),millisecond:o[7]?Zn(o[7].substring(0,3)):0,precision:(r=(i=o[7])==null?void 0:i.length)!=null?r:void 0,z:o[8]||void 0,plusMinus:o[9]||void 0,hourOffset:Zn(o[10]),minuteOffset:Zn(o[11])}:null}function Zn(n,r=0){return Number(n)||r}let LO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$O=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,HO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,BO="^\\d{4}-\\d{2}-\\d{2}",qO="\\d{2}:\\d{2}:\\d{2}",YO="(([+-]\\d{2}(:?\\d{2})?)|Z)",FO=new RegExp(`${BO}T${qO}(\\.\\d+)?${YO}$`),GO=n=>ur(n)||n===n.trim(),PO={}.toString();function mn(){return new Fx}class Fx extends Rn{constructor(){super({type:"string",check(r){return r instanceof String&&(r=r.valueOf()),typeof r=="string"}}),this.withMutation(()=>{this.transform((r,i,o)=>{if(!o.spec.coerce||o.isType(r)||Array.isArray(r))return r;const u=r!=null&&r.toString?r.toString():r;return u===PO?r:u})})}required(r){return super.required(r).withMutation(i=>i.test({message:r||_n.required,name:"required",skipAbsent:!0,test:o=>!!o.length}))}notRequired(){return super.notRequired().withMutation(r=>(r.tests=r.tests.filter(i=>i.OPTIONS.name!=="required"),r))}length(r,i=Me.length){return this.test({message:i,name:"length",exclusive:!0,params:{length:r},skipAbsent:!0,test(o){return o.length===this.resolve(r)}})}min(r,i=Me.min){return this.test({message:i,name:"min",exclusive:!0,params:{min:r},skipAbsent:!0,test(o){return o.length>=this.resolve(r)}})}max(r,i=Me.max){return this.test({name:"max",exclusive:!0,message:i,params:{max:r},skipAbsent:!0,test(o){return o.length<=this.resolve(r)}})}matches(r,i){let o=!1,u,f;return i&&(typeof i=="object"?{excludeEmptyString:o=!1,message:u,name:f}=i:u=i),this.test({name:f||"matches",message:u||Me.matches,params:{regex:r},skipAbsent:!0,test:d=>d===""&&o||d.search(r)!==-1})}email(r=Me.email){return this.matches(LO,{name:"email",message:r,excludeEmptyString:!0})}url(r=Me.url){return this.matches($O,{name:"url",message:r,excludeEmptyString:!0})}uuid(r=Me.uuid){return this.matches(HO,{name:"uuid",message:r,excludeEmptyString:!1})}datetime(r){let i="",o,u;return r&&(typeof r=="object"?{message:i="",allowOffset:o=!1,precision:u=void 0}=r:i=r),this.matches(FO,{name:"datetime",message:i||Me.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:i||Me.datetime_offset,params:{allowOffset:o},skipAbsent:!0,test:f=>{if(!f||o)return!0;const d=ih(f);return d?!!d.z:!1}}).test({name:"datetime_precision",message:i||Me.datetime_precision,params:{precision:u},skipAbsent:!0,test:f=>{if(!f||u==null)return!0;const d=ih(f);return d?d.precision===u:!1}})}ensure(){return this.default("").transform(r=>r===null?"":r)}trim(r=Me.trim){return this.transform(i=>i!=null?i.trim():i).test({message:r,name:"trim",test:GO})}lowercase(r=Me.lowercase){return this.transform(i=>ur(i)?i:i.toLowerCase()).test({message:r,name:"string_case",exclusive:!0,skipAbsent:!0,test:i=>ur(i)||i===i.toLowerCase()})}uppercase(r=Me.uppercase){return this.transform(i=>ur(i)?i:i.toUpperCase()).test({message:r,name:"string_case",exclusive:!0,skipAbsent:!0,test:i=>ur(i)||i===i.toUpperCase()})}}mn.prototype=Fx.prototype;let VO=new Date(""),XO=n=>Object.prototype.toString.call(n)==="[object Date]";class Fh extends Rn{constructor(){super({type:"date",check(r){return XO(r)&&!isNaN(r.getTime())}}),this.withMutation(()=>{this.transform((r,i,o)=>!o.spec.coerce||o.isType(r)||r===null?r:(r=UO(r),isNaN(r)?Fh.INVALID_DATE:new Date(r)))})}prepareParam(r,i){let o;if(Ha.isRef(r))o=r;else{let u=this.cast(r);if(!this._typeCheck(u))throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);o=u}return o}min(r,i=rh.min){let o=this.prepareParam(r,"min");return this.test({message:i,name:"min",exclusive:!0,params:{min:r},skipAbsent:!0,test(u){return u>=this.resolve(o)}})}max(r,i=rh.max){let o=this.prepareParam(r,"max");return this.test({message:i,name:"max",exclusive:!0,params:{max:r},skipAbsent:!0,test(u){return u<=this.resolve(o)}})}}Fh.INVALID_DATE=VO;function IO(n,r=[]){let i=[],o=new Set,u=new Set(r.map(([d,m])=>`${d}-${m}`));function f(d,m){let h=pr.split(d)[0];o.add(h),u.has(`${m}-${h}`)||i.push([m,h])}for(const d of Object.keys(n)){let m=n[d];o.add(d),Ha.isRef(m)&&m.isSibling?f(m.path,d):Yh(m)&&"deps"in m&&m.deps.forEach(h=>f(h,d))}return SO.array(Array.from(o),i).reverse()}function R1(n,r){let i=1/0;return n.some((o,u)=>{var f;if((f=r.path)!=null&&f.includes(o))return i=u,!0}),i}function Gx(n){return(r,i)=>R1(n,r)-R1(n,i)}const QO=(n,r,i)=>{if(typeof n!="string")return n;let o=n;try{o=JSON.parse(n)}catch{}return i.isType(o)?o:n};function Fs(n){if("fields"in n){const r={};for(const[i,o]of Object.entries(n.fields))r[i]=Fs(o);return n.setFields(r)}if(n.type==="array"){const r=n.optional();return r.innerType&&(r.innerType=Fs(r.innerType)),r}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(Fs)}):"optional"in n?n.optional():n}const ZO=(n,r)=>{const i=[...pr.normalizePath(r)];if(i.length===1)return i[0]in n;let o=i.pop(),u=pr.getter(pr.join(i),!0)(n);return!!(u&&o in u)};let z1=n=>Object.prototype.toString.call(n)==="[object Object]";function N1(n,r){let i=Object.keys(n.fields);return Object.keys(r).filter(o=>i.indexOf(o)===-1)}const KO=Gx([]);function Gh(n){return new Px(n)}class Px extends Rn{constructor(r){super({type:"object",check(i){return z1(i)||typeof i=="function"}}),this.fields=Object.create(null),this._sortErrors=KO,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{r&&this.shape(r)})}_cast(r,i={}){var o;let u=super._cast(r,i);if(u===void 0)return this.getDefault(i);if(!this._typeCheck(u))return u;let f=this.fields,d=(o=i.stripUnknown)!=null?o:this.spec.noUnknown,m=[].concat(this._nodes,Object.keys(u).filter(S=>!this._nodes.includes(S))),h={},p=Object.assign({},i,{parent:h,__validating:i.__validating||!1}),v=!1;for(const S of m){let x=f[S],E=S in u;if(x){let j,O=u[S];p.path=(i.path?`${i.path}.`:"")+S,x=x.resolve({value:O,context:i.context,parent:h});let R=x instanceof Rn?x.spec:void 0,w=R==null?void 0:R.strict;if(R!=null&&R.strip){v=v||S in u;continue}j=!i.__validating||!w?x.cast(u[S],p):u[S],j!==void 0&&(h[S]=j)}else E&&!d&&(h[S]=u[S]);(E!==S in h||h[S]!==u[S])&&(v=!0)}return v?h:u}_validate(r,i={},o,u){let{from:f=[],originalValue:d=r,recursive:m=this.spec.recursive}=i;i.from=[{schema:this,value:d},...f],i.__validating=!0,i.originalValue=d,super._validate(r,i,o,(h,p)=>{if(!m||!z1(p)){u(h,p);return}d=d||p;let v=[];for(let S of this._nodes){let x=this.fields[S];!x||Ha.isRef(x)||v.push(x.asNestedTest({options:i,key:S,parent:p,parentPath:i.path,originalParent:d}))}this.runTests({tests:v,value:p,originalValue:d,options:i},o,S=>{u(S.sort(this._sortErrors).concat(h),p)})})}clone(r){const i=super.clone(r);return i.fields=Object.assign({},this.fields),i._nodes=this._nodes,i._excludedEdges=this._excludedEdges,i._sortErrors=this._sortErrors,i}concat(r){let i=super.concat(r),o=i.fields;for(let[u,f]of Object.entries(this.fields)){const d=o[u];o[u]=d===void 0?f:d}return i.withMutation(u=>u.setFields(o,[...this._excludedEdges,...r._excludedEdges]))}_getDefault(r){if("default"in this.spec)return super._getDefault(r);if(!this._nodes.length)return;let i={};return this._nodes.forEach(o=>{var u;const f=this.fields[o];let d=r;(u=d)!=null&&u.value&&(d=Object.assign({},d,{parent:d.value,value:d.value[o]})),i[o]=f&&"getDefault"in f?f.getDefault(d):void 0}),i}setFields(r,i){let o=this.clone();return o.fields=r,o._nodes=IO(r,i),o._sortErrors=Gx(Object.keys(r)),i&&(o._excludedEdges=i),o}shape(r,i=[]){return this.clone().withMutation(o=>{let u=o._excludedEdges;return i.length&&(Array.isArray(i[0])||(i=[i]),u=[...o._excludedEdges,...i]),o.setFields(Object.assign(o.fields,r),u)})}partial(){const r={};for(const[i,o]of Object.entries(this.fields))r[i]="optional"in o&&o.optional instanceof Function?o.optional():o;return this.setFields(r)}deepPartial(){return Fs(this)}pick(r){const i={};for(const o of r)this.fields[o]&&(i[o]=this.fields[o]);return this.setFields(i,this._excludedEdges.filter(([o,u])=>r.includes(o)&&r.includes(u)))}omit(r){const i=[];for(const o of Object.keys(this.fields))r.includes(o)||i.push(o);return this.pick(i)}from(r,i,o){let u=pr.getter(r,!0);return this.transform(f=>{if(!f)return f;let d=f;return ZO(f,r)&&(d=Object.assign({},f),o||delete d[r],d[i]=u(f)),d})}json(){return this.transform(QO)}exact(r){return this.test({name:"exact",exclusive:!0,message:r||Ys.exact,test(i){if(i==null)return!0;const o=N1(this.schema,i);return o.length===0||this.createError({params:{properties:o.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(r=!0,i=Ys.noUnknown){typeof r!="boolean"&&(i=r,r=!0);let o=this.test({name:"noUnknown",exclusive:!0,message:i,test(u){if(u==null)return!0;const f=N1(this.schema,u);return!r||f.length===0||this.createError({params:{unknown:f.join(", ")}})}});return o.spec.noUnknown=r,o}unknown(r=!0,i=Ys.noUnknown){return this.noUnknown(!r,i)}transformKeys(r){return this.transform(i=>{if(!i)return i;const o={};for(const u of Object.keys(i))o[r(u)]=i[u];return o})}camelCase(){return this.transformKeys(gd.camelCase)}snakeCase(){return this.transformKeys(gd.snakeCase)}constantCase(){return this.transformKeys(r=>gd.snakeCase(r).toUpperCase())}describe(r){const i=(r?this.resolve(r):this).clone(),o=super.describe(r);o.fields={};for(const[f,d]of Object.entries(i.fields)){var u;let m=r;(u=m)!=null&&u.value&&(m=Object.assign({},m,{parent:m.value,value:m.value[f]})),o.fields[f]=d.describe(m)}return o}}Gh.prototype=Px.prototype;const JO=Gh({name:mn().min(5,"Name must be at least 5 characters").required("Name is required"),email:mn().email("Invalid email").required("Enter valid email address"),phone:mn().min(10,"Phone Number must be of 10 digits").matches(/^[0-9]{10}$/,"Phone number must be 10 digits").required("Phone number is required"),password:mn().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:mn().required("Confirm the password").oneOf([DO("password"),null],"Passwords must match")}),WO=Z.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80%;
    max-width: 900px;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: black;
    color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        max-width: 500px;
    }
    @media (max-width: 480px) {
        width: 95%;
        top: 45%;
    }
`,t7=Z.div`
    width: 40%;
    padding: 20px;
    background-color: #4A7766;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    h2, h5, p {
        padding: 0;
        margin: 0;
    }
    img {
        width: clamp(100px, 25vw, 140px);
        height: clamp(100px, 25vw, 140px);
        object-fit: contain;
    }
    div {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    button {
        padding: 12px 24px;
        color: #4A7766;
        background-color: whitesmoke;
        border-radius: 8px;
        border: none;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #e0e0e0;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        gap: 16px;
        padding: 16px;
        img {
            width: clamp(80px, 20vw, 100px);
            height: clamp(80px, 20vw, 100px);
        }
        h2 {
            font-size: clamp(1.2rem, 4vw, 1.5rem);
        }
        button {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            padding: 10px 20px;
        }
    }
`,e7=Z.div`
    width: 60%;
    background-color: #ECE7E2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 0 12px 12px 0;
    h2 {
        color: #4A7766;
        font-size: clamp(1.5rem, 4vw, 1.8rem);
        margin-bottom: 16px;
    }
    form {
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 300px;
        input {
            padding: 12px;
            border-radius: 8px;
            width: 100%;
            background-color: white;
            outline: none;
            border: none;
            color: black;
            font-size: clamp(0.9rem, 2.5vw, 1rem);
        }
        button {
            background-color: #4A7766;
            color: white;
            border: none;
            font-size: clamp(1rem, 2.5vw, 1.1rem);
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            &:hover {
                background-color: #3a5f50;
            }
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 16px;
        border-radius: 0 0 12px 12px;
        form {
            max-width: 100%;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;
        h2 {
            font-size: clamp(1.3rem, 4vw, 1.5rem);
        }
    }
`;function n7(){const{authorized:n,loading:r}=Dn(),i=ye(),[o,u]=T.useState(!1),{values:f,errors:d,handleChange:m,handleBlur:h,handleSubmit:p,touched:v}=qh({initialValues:{name:"",email:"",phone:0,password:"",confirmPassword:"",gender:""},validationSchema:JO,onSubmit:(S,x)=>{fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S),credentials:"include"}).then(E=>E.json()).then(E=>{if(E.status==="SUCCESS")u(!1),i("/"),ht.success("Welcome");else if(E.status==="FAILED")throw u(!0),ht.error(E.message),new Error(E.message)}).catch(E=>{console.log("Error while signup ",E)})}});return r?g.jsx("div",{children:"Loading..."}):n?g.jsx(G1,{to:"/"}):g.jsxs(g.Fragment,{children:[g.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),g.jsxs(WO,{children:[g.jsxs(t7,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1745584931/logo_oehann.png",alt:"Logo"}),g.jsx("h2",{children:"Welcome!"}),g.jsxs("div",{children:[g.jsx("h5",{children:"SignUp"}),g.jsxs("p",{children:["Place your first order",g.jsx("br",{}),g.jsx("b",{children:"Have Account?"})]}),g.jsx(ao,{to:"/signin",children:g.jsx("button",{children:"Login"})})]})]}),g.jsx(e7,{children:g.jsxs("form",{onSubmit:p,children:[g.jsx("h2",{children:"SignUp"}),g.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Name",autoComplete:"true",onChange:m,onBlur:h,value:f.name}),v.name&&d.name&&g.jsx("div",{className:"text-danger",children:d.name}),g.jsx("input",{type:"text",name:"email",id:"email",placeholder:"Email",autoComplete:"true",onChange:m,onBlur:h,value:f.email}),v.email&&d.email&&g.jsx("div",{className:"text-danger",children:d.email}),g.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Phone Number",autoComplete:"true",onChange:m,onBlur:h,value:f.phone}),v.phone&&d.phone&&g.jsx("div",{className:"text-danger",children:d.phone}),g.jsx("input",{type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"true",onChange:m,onBlur:h,value:f.password}),v.password&&d.password&&g.jsx("div",{className:"text-danger",children:d.password}),g.jsx("input",{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm Password",autoComplete:"true",onChange:m,onBlur:h,value:f.confirmPassword}),v.confirmPassword&&d.confirmPassword&&g.jsx("div",{className:"text-danger",children:d.confirmPassword}),g.jsx("input",{type:"text",name:"gender",id:"gender",placeholder:"Gender",autoComplete:"true",onChange:m,onBlur:h,value:f.gender}),v.gender&&d.gender&&g.jsx("div",{className:"text-danger",children:d.gender}),g.jsx("button",{type:"submit",children:"SignUp"})]})})]})]})}const a7=Z.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #ECE7E2;
    width: 250px;
    transition: transform 0.3s ease-in-out;
    
    @media (min-width: 768px) {
        transform: translateX(0);
        position: static;
    }

    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 999;
        transform: ${({showFilter:n})=>n?"translateX(0)":"translateX(-100%)"};
        width: 80%;
        max-width: 300px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    }
`,r7=Z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,D1=Z.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 8px;
    
    div {
        font-size: 1.2em;
        font-weight: 500;
    }

    .categoryName {
        background-color: #4A7766;
        color: whitesmoke;
        padding: 6px 12px;
        border-radius: 20px;
        text-align: center;
        font-size: 1.1em;
    }

    .brand-holder {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 0.9em;
    }

    .brands {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
        
        span {
            background-color: #4A7766;
            color: whitesmoke;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.85em;
        }
    }
`;function i7({productDt:n,category:r,showFilter:i,setShowFilter:o}){const[u,f]=T.useState([]),d=m=>{f(h=>h.includes(m)?h.filter(p=>p!==m):[...h,m])};return g.jsxs(a7,{showFilter:i,children:[g.jsx("h2",{children:"Filters"}),g.jsxs(r7,{children:[g.jsxs(D1,{children:[g.jsx("div",{children:"Categories"}),g.jsx("span",{className:"categoryName",children:r})]}),g.jsxs(D1,{children:[g.jsx("div",{children:"Brands"}),g.jsx("div",{className:"brands",children:u.map((m,h)=>g.jsx("span",{children:m},h))}),g.jsx("div",{className:"brand-holder",children:n.map((m,h)=>g.jsxs("div",{children:[g.jsx("input",{type:"checkbox",name:m.brand,id:m.brand,checked:u.includes(m.brand),onChange:()=>d(m.brand)}),g.jsx("label",{htmlFor:m.brand,children:m.brand})]},h))})]})]})]})}const l7=Z.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    @media (min-width: 768px) {
        width: 80%;
    }
`,o7=Z.div`
    background-color: #ECE7E2;
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 10px;
    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 575px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`,s7=Z.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    gap: 8px;
    background-color: whitesmoke;
    padding: 12px;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: contain;
    }

    .txt-container {
        display: flex;
        flex-direction: column;
        p, h5, h6 {
            margin: 2px 0;
        }
        span {
            color: #4A7766;
            font-weight: bold;
            font-size: 1.8em;
        }
    }

    .btn-container {
        display: flex;
        gap: 8px;
        button {
            padding: 8px;
            border-radius: 8px;
            flex: 1;
            font-size: 0.9em;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        #cart {
            background: transparent;
            color: #4A7766;
            border: 1px solid #4A7766;
            &:hover {
                background-color: #3E6254;
                color: white;
            }
        }
        #buy {
            background-color: #4A7766;
            border: none;
            color: whitesmoke;
            &:hover {
                background-color: #3E6254;
            }
        }
    }

    @media (max-width: 575px) {
        padding: 8px;
        h6 {
            font-size: 0.85rem;
        }
    }
`;function u7({productDt:n,category:r}){const i=ye(),{userData:o,authorized:u,loading:f,verifyAuth:d}=Dn(),m=p=>{i(`/results?category=${encodeURIComponent(p.category)}&pid=${encodeURIComponent(p._id)}&pname=${encodeURIComponent(p.name)}`)};async function h(p){if(!f)if(u)try{const v=await fetch("/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:o._id,pID:p._id,pName:p.name,pCategory:p.category,pPrice:p.salePrice,pImage:p.imageURL})});if(!v.ok)throw new Error(`HTTP error! status: ${v.status}`);const S=await v.json();console.log("Success:",S),ht.success("Added to cart"),d()}catch(v){console.error("Error:",v)}else ht.error("Login First!"),i("/signin")}return g.jsxs(l7,{children:[g.jsxs("h3",{children:['Showing results for "',r,'"']}),g.jsx(o7,{children:n.map((p,v)=>g.jsxs(s7,{onClick:()=>m(p),children:[g.jsx("div",{className:"img-container",children:g.jsx("img",{src:p.imageURL,alt:p.name})}),g.jsxs("div",{className:"txt-container",children:[g.jsx("h6",{children:p.name.length>50?`${p.name.slice(0,50)}...`:p.name}),g.jsxs("div",{className:"price-container",children:[g.jsx("p",{style:{textDecoration:"line-through"},children:p.originalPrice}),g.jsx("p",{style:{color:"#4A7766"},children:g.jsx("b",{children:p.salePrice})}),g.jsxs("p",{children:[g.jsxs("span",{children:[(Number(p.salePrice.replace(/[₹,]/g,""))/Number(p.originalPrice.replace(/[₹,]/g,""))*100).toFixed(0),"%"]})," Off"]})]})]}),g.jsxs("div",{className:"btn-container",children:[g.jsx("button",{id:"cart",onClick:S=>{S.stopPropagation(),h(p)},children:"Add to Cart"}),g.jsx("button",{id:"buy",onClick:S=>{S.stopPropagation(),u?i(`/payment?pd=${encodeURIComponent(JSON.stringify([{userID:o._id,_id:p._id,name:p.name,category:p.category,salePrice:p.salePrice,imageURL:p.imageURL}]))}`):ht.error("Login First")},children:"Buy Now"})]})]},v))})]})}const c7=Z.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    gap: 10px;
    @media (max-width: 767px) {
        padding: 10px 0;
        flex-direction: column;
    }
`,f7=Z.button`
    display: none;
    @media (max-width: 767px) {
        display: block;
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4A7766;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        &:hover {
            background-color: #3E6254;
        }
    }
`;function d7(){const n=un(),i=new URLSearchParams(n.search).get("category"),o=`/categoryDt/${i}`,[u,f]=T.useState(!0),[d,m]=T.useState(null),[h,p]=T.useState(""),[v,S]=T.useState(!1);return T.useEffect(()=>{fetch(o).then(x=>{if(!x.ok)throw new Error("Network response was not ok");return x.json()}).then(x=>{x==null?console.log("Null"):(console.log("Fetched Data:",x),m(x),f(!1))}).catch(x=>{console.error("There was a problem with the fetch operation:",x),p(x)})},[]),g.jsxs(ra,{children:[g.jsx(La,{}),g.jsx(f7,{onClick:()=>S(!v),children:v?"×":"≡"}),u?g.jsx("div",{children:"Loading"}):g.jsxs(g.Fragment,{children:[g.jsxs(c7,{children:[g.jsx(i7,{productDt:d,category:i,showFilter:v,setShowFilter:S}),g.jsx(u7,{productDt:d,category:i})]}),g.jsx(Ni,{})]})]})}const h7=Z.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (max-width: 767px) {
        flex-direction: column;
        padding: 10px;
    }
`,p7=Z.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    gap: 15px;
    align-items: center;
    
    .primaryImg {
        width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
    }

    .secondaryImgBox {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 768px) {
        width: 35%;
    }
    @media (max-width: 575px) {
        max-width: 100%;
        .primaryImg {
            max-height: 300px;
        }
    }
`,m7=Z.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px 0;
    
    button {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    #cart {
        background-color: transparent;
        color: #4A7766;
        border: 2px solid #4A7766;
        &:hover {
            background-color: #4A7766;
            color: white;
        }
    }
    
    #order {
        background-color: #4A7766;
        color: whitesmoke;
        border: none;
        &:hover {
            background-color: #3E6254;
        }
    }

    @media (max-width: 575px) {
        button {
            padding: 10px;
            font-size: 0.9em;
        }
    }
`,g7=Z.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    
    @media (min-width: 768px) {
        width: 65%;
    }
`,y7=Z.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 1.1em;
    border: 2px solid #4A7766;
    border-radius: 8px;
    color: #4A7766;
    padding: 6px 12px;
    width: fit-content;
    
    p {
        margin: 0;
    }
    
    #rate {
        font-size: 1.1em;
    }

    @media (max-width: 575px) {
        font-size: 1em;
        padding: 5px 10px;
    }
`,v7=Z.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    
    p {
        font-size: 1.2em;
        margin: 0;
    }
    
    #originalPrice {
        text-decoration: line-through;
    }
    
    #salePrice {
        font-weight: 500;
        font-size: 1.5em;
    }
    
    .percentBox {
        font-size: 2em;
        color: #4A7766;
        font-weight: 500;
    }

    @media (max-width: 575px) {
        p {
            font-size: 1.1em;
        }
        #salePrice {
            font-size: 1.3em;
        }
        .percentBox {
            font-size: 1.8em;
        }
    }
`,x7=Z.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1em;
    
    h6 {
        color: #4A7766;
        margin: 0;
    }
    
    div {
        background-color: #4A7766;
        color: whitesmoke;
        padding: 6px 12px;
        border-radius: 5px;
    }

    @media (max-width: 575px) {
        font-size: 1em;
    }
`,b7=Z.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    
    h5 {
        margin: 0;
        padding: 5px;
        border-bottom: 2px solid gray;
    }
    
    .highlights, p {
        font-size: 1.1em;
    }
    
    .highlights {
        flex: 1;
        min-width: 200px;
    }

    @media (max-width: 575px) {
        flex-direction: column;
        gap: 15px;
        .highlights, p {
            font-size: 1em;
        }
    }
`,S7=Z.div`
    color: #4A7766;
    padding: 10px;
    border: 2px solid #4A7766;
    font-size: 1em;
    font-weight: 600;
    width: fit-content;
    border-radius: 5px;

    @media (max-width: 575px) {
        font-size: 0.9em;
        padding: 8px;
    }
`,w7=Z.div`
    width: 100%;
    
    h4 {
        margin: 0;
        padding: 10px;
        border: 2px solid gray;
        border-bottom: none;
    }
    
    div {
        font-size: 1.1em;
        border: 2px solid gray;
        padding: 15px;
    }

    @media (max-width: 575px) {
        div {
            font-size: 1em;
            padding: 10px;
        }
    }
`;function E7(){const n=un(),r=new URLSearchParams(n.search),i=r.get("category"),o=r.get("pid");r.get("pname");const[u,f]=T.useState(!0),[d,m]=T.useState(null),[h,p]=T.useState(""),v=ye(),{userData:S,authorized:x,loading:E}=Dn();T.useEffect(()=>{fetch(`/singlePdt/?category=${i}&_id=${o}`).then(O=>{if(!O.ok)throw new Error("Network response was not ok");return O.json()}).then(O=>{O==null?console.log("Null"):(console.log("Product:",O),m(O),f(!1))}).catch(O=>{console.error("There was a problem with the fetch operation:",O),p(O)})},[]);async function j(O){if(!E)if(x)try{const R=await fetch("/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:S._id,pID:O._id,pName:O.name,pCategory:O.category,pPrice:O.salePrice,pImage:O.imageURL})});if(!R.ok)throw new Error(`HTTP error! status: ${R.status}`);const w=await R.json();console.log("Success:",w),ht.success("Added to cart")}catch(R){console.error("Error:",R)}else ht.error("Login first")}return g.jsxs(ra,{children:[g.jsx(La,{}),u?g.jsx("div",{children:"Loading..."}):g.jsx(g.Fragment,{children:d.map((O,R)=>g.jsxs(h7,{children:[g.jsxs(p7,{children:[g.jsx("img",{src:O.imageURL,alt:O.name,className:"primaryImg"}),g.jsxs(m7,{children:[g.jsx("button",{id:"cart",onClick:()=>j(O),children:"Add to Cart"}),g.jsx("button",{id:"order",onClick:()=>{x?v(`/payment?pd=${encodeURIComponent(JSON.stringify([{userID:S._id,_id:O._id,name:O.name,category:O.category,salePrice:O.salePrice,imageURL:O.imageURL}]))}`):ht.error("Login first")},children:"Order Now"})]})]}),g.jsxs(g7,{children:[g.jsx("h4",{children:O.name}),g.jsxs(y7,{children:[g.jsx("p",{children:"4"}),g.jsx(Se,{icon:s3,style:{color:"#4a7766",width:"24px",height:"24px"}}),g.jsx("span",{id:"rate",children:"Ratings"})]}),g.jsxs(v7,{children:[g.jsxs("div",{children:[g.jsx("p",{id:"originalPrice",children:O.originalPrice}),g.jsx("p",{id:"salePrice",children:O.salePrice})]}),g.jsxs("div",{className:"percentBox",children:[(Number(O.salePrice.replace(/[₹,]/g,""))/Number(O.originalPrice.replace(/[₹,]/g,""))*100).toFixed(0),"%"]})]}),g.jsxs(x7,{children:[g.jsx("h6",{children:"Seller"}),g.jsx("div",{children:O.sellerName})]}),g.jsxs(b7,{children:[g.jsxs("div",{className:"highlights",children:[g.jsx("h5",{children:"Highlights"}),g.jsx("ul",{children:Array.isArray(O.highlights)?O.highlights.map((w,z)=>g.jsx("li",{children:w},z)):Object.keys(O.highlights).map((w,z)=>g.jsx("li",{children:`${w}: ${O.highlights[w]}`},z))})]}),g.jsx("p",{children:"Expected delivery within 4 days"})]}),g.jsx(S7,{children:"Verified Product"}),g.jsxs(w7,{children:[g.jsx("h4",{children:"Specifications"}),g.jsx("div",{children:g.jsx("ul",{children:Object.keys(O.specifications).map(w=>g.jsx("li",{children:`${w}: ${O.specifications[w]}`},`${O._id}-${w}`))})})]})]})]},R))}),g.jsx(Ni,{})]})}const T7=Z.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #ECE7E2;
    width: 250px;
    transition: transform 0.3s ease-in-out;
    
    @media (min-width: 768px) {
        transform: translateX(0);
        position: static;
    }

    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 999;
        transform: ${({showFilter:n})=>n?"translateX(0)":"translateX(-100%)"};
        width: 80%;
        max-width: 300px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    }
`,_7=Z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,M1=Z.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 8px;
    
    div {
        font-size: 1.2em;
        font-weight: 500;
    }

    .categoryName {
        background-color: #4A7766;
        color: whitesmoke;
        padding: 6px 12px;
        border-radius: 20px;
        text-align: center;
        font-size: 1.1em;
    }

    .brand-holder {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 0.9em;
    }

    .brands {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
        
        span {
            background-color: #4A7766;
            color: whitesmoke;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.85em;
        }
    }
`;function A7({productDt:n,search:r,showFilter:i,setShowFilter:o}){const[u,f]=T.useState([]),d=m=>{f(h=>h.includes(m)?h.filter(p=>p!==m):[...h,m])};return g.jsxs(T7,{showFilter:i,children:[g.jsx("h2",{children:"Filters"}),g.jsxs(_7,{children:[g.jsxs(M1,{children:[g.jsx("div",{children:"Search for"}),g.jsx("span",{className:"categoryName",children:r})]}),g.jsxs(M1,{children:[g.jsx("div",{children:"Brands"}),g.jsx("div",{className:"brands",children:u.map((m,h)=>g.jsx("span",{children:m},h))}),g.jsx("div",{className:"brand-holder",children:n.map((m,h)=>g.jsxs("div",{children:[g.jsx("input",{type:"checkbox",name:m.brand,id:m.brand,checked:u.includes(m.brand),onChange:()=>d(m.brand)}),g.jsx("label",{htmlFor:m.brand,children:m.brand})]},h))})]})]})]})}const j7=Z.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    @media (min-width: 768px) {
        width: 80%;
    }
`,O7=Z.div`
    background-color: #ECE7E2;
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 10px;
    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 575px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`,C7=Z.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    gap: 8px;
    background-color: whitesmoke;
    padding: 12px;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        max-width: 200px;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: contain;
    }

    .txt-container {
        display: flex;
        flex-direction: column;
        p, h5, h6 {
            margin: 2px 0;
        }
        span {
            color: #4A7766;
            font-weight: bold;
            font-size: 1.8em;
        }
    }

    .btn-container {
        display: flex;
        gap: 8px;
        button {
            padding: 8px;
            border-radius: 8px;
            flex: 1;
            font-size: 0.9em;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        #cart {
            background: transparent;
            color: #4A7766;
            border: 1px solid #4A7766;
            &:hover {
                background-color: #3E6254;
                color: white;
            }
        }
        #buy {
            background-color: #4A7766;
            border: none;
            color: whitesmoke;
            &:hover {
                background-color: #3E6254;
            }
        }
    }

    @media (max-width: 575px) {
        padding: 8px;
        h6 {
            font-size: 0.85rem;
        }
    }
`;function R7({productDt:n,search:r}){const i=ye(),{userData:o,authorized:u,loading:f}=Dn(),d=h=>{i(`/results?category=${encodeURIComponent(h.category)}&pid=${encodeURIComponent(h._id)}&pname=${encodeURIComponent(h.name)}`)};async function m(h){if(!f)if(u)try{const p=await fetch("/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:o._id,pID:h._id,pName:h.name,pCategory:h.category,pPrice:h.salePrice,pImage:h.imageURL})});if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const v=await p.json();console.log("Success:",v),ht.success("Added to cart")}catch(p){console.error("Error:",p)}else u||(console.log("Signin first"),i("/signin"))}return g.jsxs(j7,{children:[g.jsxs("h3",{children:["Showing result for ",r]}),g.jsx(O7,{children:n.map((h,p)=>g.jsxs(C7,{onClick:()=>{d(h)},children:[g.jsx("div",{className:"img-container",children:g.jsx("img",{src:h.imageURL,alt:""})}),g.jsxs("div",{className:"txt-container",children:[g.jsx("h6",{children:h.name.length>50?`${h.name.slice(0,50)}....`:h.name}),g.jsxs("div",{className:"price-container",children:[g.jsx("p",{style:{textDecoration:"line-through"},children:h.originalPrice}),g.jsx("p",{style:{color:"#4A7766"},children:g.jsx("b",{children:h.salePrice})}),g.jsxs("p",{children:[g.jsxs("span",{children:[(Number(h.salePrice.replace(/[₹,]/g,""))/Number(h.originalPrice.replace(/[₹,]/g,""))*100).toFixed(0),"%"]}),"Off"]})]})]}),g.jsxs("div",{className:"btn-container",children:[g.jsx("button",{id:"cart",onClick:v=>{v.stopPropagation(),m(h)},children:"Add to Cart"}),g.jsx("button",{id:"buy",onClick:v=>{v.stopPropagation(),u?i(`/payment?pd=${encodeURIComponent(JSON.stringify([{userID:o._id,_id:h._id,name:h.name,category:h.category,salePrice:h.salePrice,imageURL:h.imageURL}]))}`):ht.error("Login First")},children:"Buy Now"})]})]},p))})]})}const z7=Z.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    gap: 10px;
    @media (max-width: 767px) {
        padding: 10px 0;
        flex-direction: column;
    }
`,N7=Z.button`
    display: none;
    @media (max-width: 767px) {
        display: block;
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4A7766;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        &:hover {
            background-color: #3E6254;
        }
    }
`;function D7(){const n=un(),i=new URLSearchParams(n.search).get("search"),[o,u]=T.useState(!0),[f,d]=T.useState(null),[m,h]=T.useState(""),[p,v]=T.useState(!1);return T.useEffect(()=>{fetch(`/search?keywords=${i}`).then(S=>{if(!S.ok)throw new Error("Network response was not ok");return S.json()}).then(S=>{S==null?console.log("Null"):(console.log("Fetched search Data:",S),d(S),u(!1))}).catch(S=>{console.error("There was a problem with the fetch operation:",S),h(S)})},[i]),g.jsxs(ra,{children:[g.jsx(La,{}),g.jsx(N7,{onClick:()=>v(!p),children:p?"×":"≡"}),o?g.jsx("div",{children:"Loading..."}):g.jsxs(z7,{children:[g.jsx(A7,{productDt:f,search:i,showFilter:p,setShowFilter:v}),g.jsx(R7,{productDt:f,search:i})]}),g.jsx(Ni,{})]})}const M7=Z.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #ECE7E2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
    
    h1 {
        color: #4A7766;
        font-size: 1.8em;
        margin: 0;
    }
    
    h4 {
        font-size: 1.2em;
        margin: 0;
    }
    
    textarea {
        background-color: whitesmoke;
        padding: 10px;
        color: black;
        width: 100%;
        max-width: 500px;
        min-height: 100px;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: 1em;
        resize: vertical;
        
        &:focus {
            border: 2px solid #4A7766;
        }
    }
    
    button {
        padding: 12px 20px;
        border-radius: 8px;
        background-color: #4A7766;
        color: whitesmoke;
        font-size: 1em;
        border: none;
        cursor: pointer;
        width: 100%;
        max-width: 200px;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    .success {
        color: #4A7766;
        font-size: 1em;
    }
    
    .failed {
        color: red;
        font-size: 1em;
    }
    
    @media (max-width: 575px) {
        padding: 15px;
        h1 {
            font-size: 1.5em;
        }
        h4 {
            font-size: 1em;
        }
        textarea {
            font-size: 0.9em;
        }
        button {
            max-width: 150px;
            font-size: 0.9em;
            padding: 10px 15px;
        }
    }
`;function k7(){const[n,r]=T.useState(""),[i,o]=T.useState(null),[u,f]=T.useState(null),d=()=>{fetch("/help",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ques:n}),credentials:"include"}).then(m=>m.json()).then(m=>{m.STATUS==="SUCCESS"?(o(!1),f(m.message)):(o(!0),f(m.message||"Failed to submit question"))}).catch(m=>{o(!0),f("Error submitting question"),console.log("Error while questioning",m)})};return g.jsxs(ra,{children:[g.jsx(La,{}),g.jsxs(M7,{children:[g.jsx("h1",{children:"Any Questions?"}),g.jsx("h4",{children:"Submit your question and we will help you"}),g.jsx("textarea",{name:"question",id:"question",placeholder:"Ask your question",value:n,onChange:m=>r(m.target.value)}),g.jsx("button",{onClick:d,children:"Post"}),u&&g.jsx("div",{className:i?"failed":"success",children:u})]}),g.jsx(Ni,{})]})}const U7=Z.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: #ECE7E2;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    margin: 20px auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    img {
        width: 100%;
        max-width: 250px;
        height: auto;
        object-fit: contain;
    }
    
    h4 {
        margin: 0;
        font-size: 1.3em;
        text-align: center;
    }
    
    button {
        padding: 12px 20px;
        background-color: #4A7766;
        color: whitesmoke;
        border: none;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    @media (max-width: 575px) {
        padding: 15px;
        margin: 10px auto;
        h4 {
            font-size: 1.1em;
        }
        button {
            padding: 10px 15px;
            font-size: 0.9em;
        }
    }
`;function L7(){const{authorized:n,loading:r}=Dn(),i=ye();return r?g.jsx("div",{children:"Loading..."}):n?g.jsxs(ra,{children:[g.jsx(La,{}),g.jsxs(U7,{children:[g.jsx("img",{src:"https://res.cloudinary.com/dqraj6g9a/image/upload/v1746115955/check-out_xzt7mn.png",alt:"Checkout confirmation"}),g.jsx("h4",{children:"Your order has been placed"}),g.jsx("button",{onClick:()=>i("/"),children:"Continue Shopping"})]})]}):(ht.error("Login First"),i("/"),null)}const $7=Z.div`
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    background-color: #ECE7E2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px;
    }
    @media (min-width: 992px) {
        width: 80%;
    }
`,H7=Z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`,B7=Z.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h4, h5, p {
        margin: 0;
        padding: 5px 0;
    }
    
    input {
        width: 100%;
        padding: 10px;
        color: black;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #4A7766;
        border-radius: 5px;
        outline: none;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        h4 {
            font-size: 1.2em;
        }
        h5, p {
            font-size: 0.9em;
        }
    }
`,q7=Z.div`
    input[type="radio"] {
        accent-color: #4A7766;
        transform: scale(1.5); 
    margin-right: 8px;     
    }
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 500;
    @media (max-width:575px){
        flex-direction:column;
        gap:5px;
    }
`,Y7=Z.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h3 {
        margin: 0 0 15px 0;
        font-size: 1.3em;
    }
    
    input {
        width: 100%;
        padding: 10px;
        color: black;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #4A7766;
        border-radius: 5px;
        outline: none;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    select {
        width: 100%;
        padding: 10px;
        background: transparent;
        color: black;
        border: 2px solid #4A7766;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 1em;
    }
    
    .monthAndYear {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    button {
        padding: 12px;
        color: whitesmoke;
        background-color: #4A7766;
        border-radius: 8px;
        border: none;
        font-size: 1em;
        width: 100%;
        max-width: 200px;
        margin: 15px auto 0;
        display: block;
        cursor: pointer;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #3E6254;
        }
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        select, input {
            font-size: 0.9em;
        }
        button {
            max-width: 150px;
        }
    }
`,F7=Z.div`
    padding: 15px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h4 {
        margin: 0 0 15px 0;
        font-size: 1.3em;
    }
    
    @media (max-width: 575px) {
        padding: 10px;
        h4 {
            font-size: 1.2em;
        }
    }
`,G7=Z.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
    h5 {
        margin: 0;
        font-size: 1.1em;
    }
    
    #price {
        color: #4A7766;
        font-weight: 700;
        font-size: 1.3em;
    }
    
    @media (max-width: 575px) {
        h5 {
            font-size: 1em;
        }
        #price {
            font-size: 1.2em;
        }
    }
`,P7=["01","02","03","04","05","06","07","08","09","10","11","12"],V7=new Date().getFullYear(),X7=Array.from({length:10},(n,r)=>(V7+r).toString()),I7=Gh({name:mn().min(2,"Name must be at least 2 characters").required("Name is required"),address:mn().required("Address is required"),cardNumber:mn().matches(/^\d+$/,"Enter only digits").min(12,"Number must be at least 12 digits").max(19,"Number can't be longer than 19 digits").required("Card Number is required"),cvv:mn().matches(/^\d+$/,"Enter only digits").min(3,"CVV must be at least 3 digits").max(4,"CVV can't be longer than 4 digits").required("CVV is required"),expiryMonth:mn().matches(/^(0[1-9]|1[0-2])$/,"Must be a valid month (01-12)").required("Month is required")});function Q7(){const{authorized:n,userData:r,loading:i,verifyAuth:o}=Dn(),u=ye(),f=un(),m=new URLSearchParams(f.search).get("pd"),[h,p]=T.useState(!1),v=T.useRef();let S=[];const x=A=>{p(A==="show")};try{m&&(S=JSON.parse(decodeURIComponent(m)),console.log(S))}catch(A){console.error("Invalid JSON in URL",A)}const E=(A,q)=>{fetch("/setAddress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:A,address:q})}).then(H=>H.json()).then(H=>{console.log("Success:",H)}).catch(H=>{console.error("Error:",H)})};async function j(){if(!i)if(n)try{const A=await fetch("/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productArray:S,userID:r._id})});if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const q=await A.json();console.log("Success:",q),ht.success("Order Placed"),o(),u("/checkout"),E(r._id,v.current.value)}catch(A){console.error("Error:",A)}else ht.error("Login First!"),u("/signin")}T.useEffect(()=>{o()},[]);const{values:O,errors:R,handleChange:w,handleBlur:z,handleSubmit:D,touched:Y}=qh({initialValues:{name:"",cardNumber:"",expiryMonth:"",expiryYear:"",cvv:"",address:""},validationSchema:I7,onSubmit:j});return i?g.jsx("div",{children:"Loading..."}):g.jsxs(ra,{children:[g.jsx(La,{}),n?g.jsxs($7,{children:[g.jsxs(H7,{children:[g.jsxs(B7,{children:[g.jsx("h4",{children:"Billing Info"}),g.jsx("h5",{children:r.name.length>15?`${r.name.slice(0,15)}...`:r.name}),g.jsx("p",{children:r.phone}),r.address==null||r==null?g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"text",name:"address",id:"address",placeholder:"Delivery address",value:O.address,onChange:w,onBlur:z,ref:v}),Y.address&&R.address&&g.jsx("div",{style:{color:"red"},children:R.address})]}):g.jsx("p",{children:O.address=r.address})]}),g.jsxs(q7,{children:[g.jsxs("div",{children:[g.jsx("input",{type:"radio",name:"payment",checked:h,onChange:()=>x("show")}),g.jsx("label",{htmlFor:"cod",children:"Cash On Delivery"})]}),g.jsxs("div",{children:[g.jsx("input",{type:"radio",checked:!h,onChange:()=>x("none"),name:"payment"}),g.jsx("label",{htmlFor:"online",children:"Online Payment"})]})]}),g.jsxs(Y7,{children:[g.jsx("h3",{children:"Payment Details"}),h?g.jsx("button",{onClick:()=>{var q,H;if(!((H=(q=v.current)==null?void 0:q.value)==null?void 0:H.trim())&!O.address){ht.error("Please add address"),console.log("add err");return}j()},children:"Pay"}):g.jsxs("form",{onSubmit:D,children:[g.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Name on Card",value:O.name,onChange:w,onBlur:z}),Y.name&&R.name&&g.jsx("div",{style:{color:"red"},children:R.name}),g.jsx("input",{type:"text",name:"cardNumber",id:"cardNumber",placeholder:"Card Number",value:O.cardNumber,onChange:w,onBlur:z}),Y.cardNumber&&R.cardNumber&&g.jsx("div",{style:{color:"red"},children:R.cardNumber}),g.jsxs("div",{className:"monthAndYear",children:[g.jsxs("select",{name:"expiryMonth",value:O.expiryMonth,onChange:w,onBlur:z,children:[g.jsx("option",{value:"",children:"Select Expiry Month"}),P7.map(A=>g.jsx("option",{value:A,children:A},A))]}),Y.expiryMonth&&R.expiryMonth&&g.jsx("div",{style:{color:"red"},children:R.expiryMonth}),g.jsxs("select",{name:"expiryYear",value:O.expiryYear,onChange:w,onBlur:z,children:[g.jsx("option",{value:"",children:"Select Expiry Year"}),X7.map(A=>g.jsx("option",{value:A,children:A},A))]})]}),g.jsx("input",{type:"text",name:"cvv",id:"cvv",placeholder:"CVV",value:O.cvv,onChange:w,onBlur:z}),Y.cvv&&R.cvv&&g.jsx("div",{style:{color:"red"},children:R.cvv}),g.jsx("button",{type:"submit",children:"Pay"})]})]})]}),g.jsxs(F7,{children:[g.jsx("h4",{children:"My Products"}),g.jsxs(ux,{children:[g.jsxs("h3",{children:["Total Products ",g.jsx("span",{children:S.length})]}),S.map((A,q)=>g.jsxs(zh,{children:[g.jsx("img",{src:A.imageURL,alt:A.name}),g.jsxs("div",{className:"body",onClick:()=>{u(`/results?category=${encodeURIComponent(A.category)}&pid=${encodeURIComponent(A._id)}&pname=${encodeURIComponent(A.name)}`)},children:[g.jsx("h6",{children:A.name.length>25?`${A.name.slice(0,25)}...`:A.name}),g.jsx("p",{children:A.price})]}),g.jsx("div",{children:g.jsx(Se,{icon:Vd,style:{width:"24px",height:"24px",color:"#4a7766",cursor:"pointer",position:"absolute",top:"5px",right:"5px"},onClick:()=>u(-1)})})]},q))]}),g.jsxs(G7,{children:[g.jsx("h5",{children:"Total Amount"}),S.length>0?g.jsxs("h5",{id:"price",children:["₹",S.map(A=>Number(A.salePrice.replace(/[₹,]/g,""))).reduce((A,q)=>A+q,0).toLocaleString()]}):g.jsx("h5",{children:"₹0"})]})]})]}):()=>{ht.error("Login First"),u("/")}]})}const Z7=Z.div`
    width: 90%;
    max-width: 1000px;
    margin: 24px auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: #ECE7E2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    @media (max-width: 768px) {
        width: 95%;
        padding: 12px;
        margin: 16px auto;
    }
    @media (max-width: 480px) {
        padding: 10px;
    }
`,K7=Z.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    .profile {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(120px, 25vw, 160px);
        height: clamp(120px, 25vw, 160px);
        border-radius: 50%;
        background-color: #4A7766;
    }
    .profilePic{
       width: clamp(60px, 20vw, 100px);
        height: clamp(60px, 20vw, 100px);
        object-fit: contain;
    }
    @media (max-width: 480px) {
        .profile {
            width: clamp(80px, 20vw, 100px);
            height: clamp(80px, 20vw, 100px);
        }
        .profilePic{
            width: clamp(40px, 12vw, 60px);
            height: clamp(40px, 12vw, 60px);
        }
    }
`,$l=Z.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    background-color: whitesmoke;
    padding: 16px;
    border-radius: 12px;
    input {
        background: transparent;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        border: none;
        color: black;
        width: 100%;
        &:focus {
            border: 2px solid black;
            border-radius: 4px;
            outline: none;
        }
    }
    span {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        color: #4A7766;
        font-weight: 600;
    }
    #cart {
        padding: 10px;
        background-color: #4A7766;
        color: white;
        border-radius: 8px;
        border: none;
        font-size: clamp(0.9rem, 2.5vw, 1rem);
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover {
            background-color: #3a5f50;
        }
    }
    #logout {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 8px 16px;
        background-color: transparent;
        color: #4A7766;
        border: 2px solid #4A7766;
        border-radius: 8px;
        font-size: clamp(0.9rem, 2.5vw, 1rem);
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            background-color: #4A7766;
            color: whitesmoke;
        }
    }
    @media (max-width: 480px) {
        padding: 12px;
        #logout {
            padding: 6px 12px;
            font-size: clamp(0.8rem, 2vw, 0.9rem);
        }
    }
`,yd=Z.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    h4 {
        font-size: clamp(1.1rem, 3vw, 1.3rem);
        margin: 0;
    }
`,J7=Z.div`
    height: 300px;
    overflow: auto;
    padding: 8px;
    @media (max-width: 480px) {
        height: 250px;
    }
`;function W7(){const{authorized:n,userData:r,loading:i}=Dn(),{setIsOpen:o}=T.useContext(Nn),[u,f]=T.useState(!0),[d,m]=T.useState(""),h=T.useRef(),p=ye(),v=(x,E)=>{fetch("/setAddress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:x,address:E})}).then(j=>j.json()).then(j=>{console.log("Success:",j),j.status=="SUCCESS"&&ht.success(j.message)}).catch(j=>{console.error("Error:",j)})},S=()=>{fetch("/logout",{method:"GET",credentials:"include"}).then(x=>x.json()).then(x=>{console.log("Success:",x),x.status=="SUCCESS"&&(ht.success(x.message),p("/"))}).catch(x=>{console.error("Error:",x)})};return T.useEffect(()=>{i||(console.log(r.address),m(r.address))},[i]),i?g.jsx("div",{children:"Loading..."}):n?g.jsxs(ra,{children:[g.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),g.jsx(La,{}),g.jsxs(Z7,{children:[g.jsxs($l,{children:[g.jsxs(K7,{children:[g.jsx("div",{className:"profile",children:g.jsx(Se,{icon:Rh,style:{color:"white"},className:"profilePic"})}),g.jsx(yd,{children:g.jsx("h4",{children:r.name})})]}),g.jsx("button",{id:"logout",onClick:()=>{S()},children:"LogOut"})]}),g.jsxs($l,{children:[g.jsx(yd,{children:g.jsx("h4",{children:"Contact Details"})}),g.jsx("input",{type:"text",disabled:!0,placeholder:r.email}),g.jsx("input",{type:"text",disabled:!0,placeholder:r.phone})]}),g.jsxs($l,{children:[g.jsxs(yd,{children:[g.jsx("h4",{children:"Address Details"}),u?g.jsx(Se,{icon:l3,style:{color:"#4A7766",width:"20px",height:"20px"},onClick:()=>{f(x=>!x),h.current.focus()}}):g.jsx(Se,{icon:p3,style:{color:"#4A7766",width:"20px",height:"20px"},onClick:()=>{f(x=>!x),v(r._id,d),h.current.blur()}})]}),g.jsx("input",{type:"text",disabled:u,ref:h,placeholder:"Address",value:d,onChange:x=>{m(x.target.value)}})]}),g.jsxs($l,{children:[g.jsxs("h4",{children:["Total orders: ",g.jsx("span",{children:r.orders.length})]}),g.jsx(J7,{children:r.orders.map((x,E)=>g.jsxs(zh,{children:[g.jsx("img",{src:x.imageURL,alt:""}),g.jsxs("div",{className:"body",onClick:()=>{p(`/results?category=${encodeURIComponent(x.category)}&pid=${encodeURIComponent(x._id)}&pname=${encodeURIComponent(x.name)}`)},children:[g.jsx("h6",{children:x.name.length>22?`${x.name.slice(0,25)}...`:x.name}),g.jsx("p",{children:x.salePrice})]})]},E))})]}),g.jsxs($l,{children:[g.jsxs("h4",{children:["Total Products in Cart: ",g.jsx("span",{children:r.cartProduct.length})]}),g.jsx("button",{id:"cart",onClick:()=>{o(x=>!x)},children:"See Cart"})]})]}),g.jsx(Ni,{})]}):g.jsx("div",{children:"Login First"})}function t8(){return g.jsx(g.Fragment,{children:g.jsxs(Cw,{children:[g.jsxs(iw,{children:[g.jsx(hn,{path:"/",element:g.jsx(W_,{})}),g.jsx(hn,{path:"/signin",element:g.jsx(gO,{})}),g.jsx(hn,{path:"/signup",element:g.jsx(n7,{})}),g.jsx(hn,{path:"/help",element:g.jsx(k7,{})}),g.jsx(hn,{path:"/products",element:g.jsx(d7,{})}),g.jsx(hn,{path:"/results",element:g.jsx(E7,{})}),g.jsx(hn,{path:"/search",element:g.jsx(D7,{})}),g.jsx(hn,{path:"/checkout",element:g.jsx(L7,{})}),g.jsx(hn,{path:"/payment",element:g.jsx(Q7,{})}),g.jsx(hn,{path:"/profile",element:g.jsx(ra,{children:g.jsx(W7,{})})})]}),g.jsx(Q3,{})]})})}mS.createRoot(document.getElementById("root")).render(g.jsx(T.StrictMode,{children:g.jsx(t8,{})}))});export default e8();
