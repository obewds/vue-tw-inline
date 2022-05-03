<script setup lang="ts">

    import { VueTwEl } from '@obewds/vue-tw-el'
    import { inlineLevelElementTags } from '@obewds/vue-validators'

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
            default: '',
        },
        tag: {
            type: String,
            required: true,
            validator: (prop: string): boolean => (inlineLevelElementTags).includes(prop),
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
