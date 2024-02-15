import React from 'react';

export default function BrandsStyle2({ brandList }) {
  return (
    <div className="section-content">
      <ul className="list list-row justify-content-center justify-content-lg-between gx-5 gy-4">
        {brandList.map((item, index) => (
          <li key={index}>
            <img
              className="h-2rem visible-on-light-mode"
              src={item.lightUrl}
              alt="Brand"
            />
            <img
              className="h-2rem visible-on-dark-mode"
              src={item.darkUrl}
              alt="Brand"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
