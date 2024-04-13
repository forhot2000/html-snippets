const unused = '';

history.scrollRestoration = 'manual';

function onScroll() {
  const scrollTop = document.scrollingElement.scrollTop;
  history.replaceState({ scrollTop }, unused);
}

function onLoad() {
  console.log('onLoad');

  // 加载页面后滚动页面到记录的位置
  const scrollTop = history.state?.scrollTop;
  if (scrollTop) {
    document.scrollingElement.scrollTo({
      top: scrollTop,
    });
  }
  // 每次滚动时记录最新的位置
  document.addEventListener('scroll', onScroll);
}

async function historyRestoration({ loader }) {
  await loader();
  onLoad();
}

export default historyRestoration;
