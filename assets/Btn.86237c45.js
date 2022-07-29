import{e as M,V as m,f as k,v as S,x as B,o as b,c as g,a as r,G as f,H as I,ab as z,Q as O,ap as T,aq as D,d as j,R as A,K as u}from"./@vue.807b2975.js";import{_}from"./index.9b1c8a61.js";const R={name:"Point",props:{data:{type:Object,default(){return{show:!0,point:"104.044894,30.584891",type:"",line:""}}}},setup(a,{emit:o}){let l=null,n=null;const c=M(null),t=m({dark:JSON.parse(sessionStorage.getItem("dark")),mapType:0,mapStyle:["amap://styles/light","amap://styles/grey","amap://styles/darkblue"],mapIns:null,marker:null,point:a.data.point,oldPoint:a.data.point,show:a.data.show,setMapType(){t.dark=JSON.parse(sessionStorage.getItem("dark")),t.mapType=t.dark==="dark"?1:t.dark==="light"?0:1,l.setMapStyle(t.mapStyle[t.mapType])},boundary:[],polyline:null,type:""}),s=()=>{t.mapType=t.dark==="dark"?1:t.dark==="light"?0:1,l=new AMap.Map(c.value,{resizeEnable:!0,zoom:11,center:[104.06,30.5642],isHotspot:!1,mapStyle:t.mapStyle[t.mapType]}),l.setDefaultCursor("crosshair"),l.on("complete",()=>{h()}),l.on("click",e=>{t.type?$(".drawBtn").text()==="\u9009\u62E9\u4E2D\u5FC3\u70B9"&&(p(e),$(".drawBtn").text("\u91CD\u65B0\u7ED8\u5236")):p(e)})},h=()=>{t.marker=new AMap.MassMarks([],{opacity:1,zIndex:999,cursor:"pointer",style:{url:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",anchor:new AMap.Pixel(10,30),size:new AMap.Size(20,30)}}),t.marker.setMap(l)},p=e=>{let i=[];typeof e=="string"?(i=[{lng:e.split(",")[0],lat:e.split(",")[1],lnglat:{lng:e.split(",")[0],lat:e.split(",")[1],Q:e.split(",")[1],R:e.split(",")[0]}}],t.point=e):(i=[{lng:e.lnglat.lng,lat:e.lnglat.lat,lnglat:{lng:e.lnglat.lng,lat:e.lnglat.lat,Q:e.lnglat.lat,R:e.lnglat.lng}}],t.point=`${e.lnglat.lng},${e.lnglat.lat}`),t.marker?t.marker.setData(i):l.on("complete",()=>{t.marker.setData(i)})},w=e=>{e&&(t.polyline&&l.remove(t.polyline),t.boundary=[],e.split(";").forEach(y=>{y&&t.boundary.push([y.split(",")[0],y.split(",")[1]])}),t.polyline=new AMap.Polygon({path:t.boundary,fillColor:"#ccebc5",strokeOpacity:1,fillOpacity:.5,strokeColor:"#2b8cbe",strokeWeight:1,strokeStyle:"dashed",strokeDasharray:[5,5],zIndex:-1,bubble:!0}),l.add(t.polyline),l.setFitView([t.polyline]))},C=()=>{if($(".drawBtn").text("\u70B9\u51FB\u7ED8\u5236"),d(),t.type){let e="";t.boundary.forEach(i=>{e+=i.R+","+i.Q+";"}),o("backPoint",{point:t.point,boundary:e})}else o("backPoint",t.point)},v=()=>{t.type?o("backPoint",{point:t.oldPoint,boundary:t.oldBoundary}):o("backPoint",t.oldPoint),d()},P=e=>{if(d(),p("0, 0"),$(".drawBtn").text()==="\u91CD\u65B0\u7ED8\u5236")$(".drawBtn").text("\u5F00\u59CB\u7ED8\u5236");else{if($(".drawBtn").text()==="\u9009\u62E9\u4E2D\u5FC3\u70B9")return!1;$(".drawBtn").text()==="\u70B9\u51FB\u7ED8\u5236"&&$(".drawBtn").text("\u5F00\u59CB\u7ED8\u5236")}switch(x(),e){case"marker":{n.marker({opacity:1,zIndex:999,cursor:"pointer",style:{url:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",anchor:new AMap.Pixel(10,30),size:new AMap.Size(20,30)}});break}case"polyline":{n.polyline({fillColor:"#ccebc5",strokeOpacity:1,fillOpacity:.5,strokeColor:"#2b8cbe",strokeWeight:1,strokeStyle:"dashed",strokeDasharray:[5,5],zIndex:-1,bubble:!0});break}case"polygon":{n.polygon({fillColor:"#ccebc5",strokeOpacity:1,fillOpacity:.5,strokeColor:"#2b8cbe",strokeWeight:1,strokeStyle:"dashed",strokeDasharray:[5,5],zIndex:-1,bubble:!0});break}case"rectangle":{n.rectangle({fillColor:"#ccebc5",strokeOpacity:1,fillOpacity:.5,strokeColor:"#2b8cbe",strokeWeight:1,strokeStyle:"dashed",strokeDasharray:[5,5],zIndex:-1,bubble:!0});break}case"circle":{n.circle({fillColor:"#00b0ff",strokeColor:"#80d8ff"});break}}},x=()=>{n=new AMap.MouseTool(l);let e=[];n.on("draw",i=>{e.push(i.obj),t.boundary=i.obj.getPath(),n.close(),$(".drawBtn").text("\u9009\u62E9\u4E2D\u5FC3\u70B9")}),l.add(e)},d=()=>{n&&n.close(!0),t.polyline&&t.polyline.hide()};return k(a,()=>{t.oldPoint=a.data.point,t.oldBoundary=a.data.line,t.type=a.data.type,a.data.show?($(".PointComponent").fadeIn(200),p(a.data.point),t.setMapType()):$(".PointComponent").fadeOut(200)}),S(()=>{s()}),B(()=>{l.destroy()}),{mapPoint:c,state:t,confirm:C,cancel:v,draw:P,drawLine:w}}},E=a=>(T("data-v-fce4b1b4"),a=a(),D(),a),Q={ref:"mapPoint",class:"mapPoint"},V={class:"flex align-c just-e"},W=E(()=>r("span",{class:"card_text"},"\u7ECF\u7EAC\u5EA6:",-1));function N(a,o,l,n,c,t){return b(),g("div",{class:"PointComponent",onClick:o[5]||(o[5]=O(()=>{},["stop"]))},[r("div",Q,null,512),r("p",V,[f(r("button",{class:"cursor fl drawBtn",onClick:o[0]||(o[0]=s=>n.draw(n.state.type))},"\u70B9\u51FB\u7ED8\u5236",512),[[I,n.state.type]]),W,f(r("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>n.state.point=s),class:"fl",placeholder:"\u8BF7\u9009\u62E9\u5730\u56FE\u70B9\u4F4D...",type:"text"},null,512),[[z,n.state.point]]),r("button",{class:"cursor fl",style:{background:"#cccccc"},onClick:o[2]||(o[2]=(...s)=>n.cancel&&n.cancel(...s))},"\u53D6\u6D88"),r("button",{class:"cursor fl",onClick:o[3]||(o[3]=(...s)=>n.confirm&&n.confirm(...s))},"\u786E\u8BA4")]),r("i",{class:"iconfont icon-RectangleCopy22 hide",onClick:o[4]||(o[4]=(...s)=>n.cancel&&n.cancel(...s))})])}var K=_(R,[["render",N],["__scopeId","data-v-fce4b1b4"]]);const H=j({name:"Btn",props:{info:{type:Object,default:()=>({id:1,name:"\u9ED8\u8BA4\u6309\u94AE",type:"add",class:"Btn",icon:"",title:""})}},setup(a,{emit:o}){const l=m({list:[1,2,3],info:a.info,handleClick(n){if(!l.list.includes(l.info.id)){$(n.target).addClass("animate__animated animate__jello"),setTimeout(()=>{$(n.target).removeClass("animate__animated animate__jello")},500);return}o("handleClick",l.info)}});return k(a,()=>{l.info=a.info}),{state:l}}}),J=["title"],U={class:"omit"};function q(a,o,l,n,c,t){return b(),g("span",{class:u([a.state.info.class,a.state.list.includes(a.state.info.id)?"":"disable","flex just-c align-c cursor nowrap"]),title:a.state.info.title,onClick:o[0]||(o[0]=(...s)=>a.state.handleClick&&a.state.handleClick(...s))},[r("em",U,A(a.state.info.name),1),r("i",{class:u([a.state.info.icon,"iconfont"])},null,2)],10,J)}var L=_(H,[["render",q],["__scopeId","data-v-737a081b"]]);export{L as _,K as a};
