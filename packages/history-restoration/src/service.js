function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getLinks() {
  await delay(1000);
  return [
    { href: '/', label: 'Home' },
    { href: '/react', label: 'React' },
    { href: '/vue', label: 'Vue' },
    { href: '/about', label: 'About' },
  ];
}

export const service = {
  getLinks,
};
