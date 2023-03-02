(function(){"use strict";var e={9948:function(e,t,n){var r=n(9242),o=n(3396);const a=(0,o._)("nav",null,null,-1);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[a,(0,o.Wm)(n)])}var l=n(89);const c={},s=(0,l.Z)(c,[["render",i]]);var u=s,d=n(2483),p=n(7139);const m=e=>((0,o.dD)("data-v-6dde82e3"),e=e(),(0,o.Cn)(),e),f={class:"home"},v=m((()=>(0,o._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,o._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1))),b={class:"d-flex flex-column justify-content-start mb-4"},g={class:"d-flex justify-content-start"},h={class:"d-flex flex-column mb-2"},y=m((()=>(0,o._)("label",{for:"input",class:"fw-semibold m-1"},"Ticket",-1))),k={class:"d-flex justify-content-start align-items-center"},_=m((()=>(0,o._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1))),w=m((()=>(0,o._)("span",{class:"fw-semibold p-2"}," Add ",-1))),x=m((()=>(0,o._)("hr",{class:"m-4"},null,-1))),D={class:"d-flex align-items-center flex-wrap justify-content-center"},C=m((()=>(0,o._)("hr",{class:"m-3"},null,-1))),j={key:0};function S(e,t,n,a,i,l){const c=(0,o.up)("InputApp"),s=(0,o.up)("ButtonsApp"),u=(0,o.up)("TicketApp"),d=(0,o.up)("DropdownBox");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",null,[v,(0,o._)("div",b,[(0,o._)("div",g,[(0,o._)("div",h,[(0,o.Wm)(c,{type:"text",id:"input",name:"entry",placeholder:"Example: DOGE",modelValue:i.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>i.ticker=e),modelModifiers:{trim:!0},onKeydown:(0,r.D2)(l.add,["enter"]),class:"home__input border border-success border-opacity-50 rounded mb-3"},{default:(0,o.w5)((()=>[y])),_:1},8,["modelValue","onKeydown"])])]),(0,o._)("div",k,[(0,o.Wm)(s,{size:"md",class:"home__btn rounded-pill",onClick:l.add},{default:(0,o.w5)((()=>[_,w])),_:1},8,["onClick"])])])]),i.tickers.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[x,(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.tickers,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e,t:e,class:(0,p.C_)([{active:i.currentStateTicker===e},"p-5 pb-3 m-4 home__ticket"]),onHandleDelete:t=>l.handleDelete(e),onClick:(0,r.iM)((t=>i.currentStateTicker=e),["prevent","stop"])},null,8,["t","class","onHandleDelete","onClick"])))),128))]),C,i.currentStateTicker?((0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(d,{onClose:t[1]||(t[1]=e=>i.currentStateTicker=null),currentStateTicker:i.currentStateTicker},null,8,["currentStateTicker"])])):(0,o.kq)("",!0)],64)):(0,o.kq)("",!0)])}n(7658);const T={class:"d-flex flex-column"},O=["type","placeholder","id","name","disabled","value"];function A(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o.WI)(e.$slots,"default"),(0,o._)("input",{type:n.type,class:(0,p.C_)(["m-2 p-2",n.class]),placeholder:n.placeholder,id:n.id,name:n.name,disabled:n.disabled,value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e))},null,42,O)])}var I={name:"InputApp",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const E=(0,l.Z)(I,[["render",A]]);var V=E;function B(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,p.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,o.WI)(e.$slots,"default")],2)}var M={name:"ButtonsApp",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const W=(0,l.Z)(M,[["render",B]]);var $=W;const P=e=>((0,o.dD)("data-v-142af76c"),e=e(),(0,o.Cn)(),e),Z={class:"ticket d-flex flex-column justify-content-center"},F=P((()=>(0,o._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),H=P((()=>(0,o._)("span",{class:"p-1"},"Delete",-1)));function z(e,t,n,r,a,i){const l=(0,o.up)("InputApp"),c=(0,o.up)("ButtonsApp");return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o.Wm)(l,{class:"border border-0 bg-transparent text-center mb-3",type:"text",modelValue:n.t.name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.t.name=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(l,{class:"border border-0 bg-transparent text-center mb-3 dt lh-lg",type:"number",modelValue:n.t.price,"onUpdate:modelValue":t[1]||(t[1]=e=>n.t.price=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(c,{color:"white ticket__btn",onClick:t[2]||(t[2]=t=>e.$emit("handleDelete"))},{default:(0,o.w5)((()=>[F,H])),_:1})])}var K={name:"TicketApp",components:{ButtonsApp:$,InputApp:V},props:{t:{type:Object}},data(){return{}},emits:["handleDelete"]};const N=(0,l.Z)(K,[["render",z],["__scopeId","data-v-142af76c"]]);var q=N;const U=e=>((0,o.dD)("data-v-00ec3f99"),e=e(),(0,o.Cn)(),e),Y={class:"my-5 dropdown"},L={class:"d-flex justify-content-between align-items-center mb-2"},G={class:"p-2"},J=U((()=>(0,o._)("img",{class:"dropdown__btn-image",src:"https://img.icons8.com/sf-ultralight/512/close-window.png"},null,-1))),Q={class:"dropdown__box d-flex justify-content-start align-items-end"};function R(e,t,n,r,a,i){const l=(0,o.up)("ButtonsApp"),c=(0,o.up)("ChartColumn");return(0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("div",L,[(0,o._)("h5",G,(0,p.zw)(n.currentStateTicker.name),1),(0,o.Wm)(l,{size:"md",class:"bg-transparent border border-0",onClick:t[0]||(t[0]=t=>e.$emit("close"))},{default:(0,o.w5)((()=>[J])),_:1})]),(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.percents,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e,percent:e,style:(0,p.j5)({height:`${e}%`})},null,8,["percent","style"])))),128))])])}function X(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",{class:"chart__strip ms-2",style:(0,p.j5)(n.style)},null,4)}var ee={name:"ChartColumn",props:{percent:{type:Number},style:{type:Object}}};const te=(0,l.Z)(ee,[["render",X],["__scopeId","data-v-7815ee60"]]);var ne=te,re={name:"DropdownBox",components:{ButtonsApp:$,ChartColumn:ne},props:{currentStateTicker:{type:Object}},data(){return{percents:Array(100).fill().map(((e,t)=>t+1))}},emits:["close"]};const oe=(0,l.Z)(re,[["render",R],["__scopeId","data-v-00ec3f99"]]);var ae=oe,ie={name:"HomeView",components:{InputApp:V,ButtonsApp:$,TicketApp:q,DropdownBox:ae},data(){return{ticker:"",tickers:[{name:"DEMO1",price:"89"},{name:"DEMO2",price:"-"},{name:"DEMO3",price:"-"},{name:"DEMO4",price:"-"}],currentStateTicker:null}},methods:{add(){const e={name:this.ticker,price:" - "};this.tickers.push(e),this.ticker="",console.log(this.tickers)},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.currentStateTicker=null}}};const le=(0,l.Z)(ie,[["render",S],["__scopeId","data-v-6dde82e3"]]);var ce=le;const se=[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],ue=(0,d.p7)({history:(0,d.PO)("/TicketsCrypto/"),routes:se});var de=ue,pe=n(65),me=(0,pe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(u).use(me).use(de).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.9696a2fb.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TicketsCrypto/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var u=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9948)}));r=n.O(r)})();
//# sourceMappingURL=app.9a57509a.js.map