import React, { StrictMode } from 'react';
import AsyncLinkList from './AsyncLinkList';
import LargeBlock from './LargeBlock';
import PoweredByReact from './PoweredByReact';

export default function App() {
  return (
    <StrictMode>
      <AsyncLinkList />
      <PoweredByReact />
      <LargeBlock />
      <LargeBlock />
      <LargeBlock />
      <AsyncLinkList />
      <PoweredByReact />
      <LargeBlock />
      <LargeBlock />
      <AsyncLinkList />
      <PoweredByReact />
    </StrictMode>
  );
}
