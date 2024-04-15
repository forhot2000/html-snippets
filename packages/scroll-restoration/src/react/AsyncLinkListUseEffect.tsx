import React from 'react';
import { Link, service } from '../lib/service';
import { useHistoryRestoration } from '../lib/useHistoryRestoration';
import LinkList from './LinkList';
import Loading from './Loading';

// same as LinkListWithSuspense
export default function AsyncLinkListUseEffect() {
  const [links, setLinks] = React.useState<Link[]>([]);
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
