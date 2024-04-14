import React from 'react';
import ReactDOM from 'react-dom/client';
import { service } from '../service';
import { useHistoryRestoration } from '../useHistoryRestoration';
import './style.css';

function App() {
  return React.createElement(
    'div',
    {},
    // children
    React.createElement(LargeBlock),
    React.createElement(LargeBlock),
    React.createElement(LargeBlock),
    React.createElement(AsyncLinkList),
    React.createElement(PoweredByReact),
    React.createElement(LargeBlock),
    React.createElement(LargeBlock)
  );
}

function Loading() {
  return React.createElement('div', {}, 'loading...');
}

function LinkList({ links }) {
  return React.createElement(
    'ul',
    {},
    links.map((link) => React.createElement(Link, { link, key: link.href }))
  );
}

function Link({ link }) {
  return React.createElement('li', {}, React.createElement('a', { href: link.href }, link.label));
}

function PoweredByReact() {
  return React.createElement('div', {}, 'Powered by React');
}

function LargeBlock() {
  return React.createElement('div', { className: 'large' });
}

const LazyLinkListHOC = React.lazy(async () => {
  const links = await service.getLinks();
  function LazyLinkList() {
    const historyRestoration = useHistoryRestoration();
    React.useEffect(() => {
      // scroll to saved scroll position after link list rendered
      historyRestoration.done();
    }, []);
    return React.createElement(LinkList, { links });
  }
  return { default: LazyLinkList };
});

function AsyncLinkList() {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement(Loading) },
    // children
    React.createElement(LazyLinkListHOC)
  );
}

// same as LinkListWithSuspense
function LinkListWithLoadEffect() {
  const [links, setLinks] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  const historyRestoration = useHistoryRestoration();

  React.useEffect(() => {
    async function load() {
      const links = await service.getLinks();
      setLinks(links);
    }
    load().finally(() => {
      setPending(false);
      historyRestoration.done();
    });
  }, []);

  if (pending) {
    return React.createElement(Loading);
  }

  return React.createElement(LinkList, { links });
}

const root = ReactDOM.createRoot(document.getElementById('app'));
const app = React.createElement(
  React.StrictMode,
  {},
  // children
  React.createElement(App)
);
root.render(app);
