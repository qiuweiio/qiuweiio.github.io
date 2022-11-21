import{r as ht}from"./jmuxer.f6538b25.js";var U=typeof Map=="function"&&Map.prototype,D=Object.getOwnPropertyDescriptor&&U?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,I=U&&D&&typeof D.get=="function"?D.get:null,mt=U&&Map.prototype.forEach,K=typeof Set=="function"&&Set.prototype,N=Object.getOwnPropertyDescriptor&&K?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,L=K&&N&&typeof N.get=="function"?N.get:null,dt=K&&Set.prototype.forEach,Ot=typeof WeakMap=="function"&&WeakMap.prototype,w=Ot?WeakMap.prototype.has:null,wt=typeof WeakSet=="function"&&WeakSet.prototype,$=wt?WeakSet.prototype.has:null,$t=typeof WeakRef=="function"&&WeakRef.prototype,rt=$t?WeakRef.prototype.deref:null,Et=Boolean.prototype.valueOf,Mt=Object.prototype.toString,Wt=Function.prototype.toString,It=String.prototype.match,Q=String.prototype.slice,s=String.prototype.replace,Lt=String.prototype.toUpperCase,nt=String.prototype.toLowerCase,ut=RegExp.prototype.test,at=Array.prototype.concat,u=Array.prototype.join,_t=Array.prototype.slice,it=Math.floor,F=typeof BigInt=="function"?BigInt.prototype.valueOf:null,C=Object.getOwnPropertySymbols,H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,m=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===m?"object":"symbol")?Symbol.toStringTag:null,ct=Object.prototype.propertyIsEnumerable,ot=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function ft(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||ut.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var a=t<0?-it(-t):it(t);if(a!==t){var i=String(a),r=Q.call(e,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(e,n,"$&_")}var B=ht.custom,P=B&&yt(B)?B:null,Yt=function t(e,n,a,i){var r=n||{};if(y(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(y(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=y(r,"customInspect")?r.customInspect:!0;if(typeof c!="boolean"&&c!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(y(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(y(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=r.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return gt(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return v?ft(e,f):f}if(typeof e=="bigint"){var p=String(e)+"n";return v?ft(e,p):p}var G=typeof r.depth=="undefined"?5:r.depth;if(typeof a=="undefined"&&(a=0),a>=G&&G>0&&typeof e=="object")return V(e)?"[Array]":"[Object]";var S=Gt(r,a);if(typeof i=="undefined")i=[];else if(st(i,e)>=0)return"[Circular]";function l(h,M,St){if(M&&(i=_t.call(i),i.push(M)),St){var et={depth:r.depth};return y(r,"quoteStyle")&&(et.quoteStyle=r.quoteStyle),t(h,et,a+1,i)}return t(h,r,a+1,i)}if(typeof e=="function"){var X=Pt(e),Y=W(e,l);return"[Function"+(X?": "+X:" (anonymous)")+"]"+(Y.length>0?" { "+u.call(Y,", ")+" }":"")}if(yt(e)){var Z=m?s.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):H.call(e);return typeof e=="object"&&!m?O(Z):Z}if(Ut(e)){for(var d="<"+nt.call(String(e.nodeName)),_=e.attributes||[],E=0;E<_.length;E++)d+=" "+_[E].name+"="+pt(Rt(_[E].value),"double",r);return d+=">",e.childNodes&&e.childNodes.length&&(d+="..."),d+="</"+nt.call(String(e.nodeName))+">",d}if(V(e)){if(e.length===0)return"[]";var R=W(e,l);return S&&!Qt(R)?"["+J(R,S)+"]":"[ "+u.call(R,", ")+" ]"}if(At(e)){var k=W(e,l);return"cause"in e&&!ct.call(e,"cause")?"{ ["+String(e)+"] "+u.call(at.call("[cause]: "+l(e.cause),k),", ")+" }":k.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+u.call(k,", ")+" }"}if(typeof e=="object"&&c){if(P&&typeof e[P]=="function")return e[P]();if(c!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(zt(e)){var x=[];return mt.call(e,function(h,M){x.push(l(M,e,!0)+" => "+l(h,e))}),lt("Map",I.call(e),x,S)}if(Vt(e)){var b=[];return dt.call(e,function(h){b.push(l(h,e))}),lt("Set",L.call(e),b,S)}if(Ft(e))return z("WeakMap");if(Jt(e))return z("WeakSet");if(Ht(e))return z("WeakRef");if(Dt(e))return O(l(Number(e)));if(Ct(e))return O(l(F.call(e)));if(Nt(e))return O(Et.call(e));if(Tt(e))return O(l(String(e)));if(!kt(e)&&!qt(e)){var q=W(e,l),j=ot?ot(e)===Object.prototype:e instanceof Object||e.constructor===Object,A=e instanceof Object?"":"null prototype",tt=!j&&o&&Object(e)===e&&o in e?Q.call(g(e),8,-1):A?"Object":"",vt=j||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",T=vt+(tt||A?"["+u.call(at.call([],tt||[],A||[]),": ")+"] ":"");return q.length===0?T+"{}":S?T+"{"+J(q,S)+"}":T+"{ "+u.call(q,", ")+" }"}return String(e)};function pt(t,e,n){var a=(n.quoteStyle||e)==="double"?'"':"'";return a+t+a}function Rt(t){return s.call(String(t),/"/g,"&quot;")}function V(t){return g(t)==="[object Array]"&&(!o||!(typeof t=="object"&&o in t))}function kt(t){return g(t)==="[object Date]"&&(!o||!(typeof t=="object"&&o in t))}function qt(t){return g(t)==="[object RegExp]"&&(!o||!(typeof t=="object"&&o in t))}function At(t){return g(t)==="[object Error]"&&(!o||!(typeof t=="object"&&o in t))}function Tt(t){return g(t)==="[object String]"&&(!o||!(typeof t=="object"&&o in t))}function Dt(t){return g(t)==="[object Number]"&&(!o||!(typeof t=="object"&&o in t))}function Nt(t){return g(t)==="[object Boolean]"&&(!o||!(typeof t=="object"&&o in t))}function yt(t){if(m)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!H)return!1;try{return H.call(t),!0}catch{}return!1}function Ct(t){if(!t||typeof t!="object"||!F)return!1;try{return F.call(t),!0}catch{}return!1}var Bt=Object.prototype.hasOwnProperty||function(t){return t in this};function y(t,e){return Bt.call(t,e)}function g(t){return Mt.call(t)}function Pt(t){if(t.name)return t.name;var e=It.call(Wt.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function st(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1}function zt(t){if(!I||!t||typeof t!="object")return!1;try{I.call(t);try{L.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function Ft(t){if(!w||!t||typeof t!="object")return!1;try{w.call(t,w);try{$.call(t,$)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function Ht(t){if(!rt||!t||typeof t!="object")return!1;try{return rt.call(t),!0}catch{}return!1}function Vt(t){if(!L||!t||typeof t!="object")return!1;try{L.call(t);try{I.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function Jt(t){if(!$||!t||typeof t!="object")return!1;try{$.call(t,$);try{w.call(t,w)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function Ut(t){return!t||typeof t!="object"?!1:typeof HTMLElement!="undefined"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function gt(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return gt(Q.call(t,0,e.maxStringLength),e)+a}var i=s.call(s.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Kt);return pt(i,"single",e)}function Kt(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+Lt.call(e.toString(16))}function O(t){return"Object("+t+")"}function z(t){return t+" { ? }"}function lt(t,e,n,a){var i=a?J(n,a):u.call(n,", ");return t+" ("+e+") {"+i+"}"}function Qt(t){for(var e=0;e<t.length;e++)if(st(t[e],`
`)>=0)return!1;return!0}function Gt(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=u.call(Array(t.indent+1)," ");else return null;return{base:n,prev:u.call(Array(e+1),n)}}function J(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+u.call(t,","+n)+`
`+e.prev}function W(t,e){var n=V(t),a=[];if(n){a.length=t.length;for(var i=0;i<t.length;i++)a[i]=y(t,i)?e(t[i],t):""}var r=typeof C=="function"?C(t):[],c;if(m){c={};for(var v=0;v<r.length;v++)c["$"+r[v]]=r[v]}for(var f in t)!y(t,f)||n&&String(Number(f))===f&&f<t.length||m&&c["$"+f]instanceof Symbol||(ut.call(/[^\w$]/,f)?a.push(e(f,t)+": "+e(t[f],t)):a.push(f+": "+e(t[f],t)));if(typeof C=="function")for(var p=0;p<r.length;p++)ct.call(t,r[p])&&a.push("["+e(r[p])+"]: "+e(t[r[p]],t));return a}export{Yt as o};
