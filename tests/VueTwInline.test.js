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
            tag: 'span',
            text: testString,
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueTwInline.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<span>Test String Value</span>`

    const wrapper = mount(VueTwInline, {
        props: {
            tag: 'span',
        },
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})



test('VueTwInline.vue component does not allow a non-block element tag prop value', async () => {

    const validator = VueTwInline.props.tag.validator

    expect(validator('div')).toBe(false)
    
})
