// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '../../src/components/HelloWorld'
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
    test('spec => test', () => {
        const msg = 'new message'
        const wrapper = mount(HelloWorld, {
            props: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})