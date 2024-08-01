import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

const appOptions = {
    render() {
        return h(App);
    },
};
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions,
});

export const { bootstrap, mount, unmount } = vueLifecycles;