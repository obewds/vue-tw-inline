<script setup lang="ts">

    type VueTwInlineProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<VueTwInlineProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>VueTwInline</slot>
        </template>
    </div>

</template>
