import { createApp, h } from 'vue';
import { historyRestoration } from '../historyRestoration';
import { service } from '../service';
import './style.css';

// component
const App = {
  props: {
    links: Array(),
  },
  setup(props) {
    const links = props.links;
    return () =>
      h('div', [
        // children
        h(LargeBlock),
        h(LargeBlock),
        h(LargeBlock),
        h(LinkList, { links }),
        h(PoweredByVue),
        h(LargeBlock),
        h(LargeBlock),
      ]);
  },
};

// component
const LinkList = {
  props: {
    links: Array(),
  },
  setup(props) {
    const links = props.links;
    return () =>
      h(
        'ul',
        { class: 'nav' },
        links.map((link) => h(Link, { link }))
      );
  },
};

// component
const Link = {
  props: {
    link: Object,
  },
  setup(props) {
    const { href, label } = props.link;
    return () => h('li', h('a', { href }, label));
  },
};

// component
const PoweredByVue = {
  setup() {
    return () => h('div', 'Powered by Vue');
  },
};

// component
const LargeBlock = {
  setup() {
    return () => h('div', { class: 'large' });
  },
};

async function load() {
  const links = await service.getLinks();
  const app = createApp(App, { links });
  app.mount('#app');
}

historyRestoration({
  load,
});
