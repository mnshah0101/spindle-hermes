import React from 'react';

export default function ContactInfoList({ title, menuItems }) {
  return (
    <div className="wgs">
      <h6 className="wgs-title overline-title text-heading">{title}</h6>
      <ul className="list gy-3">
        {menuItems?.map((item, index) => (
          <li key={index}>
            <em className={`icon text-primary fs-5 ${item.iconClass}`} />{' '}
            <span>{item.info}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
