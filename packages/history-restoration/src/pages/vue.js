import { createApp, defineAsyncComponent, h, onMounted } from 'vue';
import { createHistoryRestoration } from '../historyRestoration';
import { service } from '../service';
import './style.css';

const historyRestoration = createHistoryRestoration();

// component
const App = {
  setup() {
    return () =>
      h('div', [
        // children
        h(LargeBlock),
        h(LargeBlock),
        h(LargeBlock),
        h(AsyncLinkList),
        h(PoweredByVue),
        h(LargeBlock),
        h(LargeBlock),
      ]);
  },
};

// component
const AsyncLinkList = defineAsyncComponent(async () => {
  const links = await service.getLinks();
  return {
    setup() {
      onMounted(() => {
        // scroll to saved scroll position after link list rendered
        historyRestoration.onLoad();
      });
      return () => h(LinkList, { links });
    },
  };
});

// component
const LinkList = {
  props: {
    links: Array,
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

const app = createApp(App);
app.mount('#app');
