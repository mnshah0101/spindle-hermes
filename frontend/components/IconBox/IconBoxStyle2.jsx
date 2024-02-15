import Image from 'next/image';
import React from 'react';

export default function IconBoxStyle2({
  title,
  subTitle,
  imgUrl,
  imgHeight,
  imgWidth,
  variant,
}) {
  return (
    <div className="h-100 px-xl-4 px-xxl-5">
      <div className="feature">
        <div className="feature-media">
          <div
            className={`media media-middle media-xl media-border  rounded-3 ${
              variant ? variant : 'text-bg-danger-soft-outline'
            }`}
          >
            <Image
              src={imgUrl}
              alt="Icon"
              height={imgHeight}
              width={imgWidth}
            />
          </div>
        </div>
        <div className="feature-text">
          <h3 className="title">{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
