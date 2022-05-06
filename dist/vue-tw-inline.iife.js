var VueTwInline=function(i,r){"use strict";function g(e,t,a){var l,o,n,d;return e&&((d=(n=(o=(l=e==null?void 0:e.bg)==null?void 0:l.palettes)==null?void 0:o[t])==null?void 0:n.colors)==null?void 0:d[a])?e.bg.palettes[t].colors[a]:""}function c(e,t,a){var l,o,n,d;return e&&((d=(n=(o=(l=e==null?void 0:e.border)==null?void 0:l.palettes)==null?void 0:o[t])==null?void 0:n.colors)==null?void 0:d[a])?e.border.palettes[t].colors[a]:""}function p(e,t,a){var l,o,n,d;return e&&((d=(n=(o=(l=e==null?void 0:e.text)==null?void 0:l.palettes)==null?void 0:o[t])==null?void 0:n.colors)==null?void 0:d[a])?e.text.palettes[t].colors[a]:""}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(b)for(var a of b(t))f.call(t,a)&&u(e,a,t[a]);return e},k={console:{colors:{default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"}}},x={default:{colors:{default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"}}},h={monochromatic:{colors:{default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"}}},v={pastel:{colors:{default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"}}},P={default:{colors:{"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"}}},C={default:{colors:{default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"}}};let w={anchor:{},bg:{palettes:s(s(s(s({},k),x),h),v)},border:{palettes:s({},P)},text:{palettes:s({},C)}};var S=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],E=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],B=["body","head","html","noscript","script","slot","template"];function T(e){const t=e.toLowerCase();return E.includes(t)?(console.error("The <"+e+"> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component."),!0):!1}function _(e){const t=e.toLowerCase(),a=T(t),l=O(t);return!!(a||l)}function O(e){const t=e.toLowerCase();return B.includes(t)?(console.error("The <"+e+"> element tag is not supported for rendering by this component."),!0):!1}const j=r.createTextVNode("VueEl"),V=r.defineComponent({props:{tag:{type:String,required:!0,validator:e=>S.includes(e)},text:{type:String,default:""}},setup(e){function t(a){return _(a)}return(a,l)=>t(e.tag)?(r.openBlock(),r.createElementBlock(r.Fragment,{key:0},[],64)):(r.openBlock(),r.createBlock(r.resolveDynamicComponent(e.tag),{key:1},{default:r.withCtx(()=>[e.text?(r.openBlock(),r.createElementBlock(r.Fragment,{key:0},[r.createTextVNode(r.toDisplayString(e.text),1)],64)):r.renderSlot(a.$slots,"default",{key:1},()=>[j])]),_:3}))}}),q=r.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){const t=e,a=Object.keys(r.inject("tw",{})).length>0?r.inject("tw"):w;let l=r.computed(()=>{let o=[];return o.push(g(a,t.bgPalette,t.bgColor)),o.push(c(a,t.borderPalette,t.borderColor)),o.push(p(a,t.textPalette,t.textColor)),o.join(" ")});return(o,n)=>(r.openBlock(),r.createBlock(r.unref(V),{tag:e.tag,text:e.text,class:r.normalizeClass(r.unref(l))},{default:r.withCtx(()=>[r.renderSlot(o.$slots,"default")]),_:3},8,["tag","text","class"]))}});var U=["a","abbr","acronym","audio","b","bdi","bdo","big","button","canvas","cite","code","data","datalist","del","dfn","em","i","iframe","ins","kbd","label","map","mark","meter","object","output","picture","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","textarea","time","u","tt","var","video"];const D=r.defineComponent({props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0,validator:e=>U.includes(e)},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){return(t,a)=>(r.openBlock(),r.createBlock(r.unref(q),{bgPalette:e.bgPalette,bgColor:e.bgColor,borderPalette:e.borderPalette,borderColor:e.borderColor,tag:e.tag,text:e.text,textPalette:e.textPalette,textColor:e.textColor},{default:r.withCtx(()=>[r.renderSlot(t.$slots,"default")]),_:3},8,["bgPalette","bgColor","borderPalette","borderColor","tag","text","textPalette","textColor"]))}});return i.VueTwInline=D,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),i}({},Vue);
