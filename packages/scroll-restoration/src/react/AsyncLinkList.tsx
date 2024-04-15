import React, { Suspense } from 'react';
import { service } from '../lib/service';
import LinkList from './LinkList';
import Loading from './Loading';
import { useAsyncComponent } from './useAsyncComponent';

export default function AsyncLinkList() {
  const AsyncLinkListHOC = useAsyncComponent(async () => {
    const links = await service.getLinks();
    return <LinkList links={links} />;
  });
  return (
    <Suspense fallback={<Loading />}>
      <AsyncLinkListHOC />
    </Suspense>
  );
}
