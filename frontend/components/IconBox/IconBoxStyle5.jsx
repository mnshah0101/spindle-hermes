import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle5({
  variant,
  iconClass,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <div className="pt-6 h-100">
      <div className="card h-100 rounded-4 border-0 shadow-sm">
        <div className="card-body">
          <div className="feature">
            <div className="feature-media mt-n8 mb-3">
              <div
                className={`media media-3xl media-middle media-border ${variant} rounded-4`}
              >
                <Icon icon={iconClass} className="icon" />
              </div>
            </div>
            <div className="feature-text">
              <h4 className="title">{title}</h4>
              <p>{subTitle}</p>
              <Link className="link link-primary" href={btnUrl}>
                <span>{btnText}</span>
                <Icon icon="arrow-long-right" className="icon fs-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
