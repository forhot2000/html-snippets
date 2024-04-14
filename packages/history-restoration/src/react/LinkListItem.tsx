import React from 'react';
import { Link } from '../lib/service';

export default function LinkListItem({ link }: { link: Link }) {
  return (
    <li>
      <a href={link.href}>{link.label}</a>
    </li>
  );
}
