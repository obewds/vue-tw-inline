var VueTwInline=function(l,t,r,a){"use strict";const o=t.defineComponent({__name:"VueTwInline",props:{bgPalette:{type:String,default:"default"},bgColor:{type:String,default:"default"},borderPalette:{type:String,default:"default"},borderColor:{type:String,default:""},tag:{type:String,required:!0,validator:e=>a.inlineLevelElementTags.includes(e)},text:{type:String,default:""},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(e){return(n,d)=>(t.openBlock(),t.createBlock(t.unref(r.VueTwEl),{bgPalette:e.bgPalette,bgColor:e.bgColor,borderPalette:e.borderPalette,borderColor:e.borderColor,tag:e.tag,text:e.text,textPalette:e.textPalette,textColor:e.textColor},{default:t.withCtx(()=>[t.renderSlot(n.$slots,"default")]),_:3},8,["bgPalette","bgColor","borderPalette","borderColor","tag","text","textPalette","textColor"]))}});return l.VueTwInline=o,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),l}({},Vue,VueTwEl,VueValidators);
