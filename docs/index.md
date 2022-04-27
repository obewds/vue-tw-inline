---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# VueTwInline.vue

Welcome to the docs page for OBE:WDS's `VueTwInline.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-tw-inline --save-dev
```




## Tailwind CSS Integration

In your project's `./tailwind.config.js` file:

```javascript
module.exports = {

    // ...

    content: [
        // ...
        "./node_modules/@obewds/**/dist/*.js", // add this line to include all OBE:WDS stock defaults
        "./obewds.tw.config.json", // add this line to include your own OBE:WDS tailwind config file defaults
    ],

    // ...

}
```

And when using your own OBE:WDS Tailwind CSS config file, you'll need to `provide()` the data to your application, using something along the lines of this pseudo code:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Ensure the app's main tailwind file is imported
import './assets/index.css'

// Include your OBE:WDS Tailwind CSS config file
import obewdsTwConfig from '../obewds.tw.config.json'

const app = createApp(App)

// Provide the data with the SPECIFIC key of 'tw'!
app.provide('tw', obewdsTwConfig)

app.mount('#app')
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




### bgPalette

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" bg-palette="default"/>
</template>
```

<br>

### bgColor

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" bg-color="default"/>
</template>
```

<br>

### borderPalette

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" border-palette="default"/>
</template>
```

<br>

### borderColor

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" border-color="default"/>
</template>
```

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

> The majority of HTML inline tags passed into the `tag` prop are valid. However, the component does **_exclude all_** of the inline [HTML Empty Elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element), as well as excluding **_each_** of the following elements due to runtime issues/errors, so the `body`, `head`, `html`, `noscript`, `script`, `slot` and `template` elements are also excluded and won't validate!

<br>

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
<span>My text prop string</span>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::

### textPalette

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" text-palette="default"/>
</template>
```

<br>

### textColor

:white_check_mark: Type `String`  
:x: Not Required  
:white_check_mark: Validates

```html{2}
<template>
    <VueTwInline tag="span" text-color="default"/>
</template>
```

<br>




## Slots




### default

```html{2-4}
<template>
    <VueTwInline tag="span">
        My slot content
    </VueTwInline>
</template>
```

Outputs:

```html
<span>My slot content</span>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::

## Text Prop vs Slot Precidence

```html
<template>

    <!--
    The text="" attr/prop value takes precidence 
    over slot content!
    -->
    <VueTwInline tag="span" text="This text prop value will override">
        This slot content.
    </VueTwInline>

</template>
```

Outputs:

```html
<span>This text prop value will override</span>
```

<br>

## Empty State Default Placeholder String

```html
<template>

    <!-- 
    Empty slot and text prop/attr values 
    will render the default component 
    slot placeholder string "VueEl"!
    -->
    <VueTwInline tag="span" text="">
        <!-- This comment won't render -->
    </VueTwInline>

</template>
```

Outputs:

```html
<!-- The placeholder will still render, though -->
<span>VueEl</span>
```

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