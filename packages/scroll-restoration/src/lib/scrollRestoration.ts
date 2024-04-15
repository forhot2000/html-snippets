const unused = '';

history.scrollRestoration = 'manual';

export function createScrollRestoration() {
  let waitQueueLength = 0;
  console.log('reset scrollRestoration.waitQueueLength: ' + waitQueueLength);

  function onScroll() {
    // 每次滚动时记录最新的位置
    const scrollTop = document.scrollingElement!.scrollTop;
    const state = {
      ...history.state,
      scrollTop,
    };
    history.replaceState(state, unused);
  }

  function done() {
    waitQueueLength--;
    console.log('decrease scrollRestoration.waitQueueLength: ' + waitQueueLength);
    if (!waitQueueLength) {
      // 加载页面后滚动页面到记录的位置
      const scrollTop = history.state?.scrollTop;
      console.log('restore scroll position: ' + scrollTop);
      if (scrollTop) {
        document.scrollingElement!.scrollTo({
          top: scrollTop,
        });
      }

      mount();
    }
  }

  function mount() {
    // 监听页面滚动
    document.addEventListener('scroll', onScroll);
  }

  function unmount() {
    // 取消监听页面滚动
    document.removeEventListener('scroll', onScroll);
  }

  async function load(loader: () => Promise<void>) {
    waitQueueLength++;
    console.log('increase scrollRestoration.waitQueueLength: ' + waitQueueLength);
    await loader();
    done();
  }

  function wait<T>(loader: () => Promise<T>) {
    waitQueueLength++;
    console.log('increase scrollRestoration.waitQueueLength: ' + waitQueueLength);
    return loader();
  }

  return {
    unmount,
    load,
    wait,
    done,
  };
}

export type ScrollRestoration = ReturnType<typeof createScrollRestoration>;
