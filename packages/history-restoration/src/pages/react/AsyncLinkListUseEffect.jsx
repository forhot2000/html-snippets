import React from 'react';
import { service } from '../../service.js';
import { useHistoryRestoration } from '../../useHistoryRestoration.js';
import LinkList from './LinkList.jsx';
import Loading from './Loading.jsx';

// same as LinkListWithSuspense
export default function AsyncLinkListUseEffect() {
  const [links, setLinks] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  const historyRestoration = useHistoryRestoration();

  React.useEffect(() => {
    async function load() {
      const links = await service.getLinks();
      setLinks(links);
    }
    load().finally(() => {
      setPending(false);
      historyRestoration.done();
    });
  }, []);

  if (pending) {
    return <Loading />;
  }

  return <LinkList links={links} />;
}
