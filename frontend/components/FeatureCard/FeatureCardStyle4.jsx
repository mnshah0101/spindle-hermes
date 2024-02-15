import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

export default function FeatureCardStyle4({
  number,
  title,
  subtitle,
  featureList,
  imgUrl,
  svgBgUrl,
  svgBgUrlClass,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-between justify-content-xl-center align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="block-gfx">
            <img className={svgBgUrlClass} src={svgBgUrl} alt="SVG" />
            <Image
              className="w-100 rounded-3 shadow-sm"
              src={imgUrl}
              alt="Feature"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-lg-6 offset-xl-1">
          <div className="block-text">
            <h6 className="text-primary">{number}</h6>
            {title && <h3 className="title">{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
            {featureList && (
              <ul className="list gy-2">
                {featureList.map((item, index) => (
                  <li key={index}>
                    <Icon icon="dot" className="icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
