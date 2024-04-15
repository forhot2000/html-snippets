import { Component, VNode, defineAsyncComponent, onMounted } from 'vue';
import { createScrollRestoration } from '../lib/scrollRestoration';
import ErrorMessage from './ErrorMessage.vue';
import Loading from './Loading.vue';

const scrollRestoration = createScrollRestoration();

export function useAsyncComponent(loader: () => Promise<VNode>) {
  return defineAsyncComponent({
    loadingComponent: Loading,
    loader: async () => {
      const element = await scrollRestoration.wait(loader);
      let isScrollRestorationDone = false;
      const scrollRestorationDone = () => {
        if (!isScrollRestorationDone) {
          scrollRestoration.done();
          isScrollRestorationDone = true;
        }
      };
      const AwaitedComponent: Component = {
        name: 'AwaitedComponent',
        setup() {
          onMounted(() => {
            scrollRestorationDone();
          });
          return () => element;
        },
      };
      return AwaitedComponent;
    },
    errorComponent: ErrorMessage,
  });
}
