import Image from 'next/image';
import React from 'react';

export default function DatabaseCard({
  title,
  subTitle,
  imgUrl,
  imgAlt
}) {
  return (
    <div className="card bg-gradient-light border-0 h-100">
      <div className="card-body p-3 d-flex flex-column align-items-center">
        <div className="feature-decoration flex-shrink-0 mb-3">
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={50}
            height={50}
          />
        </div>
        <div className="feature-text text-center">
          <h4 className="title">{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}