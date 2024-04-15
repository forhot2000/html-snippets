import React, { StrictMode } from 'react';
import AsyncLinkList from './AsyncLinkList';
import LargeBlock from './LargeBlock';
import PoweredByReact from './PoweredByReact';

export default function App() {
  return (
    <StrictMode>
      <LargeBlock />
      <LargeBlock />
      <LargeBlock />
      <AsyncLinkList />
      <PoweredByReact />
      <LargeBlock />
      <LargeBlock />
    </StrictMode>
  );
}
