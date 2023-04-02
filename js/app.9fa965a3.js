(function(){"use strict";var e={4366:function(e,t,i){var r=i(9242),n=i(3396);function s(e,t,i,r,s,o){const a=(0,n.up)("HomeView");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a)])}var o=i(7139);const a={class:"home"},c=(0,n._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,n._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1),l={class:"d-flex flex-column justify-content-start"},u={class:"d-flex justify-content-start"},d={class:"d-flex flex-column mb-2"},p=(0,n._)("label",{for:"input",class:"fw-semibold m-1"},"Ticket",-1),m={key:0,class:"mb-3 d-flex justify-content-start align-items-center m-1"},h=["onClick"],f={class:"home__hints bg-secondary bg-gradient p-1 text-white fw-lighter lh-1 font-size-small"},g={class:"d-flex justify-content-start align-items-center"},k=(0,n._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1),y=(0,n._)("span",{class:"fw-semibold p-2 text-white"}," Add ",-1),b={class:"d-flex align-items-center justify-content-end"},v={class:"d-flex align-items-center"},_=(0,n._)("p",{class:"m-2"},"Filter:",-1),w=(0,n._)("hr",{class:"m-3"},null,-1),T={class:"d-flex align-items-center flex-wrap justify-content-center"},C=(0,n._)("hr",{class:"m-3"},null,-1),x={key:1},S={key:1},j=(0,n._)("h6",{class:"fw-semibold home__h6"},"You have not added any tickers yet",-1),D=[j];function A(e,t,i,s,j,A){const O=(0,n.up)("InputApp"),I=(0,n.up)("NoticeApp"),$=(0,n.up)("ButtonsApp"),E=(0,n.up)("TicketApp"),P=(0,n.up)("DropdownBox");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",null,[c,(0,n._)("div",l,[(0,n._)("div",u,[(0,n._)("div",d,[(0,n.Wm)(O,{type:"text",id:"input",name:"entry",placeholder:j.placeholder,modelValue:j.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>j.ticker=e),modelModifiers:{trim:!0},onKeydown:(0,r.D2)(A.add,["enter"]),class:(0,o.C_)(["home__input border border-success border-opacity-50 rounded",{error:j.hasError}])},{default:(0,n.w5)((()=>[p])),_:1},8,["placeholder","modelValue","onKeydown","class"]),0!=j.ticker.length?((0,n.wg)(),(0,n.iD)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(j.fourCoins,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"mx-1",onClick:t=>A.addLabel(e)},[(0,n._)("div",f,(0,o.zw)(e),1)],8,h)))),128))])):(0,n.kq)("",!0),j.isAddedTicker?((0,n.wg)(),(0,n.j4)(I,{key:1,class:"text-danger"},{default:(0,n.w5)((()=>[(0,n.Uk)("This ticker has already been added")])),_:1})):(0,n.kq)("",!0)])]),(0,n._)("div",g,[(0,n.Wm)($,{size:"md",class:"home__btn rounded-pill",onClick:A.add},{default:(0,n.w5)((()=>[k,y])),_:1},8,["onClick"])])])]),j.tickers.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",b,[(0,n._)("div",v,[_,(0,n.Wm)(O,{modelValue:j.filter,"onUpdate:modelValue":t[1]||(t[1]=e=>j.filter=e),modelModifiers:{trim:!0},class:"home__filter-input rounded"},null,8,["modelValue"])]),(0,n._)("div",null,[(0,n.Wm)($,{size:"xs",class:"home__filter-btn fontsizeSmall",onClick:A.prevPage,disabled:1===j.page},{default:(0,n.w5)((()=>[(0,n.Uk)(" Prev ")])),_:1},8,["onClick","disabled"]),(0,n.Wm)($,{size:"xs",class:"home__filter-btn fontsizeSmall ml-2",onClick:A.nextPage,disabled:j.page*j.limit>A.filteredTickers.length||A.filteredTickers.length===j.limit},{default:(0,n.w5)((()=>[(0,n.Uk)(" Next ")])),_:1},8,["onClick","disabled"])])]),w,(0,n._)("div",T,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.splicedTickers,(e=>((0,n.wg)(),(0,n.j4)(E,{key:e,t:e,class:(0,o.C_)([{active:j.currentStateTicker===e},"p-5 pb-3 m-4 home__ticket"]),onHandleDelete:t=>A.handleDelete(e),onClick:(0,r.iM)((t=>A.select(e)),["self"])},null,8,["t","class","onHandleDelete","onClick"])))),128))]),A.filteredTickers.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(I,{key:0,class:"fw-semibold home__h6"},{default:(0,n.w5)((()=>[(0,n.Uk)("Tickers on this filter were not found")])),_:1})),C,j.currentStateTicker?((0,n.wg)(),(0,n.iD)("div",x,[(0,n.Wm)(P,{onClose:t[2]||(t[2]=e=>j.currentStateTicker=null),currentStateTicker:j.currentStateTicker,percents:j.percents},null,8,["currentStateTicker","percents"])])):(0,n.kq)("",!0)],64)):j.isShow?((0,n.wg)(),(0,n.iD)("div",S,D)):(0,n.kq)("",!0)])}i(7658);const O={class:"d-flex flex-column"},I=["type","placeholder","id","name","disabled","value"];function $(e,t,i,r,s,a){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n.WI)(e.$slots,"default"),(0,n._)("input",{type:i.type,class:(0,o.C_)(["m-2 p-2",i.class]),placeholder:i.placeholder,id:i.id,name:i.name,disabled:i.disabled,value:i.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e))},null,42,I)])}var E={name:"InputApp",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}},P=i(89);const U=(0,P.Z)(E,[["render",$]]);var W=U;function z(e,t,i,r,s,a){return(0,n.wg)(),(0,n.iD)("button",{class:(0,o.C_)(["btn m-1",[`btn-${i.color}`,`btn-${i.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click",t))},[(0,n.WI)(e.$slots,"default")],2)}var V={name:"ButtonsApp",props:{color:{type:String,default:"main-color-purple"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const B=(0,P.Z)(V,[["render",z]]);var N=B;const q=e=>((0,n.dD)("data-v-213806ba"),e=e(),(0,n.Cn)(),e),M={class:"ticket d-flex flex-column justify-content-center"},H={class:"border border-0 bg-transparent text-center mb-3",type:"text"},F={class:"border border-0 bg-transparent text-center mb-3 fs-2",type:"number"},Z=q((()=>(0,n._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),L=q((()=>(0,n._)("span",{class:"p-1"},"Delete",-1)));function K(e,t,i,r,s,a){const c=(0,n.up)("ButtonsApp");return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",H,(0,o.zw)(i.t.name+" -  USD"),1),(0,n._)("div",F,(0,o.zw)(i.t.price),1),(0,n.Wm)(c,{color:"white ticket__btn",onClick:t[0]||(t[0]=t=>e.$emit("handleDelete"))},{default:(0,n.w5)((()=>[Z,L])),_:1})])}var Y={name:"TicketApp",components:{ButtonsApp:N},props:{t:{type:Object}},data(){return{}},emits:["handleDelete"]};const J=(0,P.Z)(Y,[["render",K],["__scopeId","data-v-213806ba"]]);var G=J;const Q=e=>((0,n.dD)("data-v-0d5d933f"),e=e(),(0,n.Cn)(),e),R={class:"my-5 dropdown"},X={class:"d-flex justify-content-between align-items-center mb-2"},ee={class:"p-2"},te=Q((()=>(0,n._)("img",{class:"dropdown__btn-image",src:"https://img.icons8.com/sf-ultralight/512/close-window.png"},null,-1))),ie={class:"dropdown__box d-flex justify-content-start align-items-end"};function re(e,t,i,r,s,a){const c=(0,n.up)("ButtonsApp"),l=(0,n.up)("ChartColumn");return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",X,[(0,n._)("h5",ee,(0,o.zw)(i.currentStateTicker.name+" -  USD"),1),(0,n.Wm)(c,{size:"md",class:"bg-transparent border border-0",onClick:t[0]||(t[0]=t=>e.$emit("close"))},{default:(0,n.w5)((()=>[te])),_:1})]),(0,n._)("div",ie,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.calcPercents,((e,t)=>((0,n.wg)(),(0,n.j4)(l,{key:t,style:(0,o.j5)({height:`${e}%`})},null,8,["style"])))),128))])])}function ne(e,t,i,r,s,a){return(0,n.wg)(),(0,n.iD)("div",{class:"chart__strip ms-2 rounded",style:(0,o.j5)(i.style)},null,4)}var se={name:"ChartColumn",props:{percent:{type:Number},style:{type:Object}}};const oe=(0,P.Z)(se,[["render",ne],["__scopeId","data-v-066616c4"]]);var ae=oe,ce={name:"DropdownBox",components:{ButtonsApp:N,ChartColumn:ae},props:{currentStateTicker:{type:Object},percents:{type:Array,default:()=>[]}},computed:{calcPercents(){const e=Math.min(...this.percents),t=Math.max(...this.percents);return t===e?this.percents.map((()=>50)):this.percents.map((e=>5+e/t*95))}},emits:["close"]};const le=(0,P.Z)(ce,[["render",re],["__scopeId","data-v-0d5d933f"]]);var ue=le;function de(e,t,i,r,s,a){return(0,n.wg)(),(0,n.iD)("p",{class:(0,o.C_)(i.class)},[(0,n.WI)(e.$slots,"default")],2)}var pe={name:"NoticeApp",props:{class:{type:String}}};const me=(0,P.Z)(pe,[["render",de]]);var he=me;const fe="27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a",ge=e=>fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${e.join(",")}&tsyms=USD&api_key=${fe}`).then((e=>e.json())).then((e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,t.USD]))))),ke=()=>fetch(`https://min-api.cryptocompare.com/data/blockchain/list?&api_key=${fe}`).then((e=>e.json())),ye=(new Map,e=>"-"===e?e:e>1?e.toFixed(2):e.toPrecision(2));var be={name:"HomeView",components:{InputApp:W,ButtonsApp:N,TicketApp:G,DropdownBox:ue,NoticeApp:he},data(){return{placeholder:"Example: DOGE",ticker:"",tickers:[],coin:"",coins:[],fourCoin:"",fourCoins:[],currentStateTicker:null,hasError:!1,percents:[],isAddedTicker:!1,isShow:!1,fetchInterval:null,currentTicker:{},page:this.$route.query.page||1,limit:8,filter:this.$route.query.filter||""}},created(){this.getCoinList();let e=localStorage.getItem("cryptomicon-list");e=JSON.parse(e),null!=e&&(this.tickers=e.map((e=>({name:e,price:"-"}))),setInterval((()=>this.updateTickers()),9e3))},methods:{add(){if(this.tickers.find((e=>e.name===this.ticker.toUpperCase())))this.isAddedTicker=!0;else{if(null===this.ticker||this.ticker.length<1)return this.ticker="",this.placeholder="Enter valid value",void(this.hasError=!0);this.hasError=!1,this.currentTicker={name:this.ticker.toUpperCase(),price:"-"},this.tickers=[...this.tickers,this.currentTicker],this.filter="",this.updateTickers(this.currentTicker.name),this.ticker=""}},async updateTickers(){try{if(!this.tickers.length)return;const e=await ge(this.tickers.map((e=>e.name)));this.tickers.forEach((t=>{const i=e[t.name.toUpperCase()];t.price=ye(i),this.currentStateTicker?.name===t.name&&this.percents.push(t.price)}))}catch{console.log("wrong")}},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.currentStateTicker=null,this.isShow=!0,localStorage.removeItem("cryptomicon-list"),localStorage.setItem("cryptomicon-list",JSON.stringify(this.tickers.map((e=>e.name))))},select(e){this.currentStateTicker=e},filteredCoins(){let e=this.coins.filter((e=>e.startsWith(this.ticker.toUpperCase())));return this.fourCoins=e.splice(0,4),this.fourCoins},addLabel(e){this.ticker=e,this.add()},async getCoinList(){try{const e=await ke();this.coin=e.symbol,this.coins=Object.values(e.Data).map((e=>e.symbol)),console.log(this.coins)}catch(e){console.log("there was an error")}},prevPage(){this.page=this.page-1,this.$router.push({query:{filter:this.filter,page:this.page}})},nextPage(){this.page=this.page+1,this.$router.push({query:{filter:this.filter,page:this.page}})}},watch:{"ticker.length"(){this.isAddedTicker=!1,this.filteredCoins()},currentStateTicker(){this.percents=[]},tickers(){localStorage.setItem("cryptomicon-list",JSON.stringify(this.tickers.map((e=>e.name))))},filter(){this.page=1,this.$router.push({query:{filter:this.filter}}),this.currentStateTicker=null},splicedTickers(){0===this.splicedTickers.length&&this.page>1&&(this.page-=1)}},computed:{filteredTickers(){return this.tickers?this.tickers.filter((e=>e.name.startsWith(this.filter.toUpperCase()))):[]},splicedTickers(){const e=(this.page-1)*this.limit,t=this.limit*this.page;return[...this.filteredTickers].splice(e,t)}}};const ve=(0,P.Z)(be,[["render",A]]);var _e=ve,we={components:{HomeView:_e}};const Te=(0,P.Z)(we,[["render",s]]);var Ce=Te,xe=i(2483);const Se=[{path:"/",name:"home",component:_e},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,7381))}],je=(0,xe.p7)({history:(0,xe.PO)("/TicketsCrypto/"),routes:Se});var De=je,Ae=i(65),Oe=(0,Ae.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(Ce).use(Oe).use(De).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/about.7809bda4.js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";i.l=function(r,n,s,o){if(e[r])e[r].push(n);else{var a,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[n];var p=function(t,i){a.onerror=a.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(i)})),t)return t(i)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/TicketsCrypto/"}(),function(){var e={143:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(i,r){n=e[t]=[i,r]}));r.push(n[2]=s);var o=i.p+i.u(t),a=new Error,c=function(r){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}};i.l(o,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var u=c(i)}for(t&&t(r);l<o.length;l++)s=o[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(4366)}));r=i.O(r)})();
//# sourceMappingURL=app.9fa965a3.js.map