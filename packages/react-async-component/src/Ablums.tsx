import React from 'react';

export default function Ablums({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
