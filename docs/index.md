---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


::: danger
This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!
:::


# VueTwInline.vue

Welcome to the docs page for OBE:WDS's `VueTwInline.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-tw-inline --save-dev
```




## Import Component




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




## Props




### text

:white_check_mark: - Type `String`  
:x: - Not Required  
:x: - Doesn't Validate


```html{2}
<template>
    <VueTwInline text="My text prop string"/>
</template>
```

Outputs:

```html
<div>My text prop string</div>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Slots




### default

```html{2-4}
<template>
    <VueTwInline>
        My slot content
    </VueTwInline>
</template>
```

Outputs:

```html
<div>My slot content</div>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




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
