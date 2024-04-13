import './style.css';

const html = document.getElementById('html-content').textContent;
const root = document.getElementById('app');

historyRestoration({
  async loader() {
    // 模拟延时加载页面
    console.log('load...');
    await delay(300);
    root.innerHTML = html;
    console.log('load finish');
  },
});

async function historyRestoration({ loader }) {
  const unused = '';
  const onLoad = () => {
    console.log('onLoad');

    // 加载页面后滚动页面到记录的位置
    const scrollTop = history.state?.scrollTop;
    if (scrollTop) {
      document.scrollingElement.scrollTo({
        top: scrollTop,
      });
    }

    // 每次滚动时记录最新的位置
    document.addEventListener('scroll', () => {
      const scrollTop = document.scrollingElement.scrollTop;
      history.replaceState({ scrollTop }, unused);
    });
  };

  history.scrollRestoration = 'manual';
  await loader();
  onLoad();
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
