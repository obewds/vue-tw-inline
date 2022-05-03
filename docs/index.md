---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# @obewds/vue-tw-inline

Welcome to the docs page for OBE:WDS's `VueTwInline.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-tw-inline --save-dev
```

<br>




## Tailwind CSS Integration

Inherited from and prefaced in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#tailwind-css-integration) docs.

Detailed in the [@obewds/obewds-tw-config](https://obewds.github.io/obewds-tw-config) docs.

<br>




## Importing

### Template syntax

```html{2}
<template>
    <VueTwInline/>
</template>
```

### Script setup syntax

```html{2}
<script setup lang="ts">
    import { VueTwInline } from '@obewds/vue-tw-inline'
</script>
```

### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { VueTwInline } from '@obewds/vue-tw-inline'

    export default defineComponent({
        components: { VueTwInline }
    })
</script>
```

<br>



## Props

### bgPalette

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#bgpalette) docs.

<br>

### bgColor

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#bgcolor) docs.

<br>

### borderPalette

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#borderpalette) docs.

<br>

### borderColor

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#bordercolor) docs.

<br>

### tag

:white_check_mark: Type `String`  
:white_check_mark: Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span"/>
</template>
```

> The majority of HTML inline level tags passed into the `tag` prop are valid. However, the component does **_exclude all_** of the inline [HTML Empty Elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element), as well as excluding **_each_** of the following elements due to runtime issues/errors, so the `body`, `head`, `html`, `noscript`, `script`, `slot` and `template` elements are also excluded and won't validate!

<br>

### text

Detailed in the [@obewds/vue-el](https://obewds.github.io/vue-el/#text) docs.

<br>

### textPalette

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#textpalette) docs.

<br>

### textColor

Detailed in the [@obewds/vue-tw-el](https://obewds.github.io/vue-tw-el/#textcolor) docs.

<br>




## Slots

### #default

Detailed in the [@obewds/vue-el](https://obewds.github.io/vue-el/#default) docs.

<br>




## Uninstall

```bash
npm uninstall @obewds/vue-tw-inline
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->

