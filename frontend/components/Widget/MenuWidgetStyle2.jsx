import Link from 'next/link';
import React from 'react';

export default function MenuWidgetStyle2({ menuItems, linkColorClass }) {
  return (
    <ul className="list list-row gx-4 justify-content-start justify-content-md-end">
      {menuItems?.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`${linkColorClass ? linkColorClass : 'link-primary'}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
