import React from 'react';
import LinkListItem from './LinkListItem.jsx';

export default function LinkList({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkListItem key={link.href} link={link} />
      ))}
    </ul>
  );
}
