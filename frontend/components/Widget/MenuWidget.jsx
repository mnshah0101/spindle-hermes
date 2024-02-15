import React from 'react';

export default function MenuWidget({ title, menuItems, titleClass }) {
  return (
    <div className="wgs">
      <h6 className={`wgs-title ${titleClass ? titleClass : ''}`}>{title}</h6>
      <ul className="list gy-2 list-link-base">
        {menuItems?.map((item, index) => (
          <li key={index}>
            <a className="link-base" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
