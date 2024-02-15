import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

export default function FeatureCard({
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  subTitle,
  subTitleClass,
  featureList,
  listIconClass,
}) {
  return (
    <div className="section-content">
      <div className="row gx-5 gy-6 align-items-center">
        <div className="col-lg-6 col-xl-6">
          <div className="block-gfx pe-xl-5 pe-lg-3">
            <Image className="rounded-4" src={imgUrl} alt={imgAlt} />
          </div>
        </div>
        <div className="col-lg-6 col-xl-6">
          <div className="block-text">
            <h2 className="title">{title}</h2>
            <p className={`${subTitleClass ? subTitleClass : ''}`}>
              {subTitle}
            </p>
            <ul className="list gy-3">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <Icon icon={listIconClass} className="icon" />
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
