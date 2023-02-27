(function(){"use strict";var e={6984:function(e,t,n){var r=n(9242),o=n(3396);const a=(0,o._)("nav",null,null,-1);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o.Wm)(n)],64)}var l=n(89);const u={},c=(0,l.Z)(u,[["render",i]]);var s=c,d=n(2483);const p=e=>((0,o.dD)("data-v-4cf3b3d5"),e=e(),(0,o.Cn)(),e),f={class:"home"},m=p((()=>(0,o._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,o._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1))),b={class:"d-flex flex-column justify-content-start mb-4"},v={class:"d-flex justify-content-start"},g={class:"d-flex flex-column mb-2"},y=p((()=>(0,o._)("label",{for:"input",class:"fw-semibold m-1"},"Ticket",-1))),h={class:"d-flex justify-content-start align-items-center"},k=p((()=>(0,o._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1))),_=p((()=>(0,o._)("span",{class:"fw-semibold p-2"}," Add ",-1))),w=p((()=>(0,o._)("hr",{class:"m-4"},null,-1))),x={class:"d-flex justify-content-between align-items-center"},j=p((()=>(0,o._)("hr",{class:"m-3"},null,-1)));function A(e,t,n,a,i,l){const u=(0,o.up)("InputApp"),c=(0,o.up)("ButtonsApp"),s=(0,o.up)("TicketApp");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",null,[m,(0,o._)("div",b,[(0,o._)("div",v,[(0,o._)("div",g,[(0,o.Wm)(u,{type:"text",id:"input",name:"entry",placeholder:"Example: DOGE",modelValue:i.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>i.ticker=e),modelModifiers:{trim:!0},onKeydown:(0,r.D2)(l.add,["enter"]),class:"home__input border border-success border-opacity-50 rounded mb-3"},{default:(0,o.w5)((()=>[y])),_:1},8,["modelValue","onKeydown"])])]),(0,o._)("div",h,[(0,o.Wm)(c,{size:"md",class:"home__btn rounded-pill",onClick:l.add},{default:(0,o.w5)((()=>[k,_])),_:1},8,["onClick"])])])]),(0,o._)("div",null,[w,(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.tickers,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e,class:"p-5 pb-3 m-4 home__ticket"})))),128))]),j])])}n(7658);var T=n(7139);const O={class:"d-flex flex-column"},C=["type","placeholder","id","name","disabled","value"];function S(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o.WI)(e.$slots,"default"),(0,o._)("input",{type:n.type,class:(0,T.C_)(["m-2 p-2",n.class]),placeholder:n.placeholder,id:n.id,name:n.name,disabled:n.disabled,value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e))},null,42,C)])}var V={name:"InputApp",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const I=(0,l.Z)(V,[["render",S]]);var D=I;function E(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,T.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,o.WI)(e.$slots,"default")],2)}var W={name:"ButtonsApp",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const B=(0,l.Z)(W,[["render",E]]);var P=B;const F=e=>((0,o.dD)("data-v-18817397"),e=e(),(0,o.Cn)(),e),$=["tickers"],M=F((()=>(0,o._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),Z=F((()=>(0,o._)("span",{class:"p-1"},"Delete",-1)));function z(e,t,n,r,a,i){const l=(0,o.up)("InputApp"),u=(0,o.up)("ButtonsApp");return(0,o.wg)(),(0,o.iD)("div",{class:"ticket d-flex flex-column justify-content-center",tickers:n.tickers},[(0,o.Wm)(l,{class:"border border-0 bg-transparent",type:"text",modelValue:a.nameTicker,"onUpdate:modelValue":t[0]||(t[0]=e=>a.nameTicker=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(l,{class:"border border-0 bg-transparent",type:"number",modelValue:a.rate,"onUpdate:modelValue":t[1]||(t[1]=e=>a.rate=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(u,{color:"white ticket__btn"},{default:(0,o.w5)((()=>[M,Z])),_:1})],8,$)}var H={name:"TicketApp",components:{ButtonsApp:P,InputApp:D},props:{tickers:{type:Array,default:()=>[]}},data(){return{nameTicker:"",rate:""}}};const K=(0,l.Z)(H,[["render",z],["__scopeId","data-v-18817397"]]);var N=K,U={name:"HomeView",components:{InputApp:D,ButtonsApp:P,TicketApp:N},data(){return{ticker:"",tickers:["1","2","3"]}},methods:{add(){this.tickers.push(this.ticker),console.log(this.tickers),this.ticker=""}}};const L=(0,l.Z)(U,[["render",A],["__scopeId","data-v-4cf3b3d5"]]);var Y=L;const q=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],G=(0,d.p7)({history:(0,d.PO)("/TicketsCrypto/"),routes:q});var J=G,Q=n(65),R=(0,Q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(s).use(R).use(J).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.f20a0e13.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var l,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TicketsCrypto/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6984)}));r=n.O(r)})();
//# sourceMappingURL=app.01bfb09b.js.map