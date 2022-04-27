// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-tw-inline/',
    title: 'VueTwInline.vue',
    description: 'A documentation site for the VueTwInline component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-tw-inline" },
            { text: "GitHub", link: "https://github.com/obewds/vue-tw-inline" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
