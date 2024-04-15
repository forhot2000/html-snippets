import React, { ReactNode, lazy, useEffect, useMemo } from 'react';
import { createScrollRestoration } from '../lib/scrollRestoration';

const scrollRestoration = createScrollRestoration();

export function useAsyncComponent(loader: () => Promise<ReactNode>) {
  return useMemo(() => {
    return lazy(async () => {
      const element = await scrollRestoration.wait(loader);
      let isScrollRestorationDone = false;
      const scrollRestorationDone = () => {
        if (!isScrollRestorationDone) {
          scrollRestoration.done();
          isScrollRestorationDone = true;
        }
      };
      function AwaitedComponent() {
        useEffect(() => {
          scrollRestorationDone();
        }, []);
        return <>{element}</>;
      }
      return { default: AwaitedComponent };
    });
  }, []);
}
