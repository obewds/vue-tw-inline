<script setup lang="ts">

    import { VueTwEl } from '@obewds/vue-tw-el'

    const props = defineProps({
        bgPalette: {
            type: String,
            default: 'default',
        },
        bgColor: {
            type: String,
            default: 'default',
        },
        borderPalette: {
            type: String,
            default: 'default',
        },
        borderColor: {
            type: String,
            default: 'default',
        },
        tag: {
            type: String,
            required: true,
            validator: (prop: string): boolean => ([
                'a',
                'abbr',
                'acronym',
                'audio', // if it has visible controls
                'b',
                'bdi',
                'bdo',
                'big',
                /*'br',*/
                'button',
                'canvas',
                'cite',
                'code',
                'data',
                'datalist',
                'del',
                'dfn',
                'em',
                /*'embed',*/
                'i',
                'iframe',
                /*'img',*/
                /*'input',*/
                'ins',
                'kbd',
                'label',
                'map',
                'mark',
                'meter',
                /*'noscript',*/
                'object',
                'output',
                'picture',
                'progress',
                'q',
                'ruby',
                's',
                'samp',
                /*'script',*/
                'select',
                /*'slot',*/
                'small',
                'span',
                'strong',
                'sub',
                'sup',
                'svg',
                /*'template',*/
                'textarea',
                'time',
                'u',
                'tt',
                'var',
                'video',
                /*'wbr',*/
            ]).includes(prop),
        },
        text: {
            type: String,
            default: '',
        },
        textPalette: {
            type: String,
            default: 'default',
        },
        textColor: {
            type: String,
            default: 'default',
        },
    })

</script>


<template>

    <VueTwEl
        :bgPalette="bgPalette"
        :bgColor="bgColor"
        :borderPalette="borderPalette"
        :borderColor="borderColor"
        :tag="tag"
        :text="text"
        :textPalette="textPalette"
        :textColor="textColor"
    >
        <slot/>
    </VueTwEl>

</template>
