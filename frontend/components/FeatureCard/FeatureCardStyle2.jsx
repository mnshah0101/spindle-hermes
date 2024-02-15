import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

export default function FeatureCardStyle2({
  imgUrl,
  imgAlt,
  iconUrl,
  title,
  subTitle,
  featureList,
  variant,
  gradientVariant,
}) {
  return (
    <div
      className={`${
        variant ? variant : 'bg-primary'
      } bg-opacity-10 p-5 p-lg-6 rounded-4`}
    >
      <div className="row g-gs flex-lg-row-reverse justify-content-between align-items-center">
        <div className="col-lg-6 col-xl-5">
          <div
            className={`rounded-4 ${
              gradientVariant ? gradientVariant : 'bg-gradient-primary'
            } bg-opacity-50 p-5 pb-0`}
          >
            <div className="block-gfx">
              <Image
                className="w-100 rounded-top-3 shadow-sm"
                src={imgUrl}
                alt={imgAlt}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xxl-5">
          <div className="block-text pe-xl-5">
            <Image
              className="h-3rem mb-3"
              src={iconUrl}
              alt="Icon"
              height={48}
              width={48}
            />
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
            <ul className="list gy-3">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="check-circle-fill"
                    className="icon text-info fs-5"
                  />
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
