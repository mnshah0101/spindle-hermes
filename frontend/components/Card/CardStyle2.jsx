import Image from 'next/image';
import React from 'react';

export default function CardStyle2({
  title,
  subTitle,
  imgUrl,
  imgAlt,
  imgHeight,
  imgWidth,
}) {
  return (
    <div className="card bg-gradient-light border-0 h-100">
      <div className="card-body p-3 d-flex">
        <div className="feature feature-inline align-items-center">
          <div className="feature-text me-auto">
            <h4 className="title">{title}</h4>
            <p>{subTitle}</p>
          </div>
          <div className="feature-decoration flex-shrink-0 ms-4 me-n3">
            <Image
              src={imgUrl}
              alt={imgAlt}
              height={imgHeight}
              width={imgWidth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
