import historyRestoration from './history-restoration';
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

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
