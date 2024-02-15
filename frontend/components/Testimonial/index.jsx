import Image from 'next/image';
import React, { useState } from 'react';
import Icon from '../Icon';

export default function Testimonial({
  title,
  subTitle,
  avatarName,
  avatarDesignation,
  avatarImgUrl,
  review,
}) {
  const numberArray = [];
  for (let i = 1; i <= review; i++) {
    numberArray.push(i);
  }

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">
        <ul className="list list-row gy-0 g-1 mb-3">
          {numberArray.map(item => (
            <li key={item}>
              <Icon icon="star-fill" className="icon fs-5 text-warning" />
            </li>
          ))}
        </ul>
        <h4 className="title mb-3">{title}</h4>
        <p>{subTitle}</p>
        <div className="d-flex pt-3">
          <div className="media media-lg media-middle media-lg rounded-pill">
            <Image src={avatarImgUrl} height={48} width={48} alt="Avatar" />
          </div>
          <div className="media-info ms-3">
            <h5 className="mb-1">{avatarName}</h5>
            <div className="sub-text">{avatarDesignation}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
