import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle8({
  title,
  subTitle,
  btnLink,
  btnText,
  iconClass,
  iconBoxBgClass,
}) {
  return (
    <div className="card rounded-4 border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
          <div className="feature-media">
            <div
              className={`media media-middle media-xl border border-1 ${iconBoxBgClass} border-opacity-25 rounded-pill`}
            >
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text">
            <h4 className="title">{title}</h4>
            <p className="line-clamp-2">{subTitle}</p>
            <Link className="link link-primary" href={btnLink}>
              <span className="fw-regular">{btnText}</span>
              <Icon icon="arrow-long-right" className="icon fs-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
