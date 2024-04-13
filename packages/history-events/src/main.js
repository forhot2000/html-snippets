import createRouter from './create-router';
import './style.css';

const currentUrlLabel = document.getElementById('currentUrl');

const router = createRouter({
  onChange(href, state) {
    console.log(href, state);
    currentUrlLabel.innerText = href;

    const currentHref = window.location.href;
    document.querySelectorAll('.nav a').forEach((link) => {
      const targetHref = link.href;
      if (currentHref === targetHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },
});

document.querySelectorAll('.nav a').forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const currentHref = window.location.href;
    const targetHref = e.target.href;
    if (currentHref !== targetHref) {
      router.pushState(targetHref, {
        rnd: Math.random(),
      });
    }
  })
);

document.addEventListener('scroll', (e) => {
  const scrollTop = document.scrollingElement.scrollTop;
  router.replaceState({
    ...history.state,
    scrollTop,
  });
});
