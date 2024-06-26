import React, { useEffect, useState } from 'react';
import { Link, service } from '../lib/service';
import LinkList from './LinkList';
import Loading from './Loading';
import ScrollRestorationDone from './ScrollRestorationDone';

// same as LinkListWithSuspense
export default function AsyncLinkListUseEffect() {
  const [links, setLinks] = useState<Link[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    async function load() {
      const links = await service.getLinks();
      setLinks(links);
    }
    load().finally(() => {
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Loading />;
  }

  return (
    <>
      <LinkList links={links} />
      <ScrollRestorationDone />
    </>
  );
}
