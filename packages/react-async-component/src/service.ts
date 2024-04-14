async function getData({ limit = 10 }: { limit: number }): Promise<any[]> {
  await delay(1000);
  return new Array(limit).fill(0).map((_, i) => {
    return {
      id: i,
      name: 'user' + i,
    };
  });
}

async function throwError(): Promise<any[]> {
  throw new Error('bad operation!');
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default { getData, throwError };
