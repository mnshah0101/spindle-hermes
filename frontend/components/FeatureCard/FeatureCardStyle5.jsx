import Image from 'next/image';
import React from 'react';

export default function FeatureCardStyle5({ title, subTitle, imgUrl }) {
  return (
    <div className="feature">
      <div className="feature-image ms-n3">
        <Image src={imgUrl} alt="Feature" placeholder="blur" />
      </div>
      <div className="feature-text">
        <h4 className="title">{title}</h4>
        <p className="fs-6">{subTitle}</p>
      </div>
    </div>
  );
}
