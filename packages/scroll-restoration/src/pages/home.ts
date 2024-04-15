import { createScrollRestoration } from '../lib/scrollRestoration';

const html = document.getElementById('html-content')!.textContent!;
const root = document.getElementById('app')!;

const scrollRestoration = createScrollRestoration();

scrollRestoration.load(async () => {
  // 模拟延时加载页面
  console.log('load...');
  await delay(300);
  root.innerHTML = html;
  console.log('load finish');
});

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
