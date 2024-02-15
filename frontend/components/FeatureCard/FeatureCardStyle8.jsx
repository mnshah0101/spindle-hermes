import Image from 'next/image';
import React from 'react';

export default function FeatureCardStyle8({
  number,
  title,
  subTitle,
  imgUrl,
  imgBgClass,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center flex-md-row-reverse align-items-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className={`rounded-4 ${imgBgClass} p-5 pe-0`}>
            <div className="block-gfx me-n4">
              <Image
                className="w-100 rounded-3 shadow-sm"
                src={imgUrl}
                alt="Feature"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="block-text">
            <div className="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
              {number}
            </div>
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
