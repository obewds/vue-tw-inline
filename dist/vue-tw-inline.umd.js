(function(o,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(o=typeof globalThis!="undefined"?globalThis:o||self,t(o.VueTwInline={},o.Vue))})(this,function(o,t){"use strict";var C=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],P=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],S=["body","head","html","noscript","script","slot","template"];function E(e){const r=e.toLowerCase();return P.includes(r)?(console.error("The <"+e+"> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."),!0):!1}function w(e){const r=e.toLowerCase(),a=E(r),n=T(r);return!!(a||n)}function T(e){const r=e.toLowerCase();return S.includes(r)?(console.error("The <"+e+"> element tag is not supported for rendering by this component."),!0):!1}const _=t.createTextVNode("VueEl"),O=t.defineComponent({props:{tag:{type:String,required:!0,validator:e=>C.includes(e)},text:{type:String,default:""}},setup(e){function r(a){return w(a)}return(a,n)=>r(e.tag)?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.tag),{key:1},{default:t.withCtx(()=>[e.text?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.text),1)],64)):t.renderSlot(a.$slots,"default",{key:1},()=>[_])]),_:3}))}});var j=Object.defineProperty,b=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,g=(e,r,a)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,l=(e,r)=>{for(var a in r||(r={}))B.call(r,a)&&g(e,a,r[a]);if(b)for(var a of b(r))$.call(r,a)&&g(e,a,r[a]);return e},q={console:{colors:{default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",info:"text-cyan-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",caution:"text-amber-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"}}},V={default:{colors:{default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"}}},U={monochromatic:{colors:{default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300",info:"text-cyan-800 bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-300",caution:"text-amber-800 bg-amber-300 dark:bg-amber-800 dark:text-amber-300"}}},I={pastel:{colors:{default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"}}},L={default:{colors:{"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"}}},N={default:{colors:{default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"}}};let D={anchor:{},bg:{palettes:l(l(l(l({},q),V),U),I)},border:{palettes:l({},L)},text:{palettes:l({},N)}};const F=t.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){const r=e,a=Object.keys(t.inject("tw",{})).length>0?t.inject("tw"):D;let n=t.computed(()=>{var d,s,c,u,p,y,f,m,k,x,h,v;let i="";return i+=a&&((u=(c=(s=(d=a==null?void 0:a.text)==null?void 0:d.palettes)==null?void 0:s[r.textPalette])==null?void 0:c.colors)==null?void 0:u[r.textColor])?a.text.palettes[r.textPalette].colors[r.textColor]+" ":"",i+=a&&((m=(f=(y=(p=a==null?void 0:a.bg)==null?void 0:p.palettes)==null?void 0:y[r.bgPalette])==null?void 0:f.colors)==null?void 0:m[r.bgColor])?a.bg.palettes[r.bgPalette].colors[r.bgColor]+" ":"",i+=a&&((v=(h=(x=(k=a==null?void 0:a.border)==null?void 0:k.palettes)==null?void 0:x[r.borderPalette])==null?void 0:h.colors)==null?void 0:v[r.borderColor])?a.border.palettes[r.borderPalette].colors[r.borderColor]+" ":"",i.trim()});return(d,s)=>(t.openBlock(),t.createBlock(t.unref(O),{tag:e.tag,text:e.text,class:t.normalizeClass(t.unref(n))},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"default")]),_:3},8,["tag","text","class"]))}});var M=["a","abbr","acronym","audio","b","bdi","bdo","big","button","canvas","cite","code","data","datalist","del","dfn","em","i","iframe","ins","kbd","label","map","mark","meter","object","output","picture","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","textarea","time","u","tt","var","video"];const z=t.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0,validator:e=>M.includes(e)},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){return(r,a)=>(t.openBlock(),t.createBlock(t.unref(F),{bgPalette:e.bgPalette,bgColor:e.bgColor,borderPalette:e.borderPalette,borderColor:e.borderColor,tag:e.tag,text:e.text,textPalette:e.textPalette,textColor:e.textColor},{default:t.withCtx(()=>[t.renderSlot(r.$slots,"default")]),_:3},8,["bgPalette","bgColor","borderPalette","borderColor","tag","text","textPalette","textColor"]))}});o.VueTwInline=z,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
