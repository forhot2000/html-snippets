import React, { Suspense, lazy } from 'react';
import { Link, service } from '../lib/service';
import HistoryRestorationDone from './HistoryRestorationDone';
import LinkList from './LinkList';
import Loading from './Loading';

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
      <HistoryRestorationDone />
    </Suspense>
  );
}
