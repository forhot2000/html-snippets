import React from 'react';
import { Link } from '../lib/service';
import LinkListItem from './LinkListItem';

export default function LinkList({ links }: { links: Link[] }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkListItem key={link.href} link={link} />
      ))}
    </ul>
  );
}
