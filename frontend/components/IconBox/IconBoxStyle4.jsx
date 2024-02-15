import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyleFour({
  title,
  subTitle,
  iconClass,
  iconBoxBgClass,
  variant,
  titleClass,
}) {
  return (
    <div className={`card rounded-4 border-0 shadow-sm ${variant}`}>
      <div className="card-body">
        <div className="feature">
          <div className="feature-media">
            <div
              className={`media media-middle media-lg text-white ${iconBoxBgClass} rounded-3`}
            >
              <Icon icon={iconClass} className="icon" />
            </div>
          </div>
          <div className="feature-text">
            <h4 className={`title ${titleClass ? titleClass : ''}`}>{title}</h4>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
