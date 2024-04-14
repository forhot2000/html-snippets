const unused = '';

history.scrollRestoration = 'manual';

export function createHistoryRestoration() {
  function onScroll() {
    // 每次滚动时记录最新的位置
    const scrollTop = document.scrollingElement.scrollTop;
    const state = {
      ...history.state,
      scrollTop,
    };
    history.replaceState(state, unused);
  }

  function onLoad() {
    console.log('onLoad');

    // 加载页面后滚动页面到记录的位置
    const scrollTop = history.state?.scrollTop;
    console.log('restore scroll position: ' + scrollTop);
    if (scrollTop) {
      document.scrollingElement.scrollTo({
        top: scrollTop,
      });
    }

    // 监听页面滚动
    document.addEventListener('scroll', onScroll);
  }

  function unmount() {
    // 取消监听页面滚动
    document.removeEventListener('scroll', onScroll);
  }

  async function load(loader) {
    await loader();
    onLoad();
  }

  return {
    onLoad,
    unmount,
    load,
  };
}
