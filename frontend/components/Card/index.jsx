import Image from 'next/image';
import React from 'react';

export default function Card({
  title,
  subTitle,
  imgUrl,
  imgAlt,
  imgHeight,
  imgWidth,
}) {
  return (
    <div className="feature feature-inline">
      <div className="feature-text me-auto">
        <h4 className="title">{title}</h4>
        <p>{subTitle}</p>
      </div>
      <div className="feature-decoration flex-shrink-0 ms-4">
        <Image src={imgUrl} alt={imgAlt} height={imgHeight} width={imgWidth} />
      </div>
    </div>
  );
}
