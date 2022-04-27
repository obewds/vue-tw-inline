import { defineComponent, inject, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot, createElementBlock, Fragment, resolveDynamicComponent, createTextVNode, toDisplayString } from "vue";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("VueEl");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    tag: {
      type: String,
      required: true,
      validator: (prop) => [
        "style",
        "title",
        "address",
        "article",
        "aside",
        "footer",
        "header",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "main",
        "nav",
        "section",
        "blockquote",
        "dd",
        "div",
        "dl",
        "dt",
        "figcaption",
        "figure",
        "li",
        "menu",
        "ol",
        "p",
        "pre",
        "ul",
        "a",
        "abbr",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "data",
        "dfn",
        "em",
        "i",
        "kbd",
        "mark",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "time",
        "u",
        "var",
        "audio",
        "map",
        "video",
        "iframe",
        "object",
        "picture",
        "portal",
        "svg",
        "math",
        "canvas",
        "del",
        "ins",
        "caption",
        "colgroup",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "tr",
        "button",
        "datalist",
        "fieldset",
        "form",
        "label",
        "legend",
        "meter",
        "optgroup",
        "option",
        "output",
        "progress",
        "select",
        "textarea",
        "details",
        "dialog",
        "summary"
      ].includes(prop)
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    function emptyElementOrUnsupportedError() {
      const isEmptyElement = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].includes(props.tag);
      if (isEmptyElement) {
        console.error("The <" + props.tag + "> tag is an Empty Element, so when inside a Vue.js SFC <template> context the <" + props.tag + '> tag needs to be written in pure HTML to avoid the built-in <component is=""> functionality of Vue.js which outputs an invalid closing tag for the <' + props.tag + "> Empty Element tag.");
      }
      const isUnsupportedElement = ["body", "head", "html", "noscript", "script", "slot", "template"].includes(props.tag);
      if (isUnsupportedElement) {
        console.error("The <" + props.tag + "> element tag is not supported for rendering by the VueEl.vue (<vue-el/>) component.");
      }
      return isEmptyElement || isUnsupportedElement ? true : false;
    }
    return (_ctx, _cache) => {
      return emptyElementOrUnsupportedError() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tag), { key: 1 }, {
        default: withCtx(() => [
          __props.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(__props.text), 1)
          ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
            _hoisted_1
          ])
        ]),
        _: 3
      }));
    };
  }
});
var a = { console: { colors: { default: "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", error: "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", primary: "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", secondary: "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", success: "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", info: "text-cyan-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80", caution: "text-amber-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80" } } };
var e$3 = { default: { colors: { default: "", error: "text-white bg-rose-500 dark:bg-rose-600", primary: "text-white bg-blue-500 dark:bg-blue-600", secondary: "text-white bg-violet-500 dark:bg-violet-600", success: "text-white bg-green-500 dark:bg-green-600" } } };
var e$2 = { monochromatic: { colors: { default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200", error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200", primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200", secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200", success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300", info: "text-cyan-800 bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-300", caution: "text-amber-800 bg-amber-300 dark:bg-amber-800 dark:text-amber-300" } } };
var e$1 = { pastel: { colors: { default: "text-black bg-gray-100 dark:bg-gray-200", error: "text-black bg-rose-200 dark:bg-rose-300", primary: "text-black bg-blue-200 dark:bg-blue-300", secondary: "text-black bg-violet-200 dark:bg-violet-300", success: "text-black bg-green-300 dark:bg-green-400" } } };
var r = { default: { colors: { "": "", default: "border-gray-200 dark:border-gray-600", error: "border-rose-600 dark:border-rose-300", primary: "border-blue-600 dark:border-blue-300", secondary: "border-violet-600 dark:border-violet-300", success: "border-green-600 dark:border-green-300" } } };
var e = { default: { colors: { default: "", error: "text-rose-500 dark:text-rose-300", primary: "text-blue-500 dark:text-blue-300", secondary: "text-violet-500 dark:text-violet-300", success: "text-green-600 dark:text-green-300" } } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      default: "default"
    },
    tag: {
      type: String,
      required: true
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
    const props = __props;
    const tw = Object.keys(inject("tw", {})).length > 0 ? inject("tw") : {
      bg: {
        palettes: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, a), e$3), e$2), e$1)
      },
      border: {
        palettes: __spreadValues({}, r)
      },
      text: {
        palettes: __spreadValues({}, e)
      }
    };
    let compoClasses = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      let output = "";
      output += tw && ((_d = (_c = (_b = (_a = tw == null ? void 0 : tw.text) == null ? void 0 : _a.palettes) == null ? void 0 : _b[props.textPalette]) == null ? void 0 : _c.colors) == null ? void 0 : _d[props.textColor]) ? tw.text.palettes[props.textPalette].colors[props.textColor] + " " : "";
      output += tw && ((_h = (_g = (_f = (_e = tw == null ? void 0 : tw.bg) == null ? void 0 : _e.palettes) == null ? void 0 : _f[props.bgPalette]) == null ? void 0 : _g.colors) == null ? void 0 : _h[props.bgColor]) ? tw.bg.palettes[props.bgPalette].colors[props.bgColor] + " " : "";
      output += tw && ((_l = (_k = (_j = (_i = tw == null ? void 0 : tw.border) == null ? void 0 : _i.palettes) == null ? void 0 : _j[props.borderPalette]) == null ? void 0 : _k.colors) == null ? void 0 : _l[props.borderColor]) ? tw.border.palettes[props.borderPalette].colors[props.borderColor] + " " : "";
      return output;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        tag: __props.tag,
        text: __props.text,
        class: normalizeClass(unref(compoClasses))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["tag", "text", "class"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: "default"
    },
    tag: {
      type: String,
      required: true,
      validator: (prop) => [
        "a",
        "abbr",
        "acronym",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "dfn",
        "em",
        "i",
        "iframe",
        "ins",
        "kbd",
        "label",
        "map",
        "mark",
        "meter",
        "object",
        "output",
        "picture",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "textarea",
        "time",
        "u",
        "tt",
        "var",
        "video"
      ].includes(prop)
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
      return openBlock(), createBlock(unref(_sfc_main$2), {
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
