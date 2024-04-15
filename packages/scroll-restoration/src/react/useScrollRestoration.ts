import { createScrollRestoration } from '../lib/scrollRestoration';

const scrollRestoration = createScrollRestoration();

export function useScrollRestoration() {
  return {
    done() {
      scrollRestoration.onLoad();
    },
  };
}
