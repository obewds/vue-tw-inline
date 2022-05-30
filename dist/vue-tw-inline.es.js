import { defineComponent, openBlock, createBlock, unref, withCtx, renderSlot } from "vue";
import { VueTwEl } from "@obewds/vue-tw-el";
import { inlineLevelElementTags } from "@obewds/vue-validators";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "VueTwInline",
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
      required: true,
      validator: (prop) => inlineLevelElementTags.includes(prop)
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
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VueTwEl), {
        bgPalette: __props.bgPalette,
        bgColor: __props.bgColor,
        borderPalette: __props.borderPalette,
        borderColor: __props.borderColor,
        tag: __props.tag,
        text: __props.text,
        textPalette: __props.textPalette,
        textColor: __props.textColor
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["bgPalette", "bgColor", "borderPalette", "borderColor", "tag", "text", "textPalette", "textColor"]);
    };
  }
});
export { _sfc_main as VueTwInline };
