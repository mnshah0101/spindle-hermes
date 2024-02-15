import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle9({
  title,
  subTitle,
  iconClass,
  iconBoxBgClass,
}) {
  return (
    <div className="card rounded-4 border-0 shadow-tiny h-100">
      <div className="card-body">
        <div className="feature">
          <div className="feature-media">
            <div
              className={`media media-middle media-xl media-border ${iconBoxBgClass} rounded-pill`}
            >
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text">
            <h3 className="title">{title}</h3>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
