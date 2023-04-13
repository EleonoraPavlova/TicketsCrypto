(function(){"use strict";var e={9371:function(e,t,n){var i=n(9242),r=n(3396);function s(e,t,n,i,s,o){const c=(0,r.up)("HomeView");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c)])}var o=n(7139);const c={class:"home"},a=(0,r._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,r._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1),l={class:"d-flex flex-column justify-content-start"},d={class:"d-flex justify-content-start"},u={class:"d-flex flex-column mb-2"},p=(0,r._)("label",{for:"input",class:"fw-semibold m-1"},"Ticket",-1),m={key:1,class:"mb-3 d-flex justify-content-start align-items-center m-1"},h=["onClick"],f={class:"home__hints bg-secondary bg-gradient p-1 text-white fw-lighter lh-1 font-size-small"},k={class:"d-flex justify-content-start align-items-center"},g=(0,r._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1),y=(0,r._)("span",{class:"fw-semibold p-2 text-white"}," Add ",-1),b={class:"d-flex align-items-center justify-content-end"},v={class:"d-flex align-items-center"},_=(0,r._)("p",{class:"m-2"},"Filter:",-1),w=(0,r._)("hr",{class:"m-3"},null,-1),x={class:"d-flex align-items-center flex-wrap justify-content-center"},C=(0,r._)("hr",{class:"m-3"},null,-1),T={key:2},S={key:1},I=(0,r._)("h6",{class:"fw-semibold home__h6"},"You have not added any tickers yet",-1),D=[I];function j(e,t,n,s,I,j){const A=(0,r.up)("InputApp"),O=(0,r.up)("NoticeApp"),N=(0,r.up)("ButtonsApp"),E=(0,r.up)("TicketApp"),U=(0,r.up)("DropdownBox");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",null,[a,(0,r._)("div",l,[(0,r._)("div",d,[(0,r._)("div",u,[(0,r.Wm)(A,{type:"text",id:"input",name:"entry",placeholder:I.placeholder,modelValue:I.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>I.ticker=e),modelModifiers:{trim:!0},onKeydown:t[1]||(t[1]=(0,i.D2)((t=>j.add(e.index)),["enter"])),class:(0,o.C_)(["home__input border border-success border-opacity-50 rounded",{error:I.hasError}])},{default:(0,r.w5)((()=>[p])),_:1},8,["placeholder","modelValue","class"]),I.isNoNameInCoins?((0,r.wg)(),(0,r.j4)(O,{key:0,class:"color-base"},{default:(0,r.w5)((()=>[(0,r.Uk)("Name of such ticker not found")])),_:1})):(0,r.kq)("",!0),0!=I.ticker.length?((0,r.wg)(),(0,r.iD)("div",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(I.fourCoins,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"mx-1",onClick:t=>j.addLabel(e)},[(0,r._)("div",f,(0,o.zw)(e),1)],8,h)))),128))])):(0,r.kq)("",!0),I.isAddedTicker?((0,r.wg)(),(0,r.j4)(O,{key:2,class:"text-danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("This ticker has already been added")])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",k,[(0,r.Wm)(N,{size:"md",class:"home__btn rounded-pill",onClick:j.add},{default:(0,r.w5)((()=>[g,y])),_:1},8,["onClick"])])])]),I.tickers.length?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",b,[(0,r._)("div",v,[_,(0,r.Wm)(A,{modelValue:I.filter,"onUpdate:modelValue":t[2]||(t[2]=e=>I.filter=e),modelModifiers:{trim:!0},class:"home__filter-input rounded"},null,8,["modelValue"])]),(0,r._)("div",null,[(0,r.Wm)(N,{size:"xs",class:"home__filter-btn fontsizeSmall",onClick:j.prevPage,disabled:1===I.page},{default:(0,r.w5)((()=>[(0,r.Uk)(" Prev ")])),_:1},8,["onClick","disabled"]),(0,r.Wm)(N,{size:"xs",class:"home__filter-btn fontsizeSmall ml-2",onClick:j.nextPage,disabled:I.page*I.limit>j.filteredTickers.length||j.filteredTickers.length===I.limit},{default:(0,r.w5)((()=>[(0,r.Uk)(" Next ")])),_:1},8,["onClick","disabled"])])]),w,(0,r._)("div",x,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(j.splicedTickers,(n=>((0,r.wg)(),(0,r.j4)(E,{key:n.name,t:n,class:(0,o.C_)([{active:I.currentTicker===n},"p-5 pb-3 m-4 home__ticket"]),onHandleDelete:e=>j.handleDelete(n),onClick:t[3]||(t[3]=(0,i.iM)((t=>j.select(e.index)),["self"]))},null,8,["t","class","onHandleDelete"])))),128))]),I.noUpdates?((0,r.wg)(),(0,r.j4)(O,{key:0,class:"fw-semibold text-danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("No updates for this ticket")])),_:1})):(0,r.kq)("",!0),j.filteredTickers.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(O,{key:1,class:"fw-semibold home__h6"},{default:(0,r.w5)((()=>[(0,r.Uk)("Tickers on this filter were not found")])),_:1})),C,I.tickers[I.currentTickerIndex]?((0,r.wg)(),(0,r.iD)("div",T,[(0,r.Wm)(U,{onClose:t[4]||(t[4]=e=>I.currentTickerIndex=null),currentTickerIndex:I.currentTickerIndex,tickers:I.tickers,percents:I.tickers[I.currentTickerIndex].percents},null,8,["currentTickerIndex","tickers","percents"])])):(0,r.kq)("",!0)],64)):I.isShow?((0,r.wg)(),(0,r.iD)("div",S,D)):(0,r.kq)("",!0)])}n(7658);const A={class:"d-flex flex-column"},O=["type","placeholder","id","name","disabled","value"];function N(e,t,n,i,s,c){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r.WI)(e.$slots,"default"),(0,r._)("input",{type:n.type,class:(0,o.C_)(["m-2 p-2",n.class]),placeholder:n.placeholder,id:n.id,name:n.name,disabled:n.disabled,value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>c.updateInput&&c.updateInput(...e))},null,42,O)])}var E={name:"InputApp",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}},U=n(89);const $=(0,U.Z)(E,[["render",N]]);var P=$;function W(e,t,n,i,s,c){return(0,r.wg)(),(0,r.iD)("button",{class:(0,o.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click",t))},[(0,r.WI)(e.$slots,"default")],2)}var q={name:"ButtonsApp",props:{color:{type:String,default:"main-color-purple"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const z=(0,U.Z)(q,[["render",W]]);var B=z;const V=e=>((0,r.dD)("data-v-213806ba"),e=e(),(0,r.Cn)(),e),M={class:"ticket d-flex flex-column justify-content-center"},F={class:"border border-0 bg-transparent text-center mb-3",type:"text"},H={class:"border border-0 bg-transparent text-center mb-3 fs-2",type:"number"},L=V((()=>(0,r._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),Z=V((()=>(0,r._)("span",{class:"p-1"},"Delete",-1)));function Y(e,t,n,i,s,c){const a=(0,r.up)("ButtonsApp");return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",F,(0,o.zw)(n.t.name+" -  USD"),1),(0,r._)("div",H,(0,o.zw)(n.t.price),1),(0,r.Wm)(a,{color:"white ticket__btn",onClick:t[0]||(t[0]=t=>e.$emit("handleDelete"))},{default:(0,r.w5)((()=>[L,Z])),_:1})])}var G={name:"TicketApp",components:{ButtonsApp:B},props:{t:{type:Object}},data(){return{}},emits:["handleDelete"]};const J=(0,U.Z)(G,[["render",Y],["__scopeId","data-v-213806ba"]]);var K=J;const R=e=>((0,r.dD)("data-v-17eb518a"),e=e(),(0,r.Cn)(),e),Q={class:"my-5 dropdown"},X={class:"d-flex justify-content-between align-items-center mb-2"},ee={class:"p-2"},te=R((()=>(0,r._)("img",{class:"dropdown__btn-image",src:"https://img.icons8.com/sf-ultralight/512/close-window.png"},null,-1))),ne={class:"dropdown__box d-flex justify-content-start align-items-end"};function ie(e,t,n,i,s,c){const a=(0,r.up)("ButtonsApp"),l=(0,r.up)("ChartColumn");return(0,r.wg)(),(0,r.iD)("div",Q,[(0,r._)("div",X,[(0,r._)("h5",ee,(0,o.zw)(n.tickers[n.currentTickerIndex].name+" -  USD"),1),(0,r.Wm)(a,{size:"md",class:"bg-transparent border border-0",onClick:t[0]||(t[0]=t=>e.$emit("close"))},{default:(0,r.w5)((()=>[te])),_:1})]),(0,r._)("div",ne,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.calcPercents,((e,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t,style:(0,o.j5)({height:`${e}%`})},null,8,["style"])))),128))])])}function re(e,t,n,i,s,c){return(0,r.wg)(),(0,r.iD)("div",{class:"chart__strip ms-2 rounded",style:(0,o.j5)(n.style)},null,4)}var se={name:"ChartColumn",props:{percent:{type:Number},style:{type:Object}}};const oe=(0,U.Z)(se,[["render",re],["__scopeId","data-v-066616c4"]]);var ce=oe,ae={name:"DropdownBox",components:{ButtonsApp:B,ChartColumn:ce},props:{currentTickerIndex:{type:null},tickers:{type:Array,default:()=>[]},percents:{type:Array,default:()=>[]}},computed:{calcPercents(){const e=Math.min(...this.percents),t=Math.max(...this.percents);return t===e?this.percents.map((()=>50)):this.percents.map((e=>5+e/t*95))}},emits:["close"]};const le=(0,U.Z)(ae,[["render",ie],["__scopeId","data-v-17eb518a"]]);var de=le;function ue(e,t,n,i,s,c){return(0,r.wg)(),(0,r.iD)("p",{class:(0,o.C_)(n.class)},[(0,r.WI)(e.$slots,"default")],2)}var pe={name:"NoticeApp",props:{class:{type:String}}};const me=(0,U.Z)(pe,[["render",ue]]);var he=me;const fe="27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a",ke=()=>fetch(`https://min-api.cryptocompare.com/data/blockchain/list?&api_key=${fe}`).then((e=>e.json())),ge="27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a",ye=new Map,be=new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${ge}`),ve="5";function _e(e){const t=JSON.stringify(e);be.readyState!==WebSocket.OPEN?be.addEventListener("open",(()=>{be.send(t)}),{once:!0}):be.send(t)}function we(e){_e({action:"SubAdd",subs:[`5~CCCAGG~${e}~USD`]})}function xe(e){_e({action:"SubRemove",subs:[`5~CCCAGG~${e}~USD`]})}be.addEventListener("message",(e=>{const{TYPE:t,FROMSYMBOL:n,PRICE:i}=JSON.parse(e.data);if(t!==ve||void 0===i)return;const r=ye.get(n)??[];r.forEach((e=>e(i)))}));const Ce=(e,t)=>{const n=ye.get(e)||[];ye.set(e,[...n,t]),we(e)},Te=e=>{ye.delete(e),xe(e)},Se=e=>"-"===e?e:e>1?e.toFixed(2):e.toPrecision(2);var Ie={name:"HomeView",components:{InputApp:P,ButtonsApp:B,TicketApp:K,DropdownBox:de,NoticeApp:he},data(){return{placeholder:"Example: DOGE",ticker:"",tickers:[],coin:"",coins:[],fourCoin:"",fourCoins:[],hasError:!1,percents:[],isAddedTicker:!1,isNoNameInCoins:!1,isShow:!1,noUpdates:!1,fetchInterval:null,currentTickerIndex:null,currentTicker:{},page:this.$route.query.page||1,limit:8,filter:this.$route.query.filter||""}},created(){this.getCoinList();let e=localStorage.getItem("cryptomicon-list");e=JSON.parse(e),null!=e&&(this.tickers=e.map((e=>({name:e,price:"-",percents:[]}))),this.tickers.forEach((e=>{Ce(e.name,(t=>{console.log(e.name,t),e.price=Se(t),e.percents.push(t)}))})))},methods:{add(){if(this.tickers.find((e=>e.name===this.ticker.toUpperCase())))this.isAddedTicker=!0;else{if(null===this.ticker||this.ticker.length<1)return this.ticker="",this.placeholder="Enter valid value",void(this.hasError=!0);this.hasError=!1,this.coins.includes(this.ticker)?(this.tickers.push({name:this.ticker.toUpperCase(),price:"-",percents:[]}),this.filter="",this.ticker="",Ce(this.currentTicker,(e=>{let t=this.tickers.filter((e=>e.name===this.currentTicker));t.forEach((t=>{t===this.currentTicker&&this.currentTicker.percents.push(e),t.price=e,"-"===this.currentTicker.price&&(this.noUpdates=!0)}))})),this.currentTickerIndex=null):this.isNoNameInCoins=!0}},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.tickers[this.currentTickerIndex]=null,this.isShow=!0,localStorage.removeItem("cryptomicon-list"),localStorage.setItem("cryptomicon-list",JSON.stringify(this.tickers.map((e=>e.name)))),Te(e.name)},select(e){this.currentTicker=e},filteredCoins(){let e=this.coins.filter((e=>e.startsWith(this.ticker.toUpperCase())));return this.fourCoins=e.splice(0,4),this.fourCoins},addLabel(e){this.ticker=e,this.add()},async getCoinList(){try{const e=await ke();this.coin=e.symbol,this.coins=Object.values(e.Data).map((e=>e.symbol))}catch(e){console.log("there was an error")}},prevPage(){this.page=this.page-1,this.$router.push({query:{filter:this.filter,page:this.page}})},nextPage(){this.page=this.page+1,this.$router.push({query:{filter:this.filter,page:this.page}})}},watch:{"ticker.length"(){this.isAddedTicker=!1,this.isNoNameInCoins=!1,this.filteredCoins()},currentTickerIndex(){this.percents=[]},"tickers.length"(){localStorage.setItem("cryptomicon-list",JSON.stringify(this.tickers.map((e=>e.name))))},filter(){this.page=1,this.$router.push({query:{filter:this.filter}}),this.currentTickerIndex=null},splicedTickers(){0===this.splicedTickers.length&&this.page>1&&(this.page-=1)}},computed:{filteredTickers(){return this.tickers?this.tickers.filter((e=>e.name.startsWith(this.filter.toUpperCase()))):[]},splicedTickers(){const e=(this.page-1)*this.limit,t=this.limit*this.page;return[...this.filteredTickers].splice(e,t)}}};const De=(0,U.Z)(Ie,[["render",j]]);var je=De,Ae={components:{HomeView:je}};const Oe=(0,U.Z)(Ae,[["render",s]]);var Ne=Oe,Ee=n(2483);const Ue=[{path:"/",name:"home",component:je},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],$e=(0,Ee.p7)({history:(0,Ee.PO)("/TicketsCrypto/"),routes:Ue});var Pe=$e,We=n(65),qe=(0,We.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(Ne).use(qe).use(Pe).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],s=e[d][2];for(var c=!0,a=0;a<i.length;a++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(c=!1,s<o&&(o=s));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.7809bda4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(i,r,s,o){if(e[i])e[i].push(r);else{var c,a;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+s){c=u;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+s),c.src=i),e[i]=[r];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TicketsCrypto/"}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=s);var o=n.p+n.u(t),c=new Error,a=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,r[1](c)}};n.l(o,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],c=i[1],a=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(a)var d=a(n)}for(t&&t(i);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=self["webpackChunkapp"]=self["webpackChunkapp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9371)}));i=n.O(i)})();
//# sourceMappingURL=app.ccf8e999.js.map