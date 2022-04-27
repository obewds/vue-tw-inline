var VueTwInline=function(i,t){"use strict";var C=Object.defineProperty,g=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,s=(r,e,a)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,l=(r,e)=>{for(var a in e||(e={}))P.call(e,a)&&s(r,a,e[a]);if(g)for(var a of g(e))S.call(e,a)&&s(r,a,e[a]);return r};const w=t.createTextVNode("VueEl"),_=t.defineComponent({props:{tag:{type:String,required:!0,validator:r=>["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"].includes(r)},text:{type:String,default:""}},setup(r){const e=r;function a(){const d=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].includes(e.tag);d&&console.error("The <"+e.tag+"> tag is an Empty Element, so when inside a Vue.js SFC <template> context the <"+e.tag+'> tag needs to be written in pure HTML to avoid the built-in <component is=""> functionality of Vue.js which outputs an invalid closing tag for the <'+e.tag+"> Empty Element tag.");const o=["body","head","html","noscript","script","slot","template"].includes(e.tag);return o&&console.error("The <"+e.tag+"> element tag is not supported for rendering by the VueEl.vue (<vue-el/>) component."),!!(d||o)}return(d,o)=>a()?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(r.tag),{key:1},{default:t.withCtx(()=>[r.text?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(r.text),1)],64)):t.renderSlot(d.$slots,"default",{key:1},()=>[w])]),_:3}))}});var E={console:{colors:{default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",info:"text-cyan-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",caution:"text-amber-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"}}},j={default:{colors:{default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"}}},O={monochromatic:{colors:{default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300",info:"text-cyan-800 bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-300",caution:"text-amber-800 bg-amber-300 dark:bg-amber-800 dark:text-amber-300"}}},B={pastel:{colors:{default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"}}},V={default:{colors:{"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"}}},T={default:{colors:{default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"}}};const $=t.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:"default"},tag:{type:String,required:!0},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(r){const e=r,a=Object.keys(t.inject("tw",{})).length>0?t.inject("tw"):{bg:{palettes:l(l(l(l({},E),j),O),B)},border:{palettes:l({},V)},text:{palettes:l({},T)}};let d=t.computed(()=>{var o,b,c,u,p,y,f,k,m,x,h,v;let n="";return n+=a&&((u=(c=(b=(o=a==null?void 0:a.text)==null?void 0:o.palettes)==null?void 0:b[e.textPalette])==null?void 0:c.colors)==null?void 0:u[e.textColor])?a.text.palettes[e.textPalette].colors[e.textColor]+" ":"",n+=a&&((k=(f=(y=(p=a==null?void 0:a.bg)==null?void 0:p.palettes)==null?void 0:y[e.bgPalette])==null?void 0:f.colors)==null?void 0:k[e.bgColor])?a.bg.palettes[e.bgPalette].colors[e.bgColor]+" ":"",n+=a&&((v=(h=(x=(m=a==null?void 0:a.border)==null?void 0:m.palettes)==null?void 0:x[e.borderPalette])==null?void 0:h.colors)==null?void 0:v[e.borderColor])?a.border.palettes[e.borderPalette].colors[e.borderColor]+" ":"",n});return(o,b)=>(t.openBlock(),t.createBlock(t.unref(_),{tag:r.tag,text:r.text,class:t.normalizeClass(t.unref(d))},{default:t.withCtx(()=>[t.renderSlot(o.$slots,"default")]),_:3},8,["tag","text","class"]))}}),q=t.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:"default"},tag:{type:String,required:!0,validator:r=>["a","abbr","acronym","audio","b","bdi","bdo","big","button","canvas","cite","code","data","datalist","del","dfn","em","i","iframe","ins","kbd","label","map","mark","meter","object","output","picture","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","textarea","time","u","tt","var","video"].includes(r)},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(r){return(e,a)=>(t.openBlock(),t.createBlock(t.unref($),{bgPalette:r.bgPalette,bgColor:r.bgColor,borderPalette:r.borderPalette,borderColor:r.borderColor,tag:r.tag,text:r.text,textPalette:r.textPalette,textColor:r.textColor},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["bgPalette","bgColor","borderPalette","borderColor","tag","text","textPalette","textColor"]))}});return i.VueTwInline=q,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),i}({},Vue);
