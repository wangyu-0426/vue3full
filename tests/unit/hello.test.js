import { mount } from '@vue/test-utils';
import Component from '@/components/ComponentTest.vue';
import Hello from '@/components/HelloWorld.vue';

describe('Component', () => {
    test('Vue instance', () => {
        const wrapper = mount(Component, {
            props: {
                name: 'myName',
            },
        });
        // expect(wrapper.classes()).toContain('bar')
        expect(wrapper.vm.count).toBe(0);
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.vm.count).toBe(1);
        expect(wrapper.find('.msg').text()).toBe('hello');
        expect(wrapper.find('.name').text()).toBe('myName');
        wrapper.unmount();
    });
    test("hello", () => {
        const wrapper = mount(Hello, {
            props: {
                msg: "message!!!"
            }
        })
        // console.log(wrapper)
        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('message!!!')
    })
});
