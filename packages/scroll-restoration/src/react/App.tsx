import React, { StrictMode } from 'react';
import AsyncLinkList from './AsyncLinkList';
import LargeBlock from './LargeBlock';
import PoweredByReact from './PoweredByReact';

export default function App() {
  return (
    <StrictMode>
      <main>
        <h2>React page</h2>
        <AsyncLinkList />
        <LargeBlock />
        <LargeBlock />
        <LargeBlock />
        <AsyncLinkList />
        <LargeBlock />
        <LargeBlock />
        <AsyncLinkList />
      </main>
      <footer>
        <PoweredByReact />
      </footer>
    </StrictMode>
  );
}
