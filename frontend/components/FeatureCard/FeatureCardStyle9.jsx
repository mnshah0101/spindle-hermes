import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

export default function FeatureCardStyle9({
  number,
  title,
  subTitle,
  featureList,
  imgUrl,
  imgBgClass,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center align-items-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className={`rounded-4 ${imgBgClass} bg-opacity-40 p-5 ps-0`}>
            <div className="block-gfx ms-n4">
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
          <div className="block-text px-xxl-5">
            <div className="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
              {number}
            </div>
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
            <ul className="list gy-2">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <Icon icon="dot" className="icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
