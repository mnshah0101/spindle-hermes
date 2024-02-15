import React from 'react';
import Icon from '../Icon';

export default function IconBox({ title, subTitle, iconClass }) {
  return (
    <div className="card rounded-4 border-0 shadow-tiny h-100">
      <div className="card-body">
        <div className="feature">
          <div className="feature-media">
            <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
              <em className={iconClass} />
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text">
            <h4 className="title">{title}</h4>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
