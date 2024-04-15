# historyRestoration

解决刷新异步加载页面时无法正确保持 scroll position 的问题。

## 用法

```js
import historyRestoration from 'history-restoration';

historyRestoration({
  async load() {
    // async load your scripts and data
    // then, render html
  },
});
```

## 参考

- [Angular：如何在导航时保存滚动位置](https://dev.to/johncarroll/angular-how-to-refresh-scroll-position-on-back-5e1b)
- [History.scrollRestoration - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration)
