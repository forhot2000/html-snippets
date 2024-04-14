import React from 'react';

export default function LinkListItem({ link }) {
  return (
    <li>
      <a href={link.href}>{link.label}</a>
    </li>
  );
}
