import{r as C,s as L,w as W,g as x,b as z,e as c,u as g,f as R}from"./@vue.807b2975.js";function h(e){return x()?(z(e),!0):!1}const _=typeof window!="undefined",te=e=>typeof e=="boolean",re=e=>typeof e=="number",F=e=>typeof e=="string",b=()=>{};var N=Object.defineProperty,V=Object.defineProperties,B=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&$(e,r,t[r]);if(P)for(var r of P(t))q.call(t,r)&&$(e,r,t[r]);return e},G=(e,t)=>V(e,B(t));function ne(e,t){var r;const n=L();return W(()=>{n.value=e()},G(A({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),C(n)}function oe(e,t,r={}){const{immediate:n=!0}=r,o=c(!1);let s=null;function a(){s&&(clearTimeout(s),s=null)}function l(){o.value=!1,a()}function u(...i){a(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...i)},g(t))}return n&&(o.value=!0,_&&u()),h(l),{isPending:o,start:u,stop:l}}function v(e){var t;const r=g(e);return(t=r==null?void 0:r.$el)!=null?t:r}const w=_?window:void 0,H=_?window.document:void 0;function d(...e){let t,r,n,o;if(F(e[0])?([r,n,o]=e,t=w):[t,r,n,o]=e,!t)return b;let s=b;const a=R(()=>g(t),u=>{s(),u&&(u.addEventListener(r,n,o),s=()=>{u.removeEventListener(r,n,o),s=b})},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return h(l),l}function se(e,t,r={}){const{window:n=w,ignore:o}=r;if(!n)return;const s=c(!0),l=[d(n,"click",i=>{const f=v(e),p=i.composedPath();!f||f===i.target||p.includes(f)||!s.value||o&&o.length>0&&o.some(T=>{const m=v(T);return m&&(i.target===m||p.includes(m))})||t(i)},{passive:!0,capture:!0}),d(n,"pointerdown",i=>{const f=v(e);s.value=!!f&&!i.composedPath().includes(f)},{passive:!0})];return()=>l.forEach(i=>i())}const y=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O="__vueuse_ssr_handlers__";y[O]=y[O]||{};y[O];function ie({document:e=H}={}){if(!e)return c("visible");const t=c(e.visibilityState);return d(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var S=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,Q=(e,t)=>{var r={};for(var n in e)J.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&S)for(var n of S(e))t.indexOf(n)<0&&M.call(e,n)&&(r[n]=e[n]);return r};function ae(e,t,r={}){const n=r,{window:o=w}=n,s=Q(n,["window"]);let a;const l=o&&"ResizeObserver"in o,u=()=>{a&&(a.disconnect(),a=void 0)},i=R(()=>v(e),p=>{u(),l&&o&&p&&(a=new o.ResizeObserver(t),a.observe(p,s))},{immediate:!0,flush:"post"}),f=()=>{u(),i()};return h(f),{isSupported:l,stop:f}}var E,j;_&&(window==null?void 0:window.navigator)&&((E=window==null?void 0:window.navigator)==null?void 0:E.platform)&&/iP(ad|hone|od)/.test((j=window==null?void 0:window.navigator)==null?void 0:j.platform);var U=Object.defineProperty,D=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&I(e,r,t[r]);if(D)for(var r of D(t))Y.call(t,r)&&I(e,r,t[r]);return e};const k={top:0,left:0,bottom:0,right:0,height:0,width:0};Z({text:""},k);function le({window:e=w}={}){if(!e)return c(!1);const t=c(e.document.hasFocus());return d(e,"blur",()=>{t.value=!1}),d(e,"focus",()=>{t.value=!0}),t}export{re as a,te as b,ae as c,ie as d,le as e,ne as f,oe as g,_ as i,se as o,h as t,d as u};