import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle7({
  title,
  subTitle,
  iconClass,
  iconBoxBgClass,
  href,
}) {
  return (
    <Link
      href={href}
      className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
    >
      <div className="card-body">
        <div className="feature">
          <div className="feature-media">
            <div
              className={`media media-middle media-xl ${iconBoxBgClass} rounded-pill`}
            >
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text text-base">
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
