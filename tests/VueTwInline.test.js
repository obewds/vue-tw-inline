// ./tests/VueTwInline.test.js

import { mount } from '@vue/test-utils'
import VueTwInline from '../src/components/VueTwInline.vue'



test('VueTwInline.vue component mounts successfully', async () => {

    expect(VueTwInline).toBeTruthy()

})



test('VueTwInline.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueTwInline, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueTwInline.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueTwInline, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
