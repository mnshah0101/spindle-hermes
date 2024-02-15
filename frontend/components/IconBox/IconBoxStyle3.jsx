import React from 'react';
import Icon from '../Icon';

export default function IconBoxStyle3({ title, subTitle, iconClass, variant }) {
  return (
    <div className="card rounded-4 border-0 h-100">
      <div className="card-body">
        <div className="feature">
          <div className="feature-media">
            <div
              className={`media media-middle media-xl ${
                variant ? variant : 'text-info bg-info'
              } bg-opacity-20 rounded-3`}
            >
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
