import{_ as F,a as J}from"./Btn.f7cbcdc3.js";import{_ as P,c as M,b as U}from"./index.93c946f5.js";import{d as j,V as A,f as T,v as z,F as b,o as k,c as I,a as o,K as C,I as B,J as D,a1 as G,S as R,R as $,P as r,e as V,u as n,M as h,ap as K,aq as Q}from"./@vue.807b2975.js";import{g,p as L,a as O}from"./request.2b47f025.js";import{a as v}from"./element-plus.9dccbbcf.js";import"./vue-router.203fc809.js";import"./pinia.e364e968.js";import"./vue-demi.b3a9cad9.js";/* empty css                    */import"./amfe-flexible.30f45bbf.js";import"./jquery.310f556f.js";import"./axios.1257cc19.js";import"./lodash.19b22f64.js";import"./vite-plugin-mock.c101b59b.js";import"./mockjs.c44c5d1b.js";import"./path-to-regexp.3eda823b.js";import"./dayjs.af8763dd.js";import"./lodash-es.5d194466.js";import"./@vueuse.3d68ca19.js";import"./@element-plus.5dd6b289.js";import"./async-validator.5d25c98b.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";import"./qs.cbfe7bae.js";import"./side-channel.ed271cce.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.5a656981.js";const W=j({name:"Jointlevel",props:{data:{type:Object,default:()=>({name:"",list:[],checkId:[],checkLevel:null,checkLevelOpen:!1,key:"name",value:"id",child:"children",column:!0,column2:!0,single:!1,noAll:!1})}},setup(i,{emit:f}){const e=A({data:{name:"",list:[],checkId:[],checkLevel:null,checkLevelOpen:!1,key:"name",value:"id",child:"children",column:!0,column2:!0,single:!1,noAll:!1},num:null,allArray:[],getAll(l){l.forEach(u=>{e.allArray.push(u[e.data.value]),u[e.data.child]&&e.getAll(u[e.data.child])})},all(l){e.getAll(e.data.list),e.data.checkId=[...new Set([...e.data.checkId])],e.getNum(),l?e.data.checkId=[...new Set([...e.allArray])]:e.data.checkId.length===e.num?e.data.checkId=[]:e.data.checkId=[...new Set([...e.allArray])],f("checkId",{name:e.data.name,checkId:e.data.checkId})},getNum(){let l=i.data.list.length;i.data.list.forEach(u=>{u[e.data.child]&&(l+=u[e.data.child].length,u[e.data.child].forEach(a=>{a[e.data.child]&&(l+=a[e.data.child].length,a[e.data.child].forEach(s=>{s[e.data.child]&&(l+=s[e.data.child].length)}))}))}),e.num=l},checkChildAll(l,u){l.forEach(a=>{a[e.data.value]===u[e.data.value]&&(e.data.checkId.push(u[e.data.value]),a[e.data.child]&&a[e.data.child].length&&a[e.data.child].forEach(s=>{e.data.checkId.push(s[e.data.value]),s[e.data.child]&&s[e.data.child].length&&s[e.data.child].forEach(t=>{e.data.checkId.push(t[e.data.value]),t[e.data.child]&&t[e.data.child].length&&t[e.data.child].forEach(c=>{e.data.checkId.push(c[e.data.value])})})}))}),e.getAll(e.data.list),e.data.checkId=[...new Set([...e.data.checkId])]},removeChildAll(l,u){l.forEach(a=>{if(a[e.data.value]===u[e.data.value]){let s=e.data.checkId.indexOf(a[e.data.value]);s!==-1&&e.data.checkId.splice(s,1),a[e.data.child]&&a[e.data.child].length&&a[e.data.child].forEach(t=>{let c=e.data.checkId.indexOf(t[e.data.value]);c!==-1&&e.data.checkId.splice(c,1),this.removeChildAll(a[e.data.child],t)})}a[e.data.child]&&a[e.data.child].length&&a[e.data.child].forEach(s=>{if(s[e.data.value]===u[e.data.value]){let t=e.data.checkId.indexOf(s[e.data.value]);t!==-1&&e.data.checkId.splice(t,1),this.removeChildAll(a[e.data.child],s)}else this.removeChildAll(a[e.data.child],u)})})},one(l){if(e.data.checkLevelOpen&&l.level&&l.level!==e.data.checkLevel)return!1;e.getNum(),e.data.single?e.data.checkId=[l[e.data.value]]:(e.data.checkId.includes(l[e.data.value])?this.removeChildAll(e.data.list,l):this.checkChildAll(e.data.list,l),e.getEE(e.data.list)),e.data.checkId=[...new Set([...e.data.checkId])],f("checkId",{name:e.data.name,checkId:e.data.checkId})},childOne(l){e.getNum(),e.data.single?e.data.checkId=l.checkId:(e.getAll(e.data.list),e.getEE(e.data.list)),e.data.checkId=[...new Set([...e.data.checkId])],f("checkId",{name:e.data.name,checkId:e.data.checkId})},getEE(l,u){l.forEach(a=>{a[e.data.child]&&a[e.data.child].forEach(s=>{e.data.checkId.includes(s[e.data.value])&&(e.data.checkId.includes(a[e.data.value])||e.data.checkId.push(a[e.data.value]),u&&e.data.checkId.push(u[e.data.value]),s[e.data.child]&&e.getEE(s[e.data.child],s))})})}});return T(i,()=>{e.data=i.data,e.getNum(),console.log(e.data.checkId.length,e.num)}),z(()=>{e.data=i.data,e.getNum()}),{state:e}}}),X={class:"Jointlevel flex-c"},Y={key:0},Z=["onClick"];function ee(i,f,e,l,u,a){const s=b("Jointlevel",!0);return k(),I("div",X,[!i.state.data.single&&!i.state.data.noAll?(k(),I("div",Y,[o("i",{class:C([i.state.data.checkId.length===i.state.num?"icon-circleyuanquan":"icon-circle2yuanquan","iconfont cursor"]),onClick:f[0]||(f[0]=t=>i.state.all())},"\u5168\u9009",2)])):B("",!0),o("div",{class:C(i.state.data.column?"flex column":"flex wrap child")},[(k(!0),I(D,null,G(i.state.data.list,t=>(k(),I("div",{class:C([t[i.state.data.child]&&t[i.state.data.child].length?"line":"","li"])},[o("i",{class:C([i.state.data.checkId.includes(t[i.state.data.value])?"icon-circleyuanquan":"icon-circle2yuanquan","iconfont cursor omit child-line"]),style:R(i.state.data.checkLevelOpen&&t.level&&t.level!==i.state.data.checkLevel?"color:#ccc;text-decoration: line-through;":""),onClick:c=>i.state.one(t)},$(t[i.state.data.key]),15,Z),t[i.state.data.child]?(k(),I("p",{key:0,class:C([i.state.data.column2?"flex column ":"flex wrap","childP"]),style:{"padding-left":"20px"}},[r(s,{data:{name:i.state.data.name,list:t[i.state.data.child],checkId:i.state.data.checkId,checkLevel:i.state.data.checkLevel,checkLevelOpen:i.state.data.checkLevelOpen,key:i.state.data.key,value:i.state.data.value,child:i.state.data.child,column:i.state.data.column2,column2:i.state.data.column2,single:i.state.data.single,noAll:i.state.data.noAll||!0},onCheckId:i.state.childOne},null,8,["data","onCheckId"])],2)):B("",!0)],2))),256))],2)])}var te=P(W,[["render",ee],["__scopeId","data-v-14262251"]]);const m=i=>(K("data-v-ec8f0f5e"),i=i(),Q(),i),ae={class:"role"},se={class:"col-4 card"},le={class:"h60 flex nowrap just-b align-c"},ne={class:"h100-60"},ie=m(()=>o("div",{class:"flex just-c align-c",style:{flex:"0 0 100px"}},"\u7F16\u8F91",-1)),oe={class:"flex",style:{flex:"0 0 100px"}},de={class:"cursor but text-color flex just-c",style:{width:"50%"}},ce=["onClick"],re={class:"cursor but text-color flex just-c",style:{width:"50%"}},he=m(()=>o("i",{class:"iconfont iconfontHover icon-shanchu_o",title:"\u5220\u9664"},null,-1)),ue={class:"col-8 card"},fe={class:"h60 flex nowrap just-b align-c"},me={class:"h100-60"},pe=m(()=>o("div",{class:"flex just-c align-c",style:{flex:"0 0 100px"}},"\u7F16\u8F91",-1)),ge={class:"flex",style:{flex:"0 0 100px"}},ve={class:"cursor but text-color flex just-c",style:{width:"50%"}},_e=["onClick"],ke={class:"cursor but text-color flex just-c",style:{width:"50%"}},Ie=m(()=>o("i",{class:"iconfont iconfontHover icon-shanchu_o",title:"\u5220\u9664"},null,-1)),ye={class:"select condition"},we=m(()=>o("label",{for:"name"},"\u89D2\u8272\u6743\u9650",-1)),Ce={class:"select condition"},Le=m(()=>o("label",{for:"name"},"\u7528\u6237\u7EC4\u540D",-1)),be=m(()=>o("label",{for:"name"},"\u7EC4\u7EC7\u63CF\u8FF0",-1)),Ae=m(()=>o("div",{class:"flex just-c align-c",style:{flex:"0 0 100px"}},"\u7F16\u8F91",-1)),Ee={class:"flex",style:{flex:"0 0 100px"}},xe={class:"cursor but text-color flex just-c",style:{width:"50%"}},$e=["onClick"],He={class:"cursor but text-color flex just-c",style:{width:"50%"}},Se=m(()=>o("i",{class:"iconfont iconfontHover icon-shanchu_o",title:"\u5220\u9664"},null,-1)),Be={setup(i){const f=A({show:!1,point:"0,0",backPoint(s){console.log(s,"\u70B9")}}),e=V(null),l=A({list:{name:"roleList",header:[{name:"\u89D2\u8272\u6743\u9650",width:"20%",key:"name",color:"#9495a9"},{name:"\u89D2\u8272\u7F16\u7801",width:"20%",key:"code",color:"#9495a9"}],rows:[],page:1,size:20,total:1,currentPage:1,active:0,select:{open:!1,selectAll:!1,id:"",selectId:[]}},menus:{name:"menus",list:[],checkId:[],key:"menu",value:"functionId",child:"child",column:!1,single:!1},async getList(s){s==="search"&&(this.list.page=1);let t=await g("/manage/rrole/sarole",{page:this.list.page,size:this.list.size});t.status&&(this.list.rows=t.data.data,this.list.total=t.data.total,console.log(this.list.rows,"this.list.rows"))},handleCurrentChange(s){l.list.select.selectId=[],l.list.select.selectAll=!1,l.list.page=s.page,l.getList(null)},form:{id:"",name:"",code:"",remark:"",menuIds:"",status:"0"},rules:{name:[{required:!0,validator:(s,t,c)=>{t===""?c(new Error("\u8BF7\u8F93\u5165\u8D26\u6237\u540D\uFF01")):c()},trigger:"blur"}]},isDisable:!1,info:{show:!1,name:"roleInfo",w:"40%",type:"add"},async getInfo(s){if(s){let t=await g("/manage/rrole/sfunc",{roleId:s.id});t.status&&(this.form=_.clone(s),t.data.sort((c,p)=>c.functionId-p.functionId),this.menus.list=t.data,this.menus.checkId=[],t.data.forEach(c=>{c.bind&&this.menus.checkId.push(c.functionId)}),this.info.type="edit",this.info.show=!0)}else{let t=await g("/manage/rrole/sfunc");t.status&&(t.data.sort((c,p)=>c.functionId-p.functionId),this.menus.list=t.data,this.menus.checkId=[],this.info.type="edit",this.info.show=!0),this.form={},this.menus.checkId=[],this.info.type="add",this.info.show=!0}},submit(){e.value.validate(async s=>{if(s)console.log("\u901A\u8FC7"),this.info.type==="add"?(await L("/manage/crole/arole",{name:this.form.name,functions:this.menus.checkId.toString()})).status&&(this.info.show=!1,this.info.type="add",this.getList(),v({duration:1e3,type:"success",message:"\u65B0\u589E\u6210\u529F"})):this.info.type==="edit"&&(await L("/manage/urole/mrole",{name:this.form.name,functions:this.menus.checkId.toString(),id:this.form.id})).status&&(this.info.show=!1,this.info.type="add",this.getList(),v({duration:1e3,type:"success",message:"\u4FEE\u6539\u6210\u529F"}));else return console.log("\u4E0D\u901A\u8FC7"),!1})},hide(){e.value.resetFields(),this.info.show=!1},async del(s){(await L("/manage/drole/drole",{roleId:s.id})).status&&(this.getList(),v({duration:1e3,type:"success",message:"\u5220\u9664\u6210\u529F"}))}}),u=V(null),a=A({list:{name:"roleList",header:[{name:"\u89D2\u8272\u6743\u9650",width:"20%",key:"name",color:"#9495a9"},{name:"\u89D2\u8272\u7F16\u7801",width:"20%",key:"code",color:"#9495a9"}],rows:[],page:1,size:1e7,total:1,currentPage:1,active:0,select:{open:!1,selectAll:!1,id:"",selectId:[]}},async getList(s){s==="search"&&(this.list.page=1);let t=await g("/manage/rrole/showUserGroup",{page:this.list.page,size:this.list.size});t.status&&(this.list.rows=t.group,this.list.total=t.group.length,console.log(this.list.rows,"this.list.rows"))},handleCurrentChange(s){a.list.select.selectId=[],a.list.select.selectAll=!1,a.list.page=s.page,a.getList(null)},form:{id:"",name:"",code:"",remark:"",menuIds:"",status:"0"},rules:{name:[{required:!0,validator:(s,t,c)=>{t===""?c(new Error("\u8BF7\u8F93\u5165\u8D26\u6237\u540D\uFF01")):c()},trigger:"blur"}]},isDisable:!1,info:{show:!1,name:"roleInfo",w:"40%",type:"add"},userList:[],async getInfo(s){if(s){let t=await g("/manage/rrole/notBindList");t.status&&(this.userList=t.user,this.form=_.clone(s),this.info.type="edit",this.info.show=!0)}else{let t=await g("/manage/rrole/notBindList");t.status&&(this.userList=t.user),this.form={},this.info.type="add",this.info.show=!0}},submit(){u.value.validate(async s=>{if(s){if(console.log("\u901A\u8FC7"),this.info.type==="add")(await L("/manage/crole/addGroups",{name:this.form.name,userid:this.form.user.toString(),description:this.form.description})).status&&(this.info.show=!1,this.info.type="add",this.getList());else if(this.info.type==="edit"){let t=await O("/users/user",this.form.userForm,!0);if(t.code===200)if(this.form.userForm.password){let c=await O("/users/user/resetPwd",this.form.userForm,!0);c.code===200&&(this.info.show=!1,this.info.type="add",this.getList(),v({duration:1e3,type:"success",message:c.msg}))}else this.info.show=!1,this.info.type="add",this.getList(),v({duration:1e3,type:"success",message:t.msg})}}else return console.log("\u4E0D\u901A\u8FC7"),!1})},hide(){e.value.resetFields(),this.info.show=!1},async del(s){let t=await L("manage/drole/deleteGroup",{ids:s.groupid});t.status&&(this.getList(),v({duration:1e3,type:"success",message:t.message}))}});return z(()=>{l.getList(null),a.getList(null)}),(s,t)=>{const c=F,p=b("el-popconfirm"),E=M,x=b("el-input"),y=b("el-form-item"),N=te,H=b("el-form"),S=U,q=J;return k(),I("div",ae,[o("div",se,[o("p",le,[o("span",{class:"select",onClick:t[0]||(t[0]=d=>n(l).getList())},"\u89D2\u8272"),r(c,{info:{id:3,name:n(l).list.active===0?"\u65B0\u589E\u89D2\u8272":"\u65B0\u589E\u7528\u6237\u7EC4",type:"add",class:"Btn",icon:"icon-RectangleCopy52",title:n(l).list.active===0?"\u65B0\u589E\u89D2\u8272":"\u65B0\u589E\u7528\u6237\u7EC4"},onHandleClick:t[1]||(t[1]=d=>n(l).getInfo(null))},null,8,["info"])]),o("div",ne,[r(E,{list:n(l).list,onHandleCurrentChange:n(l).handleCurrentChange},{rightTitle:h(({item:d})=>[ie]),rightBtn:h(({item:d})=>[o("div",oe,[o("div",de,[o("i",{class:"iconfont iconfontHover icon-bianji1",title:"\u7F16\u8F91",onClick:w=>n(l).getInfo(d)},null,8,ce)]),o("div",re,[r(p,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u5220\u9664\u5F53\u524D\u89D2\u8272?",onCancel:t[2]||(t[2]=()=>{}),onConfirm:w=>n(l).del(d)},{reference:h(()=>[he]),_:2},1032,["onConfirm"])])])]),_:1},8,["list","onHandleCurrentChange"])])]),o("div",ue,[o("p",fe,[o("span",{class:"select",onClick:t[3]||(t[3]=d=>n(a).getList())},"\u7528\u6237"),r(c,{info:{id:3,name:n(a).list.active===0?"\u65B0\u589E\u7528\u6237":"\u65B0\u589E\u7528\u6237\u7EC4",type:"add",class:"Btn",icon:"icon-RectangleCopy52",title:n(a).list.active===0?"\u65B0\u589E\u7528\u6237":"\u65B0\u589E\u7528\u6237\u7EC4"},onHandleClick:t[4]||(t[4]=d=>n(a).getInfo(null))},null,8,["info"])]),o("div",me,[r(E,{list:n(a).list,onHandleCurrentChange:n(a).handleCurrentChange},{rightTitle:h(({item:d})=>[pe]),rightBtn:h(({item:d})=>[o("div",ge,[o("div",ve,[o("i",{class:"iconfont iconfontHover icon-bianji1",title:"\u7F16\u8F91",onClick:w=>n(a).getInfo(d)},null,8,_e)]),o("div",ke,[r(p,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u5220\u9664\u5F53\u524D\u89D2\u8272?",onCancel:t[5]||(t[5]=()=>{}),onConfirm:w=>n(a).del(d)},{reference:h(()=>[Ie]),_:2},1032,["onConfirm"])])])]),_:1},8,["list","onHandleCurrentChange"])])]),r(S,{info:n(l).info,onHide:t[8]||(t[8]=d=>n(l).hide())},{title:h(()=>[o("span",ye,$(n(l).info.type==="add"?"\u65B0\u589E\u89D2\u8272":"\u4FEE\u6539\u89D2\u8272"),1)]),main:h(()=>[r(H,{ref_key:"formIns",ref:e,model:n(l).form,rules:n(l).rules,class:"formIns"},{default:h(()=>[r(y,{class:"label",prop:"name"},{default:h(()=>[we,r(x,{id:"name",modelValue:n(l).form.name,"onUpdate:modelValue":t[6]||(t[6]=d=>n(l).form.name=d),type:"input"},null,8,["modelValue"])]),_:1}),r(y,{class:"label padding-10",prop:"data"},{default:h(()=>[r(N,{data:n(l).menus},null,8,["data"])]),_:1})]),_:1},8,["model","rules"])]),page:h(()=>[o("span",{class:"confirm_btn cursor",onClick:t[7]||(t[7]=d=>n(l).submit())},"\u786E\u5B9A")]),_:1},8,["info"]),r(S,{info:n(a).info,onHide:t[13]||(t[13]=d=>n(a).hide())},{title:h(()=>[o("span",Ce,$(n(a).info.type==="add"?"\u65B0\u589E\u7528\u6237":"\u4FEE\u6539\u7528\u6237"),1)]),main:h(()=>[r(H,{ref_key:"formIns2",ref:u,model:n(a).form,rules:n(a).rules,class:"formIns flex column",style:{height:"calc(100vh - 160px)"}},{default:h(()=>[r(y,{class:"label",prop:"name"},{default:h(()=>[Le,r(x,{id:"name",modelValue:n(a).form.name,"onUpdate:modelValue":t[9]||(t[9]=d=>n(a).form.name=d),type:"input"},null,8,["modelValue"])]),_:1}),r(y,{class:"label",prop:"description"},{default:h(()=>[be,r(x,{id:"name",modelValue:n(a).form.description,"onUpdate:modelValue":t[10]||(t[10]=d=>n(a).form.description=d),type:"input"},null,8,["modelValue"])]),_:1}),r(y,{prop:"user",class:"col-auto"},{default:h(()=>[r(E,{list:{name:"roleList",header:[{name:"\u89D2\u8272\u6743\u9650",width:"20%",key:""},{name:"\u89D2\u8272\u7F16\u7801",width:"20%",key:""}],rows:n(a).form.groupUsers||[],page:1,size:1e7,total:1,currentPage:1,active:0,select:{open:!1,selectAll:!1,id:"",selectId:[]}},onHandleCurrentChange:n(a).handleCurrentChange},{rightTitle:h(({item:d})=>[Ae]),rightBtn:h(({item:d})=>[o("div",Ee,[o("div",xe,[o("i",{class:"iconfont iconfontHover icon-bianji1",title:"\u7F16\u8F91",onClick:w=>n(a).getInfo(d)},null,8,$e)]),o("div",He,[r(p,{title:"\u60A8\u662F\u5426\u786E\u5B9A\u5220\u9664\u5F53\u524D\u89D2\u8272?",onCancel:t[11]||(t[11]=()=>{}),onConfirm:w=>n(a).del(d)},{reference:h(()=>[Se]),_:2},1032,["onConfirm"])])])]),_:1},8,["list","onHandleCurrentChange"])]),_:1})]),_:1},8,["model","rules"])]),page:h(()=>[o("span",{class:"confirm_btn cursor",onClick:t[12]||(t[12]=d=>n(a).submit())},"\u786E\u5B9A")]),_:1},8,["info"]),r(q,{data:{show:n(f).show,point:n(f).point},onBackPoint:n(f).backPoint},null,8,["data","onBackPoint"])])}}};var rt=P(Be,[["__scopeId","data-v-ec8f0f5e"]]);export{rt as default};
