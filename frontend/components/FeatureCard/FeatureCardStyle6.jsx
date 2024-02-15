import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

export default function FeatureCardStyle6({
  imgUrl,
  title,
  subTitle,
  subTitleClass,
  title2,
  subTitle2,
  title3,
  subTitle3,
  featureList,
}) {
  return (
    <div className="row g-gs flex-xl-row-reverse">
      <div className="col-xl-6 col-lg-10">
        <div className="block-gfx">
          <Image
            className="w-100 rounded-3"
            src={imgUrl}
            alt="Feature"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="block-text pe-xl-7">
          {title && <h3 className="mb-4">{title}</h3>}
          {subTitle && (
            <p className={`${subTitleClass ? subTitleClass : ''}`}>
              {subTitle}
            </p>
          )}
          {title2 && <h4>{title2}</h4>}
          {subTitle2 && <p>{subTitle2}</p>}
          {title3 && <h4>{title3}</h4>}
          {subTitle3 && <p>{subTitle3}</p>}
          {featureList && (
            <ul className="list gy-3">
              {featureList.map((item, index) => (
                <li key={index}>
                  <Icon
                    icon="check-circle-fill"
                    className="icon text-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
