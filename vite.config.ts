/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  },
  server: {
      open: true,
  },
  test: {
      globals: true,
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueTwInline',
      formats: ['es','cjs','umd','iife'],
      fileName: (format: string) => `vue-tw-inline.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [
        'vue',
        '@obewds/obewds-tw-config',
        '@obewds/vue-component-helpers',
        '@obewds/vue-tw-el',
        '@obewds/vue-validators',
      ],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@obewds/obewds-tw-config': 'ObewdsTwConfig',
          '@obewds/vue-component-helpers': 'VueComponentHelpers',
          '@obewds/vue-tw-el': 'VueTwEl',
          '@obewds/vue-validators': 'VueValidators',
        },
        //sourcemap: true,
      },
      plugins: [
        typescript({
          include: ['index.js'],
          exclude: ['node_modules', 'tests/**/*'],
        }),
      ],
    },
  },
})
