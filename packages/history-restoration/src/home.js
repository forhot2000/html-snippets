import './style.css';

const html = document.getElementById('html-content').textContent;
const root = document.getElementById('app');

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 模拟延时加载页面
async function load() {
  console.log('load...');
  await delay(300);
  root.innerHTML = html;
  console.log('load finish');
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
  document.addEventListener('scroll', () => {
    const scrollTop = document.scrollingElement.scrollTop;
    history.replaceState({ scrollTop }, window.location.href);
  });
}

async function main() {
  history.scrollRestoration = 'manual';
  await load();
  onLoad();
}

main();
