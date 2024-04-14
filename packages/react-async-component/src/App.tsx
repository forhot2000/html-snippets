import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Ablums from './Ablums';
import service from './service';

export default function App() {
  return (
    <>
      <h2>component</h2>
      <ErrorBoundary fallback={<div>something wrong!</div>}>
        <Ablums data={{ id: 1, name: 'test' }} />
      </ErrorBoundary>

      <h2>async component</h2>
      <ErrorBoundary fallback={<div>something wrong!</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <AsyncAblums1 />
        </Suspense>
      </ErrorBoundary>

      <h2>async component with fetch data error</h2>
      <ErrorBoundary fallback={<div>something wrong!</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <AsyncAblums2 />
        </Suspense>
      </ErrorBoundary>

      <h2>async component with component error</h2>
      <ErrorBoundary fallback={<div>something wrong!</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <AsyncAblums3 />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

const AsyncAblums1 = lazy(async () => {
  const data = await service.getData({ limit: 3 });
  function AsyncAblums() {
    return <Ablums data={data} />;
  }
  return { default: AsyncAblums };
});

const AsyncAblums2 = lazy(async () => {
  const data = await service.throwError();
  function AsyncAblums() {
    return <Ablums data={data} />;
  }
  return { default: AsyncAblums };
});

const AsyncAblums3 = lazy(async () => {
  const data = await service.getData({ limit: 3 });
  function AsyncAblums() {
    throw new Error('error in component');
    return <Ablums data={data} />;
  }
  return { default: AsyncAblums };
});
