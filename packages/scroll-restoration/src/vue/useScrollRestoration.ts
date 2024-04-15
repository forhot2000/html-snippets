import { createScrollRestoration } from '../lib/scrollRestoration';

const scrollRestoration = createScrollRestoration();

export function useScrollRestoration() {
  return scrollRestoration;
}
