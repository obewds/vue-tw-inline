<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import VueTwInline from '@/components/VueTwInline.vue'

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">

        <div class="flex flex-col space-y-2">


            <VueTwInline tag="span" text="VueTwInline's with a default text palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" text-color="default"/>

                <VueTwInline tag="span" text="(div) primary" text-color="primary"/>

                <VueTwInline tag="span" text="(div) secondary" text-color="secondary"/>

                <VueTwInline tag="span" text="(div) error" text-color="error"/>

                <VueTwInline tag="span" text="(div) success" text-color="success"/>
            
            </div>

            <VueTwInline tag="span" text="VueTwInline's with a default border palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" border-color="default" class="border"/>

                <VueTwInline tag="span" text="(div) primary" border-color="primary" class="border"/>

                <VueTwInline tag="span" text="(div) secondary" border-color="secondary" class="border"/>

                <VueTwInline tag="span" text="(div) error" border-color="error" class="border"/>

                <VueTwInline tag="span" text="(div) success" border-color="success" class="border"/>

            </div>

            <VueTwInline tag="span" text="VueTwInline's with a default palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" bg-color="default"/>

                <VueTwInline tag="span" text="(div) primary" bg-color="primary"/>

                <VueTwInline tag="span" text="(div) primary" bg-color="secondary"/>

                <VueTwInline tag="span" text="(div) primary" bg-color="error"/>

                <VueTwInline tag="span" text="(div) primary" bg-color="success"/>

            </div>

            <VueTwInline tag="span" text="VueTwInline's with a console palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" bg-palette="console" bg-color="default"/>

                <VueTwInline tag="span" text="(div) primary" bg-palette="console" bg-color="primary"/>

                <VueTwInline tag="span" text="(div) secondary" bg-palette="console" bg-color="secondary"/>

                <VueTwInline tag="span" text="(div) error" bg-palette="console" bg-color="error"/>

                <VueTwInline tag="span" text="(div) success" bg-palette="console" bg-color="success"/>

            </div>

            <VueTwInline tag="span" text="VueTwInline's with a monochromatic palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" bg-palette="monochromatic" bg-color="default"/>

                <VueTwInline tag="span" text="(div) primary" bg-palette="monochromatic" bg-color="primary"/>

                <VueTwInline tag="span" text="(div) secondary" bg-palette="monochromatic" bg-color="secondary"/>

                <VueTwInline tag="span" text="(div) error" bg-palette="monochromatic" bg-color="error"/>

                <VueTwInline tag="span" text="(div) success" bg-palette="monochromatic" bg-color="success"/>

            </div>

            <VueTwInline tag="span" text="VueTwInline's with a pastel palette" style="block"/>

            <div class="flex justify-center flex-wrap space-x-4 px-4">

                <VueTwInline tag="span" text="(div) default" bg-palette="pastel" bg-color="default"/>

                <VueTwInline tag="span" text="(div) primary" bg-palette="pastel" bg-color="primary"/>

                <VueTwInline tag="span" text="(div) secondary" bg-palette="pastel" bg-color="secondary"/>

                <VueTwInline tag="span" text="(div) error" bg-palette="pastel" bg-color="error"/>

                <VueTwInline tag="span" text="(div) success" bg-palette="pastel" bg-color="success"/>

            </div>

        </div>

    </div>

</template>
