import { defineComponent as l, openBlock as r, createBlock as o, unref as a, withCtx as d, renderSlot as n } from "vue";
import { VueTwEl as u } from "@obewds/vue-tw-el";
import { inlineLevelElementTags as g } from "@obewds/vue-validators";
const C = /* @__PURE__ */ l({
  __name: "VueTwInline",
  props: {
    bgPalette: {
      type: String,
      default: "default"
    },
    bgColor: {
      type: String,
      default: "default"
    },
    borderPalette: {
      type: String,
      default: "default"
    },
    borderColor: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      required: !0,
      validator: (t) => g.includes(t)
    },
    text: {
      type: String,
      default: ""
    },
    textPalette: {
      type: String,
      default: "default"
    },
    textColor: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, i) => (r(), o(a(u), {
      bgPalette: t.bgPalette,
      bgColor: t.bgColor,
      borderPalette: t.borderPalette,
      borderColor: t.borderColor,
      tag: t.tag,
      text: t.text,
      textPalette: t.textPalette,
      textColor: t.textColor
    }, {
      default: d(() => [
        n(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["bgPalette", "bgColor", "borderPalette", "borderColor", "tag", "text", "textPalette", "textColor"]));
  }
});
export {
  C as VueTwInline
};
