import { historyRestoration } from './historyRestoration';

function deffer() {
  let resolve, reject;
  let promise = new Promise(function (_resolve, _reject) {
    resolve = _resolve;
    reject = _reject;
  });
  return { resolve, reject, promise };
}

const deffered = deffer();

historyRestoration({
  async load() {
    await deffered.promise;
  },
});

function done() {
  setTimeout(() => deffered.resolve(), 30);
}

export function useHistoryRestoration() {
  return { done };
}
