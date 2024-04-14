import React, { StrictMode } from 'react';
import AsyncLinkList from './AsyncLinkList.jsx';
import LargeBlock from './LargeBlock.jsx';
import PoweredByReact from './PoweredByReact.jsx';

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
