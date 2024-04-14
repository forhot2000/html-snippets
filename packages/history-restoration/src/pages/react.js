import React from 'react';
import ReactDOM from 'react-dom/client';
import { service } from '../service';
import { useHistoryRestoration } from '../useHistoryRestoration';
import './style.css';

function App() {
  const [links, setLinks] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  const { done } = useHistoryRestoration();

  React.useEffect(() => {
    async function load() {
      const links = await service.getLinks();
      setLinks(links);
    }
    load().finally(() => {
      setPending(false);
      done();
    });
  }, []);

  if (pending) {
    return React.createElement(Loading);
  }

  return React.createElement(
    'div',
    {},
    // children
    React.createElement(LargeBlock),
    React.createElement(LargeBlock),
    React.createElement(LargeBlock),
    React.createElement(LinkList, { links }),
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

const root = ReactDOM.createRoot(document.getElementById('app'));
const app = React.createElement(App);
root.render(app);
