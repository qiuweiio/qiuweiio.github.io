import{r as _}from"./element-plus.04a089c1.js";import{V as g,v,x as w,c,a as u,P as n,M as h,J as b,a1 as x,u as i,F as f,o as m,Z as d,R as l,K as M}from"./@vue.bf949a70.js";import"./dayjs.af8763dd.js";import"./axios.1257cc19.js";import"./lodash-es.5d194466.js";import"./@vueuse.842cb5bc.js";import"./@element-plus.2727cb8c.js";import"./async-validator.5d25c98b.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";class y{constructor(t,s,r,o,a,e){this.w=t,this.h=s,this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*t*s),Math.round(Math.random()*t*s),Math.round(Math.random()*t*s),Math.round(Math.random()*t*s),Math.round(Math.random()*t*s),Math.round(Math.random()*t*s)],this.over=0,this.v=100,this.falg=0,this.control(r,o,a,e)}loopTime(t){this.time=setTimeout(()=>{if(clearTimeout(this.time),this.time=null,this.rule(),this.over===1)return this.loopTime(t)},t)}rule(){this.direction===1?this.next--:this.direction===3?this.next++:this.direction===2?this.next-=this.w:this.direction===4&&(this.next+=this.w);let t=this.fruit.indexOf(this.next);t>-1&&(this.body.unshift(this.body[0]),this.fruit.splice(t,1),this.fruit.push(Math.round(Math.random()*this.w*this.h))),this.next<0?this.direction===2&&(this.next+=this.w*this.h):this.next>this.w*this.h&&this.direction===4&&(this.next-=this.w*this.h),this.body.shift(),this.body.push(this.next),this.body.length>10&&(this.time&&clearTimeout(this.time),this.over=4,_({title:"\u606D\u559C",message:"\u606D\u559C\u4F60\u901A\u5173\u6210\u529F!",type:"success"})),this.body.length%5===0&&this.v-25>0&&this.falg!==this.body.length&&(this.v-=25,this.falg=this.body.length)}start(){this.over=1,this.loopTime(this.v)}suspend(){this.over=2,this.time&&clearTimeout(this.time)}reload(){this.time&&clearTimeout(this.time),this.body=[1,2,3,4],this.time=null,this.next=4,this.direction=3,this.fruit=[Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h),Math.round(Math.random()*this.w*this.h)],this.over=0,this.v=100}changev(t){t?this.v+=25:this.v-25>0&&(this.v-=25),this.start()}control(t,s,r,o){window.addEventListener("keydown",a=>{a.keyCode==t?this.direction=1:a.keyCode==s?this.direction=2:a.keyCode==r?this.direction=3:a.keyCode==o&&(this.direction=4)})}destroy(){this.body=[],this.time&&clearTimeout(this.time),this.time=null}}const T={class:"game"},k={class:"content"},C={class:"flex nowrap"},B=u("a",{href:"/"},"404\u9875\u9762\u627E\u4E0D\u5230\u5566! \u73A9\u4F1A\u6E38\u620F\u5427! \u6216\u8005\u70B9\u51FB\u8FD4\u56DE\u767B\u5F55\u9875!",-1),E=d("\u5F00\u59CB"),D=d("\u6682\u505C"),N=d("\u91CD\u65B0\u5F00\u59CB"),V={id:"gameBox"},R={setup(p){const t=g({w:60,h:30,it:{body:[1,2,3],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},it2:{body:[1,2,3,4],w:0,h:0,time:null,next:0,direction:0,fruit:[7,8,9],over:0,v:0,destroy(){},start(){},suspend(){},changev(){}},status:["\u672A\u5F00\u59CB","\u6E38\u620F\u4E2D","\u6682\u505C","\u7ED3\u675F","\u901A\u5173"],init(){t.w=Math.floor(document.getElementById("gameBox").offsetWidth/20),t.h=Math.floor(document.getElementById("gameBox").offsetHeight/20),t.it=new y(t.w,t.h,37,38,39,40),t.it2=new y(t.w,t.h,65,87,68,83)},start(s){s?(t.it.start(),t.it2.start()):(t.it.suspend(),t.it2.suspend())},reset(){t.it.reload(),t.it2.reload()},now:new Date().getTime(),last:new Date().getTime()});return v(()=>{t.init(),window.addEventListener("resize",()=>{t.now=new Date().getTime(),(t.now-t.last>100||t.now-t.last===0)&&(t.last=new Date().getTime(),t.init())})}),w(()=>{console.log("\u9500\u6BC1"),t.it.destroy(),t.it2.destroy()}),(s,r)=>{const o=f("el-button"),a=f("el-scrollbar");return m(),c("div",T,[u("div",k,[n(a,{native:!1,noresize:!1,tag:"div"},{default:h(()=>[u("div",C,[n(o,null,{default:h(()=>[B]),_:1}),n(o,{class:"col-1",round:"",type:"success",onClick:r[0]||(r[0]=e=>i(t).start(1))},{default:h(()=>[E]),_:1}),n(o,{class:"col-1",round:"",type:"danger",onClick:r[1]||(r[1]=e=>i(t).start(0))},{default:h(()=>[D]),_:1}),n(o,{class:"col-1",round:"",type:"warning",onClick:i(t).reset},{default:h(()=>[N]),_:1},8,["onClick"]),n(o,{type:"danger"},{default:h(()=>[d("\u866B1\u901F\u5EA6: "+l(i(t).it.v),1)]),_:1}),n(o,{type:"danger"},{default:h(()=>[d("\u866B2\u901F\u5EA6: "+l(i(t).it2.v),1)]),_:1}),n(o,{type:"success",round:""},{default:h(()=>[d("\u866B1\u5206\u6570: "+l(i(t).it.body.length*10),1)]),_:1}),n(o,{type:"success",round:""},{default:h(()=>[d("\u866B2\u5206\u6570: "+l(i(t).it2.body.length*10),1)]),_:1})])]),_:1})]),u("div",V,[(m(!0),c(b,null,x(i(t).w*i(t).h,e=>(m(),c("span",{key:e,class:M([{it:i(t).it.body.includes(e)||i(t).it.fruit.includes(e),itf:i(t).it.body[0]===e,ith:i(t).it.body[i(t).it.body.length-1]===e,it2:i(t).it2.body.includes(e)||i(t).it2.fruit.includes(e),it2f:i(t).it2.body[0]===e,it2h:i(t).it2.body[i(t).it2.body.length-1]===e},"block"])},null,2))),128))])])}}};export{R as default};