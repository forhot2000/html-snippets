import React, { Suspense } from 'react';
import { service } from '../../service';
import { useHistoryRestoration } from '../../useHistoryRestoration';
import LinkList from './LinkList.jsx';
import Loading from './Loading.jsx';

const AsyncLinkListHOC = React.lazy(async () => {
  const links = await service.getLinks();
  function LazyLinkList() {
    const historyRestoration = useHistoryRestoration();
    React.useEffect(() => {
      // scroll to saved scroll position after link list rendered
      historyRestoration.done();
    }, []);
    return React.createElement(LinkList, { links });
  }
  return { default: LazyLinkList };
});

export default function AsyncLinkList() {
  return (
    <Suspense fallback={<Loading />}>
      <AsyncLinkListHOC />
    </Suspense>
  );
}
