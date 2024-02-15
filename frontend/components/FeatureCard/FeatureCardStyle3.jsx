import Image from 'next/image';
import React from 'react';

export default function FeatureCardStyle3({
  number,
  title,
  subtitle,
  imgUrl,
  svgBgUrl,
  svgBgUrlClass,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-between justify-content-xl-center flex-md-row-reverse align-items-center">
        <div className="col-lg-5 col-md-6 offset-xl-1">
          <div className="block-gfx position-relative">
            <img className={svgBgUrlClass} src={svgBgUrl} alt="SVG" />
            <Image
              className="w-100 rounded-3 shadow-sm"
              src={imgUrl}
              alt="Feature"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="block-text">
            {number && <h6 className="text-primary">{number}</h6>}
            {title && <h3 className="title">{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
