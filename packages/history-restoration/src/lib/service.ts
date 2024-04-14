function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getLinks(): Promise<Link[]> {
  await delay(1000);
  return [
    { href: '/', label: 'Home' },
    { href: '/react', label: 'React' },
    { href: '/vue', label: 'Vue' },
    { href: '/about', label: 'About' },
  ];
}

export type Link = {
  href: string;
  label: string;
};

export const service = {
  getLinks,
};
