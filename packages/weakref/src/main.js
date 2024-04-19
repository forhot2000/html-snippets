const output = document.getElementById('output');

const checkAutoStart = document.getElementById('chk_auto_start');

// start new request by click button
document.getElementById('btn_new_req').addEventListener('click', () => {
  startNewRequest();
});

// start new request every 100ms
setInterval(() => checkAutoStart.checked && startNewRequest(), 100);

// refresh list every 1s
setInterval(() => listContext(), 1000);

const map = new Map();

// keep last request not be destroyed by gc
let currentRequest;

let seed = 1;

function nextId() {
  return seed++;
}

function startNewRequest() {
  console.log('start new request');
  const req = {
    id: nextId(),
    data: new Array(1000000).fill({ rnd: Math.random() }),
  };
  const context = {
    req: new WeakRef(req),
    alive() {
      return this.req.deref() !== undefined;
    },
  };
  map.set(req.id, context);
  currentRequest = req;

  // refresh list
  listContext();
}

function listContext() {
  const result = Array.from(map.entries()).map(([k, v]) => {
    return k + ': ' + (v.alive() ? 'alive' : 'cleared');
  });
  output.innerText = result.length > 10 ? '...\n' + result.slice(-10).join('\n') : result.join('\n');
  console.log(result);
}
