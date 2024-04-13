import './style.css';

const currentUrl = document.getElementById('currentUrl');

const router = createRouter({
  onChange(href, state) {
    console.log(href, state);
    currentUrl.innerText = href;
  },
});

document.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    router.pushState(e.target.href, {
      rnd: Math.random(),
    });
  })
);

document.addEventListener('scroll', (e) => {
  const unused = '';
  const scrollTop = document.scrollingElement.scrollTop;
  history.replaceState(
    {
      ...history.state,
      scrollTop,
    },
    unused
  );
});

function createRouter({ onChange }) {
  const unused = '';

  let currentHref = window.location.href;
  onChange(currentHref, history.state);

  window.addEventListener('popstate', (e) => {
    const href = window.location.href;
    const state = e.state;
    if (href !== currentHref) {
      onChange(href, state);
    }
  });

  function pushState(href, state) {
    history.pushState(state, unused, href);
    onChange(href, state);
  }

  return { pushState };
}
