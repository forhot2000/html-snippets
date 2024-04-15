import { useEffect } from 'react';
import { useScrollRestoration } from './useScrollRestoration';

export default function ScrollRestorationDone() {
  const scrollRestoration = useScrollRestoration();
  useEffect(() => {
    // scroll to saved scroll position after link list rendered
    scrollRestoration.done();
  }, []);
  return null;
}
