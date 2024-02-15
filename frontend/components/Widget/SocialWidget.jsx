import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function SocialWidget({ socialList, variant, iconSizeClass }) {
  return (
    <ul className={`btn-list btn-list-inline g-1 ${variant ? variant : ''}`}>
      {socialList.map((item, index) => (
        <li key={index}>
          <Link className="link-base" href={item.href}>
            <Icon icon={item.class} className={`icon ${iconSizeClass}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
