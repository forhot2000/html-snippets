import { useEffect } from 'react';
import { useHistoryRestoration } from '../lib/useHistoryRestoration';

export default function HistoryRestorationDone() {
  const historyRestoration = useHistoryRestoration();
  useEffect(() => {
    // scroll to saved scroll position after link list rendered
    historyRestoration.done();
  }, []);
  return null;
}
