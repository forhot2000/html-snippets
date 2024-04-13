const unused = '';

function createRouter({ onChange }) {
  let currentHref = window.location.href;

  function onPopstate(e) {
    const href = window.location.href;
    const state = e.state;
    onChange(href, state);
  }

  function pushState(href, state) {
    if (typeof href === 'object') {
      state = href;
      href = undefined;
    }
    history.pushState(state, unused, href);
    onChange(href, state);
  }

  function replaceState(href, state) {
    if (typeof href === 'object') {
      state = href;
      href = undefined;
    }
    history.replaceState(state, unused, href);
  }

  onChange(currentHref, history.state);
  window.addEventListener('popstate', onPopstate);
  return { pushState, replaceState };
}

export default createRouter;
