import { createHistoryRestoration } from './historyRestoration';

const historyRestoration = createHistoryRestoration();

export function useHistoryRestoration() {
  return {
    done() {
      historyRestoration.onLoad();
    },
  };
}
