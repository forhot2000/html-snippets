import React, { Suspense, lazy, useEffect } from 'react';
import { Link, service } from '../lib/service';
import LinkList from './LinkList';
import Loading from './Loading';
import ScrollRestorationDone from './ScrollRestorationDone';

const AsyncLinkListHOC = createAsyncLinkList(() => service.getLinks());

function createAsyncLinkList(loader: () => Promise<Link[]>) {
  return lazy(async () => {
    const links = await loader();
    function AwaitedLinkList() {
      return <LinkList links={links} />;
    }
    return { default: AwaitedLinkList };
  });
}

export default function AsyncLinkList() {
  return (
    <Suspense fallback={<Loading />}>
      <AsyncLinkListHOC />
      <ScrollRestorationDone />
    </Suspense>
  );
}
